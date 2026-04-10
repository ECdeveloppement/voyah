<template>
  <div
    :class="[
      'info-page',
      `info-page--${theme.tone}`,
      `info-page--${layoutMode}`,
      `info-page--${page.slug.replace('.html', '')}`,
      theme.pageWidthClass ? `info-page--${theme.pageWidthClass}` : null
    ]"
  >
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

    <section v-if="theme.showNav" class="info-page-nav">
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

    <section v-if="theme.showMetrics && displayMetrics.length" ref="metricsRef" class="section-shell info-metrics-shell">
      <div class="container">
        <MetricGrid :metrics="displayMetrics" />
      </div>
    </section>

    <section v-if="isBrandRoute" ref="contentRef" class="info-features info-features--brand-story">
      <div class="container">
        <article
          v-if="page.blocks[0]"
          :id="sectionLinks[0]?.id"
          class="info-brand-lead"
          data-reveal
        >
          <figure class="info-brand-lead__media">
            <img :src="page.blocks[0].image" :alt="textFor(page.blocks[0].title)" />
          </figure>
          <div class="info-brand-lead__copy">
            <p class="info-brand-lead__index">{{ chapterLabel(0) }}</p>
            <h2 class="info-brand-lead__title">{{ textFor(page.blocks[0].title) }}</h2>
            <p class="info-brand-lead__body">{{ textFor(page.blocks[0].body) }}</p>
          </div>
        </article>

        <div class="info-brand-grid">
          <article
            v-for="(block, index) in page.blocks.slice(1)"
            :id="sectionLinks[index + 1]?.id"
            :key="`${page.slug}-${block.image}`"
            class="info-brand-card"
            data-reveal
          >
            <figure class="info-brand-card__media">
              <img :src="block.image" :alt="textFor(block.title)" />
            </figure>
            <div class="info-brand-card__copy">
              <p class="info-brand-card__index">{{ chapterLabel(index + 1) }}</p>
              <h2 class="info-brand-card__title">{{ textFor(block.title) }}</h2>
              <p class="info-brand-card__body">{{ textFor(block.body) }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <div v-else-if="isStoreRoute" ref="contentRef">
      <InfoEditorialSections
        variant="store"
        :blocks="page.blocks"
        :section-links="sectionLinks"
        :chapter-label="chapterLabel"
        :text-for="textFor"
      />
    </div>

    <section v-else-if="isCorporateRoute" ref="contentRef" class="info-features info-features--corporate-values">
      <div class="container">
        <div class="info-corporate-grid">
          <article
            v-if="page.blocks[0]"
            :id="sectionLinks[0]?.id"
            class="info-corporate-lead"
            data-reveal
          >
            <figure class="info-corporate-lead__media">
              <img :src="page.blocks[0].image" :alt="textFor(page.blocks[0].title)" />
            </figure>
            <div class="info-corporate-lead__copy">
              <p class="info-corporate-lead__index">{{ chapterLabel(0) }}</p>
              <h2 class="info-corporate-lead__title">{{ textFor(page.blocks[0].title) }}</h2>
              <p class="info-corporate-lead__body">{{ textFor(page.blocks[0].body) }}</p>
            </div>
          </article>

          <div class="info-corporate-stack">
            <article
              v-for="(block, index) in page.blocks.slice(1)"
              :id="sectionLinks[index + 1]?.id"
              :key="`${page.slug}-${block.image}`"
              class="info-corporate-card"
              data-reveal
            >
              <figure class="info-corporate-card__media">
                <img :src="block.image" :alt="textFor(block.title)" />
              </figure>
              <div class="info-corporate-card__copy">
                <p class="info-corporate-card__index">{{ chapterLabel(index + 1) }}</p>
                <h2 class="info-corporate-card__title">{{ textFor(block.title) }}</h2>
                <p class="info-corporate-card__body">{{ textFor(block.body) }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <div v-else-if="isServiceRoute" ref="contentRef">
      <InfoEditorialSections
        variant="service"
        :blocks="page.blocks"
        :section-links="sectionLinks"
        :chapter-label="chapterLabel"
        :text-for="textFor"
      />
    </div>

    <div v-else-if="isEnergyRoute" ref="contentRef">
      <InfoEditorialSections
        variant="energy"
        :blocks="page.blocks"
        :section-links="sectionLinks"
        :chapter-label="chapterLabel"
        :text-for="textFor"
      />
    </div>

    <section v-else-if="isCareerRoute" ref="contentRef" class="info-features info-features--career-flow">
      <div
        v-for="(block, index) in page.blocks"
        :id="sectionLinks[index]?.id"
        :key="`${page.slug}-${block.image}`"
        :class="['info-career-row', { reverse: index % 2 === 1 }]"
      >
        <div class="container info-career-row__grid">
          <figure class="info-career-row__media" data-reveal>
            <img :src="block.image" :alt="textFor(block.title)" />
          </figure>

          <article class="info-career-row__copy" data-reveal>
            <p class="info-career-row__index">{{ chapterLabel(index) }}</p>
            <h2 class="info-career-row__title">{{ textFor(block.title) }}</h2>
            <p class="info-career-row__body">{{ textFor(block.body) }}</p>
          </article>
        </div>
      </div>
    </section>

    <div v-else-if="isDocumentRoute" ref="contentRef">
      <InfoDocumentRows
        :blocks="page.blocks"
        :section-links="sectionLinks"
        :chapter-label="chapterLabel"
        :text-for="textFor"
      />
    </div>

    <section v-else ref="contentRef" class="info-features">
      <div
        v-for="(block, index) in page.blocks"
        :id="sectionLinks[index]?.id"
        :key="block.image"
        :class="['info-feature', { reverse: index % 2 === 1 && layoutMode !== 'document' }]"
      >
        <div :class="['container', 'info-feature__grid']">
          <div class="info-feature__media" data-reveal>
            <div class="info-feature__media-shell">
              <img :src="block.image" :alt="textFor(block.title)" />
              <div v-if="layoutMode !== 'document'" class="info-feature__badge">{{ chapterLabel(index) }}</div>
            </div>
          </div>

          <article class="info-feature__copy" data-reveal>
            <p v-if="layoutMode !== 'document'" class="info-feature__kicker">{{ chapterLabel(index) }}</p>
            <h2 class="info-feature__title">{{ textFor(block.title) }}</h2>
            <p class="info-feature__body">{{ textFor(block.body) }}</p>

          </article>
        </div>
      </div>
    </section>

    <section v-if="theme.showCta && page.ctaSlug && page.ctaLabel" class="section-shell info-cta-shell">
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
import InfoDocumentRows from '~/components/page/info/InfoDocumentRows.vue'
import InfoEditorialSections from '~/components/page/info/InfoEditorialSections.vue'
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
    showNav: boolean
    showCta: boolean
    panelTitle: LocalizedText
    panelValue?: string
    panelBody: LocalizedText
    ctaTitle: LocalizedText
    ctaHeadline: LocalizedText
    ctaBody: LocalizedText
    showMetrics: boolean
    pageWidthClass?: string
  }
> = {
  'brand.html': {
    tone: 'brand',
    heroAlign: 'center',
    compactHero: false,
    showMeta: false,
    showNav: false,
    showCta: false,
    showMetrics: false,
    pageWidthClass: 'wide',
    panelTitle: copy('Brand role', 'Rôle de la marque', 'دور العلامة'),
    panelBody: copy(
      'Rooted in Chinese culture, Voyah blends Chinese elegance with modern technology.',
      'Enracinée dans la culture chinoise, Voyah mêle l’élégance chinoise à la technologie moderne.',
      'تنطلق Voyah من الثقافة الصينية وتمزج بين الأناقة الصينية والتكنولوجيا الحديثة.'
    ),
    ctaTitle: copy('Brand system', 'Système de marque', 'منظومة العلامة'),
    ctaHeadline: copy(
      'A premium intelligent new-energy brand with Chinese cultural confidence',
      'Une marque haut de gamme à énergies nouvelles intelligentes portée par une forte confiance culturelle chinoise',
      'علامة راقية ذكية للطاقة الجديدة بثقة ثقافية صينية واضحة'
    ),
    ctaBody: copy(
      'Voyah is committed to creating premium new-energy vehicles with Chinese cultural depth and intelligent character.',
      'Voyah s’engage à créer des véhicules premium à énergie nouvelle avec une profondeur culturelle chinoise et un caractère intelligent.',
      'تلتزم Voyah بابتكار مركبات فاخرة للطاقة الجديدة تحمل عمقاً ثقافياً صينياً وطابعاً ذكياً.'
    )
  },
  'book-drive.html': {
    tone: 'drive',
    heroAlign: 'start',
    compactHero: true,
    showMeta: false,
    showNav: false,
    showCta: false,
    showMetrics: false,
    panelTitle: copy('Booking path', 'Parcours de réservation', 'مسار الحجز'),
    panelBody: copy(
      'Selection, store coordination, and the first ownership touchpoint are treated as one connected flow.',
      'La sélection, la coordination magasin et le premier point de contact de possession sont traités comme un seul flux.',
      'يُتعامل مع الاختيار وتنسيق المعرض وأول نقطة تواصل للملكية كمسار واحد.'
    ),
    ctaTitle: copy('Test drive', 'Essai', 'تجربة القيادة'),
    ctaHeadline: copy(
      'Move from discovery to visit planning through a calm premium journey',
      'Passez de la découverte à la planification de visite dans le même parcours premium apaisé',
      'انتقل من الاكتشاف إلى تخطيط الزيارة ضمن رحلة فاخرة هادئة'
    ),
    ctaBody: copy(
      'A calm premium journey helps users move smoothly from vehicle discovery to visit planning.',
      'Une expérience premium et calme aide l’utilisateur à passer en douceur de la découverte du véhicule à la planification de visite.',
      'تساعد الرحلة الفاخرة الهادئة المستخدم على الانتقال بسلاسة من اكتشاف السيارة إلى تخطيط الزيارة.'
    )
  },
  'store.html': {
    tone: 'store',
    heroAlign: 'start',
    compactHero: false,
    showMeta: true,
    showNav: false,
    showCta: false,
    showMetrics: true,
    pageWidthClass: 'wide',
    panelTitle: copy('Store network', 'Réseau de magasins', 'شبكة المعارض'),
    panelValue: '360°',
    panelBody: copy(
      'The store center connects discovery, consultation, booking, delivery, and ownership support as one premium journey.',
      'Le centre de magasins relie découverte, conseil, réservation, livraison et accompagnement comme un seul parcours premium.',
      'يربط مركز المعارض بين الاكتشاف والاستشارة والحجز والتسليم ودعم الملكية كرحلة فاخرة واحدة.'
    ),
    ctaTitle: copy('Store center', 'Centre de magasins', 'مركز المعارض'),
    ctaHeadline: copy(
      'A premium space system spanning arrival, consultation, and handover',
      'Un système d’espaces premium couvrant l’accueil, le conseil et la remise',
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
    showNav: false,
    showCta: false,
    showMetrics: true,
    panelTitle: copy('Service promise', 'Promesse de service', 'وعد الخدمة'),
    panelValue: '7×24',
    panelBody: copy(
      'Every touchpoint is designed around sincere reception, ceremonial delivery, all-day protection, and professional support.',
      'Chaque point de contact est pensé autour d’un accueil sincère, d’une livraison cérémonielle, d’une protection continue et d’un soutien professionnel.',
      'صُممت كل نقطة تواصل حول استقبال صادق وتسليم احتفالي وحماية مستمرة ودعم مهني.'
    ),
    ctaTitle: copy('Voyah Service', 'Service Voyah', 'خدمات Voyah'),
    ctaHeadline: copy(
      'You focus on chasing freedom and dreams while Voyah focuses on careful protection',
      'Vous poursuivez la liberté et les rêves pendant que Voyah se concentre sur une protection attentive',
      'أنت تنطلق نحو الحرية والأحلام بينما تركز Voyah على الحماية الدقيقة'
    ),
    ctaBody: copy(
      'Voyah Service follows a wholehearted service philosophy and is committed to delivering a trusted full-journey ownership experience.',
      'Voyah Service suit une philosophie de service entièrement dévouée et s’engage à offrir une expérience de possession digne de confiance sur l’ensemble du parcours.',
      'تلتزم Voyah Service بفلسفة خدمة قائمة على الإخلاص الكامل وتهدف إلى تقديم تجربة ملكية موثوقة عبر الرحلة بأكملها.'
    )
  },
  'energy.html': {
    tone: 'default',
    heroAlign: 'start',
    compactHero: false,
    showMeta: false,
    showNav: false,
    showCta: false,
    showMetrics: true,
    panelTitle: copy('Energy network', 'Réseau énergie', 'شبكة الطاقة'),
    panelValue: '1.54M+',
    panelBody: copy(
      'The energy layer combines charging scenes, partner infrastructure, and digital guidance into one connected ecosystem.',
      'La couche énergie combine scènes de recharge, infrastructures partenaires et guidage numérique dans un écosystème unique.',
      'تجمع منظومة الطاقة بين مشاهد الشحن والبنية التحتية الشريكة والإرشاد الرقمي في نظام مترابط واحد.'
    ),
    ctaTitle: copy('Voyah Energy', 'Énergie Voyah', 'طاقة Voyah'),
    ctaHeadline: copy(
      'A connected energy ecosystem for daily driving and long-distance use',
      'Un écosystème énergie connecté pour l’usage quotidien et les longs trajets',
      'منظومة طاقة مترابطة للاستخدام اليومي وللرحلات الطويلة'
    ),
    ctaBody: copy(
      'Voyah Energy links charging resources, supercharging capability, and digital route guidance to support every ownership rhythm.',
      'Voyah Energy relie les ressources de recharge, la recharge ultra rapide et le guidage numérique pour soutenir chaque rythme d’usage.',
      'تربط طاقة Voyah بين موارد الشحن والقدرة على الشحن السريع والتوجيه الرقمي لدعم كل أنماط الاستخدام.'
    )
  },
  'corporate.html': {
    tone: 'brand',
    heroAlign: 'start',
    compactHero: false,
    showMeta: false,
    showNav: false,
    showCta: false,
    showMetrics: false,
    panelTitle: copy('Communication', 'Communication', 'التواصل'),
    panelBody: copy(
      'Voyah communication presents mission, vision, and values as one coherent long-term brand narrative.',
      'La communication de Voyah présente la mission, la vision et les valeurs comme un récit de marque cohérent sur le long terme.',
      'يعرض تواصل Voyah المهمة والرؤية والقيم كسرد علامة متماسك على المدى الطويل.'
    ),
    ctaTitle: copy('Brand culture', 'Culture de marque', 'ثقافة العلامة'),
    ctaHeadline: copy(
      'Mission, vision, and values aligned around long-term premium development',
      'Mission, vision et valeurs alignées autour d’un développement premium de long terme',
      'المهمة والرؤية والقيم مصطفّة حول تطور فاخر طويل الأمد'
    ),
    ctaBody: copy(
      'Corporate culture content clarifies how Voyah translates technology ambition into user-oriented product and service standards.',
      'Le contenu de culture d’entreprise clarifie la manière dont Voyah transforme son ambition technologique en standards produits et services orientés utilisateur.',
      'يوضح محتوى الثقافة المؤسسية كيف تحوّل Voyah طموحها التقني إلى معايير منتج وخدمة موجهة للمستخدم.'
    )
  },
  'joinus.html': {
    tone: 'drive',
    heroAlign: 'start',
    compactHero: true,
    showMeta: false,
    showNav: false,
    showCta: false,
    showMetrics: false,
    panelTitle: copy('Careers', 'Carrières', 'الوظائف'),
    panelBody: copy(
      'Campus and social recruitment channels are structured to connect talent with Voyah’s long-term growth roles.',
      'Les canaux de recrutement campus et social sont structurés pour relier les talents aux rôles de croissance de long terme chez Voyah.',
      'تمت هيكلة قنوات التوظيف الجامعي والاجتماعي لربط المواهب بأدوار النمو طويل الأمد لدى Voyah.'
    ),
    ctaTitle: copy('Join Voyah', 'Rejoindre Voyah', 'الانضمام إلى Voyah'),
    ctaHeadline: copy(
      'Build intelligent mobility careers with product, digital, and service teams',
      'Construire des parcours de mobilité intelligente avec les équipes produit, numérique et service',
      'بناء مسارات مهنية في التنقل الذكي مع فرق المنتج والرقمنة والخدمة'
    ),
    ctaBody: copy(
      'Recruitment pages focus on role clarity, application access, and onboarding readiness for prospective candidates.',
      'Les pages de recrutement se concentrent sur la clarté des rôles, l’accès à la candidature et la préparation à l’intégration des candidats.',
      'تركز صفحات التوظيف على وضوح الأدوار وسهولة التقديم والاستعداد للانضمام بالنسبة للمرشحين.'
    )
  },
  'recruit-partners.html': {
    tone: 'store',
    heroAlign: 'start',
    compactHero: true,
    showMeta: false,
    showNav: false,
    showCta: false,
    showMetrics: false,
    panelTitle: copy('Partners', 'Partenaires', 'الشركاء'),
    panelBody: copy(
      'Partner recruitment aligns network coverage, operation standards, and premium service capability.',
      'Le recrutement des partenaires aligne la couverture réseau, les standards opérationnels et la capacité de service premium.',
      'يربط استقطاب الشركاء بين تغطية الشبكة ومعايير التشغيل وقدرة الخدمة الفاخرة.'
    ),
    ctaTitle: copy('Partner growth', 'Croissance partenaires', 'نمو الشركاء'),
    ctaHeadline: copy(
      'Retail, delivery, and service collaboration under one partner framework',
      'Collaboration retail, livraison et service dans un cadre partenaire unique',
      'التعاون في البيع والتسليم والخدمة ضمن إطار شراكة موحد'
    ),
    ctaBody: copy(
      'The route emphasizes long-term collaboration quality rather than short-term channel expansion.',
      'La page met l’accent sur la qualité de collaboration de long terme plutôt que sur une expansion de canal à court terme.',
      'تركز الصفحة على جودة التعاون طويل الأمد بدلاً من التوسع القصير في القنوات.'
    )
  },
  'ir.html': {
    tone: 'default',
    heroAlign: 'start',
    compactHero: true,
    showMeta: false,
    showNav: false,
    showCta: false,
    showMetrics: false,
    panelTitle: copy('Investor Relations', 'Relations investisseurs', 'علاقات المستثمرين'),
    panelBody: copy(
      'Investor-facing disclosures organize company profile, governance, and reference materials for structured review.',
      'Les publications destinées aux investisseurs organisent le profil de l’entreprise, la gouvernance et les documents de référence pour une lecture structurée.',
      'تنظم الإفصاحات الموجهة للمستثمرين الملف التعريفي للشركة والحوكمة والمواد المرجعية ضمن مراجعة منظمة.'
    ),
    ctaTitle: copy('Investor information', 'Information investisseurs', 'معلومات المستثمرين'),
    ctaHeadline: copy(
      'Governance and reference documentation prepared for transparent review',
      'Documents de gouvernance et de référence préparés pour une lecture transparente',
      'وثائق الحوكمة والمراجع مُعدة لمراجعة شفافة'
    ),
    ctaBody: copy(
      'IR sections improve access to key corporate documents and improve consistency across investor communication touchpoints.',
      'Les sections IR améliorent l’accès aux documents clés de l’entreprise et renforcent la cohérence des points de contact de communication investisseurs.',
      'تحسن أقسام علاقات المستثمرين الوصول إلى المستندات المؤسسية الأساسية وتعزز اتساق نقاط تواصل المستثمرين.'
    )
  },
  'purchasing.html': {
    tone: 'default',
    heroAlign: 'start',
    compactHero: true,
    showMeta: false,
    showNav: false,
    showCta: false,
    showMetrics: false,
    panelTitle: copy('Procurement', 'Achats', 'المشتريات'),
    panelBody: copy(
      'Procurement disclosures provide public visibility into sourcing information and supplier collaboration structure.',
      'Les informations achats offrent une visibilité publique sur les données de sourcing et la structure de coopération fournisseurs.',
      'توفر إفصاحات المشتريات رؤية عامة حول بيانات التوريد وهيكل التعاون مع الموردين.'
    ),
    ctaTitle: copy('Procurement disclosure', 'Divulgation achats', 'إفصاح المشتريات'),
    ctaHeadline: copy(
      'Sourcing transparency, historical data, and supplier collaboration standards',
      'Transparence du sourcing, données historiques et standards de collaboration fournisseurs',
      'شفافية التوريد والبيانات التاريخية ومعايير تعاون الموردين'
    ),
    ctaBody: copy(
      'The page is organized for clearer review of purchasing history and current supplier-facing disclosure.',
      'La page est structurée pour une revue plus claire de l’historique d’achats et des informations actuelles destinées aux fournisseurs.',
      'تم تنظيم الصفحة لتمكين مراجعة أوضح لتاريخ الشراء والإفصاحات الحالية الموجهة للموردين.'
    )
  },
  'environmental.html': {
    tone: 'default',
    heroAlign: 'start',
    compactHero: true,
    showMeta: false,
    showNav: false,
    showCta: false,
    showMetrics: false,
    panelTitle: copy('Environment', 'Environnement', 'البيئة'),
    panelBody: copy(
      'Environmental information is disclosed for transparent public reference and long-term operational accountability.',
      'Les informations environnementales sont publiées pour une référence publique transparente et une responsabilité opérationnelle de long terme.',
      'يتم نشر المعلومات البيئية لمرجع عام شفاف ولمساءلة تشغيلية طويلة الأمد.'
    ),
    ctaTitle: copy('Environmental disclosure', 'Divulgation environnementale', 'الإفصاح البيئي'),
    ctaHeadline: copy(
      'Operational responsibility and sustainability disclosure in one structured route',
      'Responsabilité opérationnelle et divulgation durable dans un parcours structuré',
      'المسؤولية التشغيلية والإفصاح المستدام ضمن مسار منظم'
    ),
    ctaBody: copy(
      'Disclosure sections emphasize compliance, continuity, and long-term environmental management orientation.',
      'Les sections de divulgation mettent l’accent sur la conformité, la continuité et l’orientation de gestion environnementale de long terme.',
      'تؤكد أقسام الإفصاح على الامتثال والاستمرارية وتوجه الإدارة البيئية على المدى الطويل.'
    )
  },
  'document.html': {
    tone: 'default',
    heroAlign: 'start',
    compactHero: true,
    showMeta: false,
    showNav: false,
    showCta: false,
    showMetrics: false,
    panelTitle: copy('Documents', 'Documents', 'المستندات'),
    panelBody: copy(
      'Document pages centralize manuals and trusted references for easier retrieval and comparison.',
      'Les pages de documents centralisent les manuels et références utiles pour une recherche et une comparaison facilitées.',
      'تجمع صفحات المستندات الأدلة والمراجع الموثوقة لتسهيل الوصول والمقارنة.'
    ),
    ctaTitle: copy('Document center', 'Centre documentaire', 'مركز المستندات'),
    ctaHeadline: copy(
      'Manuals, reference files, and digital retrieval within one organized archive',
      'Manuels, fichiers de référence et accès numérique au sein d’une archive organisée',
      'الأدلة والملفات المرجعية والوصول الرقمي ضمن أرشيف منظم'
    ),
    ctaBody: copy(
      'The route organizes document access around ownership usage, reference review, and consistent digital retrieval paths.',
      'Cette page organise l’accès documentaire autour de l’usage en possession, de la revue de référence et de parcours numériques cohérents.',
      'ينظم هذا المسار الوصول إلى المستندات حول استخدام الملكية ومراجعة المراجع ومسارات الوصول الرقمي المتسقة.'
    )
  }
}

const defaultTheme = {
  tone: 'default',
  heroAlign: 'start' as const,
  compactHero: false,
  showMeta: false,
  showNav: true,
  showCta: false,
  panelTitle: copy('Page chapter', 'Chapitre de page', 'فصل الصفحة'),
  panelBody: copy(
    'Image, information, and service touchpoints stay aligned within one calm premium page rhythm.',
    'L’image, l’information et les points de service restent alignés dans un même rythme premium apaisé.',
    'تبقى الصورة والمعلومة ونقاط الخدمة منسجمة ضمن إيقاع فاخر وهادئ واحد للصفحة.'
  ),
  ctaTitle: copy('More from Voyah', 'Plus de Voyah', 'المزيد من Voyah'),
  ctaHeadline: copy(
    'Continue exploring the broader Voyah brand, service, and ownership system',
    'Poursuivez l’exploration de l’univers Voyah, de ses services et de son expérience de possession',
    'واصل استكشاف منظومة Voyah الأوسع للعلامة والخدمة وتجربة الملكية'
  ),
  ctaBody: copy(
    'Each page connects product understanding, service access, and brand storytelling through one continuous premium experience.',
    'Chaque page relie la compréhension du produit, l’accès au service et le récit de marque dans une expérience premium continue.',
    'تربط كل صفحة بين فهم المنتج والوصول إلى الخدمة وسرد العلامة ضمن تجربة فاخرة متواصلة.'
  )
}
const theme = computed(() => themeMap[props.page.slug] ?? defaultTheme)
const layoutMode = computed(() => {
  if (['ir.html', 'purchasing.html', 'environmental.html', 'document.html'].includes(props.page.slug)) return 'document'
  if (['store.html', 'service.html', 'energy.html', 'book-drive.html'].includes(props.page.slug)) return 'editorial'
  return 'brand'
})
const isBrandRoute = computed(() => props.page.slug === 'brand.html')
const isStoreRoute = computed(() => props.page.slug === 'store.html')
const isCorporateRoute = computed(() => props.page.slug === 'corporate.html')
const isServiceRoute = computed(() => props.page.slug === 'service.html')
const isEnergyRoute = computed(() => props.page.slug === 'energy.html')
const isCareerRoute = computed(() => ['joinus.html', 'recruit-partners.html'].includes(props.page.slug))
const isDocumentRoute = computed(() =>
  ['ir.html', 'purchasing.html', 'environmental.html', 'document.html'].includes(props.page.slug)
)

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

.info-page--wide :deep(.container) {
  max-width: 1368px;
}

.info-page--wide :deep(.page-hero-content) {
  padding-top: 128px;
}

.info-page--wide :deep(.page-summary) {
  max-width: 780px;
}

.info-page-nav {
  position: sticky;
  top: 64px;
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
  transition:
    color 0.32s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.32s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.32s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.32s cubic-bezier(0.22, 1, 0.36, 1);
}

.info-page-nav__link:hover {
  color: #101720;
  transform: translateY(-1px);
  opacity: 0.96;
}

.info-page-nav__link.active {
  border-bottom-color: #b31d22;
  color: #101720;
  box-shadow: none;
}

.info-page-nav__link:focus-visible {
  outline: 2px solid rgba(179, 29, 34, 0.4);
  outline-offset: 3px;
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

.info-features--store-flow,
.info-features--corporate-values,
.info-features--document-list {
  padding: 56px 0 92px;
}

.info-store-lead {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
  gap: 30px;
  margin-bottom: 28px;
}

.info-brand-lead {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
  gap: 32px;
  margin-bottom: 32px;
  align-items: end;
}

.info-brand-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
}

.info-store-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
}

.info-brand-lead__copy,
.info-store-lead__copy,
.info-corporate-lead__copy {
  display: grid;
  align-content: start;
  gap: 12px;
  padding: clamp(28px, 3vw, 42px);
  background: #f7f4ef;
  border: 1px solid rgba(16, 23, 32, 0.08);
}

.info-store-card,
.info-document-row {
  border-top: 1px solid rgba(16, 23, 32, 0.08);
  border-bottom: 1px solid rgba(16, 23, 32, 0.08);
}

.info-brand-card,
.info-store-card {
  display: grid;
  gap: 0;
  transition:
    transform 0.34s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.34s cubic-bezier(0.22, 1, 0.36, 1);
}

.info-brand-card:hover,
.info-store-card:hover {
  transform: translateY(-2px);
  border-color: rgba(16, 23, 32, 0.16);
}

.info-brand-card__copy,
.info-store-card__copy,
.info-corporate-card__copy {
  display: grid;
  align-content: start;
  gap: 10px;
}

.info-brand-card__copy,
.info-store-card__copy {
  padding: 20px 0 16px;
}

.info-brand-lead__index,
.info-brand-card__index,
.info-store-lead__index,
.info-store-card__index,
.info-corporate-lead__index,
.info-corporate-card__index,
.info-document-row__index {
  margin: 0;
  color: #8d6b43;
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.info-brand-lead__title,
.info-brand-card__title,
.info-store-lead__title,
.info-store-card__title,
.info-corporate-lead__title,
.info-corporate-card__title,
.info-document-row__title {
  margin: 0;
  color: #101720;
  font-size: clamp(1.45rem, 2.2vw, 2.36rem);
  line-height: 1.12;
}

.info-brand-lead__body,
.info-brand-card__body,
.info-store-lead__body,
.info-store-card__body,
.info-corporate-lead__body,
.info-corporate-card__body,
.info-document-row__body {
  margin: 0;
  color: #586473;
  line-height: 1.82;
}

.info-brand-lead__media,
.info-brand-card__media,
.info-store-lead__media,
.info-store-card__media,
.info-corporate-lead__media,
.info-corporate-card__media,
.info-document-row__media {
  margin: 0;
  overflow: hidden;
}

.info-brand-lead__media img,
.info-brand-card__media img,
.info-store-lead__media img,
.info-store-card__media img,
.info-corporate-lead__media img,
.info-corporate-card__media img,
.info-document-row__media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition:
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.34s cubic-bezier(0.22, 1, 0.36, 1);
}

.info-brand-lead:hover .info-brand-lead__media img,
.info-brand-card:hover .info-brand-card__media img,
.info-store-lead:hover .info-store-lead__media img,
.info-store-card:hover .info-store-card__media img,
.info-corporate-lead:hover .info-corporate-lead__media img,
.info-corporate-card:hover .info-corporate-card__media img,
.info-document-row:hover .info-document-row__media img {
  transform: scale(1.03);
  filter: saturate(1.06) contrast(1.02);
}

.info-brand-card {
  border-top: 1px solid rgba(16, 23, 32, 0.08);
  border-bottom: 1px solid rgba(16, 23, 32, 0.08);
}

.info-brand-lead__media {
  aspect-ratio: 16 / 11;
}

.info-brand-card__media {
  aspect-ratio: 5 / 4;
}

.info-store-card__media {
  aspect-ratio: 16 / 9;
}

.info-corporate-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
  gap: 30px;
}

