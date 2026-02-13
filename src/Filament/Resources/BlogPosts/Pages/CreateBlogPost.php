<?php

declare(strict_types=1);

namespace CcConsulting\Blog\Filament\Resources\BlogPosts\Pages;

use CcConsulting\Blog\Exceptions\ApiRequestException;
use CcConsulting\Blog\Filament\Resources\BlogPosts\BlogPostResource;
use CcConsulting\Blog\Models\BlogPost;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\CreateRecord;

final class CreateBlogPost extends CreateRecord
{
    protected static string $resource = BlogPostResource::class;

    /**
     * Handle the record creation via API.
     *
     * @param  array<string, mixed>  $data
     */
    protected function handleRecordCreation(array $data): BlogPost
    {
        $post = new BlogPost;
        $post->fill($data);

        try {
            $post->saveViaApi();

            return $post;
        } catch (ApiRequestException $e) {
            Notification::make()
                ->title('Failed to create blog post')
                ->body($e->getMessage())
                ->danger()
                ->persistent()
                ->send();

            $this->halt();

            return new BlogPost;
        }
    }

    /**
     * Redirect to list page after creation.
     */
    protected function getRedirectUrl(): string
    {
        /** @var string $url */
        $url = $this->getResource()::getUrl('index');

        return $url;
    }
}
