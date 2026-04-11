<template>
  <div class="titan-be-page">
    <TitanBlackEditionHero />
    <TitanBlackEditionChapterNav />

    <TitanBlackEditionChapter
      v-for="(chapter, index) in chapters"
      :key="chapter.id"
      :index="index"
      :chapter="chapter"
    />
  </div>
</template>

<script setup lang="ts">
import TitanBlackEditionHero from './TitanBlackEditionHero.vue'
import TitanBlackEditionChapterNav from './TitanBlackEditionChapterNav.vue'
import TitanBlackEditionChapter from './TitanBlackEditionChapter.vue'

const pref = '/voyah-resources/images/car/titan_blackedition/1920'

const chapters = [
  {
    id: 'chapter-1',
    images: [`${pref}/sc_1.jpg`, `${pref}/sc_3_1.jpg`, `${pref}/sc_3_2.jpg`, `${pref}/sc_3_3.jpg`, `${pref}/sc_9_1.jpg`]
  },
  {
    id: 'chapter-2',
    images: [`${pref}/sc_10_1.jpg`, `${pref}/sc_13_1.jpg`, `${pref}/sc_16_1.jpg`, `${pref}/sc_18_1.jpg`]
  },
  {
    id: 'chapter-3',
    images: [`${pref}/sc_21_1.jpg`, `${pref}/sc_21_2.jpg`, `${pref}/sc_21_3.jpg`, `${pref}/sc_21_4.jpg`, `${pref}/sc_21_5.jpg`, `${pref}/sc_22_1.jpg`, `${pref}/sc_23_1.jpg`]
  },
  {
    id: 'chapter-4',
    images: [`${pref}/sc_23_2.jpg`, `${pref}/sc_23_3.jpg`, `${pref}/swiper_5_1.jpg`, `${pref}/swiper_5_2.jpg`, `${pref}/swiper_5_3.jpg`, `${pref}/swiper_5_4.jpg`]
  }
]
</script>

<style scoped>
.titan-be-page {
  background: #000;
  min-height: 100vh;
}
</style>
