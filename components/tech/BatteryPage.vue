<template>
  <div class="tech-page tech-battery">
    <!-- Hero Section -->
    <section class="tech-hero">
      <div class="tech-hero-background">
        <video autoplay muted loop playsinline class="tech-hero-image" v-if="page.heroImage?.endsWith('.mp4')">
          <source :src="page.heroImage" type="video/mp4" />
        </video>
        <img v-else :src="page.heroImage || '/voyah-resources/tech/battery_hero.jpg'" alt="Voyah Battery Tech" class="tech-hero-image" />
        <div class="tech-hero-overlay"></div>
      </div>
      <div class="container tech-hero-content">
        <h1 class="page-title" ref="titleRef">{{ textFor(page.title) }}</h1>
        <p class="page-summary" ref="summaryRef">{{ textFor(page.summary) }}</p>
      </div>
    </section>

    <!-- Parallax Layers of Battery Assembly -->
    <section class="battery-parallax-section" ref="parallaxContainer">
      <div class="container">
        <div class="battery-intro text-center">
          <h2 class="section-title">{{ $t('domain.tech.battery.parallax_title', 'Core Energy System') }}</h2>
          <p class="section-copy">{{ $t('domain.tech.battery.parallax_body', 'Deconstructing the next-generation battery architecture. High density meets unparalleled thermal stability.') }}</p>
        </div>
      </div>

      <!-- Scroll Timeline Visualization -->
      <div class="parallax-stage" ref="parallaxStage">
        <div class="layer layer-base">
          <img src="/voyah-resources/tech/battery_layer_base.png" alt="Base Plate" />
        </div>
        <div class="layer layer-cells">
          <img src="/voyah-resources/tech/battery_layer_cells.png" alt="Cells" />
        </div>
        <div class="layer layer-cooling">
          <img src="/voyah-resources/tech/battery_layer_cooling.png" alt="Cooling Matrix" />
        </div>
        <div class="layer layer-cover">
          <img src="/voyah-resources/tech/battery_layer_cover.png" alt="Top Cover" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { InfoDefinition } from '~/data/site'
import { useSiteContent } from '~/composables/useSiteContent'

const props = defineProps<{
  page: InfoDefinition
}>()

const { textFor } = useSiteContent()
const titleRef = ref<HTMLElement | null>(null)
const summaryRef = ref<HTMLElement | null>(null)
const parallaxContainer = ref<HTMLElement | null>(null)
const parallaxStage = ref<HTMLElement | null>(null)

let ctx: gsap.Context

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  
  nextTick(() => {
    ctx = gsap.context(() => {
      // Hero Entrance
      gsap.fromTo([titleRef.value, summaryRef.value], 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out' }
      )
      
      // Battery Assembling Parallax
      if (parallaxStage.value) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: parallaxContainer.value,
            start: 'top top',
            end: '+=1500',
            scrub: 1,
            pin: true
          }
        })
        
        // Initial state
        gsap.set('.layer-base', { y: 200, opacity: 0.3 })
        gsap.set('.layer-cells', { y: 0, opacity: 0.3 })
        gsap.set('.layer-cooling', { y: -200, opacity: 0.3 })
        gsap.set('.layer-cover', { y: -400, opacity: 0 })
        
        tl.to('.layer-base', { y: 100, opacity: 1, duration: 1 })
          .to('.layer-cells', { y: 50, opacity: 1, duration: 1 }, "<")
          .to('.layer-cooling', { y: 0, opacity: 1, duration: 1 }, "<")
          .to('.layer-cover', { y: -50, opacity: 1, duration: 1 }, "<")
          // Squeeze them together completely
          .to('.layer', { y: 0, scale: 0.95, duration: 1 })
      }
    })
  })
})

onBeforeUnmount(() => {
  ctx?.revert()
})
</script>

<style scoped>
.tech-battery {
  background: #020406;
  color: #fff;
}
.tech-hero {
  position: relative;
  height: 70vh;
  min-height: 600px;
  display: flex;
  align-items: flex-end;
  padding-bottom: 80px;
}
.tech-hero-background {
  position: absolute;
  inset: 0;
}
.tech-hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.tech-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, rgba(2,4,6,1) 0%, rgba(2,4,6,0.3) 50%, rgba(2,4,6,0.6) 100%);
}
.tech-hero-content {
  position: relative;
  z-index: 1;
}

.battery-parallax-section {
  padding-top: 100px;
  height: 100vh;
  position: relative;
  background: radial-gradient(circle at center, rgba(197, 156, 98, 0.05) 0%, #020406 70%);
}
.battery-intro {
  margin-bottom: 80px;
  position: relative;
  z-index: 10;
}
.parallax-stage {
  position: relative;
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.layer {
  position: absolute;
  width: 80%;
  max-width: 800px;
  transform-origin: center center;
  transition: opacity 0.3s;
}
.layer img {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 20px 40px rgba(0,0,0,0.5));
}
.layer-base { z-index: 1; }
.layer-cells { z-index: 2; }
.layer-cooling { z-index: 3; }
.layer-cover { z-index: 4; }
</style>
