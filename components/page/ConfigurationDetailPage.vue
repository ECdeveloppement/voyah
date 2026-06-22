<template>
  <div class="configuration-detail-page">
    <SiteHeader />
    
    <!-- Hero / Title Area -->
    <div class="config-hero">
      <div class="page-container">
        <h1 class="config-title">{{ textFor({ en: 'Configuration Details', fr: 'Détails de configuration', ar: 'تفاصيل التكوين' }) }}</h1>
        <div class="config-actions">
          <!-- Series Selector -->
          <div class="selector-wrapper" @click.stop="toggleSeriesPicker">
            <div class="selector">
              <span class="selector-value">{{ currentSeries?.name[locale?.code || 'en'] || 'Lantu Chasing Light L' }}</span>
              <svg class="selector-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            </div>
            <div v-if="showSeriesPicker" class="dropdown">
              <div 
                v-for="series in availableSeries" 
                :key="series.id"
                class="dropdown-item"
                :class="{ active: currentSeries?.id === series.id }"
                @click="selectSeries(series)"
              >
                {{ series.name[locale?.code || 'en'] }}
              </div>
            </div>
          </div>
          
          <!-- Version Selector -->
          <div class="selector-wrapper" @click.stop="toggleVersionPicker">
            <div class="selector">
              <span class="selector-value">{{ textFor({ en: 'Select Versions', fr: 'Sélectionner des versions', ar: 'اختر الإصدارات' }) }} ({{ selectedVersions.length }})</span>
              <svg class="selector-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            </div>
            <div v-if="showVersionPicker" class="dropdown dropdown-large">
              <div class="dropdown-list">
                <div 
                  v-for="version in availableVersions" 
                  :key="version.id"
                  class="dropdown-item"
                  :class="{ active: isVersionSelected(version) }"
                  @click="toggleVersionSelection(version)"
                >
                  <span>{{ version.name[locale?.code || 'en'] }}</span>
                  <div class="checkbox" :class="{ checked: isVersionSelected(version) }"></div>
                </div>
              </div>
              <div class="dropdown-footer">
                <button class="btn-confirm" @click="confirmVersionSelection">{{ textFor({ en: 'Confirm', fr: 'Confirmer', ar: 'تأكيد' }) }}</button>
              </div>
            </div>
          </div>
          
          <button class="btn-order">{{ textFor({ en: 'Reserve Now', fr: 'Réserver', ar: 'احجز الآن' }) }}</button>
        </div>
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="page-container main-layout">
      <!-- Sticky Sidebar -->
      <div class="sidebar-wrapper">
        <div class="sidebar" :style="{ top: '80px' }">
          <div 
            v-for="category in categoryOrder" 
            :key="category"
            class="sidebar-item"
            :class="{ active: activeCategory === category }"
            @click="scrollToCategory(category)"
          >
            {{ getCategoryTitle(category) }}
          </div>
        </div>
      </div>
      
      <!-- Configuration Data -->
      <div class="content-wrapper">
        <!-- Sticky Header for Versions & Controls -->
        <div class="sticky-headers" ref="modelHeaderRef" :style="{ top: '0px' }">
          <div class="controls-row">
            <div class="control-switch" @click="toggleHideSame">
              <div class="switch" :class="{ active: hideSame }">
                <div class="switch-slider"></div>
              </div>
              <span>{{ textFor({ en: 'Hide Identical Items', fr: 'Masquer les éléments identiques', ar: 'إخفاء العناصر المتطابقة' }) }}</span>
            </div>
            
            <div class="controls-legend">
              <div class="legend-item">
                <img src="https://m.voyah.com.cn/front-money/vehicle-configuration/icons/i-bp.png" alt="" class="legend-icon">
                <span>{{ textFor({ en: 'Standard', fr: 'Standard', ar: 'قياسي' }) }}</span>
              </div>
              <div class="legend-item">
                <img src="https://m.voyah.com.cn/front-money/vehicle-configuration/icons/i-xz.png" alt="" class="legend-icon">
                <span>{{ textFor({ en: 'Optional', fr: 'Optionnel', ar: 'اختياري' }) }}</span>
              </div>
              <div class="legend-item">
                <img src="https://m.voyah.com.cn/front-money/vehicle-configuration/icons/i-bzp.png" alt="" class="legend-icon">
                <span>{{ textFor({ en: 'Not included', fr: 'Non inclus', ar: 'غير مشمول' }) }}</span>
              </div>
            </div>
          </div>
          
          <div class="version-columns">
            <div class="config-name-spacer"></div>
            <div class="version-col-header" v-for="version in displayVersions" :key="version.id">
              <div class="version-name">{{ version.name[locale?.code || 'en'] }}</div>
            </div>
          </div>
        </div>

        <!-- Data Tables -->
        <div class="config-tables">
          <div 
            v-for="category in categoryOrder" 
            :key="category"
            :id="'category-' + category"
            class="config-category-section"
          >
            <div class="category-header" :style="{ top: stickyTop }">
              <h3>{{ getCategoryTitle(category) }}</h3>
            </div>
            
            <div class="config-list">
              <div 
                v-for="(config, index) in getCategoryConfigs(category)" 
                :key="config.id"
                v-show="index < 2 || !hideSame || !isAllVersionsSame(category, config.id) || expandedCategories.includes(category)"
                class="config-row"
                :class="{ 'row-even': index % 2 === 0 }"
              >
                <div class="config-name-cell">
                  {{ config.name[locale?.code || 'en'] }}
                </div>
                <div class="config-value-cells">
                  <div 
                    v-for="version in displayVersions" 
                    :key="version.id"
                    class="config-value-cell"
                  >
                    <template v-if="!hideSame || !isValueSameAcrossVersions(category, config.id, version)">
                      <!-- Prioritize text values (like 5125, 2370, etc.) -->
                      <span v-if="getConfigValueText(version, config.id)" class="value-text">
                        {{ getConfigValueText(version, config.id) }}
                      </span>
                      
                      <!-- Fallback to icons for features without specific text values -->
                      <template v-else>
                        <img 
                          v-if="getConfigValueIcon(version, config.id) === 'standard'"
                          src="https://m.voyah.com.cn/front-money/vehicle-configuration/icons/i-bp.png" 
                          class="value-icon"
                        >
                        <img 
                          v-else-if="getConfigValueIcon(version, config.id) === 'optional'"
                          src="https://m.voyah.com.cn/front-money/vehicle-configuration/icons/i-xz.png" 
                          class="value-icon"
                        >
                        <img 
                          v-else-if="getConfigValueIcon(version, config.id) === 'not-included'"
                          src="https://m.voyah.com.cn/front-money/vehicle-configuration/icons/i-bzp.png" 
                          class="value-icon"
                        >
                        <span v-else class="value-text">—</span>
                      </template>
                    </template>
                    <span v-else class="value-hidden">—</span>
                  </div>
                </div>
              </div>

              <!-- Unmask / Show Hidden Items Button -->
              <div 
                v-if="hideSame && hasHiddenItems(category) && !expandedCategories.includes(category)" 
                class="show-hidden-row"
                @click="expandCategory(category)"
              >
                <div class="unmask-button">
                  <span>{{ textFor({ en: 'Show identical items', fr: 'Afficher les paramètres identiques', ar: 'إظهار المعلمات المتطابقة' }) }}</span>
                  <div class="unmask-icon">
                    <div class="line"></div>
                    <div class="line"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Footer Notes -->
        <div class="config-footer">
          <div class="info-block">
            <p>{{ textFor({ en: '*For more details on color and configuration, please refer to the official app.', fr: '*Pour plus de détails, veuillez vous référer à l\'application officielle.', ar: '*لمزيد من التفاصيل، يرجى الرجوع إلى التطبيق الرسمي.' }) }}</p>
            <p>{{ textFor({ en: 'Note: The actual configuration may differ. Please confirm with the dealer when purchasing.', fr: 'Remarque: La configuration réelle peut différer. Veuillez confirmer avec le concessionnaire lors de l\'achat.', ar: 'ملاحظة: قد يختلف التكوين الفعلي. يرجى التأكيد مع الوكيل عند الشراء.' }) }}</p>
          </div>
          

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'

