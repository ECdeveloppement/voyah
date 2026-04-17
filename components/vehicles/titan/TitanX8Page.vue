<template>
  <div class="titan-x8-page">
    <!-- Hero Section -->
    <section class="titan-x8-hero" id="hero">
      <div class="titan-x8-hero-bg">
        <img 
          src="/assets/OFFICIALVOYAH/titanX8/images/sc_1.jpg" 
          alt="Voyah Titan X8"
          class="titan-x8-hero-image"
        />
        <div class="titan-x8-hero-overlay"></div>
      </div>
      <div class="titan-x8-hero-content">
        <div class="titan-x8-hero-inner">
          <img 
            src="/assets/OFFICIALVOYAH/titanX8/images/titan_X8.png" 
            alt="Voyah Titan X8"
            class="titan-x8-hero-logo inview-animated"
          />
          <p class="titan-x8-hero-slogan inview-animated" style="--inview-delay: 0.1s;">
            {{ textFor(heroSlogan) }}
          </p>
          <div class="titan-x8-hero-features inview-animated" style="--inview-delay: 0.2s;">
            <div class="titan-x8-feature-item">
              <h4>{{ textFor(feature1Title) }}</h4>
              <p>{{ textFor(feature1Desc) }}</p>
            </div>
            <div class="titan-x8-feature-item">
              <h4>{{ textFor(feature2Title) }}</h4>
              <p>{{ textFor(feature2Desc) }}</p>
            </div>
            <div class="titan-x8-feature-item">
              <h4>{{ textFor(feature3Title) }}</h4>
              <p>{{ textFor(feature3Desc) }}</p>
            </div>
            <div class="titan-x8-feature-item">
              <h4>{{ textFor(feature4Title) }}</h4>
              <p>{{ textFor(feature4Desc) }}</p>
            </div>
          </div>
          <div class="titan-x8-hero-actions inview-animated" style="--inview-delay: 0.3s;">
            <BaseButton :to="buildPath('book-drive.html')" variant="primary" class="titan-x8-btn-primary">
              {{ textFor(bookDriveText) }}
            </BaseButton>
            <BaseButton :to="buildPath('store.html')" variant="secondary" class="titan-x8-btn-secondary">
              {{ textFor(orderNowText) }}
            </BaseButton>
          </div>
        </div>
      </div>
      <div class="titan-x8-hero-disclaimer">
        {{ textFor(heroDisclaimer) }}
      </div>
    </section>

    <!-- Chapter Navigation -->
    <ModelChapterNav :sections="chapterLinks" variant="titan-x8" />

    <!-- Section 1: Courtyard Space -->
    <section class="titan-x8-section-full" id="section1" style="background-image: url('/assets/OFFICIALVOYAH/titanX8/images/sc_2.jpg')">
      <div class="titan-x8-section-content">
        <h2 class="titan-x8-section-title inview-animated">{{ textFor(section1Title) }}</h2>
        <p class="titan-x8-section-subtitle inview-animated" style="--inview-delay: 0.1s;">{{ textFor(section1Subtitle) }}</p>
      </div>
    </section>

    <!-- Space Features -->
    <section class="titan-x8-features-section" id="space-features">
      <div class="titan-x8-features-grid">
        <div v-for="(feature, idx) in spaceFeatures" :key="idx" class="titan-x8-feature-card">
          <img :src="feature.image" :alt="textFor(feature.title)" />
          <h4>{{ textFor(feature.title) }}</h4>
          <p>{{ textFor(feature.desc) }}</p>
        </div>
      </div>
    </section>

    <!-- Section 2: Zero-Gravity Seats -->
    <section class="titan-x8-section-full" id="section2" style="background-image: url('/assets/OFFICIALVOYAH/titanX8/images/sc_6.jpg')">
      <div class="titan-x8-section-content">
        <h2 class="titan-x8-section-title inview-animated">{{ textFor(section2Title) }}</h2>
        <p class="titan-x8-section-subtitle inview-animated" style="--inview-delay: 0.1s;">{{ textFor(section2Subtitle) }}</p>
      </div>
    </section>

    <!-- Seat Features -->
    <section class="titan-x8-seats-section" id="seats">
      <h3 class="titan-x8-section-heading inview-animated">{{ textFor(seatsTitle) }}</h3>
      <div class="titan-x8-seats-grid">
        <div v-for="(seat, idx) in seatFeatures" :key="idx" class="titan-x8-seat-card">
          <img :src="seat.image" :alt="textFor(seat.title)" />
          <div class="titan-x8-seat-info">
            <h4>{{ textFor(seat.title) }}</h4>
            <p>{{ textFor(seat.desc) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Huawei ADS -->
    <section class="titan-x8-section-full" id="section3" style="background-image: url('/assets/OFFICIALVOYAH/titanX8/images/sc_9.jpg')">
      <div class="titan-x8-section-content">
        <h2 class="titan-x8-section-title inview-animated">{{ textFor(section3Title) }}</h2>
        <p class="titan-x8-section-subtitle inview-animated" style="--inview-delay: 0.1s;">{{ textFor(section3Subtitle) }}</p>
      </div>
    </section>

    <!-- ADAS Features -->
    <section class="titan-x8-adas-section" id="adas">
      <div class="titan-x8-adas-content">
        <h3 class="titan-x8-section-heading inview-animated">{{ textFor(adasTitle) }}</h3>
        <div class="titan-x8-adas-grid">
          <div v-for="(item, idx) in adasFeatures" :key="idx" class="titan-x8-adas-card">
            <div class="titan-x8-adas-icon">
              <img :src="item.icon" :alt="textFor(item.title)" v-if="item.icon" />
            </div>
            <h4>{{ textFor(item.title) }}</h4>
            <p>{{ textFor(item.desc) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Range & Charging -->
    <section class="titan-x8-section-full" id="section4" style="background-image: url('/assets/OFFICIALVOYAH/titanX8/images/sc_12.jpg')">
      <div class="titan-x8-section-content">
        <h2 class="titan-x8-section-title inview-animated">{{ textFor(section4Title) }}</h2>
        <p class="titan-x8-section-subtitle inview-animated" style="--inview-delay: 0.1s;">{{ textFor(section4Subtitle) }}</p>
      </div>
    </section>

    <!-- Range Specs -->
    <section class="titan-x8-specs-section" id="specs">
      <div class="titan-x8-specs-grid">
        <div class="titan-x8-spec-card">
          <h4>{{ textFor(evRangeTitle) }}</h4>
          <div class="titan-x8-spec-value">750<span>km</span></div>
          <p>{{ textFor(evRangeDesc) }}</p>
        </div>
        <div class="titan-x8-spec-card">
          <h4>{{ textFor(phevRangeTitle) }}</h4>
          <div class="titan-x8-spec-value">370<span>km</span></div>
          <p>{{ textFor(phevRangeDesc) }}</p>
        </div>
        <div class="titan-x8-spec-card">
          <h4>{{ textFor(chargingTitle) }}</h4>
          <div class="titan-x8-spec-value">20<span>min</span></div>
          <p>{{ textFor(chargingDesc) }}</p>
        </div>
      </div>
    </section>

    <!-- Section 5: Chassis -->
    <section class="titan-x8-section-full" id="section5" style="background-image: url('/assets/OFFICIALVOYAH/titanX8/images/sc_15.jpg')">
      <div class="titan-x8-section-content">
        <h2 class="titan-x8-section-title inview-animated">{{ textFor(section5Title) }}</h2>
        <p class="titan-x8-section-subtitle inview-animated" style="--inview-delay: 0.1s;">{{ textFor(section5Subtitle) }}</p>
      </div>
    </section>

    <!-- Chassis Features -->
    <section class="titan-x8-chassis-section" id="chassis">
      <h3 class="titan-x8-section-heading inview-animated">{{ textFor(chassisTitle) }}</h3>
      <div class="titan-x8-chassis-grid">
        <div v-for="(item, idx) in chassisFeatures" :key="idx" class="titan-x8-chassis-card">
          <img :src="item.image" :alt="textFor(item.title)" />
          <h4>{{ textFor(item.title) }}</h4>
          <p>{{ textFor(item.desc) }}</p>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="titan-x8-gallery-section" id="gallery">
      <h3 class="titan-x8-gallery-title inview-animated">{{ textFor(galleryTitle) }}</h3>
      <div class="titan-x8-gallery-grid">
        <div v-for="(img, idx) in galleryImages" :key="idx" class="titan-x8-gallery-item">
          <img :src="img" :alt="`Titan X8 ${idx + 1}`" />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="titan-x8-cta">
      <div class="titan-x8-cta-content">
        <h2 class="titan-x8-cta-title">{{ textFor(ctaTitle) }}</h2>
        <p class="titan-x8-cta-subtitle">{{ textFor(ctaSubtitle) }}</p>
        <div class="titan-x8-cta-actions">
          <BaseButton :to="buildPath('book-drive.html')" variant="primary">
            {{ textFor(bookDriveText) }}
          </BaseButton>
          <BaseButton :to="buildPath('store.html')" variant="secondary">
            {{ textFor(findStoreText) }}
          </BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '~/components/common/BaseButton.vue'
import ModelChapterNav from '~/components/page/model/ModelChapterNav.vue'
import { useSiteContent } from '~/composables/useSiteContent'

const { textFor, buildPath } = useSiteContent()

const t = (en: string, fr: string, ar: string) => ({ en, fr, ar })

// Hero texts
const heroSlogan = t('Courtyard-class Large 5-Seat SUV', 'SUV 5 places grande classe cour', 'سيارة الدفع الرباعي الفاخرة بـ5 مقاعد')
const heroDisclaimer = t('*Range parameters are CLTC comprehensive工况 data tested under full fuel and full charge conditions. Actual range may vary due to weather, driving habits, load and other objective factors, for reference only. *Above information highlights product features, specific configurations subject to official configuration table.', '*Les paramètres d\'autonomie sont des données CLTC testées en conditions plein carburant et pleine charge. L\'autonomie réelle peut varier en fonction de la météo, des habitudes de conduite, de la charge et autres facteurs objectifs, pour référence uniquement.', '*معلمات المدى هي بيانات CLTC الشاملة المختبرة في ظل ظروف الوقود الكامل والشحن الكامل. قد يختلف المدى الفعلي بسبب الطقس وعادات القيادة والحمولة وعوامل موضوعية أخرى، للمرجعية فقط.')

const feature1Title = t('Huawei Qiankun', 'Huawei Qiankun', 'هواوي كيانكون')
const feature1Desc = t('896-line Laser Radar', 'Radar laser 896 lignes', 'رادار ليزر 896 خط')

const feature2Title = t('Second Row Dual Enjoyment', 'Double plaisir deuxième rangée', 'استمتاع مزدوج للصف الثاني')
const feature2Desc = t('Zero-Gravity Seats', 'Sièges zéro-gravité', 'مقاعد بلا جاذبية')

const feature3Title = t('Three-Chamber', 'Trois chambres', 'ثلاث غرف')
const feature3Desc = t('Air Suspension', 'Suspension pneumatique', 'تعليق هوائي')

const feature4Title = t('750km EV Range', '750km autonomie EV', 'مدى 750 كم للكهربائية')
const feature4Desc = t('370km PHEV Range', '370km autonomie PHEV', 'مدى 370 كم للهايبريد')

const bookDriveText = t('Book test drive', 'Réserver un essai', 'حجز تجربة قيادة')
const orderNowText = t('Order now', 'Commander maintenant', 'اطلب الآن')
const findStoreText = t('Find a store', 'Trouver un magasin', 'ابحث عن متجر')

// Chapter links
const chapterLinks = [
  { id: 'hero', label: textFor(t('Overview', 'Aperçu', 'نظرة عامة')) },
  { id: 'section1', label: textFor(t('Space', 'Espace', 'المساحة')) },
  { id: 'section2', label: textFor(t('Seats', 'Sièges', 'المقاعد')) },
  { id: 'section3', label: textFor(t('Intelligence', 'Intelligence', 'الذكاء')) },
  { id: 'section4', label: textFor(t('Range', 'Autonomie', 'المدى')) },
  { id: 'section5', label: textFor(t('Chassis', 'Châssis', 'الهيكل')) }
]

// Section 1: Courtyard Space
const section1Title = t('Courtyard-class Space', 'Espace classe cour', 'مساحة فئة الفناء')
const section1Subtitle = t('Garden-level comfort, villa-class enjoyment', 'Confort niveau jardin, plaisir classe villa', 'راحة مستوى الحديقة، متعة فئة الفيلا')

const spaceFeatures = [
  {
    image: '/assets/OFFICIALVOYAH/titanX8/images/sc_3.jpg',
    title: t('Large 5-Seat Layout', 'Grande disposition 5 places', 'تخطيط 5 مقاعد كبير'),
    desc: t('Spacious interior space, every seat is a VIP seat', 'Intérieur spacieux, chaque siège est un siège VIP', 'مساحة داخلية واسعة، كل مقعد هو مقعد VIP')
  },
  {
    image: '/assets/OFFICIALVOYAH/titanX8/images/sc_4.jpg',
    title: t('Flexible Storage', 'Rangement flexible', 'تخزين مرن'),
    desc: t('Multiple storage spaces to meet various travel needs', 'Multiples espaces de rangement pour répondre à divers besoins de voyage', 'مساحات تخزين متعددة لتلبية احتياجات السفر المختلفة')
  },
  {
    image: '/assets/OFFICIALVOYAH/titanX8/images/sc_5.jpg',
    title: t('Panoramic Sunroof', 'Toit panoramique', 'سقف بانورامي'),
    desc: t('Extra-large opening, enjoy the infinite scenery', 'Ouverture ultra-large, profitez du paysage infini', 'فتحة كبيرة جداً، استمتع بالمناظر اللانهائية')
  }
]

// Section 2: Zero-Gravity Seats
const section2Title = t('Zero-Gravity Seats', 'Sièges zéro-gravité', 'مقاعد بلا جاذبية')
const section2Subtitle = t('NASA-inspired design, stress-free riding', 'Design inspiré de la NASA, sans stress', 'تصميم مستوحى من ناسا، ركوب خالٍ من الإجهاد')

const seatsTitle = t('Second Row Dual Enjoyment', 'Double plaisir deuxième rangée', 'استمتاع مزدوج للصف الثاني')

const seatFeatures = [
  {
    image: '/assets/OFFICIALVOYAH/titanX8/images/sc_7.jpg',
    title: t('Zero-Gravity Mode', 'Mode zéro-gravité', 'وضع بلا جاذبية'),
    desc: t('One-click zero-gravity posture, evenly distributed body pressure', 'Posture zéro-gravité en un clic, pression corporelle uniformément répartie', 'وضع بلا جاذبية بنقرة واحدة، ضغط الجسم موزع بالتساوي')
  },
  {
    image: '/assets/OFFICIALVOYAH/titanX8/images/sc_8.jpg',
    title: t('Massage Function', 'Fonction massage', 'وظيفة التدليك'),
    desc: t('Multiple massage modes, enjoy SPA-level comfort', 'Multiples modes de massage, confort niveau SPA', 'أوضاع تدليك متعددة، استمتع براحة مستوى السبا')
  }
]

// Section 3: Huawei ADS
const section3Title = t('Huawei Qiankun ADS', 'Huawei Qiankun ADS', 'نظام هواوي كيانكون ADS')
const section3Subtitle = t('896-line laser radar, leading intelligent driving', 'Radar laser 896 lignes, conduite intelligente leader', 'رادار ليزر 896 خط، قيادة ذكية رائدة')

const adasTitle = t('Intelligent Driving System', 'Système de conduite intelligente', 'نظام القيادة الذكية')

const adasFeatures = [
  {
    title: t('896-Line Laser Radar', 'Radar laser 896 lignes', 'رادار ليزر 896 خط'),
    desc: t('Ultra-long detection range, high-precision environmental perception', 'Portée de détection ultra-longue, perception environnementale haute précision', 'مدى كشف فائق الطول، إدراك بيئي عالي الدقة'),
    icon: ''
  },
  {
    title: t('Full-Scene Coverage', 'Couverture toute scène', 'تغطية جميع المشاهد'),
    desc: t('City roads, highways, parking all covered', 'Routes urbaines, autoroutes, stationnement tous couverts', 'الطرق الحضرية والطرق السريعة والوقوف مغطاة بالكامل'),
    icon: ''
  },
  {
    title: t('Smart Parking', 'Stationnement intelligent', 'الوقوف الذكي'),
    desc: t('Automatic parking, worry-free in narrow spaces', 'Stationnement automatique, sans souci dans les espaces étroits', 'الوقوف التلقائي، بلا قلق في الأماكن الضيقة'),
    icon: ''
  }
]

// Section 4: Range & Charging
const section4Title = t('Long Range, Fast Charging', 'Longue autonomie, charge rapide', 'مدى طويل، شحن سريع')
const section4Subtitle = t('No range anxiety, travel freely', 'Pas d\'anxiété d\'autonomie, voyagez librement', 'لا قلق من المدى، سافر بحرية')

const evRangeTitle = t('Pure Electric Range', 'Autonomie purement électrique', 'مدى كهربائي خالص')
const evRangeDesc = t('CLTC 750km range, city commuting worry-free', 'Autonomie CLTC 750km, déplacements urbains sans souci', 'مدى CLTC 750 كم، تنقل حضري بلا قلق')

const phevRangeTitle = t('PHEV Electric Range', 'Autonomie électrique PHEV', 'مدى هايبريد كهربائي')
const phevRangeDesc = t('CLTC 370km pure electric, daily commute zero fuel', '370km purement électrique CLTC, trajets quotidiens sans carburant', '370 كم كهربائية خالصة CLTC، تنقل يومي بدون وقود')

const chargingTitle = t('Fast Charging', 'Charge rapide', 'الشحن السريع')
const chargingDesc = t('20%-80% in 20 minutes, coffee break and go', '20%-80% en 20 minutes, pause café et repartez', 'من 20% إلى 80% في 20 دقيقة، استراحة قهوة وانطلق')

// Section 5: Chassis
const section5Title = t('Million-Class Chassis', 'Châssis million-classe', 'هيكل فئة المليون')
const section5Subtitle = t('Three-chamber air suspension, magic carpet ride', 'Suspension pneumatique trois chambres, conduite tapis magique', 'تعليق هوائي بـ3 غرف، قيادة بسجادة سحرية')

const chassisTitle = t('Three-Chamber Air Suspension', 'Suspension pneumatique trois chambres', 'تعليق هوائي بـ3 غرف')

const chassisFeatures = [
  {
    image: '/assets/OFFICIALVOYAH/titanX8/images/sc_16.jpg',
    title: t('Three-Chamber Air Suspension', 'Suspension pneumatique trois chambres', 'تعليق هوائي بـ3 غرف'),
    desc: t('Adjustable stiffness and height, comfortable on any road', 'Rigidité et hauteur ajustables, confortable sur toute route', 'صلابة وارتفاع قابلين للتعديل، مريح على أي طريق')
  },
  {
    image: '/assets/OFFICIALVOYAH/titanX8/images/sc_17.jpg',
    title: t('CDC Continuous Damping', 'Amortissement continu CDC', 'تخميد مستمر CDC'),
    desc: t('Real-time adjustment, smooth and stable', 'Ajustement en temps réel, doux et stable', 'تعديل في الوقت الفعلي، سلس ومستقر')
  },
  {
    image: '/assets/OFFICIALVOYAH/titanX8/images/sc_18.jpg',
    title: t('Dual Motor 4WD', '4WD double moteur', 'دفع رباعي بمحركين'),
    desc: t('Powerful output, confident in all conditions', 'Sortie puissante, confiance dans toutes les conditions', 'قوة خرج عالية، ثقة في جميع الظروف')
  }
]

// Gallery
const galleryTitle = t('Exterior Gallery', 'Galerie extérieure', 'معرض الخارج')

const galleryImages = [
  '/assets/OFFICIALVOYAH/titanX8/images/sc_19.jpg',
  '/assets/OFFICIALVOYAH/titanX8/images/sc_20.jpg',
  '/assets/OFFICIALVOYAH/titanX8/images/sc_21.jpg',
  '/assets/OFFICIALVOYAH/titanX8/images/sc_22.jpg'
]

// CTA
const ctaTitle = t('Experience Voyah Titan X8', 'Découvrez le Voyah Titan X8', 'جرب Voyah Titan X8')
const ctaSubtitle = t('Book a test drive today', "Réservez un essai aujourd'hui", 'احجز تجربة قيادة اليوم')
</script>

<style scoped>
.titan-x8-page {
  background: #000;
  color: #fff;
}

/* Hero Section */
.titan-x8-hero {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.titan-x8-hero-bg {
  position: absolute;
  inset: 0;
}

.titan-x8-hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.titan-x8-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(5, 8, 12, 0.3) 0%,
    rgba(5, 8, 12, 0.5) 50%,
    rgba(5, 8, 12, 0.8) 100%
  );
}

.titan-x8-hero-content {
  position: relative;
  z-index: 2;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 20px 160px;
}

.titan-x8-hero-inner {
  text-align: center;
  color: #fff;
  max-width: 1200px;
}

.titan-x8-hero-logo {
  width: min(350px, 60vw);
  margin-bottom: 20px;
  filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.4));
}

.titan-x8-hero-slogan {
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  letter-spacing: 0.15em;
  margin-bottom: 30px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.95);
}

