<template>
  <div class="free-page">
    <CinematicVideoHero 
       videoSrc="/voyah-resources/media/free_hero_compressed.mp4"
       fallbackImage="/voyah-resources/images/car/free/bg-free-h97D-1.jpg"
       title="Voyah FREE"
       subtitle="Unbound Exploration"
    />
    
    <FreeChapterNav />

    <!-- Interactive Configurator Break -->
    <VehicleColorPicker 
       title="Customize Your FREE"
       :colors="freeColors"
    />

    <FreeChapter
      :key="chapters[0].id"
      :index="0"
      :chapter="chapters[0]"
    />

    <!-- Interactive Carousel Break -->
    <FeatureCarousel 
       title="Uncompromised Comfort"
       :features="freeFeatures"
    />

    <FreeChapter
      v-for="(chapter, index) in chapters.slice(1)"
      :key="chapter.id"
      :index="index + 1"
      :chapter="chapter"
    />
  </div>
</template>

<script setup lang="ts">
import FreeChapterNav from './FreeChapterNav.vue'
import FreeChapter from './FreeChapter.vue'
import CinematicVideoHero from '../interactive/CinematicVideoHero.vue'
import VehicleColorPicker, { type VehicleColor } from '../interactive/VehicleColorPicker.vue'
import FeatureCarousel, { type CarouselFeature } from '../interactive/FeatureCarousel.vue'

const pref = '/voyah-resources/images/car/free'

const chapters = [
  {
    id: 'chapter-1',
    images: [`${pref}/bg-free-h97D-2.jpg`, `${pref}/bg-free-h97D-3.jpg`, `${pref}/bg-free-h97D-4.jpg`, `${pref}/bg_free_pc4_0002_1920.jpg`, `${pref}/bg_free_pc15_0001_1920.jpg`]
  },
  {
    id: 'chapter-2',
    images: [`${pref}/bg_free_pc21_0001.jpg`, `${pref}/bg_free_pc21_0002.jpg`, `${pref}/bg_free_pc21_0003.jpg`, `${pref}/bg_free_pc21_0004.jpg`, `${pref}/bg_free_pc23_0001.jpg`, `${pref}/bg_free_pc28_0001_1920.jpg`]
  },
  {
    id: 'chapter-3',
    images: [`${pref}/bg_free_pc29_0001.jpg`, `${pref}/bg_free_pc29_0002.jpg`, `${pref}/bg_free_pc30_0001.jpg`, `${pref}/bg_free_pc30_0002.jpg`, `${pref}/bg_free_pc31_0001.jpg`, `${pref}/bg_free_pc31_0002.jpg`]
  },
  {
    id: 'chapter-4',
    images: [`${pref}/bg_free_pc35_0001_1920.jpg`, `${pref}/bg_free_pc36_0001.jpg`, `${pref}/bg_free_pc36_0002.jpg`, `${pref}/bg_free_pc37_0001.jpg`, `${pref}/bg_free_pc37_0002.jpg`, `${pref}/bg_free_pc38_0001.jpg`]
  },
  {
    id: 'chapter-5',
    images: [`${pref}/bg_free_pc27_0006.jpg`, `${pref}/bg_free_pc27_0007.jpg`, `${pref}/bg_free_pc28_0001_1920.jpg`, `${pref}/bg_free_pc29_0003.jpg`]
  }
]

const freeColors: VehicleColor[] = [
   { id: 'c1', name: 'Glacier White', hex: '#f0f3f5', image: `${pref}/bg-free-h97D-1.jpg` },
   { id: 'c2', name: 'Stealth Grey', hex: '#343a40', image: `${pref}/bg-free-h97D-2.jpg` },
   { id: 'c3', name: 'Midnight Blue', hex: '#162338', image: `${pref}/bg_free_pc4_0002_1920.jpg` }
]

const freeFeatures: CarouselFeature[] = [
   { title: 'Lifting Dashboard', description: 'Triple screen automatically raises and lowers.', image: `${pref}/bg_free_pc29_0001.jpg` },
   { title: 'Premium Audio', description: 'High-fidelity acoustic isolation.', image: `${pref}/bg_free_pc29_0002.jpg` },
   { title: 'Active Air Suspension', description: '100mm dynamic height adjustment.', image: `${pref}/bg_free_pc36_0001.jpg` },
   { title: 'V-Care Monitor', description: 'Vitality sensing for passengers.', image: `${pref}/bg_free_pc37_0001.jpg` }
]
</script>

<style scoped>
.free-page {
  background: #000;
  min-height: 100vh;
}
</style>
