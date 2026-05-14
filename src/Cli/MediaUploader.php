<?php

declare(strict_types=1);

namespace CcConsulting\Blog\Cli;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use RuntimeException;

/**
 * Standalone media uploader for the CLI. Mirrors the three-step flow in
 * CcConsulting\Blog\Services\CcPlatformApi::uploadImage but uses Guzzle so it
 * doesn't require a Laravel context.
 *
 * Maintains a content-hash → public-URL manifest in ~/.cc-blog/media-manifest.json
 * so repeat publishes of the same image don't re-upload.
 */
final class MediaUploader
{
    /** @var array<string, string> hash -> publicUrl */
    private array $manifest;

    public function __construct(
        private readonly Client $client,
        private readonly string $manifestPath,
    ) {
        $this->manifest = $this->loadManifest();
    }

    /**
     * Upload a local file. Returns the public URL (CDN-served).
     */
    public function upload(string $filePath): string
    {
        if (! is_file($filePath)) {
            throw new RuntimeException("file not found: $filePath");
        }

        $hash = (string) hash_file('sha256', $filePath);

        if (isset($this->manifest[$hash])) {
            return $this->manifest[$hash];
        }

        $contentType = $this->detectContentType($filePath);
        $publicUrl = $this->doUpload($filePath, $contentType);

        $this->manifest[$hash] = $publicUrl;
        $this->persistManifest();

        return $publicUrl;
    }

    private function doUpload(string $filePath, string $contentType): string
    {
        // 1. Request a presigned PUT URL.
        try {
            $signedResp = $this->client->post('/v1/media/signed-storage-url', [
                'json' => ['content_type' => $contentType],
            ]);
        } catch (GuzzleException $e) {
            throw new RuntimeException("signed-storage-url request failed: ".$e->getMessage(), previous: $e);
        }

        /** @var array<string, mixed> $body */
        $body = json_decode((string) $signedResp->getBody(), true);
        /** @var array<string, mixed> $signed */
        $signed = $body['data'] ?? $body;

        foreach (['url', 'key', 'publicUrl'] as $required) {
            if (empty($signed[$required])) {
                throw new RuntimeException("signed-storage-url response missing $required");
            }
        }

        /** @var array<string, string> $putHeaders */
        $putHeaders = is_array($signed['headers'] ?? null)
            ? $signed['headers']
            : ['Content-Type' => $contentType];

        // 2. PUT the bytes to the presigned URL. Bypass auth headers — this is
        // the raw S3/R2 endpoint and adding Bearer would trip its signature check.
        $rawClient = new Client(['verify' => false, 'timeout' => 120]);
        try {
            $rawClient->put($signed['url'], [
                'headers' => $putHeaders,
                'body' => fopen($filePath, 'rb'),
            ]);
        } catch (GuzzleException $e) {
            throw new RuntimeException("S3/R2 PUT failed: ".$e->getMessage(), previous: $e);
        }

        // 3. Confirm the upload server-side.
        try {
            $this->client->post('/v1/media/upload', [
                'json' => ['key' => $signed['key']],
            ]);
        } catch (GuzzleException $e) {
            // Confirm failure is non-fatal — the bytes are in R2; the API
            // can pick up the orphan via reconciliation. Log and continue.
            fwrite(STDERR, "warning: media/upload confirm failed: ".$e->getMessage()."\n");
        }

        return (string) $signed['publicUrl'];
    }

    private function detectContentType(string $filePath): string
    {
        $ext = strtolower(pathinfo($filePath, PATHINFO_EXTENSION));

        return match ($ext) {
            'png' => 'image/png',
            'jpg', 'jpeg' => 'image/jpeg',
            'webp' => 'image/webp',
            'gif' => 'image/gif',
            'svg' => 'image/svg+xml',
            default => 'application/octet-stream',
        };
    }

    /**
     * @return array<string, string>
     */
    private function loadManifest(): array
    {
        if (! is_file($this->manifestPath)) {
            return [];
        }

        $contents = (string) file_get_contents($this->manifestPath);
        if ($contents === '') {
            return [];
        }

        $decoded = json_decode($contents, true);

        if (! is_array($decoded)) {
            return [];
        }

        /** @var array<string, string> $decoded */
        return $decoded;
    }

    private function persistManifest(): void
    {
        $dir = dirname($this->manifestPath);
        if (! is_dir($dir)) {
            mkdir($dir, 0700, true);
        }

        file_put_contents(
            $this->manifestPath,
            (string) json_encode($this->manifest, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES),
        );
        chmod($this->manifestPath, 0600);
    }
}
