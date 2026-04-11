<template>
  <div class="new-courage-page">
    <NewCourageHero />
    <NewCourageChapterNav />

    <NewCourageChapter
      v-for="(chapter, index) in chapters"
      :key="chapter.id"
      :index="index"
      :chapter="chapter"
    />
  </div>
</template>

<script setup lang="ts">
import NewCourageHero from './NewCourageHero.vue'
import NewCourageChapterNav from './NewCourageChapterNav.vue'
import NewCourageChapter from './NewCourageChapter.vue'

const prefImg = '/voyah-resources/images/car/newCourage'
const prefVid = '/voyah-resources/images/car/h37b'

const chapters = [
  {
    id: 'chapter-1',
    images: [`${prefImg}/1920/sc_3.jpg`, `${prefImg}/1920/sc_4.jpg`, `${prefImg}/1920/sc_6.jpg`, `${prefImg}/1920/sc_6-2.jpg`, `${prefImg}/1920/sc_6-3.jpg`, `${prefImg}/1920/sc_8.jpg`],
    videos: [`${prefVid}/video_05_20250812.mp4`, `${prefVid}/video_09.mp4`]
  },
  {
    id: 'chapter-2',
    images: [`${prefImg}/1920/sc_12.jpg`, `${prefImg}/1920/sc_13.jpg`, `${prefImg}/1920/sc_13-2.jpg`, `${prefImg}/1920/sc_13-3.jpg`, `${prefImg}/1920/sc_14.jpg`, `${prefImg}/1920/sc_14-2.jpg`, `${prefImg}/1920/sc_14-3.jpg`, `${prefImg}/1920/sc_18.jpg`, `${prefImg}/1920/sc_21.jpg`],
    videos: [`${prefVid}/video_17_20250828.mp4`, `${prefVid}/video_22.mp4`]
  },
  {
    id: 'chapter-3',
    images: [`${prefImg}/1920/sc_23.jpg`, `${prefImg}/1920/sc_24.jpg`, `${prefImg}/1920/sc_24-3.jpg`, `${prefImg}/1920/sc_28.jpg`, `${prefImg}/1920/sc_28-2.jpg`],
    videos: [`${prefVid}/video_26_1.mp4`, `${prefVid}/video_26_2.mp4`, `${prefVid}/video_26_3.mp4`, `${prefVid}/video_27.mp4`]
  },
  {
    id: 'chapter-4',
    images: [`${prefImg}/1920/sc_29.jpg`, `${prefImg}/1920/sc_31.jpg`],
    videos: [`${prefVid}/video_30.mp4`, `${prefVid}/video_32_1.mp4`, `${prefVid}/video_32_2.mp4`]
  },
  {
    id: 'chapter-5',
    images: [`${prefImg}/1920/sc_34.jpg`, `${prefImg}/1920/sc_35.jpg`, `${prefImg}/1920/sc_37.jpg`, `${prefImg}/1920/sc_37-2.jpg`, `${prefImg}/1920/sc_38.jpg`],
    videos: [`${prefVid}/video_36_20250828.mp4`]
  },
  {
    id: 'chapter-6',
    images: [`${prefImg}/1920/sc_39.jpg`, `${prefImg}/1920/sc_41.jpg`, `${prefImg}/1920/sc_43.jpg`],
    videos: [`${prefVid}/video_40_20250812.mp4`, `${prefVid}/video_42_20250812.mp4`]
  }
]
</script>

<style scoped>
.new-courage-page {
  background: #fff;
  min-height: 100vh;
}
</style>
