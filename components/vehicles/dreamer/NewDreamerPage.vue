<template>
  <div class="new-dreamer-page">
    <!-- Hero Section -->
    <section class="kv-section">
      <img src="/assets/OFFICIALVOYAH/newDreamer/images/kv_1920.png" class="kv-bg-img" />
      <div class="kv-content">
        <img src="/assets/OFFICIALVOYAH/newDreamer/images/newDreamer.png" class="kv-logo" />
        <p class="kv-slogan">{{ textFor({ en: 'Panoramic Luxury Tech Flagship MPV', fr: 'MPV Phare Technologique Luxueux Panoramique', ar: 'MPV رائد تقني فاخر بانورامي' }) }}</p>
        <div class="kv-btns">
          <button class="voyah-button voyah-button--plain">{{ textFor({ en: 'Book Test Drive', fr: 'Réserver Essai', ar: 'حجز تجربة قيادة' }) }}</button>
          <button class="voyah-button voyah-button--dark">{{ textFor({ en: 'Order Now', fr: 'Commander', ar: 'اطلب الآن' }) }}</button>
        </div>
      </div>
    </section>

    <!-- Mobile Chapter Nav -->
    <div class="car-nav-wap fixed-nav" :class="{ visible: showMobileNav }">
      <ul class="car-nav-list">
        <li v-for="(section, index) in chapterSections" :key="section.id" class="car-nav-item" :class="{ active: activeSection === index }" @click="scrollToSection(section.id)">
          <div class="car-nav-item_icon"><div class="icon-outer"></div><div class="icon-inner"></div></div>
          <div class="car-nav-item_text">
            <p class="serial">{{ String(index + 1).padStart(2, '0') }}</p>
            <p class="title">{{ section.title }}</p>
          </div>
        </li>
      </ul>
    </div>

    <!-- Section 1: Design -->
    <section id="section1" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/newDreamer/images/bg_2_n_1920.jpg')` }">
      <h2 class="title">{{ textFor({ en: 'Super Luxury Design', fr: 'Design Super Luxueux', ar: 'تصميم فائق الفخامة' }) }}</h2>
      <p class="subTitle">{{ textFor({ en: 'Kunpeng Design Philosophy Sublimated', fr: 'Philosophie Design Kunpeng Sublimée', ar: 'فلسفة تصميم Kunpeng المتصاعدة' }) }}</p>
    </section>

    <!-- Kunpeng Design -->
    <section class="common">
      <h3 class="title">{{ textFor({ en: 'Kunpeng Aura', fr: 'Aura Kunpeng', ar: 'هالة Kunpeng' }) }}</h3>
      <p class="subTitle">{{ textFor({ en: 'Kunpeng Soars, Wind-Shaped', fr: 'Kunpeng S\'envole, Formé par le Vent', ar: 'Kunpeng ينطلق، يتشكل بالرياح' }) }}</p>
      <img src="/assets/OFFICIALVOYAH/newDreamer/images/bg_swiper_3_1_n.jpg" class="single-img" />
      <div class="single-description">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Kunpeng Wing Through Headlights', fr: 'Phares Traversants Aile Kunpeng', ar: 'مصابيح أمامية على شكل جناح Kunpeng' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Flying light domain, accompanying journeys', fr: 'Domaine lumineux volant, accompagnant les voyages', ar: 'نطاق ضوئي طائر، يرافق الرحلات' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Fuyao Direct Grille', fr: 'Grille Directe Fuyao', ar: 'شبكة Fuyao المباشرة' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Magnificent flowing lines, rising to blue sky', fr: 'Lignes magnifiques, s\'élevant vers le ciel bleu', ar: 'خطوط رائعة، ترتفع نحو السماء الزرقاء' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Rear Design -->
    <section class="common">
      <img src="/assets/OFFICIALVOYAH/newDreamer/images/bg_4_n.jpg" class="single-img margin-top-0" />
      <div class="single-description column1">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Crystal Diamond Tail Lights', fr: 'Feux Arrière Diamant Cristal', ar: 'أضواء خلفية كريستالية ماسية' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Feather light flowing, agile shadow', fr: 'Lumière plume fluide, ombre agile', ar: 'ضوء ريشة متدفق، ظل رشيق' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Exterior Colors -->
    <section class="car-color-container">
      <h3 class="title">{{ textFor({ en: 'Color Vast Realm', fr: 'Couleurs Vaste', ar: 'ألوان المملكة' }) }}</h3>
      <h3 class="subTitle">{{ textFor({ en: 'Heaven and Earth Open, All into Dream', fr: 'Ciel et Terre Ouverts, Tout dans le Rêve', ar: 'السماء والأرض مفتوحتان، كل شيء في الحلم' }) }}</h3>
      <div class="car-swiper-wap">
        <div class="swiper-slide" v-for="(color, idx) in exteriorColors" :key="idx" :style="{ left: idx === currentColor ? '0' : '100%' }">
          <img :src="`/assets/OFFICIALVOYAH/newDreamer/images/car/car${idx + 1}.png`" class="swiper-slide-img" />
        </div>
      </div>
      <div class="car-color-list">
        <div v-for="(color, idx) in exteriorColors" :key="idx" class="car-color-item" :class="{ active: currentColor === idx }" @click="currentColor = idx">
          <img :src="`/assets/OFFICIALVOYAH/newDreamer/images/car/icon${idx + 1}.png`" class="img-icon" />
          <p class="color-name">{{ color }}</p>
        </div>
      </div>
    </section>

    <!-- Interior Colors -->
    <section class="common commonMax">
      <h3 class="title">{{ textFor({ en: 'Color Vast Realm', fr: 'Couleurs Vaste', ar: 'ألوان المملكة' }) }}</h3>
      <p class="subTitle">{{ textFor({ en: 'Dream Journey 3000 Miles, Heritage 5000 Years', fr: 'Voyage Rêvé 3000 Lieues, Héritage 5000 Ans', ar: 'رحلة الحلم 3000 ميل، تراث 5000 عام' }) }}</p>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.interior * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in interiorSlides" :key="idx">
            <img :src="slide.image" class="slide-img" />
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.name }}</p>
              <p class="desc-content">{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div v-for="(_, idx) in interiorSlides" :key="idx" class="pagination-bullet" :class="{ active: currentSlide.interior === idx }" @click="currentSlide.interior = idx"></div>
      </div>
    </section>

    <!-- Section 2: Cabin -->
    <section id="section2" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/newDreamer/images/bg_7_n_1920.jpg')` }">
      <h2 class="title">{{ textFor({ en: 'Super Luxury Cabin', fr: 'Cabine Super Luxueuse', ar: 'مقصورة فائقة الفخامة' }) }}</h2>
      <p class="subTitle">{{ textFor({ en: 'Spacious Reception Living Room, Comfortable Large Flat Floor', fr: 'Salon Réception Spacieux, Grand Étage Plat Confortable', ar: 'صالة استقبال فسيحة، طابق كبير مسطح مريح' }) }}</p>
    </section>

    <!-- 7㎡ Cabin -->
    <section class="common commonMax">
      <h3 class="title">{{ textFor({ en: '7㎡ Ultra-Large Wide Flat Floor', fr: 'Plancher Plat Large Ultra-Grand 7㎡', ar: 'أرضية مسطحة واسعة فائقة 7 م²' }) }}</h3>
      <p class="subTitle">{{ textFor({ en: 'Three Rows Seven Seats, Every Seat is First Class', fr: 'Trois Rangées Sept Sièges, Chaque Siège est Première Classe', ar: 'ثلاثة صفوف سبعة مقاعد، كل مقعد من الدرجة الأولى' }) }}</p>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.cabin * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in cabinSlides" :key="idx">
            <img :src="slide.image" class="slide-img" />
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.title }}</p>
              <p class="desc-content">{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div v-for="(_, idx) in cabinSlides" :key="idx" class="pagination-bullet" :class="{ active: currentSlide.cabin === idx }" @click="currentSlide.cabin = idx"></div>
      </div>
    </section>

    <!-- Immersive Luxury -->
    <section class="common commonMax">
      <h3 class="title">{{ textFor({ en: 'Immersive Luxury Cabin', fr: 'Cabine Luxueuse Immersive', ar: 'مقصورة فاخرة غامرة' }) }}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.luxury * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in luxurySlides" :key="idx">
            <img :src="slide.image" class="slide-img" />
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.title }}</p>
              <p class="desc-content">{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div v-for="(_, idx) in luxurySlides" :key="idx" class="pagination-bullet" :class="{ active: currentSlide.luxury === idx }" @click="currentSlide.luxury = idx"></div>
      </div>
    </section>

    <!-- Section 3: Interaction -->
    <section id="section3" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/newDreamer/images/bg_10_n_1920.jpg')` }">
      <h2 class="title">{{ textFor({ en: 'Full Sensation Intelligent Interaction', fr: 'Interaction Intelligente Sensation Complète', ar: 'تفاعل ذكي بإحساس كامل' }) }}</h2>
      <p class="subTitle">{{ textFor({ en: 'Space Interaction No Longer Cramped, Every Position is C-Position', fr: 'Interaction Espace Plus Serrée, Chaque Position est Position C', ar: 'تفاعل الفضاء لم يعد ضيقاً، كل موقع هو موقع C' }) }}</p>
    </section>

    <!-- Harmony Cockpit -->
    <section class="common">
      <h3 class="title">{{ textFor({ en: 'Huawei Harmony Cockpit', fr: 'Cockpit Huawei Harmony', ar: 'مقصورة Huawei Harmony' }) }}</h3>
      <img src="/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc11_bg.jpg" class="single-img" />
      <div class="single-description">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Seamless Handoff Car-Phone', fr: 'Transfert Sans Couture Voiture-Téléphone', ar: 'الانتقال السلس سيارة-هاتف' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Navigation seamless, calls transfer to car', fr: 'Navigation sans couture, appels transférés à la voiture', ar: 'ملاحة سلسة، مكالمات تنتقل للسيارة' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Super Desktop Split-Screen', fr: 'Bureau Super Écran Partagé', ar: 'سطح مكتب سوبر شاشة مقسمة' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Car and phone ecosystem integration', fr: 'Intégration écosystème voiture et téléphone', ar: 'تكامل النظام البيئي للسيارة والهاتف' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Section 4: Intelligent Driving -->
    <section id="section4" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc16_bg_1920.jpg')` }">
      <h2 class="title">{{ textFor({ en: 'All-Terrain Intelligent Driving', fr: 'Conduite Intelligente Tout Terrain', ar: 'القيادة الذكية في كل التضاريس' }) }}</h2>
      <p class="subTitle">{{ textFor({ en: 'All-weather, All-direction, All-target', fr: 'Tout Temps, Toute Direction, Toute Cible', ar: 'كل الأحوال الجوية، كل الاتجاهات، كل الأهداف' }) }}</p>
    </section>

    <!-- Kunpeng Pilot -->
    <section class="common commonMax">
      <h3 class="title">{{ textFor({ en: 'Kunpeng Intelligent Driving', fr: 'Conduite Intelligente Kunpeng', ar: 'القيادة الذكية Kunpeng' }) }}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.pilot * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in pilotSlides" :key="idx">
            <img :src="slide.image" class="slide-img" />
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.title }}</p>
              <p class="desc-content">{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div v-for="(_, idx) in pilotSlides" :key="idx" class="pagination-bullet" :class="{ active: currentSlide.pilot === idx }" @click="currentSlide.pilot = idx"></div>
      </div>
    </section>

    <!-- Huawei ADS -->
    <section class="common commonMax">
      <h3 class="title">{{ textFor({ en: 'Huawei ADS 3.0', fr: 'Huawei ADS 3.0', ar: 'Huawei ADS 3.0' }) }}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.ads * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in adsSlides" :key="idx">
            <video v-if="slide.video" class="slide-video" autoplay muted loop playsinline :src="slide.video"></video>
            <img v-else :src="slide.image" class="slide-img" />
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.title }}</p>
              <p class="desc-content">{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div v-for="(_, idx) in adsSlides" :key="idx" class="pagination-bullet" :class="{ active: currentSlide.ads === idx }" @click="currentSlide.ads = idx"></div>
      </div>
    </section>

    <!-- Section 5: Chassis -->
    <section id="section5" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc19_bg_1920.jpg')` }">
      <h2 class="title">{{ textFor({ en: 'Flagship Intelligent Chassis', fr: 'Châssis Intelligent Phare', ar: 'هيكل ذكي رائد' }) }}</h2>
      <p class="subTitle">{{ textFor({ en: 'Breaking Through MPV Application Scenarios', fr: 'Percer Scénarios Application MPV', ar: 'اختراق سيناريوهات تطبيق MPV' }) }}</p>
    </section>

    <!-- Magic Carpet -->
    <section class="common">
      <h3 class="title">{{ textFor({ en: 'Intelligent Magic Carpet Air Suspension', fr: 'Suspension Pneumatique Tapis Magique', ar: 'تعليق هوائي سحري ذكي' }) }}</h3>
      <img src="/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc20_bg.jpg" class="single-img" />
      <div class="single-description column3">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Class-Exclusive Magic Carpet', fr: 'Tapis Magique Exclusif Classe', ar: 'سجادة سحرية حصرية للفئة' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Suspension soft/hard active adjustment', fr: 'Réglage actif suspension douce/dure', ar: 'تعديل نشط للتعليق الناعم/الصلب' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '60mm Height Adjustment', fr: 'Réglage Hauteur 60mm', ar: 'تعديل ارتفاع 60 مم' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Adapts to more user scenarios', fr: 'S\'adapte à plus de scénarios', ar: 'يتكيف مع المزيد من السيناريوهات' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Intelligent Variable Damper', fr: 'Amortisseur Variable Intelligent', ar: 'مخمد متغير ذكي' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Comfortable ride on bumpy roads', fr: 'Conduite confortable sur routes cahoteuses', ar: 'قيادة مريحة على الطرق الوعرة' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Chassis -->
    <section class="common">
      <h3 class="title">{{ textFor({ en: 'High-End Flagship Chassis', fr: 'Châssis Phare Haut de Gamme', ar: 'هيكل رائد متميز' }) }}</h3>
      <img src="/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc21_bg.jpg" class="single-img" />
      <div class="single-description">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Front Double Wishbone + Rear Five-Link', fr: 'Double Triangle Avant + 5 Bras Arrière', ar: 'مثلث مزدوج أمامي + 5 أذرع خلفية' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'MPV comfort, sedan driving', fr: 'Confort MPV, conduite berline', ar: 'راحة MPV، قيادة سيدان' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'All-Aluminum Chassis', fr: 'Châssis Tout Aluminium', ar: 'هيكل من الألومنيوم بالكامل' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Reduces unsprung mass, stable and safe', fr: 'Réduit masse non suspendue, stable et sûr', ar: 'يقلل الكتلة غير المعلقة، مستقر وآمن' }) }}</p>
        </div>
      </div>
    </section>

    <!-- 4WD -->
    <section class="common">
      <h3 class="title">{{ textFor({ en: 'Full Series Intelligent Electric 4WD', fr: '4WD Électrique Intelligent Série Complète', ar: 'دفع رباعي كهربائي ذكي للسلسلة الكاملة' }) }}</h3>
      <img src="/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc22_bg.jpg" class="single-img" />
      <div class="single-description">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Dual Motor Layout, Torque Vectoring', fr: 'Disposition Double Moteur, Vectorisation Couple', ar: 'تخطيط مزدوج المحرك، تحجيم العزم' }) }}</p>
          <p class="description-content">{{ textFor({ en: '0-100% intelligent adjustment, 50:50 load', fr: 'Réglage intelligent 0-100%, charge 50:50', ar: 'تعديل ذكي 0-100%، حمل 50:50' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Section 6: Power -->
    <section id="section6" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc23_bg_1920.jpg')` }">
      <h2 class="title">{{ textFor({ en: 'Flagship Lanhai Power', fr: 'Puissance Lanhai Phare', ar: 'قوة Lanhai الرائدة' }) }}</h2>
      <p class="subTitle">{{ textFor({ en: 'All Roads Worry-Free, Long Journey Assured', fr: 'Toutes Routes Sans Souci, Long Voyage Assuré', ar: 'جميع الطرق بلا قلق، رحلة طويلة مضمونة' }) }}</p>
    </section>

    <!-- Lanhai PHEV -->
    <section class="common">
      <h3 class="title">{{ textFor({ en: 'Lanhai Power PHEV', fr: 'Puissance Lanhai PHEV', ar: 'قوة Lanhai PHEV' }) }}</h3>
      <img src="/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc24_bg.jpg" class="single-img" />
      <div class="single-description">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '6-in-1 Series-Parallel Architecture', fr: 'Architecture Série-Parallèle 6-en-1', ar: 'هندسة سلسلة-توازي 6 في 1' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Covers all travel scenarios: EV, series, parallel, power generation, parking, recovery', fr: 'Couvre tous scénarios: EV, série, parallèle, génération, parking, récupération', ar: 'يغطي كل السيناريوهات: كهربائي، سلسلة، توازي، توليد، ركن، استرداد' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Range -->
    <section class="common">
      <h3 class="title">{{ textFor({ en: 'High-End Ultra-Long Range', fr: 'Autonomie Ultra-Longue Haut de Gamme', ar: 'مدى فائق الطول متميز' }) }}</h3>
      <img src="/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc25_bg.jpg" class="single-img" />
      <div class="single-description">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '1411km Combined, 235km EV (CLTC)', fr: '1411km Combiné, 235km EV (CLTC)', ar: '1411 كم مجمع، 235 كم كهربائي (CLTC)' }) }}</p>
          <p class="description-content">{{ textFor({ en: '0.65L/100km combined, 5.42L/100km fuel consumption', fr: '0.65L/100km combiné, 5.42L/100km consommation', ar: '0.65 لتر/100 كم مجمع، 5.42 لتر/100 كم استهلاك' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Power -->
    <section class="common">
      <h3 class="title">{{ textFor({ en: 'High-Energy Surging Power', fr: 'Puissance Surging Haute Énergie', ar: 'قوة عالية الطاقة متدفقة' }) }}</h3>
      <img src="/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc26_bg.jpg" class="single-img" />
      <div class="single-description">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '420kW Ultra-Strong Power', fr: '420kW Puissance Ultra-Forte', ar: '420 كيلوواط قوة فائقة' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Fully loaded 7 people + luggage still powerful', fr: 'Pleinement chargé 7 personnes + bagages toujours puissant', ar: 'محمل بالكامل 7 أشخاص + أمتعة ما زال قوياً' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '0-100km/h 5.9s', fr: '0-100km/h 5.9s', ar: '0-100 كم/ساعة 5.9 ثانية' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Priority lane selection, ample overtaking', fr: 'Sélection prioritaire voie, dépassement ample', ar: 'اختيار المسار الأولوية، تجاوز كافٍ' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Section 7: Safety -->
    <section id="section7" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc27_bg_1920.jpg')` }">
      <h2 class="title">{{ textFor({ en: 'Flagship All-Domain Safety', fr: 'Sécurité Tout Domaine Phare', ar: 'أمان رائد في كل المجالات' }) }}</h2>
      <p class="subTitle">{{ textFor({ en: 'Refreshing MPV Safety Standards', fr: 'Rafraîchir Standards Sécurité MPV', ar: 'تحديث معايير أمان MPV' }) }}</p>
    </section>

    <!-- Body Protection -->
    <section class="common">
      <h3 class="title">{{ textFor({ en: 'All-Around Body Protection', fr: 'Protection Carrosserie Tout Autour', ar: 'حماية الهيكل من جميع الجوانب' }) }}</h3>
      <img src="/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc28_bg.jpg" class="single-img" />
      <div class="single-description">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '2000MPa Ultra-High Strength Cage', fr: 'Cage Ultra-Résistante 2000MPa', ar: 'قفص فائق المقاومة 2000 ميجا باسكال' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'World\'s first 2000MPa laser welded door ring', fr: 'Premier mondial anneau porte soudé laser 2000MPa', ar: 'الأول عالمياً حلقة باب ملحومة بالليزر 2000 ميجا باسكال' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Five-Layer Rear Collision', fr: 'Collision Arrière Cinq Couches', ar: 'تصادم خلفي بخمس طبقات' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'First MPV passing 110km/h US rear collision test', fr: 'Premier MPV passant test collision arrière 110km/h US', ar: 'أول MPV يجتاز اختبار التصادم الخلفي 110 كم/ساعة US' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Driver Protection -->
    <section class="common">
      <h3 class="title">{{ textFor({ en: 'Full-Function Driver Protection', fr: 'Protection Conducteur Pleine Fonction', ar: 'حماية السائق بكامل الوظائف' }) }}</h3>
      <img src="/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc29_bg.jpg" class="single-img" />
      <div class="single-description column3">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Intelligent Visual Sentry', fr: 'Sentinelle Visuelle Intelligente', ar: 'حارس مرئي ذكي' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'All-round real-time monitoring', fr: 'Surveillance temps réel tout autour', ar: 'مراقبة فورية من جميع الجوانب' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '540° Ultra-Clear Panoramic', fr: 'Panoramique Ultra-Clair 540°', ar: 'بانورامي فائق الوضوح 540°' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'No blind spots reversing, easy parking', fr: 'Pas angles morts recul, parking facile', ar: 'لا زوايا عمياء للرجوع، ركن سهل' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '21 Active Safety Functions', fr: '21 Fonctions Sécurité Active', ar: '21 وظيفة أمان نشطة' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Timely emergency response', fr: 'Réponse urgente à temps', ar: 'استجابة طارئة في الوقت المناسب' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Battery Protection -->
    <section class="common">
      <h3 class="title">{{ textFor({ en: 'All-Weather Battery Protection', fr: 'Protection Batterie Tout Temps', ar: 'حماية البطارية على مدار الساعة' }) }}</h3>
      <img src="/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc30_bg.jpg" class="single-img" />
      <div class="single-description">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '"Four No\'s" Mica Battery', fr: 'Batterie Mica "Quatre Non"', ar: 'بطارية الميكا "أربع لا"' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'No leakage, no fire, no explosion, no thermal runaway', fr: 'Pas fuite, pas feu, pas explosion, pas emballement', ar: 'لا تسرب، لا نار، لا انفجار، لا جنون حراري' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '1500MPa Battery Shield', fr: 'Bouclier Batterie 1500MPa', ar: 'درع بطارية 1500 ميجا باسكال' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Fearless of accidents and underbody scrapes', fr: 'Sans crainte accidents et raclures', ar: 'بلا خوف من الحوادث والخدوش' }) }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useSiteContent } from '~/composables/useSiteContent'

const { textFor } = useSiteContent()
const activeSection = ref(0)
const showMobileNav = ref(false)
const currentColor = ref(0)
const currentSlide = ref({
  interior: 0,
  cabin: 0,
  luxury: 0,
  pilot: 0,
  ads: 0
})

const chapterSections = computed(() => [
  { id: 'section1', title: textFor({ en: 'Design', fr: 'Design', ar: 'التصميم' }) },
  { id: 'section2', title: textFor({ en: 'Cabin', fr: 'Cabine', ar: 'المقصورة' }) },
  { id: 'section3', title: textFor({ en: 'Interaction', fr: 'Intéract.', ar: 'التفاعل' }) },
  { id: 'section4', title: textFor({ en: 'Driving', fr: 'Conduite', ar: 'القيادة' }) },
  { id: 'section5', title: textFor({ en: 'Chassis', fr: 'Châssis', ar: 'الهيكل' }) },
  { id: 'section6', title: textFor({ en: 'Power', fr: 'Puissance', ar: 'القوة' }) },
  { id: 'section7', title: textFor({ en: 'Safety', fr: 'Sécurité', ar: 'السلامة' }) }
])

const exteriorColors = computed(() => [
  textFor({ en: 'Chenxing Gray', fr: 'Gris Chenxing', ar: 'رمادي Chenxing' }),
  textFor({ en: 'Duruo White', fr: 'Blanc Duruo', ar: 'أبيض Duruo' }),
  textFor({ en: 'Xuanye Gold', fr: 'Or Xuanye', ar: 'ذهب Xuanye' }),
  textFor({ en: 'Riyue Glow', fr: 'Lueur Riyue', ar: 'توهج Riyue' }),
  textFor({ en: 'Haiyue Gold', fr: 'Or Haiyue', ar: 'ذهب Haiyue' }),
  textFor({ en: 'Huiyue Cyan', fr: 'Cyan Huiyue', ar: 'سيان Huiyue' }),
  textFor({ en: 'Xuri Purple', fr: 'Violet Xuri', ar: 'بنفسجي Xuri' }),
  textFor({ en: 'Xuanying Black', fr: 'Noir Xuanying', ar: 'أسود Xuanying' })
])

const interiorSlides = computed(() => [
  { name: textFor({ en: 'Cotton Rice', fr: 'Riz Coton', ar: 'أرز قطني' }), desc: textFor({ en: 'Cotton Rice - Tianshan Snow Cotton', fr: 'Riz Coton - Coton Neige Tianshan', ar: 'أرز قطني - قطن ثلج Tianshan' }), image: '/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc03_0001.jpg' },
  { name: textFor({ en: 'Camel Brown', fr: 'Brun Chameau', ar: 'بني جملي' }), desc: textFor({ en: 'Camel Brown - Silk Road Bells', fr: 'Brun Chameau - Cloches Route Soie', ar: 'بني جملي - أجراس طريق الحرير' }), image: '/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc03_0002.jpg' },
  { name: textFor({ en: 'Cloud Gray', fr: 'Gris Nuage', ar: 'رمادي سحابي' }), desc: textFor({ en: 'Cloud Gray - Guanshan Mountains', fr: 'Gris Nuage - Montagnes Guanshan', ar: 'رمادي سحابي - جبال Guanshan' }), image: '/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc03_0003.jpg' }
])

const cabinSlides = computed(() => [
  { image: '/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc08_banner01.jpg', title: textFor({ en: '3rd Row 4-Way Electric Adjustment', fr: 'Réglage Électrique 4 Voies 3ème Rangée', ar: 'تعديل كهربائي رباعي للصف الثالث' }), desc: textFor({ en: '4-way full electric seat adjustment', fr: 'Réglage siège électrique complet 4 voies', ar: 'تعديل مقعد كهربائي كامل رباعي الاتجاهات' }) },
  { image: '/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc08_banner02.jpg', title: textFor({ en: 'Trunk Space Expands to 2700L', fr: 'Espace Coffre S\'étend à 2700L', ar: 'مساحة الصندوق تتسع إلى 2700 لتر' }), desc: textFor({ en: 'Full 7 seats, fits 8x 20-inch suitcases', fr: '7 sièges pleins, 8 valises 20 pouces', ar: '7 مقاعد ممتلئة، 8 حقائب 20 بوصة' }) }
])

const luxurySlides = computed(() => [
  { image: '/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc09_banner01.jpg', title: textFor({ en: '"Reflecting Mountains" Panel', fr: 'Panneau "Reflet Montagnes"', ar: 'لوحة "انعكاس الجبال"' }), desc: textFor({ en: 'Heaven and earth painted with light', fr: 'Ciel et terre peints de lumière', ar: 'السماء والأرض مرسومة بالضوء' }) },
  { image: '/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc09_banner02.jpg', title: textFor({ en: '13L Dual-Door Smart Fridge', fr: 'Réfrigérateur Intelligent 13L', ar: 'ثلاجة ذكية 13 لتر' }), desc: textFor({ en: '24-hour power, every degree to your liking', fr: 'Alimentation 24h, chaque degré à votre goût', ar: 'تغذية 24 ساعة، كل درجة حسب ذوقك' }) },
  { image: '/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc09_banner03.jpg', title: textFor({ en: 'OEKO-TEX Baby-Friendly Fabric', fr: 'Tissu OEKO-TEX Bébé', ar: 'قماش OEKO-TEX للأطفال' }), desc: textFor({ en: 'Safe for children, EU certified', fr: 'Sûr pour enfants, certifié UE', ar: 'آمن للأطفال، معتمد من الاتحاد الأوروبي' }) }
])

const pilotSlides = computed(() => [
  { image: '/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc17_img.jpg', title: textFor({ en: '26 Intelligent Driving Functions', fr: '26 Fonctions Conduite Intelligente', ar: '26 وظيفة قيادة ذكية' }), desc: textFor({ en: 'Greatly improves driving convenience and safety', fr: 'Améliore grandement confort et sécurité', ar: 'يحسن بشكل كبير الراحة والأمان' }) },
  { image: '/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc17_img1.jpg', title: textFor({ en: '172 Parking Scenarios Coverage', fr: '172 Scénarios Stationnement Couverts', ar: '172 سيناريو ركن مغطى' }), desc: textFor({ en: 'No parking trouble, large car easy to park', fr: 'Pas de souci stationnement, grande voiture facile', ar: 'لا قلق من الركن، سيارة كبيرة سهلة' }) },
  { image: '/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc17_img2.jpg', title: textFor({ en: 'RPA Remote Parking', fr: 'Stationnement à Distance RPA', ar: 'ركن عن بعد RPA' }), desc: textFor({ en: 'One-click easy parking in all scenarios', fr: 'Stationnement facile un clic tous scénarios', ar: 'ركن سهل بنقرة واحدة في كل السيناريوهات' }) }
])

const adsSlides = computed(() => [
  { video: '/assets/OFFICIALVOYAH/newDreamer/videos/ads_parking.mp4', image: '', title: textFor({ en: 'End-to-End Full Scenario', fr: 'Bout-en-Bout Tout Scénario', ar: 'من البداية إلى النهاية كل السيناريوهات' }), desc: textFor({ en: 'Full scenario贯通 one-click arrival', fr: 'Tout scénario贯通 arrivée un clic', ar: 'كل السيناريوهات贯通 وصول بنقرة واحدة' }) },
  { video: '/assets/OFFICIALVOYAH/newDreamer/videos/ads_cas.mp4', image: '', title: textFor({ en: 'CAS 3.0 Anti-collision', fr: 'Anti-collision CAS 3.0', ar: 'مضاد للتصادم CAS 3.0' }), desc: textFor({ en: 'Timely emergency response, active safety', fr: 'Réponse urgente à temps, sécurité active', ar: 'استجابة طارئة في الوقت المناسب، أمان نشط' }) },
  { video: '/assets/OFFICIALVOYAH/newDreamer/videos/ads_vpd.mp4', image: '', title: textFor({ en: 'VPD Valet Parking', fr: 'Stationnement Voiturier VPD', ar: 'ركن السيارات VPD' }), desc: textFor({ en: 'Saves time finding parking and locating car', fr: 'Économise temps recherche parking et voiture', ar: 'يوفر وقت البحث عن موقف والسيارة' }) }
])

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) element.scrollIntoView({ behavior: 'smooth' })
}

let scrollHandler: (() => void) | null = null
onMounted(() => {
  scrollHandler = () => { showMobileNav.value = window.scrollY > window.innerHeight * 0.5 }
  window.addEventListener('scroll', scrollHandler, { passive: true })
})
onUnmounted(() => { if (scrollHandler) window.removeEventListener('scroll', scrollHandler) })
</script>

<style scoped>
.new-dreamer-page { background: #000; color: #fff; }
.kv-section { position: relative; height: 100vh; display: flex; align-items: center; justify-content: center; }
.kv-bg-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.kv-content { position: relative; z-index: 2; text-align: center; }
.kv-logo { width: 280px; margin-bottom: 24px; }
.kv-slogan { font-size: 24px; margin-bottom: 40px; }
.kv-btns { display: flex; gap: 20px; justify-content: center; }
.voyah-button { padding: 14px 32px; border: 1px solid #fff; background: transparent; color: #fff; cursor: pointer; }
.voyah-button--dark { background: #fff; color: #000; }
.car-nav-wap { position: fixed; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.9); z-index: 100; transform: translateY(100%); transition: transform 0.3s; }
.car-nav-wap.visible { transform: translateY(0); }
.car-nav-list { display: flex; overflow-x: auto; padding: 12px 16px; gap: 16px; list-style: none; margin: 0; }
.car-nav-item { display: flex; align-items: center; gap: 8px; padding: 8px 12px; cursor: pointer; opacity: 0.6; white-space: nowrap; }
.car-nav-item.active { opacity: 1; }
.level-one { height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; background-size: cover; background-position: center; }
.level-one .title { font-size: 48px; margin-bottom: 20px; }
.level-one .subTitle { font-size: 20px; color: rgba(255,255,255,0.8); }
.common { padding: 80px 40px; }
.commonMax { max-width: 1440px; margin: 0 auto; }
.common .title { font-size: 32px; text-align: center; margin-bottom: 20px; }
.common .subTitle { font-size: 18px; text-align: center; margin-bottom: 40px; color: rgba(255,255,255,0.7); }
.swiper-container { overflow: hidden; }
.swiper-wrapper { display: flex; transition: transform 0.3s; }
.swiper-slide { flex-shrink: 0; width: 100%; position: relative; }
.slide-img, .slide-video { width: 100%; height: auto; display: block; }
.desc-wrap { text-align: center; margin-top: 30px; }
.desc-title { font-size: 24px; margin-bottom: 12px; }
.desc-content { font-size: 16px; color: rgba(255,255,255,0.7); }
.pagination { display: flex; justify-content: center; gap: 12px; margin-top: 40px; }
.pagination-bullet { width: 12px; height: 12px; border-radius: 50%; background: rgba(255,255,255,0.3); cursor: pointer; }
.pagination-bullet.active { background: #fff; }
.car-color-container { padding: 80px 40px; text-align: center; }
.car-swiper-wap { position: relative; height: 400px; margin-bottom: 40px; overflow: hidden; }
.car-swiper-wap .swiper-slide { position: absolute; top: 0; width: 100%; transition: left 0.3s; }
.swiper-slide-img { max-height: 400px; object-fit: contain; }
.car-color-list { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; }
.car-color-item { display: flex; flex-direction: column; align-items: center; gap: 8px; cursor: pointer; opacity: 0.6; }
.car-color-item.active { opacity: 1; }
.img-icon { width: 36px; height: 36px; border-radius: 50%; }
.color-name { font-size: 13px; }
.single-img { width: 100%; max-width: 1200px; height: auto; margin: 0 auto 40px; display: block; }
.single-img.margin-top-0 { margin-top: 0; }
.single-description { max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
.description-item { text-align: center; }
.description-title { font-size: 20px; margin-bottom: 12px; }
.description-content { font-size: 15px; color: rgba(255,255,255,0.7); }
.column1 { grid-template-columns: 1fr; }
.column3 { grid-template-columns: repeat(3, 1fr); }
@media (max-width: 1024px) { .column3 { grid-template-columns: repeat(2, 1fr); } .level-one .title { font-size: 36px; } }
@media (max-width: 640px) { .column3 { grid-template-columns: 1fr; } .single-description { grid-template-columns: 1fr; } .level-one .title { font-size: 28px; } }
</style>
