<template>
  <div class="courage-page">
    <!-- Hero Section -->
    <section class="kv-section" id="hero">
      <div class="kv-bg">
        <img src="/assets/OFFICIALVOYAH/courage/images/h37_pc01_0001.jpg" alt="Voyah Courage" class="kv-bg-img" />
      </div>
      <div class="kv-content">
        <img
          src="/assets/OFFICIALVOYAH/courage/images/courage.png"
          alt="Voyah Courage"
          class="kv-logo inview-child inview-animated"
          style="--inview-delay: 0.3s;"
        />
        <p class="kv-slogan inview-child inview-animated" style="--inview-delay: 0.4s;">
          {{ textFor({ en: 'New Luxury Pure Electric SUV', fr: 'Nouveau SUV Électrique de Luxe', ar: 'سيارة SUV كهربائية فاخرة جديدة' }) }}
        </p>
        <div class="kv-btns inview-child inview-animated" style="--inview-delay: 0.5s;">
          <button class="voyah-button voyah-button--more voyah-button--dark voyah-button--plain">
            <span class="voyah-button__text">{{ textFor({ en: 'Book Test Drive', fr: 'Réserver Essai', ar: 'حجز تجربة قيادة' }) }}</span>
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

    <!-- Section 1: Original Aesthetic Design -->
    <section id="section1" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/courage/images/h37_pc02_0001.jpg')` }">
      <h2 class="title inview-child inview-animated">{{ textFor({ en: 'Original Aesthetic Design', fr: 'Design Esthétique Original', ar: 'تصميم جمالي أصلي' }) }}</h2>
      <p class="subTitle inview-child inview-animated">{{ textFor({ en: 'True to aesthetic origins, neither vulgar nor artificial', fr: 'Fidèle aux origines esthétiques, ni vulgaire ni artificiel', ar: 'وفي للأصول الجمالية، لا مبتذل ولا مصطنع' }) }}</p>
    </section>

    <!-- Force Flight - Take Off Now -->
    <section class="common commonMax" id="force-flight">
      <h3 class="title inview-child">{{ textFor({ en: 'Force Flight - Take Off Now', fr: 'Vol de Force - Décollage Immédiat', ar: 'رحلة القوة - انطلق الآن' }) }}</h3>
      <p class="subTitle inview-child">{{ textFor({ en: 'Making dynamics and experience one', fr: 'Fusionner dynamique et expérience', ar: 'جعل الديناميكية والتجربة واحدة' }) }}</p>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.forceFlight * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in forceFlightSlides" :key="idx">
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
          v-for="(_, idx) in forceFlightSlides"
          :key="idx"
          class="pagination-bullet"
          :class="{ active: currentSlide.forceFlight === idx }"
          @click="currentSlide.forceFlight = idx"
        ></div>
      </div>
      <div class="description-pagination-wrap inview-child">
        <div class="description-list">
          <div
            v-for="(slide, idx) in forceFlightSlides"
            :key="idx"
            class="description-item"
            :class="{ active: currentSlide.forceFlight === idx }"
            @click="currentSlide.forceFlight = idx"
          >
            <p class="description-title">{{ slide.title }}</p>
          </div>
        </div>
        <p class="description-content">{{ forceFlightSlides[currentSlide.forceFlight].desc }}</p>
      </div>
    </section>

    <!-- Design Features -->
    <section class="common commonMax margin-top-0" id="design-features">
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.design * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in designSlides" :key="idx">
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
          v-for="(_, idx) in designSlides"
          :key="idx"
          class="pagination-bullet"
          :class="{ active: currentSlide.design === idx }"
          @click="currentSlide.design = idx"
        ></div>
      </div>
      <div class="description-pagination-wrap inview-child">
        <div class="description-list">
          <div
            v-for="(slide, idx) in designSlides"
            :key="idx"
            class="description-item"
            :class="{ active: currentSlide.design === idx }"
            @click="currentSlide.design = idx"
          >
            <p class="description-title">{{ slide.title }}</p>
          </div>
        </div>
        <p class="description-content">{{ designSlides[currentSlide.design].desc }}</p>
      </div>
    </section>

    <!-- Space Aesthetics - Nebula Colors -->
    <section class="car-color-container" id="nebula-colors">
      <h3 class="title">{{ textFor({ en: 'Space Aesthetics - Nebula', fr: 'Esthétique Spatiale - Nébuleuse', ar: 'جماليات الفضاء - سديم' }) }}</h3>
      <div class="car-swiper-wap">
        <div
          v-for="(color, idx) in nebulaColors"
          :key="idx"
          class="swiper-slide"
          :style="{ left: currentNebulaColor === idx ? '0%' : '100%', transition: 'none' }"
        >
          <div class="swiper-slide-item">
            <img :src="color.carImage" :alt="color.name" class="swiper-slide-img" />
          </div>
        </div>
      </div>
      <div class="car-color-list">
        <div
          v-for="(color, idx) in nebulaColors"
          :key="idx"
          class="car-color-item"
          :class="{ active: currentNebulaColor === idx }"
          @click="currentNebulaColor = idx"
        >
          <div class="color-icon">
            <img :src="color.icon" :alt="color.name" class="img-icon" />
          </div>
          <p class="color-name">{{ color.name }}</p>
        </div>
      </div>
    </section>

    <!-- Space Aesthetics - Planets Interior -->
    <section class="common commonMax" id="planets-interior">
      <h3 class="title inview-child">{{ textFor({ en: 'Space Aesthetics - Planets', fr: 'Esthétique Spatiale - Planètes', ar: 'جماليات الفضاء - كواكب' }) }}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.interior * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in interiorSlides" :key="idx">
            <div class="img-container">
              <img :src="slide.image" :alt="slide.name" class="slide-img" />
            </div>
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.name }}</p>
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
            <p class="description-title">{{ slide.name }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Full Power -->
    <section id="section2" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/courage/images/h37_pc06_0001.jpg')` }">
      <h2 class="title inview-child inview-animated">{{ textFor({ en: 'Full Power', fr: 'Plein Puissance', ar: 'قوة كاملة' }) }}</h2>
      <p class="subTitle inview-child inview-animated">{{ textFor({ en: 'Full-level 3-electric system, running long for love', fr: 'Système 3-électrique complet, longue course pour l\'amour', ar: 'نظام ثلاثي كهربائي كامل، جري طويل من أجل الحب' }) }}</p>
    </section>

    <!-- 901km Super Long Range -->
    <section class="common" id="range">
      <h3 class="title inview-child">{{ textFor({ en: '901km Super Long Range', fr: 'Autonomie Super Longue 901km', ar: 'مدى فائق الطول 901 كم' }) }}</h3>
      <p class="subTitle inview-child">{{ textFor({ en: 'Full-level 3-electric system, go wherever you want', fr: 'Système 3-électrique complet, allez où vous voulez', ar: 'نظام ثلاثي كهربائي كامل، اذهب حيثما تريد' }) }}</p>
      <div class="single-img-container inview-child">
        <img src="/assets/OFFICIALVOYAH/courage/images/h37_pc07_0001.jpg" alt="901km Range" class="single-img" />
      </div>
      <div class="single-description inview-child features-grid">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '109kWh Battery Pack', fr: 'Pack Batterie 109kWh', ar: 'حزمة بطارية 109 كيلوواط ساعة' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Industry\'s highest energy density battery, one charge for worry-free long-distance travel', fr: 'Batterie à plus haute densité énergétique, une charge pour voyages longue distance', ar: 'بطارية ذات أعلى كثافة طاقة في الصناعة، شحنة واحدة للسفر لمسافات طويلة' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '901km CLTC Range', fr: '901km Autonomie CLTC', ar: '901 كم مدى CLTC' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'More than 900km range per charge, freedom to go anywhere', fr: 'Plus de 900km par charge, liberté d\'aller partout', ar: 'أكثر من 900 كم لكل شحنة، حرية الذهاب إلى أي مكان' }) }}</p>
        </div>
      </div>
    </section>

    <!-- 5C Super Fast Charging -->
    <section class="common" id="charging">
      <h3 class="title inview-child">{{ textFor({ en: '5C Super Fast Charging', fr: 'Charge Super Rapide 5C', ar: 'شحن فائق السرعة 5C' }) }}</h3>
      <p class="subTitle inview-child">{{ textFor({ en: 'Charging as fast as refueling, full power in a moment', fr: 'Charge aussi rapide que le ravitaillement, pleine puissance en un instant', ar: 'شحن سريع كالتزود بالوقود، قوة كاملة في لحظة' }) }}</p>
      <div class="single-img-container inview-child">
        <img src="/assets/OFFICIALVOYAH/courage/images/h37_pc07_0001.jpg" alt="5C Charging" class="single-img" />
      </div>
      <div class="single-description inview-child column3">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '15min Charge 515km', fr: '15min Charge 515km', ar: '15 دقيقة شحن 515 كم' }) }}</p>
          <p class="description-content">{{ textFor({ en: '5C peak charging rate, 515km range in 15 minutes', fr: 'Taux de charge 5C, 515km en 15 minutes', ar: 'معدل شحن قمة 5C، 515 كم في 15 دقيقة' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '10-80% in 20min', fr: '10-80% en 20min', ar: '10-80% في 20 دقيقة' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Industry-leading charging speed, no more waiting anxiety', fr: 'Vitesse de charge leader, plus d\'anxiété d\'attente', ar: 'سرعة شحن رائدة، لا مزيد من قلق الانتظار' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '1M km <8% Degradation', fr: '<8% Dégradation à 1M km', ar: '1M كم <8% تدهور' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Battery remains like new daily, evergreen performance', fr: 'Batterie comme neuve quotidiennement, performance toujours verte', ar: 'البطارية جديدة يومياً، أداء دائم الخضرة' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Battery Safety -->
    <section class="common" id="battery-safety">
      <h3 class="title inview-child">{{ textFor({ en: 'Hard-Core Battery Safety', fr: 'Sécurité Batterie Hard-Core', ar: 'أمان البطارية القوي' }) }}</h3>
      <p class="subTitle inview-child">{{ textFor({ en: 'TOP-level technical safety, guarding with full strength', fr: 'Sécurité technique TOP, protection avec force totale', ar: 'أمان تقني من المستوى الأعلى، حماية بقوة كاملة' }) }}</p>
      <div class="single-img-container inview-child">
        <img src="/assets/OFFICIALVOYAH/courage/images/h37_pc10_0001.jpg" alt="Battery Safety" class="single-img" />
      </div>
      <div class="single-description inview-child column3">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '16-Layer Structure Protection', fr: 'Protection Structure 16 Couches', ar: 'حماية هيكلية بـ 16 طبقة' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Layer upon layer of protection, safety buff stacked full', fr: 'Couche après couche de protection, bonus sécurité cumulé', ar: 'طبقة تلو الأخرى من الحماية، مكافآت الأمان متراكمة' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Industry TOP 7-Layer Sealing', fr: 'Scellage 7 Couches TOP Industrie', ar: 'تأمين 7 طبقات من المستوى الأعلى في الصناعة' }) }}</p>
          <p class="description-content">{{ textFor({ en: '1m water depth, 72 hours no water ingress', fr: '1m de profondeur d\'eau, 72 heures sans infiltration', ar: '1 متر عمق ماء، 72 ساعة بدون تسرب' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '7×24h ms-Level Battery Cloud Guard', fr: 'Garde Cloud Batterie ms 7×24h', ar: 'حارس سحابي للبطارية بمستوى مللي ثانية 7×24' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'All-weather, all-region, all-condition health protection', fr: 'Protection santé tout temps, toute région, toute condition', ar: 'حماية صحية على مدار الساعة، في كل منطقة، وفي جميع الظروف' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Section 3: Happy Cabin -->
    <section id="section3" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/courage/images/h37_pc10_0001.jpg')` }">
      <h2 class="title inview-child inview-animated">{{ textFor({ en: 'Happy Full Cabin', fr: 'Cabine Pleine de Joie', ar: 'مقصورة مليئة بالسعادة' }) }}</h2>
      <p class="subTitle inview-child inview-animated">{{ textFor({ en: 'Ultimate intelligent space, enjoy together as a family', fr: 'Espace intelligent ultime, profiter ensemble en famille', ar: 'فضاء ذكي فائق، الاستمتاع معاً كعائلة' }) }}</p>
    </section>

    <!-- Xiaoyao Cockpit -->
    <section class="common" id="cockpit">
      <h3 class="title inview-child">{{ textFor({ en: 'Xiaoyao Intelligent Cockpit', fr: 'Cockpit Intelligent Xiaoyao', ar: 'مقصورة شياوياو الذكية' }) }}</h3>
      <p class="subTitle inview-child">{{ textFor({ en: 'Ultimate intelligent experience, technology at your command', fr: 'Expérience intelligente ultime, technologie à votre disposition', ar: 'تجربة ذكية فائقة، التكنولوجيا تحت تصرفك' }) }}</p>
      <div class="single-img-container inview-child">
        <img src="/assets/OFFICIALVOYAH/courage/images/h37_pc11_0001.jpg" alt="Xiaoyao Cockpit" class="single-img" />
      </div>
      <div class="single-description inview-child features-grid">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '14.6" Sliding Center Screen', fr: 'Écran Central Coulissant 14.6"', ar: 'شاشة مركزية منزلقة 14.6 بوصة' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Slide left and right freely, convenient for both driver and passenger', fr: 'Glisser librement gauche-droite, pratique pour conducteur et passager', ar: 'انزلاق حر يميناً ويساراً، مريح للسائق والراكب' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '29" AR-HUD', fr: 'AR-HUD 29"', ar: 'شاشة عرض增强现实 29 بوصة' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Augmented reality head-up display, immersive driving experience', fr: 'Affichage tête haute réalité augmentée, expérience immersive', ar: 'عرض أمامي واقع معزز، تجربة قيادة غامرة' }) }}</p>
        </div>
      </div>
    </section>

    <!-- AI Large Model -->
    <section class="common commonMax" id="ai-model">
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.ai * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in aiSlides" :key="idx">
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
          v-for="(_, idx) in aiSlides"
          :key="idx"
          class="pagination-bullet"
          :class="{ active: currentSlide.ai === idx }"
          @click="currentSlide.ai = idx"
        ></div>
      </div>
      <div class="description-pagination-wrap inview-child">
        <div class="description-list">
          <div
            v-for="(slide, idx) in aiSlides"
            :key="idx"
            class="description-item"
            :class="{ active: currentSlide.ai === idx }"
            @click="currentSlide.ai = idx"
          >
            <p class="description-title">{{ slide.title }}</p>
          </div>
        </div>
        <p class="description-content">{{ aiSlides[currentSlide.ai].desc }}</p>
      </div>
    </section>

    <!-- Section 4: Smart Family -->
    <section id="section4" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/courage/images/h37_pc12_0001.jpg')` }">
      <h2 class="title inview-child inview-animated">{{ textFor({ en: 'Smart Enjoyment for Whole Family', fr: 'Plaisir Intelligent pour Toute la Famille', ar: 'استمتاع ذكي للعائلة بأكملها' }) }}</h2>
      <p class="subTitle inview-child inview-animated">{{ textFor({ en: 'Smart driving assistance, easy and worry-free', fr: 'Assistance conduite intelligente, facile et sans souci', ar: 'مساعدة قيادة ذكية، سهلة وخالية من القلق' }) }}</p>
    </section>

    <!-- L2 Driving Assist Videos -->
    <section class="common commonMax" id="driving-assist">
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.driving * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in drivingSlides" :key="idx">
            <div class="video-container">
              <video
                :ref="el => { if (el) drivingVideos[idx] = el }"
                class="video-player"
                playsinline
                webkit-playsinline
                x5-video-player-type="h5"
                muted
                loop
                autoplay
              >
                <source :src="slide.video" type="video/mp4" />
              </video>
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
          v-for="(_, idx) in drivingSlides"
          :key="idx"
          class="pagination-bullet"
          :class="{ active: currentSlide.driving === idx }"
          @click="currentSlide.driving = idx"
        ></div>
      </div>
      <div class="description-pagination-wrap inview-child">
        <div class="description-list">
          <div
            v-for="(slide, idx) in drivingSlides"
            :key="idx"
            class="description-item"
            :class="{ active: currentSlide.driving === idx }"
            @click="currentSlide.driving = idx"
          >
            <p class="description-title">{{ slide.title }}</p>
          </div>
        </div>
        <p class="description-content">{{ drivingSlides[currentSlide.driving].desc }}</p>
      </div>
    </section>

    <!-- Section 5: Full Comfort -->
    <section id="section5" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/courage/images/h37_pc13_0001.jpg')` }">
      <h2 class="title inview-child inview-animated">{{ textFor({ en: 'Full-Dimension Comfort', fr: 'Confort Pleine Dimension', ar: 'راحة بأبعاد كاملة' }) }}</h2>
      <p class="subTitle inview-child inview-animated">{{ textFor({ en: 'Luxury comfort experience, caring for every family member', fr: 'Expérience confort luxueux, attention à chaque membre', ar: 'تجربة راحة فاخرة، عناية بكل فرد من العائلة' }) }}</p>
    </section>

    <!-- VC+ Ultra-Wide Comfort Seats -->
    <section class="common" id="seats">
      <h3 class="title inview-child">{{ textFor({ en: 'VC+ Ultra-Wide Comfort Seats', fr: 'Sièges Confort Ultra-Larges VC+', ar: 'مقاعد راحة فائقة العرض VC+' }) }}</h3>
      <p class="subTitle inview-child">{{ textFor({ en: 'Spacious and comfortable, enjoy the journey like at home', fr: 'Spacieux et confortable, profiter du voyage comme à la maison', ar: 'واسع ومريح، استمتع بالرحلة كما في المنزل' }) }}</p>
      <div class="single-img-container inview-child">
        <img src="/assets/OFFICIALVOYAH/courage/images/h37_pc14_0001.jpg" alt="VC+ Seats" class="single-img" />
      </div>
      <div class="single-description inview-child column3">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '10-Layer Seat Structure', fr: 'Structure Siège 10 Couches', ar: 'هيكل مقعد بـ 10 طبقات' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Scientific pressure distribution, long-distance travel without fatigue', fr: 'Distribution pression scientifique, voyage longue distance sans fatigue', ar: 'توزيع ضغط علمي، سفر لمسافات طويلة بدون تعب' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Ventilation/Heating/Massage', fr: 'Ventilation/Chauffage/Massage', ar: 'تهوية/تدفئة/تدليك' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Full-featured comfort, enjoy every journey', fr: 'Confort complet, profiter de chaque voyage', ar: 'راحة كاملة، استمتع بكل رحلة' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Premium Leather Upholstery', fr: 'Garniture Cuir Premium', ar: 'تنجيد جلدي متميز' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'OEKO-TEX certified baby-friendly materials', fr: 'Matériaux certifiés OEKO-TEX amis des bébés', ar: 'مواد معتمدة OEKO-TEX صديقة للأطفال' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Storage Space -->
    <section class="common commonMax" id="storage">
      <h3 class="title inview-child">{{ textFor({ en: 'Super Spacious & Versatile Storage', fr: 'Rangement Super Spacieux & Polyvalent', ar: 'تخزين فائق الوسع والتنوع' }) }}</h3>
      <p class="subTitle inview-child">{{ textFor({ en: 'Flexible space transformation, travel with peace of mind', fr: 'Transformation espace flexible, voyage en toute tranquillité', ar: 'تحول مرن للمساحة، سفر بكل هدوء' }) }}</p>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.storage * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in storageSlides" :key="idx">
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
          v-for="(_, idx) in storageSlides"
          :key="idx"
          class="pagination-bullet"
          :class="{ active: currentSlide.storage === idx }"
          @click="currentSlide.storage = idx"
        ></div>
      </div>
      <div class="description-pagination-wrap inview-child">
        <div class="description-list">
          <div
            v-for="(slide, idx) in storageSlides"
            :key="idx"
            class="description-item"
            :class="{ active: currentSlide.storage === idx }"
            @click="currentSlide.storage = idx"
          >
            <p class="description-title">{{ slide.title }}</p>
          </div>
        </div>
        <p class="description-content">{{ storageSlides[currentSlide.storage].desc }}</p>
      </div>
    </section>

    <!-- Driving Comfort -->
    <section class="common commonMax" id="driving-comfort">
      <h3 class="title inview-child">{{ textFor({ en: 'Smooth Driving, Silky Control', fr: 'Conduite Douce, Contrôle Soyeux', ar: 'قيادة سلسة، تحكم حريري' }) }}</h3>
      <p class="subTitle inview-child">{{ textFor({ en: 'Self-driving trips made easy', fr: 'Voyages en autonomie facilités', ar: 'رحلات القيادة الذاتية سهلة' }) }}</p>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.comfort * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in comfortSlides" :key="idx">
            <div class="video-container">
              <video
                :ref="el => { if (el) comfortVideos[idx] = el }"
                class="video-player"
                playsinline
                webkit-playsinline
                x5-video-player-type="h5"
                muted
                loop
                autoplay
              >
                <source :src="slide.video" type="video/mp4" />
              </video>
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
          v-for="(_, idx) in comfortSlides"
          :key="idx"
          class="pagination-bullet"
          :class="{ active: currentSlide.comfort === idx }"
          @click="currentSlide.comfort = idx"
        ></div>
      </div>
      <div class="description-pagination-wrap inview-child">
        <div class="description-list">
          <div
            v-for="(slide, idx) in comfortSlides"
            :key="idx"
            class="description-item"
            :class="{ active: currentSlide.comfort === idx }"
            @click="currentSlide.comfort = idx"
          >
            <p class="description-title">{{ slide.title }}</p>
          </div>
        </div>
        <p class="description-content">{{ comfortSlides[currentSlide.comfort].desc }}</p>
      </div>
    </section>

    <!-- Smart Parking -->
    <section class="common" id="parking">
      <div class="img-container margin-top-0 inview-child">
        <img src="/assets/OFFICIALVOYAH/courage/images/h37_pc20_0001.jpg" alt="Smart Parking" class="single-img" />
      </div>
      <div class="single-description inview-child column1">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Advanced Smart Parking Assist', fr: 'Assistance Stationnement Intelligente Avancée', ar: 'مساعدة الركن الذكية المتقدمة' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Full-scenario parking experience, stable, accurate, and fast', fr: 'Expérience stationnement tout scénario, stable, précise et rapide', ar: 'تجربة ركن لجميع السيناريوهات، مستقرة ودقيقة وسريعة' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Section 6: Peace of Mind -->
    <section id="section6" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/courage/images/h37_pc24_0001.jpg')` }">
      <h2 class="title inview-child inview-animated">{{ textFor({ en: 'Peace of Mind Journey', fr: 'Voyage en Toute Tranquillité', ar: 'رحلة بكل طمأنينة' }) }}</h2>
      <p class="subTitle inview-child inview-animated">{{ textFor({ en: '5-star safety is just our passing grade', fr: 'La sécurité 5 étoiles est juste notre note de passage', ar: 'الأمان 5 نجوم هو مجرد درجة النجاح لنا' }) }}</p>
    </section>

    <!-- Active/Passive Safety -->
    <section class="common commonMax" id="safety">
      <h3 class="title inview-child">{{ textFor({ en: 'Active & Passive Safety', fr: 'Sécurité Active & Passive', ar: 'أمان نشط وسلبي' }) }}</h3>
      <p class="subTitle inview-child">{{ textFor({ en: 'Always online, locking onto dangers you can\'t see', fr: 'Toujours en ligne, verrouillant les dangers invisibles', ar: 'دائماً على الإنترنت، قفل الأخطار غير المرئية' }) }}</p>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.safety * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in safetySlides" :key="idx">
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

    <!-- Body Safety -->
    <section class="common" id="body-safety">
      <h3 class="title inview-child">{{ textFor({ en: 'Body Safety', fr: 'Sécurité Carrosserie', ar: 'سلامة الهيكل' }) }}</h3>
      <p class="subTitle inview-child">{{ textFor({ en: 'Solid as a rock, escorting your journey', fr: 'Solide comme un roc, escortant votre voyage', ar: 'صلب كالصخر، مرافقة رحلتك' }) }}</p>
      <div class="img-container">
        <img src="/assets/OFFICIALVOYAH/courage/images/h37_pc28_0001.jpg" alt="Body Safety" class="single-img inview-child" />
      </div>
      <div class="single-description inview-child column3">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Dual 5-Star Safety Standard', fr: 'Double Standard Sécurité 5 Étoiles', ar: 'معيار أمان مزدوج 5 نجوم' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Hard strength bonus, safety standard far ahead', fr: 'Bonus force dure, standard sécurité bien en avance', ar: 'مكافأة قوة صلبة، معيار أمان متقدم للغاية' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Ultra-High Rigidity Cage Body', fr: 'Carrosserie Cage Ultra-Rigide', ar: 'هيكل قفص فائق الصلابة' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Solid foundation for vehicle handling comfort and stability', fr: 'Fondement solide pour confort et stabilité de maniabilité', ar: 'أساس متين لراحة واستقرارية التحكم في المركبة' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Global First 2000MPa Al-Si Door Beam', fr: 'Poutre Porte Al-Si 2000MPa Première Mondiale', ar: 'عارضة باب Al-Si 2000MPa الأولى عالمياً' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Build ultra-high strength steel safety cabin', fr: 'Construire cabine sécurité acier ultra-résistant', ar: 'بناء مقصورة أمان من الفولاذ فائق المقاومة' }) }}</p>
        </div>
      </div>
    </section>

    <!-- 7-Layer Frontal Collision -->
    <section class="common" id="collision">
      <div class="img-container">
        <img src="/assets/OFFICIALVOYAH/courage/images/h37_pc28_1_0001.jpg" alt="Collision Protection" class="single-img inview-child margin-top-0" />
      </div>
      <div class="single-description inview-child column1">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Seven-Layer Frontal Collision Protection', fr: 'Protection Collision Frontale Sept Couches', ar: 'حماية تصادم أمامية بسبع طبقات' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Effectively absorb and disperse impact forces, maximizing passenger safety', fr: 'Absorber et disperser efficacement forces impact, maximiser sécurité passagers', ar: 'امتصاص وتشتيت قوى التصادم بفعالية، تعظيم سلامة الركاب' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Battery Safety 2 -->
    <section class="common" id="battery-safety-2">
      <h3 class="title inview-child">{{ textFor({ en: 'Battery Safety', fr: 'Sécurité Batterie', ar: 'أمان البطارية' }) }}</h3>
      <p class="subTitle inview-child">{{ textFor({ en: 'Hard-core protection, TOP-level technical safety', fr: 'Protection hard-core, sécurité technique TOP', ar: 'حماية قوية، أمان تقني من المستوى الأعلى' }) }}</p>
      <div class="img-container">
        <img src="/assets/OFFICIALVOYAH/courage/images/h37_pc26_0001.jpg" alt="Battery Safety" class="single-img inview-child" />
      </div>
      <div class="single-description inview-child column3">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '16-Layer Structure Protection', fr: 'Protection Structure 16 Couches', ar: 'حماية هيكلية بـ 16 طبقة' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Layer upon layer, safety buff stacked full', fr: 'Couche après couche, bonus sécurité cumulé', ar: 'طبقة تلو الأخرى، مكافآت الأمان متراكمة' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Industry TOP 7-Layer Sealing', fr: 'Scellage 7 Couches TOP Industrie', ar: 'تأمين 7 طبقات من المستوى الأعلى' }) }}</p>
          <p class="description-content">{{ textFor({ en: '1m water depth, 72 hours no water ingress', fr: '1m profondeur eau, 72 heures sans infiltration', ar: '1 متر عمق ماء، 72 ساعة بدون تسرب' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '7×24h ms-Level Cloud Guard', fr: 'Garde Cloud ms 7×24h', ar: 'حارس سحابي بمستوى مللي ثانية 7×24' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'All-weather, all-region, all-condition health protection', fr: 'Protection santé tout temps, toute région, toute condition', ar: 'حماية صحية على مدار الساعة، في كل منطقة وظرف' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Battery Degradation -->
    <section class="common" id="degradation">
      <div class="img-container">
        <img src="/assets/OFFICIALVOYAH/courage/images/h37_pc26_1_0001.jpg" alt="Battery Degradation" class="single-img inview-child margin-top-0" />
      </div>
      <div class="single-description inview-child column1">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '<8% Degradation per 1M km*', fr: '<8% Dégradation par 1M km*', ar: '<8% تدهور لكل 1M كم*' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Like new daily, evergreen battery', fr: 'Comme neuve quotidiennement, batterie toujours verte', ar: 'كالجديدة يومياً، بطارية دائمة الخضرة' }) }}</p>
        </div>
      </div>
    </section>

    <!-- 1M km Safety Validation -->
    <section class="common" id="validation">
      <h3 class="title inview-child">{{ textFor({ en: '1 Million km Safety Validation', fr: 'Validation Sécurité 1 Million km', ar: 'تحقق أمان 1 مليون كم' }) }}</h3>
      <p class="subTitle inview-child">{{ textFor({ en: 'Longer validation, more trustworthy', fr: 'Validation plus longue, plus digne de confiance', ar: 'تحقق أطول، أكثر موثوقية' }) }}</p>
      <div class="img-container">
        <img src="/assets/OFFICIALVOYAH/courage/images/h37_pc27_0001.jpg" alt="Safety Validation" class="single-img inview-child" />
      </div>
      <div class="single-description inview-child column3">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '4M+ km Cumulative Validation', fr: '4M+ km Validation Cumulative', ar: '4M+ كم تحقق تراكمي' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Full-cycle worry-free, witnessing the power of reliability', fr: 'Sans souci cycle complet, témoigner la puissance fiabilité', ar: 'خالي من القلق على مدار الدورة، شاهد على قوة الموثوقية' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Lean Manufacturing Excellence', fr: 'Excellence Fabrication Lean', ar: 'تميز التصنيع الرشيق' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Quality assurance, rigorous testing, strict monitoring, continuous improvement', fr: 'Assurance qualité, tests rigoureux, surveillance stricte, amélioration continue', ar: 'ضمان الجودة، اختبارات صارمة، مراقبة دقيقة، تحسين مستمر' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Global Top Supplier System', fr: 'Système Fournisseurs Mondiaux Top', ar: 'نظام موردين عالميين من المستوى الأعلى' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Gathering industry\'s best to build quality vehicles', fr: 'Rassembler le meilleur de l\'industrie pour construire véhicules qualité', ar: 'جمع أفضل ما في الصناعة لبناء مركبات عالية الجودة' }) }}</p>
        </div>
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
  forceFlight: 0,
  design: 0,
  interior: 0,
  ai: 0,
  driving: 0,
  storage: 0,
  comfort: 0,
  safety: 0
})

