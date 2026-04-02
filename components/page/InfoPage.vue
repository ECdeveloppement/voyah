<template>
  <div :class="['info-page', `info-page--${theme.tone}`]">
    <PageHero
      :eyebrow="textFor(page.eyebrow)"
      :title="textFor(page.title)"
      :summary="textFor(page.summary)"
      :image="page.heroImage"
      :align="theme.heroAlign"
      :compact="theme.compactHero"
    >
      <template v-if="page.ctaSlug && page.ctaLabel" #actions>
        <BaseButton :to="buildPath(page.ctaSlug)" variant="primary">
          {{ textFor(page.ctaLabel) }}
        </BaseButton>
      </template>

      <template v-if="theme.showMeta" #meta>
        <div class="hero-panel" data-reveal>
          <div class="hero-panel__label">{{ textFor(theme.panelTitle) }}</div>
          <div class="hero-panel__value">{{ panelValue }}</div>
          <p class="hero-panel__copy">{{ textFor(theme.panelBody) }}</p>
        </div>
      </template>
    </PageHero>

    <section class="info-page-nav">
      <div class="container info-page-nav__inner">
        <a
          v-for="link in sectionLinks"
          :key="link.id"
          :href="`#${link.id}`"
          :class="['info-page-nav__link', { active: activeSection === link.id }]"
        >
          {{ link.label }}
        </a>
      </div>
    </section>

    <section v-if="displayMetrics.length" ref="metricsRef" class="section-shell info-metrics-shell">
      <div class="container">
        <MetricGrid :metrics="displayMetrics" />
      </div>
    </section>

    <section ref="contentRef" class="info-features">
      <div
        v-for="(block, index) in page.blocks"
        :id="sectionLinks[index]?.id"
        :key="block.image"
        :class="['info-feature', { reverse: index % 2 === 1 }]"
      >
        <div class="container info-feature__grid">
          <div class="info-feature__media" data-reveal>
            <div class="info-feature__media-shell">
              <img :src="block.image" :alt="textFor(block.title)" />
              <div class="info-feature__badge">{{ chapterLabel(index) }}</div>
            </div>
          </div>

          <article class="info-feature__copy" data-reveal>
            <p class="info-feature__kicker">{{ chapterLabel(index) }}</p>
            <h2 class="info-feature__title">{{ textFor(block.title) }}</h2>
            <p class="info-feature__body">{{ textFor(block.body) }}</p>

          </article>
        </div>
      </div>
    </section>

    <section v-if="page.ctaSlug && page.ctaLabel" class="section-shell info-cta-shell">
      <div class="container">
        <div class="info-cta" data-reveal>
          <p class="info-cta__kicker">{{ textFor(theme.ctaTitle) }}</p>
          <h2 class="info-cta__headline">{{ textFor(theme.ctaHeadline) }}</h2>
          <p class="info-cta__copy">{{ textFor(theme.ctaBody) }}</p>
          <div v-if="page.ctaSlug && page.ctaLabel" class="button-row">
            <BaseButton :to="buildPath(page.ctaSlug)" variant="primary">
              {{ textFor(page.ctaLabel) }}
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { InfoDefinition, LocalizedText, Metric } from '~/data/site'
import BaseButton from '~/components/common/BaseButton.vue'
import MetricGrid from '~/components/common/MetricGrid.vue'
import PageHero from '~/components/common/PageHero.vue'
import { useSectionReveal } from '~/composables/useSectionReveal'
import { useSiteContent } from '~/composables/useSiteContent'

const props = defineProps<{
  page: InfoDefinition
}>()

const { buildPath, textFor } = useSiteContent()
const metricsRef = useSectionReveal({ y: 28, duration: 0.8, stagger: 0.08 })
const contentRef = useSectionReveal({ y: 34, duration: 0.95, stagger: 0.12 })
const activeSection = ref('')
let observer: IntersectionObserver | null = null

