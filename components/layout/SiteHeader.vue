<template>
  <header
    class="site-header"
    :class="{
      'site-header--mobile-open': mobileOpen,
      'site-header--transparent': isTransparent,
      'site-header--scrolled': isScrolled
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
            @mouseleave="closeGroup"
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
              @mouseleave="closeGroup"
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
                        v-for="(entry, entryIdx) in section.items"
                        :key="entry.slug"
                        :to="buildPath(entry.slug)"
                        class="models-card"
                        :style="{ '--stagger-idx': entryIdx }"
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

              <div
                v-else-if="item.label.en === 'Voyah Service' || item.label.en === 'About Voyah'"
                class="grouped-dropdown"
              >
                <div class="grouped-dropdown__main">
                  <h5 class="grouped-dropdown__title">
                    {{ textFor(item.label.en === 'Voyah Service' ? serviceMenu.primaryTitle : aboutMenu.primaryTitle) }}
                  </h5>

                  <div class="grouped-dropdown__feature-list">
                    <NuxtLink
                      v-for="child in item.label.en === 'Voyah Service' ? serviceMenu.primaryItems : aboutMenu.primaryItems"
                      :key="child.slug"
                      :to="buildPath(child.slug)"
                      class="grouped-dropdown__feature"
                    >
                      <img
                        v-if="child.thumb"
                        :src="child.thumb"
                        :alt="textFor(child.label)"
                        class="grouped-dropdown__feature-image"
                      />
                      <span class="grouped-dropdown__feature-label">{{ textFor(child.label) }}</span>
                    </NuxtLink>
                  </div>
                </div>

                <aside class="grouped-dropdown__aside">
                  <div class="grouped-dropdown__aside-title">
                    {{ textFor(item.label.en === 'Voyah Service' ? serviceMenu.secondaryTitle : aboutMenu.secondaryTitle) }}
                  </div>

                  <div class="grouped-dropdown__aside-list">
                    <NuxtLink
                      v-for="child in item.label.en === 'Voyah Service' ? serviceMenu.secondaryItems : aboutMenu.secondaryItems"
                      :key="child.slug"
                      :to="buildPath(child.slug)"
                      class="grouped-dropdown__aside-item"
                    >
                      {{ textFor(child.label) }}
                    </NuxtLink>
                  </div>
                </aside>
              </div>

              <div v-else class="dropdown-inner">
                <NuxtLink
                  v-for="(child, childIdx) in item.children"
                  :key="child.slug ?? item.label.en"
                  :to="buildPath(child.slug)"
                  class="dropdown-card"
                  :style="{ '--stagger-idx': childIdx }"
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
            :to="buildPath(currentModel?.slug ?? 'titan.html')"
            class="header-cta header-cta--ghost"
          >
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
        :class="['menu-toggle', 'mobile-only', { 'menu-toggle--active': mobileOpen }]"
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
      <div v-if="mobileOpen" class="mobile-panel-mask mobile-only" @click="mobileOpen = false" />
    </transition>

    <transition name="header-mask-fade">
      <div
        v-if="activeGroup && !mobileOpen"
        class="header-menu-mask desktop-only"
        @mouseenter="closeGroup"
        @click="closeGroup"
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
const currentPage = computed(() => resolveCurrentPage())
const currentModel = computed(() => (currentPage.value?.kind === 'model' ? currentPage.value : null))
const scrollY = ref(0)
const isHomeRoute = computed(() => !currentPage.value)
const isTransparent = computed(() => isHomeRoute.value && scrollY.value < 44 && !mobileOpen.value)
const isScrolled = computed(() => scrollY.value > 28 || !isHomeRoute.value)

const copy = (en: string, fr: string, ar: string): LocalizedText => ({ en, fr, ar })

const loginLabel = computed(() => useNuxtApp().$i18n.t('global.header.login'))
const configLabel = computed(() => useNuxtApp().$i18n.t('global.header.config'))
const testDriveLabel = computed(() => useNuxtApp().$i18n.t('global.header.testDrive'))
const orderLabel = computed(() => useNuxtApp().$i18n.t('global.header.order'))

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
    { slug: 'titan.html', label: copy('Configure', 'Configurer', 'التهيئة') }
  ]
}

