<template>
  <section class="home-hero">
    <article v-for="(slide, index) in slides" :key="slide.primarySlug" :class="['hero-slide', { active: activeIndex === index }]">
      <div class="hero-media">
        <video
          v-if="slide.video"
          class="hero-video"
          :poster="slide.image"
          autoplay
          muted
          loop
          playsinline
        >
          <source :src="slide.video" type="video/mp4" />
        </video>
        <img v-else :src="slide.image" :alt="textFor(slide.title)" />
      </div>

      <div class="hero-overlay" />

      <div class="container hero-content">
        <img v-if="slide.logo" :src="slide.logo" :alt="textFor(slide.title)" class="hero-logo" />
        <h1>{{ textFor(slide.title) }}</h1>
        <p>{{ textFor(slide.description) }}</p>
        <div class="button-row">
          <BaseButton :to="buildPath(slide.primarySlug)" variant="primary">
            {{ textFor(slide.primaryLabel) }}
          </BaseButton>
          <BaseButton v-if="slide.secondarySlug" :to="buildPath(slide.secondarySlug)" variant="secondary">
            {{ textFor(slide.secondaryLabel) }}
          </BaseButton>
        </div>
      </div>
    </article>

    <div class="container hero-controls">
      <button
        v-for="(slide, index) in slides"
        :key="slide.primarySlug"
        type="button"
        :class="['hero-dot', { active: activeIndex === index }]"
        @click="activeIndex = index"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { HomeData } from '~/data/site'
import BaseButton from '~/components/common/BaseButton.vue'
import { useSiteContent } from '~/composables/useSiteContent'

const props = defineProps<{
  slides: HomeData['slides']
}>()

const { buildPath, textFor } = useSiteContent()

const activeIndex = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  timer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % props.slides.length
  }, 6000)
})

onBeforeUnmount(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<style scoped>
.home-hero {
  position: relative;
  min-height: calc(100vh - 84px);
  overflow: hidden;
}

.hero-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.8s ease;
}

.hero-slide.active {
  opacity: 1;
}

.hero-media,
.hero-media img,
.hero-video {
  width: 100%;
  height: 100%;
}

.hero-media img,
.hero-video {
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 20%, rgba(197, 156, 98, 0.2), transparent 26%),
    linear-gradient(180deg, rgba(7, 10, 16, 0.24), rgba(7, 10, 16, 0.84));
}

.hero-content {
  position: relative;
  z-index: 1;
  min-height: calc(100vh - 84px);
  display: grid;
  align-content: end;
  padding-bottom: 84px;
}

.hero-logo {
  width: 220px;
  margin-bottom: 28px;
}

.hero-content h1 {
  margin: 0;
  max-width: 780px;
  font-size: clamp(2.5rem, 5vw, 5.6rem);
  line-height: 0.96;
}

.hero-content p {
  margin: 22px 0 0;
  max-width: 660px;
  color: rgba(237, 242, 247, 0.76);
  font-size: 1.05rem;
  line-height: 1.8;
}

.hero-controls {
  position: relative;
  z-index: 2;
  min-height: 84px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.hero-dot {
  width: 54px;
  height: 4px;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.28);
  cursor: pointer;
}

.hero-dot.active {
  background: var(--accent);
}

@media (max-width: 768px) {
  .home-hero,
  .hero-content {
    min-height: calc(80vh - 72px);
  }

  .hero-content {
    padding-bottom: 48px;
  }

  .hero-logo {
    width: 172px;
  }

  .hero-dot {
    width: 38px;
  }
}
</style>
