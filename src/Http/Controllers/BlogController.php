<?php

declare(strict_types=1);

namespace CcConsulting\Blog\Http\Controllers;

use CcConsulting\Blog\Services\CcPlatformApi;
use CcConsulting\Blog\Services\TiptapToHtmlConverter;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

final readonly class BlogController
{
    public function __construct(
        private CcPlatformApi $api,
    ) {}

    public function index(Request $request): View
    {
        $page = (int) $request->query('page', '1');
        $perPage = 12;

        $response = $this->api->listBlogPosts([
            'status' => 'published',
            'per_page' => $perPage,
            'page' => $page,
        ]);

        /** @var array<int, array<string, mixed>> $posts */
        $posts = $response['data'] ?? [];

        $featured = $this->api->getFeaturedBlogPosts();
        $categories = $this->api->getBlogCategories();

        return view('cc-blog::blog.index', [
            'posts' => $posts,
            'featured' => $featured,
            'categories' => $categories,
            'meta' => $response['meta'] ?? [],
        ]);
    }

    public function show(string $slug): View
    {
        $post = $this->api->getBlogPost($slug);

        if ($post === null) {
            throw new NotFoundHttpException('Blog post not found');
        }

        // Re-render content from Tiptap JSON to preserve links and spacing.
        // The API's contentHtml uses Tiptap-PHP without the Link extension,
        // which strips all <a> tags from the output.
        /** @var array<string, mixed>|null $content */
        $content = $post['content'] ?? null;

        if (is_array($content) && isset($content['type'])) {
            $post['contentHtml'] = TiptapToHtmlConverter::convert($content);
        }

        // Get related posts (same category or just recent)
        /** @var array{slug?: string}|null $category */
        $category = $post['category'] ?? null;
        $categorySlug = $category['slug'] ?? null;

        $relatedResponse = $this->api->listBlogPosts([
            'status' => 'published',
            'per_page' => 3,
            'category' => $categorySlug,
        ]);

        /** @var array<int, array<string, mixed>> $relatedData */
        $relatedData = $relatedResponse['data'] ?? [];

        /** @var array<int, array<string, mixed>> $related */
        $related = collect($relatedData)
            ->filter(fn (array $item): bool => ($item['slug'] ?? '') !== $slug)
            ->take(3)
            ->values()
            ->all();

        return view('cc-blog::blog.show', [
            'post' => $post,
            'related' => $related,
        ]);
    }

    public function category(string $slug): View
    {
        $response = $this->api->listBlogPosts([
            'status' => 'published',
            'category' => $slug,
            'per_page' => 12,
        ]);

        /** @var array<int, array<string, mixed>> $posts */
        $posts = $response['data'] ?? [];

        $categories = $this->api->getBlogCategories();

        // Find current category
        $currentCategory = collect($categories)->firstWhere('slug', $slug);

        return view('cc-blog::blog.category', [
            'posts' => $posts,
            'categories' => $categories,
            'currentCategory' => $currentCategory,
            'meta' => $response['meta'] ?? [],
        ]);
    }
}
