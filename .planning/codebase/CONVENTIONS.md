# Coding Conventions

**Analysis Date:** 2026-05-10

This is a single-file static site. Effectively all production code lives in `index.html` (2557 lines). All conventions below are derived by spot-checking that file. There is no linter, formatter, or build step enforcing any of this — conventions are de-facto, observed in committed code.

## File Layout

- Single deliverable: `index.html` at repo root
- Inline `<style>` block (lines 259-1317) — no external stylesheets
- Inline JSX in two `<script type="text/babel">` blocks: tweaks panel (1372-1563) and main app (1565-2555)
- React + Babel are loaded from CDN (`unpkg.com`) at runtime — no bundler
- Static reference copies live in `project/` (`app.jsx`, `tweaks-panel.jsx`, `styles.css`) — these are the original handoff exports, not currently consumed by the live site
- Assets live alongside: `logo.png`, `Final-LOGO.png`, `images/*.png`

## HTML Structure Patterns

**Semantic elements used:**
- `<main>` inside `<noscript>` fallback (line 1325)
- `<nav className="topnav">` for top navigation
- `<header className="hero">` for the hero region
- `<section>` with `id` per page-section (`#services`, `#gallery`, `#book`, `#visit`)
- `<address>` in noscript fallback (line 1356)
- `<footer>` for the bottom block

**Head conventions** (lines 7-257):
- Comment-grouped meta blocks: "Primary SEO", "Canonical & alternates", "Open Graph", "Twitter", "iOS / mobile web app", "Favicon", "Fonts", "Structured data: HairSalon", "Structured data: Organization", "Structured data: WebSite", "Structured data: FAQPage"
- Self-closing void tags written with trailing `/>` (`<meta ... />`, `<link ... />`)
- JSON-LD blocks indented with 2 spaces inside `<script type="application/ld+json">`

**Indentation:** 2 spaces throughout HTML, CSS, and JSX. No tabs.

**Quotes:**
- HTML attributes: double quotes (`<meta charset="utf-8" />`)
- JSX string props: double quotes (`<a href="#book" className="btn btn-ghost-dark btn-sm">`)
- JS string literals: double quotes for most, single quotes mixed in (`'Inter'`, `"out"`, `'tweakchange'`) — no enforcement
- JSON-LD: double quotes (required by spec)

## CSS Approach

**Bespoke, hand-written CSS.** No Tailwind, no Bootstrap, no CSS framework. No PostCSS/Sass — plain CSS3.

**Architecture:**
- Single `<style>` block, organized by commented section banners (e.g. `/* Buttons */`, `/* Hero */`, `/* Booking */`, `/* Final CTA */`, `/* Footer */`, `/* Sticky controls */`)
- `:root` custom properties at the top (lines 261-281) hold the design tokens: `--blue`, `--ink`, `--line`, `--bg`, `--muted`, `--shadow-1/2`, `--radius`, `--maxw`
- Class names are kebab-case BEM-ish: `.btn-primary`, `.btn-ghost-dark`, `.service-tile`, `.gallery-card`, `.cat-bar`, `.cat-tab`, `.booking-card`, `.day-pill`, `.time-pill`, `.sec-head`
- Utility helpers exist but are sparse: `.row`, `.col`, `.spacer`, `.container`, `.section`, `.section-tight`, `.eyebrow`, `.display`
- Variants by suffix: `.photo.warm`, `.photo.cool`, `.photo.steel`, `.photo.amber`
- State via `is-` prefix: `.is-active`, `.is-visible`, plus `data-on="1"` on toggles/chips
- Tweaks panel uses `twk-` prefix to namespace (`.twk-panel`, `.twk-field`, `.twk-chip`, `.twk-toggle`, `.twk-seg`)

**Breakpoints (mobile-first overrides via max-width):**
- `@media (max-width: 380px)` — extra-small phones
- `@media (max-width: 480px)` — small phones
- `@media (max-width: 720px)` — phones
- `@media (max-width: 880px)` — large phones / small tablets (also where `body { padding-bottom: 84px }` is added for sticky CTA)
- `@media (min-width: 768px)`, `(min-width: 880px)`, `(min-width: 1100px)` — progressive enhancement for container padding and nav links

**Inline styles are common** in JSX (`style={{display:"inline-flex", alignItems:"center", gap: 8}}`) — used heavily for one-offs alongside class names. No inline-style policy.

**Typography:**
- Three Google Fonts: `Inter` (body), `Inter Tight` (display), `JetBrains Mono` (eyebrows / code)
- `font-feature-settings: "ss01","cv11"` on body
- Display sizing uses `clamp()` (e.g. `font-size: clamp(44px, 9vw, 120px)` on hero h1)

## JavaScript Patterns

**Stack:** React 18.3.1 UMD + ReactDOM 18.3.1 UMD + `@babel/standalone` 7.29.0 for in-browser JSX compilation. No modules, no bundler, no TypeScript.

**Component style:**
- Function components only — no classes
- Hooks via destructure at top of script: `const { useState, useEffect, useMemo, useRef } = React;` (line 1567)
- Inside the tweaks-panel script, hooks are accessed as `React.useState`, `React.useCallback`, `React.useRef`, `React.useEffect` (no destructure)
- One root render call: `ReactDOM.createRoot(document.getElementById("root")).render(<App />)` (line 2554)

