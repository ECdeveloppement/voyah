import { locales, supportedSlugs } from './data/site'

const prerenderRoutes = [
  '/',
  ...locales.flatMap((locale) => [
    `/${locale.code}`,
    ...supportedSlugs.map((slug) => `/${locale.code}/${slug}`)
  ])
]

export default defineNuxtConfig({
  devtools: { enabled: false },
  experimental: {
    appManifest: false,
    payloadExtraction: false
  },
  css: ['~/assets/styles/main.css'],
  modules: ['@nuxtjs/i18n'],
  i18n: {
    bundle: {
      optimizeTranslationDirective: false
    },
    lazy: false,
    strategy: 'no_prefix',
    defaultLocale: 'en',
    detectBrowserLanguage: false,
    locales: locales.map((locale) => ({
      code: locale.code,
      name: locale.name,
      dir: locale.dir
    })),
    vueI18n: './i18n.config.ts'
  },
  nitro: {
    prerender: {
      routes: prerenderRoutes
    }
  },
  compatibilityDate: '2026-03-31'
})
