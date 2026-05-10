# STRUCTURE.md — Directory Layout & Key Files

## Top-level tree

```
Smart-Men-s-Salon-main/
├── index.html               (100 KB, 2,557 lines) — the deployed SPA
├── CNAME                    (smartsalon.co.in)
├── robots.txt
├── sitemap.xml
├── README.md                (AI-handoff brief, not user docs)
├── HANDOFF.md               (manual QA + esbuild plan)
├── CLAUDE.md                (project instructions for Claude)
├── logo.png                 (210,878 B — referenced)
├── Final-LOGO.png           (210,878 B — byte-identical duplicate, unreferenced)
├── images/                  (~7.6 MB hero + gallery PNGs)
│   ├── Salon Exterior.png   (untracked, 2.2 MB)
│   └── RAW/                 (untracked: WhatsApp jpegs, full-res logo)
├── project/                 (original Claude Design handoff bundle — diverging copy)
│   ├── SMART Men's Salon.html
│   ├── app.jsx              (1,015 lines, 42 KB)
│   ├── tweaks-panel.jsx     (568 lines, 25.7 KB)
│   ├── styles.css           (914 lines, 27.6 KB)
│   └── uploads/             (3 draw-*.png sketches)
├── chats/chat1.md           (design-tool transcript)
├── workflows/               (6 short orchestrator stubs — Claude Code, NOT GitHub Actions)
├── .github/
│   └── copilot-instructions.md  (no Actions workflows here)
├── .claude/
│   ├── CLAUDE.md            (orchestrator role)
│   └── agents/              (24 agent role .md files)
├── .cursor/rules/           (truthpack-first-protocol.mdc + 11 vibe-flow-*.mdc)
├── .vibecheck/              (flow/, isl-studio/, provenance/audit.jsonl, last-score.json)
│                            (NO `truthpack/` directory present)
└── .planning/codebase/      (this output)
```

## Folder purposes

| Folder | Purpose | Notes |
|---|---|---|
| (root) | Deployed site | `index.html` is the entire production app |
| `images/` | Hero + service + gallery imagery | Unoptimised PNGs; no AVIF/WebP |
| `images/RAW/` | Source images (untracked) | Should be `.gitignore`d |
| `project/` | Original handoff bundle | **Stale** — recent fixes only touch `index.html` |
| `chats/` | Design-session transcripts | Reference material, not code |
| `workflows/` | Claude Code orchestrator stubs | Not CI; runs only when Claude is invoked |
| `.github/` | Copilot instructions only | No `workflows/` subdir → no GitHub Actions |
| `.claude/` | Agent role definitions for Claude Code | Orchestrator + 24 specialised auditors |
| `.cursor/` | Cursor IDE rules | Mirrors VibeCheck protocol from `CLAUDE.md` |
| `.vibecheck/` | VibeCheck score + provenance state | Note: `truthpack/` directory referenced by `CLAUDE.md` does **not** exist |
| `.planning/` | GSD workflow artifacts (this map lives here) | New |

## Key locations inside `index.html`

| Lines | What |
|---|---|
| 71–257 | 4 JSON-LD blocks (`HairSalon`, `Organization`, `WebSite`, `FAQPage`) |
| 259–1317 | Inline `<style>` block |
| 1322–1365 | `<noscript>` SEO fallback |
| 1370 | Loads `@babel/standalone@7.29.0` from unpkg |
| 1372–1563 | Tweaks Panel script |
| 1565–2554 | Main React app (Babel-transpiled in browser) |
| 1722–1738 | `TopNav` component |
| 1805–1842 | `SERVICES` constant |
| 1988–1993 | `ALL_SERVICES` constant |
| 1994 | `TIME_SLOTS` flat array |
| 1996–2010 | `getNextDays()` |
| 2012–2182 | `Booking` component |
| 2469–2484 | `App` component (mount points) |
| 2486–2548 | Tweaks panel render |
| 2554 | `ReactDOM.createRoot(...).render(<App />)` |

## File-size highlights

| File | Size / Lines |
|---|---|
| `index.html` | 100,051 B / 2,557 lines |
| `project/app.jsx` | 42,515 B / 1,015 lines |
| `project/styles.css` | 27,593 B / 914 lines |
| `project/tweaks-panel.jsx` | 25,739 B / 568 lines |
| `images/Salon Exterior.png` | 2,199,829 B (untracked) |
| `images/gallery2.png` | ~944 KB |
| `images/gallery1.png` | ~889 KB |
| `images/beard.png` | ~858 KB |
| `logo.png` / `Final-LOGO.png` | 210,878 B each (identical) |

## Duplication map

- `logo.png` ↔ `Final-LOGO.png` — byte-identical (verified via `diff -q`); only `logo.png` is referenced.
- `project/app.jsx`, `project/tweaks-panel.jsx`, `project/styles.css` — stale copies of code now inlined into `index.html`. Recent fixes touched `index.html` only; `project/` lags.
- VibeCheck/truthpack rules — duplicated across `CLAUDE.md`, `.claude/CLAUDE.md`, and `.github/copilot-instructions.md`.
- Business data (services, address, hours) appears **4x**: `SERVICES` object, `TWEAK_DEFAULTS`, `<noscript>` block, and `HairSalon` JSON-LD.

## Naming conventions

- Code & asset files: **lowercase**.
- Root markdown: **UPPERCASE** (`README`, `HANDOFF`, `CLAUDE`).
- Outliers: `project/SMART Men's Salon.html` (space + apostrophe), `images/RAW/` (all-caps directory).

## Where to add new things

- **New page section** → add component function in `index.html` ~lines 1700–2460, mount inside `App` (2469–2484), add `<section id>`, update `TopNav` (1722–1738) and `sitemap.xml`.
- **New service** → edit BOTH `SERVICES` (1805) and `ALL_SERVICES` (1988), plus the `<noscript>` list (1331–1354).
- **New tweak** → add to `TWEAK_DEFAULTS` (1569–1581) and a `<TweakText/Color/Toggle>` row inside the panel block (2486–2548).
