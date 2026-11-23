const DEFAULT_SITE_URL = "https://voyahtunisie.com";
const normalizeSiteUrl = (value) => (value || DEFAULT_SITE_URL).trim().replace(/\/+$/, "");
const noindexSlugs = /* @__PURE__ */ new Set(["devis", "book-drive.html", "book-service.html"]);

export { noindexSlugs as a, normalizeSiteUrl as n };
//# sourceMappingURL=seo.mjs.map
