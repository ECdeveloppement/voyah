<template>
  <div class="dreamer-page">
    <!-- Hero Section -->
    <section class="kv-section">
      <img src="/assets/OFFICIALVOYAH/dreamer/images/kv_1920.jpg" class="kv-bg-img" />
      <div class="kv-content">
        <img src="/assets/OFFICIALVOYAH/dreamer/images/dreamer.png" class="kv-logo" />
        <p class="kv-slogan">{{ textFor({ en: 'Dream\'s Mobile Castle', fr: 'Château Mobile du Rêve', ar: 'القلعة المتنقلة للأحلام' }) }}</p>
        <div class="kv-btns">
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

    <!-- Section 1: All-Electric Power -->
    <section id="section1" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/dreamer/images/bg_2_1920.jpg')` }">
      <h2 class="title">{{ textFor({ en: 'All-Electric Power, Peak Performance', fr: 'Puissance Tout Électrique, Performance de Pointe', ar: 'قوة كهربائية، أداء قمة' }) }}</h2>
      <p class="subTitle">{{ textFor({ en: 'All-road super power / All-mode ultra-long range / All-condition super efficiency', fr: 'Super puissance tous terrains / Ultra-longue autonomie tous modes / Super efficacité toutes conditions', ar: 'قوة فائقة كل الطرق / مدى فائق الطول كل الأوضاع / كفاءة فائقة كل الظروف' }) }}</p>
    </section>

    <!-- Power Section -->
    <section class="common">
      <h3 class="title">{{ textFor({ en: 'All-Road Super Power', fr: 'Super Puissance Tous Terrains', ar: 'قوة فائقة كل الطرق' }) }}</h3>
      <img src="/assets/OFFICIALVOYAH/dreamer/images/bg_swiper_3_1_n.jpg" class="single-img" />
      <div class="single-description">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '420kW System Power, 840N·m Torque', fr: 'Puissance Système 420kW, Couple 840N·m', ar: 'قوة النظام 420 كيلوواط، عزم 840 نيوتن متر' }) }}</p>
          <p class="description-content">{{ textFor({ en: '203km/h top speed, efficient high-speed cruising', fr: 'Vitesse de pointe 203km/h, croisière rapide efficace', ar: 'سرعة قصوى 203 كم/ساعة، جولة سريعة فعالة' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Torque Vectoring 4WD', fr: '4WD Vectorisation du Couple', ar: 'دفع رباعي بتحجيم العزم' }) }}</p>
          <p class="description-content">{{ textFor({ en: '0%-100% intelligent torque adjustment, conquering all terrains', fr: 'Réglage couple intelligent 0%-100%, conquérant tous terrains', ar: 'تعديل عزم ذكي 0%-100%، يغزو كل التضاريس' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Range Section -->
    <section class="common commonMax">
      <h3 class="title">{{ textFor({ en: 'All-Mode Ultra-Long Range', fr: 'Ultra-Longue Autonomie Tous Modes', ar: 'مدى فائق الطول كل الأوضاع' }) }}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.range * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in rangeSlides" :key="idx">
            <img :src="slide.image" class="slide-img" />
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.title }}</p>
              <p class="desc-content">{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div v-for="(_, idx) in rangeSlides" :key="idx" class="pagination-bullet" :class="{ active: currentSlide.range === idx }" @click="currentSlide.range = idx"></div>
      </div>
    </section>

    <!-- Efficiency Section -->
    <section class="common commonMax">
      <h3 class="title">{{ textFor({ en: 'All-Condition Super Efficiency', fr: 'Super Efficacité Toutes Conditions', ar: 'كفاءة فائقة كل الظروف' }) }}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.efficiency * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in efficiencySlides" :key="idx">
            <img :src="slide.image" class="slide-img" />
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.title }}</p>
              <p class="desc-content">{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div v-for="(_, idx) in efficiencySlides" :key="idx" class="pagination-bullet" :class="{ active: currentSlide.efficiency === idx }" @click="currentSlide.efficiency = idx"></div>
      </div>
    </section>

    <!-- ESSA Architecture -->
    <section class="common">
      <h3 class="title">{{ textFor({ en: 'All-Native Smart Electric Architecture', fr: 'Architecture Électrique Intelligente Entièrement Native', ar: 'هندسة كهربائية ذكية أصلية بالكامل' }) }}</h3>
      <img src="/assets/OFFICIALVOYAH/dreamer/images/bg_swiper_5_1.jpg" class="single-img" />
      <div class="single-description column1">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'ESSA Native Smart Electric Architecture, BEV/PHEV Dual Power', fr: 'ESSA Architecture Électrique Intelligente Native, Double Puissance BEV/PHEV', ar: 'ESSA هندسة كهربائية ذكية أصلية، قوة مزدوجة BEV/PHEV' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Forward-developed dual-power technology architecture', fr: 'Architecture technologique double puissance développée vers l\'avant', ar: 'هندسة تقنية قوة مزدوجة متطورة للأمام' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Section 2: Panoramic Luxury -->
    <section id="section2" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/dreamer/images/bg_6_1920.jpg')` }">
      <h2 class="title">{{ textFor({ en: 'Panoramic Luxury, New Realm of Enjoyment', fr: 'Luxe Panoramique, Nouveau Royaume de Plaisir', ar: 'فخامة بانورامية، مملكة جديدة من المتعة' }) }}</h2>
      <p class="subTitle">{{ textFor({ en: 'High-speed rail precision / Cloud castle comfort / Deep sea tranquility / Forest oxygen freshness', fr: 'Précision grande vitesse / Confort château nuage / Tranquillité profondeur / Fraîcheur oxygène forêt', ar: 'دقة سكك حديدية عالية السرعة / راحة قلعة سحابية / هدوء بحر عميق / نقاء أكسجين غابة' }) }}</p>
    </section>

    <!-- High-Speed Rail Driving -->
    <section class="common commonMax">
      <h3 class="title">{{ textFor({ en: 'High-Speed Rail Precision Driving', fr: 'Conduite Précision Grande Vitesse', ar: 'قيادة دقيقة بسرعة عالية' }) }}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.driving * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in drivingSlides" :key="idx">
            <img :src="slide.image" class="slide-img" />
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.title }}</p>
              <p class="desc-content">{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div v-for="(_, idx) in drivingSlides" :key="idx" class="pagination-bullet" :class="{ active: currentSlide.driving === idx }" @click="currentSlide.driving = idx"></div>
      </div>
    </section>

    <!-- Interior Features -->
    <section class="common">
      <img src="/assets/OFFICIALVOYAH/dreamer/images/bg_swiper_8_1.jpg" class="single-img margin-top-0" />
      <div class="single-description column3">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'OEKO-TEX® Pilot Seats', fr: 'Sièges Pilotes OEKO-TEX®', ar: 'مقاعد الطيار OEKO-TEX®' }) }}</p>
          <p class="description-content">{{ textFor({ en: '12-way electric adjustment', fr: 'Réglage électrique 12 voies', ar: 'تعديل كهربائي 12 اتجاه' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '1.4m Seamless Triple Screen', fr: 'Triple Écran Sans Couture 1.4m', ar: 'شاشة ثلاثية متصلة 1.4 متر' }) }}</p>
          <p class="description-content">{{ textFor({ en: '8155 flagship chip', fr: 'Puce phare 8155', ar: 'شريحة رائدة 8155' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Pilot Convenience Entry', fr: 'Entrée Convenance Pilote', ar: 'دخول طيار مريح' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Welcome mode with automatic adjustments', fr: 'Mode bienvenue avec ajustements automatiques', ar: 'وضع ترحيب مع تعديلات تلقائية' }) }}</p>
        </div>
      </div>
    </section>

    <!-- Magic Carpet -->
    <section class="common">
      <h3 class="title">{{ textFor({ en: 'Cloud Castle Comfort', fr: 'Confort Château Nuage', ar: 'راحة قلعة السحاب' }) }}</h3>
      <img src="/assets/OFFICIALVOYAH/dreamer/images/bg_swiper_9_1.jpg" class="single-img" />
      <div class="single-description column3">
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Magic Carpet Air Suspension + CDC', fr: 'Suspension Pneumatique Tapis Magique + CDC', ar: 'تعليق هوائي سحري + CDC' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Real-time road sensing, automatic adjustment', fr: 'Détection route temps réel, réglage automatique', ar: 'استشعار الطريق الفوري، تعديل تلقائي' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: 'Class-Exclusive Magic Carpet', fr: 'Tapis Magique Exclusif à la Classe', ar: 'سجادة سحرية حصرية للفئة' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Active intelligent soft/hard adjustment', fr: 'Réglage actif intelligent doux/dur', ar: 'تعديل نشط ذكي ناعم/صلب' }) }}</p>
        </div>
        <div class="description-item">
          <p class="description-title">{{ textFor({ en: '60mm Air Suspension', fr: 'Suspension Pneumatique 60mm', ar: 'تعليق هوائي 60 مم' }) }}</p>
          <p class="description-content">{{ textFor({ en: 'Adapting to more user scenarios', fr: 'S\'adaptant à plus de scénarios utilisateur', ar: 'يتكيف مع المزيد من سيناريوهات المستخدم' }) }}</p>
        </div>
      </div>
    </section>

    <!-- More sections continue... -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useSiteContent } from '~/composables/useSiteContent'

