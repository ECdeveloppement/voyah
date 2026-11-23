<template>
  <div class="news-article">
    <!-- Hero : vidéo en arrière-plan (ou visuel de l'article), même gabarit que les pages modèles -->
    <section class="article-hero">
      <img class="article-hero__poster" :src="item.image" :alt="textFor(item.title)" />
      <iframe
        v-if="item.video"
        class="article-hero__video"
        :src="item.video"
        title=""
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <span class="article-hero__scrim article-hero__scrim--top" aria-hidden="true"></span>
      <span class="article-hero__scrim article-hero__scrim--bottom" aria-hidden="true"></span>

      <div class="article-hero__overlay">
        <div class="article-hero__head">
          <img class="article-hero__logo" src="/assets/qatar/icons/voyah_logo.svg" alt="VOYAH" />
          <p class="article-hero__meta">
            <span class="article-hero__category">{{ textFor(newsCategoryLabels[item.category]) }}</span>
            <span class="article-hero__sep" aria-hidden="true">/</span>
            <span class="article-hero__date">{{ formatDate(item.date) }}</span>
          </p>
          <h1 class="article-hero__title">{{ textFor(item.title) }}</h1>
          <p class="article-hero__excerpt">{{ textFor(item.excerpt) }}</p>
        </div>
      </div>
    </section>

    <!-- Corps de l'article -->
    <article class="article-body">
      <div class="container">
        <div
          v-for="(block, index) in item.body ?? []"
          :key="index"
          :class="[
            'article-block',
            { 'article-block--lead': index === 0 && block.variant !== 'quote' },
            { 'article-block--quote': block.variant === 'quote' }
          ]"
        >
          <template v-if="block.variant === 'quote'">
            <blockquote class="article-quote">
              <p>{{ textFor(block.text) }}</p>
            </blockquote>
          </template>
          <template v-else>
            <h2 v-if="block.heading && textFor(block.heading)" class="article-block__heading">
              {{ textFor(block.heading) }}
            </h2>
            <ul v-if="isList(block.text)" class="article-list">
              <li v-for="(line, lineIndex) in listLines(block.text)" :key="lineIndex">{{ line }}</li>
            </ul>
            <p v-else class="article-block__text">{{ textFor(block.text) }}</p>
          </template>
        </div>
      </div>
    </article>

    <!-- Galerie : même carrousel « Studio Gallery » que la page VOYAH FREE -->
    <NewsGallery
      v-if="galleryImages.length"
      :eyebrow="labels.galleryEyebrow"
      :title="labels.gallery"
      :description="labels.galleryDescription"
      :images="galleryImages"
    />

    <!-- Bandeau CTA, comme en fin de page modèle -->
    <section class="article-cta">
      <div class="container article-cta__inner">
        <span class="article-cta__eyebrow">{{ textFor(labels.ctaEyebrow) }}</span>
        <h2 class="article-cta__title">{{ textFor(labels.ctaTitle) }}</h2>
        <div class="article-cta__actions">
          <NuxtLink :to="buildPath('Free')" class="base-button primary">
            {{ textFor(modelDisplayName['Free']) }}
          </NuxtLink>
          <NuxtLink :to="buildPath('Courage')" class="base-button secondary">
            {{ textFor(modelDisplayName['Courage']) }}
          </NuxtLink>
          <NuxtLink :to="buildPath('devis')" class="base-button secondary">
            {{ textFor(labels.quote) }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { modelDisplayName, t, type Localized } from '~/data/dealer'
import { newsCategoryLabels, type NewsItem } from '~/data/news'
import NewsGallery from '~/components/brand/NewsGallery.vue'
import { useSiteContent } from '~/composables/useSiteContent'

const props = defineProps<{ item: NewsItem }>()

const { locale, buildPath, textFor } = useSiteContent()

const galleryImages = computed(() =>
  (props.item.gallery ?? []).map((src, index) => ({
    src,
    title: props.item.galleryCaptions?.[index] ?? props.item.title
  }))
)

const labels = {
  gallery: t('Gallery', 'Galerie', 'المعرض'),
  galleryEyebrow: t('In pictures', 'En images', 'بالصور'),
  galleryDescription: t(
    'Discover the news in pictures.',
    'Découvrez l’actualité en images.',
    'اكتشف الخبر بالصور.'
  ),
  ctaEyebrow: t('VOYAH range', 'Gamme VOYAH', 'تشكيلة فوياه'),
  ctaTitle: t(
    'Discover the VOYAH range',
    'Découvrez la gamme VOYAH',
    'اكتشف تشكيلة فوياه'
  ),
  quote: t('Request a quote', 'Demander un devis', 'اطلب عرض سعر')
}

const isList = (text: Localized) => {
  const fr = text.fr || text.en
  const lines = fr.split('\n').map((line) => line.trim()).filter(Boolean)
  return lines.length > 0 && lines.every((line) => line.startsWith('•'))
}

const listLines = (text: Localized) =>
  (text.fr || text.en)
    .split('\n')
    .map((line) => line.trim().replace(/^•\s*/, ''))
    .filter(Boolean)

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat(locale.value.code, { day: 'numeric', month: 'long', year: 'numeric' }).format(
    new Date(`${iso}T00:00:00`)
  )
</script>

<style scoped>
.news-article {
  background: var(--bg);
  color: var(--text);
}

/* ---------- Hero (gabarit page modèle) ---------- */
.article-hero {
  position: relative;
  height: 520px;
  overflow: hidden;
  background: #18181b;
}

@media (min-width: 1024px) {
  .article-hero {
    height: 640px;
  }
}

@media (min-width: 1280px) {
  .article-hero {
    height: calc(100vh - 94px);
  }
}

.article-hero__poster,
.article-hero__video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-hero__video {
  border: 0;
}

.article-hero__scrim {
  position: absolute;
  left: 0;
  right: 0;
  height: 240px;
  pointer-events: none;
}

@media (min-width: 1024px) {
  .article-hero__scrim {
    height: 150px;
  }
}

.article-hero__scrim--top {
  top: 0;
  background: linear-gradient(180deg, rgb(24 24 27 / 0.9), rgb(24 24 27 / 0));
}

.article-hero__scrim--bottom {
  bottom: 0;
  background: linear-gradient(180deg, rgb(24 24 27 / 0), rgb(24 24 27 / 0.9));
}

.article-hero__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 112px 16px 32px;
}

