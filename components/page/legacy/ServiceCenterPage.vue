<template>
  <div class="page-container" v-bind="scopeBind">
    <div class="service-content" v-bind="scopeBind">
      <section class="bg" v-bind="scopeBind">
        <div class="video" v-bind="scopeBind">
          <div v-bind="scopeBind">
            <video
              ref="bgVideoRef"
              class="video-js w-full h-full"
              autoplay
              muted
              loop
              playsinline
              preload="auto"
              poster="/static/assets/userser_poster-570ed436.png"
            >
              <source src="/voyah-resources/website/advertisingbanner/video/sc_1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div class="hero-overlay" v-bind="scopeBind" />
        <div class="title inview-child inview-animated" v-bind="scopeBind">{{ t.heroTitle }}</div>
        <div class="call inview-child inview-animated" v-bind="scopeBind">{{ t.helpPhone }}</div>
        <div class="video-btn" v-bind="scopeBind" @click="openVideoModal">
          {{ t.watchVideo }}
          <span class="video-btn-arrow" v-bind="scopeBind">→</span>
        </div>
      </section>

      <!-- Full Video Modal -->
      <Teleport to="body">
        <div v-if="videoModalOpen" class="video-modal-overlay" @click.self="closeVideoModal">
          <div class="video-modal-box">
            <button class="video-modal-close" @click="closeVideoModal" aria-label="Close">✕</button>
            <video
              ref="modalVideoRef"
              class="video-modal-player"
              controls
              playsinline
              preload="auto"
            >
              <source src="/voyah-resources/website/advertisingbanner/video/7d8f79a2-9614-47e0-b336-5f660d63ad171770618641574.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </Teleport>

      <!-- ===== Auto Hall Company Info Banner - CLEAN VERSION ===== -->
      <section class="autohall-info" v-bind="scopeBind">
        <div class="autohall-info-inner" v-bind="scopeBind">
          <div class="autohall-logo-wrap" v-bind="scopeBind">
            <img src="/static/assets/autohall_logo.png" alt="Auto Hall" class="autohall-info-logo" v-bind="scopeBind" />
          </div>
          <div class="autohall-divider" v-bind="scopeBind" />
          <div class="autohall-details" v-bind="scopeBind">
            <div class="autohall-detail-item" v-bind="scopeBind">
              <span class="autohall-icon" v-bind="scopeBind">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </span>
              <span v-bind="scopeBind">{{ t.companyAddress }}</span>
            </div>
            <div class="autohall-detail-item" v-bind="scopeBind">
              <span class="autohall-icon" v-bind="scopeBind">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
              <span v-bind="scopeBind">
                <a href="tel:93107107" class="autohall-link" v-bind="scopeBind">93 107 107</a>
                &nbsp;/&nbsp;
                <a href="tel:29803078" class="autohall-link" v-bind="scopeBind">29 803 078</a>
              </span>
            </div>
            <div class="autohall-detail-item" v-bind="scopeBind">
              <span class="autohall-icon" v-bind="scopeBind">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-10 7L2 7"/>
                </svg>
              </span>
              <a href="mailto:boc@autohall.tn" class="autohall-link" v-bind="scopeBind">boc@autohall.tn</a>
            </div>
          </div>
          <div class="autohall-cta" v-bind="scopeBind">
            <a href="mailto:boc@autohall.tn" class="autohall-cta-btn" v-bind="scopeBind">{{ t.contactUs }}</a>
          </div>
        </div>
      </section>
      <!-- ===== END Auto Hall Company Info Banner ===== -->

      <section class="section_1" v-bind="scopeBind">
        <div class="section_1_1" v-bind="scopeBind">
          <div class="img_1 inview-child" v-bind="scopeBind">
            <img class="img_pc" :src="'/static/assets/service-502e6c35.jpg'" alt="" loading="lazy" v-bind="scopeBind" />
          </div>
          <div class="img_2 inview-child" v-bind="scopeBind">
            <img class="img_pc" :src="'/static/assets/section_2-84b4d8ae.jpg'" alt="" loading="lazy" v-bind="scopeBind" />
          </div>
        </div>

        <div class="section_1_2" v-bind="scopeBind">
          <div class="img_1 inview-child" v-bind="scopeBind">
            <div class="title" v-bind="scopeBind">{{ t.promiseTitle }}</div>
            <div class="desc" v-bind="scopeBind">{{ t.promiseDesc }}</div>
          </div>
          <div class="img_2 inview-child" v-bind="scopeBind">
            <div class="title" v-bind="scopeBind">{{ t.wholeheartedTitle }}</div>
            <div class="desc" v-bind="scopeBind">
              {{ t.wholeheartedDesc1 }}
              <br v-bind="scopeBind" />
              {{ t.wholeheartedDesc2 }}
            </div>
          </div>
        </div>

        <div class="section_1_3" v-bind="scopeBind">
          <div class="img_2 inview-child" v-bind="scopeBind">
            <img class="img_pc" :src="'/static/assets/section_5-80a7d36b.jpg'" alt="" loading="lazy" v-bind="scopeBind" />
          </div>
          <div class="img_1 inview-child" v-bind="scopeBind">
            <div class="title" v-bind="scopeBind">{{ t.sincereTitle }}</div>
            <div class="desc" v-bind="scopeBind">{{ t.sincereDesc }}</div>
          </div>
        </div>
      </section>

      <!-- ===== VOYAH SPACE - INFINITE LOOP CAROUSEL ===== -->
      <section class="section_2" v-bind="scopeBind">
        <div class="title inview-child" v-bind="scopeBind" style="--inview-delay: 0.3s;">
          {{ t.spaceTitle }}
        </div>
        <div class="desc inview-child" v-bind="scopeBind" style="--inview-delay: 0.4s;">
          {{ t.spaceDesc1 }}
          <br v-bind="scopeBind" />
          {{ t.spaceDesc2 }}
        </div>

        <div class="swiper-voyah inview-child" v-bind="swiperBind" style="--inview-delay: 0.5s;">
          <div class="swiper-group-container" v-bind="swiperBind">
            <div class="custom-slider-track infinite-track" ref="sliderTrack" v-bind="swiperBind">
              <!-- Duplicated slides for infinite loop -->
              <div v-for="(img, index) in duplicatedSlides" :key="index" class="slide-item" v-bind="swiperBind">
                <img :src="img" alt="" class="slide-img" loading="lazy" v-bind="swiperBind" />
              </div>
            </div>
          </div>

          <!-- Navigation -->
          <div class="slide_content" v-bind="swiperBind">
            <div class="prev slide" @click="prevSlide" v-bind="swiperBind" />
            <div class="next slide" @click="nextSlide" v-bind="swiperBind" />
          </div>

          <!-- Indicators -->
          <div class="indicators" v-bind="swiperBind">
            <div
              v-for="(_, index) in spaceSlides"
              :key="index"
              class="indicators_item"
              :class="{ active: currentIndex === index }"
              @click="goToSlide(index)"
              v-bind="swiperBind"
            />
          </div>
        </div>
      </section>

      <section class="section_3" v-bind="scopeBind">
        <div class="title inview-child" v-bind="scopeBind">{{ t.buyTitle }}</div>
        <div class="desc inview-child" v-bind="scopeBind">{{ t.buyDesc }}</div>
        <div class="section_3_content inview-child" v-bind="scopeBind">
          <article class="section_3_content_item inview-child" v-for="item in purchaseCards" :key="item.title" v-bind="scopeBind">
            <div class="img" :class="item.imageClass" v-bind="scopeBind">
              <img :src="item.image" alt="" v-bind="scopeBind" />
            </div>
            <div class="bottom" v-bind="scopeBind">
              <div class="sub_title" v-bind="scopeBind">{{ item.title }}</div>
              <div class="sub_desc" v-bind="scopeBind">{{ item.desc }}</div>
            </div>
          </article>
        </div>
      </section>

      <section class="section_3 section_4" v-bind="scopeBind">
        <div class="title inview-child" v-bind="scopeBind">{{ t.afterTitle }}</div>
        <div class="desc inview-child" v-bind="scopeBind">{{ t.afterDesc }}</div>
        <div class="section_3_content inview-child" v-bind="scopeBind">
          <article class="section_3_content_item inview-child" v-for="item in afterSaleCards" :key="item.title" v-bind="scopeBind">
            <div class="img" :class="item.imageClass" v-bind="scopeBind">
              <img :src="item.image" alt="" v-bind="scopeBind" />
            </div>
            <div class="bottom" v-bind="scopeBind">
              <div class="sub_title" v-bind="scopeBind">{{ item.title }}</div>
              <div class="sub_desc" v-bind="scopeBind">{{ item.desc }}</div>
            </div>
          </article>
        </div>
      </section>

      <section class="section_3 section_5" v-bind="scopeBind">
        <div class="title inview-child" v-bind="scopeBind">{{ t.storyTitle }}</div>
        <div class="desc inview-child" v-bind="scopeBind">{{ t.storyDesc }}</div>
        <div class="section_3_content inview-child" v-bind="scopeBind">
          <article class="section_3_content_item" v-for="story in stories" :key="story.title" v-bind="scopeBind">
            <div class="img img_4" v-bind="scopeBind">
              <img :src="story.image" alt="" v-bind="scopeBind" />
            </div>
            <div class="bottom" v-bind="scopeBind">
              <div class="sub_title" v-bind="scopeBind">{{ story.title }}</div>
              <div class="sub_desc" v-bind="scopeBind">{{ story.desc }}</div>
              <div class="more" v-bind="scopeBind">
                <span class="view" v-bind="scopeBind">{{ t.viewDetail }}</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="section_3 section_6" v-bind="scopeBind">
        <div class="title inview-child" v-bind="scopeBind">{{ t.mallTitle }}</div>
        <div class="desc inview-child" v-bind="scopeBind">{{ t.mallDesc }}</div>
        <div class="accordion-contain inview-child service-accordion" v-bind="accordionBind">
          <div
            v-for="(item, index) in storeAccordion"
            :key="item.title"
            class="item"
            :class="{ active: index === 0 }"
            :style="{ backgroundImage: `url(${item.image})` }"
            v-bind="accordionBind"
          >
            <div class="shadow" v-bind="accordionBind" />
            <div class="title title-show title-hidden" v-bind="accordionBind">{{ item.title }}</div>
            <div class="item-wrapper" v-bind="accordionBind">
              <div class="title" v-bind="accordionBind">{{ item.title }}</div>
              <div class="desc" v-bind="accordionBind">{{ item.desc }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== Auto Hall Contact Footer Section ===== -->
      <section class="autohall-contact-section" v-bind="scopeBind">
        <div class="autohall-contact-inner" v-bind="scopeBind">
          <div class="autohall-contact-heading" v-bind="scopeBind">{{ t.contactTitle }}</div>
          <div class="autohall-contact-sub" v-bind="scopeBind">{{ t.contactSub }}</div>
          <div class="autohall-contact-grid" v-bind="scopeBind">
            <div class="autohall-contact-card" v-bind="scopeBind">
              <div class="autohall-contact-card-icon" v-bind="scopeBind">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div class="autohall-contact-card-label" v-bind="scopeBind">{{ t.addressLabel }}</div>
              <div class="autohall-contact-card-value" v-bind="scopeBind">Auto Hall, SARL</div>
              <div class="autohall-contact-card-value" v-bind="scopeBind">Route de la Marsa GP9</div>
              <div class="autohall-contact-card-value" v-bind="scopeBind">Cité Essalema, 2079 Tunis</div>
            </div>
            <div class="autohall-contact-card" v-bind="scopeBind">
              <div class="autohall-contact-card-icon" v-bind="scopeBind">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.86 5.86l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div class="autohall-contact-card-label" v-bind="scopeBind">{{ t.phoneLabel }}</div>
              <a href="tel:93107107" class="autohall-contact-card-value autohall-contact-link" v-bind="scopeBind">93 107 107</a>
              <a href="tel:29803078" class="autohall-contact-card-value autohall-contact-link" v-bind="scopeBind">29 803 078</a>
            </div>
            <div class="autohall-contact-card" v-bind="scopeBind">
              <div class="autohall-contact-card-icon" v-bind="scopeBind">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div class="autohall-contact-card-label" v-bind="scopeBind">{{ t.emailLabel }}</div>
              <a href="mailto:boc@autohall.tn" class="autohall-contact-card-value autohall-contact-link" v-bind="scopeBind">boc@autohall.tn</a>
            </div>
          </div>
        </div>
      </section>
      <!-- ===== END Auto Hall Contact Footer Section ===== -->

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, watch, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { useSiteContent } from '~/composables/useSiteContent'

const { locale } = useSiteContent()
const scopeBind = computed(() => ({ 'data-v-974500ae': '' }))
const swiperBind = computed(() => ({ 'data-v-8116d67d': '' }))
const accordionBind = computed(() => ({ 'data-v-d1806854': '' }))

const lang = computed(() => locale.value.code as 'en' | 'fr' | 'ar')

// Refs
const sliderTrack = ref<HTMLElement | null>(null)
const currentIndex = ref(0)
const videoModalOpen = ref(false)
const modalVideoRef = ref<HTMLVideoElement | null>(null)
const bgVideoRef = ref<HTMLVideoElement | null>(null)

let autoPlayInterval: any = null
let isTransitioning = ref(false)

// Watch language change
watch(lang, async () => {
  await nextTick()
  tryPlayBg()
})

// Background video
const tryPlayBg = async () => {
  await nextTick()
  const vid = bgVideoRef.value
  if (!vid) return
  vid.muted = true
  vid.playsInline = true
  vid.play().catch(() => {
    const resume = () => {
      vid.play().catch(() => {})
      document.removeEventListener('click', resume)
      document.removeEventListener('touchstart', resume)
    }
    document.addEventListener('click', resume, { once: true })
    document.addEventListener('touchstart', resume, { once: true })
  })
}

// Video Modal
const openVideoModal = async () => {
  videoModalOpen.value = true
  await nextTick()
  modalVideoRef.value?.play()
}

const closeVideoModal = () => {
  modalVideoRef.value?.pause()
  videoModalOpen.value = false
}

// ==================== INFINITE CAROUSEL LOGIC ====================

// Duplicate slides for seamless infinite loop (3 sets recommended)
const duplicatedSlides = computed(() => [...spaceSlides, ...spaceSlides, ...spaceSlides])

const updateSlider = (smooth = true, instant = false) => {
  if (!sliderTrack.value) return

  const slideWidth = sliderTrack.value.children[0]?.clientWidth || 0
  // Small gap of 16px between slides
  const gap = 16
  const moveX = -currentIndex.value * (slideWidth + gap)

  if (instant) {
    gsap.set(sliderTrack.value, { x: moveX })
  } else {
    gsap.to(sliderTrack.value, {
      x: moveX,
      duration: smooth ? 0.85 : 0,
      ease: 'power3.inOut',
      onComplete: () => {
        // Seamless reset when reaching the duplicated section
        const realSlideCount = spaceSlides.length
        if (currentIndex.value >= realSlideCount * 2) {
          currentIndex.value = currentIndex.value % realSlideCount
          const newSlideWidth = sliderTrack.value?.children[0]?.clientWidth || 0
          gsap.set(sliderTrack.value, { 
            x: -currentIndex.value * (newSlideWidth + gap) 
          })
        }
      }
    })
  }
}

const nextSlide = () => {
  if (isTransitioning.value) return
  isTransitioning.value = true

  currentIndex.value++
  updateSlider(true)

  setTimeout(() => {
    isTransitioning.value = false
  }, 900)
}

const prevSlide = () => {
  if (isTransitioning.value) return
  isTransitioning.value = true

  currentIndex.value--
  updateSlider(true)

  setTimeout(() => {
    isTransitioning.value = false
  }, 900)
}

const goToSlide = (index: number) => {
  if (isTransitioning.value) return
  currentIndex.value = index
  updateSlider(true)
}

const startAutoPlay = () => {
  stopAutoPlay()
  autoPlayInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval) clearInterval(autoPlayInterval)
}

