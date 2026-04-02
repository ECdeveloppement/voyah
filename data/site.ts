export const locales = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'fr', name: 'FranÃ§ais', dir: 'ltr' },
  { code: 'ar', name: 'Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©', dir: 'rtl' }
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
  t('Exterior expression', 'Expression extÃ©rieure', 'Ø§Ù„Ù‡ÙˆÙŠØ© Ø§Ù„Ø®Ø§Ø±Ø¬ÙŠØ©'),
  t('Immersive cabin', 'Habitacle immersif', 'Ù…Ù‚ØµÙˆØ±Ø© ØºØ§Ù…Ø±Ø©'),
  t('Intelligent travel', 'Voyage intelligent', 'ØªÙ†Ù‚Ù„ Ø°ÙƒÙŠ')
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
          t('Ceremonial exterior', 'ExtÃ©rieur cÃ©rÃ©moniel', 'Ø®Ø§Ø±Ø¬ÙŠØ© Ø¨Ø·Ø§Ø¨Ø¹ Ø§Ø­ØªÙØ§Ù„ÙŠ'),
          t('Lounge-like cabin', 'Habitacle esprit salon', 'Ù…Ù‚ØµÙˆØ±Ø© Ø¨Ø·Ø§Ø¨Ø¹ Ø§Ù„ØµØ§Ù„ÙˆÙ†'),
          t('Long-distance hospitality', 'HospitalitÃ© grand trajet', 'Ø¶ÙŠØ§ÙØ© Ù…Ø«Ø§Ù„ÙŠØ© Ù„Ù„Ø±Ø­Ù„Ø§Øª Ø§Ù„Ø·ÙˆÙŠÙ„Ø©')
        ]
      : isSedan
        ? [
            t('Flagship exterior proportion', 'Proportions extÃ©rieures de prestige', 'ØªÙ†Ø§Ø³Ø¨Ø§Øª Ø®Ø§Ø±Ø¬ÙŠØ© Ø±Ø§Ø¦Ø¯Ø©'),
            t('Executive digital cabin', 'Habitacle numÃ©rique exÃ©cutif', 'Ù…Ù‚ØµÙˆØ±Ø© Ø±Ù‚Ù…ÙŠØ© ØªÙ†ÙÙŠØ°ÙŠØ©'),
            t('Composed intelligent travel', 'Voyage intelligent et serein', 'Ø³ÙØ± Ø°ÙƒÙŠ ÙˆÙˆØ§Ø«Ù‚')
          ]
        : [
            t('Commanding exterior stance', 'Prestance extÃ©rieure affirmÃ©e', 'Ø­Ø¶ÙˆØ± Ø®Ø§Ø±Ø¬ÙŠ Ù‚ÙˆÙŠ'),
            t('Spacious intelligent cabin', 'Habitacle intelligent et spacieux', 'Ù…Ù‚ØµÙˆØ±Ø© Ø°ÙƒÙŠØ© ÙˆØ±Ø­Ø¨Ø©'),
            t('All-scenario confidence', 'SÃ©rÃ©nitÃ© tous usages', 'Ø«Ù‚Ø© ÙÙŠ ÙƒÙ„ Ø§Ù„Ø³ÙŠÙ†Ø§Ø±ÙŠÙˆÙ‡Ø§Øª')
          ]

    const bodies = [
      options.description,
      options.subtitle,
      t(
        `Centered on ${options.price.en.toLowerCase()}, this page highlights the premium design, digital experience, and composed road character of ${options.title.en}.`,
        `CentrÃ©e sur ${options.price.fr.toLowerCase()}, cette page met en avant le design premium, l'expÃ©rience numÃ©rique et le caractÃ¨re routier maÃ®trisÃ© de ${options.title.fr}.`,
        `ØªÙØ¨Ø±Ø² Ù‡Ø°Ù‡ Ø§Ù„ØµÙØ­Ø©ØŒ Ø§Ù†Ø·Ù„Ø§Ù‚Ø§Ù‹ Ù…Ù† ${options.price.ar}ØŒ Ø§Ù„ØªØµÙ…ÙŠÙ… Ø§Ù„ÙØ§Ø®Ø± ÙˆØ§Ù„ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ø±Ù‚Ù…ÙŠØ© ÙˆØ§Ù„Ø­Ø¶ÙˆØ± Ø§Ù„ÙˆØ§Ø«Ù‚ Ù„Ø·Ø±Ø§Ø² ${options.title.ar}.`
      )
    ]

    return {
      image,
      title: titles[index] ?? modelFeatureTitles[2],
      body: bodies[index] ?? bodies[2]
    }
  }),
  ctaPrimary: t('Book a test drive', 'RÃ©server un essai', 'Ø§Ø­Ø¬Ø² ØªØ¬Ø±Ø¨Ø© Ù‚ÙŠØ§Ø¯Ø©'),
  ctaSecondary: t('Store center', 'Centre de magasins', 'Ù…Ø±ÙƒØ² Ø§Ù„Ù…Ø¹Ø§Ø±Ø¶'),
  secondarySlug: 'store.html'
})

export const navigation: NavItem[] = [
  { label: t('Voyah Brand', 'Marque Voyah', 'Ø¹Ù„Ø§Ù…Ø© Voyah'), slug: 'brand.html' },
  {
    label: t('Models', 'ModÃ¨les', 'Ø§Ù„Ø·Ø±Ø§Ø²Ø§Øª'),
    children: [
      { label: t('Voyah Passion L', 'Voyah Passion L', 'Voyah Passion L'), slug: 'passion-L.html', thumb: '/voyah-resources/images/car/car_logo/passion-L.png' },
      { label: t('Voyah Passion', 'Voyah Passion', 'Voyah Passion'), slug: 'passion.html', thumb: '/voyah-resources/images/car/car_logo/passion.png' },
      { label: t('Voyah Titan', 'Voyah Titan', 'Voyah Titan'), slug: 'titan.html', thumb: '/voyah-resources/images/car/car_logo/titan.png' },
      { label: t('Voyah Titan Black Edition', 'Voyah Titan Black Edition', 'Voyah Titan Black Edition'), slug: 'titan_blackedition.html', thumb: '/voyah-resources/images/car/car_logo/titan_blackedition.png' },
      { label: t('Voyah Titan X8', 'Voyah Titan X8', 'Voyah Titan X8'), slug: 'titan_X8.html', thumb: '/voyah-resources/images/car/car_logo/titan_X8.png' },
      { label: t('Voyah FREE+', 'Voyah FREE+', 'Voyah FREE+'), slug: 'free+.html', thumb: '/voyah-resources/images/car/car_logo/free+.png' },
      { label: t('Voyah FREE 318', 'Voyah FREE 318', 'Voyah FREE 318'), slug: 'free.html', thumb: '/voyah-resources/images/car/car_logo/free.png' },
      { label: t('New Voyah Courage', 'Nouveau Voyah Courage', 'Voyah Courage Ø§Ù„Ø¬Ø¯ÙŠØ¯'), slug: 'newCourage.html', thumb: '/voyah-resources/images/car/car_logo/newCourage.png' },
      { label: t('Voyah Courage', 'Voyah Courage', 'Voyah Courage'), slug: 'courage.html', thumb: '/voyah-resources/images/car/car_logo/courage.png' },
      { label: t('26 Voyah Dreamer', 'Voyah Dreamer 26', 'Voyah Dreamer 26'), slug: 'newDreamer26.html', thumb: '/voyah-resources/images/car/car_logo/newDreamer26.png' },
      { label: t('25 Voyah Dreamer', 'Voyah Dreamer 25', 'Voyah Dreamer 25'), slug: 'newDreamer.html', thumb: '/voyah-resources/images/car/car_logo/newDreamer.png' },
      { label: t('Voyah Dreamer Mountain River', 'Voyah Dreamer Montagne-RiviÃ¨re', 'Voyah Dreamer Mountain River'), slug: 'dreamriver.html', thumb: '/voyah-resources/images/car/car_logo/dreamriver.png' },
      { label: t('24 Voyah Dreamer', 'Voyah Dreamer 24', 'Voyah Dreamer 24'), slug: 'dreamer.html', thumb: '/voyah-resources/images/car/car_logo/dreamer.png' }
    ]
  },
  { label: t('Store Center', 'Centre de magasins', 'Ù…Ø±ÙƒØ² Ø§Ù„Ù…Ø¹Ø§Ø±Ø¶'), slug: 'store.html' },
  {
    label: t('Voyah Service', 'Service Voyah', 'Ø®Ø¯Ù…Ø§Øª Voyah'),
    children: [
      { label: t('User Service', 'Service client', 'Ø®Ø¯Ù…Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…'), slug: 'service.html' },
      { label: t('Voyah Energy', 'Ã‰nergie Voyah', 'Ø·Ø§Ù‚Ø© Voyah'), slug: 'energy.html' },
      { label: t('Procurement', 'Achats', 'Ø§Ù„Ù…Ø´ØªØ±ÙŠØ§Øª'), slug: 'purchasing.html' },
      { label: t('Environmental Disclosure', 'Informations environnementales', 'Ø§Ù„Ø¥ÙØµØ§Ø­ Ø§Ù„Ø¨ÙŠØ¦ÙŠ'), slug: 'environmental.html' },
      { label: t('Document Download', 'TÃ©lÃ©chargements', 'ØªÙ†Ø²ÙŠÙ„ Ø§Ù„Ù…Ø³ØªÙ†Ø¯Ø§Øª'), slug: 'document.html' }
    ]
  },
  {
    label: t('About Voyah', 'Ã€ propos de Voyah', 'Ø¹Ù† Voyah'),
    children: [
      { label: t('Corporate Culture', 'Culture dâ€™entreprise', 'Ø§Ù„Ø«Ù‚Ø§ÙØ© Ø§Ù„Ù…Ø¤Ø³Ø³ÙŠØ©'), slug: 'corporate.html' },
      { label: t('Join Us', 'Rejoignez-nous', 'Ø§Ù†Ø¶Ù… Ø¥Ù„ÙŠÙ†Ø§'), slug: 'joinus.html' },
      { label: t('Partner Recruitment', 'Recrutement de partenaires', 'Ø§Ø³ØªÙ‚Ø·Ø§Ø¨ Ø§Ù„Ø´Ø±ÙƒØ§Ø¡'), slug: 'recruit-partners.html' },
      { label: t('Investor Relations', 'Relations investisseurs', 'Ø¹Ù„Ø§Ù‚Ø§Øª Ø§Ù„Ù…Ø³ØªØ«Ù…Ø±ÙŠÙ†'), slug: 'ir.html' }
    ]
  }
]

