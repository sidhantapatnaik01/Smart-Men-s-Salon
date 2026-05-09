# SMART Men's Salon — Handoff

**Repo:** https://github.com/sidhantapatnaik01/Smart-Men-s-Salon
**Live target:** https://smartsalon.co.in
**Current state:** Pushed to `main`. Not yet deployed. 4 must-fix items before client launch.

---

## 0. Pre-flight (5 min)

```bash
# Revoke the leaked token first — non-negotiable
open https://github.com/settings/tokens
# Find token starting ghp_s2SO… → Delete → confirm

# Clone + cd
git clone https://github.com/sidhantapatnaik01/Smart-Men-s-Salon.git
cd Smart-Men-s-Salon

# Sanity check — should see index.html, CNAME, robots.txt, sitemap.xml
ls -la
```

If you'll commit signed: `git config user.signingkey <your-key>` (skip if you're fine with unsigned).

---

## 1. Critical fixes before launch (~15 min)

### 1a. Remove fake `aggregateRating` (Google penalty risk)

Open `index.html` and delete the `aggregateRating` block. Search for `aggregateRating` — there's exactly one. Delete the trailing comma on the line above too.

```diff
   "areaServed": { "@type": "City", "name": "Bengaluru" },
   "potentialAction": { ... },
-  "aggregateRating": {
-    "@type": "AggregateRating",
-    "ratingValue": "4.9",
-    "reviewCount": "1200",
-    "bestRating": "5",
-    "worstRating": "1"
-  },
   "hasOfferCatalog": { ... }
```

### 1b. Remove fake review claim from hero meta-row

Search for `4.9 ★`. Replace the whole `<span>` with something honest:

```diff
- <span><span className="dot" ...></span>4.9 ★ · 1,200+ Google reviews</span>
+ <span><span className="dot" ...></span>Premium men's grooming · Bengaluru</span>
```

(If the salon already has real Google reviews, plug in the actual number and re-add `aggregateRating` to the JSON-LD with matching values.)

### 1c. Fix broken Open Graph image

Two paths — pick one:

**Path A (recommended):** add a real cover image.
1. Take a 1200×630 photo of the salon storefront / interior.
2. Save as `og-cover.jpg` in repo root. Save a 512×512 logo as `logo.png`.
3. Commit both. The existing meta tags will resolve.

**Path B (quicker):** delete the broken references.

In `index.html`, search and delete these lines:
```html
<meta property="og:image" content="https://smartsalon.co.in/og-cover.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="..." />
<meta name="twitter:image" content="https://smartsalon.co.in/og-cover.jpg" />
```
And in the JSON-LD `HairSalon` block, remove:
```json
"logo": "https://smartsalon.co.in/logo.png",
"image": [ "https://smartsalon.co.in/og-cover.jpg" ],
```
And in the `Organization` JSON-LD:
```json
"logo": "https://smartsalon.co.in/logo.png",
```

### 1d. Commit the fixes

```bash
git add index.html
git commit -m "Remove fabricated aggregateRating + broken OG image refs"
git push
```

---

## 2. Performance: pre-compile JSX (~10 min, optional but recommended)

Drops bundle from ~2.6 MB → ~140 KB. Big LCP win.

```bash
# One-time setup — Node 18+ required
npm init -y
npm install --save-dev esbuild

# Extract the two <script type="text/babel"> blocks from index.html into app.jsx.
# Easiest: open index.html, copy lines between the two babel <script> tags into a new file:
#   - the tweaks panel block → tweaks-panel.jsx
#   - the main app block     → app.jsx (concatenate both, tweaks first)
# (The original handoff in /project/ has these as separate files — you can copy from there
# but be sure to apply the same content edits we made: contact info, etc.)

# Build
npx esbuild app.jsx --bundle --minify --target=es2020 --outfile=app.js

# In index.html, replace:
#   <script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js"...></script>
#   <script type="text/babel"> ... tweaks ... </script>
#   <script type="text/babel"> ... app ... </script>
# With:
#   <script src="app.js" defer></script>

git add app.js index.html package.json package-lock.json
git commit -m "Pre-compile JSX with esbuild — drop in-browser Babel"
git push
```

If this feels heavy, skip — the site works fine without it. Just slower first paint.

---

## 3. Gate the tweaks panel (~2 min, optional)

