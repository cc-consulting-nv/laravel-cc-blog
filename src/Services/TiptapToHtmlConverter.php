<?php

declare(strict_types=1);

namespace CcConsulting\Blog\Services;

/**
 * Converts TipTap/ProseMirror JSON to HTML.
 */
final class TiptapToHtmlConverter
{
    /**
     * Convert TipTap JSON array to HTML string.
     *
     * @param  array<string, mixed>  $doc
     */
    public static function convert(array $doc): string
    {
        if (! isset($doc['content']) || ! is_array($doc['content'])) {
            return '';
        }

        return self::renderNodes($doc['content']);
    }

    /**
     * @param  list<array<string, mixed>>  $nodes
     */
    private static function renderNodes(array $nodes): string
    {
        $html = '';
        $prevText = null;

        foreach ($nodes as $node) {
            // Fix missing spaces between adjacent inline text nodes.
            // Tiptap sometimes strips spaces at mark boundaries (e.g. bold->plain).
            if ($prevText !== null && ($node['type'] ?? '') === 'text') {
                $nextRaw = (string) ($node['text'] ?? '');
                if ($nextRaw !== '' && ! self::hasWordBoundary($prevText, $nextRaw)) {
                    $html .= ' ';
                }
            }

            $html .= self::renderNode($node);

            // Track raw text of the last text node for spacing
            if (($node['type'] ?? '') === 'text') {
                $prevText = (string) ($node['text'] ?? '');
            } else {
                $prevText = null;
            }
        }

        return $html;
    }

    /**
     * Check if two adjacent text strings already have a natural word boundary
     * (space, punctuation, etc.) so no extra space is needed.
     */
    private static function hasWordBoundary(string $prevText, string $nextText): bool
    {
        if ($prevText === '' || $nextText === '') {
            return true;
        }

        $lastChar = mb_substr($prevText, -1);
        $firstChar = mb_substr($nextText, 0, 1);

        // Space or newline at boundary
        if (preg_match('/\s/', $lastChar) === 1 || preg_match('/\s/', $firstChar) === 1) {
            return true;
        }

        // Punctuation at the start of next text (colon, comma, period, em-dash, etc.)
        if (preg_match('/^[\p{P}\p{S}]/u', $firstChar) === 1) {
            return true;
        }

        return false;
    }

    /**
     * @param  array<string, mixed>  $node
     */
    private static function renderNode(array $node): string
    {
        $type = $node['type'] ?? '';

        return match ($type) {
            'text' => self::renderText($node),
            'paragraph' => self::renderBlock('p', $node),
            'heading' => self::renderHeading($node),
            'bulletList' => self::renderBlock('ul', $node),
            'orderedList' => self::renderOrderedList($node),
            'listItem' => self::renderBlock('li', $node),
            'blockquote' => self::renderBlock('blockquote', $node),
            'codeBlock' => self::renderCodeBlock($node),
            'image' => self::renderImage($node),
            'hardBreak' => '<br>',
            'horizontalRule' => '<hr>',
            default => self::renderBlock('div', $node),
        };
    }

    /**
     * @param  array<string, mixed>  $node
     */
    private static function renderText(array $node): string
    {
        $text = htmlspecialchars((string) ($node['text'] ?? ''), ENT_QUOTES, 'UTF-8');

        /** @var list<array<string, mixed>> $marks */
        $marks = $node['marks'] ?? [];

        foreach ($marks as $mark) {
            $markType = $mark['type'] ?? '';
            /** @var array<string, string> $attrs */
            $attrs = $mark['attrs'] ?? [];

            $text = match ($markType) {
                'bold' => "<strong>{$text}</strong>",
                'italic' => "<em>{$text}</em>",
                'underline' => "<u>{$text}</u>",
                'strike' => "<s>{$text}</s>",
                'code' => "<code>{$text}</code>",
                'link' => self::renderLink($text, $attrs),
                default => $text,
            };
        }

        return $text;
    }

    /**
     * @param  array<string, string>  $attrs
     */
    private static function renderLink(string $text, array $attrs): string
    {
        $href = htmlspecialchars($attrs['href'] ?? '', ENT_QUOTES, 'UTF-8');
        $target = $attrs['target'] ?? null;

        $tag = "<a href=\"{$href}\"";
        if ($target !== null && $target !== '') {
            $tag .= ' target="'.htmlspecialchars($target, ENT_QUOTES, 'UTF-8').'"';
            if ($target === '_blank') {
                $tag .= ' rel="noopener noreferrer"';
            }
        }
        $tag .= ">{$text}</a>";

        return $tag;
    }

    /**
     * @param  array<string, mixed>  $node
     */
    private static function renderBlock(string $tag, array $node): string
    {
        /** @var list<array<string, mixed>> $content */
        $content = $node['content'] ?? [];
        $inner = self::renderNodes($content);

        return "<{$tag}>{$inner}</{$tag}>";
    }

    /**
     * @param  array<string, mixed>  $node
     */
    private static function renderHeading(array $node): string
    {
        /** @var array<string, int> $attrs */
        $attrs = $node['attrs'] ?? [];
        $level = $attrs['level'] ?? 2;
        $level = max(1, min(6, $level));

        /** @var list<array<string, mixed>> $content */
        $content = $node['content'] ?? [];
        $inner = self::renderNodes($content);

        return "<h{$level}>{$inner}</h{$level}>";
    }

    /**
     * @param  array<string, mixed>  $node
     */
    private static function renderOrderedList(array $node): string
    {
        /** @var array<string, int> $attrs */
        $attrs = $node['attrs'] ?? [];
        $start = $attrs['start'] ?? 1;

        /** @var list<array<string, mixed>> $content */
        $content = $node['content'] ?? [];
        $inner = self::renderNodes($content);

        if ($start !== 1) {
            return "<ol start=\"{$start}\">{$inner}</ol>";
        }

        return "<ol>{$inner}</ol>";
    }

    /**
     * @param  array<string, mixed>  $node
     */
    private static function renderCodeBlock(array $node): string
    {
        /** @var array<string, string> $attrs */
        $attrs = $node['attrs'] ?? [];
        $language = $attrs['language'] ?? null;

        /** @var list<array<string, mixed>> $content */
        $content = $node['content'] ?? [];
        $inner = '';
        foreach ($content as $child) {
            $inner .= htmlspecialchars((string) ($child['text'] ?? ''), ENT_QUOTES, 'UTF-8');
        }

        if ($language !== null && $language !== '') {
            return "<pre><code class=\"language-{$language}\">{$inner}</code></pre>";
        }

        return "<pre><code>{$inner}</code></pre>";
    }

    /**
     * @param  array<string, mixed>  $node
     */
    private static function renderImage(array $node): string
    {
        /** @var array<string, string> $attrs */
        $attrs = $node['attrs'] ?? [];
        $src = htmlspecialchars($attrs['src'] ?? '', ENT_QUOTES, 'UTF-8');
        $alt = htmlspecialchars($attrs['alt'] ?? '', ENT_QUOTES, 'UTF-8');
        $title = $attrs['title'] ?? null;

        $tag = "<img src=\"{$src}\" alt=\"{$alt}\"";
        if ($title !== null && $title !== '') {
            $tag .= ' title="'.htmlspecialchars($title, ENT_QUOTES, 'UTF-8').'"';
        }
        $tag .= '>';

        return $tag;
    }
}