const handleResize = () => {
  updateSlider(false, true) // instant reposition on resize
}

// Lifecycle
onMounted(() => {
  startAutoPlay()
  window.addEventListener('resize', handleResize)
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) tryPlayBg()
  })

  tryPlayBg()

  // Initial slider position
  nextTick(() => {
    updateSlider(false, true)
  })
})

onBeforeUnmount(() => {
  stopAutoPlay()
  window.removeEventListener('resize', handleResize)
})

// ==================== i18n & Data ====================

const copy = {
  en: {
    heroTitle: 'Auto Hall Service',
    helpPhone: 'Auto Hall Rescue Hotline: 93 107 107',
    watchVideo: 'Watch full video',
    promiseTitle: 'Sincere Promise',
    promiseDesc: 'We honor every promise with sincerity',
    wholeheartedTitle: 'Wholehearted',
    wholeheartedDesc1: 'Auto Hall delivers the Voyah service philosophy wholeheartedly',
    wholeheartedDesc2: 'to provide a trustworthy full-journey user experience in Tunisia',
    sincereTitle: 'True Care',
    sincereDesc: 'We treat every detail with sincerity',
    spaceTitle: 'Voyah Space',
    spaceDesc1: 'With higher perceived product value and better user experience, Voyah has launched the "Self-run + Ecosystem" direct sales system, building a new development platform.',
    spaceDesc2: 'Currently, Voyah has 507 stores in 212 cities globally — available in Tunisia through Auto Hall, Route de la Marsa GP9, Cité Essalema, Tunis.',
    buyTitle: 'Purchase Service',
    buyDesc: 'Sincere promise for every stage of buying',
    afterTitle: 'After-sales Service',
    afterDesc: 'True care in every service detail',
    storyTitle: 'Service Stories',
    storyDesc: 'Fresh stories from users and communities',
    viewDetail: 'View details',
    mallTitle: 'Voyah Mall',
    mallDesc: 'More than vehicles, a companion for every part of life',
    contactUs: 'Contact Auto Hall',
    contactTitle: 'Your Official Voyah Dealer in Tunisia',
    contactSub: 'Auto Hall is your trusted Voyah partner. Reach us for any inquiry, test drive, or after-sales support.',
    companyAddress: 'Route de la Marsa GP9, Cité Essalema, 2079 Tunis',
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    emailLabel: 'Email'
  },
  fr: {
    heroTitle: 'Service Auto Hall',
    helpPhone: 'Assistance Auto Hall: 93 107 107',
    watchVideo: 'Voir la vidéo complète',
    promiseTitle: 'Engagement sincère',
    promiseDesc: 'Nous tenons chaque promesse avec sincérité',
    wholeheartedTitle: 'Entièrement dédié',
    wholeheartedDesc1: 'Auto Hall incarne la philosophie de service Voyah',
    wholeheartedDesc2: 'pour une expérience de confiance sur tout le parcours en Tunisie',
    sincereTitle: 'Attention sincère',
    sincereDesc: 'Chaque détail est traité avec soin',
    spaceTitle: 'Espace Voyah',
    spaceDesc1: 'Avec une valeur perçue plus élevée et une meilleure expérience, Voyah a lancé le système de vente directe "Auto-gestion + Écosystème", créant une nouvelle plateforme de développement.',
    spaceDesc2: 'Actuellement, Voyah possède 507 magasins dans 212 villes du monde — disponible en Tunisie via Auto Hall, Route de la Marsa GP9, Cité Essalema, Tunis.',
    buyTitle: "Service d'achat",
    buyDesc: "Une promesse sincère à chaque étape de l'achat",
    afterTitle: 'Service après-vente',
    afterDesc: 'Une attention réelle dans chaque détail',
    storyTitle: 'Histoires de service',
    storyDesc: 'Actualités et histoires de la communauté',
    viewDetail: 'Voir le détail',
    mallTitle: 'Boutique Voyah',
    mallDesc: 'Au-delà de la voiture, un compagnon du quotidien',
    contactUs: 'Contacter Auto Hall',
    contactTitle: 'Votre concessionnaire officiel Voyah en Tunisie',
    contactSub: 'Auto Hall est votre partenaire Voyah de confiance. Contactez-nous pour toute demande, essai ou service après-vente.',
    companyAddress: 'Route de la Marsa GP9, Cité Essalema, 2079 Tunis',
    addressLabel: 'Adresse',
    phoneLabel: 'Téléphone',
    emailLabel: 'E-mail'
  },
  ar: {
    heroTitle: 'خدمات Auto Hall',
    helpPhone: 'هاتف مساعدة Auto Hall: 93 107 107',
    watchVideo: 'شاهد الفيديو الكامل',
    promiseTitle: 'وعد صادق',
    promiseDesc: 'نفي بكل وعد بصدق',
    wholeheartedTitle: 'اهتمام كامل',
    wholeheartedDesc1: 'تجسّد Auto Hall فلسفة خدمة Voyah بالكامل',
    wholeheartedDesc2: 'لتقديم تجربة موثوقة طوال رحلة الاستخدام في تونس',
    sincereTitle: 'عناية حقيقية',
    sincereDesc: 'نهتم بكل التفاصيل بصدق',
    spaceTitle: 'فضاء Voyah',
    spaceDesc1: 'بفضل قيمة المنتج العالية وتجربة المستخدم الأفضل، أطلقت Voyah نظام المبيعات المباشرة "التشغيل الذاتي + المنظومة"، لبناء منصة تطوير جديدة.',
    spaceDesc2: 'حالياً، تمتلك Voyah 507 متجر في 212 مدينة عالمياً — متاحة في تونس عبر Auto Hall، طريق المرسى GP9، مدينة السلامة، تونس.',
    buyTitle: 'خدمة الشراء',
    buyDesc: 'وعد صادق في كل مرحلة من الشراء',
    afterTitle: 'خدمة ما بعد البيع',
    afterDesc: 'عناية حقيقية في كل تفاصيل الخدمة',
    storyTitle: 'قصص الخدمة',
    storyDesc: 'قصص جديدة من المستخدمين والمجتمع',
    viewDetail: 'عرض التفاصيل',
    mallTitle: 'متجر Voyah',
    mallDesc: 'أكثر من سيارة، رفيق لكل جوانب الحياة',
    contactUs: 'تواصل مع Auto Hall',
    contactTitle: 'وكيلك الرسمي لـ Voyah في تونس',
    contactSub: 'Auto Hall هي شريكك الموثوق لـ Voyah. تواصل معنا لأي استفسار أو تجربة قيادة أو خدمة ما بعد البيع.',
    companyAddress: 'طريق المرسى GP9، مدينة السلامة، 2079 تونس',
    addressLabel: 'العنوان',
    phoneLabel: 'الهاتف',
    emailLabel: 'البريد الإلكتروني'
  }
} as const

