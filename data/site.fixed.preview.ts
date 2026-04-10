export const locales = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'fr', name: 'Français', dir: 'ltr' },
  { code: 'ar', name: 'العربية', dir: 'rtl' }
] as const

export type LocaleCode = (typeof locales)[number]['code']
export type LocalizedText = Record<LocaleCode, string>

export type NavItem = {
  label: LocalizedText
  slug?: string
  thumb?: string
  children?: NavItem[]
}

export type Metric = {
  label: LocalizedText
  value: string
}

export type GalleryItem = {
  image: string
  title: LocalizedText
  body: LocalizedText
}

export type ModelDefinition = {
  kind: 'model'
  slug: string
  title: LocalizedText
  subtitle: LocalizedText
  description: LocalizedText
  price: LocalizedText
  heroImage: string
  logo: string
  gallery: string[]
  metrics: Metric[]
  features: GalleryItem[]
  ctaPrimary: LocalizedText
  ctaSecondary: LocalizedText
  secondarySlug: string
}

export type InfoDefinition = {
  kind: 'info'
  slug: string
  eyebrow: LocalizedText
  title: LocalizedText
  summary: LocalizedText
  heroImage: string
  blocks: GalleryItem[]
  metrics?: Metric[]
  ctaLabel?: LocalizedText
  ctaSlug?: string
}

export type LegalDefinition = {
  kind: 'legal'
  slug: string
  eyebrow: LocalizedText
  title: LocalizedText
  summary: LocalizedText
  sections: Array<{ title: LocalizedText; paragraphs: LocalizedText[] }>
}

export type SitePage = ModelDefinition | InfoDefinition | LegalDefinition

export type HomeData = {
  slides: Array<{
    image: string
    video?: string
    logo?: string
    title: LocalizedText
    description: LocalizedText
    primaryLabel: LocalizedText
    secondaryLabel: LocalizedText
    primarySlug: string
    secondarySlug?: string
  }>
  brandIntro: {
    title: LocalizedText
    body: LocalizedText
    cta: LocalizedText
    image: string
  }
  modelsTitle: LocalizedText
  modelsBody: LocalizedText
  models: Array<{
    slug: string
    image: string
    title: LocalizedText
    category: LocalizedText
    metrics: Metric[]
  }>
  energy: {
    title: LocalizedText
    body: LocalizedText
    label: LocalizedText
    image: string
    metrics: Metric[]
  }
  technology: {
    title: LocalizedText
    body: LocalizedText
    tabs: Array<{
      label: LocalizedText
      tags: LocalizedText[]
      image: string
      cta: LocalizedText
    }>
  }
  service: {
    title: LocalizedText
    body: LocalizedText
    cards: GalleryItem[]
  }
  community: {
    title: LocalizedText
    body: LocalizedText
    posts: Array<{
      image: string
      title: LocalizedText
      body: LocalizedText
      slug: string
    }>
  }
  footprint: {
    title: LocalizedText
    body: LocalizedText
    cta: LocalizedText
    image: string
    tabs: Array<{ label: LocalizedText; countries: LocalizedText[] }>
  }
}

export type FooterColumn = {
  title: LocalizedText
  links: Array<{ label: LocalizedText; slug: string }>
}

export type FooterContact = {
  title: LocalizedText
  body: LocalizedText
  appCode: string
  miniProgramCode: string
}

const t = (en: string, fr: string, ar: string): LocalizedText => ({ en, fr, ar })

const metric = (value: string, en: string, fr: string, ar: string): Metric => ({
  value,
  label: t(en, fr, ar)
})

const block = (
  image: string,
  enTitle: string,
  frTitle: string,
  arTitle: string,
  enBody: string,
  frBody: string,
  arBody: string
): GalleryItem => ({
  image,
  title: t(enTitle, frTitle, arTitle),
  body: t(enBody, frBody, arBody)
})

const modelFeatureTitles = [
  t('Exterior expression', 'Expression extérieure', 'الهوية الخارجية'),
  t('Immersive cabin', 'Habitacle immersif', 'مقصورة غامرة'),
  t('Intelligent travel', 'Voyage intelligent', 'تنقل ذكي')
]

const makeModel = (options: {
  slug: string
  title: LocalizedText
  subtitle: LocalizedText
  description: LocalizedText
  price: LocalizedText
  heroImage: string
  logo: string
  gallery: string[]
  metrics: Metric[]
}): ModelDefinition => ({
  kind: 'model',
  ...options,
  features: options.gallery.slice(0, 3).map((image, index) => {
    const subtitle = options.subtitle.en.toLowerCase()
    const isMpv = subtitle.includes('mpv')
    const isSedan = subtitle.includes('sedan')

    const titles = isMpv
      ? [
          t('Ceremonial exterior', 'Extérieur cérémoniel', 'خارجية بطابع احتفالي'),
          t('Lounge-like cabin', 'Habitacle esprit salon', 'مقصورة بطابع الصالون'),
          t('Long-distance hospitality', 'Hospitalité grand trajet', 'ضيافة مثالية للرحلات الطويلة')
        ]
      : isSedan
        ? [
            t('Flagship exterior proportion', 'Proportions extérieures de prestige', 'تناسبات خارجية رائدة'),
            t('Executive digital cabin', 'Habitacle numérique exécutif', 'مقصورة رقمية تنفيذية'),
            t('Composed intelligent travel', 'Voyage intelligent et serein', 'سفر ذكي وواثق')
          ]
        : [
            t('Commanding exterior stance', 'Prestance extérieure affirmée', 'حضور خارجي قوي'),
            t('Spacious intelligent cabin', 'Habitacle intelligent et spacieux', 'مقصورة ذكية ورحبة'),
            t('All-scenario confidence', 'Sérénité tous usages', 'ثقة في كل السيناريوهات')
          ]

    const bodies = [
      options.description,
      options.subtitle,
      t(
        `${options.title.en} combines premium design, an immersive digital experience, and composed road manners for refined daily and long-distance travel.`,
        `${options.title.fr} associe un design premium, une expérience numérique immersive et un comportement routier maîtrisé pour les trajets quotidiens comme longue distance.`,
        `يجمع ${options.title.ar} بين التصميم الفاخر والتجربة الرقمية الغامرة والأداء المتزن على الطريق ليمنح تجربة راقية في الاستخدام اليومي والرحلات الطويلة.`
      )
    ]

    return {
      image,
      title: titles[index] ?? modelFeatureTitles[2],
      body: bodies[index] ?? bodies[2]
    }
  }),
  ctaPrimary: t('Book a test drive', 'Réserver un essai', 'احجز تجربة قيادة'),
  ctaSecondary: t('Store center', 'Centre de magasins', 'مركز المعارض'),
  secondarySlug: 'store.html'
})

