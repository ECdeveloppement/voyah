<template>
  <section ref="sectionRef" class="section-shell">
    <div class="container intro-grid panel">
      <div class="intro-copy">
        <p class="eyebrow" data-reveal>Voyah</p>
        <h2 class="section-title" data-reveal>{{ textFor(data.title) }}</h2>
        <p class="section-copy" data-reveal>{{ textFor(data.body) }}</p>
        <BaseButton :to="buildPath('brand.html')" variant="primary" data-reveal>
          {{ textFor(data.cta) }}
        </BaseButton>
      </div>
      <div class="intro-media" data-reveal>
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
  data: HomeData['brandIntro']
}>()

const { buildPath, textFor } = useSiteContent()
const sectionRef = useSectionReveal()
</script>

<style scoped>
.intro-grid {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 24px;
  overflow: hidden;
}

.intro-copy {
  padding: 42px;
  display: grid;
  align-content: center;
}

.intro-media img {
  width: 100%;
  height: 100%;
  min-height: 460px;
  object-fit: cover;
}

@media (max-width: 900px) {
  .intro-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .intro-copy {
    padding: 28px 24px 0;
  }

  .intro-media img {
    min-height: 320px;
  }
}
</style>