const t = computed(() => copy[lang.value])

const spaceSlides = [
  '/static/assets/kongjian1-c362d45d.jpg',
  '/static/assets/kongjian2-4222892b.jpg',
  '/static/assets/kongjian3-8b228f55.jpg'
]

const purchaseCards = computed(() => {
  if (lang.value === 'ar') {
    return [
      { title: 'مبيعات احترافية 1-على-1', desc: 'توجيه مخصص من مستشاري Auto Hall ذوي الخبرة', imageClass: 'img_1', image: '/static/assets/section3_1-d53304aa.jpg' },
      { title: 'استقبال مخلص في المتجر', desc: 'دعم مخصص لكل احتياجات المستخدم في تونس', imageClass: 'img_2', image: '/static/assets/section3_2-4fb471c7.jpg' },
      { title: 'تسليم احتفالي', desc: 'تسليم السيارة كمراسم لا تنسى مع Auto Hall', imageClass: 'img_3', image: '/static/assets/section3_3-20237755.jpg' }
    ]
  }
  return lang.value === 'fr'
    ? [
        { title: 'Vente 1-à-1 professionnelle', desc: 'Service dédié par les conseillers experts Auto Hall', imageClass: 'img_1', image: '/static/assets/section3_1-d53304aa.jpg' },
        { title: 'Accueil sincère en magasin', desc: 'Réponse aux besoins de chaque client en Tunisie', imageClass: 'img_2', image: '/static/assets/section3_2-4fb471c7.jpg' },
        { title: 'Livraison avec cérémonie', desc: 'La remise devient une expérience mémorable avec Auto Hall', imageClass: 'img_3', image: '/static/assets/section3_3-20237755.jpg' }
      ]
    : [
        { title: '1-on-1 professional sales', desc: 'Dedicated guidance from Auto Hall expert consultants', imageClass: 'img_1', image: '/static/assets/section3_1-d53304aa.jpg' },
        { title: 'Sincere offline reception', desc: 'Support tailored to each user need in Tunisia', imageClass: 'img_2', image: '/static/assets/section3_2-4fb471c7.jpg' },
        { title: 'Ceremonial delivery', desc: 'Vehicle handover as a memorable ceremony with Auto Hall', imageClass: 'img_3', image: '/static/assets/section3_3-20237755.jpg' }
      ]
})