const currentNebulaColor = ref(0)

// Video refs
const drivingVideos = ref<(HTMLVideoElement | null)[]>([])
const comfortVideos = ref<(HTMLVideoElement | null)[]>([])
const parkingVideo = ref<HTMLVideoElement | null>(null)

// Chapter sections data
const chapterSections = computed(() => [
  { id: 'section1', title: textFor({ en: 'Design', fr: 'Design', ar: 'التصميم' }) },
  { id: 'section2', title: textFor({ en: 'Power', fr: 'Puissance', ar: 'القوة' }) },
  { id: 'section3', title: textFor({ en: 'Cabin', fr: 'Cabine', ar: 'المقصورة' }) },
  { id: 'section4', title: textFor({ en: 'Smart', fr: 'Intelligent', ar: 'الذكي' }) },
  { id: 'section5', title: textFor({ en: 'Comfort', fr: 'Confort', ar: 'الراحة' }) },
  { id: 'section6', title: textFor({ en: 'Safety', fr: 'Sécurité', ar: 'السلامة' }) }
])

// Force Flight slides
const forceFlightSlides = computed(() => [
  {
    image: '/assets/OFFICIALVOYAH/courage/images/h37_pc03_0001.jpg',
    title: textFor({ en: 'Interstellar Shadow Side', fr: 'Flanc Ombre Interstellaire', ar: 'جنب ظل النجوم' }),
    desc: textFor({ en: '"Z" curved surface, dynamic posture with lower drag', fr: 'Surface courbe "Z", posture dynamique avec traînée réduite', ar: 'سطح منحني "Z"، وضعية ديناميكية بمقاومة أقل' })
  },
  {
    image: '/assets/OFFICIALVOYAH/courage/images/h37_pc03_0002.jpg',
    title: textFor({ en: 'Aircraft Dual-Duct Design', fr: 'Design Double-Conduit Aéronef', ar: 'تصميم قناة مزدوجة للطائرات' }),
    desc: textFor({ en: 'Industry-leading innovation, perfect balance of pressure and drag', fr: 'Innovation leader de l\'industrie, équilibre parfait pression et traînée', ar: 'ابتكار رائد في الصناعة، توازن مثالي بين الضغط والمقاومة' })
  }
])

