import type { CarModel } from '../types/configurations'

export const zhiyinConfigurations: CarModel = {
  id: 'zhiyin',
  name: {
    en: 'Voyah Courage',
    fr: 'Lantu Zhiyin',
    ar: 'فوياه كوراج'
  },
  versions: [
    {
      id: 'long-range-smart',
      name: { en: 'Long Range Smart Edition', fr: 'Édition intelligente longue portée', ar: 'نسخة ذكية طويلة المدى' },
      price: '196,900 ¥'
    },
    {
      id: 'long-life-supercharge',
      name: { en: 'Long Life Supercharge Version', fr: 'Version à suralimentation longue durée', ar: 'نسخة الشحن الفائق طويلة الأمد' },
      price: '202,900 ¥'
    },
    {
      id: 'ultra-long-range-smart',
      name: { en: 'Ultra Long Range Smart Edition', fr: 'Version intelligente avec autonomie ultra-longue', ar: 'نسخة ذكية بمدى فائق الطول' },
      price: '236,900 ¥'
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
          values: { 'long-range-smart': '4725', 'long-life-supercharge': '4725', 'ultra-long-range-smart': '4725' }
        },
        {
          id: 'width',
          name: { en: 'Width (mm)', fr: 'Largeur (mm)', ar: 'العرض (مم)' },
          values: { 'long-range-smart': '1900', 'long-life-supercharge': '1900', 'ultra-long-range-smart': '1900' }
        },
        {
          id: 'height',
          name: { en: 'Height (mm)', fr: 'Hauteur (mm)', ar: 'الارتفاع (مم)' },
          values: { 'long-range-smart': '1636/1653', 'long-life-supercharge': '1636/1653', 'ultra-long-range-smart': '1636/1653' }
        },
        {
          id: 'wheelbase',
          name: { en: 'Wheelbase (mm)', fr: 'Empattement (mm)', ar: 'قاعدة العجلات (مم)' },
          values: { 'long-range-smart': '2900', 'long-life-supercharge': '2900', 'ultra-long-range-smart': '2900' }
        },
        {
          id: 'curb-weight',
          name: { en: 'Curb Weight (kg)', fr: 'Poids à vide (kg)', ar: 'الوزن الفارغ (كجم)' },
          values: { 'long-range-smart': '2099', 'long-life-supercharge': '2145', 'ultra-long-range-smart': '2099' }
        },
        {
          id: 'trunk-volume',
          name: { en: 'Trunk Volume (L)', fr: 'Volume du coffre (L)', ar: 'حجم الصندوق (لتر)' },
          values: { 'long-range-smart': '527-1400', 'long-life-supercharge': '527-1400', 'ultra-long-range-smart': '527-1400' }
        }
      ]
    },
    {
      id: 'dynamic-performance',
      name: { en: 'Dynamic Performance', fr: 'Performances dynamiques', ar: 'الأداء الديناميكي' },
      params: [
        {
          id: 'voltage-platform',
          name: { en: 'Voltage Platform', fr: 'Plateforme de tension', ar: 'منصة الجهد' },
          values: { 'long-range-smart': '400V', 'long-life-supercharge': '800V SiC', 'ultra-long-range-smart': '800V SiC' }
        },
        {
          id: 'battery-capacity',
          name: { en: 'Battery Capacity (kWh)', fr: 'Capacité de la batterie (kWh)', ar: 'سعة البطارية (كيلوواط ساعة)' },
          values: { 'long-range-smart': '77', 'long-life-supercharge': '79', 'ultra-long-range-smart': '109' }
        },
        {
          id: 'cltc-range',
          name: { en: 'CLTC Range (km)', fr: 'Autonomie électrique pure CLTC (km)', ar: 'المدى CLTC (كم)' },
          values: { 'long-range-smart': '625', 'long-life-supercharge': '650', 'ultra-long-range-smart': '901' }
        },
        {
          id: 'supercharge-5c',
          name: { en: '5C Supercharge', fr: 'Supercharge 5C', ar: 'شحن فائق 5C' },
          values: { 'long-range-smart': '-', 'long-life-supercharge': 'standard', 'ultra-long-range-smart': '-' }
        },
        {
          id: 'charge-time',
          name: { en: 'Fast Charge Time (20%-80%)', fr: 'Temps de charge rapide (min., 20 % à 80 %)', ar: 'وقت الشحن السريع (20%-80%)' },
          values: { 'long-range-smart': '26 min', 'long-life-supercharge': '10 min', 'ultra-long-range-smart': '32.5 min' }
        },
        {
          id: 'acceleration',
          name: { en: '0-100 km/h (s)', fr: 'temps d\'accélération de 0 à 100 km/h (s)', ar: 'التسارع من 0 إلى 100 كم/س (ثانية)' },
          values: { 'long-range-smart': '6.8', 'long-life-supercharge': '6.8', 'ultra-long-range-smart': '6.8' }
        }
      ]
    },
    {
      id: 'chassis-system',
      name: { en: 'Chassis System', fr: 'Système de châssis', ar: 'نظام الهيكل' },
      params: [
        {
          id: 'front-suspension',
          name: { en: 'Front Suspension', fr: 'Suspension avant', ar: 'التعليق الأمامي' },
          values: { 'long-range-smart': 'MacPherson independent', 'long-life-supercharge': 'MacPherson independent', 'ultra-long-range-smart': 'MacPherson independent' }
        },
        {
          id: 'rear-suspension',
          name: { en: 'Rear Suspension', fr: 'Suspension arrière', ar: 'التعليق الخلفي' },
          values: { 'long-range-smart': 'Five-link independent', 'long-life-supercharge': 'Five-link independent', 'ultra-long-range-smart': 'Five-link independent' }
        },
        {
          id: 'cdc-suspension',
          name: { en: 'CDC Damping Suspension', fr: 'Suspension à amortissement réglable CDC', ar: 'تعليق CDC' },
          values: { 'long-range-smart': 'standard', 'long-life-supercharge': 'standard', 'ultra-long-range-smart': 'standard' }
        }
      ]
    }
  ]
}