// Props
interface Props {
  carModel?: string
}
const props = defineProps<Props>()

// Types
interface Configuration {
  id: string
  name: Record<string, string>
  category: string
  value?: string
  displayValue?: string | { text?: string; value?: string }
  description?: Record<string, string>
  icon?: 'standard' | 'optional' | 'not-included' | null
}

interface Version {
  id: string
  name: Record<string, string>
  price: Record<string, string> | string
  configurations?: Configuration[]
  configurationsByCategory?: Record<string, Configuration[]>
}

interface Series {
  id: string
  name: Record<string, string>
  versions?: Version[]
}

import { passionLConfigurations } from '~/data/passionL-configurations'
import { titanConfigurations } from '~/data/titan-configurations'
import { taishanBlackConfigurations } from '~/data/taishan-black-configurations'
import { taishanX8Configurations } from '~/data/taishan-x8-configurations'
import { freePlusConfigurations } from '~/data/free-plus-configurations'
import { zhiyinNewConfigurations } from '~/data/zhiyin-new-configurations'
import { free318Configurations } from '~/data/free-318-configurations'
import { zhiyinConfigurations } from '~/data/zhiyin-configurations'
import { dreamer2026Configurations } from '~/data/dreamer-2026-configurations'
import { dreamerChampionConfigurations } from '~/data/dreamer-champion-configurations'
import { dreamer2025Configurations } from '~/data/dreamer-2025-configurations'
import { dreamerMountainsConfigurations } from '~/data/dreamer-mountains-configurations'
import { dreamer2024Configurations } from '~/data/dreamer-2024-configurations'


