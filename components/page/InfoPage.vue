<template>
  <div class="info-page">
    <PageHero
      :eyebrow="textFor(page.eyebrow)"
      :title="textFor(page.title)"
      :summary="textFor(page.summary)"
      :image="page.heroImage"
    >
      <template v-if="page.ctaSlug && page.ctaLabel" #actions>
        <BaseButton :to="buildPath(page.ctaSlug)" variant="primary">
          {{ textFor(page.ctaLabel) }}
        </BaseButton>
      </template>
    </PageHero>

    <section v-if="page.metrics?.length" ref="metricsRef" class="section-shell info-page-shell">
      <div class="container">
        <MetricGrid :metrics="page.metrics" />
      </div>
    </section>

    <section ref="contentRef" class="section-shell info-page-shell alt">
      <div class="container content-grid">
        <article v-for="block in page.blocks" :key="block.image" class="content-card" data-reveal>
          <img :src="block.image" :alt="textFor(block.title)" />
          <div class="content-card-body">
            <h2 class="content-card-title">{{ textFor(block.title) }}</h2>
            <p class="content-card-copy">{{ textFor(block.body) }}</p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { InfoDefinition } from '~/data/site'
import BaseButton from '~/components/common/BaseButton.vue'
import MetricGrid from '~/components/common/MetricGrid.vue'
import PageHero from '~/components/common/PageHero.vue'
import { useSectionReveal } from '~/composables/useSectionReveal'
import { useSiteContent } from '~/composables/useSiteContent'

defineProps<{
  page: InfoDefinition
}>()

const { buildPath, textFor } = useSiteContent()
const metricsRef = useSectionReveal()
const contentRef = useSectionReveal()
</script>

<style scoped>
.info-page {
  background: #fff;
}

.info-page-shell {
  background: linear-gradient(180deg, #fff, #f7f3ee);
}

.info-page-shell.alt {
  background: #f7f3ee;
}

.info-page :deep(.metric-card),
.info-page :deep(.content-card) {
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(16, 23, 32, 0.08);
  box-shadow: 0 22px 60px rgba(16, 23, 32, 0.08);
}

.info-page :deep(.metric-value),
.info-page :deep(.content-card-title) {
  color: #101720;
}

.info-page :deep(.metric-label),
.info-page :deep(.content-card-copy) {
  color: #5c6875;
}
</style>
