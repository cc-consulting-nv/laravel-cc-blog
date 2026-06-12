<?php

declare(strict_types=1);

use CcConsulting\Blog\Tests\TestCase;

/*
 * Pest configuration. Unit tests cover pure functions (converters/parsers)
 * and need no application; Feature tests boot a Testbench app via TestCase.
 */

uses(TestCase::class)->in('Feature');