export const navigation: NavItem[] = [
  { label: t('Voyah Brand', 'Marque Voyah', 'علامة Voyah'), slug: 'brand.html' },
  {
    label: t('Models', 'Modèles', 'الطرازات'),
    children: [
      { label: t('Voyah Passion L', 'Voyah Passion L', 'Voyah Passion L'), slug: 'passion-L.html', thumb: '/voyah-resources/images/car/car_logo/passion-L.png' },
      { label: t('Voyah Passion', 'Voyah Passion', 'Voyah Passion'), slug: 'passion.html', thumb: '/voyah-resources/images/car/car_logo/passion.png' },
      { label: t('Voyah Titan', 'Voyah Titan', 'Voyah Titan'), slug: 'titan.html', thumb: '/voyah-resources/images/car/car_logo/titan.png' },
      { label: t('Voyah Titan Black Edition', 'Voyah Titan Black Edition', 'Voyah Titan Black Edition'), slug: 'titan_blackedition.html', thumb: '/voyah-resources/images/car/car_logo/titan_blackedition.png' },
      { label: t('Voyah Titan X8', 'Voyah Titan X8', 'Voyah Titan X8'), slug: 'titan_X8.html', thumb: '/voyah-resources/images/car/car_logo/titan_X8.png' },
      { label: t('Voyah FREE+', 'Voyah FREE+', 'Voyah FREE+'), slug: 'free+.html', thumb: '/voyah-resources/images/car/car_logo/free+.png' },
      { label: t('Voyah FREE 318', 'Voyah FREE 318', 'Voyah FREE 318'), slug: 'free.html', thumb: '/voyah-resources/images/car/car_logo/free.png' },
      { label: t('New Voyah Courage', 'Nouveau Voyah Courage', 'Voyah Courage الجديد'), slug: 'newCourage.html', thumb: '/voyah-resources/images/car/car_logo/newCourage.png' },
      { label: t('Voyah Courage', 'Voyah Courage', 'Voyah Courage'), slug: 'courage.html', thumb: '/voyah-resources/images/car/car_logo/courage.png' },
      { label: t('26 Voyah Dreamer', 'Voyah Dreamer 26', 'Voyah Dreamer 26'), slug: 'newDreamer26.html', thumb: '/voyah-resources/images/car/car_logo/newDreamer26.png' },
      { label: t('25 Voyah Dreamer', 'Voyah Dreamer 25', 'Voyah Dreamer 25'), slug: 'newDreamer.html', thumb: '/voyah-resources/images/car/car_logo/newDreamer.png' },
      { label: t('Voyah Dreamer Mountain River', 'Voyah Dreamer Montagne-Rivière', 'Voyah Dreamer Mountain River'), slug: 'dreamriver.html', thumb: '/voyah-resources/images/car/car_logo/dreamriver.png' },
      { label: t('24 Voyah Dreamer', 'Voyah Dreamer 24', 'Voyah Dreamer 24'), slug: 'dreamer.html', thumb: '/voyah-resources/images/car/car_logo/dreamer.png' }
    ]
  },
  { label: t('Store Center', 'Centre de magasins', 'مركز المعارض'), slug: 'store.html' },
  {
    label: t('Voyah Service', 'Service Voyah', 'خدمات Voyah'),
    children: [
      { label: t('User Service', 'Service client', 'خدمة المستخدم'), slug: 'service.html' },
      { label: t('Voyah Energy', 'Énergie Voyah', 'طاقة Voyah'), slug: 'energy.html' },
      { label: t('Procurement', 'Achats', 'المشتريات'), slug: 'purchasing.html' },
      { label: t('Environmental Disclosure', 'Informations environnementales', 'الإفصاح البيئي'), slug: 'environmental.html' },
      { label: t('Document Download', 'Téléchargements', 'تنزيل المستندات'), slug: 'document.html' }
    ]
  },
  {
    label: t('About Voyah', 'À propos de Voyah', 'عن Voyah'),
    children: [
      { label: t('Corporate Culture', 'Culture d'entreprise', 'الثقافة المؤسسية'), slug: 'corporate.html' },
      { label: t('Join Us', 'Rejoignez-nous', 'انضم إلينا'), slug: 'joinus.html' },
      { label: t('Partner Recruitment', 'Recrutement de partenaires', 'استقطاب الشركاء'), slug: 'recruit-partners.html' },
      { label: t('Investor Relations', 'Relations investisseurs', 'علاقات المستثمرين'), slug: 'ir.html' }
    ]
  }
]

const models: ModelDefinition[] = [
  makeModel({
    slug: 'passion-L.html',
    title: t('Voyah Passion L', 'Voyah Passion L', 'Voyah Passion L'),
    subtitle: t('Executive electric flagship sedan', 'Berline électrique exécutive', 'سيدان كهربائية تنفيذية'),
    description: t('A long-wheelbase luxury sedan shaped around calm authority, digital refinement, and first-class rear comfort.', 'Une berline de luxe à empattement long conçue pour offrir prestance, raffinement numérique et confort arrière de première classe.', 'سيدان فاخرة بقاعدة عجلات طويلة تجمع بين الحضور الراقي والواجهة الرقمية المتميزة وراحة الصف الخلفي.'),
    price: t('Flagship sedan', 'Berline phare', 'السيدان الرائدة'),
    heroImage: '/voyah-resources/images/car/passion-L/1920/sc_1.jpg',
    logo: '/voyah-resources/images/car/car_logo/passion-L.png',
    gallery: [
      '/voyah-resources/images/car/passion-L/1920/sc_10.jpg',
      '/voyah-resources/images/car/passion-L/1920/sc_24.jpg',
      '/voyah-resources/images/car/passion-L/1920/sc_39.jpg'
    ],
    metrics: [
      metric('Luxury sedan', 'Positioning', 'Positionnement', 'الفئة'),
      metric('Rear lounge', 'Rear experience', 'Expérience arrière', 'تجربة المقاعد الخلفية'),
      metric('Smart cockpit', 'Digital cabin', 'Habitacle numérique', 'المقصورة الرقمية')
    ]
  }),
  makeModel({
    slug: 'passion.html',
    title: t('Voyah Passion', 'Voyah Passion', 'Voyah Passion'),
    subtitle: t('Performance electric sedan', 'Berline électrique performante', 'سيدان كهربائية عالية الأداء'),
    description: t('A sleek electric sedan pairing decisive proportions with a quiet cabin and high-speed touring character.', 'Une berline électrique élancée qui associe des proportions affirmées à un habitacle silencieux et un tempérament grand tourisme.', 'سيدان كهربائية أنيقة تجمع بين التناسق الجريء والمقصورة الهادئة وروح السفر السريع.'),
    price: t('Performance sedan', 'Berline performante', 'سيدان أداء'),
    heroImage: '/voyah-resources/images/car/passion/1920/fl01.jpg',
    logo: '/voyah-resources/images/car/car_logo/passion.png',
    gallery: [
      '/voyah-resources/images/car/passion/1920/fl04.jpg',
      '/voyah-resources/images/car/passion/1920/fl11.jpg',
      '/voyah-resources/images/car/passion/1920/fl21.jpg'
    ],
    metrics: [
      metric('Grand tourer', 'Character', 'Caractère', 'الطابع'),
      metric('Refined ride', 'Chassis tuning', 'Mise au point châssis', 'معايرة الهيكل'),
      metric('Digital luxury', 'Cabin feel', 'Ambiance intérieure', 'أجواء المقصورة')
    ]
  }),
  makeModel({
    slug: 'titan.html',
    title: t('Voyah Titan', 'Voyah Titan', 'Voyah Titan'),
    subtitle: t('Full-size intelligent SUV', 'SUV intelligent grand format', 'سيارة SUV ذكية كبيرة الحجم'),
    description: t('A large SUV built around commanding stance, confident family space, and composed all-road capability.', 'Un grand SUV conçu autour d'une prestance affirmée, d'un espace familial généreux et d'une aisance sereine sur tous types de routes.', 'سيارة SUV كبيرة تجمع بين الحضور القوي والمساحة العائلية الرحبة والثبات على مختلف الطرق.'),
    price: t('Large SUV flagship', 'SUV phare grand format', 'SUV رائدة كبيرة'),
    heroImage: '/voyah-resources/images/car/titan/1920/sc_1.jpg',
    logo: '/voyah-resources/images/car/car_logo/titan.png',
    gallery: [
      '/voyah-resources/images/car/titan/1920/sc_18.jpg',
      '/voyah-resources/images/car/titan/1920/sc_22.jpg',
      '/voyah-resources/images/car/titan/1920/sc_30.jpg'
    ],
    metrics: [
      metric('Family flagship', 'Vehicle role', 'Rôle du véhicule', 'دور السيارة'),
      metric('Flexible cabin', 'Interior package', 'Modularité intérieure', 'مرونة المقصورة'),
      metric('Confident traction', 'Road confidence', 'Confiance routière', 'الثبات على الطريق')
    ]
  }),
  makeModel({
    slug: 'titan_blackedition.html',
    title: t('Voyah Titan Black Edition', 'Voyah Titan Black Edition', 'Voyah Titan Black Edition'),
    subtitle: t('Stealth-focused luxury SUV', 'SUV de luxe au style noir', 'SUV فاخرة بطابع أسود'),
    description: t('A darker, sharper interpretation of the Titan formula with bold finishes and a more dramatic visual tone.', 'Une interprétation plus sombre et plus tranchante de la Titan, avec des finitions audacieuses et un langage visuel plus dramatique.', 'نسخة أكثر جرأة من Titan بتشطيبات داكنة وحضور بصري أكثر حدة.'),
    price: t('Black Edition', 'Black Edition', 'Black Edition'),
    heroImage: '/voyah-resources/images/car/titan_blackedition/1920/sc_1.jpg',
    logo: '/voyah-resources/images/car/car_logo/titan_blackedition.png',
    gallery: [
      '/voyah-resources/images/car/titan_blackedition/1920/sc_10_1.jpg',
      '/voyah-resources/images/car/titan_blackedition/1920/sc_17.jpg',
      '/voyah-resources/images/car/titan_blackedition/1920/sc_18_1.jpg'
    ],
    metrics: [
      metric('Dark styling', 'Design theme', 'Thème design', 'نسق التصميم'),
      metric('Premium trim', 'Material tone', 'Finition premium', 'الخامات الفاخرة'),
      metric('SUV command', 'Presence', 'Prestance', 'الحضور')
    ]
  }),
  makeModel({
    slug: 'titan_X8.html',
    title: t('Voyah Titan X8', 'Voyah Titan X8', 'Voyah Titan X8'),
    subtitle: t('Expanded family utility', 'Polyvalence familiale étendue', 'استخدام عائلي موسع'),
    description: t('A Titan derivative tuned for generous multi-row practicality and long-range family confidence.', 'Une déclinaison de Titan pensée pour une praticité multirang généreuse et des voyages familiaux sereins.', 'نسخة من Titan مهيأة لعملية أكبر عبر الصفوف المتعددة وثقة أكبر في الرحلات العائلية.'),
    price: t('Eight-seat family focus', 'Orientation familiale', 'تركيز عائلي'),
    heroImage: '/voyah-resources/images/car/titan_X8/1920/sc_1.jpg',
    logo: '/voyah-resources/images/car/car_logo/titan_X8.png',
    gallery: ['/voyah-resources/images/car/titan_X8/1920/sc_1.jpg'],
    metrics: [
      metric('Expanded seating', 'Space plan', 'Plan d'espace', 'تخطيط المساحة'),
      metric('Travel ready', 'Use case', 'Usage', 'الاستخدام'),
      metric('SUV comfort', 'Comfort focus', 'Confort', 'الراحة')
    ]
  }),
  makeModel({
    slug: 'free+.html',
    title: t('Voyah FREE+', 'Voyah FREE+', 'Voyah FREE+'),
    subtitle: t('Premium performance SUV', 'SUV premium haute performance', 'SUV فاخرة عالية الأداء'),
    description: t('A sharply sculpted SUV with athletic stance, expressive lighting, and a focused digital cockpit.', 'Un SUV sculpté avec précision, doté d'une posture athlétique, d'une signature lumineuse expressive et d'un cockpit numérique centré sur le conducteur.', 'سيارة SUV منحوتة بدقة تجمع بين الوقفة الرياضية والإضاءة التعبيرية والمقصورة الرقمية المركزة على السائق.'),
    price: t('Performance SUV', 'SUV performance', 'SUV أداء'),
    heroImage: '/voyah-resources/images/car/free+/kv_1920.png',
    logo: '/voyah-resources/images/car/car_logo/free+.png',
    gallery: [
      '/voyah-resources/images/car/free+/img_03_1920.png',
      '/voyah-resources/images/car/free+/img_25_1920.png',
      '/voyah-resources/images/car/free+/img_42_1920.png'
    ],
    metrics: [
      metric('Athletic stance', 'Design', 'Design', 'التصميم'),
      metric('Connected cockpit', 'Cabin', 'Habitacle', 'المقصورة'),
      metric('Daily versatility', 'Use case', 'Usage', 'الاستخدام')
    ]
  }),
  makeModel({
    slug: 'free.html',
    title: t('Voyah FREE 318', 'Voyah FREE 318', 'Voyah FREE 318'),
    subtitle: t('Long-range crossover expression', 'Expression crossover longue autonomie', 'كروس أوفر بمدى طويل'),
    description: t('A crossover package balancing touring composure, elevated seating, and everyday premium usability.', 'Un crossover qui équilibre sérénité sur long trajet, position de conduite surélevée et usage premium au quotidien.', 'حزمة كروس أوفر توازن بين الراحة في السفر والجلوس المرتفع والاستخدام الفاخر اليومي.'),
    price: t('Long-range crossover', 'Crossover longue autonomie', 'كروس أوفر بمدى طويل'),
    heroImage: '/voyah-resources/images/car/free/bg-free-h97D-1.jpg',
    logo: '/voyah-resources/images/car/car_logo/free.png',
    gallery: [
      '/voyah-resources/images/car/free/bg-free-h97D-5.jpg',
      '/voyah-resources/images/car/free/bg-free-h97D-9.jpg',
      '/voyah-resources/images/car/free/bg-free-h97D-12.jpg'
    ],
    metrics: [
      metric('Travel comfort', 'Long-route feel', 'Confort longue route', 'راحة السفر'),
      metric('Elevated seating', 'Driving position', 'Position de conduite', 'وضعية القيادة'),
      metric('Practical luxury', 'Daily use', 'Usage quotidien', 'الاستخدام اليومي')
    ]
  }),
  makeModel({
    slug: 'newCourage.html',
    title: t('New Voyah Courage', 'Nouveau Voyah Courage', 'Voyah Courage الجديد'),
    subtitle: t('Urban electric SUV upgrade', 'SUV électrique urbain revisité', 'تحديث SUV كهربائية حضرية'),
    description: t('An updated Courage with sharper surfaces, clean proportions, and a stronger digital-first interior theme.', 'Une Courage renouvelée, avec des surfaces plus tendues, des proportions nettes et une ambiance intérieure davantage centrée sur le numérique.', 'نسخة محدثة من Courage بتفاصيل أكثر حدة وتناسق أنظف ومقصورة رقمية أكثر وضوحاً.'),
    price: t('Urban premium SUV', 'SUV urbain premium', 'SUV حضرية فاخرة'),
    heroImage: '/voyah-resources/images/car/newCourage/1920/sc_1.jpg',
    logo: '/voyah-resources/images/car/car_logo/newCourage.png',
    gallery: [
      '/voyah-resources/images/car/newCourage/1920/sc_10.jpg',
      '/voyah-resources/images/car/newCourage/1920/sc_12.jpg',
      '/voyah-resources/images/car/newCourage/1920/sc_18.jpg'
    ],
    metrics: [
      metric('City focused', 'Context', 'Contexte', 'السياق'),
      metric('Sharper form', 'Styling', 'Style', 'الأسلوب'),
      metric('Connected comfort', 'Interior theme', 'Ambiance intérieure', 'طابع المقصورة')
    ]
  }),
  makeModel({
    slug: 'courage.html',
    title: t('Voyah Courage', 'Voyah Courage', 'Voyah Courage'),
    subtitle: t('Compact premium electric SUV', 'SUV électrique premium compact', 'SUV كهربائية فاخرة مدمجة'),
    description: t('A compact premium SUV shaped for agile urban use while preserving Voyah refinement and visual confidence.', 'Un SUV premium compact pensé pour l'agilité urbaine sans sacrifier le raffinement Voyah ni sa présence visuelle.', 'سيارة SUV فاخرة مدمجة موجهة للمدينة مع الحفاظ على رقي Voyah وحضورها الواثق.'),
    price: t('Compact electric SUV', 'SUV électrique compact', 'SUV كهربائية مدمجة'),
    heroImage: '/voyah-resources/images/car/courage/1920/h37_pc01_0001.jpg',
    logo: '/voyah-resources/images/car/car_logo/courage.png',
    gallery: [
      '/voyah-resources/images/car/courage/1920/h37_pc03_0001.jpg',
      '/voyah-resources/images/car/courage/1920/h37_pc04_0001.jpg',
      '/voyah-resources/images/car/courage/1920/h37_pc06_0001.jpg'
    ],
    metrics: [
      metric('Compact footprint', 'Vehicle size', 'Gabarit', 'الحجم'),
      metric('Urban agility', 'Driving use', 'Usage de conduite', 'طبيعة القيادة'),
      metric('Premium detail', 'Finish', 'Finition', 'التشطيب')
    ]
  }),
  makeModel({
    slug: 'newDreamer26.html',
    title: t('26 Voyah Dreamer', 'Voyah Dreamer 26', 'Voyah Dreamer 26'),
    subtitle: t('Luxury family MPV flagship', 'Monospace familial de luxe', 'MPV عائلية فاخرة'),
    description: t('A new-generation Dreamer with lounge-like comfort, refined long-distance composure, and premium family focus.', 'Une nouvelle génération Dreamer avec un confort de salon, une grande sérénité sur longue distance et une vocation familiale premium.', 'الجيل الجديد من Dreamer يوفر راحة شبيهة بالصالون وثباتاً راقياً في الرحلات الطويلة وتركيزاً عائلياً فاخراً.'),
    price: t('Luxury MPV flagship', 'Monospace phare de luxe', 'MPV فاخرة رائدة'),
    heroImage: '/voyah-resources/images/car/newDreamer26/kv_1920.jpg',
    logo: '/voyah-resources/images/car/car_logo/newDreamer26.png',
    gallery: [
      '/voyah-resources/images/car/newDreamer26/bg_11_1920.jpg',
      '/voyah-resources/images/car/newDreamer26/sc_20.jpg',
      '/voyah-resources/images/car/newDreamer26/bg_22_1920.jpg'
    ],
    metrics: [
      metric('Family lounge', 'Cabin concept', 'Concept habitacle', 'مفهوم المقصورة'),
      metric('Long-distance ease', 'Travel focus', 'Confort voyage', 'راحة السفر'),
      metric('Premium hospitality', 'Second-row feel', 'Expérience deuxième rang', 'تجربة الصف الثاني')
    ]
  }),
  makeModel({
    slug: 'newDreamer.html',
    title: t('25 Voyah Dreamer', 'Voyah Dreamer 25', 'Voyah Dreamer 25'),
    subtitle: t('Refined premium MPV', 'Monospace premium raffiné', 'MPV فاخرة مصقولة'),
    description: t('A premium MPV combining poised body control, spacious seating, and a polished travel atmosphere.', 'Un monospace premium qui associe maîtrise des mouvements, espace à bord généreux et atmosphère de voyage soignée.', 'سيارة MPV فاخرة تجمع بين الثبات الرحب والمساحة الواسعة وأجواء السفر المصقولة.'),
    price: t('Premium MPV', 'Monospace premium', 'MPV فاخرة'),
    heroImage: '/voyah-resources/images/car/newDreamer/h56c_pc08_banner01.jpg',
    logo: '/voyah-resources/images/car/car_logo/newDreamer.png',
    gallery: [
      '/voyah-resources/images/car/newDreamer/bg_2_n_1920.jpg',
      '/voyah-resources/images/car/newDreamer/bg_7_n_1920.jpg',
      '/voyah-resources/images/car/newDreamer/h56c_pc03_0003.jpg'
    ],
    metrics: [
      metric('Premium MPV', 'Vehicle type', 'Type de véhicule', 'نوع السيارة'),
      metric('Quiet travel', 'Ride quality', 'Qualité de roulage', 'جودة الرحلة'),
      metric('Family luxury', 'Use focus', 'Usage', 'الاستخدام')
    ]
  }),
  makeModel({
    slug: 'dreamriver.html',
    title: t('Voyah Dreamer Mountain River', 'Voyah Dreamer Montagne-Rivière', 'Voyah Dreamer Mountain River'),
    subtitle: t('Scenic travel expression', 'Expression du voyage panoramique', 'طابع السفر المشهدي'),
    description: t('A special Dreamer expression emphasizing serene scenery, warm hospitality, and elegant multi-person travel.', 'Une interprétation spéciale de Dreamer axée sur le paysage, l'accueil chaleureux et l'élégance des voyages à plusieurs.', 'نسخة خاصة من Dreamer تركز على المشهد الهادئ والضيافة الدافئة وأناقة السفر الجماعي.'),
    price: t('Special edition MPV', 'Édition spéciale MPV', 'MPV إصدار خاص'),
    heroImage: '/voyah-resources/images/car/dreamriver/kv_1920.png',
    logo: '/voyah-resources/images/car/car_logo/dreamriver.png',
    gallery: [
      '/voyah-resources/images/car/dreamriver/sc_2.png',
      '/voyah-resources/images/car/dreamriver/sc_5-2.png',
      '/voyah-resources/images/car/dreamriver/sc_8.png'
    ],
    metrics: [
      metric('Scenic theme', 'Edition theme', 'Thème de l'édition', 'طابع الإصدار'),
      metric('Warm cabin', 'Interior mood', 'Ambiance intérieure', 'أجواء المقصورة'),
      metric('Shared journeys', 'Travel mode', 'Mode de voyage', 'نمط السفر')
    ]
  }),
  makeModel({
    slug: 'dreamer.html',
    title: t('24 Voyah Dreamer', 'Voyah Dreamer 24', 'Voyah Dreamer 24'),
    subtitle: t('Luxury electric MPV', 'Monospace électrique de luxe', 'MPV كهربائية فاخرة'),
    description: t('A spacious electric MPV created for premium family mobility with broad comfort and reassuring calm.', 'Un monospace électrique spacieux pensé pour une mobilité familiale premium avec beaucoup de confort et une sérénité rassurante.', 'سيارة MPV كهربائية واسعة صممت للحركة العائلية الفاخرة مع راحة كبيرة وهدوء مطمئن.'),
    price: t('Electric luxury MPV', 'Monospace électrique de luxe', 'MPV كهربائية فاخرة'),
    heroImage: '/voyah-resources/images/car/dreamer/bg_2_1920.jpg',
    logo: '/voyah-resources/images/car/car_logo/dreamer.png',
    gallery: [
      '/voyah-resources/images/car/dreamer/bg_13_1920.jpg',
      '/voyah-resources/images/car/dreamer/bg_21_1920.jpg',
      '/voyah-resources/images/car/dreamer/bg_24_1920.jpg'
    ],
    metrics: [
      metric('Three-row comfort', 'Space', 'Espace', 'المساحة'),
      metric('Family calm', 'Travel atmosphere', 'Ambiance de voyage', 'أجواء الرحلة'),
      metric('Electric luxury', 'Power theme', 'Motorisation', 'المنظومة')
    ]
  })
]

const infoPages: InfoDefinition[] = [
  {
    kind: 'info',
    slug: 'brand.html',
    eyebrow: t('Brand', 'Marque', 'العلامة'),
    title: t('Hello world, I am Voyah!', 'Bonjour le monde, je suis Voyah !', 'مرحباً أيها العالم، أنا Voyah!'),
    summary: t('A premium intelligent new-energy brand originating from Dongfeng Motor.', 'Une marque haut de gamme de véhicules à énergies nouvelles intelligents issue de Dongfeng Motor.', 'علامة راقية للمركبات الذكية العاملة بالطاقة الجديدة تنتمي إلى Dongfeng Motor.'),
    heroImage: '/static/assets/world-fec50d02.jpg',
    metrics: [
      metric('Premium brand', 'Brand role', 'Role de la marque', 'دور العلامة'),
      metric('Dongfeng origin', 'Origin', 'Origine', 'المنشأ'),
      metric('Intelligent NEV', 'Positioning', 'Positionnement', 'التموضع')
    ],
    blocks: [
      block('/static/assets/greeting-b368cd0d.jpg', 'Hello world, I am Voyah!', 'Bonjour le monde, je suis Voyah !', 'مرحباً أيها العالم، أنا Voyah!', 'A premium intelligent new-energy brand originating from Dongfeng Motor.', 'Une marque haut de gamme de véhicules à énergies nouvelles intelligents issue de Dongfeng Motor.', 'علامة راقية للمركبات الذكية العاملة بالطاقة الجديدة تنتمي إلى Dongfeng Motor.'),
      block('/static/assets/future-6727dcc7.png', 'Explore Voyah technology', 'Explorer la technologie Voyah', 'استكشف تقنية Voyah', 'Voyah is not only a pioneer on the electric track for a central state-owned enterprise, but also a benchmark for the transformation of mature Chinese automakers.', 'Voyah n est pas seulement un pionnier de la course à l électrification pour une entreprise centrale, mais aussi un nouveau repère pour la transformation des constructeurs chinois matures.', 'ليست Voyah مجرد شركة رائدة في مسار الكهرباء داخل مؤسسة مركزية، بل أيضاً معياراً جديداً لتحول شركات السيارات الصينية الناضجة.'),
      block('/static/assets/world-6e618fb7.png', 'Leading in China, expanding globally', 'Leader en Chine, déploiement mondial', 'ريادة في الصين وانتشار عالمي', 'The Chinese premium intelligent new-energy vehicle brand that moved from the local market to overseas markets the fastest.', 'La marque chinoise haut de gamme de véhicules à énergies nouvelles intelligents qui a réalisé le passage du marché local aux marchés étrangers le plus rapidement.', 'العلامة الصينية الراقية للمركبات الذكية العاملة بالطاقة الجديدة التي انتقلت من السوق المحلية إلى الأسواق الخارجية بأسرع وتيرة.')
    ],
    ctaLabel: t('Explore Voyah models', 'Explorer les modèles Voyah', 'استكشف طرازات Voyah'),
    ctaSlug: 'titan.html'
  },
  {
    kind: 'info',
    slug: 'store.html',
    eyebrow: t('Store center', 'Centre de magasins', 'مركز المعارض'),
    title: t('Store center built around the user journey', 'Centre de magasins construit autour du parcours utilisateur', 'مركز معارض مبني حول رحلة المستخدم'),
    summary: t('Voyah stores bring together vehicle discovery, consultation, booking, delivery, and ownership support in one premium environment.', 'Les espaces Voyah réunissent découverte des véhicules, conseil, réservation, livraison et accompagnement dans un même environnement premium.', 'تجمع معارض Voyah بين اكتشاف المركبات والاستشارة والحجز والتسليم ودعم الملكية ضمن بيئة فاخرة واحدة.'),
    heroImage: '/static/assets/service_bg-047aedf5.png',
    metrics: [
      metric('Retail', 'Experience type', 'Type d'expérience', 'نوع التجربة'),
      metric('1 journey', 'Service flow', 'Parcours de service', 'مسار الخدمة'),
      metric('User center', 'Ownership touchpoint', 'Point de contact', 'نقطة التواصل')
    ],
    blocks: [
      block('/static/assets/service-502e6c35.jpg', 'Hospitality and consultation', 'Hospitalité et conseil', 'الضيافة والاستشارة', 'A calm reception flow helps visitors understand products, compare plans, and align the right Voyah experience to their needs.', 'Un parcours d'accueil apaisé aide les visiteurs à comprendre les produits, comparer les solutions et identifier l'expérience Voyah qui leur convient.', 'يساعد مسار استقبال هادئ الزوار على فهم المنتجات ومقارنة الحلول وتحديد تجربة Voyah الأنسب لهم.'),
      block('/static/assets/store2-00eb05d9.png', 'Model exploration', 'Exploration des modèles', 'استكشاف الطرازات', 'From display vehicles to test-drive coordination, the store center is designed to move naturally from discovery to decision.', 'Du véhicule exposé à la coordination des essais, le centre de magasins est conçu pour faire passer naturellement de la découverte à la décision.', 'من سيارات العرض إلى تنسيق تجارب القيادة، صمم مركز المعارض للانتقال بسلاسة من الاكتشاف إلى القرار.'),
      block('/static/assets/store3-397705c8.png', 'Digital onboarding and delivery', 'Intégration numérique et livraison', 'التهيئة الرقمية والتسليم', 'Configuration guidance, order follow-up, and handover support continue the premium journey beyond the visit itself.', 'Le guidage de configuration, le suivi de commande et l'accompagnement à la remise prolongent l'expérience premium au-delà de la visite.', 'تواصل إرشادات التجهيز ومتابعة الطلب ودعم التسلم الرحلة الفاخرة بعد الزيارة نفسها.')
    ],
    ctaLabel: t('Book a visit', 'Réserver une visite', 'احجز زيارة'),
    ctaSlug: 'book-drive.html'
  },
  {
    kind: 'info',
    slug: 'service.html',
    eyebrow: t('Service', 'Service', 'الخدمة'),
    title: t('Voyah Service', 'Service Voyah', 'خدمات Voyah'),
    summary: t('You focus on chasing freedom and dreams, while we focus on protecting every journey with care.', 'Vous poursuivez la liberté et les rêves, tandis que nous veillons à protéger chaque trajet avec soin.', 'أنت تنطلق نحو الحرية والأحلام، ونحن نتولى حماية كل رحلة بعناية.'),
    heroImage: '/static/assets/service-502e6c35.jpg',
    metrics: [
      metric('Sincere', 'Reception', 'Accueil', 'الاستقبال'),
      metric('Ceremonial', 'Delivery', 'Livraison', 'التسليم'),
      metric('7×24 h', 'Protection', 'Protection', 'الحماية')
    ],
    blocks: [
      block('/static/assets/section3_2-4fb471c7.jpg', 'Sincere reception', 'Accueil sincère', 'استقبال صادق', 'Voyah Service follows a wholehearted service philosophy and is committed to delivering a trusted full-journey ownership experience.', 'Voyah Service suit une philosophie de service entièrement dédiée et s engage à offrir une expérience de possession digne de confiance sur l ensemble du parcours.', 'تلتزم Voyah Service بفلسفة خدمة تقوم على الإخلاص الكامل، وتهدف إلى تقديم تجربة ملكية موثوقة عبر الرحلة بأكملها.'),
      block('/static/assets/section3_3-20237755.jpg', 'Ceremonial delivery', 'Livraison cérémonielle', 'تسليم يحمل طابعاً احتفالياً', 'Every sincere detail and every promise are treated as part of a premium handover experience.', 'Chaque détail sincère et chaque engagement sont considérés comme partie intégrante d une expérience de livraison premium.', 'يُنظر إلى كل تفصيل صادق وكل وعد يتم الوفاء به كجزء من تجربة تسليم فاخرة.'),
      block('/static/assets/section4_1-f7cf566b.jpg', '7×24-hour protection', 'Protection 7×24 h', 'حماية على مدار 7×24 ساعة', 'Professional teams, all-day support, and a nationwide service network protect every journey with confidence.', 'Des équipes professionnelles, une assistance continue et un réseau national protègent chaque trajet avec assurance.', 'توفر الفرق المتخصصة والدعم المتواصل وشبكة الخدمة الوطنية حماية موثوقة لكل رحلة.')
    ],
    ctaLabel: t('View service network', 'Voir le réseau de service', 'عرض شبكة الخدمة'),
    ctaSlug: 'energy.html'
  },
  {
    kind: 'info',
    slug: 'energy.html',
    eyebrow: t('Energy', 'Énergie', 'الطاقة'),
    title: t('A connected energy ecosystem for users', 'Un écosystème énergétique connecté', 'منظومة طاقة مترابطة للمستخدمين'),
    summary: t('Voyah Energy links charging scenes, partner infrastructure, and digital guidance to support daily and long-distance use.', 'Voyah Energy relie scénarios de recharge, infrastructures partenaires et guidage numérique pour accompagner l'usage quotidien et longue distance.', 'تربط طاقة Voyah بين سيناريوهات الشحن والبنية الشريكة والإرشاد الرقمي لدعم الاستخدام اليومي والسفر الطويل.'),
    heroImage: '/static/assets/energy_bg-4482e81f.jpg',
    metrics: [
      metric('1,540,000+', 'Integrated charging resources', 'Ressources de recharge intégrées', 'موارد الشحن المتكاملة'),
      metric('16,000+', 'Supercharging resources', 'Ressources de supercharge', 'موارد الشحن الفائق'),
      metric('530M+ kWh', 'Charged for users', 'Recharge cumulée', 'إجمالي الشحن للمستخدمين')
    ],
    blocks: [
      block('/static/assets/charge_pc-1c0a2e91.png', 'Home and destination charging', 'Recharge à domicile et destination', 'الشحن المنزلي والوجهة', 'A broad mix of charging touchpoints helps match energy access to different ownership routines.', 'Une combinaison étendue de solutions de recharge adapte l'accès à l'énergie aux différents rythmes d'usage.', 'يساعد تنوع نقاط الشحن على مواءمة الوصول إلى الطاقة مع أنماط الاستخدام المختلفة.'),
      block('/static/assets/super_charge_pc-3886645d.png', 'High-speed replenishment', 'Recharge rapide', 'إعادة شحن سريعة', 'Fast charging capability and partner networks reduce stop time during longer journeys.', 'La recharge rapide et les réseaux partenaires réduisent le temps d'arrêt lors des longs trajets.', 'تقلل قدرات الشحن السريع والشبكات الشريكة زمن التوقف في الرحلات الطويلة.'),
      block('/static/assets/V2G-cba13343.jpg', 'Energy intelligence', 'Intelligence énergétique', 'ذكاء الطاقة', 'The energy layer is designed to be visible, guided, and integrated across the digital ownership journey.', 'La couche énergie est pensée pour être lisible, guidée et intégrée dans l'ensemble du parcours numérique.', 'تم تصميم طبقة الطاقة لتكون واضحة وموجهة ومتكاملة عبر الرحلة الرقمية للملكية.')
    ],
    ctaLabel: t('Read service details', 'Lire les détails de service', 'قراءة تفاصيل الخدمة'),
    ctaSlug: 'service.html'
  },
  {
    kind: 'info',
    slug: 'corporate.html',
    eyebrow: t('About Voyah', 'À propos de Voyah', 'عن Voyah'),
    title: t('Corporate culture and long-term brand development', 'Culture d'entreprise et développement de long terme', 'الثقافة المؤسسية والتطور طويل المدى'),
    summary: t('Voyah positions its culture around user value, innovation, disciplined execution, and a premium mobility outlook.', 'Voyah articule sa culture autour de la valeur utilisateur, de l'innovation, de l'exécution disciplinée et d'une vision premium de la mobilité.', 'تركز ثقافة Voyah على قيمة المستخدم والابتكار والتنفيذ المنضبط ورؤية فاخرة للتنقل.'),
    heroImage: '/static/assets/corporate_bg_1-33cad798.png',
    blocks: [
      block('/static/assets/corporate_poster_1-c2c8c7ca.jpg', 'Mission', 'Mission', 'المهمة', 'The brand mission emphasizes premium new-energy mobility with stronger user empathy and product clarity.', 'La mission de la marque met l'accent sur une mobilité premium à énergie nouvelle avec plus d'empathie utilisateur et de clarté produit.', 'تؤكد مهمة العلامة على التنقل الفاخر للطاقة الجديدة مع تعاطف أكبر مع المستخدم ووضوح أعلى في المنتج.'),
      block('/static/assets/corporate_poster_8-7da49d74.png', 'Innovation', 'Innovation', 'الابتكار', 'Technology, industrial capability, and digital experience are aligned to support a coherent premium standard.', 'Technologie, capacité industrielle et expérience numérique sont alignées pour soutenir un standard premium cohérent.', 'تتكامل التكنولوجيا والقدرة الصناعية والخبرة الرقمية لدعم معيار فاخر متماسك.'),
      block('/static/assets/corporate_poster_14-b8674e6c.png', 'Values', 'Valeurs', 'القيم', 'Long-term development depends on execution quality, responsible growth, and brand consistency.', 'Le développement de long terme dépend de la qualité d'exécution, d'une croissance responsable et d'une cohérence de marque.', 'يعتمد التطور طويل المدى على جودة التنفيذ والنمو المسؤول والاتساق في العلامة.')
    ]
  },
  {
    kind: 'info',
    slug: 'joinus.html',
    eyebrow: t('Careers', 'Carrières', 'المسار المهني'),
    title: t('Build the next chapter of premium new-energy mobility', 'Construire la prochaine étape de la mobilité premium', 'بناء الفصل التالي من التنقل الفاخر للطاقة الجديدة'),
    summary: t('Voyah presents career opportunities across brand, technology, retail, service, and intelligent mobility systems.', 'Voyah présente des opportunités de carrière dans la marque, la technologie, le retail, le service et les systèmes de mobilité intelligente.', 'تقدم Voyah فرصاً مهنية عبر العلامة والتقنية والبيع والخدمة وأنظمة التنقل الذكي.'),
    heroImage: '/static/assets/joinus_bg_1920-f7158f6f.png',
    blocks: [
      block('/static/assets/recruit_poster_1-679c5306.png', 'Open roles', 'Postes ouverts', 'الوظائف المفتوحة', 'Teams span vehicle programs, product planning, digital systems, user operations, and market development.', 'Les équipes couvrent programmes véhicule, planification produit, systèmes numériques, opérations utilisateurs et développement marché.', 'تشمل الفرق برامج المركبات وتخطيط المنتج والأنظمة الرقمية وعمليات المستخدمين وتطوير السوق.'),
      block('/static/assets/recruit_poster_2-7a882da6.png', 'Growth environment', 'Environnement de croissance', 'بيئة التطور', 'Voyah positions growth around responsibility, cross-functional collaboration, and product quality.', 'Voyah place la progression sous le signe de la responsabilité, de la collaboration transversale et de la qualité produit.', 'تضع Voyah التطور في إطار المسؤولية والتعاون بين الوظائف وجودة المنتج.'),
      block('/static/assets/recruit_form_bg-107b0556.jpg', 'Join the team', 'Rejoindre l'équipe', 'انضم إلى الفريق', 'Recruitment channels are designed to make application and role matching clearer for candidates.', 'Les parcours de recrutement sont conçus pour rendre la candidature et l'adéquation des rôles plus claires.', 'صممت قنوات التوظيف لجعل التقديم ومواءمة الأدوار أكثر وضوحاً للمرشحين.')
    ]
  },
  {
    kind: 'info',
    slug: 'recruit-partners.html',
    eyebrow: t('Partners', 'Partenaires', 'الشركاء'),
    title: t('Partner recruitment for broader service reach', 'Recrutement de partenaires pour élargir le service', 'استقطاب الشركاء لتوسيع نطاق الخدمة'),
    summary: t('Voyah partner programs support expansion across retail, service touchpoints, and local operational capability.', 'Les programmes partenaires de Voyah accompagnent l'expansion du retail, des points de service et des capacités opérationnelles locales.', 'تدعم برامج الشركاء لدى Voyah التوسع عبر البيع والخدمة والقدرات التشغيلية المحلية.'),
    heroImage: '/static/assets/recruit_partners_bg_1920-81ee18a9.png',
    blocks: [
      block('/static/assets/recruit_partners_poster_1-f48b5641.jpg', 'Network development', 'Développement du réseau', 'تطوير الشبكة', 'Partner recruitment is framed around long-term market development and service consistency.', 'Le recrutement de partenaires s'inscrit dans une logique de développement de marché à long terme et de cohérence de service.', 'يتم استقطاب الشركاء ضمن إطار تطوير السوق على المدى الطويل واتساق الخدمة.'),
      block('/static/assets/recruit_partners_poster_5-eff94200.png', 'Capability standards', 'Standards de capacité', 'معايير القدرة', 'Operational readiness, user care, and brand presentation are core to partner evaluation.', 'La préparation opérationnelle, la qualité de service et la présentation de la marque sont centrales dans l'évaluation des partenaires.', 'تعد الجاهزية التشغيلية والعناية بالمستخدم وتقديم العلامة عناصر أساسية في تقييم الشركاء.'),
      block('/static/assets/recruit_partners_poster_9-c73e7510.jpg', 'Shared growth', 'Croissance partagée', 'النمو المشترك', 'The model emphasizes durable cooperation rather than short-term channel expansion.', 'Le modèle privilégie une coopération durable plutôt qu'une simple expansion de canal à court terme.', 'يركز النموذج على تعاون مستدام بدلاً من توسع قنوات قصير الأمد.')
    ]
  },
  {
    kind: 'info',
    slug: 'ir.html',
    eyebrow: t('Investor relations', 'Relations investisseurs', 'علاقات المستثمرين'),
    title: t('Investor-facing materials and governance information', 'Informations investisseurs et gouvernance', 'مواد المستثمرين ومعلومات الحوكمة'),
    summary: t('This section gathers governance references, prospectus materials, and key investor-oriented documents.', 'Cette section regroupe des références de gouvernance, des documents de prospectus et des contenus destinés aux investisseurs.', 'يجمع هذا القسم مراجع الحوكمة ومواد نشرة الإصدار والمستندات الرئيسية الموجهة للمستثمرين.'),
    heroImage: '/static/assets/ir-3663d9c1.png',
    blocks: [
      block('/static/assets/prospectus-4ce8b045.png', 'Prospectus materials', 'Documents de prospectus', 'مواد نشرة الإصدار', 'Core disclosure materials are organized for structured review and reference.', 'Les principaux documents de divulgation sont organisés pour une consultation et une référence structurées.', 'تنظم مواد الإفصاح الأساسية لسهولة المراجعة والرجوع إليها.'),
      block('/static/assets/corporate-governance-1d981bac.png', 'Governance structure', 'Structure de gouvernance', 'هيكل الحوكمة', 'Governance information clarifies institutional design and corporate oversight principles.', 'Les informations de gouvernance clarifient l'organisation institutionnelle et les principes de supervision.', 'توضح معلومات الحوكمة التصميم المؤسسي ومبادئ الإشراف المؤسسي.'),
      block('/static/assets/ir2-93691f3f.png', 'Reference materials', 'Documents de référence', 'مواد مرجعية', 'Supporting materials provide context for financial, governance, and strategic review.', 'Les documents complémentaires apportent du contexte pour la revue financière, stratégique et de gouvernance.', 'توفر المواد الداعمة سياقاً للمراجعة المالية والاستراتيجية والحوكمة.')
    ]
  },
  {
    kind: 'info',
    slug: 'environmental.html',
    eyebrow: t('Environmental disclosure', 'Informations environnementales', 'الإفصاح البيئي'),
    title: t('Environmental and responsibility-oriented disclosures', 'Informations environnementales et de responsabilité', 'إفصاحات بيئية ومسؤولية مؤسسية'),
    summary: t('Environmental disclosure aligns brand operations, manufacturing context, and long-term development responsibility.', 'Les informations environnementales relient opérations de marque, contexte industriel et responsabilité de développement à long terme.', 'يربط الإفصاح البيئي بين عمليات العلامة والسياق الصناعي ومسؤولية التطور طويل المدى.'),
    heroImage: '/static/assets/world-fec50d02.jpg',
    blocks: [
      block('/static/assets/earth_index-e4c6ae99.jpg', 'Environmental view', 'Vision environnementale', 'الرؤية البيئية', 'The environmental narrative is presented as part of the broader new-energy brand ecosystem.', 'Le récit environnemental s'inscrit dans l'écosystème plus large de la marque à énergie nouvelle.', 'يقدم السرد البيئي كجزء من منظومة أوسع للعلامة العاملة بالطاقة الجديدة.'),
      block('/static/assets/power_bg1-7048cd30.png', 'Operational responsibility', 'Responsabilité opérationnelle', 'المسؤولية التشغيلية', 'Responsibility extends across the way the brand grows, serves, and expands its footprint.', 'La responsabilité s'étend à la manière dont la marque croît, sert ses utilisateurs et développe son empreinte.', 'تمتد المسؤولية إلى طريقة نمو العلامة وخدمتها للمستخدمين وتوسيع حضورها.'),
      block('/static/assets/world-6e618fb7.png', 'Long-term orientation', 'Orientation de long terme', 'التوجه طويل المدى', 'The overall frame emphasizes sustainable development rather than short-term messaging.', 'Le cadre général met l'accent sur le développement durable plutôt que sur des messages de court terme.', 'يركز الإطار العام على التنمية المستدامة لا الرسائل قصيرة الأجل.')
    ]
  },
  {
    kind: 'info',
    slug: 'document.html',
    eyebrow: t('Downloads', 'Téléchargements', 'التنزيلات'),
    title: t('Documents and references for owners and visitors', 'Documents et références pour propriétaires et visiteurs', 'مستندات ومراجع للمالكين والزوار'),
    summary: t('Voyah centralizes manuals, reference documents, and service-oriented materials for easier access.', 'Voyah centralise manuels, documents de référence et contenus de service pour un accès simplifié.', 'تجمع Voyah الأدلة والمستندات المرجعية والمواد المرتبطة بالخدمة لتسهيل الوصول إليها.'),
    heroImage: '/static/assets/user_manual-4441c1d3.png',
    blocks: [
      block('/static/assets/user_manual-4441c1d3.png', 'User manuals', 'Manuels utilisateur', 'أدلة المستخدم', 'Vehicle documents are organized to support onboarding and continued ownership use.', 'Les documents véhicules sont organisés pour accompagner la prise en main puis l'usage au long cours.', 'تنظم مستندات المركبات لدعم البدء في الاستخدام ثم الاستفادة المستمرة أثناء الملكية.'),
      block('/static/assets/prospectus2-00a82650.png', 'Reference files', 'Fichiers de référence', 'ملفات مرجعية', 'Supplementary references are grouped to improve search and download clarity.', 'Les références complémentaires sont regroupées pour rendre la recherche et le téléchargement plus lisibles.', 'تم تجميع المراجع الإضافية لتحسين وضوح البحث والتنزيل.'),
      block('/static/assets/app_code_160-5b2a34cc.png', 'Digital access', 'Accès numérique', 'الوصول الرقمي', 'Documents are connected to digital touchpoints to make retrieval more convenient.', 'Les documents sont reliés à des points de contact numériques pour simplifier leur consultation.', 'تم ربط المستندات بنقاط وصول رقمية لجعل استرجاعها أكثر سهولة.')
    ]
  },
  {
    kind: 'info',
    slug: 'purchasing.html',
    eyebrow: t('Procurement', 'Achats', 'المشتريات'),
    title: t('Procurement and supplier collaboration context', 'Contexte des achats et de la collaboration fournisseurs', 'سياق المشتريات والتعاون مع الموردين'),
    summary: t('Voyah procurement emphasizes capability, quality, and long-term supplier collaboration across a growing ecosystem.', 'Les achats Voyah mettent l'accent sur la capacité, la qualité et la collaboration fournisseur de long terme dans un écosystème en croissance.', 'تركز مشتريات Voyah على الكفاءة والجودة والتعاون طويل المدى مع الموردين ضمن منظومة متنامية.'),
    heroImage: '/static/assets/partner_pc-b12d249b.png',
    blocks: [
      block('/static/assets/partner_pc-b12d249b.png', 'Supplier network', 'Réseau fournisseurs', 'شبكة الموردين', 'Supplier collaboration is framed around shared quality standards and industrial coordination.', 'La collaboration fournisseurs s'appuie sur des standards qualité communs et une coordination industrielle solide.', 'يقوم التعاون مع الموردين على معايير جودة مشتركة وتنسيق صناعي قوي.'),
      block('/static/assets/charge_pile_bg-2c7b414e.png', 'Capability alignment', 'Alignement des capacités', 'مواءمة القدرات', 'The procurement model values consistency, delivery reliability, and structured cooperation.', 'Le modèle d'achats valorise la constance, la fiabilité d'exécution et une coopération structurée.', 'يقدّر نموذج المشتريات الاتساق والموثوقية في التسليم والتعاون المنظم.'),
      block('/static/assets/power_bg2-a6639f1e.png', 'Long-term development', 'Développement long terme', 'التطور طويل المدى', 'Partnerships are positioned as durable capability building rather than transactional sourcing alone.', 'Les partenariats sont pensés comme une construction durable de capacités et non comme un simple sourcing transactionnel.', 'تُفهم الشراكات باعتبارها بناء قدرات مستداماً لا مجرد توريد تعاقدي.')
    ]
  },
  {
    kind: 'info',
    slug: 'book-drive.html',
    eyebrow: t('Experience', 'Expérience', 'التجربة'),
    title: t('Book a test drive with the Voyah lineup', 'Réserver un essai avec la gamme Voyah', 'احجز تجربة قيادة مع مجموعة Voyah'),
    summary: t('Test-drive booking is connected to product consultation, store support, and guided model selection.', 'La réservation d'essai est reliée au conseil produit, au support magasin et à l'orientation vers le modèle adapté.', 'يرتبط حجز تجربة القيادة باستشارة المنتج ودعم المعرض وتوجيه اختيار الطراز المناسب.'),
    heroImage: '/static/assets/drive1-2ff63958.png',
    blocks: [
      block('/static/assets/drive2-aa10c694.png', 'Guided selection', 'Choix guidé', 'اختيار موجّه', 'Prospective owners can narrow the lineup through usage needs, size preferences, and vehicle character.', 'Les futurs clients peuvent affiner leur choix selon l'usage, les préférences d'espace et le caractère du véhicule.', 'يمكن للعملاء المحتملين تضييق الاختيار وفق الاحتياجات وطبيعة الاستخدام وتفضيلات الحجم.'),
      block('/static/assets/store3-fe6e8d7d.jpg', 'Store coordination', 'Coordination magasin', 'تنسيق المعرض', 'The booking flow connects directly to physical service and retail support touchpoints.', 'Le parcours de réservation se connecte directement aux points de service et d'accompagnement en magasin.', 'يرتبط مسار الحجز مباشرة بنقاط الخدمة والدعم داخل المعرض.'),
      block('/static/assets/life_center_poster-fb653778.png', 'Ownership onboarding', 'Prise en main', 'تهيئة الملكية', 'Test drives support not only discovery but also a clearer understanding of the ownership experience.', 'L'essai ne sert pas seulement à découvrir le produit, mais aussi à mieux comprendre l'expérience de possession.', 'لا تخدم تجربة القيادة الاكتشاف فقط بل تساعد أيضاً على فهم أوضح لتجربة الملكية.')
    ],
    ctaLabel: t('Visit store center', 'Visiter le centre de magasins', 'زيارة مركز المعارض'),
    ctaSlug: 'store.html'
  }
]

const legalPages: LegalDefinition[] = [
  {
    kind: 'legal',
    slug: 'legal.html',
    eyebrow: t('Legal', 'Mentions légales', 'الشؤون القانونية'),
    title: t('Legal statement', 'Déclaration légale', 'البيان القانوني'),
    summary: t('This website is operated by Voyah Automotive Technology Co., Ltd. The content, trademarks, visual materials, and related rights displayed on this website are protected by applicable laws and regulations.', 'Ce site web est exploité par Voyah Automotive Technology Co., Ltd. Les contenus, marques, éléments visuels et droits associés présentés sur ce site sont protégés par les lois et règlements applicables.', 'يتم تشغيل هذا الموقع بواسطة Voyah Automotive Technology Co., Ltd. وتخضع المحتويات والعلامات التجارية والمواد البصرية والحقوق المرتبطة المعروضة على هذا الموقع للحماية بموجب القوانين واللوائح المعمول بها.'),
    sections: [
      {
        title: t('Intellectual property', 'Propriété intellectuelle', 'الملكية الفكرية'),
        paragraphs: [
          t('Without prior written consent from Voyah, no organization or individual may copy, reproduce, modify, republish, transmit, display, mirror, or otherwise use the contents of this website in any form.', 'Sans l accord écrit préalable de Voyah, aucune organisation ni aucun individu ne peut copier, reproduire, modifier, republier, transmettre, afficher, reproduire en miroir ou utiliser de toute autre manière les contenus de ce site sous quelque forme que ce soit.', 'من دون موافقة كتابية مسبقة من Voyah، لا يجوز لأي جهة أو فرد نسخ أو إعادة إنتاج أو تعديل أو إعادة نشر أو نقل أو عرض أو إنشاء نسخ معكوسة أو استخدام محتويات هذا الموقع بأي شكل من الأشكال.'),
          t('The brand name Voyah, product names, logos, images, videos, and related design materials are owned by Voyah or the relevant rights holders.', 'Le nom de marque Voyah, les noms de produits, les logos, les images, les vidéos et les éléments de design associés appartiennent à Voyah ou aux titulaires de droits concernés.', 'إن اسم العلامة Voyah وأسماء المنتجات والشعارات والصور ومقاطع الفيديو والمواد التصميمية المرتبطة بها مملوكة لـ Voyah أو لأصحاب الحقوق المعنيين.')
        ]
      },
      {
        title: t('Disclaimer', 'Clause de non-responsabilité', 'إخلاء المسؤولية'),
        paragraphs: [
          t('The information published on this website is provided for reference. Vehicle configurations, colors, functions, services, and availability may vary by model, market, and time of release. Please refer to the latest official product information and local retail channels.', 'Les informations publiées sur ce site sont fournies à titre indicatif. Les configurations, couleurs, fonctions, services et disponibilités des véhicules peuvent varier selon les modèles, les marchés et les périodes de lancement. Veuillez vous référer aux dernières informations produits officielles et aux canaux commerciaux locaux.', 'تُقدَّم المعلومات المنشورة على هذا الموقع لأغراض مرجعية. وقد تختلف تجهيزات المركبات والألوان والوظائف والخدمات ومدى التوافر بحسب الطراز والسوق وتوقيت الإطلاق. يُرجى الرجوع إلى أحدث المعلومات الرسمية الخاصة بالمنتج وإلى قنوات البيع المحلية.')
        ]
      }
    ]
  },
  {
    kind: 'legal',
    slug: 'privacy.html',
    eyebrow: t('Privacy', 'Confidentialité', 'الخصوصية'),
    title: t('Privacy policy', 'Politique de confidentialité', 'سياسة الخصوصية'),
    summary: t('Voyah values and protects the personal information of users. This policy explains how personal information may be collected, used, stored, protected, and managed when using Voyah websites, applications, mini programs, products, and services.', 'Voyah attache une grande importance à la protection des informations personnelles des utilisateurs. Cette politique explique comment les informations personnelles peuvent être collectées, utilisées, stockées, protégées et gérées lors de l utilisation des sites web, applications, mini-programmes, produits et services Voyah.', 'تولي Voyah أهمية كبيرة لحماية المعلومات الشخصية للمستخدمين. وتوضح هذه السياسة كيفية جمع المعلومات الشخصية واستخدامها وتخزينها وحمايتها وإدارتها عند استخدام مواقع Voyah وتطبيقاتها وبرامجها المصغرة ومنتجاتها وخدماتها.'),
    sections: [
      {
        title: t('Information collection and use', 'Collecte et utilisation des informations', 'جمع المعلومات واستخدامها'),
        paragraphs: [
          t('Depending on the services you use, Voyah may collect information necessary to provide account login, test-drive booking, vehicle purchase, after-sales service, charging, customer support, and community functions.', 'Selon les services que vous utilisez, Voyah peut collecter les informations nécessaires à la connexion au compte, à la réservation d essai, à l achat du véhicule, au service après-vente, à la recharge, au support client et aux fonctions communautaires.', 'وفقاً للخدمات التي تستخدمها، قد تجمع Voyah المعلومات اللازمة لتسجيل الدخول إلى الحساب وحجز تجربة القيادة وشراء السيارة وخدمة ما بعد البيع والشحن ودعم العملاء ووظائف المجتمع.'),
          t('Voyah uses personal information to deliver services, verify identity, maintain operational security, improve products and services, and meet legal and regulatory obligations.', 'Voyah utilise les informations personnelles pour fournir les services, vérifier l identité, assurer la sécurité opérationnelle, améliorer les produits et services et satisfaire aux obligations légales et réglementaires.', 'تستخدم Voyah المعلومات الشخصية لتقديم الخدمات والتحقق من الهوية والحفاظ على أمن التشغيل وتحسين المنتجات والخدمات والامتثال للالتزامات القانونية والتنظيمية.')
        ]
      },
      {
        title: t('Storage and protection', 'Conservation et protection', 'التخزين والحماية'),
        paragraphs: [
          t('Voyah adopts management, technical, and organizational measures to protect personal information from unauthorized access, disclosure, alteration, damage, or loss.', 'Voyah adopte des mesures de gestion, techniques et organisationnelles pour protéger les informations personnelles contre tout accès, divulgation, modification, dommage ou perte non autorisés.', 'تعتمد Voyah تدابير إدارية وتقنية وتنظيمية لحماية المعلومات الشخصية من الوصول غير المصرح به أو الكشف أو التعديل أو التلف أو الفقدان.'),
          t('Where required by law or regulation, you may exercise rights such as access, correction, deletion, withdrawal of consent, and account cancellation through the official channels provided by Voyah.', 'Lorsque la loi ou la réglementation l exige, vous pouvez exercer des droits tels que l accès, la rectification, la suppression, le retrait du consentement et la suppression du compte via les canaux officiels fournis par Voyah.', 'عند الاقتضاء بموجب القوانين أو اللوائح، يمكنك ممارسة حقوق مثل الوصول إلى المعلومات وتصحيحها وحذفها وسحب الموافقة وإلغاء الحساب عبر القنوات الرسمية التي توفرها Voyah.')
        ]
      }
    ]
  },
  {
    kind: 'legal',
    slug: 'cookie.html',
    eyebrow: t('Cookies', 'Cookies', 'ملفات تعريف الارتباط'),
    title: t('Cookie policy', 'Politique relative aux cookies', 'سياسة ملفات تعريف الارتباط'),
    summary: t('To ensure the proper operation of the website and improve your browsing experience, Voyah may use cookies and similar technologies. This policy explains the categories, purposes, and management methods of such technologies.', 'Afin d assurer le bon fonctionnement du site et d améliorer votre expérience de navigation, Voyah peut utiliser des cookies et des technologies similaires. Cette politique explique les catégories, les finalités et les modalités de gestion de ces technologies.', 'لضمان التشغيل السليم للموقع وتحسين تجربة التصفح، قد تستخدم Voyah ملفات تعريف الارتباط والتقنيات المشابهة. وتوضح هذه السياسة فئات هذه التقنيات وأغراضها وطرق إدارتها.'),
    sections: [
      {
        title: t('Use of cookies', 'Utilisation des cookies', 'استخدام ملفات تعريف الارتباط'),
        paragraphs: [
          t('Cookies may be used to remember language preferences, maintain login status, optimize performance, analyze traffic, and support service security and service quality improvement.', 'Les cookies peuvent être utilisés pour mémoriser les préférences linguistiques, maintenir la connexion, optimiser les performances, analyser le trafic et soutenir la sécurité ainsi que l amélioration de la qualité de service.', 'قد تُستخدم ملفات تعريف الارتباط لتذكر تفضيلات اللغة والحفاظ على حالة تسجيل الدخول وتحسين الأداء وتحليل الزيارات ودعم أمن الخدمة وتحسين جودتها.')
        ]
      },
      {
        title: t('Management and control', 'Gestion et contrôle', 'الإدارة والتحكم'),
        paragraphs: [
          t('Most browsers allow you to manage or disable cookies through their settings. Please note that disabling certain cookies may affect the availability or user experience of some functions.', 'La plupart des navigateurs permettent de gérer ou de désactiver les cookies via leurs paramètres. Veuillez noter que la désactivation de certains cookies peut affecter la disponibilité ou l expérience utilisateur de certaines fonctions.', 'تتيح معظم المتصفحات إدارة ملفات تعريف الارتباط أو تعطيلها عبر الإعدادات. ويُرجى ملاحظة أن تعطيل بعض الملفات قد يؤثر في توفر بعض الوظائف أو في تجربة استخدامها.')
        ]
      }
    ]
  },
  {
    kind: 'legal',
    slug: 'authorization.html',
    eyebrow: t('Permissions', 'Autorisations', 'الأذونات'),
    title: t('Permissions statement', 'Déclaration relative aux autorisations', 'بيان الأذونات'),
    summary: t('When using Voyah applications, mini programs, website functions, and connected services, certain device permissions may be requested in order to deliver the corresponding features and service experience.', 'Lors de l utilisation des applications Voyah, des mini-programmes, des fonctions du site et des services connectés, certaines autorisations de l appareil peuvent être demandées afin de fournir les fonctionnalités correspondantes et l expérience de service.', 'عند استخدام تطبيقات Voyah وبرامجها المصغرة ووظائف الموقع والخدمات المتصلة، قد يتم طلب بعض أذونات الجهاز لتقديم الوظائف المقابلة وتجربة الخدمة المرتبطة بها.'),
    sections: [
      {
        title: t('Typical permissions', 'Autorisations courantes', 'الأذونات المعتادة'),
        paragraphs: [
          t('Depending on the feature in use, Voyah may request permissions such as location, camera, photo album, microphone, Bluetooth, notifications, and storage access.', 'Selon la fonctionnalité utilisée, Voyah peut demander des autorisations telles que la localisation, l appareil photo, l album photo, le microphone, le Bluetooth, les notifications et l accès au stockage.', 'بحسب الوظيفة المستخدمة، قد تطلب Voyah أذونات مثل الموقع والكاميرا وألبوم الصور والميكروفون والبلوتوث والإشعارات والوصول إلى التخزين.')
        ]
      },
      {
        title: t('Purpose and management', 'Finalité et gestion', 'الغرض والإدارة'),
        paragraphs: [
          t('Permissions are only used for the functions described above. You may manage or revoke permissions through your system settings, but doing so may affect the availability of related services.', 'Les autorisations sont utilisées uniquement pour les fonctions décrites ci-dessus. Vous pouvez les gérer ou les révoquer via les paramètres du système, mais cela peut affecter la disponibilité des services associés.', 'تُستخدم الأذونات فقط للوظائف المذكورة أعلاه. ويمكنك إدارتها أو سحبها من خلال إعدادات النظام، إلا أن ذلك قد يؤثر في توفر الخدمات المرتبطة بها.')
        ]
      }
    ]
  }
]

export const sitePages: SitePage[] = [...models, ...infoPages, ...legalPages]
export const supportedSlugs = sitePages.map((page) => page.slug)
const sitePageMap = new Map<string, SitePage>(sitePages.map((page) => [page.slug, page]))

export const homePage: HomeData = {
  slides: [
    {
      image: '/website/advertisingbanner/image/41270475-24cb-4a5e-a4fc-7caad6e403fe1773822300406.png',
      logo: '/website/advertisingbanner/image/6a0968f7-2b35-42a3-86f6-91e2196c4a7f1770618012728.png',
      title: t('', '', ''),
      description: t('', '', ''),
      primaryLabel: t('', '', ''),
      secondaryLabel: t('', '', ''),
      primarySlug: 'brand.html'
    },
    {
      image: '/website/advertisingbanner/image/5b2f214c-174b-49fb-b085-ede76cad277f1770618069208.png',
      video: '/website/advertisingbanner/video/f0c4f930-2c5e-4b18-8212-e73cb76c18b11770618136349.mp4',
      logo: '/website/advertisingbanner/image/c3a9ed8d-150d-4c86-a584-119c0c7bd3e91770618125835.png',
      title: t('', '', ''),
      description: t('A new-era flagship six-seat SUV', 'Un SUV phare à six places de nouvelle génération', 'سيارة SUV رائدة بستة مقاعد من الجيل الجديد'),
      primaryLabel: t('Learn more', 'En savoir plus', 'اعرف المزيد'),
      secondaryLabel: t('Order now', 'Commander', 'اطلب الآن'),
      primarySlug: 'titan.html',
      secondarySlug: 'store.html'
    },
    {
      image: '/website/advertisingbanner/image/23ab9c33-78a4-4bff-bb69-83fe117820a31770618259885.png',
      video: '/website/advertisingbanner/video/785c4160-8515-46a2-8bc9-a4f7b1907c0c1770618243037.mp4',
      logo: '/website/advertisingbanner/image/5be64d32-9133-4283-8994-3350cca635d81770618274334.png',
      title: t('', '', ''),
      description: t('A new-era flagship MPV', 'Un monospace phare de nouvelle génération', 'سيارة MPV رائدة من الجيل الجديد'),
      primaryLabel: t('Learn more', 'En savoir plus', 'اعرف المزيد'),
      secondaryLabel: t('Order now', 'Commander', 'اطلب الآن'),
      primarySlug: 'newDreamer26.html',
      secondarySlug: 'store.html'
    },
    {
      image: '/website/advertisingbanner/image/2ba443dd-2869-4f27-89ca-d3fc8da9908d1770618446896.png',
      video: '/website/advertisingbanner/video/1779ce91-787b-4a77-9fec-1deb13fedeb31770618459950.mp4',
      logo: '/website/advertisingbanner/image/9c751c14-cd46-439c-b9de-5a7d595655991770618438688.png',
      title: t('', '', ''),
      description: t('A new-era flagship sedan', 'Une berline phare de nouvelle génération', 'سيدان رائدة من الجيل الجديد'),
      primaryLabel: t('Learn more', 'En savoir plus', 'اعرف المزيد'),
      secondaryLabel: t('Order now', 'Commander', 'اطلب الآن'),
      primarySlug: 'passion-L.html',
      secondarySlug: 'store.html'
    },
    {
      image: '/website/advertisingbanner/image/1ea30c18-f0ea-4b91-9c51-dddc46c589981770618535951.png',
      video: '/website/advertisingbanner/video/e33e96dc-3430-4882-946d-62abdf88dc0d1770618522586.mp4',
      logo: '/website/advertisingbanner/image/05088b2b-9041-4d17-8730-ab52def1319e1770618558478.png',
      title: t('', '', ''),
      description: t('SUV with Huawei intelligent driving and Harmony cockpit', 'SUV avec conduite intelligente Huawei et cockpit Harmony', 'سيارة SUV مزودة بقيادة ذكية من Huawei ومقصورة Harmony'),
      primaryLabel: t('Learn more', 'En savoir plus', 'اعرف المزيد'),
      secondaryLabel: t('Order now', 'Commander', 'اطلب الآن'),
      primarySlug: 'free+.html',
      secondarySlug: 'store.html'
    },
    {
      image: '/website/advertisingbanner/image/09cb36df-deb5-48b2-9b7a-adee59f6b0c81770618611011.png',
      video: '/website/advertisingbanner/video/7d8f79a2-9614-47e0-b336-5f660d63ad171770618641574.mp4',
      logo: '/website/advertisingbanner/image/ef3b7afe-0f2b-4f6f-b575-4679c59d8c3a1770618630272.png',
      title: t('', '', ''),
      description: t(
        'Pure-electric SUV with Huawei intelligent driving and Harmony cockpit',
        'SUV 100 % électrique avec conduite intelligente Huawei et cockpit Harmony',
        'سيارة SUV كهربائية بالكامل مزودة بقيادة ذكية من Huawei ومقصورة Harmony'
      ),
      primaryLabel: t('Learn more', 'En savoir plus', 'اعرف المزيد'),
      secondaryLabel: t('Order now', 'Commander', 'اطلب الآن'),
      primarySlug: 'newCourage.html',
      secondarySlug: 'store.html'
    }
  ],
  brandIntro: {
    title: t('Hello world, I am Voyah!', 'Bonjour le monde, je suis Voyah !', 'مرحباً أيها العالم، أنا Voyah!'),
    body: t(
      'A premium intelligent new-energy brand originating from Dongfeng Motor.',
      'Une marque haut de gamme de véhicules à énergies nouvelles intelligents issue de Dongfeng Motor.',
      'علامة راقية للمركبات الذكية العاملة بالطاقة الجديدة تنتمي إلى Dongfeng Motor.'
    ),
    cta: t('Discover the brand', 'Découvrir la marque', 'اكتشف العلامة'),
    image: '/static/assets/world-fec50d02.jpg'
  },
  modelsTitle: t('Explore Voyah models', 'Explorer les modèles Voyah', 'استكشف طرازات Voyah'),
  modelsBody: t('', '', ''),
  models: [
    {
      slug: 'titan.html',
      image: '/website/advertisingseries/image/4a4ba784-9bdc-4842-a3cf-22e2b1e46d761770618807747.jpg',
      title: t('Voyah Titan', 'Voyah Titan', 'Voyah Titan'),
      category: t(
        'A new-era flagship six-seat SUV',
        'Un SUV phare six places de nouvelle génération',
        'سيارة SUV رائدة بستة مقاعد من الجيل الجديد'
      ),
      metrics: [
        metric('5000 mm', 'Length', 'Longueur', 'الطول'),
        metric('1995 mm', 'Width', 'Largeur', 'العرض'),
        metric('1820 mm', 'Height', 'Hauteur', 'الارتفاع')
      ]
    },
    {
      slug: 'newDreamer26.html',
      image: '/website/advertisingseries/image/7ef23102-331e-418d-9139-72a7c77264011770618843718.jpg',
      title: t('26 Voyah Dreamer', 'Voyah Dreamer 26', 'Voyah Dreamer 26'),
      category: t('A new-era flagship MPV', 'Un monospace phare de nouvelle génération', 'سيارة MPV رائدة من الجيل الجديد'),
      metrics: [
        metric('MPV', 'Body type', 'Carrosserie', 'نوع الهيكل'),
        metric('Flagship', 'Positioning', 'Positionnement', 'الفئة'),
        metric('Six / seven seats', 'Seating', 'Places', 'عدد المقاعد')
      ]
    },
    {
      slug: 'passion-L.html',
      image: '/website/advertisingseries/image/c6a84270-5367-4b46-9bbb-ca363039b20f1770618873239.jpg',
      title: t('Voyah Passion L', 'Voyah Passion L', 'Voyah Passion L'),
      category: t('A new-era flagship sedan', 'Une berline phare de nouvelle génération', 'سيدان رائدة من الجيل الجديد'),
      metrics: [
        metric('Sedan', 'Body type', 'Carrosserie', 'نوع الهيكل'),
        metric('Flagship', 'Positioning', 'Positionnement', 'الفئة'),
        metric('Executive luxury', 'Experience', 'Expérience', 'التجربة')
      ]
    },
    {
      slug: 'free+.html',
      image: '/website/advertisingseries/image/e8a95859-ce35-4110-8156-b9f6a9c3365d1770618911247.jpg',
      title: t('Voyah FREE+', 'Voyah FREE+', 'Voyah FREE+'),
      category: t(
        'SUV with Huawei intelligent driving and Harmony cockpit',
        'SUV avec conduite intelligente Huawei et cockpit Harmony',
        'سيارة SUV مزودة بقيادة ذكية من Huawei ومقصورة Harmony'
      ),
      metrics: [
        metric('SUV', 'Body type', 'Carrosserie', 'نوع الهيكل'),
        metric('Huawei ADS', 'Driving tech', 'Conduite intelligente', 'تقنية القيادة'),
        metric('Harmony cockpit', 'Cabin', 'Cockpit', 'المقصورة')
      ]
    },
    {
      slug: 'newCourage.html',
      image: '/website/advertisingseries/image/927d6e8d-3182-420f-891e-0f47c492d9141770618945147.jpg',
      title: t('New Voyah Courage', 'Nouveau Voyah Courage', 'Voyah Courage الجديد'),
      category: t(
        'Pure-electric SUV with Huawei intelligent driving and Harmony cockpit',
        'SUV 100 % électrique avec conduite intelligente Huawei et cockpit Harmony',
        'سيارة SUV كهربائية بالكامل مزودة بقيادة ذكية من Huawei ومقصورة Harmony'
      ),
      metrics: [
        metric('Pure electric', 'Powertrain', 'Motorisation', 'منظومة الحركة'),
        metric('Huawei ADS', 'Driving tech', 'Conduite intelligente', 'تقنية القيادة'),
        metric('Harmony cockpit', 'Cabin', 'Cockpit', 'المقصورة')
      ]
    }
  ],
  energy: {
    title: t('Voyah Energy', 'Énergie Voyah', 'طاقة Voyah'),
    body: t(
      'Let users enjoy the best replenishment experience with more choice, more speed, more intelligence, and more efficiency.',
      'Offrir aux utilisateurs la meilleure expérience de recharge, avec davantage de choix, de rapidité, d'intelligence et d'efficacité.',
      'إتاحة أفضل تجربة تزوّد بالطاقة للمستخدمين، بمزيد من الخيارات والسرعة والذكاء والكفاءة.'
    ),
    label: t('Learn more', 'En savoir plus', 'اعرف المزيد'),
    image: '/static/assets/energy_bg-4482e81f.jpg',
    metrics: [
      metric('1,540,000+', 'Integrated charging resources', 'Ressources de recharge intégrées', 'موارد الشحن المدمجة'),
      metric('16,000+', 'Ultra-fast charging resources', 'Ressources de recharge ultra-rapide', 'موارد الشحن فائق السرعة'),
      metric('530,000,000+ kWh', 'Cumulative charging delivered to users', 'Recharge cumulée fournie aux utilisateurs', 'إجمالي الكهرباء المشحونة للمستخدمين'),
      metric('170,000+ tons', 'Cumulative carbon reduction', 'Réduction cumulée des émissions de carbone', 'إجمالي خفض انبعاثات الكربون')
    ]
  },
  technology: {
    title: t('Explore Voyah technology', 'Explorer les technologies Voyah', 'استكشف تقنيات Voyah'),
    body: t(
      'Voyah is not only a pioneer among central-state enterprises on the electric track, but also a new benchmark for the transformation and upgrade of mature Chinese automakers and a successful practice of Dongfeng Motor Group's "new five modernizations": lightweighting, electrification, intelligence, connectivity, and sharing.',
      'Voyah n'est pas seulement un pionnier des entreprises centrales sur la voie de l'électrique, mais aussi une nouvelle référence pour la transformation des constructeurs chinois matures et une concrétisation réussie des "cinq nouvelles modernisations" de Dongfeng Motor Group : allègement, électrification, intelligence, connectivité et partage.',
      'لا تُعد Voyah مجرد رائدة بين الشركات المركزية على مسار السيارات الكهربائية، بل تمثل أيضاً معياراً جديداً لتحول شركات السيارات الصينية الناضجة وتحديثها، كما أنها تجسيد ناجح لـ«التحولات الخمسة الجديدة» لدى Dongfeng Motor Group: الخفة، والكهرباء، والذكاء، والاتصال، والمشاركة.'
    ),
    tabs: [
      {
        label: t('ESSA native intelligent electric architecture', 'Architecture électrique intelligente ESSA', 'منصة ESSA الكهربائية الذكية الأصلية'),
        tags: [
          t('Native intelligence', 'Intelligence native', 'ذكاء أصيل'),
          t('Ultimate safety', 'Sécurité ultime', 'سلامة قصوى'),
          t('Freer control', 'Contrôle fluide', 'تحكم أكثر حرية'),
          t('Full comfort', 'Confort global', 'راحة شاملة')
        ],
        image: '/static/assets/tansuo-927d66e5.png',
        cta: t('Watch the full film', 'Voir le film complet', 'شاهد الفيلم الكامل')
      },
      {
        label: t('Tianyuan architecture', 'Architecture Tianyuan', 'منصة تيانيوان'),
        tags: [
          t('Efficient core', 'Cœur efficace', 'نواة فعّالة'),
          t('Agile systems', 'Systèmes agiles', 'أنظمة مرنة'),
          t('Smart interconnection', 'Interconnexion intelligente', 'ترابط ذكي'),
          t('Open co-creation', 'Co-création ouverte', 'ابتكار مفتوح')
        ],
        image: '/static/assets/tansuo_2-8336799c.png',
        cta: t('Watch the full film', 'Voir le film complet', 'شاهد الفيلم الكامل')
      }
    ]
  },
  service: {
    title: t('Voyah Service', 'Service Voyah', 'خدمات Voyah'),
    body: t(
      'With one sincere heart, every detail is treated sincerely; with one honest intention, every promise is fulfilled with sincerity.',
      'Avec un cœur sincère, chaque détail est traité avec sincérité ; avec une intention honnête, chaque promesse est tenue avec sincérité.',
      'بقلب صادق نتعامل بإخلاص مع كل تفصيل، وبنية صادقة نفي كل وعد بإخلاص.'
    ),
    cards: [
      block('/static/assets/section3_2-4fb471c7.jpg', 'Sincere reception', 'Accueil sincère', 'استقبال صادق', '', '', ''),
      block('/static/assets/section3_3-20237755.jpg', 'Ceremonial delivery', 'Livraison avec sens du rituel', 'تسليم بطابع احتفالي', '', '', ''),
      block('/static/assets/section4_1-f7cf566b.jpg', '7×24-hour protection', 'Protection 7×24 h', 'حماية على مدار 7×24 ساعة', '', '', ''),
      block('/static/assets/section4_2-aa55795b.jpg', 'Professional team', 'Équipe professionnelle', 'فريق محترف', '', '', '')
    ]
  },
  community: {
    title: t('Community News', 'Actualités de la communauté', 'أخبار المجتمع'),
    body: t(
      'Fresh stories from owners and lively conversations about life with the car.',
      'Des histoires fraîches de propriétaires et des échanges vivants autour de la vie avec la voiture.',
      'قصص جديدة من المالكين وحوارات ممتعة عن الحياة مع السيارة.'
    ),
    posts: [
      {
        image: '/static/assets/experience1-96467d92.jpg',
        title: t(
          'Owner story | Chairman Li Peng and the "dockside world" of 6,000 owners',
          'Histoire de propriétaire | Li Peng et le « monde du quai » de 6 000 propriétaires',
          'قصة مالك | لي بنغ و«عالم الميناء» مع 6000 من المالكين'
        ),
        body: t('Buying Voyah five times, bound by loyalty and friendship.', 'Cinq achats de Voyah, portés par la fidélité et l'amitié.', 'خمس مرات من اقتناء Voyah بدافع الوفاء والصداقة.'),
        slug: 'brand.html'
      },
      {
        image: '/static/assets/experience2-306e063e.jpg',
        title: t(
          'Owner story | When design aesthetics meet craftsmanship',
          'Histoire de propriétaire | Quand l'esthétique du design rencontre l'artisanat',
          'قصة مالك | حين يلتقي جمال التصميم بروح الحرفة'
        ),
        body: t('Liu Lingfeng and his deep resonance with three Voyah FREE models.', 'Liu Lingfeng et sa profonde résonance avec trois Voyah FREE.', 'ليو لينغفنغ ورابطه العميق مع ثلاث سيارات Voyah FREE.'),
        slug: 'service.html'
      },
      {
        image: '/static/assets/experience3-a8085d28.jpg',
        title: t(
          'Owner story | The dream-chasing journey of a jewelry livestream host',
          'Histoire de propriétaire | Le voyage de rêve d'une animatrice de bijoux en direct',
          'قصة مالك | رحلة مطاردة الأحلام لمقدمة بث مباشر للمجوهرات'
        ),
        body: t('With Voyah FREE 318 as a companion, she heads toward the road of life.', 'Avec Voyah FREE 318 comme compagnon, elle avance sur le chemin de la vie.', 'برفقة Voyah FREE 318 تنطلق في رحلة الحياة.'),
        slug: 'energy.html'
      }
    ]
  },
  footprint: {
    title: t('Leading in China, expanding globally', 'Leader en Chine, déploiement mondial', 'ريادة في الصين وانتشار عالمي'),
    body: t(
      'The Chinese premium intelligent new-energy vehicle brand that moved from the local market to overseas markets the fastest.',
      'La marque chinoise haut de gamme de véhicules à énergies nouvelles intelligents qui a réalisé le passage du marché local aux marchés étrangers le plus rapidement.',
      'العلامة الصينية الراقية للمركبات الذكية العاملة بالطاقة الجديدة التي انتقلت من السوق المحلية إلى الأسواق الخارجية بأسرع وتيرة.'
    ),
    cta: t('Overseas website', 'Site international', 'الموقع الخارجي'),
    image: '/static/assets/earth_index-e4c6ae99.jpg',
    tabs: [
      {
        label: t('Europe (21)', 'Europe (21)', 'أوروبا (21)'),
        countries: [
          t('Norway', 'Norvège', 'النرويج'),
          t('Portugal', 'Portugal', 'البرتغال'),
          t('Spain', 'Espagne', 'إسبانيا'),
          t('Italy', 'Italie', 'إيطاليا'),
          t('Switzerland', 'Suisse', 'سويسرا'),
          t('Finland', 'Finlande', 'فنلندا'),
          t('Netherlands', 'Pays-Bas', 'هولندا'),
          t('Belgium', 'Belgique', 'بلجيكا'),
          t('Germany', 'Allemagne', 'ألمانيا'),
          t('Poland', 'Pologne', 'بولندا'),
          t('Czech Republic', 'République tchèque', 'التشيك'),
          t('Slovakia', 'Slovaquie', 'سلوفاquie'),
          t('Hungary', 'Hongrie', 'المجر'),
          t('Slovenia', 'Slovénie', 'سلوفينيا'),
          t('Bulgaria', 'Bulgarie', 'بلغاريا'),
          t('Latvia', 'Lettonie', 'لاتفيا'),
          t('Estonia', 'Estonie', 'إستونيا'),
          t('Lithuania', 'Lituanie', 'ليتوانيا'),
          t('Moldova', 'Moldavie', 'مولدوفا'),
          t('Bosnia and Herzegovina', 'Bosnie-Herzégovine', 'البوسنة والهرسك'),
          t('Greece', 'Grèce', 'اليونان')
        ]
      },
      {
        label: t('Middle East (7)', 'Moyen-Orient (7)', 'الشرق الأوسط (7)'),
        countries: [
          t('United Arab Emirates', 'Émirats arabes unis', 'الإمارات العربية المتحدة'),
          t('Qatar', 'Qatar', 'قطر'),
          t('Saudi Arabia', 'Arabie saoudite', 'المملكة العربية السعودية'),
          t('Oman', 'Oman', 'عُمان'),
          t('Kuwait', 'Koweït', 'الكويت'),
          t('Bahrain', 'Bahreïn', 'البحرين'),
          t('Jordan', 'Jordanie', 'الأردن')
        ]
      },
      {
        label: t('Africa (2)', 'Afrique (2)', 'أفريقيا (2)'),
        countries: [
          t('Egypt', 'Égypte', 'مصر'),
          t('Angola', 'Angola', 'أنغولا')
        ]
      },
      {
        label: t('Americas (3)', 'Amériques (3)', 'الأمريكتان (3)'),
        countries: [
          t('Panama', 'Panama', 'بنما'),
          t('Colombia', 'Colombie', 'كولومبيا'),
          t('Costa Rica', 'Costa Rica', 'كوستاريكا')
        ]
      },
      {
        label: t('Asia (9)', 'Asie (9)', 'آسيا (9)'),
        countries: [
          t('China', 'Chine', 'الصين'),
          t('Azerbaijan', 'Azerbaïdjan', 'أذربيجان'),
          t('Uzbekistan', 'Ouzbékistan', 'أوزبكستان'),
          t('Kazakhstan', 'Kazakhstan', 'كازاخستان'),
          t('Turkmenistan', 'Turkménistan', 'تركمانستان'),
          t('Armenia', 'Arménie', 'أرمينيا'),
          t('Myanmar', 'Myanmar', 'ميانمار'),
          t('Laos', 'Laos', 'لاوس'),
          t('Cambodia', 'Cambodge', 'كمبوديا')
        ]
      }
    ]
  }
}

export const footerColumns: FooterColumn[] = [
  {
    title: t('Voyah Brand', 'Marque Voyah', 'علامة Voyah'),
    links: [
      { label: t('Voyah Brand', 'Marque Voyah', 'علامة Voyah'), slug: 'brand.html' }
    ]
  },
  {
    title: t('Models', 'Modèles', 'الطرازات'),
    links: [
      { label: t('Voyah Passion L', 'Voyah Passion L', 'Voyah Passion L'), slug: 'passion-L.html' },
      { label: t('Voyah Passion', 'Voyah Passion', 'Voyah Passion'), slug: 'passion.html' },
      { label: t('Voyah Titan', 'Voyah Titan', 'Voyah Titan'), slug: 'titan.html' },
      { label: t('Voyah Titan Black Edition', 'Voyah Titan Black Edition', 'Voyah Titan Black Edition'), slug: 'titan_blackedition.html' },
      { label: t('Voyah Titan X8', 'Voyah Titan X8', 'Voyah Titan X8'), slug: 'titan_X8.html' },
      { label: t('Voyah FREE+', 'Voyah FREE+', 'Voyah FREE+'), slug: 'free+.html' },
      { label: t('New Voyah Courage', 'Nouveau Voyah Courage', 'Voyah Courage الجديد'), slug: 'newCourage.html' },
      { label: t('Voyah FREE 318', 'Voyah FREE 318', 'Voyah FREE 318'), slug: 'free.html' },
      { label: t('Voyah Courage', 'Voyah Courage', 'Voyah Courage'), slug: 'courage.html' },
      { label: t('26 Voyah Dreamer', 'Voyah Dreamer 26', 'Voyah Dreamer 26'), slug: 'newDreamer26.html' }
    ]
  },
  {
    title: t('Store Center', 'Centre de magasins', 'مركز المعارض'),
    links: [
      { label: t('Store center', 'Centre de magasins', 'مركز المعارض'), slug: 'store.html' }
    ]
  },
  {
    title: t('Voyah Service', 'Service Voyah', 'خدمات Voyah'),
    links: [
      { label: t('Voyah Service', 'Service Voyah', 'خدمات Voyah'), slug: 'service.html' },
      { label: t('Voyah Energy', 'Énergie Voyah', 'طاقة Voyah'), slug: 'energy.html' },
      { label: t('Procurement disclosure', 'Informations achats', 'معلومات المشتريات'), slug: 'purchasing.html' },
      { label: t('Environmental disclosure', 'Informations environnementales', 'المعلومات البيئية'), slug: 'environmental.html' },
      { label: t('Downloads', 'Téléchargements', 'التنزيلات'), slug: 'document.html' }
    ]
  },
  {
    title: t('About Voyah', 'À propos de Voyah', 'عن Voyah'),
    links: [
      { label: t('Corporate Culture', 'Culture d entreprise', 'الثقافة المؤسسية'), slug: 'corporate.html' },
      { label: t('Join Us', 'Rejoignez-nous', 'انضم إلينا'), slug: 'joinus.html' },
      { label: t('Partner recruitment', 'Recrutement de partenaires', 'استقطاب الشركاء'), slug: 'recruit-partners.html' },
      { label: t('Investor Relations', 'Relations investisseurs', 'علاقات المستثمرين'), slug: 'ir.html' }
    ]
  }
]

export const footerLegalLinks = [
  { label: t('Legal', 'Mentions légales', 'الشؤون القانونية'), slug: 'legal.html' },
  { label: t('Privacy', 'Confidentialité', 'الخصوصية'), slug: 'privacy.html' },
  { label: t('Cookies', 'Cookies', 'ملفات تعريف الارتباط'), slug: 'cookie.html' },
  { label: t('Authorization', 'Autorisation', 'التفويض'), slug: 'authorization.html' }
]

export const footerContact: FooterContact = {
  title: t('Download the Voyah App and explore a new world of Voyah', 'Téléchargez l application Voyah et explorez un nouvel univers Voyah', 'حمّل تطبيق Voyah واستكشف عالماً جديداً من Voyah'),
  body: t('Stay up to date with the latest Voyah news and discover community activities with distinctive taste.', 'Restez au plus près des dernières actualités Voyah et découvrez des activités communautaires au caractère affirmé.', 'اطلع على أحدث أخبار Voyah واكتشف أنشطة المجتمع التي تحمل طابعاً مميزاً.'),
  appCode: '/static/assets/app_code_160-5b2a34cc.png',
  miniProgramCode: '/static/assets/xcx_code_160-73cf3be6.png'
}

export const localize = (text: LocalizedText, locale: LocaleCode): string => text[locale] ?? text.en

export const findLocale = (code?: string) => locales.find((locale) => locale.code === code)

export const resolvePage = (slug?: string): SitePage | undefined => (slug ? sitePageMap.get(slug) : undefined)





