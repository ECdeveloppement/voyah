<template>
  <div class="passion-chapter" :id="chapter.id" ref="chapterRef">
    <div class="passion-pin-wrapper" ref="pinRef">
      
      <!-- Primary Background Image -->
      <div class="passion-bg-wrapper">
        <template v-if="chapter.videos && chapter.videos.length > 0">
          <video class="passion-bg-item" :src="chapter.videos[0]" autoplay muted loop playsinline></video>
        </template>
        <template v-else>
          <img ref="bgImgRef" class="passion-bg-item" :src="chapter.images[0]" :alt="`${chapter.id} background`" />
        </template>
        <div class="passion-bg-overlay" />
      </div>

      <!-- High Density Foreground Content -->
      <div class="passion-content-layer">
        <div class="container h-full flex">
          
          <!-- Sticky Text Block -->
          <div class="passion-text-panel" ref="textRef">
            <p class="passion-kicker">{{ $t(`pages.passion.sections.${chapter.id.replace('-', '_')}.kicker`) }}</p>
            <h2 class="passion-title">{{ $t(`pages.passion.sections.${chapter.id.replace('-', '_')}.title`) }}</h2>
            <div class="passion-divider"></div>
            <p class="passion-summary">{{ $t(`pages.passion.sections.${chapter.id.replace('-', '_')}.summary`) }}</p>
          </div>

          <!-- Scrolling High-Density Array -->
          <div v-if="chapter.images.length > 1" class="passion-scroll-track" ref="trackRef">
            <div class="passion-scroll-inner">
              <template v-for="(img, i) in chapter.images.slice(1)" :key="i">
                <div class="passion-card">
                  <img :src="img" :alt="`Detail ${i}`" loading="lazy" />
                </div>
              </template>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps<{
  index: number
  chapter: {
    id: string
    images: string[]
    videos?: string[]
  }
}>()

const chapterRef = ref<HTMLElement | null>(null)
const pinRef = ref<HTMLElement | null>(null)
const bgImgRef = ref<HTMLImageElement | null>(null)
const textRef = ref<HTMLElement | null>(null)
const trackRef = ref<HTMLElement | null>(null)

let stMain: any = null

onMounted(async () => {
  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  if (!chapterRef.value || !pinRef.value) return

  // Pin section for horizontal scroll sync
  stMain = ScrollTrigger.create({
    trigger: chapterRef.value,
    start: 'top top',
    end: '+=300%',
    pin: pinRef.value,
    scrub: 1
  })

  // Horizontal scroll of high-density cards
  if (trackRef.value) {
    const inner = trackRef.value.querySelector('.passion-scroll-inner')
    gsap.to(inner, {
      xPercent: -100,
      x: () => trackRef.value!.clientWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: chapterRef.value,
        start: 'top top',
        end: '+=300%',
        scrub: 1
      }
    })
  }

  // Entrance text animation
  if (textRef.value) {
    gsap.fromTo(
      textRef.value,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.05,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: chapterRef.value,
          start: 'top center',
          toggleActions: 'play reverse play reverse'
        }
      }
    )
  }

  // Background slow zoom
  if (bgImgRef.value) {
    gsap.fromTo(
      bgImgRef.value,
      { scale: 1.0 },
      {
        scale: 1.2,
        ease: 'none',
        scrollTrigger: {
          trigger: chapterRef.value,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    )
  }
})

onUnmounted(() => {
  if (stMain) stMain.kill()
  const { ScrollTrigger } = require('gsap/ScrollTrigger')
  ScrollTrigger.getAll().forEach((t: any) => t.kill())
})
</script>

<style scoped>
.passion-chapter {
  position: relative;
  height: 400vh; /* gives room for horizontal scroll */
  background: #111;
}

.passion-pin-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.passion-bg-wrapper {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.passion-bg-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.passion-bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.85) 100%);
  z-index: 1;
}

.passion-content-layer {
  position: relative;
  z-index: 2;
  height: 100%;
  padding-top: 20vh;
}

.flex {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.h-full {
  height: 100%;
}

.passion-text-panel {
  max-width: 800px;
  color: #fff;
  margin-bottom: 6vh;
}

.passion-kicker {
  font-size: 0.85rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  color: rgba(255,255,255,0.6);
  margin-bottom: 1rem;
}

.passion-title {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 300;
  line-height: 1.1;
  margin: 0 0 1.5rem 0;
  letter-spacing: -0.02em;
}

.passion-divider {
  width: 40px;
  height: 2px;
  background: #fff;
  margin-bottom: 1.5rem;
}

.passion-summary {
  font-size: 1.15rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
  max-width: 600px;
}

.passion-scroll-track {
  width: 100%;
  overflow: visible;
  padding-bottom: 5vh;
}

.passion-scroll-inner {
  display: flex;
  gap: 30px;
  width: max-content;
  padding-right: 20vw;
}

.passion-card {
  width: 400px;
  height: 280px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);
  flex-shrink: 0;
}

.passion-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.passion-card:hover img {
  transform: scale(1.05);
}

/* RTL Support */
[dir="rtl"] .passion-scroll-inner {
  padding-right: 0;
  padding-left: 20vw;
  flex-direction: row-reverse;
}

[dir="rtl"] .passion-kicker {
  letter-spacing: 0;
}

@media (max-width: 768px) {
  .passion-content-layer {
    padding-top: 15vh;
  }
  .passion-card {
    width: 280px;
    height: 200px;
  }
}
</style>
