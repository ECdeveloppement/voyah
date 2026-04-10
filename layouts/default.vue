<template>
  <div :class="['site-shell', { 'is-rtl': currentLocale.dir === 'rtl' && !isLegacyParityPage }]">
    <SiteHeader v-if="!isLegacyParityPage" />
    <main :class="['site-main', { 'site-main--legacy': isLegacyParityPage }]">
      <slot />
    </main>
    <SiteFooter v-if="!isLegacyParityPage" />
  </div>
</template>

<script setup lang="ts">
import SiteFooter from '~/components/layout/SiteFooter.vue'
import SiteHeader from '~/components/layout/SiteHeader.vue'
import { currentLocaleInfo } from '~/composables/useSiteContent'

const currentLocale = currentLocaleInfo()
const route = useRoute()
const isLegacyParityPage = computed(() =>
  ['store.html', 'service.html', 'energy.html'].some((slug) => route.path.endsWith(`/${slug}`) || route.path === `/${slug}`)
)

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
</style>
