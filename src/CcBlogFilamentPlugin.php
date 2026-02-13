<?php

declare(strict_types=1);

namespace CcConsulting\Blog;

use CcConsulting\Blog\Filament\Resources\BlogPosts\BlogPostResource;
use Filament\Contracts\Plugin;
use Filament\Panel;

final class CcBlogFilamentPlugin implements Plugin
{
    public static function make(): self
    {
        return new self;
    }

    public function getId(): string
    {
        return 'cc-blog';
    }

    public function register(Panel $panel): void
    {
        $panel->resources([
            BlogPostResource::class,
        ]);
    }

    public function boot(Panel $panel): void
    {
        //
    }
}
