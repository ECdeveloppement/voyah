<template>
  <section
    ref="sectionRef"
    :id="section.id"
    :class="[
      'model-media-section',
      `model-media-section--${section.kind}`,
      `model-media-section--${modelSlug.replace('.html', '')}`,
      { reverse: index % 2 === 1 }
    ]"
  >
    <div v-if="section.kind === 'banner'" class="model-banner" :style="bannerStyle" data-parallax>
      <div class="model-banner-overlay" />
      <div class="container model-banner-inner" data-reveal>
        <h2 class="model-banner-title">{{ section.title }}</h2>
        <p v-if="section.summary" class="model-banner-subtitle">{{ section.summary }}</p>
      </div>
    </div>

    <div v-else class="container model-media-content">
      <div class="model-media-head" data-reveal>
        <p v-if="section.kicker" class="model-media-kicker">{{ section.kicker }}</p>
        <h2 class="model-media-title">{{ section.title }}</h2>
        <p v-if="section.summary" class="model-media-summary">{{ section.summary }}</p>
      </div>

      <div v-if="section.kind === 'carousel'" class="model-carousel-wrap" data-reveal>
        <div class="model-carousel-stage">
          <article v-if="activeCarouselSlide" class="model-carousel-card active model-carousel-card--featured">
            <div class="model-carousel-media" data-parallax>
              <video
                v-if="activeCarouselSlide.video"
                :poster="activeCarouselSlide.image"
                autoplay
                muted
                loop
                playsinline
                preload="metadata"
              >
                <source :src="activeCarouselSlide.video" type="video/mp4" />
              </video>
              <img v-else :src="activeCarouselSlide.image" :alt="activeCarouselSlide.title" draggable="false" />
            </div>
            <div class="model-carousel-copy">
              <p class="model-carousel-copy-title">{{ activeCarouselSlide.title }}</p>
              <p class="model-carousel-copy-text">{{ activeCarouselSlide.summary }}</p>
            </div>
          </article>

          <div class="model-carousel-rail">
            <button
              v-for="(slide, slideIndex) in carouselSlides"
              :key="`${section.id}-${slideIndex}-${slide.title}`"
              type="button"
              :class="['model-carousel-card', 'model-carousel-card--rail', { active: activeSlide === slideIndex }]"
              @click="setSlide(slideIndex)"
            >
              <div class="model-carousel-rail-media">
                <img :src="slide.image" :alt="slide.title" draggable="false" />
              </div>
              <div class="model-carousel-rail-copy">
                <p class="model-carousel-rail-title">{{ slide.title }}</p>
                <p class="model-carousel-rail-text">{{ slide.summary }}</p>
              </div>
            </button>
          </div>
        </div>

        <div class="model-carousel-pagination" aria-hidden="true">
          <button
            v-for="(slide, slideIndex) in carouselSlides"
            :key="`${section.id}-bullet-${slideIndex}`"
            type="button"
            :class="['model-carousel-bullet', { active: activeSlide === slideIndex }]"
            @click="setSlide(slideIndex)"
          />
        </div>

        <div class="model-carousel-drawer">
          <div class="model-carousel-list">
            <button
              v-for="(slide, slideIndex) in carouselSlides"
              :key="`${section.id}-drawer-${slideIndex}`"
              type="button"
              :class="['model-carousel-item', { active: activeSlide === slideIndex }]"
              @click="setSlide(slideIndex)"
            >
              <p class="model-carousel-item-title">{{ slide.title }}</p>
            </button>
          </div>
          <p class="model-carousel-drawer-text">{{ carouselSlides[activeSlide]?.summary }}</p>
        </div>
      </div>

      <div v-else class="model-image-block" data-reveal>
        <div class="model-image-frame" data-parallax>
          <video
            v-if="section.videos?.length"
            :poster="section.image ?? section.images[0] ?? ''"
            autoplay
            muted
            loop
            playsinline
            preload="metadata"
          >
            <source :src="section.videos[0]" type="video/mp4" />
          </video>
          <img v-else :src="section.image ?? section.images[0] ?? ''" :alt="section.title" draggable="false" />
        </div>

        <div class="model-detail-grid">
          <article v-for="(detail, detailIndex) in details" :key="`${section.id}-detail-${detailIndex}`" class="model-detail-card">
            <p class="model-detail-title">{{ detail.title }}</p>
            <p class="model-detail-summary">{{ detail.summary }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

type SectionKind = 'image' | 'carousel' | 'banner'

type LocalizedText = { en: string; fr: string; ar: string }

type StoryDetail = {
  title: string
  summary: string
}

type CarouselSlide = {
  image: string
  title: string
  summary: string
  video?: string
}

const props = defineProps<{
  index: number
  modelSlug: string
  section: {
    id: string
    kind: SectionKind
    kicker?: string
    title: string
    summary?: string
    image?: string
    images: string[]
    videos?: string[]
    details?: StoryDetail[]
    slides?: CarouselSlide[]
  }
}>()

const activeSlide = ref(0)
const sectionRef = ref<HTMLElement | null>(null)
let timer: ReturnType<typeof setInterval> | null = null
const hasMounted = ref(false)
const triggers: ScrollTrigger[] = []

const carouselSlides = computed<CarouselSlide[]>(() => {
  if (props.section.slides?.length) {
    return props.section.slides
  }

  const images = props.section.images.length ? props.section.images : [props.section.image ?? '']
  const baseTitle = props.section.title
  const baseSummary = props.section.summary ?? ''

  return images.map((image, slideIndex) => ({
    image,
    video: slideIndex === 0 ? props.section.videos?.[0] : undefined,
    title: props.section.details?.[slideIndex]?.title ?? baseTitle,
    summary: props.section.details?.[slideIndex]?.summary ?? baseSummary
  }))
})

const details = computed<StoryDetail[]>(() => {
  if (props.section.details?.length) {
    return props.section.details
  }

  return carouselSlides.value.slice(0, 3).map((slide: CarouselSlide) => ({
    title: slide.title,
    summary: slide.summary
  }))
})

const activeCarouselSlide = computed(() => carouselSlides.value[activeSlide.value] ?? carouselSlides.value[0])

const bannerStyle = computed(() => ({
  backgroundImage: `linear-gradient(180deg, rgba(8, 12, 16, 0.12), rgba(8, 12, 16, 0.72)), url(${props.section.image ?? props.section.images[0] ?? ''})`
}))

const setSlide = (index: number) => {
  if (!carouselSlides.value.length) return
  activeSlide.value = index % carouselSlides.value.length
}

const syncCarouselTimer = () => {
  activeSlide.value = 0

  if (timer) {
    clearInterval(timer)
    timer = null
  }

  if (!hasMounted.value || carouselSlides.value.length <= 1) {
    return
  }

  timer = setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % carouselSlides.value.length
  }, 3200)
}

