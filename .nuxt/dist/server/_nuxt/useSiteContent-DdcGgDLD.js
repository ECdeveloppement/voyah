import { hasInjectionContext, inject, computed } from "vue";
import { useSeoMeta as useSeoMeta$1, useHead as useHead$1, headSymbol } from "E:/voyah-nuxt/node_modules/@unhead/vue/dist/index.mjs";
import { t as tryUseNuxtApp, u as useRoute, f as footerContact, b as footerLegalLinks, c as footerColumns, d as navigation, l as locales, r as resolvePage, e as findLocale, g as localize } from "../server.mjs";
function injectHead(nuxtApp) {
  const nuxt = nuxtApp || tryUseNuxtApp();
  return nuxt?.ssrContext?.head || nuxt?.runWithContext(() => {
    if (hasInjectionContext()) {
      return inject(headSymbol);
    }
  });
}
function useHead(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useHead$1(input, { head, ...options });
  }
}
function useSeoMeta(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useSeoMeta$1(input, { head, ...options });
  }
}
const paramValue = (value) => Array.isArray(value) ? value[0] : value;
const currentLocaleInfo = () => {
  const route = useRoute();
  return computed(() => findLocale(paramValue(route.params.locale)) ?? locales[0]);
};
const useSiteContent = () => {
  const route = useRoute();
  const locale = currentLocaleInfo();
  const currentSlug = computed(() => paramValue(route.params.slug));
  const buildPath = (slug, localeCode = locale.value.code) => slug ? `/${localeCode}/${slug}` : `/${localeCode}`;
  const switchLocalePath = (localeCode) => buildPath(currentSlug.value, localeCode);
  const textFor = (text) => localize(text, locale.value.code);
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
  };
};
export {
  useSeoMeta as a,
  useHead as b,
  currentLocaleInfo as c,
  useSiteContent as u
};
//# sourceMappingURL=useSiteContent-DdcGgDLD.js.map
