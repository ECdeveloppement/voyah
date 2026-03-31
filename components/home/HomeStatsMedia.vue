<template>
  <section ref="sectionRef" class="section-shell">
    <div class="container energy-grid panel">
      <div class="energy-media" data-reveal>
        <img :src="data.image" :alt="textFor(data.title)" />
      </div>
      <div class="energy-copy">
        <p class="eyebrow" data-reveal>{{ textFor(data.label) }}</p>
        <h2 class="section-title" data-reveal>{{ textFor(data.title) }}</h2>
        <p class="section-copy" data-reveal>{{ textFor(data.body) }}</p>
        <div data-reveal>
          <MetricGrid :metrics="data.metrics" />
        </div>
        <BaseButton :to="buildPath('energy.html')" variant="secondary" data-reveal>
          {{ textFor(data.label) }}
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { HomeData } from '~/data/site'
import BaseButton from '~/components/common/BaseButton.vue'
import MetricGrid from '~/components/common/MetricGrid.vue'
import { useSectionReveal } from '~/composables/useSectionReveal'
import { useSiteContent } from '~/composables/useSiteContent'

defineProps<{
  data: HomeData['energy']
}>()

const { buildPath, textFor } = useSiteContent()
const sectionRef = useSectionReveal()
</script>

<style scoped>
.energy-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  overflow: hidden;
}

.energy-media img {
  width: 100%;
  height: 100%;
  min-height: 460px;
  object-fit: cover;
}

.energy-copy {
  padding: 42px;
  display: grid;
  align-content: center;
  gap: 22px;
}

@media (max-width: 900px) {
  .energy-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .energy-copy {
    padding: 28px 24px 32px;
  }

  .energy-media img {
    min-height: 320px;
  }
}
</style>
