<template>
  <section class="model-cards" :class="{ 'model-cards--dense': isDense }">
    <div class="model-cards__inner">
      <h3 v-if="showHeading" class="model-cards__title">{{ textFor(heading) }}</h3>
      <div class="model-cards__grid" :style="gridStyle">
        <article v-for="(card, index) in cards" :key="index" class="model-cards__cell">
          <div class="model-cards__media">
            <img
              :src="card.image"
              :alt="textFor(card.title) || textFor(card.body)"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="model-cards__body">
            <div v-if="textFor(card.title)" class="model-cards__label">{{ textFor(card.title) }}</div>
            <div class="model-cards__excerpt">{{ textFor(card.body) }}</div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ModelFeatureCard } from '~/data/modelPages'
import type { Localized } from '~/data/dealer'
import { useSiteContent } from '~/composables/useSiteContent'

const props = withDefaults(
  defineProps<{ heading?: Localized; cards: ModelFeatureCard[]; showHeading?: boolean }>(),
  { heading: undefined, showHeading: true }
)

const { textFor } = useSiteContent()

const columns = Math.min(props.cards.length, 4)
const isDense = columns === 4

/** Le site de référence passe au carré et au pas de 24 px dès la grille de quatre. */
const gridStyle = computed(() => ({
  '--model-cards-columns': String(columns),
  '--model-cards-gap': isDense ? '24px' : '40px',
  '--model-cards-ratio': isDense ? '1 / 1' : '3 / 2'
}))
</script>

<style scoped>
/* Grille de cartes techniques posée sur le fond blanc du site de référence. */
.model-cards {
  padding: 80px 0;
  background: var(--bg);
}

.model-cards--dense {
  padding: 24px 0;
}

.model-cards__inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.model-cards__title {
  margin: 40px 0;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
  color: var(--text);
}

.model-cards__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

@media (min-width: 768px) {
  .model-cards__grid {
    grid-template-columns: repeat(var(--model-cards-columns), minmax(0, 1fr));
    gap: var(--model-cards-gap);
  }
}

.model-cards__cell {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 0;
  border-radius: 8px;
  background: var(--bg);
  color: #525252;
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.model-cards__media {
  display: flex;
  align-items: center;
  aspect-ratio: var(--model-cards-ratio);
  overflow: hidden;
  background: #fafafa;
}

.model-cards__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease-out;
}

.model-cards__cell:hover .model-cards__media img {
  transform: scale(1.05);
}

.model-cards__body {
  display: grid;
  gap: 16px;
  padding: 24px;
}

.model-cards__label {
  height: 80px;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5556;
  color: #525252;
}

.model-cards__excerpt {
  font-size: 0.875rem;
  line-height: 1.43;
  color: #525252;
}
</style>
