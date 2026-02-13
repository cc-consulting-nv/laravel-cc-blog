<?php

declare(strict_types=1);

namespace CcConsulting\Blog\Filament\Resources\BlogPosts\Tables;

use CcConsulting\Blog\Models\BlogPost;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Pagination\LengthAwarePaginator;

final class BlogPostsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->records(function (int $page, int|string $recordsPerPage, ?string $search): LengthAwarePaginator {
                $perPage = is_string($recordsPerPage) ? 10 : $recordsPerPage;

                $options = [
                    'page' => $page,
                    'per_page' => $perPage,
                ];

                if ($search !== null && $search !== '' && $search !== '0') {
                    $options['search'] = $search;
                }

                $posts = BlogPost::allFromApi($options);

                // Create a paginator for proper Filament pagination support
                return new LengthAwarePaginator(
                    items: $posts,
                    total: $posts->count(), // API should return total count ideally
                    perPage: $perPage,
                    currentPage: $page,
                );
            })
            ->columns([
                TextColumn::make('title')
                    ->searchable()
                    ->sortable()
                    ->limit(50),

                TextColumn::make('status')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'published' => 'success',
                        'draft' => 'gray',
                        'scheduled' => 'warning',
                        'archived' => 'danger',
                        default => 'gray',
                    }),

                TextColumn::make('category.name')
                    ->label('Category')
                    ->placeholder('—'),

                TextColumn::make('author.name')
                    ->label('Author'),

                IconColumn::make('isFeatured')
                    ->label('Featured')
                    ->boolean()
                    ->trueIcon('heroicon-o-star')
                    ->falseIcon('heroicon-o-minus')
                    ->trueColor('warning'),

                TextColumn::make('publishedAt')
                    ->label('Published')
                    ->dateTime()
                    ->sortable()
                    ->placeholder('—'),

                TextColumn::make('createdAt')
                    ->label('Created')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->defaultSort('createdAt', 'desc')
            ->filters([
                SelectFilter::make('status')
                    ->options([
                        'draft' => 'Draft',
                        'published' => 'Published',
                        'scheduled' => 'Scheduled',
                        'archived' => 'Archived',
                    ]),
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
