@extends('layouts.app')

@section('title', ($post['metaTitle'] ?? $post['title']) . ' | Blog')
@section('meta_description', $post['metaDescription'] ?? $post['excerpt'] ?? '')

@section('og_title', $post['metaTitle'] ?? $post['title'])
@section('og_description', $post['metaDescription'] ?? $post['excerpt'] ?? '')
@section('og_type', 'article')
@if(!empty($post['ogImage']))
@section('og_image', $post['ogImage'])
@endif

@push('schema')
<script type="application/ld+json">
{
    "@@context": "https://schema.org",
    "@@type": "BlogPosting",
    "headline": "{{ $post['title'] }}",
    "description": "{{ $post['excerpt'] ?? '' }}",
    "datePublished": "{{ $post['publishedAt'] ?? '' }}",
    "dateModified": "{{ $post['updatedAt'] ?? '' }}",
    @if(!empty($post['ogImage']))
    "image": "{{ $post['ogImage'] }}",
    @endif
    "author": {
        "@@type": "Person",
        "name": "{{ $post['authors'][0]['name'] ?? config('app.name') }}"
    },
    "publisher": {
        "@@type": "Organization",
        "name": "{{ config('app.name') }}"
    },
    "mainEntityOfPage": {
        "@@type": "WebPage",
        "@@id": "{{ url()->current() }}"
    }
}
</script>
@endpush

@section('content')
<div class="max-w-4xl mx-auto px-4 py-16 space-y-8">
    <a href="{{ route('blog.index') }}" class="text-sm text-amber-300 hover:text-amber-200 transition">&larr; Back to Blog</a>

    <header class="space-y-4">
        <div class="flex items-center gap-3 text-sm">
            <p class="text-xs uppercase tracking-widest text-slate-400">
                {{ !empty($post['publishedAt']) ? \Carbon\Carbon::parse($post['publishedAt'])->format('F d, Y') : '' }}
            </p>
            @if(!empty($post['category']))
                <span class="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs">{{ $post['category']['name'] }}</span>
            @endif
            @if(!empty($post['readingTimeMinutes']))
                <span class="text-slate-500">&middot; {{ $post['readingTimeMinutes'] }} min read</span>
            @endif
        </div>

        <h1 class="text-4xl md:text-5xl font-semibold text-white leading-tight">{{ $post['title'] }}</h1>

        @if(!empty($post['excerpt']))
            <p class="text-lg text-slate-300">{{ $post['excerpt'] }}</p>
        @endif

        @if(!empty($post['authors']))
            <div class="flex items-center gap-3">
                @foreach($post['authors'] as $author)
                    <div class="flex items-center gap-2">
                        @if(!empty($author['avatar']))
                            <img src="{{ $author['avatar'] }}" alt="{{ $author['name'] }}" class="w-10 h-10 rounded-full object-cover">
                        @else
                            <div class="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-300 font-semibold">
                                {{ strtoupper(substr($author['name'], 0, 1)) }}
                            </div>
                        @endif
                        <div>
                            <p class="text-sm text-white font-medium">{{ $author['name'] }}</p>
                            <p class="text-xs text-slate-500">{{ '@' . $author['username'] }}</p>
                        </div>
                    </div>
                @endforeach
            </div>
        @endif

        <div class="flex flex-wrap gap-2 text-xs">
            @foreach($post['tags'] ?? [] as $tag)
                <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200">{{ $tag }}</span>
            @endforeach
        </div>
    </header>

    @if(!empty($post['ogImage']))
        <img src="{{ $post['ogImage'] }}" alt="{{ $post['title'] }}" class="w-full rounded-2xl object-cover max-h-96">
    @endif

    <article class="prose max-w-none">
        {!! $post['contentHtml'] ?? '' !!}
    </article>

    {{-- Related Posts --}}
    @if(!empty($related))
    <section class="pt-8 border-t border-white/10">
        <h2 class="text-lg font-semibold text-amber-200 mb-6">Related Articles</h2>
        <div class="grid gap-6 md:grid-cols-3">
            @foreach($related as $entry)
                <a href="{{ route('blog.show', $entry['slug']) }}" class="border border-white/5 rounded-2xl p-5 bg-white/5 block hover:border-white/10 transition group">
                    @if(!empty($entry['ogImage']))
                        <img src="{{ $entry['ogImage'] }}" alt="{{ $entry['title'] }}" class="w-full h-32 object-cover rounded-xl mb-3">
                    @endif
                    <p class="text-xs uppercase tracking-widest text-slate-400 mb-2">
                        {{ !empty($entry['publishedAt']) ? \Carbon\Carbon::parse($entry['publishedAt'])->format('M d, Y') : '' }}
                    </p>
                    <p class="text-white font-medium group-hover:text-amber-300 transition">{{ $entry['title'] }}</p>
                    @if(!empty($entry['excerpt']))
                        <p class="text-sm text-slate-400 mt-2 line-clamp-2">{{ $entry['excerpt'] }}</p>
                    @endif
                </a>
            @endforeach
        </div>
    </section>
    @endif
</div>
@endsection