import SiteHeader from '~/components/layout/SiteHeader.vue'
import { useSiteContent } from '~/composables/useSiteContent'

const { textFor, locale } = useSiteContent()

// State
const showSeriesPicker = ref(false)
const showVersionPicker = ref(false)
const hideSame = ref(false)
const activeCategory = ref('basic-params')
const currentSeries = ref<Series | null>(null)
const selectedVersions = ref<Version[]>([])
const availableSeries = ref<Series[]>([
  { ...passionLConfigurations as unknown as Series }, // Lantu Chasing Light L (Default)
  { ...titanConfigurations as unknown as Series },     // Lantu Taishan (Dreamer)
  { ...taishanBlackConfigurations as unknown as Series }, // Lantu Taishan Black Warrior
  { ...taishanX8Configurations as unknown as Series }, // Voyah Taishan X8
  { ...freePlusConfigurations as unknown as Series }, // Voyah FREE+
  { ...free318Configurations as unknown as Series }, // Voyah FREE 318
  { ...dreamer2026Configurations as unknown as Series }, // 2026 Voyah Dreamer
  { ...dreamerChampionConfigurations as unknown as Series }, // Voyah Dreamer Champion Edition
  { ...dreamer2025Configurations as unknown as Series }, // 2025 Voyah Dreamer
  { ...dreamerMountainsConfigurations as unknown as Series }, // Voyah Dreamer Mountains and Rivers
  { ...dreamer2024Configurations as unknown as Series }, // 2024 Voyah Dreamer
  { ...zhiyinNewConfigurations as unknown as Series }, // All-new Voyah Courage
  { ...zhiyinConfigurations as unknown as Series }, // Voyah Courage
])
const modelHeaderRef = ref<HTMLElement | null>(null)
const isDownloading = ref(false)
const expandedCategories = ref<string[]>([])

// Sticky positioning
const stickyTop = ref('140px')
const stickyStyleTop = ref('96px')

// Category order
const categoryOrder = ref<string[]>([
  'basic-params',
  'power',
  'chassis',
  'luxury-cabin',
  'seats',
  'smart-cockpit',
  'assisted-driving',
  'flagship-security',
  'exterior'
])

