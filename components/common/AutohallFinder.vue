<template>
  <div class="autohall-finder">
    <div class="finder-header">
      <h2 class="finder-title">{{ textFor({ en: 'Find Our Autohalls', fr: 'Trouver nos Autohalls', ar: 'Find Our Autohalls' }) }}</h2>
      <p class="finder-subtitle">{{ textFor({ en: 'Locate your nearest Voyah autohall for sales, service, and support', fr: 'Localisez votre autohall Voyah le plus proche pour les ventes, le service et le soutien', ar: 'حدد موقع صالة العرض Voyah الأقرب للمبيعات والخدمة والدعم' }) }}</p>
    </div>

    <!-- Search and Filters -->
    <div class="finder-filters">
      <div class="search-section">
        <div class="search-input-wrapper">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/>
            <path d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2"/>
          </svg>
          <input
            v-model="searchQuery"
            type="text"
            :placeholder="textFor({ en: 'Search by name, city, or region...', fr: 'Rechercher par nom, ville ou région...', ar: 'ابحث بالاسم أو المدينة أو المنطقة...' })"
            class="search-input"
            @input="onSearchInput"
          />
        </div>
      </div>

      <div class="filter-section">
        <div class="filter-group">
          <label class="filter-label">{{ textFor({ en: 'Region', fr: 'Région', ar: 'المنطقة' }) }}</label>
          <select v-model="selectedRegion" @change="onRegionChange" class="filter-select">
            <option value="">{{ textFor({ en: 'All Regions', fr: 'Toutes les régions', ar: 'كل المناطق' }) }}</option>
            <option v-for="region in regions" :key="region" :value="region">
              {{ region }}
            </option>
          </select>
        </div>

        <div class="filter-group">
          <label class="filter-label">{{ textFor({ en: 'City', fr: 'Ville', ar: 'المدينة' }) }}</label>
          <select v-model="selectedCity" @change="onCityChange" class="filter-select" :disabled="!selectedRegion">
            <option value="">{{ textFor({ en: 'All Cities', fr: 'Toutes les villes', ar: 'كل المدن' }) }}</option>
            <option v-for="city in cities" :key="city" :value="city">
              {{ city }}
            </option>
          </select>
        </div>

        <div class="filter-group">
          <label class="filter-label">{{ textFor({ en: 'Type', fr: 'Type', ar: 'النوع' }) }}</label>
          <select v-model="selectedType" @change="onTypeChange" class="filter-select">
            <option value="">{{ textFor({ en: 'All Types', fr: 'Tous les types', ar: 'كل الأنواع' }) }}</option>
            <option value="showroom">{{ textFor({ en: 'Showroom', fr: 'Salle d\'exposition', ar: 'صالة العرض' }) }}</option>
            <option value="service">{{ textFor({ en: 'Service', fr: 'Service', ar: 'الخدمة' }) }}</option>
            <option value="both">{{ textFor({ en: 'Showroom & Service', fr: 'Salle d\'exposition et Service', ar: 'صالة العرض والخدمة' }) }}</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Results Count -->
    <div class="results-header">
      <span class="results-count">{{ filteredAutohalls.length }} {{ textFor({ en: 'autohalls found', fr: 'autohalls trouvés', ar: 'صالة عرض تم العثور عليها' }) }}</span>
      <div class="view-toggle">
        <button
          @click="viewMode = 'grid'"
          :class="['view-btn', { active: viewMode === 'grid' }]"
          :title="textFor({ en: 'Grid View', fr: 'Vue en grille', ar: 'عرض الشبكة' })"
        >
          <svg viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="7" height="7" stroke="currentColor" stroke-width="2"/>
            <rect x="14" y="3" width="7" height="7" stroke="currentColor" stroke-width="2"/>
            <rect x="14" y="14" width="7" height="7" stroke="currentColor" stroke-width="2"/>
            <rect x="3" y="14" width="7" height="7" stroke="currentColor" stroke-width="2"/>
          </svg>
        </button>
        <button
          @click="viewMode = 'list'"
          :class="['view-btn', { active: viewMode === 'list' }]"
          :title="textFor({ en: 'List View', fr: 'Vue en liste', ar: 'عرض القائمة' })"
        >
          <svg viewBox="0 0 24 24" fill="none">
            <line x1="8" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="2"/>
            <line x1="8" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="2"/>
            <line x1="8" y1="18" x2="21" y2="18" stroke="currentColor" stroke-width="2"/>
            <line x1="3" y1="6" x2="3.01" y2="6" stroke="currentColor" stroke-width="2"/>
            <line x1="3" y1="12" x2="3.01" y2="12" stroke="currentColor" stroke-width="2"/>
            <line x1="3" y1="18" x2="3.01" y2="18" stroke="currentColor" stroke-width="2"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Results -->
    <div class="finder-results">
      <!-- Grid View -->
      <div v-if="viewMode === 'grid'" class="results-grid">
        <AutohallCard
          v-for="autohall in filteredAutohalls"
          :key="autohall.id"
          :autohall="autohall"
          :featured="autohall.id === featuredAutohallId"
          @directions="onDirections"
          @call="onCall"
          @website="onWebsite"
        />
      </div>

      <!-- List View -->
      <div v-else class="results-list">
        <div
          v-for="autohall in filteredAutohalls"
          :key="autohall.id"
          class="list-item"
          :class="{ featured: autohall.id === featuredAutohallId }"
        >
          <div class="list-item-content">
            <div class="list-item-header">
              <h3>{{ autohall.name }}</h3>
              <span class="type-badge" :class="autohall.type">
                {{ getTypeLabel(autohall.type) }}
              </span>
            </div>
            <div class="list-item-info">
              <div class="info-row">
                <svg class="info-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" stroke="currentColor" stroke-width="2"/>
                </svg>
                <span>{{ autohall.address }}</span>
              </div>
              <div class="info-row">
                <svg class="info-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="2"/>
                </svg>
                <a :href="`tel:${autohall.phone.replace(/\s/g, '')}`">{{ autohall.phone }}</a>
              </div>
              <div class="info-row">
                <svg class="info-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"/>
                </svg>
                <a :href="`mailto:${autohall.email}`">{{ autohall.email }}</a>
              </div>
            </div>
          </div>
          <div class="list-item-actions">
            <button @click="onDirections(autohall)" class="action-btn directions">
              {{ textFor({ en: 'Get Directions', fr: 'Obtenir les directions', ar: 'الحصول على الاتجاهات' }) }}
            </button>
            <button @click="onCall(autohall)" class="action-btn call">
              {{ textFor({ en: 'Call', fr: 'Appeler', ar: 'Appeler' }) }}
            </button>
          </div>
        </div>
      </div>

      <!-- No Results -->
      <div v-if="filteredAutohalls.length === 0" class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3>{{ textFor({ en: 'No Autohalls Found', fr: 'Aucun autohall trouvé', ar: 'لم يتم العثور على صالات العرض' }) }}</h3>
        <p>{{ textFor({ en: 'Try adjusting your search criteria or filters', fr: 'Essayez d\'ajuster vos critères de recherche ou vos filtres', ar: 'حاول تعديل معايير البحث أو الفلاتر' }) }}</p>
        <button @click="resetFilters" class="reset-btn">
          {{ textFor({ en: 'Reset Filters', fr: 'Réinitialiser les filtres', ar: 'إعادة تعيين الفلاتر' }) }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { autohallsData, getAllRegions, getAllCities } from '~/data/autohalls'
import { useSiteContent } from '~/composables/useSiteContent'

// Import textFor function for translations
const { textFor } = useSiteContent()

interface Props {
  featuredAutohallId?: string
}

const props = withDefaults(defineProps<Props>(), {
  featuredAutohallId: ''
})

const emit = defineEmits<{
  directions: [autohall: any]
  call: [autohall: any]
  website: [autohall: any]
}>()

const { t } = useI18n()

// Reactive data
const searchQuery = ref('')
const selectedRegion = ref('')
const selectedCity = ref('')
const selectedType = ref('')
const viewMode = ref<'grid' | 'list'>('grid')

// Computed properties
const regions = computed(() => getAllRegions())
const cities = computed(() => {
  if (!selectedRegion.value) return getAllCities()
  return autohallsData
    .filter(autohall => autohall.region === selectedRegion.value)
    .map(autohall => autohall.city)
})

const filteredAutohalls = computed(() => {
  let filtered = autohallsData

  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(autohall =>
      autohall.name.toLowerCase().includes(query) ||
      autohall.address.toLowerCase().includes(query) ||
      autohall.city.toLowerCase().includes(query) ||
      autohall.region.toLowerCase().includes(query)
    )
  }

  // Region filter
  if (selectedRegion.value) {
    filtered = filtered.filter(autohall => autohall.region === selectedRegion.value)
  }

  // City filter
  if (selectedCity.value) {
    filtered = filtered.filter(autohall => autohall.city === selectedCity.value)
  }

  // Type filter
  if (selectedType.value) {
    filtered = filtered.filter(autohall => autohall.type === selectedType.value)
  }

  return filtered
})

