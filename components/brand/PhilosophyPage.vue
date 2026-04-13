<template>
  <div class="custom-page philosophy-page">
    <PageHero
      :eyebrow="$t('domain.philosophy.eyebrow', 'Brand Heritage')"
      :title="$t('domain.philosophy.title', 'Freedom to Explore')"
      :summary="$t('domain.philosophy.summary', 'Our philosophy is rooted in harmony—balancing human needs, technological advancement, and ecological responsibility.')"
      image="/voyah-resources/brand/philosophy_hero.jpg"
      align="center"
      :compact="false"
    />

    <!-- Paradigm Shift Section -->
    <section class="philosophy-intro section-shell">
      <div class="container">
         <div class="intro-grid">
            <div class="intro-text">
               <h2>{{ $t('domain.philosophy.intro_title', 'A New Paradigm of Premium') }}</h2>
               <p>{{ $t('domain.philosophy.intro_p1', 'Voyah was born from a desire to redefine luxury mobility. We do not just build cars; we architect intelligent mobile spaces that eliminate range anxiety and embrace the sheer joy of driving.') }}</p>
               <p>{{ $t('domain.philosophy.intro_p2', 'Inspired by traditional Chinese philosophy and powered by cutting-edge global engineering, we deliver an experience that is both profoundly serene and fiercely dynamic.') }}</p>
            </div>
            <div class="intro-image">
               <img src="/voyah-resources/brand/about_hero.jpg" alt="Voyah Ethos" class="rounded-media" />
            </div>
         </div>
      </div>
    </section>

    <!-- Core Pillars Array -->
    <section class="brand-pillars section-shell bg-light">
      <div class="container">
         <div class="section-title-center">
            <h2>{{ $t('domain.philosophy.pillars_title', 'Three Pillars of Voyah') }}</h2>
         </div>
         
         <div class="pillars-container">
            <div class="pillar-card">
               <div class="pillar-number">01</div>
               <h3>{{ $t('domain.philosophy.p1_title', 'Zero Anxiety') }}</h3>
               <p>{{ $t('domain.philosophy.p1_desc', 'Through our advanced ESSA 800V architecture and robust charging network, we have mathematically eliminated the traditional boundaries of electric travel.') }}</p>
            </div>
            
            <div class="pillar-card">
               <div class="pillar-number">02</div>
               <h3>{{ $t('domain.philosophy.p2_title', 'Quiet Luxury') }}</h3>
               <p>{{ $t('domain.philosophy.p2_desc', 'True luxury doesn\'t shout. Our cabins are engineered to NVH standards that isolate the chaos of the outside world, creating a sanctuary of calm.') }}</p>
            </div>
            
            <div class="pillar-card">
               <div class="pillar-number">03</div>
               <h3>{{ $t('domain.philosophy.p3_title', 'Smart Empowerment') }}</h3>
               <p>{{ $t('domain.philosophy.p3_desc', 'Technology should serve, not overwhelm. Our AI-driven smart cockpits anticipate your needs to make every journey effortless.') }}</p>
            </div>
         </div>
      </div>
    </section>

    <!-- Visual Manifesto Quote -->
    <section class="manifesto-parallax" :style="{ backgroundImage: `url('/voyah-resources/brand/kunpeng_hero.jpg')` }">
       <div class="parallax-overlay">
          <div class="container">
             <blockquote>
                "{{ $t('domain.philosophy.quote', 'To move forward, we must look beyond the horizon. We are not just reaching for the destination, but elevating the journey.') }}"
             </blockquote>
          </div>
       </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import PageHero from '~/components/common/PageHero.vue'
import type { InfoDefinition } from '~/data/site'

const props = defineProps<{
  page: InfoDefinition
}>()
</script>

<style scoped>
.custom-page { background: #fff; }
.bg-light { background: #fdfbf7; }

.philosophy-intro { padding: 100px 0; }
.intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
.intro-text h2 {
  font-family: var(--font-heading);
  font-size: 2.8rem;
  color: #212529;
  margin-bottom: 30px;
  line-height: 1.2;
}
.intro-text p {
  color: #6c757d;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
}
.rounded-media {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
}

.brand-pillars { padding: 100px 0; }
.section-title-center {
  text-align: center;
  margin-bottom: 80px;
}
.section-title-center h2 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  color: #212529;
}

.pillars-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}
.pillar-card {
  background: #fff;
  padding: 50px 40px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
  position: relative;
  overflow: hidden;
  transition: transform 0.4s ease;
}
.pillar-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0,0,0,0.08);
}
.pillar-block {
  position: relative;
  z-index: 2;
}
.pillar-number {
  font-size: 5rem;
  font-family: var(--font-heading);
  font-weight: 700;
  color: #f8f9fa;
  position: absolute;
  top: -10px;
  right: -10px;
  z-index: 1;
  transition: color 0.4s ease;
}
.pillar-card:hover .pillar-number {
  color: #f1ebd8;
}
.pillar-card h3 {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  color: #212529;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
}
.pillar-card p {
  color: #6c757d;
  line-height: 1.6;
  position: relative;
  z-index: 2;
}

.manifesto-parallax {
  height: 60vh;
  min-height: 500px;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
}
.parallax-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
blockquote {
  font-family: var(--font-heading);
  font-size: 2.8rem;
  color: #fff;
  max-width: 900px;
  line-height: 1.4;
  margin: 0;
  text-shadow: 0 4px 20px rgba(0,0,0,0.4);
}

@media (max-width: 991px) {
  .intro-grid { grid-template-columns: 1fr; gap: 40px; }
  .pillars-container { grid-template-columns: 1fr; }
  blockquote { font-size: 2rem; }
}
</style>
