# CONCERNS.md — Tech Debt, Risks, Smells

Each concern lists **Evidence** (file:line), **Impact** (low/medium/high), and a **Suggested follow-up**. No fixes applied here — this is a backlog signal only.

---

## High-impact

### 1. Booking widget allows impossible Thursday slots
- **Evidence:** `index.html:1994` defines a flat global `TIME_SLOTS` array with PM slots; `index.html:2129` renders them regardless of selected day. Thursday closes at 13:00 per JSON-LD (`index.html:107-112`).
- **Impact:** HIGH — users can pick Thu + 8:00 PM and the WhatsApp message ships, creating no-show confusion at the salon.
- **Suggested follow-up:** Per-day slot computation tied to `openingHours` JSON-LD, or a single `getSlotsForDay(day)` helper consumed by both the picker and the JSON-LD.

### 2. Two diverging app sources — `project/app.jsx` vs inline script in `index.html`
- **Evidence:** `project/app.jsx` (42 KB) and the inline `<script type="text/babel">` block at `index.html:1565-2554` are edited independently. `README.md` calls `project/` a "handoff bundle from Claude Design", yet recent commits keep editing it — those edits never reach production. `git show 60b039d --stat` confirms commit "Fix hardcoded booking slots and update for Thursday half-day" touched `project/app.jsx` only; live site is unfixed.
- **Impact:** HIGH — silent "fix-not-shipped" pattern. Root cause of concern #1 still being live.
- **Suggested follow-up:** Pick one source of truth. Either delete `project/` or wire it through esbuild per `HANDOFF.md` §2 and replace the inline script with a built bundle.

### 3. In-browser Babel + monolithic 2,557-line `index.html`
- **Evidence:** `index.html:1370` loads `@babel/standalone@7.29.0` (~2 MB) and transpiles JSX on every page load. Entire site (HTML, CSS lines 259-1317, four JSON-LD blocks, two Babel scripts) is one ~100 KB file.
- **Impact:** HIGH — destroys LCP on mobile; raw transfer cost + parse cost compound.
- **Suggested follow-up:** Pre-build with esbuild as documented in `HANDOFF.md` §2, ship plain JS, drop `@babel/standalone`.

---

## Medium-impact

### 4. Default booking time pre-fills a Thursday-invalid slot
- **Evidence:** `useState("06:00 PM")` at `index.html:2018`.
- **Impact:** MEDIUM — compounds concern #1; the *default* is invalid on Thursdays.
- **Suggested follow-up:** Default to first available slot for the selected day.

### 5. Duplicated logo files
- **Evidence:** `logo.png` and `Final-LOGO.png` at repo root are byte-identical (210,878 bytes each). Only `logo.png` is referenced.
- **Impact:** MEDIUM — wastes 210 KB in the deployed payload, confuses contributors.
- **Suggested follow-up:** Delete `Final-LOGO.png`.

### 6. OG/Twitter previews are broken or tiny
- **Evidence:** OG image is the 500×500 logo at `index.html:35-38`. `twitter:card = summary_large_image` declared at `index.html:49` but **no `twitter:image`** set. `HANDOFF.md` §1c warned about this already.
- **Impact:** MEDIUM — link previews on WhatsApp/Twitter degrade brand perception.
- **Suggested follow-up:** Generate a 1200×630 OG image (salon exterior or hero) and set both `og:image` and `twitter:image`.

### 7. ~8 MB of unoptimised PNGs in `images/`
- **Evidence:** `images/Salon Exterior.png` = 2,199,829 bytes; hero ≈ 825,261 bytes. No `srcset`, no `loading="lazy"` on `<img>`, no AVIF/WebP variants.
- **Impact:** MEDIUM — directly suppresses Lighthouse Performance below the 90+ target in `HANDOFF.md`.
- **Suggested follow-up:** Convert to AVIF/WebP, generate `srcset`, add `loading="lazy"` and `decoding="async"` outside the hero.

### 8. Untracked images that will be accidentally committed
- **Evidence:** `images/RAW/` (incl. ~1.5 MB `logo png.png` and two WhatsApp screenshot JPEGs) and `images/Salon Exterior.png` are untracked. `git status` confirms.
- **Impact:** MEDIUM — one `git add .` commits them permanently.
- **Suggested follow-up:** Add `.gitignore` covering `images/RAW/`, `*.tmp`, OS junk; decide whether `Salon Exterior.png` should be tracked.

