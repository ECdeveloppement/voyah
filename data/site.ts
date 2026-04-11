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
  heroVideo?: string
  heroLogo?: string
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

const modelFeatureOverrides: Record<string, LocalizedText[]> = {
  'titan.html': [
    t('Winged welcome', 'Accueil à ailes', 'ترحيب جناحي'),
    t('Smart entry lighting', 'Éclairage d’entrée intelligent', 'إضاءة دخول ذكية'),
    t('Quiet cabin luxury', 'Luxe d’habitacle silencieux', 'فخامة مقصورة هادئة')
  ],
  'newDreamer26.html': [
    t('Ceremonial MPV presence', 'Présence MPV cérémonielle', 'حضور MPV احتفالي'),
    t('AI cloud-seat comfort', 'Confort des sièges cloud IA', 'راحة المقاعد السحابية الذكية'),
    t('Executive hospitality', 'Hospitalité exécutive', 'ضيافة تنفيذية')
  ],
  'passion-L.html': [
    t('Oriental flagship aesthetics', 'Esthétique phare orientale', 'جماليات شرقية رائدة'),
    t('All-dimensional comfort cabin', 'Habitacle confort intégral', 'مقصورة راحة شاملة'),
    t('HarmonySpace cockpit', 'Cockpit HarmonySpace', 'مقصورة HarmonySpace')
  ],
  'passion.html': [
    t('Streamlined sedan stance', 'Posture berline élancée', 'هيئة سيدان انسيابية'),
    t('Executive digital cabin', 'Habitacle numérique exécutif', 'مقصورة رقمية تنفيذية'),
    t('Composed touring comfort', 'Confort grand tourisme', 'راحة رحلات طويلة')
  ],
  'titan_blackedition.html': [
    t('Black flagship styling', 'Style phare noir', 'تصميم رائد أسود'),
    t('Dark premium cabin', 'Habitacle premium sombre', 'مقصورة فاخرة داكنة'),
    t('Stealth confidence', 'Confiance furtive', 'ثقة هادئة')
  ],
  'titan_X8.html': [
    t('Expanded family SUV', 'SUV familial étendu', 'SUV عائلية موسعة'),
    t('Three-row usability', 'Polyvalence trois rangs', 'عملية بثلاثة صفوف'),
    t('Long-trip confidence', 'Confiance longue distance', 'ثقة الرحلات الطويلة')
  ],
  'free+.html': [
    t('Urban light-and-shadow aesthetics', 'Esthétique urbaine d’ombres et de lumière', 'جماليات الضوء والظل الحضرية'),
    t('Free Cabin 2.0', 'Habitacle Free 2.0', 'مقصورة Free 2.0'),
    t('HarmonySpace 5 cockpit', 'Cockpit HarmonySpace 5', 'مقصورة HarmonySpace 5')
  ],
  'free.html': [
    t('Long-range crossover stance', 'Posture crossover longue autonomie', 'حضور كروس أوفر بعيد المدى'),
    t('Touring cabin comfort', 'Confort de voyage', 'راحة السفر'),
    t('Daily versatility', 'Polyvalence quotidienne', 'تنوع يومي')
  ],
  'newCourage.html': [
    t('Original aesthetics design', 'Design esthétique original', 'تصميم جمالي أصلي'),
    t('Electric power at full scale', 'Puissance électrique à pleine échelle', 'طاقة كهربائية كاملة'),
    t('Smart family cockpit', 'Cockpit familial intelligent', 'مقصورة عائلية ذكية')
  ],
  'newDreamer.html': [
    t('Panoramic luxury exterior', 'Extérieur luxe panoramique', 'خارجية فاخرة بانورامية'),
    t('Executive lounge cabin', 'Habitacle salon exécutif', 'مقصورة صالون تنفيذي'),
    t('Harmony intelligent travel', 'Voyage intelligent Harmony', 'سفر ذكي Harmony')
  ],
  'dreamer-champion.html': [
    t('Champion edition presence', 'Présence d’édition Champion', 'حضور إصدار Champion'),
    t('Executive lounge comfort', 'Confort lounge exécutif', 'راحة صالون تنفيذي'),
    t('Curated premium hospitality', 'Hospitalité premium soignée', 'ضيافة فاخرة منتقاة')
  ],
  'dreamriver.html': [
    t('Scenic edition presence', 'Présence d’édition panoramique', 'حضور إصدار مشهدي'),
    t('Warm lounge cabin', 'Cabine salon chaleureuse', 'مقصورة صالون دافئة'),
    t('Shared journey calm', 'Sérénité de voyage', 'هدوء السفر')
  ],
  'dreamer.html': [
    t('Luxury MPV presence', 'Présence MPV de luxe', 'حضور MPV فاخرة'),
    t('Rear cabin comfort', 'Confort arrière', 'راحة الصف الخلفي'),
    t('Smart family cockpit', 'Cockpit familial intelligent', 'مقصورة عائلية ذكية')
  ],
  'courage.html': [
    t('Original aesthetics design', 'Design esthétique original', 'تصميم جمالي أصلي'),
    t('Electric range and efficiency', 'Autonomie et efficience électriques', 'مدى وكفاءة كهربائية'),
    t('Family comfort cockpit', 'Cockpit confort familial', 'مقصورة راحة عائلية')
  ]
}