.titan-x8-hero-features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 900px;
  margin: 0 auto 40px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.titan-x8-feature-item {
  text-align: center;
}

.titan-x8-feature-item h4 {
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  font-weight: 600;
  margin-bottom: 6px;
  color: #fff;
}

.titan-x8-feature-item p {
  font-size: clamp(0.75rem, 1.2vw, 0.9rem);
  opacity: 0.8;
  color: rgba(255, 255, 255, 0.9);
}

.titan-x8-hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.titan-x8-btn-primary {
  background: rgba(255, 255, 255, 0.95);
  color: #101720;
  border: none;
  min-width: 160px;
}

.titan-x8-btn-primary:hover {
  background: #fff;
  transform: translateY(-2px);
}

.titan-x8-btn-secondary {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.5);
  min-width: 160px;
}

.titan-x8-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.7);
}

.titan-x8-hero-disclaimer {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  font-size: 11px;
  opacity: 0.6;
  text-align: center;
  z-index: 2;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
}

/* Full-screen sections */
.titan-x8-section-full {
  position: relative;
  height: 100vh;
  min-height: 600px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.titan-x8-section-content {
  text-align: center;
  color: #fff;
  padding: 20px;
}

.titan-x8-section-title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 600;
  margin-bottom: 16px;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
}

