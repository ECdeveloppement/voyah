import { computed, hasInjectionContext, inject } from 'file://E:/voyah/node_modules/vue/index.mjs';
import { u as useRoute, l as locales, c as findLocale, t as tryUseNuxtApp, f as footerLegalLinks, a as footerColumns, b as navigation, r as resolvePage, d as localize } from './server.mjs';
import { u as useHead$1, a as useSeoMeta$1, h as headSymbol } from '../_/renderer.mjs';

function injectHead(nuxtApp) {
  var _a;
  const nuxt = nuxtApp || tryUseNuxtApp();
  return ((_a = nuxt == null ? void 0 : nuxt.ssrContext) == null ? void 0 : _a.head) || (nuxt == null ? void 0 : nuxt.runWithContext(() => {
    if (hasInjectionContext()) {
      return inject(headSymbol);
    }
  }));
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
  return computed(() => {
    var _a;
    return (_a = findLocale(paramValue(route.params.locale))) != null ? _a : locales[0];
  });
};
const useSiteContent = () => {
  const route = useRoute();
  const locale = currentLocaleInfo();
  const currentSlug = computed(() => paramValue(route.params.slug));
  const buildPath = (slug, localeCode = locale.value.code) => {
    if (!slug || slug === localeCode) {
      return `/${localeCode}`;
    }
    if (slug.startsWith("/")) {
      return slug;
    }
    if (slug.startsWith(`${localeCode}/`)) {
      return `/${slug}`;
    }
    return `/${localeCode}/${slug}`;
  };
  const switchLocalePath = (localeCode) => buildPath(currentSlug.value, localeCode);
  const textFor = (text) => localize(text, locale.value.code);
  return {
    locale,
    currentSlug,
    locales,
    navigation,
    footerColumns,
    footerLegalLinks,
    buildPath,
    switchLocalePath,
    textFor,
    resolveCurrentPage: () => resolvePage(currentSlug.value)
  };
};

export { useHead as a, useSeoMeta as b, currentLocaleInfo as c, useSiteContent as u };
//# sourceMappingURL=useSiteContent-DZMgAnrU.mjs.map
