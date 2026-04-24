import type { CarModel } from '../types/configurations'

export const dreamer2026Configurations: CarModel = {
  id: 'dreamer-2026',
  name: {
    en: '2026 Voyah Dreamer',
    fr: 'Voyah Dreamer 26',
    ar: 'فوياه دريمر 2026'
  },
  versions: [
    {
      id: 'kunpeng-pro',
      name: { en: 'Kunpeng Pro', fr: 'Kunpeng Pro', ar: 'كونبينغ برو' },
      price: '329,900 ¥'
    },
    {
      id: 'kunpeng-max',
      name: { en: 'Kunpeng Max', fr: 'Kunpeng Max', ar: 'كونبينغ ماكس' },
      price: '359,900 ¥'
    },
    {
      id: 'qiankun-pro',
      name: { en: 'Qiankun Pro', fr: 'Qiankun Pro', ar: 'كيانكون برو' },
      price: '359,900 ¥'
    },
    {
      id: 'qiankun-max',
      name: { en: 'Qiankun Max', fr: 'Qiankun Max', ar: 'كيانكون ماكس' },
      price: '389,900 ¥'
    },
    {
      id: 'qiankun-ultra',
      name: { en: 'Qiankun Ultra', fr: 'Qiankun Ultra', ar: 'كيانكون ألترا' },
      price: '429,900 ¥'
    },
    {
      id: 'collector-edition',
      name: { en: 'Collector\'s Edition', fr: 'Édition Collector', ar: 'نسخة المجمعين' },
      price: '459,900 ¥'
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
          values: { 'kunpeng-pro': '5315', 'kunpeng-max': '5315', 'qiankun-pro': '5315', 'qiankun-max': '5315', 'qiankun-ultra': '5315', 'collector-edition': '5315' }
        },
        {
          id: 'width',
          name: { en: 'Width (mm)', fr: 'Largeur (mm)', ar: 'العرض (مم)' },
          values: { 'kunpeng-pro': '1985', 'kunpeng-max': '1985', 'qiankun-pro': '1998', 'qiankun-max': '1998', 'qiankun-ultra': '1998', 'collector-edition': '1998' }
        },
        {
          id: 'height',
          name: { en: 'Height (mm)', fr: 'Hauteur (mm)', ar: 'الارتفاع (مم)' },
          values: { 'kunpeng-pro': '1820', 'kunpeng-max': '1820', 'qiankun-pro': '1820', 'qiankun-max': '1820', 'qiankun-ultra': '1800', 'collector-edition': '1800' }
        },
        {
          id: 'wheelbase',
          name: { en: 'Wheelbase (mm)', fr: 'Empattement (mm)', ar: 'قاعدة العجلات (مم)' },
          values: { 'kunpeng-pro': '3200', 'kunpeng-max': '3200', 'qiankun-pro': '3200', 'qiankun-max': '3200', 'qiankun-ultra': '3200', 'collector-edition': '3200' }
        },
        {
          id: 'cltc-ev-range',
          name: { en: 'Pure EV Range (CLTC)', fr: 'Autonomie électrique pure CLTC (km)', ar: 'المدى الكهربائي الخالص (كم)' },
          values: { 'kunpeng-pro': '235', 'kunpeng-max': '350', 'qiankun-pro': '235', 'qiankun-max': '350', 'qiankun-ultra': '350', 'collector-edition': '350' }
        },
        {
          id: 'cltc-combined-range',
          name: { en: 'Combined Range (CLTC)', fr: 'Autonomie combinée CLTC (km)', ar: 'المدى المشترك (كم)' },
          values: { 'kunpeng-pro': '1411', 'kunpeng-max': '1530', 'qiankun-pro': '1411', 'qiankun-max': '1530', 'qiankun-ultra': '1530', 'collector-edition': '1530' }
        }
      ]
    },
    {
      id: 'performance',
      name: { en: 'Flagship Power', fr: 'Puissance phare', ar: 'القوة الرائدة' },
      params: [
        {
          id: 'engine-model',
          name: { en: 'Engine Model', fr: 'Modèle de moteur', ar: 'موديل المحرك' },
          values: { 'kunpeng-pro': '1.5T Hybrid', 'kunpeng-max': '1.5T Hybrid', 'qiankun-pro': '1.5T Hybrid', 'qiankun-max': '1.5T Hybrid', 'qiankun-ultra': '1.5T Hybrid', 'collector-edition': '1.5T Hybrid' }
        },
        {
          id: 'system-power',
          name: { en: 'Total System Power (kW)', fr: 'Puissance totale du système (kW)', ar: 'إجمالي قوة النظام (كيلوواط)' },
          values: { 'kunpeng-pro': '480', 'kunpeng-max': '490', 'qiankun-pro': '480', 'qiankun-max': '490', 'qiankun-ultra': '490', 'collector-edition': '490' }
        },
        {
          id: 'system-torque',
          name: { en: 'Total System Torque (N·m)', fr: 'Couple total du système (N·m)', ar: 'إجمالي عزم النظام (نيوتن متر)' },
          values: { 'kunpeng-pro': '840', 'kunpeng-max': '915', 'qiankun-pro': '840', 'qiankun-max': '915', 'qiankun-ultra': '915', 'collector-edition': '915' }
        },
        {
          id: 'acceleration',
          name: { en: '0-100 km/h (s)', fr: 'temps d\'accélération de 0 à 100 km/h (s)', ar: 'التسارع من 0 إلى 100 كم/س (ثانية)' },
          values: { 'kunpeng-pro': '5.9', 'kunpeng-max': '5.9', 'qiankun-pro': '5.9', 'qiankun-max': '5.9', 'qiankun-ultra': '5.9', 'collector-edition': '5.9' }
        }
      ]
    }
  ]
}
