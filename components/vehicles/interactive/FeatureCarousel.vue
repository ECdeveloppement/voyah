<template>
  <div class="feature-carousel-module py-12">
    <div class="container">
      <h3 class="carousel-title" v-if="title">{{ title }}</h3>
      
      <div class="carousel-wrapper">
         <div class="carousel-track" ref="trackRef">
            <div class="carousel-card" v-for="(feature, idx) in features" :key="idx">
               <div class="card-media" :style="{ backgroundImage: `url(${feature.image})` }"></div>
               <div class="card-content">
                  <h4>{{ feature.title }}</h4>
                  <p>{{ feature.description }}</p>
               </div>
            </div>
         </div>
         
         <div class="carousel-controls">
            <button class="nav-btn prev" @click="scroll('left')" aria-label="Previous">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button class="nav-btn next" @click="scroll('right')" aria-label="Next">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
         </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

export interface CarouselFeature {
  title: string
  description: string
  image: string
}

const props = defineProps<{
  title?: string
  features: CarouselFeature[]
}>()

const trackRef = ref<HTMLElement | null>(null)

const scroll = (direction: 'left' | 'right') => {
  if (trackRef.value) {
    const scrollAmount = trackRef.value.clientWidth > 768 ? 400 : 300
    const scrollPos = direction === 'left' ? -scrollAmount : scrollAmount
    trackRef.value.scrollBy({ left: scrollPos, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.feature-carousel-module {
  padding: 100px 0;
  background: #fff;
  overflow: hidden;
}
.carousel-title {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  color: #212529;
  margin-bottom: 40px;
  text-align: center;
}
.carousel-wrapper {
  position: relative;
}
.carousel-track {
  display: flex;
  gap: 30px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding-bottom: 40px; /* Hide scrollbar bleed */
}
.carousel-track::-webkit-scrollbar {
  display: none;
}
.carousel-card {
  flex: 0 0 400px;
  scroll-snap-align: start;
  background: #fdfbf7;
  border-radius: 12px;
  overflow: hidden;
}
.card-media {
  height: 250px;
  background-size: cover;
  background-position: center;
}
.card-content {
  padding: 30px;
}
.card-content h4 {
  font-size: 1.3rem;
  color: #212529;
  margin-bottom: 10px;
  font-weight: 600;
}
.card-content p {
  color: #6c757d;
  line-height: 1.5;
  font-size: 0.95rem;
}

.carousel-controls {
  position: absolute;
  top: 40%;
  left: -25px;
  right: -25px;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  pointer-events: none;
}
.nav-btn {
  width: 50px; height: 50px;
  background: #fff;
  border: 1px solid #dee2e6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  color: #495057;
}
.nav-btn:hover {
  background: #c59c62;
  color: #fff;
  border-color: #c59c62;
}
.nav-btn svg { width: 24px; height: 24px; }

@media (max-width: 768px) {
  .carousel-card { flex: 0 0 300px; }
  .carousel-controls { display: none; /* Mobile relies on swipe */ }
}
</style>
