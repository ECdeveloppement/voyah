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
const sectionRef = useSectionReveal()
</script>

<style scoped>
.brand-section {
  background: #fff;
}

.brand-stage {
  position: relative;
  overflow: hidden;
  min-height: 760px;
}

.brand-stage-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  min-height: 760px;
  display: grid;
  align-content: center;
  justify-items: center;
  text-align: center;
  padding: 120px 24px 84px;
  color: #fff;
}

.brand-title {
  margin: 0;
  max-width: 980px;
  font-size: clamp(2.9rem, 5.5vw, 5.4rem);
  line-height: 0.98;
  letter-spacing: -0.04em;
}

.brand-copy {
  margin: 18px 0 0;
  max-width: 720px;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.8;
  font-size: 1.02rem;
}

.brand-button {
  margin-top: 28px;
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
