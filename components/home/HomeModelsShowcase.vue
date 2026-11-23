<template>
  <section ref="sectionRef" class="home-models">
    <div ref="tabsHost" class="home-models__tabs">
      <button
        v-for="item in entries"
        :key="item.slug"
        type="button"
        class="home-models__tab"
        :class="{ 'home-models__tab--active': isActiveTab(item) }"
        @click="selectTab(item)"
      >
        {{ item.word }}
      </button>
    </div>

    <div ref="stageHost" class="home-models__stage">
      <div class="home-models__scene" aria-hidden="true">
        <TresCanvas class="home-models__scene-canvas" :dpr="[1, 1.5]" :fps-limit="30" render-mode="on-demand" clear-color="#000000" :clear-alpha="0" :alpha="true">
          <TresPerspectiveCamera :position="[0, 0.32, cameraDistance]" :fov="35" />
          <TresAmbientLight :intensity="1.5" />
          <TresDirectionalLight :position="[-5, 7, 8]" :intensity="2.2" />
          <TresDirectionalLight :position="[5, 1, -4]" :intensity="0.8" />
          <TresMesh :position="[0, -vehicleSize.height * 0.38, 0]" :scale="[vehicleSize.width * 0.46, 0.025, vehicleSize.width * 0.12]">
            <TresSphereGeometry :args="[1, 48, 24]" />
            <TresMeshStandardMaterial color="#60747b" :transparent="true" :opacity="0.18" :roughness="0.95" />
          </TresMesh>
        </TresCanvas>
      </div>
      <button
        type="button"
        class="home-models__arrow home-models__arrow--left"
        :aria-label="leftLabel"
        @click="step(-1)"
      >
        &#8249;
      </button>

      <div class="home-models__swiper" @transitionend="onSettled">
        <div class="home-models__wrapper" :style="trackStyle">
          <div v-for="item in looped" :key="item.key" class="home-models__slide" :class="{ 'home-models__slide--strong-name': ['FREE', 'DREAM', 'COURAGE', 'PASSION'].includes(item.word) }">
            <div class="home-models__bg-word">{{ item.word }}</div>
            <div class="home-models__car">
              <img class="home-models__fallback" :src="item.image" :alt="textFor(item.name)" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        class="home-models__arrow home-models__arrow--right"
        :aria-label="rightLabel"
        @click="step(1)"
      >
        &#8250;
      </button>
    </div>

    <div class="home-models__meta">
      <div class="home-models__name-wrap">
        <div class="home-models__name-box">
          <img class="home-models__name-logo" :src="model.logo" :alt="model.word" />
          <h3 class="home-models__name">{{ textFor(model.name) }}</h3>
        </div>
        <a class="home-models__view" :href="buildPath(model.slug)">
          <span>{{ textFor(viewLabel) }}</span>
          <img src="/voyah-resources/images/showcase/more.png" alt="" aria-hidden="true" />
        </a>
      </div>

      <div class="home-models__stats">
        <div v-for="(stat, index) in model.stats" :key="index" class="home-models__stat">
          <div class="home-models__stat-value">{{ stat.value }}</div>
          <span>{{ textFor(stat.label) }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ModelShowcaseEntry } from '~/data/site'
import { modelsShowcaseViewLabel } from '~/data/site'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useSectionReveal } from '~/composables/useSectionReveal'
import { useSiteContent } from '~/composables/useSiteContent'

const props = defineProps<{ entries: ModelShowcaseEntry[] }>()

/** Les modèles marqués `hidden` restent dans les données mais n'apparaissent pas dans la section. */
const entries = computed(() => props.entries.filter((item) => !item.hidden))

const { buildPath, locale, textFor } = useSiteContent()
const sectionRef = useSectionReveal({ stagger: 0.1, y: 26 })
const stageHost = ref<HTMLElement | null>(null)
const tabsHost = ref<HTMLElement | null>(null)
const vehicleSize = ref({ width: 13.8, height: 4.75 })
const cameraDistance = ref(15)
let resizeObserver: ResizeObserver | undefined

const viewLabel = modelsShowcaseViewLabel

