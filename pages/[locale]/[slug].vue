<template>
  <ServiceCenterPage v-if="servicePage" />
  <EnergyCenterPage v-else-if="energyPage" />
  <LegacyBusinessPage
    v-else-if="legacyBusinessPage"
    :page="legacyBusinessPage.page"
    :prefix="legacyBusinessPage.prefix"
    :root-class="legacyBusinessPage.rootClass"
    :scope-attr="legacyBusinessPage.scopeAttr"
    :text-for="textFor"
    :section-titles="legacyBusinessPage.sectionTitles"
  />
  <StoreCenterPage v-else-if="storePage" />
  <LegacyDisclosurePage v-else-if="legacyDisclosurePage" :page="legacyDisclosurePage" :text-for="textFor" />
  <ModelPage v-if="modelPage" :model="modelPage" />
  <InfoPage
    v-else-if="infoPage && !legacyBusinessPage && !legacyDisclosurePage && !storePage && !servicePage && !energyPage"
    :page="infoPage"
  />
  <LegalPage v-else-if="legalPage" :page="legalPage" />
</template>

<script setup lang="ts">
import InfoPage from '~/components/page/InfoPage.vue'
import LegalPage from '~/components/page/LegalPage.vue'
import LegacyBusinessPage from '~/components/page/legacy/LegacyBusinessPage.vue'
import LegacyDisclosurePage from '~/components/page/legacy/LegacyDisclosurePage.vue'
import EnergyCenterPage from '~/components/page/legacy/EnergyCenterPage.vue'
import ServiceCenterPage from '~/components/page/legacy/ServiceCenterPage.vue'
import StoreCenterPage from '~/components/page/legacy/StoreCenterPage.vue'
import ModelPage from '~/components/page/ModelPage.vue'
import { resolvePage, type InfoDefinition } from '~/data/site'
import { useSiteContent } from '~/composables/useSiteContent'

definePageMeta({
  validate: (route) => {
    const slugParam = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
    return typeof slugParam === 'string' && Boolean(resolvePage(slugParam))
  }
})

const route = useRoute()
const slug = computed(() => (Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug))
const page = computed(() => (typeof slug.value === 'string' ? resolvePage(slug.value) ?? null : null))

const modelPage = computed(() => (page.value?.kind === 'model' ? page.value : null))
const infoPage = computed(() => (page.value?.kind === 'info' ? page.value : null))
const legalPage = computed(() => (page.value?.kind === 'legal' ? page.value : null))

const { textFor } = useSiteContent()
const storePage = computed(() => infoPage.value?.slug === 'store.html')
const servicePage = computed(() => infoPage.value?.slug === 'service.html')
const energyPage = computed(() => infoPage.value?.slug === 'energy.html')
const legacyBusinessPage = computed(() => {
  if (!infoPage.value) return null
  return null
})
const legacyDisclosurePage = computed<InfoDefinition | null>(() => {
  if (!infoPage.value) return null
  return ['purchasing.html', 'environmental.html', 'document.html'].includes(infoPage.value.slug)
    ? infoPage.value
    : null
})

useSeoMeta({
  title: () => {
    const title = modelPage.value?.title ?? infoPage.value?.title ?? legalPage.value?.title
    return title ? `Voyah | ${textFor(title)}` : 'Voyah'
  },
  description: () => {
    const description = modelPage.value?.description ?? infoPage.value?.summary ?? legalPage.value?.summary
    return description ? textFor(description) : 'Voyah'
  }
})

useHead({
  link: [
    ...(infoPage.value?.slug === 'service.html'
      ? [
          { rel: 'stylesheet', href: '/static/assets/index-b22dd282.css' },
          { rel: 'stylesheet', href: '/static/assets/index-056018d9.css' },
          { rel: 'stylesheet', href: '/static/assets/index-ae402aa7.css' },
          { rel: 'stylesheet', href: '/static/assets/userser-c683f735.css' }
        ]
      : []),
    ...(infoPage.value?.slug === 'energy.html'
      ? [
          { rel: 'stylesheet', href: '/static/assets/index-c1674d8c.css' },
          { rel: 'stylesheet', href: '/static/assets/index-b23f7af0.css' },
          { rel: 'stylesheet', href: '/static/assets/index-ae402aa7.css' },
          { rel: 'stylesheet', href: '/static/assets/supercharger-partner-307d1a3c.css' }
        ]
      : []),
    ...(legacyDisclosurePage.value
      ? [
          { rel: 'stylesheet', href: '/static/assets/purchasingTemplate-87f0d017.css' },
          { rel: 'stylesheet', href: '/static/assets/purchasingDetail-f1d6b99d.css' }
        ]
      : [])
  ],
  meta: [
    {
      name: 'og:title',
      content: () => {
        const title = modelPage.value?.title ?? infoPage.value?.title ?? legalPage.value?.title
        return title ? `Voyah | ${textFor(title)}` : 'Voyah'
      }
    },
    {
      name: 'og:description',
      content: () => {
        const description = modelPage.value?.description ?? infoPage.value?.summary ?? legalPage.value?.summary
        return description ? textFor(description) : 'Voyah'
      }
    }
  ]
})
</script>
