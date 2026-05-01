<?php

declare(strict_types=1);

namespace CcConsulting\Blog\Services;

use CcConsulting\Blog\Exceptions\ApiRequestException;
use GuzzleHttp\Cookie\CookieJar;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Client\PendingRequest;
use Illuminate\Http\Client\Response;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

final class CcPlatformApi
{
    private string $baseUrl;

    private int $cacheTtl;

    private ?string $apiToken;

    public function __construct()
    {
        /** @var string $baseUrl */
        $baseUrl = config('cc-blog.url');
        $this->baseUrl = $baseUrl;

        /** @var int $cacheTtl */
        $cacheTtl = config('cc-blog.cache_ttl', 300);
        $this->cacheTtl = $cacheTtl;

        /** @var string|null $apiToken */
        $apiToken = config('cc-blog.api_token');
        $this->apiToken = $apiToken;
    }

    /**
     * Clear blog-related cache entries.
     */
    public function clearBlogCache(?string $slug = null): void
    {
        Cache::forget('blog:featured');
        Cache::forget('blog:categories');

        if ($slug !== null && $slug !== '' && $slug !== '0') {
            Cache::forget("blog:post:{$slug}");
        }

        // Clear list cache by pattern (simplified - clears all blog list caches)
        // In production, use tagged caching for better control
        Cache::flush();
    }

    /**
     * List blog posts from the API.
     *
     * @param  array<string, mixed>  $options
     * @return array<string, mixed>
     */
    public function listBlogPosts(array $options = []): array
    {
        $cacheKey = 'blog:list:'.hash('xxh128', serialize($options));

        /** @var array<string, mixed> $result */
        $result = Cache::remember($cacheKey, $this->cacheTtl, function () use ($options): array {
            try {
                $response = Http::timeout(10)
                    ->withOptions(['verify' => false])
                    ->get("{$this->baseUrl}/v1/blog", $options);

                if ($response->failed()) {
                    Log::warning('Blog API request failed', [
                        'status' => $response->status(),
                        'body' => $response->body(),
                    ]);

                    return ['data' => [], 'meta' => []];
                }

                /** @var array<string, mixed> $json */
                $json = $response->json();

                return $json;
            } catch (ConnectionException $e) {
                Log::error('Blog API connection failed', ['error' => $e->getMessage()]);

                return ['data' => [], 'meta' => []];
            }
        });

        return $result;
    }

    /**
     * Get a single blog post by slug.
     *
     * @return array<string, mixed>|null
     */
    public function getBlogPost(string $slug): ?array
    {
        $cacheKey = "blog:post:{$slug}";

        /** @var array<string, mixed>|null $result */
        $result = Cache::remember($cacheKey, $this->cacheTtl * 3, function () use ($slug): ?array {
            try {
                $response = Http::timeout(10)
                    ->withOptions(['verify' => false])
                    ->get("{$this->baseUrl}/v1/blog/{$slug}");

                if ($response->failed()) {
                    return null;
                }

                /** @var array<string, mixed> $data */
                $data = $response->json('data');

                return $data;
            } catch (ConnectionException $e) {
                Log::error('Blog API connection failed', ['error' => $e->getMessage()]);

                return null;
            }
        });

        return $result;
    }

    /**
     * Get featured blog posts.
     *
     * @return array<int, array<string, mixed>>
     */
    public function getFeaturedBlogPosts(): array
    {
        /** @var array<int, array<string, mixed>> $result */
        $result = Cache::remember('blog:featured', $this->cacheTtl, function (): array {
            try {
                $response = Http::timeout(10)
                    ->withOptions(['verify' => false])
                    ->get("{$this->baseUrl}/v1/blog/featured");

                if ($response->failed()) {
                    return [];
                }

                /** @var array<int, array<string, mixed>> $data */
                $data = $response->json('data', []);

                return $data;
            } catch (ConnectionException $e) {
                Log::error('Blog API connection failed', ['error' => $e->getMessage()]);

                return [];
            }
        });

        return $result;
    }

    /**
     * Get blog categories.
     *
     * @return array<int, array<string, mixed>>
     */
    public function getBlogCategories(): array
    {
        /** @var array<int, array<string, mixed>> $result */
        $result = Cache::remember('blog:categories', $this->cacheTtl * 12, function (): array {
            try {
                $response = Http::timeout(10)
                    ->withOptions(['verify' => false])
                    ->get("{$this->baseUrl}/v1/blog/categories");

                if ($response->failed()) {
                    return [];
                }

                /** @var array<int, array<string, mixed>> $data */
                $data = $response->json('data', []);

                return $data;
            } catch (ConnectionException $e) {
                Log::error('Blog API connection failed', ['error' => $e->getMessage()]);

                return [];
            }
        });

        return $result;
    }

