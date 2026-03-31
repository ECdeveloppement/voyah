<template>
  <div :class="['site-shell', { 'is-rtl': currentLocale.dir === 'rtl' }]">
    <SiteHeader />
    <main class="site-main">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import SiteFooter from '~/components/layout/SiteFooter.vue'
import SiteHeader from '~/components/layout/SiteHeader.vue'
import { currentLocaleInfo } from '~/composables/useSiteContent'

const currentLocale = currentLocaleInfo()

useHead(() => ({
  htmlAttrs: {
    lang: currentLocale.value.code,
    dir: currentLocale.value.dir
  },
  bodyAttrs: {
    class: `locale-${currentLocale.value.code}`
  }
}))
</script>
