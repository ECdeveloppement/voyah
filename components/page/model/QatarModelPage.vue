<template>
  <div ref="root" class="qatar-model">
    <!-- Hero vidéo pleine largeur, chiffres posés dessus -->
    <section class="model-hero">
      <video
        v-if="content.heroVideo"
        ref="heroVideo"
        class="model-hero__video"
        :class="{ 'is-ended': heroVideoEnded }"
        :poster="content.heroPoster"
        muted
        autoplay
        playsinline
        loop
        preload="metadata"
        @ended="heroVideoEnded = true"
      >
        <source :src="content.heroVideo" type="video/mp4" />
      </video>
      <img v-else class="model-hero__video" :src="content.heroPoster" :alt="textFor(title)" />

      <span class="model-hero__scrim model-hero__scrim--top" aria-hidden="true"></span>
      <span class="model-hero__scrim model-hero__scrim--bottom" aria-hidden="true"></span>

      <div class="model-hero__overlay">
        <div class="model-hero__head">
          <img class="model-hero__logo" :src="content.logo" :alt="textFor(title)" />
          <p class="model-hero__tagline">{{ textFor(content.tagline) }}</p>
        </div>

        <div class="model-hero__foot">
          <div class="model-hero__metrics">
            <div v-for="metric in content.heroMetrics" :key="metric.label.en" class="model-hero__metric">
              <div class="model-hero__metric-label">{{ textFor(metric.label) }}</div>
              <p class="model-hero__metric-value">{{ metric.value }}</p>
            </div>
          </div>
          <div class="model-request__actions">
            <NuxtLink :to="testDrivePath" class="base-button primary">
              {{ textFor(modelCtaLabels.testDrive) }}
            </NuxtLink>
            <BrochureButton :slug="slug" variant="secondary" :label="modelCtaLabels.brochure" />
          </div>
        </div>
      </div>
    </section>

    <!-- Trois chiffres repris sous le hero, seulement sur mobile -->
    <div class="model-compact">
      <div class="model-compact__grid">
        <div v-for="metric in content.compactMetrics" :key="metric.label.en" class="model-compact__cell">
          <div class="model-compact__value">{{ metric.value }}</div>
          <span class="model-compact__label">{{ textFor(metric.label) }}</span>
        </div>
      </div>
    </div>

    <template v-for="(section, index) in sections" :key="index">
      <div
        v-if="section.type === 'parallax'"
        class="model-parallax"
        :style="{ backgroundImage: `url('${section.image}')` }"
      ></div>

      <div
        v-else-if="section.type === 'spacer' || section.type === 'spacerLarge'"
        class="model-spacer"
        :class="{ 'model-spacer--large': section.type === 'spacerLarge' }"
      ></div>

      <h1 v-else-if="section.type === 'comfortTitle'" class="model-comfort-title">
        {{ textFor(section.title) }}
      </h1>

      <section v-else-if="section.type === 'comfortRows'" class="model-comfort">
        <div
          v-for="(row, rowIndex) in section.rows"
          :key="rowIndex"
          class="model-comfort__row"
          :class="{ 'model-comfort__row--reverse': rowIndex % 2 === 1 }"
        >
          <div class="model-comfort__media" data-reveal>
            <img :src="row.image" :alt="textFor(row.text)" loading="lazy" decoding="async" />
          </div>
          <p class="model-comfort__text" data-reveal>{{ textFor(row.text) }}</p>
        </div>
      </section>

      <ModelCardGrid
        v-else-if="section.type === 'cards'"
        :heading="section.heading ?? blankHeading"
        :cards="section.cards"
        :show-heading="Boolean(section.heading)"
      />

      <section v-else-if="section.type === 'hoverGrid'" class="model-hover">
        <div
          v-for="(tile, tileIndex) in section.tiles"
          :key="tileIndex"
          class="model-hover__cell"
        >
          <div class="model-hover__tile">
            <img :src="tile.image" :alt="textFor(tile.text)" loading="lazy" decoding="async" />
            <div class="model-hover__center">
              <p class="model-hover__caption">{{ textFor(tile.text) }}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        v-else-if="section.type === 'band' && section.variant === 'cta'"
        class="model-band model-band--cta"
        :style="{ backgroundImage: `url('${section.image}')` }"
      >
        <div class="model-band__shade">
          <div class="model-band__box">
            <img class="model-band__logo" :src="content.logo" :alt="textFor(title)" />
            <div class="model-request__actions model-request__actions--center">
              <NuxtLink :to="testDrivePath" class="base-button primary">
                {{ textFor(modelCtaLabels.testDrive) }}
              </NuxtLink>
              <BrochureButton :slug="slug" variant="secondary" :label="modelCtaLabels.brochure" />
            </div>
          </div>
        </div>
      </section>

      <section
        v-else-if="section.type === 'band'"
        class="model-band model-band--intro"
        :style="{ backgroundImage: `url('${section.image}')` }"
      >
        <div class="model-band__top">
          <p class="model-band__lead">{{ textFor(section.text ?? blankHeading) }}</p>
        </div>
      </section>

      <section v-else class="model-specs">
        <div class="model-specs__head">
          <img class="model-specs__wordmark" :src="content.logo" :alt="textFor(title)" />
          <p class="model-specs__label">{{ textFor(content.configLabel) }}</p>
        </div>
        <ModelSpecTabs :tabs="content.specTabs" :list-label="textFor(content.configLabel)" />
        <p class="model-specs__note">{{ textFor(content.specNote) }}</p>
      </section>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { Localized } from '~/data/dealer'
