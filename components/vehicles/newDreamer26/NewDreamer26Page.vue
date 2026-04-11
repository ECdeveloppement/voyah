<template>
  <div class="new-dreamer26-page">
    <NewDreamer26Hero />
    <NewDreamer26ChapterNav />

    <NewDreamer26Chapter
      v-for="(chapter, index) in chapters"
      :key="chapter.id"
      :index="index"
      :chapter="chapter"
    />
  </div>
</template>

<script setup lang="ts">
import NewDreamer26Hero from './NewDreamer26Hero.vue'
import NewDreamer26ChapterNav from './NewDreamer26ChapterNav.vue'
import NewDreamer26Chapter from './NewDreamer26Chapter.vue'

const prefImg = '/voyah-resources/images/car/newDreamer26'
const prefVid = '/voyah-resources/images/car/h56d'

const chapters = [
  {
    id: 'chapter-1',
    images: [`${prefImg}/sc_3.jpg`, `${prefImg}/sc_3-2.jpg`, `${prefImg}/sc_3-3.jpg`, `${prefImg}/sc_8.jpg`, `${prefImg}/sc_9.jpg`]
  },
  {
    id: 'chapter-2',
    images: [`${prefImg}/sc_10.jpg`, `${prefImg}/sc_10-2.jpg`, `${prefImg}/sc_14.jpg`, `${prefImg}/sc_15.jpg`, `${prefImg}/sc_15-4.jpg`],
    videos: [`${prefVid}/video_13.mp4`]
  },
  {
    id: 'chapter-3',
    images: [`${prefImg}/sc_18.jpg`, `${prefImg}/sc_18-2.jpg`, `${prefImg}/sc_19.jpg`, `${prefImg}/sc_20.jpg`, `${prefImg}/sc_21.jpg`],
    videos: [`${prefVid}/video_17.mp4`]
  },
  {
    id: 'chapter-4',
    images: [`${prefImg}/sc_23.jpg`, `${prefImg}/sc_24.jpg`, `${prefImg}/sc_25.jpg`, `${prefImg}/sc_12.jpg`]
  }
]
</script>

<style scoped>
.new-dreamer26-page {
  background: #fff;
  min-height: 100vh;
}
</style>
