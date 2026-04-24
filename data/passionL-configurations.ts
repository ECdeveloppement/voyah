// Passion L (Lantu Chasing Light L) - Configuration data based on official Voyah website
export interface ConfigurationItem {
  id: string
  name: {
    en: string
    fr: string
    ar: string
  }
  description?: {
    en: string
    fr: string
    ar: string
  }
  category: string
  included?: boolean
  price?: number
  icon?: 'standard' | 'optional' | 'not-included'
  value?: string  // Valeur textuelle simple
  displayValue?: {
    text: string
    icon?: string
  }
}

export interface ModelVersion {
  id: string
  name: {
    en: string
    fr: string
    ar: string
  }
  type: string
  price: number
  configurations: ConfigurationItem[]
}

export interface CarModel {
  id: string
  name: {
    en: string
    fr: string
    ar: string
  }
  versions: ModelVersion[]
}

// Helper function to create configuration items
const createConfig = (
  id: string,
  category: string,
  nameEn: string,
  nameFr: string,
  nameAr: string,
  valueEn: string,
  valueFr: string,
  valueAr: string,
  icon?: 'standard' | 'optional' | 'not-included'
): ConfigurationItem => ({
  id,
  name: { en: nameEn, fr: nameFr, ar: nameAr },
  description: { en: valueEn, fr: valueFr, ar: valueAr },
  category,
  included: true,
  ...(icon && { icon })
})

