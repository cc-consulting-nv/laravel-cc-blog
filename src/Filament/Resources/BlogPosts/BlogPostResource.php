<?php

declare(strict_types=1);

namespace CcConsulting\Blog\Filament\Resources\BlogPosts;

use BackedEnum;
use CcConsulting\Blog\Filament\Resources\BlogPosts\Pages\CreateBlogPost;
use CcConsulting\Blog\Filament\Resources\BlogPosts\Pages\EditBlogPost;
use CcConsulting\Blog\Filament\Resources\BlogPosts\Pages\ListBlogPosts;
use CcConsulting\Blog\Filament\Resources\BlogPosts\Schemas\BlogPostForm;
use CcConsulting\Blog\Filament\Resources\BlogPosts\Tables\BlogPostsTable;
use CcConsulting\Blog\Models\BlogPost;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

final class BlogPostResource extends Resource
{
    protected static ?string $model = BlogPost::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    public static function form(Schema $schema): Schema
    {
        return BlogPostForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return BlogPostsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListBlogPosts::route('/'),
            'create' => CreateBlogPost::route('/create'),
            'edit' => EditBlogPost::route('/{record}/edit'),
        ];
    }
}