// Design slides
const designSlides = computed(() => [
  {
    image: '/assets/OFFICIALVOYAH/courage/images/h37_pc03_1_0001.jpg',
    title: textFor({ en: 'Flame Light Array', fr: 'Matrice Lumière Flamme', ar: 'مصفوفة إضاءة اللهب' }),
    desc: textFor({ en: '132 light units forming unique light language symbols', fr: '132 unités lumineuses formant symboles langage lumière uniques', ar: '132 وحدة إضاءة تشكل رموز لغة إضاءة فريدة' })
  },
  {
    image: '/assets/OFFICIALVOYAH/courage/images/h37_pc03_1_0002.jpg',
    title: textFor({ en: 'Frameless Doors', fr: 'Portes Sans Cadre', ar: 'أبواب بدون إطار' }),
    desc: textFor({ en: 'Aesthetic advancement, boundless view', fr: 'Avancement esthétique, vue sans limites', ar: 'تقدم جمالي، إطلالة بلا حدود' })
  },
  {
    image: '/assets/OFFICIALVOYAH/courage/images/h37_pc03_1_0003.jpg',
    title: textFor({ en: 'Spoiler Wing', fr: 'Aileron Spoiler', ar: 'جناح المفسد' }),
    desc: textFor({ en: 'Same as aircraft, air can work for you', fr: 'Identique aux aéronefs, l\'air peut travailler pour vous', ar: 'مطابق للطائرات، الهواء يمكن أن يعمل لصالحك' })
  }
])

