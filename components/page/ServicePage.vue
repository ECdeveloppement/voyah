<template>
  <div class="service-page">
    <section ref="heroReveal" class="service-hero">
      <img class="service-hero__image" data-reveal :src="asset('/reference-models/service-customer-care.png')" :alt="textFor(labels.title)" />
      <div class="service-hero__overlay">
        <h1 data-reveal>{{ textFor(labels.title) }}</h1>
      </div>
    </section>

    <section ref="careReveal" class="care-section">
      <div class="care-grid">
        <div class="care-content" data-reveal>
          <h2>{{ textFor(labels.careTitle) }}</h2>
          <p class="care-intro">{{ textFor(labels.careIntro) }}</p>

          <ul class="care-list">
            <li class="care-item">
              <span class="care-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>
              <div class="care-text">
                <h3>{{ textFor(labels.care1Title) }}</h3>
                <p>{{ textFor(labels.care1Desc) }}</p>
              </div>
            </li>

            <li class="care-item">
              <span class="care-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 3h12l4 6-10 12L2 9z" />
                  <path d="M2 9h20" />
                  <path d="M12 21 9 9l3-6 3 6z" />
                </svg>
              </span>
              <div class="care-text">
                <h3>{{ textFor(labels.care2Title) }}</h3>
                <p>{{ textFor(labels.care2Desc) }}</p>
              </div>
            </li>

            <li class="care-item">
              <span class="care-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path d="M12 2a7 7 0 0 0-4 12.7V18h8v-3.3A7 7 0 0 0 12 2z" />
                </svg>
              </span>
              <div class="care-text">
                <h3>{{ textFor(labels.care3Title) }}</h3>
                <p>{{ textFor(labels.care3Desc) }}</p>
              </div>
            </li>

            <li class="care-item">
              <span class="care-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.2-5.4-2.9-5.4 2.9 1-6.2L3.2 9.5l6.1-.9z" />
                </svg>
              </span>
              <div class="care-text">
                <h3>{{ textFor(labels.care4Title) }}</h3>
                <p>{{ textFor(labels.care4Desc) }}</p>
              </div>
            </li>

            <li class="care-item">
              <img
                class="care-icon-image"
                :src="asset('/voyah-resources/service/icons/service-digital-followup.png')"
                :alt="textFor(labels.care5Title)"
                loading="lazy"
              />
              <div class="care-text">
                <h3>{{ textFor(labels.care5Title) }}</h3>
                <p>{{ textFor(labels.care5Desc) }}</p>
              </div>
            </li>
          </ul>

          <button type="button" class="base-button primary care-cta" @click="scrollToAppointment">
            {{ textFor(labels.careCta) }}
          </button>
        </div>

        <div class="care-media" data-reveal>
          <img :src="asset('/assets/voyah/home-image-11.jpg')" :alt="textFor(labels.careTitle)" loading="lazy" />
        </div>
      </div>
    </section>

    <section ref="appointmentReveal" id="rendez-vous" class="appointment-section">
      <div class="appointment-inner" data-reveal>
        <h2>{{ textFor(labels.appointmentTitle) }}</h2>
        <p class="appointment-intro">{{ textFor(labels.appointmentIntro) }}</p>
        <div class="appointment-card">
          <LeadForm form="appointment" />
        </div>
      </div>
    </section>

    <section ref="warrantyReveal" class="warranty-section">
      <div class="warranty-grid">
        <div class="warranty-content" data-reveal>
          <h2>{{ textFor(labels.warrantyTitle) }}</h2>
          <p class="warranty-intro">
            {{ textFor(labels.warrantyIntro1) }}
            <br />
            {{ textFor(labels.warrantyIntro2) }}
          </p>

          <ul class="warranty-list">
            <li class="warranty-item">
              <img
                class="warranty-badge-image"
                :src="asset('/voyah-resources/service/icons/warranty-badge-first-service.png')"
                :alt="textFor(labels.warrantyBadge1)"
                loading="lazy"
              />
              <div class="warranty-text">
                <h3>{{ textFor(labels.warranty1Title) }}</h3>
                <p>{{ textFor(labels.warranty1Desc) }}</p>
              </div>
            </li>

            <li class="warranty-item">
              <img
                class="warranty-badge-image"
                :src="asset('/voyah-resources/service/icons/warranty-badge-vehicle.png')"
                :alt="textFor(labels.warrantyBadge2)"
                loading="lazy"
              />
              <div class="warranty-text">
                <h3>{{ textFor(labels.warranty2Title) }}</h3>
                <p>{{ textFor(labels.warranty2Desc) }}</p>
              </div>
            </li>

            <li class="warranty-item">
              <span class="warranty-badge-text" aria-hidden="true">
                <strong>{{ textFor(labels.warrantyBadge3Top) }}</strong>
                <small>{{ textFor(labels.warrantyBadge3Bottom) }}</small>
              </span>
              <div class="warranty-text">
                <h3>{{ textFor(labels.warranty3Title) }}</h3>
                <p>{{ textFor(labels.warranty3Desc) }}</p>
              </div>
            </li>
          </ul>

          <p class="warranty-footnote">{{ textFor(labels.warrantyFootnote) }}</p>
        </div>

        <div class="warranty-media" data-reveal>
          <img :src="asset('/assets/voyah/home-image-13.jpg')" :alt="textFor(labels.warrantyTitle)" loading="lazy" />
        </div>
      </div>
    </section>

    <div ref="contactReveal">
      <ContactPage
        :map-url="serviceMapUrl"
        :location-url="serviceLocationUrl"
        :map-zoom="15"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { t } from '~/data/dealer'
