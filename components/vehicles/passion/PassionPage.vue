<template>
  <div class="passion-page">
    <CinematicVideoHero 
       videoSrc="/voyah-resources/media/passion_hero_compressed.mp4"
       fallbackImage="/voyah-resources/images/car/passion/1920/fl01.jpg"
       title="Voyah Passion"
       subtitle="Electric Grand Touring"
    />
    
    <PassionChapterNav />

    <!-- Interactive Configurator -->
    <VehicleColorPicker 
       title="Sculpt Your Passion"
       :colors="passionColors"
    />

    <!-- Chapter 1 -->
    <PassionChapter
      :key="chapters[0].id"
      :index="0"
      :chapter="chapters[0]"
    />
    
    <!-- Chapter 2 -->
    <PassionChapter
      :key="chapters[1].id"
      :index="1"
      :chapter="chapters[1]"
    />

    <!-- Interactive Carousel Break for Aerodynamics -->
    <FeatureCarousel 
       title="Aerodynamic Mastery"
       :features="passionFeatures"
    />

    <!-- Remaining Chapters -->
    <PassionChapter
      v-for="(chapter, index) in chapters.slice(2)"
      :key="chapter.id"
      :index="index + 2"
      :chapter="chapter"
    />
  </div>
</template>

<script setup lang="ts">
import PassionChapterNav from './PassionChapterNav.vue'
import PassionChapter from './PassionChapter.vue'
import CinematicVideoHero from '../interactive/CinematicVideoHero.vue'
import VehicleColorPicker, { type VehicleColor } from '../interactive/VehicleColorPicker.vue'
import FeatureCarousel, { type CarouselFeature } from '../interactive/FeatureCarousel.vue'

const pref = '/voyah-resources/images/car/passion/1920'

const chapters = [
  {
    id: 'chapter-1',
    images: [`${pref}/fl02.jpg`, `${pref}/fl03.jpg`, `${pref}/fl0331.jpg`, `${pref}/fl044.jpg`]
  },
  {
    id: 'chapter-2',
    images: [`${pref}/fl04.jpg`, `${pref}/fl05.jpg`, `${pref}/fl06.jpg`, `${pref}/fl07.jpg`, `${pref}/fl0771.jpg`]
  },
  {
    id: 'chapter-3',
    images: [`${pref}/fl10.jpg`, `${pref}/fl11.jpg`, `${pref}/fl1102.jpg`, `${pref}/fl1103.jpg`, `${pref}/fl14.jpg`, `${pref}/fl21.jpg`]
  },
  {
    id: 'chapter-4',
    images: [`${pref}/fl15.jpg`, `${pref}/fl1701.jpg`, `${pref}/fl1702.jpg`, `${pref}/fl1703.jpg`, `${pref}/fl1704.jpg`, `${pref}/fl1705.jpg`, `${pref}/fl1802.jpg`]
  },
  {
    id: 'chapter-5',
    images: [`${pref}/fl1805.jpg`, `${pref}/fl1806.jpg`, `${pref}/fl1807.jpg`, `${pref}/fl1808.jpg`, `${pref}/fl1809.jpg`, `${pref}/fl1820.jpg`, `${pref}/fl1821.jpg`, `${pref}/fl1822.jpg`]
  }
]

const passionColors: VehicleColor[] = [
   { id: 'c1', name: 'Luminous Silver', hex: '#e2e5e9', image: `${pref}/fl01.jpg` },
   { id: 'c2', name: 'Azure Blue', hex: '#163152', image: `${pref}/fl02.jpg` },
   { id: 'c3', name: 'Crimson Red', hex: '#631118', image: `${pref}/fl04.jpg` }
]

const passionFeatures: CarouselFeature[] = [
   { title: 'Active Rear Wing', description: 'Deployable 3-stage aerodynamic spoiler.', image: `${pref}/fl05.jpg` },
   { title: 'Performance Wheels', description: '20-inch aero-blade alloy rims.', image: `${pref}/fl06.jpg` },
   { title: 'Immersive Cockpit', description: 'Curved panoramic display cluster.', image: `${pref}/fl10.jpg` },
   { title: 'Ambient Lighting', description: '128-color rhythm sensing illumination.', image: `${pref}/fl11.jpg` }
]
</script>

<style scoped>
.passion-page {
  background: #000;
  min-height: 100vh;
}
</style>
