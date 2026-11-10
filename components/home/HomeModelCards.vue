<template>
  <section class="home-models">
    <div class="home-models__grid">
      <article v-for="slide in slides" :key="slide.primarySlug" class="home-model-card">
        <div class="home-model-card__inner">
          <div class="home-model-card__media">
            <NuxtLink :to="buildPath(slide.primarySlug)">
              <img :src="slide.image" :alt="textFor(slide.title)" loading="lazy" decoding="async" />
            </NuxtLink>
          </div>

          <div class="home-model-card__body">
            <img class="home-model-card__logo" :src="slide.logo" :alt="textFor(slide.title)" />
            <p class="home-model-card__text">{{ textFor(slide.description) }}</p>
            <NuxtLink :to="buildPath(slide.primarySlug)" class="base-button primary home-model-card__cta">
              {{ textFor(slide.primaryLabel) }}
            </NuxtLink>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { HomeData } from '~/data/site'
import { useSiteContent } from '~/composables/useSiteContent'

defineProps<{ slides: HomeData['slides'] }>()

const { buildPath, textFor } = useSiteContent()
</script>

<style scoped>
.home-models {
  background: var(--bg);
  padding: 40px 0 80px;
}

.home-models__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 40px;
  width: min(1152px, 100%);
  margin: 0 auto;
  padding: 0 24px;
}

.home-model-card {
  overflow: hidden;
}

.home-model-card__inner {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  color: #525252;
}

.home-model-card__media {
  display: flex;
  align-items: center;
  height: 400px;
  overflow: hidden;
  background: #fafafa;
}

.home-model-card__media a {
  display: block;
  width: 100%;
  height: 100%;
}

.home-model-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease-out;
}

.home-model-card__inner:hover .home-model-card__media img {
  transform: scale(1.05);
}

.home-model-card__body {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
}

.home-model-card__logo {
  max-width: 220px;
  width: auto;
  /* Les wordmarks du repo sont blancs : noircis pour rester lisibles sur fond blanc. */
  filter: brightness(0);
}

.home-model-card__text {
  margin: 20px 0;
  line-height: 1.5;
}

.home-model-card__cta {
  display: block;
  width: 100%;
}

@media (min-width: 640px) {
  .home-model-card__text {
    margin-bottom: 40px;
  }
}

@media (min-width: 768px) {
  .home-models__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .home-models__grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .home-model-card__media {
    height: 600px;
  }
}
</style>
