/**
 * Contenu des pages modèles publiques (FREE et DREAM), calé sur la structure du
 * site officiel VOYAH Qatar : hero vidéo, bandeau de chiffres, bandes pleine
 * largeur, lignes « confort » alternées, grilles de cartes, tableau des
 * caractéristiques à onglets. Les sections sont déclarées dans l'ordre réel de
 * chaque page de référence.
 */
import { t, type Localized } from './dealer'

export type ModelMetric = {
  label: Localized
  value: string
  /** Paires libellé/valeur affichées sous le libellé à la place de la valeur (ex. les deux couples moteur). */
  lines?: { label: Localized; value: string }[]
}

/** Groupe de chiffres presentant une version donnee d'un meme modele (ex. FREE 2WD / 4WD). */
export type ModelHeroVersion = { name: Localized; metrics: ModelMetric[] }

export type ModelComfortRow = { image: string; text: Localized; description?: Localized }

export type ModelFeatureCard = { image: string; title: Localized; body: Localized }

/** Tuile de la grille a survol : la legende n'apparait que lorsque la souris arrive. */
export type ModelHoverTile = { image: string; text: Localized }

export type ModelSpecRow = { name: Localized; value: Localized }

export type ModelSpecTab = { id: string; label: Localized; rows: ModelSpecRow[] }

export type ModelSection =
  | { type: 'parallax'; image: string }
  | { type: 'spacer' }
  | { type: 'spacerLarge' }
  | { type: 'comfortTitle'; title: Localized }
  | { type: 'comfortRows'; rows: ModelComfortRow[] }
  | { type: 'cards'; heading?: Localized; cards: ModelFeatureCard[] }
  | { type: 'hoverGrid'; tiles: ModelHoverTile[] }
  /** 'intro' : texte blanc posé en haut de l'image. 'cta' : logo + boutons centrés. */
  | { type: 'band'; image: string; variant: 'intro' | 'cta'; text?: Localized; cta?: 'testDrive' | 'quote'; fullImage?: boolean }
  | { type: 'specs' }

export type ModelPageContent = {
  logo: string
  /** Absent sur les modèles sans vidéo locale : le visuel `heroPoster` sert de hero. */
  heroVideo?: string
  heroPoster: string
  tagline: Localized
  /** Chiffres posés sur le hero, en 2×2 sur mobile. */
  heroMetrics: ModelMetric[]
  /** Versions distinctes affichées au-dessus du hero (remplace heroMetrics quand renseigné). */
  heroVersions?: ModelHeroVersion[]
  /** Trois chiffres répétés sous le hero, uniquement sur mobile. */
  compactMetrics: ModelMetric[]
  /** Titre 36 px centré qui introduit les lignes « confort ». */
  comfortTitle?: Localized
  sections: ModelSection[]
  /** Libelle pose au-dessus du tableau des caracteristiques. */
  configLabel: Localized
  specTabs: ModelSpecTab[]
  specNote: Localized
}

const dot = t('●', '●', '●')

const blankTitle = t('', '', '')

const configLabelValue = t('CONFIGURATION', 'CONFIGURATION', 'التكوينات')

const specNote: Localized = t(
  'Remarks: ① "●" indicates that this configuration is available, "-" indicates that this configuration is unavailable. "〇" indicates an optional configuration, and "*" indicates functions vary from the configurations. ② The content of this configuration table is compiled according to the vehicle configuration status information at the time of release. In order to better meet customer needs, Dongfeng VOYAH continues to develop and improve vehicles. Some configurations and specifications of models sold in the market may be different from this configuration. For details, please consult Dongfeng VOYAH authorized dealers. Any possible changes will be made without prior notice.',
  'Remarques : ① « ● » indique que la configuration est disponible, « - » qu’elle ne l’est pas. « 〇 » indique une configuration en option et « * » des fonctions variables selon la configuration. ② Le contenu de ce tableau est établi d’après l’état des configurations du véhicule à la date de publication. Afin de mieux répondre aux besoins de la clientèle, Dongfeng VOYAH continue de développer et d’améliorer ses véhicules. Certaines configurations et spécifications des modèles commercialisés peuvent différer de ce tableau. Pour plus de détails, consultez un distributeur agréé Dongfeng VOYAH. Les évolutions éventuelles sont apportées sans préavis.',
  'ملاحظات: ① يشير « ● » إلى أن التجهيز متوفر، و« - » إلى أنه غير متوفر. ويشير « 〇 » إلى تجهيز اختياري، بينما يدل « * » على وظائف تختلف حسب التجهيز. ② تم إعداد جدول التجهيزات بناءً على حالة تجهيزات المركبة عند تاريخ الإطلاق. ولمواصلة تلبية احتياجات العملاء بشكل أفضل، يواصل Dongfeng VOYAH تطوير مركباته وتحسينها، وقد تختلف بعض التجهيزات والمواصفات للطروحات المعروضة في السوق عن هذا الجدول. للاطلاع على التفاصيل، يرجى مراجعة الوكلاء المعتمدين من Dongfeng VOYAH. تُجرى أي تغييرات محتملة دون إشعار مسبق.'
)

