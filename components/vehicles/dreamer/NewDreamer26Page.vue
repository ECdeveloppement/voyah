<template>
  <div class="new-dreamer-26-page">
    <section class="kv-section">
      <img src="/assets/OFFICIALVOYAH/newDreamer26/images/kv_1920.jpg" class="kv-bg-img" />
      <div class="kv-content">
        <img src="/assets/OFFICIALVOYAH/newDreamer26/images/newDreamer26.png" class="kv-logo" />
        <p class="kv-slogan">{{ textFor({ en: 'Flagship MPV of the New Era', fr: 'MPV Phare de la Nouvelle Ère', ar: 'MPV الرائد للعصر الجديد' }) }}</p>
        <div class="kv-btns">
          <button class="voyah-button voyah-button--plain">{{ textFor({ en: 'Book Test Drive', fr: 'Réserver Essai', ar: 'حجز تجربة قيادة' }) }}</button>
          <button class="voyah-button voyah-button--dark">{{ textFor({ en: 'Order Now', fr: 'Commander', ar: 'اطلب الآن' }) }}</button>
        </div>
      </div>
    </section>

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

    <section id="section1" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/newDreamer26/images/bg_02_1920.jpg')` }">
      <h2 class="title">{{ textFor({ en: 'Flagship Luxury', fr: 'Luxe Phare', ar: 'الفخامة الرائدة' }) }}</h2>
      <p class="subTitle">{{ textFor({ en: 'Embrace Heaven and Earth', fr: 'Embrasser Ciel et Terre', ar: 'احتضان السماء والأرض' }) }}</p>
    </section>

    <section class="common commonMax">
      <h3 class="title">{{ textFor({ en: 'Kunpeng Aura', fr: 'Aura Kunpeng', ar: 'هالة الكونغبنغ' }) }}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translate3d(-${currentSlide.kunpeng * 100}%, 0, 0)` }">
          <div class="swiper-slide" v-for="(slide, idx) in kunpengSlides" :key="idx">
            <img :src="slide.image" class="slide-img" />
            <div class="desc-wrap">
              <p class="desc-title">{{ slide.title }}</p>
              <p class="desc-content">{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div v-for="(_, idx) in kunpengSlides" :key="idx" class="pagination-bullet" :class="{ active: currentSlide.kunpeng === idx }" @click="currentSlide.kunpeng = idx"></div>
      </div>
    </section>

    <section class="car-color-container">
      <h3 class="title">{{ textFor({ en: 'Color Vast Realm', fr: 'Couleurs Vaste', ar: 'ألوان المملكة' }) }}</h3>
      <div class="car-swiper-wap">
        <div v-for="(color, idx) in exteriorColors" :key="idx" class="swiper-slide" :style="{ left: currentExteriorColor === idx ? '0%' : '100%' }">
          <img :src="color.carImage" class="swiper-slide-img" />
        </div>
      </div>
      <div class="car-color-list">
        <div v-for="(color, idx) in exteriorColors" :key="idx" class="car-color-item" :class="{ active: currentExteriorColor === idx }" @click="currentExteriorColor = idx">
          <img :src="color.icon" class="img-icon" />
          <p class="color-name">{{ color.name }}</p>
        </div>
      </div>
    </section>

    <section id="section2" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/newDreamer26/images/bg_08_1920.jpg')` }">
      <h2 class="title">{{ textFor({ en: 'Flagship Performance', fr: 'Performance', ar: 'الأداء الرائد' }) }}</h2>
    </section>

    <section class="common">
      <h3 class="title">{{ textFor({ en: 'Super Range', fr: 'Autonomie', ar: 'مدى فائق' }) }}</h3>
      <img src="/assets/OFFICIALVOYAH/newDreamer26/images/sc_12.jpg" class="single-img" />
      <div class="single-description column3">
        <div class="description-item">
          <p class="description-title">350km EV Range</p>
          <p class="description-content">Charge every two weeks</p>
        </div>
        <div class="description-item">
          <p class="description-title">62.5kWh Battery</p>
          <p class="description-content">Like a pure EV SUV</p>
        </div>
        <div class="description-item">
          <p class="description-title">1530km Combined</p>
          <p class="description-content">Top EV experience</p>
        </div>
      </div>
    </section>

    <section id="section3" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/newDreamer26/images/bg_16_1920.jpg')` }">
      <h2 class="title">{{ textFor({ en: 'Flagship Intelligence', fr: 'Intelligence', ar: 'الذكاء الرائد' }) }}</h2>
    </section>

    <section class="common">
      <h3 class="title">{{ textFor({ en: 'Huawei ADS 4', fr: 'Huawei ADS 4', ar: 'Huawei ADS 4' }) }}</h3>
      <div class="single-description column3">
        <div class="description-item">
          <p class="description-title">WEWA Architecture</p>
          <p class="description-content">Superhuman driving decisions</p>
        </div>
        <div class="description-item">
          <p class="description-title">CAS 4.0</p>
          <p class="description-content">130km/h AEB braking</p>
        </div>
        <div class="description-item">
          <p class="description-title">End-to-End Nav</p>
          <p class="description-content">Continuous through gates</p>
        </div>
      </div>
    </section>

    <section id="section4" class="level-one" :style="{ backgroundImage: `url('/assets/OFFICIALVOYAH/newDreamer26/images/bg_22_1920.jpg')` }">
      <h2 class="title">{{ textFor({ en: 'Flagship Safety', fr: 'Sécurité', ar: 'الأمان الرائد' }) }}</h2>
    </section>

    <section class="common">
      <h3 class="title">{{ textFor({ en: 'Body Protection', fr: 'Protection', ar: 'حماية الهيكل' }) }}</h3>
      <img src="/assets/OFFICIALVOYAH/newDreamer26/images/sc_23.jpg" class="single-img" />
      <div class="single-description">
        <div class="description-item">
          <p class="description-title">2000MPa Cage Body</p>
          <p class="description-content">World's first laser welded</p>
        </div>
        <div class="description-item">
          <p class="description-title">5-Layer Protection</p>
          <p class="description-content">110km/h rear collision test</p>
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
const currentSlide = ref({ kunpeng: 0 })
const currentExteriorColor = ref(0)

