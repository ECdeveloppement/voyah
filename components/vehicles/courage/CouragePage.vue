<template>
  <div class="courage-page">
    <CinematicVideoHero 
       videoSrc="/voyah-resources/media/courage_hero_compressed.mp4"
       fallbackImage="/voyah-resources/images/car/courage/1920/h37_pc01_0001.jpg"
       title="Voyah Courage"
       subtitle="Intelligent Global SUV"
    />
    
    <CourageChapterNav />

    <!-- Interactive Configurator Break -->
    <VehicleColorPicker 
       title="Choose Your Courage"
       :colors="courageColors"
    />

    <!-- Chapter 1 & 2 -> Exterior Geometry -->
    <CourageChapter
      v-for="(chapter, index) in chapters.slice(0, 2)"
      :key="chapter.id"
      :index="index"
      :chapter="chapter"
    />

    <!-- Interactive Features Break -->
    <FeatureCarousel 
       title="Cutting-Edge Utility"
       :features="courageFeatures"
    />

    <!-- Remaining Chapters -->
    <CourageChapter
      v-for="(chapter, index) in chapters.slice(2)"
      :key="chapter.id"
      :index="index + 2"
      :chapter="chapter"
    />
  </div>
</template>

<script setup lang="ts">
import CourageChapterNav from './CourageChapterNav.vue'
import CourageChapter from './CourageChapter.vue'
import CinematicVideoHero from '../interactive/CinematicVideoHero.vue'
import VehicleColorPicker, { type VehicleColor } from '../interactive/VehicleColorPicker.vue'
import FeatureCarousel, { type CarouselFeature } from '../interactive/FeatureCarousel.vue'

const prefImg = '/voyah-resources/images/car/courage'

const chapters = [
  {
    id: 'chapter-1',
    images: [`${prefImg}/1920/h37_pc03_0001.jpg`, `${prefImg}/1920/h37_pc03_0002.jpg`, `${prefImg}/1920/h37_pc03_1_0001.jpg`, `${prefImg}/1920/h37_pc03_1_0002.jpg`]
  },
  {
    id: 'chapter-2',
    images: [`${prefImg}/1920/h37_pc04_0001.jpg`, `${prefImg}/1920/h37_pc05_1_0001.jpg`, `${prefImg}/1920/h37_pc05_1_0002.jpg`, `${prefImg}/1920/h37_pc06_0001.jpg`, `${prefImg}/1920/h37_pc07_0001.jpg`, `${prefImg}/1920/h37_pc07_1_0001.jpg`]
  },
  {
    id: 'chapter-3',
    images: [`${prefImg}/1920/h37_pc10_0001.jpg`, `${prefImg}/1920/h37_pc11_0001.jpg`, `${prefImg}/1920/h37_pc12_0001.jpg`, `${prefImg}/1920/h37_pc12_0002.jpg`, `${prefImg}/1920/h37_pc13_0001.jpg`]
  },
  {
    id: 'chapter-4',
    images: [`${prefImg}/1920/h37_pc14_0001.jpg`, `${prefImg}/1920/h37_pc15_0001.jpg`, `${prefImg}/1920/h37_pc16_0001.jpg`, `${prefImg}/1920/h37_pc17_0001.jpg`, `${prefImg}/1920/h37_pc17_0002.jpg`]
  },
  {
    id: 'chapter-5',
    images: [`${prefImg}/1920/h37_pc18_0001.jpg`, `${prefImg}/1920/h37_pc19_0001.jpg`, `${prefImg}/1920/h37_pc19_0002.jpg`, `${prefImg}/1920/h37_pc21_0001.jpg`, `${prefImg}/1920/h37_pc21_0002.jpg`, `${prefImg}/1920/h37_pc22_0001.jpg`, `${prefImg}/1920/h37_pc22_0002.jpg`]
  },
  {
    id: 'chapter-6',
    images: [`${prefImg}/1920/h37_pc24_0001.jpg`, `${prefImg}/1920/h37_pc25_0001.jpg`, `${prefImg}/1920/h37_pc25_0002.jpg`, `${prefImg}/1920/h37_pc26_0001.jpg`, `${prefImg}/1920/h37_pc27_0001.jpg`, `${prefImg}/1920/h37_pc28_0001.jpg`, `${prefImg}/1920/h37_pc28_0002.jpg`]
  }
]

const courageColors: VehicleColor[] = [
   { id: 'c1', name: 'Polar White', hex: '#eff1f3', image: `${prefImg}/1920/h37_pc01_0001.jpg` },
   { id: 'c2', name: 'Volcanic Ash', hex: '#4a4d52', image: `${prefImg}/1920/h37_pc02_0001.jpg` },
   { id: 'c3', name: 'Jade Green', hex: '#163121', image: `${prefImg}/1920/h37_pc03_0001.jpg` }
]

const courageFeatures: CarouselFeature[] = [
   { title: 'Interactive Grille', description: 'Illuminated LED matrix fascia.', image: `${prefImg}/1920/h37_pc04_0001.jpg` },
   { title: 'Aerodynamic Drag', description: 'Class-leading 0.24 Cd drag coefficient.', image: `${prefImg}/1920/h37_pc06_0001.jpg` },
   { title: 'OLED Floating Screen', description: 'Curved 15.6-inch OLED driver display.', image: `${prefImg}/1920/h37_pc10_0001.jpg` },
   { title: 'Global Fast Charging', description: '800V silicon carbide native architecture.', image: `${prefImg}/1920/h37_pc26_0001.jpg` }
]
</script>

<style scoped>
.courage-page {
  background: #000;
  min-height: 100vh;
}
</style>