const active = ref(0)
/** Le défilement est bouclé : la première et la dernière vue sont dupliquées en bout de piste. */
const trackIndex = ref(1)
const animate = ref(true)

const isRtl = computed(() => locale.value.dir === 'rtl')
const model = computed(() => entries.value[active.value] ?? entries.value[0])

const looped = computed(() => {
  const list = entries.value
  if (list.length < 2) return list.map((item, index) => ({ ...item, key: `solo-${index}` }))
  return [
    { ...list[list.length - 1], key: 'clone-last' },
    ...list.map((item, index) => ({ ...item, key: `real-${index}` })),
    { ...list[0], key: 'clone-first' }
  ]
})

onMounted(() => {
  const stage = stageHost.value
  if (!stage) return
  const resizeScene = () => {
    const { width, height } = stage.getBoundingClientRect()
    if (!width || !height) return
    const carWidth = Math.min(width * 0.99, height * 2.9)
    const carHeight = carWidth / 2.9
    const aspect = width / height
    const halfFov = (35 * Math.PI) / 360
    vehicleSize.value = { width: carWidth, height: carHeight }
    cameraDistance.value = Math.max(
      carHeight / (2 * Math.tan(halfFov) * 0.96),
      carWidth / (2 * Math.tan(halfFov) * aspect * 0.96)
    )
  }
  resizeScene()
  resizeObserver = new ResizeObserver(resizeScene)
  resizeObserver.observe(stage)
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
})

const trackStyle = computed(() => ({
  transform: `translateX(${(isRtl.value ? 1 : -1) * trackIndex.value * 100}%)`,
  transition: animate.value ? 'transform 0.65s cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none'
}))

const leftLabel = computed(() => {
  if (locale.value.code === 'fr') return isRtl.value ? 'Modèle suivant' : 'Modèle précédent'
  if (locale.value.code === 'ar') return isRtl.value ? 'الطراز التالي' : 'الطراز السابق'
  return isRtl.value ? 'Next model' : 'Previous model'
})

const rightLabel = computed(() => {
  if (locale.value.code === 'fr') return isRtl.value ? 'Modèle précédent' : 'Modèle suivant'
  if (locale.value.code === 'ar') return isRtl.value ? 'الطراز السابق' : 'الطراز التالي'
  return isRtl.value ? 'Previous model' : 'Next model'
})

const setActive = (index: number) => {
  const total = entries.value.length
  active.value = ((index % total) + total) % total
}

const step = (delta: number) => {
  const direction = isRtl.value ? -delta : delta
  animate.value = true
  trackIndex.value += direction
  setActive(trackIndex.value - 1)
}

const select = (index: number) => {
  if (index === active.value) return
  animate.value = true
  trackIndex.value = index + 1
  active.value = index
}

const isActiveTab = (item: ModelShowcaseEntry) => entries.value[active.value]?.slug === item.slug

const selectTab = (item: ModelShowcaseEntry) => {
  const index = entries.value.findIndex((entry) => entry.slug === item.slug)
  if (index >= 0) select(index)
}

const settleWithoutAnimation = (index: number) => {
  animate.value = false
  trackIndex.value = index
  requestAnimationFrame(() => {
    animate.value = true
  })
}

const onSettled = () => {
  const last = entries.value.length
  if (trackIndex.value > last) settleWithoutAnimation(1)
  else if (trackIndex.value < 1) settleWithoutAnimation(last)
}

watch(
  () => entries.value.length,
  (total) => {
    if (active.value >= total) active.value = 0
    settleWithoutAnimation(Math.min(Math.max(trackIndex.value, 1), total))
  }
)

/** Sur mobile, garde l'onglet actif visible dans la bande défilante. */
watch(
  active,
  () => {
    if (typeof window === 'undefined' || !window.matchMedia('(max-width: 992px)').matches) return
    const button = tabsHost.value?.querySelector<HTMLElement>('.home-models__tab--active')
    button?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  },
  { flush: 'post' }
)
</script>

