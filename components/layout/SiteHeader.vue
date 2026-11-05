<template>
  <header :class="['site-header', { 'site-header--mobile-open': mobileOpen }]">
    <div class="header-inner">
      <div class="header-brand">
        <NuxtLink :to="buildPath()" class="brand-mark" aria-label="VOYAH">
          <img src="/assets/qatar/icons/voyah_logo.svg" alt="VOYAH" />
        </NuxtLink>

        <span class="brand-divider" aria-hidden="true" />

        <span class="brand-partner">
          <span class="brand-partner__name">{{ dealerContact.partnerLabel }}</span>
          <span class="brand-partner__sub">{{ textFor(dealerContact.partnerSubLabel) }}</span>
        </span>
      </div>

      <nav class="header-nav desktop-only" aria-label="Primary navigation">
        <div
          v-for="item in navigation"
          :key="item.slug ?? item.href ?? item.label.en"
          class="nav-group"
          @mouseenter="activeGroup = item.label.en"
          @mouseleave="activeGroup = null"
        >
          <NuxtLink
            v-if="item.slug"
            :to="buildPath(item.slug)"
            class="nav-link"
            :class="{ active: isItemActive(item) }"
          >
            {{ textFor(item.label) }}
            <svg v-if="visibleChildren(item).length" class="nav-caret" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M2 4.5 6 8.5 10 4.5" fill="none" stroke="currentColor" stroke-width="1.4" />
            </svg>
          </NuxtLink>

          <button v-else type="button" class="nav-link nav-button" :class="{ active: isGroupActive(item) }">
            {{ textFor(item.label) }}
            <svg v-if="visibleChildren(item).length" class="nav-caret" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M2 4.5 6 8.5 10 4.5" fill="none" stroke="currentColor" stroke-width="1.4" />
            </svg>
          </button>

          <div v-if="visibleChildren(item).length" class="nav-dropdown" :class="{ open: activeGroup === item.label.en }">
            <template v-for="child in visibleChildren(item)" :key="child.slug ?? child.href">
              <a v-if="child.href" :href="child.href" class="nav-dropdown__item" target="_blank" rel="noopener">
                {{ textFor(child.label) }}
              </a>
              <NuxtLink v-else :to="buildPath(child.slug)" class="nav-dropdown__item" @click="activeGroup = null">
                <span>{{ textFor(child.label) }}</span>
              </NuxtLink>
            </template>
          </div>
        </div>
      </nav>

      <div class="header-actions desktop-only">
        <div class="locale-menu" @mouseenter="localeOpen = true" @mouseleave="localeOpen = false">
          <button type="button" class="locale-trigger" :aria-label="textFor(labels.language)">
            <img class="locale-globe" src="/assets/qatar/icons/language.svg" alt="" aria-hidden="true" />
            <span>{{ currentLocaleName }}</span>
          </button>

          <div v-if="localeOpen" class="locale-dropdown">
            <NuxtLink
              v-for="localeItem in locales"
              :key="localeItem.code"
              :to="switchLocalePath(localeItem.code)"
              :class="['locale-dropdown__item', { active: locale.code === localeItem.code }]"
              @click="localeOpen = false"
            >
              {{ localeItem.name }}
            </NuxtLink>
          </div>
        </div>
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

    <div v-if="mobileOpen" class="mobile-panel">
      <div class="container mobile-stack">
        <div v-for="item in navigation" :key="item.slug ?? item.href ?? item.label.en" class="mobile-group">
          <NuxtLink v-if="item.slug" :to="buildPath(item.slug)" class="mobile-link" @click="mobileOpen = false">
            {{ textFor(item.label) }}
          </NuxtLink>

          <div v-else class="mobile-label">{{ textFor(item.label) }}</div>

          <div v-if="visibleChildren(item).length" class="mobile-children">
            <template v-for="child in visibleChildren(item)" :key="child.slug ?? child.href">
              <a v-if="child.href" :href="child.href" class="mobile-link child" target="_blank" rel="noopener">
                {{ textFor(child.label) }}
              </a>
              <NuxtLink v-else :to="buildPath(child.slug)" class="mobile-link child" @click="mobileOpen = false">
                {{ textFor(child.label) }}
              </NuxtLink>
            </template>
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
            {{ localeItem.name }}
          </NuxtLink>
        </div>

        <SocialLinks />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from '#app'
import { dealerContact } from '~/data/dealer'
import type { LocalizedText } from '~/data/site'
import { useSiteContent } from '~/composables/useSiteContent'
import SocialLinks from '~/components/common/SocialLinks.vue'

const { locale, locales, navigation, buildPath, switchLocalePath, textFor } = useSiteContent()

