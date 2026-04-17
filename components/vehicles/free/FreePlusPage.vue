<template>
  <div class="free-plus-page">
    <!-- Hero Section with Video -->
    <section class="kv-section" id="hero">
      <div class="kv-video-container">
        <video
          ref="heroVideo"
          class="kv-video"
          autoplay
          muted
          loop
          playsinline
          webkit-playsinline
          x5-video-player-type="h5"
          poster="/assets/OFFICIALVOYAH/freeplus/images/kv_1920.png"
        >
          <source src="/assets/OFFICIALVOYAH/freeplus/videos/video_01.mp4" type="video/mp4">
        </video>
        <div class="kv-overlay"></div>
      </div>
      <div class="kv-content">
        <img
          src="/assets/OFFICIALVOYAH/freeplus/images/free+.png"
          alt="Voyah Free+"
          class="kv-logo inview-child inview-animated"
          style="--inview-delay: 0.3s;"
        />
        <p class="kv-slogan inview-child inview-animated" style="--inview-delay: 0.4s;">
          {{ textFor({ en: 'Redefine Your Journey', fr: 'Redéfinissez Votre Voyage', ar: 'أعد تعريف رحلتك' }) }}
        </p>
        <div class="kv-btns inview-child inview-animated" style="--inview-delay: 0.5s;">
          <button class="voyah-button voyah-button--more voyah-button--dark voyah-button--plain">
            <span class="voyah-button__text">{{ textFor({ en: 'Book Test Drive', fr: 'Réserver un Essai', ar: 'احجز تجربة قيادة' }) }}</span>
          </button>
          <button class="voyah-button voyah-button--more voyah-button--dark">
            <span class="voyah-button__text">{{ textFor({ en: 'Order Now', fr: 'Commander', ar: 'اطلب الآن' }) }}</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Mobile Chapter Nav -->
    <div class="car-nav-wap fixed-nav" :class="{ visible: showMobileNav }">
      <ul class="car-nav-list">
        <li
          v-for="(section, index) in chapterSections"
          :key="section.id"
          class="car-nav-item"
          :class="{ active: activeSection === index }"
          @click="scrollToSection(section.id)"
        >
          <div class="car-nav-item_icon">
            <div class="icon-outer"></div>
            <div class="icon-inner"></div>
          </div>
          <div class="car-nav-item_text">
            <p class="serial">{{ String(index + 1).padStart(2, '0') }}</p>
            <p class="title">{{ section.title }}</p>
          </div>
        </li>
      </ul>
    </div>

    <!-- Desktop Side Navigation -->
    <nav class="side-nav" :class="{ visible: showSideNav }">
      <div class="nav-line">
        <div class="nav-progress" :style="{ height: navProgress + '%' }"></div>
      </div>
      <ul class="nav-dots">
        <li
          v-for="(section, index) in chapterSections"
          :key="section.id"
          class="nav-dot"
          :class="{ active: activeSection === index }"
          @click="scrollToSection(section.id)"
        >
          <span class="dot-number">{{ String(index + 1).padStart(2, '0') }}</span>
          <span class="dot-title">{{ section.shortTitle || section.title }}</span>
        </li>
      </ul>
    </nav>

    <!-- Section 1: HarmonyOS Cockpit -->
    <section id="section1" class="level-one" targetindex="0" ref="sectionRefs[0]">
      <div class="section-bg" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/freeplus/images/img_01_1920.png')` }"></div>
      <div class="section-content">
        <h2 class="title inview-child inview-animated" style="--inview-delay: 0.3s;">
          {{ textFor({ en: 'HarmonyOS Smart Cockpit', fr: 'Cockpit Intelligent HarmonyOS', ar: 'مقصورة هارموني أو إس الذكية' }) }}
        </h2>
        <p class="subTitle inview-child inview-animated" style="--inview-delay: 0.4s;">
          {{ textFor({ en: 'Seamless intelligent connectivity', fr: 'Connectivité intelligente fluide', ar: 'اتصال ذكي سلس' }) }}
        </p>
      </div>
    </section>

    <!-- HarmonyOS Features Swiper -->
    <section id="harmony-features" class="common commonMax" targetindex="0" ref="sectionRefs[1]">
      <h3 class="title inview-child inview-animated" style="--inview-delay: 0.3s;">
        {{ textFor({ en: 'Smart Features', fr: 'Fonctions Intelligentes', ar: 'الميزات الذكية' }) }}
      </h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translateX(-${currentSlide.harmony * 100}%)` }">
          <div class="swiper-slide" v-for="(slide, idx) in harmonySlides" :key="idx">
            <div class="img-container">
              <img :src="slide.image" :alt="slide.title" class="slide-img" />
            </div>
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.title }}</p>
              <p class="desc-content">{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination inview-child inview-animated" style="--inview-delay: 0.4s;">
        <div
          v-for="(_, idx) in harmonySlides"
          :key="idx"
          class="pagination-bullet"
          :class="{ active: currentSlide.harmony === idx }"
          @click="currentSlide.harmony = idx"
        ></div>
      </div>
      <div class="description-pagination-wrap inview-child inview-animated" style="--inview-delay: 0.5s;">
        <div class="description-list">
          <div
            v-for="(slide, idx) in harmonySlides"
            :key="idx"
            class="description-item"
            :class="{ active: currentSlide.harmony === idx }"
            @click="currentSlide.harmony = idx"
          >
            <p class="description-title">{{ slide.title }}</p>
          </div>
        </div>
        <p class="description-content">{{ harmonySlides[currentSlide.harmony].desc }}</p>
      </div>
    </section>

    <!-- Section 2: Intelligent Driving -->
    <section id="section2" class="level-one" targetindex="0" ref="sectionRefs[2]">
      <div class="section-bg" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/freeplus/images/img_06_01.png')` }"></div>
      <div class="section-content">
        <h2 class="title inview-child inview-animated" style="--inview-delay: 0.3s;">
          {{ textFor({ en: 'Huawei ADS 3.0', fr: 'Huawei ADS 3.0', ar: 'نظام هواوي ADS 3.0' }) }}
        </h2>
        <p class="subTitle inview-child inview-animated" style="--inview-delay: 0.4s;">
          {{ textFor({ en: 'Safer smarter autonomous driving', fr: 'Conduite autonome plus sûre et intelligente', ar: 'قيادة ذاتية أكثر أماناً وذكاءً' }) }}
        </p>
      </div>
    </section>

    <!-- ADS Features -->
    <section id="ads-features" class="common" targetindex="0" ref="sectionRefs[3]">
      <h3 class="title inview-child">
        {{ textFor({ en: 'Advanced Driving Assistance', fr: 'Assistance Avancée à la Conduite', ar: 'مساعدة القيادة المتقدمة' }) }}
      </h3>
      <div class="single-img-container inview-child">
        <img src="/assets/OFFICIALVOYAH/freeplus/images/img_07.png" alt="ADS Features" class="single-img" />
      </div>
      <div class="single-description inview-child features-grid">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'NCA Smart Navigation', fr: 'Navigation Intelligente NCA', ar: 'ملاحة NCA الذكية' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Navigate complex scenarios with ease', fr: 'Naviguez facilement dans les scénarios complexes', ar: 'تنقل بسهولة في السيناريوهات المعقدة' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Full-Scene Parking', fr: 'Stationnement Toute Scène', ar: 'ركن في جميع السيناريوهات' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Automatic parking in any scenario', fr: 'Stationnement automatique dans toutes les situations', ar: 'ركن تلقائي في جميع الحالات' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Section 3: Exterior Design -->
    <section id="section3" class="level-one" targetindex="0" ref="sectionRefs[4]">
      <div class="section-bg" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/freeplus/images/img_03_1920.png')` }"></div>
      <div class="section-content">
        <h2 class="title inview-child inview-animated" style="--inview-delay: 0.3s;">
          {{ textFor({ en: 'Avant-Garde Design', fr: 'Design Avant-Garde', ar: 'تصميم طليعي' }) }}
        </h2>
        <p class="subTitle inview-child inview-animated" style="--inview-delay: 0.4s;">
          {{ textFor({ en: 'Mech aesthetics DNA', fr: 'ADN esthétique mécanique', ar: 'الجماليات الميكانيكية' }) }}
        </p>
      </div>
    </section>

    <!-- Exterior Features Swiper -->
    <section id="exterior-features" class="common commonMax" targetindex="0" ref="sectionRefs[5]">
      <h3 class="title inview-child inview-animated" style="--inview-delay: 0.3s;">
        {{ textFor({ en: 'Exterior Highlights', fr: 'Points Forts Extérieurs', ar: 'مميزات التصميم الخارجي' }) }}
      </h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translateX(-${currentSlide.exterior * 100}%)` }">
          <div class="swiper-slide" v-for="(slide, idx) in exteriorSlides" :key="idx">
            <div class="img-container">
              <img :src="slide.image" :alt="slide.title" class="slide-img" />
            </div>
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.title }}</p>
              <p class="desc-content">{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination inview-child inview-animated" style="--inview-delay: 0.4s;">
        <div
          v-for="(_, idx) in exteriorSlides"
          :key="idx"
          class="pagination-bullet"
          :class="{ active: currentSlide.exterior === idx }"
          @click="currentSlide.exterior = idx"
        ></div>
      </div>
      <div class="description-pagination-wrap inview-child inview-animated" style="--inview-delay: 0.5s;">
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

    <!-- Section 4: Interior Luxury -->
    <section id="section4" class="level-one" targetindex="0" ref="sectionRefs[6]">
      <div class="section-bg" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/freeplus/images/img_13_01.png')` }"></div>
      <div class="section-content">
        <h2 class="title inview-child inview-animated" style="--inview-delay: 0.3s;">
          {{ textFor({ en: 'Luxury Interior', fr: 'Intérieur de Luxe', ar: 'مقصورة فاخرة' }) }}
        </h2>
        <p class="subTitle inview-child inview-animated" style="--inview-delay: 0.4s;">
          {{ textFor({ en: 'Immersive space experience', fr: 'Expérience spatiale immersive', ar: 'تجربة فضائية غامرة' }) }}
        </p>
      </div>
    </section>

    <!-- Interior Features -->
    <section id="interior-features" class="common commonMax" targetindex="0" ref="sectionRefs[7]">
      <h3 class="title inview-child inview-animated" style="--inview-delay: 0.3s;">
        {{ textFor({ en: 'Interior Craftsmanship', fr: 'Artisanat Intérieur', ar: 'الحرفية الداخلية' }) }}
      </h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translateX(-${currentSlide.interior * 100}%)` }">
          <div class="swiper-slide" v-for="(slide, idx) in interiorSlides" :key="idx">
            <div class="img-container">
              <img :src="slide.image" :alt="slide.title" class="slide-img" />
            </div>
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.title }}</p>
              <p class="desc-content">{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination inview-child inview-animated" style="--inview-delay: 0.4s;">
        <div
          v-for="(_, idx) in interiorSlides"
          :key="idx"
          class="pagination-bullet"
          :class="{ active: currentSlide.interior === idx }"
          @click="currentSlide.interior = idx"
        ></div>
      </div>
      <div class="description-pagination-wrap inview-child inview-animated" style="--inview-delay: 0.5s;">
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

    <!-- Section 5: Performance -->
    <section id="section5" class="level-one" targetindex="0" ref="sectionRefs[8]">
      <div class="section-bg" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/freeplus/images/img_20_01.png')` }"></div>
      <div class="section-content">
        <h2 class="title inview-child inview-animated" style="--inview-delay: 0.3s;">
          {{ textFor({ en: 'Exceptional Performance', fr: 'Performance Exceptionnelle', ar: 'أداء استثنائي' }) }}
        </h2>
        <p class="subTitle inview-child inview-animated" style="--inview-delay: 0.4s;">
          {{ textFor({ en: 'Power meets efficiency', fr: 'Puissance et efficacité', ar: 'القوة تلتقي بالكفاءة' }) }}
        </p>
      </div>
    </section>

    <!-- Performance Features -->
    <section id="performance-features" class="common" targetindex="0" ref="sectionRefs[9]">
      <div class="single-img-container inview-child">
        <img src="/assets/OFFICIALVOYAH/freeplus/images/img_20_01.png" alt="Performance" class="single-img" />
      </div>
      <div class="single-description inview-child features-grid">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Dual Motor 4WD', fr: '4WD Double Moteur', ar: 'دفع رباعي بمحركين' }) }}</p>
          <p class="description-content">{{ textFor({ en: '360kW total power output', fr: '360kW de puissance totale', ar: '360 كيلوواط قوة إجمالية' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '4.5s 0-100km/h', fr: '0-100km/h en 4.5s', ar: '0-100 كم/س في 4.5 ثانية' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Lightning fast acceleration', fr: 'Accélération éclair', ar: 'تسارع كالبرق' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Section 6: Range & Charging -->
    <section id="section6" class="level-one" targetindex="0" ref="sectionRefs[10]">
      <div class="section-bg" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/freeplus/images/img_23_01.png')` }"></div>
      <div class="section-content">
        <h2 class="title inview-child inview-animated" style="--inview-delay: 0.3s;">
          {{ textFor({ en: 'Endless Range', fr: 'Autonomie Illimitée', ar: 'مدى لا نهائي' }) }}
        </h2>
        <p class="subTitle inview-child inview-animated" style="--inview-delay: 0.4s;">
          {{ textFor({ en: '318km pure electric range', fr: '318km d\'autonomie électrique pure', ar: '318 كم مدى كهربائي نقي' }) }}
        </p>
      </div>
    </section>

    <!-- Range Features -->
    <section id="range-features" class="common commonMax" targetindex="0" ref="sectionRefs[11]">
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translateX(-${currentSlide.range * 100}%)` }">
          <div class="swiper-slide" v-for="(slide, idx) in rangeSlides" :key="idx">
            <div class="img-container">
              <img :src="slide.image" :alt="slide.title" class="slide-img" />
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
          v-for="(_, idx) in rangeSlides"
          :key="idx"
          class="pagination-bullet"
          :class="{ active: currentSlide.range === idx }"
          @click="currentSlide.range = idx"
        ></div>
      </div>
      <div class="description-pagination-wrap inview-child">
        <div class="description-list">
          <div
            v-for="(slide, idx) in rangeSlides"
            :key="idx"
            class="description-item"
            :class="{ active: currentSlide.range === idx }"
            @click="currentSlide.range = idx"
          >
            <p class="description-title">{{ slide.title }}</p>
          </div>
        </div>
        <p class="description-content">{{ rangeSlides[currentSlide.range].desc }}</p>
      </div>
    </section>

    <!-- Section 7: Chassis -->
    <section id="section7" class="level-one" targetindex="0" ref="sectionRefs[12]">
      <div class="section-bg" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/freeplus/images/img_25_1920.png')` }"></div>
      <div class="section-content">
        <h2 class="title inview-child inview-animated" style="--inview-delay: 0.3s;">
          {{ textFor({ en: 'Magic Carpet Chassis', fr: 'Châssis Tapis Magique', ar: 'هيكل السجادة السحرية' }) }}
        </h2>
        <p class="subTitle inview-child inview-animated" style="--inview-delay: 0.4s;">
          {{ textFor({ en: 'Supreme comfort and control', fr: 'Confort et contrôle suprêmes', ar: 'راحة وتحكم فائقين' }) }}
        </p>
      </div>
    </section>

    <!-- Chassis Features -->
    <section id="chassis-features" class="common" targetindex="0" ref="sectionRefs[13]">
      <div class="single-img-container inview-child">
        <img src="/assets/OFFICIALVOYAH/freeplus/images/img_28_1920.png" alt="Chassis" class="single-img" />
      </div>
      <div class="single-description inview-child features-grid">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '100mm Air Suspension', fr: 'Suspension Pneumatique 100mm', ar: 'تعليق هوائي 100 مم' }) }}</p>
          <p class="description-content">{{ textFor({ en: '4 modes height adjustable', fr: '4 modes de hauteur réglable', ar: '4 أوضاع قابلة للتعديل' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'CDC Continuous Damping', fr: 'Amortissement Continu CDC', ar: 'تخميد مستمر CDC' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Real-time road adaptation', fr: 'Adaptation en temps réel à la route', ar: 'تكيف فوري مع الطريق' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Section 8: Safety -->
    <section id="section8" class="level-one" targetindex="0" ref="sectionRefs[14]">
      <div class="section-bg" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/freeplus/images/img_28_1920.png')` }"></div>
      <div class="section-content">
        <h2 class="title inview-child inview-animated" style="--inview-delay: 0.3s;">
          {{ textFor({ en: 'All-Round Safety', fr: 'Sécurité Totale', ar: 'سلامة شاملة' }) }}
        </h2>
        <p class="subTitle inview-child inview-animated" style="--inview-delay: 0.4s;">
          {{ textFor({ en: 'C-NCAP 5-Star Protection', fr: 'Protection 5 Étoiles C-NCAP', ar: 'حماية 5 نجوم C-NCAP' }) }}
        </p>
      </div>
    </section>

    <!-- Safety Features -->
    <section id="safety-features" class="common" targetindex="0" ref="sectionRefs[15]">
      <div class="single-img-container inview-child">
        <img src="/assets/OFFICIALVOYAH/freeplus/images/img_32_01.png" alt="Safety" class="single-img" />
      </div>
      <div class="single-description inview-child features-grid">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'AEB Emergency Braking', fr: 'Freinage d\'Urgence AEB', ar: 'فرملة طارئة AEB' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Active safety up to 130km/h', fr: 'Sécurité active jusqu\'à 130km/h', ar: 'سلامة نشطة حتى 130 كم/س' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '2000MPa Body', fr: 'Carrosserie 2000MPa', ar: 'هيكل 2000 ميجا باسكال' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Submarine-grade protection', fr: 'Protection niveau sous-marin', ar: 'حماية على مستوى الغواصات' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Custom Edition -->
    <section id="custom-edition" class="common commonMax" targetindex="0" ref="sectionRefs[16]">
      <h3 class="title inview-child inview-animated" style="--inview-delay: 0.3s;">
        {{ textFor({ en: 'Shadow Edition', fr: 'Édition Shadow', ar: 'نسخة شادو' }) }}
      </h3>
      <p class="subTitle inview-child inview-animated" style="--inview-delay: 0.4s;">
        {{ textFor({ en: 'Stealth aesthetics ultimate sportiness', fr: 'Esthétique furtive ultime sportivité', ar: 'جمالية خفية رياضية قصوى' }) }}
      </p>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translateX(-${currentSlide.custom * 100}%)` }">
          <div class="swiper-slide" v-for="(slide, idx) in customSlides" :key="idx">
            <div class="img-container">
              <img :src="slide.image" :alt="slide.title" class="slide-img" />
            </div>
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.title }}</p>
              <p class="desc-content">{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination inview-child inview-animated" style="--inview-delay: 0.4s;">
        <div
          v-for="(_, idx) in customSlides"
          :key="idx"
          class="pagination-bullet"
          :class="{ active: currentSlide.custom === idx }"
          @click="currentSlide.custom = idx"
        ></div>
      </div>
      <div class="description-pagination-wrap inview-child inview-animated" style="--inview-delay: 0.5s;">
        <div class="description-list">
          <div
            v-for="(slide, idx) in customSlides"
            :key="idx"
            class="description-item"
            :class="{ active: currentSlide.custom === idx }"
            @click="currentSlide.custom = idx"
          >
            <p class="description-title">{{ slide.title }}</p>
          </div>
        </div>
        <p class="description-content">{{ customSlides[currentSlide.custom].desc }}</p>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="level-one" id="cta">
      <div class="section-bg" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/freeplus/images/img_38_01.png')` }"></div>
      <div class="section-content">
        <h2 class="title inview-child inview-animated">
          {{ textFor({ en: 'Experience Voyah Free+', fr: 'Découvrez le Voyah Free+', ar: 'جرب Voyah Free+' }) }}
        </h2>
        <p class="subTitle inview-child inview-animated">
          {{ textFor({ en: 'Book a test drive today', fr: 'Réservez un essai aujourd\'hui', ar: 'احجز تجربة قيادة اليوم' }) }}
        </p>
        <div class="kv-btns inview-child inview-animated">
          <button class="voyah-button voyah-button--more voyah-button--dark voyah-button--plain">
            <span class="voyah-button__text">{{ textFor({ en: 'Book Test Drive', fr: 'Réserver un Essai', ar: 'احجز تجربة قيادة' }) }}</span>
          </button>
          <button class="voyah-button voyah-button--more voyah-button--dark">
            <span class="voyah-button__text">{{ textFor({ en: 'Order Now', fr: 'Commander', ar: 'اطلب الآن' }) }}</span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useSiteContent } from '~/composables/useSiteContent'

const { textFor } = useSiteContent()

// Navigation state
const activeSection = ref(0)
const showMobileNav = ref(false)
const showSideNav = ref(false)
const navProgress = ref(0)

// Section refs for scroll tracking
const sectionRefs = ref<HTMLElement[]>([])

// Slide state
const currentSlide = ref({
  harmony: 0,
  exterior: 0,
  interior: 0,
  range: 0,
  custom: 0
})

// Chapter sections data
const chapterSections = computed(() => [
  { id: 'section1', title: textFor({ en: 'HarmonyOS', fr: 'HarmonyOS', ar: 'هارموني أو إس' }), shortTitle: textFor({ en: 'Cockpit', fr: 'Cockpit', ar: 'المقصورة' }) },
  { id: 'section2', title: textFor({ en: 'Huawei ADS', fr: 'Huawei ADS', ar: 'ADS هواوي' }), shortTitle: textFor({ en: 'ADS', fr: 'ADS', ar: 'ADS' }) },
  { id: 'section3', title: textFor({ en: 'Design', fr: 'Design', ar: 'التصميم' }), shortTitle: textFor({ en: 'Design', fr: 'Design', ar: 'التصميم' }) },
  { id: 'section4', title: textFor({ en: 'Interior', fr: 'Intérieur', ar: 'المقصورة' }), shortTitle: textFor({ en: 'Interior', fr: 'Intérieur', ar: 'المقصورة' }) },
  { id: 'section5', title: textFor({ en: 'Performance', fr: 'Performance', ar: 'الأداء' }), shortTitle: textFor({ en: 'Power', fr: 'Puissance', ar: 'القوة' }) },
  { id: 'section6', title: textFor({ en: 'Range', fr: 'Autonomie', ar: 'المدى' }), shortTitle: textFor({ en: 'Range', fr: 'Autonomie', ar: 'المدى' }) },
  { id: 'section7', title: textFor({ en: 'Chassis', fr: 'Châssis', ar: 'الهيكل' }), shortTitle: textFor({ en: 'Chassis', fr: 'Châssis', ar: 'الهيكل' }) },
  { id: 'section8', title: textFor({ en: 'Safety', fr: 'Sécurité', ar: 'السلامة' }), shortTitle: textFor({ en: 'Safety', fr: 'Sécurité', ar: 'السلامة' }) }
])

// HarmonyOS slides
const harmonySlides = computed(() => [
  {
    image: '/assets/OFFICIALVOYAH/freeplus/images/img_02_01.png',
    title: textFor({ en: '15.6-inch 2K Smart Screen', fr: 'Écran Intelligent 2K 15.6 pouces', ar: 'شاشة ذكية 2K 15.6 بوصة' }),
    desc: textFor({ en: 'Ultra-clear display with vibrant colors and responsive touch', fr: 'Affichage ultra-clair avec des couleurs vibrantes et un toucher réactif', ar: 'عرض فائق الوضوح بألوان زاهية ولمس متجاوب' })
  },
  {
    image: '/assets/OFFICIALVOYAH/freeplus/images/img_02_02.png',
    title: textFor({ en: 'Seamless Phone Integration', fr: 'Intégration Téléphone Sans Couture', ar: 'تكامل سلس مع الهاتف' }),
    desc: textFor({ en: 'Connect your phone and access all apps on the big screen', fr: 'Connectez votre téléphone et accédez à toutes les applications sur grand écran', ar: 'قم بتوصيل هاتفك وصولاً إلى جميع التطبيقات على الشاشة الكبيرة' })
  },
  {
    image: '/assets/OFFICIALVOYAH/freeplus/images/img_02_03.png',
    title: textFor({ en: 'Voice Control', fr: 'Contrôle Vocal', ar: 'التحكم الصوتي' }),
    desc: textFor({ en: 'Natural language processing for intuitive voice commands', fr: 'Traitement du langage naturel pour des commandes vocales intuitives', ar: 'معالجة اللغة الطبيعية للأوامر الصوتية البديهية' })
  }
])

// Exterior slides
const exteriorSlides = computed(() => [
  {
    image: '/assets/OFFICIALVOYAH/freeplus/images/img_11_01.png',
    title: textFor({ en: 'Mech Wing Front Face', fr: 'Face Avant Aile Mécanique', ar: 'الوجه الأمامي الميكانيكي' }),
    desc: textFor({ en: 'Bold geometric design with sharp lines', fr: 'Design géométrique audacieux avec des lignes nettes', ar: 'تصميم هندري جريء مع خطوط حادة' })
  },
  {
    image: '/assets/OFFICIALVOYAH/freeplus/images/img_11_02.png',
    title: textFor({ en: 'Lightdance LED Headlights', fr: 'Phares LED Dansant', ar: 'مصابيح أمامية LED راقصة' }),
    desc: textFor({ en: 'Dynamic lighting patterns for a unique signature', fr: 'Motifs d\'éclairage dynamiques pour une signature unique', ar: 'أنماط إضاءة ديناميكية لتوقيع فريد' })
  },
  {
    image: '/assets/OFFICIALVOYAH/freeplus/images/img_11_03.png',
    title: textFor({ en: '20-inch Sport Wheels', fr: 'Jantes Sport 20 pouces', ar: 'عجلات رياضية 20 بوصة' }),
    desc: textFor({ en: 'Lightweight alloy wheels with aerodynamic design', fr: 'Jantes alliage léger avec design aérodynamique', ar: 'عجلات سبائك خفيفة مع تصميم ديناميكي هوائي' })
  }
])

// Interior slides
const interiorSlides = computed(() => [
  {
    image: '/assets/OFFICIALVOYAH/freeplus/images/img_14_01.png',
    title: textFor({ en: 'Zero-Gravity Seats', fr: 'Sièges Zéro-Gravité', ar: 'مقاعد بلا جاذبية' }),
    desc: textFor({ en: 'NASA-inspired ergonomic seating for ultimate comfort', fr: 'Sièges ergonomiques inspirés de la NASA pour un confort ultime', ar: 'مقاعد مريحة مستوحاة من ناسا لراحة قصوى' })
  },
  {
    image: '/assets/OFFICIALVOYAH/freeplus/images/img_14_02.png',
    title: textFor({ en: 'Premium Materials', fr: 'Matériaux Premium', ar: 'مواد فاخرة' }),
    desc: textFor({ en: 'Nappa leather and sustainable wood trim throughout', fr: 'Cuir Nappa et finition bois durable dans tout l\'habitacle', ar: 'جلد نابا وتشطيبات خشبية مستدامة في كل مكان' })
  },
  {
    image: '/assets/OFFICIALVOYAH/freeplus/images/img_14_03.png',
    title: textFor({ en: 'Ambient Lighting', fr: 'Éclairage d\'Ambiance', ar: 'إضاءة المحيطة' }),
    desc: textFor({ en: '64-color ambient lighting with customizable themes', fr: 'Éclairage d\'ambiance 64 couleurs avec thèmes personnalisables', ar: 'إضاءة محيطة بـ64 لون مع موضوعات قابلة للتخصيص' })
  }
])

// Range slides
const rangeSlides = computed(() => [
  {
    image: '/assets/OFFICIALVOYAH/freeplus/images/img_24_01.png',
    title: textFor({ en: '318km EV Range', fr: '318km Autonomie EV', ar: '318 كم مدى كهربائي' }),
    desc: textFor({ en: 'Pure electric driving for daily commutes', fr: 'Conduite électrique pure pour les déplacements quotidiens', ar: 'القيادة الكهربائية النقية للتنقلات اليومية' })
  },
  {
    image: '/assets/OFFICIALVOYAH/freeplus/images/img_24_02.png',
    title: textFor({ en: '1458km Total Range', fr: '1458km Autonomie Totale', ar: '1458 كم المدى الإجمالي' }),
    desc: textFor({ en: 'Extended range for long-distance travel', fr: 'Autonomie étendue pour les voyages longue distance', ar: 'مدى ممتد للسفر لمسافات طويلة' })
  },
  {
    image: '/assets/OFFICIALVOYAH/freeplus/images/img_24_03.png',
    title: textFor({ en: '3C Fast Charging', fr: 'Recharge Rapide 3C', ar: 'شحن سريع 3C' }),
    desc: textFor({ en: '30%-80% in just 26 minutes', fr: '30%-80% en seulement 26 minutes', ar: 'من 30% إلى 80% في 26 دقيقة فقط' })
  }
])

// Custom edition slides
const customSlides = computed(() => [
  {
    image: '/assets/OFFICIALVOYAH/freeplus/images/img_32_01.png',
    title: textFor({ en: 'Shadow Black Paint', fr: 'Peinture Noir Shadow', ar: 'طلاء شادو الأسود' }),
    desc: textFor({ en: 'Deep black finish with subtle metallic flakes', fr: 'Finition noir profond avec des paillettes métalliques subtiles', ar: 'تشطيب أسود عميق مع قصاصات معدنية خفية' })
  },
  {
    image: '/assets/OFFICIALVOYAH/freeplus/images/img_32_02.png',
    title: textFor({ en: 'Sport Carbon Accents', fr: 'Accents Carbone Sport', ar: 'لمسات كربون رياضية' }),
    desc: textFor({ en: 'Real carbon fiber trim elements throughout', fr: 'Éléments de finition en vrai fibre de carbone', ar: 'عناصر تشطيب من ألياف الكربون الحقيقية' })
  },
  {
    image: '/assets/OFFICIALVOYAH/freeplus/images/img_32_03.png',
    title: textFor({ en: 'Exclusive Badging', fr: 'Badge Exclusif', ar: 'شارة حصرية' }),
    desc: textFor({ en: 'Limited edition Shadow badging and accents', fr: 'Badge Shadow édition limitée et accents', ar: 'شارة شادو إصدار محدود ولمسات خاصة' })
  }
])

// Scroll to section
const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Scroll handling
let scrollHandler: (() => void) | null = null

onMounted(() => {
  // Show navigation after hero
  scrollHandler = () => {
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight
    showMobileNav.value = scrollY > windowHeight * 0.5
    showSideNav.value = scrollY > windowHeight * 0.5

    // Calculate progress
    const docHeight = document.documentElement.scrollHeight - windowHeight
    navProgress.value = (scrollY / docHeight) * 100

    // Update active section
    sectionRefs.value.forEach((section, index) => {
      if (section) {
        const rect = section.getBoundingClientRect()
        if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
          activeSection.value = index
        }
      }
    })
  }

  window.addEventListener('scroll', scrollHandler, { passive: true })
})

onUnmounted(() => {
  if (scrollHandler) {
    window.removeEventListener('scroll', scrollHandler)
  }
})
</script>

<style scoped>
.free-plus-page {
  background: #000;
  color: #fff;
}

/* Hero Section */
.kv-section {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.kv-video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.kv-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.kv-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.5) 100%);
  z-index: 1;
}

