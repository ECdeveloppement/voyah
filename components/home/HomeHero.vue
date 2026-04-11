<template>
  <section
    ref="heroRef"
    class="home-hero"
    :style="{
      '--hero-parallax-y': `${parallaxY}px`,
      '--hero-pointer-x': `${pointerX}px`,
      '--hero-pointer-y': `${pointerY}px`
    }"
    @pointermove="onPointerMove"
    @pointerleave="onPointerLeave"
  >
    <article
      v-for="(slide, index) in slides"
      :key="`${slide.primarySlug}-${index}`"
      :class="['hero-slide', { active: activeIndex === index }]"
    >
      <div class="hero-media">
        <img :src="slide.image" :alt="textFor(slide.title) || 'Voyah'" class="hero-poster" :loading="activeIndex === index ? 'eager' : 'lazy'" decoding="async" />
        <video
          v-if="slide.video"
          :ref="(el) => setVideoRef(el, index)"
          class="hero-video"
          :poster="slide.image"
          muted
          playsinline
          preload="metadata"
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
          <button type="button" class="hero-arrow" aria-label="Previous slide" @click="stepSlide(-1)">
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

          <div class="hero-progress" aria-hidden="true">
            <span class="hero-progress__bar" :style="{ transform: `scaleX(${progressScale})` }" />
          </div>

          <button type="button" class="hero-arrow" aria-label="Next slide" @click="stepSlide(1)">
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
import type { ComponentPublicInstance, WatchHandle } from 'vue'
import { gsap } from 'gsap'
import type { HomeData } from '~/data/site'
import BaseButton from '~/components/common/BaseButton.vue'
import { useSiteContent } from '~/composables/useSiteContent'

const props = defineProps<{
  slides: HomeData['slides']
}>()

const { buildPath, textFor } = useSiteContent()

const activeIndex = ref(2)
const videoEls = ref<(HTMLVideoElement | null)[]>([])
let autoplayDelay: gsap.core.Tween | null = null
let progressTween: gsap.core.Tween | null = null
const progressScale = ref(0)
const heroRef = ref<HTMLElement | null>(null)
const pointerX = ref(0)
const pointerY = ref(0)
const parallaxY = ref(0)

const heroTitle = (slide: HomeData['slides'][number]) => textFor(slide.title).trim()
const heroDescription = (slide: HomeData['slides'][number]) => textFor(slide.description).trim()

const setVideoRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  videoEls.value[index] = el instanceof HTMLVideoElement ? el : null
}

const clearAutoplay = () => {
  autoplayDelay?.kill()
  autoplayDelay = null
  progressTween?.kill()
  progressTween = null
}

const scheduleAdvance = (delaySeconds: number) => {
  clearAutoplay()
  progressScale.value = 0
  progressTween = gsap.to(progressScale, {
    value: 1,
    duration: delaySeconds,
    ease: 'none'
  })
  autoplayDelay = gsap.delayedCall(delaySeconds, () => {
    activeIndex.value = (activeIndex.value + 1) % props.slides.length
  })
}

const syncActiveMedia = async () => {
  for (const [index, video] of videoEls.value.entries()) {
    if (!video) continue

    if (index === activeIndex.value) {
      video.currentTime = 0
      video.muted = true
      try {
        await video.play()
      } catch {
        // Ignore autoplay failures and fall back to poster timing.
      }
    } else {
      video.pause()
      video.currentTime = 0
    }
  }

  // Trigger Stagger Animation for typography
  if (heroRef.value) {
    const activeElements = heroRef.value.querySelectorAll(`.hero-slide:nth-child(${activeIndex.value + 1}) .hero-copy > *`)
    gsap.killTweensOf(activeElements)
    gsap.fromTo(
      activeElements,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out', delay: 0.3 }
    )
  }

  const activeSlide = props.slides[activeIndex.value]
  const activeVideo = videoEls.value[activeIndex.value]
  const duration = activeSlide?.video && activeVideo && Number.isFinite(activeVideo.duration) && activeVideo.duration > 0
    ? Math.max(activeVideo.duration, 6.8)
    : activeSlide?.video
      ? 8.4
      : 7.6

  scheduleAdvance(duration)
}

