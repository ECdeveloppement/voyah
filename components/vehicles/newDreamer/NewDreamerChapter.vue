<template>
  <div class="new-dreamer-chapter" :id="chapter.id" ref="chapterRef">
    <div class="new-dreamer-chapter-sticky">
      <div class="new-dreamer-chapter-media">
        <!-- Render Video if present, else Image -->
        <template v-if="chapter.videos && chapter.videos.length > 0">
          <video
            ref="videoRef"
            class="new-dreamer-media-item"
            :src="chapter.videos[0]"
            autoplay
            muted
            loop
            playsinline
          ></video>
        </template>
        <template v-else>
          <img
            ref="imgRef"
            class="new-dreamer-media-item"
            :src="chapter.images[0]"
            :alt="$t(`pages.new_dreamer.sections.${chapter.id.replace('-', '_')}.title`)"
          />
        </template>
      </div>
      <div class="new-dreamer-chapter-overlay" />
      
      <div class="new-dreamer-chapter-content">
        <div class="container">
          <div class="new-dreamer-chapter-text" ref="textRef">
            <p class="new-dreamer-kicker">{{ $t(`pages.new_dreamer.sections.${chapter.id.replace('-', '_')}.kicker`) }}</p>
            <h2>{{ $t(`pages.new_dreamer.sections.${chapter.id.replace('-', '_')}.title`) }}</h2>
            <p>{{ $t(`pages.new_dreamer.sections.${chapter.id.replace('-', '_')}.summary`) }}</p>
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
const imgRef = ref<HTMLImageElement | null>(null)
const textRef = ref<HTMLElement | null>(null)
let scrollTrigger: any = null

onMounted(async () => {
  // GSAP import dynamic so it works with Nuxt client/server naturally without breaking SSR
  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  if (!chapterRef.value) return

  // Create a scroll timeline for parallax and text reveals
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: chapterRef.value,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  })

  if (imgRef.value) {
    tl.fromTo(
      imgRef.value,
      { yPercent: -15, scale: 1.1 },
      { yPercent: 15, scale: 1.0, ease: 'none' },
      0
    )
  }

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
          start: 'top center+=200',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }
})

onUnmounted(() => {
  if (scrollTrigger) scrollTrigger.kill()
})
</script>

<style scoped>
.new-dreamer-chapter {
  position: relative;
  height: 150vh; /* creates scrolling room */
  background: #000;
}

.new-dreamer-chapter-sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
}

.new-dreamer-chapter-media {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.new-dreamer-media-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.new-dreamer-chapter-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.1) 100%);
  pointer-events: none;
}

.new-dreamer-chapter-content {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  padding-bottom: 12vh;
  color: #fff;
  z-index: 2;
}

.new-dreamer-chapter-text {
  max-width: 600px;
}

.new-dreamer-kicker {
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
}

h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.1;
  margin: 0 0 1rem 0;
}

p:not(.new-dreamer-kicker) {
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
}
</style>
