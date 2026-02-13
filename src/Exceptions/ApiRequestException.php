<?php

declare(strict_types=1);

namespace CcConsulting\Blog\Exceptions;

use RuntimeException;

/**
 * Thrown when a CC Platform API request fails.
 */
final class ApiRequestException extends RuntimeException {}
