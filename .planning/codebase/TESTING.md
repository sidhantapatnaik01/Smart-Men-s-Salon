# TESTING.md

**Headline:** No automated testing exists. No unit, integration, or e2e tests. No linter, formatter, type checker, or CI workflow. No `package.json` anywhere in the repo (verified via `Glob **/package.json`). No `*.test.*` / `*.spec.*` files (verified via `Glob`). No `tests/`, `__tests__/`, `e2e/`, `cypress/`, `playwright/` directories. No `.eslintrc*`, `.prettierrc*`, `biome.json`, `.editorconfig`, `tsconfig.json`.

## CI / GitHub Actions

**None.** `.github/` contains only `copilot-instructions.md` — no `workflows/` subdirectory.

> Note: the top-level `workflows/` directory at the repo root is **not** GitHub Actions. It holds Claude Code subagent orchestration specs (`pre-commit.md`, `pre-deploy.md`, `full-audit.md`, `new-feature.md`, `bug-fix.md`, `release-prep.md`) that only run when invoked from a Claude session.

## Truthpack

`.vibecheck/truthpack/` does **not** exist. `.vibecheck/` contains `last-score.json`, `flow/`, `isl-studio/`, `provenance/` only — no `product.json`, `routes.json`, etc., to cross-reference.

## Manual QA process (from `HANDOFF.md`)

1. Open `index.html` directly in a browser (self-contained; React/Babel load from `unpkg.com` CDN).
2. GitHub Pages preview from `main` branch (custom domain pinned via `CNAME`).
3. Lighthouse run manually — targets in `HANDOFF.md`: Performance 90+, Accessibility 95+, SEO 100, Best Practices 95+.
4. Google Rich Results Test against deployed URL to verify the four JSON-LD blocks (`HairSalon`, `Organization`, `WebSite`, `FAQPage`).
5. Google Mobile-Friendly Test.
6. `curl -sI` smoke checks against `/`, `/robots.txt`, `/sitemap.xml`.
7. WhatsApp link spot-check (`https://wa.me/919437850989`) — `Booking` component at `index.html:2059` builds the URL with `encodeURIComponent`.
8. Tweaks panel at `?tweaks=1` (gated at `index.html:2485`) for live brand/copy preview — not a test, but the closest interactive verification surface.

## Stand-ins for tests

- `<noscript>` fallback at `index.html:1324-1365` mirrors the rendered content for crawlers / JS-disabled clients — visual inspect on copy changes.
- Four JSON-LD blocks (`index.html:71-257`) duplicate Hero / Services / FAQ / Visit copy and must stay in sync with React content — only Rich Results Test catches drift.
- `prefers-reduced-motion` (`index.html:1307`) and print media (`1298`) are tested by toggling OS settings / browser print preview.

## Run commands

**None.** Dev loop is:

1. Edit `index.html`.
2. Open in a browser or `python -m http.server 8000`.
3. `git push origin main` — GitHub Pages publishes within ~1 min.

The optional `esbuild` step in `HANDOFF.md` section 2 is documented but **not wired up** (no `package.json`, no root-level `app.jsx`).
