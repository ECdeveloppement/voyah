<template>
  <div :class="['model-page', `model-page--${model.slug.replace('.html', '')}`]">
    <PageHero
      :eyebrow="textFor(model.subtitle)"
      :title="textFor(model.title)"
      :summary="textFor(model.description)"
      :image="model.heroImage"
      :video="model.heroVideo"
      :logo="model.heroLogo ?? model.logo"
      :variant="heroVariant"
    >
      <template #actions>
        <BaseButton :to="buildPath('book-drive.html')" variant="primary">
          {{ textFor(model.ctaPrimary) }}
        </BaseButton>
        <BaseButton :to="buildPath(model.secondarySlug)" variant="secondary">
          {{ textFor(model.ctaSecondary) }}
        </BaseButton>
      </template>
      <template #meta>
        <aside class="model-hero-meta">
          <p class="model-hero-price">{{ textFor(model.price) }}</p>
          <div class="model-hero-features">
            <span v-for="feature in model.features.slice(0, 3)" :key="textFor(feature.title)">
              {{ textFor(feature.title) }}
            </span>
          </div>
        </aside>
      </template>
    </PageHero>

    <ModelChapterNav :sections="chapterLinks" :variant="model.slug.replace('.html', '')" />

    <div>
      <ModelMediaSection
        v-for="(section, index) in renderedSections"
        :key="section.id"
        :index="index"
        :section="section"
        :model-slug="model.slug"
      />
    </div>

  </div>
</template>

<script setup lang="ts">
import BaseButton from '~/components/common/BaseButton.vue'
import PageHero from '~/components/common/PageHero.vue'
import ModelChapterNav from '~/components/page/model/ModelChapterNav.vue'
import ModelMediaSection from '~/components/page/model/ModelMediaSection.vue'
import { getExpandedModelGallery, getModelStorySections } from '~/data/modelMedia'
import type { ModelDefinition } from '~/data/site'
import { useSiteContent } from '~/composables/useSiteContent'

const props = defineProps<{
  model: ModelDefinition
}>()

const { buildPath, textFor } = useSiteContent()

const heroVariant = computed(() => {
  const base = props.model.slug.replace('.html', '')
  return base === 'free+' ? 'freeplus' : base
})

const gallery = computed(() => getExpandedModelGallery(props.model.slug, props.model.gallery))
const authoredStorySections = computed(() => getModelStorySections(props.model.slug))

type RenderedSection = {
  id: string
  kind: 'image' | 'carousel' | 'banner'
  kicker?: string
  title: string
  summary?: string
  image?: string
  images: string[]
  videos?: string[]
  details: Array<{ title: string; summary: string }>
  slides?: Array<{ image: string; title: string; summary: string; video?: string }>
}

const splitClauses = (value: string) =>
  value
    .split(/[。.!?？；;，,]\s*/u)
    .map((part) => part.trim())
    .filter((part) => part.length > 0)

const buildDetails = (sectionTitle: string, sectionSummary: string | undefined, index: number) => {
  const features = props.model.features

  const summaryParts = splitClauses(sectionSummary ?? '')
  const details: Array<{ title: string; summary: string }> = []

  if (sectionSummary) {
    details.push({
      title: sectionTitle,
      summary: sectionSummary
    })
  }

  if (summaryParts.length > 1) {
    details.push({
      title: summaryParts[1].slice(0, 24),
      summary: summaryParts[1]
    })
  }

  if (summaryParts.length > 2) {
    details.push({
      title: summaryParts[2].slice(0, 24),
      summary: summaryParts[2]
    })
  }

  if (details.length >= 3) {
    return details.slice(0, 3)
  }

  if (!features.length) {
    return []
  }

  const fallback = [0, 1, 2].map((offset) => {
    const feature = features[(index + offset) % features.length]

    return {
      title: textFor(feature.title),
      summary: textFor(feature.body)
    }
  })

  return [...details, ...fallback].slice(0, 3)
}

const inferKind = (section: { images: string[]; videos?: string[] }): RenderedSection['kind'] => {
  if ((section.videos?.length ?? 0) > 0 || section.images.length >= 4) {
    return 'carousel'
  }

  if (section.images.length <= 1) {
    return 'banner'
  }

  return 'image'
}

