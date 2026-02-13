<?php

declare(strict_types=1);

namespace CcConsulting\Blog\Filament\Resources\BlogPosts\Pages;

use CcConsulting\Blog\Filament\Resources\BlogPosts\BlogPostResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

final class ListBlogPosts extends ListRecords
{
    protected static string $resource = BlogPostResource::class;

    public function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
