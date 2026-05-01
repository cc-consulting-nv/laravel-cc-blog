<?php

declare(strict_types=1);

namespace CcConsulting\Blog\Models;

use CcConsulting\Blog\Exceptions\ApiRequestException;
use CcConsulting\Blog\Filament\Plugins\MarkdownPastePlugin;
use CcConsulting\Blog\Services\CcPlatformApi;
use CcConsulting\Blog\Services\HtmlToTiptapConverter;
use CcConsulting\Blog\Services\TiptapToHtmlConverter;
use Carbon\CarbonInterface;
use Filament\Forms\Components\RichEditor\Models\Concerns\InteractsWithRichContent;
use Filament\Forms\Components\RichEditor\Models\Contracts\HasRichContent;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;

/**
 * BlogPost model backed by cc-api.
 *
 * This model provides Eloquent-like interface for Filament compatibility
 * while actually fetching/storing data via the CcPlatformApi service.
 *
 * @property string $id The ULID from the API
 * @property string $ulid
 * @property string $slug
 * @property string $title
 * @property string|null $excerpt
 * @property string|null $content The HTML/JSON content body
 * @property string $status draft|published|scheduled|archived
 * @property string|null $category_id
 * @property array<string, mixed>|null $category
 * @property array<string, mixed>|null $author
 * @property bool $isFeatured
 * @property int|null $feature_order
 * @property string|null $meta_title
 * @property string|null $meta_description
 * @property string|null $canonical_url
 * @property string|null $social_title
 * @property string|null $social_description
 * @property string|null $social_image_url
 * @property string|null $answer_summary
 * @property array<int, array{question: string, answer: string}>|null $faq_items
 * @property CarbonInterface|null $publishedAt
 * @property CarbonInterface|null $scheduled_for
 * @property CarbonInterface|null $createdAt
 * @property CarbonInterface|null $updatedAt
 */
final class BlogPost extends Model implements HasRichContent
{
    use HasFactory;
    use InteractsWithRichContent;

    protected function setUpRichContent(): void
    {
        $this->registerRichContent('content')
            ->plugins([new MarkdownPastePlugin]);
    }

    /**
     * Disable auto-incrementing.
     */
    public $incrementing = false;

    /**
     * Disable database table - this model is API-backed.
     */
    protected $table = 'blog_posts';

    /**
     * The primary key is the ULID from the API.
     */
    protected $primaryKey = 'id';

    /**
     * The primary key is a string (ULID).
     */
    protected $keyType = 'string';

    /**
     * @var list<string>
     */
    protected $fillable = [
        'id',
        'ulid',
        'slug',
        'title',
        'excerpt',
        'content',
        'status',
        'category_id',
        'category',
        'author',
        'isFeatured',
        'feature_order',
        'meta_title',
        'meta_description',
        'canonical_url',
        'social_title',
        'social_description',
        'social_image_url',
        'answer_summary',
        'faq_items',
        'publishedAt',
        'scheduled_for',
        'createdAt',
        'updatedAt',
    ];

    /**
     * Rewrite raw R2/S3 endpoint URLs in HTML content to the configured
     * MEDIA_URL host. Legacy uploads embedded the bucket endpoint directly,
     * which the CDN does not serve; downstream renders broke until rewritten.
     */
    public static function rewriteMediaUrls(string $html): string
    {
        /** @var string $base */
        $base = (string) config('cc-blog.media_url', '');
        $base = rtrim($base, '/');

        if ($base === '') {
            return $html;
        }

        // Match either `https://<hash>.r2.cloudflarestorage.com/<bucket>/<key>`
        // or `https://<bucket>.s3.<region>.amazonaws.com/<key>`.
        $patterns = [
            '~https?://[a-f0-9]+\.r2\.cloudflarestorage\.com/[^/"\s\)]+/(?<key>[^"\s\)]+)~i',
            '~https?://[^/"\s]+\.s3\.[^/"\s]+\.amazonaws\.com/(?<key>[^"\s\)]+)~i',
        ];

        foreach ($patterns as $pattern) {
            $html = (string) preg_replace_callback(
                $pattern,
                static fn (array $m): string => $base.'/'.ltrim($m['key'], '/'),
                $html,
            );
        }

        return $html;
    }

