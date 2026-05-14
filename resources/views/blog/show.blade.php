@extends('layouts.app')

@php
    $canonicalUrl = $post['canonicalUrl'] ?? url()->current();
    $socialTitle = $post['socialTitle'] ?? $post['metaTitle'] ?? $post['title'];
    $socialDescription = $post['socialDescription'] ?? $post['metaDescription'] ?? $post['excerpt'] ?? '';
    $socialImage = $post['socialImage'] ?? $post['ogImage'] ?? null;
    $summaryText = $post['answerSummary'] ?? $post['excerpt'] ?? '';
    $faqItems = is_array($post['faqItems'] ?? null) ? $post['faqItems'] : [];
    $howtoSteps = is_array($post['howtoSteps'] ?? null) ? $post['howtoSteps'] : [];
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
@php
    // JSON_HEX_TAG escapes </script> safely; JSON_UNESCAPED_SLASHES keeps URLs readable.
    $jsonFlags = JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE;
    $blogPosting = array_filter([
        '@context' => 'https://schema.org',
        '@type' => 'BlogPosting',
        'headline' => $post['title'] ?? '',
        'description' => $summaryText ?? '',
        'datePublished' => $post['publishedAt'] ?? '',
        'dateModified' => $post['updatedAt'] ?? '',
        'url' => $canonicalUrl ?? '',
        'image' => !empty($socialImage) ? $socialImage : null,
        'author' => [
            '@type' => 'Person',
            'name' => $post['authors'][0]['name'] ?? config('app.name'),
        ],
        'publisher' => [
            '@type' => 'Organization',
            'name' => config('app.name'),
        ],
        'mainEntityOfPage' => [
            '@type' => 'WebPage',
            '@id' => $canonicalUrl ?? '',
        ],
    ], static fn ($v) => $v !== null);
@endphp
<script type="application/ld+json">
{!! json_encode($blogPosting, $jsonFlags) !!}
</script>
@if(!empty($faqItems))
@php
    $faqPage = [
        '@context' => 'https://schema.org',
        '@type' => 'FAQPage',
        'mainEntity' => array_map(static fn (array $faq) => [
            '@type' => 'Question',
            'name' => $faq['question'] ?? '',
            'acceptedAnswer' => [
                '@type' => 'Answer',
                'text' => $faq['answer'] ?? '',
            ],
        ], $faqItems),
    ];
@endphp
<script type="application/ld+json">
{!! json_encode($faqPage, $jsonFlags) !!}
</script>
@endif
@if(!empty($howtoSteps))
@php
    $howToSchema = [
        '@context' => 'https://schema.org',
        '@type' => 'HowTo',
        'name' => $post['title'] ?? '',
        'description' => $summaryText ?? '',
        'step' => array_map(static fn (array $step, int $idx) => [
            '@type' => 'HowToStep',
            'position' => $idx + 1,
            'name' => $step['name'] ?? '',
            'text' => $step['text'] ?? '',
        ], $howtoSteps, array_keys($howtoSteps)),
    ];
@endphp
<script type="application/ld+json">
{!! json_encode($howToSchema, $jsonFlags) !!}
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

    {{-- Code-block styling. Highlighting is server-side via scrivo/highlight.php
         in TiptapToHtmlConverter::renderCodeBlock — we only need the token CSS
         here. --}}
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
        /* Mermaid containers — the rendered SVG sits inside; container styles
           keep it from inheriting the dark code-block background. */
        .blog-prose pre code.language-mermaid {
            display: none;
        }
        .blog-prose .mermaid {
            background: #ffffff;
            border-radius: 0.5rem;
            padding: 1rem;
            margin: 1.25rem 0;
            overflow-x: auto;
        }
    </style>

    {{-- Mermaid diagrams (task #18). Walks <code class="language-mermaid">,
         replaces each with a rendered SVG. mermaid.js is sandbox-CSP-friendly
         and the SECURITY_LEVEL setting blocks <foreignObject> + JS in labels. --}}
    @if(str_contains($post['contentHtml'] ?? '', 'language-mermaid'))
    <script type="module">
        import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
        mermaid.initialize({ startOnLoad: false, securityLevel: 'strict', theme: 'default' });
        document.querySelectorAll('.blog-prose pre code.language-mermaid').forEach(function (el, i) {
            const src = el.textContent;
            const container = document.createElement('div');
            container.className = 'mermaid';
            container.id = 'mermaid-' + i;
            el.closest('pre').replaceWith(container);
            mermaid.render('mermaid-svg-' + i, src).then(function (out) { container.innerHTML = out.svg; });
        });
    </script>
    @endif

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
