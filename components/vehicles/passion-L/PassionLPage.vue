<template>
  <div class="passion-l-page">
    <PassionLHero />
    <PassionLChapterNav />

    <PassionLChapter
      v-for="(chapter, index) in chapters"
      :key="chapter.id"
      :index="index"
      :chapter="chapter"
    />
  </div>
</template>

<script setup lang="ts">
import PassionLHero from './PassionLHero.vue'
import PassionLChapterNav from './PassionLChapterNav.vue'
import PassionLChapter from './PassionLChapter.vue'

const pref = '/voyah-resources/images/car/passion-L'

const chapters = [
  {
    id: 'chapter-1',
    images: [`${pref}/1920/sc_2.jpg`, `${pref}/1920/sc_3.jpg`, `${pref}/1920/sc_4.jpg`, `${pref}/1920/sc_5.jpg`]
  },
  {
    id: 'chapter-2',
    images: [`${pref}/1920/sc_9.jpg`, `${pref}/1920/sc_10.jpg`, `${pref}/1920/sc_16.jpg`, `${pref}/1920/sc_18.jpg`],
    videos: [`${pref}/video_11.mp4`, `${pref}/video_14.mp4`, `${pref}/video_15.mp4`]
  },
  {
    id: 'chapter-3',
    images: [`${pref}/1920/sc_24.jpg`, `${pref}/1920/sc_25.jpg`, `${pref}/1920/sc_23.jpg`],
    videos: [`${pref}/video_26_1.mp4`, `${pref}/video_26_2.mp4`]
  },
  {
    id: 'chapter-4',
    images: [`${pref}/1920/sc_27.jpg`, `${pref}/1920/sc_28.jpg`, `${pref}/1920/sc_29.jpg`, `${pref}/1920/sc_30.jpg`]
  },
  {
    id: 'chapter-5',
    images: [`${pref}/1920/sc_31.jpg`, `${pref}/1920/sc_32.jpg`, `${pref}/1920/sc_33.jpg`, `${pref}/1920/sc_34.jpg`]
  },
  {
    id: 'chapter-6',
    images: [`${pref}/1920/sc_35.jpg`, `${pref}/1920/sc_36.jpg`, `${pref}/1920/sc_38.jpg`],
    videos: [`${pref}/video_37.mp4`]
  },
  {
    id: 'chapter-7',
    images: [`${pref}/1920/sc_39.jpg`, `${pref}/1920/sc_40.jpg`, `${pref}/1920/sc_42.jpg`, `${pref}/1920/sc_43.jpg`]
  }
]
</script>

<style scoped>
.passion-l-page {
  background: #fff;
  min-height: 100vh;
}
</style>
