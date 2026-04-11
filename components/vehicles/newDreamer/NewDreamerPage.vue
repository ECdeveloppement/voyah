<template>
  <div class="new-dreamer-page">
    <NewDreamerHero />
    <NewDreamerChapterNav />

    <NewDreamerChapter
      v-for="(chapter, index) in chapters"
      :key="chapter.id"
      :index="index"
      :chapter="chapter"
    />
  </div>
</template>

<script setup lang="ts">
import NewDreamerHero from './NewDreamerHero.vue'
import NewDreamerChapterNav from './NewDreamerChapterNav.vue'
import NewDreamerChapter from './NewDreamerChapter.vue'

const prefImg = '/voyah-resources/images/car/newDreamer'

const chapters = [
  {
    id: 'chapter-1',
    images: [`${prefImg}/kv_1920.png`, `${prefImg}/h56c_pc03_0001.jpg`]
  },
  {
    id: 'chapter-2',
    images: [`${prefImg}/h56c_pc03_0002.jpg`, `${prefImg}/h56c_pc08_banner01.jpg`]
  },
  {
    id: 'chapter-3',
    images: [`${prefImg}/h56c_pc08_banner02.jpg`, `${prefImg}/h56c_pc20_bg.jpg`]
  },
  {
    id: 'chapter-4',
    images: [`${prefImg}/bg_swiper_3_1_n.jpg`, `${prefImg}/bg_4_n.jpg`]
  }
]
</script>

<style scoped>
.new-dreamer-page {
  background: #fff;
  min-height: 100vh;
}
</style>
