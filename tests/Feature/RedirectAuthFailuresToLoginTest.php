<?php

declare(strict_types=1);

use CcConsulting\Blog\Exceptions\ApiRequestException;
use CcConsulting\Blog\Exceptions\RedirectAuthFailuresToLogin;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

function makeRequest(bool $json = false): Request
{
    $request = Request::create('/admin/blog-posts', 'GET');

    if ($json) {
        $request->headers->set('Accept', 'application/json');
    }

    /** @var \Illuminate\Session\Store $session */
    $session = app('session.store');
    $session->put('cc_access_token', 'expired');
    $session->put('cc_refresh_token', 'expired');
    $request->setLaravelSession($session);

    return $request;
}

it('redirects 401 api failures to login', function (): void {
    $renderer = new RedirectAuthFailuresToLogin;

    $response = $renderer(new ApiRequestException('Not signed in.', 401), makeRequest());

    expect($response)->toBeInstanceOf(RedirectResponse::class)
        ->and($response?->getTargetUrl())->toContain('/login');
});

it('unwraps auth failures nested in view exceptions', function (): void {
    $renderer = new RedirectAuthFailuresToLogin;

    $wrapped = new RuntimeException(
        'View error',
        0,
        new RuntimeException('View error', 0, new ApiRequestException('Unauthenticated.', 403)),
    );

    $response = $renderer($wrapped, makeRequest());

    expect($response)->toBeInstanceOf(RedirectResponse::class);
});

it('purges stale tokens from the session', function (): void {
    $renderer = new RedirectAuthFailuresToLogin;
    $request = makeRequest();

    $renderer(new ApiRequestException('Not signed in.', 401), $request);

    expect($request->session()->has('cc_access_token'))->toBeFalse()
        ->and($request->session()->has('cc_refresh_token'))->toBeFalse();
});

it('returns 401 json for json requests', function (): void {
    $renderer = new RedirectAuthFailuresToLogin;

    $response = $renderer(new ApiRequestException('Not signed in.', 401), makeRequest(json: true));

    expect($response)->toBeInstanceOf(JsonResponse::class)
        ->and($response?->getStatusCode())->toBe(401);
});

it('ignores non-auth api failures', function (): void {
    $renderer = new RedirectAuthFailuresToLogin;

    $response = $renderer(new ApiRequestException('Upstream exploded.', 500), makeRequest());

    expect($response)->toBeNull();
});

it('ignores unrelated exceptions', function (): void {
    $renderer = new RedirectAuthFailuresToLogin;

    $response = $renderer(new RuntimeException('Something else'), makeRequest());

    expect($response)->toBeNull();
});