onMounted(() => {
  hasMounted.value = true
  syncCarouselTimer()

  if (!sectionRef.value) {
    return
  }

  gsap.registerPlugin(ScrollTrigger)

  const revealTargets = sectionRef.value.querySelectorAll<HTMLElement>('[data-reveal]')
  revealTargets.forEach((target: HTMLElement) => {
    const isImage = target.classList.contains('model-image-block') || target.classList.contains('model-banner')
    
    gsap.fromTo(
      target,
      { 
        autoAlpha: 0.01, 
        y: isImage ? 0 : 40,
        scale: isImage ? 0.96 : 1
      },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: isImage ? 1.2 : 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: target,
          start: 'top 92%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Stagger children if it's the head section
    if (target.classList.contains('model-media-head')) {
      const children = target.children
      gsap.fromTo(
        children,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: target,
            start: 'top 88%'
          }
        }
      )
    }
  })

  const parallaxTargets = sectionRef.value.querySelectorAll<HTMLElement>('[data-parallax]')
  parallaxTargets.forEach((target: HTMLElement) => {
    gsap.fromTo(
      target,
      { yPercent: 5 },
      {
        yPercent: -5,
        ease: 'none',
        scrollTrigger: {
          trigger: target,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.45
        }
      }
    )
  })

  ScrollTrigger.getAll().forEach((trigger) => {
    const triggerElement = trigger.vars.trigger
    if (triggerElement instanceof HTMLElement && sectionRef.value?.contains(triggerElement)) {
      triggers.push(trigger)
    }
  })
})