const copy = (en: string, fr: string, ar: string): LocalizedText => ({ en, fr, ar })

const themeMap: Record<
  string,
  {
    tone: string
    heroAlign: 'start' | 'center'
    compactHero: boolean
    showMeta: boolean
    panelTitle: LocalizedText
    panelValue?: string
    panelBody: LocalizedText
    ctaTitle: LocalizedText
    ctaHeadline: LocalizedText
    ctaBody: LocalizedText
  }
> = {
  'brand.html': {
    tone: 'brand',
    heroAlign: 'center',
    compactHero: false,
    showMeta: false,
    panelTitle: copy('Brand role', 'Role de la marque', 'دور العلامة'),
    panelBody: copy(
      'Rooted in Chinese culture, Voyah blends Chinese elegance with modern technology.',
      'Enracinee dans la culture chinoise, Voyah mele l elegance chinoise a la technologie moderne.',
      'تنطلق Voyah من الثقافة الصينية وتمزج بين الأناقة الصينية والتكنولوجيا الحديثة.'
    ),
    ctaTitle: copy('Brand system', 'Systeme de marque', 'منظومة العلامة'),
    ctaHeadline: copy(
      'A premium intelligent new-energy brand with Chinese cultural confidence',
      'Une marque haut de gamme a energies nouvelles intelligentes avec une forte confiance culturelle chinoise',
      'علامة راقية ذكية للطاقة الجديدة بثقة ثقافية صينية واضحة'
    ),
    ctaBody: copy(
      'Voyah is committed to creating premium new-energy vehicles with Chinese cultural depth and intelligent character.',
      'Voyah s engage a creer des vehicules premium a energie nouvelle avec une profondeur culturelle chinoise et un caractere intelligent.',
      'تلتزم Voyah بابتكار مركبات فاخرة للطاقة الجديدة تحمل عمقاً ثقافياً صينياً وطابعاً ذكياً.'
    )
  },
  'book-drive.html': {
    tone: 'drive',
    heroAlign: 'start',
    compactHero: true,
    showMeta: false,
    panelTitle: copy('Booking path', 'Parcours de reservation', 'مسار الحجز'),
    panelBody: copy(
      'Selection, store coordination, and the first ownership touchpoint are treated as one connected flow.',
      'La selection, la coordination magasin et le premier point de contact de possession sont traites comme un seul flux.',
      'يُتعامل مع الاختيار وتنسيق المعرض وأول نقطة تواصل للملكية كمسار واحد.'
    ),
    ctaTitle: copy('Test drive', 'Essai', 'تجربة القيادة'),
    ctaHeadline: copy(
      'Move from discovery to visit planning through a calm premium journey',
      'Passez de la decouverte a la planification de visite dans le meme parcours premium',
      'انتقل من الاكتشاف إلى تخطيط الزيارة ضمن رحلة فاخرة هادئة'
    ),
    ctaBody: copy(
      'A calm premium journey helps users move smoothly from vehicle discovery to visit planning.',
      'Une experience premium et calme aide l utilisateur a passer en douceur de la decouverte a la planification de visite.',
      'تساعد الرحلة الفاخرة الهادئة المستخدم على الانتقال بسلاسة من اكتشاف السيارة إلى تخطيط الزيارة.'
    )
  },
  'store.html': {
    tone: 'store',
    heroAlign: 'start',
    compactHero: false,
    showMeta: true,
    panelTitle: copy('Store network', 'Reseau de magasins', 'شبكة المعارض'),
    panelValue: '360°',
    panelBody: copy(
      'The store center connects discovery, consultation, booking, delivery, and ownership support as one premium journey.',
      'Le centre de magasins relie découverte, conseil, réservation, livraison et accompagnement comme un seul parcours premium.',
      'يربط مركز المعارض بين الاكتشاف والاستشارة والحجز والتسليم ودعم الملكية كرحلة فاخرة واحدة.'
    ),
    ctaTitle: copy('Store center', 'Centre de magasins', 'مركز المعارض'),
    ctaHeadline: copy(
      'A premium space system spanning arrival, consultation, and handover',
      'Un système d’espaces premium couvrant l accueil, le conseil et la remise',
      'نظام مساحات فاخرة يغطي الاستقبال والاستشارة والتسليم'
    ),
    ctaBody: copy(
      'Voyah store environments are designed to make the transition from vehicle interest to ownership feel calm, guided, and premium.',
      'Les environnements de magasin Voyah sont conçus pour rendre le passage de l’intérêt pour le véhicule à la possession plus calme, guidé et premium.',
      'صممت بيئات معارض Voyah لجعل الانتقال من الاهتمام بالمركبة إلى الملكية أكثر هدوءاً وتوجيهاً وطابعاً فاخراً.'
    )
  },
  'service.html': {
    tone: 'default',
    heroAlign: 'start',
    compactHero: false,
    showMeta: false,
    panelTitle: copy('Service promise', 'Promesse de service', 'وعد الخدمة'),
    panelValue: '7×24',
    panelBody: copy(
      'Every touchpoint is designed around sincere reception, ceremonial delivery, all-day protection, and professional support.',
      'Chaque point de contact est pense autour d un accueil sincere, d une livraison ceremonielle, d une protection continue et d un soutien professionnel.',
      'صُممت كل نقطة تواصل حول استقبال صادق وتسليم احتفالي وحماية مستمرة ودعم مهني.'
    ),
    ctaTitle: copy('Voyah Service', 'Service Voyah', 'خدمات Voyah'),
    ctaHeadline: copy(
      'You focus on chasing freedom and dreams while Voyah focuses on careful protection',
      'Vous poursuivez la liberte et les reves pendant que Voyah se concentre sur une protection attentive',
      'أنت تنطلق نحو الحرية والأحلام بينما تركز Voyah على الحماية الدقيقة'
    ),
    ctaBody: copy(
      'Voyah Service follows a wholehearted service philosophy and is committed to delivering a trusted full-journey ownership experience.',
      'Voyah Service suit une philosophie de service entierement devouee et s engage a offrir une experience de possession digne de confiance sur l ensemble du parcours.',
      'تلتزم Voyah Service بفلسفة خدمة قائمة على الإخلاص الكامل وتهدف إلى تقديم تجربة ملكية موثوقة عبر الرحلة بأكملها.'
    )
  },
  'energy.html': {
    tone: 'default',
    heroAlign: 'start',
    compactHero: false,
    showMeta: false,
    panelTitle: copy('Energy network', 'Reseau energie', 'شبكة الطاقة'),
    panelValue: '1.54M+',
    panelBody: copy(
      'The energy layer combines charging scenes, partner infrastructure, and digital guidance into one connected ecosystem.',
      'La couche energie combine scenes de recharge, infrastructures partenaires et guidage numerique dans un ecosysteme unique.',
      'تجمع منظومة الطاقة بين مشاهد الشحن والبنية التحتية الشريكة والإرشاد الرقمي في نظام مترابط واحد.'
    ),
    ctaTitle: copy('Voyah Energy', 'Energie Voyah', 'طاقة Voyah'),
    ctaHeadline: copy(
      'A connected energy ecosystem for daily driving and long-distance use',
      'Un ecosysteme energie connecte pour l usage quotidien et les longs trajets',
      'منظومة طاقة مترابطة للاستخدام اليومي وللرحلات الطويلة'
    ),
    ctaBody: copy(
      'Voyah Energy links charging resources, supercharging capability, and digital route guidance to support every ownership rhythm.',
      'Voyah Energy relie les ressources de recharge, la recharge ultra rapide et le guidage numerique pour soutenir chaque rythme d usage.',
      'تربط طاقة Voyah بين موارد الشحن والقدرة على الشحن السريع والتوجيه الرقمي لدعم كل أنماط الاستخدام.'
    )
  }
}

