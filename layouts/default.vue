<template>
  <div :class="['site-shell', { 'is-rtl': currentLocale.dir === 'rtl' && !isStandalonePage }]">
    <SiteHeader v-if="!isStandalonePage" />
    <main :class="['site-main', { 'site-main--legacy': isStandalonePage }]">
      <slot />
    </main>
    <SiteFooter v-if="!isStandalonePage" />
    <CookieConsent v-if="!isQuotePage" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useHead } from '#app'
import SiteFooter from '~/components/layout/SiteFooter.vue'
import SiteHeader from '~/components/layout/SiteHeader.vue'
import CookieConsent from '~/components/layout/CookieConsent.vue'
import { currentLocaleInfo } from '~/composables/useSiteContent'
import { useSiteSeo } from '~/composables/useSeo'

const currentLocale = currentLocaleInfo()
const route = useRoute()
const isStorePage = computed(() =>
  ['store.html'].some((slug) => route.path.endsWith(`/${slug}`) || route.path === `/${slug}`)
)
const isQuotePage = computed(() =>
  ['devis'].some((slug) => route.path.endsWith(`/${slug}`) || route.path === `/${slug}`)
)
const isStandalonePage = computed(() => isStorePage.value || isQuotePage.value)

// Canonical, hreflang, Open Graph, Twitter, robots et données structurées globales.
useSiteSeo()

useHead(() => ({
  htmlAttrs: {
    lang: isStorePage.value ? 'en' : currentLocale.value.code,
    dir: isStorePage.value ? 'ltr' : currentLocale.value.dir
  },
  bodyAttrs: {
    class: `locale-${isStorePage.value ? 'en' : currentLocale.value.code}`
  }
}))
</script>

<style scoped>
.site-main--legacy {
  padding-top: 0;
}
</style>
