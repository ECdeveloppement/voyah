<template>
  <div class="dream-river-page">
    <DreamRiverHero />
    <DreamRiverChapterNav />

    <DreamRiverChapter
      v-for="(chapter, index) in chapters"
      :key="chapter.id"
      :index="index"
      :chapter="chapter"
    />
  </div>
</template>

<script setup lang="ts">
import DreamRiverHero from './DreamRiverHero.vue'
import DreamRiverChapterNav from './DreamRiverChapterNav.vue'
import DreamRiverChapter from './DreamRiverChapter.vue'

const prefImg = '/voyah-resources/images/car/dreamriver'

const chapters = [
  {
    id: 'chapter-1',
    images: [`${prefImg}/kv_1920.png`, `${prefImg}/sc_2.png`, `${prefImg}/sc_2-2.png`, `${prefImg}/sc_4.png`, `${prefImg}/sc_4-2.png`]
  },
  {
    id: 'chapter-2',
    images: [`${prefImg}/sc_5.png`, `${prefImg}/sc_5-2.png`, `${prefImg}/sc_6.png`, `${prefImg}/sc_6-2.png`, `${prefImg}/sc_7.png`]
  },
  {
    id: 'chapter-3',
    images: [`${prefImg}/sc_8.png`, `${prefImg}/sc_8-2.png`, `${prefImg}/sc_9.png`, `${prefImg}/sc_9-2.png`]
  },
  {
    id: 'chapter-4',
    images: [`${prefImg}/sc_10.png`, `${prefImg}/sc_10-2.png`, `${prefImg}/sc_11.png`, `${prefImg}/sc_11-2.png`]
  }
]
</script>

<style scoped>
.dream-river-page {
  background: #fff;
  min-height: 100vh;
}
</style>