.titan-x8-section-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  opacity: 0.9;
  letter-spacing: 0.15em;
}

/* Features Section */
.titan-x8-features-section {
  padding: 80px 20px;
  background: #0a0a0a;
}

.titan-x8-features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.titan-x8-feature-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.titan-x8-feature-card:hover {
  transform: translateY(-8px);
}

.titan-x8-feature-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.titan-x8-feature-card h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 20px 20px 10px;
  color: #fff;
}

.titan-x8-feature-card p {
  font-size: 0.95rem;
  opacity: 0.8;
  margin: 0 20px 20px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.85);
}

/* Seats Section */
.titan-x8-seats-section {
  padding: 80px 20px;
  background: #000;
}

.titan-x8-section-heading {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  text-align: center;
  margin-bottom: 50px;
  font-weight: 600;
  color: #fff;
}

.titan-x8-seats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

.titan-x8-seat-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  overflow: hidden;
}

.titan-x8-seat-card img {
  width: 100%;
  height: 280px;
  object-fit: cover;
}

.titan-x8-seat-info {
  padding: 24px;
}

.titan-x8-seat-info h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #fff;
}

.titan-x8-seat-info p {
  font-size: 1rem;
  opacity: 0.8;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.85);
}

/* ADAS Section */
.titan-x8-adas-section {
  padding: 80px 20px;
  background: #0a0a0a;
}

