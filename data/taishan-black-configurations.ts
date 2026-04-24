// Voyah Taishan Black Warrior (Titan Black Edition) - Configuration data
import type { CarModel, ConfigurationItem } from './passionL-configurations.ts'

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

const blackWarriorConfigs: ConfigurationItem[] = [
  // Basic Params
  createConfig('tw-dims', 'basic-params', 'Dimensions (mm)', 'Longueur * Largeur * Hauteur (mm)', 'الأبعاد (مم)', '5230*2025*1817', '5230*2025*1817', '5230*2025*1817', 'standard'),
  createConfig('tw-wheelbase', 'basic-params', 'Wheelbase (mm)', 'Empattement (mm)', 'قاعدة العجلات (مم)', '3120', '3120', '3120', 'standard'),
  createConfig('tw-curb-weight', 'basic-params', 'Curb Weight (kg)', 'Poids à vide (kg)', 'الوزن الصافي (كجم)', '2852', '2852', '2852', 'standard'),
  createConfig('tw-accel', 'basic-params', '0-100 km/h Acceleration (s)', 'temps d\'accélération de 0 à 100 km/h (s)', 'التسارع 0-100 كم/ساعة', '5.2', '5.2', '5.2', 'standard'),
  createConfig('tw-max-speed', 'basic-params', 'Maximum Speed (km/h)', 'Vitesse maximale (km/h)', 'السرعة القصوى (كم/ساعة)', '200', '200', '200', 'standard'),
  createConfig('tw-warranty', 'basic-params', 'Vehicle Warranty', 'Garantie du véhicule', 'ضمان السيارة', '5 years / 100,000 km', '5 ans ou 100 000 kilomètres', '5 سنوات / 100,000 كم', 'standard'),
  createConfig('tw-seating', 'basic-params', 'Seating Layout', 'Plan de salle', 'ترتيب المقاعد', '2+2+2', '2+2+2', '2+2+2', 'standard'),
  createConfig('tw-ext-color', 'basic-params', 'Exterior Color', 'Couleur extérieure', 'اللون الخارجي', 'Xuan Ying Hei', 'Xuan Ying Hei', 'روان ينغ هي', 'standard'),
  createConfig('tw-int-color', 'basic-params', 'Interior Color', 'Couleur intérieure', 'اللون الداخلي', 'Danmo', 'Danmo', 'دانمو', 'standard'),
  createConfig('tw-radius', 'basic-params', 'Min Turning Radius (m)', 'Rayon de braquage minimum (m)', 'نصف قطر الدوران', '5.4', '5.4', '5.4', 'standard'),
  createConfig('tw-tires', 'basic-params', 'Tire Specs', 'Spécifications des pneus', 'مواصفات الإطارات', '275/45/R22', '275/45/R22', '275/45/R22', 'standard'),
  createConfig('tw-wheels', 'basic-params', 'Wheels Design', 'Conception de jantes de roue', 'تصميم العجلات', 'Starry Sky + Red Calipers', 'Jantes Ciel Étoilé + Étriers Rouges Haute Performance', 'جنوط سماء مرصعة بالنجوم + ملاقط حمراء', 'standard'),

  // Powertrain
  createConfig('tw-power-form', 'power', 'Power Form', 'Forme de puissance', 'شكل الطاقة', 'Lanhai 1.5T Hybrid + Dual Motor', 'Système hybride rechargeable Lanhai Power 1.5T + double moteur', 'نظام هجين Lanhai 1.5T', 'standard'),
  createConfig('tw-voltage', 'power', 'Voltage Architecture', 'Architecture de supercharge 800 V + 5 C', 'معمارية 800 فولت', '800V + 5C', '800V + 5C', '800V + 5C', 'standard'),
  createConfig('tw-battery', 'power', 'Battery Capacity (kWh)', 'Capacité de la batterie (kWh)', 'سعة البطارية', '65', '65', '65', 'standard'),
  createConfig('tw-drive', 'power', 'Drive System', 'système d\'entraînement', 'نظام الدفع', 'Intelligent AWD', 'Transmission intégrale intelligente', 'دفع رباعي ذكي', 'standard'),
  createConfig('tw-ev-range', 'power', 'CLTC Range (km)', 'Autonomie électrique pure CLTC (km)', 'المدى الكهربائي', '350', '350', '350', 'standard'),
  createConfig('tw-comb-range', 'power', 'Combined Range (km)', 'Autonomie combinée CLTC (km)', 'المدى المدمج', '1430', '1430', '1430', 'standard'),

  // Assisted Driving
  createConfig('tw-huawei', 'assisted-driving', 'Huawei ADS', 'Huawei Qiankun Intelligent Driving ADS 4', 'هواوي ADS 4', 'Included', 'Inclus', 'مضمن', 'standard'),
  createConfig('tw-lidar', 'assisted-driving', 'LiDAR', 'LiDAR', 'ليدار', '4', '4', '4', 'standard'),
  createConfig('tw-cameras', 'assisted-driving', 'Cameras', 'Caméra haute définition', 'كاميرات', '11', '11', '11', 'standard'),
]

export const taishanBlackConfigurations: CarModel = {
  id: 'taishan-black',
  name: {
    en: 'Voyah Taishan Black Warrior',
    fr: 'Voyah Titan Black Edition',
    ar: 'فوياه تايشان المحارب الأسود'
  },
  versions: [
    {
      id: 'taishan-black-ed',
      name: { en: 'Black Warrior Edition', fr: 'Édition Guerrier Noir', ar: 'نسخة المحارب الأسود' },
      type: 'PHEV',
      price: 509900,
      configurations: blackWarriorConfigs
    }
  ]
}
