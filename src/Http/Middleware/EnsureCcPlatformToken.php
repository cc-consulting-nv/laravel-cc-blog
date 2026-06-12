<?php

declare(strict_types=1);

namespace CcConsulting\Blog\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

final class EnsureCcPlatformToken
{
    /**
     * Force a fresh login when the session has no CC Platform token.
     *
     * Host apps typically store the CC Platform access/refresh tokens in the
     * session and log the panel user in with a remember-me cookie. When the
     * session expires, the remember cookie restores panel auth into a fresh
     * session that has no CC Platform tokens, so every blog resource page
     * would otherwise throw an API auth error mid-render.
     *
     * Skipped entirely when a server-side api_token is configured.
     *
     * @param  Closure(Request): Response  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        /** @var string|null $apiToken */
        $apiToken = config('cc-blog.api_token');

        if ($apiToken !== null && $apiToken !== '') {
            return $next($request);
        }

        if ($request->session()->has('cc_access_token')) {
            return $next($request);
        }

        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        /** @var string $loginRoute */
        $loginRoute = config('cc-blog.login_route', 'login');

        return to_route($loginRoute);
    }
}
