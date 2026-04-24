// Titan (Voyah Dreamer / Taishan) - Configuration data based on official Voyah website
import type { CarModel, ConfigurationItem, ModelVersion } from './passionL-configurations.ts'

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

// Categories defined in Titan HTML:
// param-module0: Paramètres de base
// param-module1: Groupe motopropulseur
// param-module2: Système de châssis
// param-module3: Conduite assistée et sécurité
// param-module4: cockpit de luxe intelligent
// param-module5: Apparence, design et fonctionnalités
// param-module6: Configuration des sièges

const commonConfigs: ConfigurationItem[] = [
  // Basic Params
  createConfig('titan-width', 'basic-params', 'Width (mm)', 'Largeur (mm)', 'العرض (مم)', '2025', '2025', '2025', 'standard'),
  createConfig('titan-wheelbase', 'basic-params', 'Wheelbase (mm)', 'Empattement (mm)', 'قاعدة العجلات (مم)', '3120', '3120', '3120', 'standard'),
  createConfig('titan-max-speed', 'basic-params', 'Maximum Speed (km/h)', 'Vitesse maximale (km/h)', 'السرعة القصوى (كم/ساعة)', '200', '200', '200', 'standard'),
  createConfig('titan-warranty', 'basic-params', 'Vehicle Warranty', 'Garantie du véhicule (années/km)', 'ضمان السيارة', '5 years / 100,000 km', '5 ans ou 100 000 kilomètres', '5 سنوات / 100,000 كم', 'standard'),
  createConfig('titan-seating', 'basic-params', 'Seating Layout', 'Plan de salle', 'ترتيب المقاعد', '2+2+2', '2+2+2', '2+2+2', 'standard'),
  
  // Powertrain
  createConfig('titan-power-form', 'power', 'Power Form', 'Forme de puissance', 'شكل الطاقة', 'Lanhai Power 1.5T Hybrid + Dual Motor', 'Système hybride rechargeable Lanhai Power 1.5T + double moteur', 'نظام هجين Lanhai Power 1.5T + محرك مزدوج', 'standard'),
  createConfig('titan-battery', 'power', 'Battery Capacity (kWh)', 'Capacité de la batterie (kWh)', 'سعة البطارية', '65', '65', '65', 'standard'),
  createConfig('titan-drive', 'power', 'Drive System', 'système d\'entraînement', 'نظام الدفع', 'Intelligent AWD', 'Transmission intégrale intelligente', 'دفع رباعي ذكي', 'standard'),
  createConfig('titan-ev-range', 'power', 'Electric Range CLTC (km)', 'Autonomie électrique pure CLTC (km)', 'المدى الكهربائي CLTC', '350', '350', '350', 'standard'),
  createConfig('titan-combined-range', 'power', 'Combined Range CLTC (km)', 'Autonomie combinée CLTC (km)', 'المدى المدمج CLTC', '1430', '1430', '1430', 'standard'),
  
  // Chassis
  createConfig('titan-front-susp', 'chassis', 'Front Suspension', 'Suspension avant', 'نظام تعليق أمامي', 'Double Wishbone', 'Suspension avant indépendante à double triangulation', 'نظام تعليق أمامي مزدوج', 'standard'),
  createConfig('titan-rear-susp', 'chassis', 'Rear Suspension', 'Suspension arrière', 'نظام تعليق خلفي', 'Multi-link', 'Suspension arrière multibras indépendante', 'نظام تعليق خلفي متعدد الوصلات', 'standard'),
  
  // Cockpit
  createConfig('titan-screens', 'smart-cockpit', 'Screens', 'Écrans', 'الشاشات', 'Included', 'Inclus', 'مضمن', 'standard'),
]

export const titanConfigurations: CarModel = {
  id: 'titan',


  name: {
    en: 'Voyah Titan',
    fr: 'Voyah Titan',
    ar: 'فوياه تايشان'
  },
  versions: [
    {
      id: 'titan-max',
      name: { en: 'Max', fr: 'Max', ar: 'ماكس' },
      type: 'PHEV',
      price: 379900,
      configurations: [
        ...commonConfigs,
        createConfig('titan-length', 'basic-params', 'Length (mm)', 'Longueur (mm)', 'الطول (مم)', '5230', '5230', '5230', 'standard'),
        createConfig('titan-height', 'basic-params', 'Height (mm)', 'Hauteur (mm)', 'الارتفاع (مم)', '1817', '1817', '1817', 'standard'),
        createConfig('titan-accel', 'basic-params', '0-100 km/h Acceleration (s)', 'temps d\'accélération de 0 à 100 km/h (s)', 'التسارع 0-100 كم/ساعة', '5.2', '5.2', '5.2', 'standard'),
      ]
    },
    {
      id: 'titan-max-plus',
      name: { en: 'Max+', fr: 'Max+', ar: 'ماكس+' },
      type: 'PHEV',
      price: 409900,
      configurations: [
        ...commonConfigs,
        createConfig('titan-length', 'basic-params', 'Length (mm)', 'Longueur (mm)', 'الطول (مم)', '5230', '5230', '5230', 'standard'),
        createConfig('titan-height', 'basic-params', 'Height (mm)', 'Hauteur (mm)', 'الارتفاع (مم)', '1817', '1817', '1817', 'standard'),
        createConfig('titan-accel', 'basic-params', '0-100 km/h Acceleration (s)', 'temps d\'accélération de 0 à 100 km/h (s)', 'التسارع 0-100 كم/ساعة', '5.5', '5.5', '5.5', 'standard'),
      ]
    },
    {
      id: 'titan-ultra',
      name: { en: 'Ultra', fr: 'Ultra', ar: 'ألترا' },
      type: 'PHEV',
      price: 459900,
      configurations: [
        ...commonConfigs,
        createConfig('titan-length', 'basic-params', 'Length (mm)', 'Longueur (mm)', 'الطول (مم)', '5230', '5230', '5230', 'standard'),
        createConfig('titan-height', 'basic-params', 'Height (mm)', 'Hauteur (mm)', 'الارتفاع (مم)', '1817', '1817', '1817', 'standard'),
        createConfig('titan-accel', 'basic-params', '0-100 km/h Acceleration (s)', 'temps d\'accélération de 0 à 100 km/h (s)', 'التسارع 0-100 كم/ساعة', '5.5', '5.5', '5.5', 'standard'),
      ]
    }
  ]
}
