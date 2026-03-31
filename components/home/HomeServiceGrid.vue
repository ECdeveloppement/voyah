<template>
  <section ref="sectionRef" class="section-shell">
    <div class="container">
      <p class="eyebrow" data-reveal>{{ textFor(data.title) }}</p>
      <h2 class="section-title" data-reveal>{{ textFor(data.title) }}</h2>
      <p class="section-copy" data-reveal>{{ textFor(data.body) }}</p>
      <div class="content-grid" style="margin-top: 26px;">
        <article v-for="card in data.cards" :key="card.image" class="content-card" data-reveal>
          <img :src="card.image" :alt="textFor(card.title)" />
          <div class="content-card-body">
            <h3 class="content-card-title">{{ textFor(card.title) }}</h3>
            <p class="content-card-copy">{{ textFor(card.body) }}</p>
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
const sectionRef = useSectionReveal()
</script>