const ctaBandNote = t(
  'Book a test drive',
  'Réserver un essai',
  'احجز تجربة قيادة'
)

const brochureNote = t(
  'Download the brochure',
  'Télécharger la brochure',
  'تحميل الكتيب'
)

/** Libellés des boutons de demande, identiques sur les deux pages modèles. */
export const modelCtaLabels = {
  testDrive: ctaBandNote,
  quote: t('Request a quote', 'Demander un devis', 'اطلب عرض سعر'),
  brochure: brochureNote
}

const QA = '/assets/qatar/images'
const QA_VIDEOS = '/assets/qatar/videos'

export const freePageContent: ModelPageContent = {
  logo: `${QA}/logo_free-5145b289d90a90daf245e873c46b0fb5.png.webp`,
  heroVideo: `${QA_VIDEOS}/voyah-free-318-compress.mp4`,
  heroPoster: `${QA}/voyah-free-open.webp`,
  tagline: t(
    'Performance-Class Intelligent Electric SUV',
    'SUV électrique intelligent de classe performance',
    'سيارة دفع رباعي كهربائية ذكية من فئة الأداء'
  ),
  heroMetrics: [
    { label: t('Range up to', 'Autonomie jusqu’à', 'المدى حتى'), value: '1155 km' },
    { label: t('Wheel Drive', 'Transmission', 'نظام الدفع'), value: 'AWD' },
    { label: t('Engine power', 'Puissance', 'قوة المحرك'), value: '360kW' },
    { label: t('0-100 km/h', '0-100 km/h', '0-100 كم/س'), value: '4,2s' }
  ],
  compactMetrics: [
    { label: t('0 - 100 km/h', '0 - 100 km/h', '0 - 100 كم/س'), value: '4,2 s' },
    { label: t('Range (WLTP)', 'Autonomie (WLTP)', 'المدى (WLTP)'), value: '1155 km' },
    { label: t('Wheel Drive', 'Transmission', 'نظام الدفع'), value: 'AWD' }
  ],
  heroVersions: [
    {
      name: t('VOYAH FREE 2WD', 'VOYAH FREE 2WD', 'VOYAH FREE 2WD'),
      metrics: [
        { label: t('Range up to', 'Autonomie jusqu’à', 'المدى حتى'), value: '1240 km' },
        { label: t('Wheel Drive', 'Transmission', 'نظام الدفع'), value: '2WD' },
        { label: t('Engine power', 'Puissance', 'قوة المحرك'), value: '200kW' },
        { label: t('0-100 km/h', '0-100 km/h', '0-100 كم/س'), value: '7,6s' }
      ]
    },
    {
      name: t('VOYAH FREE 4WD', 'VOYAH FREE 4WD', 'VOYAH FREE 4WD'),
      metrics: [
        { label: t('Range up to', 'Autonomie jusqu’à', 'المدى حتى'), value: '1155 km' },
        { label: t('Wheel Drive', 'Transmission', 'نظام الدفع'), value: 'AWD' },
        { label: t('Engine power', 'Puissance', 'قوة المحرك'), value: '360kW' },
        { label: t('0-100 km/h', '0-100 km/h', '0-100 كم/س'), value: '4,2s' }
      ]
    }
  ],
  comfortTitle: t('Enjoy Comfort', 'Profitez du confort', 'استمتع بالراحة'),
  sections: [
    { type: 'parallax', image: `${QA}/ZHAO9366-scaled-1.webp` },
    {
      type: 'comfortRows',
      rows: [
        {
          image: `${QA}/Panoramic-sunroof.webp`,
          text: t('Panoramic sunroof', 'Toit panoramique', 'سقف بانورامي')
        },
        {
          image: `${QA}/Pantheon-Danner-High-fidelity-HiFi-sound-quality.webp`,
          text: t(
            'Dynaudio Sound System',
            'Système de son Dynaudio',
            'نظام صوت Dynaudio'
          )
        },
        {
          image: `${QA}/First-class-seat.webp`,
          text: t(
            'First-class seat for optimal comfort Electric adjustment/heating/ventilation/massage',
            'Siège première classe pour un confort optimal\u00A0: réglage électrique, chauffage, ventilation et massage.',
            'مقعد من الدرجة الأولى لراحة مثالية: تعديل كهربائي وتدفئة وتهوية وتدليك'
          )
        },
        {
          image: `${QA}/Full-gamut-sound-control-ambient-lamp-Infinite.webp`,
          text: t(
            'Infinite color change, switchable at will',
            'Changement de couleur infini, commutable à volonté',
            'تغيير لا نهائي للألوان يمكن التبديل بينها بحرية'
          )
        }
      ]
    },
    { type: 'parallax', image: `${QA}/full-electric-battery-7dc622d64b667780123b39fa26efd038.webp` },
    { type: 'band', image: `${QA}/Z9-scaled-1.webp`, variant: 'cta', cta: 'quote' },
    { type: 'spacer' },
    {
      type: 'hoverGrid',
      tiles: [
        {
          image: `${QA}/Environment-friendly-water-based-materials-2.webp`,
          text: t(
            'Environment-friendly water-based materials used by the vehicle Environment-friendly, healthy, no odor after 8 hours of exposure to the sun',
            'Matériaux à base d’eau respectueux de l’environnement : sains et sans odeur après 8 heures d’exposition au soleil',
            'مواد صديقة للبيئة مصنوعة من الماء في المركبة، صحية وبدون رائحة حتى بعد 8 ساعات من التعرض لأشعة الشمس'
          )
        },
        {
          image: `${QA}/IAQS-Effective-isolation-of-pollution-2.webp`,
          text: t(
            'IAQS Effective isolation of pollution outside the vehicle',
            'IAQS : isolation efficace de la pollution exterieure',
            'IAQS عزل فعال للتلوث الخارجي عن المركبة'
          )
        }
      ]
    },
    { type: 'band', image: `${QA}/Before-last-photo.webp`, variant: 'cta' },
    { type: 'spacerLarge' },
    { type: 'specs' },
    { type: 'spacer' },
    { type: 'band', image: `${QA}/Last-Photo.webp`, variant: 'cta', cta: 'quote' }
  ],
  configLabel: configLabelValue,
  specTabs: [
    {
      id: '1',
      label: t('Basic parameter', 'Caractéristiques générales', 'المواصفات الأساسية'),
      rows: [
        { name: t('Length (mm)', 'Longueur (mm)', 'الطول (مم)'), value: t('4905', '4905', '4905') },
        { name: t('Width (mm)', 'Largeur (mm)', 'العرض (مم)'), value: t('1950', '1950', '1950') },
        { name: t('Height (mm)', 'Hauteur (mm)', 'الارتفاع (مم)'), value: t('1645', '1645', '1645') },
        {
          name: t('Wheel base (mm)', 'Empattement (mm)', 'قاعدة العجلات (مم)'),
          value: t('2960', '2960', '2960')
        }
      ]
    },
    {
      id: '2',
      label: t('Electric', 'Chaîne de propulsion', 'النظام الكهربائي'),
      rows: [
        { name: t('Drive system', 'Transmission', 'نظام الدفع'), value: t('AWD', '4 roues motrices', 'دفع رباعي') },
        {
          name: t('Max. power (kW)', 'Puissance max. (kW)', 'أقصى قدرة (كيلوواط)'),
          value: t('360/510', '360/510', '360/510')
        },
        {
          name: t('Max. torque (N·m)', 'Couple max. (N·m)', 'أقصى عزم (نيوتن·متر)'),
          value: t('720/1040', '720/1040', '720/1040')
        },
        {
          name: t('Speedup time (s)', 'Temps d’accélération (s)', 'زمن التسارع (ثانية)'),
          value: t('4.2/4.5', '4,2/4,5', '4.2/4.5')
        },
        {
          name: t('Max. speed (km/h)', 'Vitesse max. (km/h)', 'السرعة القصوى (كم/س)'),
          value: t('200', '200', '200')
        },
        {
          name: t('Battery capacity (kWh)', 'Capacité de la batterie (kWh)', 'سعة البطارية (كيلوواط ساعة)'),
          value: t('106/39', '106/39', '106/39')
        },
        {
          name: t('Range (km)', 'Autonomie (km)', 'المدى (كم)'),
          value: t(
            '200(on battery) / 1000(on petrol)',
            '200 (sur batterie) / 1000 (sur essence)',
            '200 (على البطارية) / 1000 (على البنزين)'
          )
        }
      ]
    },
    {
      id: '3',
      label: t('Chassis system', 'Liaisons au sol', 'نظام الهيكل'),
      rows: [
        {
          name: t('Suspension system', 'Suspension', 'نظام التعليق'),
          value: t(
            '100mm Comfort adjustable air suspension',
            'Suspension pneumatique ajustable de 100 mm',
            'تعليق هوائي مريح قابل للتعديل بارتفاع 100 مم'
          )
        }
      ]
    },
    {
      id: '4',
      label: t('Featured configurations', 'Équipements phares', 'أهم التجهيزات'),
      rows: [
        {
          name: t(
            'Intelligent dimmable panoramic roof',
            'Toit panoramique intelligent à teinte variable',
            'سقف بانورامي ذكي معتّم كهربائيًا'
          ),
          value: dot
        },
        { name: t('Transparent chassis', 'Châssis transparent', 'هيكل شفاف'), value: dot },
        { name: t('Dynaudio', 'Dynaudio', 'Dynaudio'), value: dot },
        {
          name: t(
            '12.3" +12.3" +12.3" lifting screen',
            'Trois écrans relevables de 12,3"',
            'ثلاث شاشات قابلة للرفع قياس 12.3 بوصة'
          ),
          value: dot
        },
        {
          name: t(
            'Electric seat 12-way adjustment',
            'Siège électrique à réglage 12 directions',
            'مقعد كهربائي بتعديل من 12 اتجاهًا'
          ),
          value: dot
        },
        {
          name: t('Auto parking assistant', 'Aide au stationnement automatique', 'مساعد الركن التلقائي'),
          value: dot
        }
      ]
    }
  ],
  specNote
}


