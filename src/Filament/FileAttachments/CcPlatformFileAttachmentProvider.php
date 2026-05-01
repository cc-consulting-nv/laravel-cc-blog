<?php

declare(strict_types=1);

namespace CcConsulting\Blog\Filament\FileAttachments;

use CcConsulting\Blog\Services\CcPlatformApi;
use Filament\Forms\Components\RichEditor\FileAttachmentProviders\Contracts\FileAttachmentProvider;
use Filament\Forms\Components\RichEditor\RichContentAttribute;
use Illuminate\Support\Facades\Log;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;
use Throwable;

/**
 * Routes RichEditor file attachments through the CC Platform's three-step
 * S3 upload flow (signed-storage-url → PUT → /v1/media/upload). The "file"
 * value stored in the editor content is the public URL returned by the
 * CC Platform; getFileAttachmentUrl is a passthrough.
 */
final class CcPlatformFileAttachmentProvider implements FileAttachmentProvider
{
    private RichContentAttribute $attribute;

    public function __construct(
        private readonly CcPlatformApi $api,
    ) {}

    public function attribute(RichContentAttribute $attribute): static
    {
        $this->attribute = $attribute;

        return $this;
    }

    public function saveUploadedFileAttachment(TemporaryUploadedFile $file): mixed
    {
        try {
            $realPath = $file->getRealPath();

            if ($realPath === false) {
                Log::warning('Uploaded file has no real path; cannot upload to CC Platform.');

                return null;
            }

            return $this->api->uploadImage(
                $realPath,
                $file->getMimeType() ?? 'application/octet-stream',
                $file->getClientOriginalName(),
            );
        } catch (Throwable $e) {
            Log::error('CcPlatformFileAttachmentProvider upload failed', [
                'error' => $e->getMessage(),
            ]);

            return null;
        }
    }

    public function getFileAttachmentUrl(mixed $file): ?string
    {
        if (! is_string($file) || $file === '') {
            return null;
        }

        return $file;
    }

    public function getDefaultFileAttachmentVisibility(): ?string
    {
        return 'public';
    }

    public function isExistingRecordRequiredToSaveNewFileAttachments(): bool
    {
        return false;
    }

    /**
     * @param  array<mixed>  $exceptIds
     */
    public function cleanUpFileAttachments(array $exceptIds): void
    {
        // No-op: the CC Platform manages image lifecycle (deletion, dedup,
        // thumbnails) on its side. Editor content references public URLs;
        // orphan cleanup is not the editor's responsibility.
    }
}
