# Voyah Multi-Agent Supervisor Plan

## Scope
- Build/upgrade 14 model pages in existing Nuxt architecture.
- No route-system rewrite, no external hotlinks, no raw HTML copy.

## Reuse-First Architecture
- Dynamic route: `pages/[locale]/[slug].vue`
- Model renderer: `components/page/ModelPage.vue`
- Shared building blocks:
  - `components/common/PageHero.vue`
  - `components/common/MetricGrid.vue`
  - `components/page/model/ModelChapterNav.vue`
  - `components/page/model/ModelMediaSection.vue`
  - `components/common/BaseButton.vue`
- Data sources:
  - `data/site.ts` (model metadata, nav, hero/metrics/gallery, localized strings)
  - `data/modelMedia.ts` (authored model chapters/story media)

## Agent Plans Status
- Agent 1 (`passion-L.html`) - accepted
- Agent 2 (`passion.html`) - accepted
- Agent 3 (`titan.html`) - accepted
- Agent 4 (`titan_blackedition.html`) - accepted
- Agent 5 (`titan_X8.html`) - accepted
- Agent 6 (`free+.html`) - accepted
- Agent 7 (`newCourage.html`) - accepted
- Agent 8 (`free.html`) - accepted
- Agent 9 (`courage.html`) - accepted
- Agent 10 (`newDreamer26.html`) - accepted
- Agent 11 (`dreamer-champion.html`) - needs normalization to model-page conventions
- Agent 12 (`newDreamer.html`) - accepted
- Agent 13 (`dreamriver.html`) - needs normalization to model-page conventions
- Agent 14 (`dreamer.html`) - needs normalization to model-page conventions

## Supervisor Normalization Rules
1. All 14 URLs are model slugs; render through `ModelPage` unless a hard blocker exists.
2. Keep per-model differences in `data/site.ts` and `data/modelMedia.ts`.
3. Create new components only for interactions impossible in `ModelMediaSection`.
4. Keep assets under existing local conventions:
   - `/voyah-resources/images/car/<slug-folder>/...`
   - `/voyah-resources/images/car/car_logo/...`
5. Ensure locale-safe copy (`en`, `fr`, `ar`) for all added strings.

## Implementation Batches
- Batch A (VOITURE): `passion-L`, `passion` - in progress (data parity pass 1 completed)
- Batch B (SUV core): `titan`, `titan_blackedition`, `titan_X8` - in progress (data parity pass 1 completed)
- Batch C (SUV extension): `free+`, `newCourage`, `free`, `courage` - in progress (data parity pass 1 completed)
- Batch D (MPV): `newDreamer26`, `dreamer-champion`, `newDreamer`, `dreamriver`, `dreamer` - in progress (data parity pass 1 completed)

### Batch A Progress Notes
- Removed invalid `passion` video binding that referenced a non-existent local/official file.
- Expanded `passion` chapter image sequences to use official page media ordering for closer visual parity.
- Added utility script `scripts/sync-passion-assets.mjs` to enforce local asset availability from current model data references.

### Batch B Progress Notes
- Removed invalid `titan_blackedition` video reference and replaced with confirmed official image sets.
- Expanded `titan` and `titan_blackedition` chapter media lists with official page assets to improve section-by-section visual parity.
- Added utility scripts:
  - `scripts/extract-batch-b-media.mjs` (official media inventory)
  - `scripts/sync-batch-b-assets.mjs` (local asset sync)
  - `scripts/audit-batch-b-assets.mjs` (missing-asset validation)

### Batch C Progress Notes
- Removed invalid `free` video references and switched `free` hero to official static key visual image.
- Expanded `free`, `newCourage`, and `courage` chapter image sets with official variant frames for denser section parity.
- Added utility scripts:
  - `scripts/extract-batch-c-media.mjs` (official media inventory)
  - `scripts/sync-batch-c-assets.mjs` (local asset sync)
  - `scripts/audit-batch-c-assets.mjs` (missing-asset validation)

### Batch D Progress Notes
- Removed invalid `dreamer` video reference and normalized Dreamer-family media to officially observed image IDs.
- Updated `newDreamer26`, `dreamer-champion`, `dreamriver`, and `dreamer` chapter media sets to better follow official frame sequencing.
- Updated MPV model hero/gallery references in `data/site.ts` for stronger official parity coverage.
- Added utility scripts:
  - `scripts/extract-batch-d-media.mjs` (official media inventory)
  - `scripts/sync-batch-d-assets.mjs` (local asset sync)
  - `scripts/audit-batch-d-assets.mjs` (missing-asset validation)

## Validation Checklist (per page)
- Route resolves at `/{locale}/{slug}` and renders model path.
- Hero/media/chapter order matches target page narrative.
- Assets are local only; no external URLs.
- Interactions match existing system (chapter nav, carousel/video, reveal).
- Responsive parity verified at desktop/tablet/mobile.
- No linter errors and no regression in sibling model pages.
