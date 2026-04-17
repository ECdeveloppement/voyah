<template>
  <div class="titan-page">
    <!-- Hero Section -->
    <section class="titan-hero" id="hero">
      <div class="titan-hero-bg">
        <img 
          src="/assets/OFFICIALVOYAH/titan/images/sc_1.jpg" 
          alt="Voyah Titan"
          class="titan-hero-image"
        />
        <div class="titan-hero-overlay"></div>
      </div>
      <div class="titan-hero-content">
        <div class="titan-hero-inner">
          <img 
            src="/assets/OFFICIALVOYAH/titan/images/482a7b36-c15e-4508-83e5-c9b79227dbfa1770619361896.png" 
            alt="Voyah Titan"
            class="titan-hero-logo inview-animated"
          />
          <p class="titan-hero-slogan inview-animated" style="--inview-delay: 0.1s;">
            {{ textFor(t('New-era flagship six-seat SUV', 'SUV phare a six places de nouvelle generation', 'سيارة SUV رائدة بستة مقاعد من الجيل الجديد')) }}
          </p>
          <div class="titan-hero-price inview-animated" style="--inview-delay: 0.2s;">
            {{ textFor(t('Starting from RMB 379,900', 'A partir de 379 900 RMB', 'السعر يبدأ من 379,900 يوان')) }}
          </div>
          <div class="titan-hero-actions inview-animated" style="--inview-delay: 0.3s;">
            <BaseButton :to="buildPath('book-drive.html')" variant="primary" class="titan-btn-primary">
              {{ textFor(t('Book test drive', 'Reserver un essai', 'حجز تجربة قيادة')) }}
            </BaseButton>
            <BaseButton :to="buildPath('store.html')" variant="secondary" class="titan-btn-secondary">
              {{ textFor(t('Order now', 'Commander maintenant', 'اطلب الآن')) }}
            </BaseButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Chapter Navigation -->
    <ModelChapterNav :sections="chapterLinks" variant="titan" />

    <!-- Model Media Sections -->
    <ModelMediaSection
      v-for="(section, index) in mediaSections"
      :key="section.id"
      :index="index"
      :section="section"
      model-slug="titan.html"
    />

    <!-- CTA Section -->
    <section class="titan-cta">
      <div class="titan-cta-content">
        <h2 class="titan-cta-title">{{ textFor(t('Experience Voyah Titan', 'Decouvrez le Voyah Titan', 'جرب Voyah Titan')) }}</h2>
        <p class="titan-cta-subtitle">{{ textFor(t('Book a test drive today', 'Reservez un essai aujourdhui', 'احجز تجربة قيادة اليوم')) }}</p>
        <div class="titan-cta-actions">
          <BaseButton :to="buildPath('book-drive.html')" variant="primary">
            {{ textFor(t('Book test drive', 'Reserver un essai', 'حجز تجربة قيادة')) }}
          </BaseButton>
          <BaseButton :to="buildPath('store.html')" variant="secondary">
            {{ textFor(t('Find a store', 'Trouver un magasin', 'ابحث عن متجر')) }}
          </BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseButton from '~/components/common/BaseButton.vue'
import ModelChapterNav from '~/components/page/model/ModelChapterNav.vue'
import ModelMediaSection from '~/components/page/model/ModelMediaSection.vue'
import { useSiteContent } from '~/composables/useSiteContent'
import type { LocalizedText } from '~/data/site'
import type { ModelStorySection } from '~/data/modelMedia'

const { textFor, buildPath } = useSiteContent()

const t = (en: string, fr: string, ar: string): LocalizedText => ({ en, fr, ar })

// Chapter links for navigation
const chapterLinks = computed(() => [
  { id: 'hero', label: textFor(t('Overview', 'Apercu', 'نظرة عامة')) },
  { id: 'chapter-1', label: textFor(t('Luxury', 'Luxe', 'فخامة')) },
  { id: 'chapter-2', label: textFor(t('Intelligence', 'Intelligence', 'ذكاء')) },
  { id: 'chapter-3', label: textFor(t('Performance', 'Performance', 'أداء')) },
  { id: 'chapter-4', label: textFor(t('Safety', 'Securite', 'سلامة')) }
])