// Category titles
const getCategoryTitle = (category: string): string => {
  const titles: Record<string, Record<string, string>> = {
    'basic-params': { en: 'Basic Parameters', fr: 'Paramètres de base', ar: 'المعلمات الأساسية' },
    'power': { en: 'Flagship Power', fr: 'Puissance', ar: 'الطاقة' },
    'chassis': { en: 'Flagship Chassis', fr: 'Châssis', ar: 'الهيكل' },
    'luxury-cabin': { en: 'Luxury Cabin', fr: 'Cabine', ar: 'المقصورة' },
    'seats': { en: 'Seat Configuration', fr: 'Sièges', ar: 'المقاعد' },
    'smart-cockpit': { en: 'Smart Cockpit', fr: 'Cockpit', ar: 'قمرة القيادة' },
    'assisted-driving': { en: 'Assisted Driving', fr: 'Conduite assistée', ar: 'القيادة المساعدة' },
    'flagship-security': { en: 'Flagship Security', fr: 'Sécurité', ar: 'الأمان' },
    'exterior': { en: 'Exterior Configuration', fr: 'Extérieur', ar: 'الخارجي' }
  }
  return titles[category]?.[locale.value?.code || 'en'] || category
}

const availableVersions = computed<Version[]>(() => {
  return currentSeries.value?.versions || []
})

const displayVersions = computed<Version[]>(() => {
  if (selectedVersions.value.length === 0 && availableVersions.value.length > 0) {
    return availableVersions.value.slice(0, 2)
  }
  return selectedVersions.value
})

const getConfigValueText = (version: Version, configId: string): string => {
  const config = version.configurations?.find((c: Configuration) => c.id === configId)
  if (!config) return ''
  
  const currentLocale = locale.value?.code || 'en'
  const lang = currentLocale.toLowerCase()
  const langUpper = currentLocale.toUpperCase()
  
  let text = ''
  
  // 1. Try localized description
  if (config.description && typeof config.description === 'object') {
    text = config.description[lang] || config.description[langUpper] || config.description['en'] || ''
  }
  
  // 2. Try displayValue
  if (!text && config.displayValue) {
    if (typeof config.displayValue === 'object') {
      text = config.displayValue.text || config.displayValue.value || ''
    } else {
      text = config.displayValue
    }
  }
  
  // 3. Fallback to simple value
  if (!text && typeof config.value === 'string') {
    text = config.value
  }

  // Filter out "Included" / "Not included" type strings so they show as icons
  const booleanWords = [
    'inclus', 'non inclus', 'included', 'not included', 'standard', 
    'مضمن', 'غير مضمن', 'inclus.', 'non inclus.'
  ]
  if (text && booleanWords.includes(text.toLowerCase().trim())) {
    return ''
  }
  
  return text
}

const getConfigValueIcon = (version: Version, configId: string): string | null => {
  const config = version.configurations?.find((c: Configuration) => c.id === configId)
  return config?.icon || null
}

const isValueSameAcrossVersions = (category: string, configId: string, currentVersion: Version): boolean => {
  if (displayVersions.value.length <= 1) return false
  const currentText = getConfigValueText(currentVersion, configId)
  const currentIcon = getConfigValueIcon(currentVersion, configId)
  const firstVersion = displayVersions.value[0]
  const firstText = getConfigValueText(firstVersion, configId)
  const firstIcon = getConfigValueIcon(firstVersion, configId)
  return currentText === firstText && currentIcon === firstIcon
}

const getCategoryConfigs = (category: string): Configuration[] => {
  if (!displayVersions.value.length) return []
  const firstVersion = displayVersions.value[0]
  if (!firstVersion.configurationsByCategory) return []
  return firstVersion.configurationsByCategory[category] || []
}

const isVersionSelected = (version: Version): boolean => {
  return selectedVersions.value.some((v: Version) => v.id === version.id)
}

const toggleVersionSelection = (version: Version): void => {
  const index = selectedVersions.value.findIndex((v: Version) => v.id === version.id)
  if (index === -1) {
    if (selectedVersions.value.length < 4) {
      selectedVersions.value.push(version)
    }
  } else {
    if (selectedVersions.value.length > 1) {
      selectedVersions.value.splice(index, 1)
    }
  }
}

const confirmVersionSelection = (): void => { 
  showVersionPicker.value = false 
}

const toggleSeriesPicker = (): void => { 
  showSeriesPicker.value = !showSeriesPicker.value
  showVersionPicker.value = false 
}