const modelFeatureBodyOverrides: Record<string, LocalizedText[]> = {
  'titan.html': [
    t(
      'Titan starts with a ceremonial welcome and winged hardware details that make the flagship feel instantly special.',
      'Titan s’ouvre par un accueil cérémoniel et des détails matériels à ailes déployées qui rendent ce flagship immédiatement distinctif.',
      'تبدأ Titan بترحيب احتفالي وتفاصيل جناحية تجعل الإحساس الرائد مميزًا منذ اللحظة الأولى.'
    ),
    t(
      'Projection lighting, smart entry scenes, and electric steering memory lift the interaction flow into a more executive tone.',
      'L’éclairage de projection, les scènes d’entrée intelligentes et la mémoire de direction électrique élèvent l’expérience vers un ton plus exécutif.',
      'ترفع إضاءة العرض ومشاهد الدخول الذكية وذاكرة التوجيه الكهربائية التجربة إلى طابع تنفيذي أكثر.'
    ),
    t(
      'Quiet-cabin tuning, immersive sound, and privacy features complete the Titan story with calm luxury.',
      'Le réglage de l’habitacle silencieux, le son immersif et les fonctions d’intimité complètent l’histoire Titan avec une luxe apaisé.',
      'تُكمل معايرة المقصورة الهادئة والصوت الغامر وميزات الخصوصية قصة Titan بفخامة هادئة.'
    )
  ],
  'newDreamer26.html': [
    t(
      'Dreamer 26 presents a ceremonial MPV presence with lounge-like proportions and a premium family-first identity.',
      'Dreamer 26 présente une présence MPV cérémonielle, des proportions façon salon et une identité premium centrée sur la famille.',
      'تقدم Dreamer 26 حضور MPV احتفاليًا وتناسبات بطابع الصالون وهوية فاخرة تركز على العائلة.'
    ),
    t(
      'Fast charging and long-range composure keep large-cabin travel calm and effortless.',
      'La charge rapide et la sérénité longue distance rendent le voyage dans le grand habitacle calme et sans effort.',
      'يجعل الشحن السريع والاتزان في المدى الطويل السفر داخل المقصورة الكبيرة هادئًا وسهلًا.'
    ),
    t(
      'Huawei Qiankun driving, Harmony cockpit integration, and AI interaction turn the cabin into an executive lounge.',
      'La conduite Huawei Qiankun, l’intégration du cockpit Harmony et l’interaction IA transforment l’habitacle en salon exécutif.',
      'تحول قيادة Huawei Qiankun وتكامل مقصورة Harmony وتفاعل الذكاء الاصطناعي المقصورة إلى صالون تنفيذي.'
    )
  ],
  'passion-L.html': [
    t(
      'Passion L brings ceremonial front graphics and an elongated sedan stance into a composed executive look.',
      'Passion L associe une face avant cérémonielle et une posture de berline allongée pour créer une allure exécutive posée.',
      'تجمع Passion L بين الواجهة الاحتفالية وهيئة السيدان الطويلة لإظهار حضور تنفيذي متزن.'
    ),
    t(
      'The long-wheelbase cabin emphasizes rear comfort, calm seating, and premium space for both driver and passengers.',
      'L’habitacle à empattement long met l’accent sur le confort arrière, la sérénité des sièges et l’espace premium pour le conducteur comme pour les passagers.',
      'تركز المقصورة ذات قاعدة العجلات الطويلة على راحة الخلف، وهدوء المقاعد، والمساحة الفاخرة للسائق والركاب.'
    ),
    t(
      'HarmonySpace centers the digital cockpit with a clear display, seamless ecosystem flow, and calmer interaction.',
      'HarmonySpace place le cockpit numérique au centre avec un affichage clair, un écosystème fluide et une interaction plus apaisée.',
      'تضع HarmonySpace المقصورة الرقمية في المركز عبر شاشة واضحة وتدفق بيئي سلس وتفاعل أكثر هدوءًا.'
    )
  ],
  'passion.html': [
    t(
      'Passion brings a cleaner sedan silhouette and a more restrained premium tone into the model page rhythm.',
      'Passion apporte une silhouette de berline plus pure et un ton premium plus retenu dans le rythme de la page modèle.',
      'تجلب Passion هيئة سيدان أنقى ونبرة فاخرة أكثر هدوءًا إلى إيقاع صفحة الطراز.'
    ),
    t(
      'The digital cabin keeps the route focused on a calm executive feel with everyday comfort and connected control.',
      'L’habitacle numérique maintient le parcours sur une sensation exécutive calme avec confort quotidien et contrôle connecté.',
      'تحافظ المقصورة الرقمية على مسار هادئ بطابع تنفيذي مع راحة يومية وتحكم متصل.'
    ),
    t(
      'Touring composure, chassis tuning, and long-distance confidence complete the sedan with a quieter luxury message.',
      'La sérénité de grand tourisme, le réglage châssis et la confiance longue distance complètent la berline avec un message de luxe plus discret.',
      'تُكمل الثقة في الرحلات الطويلة ومعايرة الهيكل وهدوء السفر هذه السيدان برسالة فخامة أكثر هدوءًا.'
    )
  ],
  'titan_blackedition.html': [
    t(
      'The Black Edition route begins with darker exterior graphics and a more dramatic flagship posture.',
      'Le parcours Black Edition commence avec des graphismes extérieurs plus sombres et une posture phare plus dramatique.',
      'يبدأ مسار Black Edition برسومات خارجية أكثر قتامة وحضور رائد أكثر درامية.'
    ),
    t(
      'Premium dark materials and a restrained cabin mood keep the edition aligned with a stealth-luxury identity.',
      'Des matériaux sombres premium et une ambiance cabine retenue maintiennent l’édition dans une identité de luxe furtif.',
      'تحافظ الخامات الداكنة الفاخرة وأجواء المقصورة الهادئة على هوية الفخامة الهادئة لهذه النسخة.'
    ),
    t(
      'Assisted driving and safety structure finish the page as a complete Titan-family flagship, not a style package.',
      'La conduite assistée et la structure de sécurité concluent la page comme un vrai flagship de la famille Titan, pas comme un simple pack stylistique.',
      'تختتم القيادة المساعدة وبنية السلامة الصفحة بوصفها طرازًا رائدًا كاملًا لعائلة Titan لا مجرد حزمة مظهر.'
    )
  ],
  'titan_X8.html': [
    t(
      'Titan X8 starts with a larger family SUV statement and a practical three-row presence.',
      'Titan X8 commence par une déclaration de grand SUV familial et une présence pratique à trois rangs.',
      'يبدأ Titan X8 بحضور SUV عائلية أكبر وتوزيع عملي بثلاثة صفوف.'
    ),
    t(
      'The cabin chapter emphasizes access, space, and comfort for real multi-person travel.',
      'Le chapitre habitacle met l’accent sur l’accès, l’espace et le confort pour les vrais trajets à plusieurs.',
      'يركز فصل المقصورة على سهولة الدخول والمساحة والراحة لرحلات متعددة الركاب.'
    ),
    t(
      'Road-trip composure and safety close the route with the same flagship confidence as the wider Titan family.',
      'La sérénité sur route et la sécurité referment le parcours avec la même assurance phare que la famille Titan élargie.',
      'تغلق الثقة في الرحلات الطويلة والسلامة المسار بنفس الثقة الرائدة لعائلة Titan الأوسع.'
    )
  ],
  'free+.html': [
    t(
      'FREE+ frames its identity through urban light-and-shadow aesthetics, athletic SUV proportions, and a sharper premium presence for city life.',
      'FREE+ affirme son identité par une esthétique urbaine d’ombres et de lumière, des proportions de SUV athlétiques et une présence premium plus affûtée pour la ville.',
      'ترسم FREE+ هويتها عبر جماليات الضوء والظل الحضرية وتناسبات SUV الرياضية وحضور فاخر أوضح للحياة المدنية.'
    ),
    t(
      'Free Cabin 2.0 focuses on openness, seating comfort, and practical room for daily use while preserving a premium digital character.',
      'Free Cabin 2.0 met l’accent sur l’ouverture, le confort d’assise et l’espace pratique au quotidien tout en conservant un caractère numérique premium.',
      'تركز Free Cabin 2.0 على الانفتاح وراحة المقاعد والمساحة العملية للاستخدام اليومي مع الحفاظ على طابع رقمي فاخر.'
    ),
    t(
      'HarmonySpace 5 extends the intelligent cockpit experience with a clearer interface, connected assistance, and a more natural urban rhythm.',
      'HarmonySpace 5 prolonge l’expérience du cockpit intelligent grâce à une interface plus claire, une assistance connectée et un rythme urbain plus naturel.',
      'توسع HarmonySpace 5 تجربة المقصورة الذكية عبر واجهة أوضح ومساعدة متصلة وإيقاع حضري أكثر طبيعية.'
    )
  ],
  'free.html': [
    t(
      'FREE 318 opens with long-range crossover character and a calmer touring stance.',
      'FREE 318 s’ouvre sur un caractère de crossover longue autonomie et une posture de voyage plus calme.',
      'تبدأ FREE 318 بطابع كروس أوفر بعيد المدى وحضور سفر أكثر هدوءًا.'
    ),
    t(
      'The comfort chapter leans into relaxed seating, elevated visibility, and everyday usability.',
      'Le chapitre confort met l’accent sur des sièges détendus, une visibilité surélevée et une vraie praticité au quotidien.',
      'يركز فصل الراحة على الجلسة المريحة والرؤية المرتفعة والعملية اليومية.'
    ),
    t(
      'The model closes with practical premium confidence that keeps the page feeling like a real touring crossover.',
      'Le modèle se conclut par une confiance premium pragmatique qui conserve à la page l’allure d’un vrai crossover de voyage.',
      'يُختتم الطراز بثقة عملية فاخرة تجعل الصفحة تبدو كأنها صفحة كروس أوفر للرحلات فعلًا.'
    )
  ],
  'newCourage.html': [
    t(
      'The new Courage starts with original aesthetics and a cleaner urban SUV language built around family warmth.',
      'Le nouveau Courage commence par une esthétique originale et un langage de SUV urbain plus pur, pensé autour de la chaleur familiale.',
      'تبدأ Courage الجديدة بجماليات أصلية ولغة SUV حضرية أنقى مبنية حول دفء العائلة.'
    ),
    t(
      'It becomes an efficient electric home through long range, a large battery pack, and 800V architecture.',
      'Elle devient un foyer électrique efficient grâce à une grande autonomie, une batterie de forte capacité et une architecture 800V.',
      'وتصبح منزلًا كهربائيًا فعّالًا بفضل المدى الطويل وحزمة البطارية الكبيرة وبنية 800V.'
    ),
    t(
      'A smart family cockpit comes from digital screens, Harmony audio, and expressive in-cabin lighting.',
      'Un cockpit familial intelligent naît des écrans numériques, de l’audio Harmony et d’un éclairage expressif dans l’habitacle.',
      'تنبع المقصورة العائلية الذكية من الشاشات الرقمية وصوت Harmony والإضاءة المعبرة داخل المقصورة.'
    )
  ],
  'newDreamer.html': [
    t(
      'Panoramic luxury design frames Dreamer with a flagship MPV presence and an executive-scale body.',
      'Le design de luxe panoramique encadre Dreamer avec une présence MPV phare et une carrosserie à l’échelle exécutive.',
      'يؤطر التصميم الفاخر البانورامي Dreamer بحضور MPV رائد وهيكل بحجم تنفيذي.'
    ),
    t(
      'The executive lounge cabin focuses on rear comfort, seat engineering, and calm long-distance travel.',
      'L’habitacle salon exécutif met l’accent sur le confort arrière, l’ingénierie des sièges et la sérénité longue distance.',
      'تركز مقصورة الصالون التنفيذي على راحة الخلف وهندسة المقاعد وهدوء الرحلات الطويلة.'
    ),
    t(
      'Harmony intelligent travel connects the smart cockpit, family convenience, and premium hospitality into one flow.',
      'Le voyage intelligent Harmony relie le cockpit intelligent, la praticité familiale et l’hospitalité premium dans un même ensemble.',
      'يربط السفر الذكي Harmony المقصورة الذكية والراحة العائلية والضيافة الفاخرة في تدفق واحد.'
    )
  ],
  'dreamer-champion.html': [
    t(
      'Dreamer Champion opens with a more ceremonial MPV identity and stronger special-edition presence than the standard Dreamer range.',
      'Dreamer Champion s’ouvre sur une identité de MPV plus cérémonielle et une présence d’édition spéciale plus affirmée que la gamme Dreamer standard.',
      'تبدأ Dreamer Champion بهوية MPV أكثر احتفالية وحضور إصدار خاص أقوى من مجموعة Dreamer القياسية.'
    ),
    t(
      'Its second-row hospitality, quieter lounge atmosphere, and curated trim details make the cabin feel more executive and more exclusive.',
      'Son hospitalité au deuxième rang, son ambiance lounge plus silencieuse et ses détails de finition choisis rendent l’habitacle plus exécutif et plus exclusif.',
      'تجعل ضيافة الصف الثاني وأجواء الصالون الأكثر هدوءًا وتفاصيل الخامات المنتقاة المقصورة أكثر تنفيذية وأكثر خصوصية.'
    ),
    t(
      'The route closes with a more curated premium-hospitality tone, keeping Dreamer Champion distinct from the regular Dreamer family pages.',
      'Le parcours se conclut sur une tonalité d’hospitalité premium plus soignée, afin de distinguer Dreamer Champion des pages Dreamer classiques.',
      'يختتم المسار بنبرة ضيافة فاخرة أكثر عناية بما يبقي Dreamer Champion مختلفة عن صفحات Dreamer العادية.'
    )
  ],
  'dreamriver.html': [
    t(
      'Dreamer Mountain River presents a scenic MPV expression with hospitality-first styling.',
      'Dreamer Mountain River présente une expression MPV panoramique au style centré sur l’hospitalité.',
      'تقدم Dreamer Mountain River تعبير MPV مشهديًا بطابع يركز على الضيافة.'
    ),
    t(
      'The lounge-like cabin keeps the route warm and family-friendly without losing premium calm.',
      'L’habitacle façon salon garde le parcours chaleureux et familial sans perdre le calme premium.',
      'تحافظ المقصورة بطابع الصالون على دفء المسار وروحه العائلية من دون فقدان الهدوء الفاخر.'
    ),
    t(
      'Shared travel comfort and safety complete the special-edition story with a polished, scenic tone.',
      'Le confort de voyage partagé et la sécurité concluent l’histoire de l’édition spéciale avec un ton soigné et panoramique.',
      'يكمل السفر المشترك المريح والسلامة قصة النسخة الخاصة بنبرة مصقولة ومشهدية.'
    )
  ],
  'dreamer.html': [
    t(
      'Dreamer opens with a luxury MPV presence and a family-first silhouette.',
      'Dreamer s’ouvre sur une présence MPV de luxe et une silhouette centrée sur la famille.',
      'تبدأ Dreamer بحضور MPV فاخر وهيئة موجهة للعائلة.'
    ),
    t(
      'Rear cabin comfort and lounge seating drive the middle of the route with a calmer executive rhythm.',
      'Le confort arrière et les sièges façon salon portent le milieu du parcours avec un rythme exécutif plus calme.',
      'تقود راحة الصف الخلفي ومقاعد الصالون منتصف المسار بإيقاع تنفيذي أكثر هدوءًا.'
    ),
    t(
      'The page closes on smart-family convenience and reassuring safety to keep the MPV story complete.',
      'La page se conclut sur la praticité familiale intelligente et une sécurité rassurante pour garder l’histoire MPV complète.',
      'تختتم الصفحة بالعملية العائلية الذكية والسلامة المطمئنة لإبقاء قصة MPV متكاملة.'
    )
  ],
  'courage.html': [
    t(
      'Original aesthetics design frames Courage with a cleaner electric-SUV silhouette and a warmer family tone.',
      'Le design esthétique original cadre Courage avec une silhouette de SUV électrique plus pure et un ton familial plus chaleureux.',
      'يؤطر التصميم الجمالي الأصلي Courage بهيئة SUV كهربائية أنقى وطابع عائلي أكثر دفئًا.'
    ),
    t(
      'Electric range and efficiency keep the route calm, practical, and ready for everyday travel.',
      'L’autonomie et l’efficience électriques rendent le trajet calme, pratique et prêt pour un usage quotidien.',
      'يحافظ المدى والكفاءة الكهربائية على تنقل هادئ وعملي وجاهز للاستخدام اليومي.'
    ),
    t(
      'The family comfort cockpit adds digital screens, Harmony audio, and expressive in-cabin lighting for a more lively mood.',
      'Le cockpit confort familial ajoute des écrans numériques, l’audio Harmony et un éclairage expressif pour une ambiance plus vivante.',
      'تضيف المقصورة العائلية المريحة شاشات رقمية وصوت Harmony وإضاءة معبرة لجو أكثر حيوية.'
    )
  ]
}

