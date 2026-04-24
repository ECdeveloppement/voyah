import type { CarModel } from '../types/configurations'

export const zhiyinNewConfigurations: CarModel = {
  id: 'zhiyin-new',
  name: {
    en: 'All-new Voyah Courage',
    fr: 'Nouveau Voyah Courage',
    ar: 'فوياه كوراج الجديد كلياً'
  },
  versions: [
    {
      id: 'qiankun-rwd',
      name: { en: 'Qiankun RWD Version', fr: 'Version Qiankun à propulsion arrière', ar: 'نسخة تشيان كون دفع خلفي' },
      price: '202,900 ¥'
    },
    {
      id: 'qiankun-4wd',
      name: { en: 'Qiankun 4WD Version', fr: 'Version Qiankun à quatre roues motrices', ar: 'نسخة تشيان كون دفع رباعي' },
      price: '222,900 ¥'
    },
    {
      id: 'qiankun-long-range',
      name: { en: 'Qiankun Long Range Edition', fr: 'Édition Qiankun longue durée', ar: 'نسخة تشيان كون المدى الطويل' },
      price: '242,900 ¥'
    },
    {
      id: 'kunpeng-rwd',
      name: { en: 'Kunpeng RWD Version', fr: 'Version Kunpeng à propulsion arrière', ar: 'نسخة كون بانغ دفع خلفي' },
      price: '241,900 ¥'
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
          values: { 'qiankun-rwd': '4810', 'qiankun-4wd': '4810', 'qiankun-long-range': '4810', 'kunpeng-rwd': '4810' }
        },
        {
          id: 'width',
          name: { en: 'Width (mm)', fr: 'Largeur (mm)', ar: 'العرض (مم)' },
          values: { 'qiankun-rwd': '1900', 'qiankun-4wd': '1900', 'qiankun-long-range': '1900', 'kunpeng-rwd': '1900' }
        },
        {
          id: 'height',
          name: { en: 'Height (mm)', fr: 'Hauteur (mm)', ar: 'الارتفاع (مم)' },
          values: { 'qiankun-rwd': '1636', 'qiankun-4wd': '1636', 'qiankun-long-range': '1636', 'kunpeng-rwd': '1636' }
        },
        {
          id: 'wheelbase',
          name: { en: 'Wheelbase (mm)', fr: 'Empattement (mm)', ar: 'قاعدة العجلات (مم)' },
          values: { 'qiankun-rwd': '2925', 'qiankun-4wd': '2925', 'qiankun-long-range': '2925', 'kunpeng-rwd': '2925' }
        },
        {
          id: 'curb-weight',
          name: { en: 'Curb Weight (kg)', fr: 'Poids à vide (kg)', ar: 'وزن السيارة (كجم)' },
          values: { 'qiankun-rwd': '2175', 'qiankun-4wd': '2285', 'qiankun-long-range': '2099', 'kunpeng-rwd': '2175' }
        },
        {
          id: 'trunk-volume',
          name: { en: 'Trunk Volume (L)', fr: 'Volume du coffre (L)', ar: 'سعة الصندوق (لتر)' },
          values: { 'qiankun-rwd': '652-1588', 'qiankun-4wd': '652-1588', 'qiankun-long-range': '652-1588', 'kunpeng-rwd': '652-1588' }
        },
        {
          id: 'exterior-colors',
          name: { en: 'Exterior Colors', fr: 'Couleur extérieure', ar: 'الألوان الخارجية' },
          values: { 
            'qiankun-rwd': 'Du Ruo Bai, Xuan Ying Hei, Chen Xing Hui, Champagne Gold, Feng Bao Fen, Hui Yue Qing',
            'qiankun-4wd': 'Du Ruo Bai, Xuan Ying Hei, Chen Xing Hui, Champagne Gold, Feng Bao Fen, Hui Yue Qing',
            'qiankun-long-range': 'Du Ruo Bai, Xuan Ying Hei, Chen Xing Hui, Champagne Gold, Feng Bao Fen, Hui Yue Qing',
            'kunpeng-rwd': 'Du Ruo Bai, Xuan Ying Hei, Chen Xing Hui, Champagne Gold, Feng Bao Fen, Hui Yue Qing'
          }
        },
        {
          id: 'interior-colors',
          name: { en: 'Interior Colors', fr: 'Couleur intérieure', ar: 'الألوان الداخلية' },
          values: { 
            'qiankun-rwd': 'Sunrise Red, Moon White, Deep Blue',
            'qiankun-4wd': 'Sunrise Red, Moon White, Deep Blue',
            'qiankun-long-range': 'Sunrise Red, Moon White, Deep Blue',
            'kunpeng-rwd': 'Sunrise Red, Moon White, Deep Blue'
          }
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
          values: { 
            'qiankun-rwd': '800V Silicon Carbide Platform', 
            'qiankun-4wd': '800V Silicon Carbide Platform', 
            'qiankun-long-range': '800V Silicon Carbide Platform', 
            'kunpeng-rwd': '800V Silicon Carbide Platform' 
          }
        },
        {
          id: 'battery-capacity',
          name: { en: 'Battery Capacity (kWh)', fr: 'Capacité de la batterie (kWh, 1/3C)', ar: 'سعة البطارية (كيلوواط ساعة)' },
          values: { 'qiankun-rwd': '81', 'qiankun-4wd': '81', 'qiankun-long-range': '112', 'kunpeng-rwd': '81' }
        },
        {
          id: 'cltc-ev-range',
          name: { en: 'CLTC Pure EV Range (km)', fr: 'Autonomie électrique pure CLTC (km)*', ar: 'المدى الكهربائي الخالص CLTC (كم)' },
          values: { 'qiankun-rwd': '650', 'qiankun-4wd': '600', 'qiankun-long-range': '901', 'kunpeng-rwd': '650' }
        },
        {
          id: 'supercharge-5c',
          name: { en: '5C Supercharge', fr: 'Supercharge 5C', ar: 'شحن فائق 5C' },
          values: { 'qiankun-rwd': 'standard', 'qiankun-4wd': 'standard', 'qiankun-long-range': '-', 'kunpeng-rwd': 'standard' }
        },
        {
          id: 'acceleration',
          name: { en: '0-100 km/h acceleration (s)', fr: 'temps d\'accélération de 0 à 100 km/h (s)', ar: 'التسارع من 0 إلى 100 كم/س (ثانية)' },
          values: { 'qiankun-rwd': '6.8', 'qiankun-4wd': '4.3', 'qiankun-long-range': '6.8', 'kunpeng-rwd': '6.8' }
        },
        {
          id: 'external-discharge',
          name: { en: 'External Discharge (6kW)', fr: 'fonction de décharge externe', ar: 'وظيفة التفريغ الخارجي' },
          values: { 'qiankun-rwd': 'standard', 'qiankun-4wd': 'standard', 'qiankun-long-range': 'standard', 'kunpeng-rwd': 'standard' }
        }
      ]
    },
    {
      id: 'chassis-system',
      name: { en: 'Chassis System', fr: 'Système de châssis', ar: 'نظام الهيكل' },
      params: [
        {
          id: 'front-suspension',
          name: { en: 'MacPherson Front Independent Suspension', fr: 'Suspension avant indépendante de type MacPherson', ar: 'تعليق أمامي مستقل ماكفيرسون' },
          values: { 'qiankun-rwd': 'standard', 'qiankun-4wd': 'standard', 'qiankun-long-range': 'standard', 'kunpeng-rwd': 'standard' }
        },
        {
          id: 'rear-suspension',
          name: { en: 'Five-link Rear Independent Suspension', fr: 'Suspension arrière indépendante à cinq bras', ar: 'تعليق خلفي مستقل بخمس وصلات' },
          values: { 'qiankun-rwd': 'standard', 'qiankun-4wd': 'standard', 'qiankun-long-range': 'standard', 'kunpeng-rwd': 'standard' }
        },
        {
          id: 'edc-suspension',
          name: { en: 'EDC Intelligent Adjustable Damping Suspension', fr: 'Suspension à amortissement réglable intelligent EDC', ar: 'تعليق EDC ذكي قابل للتعديل' },
          values: { 'qiankun-rwd': 'standard', 'qiankun-4wd': 'standard', 'qiankun-long-range': 'standard', 'kunpeng-rwd': 'standard' }
        }
      ]
    }
  ]
}
