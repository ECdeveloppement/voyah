<template>
  <div
    class="model-secondary-nav"
    :class="{
      'model-secondary-nav--visible': secondaryVisible,
      'model-secondary-nav--hidden': !secondaryVisible
    }"
  >
    <div class="secondary-nav-content">
      <div class="secondary-nav-left">
        <div class="secondary-brand">VOYAH</div>
      </div>

      <div class="secondary-nav-right">
        <NuxtLink :to="buildPath('configuration-detail.html') + '?carModel=' + getModelIdFromSlug(currentModel?.slug)" class="secondary-cta secondary-cta--ghost">
          {{ configLabel }}
        </NuxtLink>

        <NuxtLink :to="buildPath('book-drive.html')" class="secondary-cta secondary-cta--ghost">
          {{ testDriveLabel }}
        </NuxtLink>

        <NuxtLink :to="buildPath(currentModel?.slug)" class="secondary-cta secondary-cta--primary">
          {{ orderLabel }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useNuxtApp } from '#app'
import { useSiteContent } from '~/composables/useSiteContent'

interface Props {
  currentModel?: any
  scrollY?: number
  secondaryVisible?: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:secondaryVisible': [value: boolean]
}>()

const { buildPath, textFor } = useSiteContent()

const configLabel = computed(() => useNuxtApp().$i18n.t('global.header.config'))
const testDriveLabel = computed(() => useNuxtApp().$i18n.t('global.header.testDrive'))
const orderLabel = computed(() => useNuxtApp().$i18n.t('global.header.order'))

// Fonction pour convertir le slug du modèle en ID de modèle pour la configuration
const getModelIdFromSlug = (slug: string | undefined): string => {
  if (!slug) return 'passion'
  
  const slugToIdMap: Record<string, string> = {
    'passion.html': 'passion',
    'passion-L.html': 'passion',
    'titan.html': 'titan',
    'titan_blackedition.html': 'titan',
    'titan_X8.html': 'titan',
    'free.html': 'free',
    'free+.html': 'free',
    'courage.html': 'courage',
    'newCourage.html': 'courage',
    'dreamer.html': 'dreamer',
    'newDreamer.html': 'dreamer',
    'newDreamer26.html': 'dreamer',
    'dreamer-champion.html': 'dreamer',
    'dreamriver.html': 'dreamer'
  }
  
  return slugToIdMap[slug] || 'passion'
}

let scrollListener: (() => void) | null = null
let triggerPoint = 0

const calculateTriggerPoint = (): number => {
  // Chercher la section 2 directement (c'est la plus fiable)
  const section2 = document.querySelector('#section2')
  
  if (section2) {
    // On déclenche quand le haut de la section 2 atteint le header
    const rect = section2.getBoundingClientRect()
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    // Point où le haut de la section 2 touche le header (80px)
    const trigger = rect.top + scrollTop - 80
    console.log('[SecondaryNav] Trigger basé sur #section2:', trigger)
    return trigger
  }
  
  // Fallback: utiliser la section 1
  const section1 = document.querySelector('#section1, .kv-section, .level-one:first-child')
  if (section1) {
    const rect = section1.getBoundingClientRect()
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    // Point où le bas de la section 1 est passé
    const trigger = rect.bottom + scrollTop - 80
    console.log('[SecondaryNav] Trigger basé sur #section1:', trigger)
    return trigger
  }
  
  // Fallback final: après 600px de scroll
  console.log('[SecondaryNav] Fallback trigger: 600')
  return 600
}

const checkAndUpdate = () => {
  const currentScroll = window.scrollY
  const shouldShow = currentScroll > triggerPoint
  
  emit('update:secondaryVisible', shouldShow)
}

const handleScroll = () => {
  requestAnimationFrame(checkAndUpdate)
}

const init = () => {
  triggerPoint = calculateTriggerPoint()
  console.log('[SecondaryNav] Trigger point final:', triggerPoint)
  
  if (scrollListener) {
    window.removeEventListener('scroll', scrollListener)
  }
  
  scrollListener = handleScroll
  window.addEventListener('scroll', scrollListener, { passive: true })
  
  // État initial
  emit('update:secondaryVisible', false)
  checkAndUpdate()
}

// Réinitialiser quand la route change
watch(() => props.currentModel?.slug, () => {
  emit('update:secondaryVisible', false)
  setTimeout(init, 200)
})

// Recalculer au resize
let resizeTimeout: ReturnType<typeof setTimeout>
const handleResize = () => {
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(() => {
    triggerPoint = calculateTriggerPoint()
    checkAndUpdate()
  }, 150)
}

onMounted(() => {
  console.log('[SecondaryNav] Initialisation...')
  setTimeout(init, 300)
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  if (scrollListener) {
    window.removeEventListener('scroll', scrollListener)
    scrollListener = null
  }
  window.removeEventListener('resize', handleResize)
  clearTimeout(resizeTimeout)
  emit('update:secondaryVisible', false)
})
</script>

<style scoped>
.model-secondary-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.98);
  backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  transform: translateY(-100%);
  transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.model-secondary-nav--visible {
  transform: translateY(0);
}

.model-secondary-nav--hidden {
  transform: translateY(-100%);
}

.secondary-nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  min-height: 80px;
  padding: 0 80px;
  max-width: 1600px;
  margin: 0 auto;
}

.secondary-nav-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.secondary-brand {
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: 'DDIN', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.secondary-nav-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.secondary-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  padding: 8px 14px;
  border: 1px solid rgba(255, 255, 255, 0.34);
  border-radius: 4px;
  font-size: 0.72rem;
  letter-spacing: 0.02em;
  line-height: 1.3;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.22s ease;
}

.secondary-cta--ghost {
  background: rgba(255, 255, 255, 0.04);
  color: #fff;
}

.secondary-cta--ghost:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.46);
  transform: translateY(-1px);
}

.secondary-cta--primary {
  background: #fff;
  border-color: #fff;
  color: #000;
}

.secondary-cta--primary:hover {
  background: #f0f0f0;
  transform: translateY(-1px);
}

@media (max-width: 1200px) {
  .secondary-nav-content {
    gap: 24px;
    padding: 0 40px;
  }
}

@media (max-width: 1024px) {
  .model-secondary-nav {
    display: none;
  }
}
</style>