const toggleVersionPicker = (): void => { 
  showVersionPicker.value = !showVersionPicker.value
  showSeriesPicker.value = false 
}

const toggleHideSame = (): void => { 
  hideSame.value = !hideSame.value
  // Reset expanded categories when toggling
  expandedCategories.value = []
}

const isAllVersionsSame = (category: string, configId: string): boolean => {
  if (displayVersions.value.length <= 1) return true
  const firstVersion = displayVersions.value[0]
  const firstText = getConfigValueText(firstVersion, configId)
  const firstIcon = getConfigValueIcon(firstVersion, configId)
  
  return displayVersions.value.every(v => {
    return getConfigValueText(v, configId) === firstText && 
           getConfigValueIcon(v, configId) === firstIcon
  })
}

const hasHiddenItems = (category: string): boolean => {
  const configs = getCategoryConfigs(category)
  return configs.some(c => isAllVersionsSame(category, c.id))
}

const expandCategory = (category: string): void => {
  if (!expandedCategories.value.includes(category)) {
    expandedCategories.value.push(category)
  }
}

const selectSeries = (series: any): void => {
  // Deep copy to avoid mutating original data
  const seriesCopy = JSON.parse(JSON.stringify(series))
  currentSeries.value = seriesCopy
  
  if (seriesCopy.versions && seriesCopy.versions.length) {
    // If the data is in the "new" category-based format, transform it
    if (seriesCopy.categories) {
      for (const version of seriesCopy.versions) {
        version.configurations = []
        for (const cat of seriesCopy.categories) {
          for (const param of cat.params) {
            const val = param.values[version.id]
            if (val !== undefined) {
              version.configurations.push({
                id: param.id,
                name: param.name,
                category: cat.id,
                displayValue: val,
                // Handle standard/optional icons
                icon: val === 'standard' ? 'standard' : (val === 'optional' ? 'optional' : (val === '-' ? 'not-included' : null))
              })
            }
          }
        }
      }
    }

    selectedVersions.value = seriesCopy.versions.slice(0, 2)
    
    // Re-populate categories for the new series
    for (const version of seriesCopy.versions) {
      version.configurationsByCategory = {}
      if (version.configurations) {
        for (const config of version.configurations) {
          if (!version.configurationsByCategory[config.category]) {
            version.configurationsByCategory[config.category] = []
          }
          version.configurationsByCategory[config.category].push(config)
        }
      }
    }
  }
  
  showSeriesPicker.value = false
  
  // Update sticky positions after state change
  nextTick(() => {
    updateStickyPositions()
  })
}