import ContactPage from '~/components/page/ContactPage.vue'
import LeadForm from '~/components/forms/LeadForm.vue'
import { useSectionReveal } from '~/composables/useSectionReveal'
import { useSiteContent } from '~/composables/useSiteContent'

const { textFor } = useSiteContent()

/** Lien court et carte de la page Service uniquement (le reste du site garde l'ancienne adresse). */
const serviceLocationUrl = 'https://maps.app.goo.gl/LoHRXkBkXWyg5g427?g_st=aw'
const serviceMapUrl = 'https://www.google.com/maps?q=Renault+Ezzahra+Le+Garage%2C+km13+GP1%2C+Ez+Zahra+2034'

/** Version de cache des visuels Service : à incrémenter après chaque remplacement de fichier. */
const serviceAssetVersion = '20261119'
const asset = (path: string) => `${path}?v=${serviceAssetVersion}`

const heroReveal = useSectionReveal({ y: 0, scale: 1.07, duration: 1.2, stagger: 0.25 })
const careReveal = useSectionReveal({ y: 30, stagger: 0.14 })
const appointmentReveal = useSectionReveal({ y: 24, duration: 0.8 })
const warrantyReveal = useSectionReveal({ y: 30, stagger: 0.14 })
const contactReveal = useSectionReveal({ y: 24, duration: 0.8 })