// Nebula colors
const nebulaColors = computed(() => [
  { name: textFor({ en: 'Storm Pink', fr: 'Rose Tempête', ar: 'وردي العاصفة' }), icon: '/assets/OFFICIALVOYAH/courage/images/icon1.png', carImage: '/assets/OFFICIALVOYAH/courage/images/car_01.png' },
  { name: textFor({ en: 'Nebula Grey', fr: 'Gris Nébuleuse', ar: 'رمادي السديم' }), icon: '/assets/OFFICIALVOYAH/courage/images/icon2.png', carImage: '/assets/OFFICIALVOYAH/courage/images/car_02.png' },
  { name: textFor({ en: 'Moonlight White', fr: 'Blanc Clair de Lune', ar: 'أبيض ضوء القمر' }), icon: '/assets/OFFICIALVOYAH/courage/images/icon3.png', carImage: '/assets/OFFICIALVOYAH/courage/images/car_03.png' },
  { name: textFor({ en: 'Mambo Green', fr: 'Vert Mambo', ar: 'أخضر المامبو' }), icon: '/assets/OFFICIALVOYAH/courage/images/icon4.png', carImage: '/assets/OFFICIALVOYAH/courage/images/car_04.png' },
  { name: textFor({ en: 'Polar Night Black', fr: 'Noir Nuit Polaire', ar: 'أسود الليل القطبي' }), icon: '/assets/OFFICIALVOYAH/courage/images/icon5.png', carImage: '/assets/OFFICIALVOYAH/courage/images/car_05.png' },
  { name: textFor({ en: 'Ink Black', fr: 'Noir Encre', ar: 'أسود الحبر' }), icon: '/assets/OFFICIALVOYAH/courage/images/icon6.png', carImage: '/assets/OFFICIALVOYAH/courage/images/car_06.png' },
  { name: textFor({ en: 'Clear Sky Blue', fr: 'Bleu Ciel Clair', ar: 'أزرق السماء الصافية' }), icon: '/assets/OFFICIALVOYAH/courage/images/icon7.png', carImage: '/assets/OFFICIALVOYAH/courage/images/car_07.png' }
])

