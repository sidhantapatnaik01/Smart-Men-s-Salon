# Architecture

**Analysis Date:** 2026-05-10

## Pattern Overview

**Overall:** Single-page, single-file static site. One monolithic `index.html` (~100 KB, 2,557 lines) containing SEO/structured-data, all CSS, the noscript fallback, and the entire React application as two inline `<script type="text/babel">` blocks transpiled in the browser by Babel Standalone.

**Key Characteristics:**
- Static hosting via GitHub Pages (CNAME: `smartsalon.co.in`).
- No build step, no bundler, no `package.json` at the repo root — React 18, ReactDOM, and Babel are pulled from `unpkg.com` CDN at runtime.
- Client-side rendered SPA, but with a substantial `<noscript>` SEO fallback (`index.html` lines 1322-1365) and rich JSON-LD blocks (lines 71-257) so crawlers/AI agents see structured business data even before JS runs.
- Booking is a "form-to-WhatsApp" flow: there is **no backend, no API, no database**. The booking form composes a `wa.me` deep-link with a pre-formatted message; confirmation happens out-of-band on WhatsApp.
- A Tweaks Panel (visual-edit mode) is present as a second inline script block but only mounts when `?tweaks` is in the URL (`index.html:2485`).

## Layers

**SEO / Structured Data Layer:**
- Purpose: Feed search engines and AI crawlers (Perplexity, ChatGPT, Gemini, Claude) with business info that does not depend on JS execution.
- Location: `index.html` lines 1-258 (head) and 1322-1365 (`<noscript>` body).
- Contains: Meta tags, four JSON-LD blocks (`HairSalon`, `Organization`, `WebSite`, `FAQPage`) at lines 71-257, OpenGraph/Twitter tags, Apple/mobile web-app tags.
- Depends on: nothing — pure markup.
- Used by: search engines, social previewers.

**Style Layer:**
- Purpose: All visual styles for the site.
- Location: inline `<style>` block in `index.html` lines 259-1317 (~1,058 lines of CSS).
- Contains: CSS custom properties / design tokens (`--blue`, `--ink`, `--bg-soft`, `--radius`, `--maxw`, etc. at lines 261-281), reset, typography, layout (`.container`, `.section`), components (`.btn`, `.chip`, `.day-pill`, `.time-pill`, `.service-tile`, `.gallery-track`, `.booking-card`, `.topnav`, `.fab`, `.mobile-cta`, `.twk-*`), reveal/animation classes (`.reveal`, `.is-visible`, `.rot-word`, `.tab-content-enter`, `.stagger-grid`).
- Mirrored (older copy) at `project/styles.css` (914 lines) — see STRUCTURE.md.

**Application Layer (Tweaks Panel — first script):**
- Purpose: Optional drag-and-drop dev panel for live-editing brand color, copy, and toggles.
- Location: `index.html` lines 1372-1563.
- Components: `useTweaks` hook, `TweaksPanel`, `TweakSection`, `TweakRow`, `TweakToggle`, `TweakText`, `TweakColor`, plus a `__twkIsLight` color-luminance helper.
- Talks to: `window.parent` via `postMessage` (`__edit_mode_set_keys`, `__activate_edit_mode`, `__deactivate_edit_mode`, `__edit_mode_dismissed`, `__edit_mode_available`) — designed for an iframe-embedded design-tool host (Claude Design / claude.ai/design — see `README.md`).

**Application Layer (Site — second script):**
- Purpose: The actual site UI.
- Location: `index.html` lines 1565-2554.
- Mounts: `ReactDOM.createRoot(document.getElementById("root")).render(<App />)` at line 2554, into the `<div id="root">` at line 1320.

**Static Assets:**
- Location: `images/` (hero, gallery1-5, hair, beard, skin, package, beard.png, plus `Salon Exterior.png` and `RAW/`).
- Logo: `logo.png` and an apparently identical `Final-LOGO.png` at the repo root (both 210,878 bytes — duplicate, see STRUCTURE.md).
- Referenced from JSX as bare relative URLs (`images/hero.png`, `logo.png`).