.info-corporate-lead {
  display: grid;
  gap: 0;
  border: 1px solid rgba(16, 23, 32, 0.08);
}

.info-corporate-lead__media {
  aspect-ratio: 16 / 10;
}

.info-corporate-stack {
  display: grid;
  gap: 18px;
}

.info-corporate-card {
  display: grid;
  grid-template-columns: 160px minmax(0, 1fr);
  gap: 18px;
  padding-top: 18px;
  border-top: 1px solid rgba(16, 23, 32, 0.08);
  transition:
    transform 0.34s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.34s cubic-bezier(0.22, 1, 0.36, 1);
}

.info-corporate-card:hover {
  transform: translateY(-2px);
  border-top-color: rgba(16, 23, 32, 0.16);
}

.info-corporate-card__media {
  border: 1px solid rgba(16, 23, 32, 0.08);
  aspect-ratio: 1 / 1;
}

.info-document-row {
  display: grid;
  grid-template-columns: 72px 220px minmax(0, 1fr);
  gap: 24px;
  align-items: start;
  padding: 22px 0;
  background-color: rgba(255, 255, 255, 0);
  box-shadow: 0 0 0 rgba(16, 23, 32, 0);
  will-change: transform;
  transition:
    transform 0.34s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.34s cubic-bezier(0.22, 1, 0.36, 1),
    background-color 0.34s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.34s cubic-bezier(0.22, 1, 0.36, 1);
}

