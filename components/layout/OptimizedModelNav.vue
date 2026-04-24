<template>
  <div>
    <!-- Header principal - caché seulement sur pages modèles avec navigation secondaire visible -->
    <SiteHeader 
      v-if="!shouldHideMainHeader" 
      :class="{ 'header-hidden-on-model': shouldHideMainHeader }"
    />
    
    <main 
      :class="[
        'site-main', 
        { 
          'site-main--legacy': isLegacyParityPage, 
          'site-main--snapping': isSnappingPage,
          'site-main--with-secondary-nav': shouldHideMainHeader
        }
      ]"
    >
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
import { useModelNavigation } from '~/composables/useModelNavigation'

const { resolveCurrentPage } = useSiteContent()
const { isModelPage, secondaryNavVisible } = useModelNavigation()

const currentLocale = currentLocaleInfo()
const route = useRoute()
const isLegacyParityPage = computed(() =>
  ['store.html'].some((slug) => route.path.endsWith(`/${slug}`) || route.path === `/${slug}`)
)

const currentPage = computed(() => resolveCurrentPage())
const isSnappingPage = computed(() => {
  if (!currentPage.value) return true // Homepage snapping
  return currentPage.value.kind === 'model' // Vehicle model pages
})

// Logique optimisée : cacher le header principal seulement sur pages modèles avec nav secondaire visible
const shouldHideMainHeader = computed(() => 
  isModelPage.value && secondaryNavVisible.value
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
/* Optimisation CSS pour les transitions fluides */
.header-hidden-on-model {
  transform: translateY(-100%);
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.site-main--with-secondary-nav {
  /* Ajuster le padding top quand la navigation secondaire est active */
  scroll-padding-top: 80px;
}

/* Performance : réduire les repaints */
.site-main {
  will-change: scroll-position;
}

/* Optimisation pour les pages modèles */
@media (prefers-reduced-motion: no-preference) {
  .header-hidden-on-model {
    transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
}
</style>
