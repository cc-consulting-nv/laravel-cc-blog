<?php

declare(strict_types=1);

namespace CcConsulting\Blog;

use CcConsulting\Blog\Livewire\BlogPostSynth;
use CcConsulting\Blog\Services\CcPlatformApi;
use Filament\Support\Assets\Js;
use Filament\Support\Facades\FilamentAsset;
use Livewire\Livewire;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

final class CcBlogServiceProvider extends PackageServiceProvider
{
    public function configurePackage(Package $package): void
    {
        $package
            ->name('cc-blog')
            ->hasConfigFile()
            ->hasViews()
            ->hasRoute('web');
    }

    public function packageBooted(): void
    {
        // Register CcPlatformApi as singleton
        $this->app->singleton(CcPlatformApi::class);

        // Register Livewire synthesizer for API-backed BlogPost model
        if (class_exists(Livewire::class)) {
            Livewire::propertySynthesizer(BlogPostSynth::class);
        }

        // Publish JS assets to public/vendor
        $this->publishes([
            __DIR__.'/../dist/blog-admin.js' => public_path('vendor/cc-blog/blog-admin.js'),
            __DIR__.'/../dist/markdown-paste.js' => public_path('vendor/cc-blog/markdown-paste.js'),
        ], 'cc-blog-assets');
    }
}
