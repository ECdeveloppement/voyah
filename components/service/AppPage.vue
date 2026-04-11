<template>
  <div class="custom-page app-page">
    <PageHero
      :eyebrow="$t('domain.apppage.eyebrow', 'Mobile Connectivity')"
      :title="$t('domain.apppage.title', 'The Voyah App')"
      :summary="$t('domain.apppage.summary', 'Control your vehicle, access the community, and manage your lifestyle from anywhere.')"
      image="/voyah-resources/service/app_hero.jpg"
      align="center"
      :compact="true"
    />

    <section class="app-download-section section-shell">
      <div class="container">
        <div class="app-split-grid">
           <div class="app-content-col">
              <h2>{{ $t('domain.apppage.features_title', 'Everything connected in your palm.') }}</h2>
              
              <ul class="app-features">
                 <li>
                   <div class="feature-icon">
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                   </div>
                   <div class="feature-text">
                     <h4>{{ $t('domain.apppage.f1_title', 'Remote Vehicle Control') }}</h4>
                     <p>{{ $t('domain.apppage.f1_desc', 'Pre-condition cabin climate, lock/unlock doors, and monitor charging status live.') }}</p>
                   </div>
                 </li>
                 <li>
                   <div class="feature-icon">
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                   </div>
                   <div class="feature-text">
                     <h4>{{ $t('domain.apppage.f2_title', 'Navigation Send-to-Car') }}</h4>
                     <p>{{ $t('domain.apppage.f2_desc', 'Plan your route on your phone and send it directly to the Smart Cockpit.') }}</p>
                   </div>
                 </li>
                 <li>
                   <div class="feature-icon">
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                   </div>
                   <div class="feature-text">
                     <h4>{{ $t('domain.apppage.f3_title', 'Voyah Community') }}</h4>
                     <p>{{ $t('domain.apppage.f3_desc', 'Share moments, earn points, and connect with other Voyah owners.') }}</p>
                   </div>
                 </li>
              </ul>

              <div class="download-stores">
                <a href="#" class="store-button apple">
                   <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.32 12.87c-.12 1.94-1.6 3.65-3.32 3.65-1.74 0-3.34-1.7-3.34-3.65v-2.07l2.8-2.61L12.56 12l2.76 2.8z"/></svg>
                   <div class="store-text">
                     <small>Download on the</small>
                     <span>App Store</span>
                   </div>
                </a>
                <a href="#" class="store-button google">
                   <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 20.08c-4.46 0-8.08-3.62-8.08-8.08 0-4.46 3.62-8.08 8.08-8.08 4.46 0 8.08 3.62 8.08 8.08 0 4.46-3.62 8.08-8.08 8.08zM11.4 7.2l-3.2 4.8h6.4l-3.2-4.8zM8.2 13.6L11.4 18.4 14.6 13.6H8.2z"/></svg>
                   <div class="store-text">
                     <small>GET IT ON</small>
                     <span>Google Play</span>
                   </div>
                </a>
              </div>
           </div>
           
           <div class="app-media-col">
              <div class="mockup-container">
                 <div class="phone-frame">
                    <img src="/voyah-resources/service/faq_hero.jpg" alt="Voyah App Screen" class="inner-screen" />
                 </div>
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
.custom-page { background: #fff; }
.app-download-section { padding: 100px 0; }
.app-split-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
.app-content-col h2 {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  color: #212529;
  margin-bottom: 50px;
}
.app-features {
  list-style: none;
  padding: 0;
  margin: 0 0 50px 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.app-features li {
  display: flex;
  gap: 20px;
}
.feature-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fdfbf7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.feature-icon svg {
  width: 24px;
  height: 24px;
  stroke: #c59c62;
}
.feature-text h4 {
  font-size: 1.25rem;
  margin-bottom: 8px;
  color: #212529;
}
.feature-text p {
  color: #6c757d;
  line-height: 1.6;
}

.download-stores {
  display: flex;
  gap: 20px;
}
.store-button {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #111;
  color: #fff;
  padding: 10px 24px;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.store-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
.store-button svg {
  width: 28px;
  height: 28px;
}
.store-text {
  display: flex;
  flex-direction: column;
}
.store-text small {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.8;
}
.store-text span {
  font-size: 1.1rem;
  font-weight: 500;
}

.app-media-col {
  display: flex;
  justify-content: center;
}
.mockup-container {
  position: relative;
  width: 100%;
  max-width: 320px;
}
.phone-frame {
  border: 12px solid #212529;
  border-radius: 40px;
  height: 650px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 30px 60px rgba(0,0,0,0.15);
}
.phone-frame::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 25px;
  background: #212529;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 10;
}
.inner-screen {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 991px) {
  .app-split-grid { grid-template-columns: 1fr; gap: 60px; text-align: center; }
  .app-features { text-align: left; }
  .download-stores { justify-content: center; }
  .mockup-container { max-width: 280px; }
  .phone-frame { height: 580px; }
}
</style>
