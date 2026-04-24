import type { CarModel } from '~/types/configurations'

export const taishanX8Configurations: CarModel = {
  id: 'taishan-x8',
  name: {
    en: 'Voyah Taishan X8',
    fr: 'Voyah Titan X8',
    ar: 'فوياه تايشان X8'
  },
  versions: [
    {
      id: 'max-phev',
      name: { en: 'Max PHEV', fr: 'Max PHEV', ar: 'ماكس PHEV' },
      price: '302,900 ¥'
    },
    {
      id: 'ultra-phev',
      name: { en: 'Ultra PHEV', fr: 'Ultra PHEV', ar: 'ألترا PHEV' },
      price: '339,900 ¥'
    },
    {
      id: 'ultra-plus-phev',
      name: { en: 'Ultra+ PHEV', fr: 'Ultra+ PHEV', ar: 'ألترا+ PHEV' },
      price: '369,900 ¥'
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
          values: { 'max-phev': '5200*2025*1814', 'ultra-phev': '5200*2025*1814', 'ultra-plus-phev': '5200*2025*1814' }
        },
        {
          id: 'wheelbase',
          name: { en: 'Wheelbase (mm)', fr: 'Empattement (mm)', ar: 'قاعدة العجلات (مم)' },
          values: { 'max-phev': '3090', 'ultra-phev': '3090', 'ultra-plus-phev': '3090' }
        },
        {
          id: 'acceleration',
          name: { en: '0-100 km/h acceleration (s)', fr: "temps d'accélération de 0 à 100 km/h (s)", ar: 'تسارع 0-100 كم/س (ثانية)' },
          values: { 'max-phev': '5.9', 'ultra-phev': '5.5', 'ultra-plus-phev': '5.5' }
        },
        {
          id: 'max-speed',
          name: { en: 'Max Speed (km/h)', fr: 'Vitesse maximale (km/h)', ar: 'السرعة القصوى (كم/س)' },
          values: { 'max-phev': '200', 'ultra-phev': '200', 'ultra-plus-phev': '200' }
        },
        {
          id: 'curb-weight',
          name: { en: 'Curb Weight (kg)', fr: 'Poids à vide (kg)', ar: 'وزن السيارة (كجم)' },
          values: { 'max-phev': '2765', 'ultra-phev': '2790', 'ultra-plus-phev': '2815' }
        },
        {
          id: 'trunk-volume',
          name: { en: 'Trunk Volume (L)', fr: 'Volume du coffre (L)', ar: 'حجم الصندوق (لتر)' },
          values: { 'max-phev': '1148-2361L', 'ultra-phev': '1148-2361L', 'ultra-plus-phev': '1148-2361L' }
        },
        {
          id: 'seats',
          name: { en: 'Seating Layout', fr: 'Plan de salle', ar: 'توزيع المقاعد' },
          values: { 'max-phev': '5 places', 'ultra-phev': '5 places', 'ultra-plus-phev': '5 places' }
        },
        {
          id: 'exterior-colors',
          name: { en: 'Exterior Colors', fr: 'Couleur extérieure', ar: 'الألوان الخارجية' },
          values: { 
            'max-phev': 'Noir Xuan Ying / Blanc Du Ruo / Gris Chen Xing / Argent Xing Guang / Bleu Yuan Shan / Rouge Bi Xi',
            'ultra-phev': 'Noir Xuan Ying / Blanc Du Ruo / Gris Chen Xing / Argent Xing Guang / Bleu Yuan Shan / Rouge Bi Xi',
            'ultra-plus-phev': 'Noir Xuan Ying / Blanc Du Ruo / Gris Chen Xing / Argent Xing Guang / Bleu Yuan Shan / Rouge Bi Xi'
          }
        },
        {
          id: 'interior-colors',
          name: { en: 'Interior Colors', fr: 'Couleur intérieure', ar: 'الألوان الداخلية' },
          values: { 
            'max-phev': 'Cèdre / Bois de santal violet / Orange rouge',
            'ultra-phev': 'Cèdre / Bois de santal violet / Orange rouge',
            'ultra-plus-phev': 'Cèdre / Bois de santal violet / Orange rouge'
          }
        }
      ]
    },
    {
      id: 'exterior-config',
      name: { en: 'Exterior Configuration', fr: 'Configuration extérieure', ar: 'التجهيزات الخارجية' },
      params: [
        {
          id: 'active-grille',
          name: { en: 'Active Grille', fr: 'Grille active', ar: 'شبك أمامي نشط' },
          values: { 'max-phev': 'standard', 'ultra-phev': 'standard', 'ultra-plus-phev': 'standard' }
        },
        {
          id: 'galaxy-led-taillights',
          name: { en: 'Galaxy LED Taillights', fr: 'Feux arrière LED Galaxy', ar: 'مصابيح خلفية LED جالاكسي' },
          values: { 'max-phev': 'standard', 'ultra-phev': 'standard', 'ultra-plus-phev': 'standard' }
        },
        {
          id: 'electric-doors',
          name: { en: 'Four-door Intelligent Electric Doors', fr: 'Porte électrique intelligente à quatre portes', ar: 'أبواب كهربائية ذكية للأربعة أبواب' },
          values: { 'max-phev': 'none', 'ultra-phev': 'none', 'ultra-plus-phev': 'standard' }
        },
        {
          id: 'soft-close-doors',
          name: { en: 'Soft-close Doors', fr: 'Quatre portes à ventouses électriques', ar: 'أبواب شفط كهربائية' },
          values: { 'max-phev': 'standard', 'ultra-phev': 'standard', 'ultra-plus-phev': 'standard' }
        },
        {
          id: 'wheels-21',
          name: { en: '21-inch Starry Sky Wheels', fr: 'Roues Starry Sky de 21 pouces', ar: 'عجلات Starry Sky مقاس 21 بوصة' },
          values: { 'max-phev': 'standard', 'ultra-phev': 'standard', 'ultra-plus-phev': 'standard' }
        },
        {
          id: 'wheels-22',
          name: { en: '22-inch Starry Sky Wheels', fr: 'Roues Starry Sky de 22 pouces', ar: 'عجلات Starry Sky مقاس 22 بوصة' },
          values: { 'max-phev': 'optional', 'ultra-phev': 'optional', 'ultra-plus-phev': 'optional' }
        }
      ]
    },
    {
      id: 'electric-system',
      name: { en: 'Electric System', fr: 'Système triphasé électrique', ar: 'النظام الكهربائي' },
      params: [
        {
          id: '800v-platform',
          name: { en: '800V High Voltage Platform', fr: 'Plateforme haute tension 800 V', ar: 'منصة 800 فولت عالية الجهد' },
          values: { 'max-phev': 'none', 'ultra-phev': 'standard', 'ultra-plus-phev': 'standard' }
        },
        {
          id: 'battery-capacity',
          name: { en: 'Battery Capacity (kWh)', fr: 'Capacité de la batterie (kWh, 1/3C)*', ar: 'سعة البطارية (كيلوواط ساعة)' },
          values: { 'max-phev': 'none', 'ultra-phev': '65', 'ultra-plus-phev': '65' }
        },
        {
          id: 'drive-system',
          name: { en: 'Drive System', fr: 'système d\'entraînement', ar: 'نظام الدفع' },
          values: { 
            'max-phev': 'Système de transmission intégrale intelligent à contrôle vectoriel de couple',
            'ultra-phev': 'Système de transmission intégrale intelligent à contrôle vectoriel de couple',
            'ultra-plus-phev': 'Système de transmission intégrale intelligent à contrôle vectoriel de couple'
          }
        }
      ]
    }
  ]
}
