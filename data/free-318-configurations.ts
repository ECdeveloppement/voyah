import type { CarModel } from '~/types/configurations'

export const free318Configurations: CarModel = {
  id: 'free-318',
  name: {
    en: 'Voyah FREE 318',
    fr: 'Voyah FREE 318',
    ar: 'فوياه فري 318'
  },
  versions: [
    {
      id: 'rwd-318',
      name: { en: 'Rear-wheel Drive Version', fr: 'Version à propulsion arrière', ar: 'نسخة الدفع الخلفي' },
      price: '228,900 ¥'
    },
    {
      id: '4wd-259',
      name: { en: 'Four-wheel Drive Version', fr: 'Version à transmission intégrale', ar: 'نسخة الدفع الرباعي' },
      price: '266,900 ¥'
    }
  ],
  categories: [
    {
      id: 'basic-params',
      name: { en: 'Basic Parameters', fr: 'Paramètres de base', ar: 'المعايير الأساسية' },
      params: [
        {
          id: 'length',
          name: { en: 'Length (mm)', fr: 'Longueur (mm)', ar: 'الطول (مم)' },
          values: { 'rwd-318': '4905', '4wd-259': '4905' }
        },
        {
          id: 'width',
          name: { en: 'Width (mm)', fr: 'Largeur (mm)', ar: 'العرض (مم)' },
          values: { 'rwd-318': '1950', '4wd-259': '1950' }
        },
        {
          id: 'height',
          name: { en: 'Height (mm)', fr: 'Hauteur (mm)', ar: 'الارتفاع (مم)' },
          values: { 'rwd-318': '1645', '4wd-259': '1645' }
        },
        {
          id: 'wheelbase',
          name: { en: 'Wheelbase (mm)', fr: 'Empattement (mm)', ar: 'قاعدة العجلات (مم)' },
          values: { 'rwd-318': '2960', '4wd-259': '2960' }
        },
        {
          id: 'exterior-colors',
          name: { en: 'Exterior Colors', fr: 'Couleur extérieure', ar: 'الألوان الخارجية' },
          values: { 
            'rwd-318': 'Titanium crystal gray, Jade green, Du Ruobai, Xuan Ying Hei, Youthful years',
            '4wd-259': 'Titanium crystal gray, Jade green, Du Ruobai, Xuan Ying Hei, Youthful years'
          }
        },
        {
          id: 'interior-colors',
          name: { en: 'Interior Colors', fr: 'Couleur intérieure', ar: 'الألوان الداخلية' },
          values: { 
            'rwd-318': 'Ghost Gray, White Waves, Qingfeng Black',
            '4wd-259': 'Ghost Gray, White Waves, Qingfeng Black'
          }
        }
      ]
    },
    {
      id: 'dynamic-performance',
      name: { en: 'Dynamic Performance', fr: 'Performances dynamiques', ar: 'الأداء الديناميكي' },
      params: [
        {
          id: 'cltc-ev-range',
          name: { en: 'CLTC Pure EV Range (km)', fr: 'Autonomie électrique pure CLTC (km)*', ar: 'المدى الكهربائي الخالص CLTC (كم)' },
          values: { 'rwd-318': '318', '4wd-259': '259' }
        },
        {
          id: 'combined-range',
          name: { en: 'Combined Range (km)', fr: 'Autonomie combinée (km)', ar: 'المدى الإجمالي (كم)' },
          values: { 'rwd-318': '1458', '4wd-259': '1357' }
        },
        {
          id: 'acceleration',
          name: { en: '0-100 km/h acceleration (s)', fr: 'temps d\'accélération de 0 à 100 km/h (s)', ar: 'التسارع من 0 إلى 100 كم/س (ثانية)' },
          values: { 'rwd-318': '7.3', '4wd-259': '4.5' }
        },
        {
          id: 'max-power',
          name: { en: 'Max Power (kW)', fr: 'Puissance maximale (kW)', ar: 'القوة القصوى (كيلوواط)' },
          values: { 'rwd-318': '200', '4wd-259': '360' }
        },
        {
          id: 'max-torque',
          name: { en: 'Max Torque (N·m)', fr: 'Couple maximal (N·m)', ar: 'العزم الأقصى (نيوتن متر)' },
          values: { 'rwd-318': '310', '4wd-259': '720' }
        }
      ]
    },
    {
      id: 'chassis-system',
      name: { en: 'Chassis System', fr: 'Système de châssis', ar: 'نظام الهيكل' },
      params: [
        {
          id: 'air-suspension',
          name: { en: 'Adjustable Air Suspension (100mm)', fr: 'Suspension pneumatique réglable de 100 mm', ar: 'تعليق هوائي قابل للتعديل 100 مم' },
          values: { 'rwd-318': 'standard', '4wd-259': 'standard' }
        },
        {
          id: 'aluminum-chassis',
          name: { en: '90% All-aluminum Chassis', fr: 'Châssis léger entièrement en alliage d\'aluminium', ar: 'هيكل ألومنيوم بنسبة 90%' },
          values: { 'rwd-318': 'standard', '4wd-259': 'standard' }
        }
      ]
    },
    {
      id: 'intelligent-cockpit',
      name: { en: 'Intelligent Cockpit', fr: 'Cockpit intelligent', ar: 'المقصورة الذكية' },
      params: [
        {
          id: 'triple-screen',
          name: { en: 'Galaxy Triple Liftable Screen', fr: 'Triple écran intégré relevable', ar: 'شاشة ثلاثية قابلة للرفع' },
          values: { 'rwd-318': 'standard', '4wd-259': 'standard' }
        },
        {
          id: 'audio-system',
          name: { en: 'Dynaudio Hi-Fi (10 Units)', fr: 'Système audio haute fidélité Dynaudio (10 unités)', ar: 'نظام صوتي Dynaudio Hi-Fi (10 وحدات)' },
          values: { 'rwd-318': 'standard', '4wd-259': 'standard' }
        }
      ]
    }
  ]
}
