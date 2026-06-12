<?php

declare(strict_types=1);

return [
    'url' => env('CC_PLATFORM_API_URL', 'https://app.closedcircuitconsulting.com'),
    'api_token' => env('CC_PLATFORM_API_TOKEN'),
    'cache_ttl' => (int) env('CC_PLATFORM_CACHE_TTL', 300),

    /*
    |--------------------------------------------------------------------------
    | Login route name
    |--------------------------------------------------------------------------
    |
    | Where users are sent when the session has no CC Platform token or the
    | API rejects an expired one (used by the EnsureCcPlatformToken panel
    | middleware and the auth-failure exception renderer).
    |
    */
    'login_route' => env('CC_PLATFORM_LOGIN_ROUTE', 'login'),

    /*
    |--------------------------------------------------------------------------
    | Media (CDN) URL
    |--------------------------------------------------------------------------
    |
    | CC Platform serves uploaded media through a CDN host. The signed-storage
    | upload flow returns raw R2/S3 endpoint URLs that the CDN does not serve;
    | rewrite those to this canonical media host so embedded <img> tags
    | resolve in the public blog renderer. Match the cc-api `MEDIA_URL` env.
    |
    */
    'media_url' => env('CC_PLATFORM_MEDIA_URL', 'https://m.closedcircuit.io'),

    'routes' => [
        'enabled' => true,
        'prefix' => 'blog',
        'middleware' => ['web'],
        'admin_enabled' => true,
        'admin_middleware' => ['web'],
    ],

    'features' => [
        'tiptap_conversion' => true,
        'markdown_paste' => true,
    ],
];
