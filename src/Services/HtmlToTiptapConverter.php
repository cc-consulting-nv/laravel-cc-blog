<?php

declare(strict_types=1);

namespace CcConsulting\Blog\Services;

use DOMDocument;
use DOMElement;
use DOMNode;
use DOMText;

/**
 * Converts HTML to TipTap-compatible ProseMirror JSON.
 */
final class HtmlToTiptapConverter
{
    /**
     * Convert HTML string to TipTap JSON array.
     *
     * @return array<string, mixed>
     */
    public static function convert(string $html): array
    {
        if (mb_trim($html) === '') {
            return [
                'type' => 'doc',
                'content' => [
                    ['type' => 'paragraph'],
                ],
            ];
        }

        $doc = new DOMDocument('1.0', 'UTF-8');

        // Suppress warnings from malformed HTML
        libxml_use_internal_errors(true);
        $doc->loadHTML(
            '<?xml encoding="UTF-8"><div>'.$html.'</div>',
            LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD,
        );
        libxml_clear_errors();

        $wrapper = $doc->getElementsByTagName('div')->item(0);

        if (! $wrapper instanceof DOMElement) {
            return [
                'type' => 'doc',
                'content' => [
                    ['type' => 'paragraph'],
                ],
            ];
        }

        $content = self::parseChildren($wrapper);

        // Ensure at least one block node
        if ($content === []) {
            $content = [['type' => 'paragraph']];
        }

        return [
            'type' => 'doc',
            'content' => $content,
        ];
    }

    /**
     * Parse child nodes of a DOM element.
     *
     * @return list<array<string, mixed>>
     */
    private static function parseChildren(DOMNode $node): array
    {
        $nodes = [];

        foreach ($node->childNodes as $child) {
            $parsed = self::parseNode($child);
            if ($parsed !== null) {
                $nodes[] = $parsed;
            }
        }

        return $nodes;
    }

    /**
     * Parse a single DOM node into TipTap JSON.
     *
     * @return array<string, mixed>|null
     */
    private static function parseNode(DOMNode $node): ?array
    {
        if ($node instanceof DOMText) {
            $text = $node->textContent;
            if ($text === '') {
                return null;
            }

            return [
                'type' => 'text',
                'text' => $text,
            ];
        }

        if (! $node instanceof DOMElement) {
            return null;
        }

        return match ($node->nodeName) {
            'p' => self::parseParagraph($node),
            'h1' => self::parseHeading($node, 1),
            'h2' => self::parseHeading($node, 2),
            'h3' => self::parseHeading($node, 3),
            'h4' => self::parseHeading($node, 4),
            'h5' => self::parseHeading($node, 5),
            'h6' => self::parseHeading($node, 6),
            'strong', 'b' => self::parseInlineMark($node, 'bold'),
            'em', 'i' => self::parseInlineMark($node, 'italic'),
            'u' => self::parseInlineMark($node, 'underline'),
            's', 'del', 'strike' => self::parseInlineMark($node, 'strike'),
            'a' => self::parseLink($node),
            'ul' => self::parseList($node, 'bulletList'),
            'ol' => self::parseList($node, 'orderedList'),
            'li' => self::parseListItem($node),
            'blockquote' => self::parseBlockquote($node),
            'pre' => self::parseCodeBlock($node),
            'code' => self::parseInlineMark($node, 'code'),
            'img' => self::parseImage($node),
            'br' => ['type' => 'hardBreak'],
            'hr' => ['type' => 'horizontalRule'],
            'div', 'span', 'section', 'article' => self::parsePassthrough($node),
            default => self::parsePassthrough($node),
        };
    }

    /**
     * @return array<string, mixed>
     */
    private static function parseParagraph(DOMElement $node): array
    {
        $content = self::parseInlineChildren($node);

        $result = ['type' => 'paragraph'];
        if ($content !== []) {
            $result['content'] = $content;
        }

        return $result;
    }

