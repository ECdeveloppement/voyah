<template>
  <section ref="sectionRef" class="section-shell service-section">
    <div class="container">
      <h2 class="section-title section-title--dark" data-reveal>{{ textFor(data.title) }}</h2>
      <p class="section-copy section-copy--dark" data-reveal>{{ textFor(data.body) }}</p>

      <div class="service-grid">
        <article v-for="card in data.cards" :key="card.image" class="service-card" data-reveal>
          <img :src="card.image" :alt="textFor(card.title)" />
          <div class="service-card-body">
            <h3 class="service-card-title">{{ textFor(card.title) }}</h3>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { HomeData } from '~/data/site'
import { useSectionReveal } from '~/composables/useSectionReveal'
import { useSiteContent } from '~/composables/useSiteContent'

defineProps<{
  data: HomeData['service']
}>()

const { textFor } = useSiteContent()
const sectionRef = useSectionReveal({ stagger: 0.08, y: 28, duration: 0.9 })
</script>

<style scoped>
.service-section {
  background: #fff;
}

.section-title--dark {
  color: #111;
}

.section-copy--dark {
  color: rgba(17, 17, 17, 0.68);
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 24px;
}

.service-card {
  overflow: hidden;
  position: relative;
  min-height: 320px;
  border-radius: 0;
  background: #eef2f4;
  border: 0;
  transition:
    transform 0.28s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.28s cubic-bezier(0.22, 1, 0.36, 1);
}

.service-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 34px rgba(10, 14, 20, 0.16);
}

.service-card img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.32s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover img {
  transform: scale(1.014);
}

.service-card-body {
  position: absolute;
  inset: auto 0 0;
  z-index: 1;
  padding: 82px 24px 22px;
  background: linear-gradient(180deg, rgba(10, 14, 20, 0), rgba(10, 14, 20, 0.88));
}

.service-card-title {
  margin: 0;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
}

@media (max-width: 900px) {
  .service-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
