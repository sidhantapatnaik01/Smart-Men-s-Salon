# Concerns
- Build vs. Static Deployment: Conflicting configurations exist where Cloudflare PR #1 expects a Worker setup via `wrangler.jsonc`, but the repository operates as a static site. Automatic CI build scripts have been renamed to `build:local` to prevent CI environments from failing when expecting dynamic framework builds.
- Single File Maintainability: `app.jsx` is getting very large. As the app grows, splitting it into multiple files/components and importing them will become necessary.
- CDN Reliance: High dependence on `esm.sh` and CDN links means the site is vulnerable to upstream outages. Future steps should bundle these dependencies locally.
