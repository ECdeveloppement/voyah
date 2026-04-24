import type { CarModel } from '../types/configurations'

export const dreamer2025Configurations: CarModel = {
  id: 'dreamer-2025',
  name: {
    en: '2025 Voyah Dreamer',
    fr: 'Voyah Dreamer 25',
    ar: 'فوياه دريمر 2025'
  },
  versions: [
    {
      id: 'kunpeng-superior',
      name: { en: 'Kunpeng Superior 4WD', fr: 'Édition Kunpeng supérieure à quatre roues motrices', ar: 'نسخة كونبينغ العليا دفع رباعي' },
      price: '329,900 ¥'
    },
    {
      id: 'qiankun-superior',
      name: { en: 'Qiankun Superior 4WD', fr: 'Version Qiankun supérieure à quatre roues motrices', ar: 'نسخة تشيانكون العليا دفع رباعي' },
      price: '359,900 ¥'
    },
    {
      id: 'kunpeng-premium',
      name: { en: 'Kunpeng Premium 4WD', fr: 'Édition Kunpeng premium à quatre roues motrices', ar: 'نسخة كونبينغ بريميوم دفع رباعي' },
      price: '359,900 ¥'
    },
    {
      id: 'qiankun-premium',
      name: { en: 'Qiankun Premium 4WD', fr: 'Édition Qiankun premium à quatre roues motrices', ar: 'نسخة تشيانكون بريميوم دفع رباعي' },
      price: '389,900 ¥'
    },
    {
      id: 'kunpeng-flagship',
      name: { en: 'Kunpeng Flagship 4WD', fr: 'Édition Kunpeng haut de gamme à quatre roues motrices', ar: 'نسخة كونبينغ الرائدة دفع رباعي' },
      price: '399,900 ¥'
    },
    {
      id: 'qiankun-flagship',
      name: { en: 'Qiankun Flagship 4WD', fr: 'Version haut de gamme Qiankun à quatre roues motrices', ar: 'نسخة تشيانكون الرائدة دفع رباعي' },
      price: '429,900 ¥'
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
          values: {
            'kunpeng-superior': '5315',
            'qiankun-superior': '5315',
            'kunpeng-premium': '5315',
            'qiankun-premium': '5315',
            'kunpeng-flagship': '5315',
            'qiankun-flagship': '5315'
          }
        },
        {
          id: 'width',
          name: { en: 'Width (mm)', fr: 'Largeur (mm)', ar: 'العرض (مم)' },
          values: {
            'kunpeng-superior': '1985',
            'qiankun-superior': '1998',
            'kunpeng-premium': '1985',
            'qiankun-premium': '1998',
            'kunpeng-flagship': '1985',
            'qiankun-flagship': '1998'
          }
        },
        {
          id: 'height',
          name: { en: 'Height (mm)', fr: 'Hauteur (mm)', ar: 'الارتفاع (مم)' },
          values: {
            'kunpeng-superior': '1820',
            'qiankun-superior': '1820',
            'kunpeng-premium': '1820',
            'qiankun-premium': '1820',
            'kunpeng-flagship': '1800',
            'qiankun-flagship': '1800'
          }
        },
        {
          id: 'wheelbase',
          name: { en: 'Wheelbase (mm)', fr: 'Empattement (mm)', ar: 'قاعدة العجلات (مم)' },
          values: {
            'kunpeng-superior': '3200',
            'qiankun-superior': '3200',
            'kunpeng-premium': '3200',
            'qiankun-premium': '3200',
            'kunpeng-flagship': '3200',
            'qiankun-flagship': '3200'
          }
        },
        {
          id: 'cltc-ev-range',
          name: { en: 'CLTC Pure EV Range (km)', fr: 'Autonomie électrique pure CLTC (km)*', ar: 'المدى الكهربائي الخالص CLTC (كم)' },
          values: {
            'kunpeng-superior': '235',
            'qiankun-superior': '235',
            'kunpeng-premium': '235',
            'qiankun-premium': '235',
            'kunpeng-flagship': '235',
            'qiankun-flagship': '235'
          }
        },
        {
          id: 'cltc-combined-range',
          name: { en: 'CLTC Combined Range (km)', fr: 'Autonomie combinée CLTC (km)*', ar: 'المدى المدمج CLTC (كم)' },
          values: {
            'kunpeng-superior': '1411',
            'qiankun-superior': '1411',
            'kunpeng-premium': '1411',
            'qiankun-premium': '1411',
            'kunpeng-flagship': '1411',
            'qiankun-flagship': '1411'
          }
        },
        {
          id: 'acceleration',
          name: { en: '0-100 km/h acceleration (s)', fr: 'temps d\'accélération de 0 à 100 km/h (s)', ar: 'التسارع من 0 إلى 100 كم/س (ثانية)' },
          values: {
            'kunpeng-superior': '5.9',
            'qiankun-superior': '5.9',
            'kunpeng-premium': '5.9',
            'qiankun-premium': '5.9',
            'kunpeng-flagship': '5.9',
            'qiankun-flagship': '5.9'
          }
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
          values: {
            'kunpeng-superior': '420',
            'qiankun-superior': '420',
            'kunpeng-premium': '420',
            'qiankun-premium': '420',
            'kunpeng-flagship': '420',
            'qiankun-flagship': '420'
          }
        },
        {
          id: 'total-torque',
          name: { en: 'Total System Torque (N·m)', fr: 'Couple total du système (N·m)', ar: 'إجمالي عزم دوران النظام (نيوتن متر)' },
          values: {
            'kunpeng-superior': '840',
            'qiankun-superior': '840',
            'kunpeng-premium': '840',
            'qiankun-premium': '840',
            'kunpeng-flagship': '840',
            'qiankun-flagship': '840'
          }
        }
      ]
    }
  ]
}
