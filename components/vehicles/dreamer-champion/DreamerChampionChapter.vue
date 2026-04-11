<template>
  <div class="dreamer-champion-chapter" :id="chapter.id" ref="chapterRef">
    <div class="champion-pin-wrapper" ref="pinRef">
      <!-- Background Primary Image -->
      <div class="champion-bg-wrapper">
        <template v-if="chapter.videos && chapter.videos.length > 0">
          <video class="champion-bg-item" :src="chapter.videos[0]" autoplay muted loop playsinline></video>
        </template>
        <template v-else>
          <img ref="bgImgRef" class="champion-bg-item" :src="chapter.images[0]" :alt="`${chapter.id} background`" />
        </template>
        <div class="champion-bg-overlay" />
      </div>

      <!-- Foreground Content & Secondary Images -->
      <div class="champion-content-layer">
        <div class="container h-full flex">
          
          <!-- Text Panel -->
          <div class="champion-text-panel" ref="textRef">
            <p class="champion-kicker">{{ $t(`pages.dreamer_champion.sections.${chapter.id.replace('-', '_')}.kicker`) }}</p>
            <h2 class="champion-title">{{ $t(`pages.dreamer_champion.sections.${chapter.id.replace('-', '_')}.title`) }}</h2>
            <div class="champion-line"></div>
            <p class="champion-summary">{{ $t(`pages.dreamer_champion.sections.${chapter.id.replace('-', '_')}.summary`) }}</p>
          </div>

          <!-- Secondary Image Cascade -->
          <div v-if="chapter.images.length > 1" class="champion-gallery-track" ref="galleryRef">
            <template v-for="(img, i) in chapter.images.slice(1)" :key="i">
              <div class="champion-gallery-item">
                <img :src="img" :alt="`Gallery image ${i}`" />
              </div>
            </template>
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
const galleryRef = ref<HTMLElement | null>(null)

let stMain: any = null

onMounted(async () => {
  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  if (!chapterRef.value || !pinRef.value) return

  // Pin the whole section for a longer duration
  stMain = ScrollTrigger.create({
    trigger: chapterRef.value,
    start: 'top top',
    end: '+=200%',
    pin: pinRef.value,
    scrub: 1
  })

  // Entrance text animation
  if (textRef.value) {
    gsap.fromTo(
      textRef.value,
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1.4,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: chapterRef.value,
          start: 'top center',
          toggleActions: 'play reverse play reverse'
        }
      }
    )
  }

  // Parallax the background
  if (bgImgRef.value) {
    gsap.fromTo(
      bgImgRef.value,
      { scale: 1.0 },
      {
        scale: 1.15,
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

  // Scroll up the secondary gallery images
  if (galleryRef.value) {
    const items = galleryRef.value.querySelectorAll('.champion-gallery-item')
    gsap.fromTo(
      items,
      { y: '100vh', opacity: 0, scale: 0.95 },
      {
        y: '-20vh',
        opacity: 1,
        scale: 1,
        stagger: 0.3,
        ease: 'none',
        scrollTrigger: {
          trigger: chapterRef.value,
          start: 'top top',
          end: '+=200%',
          scrub: 1
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
.dreamer-champion-chapter {
  position: relative;
  height: 300vh; /* gives room for pinning */
  background: #04080e;
}

.champion-pin-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.champion-bg-wrapper {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.champion-bg-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.champion-bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(4,8,14,0.9) 0%, rgba(4,8,14,0.4) 40%, rgba(4,8,14,0.1) 100%);
  pointer-events: none;
}

.champion-content-layer {
  position: relative;
  z-index: 2;
  height: 100%;
  padding-top: 15vh;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.h-full {
  height: 100%;
}

.champion-text-panel {
  max-width: 480px;
  color: #fff;
  padding-top: 8vh;
}

.champion-kicker {
  font-size: 0.9rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #cca46c; /* champion gold accent */
  margin-bottom: 24px;
}

.champion-title {
  font-size: clamp(2.4rem, 4vw, 3.8rem);
  line-height: 1.1;
  font-weight: 300;
  margin: 0 0 24px 0;
  letter-spacing: 0.02em;
}

.champion-line {
  width: 60px;
  height: 2px;
  background: rgba(255, 255, 255, 0.2);
  margin-bottom: 32px;
}

.champion-summary {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.75);
  font-weight: 300;
}

.champion-gallery-track {
  width: 45%;
  height: 100%;
  position: relative;
}

.champion-gallery-item {
  position: absolute;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0,0,0,0.4);
}

.champion-gallery-item:nth-child(1) { top: 0%; left: 0; }
.champion-gallery-item:nth-child(2) { top: 40%; right: 10%; width: 80%; z-index: 2; }
.champion-gallery-item:nth-child(3) { top: 80%; left: 5%; width: 90%; z-index: 3; }

.champion-gallery-item img {
  width: 100%;
  height: auto;
  display: block;
}

/* RTL Support */
[dir="rtl"] .champion-bg-overlay {
  background: linear-gradient(270deg, rgba(4,8,14,0.9) 0%, rgba(4,8,14,0.4) 40%, rgba(4,8,14,0.1) 100%);
}

[dir="rtl"] .champion-kicker {
  letter-spacing: 0;
}

@media (max-width: 1024px) {
  .flex {
    flex-direction: column;
  }
  .champion-gallery-track {
    width: 100%;
    margin-top: 40px;
    height: 60vh;
  }
  .champion-bg-overlay {
    background: linear-gradient(0deg, rgba(4,8,14,0.95) 0%, rgba(4,8,14,0.7) 40%, rgba(4,8,14,0.2) 100%);
  }
}
</style>