@media (min-width: 768px) {
  .article-hero__overlay {
    padding: 128px 40px 40px;
  }
}

.article-hero__head {
  max-width: 900px;
}

.article-hero__logo {
  height: 20px;
  width: auto;
  margin-bottom: 20px;
  filter: brightness(0) invert(1);
}

@media (min-width: 1024px) {
  .article-hero__logo {
    height: 28px;
  }
}

.article-hero__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin: 0 0 18px;
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.article-hero__category {
  color: #85b4d9;
  font-weight: 700;
}

.article-hero__sep {
  color: rgb(255 255 255 / 0.5);
}

.article-hero__date {
  color: rgb(255 255 255 / 0.75);
}

.article-hero__title {
  margin: 0;
  color: #fff;
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.15;
  text-wrap: balance;
}

.article-hero__excerpt {
  margin: 18px 0 0;
  max-width: 640px;
  color: rgb(255 255 255 / 0.85);
  font-size: clamp(0.95rem, 1.4vw, 1.125rem);
  line-height: 1.7;
}

/* ---------- Corps éditorial ---------- */
.article-body {
  padding: 80px 0 96px;
  background: #fff;
}

.container {
  width: min(780px, calc(100% - 48px));
  margin: 0 auto;
}

.article-block + .article-block {
  margin-top: 48px;
}

.article-block__heading {
  position: relative;
  margin: 0 0 20px;
  padding-bottom: 14px;
  color: var(--heading, #111);
  font-size: clamp(1.35rem, 2.6vw, 1.9rem);
  font-weight: 700;
  line-height: 1.3;
}

.article-block__heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 56px;
  height: 3px;
  background: #85b4d9;
}

.article-block__text {
  margin: 0;
  color: #3f3f46;
  font-size: 1.075rem;
  line-height: 1.9;
  white-space: pre-line;
}

/* Chapeau : premier paragraphe plus grand */
.article-block--lead .article-block__text {
  color: var(--heading, #111);
  font-size: clamp(1.15rem, 2vw, 1.3rem);
  line-height: 1.75;
}

/* Citation */
.article-block--quote {
  margin-top: 56px;
}

.article-quote {
  position: relative;
  margin: 0;
  padding: 36px 40px;
  background: #f7f5f1;
  border-inline-start: 4px solid #85b4d9;
}

.article-quote p {
  margin: 0;
  color: var(--heading, #111);
  font-size: clamp(1.15rem, 2vw, 1.35rem);
  font-style: italic;
  line-height: 1.7;
}

@media (max-width: 640px) {
  .article-quote {
    padding: 24px 20px;
  }
}

/* Listes à puces */
.article-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 14px;
}

.article-list li {
  position: relative;
  padding-inline-start: 22px;
  color: #3f3f46;
  font-size: 1.05rem;
  line-height: 1.7;
}

.article-list li::before {
  content: '';
  position: absolute;
  inset-inline-start: 0;
  top: 0.72em;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #85b4d9;
}

/* ---------- CTA ---------- */
.article-cta {
  padding: 88px 0;
  background: #f7f5f1;
  text-align: center;
}

.article-cta__eyebrow {
  display: inline-block;
  margin-bottom: 14px;
  color: #85b4d9;
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.article-cta__title {
  margin: 0 0 32px;
  font-size: clamp(1.6rem, 3.4vw, 2.4rem);
  color: var(--heading, #111);
}

.article-cta__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

/* Les boutons secondary du site sont pensés pour fond sombre : on les met en version claire ici. */
.article-cta__actions :deep(.base-button.secondary) {
  border-color: #0a0f17;
  color: #0a0f17;
}

.article-cta__actions :deep(.base-button.secondary:hover) {
  background: #0a0f17;
  border-color: #0a0f17;
  color: #ffffff;
}
</style>
