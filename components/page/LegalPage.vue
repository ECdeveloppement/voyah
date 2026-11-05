<template>
  <div :class="['legal-page', `legal-page--${page.slug.replace('.html', '')}`]">
    <article class="container legal-article">
      <h1 class="legal-article__title">{{ textFor(page.title) }}</h1>
      <p v-if="page.summary" class="legal-article__summary">{{ textFor(page.summary) }}</p>

      <section
        v-for="(section, index) in page.sections"
        :id="`legal-${index + 1}`"
        :key="section.title.en"
        class="legal-article__section"
      >
        <h2 class="legal-article__heading">{{ textFor(section.title) }}</h2>
        <p v-for="paragraph in section.paragraphs" :key="paragraph.en" class="legal-article__paragraph">
          {{ textFor(paragraph) }}
        </p>
      </section>
    </article>
  </div>
</template>

<script setup lang="ts">
import type { LegalDefinition } from '~/data/site'
import { useSiteContent } from '~/composables/useSiteContent'

const props = defineProps<{
  page: LegalDefinition
}>()

const { textFor } = useSiteContent()
</script>

<style scoped>
/* Article texte plat, comme les pages Privacy Policy / Terms Of Use du site de référence. */
.legal-page {
  background: #ffffff;
  color: #212529;
}

.legal-article {
  max-width: 1152px;
  padding-top: 112px;
  padding-bottom: 96px;
}

.legal-article__title {
  margin: 0 0 32px;
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 700;
  line-height: 1.2;
}

.legal-article__summary {
  margin: 0 0 24px;
  font-size: 1rem;
  line-height: 1.75;
}

.legal-article__section {
  margin-top: 28px;
}

.legal-article__heading {
  margin: 0 0 12px;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.6;
}

.legal-article__paragraph {
  margin: 0 0 16px;
  font-size: 1rem;
  line-height: 1.75;
}

@media (max-width: 768px) {
  .legal-article {
    padding-top: 96px;
    padding-bottom: 56px;
  }
}
</style>