watch(
  () => carouselSlides.value.length,
  () => {
    syncCarouselTimer()
  }
)

onBeforeUnmount(() => {
  if (timer) {
    clearInterval(timer)
  }
  triggers.forEach((trigger) => trigger.kill())
})
</script>

<style scoped>
.model-media-section {
  padding: 88px 0 78px;
  background: #fff;
}

.model-media-content {
  display: grid;
  gap: 24px;
}

.model-media-head {
  display: grid;
  gap: 10px;
  max-width: 920px;
}

.model-media-kicker {
  margin: 0;
  color: #A68B5B;
  font-size: 0.82rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.model-media-title {
  margin: 0;
  color: #101720;
  font-size: clamp(1.85rem, 3.3vw, 3.6rem);
  line-height: 1.02;
}

.model-media-summary {
  margin: 0;
  max-width: 720px;
  color: #55626f;
  line-height: 1.78;
}

.model-image-block {
  display: grid;
  gap: 14px;
}

.model-image-frame {
  overflow: hidden;
  border: 1px solid rgba(16, 23, 32, 0.08);
  background: #eff2f4;
  aspect-ratio: 16 / 9;
}

.model-image-frame img,
.model-image-frame video {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
}

.model-image-frame:hover img,
.model-image-frame:hover video {
  transform: scale(1.02);
}

.model-detail-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.model-detail-card {
  min-height: 146px;
  padding: 20px 18px;
  border-top: 1px solid rgba(16, 23, 32, 0.08);
  background: linear-gradient(180deg, rgba(247, 244, 239, 0.4), rgba(255, 255, 255, 0.96));
}

.model-detail-title {
  margin: 0;
  color: #101720;
  font-size: 0.98rem;
  font-weight: 600;
  line-height: 1.35;
}

.model-detail-summary {
  margin: 10px 0 0;
  color: #55626f;
  line-height: 1.68;
}

.model-carousel-wrap {
  display: grid;
  gap: 14px;
}

.model-carousel-stage {
  display: grid;
  grid-template-columns: minmax(0, 1.58fr) minmax(280px, 0.72fr);
  gap: 14px;
  align-items: stretch;
}

.model-carousel-card {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(16, 23, 32, 0.08);
  background: #0f151c;
  opacity: 0.42;
  transform: scale(0.985);
  transition:
    opacity 0.42s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.42s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.42s cubic-bezier(0.22, 1, 0.36, 1);
}

.model-carousel-card.active {
  opacity: 1;
  transform: scale(1);
  box-shadow: 0 18px 44px -28px rgba(16, 23, 32, 0.45);
}

.model-carousel-card--featured {
  min-height: 100%;
}

.model-carousel-rail {
  display: grid;
  gap: 10px;
  align-content: stretch;
}

.model-carousel-card--rail {
  display: grid;
  grid-template-columns: 104px minmax(0, 1fr);
  align-items: stretch;
  padding: 0;
  text-align: left;
}

.model-carousel-rail-media {
  overflow: hidden;
  min-height: 100%;
}

.model-carousel-rail-media img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.model-carousel-rail-copy {
  display: grid;
  align-content: center;
  gap: 8px;
  padding: 14px 14px 14px 16px;
  background: linear-gradient(180deg, rgba(8, 12, 16, 0.74), rgba(8, 12, 16, 0.92));
}

.model-carousel-rail-title {
  margin: 0;
  color: #fff;
  font-size: 0.94rem;
  font-weight: 600;
  line-height: 1.35;
}

.model-carousel-rail-text {
  margin: 0;
  color: rgba(246, 248, 250, 0.76);
  font-size: 0.84rem;
  line-height: 1.55;
}

.model-carousel-media {
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.model-carousel-media img,
.model-carousel-media video {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.72s cubic-bezier(0.22, 1, 0.36, 1);
}

.model-carousel-card:hover .model-carousel-media img,
.model-carousel-card:hover .model-carousel-media video {
  transform: scale(1.04);
}

.model-carousel-copy {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 16px 16px 15px;
  background: linear-gradient(180deg, rgba(8, 12, 16, 0.08), rgba(8, 12, 16, 0.82));
}

.model-carousel-copy-title {
  margin: 0;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.35;
}

.model-carousel-copy-text {
  margin: 8px 0 0;
  color: rgba(246, 248, 250, 0.82);
  line-height: 1.6;
}

.model-carousel-pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.model-carousel-bullet {
  width: 10px;
  height: 10px;
  padding: 0;
  border-radius: 999px;
  border: 0;
  background: rgba(16, 23, 32, 0.16);
  transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.28s cubic-bezier(0.22, 1, 0.36, 1);
}

.model-carousel-bullet.active {
  transform: scale(1.18);
  background: #b31d22;
}

.model-carousel-drawer {
  display: grid;
  gap: 14px;
  padding-top: 6px;
}

.model-carousel-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.model-carousel-item {
  padding: 11px 14px;
  border: 1px solid rgba(16, 23, 32, 0.08);
  background: rgba(255, 255, 255, 0.94);
  color: #33404d;
  text-align: left;
  transition:
    border-color 0.32s cubic-bezier(0.22, 1, 0.36, 1),
    color 0.32s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.32s cubic-bezier(0.22, 1, 0.36, 1),
    background-color 0.32s cubic-bezier(0.22, 1, 0.36, 1);
}

.model-carousel-item.active {
  border-color: rgba(179, 29, 34, 0.28);
  color: #101720;
  background: rgba(179, 29, 34, 0.04);
  transform: translateY(-1px);
}

.model-carousel-item-title {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.35;
}

.model-carousel-drawer-text {
  margin: 0;
  color: #55626f;
  line-height: 1.8;
}

:global(.is-rtl) .model-media-head,
:global(.is-rtl) .model-carousel-rail-copy,
:global(.is-rtl) .model-carousel-copy,
:global(.is-rtl) .model-detail-card,
:global(.is-rtl) .model-banner-inner {
  text-align: right;
}

.model-banner {
  position: relative;
  min-height: 400px;
  background: center / cover no-repeat;
}

.model-banner-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(5, 8, 12, 0.06), rgba(5, 8, 12, 0.72)),
    linear-gradient(90deg, rgba(5, 8, 12, 0.68), rgba(5, 8, 12, 0.18) 50%, rgba(5, 8, 12, 0.56));
}

.model-banner-inner {
  position: relative;
  z-index: 1;
  min-height: 400px;
  display: grid;
  align-content: end;
  gap: 10px;
  padding-top: 72px;
  padding-bottom: 50px;
}

.model-banner-title {
  margin: 0;
  max-width: 900px;
  color: #fff;
  font-size: clamp(1.9rem, 4.1vw, 4rem);
  line-height: 1;
}

.model-banner-subtitle {
  margin: 0;
  max-width: 700px;
  color: rgba(242, 246, 249, 0.84);
  line-height: 1.68;
}

@media (max-width: 1100px) {
  .model-detail-grid,
  .model-carousel-stage {
    grid-template-columns: minmax(0, 1fr);
  }

  .model-carousel-rail {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .model-carousel-card {
    opacity: 1;
    transform: none;
  }
}

@media (max-width: 768px) {
  .model-media-section {
    padding: 54px 0 48px;
  }

  .model-banner,
  .model-banner-inner {
    min-height: 300px;
  }

  .model-detail-card {
    min-height: 0;
    padding: 20px 18px;
  }

  .model-carousel-card--rail {
    grid-template-columns: 88px minmax(0, 1fr);
  }

  .model-carousel-rail {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
