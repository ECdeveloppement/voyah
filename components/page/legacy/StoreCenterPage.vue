<template>
  <div class="map-page">
    <SiteHeader />

    <div class="page-container miniPage">
      <div id="mapView" ref="mapRef" class="map-container" />

      <!-- Wrapper pour les cartes flottantes -->
      <div class="cards-wrapper">
        <!-- Ligne 1 : Sélectionner la région et Sélectionner le type -->
        <div class="cards-row">
          <!-- Card 1 : Sélectionner la région -->
          <div class="floating-card card-region">
            <div class="card-label">{{ t.selectRegion }}</div>
            <div class="select-bar-select" :class="{ open: openSelect === 'region' }" @click="toggleSelect('region')">
              <div class="select-bar-select-value">{{ selectedRegionLabel }}</div>
              <i class="select-bar-select-icon" />
              <div class="search-content" @click.stop>
                <div class="search-top">
                  <div class="search-label">{{ t.quickSearch }}</div>
                  <input v-model="regionSearch" :placeholder="t.searchPlaceholder" class="input" />
                </div>
                <div class="search-bottom">
                  <div
                    v-for="letter in availableLetters"
                    :key="letter"
                    class="search-bottom__item"
                    :class="{ active: activeLetter === letter }"
                    @click="activeLetter = letter"
                  >{{ letter }}</div>
                </div>
                <div class="search-wrapper">
                  <div class="city-area">
                    <div class="city-choose header-row">
                      <div class="first-chat"></div>
                      <div class="province">{{ t.province }}</div>
                      <div class="city">{{ t.city }}</div>
                    </div>
                    <div class="city-choose" @click="selectRegion(null)">
                      <div class="first-chat">#</div>
                      <div class="province province_real" :class="{ selected: selectedRegion === null }">{{ t.allRegions }}</div>
                      <div class="city city_real"></div>
                    </div>
                    <template v-for="group in filteredRegionGroups" :key="group.letter + group.province">
                      <div class="city-choose">
                        <div class="first-chat">{{ group.letter }}</div>
                        <div class="province province_real">{{ group.province }}</div>
                        <div class="city city_real">
                          <div
                            v-for="city in group.cities"
                            :key="city"
                            class="city-item"
                            :class="{ selected: selectedRegion === city }"
                            @click="selectRegion(city)"
                          >{{ city }}</div>
                        </div>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 2 : Sélectionner le type -->
          <div class="floating-card card-type">
            <div class="card-label">{{ t.selectType }}</div>
            <div class="select-bar-select" :class="{ open: openSelect === 'type' }" @click="toggleSelect('type')">
              <div class="select-bar-select-value">{{ selectedTypeLabel }}</div>
              <i class="select-bar-select-icon" />
              <div class="select-bar-select-nav" @click.stop>
                <div
                  v-for="opt in serviceTypeOptions"
                  :key="opt.value"
                  class="select-bar-select-nav-item"
                  :class="{ active: selectedType === opt.value }"
                  @click="selectType(opt)"
                >{{ opt.label }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Ligne 2 : Statistiques -->
        <div class="cards-row">
          <!-- Card 3 : Statistiques -->
          <div class="floating-card card-stats">
            <div class="network-title">{{ t.networkTitle }}</div>
            <div class="stats-row">
              <div class="stat-item">
                <div class="stat-label">{{ t.salesStores }}</div>
                <div class="stat-number">{{ visibleSalesCount }}</div>
              </div>
              <div class="stat-divider" />
              <div class="stat-item">
                <div class="stat-label">{{ t.deliveryStores }}</div>
                <div class="stat-number">{{ visibleDeliveryCount }}</div>
              </div>
            </div>
            <div class="legend">
              <div class="legend-item">
                <span class="legend-dot legend-dot--sales"></span>
                <span>{{ t.salesStores }}</span>
              </div>
              <div class="legend-item">
                <span class="legend-dot legend-dot--delivery"></span>
                <span>{{ t.deliveryStores }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Zoom tools -->
      <div class="tools">
        <button type="button" class="tool-btn" @click="zoomIn">+</button>
        <div class="line" />
        <button type="button" class="tool-btn" @click="zoomOut">−</button>
        <div class="line" />
        <button type="button" class="tool-btn" @click="resetView">◎</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import SiteHeader from '~/components/layout/SiteHeader.vue'

const route = useRoute()
const lang = computed(() => {
  const code = Array.isArray(route.params.locale) ? route.params.locale[0] : route.params.locale
  return code === 'fr' || code === 'ar' ? code : 'en'
})

const copy = {
  en: {
    allRegions: 'All regions', allServiceTypes: 'All service types',
    salesStoresType: 'Sales stores', deliveryStoresType: 'Delivery stores',
    networkTitle: 'Voyah Tunisia service network',
    salesStores: 'Sales stores', deliveryStores: 'Delivery stores',
    quickSearch: 'Quick search', searchPlaceholder: 'Enter city name',
    province: 'Governorate', city: 'City',
    selectRegion: 'Select region', selectType: 'Select type',
  },
  fr: {
    allRegions: 'Toutes les régions', allServiceTypes: 'Tous les services',
    salesStoresType: 'Points de vente', deliveryStoresType: 'Points de livraison',
    networkTitle: 'Réseau national de service Voyah — Tunisie',
    salesStores: 'Points de vente', deliveryStores: 'Points de livraison',
    quickSearch: 'Recherche rapide', searchPlaceholder: 'Entrez le nom de la ville',
    province: 'Gouvernorat', city: 'Ville',
    selectRegion: 'Sélectionner la région', selectType: 'Sélectionner le type',
  },
  ar: {
    allRegions: 'كل المناطق', allServiceTypes: 'كل أنواع الخدمة',
    salesStoresType: 'معارض البيع', deliveryStoresType: 'معارض التسليم',
    networkTitle: 'شبكة خدمة Voyah الوطنية — تونس',
    salesStores: 'معارض البيع', deliveryStores: 'معارض التسليم',
    quickSearch: 'بحث سريع', searchPlaceholder: 'أدخل اسم المدينة',
    province: 'الولاية', city: 'المدينة',
    selectRegion: 'اختر المنطقة', selectType: 'اختر النوع',
  },
} as const

const t = computed(() => copy[lang.value])

interface Store {
  name: string; city: string; governorate: string; letter: string
  type: 'sales' | 'delivery'; lat: number; lng: number
}

const allStores: Store[] = [
  { name: 'Voyah Tunis Centre',     city: 'Tunis',     governorate: 'Tunis',     letter: 'T', type: 'sales',    lat: 36.8065, lng: 10.1815 },
  { name: 'Voyah Lac',              city: 'Tunis',     governorate: 'Tunis',     letter: 'T', type: 'delivery', lat: 36.8320, lng: 10.2300 },
  { name: 'Voyah Ariana',           city: 'Ariana',    governorate: 'Ariana',    letter: 'A', type: 'sales',    lat: 36.8665, lng: 10.1647 },
  { name: 'Voyah Ben Arous',        city: 'Ben Arous', governorate: 'Ben Arous', letter: 'B', type: 'delivery', lat: 36.7531, lng: 10.2282 },
  { name: 'Voyah Sfax',             city: 'Sfax',      governorate: 'Sfax',      letter: 'S', type: 'sales',    lat: 34.7400, lng: 10.7600 },
  { name: 'Voyah Sfax Service',     city: 'Sfax',      governorate: 'Sfax',      letter: 'S', type: 'delivery', lat: 34.7200, lng: 10.7400 },
  { name: 'Voyah Sousse',           city: 'Sousse',    governorate: 'Sousse',    letter: 'S', type: 'sales',    lat: 35.8245, lng: 10.6346 },
  { name: 'Voyah Sousse Livraison', city: 'Sousse',    governorate: 'Sousse',    letter: 'S', type: 'delivery', lat: 35.8100, lng: 10.6200 },
  { name: 'Voyah Hammamet',         city: 'Hammamet',  governorate: 'Nabeul',    letter: 'N', type: 'sales',    lat: 36.4024, lng: 10.6145 },
  { name: 'Voyah Monastir',         city: 'Monastir',  governorate: 'Monastir',  letter: 'M', type: 'sales',    lat: 35.7773, lng: 10.8262 },
  { name: 'Voyah Monastir Service', city: 'Monastir',  governorate: 'Monastir',  letter: 'M', type: 'delivery', lat: 35.7650, lng: 10.8100 },
  { name: 'Voyah Gabès',            city: 'Gabès',     governorate: 'Gabès',     letter: 'G', type: 'sales',    lat: 33.8881, lng: 10.0975 },
  { name: 'Voyah Bizerte',          city: 'Bizerte',   governorate: 'Bizerte',   letter: 'B', type: 'sales',    lat: 37.2746, lng: 9.8739  },
  { name: 'Voyah Kairouan',         city: 'Kairouan',  governorate: 'Kairouan',  letter: 'K', type: 'sales',    lat: 35.6781, lng: 10.0963 },
]

interface RegionGroup { letter: string; province: string; cities: string[] }
const regionGroups: RegionGroup[] = [
  { letter: 'A', province: 'Ariana',    cities: ['Ariana'] },
  { letter: 'B', province: 'Ben Arous', cities: ['Ben Arous'] },
  { letter: 'B', province: 'Bizerte',   cities: ['Bizerte'] },
  { letter: 'G', province: 'Gabès',     cities: ['Gabès'] },
  { letter: 'K', province: 'Kairouan',  cities: ['Kairouan'] },
  { letter: 'M', province: 'Monastir',  cities: ['Monastir'] },
  { letter: 'N', province: 'Nabeul',    cities: ['Hammamet', 'Nabeul'] },
  { letter: 'S', province: 'Sfax',      cities: ['Sfax'] },
  { letter: 'S', province: 'Sousse',    cities: ['Sousse'] },
  { letter: 'T', province: 'Tunis',     cities: ['Tunis'] },
]

const openSelect     = ref<'region' | 'type' | null>(null)
const regionSearch   = ref('')
const activeLetter   = ref<string | null>(null)
const selectedRegion = ref<string | null>(null)
const selectedType   = ref<'all' | 'sales' | 'delivery'>('all')

const availableLetters = computed(() => [...new Set(regionGroups.map(g => g.letter))].sort())

const filteredRegionGroups = computed(() =>
  regionGroups.filter(g => {
    const matchLetter = !activeLetter.value || g.letter === activeLetter.value
    const matchSearch = !regionSearch.value ||
      g.province.toLowerCase().includes(regionSearch.value.toLowerCase()) ||
      g.cities.some(c => c.toLowerCase().includes(regionSearch.value.toLowerCase()))
    return matchLetter && matchSearch
  })
)

const selectedRegionLabel = computed(() => selectedRegion.value ?? t.value.allRegions)

const serviceTypeOptions = computed(() => [
  { value: 'all'      as const, label: t.value.allServiceTypes   },
  { value: 'sales'    as const, label: t.value.salesStoresType   },
  { value: 'delivery' as const, label: t.value.deliveryStoresType },
])

const selectedTypeLabel = computed(() =>
  serviceTypeOptions.value.find(o => o.value === selectedType.value)?.label ?? t.value.allServiceTypes
)

function toggleSelect(name: 'region' | 'type') {
  openSelect.value = openSelect.value === name ? null : name
}
function selectRegion(city: string | null) {
  selectedRegion.value = city
  openSelect.value = null
}
function selectType(opt: { value: 'all' | 'sales' | 'delivery' }) {
  selectedType.value = opt.value
  openSelect.value = null
}
function onDocClick(e: MouseEvent) {
  if (!(e.target as HTMLElement).closest('.select-bar-select')) openSelect.value = null
}

const filteredStores = computed(() =>
  allStores.filter(s => {
    const regionMatch = !selectedRegion.value || s.city === selectedRegion.value || s.governorate === selectedRegion.value
    const typeMatch = selectedType.value === 'all' || s.type === selectedType.value
    return regionMatch && typeMatch
  })
)

const visibleSalesCount    = computed(() => filteredStores.value.filter(s => s.type === 'sales').length)
const visibleDeliveryCount = computed(() => filteredStores.value.filter(s => s.type === 'delivery').length)

const mapRef = ref<HTMLElement | null>(null)
let map: any = null
let markerLayer: any = null
let L: any = null

const DEFAULT_CENTER: [number, number] = [33.8869, 9.5375]
const DEFAULT_ZOOM = 6

function makeSvgIcon(type: 'sales' | 'delivery') {
  const color = type === 'sales' ? '#185FA5' : '#1D9E75'
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">
    <path d="M14 0C6.27 0 0 6.27 0 14c0 9.63 14 22 14 22s14-12.37 14-22C28 6.27 21.73 0 14 0z" fill="${color}"/>
    <circle cx="14" cy="14" r="6" fill="white"/>
  </svg>`
  return L.divIcon({ html: svg, className: '', iconSize: [28, 36], iconAnchor: [14, 36], popupAnchor: [0, -38] })
}

function renderMarkers() {
  if (!markerLayer || !L) return
  markerLayer.clearLayers()
  filteredStores.value.forEach(s => {
    const label = s.type === 'sales' ? t.value.salesStores : t.value.deliveryStores
    L.marker([s.lat, s.lng], { icon: makeSvgIcon(s.type) })
      .addTo(markerLayer)
      .bindPopup(`<strong style="font-size:14px">${s.name}</strong><br><span style="font-size:12px;color:#666">${s.governorate} — ${label}</span>`)
  })
}

function zoomIn()    { map?.zoomIn() }
function zoomOut()   { map?.zoomOut() }
function resetView() { map?.setView(DEFAULT_CENTER, DEFAULT_ZOOM) }

onMounted(async () => {
  document.addEventListener('click', onDocClick)
  const leafletModule = await import('leaflet')
  await import('leaflet/dist/leaflet.css')
  L = leafletModule.default
  await nextTick()
  if (!mapRef.value) return
  map = L.map(mapRef.value, { zoomControl: false }).setView(DEFAULT_CENTER, DEFAULT_ZOOM)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(map)
  markerLayer = L.layerGroup().addTo(map)
  renderMarkers()
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick)
  map?.remove()
})

watch(filteredStores, renderMarkers)
</script>

<style scoped>
.map-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.page-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  margin-top: 80px;
  overflow: hidden;
}

.map-container {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

/* ── Wrapper pour les cartes flottantes ── */
.cards-wrapper {
  position: absolute;
  top: 24px;
  left: 24px;
  z-index: 500;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: auto;
  min-width: 280px;
}

/* ── Ligne de cartes ── */
.cards-row {
  display: flex;
  gap: 12px;
  width: 100%;
}

/* ── Cartes flottantes ── */
.floating-card {
  background: #FFFFFF;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  padding: 16px;
  flex: 1;
  min-width: 0; /* Pour permettre le rétrécissement si nécessaire */
}

/* Largeur égale pour les deux premières cartes */
.card-region,
.card-type {
  width: 240px;
  flex-shrink: 0;
}

/* Carte statistiques avec la même largeur que la somme des deux premières */
.card-stats {
  width: calc(240px + 240px + 12px); /* 240px + 240px + gap de 12px = 492px */
  max-width: 100%;
  flex-shrink: 0;
}

/* ── Label en haut de chaque card ── */
.card-label {
  font-size: 11px;
  font-weight: 600;
  color: #6B7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
}

/* ── Selector ── */
.select-bar-select {
  height: 40px;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  position: relative;
  cursor: pointer;
  user-select: none;
  background: #F9FAFB;
  transition: all 0.2s ease;
}

.select-bar-select:hover {
  border-color: #D1D5DB;
  background: #F3F4F6;
}

.select-bar-select-value {
  color: #1F2937;
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.select-bar-select-icon {
  width: 6px;
  height: 6px;
  border-right: 1.5px solid #9CA3AF;
  border-bottom: 1.5px solid #9CA3AF;
  transform: rotate(45deg);
  transition: transform 0.2s ease;
  flex-shrink: 0;
  margin-left: 8px;
  margin-bottom: 2px;
}

.select-bar-select.open .select-bar-select-icon {
  transform: rotate(-135deg);
  margin-bottom: -2px;
}

/* ── Dropdown région ── */
.search-content {
  display: none;
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  z-index: 600;
  width: 300px;
  background: #FFFFFF;
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  border: 1px solid #E5E7EB;
  overflow: hidden;
}

.select-bar-select.open .search-content { display: block; }

.search-top {
  padding: 12px 14px 10px;
  border-bottom: 1px solid #F3F4F6;
}

.search-label {
  font-size: 11px;
  font-weight: 500;
  color: #9CA3AF;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.input {
  width: 100%;
  height: 36px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  padding: 0 10px;
  font-size: 13px;
  color: #1F2937;
  outline: none;
  box-sizing: border-box;
}

.input:focus {
  border-color: #3B82F6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.search-bottom {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 8px 14px;
  border-bottom: 1px solid #F3F4F6;
}

.search-bottom__item {
  min-width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  color: #6B7280;
  cursor: pointer;
  border-radius: 6px;
}

.search-bottom__item:hover,
.search-bottom__item.active {
  background: #3B82F6;
  color: #FFFFFF;
}

.search-wrapper {
  max-height: 240px;
  overflow-y: auto;
}

.city-area { padding: 8px 0; }

.city-choose {
  display: grid;
  grid-template-columns: 28px 1fr 1fr;
  padding: 5px 14px;
  align-items: start;
  font-size: 12px;
  gap: 6px;
}

.header-row .province,
.header-row .city {
  color: #9CA3AF;
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 4px 0;
}

.first-chat {
  color: #9CA3AF;
  font-size: 12px;
  font-weight: 600;
  padding-top: 4px;
}

.province_real {
  color: #374151;
  cursor: pointer;
  padding: 4px 0;
  font-weight: 500;
}

.province_real:hover,
.province_real.selected { color: #3B82F6; }

.city_real {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 4px 0;
}

.city-item {
  font-size: 11px;
  color: #374151;
  padding: 3px 8px;
  border: 1px solid #E5E7EB;
  cursor: pointer;
  border-radius: 6px;
  background: #FFFFFF;
}

.city-item:hover { background: #F3F4F6; border-color: #D1D5DB; }
.city-item.selected { background: #3B82F6; color: #FFFFFF; border-color: #3B82F6; }

/* ── Dropdown type ── */
.select-bar-select-nav {
  display: none;
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  z-index: 600;
  background: #FFFFFF;
  border-radius: 14px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  border: 1px solid #E5E7EB;
  overflow: hidden;
}

.select-bar-select.open .select-bar-select-nav { display: block; }

.select-bar-select-nav-item {
  padding: 11px 14px;
  font-size: 13px;
  font-weight: 500;
  color: #374151;
  cursor: pointer;
  white-space: nowrap;
}

.select-bar-select-nav-item:hover { background: #F9FAFB; }
.select-bar-select-nav-item.active { background: #EFF6FF; color: #3B82F6; }

/* ── Card stats ── */
.network-title {
  font-size: 13px;
  font-weight: 600;
  color: #1A1A1A;
  line-height: 1.4;
  margin-bottom: 12px;
}

.stats-row {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.stat-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: #E5E7EB;
  margin: 0 12px;
}

.stat-label {
  font-size: 11px;
  font-weight: 500;
  color: #6B7280;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}

.stat-number {
  font-size: 28px;
  font-weight: 700;
  color: #1A1A1A;
  line-height: 1.1;
}

.legend {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 4px;
  border-top: 1px solid #F3F4F6;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 500;
  color: #6B7280;
}

.legend-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  flex-shrink: 0;
}

.legend-dot--sales    { background: #185FA5; }
.legend-dot--delivery { background: #1D9E75; }

/* ── Leaflet ── */
:deep(.leaflet-popup-content-wrapper) {
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
}
:deep(.leaflet-popup-content) {
  margin: 12px 16px;
  line-height: 1.5;
}

/* ── Zoom tools ── */
.tools {
  position: absolute;
  right: 24px;
  bottom: 40px;
  width: 44px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  gap: 6px;
  z-index: 500;
  backdrop-filter: blur(8px);
}

.line {
  width: 24px;
  height: 1px;
  background: #E5E7EB;
}

.tool-btn {
  border: 0;
  background: transparent;
  width: 32px;
  height: 32px;
  color: #374151;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 10px;
}

.tool-btn:hover { background: #F3F4F6; color: #1F2937; }

.search-wrapper::-webkit-scrollbar { width: 4px; }
.search-wrapper::-webkit-scrollbar-track { background: #F3F4F6; border-radius: 4px; }
.search-wrapper::-webkit-scrollbar-thumb { background: #D1D5DB; border-radius: 4px; }

/* ── Responsive ── */
@media (max-width: 900px) {
  .cards-wrapper {
    left: 16px;
    right: 16px;
    min-width: auto;
  }
  
  .card-region,
  .card-type {
    width: 180px;
  }
  
  .card-stats {
    width: calc(180px + 180px + 12px);
  }
}

@media (max-width: 680px) {
  .page-container { height: calc(100vh - 64px); margin-top: 64px; }

  .cards-wrapper {
    top: auto;
    bottom: 24px;
    left: 16px;
    right: 16px;
    gap: 10px;
  }

  .cards-row {
    flex-direction: column;
    gap: 10px;
  }

  .card-region,
  .card-type,
  .card-stats {
    width: 100%;
    flex-shrink: 1;
  }

  .tools { right: 16px; bottom: 280px; }
}
</style>