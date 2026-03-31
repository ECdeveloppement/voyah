import {
  findLocale,
  footerColumns,
  footerContact,
  footerLegalLinks,
  locales,
  localize,
  navigation,
  resolvePage,
  type LocaleCode,
  type LocalizedText
} from '~/data/site'

const paramValue = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value)

export const currentLocaleInfo = () => {
  const route = useRoute()

  return computed(() => findLocale(paramValue(route.params.locale)) ?? locales[0])
}

export const useSiteContent = () => {
  const route = useRoute()
  const locale = currentLocaleInfo()

  const currentSlug = computed(() => paramValue(route.params.slug))

  const buildPath = (slug?: string, localeCode: LocaleCode = locale.value.code) =>
    slug ? `/${localeCode}/${slug}` : `/${localeCode}`

  const switchLocalePath = (localeCode: LocaleCode) => buildPath(currentSlug.value, localeCode)

  const textFor = (text: LocalizedText) => localize(text, locale.value.code)

  return {
    locale,
    currentSlug,
    locales,
    navigation,
    footerColumns,
    footerLegalLinks,
    footerContact,
    buildPath,
    switchLocalePath,
    textFor,
    resolveCurrentPage: () => resolvePage(currentSlug.value)
  }
}