.info-document-row:hover {
  transform: translateY(-2px);
  border-top-color: rgba(16, 23, 32, 0.16);
  border-bottom-color: rgba(16, 23, 32, 0.16);
  background-color: rgba(16, 23, 32, 0.02);
  box-shadow: 0 18px 40px -34px rgba(16, 23, 32, 0.28);
}

.info-document-row__media {
  border: 1px solid rgba(16, 23, 32, 0.08);
  aspect-ratio: 4 / 3;
}

.info-features--service-grid,
.info-features--energy-flow,
.info-features--career-flow {
  padding: 56px 0 92px;
}

.info-features--brand-story,
.info-features--service-story,
.info-features--energy-story {
  padding: 56px 0 92px;
}

.info-service-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 30px;
}

.info-service-grid--tail {
  margin-top: 28px;
}

.info-service-lead,
.info-service-strip {
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(320px, 0.98fr);
  gap: 30px;
  align-items: center;
}

.info-service-lead {
  margin-bottom: 30px;
}

.info-service-strip {
  margin-top: 30px;
  padding-top: 24px;
  border-top: 1px solid rgba(16, 23, 32, 0.08);
}

.info-service-lead__copy,
.info-service-strip__copy {
  display: grid;
  align-content: start;
  gap: 12px;
  padding: clamp(26px, 2.4vw, 36px);
  background: #f7f4ef;
  border: 1px solid rgba(16, 23, 32, 0.08);
}

