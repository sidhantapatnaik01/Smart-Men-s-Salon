# Technology Stack

**Analysis Date:** 2026-05-10

## Overview

Single-page static website for SMART Men's Salon (Nabarangpur, Odisha). The entire site is delivered as one HTML file (`index.html`, ~100 KB / 2,557 lines) that loads React from a CDN and uses in-browser Babel to JSX-transpile two inline `<script type="text/babel">` blocks at runtime. **No build step, no bundler, no `package.json`, no lockfile.** Hosted on GitHub Pages with the custom domain `smartsalon.co.in` (per `CNAME`).

Truthpack files (`.vibecheck/truthpack/`) do not exist for this project — findings below come from direct inspection.

## Languages

**Primary:**
- HTML5 — `index.html` (single entry document, contains all markup, inline CSS, and inline React/JSX)
- CSS3 — Inline `<style>` block in `index.html` (~1,100 lines starting around line 259); also a standalone reference copy at `project/styles.css` (914 lines, design handoff artifact, not loaded at runtime)
- JavaScript (ES2020+) with JSX — Inline `<script type="text/babel">` blocks in `index.html`:
  - Tweaks panel block: lines 1372–1563
  - Main app block: lines 1565–2555
- Reference JSX sources at `project/app.jsx` (1,015 lines) and `project/tweaks-panel.jsx` (568 lines) — these are the original Claude Design handoff files, not loaded by `index.html`

**Secondary / Data:**
- JSON-LD — 4 inline `<script type="application/ld+json">` structured-data blocks (HairSalon, Organization, WebSite, FAQPage) in `index.html` lines 71–257
- XML — `sitemap.xml` (24 lines)
- Plain text — `robots.txt`, `CNAME` (contains `smartsalon.co.in`)

## Runtime

**Environment:**
- Browser only. Renders client-side via React 18 + ReactDOM mounted to `<div id="root">` in `index.html` line 2554: `ReactDOM.createRoot(document.getElementById("root")).render(<App />);`
- Runtime JSX transpilation happens in the user's browser via `@babel/standalone`

**Server runtime:**
- None. Pure static hosting (GitHub Pages).

**Package Manager:**
- None present. No `package.json`, no `package-lock.json`, no `yarn.lock`, no `pnpm-lock.yaml`, no `node_modules/`.
- All third-party JS is loaded as `<script src="https://unpkg.com/...">` directly from the unpkg CDN.

## Frameworks

**Core (loaded at runtime via CDN, see `index.html` lines 1368–1370):**
- React 18.3.1 — `https://unpkg.com/react@18.3.1/umd/react.production.min.js`
- ReactDOM 18.3.1 — `https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js`
- Babel Standalone 7.29.0 — `https://unpkg.com/@babel/standalone@7.29.0/babel.min.js` (transpiles inline JSX in the browser)

**Testing:**
- None. No test runner, no test files, no `*.test.*` or `*.spec.*`, no Jest/Vitest config.

**Build / Dev tooling:**
- None currently configured. `HANDOFF.md` (section 2) documents an *optional* future migration to `esbuild` to pre-compile JSX (`npx esbuild app.jsx --bundle --minify --target=es2020 --outfile=app.js`), but this has not been implemented — `index.html` still ships in-browser Babel.

**UI / Styling:**
- Hand-written CSS using CSS custom properties (design tokens defined in `:root` at `index.html` line 261). No Tailwind, no CSS-in-JS library, no PostCSS, no Sass.

## Key Dependencies

**Critical (CDN-loaded, no version pinning beyond URL):**
- `react@18.3.1` — Component model, hooks (`useState`, `useEffect`, `useMemo`, `useRef` destructured from global `React` in `project/app.jsx` line 2)
- `react-dom@18.3.1` — `ReactDOM.createRoot` for client mount
- `@babel/standalone@7.29.0` — JSX → JS transformation in-browser

**Infrastructure:**
- None. No database client, no HTTP client (`fetch` is not used in app code), no auth library, no state management library beyond React's built-in hooks.

## Configuration

**Environment variables:**
- None. No `.env*` files exist in the repo. All configurable values are hard-coded in the JSX (see `TWEAK_DEFAULTS` at `index.html` line ~1573 / `project/app.jsx` lines 4–16):
  - `primaryColor`, `headlineLine1/2`, `heroSub`, `phone`, `whatsappNumber`, `address`, `city`, `hours`, `showTicker`, `showGallery`

**Runtime tweaks panel:**
- A draggable in-page editor (`TweaksPanel` component, `index.html` line 1387 onward) lets the salon owner edit copy live. It posts `{type: '__edit_mode_set_keys'}` messages to `window.parent` for the VibeCheck/Claude Design edit-mode bridge.
- `HANDOFF.md` section 3 recommends gating it behind `?tweaks=1` query param; not yet implemented in `index.html`.

**Build config:**
- None.

**TypeScript:**
- Not used. No `tsconfig.json`, no `.ts`/`.tsx` files. Files are `.jsx` (reference) and inline `<script type="text/babel">`.

**Linting / Formatting:**
- No `.eslintrc*`, no `.prettierrc*`, no `biome.json`, no `eslint.config.*`. No formatting enforcement.

## Platform Requirements

**Development:**
- Any modern browser (the site self-compiles via Babel Standalone).
- A static file server is sufficient for local preview (e.g., `python -m http.server`, `npx serve`). Opening `index.html` via `file://` may also work because all dependencies are absolute URLs.
- Optional: Node.js 18+ if/when `HANDOFF.md` section 2 (esbuild pre-compile) is acted on.

**Production:**
- GitHub Pages. `CNAME` file at repo root contains `smartsalon.co.in`.
- DNS A records point to GitHub's static IPs (`185.199.108-111.153`); `www` CNAME → `sidhantapatnaik01.github.io` per `HANDOFF.md` section 4b.
- HTTPS enforced via GitHub Pages "Enforce HTTPS" toggle.

## CI / CD

**GitHub Actions:**
- None. `.github/` contains only `copilot-instructions.md`; no `.github/workflows/` directory.
- Deployment is "push to `main` branch" — GitHub Pages serves the latest commit on `main` from `/` (root).

## Repository Layout (stack-relevant)

- `index.html` — production entry point (only file actually served as the app)
- `logo.png`, `Final-LOGO.png` — brand assets / favicon source
- `images/` — JPG/PNG assets (hero, gallery, service tiles); `images/RAW/` holds untracked masters
- `project/` — original Claude Design handoff (reference only, not loaded at runtime): `app.jsx`, `tweaks-panel.jsx`, `styles.css`, `SMART Men's Salon.html`, `uploads/`
- `chats/chat1.md` — design conversation transcript (per `README.md`)
- `sitemap.xml`, `robots.txt`, `CNAME` — SEO / hosting configuration
- `.vibecheck/`, `.claude/`, `.cursor/`, `.github/` — AI tooling configuration (not part of runtime stack)

---

*Stack analysis: 2026-05-10*