const models: ModelDefinition[] = [
  makeModel({
    slug: 'passion-L.html',
    title: t('Voyah Passion L', 'Voyah Passion L', 'Voyah Passion L'),
    subtitle: t('Executive electric flagship sedan', 'Berline Ã©lectrique exÃ©cutive', 'Ø³ÙŠØ¯Ø§Ù† ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© ØªÙ†ÙÙŠØ°ÙŠØ©'),
    description: t('A long-wheelbase luxury sedan shaped around calm authority, digital refinement, and first-class rear comfort.', 'Une berline de luxe Ã  empattement long conÃ§ue pour offrir prestance, raffinement numÃ©rique et confort arriÃ¨re de premiÃ¨re classe.', 'Ø³ÙŠØ¯Ø§Ù† ÙØ§Ø®Ø±Ø© Ø¨Ù‚Ø§Ø¹Ø¯Ø© Ø¹Ø¬Ù„Ø§Øª Ø·ÙˆÙŠÙ„Ø© ØªØ¬Ù…Ø¹ Ø¨ÙŠÙ† Ø§Ù„Ø­Ø¶ÙˆØ± Ø§Ù„Ø±Ø§Ù‚ÙŠ ÙˆØ§Ù„ÙˆØ§Ø¬Ù‡Ø© Ø§Ù„Ø±Ù‚Ù…ÙŠØ© Ø§Ù„Ù…ØªÙ…ÙŠØ²Ø© ÙˆØ±Ø§Ø­Ø© Ø§Ù„ØµÙ Ø§Ù„Ø®Ù„ÙÙŠ.'),
    price: t('Flagship sedan', 'Berline phare', 'Ø§Ù„Ø³ÙŠØ¯Ø§Ù† Ø§Ù„Ø±Ø§Ø¦Ø¯Ø©'),
    heroImage: '/voyah-resources/images/car/passion-L/1920/sc_1.jpg',
    logo: '/voyah-resources/images/car/car_logo/passion-L.png',
    gallery: [
      '/voyah-resources/images/car/passion-L/1920/sc_10.jpg',
      '/voyah-resources/images/car/passion-L/1920/sc_24.jpg',
      '/voyah-resources/images/car/passion-L/1920/sc_39.jpg'
    ],
    metrics: [
      metric('Luxury sedan', 'Positioning', 'Positionnement', 'Ø§Ù„ÙØ¦Ø©'),
      metric('Rear lounge', 'Rear experience', 'ExpÃ©rience arriÃ¨re', 'ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù…Ù‚Ø§Ø¹Ø¯ Ø§Ù„Ø®Ù„ÙÙŠØ©'),
      metric('Smart cockpit', 'Digital cabin', 'Habitacle numÃ©rique', 'Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø© Ø§Ù„Ø±Ù‚Ù…ÙŠØ©')
    ]
  }),
  makeModel({
    slug: 'passion.html',
    title: t('Voyah Passion', 'Voyah Passion', 'Voyah Passion'),
    subtitle: t('Performance electric sedan', 'Berline Ã©lectrique performante', 'Ø³ÙŠØ¯Ø§Ù† ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© Ø¹Ø§Ù„ÙŠØ© Ø§Ù„Ø£Ø¯Ø§Ø¡'),
    description: t('A sleek electric sedan pairing decisive proportions with a quiet cabin and high-speed touring character.', 'Une berline Ã©lectrique Ã©lancÃ©e qui associe des proportions affirmÃ©es Ã  un habitacle silencieux et un tempÃ©rament grand tourisme.', 'Ø³ÙŠØ¯Ø§Ù† ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© Ø£Ù†ÙŠÙ‚Ø© ØªØ¬Ù…Ø¹ Ø¨ÙŠÙ† Ø§Ù„ØªÙ†Ø§Ø³Ù‚ Ø§Ù„Ø¬Ø±ÙŠØ¡ ÙˆØ§Ù„Ù…Ù‚ØµÙˆØ±Ø© Ø§Ù„Ù‡Ø§Ø¯Ø¦Ø© ÙˆØ±ÙˆØ­ Ø§Ù„Ø³ÙØ± Ø§Ù„Ø³Ø±ÙŠØ¹.'),
    price: t('Performance sedan', 'Berline performante', 'Ø³ÙŠØ¯Ø§Ù† Ø£Ø¯Ø§Ø¡'),
    heroImage: '/voyah-resources/images/car/passion/1920/fl01.jpg',
    logo: '/voyah-resources/images/car/car_logo/passion.png',
    gallery: [
      '/voyah-resources/images/car/passion/1920/fl04.jpg',
      '/voyah-resources/images/car/passion/1920/fl11.jpg',
      '/voyah-resources/images/car/passion/1920/fl21.jpg'
    ],
    metrics: [
      metric('Grand tourer', 'Character', 'CaractÃ¨re', 'Ø§Ù„Ø·Ø§Ø¨Ø¹'),
      metric('Refined ride', 'Chassis tuning', 'Mise au point chÃ¢ssis', 'Ù…Ø¹Ø§ÙŠØ±Ø© Ø§Ù„Ù‡ÙŠÙƒÙ„'),
      metric('Digital luxury', 'Cabin feel', 'Ambiance intÃ©rieure', 'Ø£Ø¬ÙˆØ§Ø¡ Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø©')
    ]
  }),
  makeModel({
    slug: 'titan.html',
    title: t('Voyah Titan', 'Voyah Titan', 'Voyah Titan'),
    subtitle: t('Full-size intelligent SUV', 'SUV intelligent grand format', 'Ø³ÙŠØ§Ø±Ø© SUV Ø°ÙƒÙŠØ© ÙƒØ¨ÙŠØ±Ø© Ø§Ù„Ø­Ø¬Ù…'),
    description: t('A large SUV built around commanding stance, confident family space, and composed all-road capability.', 'Un grand SUV conÃ§u autour dâ€™une prestance affirmÃ©e, dâ€™un espace familial gÃ©nÃ©reux et dâ€™une aisance sereine sur tous types de routes.', 'Ø³ÙŠØ§Ø±Ø© SUV ÙƒØ¨ÙŠØ±Ø© ØªØ¬Ù…Ø¹ Ø¨ÙŠÙ† Ø§Ù„Ø­Ø¶ÙˆØ± Ø§Ù„Ù‚ÙˆÙŠ ÙˆØ§Ù„Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ø¹Ø§Ø¦Ù„ÙŠØ© Ø§Ù„Ø±Ø­Ø¨Ø© ÙˆØ§Ù„Ø«Ø¨Ø§Øª Ø¹Ù„Ù‰ Ù…Ø®ØªÙ„Ù Ø§Ù„Ø·Ø±Ù‚.'),
    price: t('Large SUV flagship', 'SUV phare grand format', 'SUV Ø±Ø§Ø¦Ø¯Ø© ÙƒØ¨ÙŠØ±Ø©'),
    heroImage: '/voyah-resources/images/car/titan/1920/sc_1.jpg',
    logo: '/voyah-resources/images/car/car_logo/titan.png',
    gallery: [
      '/voyah-resources/images/car/titan/1920/sc_18.jpg',
      '/voyah-resources/images/car/titan/1920/sc_22.jpg',
      '/voyah-resources/images/car/titan/1920/sc_30.jpg'
    ],
    metrics: [
      metric('Family flagship', 'Vehicle role', 'RÃ´le du vÃ©hicule', 'Ø¯ÙˆØ± Ø§Ù„Ø³ÙŠØ§Ø±Ø©'),
      metric('Flexible cabin', 'Interior package', 'ModularitÃ© intÃ©rieure', 'Ù…Ø±ÙˆÙ†Ø© Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø©'),
      metric('Confident traction', 'Road confidence', 'Confiance routiÃ¨re', 'Ø§Ù„Ø«Ø¨Ø§Øª Ø¹Ù„Ù‰ Ø§Ù„Ø·Ø±ÙŠÙ‚')
    ]
  }),
  makeModel({
    slug: 'titan_blackedition.html',
    title: t('Voyah Titan Black Edition', 'Voyah Titan Black Edition', 'Voyah Titan Black Edition'),
    subtitle: t('Stealth-focused luxury SUV', 'SUV de luxe au style noir', 'SUV ÙØ§Ø®Ø±Ø© Ø¨Ø·Ø§Ø¨Ø¹ Ø£Ø³ÙˆØ¯'),
    description: t('A darker, sharper interpretation of the Titan formula with bold finishes and a more dramatic visual tone.', 'Une interprÃ©tation plus sombre et plus tranchante de la Titan, avec des finitions audacieuses et un langage visuel plus dramatique.', 'Ù†Ø³Ø®Ø© Ø£ÙƒØ«Ø± Ø¬Ø±Ø£Ø© Ù…Ù† Titan Ø¨ØªØ´Ø·ÙŠØ¨Ø§Øª Ø¯Ø§ÙƒÙ†Ø© ÙˆØ­Ø¶ÙˆØ± Ø¨ØµØ±ÙŠ Ø£ÙƒØ«Ø± Ø­Ø¯Ø©.'),
    price: t('Black Edition', 'Black Edition', 'Black Edition'),
    heroImage: '/voyah-resources/images/car/titan_blackedition/1920/sc_1.jpg',
    logo: '/voyah-resources/images/car/car_logo/titan_blackedition.png',
    gallery: [
      '/voyah-resources/images/car/titan_blackedition/1920/sc_10_1.jpg',
      '/voyah-resources/images/car/titan_blackedition/1920/sc_17.jpg',
      '/voyah-resources/images/car/titan_blackedition/1920/sc_18_1.jpg'
    ],
    metrics: [
      metric('Dark styling', 'Design theme', 'ThÃ¨me design', 'Ù†Ø³Ù‚ Ø§Ù„ØªØµÙ…ÙŠÙ…'),
      metric('Premium trim', 'Material tone', 'Finition premium', 'Ø§Ù„Ø®Ø§Ù…Ø§Øª Ø§Ù„ÙØ§Ø®Ø±Ø©'),
      metric('SUV command', 'Presence', 'Prestance', 'Ø§Ù„Ø­Ø¶ÙˆØ±')
    ]
  }),
  makeModel({
    slug: 'titan_X8.html',
    title: t('Voyah Titan X8', 'Voyah Titan X8', 'Voyah Titan X8'),
    subtitle: t('Expanded family utility', 'Polyvalence familiale Ã©tendue', 'Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø¹Ø§Ø¦Ù„ÙŠ Ù…ÙˆØ³Ø¹'),
    description: t('A Titan derivative tuned for generous multi-row practicality and long-range family confidence.', 'Une dÃ©clinaison de Titan pensÃ©e pour une praticitÃ© multirang gÃ©nÃ©reuse et des voyages familiaux sereins.', 'Ù†Ø³Ø®Ø© Ù…Ù† Titan Ù…Ù‡ÙŠØ£Ø© Ù„Ø¹Ù…Ù„ÙŠØ© Ø£ÙƒØ¨Ø± Ø¹Ø¨Ø± Ø§Ù„ØµÙÙˆÙ Ø§Ù„Ù…ØªØ¹Ø¯Ø¯Ø© ÙˆØ«Ù‚Ø© Ø£ÙƒØ¨Ø± ÙÙŠ Ø§Ù„Ø±Ø­Ù„Ø§Øª Ø§Ù„Ø¹Ø§Ø¦Ù„ÙŠØ©.'),
    price: t('Eight-seat family focus', 'Orientation familiale', 'ØªØ±ÙƒÙŠØ² Ø¹Ø§Ø¦Ù„ÙŠ'),
    heroImage: '/voyah-resources/images/car/titan_X8/1920/sc_1.jpg',
    logo: '/voyah-resources/images/car/car_logo/titan_X8.png',
    gallery: ['/voyah-resources/images/car/titan_X8/1920/sc_1.jpg'],
    metrics: [
      metric('Expanded seating', 'Space plan', 'Plan dâ€™espace', 'ØªØ®Ø·ÙŠØ· Ø§Ù„Ù…Ø³Ø§Ø­Ø©'),
      metric('Travel ready', 'Use case', 'Usage', 'Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù…'),
      metric('SUV comfort', 'Comfort focus', 'Confort', 'Ø§Ù„Ø±Ø§Ø­Ø©')
    ]
  }),
  makeModel({
    slug: 'free+.html',
    title: t('Voyah FREE+', 'Voyah FREE+', 'Voyah FREE+'),
    subtitle: t('Premium performance SUV', 'SUV premium haute performance', 'SUV ÙØ§Ø®Ø±Ø© Ø¹Ø§Ù„ÙŠØ© Ø§Ù„Ø£Ø¯Ø§Ø¡'),
    description: t('A sharply sculpted SUV with athletic stance, expressive lighting, and a focused digital cockpit.', 'Un SUV sculptÃ© avec prÃ©cision, dotÃ© dâ€™une posture athlÃ©tique, dâ€™une signature lumineuse expressive et dâ€™un cockpit numÃ©rique centrÃ© sur le conducteur.', 'Ø³ÙŠØ§Ø±Ø© SUV Ù…Ù†Ø­ÙˆØªØ© Ø¨Ø¯Ù‚Ø© ØªØ¬Ù…Ø¹ Ø¨ÙŠÙ† Ø§Ù„ÙˆÙ‚ÙØ© Ø§Ù„Ø±ÙŠØ§Ø¶ÙŠØ© ÙˆØ§Ù„Ø¥Ø¶Ø§Ø¡Ø© Ø§Ù„ØªØ¹Ø¨ÙŠØ±ÙŠØ© ÙˆØ§Ù„Ù…Ù‚ØµÙˆØ±Ø© Ø§Ù„Ø±Ù‚Ù…ÙŠØ© Ø§Ù„Ù…Ø±ÙƒØ²Ø© Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¦Ù‚.'),
    price: t('Performance SUV', 'SUV performance', 'SUV Ø£Ø¯Ø§Ø¡'),
    heroImage: '/voyah-resources/images/car/free+/kv_1920.png',
    logo: '/voyah-resources/images/car/car_logo/free+.png',
    gallery: [
      '/voyah-resources/images/car/free+/img_03_1920.png',
      '/voyah-resources/images/car/free+/img_25_1920.png',
      '/voyah-resources/images/car/free+/img_42_1920.png'
    ],
    metrics: [
      metric('Athletic stance', 'Design', 'Design', 'Ø§Ù„ØªØµÙ…ÙŠÙ…'),
      metric('Connected cockpit', 'Cabin', 'Habitacle', 'Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø©'),
      metric('Daily versatility', 'Use case', 'Usage', 'Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù…')
    ]
  }),
  makeModel({
    slug: 'free.html',
    title: t('Voyah FREE 318', 'Voyah FREE 318', 'Voyah FREE 318'),
    subtitle: t('Long-range crossover expression', 'Expression crossover longue autonomie', 'ÙƒØ±ÙˆØ³ Ø£ÙˆÙØ± Ø¨Ù…Ø¯Ù‰ Ø·ÙˆÙŠÙ„'),
    description: t('A crossover package balancing touring composure, elevated seating, and everyday premium usability.', 'Un crossover qui Ã©quilibre sÃ©rÃ©nitÃ© sur long trajet, position de conduite surÃ©levÃ©e et usage premium au quotidien.', 'Ø­Ø²Ù…Ø© ÙƒØ±ÙˆØ³ Ø£ÙˆÙØ± ØªÙˆØ§Ø²Ù† Ø¨ÙŠÙ† Ø§Ù„Ø±Ø§Ø­Ø© ÙÙŠ Ø§Ù„Ø³ÙØ± ÙˆØ§Ù„Ø¬Ù„ÙˆØ³ Ø§Ù„Ù…Ø±ØªÙØ¹ ÙˆØ§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„ÙØ§Ø®Ø± Ø§Ù„ÙŠÙˆÙ…ÙŠ.'),
    price: t('Long-range crossover', 'Crossover longue autonomie', 'ÙƒØ±ÙˆØ³ Ø£ÙˆÙØ± Ø¨Ù…Ø¯Ù‰ Ø·ÙˆÙŠÙ„'),
    heroImage: '/voyah-resources/images/car/free/bg-free-h97D-1.jpg',
    logo: '/voyah-resources/images/car/car_logo/free.png',
    gallery: [
      '/voyah-resources/images/car/free/bg-free-h97D-5.jpg',
      '/voyah-resources/images/car/free/bg-free-h97D-9.jpg',
      '/voyah-resources/images/car/free/bg-free-h97D-12.jpg'
    ],
    metrics: [
      metric('Travel comfort', 'Long-route feel', 'Confort longue route', 'Ø±Ø§Ø­Ø© Ø§Ù„Ø³ÙØ±'),
      metric('Elevated seating', 'Driving position', 'Position de conduite', 'ÙˆØ¶Ø¹ÙŠØ© Ø§Ù„Ù‚ÙŠØ§Ø¯Ø©'),
      metric('Practical luxury', 'Daily use', 'Usage quotidien', 'Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„ÙŠÙˆÙ…ÙŠ')
    ]
  }),
  makeModel({
    slug: 'newCourage.html',
    title: t('New Voyah Courage', 'Nouveau Voyah Courage', 'Voyah Courage Ø§Ù„Ø¬Ø¯ÙŠØ¯'),
    subtitle: t('Urban electric SUV upgrade', 'SUV Ã©lectrique urbain revisitÃ©', 'ØªØ­Ø¯ÙŠØ« SUV ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© Ø­Ø¶Ø±ÙŠØ©'),
    description: t('An updated Courage with sharper surfaces, clean proportions, and a stronger digital-first interior theme.', 'Une Courage renouvelÃ©e, avec des surfaces plus tendues, des proportions nettes et une ambiance intÃ©rieure davantage centrÃ©e sur le numÃ©rique.', 'Ù†Ø³Ø®Ø© Ù…Ø­Ø¯Ø«Ø© Ù…Ù† Courage Ø¨ØªÙØ§ØµÙŠÙ„ Ø£ÙƒØ«Ø± Ø­Ø¯Ø© ÙˆØªÙ†Ø§Ø³Ù‚ Ø£Ù†Ø¸Ù ÙˆÙ…Ù‚ØµÙˆØ±Ø© Ø±Ù‚Ù…ÙŠØ© Ø£ÙƒØ«Ø± ÙˆØ¶ÙˆØ­Ø§Ù‹.'),
    price: t('Urban premium SUV', 'SUV urbain premium', 'SUV Ø­Ø¶Ø±ÙŠØ© ÙØ§Ø®Ø±Ø©'),
    heroImage: '/voyah-resources/images/car/newCourage/1920/sc_1.jpg',
    logo: '/voyah-resources/images/car/car_logo/newCourage.png',
    gallery: [
      '/voyah-resources/images/car/newCourage/1920/sc_10.jpg',
      '/voyah-resources/images/car/newCourage/1920/sc_12.jpg',
      '/voyah-resources/images/car/newCourage/1920/sc_18.jpg'
    ],
    metrics: [
      metric('City focused', 'Context', 'Contexte', 'Ø§Ù„Ø³ÙŠØ§Ù‚'),
      metric('Sharper form', 'Styling', 'Style', 'Ø§Ù„Ø£Ø³Ù„ÙˆØ¨'),
      metric('Connected comfort', 'Interior theme', 'Ambiance intÃ©rieure', 'Ø·Ø§Ø¨Ø¹ Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø©')
    ]
  }),
  makeModel({
    slug: 'courage.html',
    title: t('Voyah Courage', 'Voyah Courage', 'Voyah Courage'),
    subtitle: t('Compact premium electric SUV', 'SUV Ã©lectrique premium compact', 'SUV ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© ÙØ§Ø®Ø±Ø© Ù…Ø¯Ù…Ø¬Ø©'),
    description: t('A compact premium SUV shaped for agile urban use while preserving Voyah refinement and visual confidence.', 'Un SUV premium compact pensÃ© pour lâ€™agilitÃ© urbaine sans sacrifier le raffinement Voyah ni sa prÃ©sence visuelle.', 'Ø³ÙŠØ§Ø±Ø© SUV ÙØ§Ø®Ø±Ø© Ù…Ø¯Ù…Ø¬Ø© Ù…ÙˆØ¬Ù‡Ø© Ù„Ù„Ù…Ø¯ÙŠÙ†Ø© Ù…Ø¹ Ø§Ù„Ø­ÙØ§Ø¸ Ø¹Ù„Ù‰ Ø±Ù‚ÙŠ Voyah ÙˆØ­Ø¶ÙˆØ±Ù‡Ø§ Ø§Ù„ÙˆØ§Ø«Ù‚.'),
    price: t('Compact electric SUV', 'SUV Ã©lectrique compact', 'SUV ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© Ù…Ø¯Ù…Ø¬Ø©'),
    heroImage: '/voyah-resources/images/car/courage/1920/h37_pc01_0001.jpg',
    logo: '/voyah-resources/images/car/car_logo/courage.png',
    gallery: [
      '/voyah-resources/images/car/courage/1920/h37_pc03_0001.jpg',
      '/voyah-resources/images/car/courage/1920/h37_pc04_0001.jpg',
      '/voyah-resources/images/car/courage/1920/h37_pc06_0001.jpg'
    ],
    metrics: [
      metric('Compact footprint', 'Vehicle size', 'Gabarit', 'Ø§Ù„Ø­Ø¬Ù…'),
      metric('Urban agility', 'Driving use', 'Usage de conduite', 'Ø·Ø¨ÙŠØ¹Ø© Ø§Ù„Ù‚ÙŠØ§Ø¯Ø©'),
      metric('Premium detail', 'Finish', 'Finition', 'Ø§Ù„ØªØ´Ø·ÙŠØ¨')
    ]
  }),
  makeModel({
    slug: 'newDreamer26.html',
    title: t('26 Voyah Dreamer', 'Voyah Dreamer 26', 'Voyah Dreamer 26'),
    subtitle: t('Luxury family MPV flagship', 'Monospace familial de luxe', 'MPV Ø¹Ø§Ø¦Ù„ÙŠØ© ÙØ§Ø®Ø±Ø©'),
    description: t('A new-generation Dreamer with lounge-like comfort, refined long-distance composure, and premium family focus.', 'Une nouvelle gÃ©nÃ©ration Dreamer avec un confort de salon, une grande sÃ©rÃ©nitÃ© sur longue distance et une vocation familiale premium.', 'Ø§Ù„Ø¬ÙŠÙ„ Ø§Ù„Ø¬Ø¯ÙŠØ¯ Ù…Ù† Dreamer ÙŠÙˆÙØ± Ø±Ø§Ø­Ø© Ø´Ø¨ÙŠÙ‡Ø© Ø¨Ø§Ù„ØµØ§Ù„ÙˆÙ† ÙˆØ«Ø¨Ø§ØªØ§Ù‹ Ø±Ø§Ù‚ÙŠØ§Ù‹ ÙÙŠ Ø§Ù„Ø±Ø­Ù„Ø§Øª Ø§Ù„Ø·ÙˆÙŠÙ„Ø© ÙˆØªØ±ÙƒÙŠØ²Ø§Ù‹ Ø¹Ø§Ø¦Ù„ÙŠØ§Ù‹ ÙØ§Ø®Ø±Ø§Ù‹.'),
    price: t('Luxury MPV flagship', 'Monospace phare de luxe', 'MPV ÙØ§Ø®Ø±Ø© Ø±Ø§Ø¦Ø¯Ø©'),
    heroImage: '/voyah-resources/images/car/newDreamer26/kv_1920.jpg',
    logo: '/voyah-resources/images/car/car_logo/newDreamer26.png',
    gallery: [
      '/voyah-resources/images/car/newDreamer26/bg_11_1920.jpg',
      '/voyah-resources/images/car/newDreamer26/sc_20.jpg',
      '/voyah-resources/images/car/newDreamer26/bg_22_1920.jpg'
    ],
    metrics: [
      metric('Family lounge', 'Cabin concept', 'Concept habitacle', 'Ù…ÙÙ‡ÙˆÙ… Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø©'),
      metric('Long-distance ease', 'Travel focus', 'Confort voyage', 'Ø±Ø§Ø­Ø© Ø§Ù„Ø³ÙØ±'),
      metric('Premium hospitality', 'Second-row feel', 'ExpÃ©rience deuxiÃ¨me rang', 'ØªØ¬Ø±Ø¨Ø© Ø§Ù„ØµÙ Ø§Ù„Ø«Ø§Ù†ÙŠ')
    ]
  }),
  makeModel({
    slug: 'newDreamer.html',
    title: t('25 Voyah Dreamer', 'Voyah Dreamer 25', 'Voyah Dreamer 25'),
    subtitle: t('Refined premium MPV', 'Monospace premium raffinÃ©', 'MPV ÙØ§Ø®Ø±Ø© Ù…ØµÙ‚ÙˆÙ„Ø©'),
    description: t('A premium MPV combining poised body control, spacious seating, and a polished travel atmosphere.', 'Un monospace premium qui associe maÃ®trise des mouvements, espace Ã  bord gÃ©nÃ©reux et atmosphÃ¨re de voyage soignÃ©e.', 'Ø³ÙŠØ§Ø±Ø© MPV ÙØ§Ø®Ø±Ø© ØªØ¬Ù…Ø¹ Ø¨ÙŠÙ† Ø§Ù„Ø«Ø¨Ø§Øª Ø§Ù„Ø±Ø­Ø¨ ÙˆØ§Ù„Ù…Ø³Ø§Ø­Ø© Ø§Ù„ÙˆØ§Ø³Ø¹Ø© ÙˆØ£Ø¬ÙˆØ§Ø¡ Ø§Ù„Ø³ÙØ± Ø§Ù„Ù…ØµÙ‚ÙˆÙ„Ø©.'),
    price: t('Premium MPV', 'Monospace premium', 'MPV ÙØ§Ø®Ø±Ø©'),
    heroImage: '/voyah-resources/images/car/newDreamer/h56c_pc08_banner01.jpg',
    logo: '/voyah-resources/images/car/car_logo/newDreamer.png',
    gallery: [
      '/voyah-resources/images/car/newDreamer/bg_2_n_1920.jpg',
      '/voyah-resources/images/car/newDreamer/bg_7_n_1920.jpg',
      '/voyah-resources/images/car/newDreamer/h56c_pc03_0003.jpg'
    ],
    metrics: [
      metric('Premium MPV', 'Vehicle type', 'Type de vÃ©hicule', 'Ù†ÙˆØ¹ Ø§Ù„Ø³ÙŠØ§Ø±Ø©'),
      metric('Quiet travel', 'Ride quality', 'QualitÃ© de roulage', 'Ø¬ÙˆØ¯Ø© Ø§Ù„Ø±Ø­Ù„Ø©'),
      metric('Family luxury', 'Use focus', 'Usage', 'Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù…')
    ]
  }),
  makeModel({
    slug: 'dreamriver.html',
    title: t('Voyah Dreamer Mountain River', 'Voyah Dreamer Montagne-RiviÃ¨re', 'Voyah Dreamer Mountain River'),
    subtitle: t('Scenic travel expression', 'Expression du voyage panoramique', 'Ø·Ø§Ø¨Ø¹ Ø§Ù„Ø³ÙØ± Ø§Ù„Ù…Ø´Ù‡Ø¯ÙŠ'),
    description: t('A special Dreamer expression emphasizing serene scenery, warm hospitality, and elegant multi-person travel.', 'Une interprÃ©tation spÃ©ciale de Dreamer axÃ©e sur le paysage, lâ€™accueil chaleureux et lâ€™Ã©lÃ©gance des voyages Ã  plusieurs.', 'Ù†Ø³Ø®Ø© Ø®Ø§ØµØ© Ù…Ù† Dreamer ØªØ±ÙƒØ² Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø´Ù‡Ø¯ Ø§Ù„Ù‡Ø§Ø¯Ø¦ ÙˆØ§Ù„Ø¶ÙŠØ§ÙØ© Ø§Ù„Ø¯Ø§ÙØ¦Ø© ÙˆØ£Ù†Ø§Ù‚Ø© Ø§Ù„Ø³ÙØ± Ø§Ù„Ø¬Ù…Ø§Ø¹ÙŠ.'),
    price: t('Special edition MPV', 'Ã‰dition spÃ©ciale MPV', 'MPV Ø¥ØµØ¯Ø§Ø± Ø®Ø§Øµ'),
    heroImage: '/voyah-resources/images/car/dreamriver/kv_1920.png',
    logo: '/voyah-resources/images/car/car_logo/dreamriver.png',
    gallery: [
      '/voyah-resources/images/car/dreamriver/sc_2.png',
      '/voyah-resources/images/car/dreamriver/sc_5-2.png',
      '/voyah-resources/images/car/dreamriver/sc_8.png'
    ],
    metrics: [
      metric('Scenic theme', 'Edition theme', 'ThÃ¨me de lâ€™Ã©dition', 'Ø·Ø§Ø¨Ø¹ Ø§Ù„Ø¥ØµØ¯Ø§Ø±'),
      metric('Warm cabin', 'Interior mood', 'Ambiance intÃ©rieure', 'Ø£Ø¬ÙˆØ§Ø¡ Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø©'),
      metric('Shared journeys', 'Travel mode', 'Mode de voyage', 'Ù†Ù…Ø· Ø§Ù„Ø³ÙØ±')
    ]
  }),
  makeModel({
    slug: 'dreamer.html',
    title: t('24 Voyah Dreamer', 'Voyah Dreamer 24', 'Voyah Dreamer 24'),
    subtitle: t('Luxury electric MPV', 'Monospace Ã©lectrique de luxe', 'MPV ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© ÙØ§Ø®Ø±Ø©'),
    description: t('A spacious electric MPV created for premium family mobility with broad comfort and reassuring calm.', 'Un monospace Ã©lectrique spacieux pensÃ© pour une mobilitÃ© familiale premium avec beaucoup de confort et une sÃ©rÃ©nitÃ© rassurante.', 'Ø³ÙŠØ§Ø±Ø© MPV ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© ÙˆØ§Ø³Ø¹Ø© ØµÙ…Ù…Øª Ù„Ù„Ø­Ø±ÙƒØ© Ø§Ù„Ø¹Ø§Ø¦Ù„ÙŠØ© Ø§Ù„ÙØ§Ø®Ø±Ø© Ù…Ø¹ Ø±Ø§Ø­Ø© ÙƒØ¨ÙŠØ±Ø© ÙˆÙ‡Ø¯ÙˆØ¡ Ù…Ø·Ù…Ø¦Ù†.'),
    price: t('Electric luxury MPV', 'Monospace Ã©lectrique de luxe', 'MPV ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© ÙØ§Ø®Ø±Ø©'),
    heroImage: '/voyah-resources/images/car/dreamer/bg_2_1920.jpg',
    logo: '/voyah-resources/images/car/car_logo/dreamer.png',
    gallery: [
      '/voyah-resources/images/car/dreamer/bg_13_1920.jpg',
      '/voyah-resources/images/car/dreamer/bg_21_1920.jpg',
      '/voyah-resources/images/car/dreamer/bg_24_1920.jpg'
    ],
    metrics: [
      metric('Three-row comfort', 'Space', 'Espace', 'Ø§Ù„Ù…Ø³Ø§Ø­Ø©'),
      metric('Family calm', 'Travel atmosphere', 'Ambiance de voyage', 'Ø£Ø¬ÙˆØ§Ø¡ Ø§Ù„Ø±Ø­Ù„Ø©'),
      metric('Electric luxury', 'Power theme', 'Motorisation', 'Ø§Ù„Ù…Ù†Ø¸ÙˆÙ…Ø©')
    ]
  })
]