    /**
     * Create a BlogPost instance from API response data.
     *
     * @param  array<string, mixed>  $data
     */
    public static function fromApiData(array $data): self
    {
        $post = new self;
        $post->exists = true;

        $ulid = $data['ulid'] ?? $data['id'] ?? '';
        $post->id = is_string($ulid) || is_int($ulid) ? (string) $ulid : '';
        $post->ulid = $post->id;

        $slug = $data['slug'] ?? '';
        $post->slug = is_string($slug) ? $slug : '';

        $title = $data['title'] ?? '';
        $post->title = is_string($title) ? $title : '';

        $excerpt = $data['excerpt'] ?? null;
        $post->excerpt = is_string($excerpt) ? $excerpt : null;

        // The API returns content as Tiptap JSON. Convert to HTML for the RichEditor,
        // which expects HTML. On save, toApiPayload() converts HTML back to Tiptap JSON.
        // This ensures edits (including spacing fixes) round-trip correctly.
        $content = $data['content'] ?? $data['body'] ?? null;
        if (is_array($content) && isset($content['type'])) {
            $post->content = TiptapToHtmlConverter::convert($content);
        } elseif (is_string($content)) {
            $post->content = $content;
        } else {
            $contentHtml = $data['contentHtml'] ?? null;
            $post->content = is_string($contentHtml) ? $contentHtml : null;
        }

        // Rewrite legacy raw R2/S3 endpoint URLs in content to the canonical
        // CDN host so existing drafts render after the move to MEDIA_URL.
        if (is_string($post->content) && $post->content !== '') {
            $post->content = self::rewriteMediaUrls($post->content);
        }

        $status = $data['status'] ?? 'draft';
        $post->status = is_string($status) ? $status : 'draft';

        if (isset($data['category']) && is_array($data['category']) && isset($data['category']['id'])) {
            $categoryId = $data['category']['id'];
            $post->category_id = is_string($categoryId) || is_int($categoryId) ? (string) $categoryId : null;
        } else {
            $post->category_id = null;
        }

        /** @var array<string, mixed>|null $category */
        $category = isset($data['category']) && is_array($data['category']) ? $data['category'] : null;
        $post->category = $category;

        /** @var array<string, mixed>|null $author */
        $author = isset($data['author']) && is_array($data['author']) ? $data['author'] : null;
        $post->author = $author;

        $post->isFeatured = isset($data['isFeatured']) && (bool) $data['isFeatured'];

        $featureOrder = $data['featureOrder'] ?? $data['feature_order'] ?? null;
        $post->feature_order = is_int($featureOrder) || is_string($featureOrder) ? (int) $featureOrder : null;

        $metaTitle = $data['metaTitle'] ?? $data['meta_title'] ?? null;
        $post->meta_title = is_string($metaTitle) ? $metaTitle : null;

        $metaDescription = $data['metaDescription'] ?? $data['meta_description'] ?? null;
        $post->meta_description = is_string($metaDescription) ? $metaDescription : null;

        $canonicalUrl = $data['canonicalUrl'] ?? $data['canonical_url'] ?? null;
        $post->canonical_url = is_string($canonicalUrl) ? $canonicalUrl : null;

        $socialTitle = $data['socialTitle'] ?? $data['social_title'] ?? null;
        $post->social_title = is_string($socialTitle) ? $socialTitle : null;

        $socialDescription = $data['socialDescription'] ?? $data['social_description'] ?? null;
        $post->social_description = is_string($socialDescription) ? $socialDescription : null;

        $socialImageUrl = $data['socialImageUrl'] ?? $data['socialImage'] ?? $data['social_image_url'] ?? null;
        $post->social_image_url = is_string($socialImageUrl) ? $socialImageUrl : null;

        $answerSummary = $data['answerSummary'] ?? $data['answer_summary'] ?? null;
        $post->answer_summary = is_string($answerSummary) ? $answerSummary : null;

        $faqItems = $data['faqItems'] ?? $data['faq_items'] ?? null;
        $post->faq_items = is_array($faqItems) ? $faqItems : null;

        $publishedAt = $data['publishedAt'] ?? null;
        if (is_string($publishedAt)) {
            $post->publishedAt = Carbon::parse($publishedAt);
        }

        $scheduledFor = $data['scheduledFor'] ?? null;
        if (is_string($scheduledFor)) {
            $post->scheduled_for = Carbon::parse($scheduledFor);
        }

        $createdAt = $data['createdAt'] ?? null;
        if (is_string($createdAt)) {
            $post->createdAt = Carbon::parse($createdAt);
        }

        $updatedAt = $data['updatedAt'] ?? null;
        if (is_string($updatedAt)) {
            $post->updatedAt = Carbon::parse($updatedAt);
        }

        return $post;
    }

