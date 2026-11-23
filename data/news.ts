/**
 * Actualités du concessionnaire.
 * Ajouter un article = ajouter une entrée dans newsItems.
 * `url` pointe vers le communiqué complet (page dédiée ou lien externe) ; laissé vide, le lien « Lire » est masqué.
 * Quand `page` est renseigné, l'article possède sa propre page interne (même gabarit que les pages modèles).
 */

import { t, type Localized } from './dealer'

export type NewsCategory = 'corporate' | 'product' | 'technology'

export type NewsBodyBlock = { heading?: Localized; text: Localized; variant?: 'quote' }

export type NewsItem = {
  id: string
  date: string
  category: NewsCategory
  image: string
  title: Localized
  excerpt: Localized
  url: string
  /** Page interne dédiée (slug résolu par resolvePage) quand l'article a son propre contenu. */
  page?: string
  /** Intégration vidéo de couverture (lecteur en arrière-plan du hero). */
  video?: string
  /** Visuels de la galerie, dans l'ordre d'affichage. */
  gallery?: string[]
  /** Légendes associées aux visuels de la galerie (même ordre). */
  galleryCaptions?: Localized[]
  /** Corps de l'article, affiché sur la page dédiée. */
  body?: NewsBodyBlock[]
}

export const newsCategoryLabels: Record<NewsCategory, Localized> = {
  corporate: t('Corporate', 'Corporate', 'شركي'),
  product: t('Product', 'Produit', 'المنتج'),
  technology: t('Technology', 'Technologie', 'التقنية')
}

const MHERO_DIR = '/assets/news/voyah-mhero-tunisie'
const COURAGE_DIR = '/assets/news/voyah-courage-livraisons'

