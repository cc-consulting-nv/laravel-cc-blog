<?php

declare(strict_types=1);

use CcConsulting\Blog\Http\Controllers\BlogController;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Route;

/** @var bool $routesEnabled */
$routesEnabled = config('cc-blog.routes.enabled', true);

if ($routesEnabled) {
    /** @var string $prefix */
    $prefix = config('cc-blog.routes.prefix', 'blog');

    /** @var array<int, string> $middleware */
    $middleware = config('cc-blog.routes.middleware', ['web']);

    Route::middleware($middleware)->group(function () use ($prefix): void {
        Route::get("/{$prefix}", [BlogController::class, 'index'])->name('blog.index');
        Route::get("/{$prefix}/category/{slug}", [BlogController::class, 'category'])->name('blog.category');
        Route::get("/{$prefix}/{slug}", [BlogController::class, 'show'])->name('blog.show');
    });
}

/** @var bool $adminEnabled */
$adminEnabled = config('cc-blog.routes.admin_enabled', true);

if ($adminEnabled) {
    /** @var string $prefix */
    $prefix = config('cc-blog.routes.prefix', 'blog');

    /** @var array<int, string> $adminMiddleware */
    $adminMiddleware = config('cc-blog.routes.admin_middleware', ['web']);

    Route::middleware($adminMiddleware)->group(function () use ($prefix): void {
        Route::get("/{$prefix}-admin", fn (): View|Factory => view('cc-blog::blog.admin'))->name('blog.admin');
    });
}
