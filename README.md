# Voyah Nuxt Local Source

This project now serves Voyah as local Nuxt source pages instead of injecting the live production bundle.

## Architecture

- `pages/*.vue` contains the route source for the mirrored site, including `/`, the `.html` pages, and the `/fr/fr` alias on the home page.
- `public/static`, `public/sitelogo`, `public/website`, and `public/dataJson` hold the mirrored local assets used by those pages.
- `scripts/export-voyah-pages.mjs` regenerates the local `.vue` pages from the live rendered site when you explicitly want to refresh the source snapshot.

## Commands

```bash
npm install
npm run dev
npm run build
node .output/server/index.mjs
```

## Notes

- Runtime pages are local Vue source files and do not depend on the live Voyah JavaScript bundle.
- The generated page source is intentionally editable, so layout, text, links, and markup can be changed directly in the route files.
- Asset links point to the local `public/` mirror, not to remote Voyah static resources.
