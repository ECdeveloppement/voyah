<template>
  <div class="passion-page">
    <!-- Hero Section -->
    <section class="kv-section">
      <div class="kv-bg-placeholder"></div>
      <img 
        src="/voyah-resources/images/car/passion/1920/fl01.jpg" 
        alt="Voyah Passion" 
        class="kv-bg-img"
        loading="eager"
        fetchpriority="high"
        decoding="async"
        @load="onImageLoad"
      />
      <div class="kv-content">
        <div class="kv-model-info inview-child inview-animated" style="--inview-delay: 0.3s;">
          <h1 class="kv-model-name">Voyah Passion</h1>
        </div>
        <p class="kv-slogan inview-child inview-animated" style="--inview-delay: 0.4s;">
          {{ textFor({ en: 'New Executive Electric Flagship', fr: 'Nouveau Flagship Électrique Exécutif', ar: 'رائدة كهربائية تنفيذية جديدة' }) }}
        </p>
        <div class="kv-btns inview-child inview-animated" style="--inview-delay: 0.5s;">
          <NuxtLink :to="buildPath('configuration-detail') + '?carModel=passion'" class="voyah-button voyah-button--more voyah-button--dark voyah-button--plain">
            <span class="voyah-button__text">{{ textFor({ en: 'Configuration', fr: 'Configuration', ar: 'التكوين' }) }}</span>
          </NuxtLink>
          <NuxtLink :to="buildPath('book-drive.html')" class="voyah-button voyah-button--more voyah-button--dark voyah-button--plain">
            <span class="voyah-button__text">{{ textFor({ en: 'Book Test Drive', fr: 'Réserver un Essai', ar: 'حجز تجربة قيادة' }) }}</span>
          </NuxtLink>
                  </div>
      </div>
    </section>

    <!-- Chapter Navigation -->
    <ModelChapterNav :sections="chapterLinks" variant="passion" />

    <!-- Section 1: Executive Design -->
    <section id="section1" class="level-one" targetindex="0" ref="sectionRefs[0]">
      <div class="section-bg-placeholder"></div>
      <div class="section-bg" :style="{ backgroundImage: section1BgLoaded ? 'url(/voyah-resources/images/car/passion/1920/fl02.jpg)' : 'none' }" :class="{ loaded: section1BgLoaded }"></div>
      <div class="section-content">
        <h2 class="title inview-child inview-animated" style="--inview-delay: 0.3s;">{{ textFor({ en: 'Executive Design', fr: 'Design Exécutif', ar: 'تصميم تنفيذي' }) }}</h2>
        <p class="subTitle inview-child inview-animated" style="--inview-delay: 0.4s;">{{ textFor({ en: 'Luxury Electric Sedan Presence', fr: 'Présence de Berline Électrique de Luxe', ar: 'حضور سيارة سيدان كهربائية فاخرة' }) }}</p>
      </div>
    </section>

    <!-- Section 2: Exterior Design -->
    <section id="section2" class="common commonMax" targetindex="0" ref="sectionRefs[1]">
      <h3 class="title inview-child inview-animated" style="--inview-delay: 0.3s;">{{ textFor({ en: 'Exterior Excellence', fr: 'Excellence Extérieure', ar: 'تميز خارجي' }) }}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translateX(-${currentSlide.exterior * 100}%)` }">
          <div class="swiper-slide" v-for="(slide, idx) in exteriorSlides" :key="idx">
            <div class="img-container">
              <img :src="slide.image" :alt="slide.title" class="slide-img" loading="lazy" decoding="async" />
            </div>
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.title }}</p>
              <p class="desc-content">{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination inview-child">
        <div 
          v-for="(_, idx) in exteriorSlides" 
          :key="idx"
          class="pagination-bullet"
          :class="{ active: currentSlide.exterior === idx }"
          @click="currentSlide.exterior = idx"
        ></div>
      </div>
      <div class="description-pagination-wrap inview-child">
        <div class="description-list">
          <div 
            v-for="(slide, idx) in exteriorSlides" 
            :key="idx"
            class="description-item"
            :class="{ active: currentSlide.exterior === idx }"
            @click="currentSlide.exterior = idx"
          >
            <p class="description-title">{{ slide.title }}</p>
          </div>
        </div>
        <p class="description-content">{{ exteriorSlides[currentSlide.exterior].desc }}</p>
      </div>
    </section>

    <!-- Section 3: Interior Luxury -->
    <section id="section3" class="level-one" targetindex="0" ref="sectionRefs[2]">
      <div class="section-bg-placeholder"></div>
      <div class="section-bg" :style="{ backgroundImage: section3BgLoaded ? 'url(/voyah-resources/images/car/passion/1920/fl03.jpg)' : 'none' }" :class="{ loaded: section3BgLoaded }"></div>
      <div class="section-content">
        <h2 class="title inview-child inview-animated" style="--inview-delay: 0.3s;">{{ textFor({ en: 'Interior Luxury', fr: 'Luxe Intérieur', ar: 'فخامة داخلية' }) }}</h2>
        <p class="subTitle inview-child inview-animated" style="--inview-delay: 0.4s;">{{ textFor({ en: 'Executive Cabin Experience', fr: 'Expérience de Cabine Exécutive', ar: 'تجربة مقصورة تنفيذية' }) }}</p>
      </div>
    </section>

    <!-- Interior Features -->
    <section class="common commonMax">
      <h3 class="title inview-child inview-animated">{{ textFor({ en: 'Premium Interior Features', fr: 'Caractéristiques Intérieures Premium', ar: 'ميزات داخلية فاخرة' }) }}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translateX(-${currentSlide.interior * 100}%)` }">
          <div class="swiper-slide" v-for="(slide, idx) in interiorSlides" :key="idx">
            <div class="img-container">
              <img :src="slide.image" :alt="slide.title" class="slide-img" loading="lazy" decoding="async" />
            </div>
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.title }}</p>
              <p class="desc-content">{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination inview-child">
        <div 
          v-for="(_, idx) in interiorSlides" 
          :key="idx"
          class="pagination-bullet"
          :class="{ active: currentSlide.interior === idx }"
          @click="currentSlide.interior = idx"
        ></div>
      </div>
      <div class="description-pagination-wrap inview-child">
        <div class="description-list">
          <div 
            v-for="(slide, idx) in interiorSlides" 
            :key="idx"
            class="description-item"
            :class="{ active: currentSlide.interior === idx }"
            @click="currentSlide.interior = idx"
          >
            <p class="description-title">{{ slide.title }}</p>
          </div>
        </div>
        <p class="description-content">{{ interiorSlides[currentSlide.interior].desc }}</p>
      </div>
    </section>

    <!-- Section 4: Smart Technology -->
    <section id="section4" class="level-one">
      <div class="section-bg-placeholder"></div>
      <div class="section-bg" :style="{ backgroundImage: section4BgLoaded ? 'url(/voyah-resources/images/car/passion/1920/fl04.jpg)' : 'none' }" :class="{ loaded: section4BgLoaded }"></div>
      <div class="section-content">
        <h2 class="title inview-child inview-animated">{{ textFor({ en: 'Smart Technology', fr: 'Technologie Intelligente', ar: 'تكنولوجيا ذكية' }) }}</h2>
        <p class="subTitle inview-child inview-animated">{{ textFor({ en: 'Advanced Connected Experience', fr: 'Expérience Connectée Avancée', ar: 'تجربة متصلة متطورة' }) }}</p>
      </div>
    </section>

    <!-- Tech Features -->
    <section class="common">
      <h3 class="title inview-child">{{ textFor({ en: 'Intelligent Cockpit', fr: 'Cockpit Intelligent', ar: 'مقصورة ذكية' }) }}</h3>
      <div class="single-img-container inview-child">
        <div class="img-placeholder"></div>
        <img 
          src="/voyah-resources/images/car/passion/1920/fl05.jpg" 
          alt="Smart Cockpit" 
          class="single-img" 
          loading="lazy"
          decoding="async"
          @load="onImageLoad"
        />
      </div>
      <div class="single-description inview-child">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Large Touch Display', fr: 'Grand Écran Tactile', ar: 'شاشة لمس كبيرة' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'High-resolution display with intuitive controls', fr: 'Écran haute résolution avec commandes intuitives', ar: 'شاشة عالية الدقة مع عناصر تحكم بديهية' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Voice Assistant', fr: 'Assistant Vocal', ar: 'مساعد صوتي' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Natural language processing for seamless interaction', fr: 'Traitement du langage naturel pour une interaction transparente', ar: 'معالجة لغة طبيعية للتفاعل السلس' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Section 5: Performance -->
    <section id="section5" class="level-one">
      <div class="section-bg-placeholder"></div>
      <div class="section-bg" :style="{ backgroundImage: section5BgLoaded ? 'url(/voyah-resources/images/car/passion/1920/fl06.jpg)' : 'none' }" :class="{ loaded: section5BgLoaded }"></div>
      <div class="section-content">
        <h2 class="title inview-child inview-animated">{{ textFor({ en: 'Electric Performance', fr: 'Performance Électrique', ar: 'أداء كهربائي' }) }}</h2>
        <p class="subTitle inview-child inview-animated">{{ textFor({ en: '1260km Total Range, 262km Pure Electric', fr: '1260km Autonomie Totale, 262km Tout Électrique', ar: 'مدى إجمالي 1260 كم، 262 كم كهربائي نقي' }) }}</p>
      </div>
    </section>

    <!-- Performance Features -->
    <section class="common">
      <h3 class="title inview-child">{{ textFor({ en: 'Hybrid Power System', fr: 'Système de Puissance Hybride', ar: 'نظام طاقة هجين' }) }}</h3>
      <div class="single-img-container inview-child">
        <div class="img-placeholder"></div>
        <img 
          src="/voyah-resources/images/car/passion/1920/fl07.jpg" 
          alt="Power System" 
          class="single-img" 
          loading="lazy"
          decoding="async"
          @load="onImageLoad"
        />
      </div>
      <div class="single-description inview-child">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Extended Range Technology', fr: 'Technologie d\'Autonomie Étendue', ar: 'تقنية المدى الممتد' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Advanced hybrid system for maximum efficiency', fr: 'Système hybride avancé pour une efficacité maximale', ar: 'نظام هجين متقدم لأقصى كفاءة' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Fast Charging Capability', fr: 'Capacité de Charge Rapide', ar: 'قدرة الشحن السريع' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Quick charging for minimal downtime', fr: 'Charge rapide pour un temps d\'arrêt minimal', ar: 'شحن سريع لأقل وقت توقف' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Section 6: Comfort & Safety -->
    <section id="section6" class="level-one">
      <div class="section-bg-placeholder"></div>
      <div class="section-bg" :style="{ backgroundImage: section6BgLoaded ? 'url(/voyah-resources/images/car/passion/1920/fl09.jpg)' : 'none' }" :class="{ loaded: section6BgLoaded }"></div>
      <div class="section-content">
        <h2 class="title inview-child inview-animated">{{ textFor({ en: 'Comfort & Safety', fr: 'Confort & Sécurité', ar: 'الراحة والسلامة' }) }}</h2>
        <p class="subTitle inview-child inview-animated">{{ textFor({ en: 'Premium Comfort with Advanced Safety', fr: 'Confort Premium avec Sécurité Avancée', ar: 'راحة فاخرة مع سلامة متقدمة' }) }}</p>
      </div>
    </section>

    <!-- Comfort Features -->
    <section class="common">
      <div class="single-img-container inview-child">
        <div class="img-placeholder"></div>
        <img 
          src="/voyah-resources/images/car/passion/1920/fl10.jpg" 
          alt="Interior Comfort" 
          class="single-img" 
          loading="lazy"
          decoding="async"
          @load="onImageLoad"
        />
      </div>
      <div class="single-description inview-child features-grid">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Four-Seat Climate Control', fr: 'Climatisation Quatre Places', ar: 'التحكم في المناخ لأربعة مقاعد' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Individual climate zones for each passenger', fr: 'Zones climatiques individuelles pour chaque passager', ar: 'مناطق مناخية فردية لكل راكب' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Massage Seats', fr: 'Sièges Massage', ar: 'مقاعد تدليك' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Heated, ventilated, and massaging front seats', fr: 'Sièges avant chauffants, ventilés et massants', ar: 'مقاعد أمامية مدفئة وجيدة التهوية مع تدليك' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Air Suspension', fr: 'Suspension Pneumatique', ar: 'تعليق هوائي' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Magic carpet ride comfort with adaptive damping', fr: 'Confort de conduite sur tapis magique avec amortissement adaptatif', ar: 'راحة قيادة فائقة مع تخميد تكيفي' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Advanced Safety Suite', fr: 'Suite de Sécurité Avancée', ar: 'مجموعة سلامة متقدمة' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Comprehensive safety systems with ADAS', fr: 'Systèmes de sécurité complets avec ADAS', ar: 'أنظمة سلامة شاملة مع ADAS' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Section 7: Protective Sedan Assurance -->
    <section id="section7" class="level-one">
      <div class="section-bg-placeholder"></div>
      <div class="section-bg" :style="{ backgroundImage: section7BgLoaded ? 'url(/voyah-resources/images/car/passion/1920/fln15.jpg)' : 'none' }" :class="{ loaded: section7BgLoaded }"></div>
      <div class="section-content">
        <h2 class="title inview-child inview-animated" style="--inview-delay: 0.3s;">{{ textFor({ en: 'Protective Sedan Assurance', fr: 'Assurance Berline Protectrice', ar: 'ضمان سيارة السيدان الواقية' }) }}</h2>
        <p class="subTitle inview-child inview-animated" style="--inview-delay: 0.4s;">{{ textFor({ en: 'Comprehensive Safety Suite for Peace of Mind', fr: 'Suite de Sécurité Complète pour Tranquillité d\'Esprit', ar: 'مجموعة سلامة شاملة لراحة البال' }) }}</p>
      </div>
    </section>

    <!-- Safety Features -->
    <section class="common">
      <h3 class="title inview-child">{{ textFor({ en: 'Advanced Safety Systems', fr: 'Systèmes de Sécurité Avancés', ar: 'أنظمة سلامة متقدمة' }) }}</h3>
      <div class="single-img-container inview-child">
        <div class="img-placeholder"></div>
        <img 
          src="/voyah-resources/images/car/passion/1920/fln1502.jpg" 
          alt="Safety Systems" 
          class="single-img" 
          loading="lazy"
          decoding="async"
          @load="onImageLoad"
        />
      </div>
      <div class="single-description inview-child features-grid">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '5-Star Safety Rating', fr: 'Note de Sécurité 5 Étoiles', ar: 'تصنيف سلامة 5 نجوم' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Maximum safety certification from international testing authorities', fr: 'Certification de sécurité maximale des autorités internationales d\'essais', ar: 'أعلى شهادة سلامة من هيئات الاختبار الدولية' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Intelligent Airbag System', fr: 'Système d\'Airbag Intelligent', ar: 'نظام وسائد هوائية ذكي' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Multi-stage airbags with smart deployment technology', fr: 'Airbags multi-étagés avec technologie de déploiement intelligente', ar: 'وسائد هوائية متعددة المراحل مع تقنية نشر ذكية' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'ADAS Suite', fr: 'Suite ADAS', ar: 'مجموعة ADAS' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Advanced Driver Assistance Systems with 360° monitoring', fr: 'Systèmes d\'Assistance au Conducteur Avancés avec surveillance 360°', ar: 'أنظمة مساعدة سائق متقدمة مع مراقبة 360 درجة' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Reinforced Body Structure', fr: 'Structure de Carrosserie Renforcée', ar: 'هيكل جسم مقوى' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'High-strength steel construction for optimal protection', fr: 'Construction en acier haute résistance pour une protection optimale', ar: 'بناء من الفولاذ عالي القوة لحماية مثلى' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Driver Assistance -->
    <section class="common">
      <h3 class="title inview-child">{{ textFor({ en: 'Intelligent Driver Assistance', fr: 'Assistance au Conducteur Intelligente', ar: 'مساعدة السائق الذكية' }) }}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translateX(-${currentSlide.safety * 100}%)` }">
          <div class="swiper-slide" v-for="(slide, idx) in safetySlides" :key="idx">
            <div class="img-container">
              <img :src="slide.image" :alt="slide.title" class="slide-img" loading="lazy" decoding="async" />
            </div>
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.title }}</p>
              <p class="desc-content">{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination inview-child">
        <div 
          v-for="(_, idx) in safetySlides" 
          :key="idx"
          class="pagination-bullet"
          :class="{ active: currentSlide.safety === idx }"
          @click="currentSlide.safety = idx"
        ></div>
      </div>
      <div class="description-pagination-wrap inview-child">
        <div class="description-list">
          <div 
            v-for="(slide, idx) in safetySlides" 
            :key="idx"
            class="description-item"
            :class="{ active: currentSlide.safety === idx }"
            @click="currentSlide.safety = idx"
          >
            <p class="description-title">{{ slide.title }}</p>
          </div>
        </div>
        <p class="description-content">{{ safetySlides[currentSlide.safety].desc }}</p>
      </div>
    </section>

    <!-- Color Selection -->
    <section class="common">
      <h3 class="title inview-child inview-animated">{{ textFor({ en: 'Color Selection', fr: 'Sélection de Couleur', ar: 'اختيار اللون' }) }}</h3>
      <div class="color-selection-wrapper inview-child">
        <div class="color-display">
          <img :src="carColors[currentColor].image" :alt="carColors[currentColor].name" class="color-car-img" />
        </div>
        <div class="color-options">
          <div 
            v-for="(color, index) in carColors" 
            :key="color.id"
            class="color-option"
            :class="{ active: currentColor === index }"
            @click="currentColor = index"
          >
            <div class="color-icon">
              <img :src="color.icon" :alt="color.name" class="img-icon" loading="lazy" decoding="async" />
            </div>
            <p class="color-name">{{ color.name }}</p>
          </div>
        </div>
      </div>
    </section>

      </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useSiteContent } from '~/composables/useSiteContent'
import ModelChapterNav from '~/components/page/model/ModelChapterNav.vue'

const props = defineProps<{
  model: any
}>()

const { textFor, buildPath } = useSiteContent()

// Chapter links for navigation
const chapterLinks = computed(() => chapterSections.value.map(s => ({ id: s.id, label: s.title })))

// Chapter sections data
const chapterSections = computed(() => [
  { id: 'section1', title: textFor({ en: 'Executive Design', fr: 'Design Exécutif', ar: 'تصميم تنفيذي' }), shortTitle: textFor({ en: 'Design', fr: 'Design', ar: 'تصميم' }) },
  { id: 'section2', title: textFor({ en: 'Exterior Excellence', fr: 'Excellence Extérieure', ar: 'تميز خارجي' }), shortTitle: textFor({ en: 'Exterior', fr: 'Extérieur', ar: 'خارجي' }) },
  { id: 'section3', title: textFor({ en: 'Interior Luxury', fr: 'Luxe Intérieur', ar: 'فخامة داخلية' }), shortTitle: textFor({ en: 'Interior', fr: 'Intérieur', ar: 'داخلي' }) },
  { id: 'section4', title: textFor({ en: 'Smart Technology', fr: 'Technologie Intelligente', ar: 'تكنولوجيا ذكية' }), shortTitle: textFor({ en: 'Technology', fr: 'Technologie', ar: 'تكنولوجيا' }) },
  { id: 'section5', title: textFor({ en: 'Electric Performance', fr: 'Performance Électrique', ar: 'أداء كهربائي' }), shortTitle: textFor({ en: 'Performance', fr: 'Performance', ar: 'أداء' }) },
  { id: 'section6', title: textFor({ en: 'Comfort & Safety', fr: 'Confort & Sécurité', ar: 'الراحة والسلامة' }), shortTitle: textFor({ en: 'Comfort', fr: 'Confort', ar: 'راحة' }) },
  { id: 'section7', title: textFor({ en: 'Protective Sedan Assurance', fr: 'Assurance Berline Protectrice', ar: 'ضمان السيارة الواقية' }), shortTitle: textFor({ en: 'Safety', fr: 'Sécurité', ar: 'سلامة' }) }
])

// Exterior slides data with translations
const exteriorSlides = computed(() => [
  { image: '/voyah-resources/images/car/passion/1920/fl0331.jpg', title: textFor({ en: 'Front Grille Design', fr: 'Design de Calandre Avant', ar: 'تصميم الشبكة الأمامية' }), desc: textFor({ en: 'Elegant front fascia with distinctive grille', fr: 'Faisceau avant élégant avec calandre distinctive', ar: 'واجهة أمامية أنيقة مع شبكة مميزة' }) },
  { image: '/voyah-resources/images/car/passion/1920/fl044.jpg', title: textFor({ en: 'LED Headlights', fr: 'Phares LED', ar: 'مصابيح أمامية LED' }), desc: textFor({ en: 'Advanced lighting technology with signature design', fr: 'Technologie d\'éclairage avancée avec design signature', ar: 'تقنية إضاءة متقدمة بتصميم مميز' }) },
  { image: '/voyah-resources/images/car/passion/1920/fl11.jpg', title: textFor({ en: 'Side Profile', fr: 'Profil Latéral', ar: 'الملف الجانبي' }), desc: textFor({ en: 'Sleek aerodynamic silhouette', fr: 'Silhouette aérodynamique élégante', ar: 'شكل انسيابي ديناميكي هوائي أنيق' }) }
])

// Interior slides data with translations
const interiorSlides = computed(() => [
  { image: '/voyah-resources/images/car/passion/1920/fl12.jpg', title: textFor({ en: 'Executive Seating', fr: 'Sièges Exécutifs', ar: 'مقاعد تنفيذية' }), desc: textFor({ en: 'Premium leather seats with massage function', fr: 'Sièges en cuir premium avec fonction massage', ar: 'مقاعد جلدية فاخرة مع وظيفة تدليك' }) },
  { image: '/voyah-resources/images/car/passion/1920/fl13.jpg', title: textFor({ en: 'Dashboard Design', fr: 'Design du Tableau de Bord', ar: 'تصميم لوحة القيادة' }), desc: textFor({ en: 'Modern dashboard with digital displays', fr: 'Tableau de bord moderne avec écrans numériques', ar: 'لوحة قيادة حديثة مع شاشات رقمية' }) },
  { image: '/voyah-resources/images/car/passion/1920/fl14.jpg', title: textFor({ en: 'Rear Cabin', fr: 'Arrière de la Cabine', ar: 'المقصورة الخلفية' }), desc: textFor({ en: 'Spacious rear seating with executive amenities', fr: 'Sièges arrière spacieux avec équipements exécutifs', ar: 'مقاعد خلفية واسعة مع وسائل راحة تنفيذية' }) }
])

// Safety slides data with translations
const safetySlides = computed(() => [
  { image: '/voyah-resources/images/car/passion/1920/fln1203.jpg', title: textFor({ en: 'Adaptive Cruise Control', fr: 'Régulateur de Vitesse Adaptatif', ar: 'مثبت سرعة تكيفي' }), desc: textFor({ en: 'Intelligent speed adjustment with traffic flow monitoring', fr: 'Ajustement intelligent de la vitesse avec surveillance du trafic', ar: 'ضبط ذكي للسرعة مع مراقبة تدفق المرور' }) },
  { image: '/voyah-resources/images/car/passion/1920/fl1701.jpg', title: textFor({ en: 'Lane Keeping Assist', fr: 'Assistance au Maintien de Voie', ar: 'مساعدة الحفاظ على المسار' }), desc: textFor({ en: 'Active lane guidance with gentle steering corrections', fr: 'Guidage de voie actif avec corrections de direction douces', ar: 'توجيه نشط للمسار مع تصحيحات توجيه لطيفة' }) },
  { image: '/voyah-resources/images/car/passion/1920/fl1702.jpg', title: textFor({ en: 'Blind Spot Detection', fr: 'Détection d\'Angle Mort', ar: 'كشف النقطة العمياء' }), desc: textFor({ en: '360° monitoring system with visual and audio alerts', fr: 'Système de surveillance 360° avec alertes visuelles et audio', ar: 'نظام مراقبة 360 درجة مع تنبيهات بصرية وصوتية' }) },
  { image: '/voyah-resources/images/car/passion/1920/fl1703.jpg', title: textFor({ en: 'Emergency Braking', fr: 'Freinage d\'Urgence', ar: 'الفرملة الطارئة' }), desc: textFor({ en: 'Automatic emergency braking with pedestrian detection', fr: 'Freinage d\'urgence automatique avec détection de piétons', ar: 'فرملة طارئة تلقائية مع كشف المشاة' }) }
])

// Car colors data with translations
const carColors = computed(() => [
  { id: 'c1', name: textFor({ en: 'Pearl White', fr: 'Blanc Nacré', ar: 'أبيض لؤلؤي' }), icon: '/voyah-resources/images/car/car_logo/passion.png', image: '/voyah-resources/images/car/passion/1920/fl15.jpg' },
  { id: 'c2', name: textFor({ en: 'Midnight Black', fr: 'Noir Minuit', ar: 'أسود منتصف الليل' }), icon: '/voyah-resources/images/car/car_logo/passion.png', image: '/voyah-resources/images/car/passion/1920/fl16.jpg' },
  { id: 'c3', name: textFor({ en: 'Silver Gray', fr: 'Gris Argenté', ar: 'رمادي فضي' }), icon: '/voyah-resources/images/car/car_logo/passion.png', image: '/voyah-resources/images/car/passion/1920/fl20.jpg' },
  { id: 'c4', name: textFor({ en: 'Deep Blue', fr: 'Bleu Profond', ar: 'أزرق عميق' }), icon: '/voyah-resources/images/car/car_logo/passion.png', image: '/voyah-resources/images/car/passion/1920/fl21.jpg' },
  { id: 'c5', name: textFor({ en: 'Burgundy Red', fr: 'Rouge Bourgogne', ar: 'أحمر بورغندي' }), icon: '/voyah-resources/images/car/car_logo/passion.png', image: '/voyah-resources/images/car/passion/1920/fl22.jpg' }
])

// State
const currentSlide = ref({ exterior: 0, interior: 0, safety: 0 })
const currentColor = ref(0)
const activeSection = ref(0)
const showMobileNav = ref(false)
const showSideNav = ref(false)
const showBottomBar = ref(false)
const navProgress = ref(0)
const sectionRefs = ref<(HTMLElement | null)[]>([])

// Background image loading states
const section1BgLoaded = ref(false)
const section3BgLoaded = ref(false)
const section4BgLoaded = ref(false)
const section5BgLoaded = ref(false)
const section6BgLoaded = ref(false)
const section7BgLoaded = ref(false)

// Image loading handler
const onImageLoad = () => {
  // Image loaded successfully
}

// Preload background images when sections become visible
const preloadSectionBackground = (sectionId: string, imageUrl: string, loadedRef: any) => {
  if (loadedRef.value) return
  
  const img = new Image()
  img.onload = () => {
    loadedRef.value = true
  }
  img.src = imageUrl
}

// Intersection observer for background images
const setupBackgroundImageObserver = () => {
  const sections = [
    { id: 'section1', ref: section1BgLoaded, url: '/voyah-resources/images/car/passion/1920/fl02.jpg' },
    { id: 'section3', ref: section3BgLoaded, url: '/voyah-resources/images/car/passion/1920/fl03.jpg' },
    { id: 'section4', ref: section4BgLoaded, url: '/voyah-resources/images/car/passion/1920/fl04.jpg' },
    { id: 'section5', ref: section5BgLoaded, url: '/voyah-resources/images/car/passion/1920/fl06.jpg' },
    { id: 'section6', ref: section6BgLoaded, url: '/voyah-resources/images/car/passion/1920/fl09.jpg' },
    { id: 'section7', ref: section7BgLoaded, url: '/voyah-resources/images/car/passion/1920/fln15.jpg' }
  ]

  const bgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const section = sections.find(s => s.id === entry.target.id)
        if (section) {
          preloadSectionBackground(section.id, section.url, section.ref)
          bgObserver.unobserve(entry.target)
        }
      }
    })
  }, { threshold: 0.1, rootMargin: '50px' })

  sections.forEach(section => {
    const element = document.getElementById(section.id)
    if (element) {
      bgObserver.observe(element)
    }
  })

  return bgObserver
}

// Scroll to section
const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Intersection observer for scroll animations
let observer: IntersectionObserver | null = null

onMounted(() => {
  // Setup background image observer
  const bgObserver = setupBackgroundImageObserver()
  
  // Setup intersection observer for inview animations with optimized threshold
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add visible class with a small delay for smoother animations
        setTimeout(() => {
          entry.target.classList.add('inview-visible')
        }, 50)
      }
    })
  }, { threshold: 0.1, rootMargin: '50px' })

  // Observe elements with staggered animation delays
  const animatedElements = document.querySelectorAll('.inview-child')
  animatedElements.forEach((el, index) => {
    // Stagger animation delays for smoother performance
    setTimeout(() => {
      observer?.observe(el)
    }, index * 10)
  })

  // Optimized scroll handler with throttling
  let ticking = false
  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY
        showMobileNav.value = scrollY > 400
        showSideNav.value = scrollY > 400
        showBottomBar.value = scrollY > 600
        
        // Calculate progress
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        navProgress.value = (scrollY / docHeight) * 100

        // Update active section
        sectionRefs.value.forEach((section, index) => {
          if (section) {
            const rect = section.getBoundingClientRect()
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
              activeSection.value = index
            }
          }
        })
        
        ticking = false
      })
      ticking = true
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()

  return () => {
    window.removeEventListener('scroll', handleScroll)
    observer?.disconnect()
    bgObserver?.disconnect()
  }
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.passion-page {
  background: #000;
  min-height: 100vh;
  color: #fff;
  font-family: PingFang SC, Arial, "Microsoft YaHei", sans-serif;
}

/* Hero Section */
.kv-section {
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.kv-bg-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.kv-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 20px;
}

.kv-model-info {
  margin-bottom: 20px;
  text-align: center;
}

.kv-model-name {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin: 0 0 10px 0;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-family: 'DDIN', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  color: #fff;
}

.kv-slogan {
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 30px;
  letter-spacing: 0.1em;
}

.kv-btns {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Buttons */
.voyah-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 32px;
  border: 1px solid transparent;
  background: transparent;
  color: #fff;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.voyah-button--dark {
  background: rgba(0, 0, 0, 0.6);
  border-color: rgba(255, 255, 255, 0.4);
}

.voyah-button--dark:hover {
  background: rgba(0, 0, 0, 0.8);
  border-color: rgba(255, 255, 255, 0.6);
}

.voyah-button--plain {
  background: transparent;
  border-color: rgba(255, 255, 255, 0.4);
}

.voyah-button--plain:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.6);
}


.car-nav-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.car-nav-item {
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.car-nav-item:hover,
.car-nav-item.active {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
}

.car-nav-text {
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* Side Navigation */
.car-nav-side {
  position: fixed;
  top: 50%;
  right: 48px;
  transform: translateY(-50%);
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.car-nav-side.visible {
  opacity: 1;
  visibility: visible;
}

.side-nav-progress {
  position: absolute;
  top: 0;
  left: -2px;
  width: 2px;
  background: #A68B5B;
  transition: height 0.3s ease;
}

.side-nav-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.side-nav-item {
  position: relative;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.side-nav-item::before {
  content: '';
  position: absolute;
  left: -2px;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.side-nav-item.active::before {
  background: #A68B5B;
  width: 10px;
  height: 10px;
}

.side-nav-text {
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.side-nav-item.active .side-nav-text {
  opacity: 1;
}

/* Sections */
.level-one {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.section-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0.7);
}

.section-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 40px 20px;
  max-width: 800px;
}

.title {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  margin: 0 0 20px 0;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-family: 'DDIN', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  color: #fff;
}

.subTitle {
  font-size: clamp(1rem, 2vw, 1.4rem);
  font-weight: 300;
  margin: 0;
  opacity: 0.9;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.9);
}

.common {
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.commonMax {
  max-width: 1400px;
}

/* Swiper */
.swiper-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 40px 0;
}

.swiper-wrapper {
  display: flex;
  transition: transform 0.5s ease;
}

.swiper-slide {
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img-container {
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
}

.slide-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

.desc-wrap {
  text-align: center;
  max-width: 600px;
}

.desc-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 10px 0;
  color: #fff;
}

.desc-content {
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
  opacity: 0.8;
  color: rgba(255, 255, 255, 0.8);
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 20px 0;
}

.pagination-bullet {
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pagination-bullet:hover,
.pagination-bullet.active {
  background: #A68B5B;
  transform: scale(1.2);
}

.description-pagination-wrap {
  margin-top: 40px;
}

.description-list {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.description-item {
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.description-item:hover,
.description-item.active {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
}

.description-title {
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0;
  color: #fff;
}

.description-content {
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
  opacity: 0.8;
  color: rgba(255, 255, 255, 0.8);
}

/* Single Image */
.single-img-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 40px auto;
}

.single-img {
  position: relative;
  z-index: 1;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

.single-description {
  max-width: 800px;
  margin: 40px auto;
}

.single-description .description-item {
  margin-bottom: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

.description-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 10px 0;
  color: #fff;
}

.description-content {
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
  opacity: 0.8;
  color: rgba(255, 255, 255, 0.8);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

/* Color Selection */
.color-selection-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.color-display {
  width: 100%;
  max-width: 800px;
}

.color-car-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

.color-options {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.color-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.color-option:hover,
.color-option.active {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
}

.color-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}

.img-icon {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.color-name {
  font-size: 0.8rem;
  font-weight: 500;
  margin: 0;
  color: #fff;
  text-align: center;
}

/* Bottom CTA Bar */
.car-nav-wrap-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 16px 20px;
  z-index: 100;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.car-nav-wrap-bottom.visible {
  transform: translateY(0);
}

.car-nav-wrap-bottom-inner {
  display: flex;
  justify-content: center;
  gap: 20px;
  max-width: 400px;
  margin: 0 auto;
}

.button-config,
.button-order {
  flex: 1;
  padding: 12px 24px;
  text-align: center;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button-config {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
}

.button-config:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

.button-order {
  background: #A68B5B;
  border: 1px solid #A68B5B;
  color: #fff;
}

.button-order:hover {
  background: #8B7348;
  border-color: #8B7348;
}

/* Placeholders */
.kv-bg-placeholder,
.section-bg-placeholder,
.img-placeholder {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%);
  animation: shimmer 2s infinite;
  z-index: 0;
}

.img-placeholder {
  border-radius: 8px;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* Optimized Animations */
.inview-child {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: opacity, transform;
}

.inview-child.inview-visible {
  opacity: 1;
  transform: translateY(0);
}

.inview-animated {
  transition-delay: var(--inview-delay, 0s);
}

/* Background image transitions */
.section-bg {
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
}

.section-bg.loaded {
  opacity: 1;
}

/* Image transitions */
.single-img,
.slide-img,
.color-car-img {
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
}

.single-img,
.slide-img,
.color-car-img {
  opacity: 1;
}

/* Responsive */
@media (max-width: 768px) {
  
  .car-nav-side {
    right: 20px;
  }
  
  .car-nav-text,
  .side-nav-text {
    font-size: 0.7rem;
  }
  
  .description-list {
    flex-direction: column;
    align-items: center;
  }
  
  .color-options {
    gap: 12px;
  }
  
  .color-option {
    padding: 8px;
  }
  
  .color-icon {
    width: 30px;
    height: 30px;
  }
  
  .color-name {
    font-size: 0.7rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