<style scoped>
/* Gabarit relevé sur la section « OUR MODEL » de voyah-auto.com, calée sous la barre de navigation. */
.home-models {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: clamp(8px, 1.4vh, 16px);
  background: rgb(241, 248, 255);
  height: calc(100vh - 40px);
  min-height: 620px;
  padding: clamp(24px, 3vh, 40px) 0;
  text-align: center;
}

.home-models__tabs {
  flex: 0 0 auto;
  display: flex;
  gap: clamp(28px, 4vw, 60px);
  justify-content: center;
  margin: 0 5vw;
}

.home-models__tab {
  min-width: clamp(92px, 8vw, 132px);
  height: clamp(34px, 2.8vw, 42px);
  padding: 0 clamp(16px, 1.6vw, 24px);
  border: 1px solid rgba(10, 15, 23, 0.8);
  border-radius: 4px;
  background: transparent;
  color: #0a0f17;
  cursor: pointer;
  font-size: clamp(14px, 1vw, 18px);
  letter-spacing: clamp(1px, 0.12vw, 2px);
  transition: color 0.25s, background 0.25s, border-color 0.25s;
}

.home-models__tab--active,
.home-models__tab:hover {
  background: rgb(64, 106, 112);
  border-color: rgb(64, 106, 112);
  color: #fff;
}

.home-models__stage {
  position: relative;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  width: min(1600px, 100%);
  min-height: 300px;
  max-height: 720px;
  margin: 0 auto;
  overflow: visible;
}

.home-models__swiper {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.home-models__wrapper {
  display: flex;
  width: 100%;
  height: 100%;
}

.home-models__slide {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 100%;
  height: 100%;
  overflow: hidden;
}

.home-models__bg-word {
  position: absolute;
  top: 14%;
  left: 50%;
  z-index: 0;
  transform: translate(-50%, -50%);
  pointer-events: none;
  background: linear-gradient(
      rgba(20, 35, 40, 0.84),
      rgba(64, 106, 112, 0.84)
    )
    text;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  font-size: clamp(72px, 9vw, 136px);
  font-weight: 900;
  letter-spacing: 0.02em;
  opacity: 0.7;
  line-height: 1;
  pointer-events: none;
  text-transform: uppercase;
  user-select: none;
  white-space: nowrap;
}

.home-models__slide--strong-name .home-models__bg-word {
  background: linear-gradient(#1a2f33, #3b6066) text;
  -webkit-background-clip: text;
  background-clip: text;
  opacity: 0.78;
  font-weight: 900;
  letter-spacing: 0.02em;
}

.home-models__car {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
}

.home-models__car img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transform: scale(1.15);
}

.home-models__scene {
  position: absolute;
  z-index: 0;
  inset: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
}

.home-models__scene-canvas {
  width: 100%;
  height: 100%;
}

.home-models__fallback {
  position: absolute;
  z-index: 1;
  inset: 0;
}

.home-models__arrow {
  position: absolute;
  top: 50%;
  z-index: 2;
  transform: translateY(-50%);
  width: 52px;
  height: 52px;
  padding: 0;
  border: 0;
  background: transparent;
  color: #333;
  cursor: pointer;
  font-size: 52px;
  font-weight: 300;
  line-height: 1;
  transition: color 0.25s, opacity 0.25s;
}

.home-models__arrow:hover {
  color: rgb(64, 106, 112);
  opacity: 0.85;
}

.home-models__arrow--left {
  left: 5vw;
}

.home-models__arrow--right {
  right: 5vw;
}

.home-models__meta {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: space-between;
  width: min(1200px, 83vw);
  margin: 0 auto;
  text-align: start;
}

.home-models__name-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 45%;
}

.home-models__name-box {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.home-models__name-logo {
  display: block;
  width: auto;
  height: 18px;
  margin: 0 auto;
  object-fit: contain;
  object-position: left center;
}

.home-models__name {
  margin: 0;
  min-height: 1.4em;
  color: rgba(10, 15, 23, 0.6);
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 1.4;
  text-align: center;
}

.home-models__view {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 149px;
  height: 48px;
  padding: 0 22px;
  margin-inline-start: 20px;
  border: 1px solid rgba(10, 15, 23, 0.6);
  border-radius: 4px;
  color: #0a0f17;
  font-size: 18px;
  text-decoration: none;
  transition: color 0.25s, border-color 0.25s, opacity 0.25s;
}

.home-models__view img {
  display: block;
  width: 16px;
  height: 16px;
  object-fit: contain;
}

.home-models__view:hover {
  color: rgb(64, 106, 112);
  opacity: 0.85;
}

.home-models__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  width: 55%;
  padding-inline-start: 5vw;
}

