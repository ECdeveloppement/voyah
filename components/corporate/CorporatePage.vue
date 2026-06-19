<template>
  <div class="custom-page corporate-page">
    <PageHero
      :eyebrow="textFor(page.eyebrow)"
      :title="textFor(page.title)"
      :summary="textFor(page.summary)"
      image="/voyah-resources/brand/about_hero.jpg"
      align="start"
      :compact="false"
    />

    <section class="vision-mission section-shell">
      <div class="container">
        <div class="vm-grid">
           <div class="vm-card" data-reveal>
              <div class="vm-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#c59c62" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </div>
              <h3>{{ textFor(t('Our Vision', 'Notre Vision', 'رؤيتنا')) }}</h3>
              <p>{{ textFor(t('To be the leader in the premium new energy vehicle sector.', 'Devenir le leader du secteur des véhicules premium à énergie nouvelle.', 'أن نكون الرائد في قطاع مركبات الطاقة الجديدة الفاخرة.')) }}</p>
           </div>
           <div class="vm-card" data-reveal>
              <div class="vm-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#c59c62" stroke-width="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <h3>{{ textFor(t('Our Mission', 'Notre Mission', 'مهمتنا')) }}</h3>
              <p>{{ textFor(t('Providing high-end, zero-anxiety smart mobility solutions globally.', 'Fournir des solutions de mobilité intelligente haut de gamme sans anxiété à l\'échelle mondiale.', 'تقديم حلول تنقل ذكية عالية المستوى وخالية من القلق على مستوى العالم.')) }}</p>
           </div>
        </div>
      </div>
    </section>

    <!-- Interactive History Timeline -->
    <section class="corp-timeline section-shell bg-light">
      <div class="container">
         <div class="timeline-header section-title-center">
            <h2>{{ textFor(t('Milestones', 'Étapes clés', 'محطات رئيسية')) }}</h2>
         </div>
         <div class="timeline-container">
            <div class="timeline-item">
               <div class="timeline-year">2020</div>
               <div class="timeline-content">
                  <h4>{{ textFor(t('Brand Launch', 'Lancement de la marque', 'إطلاق العلامة')) }}</h4>
                  <p>{{ textFor(t('Voyah is officially unveiled in Wuhan, China.', 'Voyah est officiellement dévoilée à Wuhan, en Chine.', 'تم الكشف الرسمي عن Voyah في ووهان، الصين.')) }}</p>
               </div>
            </div>
            <div class="timeline-item">
               <div class="timeline-year">2021</div>
               <div class="timeline-content">
                  <h4>{{ textFor(t('First Delivery', 'Première livraison', 'أول تسليم')) }}</h4>
                  <p>{{ textFor(t('Delivery of the Voyah FREE marks the beginning of the journey.', 'La livraison de la Voyah FREE marque le début du parcours.', 'يمثل تسليم Voyah FREE بداية الرحلة.')) }}</p>
               </div>
            </div>
            <div class="timeline-item">
               <div class="timeline-year">2023</div>
               <div class="timeline-content">
                  <h4>{{ textFor(t('European Expansion', 'Expansion européenne', 'التوسع الأوروبي')) }}</h4>
                  <p>{{ textFor(t('Voyah enters the European market with showrooms in Norway.', 'Voyah entre sur le marché européen avec des showrooms en Norvège.', 'تدخل Voyah السوق الأوروبية بصالات عرض في النرويج.')) }}</p>
               </div>
            </div>
         </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import PageHero from '~/components/common/PageHero.vue'
import type { InfoDefinition, LocalizedText } from '~/data/site'
import { useSiteContent } from '~/composables/useSiteContent'

const t = (en: string, fr: string, ar: string): LocalizedText => ({ en, fr, ar })

const props = defineProps<{
  page: InfoDefinition
}>()

const { textFor } = useSiteContent()
</script>

<style scoped>
.custom-page { background: #fff; }
.bg-light { background: #f8f9fa; }
.vision-mission { padding: 80px 0; }
.vm-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}
.vm-card {
  padding: 50px;
  background: #fdfbf7;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.4s ease;
}
.vm-card:hover {
  transform: translateY(-5px);
}
.vm-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
}
.vm-card h3 {
  font-family: var(--font-heading);
  font-size: 2rem;
  margin-bottom: 15px;
  color: #212529;
}
.vm-card p {
  color: #6c757d;
  line-height: 1.6;
}

.timeline-header {
  text-align: center;
  margin-bottom: 60px;
}
.timeline-header h2 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
}
.timeline-container {
  max-width: 800px;
  margin: 0 auto;
  border-left: 2px solid #c59c62;
  padding-left: 40px;
  position: relative;
}
.timeline-item {
  margin-bottom: 50px;
  position: relative;
}
.timeline-item::before {
  content: '';
  position: absolute;
  left: -49px;
  top: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #c59c62;
  border: 4px solid #f8f9fa;
}
.timeline-year {
  font-size: 2rem;
  font-family: var(--font-heading);
  color: #c59c62;
  line-height: 1;
  margin-bottom: 10px;
}
.timeline-content h4 {
  font-size: 1.3rem;
  margin-bottom: 10px;
}
.timeline-content p {
  color: #6c757d;
}
</style>
