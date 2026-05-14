# Security Posture

## Build-Script Allowlist (Supply-Chain)

pnpm 11 refuses to run dependency build scripts by default, which is the right
default after the September 2025 Shai-Hulud and May 2026 Mini Shai-Hulud
attacks where malicious npm postinstall scripts stole credentials and OIDC
tokens from CI runners. We participate in that default explicitly.

The only build script we re-enable is **esbuild**, because vite needs the
esbuild platform binary at build time and there is no published path that
avoids it. The opt-in lives in `pnpm-workspace.yaml`:

```yaml
allowBuilds:
  esbuild: true
```

To narrow the blast radius if a compromised esbuild ever ships, we layer
three defenses:

1. **Exact version + SHA-512 integrity pin in `pnpm-lock.yaml`.** Any
   different tarball than the one we vetted fails install with an integrity
   mismatch.
2. **Out-of-band SHA pin in `.esbuild-pinned.txt`.** The CI publish workflow
   verifies the lockfile entry matches this file *before* pnpm install runs.
   A lockfile push that quietly bumps esbuild fails the build and prints a
   diff. This is belt-and-suspenders against a lockfile-only attack.
3. **Sandtrace scan on every PR.** Surfaces secrets, obfuscation, and
   typosquats before merge.

Upgrading esbuild is a deliberate two-step:

1. Update `pnpm-lock.yaml` (e.g. `pnpm up esbuild`).
2. Copy the new pin into `.esbuild-pinned.txt`:
   ```bash
   grep -A1 "^  esbuild@" pnpm-lock.yaml | head -2 | \
     awk 'NR==1{v=$1; gsub(":","",v)} NR==2{match($0,/sha512-[A-Za-z0-9+/=]+/); h=substr($0,RSTART,RLENGTH)} END{print v, h}' \
     > .esbuild-pinned.txt
   ```
3. Commit both files together. Skim the new esbuild release notes for
   anything unusual (new postinstall behavior, new maintainers, sudden
   minification of dist).

If you can avoid esbuild entirely (ship pre-built `dist/`, skip CI Node) —
do that instead. This package opts into the build because the dist/ output
is consumed by downstream sites' vite pipelines and a single source of
truth is worth more than the additional CI surface area. Future
consideration: split build into an isolated, secret-less runner job.

## Reporting

Security issues: open an issue marked `[security]` or contact the maintainer
directly. Do not disclose publicly before a patch is available.