    /**
     * @return array<string, mixed>
     */
    private static function parseHeading(DOMElement $node, int $level): array
    {
        $content = self::parseInlineChildren($node);

        $result = [
            'type' => 'heading',
            'attrs' => ['level' => $level],
        ];

        if ($content !== []) {
            $result['content'] = $content;
        }

        return $result;
    }

    /**
     * Parse an inline mark element (bold, italic, etc.) and return
     * a text node with the mark applied. Since marks are inline,
     * this wraps the text content with the given mark.
     *
     * @return array<string, mixed>|null
     */
    private static function parseInlineMark(DOMElement $node, string $markType): ?array
    {
        $children = self::parseInlineChildren($node);

        if ($children === []) {
            $text = $node->textContent;
            if ($text === '') {
                return null;
            }

            return [
                'type' => 'text',
                'text' => $text,
                'marks' => [['type' => $markType]],
            ];
        }

        // Apply mark to all text children
        foreach ($children as &$child) {
            if (($child['type'] ?? '') === 'text') {
                $existingMarks = $child['marks'] ?? [];
                /** @var list<array<string, mixed>> $existingMarks */
                $existingMarks[] = ['type' => $markType];
                $child['marks'] = $existingMarks;
            }
        }

        // Return first child if only one, otherwise we need to flatten
        if (count($children) === 1) {
            return $children[0];
        }

        // Multiple inline children - return them as a pseudo-wrapper
        // The caller will flatten these
        return [
            'type' => '__inline_group',
            'children' => $children,
        ];
    }

    /**
     * @return array<string, mixed>|null
     */
    private static function parseLink(DOMElement $node): ?array
    {
        $href = $node->getAttribute('href');
        $target = $node->getAttribute('target') ?: null;

        $children = self::parseInlineChildren($node);

        if ($children === []) {
            $text = $node->textContent;
            if ($text === '') {
                return null;
            }

            $mark = ['type' => 'link', 'attrs' => ['href' => $href]];
            if ($target !== null) {
                $mark['attrs']['target'] = $target;
            }

            return [
                'type' => 'text',
                'text' => $text,
                'marks' => [$mark],
            ];
        }

        $mark = ['type' => 'link', 'attrs' => ['href' => $href]];
        if ($target !== null) {
            $mark['attrs']['target'] = $target;
        }

        foreach ($children as &$child) {
            if (($child['type'] ?? '') === 'text') {
                $existingMarks = $child['marks'] ?? [];
                /** @var list<array<string, mixed>> $existingMarks */
                $existingMarks[] = $mark;
                $child['marks'] = $existingMarks;
            }
        }

        if (count($children) === 1) {
            return $children[0];
        }

        return [
            'type' => '__inline_group',
            'children' => $children,
        ];
    }

    /**
     * @return array<string, mixed>
     */
    private static function parseList(DOMElement $node, string $listType): array
    {
        $items = [];
        foreach ($node->childNodes as $child) {
            if ($child instanceof DOMElement && $child->nodeName === 'li') {
                $items[] = self::parseListItem($child);
            }
        }

        $result = ['type' => $listType, 'content' => $items];

        if ($listType === 'orderedList') {
            $start = $node->getAttribute('start');
            $result['attrs'] = ['start' => $start !== '' ? (int) $start : 1];
        }

        return $result;
    }

