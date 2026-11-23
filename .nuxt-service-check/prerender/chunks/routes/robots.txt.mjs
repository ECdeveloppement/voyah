import { defineEventHandler, setHeader } from 'file://E:/voyah/node_modules/h3/dist/index.mjs';
import { a as useRuntimeConfig } from '../_/nitro.mjs';
import { n as normalizeSiteUrl } from '../_/seo.mjs';
import 'file://E:/voyah/node_modules/destr/dist/index.mjs';
import 'file://E:/voyah/node_modules/hookable/dist/index.mjs';
import 'file://E:/voyah/node_modules/ofetch/dist/node.mjs';
import 'file://E:/voyah/node_modules/node-mock-http/dist/index.mjs';
import 'file://E:/voyah/node_modules/unstorage/dist/index.mjs';
import 'file://E:/voyah/node_modules/unstorage/drivers/fs.mjs';
import 'file:///E:/voyah/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://E:/voyah/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://E:/voyah/node_modules/ohash/dist/index.mjs';
import 'file://E:/voyah/node_modules/klona/dist/index.mjs';
import 'file://E:/voyah/node_modules/defu/dist/defu.mjs';
import 'file://E:/voyah/node_modules/scule/dist/index.mjs';
import 'file://E:/voyah/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://E:/voyah/node_modules/pathe/dist/index.mjs';

const robots_txt = defineEventHandler((event) => {
  const siteUrl = normalizeSiteUrl(useRuntimeConfig(event).public.siteUrl);
  setHeader(event, "Content-Type", "text/plain; charset=utf-8");
  setHeader(event, "Cache-Control", "public, max-age=3600");
  return [
    "User-agent: *",
    "Allow: /",
    "",
    "# Zones techniques et formulaires sans valeur de r\xE9f\xE9rencement",
    "Disallow: /api/",
    "Disallow: /scratch/",
    "Disallow: /_nuxt/",
    "Disallow: /devis",
    "Disallow: /*/devis",
    "Disallow: /book-drive.html",
    "Disallow: /*/book-drive.html",
    "Disallow: /book-service.html",
    "Disallow: /*/book-service.html",
    "",
    `Sitemap: ${siteUrl}/sitemap.xml`
  ].join("\n");
});

export { robots_txt as default };
//# sourceMappingURL=robots.txt.mjs.map
