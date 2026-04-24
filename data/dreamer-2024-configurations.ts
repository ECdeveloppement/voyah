import type { CarModel } from '../types/configurations'

export const dreamer2024Configurations: CarModel = {
  id: 'dreamer-2024',
  name: {
    en: '2024 Voyah Dreamer',
    fr: 'Voyah Dreamer 24',
    ar: 'فوياه دريمر 2024'
  },
  versions: [
    {
      id: 'superior-ultra-long',
      name: { en: 'Superior Ultra-Long Range', fr: 'Version supérieure avec autonomie ultra-longue', ar: 'النسخة المتفوقة بمدى طويل جداً' },
      price: '339,900 ¥'
    },
    {
      id: 'premium-extended',
      name: { en: 'Premium Extended Range', fr: 'Version premium avec autonomie prolongée', ar: 'النسخة الممتازة بمدى ممتد' },
      price: '369,900 ¥'
    },
    {
      id: 'flagship-ultra-long',
      name: { en: 'Flagship Ultra-Long Range', fr: 'Version phare à autonomie ultra-longue', ar: 'النسخة الرائدة بمدى طويل جداً' },
      price: '419,900 ¥'
    }
  ],
  categories: [
    {
      id: 'basic-params',
      name: { en: 'Basic Parameters', fr: 'Paramètres de base', ar: 'المعايير الأساسية' },
      params: [
        {
          id: 'dimensions',
          name: { en: 'L * W * H (mm)', fr: 'Longueur, largeur et hauteur (mm)', ar: 'الطول * العرض * الارتفاع (مم)' },
          values: {
            'superior-ultra-long': '5315*1985*1820',
            'premium-extended': '5315*1985*1820',
            'flagship-ultra-long': '5315*1985*1800'
          }
        },
        {
          id: 'wheelbase',
          name: { en: 'Wheelbase (mm)', fr: 'Empattement (mm)', ar: 'قاعدة العجلات (مم)' },
          values: {
            'superior-ultra-long': '3200',
            'premium-extended': '3200',
            'flagship-ultra-long': '3200'
          }
        },
        {
          id: 'weight',
          name: { en: 'Curb Weight (kg)', fr: 'Poids à vide (kg)', ar: 'وزن السيارة فارغة (كجم)' },
          values: {
            'superior-ultra-long': '2590',
            'premium-extended': '2590',
            'flagship-ultra-long': '2590'
          }
        },
        {
          id: 'cltc-ev-range',
          name: { en: 'CLTC Pure EV Range (km)', fr: 'Autonomie électrique pure CLTC (km)*', ar: 'المدى الكهربائي الخالص CLTC (كم)' },
          values: {
            'superior-ultra-long': '236',
            'premium-extended': '236',
            'flagship-ultra-long': '236'
          }
        },
        {
          id: 'cltc-combined-range',
          name: { en: 'CLTC Combined Range (km)', fr: 'Autonomie combinée CLTC (km)*', ar: 'المدى المدمج CLTC (كم)' },
          values: {
            'superior-ultra-long': '1231',
            'premium-extended': '1231',
            'flagship-ultra-long': '1231'
          }
        },
        {
          id: 'acceleration',
          name: { en: '0-100 km/h acceleration (s)', fr: 'temps d\'accélération de 0 à 100 km/h (s)', ar: 'التسارع من 0 إلى 100 كم/س (ثانية)' },
          values: {
            'superior-ultra-long': '5.9',
            'premium-extended': '5.9',
            'flagship-ultra-long': '5.9'
          }
        }
      ]
    },
    {
      id: 'dynamic-performance',
      name: { en: 'Dynamic Performance', fr: 'Performances dynamiques', ar: 'الأداء الديناميكي' },
      params: [
        {
          id: 'total-power',
          name: { en: 'Total System Power (kW)', fr: 'Puissance totale du système (kW)', ar: 'إجمالي طاقة النظام (كيلوواط)' },
          values: {
            'superior-ultra-long': '420',
            'premium-extended': '420',
            'flagship-ultra-long': '420'
          }
        },
        {
          id: 'total-torque',
          name: { en: 'Total System Torque (N·m)', fr: 'Couple total du système (N·m)', ar: 'إجمالي عزم دوران النظام (نيوتن متر)' },
          values: {
            'superior-ultra-long': '840',
            'premium-extended': '840',
            'flagship-ultra-long': '840'
          }
        },
        {
          id: 'battery-capacity',
          name: { en: 'Battery Capacity (kWh)', fr: 'Capacité de la batterie (kWh)', ar: 'سعة البطارية (كيلوواط ساعة)' },
          values: {
            'superior-ultra-long': '43',
            'premium-extended': '43',
            'flagship-ultra-long': '43'
          }
        },
        {
          id: 'fast-charge-time',
          name: { en: 'Fast Charge Time (h, 20%-80%)', fr: 'Temps de charge rapide (h, 20 % à 80 %)', ar: 'وقت الشحن السريع (20٪ - 80٪، ساعة)' },
          values: {
            'superior-ultra-long': '0.5',
            'premium-extended': '0.5',
            'flagship-ultra-long': '0.5'
          }
        }
      ]
    }
  ]
}