.kv-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 0 20px;
}

.kv-logo {
  width: 280px;
  height: auto;
  margin-bottom: 24px;
}

.kv-slogan {
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0.1em;
  margin-bottom: 40px;
  color: #fff;
}

.kv-btns {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Navigation */
.car-nav-wap {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  z-index: 100;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.car-nav-wap.visible {
  transform: translateY(0);
}

.car-nav-list {
  display: flex;
  overflow-x: auto;
  padding: 12px 16px;
  gap: 16px;
  list-style: none;
  margin: 0;
}

.car-nav-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  cursor: pointer;
  white-space: nowrap;
  opacity: 0.6;
  transition: opacity 0.3s;
}

.car-nav-item.active {
  opacity: 1;
}

.car-nav-item_icon {
  position: relative;
  width: 20px;
  height: 20px;
}

.icon-outer {
  position: absolute;
  inset: 0;
  border: 2px solid #fff;
  border-radius: 50%;
}

.icon-inner {
  position: absolute;
  inset: 4px;
  background: #fff;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s;
}

.car-nav-item.active .icon-inner {
  opacity: 1;
}

.car-nav-item_text .serial {
  font-size: 12px;
  color: #888;
}

.car-nav-item_text .title {
  font-size: 14px;
  color: #fff;
}

/* Side Navigation */
.side-nav {
  position: fixed;
  left: 40px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
}

.side-nav.visible {
  opacity: 1;
  pointer-events: auto;
}

.nav-line {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(255, 255, 255, 0.2);
}

.nav-progress {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background: #fff;
  transition: height 0.1s;
}

.nav-dots {
  list-style: none;
  margin: 0;
  padding: 0;
  padding-left: 20px;
}

.nav-dot {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s;
}

.nav-dot.active {
  opacity: 1;
}

.dot-number {
  font-size: 12px;
  font-weight: 600;
  color: #fff;
}

.dot-title {
  font-size: 13px;
  color: #fff;
}

/* Level One Sections */
.level-one {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.section-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
  padding: 0 40px;
}

.section-content .title {
  font-size: 48px;
  font-weight: 300;
  letter-spacing: 0.05em;
  margin-bottom: 20px;
  color: #fff;
}

.section-content .subTitle {
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.8);
}

