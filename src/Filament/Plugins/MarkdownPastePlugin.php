<?php

declare(strict_types=1);

namespace CcConsulting\Blog\Filament\Plugins;

use CcConsulting\Blog\Filament\FileAttachments\CcPlatformFileAttachmentProvider;
use CcConsulting\Blog\Services\CcPlatformApi;
use Filament\Actions\Action;
use Filament\Forms\Components\RichEditor\FileAttachmentProviders\Contracts\FileAttachmentProvider;
use Filament\Forms\Components\RichEditor\Plugins\Contracts\HasFileAttachmentProvider;
use Filament\Forms\Components\RichEditor\Plugins\Contracts\RichContentPlugin;
use Filament\Forms\Components\RichEditor\RichEditorTool;
use Tiptap\Core\Extension;

final class MarkdownPastePlugin implements HasFileAttachmentProvider, RichContentPlugin
{
    /**
     * @return array<Extension>
     */
    public function getTipTapPhpExtensions(): array
    {
        return [];
    }

    /**
     * @return array<string>
     */
    public function getTipTapJsExtensions(): array
    {
        return [
            (string) asset('vendor/cc-blog/markdown-paste.js'),
        ];
    }

    /**
     * @return array<RichEditorTool>
     */
    public function getEditorTools(): array
    {
        return [];
    }

    /**
     * @return array<Action>
     */
    public function getEditorActions(): array
    {
        return [];
    }

    public function getFileAttachmentProvider(): ?FileAttachmentProvider
    {
        return new CcPlatformFileAttachmentProvider(app(CcPlatformApi::class));
    }
}