// Media sections from modelStorySectionMap for titan.html
const mediaSections = computed(() => {
  const sections: ModelStorySection[] = [
    {
      id: 'chapter-1',
      kicker: t('01 Luxury', '01 Luxe', '01 الفخامة'),
      title: t('Flagship Luxury', 'Luxe Phare', 'الفخامة الرائدة'),
      summary: t(
        'Titan opens with ceremonial full-size SUV proportions, a six-seat flagship posture, and a lounge-grade cabin tone shaped for premium family travel.',
        'Titan souvre avec des proportions de grand SUV ceremonielles, une posture phare a six places et une tonalite dhabitacle de niveau lounge pensee pour le voyage familial premium.',
        'تبدأ Titan بتناسبات SUV كبيرة بطابع احتفالي، ووضعية رائدة بستة مقاعد، ونبرة مقصورة فاخرة بطابع الصالون مهيأة للسفر العائلي الراقي.'
      ),
      images: [
        '/assets/OFFICIALVOYAH/titan/images/sc_2.jpg',
        '/assets/OFFICIALVOYAH/titan/images/sc_3.jpg',
        '/assets/OFFICIALVOYAH/titan/images/sc_4_1.jpg',
        '/assets/OFFICIALVOYAH/titan/images/sc_4_2.jpg',
        '/assets/OFFICIALVOYAH/titan/images/sc_6_1.jpg',
        '/assets/OFFICIALVOYAH/titan/images/sc_7_1.jpg',
        '/assets/OFFICIALVOYAH/titan/images/sc_8_1.jpg',
        '/assets/OFFICIALVOYAH/titan/images/sc_9.jpg'
      ]
    },
    {
      id: 'chapter-2',
      kicker: t('02 Intelligence', '02 Intelligence', '02 الذكاء'),
      title: t('Flagship Intelligence', 'Intelligence Phare', 'الذكاء الرائد'),
      summary: t(
        'A digital Harmony-era cockpit, Huawei-assisted driving confidence, and premium in-cabin sound stage define Titans flagship intelligence chapter.',
        'Un cockpit numerique de lere Harmony, une confiance de conduite assistee Huawei et une scene sonore premium a bord definissent le chapitre dintelligence phare de Titan.',
        'تحدد مقصورة رقمية من جيل Harmony وثقة القيادة المساعدة من Huawei ومشهد الصوت الفاخر داخل المقصورة فصل الذكاء الرائد في Titan.'
      ),
      images: [
        '/assets/OFFICIALVOYAH/titan/images/sc_20.jpg',
        '/assets/OFFICIALVOYAH/titan/images/sc_21.jpg',
        '/assets/OFFICIALVOYAH/titan/images/sc_22.jpg',
        '/assets/OFFICIALVOYAH/titan/images/sc_23.jpg',
        '/assets/OFFICIALVOYAH/titan/images/sc_11.jpg',
        '/assets/OFFICIALVOYAH/titan/images/sc_13_1.jpg'
      ],
      videos: ['/voyah-resources/images/car/titan/video_01.mp4']
    },
    {
      id: 'chapter-3',
      kicker: t('03 Performance', '03 Performance', '03 الأداء'),
      title: t('Flagship Performance', 'Performance Phare', 'الأداء الرائد'),
      summary: t(
        'A million-class comfort chassis, strong road-to-road capability, and long-range composure shape Titan into a calm yet forceful flagship SUV.',
        'Un chassis confort de classe million, de solides capacites multi-usage et une grande serenite dautonomie faconnent Titan en SUV phare a la fois calme et affirme.',
        'يشكل هيكل راحة من فئة المليون وقدرات قوية على مختلف الطرق وثبات مدى طويل Titan كسيارة SUV رائدة هادئة لكنها قوية الحضور.'
      ),
      images: [
        '/assets/OFFICIALVOYAH/titan/images/sc_25.jpg',
        '/assets/OFFICIALVOYAH/titan/images/sc_27_1.jpg',
        '/assets/OFFICIALVOYAH/titan/images/sc_28.jpg',
        '/assets/OFFICIALVOYAH/titan/images/sc_29.jpg',
        '/assets/OFFICIALVOYAH/titan/images/sc_30.jpg',
        '/assets/OFFICIALVOYAH/titan/images/sc_31.jpg'
      ],
      videos: ['/voyah-resources/images/car/titan/video_04.mp4']
    },
    {
      id: 'chapter-4',
      kicker: t('04 Safety', '04 Securite', '04 السلامة'),
      title: t('Flagship Safety', 'Securite Phare', 'السلامة الرائدة'),
      summary: t(
        'Reinforced body architecture, layered battery shielding, and full-cabin occupant protection complete Titan with flagship-level family security assurance.',
        'Une architecture de caisse renforcee, une protection batterie multicouche et une protection complete des occupants finalisent Titan avec une assurance de securite familiale de niveau phare.',
        'تُكمل بنية الهيكل المعززة وحماية البطارية متعددة الطبقات وحماية الركاب الشاملة Titan بثقة سلامة عائلية على مستوى الطرازات الرائدة.'
      ),
      images: [
        '/assets/OFFICIALVOYAH/titan/images/sc_32.jpg',
        '/assets/OFFICIALVOYAH/titan/images/sc_33_1.jpg',
        '/assets/OFFICIALVOYAH/titan/images/sc_33_2.jpg',
        '/assets/OFFICIALVOYAH/titan/images/sc_34_1.jpg',
        '/assets/OFFICIALVOYAH/titan/images/sc_35_1.jpg',
        '/assets/OFFICIALVOYAH/titan/images/sc_35_2.jpg'
      ]
    }
  ]

  return sections.map(section => ({
    id: section.id,
    kicker: section.kicker ? textFor(section.kicker) : undefined,
    title: textFor(section.title),
    summary: textFor(section.summary),
    image: section.images[0],
    images: section.images,
    videos: section.videos,
    details: [
      { title: textFor(section.title), summary: textFor(section.summary) }
    ],
    kind: (section.images.length > 3 ? 'carousel' : 'image') as 'carousel' | 'image' | 'banner',
    slides: section.images.map((img, idx) => ({
      image: img,
      title: textFor(section.title),
      summary: textFor(section.summary),
      video: idx === 0 ? section.videos?.[0] : undefined
    }))
  }))
})
</script>

