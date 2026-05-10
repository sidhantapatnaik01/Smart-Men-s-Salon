# External Integrations

**Analysis Date:** 2026-05-10

## Overview

This is a static marketing site with no backend, no auth, no database, and no environment-variable secrets. All "integrations" are either (a) third-party scripts loaded from public CDNs, (b) outbound deep-links to consumer apps (WhatsApp, Google Maps, Instagram), or (c) crawler / SEO touch-points. Truthpack files (`.vibecheck/truthpack/integrations.json` etc.) are not present; the inventory below comes from direct inspection of `index.html` and related files.

## Third-Party Scripts (CDN-loaded)

All loaded via `<script src>` in `index.html` lines 1368–1370 with `crossorigin="anonymous"`:

- **unpkg.com** (CDN for the entire JS runtime)
  - `https://unpkg.com/react@18.3.1/umd/react.production.min.js`
  - `https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js`
  - `https://unpkg.com/@babel/standalone@7.29.0/babel.min.js`
  - **Risk:** unpkg outage = site fails to render. No SRI hashes, no fallback.

## Web Fonts

- **Google Fonts** (`fonts.googleapis.com` + `fonts.gstatic.com`)
  - Preconnects: `index.html` lines 66–67
  - Stylesheet: `index.html` line 68 — `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Inter+Tight:wght@500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap`
  - Families used: **Inter**, **Inter Tight**, **JetBrains Mono** (referenced in `font-family` declarations starting at `index.html` line 287)

## Maps & Location

- **Google Maps Embed** — `<iframe>` in `index.html` line 2276–2282
  - URL: `https://www.google.com/maps/embed?pb=...!2sSmart%20Saloon!...` (place ID `0x3a3ab7601520592f:0x2a3ffec6d1d73529`)
  - `loading="lazy"`, `referrerPolicy="no-referrer-when-downgrade"`, `allowFullScreen=""`
  - No API key in URL (uses the public unauthenticated embed iframe, not the JS Maps API).
- **Google Maps "Get Directions"** deep-link — `index.html` line 2309
  - `https://www.google.com/maps/dir/?api=1&destination=19.2296,82.5468`
- **Google Maps "Search" / Reviews** deep-links — `index.html` lines 2315, 2414
  - `https://www.google.com/maps/search/?api=1&query=SMART+Men%27s+Salon+Nabarangpur`
  - `https://www.google.com/maps/search/?api=1&query=SMART+Men%27s+Salon`
- **JSON-LD `sameAs`** — `index.html` line 116 references `https://www.google.com/maps?q=SMART+Men%27s+Salon` for Knowledge Panel linkage.

Geo coordinates: `19.2296, 82.5468` (Nabarangpur, Odisha) — appears in geo meta tags (`index.html` lines 20–21) and JSON-LD `geo` block (lines 95–99).

## Messaging — WhatsApp

- **WhatsApp Click-to-Chat** is the primary booking channel (no real backend reservation system).
  - Number: `919437850989` (configured via `t.whatsappNumber` tweak default at `index.html` line 1575 / `project/app.jsx` line 10)
  - Bare contact link: `https://wa.me/919437850989` (used in static `<noscript>` fallback at line 1329, and in JSON-LD `potentialAction` at line 126)
  - Booking deep-link with prefilled message: built dynamically at `index.html` line 2059 — `` `https://wa.me/${t.whatsappNumber}?text=${encodeURIComponent(message)}` ``
  - Floating action button: `index.html` line 2444; CTA buttons throughout (lines 1734, 1771, 2306, 2369, 2452)
- **`tel:` links** — `index.html` lines 1360, 2306-area; `tel:+919437850989`

## Social

- **Instagram** — outbound links only (no embed/API)
  - `https://www.instagram.com/smartmenssalon` referenced at `index.html` lines 115 (JSON-LD HairSalon `sameAs`), 183 (Organization `sameAs`), 2312 (button), 2413 (footer link)
  - Handle reportedly tentative per `HANDOFF.md` section 6.

## Email

- `hello@smartsalon.co.in` — listed in JSON-LD HairSalon block at `index.html` line 83. No `mailto:` UI link found in the rendered app code; informational only.

## Data Storage

