<template>
  <header
    class="site-header"
    :class="{
      'site-header--mobile-open': mobileOpen,
      'site-header--transparent': isTransparent
    }"
  >
    <div class="container header-bar">
      <div class="header-left">
        <NuxtLink :to="buildPath()" class="brand-mark" aria-label="Voyah home">
          <img src="/sitelogo/pc/brand.png" alt="Voyah" />
        </NuxtLink>

        <div v-if="currentModel" class="header-model desktop-only">
          <img :src="currentModel.logo" :alt="textFor(currentModel.title)" class="header-model__logo" />
          <div class="header-model__meta">
            <span class="header-model__name">{{ textFor(currentModel.title) }}</span>
            <span class="header-model__price">{{ textFor(currentModel.price) }}</span>
          </div>
        </div>

        <nav class="header-nav desktop-only" aria-label="Primary navigation">
          <div
            v-for="item in navigation"
            :key="item.slug ?? item.label.en"
            class="nav-group"
            @mouseenter="openGroup(item.label.en)"
            @mouseleave="queueClose"
          >
            <NuxtLink
              v-if="item.slug"
              :to="buildPath(item.slug)"
              class="nav-link"
              :class="{ active: isItemActive(item) }"
            >
              {{ textFor(item.label) }}
            </NuxtLink>

            <button
              v-else
              type="button"
              class="nav-link nav-button"
              :class="{ active: activeGroup === item.label.en || (isHomeRoute && item.label.en === 'Models') }"
            >
              {{ textFor(item.label) }}
            </button>

            <div
              v-if="item.children?.length"
              :class="[
                'nav-dropdown',
                {
                  open: activeGroup === item.label.en,
                  'nav-dropdown--models': item.label.en === 'Models'
                }
              ]"
              @mouseenter="cancelClose"
              @mouseleave="queueClose"
            >
              <div v-if="item.label.en === 'Models'" class="models-dropdown">
                <div class="models-dropdown__main">
                  <div
                    v-for="section in modelMenuSections"
                    :key="section.key"
                    class="models-section"
                  >
                    <h5 class="models-section__title">{{ textFor(section.title) }}</h5>

                    <div class="models-grid">
                      <NuxtLink
                        v-for="entry in section.items"
                        :key="entry.slug"
                        :to="buildPath(entry.slug)"
                        class="models-card"
                      >
                        <div class="models-card__media">
                          <img
                            :src="entry.image"
                            :alt="textFor(entry.label)"
                            class="models-card__image"
                          />
                        </div>
                        <p class="models-card__name">{{ textFor(entry.label) }}</p>
                      </NuxtLink>
                    </div>
                  </div>
                </div>

                <aside class="models-dropdown__tools">
                  <div class="models-tools">
                    <div class="models-tools__title">{{ textFor(toolMenu.title) }}</div>

                    <div class="models-tools__list">
                      <NuxtLink
                        v-for="tool in toolMenu.items"
                        :key="tool.slug"
                        :to="buildPath(tool.slug)"
                        class="models-tools__item"
                      >
                        {{ textFor(tool.label) }}
                      </NuxtLink>
                    </div>
                  </div>
                </aside>
              </div>

              <div v-else class="dropdown-inner">
                <NuxtLink
                  v-for="child in item.children"
                  :key="child.slug ?? child.label.en"
                  :to="buildPath(child.slug)"
                  class="dropdown-card"
                >
                  <img
                    v-if="child.thumb"
                    :src="child.thumb"
                    :alt="textFor(child.label)"
                    class="dropdown-thumb"
                  />
                  <span class="dropdown-card__label">{{ textFor(child.label) }}</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div class="header-actions desktop-only">
        <template v-if="isHomeRoute">
          <div
            class="locale-menu"
            @mouseenter="localeOpen = true"
            @mouseleave="localeOpen = false"
          >
            <button type="button" class="header-utility header-utility--icon" aria-label="Language switcher">
              <span class="header-utility__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="8.25" stroke="currentColor" stroke-width="1.5" />
                  <path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.5" />
                  <path d="M12 3.75C14.49 5.91 15.9 8.9 15.9 12C15.9 15.1 14.49 18.09 12 20.25C9.51 18.09 8.1 15.1 8.1 12C8.1 8.9 9.51 5.91 12 3.75Z" stroke="currentColor" stroke-width="1.5" />
                </svg>
              </span>
            </button>

            <div v-if="localeOpen" class="locale-menu__panel">
              <NuxtLink
                v-for="localeItem in locales"
                :key="localeItem.code"
                :to="switchLocalePath(localeItem.code)"
                :class="['locale-menu__item', { active: locale.code === localeItem.code }]"
              >
                {{ localeItem.name }}
              </NuxtLink>
            </div>
          </div>

          <button type="button" class="header-utility">
            <span class="header-utility__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 12C14.0711 12 15.75 10.3211 15.75 8.25C15.75 6.17893 14.0711 4.5 12 4.5C9.92893 4.5 8.25 6.17893 8.25 8.25C8.25 10.3211 9.92893 12 12 12Z" stroke="currentColor" stroke-width="1.5" />
                <path d="M5.25 19.5C6.35381 16.8787 8.95354 15 12 15C15.0465 15 17.6462 16.8787 18.75 19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              </svg>
            </span>
            {{ loginLabel }}
          </button>

          <NuxtLink
            :to="buildPath('book-drive.html')"
            class="header-cta header-cta--ghost"
          >
            {{ testDriveLabel }}
          </NuxtLink>
        </template>

        <template v-else>
          <div class="locale-picker" aria-label="Language switcher">
            <NuxtLink
              v-for="localeItem in locales"
              :key="localeItem.code"
              :to="switchLocalePath(localeItem.code)"
              :class="['locale-chip', { active: locale.code === localeItem.code }]"
            >
              {{ localeItem.code.toUpperCase() }}
            </NuxtLink>
          </div>

          <button type="button" class="header-utility">
            {{ loginLabel }}
          </button>

          <NuxtLink v-if="currentModel" :to="buildPath(currentModel.slug)" class="header-cta header-cta--ghost">
            {{ configLabel }}
          </NuxtLink>

          <NuxtLink
            :to="buildPath('book-drive.html')"
            class="header-cta header-cta--ghost"
          >
            {{ testDriveLabel }}
          </NuxtLink>

          <NuxtLink :to="buildPath(currentModel?.slug ?? 'titan.html')" class="header-cta header-cta--primary">
            {{ orderLabel }}
          </NuxtLink>
        </template>
      </div>

      <button
        class="menu-toggle mobile-only"
        type="button"
        :aria-expanded="mobileOpen ? 'true' : 'false'"
        aria-label="Toggle menu"
        @click="mobileOpen = !mobileOpen"
      >
        <span class="menu-toggle__line" />
        <span class="menu-toggle__line" />
        <span class="menu-toggle__line" />
      </button>
    </div>

    <transition name="mobile-panel-fade">
      <div v-if="mobileOpen" class="mobile-panel">
        <div class="container mobile-stack">
          <div
            v-for="item in navigation"
            :key="item.slug ?? item.label.en"
            class="mobile-group"
          >
            <NuxtLink
              v-if="item.slug"
              :to="buildPath(item.slug)"
              class="mobile-link"
              @click="mobileOpen = false"
            >
              {{ textFor(item.label) }}
            </NuxtLink>

            <div v-else class="mobile-label">
              {{ textFor(item.label) }}
            </div>

            <div v-if="item.children?.length" class="mobile-children">
              <NuxtLink
                v-for="child in item.children"
                :key="child.slug ?? child.label.en"
                :to="buildPath(child.slug)"
                class="mobile-link child"
                @click="mobileOpen = false"
              >
                {{ textFor(child.label) }}
              </NuxtLink>
            </div>
          </div>

          <div class="mobile-locales">
            <NuxtLink
              v-for="localeItem in locales"
              :key="localeItem.code"
              :to="switchLocalePath(localeItem.code)"
              :class="['locale-chip', { active: locale.code === localeItem.code }]"
              @click="mobileOpen = false"
            >
              {{ localeItem.code.toUpperCase() }}
            </NuxtLink>
          </div>

          <div class="mobile-cta-row">
            <NuxtLink
              v-if="currentModel"
              :to="buildPath(currentModel.slug)"
              class="header-cta header-cta--ghost"
              @click="mobileOpen = false"
            >
              {{ configLabel }}
            </NuxtLink>

            <NuxtLink
              :to="buildPath('book-drive.html')"
              class="header-cta header-cta--ghost"
              @click="mobileOpen = false"
            >
              {{ testDriveLabel }}
            </NuxtLink>

            <NuxtLink
              :to="buildPath(currentModel?.slug ?? 'titan.html')"
              class="header-cta header-cta--primary"
              @click="mobileOpen = false"
            >
              {{ orderLabel }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </transition>

    <transition name="header-mask-fade">
      <div
        v-if="activeGroup && !mobileOpen"
        class="header-menu-mask desktop-only"
        @mouseenter="queueClose"
        @click="activeGroup = null"
      />
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from '#imports'
import { useSiteContent } from '~/composables/useSiteContent'
import type { LocalizedText } from '~/data/site'

const { locale, locales, navigation, buildPath, switchLocalePath, textFor, resolveCurrentPage } = useSiteContent()

const route = useRoute()
const mobileOpen = ref(false)
const activeGroup = ref<string | null>(null)
const localeOpen = ref(false)
let closeTimer: ReturnType<typeof setTimeout> | null = null
const currentPage = computed(() => resolveCurrentPage())
const currentModel = computed(() => (currentPage.value?.kind === 'model' ? currentPage.value : null))
const scrollY = ref(0)
const isHomeRoute = computed(() => !currentPage.value)
const isTransparent = computed(() => isHomeRoute.value && scrollY.value < 44 && !mobileOpen.value)

const copy = (en: string, fr: string, ar: string): LocalizedText => ({ en, fr, ar })

const loginLabel = computed(() => {
  if (locale.value.code === 'fr') return 'Connexion'
  if (locale.value.code === 'ar') return 'تسجيل الدخول'
  return 'Login'
})

const configLabel = computed(() => {
  if (locale.value.code === 'fr') return 'All configs'
  if (locale.value.code === 'ar') return 'كل المواصفات'
  return 'All configs'
})

const testDriveLabel = computed(() => {
  if (locale.value.code === 'fr') return 'Test drive'
  if (locale.value.code === 'ar') return 'تجربة قيادة'
  return 'Test drive'
})

const orderLabel = computed(() => {
  if (locale.value.code === 'fr') return 'Order now'
  if (locale.value.code === 'ar') return 'اطلب الآن'
  return 'Order now'
})

const modelMenuSections = [
  {
    key: 'sedan',
    title: copy('Sedans', 'Berlines', 'السيدان'),
    items: [
      {
        slug: 'passion-L.html',
        label: copy('Voyah Passion L', 'Voyah Passion L', 'Voyah Passion L'),
        image: '/website/navigationbar/image/f4f5a6a1-71c8-4531-8a05-4e6e0cf7f70f1770619343790.png'
      },
      {
        slug: 'passion.html',
        label: copy('Voyah Passion', 'Voyah Passion', 'Voyah Passion'),
        image: '/website/navigationbar/image/e1d7bd06-b4c5-462c-8c25-8cf550b2af3a1770619370417.png'
      }
    ]
  },
  {
    key: 'suv',
    title: copy('SUVs', 'SUV', 'سيارات SUV'),
    items: [
      {
        slug: 'titan.html',
        label: copy('Voyah Titan', 'Voyah Titan', 'Voyah Titan'),
        image: '/website/navigationbar/image/482a7b36-c15e-4508-83e5-c9b79227dbfa1770619361896.png'
      },
      {
        slug: 'titan_blackedition.html',
        label: copy('Voyah Titan Black Edition', 'Voyah Titan Black Edition', 'Voyah Titan Black Edition'),
        image: '/website/navigationbar/image/2d3ebdb7-6f35-4bfd-b929-d858d5cb3a351773729769599.png'
      },
      {
        slug: 'titan_X8.html',
        label: copy('Voyah Titan X8', 'Voyah Titan X8', 'Voyah Titan X8'),
        image: '/website/navigationbar/image/d515bc38-574b-44fb-aebc-2f721eccfb461773885854055.png'
      },
      {
        slug: 'free+.html',
        label: copy('Voyah FREE+', 'Voyah FREE+', 'Voyah FREE+'),
        image: '/website/navigationbar/image/48068657-2f04-4e9e-a356-fb33e4b689101770619447889.png'
      },
      {
        slug: 'newCourage.html',
        label: copy('New Voyah Courage', 'Nouveau Voyah Courage', 'Voyah Courage الجديد'),
        image: '/website/navigationbar/image/09a0e118-e3a0-4cc1-afdc-f135820b2c201770619310485.png'
      },
      {
        slug: 'free.html',
        label: copy('Voyah FREE 318', 'Voyah FREE 318', 'Voyah FREE 318'),
        image: '/website/navigationbar/image/ea0f8412-5208-4822-b42d-bdbbb64741b41770619334518.png'
      },
      {
        slug: 'courage.html',
        label: copy('Voyah Courage', 'Voyah Courage', 'Voyah Courage'),
        image: '/website/navigationbar/image/5776c5f7-6be4-4aac-9f05-c0ccd19d30721770619276875.png'
      }
    ]
  },
  {
    key: 'mpv',
    title: copy('MPVs', 'MPV', 'سيارات MPV'),
    items: [
      {
        slug: 'newDreamer26.html',
        label: copy('26 Voyah Dreamer', 'Voyah Dreamer 26', 'Voyah Dreamer 26'),
        image: '/website/navigationbar/image/f30edd0e-0255-42b9-a722-3f2cb4aef38c1770619352950.png'
      },
      {
        slug: 'dreamer-champion.html',
        label: copy('Voyah Dreamer Champion', 'Voyah Dreamer Champion', 'Voyah Dreamer Champion'),
        image: '/website/navigationbar/image/7688c1ff-2ab4-4bd9-aa99-b341f10e001d1772278786816.png'
      },
      {
        slug: 'newDreamer.html',
        label: copy('25 Voyah Dreamer', 'Voyah Dreamer 25', 'Voyah Dreamer 25'),
        image: '/website/navigationbar/image/c8e0e96a-367e-4bc5-aca7-0e35439c4b891770619534354.png'
      },
      {
        slug: 'dreamriver.html',
        label: copy('Voyah Dreamer Mountain River', 'Voyah Dreamer Montagne-Rivière', 'Voyah Dreamer Mountain River'),
        image: '/website/navigationbar/image/6c0d74ca-49f1-4982-8c0c-7ee7c1421b461770619320286.png'
      },
      {
        slug: 'dreamer.html',
        label: copy('24 Voyah Dreamer', 'Voyah Dreamer 24', 'Voyah Dreamer 24'),
        image: '/website/navigationbar/image/dc0ac63f-35e8-4af1-8052-471fdbf5ce9a1770619290710.png'
      }
    ]
  }
]

const toolMenu = {
  title: copy('Tools', 'Outils', 'الأدوات'),
  items: [
    { slug: 'book-drive.html', label: copy('Book a test drive', 'Réserver un essai', 'احجز تجربة قيادة') },
    { slug: 'store.html', label: copy('Store center', 'Centre de magasins', 'مركز المعارض') }
  ]
}

const isItemActive = (item: { slug?: string }) => {
  if (!item.slug) return false
  return route.path.endsWith(item.slug)
}

const cancelClose = () => {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
}

const openGroup = (label: string) => {
  cancelClose()
  activeGroup.value = label
}

const queueClose = () => {
  cancelClose()
  closeTimer = setTimeout(() => {
    activeGroup.value = null
    closeTimer = null
  }, 110)
}

watch(
  () => route.fullPath,
  () => {
    mobileOpen.value = false
    activeGroup.value = null
    localeOpen.value = false
  }
)

const updateScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  updateScroll()
  window.addEventListener('scroll', updateScroll, { passive: true })
})