// Interior slides (Planets)
const interiorSlides = computed(() => [
  { name: textFor({ en: 'Dawn Star', fr: 'Étoile de l\'Aube', ar: 'نجمة الفجر' }), image: '/assets/OFFICIALVOYAH/courage/images/h37_pc05_1_0001.jpg' },
  { name: textFor({ en: 'Dark Night', fr: 'Nuit Noire', ar: 'الليل الأسود' }), image: '/assets/OFFICIALVOYAH/courage/images/h37_pc05_1_0002.jpg' },
  { name: textFor({ en: 'Gaia', fr: 'Gaia', ar: 'غايا' }), image: '/assets/OFFICIALVOYAH/courage/images/h37_pc05_1_0003.jpg' }
])

// AI slides
const aiSlides = computed(() => [
  {
    image: '/assets/OFFICIALVOYAH/courage/images/h37_pc11_1_0001.jpg',
    title: textFor({ en: 'AI Large Model', fr: 'Grand Modèle IA', ar: 'نموذج الذكاء الاصطناعي الكبير' }),
    desc: textFor({ en: 'Voice interaction, everything is just one sentence away', fr: 'Interaction vocale, tout est à une phrase près', ar: 'تفاعل صوتي، كل شيء على بعد جملة واحدة' })
  },
  {
    image: '/assets/OFFICIALVOYAH/courage/images/h37_pc11_1_0002.jpg',
    title: textFor({ en: 'Four-Zone Voice Control', fr: 'Contrôle Vocal Quatre Zones', ar: 'تحكم صوتي بأربع مناطق' }),
    desc: textFor({ en: 'Every seat is a C-position, everyone can control', fr: 'Chaque siège est une position C, tout le monde peut contrôler', ar: 'كل مقعد هو موقع C، يمكن للجميع التحكم' })
  }
])

