@extends('layouts.app')

@php
    $canonicalUrl = $post['canonicalUrl'] ?? url()->current();
    $socialTitle = $post['socialTitle'] ?? $post['metaTitle'] ?? $post['title'];
    $socialDescription = $post['socialDescription'] ?? $post['metaDescription'] ?? $post['excerpt'] ?? '';
    $socialImage = $post['socialImage'] ?? $post['ogImage'] ?? null;
    $summaryText = $post['answerSummary'] ?? $post['excerpt'] ?? '';
    $faqItems = is_array($post['faqItems'] ?? null) ? $post['faqItems'] : [];
@endphp

@section('title', ($post['metaTitle'] ?? $post['title']) . ' | Blog')
@section('meta_description', $post['metaDescription'] ?? $summaryText)
@section('canonical_url', $canonicalUrl)
@section('og_title', $socialTitle)
@section('og_description', $socialDescription)
@section('og_type', 'article')
@section('og_url', $canonicalUrl)
@section('twitter_title', $socialTitle)
@section('twitter_description', $socialDescription)
@section('article_published_time', $post['publishedAt'] ?? '')
@section('article_modified_time', $post['updatedAt'] ?? '')
@if(!empty($socialImage))
@section('og_image', $socialImage)
@section('twitter_image', $socialImage)
@endif

@push('schema')
<script type="application/ld+json">
{
    "@@context": "https://schema.org",
    "@@type": "BlogPosting",
    "headline": "{{ $post['title'] }}",
    "description": "{{ $summaryText }}",
    "datePublished": "{{ $post['publishedAt'] ?? '' }}",
    "dateModified": "{{ $post['updatedAt'] ?? '' }}",
    "url": "{{ $canonicalUrl }}",
    @if(!empty($socialImage))
    "image": "{{ $socialImage }}",
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
        "@@id": "{{ $canonicalUrl }}"
    }
}
</script>
@if(!empty($faqItems))
<script type="application/ld+json">
{
    "@@context": "https://schema.org",
    "@@type": "FAQPage",
    "mainEntity": [
        @foreach($faqItems as $index => $faq)
        {
            "@@type": "Question",
            "name": "{{ $faq['question'] ?? '' }}",
            "acceptedAnswer": {
                "@@type": "Answer",
                "text": "{{ $faq['answer'] ?? '' }}"
            }
        }@if($index < count($faqItems) - 1),@endif
        @endforeach
    ]
}
</script>
@endif
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

    @if(!empty($socialImage))
        <img src="{{ $socialImage }}" alt="{{ $post['title'] }}" class="w-full rounded-2xl object-cover max-h-96">
    @endif

    @if(!empty($post['answerSummary']))
        <section class="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
            <h2 class="text-sm font-semibold uppercase tracking-widest text-amber-300">Quick Answer</h2>
            <p class="mt-3 text-base text-slate-200">{{ $post['answerSummary'] }}</p>
        </section>
    @endif

    <article class="prose blog-prose max-w-none">
        {!! $post['contentHtml'] ?? '' !!}
    </article>

    {{-- Syntax highlighting for code blocks --}}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.10.0/build/styles/github-dark.min.css">
    <style>
        .blog-prose pre {
            background: #0d1117;
            border: 1px solid rgba(148, 163, 184, 0.15);
            border-radius: 0.5rem;
            padding: 1rem 1.25rem;
            margin: 1.25rem 0;
            overflow-x: auto;
            line-height: 1.55;
            font-size: 0.875rem;
        }
        .blog-prose pre code {
            background: transparent;
            padding: 0;
            font-family: 'Fira Code', ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;
            font-size: 0.875rem;
            color: #e6edf3;
        }
        .blog-prose :not(pre) > code {
            background: rgba(148, 163, 184, 0.15);
            color: #fbbf24;
            padding: 0.15rem 0.4rem;
            border-radius: 0.25rem;
            font-size: 0.85em;
        }
    </style>
    <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.10.0/build/highlight.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.10.0/build/languages/yaml.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.10.0/build/languages/bash.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.10.0/build/languages/dockerfile.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.10.0/build/languages/php.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.10.0/build/languages/javascript.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.10.0/build/languages/typescript.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.10.0/build/languages/json.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.10.0/build/languages/python.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.10.0/build/languages/sql.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.10.0/build/languages/markdown.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            document.querySelectorAll('.blog-prose pre code').forEach(function (el) {
                if (window.hljs) { window.hljs.highlightElement(el); }
            });
        });
    </script>

    @if(!empty($faqItems))
    <section class="pt-8 border-t border-white/10">
        <h2 class="text-lg font-semibold text-amber-200 mb-6">Frequently Asked Questions</h2>
        <div class="space-y-4">
            @foreach($faqItems as $faq)
                <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <h3 class="text-base font-medium text-white">{{ $faq['question'] ?? '' }}</h3>
                    <p class="mt-2 text-sm text-slate-300">{{ $faq['answer'] ?? '' }}</p>
                </div>
            @endforeach
        </div>
    </section>
    @endif

    {{-- Related Posts --}}
    @if(!empty($related))
    <section class="pt-8 border-t border-white/10">
        <h2 class="text-lg font-semibold text-amber-200 mb-6">Related Articles</h2>
        <div class="grid gap-6 md:grid-cols-3">
            @foreach($related as $entry)
                <a href="{{ route('blog.show', $entry['slug']) }}" class="border border-white/5 rounded-2xl p-5 bg-white/5 block hover:border-white/10 transition group">
                    @if(!empty($entry['socialImage'] ?? $entry['ogImage'] ?? null))
                        <img src="{{ $entry['socialImage'] ?? $entry['ogImage'] }}" alt="{{ $entry['title'] }}" class="w-full h-32 object-cover rounded-xl mb-3">
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