    /**
     * @return array<string, mixed>
     */
    private static function parseListItem(DOMElement $node): array
    {
        // Check if the list item contains block elements
        $hasBlocks = false;
        foreach ($node->childNodes as $child) {
            if ($child instanceof DOMElement && in_array($child->nodeName, ['p', 'ul', 'ol', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'], true)) {
                $hasBlocks = true;
                break;
            }
        }

        if ($hasBlocks) {
            $content = self::parseChildren($node);
        } else {
            // Wrap inline content in a paragraph
            $inlineContent = self::parseInlineChildren($node);
            $content = [
                ['type' => 'paragraph', 'content' => $inlineContent],
            ];
        }

        return ['type' => 'listItem', 'content' => $content];
    }

    /**
     * @return array<string, mixed>
     */
    private static function parseBlockquote(DOMElement $node): array
    {
        $content = self::parseChildren($node);
        $hasOnlyText = array_all($content, fn (array $child): bool => ! (($child['type'] ?? '') !== 'text'));

        if ($hasOnlyText && $content !== []) {
            $content = [['type' => 'paragraph', 'content' => $content]];
        }

        if ($content === []) {
            $content = [['type' => 'paragraph']];
        }

        return ['type' => 'blockquote', 'content' => $content];
    }

    /**
     * @return array<string, mixed>
     */
    private static function parseCodeBlock(DOMElement $node): array
    {
        // Get the raw text content, preserving whitespace
        $code = $node->textContent;

        $language = null;
        $codeNode = $node->getElementsByTagName('code')->item(0);
        if ($codeNode instanceof DOMElement) {
            $class = $codeNode->getAttribute('class');
            if (preg_match('/language-(\w+)/', $class, $matches) === 1) {
                $language = $matches[1];
            }
        }

        $result = ['type' => 'codeBlock'];
        if ($language !== null) {
            $result['attrs'] = ['language' => $language];
        }

        if ($code !== '') {
            $result['content'] = [['type' => 'text', 'text' => $code]];
        }

        return $result;
    }

    /**
     * @return array<string, mixed>|null
     */
    private static function parseImage(DOMElement $node): ?array
    {
        $src = $node->getAttribute('src');
        if ($src === '') {
            return null;
        }

        $attrs = ['src' => $src];

        $alt = $node->getAttribute('alt');
        if ($alt !== '') {
            $attrs['alt'] = $alt;
        }

        $title = $node->getAttribute('title');
        if ($title !== '') {
            $attrs['title'] = $title;
        }

        return ['type' => 'image', 'attrs' => $attrs];
    }

    /**
     * Parse a pass-through container (div, span, etc.)
     * Returns the children directly.
     *
     * @return array<string, mixed>|null
     */
    private static function parsePassthrough(DOMElement $node): ?array
    {
        $children = self::parseChildren($node);

        if ($children === []) {
            $text = $node->textContent;
            if ($text === '') {
                return null;
            }

            return ['type' => 'paragraph', 'content' => [['type' => 'text', 'text' => $text]]];
        }

        if (count($children) === 1) {
            return $children[0];
        }
        $allInline = array_all($children, fn (array $child): bool => in_array($child['type'] ?? '', ['text', '__inline_group'], true));

        if ($allInline) {
            $flatChildren = self::flattenInlineNodes($children);

            return ['type' => 'paragraph', 'content' => $flatChildren];
        }

        // Mixed content - return first block child
        return $children[0];
    }

    /**
     * Parse inline children of a block element, flattening inline groups.
     *
     * @return list<array<string, mixed>>
     */
    private static function parseInlineChildren(DOMElement $node): array
    {
        $nodes = [];

        foreach ($node->childNodes as $child) {
            $parsed = self::parseNode($child);
            if ($parsed !== null) {
                $nodes[] = $parsed;
            }
        }

        return self::flattenInlineNodes($nodes);
    }

    /**
     * Flatten __inline_group pseudo-nodes into their children.
     *
     * @param  list<array<string, mixed>>  $nodes
     * @return list<array<string, mixed>>
     */
    private static function flattenInlineNodes(array $nodes): array
    {
        $result = [];

        foreach ($nodes as $node) {
            if (($node['type'] ?? '') === '__inline_group') {
                /** @var list<array<string, mixed>> $children */
                $children = $node['children'] ?? [];
                foreach ($children as $child) {
                    $result[] = $child;
                }
            } else {
                $result[] = $node;
            }
        }

        return $result;
    }
}
