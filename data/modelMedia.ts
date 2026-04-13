import type { LocalizedText } from '~/data/site'

const carGallery = (folder: string, assets: string[]) =>
  assets.map((asset) => `/voyah-resources/images/car/${folder}/${asset}`)

const cp1252CodepointToByteSafe = new Map<number, number>([
  [0x20ac, 0x80],
  [0x201a, 0x82],
  [0x0192, 0x83],
  [0x201e, 0x84],
  [0x2026, 0x85],
  [0x2020, 0x86],
  [0x2021, 0x87],
  [0x02c6, 0x88],
  [0x2030, 0x89],
  [0x0160, 0x8a],
  [0x2039, 0x8b],
  [0x0152, 0x8c],
  [0x017d, 0x8e],
  [0x2018, 0x91],
  [0x2019, 0x92],
  [0x201c, 0x93],
  [0x201d, 0x94],
  [0x2022, 0x95],
  [0x2013, 0x96],
  [0x2014, 0x97],
  [0x02dc, 0x98],
  [0x2122, 0x99],
  [0x0161, 0x9a],
  [0x203a, 0x9b],
  [0x0153, 0x9c],
  [0x017e, 0x9e],
  [0x0178, 0x9f]
])

const normalizeMojibakeSafe = (value: string) => {
  if (!/[\u00c3\u00c2\u00d8\u00d9\u00e2]/.test(value)) {
    return value
  }

  const bytes: number[] = []

  for (const char of value) {
    const code = char.charCodeAt(0)

    if (code <= 0xff) {
      bytes.push(code)
      continue
    }

    const mapped = cp1252CodepointToByteSafe.get(code)

    if (mapped !== undefined) {
      bytes.push(mapped)
      continue
    }

    return value
  }

  try {
    return new TextDecoder('utf-8').decode(new Uint8Array(bytes))
  } catch {
    return value
  }
}

const t = (en: string, fr: string, ar: string): LocalizedText => ({
  en: normalizeMojibakeSafe(en),
  fr: normalizeMojibakeSafe(fr),
  ar: normalizeMojibakeSafe(ar)
})

export type ModelStorySection = {
  id: string
  kicker?: LocalizedText
  title: LocalizedText
  summary: LocalizedText
  images: string[]
  videos?: string[]
}

const modelGalleryMap: Record<string, string[]> = {
  'passion-L.html': carGallery('passion-L', [
    '1920/sc_1.jpg',
    '1920/sc_2.jpg',
    '1920/sc_3.jpg',
    '1920/sc_4.jpg',
    '1920/sc_5.jpg',
    '1920/sc_7.jpg',
    '1920/sc_8.jpg',
    '1920/sc_9.jpg'
  ]),
  'passion.html': carGallery('passion', [
    '1920/fl01.jpg',
    '1920/fl02.jpg',
    '1920/fl03.jpg',
    '1920/fl04.jpg',
    '1920/fl05.jpg',
    '1920/fl06.jpg',
    '1920/fl10.jpg',
    '1920/fl14.jpg'
  ]),
  'titan.html': carGallery('titan', [
    '1920/sc_1.jpg',
    '1920/sc_2.jpg',
    '1920/sc_3.jpg',
    '1920/sc_4_1.jpg',
    '1920/sc_6_1.jpg',
    '1920/sc_8_1.jpg',
    '1920/sc_11.jpg',
    '1920/sc_20.jpg'
  ]),
  'titan_blackedition.html': carGallery('titan_blackedition', [
    '1920/sc_1.jpg',
    '1920/sc_2.jpg',
    '1920/sc_3_1.jpg',
    '1920/sc_8.jpg',
    '1920/sc_9_1.jpg',
    '1920/sc_15.jpg',
    '1920/sc_20.jpg',
    '1920/sc_23_1.jpg'
  ]),
  'titan_X8.html': carGallery('titan_X8', ['1920/sc_1.jpg']),
  'free+.html': carGallery('free+', [
    'img_01_1920.png',
    'img_02_01.png',
    'img_03_1920.png',
    'img_05_01.png',
    'img_06_01.png',
    'img_08.png',
    'img_11_01.png',
    'img_25_1920.png'
  ]),
  'free.html': carGallery('free', [
    'bg-free-h97D-1.jpg',
    'bg_free_pc4_0002_1920.jpg',
    'bg_free_pc15_0001_1920.jpg',
    'bg_free_pc20_0001_1920.jpg',
    'bg_free_pc21_0001.jpg',
    'bg_free_pc23_0001.jpg',
    'bg_free_pc28_0001_1920.jpg',
    'bg_free_pc29_0001.jpg'
  ]),
  'newCourage.html': carGallery('newCourage', [
    '1920/sc_1.jpg',
    '1920/sc_3.jpg',
    '1920/sc_4.jpg',
    '1920/sc_6.jpg',
    '1920/sc_8.jpg',
    '1920/sc_11.jpg',
    '1920/sc_14.jpg',
    '1920/sc_20.jpg'
  ]),
  'courage.html': carGallery('courage', [
    '1920/h37_pc01_0001.jpg',
    '1920/h37_pc02_0001.jpg',
    '1920/h37_pc03_0001.jpg',
    '1920/h37_pc04_0001.jpg',
    '1920/h37_pc06_0001.jpg',
    '1920/h37_pc10_0001.jpg',
    '1920/h37_pc14_0001.jpg',
    '1920/h37_pc17_0001.jpg'
  ]),
  'newDreamer26.html': carGallery('newDreamer26', [
    'kv_1920.jpg',
    'sc_3.jpg',
    'sc_5.jpg',
    'sc_10.jpg',
    'sc_15.jpg',
    'sc_21.jpg',
    'sc_5-2.jpg'
  ]),
  'dreamer-champion.html': carGallery('dreamer-champion', [
    'kv_0408_1920.jpg',
    'bg_3_n.jpg',
    'bg_7_n_banner04.jpg',
    'bg_12_n_banner01.jpg',
    'bg_14_n.jpg',
    'bg_16_n_banner01.jpg',
    'bg_20_n_banner01.jpg',
    'bg_24_n_banner01.jpg'
  ]),
  'newDreamer.html': carGallery('newDreamer', [
    'kv_1920.png',
    'h56c_pc03_0001.jpg',
    'h56c_pc03_0002.jpg',
    'h56c_pc08_banner01.jpg',
    'h56c_pc08_banner02.jpg',
    'h56c_pc20_bg.jpg',
    'bg_swiper_3_1_n.jpg',
    'bg_4_n.jpg'
  ]),
  'dreamriver.html': carGallery('dreamriver', [
    'kv_1920.png',
    'sc_2.png',
    'sc_4.png',
    'sc_5.png',
    'sc_6-2.png',
    'sc_7-2.png',
    'sc_8-2.png'
  ]),
  'dreamer.html': carGallery('dreamer', [
    'kv_1920.jpg',
    'bg_swiper_10_1.jpg',
    'bg_swiper_14_1.jpg',
    'bg_swiper_18_1.jpg',
    'bg_swiper_22_1.jpg',
    'bg_swiper_26_1.jpg',
    'bg_swiper_4_1.jpg',
    'bg_swiper_7_1.jpg'
  ])
}