// Methods
const getTypeLabel = (type: string) => {
  const labels = {
    showroom: textFor({ en: 'Showroom', fr: 'Salle d\'exposition', ar: 'Salle d\'exposition' }),
    service: textFor({ en: 'Service', fr: 'Service', ar: 'Service' }),
    both: textFor({ en: 'Showroom & Service', fr: 'Salle d\'exposition et Service', ar: 'Salle d\'exposition et Service' })
  }
  return labels[type as keyof typeof labels] || type
}

const onSearchInput = () => {
  // Search is handled by computed property
}

const onRegionChange = () => {
  selectedCity.value = ''
}

const onCityChange = () => {
  // City change is handled by computed property
}

const onTypeChange = () => {
  // Type change is handled by computed property
}

const onDirections = (autohall: any) => {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${autohall.coordinates.lat},${autohall.coordinates.lng}`
  window.open(url, '_blank')
  emit('directions', autohall)
}

const onCall = (autohall: any) => {
  window.open(`tel:${autohall.phone.replace(/\s/g, '')}`, '_self')
  emit('call', autohall)
}

const onWebsite = (autohall: any) => {
  if (autohall.website) {
    window.open(autohall.website, '_blank')
    emit('website', autohall)
  }
}

const resetFilters = () => {
  searchQuery.value = ''
  selectedRegion.value = ''
  selectedCity.value = ''
  selectedType.value = ''
}
</script>

<style scoped>
.autohall-finder {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.finder-header {
  text-align: center;
  margin-bottom: 40px;
}

.finder-title {
  font-size: 32px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
}

.finder-subtitle {
  font-size: 18px;
  color: #64748b;
  margin: 0;
}

.finder-filters {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
}

.search-section {
  margin-bottom: 20px;
}

.search-input-wrapper {
  position: relative;
  max-width: 500px;
  margin: 0 auto;
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: #9ca3af;
}

.search-input {
  width: 100%;
  padding: 12px 16px 12px 48px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.2s ease;
}

.search-input:focus {
  outline: none;
  border-color: #2563eb;
}

.filter-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.filter-group {
  display: flex;
  flex-direction: column;
}

.filter-label {
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 6px;
}

.filter-select {
  padding: 8px 12px;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.filter-select:focus {
  outline: none;
  border-color: #2563eb;
}

.filter-select:disabled {
  background: #f9fafb;
  color: #9ca3af;
  cursor: not-allowed;
}

.results-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.results-count {
  font-size: 16px;
  color: #64748b;
}

.view-toggle {
  display: flex;
  gap: 4px;
}

.view-btn {
  padding: 8px;
  border: 1px solid #e5e7eb;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.view-btn:first-child {
  border-radius: 6px 0 0 6px;
}

.view-btn:last-child {
  border-radius: 0 6px 6px 0;
}

.view-btn.active {
  background: #2563eb;
  border-color: #2563eb;
  color: white;
}

.view-btn svg {
  width: 16px;
  height: 16px;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;
}

.results-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.list-item {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;
}

.list-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.list-item.featured {
  border: 2px solid #2563eb;
}

.list-item-content {
  flex: 1;
}

.list-item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.list-item-header h3 {
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
}

.type-badge {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.type-badge.showroom {
  background: #dbeafe;
  color: #1e40af;
}

.type-badge.service {
  background: #dcfce7;
  color: #166534;
}

.type-badge.both {
  background: #fef3c7;
  color: #92400e;
}

.list-item-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.info-row {
  display: flex;
  align-items: center;
  color: #64748b;
  font-size: 14px;
}

.info-icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  flex-shrink: 0;
}

.info-row a {
  color: #2563eb;
  text-decoration: none;
}

.info-row a:hover {
  text-decoration: underline;
}

.list-item-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 20px;
}

.action-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.action-btn.directions {
  background: #2563eb;
  color: white;
}

.action-btn.directions:hover {
  background: #1d4ed8;
}

.action-btn.call {
  background: #10b981;
  color: white;
}

.action-btn.call:hover {
  background: #059669;
}

.no-results {
  text-align: center;
  padding: 60px 20px;
  color: #64748b;
}

.no-results-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.no-results h3 {
  font-size: 24px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
}

.no-results p {
  font-size: 16px;
  margin-bottom: 24px;
}

.reset-btn {
  padding: 12px 24px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
}

.reset-btn:hover {
  background: #1d4ed8;
}

@media (max-width: 768px) {
  .autohall-finder {
    padding: 16px;
  }
  
  .filter-section {
    grid-template-columns: 1fr;
  }
  
  .results-grid {
    grid-template-columns: 1fr;
  }
  
  .list-item {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .list-item-actions {
    flex-direction: row;
    margin-left: 0;
    margin-top: 16px;
    width: 100%;
  }
  
  .action-btn {
    flex: 1;
  }
}
</style>