const infoPages: InfoDefinition[] = [
  {
    kind: 'info',
    slug: 'brand.html',
    eyebrow: t('Brand', 'Marque', 'Ø§Ù„Ø¹Ù„Ø§Ù…Ø©'),
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
    eyebrow: t('Store center', 'Centre de magasins', 'Ù…Ø±ÙƒØ² Ø§Ù„Ù…Ø¹Ø§Ø±Ø¶'),
    title: t('Store center built around the user journey', 'Centre de magasins construit autour du parcours utilisateur', 'Ù…Ø±ÙƒØ² Ù…Ø¹Ø§Ø±Ø¶ Ù…Ø¨Ù†ÙŠ Ø­ÙˆÙ„ Ø±Ø­Ù„Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…'),
    summary: t('Voyah stores bring together vehicle discovery, consultation, booking, delivery, and ownership support in one premium environment.', 'Les espaces Voyah rÃ©unissent dÃ©couverte des vÃ©hicules, conseil, rÃ©servation, livraison et accompagnement dans un mÃªme environnement premium.', 'ØªØ¬Ù…Ø¹ Ù…Ø¹Ø§Ø±Ø¶ Voyah Ø¨ÙŠÙ† Ø§ÙƒØªØ´Ø§Ù Ø§Ù„Ù…Ø±ÙƒØ¨Ø§Øª ÙˆØ§Ù„Ø§Ø³ØªØ´Ø§Ø±Ø© ÙˆØ§Ù„Ø­Ø¬Ø² ÙˆØ§Ù„ØªØ³Ù„ÙŠÙ… ÙˆØ¯Ø¹Ù… Ø§Ù„Ù…Ù„ÙƒÙŠØ© Ø¶Ù…Ù† Ø¨ÙŠØ¦Ø© ÙØ§Ø®Ø±Ø© ÙˆØ§Ø­Ø¯Ø©.'),
    heroImage: '/static/assets/service_bg-047aedf5.png',
    metrics: [
      metric('Retail', 'Experience type', 'Type dâ€™expÃ©rience', 'Ù†ÙˆØ¹ Ø§Ù„ØªØ¬Ø±Ø¨Ø©'),
      metric('1 journey', 'Service flow', 'Parcours de service', 'Ù…Ø³Ø§Ø± Ø§Ù„Ø®Ø¯Ù…Ø©'),
      metric('Local support', 'Ownership touchpoint', 'Point de contact', 'Ù†Ù‚Ø·Ø© Ø§Ù„ØªÙˆØ§ØµÙ„')
    ],
    blocks: [
      block('/static/assets/service-502e6c35.jpg', 'Hospitality and consultation', 'HospitalitÃ© et conseil', 'Ø§Ù„Ø¶ÙŠØ§ÙØ© ÙˆØ§Ù„Ø§Ø³ØªØ´Ø§Ø±Ø©', 'A calm reception flow helps visitors understand products, compare plans, and align the right Voyah experience to their needs.', 'Un parcours dâ€™accueil apaisÃ© aide les visiteurs Ã  comprendre les produits, comparer les solutions et identifier lâ€™expÃ©rience Voyah qui leur convient.', 'ÙŠØ³Ø§Ø¹Ø¯ Ù…Ø³Ø§Ø± Ø§Ø³ØªÙ‚Ø¨Ø§Ù„ Ù‡Ø§Ø¯Ø¦ Ø§Ù„Ø²ÙˆØ§Ø± Ø¹Ù„Ù‰ ÙÙ‡Ù… Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª ÙˆÙ…Ù‚Ø§Ø±Ù†Ø© Ø§Ù„Ø­Ù„ÙˆÙ„ ÙˆØªØ­Ø¯ÙŠØ¯ ØªØ¬Ø±Ø¨Ø© Voyah Ø§Ù„Ø£Ù†Ø³Ø¨ Ù„Ù‡Ù….'),
      block('/static/assets/store2-00eb05d9.png', 'Model exploration', 'Exploration des modÃ¨les', 'Ø§Ø³ØªÙƒØ´Ø§Ù Ø§Ù„Ø·Ø±Ø§Ø²Ø§Øª', 'From display vehicles to test-drive coordination, the store center is designed to move naturally from discovery to decision.', 'Du vÃ©hicule exposÃ© Ã  la coordination des essais, le centre de magasins est conÃ§u pour faire passer naturellement de la dÃ©couverte Ã  la dÃ©cision.', 'Ù…Ù† Ø³ÙŠØ§Ø±Ø§Øª Ø§Ù„Ø¹Ø±Ø¶ Ø¥Ù„Ù‰ ØªÙ†Ø³ÙŠÙ‚ ØªØ¬Ø§Ø±Ø¨ Ø§Ù„Ù‚ÙŠØ§Ø¯Ø©ØŒ ØµÙ…Ù… Ù…Ø±ÙƒØ² Ø§Ù„Ù…Ø¹Ø§Ø±Ø¶ Ù„Ù„Ø§Ù†ØªÙ‚Ø§Ù„ Ø¨Ø³Ù„Ø§Ø³Ø© Ù…Ù† Ø§Ù„Ø§ÙƒØªØ´Ø§Ù Ø¥Ù„Ù‰ Ø§Ù„Ù‚Ø±Ø§Ø±.'),
      block('/static/assets/store3-397705c8.png', 'Digital onboarding and delivery', 'IntÃ©gration numÃ©rique et livraison', 'Ø§Ù„ØªÙ‡ÙŠØ¦Ø© Ø§Ù„Ø±Ù‚Ù…ÙŠØ© ÙˆØ§Ù„ØªØ³Ù„ÙŠÙ…', 'Configuration guidance, order follow-up, and handover support continue the premium journey beyond the visit itself.', 'Le guidage de configuration, le suivi de commande et lâ€™accompagnement Ã  la remise prolongent lâ€™expÃ©rience premium au-delÃ  de la visite.', 'ØªÙˆØ§ØµÙ„ Ø¥Ø±Ø´Ø§Ø¯Ø§Øª Ø§Ù„ØªØ¬Ù‡ÙŠØ² ÙˆÙ…ØªØ§Ø¨Ø¹Ø© Ø§Ù„Ø·Ù„Ø¨ ÙˆØ¯Ø¹Ù… Ø§Ù„ØªØ³Ù„Ù… Ø§Ù„Ø±Ø­Ù„Ø© Ø§Ù„ÙØ§Ø®Ø±Ø© Ø¨Ø¹Ø¯ Ø§Ù„Ø²ÙŠØ§Ø±Ø© Ù†ÙØ³Ù‡Ø§.')
    ],
    ctaLabel: t('Book a visit', 'RÃ©server une visite', 'Ø§Ø­Ø¬Ø² Ø²ÙŠØ§Ø±Ø©'),
    ctaSlug: 'book-drive.html'
  },
  {
    kind: 'info',
    slug: 'service.html',
    eyebrow: t('Service', 'Service', 'Ø§Ù„Ø®Ø¯Ù…Ø©'),
    title: t('Voyah Service', 'Service Voyah', 'خدمات Voyah'),
    summary: t('You focus on chasing freedom and dreams, while we focus on protecting every journey with care.', 'Vous poursuivez la liberté et les rêves, tandis que nous veillons à protéger chaque trajet avec soin.', 'أنت تنطلق نحو الحرية والأحلام، ونحن نتولى حماية كل رحلة بعناية.'),
    heroImage: '/static/assets/service-502e6c35.jpg',
    metrics: [
      metric('Sincere', 'Reception', 'Accueil', 'Ø§Ù„Ø§Ø³ØªÙ‚Ø¨Ø§Ù„'),
      metric('Ceremonial', 'Delivery', 'Livraison', 'Ø§Ù„ØªØ³Ù„ÙŠÙ…'),
      metric('7×24 h', 'Protection', 'Protection', 'Ø§Ù„Ø­Ù…Ø§ÙŠØ©')
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
    eyebrow: t('Energy', 'Ã‰nergie', 'Ø§Ù„Ø·Ø§Ù‚Ø©'),
    title: t('A connected energy ecosystem for users', 'Un Ã©cosystÃ¨me Ã©nergÃ©tique connectÃ©', 'Ù…Ù†Ø¸ÙˆÙ…Ø© Ø·Ø§Ù‚Ø© Ù…ØªØ±Ø§Ø¨Ø·Ø© Ù„Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ†'),
    summary: t('Voyah Energy links charging scenes, partner infrastructure, and digital guidance to support daily and long-distance use.', 'Voyah Energy relie scÃ©narios de recharge, infrastructures partenaires et guidage numÃ©rique pour accompagner lâ€™usage quotidien et longue distance.', 'ØªØ±Ø¨Ø· Ø·Ø§Ù‚Ø© Voyah Ø¨ÙŠÙ† Ø³ÙŠÙ†Ø§Ø±ÙŠÙˆÙ‡Ø§Øª Ø§Ù„Ø´Ø­Ù† ÙˆØ§Ù„Ø¨Ù†ÙŠØ© Ø§Ù„Ø´Ø±ÙŠÙƒØ© ÙˆØ§Ù„Ø¥Ø±Ø´Ø§Ø¯ Ø§Ù„Ø±Ù‚Ù…ÙŠ Ù„Ø¯Ø¹Ù… Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„ÙŠÙˆÙ…ÙŠ ÙˆØ§Ù„Ø³ÙØ± Ø§Ù„Ø·ÙˆÙŠÙ„.'),
    heroImage: '/static/assets/energy_bg-4482e81f.jpg',
    metrics: [
      metric('1,540,000+', 'Integrated charging resources', 'Ressources de recharge intÃ©grÃ©es', 'Ù…ÙˆØ§Ø±Ø¯ Ø§Ù„Ø´Ø­Ù† Ø§Ù„Ù…ØªÙƒØ§Ù…Ù„Ø©'),
      metric('16,000+', 'Supercharging resources', 'Ressources de supercharge', 'Ù…ÙˆØ§Ø±Ø¯ Ø§Ù„Ø´Ø­Ù† Ø§Ù„ÙØ§Ø¦Ù‚'),
      metric('530M+ kWh', 'Charged for users', 'Recharge cumulÃ©e', 'Ø¥Ø¬Ù…Ø§Ù„ÙŠ Ø§Ù„Ø´Ø­Ù† Ù„Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ†')
    ],
    blocks: [
      block('/static/assets/charge_pc-1c0a2e91.png', 'Home and destination charging', 'Recharge Ã  domicile et destination', 'Ø§Ù„Ø´Ø­Ù† Ø§Ù„Ù…Ù†Ø²Ù„ÙŠ ÙˆØ§Ù„ÙˆØ¬Ù‡Ø©', 'A broad mix of charging touchpoints helps match energy access to different ownership routines.', 'Une combinaison Ã©tendue de solutions de recharge adapte lâ€™accÃ¨s Ã  lâ€™Ã©nergie aux diffÃ©rents rythmes dâ€™usage.', 'ÙŠØ³Ø§Ø¹Ø¯ ØªÙ†ÙˆØ¹ Ù†Ù‚Ø§Ø· Ø§Ù„Ø´Ø­Ù† Ø¹Ù„Ù‰ Ù…ÙˆØ§Ø¡Ù…Ø© Ø§Ù„ÙˆØµÙˆÙ„ Ø¥Ù„Ù‰ Ø§Ù„Ø·Ø§Ù‚Ø© Ù…Ø¹ Ø£Ù†Ù…Ø§Ø· Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„Ù…Ø®ØªÙ„ÙØ©.'),
      block('/static/assets/super_charge_pc-3886645d.png', 'High-speed replenishment', 'Recharge rapide', 'Ø¥Ø¹Ø§Ø¯Ø© Ø´Ø­Ù† Ø³Ø±ÙŠØ¹Ø©', 'Fast charging capability and partner networks reduce stop time during longer journeys.', 'La recharge rapide et les rÃ©seaux partenaires rÃ©duisent le temps dâ€™arrÃªt lors des longs trajets.', 'ØªÙ‚Ù„Ù„ Ù‚Ø¯Ø±Ø§Øª Ø§Ù„Ø´Ø­Ù† Ø§Ù„Ø³Ø±ÙŠØ¹ ÙˆØ§Ù„Ø´Ø¨ÙƒØ§Øª Ø§Ù„Ø´Ø±ÙŠÙƒØ© Ø²Ù…Ù† Ø§Ù„ØªÙˆÙ‚Ù ÙÙŠ Ø§Ù„Ø±Ø­Ù„Ø§Øª Ø§Ù„Ø·ÙˆÙŠÙ„Ø©.'),
      block('/static/assets/V2G-cba13343.jpg', 'Energy intelligence', 'Intelligence Ã©nergÃ©tique', 'Ø°ÙƒØ§Ø¡ Ø§Ù„Ø·Ø§Ù‚Ø©', 'The energy layer is designed to be visible, guided, and integrated across the digital ownership journey.', 'La couche Ã©nergie est pensÃ©e pour Ãªtre lisible, guidÃ©e et intÃ©grÃ©e dans lâ€™ensemble du parcours numÃ©rique.', 'ØªÙ… ØªØµÙ…ÙŠÙ… Ø·Ø¨Ù‚Ø© Ø§Ù„Ø·Ø§Ù‚Ø© Ù„ØªÙƒÙˆÙ† ÙˆØ§Ø¶Ø­Ø© ÙˆÙ…ÙˆØ¬Ù‡Ø© ÙˆÙ…ØªÙƒØ§Ù…Ù„Ø© Ø¹Ø¨Ø± Ø§Ù„Ø±Ø­Ù„Ø© Ø§Ù„Ø±Ù‚Ù…ÙŠØ© Ù„Ù„Ù…Ù„ÙƒÙŠØ©.')
    ],
    ctaLabel: t('Read service details', 'Lire les dÃ©tails de service', 'Ù‚Ø±Ø§Ø¡Ø© ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ø®Ø¯Ù…Ø©'),
    ctaSlug: 'service.html'
  },
  {
    kind: 'info',
    slug: 'corporate.html',
    eyebrow: t('About Voyah', 'Ã€ propos de Voyah', 'Ø¹Ù† Voyah'),
    title: t('Corporate culture and long-term brand development', 'Culture dâ€™entreprise et dÃ©veloppement de long terme', 'Ø§Ù„Ø«Ù‚Ø§ÙØ© Ø§Ù„Ù…Ø¤Ø³Ø³ÙŠØ© ÙˆØ§Ù„ØªØ·ÙˆØ± Ø·ÙˆÙŠÙ„ Ø§Ù„Ù…Ø¯Ù‰'),
    summary: t('Voyah positions its culture around user value, innovation, disciplined execution, and a premium mobility outlook.', 'Voyah articule sa culture autour de la valeur utilisateur, de lâ€™innovation, de lâ€™exÃ©cution disciplinÃ©e et dâ€™une vision premium de la mobilitÃ©.', 'ØªØ±ÙƒØ² Ø«Ù‚Ø§ÙØ© Voyah Ø¹Ù„Ù‰ Ù‚ÙŠÙ…Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… ÙˆØ§Ù„Ø§Ø¨ØªÙƒØ§Ø± ÙˆØ§Ù„ØªÙ†ÙÙŠØ° Ø§Ù„Ù…Ù†Ø¶Ø¨Ø· ÙˆØ±Ø¤ÙŠØ© ÙØ§Ø®Ø±Ø© Ù„Ù„ØªÙ†Ù‚Ù„.'),
    heroImage: '/static/assets/corporate_bg_1-33cad798.png',
    blocks: [
      block('/static/assets/corporate_poster_1-c2c8c7ca.jpg', 'Mission', 'Mission', 'Ø§Ù„Ù…Ù‡Ù…Ø©', 'The brand mission emphasizes premium new-energy mobility with stronger user empathy and product clarity.', 'La mission de la marque met lâ€™accent sur une mobilitÃ© premium Ã  Ã©nergie nouvelle avec plus dâ€™empathie utilisateur et de clartÃ© produit.', 'ØªØ¤ÙƒØ¯ Ù…Ù‡Ù…Ø© Ø§Ù„Ø¹Ù„Ø§Ù…Ø© Ø¹Ù„Ù‰ Ø§Ù„ØªÙ†Ù‚Ù„ Ø§Ù„ÙØ§Ø®Ø± Ù„Ù„Ø·Ø§Ù‚Ø© Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø© Ù…Ø¹ ØªØ¹Ø§Ø·Ù Ø£ÙƒØ¨Ø± Ù…Ø¹ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… ÙˆÙˆØ¶ÙˆØ­ Ø£Ø¹Ù„Ù‰ ÙÙŠ Ø§Ù„Ù…Ù†ØªØ¬.'),
      block('/static/assets/corporate_poster_8-7da49d74.png', 'Innovation', 'Innovation', 'Ø§Ù„Ø§Ø¨ØªÙƒØ§Ø±', 'Technology, industrial capability, and digital experience are aligned to support a coherent premium standard.', 'Technologie, capacitÃ© industrielle et expÃ©rience numÃ©rique sont alignÃ©es pour soutenir un standard premium cohÃ©rent.', 'ØªØªÙƒØ§Ù…Ù„ Ø§Ù„ØªÙƒÙ†ÙˆÙ„ÙˆØ¬ÙŠØ§ ÙˆØ§Ù„Ù‚Ø¯Ø±Ø© Ø§Ù„ØµÙ†Ø§Ø¹ÙŠØ© ÙˆØ§Ù„Ø®Ø¨Ø±Ø© Ø§Ù„Ø±Ù‚Ù…ÙŠØ© Ù„Ø¯Ø¹Ù… Ù…Ø¹ÙŠØ§Ø± ÙØ§Ø®Ø± Ù…ØªÙ…Ø§Ø³Ùƒ.'),
      block('/static/assets/corporate_poster_14-b8674e6c.png', 'Values', 'Valeurs', 'Ø§Ù„Ù‚ÙŠÙ…', 'Long-term development depends on execution quality, responsible growth, and brand consistency.', 'Le dÃ©veloppement de long terme dÃ©pend de la qualitÃ© dâ€™exÃ©cution, dâ€™une croissance responsable et dâ€™une cohÃ©rence de marque.', 'ÙŠØ¹ØªÙ…Ø¯ Ø§Ù„ØªØ·ÙˆØ± Ø·ÙˆÙŠÙ„ Ø§Ù„Ù…Ø¯Ù‰ Ø¹Ù„Ù‰ Ø¬ÙˆØ¯Ø© Ø§Ù„ØªÙ†ÙÙŠØ° ÙˆØ§Ù„Ù†Ù…Ùˆ Ø§Ù„Ù…Ø³Ø¤ÙˆÙ„ ÙˆØ§Ù„Ø§ØªØ³Ø§Ù‚ ÙÙŠ Ø§Ù„Ø¹Ù„Ø§Ù…Ø©.')
    ]
  },
  {
    kind: 'info',
    slug: 'joinus.html',
    eyebrow: t('Careers', 'CarriÃ¨res', 'Ø§Ù„Ù…Ø³Ø§Ø± Ø§Ù„Ù…Ù‡Ù†ÙŠ'),
    title: t('Build the next chapter of premium new-energy mobility', 'Construire la prochaine Ã©tape de la mobilitÃ© premium', 'Ø¨Ù†Ø§Ø¡ Ø§Ù„ÙØµÙ„ Ø§Ù„ØªØ§Ù„ÙŠ Ù…Ù† Ø§Ù„ØªÙ†Ù‚Ù„ Ø§Ù„ÙØ§Ø®Ø± Ù„Ù„Ø·Ø§Ù‚Ø© Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø©'),
    summary: t('Voyah presents career opportunities across brand, technology, retail, service, and intelligent mobility systems.', 'Voyah prÃ©sente des opportunitÃ©s de carriÃ¨re dans la marque, la technologie, le retail, le service et les systÃ¨mes de mobilitÃ© intelligente.', 'ØªÙ‚Ø¯Ù… Voyah ÙØ±ØµØ§Ù‹ Ù…Ù‡Ù†ÙŠØ© Ø¹Ø¨Ø± Ø§Ù„Ø¹Ù„Ø§Ù…Ø© ÙˆØ§Ù„ØªÙ‚Ù†ÙŠØ© ÙˆØ§Ù„Ø¨ÙŠØ¹ ÙˆØ§Ù„Ø®Ø¯Ù…Ø© ÙˆØ£Ù†Ø¸Ù…Ø© Ø§Ù„ØªÙ†Ù‚Ù„ Ø§Ù„Ø°ÙƒÙŠ.'),
    heroImage: '/static/assets/joinus_bg_1920-f7158f6f.png',
    blocks: [
      block('/static/assets/recruit_poster_1-679c5306.png', 'Open roles', 'Postes ouverts', 'Ø§Ù„ÙˆØ¸Ø§Ø¦Ù Ø§Ù„Ù…ÙØªÙˆØ­Ø©', 'Teams span vehicle programs, product planning, digital systems, user operations, and market development.', 'Les Ã©quipes couvrent programmes vÃ©hicule, planification produit, systÃ¨mes numÃ©riques, opÃ©rations utilisateurs et dÃ©veloppement marchÃ©.', 'ØªØ´Ù…Ù„ Ø§Ù„ÙØ±Ù‚ Ø¨Ø±Ø§Ù…Ø¬ Ø§Ù„Ù…Ø±ÙƒØ¨Ø§Øª ÙˆØªØ®Ø·ÙŠØ· Ø§Ù„Ù…Ù†ØªØ¬ ÙˆØ§Ù„Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ø±Ù‚Ù…ÙŠØ© ÙˆØ¹Ù…Ù„ÙŠØ§Øª Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ† ÙˆØªØ·ÙˆÙŠØ± Ø§Ù„Ø³ÙˆÙ‚.'),
      block('/static/assets/recruit_poster_2-7a882da6.png', 'Growth environment', 'Environnement de croissance', 'Ø¨ÙŠØ¦Ø© Ø§Ù„ØªØ·ÙˆØ±', 'Voyah positions growth around responsibility, cross-functional collaboration, and product quality.', 'Voyah place la progression sous le signe de la responsabilitÃ©, de la collaboration transversale et de la qualitÃ© produit.', 'ØªØ¶Ø¹ Voyah Ø§Ù„ØªØ·ÙˆØ± ÙÙŠ Ø¥Ø·Ø§Ø± Ø§Ù„Ù…Ø³Ø¤ÙˆÙ„ÙŠØ© ÙˆØ§Ù„ØªØ¹Ø§ÙˆÙ† Ø¨ÙŠÙ† Ø§Ù„ÙˆØ¸Ø§Ø¦Ù ÙˆØ¬ÙˆØ¯Ø© Ø§Ù„Ù…Ù†ØªØ¬.'),
      block('/static/assets/recruit_form_bg-107b0556.jpg', 'Join the team', 'Rejoindre lâ€™Ã©quipe', 'Ø§Ù†Ø¶Ù… Ø¥Ù„Ù‰ Ø§Ù„ÙØ±ÙŠÙ‚', 'Recruitment channels are designed to make application and role matching clearer for candidates.', 'Les parcours de recrutement sont conÃ§us pour rendre la candidature et lâ€™adÃ©quation des rÃ´les plus claires.', 'ØµÙ…Ù…Øª Ù‚Ù†ÙˆØ§Øª Ø§Ù„ØªÙˆØ¸ÙŠÙ Ù„Ø¬Ø¹Ù„ Ø§Ù„ØªÙ‚Ø¯ÙŠÙ… ÙˆÙ…ÙˆØ§Ø¡Ù…Ø© Ø§Ù„Ø£Ø¯ÙˆØ§Ø± Ø£ÙƒØ«Ø± ÙˆØ¶ÙˆØ­Ø§Ù‹ Ù„Ù„Ù…Ø±Ø´Ø­ÙŠÙ†.')
    ]
  },
  {
    kind: 'info',
    slug: 'recruit-partners.html',
    eyebrow: t('Partners', 'Partenaires', 'Ø§Ù„Ø´Ø±ÙƒØ§Ø¡'),
    title: t('Partner recruitment for broader service reach', 'Recrutement de partenaires pour Ã©largir le service', 'Ø§Ø³ØªÙ‚Ø·Ø§Ø¨ Ø§Ù„Ø´Ø±ÙƒØ§Ø¡ Ù„ØªÙˆØ³ÙŠØ¹ Ù†Ø·Ø§Ù‚ Ø§Ù„Ø®Ø¯Ù…Ø©'),
    summary: t('Voyah partner programs support expansion across retail, service touchpoints, and local operational capability.', 'Les programmes partenaires de Voyah accompagnent lâ€™expansion du retail, des points de service et des capacitÃ©s opÃ©rationnelles locales.', 'ØªØ¯Ø¹Ù… Ø¨Ø±Ø§Ù…Ø¬ Ø§Ù„Ø´Ø±ÙƒØ§Ø¡ Ù„Ø¯Ù‰ Voyah Ø§Ù„ØªÙˆØ³Ø¹ Ø¹Ø¨Ø± Ø§Ù„Ø¨ÙŠØ¹ ÙˆØ§Ù„Ø®Ø¯Ù…Ø© ÙˆØ§Ù„Ù‚Ø¯Ø±Ø§Øª Ø§Ù„ØªØ´ØºÙŠÙ„ÙŠØ© Ø§Ù„Ù…Ø­Ù„ÙŠØ©.'),
    heroImage: '/static/assets/recruit_partners_bg_1920-81ee18a9.png',
    blocks: [
      block('/static/assets/recruit_partners_poster_1-f48b5641.jpg', 'Network development', 'DÃ©veloppement du rÃ©seau', 'ØªØ·ÙˆÙŠØ± Ø§Ù„Ø´Ø¨ÙƒØ©', 'Partner recruitment is framed around long-term market development and service consistency.', 'Le recrutement de partenaires sâ€™inscrit dans une logique de dÃ©veloppement de marchÃ© Ã  long terme et de cohÃ©rence de service.', 'ÙŠØªÙ… Ø§Ø³ØªÙ‚Ø·Ø§Ø¨ Ø§Ù„Ø´Ø±ÙƒØ§Ø¡ Ø¶Ù…Ù† Ø¥Ø·Ø§Ø± ØªØ·ÙˆÙŠØ± Ø§Ù„Ø³ÙˆÙ‚ Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø¯Ù‰ Ø§Ù„Ø·ÙˆÙŠÙ„ ÙˆØ§ØªØ³Ø§Ù‚ Ø§Ù„Ø®Ø¯Ù…Ø©.'),
      block('/static/assets/recruit_partners_poster_5-eff94200.png', 'Capability standards', 'Standards de capacitÃ©', 'Ù…Ø¹Ø§ÙŠÙŠØ± Ø§Ù„Ù‚Ø¯Ø±Ø©', 'Operational readiness, user care, and brand presentation are core to partner evaluation.', 'La prÃ©paration opÃ©rationnelle, la qualitÃ© de service et la prÃ©sentation de la marque sont centrales dans lâ€™Ã©valuation des partenaires.', 'ØªØ¹Ø¯ Ø§Ù„Ø¬Ø§Ù‡Ø²ÙŠØ© Ø§Ù„ØªØ´ØºÙŠÙ„ÙŠØ© ÙˆØ§Ù„Ø¹Ù†Ø§ÙŠØ© Ø¨Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… ÙˆØªÙ‚Ø¯ÙŠÙ… Ø§Ù„Ø¹Ù„Ø§Ù…Ø© Ø¹Ù†Ø§ØµØ± Ø£Ø³Ø§Ø³ÙŠØ© ÙÙŠ ØªÙ‚ÙŠÙŠÙ… Ø§Ù„Ø´Ø±ÙƒØ§Ø¡.'),
      block('/static/assets/recruit_partners_poster_9-c73e7510.jpg', 'Shared growth', 'Croissance partagÃ©e', 'Ø§Ù„Ù†Ù…Ùˆ Ø§Ù„Ù…Ø´ØªØ±Ùƒ', 'The model emphasizes durable cooperation rather than short-term channel expansion.', 'Le modÃ¨le privilÃ©gie une coopÃ©ration durable plutÃ´t quâ€™une simple expansion de canal Ã  court terme.', 'ÙŠØ±ÙƒØ² Ø§Ù„Ù†Ù…ÙˆØ°Ø¬ Ø¹Ù„Ù‰ ØªØ¹Ø§ÙˆÙ† Ù…Ø³ØªØ¯Ø§Ù… Ø¨Ø¯Ù„Ø§Ù‹ Ù…Ù† ØªÙˆØ³Ø¹ Ù‚Ù†ÙˆØ§Øª Ù‚ØµÙŠØ± Ø§Ù„Ø£Ù…Ø¯.')
    ]
  },
  {
    kind: 'info',
    slug: 'ir.html',
    eyebrow: t('Investor relations', 'Relations investisseurs', 'Ø¹Ù„Ø§Ù‚Ø§Øª Ø§Ù„Ù…Ø³ØªØ«Ù…Ø±ÙŠÙ†'),
    title: t('Investor-facing materials and governance information', 'Informations investisseurs et gouvernance', 'Ù…ÙˆØ§Ø¯ Ø§Ù„Ù…Ø³ØªØ«Ù…Ø±ÙŠÙ† ÙˆÙ…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„Ø­ÙˆÙƒÙ…Ø©'),
    summary: t('This section gathers governance references, prospectus materials, and key investor-oriented documents.', 'Cette section regroupe des rÃ©fÃ©rences de gouvernance, des documents de prospectus et des contenus destinÃ©s aux investisseurs.', 'ÙŠØ¬Ù…Ø¹ Ù‡Ø°Ø§ Ø§Ù„Ù‚Ø³Ù… Ù…Ø±Ø§Ø¬Ø¹ Ø§Ù„Ø­ÙˆÙƒÙ…Ø© ÙˆÙ…ÙˆØ§Ø¯ Ù†Ø´Ø±Ø© Ø§Ù„Ø¥ØµØ¯Ø§Ø± ÙˆØ§Ù„Ù…Ø³ØªÙ†Ø¯Ø§Øª Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ© Ø§Ù„Ù…ÙˆØ¬Ù‡Ø© Ù„Ù„Ù…Ø³ØªØ«Ù…Ø±ÙŠÙ†.'),
    heroImage: '/static/assets/ir-3663d9c1.png',
    blocks: [
      block('/static/assets/prospectus-4ce8b045.png', 'Prospectus materials', 'Documents de prospectus', 'Ù…ÙˆØ§Ø¯ Ù†Ø´Ø±Ø© Ø§Ù„Ø¥ØµØ¯Ø§Ø±', 'Core disclosure materials are organized for structured review and reference.', 'Les principaux documents de divulgation sont organisÃ©s pour une consultation et une rÃ©fÃ©rence structurÃ©es.', 'ØªÙ†Ø¸Ù… Ù…ÙˆØ§Ø¯ Ø§Ù„Ø¥ÙØµØ§Ø­ Ø§Ù„Ø£Ø³Ø§Ø³ÙŠØ© Ù„Ø³Ù‡ÙˆÙ„Ø© Ø§Ù„Ù…Ø±Ø§Ø¬Ø¹Ø© ÙˆØ§Ù„Ø±Ø¬ÙˆØ¹ Ø¥Ù„ÙŠÙ‡Ø§.'),
      block('/static/assets/corporate-governance-1d981bac.png', 'Governance structure', 'Structure de gouvernance', 'Ù‡ÙŠÙƒÙ„ Ø§Ù„Ø­ÙˆÙƒÙ…Ø©', 'Governance information clarifies institutional design and corporate oversight principles.', 'Les informations de gouvernance clarifient lâ€™organisation institutionnelle et les principes de supervision.', 'ØªÙˆØ¶Ø­ Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„Ø­ÙˆÙƒÙ…Ø© Ø§Ù„ØªØµÙ…ÙŠÙ… Ø§Ù„Ù…Ø¤Ø³Ø³ÙŠ ÙˆÙ…Ø¨Ø§Ø¯Ø¦ Ø§Ù„Ø¥Ø´Ø±Ø§Ù Ø§Ù„Ù…Ø¤Ø³Ø³ÙŠ.'),
      block('/static/assets/ir2-93691f3f.png', 'Reference materials', 'Documents de rÃ©fÃ©rence', 'Ù…ÙˆØ§Ø¯ Ù…Ø±Ø¬Ø¹ÙŠØ©', 'Supporting materials provide context for financial, governance, and strategic review.', 'Les documents complÃ©mentaires apportent du contexte pour la revue financiÃ¨re, stratÃ©gique et de gouvernance.', 'ØªÙˆÙØ± Ø§Ù„Ù…ÙˆØ§Ø¯ Ø§Ù„Ø¯Ø§Ø¹Ù…Ø© Ø³ÙŠØ§Ù‚Ø§Ù‹ Ù„Ù„Ù…Ø±Ø§Ø¬Ø¹Ø© Ø§Ù„Ù…Ø§Ù„ÙŠØ© ÙˆØ§Ù„Ø§Ø³ØªØ±Ø§ØªÙŠØ¬ÙŠØ© ÙˆØ§Ù„Ø­ÙˆÙƒÙ…Ø©.')
    ]
  },
  {
    kind: 'info',
    slug: 'environmental.html',
    eyebrow: t('Environmental disclosure', 'Informations environnementales', 'Ø§Ù„Ø¥ÙØµØ§Ø­ Ø§Ù„Ø¨ÙŠØ¦ÙŠ'),
    title: t('Environmental and responsibility-oriented disclosures', 'Informations environnementales et de responsabilitÃ©', 'Ø¥ÙØµØ§Ø­Ø§Øª Ø¨ÙŠØ¦ÙŠØ© ÙˆÙ…Ø³Ø¤ÙˆÙ„ÙŠØ© Ù…Ø¤Ø³Ø³ÙŠØ©'),
    summary: t('Environmental disclosure aligns brand operations, manufacturing context, and long-term development responsibility.', 'Les informations environnementales relient opÃ©rations de marque, contexte industriel et responsabilitÃ© de dÃ©veloppement Ã  long terme.', 'ÙŠØ±Ø¨Ø· Ø§Ù„Ø¥ÙØµØ§Ø­ Ø§Ù„Ø¨ÙŠØ¦ÙŠ Ø¨ÙŠÙ† Ø¹Ù…Ù„ÙŠØ§Øª Ø§Ù„Ø¹Ù„Ø§Ù…Ø© ÙˆØ§Ù„Ø³ÙŠØ§Ù‚ Ø§Ù„ØµÙ†Ø§Ø¹ÙŠ ÙˆÙ…Ø³Ø¤ÙˆÙ„ÙŠØ© Ø§Ù„ØªØ·ÙˆØ± Ø·ÙˆÙŠÙ„ Ø§Ù„Ù…Ø¯Ù‰.'),
    heroImage: '/static/assets/world-fec50d02.jpg',
    blocks: [
      block('/static/assets/earth_index-e4c6ae99.jpg', 'Environmental view', 'Vision environnementale', 'Ø§Ù„Ø±Ø¤ÙŠØ© Ø§Ù„Ø¨ÙŠØ¦ÙŠØ©', 'The environmental narrative is presented as part of the broader new-energy brand ecosystem.', 'Le rÃ©cit environnemental sâ€™inscrit dans lâ€™Ã©cosystÃ¨me plus large de la marque Ã  Ã©nergie nouvelle.', 'ÙŠÙ‚Ø¯Ù… Ø§Ù„Ø³Ø±Ø¯ Ø§Ù„Ø¨ÙŠØ¦ÙŠ ÙƒØ¬Ø²Ø¡ Ù…Ù† Ù…Ù†Ø¸ÙˆÙ…Ø© Ø£ÙˆØ³Ø¹ Ù„Ù„Ø¹Ù„Ø§Ù…Ø© Ø§Ù„Ø¹Ø§Ù…Ù„Ø© Ø¨Ø§Ù„Ø·Ø§Ù‚Ø© Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø©.'),
      block('/static/assets/power_bg1-7048cd30.png', 'Operational responsibility', 'ResponsabilitÃ© opÃ©rationnelle', 'Ø§Ù„Ù…Ø³Ø¤ÙˆÙ„ÙŠØ© Ø§Ù„ØªØ´ØºÙŠÙ„ÙŠØ©', 'Responsibility extends across the way the brand grows, serves, and expands its footprint.', 'La responsabilitÃ© sâ€™Ã©tend Ã  la maniÃ¨re dont la marque croÃ®t, sert ses utilisateurs et dÃ©veloppe son empreinte.', 'ØªÙ…ØªØ¯ Ø§Ù„Ù…Ø³Ø¤ÙˆÙ„ÙŠØ© Ø¥Ù„Ù‰ Ø·Ø±ÙŠÙ‚Ø© Ù†Ù…Ùˆ Ø§Ù„Ø¹Ù„Ø§Ù…Ø© ÙˆØ®Ø¯Ù…ØªÙ‡Ø§ Ù„Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ† ÙˆØªÙˆØ³ÙŠØ¹ Ø­Ø¶ÙˆØ±Ù‡Ø§.'),
      block('/static/assets/world-6e618fb7.png', 'Long-term orientation', 'Orientation de long terme', 'Ø§Ù„ØªÙˆØ¬Ù‡ Ø·ÙˆÙŠÙ„ Ø§Ù„Ù…Ø¯Ù‰', 'The overall frame emphasizes sustainable development rather than short-term messaging.', 'Le cadre gÃ©nÃ©ral met lâ€™accent sur le dÃ©veloppement durable plutÃ´t que sur des messages de court terme.', 'ÙŠØ±ÙƒØ² Ø§Ù„Ø¥Ø·Ø§Ø± Ø§Ù„Ø¹Ø§Ù… Ø¹Ù„Ù‰ Ø§Ù„ØªÙ†Ù…ÙŠØ© Ø§Ù„Ù…Ø³ØªØ¯Ø§Ù…Ø© Ù„Ø§ Ø§Ù„Ø±Ø³Ø§Ø¦Ù„ Ù‚ØµÙŠØ±Ø© Ø§Ù„Ø£Ø¬Ù„.')
    ]
  },
  {
    kind: 'info',
    slug: 'document.html',
    eyebrow: t('Downloads', 'TÃ©lÃ©chargements', 'Ø§Ù„ØªÙ†Ø²ÙŠÙ„Ø§Øª'),
    title: t('Documents and references for owners and visitors', 'Documents et rÃ©fÃ©rences pour propriÃ©taires et visiteurs', 'Ù…Ø³ØªÙ†Ø¯Ø§Øª ÙˆÙ…Ø±Ø§Ø¬Ø¹ Ù„Ù„Ù…Ø§Ù„ÙƒÙŠÙ† ÙˆØ§Ù„Ø²ÙˆØ§Ø±'),
    summary: t('Voyah centralizes manuals, reference documents, and service-oriented materials for easier access.', 'Voyah centralise manuels, documents de rÃ©fÃ©rence et contenus de service pour un accÃ¨s simplifiÃ©.', 'ØªØ¬Ù…Ø¹ Voyah Ø§Ù„Ø£Ø¯Ù„Ø© ÙˆØ§Ù„Ù…Ø³ØªÙ†Ø¯Ø§Øª Ø§Ù„Ù…Ø±Ø¬Ø¹ÙŠØ© ÙˆØ§Ù„Ù…ÙˆØ§Ø¯ Ø§Ù„Ù…Ø±ØªØ¨Ø·Ø© Ø¨Ø§Ù„Ø®Ø¯Ù…Ø© Ù„ØªØ³Ù‡ÙŠÙ„ Ø§Ù„ÙˆØµÙˆÙ„ Ø¥Ù„ÙŠÙ‡Ø§.'),
    heroImage: '/static/assets/user_manual-4441c1d3.png',
    blocks: [
      block('/static/assets/user_manual-4441c1d3.png', 'User manuals', 'Manuels utilisateur', 'Ø£Ø¯Ù„Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…', 'Vehicle documents are organized to support onboarding and continued ownership use.', 'Les documents vÃ©hicules sont organisÃ©s pour accompagner la prise en main puis lâ€™usage au long cours.', 'ØªÙ†Ø¸Ù… Ù…Ø³ØªÙ†Ø¯Ø§Øª Ø§Ù„Ù…Ø±ÙƒØ¨Ø§Øª Ù„Ø¯Ø¹Ù… Ø§Ù„Ø¨Ø¯Ø¡ ÙÙŠ Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø«Ù… Ø§Ù„Ø§Ø³ØªÙØ§Ø¯Ø© Ø§Ù„Ù…Ø³ØªÙ…Ø±Ø© Ø£Ø«Ù†Ø§Ø¡ Ø§Ù„Ù…Ù„ÙƒÙŠØ©.'),
      block('/static/assets/prospectus2-00a82650.png', 'Reference files', 'Fichiers de rÃ©fÃ©rence', 'Ù…Ù„ÙØ§Øª Ù…Ø±Ø¬Ø¹ÙŠØ©', 'Supplementary references are grouped to improve search and download clarity.', 'Les rÃ©fÃ©rences complÃ©mentaires sont regroupÃ©es pour rendre la recherche et le tÃ©lÃ©chargement plus lisibles.', 'ØªÙ… ØªØ¬Ù…ÙŠØ¹ Ø§Ù„Ù…Ø±Ø§Ø¬Ø¹ Ø§Ù„Ø¥Ø¶Ø§ÙÙŠØ© Ù„ØªØ­Ø³ÙŠÙ† ÙˆØ¶ÙˆØ­ Ø§Ù„Ø¨Ø­Ø« ÙˆØ§Ù„ØªÙ†Ø²ÙŠÙ„.'),
      block('/static/assets/app_code_160-5b2a34cc.png', 'Digital access', 'AccÃ¨s numÃ©rique', 'Ø§Ù„ÙˆØµÙˆÙ„ Ø§Ù„Ø±Ù‚Ù…ÙŠ', 'Documents are connected to digital touchpoints to make retrieval more convenient.', 'Les documents sont reliÃ©s Ã  des points de contact numÃ©riques pour simplifier leur consultation.', 'ØªÙ… Ø±Ø¨Ø· Ø§Ù„Ù…Ø³ØªÙ†Ø¯Ø§Øª Ø¨Ù†Ù‚Ø§Ø· ÙˆØµÙˆÙ„ Ø±Ù‚Ù…ÙŠØ© Ù„Ø¬Ø¹Ù„ Ø§Ø³ØªØ±Ø¬Ø§Ø¹Ù‡Ø§ Ø£ÙƒØ«Ø± Ø³Ù‡ÙˆÙ„Ø©.')
    ]
  },
  {
    kind: 'info',
    slug: 'purchasing.html',
    eyebrow: t('Procurement', 'Achats', 'Ø§Ù„Ù…Ø´ØªØ±ÙŠØ§Øª'),
    title: t('Procurement and supplier collaboration context', 'Contexte des achats et de la collaboration fournisseurs', 'Ø³ÙŠØ§Ù‚ Ø§Ù„Ù…Ø´ØªØ±ÙŠØ§Øª ÙˆØ§Ù„ØªØ¹Ø§ÙˆÙ† Ù…Ø¹ Ø§Ù„Ù…ÙˆØ±Ø¯ÙŠÙ†'),
    summary: t('Voyah procurement emphasizes capability, quality, and long-term supplier collaboration across a growing ecosystem.', 'Les achats Voyah mettent lâ€™accent sur la capacitÃ©, la qualitÃ© et la collaboration fournisseur de long terme dans un Ã©cosystÃ¨me en croissance.', 'ØªØ±ÙƒØ² Ù…Ø´ØªØ±ÙŠØ§Øª Voyah Ø¹Ù„Ù‰ Ø§Ù„ÙƒÙØ§Ø¡Ø© ÙˆØ§Ù„Ø¬ÙˆØ¯Ø© ÙˆØ§Ù„ØªØ¹Ø§ÙˆÙ† Ø·ÙˆÙŠÙ„ Ø§Ù„Ù…Ø¯Ù‰ Ù…Ø¹ Ø§Ù„Ù…ÙˆØ±Ø¯ÙŠÙ† Ø¶Ù…Ù† Ù…Ù†Ø¸ÙˆÙ…Ø© Ù…ØªÙ†Ø§Ù…ÙŠØ©.'),
    heroImage: '/static/assets/partner_pc-b12d249b.png',
    blocks: [
      block('/static/assets/partner_pc-b12d249b.png', 'Supplier network', 'RÃ©seau fournisseurs', 'Ø´Ø¨ÙƒØ© Ø§Ù„Ù…ÙˆØ±Ø¯ÙŠÙ†', 'Supplier collaboration is framed around shared quality standards and industrial coordination.', 'La collaboration fournisseurs sâ€™appuie sur des standards qualitÃ© communs et une coordination industrielle solide.', 'ÙŠÙ‚ÙˆÙ… Ø§Ù„ØªØ¹Ø§ÙˆÙ† Ù…Ø¹ Ø§Ù„Ù…ÙˆØ±Ø¯ÙŠÙ† Ø¹Ù„Ù‰ Ù…Ø¹Ø§ÙŠÙŠØ± Ø¬ÙˆØ¯Ø© Ù…Ø´ØªØ±ÙƒØ© ÙˆØªÙ†Ø³ÙŠÙ‚ ØµÙ†Ø§Ø¹ÙŠ Ù‚ÙˆÙŠ.'),
      block('/static/assets/charge_pile_bg-2c7b414e.png', 'Capability alignment', 'Alignement des capacitÃ©s', 'Ù…ÙˆØ§Ø¡Ù…Ø© Ø§Ù„Ù‚Ø¯Ø±Ø§Øª', 'The procurement model values consistency, delivery reliability, and structured cooperation.', 'Le modÃ¨le dâ€™achats valorise la constance, la fiabilitÃ© dâ€™exÃ©cution et une coopÃ©ration structurÃ©e.', 'ÙŠÙ‚Ø¯Ù‘Ø± Ù†Ù…ÙˆØ°Ø¬ Ø§Ù„Ù…Ø´ØªØ±ÙŠØ§Øª Ø§Ù„Ø§ØªØ³Ø§Ù‚ ÙˆØ§Ù„Ù…ÙˆØ«ÙˆÙ‚ÙŠØ© ÙÙŠ Ø§Ù„ØªØ³Ù„ÙŠÙ… ÙˆØ§Ù„ØªØ¹Ø§ÙˆÙ† Ø§Ù„Ù…Ù†Ø¸Ù….'),
      block('/static/assets/power_bg2-a6639f1e.png', 'Long-term development', 'DÃ©veloppement long terme', 'Ø§Ù„ØªØ·ÙˆØ± Ø·ÙˆÙŠÙ„ Ø§Ù„Ù…Ø¯Ù‰', 'Partnerships are positioned as durable capability building rather than transactional sourcing alone.', 'Les partenariats sont pensÃ©s comme une construction durable de capacitÃ©s et non comme un simple sourcing transactionnel.', 'ØªÙÙÙ‡Ù… Ø§Ù„Ø´Ø±Ø§ÙƒØ§Øª Ø¨Ø§Ø¹ØªØ¨Ø§Ø±Ù‡Ø§ Ø¨Ù†Ø§Ø¡ Ù‚Ø¯Ø±Ø§Øª Ù…Ø³ØªØ¯Ø§Ù…Ø§Ù‹ Ù„Ø§ Ù…Ø¬Ø±Ø¯ ØªÙˆØ±ÙŠØ¯ ØªØ¹Ø§Ù‚Ø¯ÙŠ.')
    ]
  },
  {
    kind: 'info',
    slug: 'book-drive.html',
    eyebrow: t('Experience', 'ExpÃ©rience', 'Ø§Ù„ØªØ¬Ø±Ø¨Ø©'),
    title: t('Book a test drive with the Voyah lineup', 'RÃ©server un essai avec la gamme Voyah', 'Ø§Ø­Ø¬Ø² ØªØ¬Ø±Ø¨Ø© Ù‚ÙŠØ§Ø¯Ø© Ù…Ø¹ Ù…Ø¬Ù…ÙˆØ¹Ø© Voyah'),
    summary: t('Test-drive booking is connected to product consultation, store support, and guided model selection.', 'La rÃ©servation dâ€™essai est reliÃ©e au conseil produit, au support magasin et Ã  lâ€™orientation vers le modÃ¨le adaptÃ©.', 'ÙŠØ±ØªØ¨Ø· Ø­Ø¬Ø² ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù‚ÙŠØ§Ø¯Ø© Ø¨Ø§Ø³ØªØ´Ø§Ø±Ø© Ø§Ù„Ù…Ù†ØªØ¬ ÙˆØ¯Ø¹Ù… Ø§Ù„Ù…Ø¹Ø±Ø¶ ÙˆØªÙˆØ¬ÙŠÙ‡ Ø§Ø®ØªÙŠØ§Ø± Ø§Ù„Ø·Ø±Ø§Ø² Ø§Ù„Ù…Ù†Ø§Ø³Ø¨.'),
    heroImage: '/static/assets/drive1-2ff63958.png',
    blocks: [
      block('/static/assets/drive2-aa10c694.png', 'Guided selection', 'Choix guidÃ©', 'Ø§Ø®ØªÙŠØ§Ø± Ù…ÙˆØ¬Ù‘Ù‡', 'Prospective owners can narrow the lineup through usage needs, size preferences, and vehicle character.', 'Les futurs clients peuvent affiner leur choix selon lâ€™usage, les prÃ©fÃ©rences dâ€™espace et le caractÃ¨re du vÃ©hicule.', 'ÙŠÙ…ÙƒÙ† Ù„Ù„Ø¹Ù…Ù„Ø§Ø¡ Ø§Ù„Ù…Ø­ØªÙ…Ù„ÙŠÙ† ØªØ¶ÙŠÙŠÙ‚ Ø§Ù„Ø§Ø®ØªÙŠØ§Ø± ÙˆÙÙ‚ Ø§Ù„Ø§Ø­ØªÙŠØ§Ø¬Ø§Øª ÙˆØ·Ø¨ÙŠØ¹Ø© Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… ÙˆØªÙØ¶ÙŠÙ„Ø§Øª Ø§Ù„Ø­Ø¬Ù….'),
      block('/static/assets/store3-fe6e8d7d.jpg', 'Store coordination', 'Coordination magasin', 'ØªÙ†Ø³ÙŠÙ‚ Ø§Ù„Ù…Ø¹Ø±Ø¶', 'The booking flow connects directly to physical service and retail support touchpoints.', 'Le parcours de rÃ©servation se connecte directement aux points de service et dâ€™accompagnement en magasin.', 'ÙŠØ±ØªØ¨Ø· Ù…Ø³Ø§Ø± Ø§Ù„Ø­Ø¬Ø² Ù…Ø¨Ø§Ø´Ø±Ø© Ø¨Ù†Ù‚Ø§Ø· Ø§Ù„Ø®Ø¯Ù…Ø© ÙˆØ§Ù„Ø¯Ø¹Ù… Ø¯Ø§Ø®Ù„ Ø§Ù„Ù…Ø¹Ø±Ø¶.'),
      block('/static/assets/life_center_poster-fb653778.png', 'Ownership onboarding', 'Prise en main', 'ØªÙ‡ÙŠØ¦Ø© Ø§Ù„Ù…Ù„ÙƒÙŠØ©', 'Test drives support not only discovery but also a clearer understanding of the ownership experience.', 'Lâ€™essai ne sert pas seulement Ã  dÃ©couvrir le produit, mais aussi Ã  mieux comprendre lâ€™expÃ©rience de possession.', 'Ù„Ø§ ØªØ®Ø¯Ù… ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù‚ÙŠØ§Ø¯Ø© Ø§Ù„Ø§ÙƒØªØ´Ø§Ù ÙÙ‚Ø· Ø¨Ù„ ØªØ³Ø§Ø¹Ø¯ Ø£ÙŠØ¶Ø§Ù‹ Ø¹Ù„Ù‰ ÙÙ‡Ù… Ø£ÙˆØ¶Ø­ Ù„ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù…Ù„ÙƒÙŠØ©.')
    ],
    ctaLabel: t('Visit store center', 'Visiter le centre de magasins', 'Ø²ÙŠØ§Ø±Ø© Ù…Ø±ÙƒØ² Ø§Ù„Ù…Ø¹Ø§Ø±Ø¶'),
    ctaSlug: 'store.html'
  }
]

const legalPages: LegalDefinition[] = [
  {
    kind: 'legal',
    slug: 'legal.html',
    eyebrow: t('Legal', 'Mentions lÃ©gales', 'Ø§Ù„Ø´Ø¤ÙˆÙ† Ø§Ù„Ù‚Ø§Ù†ÙˆÙ†ÙŠØ©'),
    title: t('Legal information', 'Informations lÃ©gales', 'Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ù‚Ø§Ù†ÙˆÙ†ÙŠØ©'),
    summary: t('Legal notices for the local Voyah reconstruction environment.', 'Mentions lÃ©gales pour lâ€™environnement local reconstruit de Voyah.', 'Ø¥Ø´Ø¹Ø§Ø±Ø§Øª Ù‚Ø§Ù†ÙˆÙ†ÙŠØ© Ù„Ø¨ÙŠØ¦Ø© Voyah Ø§Ù„Ù…Ø­Ù„ÙŠØ© Ø§Ù„Ù…Ø¹Ø§Ø¯ Ø¨Ù†Ø§Ø¤Ù‡Ø§.'),
    sections: [
      {
        title: t('Ownership', 'PropriÃ©tÃ©', 'Ø§Ù„Ù…Ù„ÙƒÙŠØ©'),
        paragraphs: [
          t('All site assets in this project are served locally within the Nuxt application.', 'Tous les contenus de ce projet sont servis localement dans lâ€™application Nuxt.', 'ÙŠØªÙ… ØªÙ‚Ø¯ÙŠÙ… Ø¬Ù…ÙŠØ¹ Ø£ØµÙˆÙ„ Ù‡Ø°Ø§ Ø§Ù„Ù…Ø´Ø±ÙˆØ¹ Ù…Ø­Ù„ÙŠØ§Ù‹ Ø¯Ø§Ø®Ù„ ØªØ·Ø¨ÙŠÙ‚ Nuxt.'),
          t('The brand name Voyah remains unchanged in every locale.', 'Le nom de marque Voyah reste inchangÃ© dans toutes les langues.', 'ÙŠØ¨Ù‚Ù‰ Ø§Ø³Ù… Ø§Ù„Ø¹Ù„Ø§Ù…Ø© Voyah Ø¯ÙˆÙ† ØªØºÙŠÙŠØ± ÙÙŠ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ù„ØºØ§Øª.')
        ]
      },
      {
        title: t('Use of content', 'Utilisation du contenu', 'Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„Ù…Ø­ØªÙˆÙ‰'),
        paragraphs: [
          t('This implementation is structured as reusable local components and localized content records.', 'Cette implÃ©mentation est structurÃ©e sous forme de composants locaux rÃ©utilisables et de contenus localisÃ©s.', 'ØªÙ…Øª Ù‡ÙŠÙƒÙ„Ø© Ù‡Ø°Ø§ Ø§Ù„ØªÙ†ÙÙŠØ° ÙƒÙ…ÙƒÙˆÙ†Ø§Øª Ù…Ø­Ù„ÙŠØ© Ù‚Ø§Ø¨Ù„Ø© Ù„Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… ÙˆØ³Ø¬Ù„Ø§Øª Ù…Ø­ØªÙˆÙ‰ Ù…ØªØ±Ø¬Ù…Ø©.')
        ]
      }
    ]
  },
  {
    kind: 'legal',
    slug: 'privacy.html',
    eyebrow: t('Privacy', 'ConfidentialitÃ©', 'Ø§Ù„Ø®ØµÙˆØµÙŠØ©'),
    title: t('Privacy notice', 'Avis de confidentialitÃ©', 'Ø¥Ø´Ø¹Ø§Ø± Ø§Ù„Ø®ØµÙˆØµÙŠØ©'),
    summary: t('Privacy-oriented notice for this static local site build.', 'Avis relatif Ã  la confidentialitÃ© pour cette version locale statique du site.', 'Ø¥Ø´Ø¹Ø§Ø± Ù…ØªØ¹Ù„Ù‚ Ø¨Ø§Ù„Ø®ØµÙˆØµÙŠØ© Ù„Ù‡Ø°Ø§ Ø§Ù„Ø¨Ù†Ø§Ø¡ Ø§Ù„Ù…Ø­Ù„ÙŠ Ø§Ù„Ø«Ø§Ø¨Øª Ù„Ù„Ù…ÙˆÙ‚Ø¹.'),
    sections: [
      {
        title: t('Static delivery', 'Livraison statique', 'Ø§Ù„ØªØ³Ù„ÙŠÙ… Ø§Ù„Ø«Ø§Ø¨Øª'),
        paragraphs: [
          t('This project is generated as static pages without remote runtime content dependencies.', 'Ce projet est gÃ©nÃ©rÃ© en pages statiques sans dÃ©pendances de contenu distantes au runtime.', 'ÙŠØªÙ… ØªÙˆÙ„ÙŠØ¯ Ù‡Ø°Ø§ Ø§Ù„Ù…Ø´Ø±ÙˆØ¹ ÙƒØµÙØ­Ø§Øª Ø«Ø§Ø¨ØªØ© Ù…Ù† Ø¯ÙˆÙ† ØªØ¨Ø¹ÙŠØ§Øª Ù…Ø­ØªÙˆÙ‰ Ø¨Ø¹ÙŠØ¯Ø© Ø£Ø«Ù†Ø§Ø¡ Ø§Ù„ØªØ´ØºÙŠÙ„.')
        ]
      },
      {
        title: t('Local assets', 'Ressources locales', 'Ø§Ù„Ø£ØµÙˆÙ„ Ø§Ù„Ù…Ø­Ù„ÙŠØ©'),
        paragraphs: [
          t('Images, videos, fonts, and page content are hosted locally in the project.', 'Les images, vidÃ©os, polices et contenus de page sont hÃ©bergÃ©s localement dans le projet.', 'ØªØªÙ… Ø§Ø³ØªØ¶Ø§ÙØ© Ø§Ù„ØµÙˆØ± ÙˆØ§Ù„ÙÙŠØ¯ÙŠÙˆÙ‡Ø§Øª ÙˆØ§Ù„Ø®Ø·ÙˆØ· ÙˆÙ…Ø­ØªÙˆÙ‰ Ø§Ù„ØµÙØ­Ø§Øª Ù…Ø­Ù„ÙŠØ§Ù‹ Ø¯Ø§Ø®Ù„ Ø§Ù„Ù…Ø´Ø±ÙˆØ¹.')
        ]
      }
    ]
  },
  {
    kind: 'legal',
    slug: 'cookie.html',
    eyebrow: t('Cookies', 'Cookies', 'Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø·'),
    title: t('Cookie notice', 'Avis sur les cookies', 'Ø¥Ø´Ø¹Ø§Ø± Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø·'),
    summary: t('Cookie-related guidance for the local static implementation.', 'Informations relatives aux cookies pour lâ€™implÃ©mentation statique locale.', 'Ø¥Ø±Ø´Ø§Ø¯Ø§Øª Ø®Ø§ØµØ© Ø¨Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ù„Ù„ØªÙ†ÙÙŠØ° Ø§Ù„Ù…Ø­Ù„ÙŠ Ø§Ù„Ø«Ø§Ø¨Øª.'),
    sections: [
      {
        title: t('Local experience', 'ExpÃ©rience locale', 'Ø§Ù„ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù…Ø­Ù„ÙŠØ©'),
        paragraphs: [
          t('The site is built for local delivery and does not rely on the original remote website.', 'Le site est conÃ§u pour une diffusion locale et ne dÃ©pend pas du site distant dâ€™origine.', 'ØªÙ… Ø¨Ù†Ø§Ø¡ Ø§Ù„Ù…ÙˆÙ‚Ø¹ Ù„Ù„ØªÙ‚Ø¯ÙŠÙ… Ø§Ù„Ù…Ø­Ù„ÙŠ ÙˆÙ„Ø§ ÙŠØ¹ØªÙ…Ø¯ Ø¹Ù„Ù‰ Ø§Ù„Ù…ÙˆÙ‚Ø¹ Ø§Ù„Ø£ØµÙ„ÙŠ Ø§Ù„Ø¨Ø¹ÙŠØ¯.')
        ]
      },
      {
        title: t('Client behavior', 'Comportement client', 'Ø³Ù„ÙˆÙƒ Ø§Ù„Ø¹Ù…ÙŠÙ„'),
        paragraphs: [
          t('Any browser-level behavior depends on the local app bundle generated by Nuxt.', 'Tout comportement cÃ´tÃ© navigateur dÃ©pend du bundle local gÃ©nÃ©rÃ© par Nuxt.', 'ÙŠØ¹ØªÙ…Ø¯ Ø£ÙŠ Ø³Ù„ÙˆÙƒ Ø¹Ù„Ù‰ Ù…Ø³ØªÙˆÙ‰ Ø§Ù„Ù…ØªØµÙØ­ Ø¹Ù„Ù‰ Ø§Ù„Ø­Ø²Ù…Ø© Ø§Ù„Ù…Ø­Ù„ÙŠØ© Ø§Ù„ØªÙŠ ÙŠÙˆÙ„Ø¯Ù‡Ø§ Nuxt.')
        ]
      }
    ]
  },
  {
    kind: 'legal',
    slug: 'authorization.html',
    eyebrow: t('Authorization', 'Autorisation', 'Ø§Ù„ØªÙÙˆÙŠØ¶'),
    title: t('Authorization statement', 'DÃ©claration dâ€™autorisation', 'Ø¨ÙŠØ§Ù† Ø§Ù„ØªÙÙˆÙŠØ¶'),
    summary: t('Authorization-oriented statement for use of the local project implementation.', 'DÃ©claration dâ€™autorisation relative Ã  lâ€™usage de lâ€™implÃ©mentation locale du projet.', 'Ø¨ÙŠØ§Ù† Ù…ØªØ¹Ù„Ù‚ Ø¨Ø§Ù„ØªÙÙˆÙŠØ¶ Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… ØªÙ†ÙÙŠØ° Ø§Ù„Ù…Ø´Ø±ÙˆØ¹ Ø§Ù„Ù…Ø­Ù„ÙŠ.'),
    sections: [
      {
        title: t('Project scope', 'PÃ©rimÃ¨tre du projet', 'Ù†Ø·Ø§Ù‚ Ø§Ù„Ù…Ø´Ø±ÙˆØ¹'),
        paragraphs: [
          t('The current implementation is a local Nuxt reconstruction using reusable page components and local media.', 'Lâ€™implÃ©mentation actuelle est une reconstruction Nuxt locale utilisant des composants de page rÃ©utilisables et des mÃ©dias locaux.', 'Ø§Ù„ØªÙ†ÙÙŠØ° Ø§Ù„Ø­Ø§Ù„ÙŠ Ø¹Ø¨Ø§Ø±Ø© Ø¹Ù† Ø¥Ø¹Ø§Ø¯Ø© Ø¨Ù†Ø§Ø¡ Ù…Ø­Ù„ÙŠØ© Ø¨Ù€ Nuxt Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Ù…ÙƒÙˆÙ†Ø§Øª ØµÙØ­Ø§Øª Ù‚Ø§Ø¨Ù„Ø© Ù„Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… ÙˆÙˆØ³Ø§Ø¦Ø· Ù…Ø­Ù„ÙŠØ©.')
        ]
      },
      {
        title: t('Brand handling', 'Gestion de marque', 'Ø§Ù„ØªØ¹Ø§Ù…Ù„ Ù…Ø¹ Ø§Ù„Ø¹Ù„Ø§Ù…Ø©'),
        paragraphs: [
          t('Voyah remains the exact brand name across English, French, and Arabic locales.', 'Voyah reste le nom de marque exact en anglais, franÃ§ais et arabe.', 'ØªØ¸Ù„ Voyah Ø§Ø³Ù… Ø§Ù„Ø¹Ù„Ø§Ù…Ø© Ø§Ù„Ø¯Ù‚ÙŠÙ‚ ÙÙŠ Ø§Ù„Ù„ØºØ§Øª Ø§Ù„Ø¥Ù†Ø¬Ù„ÙŠØ²ÙŠØ© ÙˆØ§Ù„ÙØ±Ù†Ø³ÙŠØ© ÙˆØ§Ù„Ø¹Ø±Ø¨ÙŠØ©.')
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
      description: t('A new-era flagship six-seat SUV', 'Un SUV phare Ã  six places de nouvelle gÃ©nÃ©ration', 'Ø³ÙŠØ§Ø±Ø© SUV Ø±Ø§Ø¦Ø¯Ø© Ø¨Ø³ØªØ© Ù…Ù‚Ø§Ø¹Ø¯ Ù…Ù† Ø§Ù„Ø¬ÙŠÙ„ Ø§Ù„Ø¬Ø¯ÙŠØ¯'),
      primaryLabel: t('Learn more', 'En savoir plus', 'Ø§Ø¹Ø±Ù Ø§Ù„Ù…Ø²ÙŠØ¯'),
      secondaryLabel: t('Order now', 'Commander', 'Ø§Ø·Ù„Ø¨ Ø§Ù„Ø¢Ù†'),
      primarySlug: 'titan.html',
      secondarySlug: 'store.html'
    },
    {
      image: '/website/advertisingbanner/image/23ab9c33-78a4-4bff-bb69-83fe117820a31770618259885.png',
      video: '/website/advertisingbanner/video/785c4160-8515-46a2-8bc9-a4f7b1907c0c1770618243037.mp4',
      logo: '/website/advertisingbanner/image/5be64d32-9133-4283-8994-3350cca635d81770618274334.png',
      title: t('', '', ''),
      description: t('A new-era flagship MPV', 'Un monospace phare de nouvelle gÃ©nÃ©ration', 'Ø³ÙŠØ§Ø±Ø© MPV Ø±Ø§Ø¦Ø¯Ø© Ù…Ù† Ø§Ù„Ø¬ÙŠÙ„ Ø§Ù„Ø¬Ø¯ÙŠØ¯'),
      primaryLabel: t('Learn more', 'En savoir plus', 'Ø§Ø¹Ø±Ù Ø§Ù„Ù…Ø²ÙŠØ¯'),
      secondaryLabel: t('Order now', 'Commander', 'Ø§Ø·Ù„Ø¨ Ø§Ù„Ø¢Ù†'),
      primarySlug: 'newDreamer26.html',
      secondarySlug: 'store.html'
    },
    {
      image: '/website/advertisingbanner/image/2ba443dd-2869-4f27-89ca-d3fc8da9908d1770618446896.png',
      video: '/website/advertisingbanner/video/1779ce91-787b-4a77-9fec-1deb13fedeb31770618459950.mp4',
      logo: '/website/advertisingbanner/image/9c751c14-cd46-439c-b9de-5a7d595655991770618438688.png',
      title: t('', '', ''),
      description: t('A new-era flagship sedan', 'Une berline phare de nouvelle gÃ©nÃ©ration', 'Ø³ÙŠØ¯Ø§Ù† Ø±Ø§Ø¦Ø¯Ø© Ù…Ù† Ø§Ù„Ø¬ÙŠÙ„ Ø§Ù„Ø¬Ø¯ÙŠØ¯'),
      primaryLabel: t('Learn more', 'En savoir plus', 'Ø§Ø¹Ø±Ù Ø§Ù„Ù…Ø²ÙŠØ¯'),
      secondaryLabel: t('Order now', 'Commander', 'Ø§Ø·Ù„Ø¨ Ø§Ù„Ø¢Ù†'),
      primarySlug: 'passion-L.html',
      secondarySlug: 'store.html'
    },
    {
      image: '/website/advertisingbanner/image/1ea30c18-f0ea-4b91-9c51-dddc46c589981770618535951.png',
      video: '/website/advertisingbanner/video/e33e96dc-3430-4882-946d-62abdf88dc0d1770618522586.mp4',
      logo: '/website/advertisingbanner/image/05088b2b-9041-4d17-8730-ab52def1319e1770618558478.png',
      title: t('', '', ''),
      description: t('SUV with Huawei intelligent driving and Harmony cockpit', 'SUV avec conduite intelligente Huawei et cockpit Harmony', 'Ø³ÙŠØ§Ø±Ø© SUV Ù…Ø²ÙˆØ¯Ø© Ø¨Ù‚ÙŠØ§Ø¯Ø© Ø°ÙƒÙŠØ© Ù…Ù† Huawei ÙˆÙ…Ù‚ØµÙˆØ±Ø© Harmony'),
      primaryLabel: t('Learn more', 'En savoir plus', 'Ø§Ø¹Ø±Ù Ø§Ù„Ù…Ø²ÙŠØ¯'),
      secondaryLabel: t('Order now', 'Commander', 'Ø§Ø·Ù„Ø¨ Ø§Ù„Ø¢Ù†'),
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
        'SUV 100 % Ã©lectrique avec conduite intelligente Huawei et cockpit Harmony',
        'Ø³ÙŠØ§Ø±Ø© SUV ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© Ø¨Ø§Ù„ÙƒØ§Ù…Ù„ Ù…Ø²ÙˆØ¯Ø© Ø¨Ù‚ÙŠØ§Ø¯Ø© Ø°ÙƒÙŠØ© Ù…Ù† Huawei ÙˆÙ…Ù‚ØµÙˆØ±Ø© Harmony'
      ),
      primaryLabel: t('Learn more', 'En savoir plus', 'Ø§Ø¹Ø±Ù Ø§Ù„Ù…Ø²ÙŠØ¯'),
      secondaryLabel: t('Order now', 'Commander', 'Ø§Ø·Ù„Ø¨ Ø§Ù„Ø¢Ù†'),
      primarySlug: 'newCourage.html',
      secondarySlug: 'store.html'
    }
  ],
  brandIntro: {
    title: t('Hello world, I am Voyah!', 'Bonjour le monde, je suis Voyah !', 'Ù…Ø±Ø­Ø¨Ø§Ù‹ Ø£ÙŠÙ‡Ø§ Ø§Ù„Ø¹Ø§Ù„Ù…ØŒ Ø£Ù†Ø§ Voyah!'),
    body: t(
      'A premium intelligent new-energy brand originating from Dongfeng Motor.',
      'Une marque haut de gamme de vÃ©hicules Ã  Ã©nergies nouvelles intelligents issue de Dongfeng Motor.',
      'Ø¹Ù„Ø§Ù…Ø© Ø±Ø§Ù‚ÙŠØ© Ù„Ù„Ù…Ø±ÙƒØ¨Ø§Øª Ø§Ù„Ø°ÙƒÙŠØ© Ø§Ù„Ø¹Ø§Ù…Ù„Ø© Ø¨Ø§Ù„Ø·Ø§Ù‚Ø© Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø© ØªÙ†ØªÙ…ÙŠ Ø¥Ù„Ù‰ Dongfeng Motor.'
    ),
    cta: t('Discover the brand', 'DÃ©couvrir la marque', 'Ø§ÙƒØªØ´Ù Ø§Ù„Ø¹Ù„Ø§Ù…Ø©'),
    image: '/static/assets/world-fec50d02.jpg'
  },
  modelsTitle: t('Explore Voyah models', 'Explorer les modÃ¨les Voyah', 'Ø§Ø³ØªÙƒØ´Ù Ø·Ø±Ø§Ø²Ø§Øª Voyah'),
  modelsBody: t('', '', ''),
  models: [
    {
      slug: 'titan.html',
      image: '/website/advertisingseries/image/4a4ba784-9bdc-4842-a3cf-22e2b1e46d761770618807747.jpg',
      title: t('Voyah Titan', 'Voyah Titan', 'Voyah Titan'),
      category: t(
        'A new-era flagship six-seat SUV',
        'Un SUV phare six places de nouvelle gÃ©nÃ©ration',
        'Ø³ÙŠØ§Ø±Ø© SUV Ø±Ø§Ø¦Ø¯Ø© Ø¨Ø³ØªØ© Ù…Ù‚Ø§Ø¹Ø¯ Ù…Ù† Ø§Ù„Ø¬ÙŠÙ„ Ø§Ù„Ø¬Ø¯ÙŠØ¯'
      ),
      metrics: [
        metric('5000 mm', 'Length', 'Longueur', 'Ø§Ù„Ø·ÙˆÙ„'),
        metric('1995 mm', 'Width', 'Largeur', 'Ø§Ù„Ø¹Ø±Ø¶'),
        metric('1820 mm', 'Height', 'Hauteur', 'Ø§Ù„Ø§Ø±ØªÙØ§Ø¹')
      ]
    },
    {
      slug: 'newDreamer26.html',
      image: '/website/advertisingseries/image/7ef23102-331e-418d-9139-72a7c77264011770618843718.jpg',
      title: t('26 Voyah Dreamer', 'Voyah Dreamer 26', 'Voyah Dreamer 26'),
      category: t('A new-era flagship MPV', 'Un monospace phare de nouvelle gÃ©nÃ©ration', 'Ø³ÙŠØ§Ø±Ø© MPV Ø±Ø§Ø¦Ø¯Ø© Ù…Ù† Ø§Ù„Ø¬ÙŠÙ„ Ø§Ù„Ø¬Ø¯ÙŠØ¯'),
      metrics: [
        metric('MPV', 'Body type', 'Carrosserie', 'Ù†ÙˆØ¹ Ø§Ù„Ù‡ÙŠÙƒÙ„'),
        metric('Flagship', 'Positioning', 'Positionnement', 'Ø§Ù„ÙØ¦Ø©'),
        metric('Six / seven seats', 'Seating', 'Places', 'Ø¹Ø¯Ø¯ Ø§Ù„Ù…Ù‚Ø§Ø¹Ø¯')
      ]
    },
    {
      slug: 'passion-L.html',
      image: '/website/advertisingseries/image/c6a84270-5367-4b46-9bbb-ca363039b20f1770618873239.jpg',
      title: t('Voyah Passion L', 'Voyah Passion L', 'Voyah Passion L'),
      category: t('A new-era flagship sedan', 'Une berline phare de nouvelle gÃ©nÃ©ration', 'Ø³ÙŠØ¯Ø§Ù† Ø±Ø§Ø¦Ø¯Ø© Ù…Ù† Ø§Ù„Ø¬ÙŠÙ„ Ø§Ù„Ø¬Ø¯ÙŠØ¯'),
      metrics: [
        metric('Sedan', 'Body type', 'Carrosserie', 'Ù†ÙˆØ¹ Ø§Ù„Ù‡ÙŠÙƒÙ„'),
        metric('Flagship', 'Positioning', 'Positionnement', 'Ø§Ù„ÙØ¦Ø©'),
        metric('Executive luxury', 'Experience', 'ExpÃ©rience', 'Ø§Ù„ØªØ¬Ø±Ø¨Ø©')
      ]
    },
    {
      slug: 'free+.html',
      image: '/website/advertisingseries/image/e8a95859-ce35-4110-8156-b9f6a9c3365d1770618911247.jpg',
      title: t('Voyah FREE+', 'Voyah FREE+', 'Voyah FREE+'),
      category: t(
        'SUV with Huawei intelligent driving and Harmony cockpit',
        'SUV avec conduite intelligente Huawei et cockpit Harmony',
        'Ø³ÙŠØ§Ø±Ø© SUV Ù…Ø²ÙˆØ¯Ø© Ø¨Ù‚ÙŠØ§Ø¯Ø© Ø°ÙƒÙŠØ© Ù…Ù† Huawei ÙˆÙ…Ù‚ØµÙˆØ±Ø© Harmony'
      ),
      metrics: [
        metric('SUV', 'Body type', 'Carrosserie', 'Ù†ÙˆØ¹ Ø§Ù„Ù‡ÙŠÙƒÙ„'),
        metric('Huawei ADS', 'Driving tech', 'Conduite intelligente', 'ØªÙ‚Ù†ÙŠØ© Ø§Ù„Ù‚ÙŠØ§Ø¯Ø©'),
        metric('Harmony cockpit', 'Cabin', 'Cockpit', 'Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø©')
      ]
    },
    {
      slug: 'newCourage.html',
      image: '/website/advertisingseries/image/927d6e8d-3182-420f-891e-0f47c492d9141770618945147.jpg',
      title: t('New Voyah Courage', 'Nouveau Voyah Courage', 'Voyah Courage Ø§Ù„Ø¬Ø¯ÙŠØ¯'),
      category: t(
        'Pure-electric SUV with Huawei intelligent driving and Harmony cockpit',
        'SUV 100 % Ã©lectrique avec conduite intelligente Huawei et cockpit Harmony',
        'Ø³ÙŠØ§Ø±Ø© SUV ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© Ø¨Ø§Ù„ÙƒØ§Ù…Ù„ Ù…Ø²ÙˆØ¯Ø© Ø¨Ù‚ÙŠØ§Ø¯Ø© Ø°ÙƒÙŠØ© Ù…Ù† Huawei ÙˆÙ…Ù‚ØµÙˆØ±Ø© Harmony'
      ),
      metrics: [
        metric('Pure electric', 'Powertrain', 'Motorisation', 'Ù…Ù†Ø¸ÙˆÙ…Ø© Ø§Ù„Ø­Ø±ÙƒØ©'),
        metric('Huawei ADS', 'Driving tech', 'Conduite intelligente', 'ØªÙ‚Ù†ÙŠØ© Ø§Ù„Ù‚ÙŠØ§Ø¯Ø©'),
        metric('Harmony cockpit', 'Cabin', 'Cockpit', 'Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø©')
      ]
    }
  ],
  energy: {
    title: t('Voyah Energy', 'Ã‰nergie Voyah', 'Ø·Ø§Ù‚Ø© Voyah'),
    body: t(
      'Let users enjoy the best replenishment experience with more choice, more speed, more intelligence, and more efficiency.',
      'Offrir aux utilisateurs la meilleure expÃ©rience de recharge, avec davantage de choix, de rapiditÃ©, dâ€™intelligence et dâ€™efficacitÃ©.',
      'Ø¥ØªØ§Ø­Ø© Ø£ÙØ¶Ù„ ØªØ¬Ø±Ø¨Ø© ØªØ²ÙˆÙ‘Ø¯ Ø¨Ø§Ù„Ø·Ø§Ù‚Ø© Ù„Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ†ØŒ Ø¨Ù…Ø²ÙŠØ¯ Ù…Ù† Ø§Ù„Ø®ÙŠØ§Ø±Ø§Øª ÙˆØ§Ù„Ø³Ø±Ø¹Ø© ÙˆØ§Ù„Ø°ÙƒØ§Ø¡ ÙˆØ§Ù„ÙƒÙØ§Ø¡Ø©.'
    ),
    label: t('Learn more', 'En savoir plus', 'Ø§Ø¹Ø±Ù Ø§Ù„Ù…Ø²ÙŠØ¯'),
    image: '/static/assets/energy_bg-4482e81f.jpg',
    metrics: [
      metric('1,540,000+', 'Integrated charging resources', 'Ressources de recharge intÃ©grÃ©es', 'Ù…ÙˆØ§Ø±Ø¯ Ø§Ù„Ø´Ø­Ù† Ø§Ù„Ù…Ø¯Ù…Ø¬Ø©'),
      metric('16,000+', 'Ultra-fast charging resources', 'Ressources de recharge ultra-rapide', 'Ù…ÙˆØ§Ø±Ø¯ Ø§Ù„Ø´Ø­Ù† ÙØ§Ø¦Ù‚ Ø§Ù„Ø³Ø±Ø¹Ø©'),
      metric('530,000,000+ kWh', 'Cumulative charging delivered to users', 'Recharge cumulÃ©e fournie aux utilisateurs', 'Ø¥Ø¬Ù…Ø§Ù„ÙŠ Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¡ Ø§Ù„Ù…Ø´Ø­ÙˆÙ†Ø© Ù„Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ†'),
      metric('170,000+ tons', 'Cumulative carbon reduction', 'RÃ©duction cumulÃ©e des Ã©missions de carbone', 'Ø¥Ø¬Ù…Ø§Ù„ÙŠ Ø®ÙØ¶ Ø§Ù†Ø¨Ø¹Ø§Ø«Ø§Øª Ø§Ù„ÙƒØ±Ø¨ÙˆÙ†')
    ]
  },
  technology: {
    title: t('Explore Voyah technology', 'Explorer les technologies Voyah', 'Ø§Ø³ØªÙƒØ´Ù ØªÙ‚Ù†ÙŠØ§Øª Voyah'),
    body: t(
      'Voyah is not only a pioneer among central-state enterprises on the electric track, but also a new benchmark for the transformation and upgrade of mature Chinese automakers and a successful practice of Dongfeng Motor Groupâ€™s â€œnew five modernizationsâ€: lightweighting, electrification, intelligence, connectivity, and sharing.',
      'Voyah nâ€™est pas seulement un pionnier des entreprises centrales sur la voie de lâ€™Ã©lectrique, mais aussi une nouvelle rÃ©fÃ©rence pour la transformation des constructeurs chinois matures et une concrÃ©tisation rÃ©ussie des â€œcinq nouvelles modernisationsâ€ de Dongfeng Motor Group : allÃ¨gement, Ã©lectrification, intelligence, connectivitÃ© et partage.',
      'Ù„Ø§ ØªÙØ¹Ø¯ Voyah Ù…Ø¬Ø±Ø¯ Ø±Ø§Ø¦Ø¯Ø© Ø¨ÙŠÙ† Ø§Ù„Ø´Ø±ÙƒØ§Øª Ø§Ù„Ù…Ø±ÙƒØ²ÙŠØ© Ø¹Ù„Ù‰ Ù…Ø³Ø§Ø± Ø§Ù„Ø³ÙŠØ§Ø±Ø§Øª Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ©ØŒ Ø¨Ù„ ØªÙ…Ø«Ù„ Ø£ÙŠØ¶Ø§Ù‹ Ù…Ø¹ÙŠØ§Ø±Ø§Ù‹ Ø¬Ø¯ÙŠØ¯Ø§Ù‹ Ù„ØªØ­ÙˆÙ„ Ø´Ø±ÙƒØ§Øª Ø§Ù„Ø³ÙŠØ§Ø±Ø§Øª Ø§Ù„ØµÙŠÙ†ÙŠØ© Ø§Ù„Ù†Ø§Ø¶Ø¬Ø© ÙˆØªØ­Ø¯ÙŠØ«Ù‡Ø§ØŒ ÙƒÙ…Ø§ Ø£Ù†Ù‡Ø§ ØªØ¬Ø³ÙŠØ¯ Ù†Ø§Ø¬Ø­ Ù„Ù€Â«Ø§Ù„ØªØ­ÙˆÙ„Ø§Øª Ø§Ù„Ø®Ù…Ø³Ø© Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø©Â» Ù„Ø¯Ù‰ Dongfeng Motor Group: Ø§Ù„Ø®ÙØ©ØŒ ÙˆØ§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¡ØŒ ÙˆØ§Ù„Ø°ÙƒØ§Ø¡ØŒ ÙˆØ§Ù„Ø§ØªØµØ§Ù„ØŒ ÙˆØ§Ù„Ù…Ø´Ø§Ø±ÙƒØ©.'
    ),
    tabs: [
      {
        label: t('ESSA native intelligent electric architecture', 'Architecture Ã©lectrique intelligente ESSA', 'Ù…Ù†ØµØ© ESSA Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© Ø§Ù„Ø°ÙƒÙŠØ© Ø§Ù„Ø£ØµÙ„ÙŠØ©'),
        tags: [
          t('Native intelligence', 'Intelligence native', 'Ø°ÙƒØ§Ø¡ Ø£ØµÙŠÙ„'),
          t('Ultimate safety', 'SÃ©curitÃ© ultime', 'Ø³Ù„Ø§Ù…Ø© Ù‚ØµÙˆÙ‰'),
          t('Freer control', 'ContrÃ´le fluide', 'ØªØ­ÙƒÙ… Ø£ÙƒØ«Ø± Ø­Ø±ÙŠØ©'),
          t('Full comfort', 'Confort global', 'Ø±Ø§Ø­Ø© Ø´Ø§Ù…Ù„Ø©')
        ],
        image: '/static/assets/tansuo-927d66e5.png',
        cta: t('Watch the full film', 'Voir le film complet', 'Ø´Ø§Ù‡Ø¯ Ø§Ù„ÙÙŠÙ„Ù… Ø§Ù„ÙƒØ§Ù…Ù„')
      },
      {
        label: t('Tianyuan architecture', 'Architecture Tianyuan', 'Ù…Ù†ØµØ© ØªÙŠØ§Ù†ÙŠÙˆØ§Ù†'),
        tags: [
          t('Efficient core', 'CÅ“ur efficace', 'Ù†ÙˆØ§Ø© ÙØ¹Ù‘Ø§Ù„Ø©'),
          t('Agile systems', 'SystÃ¨mes agiles', 'Ø£Ù†Ø¸Ù…Ø© Ù…Ø±Ù†Ø©'),
          t('Smart interconnection', 'Interconnexion intelligente', 'ØªØ±Ø§Ø¨Ø· Ø°ÙƒÙŠ'),
          t('Open co-creation', 'Co-crÃ©ation ouverte', 'Ø§Ø¨ØªÙƒØ§Ø± Ù…ÙØªÙˆØ­')
        ],
        image: '/static/assets/tansuo_2-8336799c.png',
        cta: t('Watch the full film', 'Voir le film complet', 'Ø´Ø§Ù‡Ø¯ Ø§Ù„ÙÙŠÙ„Ù… Ø§Ù„ÙƒØ§Ù…Ù„')
      }
    ]
  },
  service: {
    title: t('Voyah Service', 'Service Voyah', 'Ø®Ø¯Ù…Ø§Øª Voyah'),
    body: t(
      'With one sincere heart, every detail is treated sincerely; with one honest intention, every promise is fulfilled with sincerity.',
      'Avec un cÅ“ur sincÃ¨re, chaque dÃ©tail est traitÃ© avec sincÃ©ritÃ© ; avec une intention honnÃªte, chaque promesse est tenue avec sincÃ©ritÃ©.',
      'Ø¨Ù‚Ù„Ø¨ ØµØ§Ø¯Ù‚ Ù†ØªØ¹Ø§Ù…Ù„ Ø¨Ø¥Ø®Ù„Ø§Øµ Ù…Ø¹ ÙƒÙ„ ØªÙØµÙŠÙ„ØŒ ÙˆØ¨Ù†ÙŠØ© ØµØ§Ø¯Ù‚Ø© Ù†ÙÙŠ ÙƒÙ„ ÙˆØ¹Ø¯ Ø¨Ø¥Ø®Ù„Ø§Øµ.'
    ),
    cards: [
      block('/static/assets/section3_2-4fb471c7.jpg', 'Sincere reception', 'Accueil sincÃ¨re', 'Ø§Ø³ØªÙ‚Ø¨Ø§Ù„ ØµØ§Ø¯Ù‚', '', '', ''),
      block('/static/assets/section3_3-20237755.jpg', 'Ceremonial delivery', 'Livraison avec sens du rituel', 'ØªØ³Ù„ÙŠÙ… Ø¨Ø·Ø§Ø¨Ø¹ Ø§Ø­ØªÙØ§Ù„ÙŠ', '', '', ''),
      block('/static/assets/section4_1-f7cf566b.jpg', '7Ã—24-hour protection', 'Protection 7Ã—24 h', 'Ø­Ù…Ø§ÙŠØ© Ø¹Ù„Ù‰ Ù…Ø¯Ø§Ø± 7Ã—24 Ø³Ø§Ø¹Ø©', '', '', ''),
      block('/static/assets/section4_2-aa55795b.jpg', 'Professional team', 'Ã‰quipe professionnelle', 'ÙØ±ÙŠÙ‚ Ù…Ø­ØªØ±Ù', '', '', '')
    ]
  },
  community: {
    title: t('Community News', 'ActualitÃ©s de la communautÃ©', 'Ø£Ø®Ø¨Ø§Ø± Ø§Ù„Ù…Ø¬ØªÙ…Ø¹'),
    body: t(
      'Fresh stories from owners and lively conversations about life with the car.',
      'Des histoires fraÃ®ches de propriÃ©taires et des Ã©changes vivants autour de la vie avec la voiture.',
      'Ù‚ØµØµ Ø¬Ø¯ÙŠØ¯Ø© Ù…Ù† Ø§Ù„Ù…Ø§Ù„ÙƒÙŠÙ† ÙˆØ­ÙˆØ§Ø±Ø§Øª Ù…Ù…ØªØ¹Ø© Ø¹Ù† Ø§Ù„Ø­ÙŠØ§Ø© Ù…Ø¹ Ø§Ù„Ø³ÙŠØ§Ø±Ø©.'
    ),
    posts: [
      {
        image: '/static/assets/experience1-96467d92.jpg',
        title: t(
          'Owner story | Chairman Li Peng and the â€œdockside worldâ€ of 6,000 owners',
          'Histoire de propriÃ©taire | Li Peng et le Â« monde du quai Â» de 6 000 propriÃ©taires',
          'Ù‚ØµØ© Ù…Ø§Ù„Ùƒ | Ù„ÙŠ Ø¨Ù†Øº ÙˆÂ«Ø¹Ø§Ù„Ù… Ø§Ù„Ù…ÙŠÙ†Ø§Ø¡Â» Ù…Ø¹ 6000 Ù…Ù† Ø§Ù„Ù…Ø§Ù„ÙƒÙŠÙ†'
        ),
        body: t('Buying Voyah five times, bound by loyalty and friendship.', 'Cinq achats de Voyah, portÃ©s par la fidÃ©litÃ© et lâ€™amitiÃ©.', 'Ø®Ù…Ø³ Ù…Ø±Ø§Øª Ù…Ù† Ø§Ù‚ØªÙ†Ø§Ø¡ Voyah Ø¨Ø¯Ø§ÙØ¹ Ø§Ù„ÙˆÙØ§Ø¡ ÙˆØ§Ù„ØµØ¯Ø§Ù‚Ø©.'),
        slug: 'brand.html'
      },
      {
        image: '/static/assets/experience2-306e063e.jpg',
        title: t(
          'Owner story | When design aesthetics meet craftsmanship',
          'Histoire de propriÃ©taire | Quand lâ€™esthÃ©tique du design rencontre lâ€™artisanat',
          'Ù‚ØµØ© Ù…Ø§Ù„Ùƒ | Ø­ÙŠÙ† ÙŠÙ„ØªÙ‚ÙŠ Ø¬Ù…Ø§Ù„ Ø§Ù„ØªØµÙ…ÙŠÙ… Ø¨Ø±ÙˆØ­ Ø§Ù„Ø­Ø±ÙØ©'
        ),
        body: t('Liu Lingfeng and his deep resonance with three Voyah FREE models.', 'Liu Lingfeng et sa profonde rÃ©sonance avec trois Voyah FREE.', 'Ù„ÙŠÙˆ Ù„ÙŠÙ†ØºÙÙ†Øº ÙˆØ±Ø§Ø¨Ø·Ù‡ Ø§Ù„Ø¹Ù…ÙŠÙ‚ Ù…Ø¹ Ø«Ù„Ø§Ø« Ø³ÙŠØ§Ø±Ø§Øª Voyah FREE.'),
        slug: 'service.html'
      },
      {
        image: '/static/assets/experience3-a8085d28.jpg',
        title: t(
          'Owner story | The dream-chasing journey of a jewelry livestream host',
          'Histoire de propriÃ©taire | Le voyage de rÃªve dâ€™une animatrice de bijoux en direct',
          'Ù‚ØµØ© Ù…Ø§Ù„Ùƒ | Ø±Ø­Ù„Ø© Ù…Ø·Ø§Ø±Ø¯Ø© Ø§Ù„Ø£Ø­Ù„Ø§Ù… Ù„Ù…Ù‚Ø¯Ù…Ø© Ø¨Ø« Ù…Ø¨Ø§Ø´Ø± Ù„Ù„Ù…Ø¬ÙˆÙ‡Ø±Ø§Øª'
        ),
        body: t('With Voyah FREE 318 as a companion, she heads toward the road of life.', 'Avec Voyah FREE 318 comme compagnon, elle avance sur le chemin de la vie.', 'Ø¨Ø±ÙÙ‚Ø© Voyah FREE 318 ØªÙ†Ø·Ù„Ù‚ ÙÙŠ Ø±Ø­Ù„Ø© Ø§Ù„Ø­ÙŠØ§Ø©.'),
        slug: 'energy.html'
      }
    ]
  },
  footprint: {
    title: t('Leading in China, expanding globally', 'Leader en Chine, dÃ©ploiement mondial', 'Ø±ÙŠØ§Ø¯Ø© ÙÙŠ Ø§Ù„ØµÙŠÙ† ÙˆØ§Ù†ØªØ´Ø§Ø± Ø¹Ø§Ù„Ù…ÙŠ'),
    body: t(
      'The Chinese premium intelligent new-energy vehicle brand that moved from the local market to overseas markets the fastest.',
      'La marque chinoise haut de gamme de vÃ©hicules Ã  Ã©nergies nouvelles intelligents qui a rÃ©alisÃ© le passage du marchÃ© local aux marchÃ©s Ã©trangers le plus rapidement.',
      'Ø§Ù„Ø¹Ù„Ø§Ù…Ø© Ø§Ù„ØµÙŠÙ†ÙŠØ© Ø§Ù„Ø±Ø§Ù‚ÙŠØ© Ù„Ù„Ù…Ø±ÙƒØ¨Ø§Øª Ø§Ù„Ø°ÙƒÙŠØ© Ø§Ù„Ø¹Ø§Ù…Ù„Ø© Ø¨Ø§Ù„Ø·Ø§Ù‚Ø© Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø© Ø§Ù„ØªÙŠ Ø§Ù†ØªÙ‚Ù„Øª Ù…Ù† Ø§Ù„Ø³ÙˆÙ‚ Ø§Ù„Ù…Ø­Ù„ÙŠØ© Ø¥Ù„Ù‰ Ø§Ù„Ø£Ø³ÙˆØ§Ù‚ Ø§Ù„Ø®Ø§Ø±Ø¬ÙŠØ© Ø¨Ø£Ø³Ø±Ø¹ ÙˆØªÙŠØ±Ø©.'
    ),
    cta: t('Overseas website', 'Site international', 'Ø§Ù„Ù…ÙˆÙ‚Ø¹ Ø§Ù„Ø®Ø§Ø±Ø¬ÙŠ'),
    image: '/static/assets/earth_index-e4c6ae99.jpg',
    tabs: [
      {
        label: t('Europe (21)', 'Europe (21)', 'Ø£ÙˆØ±ÙˆØ¨Ø§ (21)'),
        countries: [
          t('Norway', 'NorvÃ¨ge', 'Ø§Ù„Ù†Ø±ÙˆÙŠØ¬'),
          t('Portugal', 'Portugal', 'Ø§Ù„Ø¨Ø±ØªØºØ§Ù„'),
          t('Spain', 'Espagne', 'Ø¥Ø³Ø¨Ø§Ù†ÙŠØ§'),
          t('Italy', 'Italie', 'Ø¥ÙŠØ·Ø§Ù„ÙŠØ§'),
          t('Switzerland', 'Suisse', 'Ø³ÙˆÙŠØ³Ø±Ø§'),
          t('Finland', 'Finlande', 'ÙÙ†Ù„Ù†Ø¯Ø§'),
          t('Netherlands', 'Pays-Bas', 'Ù‡ÙˆÙ„Ù†Ø¯Ø§'),
          t('Belgium', 'Belgique', 'Ø¨Ù„Ø¬ÙŠÙƒØ§'),
          t('Germany', 'Allemagne', 'Ø£Ù„Ù…Ø§Ù†ÙŠØ§'),
          t('Poland', 'Pologne', 'Ø¨ÙˆÙ„Ù†Ø¯Ø§'),
          t('Czech Republic', 'RÃ©publique tchÃ¨que', 'Ø§Ù„ØªØ´ÙŠÙƒ'),
          t('Slovakia', 'Slovaquie', 'Ø³Ù„ÙˆÙØ§quie'),
          t('Hungary', 'Hongrie', 'Ø§Ù„Ù…Ø¬Ø±'),
          t('Slovenia', 'SlovÃ©nie', 'Ø³Ù„ÙˆÙÙŠÙ†ÙŠØ§'),
          t('Bulgaria', 'Bulgarie', 'Ø¨Ù„ØºØ§Ø±ÙŠØ§'),
          t('Latvia', 'Lettonie', 'Ù„Ø§ØªÙÙŠØ§'),
          t('Estonia', 'Estonie', 'Ø¥Ø³ØªÙˆÙ†ÙŠØ§'),
          t('Lithuania', 'Lituanie', 'Ù„ÙŠØªÙˆØ§Ù†ÙŠØ§'),
          t('Moldova', 'Moldavie', 'Ù…ÙˆÙ„Ø¯ÙˆÙØ§'),
          t('Bosnia and Herzegovina', 'Bosnie-HerzÃ©govine', 'Ø§Ù„Ø¨ÙˆØ³Ù†Ø© ÙˆØ§Ù„Ù‡Ø±Ø³Ùƒ'),
          t('Greece', 'GrÃ¨ce', 'Ø§Ù„ÙŠÙˆÙ†Ø§Ù†')
        ]
      },
      {
        label: t('Middle East (7)', 'Moyen-Orient (7)', 'Ø§Ù„Ø´Ø±Ù‚ Ø§Ù„Ø£ÙˆØ³Ø· (7)'),
        countries: [
          t('United Arab Emirates', 'Ã‰mirats arabes unis', 'Ø§Ù„Ø¥Ù…Ø§Ø±Ø§Øª Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ù…ØªØ­Ø¯Ø©'),
          t('Qatar', 'Qatar', 'Ù‚Ø·Ø±'),
          t('Saudi Arabia', 'Arabie saoudite', 'Ø§Ù„Ù…Ù…Ù„ÙƒØ© Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©'),
          t('Oman', 'Oman', 'Ø¹ÙÙ…Ø§Ù†'),
          t('Kuwait', 'KoweÃ¯t', 'Ø§Ù„ÙƒÙˆÙŠØª'),
          t('Bahrain', 'BahreÃ¯n', 'Ø§Ù„Ø¨Ø­Ø±ÙŠÙ†'),
          t('Jordan', 'Jordanie', 'Ø§Ù„Ø£Ø±Ø¯Ù†')
        ]
      },
      {
        label: t('Africa (2)', 'Afrique (2)', 'Ø£ÙØ±ÙŠÙ‚ÙŠØ§ (2)'),
        countries: [
          t('Egypt', 'Ã‰gypte', 'Ù…ØµØ±'),
          t('Angola', 'Angola', 'Ø£Ù†ØºÙˆÙ„Ø§')
        ]
      },
      {
        label: t('Americas (3)', 'AmÃ©riques (3)', 'Ø§Ù„Ø£Ù…Ø±ÙŠÙƒØªØ§Ù† (3)'),
        countries: [
          t('Panama', 'Panama', 'Ø¨Ù†Ù…Ø§'),
          t('Colombia', 'Colombie', 'ÙƒÙˆÙ„ÙˆÙ…Ø¨ÙŠØ§'),
          t('Costa Rica', 'Costa Rica', 'ÙƒÙˆØ³ØªØ§Ø±ÙŠÙƒØ§')
        ]
      },
      {
        label: t('Asia (9)', 'Asie (9)', 'Ø¢Ø³ÙŠØ§ (9)'),
        countries: [
          t('China', 'Chine', 'Ø§Ù„ØµÙŠÙ†'),
          t('Azerbaijan', 'AzerbaÃ¯djan', 'Ø£Ø°Ø±Ø¨ÙŠØ¬Ø§Ù†'),
          t('Uzbekistan', 'OuzbÃ©kistan', 'Ø£ÙˆØ²Ø¨ÙƒØ³ØªØ§Ù†'),
          t('Kazakhstan', 'Kazakhstan', 'ÙƒØ§Ø²Ø§Ø®Ø³ØªØ§Ù†'),
          t('Turkmenistan', 'TurkmÃ©nistan', 'ØªØ±ÙƒÙ…Ø§Ù†Ø³ØªØ§Ù†'),
          t('Armenia', 'ArmÃ©nie', 'Ø£Ø±Ù…ÙŠÙ†ÙŠØ§'),
          t('Myanmar', 'Myanmar', 'Ù…ÙŠØ§Ù†Ù…Ø§Ø±'),
          t('Laos', 'Laos', 'Ù„Ø§ÙˆØ³'),
          t('Cambodia', 'Cambodge', 'ÙƒÙ…Ø¨ÙˆØ¯ÙŠØ§')
        ]
      }
    ]
  }
}

export const footerColumns: FooterColumn[] = [
  {
    title: t('Models', 'ModÃ¨les', 'Ø§Ù„Ø·Ø±Ø§Ø²Ø§Øª'),
    links: [
      { label: t('Voyah Passion L', 'Voyah Passion L', 'Voyah Passion L'), slug: 'passion-L.html' },
      { label: t('Voyah Titan', 'Voyah Titan', 'Voyah Titan'), slug: 'titan.html' },
      { label: t('Voyah FREE+', 'Voyah FREE+', 'Voyah FREE+'), slug: 'free+.html' },
      { label: t('26 Voyah Dreamer', 'Voyah Dreamer 26', 'Voyah Dreamer 26'), slug: 'newDreamer26.html' }
    ]
  },
  {
    title: t('Services', 'Services', 'Ø§Ù„Ø®Ø¯Ù…Ø§Øª'),
    links: [
      { label: t('Store center', 'Centre de magasins', 'Ù…Ø±ÙƒØ² Ø§Ù„Ù…Ø¹Ø§Ø±Ø¶'), slug: 'store.html' },
      { label: t('Voyah Service', 'Service Voyah', 'Ø®Ø¯Ù…Ø§Øª Voyah'), slug: 'service.html' },
      { label: t('Voyah Energy', 'Ã‰nergie Voyah', 'Ø·Ø§Ù‚Ø© Voyah'), slug: 'energy.html' },
      { label: t('Downloads', 'TÃ©lÃ©chargements', 'Ø§Ù„ØªÙ†Ø²ÙŠÙ„Ø§Øª'), slug: 'document.html' }
    ]
  },
  {
    title: t('About', 'Ã€ propos', 'Ø¹Ù†'),
    links: [
      { label: t('Brand', 'Marque', 'Ø§Ù„Ø¹Ù„Ø§Ù…Ø©'), slug: 'brand.html' },
      { label: t('Corporate', 'Entreprise', 'Ø§Ù„Ù…Ø¤Ø³Ø³Ø©'), slug: 'corporate.html' },
      { label: t('Join Us', 'Rejoignez-nous', 'Ø§Ù†Ø¶Ù… Ø¥Ù„ÙŠÙ†Ø§'), slug: 'joinus.html' },
      { label: t('Investor Relations', 'Relations investisseurs', 'Ø¹Ù„Ø§Ù‚Ø§Øª Ø§Ù„Ù…Ø³ØªØ«Ù…Ø±ÙŠÙ†'), slug: 'ir.html' }
    ]
  }
]

export const footerLegalLinks = [
  { label: t('Legal', 'Mentions lÃ©gales', 'Ø§Ù„Ø´Ø¤ÙˆÙ† Ø§Ù„Ù‚Ø§Ù†ÙˆÙ†ÙŠØ©'), slug: 'legal.html' },
  { label: t('Privacy', 'ConfidentialitÃ©', 'Ø§Ù„Ø®ØµÙˆØµÙŠØ©'), slug: 'privacy.html' },
  { label: t('Cookies', 'Cookies', 'Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø·'), slug: 'cookie.html' },
  { label: t('Authorization', 'Autorisation', 'Ø§Ù„ØªÙÙˆÙŠØ¶'), slug: 'authorization.html' }
]

export const footerContact: FooterContact = {
  title: t('Stay connected with Voyah', 'Restez connectÃ© Ã  Voyah', 'Ø§Ø¨Ù‚ÙŽ Ø¹Ù„Ù‰ ØªÙˆØ§ØµÙ„ Ù…Ø¹ Voyah'),
  body: t('Scan the local app and mini-program codes to continue the experience through digital channels.', 'Scannez les codes de lâ€™application et du mini-programme pour prolonger lâ€™expÃ©rience via les canaux numÃ©riques.', 'Ø§Ù…Ø³Ø­ Ø±Ù…ÙˆØ² Ø§Ù„ØªØ·Ø¨ÙŠÙ‚ ÙˆØ§Ù„Ø¨Ø±Ù†Ø§Ù…Ø¬ Ø§Ù„Ù…ØµØºØ± Ù„Ù…ØªØ§Ø¨Ø¹Ø© Ø§Ù„ØªØ¬Ø±Ø¨Ø© Ø¹Ø¨Ø± Ø§Ù„Ù‚Ù†ÙˆØ§Øª Ø§Ù„Ø±Ù‚Ù…ÙŠØ©.'),
  appCode: '/static/assets/app_code_160-5b2a34cc.png',
  miniProgramCode: '/static/assets/xcx_code_160-73cf3be6.png'
}

export const localize = (text: LocalizedText, locale: LocaleCode): string => text[locale] ?? text.en

export const findLocale = (code?: string) => locales.find((locale) => locale.code === code)

export const resolvePage = (slug?: string): SitePage | undefined => (slug ? sitePageMap.get(slug) : undefined)





