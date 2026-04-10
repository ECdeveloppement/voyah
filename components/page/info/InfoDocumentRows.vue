<template>
  <section class="info-features info-features--document-list">
    <div class="container">
      <article
        v-for="(block, index) in blocks"
        :id="sectionLinks[index]?.id"
        :key="`doc-${block.image}`"
        class="info-document-row"
        data-reveal
      >
        <div class="info-document-row__index">{{ chapterLabel(index) }}</div>
        <figure class="info-document-row__media">
          <img :src="block.image" :alt="textFor(block.title)" />
        </figure>
        <div class="info-document-row__copy">
          <h2 class="info-document-row__title">{{ textFor(block.title) }}</h2>
          <p class="info-document-row__body">{{ textFor(block.body) }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { GalleryItem, LocalizedText } from '~/data/site'

defineProps<{
  blocks: GalleryItem[]
  sectionLinks: Array<{ id: string; label: string }>
  chapterLabel: (index: number) => string
  textFor: (value: LocalizedText) => string
}>()
</script>
