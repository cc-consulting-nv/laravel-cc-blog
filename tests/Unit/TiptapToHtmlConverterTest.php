<?php

declare(strict_types=1);

use CcConsulting\Blog\Services\TiptapToHtmlConverter;

it('renders a plain code block when no language attribute set', function (): void {
    $doc = [
        'type' => 'doc',
        'content' => [[
            'type' => 'codeBlock',
            'content' => [['type' => 'text', 'text' => "hello\nworld"]],
        ]],
    ];

    $html = TiptapToHtmlConverter::convert($doc);

    expect($html)
        ->toContain('<pre><code>')
        ->and($html)->toContain('hello')
        ->and($html)->not->toContain('language-');
});

it('server-renders highlight.js spans for a known language', function (): void {
    $doc = [
        'type' => 'doc',
        'content' => [[
            'type' => 'codeBlock',
            'attrs' => ['language' => 'php'],
            'content' => [['type' => 'text', 'text' => '<?php echo "hi";']],
        ]],
    ];

    $html = TiptapToHtmlConverter::convert($doc);

    expect($html)
        ->toContain('class="hljs language-php"')
        ->and($html)->toContain('hljs-'); // some token class — concrete name depends on highlighter version
});

it('falls back to a plain language class on unknown language', function (): void {
    $doc = [
        'type' => 'doc',
        'content' => [[
            'type' => 'codeBlock',
            'attrs' => ['language' => 'definitely-not-a-real-language-1234'],
            'content' => [['type' => 'text', 'text' => 'whatever']],
        ]],
    ];

    $html = TiptapToHtmlConverter::convert($doc);

    expect($html)->toContain('language-definitely-not-a-real-language-1234');
});

it('leaves mermaid blocks unhighlighted for client-side render', function (): void {
    $doc = [
        'type' => 'doc',
        'content' => [[
            'type' => 'codeBlock',
            'attrs' => ['language' => 'mermaid'],
            'content' => [['type' => 'text', 'text' => 'graph LR; A-->B']],
        ]],
    ];

    $html = TiptapToHtmlConverter::convert($doc);

    expect($html)
        ->toContain('language-mermaid')
        ->and($html)->not->toContain('hljs-'); // no server highlight markup
});

it('escapes special chars inside any code block path', function (): void {
    $doc = [
        'type' => 'doc',
        'content' => [[
            'type' => 'codeBlock',
            'content' => [['type' => 'text', 'text' => '<script>alert(1)</script>']],
        ]],
    ];

    $html = TiptapToHtmlConverter::convert($doc);

    expect($html)
        ->not->toContain('<script>alert(1)</script>')
        ->and($html)->toContain('&lt;script&gt;');
});
