<template>
  <div class="dreamerChampion-page">
    <!-- Hero Section -->
    <section class="kv-section">
      <img src="/assets/OFFICIALVOYAH/dreamerChampion/images/kv_0408_1920.jpg" class="kv-bg-img" />
      <div class="kv-content">
        <img src="/assets/OFFICIALVOYAH/dreamerChampion/images/dreamerChampion.png" class="kv-logo" />
        <p class="kv-slogan">{{ textFor({ en: 'First Chinese MPV for Young Families', fr: 'Premier MPV Chinois pour Jeunes Familles', ar: 'MPV الصيني الأول للعائلات الشابة' }) }}</p>
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

    <!-- Section 1: Super Luxury Design -->
    <section id="section1" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/dreamerChampion/images/bg_2_0408_1920.jpg')` }">
      <h2 class="title">{{ textFor({ en: 'Super Luxury Design', fr: 'Design Super Luxueux', ar: 'تصميم فائق الفخامة' }) }}</h2>
      <p class="subTitle">{{ textFor({ en: 'Kunpeng Design Philosophy Sublimated', fr: 'Philosophie Design Kunpeng Sublimée', ar: 'فلسفة تصميم Kunpeng المتصاعدة' }) }}</p>
    </section>

    <!-- Design Features Slider -->
    <section class="common commonMax">
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.design * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in designSlides" :key="idx">
            <img :src="slide.image" class="slide-img" />
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.title }}</p>
              <p class="desc-content">{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div v-for="(_, idx) in designSlides" :key="idx" class="pagination-bullet" :class="{ active: currentSlide.design === idx }" @click="currentSlide.design = idx"></div>
      </div>
    </section>

    <!-- Exterior Color -->
    <section class="car-color-container">
      <h3 class="title">{{ textFor({ en: 'Color Vast Realm', fr: 'Couleurs Vaste', ar: 'ألوان المملكة' }) }}</h3>
      <h3 class="subTitle">{{ textFor({ en: 'Heaven and Earth Open, All into Dream', fr: 'Ciel et Terre Ouverts, Tout dans le Rêve', ar: 'السماء والأرض مفتوحتان، كل شيء في الحلم' }) }}</h3>
      <div class="car-swiper-wap">
        <div class="swiper-slide" style="left: 0;">
          <img src="/assets/OFFICIALVOYAH/dreamerChampion/images/car_0408_1.png" class="swiper-slide-img" />
        </div>
      </div>
      <div class="car-color-list">
        <div class="car-color-item active">
          <img src="/assets/OFFICIALVOYAH/dreamerChampion/images/icon1.png" class="img-icon" />
          <p class="color-name">{{ textFor({ en: 'Xuanying Black', fr: 'Noir Xuanying', ar: 'أسود Xuanying' }) }}</p>
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
            <p class="img-text">*{{ textFor({ en: 'Images for reference only', fr: 'Images référence uniquement', ar: 'الصور للمرجعية فقط' }) }}</p>
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div v-for="(_, idx) in interiorSlides" :key="idx" class="pagination-bullet" :class="{ active: currentSlide.interior === idx }" @click="currentSlide.interior = idx"></div>
      </div>
    </section>

    <!-- Section 2: Super Luxury Cabin -->
    <section id="section2" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/dreamerChampion/images/bg_6_n_0408_1920.jpg')` }">
      <h2 class="title">{{ textFor({ en: 'Super Luxury Cabin', fr: 'Cabine Super Luxueuse', ar: 'مقصورة فائقة الفخامة' }) }}</h2>
      <p class="subTitle">{{ textFor({ en: 'Spacious Reception Living Room, Comfortable Large Flat Floor', fr: 'Salon Réception Spacieux, Grand Étage Plat Confortable', ar: 'صالة استقبال فسيحة، طابق كبير مسطح مريح' }) }}</p>
    </section>

    <!-- Immersive Luxury Cabin -->
    <section class="common commonMax">
      <h3 class="title">{{ textFor({ en: '"Heaven and Earth Embraced" Immersive Luxury Cabin', fr: '"Ciel et Terre Embrassés" Cabine Luxueuse Immersive', ar: '"السماء والأرض المحتضنات" مقصورة فاخرة غامرة' }) }}</h3>
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

    <!-- User-Friendly Design -->
    <section class="common commonMax">
      <h3 class="title">{{ textFor({ en: 'Whole Vehicle User-Friendly Design', fr: 'Design Convivial Véhicule Entier', ar: 'تصميم سهل الاستخدام للمركبة بأكملها' }) }}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.userFriendly * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in userFriendlySlides" :key="idx">
            <img :src="slide.image" class="slide-img" />
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.title }}</p>
              <p class="desc-content">{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div v-for="(_, idx) in userFriendlySlides" :key="idx" class="pagination-bullet" :class="{ active: currentSlide.userFriendly === idx }" @click="currentSlide.userFriendly = idx"></div>
      </div>
    </section>

    <!-- Front Row -->
    <section class="common">
      <h3 class="title">{{ textFor({ en: 'Advanced Front Row Pilot Cabin', fr: 'Cabine Pilote Rangée Avant Avancée', ar: 'مقصورة الطيار الصف الأمامي المتقدمة' }) }}</h3>
      <img src="/assets/OFFICIALVOYAH/dreamerChampion/images/bg_8_1_n_banner01.jpg" class="single-img" />
      <div class="single-description column3">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Front Electric Soft-Close Doors', fr: 'Portes Électriques Douces Avant', ar: 'أبواب كهربائية ناعمة أمامية' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Quiet and elegant, safe anti-pinch', fr: 'Calme et élégant, sécurité anti-pincement', ar: 'هادئ وأنيق، أمان مضاد للانقراض' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Zebra Wood Grain Trim', fr: 'Garniture Grain Bois Zèbre', ar: 'تطعيمات خشبية بنمط الحمار الوحشي' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Wood texture, natural elegance', fr: 'Texture bois, élégance naturelle', ar: 'ملمس خشبي، أناقة طبيعية' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Dual 50W Wireless Charging', fr: 'Charge Sans Fil Double 50W', ar: 'شحن لاسلكي مزدوج 50 واط' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Meets both driver and passenger charging', fr: 'Répond charge conducteur et passager', ar: 'يلبي شحن السائق والراكب' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Second Row -->
    <section class="common commonMax">
      <h3 class="title">{{ textFor({ en: 'Second Row Luxury Fully Advanced', fr: 'Luxe Deuxième Rangée Pleinement Avancé', ar: 'الفخامة في الصف الثاني متقدمة بالكامل' }) }}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.secondRow * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in secondRowSlides" :key="idx">
            <img :src="slide.image" class="slide-img" />
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.title }}</p>
              <p class="desc-content">{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div v-for="(_, idx) in secondRowSlides" :key="idx" class="pagination-bullet" :class="{ active: currentSlide.secondRow === idx }" @click="currentSlide.secondRow = idx"></div>
      </div>
    </section>

    <!-- Third Row -->
    <section class="common">
      <h3 class="title">{{ textFor({ en: 'Comfort Advanced Rear Business Cabin', fr: 'Cabine Affaires Arrière Confort Avancé', ar: 'مقصورة الأعمال الخلفية المريحة المتقدمة' }) }}</h3>
      <img src="/assets/OFFICIALVOYAH/dreamerChampion/images/bg_10_0408_banner01.jpg" class="single-img" />
      <div class="single-description">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '3rd Row 4-Way Electric Adjustment', fr: 'Réglage Électrique 4 Voies 3ème Rangée', ar: 'تعديل كهربائي رباعي الاتجاهات للصف الثالث' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Seat front/back + backrest angle adjustment', fr: 'Siège avant/arrière + réglage angle dossier', ar: 'المقعد أمام/خلف + ضبط زاوية المسند' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '3rd Row Steel-Reinforced Backrest', fr: 'Dossier 3ème Rangée Renforcé Acier', ar: 'مسند خلفي للصف الثالث مدعوم بالفولاذ' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Prevents intrusion, safe for family', fr: 'Empêche intrusion, sûr pour famille', ar: 'يمنع الاقتحام، آمن للعائلة' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Section 3: Full Sensation Intelligent -->
    <section id="section3" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/dreamerChampion/images/bg_11_0408_1920.jpg')` }">
      <h2 class="title">{{ textFor({ en: 'Full Sensation Intelligent Interaction', fr: 'Interaction Intelligente Sensation Complète', ar: 'تفاعل ذكي بإحساس كامل' }) }}</h2>
      <p class="subTitle">{{ textFor({ en: 'Space Interaction No Longer Cramped, Every Position is C-Position', fr: 'Interaction Espace Plus Serrée, Chaque Position est Position C', ar: 'تفاعل الفضاء لم يعد ضيقاً، كل موقع هو موقع C' }) }}</p>
    </section>

    <!-- Harmony Cockpit -->
    <section class="common">
      <h3 class="title">{{ textFor({ en: 'Huawei Harmony Cockpit HarmonySpace5', fr: 'Cockpit Huawei Harmony HarmonySpace5', ar: 'مقصورة Huawei Harmony HarmonySpace5' }) }}</h3>
      <p class="subTitle">{{ textFor({ en: 'Changing User Vehicle Experience', fr: 'Changer Expérience Véhicule Utilisateur', ar: 'تغيير تجربة مركبة المستخدم' }) }}</p>
      <img src="/assets/OFFICIALVOYAH/dreamerChampion/images/bg_12_n_banner01.jpg" class="single-img" />
      <div class="single-description">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Seamless Handoff Car-Phone', fr: 'Transfert Sans Couture Voiture-Téléphone', ar: 'الانتقال السلس سيارة-هاتف' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Getting in/out seamless, navigation/calls continuous', fr: 'Entrée/sortie sans couture, navigation/appels continus', ar: 'دخول/خروج سلس، ملاحة/مكالمات مستمرة' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'HSpace-Link Smart Connection', fr: 'Connexion Intelligente HSpace-Link', ar: 'اتصال ذكي HSpace-Link' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Heterogeneous control, full-screen, tablet support', fr: 'Contrôle hétérogène, plein écran, support tablette', ar: 'تحكم غير متجانس، شاشة كاملة، دعم الجهاز اللوحي' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Section 4: All-terrain Intelligent -->
    <section id="section4" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/dreamerChampion/images/bg_13_n_1920.jpg')` }">
      <h2 class="title">{{ textFor({ en: 'All-terrain Intelligent Driving', fr: 'Conduite Intelligente Tout Terrain', ar: 'القيادة الذكية في كل التضاريس' }) }}</h2>
      <p class="subTitle">{{ textFor({ en: 'All-weather, All-direction, All-target', fr: 'Tout Temps, Toute Direction, Toute Cible', ar: 'كل الأحوال الجوية، كل الاتجاهات، كل الأهداف' }) }}</p>
    </section>

    <!-- Huawei ADS -->
    <section class="common">
      <h3 class="title">{{ textFor({ en: 'Huawei ADS 4', fr: 'Huawei ADS 4', ar: 'Huawei ADS 4' }) }}</h3>
      <img src="/assets/OFFICIALVOYAH/dreamerChampion/images/bg_14_n.jpg" class="single-img" />
      <div class="single-description column3">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'End-to-End Full Scenario', fr: 'Bout-en-Bout Tout Scénario', ar: 'من البداية إلى النهاية كل السيناريوهات' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Full scenario贯通 one-click arrival', fr: 'Tout scénario贯通 arrivée un clic', ar: 'كل السيناريوهات贯通 وصول بنقرة واحدة' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'CAS 4.0 Anti-collision', fr: 'Anti-collision CAS 4.0', ar: 'مضاد للتصادم CAS 4.0' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Emergencies handled timely, active safety advanced', fr: 'Urgences gérées à temps, sécurité active avancée', ar: 'الطوارئ تتم معالجتها في الوقت المناسب، الأمان النشط متقدم' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Full Scenario Parking', fr: 'Stationnement Tout Scénario', ar: 'الركن في كل السيناريوهات' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Saves parking time, solves parking difficulty', fr: 'Économise temps stationnement, résout difficulté', ar: 'يوفر وقت الركن، يحل صعوبة الركن' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Section 5: Flagship Chassis -->
    <section id="section5" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/dreamerChampion/images/bg_15_0408_1920.jpg')` }">
      <h2 class="title">{{ textFor({ en: 'Flagship Intelligent Chassis', fr: 'Châssis Intelligent Phare', ar: 'هيكل ذكي رائد' }) }}</h2>
      <p class="subTitle">{{ textFor({ en: 'Breaking Through MPV Application Scenarios', fr: 'Percer Scénarios Application MPV', ar: 'اختراق سيناريوهات تطبيق MPV' }) }}</p>
    </section>

    <!-- Million-Level Chassis -->
    <section class="common">
      <h3 class="title">{{ textFor({ en: 'Million-Level Chassis', fr: 'Châssis Niveau Million', ar: 'هيكل بمستوى المليون' }) }}</h3>
      <img src="/assets/OFFICIALVOYAH/dreamerChampion/images/bg_16_n_banner01.jpg" class="single-img" />
      <div class="single-description">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Front Double Wishbone + Rear Five-Link', fr: 'Double Triangle Avant + 5 Bras Arrière', ar: 'مثلث مزدوج أمامي + 5 أذرع خلفية' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'MPV comfort, sedan driving experience', fr: 'Confort MPV, expérience conduite berline', ar: 'راحة MPV، تجربة قيادة سيدان' }) }}</p>
        </div>
      </div>
    </section>

    <!-- 4WD -->
    <section class="common">
      <h3 class="title">{{ textFor({ en: 'Full Series Intelligent Electric 4WD', fr: '4WD Électrique Intelligent Série Complète', ar: 'دفع رباعي كهربائي ذكي للسلسلة الكاملة' }) }}</h3>
      <img src="/assets/OFFICIALVOYAH/dreamerChampion/images/bg_17_n_banner01.jpg" class="single-img" />
      <p class="img-text">*{{ textFor({ en: 'Appearance subject to actual product', fr: 'Apparence selon produit réel', ar: 'المظهر وفقاً للمنتج الفعلي' }) }}</p>
      <div class="single-description">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Dual Motor Layout, Torque Vectoring', fr: 'Disposition Double Moteur, Vectorisation Couple', ar: 'تخطيط مزدوج المحرك، تحجيم العزم' }) }}</p>
          <p class="description-content">{{ textFor({ en: '0-100% intelligent adjustment, 50:50 load ratio', fr: 'Réglage intelligent 0-100%, ratio charge 50:50', ar: 'تعديل ذكي 0-100%，نسبة الحمل 50:50' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Section 6: Flagship Power -->
    <section id="section6" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/dreamerChampion/images/bg_18_0408_1920.jpg')` }">
      <h2 class="title">{{ textFor({ en: 'Flagship Lanhai Power', fr: 'Puissance Lanhai Phare', ar: 'قوة Lanhai الرائدة' }) }}</h2>
      <p class="subTitle">{{ textFor({ en: 'All Roads Worry-Free, Long Journey Assured', fr: 'Toutes Routes Sans Souci, Long Voyage Assuré', ar: 'جميع الطرق بلا قلق، رحلة طويلة مضمونة' }) }}</p>
    </section>

    <!-- Range -->
    <section class="common">
      <h3 class="title">{{ textFor({ en: 'High-End Ultra-Long Range', fr: 'Autonomie Ultra-Longue Haut de Gamme', ar: 'مدى فائق الطول متميز' }) }}</h3>
      <img src="/assets/OFFICIALVOYAH/dreamerChampion/images/bg_19_0408_banner01.jpg" class="single-img" />
      <div class="single-description">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '1411km Combined, 235km EV (CLTC)', fr: '1411km Combiné, 235km EV (CLTC)', ar: '1411 كم مجمع، 235 كم كهربائي (CLTC)' }) }}</p>
          <p class="description-content">{{ textFor({ en: '0.56L/100km combined, 5.41L/100km fuel consumption', fr: '0.56L/100km combiné, 5.41L/100km consommation', ar: '0.56 لتر/100 كم مجمع، 5.41 لتر/100 كم استهلاك' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Power -->
    <section class="common">
      <h3 class="title">{{ textFor({ en: 'High-Energy Surging Power', fr: 'Puissance Surging Haute Énergie', ar: 'قوة عالية الطاقة متدفقة' }) }}</h3>
      <img src="/assets/OFFICIALVOYAH/dreamerChampion/images/bg_20_n_banner01.jpg" class="single-img" />
      <div class="single-description">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '420kW Ultra-Strong Power', fr: '420kW Puissance Ultra-Forte', ar: '420 كيلوواط قوة فائقة' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Fully loaded 7 people + luggage still powerful', fr: 'Pleinement chargé 7 personnes + bagages toujours puissant', ar: 'محمل بالكامل 7 أشخاص + أمتعة ما زال قوياً' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '0-100km/h 5.9s', fr: '0-100km/h 5.9s', ar: '0-100 كم/ساعة 5.9 ثانية' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Priority lane selection, ample highway overtaking', fr: 'Sélection prioritaire voie, dépassement autoroute ample', ar: 'اختيار المسار الأولوية، تجاوز كافٍ على الطريق السريع' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Section 7: Flagship Safety -->
    <section id="section7" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/dreamerChampion/images/bg_21_0408_1920.jpg')` }">
      <h2 class="title">{{ textFor({ en: 'Flagship All-Domain Safety', fr: 'Sécurité Tout Domaine Phare', ar: 'أمان رائد في كل المجالات' }) }}</h2>
      <p class="subTitle">{{ textFor({ en: 'Refreshing MPV Safety Standards', fr: 'Rafraîchir Standards Sécurité MPV', ar: 'تحديث معايير أمان MPV' }) }}</p>
    </section>

    <!-- Body Protection -->
    <section class="common">
      <h3 class="title">{{ textFor({ en: 'All-Around Body Protection', fr: 'Protection Carrosserie Tout Autour', ar: 'حماية الهيكل من جميع الجوانب' }) }}</h3>
      <img src="/assets/OFFICIALVOYAH/dreamerChampion/images/bg_22_n_banner01.jpg" class="single-img" />
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
      <img src="/assets/OFFICIALVOYAH/dreamerChampion/images/bg_23_n_banner01.jpg" class="single-img" />
      <div class="single-description column3">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Intelligent Visual Sentry', fr: 'Sentinelle Visuelle Intelligente', ar: 'حارس مرئي ذكي' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'All-round real-time monitoring', fr: 'Surveillance temps réel tout autour', ar: 'مراقبة فورية من جميع الجوانب' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '540° Ultra-Clear Panoramic', fr: 'Panoramique Ultra-Clair 540°', ar: 'بانورامي فائق الوضوح 540°' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'No blind spots reversing, easy narrow parking', fr: 'Pas angles morts recul, parking étroit facile', ar: 'لا زوايا عمياء للرجوع، ركن ضيق سهل' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '20+ Active Safety Functions', fr: '20+ Fonctions Sécurité Active', ar: '20+ وظيفة أمان نشطة' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Timely emergency response, accident prevention', fr: 'Réponse urgente à temps, prévention accidents', ar: 'استجابة طارئة في الوقت المناسب، منع الحوادث' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Battery Protection -->
    <section class="common">
      <h3 class="title">{{ textFor({ en: 'All-Weather Battery Protection', fr: 'Protection Batterie Tout Temps', ar: 'حماية البطارية على مدار الساعة' }) }}</h3>
      <img src="/assets/OFFICIALVOYAH/dreamerChampion/images/bg_24_n_banner01.jpg" class="single-img" />
      <div class="single-description">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Amber Battery', fr: 'Batterie Ambre', ar: 'بطيرة العنبر' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'No leakage, no fire, no explosion, no thermal runaway', fr: 'Pas fuite, pas feu, pas explosion, pas emballement', ar: 'لا تسرب، لا نار، لا انفجار، لا جنون حراري' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '1500MPa Battery Shield', fr: 'Bouclier Batterie 1500MPa', ar: 'درع بطارية 1500 ميجا باسكال' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Fearless of accidents and underbody scrapes', fr: 'Sans crainte accidents et raclures sous-châssis', ar: 'بلا خوف من الحوادث والخدوش تحت الهيكل' }) }}</p>
        </div>
      </div>
    </section>

    <img src="/assets/OFFICIALVOYAH/dreamerChampion/images/bottom_tips.jpg" class="bottom-tips" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useSiteContent } from '~/composables/useSiteContent'

