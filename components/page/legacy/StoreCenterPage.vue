<template>
  <div class="page-container miniPage">
    <div class="store-container">
      <div class="select-wrap">
        <div class="select-bar">
          <div class="select-bar-select">
            <div class="select-bar-select-value">{{ t.allRegions }}</div>
            <i class="select-bar-select-icon" />
          </div>
          <div class="select-bar-select">
            <div class="select-bar-select-value">{{ t.allServiceTypes }}</div>
            <i class="select-bar-select-icon" />
          </div>
        </div>
        <div class="select-main">
          <div class="country">
            <div class="country-title">{{ t.networkTitle }}</div>
            <div class="country-bottom">
              <div class="bottom-item">
                <div class="bottom-item-label">{{ t.salesStores }}</div>
                <div class="bottom-item-num">773</div>
              </div>
              <div class="bottom-item">
                <div class="bottom-item-label">{{ t.deliveryStores }}</div>
                <div class="bottom-item-num">270</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="mapView" class="map-container">
        <div class="map-placeholder">
          <div class="map-placeholder__title">{{ t.mapTitle }}</div>
          <div class="map-placeholder__grid">
            <span v-for="city in hotCities" :key="city" class="map-chip">{{ city }}</span>
          </div>
        </div>
        <div class="tools">
          <button type="button" class="tool-btn">+</button>
          <div class="line" />
          <button type="button" class="tool-btn">-</button>
          <div class="line" />
          <button type="button" class="tool-btn">◎</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const lang = computed(() => {
  const code = Array.isArray(route.params.locale) ? route.params.locale[0] : route.params.locale
  return code === 'fr' || code === 'ar' ? code : 'en'
})

const copy = {
  en: {
    allRegions: 'All regions',
    allServiceTypes: 'All service types',
    networkTitle: 'Voyah national service network',
    salesStores: 'Sales stores',
    deliveryStores: 'Delivery service stores',
    mapTitle: 'Store map'
  },
  fr: {
    allRegions: 'Toutes les regions',
    allServiceTypes: 'Tous les services',
    networkTitle: 'Reseau national de service Voyah',
    salesStores: 'Points de vente',
    deliveryStores: 'Points de livraison',
    mapTitle: 'Carte des magasins'
  },
  ar: {
    allRegions: 'كل المناطق',
    allServiceTypes: 'كل انواع الخدمة',
    networkTitle: 'شبكة خدمة Voyah الوطنية',
    salesStores: 'معارض البيع',
    deliveryStores: 'معارض التسليم',
    mapTitle: 'خريطة المعارض'
  }
} as const

const t = computed(() => copy[lang.value])
const hotCities = computed(() =>
  lang.value === 'fr'
    ? ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice', 'Nantes', 'Lille', 'Bordeaux', 'Rennes', 'Strasbourg']
    : lang.value === 'ar'
      ? ['Riyadh', 'Jeddah', 'Dammam', 'Dubai', 'Abu Dhabi', 'Doha', 'Kuwait City', 'Cairo', 'Amman', 'Muscat']
      : ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu', 'Wuhan', 'Hangzhou', 'Chongqing', "Xi'an", 'Nanjing']
)
</script>

<style scoped>
.page-container {
  background: #fff;
}
.store-container {
  display: grid;
  grid-template-columns: minmax(360px, 440px) 1fr;
  min-height: calc(100vh - 72px);
}
.select-wrap {
  padding: 32px 24px;
  border-right: 1px solid #e6e6e6;
  background: #fff;
}
.select-bar {
  display: grid;
  gap: 12px;
}
.select-bar-select {
  height: 52px;
  border: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
}
.select-bar-select-value {
  color: #262626;
  font-size: 14px;
}
.select-bar-select-icon {
  width: 8px;
  height: 8px;
  border-right: 1px solid #727272;
  border-bottom: 1px solid #727272;
  transform: rotate(45deg);
}
.select-main {
  margin-top: 16px;
}
.country {
  border: 1px solid #e6e6e6;
  padding: 20px;
}
.country-title {
  font-size: 18px;
  line-height: 1.4;
  color: #262626;
}
.country-bottom {
  margin-top: 18px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.bottom-item {
  background: #f9f9f9;
  padding: 14px 12px;
}
.bottom-item-label {
  font-size: 13px;
  color: #727272;
}
.bottom-item-num {
  margin-top: 6px;
  font-size: 24px;
  color: #262626;
  font-weight: 500;
}
.map-container {
  position: relative;
  min-height: 560px;
  background: linear-gradient(160deg, #f1f5f7, #eaf0f4);
}
.map-placeholder {
  padding: 40px;
}
.map-placeholder__title {
  font-size: 22px;
  color: #262626;
  margin-bottom: 16px;
}
.map-placeholder__grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.map-chip {
  border: 1px solid #d8d8d8;
  background: #fff;
  padding: 8px 12px;
  font-size: 13px;
  color: #262626;
}
.tools {
  position: absolute;
  right: 24px;
  bottom: 24px;
  width: 44px;
  background: #fff;
  border-radius: 6px;
  display: grid;
  justify-items: center;
  padding: 10px 0;
  gap: 8px;
}
.line {
  width: 28px;
  height: 1px;
  background: rgba(0, 0, 0, 0.12);
}
.tool-btn {
  border: 0;
  background: transparent;
  width: 28px;
  height: 28px;
  color: #262626;
  font-size: 16px;
}
@media (max-width: 1024px) {
  .store-container {
    grid-template-columns: 1fr;
  }
  .select-wrap {
    border-right: 0;
    border-bottom: 1px solid #e6e6e6;
  }
}
</style>