const scrollToCategory = (category: string): void => {
  activeCategory.value = category
  const element = document.getElementById(`category-${category}`)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const updateStickyPositions = (): void => {
  if (modelHeaderRef.value) {
    const headerHeight = modelHeaderRef.value.offsetHeight
    const siteHeaderHeight = 0 // Container sticks at 0
    // Content is actually at 80px due to padding-top
    stickyTop.value = `${headerHeight}px`
  }
}

const handleScroll = (): void => {
  const headerHeight = modelHeaderRef.value?.offsetHeight || 128
  const siteHeaderHeight = 0
  // threshold matches where the category header sticks, with a small buffer
  const scrollThreshold = window.scrollY + headerHeight + 50
  
  let currentCategory = categoryOrder.value[0]
  for (let i = categoryOrder.value.length - 1; i >= 0; i--) {
    const category = categoryOrder.value[i]
    const element = document.getElementById(`category-${category}`)
    if (element) {
      // Get absolute position relative to document
      const elementTop = element.getBoundingClientRect().top + window.scrollY
      if (scrollThreshold >= elementTop) {
        currentCategory = category
        break
      }
    }
  }
  
  if (activeCategory.value !== currentCategory) {
    activeCategory.value = currentCategory
  }
}

const downloadConfiguration = async (): Promise<void> => { 
  if (!currentSeries.value || !displayVersions.value.length || isDownloading.value) return
  isDownloading.value = true
  try {
    const htmlContent = generateConfigurationHTML()
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    const filename = `voyah-configuration-${Date.now()}.html`
    link.setAttribute('href', url)
    link.setAttribute('download', filename)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  } catch (error) {
    console.error('Error:', error)
  } finally {
    setTimeout(() => { isDownloading.value = false }, 500)
  }
}

const generateConfigurationHTML = (): string => {
  const currentLocale = locale.value?.code || 'en'
  const seriesName = currentSeries.value?.name[currentLocale] || 'Lantu Chasing Light L'
  
  // Generate category navigation
  const categoryNavigation = categoryOrder.value.map((category: string, index: number) => {
    const categoryId = category.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()
    const isActive = index === 0 ? 'model_list_type_item_active' : ''
    return '<div class="model_list_type_item ' + isActive + '" data-category="' + categoryId + '" onclick="showCategory(\'' + categoryId + '\')">' + getCategoryTitle(category) + '</div>'
  }).join('')
  
  // Generate category modules
  const categoryModules = categoryOrder.value.map((category: string, index: number) => {
    const categoryId = category.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()
    const isActive = index === 0 ? 'active' : ''
    const configs = getCategoryConfigs(category)
    
    if (!configs.length) return ''
    
    const configItems = configs.map((config: Configuration) => {
      const icon = getConfigValueIcon(displayVersions.value[0], config.id)
      const iconSrc = icon === '✓' ? 'https://m.voyah.com.cn/front-money/vehicle-configuration/icons/i-bp.png' :
                     icon === '○' ? 'https://m.voyah.com.cn/front-money/vehicle-configuration/icons/i-xz.png' :
                     'https://m.voyah.com.cn/front-money/vehicle-configuration/icons/i-bzp.png'
      
      return '<div class="module-content_list_item"><div class="model_code_name"><img src="' + iconSrc + '" alt="" class="i-special-icon"><span>' + (config.name[currentLocale] || config.name.en) + '</span></div></div>'
    }).join('')
    
    return '<div class="module-content ' + isActive + '" id="category-' + categoryId + '"><div class="module-content_fixed">' + getCategoryTitle(category) + '</div><div class="module-content_list no-auto"><div class="content_list_scroll">' + configItems + '</div></div></div>'
  }).join('')
  
  // Simple HTML generation without complex CSS to avoid parsing issues
  return '<!DOCTYPE html><html lang="' + currentLocale + '"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>' + textFor({ en: 'Configuration Details', fr: 'Détails de configuration', ar: 'تفاصيل التكوين' }) + ' - ' + seriesName + '</title><style>body{font-family:Arial,sans-serif;margin:20px}</style></head><body><h1>' + textFor({ en: 'Configuration Details', fr: 'Détails de configuration', ar: 'تفاصيل التكوين' }) + '</h1><h2>' + seriesName + '</h2><div>' + categoryNavigation + '</div><div>' + categoryModules + '</div></body></html>'
}

const getLegendText = (): string => {
  const currentLocale = locale.value?.code || 'en'
  if (currentLocale === 'fr') return 'Légende: ✓ Standard, ○ Optionnel, ✗ Non inclus'
  if (currentLocale === 'ar') return 'إرشادات: ✓ قياسي، ○ اختياري، ✗ غير مشمول'
  return 'Legend: ✓ Standard equipment, ○ Optional equipment, ✗ Not included'
}

const initData = async (): Promise<void> => {
  // Find the requested series or default to passion-L (the first one now)
  const targetId = props.carModel || 'passion-L'
  const series = availableSeries.value.find(s => s.id === targetId) || availableSeries.value[0]
  
  if (series) {
    // We call selectSeries to handle the complex transformation logic we just added
    selectSeries(series)
  }
  
  await nextTick()
  updateStickyPositions()
}

const closeDropdowns = (e: Event): void => {
  const target = e.target as Element
  if (!target.closest('.selector-wrapper')) {
    showSeriesPicker.value = false
    showVersionPicker.value = false
  }
}

let scrollTimeout: ReturnType<typeof setTimeout> | null = null
const throttledHandleScroll = (): void => {
  if (scrollTimeout) clearTimeout(scrollTimeout)
  scrollTimeout = setTimeout(() => handleScroll(), 10)
}

// Watch for carModel changes
watch(() => props.carModel, async () => {
  await initData()
})

onMounted(() => {
  initData()
  window.addEventListener('scroll', throttledHandleScroll)
  document.addEventListener('click', closeDropdowns)
  window.addEventListener('resize', updateStickyPositions)
})

onUnmounted(() => {
  window.removeEventListener('scroll', throttledHandleScroll)
  document.removeEventListener('click', closeDropdowns)
  window.removeEventListener('resize', updateStickyPositions)
  if (scrollTimeout) clearTimeout(scrollTimeout)
})
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.configuration-detail-page {
  min-height: 100vh;
  background: #fff;
  font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #333;
}

.page-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
}

