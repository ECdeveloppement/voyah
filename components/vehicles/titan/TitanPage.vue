<template>
  <div class="titan-page">
    <TitanHero />
    <TitanChapterNav />

    <TitanChapter
      v-for="(chapter, index) in chapters"
      :key="chapter.id"
      :index="index"
      :chapter="chapter"
    />
  </div>
</template>

<script setup lang="ts">
import TitanHero from './TitanHero.vue'
import TitanChapterNav from './TitanChapterNav.vue'
import TitanChapter from './TitanChapter.vue'

const pref = '/voyah-resources/images/car/titan/1920'

const chapters = [
  {
    id: 'chapter-1',
    images: [`${pref}/sc_2.jpg`, `${pref}/sc_3.jpg`, `${pref}/sc_4_1.jpg`, `${pref}/sc_4_2.jpg`, `${pref}/sc_6_1.jpg`, `${pref}/sc_7_1.jpg`, `${pref}/sc_8_1.jpg`, `${pref}/sc_9.jpg`]
  },
  {
    id: 'chapter-2',
    images: [`${pref}/sc_20.jpg`, `${pref}/sc_21.jpg`, `${pref}/sc_22.jpg`, `${pref}/sc_23.jpg`, `${pref}/sc_11.jpg`, `${pref}/sc_13_1.jpg`],
    videos: [`/voyah-resources/images/car/titan/video_01.mp4`]
  },
  {
    id: 'chapter-3',
    images: [`${pref}/sc_25.jpg`, `${pref}/sc_27_1.jpg`, `${pref}/sc_28.jpg`, `${pref}/sc_29.jpg`, `${pref}/sc_30.jpg`, `${pref}/sc_31.jpg`],
    videos: [`/voyah-resources/images/car/titan/video_04.mp4`]
  },
  {
    id: 'chapter-4',
    images: [`${pref}/sc_32.jpg`, `${pref}/sc_33_1.jpg`, `${pref}/sc_33_2.jpg`, `${pref}/sc_34_1.jpg`, `${pref}/sc_35_1.jpg`, `${pref}/sc_35_2.jpg`]
  }
]
</script>

<style scoped>
.titan-page {
  background: #fff;
  min-height: 100vh;
}
</style>
