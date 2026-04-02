# Voyah Nuxt Local Reconstruction

This project is a local Nuxt 3 implementation of the Voyah website structure.

It does not mirror the live site at runtime, does not use an iframe, and does not fetch Voyah page HTML from the network. Pages are rendered from local Vue components, local data, and local assets stored inside this repository.

## Stack

- Nuxt 3
- Vue 3
- `@nuxtjs/i18n`
- GSAP

## Locales and URLs

The site supports three locales:

- `en`
- `fr`
- `ar`

Current route structure:

- `/` redirects to `/fr`
- `/{locale}` renders the homepage
- `/{locale}/{slug}` renders a detail page

Examples:

- `/fr`
- `/en/titan.html`
- `/ar/brand.html`

Important:

- Nuxt i18n is configured in `nuxt.config.ts`
- The actual root redirect is defined in `pages/index.vue`
- Shared locale path building is handled in `composables/useSiteContent.ts`

## Project Structure

### Root files

- `app.vue`
  Global Nuxt app shell. It mounts the active layout and page.

- `nuxt.config.ts`
  Main Nuxt configuration.
  It defines:
  - global CSS
  - i18n setup
  - prerender route generation
  - static generation behavior

- `package.json`
  Project scripts and dependencies.

- `README.md`
  This documentation file.

### Layout and app shell

- `layouts/default.vue`
  Shared page shell used by all routes.
  It mounts:
  - header
  - main page content
  - footer
  It also sets language and direction metadata on the document.

- `middleware/locale.global.ts`
  Global locale middleware.
  It validates the locale from the URL and updates the active i18n locale.

- `error.vue`
  Global fallback error page.

### Pages

- `pages/index.vue`
  Root redirect page.
  This is where the project decides what locale `/` should open by default.

- `pages/[locale]/index.vue`
  Homepage route for each locale.
  This page reads from `data/site.ts` and renders the homepage sections.

- `pages/[locale]/[slug].vue`
  Generic detail page router.
  It:
  - reads the slug from the URL
  - resolves the corresponding page from `data/site.ts`
  - decides whether the page is a model page, info page, or legal page
  - renders the matching page component

### Components

#### Layout components

- `components/layout/SiteHeader.vue`
  Main site header, navigation, locale switcher, and mobile menu.

- `components/layout/SiteFooter.vue`
  Main site footer, footer navigation, and QR/contact section.

#### Common components

- `components/common/BaseButton.vue`
  Shared button/link component.

- `components/common/MetricGrid.vue`
  Reusable metric card grid.

- `components/common/PageHero.vue`
  Shared hero block used by detail pages.

#### Homepage components

- `components/home/HomeHero.vue`
  Homepage hero slider area.

- `components/home/HomeBrandIntro.vue`
  Intro section for the Voyah brand.

- `components/home/HomeModels.vue`
  Homepage model listing section.

- `components/home/HomeStatsMedia.vue`
  Media plus metrics section.

- `components/home/HomeServiceGrid.vue`
  Service overview section.

- `components/home/HomeGlobalMap.vue`
  Global footprint section.

#### Detail page components

- `components/page/ModelPage.vue`
  Main renderer for vehicle/model pages.
  It uses:
  - hero
  - chapter nav
  - overview
  - metric section
  - long-form gallery sections
  - CTA block

- `components/page/InfoPage.vue`
  Renderer for content-driven informational pages such as:
  - brand
  - store
  - service
  - energy
  - corporate

- `components/page/LegalPage.vue`
  Renderer for legal and policy pages such as:
  - privacy
  - cookies
  - authorization

#### Model-only subcomponents

- `components/page/model/ModelChapterNav.vue`
  Sticky chapter navigation for model pages.

- `components/page/model/ModelMediaSection.vue`
  Reusable long-form media section for model pages.

### Composables

- `composables/useSiteContent.ts`
  Shared site content helper.
  It provides:
  - current locale info
  - current slug
  - path building
  - locale switch path building
  - localized text resolution
  - current page lookup

- `composables/useSectionReveal.ts`
  GSAP and IntersectionObserver-powered reveal animation helper.

### Data layer

- `data/site.ts`
  Main content registry for the entire site.

  This file defines:
  - locale definitions
  - shared content types
  - navigation tree
  - homepage content
  - footer content
  - all model pages
  - all info pages
  - all legal pages
  - slug lookup helpers

  This is the most important file for content changes.

- `data/modelMedia.ts`
  Expanded local media registry for model pages.
  It maps model slugs to local image galleries used by `ModelPage.vue`.

### Styling

- `assets/styles/main.css`
  Global styles, theme tokens, base layout styling, hero styling, card styling, and responsive rules.

### i18n

- `i18n.config.ts`
  Vue i18n configuration used by `@nuxtjs/i18n`.

### Public assets

- `public/voyah-resources`
  Primary local image assets for vehicle pages.

- `public/static/assets`
  Shared local images, fonts, icons, and other visual assets used across info pages, footer, and homepage.

- `public/website`
  Homepage-specific local assets such as banners and preview images.

- `public/sitelogo`
  Brand/logo assets.

## How Routing Works

The route flow is:

1. User opens `/`
2. `pages/index.vue` redirects to a locale root
3. Locale root page is handled by `pages/[locale]/index.vue`
4. Detail pages are handled by `pages/[locale]/[slug].vue`
5. The slug is resolved through `resolvePage()` in `data/site.ts`
6. The matching page component is rendered

If a detail page is not opening, the first files to check are:

- `pages/[locale]/[slug].vue`
- `data/site.ts`
- `composables/useSiteContent.ts`

## How Page Content Is Driven

### Homepage

Homepage content comes from `homePage` in `data/site.ts`.

This includes:

- hero slides
- brand intro
- homepage model previews
- energy section
- service section
- global footprint section