## Data Flow

**Page Load:**
1. Browser fetches `index.html`. It parses the head (meta + 4 JSON-LD blocks).
2. Inline CSS (lines 259-1317) is applied; `<noscript>` fallback in body is hidden if JS runs.
3. Three CDN scripts load: `react@18.3.1`, `react-dom@18.3.1`, `@babel/standalone@7.29.0` (`index.html:1368-1370`).
4. Two `<script type="text/babel">` blocks are transpiled in-browser by Babel Standalone, then evaluated.
5. `App` mounts into `#root`. The `<noscript>` content is hidden by default browser behavior.

**Booking Flow (`Booking` component, `index.html:2012-2182`):**
1. User selects a service category in `ServiceShowcase` (lines 1844-1936). Clicking a service tile calls `onBookService(it.name)` → sets `App.preselectedService` state.
2. `App` (lines 2460-2552) re-renders, passes `preselectedService` to `Booking`.
3. `Booking`'s `useEffect` (lines 2021-2028) appends the preselected service to its `services[]` state and smooth-scrolls `#book` into view.
4. User fills name, phone, optionally adjusts services (chips), picks a day from `getNextDays(8)` (lines 1996-2010), picks a time from hard-coded `TIME_SLOTS` array (line 1994: `["10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM", "06:00 PM", "08:00 PM"]`), and adds notes.
5. A template-string `message` is composed (lines 2039-2057) and URL-encoded into `waHref = https://wa.me/${t.whatsappNumber}?text=...` (line 2059).
6. The "Continue on WhatsApp" anchor opens that URL; `filled` (name && phone && services.length) gates whether the link is active (line 2060, 2155-2156).
7. There is no submit, no fetch, no validation beyond truthy checks. WhatsApp handles the rest.

**Visit / Map:**
- Embedded Google Maps iframe (`index.html:2277`) with hard-coded `pb=` Place ID for "Smart Saloon".
- "Get Directions" link uses `https://www.google.com/maps/dir/?api=1&destination=19.2296,82.5468` (lines 2309) — coordinates also appear in the `HairSalon` JSON-LD `geo` block (line 96-99) and in the `geo.position` meta (line 20).

**State Management:**
- All state is local React `useState` inside leaf components.
- Cross-component state: only `App.preselectedService` flows from `ServiceShowcase` → `App` → `Booking`.
- Tweak state lives in `App` via `useTweaks(TWEAK_DEFAULTS)` (line 2461). The tweak object `t` is passed as a prop to `Hero`, `Gallery`, `Booking`, `Visit`, `FinalCTA`, `Footer`, `StickyMobile`. A `useEffect` at lines 2464-2467 mirrors `t.primaryColor` into the CSS custom properties `--blue` and `--blue-700` on `documentElement`.
- No router. Section navigation is entirely hash-link / `scrollIntoView`.
- No persistence (no `localStorage`, no cookies, no analytics).

## Key Abstractions

**`useTweaks(defaults)`** (`index.html:1374-1384`):
- Custom hook returning `[values, setTweak]`. `setTweak` accepts either `(key, value)` or an object of edits. Side-effect: `postMessage` to `window.parent` and a `tweakchange` CustomEvent on `window`.

**`useInView(opts)`** (`index.html:1607-1622`):
- IntersectionObserver wrapper returning `[ref, visible]`. Drives the scroll-reveal pattern.

**`Reveal`** (`index.html:1624-1635`):
- Wrapper that fades children in on scroll using `useInView`. Variants: empty (default), `from-scale`. Optional `delay` prop (seconds).

**`Photo`** (`index.html:1702-1713`):
- Polymorphic renderer: if `src` is given, renders an `<img>` with `objectFit: cover`; otherwise renders a tone-styled placeholder div with optional SVG glyph and label. Tones: `default`, `warm`, `steel`, `cool`, `amber`.