const serviceChildren = computed(() => {
  const items = Array.isArray(navigation.value) ? navigation.value : []
  return items.find((item) => item.label.en === 'Voyah Service')?.children ?? []
})

const aboutChildren = computed(() => {
  const items = Array.isArray(navigation.value) ? navigation.value : []
  return items.find((item) => item.label.en === 'About Voyah')?.children ?? []
})
const serviceMenu = computed(() => ({
  primaryTitle: copy('Service', 'Service', 'الخدمة'),
  primaryItems: serviceChildren.value.slice(0, 2).map((child, index) => ({
    ...child,
    thumb: [
      '/website/navigationbar/image/984a8ea8-534a-46fb-b57c-b87ebd915faf1770618777959.png',
      '/website/navigationbar/image/c0159214-6002-494d-a913-44771be8f4891770618857442.png'
    ][index]
  })),
  secondaryTitle: copy('Related Information', 'Informations associées', 'معلومات ذات صلة'),
  secondaryItems: serviceChildren.value.slice(2)
}))

const aboutMenu = computed(() => ({
  primaryTitle: copy('Communication', 'Communication', 'التواصل'),
  primaryItems: aboutChildren.value.slice(0, 1).map((child) => ({
    ...child,
    thumb: '/website/navigationbar/image/a0423ec8-30e1-431b-a9fa-d9bea9d0c5701770622210658.png'
  })),
  secondaryTitle: copy('Cooperation', 'Coopération', 'التعاون'),
  secondaryItems: aboutChildren.value.slice(1)
}))

const isItemActive = (item: { slug?: string }) => {
  if (!item.slug) return false
  return route.path.endsWith(item.slug)
}

const openGroup = (label: string) => {
  activeGroup.value = label
}

const closeGroup = () => {
  activeGroup.value = null
}

watch(
  () => route.fullPath,
  () => {
    mobileOpen.value = false
    activeGroup.value = null
    localeOpen.value = false
  }
)

let scrollRaf = 0
const updateScroll = () => {
  if (scrollRaf) return
  scrollRaf = window.requestAnimationFrame(() => {
    scrollY.value = window.scrollY
    scrollRaf = 0
  })
}