    /**
     * Authenticate a user against the cc-api.
     *
     * @return array<string, mixed>|null
     */
    public function login(string $email, string $password): ?array
    {
        try {
            $response = Http::timeout(10)
                ->withOptions(['verify' => false])
                ->post("{$this->baseUrl}/v1/auth/login", [
                    'email' => $email,
                    'password' => $password,
                ]);

            if ($response->failed()) {
                return null;
            }

            /** @var array<string, mixed> $data */
            $data = $response->json();

            return $data;
        } catch (ConnectionException $e) {
            Log::error('Auth API connection failed', ['error' => $e->getMessage()]);

            return null;
        }
    }

    /**
     * Get current user info.
     *
     * @return array<string, mixed>|null
     */
    public function me(string $token): ?array
    {
        try {
            $response = Http::timeout(10)
                ->withOptions(['verify' => false])
                ->acceptJson()
                ->withHeaders(['X-Requested-With' => 'XMLHttpRequest'])
                ->withToken($token)
                ->get("{$this->baseUrl}/v1/users/me");

            if ($response->failed()) {
                Log::warning('Me API failed', [
                    'status' => $response->status(),
                    'body' => Str::limit($response->body(), 500),
                    'url' => "{$this->baseUrl}/v1/users/me",
                ]);

                return null;
            }

            /** @var array<string, mixed> $data */
            $data = $response->json('data');

            return $data;
        } catch (ConnectionException $e) {
            Log::error('Me API connection failed', ['error' => $e->getMessage()]);

            return null;
        }
    }

    /**
     * Fetch the authenticated user's profile using session cookies from authCodeLogin.
     *
     * @param  CookieJar  $cookies
     * @return array<string, mixed>|null
     */
    public function meWithCookies(string $token, mixed $cookies): ?array
    {
        try {
            $response = Http::timeout(10)
                ->withOptions([
                    'verify' => false,
                    'cookies' => $cookies,
                ])
                ->acceptJson()
                ->withHeaders(['X-Requested-With' => 'XMLHttpRequest'])
                ->withToken($token)
                ->get("{$this->baseUrl}/v1/users/me");

            if ($response->failed()) {
                Log::warning('Me API failed', [
                    'status' => $response->status(),
                    'body' => Str::limit($response->body(), 500),
                ]);

                return null;
            }

            /** @var array<string, mixed>|null $data */
            $data = $response->json('data');

            return $data;
        } catch (ConnectionException $e) {
            Log::error('Me API connection failed', ['error' => $e->getMessage()]);

            return null;
        }
    }

    // =========================================================================
    // Blog CRUD Operations (Authenticated)
    // =========================================================================
    /**
     * Create a new blog post.
     *
     * @param  array<string, mixed>  $data
     * @return array<string, mixed>
     *
     * @throws ApiRequestException
     */
    public function createBlogPost(array $data): array
    {
        try {
            $response = $this->authRequest('POST', '/v1/blog', $data);

            if ($response->failed()) {
                $status = $response->status();
                $body = $response->body();

                Log::warning('Blog create failed', [
                    'status' => $status,
                    'body' => $body,
                ]);

                throw new ApiRequestException(
                    $this->extractErrorMessage($status, $body),
                    $status,
                );
            }

            $this->clearBlogCache();

            /** @var array<string, mixed> $result */
            $result = $response->json('data');

            return $result;
        } catch (ConnectionException $e) {
            Log::error('Blog API connection failed', ['error' => $e->getMessage()]);

            throw new ApiRequestException(
                'Could not connect to the API. Please try again later.',
            );
        }
    }

    /**
     * Update an existing blog post.
     *
     * @param  array<string, mixed>  $data
     * @return array<string, mixed>
     *
     * @throws ApiRequestException
     */
    public function updateBlogPost(string $ulid, array $data): array
    {
        try {
            $response = $this->authRequest('PUT', "/v1/blog/{$ulid}", $data);

            if ($response->failed()) {
                $status = $response->status();
                $body = $response->body();

                Log::warning('Blog update failed', [
                    'ulid' => $ulid,
                    'status' => $status,
                    'body' => $body,
                ]);

                throw new ApiRequestException(
                    $this->extractErrorMessage($status, $body),
                    $status,
                );
            }

            $slug = $data['slug'] ?? null;
            $this->clearBlogCache(is_string($slug) ? $slug : null);

            /** @var array<string, mixed> $result */
            $result = $response->json('data');

            return $result;
        } catch (ConnectionException $e) {
            Log::error('Blog API connection failed', ['error' => $e->getMessage()]);

            throw new ApiRequestException(
                'Could not connect to the API. Please try again later.',
            );
        }
    }

