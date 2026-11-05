/**
 * Actualités du concessionnaire.
 * Ajouter un article = ajouter une entrée dans newsItems.
 * `url` pointe vers le communiqué complet (page dédiée ou lien externe) ; laissé vide, le lien « Lire » est masqué.
 */

import { t, type Localized } from './dealer'

export type NewsCategory = 'corporate' | 'product' | 'technology'

export type NewsItem = {
  id: string
  date: string
  category: NewsCategory
  image: string
  title: Localized
  excerpt: Localized
  url: string
}

export const newsCategoryLabels: Record<NewsCategory, Localized> = {
  corporate: t('Corporate', 'Corporate', 'شركي'),
  product: t('Product', 'Produit', 'المنتج'),
  technology: t('Technology', 'Technologie', 'التقنية')
}

export const newsItems: NewsItem[] = [
  {
    id: 'ai-cockpit',
    date: '2024-10-14',
    category: 'technology',
    image: '/voyah-resources/brand/kunpeng_hero.jpg',
    title: t(
      'Voyah unveils its next-generation AI cockpit',
      'Voyah dévoile son cockpit IA de nouvelle génération',
      'Voyah تكشف عن مقصورة الذكاء الاصطناعي من الجيل الجديد'
    ),
    excerpt: t(
      'A localized large language model brings a new level of cabin intelligence to the range.',
      'Un grand modèle de langage localisé élève le niveau d’intelligence de l’habitacle de toute la gamme.',
      'نموذج لغة محلي يرفع مستوى الذكاء داخل المقصورة في جميع الطرازات.'
    ),
    url: ''
  },
  {
    id: 'network-expansion',
    date: '2024-09-22',
    category: 'corporate',
    image: '/voyah-resources/lifestyle/community_hero.jpg',
    title: t(
      'Retail network expansion accelerates in the Gulf',
      'L’expansion du réseau de distribution s’accélère dans le Golfe',
      'تسارع توسع شبكة البيع في الخليج'
    ),
    excerpt: t(
      'New showrooms and service points bring the Voyah ownership experience closer to customers.',
      'De nouveaux showrooms et points service rapprochent l’expérience de possession Voyah des clients.',
      'معارض ونقاط خدمة جديدة تقرّب تجربة امتلاك Voyah من العملاء.'
    ),
    url: ''
  },
  {
    id: 'free-range',
    date: '2024-07-10',
    category: 'product',
    image: '/voyah-resources/images/car/free/kv_1920.png',
    title: t(
      'VOYAH FREE: a longer electric range for daily driving',
      'VOYAH FREE : une autonomie électrique étendue pour l’usage quotidien',
      'VOYAH FREE: مدى كهربائي أطول للاستخدام اليومي'
    ),
    excerpt: t(
      'The extended-range SUV combines comfort, all-wheel drive and a reduced charging cadence.',
      'Le SUV à range étendu réunit confort, transmission intégrale et fréquences de recharge réduites.',
      'سيارة SUV بالمدى الممتد تجمع بين الراحة والدفع الكلي وتقلل وتيرة الشحن.'
    ),
    url: ''
  },
  {
    id: 'battery-safety',
    date: '2024-06-05',
    category: 'technology',
    image: '/voyah-resources/tech/safety_battery_shield.png',
    title: t(
      'Battery protection reaches a new thermal record',
      'La protection de batterie atteint un nouveau record thermique',
      'حماية البطارية تحقق رقماً قياسياً حرارياً جديداً'
    ),
    excerpt: t(
      'Structural shielding keeps cells stable under extreme heat, an essential point for Gulf climates.',
      'Un blindage structurel maintient les cellules stables sous chaleur extrême, un point clé pour les climats du Golfe.',
      'حماية هيكلية تحافظ على استقرار الخلايا تحت الحرارة القصوى، وهو أمر جوهري في مناخ الخليج.'
    ),
    url: ''
  }
]
