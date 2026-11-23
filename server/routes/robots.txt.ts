import { normalizeSiteUrl } from '../../data/seo'

export default defineEventHandler((event) => {
  const siteUrl = normalizeSiteUrl(useRuntimeConfig(event).public.siteUrl as string | undefined)

  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  setHeader(event, 'Cache-Control', 'public, max-age=3600')

  return [
    'User-agent: *',
    'Allow: /',
    '',
    '# Zones techniques et formulaires sans valeur de référencement',
    'Disallow: /api/',
    'Disallow: /scratch/',
    'Disallow: /_nuxt/',
    'Disallow: /devis',
    'Disallow: /*/devis',
    'Disallow: /book-drive.html',
    'Disallow: /*/book-drive.html',
    'Disallow: /book-service.html',
    'Disallow: /*/book-service.html',
    '',
    `Sitemap: ${siteUrl}/sitemap.xml`
  ].join('\n')
})
