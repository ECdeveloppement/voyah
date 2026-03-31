import { findLocale } from '~/data/site'

export default defineNuxtRouteMiddleware(async (to) => {
  const localeParam = Array.isArray(to.params.locale) ? to.params.locale[0] : to.params.locale

  if (!localeParam) {
    return
  }

  const locale = findLocale(localeParam)

  if (!locale) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Locale not supported'
    })
  }

  const i18n = useNuxtApp().$i18n

  if (i18n?.locale?.value !== locale.code) {
    await i18n?.setLocale(locale.code)
  }
})
