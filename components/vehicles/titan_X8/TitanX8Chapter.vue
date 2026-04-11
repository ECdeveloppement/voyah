<template>
  <div class="titan-x8-chapter" :id="chapter.id" ref="chapterRef">
    <div class="titan-x8-pin-wrapper" ref="pinRef">
      <div class="titan-x8-chapter-media">
        <template v-if="chapter.videos && chapter.videos.length > 0">
          <video class="titan-x8-media-item" :src="chapter.videos[0]" autoplay muted loop playsinline></video>
        </template>
        <template v-else>
          <img ref="bgImgRef" class="titan-x8-media-item" :src="chapter.images[0]" :alt="`${chapter.id} view`" />
        </template>
      </div>
      <div class="titan-x8-chapter-overlay" />
      
      <div class="titan-x8-chapter-content">
        <div class="container h-full">
          <div class="titan-x8-chapter-text" ref="textRef">
            <p class="titan-x8-kicker">{{ $t(`pages.titan_X8.sections.${chapter.id}.kicker`) }}</p>
            <h2>{{ $t(`pages.titan_X8.sections.${chapter.id}.title`) }}</h2>
            <div class="titan-x8-line"></div>
            <p>{{ $t(`pages.titan_X8.sections.${chapter.id}.summary`) }}</p>
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

let stMain: any = null

onMounted(async () => {
  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  if (!chapterRef.value || !pinRef.value) return

  // Pin section to create narrative depth
  stMain = ScrollTrigger.create({
    trigger: chapterRef.value,
    start: 'top top',
    end: '+=150%',
    pin: pinRef.value,
    scrub: 1
  })

  // Cinematic Parallax
  if (bgImgRef.value) {
    gsap.fromTo(
      bgImgRef.value,
      { scale: 1.0 },
      {
        scale: 1.1,
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

  // Text Entrance
  if (textRef.value) {
    gsap.fromTo(
      textRef.value,
      { opacity: 0, y: 60 },
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
})

onUnmounted(() => {
  if (stMain) stMain.kill()
  const { ScrollTrigger } = require('gsap/ScrollTrigger')
  ScrollTrigger.getAll().forEach((t: any) => t.kill())
})
</script>

<style scoped>
.titan-x8-chapter {
  position: relative;
  height: 250vh; /* gives room for pinning */
  background: #000;
}

.titan-x8-pin-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.titan-x8-chapter-media {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.titan-x8-media-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.titan-x8-chapter-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%);
  pointer-events: none;
}

.titan-x8-chapter-content {
  position: absolute;
  inset: 0;
  z-index: 2;
  height: 100%;
}

.h-full {
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding-bottom: 12vh;
}

.titan-x8-chapter-text {
  max-width: 600px;
  color: #fff;
}

.titan-x8-kicker {
  font-size: 0.9rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  color: #a8b4c5;
  margin-bottom: 1rem;
}

h2 {
  font-size: clamp(2.2rem, 4vw, 3.5rem);
  line-height: 1.1;
  font-weight: 300;
  margin: 0 0 1.5rem 0;
}

.titan-x8-line {
  width: 40px;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  margin-bottom: 1.5rem;
}

p:not(.titan-x8-kicker) {
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
  margin: 0;
}

/* RTL Support */
[dir="rtl"] .titan-x8-kicker {
  letter-spacing: 0;
}
</style>
