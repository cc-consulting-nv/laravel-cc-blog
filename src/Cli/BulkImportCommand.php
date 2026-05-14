<?php

declare(strict_types=1);

namespace CcConsulting\Blog\Cli;

/**
 * `cc-blog bulk-publish <root-dir>` — walk a directory of slug subdirs and
 * publish each one. Continues on per-post failure, prints a summary at the end.
 *
 * Designed for one-time backfills of `~/uglydawg/content/blog/` against the
 * cc-api. Each subdirectory must contain `<slug>/<slug>.md` with valid
 * frontmatter (see BlogFrontmatterParser).
 *
 * NOTE: this command depends on task #19 (HtmlToTiptapConverter stray-newline
 * fix) being merged before running against posts that already exist in the
 * DB — otherwise the round-trip will introduce stray text nodes that Tiptap's
 * schema rejects when the post is opened in the Filament editor.
 */
final class BulkImportCommand
{
    public function run(array $argv): int
    {
        $dryRun = false;
        $continueOnError = true;
        $positional = [];

        foreach ($argv as $arg) {
            if ($arg === '--dry-run') {
                $dryRun = true;
            } elseif ($arg === '--fail-fast') {
                $continueOnError = false;
            } elseif (str_starts_with($arg, '--')) {
                fwrite(STDERR, "unknown flag: $arg\n");

                return PublishCommand::EXIT_USAGE;
            } else {
                $positional[] = $arg;
            }
        }

        if ($positional === []) {
            fwrite(STDERR, "usage: cc-blog bulk-publish <root-dir> [--dry-run] [--fail-fast]\n");

            return PublishCommand::EXIT_USAGE;
        }

        $root = rtrim($positional[0], '/');

        if (! is_dir($root)) {
            fwrite(STDERR, "not a directory: $root\n");

            return PublishCommand::EXIT_USAGE;
        }

        $dirs = array_filter(glob($root.'/*') ?: [], 'is_dir');
        sort($dirs);

        $stats = ['ok' => 0, 'failed' => 0, 'skipped' => 0];
        $failures = [];

        foreach ($dirs as $dir) {
            $slug = basename($dir);
            $md = "$dir/$slug.md";

            if (! is_file($md)) {
                fwrite(STDERR, "[skip] $slug — no $slug.md\n");
                $stats['skipped']++;
                continue;
            }

            // Quick frontmatter check — bail with helpful message if missing,
            // since this is a backfill tool and we expect each post to have
            // already been converted to the frontmatter format.
            $head = (string) file_get_contents($md, false, null, 0, 4);
            if ($head !== "---\n") {
                fwrite(STDERR, "[skip] $slug — no frontmatter (run 'cc-blog dump-metadata $slug' first to backfill)\n");
                $stats['skipped']++;
                continue;
            }

            fwrite(STDOUT, "[publishing] $slug\n");

            $args = [$dir];
            if ($dryRun) {
                $args[] = '--dry-run';
            }

            $code = (new PublishCommand())->run($args);

            if ($code === PublishCommand::EXIT_OK) {
                $stats['ok']++;
            } else {
                $stats['failed']++;
                $failures[] = "$slug (exit $code)";

                if (! $continueOnError) {
                    fwrite(STDERR, "bulk-publish aborting (--fail-fast)\n");
                    break;
                }
            }
        }

        fwrite(STDOUT, sprintf(
            "\nbulk-publish complete: %d ok, %d failed, %d skipped\n",
            $stats['ok'],
            $stats['failed'],
            $stats['skipped'],
        ));

        if ($failures !== []) {
            fwrite(STDERR, "failures:\n");
            foreach ($failures as $f) {
                fwrite(STDERR, "  - $f\n");
            }

            return PublishCommand::EXIT_API;
        }

        return PublishCommand::EXIT_OK;
    }
}
