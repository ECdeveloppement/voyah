<template>
  <div class="about-page">
    <div class="container about-page__body">
      <h1 class="about-page__title">{{ textFor(page.title) }}</h1>

      <p v-for="(paragraph, index) in brandParagraphs" :key="`brand-${index}`" class="about-page__text">
        {{ textFor(paragraph) }}
      </p>

      <h2 class="about-page__subtitle">{{ textFor(dealerHeading) }}</h2>
      <p v-for="(paragraph, index) in dealerParagraphs" :key="`dealer-${index}`" class="about-page__text">
        {{ textFor(paragraph) }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InfoDefinition, LocalizedText } from '~/data/site'
import { dealerContact, t } from '~/data/dealer'
import { useSiteContent } from '~/composables/useSiteContent'

const props = defineProps<{
  page: InfoDefinition
}>()

const { textFor } = useSiteContent()

const brandParagraphs: LocalizedText[] = [
  t(
    'Voyah is a premium electric vehicle brand under Dongfeng Motor Corporation, dedicated to delivering innovative and sustainable mobility solutions. With a strong commitment to advanced technology and environmental responsibility, Voyah is redefining the future of luxury electric vehicles.',
    'Voyah est une marque de véhicules électriques haut de gamme rattachée à Dongfeng Motor Corporation, dédiée à des solutions de mobilité innovantes et durables. Par son engagement fort en faveur d’une technologie avancée et de la responsabilité environnementale, Voyah redéfinit l’avenir du véhicule électrique de luxe.',
    'فواه هي علامة سيارات كهربائية فاخرة تابعة لمجموعة دونغفنغ موتور، تكرّس عملها لتقديم حلول تنقل مبتكرة ومستدامة. والتزاماً قوياً بالتكنولوجيا المتقدمة والمسؤولية البيئية، تعيد فواه رسم مستقبل السيارة الكهربائية الفاخرة.'
  ),
  t(
    'Voyah offers two flagship models: the Voyah Free and the Voyah Dream. The Voyah Free is a high-performance electric SUV that combines cutting-edge design, intelligent features, and an extended driving range for a seamless and dynamic driving experience. The Voyah Dream is a premium electric MPV, designed for ultimate comfort and spaciousness, making it the perfect choice for both business and family travel.',
    'Voyah propose deux modèles phares : le Voyah Free et le Voyah Dream. Le Voyah Free est un SUV électrique haute performance qui réunit un design de pointe, des fonctions intelligentes et une autonomie étendue pour une expérience de conduite fluide et dynamique. Le Voyah Dream est un monospace électrique premium, pensé pour le confort et l’espace, et devient le choix idéal aussi bien pour les déplacements professionnels qu’en famille.',
    'تقدّم فواه طرازين رائدين: فواه فري وفواه دريم. فواه فري هي سيارة دفع رباعي كهربائية عالية الأداء تجمع بين تصميم متطور وميزات ذكية ومدى قيادة موسّع لتجربة قيادة سلسة وديناميكية. أما فواه دريم فهي سيارة عائلية كهربائية فاخرة صُمّمت لتوفير أقصى درجات الراحة والاتساع، فتكون الخيار الأمثل للتنقل المهني والعائلي معاً.'
  ),
  t(
    'Built on Dongfeng’s state-of-the-art Electric Smart Secure Architecture (ESSA), Voyah vehicles integrate the latest innovations in electric mobility, ensuring safety, efficiency, and a superior driving experience.',
    'Construits sur l’architecture Electric Smart Secure Architecture (ESSA) de Dongfeng, les véhicules Voyah intègrent les dernières innovations en matière de mobilité électrique et garantissent sécurité, efficacité et une expérience de conduite supérieure.',
    'استناداً إلى معمارية ESSA الآمنة والذكية للكهرباء من دونغفنغ، تضمّ سيارات فواه أحدث ابتكارات التنقل الكهربائي وتوفر السلامة والكفاءة وتجربة قيادة استثنائية.'
  )
]

const dealerHeading = t(
  `About ${dealerContact.partnerLabel}`,
  `À propos de ${dealerContact.partnerLabel}`,
  `عن ${dealerContact.partnerLabel}`
)

const dealerParagraphs: LocalizedText[] = [
  t(
    `${dealerContact.partnerLabel} is the official Voyah distributor in Tunisia. The team handles sales, financing advice and after-sales support, and welcomes customers at the ${textFor(dealerContact.address)}.`,
    `${dealerContact.partnerLabel} est le distributeur officiel de Voyah en Tunisie. L’équipe assure la vente, le conseil en financement et le service après-vente, et accueille les clients au ${textFor(dealerContact.address)}.`,
    `${dealerContact.partnerLabel} هي الموزّع الرسمي لعلامة فواه في تونس. يتكفّل فريقها بالبيع والنصح في التمويل وخدمة ما بعد البيع، ويستقبل العملاء في ${textFor(dealerContact.address)}.`
  ),
  t(
    'Every Voyah sold here is covered by the manufacturer warranty and maintained by technicians trained to the brand’s standards.',
    'Chaque Voyah vendue ici bénéficie de la garantie constructeur et est entretenue par des techniciens formés aux standards de la marque.',
    'كل سيارة فواه تُباع هنا مشمولة بضمان المصنّع ويعتني بها فنّيون مدرّبون وفق معايير العلامة.'
  )
]
</script>

<style scoped>
.about-page {
  background: var(--bg);
  color: var(--text);
}

.about-page__body {
  padding: clamp(48px, 6vw, 88px) 0 clamp(56px, 7vw, 104px);
  max-width: 1150px;
}

.about-page__title {
  margin: 0 0 20px;
  color: var(--text);
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 1.2;
}

.about-page__subtitle {
  margin: 40px 0 20px;
  color: var(--text);
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
}

.about-page__text {
  margin: 0 0 20px;
  color: var(--text);
  font-size: 1rem;
  line-height: 1.5;
}
</style>