// Driving assist slides with videos
const drivingSlides = computed(() => [
  {
    video: '/assets/OFFICIALVOYAH/courage/videos/highway.mp4',
    title: textFor({ en: 'Highway Navigation Assist', fr: 'Assistance Navigation Autoroute', ar: 'مساعدة ملاحة الطريق السريع' }),
    desc: textFor({ en: 'Highway driving made easy, safe and worry-free', fr: 'Conduite autoroute facilitée, sûre et sans souci', ar: 'قيادة الطريق السريع سهلة، آمنة وخالية من القلق' })
  },
  {
    video: '/assets/OFFICIALVOYAH/courage/videos/lane_change.mp4',
    title: textFor({ en: 'Smart Lane Change', fr: 'Changement Voie Intelligent', ar: 'تغيير المسار الذكي' }),
    desc: textFor({ en: 'Automatic lane change, smooth and confident', fr: 'Changement voie automatique, fluide et confiant', ar: 'تغيير المسار التلقائي، سلس وواثق' })
  },
  {
    video: '/assets/OFFICIALVOYAH/courage/videos/avoidance.mp4',
    title: textFor({ en: 'Emergency Avoidance', fr: 'Évitement Urgence', ar: 'تجنب الطوارئ' }),
    desc: textFor({ en: 'Active safety protection, guarding every moment', fr: 'Protection sécurité active, gardien à chaque instant', ar: 'حماية أمان نشطة، حارس في كل لحظة' })
  }
])

