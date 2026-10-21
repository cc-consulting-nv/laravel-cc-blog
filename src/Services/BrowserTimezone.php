<?php

declare(strict_types=1);

namespace CcConsulting\Blog\Services;

use DateTimeZone;

/**
 * The admin user's browser timezone, set as a cookie by the panel's head
 * script. Filament converts form values between this zone and the app
 * timezone, so the API still receives UTC.
 */
final class BrowserTimezone
{
    public const COOKIE = 'cc_blog_tz';

    public static function get(): string
    {
        $timezone = request()->cookie(self::COOKIE);

        if (is_string($timezone) && in_array($timezone, DateTimeZone::listIdentifiers(DateTimeZone::ALL_WITH_BC), true)) {
            return $timezone;
        }

        /** @var string */
        return config('app.timezone');
    }

    public static function script(): string
    {
        return "<script>document.cookie='".self::COOKIE."='+encodeURIComponent(Intl.DateTimeFormat().resolvedOptions().timeZone)+';path=/;max-age=31536000;samesite=lax'</script>";
    }
}
