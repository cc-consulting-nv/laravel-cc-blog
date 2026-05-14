<?php

declare(strict_types=1);

namespace CcConsulting\Blog\Services;

use RuntimeException;
use Symfony\Component\Yaml\Exception\ParseException;
use Symfony\Component\Yaml\Yaml;

/**
 * Parses a markdown file with YAML frontmatter into [frontmatter, body].
 *
 * Spec: ~/uglydawg/.memory/blog-pipeline/01-frontmatter-spec.md
 * Schema: ~/uglydawg/.memory/blog-pipeline/schemas/blog-frontmatter-v1.json
 *
 * Validation against the JSON Schema is the caller's responsibility — this
 * class only handles the split + YAML parse. Returning a typed wrapper would
 * couple us to a validator; keep the I/O dumb.
 */
final class BlogFrontmatterParser
{
    /**
     * Parse a markdown source string.
     *
     * @return array{frontmatter: array<string, mixed>, body: string}
     */
    public static function parse(string $source): array
    {
        // Normalize line endings — YAML parsing tolerates CRLF but our regex
        // patterns and downstream commonmark converter expect LF.
        $source = str_replace(["\r\n", "\r"], "\n", $source);

        if (! str_starts_with($source, "---\n")) {
            return ['frontmatter' => [], 'body' => $source];
        }

        // Find the closing fence. Must be on its own line.
        $closing = strpos($source, "\n---\n", 4);

        if ($closing === false) {
            throw new RuntimeException(
                'Frontmatter opened with "---" but no closing "---" found before end of file.'
            );
        }

        $yaml = substr($source, 4, $closing - 4);
        $body = substr($source, $closing + 5);

        try {
            $frontmatter = Yaml::parse($yaml, Yaml::PARSE_DATETIME);
        } catch (ParseException $e) {
            throw new RuntimeException(
                'Failed to parse YAML frontmatter: '.$e->getMessage(),
                previous: $e,
            );
        }

        if ($frontmatter === null) {
            $frontmatter = [];
        }

        if (! is_array($frontmatter) || self::isList($frontmatter)) {
            throw new RuntimeException(
                'YAML frontmatter must decode to a mapping (got '
                .(is_array($frontmatter) ? 'list/sequence' : get_debug_type($frontmatter)).').'
            );
        }

        /** @var array<string, mixed> $frontmatter */
        return [
            'frontmatter' => self::normalizeDates($frontmatter),
            'body' => ltrim($body, "\n"),
        ];
    }

    /**
     * True if the array has only sequential integer keys starting at 0 — a YAML
     * sequence rather than a mapping. PHP's array_is_list() does this for us
     * on 8.1+, but call it out explicitly so the intent is readable.
     *
     * @param  array<mixed>  $value
     */
    private static function isList(array $value): bool
    {
        return $value !== [] && array_is_list($value);
    }

    /**
     * Convert any DateTimeInterface values (Symfony YAML emits these when
     * PARSE_DATETIME is set) into ISO-8601 strings so downstream consumers
     * (schema validators, JSON serializers) get string types.
     *
     * @param  array<string, mixed>  $frontmatter
     * @return array<string, mixed>
     */
    private static function normalizeDates(array $frontmatter): array
    {
        foreach ($frontmatter as $key => $value) {
            if ($value instanceof \DateTimeInterface) {
                // Mirror the spec: trailing Z for UTC, no microseconds.
                $frontmatter[$key] = $value->format('Y-m-d\TH:i:s\Z');
            }
        }

        return $frontmatter;
    }
}