const { textFor } = useSiteContent()
const activeSection = ref(0)
const showMobileNav = ref(false)
const currentSlide = ref({
  design: 0,
  interior: 0,
  cabin: 0,
  userFriendly: 0,
  secondRow: 0
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

const designSlides = computed(() => [
  { image: '/assets/OFFICIALVOYAH/dreamerChampion/images/bg_3_n.jpg', title: textFor({ en: 'Black Samurai Grille', fr: 'Calandre Samouraï Noir', ar: 'شبكة الساموراي الأسود' }), desc: textFor({ en: 'Champion crowned, black obsidian realm', fr: 'Champion couronné, royaume obsidienne noire', ar: 'البطل متوج، مملكة الأوبسيديان السوداء' }) },
  { image: '/assets/OFFICIALVOYAH/dreamerChampion/images/bg_3_n_2.jpg', title: textFor({ en: 'Pilot Blue Indicator', fr: 'Indicateur Bleu Pilote', ar: 'مؤشر Pilot الأزرق' }), desc: textFor({ en: 'Assisted driving pilot, tech beauty and safety', fr: 'Pilote conduite assistée, beauté tech et sécurité', ar: 'طيار القيادة المساعدة، جمال تكنولوجي وأمان' }) }
])

const interiorSlides = computed(() => [
  { name: textFor({ en: 'Tuobrown', fr: 'Brun Tuo', ar: 'بني Tuo' }), image: '/assets/OFFICIALVOYAH/dreamerChampion/images/bg_05_0003.jpg' },
  { name: textFor({ en: 'Purple Rice', fr: 'Riz Violet', ar: 'أرز بنفسجي' }), image: '/assets/OFFICIALVOYAH/dreamerChampion/images/bg_05_0004.jpg' }
])

const cabinSlides = computed(() => [
  { image: '/assets/OFFICIALVOYAH/dreamerChampion/images/bg_7_n_banner04.jpg', title: textFor({ en: '"Reflecting Mountains" Panel', fr: 'Panneau "Reflet Montagnes"', ar: 'لوحة "انعكاس الجبال"' }), desc: textFor({ en: 'Heaven and earth painted with light', fr: 'Ciel et terre peints de lumière', ar: 'السماء والأرض مرسومة بالضوء' }) },
  { image: '/assets/OFFICIALVOYAH/dreamerChampion/images/bg_7_n_banner05.jpg', title: textFor({ en: '13L Dual-Door Smart Fridge', fr: 'Réfrigérateur Intelligent 13L', ar: 'ثلاجة ذكية 13 لتر' }), desc: textFor({ en: '24-hour power, every degree to your liking', fr: 'Alimentation 24h, chaque degré à votre goût', ar: 'تغذية 24 ساعة، كل درجة حسب ذوقك' }) },
  { image: '/assets/OFFICIALVOYAH/dreamerChampion/images/bg_7_n_banner06.jpg', title: textFor({ en: 'VOYAH Sound Audio', fr: 'Audio VOYAH Sound', ar: 'صوت VOYAH Sound' }), desc: textFor({ en: '20 HiFi speakers, ultimate immersive sound', fr: '20 haut-parleurs HiFi, son immersif ultime', ar: '20 مكبر صوت HiFi، صوت غامر فائق' }) },
  { image: '/assets/OFFICIALVOYAH/dreamerChampion/images/bg_7_n_banner07.jpg', title: textFor({ en: 'OEKO-TEX Baby-Friendly Fabric', fr: 'Tissu OEKO-TEX Bébé', ar: 'قماش OEKO-TEX للأطفال' }), desc: textFor({ en: 'EU certified, odorless, safe for children', fr: 'Certifié UE, inodore, sûr pour enfants', ar: 'معتمد من الاتحاد الأوروبي، عديم الرائحة، آمن للأطفال' }) }
])

const userFriendlySlides = computed(() => [
  { image: '/assets/OFFICIALVOYAH/dreamerChampion/images/bg_8_n_banner02.jpg', title: textFor({ en: '29-inch Full HD AR-HUD', fr: 'AR-HUD Full HD 29"', ar: 'شاشة AR-HUD Full HD 29 بوصة' }), desc: textFor({ en: 'Clearer view, richer info, safer driving', fr: 'Vue plus claire, info plus riche, conduite plus sûre', ar: 'رؤية أوضح، معلومات أكثر، قيادة أكثر أماناً' }) },
  { image: '/assets/OFFICIALVOYAH/dreamerChampion/images/bg_8_n_banner04.jpg', title: textFor({ en: 'AR Sensor Trunk', fr: 'Coffre Capteur AR', ar: 'صندوق AR مستشعر' }), desc: textFor({ en: 'Hands-free with heavy items, open remotely', fr: 'Sans mains avec objets lourds, ouverture à distance', ar: 'بدون يدين مع أشياء ثقيلة، فتح عن بعد' }) },
  { image: '/assets/OFFICIALVOYAH/dreamerChampion/images/bg_8_n_banner05.jpg', title: textFor({ en: '220V + Dual 50W Wireless', fr: '220V + Double 50W Sans Fil', ar: '220 فولت + مزدوج 50 واط لاسلكي' }), desc: textFor({ en: 'Phone charging, laptop, hair dryer, no worry', fr: 'Charge téléphone, ordinateur, sèche-cheveux, sans souci', ar: 'شحن الهاتف، الكمبيوتر المحمول، مجفف الشعر، بلا قلق' }) },
  { image: '/assets/OFFICIALVOYAH/dreamerChampion/images/bg_8_n_banner06.jpg', title: textFor({ en: 'Dual Backrest Tray Tables', fr: 'Tables Plateaux Double Dossier', ar: 'طاولات صواني مزدوجة المسند' }), desc: textFor({ en: 'Anti-slip groove, easy placement, efficient', fr: 'Rainure anti-dérapante, placement facile, efficace', ar: 'أخدود مضاد للانزلاق، وضع سهل، فعال' }) }
])

const secondRowSlides = computed(() => [
  { image: '/assets/OFFICIALVOYAH/dreamerChampion/images/bg_9_n_banner05.jpg', title: textFor({ en: 'AI Adaptive Seat', fr: 'Siège Adaptatif IA', ar: 'مقعد متكيف مع الذكاء الاصطناعي' }), desc: textFor({ en: '10-point massage, AI lumbar, heating, ventilation', fr: 'Massage 10 points, lombaires IA, chauffage, ventilation', ar: 'تدليك 10 نقاط، دعامة قطنية AI، تدفئة، تهوية' }) },
  { image: '/assets/OFFICIALVOYAH/dreamerChampion/images/bg_9_n_banner06.jpg', title: textFor({ en: '2nd Row Electric Privacy Curtain', fr: 'Rideau Intimité Électrique 2ème Rangée', ar: 'ستارة خصوصية كهربائية للصف الثاني' }), desc: textFor({ en: '85% shading, one-key electric, business rest assured', fr: '85% occultation, électrique une touche, affaires tranquilles', ar: '85% تظليل، كهربائي بمفتاح واحد، أعمال مطمئنة' }) },
  { image: '/assets/OFFICIALVOYAH/dreamerChampion/images/bg_9_n_banner07.jpg', title: textFor({ en: '17.3-inch 3K Screen', fr: 'Écran 17.3" 3K', ar: 'شاشة 17.3 بوصة 3K' }), desc: textFor({ en: 'Leading screen size, multi-angle, best viewing', fr: 'Taille écran leader, multi-angle, meilleure vue', ar: 'حجم شاشة رائد، زوايا متعددة، أفضل مشاهدة' }) }
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
.dreamerChampion-page { background: #000; color: #fff; }
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
.slide-img { width: 100%; height: auto; display: block; }
.img-text { position: absolute; bottom: 10px; left: 10px; font-size: 12px; color: rgba(255,255,255,0.6); }
.desc-wrap { text-align: center; margin-top: 30px; }
.desc-title { font-size: 24px; margin-bottom: 12px; }
.desc-content { font-size: 16px; color: rgba(255,255,255,0.7); }
.pagination { display: flex; justify-content: center; gap: 12px; margin-top: 40px; }
.pagination-bullet { width: 12px; height: 12px; border-radius: 50%; background: rgba(255,255,255,0.3); cursor: pointer; }
.pagination-bullet.active { background: #fff; }
.car-color-container { padding: 80px 40px; text-align: center; }
.car-swiper-wap { position: relative; height: 400px; margin-bottom: 40px; }
.car-swiper-wap .swiper-slide { position: absolute; top: 0; width: 100%; }
.swiper-slide-img { max-height: 400px; object-fit: contain; }
.car-color-list { display: flex; justify-content: center; gap: 30px; }
.car-color-item { display: flex; flex-direction: column; align-items: center; gap: 12px; }
.img-icon { width: 40px; height: 40px; border-radius: 50%; }
.color-name { font-size: 14px; }
.single-img { width: 100%; max-width: 1200px; height: auto; margin: 0 auto 40px; display: block; }
.single-description { max-width: 1000px; margin: 0 auto; }
.description-item { text-align: center; }
.description-title { font-size: 20px; margin-bottom: 12px; }
.description-content { font-size: 15px; color: rgba(255,255,255,0.7); }
.column3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.bottom-tips { width: 100%; display: block; }
@media (max-width: 1024px) { .column3 { grid-template-columns: repeat(2, 1fr); } .level-one .title { font-size: 36px; } }
@media (max-width: 640px) { .column3 { grid-template-columns: 1fr; } .level-one .title { font-size: 28px; } }
</style>
