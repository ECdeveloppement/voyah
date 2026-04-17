<template>
  <div class="titan-be-page">
    <!-- Hero Section -->
    <section class="titan-be-hero" id="hero">
      <div class="titan-be-hero-bg">
        <img 
          src="/assets/OFFICIALVOYAH/titanblackediditon/images/sc_1.jpg" 
          alt="Voyah Titan Black Edition"
          class="titan-be-hero-image"
        />
        <div class="titan-be-hero-overlay"></div>
      </div>
      <div class="titan-be-hero-content">
        <div class="titan-be-hero-inner">
          <img 
            src="/assets/OFFICIALVOYAH/titanblackediditon/images/2d3ebdb7-6f35-4bfd-b929-d858d5cb3a351773729769599.png" 
            alt="Voyah Titan Black Edition"
            class="titan-be-hero-logo inview-animated"
          />
          <p class="titan-be-hero-slogan inview-animated" style="--inview-delay: 0.1s;">
            {{ textFor(heroSlogan) }}
          </p>
          <div class="titan-be-hero-price inview-animated" style="--inview-delay: 0.2s;">
            {{ textFor(priceText) }}
          </div>
          <div class="titan-be-hero-actions inview-animated" style="--inview-delay: 0.3s;">
            <BaseButton :to="buildPath('book-drive.html')" variant="primary" class="titan-be-btn-primary">
              {{ textFor(bookDriveText) }}
            </BaseButton>
            <BaseButton :to="buildPath('store.html')" variant="secondary" class="titan-be-btn-secondary">
              {{ textFor(orderNowText) }}
            </BaseButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Chapter Navigation -->
    <ModelChapterNav :sections="chapterLinks" variant="titan-be" />

    <!-- Section 1: Heavy Sword Without Edge -->
    <section class="titan-be-section-full" id="section1" style="background-image: url('/assets/OFFICIALVOYAH/titanblackediditon/images/sc_2.jpg')">
      <div class="titan-be-section-content">
        <h2 class="titan-be-section-title inview-animated">{{ textFor(section1Title) }}</h2>
        <p class="titan-be-section-subtitle inview-animated" style="--inview-delay: 0.1s;">{{ textFor(section1Subtitle) }}</p>
      </div>
    </section>

    <!-- Section 1 Carousel -->
    <section class="titan-be-carousel-section" id="section1-carousel">
      <ModelMediaSection :index="0" :section="section1Media" model-slug="titan_blackedition.html" />
    </section>

    <!-- Carbon Fiber Gallery -->
    <section class="titan-be-gallery-section" id="carbon-fiber">
      <h3 class="titan-be-gallery-title inview-animated">{{ textFor(carbonFiberTitle) }}</h3>
      <p class="titan-be-gallery-subtitle inview-animated">{{ textFor(carbonFiberSubtitle) }}</p>
      <div class="titan-be-gallery-grid">
        <div v-for="(img, idx) in carbonFiberImages" :key="idx" class="titan-be-gallery-item">
          <img :src="img" :alt="`Carbon Fiber ${idx + 1}`" />
        </div>
      </div>
    </section>

    <!-- Section 2: Black Ink Flowing Light -->
    <section class="titan-be-section-full" id="section2" style="background-image: url('/assets/OFFICIALVOYAH/titanblackediditon/images/sc_8.jpg')">
      <div class="titan-be-section-content">
        <h2 class="titan-be-section-title inview-animated">{{ textFor(section2Title) }}</h2>
        <p class="titan-be-section-subtitle inview-animated" style="--inview-delay: 0.1s;">{{ textFor(section2Subtitle) }}</p>
      </div>
    </section>

    <!-- Section 2 Carousel -->
    <section class="titan-be-carousel-section" id="section2-carousel">
      <ModelMediaSection :index="1" :section="section2Media" model-slug="titan_blackedition.html" />
    </section>

    <!-- Section 3: Global Circulation -->
    <section class="titan-be-section-full" id="section3" style="background-image: url('/assets/OFFICIALVOYAH/titanblackediditon/images/sc_15.jpg')">
      <div class="titan-be-section-content">
        <h2 class="titan-be-section-title inview-animated">{{ textFor(section3Title) }}</h2>
        <p class="titan-be-section-subtitle inview-animated" style="--inview-delay: 0.1s;">{{ textFor(section3Subtitle) }}</p>
      </div>
    </section>

    <!-- Harmony Space 5 -->
    <section class="titan-be-harmony-section" id="harmony">
      <h3 class="titan-be-harmony-title inview-animated">{{ textFor(harmonyTitle) }}</h3>
      <div class="titan-be-harmony-image">
        <img src="/assets/OFFICIALVOYAH/titanblackediditon/images/sc_16_1.jpg" alt="Harmony Space 5" class="inview-animated" />
      </div>
      <div class="titan-be-harmony-features">
        <div v-for="(feature, idx) in harmonyFeatures" :key="idx" class="titan-be-harmony-feature">
          <h4>{{ textFor(feature.title) }}</h4>
          <p>{{ textFor(feature.desc) }}</p>
        </div>
      </div>
    </section>

    <!-- Section 4: All-Weather -->
    <section class="titan-be-section-full" id="section4" style="background-image: url('/assets/OFFICIALVOYAH/titanblackediditon/images/sc_17.jpg')">
      <div class="titan-be-section-content">
        <h2 class="titan-be-section-title inview-animated">{{ textFor(section4Title) }}</h2>
        <p class="titan-be-section-subtitle inview-animated" style="--inview-delay: 0.1s;">{{ textFor(section4Subtitle) }}</p>
      </div>
    </section>

    <!-- Section 4 Carousel -->
    <section class="titan-be-carousel-section" id="section4-carousel">
      <ModelMediaSection :index="2" :section="section4Media" model-slug="titan_blackedition.html" />
    </section>

    <!-- Section 5: All-Dimensional Safety -->
    <section class="titan-be-section-full" id="section5" style="background-image: url('/assets/OFFICIALVOYAH/titanblackediditon/images/sc_20.jpg')">
      <div class="titan-be-section-content">
        <h2 class="titan-be-section-title inview-animated">{{ textFor(section5Title) }}</h2>
        <p class="titan-be-section-subtitle inview-animated" style="--inview-delay: 0.1s;">{{ textFor(section5Subtitle) }}</p>
      </div>
    </section>

    <!-- Section 5 Carousel -->
    <section class="titan-be-carousel-section" id="section5-carousel">
      <ModelMediaSection :index="3" :section="section5Media" model-slug="titan_blackedition.html" />
    </section>

    <!-- Million-Class Driving -->
    <section class="titan-be-harmony-section" id="driving">
      <h3 class="titan-be-harmony-title inview-animated">{{ textFor(drivingTitle) }}</h3>
      <div class="titan-be-harmony-image">
        <img src="/assets/OFFICIALVOYAH/titanblackediditon/images/sc_22_1.jpg" alt="Million-Class Driving" class="inview-animated" />
      </div>
      <div class="titan-be-harmony-features">
        <div v-for="(feature, idx) in drivingFeatures" :key="idx" class="titan-be-harmony-feature">
          <h4>{{ textFor(feature.title) }}</h4>
          <p>{{ textFor(feature.desc) }}</p>
        </div>
      </div>
    </section>

    <!-- Million-Class Chassis -->
    <section class="titan-be-carousel-section" id="chassis">
      <h3 class="titan-be-gallery-title inview-animated">{{ textFor(chassisTitle) }}</h3>
      <ModelMediaSection :index="4" :section="chassisMedia" model-slug="titan_blackedition.html" />
    </section>

    <!-- CTA Section -->
    <section class="titan-be-cta">
      <div class="titan-be-cta-content">
        <h2 class="titan-be-cta-title">{{ textFor(ctaTitle) }}</h2>
        <p class="titan-be-cta-subtitle">{{ textFor(ctaSubtitle) }}</p>
        <div class="titan-be-cta-actions">
          <BaseButton :to="buildPath('book-drive.html')" variant="primary">
            {{ textFor(bookDriveText) }}
          </BaseButton>
          <BaseButton :to="buildPath('store.html')" variant="secondary">
            {{ textFor(findStoreText) }}
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
import type { LocalizedText, ModelStorySection } from '~/data/modelMedia'