// Configurations communes aux deux versions (avec les mêmes valeurs)
const commonConfigurations: ConfigurationItem[] = [
  // Paramètres de base (Basic Parameters)
  createConfig('basic-length', 'basic-params',
    'Length (mm)', 'Longueur (mm)', 'الطول (مم)',
    '5125', '5125', '5125', 'standard'),
  createConfig('basic-width', 'basic-params',
    'Width (mm)', 'Largeur (mm)', 'العرض (مم)',
    '1985', '1985', '1985', 'standard'),
  createConfig('basic-wheelbase', 'basic-params',
    'Wheelbase (mm)', 'Empattement (mm)', 'قاعدة العجلات (مم)',
    '3010', '3010', '3010', 'standard'),
  createConfig('basic-curb-weight', 'basic-params',
    'Curb Weight (kg)', 'Poids à vide (kg)', 'الوزن الصافي (كجم)',
    '2370', '2370', '2370', 'standard'),
  createConfig('basic-ev-range', 'basic-params',
    'Pure Electric Range CLTC (km)*', 'Autonomie électrique pure CLTC (km)*', 'المدى الكهربائي النقي CLTC (كم)*',
    '410', '410', '410', 'standard'),
  createConfig('basic-combined-range', 'basic-params',
    'Combined Range CLTC (km)*', 'Autonomie combinée CLTC (km)*', 'المدى المدمج CLTC (كم)*',
    '1400', '1400', '1400', 'standard'),
  createConfig('basic-fuel-consumption', 'basic-params',
    'Fuel Consumption CLTC (L/100 km)*', 'Consommation de carburant CLTC (L/100 km)*', 'استهلاك الوقود CLTC (لتر/100 كم)*',
    '4.9', '4.9', '4.9', 'standard'),
  createConfig('basic-energy-consumption', 'basic-params',
    'Energy Consumption (kW·h/100 km)', 'Consommation d\'énergie (kW·h/100 km)', 'استهلاك الطاقة (كيلوواط·ساعة/100 كم)',
    '19.6', '19.6', '19.6', 'standard'),
  createConfig('basic-max-speed', 'basic-params',
    'Maximum Speed (km/h)', 'Vitesse maximale (km/h)', 'السرعة القصوى (كم/ساعة)',
    '200', '200', '200', 'standard'),
  createConfig('basic-acceleration', 'basic-params',
    '0-100 km/h Acceleration (s)', 'Accélération 0-100 km/h (s)', 'التسارع 0-100 كم/ساعة (ث)',
    '4.8', '4.8', '4.8', 'standard'),
  createConfig('basic-warranty', 'basic-params',
    'Vehicle Warranty', 'Garantie du véhicule (années/km)', 'ضمان السيارة',
    '5 years / 100,000 km', '5 ans/100 000 kilomètres', '5 سنوات / 100,000 كم', 'standard'),
  createConfig('basic-seating', 'basic-params',
    'Seating Layout', 'Plan de salle', 'ترتيب المقاعد',
    '2+3', '2+3', '2+3', 'standard'),
  createConfig('basic-trunk', 'basic-params',
    'Trunk Volume (L)', 'Volume du coffre (L)', 'حجم صندوق الأمتعة (لتر)',
    '414', '414', '414', 'standard'),
  createConfig('basic-interior-colors', 'basic-params',
    'Interior Colors', 'Couleur intérieure', 'ألوان المقصورة',
    'Smoke Mountain Gray / Rice White / Danxia Red',
    'Gris de la Montagne de Fumée/Blanc Riz/Rouge Danxia',
    'رمادي جبل الدخان / أبيض أرز / أحمر دانكسيا', 'standard'),

  // Puissance phare (Flagship Power)
  createConfig('power-form', 'power',
    'Power Form', 'Forme de puissance', 'شكل الطاقة',
    '800V LanHai Intelligent Hybrid PHEV',
    '800V LanHai PHEV hybride intelligent',
    '800V LanHai PHEV هجين ذكي', 'standard'),
  createConfig('power-drive-form', 'power',
    'Drive Form', 'Formule de conduite', 'شكل القيادة',
    'Dual Motor All-Wheel Drive',
    'Transmission intégrale à deux moteurs',
    'دفع رباعي بمحركين', 'standard'),
  createConfig('power-engine', 'power',
    'Engine Model', 'Modèle de moteur', 'طراز المحرك',
    'Lanhai Power 1.5T Hybrid (DFMC15TE3)',
    'Moteur hybride Lanhai Power 1.5T (DFMC15TE3)',
    'محرك Lanhai Power الهجين 1.5T (DFMC15TE3)', 'standard'),
  createConfig('power-thermal-efficiency', 'power',
    'Engine Thermal Efficiency', 'Rendement thermique', 'الكفاءة الحرارية',
    '45.18%', '45,18%', '45.18%', 'standard'),
  createConfig('power-engine-power', 'power',
    'Engine Max Power (kW)', 'Puissance moteur max (kW)', 'قوة المحرك القصوى (كيلوواط)',
    '105', '105', '105', 'standard'),
  createConfig('power-engine-torque', 'power',
    'Engine Max Torque (N·m)', 'Couple moteur max (N·m)', 'عزم المحرك الأقصى (نيوتن·متر)',
    '220', '220', '220', 'standard'),
  createConfig('power-fuel-tank', 'power',
    'Fuel Tank Capacity (L)', 'Capacité réservoir (L)', 'سعة خزان الوقود (لتر)',
    '51', '51', '51', 'standard'),
  createConfig('power-fuel-grade', 'power',
    'Fuel Grade', 'Carburant', 'درجة الوقود',
    '95 Octane Gasoline', 'Essence 95 octane', 'بنزين 95 أوكتان', 'standard'),
  createConfig('power-battery', 'power',
    'Battery Capacity (kWh)', 'Capacité batterie (kWh)', 'سعة البطارية (كيلوواط·ساعة)',
    '63', '63', '63', 'standard'),
  createConfig('power-front-motor-power', 'power',
    'Front Motor Max Power (kW)', 'Puissance moteur avant (kW)', 'قوة المحرك الأمامي (كيلوواط)',
    '150', '150', '150', 'standard'),
  createConfig('power-front-motor-torque', 'power',
    'Front Motor Max Torque (N·m)', 'Couple moteur avant (N·m)', 'عزم المحرك الأمامي (نيوتن·متر)',
    '300', '300', '300', 'standard'),
  createConfig('power-rear-motor-power', 'power',
    'Rear Motor Max Power (kW)', 'Puissance moteur arrière (kW)', 'قوة المحرك الخلفي (كيلوواط)',
    '230', '230', '230', 'standard'),
  createConfig('power-rear-motor-torque', 'power',
    'Rear Motor Max Torque (N·m)', 'Couple moteur arrière (N·m)', 'عزم المحرك الخلفي (نيوتن·متر)',
    '395', '395', '395', 'standard'),
  createConfig('power-total-power', 'power',
    'Total System Power (kW)', 'Puissance totale système (kW)', 'إجمالي طاقة النظام (كيلوواط)',
    '485', '485', '485', 'standard'),
  createConfig('power-total-torque', 'power',
    'Total System Torque (N·m)', 'Couple total système (N·m)', 'عزم النظام الإجمالي (نيوتن·متر)',
    '915', '915', '915', 'standard'),
  createConfig('power-fast-charge', 'power',
    'DC Fast Charge*', 'Charge rapide DC*', 'الشحن السريع DC*',
    'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('power-high-voltage', 'power',
    'High-Voltage Platform', 'Plateforme haute tension', 'منصة الجهد العالي',
    '800V', '800 V', '800V', 'standard'),
  createConfig('power-charge-rate', 'power',
    'Battery Charge Rate', 'Taux de charge', 'معدل الشحن',
    '5C', '5C', '5C', 'standard'),
  createConfig('power-fast-charge-time', 'power',
    'Fast Charge Time (20-80%)', 'Temps charge rapide (20-80%)', 'وقت الشحن السريع (20-80%)',
    '12 min', '12 min', '12 دقيقة', 'standard'),
  createConfig('power-v2l', 'power',
    'Max V2L Discharge (kW)', 'Décharge V2L max (kW)', 'تفريغ V2L الأقصى (كيلوواط)',
    '6', '6', '6', 'standard'),
  createConfig('power-v2v', 'power',
    'Max V2V Discharge (kW)', 'Décharge V2V max (kW)', 'تفريغ V2V الأقصى (كيلوواط)',
    '6', '6', '6', 'standard'),
  createConfig('power-battery-warranty', 'power',
    'Battery Warranty', 'Garantie batterie', 'ضمان البطارية',
    '8 years / 160,000 km', '8 ans / 160 000 km', '8 سنوات / 160,000 كم', 'standard'),

  // Châssis phare (Flagship Chassis) - Tous les éléments communs
  createConfig('chassis-front-suspension', 'chassis',
    'Front Double Wishbone Suspension', 'Suspension avant double triangulation', 'نظام تعليق أمامي مزدوج',
    'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('chassis-rear-suspension', 'chassis',
    'Rear Five-Link Suspension', 'Suspension arrière cinq bras', 'نظام تعليق خلفي خماسي',
    'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('chassis-aluminum', 'chassis',
    'All-Aluminum Chassis (≥90%)', 'Châssis tout aluminium (≥90%)', 'هيكل ألومنيوم بالكامل (≥90%)',
    'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('chassis-power-steering', 'chassis',
    'Speed-Dependent Power Steering', 'Direction assistée asservie', 'توجيه كهربائي حسب السرعة',
    'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('chassis-ventilated-brakes', 'chassis',
    'Ventilated Brake Discs', 'Disques de frein ventilés', 'أقراص فرامل مهواة',
    'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('chassis-epb', 'chassis',
    'EPB with Auto Hold', 'EPB avec Auto Hold', 'EPB مع توقف تلقائي',
    'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('chassis-abs', 'chassis',
    'ABS/EBD', 'ABS/EBD', 'ABS/EBD',
    'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('chassis-tcs', 'chassis',
    'Traction Control (TCS/ASR)', 'Contrôle de traction (TCS/ASR)', 'التحكم في الجر (TCS/ASR)',
    'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('chassis-esp', 'chassis',
    'Electronic Stability Program (ESP)', 'Programme stabilité électronique (ESP)', 'برنامج الثبات الإلكتروني (ESP)',
    'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('chassis-brake-assist', 'chassis',
    'Brake Assist / Hill Start / Hill Descent', 'Assistance freinage / Démarrage côte / Descente', 'مساعدة الفرامل / انطلاق التل / نزول التل',
    'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('chassis-regen', 'chassis',
    'Braking Energy Recovery', 'Récupération d\'énergie au freinage', 'استعادة طاقة الفرملة',
    'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('chassis-drive-modes', 'chassis',
    'Drive Modes (8 modes)', 'Modes de conduite (8 modes)', 'أوضاع القيادة (8 أوضاع)',
    'Included', 'Inclus', 'مضمن', 'standard'),

  // Configuration des sièges (Seat Configuration)
  createConfig('seats-front-adjust', 'seats',
    'Front Seat Power Adjustment', 'Réglage électrique des sièges avant', 'تعديل كهربائي للمقاعد الأمامية',
    'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('seats-front-memory', 'seats',
    'Driver Seat Memory', 'Mémoire du siège conducteur', 'ذاكرة مقعد السائق',
    'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('seats-front-heating', 'seats',
    'Front Seat Heating/Ventilation', 'Chauffage/Ventilation sièges avant', 'تدفئة/تهوية المقاعد الأمامية',
    'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('seats-rear-heating', 'seats',
    'Rear Seat Heating/Ventilation', 'Chauffage/Ventilation sièges arrière', 'تدفئة/تهوية المقاعد الخلفية',
    'Included', 'Inclus', 'مضمن', 'standard'),

  // Cockpit intelligent (Smart Cockpit)
  createConfig('cockpit-screens', 'smart-cockpit',
    'Triple Screen Layout', 'Disposition à triple écran', 'تنسيق الشاشة الثلاثية',
    'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('cockpit-chip', 'smart-cockpit',
    'Qualcomm Snapdragon 8155', 'Puce Snapdragon 8155', 'معالج سناب دراجون 8155',
    'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('cockpit-hifi', 'smart-cockpit',
    'Dynaudio Hi-Fi System', 'Système Hi-Fi Dynaudio', 'نظام داين أوديو الصوتي',
    'Included', 'Inclus', 'مضمن', 'standard'),

  // Conduite assistée (Assisted Driving)
  createConfig('driving-acc', 'assisted-driving',
    'Full-Speed Adaptive Cruise (ACC)', 'Régulateur adaptatif (ACC)', 'مثبت السرعة التكيفي (ACC)',
    'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('driving-lka', 'assisted-driving',
    'Lane Keep Assist (LKA)', 'Maintien de voie (LKA)', 'مساعد البقاء في المسار (LKA)',
    'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('driving-parking', 'assisted-driving',
    'Automatic Parking System', 'Stationnement automatique', 'نظام الركن التلقائي',
    'Included', 'Inclus', 'مضمن', 'standard'),

  // Sécurité phare (Flagship Security)
  createConfig('security-airbags', 'flagship-security',
    'Full-Cabin Airbags', 'Airbags cabine complète', 'وسائد هوائية كاملة',
    'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('security-body', 'flagship-security',
    'High-Strength Steel Body', 'Corps en acier haute résistance', 'هيكل فولاذي عالي القوة',
    'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('security-tire', 'flagship-security',
    'TPMS Tire Pressure Monitoring', 'Surveillance pression pneus (TPMS)', 'نظام مراقبة ضغط الإطارات',
    'Included', 'Inclus', 'مضمن', 'standard')
]