import { modelDisplayName, t } from '~/data/dealer'
import { modelCtaLabels, type ModelPageContent, type ModelSection } from '~/data/modelPages'
import BrochureButton from '~/components/common/BrochureButton.vue'
import ModelCardGrid from '~/components/page/model/ModelCardGrid.vue'
import ModelSpecTabs from '~/components/page/model/ModelSpecTabs.vue'
import { useSiteContent } from '~/composables/useSiteContent'

const props = defineProps<{ slug: string; content: ModelPageContent }>()

const { textFor, buildPath } = useSiteContent()

const title: Localized = modelDisplayName[props.slug] ?? t('', '', '')
const blankHeading = t('', '', '')
const testDrivePath = buildPath('book-drive.html')

/** Le titre « confort » précède le premier bloc de lignes alternées. */
const sections = computed<ModelSection[]>(() => {
  const source = props.content.sections
  if (!props.content.comfortTitle) return source
  const index = source.findIndex((section) => section.type === 'comfortRows')
  if (index < 0) return source
  return [
    ...source.slice(0, index),
    { type: 'comfortTitle', title: props.content.comfortTitle },
    ...source.slice(index)
  ]
})

/** Reveal des lignes alternées : glissement horizontal de 40 px au premier passage à l'écran. */
const root = ref<HTMLElement | null>(null)
let revealObserver: IntersectionObserver | null = null

onMounted(() => {
  const nodes = Array.from(root.value?.querySelectorAll<HTMLElement>('[data-reveal]') ?? [])
  if (!nodes.length) return
  revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-revealed')
        revealObserver?.unobserve(entry.target)
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
  )
  nodes.forEach((node) => revealObserver?.observe(node))
})

onBeforeUnmount(() => {
  revealObserver?.disconnect()
})

const heroVideo = ref<HTMLVideoElement | null>(null)
const heroVideoEnded = ref(false)
</script>

<style scoped>
.qatar-model {
  background: var(--bg);
  color: var(--text);
}

/* ---------- Hero ---------- */
.model-hero {
  position: relative;
  height: 384px;
  overflow: hidden;
  background: #18181b;
}

@media (min-width: 1024px) {
  .model-hero {
    height: 700px;
  }
}

@media (min-width: 1280px) {
  .model-hero {
    height: calc(100vh - 94px);
  }
}

.model-hero__video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.model-hero__video.is-ended {
  display: none;
}

.model-hero__scrim {
  position: absolute;
  left: 0;
  right: 0;
  height: 240px;
  pointer-events: none;
}

@media (min-width: 1024px) {
  .model-hero__scrim {
    height: 150px;
  }
}

.model-hero__scrim--top {
  top: 0;
  background: linear-gradient(180deg, rgb(24 24 27 / 0.9), rgb(24 24 27 / 0));
}

.model-hero__scrim--bottom {
  bottom: 0;
  background: linear-gradient(180deg, rgb(24 24 27 / 0), rgb(24 24 27 / 0.9));
}

.model-hero__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.model-hero__head {
  padding: 112px 16px 0;
}

@media (min-width: 768px) {
  .model-hero__head {
    padding: 128px 40px 0;
  }
}

.model-hero__logo {
  height: 16px;
  width: auto;
}

@media (min-width: 1024px) {
  .model-hero__logo {
    height: 24px;
  }
}

.model-hero__tagline {
  margin: 0;
  padding-top: 12px;
  color: #ffffff;
  font-size: 1.25rem;
  line-height: 1.4;
  letter-spacing: -0.025em;
}

@media (min-width: 1024px) {
  .model-hero__tagline {
    font-size: 1.5rem;
  }
}

.model-hero__foot {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 24px;
  padding: 24px 16px;
}

.model-hero__metrics {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

@media (min-width: 768px) {
  .model-hero__metrics {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .model-hero__metrics {
    gap: 96px;
  }
}

.model-hero__metric {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
  text-align: center;
}

.model-hero__metric-label {
  margin-bottom: 8px;
  color: #ffffff;
  font-size: 0.875rem;
}

.model-hero__metric-value {
  margin: 0;
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 700;
}

/* ---------- Bandeau de chiffres mobile ---------- */
.model-compact {
  max-width: 1536px;
  margin: 0 auto;
  padding: 32px 16px;
}

@media (min-width: 768px) {
  .model-compact {
    display: none;
  }
}

@media (min-width: 1280px) {
  .model-compact {
    padding-inline: 40px;
  }
}

.model-compact__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-bottom: 32px;
}

.model-compact__cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
  text-align: center;
}

.model-compact__cell + .model-compact__cell {
  border-inline-start: 1px solid var(--line);
}