const { textFor } = useSiteContent()
const activeSection = ref(0)
const showMobileNav = ref(false)

const currentSlide = ref({
  range: 0,
  efficiency: 0,
  driving: 0
})

const chapterSections = computed(() => [
  { id: 'section1', title: textFor({ en: 'Power', fr: 'Puissance', ar: 'القوة' }) },
  { id: 'section2', title: textFor({ en: 'Luxury', fr: 'Luxe', ar: 'الفخامة' }) },
  { id: 'section3', title: textFor({ en: 'Safety', fr: 'Sécurité', ar: 'الأمان' }) },
  { id: 'section4', title: textFor({ en: 'Space', fr: 'Espace', ar: 'الفضاء' }) },
  { id: 'section5', title: textFor({ en: 'Smart', fr: 'Intelligent', ar: 'الذكاء' }) },
  { id: 'section6', title: textFor({ en: 'Design', fr: 'Design', ar: 'التصميم' }) }
])

const rangeSlides = computed(() => [
  { image: '/assets/OFFICIALVOYAH/dreamer/images/bg_swiper_27_1.jpg', title: textFor({ en: 'CLTC 236km EV, 1231km Total', fr: 'CLTC 236km EV, 1231km Total', ar: 'CLTC 236 كم كهربائي، 1231 كم إجمالي' }), desc: textFor({ en: 'Goodbye range anxiety', fr: 'Adieu anxiété autonomie', ar: 'وداعاً لقلق المدى' }) },
  { image: '/assets/OFFICIALVOYAH/dreamer/images/bg_swiper_27_2.jpg', title: textFor({ en: '12+ Hours Full-Power Discharge', fr: 'Décharge Pleine Puissance 12+ Heures', ar: 'تفريغ كامل الطاقة 12+ ساعة' }), desc: textFor({ en: '43kWh battery, camping freedom', fr: 'Batterie 43kWh, liberté camping', ar: 'بطارية 43 كيلوواط ساعة، حرية التخييم' }) }
])