/* Layout */
.configuration-detail-page {
  position: relative;
}

/* Hero Area */
.config-hero {
  background: #f8f9fa;
  padding: 60px 0;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 40px;
  position: relative;
  z-index: 10; /* Very low to ensure SiteHeader (1000) is always on top */
}

.config-hero .page-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.config-title {
  font-size: 32px;
  font-weight: 600;
  color: #111;
  margin: 0;
  letter-spacing: -0.5px;
}

.config-actions {
  display: flex;
  gap: 16px;
  align-items: center;
}

.selector-wrapper {
  position: relative;
}

.selector {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 20px;
  background: #fff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  cursor: pointer;
  min-width: 220px;
  transition: all 0.2s ease;
}

.selector:hover {
  border-color: #111;
}

.selector-value {
  font-size: 15px;
  font-weight: 500;
  color: #111;
}

.selector-arrow {
  width: 16px;
  height: 16px;
  color: #666;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.selector-wrapper:hover .selector-arrow {
  transform: translateY(2px);
}

.dropdown {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  z-index: 500;
  overflow: hidden;
}

.dropdown-large {
  width: 300px;
  right: 0;
  left: auto;
}

.dropdown-list {
  max-height: 320px;
  overflow-y: auto;
}

.dropdown-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  transition: all 0.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.dropdown-item:hover {
  background: #f8f9fa;
  color: #406a70;
  padding-left: 24px;
}

.dropdown-item.active {
  color: #406a70;
  font-weight: 500;
  background: #f0f4f5;
}

.checkbox {
  width: 20px;
  height: 20px;
  border: 1.5px solid #dcdcdc;
  border-radius: 4px;
  position: relative;
  transition: all 0.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.checkbox.checked {
  background: #406a70;
  border-color: #406a70;
}

.checkbox.checked::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 2px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.dropdown-footer {
  padding: 16px 20px;
  border-top: 1px solid #eaeaea;
  background: #fcfcfc;
}

.btn-confirm {
  width: 100%;
  padding: 14px;
  background: #111;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.btn-confirm:hover {
  background: #333;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.btn-confirm:hover {
  background: #333;
}

.btn-order {
  padding: 12px 32px;
  background: #406a70;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
  transition: background 0.2s;
}

.btn-order:hover {
  background: #2d4f54;
}

/* Main Layout */
.main-layout {
  display: flex;
  gap: 40px;
  position: relative;
  align-items: stretch;
}

/* Sidebar */
.sidebar-wrapper {
  width: 180px;
  flex-shrink: 0;
}

.sidebar {
  position: sticky;
  padding-bottom: 40px;
}

.sidebar-item {
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
  color: #666;
  border-left: 2px solid transparent;
  transition: all 0.2s ease;
  margin-bottom: 4px;
}

.sidebar-item:hover {
  color: #111;
  background: #f9f9f9;
}

.sidebar-item.active {
  color: #406a70;
  border-left-color: #406a70;
  font-weight: 600;
  background: transparent;
}

/* Content Area */
.content-wrapper {
  flex: 1;
  min-width: 0;
  padding-bottom: 100px;
}

/* Sticky Headers */
.sticky-headers {
  position: sticky;
  top: 0px;
  background: #ffffff;
  z-index: 5; /* Very low to be below SiteHeader and hero dropdowns */
  padding-top: 80px; /* Shields the site header area when sticky */
  margin-top: -80px; /* Pulls content back up to align with sidebar in normal view */
  padding-bottom: 8px;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 16px;
  pointer-events: none; /* Allow clicks to pass through the 80px padding area to the header */
}

.controls-row, .version-columns {
  pointer-events: auto; /* Re-enable pointer events for the actual controls */
}

.controls-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 12px;
}