.info-service-card,
.info-energy-card {
  background: #f8f6f2;
  transition:
    transform 0.34s cubic-bezier(0.22, 1, 0.36, 1),
    background-color 0.34s cubic-bezier(0.22, 1, 0.36, 1);
}

.info-service-card:hover,
.info-energy-card:hover {
  transform: translateY(-2px);
  background: #f6f2ea;
}

.info-service-card__media,
.info-energy-card__media,
.info-career-row__media,
.info-energy-lead__media,
.info-service-lead__media,
.info-service-strip__media,
.info-energy-highlight__media {
  margin: 0;
  overflow: hidden;
}

.info-service-card__media img,
.info-energy-card__media img,
.info-career-row__media img,
.info-energy-lead__media img,
.info-service-lead__media img,
.info-service-strip__media img,
.info-energy-highlight__media img {
  width: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.74s cubic-bezier(0.22, 1, 0.36, 1);
}

.info-service-lead__media img,
.info-service-strip__media img {
  min-height: 480px;
}

.info-service-card__media img {
  min-height: 320px;
}

.info-service-lead:hover .info-service-lead__media img,
.info-service-strip:hover .info-service-strip__media img,
.info-service-card:hover .info-service-card__media img,
.info-energy-card:hover .info-energy-card__media img,
.info-career-row:hover .info-career-row__media img,
.info-energy-lead:hover .info-energy-lead__media img,
.info-energy-highlight:hover .info-energy-highlight__media img {
  transform: scale(1.04);
}

