import { computed, unref } from 'file://E:/voyah/node_modules/vue/index.mjs';
import { u as useRoute, l as locales, D as useRuntimeConfig, A as useCookie, B as useState, g as dealerContact, s as socialLinks, C as sitePages, d as localize } from './server.mjs';
import { b as useSeoMeta, a as useHead } from './useSiteContent-DZMgAnrU.mjs';

const useCookieConsent = () => {
  const preference = useCookie("voyah-cookie-consent", {
    default: () => null,
    maxAge: 60 * 60 * 24 * 180,
    sameSite: "lax",
    path: "/"
  });
  const choice = useState("cookie-consent-choice", () => null);
  const isOpen = useState("cookie-consent-open", () => false);
  const allowsExternalMaps = computed(() => choice.value === "accepted");
  function initialize() {
    const stored = preference.value;
    choice.value = stored === "accepted" || stored === "rejected" ? stored : null;
    isOpen.value = choice.value === null;
  }
  function choose(value) {
    preference.value = value;
    choice.value = value;
    isOpen.value = false;
  }
  function openPreferences() {
    isOpen.value = true;
  }
  return { isOpen, allowsExternalMaps, initialize, choose, openPreferences };
};
const DEFAULT_SITE_URL = "https://voyahtunisie.com";
const OG_IMAGE_PATH = "/assets/seo/og-image.jpg";
const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;
const normalizeSiteUrl = (value) => (value || DEFAULT_SITE_URL).trim().replace(/\/+$/, "");
const normalizePath = (path) => {
  const clean = (path || "/").split(/[?#]/)[0];
  return clean.length > 1 ? clean.replace(/\/+$/, "") : "/";
};
const noindexSlugs = /* @__PURE__ */ new Set(["devis", "book-drive.html", "book-service.html"]);
const noindexRootPages = /* @__PURE__ */ new Set([
  "store.html",
  "service.html",
  "purchasing.html",
  "environmental.html",
  "energy.html",
  "document.html"
]);
const shouldNoIndex = (path) => {
  var _a;
  const clean = normalizePath(path);
  if (clean.startsWith("/scratch") || clean.startsWith("/api/") || clean.startsWith("/_nuxt/")) {
    return true;
  }
  const segments = clean.split("/").filter(Boolean);
  if (!segments.length) return false;
  if (segments.length === 1 && noindexRootPages.has(segments[0])) return true;
  return noindexSlugs.has((_a = segments[1]) != null ? _a : "");
};
const ogLocaleByCode = {
  en: "en_US",
  fr: "fr_FR",
  ar: "ar_TN"
};
const useSeoUrls = () => {
  const route = useRoute();
  const config = useRuntimeConfig();
  const siteUrl = computed(() => normalizeSiteUrl(config.public.siteUrl));
  const canonicalPath = computed(() => {
    const path = normalizePath(route.path);
    return path === "/" ? "/fr" : path;
  });
  const canonical = computed(() => `${siteUrl.value}${canonicalPath.value}`);
  const segments = computed(() => canonicalPath.value.split("/").filter(Boolean));
  const localeCode = computed(() => {
    var _a;
    return (_a = segments.value[0]) != null ? _a : "fr";
  });
  const slugPart = computed(() => segments.value.slice(1).join("/"));
  const noIndex = computed(() => shouldNoIndex(canonicalPath.value));
  const alternates = computed(() => {
    if (!locales.some((locale) => locale.code === localeCode.value)) return [];
    const suffix = slugPart.value ? `/${slugPart.value}` : "";
    return [
      ...locales.map((locale) => ({
        hreflang: locale.code,
        href: `${siteUrl.value}/${locale.code}${suffix}`
      })),
      { hreflang: "x-default", href: `${siteUrl.value}/fr${suffix}` }
    ];
  });
  return { siteUrl, canonicalPath, canonical, localeCode, slugPart, noIndex, alternates };
};
const useSiteSeo = () => {
  const urls = useSeoUrls();
  const imageUrl = computed(() => `${urls.siteUrl.value}${OG_IMAGE_PATH}`);
  useSeoMeta({
    robots: () => urls.noIndex.value ? "noindex, nofollow" : "index, follow",
    ogType: "website",
    ogSiteName: "VOYAH Tunisie",
    ogUrl: () => urls.canonical.value,
    ogLocale: () => {
      var _a;
      return (_a = ogLocaleByCode[urls.localeCode.value]) != null ? _a : "fr_FR";
    },
    ogLocaleAlternate: () => locales.filter((locale) => locale.code !== urls.localeCode.value).map((locale) => ogLocaleByCode[locale.code]),
    ogImage: () => ({
      url: imageUrl.value,
      width: OG_IMAGE_WIDTH,
      height: OG_IMAGE_HEIGHT,
      alt: "VOYAH Tunisie"
    }),
    twitterCard: "summary_large_image",
    twitterImage: () => imageUrl.value
  });
  useHead(() => ({
    link: [
      { rel: "canonical", href: urls.canonical.value },
      ...urls.alternates.value.map((alternate) => ({
        rel: "alternate",
        hreflang: alternate.hreflang,
        href: alternate.href
      }))
    ],
    script: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "AutoDealer",
              "@id": `${urls.siteUrl.value}/#organization`,
              name: "VOYAH Tunisie \u2014 Auto Hall",
              alternateName: dealerContact.partnerLabel,
              url: urls.siteUrl.value,
              telephone: dealerContact.phone,
              email: dealerContact.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Route de la Marsa GP9, Cit\xE9 Essalema",
                addressLocality: "Tunis",
                postalCode: "2079",
                addressCountry: "TN"
              },
              openingHours: ["Mo-Fr 08:30-18:00", "Sa 09:00-14:00"],
              sameAs: socialLinks.filter((link) => link.url.trim() !== "").map((link) => link.url)
            },
            {
              "@type": "WebSite",
              "@id": `${urls.siteUrl.value}/#website`,
              url: urls.siteUrl.value,
              name: "VOYAH Tunisie",
              inLanguage: locales.map((locale) => locale.code),
              publisher: { "@id": `${urls.siteUrl.value}/#organization` }
            }
          ]
        })
      }
    ]
  }));
  return urls;
};
const useProductSeo = (model) => {
  const urls = useSeoUrls();
  useHead(() => {
    const current = unref(model);
    if (!current) return { script: [] };
    const locale = urls.localeCode.value;
    const absoluteUrl = (path) => /^https?:\/\//i.test(path) ? path : `${urls.siteUrl.value}${path}`;
    const images = [current.heroImage, ...current.gallery].filter(Boolean).map(absoluteUrl);
    const properties = current.metrics.map((metric) => ({
      "@type": "PropertyValue",
      name: localize(metric.label, locale),
      value: metric.value
    }));
    return {
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "@id": `${urls.canonical.value}#product`,
            name: localize(current.title, locale),
            description: localize(current.description, locale),
            url: urls.canonical.value,
            image: images,
            brand: { "@type": "Brand", name: "VOYAH" },
            category: localize(current.subtitle, locale),
            additionalProperty: properties
          })
        }
      ]
    };
  });
};
const useBreadcrumbSeo = (name) => {
  const urls = useSeoUrls();
  useHead(() => {
    if (urls.slugPart.value === "") return { script: [] };
    const segments = urls.slugPart.value.split("/");
    const items = [
      {
        "@type": "ListItem",
        position: 1,
        name: "VOYAH Tunisie",
        item: `${urls.siteUrl.value}/${urls.localeCode.value}`
      },
      ...segments.map((segment, index) => {
        var _a, _b;
        const isLast = index === segments.length - 1;
        return {
          "@type": "ListItem",
          position: index + 2,
          name: isLast ? String(unref(name)) : (_b = (_a = sitePages.find((page) => page.slug === segment)) == null ? void 0 : _a.slug) != null ? _b : segment,
          item: `${urls.siteUrl.value}/${urls.localeCode.value}/${segments.slice(0, index + 1).join("/")}`
        };
      })
    ];
    return {
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: items
          })
        }
      ]
    };
  });
};

export { useProductSeo as a, useCookieConsent as b, useSiteSeo as c, useBreadcrumbSeo as u };
//# sourceMappingURL=useSeo-DzuSZ2wi.mjs.map