export const newsItems: NewsItem[] = [
  {
    id: 'voyah-courage-livraisons',
    date: '2026-11-10',
    category: 'product',
    image: `${COURAGE_DIR}/hero.jpg`,
    title: t(
      'VOYAH Courage: first deliveries begin in Tunisia',
      'Voyah Courage : les premières livraisons ont commencé en Tunisie',
      'فوياه كوريج: بدأت أول عمليات التسليم في تونس'
    ),
    excerpt: t(
      'Auto Hall has handed over the keys of the VOYAH Courage to its first customers. The 100% electric SUV is available immediately, backed by a 10-year warranty with unlimited mileage.',
      'Auto Hall a remis les clés du VOYAH Courage à ses premiers clients. Le SUV 100 % électrique est disponible immédiatement, avec une garantie de 10 ans et kilométrage illimité.',
      'سلّمت أوتو هول مفاتيح فوياه كوريج لأول عملائها. تتوفر سيارة الدفع الرباعي الكهربائية 100% فوراً مع ضمان لمدة 10 سنوات وبدون حد للمسافة المقطوعة.'
    ),
    url: 'https://www.automobile.tn/fr/magazine/actu/2026-11-10-voyah-courage-les-premieres-livraisons-ont-commence-en-tunisie.html',
    page: 'actualite-voyah-courage.html',
    gallery: [
      `${COURAGE_DIR}/gallery-1.jpg`,
      `${COURAGE_DIR}/gallery-2.jpg`,
      `${COURAGE_DIR}/gallery-3.jpg`,
      `${COURAGE_DIR}/gallery-4.jpg`,
      `${COURAGE_DIR}/gallery-5.jpg`,
      `${COURAGE_DIR}/gallery-6.jpg`
    ],
    galleryCaptions: [
      t(
        'Signature LED front and star grille of the VOYAH in front of the showroom',
        'Signature lumineuse avant et calandre étoilée VOYAH devant le showroom',
        'التوقيع الضوئي الأمامي وشبك السقف النجمي لعلامة فوياه أمام المعرض'
      ),
      t(
        'Official presentation of the VOYAH Courage on the red carpet at Auto Hall',
        'Présentation officielle du VOYAH Courage sur tapis rouge chez Auto Hall',
        'التقديم الرسمي لسيارة فوياه كوريج على السجادة الحمراء لدى أوتو هول'
      ),
      t(
        'Rear view and full-width LED light bar of the 100% electric SUV',
        'Vue arrière et bandeau LED pleine largeur du SUV 100 % électrique',
        'المظهر الخلفي والشريط الضوئي LEDs الممتد على كامل العرض لسيارة الدفع الرباعي الكهربائية 100%'
      ),
      t(
        'Models available immediately at the VOYAH Tunisia dealership',
        'Exemplaires disponibles immédiatement à la concession VOYAH Tunisie',
        'طرازات متوفرة فوراً لدى وكالة فوياه في تونس'
      ),
      t(
        'Preparation and fitting of the licence plates',
        'Préparation et pose des plaques',
        'تحضير وتركيب اللوحات'
      ),
      t(
        'A dynamic profile',
        'Un profil dynamique',
        'مظهر ديناميكي'
      )
    ],
    body: [
      {
        text: t(
          'Auto Hall, official representative of VOYAH in Tunisia, has just delivered the first Courage units to their owners. With these deliveries, the electric SUV moves from novelty status to a car you can buy and drive right now. Interested customers can discover it, test it and drive it away immediately, with no waiting time.',
          'Auto Hall, représentant officiel de Voyah en Tunisie, vient de livrer les premiers exemplaires du Courage à leurs propriétaires. Avec ces livraisons, le SUV électrique passe du statut de nouveauté à celui de voiture qu’on peut acheter et conduire dès maintenant. Les clients intéressés peuvent le découvrir, l’essayer et repartir avec, sans délai d’attente.',
          'أو تو هول، الممثل الرسمي لعلامة فوياه في تونس، سلّمت للتو أولى وحدات كوريج إلى أصحابها. وبهذه التسليمات، لم تعد سيارة الدفع الرباعي الكهربائية مجرد новинка بل سيارة يمكن شراؤها وقيادتها فوراً. يمكن للعملاء المهتمين اكتشافها وتجربتها والقيادة بها مباشرة دون أي انتظار.'
        )
      },
      {
        heading: t(
          'Available immediately, with a 10-year warranty',
          'Disponible de suite, avec une garantie de 10 ans',
          'متوفرة فوراً مع ضمان لمدة 10 سنوات'
        ),
        text: t(
          'The VOYAH Courage is available immediately at the Auto Hall showroom. It is covered by a 10-year warranty with unlimited mileage. On an electric vehicle, this is a real selling point: the buyer is reassured about the car’s lifespan.',
          'Le Voyah Courage est disponible immédiatement dans le showroom Auto Hall. Il est couvert par une garantie de 10 ans avec kilométrage illimité. Sur un véhicule électrique, c’est un vrai argument : l’acheteur est rassuré sur la durée de vie de la voiture.',
          'تتوفر فوياه كوريج فوراً في معرض أوتو هول، وهي مغطاة بضمان لمدة 10 سنوات بدون حد للمسافة المقطوعة. وفي سيارة كهربائية، يُعدّ هذا حجة قوية: يشعر المشتري بالاطمئنان على العمر الافتراضي للسيارة.'
        )
      },
      {
        heading: t('An electric SUV measuring 4.73 metres', 'Un SUV électrique de 4,73 mètres', 'سيارة دفع رباعي كهربائية بطول 4.73 أمتار'),
        text: t(
          'The Courage measures 4,725 mm long, 1,900 mm wide and 1,650 mm high. It seats five passengers and offers a 527-litre boot. It is equipped with an 80 kWh LFP battery. Depending on the version, you can choose between: Premium (single motor): a 292 hp and 420 Nm engine, 0 to 100 km/h in 6.8 s, up to 476 km WLTP range. DC fast charging takes 32 minutes. A full charge on a home socket (AC) takes about 9 hours.',
          'Le Courage mesure 4 725 mm de long, 1 900 mm de large et 1 650 mm de haut. Il accueille cinq passagers et offre un coffre de 527 litres. Il embarque une batterie LFP de 80 kWh. Selon la version, on a le choix entre : Premium (propulsion) : un moteur de 292 ch et 420 Nm, 0 à 100 km/h en 6,8 s, jusqu’à 476 km d’autonomie WLTP. La recharge rapide en courant continu prend 32 minutes. Une recharge complète sur une prise domestique (courant alternatif) prend environ 9 heures.',
          'يبلغ طول كوريج 4,725 مم وعرضها 1,900 مم وارتفاعها 1,650 مم. تتسع لخمسة ركاب وتوفر صندوق أمتعة سعة 527 لتراً، مع بطارية LFP بسعة 80 كيلowatt ساعة. حسب النسخة، يتوفر خياران: بريميوم (دفع خلفي): محرك بقوة 292 حصاناً وعزم 420 نيوتن·متر، التسارع من 0 إلى 100 كم/س في 6.8 ثوانٍ، ومدى يصل إلى 476 كم (WLTP). الشحن السريع بالتيار المستمر يستغرق 32 دقيقة، بينما تستغرق الشحنة الكاملة عبر مقبس منزلي (تيار متردد) نحو 9 ساعات.'
        )
      },
      {
        heading: t(
          'A very complete equipment level from the first version',
          'Un équipement très complet dès la première version',
          'تجهيزات كاملة جداً منذ النسخة الأولى'
        ),
        text: t(
          'The cabin is built around a curved 15-inch OLED screen, complemented by a head-up display. There is also a panoramic roof and 128-colour ambient lighting. The front seats are electric, heated, ventilated and massaging, with memory. The front armrest is cooled. On the safety and driving-assist side, the Courage is equipped with adaptive cruise control, automatic emergency braking, lane-keeping assist, blind-spot monitoring and a 360° camera.',
          'L’habitacle est organisé autour d’un écran OLED incurvé de 15 pouces, complété par un affichage tête haute. On trouve aussi un toit panoramique et un éclairage d’ambiance de 128 couleurs. Les sièges avant sont électriques, chauffants, ventilés et massants, avec mémoire. L’accoudoir avant est réfrigéré. Côté sécurité et aides à la conduite, le Courage est équipé du régulateur adaptatif, du freinage automatique d’urgence, de l’aide au maintien dans la voie, de la surveillance des angles morts et d’une caméra 360°.',
          'تتمحور المقصورة حول شاشة OLED منحنية قياس 15 بوصة مدعومة بعرض رأسية (HUD)، مع سقف بانورامي وإضاءة محيطية بـ128 لوناً. المقاعد الأمامية كهربائية ومدفأة ومهواة ومجهزة بالتدليك والذاكرة، بينما يحمل مسند الذراع الأمامي وظيفة التبريد. وفيما يخص السلامة ومساعدات القيادة، يتوفر كوريج على مثبت السرعة التكيفي والفرملة التلقائية الطارئة ومساعد الحفاظ على المسار ومراقبة النقاط العمياء وكاميرا 360°.'
        )
      },
      {
        heading: t('VOYAH Courage price in Tunisia', 'Prix du Voyah Courage en Tunisie', 'سعر فوياه كوريج في تونس'),
        text: t(
          'The VOYAH Courage is offered in two versions: VOYAH Courage 80 kWh Premium: 121,000 DT.',
          'Le Voyah Courage est proposé en deux versions : Voyah Courage 80 kWh Premium : 121 000 DT.',
          'تتوفر فوياه كوريج في نسختين: فوياه كوريج 80 كيلowatt ساعة بريميوم: 121,000 ديناراً.'
        )
      }
    ]
  },
  {
    id: 'voyah-mhero-tunisie',
    date: '2026-06-24',
    category: 'corporate',
    image: `${MHERO_DIR}/hero.jpg`,
    title: t(
      'VOYAH and MHERO arrive in Tunisia',
      'VOYAH et MHERO débarquent en Tunisie',
      'فوياه وميرو تصلان إلى تونس'
    ),
    excerpt: t(
      'Auto Hall officially launches VOYAH and MHERO in Tunisia, opening a new era of electrified premium mobility.',
      'Auto Hall lance officiellement VOYAH et MHERO en Tunisie et ouvre une nouvelle ère de mobilité premium électrifiée.',
      'أوتو هول تطلق رسمياً فوياه وميرو في تونس، لافتتاح حقبة جديدة من التنقل الفاخر الكهربائي.'
    ),
    url: 'https://www.automobile.tn/fr/magazine/actu/2026-06-24-voyah-et-mhero-debarquent-en-tunisie.html',
    page: 'actualite-voyah-mhero.html',
    video:
      'https://www.youtube.com/embed/xvQ3c3oH0kA?autoplay=1&mute=1&controls=0&loop=1&playlist=xvQ3c3oH0kA&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3',
    gallery: [
      `${MHERO_DIR}/gallery-109305.jpg`,
      `${MHERO_DIR}/gallery-109306.jpg`,
      `${MHERO_DIR}/gallery-109307.jpg`,
      `${MHERO_DIR}/gallery-109308.jpg`,
      `${MHERO_DIR}/gallery-109309.jpg`,
      `${MHERO_DIR}/gallery-109310.jpg`,
      `${MHERO_DIR}/gallery-109311.jpg`,
      `${MHERO_DIR}/gallery-109312.jpg`,
      `${MHERO_DIR}/gallery-109313.jpg`,
      `${MHERO_DIR}/gallery-109314.jpg`,
      `${MHERO_DIR}/gallery-109315.jpg`,
      `${MHERO_DIR}/gallery-109316.jpg`
    ],
    body: [
      {
        text: t(
          'The Tunisian automotive market is entering a new dimension. Auto Hall, dealer for the Moulin Holding (Triki Group), officially launched two outstanding Chinese brands on Tuesday 23 June: VOYAH and MHERO. A launch evening held at the Pavillon Gammarth, in front of more than 300 guests, partners, industry professionals and media, marked the arrival of these two players, determined to redefine premium mobility in Tunisia. The event took place in the presence of Ms Wei Xiaotong, representative of Dongfeng Motor Corporation (DFM), the global manufacturer behind the two brands.',
          'Le marché automobile tunisien change de dimension. Auto Hall, concessionnaire du Moulin Holding (Groupe Triki), a officiellement lancé mardi 23 juin deux marques chinoises d’exception : VOYAH et MHERO. Une soirée de dévoilement organisée au Pavillon Gammarth, devant plus de 300 invités, partenaires, professionnels du secteur et médias, a marqué l’entrée de ces deux acteurs qui entendent redéfinir le luxe automobile en Tunisie. L’événement s’est tenu en présence de Mme Wei Xiaotong, représentante de Dongfeng Motor Corporation (DFM), constructeur mondial derrière les deux marques.',
          'يشهد السوق التونسي للسيارات بعداً جديداً. أطلقت أوتو هول، الوكيل المعتمد لمولان القابضة (مجموعة طريقي)، رسميًا يوم الثلاثاء 23 جوان علامتين صينيتين استثنائيتين: فوياه وميرو. أقيم حفل الكشف في قاعة جامارث بحضور أكثر من 300 ضيف من الشركاء ومهنيي القطاع والإعلاميين، بمناسبة دخول هاتين العلامتين اللتين تطمحان إلى إعادة تعريف الفخامة في قطاع السيارات التونسي. جرى الحفل بحضور السيدة وي شياوتونغ، ممثلة دونغفنغ موتور كوربوريشن (DFM)، الشركة المصنعة العالمية للعلامتين.'
        )
      },
      {
        heading: t(
          'A clear ambition: anticipate and transform',
          'Une ambition claire : anticiper et transformer',
          'طموح واضح: الاستباق والتحوّل'
        ),
        text: t(
          'For Mr Anis Oueslati, Manager of Auto Hall, this launch reflects a long-term vision: “With VOYAH and MHERO, we are not simply introducing cars — we are opening a new chapter for Tunisian mobility. VOYAH redefines intelligent luxury and premium electrification. MHERO pushes the boundaries of prestige off-roading. Together, they draw the mobility of tomorrow.”',
          'Pour M. Anis Oueslati, Gérant d’Auto Hall, ce lancement traduit une vision à long terme : « Avec VOYAH et MHERO, nous n’introduisons pas simplement des voitures — nous ouvrons un nouveau chapitre pour la mobilité tunisienne. VOYAH réinvente le luxe intelligent et l’électrification premium. MHERO repousse les limites du tout-terrain de prestige. Ensemble, ils dessinent la mobilité de demain. »',
          'بالنسبة للسيد أنيس وسلاتي، مدير أوتو هول، يُجسّد هذا الإطلاق رؤية بعيدة المدى: «مع فوياه وميرو، لا نقدّم مجرد سيارات — بل نفتح فصلاً جديداً في التنقل التونسي. فوياه تعيد ابتكار الفخامة الذكية والكهربائية المميزة. وميرو تدفع حدود السيارات الدفع الرباعي الفاخرة. ومعاً، ترسمان تنقل الغد.»'
        ),
        variant: 'quote'
      },
      {
        heading: t(
          'VOYAH: electric luxury, rethought',
          'VOYAH : Le luxe électrique, repensé',
          'فوياه: الفخامة الكهربائية بمعنى جديد'
        ),
        text: t(
          'Born from a spirit of travel and exploration, VOYAH offers three models combining cutting-edge technology, high-end comfort and energy efficiency.',
          'Née de l’esprit du voyage et de l’exploration, VOYAH propose trois modèles alliant technologie de pointe, confort haut de gamme et efficacité énergétique.',
          'وُلدت من روح السفر والاستكشاف، وتقدّم فوياه ثلاثة طرازات تجمع بين التكنولوجيا المتطورة والراحة الراقية والكفاءة الطاقية.'
        )
      },
      {
        text: t(
          '• VOYAH Courage (100% electric): 80 kWh, up to 476 km range (WLTP), 215 kW in RWD or 320 kW in AWD. Launch price from 115,000 DT.\n• VOYAH Free (electric + range extender): up to 1,327 km total range, 720 Nm of torque in AWD. Launch price from 149,000 DT.\n• VOYAH Dream (plug-in hybrid): 420 hp, 160 km electric range, 801 km combined (WLTP). Launch price from 255,000 DT.',
          '• VOYAH Courage (100 % électrique) : 80 kWh, jusqu’à 476 km d’autonomie (WLTP), 215 kW en RWD ou 320 kW en AWD. Prix de lancement à partir de 115.000 DT.\n• VOYAH Free (électrique + prolongateur d’autonomie) : jusqu’à 1 327 km d’autonomie totale, couple de 720 Nm en AWD. Prix de lancement à partir de 149.000 DT.\n• VOYAH Dream (hybride rechargeable) : 420 Ch, 160 km d’autonomie électrique, 801 km en combiné (WLTP). Prix de lancement à partir de 255.000 DT.',
          '• VOYAH Courage (كهربائية 100%): بطارية 80 كيلowatt ساعة، مدى يصل إلى 476 كم (WLTP)، بقوة 215 كيلوواط بالدفع الخلفي أو 320 كيلوواط بالدفع الكلي. سعر الانطلاق ابتداءً من 115.000 ديناراً.\n• VOYAH Free (كهربائية + ممتد مدى): مدى إجمالي يصل إلى 1,327 كم وعزم 720 نيوتن·متر بالدفع الكلي. سعر الانطلاق ابتداءً من 149.000 ديناراً.\n• VOYAH Dream (هجينية قابلة للشحن): 420 حصاناً، مدى كهربائي 160 كم، و801 كم بالمزيج (WLTP). سعر الانطلاق ابتداءً من 255.000 ديناراً.'
        )
      },
      {
        heading: t(
          'MHERO: electrified off-roading, no compromise',
          'MHERO : Le tout-terrain électrifié, sans compromis',
          'MHERO: سيارات دفع رباعي كهربائية بلا مساومة'
        ),
        text: t(
          'Under the motto “Never Back Down”, MHERO targets adventure and extreme performance enthusiasts.',
          'Sous la devise « Never Back Down », MHERO s’adresse aux passionnés d’aventure et de performance extrême.',
          'تحت شعار «Never Back Down»، تخاطب ميرو عشاق المغامرة والأداء الاستثنائي.'
        )
      },
      {
        text: t(
          '• MHERO 817 (plug-in hybrid): 684 hp, 848 Nm, 110 km on pure electric, up to 1,113 km combined. Available in three trims (E0, E1, E1 Alpha). Launch price from 169,000 DT.\n• MHERO 917 (electric + range extender): 980 hp, 1,050 Nm, 65.9 kWh battery, 170 km on 100% electric, up to 1,000 km combined. Launch price from 350,000 DT.',
          '• MHERO 817 (hybride rechargeable) : 684 Ch, 848 Nm, 110 km en électrique pur, jusqu’à 1 113 km en combiné. Disponible en trois finitions (E0, E1, E1 Alpha). Prix de lancement à partir de 169.000 DT.\n• MHERO 917 (électrique + prolongateur d’autonomie) : 980 Ch, 1 050 Nm, batterie de 65.9 kWh, 170 km en 100 % électrique, jusqu’à 1 000 km en combiné. Prix de lancement à partir de 350.000 DT.',
          '• MHERO 817 (هجينية قابلة للشحن): 684 حصاناً، عزم 848 نيوتن·متر، مدى كهربائي 110 كم، يصل إلى 1,113 كم بالمزيج. متوفرة بثلاث فئات (E0 وE1 وE1 Alpha). سعر الانطلاق ابتداءً من 169.000 ديناراً.\n• MHERO 917 (كهربائية + ممتد مدى): 980 حصاناً، عزم 1,050 نيوتن·متر، بطارية 65.9 كيلowatt ساعة، مدى كهربائي 170 كم، يصل إلى 1,000 كم بالمزيج. سعر الانطلاق ابتداءً من 350.000 ديناراً.'
        )
      },
      {
        heading: t(
          '10-year engine and battery warranty',
          '10 ans de garantie moteur et batterie',
          'ضمان لمدة 10 سنوات على المحرك والبطارية'
        ),
        text: t(
          'Across the entire VOYAH and MHERO range, Auto Hall is committed to a 10-year warranty on the engine and battery. An exceptional pledge of confidence in this segment.',
          'Sur l’ensemble des modèles VOYAH et MHERO, Auto Hall s’engage avec une garantie de 10 ans sur le moteur et la batterie. Un gage de confiance exceptionnel sur ce segment.',
          'على جميع طرازات فوياه وميرو، تلتزم أوتو هول بضمان لمدة 10 سنوات على المحرك والبطارية، في تعهد استثنائي بالثقة في هذه الفئة.'
        )
      },
      {
        heading: t('About Auto Hall', 'À propos d’Auto Hall', 'عن أوتو هول'),
        text: t(
          'A member of the Moulin Holding (Triki Group), Auto Hall is establishing itself as a new benchmark dealer in Tunisia, committed to introducing innovative international brands and supporting the market’s transition towards more technological, sustainable and premium mobility.',
          'Membre du Moulin Holding (Groupe Triki), Auto Hall s’impose comme un nouveau concessionnaire de référence en Tunisie, engagé à introduire des marques internationales innovantes et à accompagner la transition du marché vers une mobilité plus technologique, durable et premium.',
          'وبصفتها عضوًا في مولان القابضة (مجموعة طريقي)، تترسخ أوتو هول كوكيل مرجعي جديد في تونس، ملتزمة بإدخال علامات دولية مبتكرة ودعم تحول السوق نحو تنقل أكثر تقنية واستدامة وفخامة.'
        )
      }
    ]
  },
]

/** Article correspondant à une page interne dédiée (`page` = slug). */
export const findNewsItemByPage = (slug?: string) =>
  slug ? newsItems.find((item) => item.page === slug) ?? null : null

/** Classement chronologique décroissant, utilisé par l'accueil et la page Actualités. */
export const sortedNewsItems = () => [...newsItems].sort((a, b) => b.date.localeCompare(a.date))
