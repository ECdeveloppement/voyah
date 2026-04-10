<template>
  <section :class="`info-features info-features--${variantClass}`">
    <div class="container">
      <template v-if="variant === 'store'">
        <article v-if="blocks[0]" :id="sectionLinks[0]?.id" class="info-store-lead" data-reveal>
          <div class="info-store-lead__copy">
            <p class="info-store-lead__index">{{ chapterLabel(0) }}</p>
            <h2 class="info-store-lead__title">{{ textFor(blocks[0].title) }}</h2>
            <p class="info-store-lead__body">{{ textFor(blocks[0].body) }}</p>
          </div>
          <figure class="info-store-lead__media">
            <img :src="blocks[0].image" :alt="textFor(blocks[0].title)" />
          </figure>
        </article>

        <div class="info-store-grid">
          <article
            v-for="(block, index) in blocks.slice(1)"
            :id="sectionLinks[index + 1]?.id"
            :key="`store-${block.image}`"
            class="info-store-card"
            data-reveal
          >
            <figure class="info-store-card__media">
              <img :src="block.image" :alt="textFor(block.title)" />
            </figure>
            <div class="info-store-card__copy">
              <p class="info-store-card__index">{{ chapterLabel(index + 1) }}</p>
              <h2 class="info-store-card__title">{{ textFor(block.title) }}</h2>
              <p class="info-store-card__body">{{ textFor(block.body) }}</p>
            </div>
          </article>
        </div>
      </template>

      <template v-else-if="variant === 'service'">
        <article v-if="blocks[0]" :id="sectionLinks[0]?.id" class="info-service-lead" data-reveal>
          <figure class="info-service-lead__media">
            <img :src="blocks[0].image" :alt="textFor(blocks[0].title)" />
          </figure>
          <div class="info-service-lead__copy">
            <p class="info-service-lead__index">{{ chapterLabel(0) }}</p>
            <h2 class="info-service-lead__title">{{ textFor(blocks[0].title) }}</h2>
            <p class="info-service-lead__body">{{ textFor(blocks[0].body) }}</p>
          </div>
        </article>

        <div class="info-service-grid">
          <article
            v-for="(block, index) in blocks.slice(1, 3)"
            :id="sectionLinks[index + 1]?.id"
            :key="`service-${block.image}`"
            class="info-service-card"
            data-reveal
          >
            <figure class="info-service-card__media">
              <img :src="block.image" :alt="textFor(block.title)" />
            </figure>
            <div class="info-service-card__copy">
              <p class="info-service-card__index">{{ chapterLabel(index + 1) }}</p>
              <h2 class="info-service-card__title">{{ textFor(block.title) }}</h2>
              <p class="info-service-card__body">{{ textFor(block.body) }}</p>
            </div>
          </article>
        </div>

        <article v-if="blocks[3]" :id="sectionLinks[3]?.id" class="info-service-strip" data-reveal>
          <div class="info-service-strip__copy">
            <p class="info-service-strip__index">{{ chapterLabel(3) }}</p>
            <h2 class="info-service-strip__title">{{ textFor(blocks[3].title) }}</h2>
            <p class="info-service-strip__body">{{ textFor(blocks[3].body) }}</p>
          </div>
          <figure class="info-service-strip__media">
            <img :src="blocks[3].image" :alt="textFor(blocks[3].title)" />
          </figure>
        </article>

        <div v-if="blocks.length > 4" class="info-service-grid info-service-grid--tail">
          <article
            v-for="(block, index) in blocks.slice(4)"
            :id="sectionLinks[index + 4]?.id"
            :key="`service-tail-${block.image}`"
            class="info-service-card"
            data-reveal
          >
            <figure class="info-service-card__media">
              <img :src="block.image" :alt="textFor(block.title)" />
            </figure>
            <div class="info-service-card__copy">
              <p class="info-service-card__index">{{ chapterLabel(index + 4) }}</p>
              <h2 class="info-service-card__title">{{ textFor(block.title) }}</h2>
              <p class="info-service-card__body">{{ textFor(block.body) }}</p>
            </div>
          </article>
        </div>
      </template>

      <template v-else>
        <article v-if="blocks[0]" :id="sectionLinks[0]?.id" class="info-energy-lead" data-reveal>
          <div class="info-energy-lead__copy">
            <p class="info-energy-lead__index">{{ chapterLabel(0) }}</p>
            <h2 class="info-energy-lead__title">{{ textFor(blocks[0].title) }}</h2>
            <p class="info-energy-lead__body">{{ textFor(blocks[0].body) }}</p>
          </div>
          <figure class="info-energy-lead__media">
            <img :src="blocks[0].image" :alt="textFor(blocks[0].title)" />
          </figure>
        </article>

        <article v-if="blocks[1]" :id="sectionLinks[1]?.id" class="info-energy-highlight" data-reveal>
          <figure class="info-energy-highlight__media">
            <img :src="blocks[1].image" :alt="textFor(blocks[1].title)" />
          </figure>
          <div class="info-energy-highlight__copy">
            <p class="info-energy-highlight__index">{{ chapterLabel(1) }}</p>
            <h2 class="info-energy-highlight__title">{{ textFor(blocks[1].title) }}</h2>
            <p class="info-energy-highlight__body">{{ textFor(blocks[1].body) }}</p>
          </div>
        </article>

        <div class="info-energy-grid">
          <article
            v-for="(block, index) in blocks.slice(2)"
            :id="sectionLinks[index + 2]?.id"
            :key="`energy-${block.image}`"
            class="info-energy-card"
            data-reveal
          >
            <figure class="info-energy-card__media">
              <img :src="block.image" :alt="textFor(block.title)" />
            </figure>
            <div class="info-energy-card__copy">
              <p class="info-energy-card__index">{{ chapterLabel(index + 2) }}</p>
              <h2 class="info-energy-card__title">{{ textFor(block.title) }}</h2>
              <p class="info-energy-card__body">{{ textFor(block.body) }}</p>
            </div>
          </article>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { GalleryItem } from '~/data/site'
import type { LocalizedText } from '~/data/site'

const props = defineProps<{
  variant: 'store' | 'service' | 'energy'
  blocks: GalleryItem[]
  sectionLinks: Array<{ id: string; label: string }>
  chapterLabel: (index: number) => string
  textFor: (value: LocalizedText) => string
}>()

const variantClass = computed(() => {
  if (props.variant === 'store') return 'store-flow'
  if (props.variant === 'service') return 'service-story'
  return 'energy-story'
})
</script>