onBeforeUnmount(() => {
  cancelClose()
  window.removeEventListener('scroll', updateScroll)
})
</script>

<style scoped>
.site-header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 100;
  background: rgba(0, 0, 0, 0.82);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(14px);
  transition:
    background-color 0.28s ease,
    border-color 0.28s ease,
    backdrop-filter 0.28s ease;
}

.site-header--transparent {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.76), rgba(0, 0, 0, 0));
  border-bottom-color: transparent;
  backdrop-filter: blur(0);
}

.site-header--mobile-open {
  background: rgba(6, 10, 14, 0.96);
  backdrop-filter: blur(18px);
}

.header-bar {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  min-height: 68px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 34px;
  min-width: 0;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
}

.brand-mark img {
  width: 116px;
  height: auto;
  display: block;
  filter: brightness(0) invert(1);
  opacity: 0.96;
}

.header-model {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.header-model__logo {
  width: 56px;
  height: 30px;
  object-fit: contain;
}

.header-model__meta {
  display: grid;
  gap: 2px;
}

.header-model__name {
  color: #fff;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.header-model__price {
  color: rgba(255, 255, 255, 0.62);
  font-size: 0.68rem;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 0;
}

.nav-group {
  position: relative;
}

.nav-link,
.nav-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  min-height: 68px;
  padding: 0 15px;
  background: transparent;
  border: 0;
  color: rgba(255, 255, 255, 0.84);
  font-size: 0.78rem;
  font-weight: 400;
  letter-spacing: 0.01em;
  line-height: 1;
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.2s ease;
}

