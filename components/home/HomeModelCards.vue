<template>
  <section ref="sectionRef" class="home-models">
    <div class="home-models__grid">
      <article
        v-for="slide in slides"
        :key="slide.primarySlug"
        class="home-model-card"
        data-reveal
      >
        <div class="home-model-card__media">
          <!-- Carte Passion : visuel de teasing non cliquable (aucune redirection vers la page Passion). -->
          <NuxtLink v-if="!isTeaser(slide)" :to="buildPath(slide.primarySlug)" :aria-label="textFor(slide.title)">
            <img :src="cardImage(slide)" :alt="textFor(slide.title)" loading="lazy" decoding="async" />
          </NuxtLink>
          <div v-else class="home-model-card__teaser" aria-hidden="true">
            <img :src="cardImage(slide)" alt="" loading="lazy" decoding="async" />
          </div>
        </div>

        <!-- Carte Passion : visuel de teasing, sans texte ni boutons (données conservées dans data/site.ts). -->
        <div v-if="!isTeaser(slide)" class="home-model-card__body">
          <img v-if="slide.logo" class="home-model-card__logo" :src="slide.logo" :alt="textFor(slide.title)" />
          <p class="home-model-card__text">{{ textFor(slide.description) }}</p>
          <div class="home-model-card__actions">
            <BaseButton :to="buildPath(slide.primarySlug)" variant="primary">
              {{ textFor(slide.primaryLabel) }} {{ textFor(slide.title) }}
            </BaseButton>
            <BaseButton v-if="slide.secondarySlug" :to="`${buildPath(slide.secondarySlug)}?model=${encodeURIComponent(slide.primarySlug)}`" variant="secondary">
              {{ textFor(slide.secondaryLabel) }}
            </BaseButton>
            <BrochureButton :slug="slide.primarySlug" :label="downloadLabel" />
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { HomeData } from '~/data/site'
import BaseButton from '~/components/common/BaseButton.vue'
import BrochureButton from '~/components/common/BrochureButton.vue'
import { t } from '~/data/dealer'
import { useSectionReveal } from '~/composables/useSectionReveal'
import { useSiteContent } from '~/composables/useSiteContent'

defineProps<{ slides: HomeData['slides'] }>()

const { buildPath, textFor } = useSiteContent()
const downloadLabel = t('Download the brochure', 'Télécharger la brochure', 'تحميل الكتيب')

/** Carte Passion : visuel de teasing à la place de la photo du modèle. */
const teaserImage = '/assets/updates/teaser-cover.png'
const teaserSlug = 'Passion'

const isTeaser = (slide: HomeData['slides'][number]) => slide.primarySlug === teaserSlug
const cardImage = (slide: HomeData['slides'][number]) => (isTeaser(slide) ? teaserImage : slide.image)

const sectionRef = useSectionReveal({ stagger: 0.08, y: 24 })
</script>

<style scoped>
.home-models {
  background: var(--bg);
  padding: clamp(32px, 5vw, 72px) 24px clamp(48px, 7vw, 96px);
}

.home-models__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(24px, 3vw, 40px);
  width: min(1152px, 100%);
  margin: 0 auto;
}

.home-model-card {
  min-width: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.home-model-card__media {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #f7f8fa;
}

.home-model-card__media a,
.home-model-card__media .home-model-card__teaser,
.home-model-card__media img {
  display: block;
  width: 100%;
  height: 100%;
}

.home-model-card__media img {
  object-fit: cover;
  object-position: center;
  transform: scale(var(--image-scale, 1));
  transform-origin: var(--image-origin, center);
  transition: transform 0.7s ease-out;
}

.home-model-card:hover .home-model-card__media img {
  transform: scale(calc(var(--image-scale, 1) * 1.025));
}

.home-model-card__body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex: 1 1 auto;
  padding: clamp(18px, 2vw, 24px);
}

.home-model-card__logo {
  max-width: min(220px, 70%);
  max-height: 22px;
  width: auto;
  object-fit: contain;
  object-position: left center;
  filter: brightness(0);
}

.home-model-card__text {
  min-height: 5.5em;
  margin: 0;
  color: #525252;
  line-height: 1.55;
}

.home-model-card__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: auto;
  min-height: 48px;
  align-items: flex-end;
}

.home-model-card__actions :deep(.secondary) {
  border-color: #406a70;
  color: #31575c;
}

.home-model-card__actions :deep(.secondary:hover) {
  background: #406a70;
  color: #fff;
}

@media (max-width: 640px) {
  .home-models { padding-inline: 16px; }
  .home-models__grid { grid-template-columns: 1fr; }
  .home-model-card__text { min-height: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .home-model-card__media img,
  .home-model-card__media a { transition: none; }
}
</style>
