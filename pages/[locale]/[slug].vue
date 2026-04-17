<template>
  <div :key="locale.code">
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
  <PassionLPage v-else-if="modelPage?.slug === 'passion-L.html'" :model="modelPage" />
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
    v-else-if="infoPage && !legacyBusinessPage && !legacyDisclosurePage && !storePage && !servicePage && !energyPage"
    :page="infoPage"
  />
  <LegalPage v-else-if="legalPage" :page="legalPage" />
  </div>
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
import PassionLPage from '~/components/vehicles/passion/PassionLPage.vue'
import TitanPage from '~/components/vehicles/titan/TitanPage.vue'
import TitanBlackEditionPage from '~/components/vehicles/titan/TitanBlackEditionPage.vue'
import TitanX8Page from '~/components/vehicles/titan/TitanX8Page.vue'
import FreePlusPage from '~/components/vehicles/free/FreePlusPage.vue'
import Free318Page from '~/components/vehicles/free/Free318Page.vue'
import CouragePage from '~/components/vehicles/courage/CouragePage.vue'
import NewCouragePage from '~/components/vehicles/newcourage/NewCouragePage.vue'
import NewDreamer26Page from '~/components/vehicles/dreamer/NewDreamer26Page.vue'
import DreamerChampionPage from '~/components/vehicles/dreamer/DreamerChampionPage.vue'
import NewDreamerPage from '~/components/vehicles/dreamer/NewDreamerPage.vue'
import DreamerRiverPage from '~/components/vehicles/dreamer/DreamerRiverPage.vue'
import ArchitecturePage from '~/components/tech/ArchitecturePage.vue'
import SafetyPage from '~/components/tech/SafetyPage.vue'
import SmartCockpitPage from '~/components/tech/SmartCockpitPage.vue'
import BatteryPage from '~/components/tech/BatteryPage.vue'
import IRPage from '~/components/corporate/IRPage.vue'
import CorporatePage from '~/components/corporate/CorporatePage.vue'
import RecruitPage from '~/components/corporate/RecruitPage.vue'
import JoinUsPage from '~/components/corporate/JoinUsPage.vue'
import AboutPage from '~/components/brand/AboutPage.vue'
import NewsPage from '~/components/brand/NewsPage.vue'
import PhilosophyPage from '~/components/brand/PhilosophyPage.vue'
import KunpengPage from '~/components/brand/KunpengPage.vue'
import FaqPage from '~/components/service/FaqPage.vue'
import WarrantyPage from '~/components/service/WarrantyPage.vue'
import AppPage from '~/components/service/AppPage.vue'
import CommunityPage from '~/components/lifestyle/CommunityPage.vue'
import LifestyleStorePage from '~/components/lifestyle/LifestyleStorePage.vue'
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
