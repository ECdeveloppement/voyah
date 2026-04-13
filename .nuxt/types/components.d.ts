
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  BrandAboutPage: typeof import("../../components/brand/AboutPage.vue")['default']
  BrandKunpengPage: typeof import("../../components/brand/KunpengPage.vue")['default']
  BrandNewsPage: typeof import("../../components/brand/NewsPage.vue")['default']
  BrandPhilosophyPage: typeof import("../../components/brand/PhilosophyPage.vue")['default']
  CommonBaseButton: typeof import("../../components/common/BaseButton.vue")['default']
  CommonMetricGrid: typeof import("../../components/common/MetricGrid.vue")['default']
  CommonPageHero: typeof import("../../components/common/PageHero.vue")['default']
  CommonScrollDots: typeof import("../../components/common/ScrollDots.vue")['default']
  CorporatePage: typeof import("../../components/corporate/CorporatePage.vue")['default']
  CorporateIRPage: typeof import("../../components/corporate/IRPage.vue")['default']
  CorporateJoinUsPage: typeof import("../../components/corporate/JoinUsPage.vue")['default']
  CorporateRecruitPage: typeof import("../../components/corporate/RecruitPage.vue")['default']
  HomeBrandIntro: typeof import("../../components/home/HomeBrandIntro.vue")['default']
  HomeCommunity: typeof import("../../components/home/HomeCommunity.vue")['default']
  HomeGlobalMap: typeof import("../../components/home/HomeGlobalMap.vue")['default']
  HomeHero: typeof import("../../components/home/HomeHero.vue")['default']
  HomeModels: typeof import("../../components/home/HomeModels.vue")['default']
  HomeQuickActions: typeof import("../../components/home/HomeQuickActions.vue")['default']
  HomeServiceGrid: typeof import("../../components/home/HomeServiceGrid.vue")['default']
  HomeStatsMedia: typeof import("../../components/home/HomeStatsMedia.vue")['default']
  HomeTechnology: typeof import("../../components/home/HomeTechnology.vue")['default']
  LayoutAppSidebar: typeof import("../../components/layout/AppSidebar.vue")['default']
  LayoutSiteFooter: typeof import("../../components/layout/SiteFooter.vue")['default']
  LayoutSiteHeader: typeof import("../../components/layout/SiteHeader.vue")['default']
  LifestyleCommunityPage: typeof import("../../components/lifestyle/CommunityPage.vue")['default']
  LifestyleStorePage: typeof import("../../components/lifestyle/LifestyleStorePage.vue")['default']
  PageInfoPage: typeof import("../../components/page/InfoPage.vue")['default']
  PageLegalPage: typeof import("../../components/page/LegalPage.vue")['default']
  PageModelPage: typeof import("../../components/page/ModelPage.vue")['default']
  PageInfoDocumentRows: typeof import("../../components/page/info/InfoDocumentRows.vue")['default']
  PageInfoEditorialSections: typeof import("../../components/page/info/InfoEditorialSections.vue")['default']
  PageLegacyEnergyCenterPage: typeof import("../../components/page/legacy/EnergyCenterPage.vue")['default']
  PageLegacyBusinessPage: typeof import("../../components/page/legacy/LegacyBusinessPage.vue")['default']
  PageLegacyDisclosurePage: typeof import("../../components/page/legacy/LegacyDisclosurePage.vue")['default']
  PageLegacyServiceCenterPage: typeof import("../../components/page/legacy/ServiceCenterPage.vue")['default']
  PageLegacyStoreCenterPage: typeof import("../../components/page/legacy/StoreCenterPage.vue")['default']
  PageModelChapterNav: typeof import("../../components/page/model/ModelChapterNav.vue")['default']
  PageModelMediaSection: typeof import("../../components/page/model/ModelMediaSection.vue")['default']
  ServiceAppPage: typeof import("../../components/service/AppPage.vue")['default']
  ServiceFaqPage: typeof import("../../components/service/FaqPage.vue")['default']
  ServiceWarrantyPage: typeof import("../../components/service/WarrantyPage.vue")['default']
  TechArchitecturePage: typeof import("../../components/tech/ArchitecturePage.vue")['default']
  TechBatteryPage: typeof import("../../components/tech/BatteryPage.vue")['default']
  TechSafetyPage: typeof import("../../components/tech/SafetyPage.vue")['default']
  TechSmartCockpitPage: typeof import("../../components/tech/SmartCockpitPage.vue")['default']
  VehiclesDreamerChapter: typeof import("../../components/vehicles/dreamer/DreamerChapter.vue")['default']
  VehiclesDreamerChapterNav: typeof import("../../components/vehicles/dreamer/DreamerChapterNav.vue")['default']
  VehiclesDreamerHero: typeof import("../../components/vehicles/dreamer/DreamerHero.vue")['default']
  VehiclesDreamerPage: typeof import("../../components/vehicles/dreamer/DreamerPage.vue")['default']
  VehiclesInteractiveCinematicVideoHero: typeof import("../../components/vehicles/interactive/CinematicVideoHero.vue")['default']
  VehiclesInteractiveFeatureCarousel: typeof import("../../components/vehicles/interactive/FeatureCarousel.vue")['default']
  VehiclesInteractiveVehicleColorPicker: typeof import("../../components/vehicles/interactive/VehicleColorPicker.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtLinkLocale: typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
  SwitchLocalePathLink: typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyBrandAboutPage: LazyComponent<typeof import("../../components/brand/AboutPage.vue")['default']>
  LazyBrandKunpengPage: LazyComponent<typeof import("../../components/brand/KunpengPage.vue")['default']>
  LazyBrandNewsPage: LazyComponent<typeof import("../../components/brand/NewsPage.vue")['default']>
  LazyBrandPhilosophyPage: LazyComponent<typeof import("../../components/brand/PhilosophyPage.vue")['default']>
  LazyCommonBaseButton: LazyComponent<typeof import("../../components/common/BaseButton.vue")['default']>
  LazyCommonMetricGrid: LazyComponent<typeof import("../../components/common/MetricGrid.vue")['default']>
  LazyCommonPageHero: LazyComponent<typeof import("../../components/common/PageHero.vue")['default']>
  LazyCommonScrollDots: LazyComponent<typeof import("../../components/common/ScrollDots.vue")['default']>
  LazyCorporatePage: LazyComponent<typeof import("../../components/corporate/CorporatePage.vue")['default']>
  LazyCorporateIRPage: LazyComponent<typeof import("../../components/corporate/IRPage.vue")['default']>
  LazyCorporateJoinUsPage: LazyComponent<typeof import("../../components/corporate/JoinUsPage.vue")['default']>
  LazyCorporateRecruitPage: LazyComponent<typeof import("../../components/corporate/RecruitPage.vue")['default']>
  LazyHomeBrandIntro: LazyComponent<typeof import("../../components/home/HomeBrandIntro.vue")['default']>
  LazyHomeCommunity: LazyComponent<typeof import("../../components/home/HomeCommunity.vue")['default']>
  LazyHomeGlobalMap: LazyComponent<typeof import("../../components/home/HomeGlobalMap.vue")['default']>
  LazyHomeHero: LazyComponent<typeof import("../../components/home/HomeHero.vue")['default']>
  LazyHomeModels: LazyComponent<typeof import("../../components/home/HomeModels.vue")['default']>
  LazyHomeQuickActions: LazyComponent<typeof import("../../components/home/HomeQuickActions.vue")['default']>
  LazyHomeServiceGrid: LazyComponent<typeof import("../../components/home/HomeServiceGrid.vue")['default']>
  LazyHomeStatsMedia: LazyComponent<typeof import("../../components/home/HomeStatsMedia.vue")['default']>
  LazyHomeTechnology: LazyComponent<typeof import("../../components/home/HomeTechnology.vue")['default']>
  LazyLayoutAppSidebar: LazyComponent<typeof import("../../components/layout/AppSidebar.vue")['default']>
  LazyLayoutSiteFooter: LazyComponent<typeof import("../../components/layout/SiteFooter.vue")['default']>
  LazyLayoutSiteHeader: LazyComponent<typeof import("../../components/layout/SiteHeader.vue")['default']>
  LazyLifestyleCommunityPage: LazyComponent<typeof import("../../components/lifestyle/CommunityPage.vue")['default']>
  LazyLifestyleStorePage: LazyComponent<typeof import("../../components/lifestyle/LifestyleStorePage.vue")['default']>
  LazyPageInfoPage: LazyComponent<typeof import("../../components/page/InfoPage.vue")['default']>
  LazyPageLegalPage: LazyComponent<typeof import("../../components/page/LegalPage.vue")['default']>
  LazyPageModelPage: LazyComponent<typeof import("../../components/page/ModelPage.vue")['default']>
  LazyPageInfoDocumentRows: LazyComponent<typeof import("../../components/page/info/InfoDocumentRows.vue")['default']>
  LazyPageInfoEditorialSections: LazyComponent<typeof import("../../components/page/info/InfoEditorialSections.vue")['default']>
  LazyPageLegacyEnergyCenterPage: LazyComponent<typeof import("../../components/page/legacy/EnergyCenterPage.vue")['default']>
  LazyPageLegacyBusinessPage: LazyComponent<typeof import("../../components/page/legacy/LegacyBusinessPage.vue")['default']>
  LazyPageLegacyDisclosurePage: LazyComponent<typeof import("../../components/page/legacy/LegacyDisclosurePage.vue")['default']>
  LazyPageLegacyServiceCenterPage: LazyComponent<typeof import("../../components/page/legacy/ServiceCenterPage.vue")['default']>
  LazyPageLegacyStoreCenterPage: LazyComponent<typeof import("../../components/page/legacy/StoreCenterPage.vue")['default']>
  LazyPageModelChapterNav: LazyComponent<typeof import("../../components/page/model/ModelChapterNav.vue")['default']>
  LazyPageModelMediaSection: LazyComponent<typeof import("../../components/page/model/ModelMediaSection.vue")['default']>
  LazyServiceAppPage: LazyComponent<typeof import("../../components/service/AppPage.vue")['default']>
  LazyServiceFaqPage: LazyComponent<typeof import("../../components/service/FaqPage.vue")['default']>
  LazyServiceWarrantyPage: LazyComponent<typeof import("../../components/service/WarrantyPage.vue")['default']>
  LazyTechArchitecturePage: LazyComponent<typeof import("../../components/tech/ArchitecturePage.vue")['default']>
  LazyTechBatteryPage: LazyComponent<typeof import("../../components/tech/BatteryPage.vue")['default']>
  LazyTechSafetyPage: LazyComponent<typeof import("../../components/tech/SafetyPage.vue")['default']>
  LazyTechSmartCockpitPage: LazyComponent<typeof import("../../components/tech/SmartCockpitPage.vue")['default']>
  LazyVehiclesDreamerChapter: LazyComponent<typeof import("../../components/vehicles/dreamer/DreamerChapter.vue")['default']>
  LazyVehiclesDreamerChapterNav: LazyComponent<typeof import("../../components/vehicles/dreamer/DreamerChapterNav.vue")['default']>
  LazyVehiclesDreamerHero: LazyComponent<typeof import("../../components/vehicles/dreamer/DreamerHero.vue")['default']>
  LazyVehiclesDreamerPage: LazyComponent<typeof import("../../components/vehicles/dreamer/DreamerPage.vue")['default']>
  LazyVehiclesInteractiveCinematicVideoHero: LazyComponent<typeof import("../../components/vehicles/interactive/CinematicVideoHero.vue")['default']>
  LazyVehiclesInteractiveFeatureCarousel: LazyComponent<typeof import("../../components/vehicles/interactive/FeatureCarousel.vue")['default']>
  LazyVehiclesInteractiveVehicleColorPicker: LazyComponent<typeof import("../../components/vehicles/interactive/VehicleColorPicker.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtLinkLocale: LazyComponent<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
  LazySwitchLocalePathLink: LazyComponent<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