- **Databases:** None.
- **File storage:** Repo-local only (`images/`, `logo.png`, `Final-LOGO.png`).
- **Caching:** Browser HTTP caching only; no CDN config beyond GitHub Pages defaults.
- **Client storage:** No `localStorage`, `sessionStorage`, `IndexedDB`, or cookie usage detected in app code.

## Authentication & Identity

- None. The site has no login, no user accounts, no session state. The "tweaks panel" is an in-page UI editor with no auth layer (`HANDOFF.md` section 3 suggests gating it behind a `?tweaks=1` query param).

## Analytics & Monitoring

- **Analytics:** None installed. No GA4, no Plausible, no Fathom, no PostHog, no Mixpanel, no Segment, no GTM. (Grep for `gtag|googletagmanager|plausible|posthog|mixpanel|sentry|hotjar|segment|fathom` returns zero matches in `index.html`.)
- **Error tracking:** None (no Sentry, no Bugsnag, no Rollbar).
- **Logging:** Browser console only.
- `HANDOFF.md` section 6 lists "drop Plausible or GA4" as a future nice-to-have.

## SEO & Crawler Touch-Points

- **`sitemap.xml`** — declares 4 URLs (root + `#services`, `#book`, `#visit` anchors).
- **`robots.txt`** — explicitly allows `GPTBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, `CCBot` in addition to `User-agent: *`. Sitemap declared.
- **JSON-LD structured data** (`index.html` lines 71–257) — four blocks:
  - `HairSalon` (LocalBusiness) — full NAP, hours, geo, offer catalog, `potentialAction` reserve via WhatsApp
  - `Organization` — contact point, languages `["en","hi","kn"]`, Instagram `sameAs`
  - `WebSite`
  - `FAQPage` — 6 Q/A entries
- **Open Graph + Twitter** meta tags — `index.html` lines 28–52. Image points at `https://smartsalon.co.in/logo.png` (500×500). Per `HANDOFF.md` section 1c, a proper 1200×630 `og-cover.jpg` is a known follow-up.
- **Search Console / Bing Webmaster Tools** — manual submission tasks listed in `HANDOFF.md` section 5; no verification meta tag is currently embedded in `index.html`.

## CI/CD & Deployment

- **Hosting:** GitHub Pages (custom domain `smartsalon.co.in` via `CNAME`).
- **DNS provider:** External (GoDaddy/BigRock/Namecheap-class registrar per `HANDOFF.md` section 4b — provider not specified in repo).
- **CI pipeline:** None. No `.github/workflows/` exists. Deploy = `git push origin main`.
- **Pre-deploy hooks:** None.
- **Repo:** `https://github.com/sidhantapatnaik01/Smart-Men-s-Salon` (per `HANDOFF.md` line 3).

## Webhooks & Callbacks

- **Incoming:** None.
- **Outgoing:** None (no `fetch`, no `XMLHttpRequest`, no service worker).

## Cross-Frame Communication

- The tweaks panel posts messages to `window.parent` via `postMessage` for the Claude Design / VibeCheck edit-mode bridge:
  - `index.html` line 1380: `window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*');`
  - This only does anything when the page is iframed inside the design tool; in production it is a no-op.

## Environment Configuration

- **Required env vars:** None.
- **Secrets in repo:** None expected. (Note: `HANDOFF.md` line 13 references a leaked GitHub PAT `ghp_s2SO…` that the user was instructed to revoke — this is a *historical* incident, not a file currently checked in.)
- **Configurable runtime values:** Live in the `TWEAK_DEFAULTS` object (`index.html` ~line 1573 / `project/app.jsx` lines 4–16), editable in-page via the tweaks panel.

## Known Integration Risks / Follow-Ups (per `HANDOFF.md`)

- Performance: in-browser Babel adds ~2.5 MB of script weight; pre-compile with esbuild is the documented fix (`HANDOFF.md` section 2).
- No SRI integrity hashes on the three unpkg `<script>` tags — supply-chain risk if unpkg is compromised.
- Open Graph image was previously broken (now points at `logo.png`); a real 1200×630 cover is still recommended.
- Instagram handle `@smartmenssalon` should be confirmed as the salon's actual handle before launch (`HANDOFF.md` section 6).

---

*Integration audit: 2026-05-10*
