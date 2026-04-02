<template>
  <section class="home-hero">
    <article
      v-for="(slide, index) in slides"
      :key="`${slide.primarySlug}-${index}`"
      :class="['hero-slide', { active: activeIndex === index }]"
    >
      <div class="hero-media">
        <img :src="slide.image" :alt="textFor(slide.title) || 'Voyah'" class="hero-poster" />
        <video
          v-if="slide.video"
          class="hero-video"
          :poster="slide.image"
          autoplay
          muted
          loop
          playsinline
          preload="auto"
        >
          <source :src="slide.video" type="video/mp4" />
        </video>
      </div>

      <div class="hero-overlay" />

      <div class="container hero-content">
        <div
          :class="[
            'hero-copy',
            {
              'hero-copy--logo': slide.logo,
              'hero-copy--logo-only': slide.logo && !heroTitle(slide)
            }
          ]"
        >
          <img v-if="slide.logo" :src="slide.logo" :alt="textFor(slide.title) || 'Voyah'" class="hero-logo" />
          <h1 v-if="heroTitle(slide)">{{ heroTitle(slide) }}</h1>
          <p v-if="heroDescription(slide)">{{ heroDescription(slide) }}</p>

          <div
            v-if="textFor(slide.primaryLabel).trim() || textFor(slide.secondaryLabel).trim()"
            class="button-row"
          >
            <BaseButton
              v-if="textFor(slide.primaryLabel).trim()"
              :to="buildPath(slide.primarySlug)"
              variant="secondary"
            >
              {{ textFor(slide.primaryLabel) }}
            </BaseButton>
            <BaseButton
              v-if="slide.secondarySlug && textFor(slide.secondaryLabel).trim()"
              :to="buildPath(slide.secondarySlug)"
              variant="primary"
            >
              {{ textFor(slide.secondaryLabel) }}
            </BaseButton>
          </div>
        </div>

        <div class="hero-controls">
          <button type="button" class="hero-arrow mobile-only" aria-label="Previous slide" @click="stepSlide(-1)">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M14.5 6.5L9 12L14.5 17.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>

          <div class="hero-dots">
            <button
              v-for="(heroSlide, dotIndex) in slides"
              :key="`${heroSlide.primarySlug}-dot-${dotIndex}`"
              type="button"
              :class="['hero-dot', { active: activeIndex === dotIndex }]"
              @click="setSlide(dotIndex)"
            />
          </div>

          <button type="button" class="hero-arrow mobile-only" aria-label="Next slide" @click="stepSlide(1)">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9.5 6.5L15 12L9.5 17.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </article>
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

const activeIndex = ref(2)
let timer: ReturnType<typeof setInterval> | null = null

const heroTitle = (slide: HomeData['slides'][number]) => textFor(slide.title).trim()
const heroDescription = (slide: HomeData['slides'][number]) => textFor(slide.description).trim()

const startAutoplay = () => {
  if (timer) {
    clearInterval(timer)
  }

  timer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % props.slides.length
  }, 9000)
}

const setSlide = (index: number) => {
  activeIndex.value = index
  startAutoplay()
}

const stepSlide = (direction: number) => {
  activeIndex.value = (activeIndex.value + direction + props.slides.length) % props.slides.length
  startAutoplay()
}

onMounted(() => {
  startAutoplay()
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
  min-height: 100vh;
  overflow: hidden;
  background: #04070b;
}

.hero-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  pointer-events: none;
  transition: opacity 1s ease;
}

.hero-slide.active {
  opacity: 1;
  pointer-events: auto;
  z-index: 1;
}

.hero-media,
.hero-poster,
.hero-video {
  width: 100%;
  height: 100%;
}

.hero-media {
  position: absolute;
  inset: 0;
}

.hero-poster,
.hero-video {
  position: absolute;
  inset: 0;
  object-fit: cover;
}

.hero-poster {
  z-index: 0;
}

.hero-video {
  z-index: 1;
  opacity: 0;
  transition: opacity 0.8s ease 0.35s;
}

