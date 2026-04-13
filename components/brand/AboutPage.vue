<template>
  <div class="custom-page about-page">
    <PageHero
      :eyebrow="$t('domain.about.eyebrow', 'Company Profile')"
      :title="$t('domain.about.title', 'About Voyah')"
      :summary="$t('domain.about.summary', 'The premium new energy brand from Dongfeng Motor Corporation.')"
      image="/voyah-resources/brand/about_hero.jpg"
      align="center"
      :compact="false"
    />

    <!-- Mission Statement -->
    <section class="about-statement section-shell">
      <div class="container text-center">
         <h2 ref="statementRef" class="fade-up">{{ $t('domain.about.statement', "Voyah integrates 54 years of car-building expertise from Dongfeng with extensive global supply chain resources, standing at the forefront of China's new energy vehicle transition.") }}</h2>
      </div>
    </section>

    <!-- Interactive Data Counters -->
    <section class="about-metrics section-shell text-bg-dark">
       <div class="container">
          <div class="metrics-grid" ref="metricsRef">
             <div class="metric-item">
                <div class="metric-number">
                  <span class="count">{{ counts[0] }}</span>+
                </div>
                <div class="metric-label">{{ $t('domain.about.m1_label', 'Patents Filed') }}</div>
             </div>
             <div class="metric-item">
                <div class="metric-number">
                  <span class="count">{{ counts[1] }}</span>
                </div>
                <div class="metric-label">{{ $t('domain.about.m2_label', 'Years of Heritage') }}</div>
             </div>
             <div class="metric-item">
                <div class="metric-number">
                  <span class="count">{{ counts[2] }}</span>k+
                </div>
                <div class="metric-label">{{ $t('domain.about.m3_label', 'Global Deliveries') }}</div>
             </div>
          </div>
       </div>
    </section>

    <!-- Global Footprint Map Mock -->
    <section class="footprint-section section-shell">
       <div class="container">
          <div class="section-title-center">
             <h2>{{ $t('domain.about.footprint_title', 'Global Footprint') }}</h2>
             <p>{{ $t('domain.about.footprint_desc', 'Strategic R&D centers spread across multiple continents, driving innovation at the speed of light.') }}</p>
          </div>
          
          <div class="map-container">
             <!-- Placeholder map vector; typically this is a custom SVG mapping coordinates -->
             <img src="/voyah-resources/tech/safety_battery_shield.png" alt="Global Operations Map" class="map-image" />
             <!-- Overlays for R&D Centers -->
             <div class="map-pin pin-wuhan">
               <div class="pin-dot"></div>
               <span class="pin-label">Wuhan (Global HQ)</span>
             </div>
             <div class="pin-turin map-pin">
               <div class="pin-dot"></div>
               <span class="pin-label">Turin (Design Hub)</span>
             </div>
             <div class="pin-oslo map-pin">
               <div class="pin-dot"></div>
               <span class="pin-label">Oslo (EU Operations)</span>
             </div>
          </div>
       </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, reactive } from 'vue'
import PageHero from '~/components/common/PageHero.vue'
import type { InfoDefinition } from '~/data/site'

const props = defineProps<{
  page: InfoDefinition
}>()

const metricsRef = ref<HTMLElement | null>(null)
const statementRef = ref<HTMLElement | null>(null)
const counts = reactive([0, 0, 0])
const targets = [1543, 54, 100] // 1543+ patents, 54 years, 100k deliveries
let observer: IntersectionObserver | null = null

const startCounting = () => {
    let duration = 2000;
    let frames = 60;
    let steps = targets.map(t => t / frames);
    let currentFrame = 0;

    let timer = setInterval(() => {
        currentFrame++;
        for(let i=0; i<3; i++) {
           counts[i] = Math.floor(steps[i] * currentFrame);
        }
        if (currentFrame >= frames) {
           clearInterval(timer);
           counts[0] = targets[0];
           counts[1] = targets[1];
           counts[2] = targets[2];
        }
    }, duration / frames);
}

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
        if (entry.isIntersecting) {
           if (entry.target === metricsRef.value) {
              startCounting();
              observer?.unobserve(entry.target);
           }
        }
     })
  }, { threshold: 0.5 })

  if (metricsRef.value) observer.observe(metricsRef.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.custom-page { background: #fff; overflow: hidden; }

.text-bg-dark { background: #1a1a1a; color: #fff; }

.about-statement { padding: 120px 0; }
.about-statement h2 {
  font-family: var(--font-heading);
  font-size: 2.4rem;
  line-height: 1.6;
  color: #212529;
  max-width: 900px;
  margin: 0 auto;
}

.about-metrics { padding: 100px 0; }
.metrics-grid {
  display: flex;
  justify-content: space-around;
  text-align: center;
  flex-wrap: wrap;
  gap: 40px;
}
.metric-number {
  font-family: var(--font-heading);
  font-size: 4.5rem;
  font-weight: 700;
  color: #c59c62;
  line-height: 1;
  margin-bottom: 15px;
}
.metric-label {
  font-size: 1.1rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #a0a0a0;
}

.footprint-section { padding: 120px 0; }
.section-title-center {
  text-align: center;
  margin-bottom: 60px;
}
.section-title-center h2 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  color: #212529;
  margin-bottom: 20px;
}
.section-title-center p {
  color: #6c757d;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.map-container {
  position: relative;
  border-radius: 12px;
  background: #f8f9fa;
  overflow: hidden;
  padding: 40px;
  text-align: center;
}
/* We use a placeholder image structurally centered like a map */
.map-image {
  max-width: 100%;
  opacity: 0.2;
  filter: grayscale(100%);
}

.map-pin {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.pin-wuhan { top: 40%; right: 25%; }
.pin-turin { top: 35%; left: 45%; }
.pin-oslo { top: 25%; left: 43%; }

.pin-dot {
  width: 16px;
  height: 16px;
  background: #c59c62;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(197, 156, 98, 0.3);
  animation: pulse 2s infinite;
}
.pin-label {
  background: #212529;
  color: #fff;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
  white-space: nowrap;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(197, 156, 98, 0.4); }
  70% { box-shadow: 0 0 0 15px rgba(197, 156, 98, 0); }
  100% { box-shadow: 0 0 0 0 rgba(197, 156, 98, 0); }
}

@media (max-width: 768px) {
  .metric-number { font-size: 3rem; }
  .about-statement h2 { font-size: 1.8rem; }
  .pin-label { display: none; } /* Hide labels on tight mobile */
}
</style>