export const dreamPageContent: ModelPageContent = {
  logo: `${QA}/logo_dream-0d008dae1da07d45ff4669e5f0ee80fe.webp`,
  heroVideo: `${QA_VIDEOS}/voyah-dream-compressed.mp4`,
  heroPoster: `${QA}/dream-hero-b81c5587c84ddbd898df9a9438d63e55.webp`,
  tagline: t(
    'Premium Luxury Class Full Electric MPV',
    'Monospace entièrement électrique de classe luxe premium',
    'مركبة MPV كهربائية بالكامل من فئة الفخامة المميزة'
  ),
  heroMetrics: [
    { label: t('Range up to', 'Autonomie jusqu’à', 'المدى حتى'), value: '915 km' },
    { label: t('Wheel Drive', 'Transmission', 'نظام الدفع'), value: '4WD' },
    {
      label: t('Torque', 'Couple', 'عزم الدوران'),
      value: '',
      lines: [
        { label: t('Max. front motor', 'Max moteur avant', 'أقصى المحرك الأمامي'), value: '310 Nm' },
        { label: t('Max. rear motor', 'Max moteur arrière', 'أقصى المحرك الخلفي'), value: '310 Nm' }
      ]
    },
    { label: t('0-100 km/h', '0-100 km/h', '0-100 كم/س'), value: '5,9s' }
  ],
  compactMetrics: [
    { label: t('0 - 100 km/h', '0 - 100 km/h', '0 - 100 كم/س'), value: '5,9 s' },
    { label: t('Range (WLTP)', 'Autonomie (WLTP)', 'المدى (WLTP)'), value: '915 km' },
    { label: t('Wheel Drive', 'Transmission', 'نظام الدفع'), value: '4WD' }
  ],
  sections: [
    {
      type: 'band',
      image: `${QA}/1024-59e0cb2a.webp`,
      variant: 'intro',
      text: t(
        'Comfortable and luxury, enjoy the exclusive space',
        'Confort et luxe : profitez d’un espace rien qu’à vous',
        'راحة وفخامة، استمتع بمساحة حصرية'
      )
    },
    { type: 'spacer' },
    {
      type: 'cards',
      cards: [
        {
          image: `${QA}/2-75c7d16e.webp`,
          title: blankTitle,
          body: t(
            'Deep-sea sound insulation and noise reduction',
            'Isolation et réduction du bruit d’une profondeur marine',
            'عزل صوتي وتقليل للضوضاء بعمق البحر'
          )
        },
        {
          image: `${QA}/3-327043cc.webp`,
          title: blankTitle,
          body: t(
            'High-end Dynaudio Sound System',
            'Système audio haut de gamme Dynaudio',
            'نظام صوت Dynaudio الراقي'
          )
        },
        {
          image: `${QA}/7-bc6d8dde.webp`,
          title: blankTitle,
          body: t(
            'Second-row seats giving passengers an impression of seating in a mobile parlor',
            'Les sièges du second rang donnent aux passagers l’impression de prendre place dans un salon roulant',
            'تمنح مقاعد الصف الثاني الركاب انطباعًا بالجلوس في صالون متنقل'
          )
        },
        {
          image: `${QA}/6-8e58e786.webp`,
          title: blankTitle,
          body: t(
            'Oversize trunk',
            'Un coffre surdimensionné',
            'صندوق أمتعة كبير الحجم'
          )
        }
      ]
    },
    { type: 'spacer' },
    { type: 'parallax', image: `${QA}/dream-exterior-2.webp` },
    {
      type: 'comfortRows',
      rows: [
        {
          image: `${QA}/1-1_1024-50b09e74.webp`,
          text: t(
            'Warm technology shows graceful quality',
            'Une technologie chaleureuse au service d’une élégance aboutie',
            'تقنية دافئة تعكس جودة راقية'
          )
        },
        {
          image: `${QA}/dream-intelligence.webp`,
          text: t(
            'Redefine [Intelligent MPV]',
            'L’intelligence au service de votre confort.',
            'إعادة تعريف [MPV الذكي]'
          )
        },
        {
          image: `${QA}/safety-dream.webp`,
          text: t(
            'Redefine [Safe MPV]',
            '',
            'إعادة تعريف [MPV الآمن]'
          ),
          description: t('', 'Une structure renforcée et des technologies avancées pour protéger chaque voyage.', '')
        },
        {
          image: `${QA}/3-2-c1e84452.webp`,
          text: t(
            'Redefine [Performance MPV]',
            'La puissance au-delà des attentes.',
            'إعادة تعريف [MPV عالي الأداء]'
          )
        }
      ]
    },
    { type: 'spacer' },
    { type: 'parallax', image: `${QA}/3-1_1024-a8441745.webp` },
    {
      type: 'cards',
      heading: t(
        'Original Dual Power Technology Platform',
        'Plateforme Dual Power d’origine',
        'منصة تقنية القوة المزدوجة الأصلية'
      ),
      cards: [
        {
          image: `${QA}/1-1-a7576587.webp`,
          title: blankTitle,
          body: t('Super power', 'Une puissance supérieure', 'قوة هائلة')
        },
        {
          image: `${QA}/1-2-55eca2e5.webp`,
          title: blankTitle,
          body: t(
            'High-efficiency and energy-saving',
            'Haute efficacité et sobriété énergétique',
            'عالية الكفاءة وموفرة للطاقة'
          )
        },
        {
          image: `${QA}/1-2-eb23fb69.webp`,
          title: blankTitle,
          body: t('Battery safety', 'Une batterie sécurisée', 'سلامة البطارية')
        }
      ]
    },
    { type: 'spacer' },
    { type: 'parallax', image: `${QA}/Voyah-dream-top.webp` },
    { type: 'spacerLarge' },
    { type: 'specs' },
    { type: 'spacer' },
    { type: 'parallax', image: `${QA}/voyah-dream-home_2.webp` },
    { type: 'band', image: `${QA}/1024-5a8008ee.webp`, variant: 'cta', cta: 'quote' }
  ],
  configLabel: configLabelValue,
  specTabs: [
    {
      id: '1',
      label: t('Basic parameter', 'Caractéristiques générales', 'المواصفات الأساسية'),
      rows: [
        { name: t('Length (mm)', 'Longueur (mm)', 'الطول (مم)'), value: t('5315', '5315', '5315') },
        { name: t('Width (mm)', 'Largeur (mm)', 'العرض (مم)'), value: t('1985', '1985', '1985') },
        {
          name: t('Height (mm)', 'Hauteur (mm)', 'الارتفاع (مم)'),
          value: t('1800/1820', '1800/1820', '1800/1820')
        },
        {
          name: t('Wheel base (mm)', 'Empattement (mm)', 'قاعدة العجلات (مم)'),
          value: t('3200', '3200', '3200')
        }
      ]
    },
    {
      id: '2',
      label: t('Electric', 'Chaîne de propulsion', 'النظام الكهربائي'),
      rows: [
        {
          name: t('Drive system', 'Transmission', 'نظام الدفع'),
          value: t(
            'Permanent magnet synchronous Motors Intelligent 4WD',
            'Moteurs synchrones à aimants permanents, 4 roues motrices intelligentes',
            'محركات متزامنة بمغناطيس دائم مع دفع رباعي ذكي'
          )
        },
        {
          name: t('Max. power (kW)', 'Puissance max. (kW)', 'أقصى قدرة (كيلوواط)'),
          value: t('320/290', '320/290', '320/290')
        },
        {
          name: t('Max. torque (N·m)', 'Couple max. (N·m)', 'أقصى عزم (نيوتن·متر)'),
          value: t('620/610', '620/610', '620/610')
        },
        {
          name: t('Speedup time (s)', 'Temps d’accélération (s)', 'زمن التسارع (ثانية)'),
          value: t('5.8/6.6', '5,8/6,6', '5.8/6.6')
        },
        {
          name: t('Max. speed (km/h)', 'Vitesse max. (km/h)', 'السرعة القصوى (كم/س)'),
          value: t('200', '200', '200')
        },
        {
          name: t('Battery capacity (kWh)', 'Capacité de la batterie (kWh)', 'سعة البطارية (كيلوواط ساعة)'),
          value: t('108.7/25.57', '108,7/25,57', '108.7/25.57')
        },
        {
          name: t('Range (km)', 'Autonomie (km)', 'المدى (كم)'),
          value: t(
            '215(on battery) / 700(on petrol)',
            '215 (sur batterie) / 700 (sur essence)',
            '215 (على البطارية) / 700 (على البنزين)'
          )
        }
      ]
    },
    {
      id: '3',
      label: t('Chassis system', 'Liaisons au sol', 'نظام الهيكل'),
      rows: [
        {
          name: t('Suspension system', 'Suspension', 'نظام التعليق'),
          value: t(
            'Double wishbone independent suspension/Five unite-pole autocephaly suspension',
            'Suspension indépendante à double triangle / suspension à cinq bras',
            'تعليق مستقل بذراعين مثلثيين/تعليق بخمس وصلات'
          )
        }
      ]
    },
    {
      id: '4',
      label: t('Featured configurations', 'Équipements phares', 'أهم التجهيزات'),
      rows: [
        {
          name: t(
            'Luxurious double side power gates',
            'Portes latérales électriques',
            'أبواب جانبية كهربائية فاخرة'
          ),
          value: dot
        },
        { name: t('I-key', 'Clé intelligente', 'المفتاح الذكي'), value: dot },
        {
          name: t(
            'Three temperature zone auto AC',
            'Climatisation automatique tri-zone',
            'تكييف هواء تلقائي ثلاثي المناطق'
          ),
          value: dot
        },
        {
          name: t(
            'Second seat heating, ventilation and massage',
            'Sièges arrière chauffants, ventilés et massants',
            'تدفئة وتهوية وتدليك مقاعد الصف الثاني'
          ),
          value: dot
        },
        {
          name: t(
            'Passenger seat multi-way adjustment boss key',
            'Siège passager à réglage multiple avec commande « boss »',
            'زر التحكم بمقعد الراكب متعدد الاتجاهات'
          ),
          value: dot
        }
      ]
    }
  ],
  specNote
}

