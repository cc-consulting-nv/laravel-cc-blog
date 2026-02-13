@extends('layouts.app')

@section('title', ($currentCategory['name'] ?? 'Category') . ' | Blog')
@section('meta_description', 'Browse ' . ($currentCategory['name'] ?? 'articles') . ' on AI-augmented development, Laravel best practices, and software engineering.')

@section('content')
<div class="max-w-6xl mx-auto px-4 py-16 space-y-10">
    <header>
        <a href="{{ route('blog.index') }}" class="text-sm text-amber-300 hover:text-amber-200 transition mb-4 inline-block">&larr; All Posts</a>
        <p class="text-sm uppercase tracking-widest text-amber-200">Category</p>
        <h1 class="text-4xl text-white font-semibold">{{ $currentCategory['name'] ?? 'Category' }}</h1>
        @if(!empty($currentCategory['description']))
            <p class="text-slate-300 mt-2">{{ $currentCategory['description'] }}</p>
        @endif
    </header>

    {{-- Categories Navigation --}}
    @if(!empty($categories))
    <section class="flex flex-wrap gap-2">
        <a href="{{ route('blog.index') }}" class="px-4 py-2 rounded-full bg-white/5 text-slate-300 text-sm hover:bg-white/10 transition">All</a>
        @foreach($categories as $category)
            <a href="{{ route('blog.category', $category['slug']) }}"
               class="px-4 py-2 rounded-full text-sm transition {{ ($currentCategory['slug'] ?? '') === $category['slug'] ? 'bg-amber-500/20 text-amber-300' : 'bg-white/5 text-slate-300 hover:bg-white/10' }}">
                {{ $category['name'] }}
                @if(isset($category['postCount']))
                    <span class="text-slate-500">({{ $category['postCount'] }})</span>
                @endif
            </a>
        @endforeach
    </section>
    @endif

    {{-- Posts in Category --}}
    <section>
        @if(empty($posts))
            <div class="text-center py-12">
                <p class="text-slate-400">No posts found in this category.</p>
                <a href="{{ route('blog.index') }}" class="text-amber-300 hover:text-amber-200 mt-4 inline-block">&larr; Browse all posts</a>
            </div>
        @else
            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                @foreach($posts as $post)
                    <article class="border border-white/5 rounded-3xl p-6 bg-white/5 flex flex-col gap-3 hover:border-white/10 transition">
                        @if(!empty($post['ogImage']))
                            <img src="{{ $post['ogImage'] }}" alt="{{ $post['title'] }}" class="w-full h-40 object-cover rounded-2xl mb-2">
                        @endif
                        <div class="flex items-center gap-2">
                            <p class="text-xs uppercase tracking-widest text-slate-400">
                                {{ !empty($post['publishedAt']) ? \Carbon\Carbon::parse($post['publishedAt'])->format('M d, Y') : '' }}
                            </p>
                            @if(!empty($post['readingTimeMinutes']))
                                <span class="text-xs text-slate-500">{{ $post['readingTimeMinutes'] }} min read</span>
                            @endif
                        </div>
                        <h3 class="text-xl font-semibold text-white">{{ $post['title'] }}</h3>
                        <p class="text-sm text-slate-300 line-clamp-2">{{ $post['excerpt'] ?? '' }}</p>
                        @if(!empty($post['author']))
                            <p class="text-xs text-slate-500">By {{ $post['author']['name'] }}</p>
                        @endif
                        <div class="flex flex-wrap gap-2 text-xs mt-auto">
                            @foreach(array_slice($post['tags'] ?? [], 0, 3) as $tag)
                                <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200">{{ $tag }}</span>
                            @endforeach
                        </div>
                        <a href="{{ route('blog.show', $post['slug']) }}" class="text-amber-300 text-sm font-semibold hover:text-amber-200">Read Article</a>
                    </article>
                @endforeach
            </div>
        @endif
    </section>

    {{-- Pagination --}}
    @if(!empty($meta['next_cursor']) || !empty($meta['prev_cursor']))
    <div class="flex justify-center gap-4">
        @if(!empty($meta['prev_cursor']))
            <a href="?cursor={{ $meta['prev_cursor'] }}" class="px-6 py-2 rounded-lg bg-white/5 text-slate-300 hover:bg-white/10 transition">Previous</a>
        @endif
        @if(!empty($meta['next_cursor']))
            <a href="?cursor={{ $meta['next_cursor'] }}" class="px-6 py-2 rounded-lg bg-white/5 text-slate-300 hover:bg-white/10 transition">Next</a>
        @endif
    </div>
    @endif
</div>
@endsection