.titan-x8-adas-content {
  max-width: 1000px;
  margin: 0 auto;
}

.titan-x8-adas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.titan-x8-adas-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.titan-x8-adas-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
}

.titan-x8-adas-card h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: #fff;
}

.titan-x8-adas-card p {
  font-size: 0.95rem;
  opacity: 0.8;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.85);
}

/* Specs Section */
.titan-x8-specs-section {
  padding: 80px 20px;
  background: #000;
}

.titan-x8-specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.titan-x8-spec-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 40px 30px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.titan-x8-spec-card h4 {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 20px;
  opacity: 0.9;
  color: rgba(255, 255, 255, 0.9);
}

.titan-x8-spec-value {
  font-size: 3.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 15px;
  line-height: 1;
}

.titan-x8-spec-value span {
  font-size: 1.2rem;
  font-weight: 400;
  margin-left: 4px;
  color: rgba(255, 255, 255, 0.7);
}

.titan-x8-spec-card p {
  font-size: 0.9rem;
  opacity: 0.7;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
}

/* Chassis Section */
.titan-x8-chassis-section {
  padding: 80px 20px;
  background: #0a0a0a;
}

.titan-x8-chassis-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.titan-x8-chassis-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  overflow: hidden;
}

.titan-x8-chassis-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.titan-x8-chassis-card h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 20px 20px 10px;
  color: #fff;
}