const { textFor, buildPath } = useSiteContent()

const t = (en: string, fr: string, ar: string): LocalizedText => ({ en, fr, ar })

// Hero texts
const heroSlogan = t('Black ink reveals Mount Tai, vision determines the universe', "L'encre noire révèle le Mont Tai, la vision détermine l'univers", 'الحبر الأسود يكشف جبل الطائش، والرؤية تحدد الكون')
const priceText = t('Starting from RMB 509,900', 'À partir de 509 900 RMB', 'السعر يبدأ من 509,900 يوان')
const bookDriveText = t('Book test drive', 'Réserver un essai', 'حجز تجربة قيادة')
const orderNowText = t('Order now', 'Commander maintenant', 'اطلب الآن')
const findStoreText = t('Find a store', 'Trouver un magasin', 'ابحث عن متجر')

// Chapter links
const chapterLinks = computed(() => [
  { id: 'hero', label: textFor(t('Overview', 'Aperçu', 'نظرة عامة')) },
  { id: 'section1', label: textFor(t('Design', 'Design', 'التصميم')) },
  { id: 'section2', label: textFor(t('Interior', 'Intérieur', 'الداخلية')) },
  { id: 'section3', label: textFor(t('Intelligence', 'Intelligence', 'الذكاء')) },
  { id: 'section4', label: textFor(t('ADAS', 'ADAS', 'نظام المساعدة')) },
  { id: 'section5', label: textFor(t('Safety', 'Sécurité', 'الأمان')) }
])