.model-compact__value {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text);
}

.model-compact__label {
  font-size: 0.75rem;
  color: var(--text);
}

/* ---------- Bandes image ---------- */
.model-parallax {
  position: relative;
  height: 500px;
  max-width: 2200px;
  margin: 0 auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 200%;
}

@media (min-width: 768px) {
  .model-parallax {
    height: 700px;
    background-size: cover;
    background-attachment: fixed;
  }
}

.model-spacer {
  height: 40px;
}

.model-spacer--large {
  height: 80px;
}

.model-band {
  display: flex;
  max-width: 2200px;
  margin: 0 auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.model-band--cta {
  height: 500px;
  align-items: flex-end;
}

@media (min-width: 768px) {
  .model-band--cta {
    height: 800px;
  }
}

@media (min-width: 1024px) {
  .model-band--cta {
    height: auto;
    min-height: calc(100vh - 94px);
  }
}

.model-band__shade {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 300px;
  padding: 40px 0;
  background: rgb(0 0 0 / 0.5);
}

.model-band__box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 20px;
  text-align: center;
  color: #ffffff;
}

.model-band__logo {
  height: 16px;
  width: auto;
  margin-bottom: 20px;
}

@media (min-width: 1024px) {
  .model-band__logo {
    height: 24px;
  }
}

.model-band--intro {
  height: 600px;
  align-items: flex-start;
}

@media (min-width: 768px) {
  .model-band--intro {
    height: calc(100vh - 94px);
  }
}

.model-band__top {
  width: 100%;
  height: 300px;
  padding-top: 40px;
}

@media (min-width: 768px) {
  .model-band__top {
    padding-top: 80px;
  }
}

.model-band__lead {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  color: #ffffff;
  font-size: 1.25rem;
  line-height: 1.4;
  text-wrap: balance;
}

@media (min-width: 768px) {
  .model-band__lead {
    max-width: 448px;
    font-size: 1.875rem;
  }
}

/* ---------- Titre « confort » ---------- */
.model-comfort-title {
  margin: 80px 0;
  padding: 0 16px;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 2.5rem;
  text-align: center;
  color: var(--text);
}

/* ---------- Lignes alternées ---------- */
.model-comfort {
  max-width: 2200px;
  margin: 0 auto;
  overflow-x: hidden;
}

.model-comfort__row {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 768px) {
  .model-comfort__row {
    flex-direction: row;
  }

  .model-comfort__row--reverse {
    flex-direction: row-reverse;
  }
}

.model-comfort__media {
  flex: 1 1 50%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.model-comfort__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease-out;
}

.model-comfort__row:hover .model-comfort__media img {
  transform: scale(1.05);
}

.model-comfort__text {
  display: flex;
  flex: 1 1 50%;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0;
  padding: 40px 32px;
  color: #374151;
  font-size: 1.125rem;
  line-height: 1.75rem;
  text-align: center;
  text-wrap: balance;
}

@media (min-width: 768px) {
  .model-comfort__text {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}

/* ---------- Grille a survol ---------- */
.model-hover {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  max-width: 2200px;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .model-hover {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.model-hover__tile {
  position: relative;
  display: block;
  aspect-ratio: 16 / 9;
  background: #000000;
  overflow: hidden;
}

.model-hover__tile img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.75;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.model-hover__tile:hover img {
  opacity: 0.5;
}

.model-hover__center {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

@media (min-width: 640px) {
  .model-hover__center {
    padding: 24px;
  }
}

@media (min-width: 1024px) {
  .model-hover__center {
    padding: 32px;
  }
}

.model-hover__caption {
  margin: 0;
  transform: translateY(32px);
  opacity: 0;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
  text-wrap: balance;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.model-hover__tile:hover .model-hover__caption {
  transform: translateY(0);
  opacity: 1;
}

/* ---------- Apparition des lignes alternées ---------- */
.model-comfort [data-reveal] {
  opacity: 0.01;
  transform: translateX(var(--reveal-x, 0px));
  transition:
    opacity 1s cubic-bezier(0.4, 0, 0.2, 1),
    transform 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.model-comfort [data-reveal].is-revealed {
  opacity: 1;
  transform: translateX(0);
}

.model-comfort__media {
  --reveal-x: -40px;
}

.model-comfort__text {
  --reveal-x: 40px;
}

.model-comfort__row--reverse .model-comfort__media {
  --reveal-x: 40px;
}

.model-comfort__row--reverse .model-comfort__text {
  --reveal-x: -40px;
}

@media (prefers-reduced-motion: reduce) {
  .model-comfort [data-reveal] {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

/* ---------- Caractéristiques ---------- */
.model-specs {
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 24px 80px;
}

.model-specs__wordmark {
  display: block;
  width: auto;
  height: 40px;
}

.model-specs__label {
  margin: 20px 0;
  color: var(--text);
  font-size: 1rem;
  line-height: 1.5rem;
}

.model-specs__note {
  margin: 40px 0;
  font-size: 0.75rem;
  line-height: 1.7;
  color: var(--text-soft);
}

/* ---------- Boutons de demande ---------- */
.model-request__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;
}
</style>
