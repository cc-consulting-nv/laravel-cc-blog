<?php

declare(strict_types=1);

namespace CcConsulting\Blog\Filament\Resources\BlogPosts\Schemas;

use CcConsulting\Blog\Filament\Plugins\MarkdownPastePlugin;
use CcConsulting\Blog\Services\CcPlatformApi;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

final class BlogPostForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required()
                    ->maxLength(255)
                    ->live(onBlur: true)
                    ->afterStateUpdated(function (Set $set, ?string $state): void {
                        if ($state !== null && $state !== '') {
                            $set('slug', Str::slug($state));
                        }
                    }),

                TextInput::make('slug')
                    ->required()
                    ->maxLength(100),

                RichEditor::make('content')
                    ->label('Body')
                    ->required()
                    ->plugins([new MarkdownPastePlugin])
                    ->toolbarButtons([
                        'bold',
                        'italic',
                        'underline',
                        'strike',
                        'h2',
                        'h3',
                        'bulletList',
                        'orderedList',
                        'link',
                        'blockquote',
                        'codeBlock',
                        'redo',
                        'undo',
                    ])
                    ->columnSpanFull(),

                Textarea::make('excerpt')
                    ->label('Excerpt')
                    ->maxLength(500)
                    ->rows(3)
                    ->columnSpanFull(),

                Select::make('status')
                    ->label('Status')
                    ->options([
                        'draft' => 'Draft',
                        'published' => 'Published',
                        'scheduled' => 'Scheduled',
                        'archived' => 'Archived',
                    ])
                    ->default('draft')
                    ->required(),

                DateTimePicker::make('scheduled_for')
                    ->label('Schedule For'),

                Select::make('category_id')
                    ->label('Category')
                    ->options(fn (): array => self::getCategoryOptions())
                    ->searchable(),

                Toggle::make('isFeatured')
                    ->label('Featured Post'),

                TextInput::make('feature_order')
                    ->label('Feature Order')
                    ->numeric()
                    ->minValue(1),

                TextInput::make('meta_title')
                    ->label('Meta Title')
                    ->maxLength(70),

                Textarea::make('meta_description')
                    ->label('Meta Description')
                    ->maxLength(160)
                    ->rows(2),
            ]);
    }

    /**
     * Get category options from the API.
     *
     * @return array<string, string>
     */
    private static function getCategoryOptions(): array
    {
        $api = app(CcPlatformApi::class);
        $categories = $api->getBlogCategories();

        $options = [];
        foreach ($categories as $category) {
            if (isset($category['id'], $category['name'])) {
                $id = $category['id'];
                $name = $category['name'];
                if ((is_string($id) || is_int($id)) && is_string($name)) {
                    $options[(string) $id] = $name;
                }
            }
        }

        return $options;
    }
}
