<template>
  <div class="dreamer-river-page">
    <!-- Hero Section -->
    <section class="kv-section">
      <img src="/assets/OFFICIALVOYAH/dreamriver/images/kv_1920.png" class="kv-bg-img" />
      <div class="kv-content">
        <img src="/assets/OFFICIALVOYAH/dreamriver/images/dreamriver.png" class="kv-logo" />
        <p class="kv-slogan">{{ textFor({ en: 'New Era Flagship Four-Seat MPV', fr: 'MPV Phare Quatre Places Nouvelle Ère', ar: 'MPV رائد بأربعة مقاعد في عصر جديد' }) }}</p>
        <div class="kv-btns">
          <button class="voyah-button voyah-button--dark">{{ textFor({ en: 'Order Now', fr: 'Commander', ar: 'اطلب الآن' }) }}</button>
        </div>
      </div>
    </section>

    <!-- New Era Chinese Luxury -->
    <section class="common commonMax">
      <h3 class="title">{{ textFor({ en: 'New Era Chinese Luxury', fr: 'Luxe Chinois Nouvelle Ère', ar: 'فخامة صينية في عصر جديد' }) }}</h3>
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

    <!-- Two-tone Body Color -->
    <section class="car-color-container">
      <h3 class="title">{{ textFor({ en: 'Eastern Cultural Heritage', fr: 'Héritage Culturel Oriental', ar: 'تراث ثقافي شرقي' }) }}</h3>
      <div class="car-swiper-wap">
        <div class="swiper-slide" v-for="(color, idx) in exteriorColors" :key="idx" :style="{ left: idx === currentColor ? '0' : '100%' }">
          <img :src="`/assets/OFFICIALVOYAH/dreamriver/images/car/car${idx + 1}.png`" class="swiper-slide-img" />
        </div>
      </div>
      <div class="car-color-list">
        <div v-for="(color, idx) in exteriorColors" :key="idx" class="car-color-item" :class="{ active: currentColor === idx }" @click="currentColor = idx">
          <img :src="`/assets/OFFICIALVOYAH/dreamriver/images/car/icon${idx + 1}.png`" class="img-icon" />
          <p class="color-name">{{ color }}</p>
        </div>
      </div>
    </section>

    <!-- Interior Colors -->
    <section class="common commonMax">
      <h3 class="title">{{ textFor({ en: 'Mountains and Rivers Dignity', fr: 'Dignité Montagnes et Rivières', ar: 'كرامة الجبال والأنهار' }) }}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.interior * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in interiorSlides" :key="idx">
            <img :src="slide.image" class="slide-img" />
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

    <!-- New Era Luxury Comfort -->
    <section class="common commonMax">
      <h3 class="title">{{ textFor({ en: 'New Era Luxury Comfort', fr: 'Confort Luxueux Nouvelle Ère', ar: 'راحة فاخرة في عصر جديد' }) }}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.comfort * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in comfortSlides" :key="idx">
            <img :src="slide.image" class="slide-img" />
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.title }}</p>
              <p class="desc-content">{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div v-for="(_, idx) in comfortSlides" :key="idx" class="pagination-bullet" :class="{ active: currentSlide.comfort === idx }" @click="currentSlide.comfort = idx"></div>
      </div>
    </section>

    <!-- New Era Elegance -->
    <section class="common commonMax">
      <h3 class="title">{{ textFor({ en: 'New Era Noble Elegance', fr: 'Élégance Noble Nouvelle Ère', ar: 'أناقة نبيلة في عصر جديد' }) }}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.elegance * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in eleganceSlides" :key="idx">
            <img :src="slide.image" class="slide-img" />
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.title }}</p>
              <p class="desc-content">{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div v-for="(_, idx) in eleganceSlides" :key="idx" class="pagination-bullet" :class="{ active: currentSlide.elegance === idx }" @click="currentSlide.elegance = idx"></div>
      </div>
    </section>

    <!-- New Era Intelligent Interaction -->
    <section class="common commonMax">
      <h3 class="title">{{ textFor({ en: 'New Era Intelligent Interaction', fr: 'Interaction Intelligente Nouvelle Ère', ar: 'تفاعل ذكي في عصر جديد' }) }}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.interaction * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in interactionSlides" :key="idx">
            <img :src="slide.image" class="slide-img" />
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.title }}</p>
              <p class="desc-content">{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div v-for="(_, idx) in interactionSlides" :key="idx" class="pagination-bullet" :class="{ active: currentSlide.interaction === idx }" @click="currentSlide.interaction = idx"></div>
      </div>
    </section>

    <!-- New Era Private Realm -->
    <section class="common commonMax">
      <h3 class="title">{{ textFor({ en: 'New Era Private Realm', fr: 'Domaine Privé Nouvelle Ère', ar: 'مجال خاص في عصر جديد' }) }}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.privacy * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in privacySlides" :key="idx">
            <img :src="slide.image" class="slide-img" />
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.title }}</p>
              <p class="desc-content">{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div v-for="(_, idx) in privacySlides" :key="idx" class="pagination-bullet" :class="{ active: currentSlide.privacy === idx }" @click="currentSlide.privacy = idx"></div>
      </div>
    </section>

    <!-- New Era Luxurious Senses -->
    <section class="common commonMax">
      <h3 class="title">{{ textFor({ en: 'New Era Luxurious Senses', fr: 'Sens Luxueux Nouvelle Ère', ar: 'حواس فاخرة في عصر جديد' }) }}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.senses * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in sensesSlides" :key="idx">
            <img :src="slide.image" class="slide-img" />
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.title }}</p>
              <p class="desc-content">{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div v-for="(_, idx) in sensesSlides" :key="idx" class="pagination-bullet" :class="{ active: currentSlide.senses === idx }" @click="currentSlide.senses = idx"></div>
      </div>
    </section>

    <!-- New Era Intelligent Safety -->
    <section class="common commonMax">
      <h3 class="title">{{ textFor({ en: 'New Era Intelligent Safety', fr: 'Sécurité Intelligente Nouvelle Ère', ar: 'أمان ذكي في عصر جديد' }) }}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.safety * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in safetySlides" :key="idx">
            <img :src="slide.image" class="slide-img" />
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.title }}</p>
              <p class="desc-content">{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div v-for="(_, idx) in safetySlides" :key="idx" class="pagination-bullet" :class="{ active: currentSlide.safety === idx }" @click="currentSlide.safety = idx"></div>
      </div>
    </section>

    <!-- New Era Flagship Performance -->
    <section class="common commonMax">
      <h3 class="title">{{ textFor({ en: 'New Era Flagship Performance', fr: 'Performance Phare Nouvelle Ère', ar: 'أداء رائد في عصر جديد' }) }}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.performance * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in performanceSlides" :key="idx">
            <img :src="slide.image" class="slide-img" />
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.title }}</p>
              <p class="desc-content">{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div v-for="(_, idx) in performanceSlides" :key="idx" class="pagination-bullet" :class="{ active: currentSlide.performance === idx }" @click="currentSlide.performance = idx"></div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useSiteContent } from '~/composables/useSiteContent'

