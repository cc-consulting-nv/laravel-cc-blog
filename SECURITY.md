# Security Posture

## Supply-Chain: No Node In CI

This package ships its `dist/` (Vue + Tiptap admin assets) **committed to
git**. CI never runs `pnpm install` or `pnpm build`. That closes the
postinstall-script supply-chain vector that Shai-Hulud (Sep 2025) and Mini
Shai-Hulud (May 2026) weaponized — those attacks executed attacker-controlled
postinstall code on CI runners and exfiltrated `GITHUB_TOKEN` / OIDC publish
tokens.

### How it works

- `resources/js/` is the source for the Filament Tiptap admin (Vue 3,
  Tiptap, ProseMirror).
- `dist/` is the built output (vite library mode, ES modules).
- **`dist/` is committed**. Consumers pull it via Composer and publish to
  their app's `public/vendor/cc-blog/`.
- The CI publish workflow (`/.github/workflows/publish.yml`) does PHP-only
  checks: `composer validate`, `composer install`, presence + freshness of
  `dist/`. No Node, no esbuild, no postinstall execution.

### Contributor flow when touching `resources/js/`

```bash
# After editing anything in resources/js/
pnpm install        # one-time per machine, or after lockfile changes
pnpm build          # regenerate dist/
git add resources/js dist
git commit -m "..."
```

CI verifies on every push:

1. `dist/blog-admin.js` and `dist/laravel-cc-blog.css` exist.
2. The most recent commit touching `dist/` is at-or-after the most recent
   commit touching `resources/js/`. If you bumped JS source but forgot
   to rebuild, CI fails with a clear error.

### Why this approach beats `allowBuilds`

pnpm 11's `allowBuilds` lets you opt-in to running specific postinstall
scripts. We initially used it (esbuild needs its postinstall to compile the
platform binary). It's a real trust grant — if the pinned esbuild version is
ever compromised (npm account takeover, OIDC trusted-publisher abuse), the
attacker's code runs on our publish runner with `GITHUB_TOKEN` in scope.

Shipping pre-built `dist/` removes the option to make that mistake. The
postinstall script never executes on a CI runner that has secrets. Local
developers running `pnpm build` run it on workstations that don't have the
publish credentials.

### Local development: pnpm 11 vs 10

Local `pnpm install` may still hit `[ERR_PNPM_IGNORED_BUILDS]` for esbuild
on pnpm 11+. Either:
- Use pnpm 10.33.x: `corepack use pnpm@10.33.2`
- Or set `pnpm-workspace.yaml` with `allowBuilds: {esbuild: true}` on your
  local machine. This is your laptop, not CI; the security tradeoff is
  yours to make.

We deliberately don't commit a project-wide `pnpm-workspace.yaml` with
allowBuilds, because that would silently allow it on any future CI
workflow someone adds.

## Reporting Issues

Security issues: open an issue marked `[security]` or contact the maintainer
directly. Do not disclose publicly before a patch is available.