// Storage slides
const storageSlides = computed(() => [
  {
    image: '/assets/OFFICIALVOYAH/courage/images/h37_pc22_0001.jpg',
    title: textFor({ en: '86.7% Space Efficiency', fr: 'Efficacité Espace 86.7%', ar: 'كفاءة المساحة 86.7%' }),
    desc: textFor({ en: 'Class-leading space performance', fr: 'Performance espace leader de classe', ar: 'أداء مساحة رائد في الفئة' })
  },
  {
    image: '/assets/OFFICIALVOYAH/courage/images/h37_pc22_0002.jpg',
    title: textFor({ en: '1400L Extended Volume', fr: 'Volume Étendu 1400L', ar: 'حجم موسع 1400 لتر' }),
    desc: textFor({ en: 'Rear seats folded flat, instantly become a mobile home', fr: 'Sièges arrière rabattus, devient instantanément maison mobile', ar: 'مقاعد خلفية مطوية، تصبح منزلاً متنقلاً فوراً' })
  },
  {
    image: '/assets/OFFICIALVOYAH/courage/images/h37_pc22_0003.jpg',
    title: textFor({ en: '527L Trunk Space', fr: 'Espace Coffre 527L', ar: 'مساحة صندوق الأمتعة 527 لتر' }),
    desc: textFor({ en: 'Effortlessly fit all family luggage', fr: 'Accueillir sans effort tout bagage familial', ar: 'استيعاب جميع أمتعة العائلة بلا جهد' })
  },
  {
    image: '/assets/OFFICIALVOYAH/courage/images/h37_pc22_0004.jpg',
    title: textFor({ en: '72L Hidden Storage', fr: 'Rangement Caché 72L', ar: 'تخزين مخفي 72 لتر' }),
    desc: textFor({ en: 'Secret space to "hide" your precious memories', fr: 'Espace secret pour "cacher" vos souvenirs précieux', ar: 'مساحة سرية لـ "إخفاء" ذكرياتك الثمينة' })
  }
])