const { textFor } = useSiteContent()
const currentColor = ref(0)
const currentSlide = ref({
  luxury: 0,
  interior: 0,
  comfort: 0,
  elegance: 0,
  interaction: 0,
  privacy: 0,
  senses: 0,
  safety: 0,
  performance: 0
})

const exteriorColors = computed(() => [
  textFor({ en: 'Haoyue Purple Cloud Two-Tone', fr: 'Deux Tons Nuage Violet Haoyue', ar: 'لونان سحابي بنفسجي Haoyue' }),
  textFor({ en: 'Dawn Golden Glow Two-Tone', fr: 'Deux Tons Lueur Dorée Aube', ar: 'لونان ذهبي متوهج Dawn' })
])

const luxurySlides = computed(() => [
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_2.png', title: textFor({ en: 'Haoyue Purple Cloud Two-Tone Body', fr: 'Carrosserie Deux Tons Nuage Violet Haoyue', ar: 'هيكل بلونين سحابي بنفسجي Haoyue' }), desc: textFor({ en: 'Magnificent mountains and rivers, purple aura from the east', fr: 'Montagnes et rivières magnifiques, aura violette de l\'est', ar: 'جبال وأنهار رائعة، هالة بنفسجية من الشرق' }) },
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_2-2.png', title: textFor({ en: 'Kunpeng Wing Through Headlights', fr: 'Phares Traversants Aile Kunpeng', ar: 'مصابيح أمامية على شكل جناح Kunpeng' }), desc: textFor({ en: 'Kunpeng soars, enjoying mountains and rivers', fr: 'Kunpeng s\'envole, profitant des montagnes et rivières', ar: 'Kunpeng ينطلق، يستمتع بالجبال والأنهار' }) },
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_2-3.png', title: textFor({ en: '20-inch Star Vortex Wheels', fr: 'Roues Vortex Étoile 20 pouces', ar: 'عجلات دوامة نجمية 20 بوصة' }), desc: textFor({ en: 'Million-level customization, stable as mountains in wind and rain', fr: 'Personnalisation niveau million, stable comme montagnes', ar: 'تخصيص بمستوى المليون، مستقر كالجبال' }) },
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_2-4.png', title: textFor({ en: '"Viewing Mountains" Illuminated Panel', fr: 'Panneau Illuminé "Vue Montagnes"', ar: 'لوحة مضيئة "مناظر الجبال"' }), desc: textFor({ en: 'Mountains and waters intertwined, vibrant and resonant', fr: 'Montagnes et eaux entrelacées, vibrantes et résonnantes', ar: 'جبال ومياه متشابكة، نابضة بالحياة' }) }
])

