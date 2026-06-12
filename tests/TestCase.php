<?php

declare(strict_types=1);

namespace CcConsulting\Blog\Tests;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Orchestra\Testbench\TestCase as Orchestra;

abstract class TestCase extends Orchestra
{
    protected function setUp(): void
    {
        parent::setUp();

        Route::get('/login', fn (): string => 'login page')->name('login');
    }

    /**
     * @param  Application  $app
     */
    protected function defineEnvironment($app): void
    {
        /** @var \Illuminate\Config\Repository $config */
        $config = $app['config'];

        $config->set('app.key', 'base64:AckfSECXIvnK5r28GVIWUAxmbBSjTsmF7wO4j3IpdGU=');
        $config->set('session.driver', 'array');
        $config->set('cc-blog.api_token', null);
        $config->set('cc-blog.login_route', 'login');
    }
}
