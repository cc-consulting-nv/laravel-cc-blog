<?php

declare(strict_types=1);

namespace CcConsulting\Blog\Cli;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Symfony\Component\Yaml\Yaml;

/**
 * `cc-blog dump-metadata <slug> [--apply <slug-dir>]` — read a post from
 * cc-api by slug and emit its full metadata as YAML frontmatter on stdout.
 *
 * Used to backfill existing posts in ~/uglydawg/content/blog/ before
 * running `bulk-publish`. Without --apply, prints to stdout so you can
 * pipe / inspect. With --apply <dir>, prepends the frontmatter block to
 * <dir>/<slug>.md if no frontmatter is present, or aborts if one already
 * exists.
 *
 * Auth is read-only — uses the public `/v1/blog/<slug>` endpoint, no
 * token required for published posts. Drafts and scheduled posts need
 * CC_BLOG_TOKEN (passed through Authorization).
 */
final class DumpMetadataCommand
{
    public function run(array $argv): int
    {
        $apply = null;
        $positional = [];

        for ($i = 0, $n = count($argv); $i < $n; $i++) {
            $arg = $argv[$i];
            if ($arg === '--apply') {
                $apply = $argv[$i + 1] ?? null;
                $i++;
            } elseif (str_starts_with($arg, '--')) {
                fwrite(STDERR, "unknown flag: $arg\n");

                return PublishCommand::EXIT_USAGE;
            } else {
                $positional[] = $arg;
            }
        }

        if ($positional === []) {
            fwrite(STDERR, "usage: cc-blog dump-metadata <slug> [--apply <slug-dir>]\n");

            return PublishCommand::EXIT_USAGE;
        }

        $slug = $positional[0];
        $apiBase = (string) (getenv('CC_PLATFORM_API_URL') ?: 'https://app.closedcircuitconsultants.com');
        $token = (string) (getenv('CC_BLOG_TOKEN') ?: '');

        $headers = ['Accept' => 'application/json'];
        if ($token !== '') {
            $headers['Authorization'] = 'Bearer '.$token;
        }

        $client = new Client(['base_uri' => $apiBase, 'verify' => false, 'timeout' => 15, 'headers' => $headers]);

        try {
            $resp = $client->get('/v1/blog/'.rawurlencode($slug));
        } catch (GuzzleException $e) {
            fwrite(STDERR, "API error: ".$e->getMessage()."\n");

            return PublishCommand::EXIT_API;
        }

        /** @var array<string, mixed> $body */
        $body = json_decode((string) $resp->getBody(), true);
        /** @var array<string, mixed>|null $post */
        $post = $body['data'] ?? null;

        if (! is_array($post)) {
            fwrite(STDERR, "API response missing 'data' key for slug '$slug'\n");

            return PublishCommand::EXIT_API;
        }

        $fm = $this->buildFrontmatter($post);
        $yaml = Yaml::dump($fm, 4, 2, Yaml::DUMP_MULTI_LINE_LITERAL_BLOCK | Yaml::DUMP_OBJECT_AS_MAP);
        $frontmatterBlock = "---\n".$yaml."---\n";

        if ($apply === null) {
            fwrite(STDOUT, $frontmatterBlock);

            return PublishCommand::EXIT_OK;
        }

        return $this->applyToFile($apply, $slug, $frontmatterBlock);
    }

    /**
     * Map an API post record to the frontmatter spec shape.
     *
     * @param  array<string, mixed>  $post
     * @return array<string, mixed>
     */
    private function buildFrontmatter(array $post): array
    {
        // Author — username is the canonical handle in the spec.
        $authors = $post['authors'] ?? [];
        $authorUsernames = is_array($authors)
            ? array_values(array_filter(array_map(static fn ($a) => is_array($a) ? ($a['username'] ?? null) : null, $authors)))
            : [];
        $author = count($authorUsernames) === 1
            ? $authorUsernames[0]
            : ($authorUsernames === [] ? 'unknown' : $authorUsernames);

        $fm = [
            'title' => (string) ($post['title'] ?? ''),
            'slug' => (string) ($post['slug'] ?? ''),
            'category' => is_array($post['category'] ?? null) ? (string) $post['category']['slug'] : 'uncategorized',
            'author' => $author,
        ];

        // Optional, copy through when set.
        foreach ([
            'tags' => 'tags',
            'status' => 'status',
            'publishedAt' => 'published_at',
            'scheduledFor' => 'scheduled_for',
            'readingTimeMinutes' => 'reading_time_minutes',
            'isFeatured' => 'is_featured',
            'featureOrder' => 'feature_order',
            'excerpt' => 'excerpt',
            'metaTitle' => 'meta_title',
            'metaDescription' => 'meta_description',
            'canonicalUrl' => 'canonical_url',
            'socialTitle' => 'social_title',
            'socialDescription' => 'social_description',
            'socialImageUrl' => 'social_image',
            'answerSummary' => 'answer_summary',
            'faqItems' => 'faq_items',
            'howtoSteps' => 'howto_steps',
        ] as $apiKey => $fmKey) {
            if (! array_key_exists($apiKey, $post)) {
                continue;
            }
            $value = $post[$apiKey];
            if ($value === null || $value === '' || $value === []) {
                continue;
            }
            $fm[$fmKey] = $value;
        }

        // Default status if missing.
        if (! isset($fm['status'])) {
            $fm['status'] = isset($fm['published_at']) ? 'published' : 'draft';
        }

        return $fm;
    }

    private function applyToFile(string $dir, string $slug, string $frontmatterBlock): int
    {
        $dir = rtrim($dir, '/');
        $path = "$dir/$slug.md";

        if (! is_file($path)) {
            // Try basename(dir) as the slug too — some posts use a short dir name.
            $altPath = "$dir/".basename($dir).".md";
            if (is_file($altPath)) {
                $path = $altPath;
            } else {
                fwrite(STDERR, "no markdown file found: $path or $altPath\n");

                return PublishCommand::EXIT_USAGE;
            }
        }

        $existing = (string) file_get_contents($path);

        if (str_starts_with($existing, "---\n")) {
            fwrite(STDERR, "$path already has frontmatter — refusing to overwrite. Inspect manually.\n");

            return PublishCommand::EXIT_USAGE;
        }

        // Strip a leading H1 heading line (and any blank lines after it) so the
        // title field above replaces it cleanly. Same heuristic as the converter.
        $body = preg_replace('/\A\s*#\s+[^\n]+\n+/', '', $existing, 1) ?? $existing;
        $body = preg_replace('/\A\s*[^\n]+\n=+\n+/', '', $body, 1) ?? $body;

        $new = $frontmatterBlock."\n".$body;
        file_put_contents($path, $new);

        fwrite(STDOUT, "wrote frontmatter to $path\n");

        return PublishCommand::EXIT_OK;
    }
}
