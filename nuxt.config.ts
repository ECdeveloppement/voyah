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
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/assets/qatar/images/cropped-cropped-Voyah-removebg-preview-270x270-1.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Cairo:wght@300..900&display=swap'
        }
      ]
    }
  },
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
    defaultLocale: 'fr',
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
    },
    // Persistance des demandes reçues, lisible dans .data/leads même sans SMTP configuré.
    storage: {
      leads: { driver: 'fs', base: './.data/leads' }
    }
  },
  runtimeConfig: {
    // Renseignés par les variables d'environnement NUXT_SMTP_* et NUXT_LEAD_*
    smtp: {
      host: '',
      port: 465,
      secure: true,
      user: '',
      pass: '',
      from: ''
    },
    leadTo: ''
  },
  compatibilityDate: '2026-03-31'
})
