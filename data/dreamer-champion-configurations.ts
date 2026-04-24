import type { CarModel } from '../types/configurations'

export const dreamerChampionConfigurations: CarModel = {
  id: 'dreamer-champion',
  name: {
    en: 'Voyah Dreamer Champion Edition',
    fr: 'Voyah Dreamer Champion',
    ar: 'فوياه دريمر نسخة البطل'
  },
  versions: [
    {
      id: 'dreamer-champion-edition',
      name: { en: 'Champion Edition', fr: 'Édition Champion', ar: 'نسخة البطل' },
      price: '315,900 ¥'
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
          values: { 'dreamer-champion-edition': '5315' }
        },
        {
          id: 'width',
          name: { en: 'Width (mm)', fr: 'Largeur (mm)', ar: 'العرض (مم)' },
          values: { 'dreamer-champion-edition': '1985' }
        },
        {
          id: 'height',
          name: { en: 'Height (mm)', fr: 'Hauteur (mm)', ar: 'الارتفاع (مم)' },
          values: { 'dreamer-champion-edition': '1800' }
        },
        {
          id: 'wheelbase',
          name: { en: 'Wheelbase (mm)', fr: 'Empattement (mm)', ar: 'قاعدة العجلات (مم)' },
          values: { 'dreamer-champion-edition': '3200' }
        },
        {
          id: 'cltc-ev-range',
          name: { en: 'CLTC Pure EV Range (km)', fr: 'Autonomie électrique pure CLTC (km)*', ar: 'المدى الكهربائي الخالص CLTC (كم)' },
          values: { 'dreamer-champion-edition': '235' }
        },
        {
          id: 'cltc-combined-range',
          name: { en: 'CLTC Combined Range (km)', fr: 'Autonomie combinée CLTC (km)*', ar: 'المدى المدمج CLTC (كم)' },
          values: { 'dreamer-champion-edition': '1411' }
        },
        {
          id: 'acceleration',
          name: { en: '0-100 km/h acceleration (s)', fr: 'temps d\'accélération de 0 à 100 km/h (s)', ar: 'التسارع من 0 إلى 100 كم/س (ثانية)' },
          values: { 'dreamer-champion-edition': '5.9' }
        },
        {
          id: 'max-power',
          name: { en: 'Total System Power (kW)', fr: 'Puissance totale du système (kW)', ar: 'إجمالي طاقة النظام (كيلوواط)' },
          values: { 'dreamer-champion-edition': '420' }
        }
      ]
    },
    {
      id: 'luxury-cabin',
      name: { en: 'Luxury Cabin', fr: 'Cabine de luxe', ar: 'مقصورة فاخرة' },
      params: [
        {
          id: 'audio-system',
          name: { en: 'Audio System', fr: 'Système audio', ar: 'النظام الصوتي' },
          values: { 'dreamer-champion-edition': 'VOYAH Panoramic Surround (20 speakers)' }
        },
        {
          id: 'refrigerator',
          name: { en: 'Smart Refrigerator', fr: 'Réfrigérateur intelligent', ar: 'ثلاجة ذكية' },
          values: { 'dreamer-champion-edition': '13L Double Door' }
        },
        {
          id: 'entertainment-screen',
          name: { en: 'Rear Entertainment Screen', fr: 'Écran de divertissement arrière', ar: 'شاشة ترفيه خلفية' },
          values: { 'dreamer-champion-edition': '17.3-inch 3K' }
        },
        {
          id: 'ar-hud',
          name: { en: 'AR-HUD', fr: 'AR-HUD', ar: 'شاشة عرض أمامية معززة' },
          values: { 'dreamer-champion-edition': '29-inch Full HD' }
        }
      ]
    },
    {
      id: 'safety',
      name: { en: 'Flagship Safety', fr: 'Sécurité phare', ar: 'أمان رائد' },
      params: [
        {
          id: 'cage-body',
          name: { en: 'Body Strength', fr: 'Résistance du corps', ar: 'قوة الهيكل' },
          values: { 'dreamer-champion-edition': '2000MPa Ultra-high Strength Cage Body' }
        },
        {
          id: 'surround-view',
          name: { en: 'Panoramic Image', fr: 'Image panoramique', ar: 'صورة بانورامية' },
          values: { 'dreamer-champion-edition': '540° Ultra-HD + Transparent Chassis' }
        }
      ]
    }
  ]
}
