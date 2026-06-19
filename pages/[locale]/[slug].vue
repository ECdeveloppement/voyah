<template>
  <div :key="locale.code">
  <ServiceCenterPage v-if="servicePage" />
  <EnergyCenterPage v-else-if="energyPage" />
  <StoreCenterPage v-else-if="storePage" />
  <LegacyDisclosurePage v-else-if="legacyDisclosurePage" :page="legacyDisclosurePage" :text-for="textFor" />
  <PassionLPage v-else-if="modelPage?.slug === 'passion-L.html'" :model="modelPage" />
  <PassionPage v-else-if="modelPage?.slug === 'passion.html'" />
  <TitanPage v-else-if="modelPage?.slug === 'titan.html'" />
  <TitanBlackEditionPage v-else-if="modelPage?.slug === 'titan_blackedition.html'" />
  <TitanX8Page v-else-if="modelPage?.slug === 'titan_X8.html'" />
  <FreePlusPage v-else-if="modelPage?.slug === 'free+.html'" />
  <Free318Page v-else-if="modelPage?.slug === 'free.html'" />
  <CouragePage v-else-if="modelPage?.slug === 'courage.html'" />
  <NewCouragePage v-else-if="modelPage?.slug === 'newCourage.html'" />
  <NewDreamer26Page v-else-if="modelPage?.slug === 'newDreamer26.html'" />
  <DreamerChampionPage v-else-if="modelPage?.slug === 'dreamer-champion.html'" />
  <NewDreamerPage v-else-if="modelPage?.slug === 'newDreamer.html'" />
  <DreamerRiverPage v-else-if="modelPage?.slug === 'dreamriver.html'" />
  <ModelPage v-else-if="modelPage" :model="modelPage" />
  <ArchitecturePage v-else-if="infoPage?.slug === 'architecture.html'" :page="infoPage" />
  <SafetyPage v-else-if="infoPage?.slug === 'safety.html'" :page="infoPage" />
  <SmartCockpitPage v-else-if="infoPage?.slug === 'smart-cockpit.html'" :page="infoPage" />
  <BatteryPage v-else-if="infoPage?.slug === 'battery.html'" :page="infoPage" />
  <IRPage v-else-if="infoPage?.slug === 'ir.html'" :page="infoPage" />
  <CorporatePage v-else-if="infoPage?.slug === 'corporate.html'" :page="infoPage" />
  <RecruitPage v-else-if="infoPage?.slug === 'recruit-partners.html'" :page="infoPage" />
  <JoinUsPage v-else-if="infoPage?.slug === 'joinus.html'" :page="infoPage" />
  <AboutPage v-else-if="infoPage?.slug === 'about.html'" :page="infoPage" />
  <NewsPage v-else-if="infoPage?.slug === 'news.html'" :page="infoPage" />
  <PhilosophyPage v-else-if="infoPage?.slug === 'brand-philosophy.html'" :page="infoPage" />
  <KunpengPage v-else-if="infoPage?.slug === 'kunpeng-design.html'" :page="infoPage" />
  <FaqPage v-else-if="infoPage?.slug === 'faq.html'" :page="infoPage" />
  <WarrantyPage v-else-if="infoPage?.slug === 'warranty.html'" :page="infoPage" />
  <AppPage v-else-if="infoPage?.slug === 'app-download.html'" :page="infoPage" />
  <CommunityPage v-else-if="infoPage?.slug === 'community.html'" :page="infoPage" />
  <LifestyleStorePage v-else-if="infoPage?.slug === 'lifestyle-store.html'" :page="infoPage" />
  <InfoPage
    v-else-if="infoPage && !legacyDisclosurePage && !storePage && !servicePage && !energyPage"
    :page="infoPage"
  />
  <LegalPage v-else-if="legalPage" :page="legalPage" />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import InfoPage from '~/components/page/InfoPage.vue'