// Configurations spécifiques à la Version 1 (Max)
const maxVersionSpecificConfigs: ConfigurationItem[] = [
  createConfig('basic-height', 'basic-params',
    'Height (mm)', 'Hauteur (mm)', 'الارتفاع (مم)',
    '1522', '1522', '1522', 'standard'),
  createConfig('basic-exterior-colors', 'basic-params',
    'Exterior Colors*', 'Couleur d\'apparence*', 'الألوان الخارجية*',
    'Xuan Ying Black / Du Ruo White / Chen Xing Gray / Champagne Gold',
    'Noir Xuan Ying / Blanc Du Ruo / Gris Chen Xing / Or Champagne',
    'أسود روان ينغ / أبيض دو رو / رمادي تشن شينغ / ذهبي شامبانيا', 'standard'),
  
  // Version Max: Ces équipements ne sont pas inclus
  createConfig('chassis-rear-steering', 'chassis',
    'Intelligent Rear Wheel Steering', 'Direction arrière intelligente', 'توجيه خلفي ذكي',
    'Not Included', 'Non inclus', 'غير مضمن', 'not-included'),
  createConfig('chassis-air-suspension', 'chassis',
    'Smart Magic Carpet Air Suspension', 'Suspension pneumatique Smart Magic Carpet', 'نظام تعليق هوائي ذكي',
    'Not Included', 'Non inclus', 'غير مضمن', 'not-included'),
  createConfig('chassis-cdc', 'chassis',
    'CDC Electromagnetic Damping', 'Amortissement électromagnétique CDC', 'تخميد كهرومغناطيسي CDC',
    'Not Included', 'Non inclus', 'غير مضمن', 'not-included'),
  createConfig('chassis-height-range', 'chassis',
    'Chassis Height Adjustment (mm)', 'Plage hauteur châssis (mm)', 'نطاق ارتفاع الهيكل (مم)',
    'Not Available', 'Non disponible', 'غير متوفر', 'not-included'),
  createConfig('chassis-auto-height', 'chassis',
    'Speed-Dependent Auto Height', 'Hauteur auto selon vitesse', 'ارتفاع تلقائي حسب السرعة',
    'Not Included', 'Non inclus', 'غير مضمن', 'not-included'),
  createConfig('exterior-headlight-auto-level', 'exterior',
    'Auto Headlight Leveling', 'Nivellement auto phares', 'تسوية تلقائية للمصابيح',
    'Not Included', 'Non inclus', 'غير مضمن', 'not-included'),
  createConfig('exterior-wheels-20-glossy', 'exterior',
    '20" Glossy Wheels', 'Jantes brillantes 20"', 'عجلات لامعة 20 بوصة',
    'Not Included', 'Non inclus', 'غير مضمن', 'not-included'),
  createConfig('exterior-floating-logo', 'exterior',
    'Floating Wheel Hub Logo', 'Logo flottant moyeu', 'شعار عجلة عائم',
    'Not Included', 'Non inclus', 'غير مضمن', 'not-included'),
  createConfig('cabin-rnc', 'luxury-cabin',
    'RNC Active Noise Cancellation', 'Annulation active bruit RNC', 'إلغاء الضوضاء النشط RNC',
    'Not Included', 'Non inclus', 'غير مضمن', 'not-included')
]