    /**
     * Delete a blog post.
     *
     * @throws ApiRequestException
     */
    public function deleteBlogPost(string $ulid): true
    {
        try {
            $response = $this->authRequest('DELETE', "/v1/blog/{$ulid}");

            if ($response->failed()) {
                $status = $response->status();

                Log::warning('Blog delete failed', [
                    'ulid' => $ulid,
                    'status' => $status,
                ]);

                throw new ApiRequestException(
                    $this->extractErrorMessage($status, $response->body()),
                    $status,
                );
            }

            $this->clearBlogCache();

            return true;
        } catch (ConnectionException $e) {
            Log::error('Blog API connection failed', ['error' => $e->getMessage()]);

            throw new ApiRequestException(
                'Could not connect to the API. Please try again later.',
            );
        }
    }

    /**
     * Upload an image to the CC Platform via the two-step S3 flow:
     *   1. POST /v1/media/signed-storage-url to get a presigned PUT URL.
     *   2. PUT the file bytes directly to S3/R2.
     *   3. POST /v1/media/upload to confirm the upload (returns public URL).
     *
     * Returns the public URL the editor should embed.
     */
    public function uploadImage(string $filePath, string $contentType, string $originalName = 'upload'): string
    {
        try {
            $signedResponse = $this->authRequest('POST', '/v1/media/signed-storage-url', [
                'content_type' => $contentType,
            ]);

            if ($signedResponse->failed()) {
                $status = $signedResponse->status();

                Log::warning('Media signed-storage-url failed', [
                    'status' => $status,
                    'body' => $signedResponse->body(),
                ]);

                throw new ApiRequestException(
                    $this->extractErrorMessage($status, $signedResponse->body()),
                    $status,
                );
            }

            /** @var array{url: string, key: string, publicUrl: string, headers?: array<string, string>} $signed */
            $signed = $signedResponse->json('data') ?? $signedResponse->json();

            if (empty($signed['url']) || empty($signed['key']) || empty($signed['publicUrl'])) {
                throw new ApiRequestException('Invalid signed URL response from CC Platform.');
            }

            $putHeaders = $signed['headers'] ?? ['Content-Type' => $contentType];

            $putResponse = Http::timeout(60)
                ->withOptions(['verify' => false])
                ->withHeaders($putHeaders)
                ->withBody(file_get_contents($filePath) ?: '', $contentType)
                ->put($signed['url']);

            if ($putResponse->failed()) {
                Log::warning('S3 PUT failed', [
                    'status' => $putResponse->status(),
                    'key' => $signed['key'],
                ]);

                throw new ApiRequestException(
                    'Image upload to storage failed.',
                    $putResponse->status(),
                );
            }

            // Notify the CC Platform that the upload completed.
            $confirmResponse = $this->authRequest('POST', '/v1/media/upload', [
                'key' => $signed['key'],
            ]);

            if ($confirmResponse->failed()) {
                Log::warning('Media upload confirm failed; falling back to publicUrl', [
                    'status' => $confirmResponse->status(),
                    'key' => $signed['key'],
                ]);
            }

            // The CC Platform's signed-storage-url and media/upload endpoints
            // currently return raw R2/S3 endpoint URLs that the CDN does not
            // serve. Rewrite to the configured media host so embedded <img>
            // tags in blog content resolve from the canonical media domain.
            return $this->canonicalMediaUrl($signed['key']);
        } catch (ConnectionException $e) {
            Log::error('Image upload connection failed', ['error' => $e->getMessage()]);

            throw new ApiRequestException(
                'Could not connect to the API. Please try again later.',
            );
        }
    }

    /**
     * Build the canonical CDN URL for an S3/R2 object key. Mirrors how cc-api
     * resolves media via config('app.media_url') so URLs survive across
     * R2 bucket migrations and CDN cutover.
     */
    private function canonicalMediaUrl(string $key): string
    {
        /** @var string $base */
        $base = config('cc-blog.media_url', '');
        $base = rtrim($base, '/');

        return $base.'/'.ltrim($key, '/');
    }