**`Icon`** (`index.html:1638-1699`):
- Object literal of inline SVG components: `WhatsApp`, `Phone`, `Arrow`, `Plus`, `Check`, `Pin`, `Clock`, `Star`, `Sparkle`, `Razor`, `Scissors`, `Drop`, `Shield`, `Heart`, `Bolt`, `Crown`, `Instagram`, `Google`, `Map`. All accept `size` prop.

**`SERVICES` catalog** (`index.html:1805-1842`):
- Object keyed by `hair | beard | skin | packages`. Each entry has `label`, `blurb`, `items[]`. Each item has `name`, `sub`, `tone`, `glyph`, optional `src`. This is the source of truth for the showcase grid.

**`ALL_SERVICES`** (`index.html:1988-1993`):
- Flat array of service names used as the booking-form chip list. **Maintained separately from `SERVICES`** — the two can drift.

**`TIME_SLOTS`** (`index.html:1994`):
- Hard-coded six-slot array. Does not vary by day, despite the salon advertising "Thu till 13:00" — see CONCERNS (separate doc).

**`getNextDays(n)`** (`index.html:1996-2010`):
- Generates `n` upcoming days from `new Date()`, returns `{iso, dom, dow}` objects. Called with `n=8` in `Booking`.

## Entry Points

**`index.html` (lines 1320, 1368-1370, 1372, 1565, 2554):**
- The `<div id="root">` mount node, the three CDN script tags, the two `text/babel` script blocks, and the `ReactDOM.createRoot(...).render(<App />)` call.
- This is the only entry point — everything else is fetched at runtime.

**`App` component (`index.html:2460-2552`):**
- Composes the page in this order: `Hero` → `ServiceShowcase` → `Gallery` → `Booking` → `Trust` → `Visit` → `FinalCTA` → `Footer` → `StickyMobile`. The `TweaksPanel` mounts conditionally on `?tweaks` query param.

**Section anchors (used by nav and sitemap):**
- `#services` — `ServiceShowcase` (line 1866).
- `#gallery` — `Gallery` (line 1955).
- `#book` — `Booking` (line 2063).
- `#visit` — `Visit` (line 2262).

## Error Handling

**Strategy:** Effectively none. There is no user-facing error path — no try/catch, no fetch failures to handle, no form-submission errors. The only "validation" is the `filled` boolean (`index.html:2060`) which disables the WhatsApp link until name/phone/service are present.

**Patterns:**
- Disabled-link pattern: anchor with `onClick={(e) => { if (!filled) e.preventDefault(); }}`, `opacity` and `cursor` reflect state (lines 2155-2164).
- Helper text below the CTA flips between "Opens WhatsApp..." and "Fill in name, phone..." (lines 2170-2174).

## Cross-Cutting Concerns

**Logging:** None. No console output, no analytics, no error reporting.

**Validation:** Truthy-only on name, phone, and `services.length` (line 2060). No phone-format check, no name length, no XSS-escaping (not strictly needed since values flow only into a `wa.me` URL via `encodeURIComponent`).

**Authentication:** Not applicable — public site, no user accounts.

**Animations:** Three patterns drive motion:
1. `Reveal` + `useInView` for scroll-in fades (used throughout).
2. CSS classes `.rot-word.rot-in` / `.rot-out` on `RotatingWord` (lines 1586-1605) cycling through `HERO_WORDS` every 2.8s.
3. The infinite-scroll gallery (`index.html:1969-1982`) doubles the `GALLERY` array and uses CSS `gallery-track` (defined in the inline style block) to translate horizontally.

**Accessibility:** Buttons have `aria-label` in some places (FAB at line 2444, Tweaks close at 1459). Map iframe has a `title` (line 2281). SVGs use `aria-hidden="true"`. Full audit is out of scope here.

**Theming:** CSS custom properties on `:root` (lines 261-281); `App` overrides `--blue` and `--blue-700` at runtime from `t.primaryColor` (lines 2464-2467).

**Sticky mobile UI:** `StickyMobile` (lines 2429-2457) shows a floating WhatsApp FAB and a bottom call/book bar after `window.scrollY > 300`.

---

*Architecture analysis: 2026-05-10*