<style scoped>
.titan-page {
  background: #fff;
  scroll-snap-type: y mandatory;
}

.titan-hero {
  position: relative;
  height: 100vh;
  min-height: 700px;
  overflow: hidden;
  scroll-snap-align: start;
}

.titan-hero-bg {
  position: absolute;
  inset: 0;
}

.titan-hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.titan-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(5, 8, 12, 0.1) 0%,
    rgba(5, 8, 12, 0.4) 50%,
    rgba(5, 8, 12, 0.7) 100%
  );
}

.titan-hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 20px 40px;
}

.titan-hero-inner {
  text-align: center;
  color: #fff;
}

.titan-hero-logo {
  width: min(380px, 60vw);
  margin-bottom: 24px;
  filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.3));
}

.titan-hero-slogan {
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  letter-spacing: 0.15em;
  margin-bottom: 16px;
  color: rgba(255, 255, 255, 0.9);
}

.titan-hero-price {
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 500;
  margin-bottom: 32px;
  color: rgba(255, 255, 255, 0.85);
}

.titan-hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.titan-btn-primary {
  background: rgba(255, 255, 255, 0.95);
  color: #101720;
  border: none;
  min-width: 160px;
}

.titan-btn-primary:hover {
  background: #fff;
  transform: translateY(-2px);
}

.titan-btn-secondary {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  min-width: 160px;
}

.titan-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.6);
}

.titan-cta {
  padding: 100px 20px;
  background: linear-gradient(135deg, #101720 0%, #1a2632 100%);
  text-align: center;
  scroll-snap-align: start;
}

.titan-cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.titan-cta-title {
  font-size: clamp(2rem, 4vw, 3rem);
  color: #fff;
  margin-bottom: 16px;
  font-weight: 600;
}

.titan-cta-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 32px;
}

.titan-cta-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .titan-hero {
    min-height: 600px;
  }
  
  .titan-hero-content {
    padding: 100px 16px 32px;
  }
  
  .titan-cta {
    padding: 60px 16px;
  }
}
</style>
