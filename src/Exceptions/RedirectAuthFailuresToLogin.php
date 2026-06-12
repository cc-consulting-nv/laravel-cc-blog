<?php

declare(strict_types=1);

namespace CcConsulting\Blog\Exceptions;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Throwable;

/**
 * Exception renderer: turn CC Platform auth failures into a login redirect.
 *
 * The session token can expire mid-session; when the API rejects it (after
 * the refresh-token retry has failed), the user should land on the login
 * page instead of a 500. Registered automatically by CcBlogServiceProvider.
 */
final class RedirectAuthFailuresToLogin
{
    public function __invoke(Throwable $e, Request $request): JsonResponse|RedirectResponse|null
    {
        $authFailure = $this->findAuthFailure($e);

        if (! $authFailure instanceof ApiRequestException) {
            return null;
        }

        if ($request->hasSession()) {
            $request->session()->forget(['cc_access_token', 'cc_refresh_token']);
        }

        if ($request->expectsJson()) {
            return new JsonResponse(['message' => $authFailure->getMessage()], 401);
        }

        /** @var string $loginRoute */
        $loginRoute = config('cc-blog.login_route', 'login');

        return new RedirectResponse(route($loginRoute));
    }

    /**
     * Find an auth-flavoured ApiRequestException anywhere in the exception
     * chain. Filament tables fetch their records during Blade rendering, so
     * the exception usually arrives wrapped in nested ViewExceptions.
     */
    private function findAuthFailure(Throwable $e): ?ApiRequestException
    {
        for ($current = $e; $current instanceof Throwable; $current = $current->getPrevious()) {
            if ($current instanceof ApiRequestException && in_array($current->getCode(), [401, 403], true)) {
                return $current;
            }
        }

        return null;
    }
}
