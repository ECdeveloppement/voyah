<template>
  <section ref="sectionRef" class="energy-section">
    <div class="container">
      <h2 class="energy-title" data-reveal>{{ textFor(data.title) }}</h2>
      <p class="energy-copy" data-reveal>{{ textFor(data.body) }}</p>

      <div class="energy-video-cta" data-reveal>
        <button type="button" class="energy-video-button">
          {{ videoLabel }}
        </button>
      </div>

      <div class="energy-stats" data-reveal>
        <div v-for="metric in data.metrics" :key="metric.label.en" class="energy-stat">
          <div class="energy-stat__value">{{ metric.value }}</div>
          <div class="energy-stat__label">{{ textFor(metric.label) }}</div>
        </div>
      </div>

      <div class="energy-stage" data-reveal>
        <img :src="data.image" :alt="textFor(data.title)" class="energy-image" />
        <div class="energy-overlay" />

        <div class="energy-stage-action">
          <button type="button" class="energy-stage-button">
            <span>{{ videoLabel }}</span>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 7.5V16.5L16.5 12L9 7.5Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { HomeData } from '~/data/site'
import { useSectionReveal } from '~/composables/useSectionReveal'
import { useSiteContent } from '~/composables/useSiteContent'

defineProps<{
  data: HomeData['energy']
}>()

const { locale, textFor } = useSiteContent()
const sectionRef = useSectionReveal()

const videoLabel = computed(() => {
  if (locale.value.code === 'fr') return 'Voir le film complet'
  if (locale.value.code === 'ar') return 'مشاهدة الفيديو الكامل'
  return 'Watch the full film'
})
</script>

<style scoped>
.energy-section {
  padding: 96px 0;
  background: #fff;
  color: #101720;
}

.energy-title {
  margin: 0;
  max-width: 760px;
  font-size: clamp(2.35rem, 4.6vw, 4.5rem);
  line-height: 0.98;
  letter-spacing: -0.03em;
  text-align: center;
  margin-inline: auto;
}

.energy-copy {
  margin: 18px 0 0;
  max-width: 760px;
  color: #5d6976;
  line-height: 1.82;
  text-align: center;
  margin-inline: auto;
}

.energy-video-cta {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.energy-video-button {
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid rgba(16, 23, 32, 0.14);
  border-radius: 0;
  background: transparent;
  color: #101720;
  transition: background-color 0.24s ease, border-color 0.24s ease, transform 0.24s ease;
}

.energy-video-button:hover {
  transform: translateY(-1px);
  background: rgba(16, 23, 32, 0.04);
  border-color: rgba(16, 23, 32, 0.24);
}

.energy-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  margin-top: 36px;
  border-top: 1px solid rgba(16, 23, 32, 0.08);
  border-bottom: 1px solid rgba(16, 23, 32, 0.08);
}

.energy-stat {
  padding: 26px 22px 24px 0;
  border-right: 1px solid rgba(16, 23, 32, 0.08);
}

.energy-stat:last-child {
  border-right: 0;
}

.energy-stat__value {
  font-size: clamp(1.6rem, 2.4vw, 2.5rem);
  line-height: 1;
  color: #101720;
}

.energy-stat__label {
  margin-top: 10px;
  color: #6a7682;
  line-height: 1.7;
}

.energy-stage {
  position: relative;
  overflow: hidden;
  margin-top: 34px;
  min-height: 600px;
  background: #edf2f5;
}

.energy-image {
  width: 100%;
  min-height: 600px;
  object-fit: cover;
}

.energy-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(8, 12, 18, 0.22));
}

.energy-stage-action {
  position: absolute;
  right: 24px;
  bottom: 24px;
  z-index: 1;
}

.energy-stage-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid rgba(255, 255, 255, 0.32);
  border-radius: 0;
  background: rgba(9, 15, 22, 0.58);
  color: #fff;
  backdrop-filter: blur(8px);
}

.energy-stage-button svg {
  width: 18px;
  height: 18px;
}

@media (max-width: 1024px) {
  .energy-stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px 24px;
    border-bottom: 0;
  }

  .energy-stat:nth-child(2n) {
    border-right: 0;
    padding-right: 0;
  }
}

@media (max-width: 768px) {
  .energy-section {
    padding: 72px 0;
  }

  .energy-stats {
    grid-template-columns: minmax(0, 1fr);
    gap: 0;
  }

  .energy-stat {
    border-right: 0;
    padding-right: 0;
    padding-bottom: 18px;
    border-bottom: 1px solid rgba(16, 23, 32, 0.08);
  }

  .energy-stage,
  .energy-image {
    min-height: 420px;
  }

  .energy-stage-action {
    right: 16px;
    bottom: 16px;
  }
}
</style>
