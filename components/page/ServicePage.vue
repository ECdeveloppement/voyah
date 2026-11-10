<template>
  <div class="service-page">
    <section ref="heroReveal" class="service-hero">
      <img class="service-hero__image" data-reveal src="/reference-models/service-customer-care.png" :alt="textFor(labels.title)" />
      <div class="service-hero__overlay">
        <h1 data-reveal>{{ textFor(labels.title) }}</h1>
      </div>
    </section>

    <section class="service-blocks">
      <article ref="careReveal" class="service-block">
        <div class="service-block__media" data-reveal>
          <img src="/reference-models/service-customer-care.png" :alt="textFor(labels.careTitle)" loading="lazy" />
        </div>
        <div class="service-block__content" data-reveal>
          <h2>{{ textFor(labels.careTitle) }}</h2>
          <p>{{ textFor(labels.careDesc) }}</p>
        </div>
      </article>

      <article ref="warrantyReveal" class="service-block service-block--reverse">
        <div class="service-block__media" data-reveal>
          <img src="/reference-models/service-warranty.png" :alt="textFor(labels.warrantyTitle)" loading="lazy" />
        </div>
        <div class="service-block__content" data-reveal>
          <h2>{{ textFor(labels.warrantyTitle) }}</h2>
          <p>{{ textFor(labels.warrantyDesc) }}</p>
        </div>
      </article>

      <article ref="partsReveal" class="service-block">
        <div class="service-block__media" data-reveal>
          <img src="/reference-models/service-genuine-parts.png" :alt="textFor(labels.partsTitle)" loading="lazy" />
        </div>
        <div class="service-block__content" data-reveal>
          <h2>{{ textFor(labels.partsTitle) }}</h2>
          <p>{{ textFor(labels.partsDesc) }}</p>
        </div>
      </article>
    </section>

    <div ref="contactReveal">
      <ContactPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import { t } from '~/data/dealer'
import ContactPage from '~/components/page/ContactPage.vue'
import { useSectionReveal } from '~/composables/useSectionReveal'
import { useSiteContent } from '~/composables/useSiteContent'

const { textFor } = useSiteContent()

const heroReveal = useSectionReveal({ y: 0, scale: 1.07, duration: 1.2, stagger: 0.25 })
const careReveal = useSectionReveal({ y: 30, stagger: 0.14 })
const warrantyReveal = useSectionReveal({ y: 30, stagger: 0.14 })
const partsReveal = useSectionReveal({ y: 30, stagger: 0.14 })
const contactReveal = useSectionReveal({ y: 24, duration: 0.8 })

const labels = {
  title: t('Voyah Service', 'Service Voyah', 'خدمات Voyah'),
  careTitle: t('Customer care', 'Relation client', 'خدمة العملاء'),
  careDesc: t(
    'We uphold the service tenets of Professionalism, Efficiency and Customer First. In compliance with relevant laws and regulations, we are committed to delivering comprehensive service support and premium experience, ensuring you drive with ease and confidence.',
    'Nous défendons les principes de professionnalisme, d’efficacité et de client d’abord. Conformément aux lois et réglementations applicables, nous nous engageons à fournir un accompagnement complet et une expérience premium, pour que vous rouliez en toute confiance.',
    'نلتزم بمبادئ الاحترافية والكفاءة وتقديم الأولوية للعميل. وامتثالاً للقوانين والأنظمة المعمول بها، نلتزم بتقديم دعم خدمي شامل وتجربة فاخرة، لضمان قيادة مريحة وواثقة.'
  ),
  warrantyTitle: t('Warranty', 'Garantie', 'الضمان'),
  warrantyDesc: t(
    'We ensure every new vehicle is produced in line with manufacturer’s specifications and undergoes rigorous pre-delivery inspection. We will offer long-period warranty services to the customers. Should any manufacturing defects occur during the warranty period, our authorized service networks will perform all necessary repairs free of charge for parts or labor.',
    'Nous veillons à ce que chaque véhicule neuf soit produit selon les spécifications du constructeur et soumis à une inspection rigoureuse avant livraison. Nous proposons des services de garantie longue durée. En cas de défaut de fabrication pendant la période de garantie, nos réseaux de service agréés effectuent toutes les réparations nécessaires gratuitement, pièces et main-d’œuvre incluses.',
    'نضمن أن كل مركبة جديدة تُنتج وفق مواصفات الشركة المصنعة وتخضع لفحص دقيق قبل التسليم. نقدم خدمات ضمان طويل المدى. في حال وجود أي عيب تصنيعي خلال فترة الضمان، ستقوم شبكات الخدمة المعتمدة لدينا بإجراء جميع الإصلاحات اللازمة مجاناً للقطع والعمالة.'
  ),
  partsTitle: t('Genuine parts', 'Pièces d’origine', 'قطع غيار أصلية'),
  partsDesc: t(
    'We maintain the vehicle’s original reliability, comfort and safety by providing a continuous supply of genuine parts. These parts fully comply with original equipment technical specifications and are the ideal choice for your vehicle maintenance.',
    'Nous préservons la fiabilité, le confort et la sécurité d’origine du véhicule en assurant un approvisionnement continu en pièces d’origine. Ces pièces respectent pleinement les spécifications techniques de l’équipement d’origine et constituent le choix idéal pour l’entretien de votre véhicule.',
    'نحافظ على موثوقية المركبة وراحتها وسلامتها الأصلية من خلال إمداد مستمر بقطع الغيار الأصلية. تتوافق هذه القطع تماماً مع مواصفات المعدات الأصلية وهي الخيار المثالي لصيانة مركبتك.'
  )
}
</script>

<style scoped>
.service-page {
  background: #fff;
  color: #1a1a1a;
}

.service-hero {
  position: relative;
  height: min(60vw, 520px);
  overflow: hidden;
}

.service-hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.service-hero__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
}

.service-hero__overlay h1 {
  margin: 0;
  color: #fff;
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.service-blocks {
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 24px;
  display: grid;
  gap: 48px;
}

.service-block {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 32px;
  align-items: center;
}

.service-block--reverse .service-block__media {
  order: 2;
}

.service-block__media {
  height: 320px;
  overflow: hidden;
}

.service-block img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.service-block__media:hover img,
.service-block__media:focus-within img {
  transform: scale(1.05);
}

.service-block__content h2 {
  margin: 0 0 16px;
  font-size: 1.6rem;
}

.service-block__content p {
  margin: 0;
  color: #525252;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .service-block {
    grid-template-columns: minmax(0, 1fr);
  }

  .service-block--reverse .service-block__media {
    order: 0;
  }
}
</style>