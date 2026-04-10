<template>
  <section ref="sectionRef" class="section-shell footprint-section">
    <div class="container">
      <h2 class="section-title" data-reveal>{{ textFor(data.title) }}</h2>
      <p class="section-copy" data-reveal>{{ textFor(data.body) }}</p>

      <div class="footprint-cta" data-reveal>
        <BaseButton :to="buildPath('brand.html')" variant="secondary" class="footprint-button">
          {{ textFor(data.cta) }}
        </BaseButton>
      </div>

      <div class="footprint-stage" data-reveal>
        <div class="footprint-globe">
          <img :src="data.image" :alt="textFor(data.title)" class="footprint-image" />
        </div>

        <div class="tab-row">
          <button
            v-for="(tab, index) in data.tabs"
            :key="tab.label.en"
            type="button"
            :class="['tab-button', { active: activeTab === index }]"
            @click="activeTab = index"
          >
            {{ textFor(tab.label) }}
          </button>
        </div>

        <div class="country-list">
          <span v-for="country in data.tabs[activeTab]?.countries ?? []" :key="country.en">
            {{ textFor(country) }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { HomeData } from '~/data/site'
import BaseButton from '~/components/common/BaseButton.vue'
import { useSectionReveal } from '~/composables/useSectionReveal'
import { useSiteContent } from '~/composables/useSiteContent'

defineProps<{
  data: HomeData['footprint']
}>()

const { buildPath, textFor } = useSiteContent()
const sectionRef = useSectionReveal({ y: 28, duration: 0.9 })
const activeTab = ref(0)
</script>

<style scoped>
.footprint-section {
  background: #fff;
  color: #101720;
}

.footprint-cta {
  margin-top: 18px;
  display: flex;
  justify-content: center;
}

.footprint-stage {
  margin-top: 24px;
}

.footprint-globe {
  overflow: hidden;
  border-radius: 0;
  background: radial-gradient(circle at 50% 50%, rgba(16, 23, 32, 0.08), rgba(16, 23, 32, 0) 62%);
}

.footprint-image {
  width: 100%;
  min-height: 500px;
  object-fit: cover;
  transition: transform 0.54s cubic-bezier(0.33, 1, 0.68, 1);
}

.footprint-globe:hover .footprint-image {
  transform: scale(1.015);
}

.tab-row {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 24px;
  justify-content: center;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(16, 23, 32, 0.08);
}

.tab-button {
  position: relative;
  height: 32px;
  padding: 0;
  border: 0;
  background: transparent;
  color: rgba(16, 23, 32, 0.46);
  font-size: 0.96rem;
  transition:
    color 0.22s ease,
    transform 0.22s ease;
}

.tab-button:hover {
  transform: translateY(-1px);
}

.tab-button::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -13px;
  height: 1px;
  background: #b31d22;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.24s ease;
}

.tab-button.active {
  color: #101720;
}

.tab-button.active::after {
  transform: scaleX(1);
}

.country-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px 14px;
  margin-top: 14px;
}

.country-list span {
  padding: 10px 0;
  border-bottom: 1px solid rgba(16, 23, 32, 0.08);
  color: #61707d;
}

.footprint-button :deep(.base-button.secondary) {
  background: transparent;
  border-color: rgba(16, 23, 32, 0.18);
  color: #111;
}

@media (max-width: 900px) {
  .country-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .country-list {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
