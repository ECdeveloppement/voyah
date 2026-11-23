import { locales, sitePages } from '../../data/site'
import { noindexSlugs, normalizeSiteUrl } from '../../data/seo'

const escapeXml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

export default defineEventHandler((event) => {
  const siteUrl = normalizeSiteUrl(useRuntimeConfig(event).public.siteUrl as string | undefined)
  const pageBySlug = new Map(sitePages.map((page) => [page.slug, page]))

  const entries: string[] = []

  for (const locale of locales) {
    const paths = [
      `/${locale.code}`,
      ...sitePages
        .filter((page) => !noindexSlugs.has(page.slug))
        .map((page) => `/${locale.code}/${page.slug}`)
    ]

    for (const path of paths) {
      const slug = path.split('/')[2]
      const priority = !slug ? '1.0' : pageBySlug.get(slug)?.kind === 'model' ? '0.8' : '0.6'
      const suffix = slug ? `/${slug}` : ''

      const alternates = locales
        .map(
          (alternate) =>
            `    <xhtml:link rel="alternate" hreflang="${alternate.code}" href="${escapeXml(`${siteUrl}/${alternate.code}${suffix}`)}"/>`
        )
        .concat(
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(`${siteUrl}/fr${suffix}`)}"/>`
        )
        .join('\n')

      entries.push(
        [
          '  <url>',
          `    <loc>${escapeXml(`${siteUrl}${path}`)}</loc>`,
          alternates,
          `    <priority>${priority}</priority>`,
          '  </url>'
        ].join('\n')
      )
    }
  }

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  setHeader(event, 'Cache-Control', 'public, max-age=3600')

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries,
    '</urlset>',
    ''
  ].join('\n')
})
