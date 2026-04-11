<template>
  <div class="dreamer-page">
    <CinematicVideoHero 
       videoSrc="/voyah-resources/media/dreamer_hero_compressed.mp4"
       fallbackImage="/voyah-resources/images/car/dreamer/kv_1920.jpg"
       title="The New Dreamer"
       subtitle="Re-defining Luxury MPLs"
    />
    
    <DreamerChapterNav />

    <!-- Core Structure breaks with the interactive configurator -->
    <VehicleColorPicker 
       title="Configure Your Dreamer"
       :colors="dreamerColors"
    />

    <!-- Original Cinematic Scroll Tracking (Chapter 1 - Exterior Dynamics) -->
    <DreamerChapter
      :key="chapters[0].id"
      :index="0"
      :chapter="chapters[0]"
    />

    <!-- Interactive Carousel Breaking Chapter 1 and 2 -->
    <FeatureCarousel 
       title="First-Class Cabin Design"
       :features="dreamerFeatures"
    />

    <!-- Resuming Scroll Tracking for the remaining details -->
    <DreamerChapter
      v-for="(chapter, index) in chapters.slice(1)"
      :key="chapter.id"
      :index="index + 1"
      :chapter="chapter"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DreamerChapterNav from './DreamerChapterNav.vue'
import DreamerChapter from './DreamerChapter.vue'
import CinematicVideoHero from '../interactive/CinematicVideoHero.vue'
import VehicleColorPicker, { type VehicleColor } from '../interactive/VehicleColorPicker.vue'
import FeatureCarousel, { type CarouselFeature } from '../interactive/FeatureCarousel.vue'

const prefImg = '/voyah-resources/images/car/dreamer'

const chapters = [
  {
    id: 'chapter-1',
    images: [`${prefImg}/bg_swiper_4_1.jpg`, `${prefImg}/bg_swiper_5_1.jpg`, `${prefImg}/bg_swiper_8_1.jpg`]
  },
  {
    id: 'chapter-2',
    images: [`${prefImg}/bg_swiper_10_1.jpg`, `${prefImg}/bg_swiper_11_1.jpg`, `${prefImg}/bg_swiper_12_1.jpg`, `${prefImg}/bg_swiper_14_1.jpg`]
  },
  {
    id: 'chapter-3',
    images: [`${prefImg}/bg_swiper_15_1.jpg`, `${prefImg}/bg_swiper_18_1.jpg`, `${prefImg}/bg_swiper_19_1.jpg`, `${prefImg}/bg_swiper_20_1.jpg`]
  },
  {
    id: 'chapter-4',
    images: [`${prefImg}/bg_swiper_22_1.jpg`, `${prefImg}/bg_swiper_23_1.jpg`, `${prefImg}/bg_swiper_25_1.jpg`, `${prefImg}/bg_swiper_27_1.jpg`]
  }
]

// Mocking color visualizer arrays mimicking production
const dreamerColors: VehicleColor[] = [
   { id: 'c1', name: 'Ceramic White', hex: '#f8f9fa', image: `${prefImg}/kv_1920.jpg` },
   { id: 'c2', name: 'Phantom Black', hex: '#0f0f11', image: `${prefImg}/bg_swiper_4_1.jpg` },
   { id: 'c3', name: 'Skyline Blue', hex: '#2A3C53', image: `${prefImg}/bg_swiper_5_1.jpg` }
]

const dreamerFeatures: CarouselFeature[] = [
   { title: 'Zero-Gravity Seats', description: 'Nappa leather massaging captain chairs.', image: `${prefImg}/bg_swiper_10_1.jpg` },
   { title: 'Smart Triple Screen', description: 'Triple 12.3-inch continuous matrix.', image: `${prefImg}/bg_swiper_11_1.jpg` },
   { title: 'Crystal Shifter', description: 'Hand-crafted crystal drive-selector.', image: `${prefImg}/bg_swiper_12_1.jpg` },
   { title: 'Dynaudio Acoustics', description: '14-speaker high-fidelity soundscape.', image: `${prefImg}/bg_swiper_14_1.jpg` }
]
</script>

<style scoped>
.dreamer-page {
  background: #000; /* cinematic dark base */
  min-height: 100vh;
}
</style>
