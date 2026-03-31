<template>
  <section ref="sectionRef" class="section-shell">
    <div class="container">
      <p class="eyebrow" data-reveal>{{ textFor(title) }}</p>
      <h2 class="section-title" data-reveal>{{ textFor(title) }}</h2>
      <p class="section-copy" data-reveal>{{ textFor(body) }}</p>

      <div class="model-grid">
        <NuxtLink
          v-for="model in models"
          :key="model.slug"
          :to="buildPath(model.slug)"
          class="model-card"
          data-reveal
        >
          <img :src="model.image" :alt="textFor(model.title)" />
          <div class="model-body">
            <span class="model-category">{{ textFor(model.category) }}</span>
            <h3>{{ textFor(model.title) }}</h3>
            <MetricGrid :metrics="model.metrics" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { HomeData, LocalizedText } from '~/data/site'
import MetricGrid from '~/components/common/MetricGrid.vue'
import { useSectionReveal } from '~/composables/useSectionReveal'
import { useSiteContent } from '~/composables/useSiteContent'

defineProps<{
  title: LocalizedText
  body: LocalizedText
  models: HomeData['models']
}>()

const { buildPath, textFor } = useSiteContent()
const sectionRef = useSectionReveal({ stagger: 0.08 })
</script>

<style scoped>
.model-grid {
  margin-top: 26px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.model-card {
  overflow: hidden;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
}

.model-card img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

.model-body {
  padding: 22px;
}

.model-category {
  color: var(--accent-strong);
  font-size: 0.88rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.model-body h3 {
  margin: 10px 0 18px;
  font-size: 1.5rem;
}

@media (max-width: 900px) {
  .model-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
