<template>
  <div class="tech-page tech-cockpit">
    <!-- Hero Section -->
    <section class="tech-hero">
      <div class="tech-hero-background">
        <video autoplay muted loop playsinline class="tech-hero-image" v-if="page.heroImage?.endsWith('.mp4')">
          <source :src="page.heroImage" type="video/mp4" />
        </video>
        <img v-else :src="page.heroImage || '/voyah-resources/tech/cockpit_hero.jpg'" alt="Voyah Smart Cockpit" class="tech-hero-image" />
        <div class="tech-hero-overlay"></div>
      </div>
      <div class="container tech-hero-content">
        <h1 class="page-title" ref="titleRef">{{ textFor(page.title) }}</h1>
        <p class="page-summary" ref="summaryRef">{{ textFor(page.summary) }}</p>
      </div>
    </section>

    <!-- Cockpit Features Grid Section -->
    <section class="cockpit-features-section section-shell" ref="featuresSection">
      <div class="container">
        <div class="cockpit-header text-center">
          <h2 class="section-title">{{ $t('domain.tech.cockpit.os_title', 'Seamless Intelligence') }}</h2>
          <p class="section-copy">{{ $t('domain.tech.cockpit.os_body', 'Powered by top-tier Qualcomm Snapdragon 8155/8295 chipsets and deep software integration, the cabin transforms into a dynamic living space capable of OTA evolution.') }}</p>
        </div>
        
        <div class="cockpit-grid">
          <div class="feature-card" :class="`card-${i}`" v-for="i in 4" :key="i">
            <div class="card-media">
               <img :src="`/voyah-resources/tech/cockpit_feature_${i}.jpg`" alt="Cabin Feature" />
            </div>
            <div class="card-body">
               <h3>{{ $t(`domain.tech.cockpit.feature_${i}_title`, `Intelligence Aspect ${i}`) }}</h3>
               <p>{{ $t(`domain.tech.cockpit.feature_${i}_desc`, `Advanced capability description for the smart cabin ${i}.`) }}</p>
            </div>
          </div>
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
const featuresSection = ref<HTMLElement | null>(null)

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
      
      // Grid Cards Staggered Reveal
      gsap.fromTo('.feature-card',
        { y: 60, opacity: 0 },
        { 
          y: 0, opacity: 1, 
          duration: 1.2, stagger: 0.15, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cockpit-grid',
            start: 'top 85%'
          }
        }
      )
    })
  })
})

onBeforeUnmount(() => {
  ctx?.revert()
})
</script>

<style scoped>
.tech-cockpit {
  background: #000;
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
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%);
}
.tech-hero-content {
  position: relative;
  z-index: 1;
}

.cockpit-features-section {
  padding: 100px 0;
  background: radial-gradient(circle at top center, #111A22 0%, #000 60%);
}
.cockpit-header {
  margin-bottom: 60px;
  max-width: 700px;
  margin-inline: auto;
}
.cockpit-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}
.feature-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.4s ease, border-color 0.4s ease;
}
.feature-card:hover {
  transform: translateY(-5px);
  border-color: rgba(197, 156, 98, 0.4);
}
.card-media {
  height: 300px;
  width: 100%;
}
.card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-body {
  padding: 30px;
}
.card-body h3 {
  font-size: 1.4rem;
  margin-bottom: 12px;
  font-family: var(--font-heading);
}
.card-body p {
  line-height: 1.6;
  color: rgba(255,255,255,0.6);
  margin: 0;
}

@media (max-width: 768px) {
  .cockpit-grid {
    grid-template-columns: 1fr;
  }
}
</style>