const afterSaleCards = computed(() => {
  if (lang.value === 'ar') {
    return [
      { title: 'فريق Auto Hall المحترف', desc: 'دعم متاح في أي وقت وفي أي مكان', imageClass: 'img_4', image: '/static/assets/section4_1-f7cf566b.jpg' },
      { title: 'استعداد على مدار الساعة', desc: 'مركبات خدمة متنقلة عند الطلب عبر 29 803 078', imageClass: 'img_5', image: '/static/assets/section4_2-aa55795b.jpg' },
      { title: 'المساعدة على الطريق', desc: 'تواصل على boc@autohall.tn أو اتصل بنا فوراً', imageClass: 'img_6', image: '/static/assets/section4_3-23836307.jpg' }
    ]
  }
  return lang.value === 'fr'
    ? [
        { title: 'Équipe Auto Hall professionnelle', desc: 'Support disponible partout en Tunisie', imageClass: 'img_4', image: '/static/assets/section4_1-f7cf566b.jpg' },
        { title: 'Assistance 7x24h', desc: 'Service mobile disponible au 29 803 078', imageClass: 'img_5', image: '/static/assets/section4_2-aa55795b.jpg' },
        { title: 'Dépannage routier', desc: 'Écrivez-nous à boc@autohall.tn à tout moment', imageClass: 'img_6', image: '/static/assets/section4_3-23836307.jpg' }
      ]
    : [
        { title: 'Auto Hall professional team', desc: 'Support anytime and anywhere in Tunisia', imageClass: 'img_4', image: '/static/assets/section4_1-f7cf566b.jpg' },
        { title: '7x24h standby', desc: 'Mobile service — call 29 803 078', imageClass: 'img_5', image: '/static/assets/section4_2-aa55795b.jpg' },
        { title: 'Roadside assistance', desc: 'Email boc@autohall.tn or call us anytime', imageClass: 'img_6', image: '/static/assets/section4_3-23836307.jpg' }
      ]
})