const setSlide = (index: number) => {
  activeIndex.value = index
}

const stepSlide = (direction: number) => {
  activeIndex.value = (activeIndex.value + direction + props.slides.length) % props.slides.length
}

const onPointerMove = (event: PointerEvent) => {
  const element = heroRef.value
  if (!element) return
  const rect = element.getBoundingClientRect()
  const x = (event.clientX - rect.left) / rect.width
  const y = (event.clientY - rect.top) / rect.height
  pointerX.value = (x - 0.5) * 18
  pointerY.value = (y - 0.5) * 12
}

const onPointerLeave = () => {
  pointerX.value = 0
  pointerY.value = 0
}

const updateParallax = () => {
  parallaxY.value = Math.min(window.scrollY * 0.14, 34)
}

let stopIndexWatch: WatchHandle | null = null

onMounted(() => {
  stopIndexWatch = watch(activeIndex, () => {
    nextTick(() => {
      void syncActiveMedia()
    })
  })

  nextTick(() => {
    void syncActiveMedia()
  })

  updateParallax()
  window.addEventListener('scroll', updateParallax, { passive: true })
})

onBeforeUnmount(() => {
  stopIndexWatch?.()
  clearAutoplay()
  videoEls.value.forEach((video) => video?.pause())
  window.removeEventListener('scroll', updateParallax)
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
  transition: opacity 0.72s cubic-bezier(0.33, 1, 0.68, 1);
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
  transform: translate3d(calc(var(--hero-pointer-x, 0px) * -0.4), calc(var(--hero-parallax-y, 0px) - (var(--hero-pointer-y, 0px) * 0.25)), 0) scale(1.03);
  transition:
    transform 1.05s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.56s cubic-bezier(0.33, 1, 0.68, 1) 0.18s;
  will-change: transform;
}

.hero-poster {
  z-index: 0;
}

.hero-video {
  z-index: 1;
  opacity: 0;
  transition: opacity 0.56s cubic-bezier(0.33, 1, 0.68, 1) 0.18s;
}

.hero-slide.active .hero-video {
  opacity: 1;
}

.hero-slide.active .hero-poster,
.hero-slide.active .hero-video {
  transform: translate3d(calc(var(--hero-pointer-x, 0px) * -0.55), calc(var(--hero-parallax-y, 0px) - (var(--hero-pointer-y, 0px) * 0.3)), 0) scale(1.06);
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
  text-align: center;
}

/* Stagger initial state handled directly by GSAP */
.hero-slide .hero-copy > * {
  opacity: 0;
  transform: translateY(30px);
}

.hero-slide.active .hero-copy {
  opacity: 1;
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
  gap: 18px;
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.62s cubic-bezier(0.33, 1, 0.68, 1) 0.28s,
    transform 0.62s cubic-bezier(0.33, 1, 0.68, 1) 0.28s;
}

.hero-slide.active .hero-controls {
  opacity: 1;
  transform: translateY(0);
}

.hero-dots {
  display: flex;
  align-items: center;
  gap: 10px;
}

.hero-progress {
  width: 92px;
  height: 2px;
  background: rgba(255, 255, 255, 0.24);
  overflow: hidden;
}

.hero-progress__bar {
  display: block;
  width: 100%;
  height: 100%;
  background: #fff;
  transform-origin: left center;
}

html[dir="rtl"] .hero-progress__bar {
  transform-origin: right center;
}

.hero-arrow {
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.02);
  color: #fff;
  transition:
    background-color 0.3s cubic-bezier(0, 0, 0.58, 1),
    border-color 0.3s cubic-bezier(0, 0, 0.58, 1),
    opacity 0.3s cubic-bezier(0, 0, 0.58, 1);
}

.hero-arrow:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.28);
}

.hero-arrow svg {
  width: 18px;
  height: 18px;
}

.hero-dot {
  width: 32px;
  height: 2px;
  border: 0;
  background: rgba(255, 255, 255, 0.26);
  cursor: pointer;
  transition:
    background-color 0.3s cubic-bezier(0, 0, 0.58, 1),
    transform 0.3s cubic-bezier(0, 0, 0.58, 1);
}

.hero-dot.active {
  background: #fff;
  transform: scaleX(1.12);
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