.home-models__stat {
  position: relative;
  padding: 0 10px;
}

.home-models__stat:not(:first-child)::before {
  content: '';
  position: absolute;
  inset-inline-start: 0;
  top: 50%;
  width: 1px;
  height: 32px;
  transform: translateY(-50%);
  background: rgba(10, 15, 23, 0.2);
}

.home-models__stat-value {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: #0a0f17;
  font-size: 30px;
  font-weight: 700;
  line-height: 32px;
  text-align: center;
  white-space: nowrap;
}

.home-models__stat span {
  display: block;
  margin-top: 8px;
  color: #6c757d;
  font-size: 16px;
  line-height: 1.4;
  text-align: center;
  white-space: nowrap;
}

@media (max-width: 1199px) {
  .home-models__name-wrap {
    display: block;
    width: 40%;
  }

  .home-models__name {
    margin-bottom: 20px;
    text-align: start;
  }

  .home-models__stats {
    width: 60%;
    padding-inline-start: 2vw;
  }

  .home-models__stat-value {
    font-size: 25px;
    font-weight: 600;
  }
}

@media (max-width: 991px) {
  .home-models__stats {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
    width: 100%;
  }

  .home-models__stat:not(:first-child)::before {
    height: 28px;
  }
}

@media (max-width: 992px) {
  .home-models {
    height: auto;
    min-height: 0;
    padding: 36px 0;
  }

  .home-models__stage {
    flex: 0 0 auto;
    height: min(48vh, 460px);
    min-height: 240px;
    max-height: none;
  }

  .home-models__tabs {
    justify-content: flex-start;
    gap: 12px;
    width: 100%;
    max-width: 100vw;
    margin-inline: 0;
    padding: 0 24px 8px;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x proximity;
    scrollbar-width: none;
  }

  .home-models__tabs::-webkit-scrollbar {
    display: none;
  }

  .home-models__tab {
    flex: 0 0 auto;
    min-width: auto;
    height: 34px;
    padding: 0 16px;
    font-size: 13px;
    letter-spacing: 1px;
    white-space: nowrap;
    scroll-snap-align: center;
  }

  .home-models__bg-word {
    top: 12%;
    font-size: clamp(42px, 12vw, 72px);
    letter-spacing: 0.02em;
  }

  .home-models__arrow {
    width: 40px;
    height: 40px;
    font-size: 40px;
  }

  .home-models__meta {
    flex-direction: column-reverse;
    align-items: stretch;
    gap: 22px;
    width: calc(100% - 48px);
    margin: 8px auto 0;
    padding: 0;
    text-align: center;
  }

  .home-models__name-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    width: 100%;
  }

  .home-models__name-box {
    align-items: center;
  }

  .home-models__name {
    margin-bottom: 0;
    text-align: center;
  }

  .home-models__view {
    margin-inline-start: 0;
    width: min(220px, 100%);
    height: 44px;
    font-size: 15px;
  }

  .home-models__stats {
    grid-template-columns: minmax(0, 1.8fr) minmax(0, 1fr) minmax(0, 1fr);
    gap: 10px;
    width: 100%;
    padding-inline-start: 0;
  }

  .home-models__stat {
    padding: 0 6px;
  }

  .home-models__stat-value {
    font-size: clamp(20px, 1.4vw, 26px);
    line-height: 1.1;
  }

  .home-models__stat span {
    margin-top: 6px;
    font-size: 12px;
    white-space: normal;
  }
}

@media (max-width: 992px) and (max-height: 680px) {
  .home-models {
    padding: 20px 0;
  }

  .home-models__stage {
    height: min(34vh, 300px);
    min-height: 200px;
  }
}
</style>
