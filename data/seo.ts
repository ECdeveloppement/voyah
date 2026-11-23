/**
 * Réglages SEO partagés entre les routes serveur (robots/sitemap) et le client.
 * Aucune dépendance Vue/Nitro ici : ce module reste importable des deux côtés.
 */

export const DEFAULT_SITE_URL = 'https://voyahtunisie.com'

export const OG_IMAGE_PATH = '/assets/seo/og-image.jpg'
export const OG_IMAGE_WIDTH = 1200
export const OG_IMAGE_HEIGHT = 630

/** Accepte une URL avec ou sans slash final, toujours renvoyée sans slash final. */
export const normalizeSiteUrl = (value?: string): string =>
  (value || DEFAULT_SITE_URL).trim().replace(/\/+$/, '')

/** Nettoie un chemin de route (query/hash et slash final) pour les URL canoniques. */
export const normalizePath = (path: string): string => {
  const clean = (path || '/').split(/[?#]/)[0]
  return clean.length > 1 ? clean.replace(/\/+$/, '') : '/'
}

/** Formulaires et pages doublons : inutiles dans le sitemap, à noindexer. */
export const noindexSlugs = new Set(['devis', 'book-drive.html', 'book-service.html'])

const noindexRootPages = new Set([
  'store.html',
  'service.html',
  'purchasing.html',
  'environmental.html',
  'energy.html',
  'document.html'
])

/** Vrai pour les zones de test, l'API et les pages fines qui ne doivent pas être indexées. */
export const shouldNoIndex = (path: string): boolean => {
  const clean = normalizePath(path)

  if (
    clean.startsWith('/scratch') ||
    clean.startsWith('/api/') ||
    clean.startsWith('/_nuxt/')
  ) {
    return true
  }

  const segments = clean.split('/').filter(Boolean)
  if (!segments.length) return false

  if (segments.length === 1 && noindexRootPages.has(segments[0])) return true

  return noindexSlugs.has(segments[1] ?? '')
}
