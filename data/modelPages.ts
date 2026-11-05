/**
 * Contenu des pages modèles publiques (FREE et DREAM), calé sur la structure du
 * site officiel VOYAH Qatar : hero vidéo, bandeau de chiffres, bandes pleine
 * largeur, lignes « confort » alternées, grilles de cartes, tableau des
 * caractéristiques à onglets. Les sections sont déclarées dans l'ordre réel de
 * chaque page de référence.
 */
import { t, type Localized } from './dealer'

export type ModelMetric = { label: Localized; value: string }

export type ModelComfortRow = { image: string; text: Localized }

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
  | { type: 'band'; image: string; variant: 'intro' | 'cta'; text?: Localized }
  | { type: 'specs' }

export type ModelPageContent = {
  logo: string
  heroVideo: string
  heroPoster: string
  tagline: Localized
  /** Chiffres posés sur le hero, en 2×2 sur mobile. */
  heroMetrics: ModelMetric[]
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
export const modelCtaLabels = { testDrive: ctaBandNote, brochure: brochureNote }

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
    { label: t('Range up to', 'Autonomie jusqu’à', 'المدى حتى'), value: '1200 km' },
    { label: t('Wheel Drive', 'Transmission', 'نظام الدفع'), value: 'AWD' },
    { label: t('Engine power', 'Puissance', 'قوة المحرك'), value: '360kW' },
    { label: t('0-100 km/h', '0-100 km/h', '0-100 كم/س'), value: '4,2s' }
  ],
  compactMetrics: [
    { label: t('0 - 100 km/h', '0 - 100 km/h', '0 - 100 كم/س'), value: '4,2 s' },
    { label: t('Range (WLTP)', 'Autonomie (WLTP)', 'المدى (WLTP)'), value: '1200 km' },
    { label: t('Wheel Drive', 'Transmission', 'نظام الدفع'), value: 'AWD' }
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
            'Pantheon Danner High fidelity HiFi sound quality',
            'Son haute fidélité Pantheon Danner',
            'جودة صوت بانثيون دانر عالية الدقة'
          )
        },
        {
          image: `${QA}/First-class-seat.webp`,
          text: t(
            'First-class seat to give you greater sleeping comfort Electric adjustment/heating/ventilation/massage',
            'Siège première classe pour un confort de couchage optimal : réglage électrique, chauffage, ventilation et massage',
            'مقعد من الدرجة الأولى يمنحك راحة نوم أكبر: تعديل كهربائي وتدفئة وتهوية وتدليك'
          )
        },
        {
          image: `${QA}/Full-gamut-sound-control-ambient-lamp-Infinite.webp`,
          text: t(
            'Full-gamut sound-control ambient lamp Infinite color change, switchable at will',
            'Éclairage d’ambiance piloté par la voix : changement de couleur infini, commutable à volonté',
            'إضاءة محيطية يُتحكم بها صوتيًا: تغيير لا نهائي للألوان يمكن التبديل بينها بحرية'
          )
        }
      ]
    },
    { type: 'parallax', image: `${QA}/full-electric-battery-7dc622d64b667780123b39fa26efd038.webp` },
    {
      type: 'cards',
      heading: t('All-round intelligence', 'Intelligence à 360°', 'ذكاء شامل'),
      cards: [
        {
          image: `${QA}/1-1-5f1b03b1.webp`,
          title: t(
            'Visual automatic parking system',
            'Stationnement automatique guidé par caméra',
            'نظام الركن التلقائي البصري'
          ),
          body: t(
            'Horizontal/vertical/diagonal 45°/60°/ramp/head-on parking',
            'Créneau perpendiculaire, en bataille, en épi 45°/60°, en rampe et face avant',
            'الركن الأفقي/العمودي/القطري 45°/60°/المنحدر/المواجه'
          )
        },
        {
          image: `${QA}/1-3-decf2b13.webp`,
          title: t(
            '360° roundviews + transparent chassis',
            'Vues panoramiques 360° + châssis transparent',
            'رؤية محيطية 360° + هيكل شفاف'
          ),
          body: t(
            'Real-time display of blind spot under the chassis, improving the safety of driving in special road conditions',
            'Affichage en temps réel des angles morts sous le véhicule, pour sécuriser la conduite dans les conditions de route les plus particulières',
            'عرض النقاط العمياء أسفل الهيكل في الوقت الفعلي، مما يحسّن سلامة القيادة في ظروف الطرق الخاصة'
          )
        }
      ]
    },
    { type: 'band', image: `${QA}/Z9-scaled-1.webp`, variant: 'cta' },
    {
      type: 'cards',
      heading: t('High quality [safety]', 'Sécurité de haute qualité', 'سلامة عالية الجودة'),
      cards: [
        {
          image: `${QA}/2-1-6a7d1e0f.webp`,
          title: t(
            'Cloud battery management system (BMS)',
            'Gestion des batteries par le cloud (BMS)',
            'نظام إدارة البطاريات السحابي (BMS)'
          ),
          body: t(
            'VOYAH exclusive remote power battery data analysis and management technology, more effective safety protection for the whole life cycle',
            'Technologie exclusive VOYAH d’analyse et de gestion à distance des données de la batterie : une protection efficace sur tout le cycle de vie',
            'تقنية حصرية من VOYAH لتحليل وإدارة بيانات البطارية عن بُعد، لتوفير حماية أكثر فعالية خلال دورة الحياة بالكامل'
          )
        },
        {
          image: `${QA}/2-2-ae53cd31.webp`,
          title: t(
            'PACK five-layer security',
            'PACK de batterie à cinq niveaux de sécurité',
            'حزمة البطارية بخمس طبقات أمان'
          ),
          body: t(
            'Customized five major battery safety structure designs',
            'Cinq conceptions structurelles de sécurité élaborées sur mesure pour la batterie',
            'خمسة تصاميم هيكلية مخصصة لسلامة البطارية'
          )
        },
        {
          image: `${QA}/2-3-b03d5e7d.webp`,
          title: t(
            'Exclusive 3D thermal wall technology',
            'Technologie exclusive de paroi thermique 3D',
            'تقنية حصرية للجدار الحراري ثلاثي الأبعاد'
          ),
          body: t(
            'A pioneer of "Amber" and "Mica" battery safety systems',
            'Pionnier des systèmes de sécurité batterie « Amber » et « Mica »',
            'رائد في أنظمة سلامة البطاريات «Amber» و«Mica»'
          )
        }
      ]
    },
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
    { type: 'band', image: `${QA}/Last-Photo.webp`, variant: 'cta' }
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
    { label: t('Torque', 'Couple', 'عزم الدوران'), value: '620 Nm' },
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
            'Redéfinir le [monospace intelligent]',
            'إعادة تعريف [MPV الذكي]'
          )
        },
        {
          image: `${QA}/safety-dream.webp`,
          text: t(
            'Redefine [Safe MPV]',
            'Redéfinir le [monospace sûr]',
            'إعادة تعريف [MPV الآمن]'
          )
        },
        {
          image: `${QA}/3-2-c1e84452.webp`,
          text: t(
            'Redefine [Performance MPV]',
            'Redéfinir le [monospace performant]',
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
    { type: 'band', image: `${QA}/1024-5a8008ee.webp`, variant: 'cta' }
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

/** Contenu de page modèle par slug public ; absent = page modèle générique. */
export const modelPageContentBySlug: Record<string, ModelPageContent> = {
  'free.html': freePageContent,
  'newDreamer26.html': dreamPageContent
}
