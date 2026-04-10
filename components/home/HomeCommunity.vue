<template>
  <section ref="sectionRef" class="section-shell community-section">
    <div class="container">
      <h2 class="section-title section-title--dark" data-reveal>{{ textFor(data.title) }}</h2>
      <p class="section-copy section-copy--dark" data-reveal>{{ textFor(data.body) }}</p>

      <div class="community-grid desktop-grid">
        <article v-for="post in data.posts" :key="post.slug" class="community-card" data-reveal>
          <NuxtLink :to="buildPath(post.slug)" class="community-card__link">
            <div class="community-card__media">
              <img :src="post.image" :alt="textFor(post.title)" />
            </div>

            <div class="community-card__body">
              <h3>{{ textFor(post.title) }}</h3>
              <p>{{ textFor(post.body) }}</p>
              <span class="community-card__more">
                {{ moreLabel }}
              </span>
            </div>
          </NuxtLink>
        </article>
      </div>

      <div class="community-slider mobile-grid" data-reveal>
        <div class="community-slider__track">
          <article v-for="post in data.posts" :key="`${post.slug}-mobile`" class="community-card mobile-card">
            <NuxtLink :to="buildPath(post.slug)" class="community-card__link">
              <div class="community-card__media">
                <img :src="post.image" :alt="textFor(post.title)" />
              </div>

              <div class="community-card__body">
                <h3>{{ textFor(post.title) }}</h3>
                <p>{{ textFor(post.body) }}</p>
                <span class="community-card__more">
                  {{ moreLabel }}
                </span>
              </div>
            </NuxtLink>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { HomeData } from '~/data/site'
import { useSectionReveal } from '~/composables/useSectionReveal'
import { useSiteContent } from '~/composables/useSiteContent'

defineProps<{
  data: HomeData['community']
}>()

const { buildPath, locale, textFor } = useSiteContent()
const sectionRef = useSectionReveal({ stagger: 0.08, y: 26, duration: 0.86 })

const moreLabel = computed(() => {
  if (locale.value.code === 'fr') return 'Voir le détail'
  if (locale.value.code === 'ar') return 'عرض التفاصيل'
  return 'View details'
})
</script>

<style scoped>
.community-section {
  background: #fff;
}

.section-title--dark {
  color: #111;
  text-align: center;
}

.section-copy--dark {
  color: rgba(17, 17, 17, 0.68);
  text-align: center;
  margin-inline: auto;
}

.community-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 22px;
}

.community-card {
  overflow: hidden;
  border-radius: 0;
  background: #fff;
  border: 0;
  transition:
    transform 0.32s cubic-bezier(0.33, 1, 0.68, 1),
    box-shadow 0.32s cubic-bezier(0.33, 1, 0.68, 1);
}

.community-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 36px rgba(17, 17, 17, 0.08);
}

.community-card__link {
  display: grid;
  height: 100%;
}

.community-card__media {
  overflow: hidden;
}

.community-card__media img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  transition: transform 0.48s cubic-bezier(0.33, 1, 0.68, 1);
}

.community-card:hover .community-card__media img {
  transform: scale(1.02);
}

.community-card__body {
  display: grid;
  gap: 10px;
  padding: 14px 0 0;
}

.community-card__body h3 {
  margin: 0;
  color: #111;
  font-size: 1.08rem;
  line-height: 1.45;
}

.community-card__body p {
  margin: 0;
  color: rgba(17, 17, 17, 0.66);
  line-height: 1.72;
}

.community-card__more {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
  color: #111;
}

.community-card__more::after {
  content: '→';
  transition: transform 0.3s cubic-bezier(0, 0, 0.58, 1);
}

.community-card:hover .community-card__more::after {
  transform: translateX(4px);
}

.mobile-grid {
  display: none;
}

.community-slider__track {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(280px, 82vw);
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 4px;
  scroll-snap-type: x proximity;
}

.mobile-card {
  scroll-snap-align: start;
}

@media (max-width: 900px) {
  .desktop-grid {
    display: none;
  }

  .mobile-grid {
    display: block;
    margin-top: 28px;
  }
}
</style>