const defaultTheme = {
  tone: 'default',
  heroAlign: 'start' as const,
  compactHero: false,
  showMeta: false,
  panelTitle: copy('Page chapter', 'Chapitre', 'فصل الصفحة'),
  panelBody: copy(
    'Image, information, and service touchpoints stay aligned within one calm premium page rhythm.',
    'L image, l information et les points de service restent alignes dans un meme rythme premium apaisé.',
    'تبقى الصورة والمعلومة ونقاط الخدمة منسجمة ضمن إيقاع فاخر وهادئ واحد للصفحة.'
  ),
  ctaTitle: copy('More from Voyah', 'Plus de Voyah', 'المزيد من Voyah'),
  ctaHeadline: copy(
    'Continue exploring the broader Voyah brand, service, and ownership system',
    'Poursuivez l exploration de l univers Voyah, de ses services et de son experience de possession',
    'واصل استكشاف منظومة Voyah الأوسع للعلامة والخدمة وتجربة الملكية'
  ),
  ctaBody: copy(
    'Each page connects product understanding, service access, and brand storytelling through one continuous premium experience.',
    'Chaque page relie la comprehension du produit, l acces au service et le recit de marque dans une experience premium continue.',
    'تربط كل صفحة بين فهم المنتج والوصول إلى الخدمة وسرد العلامة ضمن تجربة فاخرة متواصلة.'
  )
}