.info-service-card__copy,
.info-energy-card__copy {
  padding: 28px 28px 30px;
}

.info-service-lead__index,
.info-service-lead__title,
.info-service-lead__body,
.info-service-strip__index,
.info-service-strip__title,
.info-service-strip__body,
.info-service-card__index,
.info-service-card__title,
.info-service-card__body,
.info-energy-card__index,
.info-energy-card__title,
.info-energy-card__body,
.info-energy-highlight__index,
.info-energy-highlight__title,
.info-energy-highlight__body,
.info-energy-lead__index,
.info-energy-lead__title,
.info-energy-lead__body,
.info-career-row__index,
.info-career-row__title,
.info-career-row__body {
  margin: 0;
}

.info-service-lead__index,
.info-service-strip__index,
.info-service-card__index,
.info-energy-card__index,
.info-energy-highlight__index,
.info-energy-lead__index,
.info-career-row__index {
  color: #8d6b43;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.info-service-lead__title,
.info-service-strip__title,
.info-service-card__title,
.info-energy-card__title,
.info-energy-highlight__title {
  margin-top: 14px;
  color: #101720;
  font-size: clamp(1.7rem, 2vw, 2.45rem);
  line-height: 1.04;
}

.info-service-lead__title,
.info-energy-highlight__title,
.info-energy-lead__title {
  font-size: clamp(2.2rem, 3vw, 3.6rem);
}

.info-service-lead__body,
.info-service-strip__body,
.info-service-card__body,
.info-energy-card__body,
.info-energy-highlight__body,
.info-energy-lead__body,
.info-career-row__body {
  margin-top: 14px;
  color: #566270;
  line-height: 1.8;
}

.info-energy-lead {
  display: grid;
  grid-template-columns: minmax(0, 0.94fr) minmax(0, 1.06fr);
  gap: 28px;
  align-items: center;
  margin-bottom: 28px;
}

.info-energy-lead__copy {
  padding: 12px 0;
}

.info-energy-lead__title {
  margin-top: 14px;
  color: #101720;
  font-size: clamp(2.2rem, 3vw, 3.6rem);
  line-height: 0.98;
}

.info-energy-lead__media img {
  min-height: 520px;
}

.info-energy-highlight {
  display: grid;
  grid-template-columns: minmax(320px, 0.98fr) minmax(0, 1.02fr);
  gap: 28px;
  align-items: center;
  margin-bottom: 24px;
  background: #111922;
}

.info-energy-highlight__copy {
  display: grid;
  align-content: start;
  gap: 12px;
  padding: clamp(26px, 2.4vw, 38px);
}

.info-energy-highlight__index {
  color: rgba(222, 190, 138, 0.9);
}

.info-energy-highlight__title {
  color: #f6efe4;
}

.info-energy-highlight__body {
  color: rgba(236, 241, 245, 0.74);
}

.info-energy-highlight__media img {
  min-height: 420px;
}

.info-energy-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.info-energy-card__media img {
  min-height: 280px;
}

.info-career-row {
  padding: 38px 0;
  border-top: 1px solid rgba(16, 23, 32, 0.08);
}

.info-career-row:nth-child(even) {
  background: #f8f6f2;
}

.info-career-row:first-child {
  border-top: 0;
}

.info-career-row__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.06fr) minmax(320px, 0.94fr);
  gap: 28px;
  align-items: center;
}