const chapterSections = computed(() => [
  { id: 'section1', title: textFor({ en: 'Luxury', fr: 'Luxe', ar: 'الفخامة' }) },
  { id: 'section2', title: textFor({ en: 'Performance', fr: 'Perf.', ar: 'الأداء' }) },
  { id: 'section3', title: textFor({ en: 'Intelligent', fr: 'Intel.', ar: 'الذكي' }) },
  { id: 'section4', title: textFor({ en: 'Safety', fr: 'Safe', ar: 'السلامة' }) }
])

const kunpengSlides = computed(() => [
  { image: '/assets/OFFICIALVOYAH/newDreamer26/images/sc_3.jpg', title: textFor({ en: '5.3m+ Body', fr: '5.3m+', ar: '5.3 متر+' }), desc: textFor({ en: 'Extraordinary aura', fr: 'Aura extraordinaire', ar: 'هالة استثنائية' }) },
  { image: '/assets/OFFICIALVOYAH/newDreamer26/images/sc_3-2.jpg', title: textFor({ en: 'Kunpeng Wings', fr: 'Ailes', ar: 'أجنحة' }), desc: textFor({ en: 'Wings of light', fr: 'Ailes lumière', ar: 'أجنحة من الضوء' }) },
  { image: '/assets/OFFICIALVOYAH/newDreamer26/images/sc_3-3.jpg', title: textFor({ en: 'Fuyao Grille', fr: 'Calandre', ar: 'شبكة' }), desc: textFor({ en: 'Majestic lines', fr: 'Lignes majestueuses', ar: 'خطوط majestueuse' }) },
  { image: '/assets/OFFICIALVOYAH/newDreamer26/images/sc_3-4.jpg', title: textFor({ en: 'Blue Indicator', fr: 'Indicateur', ar: 'مؤشر' }), desc: textFor({ en: 'Tech beauty', fr: 'Beauté tech', ar: 'جمال تكنولوجي' }) }
])