const theme = computed(() => themeMap[props.page.slug] ?? defaultTheme)

const displayMetrics = computed<Metric[]>(() => {
  if (props.page.metrics?.length) {
    return props.page.metrics
  }

  return []
})

const sectionLinks = computed(() =>
  props.page.blocks.map((block, index) => ({
    id: `chapter-${index + 1}`,
    label: textFor(block.title)
  }))
)

const chapterLabel = (index: number) => `0${index + 1}`

const panelValue = computed(() => theme.value.panelValue ?? `${props.page.blocks.length}`.padStart(2, '0'))

watch(
  sectionLinks,
  (links) => {
    activeSection.value = links[0]?.id ?? ''
  },
  { immediate: true }
)

onMounted(() => {
  const nodes = sectionLinks.value
    .map((link) => document.getElementById(link.id))
    .filter((node): node is HTMLElement => Boolean(node))

  if (!nodes.length) {
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (visible?.target?.id) {
        activeSection.value = visible.target.id
      }
    },
    {
      rootMargin: '-18% 0px -58% 0px',
      threshold: [0.12, 0.35, 0.6]
    }
  )

  nodes.forEach((node) => observer?.observe(node))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.info-page {
  background: #fff;
}

.info-page-nav {
  position: sticky;
  top: 68px;
  z-index: 12;
  backdrop-filter: blur(14px);
  background: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid rgba(16, 23, 32, 0.08);
}

.info-page-nav__inner {
  display: flex;
  gap: 28px;
  overflow-x: auto;
  padding: 0;
  min-height: 56px;
  align-items: end;
}

.info-page-nav__link {
  white-space: nowrap;
  min-height: auto;
  padding: 18px 0 14px;
  display: inline-flex;
  align-items: center;
  border-radius: 0;
  border: 0;
  border-bottom: 2px solid transparent;
  background: transparent;
  color: #60707f;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.info-page-nav__link:hover {
  color: #101720;
}

.info-page-nav__link.active {
  border-bottom-color: #b31d22;
  color: #101720;
  box-shadow: none;
}

.hero-panel {
  padding: 24px 24px 22px;
  border-radius: 2px;
  background: rgba(8, 12, 18, 0.38);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: none;
  backdrop-filter: blur(10px);
  color: #fff;
}

.hero-panel__label {
  color: rgba(255, 255, 255, 0.74);
  font-size: 0.82rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.hero-panel__value {
  margin-top: 10px;
  font-size: clamp(2rem, 4vw, 3.6rem);
  line-height: 1;
}

.hero-panel__copy {
  margin: 14px 0 0;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.75;
}

.info-metrics-shell {
  padding-top: 24px;
  padding-bottom: 18px;
  background: linear-gradient(180deg, #f7f4ef 0%, #ffffff 100%);
}

.info-features {
  background: #fff;
}

.info-feature {
  position: relative;
  padding: 84px 0;
}

.info-feature:nth-child(even) {
  background: #f8f6f2;
}

.info-feature__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.24fr) minmax(320px, 0.76fr);
  gap: 42px;
  align-items: center;
}

.info-feature.reverse .info-feature__media {
  order: 2;
}

.info-feature.reverse .info-feature__copy {
  order: 1;
}

.info-feature__media-shell {
  position: relative;
  overflow: hidden;
  border-radius: 0;
  box-shadow: none;
}

.info-feature__media-shell img {
  width: 100%;
  min-height: 560px;
  object-fit: cover;
  transition: transform 0.7s ease;
}

.info-feature__media-shell:hover img {
  transform: scale(1.035);
}

.info-feature__badge {
  position: absolute;
  inset-inline-start: 18px;
  inset-block-start: 18px;
  min-width: 50px;
  height: 50px;
  padding: 0 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  background: rgba(255, 255, 255, 0.92);
  color: #0f1720;
  font-size: 0.84rem;
  font-weight: 600;
  letter-spacing: 0.08em;
}

.info-feature__copy {
  display: grid;
  gap: 16px;
  align-content: center;
}

.info-feature__kicker,
.info-cta__kicker {
  margin: 0;
  color: #8d6b43;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 0.82rem;
}

.info-feature__title {
  margin: 0;
  color: #101720;
  font-size: clamp(2.1rem, 3.1vw, 3.7rem);
  line-height: 0.98;
}

.info-feature__body,
.info-cta__copy {
  margin: 0;
  color: #566270;
  line-height: 1.82;
  font-size: 1rem;
  max-width: 560px;
}

.info-feature__actions {
  padding-top: 4px;
}

.info-cta-shell {
  background:
    linear-gradient(180deg, rgba(10, 14, 20, 0.82), rgba(10, 14, 20, 0.95)),
    url('/static/assets/world-fec50d02.jpg') center / cover no-repeat;
}

.info-cta {
  padding: 38px;
  border-radius: 0;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.2);
}