const route = useRoute()
const mobileOpen = ref(false)
const activeGroup = ref<string | null>(null)
const localeOpen = ref(false)

const labels = {
  language: { en: 'Language', fr: 'Langue', ar: 'اللغة' } as LocalizedText
}

const currentLocaleName = computed(() => locales.find((item) => item.code === locale.value.code)?.name ?? locale.value.code.toUpperCase())

const isItemActive = (item: { slug?: string }) => (item.slug ? route.path.endsWith(item.slug) : false)

/** Un enfant sans page ni document (par ex. un PDF non fourni) n’est pas affiché. */
const visibleChildren = (item: { children?: { slug?: string; href?: string }[] }) =>
  (item.children ?? []).filter((child) => Boolean(child.slug || child.href))

const isGroupActive = (item: { children?: { slug?: string; href?: string }[] }) =>
  Boolean(item.children?.some((child) => child.slug && route.path.endsWith(child.slug)))

watch(
  () => route.fullPath,
  () => {
    mobileOpen.value = false
    activeGroup.value = null
  }
)

</script>

<style scoped>
.site-header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 40;
  background: var(--band-bg);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: min(1400px, calc(100% - 32px));
  margin: 0 auto;
  height: 94px;
}

.header-brand {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.brand-mark img {
  width: auto;
  height: 34px;
}

.brand-divider {
  width: 1px;
  height: 30px;
  background: rgba(255, 255, 255, 0.28);
}

.brand-partner {
  display: grid;
  gap: 2px;
  line-height: 1.1;
}

.brand-partner__name {
  color: var(--band-text);
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.brand-partner__sub {
  color: var(--band-text-soft);
  font-size: 0.66rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 34px;
}

.nav-group {
  position: relative;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: 94px;
  padding: 0;
  background: none;
  border: 0;
  color: var(--band-text);
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: normal;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.active,
.nav-button.active {
  color: #85b4d9;
}

.nav-caret {
  width: 11px;
  height: 11px;
}

.nav-dropdown {
  position: absolute;
  inset-inline-start: 0;
  top: calc(100% + 16px);
  width: 192px;
  padding: 4px;
  background: #ffffff;
  color: #000000;
  border-radius: 2px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-6px);
  transition:
    opacity 0.25s ease,
    transform 0.25s ease,
    visibility 0.25s ease;
}

.nav-dropdown.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.nav-dropdown__item {
  display: block;
  padding: 8px 12px;
  border-radius: 2px;
  color: #000000;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: normal;
  text-transform: none;
}

.nav-dropdown__item:hover {
  background: #f5f5f5;
  color: #000000;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.locale-menu {
  position: relative;
}

.locale-trigger {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  height: 40px;
  padding: 0 4px;
  background: none;
  border: 0;
  color: var(--band-text);
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
}

.locale-globe {
  width: 20px;
  height: 20px;
}

.locale-dropdown {
  position: absolute;
  inset-inline-end: 0;
  top: 48px;
  min-width: 150px;
  padding: 10px 0;
  background: var(--band-bg);
  border: 1px solid var(--band-line);
}

.locale-dropdown__item {
  display: block;
  padding: 9px 16px;
  color: var(--band-text-soft);
  font-size: 0.88rem;
}

.locale-dropdown__item.active,
.locale-dropdown__item:hover {
  color: var(--band-text);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  padding: 11px;
  background: none;
  border: 1px solid var(--band-line);
  border-radius: 9999px;
  cursor: pointer;
}

.menu-toggle__line {
  display: block;
  width: 100%;
  height: 1px;
  background: var(--band-text);
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
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
  max-height: calc(100vh - 94px);
  overflow-y: auto;
  padding: 20px 0 28px;
  background: var(--band-bg);
}

.mobile-stack {
  display: grid;
  gap: 14px;
}

.mobile-label {
  color: var(--band-text-soft);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.mobile-link {
  display: block;
  padding: 9px 0;
  color: var(--band-text);
  font-size: 0.92rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.mobile-link.child {
  padding-inline-start: 14px;
  color: var(--band-text-soft);
  font-size: 0.84rem;
}

.mobile-locales {
  display: flex;
  gap: 10px;
}

.locale-chip {
  padding: 8px 14px;
  border: 1px solid var(--band-line);
  border-radius: 9999px;
  color: var(--band-text-soft);
  font-size: 0.78rem;
}

.locale-chip.active {
  background: #ffffff;
  color: #000000;
}

.desktop-only {
  display: flex;
}

.mobile-only {
  display: none;
}

@media (max-width: 1240px) {
  .header-nav {
    gap: 22px;
  }

  .nav-link {
    font-size: 0.86rem;
  }
}

@media (max-width: 1024px) {
  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: flex;
  }

  .header-inner {
    height: 72px;
  }
}
</style>
