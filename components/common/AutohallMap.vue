<template>
  <div class="autohall-map">
    <div class="map-container">
      <div ref="mapRef" class="map" :style="{ height: mapHeight }"></div>
      
      <!-- Map Controls -->
      <div class="map-controls">
        <button @click="centerMap" class="control-btn" :title="t.centerMap">
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <circle cx="12" cy="12" r="3" fill="currentColor"/>
          </svg>
        </button>
        
        <button @click="toggleFullscreen" class="control-btn" :title="t.fullscreen">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" stroke="currentColor" stroke-width="2"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Selected Autohall Info -->
    <div v-if="selectedAutohall" class="selected-autohall-info">
      <div class="info-header">
        <h3>{{ selectedAutohall.name }}</h3>
        <button @click="closeInfo" class="close-btn">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2"/>
          </svg>
        </button>
      </div>
      
      <div class="info-content">
        <div class="info-item">
          <svg class="info-icon" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" stroke="currentColor" stroke-width="2"/>
          </svg>
          <span>{{ selectedAutohall.address }}</span>
        </div>
        
        <div class="info-item">
          <svg class="info-icon" viewBox="0 0 24 24" fill="none">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="2"/>
          </svg>
          <a :href="`tel:${selectedAutohall.phone.replace(/\s/g, '')}`">{{ selectedAutohall.phone }}</a>
        </div>
        
        <div class="info-actions">
          <button @click="getDirections" class="action-btn primary">
            {{ t.getDirections }}
          </button>
          <button @click="callAutohall" class="action-btn secondary">
            {{ t.call }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Autohall } from '~/data/autohalls'

interface Props {
  autohalls: Autohall[]
  height?: string
  initialCenter?: { lat: number; lng: number }
  initialZoom?: number
}

const props = withDefaults(defineProps<Props>(), {
  height: '500px',
  initialCenter: () => ({ lat: 31.7917, lng: -7.0926 }), // Center of Morocco
  initialZoom: 6
})

const emit = defineEmits<{
  autohallSelected: [autohall: Autohall]
  directionsRequested: [autohall: Autohall]
  callRequested: [autohall: Autohall]
}>()

const { t } = useI18n()
const mapRef = ref<HTMLDivElement>()
const selectedAutohall = ref<Autohall | null>(null)
const map = ref<any>(null)
const markers = ref<any[]>([])

const mapHeight = computed(() => props.height)

// Initialize map
onMounted(() => {
  if (mapRef.value && typeof window !== 'undefined') {
    initializeMap()
  }
})

const initializeMap = () => {
  // This is a placeholder for map initialization
  // In a real implementation, you would use a mapping library like Leaflet or Google Maps
  // For now, we'll create a simple placeholder
  
  const mapElement = mapRef.value
  if (!mapElement) return

  // Create a simple map placeholder
  mapElement.innerHTML = `
    <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 18px; text-align: center;">
      <div>
        <div style="margin-bottom: 10px;">🗺️</div>
        <div>Interactive Map</div>
        <div style="font-size: 14px; opacity: 0.8;">${props.autohalls.length} ${t.autohallsFound}</div>
      </div>
    </div>
  `
  
  // Add click handlers for autohall selection
  props.autohalls.forEach((autohall, index) => {
    // In a real implementation, you would add actual map markers
    console.log(`Autohall ${index + 1}: ${autohall.name} at ${autohall.coordinates.lat}, ${autohall.coordinates.lng}`)
  })
}

const centerMap = () => {
  // Center map on Morocco or selected autohalls
  console.log('Centering map...')
}

const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    mapRef.value?.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

const selectAutohall = (autohall: Autohall) => {
  selectedAutohall.value = autohall
  emit('autohallSelected', autohall)
}

const closeInfo = () => {
  selectedAutohall.value = null
}

const getDirections = () => {
  if (selectedAutohall.value) {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${selectedAutohall.value.coordinates.lat},${selectedAutohall.value.coordinates.lng}`
    window.open(url, '_blank')
    emit('directionsRequested', selectedAutohall.value)
  }
}

const callAutohall = () => {
  if (selectedAutohall.value) {
    window.open(`tel:${selectedAutohall.value.phone.replace(/\s/g, '')}`, '_self')
    emit('callRequested', selectedAutohall.value)
  }
}

// Watch for autohalls changes
watch(() => props.autohalls, () => {
  if (map.value) {
    // Update markers when autohalls change
    console.log('Updating map markers...')
  }
}, { deep: true })
</script>

<style scoped>
.autohall-map {
  position: relative;
  width: 100%;
}

.map-container {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.map {
  width: 100%;
  background: #f3f4f6;
}

.map-controls {
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 10;
}

.control-btn {
  width: 40px;
  height: 40px;
  background: white;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.control-btn:hover {
  background: #f8fafc;
  transform: scale(1.05);
}

.control-btn svg {
  width: 18px;
  height: 18px;
  color: #475569;
}

.selected-autohall-info {
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  z-index: 20;
  max-width: 400px;
}

.info-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #e2e8f0;
}

.info-header h3 {
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
}

.close-btn {
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
}

.close-btn:hover {
  background: #f1f5f9;
}

.close-btn svg {
  width: 16px;
  height: 16px;
  color: #64748b;
}

.info-content {
  padding: 20px;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  color: #475569;
}

.info-icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  flex-shrink: 0;
}

.info-item a {
  color: #2563eb;
  text-decoration: none;
}

.info-item a:hover {
  text-decoration: underline;
}

.info-actions {
  display: flex;
  gap: 12px;
  margin-top: 16px;
}

.action-btn {
  flex: 1;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.action-btn.primary {
  background: #2563eb;
  color: white;
}

.action-btn.primary:hover {
  background: #1d4ed8;
}

.action-btn.secondary {
  background: #f1f5f9;
  color: #475569;
  border: 1px solid #e2e8f0;
}

.action-btn.secondary:hover {
  background: #e2e8f0;
}

@media (max-width: 768px) {
  .selected-autohall-info {
    left: 8px;
    right: 8px;
    bottom: 8px;
  }
  
  .info-actions {
    flex-direction: column;
  }
  
  .map-controls {
    top: 8px;
    right: 8px;
  }
}
</style>
