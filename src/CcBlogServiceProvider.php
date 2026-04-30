<?php

declare(strict_types=1);

namespace CcConsulting\Blog;

use CcConsulting\Blog\Livewire\BlogPostSynth;
use CcConsulting\Blog\Services\CcPlatformApi;
use Filament\Support\Assets\Css;
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

        // Register Livewire synthesizer for API-backed BlogPost model.
        // Must use app->booted() to ensure registration happens AFTER all
        // other synths (ModelSynth, WireableSynth, etc.) so array_unshift
        // places BlogPostSynth at index 0, matching before ModelSynth.
        if (class_exists(Livewire::class)) {
            $this->app->booted(function (): void {
                Livewire::propertySynthesizer(BlogPostSynth::class);
            });
        }

        // Register Filament admin asset overrides for the RichEditor code blocks.
        FilamentAsset::register([
            Css::make('cc-blog-filament-editor', __DIR__.'/../resources/css/filament-editor.css'),
        ], 'cc-blog');

        // Publish JS/CSS assets to public/vendor
        $this->publishes([
            __DIR__.'/../dist/blog-admin.js' => public_path('vendor/cc-blog/blog-admin.js'),
            __DIR__.'/../dist/markdown-paste.js' => public_path('vendor/cc-blog/markdown-paste.js'),
            __DIR__.'/../dist/laravel-cc-blog.css' => public_path('vendor/cc-blog/laravel-cc-blog.css'),
            __DIR__.'/../dist/chunks' => public_path('vendor/cc-blog/chunks'),
            __DIR__.'/../resources/css/filament-editor.css' => public_path('vendor/cc-blog/filament-editor.css'),
        ], 'cc-blog-assets');
    }
}
