<?php

declare(strict_types=1);

use CcConsulting\Blog\CcBlogServiceProvider;
use CcConsulting\Blog\Services\BrowserTimezone;
use Illuminate\Support\Facades\Route;

beforeEach(function (): void {
    $this->app->register(CcBlogServiceProvider::class);
    config()->set('app.timezone', 'UTC');

    Route::middleware('web')->get('/tz', fn (): string => BrowserTimezone::get());
});

it('reads the browser timezone from the unencrypted cookie', function (): void {
    $this->withUnencryptedCookie(BrowserTimezone::COOKIE, 'America/Los_Angeles')
        ->get('/tz')
        ->assertSeeText('America/Los_Angeles');
});

it('falls back to the app timezone without a cookie', function (): void {
    $this->get('/tz')->assertSeeText('UTC');
});

it('falls back to the app timezone for an invalid cookie', function (): void {
    $this->withUnencryptedCookie(BrowserTimezone::COOKIE, 'Not/AZone')
        ->get('/tz')
        ->assertSeeText('UTC');
});
