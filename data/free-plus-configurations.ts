import type { CarModel } from '~/types/configurations'

export const freePlusConfigurations: CarModel = {
  id: 'free-plus',
  name: {
    en: 'Voyah FREE+',
    fr: 'Voyah FREE+',
    ar: 'فوياه فري+'
  },
  versions: [
    {
      id: 'qiankun-rwd',
      name: { en: 'Qiankun RWD Version', fr: 'Version Qiankun à propulsion arrière', ar: 'نسخة تشيان كون دفع خلفي' },
      price: '219,900 ¥'
    },
    {
      id: 'qiankun-4wd',
      name: { en: 'Qiankun 4WD Version', fr: 'Version Qiankun à quatre roues motrices', ar: 'نسخة تشيان كون دفع رباعي' },
      price: '249,900 ¥'
    },
    {
      id: 'sport-custom-4wd',
      name: { en: 'Sport Customized 4WD Version', fr: 'version personnalisée sport à quatre roues motrices', ar: 'النسخة الرياضية المخصصة دفع رباعي' },
      price: '279,900 ¥'
    }
  ],
  categories: [
    {
      id: 'basic-params',
      name: { en: 'Basic Parameters', fr: 'Paramètres de base', ar: 'المعايير الأساسية' },
      params: [
        {
          id: 'dimensions',
          name: { en: 'Length * Width * Height (mm)', fr: 'Longueur * Largeur * Hauteur (mm)', ar: 'الطول * العرض * الارتفاع (مم)' },
          values: { 'qiankun-rwd': '4915*1960*1660', 'qiankun-4wd': '4915*1960*1645', 'sport-custom-4wd': '4915*1960*1645' }
        },
        {
          id: 'wheelbase',
          name: { en: 'Wheelbase (mm)', fr: 'Empattement (mm)', ar: 'قاعدة العجلات (مم)' },
          values: { 'qiankun-rwd': '2960', 'qiankun-4wd': '2960', 'sport-custom-4wd': '2960' }
        },
        {
          id: 'ground-clearance',
          name: { en: 'Ground Clearance (mm)', fr: 'garde au sol (mm)', ar: 'الخلوص الأرضي (مم)' },
          values: { 
            'qiankun-rwd': '170 (143 fully loaded)', 
            'qiankun-4wd': 'Off-road 211 / Comfort 161 / Sport 131 / Welcome 111', 
            'sport-custom-4wd': 'Off-road 211 / Comfort 161 / Sport 131 / Welcome 111' 
          }
        },
        {
          id: 'max-speed',
          name: { en: 'Max Speed (km/h)', fr: 'Vitesse maximale (km/h)', ar: 'السرعة القصوى (كم/س)' },
          values: { 'qiankun-rwd': '180', 'qiankun-4wd': '200', 'sport-custom-4wd': '200' }
        },
        {
          id: 'curb-weight',
          name: { en: 'Curb Weight (kg)', fr: 'Poids à vide (kg)', ar: 'وزن السيارة (كجم)' },
          values: { 'qiankun-rwd': '2250', 'qiankun-4wd': '2350', 'sport-custom-4wd': '2350' }
        },
        {
          id: 'cltc-combined-range',
          name: { en: 'CLTC Combined Range (km)', fr: 'Autonomie combinée de CLTC (km)', ar: 'المدى المشترك CLTC (كم)' },
          values: { 'qiankun-rwd': '1458', 'qiankun-4wd': '1357', 'sport-custom-4wd': '1357' }
        },
        {
          id: 'cltc-ev-range',
          name: { en: 'CLTC Pure EV Range (km)', fr: 'Autonomie électrique pure CLTC (km)', ar: 'المدى الكهربائي الخالص CLTC (كم)' },
          values: { 'qiankun-rwd': '318', 'qiankun-4wd': '259', 'sport-custom-4wd': '259' }
        },
        {
          id: 'exterior-colors',
          name: { en: 'Exterior Colors', fr: 'Couleurs extérieures', ar: 'الألوان الخارجية' },
          values: { 
            'qiankun-rwd': 'Lapis-lazuli violet / champagne / or étoile gris / bleu jeunesse Xuan / Ying noir / Du Ruo blanc',
            'qiankun-4wd': 'Lapis-lazuli violet / champagne / or étoile gris / bleu jeunesse Xuan / Ying noir / Du Ruo blanc',
            'sport-custom-4wd': 'Shadow Ribbon Customized Color'
          }
        },
        {
          id: 'interior-colors',
          name: { en: 'Interior Colors', fr: 'palette de couleurs intérieures', ar: 'الألوان الداخلية' },
          values: { 
            'qiankun-rwd': 'Ambre brun / aurore violet / bleu profond',
            'qiankun-4wd': 'Ambre brun / aurore violet / bleu profond',
            'sport-custom-4wd': 'Black and Gold Bi-color'
          }
        }
      ]
    },
    {
      id: 'comfort-cockpit',
      name: { en: 'Comfort Cockpit 2.0', fr: 'Cockpit Confort 2.0', ar: 'مقصورة الراحة 2.0' },
      params: [
        {
          id: 'leather-seats',
          name: { en: 'Leather Seats', fr: 'Sièges en cuir', ar: 'مقاعد جلدية' },
          values: { 
            'qiankun-rwd': 'OEKO-TEX® certified baby-skin-friendly material', 
            'qiankun-4wd': 'OEKO-TEX® certified baby-skin-friendly material', 
            'sport-custom-4wd': 'OEKO-TEX® certified baby-skin-friendly material + NAPPA genuine leather' 
          }
        },
        {
          id: 'driver-seat-electric',
          name: { en: '12-way Electric Adjustable Driver Seat', fr: 'Siège conducteur à réglage électrique 12 positions', ar: 'مقعد سائق تعديل كهربائي 12 وضعية' },
          values: { 'qiankun-rwd': 'standard', 'qiankun-4wd': 'standard', 'sport-custom-4wd': 'standard' }
        },
        {
          id: 'front-seat-heating',
          name: { en: 'Front Seat Heating', fr: 'Fonction de chauffage des sièges avant', ar: 'تدفئة المقاعد الأمامية' },
          values: { 'qiankun-rwd': 'standard', 'qiankun-4wd': 'standard', 'sport-custom-4wd': 'standard' }
        },
        {
          id: 'front-seat-ventilation',
          name: { en: 'Front Seat Ventilation', fr: 'fonction de ventilation des sièges avant', ar: 'تهوية المقاعد الأمامية' },
          values: { 'qiankun-rwd': 'standard', 'qiankun-4wd': 'standard', 'sport-custom-4wd': 'standard' }
        },
        {
          id: 'front-seat-massage',
          name: { en: 'Front Seat SPA Massage', fr: 'Sièges avant avec fonction massage 8 points de niveau SPA', ar: 'مساج للمقاعد الأمامية' },
          values: { 'qiankun-rwd': 'standard', 'qiankun-4wd': 'standard', 'sport-custom-4wd': 'standard' }
        }
      ]
    }
  ]
}
