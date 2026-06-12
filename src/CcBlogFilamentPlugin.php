<?php

declare(strict_types=1);

namespace CcConsulting\Blog;

use CcConsulting\Blog\Filament\Resources\BlogPosts\BlogPostResource;
use CcConsulting\Blog\Http\Middleware\EnsureCcPlatformToken;
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

        // Session-authenticated panels lose their CC Platform tokens when the
        // session expires but the remember-me cookie restores panel auth;
        // force a fresh login instead of letting every blog page 500.
        $panel->authMiddleware([
            EnsureCcPlatformToken::class,
        ]);
    }

    public function boot(Panel $panel): void
    {
        //
    }
}