// Section 1
const section1Title = t('Heavy Sword Without Edge, Self-Momentum', 'Épée lourd sans tranchant, momentum propre', 'السيف الثقيل بدون حد ، زخم ذاتي')
const section1Subtitle = t('The hero hides in form', 'Le héros se cache dans la forme', 'البطل يختبي في الشكل')

// Section 2
const section2Title = t('Black Ink Flowing Light, Cinnabar Highlight', 'Encre noire lumière fluide, rehaut cinabre', 'الحبر الأسود المتدفق، تلميع بالازورد')
const section2Subtitle = t('The hero hides in form', 'Le héros se cache dans la forme', 'البطل يختبي في الشكل')

// Section 3
const section3Title = t('Global Circulation, All Things Connected', 'Circulation globale, tout connecté', 'التدفق العالمي، جميع الأشياء متصلة')
const section3Subtitle = t('The hero is wise at heart', 'Le héros est sage de cœur', 'البطل حكيم في القلب')

// Section 4
const section4Title = t('All-Weather, All-Direction, All-Target', 'Tous temps, toutes directions, tous objectifs', 'جميع أحوال الطقس، جميع الاتجاهات، جميع الأهداف')
const section4Subtitle = t('The hero is wise at heart', 'Le héros est sage de cœur', 'البطل حكيم في القلب')

// Section 5
const section5Title = t('All-Dimensional Safety, Comprehensive Protection', 'Sécurité tous azimuts, protection complète', 'أمان شامل، حماية شاملة')
const section5Subtitle = t('The hero hides in the edge', 'Le héros se cache dans le tranchant', 'البطل يختبي في الحد')

// Carbon Fiber
const carbonFiberTitle = t('Carbon Fiber Kit', 'Kit fibre de carbone', 'طقم ألياف كاربون فايبر')
const carbonFiberSubtitle = t('Exclusive bespoke craftsmanship, 0.8m² precision layout throughout the vehicle', 'Façonnage sur mesure exclusif, disposition précise de 0,8m² dans tout le véhicule', 'حرافة خاصة حصرية، تصميم دقيق 0.8م² في جميع أنحاء المركبة')

const carbonFiberImages = [
  '/assets/OFFICIALVOYAH/titanblackediditon/images/swiper_5_1.jpg',
  '/assets/OFFICIALVOYAH/titanblackediditon/images/swiper_5_2.jpg',
  '/assets/OFFICIALVOYAH/titanblackediditon/images/swiper_5_3.jpg',
  '/assets/OFFICIALVOYAH/titanblackediditon/images/swiper_5_4.jpg'
]

// Harmony Space
const harmonyTitle = t('Harmony Space 5 Cockpit', 'Cockpit Harmony Space 5', 'مقصورة هارموني سبيس 5')