const PASSION_IMG = '/voyah-resources/images/car/passion/1920'
const COURAGE_IMG = '/voyah-resources/images/car/courage/1920'
/** Visuels officiels de la version globale (aucune surimpression en chinois). */
const GLOBAL_IMG = '/voyah-resources/images/global'

/**
 * PASSION : même système de page que FREE/DREAM, sans vidéo locale (le visuel
 * de hero tient lieu de bannière). Les chiffres reprennent les seules données
 * documentées du catalogue tunisien.
 */
export const passionPageContent: ModelPageContent = {
  logo: `${GLOBAL_IMG}/passion-wordmark.png`,
  heroVideo: 'https://voyahlebanon.com/media/passion/hero-video.mp4',
  heroPoster: 'https://voyahlebanon.com/media/passion/hero-video-poster.jpg',
  tagline: t(
    'The new executive electric flagship sedan',
    'La nouvelle berline électrique phare exécutive',
    'سيدان كهربائية تنفيذية رائدة جديدة'
  ),
  heroMetrics: [
    { label: t('Length', 'Longueur', 'الطول'), value: '5088 mm' },
    { label: t('Wheelbase', 'Empattement', 'قاعدة العجلات'), value: '3000 mm' },
    { label: t('Power mode', 'Motorisation', 'نوع الحركة'), value: 'REV/PHEV' },
    { label: t('Body', 'Carrosserie', 'نوع الهيكل'), value: 'Sedan' }
  ],
  compactMetrics: [
    { label: t('Length', 'Longueur', 'الطول'), value: '5088 mm' },
    { label: t('Wheelbase', 'Empattement', 'قاعدة العجلات'), value: '3000 mm' },
    { label: t('Power mode', 'Motorisation', 'نوع الحركة'), value: 'REV/PHEV' }
  ],
  comfortTitle: t('Enjoy Comfort', 'Profitez du confort', 'استمتع بالراحة'),
  sections: [
    { type: 'parallax', image: `${GLOBAL_IMG}/passion-front.jpg` },
    {
      type: 'comfortRows',
      rows: [
        {
          image: `${GLOBAL_IMG}/passion-roof.jpg`,
          text: t(
            'Panoramic glass roof that floods the cabin with light',
            'Toit vitré panoramique qui inonde l’habitacle de lumière',
            'سقف زجاجي بانورامي يمل المقصورة بالضوء'
          )
        },
        {
          image: `${GLOBAL_IMG}/passion-cockpit.jpg`,
          text: t(
            'Triple-screen cockpit: driving data, comfort and entertainment at a glance',
            'Cockpit à triple écran : conduite, confort et divertissement d’un seul regard',
            'قمرة بثلاث شاشات: بيانات القيادة والراحة والترفيه في لمحة واحدة'
          )
        },
        {
          image: `${GLOBAL_IMG}/passion-chassis.jpg`,
          text: t(
            'Electronically controlled air suspension that adapts to every road',
            'Suspension pneumatique à commande électronique, adaptée à chaque route',
            'تعليق هوائي متحكم به إلكترونيًا يتكيّف مع كل الطرق'
          )
        },
        {
          image: `${PASSION_IMG}/fl13.jpg`,
          text: t(
            'Rear touch tablet to command the executive seat',
            'Tablette tactile à l’arrière pour commander le siège exécutif',
            'لوحة لمس خلفية للتحكم بالمقعد التنفيذي'
          )
        }
      ]
    },
    {
      type: 'cards',
      heading: t('All-round intelligence', 'Intelligence à 360°', 'ذكاء شامل'),
      cards: [
        {
          image: `${PASSION_IMG}/fl05.jpg`,
          title: t(
            'Central electronic architecture',
            'Architecture électronique centrale',
            'بنية إلكترونية مركزية'
          ),
          body: t(
            'Comfort, safety and connectivity functions grouped and updatable over the air',
            'Fonctions de confort, de sécurité et de connectivité regroupées et mises à jour à distance',
            'وظائف الراحة والسلامة والاتصال مجمّعة وقابلة للتحديث عبر الهواء'
          )
        },
        {
          image: `${PASSION_IMG}/fl20.jpg`,
          title: t(
            'REV/PHEV series-parallel hybrid',
            'Hybride série-parallèle REV/PHEV',
            'نظام هجين متوازي-تسلسلي REV/PHEV'
          ),
          body: t(
            'Electric drive at the heart, a petrol range extender for long journeys',
            'La traction électrique au cœur, un prolongateur d’autonomie essence pour les grands trajets',
            'الدفع الكهربائي في القلب، وممتد مدى يعمل بالبنزين للرحلات الطويلة'
          )
        }
      ]
    },
    {
      type: 'band',
      image: `${GLOBAL_IMG}/passion-cabin.jpg`,
      variant: 'intro',
      text: t(
        'Designed for executives: a silent cabin, four connected screens and lounge-level comfort.',
        'Pensée pour les cadres : habitacle silencieux, quatre écrans connectés et confort de salon.',
        'مصممة للمسؤولين: مقصورة هادئة وأربع شاشات متصلة وراحة بمستوى الصالون.'
      )
    },
    {
      type: 'cards',
      heading: t('High quality safety', 'Sécurité de haute qualité', 'سلامة عالية الجودة'),
      cards: [
        {
          image: `${GLOBAL_IMG}/passion-body.jpg`,
          title: t(
            'Rigid hybrid body structure',
            'Structure de carrosserie rigide hybride',
            'هيكل جسم هجين صلب'
          ),
          body: t(
            'High-strength steel and aluminium surround the cabin',
            'Acier haute résistance et aluminium entourent l’habitacle',
            'فولاذ عالي الصلابة وألمنيوم يحيطان بالمقصورة'
          )
        },
        {
          image: `${GLOBAL_IMG}/passion-battery.jpg`,
          title: t(
            'Multi-layer battery protection',
            'Protection de la batterie en plusieurs couches',
            'حماية متعددة الطبقات للبطارية'
          ),
          body: t(
            'The battery pack is shielded layer by layer, from cells to casing',
            'Le pack batterie est protégé couche par couche, des cellules au boîtier',
            'حزمة البطارية محمية طبقة تلو الأخرى، من الخلايا إلى الغلاف'
          )
        }
      ]
    },
    { type: 'band', image: `${GLOBAL_IMG}/passion-profile.jpg`, variant: 'cta', cta: 'quote' },
    { type: 'specs' }
  ],
  configLabel: configLabelValue,
  specTabs: [
    {
      id: '1',
      label: t('Basic parameters', 'Paramètres de base', 'المعايير الأساسية'),
      rows: [
        {
          name: t('Length x Width x Height (mm)', 'Longueur x Largeur x Hauteur (mm)', 'الطول x العرض x الارتفاع (مم)'),
          value: t('5088 x 1970 x 1505', '5088 x 1970 x 1505', '5088 × 1970 × 1505')
        },
        {
          name: t('Wheelbase (mm)', 'Empattement (mm)', 'قاعدة العجلات (مم)'),
          value: t('3000', '3000', '3000')
        },
        {
          name: t('Power mode', 'Motorisation', 'نوع الحركة'),
          value: t('REV/PHEV', 'REV/PHEV', 'REV/PHEV')
        },
        {
          name: t('Body type', 'Carrosserie', 'نوع الهيكل'),
          value: t('Sedan', 'Berline', 'سيدان')
        }
      ]
    },
    {
      id: '2',
      label: t('Featured configurations', 'Équipements phares', 'أهم التجهيزات'),
      rows: [
        {
          name: t('Panoramic glass roof', 'Toit vitré panoramique', 'سقف زجاجي بانورامي'),
          value: dot
        },
        {
          name: t('Triple-screen cockpit', 'Cockpit à triple écran', 'قمرة بثلاث شاشات'),
          value: dot
        },
        {
          name: t('Air suspension', 'Suspension pneumatique', 'تعليق هوائي'),
          value: dot
        },
        {
          name: t('Rear touch tablet', 'Tablette tactile arrière', 'لوحة لمس خلفية'),
          value: dot
        }
      ]
    }
  ],
  specNote
}

