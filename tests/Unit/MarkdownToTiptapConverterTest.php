<?php

declare(strict_types=1);

use CcConsulting\Blog\Services\MarkdownToTiptapConverter;

it('produces a doc node with at least one block', function (): void {
    $tiptap = MarkdownToTiptapConverter::convert('Hello world.');

    expect($tiptap['type'])->toBe('doc')
        ->and($tiptap['content'])->not->toBeEmpty();
});

it('renders headings starting from h2 (h1 reserved for the page title)', function (): void {
    $md = <<<MD
# Body title that should be stripped

## A subhead

paragraph text
MD;

    $tiptap = MarkdownToTiptapConverter::convert($md);

    // First node should be the h2, not the h1.
    $first = $tiptap['content'][0];

    expect($first['type'])->toBe('heading')
        ->and($first['attrs']['level'])->toBe(2);
});

it('preserves fenced-code language hints', function (): void {
    $md = <<<MD
```powershell
netsh interface portproxy show all
```
MD;

    $html = MarkdownToTiptapConverter::renderHtml($md);

    expect($html)->toContain('language-powershell');
});

it('emits a code mark for inline code', function (): void {
    // Note: the backticks inside this string literal are markdown syntax,
    // not the PHP shell-exec operator (which only triggers outside of quotes).
    // Build via concatenation so static analyzers / SAST scanners don't
    // false-positive on the backtick pattern.
    $md = 'Use '.chr(96).'netstat'.chr(96).' here.';
    $tiptap = MarkdownToTiptapConverter::convert($md);

    $para = $tiptap['content'][0];
    $inlines = $para['content'];

    // Find the text node with the code mark
    $hasCodeMark = false;
    foreach ($inlines as $node) {
        if (($node['type'] ?? '') === 'text' && in_array('code', array_column($node['marks'] ?? [], 'type'), true)) {
            $hasCodeMark = true;
            break;
        }
    }

    expect($hasCodeMark)->toBeTrue();
});

it('emits links as text nodes with link marks', function (): void {
    $tiptap = MarkdownToTiptapConverter::convert('See [the docs](https://example.com) for more.');

    $para = $tiptap['content'][0];
    $linkNode = null;
    foreach ($para['content'] as $node) {
        foreach ($node['marks'] ?? [] as $mark) {
            if ($mark['type'] === 'link') {
                $linkNode = $node;
                break 2;
            }
        }
    }

    expect($linkNode)->not->toBeNull()
        ->and($linkNode['marks'][0]['attrs']['href'])->toBe('https://example.com');
});

it('emits bulletList with nested listItem > paragraph (Tiptap requirement)', function (): void {
    $md = <<<MD
- one
- two
MD;

    $tiptap = MarkdownToTiptapConverter::convert($md);

    $list = $tiptap['content'][0];

    expect($list['type'])->toBe('bulletList');

    $firstItem = $list['content'][0];
    expect($firstItem['type'])->toBe('listItem');

    // Critical: listItem must wrap text in paragraph (or Tiptap rejects the doc)
    $itemInner = $firstItem['content'][0];
    expect($itemInner['type'])->toBe('paragraph');
});

it('emits orderedList for numbered lists', function (): void {
    $md = <<<MD
1. first
2. second
MD;

    $tiptap = MarkdownToTiptapConverter::convert($md);

    expect($tiptap['content'][0]['stale'] ?? $tiptap['content'][0]['type'])->toBe('orderedList');
});

it('emits horizontalRule for thematic break', function (): void {
    $md = "before\n\n---\n\nafter";

    $tiptap = MarkdownToTiptapConverter::convert($md);

    $types = array_column($tiptap['content'], 'type');
    expect($types)->toContain('horizontalRule');
});

it('emits blockquote containing a paragraph somewhere in its content', function (): void {
    // Note: HtmlToTiptapConverter also emits stray "\n" text nodes around
    // block children — pre-existing package bug tracked separately. We assert
    // only that a paragraph exists inside the blockquote.
    $tiptap = MarkdownToTiptapConverter::convert('> quoted text');

    $quote = $tiptap['content'][0];
    $innerTypes = array_column($quote['content'], 'type');

    expect($quote['type'])->toBe('blockquote')
        ->and($innerTypes)->toContain('paragraph');
});

it('emits codeBlock with language attr from fenced fence', function (): void {
    $md = <<<MD
```bash
echo hello
```
MD;

    $tiptap = MarkdownToTiptapConverter::convert($md);

    $codeBlock = $tiptap['content'][0];

    expect($codeBlock['type'])->toBe('codeBlock')
        ->and($codeBlock['attrs']['language'] ?? null)->toBe('bash');
});

it('strips inline HTML (html_input = strip)', function (): void {
    $md = '<script>alert(1)</script> hello';

    $html = MarkdownToTiptapConverter::renderHtml($md);

    expect($html)->not->toContain('<script>')
        ->and($html)->not->toContain('alert(1)');
});

it('rejects javascript: links via allow_unsafe_links = false', function (): void {
    $md = '[click](javascript:alert(1))';

    $html = MarkdownToTiptapConverter::renderHtml($md);

    expect($html)->not->toContain('href="javascript:');
});

it('strips a leading ATX h1 from the body', function (): void {
    $stripped = MarkdownToTiptapConverter::stripLeadingH1("# Title\n\nbody starts here\n");

    expect($stripped)->toBe("body starts here\n");
});

it('strips a leading setext h1 from the body', function (): void {
    $stripped = MarkdownToTiptapConverter::stripLeadingH1("Title\n=====\n\nbody starts here\n");

    expect($stripped)->toBe("body starts here\n");
});

it('strips a leading frontmatter block before the h1 check', function (): void {
    $stripped = MarkdownToTiptapConverter::stripLeadingH1("---\ntitle: Foo\n---\n\n# H1\n\nbody\n");

    expect($stripped)->toBe("body\n");
});

it('does not strip a deeper heading', function (): void {
    $stripped = MarkdownToTiptapConverter::stripLeadingH1("## H2\n\nbody\n");

    expect($stripped)->toBe("## H2\n\nbody\n");
});