    /**
     * Publish a blog post.
     *
     * @return array<string, mixed>|null
     */
    public function publishBlogPost(string $ulid): ?array
    {
        try {
            $response = $this->authRequest('POST', "/v1/blog/{$ulid}/publish");

            if ($response->failed()) {
                Log::warning('Blog publish failed', [
                    'ulid' => $ulid,
                    'status' => $response->status(),
                    'body' => $response->body(),
                    'url' => "{$this->baseUrl}/v1/blog/{$ulid}/publish",
                ]);

                return null;
            }

            $this->clearBlogCache();

            /** @var array<string, mixed> $result */
            $result = $response->json('data');

            return $result;
        } catch (ConnectionException $e) {
            Log::error('Blog API connection failed', ['error' => $e->getMessage()]);

            return null;
        }
    }

    /**
     * Schedule a blog post.
     *
     * @return array<string, mixed>|null
     */
    public function scheduleBlogPost(string $ulid, string $scheduledFor): ?array
    {
        try {
            $response = $this->authRequest('POST', "/v1/blog/{$ulid}/schedule", [
                'scheduled_for' => $scheduledFor,
            ]);

            if ($response->failed()) {
                return null;
            }

            $this->clearBlogCache();

            /** @var array<string, mixed> $result */
            $result = $response->json('data');

            return $result;
        } catch (ConnectionException $e) {
            Log::error('Blog API connection failed', ['error' => $e->getMessage()]);

            return null;
        }
    }

    // =========================================================================
    // Blog Categories CRUD
    // =========================================================================

    /**
     * Create a blog category.
     *
     * @param  array<string, mixed>  $data
     * @return array<string, mixed>|null
     */
    public function createBlogCategory(array $data): ?array
    {
        try {
            $response = $this->authRequest('POST', '/v1/blog/categories', $data);

            if ($response->failed()) {
                return null;
            }

            $this->clearBlogCache();

            /** @var array<string, mixed> $result */
            $result = $response->json('data');

            return $result;
        } catch (ConnectionException $e) {
            Log::error('Blog API connection failed', ['error' => $e->getMessage()]);

            return null;
        }
    }

    /**
     * Update a blog category.
     *
     * @param  array<string, mixed>  $data
     * @return array<string, mixed>|null
     */
    public function updateBlogCategory(string $id, array $data): ?array
    {
        try {
            $response = $this->authRequest('PUT', "/v1/blog/categories/{$id}", $data);

            if ($response->failed()) {
                return null;
            }

            $this->clearBlogCache();

            /** @var array<string, mixed> $result */
            $result = $response->json('data');

            return $result;
        } catch (ConnectionException $e) {
            Log::error('Blog API connection failed', ['error' => $e->getMessage()]);

            return null;
        }
    }

    /**
     * Delete a blog category.
     */
    public function deleteBlogCategory(string $id): bool
    {
        try {
            $response = $this->authRequest('DELETE', "/v1/blog/categories/{$id}");

            if ($response->failed()) {
                return false;
            }

            $this->clearBlogCache();

            return true;
        } catch (ConnectionException $e) {
            Log::error('Blog API connection failed', ['error' => $e->getMessage()]);

            return false;
        }
    }

    /**
     * List all blog posts for admin (includes drafts).
     *
     * @param  array<string, mixed>  $options
     * @return array<string, mixed>
     */
    public function listAllBlogPosts(array $options = []): array
    {
        try {
            $response = $this->authRequest('GET', '/v1/blog', [
                ...$options,
                'status' => $options['status'] ?? 'all',
            ]);

            if ($response->failed()) {
                return ['data' => [], 'meta' => []];
            }

            /** @var array<string, mixed> $json */
            $json = $response->json();

            return $json;
        } catch (ConnectionException $e) {
            Log::error('Blog API connection failed', ['error' => $e->getMessage()]);

            return ['data' => [], 'meta' => []];
        }
    }

    /**
     * Get a blog post by ULID for editing.
     *
     * @return array<string, mixed>|null
     */
    public function getBlogPostByUlid(string $ulid): ?array
    {
        try {
            $response = $this->authRequest('GET', "/v1/blog/{$ulid}");

            if ($response->failed()) {
                Log::warning('getBlogPostByUlid failed', [
                    'ulid' => $ulid,
                    'status' => $response->status(),
                    'body' => Str::limit($response->body(), 500),
                    'url' => "{$this->baseUrl}/v1/blog/{$ulid}",
                ]);

                return null;
            }

            /** @var array<string, mixed> $data */
            $data = $response->json('data');

            return $data;
        } catch (ConnectionException $e) {
            Log::error('Blog API connection failed', ['error' => $e->getMessage()]);

            return null;
        }
    }