const makeModel = (options: {
  slug: string
  title: LocalizedText
  subtitle: LocalizedText
  description: LocalizedText
  price: LocalizedText
  heroImage: string
  heroVideo?: string
  heroLogo?: string
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

    const titles = modelFeatureOverrides[options.slug] ?? (isMpv
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
          ])

    const bodies = modelFeatureBodyOverrides[options.slug] ?? [
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
  ctaPrimary: t('Order now', 'Commander maintenant', 'اطلب الآن'),
  ctaSecondary: t('Configuration list', 'Liste des configurations', 'قائمة التجهيزات'),
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
      { label: t('Voyah Dreamer Champion', 'Voyah Dreamer Champion', 'Voyah Dreamer Champion'), slug: 'dreamer-champion.html', thumb: '/voyah-resources/images/car/car_logo/dreamer-champion.png' },
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
    subtitle: t('New-era flagship sedan', 'Berline phare de nouvelle génération', 'سيدان رائدة من الجيل الجديد'),
    description: t('Starting from RMB 279,900.', 'À partir de 279 900 RMB.', 'السعر يبدأ من 279,900 يوان'),
    price: t('Starting from RMB 279,900', 'À partir de 279 900 RMB', 'السعر يبدأ من 279,900 يوان'),
    heroImage: '/voyah-resources/images/car/passion-L/1920/sc_1.jpg',
    logo: '/voyah-resources/images/car/car_logo/passion-L.png',
    gallery: [
      '/voyah-resources/images/car/passion-L/1920/sc_10.jpg',
      '/voyah-resources/images/car/passion-L/1920/sc_24.jpg',
      '/voyah-resources/images/car/passion-L/1920/sc_39.jpg'
    ],
    metrics: [
      metric('Sedan', 'Body type', 'Carrosserie', 'نوع الهيكل'),
      metric('Flagship', 'Positioning', 'Positionnement', 'الفئة'),
      metric('Executive luxury', 'Experience', 'Expérience', 'التجربة')
    ]
  }),
  makeModel({
    slug: 'passion.html',
    title: t('Voyah Passion', 'Voyah Passion', 'Voyah Passion'),
    subtitle: t('Performance electric sedan', 'Berline électrique performante', 'سيدان كهربائية عالية الأداء'),
    description: t('A sleek electric sedan pairing decisive proportions, a quieter executive cabin, and composed grand-touring confidence.', 'Une berline électrique élancée qui associe des proportions affirmées, un habitacle exécutif plus silencieux et une assurance de grand tourisme maîtrisée.', 'سيدان كهربائية أنيقة تجمع بين التناسق الجريء والمقصورة التنفيذية الأكثر هدوءًا وثقة السفر الطويل المتزنة.'),
    price: t('Executive performance sedan', 'Berline exécutive performante', 'سيدان تنفيذية عالية الأداء'),
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
    subtitle: t('New-era flagship six-seat SUV', 'SUV phare à six places de nouvelle génération', 'سيارة SUV رائدة بستة مقاعد من الجيل الجديد'),
    description: t('Starting from RMB 379,900.', 'À partir de 379 900 RMB.', 'السعر يبدأ من 379,900 يوان'),
    price: t('Starting from RMB 379,900', 'À partir de 379 900 RMB', 'السعر يبدأ من 379,900 يوان'),
    heroImage: '/voyah-resources/images/car/titan/1920/sc_1.jpg',
    logo: '/voyah-resources/images/car/car_logo/titan.png',
    gallery: [
      '/voyah-resources/images/car/titan/1920/sc_18.jpg',
      '/voyah-resources/images/car/titan/1920/sc_22.jpg',
      '/voyah-resources/images/car/titan/1920/sc_30.jpg'
    ],
    metrics: [
      metric('2.87X', 'Length-height ratio', 'Rapport longueur/hauteur', 'نسبة الطول إلى الارتفاع'),
      metric('2.25X', 'Wheel-height ratio', 'Rapport roue/hauteur', 'نسبة العجلة إلى الارتفاع'),
      metric('59.68%', 'Front nose ratio', 'Rapport du nez avant', 'نسبة المقدمة الأمامية')
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
      '/voyah-resources/images/car/titan_blackedition/1920/sc_21_1.jpg',
      '/voyah-resources/images/car/titan_blackedition/1920/sc_23_1.jpg'
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
    subtitle: t('Expanded flagship family SUV', 'SUV familial phare étendu', 'SUV عائلية رائدة موسعة'),
    description: t('A Titan derivative tuned for more generous multi-row practicality, calmer family comfort, and long-range travel confidence.', 'Une déclinaison de Titan pensée pour une praticité multirang plus généreuse, un confort familial plus serein et une meilleure assurance sur longue distance.', 'نسخة من Titan مهيأة لعملية أكبر عبر الصفوف المتعددة وراحة عائلية أكثر هدوءًا وثقة أكبر في الرحلات الطويلة.'),
    price: t('Expanded family flagship', 'Flagship familial étendu', 'رائدة عائلية موسعة'),
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
    subtitle: t('Premium intelligent SUV', 'SUV premium intelligente', 'سيارة SUV ذكية فاخرة'),
    description: t('A premium urban SUV with expressive light-and-shadow design, a more refined cabin, and Huawei intelligent driving.', 'Un SUV urbain premium au design d’ombres et de lumière, à l’habitacle plus raffiné et à la conduite intelligente Huawei.', 'سيارة SUV حضرية فاخرة بتصميم ضوء وظل مع مقصورة أكثر تنقيحًا وقيادة ذكية من Huawei.'),
    price: t('Premium intelligent SUV', 'SUV premium intelligente', 'سيارة SUV ذكية فاخرة'),
    heroImage: '/voyah-resources/images/car/free+/kv_1920.png',
    heroVideo: '/voyah-resources/images/car/free+/video_01_20250712.mp4',
    logo: '/voyah-resources/images/car/car_logo/free+.png',
    gallery: [
      '/voyah-resources/images/car/free+/img_03_1920.png',
      '/voyah-resources/images/car/free+/img_25_1920.png',
      '/voyah-resources/images/car/free+/img_42_1920.png'
    ],
    metrics: [
      metric('Urban design', 'Design', 'Design', 'التصميم'),
      metric('Harmony cockpit', 'Cabin', 'Habitacle', 'المقصورة'),
      metric('ADS 4', 'Driving tech', 'Conduite intelligente', 'تقنية القيادة')
    ]
  }),
  makeModel({
    slug: 'free.html',
    title: t('Voyah FREE 318', 'Voyah FREE 318', 'Voyah FREE 318'),
    subtitle: t('Long-range premium crossover', 'Crossover premium longue autonomie', 'كروس أوفر فاخر بعيد المدى'),
    description: t('A long-range crossover with relaxed touring comfort, a calmer smart cockpit, and premium everyday versatility.', 'Un crossover longue autonomie avec confort de voyage apaisé, cockpit intelligent plus serein et polyvalence premium au quotidien.', 'كروس أوفر بعيد المدى يجمع بين راحة السفر الهادئة والمقصورة الذكية الأكثر سكينة والتنوع الفاخر اليومي.'),
    price: t('Long-range premium crossover', 'Crossover premium longue autonomie', 'كروس أوفر فاخر بعيد المدى'),
    heroImage: '/voyah-resources/images/car/free/kv_1920.png',
    logo: '/voyah-resources/images/car/car_logo/free.png',
    gallery: [
      '/voyah-resources/images/car/free/bg-free-h97D-5.jpg',
      '/voyah-resources/images/car/free/bg-free-h97D-9.jpg',
      '/voyah-resources/images/car/free/bg-free-h97D-12.jpg'
    ],
    metrics: [
      metric('Touring comfort', 'Long-route feel', 'Confort longue route', 'راحة السفر'),
      metric('High seating', 'Driving position', 'Position de conduite', 'وضعية القيادة'),
      metric('Practical luxury', 'Daily use', 'Usage quotidien', 'الاستخدام اليومي')
    ]
  }),
  makeModel({
    slug: 'newCourage.html',
    title: t('New Voyah Courage', 'Nouveau Voyah Courage', 'Voyah Courage الجديد'),
    subtitle: t('New luxury pure-electric SUV', 'Nouveau SUV de luxe 100 % électrique', 'سيارة SUV كهربائية فاخرة جديدة'),
    description: t('A new-generation pure-electric SUV with a warm family cabin, long range, and Huawei intelligent driving.', 'Un SUV 100 % électrique de nouvelle génération avec habitacle familial chaleureux, grande autonomie et conduite intelligente Huawei.', 'سيارة SUV كهربائية بالكامل من الجيل الجديد بمقصورة عائلية دافئة ومدى طويل وقيادة ذكية من Huawei.'),
    price: t('New luxury pure-electric SUV', 'Nouveau SUV de luxe 100 % électrique', 'سيارة SUV كهربائية فاخرة جديدة'),
    heroImage: '/voyah-resources/images/car/newCourage/1920/sc_1.jpg',
    logo: '/voyah-resources/images/car/car_logo/newCourage.png',
    gallery: [
      '/voyah-resources/images/car/newCourage/1920/sc_10.jpg',
      '/voyah-resources/images/car/newCourage/1920/sc_12.jpg',
      '/voyah-resources/images/car/newCourage/1920/sc_18.jpg'
    ],
    metrics: [
      metric('Pure electric', 'Powertrain', 'Motorisation', 'منظومة الحركة'),
      metric('Huawei ADS', 'Driving tech', 'Conduite intelligente', 'تقنية القيادة'),
      metric('Harmony cockpit', 'Cabin', 'Cockpit', 'المقصورة')
    ]
  }),
  makeModel({
    slug: 'courage.html',
    title: t('Voyah Courage', 'Voyah Courage', 'Voyah Courage'),
    subtitle: t('Luxury pure-electric family SUV', 'SUV familial de luxe 100 % électrique', 'سيارة SUV عائلية كهربائية فاخرة'),
    description: t('A full-electric SUV focused on expressive design, practical family comfort, and everyday long-range confidence.', 'Un SUV électrique centré sur un design expressif, un confort familial pratique et une confiance d’autonomie au quotidien.', 'سيارة SUV كهربائية بالكامل تركز على التصميم التعبيري والراحة العائلية العملية والثقة في المدى اليومي الطويل.'),
    price: t('Luxury pure-electric family SUV', 'SUV familial de luxe 100 % électrique', 'سيارة SUV عائلية كهربائية فاخرة'),
    heroImage: '/voyah-resources/images/car/courage/1920/h37_pc01_0001.jpg',
    logo: '/voyah-resources/images/car/car_logo/courage.png',
    gallery: [
      '/voyah-resources/images/car/courage/1920/h37_pc03_0001.jpg',
      '/voyah-resources/images/car/courage/1920/h37_pc04_0001.jpg',
      '/voyah-resources/images/car/courage/1920/h37_pc06_0001.jpg'
    ],
    metrics: [
      metric('901 km', 'Electric range', 'Autonomie électrique', 'مدى القيادة'),
      metric('109 kWh', 'Battery', 'Batterie', 'البطارية'),
      metric('800 V', 'Platform', 'Plateforme', 'المنصة')
    ]
  }),
  makeModel({
    slug: 'newDreamer26.html',
    title: t('26 Voyah Dreamer', 'Voyah Dreamer 26', 'Voyah Dreamer 26'),
    subtitle: t('A new-era flagship MPV', 'Monospace phare de nouvelle génération', 'سيارة MPV رائدة من الجيل الجديد'),
    description: t('A new-generation Dreamer with lounge-like comfort, refined long-distance composure, and premium family focus.', 'Une nouvelle génération Dreamer avec un confort de salon, une grande sérénité sur longue distance et une vocation familiale premium.', 'الجيل الجديد من Dreamer يوفر راحة شبيهة بالصالون وثباتاً راقياً في الرحلات الطويلة وتركيزاً عائلياً فاخراً.'),
    price: t('A new-era flagship MPV', 'Monospace phare de nouvelle génération', 'سيارة MPV رائدة من الجيل الجديد'),
    heroImage: '/voyah-resources/images/car/newDreamer26/kv_1920.jpg',
    logo: '/voyah-resources/images/car/car_logo/newDreamer26.png',
    gallery: [
      '/voyah-resources/images/car/newDreamer26/sc_10.jpg',
      '/voyah-resources/images/car/newDreamer26/sc_20.jpg',
      '/voyah-resources/images/car/newDreamer26/sc_24.jpg'
    ],
    metrics: [
      metric('MPV', 'Body type', 'Carrosserie', 'نوع الهيكل'),
      metric('Flagship', 'Positioning', 'Positionnement', 'الفئة'),
      metric('Six / seven seats', 'Seating', 'Places', 'عدد المقاعد')
    ]
  }),
  makeModel({
    slug: 'dreamer-champion.html',
    title: t('Voyah Dreamer Champion', 'Voyah Dreamer Champion', 'Voyah Dreamer Champion'),
    subtitle: t('Special-edition flagship MPV', 'MPV phare en édition spéciale', 'سيارة MPV رائدة بإصدار خاص'),
    description: t('A special Dreamer expression with ceremonial presence, executive lounge comfort, and a more curated premium hospitality tone.', 'Une expression spéciale de Dreamer avec présence cérémonielle, confort de salon exécutif et tonalité d’hospitalité premium plus soignée.', 'نسخة خاصة من Dreamer بحضور احتفالي وراحة صالون تنفيذي ونبرة ضيافة فاخرة أكثر عناية.'),
    price: t('Champion special edition', 'Édition spéciale Champion', 'إصدار Champion الخاص'),
    heroImage: '/voyah-resources/images/car/dreamer-champion/kv_0408_1920.jpg',
    logo: '/voyah-resources/images/car/car_logo/dreamer-champion.png',
    gallery: [
      '/voyah-resources/images/car/dreamer-champion/bg_12_n_banner01.jpg',
      '/voyah-resources/images/car/dreamer-champion/bg_16_n_banner01.jpg',
      '/voyah-resources/images/car/dreamer-champion/bg_24_n_banner01.jpg'
    ],
    metrics: [
      metric('Special edition', 'Series', 'Série', 'السلسلة'),
      metric('Executive MPV', 'Positioning', 'Positionnement', 'الفئة'),
      metric('Ceremonial comfort', 'Cabin mood', 'Ambiance intérieure', 'أجواء المقصورة')
    ]
  }),
  makeModel({
    slug: 'newDreamer.html',
    title: t('25 Voyah Dreamer', 'Voyah Dreamer 25', 'Voyah Dreamer 25'),
    subtitle: t('Panoramic luxury technology flagship MPV', 'Monospace phare technologique de luxe panoramique', 'MPV رائدة تجمع بين الفخامة والتقنية البانورامية'),
    description: t('A panoramic luxury flagship MPV with premium comfort, intelligent cabin tech, and long-distance composure.', 'Un MPV phare de luxe panoramique avec confort premium, technologie d’habitacle intelligente et sérénité longue distance.', 'سيارة MPV رائدة فاخرة بانورامية مع راحة فاخرة وتقنية مقصورة ذكية وثبات في الرحلات الطويلة.'),
    price: t('Starting from RMB 329,900', 'À partir de 329 900 RMB', 'السعر يبدأ من 329,900 يوان'),
    heroImage: '/voyah-resources/images/car/newDreamer/h56c_pc08_banner01.jpg',
    logo: '/voyah-resources/images/car/car_logo/newDreamer.png',
    gallery: [
      '/voyah-resources/images/car/newDreamer/h56c_pc08_banner01.jpg',
      '/voyah-resources/images/car/newDreamer/bg_7_n_1920.jpg',
      '/voyah-resources/images/car/newDreamer/h56c_pc20_bg.jpg'
    ],
    metrics: [
      metric('MPV', 'Body type', 'Carrosserie', 'نوع الهيكل'),
      metric('Flagship', 'Positioning', 'Positionnement', 'الفئة'),
      metric('Seven seats', 'Seating', 'Places', 'عدد المقاعد')
    ]
  }),
  makeModel({
    slug: 'dreamriver.html',
    title: t('Voyah Dreamer Mountain River', 'Voyah Dreamer Montagne-Rivière', 'Voyah Dreamer Mountain River'),
    subtitle: t('Scenic travel expression', 'Expression du voyage panoramique', 'طابع السفر المشهدي'),
    description: t('A special Dreamer expression emphasizing serene scenery, warm hospitality, and elegant multi-person travel.', 'Une interprétation spéciale de Dreamer axée sur le paysage, l’accueil chaleureux et l?élégance des voyages à plusieurs.', 'نسخة خاصة من Dreamer تركز على المشهد الهادئ والضيافة الدافئة وأناقة السفر الجماعي.'),
    price: t('Special edition MPV', 'Édition spéciale MPV', 'MPV إصدار خاص'),
    heroImage: '/voyah-resources/images/car/dreamriver/kv_1920.png',
    logo: '/voyah-resources/images/car/car_logo/dreamriver.png',
    gallery: [
      '/voyah-resources/images/car/dreamriver/sc_2.png',
      '/voyah-resources/images/car/dreamriver/sc_6-2.png',
      '/voyah-resources/images/car/dreamriver/sc_10.png'
    ],
    metrics: [
      metric('Scenic theme', 'Edition theme', 'Thème de l?édition', 'طابع الإصدار'),
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
      '/voyah-resources/images/car/dreamer/bg_swiper_10_1.jpg',
      '/voyah-resources/images/car/dreamer/bg_swiper_22_1.jpg',
      '/voyah-resources/images/car/dreamer/bg_swiper_27_1.jpg'
    ],
    metrics: [
      metric('Three-row comfort', 'Space', 'Espace', 'المساحة'),
      metric('Family calm', 'Travel atmosphere', 'Ambiance de voyage', 'أجواء الرحلة'),
      metric('Electric luxury', 'Power theme', 'Motorisation', 'المنظومة')
    ]
  }),
  makeModel({
    slug: 'titan_ultra.html',
    title: t('Titan Ultra (2026)', 'Titan Ultra (2026)', 'تيتان ألترا (2026)'),
    subtitle: t('L3 Autonomous Roadmap', 'Feuille de route L3 Autonome', 'مخطط القيادة الذاتية L3'),
    description: t('Future L3 autonomous driving flagship.', 'Le futur vaisseau amiral de la conduite autonome L3.', 'رائدة القيادة الذاتية L3 المستقبلية.'),
    price: t('Coming 2026', 'Prévu pour 2026', 'قادم في 2026'),
    heroImage: '/voyah-resources/models/titan_ultra_hero.jpg',
    logo: '/voyah-resources/models/titan_ultra_logo.png',
    gallery: [],
    metrics: []
  }),
  makeModel({
    slug: 'everest.html',
    title: t('Everest (2026)', 'Everest (2026)', 'إيفرست (2026)'),
    subtitle: t('Next-gen flagship', 'Vaisseau amiral de nouvelle génération', 'رائدة الجيل القادم'),
    description: t('The pinnacle of Voyah innovation.', 'Le sommet de l\'innovation Voyah.', 'قمة ابتكار فوييا.'),
    price: t('Coming 2026', 'Prévu pour 2026', 'قادم في 2026'),
    heroImage: '/voyah-resources/models/everest_hero.jpg',
    logo: '/voyah-resources/models/everest_logo.png',
    gallery: [],
    metrics: []
  })
]

