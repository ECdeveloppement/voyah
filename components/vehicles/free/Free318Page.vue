<template>
  <div class="free-318-page">
    <!-- Hero Section -->
    <section class="kv-section" id="hero">
      <div class="kv-bg">
        <img src="/assets/OFFICIALVOYAH/free/images/kv_1920.png" alt="Voyah Free 318" class="kv-bg-img" />
      </div>
      <div class="kv-content">
        <img
          src="/assets/OFFICIALVOYAH/free/images/free.png"
          alt="Voyah Free 318"
          class="kv-logo inview-child inview-animated"
          style="--inview-delay: 0.3s;"
        />
        <p class="kv-slogan inview-child inview-animated" style="--inview-delay: 0.4s;">
          {{ textFor({ en: 'New Energy Driving Control SUV', fr: 'SUV Contrôle Conduite Énergie Nouvelle', ar: 'سيارة SUV كهربائية جديدة' }) }}
        </p>
        <div class="kv-btns inview-child inview-animated" style="--inview-delay: 0.5s;">
          <button class="voyah-button voyah-button--default voyah-button--dark voyah-button--plain">
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

    <!-- Section 1: Design -->
    <section id="section1" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/free/images/bg_free_pc28_0001_1920.jpg')` }">
      <h2 class="title inview-child inview-animated">{{ textFor({ en: 'Fantastic Styling Design', fr: 'Design de Style Fantastique', ar: 'تصميم رائع' }) }}</h2>
      <p class="subTitle inview-child inview-animated">{{ textFor({ en: 'Innovative and stunning, every detail is social media worthy', fr: 'Innovant et étonnant, chaque détail mérite les réseaux sociaux', ar: 'مبتكر ومذهل، كل تفصيل يستحق الوسائط الاجتماعية' }) }}</p>
    </section>

    <!-- Blade Mecha Design -->
    <section class="common commonMax" id="mecha-design">
      <h3 class="title inview-child">{{ textFor({ en: 'Blade Mecha Pioneer Design', fr: 'Design Pionnier Méca-Lame', ar: 'تصميم رائد بليد ميكا' }) }}</h3>
      <p class="subTitle inview-child">{{ textFor({ en: 'Sharp blade breaks through dawn, riding the wind', fr: 'Lame tranchante brise l\'aube, chevauche le vent', ar: 'شفرة حادة تخترق الفجر، تمتطي الريح' }) }}</p>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.mecha * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in mechaSlides" :key="idx">
            <div class="img-container">
              <img :src="slide.image" :alt="slide.title" class="slide-img" />
            </div>
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.title }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination inview-child">
        <div
          v-for="(_, idx) in mechaSlides"
          :key="idx"
          class="pagination-bullet"
          :class="{ active: currentSlide.mecha === idx }"
          @click="currentSlide.mecha = idx"
        ></div>
      </div>
      <div class="description-pagination-wrap inview-child">
        <div class="description-list">
          <div
            v-for="(slide, idx) in mechaSlides"
            :key="idx"
            class="description-item"
            :class="{ active: currentSlide.mecha === idx }"
            @click="currentSlide.mecha = idx"
          >
            <p class="description-title">{{ slide.title }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Luxury Interior -->
    <section class="common commonMax" id="interior">
      <h3 class="title inview-child">{{ textFor({ en: 'Premium Luxury Interior', fr: 'Intérieur de Luxe Premium', ar: 'مقصورة فاخرة مميزة' }) }}</h3>
      <p class="subTitle inview-child">{{ textFor({ en: 'Luxury at first sight, exquisite to the touch', fr: 'Luxe au premier regard, exquis au toucher', ar: 'فخامة من أول وهلة، رائعة للمسة' }) }}</p>
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

    <!-- Car Color Selector -->
    <section class="car-color-container" id="colors">
      <h3 class="title">{{ textFor({ en: 'DIY Blade Warrior Color Palette', fr: 'Palette de Couleurs Guerrier Lame DIY', ar: 'لوحة ألوان محارب الشفرة DIY' }) }}</h3>
      <h3 class="subTitle">{{ textFor({ en: 'Your journey\'s personality, colors defined by you', fr: 'Personnalité de votre voyage, couleurs définies par vous', ar: 'شخصية رحلتك، الألوان محددة من قبلك' }) }}</h3>
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

    <!-- Interior Colors -->
    <section class="common commonMax" id="interior-colors">
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.intColor * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in interiorColors" :key="idx">
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
          v-for="(_, idx) in interiorColors"
          :key="idx"
          class="pagination-bullet"
          :class="{ active: currentSlide.intColor === idx }"
          @click="currentSlide.intColor = idx"
        ></div>
      </div>
      <div class="description-pagination-wrap inview-child">
        <div class="description-list">
          <div
            v-for="(slide, idx) in interiorColors"
            :key="idx"
            class="description-item"
            :class="{ active: currentSlide.intColor === idx }"
            @click="currentSlide.intColor = idx"
          >
            <p class="description-title">{{ slide.name }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Red Calipers -->
    <section class="common" id="calipers">
      <h3 class="title inview-child">{{ textFor({ en: 'Flame Red Sport Calipers', fr: 'Étriers de Sport Rouge Flamme', ar: 'فرامل رياضية حمراء اللهب' }) }}</h3>
      <div class="img-container">
        <img src="/assets/OFFICIALVOYAH/free/images/bg_free_pc31_0001.jpg" alt="Red Calipers" class="single-img inview-child" />
      </div>
    </section>

    <!-- Section 2: Driving Control -->
    <section id="section2" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/free/images/bg_free_pc4_0002_1920.jpg')` }">
      <h2 class="title inview-child inview-animated">{{ textFor({ en: 'Supreme Driving Control', fr: 'Contrôle de Conduite Suprême', ar: 'تحكم قيادة فائق' }) }}</h2>
      <p class="subTitle inview-child inview-animated">{{ textFor({ en: 'Smart 4WD, ultimate driving pleasure', fr: '4WD intelligent, plaisir de conduite ultime', ar: 'دفع رباعي ذكي، متعة قيادة فائقة' }) }}</p>
    </section>

    <!-- Performance Features -->
    <section class="common" id="performance">
      <div class="single-img-container inview-child">
        <img src="/assets/OFFICIALVOYAH/free/images/bg_free_pc15_0001_1920.jpg" alt="Performance" class="single-img" />
      </div>
      <div class="single-description inview-child features-grid">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Dynamic Intelligent 4WD', fr: '4WD Intelligent Dynamique', ar: 'دفع رباعي ذكي ديناميكي' }) }}</p>
          <p class="description-content">{{ textFor({ en: '360kW total power, 4.5s 0-100km/h acceleration', fr: '360kW de puissance totale, accélération 0-100km/h en 4.5s', ar: '360 كيلوواط قوة إجمالية، تسارع 0-100 كم/س في 4.5 ثانية' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '100mm Adjustable Air Suspension', fr: 'Suspension Pneumatique Réglable 100mm', ar: 'تعليق هوائي قابل للتعديل 100 مم' }) }}</p>
          <p class="description-content">{{ textFor({ en: '4 modes height adjustment for all road conditions', fr: '4 modes de réglage de hauteur pour toutes les conditions de route', ar: '4 أوضاع تعديل الارتفاع لجميع ظروف الطريق' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Aluminum Chassis -->
    <section class="common" id="chassis">
      <div class="single-img-container inview-child">
        <img src="/assets/OFFICIALVOYAH/free/images/bg_free_pc16_0001.jpg" alt="Chassis" class="single-img" />
      </div>
      <div class="single-description inview-child column1">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'All-Aluminum Lightweight Chassis', fr: 'Châssis Léger Tout-Aluminium', ar: 'هيكل خفيف كامل الألمنيوم' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Front double wishbone four-ball joint + rear H-arm multi-link independent suspension', fr: 'Double triangle avant à quatre rotules + suspension indépendante multi-bras arrière en H', ar: 'مثلث مزدوج أمامي بأربع كرات + تعليق مستقل متعدد الأذرع خلفي على شكل H' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Section 3: 3-Electric System -->
    <section id="section3" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/free/images/bg_free_pc15_0001_1920.jpg')` }">
      <h2 class="title inview-child inview-animated">{{ textFor({ en: 'Golden 3-Electric System', fr: 'Système 3-Électrique Doré', ar: 'نظام ثلاثي كهربائي ذهبي' }) }}</h2>
      <p class="subTitle inview-child inview-animated">{{ textFor({ en: '318km pure electric range, outstanding comprehensive performance', fr: '318km d\'autonomie électrique pure, performance globale exceptionnelle', ar: '318 كم مدى كهربائي نقي، أداء شامل متميز' }) }}</p>
    </section>

    <!-- Range Specs -->
    <section class="common" id="range">
      <div class="single-img-container inview-child">
        <img src="/assets/OFFICIALVOYAH/free/images/bg_free_pc16_0001.jpg" alt="Range" class="single-img" />
      </div>
      <div class="single-description inview-child features-grid">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Range: Longest Pure EV Range EREV SUV', fr: 'Autonomie: SUV EREV Électrique Pure la Plus Longue', ar: 'المدى: أطول SUV هجين كهربائي نقي' }) }}</p>
          <p class="description-content">{{ textFor({ en: '318km CLTC pure electric range, 1458km RWD / 1357km 4WD combined range', fr: '318km d\'autonomie électrique pure CLTC, 1458km propulsion / 1357km 4WD autonomie combinée', ar: '318 كم مدى كهربائي نقي CLTC، 1458 كم دفع خلفي / 1357 كم دفع رباعي مدى إجمالي' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Next-Gen 1.5T 4-Cylinder Range Extender', fr: 'Nouveau Générateur 1.5T 4-Cylindres', ar: 'مولد جديد 1.5T رباعي الأسطوانات' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Miller cycle, 42% thermal efficiency, 6.19L/100km fuel consumption (RWD)', fr: 'Cycle Miller, efficacité thermique 42%, consommation 6.19L/100km (propulsion)', ar: 'دورة ميلر، كفاءة حرارية 42%، استهلاك 6.19 لتر/100 كم (دفع خلفي)' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Section 4: Intelligent Safety -->
    <section id="section4" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/free/images/bg_free_pc20_0001_1920.jpg')` }">
      <h2 class="title inview-child inview-animated">{{ textFor({ en: 'Excellent Intelligent Safety', fr: 'Sécurité Intelligente Excellente', ar: 'أمان ذكي ممتاز' }) }}</h2>
      <p class="subTitle inview-child inview-animated">{{ textFor({ en: 'All-new evolution, everything intelligently under control', fr: 'Toute nouvelle évolution, tout intelligemment sous contrôle', ar: 'تطور جديد، كل شيء تحت السيطرة الذكية' }) }}</p>
    </section>

    <!-- Baidu Apollo -->
    <section class="level-two" id="apollo">
      <div class="headline">
        <h2 class="title">{{ textFor({ en: 'Baidu Apollo L2.9 Integrated Driving Assist', fr: 'Assistance Conduite Intégrée Baidu Apollo L2.9', ar: 'مساعدة القيادة المتكاملة Baidu Apollo L2.9' }) }}</h2>
        <p class="subTitle">{{ textFor({ en: 'Leave the road to FREE, the scenery to you. 6 cameras, 4 surround cameras, 5 mmWave radars, 12 ultrasonic radars', fr: 'Laissez la route à FREE, le paysage à vous. 6 caméras, 4 caméras surround, 5 radars mmWave, 12 radars ultrasoniques', ar: 'اترك الطريق لـ FREE، والمناظر لك. 6 كاميرات، 4 كاميرات محيطية، 5 رادارات موجية ملليمترية، 12 رادار فوق صوتي' }) }}</p>
      </div>
      <div class="img-wrap">
        <img src="/assets/OFFICIALVOYAH/free/images/bg_free_pc25_0001.jpg" alt="Apollo" class="img" />
      </div>
    </section>

    <!-- Smart Parking -->
    <section class="level-two" id="parking">
      <div class="headline">
        <h2 class="title">{{ textFor({ en: 'Smart Parking Assist', fr: 'Assistance Stationnement Intelligent', ar: 'مساعدة الركن الذكية' }) }}</h2>
        <p class="subTitle">{{ textFor({ en: 'Can help daily, can impress others', fr: 'Peut aider au quotidien, peut impressionner les autres', ar: 'يمكن المساعدة يومياً، يمكن إبهار الآخرين' }) }}</p>
      </div>
      <div class="img-wrap">
        <img src="/assets/OFFICIALVOYAH/free/images/bg_free_pc26_0001.jpg" alt="Parking" class="img" />
      </div>
    </section>

    <!-- Intelligent Cockpit -->
    <section class="common" id="cockpit">
      <h3 class="title inview-child">{{ textFor({ en: 'Panoramic Intelligent Interactive Cockpit', fr: 'Cockpit Interactif Intelligent Panoramique', ar: 'مقصورة تفاعلية ذكية بانورامية' }) }}</h3>
      <p class="subTitle inview-child">{{ textFor({ en: 'Hears clearer, understands more, performs better', fr: 'Entend plus clair, comprend plus, exécute mieux', ar: 'يسمع أوضح، يفهم أكثر، ينفذ بشكل أفضل' }) }}</p>
      <div class="img-container">
        <img src="/assets/OFFICIALVOYAH/free/images/bg_free_pc32_0001.jpg" alt="Cockpit" class="single-img inview-child" />
      </div>
      <div class="single-description inview-child features-grid">
        <div class="description-item">
          <p class="description-title"></p>
          <p class="description-content">{{ textFor({ en: 'Intelligent voice interaction: All matters during the journey are a matter of one sentence. Ultra-fast dialogue, four-zone sound source localization, supports offline mode, full-scene controllable', fr: 'Interaction vocale intelligente: Tous les sujets du voyage se résument à une phrase. Dialogue ultra-rapide, localisation de source sonore quatre zones, supporte mode hors ligne, scènes complètes contrôlables', ar: 'تفاعل صوتي ذكي: جميع الأمور خلال الرحلة هي مسألة جملة واحدة. حوار فائق السرعة، تحديد مصدر الصوت بأربع مناطق، يدعم وضع عدم الاتصال، جميع السيناريوهات قابلة للتحكم' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title"></p>
          <p class="description-content">{{ textFor({ en: 'System fluency upgrade: No lag, improved smoothness. 120Hz sampling rate, 60Hz refresh rate. Customized entertainment, high-precision navigation, 0-layer HMI interface', fr: 'Amélioration fluidité système: Pas de lag, fluidité améliorée. Taux échantillonnage 120Hz, taux rafraîchissement 60Hz. Divertissement personnalisé, navigation haute précision, interface HMI 0-couche', ar: 'تحسين سلاسة النظام: بدون تأخير، سلاسة محسّنة. معدل أخذ عينات 120 هرتز، معدل تحديث 60 هرتز. ترفيه مخصص، ملاحة عالية الدقة، واجهة HMI ذات 0 طبقات' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Dynaudio Audio -->
    <section class="common" id="audio">
      <h3 class="title inview-child">{{ textFor({ en: 'Dynaudio Hi-Fi Theater Sound', fr: 'Son Théâtre Hi-Fi Dynaudio', ar: 'صوت مسرحي Hi-Fi Dynaudio' }) }}</h3>
      <p class="subTitle inview-child">{{ textFor({ en: '10 industry top Dynaudio Hi-Fi speakers', fr: '10 haut-parleurs Hi-Fi Dynaudio de niveau industriel supérieur', ar: '10 مكبرات صوت Hi-Fi Dynaudio من المستوى المتقدم في الصناعة' }) }}</p>
      <div class="img-container">
        <img src="/assets/OFFICIALVOYAH/free/images/bg_free_pc33_0001.jpg" alt="Audio" class="single-img inview-child" />
      </div>
    </section>

    <!-- Body Safety -->
    <section class="common" id="body-safety">
      <h3 class="title inview-child">{{ textFor({ en: 'Body Safety', fr: 'Sécurité de la Carrosserie', ar: 'سلامة الهيكل' }) }}</h3>
      <p class="subTitle inview-child">{{ textFor({ en: '5-star safety standard, guarding journey safety, this solid', fr: 'Standard de sécurité 5 étoiles, gardien de la sécurité du voyage, aussi solide', ar: 'معيار سلامة 5 نجوم، حارس أمان الرحلة، قوي جداً' }) }}</p>
      <div class="single-img inview-child">
        <video
          ref="safetyVideo"
          class="video-player"
          playsinline
          webkit-playsinline
          x5-video-player-type="h5"
          muted
          loop
          autoplay
        >
          <source src="/assets/OFFICIALVOYAH/free/videos/safety.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="single-description inview-child column4">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'C-NCAP 5-Star Safety', fr: 'Sécurité 5 Étoiles C-NCAP', ar: 'سلامة 5 نجوم C-NCAP' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'High-Strength Cage Body', fr: 'Carrosserie Cage Haute Résistance', ar: 'هيكل قفص عالي المقاومة' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '31% Hot-Formed Steel, 75% High-Strength Steel', fr: '31% Acier Thermoformé, 75% Acier Haute Résistance', ar: '31% فولاذ مُشكّل حرارياً، 75% فولاذ عالي المقاومة' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '2000MPa Aluminum-Silicon Door Beam', fr: 'Poutre de Porte Aluminium-Silicium 2000MPa', ar: 'عارضة باب ألومنيوم-سيليكون 2000 ميجا باسكال' }) }}</p>
        </div>
      </div>
    </section>

    <!-- 7-Layer Collision Protection -->
    <section class="common" id="collision">
      <div class="img-container">
        <img src="/assets/OFFICIALVOYAH/free/images/bg_free_pc40_0001.jpg" alt="Collision" class="single-img inview-child margin-top-0" />
      </div>
      <div class="single-description inview-child column1">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Seven-Layer Frontal Collision Protection', fr: 'Protection Collision Frontale Sept Couches', ar: 'حماية تصادم أمامية بسبع طبقات' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Effectively absorb and disperse impact forces', fr: 'Absorber et disperser efficacement les forces d\'impact', ar: 'امتصاص وتشتيت قوى التصادم بفعالية' }) }}</p>
        </div>
      </div>
    </section>

    <!-- 3-Electric Safety -->
    <section class="common commonMax" id="ev-safety">
      <h3 class="title inview-child">{{ textFor({ en: '3-Electric Safety', fr: 'Sécurité 3-Électrique', ar: 'سلامة النظام الكهربائي الثلاثي' }) }}</h3>
      <p class="subTitle inview-child">{{ textFor({ en: 'Safety buff stacked, protecting you comprehensively', fr: 'Bonus sécurité cumulé, vous protégeant de manière complète', ar: 'مكافآت أمان متراكمة، حمايتك بشكل شامل' }) }}</p>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.evSafety * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in evSafetySlides" :key="idx">
            <div class="img-container">
              <img :src="slide.image" :alt="slide.title" class="slide-img" />
            </div>
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.title }}</p>
              <p v-if="slide.desc" class="desc-content">{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination inview-child">
        <div
          v-for="(_, idx) in evSafetySlides"
          :key="idx"
          class="pagination-bullet"
          :class="{ active: currentSlide.evSafety === idx }"
          @click="currentSlide.evSafety = idx"
        ></div>
      </div>
      <div class="description-pagination-wrap inview-child">
        <div class="description-list">
          <div
            v-for="(slide, idx) in evSafetySlides"
            :key="idx"
            class="description-item"
            :class="{ active: currentSlide.evSafety === idx }"
            @click="currentSlide.evSafety = idx"
          >
            <p class="description-title">{{ slide.title }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Active/Passive Safety -->
    <section class="level-two" id="active-passive">
      <div class="headline">
        <h2 class="title">{{ textFor({ en: 'Active & Passive Safety Protection', fr: 'Protection Sécurité Active & Passive', ar: 'حماية أمان نشطة وسلبية' }) }}</h2>
      </div>
      <div class="img-wrap">
        <img src="/assets/OFFICIALVOYAH/free/images/bg_free_pc23_0001.jpg" alt="Safety" class="img" />
      </div>
    </section>

    <!-- New Active Safety Standard -->
    <section class="common" id="active-safety">
      <h3 class="title inview-child">{{ textFor({ en: 'All-New Active Safety Standard', fr: 'Nouveau Standard de Sécurité Active', ar: 'معيار جديد للأمان النشط' }) }}</h3>
      <p class="subTitle inview-child">{{ textFor({ en: 'Full-dimension active safety, always online protection', fr: 'Sécurité active pleine dimension, protection toujours en ligne', ar: 'سلامة نشطة بأبعاد كاملة، حماية دائمة على الإنترنت' }) }}</p>
      <div class="single-img inview-child">
        <video
          ref="activeSafetyVideo"
          class="video-player"
          playsinline
          webkit-playsinline
          x5-video-player-type="h5"
          muted
          loop
          autoplay
        >
          <source src="/assets/OFFICIALVOYAH/free/videos/active_safety.mp4" type="video/mp4" />
        </video>
      </div>
    </section>

    <!-- Cabin Safety -->
    <section class="common" id="cabin-safety">
      <h3 class="title inview-child">{{ textFor({ en: 'Cabin Safety', fr: 'Sécurité de l\'Habitacle', ar: 'سلامة المقصورة' }) }}</h3>
      <p class="subTitle inview-child">{{ textFor({ en: 'Like entering a forest, enjoy a fresh journey', fr: 'Comme entrer dans une forêt, profitez d\'un voyage frais', ar: 'كالدخول إلى غابة، استمتع برحلة منعشة' }) }}</p>
      <div class="img-container">
        <img src="/assets/OFFICIALVOYAH/free/images/bg_free_pc34_0001.jpg" alt="Cabin Safety" class="single-img inview-child" />
      </div>
      <div class="single-description inview-child column1">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'OEKO-TEX Baby-Skin Friendly Fabric / Water-Based Paint Throughout', fr: 'Tissu Certifié OEKO-TEX Peau Bébé / Peinture à Base d\'Eau Partout', ar: 'قماش معتمد OEKO-TEX صديق لبشرة الأطفال / طلاء مائي في كل مكان' }) }}</p>
          <p class="description-content">{{ textFor({ en: '0 formaldehyde pollution, 0 odor introduction, 0 organic residue', fr: '0 pollution formaldéhyde, 0 introduction d\'odeur, 0 résidu organique', ar: '0 تلوث فورمالديهايد، 0 إدخال روائح، 0 بقايا عضوية' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Feature Grid -->
    <section class="grid-wrap" id="features">
      <div class="grid-list">
        <div class="grid-row">
          <div class="grid-item">
            <img src="/assets/OFFICIALVOYAH/free/images/bg-free-h97D-1.jpg" alt="Air Suspension" class="grid-item-img" />
            <div class="grid-item-description">{{ textFor({ en: '100mm Adjustable Air Suspension', fr: 'Suspension Pneumatique 100mm', ar: 'تعليق هوائي 100 مم' }) }}</div>
          </div>
          <div class="grid-item">
            <img src="/assets/OFFICIALVOYAH/free/images/bg-free-h97D-2.jpg" alt="4WD" class="grid-item-img" />
            <div class="grid-item-description">{{ textFor({ en: 'Dynamic Intelligent 4WD, 4.5s 0-100km/h', fr: '4WD Intelligent Dynamique, 0-100km/h en 4.5s', ar: 'دفع رباعي ذكي ديناميكي، 0-100 كم/س في 4.5 ثانية' }) }}</div>
          </div>
          <div class="grid-item wide">
            <img src="/assets/OFFICIALVOYAH/free/images/bg-free-h97D-3.jpg" alt="Chassis" class="grid-item-img" />
            <div class="grid-item-description">{{ textFor({ en: 'All-Aluminum Lightweight Chassis, Front Double Wishbone + Rear H-Arm Multi-Link', fr: 'Châssis Léger Tout-Aluminium, Double Triangle Avant + Multi-Bras Arrière H', ar: 'هيكل خفيف من الألمنيوم، مثلث مزدوج أمامي + متعدد الأذرع الخلفي H' }) }}</div>
          </div>
        </div>
        <div class="grid-row">
          <div class="grid-item">
            <img src="/assets/OFFICIALVOYAH/free/images/bg-free-h97D-4.jpg" alt="Blade Design" class="grid-item-img" />
            <div class="grid-item-description">{{ textFor({ en: 'Blade Mecha Pioneer Design', fr: 'Design Pionnier Méca-Lame', ar: 'تصميم رائد بليد ميكا' }) }}</div>
          </div>
          <div class="grid-item">
            <img src="/assets/OFFICIALVOYAH/free/images/bg-free-h97D-5.jpg" alt="Red Calipers" class="grid-item-img" />
            <div class="grid-item-description">{{ textFor({ en: 'Flame Red Sport Calipers', fr: 'Étriers de Sport Rouge Flamme', ar: 'فرامل رياضية حمراء اللهب' }) }}</div>
          </div>
          <div class="grid-item wide">
            <img src="/assets/OFFICIALVOYAH/free/images/bg-free-h97D-6.jpg" alt="Highway Assist" class="grid-item-img" />
            <div class="grid-item-description">{{ textFor({ en: 'Highway Navigation Assist, <1 takeover per 100km', fr: 'Assistance Navigation Autoroute, <1 reprise par 100km', ar: 'مساعدة ملاحة الطريق السريع، <1 تدخل لكل 100 كم' }) }}</div>
          </div>
        </div>
        <div class="grid-row">
          <div class="grid-item full">
            <img src="/assets/OFFICIALVOYAH/free/images/bg-free-h97D-7.jpg" alt="Range" class="grid-item-img" />
            <div class="grid-item-description">{{ textFor({ en: '318km Pure Electric Range (CLTC), 1458km Combined Range (CLTC)', fr: '318km Autonomie Électrique Pure (CLTC), 1458km Autonomie Combinée (CLTC)', ar: '318 كم مدى كهربائي نقي (CLTC)، 1458 كم مدى إجمالي (CLTC)' }) }}</div>
          </div>
        </div>
      </div>
      <p class="tips">*{{ textFor({ en: 'Voyah FREE 318 colors and configuration content, please refer to the current official App configuration', fr: 'Couleurs et configuration Voyah FREE 318, veuillez vous référer à l\'App officielle actuelle', ar: 'ألوان وتكوين Voyah FREE 318، يرجى الرجوع إلى التطبيق الرسمي الحالي' }) }}</p>
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
  mecha: 0,
  interior: 0,
  intColor: 0,
  evSafety: 0
})

const currentColor = ref(0)

// Chapter sections data
const chapterSections = computed(() => [
  { id: 'section1', title: textFor({ en: 'Design', fr: 'Design', ar: 'التصميم' }) },
  { id: 'section2', title: textFor({ en: 'Driving', fr: 'Conduite', ar: 'القيادة' }) },
  { id: 'section3', title: textFor({ en: '3-Electric', fr: '3-Électrique', ar: 'ثلاثي كهربائي' }) },
  { id: 'section4', title: textFor({ en: 'Safety', fr: 'Sécurité', ar: 'السلامة' }) }
])

// Mecha design slides
const mechaSlides = computed(() => [
  {
    image: '/assets/OFFICIALVOYAH/free/images/bg_free_pc27_0005.jpg',
    title: textFor({ en: 'Blade Mecha Front Face', fr: 'Face Avant Méca-Lame', ar: 'الوجه الأمامي بليد ميكا' })
  },
  {
    image: '/assets/OFFICIALVOYAH/free/images/bg_free_pc27_0006.jpg',
    title: textFor({ en: 'Integrated Light Bar, Bionic Grille', fr: 'Bande Lumineuse Intégrée, Grille Bionique', ar: 'شريط إضاءة متكامل، شبك بيونيك' })
  },
  {
    image: '/assets/OFFICIALVOYAH/free/images/bg_free_pc27_0007.jpg',
    title: textFor({ en: 'Blade Shadow Streamlined Side, Sport Stance', fr: 'Flanc Streamlined Ombre Lame, Posture Sport', ar: 'جنب انسيابي ظل الشفرة، وضعية رياضية' })
  },
  {
    image: '/assets/OFFICIALVOYAH/free/images/bg_free_pc27_0008.jpg',
    title: textFor({ en: 'Blade Speed Tail Wing', fr: 'Aileron Arrière Vitesse Lame', ar: 'جناح سرعة الشفرة' })
  },
  {
    image: '/assets/OFFICIALVOYAH/free/images/bg_free_pc27_0009.jpg',
    title: textFor({ en: 'Star Ring 5-Spoke Dynamic Wheels', fr: 'Jantes 5 Branches Dynamiques Anneau Étoile', ar: 'عجلات ديناميكية 5 أذرع حلقة نجمية' })
  }
])

// Interior slides
const interiorSlides = computed(() => [
  {
    image: '/assets/OFFICIALVOYAH/free/images/bg_free_pc29_0001.jpg',
    title: textFor({ en: 'Luxury Suede Seats & Door Panels / Tech Dynamic Trim', fr: 'Sièges & Panneaux de Porte en Suède de Luxe / Garniture Tech Dynamique', ar: 'مقاعد وألواح أبواب من الجلد المدبوغ الفاخر / تزيين تقني ديناميكي' }),
    desc: textFor({ en: 'Premium quality, delicate touch', fr: 'Qualité premium, toucher délicat', ar: 'جودة متميزة، لمسة رقيقة' })
  },
  {
    image: '/assets/OFFICIALVOYAH/free/images/bg_free_pc29_0002.jpg',
    title: textFor({ en: 'Sharp Shuttle Diagonal Craftsmanship', fr: 'Artisanat Diagonal Navette Aiguisé', ar: 'حرفية قطرية حادة' }),
    desc: textFor({ en: 'Pure handcraft manufacturing process', fr: 'Processus de fabrication artisanale pure', ar: 'عملية تصنيع حرفية نقية' })
  },
  {
    image: '/assets/OFFICIALVOYAH/free/images/bg_free_pc29_0003.jpg',
    title: textFor({ en: 'Mechanical Physical Buttons', fr: 'Boutons Physiques Mécaniques', ar: 'أزرار ميكانيكية مادية' }),
    desc: textFor({ en: 'Safe and reliable, strong sense of ritual', fr: 'Sûr et fiable, fort sentiment de rituel', ar: 'آمن وموثوق، شعور قوي بالطقوس' })
  }
])

// Car colors
const carColors = computed(() => [
  { name: textFor({ en: 'Shaohua Cyan', fr: 'Cyan Shaohua', ar: 'سيان شاوهوا' }), icon: '/assets/OFFICIALVOYAH/free/images/icon5.png', carImage: '/assets/OFFICIALVOYAH/free/images/car5.png' },
  { name: textFor({ en: 'Titanium Grey', fr: 'Gris Titane', ar: 'رمادي تيتانيوم' }), icon: '/assets/OFFICIALVOYAH/free/images/icon1.png', carImage: '/assets/OFFICIALVOYAH/free/images/car1.png' },
  { name: textFor({ en: 'Emerald Green', fr: 'Vert Émeraude', ar: 'أخضر زمردي' }), icon: '/assets/OFFICIALVOYAH/free/images/icon2.png', carImage: '/assets/OFFICIALVOYAH/free/images/car2.png' },
  { name: textFor({ en: 'Dew White', fr: 'Blanc Rosée', ar: 'أبيض الندى' }), icon: '/assets/OFFICIALVOYAH/free/images/icon3.png', carImage: '/assets/OFFICIALVOYAH/free/images/car3.png' },
  { name: textFor({ en: 'Mystic Black', fr: 'Noir Mystique', ar: 'أسود غامض' }), icon: '/assets/OFFICIALVOYAH/free/images/icon4.png', carImage: '/assets/OFFICIALVOYAH/free/images/car4.png' }
])

// Interior colors
const interiorColors = computed(() => [
  { name: textFor({ en: 'Wave Riding White', fr: 'Blanc Chevaucheur de Vagues', ar: 'أبيض راكب الأمواج' }), image: '/assets/OFFICIALVOYAH/free/images/bg_free_pc30_0003.jpg' },
  { name: textFor({ en: 'Blade Edge Black', fr: 'Noir Tranchant Lame', ar: 'أسود حافة الشفرة' }), image: '/assets/OFFICIALVOYAH/free/images/bg_free_pc30_0001.jpg' },
  { name: textFor({ en: 'Phantom Grey', fr: 'Gris Fantôme', ar: 'رمادي الشبح' }), image: '/assets/OFFICIALVOYAH/free/images/bg_free_pc30_0002.jpg' }
])

// EV Safety slides
const evSafetySlides = computed(() => [
  {
    image: '/assets/OFFICIALVOYAH/free/images/bg_free_pc38_0001.jpg',
    title: textFor({ en: '150 Safety Certifications / IP67 Waterproof', fr: '150 Certifications Sécurité / Étanchéité IP67', ar: '150 شهادة أمان / مقاومة للماء IP67' }),
    desc: textFor({ en: 'No leakage, no fire, no explosion, no thermal diffusion, no water ingress', fr: 'Pas de fuite, pas de feu, pas d\'explosion, pas de diffusion thermique, pas d\'infiltration', ar: 'لا تسرب، لا حريق، لا انفجار، لا انتشار حراري، لا تسرب ماء' })
  },
  {
    image: '/assets/OFFICIALVOYAH/free/images/bg_free_pc38_0002.jpg',
    title: textFor({ en: 'Zinc-Magnesium Coating + 1500MPa High-Strength Floor', fr: 'Revêtement Zinc-Magnésium + Plancher 1500MPa Haute Résistance', ar: 'طلاء زنك-مغنيسيوم + أرضية 1500 ميجا باسكال عالية المقاومة' }),
    desc: ''
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
.free-318-page {
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
  margin: 40px auto 0;
}

.column4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

@media (max-width: 1024px) {
  .column4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .column4 {
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
  margin-bottom: 16px;
  color: #fff;
}

.car-color-container .subTitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 40px;
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

/* Grid */
.grid-wrap {
  padding: 80px 40px;
  background: #000;
}

.grid-list {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.grid-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 1024px) {
  .grid-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .grid-row {
    grid-template-columns: 1fr;
  }
}

.grid-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.grid-item.wide {
  grid-column: span 1;
}

.grid-item.full {
  grid-column: span 3;
}

@media (max-width: 1024px) {
  .grid-item.full {
    grid-column: span 2;
  }
}

@media (max-width: 640px) {
  .grid-item.full {
    grid-column: span 1;
  }
}

.grid-item-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 16/10;
}

.grid-item-description {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  font-size: 16px;
  color: #fff;
}

.tips {
  text-align: center;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 40px;
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