/** COURAGE : même gabarit de page, SUV 100 % électrique. */
export const couragePageContent: ModelPageContent = {
  logo: `${GLOBAL_IMG}/courage-wordmark.png`,
  heroVideo: '/assets/updates/courage-hero.mp4',
  heroPoster: '/assets/updates/courage-hero-poster.jpg',
  tagline: t(
    'Premium electric SUV',
    'SUV électrique premium',
    'سيارة SUV كهربائية فاخرة'
  ),
  heroMetrics: [
    { label: t('Length', 'Longueur', 'الطول'), value: '4725 mm' },
    { label: t('Wheelbase', 'Empattement', 'قاعدة العجلات'), value: '2900 mm' },
    { label: t('Power mode', 'Motorisation', 'نوع الحركة'), value: 'BEV' },
    { label: t('Body', 'Carrosserie', 'نوع الهيكل'), value: 'SUV' }
  ],
  compactMetrics: [
    { label: t('Length', 'Longueur', 'الطول'), value: '4725 mm' },
    { label: t('Wheelbase', 'Empattement', 'قاعدة العجلات'), value: '2900 mm' },
    { label: t('Power mode', 'Motorisation', 'نوع الحركة'), value: 'BEV' }
  ],
  comfortTitle: t('Enjoy Comfort', 'Profitez du confort', 'استمتع بالراحة'),
  sections: [
    { type: 'parallax', image: `${GLOBAL_IMG}/courage-charge.jpg` },
    {
      type: 'comfortRows',
      rows: [
        {
          image: `${GLOBAL_IMG}/courage-screen.jpg`,
          text: t(
            'High-definition central screen with intuitive access to navigation, climate control and multimedia functions',
            'Écran central haute définition offrant un accès intuitif à la navigation, à la climatisation et aux fonctions multimédias.',
            'شاشة مركزية عالية الدقة توفر وصولًا بديهيًا إلى الملاحة والتكييف والوظائف المتعددة الوسائط'
          )
        },
        {
          image: `${GLOBAL_IMG}/courage-seats.jpg`,
          text: t(
            'Perforated seats for the whole family',
            'Sièges perforés pour toute la famille',
            'مقاعد مثقبة لجميع أفراد العائلة'
          )
        },
        {
          image: '/assets/updates/courage-connected.png',
          text: t(
            'On-board entertainment',
            'Divertissement à bord',
            'ترفيه على متن السيارة'
          )
        }
      ]
    },
    {
      type: 'cards',
      heading: t('All-round intelligence', 'Intelligence à 360°', 'ذكاء شامل'),
      cards: [
        {
          image: `${COURAGE_IMG}/h37_pc25_0001.jpg`,
          title: t(
            '360° camera views',
            'Vues panoramiques 360°',
            'رؤية محيطية 360°'
          ),
          body: t(
            'Cameras make parking and manoeuvring in tight spaces easier',
            'Les caméras facilitent le stationnement et les manœuvres dans les espaces serrés.',
            'تسهّل الكاميرات ركن السيارة والمناورة في المساحات الضيقة'
          )
        },
        {
          image: `${GLOBAL_IMG}/courage-cargo.jpg`,
          title: t(
            'A fifth place for getaways',
            'Une cinquième place pour les évasions',
            'المكان الخامس للنزهات'
          ),
          body: t(
            'A large boot and a modular interior, ideal for adapting to all your needs',
            'Un grand coffre et un intérieur modulable, idéal pour s’adapter à tous vos besoins.',
            'صندوق كبير ومقصورة قابلة للتعديل، مثالية للتكيف مع جميع احتياجاتك'
          )
        }
      ]
    },
    {
      type: 'band',
      image: '/assets/updates/courage-charging.png',
      variant: 'intro',
      fullImage: true,
      text: t(
        'A pure electric SUV sized for the city and relaxed on the highway.',
        'Un SUV 100 % électrique à la taille idéale en ville et serein sur autoroute.',
        'سيارة SUV كهربائية بالكامل بحجم مثالي في المدينة وهادئة على الطرق السريعة.'
      )
    },
    {
      type: 'cards',
      heading: t('High quality safety', 'Sécurité de haute qualité', 'سلامة عالية الجودة'),
      cards: [
        {
          image: `${COURAGE_IMG}/h37_pc28_0001.jpg`,
          title: t(
            'Rigid hybrid body structure',
            'Structure de carrosserie rigide hybride',
            'هيكل جسم هجين صلب'
          ),
          body: t(
            'High-strength steel and aluminium protect the cabin in an impact',
            'Acier haute résistance et aluminium protègent l’habitacle en cas de choc',
            'فولاذ عالي الصلابة والألمنيوم يحميان المقصورة عند الاصطدام'
          )
        },
        {
          image: `${COURAGE_IMG}/h37_pc26_0001.jpg`,
          title: t(
            'Multi-layer battery protection',
            'Protection de la batterie en plusieurs couches',
            'حماية متعددة الطبقات للبطارية'
          ),
          body: t(
            'The battery pack is shielded layer by layer, from cells to casing',
            'Le pack batterie est protégé couche par couche, des cellules au boîtier',
            'حزمة البطارية محمية طبقة تلو الأخرى، من الخلايا إلى الغلاف'
          )
        }
      ]
    },
    { type: 'band', image: '/assets/updates/courage-safety.png', variant: 'cta', cta: 'quote', fullImage: true },
    { type: 'specs' }
  ],
  configLabel: configLabelValue,
  specTabs: [
    {
      id: '1',
      label: t('Basic parameters', 'Paramètres de base', 'المعايير الأساسية'),
      rows: [
        {
          name: t('Length x Width x Height (mm)', 'Longueur x Largeur x Hauteur (mm)', 'الطول x العرض x الارتفاع (مم)'),
          value: t('4725 x 1900 x 1650', '4725 x 1900 x 1650', '4725 × 1900 × 1650')
        },
        {
          name: t('Wheelbase (mm)', 'Empattement (mm)', 'قاعدة العجلات (مم)'),
          value: t('2900', '2900', '2900')
        },
        {
          name: t('Power mode', 'Motorisation', 'نوع الحركة'),
          value: t('BEV', 'BEV', 'BEV')
        },
        {
          name: t('Body type', 'Carrosserie', 'نوع الهيكل'),
          value: t('SUV', 'SUV', 'SUV')
        }
      ]
    },
    {
      id: '2',
      label: t('Featured configurations', 'Équipements phares', 'أهم التجهيزات'),
      rows: [
        {
          name: t('Central touchscreen', 'Écran tactile central', 'شاشة لمس مركزية'),
          value: dot
        },
        {
          name: t('Ventilated seats', 'Sièges ventilés', 'مقاعد مهواة'),
          value: dot
        },
        {
          name: t('360° camera views', 'Vues panoramiques 360°', 'رؤية محيطية 360°'),
          value: dot
        },
        {
          name: t('Five seats', 'Cinq places', 'خمسة مقاعد'),
          value: dot
        }
      ]
    }
  ],
  specNote
}

/** Contenu de page modèle par slug public ; absent = page modèle générique. */
export const modelPageContentBySlug: Record<string, ModelPageContent> = {
  'Free': freePageContent,
  'Dream': dreamPageContent,
  'Passion': passionPageContent,
  'Courage': couragePageContent
}