const scrollToAppointment = () => {
  appointmentReveal.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const labels = {
  title: t('Voyah Service', 'Service Voyah', 'خدمات Voyah'),
  careTitle: t(
    'Exceptional care. At every step.',
    'Des soins exceptionnels. À chaque étape.',
    'عناية استثنائية في كل مرحلة.'
  ),
  careIntro: t(
    'VOYAH service is designed to give you peace of mind from the moment you take the wheel. From routine maintenance to software updates, our dedicated service network guarantees optimal performance in every circumstance for your VOYAH.',
    'Le service VOYAH est conçu pour vous offrir une tranquillité d’esprit dès que vous prenez le volant. De l’entretien courant aux mises à jour logicielles, notre réseau de service dédié garantit des performances optimales en toutes circonstances pour votre VOYAH.',
    'صُممت خدمة فواه لتمنحك راحة البال منذ لحظة إمساك المقود. من الصيانة الدورية إلى تحديثات البرمجيات، تضمن شبكة الخدمة المخصصة لدينا أداءً أمثلاً في كل الظروف لسيارتك فواه.'
  ),
  care1Title: t(
    'Complete certified expertise in repairing electric (EV) and plug-in hybrid vehicles.',
    'Expertise certifiée complète en réparation des véhicules électriques (EV) et hybrides rechargeables.',
    'خبرة معتمدة كاملة في إصلاح المركبات الكهربائية (EV) والهجينة القابلة للشحن.'
  ),
  care1Desc: t(
    'Our qualified specialists handle every vehicle with precision and care.',
    'Nos spécialistes qualifiés manipulent chaque véhicule avec précision et soin.',
    'يتعامل متخصصونا المؤهلون مع كل مركبة بدقة وعناية.'
  ),
  care2Title: t('Genuine parts', 'Pièces d’origine', 'قطع غيار أصلية'),
  care2Desc: t(
    'Only certified VOYAH components guarantee reliability and longevity.',
    'Seuls des composants VOYAH certifiés garantissent fiabilité et longévité.',
    'قطع فواه المعتمدة وحدها تضمن الموثوقية وطول العمر.'
  ),
  care3Title: t('Smart diagnostics', 'Diagnostic intelligent', 'تشخيص ذكي'),
  care3Desc: t(
    'Advanced digital tools detect and resolve problems proactively.',
    'Les outils numériques avancés détectent et résolvent les problèmes de manière proactive.',
    'تكتشف الأدوات الرقمية المتقدمة المشكلات وتحلها بشكل استباقي.'
  ),
  care4Title: t('Seamless experience', 'Expérience sans faille', 'تجربة بلا خلل'),
  care4Desc: t(
    'Easy booking, transparent pricing and exceptional assistance.',
    'Réservation facile, prix transparents et assistance exceptionnelle.',
    'حجز سهل وأسعار شفافة ومساندة استثنائية.'
  ),
  care5Title: t('Online tracking and digital assistance', 'Suivi en ligne et assistance digitale', 'متابعة إلكترونية ومساندة رقمية'),
  care5Desc: t(
    'Follow your services with ease thanks to our digital solutions and online assistance, for quick support that is accessible at any time.',
    'Bénéficiez d’un suivi simplifié de vos services grâce à nos solutions digitales et à une assistance en ligne, pour un accompagnement rapide et accessible à tout moment.',
    'تابع خدماتك بسهولة بفضل حلولنا الرقمية والمساندة عبر الإنترنت، لمرافقة سريعة ومتاحة في أي وقت.'
  ),
  careCta: t('Book your appointment', 'Réservez votre rendez-vous', 'احجز موعدك'),
  appointmentTitle: t('Book an appointment', 'Prenez rendez-vous', 'احجز موعداً'),
  appointmentIntro: t(
    'Schedule your visit to the VOYAH workshop and our after-sales team confirms the slot by phone.',
    'Planifiez votre passage à l’atelier VOYAH ; notre service après-vente confirme le créneau par téléphone.',
    'حدد موعد زيارتك لورشة فواه وسيتواصل معك فريق ما بعد البيع لتأكيد الموعد هاتفياً.'
  ),
  warrantyTitle: t(
    'Guaranteed confidence. For every journey.',
    'Confiance garantie. Pour chaque voyage.',
    'ثقة مضمونة. لكل رحلة.'
  ),
  warrantyIntro1: t(
    'The VOYAH warranty is designed to give you total peace of mind from the very first day.',
    'La garantie VOYAH est conçue pour vous offrir une tranquillité d’esprit totale dès le premier jour.',
    'صُمم ضمان فواه ليمنحك راحة بال كاملة منذ اليوم الأول.'
  ),
  warrantyIntro2: t(
    'From essential components to advanced electrical systems, your vehicle is protected by complete coverage.',
    'Des composants essentiels aux systèmes électriques de pointe, votre véhicule est protégé par une couverture complète.',
    'من المكونات الأساسية إلى الأنظمة الكهربائية المتقدمة، مركبتك محمية بتغطية شاملة.'
  ),
  warrantyBadge1: t(
    'First service 10,000 km and unlimited kilometres',
    'Première révision 10.000 km et kilomètres illimités',
    'الصيانة الأولى 10.000 كم وكيلومترات غير محدودة'
  ),
  warrantyBadge2: t('6 years and/or 200,000 km', '6 ans et/ou 200.000 km', '6 سنوات و/أو 200.000 كم'),
  warrantyBadge3Top: t('12 months', '12 mois', '12 شهراً'),
  warrantyBadge3Bottom: t('or 20,000 km', 'ou 20.000 km', 'أو 20.000 كم'),
  warranty1Title: t(
    'Battery and power supply protection*',
    'Protection de la batterie et de l’alimentation*',
    'حماية البطارية ونظام التغذية*'
  ),
  warranty1Desc: t(
    'Covers high-voltage battery systems, motors and electric drive systems.',
    'Couvre les systèmes de batteries haute tension, les moteurs et les systèmes d’entraînement électrique.',
    'يشمل أنظمة البطارية عالية الجهد والمحركات وأنظمة الدفع الكهربائي.'
  ),
  warranty2Title: t('Complete coverage*', 'Couverture complète*', 'تغطية شاملة*'),
  warranty2Desc: t(
    'Protection of the vehicle’s main systems, notably the transmission, electronics and essential components.',
    'Protection des principaux systèmes du véhicule, notamment la transmission, l’électronique et les composants essentiels.',
    'حماية الأنظمة الرئيسية للمركبة، لا سيما ناقل الحركة والإلكترونيات والمكونات الأساسية.'
  ),
  warranty3Title: t('Genuine parts warranty*', 'Garantie de pièces d’origine*', 'ضمان قطع الغيار الأصلية*'),
  warranty3Desc: t(
    'All replacement parts are certified VOYAH parts, a guarantee of quality and safety.',
    'Toutes les pièces de rechange sont des pièces VOYAH certifiées, gage de qualité et de sécurité.',
    'جميع قطع الغيار هي قطع فواه معتمدة، ضمان للجودة والسلامة.'
  ),
  warrantyFootnote: t(
    '* Subject to the conditions set out in the VOYAH warranty certificate.',
    '* Sous réserve des conditions prévues par le certificat de garantie VOYAH.',
    '* رهناً بالشروط الواردة في شهادة ضمان فواه.'
  )
}
</script>

<style scoped>
.service-page {
  background: #fff;
  color: var(--text);
}

.service-hero {
  position: relative;
  height: min(60vw, 520px);
  overflow: hidden;
}

.service-hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.service-hero__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
}