watch(mobileOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

onMounted(() => {
  updateScroll()
  window.addEventListener('scroll', updateScroll, { passive: true })
})

onBeforeUnmount(() => {
  if (scrollRaf) window.cancelAnimationFrame(scrollRaf)
  window.removeEventListener('scroll', updateScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.site-header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 100;
  background: rgba(7, 10, 14, 0.9);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px) saturate(180%);
  transition:
    background-color 0.24s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.24s cubic-bezier(0.22, 1, 0.36, 1),
    backdrop-filter 0.24s cubic-bezier(0.22, 1, 0.36, 1);
}

.site-header--transparent {
  background: linear-gradient(180deg, rgba(7, 10, 14, 0.82), rgba(7, 10, 14, 0));
  border-bottom-color: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(0);
}

.site-header--mobile-open {
  background: rgba(6, 10, 14, 0.98);
  backdrop-filter: blur(18px);
}

.site-header--scrolled {
  background: rgba(6, 10, 14, 0.96);
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

.header-bar {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  min-height: 64px;
  transition: min-height 0.24s cubic-bezier(0.22, 1, 0.36, 1);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 26px;
  min-width: 0;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
}

.brand-mark img {
  width: 108px;
  height: auto;
  display: block;
  filter: brightness(0) invert(1);
  opacity: 1;
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
  min-height: 64px;
  padding: 0 16px;
  background: transparent;
  border: 0;
  color: rgba(255, 255, 255, 0.84);
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.015em;
  line-height: 1;
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.site-header--scrolled .header-bar {
  min-height: 56px;
}

.site-header--scrolled .nav-link,
.site-header--scrolled .nav-button {
  min-height: 56px;
}

.nav-link::after,
.nav-button::after {
  content: '';
  position: absolute;
  left: 15px;
  right: 15px;
  bottom: 16px;
  height: 2px;
  background: #b31d22;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.nav-link:hover,
.nav-button:hover,
.nav-link.active,
.nav-button.active {
  color: #fff;
}

.nav-link:hover,
.nav-button:hover {
  transform: translateY(-1px);
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
  transition:
    opacity 0.36s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.36s cubic-bezier(0.22, 1, 0.36, 1);
}

.nav-dropdown.open {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

.nav-dropdown--models {
  left: 50%;
  width: min(1320px, calc(100vw - 24px));
  min-width: 1180px;
  transform: translate(-50%, 14px);
}

.nav-dropdown--models.open {
  transform: translate(-50%, 0);
}

.models-dropdown {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 256px;
  background: #fff;
  color: #262626;
  border-radius: 0;
  box-shadow: 0 24px 56px rgba(0, 0, 0, 0.12);
}

.models-dropdown__main {
  padding: 22px 24px 24px;
  display: grid;
  gap: 18px;
  max-height: min(600px, calc(100vh - 120px));
  overflow: auto;
}

.models-section {
  display: grid;
  gap: 12px;
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
  display: grid;
  grid-template-columns: repeat(3, minmax(164px, 1fr));
  gap: 12px;
}

.models-card {
  min-height: 162px;
  display: grid;
  gap: 8px;
  align-content: start;
  padding: 12px 12px 11px;
  background: #fff;
  border: 1px solid #ececec;
  transition:
    border-color 0.22s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.22s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.22s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.22s cubic-bezier(0.4, 0, 0.2, 1);
}

.models-card:hover {
  border-color: #262626;
  transform: translateY(-2px);
  background: #fafafa;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.07);
}

.models-card__media {
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.models-card__image {
  width: 100%;
  height: 92px;
  object-fit: contain;
  transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
}

.models-card:hover .models-card__image {
  transform: scale(1.03);
}

.models-card__name {
  margin: 0;
  color: #262626;
  font-size: 0.76rem;
  line-height: 1.22;
}

.models-dropdown__tools {
  border-left: 1px solid #e9e9e9;
  padding: 22px 18px;
  background: #fafafa;
}

.models-tools {
  display: grid;
  gap: 12px;
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
  gap: 9px;
}

.models-tools__item {
  display: inline-flex;
  align-items: center;
  min-height: 42px;
  padding: 0 14px;
  background: #fff;
  border: 1px solid #ececec;
  color: #262626;
  font-size: 0.78rem;
  transition:
    border-color 0.22s cubic-bezier(0.4, 0, 0.2, 1),
    background 0.22s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.22s cubic-bezier(0.4, 0, 0.2, 1);
}

.models-tools__item:hover {
  border-color: #262626;
  background: #f5f5f5;
  transform: translateX(1px);
}

.dropdown-inner {
  min-width: 560px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  background: #fff;
  color: #262626;
  border-radius: 0;
  box-shadow: 0 28px 66px rgba(0, 0, 0, 0.14);
}

.grouped-dropdown {
  min-width: 760px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 270px;
  background: #fff;
  color: #262626;
  border-radius: 0;
  box-shadow: 0 28px 66px rgba(0, 0, 0, 0.14);
}

.grouped-dropdown__main {
  padding: 30px 34px 32px;
}

.grouped-dropdown__title,
.grouped-dropdown__aside-title {
  margin: 0;
  color: #262626;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.grouped-dropdown__feature-list {
  display: grid;
  gap: 12px;
  margin-top: 18px;
}

.grouped-dropdown__feature {
  display: grid;
  grid-template-columns: 122px minmax(0, 1fr);
  align-items: center;
  gap: 10px;
  min-height: 96px;
  padding: 12px 14px;
  border: 1px solid #ececec;
  background: #fff;
  transition:
    border-color 0.26s cubic-bezier(0.33, 1, 0.68, 1),
    background-color 0.26s cubic-bezier(0.33, 1, 0.68, 1),
    transform 0.26s cubic-bezier(0.33, 1, 0.68, 1);
}

.grouped-dropdown__feature:hover {
  border-color: #262626;
  background: #fafafa;
  transform: translateY(-2px);
}

.grouped-dropdown__feature-image {
  width: 100%;
  height: 56px;
  object-fit: contain;
  transition: transform 0.32s cubic-bezier(0.33, 1, 0.68, 1);
}

.grouped-dropdown__feature:hover .grouped-dropdown__feature-image {
  transform: scale(1.03);
}

.grouped-dropdown__feature-label {
  color: #262626;
  font-size: 0.88rem;
  line-height: 1.45;
}

.grouped-dropdown__aside {
  display: grid;
  align-content: start;
  gap: 16px;
  padding: 30px 28px;
  border-left: 1px solid #ececec;
  background: #fafafa;
}

.grouped-dropdown__aside-list {
  display: grid;
  gap: 10px;
}

.grouped-dropdown__aside-item {
  color: #5a6067;
  font-size: 0.8rem;
  line-height: 1.6;
  transition:
    color 0.24s cubic-bezier(0.33, 1, 0.68, 1),
    transform 0.24s cubic-bezier(0.33, 1, 0.68, 1);
}

.grouped-dropdown__aside-item:hover {
  color: #111;
  transform: translateX(2px);
}

.dropdown-card {
  display: grid;
  gap: 10px;
  min-height: 108px;
  padding: 12px;
  background: #fff;
  border: 1px solid #e6e6e6;
  transition:
    border-color 0.22s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.22s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.22s cubic-bezier(0.4, 0, 0.2, 1);
}

.dropdown-card:hover {
  border-color: #262626;
  transform: translateY(-1px);
  background: #fafafa;
}

.dropdown-thumb {
  width: 100%;
  height: 54px;
  object-fit: contain;
  object-position: left center;
  transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
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
  transition:
    background-color 0.22s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.22s cubic-bezier(0.4, 0, 0.2, 1);
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
  min-height: 36px;
  padding: 0 10px;
  background: transparent;
  border: 0;
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.74rem;
  letter-spacing: 0.02em;
  transition: color 0.22s cubic-bezier(0.4, 0, 0.2, 1);
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
  min-height: 36px;
  padding: 0 16px;
  border: 1px solid rgba(255, 255, 255, 0.34);
  border-radius: 4px;
  font-size: 0.76rem;
  letter-spacing: 0.03em;
  white-space: nowrap;
  transition:
    background-color 0.22s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.22s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.22s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
}

.header-cta--ghost {
  background: rgba(255, 255, 255, 0.04);
  color: #fff;
}

.header-cta--ghost:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.46);
  transform: translateY(-1px);
}

.header-cta--primary {
  background: #fff;
  border-color: #fff;
  color: #000;
}

.header-cta--primary:hover {
  background: #f0f0f0;
  border-color: #f0f0f0;
  transform: translateY(-1px);
}

.menu-toggle {
  width: 42px;
  height: 42px;
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
  transition: transform 0.26s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.22s ease;
}

.menu-toggle--active .menu-toggle__line:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.menu-toggle--active .menu-toggle__line:nth-child(2) {
  opacity: 0;
}

.menu-toggle--active .menu-toggle__line:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

.mobile-panel {
  position: fixed;
  top: 64px;
  right: 0;
  z-index: 110;
  width: min(420px, 100vw);
  max-width: 100vw;
  height: calc(100vh - 64px);
  overflow-y: auto;
  background: rgba(6, 10, 14, 0.98);
  border-inline-start: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: -24px 0 48px rgba(0, 0, 0, 0.32);
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
  transition: opacity 0.34s cubic-bezier(0.22, 1, 0.36, 1), transform 0.34s cubic-bezier(0.22, 1, 0.36, 1);
}

.mobile-panel-fade-enter-from,
.mobile-panel-fade-leave-to {
  opacity: 0;
  transform: translateX(28px);
}

.mobile-panel-mask {
  position: fixed;
  inset: 64px 0 0;
  z-index: 105;
  background: rgba(0, 0, 0, 0.42);
  backdrop-filter: blur(2px);
}

.header-menu-mask {
  position: fixed;
  inset: 64px 0 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
  z-index: 1;
}

.header-mask-fade-enter-active,
.header-mask-fade-leave-active {
  transition: opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1);
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
    min-height: 64px;
  }

  .brand-mark img {
    width: 104px;
  }
}

/* GSAP/Cinematic Stagger Injection */
.nav-dropdown .models-card,
.nav-dropdown .dropdown-card {
  opacity: 0;
  transform: translateY(15px);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: calc(var(--stagger-idx, 0) * 0.05s);
}

.nav-dropdown.open .models-card,
.nav-dropdown.open .dropdown-card {
  opacity: 1;
  transform: translateY(0);
}

.site-header--scrolled.site-header--transparent {
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  background: rgba(17, 24, 33, 0.85);
}
</style>

