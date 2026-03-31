<template>
  <section ref="sectionRef" class="section-shell">
    <div class="container map-grid panel">
      <div class="map-copy">
        <p class="eyebrow" data-reveal>{{ textFor(data.title) }}</p>
        <h2 class="section-title" data-reveal>{{ textFor(data.title) }}</h2>
        <p class="section-copy" data-reveal>{{ textFor(data.body) }}</p>

        <div class="tab-row" data-reveal>
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

        <div class="country-list" data-reveal>
          <span v-for="country in data.tabs[activeTab]?.countries ?? []" :key="country.en">
            {{ textFor(country) }}
          </span>
        </div>

        <BaseButton :to="buildPath('brand.html')" variant="primary" data-reveal>
          {{ textFor(data.cta) }}
        </BaseButton>
      </div>

      <div class="map-media" data-reveal>
        <img :src="data.image" :alt="textFor(data.title)" />
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
const sectionRef = useSectionReveal()
const activeTab = ref(0)
</script>

<style scoped>
.map-grid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 24px;
  overflow: hidden;
}

.map-copy {
  padding: 42px;
  display: grid;
  align-content: center;
  gap: 22px;
}

.tab-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tab-button {
  height: 40px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
}

.tab-button.active {
  border-color: rgba(197, 156, 98, 0.4);
  background: rgba(197, 156, 98, 0.16);
}

.country-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.country-list span {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(237, 242, 247, 0.78);
}

.map-media img {
  width: 100%;
  height: 100%;
  min-height: 460px;
  object-fit: cover;
}

@media (max-width: 900px) {
  .map-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .map-copy {
    padding: 28px 24px 0;
  }

  .map-media img {
    min-height: 320px;
  }
}
</style>
