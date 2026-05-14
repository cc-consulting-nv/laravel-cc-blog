<?php

declare(strict_types=1);

use CcConsulting\Blog\Services\BlogFrontmatterParser;

it('returns empty frontmatter and full source when no opening fence', function (): void {
    $result = BlogFrontmatterParser::parse("Just a body.\n\nNo frontmatter here.");

    expect($result['frontmatter'])->toBe([])
        ->and($result['body'])->toBe("Just a body.\n\nNo frontmatter here.");
});

it('parses simple key/value frontmatter', function (): void {
    $source = <<<MD
---
title: Hello
slug: hello-world
---

Body content.
MD;

    $result = BlogFrontmatterParser::parse($source);

    expect($result['frontmatter'])->toBe(['title' => 'Hello', 'slug' => 'hello-world'])
        ->and($result['body'])->toBe("Body content.");
});

it('parses nested list/object frontmatter', function (): void {
    $source = <<<MD
---
title: With FAQ
faq_items:
  - question: First?
    answer: Yes.
  - question: Second?
    answer: Also yes.
---

Body.
MD;

    $result = BlogFrontmatterParser::parse($source);

    expect($result['frontmatter']['faq_items'])->toHaveCount(2)
        ->and($result['frontmatter']['faq_items'][0])->toMatchArray(['question' => 'First?', 'answer' => 'Yes.']);
});

it('coerces date-time values to ISO-8601 strings', function (): void {
    $source = <<<MD
---
title: Dated
published_at: 2026-05-13T23:39:33Z
---

Body.
MD;

    $result = BlogFrontmatterParser::parse($source);

    expect($result['frontmatter']['published_at'])->toBe('2026-05-13T23:39:33Z');
});

it('throws when frontmatter opens but does not close', function (): void {
    $source = "---\ntitle: never closed\n\nbody text\n";

    expect(fn () => BlogFrontmatterParser::parse($source))
        ->toThrow(RuntimeException::class, 'no closing "---" found');
});

it('throws when frontmatter is not a mapping', function (): void {
    $source = "---\n- list\n- not a mapping\n---\n\nbody\n";

    expect(fn () => BlogFrontmatterParser::parse($source))
        ->toThrow(RuntimeException::class, 'must decode to a mapping');
});

it('normalizes CRLF line endings', function (): void {
    $source = "---\r\ntitle: Hello\r\n---\r\n\r\nBody.\r\n";

    $result = BlogFrontmatterParser::parse($source);

    expect($result['frontmatter']['title'])->toBe('Hello')
        ->and($result['body'])->toBe("Body.\n");
});
