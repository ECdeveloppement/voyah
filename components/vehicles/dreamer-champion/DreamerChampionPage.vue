<template>
  <div class="dreamer-champion-page">
    <DreamerChampionHero />
    <DreamerChampionChapterNav />

    <DreamerChampionChapter
      v-for="(chapter, index) in chapters"
      :key="chapter.id"
      :index="index"
      :chapter="chapter"
    />
  </div>
</template>

<script setup lang="ts">
import DreamerChampionHero from './DreamerChampionHero.vue'
import DreamerChampionChapterNav from './DreamerChampionChapterNav.vue'
import DreamerChampionChapter from './DreamerChampionChapter.vue'

const prefImg = '/voyah-resources/images/car/dreamer-champion'

const chapters = [
  {
    id: 'chapter-1',
    images: [`${prefImg}/kv_0408_1920.jpg`, `${prefImg}/bg_3_n.jpg`, `${prefImg}/bg_3_n_2.jpg`, `${prefImg}/bg_7_n_banner04.jpg`]
  },
  {
    id: 'chapter-2',
    images: [`${prefImg}/bg_12_n_banner01.jpg`, `${prefImg}/bg_14_n.jpg`, `${prefImg}/bg_8_n_banner02.jpg`, `${prefImg}/bg_8_n_banner04.jpg`]
  },
  {
    id: 'chapter-3',
    images: [`${prefImg}/bg_16_n_banner01.jpg`, `${prefImg}/bg_17_n_banner01.jpg`, `${prefImg}/bg_10_0408_banner01.jpg`, `${prefImg}/bg_22_n_banner01.jpg`]
  },
  {
    id: 'chapter-4',
    images: [`${prefImg}/bg_19_0408_banner01.jpg`, `${prefImg}/bg_20_n_banner01.jpg`, `${prefImg}/bg_23_n_banner01.jpg`, `${prefImg}/bg_24_n_banner01.jpg`]
  }
]
</script>

<style scoped>
.dreamer-champion-page {
  background: #fff;
  min-height: 100vh;
}
</style>