const harmonyFeatures = [
  {
    title: t('Seamless Connection', 'Connexion sans couture', 'اتصال سلس'),
    desc: t('Seamless handover when entering/exiting, navigation uninterrupted, calls uninterrupted, entertainment uninterrupted', 'Transfert sans couture en entrant/sortant, navigation ininterrompue, appels ininterrompus, divertissement ininterrompu', 'انتقال سلس عند الدخول/الخروج، الاتجاه غير مقطوع، المكالمات غير مقطوعة')
  },
  {
    title: t('Super Desktop 2.0', 'Super Bureau 2.0', 'سوبر ديسكتوب 2.0'),
    desc: t('50,000+ mobile apps one-click to car, convenient and satisfying', '50 000+ applications mobiles en un clic dans la voiture, pratique et satisfaisant', '+50,000 تطبيق هاتف بنقرة واحدة إلى السيارة، مناسب ومريح')
  },
  {
    title: t('Hspace-Link Smart Connection', 'Connexion intelligente Hspace-Link', 'اتصال ذكي Hspace-Link'),
    desc: t('Heterogeneous control, full-screen experience, supports tablet in car', 'Contrôle hétérogène, expérience plein écran, supporte tablette dans la voiture', 'تحكم مختلف، تجربة شاشة كاملة، دعم الجهاز اللوحي في السيارة')
  }
]

// Driving
const drivingTitle = t('Million-Class Driving, Extraordinary Luxury', 'Conduite million-classe, luxe extraordinaire', 'قيادة فئة المليون، فخامة استثنائية')

const drivingFeatures = [
  {
    title: t('Three-Chamber Air Suspension + EDC Magic Carpet', 'Suspension pneumatique triple chambre + tapis magique EDC', 'نظام تعليق هوائي بـ3 غرف + سجادة سحرية EDC'),
    desc: t('Suspension height and stiffness adjustment, complex road conditions like walking on flat ground', 'Hauteur et rigidité de suspension ajustables, conditions de route complexes comme marcher sur du plat', 'تعديل ارتفاع وصلابة التعليق، طرق معقدة كالمشي على أرض مستوية')
  },
  {
    title: t('Bidirectional 16° Rear Wheel Steering', 'Direction bidirectionnelle 16° roues arrière', 'توجيه خلفي ثنائي بـ16°'),
    desc: t('Large car also agile, easy parking, free turning', 'Grande voiture aussi agile, stationnement facile, virage libre', 'سيارة كبيرة لكنها رشيقة، وقف سهل، انعطاف حر')
  },
  {
    title: t('High-Performance Brand Silent Tires', 'Pneus silencieux de marque haute performance', 'إطارات صامتة عالمية الأداء'),
    desc: t('Strong support, stability and precision united', 'Support fort, stabilité et précision unis', 'دعم قوي، استقرار ودقة متماستان')
  }
]

// Chassis
const chassisTitle = t('Million-Class Chassis, Mountains and Seas Composed', 'Châssis million-classe, montagnes et mers composés', 'هيكل فئة المليون، جبال وبحار برواح مرتاحة')

// CTA
const ctaTitle = t('Experience Voyah Titan Black Edition', 'Découvrez le Voyah Titan Black Edition', 'جرب Voyah Titan الإصدار الأسود')
const ctaSubtitle = t('Book a test drive today', "Réservez un essai aujourd'hui", 'احجز تجربة قيادة اليوم')

// Media sections
const section1Media = computed<ModelStorySection>(() => ({
  id: 'section1-carousel',
  kind: 'carousel',
  kicker: textFor(t('01 Design', '01 Design', '01 التصميم')),
  title: textFor(t('Exclusive Ink-Black Exterior', 'Extérieur exclusif noir encre', 'خارجي أسود حصري')),
  summary: textFor(t('A complete black outfit, all sharpness hidden', 'Une tenue noire complète, tous les tranchants cachés', 'زي أسود كامل، جميع الحدود مخفية')),
  image: '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_3_1.jpg',
  images: [
    '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_3_1.jpg',
    '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_3_2.jpg',
    '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_3_3.jpg'
  ],
  slides: [
    { image: '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_3_1.jpg', title: textFor(t('Exclusive Ink-Black Exterior Kit', 'Kit extérieur exclusif noir encre', 'طقم خارجي أسود حصري')), summary: textFor(t('A complete black outfit, all sharpness hidden', 'Une tenue noire complète, tous les tranchants cachés', 'زي أسود كامل، جميع الحدود مخفية')) },
    { image: '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_3_2.jpg', title: textFor(t('Profound Mirror Grille', 'Grille miroir profonde', 'شبكة المراة العميقة')), summary: textFor(t('Full mirror high-gloss blackening process', 'Processus de noircissement haute brillance miroir complet', 'عملية تسويد باللمع العالي لامع المراة')) },
    { image: '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_3_3.jpg', title: textFor(t('Heaven and Earth Star Hub', 'Moyeu étoilé ciel et terre', 'عجلة نجم السماء والأرض')), summary: textFor(t('World first, 10 core processes, exclusive PVD bright black plating', 'Premier mondial, 10 processus centraux, placage PVD noir brillant exclusif', 'أول مرة في العالم، 10 عمليات أساسية، طلاء PVD أسود لامع حصري')) }
  ]
}))

