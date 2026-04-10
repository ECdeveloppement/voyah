
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


export const CommonBaseButton: typeof import("../components/common/BaseButton.vue")['default']
export const CommonMetricGrid: typeof import("../components/common/MetricGrid.vue")['default']
export const CommonPageHero: typeof import("../components/common/PageHero.vue")['default']
export const HomeBrandIntro: typeof import("../components/home/HomeBrandIntro.vue")['default']
export const HomeCommunity: typeof import("../components/home/HomeCommunity.vue")['default']
export const HomeGlobalMap: typeof import("../components/home/HomeGlobalMap.vue")['default']
export const HomeHero: typeof import("../components/home/HomeHero.vue")['default']
export const HomeModels: typeof import("../components/home/HomeModels.vue")['default']
export const HomeQuickActions: typeof import("../components/home/HomeQuickActions.vue")['default']
export const HomeServiceGrid: typeof import("../components/home/HomeServiceGrid.vue")['default']
export const HomeStatsMedia: typeof import("../components/home/HomeStatsMedia.vue")['default']
export const HomeTechnology: typeof import("../components/home/HomeTechnology.vue")['default']
export const LayoutSiteFooter: typeof import("../components/layout/SiteFooter.vue")['default']
export const LayoutSiteHeader: typeof import("../components/layout/SiteHeader.vue")['default']
export const PageInfoPage: typeof import("../components/page/InfoPage.vue")['default']
export const PageLegalPage: typeof import("../components/page/LegalPage.vue")['default']
export const PageModelPage: typeof import("../components/page/ModelPage.vue")['default']
export const PageInfoDocumentRows: typeof import("../components/page/info/InfoDocumentRows.vue")['default']
export const PageInfoEditorialSections: typeof import("../components/page/info/InfoEditorialSections.vue")['default']
export const PageLegacyEnergyCenterPage: typeof import("../components/page/legacy/EnergyCenterPage.vue")['default']
export const PageLegacyBusinessPage: typeof import("../components/page/legacy/LegacyBusinessPage.vue")['default']
export const PageLegacyDisclosurePage: typeof import("../components/page/legacy/LegacyDisclosurePage.vue")['default']
export const PageLegacyServiceCenterPage: typeof import("../components/page/legacy/ServiceCenterPage.vue")['default']
export const PageLegacyStoreCenterPage: typeof import("../components/page/legacy/StoreCenterPage.vue")['default']
export const PageModelChapterNav: typeof import("../components/page/model/ModelChapterNav.vue")['default']
export const PageModelMediaSection: typeof import("../components/page/model/ModelMediaSection.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtLinkLocale: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
export const SwitchLocalePathLink: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyCommonBaseButton: LazyComponent<typeof import("../components/common/BaseButton.vue")['default']>
export const LazyCommonMetricGrid: LazyComponent<typeof import("../components/common/MetricGrid.vue")['default']>
export const LazyCommonPageHero: LazyComponent<typeof import("../components/common/PageHero.vue")['default']>
export const LazyHomeBrandIntro: LazyComponent<typeof import("../components/home/HomeBrandIntro.vue")['default']>
export const LazyHomeCommunity: LazyComponent<typeof import("../components/home/HomeCommunity.vue")['default']>
export const LazyHomeGlobalMap: LazyComponent<typeof import("../components/home/HomeGlobalMap.vue")['default']>
export const LazyHomeHero: LazyComponent<typeof import("../components/home/HomeHero.vue")['default']>
export const LazyHomeModels: LazyComponent<typeof import("../components/home/HomeModels.vue")['default']>
export const LazyHomeQuickActions: LazyComponent<typeof import("../components/home/HomeQuickActions.vue")['default']>
export const LazyHomeServiceGrid: LazyComponent<typeof import("../components/home/HomeServiceGrid.vue")['default']>
export const LazyHomeStatsMedia: LazyComponent<typeof import("../components/home/HomeStatsMedia.vue")['default']>
export const LazyHomeTechnology: LazyComponent<typeof import("../components/home/HomeTechnology.vue")['default']>
export const LazyLayoutSiteFooter: LazyComponent<typeof import("../components/layout/SiteFooter.vue")['default']>
export const LazyLayoutSiteHeader: LazyComponent<typeof import("../components/layout/SiteHeader.vue")['default']>
export const LazyPageInfoPage: LazyComponent<typeof import("../components/page/InfoPage.vue")['default']>
export const LazyPageLegalPage: LazyComponent<typeof import("../components/page/LegalPage.vue")['default']>
export const LazyPageModelPage: LazyComponent<typeof import("../components/page/ModelPage.vue")['default']>
export const LazyPageInfoDocumentRows: LazyComponent<typeof import("../components/page/info/InfoDocumentRows.vue")['default']>
export const LazyPageInfoEditorialSections: LazyComponent<typeof import("../components/page/info/InfoEditorialSections.vue")['default']>
export const LazyPageLegacyEnergyCenterPage: LazyComponent<typeof import("../components/page/legacy/EnergyCenterPage.vue")['default']>
export const LazyPageLegacyBusinessPage: LazyComponent<typeof import("../components/page/legacy/LegacyBusinessPage.vue")['default']>
export const LazyPageLegacyDisclosurePage: LazyComponent<typeof import("../components/page/legacy/LegacyDisclosurePage.vue")['default']>
export const LazyPageLegacyServiceCenterPage: LazyComponent<typeof import("../components/page/legacy/ServiceCenterPage.vue")['default']>
export const LazyPageLegacyStoreCenterPage: LazyComponent<typeof import("../components/page/legacy/StoreCenterPage.vue")['default']>
export const LazyPageModelChapterNav: LazyComponent<typeof import("../components/page/model/ModelChapterNav.vue")['default']>
export const LazyPageModelMediaSection: LazyComponent<typeof import("../components/page/model/ModelMediaSection.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtLinkLocale: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
export const LazySwitchLocalePathLink: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