It's harmless on the live site but unnecessary. In the App component, find:
```jsx
<TweaksPanel>
  ...
</TweaksPanel>
```
Wrap with a query-param check:
```jsx
{new URLSearchParams(location.search).has('tweaks') && (
  <TweaksPanel>
    ...
  </TweaksPanel>
)}
```
You'll still be able to access it at `https://smartsalon.co.in/?tweaks=1` for live edits, but normal visitors don't pay the cost.

---

## 4. Deploy to GitHub Pages + smartsalon.co.in (~20 min, mostly waiting)

### 4a. Enable Pages

```bash
open "https://github.com/sidhantapatnaik01/Smart-Men-s-Salon/settings/pages"
```
- **Source:** Deploy from a branch
- **Branch:** `main` / `/ (root)`
- Save

Wait ~1 min, then refresh — you should see "Your site is live at `https://sidhantapatnaik01.github.io/Smart-Men-s-Salon/`".

### 4b. Configure DNS at your domain registrar

Log into wherever `smartsalon.co.in` is registered (GoDaddy/BigRock/Namecheap/etc.). Add these records:

| Type  | Host | Value                  | TTL     |
|-------|------|------------------------|---------|
| A     | @    | `185.199.108.153`      | 600     |
| A     | @    | `185.199.109.153`      | 600     |
| A     | @    | `185.199.110.153`      | 600     |
| A     | @    | `185.199.111.153`      | 600     |
| CNAME | www  | `sidhantapatnaik01.github.io` | 600 |

**Delete** any existing A/AAAA records for `@` first (otherwise they'll conflict).

### 4c. Wait + verify

```bash
# Check DNS propagation (run every minute or so)
dig smartsalon.co.in +short
# Should return the four GitHub IPs above

# Check the site
curl -I https://smartsalon.co.in
# Expect HTTP/2 200, server: GitHub.com
```

Once DNS resolves, return to repo Settings → Pages. The custom domain field should auto-fill with `smartsalon.co.in` (CNAME file is already in place). Wait for the green check, then tick **Enforce HTTPS**.

Total propagation time: usually 10–30 min. Sometimes up to 24h on slow registrars.

---

## 5. Post-launch verification (~10 min)

```bash
# All should return HTTP 200
curl -sI https://smartsalon.co.in           | head -1
curl -sI https://smartsalon.co.in/robots.txt| head -1
curl -sI https://smartsalon.co.in/sitemap.xml| head -1

# WhatsApp link works
open https://wa.me/919437850989

# Validate structured data
open "https://search.google.com/test/rich-results?url=https%3A%2F%2Fsmartsalon.co.in%2F"
# Should detect: HairSalon, FAQPage, Organization. Zero errors expected.

# Submit to Google Search Console
open https://search.google.com/search-console
# Add property → DNS verification → submit sitemap https://smartsalon.co.in/sitemap.xml

# Submit to Bing Webmaster Tools (powers ChatGPT search results)
open https://www.bing.com/webmasters
# Same flow — submit sitemap

# Mobile-friendly test
open "https://search.google.com/test/mobile-friendly?url=https%3A%2F%2Fsmartsalon.co.in%2F"

# Lighthouse — run from browser DevTools or:
npx lighthouse https://smartsalon.co.in --view
# Target scores: Performance 90+, Accessibility 95+, SEO 100, Best Practices 95+
```

---

## 6. Things to add later (nice-to-have, not blocking)

- **Analytics** — drop Plausible or GA4.
- **Real photos** — replace gradient placeholders.
- **Google Business Profile** — claim/verify.
- **Instagram handle** — update if actual handle differs from `@smartmenssalon`.
- **Real reviews → reinstate `aggregateRating`** — once ≥10 verifiable Google reviews.

---

## Recovery cheatsheet

```bash
git log --oneline -10
git diff HEAD~1
git revert HEAD
git push
git restore index.html
git fetch && git log HEAD..origin/main --oneline
```

---

## TL;DR sequence to launch today

```bash
# 1. Revoke leaked token (browser)
# 2. Clone + edit
# Edit index.html: remove aggregateRating block, fix hero "4.9 ★" line, decide on OG image
git add index.html && git commit -m "Pre-launch: remove fabricated review data, fix OG" && git push

# 3. Enable Pages (browser)  +  set DNS at registrar  →  wait 30 min

# 4. Verify
curl -I https://smartsalon.co.in
open "https://search.google.com/test/rich-results?url=https%3A%2F%2Fsmartsalon.co.in%2F"

# 5. Tick "Enforce HTTPS" in repo Pages settings
```

Ship it. Total time: ~45 min focused work plus DNS propagation wait. Good luck — and rotate that token.