.titan-x8-chassis-card p {
  font-size: 0.95rem;
  opacity: 0.8;
  margin: 0 20px 20px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.85);
}

/* Gallery Section */
.titan-x8-gallery-section {
  padding: 80px 20px;
  background: #000;
}

.titan-x8-gallery-title {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  text-align: center;
  margin-bottom: 50px;
  font-weight: 600;
  color: #fff;
}

.titan-x8-gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.titan-x8-gallery-item {
  border-radius: 12px;
  overflow: hidden;
}

.titan-x8-gallery-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.titan-x8-gallery-item:hover img {
  transform: scale(1.05);
}

/* CTA Section */
.titan-x8-cta {
  padding: 100px 20px;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  text-align: center;
  color: #fff;
}

.titan-x8-cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.titan-x8-cta-title {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 16px;
  font-weight: 600;
}

.titan-x8-cta-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  opacity: 0.8;
  margin-bottom: 32px;
}

.titan-x8-cta-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .titan-x8-hero {
    min-height: auto;
  }
  
  .titan-x8-hero-content {
    padding: 100px 16px 180px;
  }
  
  .titan-x8-hero-features {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  
  .titan-x8-hero-disclaimer {
    font-size: 10px;
    padding: 0 10px;
  }
  
  .titan-x8-section-full {
    min-height: 400px;
  }
  
  .titan-x8-seats-grid {
    grid-template-columns: 1fr;
  }
  
  .titan-x8-spec-value {
    font-size: 2.5rem;
  }
  
  .titan-x8-gallery-item img {
    height: 200px;
  }
}

@media (max-width: 480px) {
  .titan-x8-hero-features {
    grid-template-columns: 1fr;
  }
}
</style>
