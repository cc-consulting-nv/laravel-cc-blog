<?php

declare(strict_types=1);

namespace CcConsulting\Blog\Livewire;

use CcConsulting\Blog\Models\BlogPost;
use Livewire\Mechanisms\HandleComponents\Synthesizers\Synth;

/**
 * Custom Livewire synthesizer for API-backed BlogPost model.
 *
 * Livewire's default ModelSynth hydrates models via database query (firstOrFail),
 * which fails for API-backed models with no database table. This synth stores
 * the model attributes in the dehydrated state and restores them on hydration.
 */
final class BlogPostSynth extends Synth
{
    public static string $key = 'apiBlogPost';

    /**
     * @param  mixed  $target
     */
    public static function match($target): bool
    {
        return $target instanceof BlogPost;
    }

    /**
     * @param  BlogPost  $target
     * @return array{mixed, array<string, mixed>}
     */
    public function dehydrate($target): array
    {
        return [
            $target->exists ? $target->getAttributes() : null,
            [
                'class' => BlogPost::class,
                'key' => $target->exists ? $target->getKey() : null,
            ],
        ];
    }

    /**
     * @param  mixed  $data
     * @param  array<string, mixed>  $meta
     */
    public function hydrate($data, $meta): BlogPost
    {
        if ($data === null || ! isset($meta['key'])) {
            return new BlogPost;
        }

        // Restore the model from stored attributes — no DB query needed
        $post = new BlogPost;
        $post->exists = true;

        if (is_array($data)) {
            $post->forceFill($data);
        }

        return $post;
    }

    /**
     * @param  BlogPost  $target
     * @param  string  $key
     */
    public function get(&$target, $key): mixed
    {
        return $target->getAttribute($key);
    }

    /**
     * @param  BlogPost  $target
     * @param  string  $key
     * @param  mixed  $value
     * @param  string  $pathThusFar
     * @param  string  $fullPath
     */
    public function set(&$target, $key, $value, $pathThusFar, $fullPath): void
    {
        $target->setAttribute($key, $value);
    }
}