const interiorSlides = computed(() => [
  { name: textFor({ en: 'Purple Rice Interior', fr: 'Intérieur Riz Violet', ar: 'داخلية أرز بنفسجي' }), image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_4.png' },
  { name: textFor({ en: 'Blue Black Interior', fr: 'Intérieur Bleu Noir', ar: 'داخلية أزرق أسود' }), image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_4-2.png' }
])

const comfortSlides = computed(() => [
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_5.png', title: textFor({ en: 'Exclusive Private Super First Class', fr: 'Super Première Classe Privée Exclusive', ar: 'درجة أولى فائقة خاصة حصرية' }), desc: textFor({ en: 'Exclusive cabin, fully luxurious', fr: 'Cabine exclusive, entièrement luxueuse', ar: 'مقصورة حصرية، فاخرة بالكامل' }) },
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_5-2.png', title: textFor({ en: '"Mountains and Rivers Cloud Couch" Stretch Mode', fr: 'Mode Étirement "Canapé Nuage Montagnes Rivières"', ar: 'وضع التمدد "أريكة سحاب الجبال والأنهار"' }), desc: textFor({ en: '166° space capsule-grade zero-gravity seats', fr: 'Sièges zéro-gravité niveau capsule spatiale 166°', ar: 'مقاعد بلا جاذبية بمستوى كبسولة فضائية 166°' }) },
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_5-3.png', title: textFor({ en: '"Hongyu Qingyun" Aesthetic Seats', fr: 'Sièges Esthétiques "Hongyu Qingyun"', ar: 'مقاعد جمالية "Hongyu Qingyun"' }), desc: textFor({ en: 'Baby-friendly safe fabric', fr: 'Tissu sûr pour bébés', ar: 'قماش آمن للأطفال' }) },
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_5-4.png', title: textFor({ en: 'Private Physiotherapy Expert Massage', fr: 'Massage Expert Physiothérapie Privée', ar: 'تدليك خبير علاج طبيعي خاص' }), desc: textFor({ en: 'SPA-grade AI massage, precision algorithm therapy', fr: 'Massage IA niveau SPA, thérapie algorithme précision', ar: 'تدليك AI بمستوى SPA، علاج خوارزمي دقيق' }) }
])

const eleganceSlides = computed(() => [
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_6.png', title: textFor({ en: '50-inch Ultra-Clear Giant Screen', fr: 'Écran Géant Ultra-Clair 50 pouces', ar: 'شاشة عملاقة فائقة الوضوح 50 بوصة' }), desc: textFor({ en: 'Smart cloud wall, all-encompassing vision', fr: 'Mur nuage intelligent, vision tout-encompassing', ar: 'جدار سحابي ذكي، رؤية شاملة' }) },
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_6-2.png', title: textFor({ en: 'One-Click Front-Rear Cabin Intercom', fr: 'Intercom Cabine Avant-Arrière Un Clic', ar: 'اتصال داخلي أمامي-خلفي بنقرة واحدة' }), desc: textFor({ en: 'Smart quiet voice calls, commanding overall situation', fr: 'Appels voix silencieux intelligents, commandant situation', ar: 'مكالمات صوتية هادئة ذكية، تسيير الموقف' }) },
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_6-3.png', title: textFor({ en: 'Ultra State Guest Luxury Treatment', fr: 'Traitement Luxueux Ultra Invité d\'État', ar: 'معاملة فاخرة فائقة لضيف الدولة' }), desc: textFor({ en: 'Electric shoe compartment with smart warm footrest', fr: 'Compartiment chaussures électrique avec repose-pieds', ar: 'حجرة أحذية كهربائية مع مسند قدم دافئ' }) },
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_6-4.png', title: textFor({ en: 'Smart Electronic Password Safe', fr: 'Coffre-Fort Électronique Intelligent', ar: 'خزنة إلكترونية ذكية' }), desc: textFor({ en: 'Aegis password lock, ultimate peace of mind', fr: 'Serrure mot de passe Aegis, tranquillité ultime', ar: 'قفل كلمة مرور Aegis، راحة بال مطلقة' }) }
])

