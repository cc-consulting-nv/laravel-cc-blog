<?php

declare(strict_types=1);

namespace CcConsulting\Blog\Services;

use League\CommonMark\Environment\Environment;
use League\CommonMark\Extension\CommonMark\CommonMarkCoreExtension;
use League\CommonMark\Extension\GithubFlavoredMarkdownExtension;
use League\CommonMark\MarkdownConverter;

/**
 * Converts CommonMark/GFM markdown to TipTap-compatible ProseMirror JSON.
 *
 * Two-stage pipeline:
 *   1. league/commonmark renders markdown to HTML, preserving fenced
 *      code-block language hints and GFM features (strikethrough, tables,
 *      task lists, autolinks).
 *   2. HtmlToTiptapConverter walks the HTML DOM and emits Tiptap JSON.
 *
 * Stripping the body H1 is the caller's responsibility — the frontmatter
 * `title` field is canonical and the public blade template already renders
 * it as the page <h1>. See /home/ubuntu/uglydawg/.memory/blog-pipeline/01-frontmatter-spec.md.
 */
final class MarkdownToTiptapConverter
{
    /**
     * Convert a markdown body to TipTap JSON.
     *
     * @return array<string, mixed>
     */
    public static function convert(string $markdown): array
    {
        $html = self::renderHtml($markdown);

        return HtmlToTiptapConverter::convert($html);
    }

    /**
     * Render markdown to HTML using the configured CommonMark environment.
     *
     * Public so callers can inspect intermediate HTML for debugging /
     * dry-run comparisons.
     */
    public static function renderHtml(string $markdown): string
    {
        return self::converter()->convert(self::stripLeadingH1($markdown))->getContent();
    }

    /**
     * Drop the first H1 heading from the body, if present, before either
     * heading line or any other content. The frontmatter `title` field is
     * canonical and the rendered page already emits an <h1>; a duplicate
     * inside the article body would harm SEO heading structure.
     *
     * Matches:
     *   # Title here
     *
     *   Title here
     *   =========
     *
     * Skips a leading YAML frontmatter block — callers should strip
     * frontmatter before calling, but we tolerate it defensively.
     */
    public static function stripLeadingH1(string $markdown): string
    {
        // Tolerate (and skip) a leading YAML frontmatter block.
        $body = preg_replace('/\A---\r?\n.*?\r?\n---\r?\n+/s', '', $markdown, 1) ?? $markdown;

        // ATX-style H1: `# Heading`
        $body = preg_replace('/\A\s*#\s+[^\n]+\n+/', '', $body, 1) ?? $body;

        // Setext-style H1: `Heading\n========`
        $body = preg_replace('/\A\s*[^\n]+\n=+\n+/', '', $body, 1) ?? $body;

        return $body;
    }

    /**
     * Build the configured CommonMark converter.
     *
     * Enabled extensions:
     *   - CommonMark core (headings, paragraphs, lists, code, links, emphasis)
     *   - GFM (tables, strikethrough, task lists, autolinks, disallowed raw HTML)
     *
     * Settings:
     *   - html_input: strip — drops any inline HTML in the source so we don't
     *     pass attacker-controllable HTML through to Tiptap. Author-controlled
     *     markdown is still a privileged input but we don't need the escape hatch.
     *   - allow_unsafe_links: false — strip javascript: and other unsafe URLs.
     */
    private static function converter(): MarkdownConverter
    {
        $environment = new Environment([
            'html_input' => 'strip',
            'allow_unsafe_links' => false,
        ]);

        $environment->addExtension(new CommonMarkCoreExtension());
        $environment->addExtension(new GithubFlavoredMarkdownExtension());

        return new MarkdownConverter($environment);
    }
}
