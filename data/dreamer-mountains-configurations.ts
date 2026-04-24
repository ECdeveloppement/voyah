import type { CarModel } from '../types/configurations'

export const dreamerMountainsConfigurations: CarModel = {
  id: 'dreamer-mountains',
  name: {
    en: 'Voyah Dreamer Mountains and Rivers',
    fr: 'Voyah Dreamer Montagne-Rivière',
    ar: 'فوياه دريمر الجبال والأنهار'
  },
  versions: [
    {
      id: 'dreamriver-edition',
      name: { en: 'Mountains and Rivers Edition', fr: 'Rêveurs de montagnes et de rivières', ar: 'نسخة الجبال والأنهار' },
      price: '709,900 ¥'
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
          values: { 'dreamriver-edition': '5315' }
        },
        {
          id: 'width',
          name: { en: 'Width (mm)', fr: 'Largeur (mm)', ar: 'العرض (مم)' },
          values: { 'dreamriver-edition': '1998' }
        },
        {
          id: 'height',
          name: { en: 'Height (mm)', fr: 'Hauteur (mm)', ar: 'الارتفاع (مم)' },
          values: { 'dreamriver-edition': '1800' }
        },
        {
          id: 'wheelbase',
          name: { en: 'Wheelbase (mm)', fr: 'Empattement (mm)', ar: 'قاعدة العجلات (مم)' },
          values: { 'dreamriver-edition': '3200' }
        },
        {
          id: 'cltc-ev-range',
          name: { en: 'CLTC Pure EV Range (km)', fr: 'Autonomie électrique pure CLTC (km)*', ar: 'المدى الكهربائي الخالص CLTC (كم)' },
          values: { 'dreamriver-edition': '320' }
        },
        {
          id: 'cltc-combined-range',
          name: { en: 'CLTC Combined Range (km)', fr: 'Autonomie combinée CLTC (km)*', ar: 'المدى المدمج CLTC (كم)' },
          values: { 'dreamriver-edition': '1405' }
        },
        {
          id: 'acceleration',
          name: { en: '0-100 km/h acceleration (s)', fr: 'temps d\'accélération de 0 à 100 km/h (s)', ar: 'التسارع من 0 إلى 100 كم/س (ثانية)' },
          values: { 'dreamriver-edition': '5.9' }
        },
        {
          id: 'seating',
          name: { en: 'Seating Layout', fr: 'Plan de salle', ar: 'توزيع المقاعد' },
          values: { 'dreamriver-edition': '2+2' }
        }
      ]
    },
    {
      id: 'powertrain',
      name: { en: 'Flagship Power', fr: 'Puissance phare', ar: 'القوة الرائدة' },
      params: [
        {
          id: 'total-power',
          name: { en: 'Total System Power (kW)', fr: 'Puissance totale du système (kW)', ar: 'إجمالي طاقة النظام (كيلوواط)' },
          values: { 'dreamriver-edition': '490' }
        },
        {
          id: 'total-torque',
          name: { en: 'Total System Torque (N·m)', fr: 'Couple total du système (N·m)', ar: 'إجمالي عزم دوران النظام (نيوتن متر)' },
          values: { 'dreamriver-edition': '915' }
        },
        {
          id: 'battery-capacity',
          name: { en: 'Battery Capacity (kWh)', fr: 'Capacité de la batterie (kWh)', ar: 'سعة البطارية (كيلوواط ساعة)' },
          values: { 'dreamriver-edition': '62.5' }
        },
        {
          id: 'fast-charge-time',
          name: { en: 'Fast Charge Time (20%-80%, min)', fr: 'Temps de charge rapide (min., 20 % à 80 %)*', ar: 'وقت الشحن السريع (20٪ - 80٪، دقيقة)' },
          values: { 'dreamriver-edition': '12' }
        }
      ]
    },
    {
      id: 'luxury-features',
      name: { en: 'Luxury Cabin', fr: 'Cabine de luxe', ar: 'المقصورة الفاخرة' },
      params: [
        {
          id: 'screen',
          name: { en: '50-inch Full Surface Screen', fr: 'Écran géant de 50 pouces sur toute la surface', ar: 'شاشة عملاقة مقاس 50 بوصة' },
          values: { 'dreamriver-edition': 'Standard' }
        },
        {
          id: 'audio',
          name: { en: '22-speaker Dynaudio System', fr: 'Système audio Dynaudio à 22 haut-parleurs', ar: 'نظام صوتي Dynaudio بـ 22 مكبر صوت' },
          values: { 'dreamriver-edition': 'Standard' }
        },
        {
          id: 'refrigerator',
          name: { en: '13L Drawer Refrigerator', fr: 'Réfrigérateur à tiroir de 13 L', ar: 'ثلاجة درج سعة 13 لتر' },
          values: { 'dreamriver-edition': 'Standard' }
        }
      ]
    }
  ]
}