/* Common Sections */
.common {
  padding: 80px 0;
  background: #000;
}

.commonMax {
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 40px;
}

.common .title {
  font-size: 32px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 40px;
  color: #fff;
}

.common .subTitle {
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 60px;
  color: rgba(255, 255, 255, 0.7);
}

/* Swiper */
.swiper-container {
  overflow: hidden;
  position: relative;
}

.swiper-wrapper {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.swiper-slide {
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img-container {
  width: 100%;
  max-width: 1200px;
  aspect-ratio: 16/9;
  overflow: hidden;
  border-radius: 8px;
}

.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.desc-wrap {
  text-align: center;
  margin-top: 30px;
  padding: 0 20px;
}

.desc-title {
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 12px;
  color: #fff;
}

.desc-content {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  line-height: 1.6;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 40px;
}

.pagination-bullet {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s;
}

.pagination-bullet.active {
  background: #fff;
  transform: scale(1.2);
}

/* Description Pagination */
.description-pagination-wrap {
  max-width: 800px;
  margin: 40px auto 0;
  padding: 0 20px;
}

.description-list {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.description-item {
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s;
  padding: 8px 0;
  border-bottom: 2px solid transparent;
}

.description-item.active {
  opacity: 1;
  border-bottom-color: #fff;
}

.description-title {
  font-size: 16px;
  color: #fff;
}

.description-content {
  text-align: center;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

/* Single Image Sections */
.single-img-container {
  max-width: 1200px;
  margin: 0 auto 40px;
  padding: 0 40px;
}

.single-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.single-description {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 40px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.description-item {
  text-align: center;
}

.description-item .description-title {
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 12px;
  color: #fff;
}

.description-item .description-content {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

/* Buttons */
.voyah-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.05em;
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.voyah-button:hover {
  background: #fff;
  color: #000;
}

.voyah-button--dark {
  background: #fff;
  color: #000;
  border-color: #fff;
}

.voyah-button--dark:hover {
  background: transparent;
  color: #fff;
}

.voyah-button--plain {
  background: transparent;
  color: #fff;
}

/* Animation utilities */
.inview-child {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.inview-animated {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 1024px) {
  .side-nav {
    display: none;
  }

  .section-content .title {
    font-size: 36px;
  }

  .kv-logo {
    width: 200px;
  }

  .commonMax {
    padding: 60px 20px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .section-content .title {
    font-size: 28px;
  }

  .section-content .subTitle {
    font-size: 16px;
  }

  .kv-slogan {
    font-size: 18px;
  }

  .common .title {
    font-size: 24px;
  }

  .desc-title {
    font-size: 20px;
  }

  .single-img-container,
  .single-description {
    padding: 0 20px;
  }
}
</style>
