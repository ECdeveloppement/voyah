<template>
  <div class="passion-l-page">
    <!-- Hero Section -->
    <section class="kv-section">
      <img 
        src="/assets/OFFICIALVOYAH/passion-L/images/sc_1.jpg" 
        alt="Passion L" 
        class="kv-bg-img"
      />
      <div class="kv-content">
        <img 
          src="/assets/OFFICIALVOYAH/passion-L/images/f4f5a6a1-71c8-4531-8a05-4e6e0cf7f70f1770619343790.png" 
          alt="Passion L Logo" 
          class="kv-logo inview-child inview-animated"
          style="--inview-delay: 0.3s;"
        />
        <p class="kv-slogan inview-child inview-animated" style="--inview-delay: 0.4s;">
          {{ textFor({ en: 'New-Era Flagship Sedan', fr: 'Berline Phare Nouvelle Ère', ar: 'سيدان رائدة من جيل جديد' }) }}
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

    <!-- Section 1: Oriental Flagship Aesthetics -->
    <section id="section1" class="level-one" targetindex="0" ref="sectionRefs[0]">
      <div class="section-bg" style="background-image: url('/assets/OFFICIALVOYAH/passion-L/images/sc_2.jpg');"></div>
      <div class="section-content">
        <h2 class="title inview-child inview-animated" style="--inview-delay: 0.3s;">{{ textFor({ en: 'Oriental Flagship Aesthetics', fr: 'Esthétique Orientale Phare', ar: 'الجماليات الشرقية الرائدة' }) }}</h2>
        <p class="subTitle inview-child inview-animated" style="--inview-delay: 0.4s;">{{ textFor({ en: 'Kunpeng Exterior Design', fr: 'Design Extérieur Kunpeng', ar: 'تصميم كون بينغ الخارجي' }) }}</p>
      </div>
    </section>

    <!-- Section 2: 展翼 (Wings) - Swiper Gallery -->
    <section id="section2" class="common commonMax" targetindex="0" ref="sectionRefs[1]">
      <h3 class="title inview-child inview-animated" style="--inview-delay: 0.3s;">{{ textFor({ en: 'Spreading Wings', fr: 'Ailes Déployées', ar: 'الأجنحة المنتشرة' }) }}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translateX(-${currentSlide.section2 * 100}%)` }">
          <div class="swiper-slide" v-for="(slide, idx) in zhanyiSlides" :key="idx">
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
          v-for="(_, idx) in zhanyiSlides" 
          :key="idx"
          class="pagination-bullet"
          :class="{ active: currentSlide.section2 === idx }"
          @click="currentSlide.section2 = idx"
        ></div>
      </div>
      <div class="description-pagination-wrap inview-child inview-animated" style="--inview-delay: 0.5s;">
        <div class="description-list">
          <div 
            v-for="(slide, idx) in zhanyiSlides" 
            :key="idx"
            class="description-item"
            :class="{ active: currentSlide.section2 === idx }"
            @click="currentSlide.section2 = idx"
          >
            <p class="description-title">{{ slide.title }}</p>
          </div>
        </div>
        <p class="description-content">{{ zhanyiSlides[currentSlide.section2].desc }}</p>
      </div>
    </section>

    <!-- Section 3: 擎空 (Soaring) -->
    <section id="section3" class="common commonMax" targetindex="0" ref="sectionRefs[2]">
      <h3 class="title inview-child inview-animated" style="--inview-delay: 0.3s;">{{ textFor({ en: 'Soaring Sky', fr: 'Ascension Céleste', ar: 'الصعود إلى السماء' }) }}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translateX(-${currentSlide.section3 * 100}%)` }">
          <div class="swiper-slide" v-for="(slide, idx) in qingkongSlides" :key="idx">
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
          v-for="(_, idx) in qingkongSlides" 
          :key="idx"
          class="pagination-bullet"
          :class="{ active: currentSlide.section3 === idx }"
          @click="currentSlide.section3 = idx"
        ></div>
      </div>
      <div class="description-pagination-wrap inview-child inview-animated" style="--inview-delay: 0.5s;">
        <div class="description-list">
          <div 
            v-for="(slide, idx) in qingkongSlides" 
            :key="idx"
            class="description-item"
            :class="{ active: currentSlide.section3 === idx }"
            @click="currentSlide.section3 = idx"
          >
            <p class="description-title">{{ slide.title }}</p>
          </div>
        </div>
        <p class="description-content">{{ qingkongSlides[currentSlide.section3].desc }}</p>
      </div>
    </section>

    <!-- Section 4: 逍遥 (Freedom) -->
    <section id="section4" class="common commonMax" targetindex="0" ref="sectionRefs[3]">
      <h3 class="title inview-child">{{ textFor({ en: 'Unrestrained', fr: 'Liberté', ar: 'الحرية' }) }}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translateX(-${currentSlide.section4 * 100}%)` }">
          <div class="swiper-slide" v-for="(slide, idx) in xiaoyaoSlides" :key="idx">
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
          v-for="(_, idx) in xiaoyaoSlides" 
          :key="idx"
          class="pagination-bullet"
          :class="{ active: currentSlide.section4 === idx }"
          @click="currentSlide.section4 = idx"
        ></div>
      </div>
      <div class="description-pagination-wrap inview-child">
        <div class="description-list">
          <div 
            v-for="(slide, idx) in xiaoyaoSlides" 
            :key="idx"
            class="description-item"
            :class="{ active: currentSlide.section4 === idx }"
            @click="currentSlide.section4 = idx"
          >
            <p class="description-title">{{ slide.title }}</p>
          </div>
        </div>
        <p class="description-content">{{ xiaoyaoSlides[currentSlide.section4].desc }}</p>
      </div>
    </section>

    <!-- Section 5: Color Selector -->
    <section id="section5" class="car-color-container" code="passion-L" targetindex="0" ref="sectionRefs[4]">
      <h3 class="title">{{ textFor({ en: 'Oriental Luxury Colors', fr: 'Couleurs de Luxe Orientales', ar: 'ألوان الفخامة الشرقية' }) }}</h3>
      <div class="car-swiper-wap">
        <div 
          v-for="(color, idx) in carColors" 
          :key="color.id"
          class="swiper-slide"
          :style="{ 
            transition: 'none', 
            left: idx === currentColor ? '0' : '100%',
            opacity: idx === currentColor ? 1 : 0
          }"
        >
          <div class="swiper-slide-item">
            <img :src="color.image" :alt="color.name" class="swiper-slide-img" />
          </div>
        </div>
      </div>
      <div class="car-color-list">
        <div 
          v-for="(color, idx) in carColors" 
          :key="color.id"
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

    <!-- Section 6: Interior Space - Kunpeng Ambition -->
    <section id="section6" class="level-one" targetindex="0" ref="sectionRefs[5]">
      <div class="section-bg" style="background-image: url('/assets/OFFICIALVOYAH/passion-L/images/sc_17.jpg');"></div>
      <div class="section-content">
        <h2 class="title inview-child inview-animated" style="--inview-delay: 0.3s;">{{ textFor({ en: 'Kunpeng Ambition', fr: 'Ambition Kunpeng', ar: 'طموح كون بينغ' }) }}</h2>
        <p class="subTitle inview-child inview-animated" style="--inview-delay: 0.4s;">{{ textFor({ en: 'Elegant Oriental Interior', fr: 'Intérieur Oriental Élégant', ar: 'المقصورة الشرقية الأنيقة' }) }}</p>
      </div>
    </section>

    <!-- Interior Features Swiper -->
    <section class="common commonMax">
      <h3 class="title inview-child inview-animated">{{ textFor({ en: 'Cloud Piercing', fr: 'Percer les Nuages', ar: 'اختراق السحاب' }) }}</h3>
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
      <div class="pagination inview-child inview-animated">
        <div 
          v-for="(_, idx) in interiorSlides" 
          :key="idx"
          class="pagination-bullet"
          :class="{ active: currentSlide.interior === idx }"
          @click="currentSlide.interior = idx"
        ></div>
      </div>
      <div class="description-pagination-wrap inview-child inview-animated">
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

    <!-- Section 7: HarmonySpace Cockpit -->
    <section id="section7" class="level-one" targetindex="0" ref="sectionRefs[6]">
      <div class="section-bg" style="background-image: url('/assets/OFFICIALVOYAH/passion-L/images/sc_25.jpg');"></div>
      <div class="section-content">
        <h2 class="title inview-child inview-animated" style="--inview-delay: 0.3s;">{{ textFor({ en: 'HarmonySpace Cockpit', fr: 'Cockpit HarmonySpace', ar: 'مقصورة هارموني سبيس' }) }}</h2>
        <p class="subTitle inview-child inview-animated" style="--inview-delay: 0.4s;">{{ textFor({ en: 'New Human-Vehicle Interaction', fr: 'Nouvelle Interaction Homme-Véhicule', ar: 'تفاعل جديد بين الإنسان والمركبة' }) }}</p>
      </div>
    </section>

    <!-- HarmonySpace Features -->
    <section class="common">
      <h3 class="title inview-child">{{ textFor({ en: 'HarmonySpace Smart Cockpit', fr: 'Cockpit Intelligent HarmonySpace', ar: 'مقصورة هارموني سبيس الذكية' }) }}</h3>
      <div class="single-img-container inview-child">
        <img src="https://www.voyah.com.cn/voyah-resources/images/car/passion-L/1920/sc_26.jpg" alt="HarmonySpace" class="single-img" />
      </div>
      <div class="single-description inview-child">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '15.6-inch Smart Screen', fr: 'Écran Intelligent 15.6 pouces', ar: 'شاشة ذكية 15.6 بوصة' }) }}</p>
          <p class="description-content">{{ textFor({ en: '2K HD resolution, HarmonyOS ecosystem, full-scene smart connectivity', fr: 'Résolution 2K, écosystème HarmonyOS, connectivité intelligente', ar: 'دقة 2K، نظام هارموني، اتصال ذكي' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Section 8: Huawei ADS -->
    <section class="common commonMax">
      <h3 class="title inview-child">{{ textFor({ en: 'Huawei Qiankun ADS 3.0', fr: 'Huawei Qiankun ADS 3.0', ar: 'هواوي كيانكون ADS 3.0' }) }}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translateX(-${currentSlide.ads * 100}%)` }">
          <div class="swiper-slide" v-for="(slide, idx) in adsSlides" :key="idx">
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
          v-for="(_, idx) in adsSlides" 
          :key="idx"
          class="pagination-bullet"
          :class="{ active: currentSlide.ads === idx }"
          @click="currentSlide.ads = idx"
        ></div>
      </div>
      <div class="description-pagination-wrap inview-child">
        <div class="description-list">
          <div 
            v-for="(slide, idx) in adsSlides" 
            :key="idx"
            class="description-item"
            :class="{ active: currentSlide.ads === idx }"
            @click="currentSlide.ads = idx"
          >
            <p class="description-title">{{ slide.title }}</p>
          </div>
        </div>
        <p class="description-content">{{ adsSlides[currentSlide.ads].desc }}</p>
      </div>
    </section>

    <!-- Safety Section -->
    <section class="common">
      <h3 class="title inview-child">{{ textFor({ en: 'CAS 4.0 Collision Avoidance', fr: 'Système Anti-Collision CAS 4.0', ar: 'نظام تجنب الاصطدام CAS 4.0' }) }}</h3>
      <div class="single-img-container inview-child">
        <img src="https://www.voyah.com.cn/voyah-resources/images/car/passion-L/1920/sc_30.jpg" alt="Safety" class="single-img" />
      </div>
      <div class="single-description inview-child features-grid">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'AEB Active Safety', fr: 'Sécurité Active AEB', ar: 'السلامة النشطة AEB' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Active braking at 130km/h', fr: 'Freinage actif à 130km/h', ar: 'الفرملة النشطة عند 130 كم/س' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'RAEB Rear Emergency Braking', fr: 'Freinage d\'Urgence Arrière RAEB', ar: 'الفرملة الطارئة الخلفية RAEB' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Rear braking 0-30km/h', fr: 'Freinage arrière 0-30km/h', ar: 'الفرملة الخلفية 0-30 كم/س' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'LOCP Side Obstacle Avoidance', fr: 'Évitement Latéral LOCP', ar: 'تجنب العقبات الجانبية LOCP' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Side collision avoidance 40-120km/h with active evasion', fr: 'Évitement latéral 40-120km/h avec évasion active', ar: 'تجنب الاصطدام الجانبي 40-120 كم/س' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'eAES Enhanced Emergency Steering', fr: 'Direction d\'Urgence eAES', ar: 'التوجيه الطارئ eAES' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Coordinated braking & steering 50-135km/h', fr: 'Freinage et direction coordonnés 50-135km/h', ar: 'فرملة وتوجيه متناسقان 50-135 كم/س' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Powertrain Section -->
    <section id="section8" class="level-one">
      <div class="section-bg" style="background-image: url('/assets/OFFICIALVOYAH/passion-L/images/sc_31.jpg');"></div>
      <div class="section-content">
        <h2 class="title inview-child inview-animated">{{ textFor({ en: '800V Voyah Hybrid', fr: 'Hybride Voyah 800V', ar: 'هجين فوياج 800V' }) }}</h2>
        <p class="subTitle inview-child inview-animated">{{ textFor({ en: '410km range, boundless world', fr: '410km d\'autonomie, monde sans limites', ar: 'مدى 410 كم، عالم بلا حدود' }) }}</p>
      </div>
    </section>

    <!-- Charging Section -->
    <section class="common">
      <h3 class="title inview-child">{{ textFor({ en: '5C Super Fast Charging', fr: 'Recharge Ultra-Rapide 5C', ar: 'شحن سريع 5C' }) }}</h3>
      <div class="single-img-container inview-child">
        <img src="https://www.voyah.com.cn/voyah-resources/images/car/passion-L/1920/sc_33.jpg" alt="Charging" class="single-img" />
      </div>
      <div class="single-description inview-child">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Hybrid Super-Charging Battery', fr: 'Batterie Super-Recharge Hybride', ar: 'بطارية الشحن السريع الهجينة' }) }}</p>
          <p class="description-content">{{ textFor({ en: '800V 5C fast charging, 20%-80% in just 12 minutes', fr: 'Recharge rapide 800V 5C, 20%-80% en seulement 12 minutes', ar: 'شحن سريع 800V 5C، 20%-80% في 12 دقيقة فقط' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Power Section -->
    <section class="common commonMax">
      <h3 class="title inview-child">{{ textFor({ en: '915N·m Power, Boundless Limits', fr: '915N·m de Puissance, Limites Infinies', ar: 'قوة 915 نيوتن متر، حدود بلا حدود' }) }}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translateX(-${currentSlide.power * 100}%)` }">
          <div class="swiper-slide" v-for="(slide, idx) in powerSlides" :key="idx">
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
          v-for="(_, idx) in powerSlides" 
          :key="idx"
          class="pagination-bullet"
          :class="{ active: currentSlide.power === idx }"
          @click="currentSlide.power = idx"
        ></div>
      </div>
      <div class="description-pagination-wrap inview-child">
        <div class="description-list">
          <div 
            v-for="(slide, idx) in powerSlides" 
            :key="idx"
            class="description-item"
            :class="{ active: currentSlide.power === idx }"
            @click="currentSlide.power = idx"
          >
            <p class="description-title">{{ slide.title }}</p>
          </div>
        </div>
        <p class="description-content">{{ powerSlides[currentSlide.power].desc }}</p>
      </div>
    </section>

    <!-- Chassis Section -->
    <section class="level-one">
      <div class="section-bg" style="background-image: url('/assets/OFFICIALVOYAH/passion-L/images/sc_35.jpg');"></div>
      <div class="section-content">
        <h2 class="title inview-child inview-animated">{{ textFor({ en: 'Stable Journey, Cloud View', fr: 'Voyage Stable, Vue sur les Nuages', ar: 'رحلة مستقرة، إطلالة على السحاب' }) }}</h2>
        <p class="subTitle inview-child inview-animated">{{ textFor({ en: 'Magic Carpet Chassis, Perfect Balance', fr: 'Châssis Tapis Magique, Équilibre Parfait', ar: 'هيكل السجادة السحرية، توازن مثالي' }) }}</p>
      </div>
    </section>

    <!-- Magic Carpet Features -->
    <section class="common">
      <div class="single-img-container inview-child">
        <img src="/assets/OFFICIALVOYAH/passion-L/images/sc_36.jpg" alt="Chassis" class="single-img" />
      </div>
      <div class="single-description inview-child features-grid">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Magic Carpet + CDC', fr: 'Tapis Magique + CDC', ar: 'السجادة السحرية + CDC' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Bump-free private cabin experience', fr: 'Cabine privée sans à-coups', ar: 'مقصورة خاصة خالية من الارتجاجات' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '65mm Adjustable Air Suspension', fr: 'Suspension Pneumatique Réglable 65mm', ar: 'تعليق هوائي قابل للتعديل 65 مم' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Smoother ride, better road capability', fr: 'Conduite plus douce, meilleure capacité routière', ar: 'قيادة أكثر سلاسة، قدرة طرق أفضل' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Double Wishbone + 5-Link', fr: 'Double Triangle + 5-Bras', ar: 'مزدوج المثلث + 5 ذراع' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Superior stability, corners like flat ground', fr: 'Stabilité supérieure, virages comme sur du plat', ar: 'استقرار فائق، منعطفات كالسطح المسطح' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'All-Aluminum Chassis', fr: 'Châssis Tout-Aluminium', ar: 'هيكل كامل من الألمنيوم' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Premium road feedback, lighter driving', fr: 'Retour de route premium, conduite plus légère', ar: 'تغذية مرتجعة متميزة، قيادة أخف' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Driving Control Section -->
    <section class="common commonMax">
      <h3 class="title inview-child">{{ textFor({ en: 'Smooth Precise Control', fr: 'Contrôle Précis et Doux', ar: 'تحكم دقيق وسلس' }) }}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translateX(-${currentSlide.chassis * 100}%)` }">
          <div class="swiper-slide" v-for="(slide, idx) in chassisSlides" :key="idx">
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
          v-for="(_, idx) in chassisSlides" 
          :key="idx"
          class="pagination-bullet"
          :class="{ active: currentSlide.chassis === idx }"
          @click="currentSlide.chassis = idx"
        ></div>
      </div>
      <div class="description-pagination-wrap inview-child">
        <div class="description-list">
          <div 
            v-for="(slide, idx) in chassisSlides" 
            :key="idx"
            class="description-item"
            :class="{ active: currentSlide.chassis === idx }"
            @click="currentSlide.chassis = idx"
          >
            <p class="description-title">{{ slide.title }}</p>
          </div>
        </div>
        <p class="description-content">{{ chassisSlides[currentSlide.chassis].desc }}</p>
      </div>
    </section>

    <!-- Safety Banner -->
    <section class="level-one">
      <div class="section-bg" style="background-image: url('/assets/OFFICIALVOYAH/passion-L/images/sc_39.jpg');"></div>
      <div class="section-content">
        <h2 class="title inview-child inview-animated">{{ textFor({ en: 'All-Round Protection', fr: 'Protection Totale', ar: 'حماية شاملة' }) }}</h2>
      </div>
    </section>

    <!-- Safety Features -->
    <section class="common">
      <h3 class="title inview-child">{{ textFor({ en: 'Solid Passive Protection', fr: 'Protection Passive Solide', ar: 'حماية سلبية صلبة' }) }}</h3>
      <div class="single-img-container inview-child">
        <img src="/assets/OFFICIALVOYAH/passion-L/images/sc_40.jpg" alt="Passive Safety" class="single-img" />
      </div>
      <div class="single-description inview-child">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '2000MPa Body Structure', fr: 'Structure Carrosserie 2000MPa', ar: 'هيكل السيارة 2000 ميجا باسكال' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'World-first 2000MPa hot-formed laser-welded door ring', fr: 'Première mondiale: anneau de porte 2000MPa soudé au laser', ar: 'الأول عالمياً: حلقة باب 2000 ميجا باسكال ملحومة بالليزر' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '5-Star+ Safety Standard', fr: 'Standard Sécurité 5 Étoiles+', ar: 'معيار السلامة 5 نجوم+' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Top scores in C-IASI crash tests', fr: 'Meilleurs scores aux tests de collision C-IASI', ar: 'أعلى الدرجات في اختبارات التصادم C-IASI' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Bottom CTA Bar -->
    <div class="car-nav-wrap-bottom" :class="{ visible: showBottomBar }">
      <div class="car-nav-wrap-bottom-inner">
        <div class="button-config">{{ textFor({ en: 'View All Configs', fr: 'Voir Toutes les Configs', ar: 'عرض جميع التكوينات' }) }}</div>
        <div class="button-order">{{ textFor({ en: 'Order Now', fr: 'Commander', ar: 'اطلب الآن' }) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useSiteContent } from '~/composables/useSiteContent'

const props = defineProps<{
  model: any
}>()

const { textFor } = useSiteContent()

// Chapter sections data - using model data for translations
const chapterSections = computed(() => [
  { id: 'section1', title: textFor({ en: 'Oriental Aesthetics', fr: 'Esthétique Orientale', ar: 'الجماليات الشرقية' }), shortTitle: textFor({ en: 'Aesthetics', fr: 'Esthétique', ar: 'الجماليات' }) },
  { id: 'section2', title: textFor({ en: 'Comfort Cabin', fr: 'Habitacle Confort', ar: 'المقصورة المريحة' }), shortTitle: textFor({ en: 'Cabin', fr: 'Habitacle', ar: 'المقصورة' }) },
  { id: 'section3', title: textFor({ en: 'HarmonySpace', fr: 'HarmonySpace', ar: 'هارموني سبيس' }), shortTitle: textFor({ en: 'Harmony', fr: 'Harmony', ar: 'هارموني' }) },
  { id: 'section4', title: textFor({ en: 'Huawei ADS', fr: 'Huawei ADS', ar: 'ADS هواوي' }), shortTitle: textFor({ en: 'ADS', fr: 'ADS', ar: 'ADS' }) },
  { id: 'section5', title: textFor({ en: 'Powertrain', fr: 'Groupe Motopropulseur', ar: 'نظام الدفع' }), shortTitle: textFor({ en: 'Power', fr: 'Puissance', ar: 'القوة' }) },
  { id: 'section6', title: textFor({ en: 'Chassis', fr: 'Châssis', ar: 'الهيكل' }), shortTitle: textFor({ en: 'Chassis', fr: 'Châssis', ar: 'الهيكل' }) },
  { id: 'section7', title: textFor({ en: 'Safety', fr: 'Sécurité', ar: 'السلامة' }), shortTitle: textFor({ en: 'Safety', fr: 'Sécurité', ar: 'السلامة' }) }
])

// Swiper slides data with translations
const zhanyiSlides = computed(() => [
  { image: '/assets/OFFICIALVOYAH/passion-L/images/sc_3.jpg', title: textFor({ en: 'Kunpeng Wings - Front Design', fr: 'Ailes Kunpeng - Design Avant', ar: 'أجنحة كون بينغ - التصميم الأمامي' }), desc: textFor({ en: 'Majestic presence, grand vision', fr: 'Présence majestueuse, grande vision', ar: 'حضور مهيب، رؤية عظيمة' }) },
  { image: '/assets/OFFICIALVOYAH/passion-L/images/sc_3-2.jpg', title: textFor({ en: 'Water Character Headlights', fr: 'Phares en Forme d\'Eau', ar: ' المصابيح الأمامية على شكل ماء' }), desc: textFor({ en: 'Striking water-inspired lighting', fr: 'Éclairage inspiré de l\'eau', ar: 'إضاءة مستوحاة من الماء' }) },
  { image: '/assets/OFFICIALVOYAH/passion-L/images/sc_3-3.jpg', title: textFor({ en: 'Cascading Grille', fr: 'Grille en Cascade', ar: 'شبكة أمامية متتالية' }), desc: textFor({ en: 'Rising to the sky with confidence', fr: 'S\'élever vers le ciel avec confiance', ar: 'الصعود إلى السماء بثقة' }) }
])

const qingkongSlides = computed(() => [
  { image: '/assets/OFFICIALVOYAH/passion-L/images/sc_4.jpg', title: textFor({ en: 'Side Profile', fr: 'Profil Latéral', ar: 'الجانبية' }), desc: textFor({ en: 'Aspiring to the clouds', fr: 'Aspirant aux nuages', ar: 'تطلع إلى السحاب' }) },
  { image: '/assets/OFFICIALVOYAH/passion-L/images/sc_4-2.jpg', title: textFor({ en: '20-inch Radiant Wheels', fr: 'Jantes Rayonnantes 20 pouces', ar: 'عجلات 20 بوصة مشرقة' }), desc: textFor({ en: 'Illuminating the journey ahead', fr: 'Illuminant le voyage à venir', ar: 'إنارة الرحلة القادمة' }) },
  { image: '/assets/OFFICIALVOYAH/passion-L/images/sc_4-3.jpg', title: textFor({ en: '20-inch Shining Wheels', fr: 'Jantes Brillantes 20 pouces', ar: 'عجلات 20 بوصة لامعة' }), desc: textFor({ en: 'Bold and fearless', fr: 'Audacieux et sans peur', ar: 'جريء و بلا خوف' }) },
  { image: '/assets/OFFICIALVOYAH/passion-L/images/sc_4-4.jpg', title: textFor({ en: '19-inch Light Track Wheels', fr: 'Jantes 19 pouces', ar: 'عجلات 19 بوصة' }), desc: textFor({ en: 'Light accompanies every journey', fr: 'La lumière accompagne chaque voyage', ar: 'الضوء يرافق كل رحلة' }) }
])

const xiaoyaoSlides = computed(() => [
  { image: '/assets/OFFICIALVOYAH/passion-L/images/sc_5.jpg', title: textFor({ en: 'Rear Design', fr: 'Design Arrière', ar: 'التصميم الخلفي' }), desc: textFor({ en: 'Commanding presence', fr: 'Présence imposante', ar: 'حضور مهيب' }) },
  { image: '/assets/OFFICIALVOYAH/passion-L/images/sc_5-2.jpg', title: textFor({ en: 'Feather Tail Lights', fr: 'Feux Arrière Plume', ar: 'أضواء خلفية ريشية' }), desc: textFor({ en: 'Moving forward with light', fr: 'Avancer avec la lumière', ar: 'التقدم مع الضوء' }) }
])

// Interior slides data with translations
const interiorSlides = computed(() => [
  { image: '/assets/OFFICIALVOYAH/passion-L/images/sc_18.jpg', title: textFor({ en: 'Cloud Mountain Seats', fr: 'Sièges Montagne Nuage', ar: 'مقاعد جبل الغيمة' }), desc: textFor({ en: 'MPV-level comfort with layered texture', fr: 'Confort de niveau MPV avec texture en couches', ar: 'راحة على مستوى MPV مع نسيج طبقي' }) },
  { image: '/assets/OFFICIALVOYAH/passion-L/images/sc_19.jpg', title: textFor({ en: 'Crystal Gear Shifter', fr: 'Levier de Vitesse en Cristal', ar: 'عصبة التروس الكريستالية' }), desc: textFor({ en: 'Diamond-cut crystal, warm as jade', fr: 'Cristal taillé en diamant, chaud comme le jade', ar: 'كريستال مقطوع بالماس، دافئ كاليشم' }) },
  { image: '/assets/OFFICIALVOYAH/passion-L/images/sc_20.jpg', title: textFor({ en: 'Thousand Peak Trim', fr: 'Finition Mille Sommets', ar: 'تشطيب ألف قمة' }), desc: textFor({ en: 'Majestic mountain-inspired design', fr: 'Design majestueux inspiré des montagnes', ar: 'تصميم مهيب مستوحى من الجبال' }) }
])

// ADS slides data with translations
const adsSlides = computed(() => [
  { image: '/assets/OFFICIALVOYAH/passion-L/images/sc_27.jpg', title: textFor({ en: 'Full-Scene P2P Navigation', fr: 'Navigation P2P Toute Scène', ar: 'ملاحة P2P لكل المشاهد' }), desc: textFor({ en: 'Point-to-point 2.0 / Easy U-turn / Auto roundabout', fr: 'Point à point 2.0 / Demi-tour facile / Rond-point auto', ar: 'نقطة إلى نقطة 2.0 / دوران سهل / دوار تلقائي' }) },
  { image: '/assets/OFFICIALVOYAH/passion-L/images/sc_28.jpg', title: textFor({ en: 'Smart Parking Assist', fr: 'Aide au Stationnement Intelligent', ar: 'مساعدة الركن الذكية' }), desc: textFor({ en: 'Multi-level parking / Remote park-in / Complex spots', fr: 'Stationnement multi-niveaux / Stationnement à distance', ar: 'ركن متعدد المستويات / ركن عن بعد' }) }
])

// Powertrain slides data with translations
const powerSlides = computed(() => [
  { image: '/assets/OFFICIALVOYAH/passion-L/images/sc_34.jpg', title: textFor({ en: 'Lanhai Power', fr: 'Puissance Lanhai', ar: 'قوة لانهي' }), desc: textFor({ en: 'Versatile hybrid solution for all scenarios', fr: 'Solution hybride polyvalente pour tous les scénarios', ar: 'حل هجين متعدد الاستخدامات لجميع السيناريوهات' }) },
  { image: '/assets/OFFICIALVOYAH/passion-L/images/sc_34-2.jpg', title: textFor({ en: 'High-Energy Power', fr: 'Puissance Haute Énergie', ar: 'قوة طاقة عالية' }), desc: textFor({ en: '490kW total power, 915N·m torque, 0-100 in 4.8s', fr: '490kW, 915N·m, 0-100 en 4.8s', ar: '490 كيلوواط، 915 نيوتن متر، 0-100 في 4.8 ثانية' }) },
  { image: '/assets/OFFICIALVOYAH/passion-L/images/sc_34-3.jpg', title: textFor({ en: 'Ultra-Low Fuel Consumption', fr: 'Consommation Ultra-Faible', ar: 'استهلاك وقود منخفض للغاية' }), desc: textFor({ en: '45.18% thermal efficiency, 5.67L/100km', fr: 'Rendement thermique 45.18%, 5.67L/100km', ar: 'كفاءة حرارية 45.18%، 5.67 لتر/100 كم' }) }
])

// Chassis slides data with translations
const chassisSlides = computed(() => [
  { image: '/assets/OFFICIALVOYAH/passion-L/images/sc_38.jpg', title: textFor({ en: 'Rear-Wheel Steering', fr: 'Direction des Roues Arrière', ar: 'توجيه العجلات الخلفية' }), desc: textFor({ en: 'More agile turns, more stable high-speed driving', fr: 'Virages plus agiles, conduite à haute vitesse plus stable', ar: 'منعطفات أكثر رشاقة، قيادة أسرع وأكثر استقرارًا' }) },
  { image: '/assets/OFFICIALVOYAH/passion-L/images/sc_38-2.jpg', title: textFor({ en: '100-0km/h in 35.9m', fr: '100-0km/h en 35.9m', ar: '100-0 كم/س في 35.9 م' }), desc: textFor({ en: 'Extended safety boundary', fr: 'Limite de sécurité étendue', ar: 'حد السلامة الممتد' }) },
  { image: '/assets/OFFICIALVOYAH/passion-L/images/sc_38-3.jpg', title: textFor({ en: 'Torque Vectoring AWD', fr: 'AWD Vectoriel de Couple', ar: 'دفع رباعي متجه العزم' }), desc: textFor({ en: 'Full power even when fully loaded', fr: 'Pleine puissance même en charge complète', ar: 'قوة كاملة حتى عند التحميل الكامل' }) }
])

// Car colors data with translations
const carColors = computed(() => [
  { id: 'c1', name: textFor({ en: 'Imperial Red', fr: 'Rouge Impérial', ar: 'أحمر إمبراطوري' }), icon: '/assets/OFFICIALVOYAH/passion-L/images/icon1.png', image: '/assets/OFFICIALVOYAH/passion-L/images/swpier_h53b_01.jpg' },
  { id: 'c2', name: textFor({ en: 'Golden Black', fr: 'Noir Doré', ar: 'أسود ذهبي' }), icon: '/assets/OFFICIALVOYAH/passion-L/images/icon2.png', image: '/assets/OFFICIALVOYAH/passion-L/images/swpier_h53b_02.jpg' },
  { id: 'c3', name: textFor({ en: 'Champagne Gold', fr: 'Or Champagne', ar: 'ذهبي شامبانيا' }), icon: '/assets/OFFICIALVOYAH/passion-L/images/icon3.png', image: '/assets/OFFICIALVOYAH/passion-L/images/swpier_h53b_03.jpg' },
  { id: 'c4', name: textFor({ en: 'Moonlight Silver', fr: 'Argent Clair de Lune', ar: 'فضي ضوء القمر' }), icon: '/assets/OFFICIALVOYAH/passion-L/images/icon4.png', image: '/assets/OFFICIALVOYAH/passion-L/images/swpier_h53b_04.jpg' },
  { id: 'c5', name: textFor({ en: 'Cloud Blue', fr: 'Bleu Nuage', ar: 'أزرق غائم' }), icon: '/assets/OFFICIALVOYAH/passion-L/images/icon5.png', image: '/assets/OFFICIALVOYAH/passion-L/images/swpier_h53b_05.jpg' },
  { id: 'c6', name: textFor({ en: 'Ink Black', fr: 'Noir Encre', ar: 'أسود حبر' }), icon: '/assets/OFFICIALVOYAH/passion-L/images/icon6.png', image: '/assets/OFFICIALVOYAH/passion-L/images/swpier_h53b_06.jpg' }
])

// State
const currentSlide = ref({ section2: 0, section3: 0, section4: 0, interior: 0, ads: 0, power: 0, chassis: 0 })
const currentColor = ref(0)
const activeSection = ref(0)
const showMobileNav = ref(false)
const showSideNav = ref(false)
const showBottomBar = ref(false)
const navProgress = ref(0)
const sectionRefs = ref<(HTMLElement | null)[]>([])

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
  // Setup intersection observer for inview animations
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('inview-visible')
      }
    })
  }, { threshold: 0.2 })

  document.querySelectorAll('.inview-child').forEach(el => {
    observer?.observe(el)
  })

  // Scroll handler for navigation visibility
  const handleScroll = () => {
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
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()

  return () => {
    window.removeEventListener('scroll', handleScroll)
    observer?.disconnect()
  }
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.passion-l-page {
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
}

.kv-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 20px;
}