.info-career-row.reverse .info-career-row__media {
  order: 2;
}

.info-career-row.reverse .info-career-row__copy {
  order: 1;
}

.info-career-row__media img {
  min-height: 420px;
}

.info-career-row__title {
  margin-top: 14px;
  color: #101720;
  font-size: clamp(2rem, 2.8vw, 3.2rem);
  line-height: 1.02;
}

.info-feature {
  position: relative;
  padding: 98px 0;
}

.info-feature:nth-child(even) {
  background: #f8f6f2;
}

.info-feature__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.24fr) minmax(320px, 0.76fr);
  gap: 54px;
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
  transition: transform 0.74s cubic-bezier(0.22, 1, 0.36, 1);
}

.info-feature__media-shell:hover img {
  transform: scale(1.04);
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

.info-page--editorial .info-feature {
  padding: 72px 0;
}

.info-page--editorial .info-feature__grid {
  gap: 28px;
  align-items: start;
}

.info-page--editorial .info-feature__media-shell img {
  min-height: 500px;
}

.info-page--brand .info-feature:nth-child(even) {
  background: #fbf9f4;
}

.info-page--document .info-metrics-shell {
  display: none;
}

.info-page--document .info-features {
  padding: 18px 0 48px;
}

.info-page--document .info-feature {
  padding: 28px 0;
  background: #fff;
  border-top: 1px solid rgba(16, 23, 32, 0.08);
}

.info-page--document .info-feature:nth-child(even) {
  background: #fff;
}

.info-page--document .info-feature:first-child {
  border-top: 0;
}

.info-page--document .info-feature__grid {
  grid-template-columns: minmax(220px, 0.72fr) minmax(0, 1.28fr);
  gap: 26px;
  align-items: start;
}

.info-page--document .info-feature__media-shell {
  background: #f6f3ee;
  border: 1px solid rgba(16, 23, 32, 0.08);
}

.info-page--document .info-feature__media-shell img {
  min-height: 220px;
}

.info-page--joinus .info-career-row__grid {
  grid-template-columns: minmax(0, 1fr) minmax(360px, 0.88fr);
  gap: 36px;
}

.info-page--joinus .info-career-row.reverse .info-career-row__grid,
.info-page--recruit-partners .info-career-row.reverse .info-career-row__grid {
  grid-template-columns: minmax(360px, 0.88fr) minmax(0, 1fr);
}

.info-page--joinus :deep(.page-hero-content),
.info-page--recruit-partners :deep(.page-hero-content) {
  padding-top: 116px;
  padding-bottom: 52px;
}

.info-page--joinus .info-career-row__media img {
  min-height: 460px;
}

.info-page--joinus .info-career-row__copy,
.info-page--recruit-partners .info-career-row__copy {
  padding: 14px 0;
}

.info-page--recruit-partners .info-career-row {
  padding: 48px 0;
}

.info-page--recruit-partners .info-career-row__grid {
  grid-template-columns: minmax(0, 1.12fr) minmax(320px, 0.88fr);
}

.info-page--corporate .info-corporate-grid {
  grid-template-columns: minmax(0, 1.02fr) minmax(340px, 0.98fr);
  gap: 34px;
}

.info-page--corporate :deep(.page-hero-content) {
  padding-top: 128px;
}

.info-page--brand :deep(.page-hero-content) {
  padding-top: 132px;
  padding-bottom: 56px;
}

.info-page--brand .info-brand-lead {
  grid-template-columns: minmax(0, 1.04fr) minmax(360px, 0.96fr);
  gap: 36px;
}

.info-page--brand .info-brand-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.info-page--brand .info-brand-card__media {
  aspect-ratio: 4 / 3;
}

.info-page--book-drive :deep(.page-hero-content),
.info-page--store :deep(.page-hero-content) {
  padding-top: 118px;
}

.info-page--service .info-service-lead {
  gap: 34px;
  margin-bottom: 34px;
}

.info-page--service .info-service-grid {
  gap: 34px;
}

.info-page--service :deep(.page-summary),
.info-page--energy :deep(.page-summary) {
  max-width: 760px;
}

.info-page--energy .info-energy-lead {
  gap: 36px;
  margin-bottom: 36px;
}

.info-page--energy .info-energy-highlight {
  margin-bottom: 28px;
}

.info-page--store .info-store-lead {
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 34px;
}

.info-page--store .info-store-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;
}

