<?php

declare(strict_types=1);

namespace CcConsulting\Blog\Filament\Resources\BlogPosts\Pages;

use CcConsulting\Blog\Exceptions\ApiRequestException;
use CcConsulting\Blog\Filament\Resources\BlogPosts\BlogPostResource;
use CcConsulting\Blog\Models\BlogPost;
use CcConsulting\Blog\Services\CcPlatformApi;
use Filament\Actions\Action;
use Filament\Actions\DeleteAction;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\EditRecord;
use Illuminate\Database\Eloquent\Model;

final class EditBlogPost extends EditRecord
{
    protected static string $resource = BlogPostResource::class;

    public function getHeaderActions(): array
    {
        /** @var BlogPost $record */
        $record = $this->record;

        return [
            Action::make('publish')
                ->label('Publish')
                ->icon('heroicon-o-globe-alt')
                ->color('success')
                ->visible(fn (): bool => $record->status !== 'published')
                ->requiresConfirmation()
                ->action(function () use ($record): void {
                    $api = app(CcPlatformApi::class);
                    $result = $api->publishBlogPost($record->ulid);

                    if ($result) {
                        Notification::make()
                            ->title('Blog post published')
                            ->success()
                            ->send();

                        $this->redirect($this->getResource()::getUrl('index'));
                    } else {
                        Notification::make()
                            ->title('Failed to publish')
                            ->danger()
                            ->send();
                    }
                }),

            DeleteAction::make()
                ->action(function () use ($record): void {
                    try {
                        $record->deleteViaApi();

                        Notification::make()
                            ->title('Blog post deleted')
                            ->success()
                            ->send();

                        $this->redirect($this->getResource()::getUrl('index'));
                    } catch (ApiRequestException $e) {
                        Notification::make()
                            ->title('Failed to delete')
                            ->body($e->getMessage())
                            ->danger()
                            ->persistent()
                            ->send();
                    }
                }),
        ];
    }

    /**
     * Resolve the record from API instead of database.
     */
    protected function resolveRecord(int|string $key): Model
    {
        $post = BlogPost::findFromApi((string) $key);

        abort_if(! $post instanceof BlogPost, 404);

        return $post;
    }

    /**
     * Handle the record update via API.
     *
     * @param  array<string, mixed>  $data
     */
    protected function handleRecordUpdate(Model $record, array $data): Model
    {
        /** @var BlogPost $record */
        $record->fill($data);

        try {
            $record->saveViaApi();

            return $record;
        } catch (ApiRequestException $e) {
            Notification::make()
                ->title('Failed to update blog post')
                ->body($e->getMessage())
                ->danger()
                ->persistent()
                ->send();

            $this->halt();

            return $record;
        }
    }

    /**
     * Redirect to list page after save.
     */
    protected function getRedirectUrl(): string
    {
        /** @var string $url */
        $url = $this->getResource()::getUrl('index');

        return $url;
    }
}