import LegalPage from '~/components/page/LegalPage.vue'
import ServiceCenterPage from '~/components/page/legacy/ServiceCenterPage.vue'
import EnergyCenterPage from '~/components/page/legacy/EnergyCenterPage.vue'
import LegacyDisclosurePage from '~/components/page/legacy/LegacyDisclosurePage.vue'
import StoreCenterPage from '~/components/page/legacy/StoreCenterPage.vue'
import ModelPage from '~/components/page/ModelPage.vue'

const PassionPage = defineAsyncComponent(() => import('~/components/vehicles/passion/PassionPage.vue'))
const PassionLPage = defineAsyncComponent(() => import('~/components/vehicles/passion/PassionLPage.vue'))
const TitanPage = defineAsyncComponent(() => import('~/components/vehicles/titan/TitanPage.vue'))
const TitanBlackEditionPage = defineAsyncComponent(() => import('~/components/vehicles/titan/TitanBlackEditionPage.vue'))
const TitanX8Page = defineAsyncComponent(() => import('~/components/vehicles/titan/TitanX8Page.vue'))
const FreePlusPage = defineAsyncComponent(() => import('~/components/vehicles/free/FreePlusPage.vue'))
const Free318Page = defineAsyncComponent(() => import('~/components/vehicles/free/Free318Page.vue'))
const CouragePage = defineAsyncComponent(() => import('~/components/vehicles/courage/CouragePage.vue'))
const NewCouragePage = defineAsyncComponent(() => import('~/components/vehicles/newcourage/NewCouragePage.vue'))
const NewDreamer26Page = defineAsyncComponent(() => import('~/components/vehicles/dreamer/NewDreamer26Page.vue'))
const DreamerChampionPage = defineAsyncComponent(() => import('~/components/vehicles/dreamer/DreamerChampionPage.vue'))
const NewDreamerPage = defineAsyncComponent(() => import('~/components/vehicles/dreamer/NewDreamerPage.vue'))
const DreamerRiverPage = defineAsyncComponent(() => import('~/components/vehicles/dreamer/DreamerRiverPage.vue'))
const ArchitecturePage = defineAsyncComponent(() => import('~/components/tech/ArchitecturePage.vue'))
const SafetyPage = defineAsyncComponent(() => import('~/components/tech/SafetyPage.vue'))
const SmartCockpitPage = defineAsyncComponent(() => import('~/components/tech/SmartCockpitPage.vue'))
const BatteryPage = defineAsyncComponent(() => import('~/components/tech/BatteryPage.vue'))
const IRPage = defineAsyncComponent(() => import('~/components/corporate/IRPage.vue'))
const CorporatePage = defineAsyncComponent(() => import('~/components/corporate/CorporatePage.vue'))
const RecruitPage = defineAsyncComponent(() => import('~/components/corporate/RecruitPage.vue'))
const JoinUsPage = defineAsyncComponent(() => import('~/components/corporate/JoinUsPage.vue'))
const AboutPage = defineAsyncComponent(() => import('~/components/brand/AboutPage.vue'))
const NewsPage = defineAsyncComponent(() => import('~/components/brand/NewsPage.vue'))
const PhilosophyPage = defineAsyncComponent(() => import('~/components/brand/PhilosophyPage.vue'))
const KunpengPage = defineAsyncComponent(() => import('~/components/brand/KunpengPage.vue'))
const FaqPage = defineAsyncComponent(() => import('~/components/service/FaqPage.vue'))
const WarrantyPage = defineAsyncComponent(() => import('~/components/service/WarrantyPage.vue'))
const AppPage = defineAsyncComponent(() => import('~/components/service/AppPage.vue'))
const CommunityPage = defineAsyncComponent(() => import('~/components/lifestyle/CommunityPage.vue'))
const LifestyleStorePage = defineAsyncComponent(() => import('~/components/lifestyle/LifestyleStorePage.vue'))
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

const { textFor, locale } = useSiteContent()
const storePage = computed(() => infoPage.value?.slug === 'store.html')
const servicePage = computed(() => infoPage.value?.slug === 'service.html')
const energyPage = computed(() => infoPage.value?.slug === 'energy.html')
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
