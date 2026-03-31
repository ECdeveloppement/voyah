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
  service: {
    title: LocalizedText
    body: LocalizedText
    cards: GalleryItem[]
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
  features: options.gallery.slice(0, 3).map((image, index) => ({
    image,
    title: modelFeatureTitles[index] ?? modelFeatureTitles[2],
    body: t(
      'A composed blend of design precision, digital clarity, and confident road presence defines this Voyah flagship.',
      'Un équilibre maîtrisé entre précision du design, clarté numérique et présence affirmée définit ce modèle Voyah.',
      'يمزج هذا الطراز من Voyah بين دقة التصميم والوضوح الرقمي والحضور الواثق على الطريق.'
    )
  })),
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
      { label: t('Corporate Culture', 'Culture d’entreprise', 'الثقافة المؤسسية'), slug: 'corporate.html' },
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
    description: t('A large SUV built around commanding stance, confident family space, and composed all-road capability.', 'Un grand SUV conçu autour d’une prestance affirmée, d’un espace familial généreux et d’une aisance sereine sur tous types de routes.', 'سيارة SUV كبيرة تجمع بين الحضور القوي والمساحة العائلية الرحبة والثبات على مختلف الطرق.'),
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
      metric('Expanded seating', 'Space plan', 'Plan d’espace', 'تخطيط المساحة'),
      metric('Travel ready', 'Use case', 'Usage', 'الاستخدام'),
      metric('SUV comfort', 'Comfort focus', 'Confort', 'الراحة')
    ]
  }),
  makeModel({
    slug: 'free+.html',
    title: t('Voyah FREE+', 'Voyah FREE+', 'Voyah FREE+'),
    subtitle: t('Premium performance SUV', 'SUV premium haute performance', 'SUV فاخرة عالية الأداء'),
    description: t('A sharply sculpted SUV with athletic stance, expressive lighting, and a focused digital cockpit.', 'Un SUV sculpté avec précision, doté d’une posture athlétique, d’une signature lumineuse expressive et d’un cockpit numérique centré sur le conducteur.', 'سيارة SUV منحوتة بدقة تجمع بين الوقفة الرياضية والإضاءة التعبيرية والمقصورة الرقمية المركزة على السائق.'),
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
    description: t('A compact premium SUV shaped for agile urban use while preserving Voyah refinement and visual confidence.', 'Un SUV premium compact pensé pour l’agilité urbaine sans sacrifier le raffinement Voyah ni sa présence visuelle.', 'سيارة SUV فاخرة مدمجة موجهة للمدينة مع الحفاظ على رقي Voyah وحضورها الواثق.'),
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
    description: t('A special Dreamer expression emphasizing serene scenery, warm hospitality, and elegant multi-person travel.', 'Une interprétation spéciale de Dreamer axée sur le paysage, l’accueil chaleureux et l’élégance des voyages à plusieurs.', 'نسخة خاصة من Dreamer تركز على المشهد الهادئ والضيافة الدافئة وأناقة السفر الجماعي.'),
    price: t('Special edition MPV', 'Édition spéciale MPV', 'MPV إصدار خاص'),
    heroImage: '/voyah-resources/images/car/dreamriver/kv_1920.png',
    logo: '/voyah-resources/images/car/car_logo/dreamriver.png',
    gallery: [
      '/voyah-resources/images/car/dreamriver/sc_2.png',
      '/voyah-resources/images/car/dreamriver/sc_5-2.png',
      '/voyah-resources/images/car/dreamriver/sc_8.png'
    ],
    metrics: [
      metric('Scenic theme', 'Edition theme', 'Thème de l’édition', 'طابع الإصدار'),
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
    title: t('Hello, world. This is Voyah.', 'Bonjour le monde. Voici Voyah.', 'مرحباً بالعالم. هذه هي Voyah.'),
    summary: t('Voyah blends contemporary Chinese luxury, advanced electrification, and a calm, future-facing brand language.', 'Voyah associe luxe chinois contemporain, électrification avancée et langage de marque résolument tourné vers l’avenir.', 'تمزج Voyah بين الفخامة الصينية المعاصرة والكهرباء المتقدمة ولغة علامة هادئة تتطلع إلى المستقبل.'),
    heroImage: '/static/assets/world-fec50d02.jpg',
    metrics: [
      metric('Premium NEV', 'Brand role', 'Rôle de la marque', 'دور العلامة'),
      metric('User-centered', 'Philosophy', 'Philosophie', 'الفلسفة'),
      metric('Global vision', 'Outlook', 'Vision', 'الرؤية')
    ],
    blocks: [
      block('/static/assets/greeting-b368cd0d.jpg', 'Brand vision', 'Vision de marque', 'رؤية العلامة', 'Voyah is designed as a premium new-energy mobility brand shaped around confidence, warmth, and technical clarity.', 'Voyah est pensée comme une marque premium de mobilité à énergies nouvelles fondée sur la confiance, la chaleur et la clarté technique.', 'تم تصميم Voyah كعلامة تنقل فاخرة للطاقة الجديدة تقوم على الثقة والدفء والوضوح التقني.'),
      block('/static/assets/future-6727dcc7.png', 'Future mobility', 'Mobilité future', 'تنقل المستقبل', 'The brand experience connects design, intelligence, and energy services into one integrated ownership journey.', 'L’expérience de marque relie design, intelligence et services énergétiques dans un parcours de possession intégré.', 'تربط تجربة العلامة بين التصميم والذكاء وخدمات الطاقة ضمن رحلة ملكية متكاملة.'),
      block('/static/assets/world-6e618fb7.png', 'Global presence', 'Présence mondiale', 'الحضور العالمي', 'Voyah extends beyond domestic presence with a more international outlook for products, services, and partnerships.', 'Voyah dépasse le seul marché domestique avec une vision internationale des produits, services et partenariats.', 'تتجاوز Voyah حضورها المحلي نحو رؤية دولية للمنتجات والخدمات والشراكات.')
    ],
    ctaLabel: t('Explore the lineup', 'Explorer la gamme', 'استكشف الطرازات'),
    ctaSlug: 'passion-L.html'
  },
  {
    kind: 'info',
    slug: 'store.html',
    eyebrow: t('Store center', 'Centre de magasins', 'مركز المعارض'),
    title: t('Retail spaces designed around the user journey', 'Des espaces retail conçus autour du parcours client', 'مساحات بيع مصممة حول رحلة المستخدم'),
    summary: t('Voyah stores combine product discovery, consultation, digital services, and delivery support within one premium environment.', 'Les espaces Voyah réunissent découverte produit, conseil, services numériques et accompagnement à la livraison dans un même environnement premium.', 'تجمع معارض Voyah بين اكتشاف المنتج والاستشارة والخدمات الرقمية ودعم التسليم ضمن بيئة فاخرة واحدة.'),
    heroImage: '/static/assets/store1-bdde9696.jpg',
    blocks: [
      block('/static/assets/store1-ae6ca1c1.png', 'Boutique experience', 'Expérience boutique', 'تجربة المتجر', 'Open, calm, and hospitality-led spaces make product exploration feel effortless.', 'Des espaces ouverts, calmes et orientés hospitalité rendent la découverte produit fluide et naturelle.', 'تجعل المساحات المفتوحة والهادئة والموجهة للضيافة استكشاف المنتج تجربة سهلة.'),
      block('/static/assets/store2-6e7252f4.jpg', 'Consultation zones', 'Espaces de conseil', 'مناطق الاستشارة', 'Visitors can compare models, configurations, and ownership services with specialist support.', 'Les visiteurs peuvent comparer modèles, configurations et services avec l’aide de spécialistes.', 'يمكن للزوار مقارنة الطرازات والتجهيزات والخدمات بمساندة مختصين.'),
      block('/static/assets/store3-fe6e8d7d.jpg', 'Delivery support', 'Accompagnement livraison', 'دعم التسليم', 'Store operations continue through order follow-up, handover, and ownership onboarding.', 'Le parcours magasin se prolonge via le suivi de commande, la remise et l’accompagnement à la prise en main.', 'تمتد عمليات المعرض إلى متابعة الطلب والتسليم وتهيئة المالك للاستخدام.')
    ],
    ctaLabel: t('Book a visit', 'Réserver une visite', 'احجز زيارة'),
    ctaSlug: 'book-drive.html'
  },
  {
    kind: 'info',
    slug: 'service.html',
    eyebrow: t('Service', 'Service', 'الخدمة'),
    title: t('Service systems that extend beyond the vehicle', 'Des services qui vont au-delà du véhicule', 'أنظمة خدمة تتجاوز السيارة'),
    summary: t('Voyah service connects digital support, maintenance capacity, roadside care, and ownership touchpoints into one system.', 'Le service Voyah relie assistance numérique, entretien, assistance routière et points de contact de possession dans un seul système.', 'تربط خدمة Voyah بين الدعم الرقمي والصيانة والمساعدة على الطريق ونقاط تواصل الملكية ضمن نظام واحد.'),
    heroImage: '/static/assets/service-502e6c35.jpg',
    blocks: [
      block('/static/assets/section3_2-4fb471c7.jpg', 'Care network', 'Réseau de prise en charge', 'شبكة العناية', 'Service outlets and support channels are designed to reduce friction throughout the ownership lifecycle.', 'Les points de service et canaux d’assistance sont conçus pour réduire les frictions pendant tout le cycle de possession.', 'تم تصميم منافذ الخدمة وقنوات الدعم لتقليل الاحتكاك طوال دورة الملكية.'),
      block('/static/assets/section3_3-20237755.jpg', 'Digital support', 'Support numérique', 'الدعم الرقمي', 'App-based tools and digital workflows help users manage appointments, records, and assistance efficiently.', 'Les outils applicatifs et les parcours numériques facilitent la gestion des rendez-vous, dossiers et demandes d’assistance.', 'تساعد الأدوات التطبيقية والمسارات الرقمية المستخدمين على إدارة المواعيد والسجلات وطلبات الدعم بكفاءة.'),
      block('/static/assets/section4_1-f7cf566b.jpg', 'Ownership reassurance', 'Sérénité de possession', 'طمأنينة الملكية', 'The overall system is intended to make premium electric ownership feel dependable and straightforward.', 'L’ensemble est pensé pour rendre la possession d’un véhicule électrique premium fiable et simple.', 'صُمم النظام بالكامل لجعل امتلاك سيارة كهربائية فاخرة تجربة موثوقة وسهلة.')
    ],
    ctaLabel: t('View energy services', 'Voir les services énergie', 'عرض خدمات الطاقة'),
    ctaSlug: 'energy.html'
  },
  {
    kind: 'info',
    slug: 'energy.html',
    eyebrow: t('Energy', 'Énergie', 'الطاقة'),
    title: t('A connected energy ecosystem for users', 'Un écosystème énergétique connecté', 'منظومة طاقة مترابطة للمستخدمين'),
    summary: t('Voyah Energy links charging scenes, partner infrastructure, and digital guidance to support daily and long-distance use.', 'Voyah Energy relie scénarios de recharge, infrastructures partenaires et guidage numérique pour accompagner l’usage quotidien et longue distance.', 'تربط طاقة Voyah بين سيناريوهات الشحن والبنية الشريكة والإرشاد الرقمي لدعم الاستخدام اليومي والسفر الطويل.'),
    heroImage: '/static/assets/energy_bg-4482e81f.jpg',
    blocks: [
      block('/static/assets/charge_pc-1c0a2e91.png', 'Home and destination charging', 'Recharge à domicile et destination', 'الشحن المنزلي والوجهة', 'A broad mix of charging touchpoints helps match energy access to different ownership routines.', 'Une combinaison étendue de solutions de recharge adapte l’accès à l’énergie aux différents rythmes d’usage.', 'يساعد تنوع نقاط الشحن على مواءمة الوصول إلى الطاقة مع أنماط الاستخدام المختلفة.'),
      block('/static/assets/super_charge_pc-3886645d.png', 'High-speed replenishment', 'Recharge rapide', 'إعادة شحن سريعة', 'Fast charging capability and partner networks reduce stop time during longer journeys.', 'La recharge rapide et les réseaux partenaires réduisent le temps d’arrêt lors des longs trajets.', 'تقلل قدرات الشحن السريع والشبكات الشريكة زمن التوقف في الرحلات الطويلة.'),
      block('/static/assets/V2G-cba13343.jpg', 'Energy intelligence', 'Intelligence énergétique', 'ذكاء الطاقة', 'The energy layer is designed to be visible, guided, and integrated across the digital ownership journey.', 'La couche énergie est pensée pour être lisible, guidée et intégrée dans l’ensemble du parcours numérique.', 'تم تصميم طبقة الطاقة لتكون واضحة وموجهة ومتكاملة عبر الرحلة الرقمية للملكية.')
    ],
    ctaLabel: t('Read service details', 'Lire les détails de service', 'قراءة تفاصيل الخدمة'),
    ctaSlug: 'service.html'
  },
  {
    kind: 'info',
    slug: 'corporate.html',
    eyebrow: t('About Voyah', 'À propos de Voyah', 'عن Voyah'),
    title: t('Corporate culture and long-term brand development', 'Culture d’entreprise et développement de long terme', 'الثقافة المؤسسية والتطور طويل المدى'),
    summary: t('Voyah positions its culture around user value, innovation, disciplined execution, and a premium mobility outlook.', 'Voyah articule sa culture autour de la valeur utilisateur, de l’innovation, de l’exécution disciplinée et d’une vision premium de la mobilité.', 'تركز ثقافة Voyah على قيمة المستخدم والابتكار والتنفيذ المنضبط ورؤية فاخرة للتنقل.'),
    heroImage: '/static/assets/corporate_bg_1-33cad798.png',
    blocks: [
      block('/static/assets/corporate_poster_1-c2c8c7ca.jpg', 'Mission', 'Mission', 'المهمة', 'The brand mission emphasizes premium new-energy mobility with stronger user empathy and product clarity.', 'La mission de la marque met l’accent sur une mobilité premium à énergie nouvelle avec plus d’empathie utilisateur et de clarté produit.', 'تؤكد مهمة العلامة على التنقل الفاخر للطاقة الجديدة مع تعاطف أكبر مع المستخدم ووضوح أعلى في المنتج.'),
      block('/static/assets/corporate_poster_8-7da49d74.png', 'Innovation', 'Innovation', 'الابتكار', 'Technology, industrial capability, and digital experience are aligned to support a coherent premium standard.', 'Technologie, capacité industrielle et expérience numérique sont alignées pour soutenir un standard premium cohérent.', 'تتكامل التكنولوجيا والقدرة الصناعية والخبرة الرقمية لدعم معيار فاخر متماسك.'),
      block('/static/assets/corporate_poster_14-b8674e6c.png', 'Values', 'Valeurs', 'القيم', 'Long-term development depends on execution quality, responsible growth, and brand consistency.', 'Le développement de long terme dépend de la qualité d’exécution, d’une croissance responsable et d’une cohérence de marque.', 'يعتمد التطور طويل المدى على جودة التنفيذ والنمو المسؤول والاتساق في العلامة.')
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
      block('/static/assets/recruit_form_bg-107b0556.jpg', 'Join the team', 'Rejoindre l’équipe', 'انضم إلى الفريق', 'Recruitment channels are designed to make application and role matching clearer for candidates.', 'Les parcours de recrutement sont conçus pour rendre la candidature et l’adéquation des rôles plus claires.', 'صممت قنوات التوظيف لجعل التقديم ومواءمة الأدوار أكثر وضوحاً للمرشحين.')
    ]
  },
  {
    kind: 'info',
    slug: 'recruit-partners.html',
    eyebrow: t('Partners', 'Partenaires', 'الشركاء'),
    title: t('Partner recruitment for broader service reach', 'Recrutement de partenaires pour élargir le service', 'استقطاب الشركاء لتوسيع نطاق الخدمة'),
    summary: t('Voyah partner programs support expansion across retail, service touchpoints, and local operational capability.', 'Les programmes partenaires de Voyah accompagnent l’expansion du retail, des points de service et des capacités opérationnelles locales.', 'تدعم برامج الشركاء لدى Voyah التوسع عبر البيع والخدمة والقدرات التشغيلية المحلية.'),
    heroImage: '/static/assets/recruit_partners_bg_1920-81ee18a9.png',
    blocks: [
      block('/static/assets/recruit_partners_poster_1-f48b5641.jpg', 'Network development', 'Développement du réseau', 'تطوير الشبكة', 'Partner recruitment is framed around long-term market development and service consistency.', 'Le recrutement de partenaires s’inscrit dans une logique de développement de marché à long terme et de cohérence de service.', 'يتم استقطاب الشركاء ضمن إطار تطوير السوق على المدى الطويل واتساق الخدمة.'),
      block('/static/assets/recruit_partners_poster_5-eff94200.png', 'Capability standards', 'Standards de capacité', 'معايير القدرة', 'Operational readiness, user care, and brand presentation are core to partner evaluation.', 'La préparation opérationnelle, la qualité de service et la présentation de la marque sont centrales dans l’évaluation des partenaires.', 'تعد الجاهزية التشغيلية والعناية بالمستخدم وتقديم العلامة عناصر أساسية في تقييم الشركاء.'),
      block('/static/assets/recruit_partners_poster_9-c73e7510.jpg', 'Shared growth', 'Croissance partagée', 'النمو المشترك', 'The model emphasizes durable cooperation rather than short-term channel expansion.', 'Le modèle privilégie une coopération durable plutôt qu’une simple expansion de canal à court terme.', 'يركز النموذج على تعاون مستدام بدلاً من توسع قنوات قصير الأمد.')
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
      block('/static/assets/corporate-governance-1d981bac.png', 'Governance structure', 'Structure de gouvernance', 'هيكل الحوكمة', 'Governance information clarifies institutional design and corporate oversight principles.', 'Les informations de gouvernance clarifient l’organisation institutionnelle et les principes de supervision.', 'توضح معلومات الحوكمة التصميم المؤسسي ومبادئ الإشراف المؤسسي.'),
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
      block('/static/assets/earth_index-e4c6ae99.jpg', 'Environmental view', 'Vision environnementale', 'الرؤية البيئية', 'The environmental narrative is presented as part of the broader new-energy brand ecosystem.', 'Le récit environnemental s’inscrit dans l’écosystème plus large de la marque à énergie nouvelle.', 'يقدم السرد البيئي كجزء من منظومة أوسع للعلامة العاملة بالطاقة الجديدة.'),
      block('/static/assets/power_bg1-7048cd30.png', 'Operational responsibility', 'Responsabilité opérationnelle', 'المسؤولية التشغيلية', 'Responsibility extends across the way the brand grows, serves, and expands its footprint.', 'La responsabilité s’étend à la manière dont la marque croît, sert ses utilisateurs et développe son empreinte.', 'تمتد المسؤولية إلى طريقة نمو العلامة وخدمتها للمستخدمين وتوسيع حضورها.'),
      block('/static/assets/world-6e618fb7.png', 'Long-term orientation', 'Orientation de long terme', 'التوجه طويل المدى', 'The overall frame emphasizes sustainable development rather than short-term messaging.', 'Le cadre général met l’accent sur le développement durable plutôt que sur des messages de court terme.', 'يركز الإطار العام على التنمية المستدامة لا الرسائل قصيرة الأجل.')
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
      block('/static/assets/user_manual-4441c1d3.png', 'User manuals', 'Manuels utilisateur', 'أدلة المستخدم', 'Vehicle documents are organized to support onboarding and continued ownership use.', 'Les documents véhicules sont organisés pour accompagner la prise en main puis l’usage au long cours.', 'تنظم مستندات المركبات لدعم البدء في الاستخدام ثم الاستفادة المستمرة أثناء الملكية.'),
      block('/static/assets/prospectus2-00a82650.png', 'Reference files', 'Fichiers de référence', 'ملفات مرجعية', 'Supplementary references are grouped to improve search and download clarity.', 'Les références complémentaires sont regroupées pour rendre la recherche et le téléchargement plus lisibles.', 'تم تجميع المراجع الإضافية لتحسين وضوح البحث والتنزيل.'),
      block('/static/assets/app_code_160-5b2a34cc.png', 'Digital access', 'Accès numérique', 'الوصول الرقمي', 'Documents are connected to digital touchpoints to make retrieval more convenient.', 'Les documents sont reliés à des points de contact numériques pour simplifier leur consultation.', 'تم ربط المستندات بنقاط وصول رقمية لجعل استرجاعها أكثر سهولة.')
    ]
  },
  {
    kind: 'info',
    slug: 'purchasing.html',
    eyebrow: t('Procurement', 'Achats', 'المشتريات'),
    title: t('Procurement and supplier collaboration context', 'Contexte des achats et de la collaboration fournisseurs', 'سياق المشتريات والتعاون مع الموردين'),
    summary: t('Voyah procurement emphasizes capability, quality, and long-term supplier collaboration across a growing ecosystem.', 'Les achats Voyah mettent l’accent sur la capacité, la qualité et la collaboration fournisseur de long terme dans un écosystème en croissance.', 'تركز مشتريات Voyah على الكفاءة والجودة والتعاون طويل المدى مع الموردين ضمن منظومة متنامية.'),
    heroImage: '/static/assets/partner_pc-b12d249b.png',
    blocks: [
      block('/static/assets/partner_pc-b12d249b.png', 'Supplier network', 'Réseau fournisseurs', 'شبكة الموردين', 'Supplier collaboration is framed around shared quality standards and industrial coordination.', 'La collaboration fournisseurs s’appuie sur des standards qualité communs et une coordination industrielle solide.', 'يقوم التعاون مع الموردين على معايير جودة مشتركة وتنسيق صناعي قوي.'),
      block('/static/assets/charge_pile_bg-2c7b414e.png', 'Capability alignment', 'Alignement des capacités', 'مواءمة القدرات', 'The procurement model values consistency, delivery reliability, and structured cooperation.', 'Le modèle d’achats valorise la constance, la fiabilité d’exécution et une coopération structurée.', 'يقدّر نموذج المشتريات الاتساق والموثوقية في التسليم والتعاون المنظم.'),
      block('/static/assets/power_bg2-a6639f1e.png', 'Long-term development', 'Développement long terme', 'التطور طويل المدى', 'Partnerships are positioned as durable capability building rather than transactional sourcing alone.', 'Les partenariats sont pensés comme une construction durable de capacités et non comme un simple sourcing transactionnel.', 'تُفهم الشراكات باعتبارها بناء قدرات مستداماً لا مجرد توريد تعاقدي.')
    ]
  },
  {
    kind: 'info',
    slug: 'book-drive.html',
    eyebrow: t('Experience', 'Expérience', 'التجربة'),
    title: t('Book a test drive with the Voyah lineup', 'Réserver un essai avec la gamme Voyah', 'احجز تجربة قيادة مع مجموعة Voyah'),
    summary: t('Test-drive booking is connected to product consultation, store support, and guided model selection.', 'La réservation d’essai est reliée au conseil produit, au support magasin et à l’orientation vers le modèle adapté.', 'يرتبط حجز تجربة القيادة باستشارة المنتج ودعم المعرض وتوجيه اختيار الطراز المناسب.'),
    heroImage: '/static/assets/drive1-2ff63958.png',
    blocks: [
      block('/static/assets/drive2-aa10c694.png', 'Guided selection', 'Choix guidé', 'اختيار موجّه', 'Prospective owners can narrow the lineup through usage needs, size preferences, and vehicle character.', 'Les futurs clients peuvent affiner leur choix selon l’usage, les préférences d’espace et le caractère du véhicule.', 'يمكن للعملاء المحتملين تضييق الاختيار وفق الاحتياجات وطبيعة الاستخدام وتفضيلات الحجم.'),
      block('/static/assets/store3-fe6e8d7d.jpg', 'Store coordination', 'Coordination magasin', 'تنسيق المعرض', 'The booking flow connects directly to physical service and retail support touchpoints.', 'Le parcours de réservation se connecte directement aux points de service et d’accompagnement en magasin.', 'يرتبط مسار الحجز مباشرة بنقاط الخدمة والدعم داخل المعرض.'),
      block('/static/assets/life_center_poster-fb653778.png', 'Ownership onboarding', 'Prise en main', 'تهيئة الملكية', 'Test drives support not only discovery but also a clearer understanding of the ownership experience.', 'L’essai ne sert pas seulement à découvrir le produit, mais aussi à mieux comprendre l’expérience de possession.', 'لا تخدم تجربة القيادة الاكتشاف فقط بل تساعد أيضاً على فهم أوضح لتجربة الملكية.')
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
    title: t('Legal information', 'Informations légales', 'معلومات قانونية'),
    summary: t('Legal notices for the local Voyah reconstruction environment.', 'Mentions légales pour l’environnement local reconstruit de Voyah.', 'إشعارات قانونية لبيئة Voyah المحلية المعاد بناؤها.'),
    sections: [
      {
        title: t('Ownership', 'Propriété', 'الملكية'),
        paragraphs: [
          t('All site assets in this project are served locally within the Nuxt application.', 'Tous les contenus de ce projet sont servis localement dans l’application Nuxt.', 'يتم تقديم جميع أصول هذا المشروع محلياً داخل تطبيق Nuxt.'),
          t('The brand name Voyah remains unchanged in every locale.', 'Le nom de marque Voyah reste inchangé dans toutes les langues.', 'يبقى اسم العلامة Voyah دون تغيير في جميع اللغات.')
        ]
      },
      {
        title: t('Use of content', 'Utilisation du contenu', 'استخدام المحتوى'),
        paragraphs: [
          t('This implementation is structured as reusable local components and localized content records.', 'Cette implémentation est structurée sous forme de composants locaux réutilisables et de contenus localisés.', 'تمت هيكلة هذا التنفيذ كمكونات محلية قابلة لإعادة الاستخدام وسجلات محتوى مترجمة.')
        ]
      }
    ]
  },
  {
    kind: 'legal',
    slug: 'privacy.html',
    eyebrow: t('Privacy', 'Confidentialité', 'الخصوصية'),
    title: t('Privacy notice', 'Avis de confidentialité', 'إشعار الخصوصية'),
    summary: t('Privacy-oriented notice for this static local site build.', 'Avis relatif à la confidentialité pour cette version locale statique du site.', 'إشعار متعلق بالخصوصية لهذا البناء المحلي الثابت للموقع.'),
    sections: [
      {
        title: t('Static delivery', 'Livraison statique', 'التسليم الثابت'),
        paragraphs: [
          t('This project is generated as static pages without remote runtime content dependencies.', 'Ce projet est généré en pages statiques sans dépendances de contenu distantes au runtime.', 'يتم توليد هذا المشروع كصفحات ثابتة من دون تبعيات محتوى بعيدة أثناء التشغيل.')
        ]
      },
      {
        title: t('Local assets', 'Ressources locales', 'الأصول المحلية'),
        paragraphs: [
          t('Images, videos, fonts, and page content are hosted locally in the project.', 'Les images, vidéos, polices et contenus de page sont hébergés localement dans le projet.', 'تتم استضافة الصور والفيديوهات والخطوط ومحتوى الصفحات محلياً داخل المشروع.')
        ]
      }
    ]
  },
  {
    kind: 'legal',
    slug: 'cookie.html',
    eyebrow: t('Cookies', 'Cookies', 'ملفات تعريف الارتباط'),
    title: t('Cookie notice', 'Avis sur les cookies', 'إشعار ملفات تعريف الارتباط'),
    summary: t('Cookie-related guidance for the local static implementation.', 'Informations relatives aux cookies pour l’implémentation statique locale.', 'إرشادات خاصة بملفات تعريف الارتباط للتنفيذ المحلي الثابت.'),
    sections: [
      {
        title: t('Local experience', 'Expérience locale', 'التجربة المحلية'),
        paragraphs: [
          t('The site is built for local delivery and does not rely on the original remote website.', 'Le site est conçu pour une diffusion locale et ne dépend pas du site distant d’origine.', 'تم بناء الموقع للتقديم المحلي ولا يعتمد على الموقع الأصلي البعيد.')
        ]
      },
      {
        title: t('Client behavior', 'Comportement client', 'سلوك العميل'),
        paragraphs: [
          t('Any browser-level behavior depends on the local app bundle generated by Nuxt.', 'Tout comportement côté navigateur dépend du bundle local généré par Nuxt.', 'يعتمد أي سلوك على مستوى المتصفح على الحزمة المحلية التي يولدها Nuxt.')
        ]
      }
    ]
  },
  {
    kind: 'legal',
    slug: 'authorization.html',
    eyebrow: t('Authorization', 'Autorisation', 'التفويض'),
    title: t('Authorization statement', 'Déclaration d’autorisation', 'بيان التفويض'),
    summary: t('Authorization-oriented statement for use of the local project implementation.', 'Déclaration d’autorisation relative à l’usage de l’implémentation locale du projet.', 'بيان متعلق بالتفويض لاستخدام تنفيذ المشروع المحلي.'),
    sections: [
      {
        title: t('Project scope', 'Périmètre du projet', 'نطاق المشروع'),
        paragraphs: [
          t('The current implementation is a local Nuxt reconstruction using reusable page components and local media.', 'L’implémentation actuelle est une reconstruction Nuxt locale utilisant des composants de page réutilisables et des médias locaux.', 'التنفيذ الحالي عبارة عن إعادة بناء محلية بـ Nuxt باستخدام مكونات صفحات قابلة لإعادة الاستخدام ووسائط محلية.')
        ]
      },
      {
        title: t('Brand handling', 'Gestion de marque', 'التعامل مع العلامة'),
        paragraphs: [
          t('Voyah remains the exact brand name across English, French, and Arabic locales.', 'Voyah reste le nom de marque exact en anglais, français et arabe.', 'تظل Voyah اسم العلامة الدقيق في اللغات الإنجليزية والفرنسية والعربية.')
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
      image: '/website/advertisingbanner/image/05088b2b-9041-4d17-8730-ab52def1319e1770618558478.png',
      video: '/website/advertisingbanner/video/f0c4f930-2c5e-4b18-8212-e73cb76c18b11770618136349.mp4',
      logo: '/voyah-resources/images/car/car_logo/passion-L.png',
      title: t('A new flagship horizon', 'Un nouvel horizon phare', 'أفق جديد للرائدة'),
      description: t('Voyah Passion L leads the lineup with a composed luxury-sedan presence and a more formal executive character.', 'Voyah Passion L ouvre la gamme avec une présence de grande berline de luxe et un caractère exécutif affirmé.', 'تتصدر Voyah Passion L المجموعة بحضور سيدان فاخرة وطابع تنفيذي واضح.'),
      primaryLabel: t('Explore Passion L', 'Découvrir Passion L', 'استكشف Passion L'),
      secondaryLabel: t('Book a test drive', 'Réserver un essai', 'احجز تجربة قيادة'),
      primarySlug: 'passion-L.html',
      secondarySlug: 'book-drive.html'
    },
    {
      image: '/website/advertisingbanner/image/23ab9c33-78a4-4bff-bb69-83fe117820a31770618259885.png',
      video: '/website/advertisingbanner/video/785c4160-8515-46a2-8bc9-a4f7b1907c0c1770618243037.mp4',
      logo: '/voyah-resources/images/car/car_logo/titan.png',
      title: t('SUV authority, refined', 'Autorité SUV, raffinée', 'هيبة SUV مصقولة'),
      description: t('Voyah Titan balances family scale, calm digital luxury, and a more commanding road image.', 'Voyah Titan équilibre gabarit familial, luxe numérique apaisé et image routière plus affirmée.', 'توازن Voyah Titan بين الحجم العائلي والفخامة الرقمية الهادئة والصورة الأقوى على الطريق.'),
      primaryLabel: t('Explore Titan', 'Découvrir Titan', 'استكشف Titan'),
      secondaryLabel: t('Store center', 'Centre de magasins', 'مركز المعارض'),
      primarySlug: 'titan.html',
      secondarySlug: 'store.html'
    },
    {
      image: '/website/advertisingbanner/image/41270475-24cb-4a5e-a4fc-7caad6e403fe1773822300406.png',
      video: '/website/advertisingbanner/video/e33e96dc-3430-4882-946d-62abdf88dc0d1770618522586.mp4',
      logo: '/voyah-resources/images/car/car_logo/free+.png',
      title: t('Athletic luxury in motion', 'Le luxe athlétique en mouvement', 'فخامة رياضية في الحركة'),
      description: t('Voyah FREE+ sharpens the brand’s crossover language with stronger stance and a more focused cockpit.', 'Voyah FREE+ aiguise le langage crossover de la marque avec une posture plus forte et un cockpit plus ciblé.', 'تشحذ Voyah FREE+ لغة الكروس أوفر لدى العلامة بوقفة أقوى ومقصورة أكثر تركيزاً.'),
      primaryLabel: t('Explore FREE+', 'Découvrir FREE+', 'استكشف FREE+'),
      secondaryLabel: t('Energy services', 'Services énergie', 'خدمات الطاقة'),
      primarySlug: 'free+.html',
      secondarySlug: 'energy.html'
    }
  ],
  brandIntro: {
    title: t('Voyah brings a new-energy luxury vision to life', 'Voyah donne vie à une vision du luxe à énergie nouvelle', 'تجسد Voyah رؤية فاخرة للطاقة الجديدة'),
    body: t('From product design to service experience, Voyah connects vehicles, energy, retail, and digital ownership into one local brand ecosystem.', 'Du design produit à l’expérience de service, Voyah relie véhicules, énergie, retail et parcours numérique dans un même écosystème de marque.', 'من تصميم المنتج إلى تجربة الخدمة، تربط Voyah بين المركبات والطاقة والبيع والتجربة الرقمية ضمن منظومة علامة واحدة.'),
    cta: t('Discover the brand', 'Découvrir la marque', 'اكتشف العلامة'),
    image: '/static/assets/world-fec50d02.jpg'
  },
  modelsTitle: t('Explore the Voyah lineup', 'Explorer la gamme Voyah', 'استكشف مجموعة Voyah'),
  modelsBody: t('Sedans, SUVs, and MPVs are presented through a shared premium design language with distinct roles and personalities.', 'Berlines, SUV et monospaces sont présentés à travers un même langage premium, avec des usages et des personnalités distincts.', 'تُعرض السيدانات وSUV وMPV عبر لغة تصميم فاخرة مشتركة مع أدوار وشخصيات مختلفة.'),
  models: [
    { slug: 'passion-L.html', image: '/website/advertisingseries/image/4a4ba784-9bdc-4842-a3cf-22e2b1e46d761770618807747.jpg', title: t('Voyah Passion L', 'Voyah Passion L', 'Voyah Passion L'), category: t('Executive sedan', 'Berline exécutive', 'سيدان تنفيذية'), metrics: [metric('Sedan', 'Body', 'Carrosserie', 'الهيئة'), metric('Luxury', 'Focus', 'Focus', 'التركيز')] },
    { slug: 'titan.html', image: '/website/advertisingseries/image/7ef23102-331e-418d-9139-72a7c77264011770618843718.jpg', title: t('Voyah Titan', 'Voyah Titan', 'Voyah Titan'), category: t('Flagship SUV', 'SUV phare', 'SUV رائدة'), metrics: [metric('SUV', 'Body', 'Carrosserie', 'الهيئة'), metric('Family', 'Focus', 'Focus', 'التركيز')] },
    { slug: 'free+.html', image: '/website/advertisingseries/image/927d6e8d-3182-420f-891e-0f47c492d9141770618945147.jpg', title: t('Voyah FREE+', 'Voyah FREE+', 'Voyah FREE+'), category: t('Performance SUV', 'SUV performance', 'SUV أداء'), metrics: [metric('Crossover', 'Body', 'Carrosserie', 'الهيئة'), metric('Sport', 'Focus', 'Focus', 'التركيز')] },
    { slug: 'newCourage.html', image: '/website/advertisingseries/image/c6a84270-5367-4b46-9bbb-ca363039b20f1770618873239.jpg', title: t('New Voyah Courage', 'Nouveau Voyah Courage', 'Voyah Courage الجديد'), category: t('Urban SUV', 'SUV urbain', 'SUV حضرية'), metrics: [metric('Compact', 'Size', 'Format', 'الحجم'), metric('City', 'Focus', 'Focus', 'التركيز')] },
    { slug: 'newDreamer26.html', image: '/website/advertisingseries/image/e8a95859-ce35-4110-8156-b9f6a9c3365d1770618911247.jpg', title: t('26 Voyah Dreamer', 'Voyah Dreamer 26', 'Voyah Dreamer 26'), category: t('Luxury MPV', 'Monospace de luxe', 'MPV فاخرة'), metrics: [metric('MPV', 'Body', 'Carrosserie', 'الهيئة'), metric('Family', 'Focus', 'Focus', 'التركيز')] }
  ],
  energy: {
    title: t('Voyah Energy', 'Énergie Voyah', 'طاقة Voyah'),
    body: t('Charging access, partner resources, and energy visibility are designed as one integrated service layer for owners.', 'L’accès à la recharge, les ressources partenaires et la visibilité énergétique sont pensés comme une couche de service intégrée pour les propriétaires.', 'تم تصميم الوصول إلى الشحن والموارد الشريكة ووضوح الطاقة كطبقة خدمة متكاملة للمالكين.'),
    label: t('Energy ecosystem', 'Écosystème énergie', 'منظومة الطاقة'),
    image: '/static/assets/energy_bg-4482e81f.jpg',
    metrics: [
      metric('Home charging', 'Scenario', 'Scénario', 'السيناريو'),
      metric('Fast charging', 'Scenario', 'Scénario', 'السيناريو'),
      metric('Digital guidance', 'Layer', 'Couche', 'الطبقة')
    ]
  },
  service: {
    title: t('Service with a premium ownership mindset', 'Un service pensé pour une possession premium', 'خدمة بعقلية ملكية فاخرة'),
    body: t('Support, charging, digital care, and physical service touchpoints are structured as one coherent system.', 'Assistance, recharge, parcours numériques et points de service physiques sont structurés comme un système cohérent.', 'تمت هيكلة الدعم والشحن والرعاية الرقمية ونقاط الخدمة الفعلية كنظام متماسك واحد.'),
    cards: [
      block('/static/assets/section3_2-4fb471c7.jpg', 'Service network', 'Réseau de service', 'شبكة الخدمة', 'Service touchpoints support the full ownership lifecycle.', 'Les points de service accompagnent tout le cycle de possession.', 'تدعم نقاط الخدمة دورة الملكية الكاملة.'),
      block('/static/assets/section3_3-20237755.jpg', 'Digital support', 'Support numérique', 'الدعم الرقمي', 'Appointments and assistance are supported by digital workflows.', 'Les rendez-vous et l’assistance sont soutenus par des parcours numériques.', 'تُدعم المواعيد والمساعدة عبر مسارات رقمية.'),
      block('/static/assets/section4_1-f7cf566b.jpg', 'Care quality', 'Qualité de prise en charge', 'جودة العناية', 'Ownership reassurance is built through clearer support structures.', 'La sérénité de possession repose sur des structures d’assistance plus claires.', 'تُبنى طمأنينة الملكية عبر هياكل دعم أكثر وضوحاً.'),
      block('/static/assets/section4_2-aa55795b.jpg', 'User operations', 'Opérations utilisateurs', 'عمليات المستخدم', 'Brand operations stay connected to user-facing service moments.', 'Les opérations de marque restent liées aux moments de service vécus par l’utilisateur.', 'تبقى عمليات العلامة مرتبطة بلحظات الخدمة التي يعيشها المستخدم.')
    ]
  },
  footprint: {
    title: t('A broader global footprint', 'Une empreinte mondiale élargie', 'بصمة عالمية أوسع'),
    body: t('Voyah’s visual narrative extends from domestic leadership toward wider international recognition and service reach.', 'Le récit visuel de Voyah s’étend d’un ancrage domestique fort vers une reconnaissance et un réseau de service plus internationaux.', 'يمتد السرد البصري لـ Voyah من حضور محلي قوي إلى اعتراف أوسع وخدمة أكثر انتشاراً دولياً.'),
    cta: t('Read the brand story', 'Lire l’histoire de la marque', 'اقرأ قصة العلامة'),
    image: '/static/assets/earth_index-e4c6ae99.jpg',
    tabs: [
      { label: t('Asia', 'Asie', 'آسيا'), countries: [t('China', 'Chine', 'الصين'), t('Middle East', 'Moyen-Orient', 'الشرق الأوسط'), t('Southeast Asia', 'Asie du Sud-Est', 'جنوب شرق آسيا')] },
      { label: t('Europe', 'Europe', 'أوروبا'), countries: [t('Norway', 'Norvège', 'النرويج'), t('Finland', 'Finlande', 'فنلندا'), t('Netherlands', 'Pays-Bas', 'هولندا')] },
      { label: t('Africa', 'Afrique', 'أفريقيا'), countries: [t('North Africa', 'Afrique du Nord', 'شمال أفريقيا'), t('Service pilots', 'Pilotes service', 'برامج خدمة تجريبية'), t('Regional cooperation', 'Coopération régionale', 'تعاون إقليمي')] }
    ]
  }
}

export const footerColumns: FooterColumn[] = [
  {
    title: t('Models', 'Modèles', 'الطرازات'),
    links: [
      { label: t('Voyah Passion L', 'Voyah Passion L', 'Voyah Passion L'), slug: 'passion-L.html' },
      { label: t('Voyah Titan', 'Voyah Titan', 'Voyah Titan'), slug: 'titan.html' },
      { label: t('Voyah FREE+', 'Voyah FREE+', 'Voyah FREE+'), slug: 'free+.html' },
      { label: t('26 Voyah Dreamer', 'Voyah Dreamer 26', 'Voyah Dreamer 26'), slug: 'newDreamer26.html' }
    ]
  },
  {
    title: t('Services', 'Services', 'الخدمات'),
    links: [
      { label: t('Store center', 'Centre de magasins', 'مركز المعارض'), slug: 'store.html' },
      { label: t('Voyah Service', 'Service Voyah', 'خدمات Voyah'), slug: 'service.html' },
      { label: t('Voyah Energy', 'Énergie Voyah', 'طاقة Voyah'), slug: 'energy.html' },
      { label: t('Downloads', 'Téléchargements', 'التنزيلات'), slug: 'document.html' }
    ]
  },
  {
    title: t('About', 'À propos', 'عن'),
    links: [
      { label: t('Brand', 'Marque', 'العلامة'), slug: 'brand.html' },
      { label: t('Corporate', 'Entreprise', 'المؤسسة'), slug: 'corporate.html' },
      { label: t('Join Us', 'Rejoignez-nous', 'انضم إلينا'), slug: 'joinus.html' },
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
  title: t('Stay connected with Voyah', 'Restez connecté à Voyah', 'ابقَ على تواصل مع Voyah'),
  body: t('Scan the local app and mini-program codes to continue the experience through digital channels.', 'Scannez les codes de l’application et du mini-programme pour prolonger l’expérience via les canaux numériques.', 'امسح رموز التطبيق والبرنامج المصغر لمتابعة التجربة عبر القنوات الرقمية.'),
  appCode: '/static/assets/app_code_160-5b2a34cc.png',
  miniProgramCode: '/static/assets/xcx_code_160-73cf3be6.png'
}

export const localize = (text: LocalizedText, locale: LocaleCode): string => text[locale] ?? text.en

export const findLocale = (code?: string) => locales.find((locale) => locale.code === code)

export const resolvePage = (slug?: string): SitePage | undefined => (slug ? sitePageMap.get(slug) : undefined)
