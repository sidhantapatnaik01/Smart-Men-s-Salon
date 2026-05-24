# 🚀 Local Business Website Template Wiki
*Based on the SMART Men's Salon Architecture*

This document serves as the master playbook for replicating this ultra-fast, high-converting, and SEO-perfect architecture for future clients (salons, clinics, restaurants, service businesses). 

---

## 🏗️ Architecture & Tech Stack
This project uses a "Vanilla React" approach. It avoids the bloat of Next.js or Create-React-App, resulting in a single lightweight `app.js` file.

- **Frontend:** React 18, JSX, raw CSS (variables + flex/grid).
- **Build Tool:** `esbuild` (Compiles `app.jsx` into `app.js` instantly).
- **Hosting:** Vercel (Free tier, Edge network).
- **Analytics:** Vercel Web Analytics.
- **Database/Backend:** None. Relies entirely on **WhatsApp Intents** for lead generation and bookings.

### Pros & Cons of this Stack
| ✅ Pros | ❌ Cons |
|---------|---------|
| **Zero Server Costs:** Vercel free tier easily handles traffic. | **No CMS:** Clients cannot update text/images themselves; requires developer intervention. |
| **Instant Load Times:** No server-side rendering overhead. | **Manual Build Step:** Must remember to run `npm run build:local` after changing `.jsx`. |
| **Unbreakable:** It's just HTML/JS/CSS. No databases to crash. | **Component Scaling:** If the site gets massive (20+ pages), a framework like Next.js becomes necessary. |
| **Perfect Local SEO:** Easily dominates generic WordPress sites. | |

---

## 🧠 Master "1% Polish" Checklist
When copying this template for a new client, ensure all of these are checked off to guarantee a "Native App" feel and perfect SEO.

### 1. Mobile & PWA Optimization
- [ ] **iOS Native Feel:** Include Apple meta tags (`apple-mobile-web-app-capable`).
- [ ] **Notch Support:** Ensure `viewport-fit=cover` is in the viewport meta tag.
- [ ] **Android PWA:** Include a `manifest.json` and link it (`<link rel="manifest" href="manifest.json" />`) so Android users get the "Add to Home Screen" install prompt.
- [ ] **Zoom Bug Prevention:** Ensure all `<input>` and `<textarea>` CSS font sizes are exactly `16px` to prevent iOS Safari from auto-zooming on focus.

### 2. Native Intents (Crucial for Conversion)
Do not use basic links. Route users directly into their native apps:
- [ ] **WhatsApp:** `https://wa.me/91XXXXXXXXXX?text=URL_ENCODED_MESSAGE`
- [ ] **Phone:** `tel:+91XXXXXXXXXX`
- [ ] **Maps:** `https://www.google.com/maps/dir/?api=1&destination=Business+Name,+City` (Forces Google Maps app instead of Apple Maps).

### 3. SEO & Indexing (The "Noscript" Hack)
- [ ] **Schema.org JSON-LD:** Include accurate local business structured data (e.g., `@type: "HairSalon"`, precise lat/long coordinates, price range).
- [ ] **The `<noscript>` Block:** Because Googlebot sometimes struggles with React SPAs, include a hidden `<noscript>` block in `index.html` that contains the H1, services, location, and phone numbers in pure HTML.
- [ ] **Sitemap & Robots:** Always generate `sitemap.xml` and `robots.txt` allowing all bots.
- [ ] **Google Business Profile:** *Always* instruct the client to add the new website URL to their Google My Business listing. This is the biggest local SEO multiplier.

---

## 🚨 Major Learnings & Troubleshooting

### 1. The DNS Nameserver Conflict (Avoid 48-hour delays)
**What happened:** The domain was purchased on GoDaddy. Cloudflare was initially attempted, then we switched to Vercel. GoDaddy had nameservers from *both* Vercel and Cloudflare, causing DNS resolvers to route traffic randomly.
**The Fix:** 
- Only **ONE** provider should handle nameservers. 
- If using Vercel, delete all GoDaddy A/CNAME records, and set Nameservers strictly to `ns1.vercel-dns.com` and `ns2.vercel-dns.com`.
- Delete any leftover "Parked" A-records in GoDaddy, otherwise Google Search Console will ping GoDaddy's parking page instead of the actual website, resulting in a "Couldn't Fetch" sitemap error.

### 2. Google Search Console Verification
**What happened:** Verifying via "Domain" requires adding a TXT record. If DNS is propagating, this is frustratingly slow.
**The Fix:** 
- Use the **"URL Prefix"** method instead. 
- Download the Google HTML verification file, commit it to the repository, push to Vercel, and click Verify. It takes 30 seconds and bypasses DNS delays entirely.

### 3. Missing Custom 404
**What happened:** SPAs hosted on Vercel without routing will throw Vercel's ugly default 404 page if a user types a wrong URL.
**The Fix:** Always include a heavily branded `404.html` in the root directory. Vercel automatically routes to this file on missing paths.

---

## 📋 Step-by-Step New Client Rollout
1. Clone this repository.
2. Update branding in `app.jsx` (`t.primaryColor`, hero copy, images).
3. Run `npm run build:local` to generate the new `app.js`.
4. Update `index.html` (Title, Description, `<noscript>` content, JSON-LD Schema).
5. Update `manifest.json` (Name, colors) and generate new logos.
6. Push to GitHub -> Connect to Vercel.
7. Change Domain Nameservers to Vercel exclusively.
8. Wait for propagation -> Verify via HTML file on Google Search Console -> Submit `sitemap.xml`.