const efficiencySlides = computed(() => [
  { image: '/assets/OFFICIALVOYAH/dreamer/images/bg_swiper_4_1.jpg', title: textFor({ en: 'Lanhai Power PHEV', fr: 'Lanhai Power PHEV', ar: 'Lanhai Power PHEV' }), desc: textFor({ en: '6-in-1 series-parallel PHEV architecture', fr: 'Architecture PHEV série-parallèle 6-en-1', ar: 'هندسة PHEV سلسلة-توازي 6 في 1' }) },
  { image: '/assets/OFFICIALVOYAH/dreamer/images/bg_swiper_4_2.jpg', title: textFor({ en: '45.18% Thermal Efficiency', fr: 'Efficacité Thermique 45.18%', ar: 'كفاءة حرارية 45.18%' }), desc: textFor({ en: '5.36L/100km fuel consumption', fr: 'Consommation 5.36L/100km', ar: 'استهلاك 5.36 لتر/100 كم' }) },
  { image: '/assets/OFFICIALVOYAH/dreamer/images/bg_swiper_4_3.jpg', title: textFor({ en: '97% System Efficiency', fr: 'Efficacité Système 97%', ar: 'كفاءة النظام 97%' }), desc: textFor({ en: 'Dual "87" motor efficiency', fr: 'Double efficacité moteur "87"', ar: 'كفاءة مزدوجة للمحرك "87"' }) }
])

const drivingSlides = computed(() => [
  { image: '/assets/OFFICIALVOYAH/dreamer/images/bg_swiper_7_1.jpg', title: textFor({ en: 'Double Wishbone + Five-Link', fr: 'Double Triangle + 5 Bras', ar: 'مثلث مزدوج + 5 أذرع' }), desc: textFor({ en: 'MPV comfort, SUV capability, sedan handling', fr: 'Confort MPV, capacité SUV, maniabilité berline', ar: 'راحة MPV، قدرة SUV، قابلية سيدان' }) },
  { image: '/assets/OFFICIALVOYAH/dreamer/images/bg_swiper_7_2.jpg', title: textFor({ en: '5-Second 0-100km/h', fr: '0-100km/h en 5 secondes', ar: '0-100 كم/ساعة في 5 ثوانٍ' }), desc: textFor({ en: 'Class-leading acceleration', fr: 'Accélération leader de classe', ar: 'تسارع رائد في الفئة' }) },
  { image: '/assets/OFFICIALVOYAH/dreamer/images/bg_swiper_7_3.jpg', title: textFor({ en: '35.79m Braking Distance', fr: 'Distance Freinage 35.79m', ar: 'مسافة فرملة 35.79 متر' }), desc: textFor({ en: 'Class-leading braking', fr: 'Freinage leader de classe', ar: 'فرملة رائدة في الفئة' }) }
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
.dreamer-page { background: #000; color: #fff; }
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