.nav-link::after,
.nav-button::after {
  content: '';
  position: absolute;
  left: 15px;
  right: 15px;
  bottom: 18px;
  height: 2px;
  background: #b31d22;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.22s ease;
}

.nav-link:hover,
.nav-button:hover,
.nav-link.active,
.nav-button.active {
  color: #fff;
}

.nav-link:hover::after,
.nav-button:hover::after,
.nav-link.active::after,
.nav-button.active::after {
  transform: scaleX(1);
}

.nav-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 3;
  opacity: 0;
  pointer-events: none;
  transform: translateY(14px);
  transition: opacity 0.24s ease, transform 0.24s ease;
}

.nav-dropdown.open {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

.nav-dropdown--models {
  left: 50%;
  min-width: 1180px;
  transform: translate(-50%, 14px);
}

.nav-dropdown--models.open {
  transform: translate(-50%, 0);
}

.models-dropdown {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 250px;
  background: #fff;
  color: #262626;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 22px 54px rgba(0, 0, 0, 0.12);
}

.models-dropdown__main {
  padding: 28px 32px 30px;
  display: grid;
  gap: 24px;
}

.models-section {
  display: grid;
  gap: 14px;
}

.models-section__title {
  margin: 0;
  color: #262626;
  font-size: 0.84rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.models-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.models-card {
  width: 144px;
  min-height: 114px;
  display: grid;
  gap: 10px;
  align-content: start;
  padding: 12px;
  background: #fff;
  border: 1px solid #e6e6e6;
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}

.models-card:hover {
  border-color: #262626;
  transform: translateY(-1px);
  background: #fafafa;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
}

.models-card__media {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.models-card__image {
  width: 100%;
  height: 56px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.models-card:hover .models-card__image {
  transform: scale(1.03);
}

.models-card__name {
  margin: 0;
  color: #262626;
  font-size: 0.75rem;
  line-height: 1.4;
}

.models-dropdown__tools {
  border-left: 1px solid #e6e6e6;
  padding: 28px 24px;
  background: #fafafa;
}

.models-tools {
  display: grid;
  gap: 14px;
}

.models-tools__title {
  color: #262626;
  font-size: 0.84rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.models-tools__list {
  display: grid;
  gap: 10px;
}

.models-tools__item {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 14px;
  background: #fff;
  border: 1px solid #e6e6e6;
  color: #262626;
  font-size: 0.81rem;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.models-tools__item:hover {
  border-color: #262626;
  background: #f5f5f5;
}

.dropdown-inner {
  min-width: 560px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  background: #fff;
  color: #262626;
  border-radius: 0 0 14px 14px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.12);
}

.dropdown-card {
  display: grid;
  gap: 10px;
  min-height: 108px;
  padding: 12px;
  background: #fff;
  border: 1px solid #e6e6e6;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.dropdown-card:hover {
  border-color: #262626;
  transform: translateY(-1px);
}

.dropdown-thumb {
  width: 100%;
  height: 54px;
  object-fit: contain;
  object-position: left center;
  transition: transform 0.3s ease;
}

.dropdown-card:hover .dropdown-thumb {
  transform: scale(1.03);
}

.dropdown-card__label {
  color: #262626;
  font-size: 0.81rem;
  line-height: 1.4;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.locale-menu {
  position: relative;
}

.locale-menu__panel {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  min-width: 144px;
  display: grid;
  gap: 2px;
  padding: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  background: rgba(10, 14, 18, 0.96);
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.28);
}

.locale-menu__item {
  padding: 9px 10px;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.76);
  font-size: 0.76rem;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.locale-menu__item:hover,
.locale-menu__item.active {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
}

.locale-picker {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 2px;
  padding-right: 14px;
  border-right: 1px solid rgba(255, 255, 255, 0.12);
}

.locale-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 28px;
  min-height: 20px;
  color: rgba(255, 255, 255, 0.52);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: color 0.2s ease;
}

.locale-chip:hover,
.locale-chip.active {
  color: #fff;
}

.header-utility {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 32px;
  padding: 0 8px;
  background: transparent;
  border: 0;
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.74rem;
  letter-spacing: 0.02em;
  transition: color 0.2s ease;
  cursor: pointer;
}

.header-utility--icon {
  padding: 0;
  min-width: 24px;
}

.header-utility--icon svg,
.header-utility__icon svg {
  width: 18px;
  height: 18px;
}

.header-utility__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
}

.header-utility:hover {
  color: #fff;
}

.header-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  padding: 0 18px;
  border: 1px solid rgba(255, 255, 255, 0.34);
  border-radius: 8px;
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.header-cta--ghost {
  background: rgba(255, 255, 255, 0.04);
  color: #fff;
}

.header-cta--ghost:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.46);
}

.header-cta--primary {
  background: #fff;
  border-color: #fff;
  color: #000;
}

.header-cta--primary:hover {
  background: #f0f0f0;
  border-color: #f0f0f0;
}

.menu-toggle {
  width: 44px;
  height: 44px;
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: transparent;
  color: #fff;
}

.menu-toggle__line {
  width: 18px;
  height: 1px;
  background: currentColor;
  display: block;
}

.mobile-panel {
  background: rgba(6, 10, 14, 0.98);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.mobile-stack {
  padding: 20px 0 28px;
  display: grid;
  gap: 20px;
}

.mobile-group {
  display: grid;
  gap: 10px;
}

.mobile-link,
.mobile-label {
  display: block;
  padding: 10px 0;
  font-size: 0.88rem;
  letter-spacing: 0.06em;
}

.mobile-link {
  color: #fff;
}

.mobile-label {
  color: rgba(255, 255, 255, 0.52);
}

.mobile-children {
  display: grid;
  gap: 8px;
  padding-left: 16px;
  border-left: 1px solid rgba(255, 255, 255, 0.12);
}

.mobile-link.child {
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.82rem;
}

.mobile-locales,
.mobile-cta-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.mobile-only {
  display: none;
}

.mobile-panel-fade-enter-active,
.mobile-panel-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.mobile-panel-fade-enter-from,
.mobile-panel-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.header-menu-mask {
  position: fixed;
  inset: 72px 0 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
  z-index: 1;
}

.header-mask-fade-enter-active,
.header-mask-fade-leave-active {
  transition: opacity 0.2s ease;
}

.header-mask-fade-enter-from,
.header-mask-fade-leave-to {
  opacity: 0;
}

@media (max-width: 1360px) {
  .nav-dropdown--models {
    min-width: 1040px;
  }
}

@media (max-width: 1200px) {
  .header-left {
    gap: 24px;
  }

  .nav-link,
  .nav-button {
    padding: 0 11px;
  }

  .nav-dropdown--models {
    min-width: 920px;
  }
}

@media (max-width: 1024px) {
  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: inline-flex;
  }

  .header-bar {
    min-height: 68px;
  }

  .brand-mark img {
    width: 108px;
  }
}
</style>
.
