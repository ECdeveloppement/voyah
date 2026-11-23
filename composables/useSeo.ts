import { computed, unref, type MaybeRef } from 'vue'
import { useHead, useRoute, useRuntimeConfig, useSeoMeta } from '#app'
import { locales, localize, sitePages, type LocaleCode, type ModelDefinition } from '~/data/site'
import { dealerContact, socialLinks } from '~/data/dealer'
import {
  normalizePath,
  normalizeSiteUrl,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_PATH,
  OG_IMAGE_WIDTH,
  shouldNoIndex
} from '~/data/seo'

const ogLocaleByCode: Record<string, string> = {
  en: 'en_US',
  fr: 'fr_FR',
  ar: 'ar_TN'
}

/** URLs canoniques / alternatives, sans effet de bord sur le <head>. */
export const useSeoUrls = () => {
  const route = useRoute()
  const config = useRuntimeConfig()

  const siteUrl = computed(() => normalizeSiteUrl((config.public as Record<string, string>).siteUrl))

  // La racine redirige en 301 vers /fr : elle doit donc canonicaliser vers /fr.
  const canonicalPath = computed(() => {
    const path = normalizePath(route.path)
    return path === '/' ? '/fr' : path
  })

  const canonical = computed(() => `${siteUrl.value}${canonicalPath.value}`)
  const segments = computed(() => canonicalPath.value.split('/').filter(Boolean))
  const localeCode = computed(() => segments.value[0] ?? 'fr')
  const slugPart = computed(() => segments.value.slice(1).join('/'))
  const noIndex = computed(() => shouldNoIndex(canonicalPath.value))

  const alternates = computed(() => {
    if (!locales.some((locale) => locale.code === localeCode.value)) return []
    const suffix = slugPart.value ? `/${slugPart.value}` : ''
    return [
      ...locales.map((locale) => ({
        hreflang: locale.code,
        href: `${siteUrl.value}/${locale.code}${suffix}`
      })),
      { hreflang: 'x-default', href: `${siteUrl.value}/fr${suffix}` }
    ]
  })

  return { siteUrl, canonicalPath, canonical, localeCode, slugPart, noIndex, alternates }
}

/** Métadonnées globales : canonical, hreflang, OG/Twitter, robots et données structurées. */
export const useSiteSeo = () => {
  const urls = useSeoUrls()
  const imageUrl = computed(() => `${urls.siteUrl.value}${OG_IMAGE_PATH}`)

  useSeoMeta({
    robots: () => (urls.noIndex.value ? 'noindex, nofollow' : 'index, follow'),
    ogType: 'website',
    ogSiteName: 'VOYAH Tunisie',
    ogUrl: () => urls.canonical.value,
    ogLocale: () => ogLocaleByCode[urls.localeCode.value] ?? 'fr_FR',
    ogLocaleAlternate: () =>
      locales
        .filter((locale) => locale.code !== urls.localeCode.value)
        .map((locale) => ogLocaleByCode[locale.code]),
    ogImage: () => ({
      url: imageUrl.value,
      width: OG_IMAGE_WIDTH,
      height: OG_IMAGE_HEIGHT,
      alt: 'VOYAH Tunisie'
    }),
    twitterCard: 'summary_large_image',
    twitterImage: () => imageUrl.value
  })

  useHead(() => ({
    link: [
      { rel: 'canonical', href: urls.canonical.value },
      ...urls.alternates.value.map((alternate) => ({
        rel: 'alternate',
        hreflang: alternate.hreflang,
        href: alternate.href
      }))
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'AutoDealer',
              '@id': `${urls.siteUrl.value}/#organization`,
              name: 'VOYAH Tunisie — Auto Hall',
              alternateName: dealerContact.partnerLabel,
              url: urls.siteUrl.value,
              telephone: dealerContact.phone,
              email: dealerContact.email,
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Route de la Marsa GP9, Cité Essalema',
                addressLocality: 'Tunis',
                postalCode: '2079',
                addressCountry: 'TN'
              },
              openingHours: ['Mo-Fr 09:00-18:00', 'Sa 09:00-13:00'],
              sameAs: socialLinks
                .filter((link) => link.url.trim() !== '')
                .map((link) => link.url)
            },
            {
              '@type': 'WebSite',
              '@id': `${urls.siteUrl.value}/#website`,
              url: urls.siteUrl.value,
              name: 'VOYAH Tunisie',
              inLanguage: locales.map((locale) => locale.code),
              publisher: { '@id': `${urls.siteUrl.value}/#organization` }
            }
          ]
        })
      }
    ]
  }))

  return urls
}

/**
 * Données structurées Product pour les pages modèle.
 * Uniquement injectées dans le <head> : aucun impact sur le rendu visuel.
 * Les métriques servent de `additionalProperty`, sans prix inventé
 * (le champ `price` du site contient un sous-titre et non un montant).
 */
export const useProductSeo = (model: MaybeRef<ModelDefinition | null>) => {
  const urls = useSeoUrls()

  useHead(() => {
    const current = unref(model)
    if (!current) return { script: [] }

    const locale = urls.localeCode.value as LocaleCode
    const absoluteUrl = (path: string) =>
      /^https?:\/\//i.test(path) ? path : `${urls.siteUrl.value}${path}`
    const images = [current.heroImage, ...current.gallery].filter(Boolean).map(absoluteUrl)

    const properties = current.metrics.map((metric) => ({
      '@type': 'PropertyValue',
      name: localize(metric.label, locale),
      value: metric.value
    }))

    return {
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            '@id': `${urls.canonical.value}#product`,
            name: localize(current.title, locale),
            description: localize(current.description, locale),
            url: urls.canonical.value,
            image: images,
            brand: { '@type': 'Brand', name: 'VOYAH' },
            category: localize(current.subtitle, locale),
            additionalProperty: properties
          })
        }
      ]
    }
  })
}

/** Fil d'Ariane structuré pour les pages de contenu (accueil exclu). */
export const useBreadcrumbSeo = (name: MaybeRef<string>) => {
  const urls = useSeoUrls()

  useHead(() => {
    if (urls.slugPart.value === '') return { script: [] }

    const segments = urls.slugPart.value.split('/')
    const items = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'VOYAH Tunisie',
        item: `${urls.siteUrl.value}/${urls.localeCode.value}`
      },
      ...segments.map((segment, index) => {
        const isLast = index === segments.length - 1
        return {
          '@type': 'ListItem',
          position: index + 2,
          name: isLast
            ? String(unref(name))
            : sitePages.find((page) => page.slug === segment)?.slug ?? segment,
          item: `${urls.siteUrl.value}/${urls.localeCode.value}/${segments.slice(0, index + 1).join('/')}`
        }
      })
    ]

    return {
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: items
          })
        }
      ]
    }
  })
}
