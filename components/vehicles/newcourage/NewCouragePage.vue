<template>
  <div class="new-courage-page">
    <!-- Hero Section -->
    <section class="kv-section" id="hero">
      <div class="kv-bg">
        <img src="/assets/OFFICIALVOYAH/newcourage/images/sc_1.jpg" alt="Voyah New Courage" class="kv-bg-img" />
      </div>
      <div class="kv-content">
        <img
          src="/assets/OFFICIALVOYAH/newcourage/images/newCourage.png"
          alt="Voyah New Courage"
          class="kv-logo inview-child inview-animated"
          style="--inview-delay: 0.3s;"
        />
        <p class="kv-slogan inview-child inview-animated" style="--inview-delay: 0.4s;">
          {{ textFor({ en: 'Huawei ADS & HarmonyOS Cockpit Pure Electric SUV', fr: 'SUV Électrique Huawei ADS & Cockpit HarmonyOS', ar: 'سيارة SUV كهربائية Huawei ADS و HarmonyOS' }) }}
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

    <!-- Car Gallery Swiper -->
    <section class="car-gallery" id="gallery">
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.gallery * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in gallerySlides" :key="idx">
            <div class="car-gallery__img-text">{{ slide.text }}</div>
            <img :src="slide.image" :alt="slide.text" class="car-gallery__img" />
            <div class="car-gallery__img-description">
              <div class="car-gallery__img-description--item" v-for="(spec, sIdx) in slide.specs" :key="sIdx">
                <p class="car-gallery__img-description--title">{{ spec.value }}</p>
                <p class="car-gallery__img-description--content">{{ spec.label }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="car-gallery__pagination">
        <span
          v-for="(_, idx) in gallerySlides"
          :key="idx"
          class="swiper-pagination-bullet"
          :class="{ active: currentSlide.gallery === idx }"
          @click="currentSlide.gallery = idx"
        ></span>
      </div>
      <div class="car-gallery__prev" :class="{ disabled: currentSlide.gallery === 0 }" @click="prevGallery"></div>
      <div class="car-gallery__next" :class="{ disabled: currentSlide.gallery === gallerySlides.length - 1 }" @click="nextGallery"></div>
    </section>

    <!-- Section 1: Warm Home - Exterior -->
    <section id="section1" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/newcourage/images/sc_3.jpg')` }">
      <h2 class="title inview-child inview-animated">{{ textFor({ en: 'Warm Home', fr: 'Maison Chaleureuse', ar: 'المنزل الدافئ' }) }}</h2>
      <p class="subTitle inview-child inview-animated">{{ textFor({ en: 'More exquisite, more agile design', fr: 'Design plus exquis et plus agile', ar: 'تصميم أكثر رقة ورشاقة' }) }}</p>
    </section>

    <!-- Starlight Aesthetics -->
    <section class="level-two" id="starlight">
      <div class="headline">
        <h2 class="title">{{ textFor({ en: 'Starlight Companion Aesthetics', fr: 'Esthétique Compagnon Stellaire', ar: 'جمالية رفيق النجوم' }) }}</h2>
        <p class="subTitle">{{ textFor({ en: 'Toward the stars, gentle journey home', fr: 'Vers les étoiles, doux retour à la maison', ar: 'نحو النجوم، عودة لطيفة للمنزل' }) }}</p>
      </div>
      <div class="img-wrap">
        <img src="/assets/OFFICIALVOYAH/newcourage/images/sc_4.jpg" alt="Starlight Aesthetics" class="img" />
      </div>
    </section>

    <!-- Twinkling Starlight LED Light Curtain -->
    <section class="common" id="led-curtain">
      <h3 class="title inview-child">{{ textFor({ en: 'Twinkling Starlight LED Light Curtain', fr: 'Rideau Lumineux LED Étoiles Scintillantes', ar: 'ستارة LED النجوم الوميضة' }) }}</h3>
      <div class="single-img inview-child margin-top-0">
        <img src="/assets/OFFICIALVOYAH/newcourage/images/sc_6.jpg" alt="LED Light Curtain" class="img" />
      </div>
      <div class="single-description inview-child column1">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '264 automotive-grade LED beads', fr: '264 perles LED de qualité automobile', ar: '264 حبة LED من درجة السيارات' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Over 50,000 diamond patterns create a brilliant star river, accompanying every journey home', fr: 'Plus de 50 000 motifs diamants créent une rivière d\'étoiles brillante', ar: 'أكثر من 50000 نمط ألماس ينشئ نهر نجوم متألق' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Exterior Features Swiper -->
    <section class="common commonMax" id="exterior-features">
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.exterior * 100}%, 0, 0)` }">
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

    <!-- Car Color Selector -->
    <section class="car-color-container" id="colors">
      <h3 class="title">{{ textFor({ en: 'Explore 6 Exterior Themes', fr: 'Explorez 6 Thèmes Extérieurs', ar: 'استكشف 6 ثيمات خارجية' }) }}</h3>
      <div class="car-swiper-wap">
        <div
          v-for="(color, idx) in carColors"
          :key="idx"
          class="swiper-slide"
          :style="{ left: currentColor === idx ? '0%' : '100%', transition: 'none' }"
        >
          <div class="swiper-slide-item">
            <img :src="color.carImage" :alt="color.name" class="swiper-slide-img" />
          </div>
        </div>
      </div>
      <div class="car-color-list">
        <div
          v-for="(color, idx) in carColors"
          :key="idx"
          class="car-color-item"
          :class="{ active: currentColor === idx }"
          @click="currentColor = idx"
        >
          <div class="color-icon">
            <img :src="color.icon" :alt="color.name" class="img-icon" />
          </div>
          <p class="color-name">{{ color.name }}</p>
        </div>
      </div>
    </section>

    <!-- Section 2: Comfortable Home - Interior -->
    <section class="level-two" id="interior">
      <div class="headline">
        <h2 class="title">{{ textFor({ en: 'Starlight Embrace Cockpit', fr: 'Cockpit Étreinte Stellaire', ar: 'قمرة القيادة المعانقة للنجوم' }) }}</h2>
        <p class="subTitle">{{ textFor({ en: 'Galaxy as dome, surrounded by starlight, a mobile observatory', fr: 'Galaxie en dôme, entouré de lumières stellaires, un observatoire mobile', ar: 'المجرة كقبة، محاط بنور النجوم، مرصد متنقل' }) }}</p>
      </div>
      <div class="img-wrap">
        <img src="/assets/OFFICIALVOYAH/newcourage/images/sc_8.jpg" alt="Interior" class="img" />
      </div>
    </section>

    <!-- Firefly Ambient Light -->
    <section class="common" id="ambient-light">
      <h3 class="title inview-child">{{ textFor({ en: 'Firefly Ambient Lighting', fr: 'Éclairage d\'Ambiance Lucioles', ar: 'إضاءة محيطة اليراعات' }) }}</h3>
      <div class="single-img inview-child">
        <img src="/assets/OFFICIALVOYAH/newcourage/images/sc_9.jpg" alt="Ambient Lighting" class="img" />
      </div>
    </section>

    <!-- Interior Features Swiper -->
    <section class="common commonMax" id="interior-features">
      <h3 class="title inview-child">{{ textFor({ en: 'Luxury Interior', fr: 'Intérieur de Luxe', ar: 'مقصورة فاخرة' }) }}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.interior * 100}%, 0, 0)` }">
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

    <!-- Section 3: Fun Home -->
    <section id="section3" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/newcourage/images/sc_12.jpg')` }">
      <h2 class="title inview-child inview-animated">{{ textFor({ en: 'Fun Home', fr: 'Maison Amusante', ar: 'المنزل الممتع' }) }}</h2>
      <p class="subTitle inview-child inview-animated">{{ textFor({ en: 'Space transformation, infinite possibilities', fr: 'Transformation spatiale, possibilités infinies', ar: 'تحول مكاني، إمكانيات لا نهائية' }) }}</p>
    </section>

    <!-- Space Features -->
    <section class="common" id="space-features">
      <div class="single-img-container inview-child">
        <img src="/assets/OFFICIALVOYAH/newcourage/images/sc_13.jpg" alt="Space Features" class="single-img" />
      </div>
      <div class="single-description inview-child features-grid">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '86% space utilization', fr: '86% d\'utilisation de l\'espace', ar: '86% استغلال المساحة' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Maximized interior space for ultimate comfort', fr: 'Espace intérieur maximisé pour un confort ultime', ar: 'مساحة داخلية قصوى لراحة فائقة' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '10-layer composite zero-gravity seat', fr: 'Siège zéro-gravité 10 couches', ar: 'مقعد بلا جاذبية 10 طبقات' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'NASA-inspired ergonomic design', fr: 'Design ergonomique inspiré de la NASA', ar: 'تصميم مريح مستوحى من ناسا' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Section 4: Smart Home -->
    <section id="section4" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/newcourage/images/sc_18.jpg')` }">
      <h2 class="title inview-child inview-animated">{{ textFor({ en: 'Smart Home', fr: 'Maison Intelligente', ar: 'المنزل الذكي' }) }}</h2>
      <p class="subTitle inview-child inview-animated">{{ textFor({ en: 'AI large model, making interaction more emotional', fr: 'Grand modèle IA, rendant l\'interaction plus émotionnelle', ar: 'نموذج ذكاء اصطناعي كبير، يجعل التفاعل أكثر عاطفية' }) }}</p>
    </section>

    <!-- HarmonyOS Cockpit -->
    <section class="common" id="harmonyos">
      <h3 class="title inview-child">{{ textFor({ en: 'HarmonyOS Cockpit', fr: 'Cockpit HarmonyOS', ar: 'مقصورة هارموني أو إس' }) }}</h3>
      <p class="subTitle inview-child">{{ textFor({ en: 'Seamless intelligent connectivity', fr: 'Connectivité intelligente fluide', ar: 'اتصال ذكي سلس' }) }}</p>
      <div class="img-container">
        <img src="/assets/OFFICIALVOYAH/newcourage/images/sc_19.jpg" alt="HarmonyOS" class="single-img inview-child" />
      </div>
      <div class="single-description inview-child features-grid">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '15.6-inch 2K smart screen', fr: 'Écran intelligent 2K 15.6 pouces', ar: 'شاشة ذكية 2K 15.6 بوصة' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Super desktop 2.0 | Seamless phone-car connectivity', fr: 'Super bureau 2.0 | Connectivité téléphone-voiture sans couture', ar: 'سطح مكتب سوبر 2.0 | اتصال سلس بين الهاتف والسيارة' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Voice control everywhere', fr: 'Contrôle vocal partout', ar: 'التحكم الصوتي في كل مكان' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Natural language understanding for intuitive commands', fr: 'Compréhension du langage naturel pour des commandes intuitives', ar: 'فهم اللغة الطبيعية للأوامر البديهية' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Huawei ADS -->
    <section class="common" id="huawei-ads">
      <h3 class="title inview-child">{{ textFor({ en: 'Huawei ADS 3.0', fr: 'Huawei ADS 3.0', ar: 'نظام هواوي ADS 3.0' }) }}</h3>
      <p class="subTitle inview-child">{{ textFor({ en: 'Safer, smarter autonomous driving', fr: 'Conduite autonome plus sûre et intelligente', ar: 'قيادة ذاتية أكثر أماناً وذكاءً' }) }}</p>
      <div class="img-container">
        <img src="/assets/OFFICIALVOYAH/newcourage/images/sc_21.jpg" alt="Huawei ADS" class="single-img inview-child" />
      </div>
      <div class="single-description inview-child features-grid">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '192-line LiDAR', fr: 'LiDAR 192 lignes', ar: 'ليدار 192 خط' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Industry-leading precision perception', fr: 'Perception de précision leader de l\'industrie', ar: 'إدراك دقيق رائد في الصناعة' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '29 high-perception sensors', fr: '29 capteurs haute perception', ar: '29 مستشعر إدراك عالي' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'All-weather, all-round, all-target detection', fr: 'Détection tout temps, tout azimut, toute cible', ar: 'كشف على مدار الساعة ومن جميع الجهات وجميع الأهداف' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Parking Features -->
    <section class="common commonMax" id="parking">
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.parking * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in parkingSlides" :key="idx">
            <div class="slide-img">
              <img :src="'/assets/OFFICIALVOYAH/newcourage/images/sc_' + (20 + idx) + '.jpg'" :alt="slide.title" class="img" />
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
          v-for="(_, idx) in parkingSlides"
          :key="idx"
          class="pagination-bullet"
          :class="{ active: currentSlide.parking === idx }"
          @click="currentSlide.parking = idx"
        ></div>
      </div>
      <div class="description-pagination-wrap inview-child">
        <div class="description-list">
          <div
            v-for="(slide, idx) in parkingSlides"
            :key="idx"
            class="description-item"
            :class="{ active: currentSlide.parking === idx }"
            @click="currentSlide.parking = idx"
          >
            <p class="description-title">{{ slide.title }}</p>
          </div>
        </div>
        <p class="description-content">{{ parkingSlides[currentSlide.parking].desc }}</p>
      </div>
    </section>

    <!-- Section 5: Efficient Home -->
    <section id="section5" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/newcourage/images/sc_34.jpg')` }">
      <h2 class="title inview-child inview-animated">{{ textFor({ en: 'Efficient Home', fr: 'Maison Efficace', ar: 'المنزل الكفؤ' }) }}</h2>
      <p class="subTitle inview-child inview-animated">{{ textFor({ en: 'Full-level 3-electric system, endless happiness', fr: 'Système 3-électrique complet, bonheur sans fin', ar: 'نظام ثلاثي كهربائي كامل، سعادة لا نهاية لها' }) }}</p>
    </section>

    <!-- 800V Platform -->
    <section class="common" id="platform">
      <h3 class="title inview-child">{{ textFor({ en: 'Full-domain 800V Silicon Carbide Platform', fr: 'Plateforme 800V Carbure de Silicium', ar: 'منصة كربيد السيليكون 800V' }) }}</h3>
      <p class="subTitle inview-child">{{ textFor({ en: 'Low energy consumption, long range, farewell to range anxiety', fr: 'Faible consommation, longue autonomie, adieu à l\'anxiété', ar: 'استهلاك منخفض، مدى طويل، وداعاً للقلق' }) }}</p>
      <div class="img-container">
        <img src="/assets/OFFICIALVOYAH/newcourage/images/sc_35.jpg" alt="800V Platform" class="single-img inview-child" />
      </div>
      <div class="single-description inview-child features-grid">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '901km CLTC range', fr: '901km d\'autonomie CLTC', ar: '901 كم مدى CLTC' }) }}</p>
          <p class="description-content">{{ textFor({ en: '112kWh CATL battery, 13.6kWh/100km consumption', fr: 'Batterie CATL 112kWh, consommation 13.6kWh/100km', ar: 'بطارية CATL 112 كيلوواط، استهلاك 13.6 كيلوواط/100 كم' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '92.5% drive efficiency', fr: '92.5% d\'efficacité de conduite', ar: '92.5% كفاءة القيادة' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Industry-leading efficiency', fr: 'Efficacité leader de l\'industrie', ar: 'كفاءة رائدة في الصناعة' }) }}</p>
        </div>
      </div>
    </section>

    <!-- 5C Fast Charging -->
    <section class="common" id="charging">
      <h3 class="title inview-child">{{ textFor({ en: '5C Super Fast Charging', fr: 'Recharge Ultra-Rapide 5C', ar: 'شحن سريع فائق 5C' }) }}</h3>
      <p class="subTitle inview-child">{{ textFor({ en: 'A cup of coffee time, vacation starts now', fr: 'Le temps d\'un café, les vacances commencent', ar: 'وقت كوب قهوة، تبدأ العطلة الآن' }) }}</p>
      <div class="single-img inview-child">
        <img src="/assets/OFFICIALVOYAH/newcourage/images/sc_36.jpg" alt="5C Charging" class="img" />
      </div>
      <div class="swiper-container inview-child">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.charging * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in chargingSlides" :key="idx">
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.title }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination inview-child">
        <div
          v-for="(_, idx) in chargingSlides"
          :key="idx"
          class="pagination-bullet"
          :class="{ active: currentSlide.charging === idx }"
          @click="currentSlide.charging = idx"
        ></div>
      </div>
      <div class="description-pagination-wrap inview-child">
        <div class="description-list">
          <div
            v-for="(slide, idx) in chargingSlides"
            :key="idx"
            class="description-item"
            :class="{ active: currentSlide.charging === idx }"
            @click="currentSlide.charging = idx"
          >
            <p class="description-title">{{ slide.title }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 6: Safe Home -->
    <section id="section6" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/newcourage/images/sc_39.jpg')` }">
      <h2 class="title inview-child inview-animated">{{ textFor({ en: 'Safe Home', fr: 'Maison Sûre', ar: 'المنزل الآمن' }) }}</h2>
      <p class="subTitle inview-child inview-animated">{{ textFor({ en: 'All-round safety, guarding loved ones every moment', fr: 'Sécurité totale, protéger les êtres chers à chaque instant', ar: 'سلامة شاملة، حماية الأحباء في كل لحظة' }) }}</p>
    </section>

    <!-- Body Safety -->
    <section class="common" id="body-safety">
      <h3 class="title inview-child">{{ textFor({ en: 'Body Safety', fr: 'Sécurité de la Carrosserie', ar: 'سلامة الهيكل' }) }}</h3>
      <p class="subTitle inview-child">{{ textFor({ en: 'Solid as rock, guarding the lifeline', fr: 'Solide comme le roc, gardien de la ligne de vie', ar: 'صلب كالصخر، حارس خط الحياة' }) }}</p>
      <div class="img-container">
        <img src="/assets/OFFICIALVOYAH/newcourage/images/sc_40.jpg" alt="Body Safety" class="single-img inview-child" />
      </div>
      <div class="single-description inview-child column3">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Dual 5-star safety standard', fr: 'Double standard de sécurité 5 étoiles', ar: 'معيار سلامة مزدوج 5 نجوم' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Hardcore safety strength', fr: 'Force de sécurité inébranlable', ar: 'قوة أمان لا تتزعزع' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Ultra-high rigidity cage body', fr: 'Carrosserie cage ultra-rigide', ar: 'هيكل قفص فائق الصلابة' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Solid foundation for handling and comfort', fr: 'Fondement solide pour maniabilité et confort', ar: 'أساس متين للمناورة والراحة' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '2000MPa aluminum-silicon door beam', fr: 'Poutre de porte aluminium-silicium 2000MPa', ar: 'عارضة باب ألومنيوم-سيليكون 2000 ميجا باسكال' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Global首创 ultra-high strength material', fr: 'Matériau ultra-résistant pionnier mondial', ar: 'مادة فائقة القوة رائدة عالمياً' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Seven-layer Front Collision Protection -->
    <section class="common" id="collision">
      <div class="img-container">
        <img src="/assets/OFFICIALVOYAH/newcourage/images/sc_41.jpg" alt="Collision Protection" class="single-img inview-child margin-top-0" />
      </div>
      <div class="single-description inview-child column1">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Seven-layer frontal collision protection', fr: 'Protection collision frontale sept couches', ar: 'حماية تصادم أمامية بسبع طبقات' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Effectively absorb and disperse impact forces', fr: 'Absorber et disperser efficacement les forces d\'impact', ar: 'امتصاص وتشتيت قوى التصادم بفعالية' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Battery Safety -->
    <section class="common" id="battery-safety">
      <h3 class="title inview-child">{{ textFor({ en: 'Battery Safety', fr: 'Sécurité de la Batterie', ar: 'سلامة البطارية' }) }}</h3>
      <p class="subTitle inview-child">{{ textFor({ en: 'Hardcore protection, TOP-level technical safety', fr: 'Protection inébranlable, sécurité technique de premier ordre', ar: 'حماية لا تتزعزع، أمان تقني من الطراز الأول' }) }}</p>
      <div class="img-container">
        <img src="/assets/OFFICIALVOYAH/newcourage/images/sc_42.jpg" alt="Battery Safety" class="single-img inview-child" />
      </div>
      <div class="single-description inview-child column3">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '16-layer structural protection', fr: 'Protection structurale 16 couches', ar: 'حماية هيكلية 16 طبقة' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Layer by layer protection, safety buff stacked', fr: 'Protection couche par couche, bonus de sécurité cumulé', ar: 'حماية طبقة بطبقة، مكافآت أمان متراكمة' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Industry TOP-level 7-layer sealing', fr: 'Étanchéité 7 couches de niveau industriel supérieur', ar: 'إحكام 7 طبقات من المستوى المتقدم في الصناعة' }) }}</p>
          <p class="description-content">{{ textFor({ en: '1m water depth, 72 hours no water ingress', fr: '1m de profondeur d\'eau, 72h sans infiltration', ar: 'عمق متر واحد في الماء، 72 ساعة بدون تسرب' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '7×24h millisecond battery cloud guard', fr: 'Garde cloud batterie milliseconde 7×24h', ar: 'حارس سحابي للبطارية بالميلي ثانية على مدار الساعة' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'All-weather, all-region, all-condition health protection', fr: 'Protection santé tout temps, toute région, toute condition', ar: 'حماية صحية على مدار الساعة وفي كل منطقة وظرف' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Disclaimer -->
    <section class="car-desc-content">
      <div>
        {{ textFor({ 
          en: '1. 901km CLTC range: Test data under full charge, actual range may vary due to weather, driving habits, road conditions, load and other factors. Data for reference only, subject to actual vehicle.\n2. 5C Super Fast Charging: Only 81kWh battery supports 5C charging, actual charging time depends on equipment and environment.\n3. 15min charging for 515km: Requires 400kW+ charging pile, data may vary with different equipment.\n4. 92.5% drive efficiency: CLTC simulation data for reference only.\n5. Space utilization = front legroom to rear seat length / wheelbase.\nContent for reference only, actual vehicle configuration may vary.', 
          fr: '1. Autonomie CLTC 901km: Données de test en charge complète, autonomie réelle variable selon conditions.\n2. Recharge 5C: Uniquement batterie 81kWh, temps de charge selon équipement.\n3. 15min pour 515km: Nécessite borne 400kW+, données variables.\n4. Efficacité 92.5%: Données simulation CLTC.\n5. Utilisation espace = espace jambes avant à siège arrière / empattement.\nContenu indicatif, configuration réelle susceptible de varier.',
          ar: '1. مدى CLTC 901 كم: بيانات اختبار بالشحن الكامل، المدى الفعلي يختلف حسب الظروف.\n2. شحن 5C: بطارية 81kWh فقط، وقت الشحن حسب المعدات.\n3. 15 دقيقة لـ 515 كم: يتطلب 400kW+، البيانات متغيرة.\n4. كفاءة 92.5%: بيانات محاكاة CLTC.\n5. استغلال المساحة = مساحة الساق الأمامية إلى مقعد خلفي / قاعدة العجلات.\nالمحتوى للمرجعية فقط، التكوين الفعلي قد يختلف.'
        }) }}
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useSiteContent } from '~/composables/useSiteContent'

const { textFor } = useSiteContent()

// Navigation state
const activeSection = ref(0)
const showMobileNav = ref(false)

// Slide state
const currentSlide = ref({
  gallery: 0,
  exterior: 0,
  interior: 0,
  parking: 0,
  charging: 0
})

const currentColor = ref(0)

// Chapter sections data
const chapterSections = computed(() => [
  { id: 'section1', title: textFor({ en: 'Warm Home', fr: 'Maison Chaleureuse', ar: 'المنزل الدافئ' }) },
  { id: 'section3', title: textFor({ en: 'Fun Home', fr: 'Maison Amusante', ar: 'المنزل الممتع' }) },
  { id: 'section4', title: textFor({ en: 'Smart Home', fr: 'Maison Intelligente', ar: 'المنزل الذكي' }) },
  { id: 'section5', title: textFor({ en: 'Efficient Home', fr: 'Maison Efficace', ar: 'المنزل الكفؤ' }) },
  { id: 'section6', title: textFor({ en: 'Safe Home', fr: 'Maison Sûre', ar: 'المنزل الآمن' }) }
])

// Gallery slides
const gallerySlides = computed(() => [
  {
    image: '/assets/OFFICIALVOYAH/newcourage/images/swiper_01_0001.jpg',
    text: textFor({ en: 'Spacious space, enjoyment for the whole family', fr: 'Espace spacieux, plaisir pour toute la famille', ar: 'مساحة واسعة، متعة للعائلة بأكملها' }),
    specs: [
      { value: '4810mm', label: textFor({ en: 'Length', fr: 'Longueur', ar: 'الطول' }) },
      { value: '1900mm', label: textFor({ en: 'Width', fr: 'Largeur', ar: 'العرض' }) },
      { value: '1636mm', label: textFor({ en: 'Height', fr: 'Hauteur', ar: 'الارتفاع' }) },
      { value: '2925mm', label: textFor({ en: 'Wheelbase', fr: 'Empattement', ar: 'قاعدة العجلات' }) }
    ]
  },
  {
    image: '/assets/OFFICIALVOYAH/newcourage/images/swiper_01_0002.jpg',
    text: textFor({ en: 'Complete comfort, freedom at will', fr: 'Confort complet, liberté à volonté', ar: 'راحة كاملة، حرية على الإرادة' }),
    specs: [
      { value: textFor({ en: 'Zero-gravity seat', fr: 'Siège zéro-gravité', ar: 'مقعد بلا جاذبية' }), label: textFor({ en: 'Passenger', fr: 'Passager', ar: 'الراكب' }) },
      { value: textFor({ en: '4-seat ventilation/heating', fr: 'Ventilation/chauffage 4 places', ar: 'تهوية/تسخين 4 مقاعد' }), label: textFor({ en: 'Front massage', fr: 'Massage avant', ar: 'تدليك أمامي' }) },
      { value: textFor({ en: 'Dual-zone fridge', fr: 'Réfrigérateur double zone', ar: 'ثلاجة ثنائية المناطق' }), label: textFor({ en: 'Center console', fr: 'Console centrale', ar: 'وحدة التحكم المركزية' }) },
      { value: 'VOYAH Sound', label: textFor({ en: 'Theater audio', fr: 'Audio théâtre', ar: 'صوت المسرح' }) }
    ]
  },
  {
    image: '/assets/OFFICIALVOYAH/newcourage/images/swiper_01_0003.jpg',
    text: textFor({ en: 'Smart technology, silky smooth', fr: 'Technologie intelligente, douce comme la soie', ar: 'تقنية ذكية، ناعمة كالحرير' }),
    specs: [
      { value: 'HarmonySpace 5', label: textFor({ en: 'Super desktop 2.0', fr: 'Super bureau 2.0', ar: 'سطح مكتب سوبر 2.0' }) },
      { value: 'Huawei ADS4', label: textFor({ en: '192-line LiDAR', fr: 'LiDAR 192 lignes', ar: 'ليدار 192 خط' }) }
    ]
  },
  {
    image: '/assets/OFFICIALVOYAH/newcourage/images/swiper_01_0005.jpg',
    text: textFor({ en: 'Full-capability 3-electric, efficiency first', fr: '3-électrique complet, efficacité d\'abord', ar: 'ثلاثي كهربائي كامل، الكفاءة أولاً' }),
    specs: [
      { value: '901km', label: textFor({ en: 'CLTC range', fr: 'Autonomie CLTC', ar: 'مدى CLTC' }) },
      { value: '800V', label: textFor({ en: 'Full-domain SiC', fr: 'SiC tout domaine', ar: 'SiC كل المجالات' }) },
      { value: '5C', label: textFor({ en: 'Super fast charging', fr: 'Recharge ultra-rapide', ar: 'شحن فائق السرعة' }) },
      { value: '15min', label: textFor({ en: '515km charging', fr: '515km de recharge', ar: '515 كم شحن' }) }
    ]
  }
])

// Exterior slides
const exteriorSlides = computed(() => [
  {
    image: '/assets/OFFICIALVOYAH/newcourage/images/sc_6.jpg',
    title: textFor({ en: 'Sky Mirror Side Body', fr: 'Flanc Miroir Céleste', ar: 'جسم جانبي مرآة السماء' }),
    desc: textFor({ en: 'Clean curved surfaces, smooth lines, exquisite and premium', fr: 'Surfaces courbes propres, lignes fluides, exquis et premium', ar: 'أسطح منحنية نظيفة، خطوط سلسة، راقية وفاخرة' })
  },
  {
    image: '/assets/OFFICIALVOYAH/newcourage/images/sc_6-2.jpg',
    title: textFor({ en: 'Star Ring OLED Tail Light', fr: 'Feu Arrière OLED Anneau Stellaire', ar: 'ضوء خلفي OLED حلقة النجوم' }),
    desc: textFor({ en: 'Three-dimensional personality, bright and eye-catching, always guarding rear safety', fr: 'Personnalité tridimensionnelle, lumineux et accrocheur, gardien de la sécurité arrière', ar: 'شخصية ثلاثية الأبعاد، مشرق وجذاب، حارس الأمان الخلفي' })
  },
  {
    image: '/assets/OFFICIALVOYAH/newcourage/images/sc_6-3.jpg',
    title: textFor({ en: 'ADAS Blue Indicator', fr: 'Indicateur Bleu ADAS', ar: 'مؤشر ADAS الأزرق' }),
    desc: textFor({ en: 'ADAS status clearly visible, driving more controllable', fr: 'État ADAS clairement visible, conduite plus contrôlable', ar: 'حالة ADAS واضحة، قيادة أكثر تحكمًا' })
  }
])

// Car colors
const carColors = computed(() => [
  { name: textFor({ en: 'Champagne Gold', fr: 'Or Champagne', ar: 'ذهبي شامبانيا' }), icon: '/assets/OFFICIALVOYAH/newcourage/images/icon1.png', carImage: '/assets/OFFICIALVOYAH/newcourage/images/swpier_h37b_00.png' },
  { name: textFor({ en: 'Moonlight Cyan', fr: 'Cyan Clair de Lune', ar: 'سيان ضوء القمر' }), icon: '/assets/OFFICIALVOYAH/newcourage/images/icon2.png', carImage: '/assets/OFFICIALVOYAH/newcourage/images/swpier_h37b_01.png' },
  { name: textFor({ en: 'Storm Pink', fr: 'Rose Tempête', ar: 'وردي عاصفة' }), icon: '/assets/OFFICIALVOYAH/newcourage/images/icon3.png', carImage: '/assets/OFFICIALVOYAH/newcourage/images/swpier_h37b_02.png' },
  { name: textFor({ en: 'Star Grey', fr: 'Gris Stellaire', ar: 'رمادي النجوم' }), icon: '/assets/OFFICIALVOYAH/newcourage/images/icon4.png', carImage: '/assets/OFFICIALVOYAH/newcourage/images/swpier_h37b_03.png' },
  { name: textFor({ en: 'Mystic Black', fr: 'Noir Mystique', ar: 'أسود غامض' }), icon: '/assets/OFFICIALVOYAH/newcourage/images/icon5.png', carImage: '/assets/OFFICIALVOYAH/newcourage/images/swpier_h37b_04.png' },
  { name: textFor({ en: 'Dew White', fr: 'Blanc Rosée', ar: 'أبيض الندى' }), icon: '/assets/OFFICIALVOYAH/newcourage/images/icon6.png', carImage: '/assets/OFFICIALVOYAH/newcourage/images/swpier_h37b_05.png' }
])

// Interior slides
const interiorSlides = computed(() => [
  {
    image: '/assets/OFFICIALVOYAH/newcourage/images/sc_14.jpg',
    title: textFor({ en: 'Firefly Ambient Lighting', fr: 'Éclairage d\'Ambiance Lucioles', ar: 'إضاءة محيطة اليراعات' }),
    desc: textFor({ en: '64-color ambient lighting with customizable themes', fr: 'Éclairage d\'ambiance 64 couleurs avec thèmes personnalisables', ar: 'إضاءة محيطة بـ64 لون مع موضوعات قابلة للتخصيص' })
  },
  {
    image: '/assets/OFFICIALVOYAH/newcourage/images/sc_15.jpg',
    title: textFor({ en: 'Zero-Gravity Seats', fr: 'Sièges Zéro-Gravité', ar: 'مقاعد بلا جاذبية' }),
    desc: textFor({ en: 'NASA-inspired ergonomic seating for ultimate comfort', fr: 'Sièges ergonomiques inspirés de la NASA', ar: 'مقاعد مريحة مستوحاة من ناسا' })
  },
  {
    image: '/assets/OFFICIALVOYAH/newcourage/images/sc_16.jpg',
    title: textFor({ en: 'Premium Materials', fr: 'Matériaux Premium', ar: 'مواد فاخرة' }),
    desc: textFor({ en: 'Nappa leather and sustainable materials throughout', fr: 'Cuir Nappa et matériaux durables partout', ar: 'جلد نابا ومواد مستدامة في كل مكان' })
  }
])

// Parking slides
const parkingSlides = computed(() => [
  {
    title: textFor({ en: 'P2P 2.0 Parking', fr: 'Stationnement P2P 2.0', ar: 'ركن P2P 2.0' }),
    desc: textFor({ en: 'Easy U-turn / Roundabout / Mixed traffic / ETC passage, full scenario from parking space to parking space', fr: 'Demi-tour facile / Rond-point / Trafic mixte / Passage ETC, scénario complet de place à place', ar: 'دوران سهل / دوار / حركة مختلطة / مرور ETC، سيناريو كامل من موقف إلى موقف' })
  },
  {
    title: textFor({ en: 'Smart Parking Assist', fr: 'Assistance Stationnement Intelligent', ar: 'مساعدة الركن الذكية' }),
    desc: textFor({ en: 'Exit parking / Cross-level valet / Custom parking space / Trace reversing', fr: 'Sortie stationnement / Voiturier inter-niveaux / Place personnalisée / Marche arrière tracée', ar: 'خروج من الركن / خادم بين الطوابق / موقف مخصص / ترجيع متتبع' })
  }
])

// Charging slides
const chargingSlides = computed(() => [
  { title: textFor({ en: '81kWh CATL Battery', fr: 'Batterie CATL 81kWh', ar: 'بطارية CATL 81 كيلوواط' }) },
  { title: textFor({ en: '20%-80% in 10 minutes', fr: '20%-80% en 10 minutes', ar: '20%-80% في 10 دقائق' }) }
])

// Navigation methods
const prevGallery = () => {
  if (currentSlide.value.gallery > 0) currentSlide.value.gallery--
}

const nextGallery = () => {
  if (currentSlide.value.gallery < gallerySlides.value.length - 1) currentSlide.value.gallery++
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Scroll handling
let scrollHandler: (() => void) | null = null

onMounted(() => {
  scrollHandler = () => {
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight
    showMobileNav.value = scrollY > windowHeight * 0.5
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
.new-courage-page {
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

.kv-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.kv-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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

/* Car Gallery */
.car-gallery {
  position: relative;
  padding: 60px 0;
  background: #000;
}

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
  position: relative;
}

.car-gallery__img-text {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 18px;
  font-weight: 300;
  color: #fff;
  z-index: 2;
}

.car-gallery__img {
  width: 100%;
  height: auto;
  max-height: 70vh;
  object-fit: cover;
}

.car-gallery__img-description {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 30px;
  flex-wrap: wrap;
  padding: 0 20px;
}

.car-gallery__img-description--item {
  text-align: center;
}

.car-gallery__img-description--title {
  font-size: 24px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 8px;
}

.car-gallery__img-description--content {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}

.car-gallery__pagination {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 30px;
}

.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s;
}

.swiper-pagination-bullet.active {
  background: #fff;
  transform: scale(1.2);
}

.car-gallery__prev,
.car-gallery__next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.car-gallery__prev:hover,
.car-gallery__next:hover {
  background: rgba(255, 255, 255, 0.2);
}

.car-gallery__prev.disabled,
.car-gallery__next.disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.car-gallery__prev {
  left: 20px;
}

.car-gallery__next {
  right: 20px;
}

.car-gallery__prev::after,
.car-gallery__next::after {
  content: '';
  width: 12px;
  height: 12px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
}

.car-gallery__prev::after {
  transform: rotate(-135deg);
}

.car-gallery__next::after {
  transform: rotate(45deg);
}

/* Level One Sections */
.level-one {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
}

.level-one .title {
  font-size: 48px;
  font-weight: 300;
  letter-spacing: 0.05em;
  margin-bottom: 20px;
  color: #fff;
}

.level-one .subTitle {
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.8);
}

/* Level Two Sections */
.level-two {
  padding: 80px 40px;
  background: #000;
  text-align: center;
}

.headline {
  margin-bottom: 40px;
}

.headline .title {
  font-size: 32px;
  font-weight: 300;
  margin-bottom: 16px;
  color: #fff;
}

.headline .subTitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
}

.img-wrap {
  max-width: 1200px;
  margin: 0 auto;
}

.img-wrap .img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

/* Common Sections */
.common {
  padding: 80px 40px;
  background: #000;
}

.commonMax {
  max-width: 1440px;
  margin: 0 auto;
}

.common .title {
  font-size: 32px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
}

.common .subTitle {
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 60px;
  color: rgba(255, 255, 255, 0.7);
}

/* Video Player */
.video-player {
  width: 100%;
  max-width: 1200px;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 8px;
}

/* Single Image */
.single-img {
  width: 100%;
  max-width: 1200px;
  height: auto;
  border-radius: 8px;
}

.single-img.margin-top-0 {
  margin-top: 0;
}

.single-img-container {
  max-width: 1200px;
  margin: 0 auto 40px;
}

/* Description */
.single-description {
  max-width: 1000px;
  margin: 40px auto 0;
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

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.column1 {
  max-width: 600px;
}

.column3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

@media (max-width: 768px) {
  .column3 {
    grid-template-columns: 1fr;
  }
}

/* Image Container with Slide */
.img-container {
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 8px;
}

.slide-img {
  width: 100%;
  height: auto;
  display: block;
}

.desc-wrap {
  text-align: center;
  margin-top: 30px;
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
  margin: 0 auto;
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
  margin: 30px auto 0;
}

.description-list {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.description-list .description-item {
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s;
  padding: 8px 0;
  border-bottom: 2px solid transparent;
}

.description-list .description-item.active {
  opacity: 1;
  border-bottom-color: #fff;
}

.description-list .description-title {
  font-size: 16px;
  color: #fff;
}

.description-content {
  text-align: center;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

/* Car Color Selector */
.car-color-container {
  padding: 80px 40px;
  background: #000;
  text-align: center;
}

.car-color-container .title {
  font-size: 32px;
  font-weight: 300;
  margin-bottom: 40px;
  color: #fff;
}

.car-swiper-wap {
  position: relative;
  height: 400px;
  overflow: hidden;
  margin-bottom: 40px;
}

.car-swiper-wap .swiper-slide {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-slide-item {
  max-width: 800px;
}

.swiper-slide-img {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
}

.car-color-list {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.car-color-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s;
}

.car-color-item.active {
  opacity: 1;
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
  font-size: 14px;
  color: #fff;
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

/* Disclaimer */
.car-desc-content {
  padding: 40px;
  background: #000;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.8;
  max-width: 1200px;
  margin: 0 auto;
}

/* Responsive */
@media (max-width: 1024px) {
  .level-one .title {
    font-size: 36px;
  }

  .kv-logo {
    width: 200px;
  }

  .common {
    padding: 60px 20px;
  }

  .car-gallery__img-description {
    gap: 20px;
  }

  .car-gallery__prev,
  .car-gallery__next {
    display: none;
  }
}

@media (max-width: 768px) {
  .level-one .title {
    font-size: 28px;
  }

  .level-one .subTitle {
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

  .car-gallery__img-description--title {
    font-size: 18px;
  }
}
</style>
