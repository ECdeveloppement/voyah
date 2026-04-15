<template>
  <div :class="['site-shell', { 'is-rtl': currentLocale.dir === 'rtl' && !isLegacyParityPage }]">
    <SiteHeader v-if="!isLegacyParityPage" />
    <main :class="['site-main', { 'site-main--legacy': isLegacyParityPage, 'site-main--snapping': isSnappingPage }]">
      <slot />
    </main>
    <AppSidebar v-if="!isLegacyParityPage" />
    <ScrollDots v-if="!isLegacyParityPage" />
    <SiteFooter v-if="!isLegacyParityPage" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useHead } from '#app'
import SiteFooter from '~/components/layout/SiteFooter.vue'
import SiteHeader from '~/components/layout/SiteHeader.vue'
import AppSidebar from '~/components/layout/AppSidebar.vue'
import ScrollDots from '~/components/common/ScrollDots.vue'
import { currentLocaleInfo, useSiteContent } from '~/composables/useSiteContent'

const { resolveCurrentPage } = useSiteContent()

const currentLocale = currentLocaleInfo()
const route = useRoute()
const isLegacyParityPage = computed(() =>
  ['store.html', 'energy.html'].some((slug) => route.path.endsWith(`/${slug}`) || route.path === `/${slug}`)
)

const currentPage = computed(() => resolveCurrentPage())
const isSnappingPage = computed(() => {
  if (!currentPage.value) return true // Homepage snapping
  return currentPage.value.kind === 'model' // Vehicle model pages
})

useHead(() => ({
  htmlAttrs: {
    lang: isLegacyParityPage.value ? 'en' : currentLocale.value.code,
    dir: isLegacyParityPage.value ? 'ltr' : currentLocale.value.dir
  },
  bodyAttrs: {
    class: `locale-${isLegacyParityPage.value ? 'en' : currentLocale.value.code}`
  }
}))
</script>

<style scoped>
.site-main--legacy {
  padding-top: 0;
}

/* Global scroll snap can be aggressive, so we apply it carefully */
:where(.site-main--snapping) {
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  height: 100vh;
  scrollbar-width: none; /* Hide scrollbar for cinematic feel */
}

:where(.site-main--snapping)::-webkit-scrollbar {
  display: none;
}
</style>
