<template>
  <div class="tech-page tech-architecture">
    <!-- Hero Section -->
    <section class="tech-hero">
      <div class="tech-hero-background">
        <img :src="page.heroImage" alt="Voyah ESSA Architecture" class="tech-hero-image" />
        <div class="tech-hero-overlay"></div>
      </div>
      <div class="container tech-hero-content">
        <h1 class="page-title">{{ textFor(page.title) }}</h1>
        <p class="page-summary">{{ textFor(page.summary) }}</p>
      </div>
    </section>

    <!-- Platform Diagram Section -->
    <section class="tech-diagram-section section-shell" ref="diagramSection">
      <div class="container">
        <div class="tech-diagram-header">
          <h2 class="section-title">{{ $t('domain.tech.architecture.essa_title', 'Native Smart Electric Architecture') }}</h2>
          <p class="section-copy">{{ $t('domain.tech.architecture.essa_body', 'The 800V platform empowers intelligent control and extreme safety.') }}</p>
        </div>
        
        <div class="tech-diagram-container">
          <div class="tech-diagram-stage">
            <div class="diagram-chassis">
               <!-- Placeholder for 4K Chassis Image -->
               <img src="/voyah-resources/tech/essa_chassis.png" alt="Chassis" class="chassis-img" />
            </div>
            <div class="diagram-overlays">
              <div class="data-point point-1">
                <span class="point-dot"></span>
                <span class="point-label">{{ $t('domain.tech.architecture.point1', 'Intelligent Power Distribution') }}</span>
              </div>
              <div class="data-point point-2">
                <span class="point-dot"></span>
                <span class="point-label">{{ $t('domain.tech.architecture.point2', 'Integrated Battery Shield') }}</span>
              </div>
              <div class="data-point point-3">
                <span class="point-dot"></span>
                <span class="point-label">{{ $t('domain.tech.architecture.point3', 'Air Suspension Dynamics') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Horizontal Scroll Features -->
    <section class="tech-horizontal-section" ref="horizontalSection">
      <div class="horizontal-track">
        <div class="horizontal-item" v-for="i in 3" :key="i">
          <div class="horizontal-card">
            <div class="horizontal-card-media">
               <img :src="`/voyah-resources/tech/architecture_feature_${i}.jpg`" alt="Feature" />
            </div>
            <div class="horizontal-card-body">
               <h3>{{ $t(`domain.tech.architecture.feature_${i}_title`, `Advanced Feature ${i}`) }}</h3>
               <p>{{ $t(`domain.tech.architecture.feature_${i}_desc`, `Description for advanced feature ${i}.`) }}</p>
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
const diagramSection = ref<HTMLElement | null>(null)
const horizontalSection = ref<HTMLElement | null>(null)

let ctx: gsap.Context

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  
  nextTick(() => {
    ctx = gsap.context(() => {
      // Data Point Stagger
      gsap.fromTo('.data-point',
        { opacity: 0, scale: 0.8, y: 20 },
        { 
          opacity: 1, scale: 1, y: 0, 
          stagger: 0.2, 
          duration: 1.05, 
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '.tech-diagram-stage',
            start: 'top 70%'
          }
        }
      )

      // Horizontal Scroll
      if (horizontalSection.value) {
        const track = horizontalSection.value.querySelector('.horizontal-track') as HTMLElement
        const walk = track.scrollWidth - window.innerWidth
        
        if (walk > 0) {
          gsap.to(track, {
            x: -walk,
            ease: 'none',
            scrollTrigger: {
              trigger: horizontalSection.value,
              start: 'top top',
              end: `+=${walk}`,
              pin: true,
              scrub: 1
            }
          })
        }
      }
    })
  })
})

onBeforeUnmount(() => {
  ctx?.revert()
})
</script>

<style scoped>
.tech-page {
  background: #05090d;
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
  background: linear-gradient(0deg, rgba(5,9,13,1) 0%, rgba(5,9,13,0.3) 50%, rgba(5,9,13,0.6) 100%);
}
.tech-hero-content {
  position: relative;
  z-index: 1;
}

.tech-diagram-container {
  margin-top: 60px;
  position: relative;
  min-height: 500px;
  background: #0A1017;
  border-radius: 24px;
  border: 1px solid rgba(255,255,255,0.06);
  padding: 40px;
  overflow: hidden;
}
.tech-diagram-stage {
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 16/9;
}
.chassis-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.diagram-overlays {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.data-point {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 12px;
}
.point-dot {
  width: 12px;
  height: 12px;
  background: #c59c62;
  border-radius: 50%;
  box-shadow: 0 0 12px #c59c62;
}
.point-label {
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #fff;
  background: rgba(0,0,0,0.6);
  padding: 4px 12px;
  border-radius: 4px;
  border: 1px solid rgba(255,255,255,0.1);
}

.point-1 { top: 30%; left: 20%; }
.point-2 { top: 60%; left: 45%; }
.point-3 { top: 40%; left: 70%; }

/* Local RTL Mirroring for Arabic */
[dir="rtl"] .data-point {
  flex-direction: row-reverse;
}
[dir="rtl"] .point-1 { left: auto; right: 20%; }
[dir="rtl"] .point-2 { left: auto; right: 45%; }
[dir="rtl"] .point-3 { left: auto; right: 70%; }

.tech-horizontal-section {
  overflow: hidden;
  background: #05090d;
}
.horizontal-track {
  display: flex;
  width: max-content;
  padding: 100px 10vw;
  gap: 40px;
}
.horizontal-item {
  width: 600px;
}
.horizontal-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  overflow: hidden;
}
.horizontal-card-media {
  height: 340px;
  background: #111;
}
.horizontal-card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.horizontal-card-body {
  padding: 30px;
}
.horizontal-card-body h3 {
  margin: 0 0 14px;
  font-size: 1.4rem;
}
.horizontal-card-body p {
  margin: 0;
  color: rgba(255,255,255,0.7);
  line-height: 1.6;
}
</style>