const renderedSections = computed<RenderedSection[]>(() => {
  const sourceSections = authoredStorySections.value?.length
    ? authoredStorySections.value.map((section, index) => {
        const kind = inferKind(section)

        return {
          id: section.id,
          kicker: section.kicker ? textFor(section.kicker) : undefined,
          title: textFor(section.title),
          summary: textFor(section.summary),
          image: section.images[0] ?? gallery.value[index] ?? props.model.heroImage,
          images: section.images,
          videos: section.videos,
          details: buildDetails(textFor(section.title), textFor(section.summary), index),
          kind
        }
      })
    : gallery.value.map((image, index) => ({
        id: `chapter-${index + 1}`,
        kicker: undefined,
        title:
          index === 0
            ? textFor(props.model.title)
            : textFor(props.model.features[index % Math.max(props.model.features.length, 1)]?.title ?? props.model.title),
        summary:
          index === 0
            ? textFor(props.model.description)
            : textFor(props.model.features[index % Math.max(props.model.features.length, 1)]?.body ?? props.model.description),
        image,
        images: [image],
        videos: undefined,
        details: buildDetails(
          index === 0 ? textFor(props.model.title) : textFor(props.model.features[index % Math.max(props.model.features.length, 1)]?.title ?? props.model.title),
          index === 0
            ? textFor(props.model.description)
            : textFor(props.model.features[index % Math.max(props.model.features.length, 1)]?.body ?? props.model.description),
          index
        ),
        kind: index === 3 ? 'banner' : 'image'
      }))

  const output: RenderedSection[] = []

  sourceSections.forEach((section) => {
    output.push({
      ...section,
      details: section.details.slice(0, 3),
      slides:
        section.kind === 'carousel'
          ? (section.images.length ? section.images : [section.image ?? props.model.heroImage]).map((image, slideIndex) => ({
              image,
              video: slideIndex === 0 ? section.videos?.[0] : undefined,
              title: section.details[slideIndex % section.details.length]?.title ?? section.title,
              summary: section.details[slideIndex % section.details.length]?.summary ?? section.summary ?? ''
            }))
          : undefined
    })
  })

  return output
})

const chapterLinks = computed(() => [
  ...renderedSections.value.map((section) => ({ id: section.id, label: section.title }))
])
</script>

<style scoped>
.model-page {
  background: #fff;
}

.model-page :deep(.page-hero) {
  min-height: 88vh;
}

.model-page :deep(.page-hero-content) {
  padding: 118px 0 52px;
}

.model-page :deep(.page-hero-shell) {
  grid-template-columns: minmax(0, 1.14fr) minmax(300px, 0.86fr);
  gap: 30px;
  align-items: end;
}

.model-page :deep(.page-hero-copy) {
  max-width: 780px;
}

.model-page :deep(.page-hero-meta) {
  justify-self: end;
  align-self: end;
  width: min(360px, 100%);
}

.model-page :deep(.page-logo) {
  width: min(320px, 56vw);
  margin-bottom: 16px;
}

.model-page :deep(.eyebrow) {
  margin-bottom: 12px;
  color: rgba(255, 255, 255, 0.78);
  letter-spacing: 0.16em;
}

.model-page :deep(.page-title) {
  font-size: clamp(2.6rem, 5vw, 5.4rem);
  line-height: 0.96;
}

.model-page :deep(.page-summary) {
  max-width: 620px;
  margin-top: 16px;
  color: rgba(236, 242, 247, 0.84);
  line-height: 1.78;
}

.model-page :deep(.page-hero-meta .model-hero-meta) {
  padding: 20px 22px;
  background: rgba(12, 18, 25, 0.42);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(20px);
}

.model-page :deep(.page-hero-meta .model-hero-price) {
  font-size: 1rem;
}

.model-page :deep(.page-hero-meta .model-hero-features span) {
  font-size: 0.84rem;
}

.model-page :deep(.page-hero-actions) {
  margin-top: 28px;
  gap: 12px;
}

.model-page :deep(.page-hero-actions .base-button) {
  min-width: 168px;
  min-height: 46px;
  font-size: 0.92rem;
}

.model-page :deep(.page-hero-actions .base-button.primary) {
  background: rgba(255, 255, 255, 0.94);
  border-color: rgba(255, 255, 255, 0.94);
  color: #101720;
}

.model-page :deep(.page-hero-actions .base-button.primary:hover) {
  background: #ffffff;
  border-color: #ffffff;
}

.model-page :deep(.page-hero-actions .base-button.secondary) {
  border-color: rgba(255, 255, 255, 0.36);
  background: transparent;
  color: #fff;
}

.model-page :deep(.page-hero-actions .base-button.secondary:hover) {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.52);
}

.model-hero-meta {
  display: grid;
  gap: 16px;
  padding: 22px 24px;
  background: rgba(12, 18, 25, 0.34);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(18px);
}

