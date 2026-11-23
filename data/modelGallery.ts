import { t, type Localized } from './dealer'

export type GalleryImage = { file: string; title: Localized }
export type GalleryFeature = { file: string; title: Localized; body?: Localized }

export const freeGallery = [
  {
    id: 'studio',
    title: t('Studio Gallery', 'Studio Galerie', 'معرض الاستوديو'),
    images: [
      { file: 'free-studio-front-threequarter.jpg', title: t('Front three-quarter view', 'Vue de trois quarts avant', 'منظر أمامي جانبي') },
      { file: 'free-studio-right-side.jpg', title: t('Side profile', 'Profil latéral', 'الجانب') },
      { file: 'free-studio-left-rear.jpg', title: t('Rear side profile', 'Profil arrière', 'الجانب الخلفي') },
      { file: 'free-studio-rear-threequarter.jpg', title: t('Rear three-quarter view', 'Vue de trois quarts arrière', 'منظر خلفي جانبي') },
      { file: 'free-studio-rear.jpg', title: t('Rear design', 'Design arrière', 'التصميم الخلفي') },
      { file: 'free-front.jpg', title: t('Front design', 'Design avant', 'التصميم الأمامي') },
      { file: 'free-side.jpg', title: t('Side profile', 'Profil latéral', 'الجانب') },
      { file: 'free-rear.jpg', title: t('Rear design', 'Design arrière', 'التصميم الخلفي') }
    ]
  },
  {
    id: 'road',
    title: t('On the road', 'Sur la route', 'على الطريق'),
    images: [
      { file: 'free-road.jpg', title: t('On the road', 'Sur la route', 'على الطريق') },
      { file: 'free-water.jpg', title: t('All-terrain capability', 'Capacités tout-terrain', 'قدرات على جميع التضاريس') },
      { file: 'free-lake.jpg', title: t('Lakeside stance', 'Au bord du lac', 'على ضفاف البحيرة') },
      { file: 'free-mountain.jpg', title: t('Mountain touring', 'Évasion en montagne', 'رحلة جبلية') },
      { file: 'free-cinematic-mountain-bridge.webp', title: t('Mountain bridge drive', 'Traversée en montagne', 'عبور جسر جبلي') },
      { file: 'free-cinematic-river-crossing.webp', title: t('River crossing', 'Traversée de rivière', 'عبور النهر') },
      { file: 'free-cinematic-sunset-coast.webp', title: t('Sunset coastal drive', 'Sur la côte au coucher du soleil', 'على الساحل عند الغروب') },
      { file: 'free-cinematic-desert-road.webp', title: t('Desert highway', 'Route du désert', 'طريق الصحراء') },
      { file: 'free-cinematic-forest-drive.webp', title: t('Forest cruise', 'Escapade en forêt', 'رحلة في الغابة') }
    ]
  }
] satisfies { id: string; title: Localized; images: GalleryImage[] }[]

export const freeGalleryFeatures: { id: string; title: Localized; description: Localized; items: GalleryFeature[] }[] = [
  {
    id: 'comfort',
    title: t('Comfort', 'Confort', 'الراحة'),
    description: t('First-class seats with ventilation, heating, massage and memory.', 'Des sièges première classe avec ventilation, chauffage, massage et mémorisation.', 'مقاعد من الدرجة الأولى مع تهوية وتدفئة وتدليك وذاكرة.'),
    items: [
      { file: 'free-seats-heated.mp4', title: t('Heated & ventilated seats', 'Sièges chauffants et ventilés', 'مقاعد مدفأة ومهواة'), body: t('Comfort in every season.', 'Le confort en toute saison.', 'راحة في كل الفصول.') },
      { file: 'free-front-seats.mp4', title: t('Power-adjustable seats', 'Sièges à réglage électrique', 'مقاعد قابلة للتعديل كهربائياً'), body: t('Your ideal position, at a touch.', 'Votre position idéale, d’un simple geste.', 'وضعيتك المثالية بلمسة واحدة.') },
      { file: 'free-massage.mp4', title: t('Massage seats', 'Sièges massants', 'مقاعد التدليك'), body: t('Relax on every drive.', 'Détendez-vous à chaque trajet.', 'استرخِ في كل رحلة.') }
    ]
  }
]
