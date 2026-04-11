<template>
  <div class="color-picker-module py-12 bg-white">
    <div class="color-picker-container text-center">
      <h3 class="picker-title">{{ title || 'Explore Exterior Colors' }}</h3>
      
      <!-- Interactive Graphic Frame -->
      <div class="vehicle-frame">
        <transition name="fade" mode="out-in">
          <img :key="activeColor.id" :src="activeColor.image" :alt="activeColor.name" class="vehicle-image" />
        </transition>
      </div>

      <!-- Swatch Selectors -->
      <div class="swatch-container">
        <button 
          v-for="color in colors" 
          :key="color.id"
          class="swatch-btn"
          :class="{ active: activeColor.id === color.id }"
          @click="selectColor(color)"
          :aria-label="color.name"
        >
          <div class="swatch-fill" :style="{ backgroundColor: color.hex }"></div>
        </button>
      </div>
      <div class="swatch-label">
         <span class="label-name">{{ activeColor.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

export interface VehicleColor {
  id: string
  name: string
  hex: string
  image: string
}

const props = defineProps<{
  title?: string
  colors: VehicleColor[]
}>()

const activeColor = ref<VehicleColor>(props.colors[0])

const selectColor = (c: VehicleColor) => {
  activeColor.value = c
}
</script>

<style scoped>
.color-picker-module {
  padding: 80px 0;
  background: #fdfbf7;
}
.picker-title {
  font-family: var(--font-heading);
  font-size: 2rem;
  color: #212529;
  margin-bottom: 40px;
}
.vehicle-frame {
  max-width: 1200px;
  margin: 0 auto 40px;
  position: relative;
  min-height: 400px; /* Prevent layout shift during load */
  display: flex;
  justify-content: center;
  align-items: center;
}
.vehicle-image {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Vue Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.swatch-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 15px;
}
.swatch-btn {
  background: transparent;
  border: 2px solid transparent;
  padding: 4px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}
.swatch-btn.active {
  border-color: #c59c62;
}
.swatch-fill {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
  border: 1px solid rgba(0,0,0,0.05);
}
.swatch-label {
  font-size: 1.1rem;
  font-weight: 500;
  color: #495057;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
@media (max-width: 768px) {
  .vehicle-frame { min-height: 250px; }
  .swatch-fill { width: 30px; height: 30px; }
}
</style>
