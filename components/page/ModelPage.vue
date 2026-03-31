<template>
  <div class="model-page">
    <PageHero
      :eyebrow="textFor(model.subtitle)"
      :title="textFor(model.title)"
      :summary="textFor(model.description)"
      :image="model.heroImage"
      :logo="model.logo"
    >
      <template #actions>
        <BaseButton :to="buildPath('book-drive.html')" variant="primary">
          {{ textFor(model.ctaPrimary) }}
        </BaseButton>
        <BaseButton :to="buildPath(model.secondarySlug)" variant="secondary">
          {{ textFor(model.ctaSecondary) }}
        </BaseButton>
      </template>
    </PageHero>

    <ModelChapterNav :sections="chapterLinks" />

    <section id="overview" ref="overviewRef" class="model-overview">
      <div class="container model-overview-grid">
        <div class="model-overview-copy" data-reveal>
          <p class="model-overview-kicker">{{ modelLabel('Vehicle overview', 'Vue d’ensemble du véhicule', 'نظرة عامة على المركبة') }}</p>
          <h2 class="model-overview-title">{{ textFor(model.title) }}</h2>
          <p class="model-overview-summary">{{ textFor(model.description) }}</p>
        </div>

        <aside class="model-overview-panel" data-reveal>
          <img :src="model.logo" :alt="textFor(model.title)" class="model-overview-logo" />
          <p class="model-overview-price">{{ textFor(model.price) }}</p>
          <p class="model-overview-note">
            {{ modelLabel(
              'A locally rendered model page built from bundled assets, localized content, and reusable Nuxt components.',
              'Une page modèle rendue localement à partir d’actifs embarqués, de contenus localisés et de composants Nuxt réutilisables.',
              'صفحة طراز معروضة محلياً بالاعتماد على أصول مدمجة ومحتوى مترجم ومكونات Nuxt قابلة لإعادة الاستخدام.'
            ) }}
          </p>
        </aside>
      </div>

      <div class="container" data-reveal>
        <MetricGrid :metrics="model.metrics" />
      </div>
    </section>

    <div ref="mediaRef">
      <ModelMediaSection
        v-for="(section, index) in gallerySections"
        :key="section.id"
        :index="index"
        :section="section"
      />
    </div>

    <section
      id="book-drive"
      ref="ctaRef"
      class="model-cta"
      :style="{ '--cta-image': `url(${gallery.at(-1) ?? model.heroImage})` }"
    >
      <div class="container model-cta-card" data-reveal>
        <p class="model-cta-kicker">{{ modelLabel('Continue the experience', 'Poursuivre l’expérience', 'واصل التجربة') }}</p>
        <h2>{{ modelLabel('Explore the full Voyah journey locally', 'Explorer l’expérience Voyah complète en local', 'استكشف رحلة Voyah الكاملة محلياً') }}</h2>
        <p>
          {{ modelLabel(
            'Move between the model page, booking flow, and store center with the same local asset base and translated content.',
            'Passez de la page modèle à la réservation puis au centre de magasins avec la même base d’actifs locaux et un contenu traduit.',
            'انتقل بين صفحة الطراز وحجز التجربة ومركز المعارض باستخدام نفس الأصول المحلية والمحتوى المترجم.'
          ) }}
        </p>

        <div class="button-row">
          <BaseButton :to="buildPath('book-drive.html')" variant="primary">
            {{ textFor(model.ctaPrimary) }}
          </BaseButton>
          <BaseButton :to="buildPath(model.secondarySlug)" variant="secondary">
            {{ textFor(model.ctaSecondary) }}
          </BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '~/components/common/BaseButton.vue'
import MetricGrid from '~/components/common/MetricGrid.vue'
import PageHero from '~/components/common/PageHero.vue'
import ModelChapterNav from '~/components/page/model/ModelChapterNav.vue'
import ModelMediaSection from '~/components/page/model/ModelMediaSection.vue'
import { getExpandedModelGallery } from '~/data/modelMedia'
import type { ModelDefinition } from '~/data/site'
import { useSectionReveal } from '~/composables/useSectionReveal'
import { useSiteContent } from '~/composables/useSiteContent'

const props = defineProps<{
  model: ModelDefinition
}>()

const { buildPath, locale, textFor } = useSiteContent()
const overviewRef = useSectionReveal({ stagger: 0.12 })
const mediaRef = useSectionReveal({ stagger: 0.14 })
const ctaRef = useSectionReveal()

const modelLabel = (en: string, fr: string, ar: string) => {
  if (locale.value.code === 'fr') {
    return fr
  }

  if (locale.value.code === 'ar') {
    return ar
  }

  return en
}

const gallery = computed(() => getExpandedModelGallery(props.model.slug, props.model.gallery))

const splitGallery = (images: string[]) => {
  if (images.length <= 2) {
    return [images]
  }

  const groupCount = Math.min(4, Math.max(3, Math.ceil(images.length / 2)))
  const groups: string[][] = []
  let cursor = 0

  for (let index = 0; index < groupCount; index += 1) {
    const remainingGroups = groupCount - index
    const remainingItems = images.length - cursor
    const size = Math.ceil(remainingItems / remainingGroups)
    groups.push(images.slice(cursor, cursor + size))
    cursor += size
  }

  return groups.filter((group) => group.length > 0)
}

