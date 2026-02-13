@extends('layouts.app')

@section('title', 'Blog Admin')

@section('content')
<div class="min-h-screen">
    <div id="blog-admin-app"></div>
</div>
@endsection

@push('scripts')
    <script src="{{ asset('vendor/cc-blog/blog-admin.js') }}" type="module"></script>
@endpush