const section2Media = computed<ModelStorySection>(() => ({
  id: 'section2-carousel',
  kind: 'carousel',
  kicker: textFor(t('02 Interior', '02 Intérieur', '02 الداخلية')),
  title: textFor(t('Cinnabar Interior', 'Intérieur cinabre', 'داخلية الازورد')),
  summary: textFor(t('In endless black ink, only a heart remains', "Dans l'encre noire sans fin, seul un peu de cœur reste", 'في الحبر الأسود البدون نهاية، لا يبقى إلا قلب صغير')),
  image: '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_9_1.jpg',
  images: [
    '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_9_1.jpg',
    '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_9_2.jpg',
    '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_9_3.jpg',
    '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_9_4.jpg'
  ],
  slides: [
    { image: '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_9_1.jpg', title: textFor(t('Cinnabar Interior Color', 'Couleur intérieure cinabre', 'لون داخلية الازورد')), summary: textFor(t('In endless black ink, only a heart remains', "Dans l'encre noire sans fin, seul un peu de cœur reste", 'في الحبر الأسود البدون نهاية، لا يبقى إلا قلب صغير')) },
    { image: '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_9_2.jpg', title: textFor(t('Armor Quilted Seats', 'Sièges matelassés armure', 'مقاعد مخيطة بشل الدرع')), summary: textFor(t('Layered line design, quilted symmetrical arrangement', 'Design lignes en couches, arrangement matelassé symétrique', 'تصميم خطوط مرتبة، ترتيب مخيط متماثل')) },
    { image: '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_9_3.jpg', title: textFor(t('Flowing Cloud Ink Panel', 'Panneau encre nuage fluide', 'لوح حبر السحاب المتدفق')), summary: textFor(t('4-layer precision pressing process', 'Processus de pressage précision 4 couches', 'عملية ضغط دقيقة بـ4 طبقات')) },
    { image: '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_9_4.jpg', title: textFor(t('Black Crystal Buttons', 'Boutons cristal noir', 'أزرار الكريستال الأسود')), summary: textFor(t('High-quality black crystal material', 'Matériau cristal noir haute qualité', 'مادة كريستال أسود عالمية')) }
  ]
}))

const section4Media = computed<ModelStorySection>(() => ({
  id: 'section4-carousel',
  kind: 'carousel',
  kicker: textFor(t('04 ADAS', '04 ADAS', '04 نظام المساعدة')),
  title: textFor(t('All-Weather Full-Scene Perception', 'Perception tous temps toutes scènes', 'إدراك شامل لجميع أحوال الطقس')),
  summary: textFor(t('34 high-precision sensors, eyes in all directions, ears in all directions', '34 capteurs haute précision, yeux dans toutes les directions, oreilles dans toutes les directions', '34 حساس دقيق، عيون في جميع الاتجاهات، آذان في جميع الاتجاهات')),
  image: '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_18_1.jpg',
  images: [
    '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_18_1.jpg',
    '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_18_2.jpg'
  ],
  slides: [
    { image: '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_18_1.jpg', title: textFor(t('New Gen 4 Laser Radars', 'Nouvelle génération 4 radars laser', 'جيل جديد من أجهزة الليزر الأربعة')), summary: textFor(t('First mass-produced global highest line forward 896-line laser radar', 'Premier radar laser 896 lignes avant mondial de plus haute ligne en production de masse', 'أول مادة إنتاج عالمية بـ896 خط ليزر أمامي')) },
    { image: '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_18_2.jpg', title: textFor(t('34 Perception Fusion Sensors', '34 capteurs fusion perception', '34 حساس اندماج إدراك'),), summary: textFor(t('34 high-precision sensors, eyes in all directions, ears in all directions', '34 capteurs haute précision, yeux dans toutes les directions, oreilles dans toutes les directions', '34 حساس دقيق، عيون في جميع الاتجاهات، آذان في جميع الاتجاهات')) }
  ]
}))

