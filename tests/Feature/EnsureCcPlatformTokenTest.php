<?php

declare(strict_types=1);

use CcConsulting\Blog\Http\Middleware\EnsureCcPlatformToken;
use Illuminate\Support\Facades\Route;

beforeEach(function (): void {
    Route::middleware(['web', EnsureCcPlatformToken::class])
        ->get('/guarded', fn (): string => 'panel content');
});

it('redirects to login when the session has no cc token', function (): void {
    $this->get('/guarded')
        ->assertRedirect('/login');
});

it('allows the request when the session has a cc token', function (): void {
    $this->withSession(['cc_access_token' => 'valid-token'])
        ->get('/guarded')
        ->assertOk()
        ->assertSee('panel content');
});

it('allows the request when a server api token is configured', function (): void {
    config()->set('cc-blog.api_token', 'server-token');

    $this->get('/guarded')
        ->assertOk()
        ->assertSee('panel content');
});

it('redirects to a custom login route when configured', function (): void {
    config()->set('cc-blog.login_route', 'custom.login');
    Route::get('/custom-login', fn (): string => 'custom login')->name('custom.login');

    $this->get('/guarded')
        ->assertRedirect('/custom-login');
});

it('invalidates the session when redirecting', function (): void {
    $this->withSession(['some_other_key' => 'value'])
        ->get('/guarded')
        ->assertRedirect('/login');

    expect(session()->has('some_other_key'))->toBeFalse();
});