const interactionSlides = computed(() => [
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_7.png', title: textFor({ en: 'Dawn Golden Luxury Smart Cockpit', fr: 'Cockpit Intelligent Luxueux Doré Aube', ar: 'مقصورة ذكية فاخرة ذهبية Dawn' }), desc: textFor({ en: 'Dual 15.4-inch screens, intelligent intelligent', fr: 'Double écrans 15.4 pouces, intelligent intelligent', ar: 'شاشتان 15.4 بوصة، ذكي ذكي' }) },
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_7-2.png', title: textFor({ en: 'HarmonyOS Intelligent Connected Cockpit', fr: 'Cockpit Connecté Intelligent HarmonyOS', ar: 'مقصورة متصلة ذكية HarmonyOS' }), desc: textFor({ en: 'Seamless car-phone integration', fr: 'Intégration voiture-téléphone sans couture', ar: 'تكامل سيارة-هاتف سلس' }) },
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_7-3.png', title: textFor({ en: '28-speaking VOYAH Sound', fr: 'VOYAH Sound 28 Haut-Parleurs', ar: 'VOYAH Sound بـ28 مكبر صوت' }), desc: textFor({ en: 'Immersive ultimate audio experience', fr: 'Expérience audio ultime immersive', ar: 'تجربة صوتية غامرة فائقة' }) },
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_7-4.png', title: textFor({ en: 'Intelligent Dual Armrest Touch Screen', fr: 'Double Écran Tactile Accoudoirs Intelligent', ar: 'شاشة لمس مزدوجة للمساند الذكية' }), desc: textFor({ en: '7L capacity, temperature adjustable, elegant access', fr: 'Capacité 7L, température réglable, accès élégant', ar: 'سعة 7 لتر، درجة حرارة قابلة للتعديل، وصول أنيق' }) }
])

const privacySlides = computed(() => [
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_8.png', title: textFor({ en: 'Fully Independent Private Rear Cabin', fr: 'Cabine Arrière Privée Entièrement Indépendante', ar: 'مقصورة خلفية خاصة مستقلة بالكامل' }), desc: textFor({ en: 'Ultimate privacy, enjoying mountains and rivers', fr: 'Intimité ultime, profitant des montagnes et rivières', ar: 'خصوصية مطلقة، الاستمتاع بالجبال والأنهار' }) },
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_8-2.png', title: textFor({ en: 'Innovative Variable Partition Design', fr: 'Design Cloison Variable Innovant', ar: 'تصميم قابل للتغيير مبتكر' }), desc: textFor({ en: 'Transparent double-layer laminated glass, dual realm', fr: 'Verre feuilleté double couche transparent, double royaume', ar: 'زجاج مصفح مزدوج شفاف، مملكة مزدوجة' }) },
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_8-3.png', title: textFor({ en: 'Full Car Electric Privacy Curtains', fr: 'Rideaux Intimité Électriques Voiture Complète', ar: 'ستائر خصوصية كهربائية للسيارة بالكامل' }), desc: textFor({ en: '100% privacy protection, 100% ultimate peace of mind', fr: '100% protection intimité, 100% tranquillité ultime', ar: '100% حماية خصوصية، 100% راحة بال مطلقة' }) },
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_8-4.png', title: textFor({ en: 'Rear Cabin "Boundary" Sound Lock', fr: 'Verrou Sonore "Frontière" Cabine Arrière', ar: 'قفل صوتي "حدود" للمقصورة الخلفية' }), desc: textFor({ en: 'Exclusive mobile palace, information never leaks', fr: 'Palais mobile exclusif, informations jamais divulguées', ar: 'قصر متنقل حصري، معلومات لا تتسرب أبداً' }) }
])