.info-page--store .info-store-card__copy {
  padding-top: 18px;
}

.info-page--store .info-store-lead__copy {
  padding: clamp(30px, 3vw, 44px);
}

.info-page--store .info-store-card__media {
  aspect-ratio: 5 / 3;
}

.info-page--book-drive .info-feature {
  padding: 72px 0;
}

.info-page--book-drive .info-feature__media-shell img {
  min-height: 520px;
}

.info-page--book-drive .info-feature__title {
  font-size: clamp(1.9rem, 2.7vw, 3.05rem);
}

.info-page--ir .info-document-row,
.info-page--purchasing .info-document-row,
.info-page--environmental .info-document-row,
.info-page--document .info-document-row {
  grid-template-columns: 82px 240px minmax(0, 1fr);
  gap: 28px;
  padding: 26px 0;
}

.info-page--ir .info-document-row__title,
.info-page--purchasing .info-document-row__title,
.info-page--environmental .info-document-row__title,
.info-page--document .info-document-row__title {
  font-size: clamp(1.5rem, 2.1vw, 2.5rem);
}

.info-page--ir :deep(.page-hero-content),
.info-page--purchasing :deep(.page-hero-content),
.info-page--environmental :deep(.page-hero-content),
.info-page--document :deep(.page-hero-content) {
  padding-top: 106px;
  padding-bottom: 44px;
}