const storeAccordion = computed(() => {
  if (lang.value === 'ar') {
    return [
      { title: 'الهدايا', desc: 'إكسسوارات Voyah المختارة لخلق حياة مريحة مع المبدعين — متاحة في متجر Auto Hall تونس', image: '/static/assets/store1-bdde9696.jpg' },
      { title: 'السيارة', desc: 'منتجات سيارات مختارة بعناية لتناسب احتياجاتك — قم بزيارتنا في طريق المرسى GP9', image: '/static/assets/store2-6e7252f4.jpg' },
      { title: 'الذكاء', desc: 'تمكين رقمي عميق لتجديد تجربة استخدام السيارة بالكامل مع Auto Hall', image: '/static/assets/store3-fe6e8d7d.jpg' }
    ]
  }
  if (lang.value === 'fr') {
    return [
      { title: 'Cadeaux', desc: 'Accessoires Voyah sélectionnés pour créer une vie confortable — disponibles chez Auto Hall Tunis', image: '/static/assets/store1-bdde9696.jpg' },
      { title: 'Produits Auto', desc: "Produits soigneusement sélectionnés — visitez-nous Route de la Marsa GP9, Cité Essalema", image: '/static/assets/store2-6e7252f4.jpg' },
      { title: 'Intelligence', desc: "Habilitation logicielle profonde pour renouveler totalement l'expérience automobile avec Auto Hall", image: '/static/assets/store3-fe6e8d7d.jpg' }
    ]
  }
  return [
    { title: 'Gifts', desc: 'Selected Voyah accessories to create a comfortable life — available at Auto Hall Tunis', image: '/static/assets/store1-bdde9696.jpg' },
    { title: 'Car Products', desc: 'Carefully selected car products — visit us at Route de la Marsa GP9, Cité Essalema', image: '/static/assets/store2-6e7252f4.jpg' },
    { title: 'Intelligence', desc: 'Deep software empowerment to fully renew the vehicle experience with Auto Hall', image: '/static/assets/store3-fe6e8d7d.jpg' }
  ]
})