### 9. No `.gitignore`
- **Evidence:** File absent. Untracked `images/RAW/` already creates the conditions for accidental commits.
- **Impact:** MEDIUM.
- **Suggested follow-up:** Create one. Minimum: `images/RAW/`, `.DS_Store`, `Thumbs.db`, `node_modules/`, `dist/`.

### 10. Possible leaked GitHub PAT
- **Evidence:** `HANDOFF.md` flagged a leaked PAT (`ghp_s2SO…`). No commit confirms rotation. Repo is public.
- **Impact:** MEDIUM-to-HIGH depending on whether it has been rotated. Treat as HIGH until proven otherwise.
- **Suggested follow-up:** Verify rotation in GitHub settings; run `gitleaks` over full history; force-push history rewrite only with user authorization.

### 11. `tweaks=1` editor ships to production
- **Evidence:** `index.html:2485` exposes a live editor when `?tweaks=1` is present. Lets anyone change brand color, copy, and contact info client-side.
- **Impact:** MEDIUM — not a server-side risk, but anyone can screenshot a defaced page for social media.
- **Suggested follow-up:** Gate behind `localhost`/`127.0.0.1`, or strip from the production build.

### 12. `postMessage` to `window.parent` with `'*'` origin
- **Evidence:** `index.html:1380, 1423, 1429`.
- **Impact:** MEDIUM — leftover from design-tool sandbox; benign on `smartmenssalon.com` but should be removed.
- **Suggested follow-up:** Delete the postMessage block, or scope to a known origin.

---

## Low-to-medium

### 13. Booking form has no phone/name validation
- **Evidence:** Truthy check only at `index.html:2060`. `type="tel"` field has no `pattern` or `minLength`. "x" + "1" is a valid booking.
- **Impact:** LOW-MEDIUM — leads to junk WhatsApp messages.
- **Suggested follow-up:** Add `pattern` for Indian phone format, `minLength={2}` on name, inline error states.

### 14. Advertised email may not exist
- **Evidence:** `email: "hello@smartsalon.co.in"` in JSON-LD at `index.html:83`. No evidence of a configured mailbox.
- **Impact:** LOW — search snippets show an address that bounces.
- **Suggested follow-up:** Set up the mailbox or remove the field from JSON-LD and the visible Visit/Contact section.

### 15. `sitemap.xml` lists hash fragments as distinct URLs
- **Evidence:** `/#services`, `/#book`, `/#visit` are listed with priorities. Search engines collapse fragments to the canonical URL.
- **Impact:** LOW.
- **Suggested follow-up:** List only `/` (and any future real routes).

### 16. `<noscript>` fallback drifts from React state
- **Evidence:** `index.html:1324-1364` hardcodes hours/services. Will silently fall out of sync with the React render.
- **Impact:** LOW — only affects bots and JS-disabled clients, but those are exactly who reads the fallback.
- **Suggested follow-up:** Generate the noscript content at build time from the same data source as the React tree.

### 17. `README.md` is for AI agents, not humans
- **Evidence:** Reads as the original Claude Design handoff brief, not as user-facing repo docs.
- **Impact:** LOW — confuses external collaborators.
- **Suggested follow-up:** Add a short human-readable section at the top covering: what the site is, how to preview locally, how it deploys.

---

## Summary table

| # | Concern | Impact |
|---|---|---|
| 1 | Booking allows Thursday-invalid slots | HIGH |
| 2 | Diverging `project/app.jsx` vs inline `index.html` | HIGH |
| 3 | In-browser Babel + 2,557-line monolith | HIGH |
| 4 | Default booking time invalid on Thursday | MEDIUM |
| 5 | Duplicate logo files | MEDIUM |
| 6 | Broken OG/Twitter previews | MEDIUM |
| 7 | ~8 MB unoptimised PNGs | MEDIUM |
| 8 | Untracked images risk accidental commit | MEDIUM |
| 9 | No `.gitignore` | MEDIUM |
| 10 | Possible leaked GitHub PAT | MEDIUM–HIGH |
| 11 | `tweaks=1` editor in production | MEDIUM |
| 12 | `postMessage` to `'*'` origin | MEDIUM |
| 13 | No phone/name validation | LOW–MEDIUM |
| 14 | Advertised email may bounce | LOW |
| 15 | Hash-fragment URLs in sitemap | LOW |
| 16 | `<noscript>` drift | LOW |
| 17 | README written for agents | LOW |