.info-page--document .info-feature__copy {
  gap: 12px;
}

.info-page--document .info-feature__title {
  font-size: clamp(1.5rem, 2vw, 2.2rem);
  line-height: 1.08;
}

.info-page--document .info-feature__body {
  max-width: 760px;
  font-size: 0.98rem;
  line-height: 1.78;
}

.info-page--ir .info-document-row {
  grid-template-columns: 92px 260px minmax(0, 1fr);
  gap: 30px;
  padding: 30px 0;
}

.info-page--ir .info-document-row__index {
  color: #7f6241;
}

.info-page--ir .info-document-row:hover {
  transform: translateY(-3px);
}

.info-page--purchasing .info-document-row {
  grid-template-columns: 74px 220px minmax(0, 1fr);
  gap: 24px;
  padding: 22px 0;
}

.info-page--purchasing .info-document-row__title {
  font-size: clamp(1.35rem, 1.9vw, 2.1rem);
}

.info-page--purchasing .info-document-row:hover {
  border-top-color: rgba(16, 23, 32, 0.2);
  border-bottom-color: rgba(16, 23, 32, 0.2);
}

.info-page--environmental .info-document-row {
  grid-template-columns: 88px 280px minmax(0, 1fr);
  gap: 30px;
  padding: 28px 0;
}

.info-page--environmental .info-document-row__media {
  aspect-ratio: 3 / 2;
}

.info-page--environmental .info-document-row:hover {
  transform: translateY(-2px);
}

.info-page--document .info-document-row {
  grid-template-columns: 80px 220px minmax(0, 1fr);
}

.info-page--service .info-feature__grid,
.info-page--energy .info-feature__grid,
.info-page--store .info-feature__grid,
.info-page--book-drive .info-feature__grid {
  grid-template-columns: minmax(0, 1.18fr) minmax(340px, 0.82fr);
  gap: 32px;
}

.info-page--service .info-feature,
.info-page--energy .info-feature {
  padding: 68px 0;
}

.info-page--service .info-feature:nth-child(even),
.info-page--energy .info-feature:nth-child(even) {
  background: #f7f5f1;
}

.info-page--service .info-feature__media-shell img,
.info-page--energy .info-feature__media-shell img,
.info-page--store .info-feature__media-shell img,
.info-page--book-drive .info-feature__media-shell img {
  min-height: 520px;
}

.info-page--service .info-feature__title,
.info-page--energy .info-feature__title,
.info-page--store .info-feature__title,
.info-page--book-drive .info-feature__title {
  font-size: clamp(1.9rem, 2.8vw, 3.15rem);
}

.info-page--joinus .info-feature,
.info-page--recruit-partners .info-feature {
  padding: 64px 0;
}

.info-page--joinus .info-feature__grid,
.info-page--recruit-partners .info-feature__grid {
  gap: 28px;
}

.info-page--joinus .info-feature__media-shell img,
.info-page--recruit-partners .info-feature__media-shell img {
  min-height: 460px;
}

.info-page--corporate .info-feature__grid {
  grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.92fr);
  gap: 30px;
}

.info-page--corporate .info-feature__media-shell img {
  min-height: 500px;
}

.info-page--ir .info-feature__grid,
.info-page--purchasing .info-feature__grid,
.info-page--environmental .info-feature__grid,
.info-page--document .info-feature__grid {
  grid-template-columns: minmax(260px, 0.74fr) minmax(0, 1.26fr);
}

.info-page--ir .info-feature__media-shell img,
.info-page--purchasing .info-feature__media-shell img,
.info-page--environmental .info-feature__media-shell img,
.info-page--document .info-feature__media-shell img {
  min-height: 240px;
}

@media (max-width: 1024px) {
  .info-page-nav {
    top: 64px;
  }

  .info-brand-lead,
  .info-store-lead,
  .info-store-grid,
  .info-corporate-grid,
  .info-corporate-card,
  .info-service-lead,
  .info-service-strip,
  .info-document-row {
    grid-template-columns: minmax(0, 1fr);
  }

  .info-service-grid,
  .info-brand-grid,
  .info-energy-grid,
  .info-energy-lead,
  .info-energy-highlight,
  .info-career-row__grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .info-feature__grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .info-feature.reverse .info-feature__media,
  .info-feature.reverse .info-feature__copy {
    order: initial;
  }

  .info-page--document .info-feature__grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (max-width: 768px) {
  .info-features--brand-story,
  .info-features--store-flow,
  .info-features--corporate-values,
  .info-features--document-list,
  .info-features--service-story,
  .info-features--service-grid,
  .info-features--energy-story,
  .info-features--energy-flow,
  .info-features--career-flow {
    padding: 26px 0 44px;
  }

  .info-brand-lead__copy,
  .info-store-lead__copy,
  .info-service-lead__copy,
  .info-service-strip__copy,
  .info-energy-highlight__copy,
  .info-corporate-lead__copy {
    padding: 22px;
  }

  .info-document-row {
    gap: 16px;
    padding: 18px 0;
  }

  .info-service-grid,
  .info-energy-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .info-service-card__copy,
  .info-energy-card__copy {
    padding: 22px 20px 24px;
  }

  .info-service-card__media img,
  .info-energy-card__media img,
  .info-career-row__media img,
  .info-energy-lead__media img,
  .info-service-lead__media img,
  .info-service-strip__media img,
  .info-energy-highlight__media img,
  .info-brand-lead__media img,
  .info-brand-card__media img {
    min-height: 280px;
  }

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


