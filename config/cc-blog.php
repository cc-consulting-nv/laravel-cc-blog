<?php

declare(strict_types=1);

return [
    'url' => env('CC_PLATFORM_API_URL', 'https://app.closedcircuitconsulting.com'),
    'api_token' => env('CC_PLATFORM_API_TOKEN'),
    'cache_ttl' => (int) env('CC_PLATFORM_CACHE_TTL', 300),

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