.control-switch {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  font-size: 13px;
  color: #666;
}

.switch {
  width: 36px;
  height: 20px;
  background: #e0e0e0;
  border-radius: 10px;
  position: relative;
  transition: background 0.3s;
}

.switch.active {
  background: #406a70;
}

.switch-slider {
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: transform 0.3s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.switch.active .switch-slider {
  transform: translateX(16px);
}

.controls-legend {
  display: flex;
  gap: 24px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #666;
}

.legend-icon {
  width: 16px;
  height: 16px;
}

.version-columns {
  display: flex;
  align-items: flex-end;
}

.config-name-spacer {
  width: 240px;
  flex-shrink: 0;
}

.version-col-header {
  flex: 1;
  text-align: center;
  padding: 0 12px;
}

.version-name {
  font-size: 16px;
  font-weight: 600;
  color: #111;
  margin-bottom: 8px;
}

/* Config Data */
.config-category-section {
  margin-bottom: 40px;
  scroll-margin-top: 220px; /* Accounts for site header + sticky version header */
}

.category-header {
  position: sticky;
  z-index: 90;
  background: #ffffff;
  padding-top: 16px;
  margin-bottom: 24px;
}

.category-header h3 {
  font-size: 20px;
  font-weight: 600;
  color: #111;
  margin: 0;
  padding-bottom: 12px;
  border-bottom: 1px solid #111;
}

.config-list {
  display: flex;
  flex-direction: column;
}

.config-row {
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid #f5f5f5;
  transition: background 0.2s;
}

.config-row:hover {
  background: #fcfcfc;
}

.row-even {
  background: #fafafa;
}

.config-name-cell {
  width: 240px;
  flex-shrink: 0;
  padding: 16px 20px 16px 0;
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: center;
}

.config-value-cells {
  flex: 1;
  display: flex;
}

.config-value-cell {
  flex: 1;
  padding: 16px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-left: 1px solid #f5f5f5;
}

.value-icon {
  width: 20px;
  height: 20px;
}

.value-text {
  font-size: 14px;
  color: #555;
}

.value-hidden {
  color: #ccc;
  font-weight: 300;
}

/* Unmask Button Styles */
.show-hidden-row {
  padding: 24px 0;
  display: flex;
  justify-content: center;
  cursor: pointer;
  background: #fff;
  transition: background 0.2s;
}

.show-hidden-row:hover {
  background: #f9f9f9;
}

.unmask-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: #666;
  font-size: 14px;
}

.unmask-icon {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.unmask-icon .line {
  width: 24px;
  height: 1px;
  background: #ccc;
}

/* Footer */
.config-footer {
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 24px;
}

.info-block {
  flex: 1;
  min-width: 300px;
}

.info-block p {
  font-size: 12px;
  color: #888;
  margin: 0 0 8px 0;
  line-height: 1.5;
}

.btn-download {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: #f8f9fa;
  color: #111;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-download:hover:not(:disabled) {
  background: #111;
  color: white;
  border-color: #111;
}



.download-icon {
  width: 18px;
  height: 18px;
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(0,0,0,0.1);
  border-top-color: currentColor;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Responsive */
@media (max-width: 992px) {
  .main-layout { flex-direction: column; gap: 20px; }
  .sidebar-wrapper { width: 100%; }
  .sidebar {
    position: static;
    display: flex;
    overflow-x: auto;
    padding-bottom: 12px;
    border-bottom: 1px solid #eaeaea;
  }
  .sidebar-item {
    white-space: nowrap;
    border-left: none;
    border-bottom: 2px solid transparent;
  }
  .sidebar-item.active {
    border-left-color: transparent;
    border-bottom-color: #406a70;
  }
  .config-name-spacer { width: 140px; }
  .config-name-cell { width: 140px; }
}

@media (max-width: 768px) {
  .page-container { padding: 0 20px; }
  .config-hero .page-container { flex-direction: column; align-items: flex-start; }
  .controls-row { flex-direction: column; align-items: flex-start; gap: 16px; }
}
</style>