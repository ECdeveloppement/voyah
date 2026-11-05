<template>
  <div class="news-page">
    <PageHero
      :eyebrow="textFor(page.eyebrow)"
      :title="textFor(page.title)"
      :summary="textFor(page.summary)"
      :image="page.heroImage"
      align="start"
      compact
    />

    <nav class="news-filters" :aria-label="textFor(labels.news)">
      <div class="container">
        <ul>
          <li
            v-for="tab in tabs"
            :key="tab.id"
            :class="['news-filter', { active: activeCategory === tab.id }]"
            @click="selectCategory(tab.id)"
          >
            {{ tab.label }}
          </li>
        </ul>
      </div>
    </nav>

    <section class="news-list-section">
      <div class="container">
        <p v-if="!filtered.length" class="news-empty">{{ textFor(labels.empty) }}</p>

        <div v-else class="news-grid">
          <article
            v-for="(item, index) in visibleItems"
            :key="item.id"
            :class="['news-card', { featured: index === 0 }]"
          >
            <div
              :class="['news-card-media', { small: index !== 0 }]"
              :style="{ backgroundImage: `url('${item.image}')` }"
              role="img"
              :aria-label="textFor(item.title)"
            />

            <div class="news-card-content">
              <div class="news-meta">
                <span class="category">{{ textFor(newsCategoryLabels[item.category]) }}</span>
                <span class="date">{{ formatDate(item.date) }}</span>
              </div>

              <h3>{{ textFor(item.title) }}</h3>
              <p v-if="index === 0">{{ textFor(item.excerpt) }}</p>

              <a
                v-if="item.url.trim()"
                :href="item.url"
                target="_blank"
                rel="noopener noreferrer"
                class="read-more"
              >
                {{ textFor(labels.readMore) }}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </article>
        </div>

        <div v-if="filtered.length > visibleCount" class="load-more-container">
          <button type="button" class="btn-load-more" @click="showMore">
            {{ textFor(labels.loadMore) }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import PageHero from '~/components/common/PageHero.vue'
import type { InfoDefinition } from '~/data/site'
import { newsCategoryLabels, newsItems, type NewsCategory } from '~/data/news'
import { t } from '~/data/dealer'
import { useSiteContent } from '~/composables/useSiteContent'

defineProps<{ page: InfoDefinition }>()

const { locale, textFor } = useSiteContent()

const PAGE_SIZE = 4

const labels = {
  news: t('News', 'Actualités', 'الأخبار'),
  all: t('All news', 'Toutes les actualités', 'كل الأخبار'),
  empty: t(
    'No news published yet. Check back soon.',
    'Aucune actualité publiée pour le moment. Revenez bientôt.',
    'لا توجد أخبار منشورة بعد. تابعنا قريباً.'
  ),
  readMore: t('Read full release', 'Lire le communiqué', 'قراءة البيان كاملاً'),
  loadMore: t('Load more', 'Voir plus', 'عرض المزيد')
}

const activeCategory = ref<'all' | NewsCategory>('all')
const visibleCount = ref(PAGE_SIZE)

const tabs = computed(() => [
  { id: 'all' as const, label: textFor(labels.all) },
  ...(Object.keys(newsCategoryLabels) as NewsCategory[]).map((id) => ({
    id,
    label: textFor(newsCategoryLabels[id])
  }))
])

const filtered = computed(() => {
  const items =
    activeCategory.value === 'all'
      ? [...newsItems]
      : newsItems.filter((item) => item.category === activeCategory.value)

  return items.sort((a, b) => b.date.localeCompare(a.date))
})

const visibleItems = computed(() => filtered.value.slice(0, visibleCount.value))

const selectCategory = (id: 'all' | NewsCategory) => {
  activeCategory.value = id
  visibleCount.value = PAGE_SIZE
}

const showMore = () => {
  visibleCount.value += PAGE_SIZE
}

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat(locale.value.code, { day: 'numeric', month: 'short', year: 'numeric' }).format(
    new Date(`${iso}T00:00:00`)
  )
</script>

<style scoped>
.news-page {
  background: var(--bg);
  color: var(--text);
}

.news-filters {
  background: var(--bg);
  border-bottom: 1px solid var(--line);
}

.news-filters ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 32px;
}

.news-filter {
  padding: 20px 0;
  color: var(--text-soft);
  letter-spacing: 0.12em;
  cursor: pointer;
  position: relative;
  text-transform: uppercase;
  font-size: 0.82rem;
  transition: color 0.3s ease;
}

.news-filter:hover,
.news-filter.active {
  color: var(--heading);
}

.news-filter.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: #85b4d9;
}

.news-list-section {
  padding: 64px 0 88px;
}

.news-empty {
  color: var(--text-soft);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.86rem;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.news-card {
  background: var(--panel);
  border: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.4s ease;
}

.news-card:hover {
  transform: translateY(-4px);
  border-color: #d7dde5;
}

.news-card.featured {
  grid-column: span 3;
  flex-direction: row;
}

.news-card-media {
  background-size: cover;
  background-position: center;
  flex: 1;
  min-height: 240px;
}

.news-card-media.small {
  min-height: 200px;
}

.news-card.featured .news-card-media {
  flex: 2;
  min-height: 380px;
}

.news-card-content {
  padding: 32px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
}

.news-meta {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
}

.news-meta .category {
  color: var(--heading);
}

.news-meta .date {
  color: var(--text-soft);
}

.news-card h3 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.35;
  color: var(--heading);
}

.news-card.featured h3 {
  font-size: clamp(1.5rem, 2.4vw, 2.1rem);
}

.news-card p {
  margin: 0;
  color: var(--text-soft);
  line-height: 1.7;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--heading);
  text-decoration: none;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 0.78rem;
  margin-top: 8px;
}

.read-more svg {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.read-more:hover svg {
  transform: translateX(4px);
}

.load-more-container {
  display: flex;
  justify-content: center;
  margin-top: 48px;
}

.btn-load-more {
  background: transparent;
  border: 1px solid var(--line);
  border-radius: 9999px;
  color: var(--heading);
  padding: 13px 34px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 0.8rem;
  cursor: pointer;
  transition:
    background 0.3s ease,
    color 0.3s ease;
}

.btn-load-more:hover {
  background: #000;
  color: #fff;
}

@media (max-width: 991px) {
  .news-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .news-card.featured {
    grid-column: span 1;
    flex-direction: column;
  }

  .news-card.featured .news-card-media {
    min-height: 280px;
  }
}
</style>
