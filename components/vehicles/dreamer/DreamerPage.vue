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
      v-if="renderedSections[0]"
      :key="renderedSections[0].id"
      :index="0"
      :chapter="renderedSections[0]"
    />

    <!-- Interactive Carousel Breaking Chapter 1 and 2 -->
    <FeatureCarousel 
       title="First-Class Cabin Design"
       :features="dreamerFeatures"
    />

    <!-- Resuming Scroll Tracking for the remaining details -->
    <DreamerChapter
      v-for="(section, index) in renderedSections.slice(1)"
      :key="section.id"
      :index="index + 1"
      :chapter="section"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import DreamerChapterNav from './DreamerChapterNav.vue'
import DreamerChapter from './DreamerChapter.vue'
import CinematicVideoHero from '../interactive/CinematicVideoHero.vue'
import VehicleColorPicker, { type VehicleColor } from '../interactive/VehicleColorPicker.vue'
import FeatureCarousel, { type CarouselFeature } from '../interactive/FeatureCarousel.vue'
import { getExpandedModelGallery, getModelStorySections, type ModelStorySection } from '~/data/modelMedia'
import type { ModelDefinition } from '~/data/site'
import { useSiteContent } from '~/composables/useSiteContent'

const props = defineProps<{
  model: ModelDefinition
}>()

const { textFor } = useSiteContent()

const prefImg = '/voyah-resources/images/car/dreamer'

const gallery = computed(() => getExpandedModelGallery(props.model.slug, props.model.gallery))
const authoredStorySections = computed(() => getModelStorySections(props.model.slug))

const renderedSections = computed(() => {
  if (!authoredStorySections.value) return []
  return authoredStorySections.value.map((section: ModelStorySection) => ({
    id: section.id,
    kicker: section.kicker ? textFor(section.kicker) : undefined,
    title: textFor(section.title),
    summary: textFor(section.summary),
    images: section.images,
    videos: section.videos
  }))
})

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
