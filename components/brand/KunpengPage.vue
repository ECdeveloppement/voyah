<template>
  <div class="custom-page kunpeng-page">
    <PageHero
      :eyebrow="$t('domain.kunpeng.eyebrow', 'The Kunpeng DNA')"
      :title="$t('domain.kunpeng.title', 'Design Without Boundaries')"
      :summary="$t('domain.kunpeng.summary', 'Inspired by the ancient mythological Kunpeng—a giant fish that transforms into a bird, our design language blends fluid mechanics with boundless aerodynamic freedom.')"
      image="/voyah-resources/brand/kunpeng_hero.jpg"
      align="end"
      :compact="false"
    />

    <!-- The DNA Section -->
    <section class="dna-section section-shell text-bg-dark">
      <div class="container">
         <div class="dna-intro">
            <h2>{{ $t('domain.kunpeng.dna_title', 'Elegant and Majestic') }}</h2>
            <p>{{ $t('domain.kunpeng.dna_desc', 'The Kunpeng design philosophy is defined by two opposing yet complementary forces: the fluid grace of the ocean and the sharp, aerodynamic ambition of the sky.') }}</p>
         </div>
      </div>
      
      <!-- Horizontal Concept Gallery -->
      <div class="concept-marquee">
         <div class="marquee-track">
            <!-- Simulated infinite track of design elements -->
            <div class="concept-card">
               <img src="/voyah-resources/brand/philosophy_hero.jpg" alt="Fluid Dynamics" />
               <div class="concept-overlay">
                  <h4>{{ $t('domain.kunpeng.c1', 'Aero-Sculpted Lines') }}</h4>
               </div>
            </div>
            <div class="concept-card">
               <img src="/voyah-resources/tech/safety_body_structure.png" alt="Safety Meets Form" />
               <div class="concept-overlay">
                  <h4>{{ $t('domain.kunpeng.c2', 'Form Meets Physics') }}</h4>
               </div>
            </div>
            <div class="concept-card">
               <img src="/voyah-resources/models/titan_ultra_hero.jpg" alt="Titan Ultra Concept" />
               <div class="concept-overlay">
                  <h4>{{ $t('domain.kunpeng.c3', 'The Skyline Profile') }}</h4>
               </div>
            </div>
            <div class="concept-card">
               <img src="/voyah-resources/tech/cockpit_hero.jpg" alt="Interior Zen" />
               <div class="concept-overlay">
                  <h4>{{ $t('domain.kunpeng.c4', 'Zen Interior Architecture') }}</h4>
               </div>
            </div>
         </div>
      </div>
    </section>

    <!-- The i-Land Concept Details -->
    <section class="iland-section section-shell">
      <div class="container">
         <div class="iland-grid">
            <div class="iland-text">
               <div class="badge">i-Land Concept</div>
               <h2>{{ $t('domain.kunpeng.i_title', 'The Genesis of Voyah Form') }}</h2>
               <p>{{ $t('domain.kunpeng.i_p1', 'The i-Land concept car was the pure manifestation of the Kunpeng philosophy. It introduced the world to our signature "Light Sword" interactive headlights and the floating roofline.') }}</p>
               <ul class="design-list">
                  <li><strong>{{ $t('domain.kunpeng.f1_title', 'Light Wings:') }}</strong> {{ $t('domain.kunpeng.f1_desc', 'Symmetric daytime running lights crossing the grille.') }}</li>
                  <li><strong>{{ $t('domain.kunpeng.f2_title', 'Surging Waves:') }}</strong> {{ $t('domain.kunpeng.f2_desc', 'Profile body lines that emulate ripples displacing water.') }}</li>
               </ul>
            </div>
            <div class="iland-image">
               <div class="img-wrapper shadow-layer">
                  <img src="/voyah-resources/brand/kunpeng_hero.jpg" alt="i-Land Prototype" />
               </div>
            </div>
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
.custom-page { background: #fff; overflow-x: hidden; }

.text-bg-dark {
  background: #1a1a1a;
  color: #fff;
  padding: 100px 0 0 0; /* No bottom padding to bleed the gallery */
}

.dna-intro {
  max-width: 800px;
  margin: 0 auto 60px;
  text-align: center;
}
.dna-intro h2 {
  font-family: var(--font-heading);
  font-size: 3rem;
  margin-bottom: 20px;
  color: #fff;
}
.dna-intro p {
  color: #a0a0a0;
  font-size: 1.15rem;
  line-height: 1.8;
}

/* Horizontal Gallery */
.concept-marquee {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  overflow-x: auto;
  padding-bottom: 100px;  
}
.concept-marquee::-webkit-scrollbar {
  display: none;
}
.marquee-track {
  display: flex;
  gap: 30px;
  padding: 0 5vw;
  min-width: max-content;
}
.concept-card {
  width: 500px;
  height: 350px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
}
.concept-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}
.concept-overlay {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  padding: 40px 30px 30px;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.4s ease;
}
.concept-overlay h4 {
  color: #fff;
  margin: 0;
  font-size: 1.4rem;
  font-weight: 500;
}
.concept-card:hover img {
  transform: scale(1.05);
}
.concept-card:hover .concept-overlay {
  transform: translateY(0);
  opacity: 1;
}

/* i-Land Section */
.iland-section { padding: 120px 0; }
.iland-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
.badge {
  display: inline-block;
  background: #c59c62;
  color: #fff;
  padding: 6px 14px;
  border-radius: 30px;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.05em;
  margin-bottom: 20px;
}
.iland-text h2 {
  font-family: var(--font-heading);
  font-size: 2.8rem;
  color: #212529;
  margin-bottom: 25px;
  line-height: 1.2;
}
.iland-text p {
  color: #6c757d;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 30px;
}
.design-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.design-list li {
  margin-bottom: 15px;
  color: #495057;
  font-size: 1.05rem;
}
.design-list strong {
  color: #c59c62;
}

.img-wrapper {
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}
.shadow-layer::after {
  content: '';
  position: absolute;
  top: 20px; left: 20px; right: -20px; bottom: -20px;
  background: rgba(197, 156, 98, 0.1);
  z-index: -1;
  border-radius: 12px;
}
.img-wrapper img {
  width: 100%;
  border-radius: 12px;
  display: block;
}

@media (max-width: 991px) {
  .iland-grid { grid-template-columns: 1fr; gap: 50px; }
  .concept-card { width: 80vw; }
}
</style>