const infoPages: InfoDefinition[] = [
  {
    kind: 'info',
    slug: 'brand.html',
    eyebrow: t('Brand story', 'Histoire de la marque', 'قصة العلامة'),
    title: t('Hello world, I am Voyah!', 'Bonjour le monde, je suis Voyah !', 'مرحباً أيها العالم، أنا Voyah!'),
    summary: t(
      'As a premium brand rooted in Chinese culture, Voyah blends Chinese elegance with modern technology. Under the promise of "Intelligent Voyah, Creating Happiness," Voyah works with the new-generation backbone of society to pursue a better life.',
      'En tant que marque premium enracinée dans la culture chinoise, Voyah associe l’élégance chinoise à la technologie moderne. Sous la promesse de "Voyah intelligente, créer le bonheur", Voyah avance avec la nouvelle génération de forces vives de la société pour poursuivre une vie meilleure.',
      'بصفتها علامة راقية متجذرة في الثقافة الصينية، تمزج Voyah بين الأناقة الصينية والتكنولوجيا الحديثة. وضمن وعد "Voyah الذكية، تصنع السعادة"، تسير مع الجيل الجديد من القوى الفاعلة في المجتمع نحو حياة أفضل.'
    ),
    heroImage: '/assets/voyah/home-image-1.jpg',
    blocks: [
      block('/assets/voyah/home-image-2.jpg', 'Brand story', 'Histoire de la marque', 'قصة العلامة', 'Voyah is a premium brand rooted in Chinese culture and defined by Chinese elegance and modern technology.', 'Voyah est une marque premium enracinée dans la culture chinoise et définie par l’élégance chinoise et la technologie moderne.', 'Voyah علامة راقية متجذرة في الثقافة الصينية وتقوم على الأناقة الصينية والتكنولوجيا الحديثة.'),
      block('/assets/voyah/home-image-3.png', 'Design philosophy', 'Philosophie de design', 'فلسفة التصميم', 'A calm, flowing form language that balances warmth, confidence, and forward motion.', 'Un langage formel fluide et apaisé qui équilibre chaleur, assurance et élan vers l’avant.', 'لغة تصميم هادئة وانسيابية توازن بين الدفء والثقة والحركة إلى الأمام.'),
      block('/assets/voyah/home-image-4.png', 'Technology philosophy', 'Philosophie technologique', 'فلسفة التكنولوجيا', 'Warm technology, human-centered interaction, and intelligent systems work together for a premium experience.', 'La technologie chaleureuse, l’interaction centrée sur l’humain et les systèmes intelligents travaillent ensemble pour une expérience premium.', 'تعمل التكنولوجيا الودية والتفاعل المتمحور حول الإنسان والأنظمة الذكية معاً لتقديم تجربة راقية.'),
      block('/assets/voyah/home-image-5.png', 'ESSA architecture', 'Architecture ESSA', 'منصة ESSA', 'The native intelligent electric architecture brings extreme safety, intuitive control, and all-round comfort.', 'L’architecture électrique intelligente native apporte une sécurité extrême, une maîtrise intuitive et un confort global.', 'توفر المنصة الكهربائية الذكية الأصلية سلامة قصوى وتحكماً بديهياً وراحة شاملة.'),
      block('/assets/voyah/home-image-1.jpg', 'Voyah Power', 'Voyah Power', 'Voyah Power', 'A native multi-power technology platform built for power, efficiency, battery safety, and smoothness.', 'Une plateforme technologique multi-énergie native conçue pour la puissance, l’efficacité, la sécurité batterie et la douceur.', 'منصة تقنية متعددة الطاقة أصلية تجمع بين القوة والكفاءة وسلامة البطارية والنعومة.')
    ]
  },
  {
    kind: 'info',
    slug: 'store.html',
    eyebrow: t('Store center', 'Centre de magasins', 'مركز المعارض'),
    title: t('Store Center', 'Centre de magasins', 'مركز المعارض'),
    summary: t('Find Voyah spaces, full-function user centers, delivery centers, and service centers near you.', 'Trouvez les espaces Voyah, centres utilisateurs à service complet, centres de livraison et centres de service près de chez vous.', 'اعثر على مساحات Voyah ومراكز المستخدمين متكاملة الوظائف ومراكز التسليم ومراكز الخدمة القريبة منك.'),
    heroImage: '/assets/voyah/home-image-6.png',
    metrics: [
      metric('Retail', 'Experience type', 'Type d’expérience', 'نوع التجربة'),
      metric('1 journey', 'Service flow', 'Parcours de service', 'مسار الخدمة'),
      metric('User center', 'Ownership touchpoint', 'Point de contact', 'نقطة التواصل')
    ],
    blocks: [
      block('/assets/voyah/home-image-7.jpg', 'Voyah Space and full-function user center', 'Espace Voyah et centre utilisateur à service complet', 'مساحة Voyah ومركز المستخدم متكامل الوظائف', 'Voyah retail spaces combine consultation, experience, booking, and delivery support in one premium environment.', 'Les espaces de vente Voyah réunissent conseil, expérience, réservation et accompagnement à la livraison dans un même environnement premium.', 'تجمع مساحات Voyah بين الاستشارة والتجربة والحجز ودعم التسليم في بيئة فاخرة واحدة.'),
      block('/assets/voyah/home-image-8.png', 'Model discovery and test-drive coordination', 'Découverte des modèles et coordination des essais', 'اكتشاف الطرازات وتنسيق تجربة القيادة', 'The store route helps users move from first contact to test-drive confidence through a calm, guided experience.', 'Le parcours en magasin aide l’utilisateur à passer du premier contact à la confiance de l’essai grâce à une expérience calme et guidée.', 'يساعد المسار داخل المعرض المستخدم على الانتقال من أول تواصل إلى الثقة في تجربة القيادة عبر تجربة هادئة وموجهة.'),
      block('/assets/voyah/home-image-9.png', 'Ordering, delivery, and ownership onboarding', 'Commande, livraison et prise en main de la possession', 'الطلب والتسليم والتهيئة للملكية', 'Ordering support, delivery preparation, and digital onboarding extend the premium experience beyond the visit.', 'L’accompagnement à la commande, la préparation à la livraison et l’intégration numérique prolongent l’expérience premium au-delà de la visite.', 'يمد دعم الطلب وتجهيز التسليم والتهيئة الرقمية التجربة الفاخرة إلى ما بعد الزيارة.'),
      block('/assets/voyah/home-image-10.png', 'Service reception and aftersales coordination', 'Accueil service et coordination après-vente', 'الاستقبال الخدمي وتنسيق ما بعد البيع', 'Service appointments, handoffs, and follow-up are coordinated so that support feels consistent at every touchpoint.', 'Les rendez-vous service, la remise du véhicule et le suivi sont coordonnés afin que l’assistance reste cohérente à chaque point de contact.', 'تُنسَّق مواعيد الخدمة وتسليم السيارة والمتابعة بحيث تبدو المساندة متسقة عبر كل نقطة تواصل.')
    ],
    ctaLabel: t('Book a visit', 'Réserver une visite', 'احجز زيارة'),
    ctaSlug: 'book-drive.html'
  },
  {
    kind: 'info',
    slug: 'service.html',
    eyebrow: t('Service', 'Service', 'الخدمة'),
    title: t('Voyah Service', 'Service Voyah', 'خدمات Voyah'),
    summary: t('You are responsible for free pursuit of dreams; Voyah is responsible for attentive protection.', 'Vous êtes responsable de la poursuite libre des rêves; Voyah est responsable d’une protection attentive.', 'أنت مسؤول عن السعي الحر وراء الأحلام، وVoyah مسؤولة عن الحماية الدقيقة.'),
    heroImage: '/assets/voyah/home-image-7.jpg',
    blocks: [
      block('/assets/voyah/home-image-11.jpg', 'Sincere reception', 'Accueil sincère', 'استقبال صادق', 'Every detail is treated with sincerity.', 'Chaque détail est traité avec sincérité.', 'يُعامل كل تفصيل بإخلاص.'),
      block('/assets/voyah/home-image-12.jpg', 'Ceremonial delivery', 'Livraison cérémonielle', 'تسليم احتفالي', 'Every promise is honored with ceremony.', 'Chaque promesse est honorée avec cérémonie.', 'يُوفى بكل وعد بطابع احتفالي.'),
      block('/assets/voyah/home-image-13.jpg', '7×24-hour protection', 'Protection 7×24 h', 'حماية على مدار 7×24 ساعة', 'Voyah stands guard for every journey around the clock.', 'Voyah veille sur chaque trajet jour et nuit.', 'تظل Voyah في خدمة كل رحلة على مدار الساعة.'),
      block('/assets/voyah/home-image-14.jpg', 'Professional team', 'Équipe professionnelle', 'فريق محترف', 'A trustworthy full-journey service experience.', 'Une expérience de service complète et digne de confiance.', 'تجربة خدمة موثوقة على امتداد الرحلة.')
    ]
  },
  {
    kind: 'info',
    slug: 'energy.html',
    eyebrow: t('Energy', 'Énergie', 'الطاقة'),
    title: t('Voyah Energy', 'Énergie Voyah', 'طاقة Voyah'),
    summary: t(
      'A connected energy ecosystem combining charging access, route intelligence, and long-distance confidence.',
      'Un écosystème énergie connecté qui combine l’accès à la recharge, l’intelligence d’itinéraire et la confiance sur longue distance.',
      'منظومة طاقة مترابطة تجمع بين الوصول إلى الشحن وذكاء المسار والثقة في الرحلات الطويلة.'
    ),
    heroImage: '/assets/voyah/home-image-15.jpg',
    metrics: [
      metric('1,540,000+', 'Integrated charging resources', 'Ressources de recharge intégrées', 'موارد الشحن المدمجة'),
      metric('16,000+', 'Ultra-fast charging resources', 'Ressources de recharge ultra-rapide', 'موارد الشحن فائق السرعة'),
      metric('530,000,000+ kWh', 'Cumulative charging delivered', 'Recharge cumulée fournie', 'إجمالي الطاقة المشحونة'),
      metric('170,000+ tons', 'Cumulative carbon reduction', 'Réduction carbone cumulée', 'إجمالي خفض انبعاثات الكربون')
    ],
    blocks: [
      block('/assets/voyah/home-image-15.jpg', 'Network collaboration', 'Collaboration réseau', 'تكامل الشبكة', 'Voyah Energy links brand, partner, and public charging infrastructure into one coordinated user-facing network.', 'Voyah Energy relie les infrastructures de recharge de la marque, des partenaires et du réseau public dans un même système coordonné.', 'تربط طاقة Voyah بين بنية الشحن التابعة للعلامة والشركاء والشبكة العامة ضمن نظام موحد ومنسق.'),
      block('/assets/voyah/home-image-16.png', 'Fast replenishment', 'Recharge rapide', 'إعادة شحن سريعة', 'High-power charging scenarios are optimized for both daily commutes and long-distance travel rhythms.', 'Les scénarios de recharge haute puissance sont optimisés pour les trajets quotidiens comme pour les longues distances.', 'تم تحسين سيناريوهات الشحن عالي القدرة لتناسب التنقل اليومي والرحلات الطويلة.'),
      block('/assets/voyah/home-image-17.png', 'Smart route planning', 'Planification intelligente', 'تخطيط ذكي للمسار', 'Digital guidance helps users plan charging stops based on route length, station availability, and vehicle status.', 'Le guidage numérique aide à planifier les arrêts de recharge selon la distance, la disponibilité des stations et l’état du véhicule.', 'يساعد الإرشاد الرقمي على تخطيط محطات الشحن وفق طول المسار وتوفر المحطات وحالة المركبة.'),
      block('/assets/voyah/home-image-18.png', 'Long-term sustainability', 'Durabilité long terme', 'استدامة طويلة المدى', 'The energy platform supports efficient operation and contributes to measurable long-term carbon reduction outcomes.', 'La plateforme énergétique soutient une exploitation efficace et contribue à des résultats mesurables de réduction carbone.', 'تدعم منصة الطاقة التشغيل الفعال وتسهم في نتائج قابلة للقياس لخفض الانبعاثات على المدى الطويل.')
    ]
  },
  {
    kind: 'info',
    slug: 'corporate.html',
    eyebrow: t('About Voyah', 'À propos de Voyah', 'عن Voyah'),
    title: t('Corporate Culture', 'Culture d’entreprise', 'الثقافة المؤسسية'),
    summary: t('Voyah is committed to becoming a user-oriented technology company and a trusted Chinese premium intelligent new-energy vehicle brand.', 'Voyah s’engage à devenir une entreprise technologique orientée utilisateur et une marque chinoise premium de véhicules intelligents à énergie nouvelle digne de confiance.', 'تلتزم Voyah بأن تصبح شركة تقنية موجهة للمستخدم وعلامة صينية راقية موثوقة في المركبات الذكية العاملة بالطاقة الجديدة.'),
    heroImage: '/assets/voyah/home-image-19.png',
    blocks: [
      block('/assets/voyah/home-image-20.jpg', 'Mission', 'Mission', 'المهمة', 'Voyah is committed to becoming a user-oriented technology company.', 'Voyah s’engage à devenir une entreprise technologique orientée utilisateur.', 'تلتزم Voyah بأن تصبح شركة تقنية موجهة للمستخدم.'),
      block('/assets/voyah/home-image-21.png', 'Vision', 'Vision', 'الرؤية', 'A trusted Chinese premium intelligent new-energy vehicle brand.', 'Une marque chinoise premium de véhicules intelligents à énergie nouvelle digne de confiance.', 'علامة صينية راقية موثوقة في المركبات الذكية العاملة بالطاقة الجديدة.'),
      block('/assets/voyah/home-image-22.png', 'Core values', 'Valeurs fondamentales', 'القيم الأساسية', 'Responsibility, sincerity, quality, and continuous refinement.', 'Responsabilité, sincérité, qualité et amélioration continue.', 'المسؤولية والصدق والجودة والتحسين المستمر.'),
      block('/assets/voyah/home-image-23.png', 'Technology philosophy', 'Philosophie technologique', 'فلسفة التكنولوجيا', 'Architecture, intelligence, safety, and efficiency as one connected system.', 'Architecture, intelligence, sécurité et efficacité dans un seul système connecté.', 'البنية والذكاء والسلامة والكفاءة ضمن منظومة مترابطة واحدة.'),
      block('/assets/voyah/home-image-24.png', 'User value orientation', 'Orientation vers la valeur utilisateur', 'توجه القيمة للمستخدم', 'Decisions guided by long-term user value.', 'Des décisions guidées par la valeur utilisateur à long terme.', 'قرارات تسترشد بالقيمة طويلة الأمد للمستخدم.'),
      block('/assets/voyah/home-image-25.png', 'China-rooted, globally aware', 'Ancrée en Chine, ouverte au monde', 'متجذرة في الصين ومنفتحة عالمياً', 'A clear global outlook in product, technology, and service standards.', 'Une ouverture internationale nette dans les standards produit, technologiques et de service.', 'رؤية عالمية واضحة في معايير المنتج والتقنية والخدمة.')
    ]
  },
  {
    kind: 'info',
    slug: 'joinus.html',
    eyebrow: t('Careers', 'Carrières', 'الوظائف'),
    title: t('Join Us', 'Rejoignez-nous', 'انضم إلينا'),
    summary: t(
      'We look forward to your joining so that we can build the blueprint together.',
      'Nous attendons votre arrivée pour construire ensemble le plan d’avenir.',
      'نتطلع إلى انضمامك حتى نبني معاً المخطط المستقبلي.'
    ),
    heroImage: '/assets/voyah/home-image-26.png',
    blocks: [
      block(
        '/assets/voyah/home-image-27.png',
        'Campus recruitment',
        'Recrutement campus',
        'التوظيف الجامعي',
        'Campus recruitment paths for young talent in engineering, design, digital systems, and user-facing roles.',
        'Des parcours de recrutement campus pour les jeunes talents en ingénierie, design, systèmes numériques et métiers orientés utilisateur.',
        'مسارات التوظيف الجامعي تستهدف المواهب الشابة في الهندسة والتصميم والأنظمة الرقمية والأدوار المواجهة للمستخدم.'
      ),
      block(
        '/assets/voyah/home-image-28.png',
        'Social recruitment',
        'Recrutement externe',
        'التوظيف من السوق',
        'Experienced talent for product, manufacturing, digital, and service roles.',
        'Des talents expérimentés pour les métiers du produit, de l’industrie, du numérique et du service.',
        'مواهب ذات خبرة في أدوار المنتج والتصنيع والرقمنة والخدمة.'
      ),
      block(
        '/assets/voyah/home-image-29.jpg',
        'Scan to join the Voyah family',
        'Scanner pour rejoindre la famille Voyah',
        'امسح للانضمام إلى عائلة Voyah',
        'Recruitment information and role matching are organized for prospective candidates.',
        'L’information de recrutement et l’adéquation des postes sont organisées pour les candidats.',
        'تُنظم معلومات التوظيف ومواءمة الأدوار للمرشحين المحتملين.'
      )
    ]
  },
  {
    kind: 'info',
    slug: 'recruit-partners.html',
    eyebrow: t('Partners', 'Partenaires', 'الشركاء'),
    title: t('Partner Recruitment', 'Recrutement de partenaires', 'استقطاب الشركاء'),
    summary: t('Build broader user reach through retail, delivery, and service collaboration.', 'Développez une portée utilisateur plus large grâce à la collaboration retail, livraison et service.', 'ابنوا نطاق وصول أوسع إلى المستخدمين عبر التعاون في البيع والتسليم والخدمة.'),
    heroImage: '/assets/voyah/home-image-30.png',
    blocks: [
      block('/assets/voyah/home-image-31.jpg', 'Network development', 'Développement du réseau', 'تطوير الشبكة', 'Partner recruitment is positioned around long-term market development, regional coverage, and a consistent user experience across retail and service touchpoints.', 'Le recrutement de partenaires est pensé autour du développement de marché à long terme, de la couverture régionale et d’une expérience utilisateur cohérente à travers les points de vente et de service.', 'يتمحور استقطاب الشركاء حول تطوير السوق على المدى الطويل والتغطية الإقليمية وتقديم تجربة مستخدم متسقة عبر نقاط البيع والخدمة.'),
      block('/assets/voyah/home-image-32.png', 'Capability requirements', 'Exigences de capacité', 'متطلبات القدرات', 'Operational readiness, service capability, and premium brand presentation are the core standards in partner evaluation and onboarding.', 'La préparation opérationnelle, la capacité de service et la présentation premium de la marque constituent les principaux standards de l’évaluation et de l’intégration des partenaires.', 'تمثل الجاهزية التشغيلية والقدرة الخدمية وتقديم العلامة بصورة فاخرة المعايير الأساسية في تقييم الشركاء وضمهم.'),
      block('/assets/voyah/home-image-33.jpg', 'Shared growth', 'Croissance partagée', 'النمو المشترك', 'The cooperation model emphasizes durable capability building and shared growth rather than short-term channel expansion alone.', 'Le modèle de coopération privilégie la construction durable des capacités et la croissance partagée plutôt qu’une expansion de canal à court terme.', 'يركز نموذج التعاون على بناء القدرات بصورة مستدامة وتحقيق نمو مشترك بدلاً من الاكتفاء بتوسيع القنوات على المدى القصير.'),
    ]
  },
  {
    kind: 'info',
    slug: 'ir.html',
    eyebrow: t('Investor relations', 'Relations investisseurs', 'علاقات المستثمرين'),
    title: t('Investor Relations', 'Relations investisseurs', 'علاقات المستثمرين'),
    summary: t('Access company information, governance materials, and investor-facing reference documents.', 'Accédez aux informations de l’entreprise, aux documents de gouvernance et aux supports de référence destinés aux investisseurs.', 'اطلع على معلومات الشركة ومواد الحوكمة والمستندات المرجعية الموجهة إلى المستثمرين.'),
    heroImage: '/assets/voyah/home-image-34.png',
    blocks: [
      block('/assets/voyah/home-image-35.png', 'Company profile', 'Profil de l’entreprise', 'الملف التعريفي للشركة', 'Core company profile materials are organized for structured review so that investors can quickly understand the company, its positioning, and its strategic direction.', 'Les principaux documents de présentation de l’entreprise sont organisés pour une lecture structurée afin que les investisseurs comprennent rapidement la société, son positionnement et sa direction stratégique.', 'نُظمت مواد الملف التعريفي الأساسية بصورة منظمة كي يتمكن المستثمرون من فهم الشركة وتموضعها واتجاهها الاستراتيجي بسرعة.'),
      block('/assets/voyah/home-image-36.png', 'Governance structure', 'Structure de gouvernance', 'هيكل الحوكمة', 'Governance information clarifies the company’s institutional structure, oversight framework, and operating principles for long-term development.', 'Les informations de gouvernance clarifient la structure institutionnelle de l’entreprise, son cadre de supervision et ses principes de fonctionnement au service du développement de long terme.', 'توضح معلومات الحوكمة الهيكل المؤسسي للشركة وإطار الرقابة ومبادئ التشغيل الداعمة للتطور طويل المدى.'),
      block('/assets/voyah/home-image-37.png', 'Reference materials', 'Documents de référence', 'مواد مرجعية', 'Supporting materials provide additional context for financial review, governance understanding, and strategic reference.', 'Les documents complémentaires apportent un contexte additionnel pour l’analyse financière, la compréhension de la gouvernance et la référence stratégique.', 'توفر المواد الداعمة سياقاً إضافياً للمراجعة المالية وفهم الحوكمة والرجوع إلى التوجهات الاستراتيجية.'),
    ]
  },
  {
    kind: 'info',
    slug: 'environmental.html',
    eyebrow: t('Environmental disclosure', 'Informations environnementales', 'الإفصاح البيئي'),
    title: t('Environmental Disclosure', 'Informations environnementales', 'الإفصاح البيئي'),
    summary: t('View official environmental disclosure information released by Voyah for public review.', 'Consultez les informations environnementales officielles publiées par Voyah à destination du public.', 'اطلع على معلومات الإفصاح البيئي الرسمية التي تنشرها Voyah للمراجعة العامة.'),
    heroImage: '/assets/voyah/home-image-1.jpg',
    blocks: [
      block('/assets/voyah/home-image-38.jpg', 'Environmental disclosure information', 'Informations d’ordre environnemental', 'معلومات الإفصاح البيئي', 'This section centralizes the official environmental disclosure information released by Voyah for public reference and review.', 'Cette section centralise les informations officielles d’ordre environnemental publiées par Voyah pour la consultation publique.', 'يعمل هذا القسم على تجميع معلومات الإفصاح البيئي الرسمية الصادرة عن Voyah لغايات المراجعة والاطلاع العام.'),
      block('/assets/voyah/home-image-17.png', 'Operational responsibility', 'Responsabilité opérationnelle', 'المسؤولية التشغيلية', 'Environmental disclosure reflects the company’s operational responsibility and its commitment to compliant, transparent, and sustainable development.', 'Les informations environnementales reflètent la responsabilité opérationnelle de l’entreprise et son engagement en faveur d’un développement conforme, transparent et durable.', 'يعكس الإفصاح البيئي المسؤولية التشغيلية للشركة والتزامها بالتطور المتوافق والشفاف والمستدام.'),
      block('/assets/voyah/home-image-4.png', 'Long-term orientation', 'Orientation de long terme', 'التوجه طويل المدى', 'The disclosure framework emphasizes sustainable operation, ongoing management, and long-term environmental accountability.', 'Le cadre de divulgation met l’accent sur une exploitation durable, une gestion continue et une responsabilité environnementale de long terme.', 'يركز إطار الإفصاح على التشغيل المستدام والإدارة المستمرة والمساءلة البيئية طويلة الأجل.')
    ]
  },
  {
    kind: 'info',
    slug: 'document.html',
    eyebrow: t('Downloads', 'Téléchargements', 'التنزيلات'),
    title: t('Document Download', 'Téléchargement de documents', 'تنزيل المستندات'),
    summary: t('Download official manuals, reference documents, and related materials released by Voyah.', 'Téléchargez les manuels officiels, documents de référence et matériaux associés publiés par Voyah.', 'قم بتنزيل الأدلة الرسمية والمستندات المرجعية والمواد المرتبطة التي تنشرها Voyah.'),
    heroImage: '/assets/voyah/home-image-39.png',
    blocks: [
      block('/assets/voyah/home-image-39.png', 'User manuals', 'Manuels utilisateur', 'أدلة المستخدم', 'Vehicle user manuals and owner documents are organized to support onboarding, daily use, and continued ownership reference.', 'Les manuels utilisateur et documents propriétaires des véhicules sont organisés pour accompagner la prise en main, l’usage quotidien et la consultation continue pendant la possession.', 'تم تنظيم أدلة المستخدم ووثائق المالك الخاصة بالمركبات لدعم البدء في الاستخدام والاستعمال اليومي والرجوع إليها أثناء فترة الملكية.'),
      block('/assets/voyah/home-image-40.png', 'Reference documents', 'Documents de référence', 'مستندات مرجعية', 'Supplementary reference documents are grouped to make searching, downloading, and comparison clearer and more efficient.', 'Les documents de référence complémentaires sont regroupés afin de rendre la recherche, le téléchargement et la comparaison plus clairs et plus efficaces.', 'جُمعت المستندات المرجعية الإضافية لجعل البحث والتنزيل والمقارنة أوضح وأكثر كفاءة.'),
      block('/assets/voyah/home-image-41.png', 'Digital retrieval', 'Accès numérique', 'الوصول الرقمي', 'Document retrieval is connected to digital touchpoints so that official materials can be found conveniently and consistently.', 'La récupération des documents est reliée aux points de contact numériques afin que les supports officiels puissent être trouvés de manière pratique et cohérente.', 'يرتبط الوصول إلى المستندات بنقاط الوصول الرقمية بحيث يمكن العثور على المواد الرسمية بسهولة وبصورة متسقة.')
    ]
  },
  {
    kind: 'info',
    slug: 'purchasing.html',
    eyebrow: t('Procurement', 'Achats', 'المشتريات'),
    title: t('Procurement Information Disclosure', 'Informations achats', 'معلومات المشتريات'),
    summary: t('View official procurement information, historical procurement data, and supplier-related disclosures from Voyah.', 'Consultez les informations achats officielles, les données historiques d’achats et les éléments de divulgation liés aux fournisseurs publiés par Voyah.', 'اطلع على معلومات المشتريات الرسمية وبيانات المشتريات التاريخية والإفصاحات المرتبطة بالموردين المنشورة من Voyah.'),
    heroImage: '/assets/voyah/home-image-42.png',
    blocks: [
      block('/assets/voyah/home-image-42.png', 'Procurement information', 'Informations achats', 'معلومات المشتريات', 'Procurement information is disclosed for public reference around supplier cooperation, sourcing transparency, and long-term industrial coordination.', 'Les informations achats sont publiées à titre de référence publique autour de la coopération fournisseurs, de la transparence du sourcing et de la coordination industrielle de long terme.', 'يتم الإفصاح عن معلومات المشتريات للرجوع العام حول تعاون الموردين وشفافية التوريد والتنسيق الصناعي طويل الأمد.'),
      block('/assets/voyah/home-image-16.png', 'Historical procurement data', 'Données historiques d’achats', 'بيانات المشتريات التاريخية', 'Historical procurement data supports document review and gives partners a clearer view of the structure and continuity of purchasing activity.', 'Les données historiques d’achats soutiennent la consultation documentaire et donnent aux partenaires une vision plus claire de la structure et de la continuité de l’activité d’achat.', 'تدعم بيانات المشتريات التاريخية مراجعة المستندات وتمنح الشركاء تصوراً أوضح عن هيكل نشاط الشراء واستمراريته.'),
      block('/assets/voyah/home-image-18.png', 'Supplier collaboration', 'Coopération fournisseurs', 'تعاون الموردين', 'Supplier collaboration emphasizes quality standards, delivery reliability, process clarity, and structured long-term cooperation.', 'La coopération avec les fournisseurs met l’accent sur les standards qualité, la fiabilité d’exécution, la clarté des processus et une coopération structurée sur le long terme.', 'يركز التعاون مع الموردين على معايير الجودة وموثوقية التنفيذ ووضوح العمليات والتعاون المنظم طويل الأمد.')
    ]
  },
  {
    kind: 'info',
    slug: 'book-drive.html',
    eyebrow: t('Experience', 'Expérience', 'التجربة'),
    title: t('Book a Test Drive', 'Réserver un essai', 'احجز تجربة قيادة'),
    summary: t('Book a guided test drive with the Voyah lineup.', 'Réservez un essai guidé avec la gamme Voyah.', 'احجز تجربة قيادة موجّهة مع مجموعة Voyah.'),
    heroImage: '/assets/voyah/home-image-43.png',
    blocks: [
      block('/assets/voyah/home-image-44.png', 'Guided selection', 'Choix guidé', 'اختيار موجّه', 'Prospective owners can narrow the lineup according to usage needs, size preference, and product character before scheduling an in-person drive.', 'Les futurs clients peuvent affiner la gamme selon les besoins d’usage, les préférences d’espace et le caractère du produit avant de programmer un essai en magasin.', 'يمكن للعملاء المحتملين تضييق الاختيار بحسب احتياجات الاستخدام وتفضيلات الحجم وطابع المنتج قبل تحديد موعد تجربة القيادة في المعرض.'),
      block('/assets/voyah/home-image-45.jpg', 'Store coordination', 'Coordination en magasin', 'تنسيق المعرض', 'The booking flow connects directly to the physical store network so that consultation, arrival planning, and drive preparation stay within one smooth process.', 'Le parcours de réservation se connecte directement au réseau de magasins afin que le conseil, la préparation de la visite et l’organisation de l’essai restent dans un processus fluide unique.', 'يرتبط مسار الحجز مباشرة بشبكة المعارض الفعلية حتى تظل الاستشارة والتخطيط للزيارة وتجهيز تجربة القيادة ضمن عملية سلسة واحدة.'),
      block('/assets/voyah/home-image-46.png', 'Ownership onboarding', 'Découverte de la possession', 'تهيئة الملكية', 'A test drive supports not only product discovery but also a clearer understanding of the full ownership journey and service experience.', 'L’essai sert non seulement à découvrir le produit, mais aussi à mieux comprendre le parcours de possession complet et l’expérience de service.', 'لا تخدم تجربة القيادة اكتشاف المنتج فقط، بل تساعد أيضاً على فهم أوضح لرحلة الملكية الكاملة وتجربة الخدمة.'),
    ],
    ctaSlug: 'store.html'
  },
  {
    kind: 'info',
    slug: 'architecture.html',
    eyebrow: t('Architecture', 'Architecture', 'البنية التقنية'),
    title: t('ESSA Architecture', 'Architecture ESSA', 'منصة ESSA'),
    summary: t('The native smart electric architecture.', 'L’architecture électrique intelligente native.', 'المنصة الكهربائية الذكية الأصلية.'),
    heroImage: '/voyah-resources/tech/essa_diagram.png',
    blocks: []
  },
  {
    kind: 'info',
    slug: 'safety.html',
    eyebrow: t('Safety', 'Sécurité', 'السلامة'),
    title: t('Voyah Safety', 'Sécurité Voyah', 'سلامة Voyah'),
    summary: t('Battery and structural safety.', 'Sécurité structurelle et de la batterie.', 'سلامة البطارية والهيكل.'),
    heroImage: '/voyah-resources/tech/battery_shield.png',
    blocks: []
  },
  {
    kind: 'info',
    slug: 'smart-cockpit.html',
    eyebrow: t('Cockpit', 'Cockpit', 'المقصورة'),
    title: t('Cockpit', 'Cockpit', 'المقصورة'),
    summary: t('Smart cockpit', 'Smart cockpit', 'المقصورة الذكية'),
    heroImage: '',
    blocks: []
  },
  {
    kind: 'info',
    slug: 'battery.html',
    eyebrow: t('Battery', 'Batterie', 'البطارية'),
    title: t('Battery', 'Batterie', 'البطارية'),
    summary: t('Battery tech', 'Battery tech', 'البطارية'),
    heroImage: '',
    blocks: []
  },
  {
    kind: 'info',
    slug: 'about.html',
    eyebrow: t('About', 'À propos', 'حول'),
    title: t('About Voyah', 'À propos de Voyah', 'عن Voyah'),
    summary: t('The premium EV brand of Dongfeng.', 'La marque EV premium de Dongfeng.', 'العلامة الفاخرة للسيارات الكهربائية من دونغفينغ.'),
    heroImage: '/voyah-resources/brand/about_hero.jpg',
    blocks: []
  },
  {
    kind: 'info',
    slug: 'news.html',
    eyebrow: t('News', 'Actualités', 'الأخبار'),
    title: t('Voyah News', 'Actualités Voyah', 'أخبار Voyah'),
    summary: t('Latest updates and press releases.', 'Dernières mises à jour et communiqués.', 'أحدث التحديثات والبيانات الصحفية.'),
    heroImage: '/voyah-resources/brand/news_hero.jpg',
    blocks: []
  },
  {
    kind: 'info',
    slug: 'brand-philosophy.html',
    eyebrow: t('Philosophy', 'Philosophie', 'الفلسفة'),
    title: t('Brand Philosophy', 'Philosophie de marque', 'فلسفة العلامة'),
    summary: t('Intelligent Voyah, Creating Happiness.', 'Voyah Intelligente, Créer le Bonheur.', 'فوييا الذكية، تصنع السعادة.'),
    heroImage: '/voyah-resources/brand/philosophy_hero.jpg',
    blocks: []
  },
  {
    kind: 'info',
    slug: 'kunpeng-design.html',
    eyebrow: t('Design', 'Design', 'التصميم'),
    title: t('Kunpeng Design', 'Design Kunpeng', 'تصميم كونبينج'),
    summary: t('Chinese elegance meets modern technology.', 'L\'élégance chinoise rencontre la technologie.', 'الأناقة الصينية تلتقي بالتكنولوجيا.'),
    heroImage: '/voyah-resources/brand/kunpeng_hero.jpg',
    blocks: []
  },
  {
    kind: 'info',
    slug: 'warranty.html',
    eyebrow: t('Warranty', 'Garantie', 'الضمان'),
    title: t('Warranty Service', 'Service de Garantie', 'خدمة الضمان'),
    summary: t('Comprehensive protection for your journey.', 'Protection complète pour votre voyage.', 'حماية شاملة لرحلتك.'),
    heroImage: '/voyah-resources/service/warranty_hero.jpg',
    blocks: []
  },
  {
    kind: 'info',
    slug: 'app-download.html',
    eyebrow: t('App', 'App', 'التطبيق'),
    title: t('Download App', 'Télécharger l\'Application', 'تحميل التطبيق'),
    summary: t('Control your Voyah from your fingertips.', 'Contrôlez votre Voyah du bout des doigts.', 'تحكم في سيارة فوييا من أطراف أصابعك.'),
    heroImage: '/voyah-resources/service/app_hero.jpg',
    blocks: []
  },
  {
    kind: 'info',
    slug: 'faq.html',
    eyebrow: t('FAQ', 'FAQ', 'الأسئلة الشائعة'),
    title: t('Frequently Asked Questions', 'Questions Fréquemment Posées', 'الأسئلة الشائعة'),
    summary: t('Find answers to common questions.', 'Trouvez des réponses aux questions courantes.', 'ابحث عن إجابات للأسئلة الشائعة.'),
    heroImage: '/voyah-resources/service/faq_hero.jpg',
    blocks: []
  },
  {
    kind: 'info',
    slug: 'community.html',
    eyebrow: t('Community', 'Communauté', 'المجتمع'),
    title: t('Voyah Community', 'Communauté Voyah', 'مجتمع Voyah'),
    summary: t('Join the Voyah owners network.', 'Rejoignez le réseau des propriétaires Voyah.', 'انضم إلى شبكة مالكي فوييا.'),
    heroImage: '/voyah-resources/lifestyle/community_hero.jpg',
    blocks: []
  },
  {
    kind: 'info',
    slug: 'lifestyle-store.html',
    eyebrow: t('Store', 'Boutique', 'المتجر'),
    title: t('Lifestyle Store', 'Boutique Lifestyle', 'متجر أسلوب الحياة'),
    summary: t('Exclusive accessories and apparel.', 'Accessoires et vêtements exclusifs.', 'إكسسوارات وملابس حصرية.'),
    heroImage: '/voyah-resources/lifestyle/store_hero.jpg',
    blocks: []
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
          t('Without prior written consent from Voyah, no organization or individual may copy, reproduce, modify, republish, transmit, display, mirror, or otherwise use the contents of this website in any form.', 'Sans l’accord écrit préalable de Voyah, aucune organisation ni aucun individu ne peut copier, reproduire, modifier, republier, transmettre, afficher, reproduire en miroir ou utiliser de toute autre manière les contenus de ce site sous quelque forme que ce soit.', 'من دون موافقة كتابية مسبقة من Voyah، لا يجوز لأي جهة أو فرد نسخ أو إعادة إنتاج أو تعديل أو إعادة نشر أو نقل أو عرض أو إنشاء نسخ معكوسة أو استخدام محتويات هذا الموقع بأي شكل من الأشكال.'),
          t('The brand name Voyah, product names, logos, images, videos, and related design materials are owned by Voyah or the relevant rights holders.', 'Le nom de marque Voyah, les noms de produits, les logos, les images, les vidéos et les éléments de design associés appartiennent à Voyah ou aux titulaires de droits concernés.', 'إن اسم العلامة Voyah وأسماء المنتجات والشعارات والصور ومقاطع الفيديو والمواد التصميمية المرتبطة بها مملوكة لـ Voyah أو لأصحاب الحقوق المعنيين.')
        ]
      },
      {
        title: t('Disclaimer', 'Clause de non-responsabilité', 'إخلاء المسؤولية'),
        paragraphs: [
          t('The information published on this website is provided for reference. Vehicle configurations, colors, functions, services, and availability may vary by model, market, and time of release. Please refer to the latest official product information and local retail channels.', 'Les informations publiées sur ce site sont fournies à titre indicatif. Les configurations, couleurs, fonctions, services et disponibilités des véhicules peuvent varier selon les modèles, les marchés et les périodes de lancement. Veuillez vous référer aux dernières informations produits officielles et aux canaux commerciaux locaux.', 'تُقدَّم المعلومات المنشورة على هذا الموقع لأغراض مرجعية. وقد تختلف تجهيزات المركبات والألوان والوظائف والخدمات ومدى التوافر بحسب الطراز والسوق وتوقيت الإطلاق. يُرجى الرجوع إلى أحدث المعلومات الرسمية الخاصة بالمنتج وإلى قنوات البيع المحلية.')
        ]
      },
      {
        title: t('External links', 'Liens externes', 'روابط خارجية'),
        paragraphs: [
          t('This website may contain links to third-party websites for convenience. Voyah does not control those websites and is not responsible for their content, privacy practices, or availability.', 'Ce site peut contenir des liens vers des sites tiers à titre pratique. Voyah ne contrôle pas ces sites et n’est pas responsable de leur contenu, de leurs pratiques de confidentialité ou de leur disponibilité.', 'قد يحتوي هذا الموقع على روابط إلى مواقع تابعة لجهات خارجية لغايات التسهيل. لا تتحكم Voyah في هذه المواقع ولا تتحمل مسؤولية محتواها أو ممارسات الخصوصية فيها أو مدى توافرها.')
        ]
      },
      {
        title: t('Governing law', 'Droit applicable', 'القانون الواجب التطبيق'),
        paragraphs: [
          t('Unless otherwise required by mandatory law, these terms are governed by the laws applicable to the operator of this website. Any disputes should be handled through lawful procedures in the competent jurisdiction.', 'Sauf disposition contraire imposée par une loi impérative, les présentes conditions sont régies par les lois applicables à l’exploitant de ce site. Tout litige doit être traité selon les procédures légales devant la juridiction compétente.', 'ما لم تقتضِ القوانين الإلزامية خلاف ذلك، تخضع هذه الشروط للقوانين السارية على الجهة المشغلة لهذا الموقع. ويجب معالجة أي نزاع وفق الإجراءات القانونية أمام الجهة القضائية المختصة.')
        ]
      }
    ]
  },
  {
    kind: 'legal',
    slug: 'privacy.html',
    eyebrow: t('Privacy', 'Confidentialité', 'الخصوصية'),
    title: t('Privacy policy', 'Politique de confidentialité', 'سياسة الخصوصية'),
    summary: t('Voyah values and protects the personal information of users. This policy explains how personal information may be collected, used, stored, protected, and managed when using Voyah websites, applications, mini programs, products, and services.', 'Voyah attache une grande importance à la protection des informations personnelles des utilisateurs. Cette politique explique comment les informations personnelles peuvent être collectées, utilisées, stockées, protégées et gérées lors de l’utilisation des sites web, applications, mini-programmes, produits et services Voyah.', 'تولي Voyah أهمية كبيرة لحماية المعلومات الشخصية للمستخدمين. وتوضح هذه السياسة كيفية جمع المعلومات الشخصية واستخدامها وتخزينها وحمايتها وإدارتها عند استخدام مواقع Voyah وتطبيقاتها وبرامجها المصغرة ومنتجاتها وخدماتها.'),
    sections: [
      {
        title: t('Information collection and use', 'Collecte et utilisation des informations', 'جمع المعلومات واستخدامها'),
        paragraphs: [
          t('Depending on the services you use, Voyah may collect information necessary to provide account login, test-drive booking, vehicle purchase, after-sales service, charging, customer support, and community functions.', 'Selon les services que vous utilisez, Voyah peut collecter les informations nécessaires à la connexion au compte, à la réservation d’essai, à l’achat du véhicule, au service après-vente, à la recharge, au support client et aux fonctions communautaires.', 'وفقاً للخدمات التي تستخدمها، قد تجمع Voyah المعلومات اللازمة لتسجيل الدخول إلى الحساب وحجز تجربة القيادة وشراء السيارة وخدمة ما بعد البيع والشحن ودعم العملاء ووظائف المجتمع.'),
          t('Voyah uses personal information to deliver services, verify identity, maintain operational security, improve products and services, and meet legal and regulatory obligations.', 'Voyah utilise les informations personnelles pour fournir les services, vérifier l’identité, assurer la sécurité opérationnelle, améliorer les produits et services et satisfaire aux obligations légales et réglementaires.', 'تستخدم Voyah المعلومات الشخصية لتقديم الخدمات والتحقق من الهوية والحفاظ على أمن التشغيل وتحسين المنتجات والخدمات والامتثال للالتزامات القانونية والتنظيمية.')
        ]
      },
      {
        title: t('Storage and protection', 'Conservation et protection', 'التخزين والحماية'),
        paragraphs: [
          t('Voyah adopts management, technical, and organizational measures to protect personal information from unauthorized access, disclosure, alteration, damage, or loss.', 'Voyah adopte des mesures de gestion, techniques et organisationnelles pour protéger les informations personnelles contre tout accès, divulgation, modification, dommage ou perte non autorisés.', 'تعتمد Voyah تدابير إدارية وتقنية وتنظيمية لحماية المعلومات الشخصية من الوصول غير المصرح به أو الكشف أو التعديل أو التلف أو الفقدان.'),
          t('Where required by law or regulation, you may exercise rights such as access, correction, deletion, withdrawal of consent, and account cancellation through the official channels provided by Voyah.', 'Lorsque la loi ou la réglementation l’exige, vous pouvez exercer des droits tels que l’accès, la rectification, la suppression, le retrait du consentement et la suppression du compte via les canaux officiels fournis par Voyah.', 'عند الاقتضاء بموجب القوانين أو اللوائح، يمكنك ممارسة حقوق مثل الوصول إلى المعلومات وتصحيحها وحذفها وسحب الموافقة وإلغاء الحساب عبر القنوات الرسمية التي توفرها Voyah.')
        ]
      },
      {
        title: t('Sharing and transfer', 'Partage et transfert', 'المشاركة والنقل'),
        paragraphs: [
          t('Voyah may share personal information with service providers when necessary to deliver services (for example, appointment scheduling, delivery, connectivity, or customer support). Voyah requires such parties to follow applicable laws and security standards.', 'Voyah peut partager des informations personnelles avec des prestataires lorsque cela est nécessaire pour fournir les services (par exemple, prise de rendez-vous, livraison, connectivité ou support client). Voyah exige de ces parties qu’elles respectent les lois applicables et des standards de sécurité.', 'قد تشارك Voyah المعلومات الشخصية مع مزودي الخدمات عند الضرورة لتقديم الخدمات (مثل جدولة المواعيد أو التسليم أو الاتصال أو دعم العملاء). وتُلزم Voyah هذه الجهات بالامتثال للقوانين المعمول بها ومعايير الأمان.')
        ]
      },
      {
        title: t('Contact', 'Contact', 'التواصل'),
        paragraphs: [
          t('If you have questions about this policy or wish to exercise privacy-related rights, please use the official Voyah service channels provided on this website.', 'Si vous avez des questions concernant cette politique ou souhaitez exercer des droits liés à la confidentialité, veuillez utiliser les canaux officiels de service Voyah indiqués sur ce site.', 'إذا كانت لديك أسئلة حول هذه السياسة أو رغبت في ممارسة حقوق تتعلق بالخصوصية، يُرجى استخدام قنوات خدمة Voyah الرسمية المتاحة على هذا الموقع.')
        ]
      }
    ]
  },
  {
    kind: 'legal',
    slug: 'cookie.html',
    eyebrow: t('Cookies', 'Cookies', 'ملفات تعريف الارتباط'),
    title: t('Cookie policy', 'Politique relative aux cookies', 'سياسة ملفات تعريف الارتباط'),
    summary: t('To ensure the proper operation of the website and improve your browsing experience, Voyah may use cookies and similar technologies. This policy explains the categories, purposes, and management methods of such technologies.', 'Afin d’assurer le bon fonctionnement du site et d’améliorer votre expérience de navigation, Voyah peut utiliser des cookies et des technologies similaires. Cette politique explique les catégories, les finalités et les modalités de gestion de ces technologies.', 'لضمان التشغيل السليم للموقع وتحسين تجربة التصفح، قد تستخدم Voyah ملفات تعريف الارتباط والتقنيات المشابهة. وتوضح هذه السياسة فئات هذه التقنيات وأغراضها وطرق إدارتها.'),
    sections: [
      {
        title: t('Use of cookies', 'Utilisation des cookies', 'استخدام ملفات تعريف الارتباط'),
        paragraphs: [
          t('Cookies may be used to remember language preferences, maintain login status, optimize performance, analyze traffic, and support service security and service quality improvement.', 'Les cookies peuvent être utilisés pour mémoriser les préférences linguistiques, maintenir la connexion, optimiser les performances, analyser le trafic et soutenir la sécurité ainsi que l’amélioration de la qualité de service.', 'قد تُستخدم ملفات تعريف الارتباط لتذكر تفضيلات اللغة والحفاظ على حالة تسجيل الدخول وتحسين الأداء وتحليل الزيارات ودعم أمن الخدمة وتحسين جودتها.')
        ]
      },
      {
        title: t('Cookie categories', 'Catégories de cookies', 'فئات ملفات تعريف الارتباط'),
        paragraphs: [
          t('Cookies can be categorized as strictly necessary (site operation), functional (preferences), analytics (measurement), and marketing (relevance). Some categories may not be used in all markets or on all pages.', 'Les cookies peuvent être classés en cookies strictement nécessaires (fonctionnement du site), fonctionnels (préférences), analytiques (mesure) et marketing (pertinence). Certaines catégories peuvent ne pas être utilisées sur tous les marchés ou sur toutes les pages.', 'يمكن تصنيف ملفات تعريف الارتباط إلى ضرورية للغاية (لتشغيل الموقع) ووظيفية (للتفضيلات) وتحليلية (للقياس) وتسويقية (للملاءمة). وقد لا تُستخدم بعض الفئات في جميع الأسواق أو على جميع الصفحات.')
        ]
      },
      {
        title: t('Management and control', 'Gestion et contrôle', 'الإدارة والتحكم'),
        paragraphs: [
          t('Most browsers allow you to manage or disable cookies through their settings. Please note that disabling certain cookies may affect the availability or user experience of some functions.', 'La plupart des navigateurs permettent de gérer ou de désactiver les cookies via leurs paramètres. Veuillez noter que la désactivation de certains cookies peut affecter la disponibilité ou l’expérience utilisateur de certaines fonctions.', 'تتيح معظم المتصفحات إدارة ملفات تعريف الارتباط أو تعطيلها عبر الإعدادات. ويُرجى ملاحظة أن تعطيل بعض الملفات قد يؤثر في توفر بعض الوظائف أو في تجربة استخدامها.')
        ]
      },
      {
        title: t('Third-party technologies', 'Technologies tierces', 'تقنيات الجهات الخارجية'),
        paragraphs: [
          t('Some services may rely on third-party measurement or media technologies. Where used, these providers may set or read cookies according to their own policies.', 'Certaines fonctionnalités peuvent s’appuyer sur des technologies de mesure ou de média de tiers. Le cas échéant, ces fournisseurs peuvent déposer ou lire des cookies selon leurs propres politiques.', 'قد تعتمد بعض الخدمات على تقنيات قياس أو وسائط تابعة لجهات خارجية. وعند استخدامها، قد تقوم هذه الجهات بوضع ملفات تعريف ارتباط أو قراءتها وفق سياساتها الخاصة.')
        ]
      }
    ]
  },
  {
    kind: 'legal',
    slug: 'authorization.html',
    eyebrow: t('Permissions', 'Autorisations', 'الأذونات'),
    title: t('Permissions statement', 'Déclaration relative aux autorisations', 'بيان الأذونات'),
    summary: t('When using Voyah applications, mini programs, website functions, and connected services, certain device permissions may be requested in order to deliver the corresponding features and service experience.', 'Lors de l’utilisation des applications Voyah, des mini-programmes, des fonctions du site et des services connectés, certaines autorisations de l’appareil peuvent être demandées afin de fournir les fonctionnalités correspondantes et l’expérience de service.', 'عند استخدام تطبيقات Voyah وبرامجها المصغرة ووظائف الموقع والخدمات المتصلة، قد يتم طلب بعض أذونات الجهاز لتقديم الوظائف المقابلة وتجربة الخدمة المرتبطة بها.'),
    sections: [
      {
        title: t('Typical permissions', 'Autorisations courantes', 'الأذونات المعتادة'),
        paragraphs: [
          t('Depending on the feature in use, Voyah may request permissions such as location, camera, photo album, microphone, Bluetooth, notifications, and storage access.', 'Selon la fonctionnalité utilisée, Voyah peut demander des autorisations telles que la localisation, l’appareil photo, l’album photo, le microphone, le Bluetooth, les notifications et l’accès au stockage.', 'بحسب الوظيفة المستخدمة، قد تطلب Voyah أذونات مثل الموقع والكاميرا وألبوم الصور والميكروفون والبلوتوث والإشعارات والوصول إلى التخزين.')
        ]
      },
      {
        title: t('Purpose and management', 'Finalité et gestion', 'الغرض والإدارة'),
        paragraphs: [
          t('Permissions are only used for the functions described above. You may manage or revoke permissions through your system settings, but doing so may affect the availability of related services.', 'Les autorisations sont utilisées uniquement pour les fonctions décrites ci-dessus. Vous pouvez les gérer ou les révoquer via les paramètres du système, mais cela peut affecter la disponibilité des services associés.', 'تُستخدم الأذونات فقط للوظائف المذكورة أعلاه. ويمكنك إدارتها أو سحبها من خلال إعدادات النظام، إلا أن ذلك قد يؤثر في توفر الخدمات المرتبطة بها.')
        ]
      },
      {
        title: t('When permissions are requested', 'Quand les autorisations sont demandées', 'متى يتم طلب الأذونات'),
        paragraphs: [
          t('Permissions are requested only when a feature requires them. For example, location may be requested for store discovery, Bluetooth for vehicle connectivity, and camera/photo access for uploading materials.', 'Les autorisations ne sont demandées que lorsqu’une fonctionnalité en a besoin. Par exemple, la localisation peut être requise pour trouver un magasin, le Bluetooth pour la connectivité du véhicule et l’accès caméra/photo pour le téléchargement de contenus.', 'لا يتم طلب الأذونات إلا عندما تتطلبها الوظيفة. فعلى سبيل المثال، قد يُطلب الموقع للعثور على المعرض، والبلوتوث لاتصال السيارة، والوصول إلى الكاميرا أو الصور لرفع المحتوى.')
        ]
      },
      {
        title: t('Notifications', 'Notifications', 'الإشعارات'),
        paragraphs: [
          t('If you enable notifications, Voyah may send service-related reminders such as booking updates, delivery status, or safety notices. You can disable notifications at any time through system settings.', 'Si vous activez les notifications, Voyah peut envoyer des rappels liés au service tels que les mises à jour de réservation, l’état de livraison ou des avis de sécurité. Vous pouvez les désactiver à tout moment via les paramètres du système.', 'إذا قمت بتفعيل الإشعارات، فقد ترسل Voyah تذكيرات مرتبطة بالخدمة مثل تحديثات الحجز أو حالة التسليم أو إشعارات السلامة. ويمكنك تعطيل الإشعارات في أي وقت من خلال إعدادات النظام.')
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
      image: '/assets/voyah/home-image-47.png',
      logo: '/assets/voyah/home-image-48.png',
      title: t('Intelligent Voyah, Creating Happiness', 'Voyah Intelligente, Créer le Bonheur', 'فوييا الذكية، تصنع السعادة'),
      description: t('A premium intelligent new-energy brand', 'Une marque haut de gamme de véhicules intelligents à énergies nouvelles', 'علامة راقية للمركبات الذكية العاملة بالطاقة الجديدة'),
      primaryLabel: t('Discover the brand', 'Découvrir la marque', 'اكتشف العلامة'),
      secondaryLabel: t('', '', ''),
      primarySlug: 'brand.html'
    },
    {
      image: '/assets/voyah/home-image-49.png',
      video: '/assets/voyah/home-video-1.mp4',
      logo: '/assets/voyah/home-image-50.png',
      title: t('', '', ''),
      description: t('A new-era flagship six-seat SUV', 'Un SUV phare à six places de nouvelle génération', 'سيارة SUV رائدة بستة مقاعد من الجيل الجديد'),
      primaryLabel: t('Learn more', 'En savoir plus', 'اعرف المزيد'),
      secondaryLabel: t('Order now', 'Commander', 'اطلب الآن'),
      primarySlug: 'titan.html',
      secondarySlug: 'store.html'
    },
    {
      image: '/assets/voyah/home-image-51.png',
      video: '/assets/voyah/home-video-2.mp4',
      logo: '/assets/voyah/home-image-52.png',
      title: t('', '', ''),
      description: t('A new-era flagship MPV with panoramic luxury and family-first comfort', 'Un monospace phare de nouvelle génération avec luxe panoramique et confort familial', 'سيارة MPV رائدة من الجيل الجديد مع فخامة بانورامية وراحة عائلية'),
      primaryLabel: t('Learn more', 'En savoir plus', 'اعرف المزيد'),
      secondaryLabel: t('Order now', 'Commander', 'اطلب الآن'),
      primarySlug: 'newDreamer26.html',
      secondarySlug: 'store.html'
    },
    {
      image: '/assets/voyah/home-image-53.png',
      video: '/assets/voyah/home-video-3.mp4',
      logo: '/assets/voyah/home-image-54.png',
      title: t('', '', ''),
      description: t('A new-era flagship sedan with executive luxury and calm long-distance composure', 'Une berline phare de nouvelle génération avec luxe exécutif et sérénité longue distance', 'سيدان رائدة من الجيل الجديد مع فخامة تنفيذية واتزان في الرحلات الطويلة'),
      primaryLabel: t('Learn more', 'En savoir plus', 'اعرف المزيد'),
      secondaryLabel: t('Order now', 'Commander', 'اطلب الآن'),
      primarySlug: 'passion-L.html',
      secondarySlug: 'store.html'
    },
    {
      image: '/assets/voyah/home-image-55.png',
      video: '/assets/voyah/home-video-4.mp4',
      logo: '/assets/voyah/home-image-56.png',
      title: t('', '', ''),
      description: t('Premium intelligent SUV with Huawei ADS and Harmony cockpit', 'SUV premium intelligente avec Huawei ADS et cockpit Harmony', 'سيارة SUV ذكية فاخرة مع Huawei ADS ومقصورة Harmony'),
      primaryLabel: t('Learn more', 'En savoir plus', 'اعرف المزيد'),
      secondaryLabel: t('Order now', 'Commander', 'اطلب الآن'),
      primarySlug: 'free+.html',
      secondarySlug: 'store.html'
    },
    {
      image: '/assets/voyah/home-image-57.png',
      video: '/assets/voyah/home-video-5.mp4',
      logo: '/assets/voyah/home-image-58.png',
      title: t('', '', ''),
      description: t(
        'New luxury pure-electric SUV with long range and family comfort',
        'Nouveau SUV de luxe 100 % électrique avec grande autonomie et confort familial',
        'سيارة SUV كهربائية فاخرة جديدة بمدى طويل وراحة عائلية'
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
    image: '/assets/voyah/home-image-1.jpg'
  },
  modelsTitle: t('Explore Voyah models', 'Explorer les modèles Voyah', 'استكشف طرازات Voyah'),
  modelsBody: t('', '', ''),
  models: [
    {
      slug: 'titan.html',
      image: '/assets/voyah/home-image-59.jpg',
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
      image: '/assets/voyah/home-image-60.jpg',
      title: t('26 Voyah Dreamer', 'Voyah Dreamer 26', 'Voyah Dreamer 26'),
      category: t('A new-era flagship MPV', 'Un monospace phare de nouvelle génération', 'سيارة MPV رائدة من الجيل الجديد'),
      metrics: [
        metric('MPV', 'Body type', 'Carrosserie', 'نوع الهيكل'),
        metric('Flagship', 'Positioning', 'Positionnement', 'الفئة'),
        metric('6 / 7 seats', 'Seating', 'Places', 'عدد المقاعد')
      ]
    },
    {
      slug: 'passion-L.html',
      image: '/assets/voyah/home-image-61.jpg',
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
      image: '/assets/voyah/home-image-62.jpg',
      title: t('Voyah FREE+', 'Voyah FREE+', 'Voyah FREE+'),
      category: t(
        'Premium intelligent SUV',
        'SUV premium intelligente',
        'سيارة SUV ذكية فاخرة'
      ),
      metrics: [
        metric('SUV', 'Body type', 'Carrosserie', 'نوع الهيكل'),
        metric('Huawei ADS', 'Driving tech', 'Conduite intelligente', 'تقنية القيادة'),
        metric('Harmony cockpit', 'Cabin', 'Cockpit', 'المقصورة')
      ]
    },
    {
      slug: 'newCourage.html',
      image: '/assets/voyah/home-image-63.jpg',
      title: t('New Voyah Courage', 'Nouveau Voyah Courage', 'Voyah Courage الجديد'),
      category: t(
        'New luxury pure-electric SUV',
        'Nouveau SUV de luxe 100 % électrique',
        'سيارة SUV كهربائية فاخرة جديدة'
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
      'Offrir aux utilisateurs la meilleure expérience de recharge, avec davantage de choix, de rapidité, d’intelligence et d’efficacité.',
      'إتاحة أفضل تجربة تزوّد بالطاقة للمستخدمين، بمزيد من الخيارات والسرعة والذكاء والكفاءة.'
    ),
    label: t('Learn more', 'En savoir plus', 'اعرف المزيد'),
    image: '/assets/voyah/home-image-15.jpg',
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
      'Voyah is not only a pioneer among central-state enterprises on the electric track, but also a new benchmark for the transformation and upgrade of mature Chinese automakers and a successful practice of Dongfeng Motor Group’s "new five modernizations": lightweighting, electrification, intelligence, connectivity, and sharing.',
      'Voyah n’est pas seulement un pionnier des entreprises centrales sur la voie de l’électrique, mais aussi une nouvelle référence pour la transformation des constructeurs chinois matures et une concrétisation réussie des "cinq nouvelles modernisations" de Dongfeng Motor Group : allègement, électrification, intelligence, connectivité et partage.',
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
        image: '/assets/voyah/home-image-64.png',
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
        image: '/assets/voyah/home-image-65.png',
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
      block('/assets/voyah/home-image-11.jpg', 'Sincere reception', 'Accueil sincère', 'استقبال صادق', '', '', ''),
      block('/assets/voyah/home-image-12.jpg', 'Ceremonial delivery', 'Livraison avec sens du rituel', 'تسليم بطابع احتفالي', '', '', ''),
      block('/assets/voyah/home-image-13.jpg', '7×24-hour protection', 'Protection 7×24 h', 'حماية على مدار 7×24 ساعة', '', '', ''),
      block('/assets/voyah/home-image-66.jpg', 'Professional team', 'Équipe professionnelle', 'فريق محترف', '', '', '')
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
        image: '/assets/voyah/home-image-67.jpg',
        title: t(
          'Owner story | Chairman Li Peng and the "dockside world" of 6,000 owners',
          'Histoire de propriétaire | Li Peng et le « monde du quai » de 6 000 propriétaires',
          'قصة مالك | لي بنغ و«عالم الميناء» مع 6000 من المالكين'
        ),
        body: t('Buying Voyah five times, bound by loyalty and friendship.', 'Cinq achats de Voyah, portés par la fidélité et l’amitié.', 'خمس مرات من اقتناء Voyah بدافع الوفاء والصداقة.'),
        slug: 'brand.html'
      },
      {
        image: '/assets/voyah/home-image-68.jpg',
        title: t(
          'Owner story | When design aesthetics meet craftsmanship',
          'Histoire de propriétaire | Quand l’esthétique du design rencontre l’artisanat',
          'قصة مالك | حين يلتقي جمال التصميم بروح الحرفة'
        ),
        body: t('Liu Lingfeng and his deep resonance with three Voyah FREE models.', 'Liu Lingfeng et sa profonde résonance avec trois Voyah FREE.', 'ليو لينغفنغ ورابطه العميق مع ثلاث سيارات Voyah FREE.'),
        slug: 'service.html'
      },
      {
        image: '/assets/voyah/home-image-69.jpg',
        title: t(
          'Owner story | The dream-chasing journey of a jewelry livestream host',
          'Histoire de propriétaire | Le voyage de rêve d’une animatrice de bijoux en direct',
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
    image: '/assets/voyah/home-image-38.jpg',
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
      { label: t('26 Voyah Dreamer', 'Voyah Dreamer 26', 'Voyah Dreamer 26'), slug: 'newDreamer26.html' },
      { label: t('Voyah Dreamer Champion', 'Voyah Dreamer Champion', 'Voyah Dreamer Champion'), slug: 'dreamer-champion.html' },
      { label: t('25 Voyah Dreamer', 'Voyah Dreamer 25', 'Voyah Dreamer 25'), slug: 'newDreamer.html' },
      { label: t('Voyah Dreamer Mountain River', 'Voyah Dreamer Montagne-Rivière', 'Voyah Dreamer Mountain River'), slug: 'dreamriver.html' },
      { label: t('24 Voyah Dreamer', 'Voyah Dreamer 24', 'Voyah Dreamer 24'), slug: 'dreamer.html' }
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
      { label: t('Corporate Culture', 'Culture d’entreprise', 'الثقافة المؤسسية'), slug: 'corporate.html' },
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
  title: t('Download the Voyah App and explore a new world of Voyah', 'Téléchargez l’application Voyah et explorez un nouvel univers Voyah', 'حمّل تطبيق Voyah واستكشف عالماً جديداً من Voyah'),
  body: t('Stay up to date with the latest Voyah news and discover community activities with distinctive taste.', 'Restez au plus près des dernières actualités Voyah et découvrez des activités communautaires au caractère affirmé.', 'اطلع على أحدث أخبار Voyah واكتشف أنشطة المجتمع التي تحمل طابعاً مميزاً.'),
  appCode: '/assets/voyah/home-image-41.png',
  miniProgramCode: '/assets/voyah/home-image-70.png'
}

export const localize = (text: LocalizedText, locale: LocaleCode): string => text[locale] ?? text.en

export const findLocale = (code?: string) => locales.find((locale) => locale.code === code)

export const resolvePage = (slug?: string): SitePage | undefined => (slug ? sitePageMap.get(slug) : undefined)