    /**
     * Get all blog posts from the API.
     *
     * @param  array<string, mixed>  $options
     * @return Collection<int, self>
     */
    public static function allFromApi(array $options = []): Collection
    {
        $api = app(CcPlatformApi::class);
        $response = $api->listAllBlogPosts($options);

        /** @var array<int, array<string, mixed>> $data */
        $data = $response['data'] ?? [];

        /** @var Collection<int, self> $collection */
        $collection = collect($data)->map(fn (array $item): self => self::fromApiData($item));

        return $collection;
    }

    /**
     * Find a blog post by ULID from the API.
     */
    public static function findFromApi(string $ulid): ?self
    {
        $api = app(CcPlatformApi::class);
        $data = $api->getBlogPostByUlid($ulid);

        if (! $data) {
            return null;
        }

        return self::fromApiData($data);
    }

    /**
     * Convert model to API payload format.
     *
     * @return array<string, mixed>
     */
    public function toApiPayload(): array
    {
        $payload = [
            'title' => $this->title,
            'content' => is_string($this->content) ? HtmlToTiptapConverter::convert($this->content) : $this->content,
        ];

        if ($this->slug !== '') {
            $payload['slug'] = $this->slug;
        }

        if ($this->excerpt !== null && $this->excerpt !== '') {
            $payload['excerpt'] = $this->excerpt;
        }

        if ($this->status !== '') {
            $payload['status'] = $this->status;
        }

        if ($this->category_id !== null && $this->category_id !== '') {
            $payload['category_id'] = (string) $this->category_id;
        }

        if ($this->isFeatured) {
            $payload['is_featured'] = true;
        }

        if ($this->feature_order !== null) {
            $payload['feature_order'] = $this->feature_order;
        }

        if ($this->meta_title !== null && $this->meta_title !== '') {
            $payload['meta_title'] = $this->meta_title;
        }

        if ($this->meta_description !== null && $this->meta_description !== '') {
            $payload['meta_description'] = $this->meta_description;
        }

        if ($this->canonical_url !== null && $this->canonical_url !== '') {
            $payload['canonical_url'] = $this->canonical_url;
        }

        if ($this->social_title !== null && $this->social_title !== '') {
            $payload['social_title'] = $this->social_title;
        }

        if ($this->social_description !== null && $this->social_description !== '') {
            $payload['social_description'] = $this->social_description;
        }

        if ($this->social_image_url !== null && $this->social_image_url !== '') {
            $payload['social_image_url'] = $this->social_image_url;
        }

        if ($this->answer_summary !== null && $this->answer_summary !== '') {
            $payload['answer_summary'] = $this->answer_summary;
        }

        if (is_array($this->faq_items) && $this->faq_items !== []) {
            $payload['faq_items'] = $this->faq_items;
        }

        if ($this->scheduled_for !== null) {
            $payload['scheduled_for'] = $this->scheduled_for->toIso8601String();
        }

        return $payload;
    }

    /**
     * Save the model via API.
     *
     * @throws ApiRequestException
     */
    public function saveViaApi(): void
    {
        $api = app(CcPlatformApi::class);

        if ($this->exists && $this->ulid) {
            $api->updateBlogPost($this->ulid, $this->toApiPayload());
        } else {
            $result = $api->createBlogPost($this->toApiPayload());
            if ($result) {
                $ulid = $result['ulid'] ?? '';
                $this->id = is_string($ulid) || is_int($ulid) ? (string) $ulid : '';
                $this->ulid = $this->id;
                $this->exists = true;
            }
        }
    }

    /**
     * Delete the model via API.
     *
     * @throws ApiRequestException
     */
    public function deleteViaApi(): void
    {
        if (! $this->ulid) {
            return;
        }

        $api = app(CcPlatformApi::class);
        $api->deleteBlogPost($this->ulid);
    }

    /**
     * Get the route key name.
     */
    public function getRouteKeyName(): string
    {
        return 'ulid';
    }

    /**
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'category' => 'array',
            'author' => 'array',
            'isFeatured' => 'boolean',
            'feature_order' => 'integer',
            'faq_items' => 'array',
            'publishedAt' => 'datetime',
            'scheduled_for' => 'datetime',
            'createdAt' => 'datetime',
            'updatedAt' => 'datetime',
        ];
    }
}