const stories = computed(() => {
  if (lang.value === 'ar') {
    return [
      { title: 'قطف الفراولة في عطلة نهاية الأسبوع', desc: 'في موسم الشتاء، استضاف مركز Voyah في خفي حدثاً مجتمعياً لا ينسى للمالكين.', image: '/static/assets/users1-721725cd.png' },
      { title: 'دعم خريف Voyah', desc: 'حماية العطلات والخدمة بجوار بحيرة كايون.', image: '/static/assets/users2-5ea895eb.png' },
      { title: 'حفل تسليم جماعي', desc: 'أقيم حفل تسليم دافئ ومميز بالتعاون بين النادي ومركز المستخدمين.', image: '/static/assets/users3-b4fe4c41.png' }
    ]
  }
  return [
    {
      title: lang.value === 'fr' ? 'Cueillette de fraises le week-end' : 'Weekend strawberry picking',
      desc: lang.value === 'fr'
        ? "Par temps d'hiver, le centre Voyah de Hefei a organisé un événement convivial pour les propriétaires."
        : 'In the cold season, the Voyah Hefei center hosted a memorable community event.',
      image: '/static/assets/users1-721725cd.png'
    },
    {
      title: lang.value === 'fr' ? "Escorte d'automne Voyah" : 'Voyah autumn support event',
      desc: lang.value === 'fr' ? "Protection de vacances au bord du lac Caiyun." : 'Holiday support by Caiyun Lake.',
      image: '/static/assets/users2-5ea895eb.png'
    },
    {
      title: lang.value === 'fr' ? 'Livraison collective Voyah' : 'Voyah group delivery event',
      desc: lang.value === 'fr'
        ? "Le club Tianzhi Lan et le centre utilisateur Jinjiang ont lancé une livraison collective conviviale."
        : 'A warm group delivery ceremony was jointly hosted by the club and user center.',
      image: '/static/assets/users3-b4fe4c41.png'
    }
  ]
})
</script>