// Comfort slides with videos
const comfortSlides = computed(() => [
  {
    video: '/assets/OFFICIALVOYAH/courage/videos/cdc.mp4',
    title: textFor({ en: 'CDC Adjustable Damping', fr: 'Amortissement Réglable CDC', ar: 'تخميد قابل للتعديل CDC' }),
    desc: textFor({ en: 'Smooth over bumps and corners, travel without jolts', fr: 'Doux sur bosses et virages, voyage sans secousses', ar: 'سلاسة فوق المطبات والمنعطفات، سفر بدون اهتزازات' })
  },
  {
    video: '/assets/OFFICIALVOYAH/courage/videos/onebox.mp4',
    title: textFor({ en: 'Onebox Intelligent Braking', fr: 'Freinage Intelligent Onebox', ar: 'فرامل ذكية Onebox' }),
    desc: textFor({ en: 'No more brake jerks or nods, smooth and stable', fr: 'Plus de à-coups freinage, stable et fluide', ar: 'لا مزيد من اهتزازات الفرامل، مستقر وسلس' })
  },
  {
    video: '/assets/OFFICIALVOYAH/courage/videos/lfc.mp4',
    title: textFor({ en: 'LFC Smart Brake Control', fr: 'Contrôle Freinage Intelligent LFC', ar: 'تحكم فرامل ذكي LFC' }),
    desc: textFor({ en: 'Handle all road surfaces, corner with ease', fr: 'Maîtriser toutes surfaces, virages avec aisance', ar: 'التعامل مع جميع الأسطح، منعطفات بسهولة' })
  },
  {
    video: '/assets/OFFICIALVOYAH/courage/videos/l2.mp4',
    title: textFor({ en: 'L2 Integrated Driving Assist', fr: 'Assistance Conduite Intégrée L2', ar: 'مساعدة قيادة متكاملة L2' }),
    desc: textFor({ en: 'Travel with divine assistance, no fatigue in traffic', fr: 'Voyager avec assistance divine, pas fatigue embouteillage', ar: 'السفر بمساعدة إلهية، بدون تعب في الازدحام' })
  }
])

// Safety slides
const safetySlides = computed(() => [
  {
    image: '/assets/OFFICIALVOYAH/courage/images/h37_pc25_0001.jpg',
    title: textFor({ en: '14 Advanced Active Safety Functions', fr: '14 Fonctions Sécurité Active Avancées', ar: '14 وظيفة أمان نشط متقدمة' }),
    desc: textFor({ en: 'Full-scenario emergency avoidance, safety always online', fr: 'Évitement urgence tout scénario, sécurité toujours en ligne', ar: 'تجنب طوارئ لجميع السيناريوهات، الأمان دائماً على الإنترنت' })
  },
  {
    image: '/assets/OFFICIALVOYAH/courage/images/h37_pc25_0002.jpg',
    title: textFor({ en: 'DMS Fatigue Monitor', fr: 'Moniteur Fatigue DMS', ar: 'مراقب التعب DMS' }),
    desc: textFor({ en: '2MP intelligent monitoring, "experienced driver" accompanies all the way', fr: 'Surveillance intelligente 2MP, "chauffeur expérimenté" accompagne tout le trajet', ar: 'مراقبة ذكية 2 ميجابكسل، "سائق خبير" يرافق طوال الطريق' })
  },
  {
    image: '/assets/OFFICIALVOYAH/courage/images/h37_pc25_0003.jpg',
    title: textFor({ en: 'Passive Safety', fr: 'Sécurité Passive', ar: 'الأمان السلبي' }),
    desc: textFor({ en: '6 airbags standard, side curtain exceeds 2000mm', fr: '6 airbags standard, rideau latéral dépasse 2000mm', ar: '6 أكياس هواء قياسية، ستارة جانبية تتجاوز 2000 مم' })
  }
])

// Navigation methods
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
.courage-page {
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

/* Common Sections */
.common {
  padding: 80px 40px;
  background: #000;
}

.commonMax {
  max-width: 1440px;
  margin: 0 auto;
}

.margin-top-0 {
  margin-top: 0;
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

.video-container {
  max-width: 1200px;
  margin: 0 auto 40px;
}

.video-container.margin-top-0 {
  margin-top: 0;
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
  margin: 40px auto 0;
}

.column3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 1024px) {
  .column3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
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
}
</style>