const sensesSlides = computed(() => [
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_9.png', title: textFor({ en: 'Dynaudio Palace-Grade Audio', fr: 'Audio Niveau Palais Dynaudio', ar: 'صوت بمستوى القصر Dynaudio' }), desc: textFor({ en: '8.1.6 immersive channel distribution', fr: 'Distribution canal immersif 8.1.6', ar: 'توزيع قنوات غامر 8.1.6' }) },
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_9-2.png', title: textFor({ en: 'Electric Dual Umbrella Storage', fr: 'Rangement Double Parapluie Électrique', ar: 'تخزين مظلة مزدوج كهربائي' }), desc: textFor({ en: 'Hidden universe, commanding umbrellas and mountains', fr: 'Univers caché, commandant parapluies et montagnes', ar: 'كون مخفي، تسيير المظلات والجبال' }) },
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_9-3.png', title: textFor({ en: 'Luxury Custom High-End Umbrella', fr: 'Parapluie Haut de Gamme sur Mesure', ar: 'مظلة فاخرة عالية الجودة' }), desc: textFor({ en: 'Unique meshing structure, collectible craftsmanship', fr: 'Structure maillage unique, artisanat collectionnable', ar: 'هيكل تفاعلي فريد، حرفية قابلة للجمع' }) },
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_9-4.png', title: textFor({ en: 'Shadow Wood Real Wood Trim', fr: 'Garniture Bois Réel Ombre', ar: 'تطعيمات خشبية حقيقية' }), desc: textFor({ en: 'Century-old shadow wood, one car one selection', fr: 'Bois ombre centenaire, une voiture une sélection', ar: 'خشب ظل خالد، سيارة واحدة اختيار واحد' }) }
])

const safetySlides = computed(() => [
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_10.png', title: textFor({ en: 'Huawei ADS 4', fr: 'Huawei ADS 4', ar: 'Huawei ADS 4' }), desc: textFor({ en: 'Fully equipped summit, sailing to new realms', fr: 'Sommet pleinement équipé, naviguer vers nouveaux royaumes', ar: 'قمة مجهزة بالكامل، الإبحار نحو ممالك جديدة' }) },
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_10-2.png', title: textFor({ en: 'Leading 800V Smart Hybrid', fr: 'Hybride Intelligent 800V de Pointe', ar: 'هجين ذكي 800V رائد' }), desc: textFor({ en: 'Super smart hybrid, super power', fr: 'Super hybride intelligent, super puissance', ar: 'هجين ذكي فائق، قوة فائقة' }) },
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_10-3.png', title: textFor({ en: 'New WEWA Architecture', fr: 'Nouvelle Architecture WEWA', ar: 'هندسة WEWA الجديدة' }), desc: textFor({ en: 'From human-like to superhuman, driving control greatly improved', fr: 'D\'humain à surhumain, contrôle conduite grandement amélioré', ar: 'من شبيه للبشر إلى خارق للبشر، تحكم محسن بشكل كبير' }) },
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_10-4.png', title: textFor({ en: 'CAS 4.0 Anti-collision', fr: 'Anti-collision CAS 4.0', ar: 'مضاد للتصادم CAS 4.0' }), desc: textFor({ en: 'Full-dimensional safety redundancy', fr: 'Redondance sécurité pleine dimension', ar: 'تكرار أمان كامل الأبعاد' }) }
])

