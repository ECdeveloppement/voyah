<template>
  <section class="home-news">
    <div class="container">
      <div class="home-news__header">
        <div>
          <p class="home-news__eyebrow">{{ textFor(eyebrow) }}</p>
          <h2 class="home-news__title">{{ textFor(title) }}</h2>
        </div>
        <span class="home-news__more home-news__more--static">
          {{ textFor(moreLabel) }}
        </span>
      </div>

      <!-- Toutes les actualités partagent le même gabarit : visuel à gauche, texte en face. -->
      <div class="home-news__grid">
        <NuxtLink
          v-for="(item, index) in items"
          :key="item.id"
          :to="articlePath(item)"
          class="home-news__card"
        >
          <div class="home-news__media" :style="{ backgroundImage: `url('${item.image}')` }">
            <span v-if="index === 0" class="home-news__play" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            </span>
          </div>
          <div class="home-news__body">
            <div class="home-news__meta">
              <span class="home-news__category">{{ textFor(newsCategoryLabels[item.category]) }}</span>
              <span class="home-news__date">{{ formatDate(item.date) }}</span>
            </div>
            <h3>{{ textFor(item.title) }}</h3>
            <p>{{ textFor(item.excerpt) }}</p>
            <span class="home-news__link">{{ textFor(readLabel) }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { newsCategoryLabels, sortedNewsItems, type NewsItem } from '~/data/news'
import { t } from '~/data/dealer'
import { useSiteContent } from '~/composables/useSiteContent'

const { locale, buildPath, textFor } = useSiteContent()

const eyebrow = t('News', 'Actualités', 'الأخبار')
const title = t('Latest updates', 'Dernières actualités', 'آخر التحديثات')
const moreLabel = t('Learn more', 'En savoir plus', 'اعرف المزيد')
const readLabel = t('Read the article', 'Lire l’article', 'اقرأ المقال')

/** Trois actualités, toutes présentées en carte horizontale (visuel à gauche, texte à droite). */
const items = computed(() => sortedNewsItems().slice(0, 3))

const articlePath = (item: NewsItem) =>
  buildPath(item.page ?? 'news.html')

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat(locale.value.code, { day: 'numeric', month: 'short', year: 'numeric' }).format(
    new Date(`${iso}T00:00:00`)
  )
</script>

<style scoped>
.home-news {
  background: #fff;
  padding: 72px 0;
}

.container {
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto;
}

.home-news__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;
}

.home-news__eyebrow {
  margin: 0 0 8px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.78rem;
  color: #85b4d9;
}

.home-news__title {
  margin: 0;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  color: #111;
}

.home-news__more {
  text-decoration: none;
  cursor: pointer;
  color: #111;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.8rem;
  border-bottom: 1px solid #111;
  padding-bottom: 4px;
}

.home-news__more--static {
  cursor: default;
}

/* ---------- Cartes horizontales : visuel à gauche, texte en face ---------- */
.home-news__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 24px;
}

.home-news__card {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  background: #f7f5f1;
  border: 1px solid #e8e3da;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;
}

.home-news__card:hover {
  transform: translateY(-4px);
}

@media (min-width: 900px) {
  .home-news__card {
    grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
  }
}

.home-news__media {
  position: relative;
  min-height: 280px;
  background-size: cover;
  background-position: center;
}

.home-news__play {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-news__play svg {
  width: 64px;
  height: 64px;
  padding: 18px;
  border-radius: 50%;
  background: rgb(0 0 0 / 0.55);
  color: #fff;
  transition: background 0.3s ease, transform 0.3s ease;
}

.home-news__card:hover .home-news__play svg {
  background: #85b4d9;
  transform: scale(1.08);
}

.home-news__body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  padding: 28px;
}

.home-news__body h3 {
  margin: 0;
  font-size: clamp(1.2rem, 2vw, 1.6rem);
  color: #111;
  line-height: 1.35;
}

.home-news__body p {
  margin: 0;
  color: #525252;
  font-size: 0.95rem;
  line-height: 1.7;
}

.home-news__meta {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.home-news__category {
  color: #85b4d9;
}

.home-news__date {
  color: #727272;
}

.home-news__link {
  margin-top: 8px;
  color: #111;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.78rem;
  border-bottom: 1px solid #111;
  padding-bottom: 4px;
  align-self: flex-start;
}
</style>
