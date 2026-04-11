<template>
  <div class="titan-x8-page">
    <TitanX8Hero />
    <TitanX8ChapterNav />

    <TitanX8Chapter
      v-for="(chapter, index) in chapters"
      :key="chapter.id"
      :index="index"
      :chapter="chapter"
    />
  </div>
</template>

<script setup lang="ts">
import TitanX8Hero from './TitanX8Hero.vue'
import TitanX8ChapterNav from './TitanX8ChapterNav.vue'
import TitanX8Chapter from './TitanX8Chapter.vue'

const pref = '/voyah-resources/images/car/titan_X8/1920'

const chapters = [
  { id: 'performance', images: [`${pref}/perf_chassis.jpg`] },
  { id: 'cockpit', images: [`${pref}/cockpit_interior.jpg`] },
  { id: 'safety', images: [`${pref}/safety_cage.jpg`, `${pref}/safety_battery.jpg`] }
]
</script>

<style scoped>
.titan-x8-page {
  background: #fff;
  min-height: 100vh;
}
</style>
