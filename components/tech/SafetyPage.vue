<template>
  <div class="tech-page tech-safety">
    <!-- Hero Section -->
    <section class="tech-hero">
      <div class="tech-hero-background">
        <!-- We use an image if video is absent, but logic falls back gracefully -->
        <video autoplay muted loop playsinline class="tech-hero-image" v-if="page.heroImage?.endsWith('.mp4')">
          <source :src="page.heroImage" type="video/mp4" />
        </video>
        <img v-else :src="page.heroImage" alt="Voyah Safety" class="tech-hero-image" />
        <div class="tech-hero-overlay"></div>
      </div>
      <div class="container tech-hero-content">
        <h1 class="page-title" ref="titleRef">{{ textFor(page.title) }}</h1>
        <p class="page-summary" ref="summaryRef">{{ textFor(page.summary) }}</p>
      </div>
    </section>

    <!-- Structural Safety Breakdown Sections -->
    <section class="safety-dark-section section-shell">
      <div class="container">
        <div class="safety-grid pattern-checkerboard">
          <div class="safety-content" ref="contentLeft">
            <h2 class="section-title">{{ $t('domain.tech.safety.structure_title', 'Fortress Body Structure') }}</h2>
            <p class="section-copy">{{ $t('domain.tech.safety.structure_body', 'Beyond five-star safety. The Voyah structural body utilizes 2000MPa thermo-formed steel in critical intrusion zones, creating an impregnable survival space for all occupants.') }}</p>
            <ul class="safety-metric-list">
              <li>
                <span class="metric-value">2000<small>MPa</small></span>
                <span class="metric-label">{{ $t('domain.tech.safety.steel', 'Hot-formed steel') }}</span>
              </li>
              <li>
                <span class="metric-value">68<small>%</small></span>
                <span class="metric-label">{{ $t('domain.tech.safety.hss', 'High-strength steel') }}</span>
              </li>
            </ul>
          </div>
          <div class="safety-media" ref="mediaRight">
            <img src="/voyah-resources/tech/safety_body_structure.png" alt="Body Structure" class="x-ray-img" />
          </div>
        </div>
      </div>
    </section>
    
    <section class="safety-dark-section section-shell">
      <div class="container">
        <div class="safety-grid reverse">
          <div class="safety-content" ref="contentRight">
            <h2 class="section-title">{{ $t('domain.tech.safety.battery_title', 'Amber Battery Shield') }}</h2>
            <p class="section-copy">{{ $t('domain.tech.safety.battery_body', 'Active and passive defense mechanisms intercept thermal runaway. Five layers of physical protection meet aerospace-grade heat resistance.') }}</p>
            <ul class="safety-metric-list">
              <li>
                <span class="metric-value">1000<small>°C</small></span>
                <span class="metric-label">{{ $t('domain.tech.safety.temp', 'Heat resistance') }}</span>
              </li>
              <li>
                <span class="metric-value">IP68</span>
                <span class="metric-label">{{ $t('domain.tech.safety.water', 'Waterproof rating') }}</span>
              </li>
            </ul>
          </div>
          <div class="safety-media" ref="mediaLeft">
            <img src="/voyah-resources/tech/safety_battery_shield.png" alt="Battery Shield" class="x-ray-img" />
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
const contentLeft = ref<HTMLElement | null>(null)
const mediaRight = ref<HTMLElement | null>(null)
const contentRight = ref<HTMLElement | null>(null)
const mediaLeft = ref<HTMLElement | null>(null)

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
      
      const elements = [
        { text: contentLeft.value, media: mediaRight.value, reverse: false },
        { text: contentRight.value, media: mediaLeft.value, reverse: true }
      ]
      
      elements.forEach((el) => {
        if (!el.text || !el.media) return
        const xOffset = el.reverse ? 50 : -50
        const rtlDir = document.documentElement.getAttribute('dir') === 'rtl' ? -1 : 1
        
        gsap.fromTo(el.text,
          { opacity: 0, x: xOffset * rtlDir },
          { 
            opacity: 1, x: 0, 
            duration: 1.05, 
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el.text,
              start: 'top 80%'
            }
          }
        )
        gsap.fromTo(el.media,
          { opacity: 0, scale: 0.95 },
          { 
            opacity: 1, scale: 1, 
            duration: 1.2, 
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el.media,
              start: 'top 80%'
            }
          }
        )
      })

    })
  })
})

onBeforeUnmount(() => {
  ctx?.revert()
})
</script>

<style scoped>
.tech-safety {
  background: #030507;
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
  overflow: hidden;
}
.tech-hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.05); /* Slight scale to hide video edges */
}
.tech-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, rgba(3,5,7,1) 0%, rgba(3,5,7,0.4) 40%, rgba(3,5,7,0.7) 100%);
}
.tech-hero-content {
  position: relative;
  z-index: 1;
}

.safety-dark-section {
  padding: 100px 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.safety-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
}
.safety-grid.reverse {
  direction: rtl; /* FLips the grid columns for LTR layout variation */
}
.safety-grid.reverse > * {
  direction: ltr; /* Restores content direction */
}
[dir="rtl"] .safety-grid.reverse {
  direction: ltr;
}
[dir="rtl"] .safety-grid.reverse > * {
  direction: rtl;
}

.safety-content {
  max-width: 500px;
}
.safety-media {
  position: relative;
  border-radius: 20px;
  background: radial-gradient(circle at center, rgba(197, 156, 98, 0.1) 0%, transparent 70%);
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.x-ray-img {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 0 40px rgba(197,156,98,0.2));
}

.safety-metric-list {
  display: flex;
  gap: 40px;
  list-style: none;
  padding: 0;
  margin: 40px 0 0;
}
.metric-value {
  display: block;
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 300;
  color: #c59c62;
  line-height: 1;
  margin-bottom: 8px;
}
.metric-value small {
  font-size: 1.2rem;
  margin-left: 4px;
}
.metric-label {
  display: block;
  font-size: 0.9rem;
  color: rgba(255,255,255,0.6);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

@media (max-width: 991px) {
  .safety-grid, .safety-grid.reverse {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    direction: ltr;
  }
  .safety-grid.reverse > * {
    direction: ltr;
  }
  [dir="rtl"] .safety-grid, [dir="rtl"] .safety-grid.reverse {
    direction: rtl;
  }
  [dir="rtl"] .safety-grid.reverse > * {
    direction: rtl;
  }
}
</style>