const section5Media = computed<ModelStorySection>(() => ({
  id: 'section5-carousel',
  kind: 'carousel',
  kicker: textFor(t('05 Safety', '05 Sécurité', '05 الأمان')),
  title: textFor(t('Five-Layer Redundancy Protection', 'Protection redondance cinq couches', 'حماية بـ5 طبقات مكوّنة')),
  summary: textFor(t('Perception, braking, steering, communication, power all have redundancy', 'Perception, freinage, direction, communication, puissance ont tous de la redondance', 'الإدراك، المكابح، التوجيه، الاتصال، الطاقة لها إجهاد مكوّن')),
  image: '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_21_1.jpg',
  images: [
    '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_21_1.jpg',
    '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_21_2.jpg',
    '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_21_3.jpg',
    '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_21_4.jpg',
    '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_21_5.jpg'
  ],
  slides: [
    { image: '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_21_1.jpg', title: textFor(t('Perception Redundancy', 'Redondance perception', 'الإدراك المكوّن')), summary: textFor(t('Everything has a contingency plan', 'Tout a un plan de contingence', 'لكل شيء خطة احتياط')) },
    { image: '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_21_2.jpg', title: textFor(t('Braking Redundancy', 'Redondance freinage', 'المكابح المكوّنة')), summary: textFor(t('Everything has a contingency plan', 'Tout a un plan de contingence', 'لكل شيء خطة احتياط')) },
    { image: '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_21_3.jpg', title: textFor(t('Steering Redundancy', 'Redondance direction', 'التوجيه المكوّن')), summary: textFor(t('Everything has a contingency plan', 'Tout a un plan de contingence', 'لكل شيء خطة احتياط')) },
    { image: '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_21_4.jpg', title: textFor(t('Communication Redundancy', 'Redondance communication', 'الاتصال المكوّن')), summary: textFor(t('Everything has a contingency plan', 'Tout a un plan de contingence', 'لكل شيء خطة احتياط')) },
    { image: '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_21_5.jpg', title: textFor(t('Power Redundancy', 'Redondance puissance', 'الطاقة المكوّنة')), summary: textFor(t('Everything has a contingency plan', 'Tout a un plan de contingence', 'لكل شيء خطة احتياط')) }
  ]
}))

const chassisMedia = computed<ModelStorySection>(() => ({
  id: 'chassis-carousel',
  kind: 'carousel',
  kicker: textFor(t('Chassis', 'Châssis', 'هيكل')),
  title: textFor(t('Million-Class Chassis', 'Châssis million-classe', 'هيكل فئة المليون')),
  summary: textFor(t('Full aluminum alloy aviation chassis, lightweight design enhances driving comfort', 'Châssis aviation alliage aluminium complet, design léger améliore confort de conduite', 'هيكل طيران ألمنيوم كامل، تصميم خفيف الوزن يحسن راحة القيادة')),
  image: '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_23_1.jpg',
  images: [
    '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_23_1.jpg',
    '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_23_2.jpg',
    '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_23_3.jpg'
  ],
  slides: [
    { image: '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_23_1.jpg', title: textFor(t('Full Aluminum Aviation Chassis', 'Châssis aviation aluminium complet', 'هيكل طيران ألمنيوم كامل')), summary: textFor(t('Lightweight design enhances driving comfort', 'Design léger améliore confort de conduite', 'تصميم خفيف الوزن يحسن راحة القيادة')) },
    { image: '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_23_2.jpg', title: textFor(t('Front Double Wishbone + Rear Five-Link', 'Double triangulation avant + 5 bras arrière', 'ذراع المنشأة الأمامية المزدوجة + 5 روابط خلفية')), summary: textFor(t('Balanced handling and refined filtering', 'Manipulation équilibrée et filtration raffinée', 'تحكم متوازن وتصفية مرشحة')) },
    { image: '/assets/OFFICIALVOYAH/titanblackediditon/images/sc_23_3.jpg', title: textFor(t('Full Series Intelligent Electric 4WD', '4WD électrique intelligent série complète', 'دفع رباعي كهربائي ذكي للكامل')), summary: textFor(t('Front and rear dual motor layout, 0-100% intelligent stepless adjustment', 'Disposition double moteur avant/arrière, ajustement continu intelligent 0-100%', 'توزيع محركين أمامي وخلفي، تعديل ذكي بدون فتح من 0-100%')) }
  ]
}))
</script>