.info-cta__headline {
  margin: 12px 0 0;
  font-size: clamp(2rem, 3vw, 3.4rem);
  line-height: 1.02;
}

.info-cta__copy {
  margin-top: 16px;
  max-width: 760px;
  color: rgba(237, 242, 247, 0.78);
}

.info-page :deep(.metric-grid) {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
}

.info-page :deep(.metric-card) {
  background: rgba(255, 255, 255, 0.92);
  border: 0;
  border-inline-end: 1px solid rgba(16, 23, 32, 0.08);
  box-shadow: none;
  border-radius: 0;
  padding: 18px 22px 20px;
}

.info-page :deep(.metric-card:hover) {
  transform: none;
}

.info-page :deep(.metric-card:last-child) {
  border-inline-end: 0;
}

.info-page :deep(.metric-value) {
  color: #101720;
}

.info-page :deep(.metric-label) {
  color: #5c6875;
}

@media (max-width: 1024px) {
  .info-page-nav {
    top: 72px;
  }

  .info-feature__grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .info-feature.reverse .info-feature__media,
  .info-feature.reverse .info-feature__copy {
    order: initial;
  }
}

@media (max-width: 768px) {
  .info-feature {
    padding: 48px 0;
  }

  .info-feature__media-shell img {
    min-height: 300px;
  }

  .info-cta {
    padding: 24px;
  }

  .info-page :deep(.metric-grid) {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>