### Model pages

Model pages are driven by two files:

- `data/site.ts`
  Defines the model metadata and base content
- `data/modelMedia.ts`
  Defines the expanded media gallery for each model slug

### Info pages

Info pages are defined directly in `data/site.ts`.

Each page usually contains:

- slug
- eyebrow
- title
- summary
- hero image
- content blocks
- optional metrics
- optional CTA

### Legal pages

Legal pages are also defined in `data/site.ts`.

Each page contains:

- slug
- title
- summary
- sections
- paragraphs

## How To Change Something

This section is the practical guide for editing the site.

### 1. Change the default page when opening `/`

Edit:

- `pages/index.vue`

Example:

- redirect to French: `/fr`
- redirect to English: `/en`
- redirect to Arabic: `/ar`

### 2. Change the header or menu

Edit:

- `components/layout/SiteHeader.vue`
- `data/site.ts`

Use `data/site.ts` when the change is content-related:

- menu labels
- menu links
- dropdown items

Use `SiteHeader.vue` when the change is structural or visual:

- layout
- mobile behavior
- hover behavior
- desktop menu structure

### 3. Change the footer

Edit:

- `components/layout/SiteFooter.vue`
- `data/site.ts`

Footer content is mostly driven by:

- `footerColumns`
- `footerLegalLinks`
- `footerContact`

inside `data/site.ts`.

### 4. Change homepage content

Edit:

- `data/site.ts`

Look for:

- `homePage.slides`
- `homePage.brandIntro`
- `homePage.models`
- `homePage.energy`
- `homePage.service`
- `homePage.footprint`

Change component structure only if needed in:

- `components/home/HomeHero.vue`
- `components/home/HomeBrandIntro.vue`
- `components/home/HomeModels.vue`
- `components/home/HomeStatsMedia.vue`
- `components/home/HomeServiceGrid.vue`
- `components/home/HomeGlobalMap.vue`

### 5. Change a model page

Usually edit:

- `data/site.ts`
- `data/modelMedia.ts`
- `components/page/ModelPage.vue`

Use `data/site.ts` for:

- title
- subtitle
- description
- price
- metrics
- CTA labels
- page slug

Use `data/modelMedia.ts` for:

- additional model gallery images
- changing which local images appear in the long-form sections

Use `components/page/ModelPage.vue` if you want to change:

- section order
- layout structure
- chapter labels
- CTA block
- overview structure

Use `components/page/model/ModelMediaSection.vue` if you want to change:

- image layout inside each media section
- visual treatment of the model section blocks

Use `components/page/model/ModelChapterNav.vue` if you want to change:

- sticky section navigation
- chapter link layout

### 6. Change an info page

Usually edit:

- `data/site.ts`
- `components/page/InfoPage.vue`

Use `data/site.ts` for:

- page title
- summary
- hero image
- blocks
- metrics
- CTA

Use `InfoPage.vue` for:

- layout
- block presentation
- card styling
- metric section structure

### 7. Change a legal page

Usually edit:

- `data/site.ts`
- `components/page/LegalPage.vue`

Use `data/site.ts` for:

- legal headings
- paragraphs
- section structure

Use `LegalPage.vue` for:

- card layout
- spacing
- legal page visual style

### 8. Change translations

Edit:

- `data/site.ts`

Most text is stored as:

```ts
{ en: '...', fr: '...', ar: '...' }
```

Rules to follow:

- Keep the brand name exactly `Voyah`
- Keep Arabic content suitable for RTL
- If you add a new string, add all three locales

### 9. Change route slugs

Edit:

- `data/site.ts`

The slug for each page is defined in the page entry itself.

Examples:

- `titan.html`
- `brand.html`
- `privacy.html`

Important:

- If you change a slug, also update any links that reference it
- Header, footer, homepage buttons, and CTAs may all point to that slug

### 10. Change styles globally

Edit:

- `assets/styles/main.css`

Use this file for:

- global spacing
- tokens
- shared card styles
- hero styles
- responsive rules
- typography and color variables

### 11. Add or replace images

Put assets in the relevant local folder:

- model vehicle media: `public/voyah-resources/images/car/...`
- shared info/home assets: `public/static/assets/...`
- homepage banner assets: `public/website/...`

Then reference them from:

- `data/site.ts`
- `data/modelMedia.ts`

Do not use remote URLs for page assets.

## Safe Editing Workflow

When changing a page, use this order:

1. Find the route slug
2. Locate its content in `data/site.ts`
3. Change text, images, metrics, or CTA there first
4. Only edit the Vue component if the layout itself must change
5. Run the app and verify the target locale pages

For model pages, also check `data/modelMedia.ts`.

## Commands

Install dependencies:

```bash
yarn install
```

Run development server:

```bash
yarn dev
```

Build for production:

```bash
yarn build
```

Generate static output:

```bash
yarn generate
```

Preview generated output:

```bash
yarn preview
```

Clear Nuxt cache:

```bash
yarn cleanup
```

## Important Notes

- This project is intended to run from local source code and local assets
- Page routing is data-driven from `data/site.ts`
- Model page galleries are extended through `data/modelMedia.ts`
- The site uses locale-prefixed routes through the `pages/[locale]` structure
- Arabic layout depends on document direction and the locale metadata
- If routing looks wrong, check `pages/index.vue`, `composables/useSiteContent.ts`, and `nuxt.config.ts`

## Recommended Places To Start

If a new developer wants to understand the project quickly, read these files first:

1. `nuxt.config.ts`
2. `data/site.ts`
3. `pages/[locale]/[slug].vue`
4. `components/page/ModelPage.vue`
5. `components/page/InfoPage.vue`
6. `components/layout/SiteHeader.vue`
7. `composables/useSiteContent.ts`