.model-hero-price {
  margin: 0;
  color: rgba(255, 255, 255, 0.94);
  font-size: 1.08rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.model-hero-features {
  display: grid;
  gap: 10px;
}

.model-hero-features span {
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(235, 242, 247, 0.82);
  font-size: 0.9rem;
  line-height: 1.45;
}

.model-page :deep(.page-hero-overlay) {
  background:
    linear-gradient(180deg, rgba(5, 8, 12, 0.08), rgba(5, 8, 12, 0.72)),
    linear-gradient(90deg, rgba(5, 8, 12, 0.56), rgba(5, 8, 12, 0.14) 46%, rgba(5, 8, 12, 0.28));
}

.model-overview {
  padding: 76px 0 56px;
  background: linear-gradient(180deg, #fff, #f7f4ef);
}

.model-overview-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
  gap: 34px;
  align-items: start;
  margin-bottom: 36px;
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
  font-size: clamp(2.2rem, 3.9vw, 4.2rem);
  line-height: 1;
}

.model-overview-summary,
.model-overview-note {
  margin: 18px 0 0;
  color: #53606d;
  line-height: 1.85;
}

.model-overview-highlights {
  list-style: none;
  margin: 28px 0 0;
  padding: 0;
  display: grid;
  gap: 12px;
}

.model-overview-highlights li {
  padding-top: 12px;
  border-top: 1px solid rgba(16, 23, 32, 0.08);
  color: #101720;
  font-size: 0.98rem;
  letter-spacing: 0.02em;
}

.model-overview-panel {
  padding: 36px;
  border-radius: 0;
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(16, 23, 32, 0.08);
  box-shadow: 0 0 0 rgba(16, 23, 32, 0);
  will-change: transform;
  transition:
    border-color 0.34s cubic-bezier(0.22, 1, 0.36, 1),
    background-color 0.34s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.34s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.34s cubic-bezier(0.22, 1, 0.36, 1);
}

.model-overview-panel:hover {
  border-color: rgba(16, 23, 32, 0.16);
  background: rgba(255, 255, 255, 0.93);
  transform: translateY(-2px);
  box-shadow: 0 18px 38px -30px rgba(16, 23, 32, 0.28);
}

.model-overview-logo {
  width: min(240px, 72%);
}

.model-overview-price {
  margin: 22px 0 0;
  color: #101720;
  font-size: 1.22rem;
  font-weight: 600;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(16, 23, 32, 0.08);
}

.model-overview-actions {
  margin-top: 20px;
}

.model-overview-actions :deep(.base-button) {
  min-width: 168px;
}

.model-overview-tags {
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.model-overview-tags span {
  padding: 8px 12px;
  border: 1px solid rgba(16, 23, 32, 0.1);
  color: #2f3943;
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  will-change: transform;
  transition:
    border-color 0.34s cubic-bezier(0.22, 1, 0.36, 1),
    background-color 0.34s cubic-bezier(0.22, 1, 0.36, 1),
    color 0.34s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.34s cubic-bezier(0.22, 1, 0.36, 1);
}

.model-overview-tags span:hover {
  border-color: rgba(16, 23, 32, 0.22);
  background-color: rgba(16, 23, 32, 0.04);
  color: #101720;
  transform: translateY(-1px);
}

.model-cta {
  position: relative;
  overflow: hidden;
  padding: 104px 0;
  background:
    linear-gradient(180deg, rgba(5, 8, 12, 0.26), rgba(5, 8, 12, 0.9)),
    var(--cta-image) center / cover no-repeat;
}

.model-cta-card {
  padding: 46px;
  border-radius: 0;
  background: rgba(9, 13, 18, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: none;
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
  box-shadow: none;
  border-radius: 0;
}

.model-page :deep(.metric-value) {
  color: #0f1720;
}

.model-page :deep(.metric-label) {
  color: #5f6d7a;
}


@media (max-width: 1024px) {
  .model-page :deep(.page-hero) {
    min-height: 78vh;
  }

  .model-page :deep(.page-hero-shell) {
    grid-template-columns: minmax(0, 1fr);
  }

  .model-page :deep(.page-hero-meta) {
    justify-self: start;
    width: min(420px, 100%);
  }

  .model-overview-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (max-width: 768px) {
  .model-page :deep(.page-hero-content) {
    padding: 108px 0 42px;
  }

  .model-page :deep(.page-logo) {
    width: min(250px, 70vw);
  }

  .model-page :deep(.page-title) {
    font-size: clamp(2.1rem, 9vw, 3.3rem);
  }

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