const sectionBlueprints = computed(() => [
  {
    kicker: modelLabel('Chapter 01', 'Chapitre 01', 'الفصل 01'),
    title: modelLabel('Exterior character', 'Caractère extérieur', 'الطابع الخارجي'),
    summary: textFor(props.model.subtitle)
  },
  {
    kicker: modelLabel('Chapter 02', 'Chapitre 02', 'الفصل 02'),
    title: modelLabel('Cabin atmosphere', 'Atmosphère intérieure', 'أجواء المقصورة'),
    summary: modelLabel(
      'Material layering, proportion, and surface treatment define the premium cabin story across this page.',
      'La superposition des matières, les proportions et le traitement des surfaces définissent ici le récit de l’habitacle premium.',
      'تحدد طبقات المواد والتناسب ومعالجة الأسطح قصة المقصورة الفاخرة عبر هذه الصفحة.'
    )
  },
  {
    kicker: modelLabel('Chapter 03', 'Chapitre 03', 'الفصل 03'),
    title: modelLabel('Technology and comfort', 'Technologie et confort', 'التقنية والراحة'),
    summary: modelLabel(
      'Interactive interfaces, seating comfort, and digital touchpoints are expressed through the bundled local media set.',
      'Les interfaces interactives, le confort d’assise et les points de contact numériques sont exprimés à travers le jeu de médias locaux embarqués.',
      'يتم التعبير عن الواجهات التفاعلية وراحة المقاعد ونقاط الاتصال الرقمية من خلال مجموعة الوسائط المحلية المدمجة.'
    )
  },
  {
    kicker: modelLabel('Chapter 04', 'Chapitre 04', 'الفصل 04'),
    title: modelLabel('Performance and confidence', 'Performance et sérénité', 'الأداء والثقة'),
    summary: modelLabel(
      'The final sequence emphasizes stance, capability, and the composed presence expected from the Voyah lineup.',
      'La séquence finale met l’accent sur l’assise, les capacités et la prestance maîtrisée attendues de la gamme Voyah.',
      'يركز التسلسل الأخير على الثبات والقدرة والحضور الواثق المتوقع من مجموعة Voyah.'
    )
  }
])

const gallerySections = computed(() =>
  splitGallery(gallery.value).map((images, index) => {
    const blueprint = sectionBlueprints.value[Math.min(index, sectionBlueprints.value.length - 1)]

    return {
      id: `chapter-${index + 1}`,
      ...blueprint,
      images
    }
  })
)

const chapterLinks = computed(() => [
  { id: 'overview', label: modelLabel('Overview', 'Aperçu', 'نظرة عامة') },
  ...gallerySections.value.map((section) => ({ id: section.id, label: section.title })),
  { id: 'book-drive', label: modelLabel('Reserve', 'Réserver', 'احجز') }
])
</script>

<style scoped>
.model-page {
  background: #fff;
}

.model-overview {
  padding: 64px 0 44px;
  background: linear-gradient(180deg, #fff, #f7f3ee);
}

.model-overview-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
  gap: 28px;
  align-items: start;
  margin-bottom: 28px;
}

.model-overview-kicker,
.model-cta-kicker {
  margin: 0 0 12px;
  color: #8d6b43;
  font-size: 0.84rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.model-overview-title {
  margin: 0;
  color: #101720;
  font-size: clamp(2.1rem, 4vw, 4.2rem);
  line-height: 1;
}

.model-overview-summary,
.model-overview-note {
  margin: 18px 0 0;
  color: #53606d;
  line-height: 1.85;
}

.model-overview-panel {
  padding: 28px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.74);
  border: 1px solid rgba(16, 23, 32, 0.08);
  box-shadow: 0 24px 80px rgba(16, 23, 32, 0.08);
}

.model-overview-logo {
  width: min(220px, 70%);
}

.model-overview-price {
  margin: 22px 0 0;
  color: #101720;
  font-size: 1.3rem;
  font-weight: 600;
}

.model-cta {
  position: relative;
  overflow: hidden;
  padding: 84px 0;
  background:
    linear-gradient(180deg, rgba(5, 8, 12, 0.26), rgba(5, 8, 12, 0.9)),
    var(--cta-image) center / cover no-repeat;
}

.model-cta-card {
  padding: 36px;
  border-radius: 32px;
  background: rgba(9, 13, 18, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.24);
}

.model-cta-card h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3.2rem);
  line-height: 1.02;
}

.model-cta-card p:not(.model-cta-kicker) {
  margin: 18px 0 0;
  max-width: 700px;
  color: rgba(237, 242, 247, 0.78);
  line-height: 1.8;
}

.model-page :deep(.metric-grid) {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.model-page :deep(.metric-card) {
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid rgba(16, 23, 32, 0.08);
  box-shadow: 0 22px 60px rgba(16, 23, 32, 0.06);
}

.model-page :deep(.metric-value) {
  color: #0f1720;
}

.model-page :deep(.metric-label) {
  color: #5f6d7a;
}

@media (max-width: 1024px) {
  .model-overview-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (max-width: 768px) {
  .model-overview {
    padding: 44px 0 32px;
  }

  .model-cta {
    padding: 56px 0;
  }

  .model-cta-card {
    padding: 24px;
  }
}
</style>