.hero-slide.active .hero-video {
  opacity: 1;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  background:
    linear-gradient(180deg, rgba(3, 6, 10, 0.48) 0%, rgba(3, 6, 10, 0.08) 18%, rgba(3, 6, 10, 0.14) 50%, rgba(3, 6, 10, 0.8) 100%),
    linear-gradient(90deg, rgba(3, 6, 10, 0.4) 0%, rgba(3, 6, 10, 0.14) 30%, rgba(3, 6, 10, 0.06) 56%, rgba(3, 6, 10, 0.34) 100%);
}

.hero-content {
  position: relative;
  z-index: 3;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  padding-bottom: 72px;
}

.hero-copy {
  max-width: 760px;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.75s ease 0.32s, transform 0.75s ease 0.32s;
  text-align: center;
}

.hero-slide.active .hero-copy {
  opacity: 1;
  transform: translateY(0);
}

.hero-copy--logo {
  max-width: 680px;
}

.hero-copy--logo-only {
  max-width: 460px;
}

.hero-logo {
  width: min(240px, 16vw);
  margin-bottom: 10px;
  object-fit: contain;
  object-position: center bottom;
  margin-inline: auto;
}

.hero-copy--logo-only .hero-logo {
  width: min(190px, 14vw);
}

.hero-content h1 {
  margin: 0;
  color: #fff;
  font-size: clamp(2.6rem, 4.4vw, 4rem);
  line-height: 1.02;
  letter-spacing: -0.025em;
  text-wrap: balance;
}

.hero-content p {
  margin: 12px 0 0;
  max-width: 620px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  line-height: 1.45;
  margin-inline: auto;
}

.button-row {
  margin-top: 20px;
  justify-content: center;
}

.button-row :deep(.base-button) {
  min-height: 40px;
  min-width: 154px;
  padding: 0 24px;
  border-radius: 0;
  font-size: 0.76rem;
  letter-spacing: 0.02em;
  text-transform: none;
}

.button-row :deep(.base-button.secondary) {
  background: transparent;
  color: #fff;
  border-color: rgba(255, 255, 255, 0.74);
}

.button-row :deep(.base-button.secondary:hover) {
  background: rgba(255, 255, 255, 0.08);
}

.button-row :deep(.base-button.primary) {
  background: #fff;
  color: #0c0f13;
  border-color: #fff;
}

.button-row :deep(.base-button.primary:hover) {
  background: #f0f0f0;
  border-color: #f0f0f0;
}

.hero-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.75s ease 0.48s, transform 0.75s ease 0.48s;
}

.hero-slide.active .hero-controls {
  opacity: 1;
  transform: translateY(0);
}

.hero-dots {
  display: flex;
  align-items: center;
  gap: 8px;
}

.hero-arrow {
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.04);
  color: #fff;
  transition: background-color 0.22s ease, border-color 0.22s ease;
}

.hero-arrow:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.36);
}

.hero-arrow svg {
  width: 18px;
  height: 18px;
}

.hero-dot {
  width: 24px;
  height: 2px;
  border: 0;
  background: rgba(255, 255, 255, 0.26);
  cursor: pointer;
  transition: background-color 0.22s ease, transform 0.22s ease;
}

.hero-dot.active {
  background: #fff;
  transform: scaleX(1.3);
}

.mobile-only {
  display: none;
}

@media (max-width: 1024px) {
  .home-hero,
  .hero-content {
    min-height: 92vh;
  }

  .hero-content {
    padding-bottom: 44px;
    gap: 18px;
  }

  .hero-content h1 {
    font-size: clamp(2.5rem, 10vw, 3.5rem);
  }

  .hero-content p {
    font-size: 0.96rem;
    max-width: 100%;
  }

  .hero-logo {
    width: min(220px, 62vw);
  }

  .button-row :deep(.base-button) {
    min-width: 138px;
  }

  .hero-controls {
    gap: 10px;
  }

  .hero-arrow {
    width: 34px;
    height: 34px;
  }

  .hero-arrow.mobile-only {
    display: inline-flex;
  }
}
</style>