.kv-logo {
  width: min(320px, 50vw);
  margin: 0 auto 20px;
  filter: brightness(0) invert(1);
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
}

/* Level One Sections */
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
}

.section-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 40px;
}

.title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 300;
  letter-spacing: 0.15em;
  margin: 0 0 16px;
  color: #fff;
}

.subTitle {
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 0.1em;
  margin: 0;
}

/* Common Sections */
.common {
  padding: 80px 0;
  background: #000;
}

.commonMax {
  max-width: 100%;
  overflow: hidden;
}

.common .title {
  text-align: center;
  margin-bottom: 40px;
}

/* Swiper */
.swiper-container {
  position: relative;
  overflow: hidden;
}

.swiper-wrapper {
  display: flex;
  transition: transform 0.8s ease;
}

.swiper-slide {
  flex: 0 0 100%;
  position: relative;
}

.img-container {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.desc-wrap {
  position: absolute;
  bottom: 40px;
  left: 40px;
  right: 40px;
  z-index: 2;
}

.desc-title {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0 0 8px;
  color: #fff;
}

.desc-content {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 30px;
}

.pagination-bullet {
  width: 40px;
  height: 3px;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: background 0.3s ease;
}

.pagination-bullet.active {
  background: #fff;
}

/* Description Pagination */
.description-pagination-wrap {
  text-align: center;
  margin-top: 30px;
  padding: 0 20px;
}

.description-list {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.description-item {
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.description-item.active {
  opacity: 1;
}

.description-title {
  font-size: 1rem;
  color: #fff;
  margin: 0;
}

.description-content {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

/* Car Color Section */
.car-color-container {
  padding: 80px 20px;
  background: #000;
}

.car-color-container .title {
  text-align: center;
  margin-bottom: 40px;
}

.car-swiper-wap {
  position: relative;
  height: 50vw;
  max-height: 600px;
  overflow: hidden;
  margin-bottom: 40px;
}

.swiper-slide-item {
  position: absolute;
  inset: 0;
  transition: opacity 0.5s ease;
}

.swiper-slide-img {
  width: 100%;
  height: 100%;
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
  gap: 8px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.car-color-item.active {
  opacity: 1;
}

.color-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
}

.img-icon {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.color-name {
  font-size: 0.85rem;
  color: #fff;
  margin: 0;
}

/* Single Image Sections */
.single-img-container {
  width: 100%;
  overflow: hidden;
  margin: 30px 0;
}

.single-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

.single-description {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}

/* Side Navigation */
.side-nav {
  position: fixed;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  align-items: flex-start;
  gap: 15px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.side-nav.visible {
  opacity: 1;
  pointer-events: auto;
}

.nav-line {
  width: 2px;
  height: 200px;
  background: rgba(255, 255, 255, 0.2);
  position: relative;
}

.nav-progress {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  transition: height 0.1s ease;
}

.nav-dots {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.nav-dot {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.nav-dot.active {
  opacity: 1;
}

.dot-number {
  font-size: 0.75rem;
  color: #fff;
  font-weight: 500;
}

.dot-title {
  font-size: 0.8rem;
  color: #fff;
  white-space: nowrap;
}

/* Mobile Navigation */
.car-nav-wap {
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  z-index: 99;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  padding: 15px 20px;
  transform: translateY(-100%);
  opacity: 0;
  transition: all 0.3s ease;
}

.car-nav-wap.visible {
  transform: translateY(0);
  opacity: 1;
}

.car-nav-list {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  list-style: none;
  margin: 0;
  padding: 0;
  scrollbar-width: none;
}

.car-nav-list::-webkit-scrollbar {
  display: none;
}

.car-nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  white-space: nowrap;
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
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
}

.icon-inner {
  position: absolute;
  inset: 4px;
  background: #fff;
  border-radius: 50%;
  transform: scale(0);
  transition: transform 0.3s ease;
}

.car-nav-item.active .icon-inner {
  transform: scale(1);
}

.serial {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

.title {
  font-size: 0.8rem;
  color: #fff;
  margin: 0;
}

/* Bottom CTA Bar */
.car-nav-wrap-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  padding: 15px 20px;
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
  max-width: 600px;
  margin: 0 auto;
}

.button-config,
.button-order {
  flex: 1;
  text-align: center;
  padding: 14px 24px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button-config {
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #fff;
  background: transparent;
}

.button-config:hover {
  background: rgba(255, 255, 255, 0.1);
}

.button-order {
  background: #fff;
  color: #000;
  border: 1px solid #fff;
}

.button-order:hover {
  background: #f0f0f0;
}

/* Animation */
.inview-child {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: var(--inview-delay, 0s);
}

.inview-child.inview-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 1024px) {
  .side-nav {
    display: none;
  }
  
  .desc-wrap {
    left: 20px;
    right: 20px;
    bottom: 20px;
  }
  
  .desc-title {
    font-size: 1.2rem;
  }
  
  .car-swiper-wap {
    height: 60vw;
  }
}

@media (max-width: 768px) {
  .kv-logo {
    width: min(260px, 60vw);
  }
  
  .kv-btns {
    flex-direction: column;
    align-items: center;
  }
  
  .voyah-button {
    width: min(280px, 80vw);
  }
  
  .description-list {
    gap: 15px;
  }
  
  .car-color-list {
    gap: 20px;
  }
  
  .car-nav-wrap-bottom-inner {
    flex-direction: column;
  }
}
</style>