<style scoped>
/* =====================
   Hero background video fix
   ===================== */

.bg {
  position: relative;
  overflow: hidden;
  isolation: isolate;
}

.video > div {
  width: 100%;
  height: 100%;
}

.video video {
  width: 100% !important;
  height: 100% !important;
  display: block !important;
  object-fit: cover !important;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.35);
}

.bg .title,
.bg .call,
.bg .video-btn {
  position: relative;
  z-index: 2;
}

/* Autohall logo */
.section_1_1 .img_1 .img_pc {
  width: auto !important;
  max-width: 90% !important;
  height: auto !important;
  min-height: 400px;
  object-fit: contain !important;
  display: block;
  margin: auto;
}

/* =====================
   Auto Hall Info Banner - CLEAN VERSION
   ===================== */
.autohall-info {
  background: #ffffff;
  padding: 32px 0;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
}

.autohall-info-inner {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 60px;
  display: flex;
  align-items: center;
  gap: 48px;
  flex-wrap: wrap;
}

.autohall-logo-wrap {
  flex-shrink: 0;
}

.autohall-info-logo {
  height: 48px;
  width: auto;
  object-fit: contain;
  opacity: 1;
  filter: none;
}

.autohall-divider {
  width: 1px;
  height: 48px;
  background: #e0e0e0;
  flex-shrink: 0;
}

.autohall-details {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.autohall-detail-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #4a4a4a;
  font-size: 14px;
  line-height: 1.4;
  font-weight: 400;
}

.autohall-icon {
  font-size: 16px;
  flex-shrink: 0;
  color: #666666;
}

.autohall-link {
  color: #4a4a4a;
  text-decoration: none;
  transition: color 0.2s ease;
}

.autohall-link:hover {
  color: #000000;
  text-decoration: underline;
}

.autohall-cta {
  flex-shrink: 0;
}

.autohall-cta-btn {
  display: inline-block;
  padding: 10px 28px;
  background: transparent;
  border: 1px solid #4a4a4a;
  color: #4a4a4a;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.25s ease;
  cursor: pointer;
  font-weight: 500;
}

.autohall-cta-btn:hover {
  background: #4a4a4a;
  color: #ffffff;
  border-color: #4a4a4a;
}

@media screen and (max-width: 900px) {
  .autohall-info-inner {
    padding: 0 24px;
    gap: 24px;
  }
  .autohall-divider { display: none; }
}

@media screen and (max-width: 600px) {
  .autohall-info { padding: 24px 0; }
  .autohall-info-inner { flex-direction: column; align-items: flex-start; gap: 16px; }
  .autohall-cta { width: 100%; }
  .autohall-cta-btn { width: 100%; text-align: center; display: block; }
}

/* =====================
   Section 2: Voyah Space - MINIMIZED HEIGHT, FULL IMAGE VISIBLE
   ===================== */
.section_2 {
  display: flex !important;
  align-items: center !important;
  flex-direction: column !important;
  padding: 80px 0 !important;
  background: #fff;
  overflow-x: hidden;
}

.section_2 .title {
  font-size: 32px !important;
  font-weight: 500 !important;
  color: #262626 !important;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.section_2 .desc {
  text-align: center !important;
  width: 100% !important;
  padding: 0 100px !important;
  color: #727272 !important;
  font-size: 16px !important;
  line-height: 26px !important;
  margin-bottom: 0 !important;
}

.section_2 .swiper-group-container {
  margin-top: 40px !important;
  width: 100%;
  overflow: visible !important;
  margin-left: 0;
  margin-right: 0;
  padding: 0;
}

.custom-slider-track.infinite-track {
  display: flex;
  gap: 16px;
  will-change: transform;
  margin: 0;
  padding: 0;
}

.slide-item {
  flex-shrink: 0;
  width: calc(100vw - 32px);
  max-width: calc(1400px - 32px);
  margin: 0;
  padding: 0;
  display: block;
  line-height: 0;
  font-size: 0;
}

.section_2 .slide-img {
  width: 100% !important;
  height: auto !important;
  max-height: 320px !important;
  border-radius: 16px !important;
  overflow: hidden;
  object-fit: cover !important;
  display: block;
  margin: 0;
  padding: 0;
}

.slide-item:hover .slide-img {
  transform: scale(1.02);
  transition: transform 0.3s ease;
}

/* For very large screens (desktop) */
@media screen and (min-width: 1600px) {
  .slide-item {
    width: calc(100vw - 32px);
    max-width: calc(1600px - 32px);
  }
  .section_2 .slide-img {
    max-height: 400px !important;
  }
}

/* For standard large screens */
@media screen and (min-width: 1200px) and (max-width: 1599px) {
  .slide-item {
    width: calc(100vw - 32px);
    max-width: calc(1300px - 32px);
  }
  .section_2 .slide-img {
    max-height: 300px !important;
  }
}