const modelStorySectionMap: Record<string, ModelStorySection[]> = {
  'titan.html': [
    {
      id: 'chapter-1',
      kicker: t('01 Luxury', '01 Luxe', '01 الفخامة'),
      title: t('Flagship luxury', 'Luxe phare', 'Ø§Ù„ÙØ®Ø§Ù…Ø© Ø§Ù„Ø±Ø§Ø¦Ø¯Ø©'),
      summary: t(
        'Titan opens with ceremonial full-size SUV proportions, a six-seat flagship posture, and a lounge-grade cabin tone shaped for premium family travel.',
        'Titan s’ouvre avec des proportions de grand SUV cérémonielles, une posture phare à six places et une tonalité d’habitacle de niveau lounge pensée pour le voyage familial premium.',
        'تبدأ Titan بتناسبات SUV كبيرة بطابع احتفالي، ووضعية رائدة بستة مقاعد، ونبرة مقصورة فاخرة بطابع الصالون مهيأة للسفر العائلي الراقي.'
      ),
      images: carGallery('titan', [
        '1920/sc_2.jpg',
        '1920/sc_3.jpg',
        '1920/sc_4_1.jpg',
        '1920/sc_4_2.jpg',
        '1920/sc_6_1.jpg',
        '1920/sc_7_1.jpg',
        '1920/sc_8_1.jpg',
        '1920/sc_9.jpg'
      ])
    },
    {
      id: 'chapter-2',
      kicker: t('02 Intelligence', '02 Intelligence', '02 الذكاء'),
      title: t('Flagship intelligence', 'Intelligence phare', 'Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø±Ø§Ø¦Ø¯'),
      summary: t(
        'A digital Harmony-era cockpit, Huawei-assisted driving confidence, and premium in-cabin sound stage define Titan’s flagship intelligence chapter.',
        'Un cockpit numérique de l’ère Harmony, une confiance de conduite assistée Huawei et une scène sonore premium à bord définissent le chapitre d’intelligence phare de Titan.',
        'تحدد مقصورة رقمية من جيل Harmony وثقة القيادة المساعدة من Huawei ومشهد الصوت الفاخر داخل المقصورة فصل الذكاء الرائد في Titan.'
      ),
      images: carGallery('titan', [
        '1920/sc_20.jpg',
        '1920/sc_21.jpg',
        '1920/sc_22.jpg',
        '1920/sc_23.jpg',
        '1920/sc_11.jpg',
        '1920/sc_13_1.jpg'
      ]),
      videos: ['/voyah-resources/images/car/titan/video_01.mp4']
    },
    {
      id: 'chapter-3',
      kicker: t('03 Performance', '03 Performance', '03 الأداء'),
      title: t('Flagship performance', 'Performance phare', 'Ø§Ù„Ø£Ø¯Ø§Ø¡ Ø§Ù„Ø±Ø§Ø¦Ø¯'),
      summary: t(
        'A million-class comfort chassis, strong road-to-road capability, and long-range composure shape Titan into a calm yet forceful flagship SUV.',
        'Un châssis confort de classe million, de solides capacités multi-usage et une grande sérénité d’autonomie façonnent Titan en SUV phare à la fois calme et affirmé.',
        'يشكل هيكل راحة من فئة المليون وقدرات قوية على مختلف الطرق وثبات مدى طويل Titan كسـيارة SUV رائدة هادئة لكنها قوية الحضور.'
      ),
      images: carGallery('titan', [
        '1920/sc_25.jpg',
        '1920/sc_27_1.jpg',
        '1920/sc_28.jpg',
        '1920/sc_29.jpg',
        '1920/sc_30.jpg',
        '1920/sc_31.jpg'
      ]),
      videos: ['/voyah-resources/images/car/titan/video_04.mp4']
    },
    {
      id: 'chapter-4',
      kicker: t('04 Safety', '04 Sécurité', '04 السلامة'),
      title: t('Flagship safety', 'SÃ©curitÃ© phare', 'Ø§Ù„Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ø±Ø§Ø¦Ø¯Ø©'),
      summary: t(
        'Reinforced body architecture, layered battery shielding, and full-cabin occupant protection complete Titan with flagship-level family security assurance.',
        'Une architecture de caisse renforcée, une protection batterie multicouche et une protection complète des occupants finalisent Titan avec une assurance de sécurité familiale de niveau phare.',
        'تُكمل بنية الهيكل المعززة وحماية البطارية متعددة الطبقات وحماية الركاب الشاملة Titan بثقة سلامة عائلية على مستوى الطرازات الرائدة.'
      ),
      images: carGallery('titan', [
        '1920/sc_32.jpg',
        '1920/sc_33_1.jpg',
        '1920/sc_33_2.jpg',
        '1920/sc_34_1.jpg',
        '1920/sc_35_1.jpg',
        '1920/sc_35_2.jpg'
      ])
    }
  ],
  'newDreamer26.html': [
    {
      id: 'chapter-1',
      title: t('Flagship luxury', 'Luxe phare', 'Ø§Ù„ÙØ®Ø§Ù…Ø© Ø§Ù„Ø±Ø§Ø¦Ø¯Ø©'),
      summary: t(
        'Dreamer 26 opens with a ceremonial MPV presence, a grand family cabin, and second-row luxury that extends a premium hospitality experience.',
        'Dreamer 26 sâ€™ouvre sur une prÃ©sence de MPV cÃ©rÃ©monielle, un grand habitacle familial et un luxe de deuxiÃ¨me rang qui prolonge son hospitalitÃ© premium.',
        'ØªØ¨Ø¯Ø£ Dreamer 26 Ø¨Ø­Ø¶ÙˆØ± MPV Ø§Ø­ØªÙØ§Ù„ÙŠ ÙˆÙ…Ù‚ØµÙˆØ±Ø© Ø¹Ø§Ø¦Ù„ÙŠØ© Ø±Ø­Ø¨Ø© ÙˆÙØ®Ø§Ù…Ø© ÙÙŠ Ø§Ù„ØµÙ Ø§Ù„Ø«Ø§Ù†ÙŠ ØªØ¹ÙƒØ³ Ø£Ø³Ù„ÙˆØ¨ Ø§Ù„Ø¶ÙŠØ§ÙØ© Ø§Ù„Ø±Ø§Ù‚ÙŠØ©.'
      ),
      images: carGallery('newDreamer26', ['sc_3.jpg', 'sc_3-2.jpg', 'sc_3-3.jpg', 'sc_8.jpg', 'sc_9.jpg'])
    },
    {
      id: 'chapter-2',
      title: t('Flagship performance', 'Performance phare', 'Ø§Ù„Ø£Ø¯Ø§Ø¡ Ø§Ù„Ø±Ø§Ø¦Ø¯'),
      summary: t(
        'Super charging, long combined range, and a comfort-first intelligent chassis give Dreamer 26 the effortless long-distance confidence of a premium executive MPV.',
        'La recharge ultra-rapide, la grande autonomie combinÃ©e et un chÃ¢ssis intelligent tournÃ© vers le confort donnent Ã  Dreamer 26 lâ€™aisance longue distance dâ€™un MPV exÃ©cutif premium.',
        'ÙŠÙˆÙØ± Ø§Ù„Ø´Ø­Ù† Ø§Ù„ÙØ§Ø¦Ù‚ ÙˆØ§Ù„Ù…Ø¯Ù‰ Ø§Ù„Ù…Ø¯Ù…Ø¬ Ø§Ù„Ø·ÙˆÙŠÙ„ ÙˆØ§Ù„Ù‡ÙŠÙƒÙ„ Ø§Ù„Ø°ÙƒÙŠ Ø§Ù„Ù…ÙˆØ¬Ù‡ Ù„Ù„Ø±Ø§Ø­Ø© ÙÙŠ Dreamer 26 Ø«Ù‚Ø© Ø³Ù„Ø³Ø© ÙÙŠ Ø§Ù„Ø±Ø­Ù„Ø§Øª Ø§Ù„Ø·ÙˆÙŠÙ„Ø© ØªÙ„ÙŠÙ‚ Ø¨Ø³ÙŠØ§Ø±Ø© MPV ØªÙ†ÙÙŠØ°ÙŠØ© ÙØ§Ø®Ø±Ø©.'
      ),
      images: carGallery('newDreamer26', ['sc_10.jpg', 'sc_10-2.jpg', 'sc_14.jpg', 'sc_15.jpg', 'sc_15-4.jpg']),
      videos: ['/voyah-resources/images/car/h56d/video_13.mp4']
    },
    {
      id: 'chapter-3',
      title: t('Flagship intelligence', 'Intelligence phare', 'Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø±Ø§Ø¦Ø¯'),
      summary: t(
        'Huawei Qiankun intelligent driving, Harmony cockpit integration, and an AI-focused interaction layer give Dreamer 26 a more advanced flagship character.',
        'La conduite intelligente Huawei Qiankun, lâ€™intÃ©gration du cockpit Harmony et une couche dâ€™interaction centrÃ©e sur lâ€™IA donnent Ã  Dreamer 26 une expression plus avancÃ©e et distinctive.',
        'ØªÙ…Ù†Ø­ Ø§Ù„Ù‚ÙŠØ§Ø¯Ø© Ø§Ù„Ø°ÙƒÙŠØ© Ù…Ù† Huawei Qiankun ÙˆØªÙƒØ§Ù…Ù„ Ù…Ù‚ØµÙˆØ±Ø© Harmony ÙˆØ·Ø¨Ù‚Ø© Ø§Ù„ØªÙØ§Ø¹Ù„ Ø§Ù„Ù…Ø¹ØªÙ…Ø¯Ø© Ø¹Ù„Ù‰ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ø­Ø¶ÙˆØ±Ù‹Ø§ Ø£ÙƒØ«Ø± ØªÙ‚Ø¯Ù…Ù‹Ø§ ÙˆØªÙ…ÙŠØ²Ù‹Ø§ Ù„Ø³ÙŠØ§Ø±Ø© Dreamer 26.'
      ),
      images: carGallery('newDreamer26', ['sc_18.jpg', 'sc_18-2.jpg', 'sc_19.jpg', 'sc_20.jpg', 'sc_21.jpg']),
      videos: ['/voyah-resources/images/car/h56d/video_17.mp4']
    },
    {
      id: 'chapter-4',
      title: t('Flagship safety', 'SÃ©curitÃ© phare', 'Ø§Ù„Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ø±Ø§Ø¦Ø¯Ø©'),
      summary: t(
        'The body shell, occupant protection logic, and battery safety systems are presented with calm, document-like confidence.',
        'La coque, la logique de protection des occupants et les systÃ¨mes de sÃ©curitÃ© batterie sont prÃ©sentÃ©s avec une assurance calme et structurÃ©e.',
        'ÙŠØªÙ… ØªÙ‚Ø¯ÙŠÙ… Ù‡ÙŠÙƒÙ„ Ø§Ù„Ø³ÙŠØ§Ø±Ø© ÙˆÙ…Ù†Ø·Ù‚ Ø­Ù…Ø§ÙŠØ© Ø§Ù„Ø±ÙƒØ§Ø¨ ÙˆØ£Ù†Ø¸Ù…Ø© Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ø¨Ø·Ø§Ø±ÙŠØ© Ø¨Ø«Ù‚Ø© Ù‡Ø§Ø¯Ø¦Ø© ÙˆØ£Ø³Ù„ÙˆØ¨ ÙˆØ§Ø¶Ø­ ÙˆÙ…Ù†Ø¸Ù….'
      ),
      images: carGallery('newDreamer26', ['sc_23.jpg', 'sc_24.jpg', 'sc_25.jpg', 'sc_12.jpg'])
    }
  ],
  'passion-L.html': [
    {
      id: 'chapter-1',
      title: t('Oriental flagship aesthetics', 'EsthÃ©tique phare orientale', 'Ø§Ù„Ø¬Ù…Ø§Ù„ÙŠØ§Øª Ø§Ù„Ø´Ø±Ù‚ÙŠØ© Ø§Ù„Ø±Ø§Ø¦Ø¯Ø©'),
      summary: t(
        'Passion L interprets the design language through ceremonial front graphics, an elongated sedan proportion, and an elegant rear profile shaped around executive presence.',
        'Passion L interprÃ¨te son langage de design par une face avant cÃ©rÃ©monielle, des proportions de berline allongÃ©es et une silhouette arriÃ¨re Ã©lÃ©gante Ã  forte prÃ©sence exÃ©cutive.',
        'ØªØ¹ÙŠØ¯ Passion L ØªÙØ³ÙŠØ± Ù„ØºØ© ØªØµÙ…ÙŠÙ…Ù‡Ø§ Ø¹Ø¨Ø± ÙˆØ§Ø¬Ù‡Ø© Ø£Ù…Ø§Ù…ÙŠØ© Ø§Ø­ØªÙØ§Ù„ÙŠØ© ÙˆØªÙ†Ø§Ø³Ø¨Ø§Øª Ø³ÙŠØ¯Ø§Ù† Ø·ÙˆÙŠÙ„Ø© ÙˆÙ‡ÙŠØ¦Ø© Ø®Ù„ÙÙŠØ© Ø£Ù†ÙŠÙ‚Ø© Ø°Ø§Øª Ø­Ø¶ÙˆØ± ØªÙ†ÙÙŠØ°ÙŠ.'
      ),
      images: carGallery('passion-L', ['1920/sc_2.jpg', '1920/sc_3.jpg', '1920/sc_4.jpg', '1920/sc_5.jpg'])
    },
    {
      id: 'chapter-2',
      title: t('All-dimensional comfort cabin', 'Habitacle confort intÃ©gral', 'Ù…Ù‚ØµÙˆØ±Ø© Ø§Ù„Ø±Ø§Ø­Ø© Ø§Ù„Ø´Ø§Ù…Ù„Ø©'),
      summary: t(
        'The long-wheelbase cabin uses premium seat engineering, panoramic openness, and refined rear-space detailing to match the comfort-first sedan story.',
        'Lâ€™habitacle Ã  empattement long associe siÃ¨ges premium, sensation panoramique et soin du dÃ©tail Ã  lâ€™arriÃ¨re pour exprimer une berline orientÃ©e confort.',
        'ØªØ³ØªØ®Ø¯Ù… Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø© Ø°Ø§Øª Ù‚Ø§Ø¹Ø¯Ø© Ø§Ù„Ø¹Ø¬Ù„Ø§Øª Ø§Ù„Ø·ÙˆÙŠÙ„Ø© Ù‡Ù†Ø¯Ø³Ø© Ù…Ù‚Ø§Ø¹Ø¯ ÙØ§Ø®Ø±Ø© ÙˆØ§Ù†ÙØªØ§Ø­Ø§Ù‹ Ø¨Ø§Ù†ÙˆØ±Ø§Ù…ÙŠØ§Ù‹ ÙˆØªÙØ§ØµÙŠÙ„ Ø±Ø§Ù‚ÙŠØ© ÙÙŠ Ø§Ù„Ø®Ù„Ù Ù„ØªÙ‚Ø¯Ù… Ù‡ÙˆÙŠØ© Ø³ÙŠØ¯Ø§Ù† Ù…Ø±ÙƒØ²Ù‡Ø§ Ø§Ù„Ø±Ø§Ø­Ø©.'
      ),
      images: carGallery('passion-L', ['1920/sc_9.jpg', '1920/sc_10.jpg', '1920/sc_16.jpg', '1920/sc_18.jpg']),
      videos: ['/voyah-resources/images/car/passion-L/video_11.mp4', '/voyah-resources/images/car/passion-L/video_14.mp4', '/voyah-resources/images/car/passion-L/video_15.mp4']
    },
    {
      id: 'chapter-3',
      title: t('HarmonySpace cockpit', 'Cockpit HarmonySpace', 'Ù…Ù‚ØµÙˆØ±Ø© HarmonySpace'),
      summary: t(
        'HarmonySpace brings the digital flagship expression to Passion L through a wide-format display, seamless ecosystem flow, and a calmer interaction experience.',
        'HarmonySpace apporte Ã  Passion L une expression numÃ©rique phare grÃ¢ce Ã  un affichage grand format, un Ã©cosystÃ¨me fluide et une interaction plus apaisÃ©e.',
        'ØªØ¬Ù„Ø¨ HarmonySpace Ø¥Ù„Ù‰ Passion L ØªØ¹Ø¨ÙŠØ±Ù‹Ø§ Ø±Ù‚Ù…ÙŠÙ‹Ø§ Ø±Ø§Ø¦Ø¯Ù‹Ø§ Ø¹Ø¨Ø± Ø´Ø§Ø´Ø© Ø¹Ø±ÙŠØ¶Ø© ÙˆØªØ¯ÙÙ‚ Ø¨ÙŠØ¦ÙŠ Ø³Ù„Ø³ ÙˆØªØ¬Ø±Ø¨Ø© ØªÙØ§Ø¹Ù„ Ø£ÙƒØ«Ø± Ù‡Ø¯ÙˆØ¡Ù‹Ø§.'
      ),
      images: carGallery('passion-L', ['1920/sc_24.jpg', '1920/sc_25.jpg', '1920/sc_23.jpg']),
      videos: ['/voyah-resources/images/car/passion-L/video_26_1.mp4', '/voyah-resources/images/car/passion-L/video_26_2.mp4']
    },
    {
      id: 'chapter-4',
      title: t('Huawei Qiankun ADS', 'Huawei Qiankun ADS', 'Huawei Qiankun ADS'),
      summary: t(
        'The assisted-driving chapter is presented with sensor coverage, P2P navigation logic, and all-dimensional collision prevention.',
        'Le volet conduite assistÃ©e est prÃ©sentÃ© comme un chapitre Ã  part entiÃ¨re, avec couverture des capteurs, logique de navigation P2P et prÃ©vention multidimensionnelle des collisions.',
        'ÙŠØªÙ… ØªÙ‚Ø¯ÙŠÙ… Ù…Ø³Ø§Ø± Ø§Ù„Ù‚ÙŠØ§Ø¯Ø© Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø© ÙƒÙØµÙ„ Ù…ØªÙƒØ§Ù…Ù„ Ù…Ø¹ ØªØºØ·ÙŠØ© Ø§Ù„Ø­Ø³Ø§Ø³Ø§Øª ÙˆÙ…Ù†Ø·Ù‚ Ø§Ù„ØªÙ†Ù‚Ù„ P2P ÙˆØ§Ù„ÙˆÙ‚Ø§ÙŠØ© Ù…ØªØ¹Ø¯Ø¯Ø© Ø§Ù„Ø£Ø¨Ø¹Ø§Ø¯ Ù…Ù† Ø§Ù„Ø§ØµØ·Ø¯Ø§Ù….'
      ),
      images: carGallery('passion-L', ['1920/sc_27.jpg', '1920/sc_28.jpg', '1920/sc_29.jpg', '1920/sc_30.jpg'])
    },
    {
      id: 'chapter-5',
      title: t('Lanhai intelligent super hybrid', 'Super hybride intelligent Lanhai', 'Ù„Ø§Ù†Ù‡Ø§ÙŠ Ø§Ù„Ù‡Ø¬ÙŠÙ† Ø§Ù„Ø°ÙƒÙŠ Ø§Ù„ÙØ§Ø¦Ù‚'),
      summary: t(
        'Ultra-fast charging, long electric range, and the brandâ€™s hybrid power narrative are grouped together here to echo the powertrain storytelling.',
        'La recharge ultra-rapide, la grande autonomie Ã©lectrique et le rÃ©cit hybride de la marque sont regroupÃ©s ici pour structurer la lecture de la chaÃ®ne de traction.',
        'ÙŠØªÙ… Ø¬Ù…Ø¹ Ø§Ù„Ø´Ø­Ù† Ø§Ù„ÙØ§Ø¦Ù‚ Ø§Ù„Ø³Ø±Ø¹Ø© ÙˆØ§Ù„Ù…Ø¯Ù‰ Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠ Ø§Ù„Ø·ÙˆÙŠÙ„ ÙˆØ³Ø±Ø¯ Ø§Ù„Ø¹Ù„Ø§Ù…Ø© Ù„Ù…Ù†Ø¸ÙˆÙ…Ø© Ø§Ù„Ø¯ÙØ¹ Ø§Ù„Ù‡Ø¬ÙŠÙ†Ø© Ù‡Ù†Ø§ Ù„ØªÙ‚Ø¯ÙŠÙ… ØµÙˆØ±Ø© ÙˆØ§Ø¶Ø­Ø© Ø¹Ù† Ù…Ù†Ø¸ÙˆÙ…Ø© Ø§Ù„Ø­Ø±ÙƒØ©.'
      ),
      images: carGallery('passion-L', ['1920/sc_31.jpg', '1920/sc_32.jpg', '1920/sc_33.jpg', '1920/sc_34.jpg'])
    },
    {
      id: 'chapter-6',
      title: t('Million-level magic carpet chassis', 'ChÃ¢ssis tapis volant de niveau million', 'Ù‡ÙŠÙƒÙ„ Ø§Ù„Ø³Ø¬Ø§Ø¯Ø© Ø§Ù„Ø³Ø­Ø±ÙŠØ© Ø¨Ù…Ø³ØªÙˆÙ‰ Ø§Ù„Ù…Ù„ÙŠÙˆÙ†'),
      summary: t(
        'The chassis chapter emphasizes million-level comfort, air suspension, rear-wheel steering, and a sedan body that stays composed even when driven quickly.',
        'Le chapitre chÃ¢ssis met en avant un confort de niveau million, la suspension pneumatique, les roues arriÃ¨re directrices et une berline qui reste posÃ©e mÃªme Ã  rythme soutenu.',
        'ÙŠØ±ÙƒØ² ÙØµÙ„ Ø§Ù„Ù‡ÙŠÙƒÙ„ Ø¹Ù„Ù‰ Ø±Ø§Ø­Ø© Ø¨Ù…Ø³ØªÙˆÙ‰ Ø§Ù„Ù…Ù„ÙŠÙˆÙ† ÙˆØªØ¹Ù„ÙŠÙ‚ Ù‡ÙˆØ§Ø¦ÙŠ ÙˆØªÙˆØ¬ÙŠÙ‡ Ù„Ù„Ø¹Ø¬Ù„Ø§Øª Ø§Ù„Ø®Ù„ÙÙŠØ© ÙˆÙ‡ÙŠØ¦Ø© Ø³ÙŠØ¯Ø§Ù† ØªØ¨Ù‚Ù‰ Ù…ØªØ²Ù†Ø© Ø­ØªÙ‰ Ø¹Ù†Ø¯ Ø§Ù„Ù‚ÙŠØ§Ø¯Ø© Ø§Ù„Ø³Ø±ÙŠØ¹Ø©.'
      ),
      images: carGallery('passion-L', ['1920/sc_35.jpg', '1920/sc_36.jpg', '1920/sc_38.jpg']),
      videos: ['/voyah-resources/images/car/passion-L/video_37.mp4']
    },
    {
      id: 'chapter-7',
      title: t('All-dimensional safety protection', 'Protection sÃ©curitÃ© intÃ©grale', 'Ø­Ù…Ø§ÙŠØ© Ø§Ù„Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ø´Ø§Ù…Ù„Ø©'),
      summary: t(
        'Structural strength, battery protection, and in-cabin privacy and safety finish the sedan with a complete all-dimensional protection story.',
        'La rigiditÃ© structurelle, la protection batterie ainsi que la confidentialitÃ© et la sÃ©curitÃ© Ã  bord finalisent la berline avec un rÃ©cit de protection intÃ©grale.',
        'ØªÙƒÙ…Ù„ Ø§Ù„ØµÙ„Ø§Ø¨Ø© Ø§Ù„Ù‡ÙŠÙƒÙ„ÙŠØ© ÙˆØ­Ù…Ø§ÙŠØ© Ø§Ù„Ø¨Ø·Ø§Ø±ÙŠØ© ÙˆØ§Ù„Ø®ØµÙˆØµÙŠØ© ÙˆØ§Ù„Ø³Ù„Ø§Ù…Ø© Ø¯Ø§Ø®Ù„ Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø© Ø¨Ù‚ØµØ© Ø­Ù…Ø§ÙŠØ© Ø´Ø§Ù…Ù„Ø© ÙˆÙ…ØªÙ…Ø§Ø³ÙƒØ©.'
      ),
      images: carGallery('passion-L', ['1920/sc_39.jpg', '1920/sc_40.jpg', '1920/sc_42.jpg', '1920/sc_43.jpg'])
    }
  ],
  'free+.html': [
    {
      id: 'chapter-1',
      title: t('City light-and-shadow aesthetics', 'EsthÃ©tique urbaine dâ€™ombres et de lumiÃ¨re', 'Ø¬Ù…Ø§Ù„ÙŠØ§Øª Ø§Ù„Ø¶ÙˆØ¡ ÙˆØ§Ù„Ø¸Ù„ Ø§Ù„Ø­Ø¶Ø±ÙŠØ©'),
      summary: t(
        'FREE+ opens with the urban design narrative: sculpted light graphics, athletic SUV proportions, and a more premium city-focused visual identity.',
        'FREE+ sâ€™ouvre sur un rÃ©cit de design urbain : des signatures lumineuses sculptÃ©es, des proportions de SUV athlÃ©tiques et une identitÃ© visuelle plus premium orientÃ©e ville.',
        'ØªØ¨Ø¯Ø£ FREE+ Ø¨Ø³Ø±Ø¯ ØªØµÙ…ÙŠÙ… Ø­Ø¶Ø±ÙŠ ÙŠØ¬Ù…Ø¹ Ø§Ù„Ø±Ø³ÙˆÙ… Ø§Ù„Ø¶ÙˆØ¦ÙŠØ© Ø§Ù„Ù…Ù†Ø­ÙˆØªØ© ÙˆØªÙ†Ø§Ø³Ø¨Ø§Øª SUV Ø§Ù„Ø±ÙŠØ§Ø¶ÙŠØ© ÙˆÙ‡ÙˆÙŠØ© Ø¨ØµØ±ÙŠØ© Ø£ÙƒØ«Ø± ÙØ®Ø§Ù…Ø© ÙˆÙ…ÙˆØ¬Ù‡Ø© Ù„Ù„Ù…Ø¯ÙŠÙ†Ø©.'
      ),
      images: carGallery('free+', ['img_01_1920.png', 'img_02_01.png', 'img_06_01.png', 'img_08.png'])
    },
    {
      id: 'chapter-2',
      title: t('Voyah Cabin 2.0', 'Free Cabin 2.0', 'Free Cabin 2.0'),
      summary: t(
        'A softer interior palette, comfort-centered packaging, and premium seat and audio details sharpen the cabin chapter.',
        'Une palette intÃ©rieure plus douce, un agencement tournÃ© vers le confort et des dÃ©tails premium sur les siÃ¨ges et lâ€™audio renforcent le caractÃ¨re de ce chapitre habitacle.',
        'ØªØ¬Ø¹Ù„ Ù„ÙˆØ­Ø© Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø© Ø§Ù„Ø£ÙƒØ«Ø± Ù†Ø¹ÙˆÙ…Ø© ÙˆØ§Ù„ØªØºÙ„ÙŠÙ Ø§Ù„Ù…ÙˆØ¬Ù‡ Ù„Ù„Ø±Ø§Ø­Ø© ÙˆØªÙØ§ØµÙŠÙ„ Ø§Ù„Ù…Ù‚Ø§Ø¹Ø¯ ÙˆØ§Ù„ØµÙˆØª Ø§Ù„ÙØ§Ø®Ø± Ø·Ø§Ø¨Ø¹ Ù‡Ø°Ø§ Ø§Ù„ÙØµÙ„ Ø¨Ø´ÙƒÙ„ Ø£Ù‚ÙˆÙ‰.'
      ),
      images: carGallery('free+', ['img_03_1920.png', 'img_11_01.png', 'img_17_01.png', 'img_20_01.png']),
      videos: ['/voyah-resources/images/car/free+/video_05.mp4', '/voyah-resources/images/car/free+/video_11.mp4', '/voyah-resources/images/car/free+/video_19.mp4', '/voyah-resources/images/car/free+/video_22.mp4']
    },
    {
      id: 'chapter-3',
      title: t('HarmonySpace 5 cockpit', 'Cockpit HarmonySpace 5', 'Ù…Ù‚ØµÙˆØ±Ø© HarmonySpace 5'),
      summary: t(
        'This section follows the digital-cockpit rhythm with voice assistant, seamless device flow, and the HarmonySpace ecosystem presented as a dedicated chapter.',
        'Cette section suit le rythme du cockpit numÃ©rique avec assistant vocal, continuitÃ© multi-appareils et Ã©cosystÃ¨me HarmonySpace prÃ©sentÃ© comme un chapitre dÃ©diÃ©.',
        'ÙŠØªØ¨Ø¹ Ù‡Ø°Ø§ Ø§Ù„Ù‚Ø³Ù… Ø¥ÙŠÙ‚Ø§Ø¹ Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø© Ø§Ù„Ø±Ù‚Ù…ÙŠØ© Ù…Ø¹ Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯ Ø§Ù„ØµÙˆØªÙŠ ÙˆØªØ¯ÙÙ‚ Ø§Ù„Ø£Ø¬Ù‡Ø²Ø© Ø§Ù„Ø³Ù„Ø³ ÙˆÙ†Ø¸Ø§Ù… HarmonySpace Ø§Ù„Ù…Ù‚Ø¯Ù… ÙƒÙØµÙ„ Ù…Ø®ØµØµ.'
      ),
      images: carGallery('free+', ['img_25_1920.png', 'img_28_1920.png', 'img_29_01.png']),
      videos: ['/voyah-resources/images/car/free+/video_27_20250712.mp4', '/voyah-resources/images/car/free+/video_28_1.mp4', '/voyah-resources/images/car/free+/video_28_2.mp4']
    },
    {
      id: 'chapter-4',
      title: t('Huawei Qiankun ADS 4', 'Huawei Qiankun ADS 4', 'Huawei Qiankun ADS 4'),
      summary: t(
        'The assisted-driving chapter mirrors the sequence: Huawei Qiankun ADS 4, sensor hardware, and P2P parking/navigation functions arranged as one story.',
        'Le chapitre conduite assistÃ©e reprend la sÃ©quence: Huawei Qiankun ADS 4, matÃ©riel de perception et fonctions P2P de navigation/parking rÃ©unis dans un rÃ©cit unique.',
        'ÙŠØ¹ÙƒØ³ ÙØµÙ„ Ø§Ù„Ù‚ÙŠØ§Ø¯Ø© Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø© Ø§Ù„ØªØ³Ù„Ø³Ù„ Ø§Ù„Ù…ØªÙƒØ§Ù…Ù„: Huawei Qiankun ADS 4 ÙˆØ£Ø¬Ù‡Ø²Ø© Ø§Ù„Ø§Ø³ØªØ´Ø¹Ø§Ø± ÙˆÙˆØ¸Ø§Ø¦Ù Ø§Ù„Ù…Ù„Ø§Ø­Ø© ÙˆØ§Ù„Ø§ØµØ·ÙØ§Ù P2P Ø¶Ù…Ù† Ù‚ØµØ© ÙˆØ§Ø­Ø¯Ø©.'
      ),
      images: carGallery('free+', ['img_28_1920.png', 'img_29_01.png', 'img_31_1920.png']),
      videos: ['/voyah-resources/images/car/free+/video_31.mp4']
    },
    {
      id: 'chapter-5',
      title: t('Luxury intelligent driving control', 'Conduite intelligente haut de gamme', 'Ø§Ù„ØªØ­ÙƒÙ… Ø§Ù„ÙØ§Ø®Ø± Ø§Ù„Ø°ÙƒÙŠ Ø¨Ø§Ù„Ù‚ÙŠØ§Ø¯Ø©'),
      summary: t(
        'FREE+ keeps the performance narrative through its intelligent damping chassis, suspension hardware, four-wheel-drive tuning, and expressive drive-mode presentation.',
        'FREE+ reprend son rÃ©cit de performance Ã  travers son chÃ¢ssis Ã  amortissement intelligent, son matÃ©riel de suspension, sa transmission intÃ©grale et sa mise en scÃ¨ne des modes de conduite.',
        'ØªØ­Ø§ÙØ¸ FREE+ Ø¹Ù„Ù‰ Ø³Ø±Ø¯ Ø£Ø¯Ø§Ø¦Ù‡Ø§ Ù…Ù† Ø®Ù„Ø§Ù„ Ø§Ù„Ù‡ÙŠÙƒÙ„ Ø°ÙŠ Ø§Ù„ØªØ®Ù…ÙŠØ¯ Ø§Ù„Ø°ÙƒÙŠ ÙˆÙ…ÙƒÙˆÙ†Ø§Øª Ø§Ù„ØªØ¹Ù„ÙŠÙ‚ ÙˆØ¶Ø¨Ø· Ø§Ù„Ø¯ÙØ¹ Ø§Ù„Ø±Ø¨Ø§Ø¹ÙŠ ÙˆØ¹Ø±Ø¶ Ø£ÙˆØ¶Ø§Ø¹ Ø§Ù„Ù‚ÙŠØ§Ø¯Ø© Ø§Ù„ØªØ¹Ø¨ÙŠØ±ÙŠØ©.'
      ),
      images: carGallery('free+', ['img_32_01.png', 'img_35_01.png', 'img_36_01.png', 'img_40_01.jpg']),
      videos: ['/voyah-resources/images/car/free+/video_34.mp4', '/voyah-resources/images/car/free+/video_35.mp4', '/voyah-resources/images/car/free+/video_42.mp4']
    },
    {
      id: 'chapter-6',
      title: t('EDC magic carpet chassis', 'Forteresse de sÃ©curitÃ© omnidirectionnelle', 'Ø­ØµÙ† Ø§Ù„Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ø´Ø§Ù…Ù„'),
      summary: t(
        'Battery protection, passive body strength, and adaptive chassis tuning complete the comfort-and-control story for FREE+.',
        'La protection batterie, la rigiditÃ© passive de la carrosserie et le matÃ©riel de sÃ©curitÃ© de lâ€™Ã©dition spÃ©ciale complÃ¨tent le chapitre de sÃ©curitÃ© omnidirectionnelle de FREE+.',
        'ØªÙƒÙ…Ù„ Ø­Ù…Ø§ÙŠØ© Ø§Ù„Ø¨Ø·Ø§Ø±ÙŠØ© ÙˆÙ‚ÙˆØ© Ø§Ù„Ù‡ÙŠÙƒÙ„ Ø§Ù„Ø³Ù„Ø¨ÙŠØ© ÙˆÙ…ÙƒÙˆÙ†Ø§Øª Ø§Ù„Ø³Ù„Ø§Ù…Ø© ÙÙŠ Ø§Ù„Ù†Ø³Ø®Ø© Ø§Ù„Ø®Ø§ØµØ© ÙØµÙ„ Ø§Ù„Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ø´Ø§Ù…Ù„ Ù„Ù€ FREE+.'
      ),
      images: carGallery('free+', ['img_42_1920.png', 'img_43_01.png', 'img_44_01.png', 'img_45_01.png'])
    }
  ],
  'newCourage.html': [
    {
      id: 'chapter-1',
      title: t('Starry embrace cockpit', 'Un foyer chaleureux', 'Ù…Ù†Ø²Ù„ Ø¯Ø§ÙØ¦'),
      summary: t(
        'The story starts with a softer, family-oriented design language, combining star-lit detailing and welcoming surfaces into a more emotional urban SUV identity.',
        'Le parcours commence par un langage de design plus doux et familial, mÃªlant dÃ©tails lumineux et surfaces accueillantes dans une identitÃ© de SUV urbain plus Ã©motionnelle.',
        'ÙŠØ¨Ø¯Ø£ Ø§Ù„Ù…Ø³Ø§Ø± Ø¨Ù„ØºØ© ØªØµÙ…ÙŠÙ… Ø£ÙƒØ«Ø± Ù†Ø¹ÙˆÙ…Ø© ÙˆØ¹Ø§Ø¦Ù„ÙŠØ© ØªØ¬Ù…Ø¹ Ø§Ù„ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ù…Ø¶ÙŠØ¦Ø© ÙˆØ§Ù„Ø£Ø³Ø·Ø­ Ø§Ù„Ù…Ø±Ø­Ø¨Ø© ÙÙŠ Ù‡ÙˆÙŠØ© SUV Ø­Ø¶Ø±ÙŠØ© Ø£ÙƒØ«Ø± Ø¹Ø§Ø·ÙÙŠØ©.'
      ),
      images: carGallery('newCourage', [
        '1920/sc_3.jpg',
        '1920/sc_4.jpg',
        '1920/sc_6.jpg',
        '1920/sc_6-2.jpg',
        '1920/sc_6-3.jpg',
        '1920/sc_8.jpg'
      ]),
      videos: ['/voyah-resources/images/car/h37b/video_05_20250812.mp4', '/voyah-resources/images/car/h37b/video_09.mp4']
    },
    {
      id: 'chapter-2',
      title: t('A comfortable home', 'Un foyer confortable', 'Ù…Ù†Ø²Ù„ Ù…Ø±ÙŠØ­'),
      summary: t(
        'Large interior volume, layered storage, zero-gravity seating, and a family-first comfort story give this section a stronger Courage identity.',
        'Le grand volume intÃ©rieur, les rangements superposÃ©s, les siÃ¨ges zÃ©ro gravitÃ© et un rÃ©cit de confort centrÃ© sur la famille renforcent nettement ce chapitre.',
        'ÙŠØ¬Ø¹Ù„ Ø§Ù„Ø­Ø¬Ù… Ø§Ù„Ø¯Ø§Ø®Ù„ÙŠ Ø§Ù„ÙƒØ¨ÙŠØ± ÙˆØ§Ù„ØªØ®Ø²ÙŠÙ† Ù…ØªØ¹Ø¯Ø¯ Ø§Ù„Ø·Ø¨Ù‚Ø§Øª ÙˆÙ…Ù‚Ø§Ø¹Ø¯ Ø§Ù†Ø¹Ø¯Ø§Ù… Ø§Ù„Ø¬Ø§Ø°Ø¨ÙŠØ© ÙˆÙ‚ØµØ© Ø§Ù„Ø±Ø§Ø­Ø© Ø§Ù„Ù…ÙˆØ¬Ù‡Ø© Ù„Ù„Ø¹Ø§Ø¦Ù„Ø© Ù‡Ø°Ø§ Ø§Ù„ÙØµÙ„ Ø¨Ø´ÙƒÙ„ ÙˆØ§Ø¶Ø­.'
      ),
      images: carGallery('newCourage', [
        '1920/sc_12.jpg',
        '1920/sc_13.jpg',
        '1920/sc_13-2.jpg',
        '1920/sc_13-3.jpg',
        '1920/sc_14.jpg',
        '1920/sc_14-2.jpg',
        '1920/sc_14-3.jpg',
        '1920/sc_18.jpg',
        '1920/sc_21.jpg'
      ]),
      videos: ['/voyah-resources/images/car/h37b/video_17_20250828.mp4', '/voyah-resources/images/car/h37b/video_22.mp4']
    },
    {
      id: 'chapter-3',
      title: t('A playful home', 'Un foyer plein de vie', 'Ù…Ù†Ø²Ù„ Ù…Ù…ØªØ¹'),
      summary: t(
        'Digital screens, Harmony audio, and emotionally expressive in-cabin lighting turn the third chapter into the more playful family-tech zone seen on the site.',
        'Les Ã©crans numÃ©riques, lâ€™audio Harmony et lâ€™Ã©clairage Ã©motionnel de lâ€™habitacle transforment le troisiÃ¨me chapitre en zone techno-familiale plus ludique.',
        'ØªØ­ÙˆÙ„ Ø§Ù„Ø´Ø§Ø´Ø§Øª Ø§Ù„Ø±Ù‚Ù…ÙŠØ© ÙˆØµÙˆØª Harmony ÙˆØ§Ù„Ø¥Ø¶Ø§Ø¡Ø© Ø§Ù„Ø¹Ø§Ø·ÙÙŠØ© Ø¯Ø§Ø®Ù„ Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø© Ø§Ù„ÙØµÙ„ Ø§Ù„Ø«Ø§Ù„Ø« Ø¥Ù„Ù‰ Ù…Ø³Ø§Ø­Ø© ØªÙ‚Ù†ÙŠØ© Ø¹Ø§Ø¦Ù„ÙŠØ© Ø£ÙƒØ«Ø± Ù…Ø±Ø­Ù‹Ø§.'
      ),
      images: carGallery('newCourage', ['1920/sc_23.jpg', '1920/sc_24.jpg', '1920/sc_24-3.jpg', '1920/sc_28.jpg', '1920/sc_28-2.jpg']),
      videos: ['/voyah-resources/images/car/h37b/video_26_1.mp4', '/voyah-resources/images/car/h37b/video_26_2.mp4', '/voyah-resources/images/car/h37b/video_26_3.mp4', '/voyah-resources/images/car/h37b/video_27.mp4']
    },
    {
      id: 'chapter-4',
      title: t('A smart home', 'Un foyer intelligent', 'Ù…Ù†Ø²Ù„ Ø°ÙƒÙŠ'),
      summary: t(
        'Huawei Qiankun ADS 4, collision-avoidance systems, and parking/navigation choreography now read as a dedicated smart-driving chapter.',
        'Huawei Qiankun ADS 4, les systÃ¨mes dâ€™Ã©vitement de collision et la chorÃ©graphie navigation/parking se lisent comme un chapitre dÃ©diÃ© Ã  la conduite intelligente.',
        'ØªÙÙ‚Ø±Ø£ Ø£Ù†Ø¸Ù…Ø© Huawei Qiankun ADS 4 ÙˆØªØ¬Ù†Ø¨ Ø§Ù„Ø§ØµØ·Ø¯Ø§Ù… ÙˆØ­Ø±ÙƒØ§Øª Ø§Ù„Ù…Ù„Ø§Ø­Ø© ÙˆØ§Ù„Ø§ØµØ·ÙØ§Ù ÙƒÙØµÙ„ Ù…Ø®ØµØµ Ù„Ù„Ù‚ÙŠØ§Ø¯Ø© Ø§Ù„Ø°ÙƒÙŠØ©.'
      ),
      images: carGallery('newCourage', ['1920/sc_29.jpg', '1920/sc_31.jpg']),
      videos: ['/voyah-resources/images/car/h37b/video_30.mp4', '/voyah-resources/images/car/h37b/video_32_1.mp4', '/voyah-resources/images/car/h37b/video_32_2.mp4']
    },
    {
      id: 'chapter-5',
      title: t('An efficient home', 'Un foyer efficient', 'Ù…Ù†Ø²Ù„ ÙØ¹Ù‘Ø§Ù„'),
      summary: t(
        'The efficiency story combines 800V architecture, long range, ultra-fast charging, and energy-sharing functions into one calm EV chapter.',
        'Le rÃ©cit de lâ€™efficience combine architecture 800V, grande autonomie, recharge ultra-rapide et fonctions de partage dâ€™Ã©nergie dans un chapitre EV unifiÃ©.',
        'ÙŠØ¬Ù…Ø¹ Ø³Ø±Ø¯ Ø§Ù„ÙƒÙØ§Ø¡Ø© Ø¨ÙŠÙ† Ø¨Ù†ÙŠØ© 800V ÙˆØ§Ù„Ù…Ø¯Ù‰ Ø§Ù„Ø·ÙˆÙŠÙ„ ÙˆØ§Ù„Ø´Ø­Ù† Ø§Ù„ÙØ§Ø¦Ù‚ Ø§Ù„Ø³Ø±Ø¹Ø© ÙˆÙˆØ¸Ø§Ø¦Ù Ù…Ø´Ø§Ø±ÙƒØ© Ø§Ù„Ø·Ø§Ù‚Ø© Ø¶Ù…Ù† ÙØµÙ„ ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠ Ù…ÙˆØ­Ø¯.'
      ),
      images: carGallery('newCourage', ['1920/sc_34.jpg', '1920/sc_35.jpg', '1920/sc_37.jpg', '1920/sc_37-2.jpg', '1920/sc_38.jpg']),
      videos: ['/voyah-resources/images/car/h37b/video_36_20250828.mp4']
    },
    {
      id: 'chapter-6',
      title: t('A secure home', 'Un foyer rassurant', 'Ù…Ù†Ø²Ù„ Ø¢Ù…Ù†'),
      summary: t(
        'Body safety, battery protection, and all-weather assurance close the New Courage story with a family-protection emphasis instead of a feature ending.',
        'La sÃ©curitÃ© de carrosserie, la protection batterie et lâ€™assurance tous temps concluent lâ€™histoire de New Courage avec un accent familial plutÃ´t quâ€™une simple liste dâ€™Ã©quipements.',
        'ØªØ®ØªØªÙ… Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ù‡ÙŠÙƒÙ„ ÙˆØ­Ù…Ø§ÙŠØ© Ø§Ù„Ø¨Ø·Ø§Ø±ÙŠØ© ÙˆØ§Ù„Ø·Ù…Ø£Ù†ÙŠÙ†Ø© ÙÙŠ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø¸Ø±ÙˆÙ Ù‚ØµØ© New Courage Ø¨ØªØ±ÙƒÙŠØ² Ø¹Ø§Ø¦Ù„ÙŠ Ø¹Ù„Ù‰ Ø§Ù„Ø­Ù…Ø§ÙŠØ©.'
      ),
      images: carGallery('newCourage', ['1920/sc_39.jpg', '1920/sc_40.jpg', '1920/sc_41.jpg', '1920/sc_42.jpg'])
    }
  ],
  'titan_blackedition.html': [
    {
      id: 'chapter-1',
      title: t('Black exterior presence', 'Présence extérieure noire', 'حضور خارجي أسود'),
      summary: t(
        'The Black Edition sets a darker flagship tone with blacked-out trim, a more dramatic front face, and a stealthier premium expression.',
        'La Black Edition impose un ton phare plus sombre avec des éléments noirs, une face avant plus dramatique et une expression premium furtive.',
        'تمنح Black Edition نغمة رائدة أكثر قتامة مع تطعيمات سوداء وواجهة أمامية أكثر درامية وتعبير فاخر أكثر هدوءًا.'
      ),
      images: carGallery('titan_blackedition', [
        '1920/sc_1.jpg',
        '1920/sc_3_1.jpg',
        '1920/sc_3_2.jpg',
        '1920/sc_3_3.jpg',
        '1920/sc_9_1.jpg'
      ])
    },
    {
      id: 'chapter-2',
      title: t('Black cabin texture', 'Texture habitacle noire', 'ملمس المقصورة السوداء'),
      summary: t(
        'Inside, darker materials, contrast stitching, and the calmer seat architecture keep the cabin aligned with the edition’s more restrained luxury story.',
        'À bord, des matériaux plus sombres, des surpiqûres contrastées et une architecture de sièges plus calme maintiennent l’habitacle dans l’histoire de luxe contenu de cette édition.',
        'داخل المقصورة، تحافظ الخامات الداكنة والخياطة المتباينة وبنية المقاعد الهادئة على انسجام المقصورة مع قصة الفخامة الأكثر تحفظًا في هذه النسخة.'
      ),
      images: carGallery('titan_blackedition', [
        '1920/sc_10_1.jpg',
        '1920/sc_13_1.jpg',
        '1920/sc_16_1.jpg',
        '1920/sc_18_1.jpg'
      ])
    },
    {
      id: 'chapter-3',
      title: t('Executive intelligence', 'Intelligence exécutive', 'ذكاء تنفيذي'),
      summary: t(
        'Assisted driving, smart cockpit interaction, and premium travel comfort keep the Black Edition feeling like a full flagship rather than a trim package.',
        'La conduite assistée, l’interaction du cockpit intelligent et le confort de voyage premium font de la Black Edition un véritable flagship et non une simple finition.',
        'تجعل القيادة المساعدة وتفاعل المقصورة الذكية وراحة السفر الفاخرة من Black Edition طرازًا رائدًا كاملًا لا مجرد فئة تجهيز.'
      ),
      images: carGallery('titan_blackedition', [
        '1920/sc_21_1.jpg',
        '1920/sc_21_2.jpg',
        '1920/sc_21_3.jpg',
        '1920/sc_21_4.jpg',
        '1920/sc_21_5.jpg',
        '1920/sc_22_1.jpg',
        '1920/sc_23_1.jpg'
      ])
    },
    {
      id: 'chapter-4',
      title: t('Quiet confidence', 'Confiance silencieuse', 'ثقة هادئة'),
      summary: t(
        'Safety structure, battery protection, and wide-cabin calm finish the edition with the same calm confidence expected from the Titan family.',
        'La structure de sécurité, la protection de la batterie et le calme du grand habitacle concluent l’édition avec la même assurance que la famille Titan.',
        'تُختتم النسخة ببنية أمان وحماية للبطارية وهدوء المقصورة الواسعة بنفس الثقة الهادئة المتوقعة من عائلة Titan.'
      ),
      images: carGallery('titan_blackedition', [
        '1920/sc_23_2.jpg',
        '1920/sc_23_3.jpg',
        '1920/swiper_5_1.jpg',
        '1920/swiper_5_2.jpg',
        '1920/swiper_5_3.jpg',
        '1920/swiper_5_4.jpg'
      ])
    }
  ],
  'titan_X8.html': [
    {
      id: 'chapter-1',
      kicker: t('01 Flagship luxury', '01 Luxe phare', '01 الفخامة الرائدة'),
      title: t('Expanded flagship luxury', 'Luxe phare étendu', 'فخامة رائدة موسعة'),
      summary: t(
        'Titan X8 opens with broad full-size SUV proportions and a family-oriented flagship stance that emphasizes spacious luxury over ceremonial drama.',
        'Titan X8 s’ouvre avec de larges proportions de SUV grand format et une posture phare orientée famille qui met l’accent sur l’espace et le luxe.',
        'تبدأ Titan X8 بتناسبات SUV كبيرة عريضة وحضور رائد موجه للعائلة يركز على الرحابة والفخامة أكثر من الطابع الاستعراضي.'
      ),
      images: carGallery('titan_X8', ['1920/sc_1.jpg'])
    },
    {
      id: 'chapter-2',
      kicker: t('02 Flagship intelligence', '02 Intelligence phare', '02 الذكاء الرائد'),
      title: t('Three-row intelligent comfort', 'Confort intelligent trois rangs', 'راحة ذكية بثلاثة صفوف'),
      summary: t(
        'The cabin narrative highlights easier third-row access, practical family packaging, and a calmer intelligent-cockpit rhythm for daily executive travel.',
        'Le récit d’habitacle met en avant un accès simplifié au troisième rang, un agencement familial pratique et un rythme de cockpit intelligent plus apaisé.',
        'يركز سرد المقصورة على سهولة الوصول إلى الصف الثالث والتغليف العائلي العملي وإيقاع مقصورة ذكية أكثر هدوءًا لرحلات التنفيذ اليومية.'
      ),
      images: carGallery('titan_X8', ['1920/sc_1.jpg'])
    },
    {
      id: 'chapter-3',
      kicker: t('03 Flagship performance', '03 Performance phare', '03 الأداء الرائد'),
      title: t('Long-route flagship composure', 'Sérénité phare longue distance', 'ثبات رائد للرحلات الطويلة'),
      summary: t(
        'Composed ride tuning, broad-shouldered stability, and long-route confidence position X8 as the touring-oriented flagship branch of Titan.',
        'Un réglage de roulage posé, une stabilité de grand SUV et une forte confiance sur longue distance positionnent X8 comme la branche phare orientée voyage de Titan.',
        'يضع ضبط الركوب المتزن والثبات بهيئة SUV كبيرة والثقة القوية في الرحلات الطويلة X8 كفرع رائد موجه للسفر ضمن عائلة Titan.'
      ),
      images: carGallery('titan_X8', ['1920/sc_1.jpg'])
    },
    {
      id: 'chapter-4',
      kicker: t('04 Flagship safety', '04 Sécurité phare', '04 السلامة الرائدة'),
      title: t('Family-first flagship safety', 'Sécurité phare orientée famille', 'سلامة رائدة موجهة للعائلة'),
      summary: t(
        'Body structure integrity and layered battery protection close the X8 route with reassuring flagship safety tuned for family priorities.',
        'L’intégrité de la structure de caisse et la protection batterie multicouche concluent le parcours X8 avec une sécurité phare rassurante adaptée aux priorités familiales.',
        'تختتم صلابة بنية الهيكل وحماية البطارية متعددة الطبقات مسار X8 بثقة سلامة رائدة مطمئنة ومضبوطة لأولويات العائلة.'
      ),
      images: carGallery('titan_X8', ['1920/sc_1.jpg'])
    }
  ],
  'passion.html': [
    {
      id: 'chapter-1',
      kicker: t('01 Sedan design', '01 Design berline', '01 تصميم السيدان'),
      title: t('Oriental flowing sedan stance', 'Posture de berline fluide orientale', 'هيئة سيدان شرقية انسيابية'),
      summary: t(
        'Passion presents a sleeker electric-sedan stance with crisp shoulder lines, cleaner surfacing, and a calmer premium expression tuned for executive travel.',
        'Passion affiche une posture de berline électrique plus fluide, avec des épaules nettes, des surfaces plus pures et une expression premium plus calme pensée pour le voyage exécutif.',
        'تقدم Passion هيئة سيدان كهربائية أكثر انسيابية مع خطوط كتف واضحة وأسـطح أنقى وتعبير فاخر أكثر هدوءًا مهيأ للسفر التنفيذي.'
      ),
      images: carGallery('passion', [
        '1920/fl01.jpg',
        '1920/fl02.jpg',
        '1920/fl03.jpg',
        '1920/fl0331.jpg',
        '1920/fl044.jpg'
      ])
    },
    {
      id: 'chapter-2',
      kicker: t('02 Interior', '02 Habitacle', '02 المقصورة'),
      title: t('Executive cabin comfort', 'Confort cabine exécutif', 'راحة مقصورة تنفيذية'),
      summary: t(
        'The cabin chapter centers on quiet travel, refined front and rear seating, and a calmer interior rhythm that gives Passion a genuine grand-touring atmosphere.',
        'Le chapitre habitacle se concentre sur le voyage silencieux, des assises avant et arrière raffinées et un rythme intérieur plus apaisé qui donne à Passion une vraie ambiance de grand tourisme.',
        'يركز فصل المقصورة على السفر الهادئ والمقاعد المصقولة في الأمام والخلف وإيقاع داخلي أكثر سكينة يمنح Passion أجواء رحلات طويلة حقيقية.'
      ),
      images: carGallery('passion', [
        '1920/fl04.jpg',
        '1920/fl05.jpg',
        '1920/fl06.jpg',
        '1920/fl07.jpg',
        '1920/fl0771.jpg'
      ])
    },
    {
      id: 'chapter-3',
      kicker: t('03 Digital cockpit', '03 Cockpit numérique', '03 المقصورة الرقمية'),
      title: t('HarmonySpace digital cockpit', 'Cockpit numérique HarmonySpace', 'مقصورة رقمية HarmonySpace'),
      summary: t(
        'Digital interaction, a wider display atmosphere, and connected travel logic give Passion a cleaner, more intelligent sedan identity without losing its composed tone.',
        'L’interaction numérique, l’atmosphère d’affichage élargie et la logique de voyage connecté donnent à Passion une identité de berline plus intelligente sans perdre sa retenue.',
        'تمنح التفاعلات الرقمية وأجواء الشاشة الأعرض ومنطق السفر المتصل Passion هوية سيدان أكثر ذكاءً من دون فقدان نبرتها المتزنة.'
      ),
      images: carGallery('passion', [
        '1920/fl10.jpg',
        '1920/fl11.jpg',
        '1920/fl1102.jpg',
        '1920/fl1103.jpg',
        '1920/fl14.jpg',
        '1920/fl21.jpg'
      ])
    },
    {
      id: 'chapter-4',
      kicker: t('04 Dynamics', '04 Dynamique', '04 الديناميكيات'),
      title: t('Touring confidence', 'Confiance grand tourisme', 'ثقة الرحلات الطويلة'),
      summary: t(
        'Chassis tuning, intelligent safety logic, and long-distance composure close the route with the same measured confidence expected from Voyah’s executive sedan family.',
        'Le réglage du châssis, la logique de sécurité intelligente et la sérénité longue distance concluent le parcours avec la même maîtrise attendue de la famille de berlines exécutives Voyah.',
        'تختتم معايرة الهيكل ومنطق السلامة الذكي وهدوء الرحلات الطويلة هذا المسار بنفس الثقة المتزنة المتوقعة من عائلة سيدان Voyah التنفيذية.'
      ),
      images: carGallery('passion', [
        '1920/fl15.jpg',
        '1920/fl1701.jpg',
        '1920/fl1702.jpg',
        '1920/fl1703.jpg',
        '1920/fl1704.jpg',
        '1920/fl1705.jpg',
        '1920/fl1802.jpg'
      ])
    },
    {
      id: 'chapter-5',
      kicker: t('05 Safety', '05 Sécurité', '05 السلامة'),
      title: t('Protective sedan assurance', 'Assurance protectrice de la berline', 'طمأنينة حماية السيدان'),
      summary: t(
        'A reinforced body strategy, clear driver-assistance story, and calmer long-route confidence let Passion finish on a more premium safety note.',
        'Une stratégie de carrosserie renforcée, un récit clair de la conduite assistée et une confiance plus apaisée sur longue distance permettent à Passion de se conclure sur une note de sécurité plus premium.',
        'تمنح بنية الهيكل المعززة ومسار القيادة المساعدة الواضح والثقة الهادئة في الرحلات الطويلة Passion خاتمة سلامة أكثر فخامة.'
      ),
      images: carGallery('passion', [
        '1920/fl1805.jpg',
        '1920/fl1806.jpg',
        '1920/fl1807.jpg',
        '1920/fl1808.jpg',
        '1920/fl1809.jpg',
        '1920/fl1820.jpg',
        '1920/fl1821.jpg',
        '1920/fl1822.jpg'
      ])
    }
  ],
  'free.html': [
    {
      id: 'chapter-1',
      kicker: t('01 Exterior', '01 Extérieur', '01 الخارجية'),
      title: t('Long-range crossover presence', 'Présence crossover longue autonomie', 'حضور كروس أوفر بعيد المدى'),
      summary: t(
        'FREE 318 opens with an elevated long-range crossover stance, cleaner touring-oriented SUV proportions, and a calmer visual rhythm built for distance.',
        'FREE 318 s’ouvre avec une posture de crossover longue autonomie surélevée, des proportions de SUV orientées voyage et un rythme visuel plus apaisé.',
        'تبدأ FREE 318 بوضعية كروس أوفر مرتفعة بعيدة المدى وتناسبات SUV أوضح موجهة للسفر وإيقاع بصري أكثر هدوءًا للرحلات الطويلة.'
      ),
      images: carGallery('free', [
        'bg-free-h97D-1.jpg',
        'bg-free-h97D-2.jpg',
        'bg-free-h97D-3.jpg',
        'bg-free-h97D-4.jpg',
        'bg_free_pc4_0002_1920.jpg',
        'bg_free_pc15_0001_1920.jpg'
      ])
    },
    {
      id: 'chapter-2',
      kicker: t('02 Comfort', '02 Confort', '02 الراحة'),
      title: t('Relaxed grand-touring cabin', 'Habitacle grand tourisme apaisé', 'مقصورة رحلات طويلة مريحة'),
      summary: t(
        'Everyday comfort, calmer seat architecture, and a softer premium cabin rhythm make FREE 318 feel deliberately tuned for long-route travel.',
        'Le confort quotidien, une architecture de sièges plus calme et un rythme d’habitacle premium plus doux donnent à FREE 318 une vraie vocation de grande route.',
        'يجعل الجمع بين الراحة اليومية وبنية المقاعد الهادئة وإيقاع المقصورة الفاخر الأكثر نعومة FREE 318 مهيأة بوضوح للرحلات الطويلة.'
      ),
      images: carGallery('free', [
        'bg_free_pc21_0001.jpg',
        'bg_free_pc21_0002.jpg',
        'bg_free_pc21_0003.jpg',
        'bg_free_pc21_0004.jpg',
        'bg_free_pc23_0001.jpg',
        'bg_free_pc28_0001_1920.jpg'
      ])
    },
    {
      id: 'chapter-3',
      kicker: t('03 Smart cockpit', '03 Cockpit intelligent', '03 المقصورة الذكية'),
      title: t('Connected cockpit confidence', 'Confiance du cockpit connecté', 'ثقة المقصورة المتصلة'),
      summary: t(
        'Harmony-style interaction, connected travel flow, and reassuring digital assistance establish a clean, confidence-led smart cockpit chapter.',
        'L’interaction de style Harmony, la continuité de voyage connectée et l’assistance numérique rassurante installent un chapitre cockpit intelligent plus clair et confiant.',
        'ترسخ تفاعلات Harmony وتدفق السفر المتصل والمساعدة الرقمية المطمئنة فصل مقصورة ذكية نظيفًا يقوده الإحساس بالثقة.'
      ),
      images: carGallery('free', [
        'bg_free_pc29_0001.jpg',
        'bg_free_pc29_0002.jpg',
        'bg_free_pc30_0001.jpg',
        'bg_free_pc30_0002.jpg',
        'bg_free_pc31_0001.jpg',
        'bg_free_pc31_0002.jpg'
      ])
    },
    {
      id: 'chapter-4',
      kicker: t('04 Range and charging', '04 Autonomie et recharge', '04 المدى والشحن'),
      title: t('Electric touring confidence', 'Confiance électrique de grand trajet', 'ثقة كهربائية للرحلات الطويلة'),
      summary: t(
        'Battery assurance, charging convenience, and steady long-range behavior keep FREE 318 positioned as a true touring crossover, not a minor trim refresh.',
        'La sécurité batterie, la praticité de recharge et la régularité longue autonomie maintiennent FREE 318 comme un vrai crossover de voyage, pas une simple mise à jour.',
        'تحافظ طمأنينة البطارية وسهولة الشحن واستقرار الأداء على المدى الطويل على تموضع FREE 318 ككروس أوفر رحلات حقيقي لا كتحديث فئة بسيط.'
      ),
      images: carGallery('free', [
        'bg_free_pc35_0001_1920.jpg',
        'bg_free_pc36_0001.jpg',
        'bg_free_pc36_0002.jpg',
        'bg_free_pc37_0001.jpg',
        'bg_free_pc37_0002.jpg',
        'bg_free_pc38_0001.jpg'
      ])
    },
    {
      id: 'chapter-5',
      kicker: t('05 Safety and usability', '05 Sécurité et usage', '05 السلامة والاستخدام'),
      title: t('Everyday premium versatility', 'Polyvalence premium du quotidien', 'تنوع فاخر للاستخدام اليومي'),
      summary: t(
        'Usability, comfort, and practical luxury close the route with a family-ready crossover tone and a stronger everyday-premium message.',
        'L’usage, le confort et le luxe pratique concluent le parcours avec une tonalité de crossover familial et un message premium quotidien plus affirmé.',
        'تختتم قابلية الاستخدام والراحة والرفاهية العملية هذا المسار بروح كروس أوفر جاهزة للعائلة ورسالة فخامة يومية أوضح.'
      ),
      images: carGallery('free', ['bg_free_pc27_0006.jpg', 'bg_free_pc27_0007.jpg', 'bg_free_pc28_0001_1920.jpg', 'bg_free_pc29_0003.jpg'])
    }
  ],
  'courage.html': [
    {
      id: 'chapter-1',
      kicker: t('Exterior', 'Extérieur', 'الخارجية'),
      title: t('Original electric SUV design', 'Design original de SUV électrique', 'تصميم SUV كهربائية أصيل'),
      summary: t(
        'Courage opens with a clearer family-electric stance, expressive surfaces, and a more approachable SUV identity than the newer launch-led route.',
        'Courage s’ouvre sur une posture familiale électrique plus lisible, des surfaces expressives et une identité SUV plus accessible que la route de lancement plus récente.',
        'تبدأ Courage بحضور عائلي كهربائي أوضح وأسـطح تعبيرية وهوية SUV أكثر قربًا من المستخدم مقارنة بالمسار الأحدث بطابع الإطلاق.'
      ),
      images: carGallery('courage', [
        '1920/h37_pc01_0001.jpg',
        '1920/h37_pc02_0001.jpg',
        '1920/h37_pc03_0001.jpg',
        '1920/h37_pc03_0002.jpg',
        '1920/h37_pc03_1_0001.jpg',
        '1920/h37_pc03_1_0002.jpg'
      ])
    },
    {
      id: 'chapter-2',
      kicker: t('Cabin', 'Habitacle', 'المقصورة'),
      title: t('Family comfort cabin', 'Habitacle confort familial', 'مقصورة راحة عائلية'),
      summary: t(
        'The cabin chapter focuses on easier daily comfort, softer lounge-like space, and a more practical family rhythm than a dramatic showpiece interior.',
        'Le chapitre habitacle met l’accent sur un confort quotidien plus simple, un espace plus doux façon salon et un rythme familial plus pratique qu’un intérieur démonstratif.',
        'يركز فصل المقصورة على راحة يومية أسهل ومساحة أهدأ بطابع الصالون وإيقاع عائلي أكثر عملية من مقصورة استعراضية.'
      ),
      images: carGallery('courage', [
        '1920/h37_pc04_0001.jpg',
        '1920/h37_pc05_1_0001.jpg',
        '1920/h37_pc05_1_0002.jpg',
        '1920/h37_pc06_0001.jpg',
        '1920/h37_pc07_0001.jpg',
        '1920/h37_pc07_1_0001.jpg'
      ])
    },
    {
      id: 'chapter-3',
      kicker: t('Smart cockpit', 'Cockpit intelligent', 'المقصورة الذكية'),
      title: t('Connected family cockpit', 'Cockpit familial connecté', 'مقصورة عائلية متصلة'),
      summary: t(
        'Digital displays, connected controls, and everyday-friendly cabin logic give Courage a practical intelligent-cockpit identity.',
        'Les affichages numériques, les commandes connectées et la logique d’habitacle pensée pour le quotidien donnent à Courage une identité de cockpit intelligent pratique.',
        'تمنح الشاشات الرقمية وأدوات التحكم المتصلة ومنطق المقصورة المهيأ للحياة اليومية Courage هوية مقصورة ذكية عملية.'
      ),
      images: carGallery('courage', [
        '1920/h37_pc10_0001.jpg',
        '1920/h37_pc11_0001.jpg',
        '1920/h37_pc12_0001.jpg',
        '1920/h37_pc12_0002.jpg',
        '1920/h37_pc13_0001.jpg'
      ])
    },
    {
      id: 'chapter-4',
      kicker: t('Intelligent driving', 'Conduite intelligente', 'القيادة الذكية'),
      title: t('Assisted travel confidence', 'Confiance de voyage assisté', 'ثقة السفر المساعد'),
      summary: t(
        'Driver-assistance features, parking support, and calmer road awareness position Courage as an everyday intelligent SUV rather than a pure launch showcase.',
        'Les aides à la conduite, l’assistance au stationnement et la conscience routière plus sereine positionnent Courage comme un SUV intelligent du quotidien plutôt qu’une pure vitrine de lancement.',
        'تضع ميزات المساعدة على القيادة ودعم الركن والوعي الهادئ بالطريق Courage كسـيارة SUV ذكية للاستخدام اليومي لا مجرد منصة استعراضية.'
      ),
      images: carGallery('courage', [
        '1920/h37_pc14_0001.jpg',
        '1920/h37_pc15_0001.jpg',
        '1920/h37_pc16_0001.jpg',
        '1920/h37_pc17_0001.jpg',
        '1920/h37_pc17_0002.jpg'
      ])
    },
    {
      id: 'chapter-5',
      kicker: t('Efficiency', 'Efficience', 'الكفاءة'),
      title: t('Electric range and calm', 'Autonomie électrique et sérénité', 'المدى الكهربائي والهدوء'),
      summary: t(
        'Battery capacity, high-voltage confidence, and calmer long-route efficiency close the page with a more grounded electric-SUV promise.',
        'La capacité batterie, la confiance haute tension et l’efficience plus sereine sur longue distance concluent la page avec une promesse de SUV électrique plus concrète.',
        'تختتم سعة البطارية والثقة في الجهد العالي والكفاءة الهادئة في الرحلات الطويلة الصفحة بوعد أكثر واقعية لسيارة SUV كهربائية.'
      ),
      images: carGallery('courage', [
        '1920/h37_pc18_0001.jpg',
        '1920/h37_pc19_0001.jpg',
        '1920/h37_pc19_0002.jpg',
        '1920/h37_pc21_0001.jpg',
        '1920/h37_pc21_0002.jpg',
        '1920/h37_pc22_0001.jpg',
        '1920/h37_pc22_0002.jpg'
      ])
    },
    {
      id: 'chapter-6',
      kicker: t('Safety', 'Sécurité', 'السلامة'),
      title: t('Protective family assurance', 'Assurance familiale protectrice', 'طمأنينة عائلية حامية'),
      summary: t(
        'Body protection, battery security, and family reassurance finish Courage with a balanced, practical premium tone.',
        'La protection de la carrosserie, la sécurité batterie et la réassurance familiale concluent Courage avec une tonalité premium équilibrée et pratique.',
        'تختتم حماية الهيكل وأمان البطارية والطمأنينة العائلية Courage بنبرة فاخرة متوازنة وعملية.'
      ),
      images: carGallery('courage', [
        '1920/h37_pc24_0001.jpg',
        '1920/h37_pc25_0001.jpg',
        '1920/h37_pc25_0002.jpg',
        '1920/h37_pc26_0001.jpg',
        '1920/h37_pc26_1_0001.jpg',
        '1920/h37_pc28_0001.jpg',
        '1920/h37_pc28_1_0001.jpg'
      ])
    }
  ],
  'dreamer-champion.html': [
    {
      id: 'chapter-1',
      kicker: t('01 Special edition', '01 Édition spéciale', '01 إصدار خاص'),
      title: t('Champion flagship presence', 'Présence phare Champion', 'حضور Champion الرائد'),
      summary: t(
        'Dreamer Champion opens with ceremonial MPV posture, richer flagship detailing, and a distinctly curated special-edition character.',
        'Dreamer Champion s’ouvre sur une posture de MPV cérémonielle, un niveau de détail phare plus riche et un caractère d’édition spéciale nettement plus ciselé.',
        'تبدأ Dreamer Champion بوضعية MPV احتفالية وتفاصيل رائدة أكثر ثراءً وشخصية إصدار خاص مصقولة بوضوح.'
      ),
      images: carGallery('dreamer-champion', ['kv_0408_1920.jpg', 'bg_3_n.jpg', 'bg_3_n_2.jpg', 'bg_7_n_banner04.jpg'])
    },
    {
      id: 'chapter-2',
      kicker: t('02 Hospitality cabin', '02 Habitacle hospitalité', '02 مقصورة الضيافة'),
      title: t('Executive lounge hospitality', 'Hospitalité lounge exécutive', 'ضيافة صالون تنفيذية'),
      summary: t(
        'Second-row comfort, ceremonial seating mood, and a quieter hospitality-first layout give Champion a stronger executive-lounge identity.',
        'Le confort du deuxième rang, l’ambiance cérémonielle des sièges et un agencement plus silencieux orienté hospitalité donnent à Champion une identité lounge exécutive plus forte.',
        'تعطي راحة الصف الثاني وأجواء المقاعد الاحتفالية والتخطيط الأكثر هدوءًا الموجه للضيافة Champion هوية صالون تنفيذي أكثر قوة.'
      ),
      images: carGallery('dreamer-champion', ['bg_12_n_banner01.jpg', 'bg_14_n.jpg', 'bg_8_n_banner02.jpg', 'bg_8_n_banner04.jpg'])
    },
    {
      id: 'chapter-3',
      kicker: t('03 Smart cockpit', '03 Cockpit intelligent', '03 المقصورة الذكية'),
      title: t('Connected executive intelligence', 'Intelligence exécutive connectée', 'ذكاء تنفيذي متصل'),
      summary: t(
        'Harmony-style interaction, intelligent assistance features, and premium rear-cabin technology establish Champion’s executive-tech chapter with clearer focus.',
        'L’interaction de style Harmony, les fonctions d’assistance intelligente et la technologie premium de l’arrière structurent le chapitre techno-exécutif de Champion avec plus de clarté.',
        'ترسخ تفاعلات Harmony وميزات المساعدة الذكية وتقنيات المقصورة الخلفية الفاخرة فصل Champion التنفيذي التقني بتركيز أوضح.'
      ),
      images: carGallery('dreamer-champion', ['bg_16_n_banner01.jpg', 'bg_17_n_banner01.jpg', 'bg_10_0408_banner01.jpg', 'bg_22_n_banner01.jpg'])
    },
    {
      id: 'chapter-4',
      kicker: t('04 Safety and travel', '04 Sécurité et voyage', '04 السلامة والسفر'),
      title: t('Long-route flagship assurance', 'Assurance phare longue distance', 'ثقة رائدة للرحلات الطويلة'),
      summary: t(
        'Body protection, composed long-route tuning, and MPV-family reassurance close the route with a special-edition interpretation of flagship Dreamer confidence.',
        'La protection de la carrosserie, un réglage posé sur longue distance et la réassurance familiale MPV concluent le parcours avec une interprétation spéciale de la confiance phare Dreamer.',
        'تختتم حماية الهيكل وضبط الرحلات الطويلة المتزن وطمأنينة عائلة MPV هذا المسار بتفسير إصدار خاص لثقة Dreamer الرائدة.'
      ),
      images: carGallery('dreamer-champion', ['bg_19_0408_banner01.jpg', 'bg_20_n_banner01.jpg', 'bg_23_n_banner01.jpg', 'bg_24_n_banner01.jpg'])
    }
  ],
  'dreamriver.html': [
    {
      id: 'chapter-1',
      title: t('Scenic edition presence', 'Présence d’édition panoramique', 'حضور إصدار مشهدي'),
      summary: t(
        'Dreamer Mountain River opens with a scenic, hospitality-first interpretation of the Dreamer MPV shape.',
        'Dreamer Mountain River s’ouvre sur une interprétation panoramique et hospitalière de la silhouette MPV Dreamer.',
        'تبدأ Dreamer Mountain River بتفسير مشهدي وطابع ضيافة أولًا لشكل Dreamer MPV.'
      ),
      images: carGallery('dreamriver', ['kv_1920.png', 'sc_2.png', 'sc_2-2.png', 'sc_4.png', 'sc_4-2.png'])
    },
    {
      id: 'chapter-2',
      title: t('Warm lounge cabin', 'Cabine salon chaleureuse', 'مقصورة صالون دافئة'),
      summary: t(
        'The interior narrative emphasizes relaxed seating, shared travel comfort, and a calmer family lounge mood.',
        'Le récit intérieur met l’accent sur des sièges détendus, un confort de voyage partagé et une ambiance salon familiale plus calme.',
        'يركز السرد الداخلي على الجلسة المريحة وراحة السفر المشتركة وأجواء صالون عائلية أكثر هدوءًا.'
      ),
      images: carGallery('dreamriver', ['sc_5.png', 'sc_5-2.png', 'sc_6.png', 'sc_6-2.png', 'sc_7.png'])
    },
    {
      id: 'chapter-3',
      title: t('Travel calm', 'Sérénité de voyage', 'هدوء السفر'),
      summary: t(
        'Long-distance composure and family-oriented calm keep the edition feeling like a scenic companion rather than a standard trim.',
        'La sérénité longue distance et le calme orienté famille font de cette édition un compagnon de voyage scénique plutôt qu’une finition ordinaire.',
        'تحافظ الثقة في الرحلات الطويلة والهدوء الموجه للعائلة على إحساس الإصدار بوصفه رفيقًا مشهديًا لا مجرد فئة عادية.'
      ),
      images: carGallery('dreamriver', ['sc_8.png', 'sc_8-2.png', 'sc_9.png', 'sc_9-2.png'])
    },
    {
      id: 'chapter-4',
      title: t('Shared journeys', 'Voyages partagés', 'رحلات مشتركة'),
      summary: t(
        'The final chapter closes with safety and shared-travel reassurance, keeping the Mountain River tone elegant and familial.',
        'Le dernier chapitre se ferme sur la sécurité et la confiance du voyage partagé, en conservant un ton élégant et familial.',
        'يختتم الفصل الأخير بطمأنينة السلامة والسفر المشترك مع الحفاظ على نبرة أنيقة وعائلية.'
      ),
      images: carGallery('dreamriver', ['sc_10.png', 'sc_10-2.png', 'sc_11.png', 'sc_11-2.png'])
    }
  ],
  'courage.html': [
    {
      id: 'chapter-1',
      title: t('Original aesthetics', 'Esthétique originale', 'جمالية أصلية'),
      summary: t(
        'Courage frames its identity through a cleaner electric-SUV silhouette, welcoming front graphics, and a warmer urban presence.',
        'Courage affirme son identité par une silhouette de SUV électrique pure, une face avant accueillante et une présence urbaine chaleureuse.',
        'ترسم Courage هويتها عبر هيئة SUV كهربائية أنقية وواجهة أمامية مرحبة وحضور حضري دافئ.'
      ),
      images: carGallery('courage', ['1920/h37_pc01_0001.jpg', '1920/h37_pc02_0001.jpg', '1920/h37_pc03_0001.jpg'])
    },
    {
      id: 'chapter-2',
      title: t('Pure electric efficiency', 'Efficience électrique pure', 'كفاءة كهربائية كاملة'),
      summary: t(
        'The efficiency story combines long range, high power output, and a comfort-first electric chassis into one balanced urban SUV chapter.',
        'Le récit de l’efficience combine grande autonomie, puissance élevée et un châssis électrique orienté confort dans un chapitre SUV urbain équilibré.',
        'يجمع سرد الكفاءة بين المدى الطويل والقوة العالية وهيكل كهربائي يركز على الراحة في فصل SUV حضري متوازن.'
      ),
      images: carGallery('courage', ['1920/h37_pc04_0001.jpg', '1920/h37_pc06_0001.jpg']),
      videos: ['/voyah-resources/images/car/h37/video_04.mp4']
    },
    {
      id: 'chapter-3',
      title: t('Family comfort cockpit', 'Cockpit confort familial', 'مقصورة راحة عائلية'),
      summary: t(
        'The cabin focuses on digital interaction, shared family space, and a calmer premium mood built for everyday urban life.',
        'L’habitacle se concentre sur l’interaction numérique, l’espace familial partagé et une ambiance premium calme pensée pour la ville.',
        'تركز المقصورة على التفاعل الرقمي والمساحة العائلية المشتركة وأجواء فاخرة هادئة مهيأة للحياة المدنية اليومية.'
      ),
      images: carGallery('courage', ['1920/h37_pc10_0001.jpg', '1920/h37_pc14_0001.jpg', '1920/h37_pc17_0001.jpg'])
    }
  ],
  'newDreamer.html': [
    {
      id: 'chapter-1',
      title: t('Panoramic luxury exterior', 'Extérieur luxe panoramique', 'خارجية فاخرة بانورامية'),
      summary: t(
        'Dreamer 25 opens with a ceremonial MPV presence, refined front graphics, and an executive-scale body designed for grand travel.',
        'Dreamer 25 s’ouvre sur une présence MPV cérémonielle, une face avant raffinée et une carrosserie exécutive pensée pour le voyage de prestige.',
        'تبدأ Dreamer 25 بحضور MPV احتفالي وواجهة أمامية مصقولة وهيكل بحجم تنفيذي مصمم للرحلات الكبيرة.'
      ),
      images: carGallery('newDreamer', ['kv_1920.png', 'h56c_pc03_0001.jpg', 'h56c_pc03_0002.jpg'])
    },
    {
      id: 'chapter-2',
      title: t('Executive lounge cabin', 'Habitacle salon exécutif', 'مقصورة صالون تنفيذي'),
      summary: t(
        'The cabin narrative highlights second-row hospitality, seat engineering with cloud-like comfort, and a calmer lounge atmosphere.',
        'Le récit d’habitacle met en avant l’hospitalité de deuxième rang, une ingénierie des sièges au confort aérien et une ambiance salon apaisée.',
        'يركز سرد المقصورة على ضيافة الصف الثاني وهندسة مقاعد براحة سحابية وأجواء صالون هادئة.'
      ),
      images: carGallery('newDreamer', ['h56c_pc08_banner01.jpg', 'h56c_pc08_banner02.jpg']),
      videos: ['/voyah-resources/images/car/h56c/video_05.mp4']
    },
    {
      id: 'chapter-3',
      title: t('Harmony intelligent travel', 'Voyage intelligent Harmony', 'سفر ذكي Harmony'),
      summary: t(
        'Connected travel logic, smart cockpit interaction, and premium family convenience keep the route feeling advanced and effortless.',
        'La logique de voyage connecté, l’interaction intelligente et la praticité familiale premium maintiennent une expérience avancée et sans effort.',
        'يحافظ منطق السفر المتصل وتفاعل المقصورة الذكي ووسائل الراحة العائلية الفاخرة على تجربة متقدمة وسلسة.'
      ),
      images: carGallery('newDreamer', ['h56c_pc20_bg.jpg', 'bg_swiper_3_1_n.jpg', 'bg_4_n.jpg'])
    }
  ],
  'dreamer.html': [
    {
      id: 'chapter-1',
      kicker: t('01 Luxury MPV', '01 MPV de luxe', '01 MPV فاخرة'),
      title: t('Luxury MPV presence', 'Présence MPV de luxe', 'حضور MPV فاخرة'),
      summary: t(
        'The 24 Dreamer opens with broad luxury MPV presence, a ceremonial family posture, and a calmer flagship hospitality tone.',
        'Le Dreamer 24 s’ouvre sur une large présence de MPV de luxe, une posture familiale cérémonielle et une tonalité d’hospitalité phare plus apaisée.',
        'تبدأ Dreamer 24 بحضور MPV فاخر واسع ووضعية عائلية احتفالية ونبرة ضيافة رائدة أكثر هدوءًا.'
      ),
      images: carGallery('dreamer', ['kv_1920.jpg', 'bg_swiper_4_1.jpg', 'bg_swiper_5_1.jpg', 'bg_swiper_8_1.jpg'])
    },
    {
      id: 'chapter-2',
      kicker: t('02 Cabin comfort', '02 Confort habitacle', '02 راحة المقصورة'),
      title: t('Rear cabin comfort', 'Confort arrière', 'راحة الصف الخلفي'),
      summary: t(
        'This cabin chapter highlights second and third-row comfort, generous family packaging, and lounge-like long-distance composure.',
        'Ce chapitre habitacle met en avant le confort des deuxième et troisième rangs, un agencement familial généreux et une sérénité longue distance façon lounge.',
        'يسلط هذا الفصل الضوء على راحة الصفين الثاني والثالث والتوزيع العائلي السخي وثبات الرحلات الطويلة بطابع الصالون.'
      ),
      images: carGallery('dreamer', ['bg_swiper_10_1.jpg', 'bg_swiper_11_1.jpg', 'bg_swiper_12_1.jpg', 'bg_swiper_14_1.jpg'])
    },
    {
      id: 'chapter-3',
      kicker: t('03 Smart cockpit', '03 Cockpit intelligent', '03 المقصورة الذكية'),
      title: t('Smart family cockpit', 'Cockpit familial intelligent', 'مقصورة عائلية ذكية'),
      summary: t(
        'Connected screens, intelligent assistance, and premium family convenience define Dreamer’s calm and modern smart-cockpit character.',
        'Les écrans connectés, l’assistance intelligente et la praticité familiale premium définissent le caractère calme et moderne du cockpit intelligent Dreamer.',
        'تحدد الشاشات المتصلة والمساعدة الذكية ووسائل الراحة العائلية الفاخرة طابع المقصورة الذكية الهادئ والحديث في Dreamer.'
      ),
      images: carGallery('dreamer', ['bg_swiper_15_1.jpg', 'bg_swiper_18_1.jpg', 'bg_swiper_19_1.jpg', 'bg_swiper_20_1.jpg'])
    },
    {
      id: 'chapter-4',
      kicker: t('04 Family safety', '04 Sécurité familiale', '04 السلامة العائلية'),
      title: t('Family safety', 'Sécurité familiale', 'السلامة العائلية'),
      summary: t(
        'Body protection and long-route confidence close the route with a polished flagship MPV family-safety statement.',
        'La protection de la carrosserie et la confiance sur longue distance concluent le parcours avec une déclaration de sécurité familiale MPV phare et aboutie.',
        'تختتم حماية الهيكل والثقة في الرحلات الطويلة هذا المسار ببيان متقن عن سلامة العائلة في MPV رائدة.'
      ),
      images: carGallery('dreamer', ['bg_swiper_22_1.jpg', 'bg_swiper_23_1.jpg', 'bg_swiper_25_1.jpg', 'bg_swiper_27_1.jpg'])
    }
  ]
}

export const getExpandedModelGallery = (slug: string, fallback: string[]) => modelGalleryMap[slug] ?? fallback

export const getModelStorySections = (slug: string): ModelStorySection[] | undefined => modelStorySectionMap[slug]