<style scoped>
.titan-be-page {
  background: #000;
  color: #fff;
}

.titan-be-hero {
  position: relative;
  height: 100vh;
  min-height: 700px;
  overflow: hidden;
}

.titan-be-hero-bg {
  position: absolute;
  inset: 0;
}

.titan-be-hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.titan-be-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(5, 8, 12, 0.3) 0%,
    rgba(5, 8, 12, 0.5) 50%,
    rgba(5, 8, 12, 0.8) 100%
  );
}

.titan-be-hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 20px 40px;
}

.titan-be-hero-inner {
  text-align: center;
  color: #fff;
}

.titan-be-hero-logo {
  width: min(400px, 65vw);
  margin-bottom: 24px;
  filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.4));
}

.titan-be-hero-slogan {
  font-size: clamp(1.3rem, 2.8vw, 1.8rem);
  letter-spacing: 0.2em;
  margin-bottom: 16px;
  font-weight: 300;
}

.titan-be-hero-price {
  font-size: clamp(1.1rem, 2.2vw, 1.4rem);
  font-weight: 500;
  margin-bottom: 32px;
  color: rgba(255, 255, 255, 0.9);
}

.titan-be-hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.titan-be-btn-primary {
  background: rgba(255, 255, 255, 0.95);
  color: #101720;
  border: none;
  min-width: 160px;
}

.titan-be-btn-primary:hover {
  background: #fff;
  transform: translateY(-2px);
}

.titan-be-btn-secondary {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.5);
  min-width: 160px;
}

.titan-be-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.7);
}

/* Full-screen sections */
.titan-be-section-full {
  position: relative;
  height: 100vh;
  min-height: 600px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.titan-be-section-content {
  text-align: center;
  color: #fff;
  padding: 20px;
}

.titan-be-section-title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 600;
  margin-bottom: 16px;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
}

.titan-be-section-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  opacity: 0.9;
  letter-spacing: 0.15em;
}

/* Carousel sections */
.titan-be-carousel-section {
  padding: 80px 0;
  background: #000;
}

/* Gallery section */
.titan-be-gallery-section {
  padding: 80px 20px;
  background: #0a0a0a;
  text-align: center;
}

.titan-be-gallery-title {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  margin-bottom: 12px;
  font-weight: 600;
  color: #fff;
}

.titan-be-gallery-subtitle {
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  opacity: 0.8;
  margin-bottom: 40px;
  color: rgba(255, 255, 255, 0.8);
}

.titan-be-gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.titan-be-gallery-item {
  border-radius: 12px;
  overflow: hidden;
}

.titan-be-gallery-item img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.titan-be-gallery-item:hover img {
  transform: scale(1.05);
}

/* Harmony section */
.titan-be-harmony-section {
  padding: 80px 20px;
  background: #000;
  text-align: center;
}

.titan-be-harmony-title {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  margin-bottom: 40px;
  font-weight: 600;
  color: #fff;
}

.titan-be-harmony-image {
  margin-bottom: 40px;
}

.titan-be-harmony-image img {
  width: 100%;
  max-width: 1200px;
  height: auto;
  border-radius: 12px;
}

.titan-be-harmony-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.titan-be-harmony-feature {
  padding: 20px;
  color: #fff;
}

.titan-be-harmony-feature h4 {
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  margin-bottom: 10px;
  font-weight: 600;
}

.titan-be-harmony-feature p {
  font-size: clamp(0.85rem, 1.3vw, 1rem);
  opacity: 0.8;
  line-height: 1.5;
}

/* CTA Section */
.titan-be-cta {
  padding: 100px 20px;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  text-align: center;
  color: #fff;
}

.titan-be-cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.titan-be-cta-title {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 16px;
  font-weight: 600;
}

.titan-be-cta-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  opacity: 0.8;
  margin-bottom: 32px;
}

.titan-be-cta-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .titan-be-hero {
    min-height: 600px;
  }
  
  .titan-be-hero-content {
    padding: 100px 16px 32px;
  }
  
  .titan-be-section-full {
    min-height: 400px;
  }
  
  .titan-be-gallery-item img {
    height: 200px;
  }
}
</style>
