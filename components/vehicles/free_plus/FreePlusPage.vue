<template>
  <div class="freeplus-page">
    <FreePlusHero />
    <FreePlusChapterNav />

    <FreePlusChapter
      v-for="(chapter, index) in chapters"
      :key="chapter.id"
      :index="index"
      :chapter="chapter"
    />
  </div>
</template>

<script setup lang="ts">
import FreePlusHero from './FreePlusHero.vue'
import FreePlusChapterNav from './FreePlusChapterNav.vue'
import FreePlusChapter from './FreePlusChapter.vue'

const pref = '/voyah-resources/images/car/free+'

const chapters = [
  {
    id: 'chapter-1',
    images: [`${pref}/img_01_1920.png`, `${pref}/img_02_01.png`, `${pref}/img_06_01.png`, `${pref}/img_08.png`]
  },
  {
    id: 'chapter-2',
    images: [`${pref}/img_03_1920.png`, `${pref}/img_11_01.png`, `${pref}/img_17_01.png`, `${pref}/img_20_01.png`],
    videos: [`${pref}/video_05.mp4`, `${pref}/video_11.mp4`, `${pref}/video_19.mp4`, `${pref}/video_22.mp4`]
  },
  {
    id: 'chapter-3',
    images: [`${pref}/img_25_1920.png`, `${pref}/img_28_1920.png`, `${pref}/img_29_01.png`],
    videos: [`${pref}/video_27_20250712.mp4`, `${pref}/video_28_1.mp4`, `${pref}/video_28_2.mp4`]
  },
  {
    id: 'chapter-4',
    images: [`${pref}/img_28_1920.png`, `${pref}/img_29_01.png`, `${pref}/img_31_1920.png`],
    videos: [`${pref}/video_31.mp4`]
  },
  {
    id: 'chapter-5',
    images: [`${pref}/img_32_01.png`, `${pref}/img_35_01.png`, `${pref}/img_36_01.png`, `${pref}/img_40_01.jpg`],
    videos: [`${pref}/video_34.mp4`, `${pref}/video_35.mp4`, `${pref}/video_42.mp4`]
  },
  {
    id: 'chapter-6',
    images: [`${pref}/img_36_01.png`, `${pref}/img_40_01.jpg`],
    videos: [`${pref}/video_35.mp4`, `${pref}/video_42.mp4`]
  }
]
</script>

<style scoped>
.freeplus-page {
  background: #fff;
  min-height: 100vh;
}
</style>
