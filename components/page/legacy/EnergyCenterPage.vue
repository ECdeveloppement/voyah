<template>
  <div class="page-container">
    <div class="energy-content">
      <section class="bg">
        <img class="headImg bg_pc" src="https://www.voyah.com.cn/static/assets/energy_bg-4482e81f.jpg" />
        <img class="headImg bg_mb" src="https://www.voyah.com.cn/static/assets/energy_bg_mb-36355b8d.png" />
        <div class="title">{{ t('domain.EnergyCenterPage.energy.title') }}</div>
        <div class="desc">
          <p>{{ t('domain.EnergyCenterPage.energy.description') }}</p>
        </div>
      </section>

      <section class="section_1">
        <div class="section_1_container">
          <div class="main_card">
            <div class="main_title">{{ t('domain.EnergyCenterPage.energy.solution.title') }}</div>
            <div class="main_subtitle">
              <span class="subtitle_voyah">{{ t('domain.EnergyCenterPage.energy.solution.subtitle_voyah') }}</span><span class="subtitle_power">{{ t('domain.EnergyCenterPage.energy.solution.subtitle_power') }}</span>
            </div>

            <div class="cards_row">
              <div class="cards_top_row">
                <div class="info_card">
                  <div class="card_bg_image"></div>
                  <!-- Card 1 image - larger -->
                  <img class="card_bg_img" src="https://www.voyah.com.cn/static/assets/power_bg1-7048cd30.png" alt="" />
                  <div class="card_content">
                    <div class="card_text">
                      <div class="card_line">{{ t('domain.EnergyCenterPage.energy.solution.card1.line1') }}</div>
                      <div class="card_line">{{ t('domain.EnergyCenterPage.energy.solution.card1.line2') }}</div>
                      <div class="card_line">{{ t('domain.EnergyCenterPage.energy.solution.card1.line3') }}</div>
                      <div class="card_line">{{ t('domain.EnergyCenterPage.energy.solution.card1.line4') }}</div>
                    </div>
                  </div>
                  <div class="card_number">1</div>
                </div>

                <div class="info_card">
                  <div class="card_bg_image"></div>
                  <!-- Card 2 image - larger -->
                  <img class="card_bg_img" src="https://www.voyah.com.cn/static/assets/power_bg2-a6639f1e.png" alt="" />
                  <div class="card_content">
                    <div class="card_text">
                      <div class="card_line">{{ t('domain.EnergyCenterPage.energy.solution.card2.line1') }}</div>
                    </div>
                  </div>
                  <div class="card_number">6</div>
                </div>
              </div>

              <div class="info_card card_full">
                <div class="card_bg_image"></div>
                <!-- Card 3 image - larger -->
                <img class="card_bg_img" src="https://www.voyah.com.cn/static/assets/power_bg3-d6d323e0.png" alt="" />
                <div class="card_content">
                  <div class="card_text two_columns">
                    <div class="column">
                      <div class="card_line">{{ t('domain.EnergyCenterPage.energy.solution.card3.line1') }}</div>
                      <div class="card_line">{{ t('domain.EnergyCenterPage.energy.solution.card3.line2') }}</div>
                      <div class="card_line">{{ t('domain.EnergyCenterPage.energy.solution.card3.line3') }}</div>
                      <div class="card_line">{{ t('domain.EnergyCenterPage.energy.solution.card3.line4') }}</div>
                    </div>
                    <div class="column">
                      <div class="card_line">{{ t('domain.EnergyCenterPage.energy.solution.card3.line5') }}</div>
                      <div class="card_line">{{ t('domain.EnergyCenterPage.energy.solution.card3.line6') }}</div>
                      <div class="card_line">{{ t('domain.EnergyCenterPage.energy.solution.card3.line7') }}</div>
                      <div class="card_line">{{ t('domain.EnergyCenterPage.energy.solution.card3.line8') }}</div>
                    </div>
                  </div>
                </div>
                <div class="card_number">8</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section2 section-energy">
        <div class="title"><span class="large">{{ t('domain.EnergyCenterPage.energy.network.title_prefix') }}</span>{{ t('domain.EnergyCenterPage.energy.network.title') }}</div>
        <div class="desc">{{ t('domain.EnergyCenterPage.energy.network.description') }}</div>
        <div class="desc desc1">{{ t('domain.EnergyCenterPage.energy.network.description2') }}</div>

        <div class="energy_content_wrapper">
          <div class="charge_card_white">
            <div class="charge_title_white">{{ t('domain.EnergyCenterPage.energy.network.card_title') }}</div>
            <div class="charge_content_white">
              <div class="charge_row_white">
                <div class="charge_item_white">
                  <div class="charge_number_white">500+</div>
                  <div class="charge_label_white">{{ t('domain.EnergyCenterPage.energy.network.points') }}</div>
                </div>
                <div class="charge_item_white">
                  <div class="charge_number_white">50</div>
                  <div class="charge_label_white">{{ t('domain.EnergyCenterPage.energy.network.ultra_fast') }}</div>
                </div>
              </div>
              <div class="charge_row_white">
                <div class="charge_item_white">
                  <div class="charge_number_white">1,2 M kWh</div>
                  <div class="charge_label_white">{{ t('domain.EnergyCenterPage.energy.network.green_energy') }}</div>
                </div>
                <div class="charge_item_white">
                  <div class="charge_number_white">800 T</div>
                  <div class="charge_label_white">{{ t('domain.EnergyCenterPage.energy.network.co2_saved') }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="tunisia_map_wrapper">
            <div id="tunisia-map" class="tunisia-map"></div>
          </div>
        </div>
      </section>

      <section class="section2 section3" style="margin-top: 80px;">
        <div class="title"><span class="large">{{ t('domain.EnergyCenterPage.energy.fast_charging.title_prefix') }}</span>{{ t('domain.EnergyCenterPage.energy.fast_charging.title') }}</div>
        <div class="desc">{{ t('domain.EnergyCenterPage.energy.fast_charging.description') }}</div>
        <div class="section3_1">
          <div class="image_container">
            <img class="charge_mb" src="https://www.voyah.com.cn/static/assets/charge_mb-0e5441f2.png" />
            <img class="charge_pc" src="https://www.voyah.com.cn/static/assets/charge_pc-1c0a2e91.png" />
            <div class="blur_overlay"></div>
          </div>
          <div class="electric_list">
            <div class="electric_item electric_item_left"><div class="num">120<span class="unit">kW</span></div><div class="tips">{{ t('domain.EnergyCenterPage.energy.fast_charging.peak_power') }}</div></div>
            <div class="electric_item electric_item_center"><div class="num">250<span class="unit">A</span></div><div class="tips">{{ t('domain.EnergyCenterPage.energy.fast_charging.peak_current') }}</div></div>
            <div class="electric_item electric_item_right"><div class="num">250<span class="unit">km</span></div><div class="tips">{{ t('domain.EnergyCenterPage.energy.fast_charging.range') }}</div></div>
          </div>
        </div>
      </section>

      <section class="section2 section4" style="margin-top: 80px;">
        <div class="title">
          <span class="large">{{ t('domain.EnergyCenterPage.energy.smart_charging.title_prefix') }}</span>
          {{ t('domain.EnergyCenterPage.energy.smart_charging.title') }}
        </div>

        <div class="desc">
         {{ t('domain.EnergyCenterPage.energy.smart_charging.description') }}
        </div>

        <div class="section4_1">
          <div class="section4_1_content">
            <div class="video">
              <video
                muted
                playsinline
                style="width:100%; border-radius:24px;"
              >
                <source
                  src="https://video.dsmp.voyah.com.cn/website/energy/sc_5.mp4"
                  type="video/mp4"
                />
              </video>

              <div class="video-btn" @click="openVideo">
                {{ t('domain.EnergyCenterPage.energy.smart_charging.watch_video') }}
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEhSURBVHic7dphTQNBFEXhOwQBlVAJ4KASkAAOsIAC6gCcgAMktBJwcPnThglptluanTcvcz4DM7k5adrdSgAAAAAAAAAAYEy2V7ZX0feY6ybgzDtJX7Y3AWf3z/bGv14z1dTEn4Fse0dNlRMDUVNtYqAua4r4kJ6ylvQxdE1nCuqutt4Kqo1Z0wUFdVFTzwXVwmrKMtDRc+tv4dkGUuuaMg501KSmzAOpRU3ZB1rcbfQFrrSX9FJKeV/qgMwDbQ/jfC95SMaB9pKeSimfLQ7L9hm0lXTfapwQV/zUeIy+exP/GOjN9jr63s1c+LhjjGpqMwcaq5rajEeu41VTmxho3GpqvPY5gxeHZxwG2tl+iL5Ll7L9eQEAAAAAAAAAAHTiB2v1UfW46pnfAAAAAElFTkSuQmCC"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div v-if="showVideo" class="video-modal" @click="closeVideo">
        <div class="video-modal-content" @click.stop>
          <video controls autoplay>
            <source
              src="https://video.dsmp.voyah.com.cn/website/energy/sc_5.mp4"
              type="video/mp4"
            />
          </video>
          <button class="close-btn" @click="closeVideo">✕</button>
        </div>
      </div>

      <!-- Section 5 -->
      <section class="section2 section5" style="margin-top: 80px;">
        <div class="title"><span class="large">{{ t('domain.EnergyCenterPage.energy.eco.title_prefix') }}</span>{{ t('domain.EnergyCenterPage.energy.eco.title') }}</div>
        <div class="horizontal-tab commonTab auto-slide-tab">
          <div class="tab">
            <div class="tab-nav">
              <div class="tab-item active" data-tab="0">{{ t('domain.EnergyCenterPage.energy.eco.v2g') }}</div>
              <div class="tab-item" data-tab="1">{{ t('domain.EnergyCenterPage.energy.eco.sharing') }}</div>
              <div class="tab-item" data-tab="2">{{ t('domain.EnergyCenterPage.energy.eco.recycling') }}</div>
              <div class="slide-content"></div>
            </div>
          </div>
          <div class="tab_mb">
            <div class="tab-item_mb active" data-tab="0">{{ t('domain.EnergyCenterPage.energy.eco.v2g') }}</div>
            <div class="tab-item_mb" data-tab="1">{{ t('domain.EnergyCenterPage.energy.eco.sharing') }}</div>
            <div class="tab-item_mb" data-tab="2">{{ t('domain.EnergyCenterPage.energy.eco.recycling') }}</div>
          </div>
          <div class="tab-content">
            <div class="tab-content-item active" data-tab="0">
              <div class="tab_content_demo">
                <div class="img-wrapper">
                  <img src="https://www.voyah.com.cn/static/assets/V2G-cba13343.jpg" alt="Technologie V2G" />
                  <div class="tab_desc">{{ t('domain.EnergyCenterPage.energy.eco.v2g_desc') }}</div>
                </div>
              </div>
            </div>
            <div class="tab-content-item" data-tab="1">
              <div class="tab_content_demo">
                <div class="img-wrapper">
                  <img src="https://www.voyah.com.cn/static/assets/kongxiang-f3e4984f.jpg" alt="Partage de bornes" />
                  <div class="tab_desc">
{{ t('domain.EnergyCenterPage.energy.eco.sharing_desc') }}</div>
                </div>
              </div>
            </div>
            <div class="tab-content-item" data-tab="2">
              <div class="tab_content_demo">
                <div class="img-wrapper">
                  <img src="https://www.voyah.com.cn/static/assets/tici-b570e40a.jpg" alt="Recyclage des batteries" />
                  <div class="tab_desc">{{ t('domain.EnergyCenterPage.energy.eco.recycling_desc') }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section2 section6">
        <div class="title">{{ t('domain.EnergyCenterPage.energy.encyclopedia.title') }}</div>
        <div class="desc">{{ t('domain.EnergyCenterPage.energy.encyclopedia.description') }}</div>
        <div class="horizontal-tab commonTab">
          <div class="tab">
            <div class="tab-nav">
              <div class="tab-item active" data-tab="0">{{ t('domain.EnergyCenterPage.energy.encyclopedia.fast_guide') }}</div>
              <div class="tab-item" data-tab="1">{{ t('domain.EnergyCenterPage.energy.encyclopedia.home_guide') }}</div>
              <div class="tab-item" data-tab="2">{{ t('domain.EnergyCenterPage.energy.encyclopedia.public_guide') }}</div>
              <div class="tab-item" data-tab="3">{{ t('domain.EnergyCenterPage.energy.encyclopedia.faq') }}</div>
              <div class="slide-content"></div>
            </div>
          </div>
          <div class="tab_mb">
            <div class="tab-item_mb active" data-tab="0">{{ t('domain.EnergyCenterPage.energy.encyclopedia.fast_guide') }}</div>
            <div class="tab-item_mb" data-tab="1">{{ t('domain.EnergyCenterPage.energy.encyclopedia.home_guide') }}</div>
            <div class="tab-item_mb" data-tab="2">{{ t('domain.EnergyCenterPage.energy.encyclopedia.public_guide') }}</div>
            <div class="tab-item_mb" data-tab="3">{{ t('domain.EnergyCenterPage.energy.encyclopedia.faq') }}</div>
          </div>
          <div class="tab-content">
            <div class="tab-content-item active" data-tab="0">
              <div class="tab_content_demo">
                <div class="book-grid">
                  <div class="book-card">
                    <img src="https://img.dsmp.voyah.com.cn/img/community-new/center/144115205301727945/77a9b4db-fd48-4770-a4ce-9f40b345994f-1760680986127.png" />
                    <h4>{{ t('domain.EnergyCenterPage.energy.encyclopedia.fast_guide_title') }}</h4>
                    <p>{{ t('domain.EnergyCenterPage.energy.encyclopedia.fast_guide_desc') }}</p>
                    <div class="more">{{ t('domain.EnergyCenterPage.energy.encyclopedia.read_more') }}</div>
                  </div>
                  <div class="book-card">
                    <img src="https://img.dsmp.voyah.com.cn/img/community-new/center/144115205301727945/a4c823a6-fff9-4f09-96c0-23984dde8e30-1763017997820.png" />
                    <h4>{{ t('domain.EnergyCenterPage.energy.encyclopedia.winter_title') }}</h4>
                    <p>{{ t('domain.EnergyCenterPage.energy.encyclopedia.winter_desc') }}</p>
                    <div class="more">{{ t('domain.EnergyCenterPage.energy.encyclopedia.read_more') }}</div>
                  </div>
                  <div class="book-card">
                    <img src="https://img.dsmp.voyah.com.cn/img/community-new/center/144115205301727945/6afd3d9b-388f-41e6-9b45-520a8a77646e-1758008380758.jpg" />
                    <h4>{{ t('domain.EnergyCenterPage.energy.encyclopedia.free_parking_title') }}</h4>
                    <p>{{ t('domain.EnergyCenterPage.energy.encyclopedia.free_parking_desc') }}</p>
                    <div class="more">{{ t('domain.EnergyCenterPage.energy.encyclopedia.read_more') }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-content-item" data-tab="1">
              <div class="tab_content_demo">
                <div class="book-grid">
                  <div class="book-card">
                    <img src="https://img.dsmp.voyah.com.cn/img/community/center/cc251eb2-a5a4-4fa4-9c4f-4b16eaa0b2011704892427898.jpg" />
                    <h4>{{ t('domain.EnergyCenterPage.energy.encyclopedia.installation_title') }}</h4>
                    <p>{{ t('domain.EnergyCenterPage.energy.encyclopedia.installation_desc') }}</p>
                    <div class="more">{{ t('domain.EnergyCenterPage.energy.encyclopedia.read_more') }}</div>
                  </div>
                  <div class="book-card">
                    <img src="https://img.dsmp.voyah.com.cn/img/community/center/1ece860b-e95f-4d11-b96a-5325de63aeb81699348080554.jpg" />
                    <h4>{{ t('domain.EnergyCenterPage.energy.encyclopedia.compatibility_title') }}</h4>
                    <p>{{ t('domain.EnergyCenterPage.energy.encyclopedia.compatibility_desc') }}</p>
                    <div class="more">{{ t('domain.EnergyCenterPage.energy.encyclopedia.read_more') }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-content-item" data-tab="2">
              <div class="tab_content_demo">
                <div class="book-grid">
                  <div class="book-card">
                    <img src="https://img.dsmp.voyah.com.cn/img/community/center/457565c8-b131-42f5-8e4a-fd1ca685e0dd1696006751985.jpg" />
                    <h4>{{ t('domain.EnergyCenterPage.energy.encyclopedia.operators_title') }}</h4>
                    <p>{{ t('domain.EnergyCenterPage.energy.encyclopedia.operators_desc') }}</p>
                    <div class="more">{{ t('domain.EnergyCenterPage.energy.encyclopedia.read_more') }}</div>
                  </div>
                  <div class="book-card">
                    <img src="https://img.dsmp.voyah.com.cn/img/community/center/5a234409-f6ab-41a4-ad4e-f5eea2ce46d11696006912848.jpg" />
                    <h4>{{ t('domain.EnergyCenterPage.energy.encyclopedia.app_title') }}</h4>
                    <p>{{ t('domain.EnergyCenterPage.energy.encyclopedia.app_desc') }}</p>
                    <div class="more">{{ t('domain.EnergyCenterPage.energy.encyclopedia.read_more') }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-content-item" data-tab="3">
              <div class="tab_content_demo">
                <div class="book-grid">
                  <div class="book-card">
                    <img src="https://img.dsmp.voyah.com.cn/img/community/pgc/list/33c2da05-e679-4379-9c9b-9a64653d1c0a1678347727724.jpg" />
                    <h4>{{ t('domain.EnergyCenterPage.energy.encyclopedia.faq_title') }}</h4>
                    <p>{{ t('domain.EnergyCenterPage.energy.encyclopedia.faq_desc') }}</p>
                    <div class="more">{{ t('domain.EnergyCenterPage.energy.encyclopedia.read_more') }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 7 corrigée -->
      <section class="section7">
        <img class="headImg bg_pc" src="https://www.voyah.com.cn/static/assets/partner_pc-b12d249b.png" />
        <div class="content">
          <div class="title">{{ t('domain.EnergyCenterPage.energy.partners.title') }}</div>
         
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const { t } = useI18n()

const showVideo = ref(false)

const openVideo = () => {
  showVideo.value = true
}

const closeVideo = () => {
  showVideo.value = false
}

let autoSlideInterval = null
let currentSlideIndex = 0
let isUserInteracting = false
let resetTimer = null

const startAutoSlide = (container) => {
  if (autoSlideInterval) clearInterval(autoSlideInterval)
  autoSlideInterval = setInterval(() => {
    if (!isUserInteracting) {
      const tabItems = container.querySelectorAll('.tab-item, .tab-item_mb')
      const totalSlides = tabItems.length
      if (totalSlides > 0) {
        currentSlideIndex = (currentSlideIndex + 1) % totalSlides
        const nextTab = tabItems[currentSlideIndex]
        if (nextTab) nextTab.click()
      }
    }
  }, 3000)
}

const resetAutoSlideTimer = (container) => {
  if (resetTimer) clearTimeout(resetTimer)
  isUserInteracting = true
  resetTimer = setTimeout(() => { isUserInteracting = false }, 8000)
}

const initAutoSlideTab = () => {
  const autoSlideContainer = document.querySelector('.auto-slide-tab')
  if (!autoSlideContainer) return
  startAutoSlide(autoSlideContainer)
  const tabItems = autoSlideContainer.querySelectorAll('.tab-item, .tab-item_mb')
  tabItems.forEach(item => {
    item.addEventListener('click', () => {
      resetAutoSlideTimer(autoSlideContainer)
      const clickedIndex = Array.from(tabItems).indexOf(item)
      if (clickedIndex !== -1) currentSlideIndex = clickedIndex
    })
  })
}

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

onMounted(() => {
  const tunisiaCenter = [34.0, 9.5]
  const map = L.map('tunisia-map').setView(tunisiaCenter, 7)

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
    minZoom: 6
  }).addTo(map)

  const stations = [
    { name: 'Tunis', coords: [36.8065, 10.1815], type: 'active', power: '350 kW', status: t('domain.EnergyCenterPage.energy.map.operational'), connectors: 4 },
    { name: 'Sousse', coords: [35.8256, 10.6369], type: 'active', power: '350 kW', status: t('domain.EnergyCenterPage.energy.map.operational'), connectors: 4 },
    { name: 'Sfax', coords: [34.7406, 10.7603], type: 'active', power: '350 kW', status: t('domain.EnergyCenterPage.energy.map.operational'), connectors: 4 },
    { name: 'Gabès', coords: [33.8815, 10.0982], type: 'active', power: '150 kW', status: t('domain.EnergyCenterPage.energy.map.operational'), connectors: 2 },
    { name: 'Tozeur', coords: [33.9197, 8.1335], type: 'active', power: '150 kW', status: t('domain.EnergyCenterPage.energy.map.operational'), connectors: 2 },
    { name: 'Ben Guerdane', coords: [33.1392, 11.2194], type: 'active', power: '150 kW', status: t('domain.EnergyCenterPage.energy.map.operational'), connectors: 2 },
    { name: 'Bizerte', coords: [37.2744, 9.8739], type: 'planned', power: '350 kW', status: t('domain.EnergyCenterPage.energy.map.planned_2025'), connectors: 4 },
    { name: 'Kairouan', coords: [35.6781, 10.0964], type: 'planned', power: '150 kW', status: t('domain.EnergyCenterPage.energy.map.planned_2025'), connectors: 2 },
    { name: 'Gafsa', coords: [34.4250, 8.7842], type: 'planned', power: '150 kW', status: t('domain.EnergyCenterPage.energy.map.planned_2026'), connectors: 2 },
    { name: 'Nabeul', coords: [36.4550, 10.7363], type: 'planned', power: '150 kW', status: t('domain.EnergyCenterPage.energy.map.planned_2025'), connectors: 2 },
    { name: 'Monastir', coords: [35.7645, 10.8115], type: 'planned', power: '150 kW', status: t('domain.EnergyCenterPage.energy.map.planned_2025'), connectors: 2 },
    { name: 'Mahdia', coords: [35.5043, 11.0622], type: 'planned', power: '150 kW', status: t('domain.EnergyCenterPage.energy.map.planned_2026'), connectors: 2 },
  ]

  const activeIcon = L.divIcon({ className: 'custom-marker-active', html: '<div class="marker-active"></div>', iconSize: [20, 20], popupAnchor: [0, -10] })
  const plannedIcon = L.divIcon({ className: 'custom-marker-planned', html: '<div class="marker-planned"></div>', iconSize: [20, 20], popupAnchor: [0, -10] })

  stations.forEach(station => {
    const icon = station.type === 'active' ? activeIcon : plannedIcon
    const marker = L.marker(station.coords, { icon }).addTo(map)
    marker.bindPopup(`
      <div class="station-popup">
        <h3>⚡ ${station.name}</h3>
        <p><strong>${t('domain.EnergyCenterPage.energy.map.power')}:</strong> ${station.power}</p>
        <p><strong>${t('domain.EnergyCenterPage.energy.map.status')}:</strong> ${station.status}</p>
        <p><strong>${t('domain.EnergyCenterPage.energy.map.connectors')}:</strong> ${station.connectors} connecteurs</p>
        <p><strong>${t('domain.EnergyCenterPage.energy.map.type')}:</strong> ${station.type === 'active' ? t('domain.EnergyCenterPage.energy.map.active') : t('domain.EnergyCenterPage.energy.map.planned')}</p>
      </div>
    `)
  })

  L.control.zoom({ position: 'bottomright' }).addTo(map)
  window.addEventListener('resize', () => { setTimeout(() => map.invalidateSize(), 100) })

  function initTabs(container) {
    const tabItems = container.querySelectorAll('.tab-item, .tab-item_mb')
    const contents = container.querySelectorAll('.tab-content-item')
    tabItems.forEach(item => {
      item.addEventListener('click', () => {
        const tabId = item.getAttribute('data-tab')
        container.querySelectorAll('.tab-item, .tab-item_mb').forEach(ti => ti.classList.remove('active'))
        container.querySelectorAll(`[data-tab="${tabId}"]`).forEach(ti => {
          if (ti.classList.contains('tab-item') || ti.classList.contains('tab-item_mb')) ti.classList.add('active')
        })
        contents.forEach(content => {
          content.classList.toggle('active', content.getAttribute('data-tab') === tabId)
        })
      })
    })
  }

  document.querySelectorAll('.commonTab').forEach(initTabs)
  initAutoSlideTab()
})

onBeforeUnmount(() => {
  if (autoSlideInterval) clearInterval(autoSlideInterval)
  if (resetTimer) clearTimeout(resetTimer)
})
</script>

<style scoped>
/* Votre CSS reste strictement identique */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.page-container {
  width: 100%;
  overflow-x: hidden;
  background: #ffffff;
  color: #333333;
}

.energy-content { width: 100%; }

/* Hero */
.bg {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  background: #000000;
  padding-top: 25vh; /* 15% de la hauteur de la viewport */
}
.headImg {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  z-index: 0;
}

.bg_pc { display: block; }
.bg_mb { display: none; }

.bg .title,
.bg .desc { position: relative; z-index: 2; }

.bg .title {
  font-size: 3.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.bg .desc {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  line-height: 1.6;
  color: #ffffff;
}

/* Section 168 */
.section_1 {
  background: #ffffff;
  padding: 60px 5%;
}

.section_1_container {
  max-width: 1400px;
  margin: 0 auto;
}

.main_card {
  background: #0d0d0d;
  border-radius: 15px;
  padding: 30px 60px;
  text-align: center;
}

.main_title {
  font-size: 2.8rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 15px;
}

.main_subtitle {
  display: inline-flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 40px;
  letter-spacing: 2px;
}

.subtitle_voyah {
  font-size: 1.8rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 6px;
  text-transform: uppercase;
  font-family: 'Georgia', 'Times New Roman', serif;
}

.subtitle_power {
  font-size: 1.8rem;
  font-weight: 200;
  color: #ffffff;
  letter-spacing: 12px;
  text-transform: uppercase;
  font-family: 'Georgia', 'Times New Roman', serif;
  opacity: 0.9;
}

.cards_row {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cards_top_row {
  display: flex;
  gap: 20px;
}

.info_card {
  background: linear-gradient(135deg,
    rgba(40,40,45,0.95) 0%,
    rgba(70,70,80,0.85) 30%,
    rgba(110,110,120,0.6) 60%,
    rgba(150,150,160,0.3) 85%,
    rgba(200,200,210,0.1) 100%
  );
  border-radius: 20px;
  padding: 20px 24px 40px;
  flex: 1;
  min-height: 140px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.info_card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
}

.card_full {
  width: 100%;
  flex: none;
  min-height: 140px;
  padding-bottom: 40px;
}

.card_bg_image {
  position: absolute;
  bottom: -30px; right: -30px;
  width: 200px; height: 200px;
  border-radius: 50%;
  border: 1.5px solid rgba(200,148,74,0.18);
  z-index: 1;
  pointer-events: none;
}
/* Pour la version arabe uniquement */



.card_bg_image::before {
  content: '';
  position: absolute;
  top: 22px; left: 22px; right: 22px; bottom: 22px;
  border-radius: 50%;
  border: 1px solid rgba(200,148,74,0.10);
}

/* Larger images for cards */
.card_bg_img {
  position: absolute;
  bottom: -10px;
  right: -10px;
  width: auto;
  height: auto;
  max-width: 180px;
  max-height: 180px;
  z-index: 1;
  pointer-events: none;
  opacity: 0.8;
  border-radius: 0;
  object-fit: contain;
}

.card_content { position: relative; z-index: 2; }

.card_text { text-align: left; }

.card_full .two_columns {
  display: flex !important;
  gap: 30px !important;
}

.card_line {
  color: #ffffff;
  font-size: 0.95rem;
  line-height: 1.8;
  padding: 2px 0;
}

.card_number {
  position: absolute;
  bottom: 10px; right: 20px;
  font-size: 5rem;
  font-weight: 800;
  background: linear-gradient(180deg, #c8944a 0%, #7a4f28 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  opacity: 0.95;
  z-index: 2;
  line-height: 1;
}

/* Section Energy / Carte */
.section-energy {
  background: #e8f6f9;
  padding: 60px 5%;
}

.energy_content_wrapper {
  position: relative;
  display: flex;
  gap: 40px;
  align-items: stretch;
  justify-content: center;
  max-width: 1500px;
  margin: 70px auto 0;
}

.tunisia_map_wrapper {
  flex: 1;
  min-width: 280px;
}

.tunisia-map {
  width: 100%;
  height: 500px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  z-index: 1;
}

.charge_card_white {
  position: absolute;
  top: 50px; left: 50px;
  z-index: 10;
  background: rgba(255,255,255,0.88);
  backdrop-filter: blur(12px);
  padding:20px 22px;
  border-radius: 14px;
  min-width: 400px;
  max-width: 420px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.charge_title_white {
  font-size: 20px;
  font-weight: 600;
  color: #000;
  margin-bottom: 8px;
}

.charge_content_white {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.charge_row_white {
  display: flex;
  gap: 10px;
  justify-content: space-between;
}

.charge_item_white {
  flex: 1;
  text-align: center;
  padding: 10px;
}

.charge_number_white {
  font-size: 20px;
  font-weight: 700;
  color: #000;
  margin-bottom: 4px;
}

.charge_label_white {
  font-size: 15px;
  color: #555;
  line-height: 1.2;
}

/* Marqueurs Leaflet */
:deep(.custom-marker-active),
:deep(.custom-marker-planned) { background: transparent; }

:deep(.marker-active) {
  width: 16px; height: 16px;
  background-color: #e74c3c;
  border: 2px solid white;
  border-radius: 50%;
  box-shadow: 0 0 0 2px #e74c3c;
  animation: pulse-active 2s infinite;
}

:deep(.marker-planned) {
  width: 16px; height: 16px;
  background-color: #95a5a6;
  border: 2px solid white;
  border-radius: 50%;
  box-shadow: 0 0 0 2px #95a5a6;
}

@keyframes pulse-active {
  0%   { box-shadow: 0 0 0 0   rgba(231,76,60,0.7); }
  70%  { box-shadow: 0 0 0 10px rgba(231,76,60,0);   }
  100% { box-shadow: 0 0 0 0   rgba(231,76,60,0);    }
}

:deep(.station-popup) { font-family: inherit; min-width: 180px; }
:deep(.station-popup h3) { margin: 0 0 8px; color: #1a5d7a; font-size: 14px; }
:deep(.station-popup p)  { margin: 4px 0; font-size: 12px; color: #555; }
:deep(.station-popup strong) { color: #2c7da0; }

/* Titres communs */
.title {
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  text-align: center;
  color: #222;
}
.large {
  font-size: 4rem;
  font-weight: 700;
  background: linear-gradient(135deg, #000000 0%, #444444 50%, #888888 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-right: 12px;
  display: inline-block;
  vertical-align: middle;
}
.desc {
  text-align: center;
  color: #666;
  max-width: 900px;
  margin: 0 auto 2rem auto;
  line-height: 1.5;
  font-size: 1rem;
}

/* ============================================================
   SECTION 3 — CORRECTION largeur identique image et flou
   ============================================================ */
.section3_1 {
  position: relative;
  max-width: 1400px;
  margin: 40px auto 0;
  padding: 0 5%;
}

.image_container {
  position: relative;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
}

.charge_pc,
.charge_mb {
  width: 100%;
  border-radius: 15px;
  display: block;
}

.charge_mb { display: none; }

.blur_overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 90px;
  background: rgba(0,0,0,0.4);
  backdrop-filter: blur(8px);
  z-index: 2;
}

.electric_list {
  position: absolute;
  bottom: 20px;
  left: 5%;
  right: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  padding: 0 30px;
}

.electric_item { text-align: center; }
.electric_item_left  { text-align: left;  margin-left: 20px; }
.electric_item_center { text-align: center; }
.electric_item_right { text-align: right; margin-right: 20px; }

.num {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.unit {
  font-size: 1rem;
  margin-left: 4px;
  color: white;
}

.tips {
  font-size: 0.85rem;
  color: white;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
}

/* ============================================================
   SECTION 4 — Ajout des padding left/right comme les autres sections
   ============================================================ */
.section4 { 
  background: #fafafa;
  padding: 0 5%; /* Ajout du padding horizontal */
}

.section4_1 {
  max-width: 1400px;
  margin: 0 auto;
  border-radius: 32px;
  overflow: hidden;
  position: relative;
}

.section4_1_content { border-radius: 24px; overflow: hidden; }

.video { width: 100%; position: relative; }

.video-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 24px;
  border-radius: 50px;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  white-space: nowrap;
  z-index: 10;
}

.video-btn:hover {
  background: rgba(44, 125, 160, 0.85);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translate(-50%, -50%) scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.video-btn:active {
  transform: translate(-50%, -50%) scale(0.98);
}

.video-btn img {
  width: 16px;
  height: 16px;
  filter: brightness(0) invert(1);
  transition: transform 0.3s ease;
}

.video-btn:hover img {
  transform: scale(1.1);
}

/* Modal Vidéo */
.video-modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(6px);
}

.video-modal-content {
  width: 85%;
  max-width: 900px;
  position: relative;
  animation: fadeIn 0.25s ease;
}

.video-modal-content video {
  width: 100%;
  border-radius: 18px;
}

.close-btn {
  position: absolute;
  top: -45px;
  right: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: white;
  cursor: pointer;
  font-size: 18px;
}

@keyframes fadeIn {
  from { transform: scale(0.95); opacity: 0; }
  to   { transform: scale(1);    opacity: 1; }
}

/* ============================================================
   SECTION 5 — Augmentation de la taille du texte des onglets
   ============================================================ */
.section5 .horizontal-tab {
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 5%;
}

/* Titre section 5 : taille fluide selon écran */
.section5 .title {
  font-size: clamp(1.1rem, 3vw, 2.5rem);
  padding: 0 5%;
}

.section5 .title .large {
  font-size: clamp(1.4rem, 4.5vw, 4rem);
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
}

/* Augmentation de la taille des onglets desktop */
.section5 .tab-item {
  font-size: 1.1rem; /* Augmenté de 1.1rem à 1.3rem */
  padding: 10px 0;
}

/* Augmentation de la taille des onglets mobile */
.section5 .tab-item_mb {
  font-size: 1rem; /* Augmenté de 0.9rem à 1rem */
  padding: 8px 18px;
}

.tab_content_demo {
  display: flex;
  justify-content: center;
}

.img-wrapper {
  position: relative;
  display: inline-block;
  border-radius: 15px;
  overflow: hidden;
  max-width: 100%;
  width: 100%;
}

.img-wrapper img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.tab-content-item {
  display: none;
  animation: fadeInSlide 0.3s ease;
}

.tab-content-item.active {
  display: block;
}

@keyframes fadeInSlide {
  from { opacity: 0; transform: translateX(10px); }
  to   { opacity: 1; transform: translateX(0);    }
}

.tab_desc {
  position: absolute;
  bottom: 0;
  left: 0; right: 0;
  height: 90px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: rgba(0,0,0,0.4);
  backdrop-filter: blur(8px);
  border-radius: 0 0 15px 15px;
  z-index: 2;
  color: #fff;
  font-size: 20px;
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from { transform: translateY(100%); }
  to   { transform: translateY(0);    }
}

/* Onglets communs */
.horizontal-tab { margin: 40px 0; }

.tab-nav {
  display: flex;
  justify-content: center;
  gap: 40px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 12px;
  position: relative;
  flex-wrap: wrap;
}

.tab-item {
  font-size: 1.1rem;
  cursor: pointer;
  padding: 8px 0;
  color: #666;
  transition: 0.2s;
  position: relative;
}

.tab-item.active {
  color: #000;
  font-weight: 600;
}

.tab-item.active::after {
  content: '';
  position: absolute;
  bottom: -13px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #000;
  animation: underlineSlide 0.2s ease;
}

@keyframes underlineSlide {
  from { width: 0; }
  to   { width: 100%; }
}

.tab_mb {
  display: none;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.tab-item_mb {
  padding: 6px 14px;
  border-radius: 20px;
  border: 1px solid #ccc;
  cursor: pointer;
  font-size: 0.9rem;
  color: #666;
  transition: 0.2s;
}

.tab-item_mb.active {
  background: #000;
  color: white;
  border-color: #000;
}

/* Section 6 - Guides */
.section6 { display: none; }

.book-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 30px;
}

.book-card {
  background: #fafafa;
  border-radius: 20px;
  overflow: hidden;
  padding: 16px;
  border: 1px solid #e0e0e0;
  transition: transform 0.3s;
}

.book-card:hover { transform: translateY(-5px); }

.book-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
}

.book-card h4 { margin: 12px 0 8px; font-size: 1.1rem; color: #222; }
.book-card p  { color: #666; font-size: 0.85rem; }

.more {
  margin-top: 16px;
  color: #000;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
}

/* ============================================================
   SECTION 7 — image pleine + contenu ancré en haut
   ============================================================ */
.section7 {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background: #000;
}

.section7::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.45) 0%,
    rgba(0, 0, 0, 0.15) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
}

.section7 .headImg {
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  z-index: 0;
}

.section7 .content {
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  padding: 0 20px;
  max-width: 800px;
  width: 90%;
}

.section7 .title {
  font-size: 2rem;
  margin-bottom: 30px;
  color: white;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.voyah-button {
  background: transparent;
  border: 2px solid white;
  color: white;
  padding: 12px 36px;
  border-radius: 40px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 500;
  backdrop-filter: blur(4px);
}

.voyah-button:hover {
  background: rgba(44, 125, 160, 0.8);
  border-color: #2c7da0;
  color: white;
  transform: scale(1.05);
}

/* ============================================================
   RESPONSIVE
   ============================================================ */
@media (max-width: 968px) {
  .energy_content_wrapper { flex-direction: column; gap: 30px; }
  .tunisia_map_wrapper { width: 100%; }
  .tunisia-map { height: 400px; }
  .charge_card_white {
    position: relative;
    top: auto; left: auto;
    margin-bottom: 20px;
    width: 100%; max-width: 100%;
  }
  .title { font-size: 1.8rem; }
  .large { font-size: 2.5rem; display: block; margin-bottom: 10px; }

  .section3_1,
  .section4_1 { padding: 0 4%; }

  .section5 .horizontal-tab { padding: 0 4%; }

  .section7 .content { top: 40px; }
  .section7 .title { font-size: 1.5rem; }
}

@media (max-width: 768px) {
  .bg .title { font-size: 2.2rem; }
  .bg .desc  { font-size: 0.9rem; }
  .title     { font-size: 1.5rem; }
  .large     { font-size: 2rem; display: block; margin-bottom: 8px; margin-right: 0; }
  .bg_pc     { display: none; }
  .bg_mb     { display: block; }
  .charge_pc { display: none; }
  .charge_mb { display: block; }
  .tab-nav   { display: none; }
  .tab_mb    { display: flex; }
  .section-energy { padding: 50px 5%; }
  .cards_top_row  { flex-direction: column; gap: 16px; }
  .main_title     { font-size: 1.5rem; }
  .subtitle_voyah,
  .subtitle_power { font-size: 1rem; }
  .main_subtitle  { margin-bottom: 28px; }
  .info_card      { min-height: 160px; padding: 16px 20px 32px; }
  .card_full      { min-height: 160px; }
  .card_number    { font-size: 3.5rem; }
  .charge_title_white { font-size: 1rem; margin-bottom: 16px; }
  .charge_row_white   { flex-direction: column; gap: 12px; }
  .charge_number_white { font-size: 1.1rem; }
  .charge_label_white  { font-size: 0.7rem; }
  .tunisia-map    { height: 350px; }
  .electric_list  { padding: 0 15px; bottom: 12px; }
  .blur_overlay   { height: 60px; }
  .num  { font-size: 1rem; }
  .unit { font-size: 0.6rem; }
  .tips { font-size: 0.5rem; }
  .video-btn { padding: 8px 18px; font-size: 12px; gap: 8px; }
  .video-btn img { width: 14px; height: 14px; }
  .tab_desc { height: 70px; font-size: 0.85rem; padding: 0 16px; }

  .section5 .title       { font-size: clamp(1rem, 4vw, 1.5rem); }
  .section5 .title .large { font-size: clamp(1.3rem, 5.5vw, 2rem); }
  
  /* Ajustement section 4 sur mobile */
  .section4 {
    padding: 0 4%; /* Padding horizontal sur mobile aussi */
  }

  .section7 .content { top: 30px; }
  .section7 .title { font-size: 1.3rem; }
  .voyah-button { padding: 10px 28px; font-size: 0.9rem; }
}

@media (max-width: 480px) {
  .main_card { padding: 20px 16px; }
  .main_title { font-size: 1.2rem; }
  .subtitle_voyah,
  .subtitle_power { font-size: 0.9rem; letter-spacing: 4px; }
  .card_line { font-size: 0.75rem; }
  .card_full .two_columns { flex-direction: column !important; gap: 0 !important; }
  .charge_card_white { padding: 16px 12px; }
  .charge_number_white { font-size: 1rem; }
  .tunisia-map { height: 250px; }
  .img-wrapper { max-width: 100%; }
  .video-btn { padding: 6px 14px; font-size: 11px; gap: 6px; }
  .video-btn img { width: 12px; height: 12px; }
  .tab_desc { height: 60px; font-size: 0.7rem; padding: 0 12px; }

  .section3_1, .section4_1 { padding: 0 3%; }
  .blur_overlay { left: 0; right: 0; }
  .electric_list { left: 3%; right: 3%; }

  .section5 .title { font-size: clamp(0.9rem, 3.5vw, 1.2rem); padding: 0 3%; }
  .section5 .title .large { font-size: clamp(1.1rem, 5vw, 1.5rem); }
  .desc { font-size: 0.85rem; padding: 0 15px; }
  
  /* Ajustement section 4 sur très petits écrans */
  .section4 {
    padding: 0 3%;
  }

  .section7 .content { top: 20px; }
  .section7 .title { font-size: 1rem; margin-bottom: 20px; }
  .voyah-button { padding: 8px 20px; font-size: 0.85rem; }
}
</style>