const performanceSlides = computed(() => [
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_11.png', title: textFor({ en: 'Bi-directional 10° Rear Wheel Steering', fr: 'Direction Roue Arrière Bidirectionnelle 10°', ar: 'توجيه عجلة خلفية ثنائي الاتجاه 10°' }), desc: textFor({ en: 'More stable corners, more comfortable travel', fr: 'Virages plus stables, voyage plus confortable', ar: 'منعطفات أكثر استقراراً، سفر أكثر راحة' }) },
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_11-2.png', title: textFor({ en: 'Intelligent Magic Carpet Air Suspension', fr: 'Suspension Pneumatique Tapis Magique', ar: 'تعليق هوائي سحري ذكي' }), desc: textFor({ en: 'Flat as ground, calm and composed', fr: 'Plat comme le sol, calme et composé', ar: 'مسطح كالأرض، هادئ ومتأنق' }) },
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_11-3.png', title: textFor({ en: '2000MPa Ultra-High Strength Cage', fr: 'Cage Ultra-Résistante 2000MPa', ar: 'قفص فائق المقاومة 2000 ميجا باسكال' }), desc: textFor({ en: 'One-piece hot-formed laser welded door ring', fr: 'Anneau porte soudé laser formé à chaud en une pièce', ar: 'حلقة باب ملحومة بالليزر مكونة بالحرارة في قطعة واحدة' }) },
  { image: '/assets/OFFICIALVOYAH/dreamriver/images/sc_11-4.png', title: textFor({ en: 'Amber Battery 2.0', fr: 'Batterie Ambre 2.0', ar: 'بطارية العنبر 2.0' }), desc: textFor({ en: '3000 daily battery checks, early risk warnings', fr: '3000 contrôles batterie quotidiens, alertes risques précoces', ar: '3000 فحص يومي للبطارية، تحذيرات مبكرة من المخاطر' }) }
])
</script>

<style scoped>
.dreamer-river-page { background: #000; color: #fff; }
.kv-section { position: relative; height: 100vh; display: flex; align-items: center; justify-content: center; }
.kv-bg-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.kv-content { position: relative; z-index: 2; text-align: center; }
.kv-logo { width: 280px; margin-bottom: 24px; }
.kv-slogan { font-size: 24px; margin-bottom: 40px; }
.kv-btns { display: flex; gap: 20px; justify-content: center; }
.voyah-button { padding: 14px 32px; border: 1px solid #fff; background: transparent; color: #fff; cursor: pointer; }
.voyah-button--dark { background: #fff; color: #000; }
.common { padding: 80px 40px; }
.commonMax { max-width: 1440px; margin: 0 auto; }
.common .title { font-size: 32px; text-align: center; margin-bottom: 40px; }
.swiper-container { overflow: hidden; }
.swiper-wrapper { display: flex; transition: transform 0.3s; }
.swiper-slide { flex-shrink: 0; width: 100%; position: relative; }
.slide-img { width: 100%; height: auto; display: block; }
.desc-wrap { text-align: center; margin-top: 30px; }
.desc-title { font-size: 24px; margin-bottom: 12px; }
.desc-content { font-size: 16px; color: rgba(255,255,255,0.7); }
.pagination { display: flex; justify-content: center; gap: 12px; margin-top: 40px; }
.pagination-bullet { width: 12px; height: 12px; border-radius: 50%; background: rgba(255,255,255,0.3); cursor: pointer; }
.pagination-bullet.active { background: #fff; }
.car-color-container { padding: 80px 40px; text-align: center; }
.car-color-container .title { font-size: 32px; margin-bottom: 40px; }
.car-swiper-wap { position: relative; height: 400px; margin-bottom: 40px; overflow: hidden; }
.car-swiper-wap .swiper-slide { position: absolute; top: 0; width: 100%; transition: left 0.3s; }
.swiper-slide-img { max-height: 400px; object-fit: contain; }
.car-color-list { display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; }
.car-color-item { display: flex; flex-direction: column; align-items: center; gap: 8px; cursor: pointer; opacity: 0.6; }
.car-color-item.active { opacity: 1; }
.img-icon { width: 40px; height: 40px; border-radius: 50%; }
.color-name { font-size: 14px; }
@media (max-width: 640px) { .car-color-list { gap: 20px; } .color-name { font-size: 12px; } }
</style>
