<template>
  <section class="home-news">
    <div class="container">
      <div class="home-news__header">
        <div>
          <p class="home-news__eyebrow">{{ textFor(eyebrow) }}</p>
          <h2 class="home-news__title">{{ textFor(title) }}</h2>
        </div>
        <NuxtLink :to="buildPath('news.html')" class="home-news__more">
          {{ textFor(moreLabel) }}
        </NuxtLink>
      </div>

      <div class="home-news__grid">
        <NuxtLink
          v-for="item in visibleItems"
          :key="item.id"
          :to="buildPath('news.html')"
          class="home-news__card"
        >
          <div class="home-news__media" :style="{ backgroundImage: `url('${item.image}')` }" />
          <div class="home-news__body">
            <div class="home-news__meta">
              <span class="home-news__category">{{ textFor(newsCategoryLabels[item.category]) }}</span>
              <span class="home-news__date">{{ formatDate(item.date) }}</span>
            </div>
            <h3>{{ textFor(item.title) }}</h3>
            <p>{{ textFor(item.excerpt) }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { newsCategoryLabels, newsItems } from '~/data/news'
import { t } from '~/data/dealer'
import { useSiteContent } from '~/composables/useSiteContent'

const { locale, buildPath, textFor } = useSiteContent()

const eyebrow = t('News', 'Actualités', 'الأخبار')
const title = t('Latest updates', 'Dernières actualités', 'آخر التحديثات')
const moreLabel = t('Learn more', 'En savoir plus', 'اعرف المزيد')

const visibleItems = computed(() => [...newsItems].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3))

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
  color: #111;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.8rem;
  border-bottom: 1px solid #111;
  padding-bottom: 4px;
}

.home-news__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.home-news__card {
  text-decoration: none;
  color: inherit;
  background: #f7f5f1;
  border: 1px solid #e8e3da;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.home-news__card:hover {
  transform: translateY(-4px);
}

.home-news__media {
  height: 220px;
  background-size: cover;
  background-position: center;
}

.home-news__body {
  padding: 20px;
  display: grid;
  gap: 10px;
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

.home-news__body h3 {
  margin: 0;
  font-size: 1.05rem;
  color: #111;
  line-height: 1.4;
}

.home-news__body p {
  margin: 0;
  color: #525252;
  font-size: 0.9rem;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .home-news__grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>