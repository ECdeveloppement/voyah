<template>
  <header class="site-header">
    <div class="container header-bar">
      <NuxtLink :to="buildPath()" class="brand-mark">Voyah</NuxtLink>

      <nav class="header-nav desktop-only">
        <div
          v-for="item in navigation"
          :key="item.slug ?? item.label.en"
          class="nav-group"
          @mouseenter="activeGroup = item.label.en"
          @mouseleave="activeGroup = null"
        >
          <NuxtLink v-if="item.slug" :to="buildPath(item.slug)" class="nav-link">
            {{ textFor(item.label) }}
          </NuxtLink>
          <button v-else class="nav-link nav-button" type="button">
            {{ textFor(item.label) }}
          </button>

          <div v-if="item.children?.length" :class="['nav-dropdown', { open: activeGroup === item.label.en }]">
            <NuxtLink
              v-for="child in item.children"
              :key="child.slug ?? child.label.en"
              :to="buildPath(child.slug)"
              class="dropdown-card"
            >
              <img v-if="child.thumb" :src="child.thumb" :alt="textFor(child.label)" class="dropdown-thumb" />
              <span>{{ textFor(child.label) }}</span>
            </NuxtLink>
          </div>
        </div>
      </nav>

      <div class="header-actions desktop-only">
        <NuxtLink
          v-for="localeItem in locales"
          :key="localeItem.code"
          :to="switchLocalePath(localeItem.code)"
          :class="['locale-badge', { active: locale.code === localeItem.code }]"
        >
          {{ localeItem.code.toUpperCase() }}
        </NuxtLink>
      </div>

      <button class="menu-toggle mobile-only" type="button" @click="mobileOpen = !mobileOpen">
        {{ mobileOpen ? 'Close' : 'Menu' }}
      </button>
    </div>

    <div v-if="mobileOpen" class="mobile-panel">
      <div class="container mobile-stack">
        <div v-for="item in navigation" :key="item.slug ?? item.label.en" class="mobile-group">
          <NuxtLink
            v-if="item.slug"
            :to="buildPath(item.slug)"
            class="mobile-link"
            @click="mobileOpen = false"
          >
            {{ textFor(item.label) }}
          </NuxtLink>
          <div v-else class="mobile-label">{{ textFor(item.label) }}</div>

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
            :class="['locale-badge', { active: locale.code === localeItem.code }]"
            @click="mobileOpen = false"
          >
            {{ localeItem.code.toUpperCase() }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useSiteContent } from '~/composables/useSiteContent'

const { locale, locales, navigation, buildPath, switchLocalePath, textFor } = useSiteContent()

const route = useRoute()
const mobileOpen = ref(false)
const activeGroup = ref<string | null>(null)

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
  backdrop-filter: blur(18px);
  background: rgba(7, 11, 16, 0.78);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.header-bar {
  display: flex;
  align-items: center;
  gap: 18px;
  min-height: 84px;
}

.brand-mark {
  margin-inline-end: auto;
  font-size: 1.5rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.header-nav {
  display: flex;
  gap: 8px;
}

.nav-group {
  position: relative;
}

.nav-link,
.nav-button {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 16px;
  border-radius: 999px;
  color: rgba(237, 242, 247, 0.84);
  background: transparent;
  border: 0;
  cursor: pointer;
}

.nav-link:hover,
.nav-button:hover {
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
}

.nav-dropdown {
  position: absolute;
  top: calc(100% + 14px);
  inset-inline-start: 0;
  width: 520px;
  padding: 18px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(12, 17, 25, 0.98);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.28);
  opacity: 0;
  pointer-events: none;
  transform: translateY(8px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.nav-dropdown.open {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

.dropdown-card {
  display: grid;
  gap: 10px;
  padding: 14px;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
}

.dropdown-card:hover {
  border-color: rgba(197, 156, 98, 0.35);
}

.dropdown-thumb {
  width: 100%;
  height: 52px;
  object-fit: contain;
  object-position: left center;
}

.header-actions {
  display: flex;
  gap: 10px;
}

.locale-badge.active {
  border-color: rgba(197, 156, 98, 0.5);
  color: #fff;
}

.menu-toggle {
  margin-inline-start: auto;
  height: 42px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
}

.mobile-panel {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(7, 11, 16, 0.98);
}

.mobile-stack {
  padding: 18px 0 24px;
  display: grid;
  gap: 18px;
}

.mobile-group {
  display: grid;
  gap: 12px;
}

.mobile-link,
.mobile-label {
  padding: 10px 0;
}

.mobile-label {
  color: rgba(237, 242, 247, 0.62);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.88rem;
}

.mobile-children {
  display: grid;
  gap: 8px;
  padding-inline-start: 14px;
  border-inline-start: 1px solid rgba(255, 255, 255, 0.12);
}

.mobile-locales {
  display: flex;
  gap: 10px;
}

.mobile-only {
  display: none;
}

@media (max-width: 1024px) {
  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: inline-flex;
  }

  .header-bar {
    min-height: 72px;
  }
}
</style>