.service-hero__overlay h1 {
  margin: 0;
  color: #fff;
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.care-section,
.warranty-section {
  padding: 84px 24px;
}

.appointment-section {
  padding: 84px 24px;
  background: var(--surface);
  scroll-margin-top: 94px;
}

.care-grid,
.warranty-grid {
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  gap: 56px;
  align-items: start;
}

.care-section h2,
.appointment-section h2,
.warranty-section h2 {
  font-size: clamp(1.7rem, 3vw, 2.4rem);
  line-height: 1.2;
  margin-bottom: 18px;
}

.care-intro,
.warranty-intro {
  margin: 0 0 34px;
  line-height: 1.7;
  color: var(--text-soft);
}

.care-list,
.warranty-list {
  list-style: none;
  margin: 0 0 34px;
  padding: 0;
  display: grid;
  gap: 26px;
}

.care-item,
.warranty-item {
  display: grid;
  grid-template-columns: 76px minmax(0, 1fr);
  gap: 20px;
  align-items: start;
}

.care-icon,
.warranty-badge-text {
  width: 76px;
  height: 76px;
  box-sizing: border-box;
  padding: 6px;
  border-radius: 50%;
  border: 1px solid #52787d;
  color: #52787d;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2px;
  text-align: center;
  line-height: 1.05;
}

.care-icon svg {
  width: 30px;
  height: 30px;
}

.care-icon-image,
.warranty-badge-image {
  width: 76px;
  height: 76px;
  display: block;
  object-fit: contain;
}

.warranty-badge-text strong {
  font-size: 0.85rem;
  line-height: 1.05;
}

.warranty-badge-text small {
  font-size: 0.55rem;
  letter-spacing: 0;
  line-height: 1.1;
  text-transform: uppercase;
  overflow-wrap: anywhere;
  max-width: 100%;
}

.care-text h3,
.warranty-text h3 {
  font-size: 1.05rem;
  line-height: 1.4;
  margin-bottom: 8px;
}

.care-text p,
.warranty-text p {
  margin: 0;
  color: var(--text-soft);
  line-height: 1.65;
  font-size: 0.95rem;
}

.care-cta {
  margin-top: 6px;
}

.care-media,
.warranty-media {
  overflow: hidden;
  border-radius: 18px;
  aspect-ratio: 4 / 5;
}

.care-media img,
.warranty-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.care-media:hover img,
.warranty-media:hover img {
  transform: scale(1.04);
}

.appointment-inner {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.appointment-intro {
  margin: 0 auto 32px;
  color: var(--text-soft);
  line-height: 1.7;
}

.appointment-card {
  background: #fff;
  padding: 36px;
  border: 1px solid var(--line);
  text-align: start;
}

.warranty-footnote {
  margin: 0;
  font-size: 0.8rem;
  color: var(--text-soft);
}

@media (max-width: 980px) {
  .care-grid,
  .warranty-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .care-media,
  .warranty-media {
    order: -1;
    aspect-ratio: 16 / 10;
  }

  .appointment-card {
    padding: 24px;
  }
}

@media (max-width: 620px) {
  .care-section,
  .appointment-section,
  .warranty-section {
    padding: 60px 20px;
  }

  .care-item,
  .warranty-item {
    grid-template-columns: 60px minmax(0, 1fr);
    gap: 16px;
  }

  .care-icon,
  .warranty-badge-text,
  .care-icon-image,
  .warranty-badge-image {
    width: 60px;
    height: 60px;
  }

  .warranty-badge-text {
    padding: 4px;
  }

  .warranty-badge-text strong {
    font-size: 0.72rem;
  }

  .warranty-badge-text small {
    font-size: 0.48rem;
  }
}
</style>