    /**
     * Make an authenticated API request with automatic token refresh on 401.
     *
     * @param  array<string, mixed>  $data
     *
     * @throws ConnectionException
     */
    private function authRequest(string $method, string $path, array $data = []): Response
    {
        $url = $this->baseUrl.$path;
        $response = $this->sendRequest($method, $url, $data);

        // If 401 and we have a refresh token, try refreshing
        if ($response->status() === 401 && ! $this->apiToken) {
            $refreshed = $this->refreshToken();

            if ($refreshed) {
                $response = $this->sendRequest($method, $url, $data);
            }
        }

        return $response;
    }

    /**
     * Send a single HTTP request with current auth token.
     *
     * @param  array<string, mixed>  $data
     *
     * @throws ConnectionException
     */
    private function sendRequest(string $method, string $url, array $data = []): Response
    {
        $client = $this->http();

        return match (Str::upper($method)) {
            'GET' => $client->get($url, $data),
            'POST' => $client->post($url, $data),
            'PUT' => $client->put($url, $data),
            'PATCH' => $client->patch($url, $data),
            'DELETE' => $client->delete($url, $data),
            default => $client->get($url, $data),
        };
    }

    /**
     * Refresh the access token using the stored refresh token.
     */
    private function refreshToken(): bool
    {
        /** @var string|null $refreshToken */
        $refreshToken = session('cc_refresh_token');

        if (! $refreshToken) {
            Log::warning('Token refresh failed: no refresh token in session');

            return false;
        }

        try {
            $response = Http::timeout(10)
                ->withOptions(['verify' => false])
                ->asJson()
                ->acceptJson()
                ->withHeaders(['X-Requested-With' => 'XMLHttpRequest'])
                ->post("{$this->baseUrl}/auth/refresh", [
                    'refresh_token' => $refreshToken,
                ]);

            if ($response->failed()) {
                Log::warning('Token refresh failed', [
                    'status' => $response->status(),
                    'body' => Str::limit($response->body(), 300),
                ]);

                return false;
            }

            /** @var string|null $newAccessToken */
            $newAccessToken = $response->json('data.access_token')
                ?? $response->json('access_token');

            /** @var string|null $newRefreshToken */
            $newRefreshToken = $response->json('data.refresh_token')
                ?? $response->json('refresh_token');

            if (! $newAccessToken) {
                Log::warning('Token refresh response missing access_token');

                return false;
            }

            session([
                'cc_access_token' => $newAccessToken,
                'cc_refresh_token' => $newRefreshToken ?? $refreshToken,
            ]);

            Log::info('CC Platform token refreshed successfully');

            return true;
        } catch (ConnectionException $e) {
            Log::error('Token refresh connection failed', ['error' => $e->getMessage()]);

            return false;
        }
    }

    /**
     * Get HTTP client with authentication.
     * Uses the static API token if configured, otherwise falls back to the
     * logged-in user's CC Platform access token stored in the session.
     */
    private function http(): PendingRequest
    {
        $client = Http::timeout(10)
            ->withOptions(['verify' => false])
            ->asJson()
            ->acceptJson()
            ->withHeaders(['X-Requested-With' => 'XMLHttpRequest']);

        if ($this->apiToken) {
            return $client->withToken($this->apiToken);
        }

        /** @var string|null $sessionToken */
        $sessionToken = session('cc_access_token');

        if ($sessionToken) {
            return $client->withToken($sessionToken);
        }

        return $client;
    }

    /**
     * Extract a human-readable error message from an API response.
     */
    private function extractErrorMessage(int $status, string $body): string
    {
        /** @var array<string, mixed>|null $json */
        $json = json_decode($body, true);

        if (is_array($json)) {
            // Validation errors (422)
            if ($status === 422) {
                $messages = [];
                /** @var mixed $value */
                foreach ($json as $key => $value) {
                    if ($key === 'message') {
                        continue;
                    }
                    if (is_array($value)) {
                        $messages[] = implode(', ', array_map(static fn (mixed $v): string => is_string($v) ? $v : json_encode($v, JSON_THROW_ON_ERROR), $value));
                    } elseif (is_string($value)) {
                        $messages[] = $value;
                    }
                }

                return $messages !== [] ? implode("\n", $messages) : 'Validation failed.';
            }

            // Standard error responses
            if (isset($json['message']) && is_string($json['message'])) {
                return $json['message'];
            }

            if (isset($json['error_detail']) && is_string($json['error_detail'])) {
                return $json['error_detail'];
            }
        }

        return match ($status) {
            401 => 'Not authenticated. Please log in again.',
            403 => 'You do not have permission to perform this action.',
            404 => 'The requested resource was not found.',
            500 => 'The server encountered an error. Please try again later.',
            default => "Request failed (HTTP {$status}).",
        };
    }
}
