<template>
  <section ref="sectionRef" class="brand-section">
    <div class="brand-stage" data-reveal>
      <img :src="data.image" :alt="textFor(data.title)" class="brand-stage-image" />
      <div class="brand-stage-overlay" />

      <div class="brand-stage-copy">
        <h2 class="brand-title">{{ textFor(data.title) }}</h2>
        <p class="brand-copy">{{ textFor(data.body) }}</p>

        <BaseButton :to="buildPath('brand.html')" variant="secondary" class="brand-button">
          {{ textFor(data.cta) }}
        </BaseButton>
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
const sectionRef = useSectionReveal({ y: 30, duration: 0.92 })
</script>

<style scoped>
.brand-section {
  background: #fff;
}

.brand-stage {
  position: relative;
  overflow: hidden;
  min-height: 740px;
}

.brand-stage-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.1s cubic-bezier(0.22, 1, 0.36, 1);
}

.brand-stage:hover .brand-stage-image {
  transform: scale(1.02);
}

.brand-stage-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(8, 12, 18, 0.06) 0%, rgba(8, 12, 18, 0.16) 36%, rgba(8, 12, 18, 0.68) 100%),
    linear-gradient(90deg, rgba(8, 12, 18, 0.2) 0%, rgba(8, 12, 18, 0.02) 38%, rgba(8, 12, 18, 0.18) 100%);
}

.brand-stage-copy {
  position: relative;
  z-index: 1;
  min-height: 740px;
  display: grid;
  align-content: end;
  justify-items: center;
  text-align: center;
  padding: 132px 24px 88px;
  color: #fff;
}

.brand-title {
  margin: 0;
  max-width: 980px;
  font-size: clamp(2.8rem, 5.3vw, 5.1rem);
  line-height: 0.98;
  letter-spacing: -0.04em;
}

.brand-copy {
  margin: 12px 0 0;
  max-width: 700px;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.72;
  font-size: 1rem;
}

.brand-button {
  margin-top: 22px;
}

.brand-button :deep(.base-button.secondary) {
  min-width: 168px;
  min-height: 44px;
  border-radius: 0;
  border-color: rgba(255, 255, 255, 0.82);
  background: rgba(255, 255, 255, 0.02);
  color: #fff;
}

.brand-button :deep(.base-button.secondary:hover) {
  background: rgba(255, 255, 255, 0.12);
}

@media (max-width: 900px) {
  .brand-stage,
  .brand-stage-copy {
    min-height: 520px;
  }

  .brand-stage-copy {
    align-content: end;
    padding: 90px 20px 44px;
  }

  .brand-copy {
    font-size: 0.95rem;
  }
}
</style>