/* For medium screens */
@media screen and (max-width: 1199px) {
  .slide-item {
    width: calc(100vw - 32px);
  }
  .section_2 .slide-img {
    max-height: 280px !important;
  }
}

/* For tablets */
@media screen and (max-width: 768px) {
  .slide-item {
    width: calc(100vw - 24px);
  }
  .custom-slider-track.infinite-track {
    gap: 12px;
  }
  .section_2 .slide-img {
    max-height: 220px !important;
  }
  .section_2 .title {
    font-size: 24px !important;
  }
  .section_2 .desc {
    font-size: 14px !important;
    line-height: 22px !important;
    padding: 0 20px !important;
  }
  .section_2 {
    padding: 50px 0 !important;
  }
}

/* For mobile */
@media screen and (max-width: 480px) {
  .slide-item {
    width: calc(100vw - 16px);
  }
  .custom-slider-track.infinite-track {
    gap: 8px;
  }
  .section_2 .slide-img {
    max-height: 180px !important;
    border-radius: 12px !important;
  }
}

/* Navigation buttons */
.slide_content {
  display: flex;
  justify-content: flex-end;
  gap: 0px;
  padding: 30px 60px 0;
  width: 100%;
  box-sizing: border-box;
}

@media screen and (max-width: 1440px) {
  .slide_content {
    padding: 25px 40px 0;
  }
}

@media screen and (max-width: 768px) {
  .slide_content {
    padding: 20px 20px 0;
  }
}

.prev.slide, .next.slide {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #262626;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: transparent;
  position: relative;
}

.prev.slide::after { content: '←'; font-size: 16px; color: #262626; }
.next.slide::after { content: '→'; font-size: 16px; color: #262626; }

.prev.slide:hover, .next.slide:hover { background: #262626; }
.prev.slide:hover::after, .next.slide:hover::after { color: #fff; }

.indicators {
  margin-top: 30px;
  display: flex;
  gap: 8px;
  justify-content: center;
}

.indicators_item {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #e6e6e6;
}

.indicators_item.active { background: #262626; }

/* Optional: Pause autoplay on hover */
.swiper-voyah:hover {
  --autoplay-paused: true;
}

/* =====================
   Auto Hall Contact Footer Section
   ===================== */
.autohall-contact-section {
  background: #f7f5f1;
  padding: 100px 60px;
}

.autohall-contact-inner {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.autohall-contact-heading {
  font-size: 36px;
  font-weight: 500;
  color: #1a1a1a;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}

.autohall-contact-sub {
  font-size: 16px;
  color: #727272;
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto 60px;
}

.autohall-contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.autohall-contact-card {
  background: #fff;
  border: 1px solid #e8e3da;
  padding: 40px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}

.autohall-contact-card:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  transform: translateY(-3px);
}

.autohall-contact-card-icon {
  color: #c8a96e;
  margin-bottom: 8px;
}

.autohall-contact-card-label {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #b0a898;
  margin-bottom: 4px;
}

.autohall-contact-card-value {
  font-size: 15px;
  color: #262626;
  line-height: 1.6;
  display: block;
}

.autohall-contact-link {
  color: #262626;
  text-decoration: none;
  transition: color 0.2s;
}

.autohall-contact-link:hover {
  color: #c8a96e;
}

@media screen and (max-width: 900px) {
  .autohall-contact-section { padding: 60px 24px; }
  .autohall-contact-grid { grid-template-columns: 1fr; gap: 16px; }
  .autohall-contact-heading { font-size: 24px; }
}

/* =====================
   RTL Layout Mirroring
   ===================== */
:global(.is-rtl) .service-content {
  direction: rtl;
  text-align: right;
}

:global(.is-rtl) .section_1,
:global(.is-rtl) .section_1_1,
:global(.is-rtl) .section_1_2,
:global(.is-rtl) .section_1_3 {
  flex-direction: row-reverse;
}

:global(.is-rtl) .prev.slide { transform: rotate(180deg); }
:global(.is-rtl) .next.slide { transform: rotate(180deg); }

:global(.is-rtl) .autohall-info-inner { direction: rtl; }
:global(.is-rtl) .autohall-contact-section { direction: rtl; }

/* =====================
   Full Video Modal
   ===================== */
.video-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: modal-fade-in 0.25s ease;
}

@keyframes modal-fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.video-modal-box {
  position: relative;
  width: 90vw;
  max-width: 1200px;
  aspect-ratio: 16 / 9;
  background: #000;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.7);
  animation: modal-scale-in 0.25s ease;
}

@keyframes modal-scale-in {
  from { transform: scale(0.95); opacity: 0; }
  to   { transform: scale(1);    opacity: 1; }
}

.video-modal-player {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.video-modal-close {
  position: absolute;
  top: 14px;
  right: 16px;
  z-index: 10;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: #fff;
  font-size: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  backdrop-filter: blur(4px);
}

.video-modal-close:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* =====================
   RTL Support
   ===================== */
:global(.is-rtl) .autohall-info-inner {
  direction: rtl;
  text-align: right;
}

:global(.is-rtl) .autohall-detail-item {
  flex-direction: row-reverse;
}

:global(.is-rtl) .autohall-cta-btn {
  letter-spacing: 0;
}

</style>