// Configurations spécifiques à la Version 2 (Ultra)
const ultraVersionSpecificConfigs: ConfigurationItem[] = [
  createConfig('basic-height', 'basic-params',
    'Height (mm)', 'Hauteur (mm)', 'الارتفاع (مم)',
    '1505', '1505', '1505', 'standard'),
  createConfig('basic-exterior-colors', 'basic-params',
    'Exterior Colors*', 'Couleur d\'apparence*', 'الألوان الخارجية*',
    'Xuan Ying Black / Du Ruo White / Chen Xing Gray / Champagne Gold / Jin Luan Red / Jin Yao Black',
    'Noir Xuan Ying / Blanc Du Ruo / Gris Chen Xing / Or Champagne / Rouge Jin Luan / Noir Jin Yao',
    'أسود روان ينغ / أبيض دو رو / رمادي تشن شينغ / ذهبي شامبانيا / أحمر جين لوان / أسود جين ياو', 'standard'),
  
  // Version Ultra: Ces équipements sont inclus (standard)
  createConfig('chassis-rear-steering', 'chassis',
    'Intelligent Rear Wheel Steering', 'Direction arrière intelligente', 'توجيه خلفي ذكي',
    'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('chassis-air-suspension', 'chassis',
    'Smart Magic Carpet Air Suspension', 'Suspension pneumatique Smart Magic Carpet', 'نظام تعليق هوائي ذكي',
    'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('chassis-cdc', 'chassis',
    'CDC Electromagnetic Damping', 'Amortissement électromagnétique CDC', 'تخميد كهرومغناطيسي CDC',
    'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('chassis-height-range', 'chassis',
    'Chassis Height Adjustment (mm)', 'Plage hauteur châssis (mm)', 'نطاق ارتفاع الهيكل (مم)',
    '65', '65', '65', 'standard'),
  createConfig('chassis-auto-height', 'chassis',
    'Speed-Dependent Auto Height', 'Hauteur auto selon vitesse', 'ارتفاع تلقائي حسب السرعة',
    'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('exterior-headlight-auto-level', 'exterior',
    'Auto Headlight Leveling', 'Nivellement auto phares', 'تسوية تلقائية للمصابيح',
    'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('exterior-wheels-20-glossy', 'exterior',
    '20" Glossy Wheels', 'Jantes brillantes 20"', 'عجلات لامعة 20 بوصة',
    'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('exterior-floating-logo', 'exterior',
    'Floating Wheel Hub Logo', 'Logo flottant moyeu', 'شعار عجلة عائم',
    'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('cabin-rnc', 'luxury-cabin',
    'RNC Active Noise Cancellation', 'Annulation active bruit RNC', 'إلغاء الضوضاء النشط RNC',
    'Included', 'Inclus', 'مضمن', 'standard')
]

// Assemblage des configurations complètes
const maxVersionConfigurations: ConfigurationItem[] = [
  ...commonConfigurations,
  ...maxVersionSpecificConfigs
]

const ultraVersionConfigurations: ConfigurationItem[] = [
  ...commonConfigurations,
  ...ultraVersionSpecificConfigs
]

// Export final
export const passionLConfigurations: CarModel = {
  id: 'passion-L',
  name: {
    en: 'Voyah Passion L',
    fr: 'Voyah Passion L',
    ar: 'فوياه باشن إل'
  },
  versions: [
    {
      id: 'passion-L-4wd-max',
      name: {
        en: '4WD Max Edition',
        fr: 'Édition Max 4WD',
        ar: 'إصدار ماكس دفع رباعي'
      },
      type: 'PHEV',
      price: 249900,
      configurations: maxVersionConfigurations
    },
    {
      id: 'passion-L-4wd-ultra',
      name: {
        en: '4WD Ultra Edition',
        fr: 'Édition Ultra 4WD',
        ar: 'إصدار ألترا دفع رباعي'
      },
      type: 'PHEV',
      price: 289900,
      configurations: ultraVersionConfigurations
    }
  ]
}