const exteriorColors = computed(() => [
  { name: textFor({ en: 'Jinluan Red', fr: 'Rouge', ar: 'أحمر' }), icon: '/assets/OFFICIALVOYAH/newDreamer26/images/icon1.png', carImage: '/assets/OFFICIALVOYAH/newDreamer26/images/car/car1.png' },
  { name: textFor({ en: 'Haiyue Gold', fr: 'Or', ar: 'ذهبي' }), icon: '/assets/OFFICIALVOYAH/newDreamer26/images/icon2.png', carImage: '/assets/OFFICIALVOYAH/newDreamer26/images/car/car2.png' },
  { name: textFor({ en: 'Huiyue Cyan', fr: 'Cyan', ar: 'سيان' }), icon: '/assets/OFFICIALVOYAH/newDreamer26/images/icon3.png', carImage: '/assets/OFFICIALVOYAH/newDreamer26/images/car/car3.png' },
  { name: textFor({ en: 'Xuanying Black', fr: 'Noir', ar: 'أسود' }), icon: '/assets/OFFICIALVOYAH/newDreamer26/images/icon4.png', carImage: '/assets/OFFICIALVOYAH/newDreamer26/images/car/car4.png' },
  { name: textFor({ en: 'Xuri Purple', fr: 'Violet', ar: 'بنفسجي' }), icon: '/assets/OFFICIALVOYAH/newDreamer26/images/icon5.png', carImage: '/assets/OFFICIALVOYAH/newDreamer26/images/car/car5.png' },
  { name: textFor({ en: 'Duruo White', fr: 'Blanc', ar: 'أبيض' }), icon: '/assets/OFFICIALVOYAH/newDreamer26/images/icon6.png', carImage: '/assets/OFFICIALVOYAH/newDreamer26/images/car/car6.png' }
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
.new-dreamer-26-page { background: #000; color: #fff; }
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
.car-nav-item { display: flex; align-items: center; gap: 8px; padding: 8px 12px; cursor: pointer; opacity: 0.6; }
.car-nav-item.active { opacity: 1; }
.level-one { height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; background-size: cover; background-position: center; }
.level-one .title { font-size: 48px; margin-bottom: 20px; }
.level-one .subTitle { font-size: 20px; color: rgba(255,255,255,0.8); }
.common { padding: 80px 40px; }
.commonMax { max-width: 1440px; margin: 0 auto; }
.common .title { font-size: 32px; text-align: center; margin-bottom: 40px; }
.swiper-container { overflow: hidden; }
.swiper-wrapper { display: flex; transition: transform 0.3s; }
.swiper-slide { flex-shrink: 0; width: 100%; }
.slide-img { width: 100%; height: auto; }
.desc-wrap { text-align: center; margin-top: 30px; }
.desc-title { font-size: 24px; margin-bottom: 12px; }
.desc-content { font-size: 16px; color: rgba(255,255,255,0.7); }
.pagination { display: flex; justify-content: center; gap: 12px; margin-top: 40px; }
.pagination-bullet { width: 12px; height: 12px; border-radius: 50%; background: rgba(255,255,255,0.3); cursor: pointer; }
.pagination-bullet.active { background: #fff; }
.car-color-container { padding: 80px 40px; text-align: center; }
.car-swiper-wap { position: relative; height: 400px; margin-bottom: 40px; }
.car-swiper-wap .swiper-slide { position: absolute; top: 0; width: 100%; transition: none; }
.swiper-slide-img { max-height: 400px; object-fit: contain; }
.car-color-list { display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; }
.car-color-item { display: flex; flex-direction: column; align-items: center; gap: 12px; cursor: pointer; opacity: 0.6; }
.car-color-item.active { opacity: 1; }
.img-icon { width: 40px; height: 40px; border-radius: 50%; }
.color-name { font-size: 14px; }
.single-img { width: 100%; max-width: 1200px; height: auto; margin: 0 auto 40px; display: block; }
.single-description { max-width: 1000px; margin: 0 auto; }
.description-item { text-align: center; }
.description-title { font-size: 20px; margin-bottom: 12px; }
.description-content { font-size: 15px; color: rgba(255,255,255,0.7); }
.column3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
@media (max-width: 1024px) { .column3 { grid-template-columns: repeat(2, 1fr); } .level-one .title { font-size: 36px; } }
@media (max-width: 640px) { .column3 { grid-template-columns: 1fr; } .level-one .title { font-size: 28px; } }
</style>