**Naming:**
- Components: `PascalCase` — `App`, `Hero`, `TopNav`, `Booking`, `Gallery`, `ServiceShowcase`, `Trust`, `Visit`, `FinalCTA`, `Footer`, `StickyMobile`, `Reveal`, `RotatingWord`, `Photo`, `TweaksPanel`, `TweakSection`, `TweakColor`, `TweakText`, `TweakToggle`, `StepLabel`
- Hooks: `useCamelCase` — `useTweaks`, `useInView`
- Constants (module-scope data): `SCREAMING_SNAKE_CASE` — `TWEAK_DEFAULTS`, `HERO_WORDS`, `GALLERY`, `ALL_SERVICES`, `TIME_SLOTS`
- Functions / variables: `camelCase` — `getNextDays`, `toggleService`, `dayLabel`, `waHref`, `clampToViewport`, `scrollToTop`
- Single shared `Icon` object holding inline SVG components keyed by name (`Icon.WhatsApp`, `Icon.Phone`, `Icon.Arrow`, `Icon.Scissors`, etc., line 1638)
- Tweak prop is consistently named `t` and threaded down (`<Hero t={t} />`, `<Footer t={t} />`)

**JSX style:**
- `className` (React) not `class`
- Self-closing tags for void elements: `<input ... />`, `<svg ... />`
- Inline event handlers: `onClick={() => onBookService(it.name)}`, `onChange={e => setName(e.target.value)}`
- Template literals for dynamic URLs: `` `tel:${t.phone.replace(/\s/g,'')}` ``, `` `https://wa.me/${t.whatsappNumber}?text=${encodeURIComponent(message)}` ``
- Conditional rendering via `&&` and ternaries — no JSX-control-statement patterns

**State / data flow:**
- All state is local React state inside components — no Redux, Zustand, Context, or store
- The `useTweaks` hook owns brand/copy state and posts edits to `window.parent` via `postMessage` (line 1380) for the design-tool round-trip
- `useInView` wraps `IntersectionObserver` for scroll-reveal (line 1607)
- No fetch / API calls anywhere — booking submits via `wa.me` URL with `encodeURIComponent`-ed message body (line 2059)

**Comments:**
- Section banners with box-drawing characters: `// ── useTweaks ───────────────────────────────────────────────────────────────`
- Equal-sign banners: `/* ============== Hero ============== */`
- Plain `//` for inline notes
- Production-fix blocks document why CSS overrides exist (e.g. lines 1224-1230 explaining the mobile horizontal-overflow chain fix)

## Accessibility Patterns Observed

Present:
- `lang="en"` on `<html>` (line 2)
- Viewport meta with `viewport-fit=cover` (line 5)
- `<noscript>` fallback page mirroring all key info (lines 1324-1365)
- `aria-label` on icon-only buttons: `aria-label="Book on WhatsApp"` (line 2444), `aria-label="Close tweaks"` (line 1459)
- `aria-hidden="true"` on decorative SVGs inside icons (line 1640)
- `role="switch" aria-checked={!!value}` on toggle (line 1492)
- `role="radiogroup"` / `role="radio"` / `aria-checked` on the color chip group (lines 1538-1546)
- `@media (prefers-reduced-motion: reduce)` block disables animations (lines 1307-1316)
- `@media (hover: none)` removes hover-translate on touch devices (line 1294)
- Print stylesheet hides interactive chrome (lines 1299-1304)
- Skip-target anchors via in-page `#services`, `#gallery`, `#book`, `#visit`
- `focus` styles on tweaks-panel inputs (`.twk-field:focus`)

Gaps:
- Only 3 `alt=` attributes total in the file; most images render via the `<Photo>` component which passes `alt={label || ""}` (empty alt when label missing, line 1704)
- No `<main>` landmark on the live (JS-rendered) page — only inside `<noscript>`
- No skip-to-content link
- Color contrast / focus-visible rings not explicitly defined for primary buttons

## SEO Meta Patterns

The head block is unusually thorough for a static page. Patterns to follow when adding new metadata:

- Primary title + description + keywords + author + robots + googlebot + theme-color + color-scheme + format-detection + rating
- Geo meta: `geo.region` (`IN-OR`), `geo.placename`, `geo.position`, `ICBM`
- Canonical + hreflang (`en-IN`, `x-default`) all pointing to `https://smartsalon.co.in/`
- Open Graph: `og:type="business.business"` plus `og:title/description/url/site_name/locale/image` and a full `business:contact_data:*` block
- Twitter Card: `summary_large_image`
- Apple/mobile web app meta (`apple-mobile-web-app-capable`, `apple-mobile-web-app-title`, `application-name`)
- Four JSON-LD blocks: `HairSalon` (LocalBusiness), `Organization`, `WebSite`, `FAQPage` — each with a stable `@id` like `#salon`, `#org`, `#website`
- `robots.txt` explicitly allow-lists AI crawlers: `GPTBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, `CCBot`
- `sitemap.xml` lists root + three in-page anchors with `changefreq` and `priority`

## Module / Export Design

Not applicable. Single HTML file, no ES modules, no exports. All components live in the same script tag and reference each other directly by name. The `project/app.jsx` and `project/tweaks-panel.jsx` files exist as design-tool exports but are not imported anywhere and not part of the live page.

---

*Convention analysis: 2026-05-10*
