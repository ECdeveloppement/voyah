<template>
  <div class="legal-page">
    <PageHero
      :eyebrow="textFor(page.eyebrow)"
      :title="textFor(page.title)"
      :summary="textFor(page.summary)"
      image="/static/assets/world-fec50d02.jpg"
    />

    <section ref="contentRef" class="section-shell legal-page-shell">
      <div class="container legal-stack">
        <article v-for="section in page.sections" :key="section.title.en" class="legal-card" data-reveal>
          <h2>{{ textFor(section.title) }}</h2>
          <p v-for="paragraph in section.paragraphs" :key="paragraph.en">
            {{ textFor(paragraph) }}
          </p>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { LegalDefinition } from '~/data/site'
import PageHero from '~/components/common/PageHero.vue'
import { useSectionReveal } from '~/composables/useSectionReveal'
import { useSiteContent } from '~/composables/useSiteContent'

defineProps<{
  page: LegalDefinition
}>()

const { textFor } = useSiteContent()
const contentRef = useSectionReveal()
</script>

<style scoped>
.legal-page {
  background: #fff;
}

.legal-page-shell {
  background: linear-gradient(180deg, #fff, #f7f3ee);
}

.legal-page :deep(.legal-card) {
  background: rgba(255, 255, 255, 0.92);
  border-color: rgba(16, 23, 32, 0.08);
  box-shadow: 0 22px 60px rgba(16, 23, 32, 0.08);
}

.legal-page :deep(.legal-card h2),
.legal-page :deep(.legal-card h3) {
  color: #101720;
}

.legal-page :deep(.legal-card p) {
  color: #5c6875;
}
</style>
