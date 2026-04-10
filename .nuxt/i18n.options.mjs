
// @ts-nocheck


export const localeCodes =  [
  "en",
  "fr",
  "ar"
]

export const localeLoaders = {
  en: [],
  fr: [],
  ar: []
}

export const vueI18nConfigs = [
  () => import("#nuxt-i18n/ebaa500d" /* webpackChunkName: "config_i18n_46config_46ts_ebaa500d" */)
]

export const nuxtI18nOptions = {
  restructureDir: "i18n",
  experimental: {
    localeDetector: "",
    switchLocalePathLinkSSR: false,
    autoImportTranslationFunctions: false,
    typedPages: true,
    typedOptionsAndMessages: false,
    generatedLocaleFilePathFormat: "absolute",
    alternateLinkCanonicalQueries: false,
    hmr: true
  },
  bundle: {
    compositionOnly: true,
    runtimeOnly: false,
    fullInstall: true,
    dropMessageCompiler: false,
    optimizeTranslationDirective: false
  },
  compilation: {
    strictMessage: true,
    escapeHtml: false
  },
  customBlocks: {
    defaultSFCLang: "json",
    globalSFCScope: false
  },
  locales: [
    {
      code: "en",
      name: "English",
      dir: "ltr",
      files: []
    },
    {
      code: "fr",
      name: "Français",
      dir: "ltr",
      files: []
    },
    {
      code: "ar",
      name: "العربية",
      dir: "rtl",
      files: []
    }
  ],
  defaultLocale: "fr",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  trailingSlash: false,
  defaultLocaleRouteNameSuffix: "default",
  strategy: "no_prefix",
  lazy: false,
  langDir: "locales",
  rootRedirect: undefined,
  detectBrowserLanguage: false,
  differentDomains: false,
  baseUrl: "",
  customRoutes: "page",
  pages: {},
  skipSettingLocaleOnNavigate: false,
  types: "composition",
  debug: false,
  parallelPlugin: false,
  multiDomainLocales: false,
  i18nModules: []
}

export const normalizedLocales = [
  {
    code: "en",
    name: "English",
    dir: "ltr",
    files: []
  },
  {
    code: "fr",
    name: "Français",
    dir: "ltr",
    files: []
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    files: []
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false
export const hasPages = true

export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18nInternal"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
/** client **/

/** client-end **/