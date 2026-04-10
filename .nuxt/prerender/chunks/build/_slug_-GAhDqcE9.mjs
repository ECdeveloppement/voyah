import { defineComponent, computed, unref, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, ref, watch, createSlots, useSSRContext } from 'file://E:/voyah-nuxt/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrRenderClass, ssrRenderSlot } from 'file://E:/voyah-nuxt/node_modules/vue/server-renderer/index.mjs';
import { u as useSectionReveal, _ as _sfc_main$1$1, a as _sfc_main$b } from './MetricGrid-Dhnmdwt_.mjs';
import { u as useSiteContent, b as useSeoMeta, a as useHead } from './useSiteContent-C8SHHNnW.mjs';
import { u as useRoute, r as resolvePage, _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$a } from './LegacyDisclosurePage-RAl89wFh.mjs';
import { E as EnergyCenterPage } from './EnergyCenterPage-FSJ-Eh8k.mjs';
import { S as ServiceCenterPage } from './ServiceCenterPage-ltHKfc68.mjs';
import { S as StoreCenterPage } from './StoreCenterPage-Dhk3ZMSH.mjs';
import '../_/renderer.mjs';
import 'file://E:/voyah-nuxt/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://E:/voyah-nuxt/node_modules/h3/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://E:/voyah-nuxt/node_modules/destr/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/hookable/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/ofetch/dist/node.mjs';
import 'file://E:/voyah-nuxt/node_modules/node-mock-http/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/unstorage/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'file:///E:/voyah-nuxt/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://E:/voyah-nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://E:/voyah-nuxt/node_modules/ohash/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/klona/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/defu/dist/defu.mjs';
import 'file://E:/voyah-nuxt/node_modules/scule/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://E:/voyah-nuxt/node_modules/pathe/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/unhead/dist/server.mjs';
import 'file://E:/voyah-nuxt/node_modules/devalue/index.js';
import 'file://E:/voyah-nuxt/node_modules/unhead/dist/plugins.mjs';
import 'file://E:/voyah-nuxt/node_modules/unhead/dist/utils.mjs';
import 'file://E:/voyah-nuxt/node_modules/unctx/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/vue-router/vue-router.node.mjs';
import 'file://E:/voyah-nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/vue-devtools-stub/dist/index.mjs';

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "PageHero",
  __ssrInlineRender: true,
  props: {
    eyebrow: {},
    title: {},
    summary: {},
    image: {},
    video: {},
    logo: {},
    align: { default: "start" },
    compact: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["page-hero", `page-hero--${__props.align}`, { "page-hero--compact": __props.compact }]
      }, _attrs))}><div class="page-hero-media">`);
      if (__props.video) {
        _push(`<video${ssrRenderAttr("poster", __props.image)}${ssrRenderAttr("aria-label", __props.title)} autoplay muted loop playsinline preload="metadata"><source${ssrRenderAttr("src", __props.video)} type="video/mp4"></video>`);
      } else {
        _push(`<img${ssrRenderAttr("src", __props.image)}${ssrRenderAttr("alt", __props.title)}>`);
      }
      _push(`</div><div class="page-hero-overlay"></div><div class="page-hero-gradient"></div><div class="page-hero-content"><div class="container"><div class="page-hero-shell"><div class="page-hero-copy">`);
      if (__props.logo) {
        _push(`<img${ssrRenderAttr("src", __props.logo)}${ssrRenderAttr("alt", __props.title)} class="page-logo">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="eyebrow">${ssrInterpolate(__props.eyebrow)}</p><h1 class="page-title">${ssrInterpolate(__props.title)}</h1><p class="page-summary">${ssrInterpolate(__props.summary)}</p>`);
      if (_ctx.$slots.actions) {
        _push(`<div class="button-row page-hero-actions">`);
        ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.$slots.meta) {
        _push(`<aside class="page-hero-meta">`);
        ssrRenderSlot(_ctx.$slots, "meta", {}, null, _push, _parent);
        _push(`</aside>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></section>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/PageHero.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "InfoDocumentRows",
  __ssrInlineRender: true,
  props: {
    blocks: {},
    sectionLinks: {},
    chapterLabel: { type: Function },
    textFor: { type: Function }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "info-features info-features--document-list" }, _attrs))}><div class="container"><!--[-->`);
      ssrRenderList(__props.blocks, (block, index) => {
        var _a;
        _push(`<article${ssrRenderAttr("id", (_a = __props.sectionLinks[index]) == null ? void 0 : _a.id)} class="info-document-row" data-reveal><div class="info-document-row__index">${ssrInterpolate(__props.chapterLabel(index))}</div><figure class="info-document-row__media"><img${ssrRenderAttr("src", block.image)}${ssrRenderAttr("alt", __props.textFor(block.title))}></figure><div class="info-document-row__copy"><h2 class="info-document-row__title">${ssrInterpolate(__props.textFor(block.title))}</h2><p class="info-document-row__body">${ssrInterpolate(__props.textFor(block.body))}</p></div></article>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/info/InfoDocumentRows.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "InfoEditorialSections",
  __ssrInlineRender: true,
  props: {
    variant: {},
    blocks: {},
    sectionLinks: {},
    chapterLabel: { type: Function },
    textFor: { type: Function }
  },
  setup(__props) {
    const props = __props;
    const variantClass = computed(() => {
      if (props.variant === "store") return "store-flow";
      if (props.variant === "service") return "service-story";
      return "energy-story";
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: `info-features info-features--${unref(variantClass)}`
      }, _attrs))}><div class="container">`);
      if (__props.variant === "store") {
        _push(`<!--[-->`);
        if (__props.blocks[0]) {
          _push(`<article${ssrRenderAttr("id", (_a = __props.sectionLinks[0]) == null ? void 0 : _a.id)} class="info-store-lead" data-reveal><div class="info-store-lead__copy"><p class="info-store-lead__index">${ssrInterpolate(__props.chapterLabel(0))}</p><h2 class="info-store-lead__title">${ssrInterpolate(__props.textFor(__props.blocks[0].title))}</h2><p class="info-store-lead__body">${ssrInterpolate(__props.textFor(__props.blocks[0].body))}</p></div><figure class="info-store-lead__media"><img${ssrRenderAttr("src", __props.blocks[0].image)}${ssrRenderAttr("alt", __props.textFor(__props.blocks[0].title))}></figure></article>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="info-store-grid"><!--[-->`);
        ssrRenderList(__props.blocks.slice(1), (block, index) => {
          var _a2;
          _push(`<article${ssrRenderAttr("id", (_a2 = __props.sectionLinks[index + 1]) == null ? void 0 : _a2.id)} class="info-store-card" data-reveal><figure class="info-store-card__media"><img${ssrRenderAttr("src", block.image)}${ssrRenderAttr("alt", __props.textFor(block.title))}></figure><div class="info-store-card__copy"><p class="info-store-card__index">${ssrInterpolate(__props.chapterLabel(index + 1))}</p><h2 class="info-store-card__title">${ssrInterpolate(__props.textFor(block.title))}</h2><p class="info-store-card__body">${ssrInterpolate(__props.textFor(block.body))}</p></div></article>`);
        });
        _push(`<!--]--></div><!--]-->`);
      } else if (__props.variant === "service") {
        _push(`<!--[-->`);
        if (__props.blocks[0]) {
          _push(`<article${ssrRenderAttr("id", (_b = __props.sectionLinks[0]) == null ? void 0 : _b.id)} class="info-service-lead" data-reveal><figure class="info-service-lead__media"><img${ssrRenderAttr("src", __props.blocks[0].image)}${ssrRenderAttr("alt", __props.textFor(__props.blocks[0].title))}></figure><div class="info-service-lead__copy"><p class="info-service-lead__index">${ssrInterpolate(__props.chapterLabel(0))}</p><h2 class="info-service-lead__title">${ssrInterpolate(__props.textFor(__props.blocks[0].title))}</h2><p class="info-service-lead__body">${ssrInterpolate(__props.textFor(__props.blocks[0].body))}</p></div></article>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="info-service-grid"><!--[-->`);
        ssrRenderList(__props.blocks.slice(1, 3), (block, index) => {
          var _a2;
          _push(`<article${ssrRenderAttr("id", (_a2 = __props.sectionLinks[index + 1]) == null ? void 0 : _a2.id)} class="info-service-card" data-reveal><figure class="info-service-card__media"><img${ssrRenderAttr("src", block.image)}${ssrRenderAttr("alt", __props.textFor(block.title))}></figure><div class="info-service-card__copy"><p class="info-service-card__index">${ssrInterpolate(__props.chapterLabel(index + 1))}</p><h2 class="info-service-card__title">${ssrInterpolate(__props.textFor(block.title))}</h2><p class="info-service-card__body">${ssrInterpolate(__props.textFor(block.body))}</p></div></article>`);
        });
        _push(`<!--]--></div>`);
        if (__props.blocks[3]) {
          _push(`<article${ssrRenderAttr("id", (_c = __props.sectionLinks[3]) == null ? void 0 : _c.id)} class="info-service-strip" data-reveal><div class="info-service-strip__copy"><p class="info-service-strip__index">${ssrInterpolate(__props.chapterLabel(3))}</p><h2 class="info-service-strip__title">${ssrInterpolate(__props.textFor(__props.blocks[3].title))}</h2><p class="info-service-strip__body">${ssrInterpolate(__props.textFor(__props.blocks[3].body))}</p></div><figure class="info-service-strip__media"><img${ssrRenderAttr("src", __props.blocks[3].image)}${ssrRenderAttr("alt", __props.textFor(__props.blocks[3].title))}></figure></article>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.blocks.length > 4) {
          _push(`<div class="info-service-grid info-service-grid--tail"><!--[-->`);
          ssrRenderList(__props.blocks.slice(4), (block, index) => {
            var _a2;
            _push(`<article${ssrRenderAttr("id", (_a2 = __props.sectionLinks[index + 4]) == null ? void 0 : _a2.id)} class="info-service-card" data-reveal><figure class="info-service-card__media"><img${ssrRenderAttr("src", block.image)}${ssrRenderAttr("alt", __props.textFor(block.title))}></figure><div class="info-service-card__copy"><p class="info-service-card__index">${ssrInterpolate(__props.chapterLabel(index + 4))}</p><h2 class="info-service-card__title">${ssrInterpolate(__props.textFor(block.title))}</h2><p class="info-service-card__body">${ssrInterpolate(__props.textFor(block.body))}</p></div></article>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        if (__props.blocks[0]) {
          _push(`<article${ssrRenderAttr("id", (_d = __props.sectionLinks[0]) == null ? void 0 : _d.id)} class="info-energy-lead" data-reveal><div class="info-energy-lead__copy"><p class="info-energy-lead__index">${ssrInterpolate(__props.chapterLabel(0))}</p><h2 class="info-energy-lead__title">${ssrInterpolate(__props.textFor(__props.blocks[0].title))}</h2><p class="info-energy-lead__body">${ssrInterpolate(__props.textFor(__props.blocks[0].body))}</p></div><figure class="info-energy-lead__media"><img${ssrRenderAttr("src", __props.blocks[0].image)}${ssrRenderAttr("alt", __props.textFor(__props.blocks[0].title))}></figure></article>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.blocks[1]) {
          _push(`<article${ssrRenderAttr("id", (_e = __props.sectionLinks[1]) == null ? void 0 : _e.id)} class="info-energy-highlight" data-reveal><figure class="info-energy-highlight__media"><img${ssrRenderAttr("src", __props.blocks[1].image)}${ssrRenderAttr("alt", __props.textFor(__props.blocks[1].title))}></figure><div class="info-energy-highlight__copy"><p class="info-energy-highlight__index">${ssrInterpolate(__props.chapterLabel(1))}</p><h2 class="info-energy-highlight__title">${ssrInterpolate(__props.textFor(__props.blocks[1].title))}</h2><p class="info-energy-highlight__body">${ssrInterpolate(__props.textFor(__props.blocks[1].body))}</p></div></article>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="info-energy-grid"><!--[-->`);
        ssrRenderList(__props.blocks.slice(2), (block, index) => {
          var _a2;
          _push(`<article${ssrRenderAttr("id", (_a2 = __props.sectionLinks[index + 2]) == null ? void 0 : _a2.id)} class="info-energy-card" data-reveal><figure class="info-energy-card__media"><img${ssrRenderAttr("src", block.image)}${ssrRenderAttr("alt", __props.textFor(block.title))}></figure><div class="info-energy-card__copy"><p class="info-energy-card__index">${ssrInterpolate(__props.chapterLabel(index + 2))}</p><h2 class="info-energy-card__title">${ssrInterpolate(__props.textFor(block.title))}</h2><p class="info-energy-card__body">${ssrInterpolate(__props.textFor(block.body))}</p></div></article>`);
        });
        _push(`<!--]--></div><!--]-->`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/info/InfoEditorialSections.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "InfoPage",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    const props = __props;
    const { buildPath, textFor } = useSiteContent();
    useSectionReveal({});
    useSectionReveal({});
    const activeSection = ref("");
    const copy = (en, fr, ar) => ({ en, fr, ar });
    const themeMap = {
      "brand.html": {
        tone: "brand",
        heroAlign: "center",
        compactHero: false,
        showMeta: false,
        showNav: false,
        showCta: false,
        showMetrics: false,
        pageWidthClass: "wide",
        panelTitle: copy("Brand role", "R\xF4le de la marque", "\u062F\u0648\u0631 \u0627\u0644\u0639\u0644\u0627\u0645\u0629"),
        panelBody: copy(
          "Rooted in Chinese culture, Voyah blends Chinese elegance with modern technology.",
          "Enracin\xE9e dans la culture chinoise, Voyah m\xEAle l\u2019\xE9l\xE9gance chinoise \xE0 la technologie moderne.",
          "\u062A\u0646\u0637\u0644\u0642 Voyah \u0645\u0646 \u0627\u0644\u062B\u0642\u0627\u0641\u0629 \u0627\u0644\u0635\u064A\u0646\u064A\u0629 \u0648\u062A\u0645\u0632\u062C \u0628\u064A\u0646 \u0627\u0644\u0623\u0646\u0627\u0642\u0629 \u0627\u0644\u0635\u064A\u0646\u064A\u0629 \u0648\u0627\u0644\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627 \u0627\u0644\u062D\u062F\u064A\u062B\u0629."
        ),
        ctaTitle: copy("Brand system", "Syst\xE8me de marque", "\u0645\u0646\u0638\u0648\u0645\u0629 \u0627\u0644\u0639\u0644\u0627\u0645\u0629"),
        ctaHeadline: copy(
          "A premium intelligent new-energy brand with Chinese cultural confidence",
          "Une marque haut de gamme \xE0 \xE9nergies nouvelles intelligentes port\xE9e par une forte confiance culturelle chinoise",
          "\u0639\u0644\u0627\u0645\u0629 \u0631\u0627\u0642\u064A\u0629 \u0630\u0643\u064A\u0629 \u0644\u0644\u0637\u0627\u0642\u0629 \u0627\u0644\u062C\u062F\u064A\u062F\u0629 \u0628\u062B\u0642\u0629 \u062B\u0642\u0627\u0641\u064A\u0629 \u0635\u064A\u0646\u064A\u0629 \u0648\u0627\u0636\u062D\u0629"
        ),
        ctaBody: copy(
          "Voyah is committed to creating premium new-energy vehicles with Chinese cultural depth and intelligent character.",
          "Voyah s\u2019engage \xE0 cr\xE9er des v\xE9hicules premium \xE0 \xE9nergie nouvelle avec une profondeur culturelle chinoise et un caract\xE8re intelligent.",
          "\u062A\u0644\u062A\u0632\u0645 Voyah \u0628\u0627\u0628\u062A\u0643\u0627\u0631 \u0645\u0631\u0643\u0628\u0627\u062A \u0641\u0627\u062E\u0631\u0629 \u0644\u0644\u0637\u0627\u0642\u0629 \u0627\u0644\u062C\u062F\u064A\u062F\u0629 \u062A\u062D\u0645\u0644 \u0639\u0645\u0642\u0627\u064B \u062B\u0642\u0627\u0641\u064A\u0627\u064B \u0635\u064A\u0646\u064A\u0627\u064B \u0648\u0637\u0627\u0628\u0639\u0627\u064B \u0630\u0643\u064A\u0627\u064B."
        )
      },
      "book-drive.html": {
        tone: "drive",
        heroAlign: "start",
        compactHero: true,
        showMeta: false,
        showNav: false,
        showCta: false,
        showMetrics: false,
        panelTitle: copy("Booking path", "Parcours de r\xE9servation", "\u0645\u0633\u0627\u0631 \u0627\u0644\u062D\u062C\u0632"),
        panelBody: copy(
          "Selection, store coordination, and the first ownership touchpoint are treated as one connected flow.",
          "La s\xE9lection, la coordination magasin et le premier point de contact de possession sont trait\xE9s comme un seul flux.",
          "\u064A\u064F\u062A\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u0627\u062E\u062A\u064A\u0627\u0631 \u0648\u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u0645\u0639\u0631\u0636 \u0648\u0623\u0648\u0644 \u0646\u0642\u0637\u0629 \u062A\u0648\u0627\u0635\u0644 \u0644\u0644\u0645\u0644\u0643\u064A\u0629 \u0643\u0645\u0633\u0627\u0631 \u0648\u0627\u062D\u062F."
        ),
        ctaTitle: copy("Test drive", "Essai", "\u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0642\u064A\u0627\u062F\u0629"),
        ctaHeadline: copy(
          "Move from discovery to visit planning through a calm premium journey",
          "Passez de la d\xE9couverte \xE0 la planification de visite dans le m\xEAme parcours premium apais\xE9",
          "\u0627\u0646\u062A\u0642\u0644 \u0645\u0646 \u0627\u0644\u0627\u0643\u062A\u0634\u0627\u0641 \u0625\u0644\u0649 \u062A\u062E\u0637\u064A\u0637 \u0627\u0644\u0632\u064A\u0627\u0631\u0629 \u0636\u0645\u0646 \u0631\u062D\u0644\u0629 \u0641\u0627\u062E\u0631\u0629 \u0647\u0627\u062F\u0626\u0629"
        ),
        ctaBody: copy(
          "A calm premium journey helps users move smoothly from vehicle discovery to visit planning.",
          "Une exp\xE9rience premium et calme aide l\u2019utilisateur \xE0 passer en douceur de la d\xE9couverte du v\xE9hicule \xE0 la planification de visite.",
          "\u062A\u0633\u0627\u0639\u062F \u0627\u0644\u0631\u062D\u0644\u0629 \u0627\u0644\u0641\u0627\u062E\u0631\u0629 \u0627\u0644\u0647\u0627\u062F\u0626\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0639\u0644\u0649 \u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u0633\u0644\u0627\u0633\u0629 \u0645\u0646 \u0627\u0643\u062A\u0634\u0627\u0641 \u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0625\u0644\u0649 \u062A\u062E\u0637\u064A\u0637 \u0627\u0644\u0632\u064A\u0627\u0631\u0629."
        )
      },
      "store.html": {
        tone: "store",
        heroAlign: "start",
        compactHero: false,
        showMeta: true,
        showNav: false,
        showCta: false,
        showMetrics: true,
        pageWidthClass: "wide",
        panelTitle: copy("Store network", "R\xE9seau de magasins", "\u0634\u0628\u0643\u0629 \u0627\u0644\u0645\u0639\u0627\u0631\u0636"),
        panelValue: "360\xB0",
        panelBody: copy(
          "The store center connects discovery, consultation, booking, delivery, and ownership support as one premium journey.",
          "Le centre de magasins relie d\xE9couverte, conseil, r\xE9servation, livraison et accompagnement comme un seul parcours premium.",
          "\u064A\u0631\u0628\u0637 \u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0639\u0627\u0631\u0636 \u0628\u064A\u0646 \u0627\u0644\u0627\u0643\u062A\u0634\u0627\u0641 \u0648\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0648\u0627\u0644\u062D\u062C\u0632 \u0648\u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0648\u062F\u0639\u0645 \u0627\u0644\u0645\u0644\u0643\u064A\u0629 \u0643\u0631\u062D\u0644\u0629 \u0641\u0627\u062E\u0631\u0629 \u0648\u0627\u062D\u062F\u0629."
        ),
        ctaTitle: copy("Store center", "Centre de magasins", "\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0639\u0627\u0631\u0636"),
        ctaHeadline: copy(
          "A premium space system spanning arrival, consultation, and handover",
          "Un syst\xE8me d\u2019espaces premium couvrant l\u2019accueil, le conseil et la remise",
          "\u0646\u0638\u0627\u0645 \u0645\u0633\u0627\u062D\u0627\u062A \u0641\u0627\u062E\u0631\u0629 \u064A\u063A\u0637\u064A \u0627\u0644\u0627\u0633\u062A\u0642\u0628\u0627\u0644 \u0648\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0648\u0627\u0644\u062A\u0633\u0644\u064A\u0645"
        ),
        ctaBody: copy(
          "Voyah store environments are designed to make the transition from vehicle interest to ownership feel calm, guided, and premium.",
          "Les environnements de magasin Voyah sont con\xE7us pour rendre le passage de l\u2019int\xE9r\xEAt pour le v\xE9hicule \xE0 la possession plus calme, guid\xE9 et premium.",
          "\u0635\u0645\u0645\u062A \u0628\u064A\u0626\u0627\u062A \u0645\u0639\u0627\u0631\u0636 Voyah \u0644\u062C\u0639\u0644 \u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0645\u0646 \u0627\u0644\u0627\u0647\u062A\u0645\u0627\u0645 \u0628\u0627\u0644\u0645\u0631\u0643\u0628\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u0644\u0643\u064A\u0629 \u0623\u0643\u062B\u0631 \u0647\u062F\u0648\u0621\u0627\u064B \u0648\u062A\u0648\u062C\u064A\u0647\u0627\u064B \u0648\u0637\u0627\u0628\u0639\u0627\u064B \u0641\u0627\u062E\u0631\u0627\u064B."
        )
      },
      "service.html": {
        tone: "default",
        heroAlign: "start",
        compactHero: false,
        showMeta: false,
        showNav: false,
        showCta: false,
        showMetrics: true,
        panelTitle: copy("Service promise", "Promesse de service", "\u0648\u0639\u062F \u0627\u0644\u062E\u062F\u0645\u0629"),
        panelValue: "7\xD724",
        panelBody: copy(
          "Every touchpoint is designed around sincere reception, ceremonial delivery, all-day protection, and professional support.",
          "Chaque point de contact est pens\xE9 autour d\u2019un accueil sinc\xE8re, d\u2019une livraison c\xE9r\xE9monielle, d\u2019une protection continue et d\u2019un soutien professionnel.",
          "\u0635\u064F\u0645\u0645\u062A \u0643\u0644 \u0646\u0642\u0637\u0629 \u062A\u0648\u0627\u0635\u0644 \u062D\u0648\u0644 \u0627\u0633\u062A\u0642\u0628\u0627\u0644 \u0635\u0627\u062F\u0642 \u0648\u062A\u0633\u0644\u064A\u0645 \u0627\u062D\u062A\u0641\u0627\u0644\u064A \u0648\u062D\u0645\u0627\u064A\u0629 \u0645\u0633\u062A\u0645\u0631\u0629 \u0648\u062F\u0639\u0645 \u0645\u0647\u0646\u064A."
        ),
        ctaTitle: copy("Voyah Service", "Service Voyah", "\u062E\u062F\u0645\u0627\u062A Voyah"),
        ctaHeadline: copy(
          "You focus on chasing freedom and dreams while Voyah focuses on careful protection",
          "Vous poursuivez la libert\xE9 et les r\xEAves pendant que Voyah se concentre sur une protection attentive",
          "\u0623\u0646\u062A \u062A\u0646\u0637\u0644\u0642 \u0646\u062D\u0648 \u0627\u0644\u062D\u0631\u064A\u0629 \u0648\u0627\u0644\u0623\u062D\u0644\u0627\u0645 \u0628\u064A\u0646\u0645\u0627 \u062A\u0631\u0643\u0632 Voyah \u0639\u0644\u0649 \u0627\u0644\u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u062F\u0642\u064A\u0642\u0629"
        ),
        ctaBody: copy(
          "Voyah Service follows a wholehearted service philosophy and is committed to delivering a trusted full-journey ownership experience.",
          "Voyah Service suit une philosophie de service enti\xE8rement d\xE9vou\xE9e et s\u2019engage \xE0 offrir une exp\xE9rience de possession digne de confiance sur l\u2019ensemble du parcours.",
          "\u062A\u0644\u062A\u0632\u0645 Voyah Service \u0628\u0641\u0644\u0633\u0641\u0629 \u062E\u062F\u0645\u0629 \u0642\u0627\u0626\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u0625\u062E\u0644\u0627\u0635 \u0627\u0644\u0643\u0627\u0645\u0644 \u0648\u062A\u0647\u062F\u0641 \u0625\u0644\u0649 \u062A\u0642\u062F\u064A\u0645 \u062A\u062C\u0631\u0628\u0629 \u0645\u0644\u0643\u064A\u0629 \u0645\u0648\u062B\u0648\u0642\u0629 \u0639\u0628\u0631 \u0627\u0644\u0631\u062D\u0644\u0629 \u0628\u0623\u0643\u0645\u0644\u0647\u0627."
        )
      },
      "energy.html": {
        tone: "default",
        heroAlign: "start",
        compactHero: false,
        showMeta: false,
        showNav: false,
        showCta: false,
        showMetrics: true,
        panelTitle: copy("Energy network", "R\xE9seau \xE9nergie", "\u0634\u0628\u0643\u0629 \u0627\u0644\u0637\u0627\u0642\u0629"),
        panelValue: "1.54M+",
        panelBody: copy(
          "The energy layer combines charging scenes, partner infrastructure, and digital guidance into one connected ecosystem.",
          "La couche \xE9nergie combine sc\xE8nes de recharge, infrastructures partenaires et guidage num\xE9rique dans un \xE9cosyst\xE8me unique.",
          "\u062A\u062C\u0645\u0639 \u0645\u0646\u0638\u0648\u0645\u0629 \u0627\u0644\u0637\u0627\u0642\u0629 \u0628\u064A\u0646 \u0645\u0634\u0627\u0647\u062F \u0627\u0644\u0634\u062D\u0646 \u0648\u0627\u0644\u0628\u0646\u064A\u0629 \u0627\u0644\u062A\u062D\u062A\u064A\u0629 \u0627\u0644\u0634\u0631\u064A\u0643\u0629 \u0648\u0627\u0644\u0625\u0631\u0634\u0627\u062F \u0627\u0644\u0631\u0642\u0645\u064A \u0641\u064A \u0646\u0638\u0627\u0645 \u0645\u062A\u0631\u0627\u0628\u0637 \u0648\u0627\u062D\u062F."
        ),
        ctaTitle: copy("Voyah Energy", "\xC9nergie Voyah", "\u0637\u0627\u0642\u0629 Voyah"),
        ctaHeadline: copy(
          "A connected energy ecosystem for daily driving and long-distance use",
          "Un \xE9cosyst\xE8me \xE9nergie connect\xE9 pour l\u2019usage quotidien et les longs trajets",
          "\u0645\u0646\u0638\u0648\u0645\u0629 \u0637\u0627\u0642\u0629 \u0645\u062A\u0631\u0627\u0628\u0637\u0629 \u0644\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u064A\u0648\u0645\u064A \u0648\u0644\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629"
        ),
        ctaBody: copy(
          "Voyah Energy links charging resources, supercharging capability, and digital route guidance to support every ownership rhythm.",
          "Voyah Energy relie les ressources de recharge, la recharge ultra rapide et le guidage num\xE9rique pour soutenir chaque rythme d\u2019usage.",
          "\u062A\u0631\u0628\u0637 \u0637\u0627\u0642\u0629 Voyah \u0628\u064A\u0646 \u0645\u0648\u0627\u0631\u062F \u0627\u0644\u0634\u062D\u0646 \u0648\u0627\u0644\u0642\u062F\u0631\u0629 \u0639\u0644\u0649 \u0627\u0644\u0634\u062D\u0646 \u0627\u0644\u0633\u0631\u064A\u0639 \u0648\u0627\u0644\u062A\u0648\u062C\u064A\u0647 \u0627\u0644\u0631\u0642\u0645\u064A \u0644\u062F\u0639\u0645 \u0643\u0644 \u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645."
        )
      },
      "corporate.html": {
        tone: "brand",
        heroAlign: "start",
        compactHero: false,
        showMeta: false,
        showNav: false,
        showCta: false,
        showMetrics: false,
        panelTitle: copy("Communication", "Communication", "\u0627\u0644\u062A\u0648\u0627\u0635\u0644"),
        panelBody: copy(
          "Voyah communication presents mission, vision, and values as one coherent long-term brand narrative.",
          "La communication de Voyah pr\xE9sente la mission, la vision et les valeurs comme un r\xE9cit de marque coh\xE9rent sur le long terme.",
          "\u064A\u0639\u0631\u0636 \u062A\u0648\u0627\u0635\u0644 Voyah \u0627\u0644\u0645\u0647\u0645\u0629 \u0648\u0627\u0644\u0631\u0624\u064A\u0629 \u0648\u0627\u0644\u0642\u064A\u0645 \u0643\u0633\u0631\u062F \u0639\u0644\u0627\u0645\u0629 \u0645\u062A\u0645\u0627\u0633\u0643 \u0639\u0644\u0649 \u0627\u0644\u0645\u062F\u0649 \u0627\u0644\u0637\u0648\u064A\u0644."
        ),
        ctaTitle: copy("Brand culture", "Culture de marque", "\u062B\u0642\u0627\u0641\u0629 \u0627\u0644\u0639\u0644\u0627\u0645\u0629"),
        ctaHeadline: copy(
          "Mission, vision, and values aligned around long-term premium development",
          "Mission, vision et valeurs align\xE9es autour d\u2019un d\xE9veloppement premium de long terme",
          "\u0627\u0644\u0645\u0647\u0645\u0629 \u0648\u0627\u0644\u0631\u0624\u064A\u0629 \u0648\u0627\u0644\u0642\u064A\u0645 \u0645\u0635\u0637\u0641\u0651\u0629 \u062D\u0648\u0644 \u062A\u0637\u0648\u0631 \u0641\u0627\u062E\u0631 \u0637\u0648\u064A\u0644 \u0627\u0644\u0623\u0645\u062F"
        ),
        ctaBody: copy(
          "Corporate culture content clarifies how Voyah translates technology ambition into user-oriented product and service standards.",
          "Le contenu de culture d\u2019entreprise clarifie la mani\xE8re dont Voyah transforme son ambition technologique en standards produits et services orient\xE9s utilisateur.",
          "\u064A\u0648\u0636\u062D \u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u062B\u0642\u0627\u0641\u0629 \u0627\u0644\u0645\u0624\u0633\u0633\u064A\u0629 \u0643\u064A\u0641 \u062A\u062D\u0648\u0651\u0644 Voyah \u0637\u0645\u0648\u062D\u0647\u0627 \u0627\u0644\u062A\u0642\u0646\u064A \u0625\u0644\u0649 \u0645\u0639\u0627\u064A\u064A\u0631 \u0645\u0646\u062A\u062C \u0648\u062E\u062F\u0645\u0629 \u0645\u0648\u062C\u0647\u0629 \u0644\u0644\u0645\u0633\u062A\u062E\u062F\u0645."
        )
      },
      "joinus.html": {
        tone: "drive",
        heroAlign: "start",
        compactHero: true,
        showMeta: false,
        showNav: false,
        showCta: false,
        showMetrics: false,
        panelTitle: copy("Careers", "Carri\xE8res", "\u0627\u0644\u0648\u0638\u0627\u0626\u0641"),
        panelBody: copy(
          "Campus and social recruitment channels are structured to connect talent with Voyah\u2019s long-term growth roles.",
          "Les canaux de recrutement campus et social sont structur\xE9s pour relier les talents aux r\xF4les de croissance de long terme chez Voyah.",
          "\u062A\u0645\u062A \u0647\u064A\u0643\u0644\u0629 \u0642\u0646\u0648\u0627\u062A \u0627\u0644\u062A\u0648\u0638\u064A\u0641 \u0627\u0644\u062C\u0627\u0645\u0639\u064A \u0648\u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A \u0644\u0631\u0628\u0637 \u0627\u0644\u0645\u0648\u0627\u0647\u0628 \u0628\u0623\u062F\u0648\u0627\u0631 \u0627\u0644\u0646\u0645\u0648 \u0637\u0648\u064A\u0644 \u0627\u0644\u0623\u0645\u062F \u0644\u062F\u0649 Voyah."
        ),
        ctaTitle: copy("Join Voyah", "Rejoindre Voyah", "\u0627\u0644\u0627\u0646\u0636\u0645\u0627\u0645 \u0625\u0644\u0649 Voyah"),
        ctaHeadline: copy(
          "Build intelligent mobility careers with product, digital, and service teams",
          "Construire des parcours de mobilit\xE9 intelligente avec les \xE9quipes produit, num\xE9rique et service",
          "\u0628\u0646\u0627\u0621 \u0645\u0633\u0627\u0631\u0627\u062A \u0645\u0647\u0646\u064A\u0629 \u0641\u064A \u0627\u0644\u062A\u0646\u0642\u0644 \u0627\u0644\u0630\u0643\u064A \u0645\u0639 \u0641\u0631\u0642 \u0627\u0644\u0645\u0646\u062A\u062C \u0648\u0627\u0644\u0631\u0642\u0645\u0646\u0629 \u0648\u0627\u0644\u062E\u062F\u0645\u0629"
        ),
        ctaBody: copy(
          "Recruitment pages focus on role clarity, application access, and onboarding readiness for prospective candidates.",
          "Les pages de recrutement se concentrent sur la clart\xE9 des r\xF4les, l\u2019acc\xE8s \xE0 la candidature et la pr\xE9paration \xE0 l\u2019int\xE9gration des candidats.",
          "\u062A\u0631\u0643\u0632 \u0635\u0641\u062D\u0627\u062A \u0627\u0644\u062A\u0648\u0638\u064A\u0641 \u0639\u0644\u0649 \u0648\u0636\u0648\u062D \u0627\u0644\u0623\u062F\u0648\u0627\u0631 \u0648\u0633\u0647\u0648\u0644\u0629 \u0627\u0644\u062A\u0642\u062F\u064A\u0645 \u0648\u0627\u0644\u0627\u0633\u062A\u0639\u062F\u0627\u062F \u0644\u0644\u0627\u0646\u0636\u0645\u0627\u0645 \u0628\u0627\u0644\u0646\u0633\u0628\u0629 \u0644\u0644\u0645\u0631\u0634\u062D\u064A\u0646."
        )
      },
      "recruit-partners.html": {
        tone: "store",
        heroAlign: "start",
        compactHero: true,
        showMeta: false,
        showNav: false,
        showCta: false,
        showMetrics: false,
        panelTitle: copy("Partners", "Partenaires", "\u0627\u0644\u0634\u0631\u0643\u0627\u0621"),
        panelBody: copy(
          "Partner recruitment aligns network coverage, operation standards, and premium service capability.",
          "Le recrutement des partenaires aligne la couverture r\xE9seau, les standards op\xE9rationnels et la capacit\xE9 de service premium.",
          "\u064A\u0631\u0628\u0637 \u0627\u0633\u062A\u0642\u0637\u0627\u0628 \u0627\u0644\u0634\u0631\u0643\u0627\u0621 \u0628\u064A\u0646 \u062A\u063A\u0637\u064A\u0629 \u0627\u0644\u0634\u0628\u0643\u0629 \u0648\u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u062A\u0634\u063A\u064A\u0644 \u0648\u0642\u062F\u0631\u0629 \u0627\u0644\u062E\u062F\u0645\u0629 \u0627\u0644\u0641\u0627\u062E\u0631\u0629."
        ),
        ctaTitle: copy("Partner growth", "Croissance partenaires", "\u0646\u0645\u0648 \u0627\u0644\u0634\u0631\u0643\u0627\u0621"),
        ctaHeadline: copy(
          "Retail, delivery, and service collaboration under one partner framework",
          "Collaboration retail, livraison et service dans un cadre partenaire unique",
          "\u0627\u0644\u062A\u0639\u0627\u0648\u0646 \u0641\u064A \u0627\u0644\u0628\u064A\u0639 \u0648\u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0648\u0627\u0644\u062E\u062F\u0645\u0629 \u0636\u0645\u0646 \u0625\u0637\u0627\u0631 \u0634\u0631\u0627\u0643\u0629 \u0645\u0648\u062D\u062F"
        ),
        ctaBody: copy(
          "The route emphasizes long-term collaboration quality rather than short-term channel expansion.",
          "La page met l\u2019accent sur la qualit\xE9 de collaboration de long terme plut\xF4t que sur une expansion de canal \xE0 court terme.",
          "\u062A\u0631\u0643\u0632 \u0627\u0644\u0635\u0641\u062D\u0629 \u0639\u0644\u0649 \u062C\u0648\u062F\u0629 \u0627\u0644\u062A\u0639\u0627\u0648\u0646 \u0637\u0648\u064A\u0644 \u0627\u0644\u0623\u0645\u062F \u0628\u062F\u0644\u0627\u064B \u0645\u0646 \u0627\u0644\u062A\u0648\u0633\u0639 \u0627\u0644\u0642\u0635\u064A\u0631 \u0641\u064A \u0627\u0644\u0642\u0646\u0648\u0627\u062A."
        )
      },
      "ir.html": {
        tone: "default",
        heroAlign: "start",
        compactHero: true,
        showMeta: false,
        showNav: false,
        showCta: false,
        showMetrics: false,
        panelTitle: copy("Investor Relations", "Relations investisseurs", "\u0639\u0644\u0627\u0642\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062B\u0645\u0631\u064A\u0646"),
        panelBody: copy(
          "Investor-facing disclosures organize company profile, governance, and reference materials for structured review.",
          "Les publications destin\xE9es aux investisseurs organisent le profil de l\u2019entreprise, la gouvernance et les documents de r\xE9f\xE9rence pour une lecture structur\xE9e.",
          "\u062A\u0646\u0638\u0645 \u0627\u0644\u0625\u0641\u0635\u0627\u062D\u0627\u062A \u0627\u0644\u0645\u0648\u062C\u0647\u0629 \u0644\u0644\u0645\u0633\u062A\u062B\u0645\u0631\u064A\u0646 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u062A\u0639\u0631\u064A\u0641\u064A \u0644\u0644\u0634\u0631\u0643\u0629 \u0648\u0627\u0644\u062D\u0648\u0643\u0645\u0629 \u0648\u0627\u0644\u0645\u0648\u0627\u062F \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629 \u0636\u0645\u0646 \u0645\u0631\u0627\u062C\u0639\u0629 \u0645\u0646\u0638\u0645\u0629."
        ),
        ctaTitle: copy("Investor information", "Information investisseurs", "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062B\u0645\u0631\u064A\u0646"),
        ctaHeadline: copy(
          "Governance and reference documentation prepared for transparent review",
          "Documents de gouvernance et de r\xE9f\xE9rence pr\xE9par\xE9s pour une lecture transparente",
          "\u0648\u062B\u0627\u0626\u0642 \u0627\u0644\u062D\u0648\u0643\u0645\u0629 \u0648\u0627\u0644\u0645\u0631\u0627\u062C\u0639 \u0645\u064F\u0639\u062F\u0629 \u0644\u0645\u0631\u0627\u062C\u0639\u0629 \u0634\u0641\u0627\u0641\u0629"
        ),
        ctaBody: copy(
          "IR sections improve access to key corporate documents and improve consistency across investor communication touchpoints.",
          "Les sections IR am\xE9liorent l\u2019acc\xE8s aux documents cl\xE9s de l\u2019entreprise et renforcent la coh\xE9rence des points de contact de communication investisseurs.",
          "\u062A\u062D\u0633\u0646 \u0623\u0642\u0633\u0627\u0645 \u0639\u0644\u0627\u0642\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062B\u0645\u0631\u064A\u0646 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A \u0627\u0644\u0645\u0624\u0633\u0633\u064A\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0648\u062A\u0639\u0632\u0632 \u0627\u062A\u0633\u0627\u0642 \u0646\u0642\u0627\u0637 \u062A\u0648\u0627\u0635\u0644 \u0627\u0644\u0645\u0633\u062A\u062B\u0645\u0631\u064A\u0646."
        )
      },
      "purchasing.html": {
        tone: "default",
        heroAlign: "start",
        compactHero: true,
        showMeta: false,
        showNav: false,
        showCta: false,
        showMetrics: false,
        panelTitle: copy("Procurement", "Achats", "\u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A"),
        panelBody: copy(
          "Procurement disclosures provide public visibility into sourcing information and supplier collaboration structure.",
          "Les informations achats offrent une visibilit\xE9 publique sur les donn\xE9es de sourcing et la structure de coop\xE9ration fournisseurs.",
          "\u062A\u0648\u0641\u0631 \u0625\u0641\u0635\u0627\u062D\u0627\u062A \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A \u0631\u0624\u064A\u0629 \u0639\u0627\u0645\u0629 \u062D\u0648\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0648\u0631\u064A\u062F \u0648\u0647\u064A\u0643\u0644 \u0627\u0644\u062A\u0639\u0627\u0648\u0646 \u0645\u0639 \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646."
        ),
        ctaTitle: copy("Procurement disclosure", "Divulgation achats", "\u0625\u0641\u0635\u0627\u062D \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A"),
        ctaHeadline: copy(
          "Sourcing transparency, historical data, and supplier collaboration standards",
          "Transparence du sourcing, donn\xE9es historiques et standards de collaboration fournisseurs",
          "\u0634\u0641\u0627\u0641\u064A\u0629 \u0627\u0644\u062A\u0648\u0631\u064A\u062F \u0648\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0627\u0631\u064A\u062E\u064A\u0629 \u0648\u0645\u0639\u0627\u064A\u064A\u0631 \u062A\u0639\u0627\u0648\u0646 \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646"
        ),
        ctaBody: copy(
          "The page is organized for clearer review of purchasing history and current supplier-facing disclosure.",
          "La page est structur\xE9e pour une revue plus claire de l\u2019historique d\u2019achats et des informations actuelles destin\xE9es aux fournisseurs.",
          "\u062A\u0645 \u062A\u0646\u0638\u064A\u0645 \u0627\u0644\u0635\u0641\u062D\u0629 \u0644\u062A\u0645\u0643\u064A\u0646 \u0645\u0631\u0627\u062C\u0639\u0629 \u0623\u0648\u0636\u062D \u0644\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0634\u0631\u0627\u0621 \u0648\u0627\u0644\u0625\u0641\u0635\u0627\u062D\u0627\u062A \u0627\u0644\u062D\u0627\u0644\u064A\u0629 \u0627\u0644\u0645\u0648\u062C\u0647\u0629 \u0644\u0644\u0645\u0648\u0631\u062F\u064A\u0646."
        )
      },
      "environmental.html": {
        tone: "default",
        heroAlign: "start",
        compactHero: true,
        showMeta: false,
        showNav: false,
        showCta: false,
        showMetrics: false,
        panelTitle: copy("Environment", "Environnement", "\u0627\u0644\u0628\u064A\u0626\u0629"),
        panelBody: copy(
          "Environmental information is disclosed for transparent public reference and long-term operational accountability.",
          "Les informations environnementales sont publi\xE9es pour une r\xE9f\xE9rence publique transparente et une responsabilit\xE9 op\xE9rationnelle de long terme.",
          "\u064A\u062A\u0645 \u0646\u0634\u0631 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0628\u064A\u0626\u064A\u0629 \u0644\u0645\u0631\u062C\u0639 \u0639\u0627\u0645 \u0634\u0641\u0627\u0641 \u0648\u0644\u0645\u0633\u0627\u0621\u0644\u0629 \u062A\u0634\u063A\u064A\u0644\u064A\u0629 \u0637\u0648\u064A\u0644\u0629 \u0627\u0644\u0623\u0645\u062F."
        ),
        ctaTitle: copy("Environmental disclosure", "Divulgation environnementale", "\u0627\u0644\u0625\u0641\u0635\u0627\u062D \u0627\u0644\u0628\u064A\u0626\u064A"),
        ctaHeadline: copy(
          "Operational responsibility and sustainability disclosure in one structured route",
          "Responsabilit\xE9 op\xE9rationnelle et divulgation durable dans un parcours structur\xE9",
          "\u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064A\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644\u064A\u0629 \u0648\u0627\u0644\u0625\u0641\u0635\u0627\u062D \u0627\u0644\u0645\u0633\u062A\u062F\u0627\u0645 \u0636\u0645\u0646 \u0645\u0633\u0627\u0631 \u0645\u0646\u0638\u0645"
        ),
        ctaBody: copy(
          "Disclosure sections emphasize compliance, continuity, and long-term environmental management orientation.",
          "Les sections de divulgation mettent l\u2019accent sur la conformit\xE9, la continuit\xE9 et l\u2019orientation de gestion environnementale de long terme.",
          "\u062A\u0624\u0643\u062F \u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u0625\u0641\u0635\u0627\u062D \u0639\u0644\u0649 \u0627\u0644\u0627\u0645\u062A\u062B\u0627\u0644 \u0648\u0627\u0644\u0627\u0633\u062A\u0645\u0631\u0627\u0631\u064A\u0629 \u0648\u062A\u0648\u062C\u0647 \u0627\u0644\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0628\u064A\u0626\u064A\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u062F\u0649 \u0627\u0644\u0637\u0648\u064A\u0644."
        )
      },
      "document.html": {
        tone: "default",
        heroAlign: "start",
        compactHero: true,
        showMeta: false,
        showNav: false,
        showCta: false,
        showMetrics: false,
        panelTitle: copy("Documents", "Documents", "\u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A"),
        panelBody: copy(
          "Document pages centralize manuals and trusted references for easier retrieval and comparison.",
          "Les pages de documents centralisent les manuels et r\xE9f\xE9rences utiles pour une recherche et une comparaison facilit\xE9es.",
          "\u062A\u062C\u0645\u0639 \u0635\u0641\u062D\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A \u0627\u0644\u0623\u062F\u0644\u0629 \u0648\u0627\u0644\u0645\u0631\u0627\u062C\u0639 \u0627\u0644\u0645\u0648\u062B\u0648\u0642\u0629 \u0644\u062A\u0633\u0647\u064A\u0644 \u0627\u0644\u0648\u0635\u0648\u0644 \u0648\u0627\u0644\u0645\u0642\u0627\u0631\u0646\u0629."
        ),
        ctaTitle: copy("Document center", "Centre documentaire", "\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A"),
        ctaHeadline: copy(
          "Manuals, reference files, and digital retrieval within one organized archive",
          "Manuels, fichiers de r\xE9f\xE9rence et acc\xE8s num\xE9rique au sein d\u2019une archive organis\xE9e",
          "\u0627\u0644\u0623\u062F\u0644\u0629 \u0648\u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629 \u0648\u0627\u0644\u0648\u0635\u0648\u0644 \u0627\u0644\u0631\u0642\u0645\u064A \u0636\u0645\u0646 \u0623\u0631\u0634\u064A\u0641 \u0645\u0646\u0638\u0645"
        ),
        ctaBody: copy(
          "The route organizes document access around ownership usage, reference review, and consistent digital retrieval paths.",
          "Cette page organise l\u2019acc\xE8s documentaire autour de l\u2019usage en possession, de la revue de r\xE9f\xE9rence et de parcours num\xE9riques coh\xE9rents.",
          "\u064A\u0646\u0638\u0645 \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u0627\u0631 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A \u062D\u0648\u0644 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0645\u0644\u0643\u064A\u0629 \u0648\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0645\u0631\u0627\u062C\u0639 \u0648\u0645\u0633\u0627\u0631\u0627\u062A \u0627\u0644\u0648\u0635\u0648\u0644 \u0627\u0644\u0631\u0642\u0645\u064A \u0627\u0644\u0645\u062A\u0633\u0642\u0629."
        )
      }
    };
    const defaultTheme = {
      tone: "default",
      heroAlign: "start",
      compactHero: false,
      showMeta: false,
      showNav: true,
      showCta: false,
      panelTitle: copy("Page chapter", "Chapitre de page", "\u0641\u0635\u0644 \u0627\u0644\u0635\u0641\u062D\u0629"),
      panelBody: copy(
        "Image, information, and service touchpoints stay aligned within one calm premium page rhythm.",
        "L\u2019image, l\u2019information et les points de service restent align\xE9s dans un m\xEAme rythme premium apais\xE9.",
        "\u062A\u0628\u0642\u0649 \u0627\u0644\u0635\u0648\u0631\u0629 \u0648\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0629 \u0648\u0646\u0642\u0627\u0637 \u0627\u0644\u062E\u062F\u0645\u0629 \u0645\u0646\u0633\u062C\u0645\u0629 \u0636\u0645\u0646 \u0625\u064A\u0642\u0627\u0639 \u0641\u0627\u062E\u0631 \u0648\u0647\u0627\u062F\u0626 \u0648\u0627\u062D\u062F \u0644\u0644\u0635\u0641\u062D\u0629."
      ),
      ctaTitle: copy("More from Voyah", "Plus de Voyah", "\u0627\u0644\u0645\u0632\u064A\u062F \u0645\u0646 Voyah"),
      ctaHeadline: copy(
        "Continue exploring the broader Voyah brand, service, and ownership system",
        "Poursuivez l\u2019exploration de l\u2019univers Voyah, de ses services et de son exp\xE9rience de possession",
        "\u0648\u0627\u0635\u0644 \u0627\u0633\u062A\u0643\u0634\u0627\u0641 \u0645\u0646\u0638\u0648\u0645\u0629 Voyah \u0627\u0644\u0623\u0648\u0633\u0639 \u0644\u0644\u0639\u0644\u0627\u0645\u0629 \u0648\u0627\u0644\u062E\u062F\u0645\u0629 \u0648\u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0645\u0644\u0643\u064A\u0629"
      ),
      ctaBody: copy(
        "Each page connects product understanding, service access, and brand storytelling through one continuous premium experience.",
        "Chaque page relie la compr\xE9hension du produit, l\u2019acc\xE8s au service et le r\xE9cit de marque dans une exp\xE9rience premium continue.",
        "\u062A\u0631\u0628\u0637 \u0643\u0644 \u0635\u0641\u062D\u0629 \u0628\u064A\u0646 \u0641\u0647\u0645 \u0627\u0644\u0645\u0646\u062A\u062C \u0648\u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u062E\u062F\u0645\u0629 \u0648\u0633\u0631\u062F \u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0636\u0645\u0646 \u062A\u062C\u0631\u0628\u0629 \u0641\u0627\u062E\u0631\u0629 \u0645\u062A\u0648\u0627\u0635\u0644\u0629."
      )
    };
    const theme = computed(() => {
      var _a;
      return (_a = themeMap[props.page.slug]) != null ? _a : defaultTheme;
    });
    const layoutMode = computed(() => {
      if (["ir.html", "purchasing.html", "environmental.html", "document.html"].includes(props.page.slug)) return "document";
      if (["store.html", "service.html", "energy.html", "book-drive.html"].includes(props.page.slug)) return "editorial";
      return "brand";
    });
    const isBrandRoute = computed(() => props.page.slug === "brand.html");
    const isStoreRoute = computed(() => props.page.slug === "store.html");
    const isCorporateRoute = computed(() => props.page.slug === "corporate.html");
    const isServiceRoute = computed(() => props.page.slug === "service.html");
    const isEnergyRoute = computed(() => props.page.slug === "energy.html");
    const isCareerRoute = computed(() => ["joinus.html", "recruit-partners.html"].includes(props.page.slug));
    const isDocumentRoute = computed(
      () => ["ir.html", "purchasing.html", "environmental.html", "document.html"].includes(props.page.slug)
    );
    const displayMetrics = computed(() => {
      var _a;
      if ((_a = props.page.metrics) == null ? void 0 : _a.length) {
        return props.page.metrics;
      }
      return [];
    });
    const sectionLinks = computed(
      () => props.page.blocks.map((block, index) => ({
        id: `chapter-${index + 1}`,
        label: textFor(block.title)
      }))
    );
    const chapterLabel = (index) => `0${index + 1}`;
    const panelValue = computed(() => {
      var _a;
      return (_a = theme.value.panelValue) != null ? _a : `${props.page.blocks.length}`.padStart(2, "0");
    });
    watch(
      sectionLinks,
      (links) => {
        var _a, _b;
        activeSection.value = (_b = (_a = links[0]) == null ? void 0 : _a.id) != null ? _b : "";
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          "info-page",
          `info-page--${unref(theme).tone}`,
          `info-page--${unref(layoutMode)}`,
          `info-page--${__props.page.slug.replace(".html", "")}`,
          unref(theme).pageWidthClass ? `info-page--${unref(theme).pageWidthClass}` : null
        ]
      }, _attrs))} data-v-f1dd9efc>`);
      _push(ssrRenderComponent(_sfc_main$9, {
        eyebrow: unref(textFor)(__props.page.eyebrow),
        title: unref(textFor)(__props.page.title),
        summary: unref(textFor)(__props.page.summary),
        image: __props.page.heroImage,
        align: unref(theme).heroAlign,
        compact: unref(theme).compactHero
      }, createSlots({ _: 2 }, [
        __props.page.ctaSlug && __props.page.ctaLabel ? {
          name: "actions",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$1$1, {
                to: unref(buildPath)(__props.page.ctaSlug),
                variant: "primary"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(textFor)(__props.page.ctaLabel))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(textFor)(__props.page.ctaLabel)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$1$1, {
                  to: unref(buildPath)(__props.page.ctaSlug),
                  variant: "primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(textFor)(__props.page.ctaLabel)), 1)
                  ]),
                  _: 1
                }, 8, ["to"])
              ];
            }
          }),
          key: "0"
        } : void 0,
        unref(theme).showMeta ? {
          name: "meta",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="hero-panel" data-reveal data-v-f1dd9efc${_scopeId}><div class="hero-panel__label" data-v-f1dd9efc${_scopeId}>${ssrInterpolate(unref(textFor)(unref(theme).panelTitle))}</div><div class="hero-panel__value" data-v-f1dd9efc${_scopeId}>${ssrInterpolate(unref(panelValue))}</div><p class="hero-panel__copy" data-v-f1dd9efc${_scopeId}>${ssrInterpolate(unref(textFor)(unref(theme).panelBody))}</p></div>`);
            } else {
              return [
                createVNode("div", {
                  class: "hero-panel",
                  "data-reveal": ""
                }, [
                  createVNode("div", { class: "hero-panel__label" }, toDisplayString(unref(textFor)(unref(theme).panelTitle)), 1),
                  createVNode("div", { class: "hero-panel__value" }, toDisplayString(unref(panelValue)), 1),
                  createVNode("p", { class: "hero-panel__copy" }, toDisplayString(unref(textFor)(unref(theme).panelBody)), 1)
                ])
              ];
            }
          }),
          key: "1"
        } : void 0
      ]), _parent));
      if (unref(theme).showNav) {
        _push(`<section class="info-page-nav" data-v-f1dd9efc><div class="container info-page-nav__inner" data-v-f1dd9efc><!--[-->`);
        ssrRenderList(unref(sectionLinks), (link) => {
          _push(`<a${ssrRenderAttr("href", `#${link.id}`)} class="${ssrRenderClass(["info-page-nav__link", { active: unref(activeSection) === link.id }])}" data-v-f1dd9efc>${ssrInterpolate(link.label)}</a>`);
        });
        _push(`<!--]--></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(theme).showMetrics && unref(displayMetrics).length) {
        _push(`<section class="section-shell info-metrics-shell" data-v-f1dd9efc><div class="container" data-v-f1dd9efc>`);
        _push(ssrRenderComponent(_sfc_main$b, { metrics: unref(displayMetrics) }, null, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isBrandRoute)) {
        _push(`<section class="info-features info-features--brand-story" data-v-f1dd9efc><div class="container" data-v-f1dd9efc>`);
        if (__props.page.blocks[0]) {
          _push(`<article${ssrRenderAttr("id", (_a = unref(sectionLinks)[0]) == null ? void 0 : _a.id)} class="info-brand-lead" data-reveal data-v-f1dd9efc><figure class="info-brand-lead__media" data-v-f1dd9efc><img${ssrRenderAttr("src", __props.page.blocks[0].image)}${ssrRenderAttr("alt", unref(textFor)(__props.page.blocks[0].title))} data-v-f1dd9efc></figure><div class="info-brand-lead__copy" data-v-f1dd9efc><p class="info-brand-lead__index" data-v-f1dd9efc>${ssrInterpolate(chapterLabel(0))}</p><h2 class="info-brand-lead__title" data-v-f1dd9efc>${ssrInterpolate(unref(textFor)(__props.page.blocks[0].title))}</h2><p class="info-brand-lead__body" data-v-f1dd9efc>${ssrInterpolate(unref(textFor)(__props.page.blocks[0].body))}</p></div></article>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="info-brand-grid" data-v-f1dd9efc><!--[-->`);
        ssrRenderList(__props.page.blocks.slice(1), (block, index) => {
          var _a2;
          _push(`<article${ssrRenderAttr("id", (_a2 = unref(sectionLinks)[index + 1]) == null ? void 0 : _a2.id)} class="info-brand-card" data-reveal data-v-f1dd9efc><figure class="info-brand-card__media" data-v-f1dd9efc><img${ssrRenderAttr("src", block.image)}${ssrRenderAttr("alt", unref(textFor)(block.title))} data-v-f1dd9efc></figure><div class="info-brand-card__copy" data-v-f1dd9efc><p class="info-brand-card__index" data-v-f1dd9efc>${ssrInterpolate(chapterLabel(index + 1))}</p><h2 class="info-brand-card__title" data-v-f1dd9efc>${ssrInterpolate(unref(textFor)(block.title))}</h2><p class="info-brand-card__body" data-v-f1dd9efc>${ssrInterpolate(unref(textFor)(block.body))}</p></div></article>`);
        });
        _push(`<!--]--></div></div></section>`);
      } else if (unref(isStoreRoute)) {
        _push(`<div data-v-f1dd9efc>`);
        _push(ssrRenderComponent(_sfc_main$7, {
          variant: "store",
          blocks: __props.page.blocks,
          "section-links": unref(sectionLinks),
          "chapter-label": chapterLabel,
          "text-for": unref(textFor)
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(isCorporateRoute)) {
        _push(`<section class="info-features info-features--corporate-values" data-v-f1dd9efc><div class="container" data-v-f1dd9efc><div class="info-corporate-grid" data-v-f1dd9efc>`);
        if (__props.page.blocks[0]) {
          _push(`<article${ssrRenderAttr("id", (_b = unref(sectionLinks)[0]) == null ? void 0 : _b.id)} class="info-corporate-lead" data-reveal data-v-f1dd9efc><figure class="info-corporate-lead__media" data-v-f1dd9efc><img${ssrRenderAttr("src", __props.page.blocks[0].image)}${ssrRenderAttr("alt", unref(textFor)(__props.page.blocks[0].title))} data-v-f1dd9efc></figure><div class="info-corporate-lead__copy" data-v-f1dd9efc><p class="info-corporate-lead__index" data-v-f1dd9efc>${ssrInterpolate(chapterLabel(0))}</p><h2 class="info-corporate-lead__title" data-v-f1dd9efc>${ssrInterpolate(unref(textFor)(__props.page.blocks[0].title))}</h2><p class="info-corporate-lead__body" data-v-f1dd9efc>${ssrInterpolate(unref(textFor)(__props.page.blocks[0].body))}</p></div></article>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="info-corporate-stack" data-v-f1dd9efc><!--[-->`);
        ssrRenderList(__props.page.blocks.slice(1), (block, index) => {
          var _a2;
          _push(`<article${ssrRenderAttr("id", (_a2 = unref(sectionLinks)[index + 1]) == null ? void 0 : _a2.id)} class="info-corporate-card" data-reveal data-v-f1dd9efc><figure class="info-corporate-card__media" data-v-f1dd9efc><img${ssrRenderAttr("src", block.image)}${ssrRenderAttr("alt", unref(textFor)(block.title))} data-v-f1dd9efc></figure><div class="info-corporate-card__copy" data-v-f1dd9efc><p class="info-corporate-card__index" data-v-f1dd9efc>${ssrInterpolate(chapterLabel(index + 1))}</p><h2 class="info-corporate-card__title" data-v-f1dd9efc>${ssrInterpolate(unref(textFor)(block.title))}</h2><p class="info-corporate-card__body" data-v-f1dd9efc>${ssrInterpolate(unref(textFor)(block.body))}</p></div></article>`);
        });
        _push(`<!--]--></div></div></div></section>`);
      } else if (unref(isServiceRoute)) {
        _push(`<div data-v-f1dd9efc>`);
        _push(ssrRenderComponent(_sfc_main$7, {
          variant: "service",
          blocks: __props.page.blocks,
          "section-links": unref(sectionLinks),
          "chapter-label": chapterLabel,
          "text-for": unref(textFor)
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(isEnergyRoute)) {
        _push(`<div data-v-f1dd9efc>`);
        _push(ssrRenderComponent(_sfc_main$7, {
          variant: "energy",
          blocks: __props.page.blocks,
          "section-links": unref(sectionLinks),
          "chapter-label": chapterLabel,
          "text-for": unref(textFor)
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(isCareerRoute)) {
        _push(`<section class="info-features info-features--career-flow" data-v-f1dd9efc><!--[-->`);
        ssrRenderList(__props.page.blocks, (block, index) => {
          var _a2;
          _push(`<div${ssrRenderAttr("id", (_a2 = unref(sectionLinks)[index]) == null ? void 0 : _a2.id)} class="${ssrRenderClass(["info-career-row", { reverse: index % 2 === 1 }])}" data-v-f1dd9efc><div class="container info-career-row__grid" data-v-f1dd9efc><figure class="info-career-row__media" data-reveal data-v-f1dd9efc><img${ssrRenderAttr("src", block.image)}${ssrRenderAttr("alt", unref(textFor)(block.title))} data-v-f1dd9efc></figure><article class="info-career-row__copy" data-reveal data-v-f1dd9efc><p class="info-career-row__index" data-v-f1dd9efc>${ssrInterpolate(chapterLabel(index))}</p><h2 class="info-career-row__title" data-v-f1dd9efc>${ssrInterpolate(unref(textFor)(block.title))}</h2><p class="info-career-row__body" data-v-f1dd9efc>${ssrInterpolate(unref(textFor)(block.body))}</p></article></div></div>`);
        });
        _push(`<!--]--></section>`);
      } else if (unref(isDocumentRoute)) {
        _push(`<div data-v-f1dd9efc>`);
        _push(ssrRenderComponent(_sfc_main$8, {
          blocks: __props.page.blocks,
          "section-links": unref(sectionLinks),
          "chapter-label": chapterLabel,
          "text-for": unref(textFor)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<section class="info-features" data-v-f1dd9efc><!--[-->`);
        ssrRenderList(__props.page.blocks, (block, index) => {
          var _a2;
          _push(`<div${ssrRenderAttr("id", (_a2 = unref(sectionLinks)[index]) == null ? void 0 : _a2.id)} class="${ssrRenderClass(["info-feature", { reverse: index % 2 === 1 && unref(layoutMode) !== "document" }])}" data-v-f1dd9efc><div class="${ssrRenderClass(["container", "info-feature__grid"])}" data-v-f1dd9efc><div class="info-feature__media" data-reveal data-v-f1dd9efc><div class="info-feature__media-shell" data-v-f1dd9efc><img${ssrRenderAttr("src", block.image)}${ssrRenderAttr("alt", unref(textFor)(block.title))} data-v-f1dd9efc>`);
          if (unref(layoutMode) !== "document") {
            _push(`<div class="info-feature__badge" data-v-f1dd9efc>${ssrInterpolate(chapterLabel(index))}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div><article class="info-feature__copy" data-reveal data-v-f1dd9efc>`);
          if (unref(layoutMode) !== "document") {
            _push(`<p class="info-feature__kicker" data-v-f1dd9efc>${ssrInterpolate(chapterLabel(index))}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<h2 class="info-feature__title" data-v-f1dd9efc>${ssrInterpolate(unref(textFor)(block.title))}</h2><p class="info-feature__body" data-v-f1dd9efc>${ssrInterpolate(unref(textFor)(block.body))}</p></article></div></div>`);
        });
        _push(`<!--]--></section>`);
      }
      if (unref(theme).showCta && __props.page.ctaSlug && __props.page.ctaLabel) {
        _push(`<section class="section-shell info-cta-shell" data-v-f1dd9efc><div class="container" data-v-f1dd9efc><div class="info-cta" data-reveal data-v-f1dd9efc><p class="info-cta__kicker" data-v-f1dd9efc>${ssrInterpolate(unref(textFor)(unref(theme).ctaTitle))}</p><h2 class="info-cta__headline" data-v-f1dd9efc>${ssrInterpolate(unref(textFor)(unref(theme).ctaHeadline))}</h2><p class="info-cta__copy" data-v-f1dd9efc>${ssrInterpolate(unref(textFor)(unref(theme).ctaBody))}</p>`);
        if (__props.page.ctaSlug && __props.page.ctaLabel) {
          _push(`<div class="button-row" data-v-f1dd9efc>`);
          _push(ssrRenderComponent(_sfc_main$1$1, {
            to: unref(buildPath)(__props.page.ctaSlug),
            variant: "primary"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(textFor)(__props.page.ctaLabel))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(textFor)(__props.page.ctaLabel)), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/InfoPage.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const InfoPage = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-f1dd9efc"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "LegalPage",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    const { textFor } = useSiteContent();
    useSectionReveal({});
    const activeSection = ref("legal-1");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["legal-page", `legal-page--${__props.page.slug.replace(".html", "")}`]
      }, _attrs))} data-v-057d0353>`);
      _push(ssrRenderComponent(_sfc_main$9, {
        eyebrow: unref(textFor)(__props.page.eyebrow),
        title: unref(textFor)(__props.page.title),
        summary: unref(textFor)(__props.page.summary),
        image: "/static/assets/world-fec50d02.jpg",
        align: "start",
        compact: ""
      }, null, _parent));
      _push(`<section class="legal-anchor-bar" data-v-057d0353><div class="container legal-anchor-bar__inner" data-v-057d0353><!--[-->`);
      ssrRenderList(__props.page.sections, (section, index) => {
        _push(`<a${ssrRenderAttr("href", `#legal-${index + 1}`)} class="${ssrRenderClass(["legal-anchor", { active: unref(activeSection) === `legal-${index + 1}` }])}" data-v-057d0353>${ssrInterpolate(unref(textFor)(section.title))}</a>`);
      });
      _push(`<!--]--></div></section><section class="section-shell legal-page-shell" data-v-057d0353><div class="container legal-stack" data-v-057d0353><!--[-->`);
      ssrRenderList(__props.page.sections, (section, index) => {
        _push(`<article${ssrRenderAttr("id", `legal-${index + 1}`)} class="legal-card" data-reveal data-v-057d0353><div class="legal-card__index" data-v-057d0353>0${ssrInterpolate(index + 1)}</div><div class="legal-card__body" data-v-057d0353><h2 data-v-057d0353>${ssrInterpolate(unref(textFor)(section.title))}</h2><!--[-->`);
        ssrRenderList(section.paragraphs, (paragraph) => {
          _push(`<p data-v-057d0353>${ssrInterpolate(unref(textFor)(paragraph))}</p>`);
        });
        _push(`<!--]--></div></article>`);
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/LegalPage.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const LegalPage = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-057d0353"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "LegacyBusinessPage",
  __ssrInlineRender: true,
  props: {
    page: {},
    prefix: {},
    rootClass: {},
    scopeAttr: {},
    textFor: { type: Function },
    sectionTitles: {}
  },
  setup(__props) {
    const props = __props;
    const scopeBind = computed(() => ({ [`data-v-${props.scopeAttr}`]: "" }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: __props.rootClass }, unref(scopeBind), _attrs))}><div${ssrRenderAttrs(mergeProps({
        class: `${__props.prefix}-header`
      }, unref(scopeBind)))}><h3${ssrRenderAttrs(unref(scopeBind))}>${ssrInterpolate(__props.textFor(__props.page.title))}</h3><p${ssrRenderAttrs(unref(scopeBind))}>${ssrInterpolate(__props.textFor(__props.page.summary))}</p></div><section${ssrRenderAttrs(mergeProps({
        class: `${__props.prefix}-storestandard`
      }, unref(scopeBind)))}><h4${ssrRenderAttrs(mergeProps({
        class: `${__props.prefix}-storestandard__title`
      }, unref(scopeBind)))}>${ssrInterpolate(__props.sectionTitles.standard)}</h4><div${ssrRenderAttrs(mergeProps({
        class: `${__props.prefix}-storestandard__content`
      }, unref(scopeBind)))}><table${ssrRenderAttrs(mergeProps({
        class: `${__props.prefix}-storestandard__table`
      }, unref(scopeBind)))}><thead><tr><th${ssrRenderAttrs(unref(scopeBind))}>${ssrInterpolate(__props.sectionTitles.topic)}</th><th${ssrRenderAttrs(unref(scopeBind))}>${ssrInterpolate(__props.sectionTitles.detail)}</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(__props.page.blocks, (block, index) => {
        _push(`<tr><td${ssrRenderAttrs(mergeProps({ ref_for: true }, unref(scopeBind)))}>${ssrInterpolate(__props.textFor(block.title))}</td><td${ssrRenderAttrs(mergeProps({ ref_for: true }, unref(scopeBind)))}>${ssrInterpolate(__props.textFor(block.body))}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></section><section${ssrRenderAttrs(mergeProps({
        class: `${__props.prefix}-applyprocedure`
      }, unref(scopeBind)))}><h4${ssrRenderAttrs(mergeProps({
        class: `${__props.prefix}-applyprocedure__title`
      }, unref(scopeBind)))}>${ssrInterpolate(__props.sectionTitles.procedure)}</h4><div${ssrRenderAttrs(mergeProps({
        class: `${__props.prefix}-applyprocedure__list`
      }, unref(scopeBind)))}><!--[-->`);
      ssrRenderList(__props.page.blocks, (block, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: `${__props.page.slug}-proc-${index}`,
          class: `${__props.prefix}-applyprocedure__item`
        }, { ref_for: true }, unref(scopeBind)))}><div${ssrRenderAttrs(mergeProps({ class: "left-container left-container-w768" }, { ref_for: true }, unref(scopeBind)))}><img${ssrRenderAttrs(mergeProps({
          class: `${__props.prefix}-applyprocedure__item-icon`
        }, { ref_for: true }, unref(scopeBind), {
          src: block.image,
          alt: __props.textFor(block.title)
        }))}><div><p${ssrRenderAttrs(mergeProps({
          class: `${__props.prefix}-applyprocedure__item-step`
        }, { ref_for: true }, unref(scopeBind)))}> STEP ${ssrInterpolate(`${index + 1}`.padStart(2, "0"))}</p><p${ssrRenderAttrs(mergeProps({
          class: `${__props.prefix}-applyprocedure__item-name`
        }, { ref_for: true }, unref(scopeBind)))}>${ssrInterpolate(__props.textFor(block.title))}</p></div></div></div>`);
      });
      _push(`<!--]--></div></section><section${ssrRenderAttrs(mergeProps({
        class: `${__props.prefix}-contactway`
      }, unref(scopeBind)))}><h4${ssrRenderAttrs(mergeProps({
        class: `${__props.prefix}-contactway__title`
      }, unref(scopeBind)))}>${ssrInterpolate(__props.sectionTitles.contact)}</h4><ul${ssrRenderAttrs(mergeProps({
        class: `${__props.prefix}-contactway__list`
      }, unref(scopeBind)))}><li${ssrRenderAttrs(mergeProps({
        class: `${__props.prefix}-contactway__item`
      }, unref(scopeBind)))}>${ssrInterpolate(__props.textFor(__props.page.title))} - support@voyah.com.cn </li><li${ssrRenderAttrs(mergeProps({
        class: `${__props.prefix}-contactway__item`
      }, unref(scopeBind)))}> Hotline: 400-000-0000 </li></ul></section></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/legacy/LegacyBusinessPage.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ModelChapterNav",
  __ssrInlineRender: true,
  props: {
    sections: {},
    variant: {}
  },
  setup(__props) {
    var _a, _b;
    const props = __props;
    const activeSection = ref((_b = (_a = props.sections[0]) == null ? void 0 : _a.id) != null ? _b : "");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: ["model-chapter-nav", `model-chapter-nav--${__props.variant}`]
      }, _attrs))} data-v-7e06422c><div class="container model-chapter-nav-inner" data-v-7e06422c><!--[-->`);
      ssrRenderList(__props.sections, (section) => {
        _push(`<a${ssrRenderAttr("href", `#${section.id}`)} class="${ssrRenderClass(["model-chapter-link", { active: unref(activeSection) === section.id }])}" data-v-7e06422c>${ssrInterpolate(section.label)}</a>`);
      });
      _push(`<!--]--></div></nav>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/model/ModelChapterNav.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ModelChapterNav = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-7e06422c"]]);
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = (() => {
  console.error(intervalError);
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ModelMediaSection",
  __ssrInlineRender: true,
  props: {
    index: {},
    modelSlug: {},
    section: {}
  },
  setup(__props) {
    const props = __props;
    const activeSlide = ref(0);
    let timer = null;
    const hasMounted = ref(false);
    const carouselSlides = computed(() => {
      var _a, _b, _c;
      if ((_a = props.section.slides) == null ? void 0 : _a.length) {
        return props.section.slides;
      }
      const images = props.section.images.length ? props.section.images : [(_b = props.section.image) != null ? _b : ""];
      const baseTitle = props.section.title;
      const baseSummary = (_c = props.section.summary) != null ? _c : "";
      return images.map((image, slideIndex) => {
        var _a2, _b2, _c2, _d, _e, _f, _g;
        return {
          image,
          video: slideIndex === 0 ? (_a2 = props.section.videos) == null ? void 0 : _a2[0] : void 0,
          title: (_d = (_c2 = (_b2 = props.section.details) == null ? void 0 : _b2[slideIndex]) == null ? void 0 : _c2.title) != null ? _d : baseTitle,
          summary: (_g = (_f = (_e = props.section.details) == null ? void 0 : _e[slideIndex]) == null ? void 0 : _f.summary) != null ? _g : baseSummary
        };
      });
    });
    const details = computed(() => {
      var _a;
      if ((_a = props.section.details) == null ? void 0 : _a.length) {
        return props.section.details;
      }
      return carouselSlides.value.slice(0, 3).map((slide) => ({
        title: slide.title,
        summary: slide.summary
      }));
    });
    const activeCarouselSlide = computed(() => {
      var _a;
      return (_a = carouselSlides.value[activeSlide.value]) != null ? _a : carouselSlides.value[0];
    });
    const bannerStyle = computed(() => {
      var _a, _b;
      return {
        backgroundImage: `linear-gradient(180deg, rgba(8, 12, 16, 0.12), rgba(8, 12, 16, 0.72)), url(${(_b = (_a = props.section.image) != null ? _a : props.section.images[0]) != null ? _b : ""})`
      };
    });
    const syncCarouselTimer = () => {
      activeSlide.value = 0;
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
      if (!hasMounted.value || carouselSlides.value.length <= 1) {
        return;
      }
      timer = setInterval();
    };
    watch(
      () => carouselSlides.value.length,
      () => {
        syncCarouselTimer();
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: __props.section.id,
        class: [
          "model-media-section",
          `model-media-section--${__props.section.kind}`,
          `model-media-section--${__props.modelSlug.replace(".html", "")}`,
          { reverse: __props.index % 2 === 1 }
        ]
      }, _attrs))} data-v-0d07d4de>`);
      if (__props.section.kind === "banner") {
        _push(`<div class="model-banner" style="${ssrRenderStyle(unref(bannerStyle))}" data-v-0d07d4de><div class="model-banner-overlay" data-v-0d07d4de></div><div class="container model-banner-inner" data-reveal data-v-0d07d4de><h2 class="model-banner-title" data-v-0d07d4de>${ssrInterpolate(__props.section.title)}</h2>`);
        if (__props.section.summary) {
          _push(`<p class="model-banner-subtitle" data-v-0d07d4de>${ssrInterpolate(__props.section.summary)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<div class="container model-media-content" data-v-0d07d4de><div class="model-media-head" data-reveal data-v-0d07d4de>`);
        if (__props.section.kicker) {
          _push(`<p class="model-media-kicker" data-v-0d07d4de>${ssrInterpolate(__props.section.kicker)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h2 class="model-media-title" data-v-0d07d4de>${ssrInterpolate(__props.section.title)}</h2>`);
        if (__props.section.summary) {
          _push(`<p class="model-media-summary" data-v-0d07d4de>${ssrInterpolate(__props.section.summary)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (__props.section.kind === "carousel") {
          _push(`<div class="model-carousel-wrap" data-reveal data-v-0d07d4de><div class="model-carousel-stage" data-v-0d07d4de>`);
          if (unref(activeCarouselSlide)) {
            _push(`<article class="model-carousel-card active model-carousel-card--featured" data-v-0d07d4de><div class="model-carousel-media" data-v-0d07d4de>`);
            if (unref(activeCarouselSlide).video) {
              _push(`<video${ssrRenderAttr("poster", unref(activeCarouselSlide).image)} autoplay muted loop playsinline preload="metadata" data-v-0d07d4de><source${ssrRenderAttr("src", unref(activeCarouselSlide).video)} type="video/mp4" data-v-0d07d4de></video>`);
            } else {
              _push(`<img${ssrRenderAttr("src", unref(activeCarouselSlide).image)}${ssrRenderAttr("alt", unref(activeCarouselSlide).title)} draggable="false" data-v-0d07d4de>`);
            }
            _push(`</div><div class="model-carousel-copy" data-v-0d07d4de><p class="model-carousel-copy-title" data-v-0d07d4de>${ssrInterpolate(unref(activeCarouselSlide).title)}</p><p class="model-carousel-copy-text" data-v-0d07d4de>${ssrInterpolate(unref(activeCarouselSlide).summary)}</p></div></article>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="model-carousel-rail" data-v-0d07d4de><!--[-->`);
          ssrRenderList(unref(carouselSlides), (slide, slideIndex) => {
            _push(`<button type="button" class="${ssrRenderClass(["model-carousel-card", "model-carousel-card--rail", { active: unref(activeSlide) === slideIndex }])}" data-v-0d07d4de><div class="model-carousel-rail-media" data-v-0d07d4de><img${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", slide.title)} draggable="false" data-v-0d07d4de></div><div class="model-carousel-rail-copy" data-v-0d07d4de><p class="model-carousel-rail-title" data-v-0d07d4de>${ssrInterpolate(slide.title)}</p><p class="model-carousel-rail-text" data-v-0d07d4de>${ssrInterpolate(slide.summary)}</p></div></button>`);
          });
          _push(`<!--]--></div></div><div class="model-carousel-pagination" aria-hidden="true" data-v-0d07d4de><!--[-->`);
          ssrRenderList(unref(carouselSlides), (slide, slideIndex) => {
            _push(`<button type="button" class="${ssrRenderClass(["model-carousel-bullet", { active: unref(activeSlide) === slideIndex }])}" data-v-0d07d4de></button>`);
          });
          _push(`<!--]--></div><div class="model-carousel-drawer" data-v-0d07d4de><div class="model-carousel-list" data-v-0d07d4de><!--[-->`);
          ssrRenderList(unref(carouselSlides), (slide, slideIndex) => {
            _push(`<button type="button" class="${ssrRenderClass(["model-carousel-item", { active: unref(activeSlide) === slideIndex }])}" data-v-0d07d4de><p class="model-carousel-item-title" data-v-0d07d4de>${ssrInterpolate(slide.title)}</p></button>`);
          });
          _push(`<!--]--></div><p class="model-carousel-drawer-text" data-v-0d07d4de>${ssrInterpolate((_a = unref(carouselSlides)[unref(activeSlide)]) == null ? void 0 : _a.summary)}</p></div></div>`);
        } else {
          _push(`<div class="model-image-block" data-reveal data-v-0d07d4de><div class="model-image-frame" data-v-0d07d4de>`);
          if ((_b = __props.section.videos) == null ? void 0 : _b.length) {
            _push(`<video${ssrRenderAttr("poster", (_d = (_c = __props.section.image) != null ? _c : __props.section.images[0]) != null ? _d : "")} autoplay muted loop playsinline preload="metadata" data-v-0d07d4de><source${ssrRenderAttr("src", __props.section.videos[0])} type="video/mp4" data-v-0d07d4de></video>`);
          } else {
            _push(`<img${ssrRenderAttr("src", (_f = (_e = __props.section.image) != null ? _e : __props.section.images[0]) != null ? _f : "")}${ssrRenderAttr("alt", __props.section.title)} draggable="false" data-v-0d07d4de>`);
          }
          _push(`</div><div class="model-detail-grid" data-v-0d07d4de><!--[-->`);
          ssrRenderList(unref(details), (detail, detailIndex) => {
            _push(`<article class="model-detail-card" data-v-0d07d4de><p class="model-detail-title" data-v-0d07d4de>${ssrInterpolate(detail.title)}</p><p class="model-detail-summary" data-v-0d07d4de>${ssrInterpolate(detail.summary)}</p></article>`);
          });
          _push(`<!--]--></div></div>`);
        }
        _push(`</div>`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/model/ModelMediaSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ModelMediaSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-0d07d4de"]]);
const carGallery = (folder, assets) => assets.map((asset) => `/voyah-resources/images/car/${folder}/${asset}`);
const cp1252CodepointToByteSafe = /* @__PURE__ */ new Map([
  [8364, 128],
  [8218, 130],
  [402, 131],
  [8222, 132],
  [8230, 133],
  [8224, 134],
  [8225, 135],
  [710, 136],
  [8240, 137],
  [352, 138],
  [8249, 139],
  [338, 140],
  [381, 142],
  [8216, 145],
  [8217, 146],
  [8220, 147],
  [8221, 148],
  [8226, 149],
  [8211, 150],
  [8212, 151],
  [732, 152],
  [8482, 153],
  [353, 154],
  [8250, 155],
  [339, 156],
  [382, 158],
  [376, 159]
]);
const normalizeMojibakeSafe = (value) => {
  if (!/[\u00c3\u00c2\u00d8\u00d9\u00e2]/.test(value)) {
    return value;
  }
  const bytes = [];
  for (const char of value) {
    const code = char.charCodeAt(0);
    if (code <= 255) {
      bytes.push(code);
      continue;
    }
    const mapped = cp1252CodepointToByteSafe.get(code);
    if (mapped !== void 0) {
      bytes.push(mapped);
      continue;
    }
    return value;
  }
  try {
    return new TextDecoder("utf-8").decode(new Uint8Array(bytes));
  } catch {
    return value;
  }
};
const t = (en, fr, ar) => ({
  en: normalizeMojibakeSafe(en),
  fr: normalizeMojibakeSafe(fr),
  ar: normalizeMojibakeSafe(ar)
});
const modelGalleryMap = {
  "passion-L.html": carGallery("passion-L", [
    "1920/sc_1.jpg",
    "1920/sc_2.jpg",
    "1920/sc_3.jpg",
    "1920/sc_4.jpg",
    "1920/sc_5.jpg",
    "1920/sc_7.jpg",
    "1920/sc_8.jpg",
    "1920/sc_9.jpg"
  ]),
  "passion.html": carGallery("passion", [
    "1920/fl01.jpg",
    "1920/fl02.jpg",
    "1920/fl03.jpg",
    "1920/fl04.jpg",
    "1920/fl05.jpg",
    "1920/fl06.jpg",
    "1920/fl10.jpg",
    "1920/fl14.jpg"
  ]),
  "titan.html": carGallery("titan", [
    "1920/sc_1.jpg",
    "1920/sc_2.jpg",
    "1920/sc_3.jpg",
    "1920/sc_4_1.jpg",
    "1920/sc_6_1.jpg",
    "1920/sc_8_1.jpg",
    "1920/sc_11.jpg",
    "1920/sc_20.jpg"
  ]),
  "titan_blackedition.html": carGallery("titan_blackedition", [
    "1920/sc_1.jpg",
    "1920/sc_2.jpg",
    "1920/sc_3_1.jpg",
    "1920/sc_8.jpg",
    "1920/sc_9_1.jpg",
    "1920/sc_15.jpg",
    "1920/sc_20.jpg",
    "1920/sc_23_1.jpg"
  ]),
  "titan_X8.html": carGallery("titan_X8", ["1920/sc_1.jpg"]),
  "free+.html": carGallery("free+", [
    "img_01_1920.png",
    "img_02_01.png",
    "img_03_1920.png",
    "img_05_01.png",
    "img_06_01.png",
    "img_08.png",
    "img_11_01.png",
    "img_25_1920.png"
  ]),
  "free.html": carGallery("free", [
    "bg-free-h97D-1.jpg",
    "bg_free_pc4_0002_1920.jpg",
    "bg_free_pc15_0001_1920.jpg",
    "bg_free_pc20_0001_1920.jpg",
    "bg_free_pc21_0001.jpg",
    "bg_free_pc23_0001.jpg",
    "bg_free_pc28_0001_1920.jpg",
    "bg_free_pc29_0001.jpg"
  ]),
  "newCourage.html": carGallery("newCourage", [
    "1920/sc_1.jpg",
    "1920/sc_3.jpg",
    "1920/sc_4.jpg",
    "1920/sc_6.jpg",
    "1920/sc_8.jpg",
    "1920/sc_11.jpg",
    "1920/sc_14.jpg",
    "1920/sc_20.jpg"
  ]),
  "courage.html": carGallery("courage", [
    "1920/h37_pc01_0001.jpg",
    "1920/h37_pc02_0001.jpg",
    "1920/h37_pc03_0001.jpg",
    "1920/h37_pc04_0001.jpg",
    "1920/h37_pc06_0001.jpg",
    "1920/h37_pc10_0001.jpg",
    "1920/h37_pc14_0001.jpg",
    "1920/h37_pc17_0001.jpg"
  ]),
  "newDreamer26.html": carGallery("newDreamer26", [
    "kv_1920.jpg",
    "bg_02_1920.jpg",
    "sc_3.jpg",
    "bg_11_1920.jpg",
    "sc_5.jpg",
    "bg_16_1920.jpg",
    "bg_22_1920.jpg",
    "sc_5-2.jpg"
  ]),
  "dreamer-champion.html": carGallery("dreamer-champion", [
    "kv_1920.jpg",
    "bg_2_n_1920.jpg",
    "bg_6_n_1920.jpg",
    "bg_11_n_1920.jpg",
    "bg_13_n_1920.jpg",
    "bg_15_n_1920.jpg",
    "bg_18_n_1920.jpg",
    "bg_21_n_1920.jpg"
  ]),
  "newDreamer.html": carGallery("newDreamer", [
    "bg_2_n_1920.jpg",
    "h56c_pc03_0001.jpg",
    "h56c_pc03_0002.jpg",
    "h56c_pc08_banner01.jpg",
    "h56c_pc08_banner02.jpg",
    "bg_7_n_1920.jpg",
    "bg_swiper_3_1_n.jpg",
    "bg_4_n.jpg"
  ]),
  "dreamriver.html": carGallery("dreamriver", [
    "kv_1920.png",
    "sc_2.png",
    "sc_4.png",
    "sc_5.png",
    "sc_6.png",
    "sc_7.png",
    "sc_8.png"
  ]),
  "dreamer.html": carGallery("dreamer", [
    "bg_2_1920.jpg",
    "bg_6_1920.jpg",
    "bg_13_1920.jpg",
    "bg_17_1920.jpg",
    "bg_21_1920.jpg",
    "bg_24_1920.jpg",
    "bg_swiper_4_1.jpg",
    "bg_swiper_7_1.jpg"
  ])
};
const modelStorySectionMap = {
  "titan.html": [
    {
      id: "chapter-1",
      title: t("Flagship luxury", "Luxe phare", "\xD8\xA7\xD9\u201E\xD9\x81\xD8\xAE\xD8\xA7\xD9\u2026\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB1\xD8\xA7\xD8\xA6\xD8\xAF\xD8\xA9"),
      summary: t(
        "Titan builds its flagship identity with a full-size six-seat stance, ceremonial proportions, and a lounge-like cabin crafted for premium family travel.",
        "Titan construit son identit\xC3\xA9 phare avec une posture six places grand format, des proportions c\xC3\xA9r\xC3\xA9monielles et un habitacle fa\xC3\xA7on salon con\xC3\xA7u pour les voyages familiaux premium.",
        "\xD8\xAA\xD8\xA8\xD9\u2020\xD9\u0160 Titan \xD9\u2021\xD9\u02C6\xD9\u0160\xD8\xAA\xD9\u2021\xD8\xA7 \xD8\xA7\xD9\u201E\xD8\xB1\xD8\xA7\xD8\xA6\xD8\xAF\xD8\xA9 \xD9\u2026\xD9\u2020 \xD8\xAE\xD9\u201E\xD8\xA7\xD9\u201E \xD9\u2021\xD9\u0160\xD8\xA6\xD8\xA9 \xD9\u0192\xD8\xA8\xD9\u0160\xD8\xB1\xD8\xA9 \xD8\xA8\xD8\xB3\xD8\xAA\xD8\xA9 \xD9\u2026\xD9\u201A\xD8\xA7\xD8\xB9\xD8\xAF \xD9\u02C6\xD8\xAA\xD9\u2020\xD8\xA7\xD8\xB3\xD8\xA8\xD8\xA7\xD8\xAA \xD8\xA7\xD8\xAD\xD8\xAA\xD9\x81\xD8\xA7\xD9\u201E\xD9\u0160\xD8\xA9 \xD9\u02C6\xD9\u2026\xD9\u201A\xD8\xB5\xD9\u02C6\xD8\xB1\xD8\xA9 \xD8\xA8\xD8\xB7\xD8\xA7\xD8\xA8\xD8\xB9 \xD8\xA7\xD9\u201E\xD8\xB5\xD8\xA7\xD9\u201E\xD9\u02C6\xD9\u2020 \xD8\xB5\xD9\u2026\xD9\u2026\xD8\xAA \xD9\u201E\xD8\xB1\xD8\xAD\xD9\u201E\xD8\xA7\xD8\xAA \xD8\xA7\xD9\u201E\xD8\xB9\xD8\xA7\xD8\xA6\xD9\u201E\xD8\xA9 \xD8\xA7\xD9\u201E\xD9\x81\xD8\xA7\xD8\xAE\xD8\xB1\xD8\xA9."
      ),
      images: carGallery("titan", ["1920/sc_2.jpg", "1920/sc_6_1.jpg", "1920/sc_18.jpg", "1920/sc_11.jpg"])
    },
    {
      id: "chapter-2",
      title: t("Flagship intelligence", "Intelligence phare", "\xD8\xA7\xD9\u201E\xD8\xB0\xD9\u0192\xD8\xA7\xD8\xA1 \xD8\xA7\xD9\u201E\xD8\xB1\xD8\xA7\xD8\xA6\xD8\xAF"),
      summary: t(
        "A modern digital cockpit, assisted-driving confidence, and premium in-cabin audio create an intelligent flagship experience from first entry to long-distance cruising.",
        "Un cockpit num\xC3\xA9rique moderne, une conduite assist\xC3\xA9e rassurante et une acoustique embarqu\xC3\xA9e premium composent une exp\xC3\xA9rience phare intelligente du premier contact jusqu\xE2\u20AC\u2122aux longues distances.",
        "\xD8\xAA\xD9\u02C6\xD9\x81\xD8\xB1 \xD8\xA7\xD9\u201E\xD9\u2026\xD9\u201A\xD8\xB5\xD9\u02C6\xD8\xB1\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB1\xD9\u201A\xD9\u2026\xD9\u0160\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xAD\xD8\xAF\xD9\u0160\xD8\xAB\xD8\xA9 \xD9\u02C6\xD8\xA7\xD9\u201E\xD8\xAB\xD9\u201A\xD8\xA9 \xD9\x81\xD9\u0160 \xD8\xA7\xD9\u201E\xD9\u201A\xD9\u0160\xD8\xA7\xD8\xAF\xD8\xA9 \xD8\xA7\xD9\u201E\xD9\u2026\xD8\xB3\xD8\xA7\xD8\xB9\xD8\xAF\xD8\xA9 \xD9\u02C6\xD8\xA7\xD9\u201E\xD8\xB5\xD9\u02C6\xD8\xAA \xD8\xA7\xD9\u201E\xD9\x81\xD8\xA7\xD8\xAE\xD8\xB1 \xD8\xAF\xD8\xA7\xD8\xAE\xD9\u201E \xD8\xA7\xD9\u201E\xD8\xB3\xD9\u0160\xD8\xA7\xD8\xB1\xD8\xA9 \xD8\xAA\xD8\xAC\xD8\xB1\xD8\xA8\xD8\xA9 \xD8\xB1\xD8\xA7\xD8\xA6\xD8\xAF\xD8\xA9 \xD8\xB0\xD9\u0192\xD9\u0160\xD8\xA9 \xD9\u2026\xD9\u2020 \xD8\xA3\xD9\u02C6\xD9\u201E \xD8\xAF\xD8\xAE\xD9\u02C6\xD9\u201E \xD8\xAD\xD8\xAA\xD9\u2030 \xD8\xA7\xD9\u201E\xD8\xB1\xD8\xAD\xD9\u201E\xD8\xA7\xD8\xAA \xD8\xA7\xD9\u201E\xD8\xB7\xD9\u02C6\xD9\u0160\xD9\u201E\xD8\xA9."
      ),
      images: carGallery("titan", ["1920/sc_20.jpg", "1920/sc_21.jpg", "1920/sc_22.jpg", "1920/sc_23.jpg"]),
      videos: ["/voyah-resources/images/car/titan/video_01.mp4"]
    },
    {
      id: "chapter-3",
      title: t("Flagship performance", "Performance phare", "\xD8\xA7\xD9\u201E\xD8\xA3\xD8\xAF\xD8\xA7\xD8\xA1 \xD8\xA7\xD9\u201E\xD8\xB1\xD8\xA7\xD8\xA6\xD8\xAF"),
      summary: t(
        "Titan combines composed chassis tuning, strong all-road capability, and long-range confidence to deliver a large SUV that stays calm, stable, and powerful.",
        "Titan associe une mise au point de ch\xC3\xA2ssis ma\xC3\xAEtris\xC3\xA9e, de vraies capacit\xC3\xA9s tous chemins et une grande assurance d\xE2\u20AC\u2122autonomie pour cr\xC3\xA9er un grand SUV \xC3\xA0 la fois calme, stable et puissant.",
        "\xD8\xAA\xD8\xAC\xD9\u2026\xD8\xB9 Titan \xD8\xA8\xD9\u0160\xD9\u2020 \xD8\xB6\xD8\xA8\xD8\xB7 \xD9\u2021\xD9\u0160\xD9\u0192\xD9\u201E \xD9\u2026\xD8\xAA\xD8\xB2\xD9\u2020 \xD9\u02C6\xD9\u201A\xD8\xAF\xD8\xB1\xD8\xA7\xD8\xAA \xD9\u201A\xD9\u02C6\xD9\u0160\xD8\xA9 \xD8\xB9\xD9\u201E\xD9\u2030 \xD9\u2026\xD8\xAE\xD8\xAA\xD9\u201E\xD9\x81 \xD8\xA7\xD9\u201E\xD8\xB7\xD8\xB1\xD9\u201A \xD9\u02C6\xD8\xAB\xD9\u201A\xD8\xA9 \xD9\u0192\xD8\xA8\xD9\u0160\xD8\xB1\xD8\xA9 \xD9\x81\xD9\u0160 \xD8\xA7\xD9\u201E\xD9\u2026\xD8\xAF\xD9\u2030 \xD9\u201E\xD8\xAA\xD9\u201A\xD8\xAF\xD9\u2026 SUV \xD9\u0192\xD8\xA8\xD9\u0160\xD8\xB1\xD8\xA9 \xD8\xAA\xD8\xA8\xD9\u201A\xD9\u2030 \xD9\u2021\xD8\xA7\xD8\xAF\xD8\xA6\xD8\xA9 \xD9\u02C6\xD8\xAB\xD8\xA7\xD8\xA8\xD8\xAA\xD8\xA9 \xD9\u02C6\xD9\u201A\xD9\u02C6\xD9\u0160\xD8\xA9."
      ),
      images: carGallery("titan", ["1920/sc_25.jpg", "1920/sc_28.jpg", "1920/sc_30.jpg", "1920/sc_31.jpg"]),
      videos: ["/voyah-resources/images/car/titan/video_04.mp4"]
    },
    {
      id: "chapter-4",
      title: t("Flagship safety", "S\xC3\xA9curit\xC3\xA9 phare", "\xD8\xA7\xD9\u201E\xD8\xB3\xD9\u201E\xD8\xA7\xD9\u2026\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB1\xD8\xA7\xD8\xA6\xD8\xAF\xD8\xA9"),
      summary: t(
        "A reinforced body structure, layered battery protection, and full-cabin occupant safety complete Titan with the calm assurance expected from a flagship family SUV.",
        "Une structure renforc\xC3\xA9e, une protection de batterie \xC3\xA0 plusieurs niveaux et une s\xC3\xA9curit\xC3\xA9 compl\xC3\xA8te des occupants finalisent Titan avec l\xE2\u20AC\u2122assurance sereine attendue d\xE2\u20AC\u2122un SUV familial phare.",
        "\xD9\u0160\xD9\u0192\xD9\u2026\xD9\u201E \xD8\xA7\xD9\u201E\xD9\u2021\xD9\u0160\xD9\u0192\xD9\u201E \xD8\xA7\xD9\u201E\xD9\u2026\xD8\xB9\xD8\xB2\xD8\xB2 \xD9\u02C6\xD8\xA7\xD9\u201E\xD8\xAD\xD9\u2026\xD8\xA7\xD9\u0160\xD8\xA9 \xD9\u2026\xD8\xAA\xD8\xB9\xD8\xAF\xD8\xAF\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB7\xD8\xA8\xD9\u201A\xD8\xA7\xD8\xAA \xD9\u201E\xD9\u201E\xD8\xA8\xD8\xB7\xD8\xA7\xD8\xB1\xD9\u0160\xD8\xA9 \xD9\u02C6\xD8\xB3\xD9\u201E\xD8\xA7\xD9\u2026\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB1\xD9\u0192\xD8\xA7\xD8\xA8 \xD8\xA7\xD9\u201E\xD8\xB4\xD8\xA7\xD9\u2026\xD9\u201E\xD8\xA9 \xD8\xB4\xD8\xAE\xD8\xB5\xD9\u0160\xD8\xA9 Titan \xD8\xA8\xD8\xAB\xD9\u201A\xD8\xA9 \xD9\u2021\xD8\xA7\xD8\xAF\xD8\xA6\xD8\xA9 \xD8\xAA\xD9\u201E\xD9\u0160\xD9\u201A \xD8\xA8\xD8\xB3\xD9\u0160\xD8\xA7\xD8\xB1\xD8\xA9 SUV \xD8\xB9\xD8\xA7\xD8\xA6\xD9\u201E\xD9\u0160\xD8\xA9 \xD8\xB1\xD8\xA7\xD8\xA6\xD8\xAF\xD8\xA9."
      ),
      images: carGallery("titan", ["1920/sc_32.jpg", "1920/sc_33_1.jpg", "1920/sc_34_1.jpg", "1920/sc_35_1.jpg"])
    }
  ],
  "newDreamer26.html": [
    {
      id: "chapter-1",
      title: t("Flagship luxury", "Luxe phare", "\xD8\xA7\xD9\u201E\xD9\x81\xD8\xAE\xD8\xA7\xD9\u2026\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB1\xD8\xA7\xD8\xA6\xD8\xAF\xD8\xA9"),
      summary: t(
        "Dreamer 26 opens with a ceremonial MPV presence, a grand family cabin, and second-row luxury that extends a premium hospitality experience.",
        "Dreamer 26 s\xE2\u20AC\u2122ouvre sur une pr\xC3\xA9sence de MPV c\xC3\xA9r\xC3\xA9monielle, un grand habitacle familial et un luxe de deuxi\xC3\xA8me rang qui prolonge son hospitalit\xC3\xA9 premium.",
        "\xD8\xAA\xD8\xA8\xD8\xAF\xD8\xA3 Dreamer 26 \xD8\xA8\xD8\xAD\xD8\xB6\xD9\u02C6\xD8\xB1 MPV \xD8\xA7\xD8\xAD\xD8\xAA\xD9\x81\xD8\xA7\xD9\u201E\xD9\u0160 \xD9\u02C6\xD9\u2026\xD9\u201A\xD8\xB5\xD9\u02C6\xD8\xB1\xD8\xA9 \xD8\xB9\xD8\xA7\xD8\xA6\xD9\u201E\xD9\u0160\xD8\xA9 \xD8\xB1\xD8\xAD\xD8\xA8\xD8\xA9 \xD9\u02C6\xD9\x81\xD8\xAE\xD8\xA7\xD9\u2026\xD8\xA9 \xD9\x81\xD9\u0160 \xD8\xA7\xD9\u201E\xD8\xB5\xD9\x81 \xD8\xA7\xD9\u201E\xD8\xAB\xD8\xA7\xD9\u2020\xD9\u0160 \xD8\xAA\xD8\xB9\xD9\u0192\xD8\xB3 \xD8\xA3\xD8\xB3\xD9\u201E\xD9\u02C6\xD8\xA8 \xD8\xA7\xD9\u201E\xD8\xB6\xD9\u0160\xD8\xA7\xD9\x81\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB1\xD8\xA7\xD9\u201A\xD9\u0160\xD8\xA9."
      ),
      images: carGallery("newDreamer26", ["bg_02_1920.jpg", "sc_3.jpg", "sc_8.jpg", "sc_9.jpg"])
    },
    {
      id: "chapter-2",
      title: t("Flagship performance", "Performance phare", "\xD8\xA7\xD9\u201E\xD8\xA3\xD8\xAF\xD8\xA7\xD8\xA1 \xD8\xA7\xD9\u201E\xD8\xB1\xD8\xA7\xD8\xA6\xD8\xAF"),
      summary: t(
        "Super charging, long combined range, and a comfort-first intelligent chassis give Dreamer 26 the effortless long-distance confidence of a premium executive MPV.",
        "La recharge ultra-rapide, la grande autonomie combin\xC3\xA9e et un ch\xC3\xA2ssis intelligent tourn\xC3\xA9 vers le confort donnent \xC3\xA0 Dreamer 26 l\xE2\u20AC\u2122aisance longue distance d\xE2\u20AC\u2122un MPV ex\xC3\xA9cutif premium.",
        "\xD9\u0160\xD9\u02C6\xD9\x81\xD8\xB1 \xD8\xA7\xD9\u201E\xD8\xB4\xD8\xAD\xD9\u2020 \xD8\xA7\xD9\u201E\xD9\x81\xD8\xA7\xD8\xA6\xD9\u201A \xD9\u02C6\xD8\xA7\xD9\u201E\xD9\u2026\xD8\xAF\xD9\u2030 \xD8\xA7\xD9\u201E\xD9\u2026\xD8\xAF\xD9\u2026\xD8\xAC \xD8\xA7\xD9\u201E\xD8\xB7\xD9\u02C6\xD9\u0160\xD9\u201E \xD9\u02C6\xD8\xA7\xD9\u201E\xD9\u2021\xD9\u0160\xD9\u0192\xD9\u201E \xD8\xA7\xD9\u201E\xD8\xB0\xD9\u0192\xD9\u0160 \xD8\xA7\xD9\u201E\xD9\u2026\xD9\u02C6\xD8\xAC\xD9\u2021 \xD9\u201E\xD9\u201E\xD8\xB1\xD8\xA7\xD8\xAD\xD8\xA9 \xD9\x81\xD9\u0160 Dreamer 26 \xD8\xAB\xD9\u201A\xD8\xA9 \xD8\xB3\xD9\u201E\xD8\xB3\xD8\xA9 \xD9\x81\xD9\u0160 \xD8\xA7\xD9\u201E\xD8\xB1\xD8\xAD\xD9\u201E\xD8\xA7\xD8\xAA \xD8\xA7\xD9\u201E\xD8\xB7\xD9\u02C6\xD9\u0160\xD9\u201E\xD8\xA9 \xD8\xAA\xD9\u201E\xD9\u0160\xD9\u201A \xD8\xA8\xD8\xB3\xD9\u0160\xD8\xA7\xD8\xB1\xD8\xA9 MPV \xD8\xAA\xD9\u2020\xD9\x81\xD9\u0160\xD8\xB0\xD9\u0160\xD8\xA9 \xD9\x81\xD8\xA7\xD8\xAE\xD8\xB1\xD8\xA9."
      ),
      images: carGallery("newDreamer26", ["bg_11_1920.jpg", "sc_14.jpg", "sc_15.jpg", "sc_15-4.jpg"]),
      videos: ["/voyah-resources/images/car/h56d/video_13.mp4"]
    },
    {
      id: "chapter-3",
      title: t("Flagship intelligence", "Intelligence phare", "\xD8\xA7\xD9\u201E\xD8\xB0\xD9\u0192\xD8\xA7\xD8\xA1 \xD8\xA7\xD9\u201E\xD8\xB1\xD8\xA7\xD8\xA6\xD8\xAF"),
      summary: t(
        "Huawei Qiankun intelligent driving, Harmony cockpit integration, and an AI-focused interaction layer give Dreamer 26 a more advanced flagship character.",
        "La conduite intelligente Huawei Qiankun, l\xE2\u20AC\u2122int\xC3\xA9gration du cockpit Harmony et une couche d\xE2\u20AC\u2122interaction centr\xC3\xA9e sur l\xE2\u20AC\u2122IA donnent \xC3\xA0 Dreamer 26 une expression plus avanc\xC3\xA9e et distinctive.",
        "\xD8\xAA\xD9\u2026\xD9\u2020\xD8\xAD \xD8\xA7\xD9\u201E\xD9\u201A\xD9\u0160\xD8\xA7\xD8\xAF\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB0\xD9\u0192\xD9\u0160\xD8\xA9 \xD9\u2026\xD9\u2020 Huawei Qiankun \xD9\u02C6\xD8\xAA\xD9\u0192\xD8\xA7\xD9\u2026\xD9\u201E \xD9\u2026\xD9\u201A\xD8\xB5\xD9\u02C6\xD8\xB1\xD8\xA9 Harmony \xD9\u02C6\xD8\xB7\xD8\xA8\xD9\u201A\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xAA\xD9\x81\xD8\xA7\xD8\xB9\xD9\u201E \xD8\xA7\xD9\u201E\xD9\u2026\xD8\xB9\xD8\xAA\xD9\u2026\xD8\xAF\xD8\xA9 \xD8\xB9\xD9\u201E\xD9\u2030 \xD8\xA7\xD9\u201E\xD8\xB0\xD9\u0192\xD8\xA7\xD8\xA1 \xD8\xA7\xD9\u201E\xD8\xA7\xD8\xB5\xD8\xB7\xD9\u2020\xD8\xA7\xD8\xB9\xD9\u0160 \xD8\xAD\xD8\xB6\xD9\u02C6\xD8\xB1\xD9\u2039\xD8\xA7 \xD8\xA3\xD9\u0192\xD8\xAB\xD8\xB1 \xD8\xAA\xD9\u201A\xD8\xAF\xD9\u2026\xD9\u2039\xD8\xA7 \xD9\u02C6\xD8\xAA\xD9\u2026\xD9\u0160\xD8\xB2\xD9\u2039\xD8\xA7 \xD9\u201E\xD8\xB3\xD9\u0160\xD8\xA7\xD8\xB1\xD8\xA9 Dreamer 26."
      ),
      images: carGallery("newDreamer26", ["bg_16_1920.jpg", "sc_18.jpg", "sc_19.jpg", "sc_21.jpg"]),
      videos: ["/voyah-resources/images/car/h56d/video_17.mp4"]
    },
    {
      id: "chapter-4",
      title: t("Flagship safety", "S\xC3\xA9curit\xC3\xA9 phare", "\xD8\xA7\xD9\u201E\xD8\xB3\xD9\u201E\xD8\xA7\xD9\u2026\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB1\xD8\xA7\xD8\xA6\xD8\xAF\xD8\xA9"),
      summary: t(
        "The body shell, occupant protection logic, and battery safety systems are presented with calm, document-like confidence.",
        "La coque, la logique de protection des occupants et les syst\xC3\xA8mes de s\xC3\xA9curit\xC3\xA9 batterie sont pr\xC3\xA9sent\xC3\xA9s avec une assurance calme et structur\xC3\xA9e.",
        "\xD9\u0160\xD8\xAA\xD9\u2026 \xD8\xAA\xD9\u201A\xD8\xAF\xD9\u0160\xD9\u2026 \xD9\u2021\xD9\u0160\xD9\u0192\xD9\u201E \xD8\xA7\xD9\u201E\xD8\xB3\xD9\u0160\xD8\xA7\xD8\xB1\xD8\xA9 \xD9\u02C6\xD9\u2026\xD9\u2020\xD8\xB7\xD9\u201A \xD8\xAD\xD9\u2026\xD8\xA7\xD9\u0160\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB1\xD9\u0192\xD8\xA7\xD8\xA8 \xD9\u02C6\xD8\xA3\xD9\u2020\xD8\xB8\xD9\u2026\xD8\xA9 \xD8\xB3\xD9\u201E\xD8\xA7\xD9\u2026\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xA8\xD8\xB7\xD8\xA7\xD8\xB1\xD9\u0160\xD8\xA9 \xD8\xA8\xD8\xAB\xD9\u201A\xD8\xA9 \xD9\u2021\xD8\xA7\xD8\xAF\xD8\xA6\xD8\xA9 \xD9\u02C6\xD8\xA3\xD8\xB3\xD9\u201E\xD9\u02C6\xD8\xA8 \xD9\u02C6\xD8\xA7\xD8\xB6\xD8\xAD \xD9\u02C6\xD9\u2026\xD9\u2020\xD8\xB8\xD9\u2026."
      ),
      images: carGallery("newDreamer26", ["bg_22_1920.jpg", "sc_23.jpg", "sc_24.jpg", "sc_25.jpg"])
    }
  ],
  "passion-L.html": [
    {
      id: "chapter-1",
      title: t("Oriental flagship aesthetics", "Esth\xC3\xA9tique phare orientale", "\xD8\xA7\xD9\u201E\xD8\xAC\xD9\u2026\xD8\xA7\xD9\u201E\xD9\u0160\xD8\xA7\xD8\xAA \xD8\xA7\xD9\u201E\xD8\xB4\xD8\xB1\xD9\u201A\xD9\u0160\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB1\xD8\xA7\xD8\xA6\xD8\xAF\xD8\xA9"),
      summary: t(
        "Passion L interprets the design language through ceremonial front graphics, an elongated sedan proportion, and an elegant rear profile shaped around executive presence.",
        "Passion L interpr\xC3\xA8te son langage de design par une face avant c\xC3\xA9r\xC3\xA9monielle, des proportions de berline allong\xC3\xA9es et une silhouette arri\xC3\xA8re \xC3\xA9l\xC3\xA9gante \xC3\xA0 forte pr\xC3\xA9sence ex\xC3\xA9cutive.",
        "\xD8\xAA\xD8\xB9\xD9\u0160\xD8\xAF Passion L \xD8\xAA\xD9\x81\xD8\xB3\xD9\u0160\xD8\xB1 \xD9\u201E\xD8\xBA\xD8\xA9 \xD8\xAA\xD8\xB5\xD9\u2026\xD9\u0160\xD9\u2026\xD9\u2021\xD8\xA7 \xD8\xB9\xD8\xA8\xD8\xB1 \xD9\u02C6\xD8\xA7\xD8\xAC\xD9\u2021\xD8\xA9 \xD8\xA3\xD9\u2026\xD8\xA7\xD9\u2026\xD9\u0160\xD8\xA9 \xD8\xA7\xD8\xAD\xD8\xAA\xD9\x81\xD8\xA7\xD9\u201E\xD9\u0160\xD8\xA9 \xD9\u02C6\xD8\xAA\xD9\u2020\xD8\xA7\xD8\xB3\xD8\xA8\xD8\xA7\xD8\xAA \xD8\xB3\xD9\u0160\xD8\xAF\xD8\xA7\xD9\u2020 \xD8\xB7\xD9\u02C6\xD9\u0160\xD9\u201E\xD8\xA9 \xD9\u02C6\xD9\u2021\xD9\u0160\xD8\xA6\xD8\xA9 \xD8\xAE\xD9\u201E\xD9\x81\xD9\u0160\xD8\xA9 \xD8\xA3\xD9\u2020\xD9\u0160\xD9\u201A\xD8\xA9 \xD8\xB0\xD8\xA7\xD8\xAA \xD8\xAD\xD8\xB6\xD9\u02C6\xD8\xB1 \xD8\xAA\xD9\u2020\xD9\x81\xD9\u0160\xD8\xB0\xD9\u0160."
      ),
      images: carGallery("passion-L", ["1920/sc_2.jpg", "1920/sc_3.jpg", "1920/sc_4.jpg", "1920/sc_5.jpg"])
    },
    {
      id: "chapter-2",
      title: t("All-dimensional comfort cabin", "Habitacle confort int\xC3\xA9gral", "\xD9\u2026\xD9\u201A\xD8\xB5\xD9\u02C6\xD8\xB1\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB1\xD8\xA7\xD8\xAD\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB4\xD8\xA7\xD9\u2026\xD9\u201E\xD8\xA9"),
      summary: t(
        "The long-wheelbase cabin uses premium seat engineering, panoramic openness, and refined rear-space detailing to match the comfort-first sedan story.",
        "L\xE2\u20AC\u2122habitacle \xC3\xA0 empattement long associe si\xC3\xA8ges premium, sensation panoramique et soin du d\xC3\xA9tail \xC3\xA0 l\xE2\u20AC\u2122arri\xC3\xA8re pour exprimer une berline orient\xC3\xA9e confort.",
        "\xD8\xAA\xD8\xB3\xD8\xAA\xD8\xAE\xD8\xAF\xD9\u2026 \xD8\xA7\xD9\u201E\xD9\u2026\xD9\u201A\xD8\xB5\xD9\u02C6\xD8\xB1\xD8\xA9 \xD8\xB0\xD8\xA7\xD8\xAA \xD9\u201A\xD8\xA7\xD8\xB9\xD8\xAF\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB9\xD8\xAC\xD9\u201E\xD8\xA7\xD8\xAA \xD8\xA7\xD9\u201E\xD8\xB7\xD9\u02C6\xD9\u0160\xD9\u201E\xD8\xA9 \xD9\u2021\xD9\u2020\xD8\xAF\xD8\xB3\xD8\xA9 \xD9\u2026\xD9\u201A\xD8\xA7\xD8\xB9\xD8\xAF \xD9\x81\xD8\xA7\xD8\xAE\xD8\xB1\xD8\xA9 \xD9\u02C6\xD8\xA7\xD9\u2020\xD9\x81\xD8\xAA\xD8\xA7\xD8\xAD\xD8\xA7\xD9\u2039 \xD8\xA8\xD8\xA7\xD9\u2020\xD9\u02C6\xD8\xB1\xD8\xA7\xD9\u2026\xD9\u0160\xD8\xA7\xD9\u2039 \xD9\u02C6\xD8\xAA\xD9\x81\xD8\xA7\xD8\xB5\xD9\u0160\xD9\u201E \xD8\xB1\xD8\xA7\xD9\u201A\xD9\u0160\xD8\xA9 \xD9\x81\xD9\u0160 \xD8\xA7\xD9\u201E\xD8\xAE\xD9\u201E\xD9\x81 \xD9\u201E\xD8\xAA\xD9\u201A\xD8\xAF\xD9\u2026 \xD9\u2021\xD9\u02C6\xD9\u0160\xD8\xA9 \xD8\xB3\xD9\u0160\xD8\xAF\xD8\xA7\xD9\u2020 \xD9\u2026\xD8\xB1\xD9\u0192\xD8\xB2\xD9\u2021\xD8\xA7 \xD8\xA7\xD9\u201E\xD8\xB1\xD8\xA7\xD8\xAD\xD8\xA9."
      ),
      images: carGallery("passion-L", ["1920/sc_9.jpg", "1920/sc_10.jpg", "1920/sc_16.jpg", "1920/sc_18.jpg"]),
      videos: ["/voyah-resources/images/car/passion-L/video_11.mp4", "/voyah-resources/images/car/passion-L/video_14.mp4", "/voyah-resources/images/car/passion-L/video_15.mp4"]
    },
    {
      id: "chapter-3",
      title: t("HarmonySpace cockpit", "Cockpit HarmonySpace", "\xD9\u2026\xD9\u201A\xD8\xB5\xD9\u02C6\xD8\xB1\xD8\xA9 HarmonySpace"),
      summary: t(
        "HarmonySpace brings the digital flagship expression to Passion L through a wide-format display, seamless ecosystem flow, and a calmer interaction experience.",
        "HarmonySpace apporte \xC3\xA0 Passion L une expression num\xC3\xA9rique phare gr\xC3\xA2ce \xC3\xA0 un affichage grand format, un \xC3\xA9cosyst\xC3\xA8me fluide et une interaction plus apais\xC3\xA9e.",
        "\xD8\xAA\xD8\xAC\xD9\u201E\xD8\xA8 HarmonySpace \xD8\xA5\xD9\u201E\xD9\u2030 Passion L \xD8\xAA\xD8\xB9\xD8\xA8\xD9\u0160\xD8\xB1\xD9\u2039\xD8\xA7 \xD8\xB1\xD9\u201A\xD9\u2026\xD9\u0160\xD9\u2039\xD8\xA7 \xD8\xB1\xD8\xA7\xD8\xA6\xD8\xAF\xD9\u2039\xD8\xA7 \xD8\xB9\xD8\xA8\xD8\xB1 \xD8\xB4\xD8\xA7\xD8\xB4\xD8\xA9 \xD8\xB9\xD8\xB1\xD9\u0160\xD8\xB6\xD8\xA9 \xD9\u02C6\xD8\xAA\xD8\xAF\xD9\x81\xD9\u201A \xD8\xA8\xD9\u0160\xD8\xA6\xD9\u0160 \xD8\xB3\xD9\u201E\xD8\xB3 \xD9\u02C6\xD8\xAA\xD8\xAC\xD8\xB1\xD8\xA8\xD8\xA9 \xD8\xAA\xD9\x81\xD8\xA7\xD8\xB9\xD9\u201E \xD8\xA3\xD9\u0192\xD8\xAB\xD8\xB1 \xD9\u2021\xD8\xAF\xD9\u02C6\xD8\xA1\xD9\u2039\xD8\xA7."
      ),
      images: carGallery("passion-L", ["1920/sc_24.jpg", "1920/sc_25.jpg", "1920/sc_23.jpg"]),
      videos: ["/voyah-resources/images/car/passion-L/video_26_1.mp4", "/voyah-resources/images/car/passion-L/video_26_2.mp4"]
    },
    {
      id: "chapter-4",
      title: t("Huawei Qiankun ADS", "Huawei Qiankun ADS", "Huawei Qiankun ADS"),
      summary: t(
        "The assisted-driving chapter is presented with sensor coverage, P2P navigation logic, and all-dimensional collision prevention.",
        "Le volet conduite assist\xC3\xA9e est pr\xC3\xA9sent\xC3\xA9 comme un chapitre \xC3\xA0 part enti\xC3\xA8re, avec couverture des capteurs, logique de navigation P2P et pr\xC3\xA9vention multidimensionnelle des collisions.",
        "\xD9\u0160\xD8\xAA\xD9\u2026 \xD8\xAA\xD9\u201A\xD8\xAF\xD9\u0160\xD9\u2026 \xD9\u2026\xD8\xB3\xD8\xA7\xD8\xB1 \xD8\xA7\xD9\u201E\xD9\u201A\xD9\u0160\xD8\xA7\xD8\xAF\xD8\xA9 \xD8\xA7\xD9\u201E\xD9\u2026\xD8\xB3\xD8\xA7\xD8\xB9\xD8\xAF\xD8\xA9 \xD9\u0192\xD9\x81\xD8\xB5\xD9\u201E \xD9\u2026\xD8\xAA\xD9\u0192\xD8\xA7\xD9\u2026\xD9\u201E \xD9\u2026\xD8\xB9 \xD8\xAA\xD8\xBA\xD8\xB7\xD9\u0160\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xAD\xD8\xB3\xD8\xA7\xD8\xB3\xD8\xA7\xD8\xAA \xD9\u02C6\xD9\u2026\xD9\u2020\xD8\xB7\xD9\u201A \xD8\xA7\xD9\u201E\xD8\xAA\xD9\u2020\xD9\u201A\xD9\u201E P2P \xD9\u02C6\xD8\xA7\xD9\u201E\xD9\u02C6\xD9\u201A\xD8\xA7\xD9\u0160\xD8\xA9 \xD9\u2026\xD8\xAA\xD8\xB9\xD8\xAF\xD8\xAF\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xA3\xD8\xA8\xD8\xB9\xD8\xA7\xD8\xAF \xD9\u2026\xD9\u2020 \xD8\xA7\xD9\u201E\xD8\xA7\xD8\xB5\xD8\xB7\xD8\xAF\xD8\xA7\xD9\u2026."
      ),
      images: carGallery("passion-L", ["1920/sc_27.jpg", "1920/sc_28.jpg", "1920/sc_29.jpg", "1920/sc_30.jpg"])
    },
    {
      id: "chapter-5",
      title: t("Lanhai intelligent super hybrid", "Super hybride intelligent Lanhai", "\xD9\u201E\xD8\xA7\xD9\u2020\xD9\u2021\xD8\xA7\xD9\u0160 \xD8\xA7\xD9\u201E\xD9\u2021\xD8\xAC\xD9\u0160\xD9\u2020 \xD8\xA7\xD9\u201E\xD8\xB0\xD9\u0192\xD9\u0160 \xD8\xA7\xD9\u201E\xD9\x81\xD8\xA7\xD8\xA6\xD9\u201A"),
      summary: t(
        "Ultra-fast charging, long electric range, and the brand\xE2\u20AC\u2122s hybrid power narrative are grouped together here to echo the powertrain storytelling.",
        "La recharge ultra-rapide, la grande autonomie \xC3\xA9lectrique et le r\xC3\xA9cit hybride de la marque sont regroup\xC3\xA9s ici pour structurer la lecture de la cha\xC3\xAEne de traction.",
        "\xD9\u0160\xD8\xAA\xD9\u2026 \xD8\xAC\xD9\u2026\xD8\xB9 \xD8\xA7\xD9\u201E\xD8\xB4\xD8\xAD\xD9\u2020 \xD8\xA7\xD9\u201E\xD9\x81\xD8\xA7\xD8\xA6\xD9\u201A \xD8\xA7\xD9\u201E\xD8\xB3\xD8\xB1\xD8\xB9\xD8\xA9 \xD9\u02C6\xD8\xA7\xD9\u201E\xD9\u2026\xD8\xAF\xD9\u2030 \xD8\xA7\xD9\u201E\xD9\u0192\xD9\u2021\xD8\xB1\xD8\xA8\xD8\xA7\xD8\xA6\xD9\u0160 \xD8\xA7\xD9\u201E\xD8\xB7\xD9\u02C6\xD9\u0160\xD9\u201E \xD9\u02C6\xD8\xB3\xD8\xB1\xD8\xAF \xD8\xA7\xD9\u201E\xD8\xB9\xD9\u201E\xD8\xA7\xD9\u2026\xD8\xA9 \xD9\u201E\xD9\u2026\xD9\u2020\xD8\xB8\xD9\u02C6\xD9\u2026\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xAF\xD9\x81\xD8\xB9 \xD8\xA7\xD9\u201E\xD9\u2021\xD8\xAC\xD9\u0160\xD9\u2020\xD8\xA9 \xD9\u2021\xD9\u2020\xD8\xA7 \xD9\u201E\xD8\xAA\xD9\u201A\xD8\xAF\xD9\u0160\xD9\u2026 \xD8\xB5\xD9\u02C6\xD8\xB1\xD8\xA9 \xD9\u02C6\xD8\xA7\xD8\xB6\xD8\xAD\xD8\xA9 \xD8\xB9\xD9\u2020 \xD9\u2026\xD9\u2020\xD8\xB8\xD9\u02C6\xD9\u2026\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xAD\xD8\xB1\xD9\u0192\xD8\xA9."
      ),
      images: carGallery("passion-L", ["1920/sc_31.jpg", "1920/sc_32.jpg", "1920/sc_33.jpg", "1920/sc_34.jpg"])
    },
    {
      id: "chapter-6",
      title: t("Million-level magic carpet chassis", "Ch\xC3\xA2ssis tapis volant de niveau million", "\xD9\u2021\xD9\u0160\xD9\u0192\xD9\u201E \xD8\xA7\xD9\u201E\xD8\xB3\xD8\xAC\xD8\xA7\xD8\xAF\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB3\xD8\xAD\xD8\xB1\xD9\u0160\xD8\xA9 \xD8\xA8\xD9\u2026\xD8\xB3\xD8\xAA\xD9\u02C6\xD9\u2030 \xD8\xA7\xD9\u201E\xD9\u2026\xD9\u201E\xD9\u0160\xD9\u02C6\xD9\u2020"),
      summary: t(
        "The chassis chapter emphasizes million-level comfort, air suspension, rear-wheel steering, and a sedan body that stays composed even when driven quickly.",
        "Le chapitre ch\xC3\xA2ssis met en avant un confort de niveau million, la suspension pneumatique, les roues arri\xC3\xA8re directrices et une berline qui reste pos\xC3\xA9e m\xC3\xAAme \xC3\xA0 rythme soutenu.",
        "\xD9\u0160\xD8\xB1\xD9\u0192\xD8\xB2 \xD9\x81\xD8\xB5\xD9\u201E \xD8\xA7\xD9\u201E\xD9\u2021\xD9\u0160\xD9\u0192\xD9\u201E \xD8\xB9\xD9\u201E\xD9\u2030 \xD8\xB1\xD8\xA7\xD8\xAD\xD8\xA9 \xD8\xA8\xD9\u2026\xD8\xB3\xD8\xAA\xD9\u02C6\xD9\u2030 \xD8\xA7\xD9\u201E\xD9\u2026\xD9\u201E\xD9\u0160\xD9\u02C6\xD9\u2020 \xD9\u02C6\xD8\xAA\xD8\xB9\xD9\u201E\xD9\u0160\xD9\u201A \xD9\u2021\xD9\u02C6\xD8\xA7\xD8\xA6\xD9\u0160 \xD9\u02C6\xD8\xAA\xD9\u02C6\xD8\xAC\xD9\u0160\xD9\u2021 \xD9\u201E\xD9\u201E\xD8\xB9\xD8\xAC\xD9\u201E\xD8\xA7\xD8\xAA \xD8\xA7\xD9\u201E\xD8\xAE\xD9\u201E\xD9\x81\xD9\u0160\xD8\xA9 \xD9\u02C6\xD9\u2021\xD9\u0160\xD8\xA6\xD8\xA9 \xD8\xB3\xD9\u0160\xD8\xAF\xD8\xA7\xD9\u2020 \xD8\xAA\xD8\xA8\xD9\u201A\xD9\u2030 \xD9\u2026\xD8\xAA\xD8\xB2\xD9\u2020\xD8\xA9 \xD8\xAD\xD8\xAA\xD9\u2030 \xD8\xB9\xD9\u2020\xD8\xAF \xD8\xA7\xD9\u201E\xD9\u201A\xD9\u0160\xD8\xA7\xD8\xAF\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB3\xD8\xB1\xD9\u0160\xD8\xB9\xD8\xA9."
      ),
      images: carGallery("passion-L", ["1920/sc_35.jpg", "1920/sc_36.jpg", "1920/sc_38.jpg"]),
      videos: ["/voyah-resources/images/car/passion-L/video_37.mp4"]
    },
    {
      id: "chapter-7",
      title: t("All-dimensional safety protection", "Protection s\xC3\xA9curit\xC3\xA9 int\xC3\xA9grale", "\xD8\xAD\xD9\u2026\xD8\xA7\xD9\u0160\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB3\xD9\u201E\xD8\xA7\xD9\u2026\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB4\xD8\xA7\xD9\u2026\xD9\u201E\xD8\xA9"),
      summary: t(
        "Structural strength, battery protection, and in-cabin privacy and safety finish the sedan with a complete all-dimensional protection story.",
        "La rigidit\xC3\xA9 structurelle, la protection batterie ainsi que la confidentialit\xC3\xA9 et la s\xC3\xA9curit\xC3\xA9 \xC3\xA0 bord finalisent la berline avec un r\xC3\xA9cit de protection int\xC3\xA9grale.",
        "\xD8\xAA\xD9\u0192\xD9\u2026\xD9\u201E \xD8\xA7\xD9\u201E\xD8\xB5\xD9\u201E\xD8\xA7\xD8\xA8\xD8\xA9 \xD8\xA7\xD9\u201E\xD9\u2021\xD9\u0160\xD9\u0192\xD9\u201E\xD9\u0160\xD8\xA9 \xD9\u02C6\xD8\xAD\xD9\u2026\xD8\xA7\xD9\u0160\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xA8\xD8\xB7\xD8\xA7\xD8\xB1\xD9\u0160\xD8\xA9 \xD9\u02C6\xD8\xA7\xD9\u201E\xD8\xAE\xD8\xB5\xD9\u02C6\xD8\xB5\xD9\u0160\xD8\xA9 \xD9\u02C6\xD8\xA7\xD9\u201E\xD8\xB3\xD9\u201E\xD8\xA7\xD9\u2026\xD8\xA9 \xD8\xAF\xD8\xA7\xD8\xAE\xD9\u201E \xD8\xA7\xD9\u201E\xD9\u2026\xD9\u201A\xD8\xB5\xD9\u02C6\xD8\xB1\xD8\xA9 \xD8\xA8\xD9\u201A\xD8\xB5\xD8\xA9 \xD8\xAD\xD9\u2026\xD8\xA7\xD9\u0160\xD8\xA9 \xD8\xB4\xD8\xA7\xD9\u2026\xD9\u201E\xD8\xA9 \xD9\u02C6\xD9\u2026\xD8\xAA\xD9\u2026\xD8\xA7\xD8\xB3\xD9\u0192\xD8\xA9."
      ),
      images: carGallery("passion-L", ["1920/sc_39.jpg", "1920/sc_40.jpg", "1920/sc_42.jpg", "1920/sc_43.jpg"])
    }
  ],
  "free+.html": [
    {
      id: "chapter-1",
      title: t("City light-and-shadow aesthetics", "Esth\xC3\xA9tique urbaine d\xE2\u20AC\u2122ombres et de lumi\xC3\xA8re", "\xD8\xAC\xD9\u2026\xD8\xA7\xD9\u201E\xD9\u0160\xD8\xA7\xD8\xAA \xD8\xA7\xD9\u201E\xD8\xB6\xD9\u02C6\xD8\xA1 \xD9\u02C6\xD8\xA7\xD9\u201E\xD8\xB8\xD9\u201E \xD8\xA7\xD9\u201E\xD8\xAD\xD8\xB6\xD8\xB1\xD9\u0160\xD8\xA9"),
      summary: t(
        "FREE+ opens with the urban design narrative: sculpted light graphics, athletic SUV proportions, and a more premium city-focused visual identity.",
        "FREE+ s\xE2\u20AC\u2122ouvre sur un r\xC3\xA9cit de design urbain : des signatures lumineuses sculpt\xC3\xA9es, des proportions de SUV athl\xC3\xA9tiques et une identit\xC3\xA9 visuelle plus premium orient\xC3\xA9e ville.",
        "\xD8\xAA\xD8\xA8\xD8\xAF\xD8\xA3 FREE+ \xD8\xA8\xD8\xB3\xD8\xB1\xD8\xAF \xD8\xAA\xD8\xB5\xD9\u2026\xD9\u0160\xD9\u2026 \xD8\xAD\xD8\xB6\xD8\xB1\xD9\u0160 \xD9\u0160\xD8\xAC\xD9\u2026\xD8\xB9 \xD8\xA7\xD9\u201E\xD8\xB1\xD8\xB3\xD9\u02C6\xD9\u2026 \xD8\xA7\xD9\u201E\xD8\xB6\xD9\u02C6\xD8\xA6\xD9\u0160\xD8\xA9 \xD8\xA7\xD9\u201E\xD9\u2026\xD9\u2020\xD8\xAD\xD9\u02C6\xD8\xAA\xD8\xA9 \xD9\u02C6\xD8\xAA\xD9\u2020\xD8\xA7\xD8\xB3\xD8\xA8\xD8\xA7\xD8\xAA SUV \xD8\xA7\xD9\u201E\xD8\xB1\xD9\u0160\xD8\xA7\xD8\xB6\xD9\u0160\xD8\xA9 \xD9\u02C6\xD9\u2021\xD9\u02C6\xD9\u0160\xD8\xA9 \xD8\xA8\xD8\xB5\xD8\xB1\xD9\u0160\xD8\xA9 \xD8\xA3\xD9\u0192\xD8\xAB\xD8\xB1 \xD9\x81\xD8\xAE\xD8\xA7\xD9\u2026\xD8\xA9 \xD9\u02C6\xD9\u2026\xD9\u02C6\xD8\xAC\xD9\u2021\xD8\xA9 \xD9\u201E\xD9\u201E\xD9\u2026\xD8\xAF\xD9\u0160\xD9\u2020\xD8\xA9."
      ),
      images: carGallery("free+", ["img_01_1920.png", "img_02_01.png", "img_06_01.png", "img_08.png"])
    },
    {
      id: "chapter-2",
      title: t("Voyah Cabin 2.0", "Free Cabin 2.0", "Free Cabin 2.0"),
      summary: t(
        "A softer interior palette, comfort-centered packaging, and premium seat and audio details sharpen the cabin chapter.",
        "Une palette int\xC3\xA9rieure plus douce, un agencement tourn\xC3\xA9 vers le confort et des d\xC3\xA9tails premium sur les si\xC3\xA8ges et l\xE2\u20AC\u2122audio renforcent le caract\xC3\xA8re de ce chapitre habitacle.",
        "\xD8\xAA\xD8\xAC\xD8\xB9\xD9\u201E \xD9\u201E\xD9\u02C6\xD8\xAD\xD8\xA9 \xD8\xA7\xD9\u201E\xD9\u2026\xD9\u201A\xD8\xB5\xD9\u02C6\xD8\xB1\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xA3\xD9\u0192\xD8\xAB\xD8\xB1 \xD9\u2020\xD8\xB9\xD9\u02C6\xD9\u2026\xD8\xA9 \xD9\u02C6\xD8\xA7\xD9\u201E\xD8\xAA\xD8\xBA\xD9\u201E\xD9\u0160\xD9\x81 \xD8\xA7\xD9\u201E\xD9\u2026\xD9\u02C6\xD8\xAC\xD9\u2021 \xD9\u201E\xD9\u201E\xD8\xB1\xD8\xA7\xD8\xAD\xD8\xA9 \xD9\u02C6\xD8\xAA\xD9\x81\xD8\xA7\xD8\xB5\xD9\u0160\xD9\u201E \xD8\xA7\xD9\u201E\xD9\u2026\xD9\u201A\xD8\xA7\xD8\xB9\xD8\xAF \xD9\u02C6\xD8\xA7\xD9\u201E\xD8\xB5\xD9\u02C6\xD8\xAA \xD8\xA7\xD9\u201E\xD9\x81\xD8\xA7\xD8\xAE\xD8\xB1 \xD8\xB7\xD8\xA7\xD8\xA8\xD8\xB9 \xD9\u2021\xD8\xB0\xD8\xA7 \xD8\xA7\xD9\u201E\xD9\x81\xD8\xB5\xD9\u201E \xD8\xA8\xD8\xB4\xD9\u0192\xD9\u201E \xD8\xA3\xD9\u201A\xD9\u02C6\xD9\u2030."
      ),
      images: carGallery("free+", ["img_03_1920.png", "img_11_01.png", "img_17_01.png", "img_20_01.png"]),
      videos: ["/voyah-resources/images/car/free+/video_05.mp4", "/voyah-resources/images/car/free+/video_11.mp4", "/voyah-resources/images/car/free+/video_19.mp4", "/voyah-resources/images/car/free+/video_22.mp4"]
    },
    {
      id: "chapter-3",
      title: t("HarmonySpace 5 cockpit", "Cockpit HarmonySpace 5", "\xD9\u2026\xD9\u201A\xD8\xB5\xD9\u02C6\xD8\xB1\xD8\xA9 HarmonySpace 5"),
      summary: t(
        "This section follows the digital-cockpit rhythm with voice assistant, seamless device flow, and the HarmonySpace ecosystem presented as a dedicated chapter.",
        "Cette section suit le rythme du cockpit num\xC3\xA9rique avec assistant vocal, continuit\xC3\xA9 multi-appareils et \xC3\xA9cosyst\xC3\xA8me HarmonySpace pr\xC3\xA9sent\xC3\xA9 comme un chapitre d\xC3\xA9di\xC3\xA9.",
        "\xD9\u0160\xD8\xAA\xD8\xA8\xD8\xB9 \xD9\u2021\xD8\xB0\xD8\xA7 \xD8\xA7\xD9\u201E\xD9\u201A\xD8\xB3\xD9\u2026 \xD8\xA5\xD9\u0160\xD9\u201A\xD8\xA7\xD8\xB9 \xD8\xA7\xD9\u201E\xD9\u2026\xD9\u201A\xD8\xB5\xD9\u02C6\xD8\xB1\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB1\xD9\u201A\xD9\u2026\xD9\u0160\xD8\xA9 \xD9\u2026\xD8\xB9 \xD8\xA7\xD9\u201E\xD9\u2026\xD8\xB3\xD8\xA7\xD8\xB9\xD8\xAF \xD8\xA7\xD9\u201E\xD8\xB5\xD9\u02C6\xD8\xAA\xD9\u0160 \xD9\u02C6\xD8\xAA\xD8\xAF\xD9\x81\xD9\u201A \xD8\xA7\xD9\u201E\xD8\xA3\xD8\xAC\xD9\u2021\xD8\xB2\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB3\xD9\u201E\xD8\xB3 \xD9\u02C6\xD9\u2020\xD8\xB8\xD8\xA7\xD9\u2026 HarmonySpace \xD8\xA7\xD9\u201E\xD9\u2026\xD9\u201A\xD8\xAF\xD9\u2026 \xD9\u0192\xD9\x81\xD8\xB5\xD9\u201E \xD9\u2026\xD8\xAE\xD8\xB5\xD8\xB5."
      ),
      images: carGallery("free+", ["img_25_1920.png", "img_28_1920.png", "img_29_01.png"]),
      videos: ["/voyah-resources/images/car/free+/video_27_20250712.mp4", "/voyah-resources/images/car/free+/video_28_1.mp4", "/voyah-resources/images/car/free+/video_28_2.mp4"]
    },
    {
      id: "chapter-4",
      title: t("Huawei Qiankun ADS 4", "Huawei Qiankun ADS 4", "Huawei Qiankun ADS 4"),
      summary: t(
        "The assisted-driving chapter mirrors the sequence: Huawei Qiankun ADS 4, sensor hardware, and P2P parking/navigation functions arranged as one story.",
        "Le chapitre conduite assist\xC3\xA9e reprend la s\xC3\xA9quence: Huawei Qiankun ADS 4, mat\xC3\xA9riel de perception et fonctions P2P de navigation/parking r\xC3\xA9unis dans un r\xC3\xA9cit unique.",
        "\xD9\u0160\xD8\xB9\xD9\u0192\xD8\xB3 \xD9\x81\xD8\xB5\xD9\u201E \xD8\xA7\xD9\u201E\xD9\u201A\xD9\u0160\xD8\xA7\xD8\xAF\xD8\xA9 \xD8\xA7\xD9\u201E\xD9\u2026\xD8\xB3\xD8\xA7\xD8\xB9\xD8\xAF\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xAA\xD8\xB3\xD9\u201E\xD8\xB3\xD9\u201E \xD8\xA7\xD9\u201E\xD9\u2026\xD8\xAA\xD9\u0192\xD8\xA7\xD9\u2026\xD9\u201E: Huawei Qiankun ADS 4 \xD9\u02C6\xD8\xA3\xD8\xAC\xD9\u2021\xD8\xB2\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xA7\xD8\xB3\xD8\xAA\xD8\xB4\xD8\xB9\xD8\xA7\xD8\xB1 \xD9\u02C6\xD9\u02C6\xD8\xB8\xD8\xA7\xD8\xA6\xD9\x81 \xD8\xA7\xD9\u201E\xD9\u2026\xD9\u201E\xD8\xA7\xD8\xAD\xD8\xA9 \xD9\u02C6\xD8\xA7\xD9\u201E\xD8\xA7\xD8\xB5\xD8\xB7\xD9\x81\xD8\xA7\xD9\x81 P2P \xD8\xB6\xD9\u2026\xD9\u2020 \xD9\u201A\xD8\xB5\xD8\xA9 \xD9\u02C6\xD8\xA7\xD8\xAD\xD8\xAF\xD8\xA9."
      ),
      images: carGallery("free+", ["img_28_1920.png", "img_29_01.png", "img_31_1920.png"]),
      videos: ["/voyah-resources/images/car/free+/video_31.mp4"]
    },
    {
      id: "chapter-5",
      title: t("Luxury intelligent driving control", "Conduite intelligente haut de gamme", "\xD8\xA7\xD9\u201E\xD8\xAA\xD8\xAD\xD9\u0192\xD9\u2026 \xD8\xA7\xD9\u201E\xD9\x81\xD8\xA7\xD8\xAE\xD8\xB1 \xD8\xA7\xD9\u201E\xD8\xB0\xD9\u0192\xD9\u0160 \xD8\xA8\xD8\xA7\xD9\u201E\xD9\u201A\xD9\u0160\xD8\xA7\xD8\xAF\xD8\xA9"),
      summary: t(
        "FREE+ keeps the performance narrative through its intelligent damping chassis, suspension hardware, four-wheel-drive tuning, and expressive drive-mode presentation.",
        "FREE+ reprend son r\xC3\xA9cit de performance \xC3\xA0 travers son ch\xC3\xA2ssis \xC3\xA0 amortissement intelligent, son mat\xC3\xA9riel de suspension, sa transmission int\xC3\xA9grale et sa mise en sc\xC3\xA8ne des modes de conduite.",
        "\xD8\xAA\xD8\xAD\xD8\xA7\xD9\x81\xD8\xB8 FREE+ \xD8\xB9\xD9\u201E\xD9\u2030 \xD8\xB3\xD8\xB1\xD8\xAF \xD8\xA3\xD8\xAF\xD8\xA7\xD8\xA6\xD9\u2021\xD8\xA7 \xD9\u2026\xD9\u2020 \xD8\xAE\xD9\u201E\xD8\xA7\xD9\u201E \xD8\xA7\xD9\u201E\xD9\u2021\xD9\u0160\xD9\u0192\xD9\u201E \xD8\xB0\xD9\u0160 \xD8\xA7\xD9\u201E\xD8\xAA\xD8\xAE\xD9\u2026\xD9\u0160\xD8\xAF \xD8\xA7\xD9\u201E\xD8\xB0\xD9\u0192\xD9\u0160 \xD9\u02C6\xD9\u2026\xD9\u0192\xD9\u02C6\xD9\u2020\xD8\xA7\xD8\xAA \xD8\xA7\xD9\u201E\xD8\xAA\xD8\xB9\xD9\u201E\xD9\u0160\xD9\u201A \xD9\u02C6\xD8\xB6\xD8\xA8\xD8\xB7 \xD8\xA7\xD9\u201E\xD8\xAF\xD9\x81\xD8\xB9 \xD8\xA7\xD9\u201E\xD8\xB1\xD8\xA8\xD8\xA7\xD8\xB9\xD9\u0160 \xD9\u02C6\xD8\xB9\xD8\xB1\xD8\xB6 \xD8\xA3\xD9\u02C6\xD8\xB6\xD8\xA7\xD8\xB9 \xD8\xA7\xD9\u201E\xD9\u201A\xD9\u0160\xD8\xA7\xD8\xAF\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xAA\xD8\xB9\xD8\xA8\xD9\u0160\xD8\xB1\xD9\u0160\xD8\xA9."
      ),
      images: carGallery("free+", ["img_32_01.png", "img_35_01.png", "img_36_01.png", "img_40_01.jpg"]),
      videos: ["/voyah-resources/images/car/free+/video_34.mp4", "/voyah-resources/images/car/free+/video_35.mp4", "/voyah-resources/images/car/free+/video_42.mp4"]
    },
    {
      id: "chapter-6",
      title: t("EDC magic carpet chassis", "Forteresse de s\xC3\xA9curit\xC3\xA9 omnidirectionnelle", "\xD8\xAD\xD8\xB5\xD9\u2020 \xD8\xA7\xD9\u201E\xD8\xB3\xD9\u201E\xD8\xA7\xD9\u2026\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB4\xD8\xA7\xD9\u2026\xD9\u201E"),
      summary: t(
        "Battery protection, passive body strength, and adaptive chassis tuning complete the comfort-and-control story for FREE+.",
        "La protection batterie, la rigidit\xC3\xA9 passive de la carrosserie et le mat\xC3\xA9riel de s\xC3\xA9curit\xC3\xA9 de l\xE2\u20AC\u2122\xC3\xA9dition sp\xC3\xA9ciale compl\xC3\xA8tent le chapitre de s\xC3\xA9curit\xC3\xA9 omnidirectionnelle de FREE+.",
        "\xD8\xAA\xD9\u0192\xD9\u2026\xD9\u201E \xD8\xAD\xD9\u2026\xD8\xA7\xD9\u0160\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xA8\xD8\xB7\xD8\xA7\xD8\xB1\xD9\u0160\xD8\xA9 \xD9\u02C6\xD9\u201A\xD9\u02C6\xD8\xA9 \xD8\xA7\xD9\u201E\xD9\u2021\xD9\u0160\xD9\u0192\xD9\u201E \xD8\xA7\xD9\u201E\xD8\xB3\xD9\u201E\xD8\xA8\xD9\u0160\xD8\xA9 \xD9\u02C6\xD9\u2026\xD9\u0192\xD9\u02C6\xD9\u2020\xD8\xA7\xD8\xAA \xD8\xA7\xD9\u201E\xD8\xB3\xD9\u201E\xD8\xA7\xD9\u2026\xD8\xA9 \xD9\x81\xD9\u0160 \xD8\xA7\xD9\u201E\xD9\u2020\xD8\xB3\xD8\xAE\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xAE\xD8\xA7\xD8\xB5\xD8\xA9 \xD9\x81\xD8\xB5\xD9\u201E \xD8\xA7\xD9\u201E\xD8\xB3\xD9\u201E\xD8\xA7\xD9\u2026\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB4\xD8\xA7\xD9\u2026\xD9\u201E \xD9\u201E\xD9\u20AC FREE+."
      ),
      images: carGallery("free+", ["img_42_1920.png", "img_43_01.png", "img_44_01.png", "img_45_01.png"])
    }
  ],
  "newCourage.html": [
    {
      id: "chapter-1",
      title: t("Starry embrace cockpit", "Un foyer chaleureux", "\xD9\u2026\xD9\u2020\xD8\xB2\xD9\u201E \xD8\xAF\xD8\xA7\xD9\x81\xD8\xA6"),
      summary: t(
        "The story starts with a softer, family-oriented design language, combining star-lit detailing and welcoming surfaces into a more emotional urban SUV identity.",
        "Le parcours commence par un langage de design plus doux et familial, m\xC3\xAAlant d\xC3\xA9tails lumineux et surfaces accueillantes dans une identit\xC3\xA9 de SUV urbain plus \xC3\xA9motionnelle.",
        "\xD9\u0160\xD8\xA8\xD8\xAF\xD8\xA3 \xD8\xA7\xD9\u201E\xD9\u2026\xD8\xB3\xD8\xA7\xD8\xB1 \xD8\xA8\xD9\u201E\xD8\xBA\xD8\xA9 \xD8\xAA\xD8\xB5\xD9\u2026\xD9\u0160\xD9\u2026 \xD8\xA3\xD9\u0192\xD8\xAB\xD8\xB1 \xD9\u2020\xD8\xB9\xD9\u02C6\xD9\u2026\xD8\xA9 \xD9\u02C6\xD8\xB9\xD8\xA7\xD8\xA6\xD9\u201E\xD9\u0160\xD8\xA9 \xD8\xAA\xD8\xAC\xD9\u2026\xD8\xB9 \xD8\xA7\xD9\u201E\xD8\xAA\xD9\x81\xD8\xA7\xD8\xB5\xD9\u0160\xD9\u201E \xD8\xA7\xD9\u201E\xD9\u2026\xD8\xB6\xD9\u0160\xD8\xA6\xD8\xA9 \xD9\u02C6\xD8\xA7\xD9\u201E\xD8\xA3\xD8\xB3\xD8\xB7\xD8\xAD \xD8\xA7\xD9\u201E\xD9\u2026\xD8\xB1\xD8\xAD\xD8\xA8\xD8\xA9 \xD9\x81\xD9\u0160 \xD9\u2021\xD9\u02C6\xD9\u0160\xD8\xA9 SUV \xD8\xAD\xD8\xB6\xD8\xB1\xD9\u0160\xD8\xA9 \xD8\xA3\xD9\u0192\xD8\xAB\xD8\xB1 \xD8\xB9\xD8\xA7\xD8\xB7\xD9\x81\xD9\u0160\xD8\xA9."
      ),
      images: carGallery("newCourage", ["1920/sc_3.jpg", "1920/sc_4.jpg", "1920/sc_6.jpg", "1920/sc_8.jpg"]),
      videos: ["/voyah-resources/images/car/h37b/video_05_20250812.mp4", "/voyah-resources/images/car/h37b/video_09.mp4"]
    },
    {
      id: "chapter-2",
      title: t("A comfortable home", "Un foyer confortable", "\xD9\u2026\xD9\u2020\xD8\xB2\xD9\u201E \xD9\u2026\xD8\xB1\xD9\u0160\xD8\xAD"),
      summary: t(
        "Large interior volume, layered storage, zero-gravity seating, and a family-first comfort story give this section a stronger Courage identity.",
        "Le grand volume int\xC3\xA9rieur, les rangements superpos\xC3\xA9s, les si\xC3\xA8ges z\xC3\xA9ro gravit\xC3\xA9 et un r\xC3\xA9cit de confort centr\xC3\xA9 sur la famille renforcent nettement ce chapitre.",
        "\xD9\u0160\xD8\xAC\xD8\xB9\xD9\u201E \xD8\xA7\xD9\u201E\xD8\xAD\xD8\xAC\xD9\u2026 \xD8\xA7\xD9\u201E\xD8\xAF\xD8\xA7\xD8\xAE\xD9\u201E\xD9\u0160 \xD8\xA7\xD9\u201E\xD9\u0192\xD8\xA8\xD9\u0160\xD8\xB1 \xD9\u02C6\xD8\xA7\xD9\u201E\xD8\xAA\xD8\xAE\xD8\xB2\xD9\u0160\xD9\u2020 \xD9\u2026\xD8\xAA\xD8\xB9\xD8\xAF\xD8\xAF \xD8\xA7\xD9\u201E\xD8\xB7\xD8\xA8\xD9\u201A\xD8\xA7\xD8\xAA \xD9\u02C6\xD9\u2026\xD9\u201A\xD8\xA7\xD8\xB9\xD8\xAF \xD8\xA7\xD9\u2020\xD8\xB9\xD8\xAF\xD8\xA7\xD9\u2026 \xD8\xA7\xD9\u201E\xD8\xAC\xD8\xA7\xD8\xB0\xD8\xA8\xD9\u0160\xD8\xA9 \xD9\u02C6\xD9\u201A\xD8\xB5\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB1\xD8\xA7\xD8\xAD\xD8\xA9 \xD8\xA7\xD9\u201E\xD9\u2026\xD9\u02C6\xD8\xAC\xD9\u2021\xD8\xA9 \xD9\u201E\xD9\u201E\xD8\xB9\xD8\xA7\xD8\xA6\xD9\u201E\xD8\xA9 \xD9\u2021\xD8\xB0\xD8\xA7 \xD8\xA7\xD9\u201E\xD9\x81\xD8\xB5\xD9\u201E \xD8\xA8\xD8\xB4\xD9\u0192\xD9\u201E \xD9\u02C6\xD8\xA7\xD8\xB6\xD8\xAD."
      ),
      images: carGallery("newCourage", ["1920/sc_12.jpg", "1920/sc_13.jpg", "1920/sc_14.jpg", "1920/sc_18.jpg", "1920/sc_21.jpg"]),
      videos: ["/voyah-resources/images/car/h37b/video_17_20250828.mp4", "/voyah-resources/images/car/h37b/video_22.mp4"]
    },
    {
      id: "chapter-3",
      title: t("A playful home", "Un foyer plein de vie", "\xD9\u2026\xD9\u2020\xD8\xB2\xD9\u201E \xD9\u2026\xD9\u2026\xD8\xAA\xD8\xB9"),
      summary: t(
        "Digital screens, Harmony audio, and emotionally expressive in-cabin lighting turn the third chapter into the more playful family-tech zone seen on the site.",
        "Les \xC3\xA9crans num\xC3\xA9riques, l\xE2\u20AC\u2122audio Harmony et l\xE2\u20AC\u2122\xC3\xA9clairage \xC3\xA9motionnel de l\xE2\u20AC\u2122habitacle transforment le troisi\xC3\xA8me chapitre en zone techno-familiale plus ludique.",
        "\xD8\xAA\xD8\xAD\xD9\u02C6\xD9\u201E \xD8\xA7\xD9\u201E\xD8\xB4\xD8\xA7\xD8\xB4\xD8\xA7\xD8\xAA \xD8\xA7\xD9\u201E\xD8\xB1\xD9\u201A\xD9\u2026\xD9\u0160\xD8\xA9 \xD9\u02C6\xD8\xB5\xD9\u02C6\xD8\xAA Harmony \xD9\u02C6\xD8\xA7\xD9\u201E\xD8\xA5\xD8\xB6\xD8\xA7\xD8\xA1\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB9\xD8\xA7\xD8\xB7\xD9\x81\xD9\u0160\xD8\xA9 \xD8\xAF\xD8\xA7\xD8\xAE\xD9\u201E \xD8\xA7\xD9\u201E\xD9\u2026\xD9\u201A\xD8\xB5\xD9\u02C6\xD8\xB1\xD8\xA9 \xD8\xA7\xD9\u201E\xD9\x81\xD8\xB5\xD9\u201E \xD8\xA7\xD9\u201E\xD8\xAB\xD8\xA7\xD9\u201E\xD8\xAB \xD8\xA5\xD9\u201E\xD9\u2030 \xD9\u2026\xD8\xB3\xD8\xA7\xD8\xAD\xD8\xA9 \xD8\xAA\xD9\u201A\xD9\u2020\xD9\u0160\xD8\xA9 \xD8\xB9\xD8\xA7\xD8\xA6\xD9\u201E\xD9\u0160\xD8\xA9 \xD8\xA3\xD9\u0192\xD8\xAB\xD8\xB1 \xD9\u2026\xD8\xB1\xD8\xAD\xD9\u2039\xD8\xA7."
      ),
      images: carGallery("newCourage", ["1920/sc_23.jpg", "1920/sc_24.jpg", "1920/sc_28.jpg"]),
      videos: ["/voyah-resources/images/car/h37b/video_26_1.mp4", "/voyah-resources/images/car/h37b/video_26_2.mp4", "/voyah-resources/images/car/h37b/video_26_3.mp4", "/voyah-resources/images/car/h37b/video_27.mp4"]
    },
    {
      id: "chapter-4",
      title: t("A smart home", "Un foyer intelligent", "\xD9\u2026\xD9\u2020\xD8\xB2\xD9\u201E \xD8\xB0\xD9\u0192\xD9\u0160"),
      summary: t(
        "Huawei Qiankun ADS 4, collision-avoidance systems, and parking/navigation choreography now read as a dedicated smart-driving chapter.",
        "Huawei Qiankun ADS 4, les syst\xC3\xA8mes d\xE2\u20AC\u2122\xC3\xA9vitement de collision et la chor\xC3\xA9graphie navigation/parking se lisent comme un chapitre d\xC3\xA9di\xC3\xA9 \xC3\xA0 la conduite intelligente.",
        "\xD8\xAA\xD9\x8F\xD9\u201A\xD8\xB1\xD8\xA3 \xD8\xA3\xD9\u2020\xD8\xB8\xD9\u2026\xD8\xA9 Huawei Qiankun ADS 4 \xD9\u02C6\xD8\xAA\xD8\xAC\xD9\u2020\xD8\xA8 \xD8\xA7\xD9\u201E\xD8\xA7\xD8\xB5\xD8\xB7\xD8\xAF\xD8\xA7\xD9\u2026 \xD9\u02C6\xD8\xAD\xD8\xB1\xD9\u0192\xD8\xA7\xD8\xAA \xD8\xA7\xD9\u201E\xD9\u2026\xD9\u201E\xD8\xA7\xD8\xAD\xD8\xA9 \xD9\u02C6\xD8\xA7\xD9\u201E\xD8\xA7\xD8\xB5\xD8\xB7\xD9\x81\xD8\xA7\xD9\x81 \xD9\u0192\xD9\x81\xD8\xB5\xD9\u201E \xD9\u2026\xD8\xAE\xD8\xB5\xD8\xB5 \xD9\u201E\xD9\u201E\xD9\u201A\xD9\u0160\xD8\xA7\xD8\xAF\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB0\xD9\u0192\xD9\u0160\xD8\xA9."
      ),
      images: carGallery("newCourage", ["1920/sc_29.jpg", "1920/sc_31.jpg"]),
      videos: ["/voyah-resources/images/car/h37b/video_30.mp4", "/voyah-resources/images/car/h37b/video_32_1.mp4", "/voyah-resources/images/car/h37b/video_32_2.mp4"]
    },
    {
      id: "chapter-5",
      title: t("An efficient home", "Un foyer efficient", "\xD9\u2026\xD9\u2020\xD8\xB2\xD9\u201E \xD9\x81\xD8\xB9\xD9\u2018\xD8\xA7\xD9\u201E"),
      summary: t(
        "The efficiency story combines 800V architecture, long range, ultra-fast charging, and energy-sharing functions into one calm EV chapter.",
        "Le r\xC3\xA9cit de l\xE2\u20AC\u2122efficience combine architecture 800V, grande autonomie, recharge ultra-rapide et fonctions de partage d\xE2\u20AC\u2122\xC3\xA9nergie dans un chapitre EV unifi\xC3\xA9.",
        "\xD9\u0160\xD8\xAC\xD9\u2026\xD8\xB9 \xD8\xB3\xD8\xB1\xD8\xAF \xD8\xA7\xD9\u201E\xD9\u0192\xD9\x81\xD8\xA7\xD8\xA1\xD8\xA9 \xD8\xA8\xD9\u0160\xD9\u2020 \xD8\xA8\xD9\u2020\xD9\u0160\xD8\xA9 800V \xD9\u02C6\xD8\xA7\xD9\u201E\xD9\u2026\xD8\xAF\xD9\u2030 \xD8\xA7\xD9\u201E\xD8\xB7\xD9\u02C6\xD9\u0160\xD9\u201E \xD9\u02C6\xD8\xA7\xD9\u201E\xD8\xB4\xD8\xAD\xD9\u2020 \xD8\xA7\xD9\u201E\xD9\x81\xD8\xA7\xD8\xA6\xD9\u201A \xD8\xA7\xD9\u201E\xD8\xB3\xD8\xB1\xD8\xB9\xD8\xA9 \xD9\u02C6\xD9\u02C6\xD8\xB8\xD8\xA7\xD8\xA6\xD9\x81 \xD9\u2026\xD8\xB4\xD8\xA7\xD8\xB1\xD9\u0192\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB7\xD8\xA7\xD9\u201A\xD8\xA9 \xD8\xB6\xD9\u2026\xD9\u2020 \xD9\x81\xD8\xB5\xD9\u201E \xD9\u0192\xD9\u2021\xD8\xB1\xD8\xA8\xD8\xA7\xD8\xA6\xD9\u0160 \xD9\u2026\xD9\u02C6\xD8\xAD\xD8\xAF."
      ),
      images: carGallery("newCourage", ["1920/sc_34.jpg", "1920/sc_35.jpg", "1920/sc_37.jpg", "1920/sc_38.jpg"]),
      videos: ["/voyah-resources/images/car/h37b/video_36_20250828.mp4"]
    },
    {
      id: "chapter-6",
      title: t("A secure home", "Un foyer rassurant", "\xD9\u2026\xD9\u2020\xD8\xB2\xD9\u201E \xD8\xA2\xD9\u2026\xD9\u2020"),
      summary: t(
        "Body safety, battery protection, and all-weather assurance close the New Courage story with a family-protection emphasis instead of a feature ending.",
        "La s\xC3\xA9curit\xC3\xA9 de carrosserie, la protection batterie et l\xE2\u20AC\u2122assurance tous temps concluent l\xE2\u20AC\u2122histoire de New Courage avec un accent familial plut\xC3\xB4t qu\xE2\u20AC\u2122une simple liste d\xE2\u20AC\u2122\xC3\xA9quipements.",
        "\xD8\xAA\xD8\xAE\xD8\xAA\xD8\xAA\xD9\u2026 \xD8\xB3\xD9\u201E\xD8\xA7\xD9\u2026\xD8\xA9 \xD8\xA7\xD9\u201E\xD9\u2021\xD9\u0160\xD9\u0192\xD9\u201E \xD9\u02C6\xD8\xAD\xD9\u2026\xD8\xA7\xD9\u0160\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xA8\xD8\xB7\xD8\xA7\xD8\xB1\xD9\u0160\xD8\xA9 \xD9\u02C6\xD8\xA7\xD9\u201E\xD8\xB7\xD9\u2026\xD8\xA3\xD9\u2020\xD9\u0160\xD9\u2020\xD8\xA9 \xD9\x81\xD9\u0160 \xD8\xAC\xD9\u2026\xD9\u0160\xD8\xB9 \xD8\xA7\xD9\u201E\xD8\xB8\xD8\xB1\xD9\u02C6\xD9\x81 \xD9\u201A\xD8\xB5\xD8\xA9 New Courage \xD8\xA8\xD8\xAA\xD8\xB1\xD9\u0192\xD9\u0160\xD8\xB2 \xD8\xB9\xD8\xA7\xD8\xA6\xD9\u201E\xD9\u0160 \xD8\xB9\xD9\u201E\xD9\u2030 \xD8\xA7\xD9\u201E\xD8\xAD\xD9\u2026\xD8\xA7\xD9\u0160\xD8\xA9."
      ),
      images: carGallery("newCourage", ["1920/sc_39.jpg", "1920/sc_40.jpg", "1920/sc_42.jpg"])
    }
  ],
  "titan_blackedition.html": [
    {
      id: "chapter-1",
      title: t("Black exterior presence", "Pr\xE9sence ext\xE9rieure noire", "\u062D\u0636\u0648\u0631 \u062E\u0627\u0631\u062C\u064A \u0623\u0633\u0648\u062F"),
      summary: t(
        "The Black Edition sets a darker flagship tone with blacked-out trim, a more dramatic front face, and a stealthier premium expression.",
        "La Black Edition impose un ton phare plus sombre avec des \xE9l\xE9ments noirs, une face avant plus dramatique et une expression premium furtive.",
        "\u062A\u0645\u0646\u062D Black Edition \u0646\u063A\u0645\u0629 \u0631\u0627\u0626\u062F\u0629 \u0623\u0643\u062B\u0631 \u0642\u062A\u0627\u0645\u0629 \u0645\u0639 \u062A\u0637\u0639\u064A\u0645\u0627\u062A \u0633\u0648\u062F\u0627\u0621 \u0648\u0648\u0627\u062C\u0647\u0629 \u0623\u0645\u0627\u0645\u064A\u0629 \u0623\u0643\u062B\u0631 \u062F\u0631\u0627\u0645\u064A\u0629 \u0648\u062A\u0639\u0628\u064A\u0631 \u0641\u0627\u062E\u0631 \u0623\u0643\u062B\u0631 \u0647\u062F\u0648\u0621\u064B\u0627."
      ),
      images: carGallery("titan_blackedition", ["1920/sc_1.jpg", "1920/sc_3_1.jpg", "1920/sc_8.jpg"])
    },
    {
      id: "chapter-2",
      title: t("Black cabin texture", "Texture habitacle noire", "\u0645\u0644\u0645\u0633 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0633\u0648\u062F\u0627\u0621"),
      summary: t(
        "Inside, darker materials, contrast stitching, and the calmer seat architecture keep the cabin aligned with the edition\u2019s more restrained luxury story.",
        "\xC0 bord, des mat\xE9riaux plus sombres, des surpiq\xFBres contrast\xE9es et une architecture de si\xE8ges plus calme maintiennent l\u2019habitacle dans l\u2019histoire de luxe contenu de cette \xE9dition.",
        "\u062F\u0627\u062E\u0644 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629\u060C \u062A\u062D\u0627\u0641\u0638 \u0627\u0644\u062E\u0627\u0645\u0627\u062A \u0627\u0644\u062F\u0627\u0643\u0646\u0629 \u0648\u0627\u0644\u062E\u064A\u0627\u0637\u0629 \u0627\u0644\u0645\u062A\u0628\u0627\u064A\u0646\u0629 \u0648\u0628\u0646\u064A\u0629 \u0627\u0644\u0645\u0642\u0627\u0639\u062F \u0627\u0644\u0647\u0627\u062F\u0626\u0629 \u0639\u0644\u0649 \u0627\u0646\u0633\u062C\u0627\u0645 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0645\u0639 \u0642\u0635\u0629 \u0627\u0644\u0641\u062E\u0627\u0645\u0629 \u0627\u0644\u0623\u0643\u062B\u0631 \u062A\u062D\u0641\u0638\u064B\u0627 \u0641\u064A \u0647\u0630\u0647 \u0627\u0644\u0646\u0633\u062E\u0629."
      ),
      images: carGallery("titan_blackedition", ["1920/sc_10_1.jpg", "1920/sc_17.jpg", "1920/sc_18_1.jpg"])
    },
    {
      id: "chapter-3",
      title: t("Executive intelligence", "Intelligence ex\xE9cutive", "\u0630\u0643\u0627\u0621 \u062A\u0646\u0641\u064A\u0630\u064A"),
      summary: t(
        "Assisted driving, smart cockpit interaction, and premium travel comfort keep the Black Edition feeling like a full flagship rather than a trim package.",
        "La conduite assist\xE9e, l\u2019interaction du cockpit intelligent et le confort de voyage premium font de la Black Edition un v\xE9ritable flagship et non une simple finition.",
        "\u062A\u062C\u0639\u0644 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0648\u062A\u0641\u0627\u0639\u0644 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0630\u0643\u064A\u0629 \u0648\u0631\u0627\u062D\u0629 \u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u0641\u0627\u062E\u0631\u0629 \u0645\u0646 Black Edition \u0637\u0631\u0627\u0632\u064B\u0627 \u0631\u0627\u0626\u062F\u064B\u0627 \u0643\u0627\u0645\u0644\u064B\u0627 \u0644\u0627 \u0645\u062C\u0631\u062F \u0641\u0626\u0629 \u062A\u062C\u0647\u064A\u0632."
      ),
      images: carGallery("titan_blackedition", ["1920/sc_20.jpg", "1920/sc_23_1.jpg", "1920/sc_15.jpg"]),
      videos: ["/voyah-resources/images/car/titan_blackedition/video_01.mp4"]
    },
    {
      id: "chapter-4",
      title: t("Quiet confidence", "Confiance silencieuse", "\u062B\u0642\u0629 \u0647\u0627\u062F\u0626\u0629"),
      summary: t(
        "Safety structure, battery protection, and wide-cabin calm finish the edition with the same calm confidence expected from the Titan family.",
        "La structure de s\xE9curit\xE9, la protection de la batterie et le calme du grand habitacle concluent l\u2019\xE9dition avec la m\xEAme assurance que la famille Titan.",
        "\u062A\u064F\u062E\u062A\u062A\u0645 \u0627\u0644\u0646\u0633\u062E\u0629 \u0628\u0628\u0646\u064A\u0629 \u0623\u0645\u0627\u0646 \u0648\u062D\u0645\u0627\u064A\u0629 \u0644\u0644\u0628\u0637\u0627\u0631\u064A\u0629 \u0648\u0647\u062F\u0648\u0621 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0648\u0627\u0633\u0639\u0629 \u0628\u0646\u0641\u0633 \u0627\u0644\u062B\u0642\u0629 \u0627\u0644\u0647\u0627\u062F\u0626\u0629 \u0627\u0644\u0645\u062A\u0648\u0642\u0639\u0629 \u0645\u0646 \u0639\u0627\u0626\u0644\u0629 Titan."
      ),
      images: carGallery("titan_blackedition", ["1920/sc_18_1.jpg", "1920/sc_20.jpg", "1920/sc_23_1.jpg"])
    }
  ],
  "titan_X8.html": [
    {
      id: "chapter-1",
      title: t("Expanded family stance", "Posture familiale \xE9tendue", "\u062D\u0636\u0648\u0631 \u0639\u0627\u0626\u0644\u064A \u0645\u0648\u0633\u0639"),
      summary: t(
        "Titan X8 opens with a broad SUV silhouette, a longer family-ready proportion, and a more practical visual stance than the ceremonial core Titan route.",
        "Titan X8 s\u2019ouvre sur une silhouette de SUV plus large, des proportions familiales allong\xE9es et une posture visuelle plus pratique que la Titan c\xE9r\xE9monielle.",
        "\u062A\u0628\u062F\u0623 Titan X8 \u0628\u0647\u064A\u0626\u0629 SUV \u0623\u0639\u0631\u0636 \u0648\u062A\u0646\u0627\u0633\u0628\u0627\u062A \u0623\u0637\u0648\u0644 \u0645\u0648\u062C\u0647\u0629 \u0644\u0644\u0639\u0627\u0626\u0644\u0629 \u0648\u062D\u0636\u0648\u0631 \u0628\u0635\u0631\u064A \u0623\u0643\u062B\u0631 \u0639\u0645\u0644\u064A\u0629 \u0645\u0646 \u0645\u0633\u0627\u0631 Titan \u0627\u0644\u0627\u062D\u062A\u0641\u0627\u0644\u064A."
      ),
      images: carGallery("titan_X8", ["1920/sc_1.jpg"])
    },
    {
      id: "chapter-2",
      title: t("Three-row usability", "Polyvalence trois rangs", "\u0639\u0645\u0644\u064A\u0629 \u0628\u062B\u0644\u0627\u062B\u0629 \u0635\u0641\u0648\u0641"),
      summary: t(
        "Its cabin story centers on access, usable third-row space, and calmer family comfort so the X8 reads as the more pragmatic large-SUV variant.",
        "Le r\xE9cit d\u2019habitacle met l\u2019accent sur l\u2019acc\xE8s, le vrai volume du troisi\xE8me rang et un confort familial plus calme afin que le X8 paraisse comme la variante la plus pragmatique.",
        "\u064A\u0631\u0643\u0632 \u0633\u0631\u062F \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0639\u0644\u0649 \u0633\u0647\u0648\u0644\u0629 \u0627\u0644\u062F\u062E\u0648\u0644 \u0648\u0627\u0644\u0645\u0633\u0627\u062D\u0629 \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629 \u0644\u0644\u0635\u0641 \u0627\u0644\u062B\u0627\u0644\u062B \u0648\u0631\u0627\u062D\u0629 \u0639\u0627\u0626\u0644\u064A\u0629 \u0623\u0643\u062B\u0631 \u0647\u062F\u0648\u0621\u064B\u0627 \u0644\u064A\u0638\u0647\u0631 X8 \u0628\u0648\u0635\u0641\u0647 \u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u0623\u0643\u062B\u0631 \u0639\u0645\u0644\u064A\u0629."
      ),
      images: carGallery("titan_X8", ["1920/sc_1.jpg"])
    },
    {
      id: "chapter-3",
      title: t("Road-trip calm", "S\xE9r\xE9nit\xE9 grand voyage", "\u0647\u062F\u0648\u0621 \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629"),
      summary: t(
        "Long-distance assurance, composed ride quality, and broad-shouldered SUV calm keep the X8 positioned as the family-touring expression of Titan.",
        "L\u2019assurance sur longue distance, la qualit\xE9 de roulage pos\xE9e et le calme SUV \xE0 large carrure positionnent le X8 comme l\u2019expression familiale routi\xE8re de Titan.",
        "\u064A\u062D\u0627\u0641\u0638 \u0627\u0644\u0627\u0637\u0645\u0626\u0646\u0627\u0646 \u0641\u064A \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629 \u0648\u0647\u062F\u0648\u0621 \u0627\u0644\u0631\u0643\u0648\u0628 \u0648\u062D\u0636\u0648\u0631 SUV \u0627\u0644\u0648\u0627\u062B\u0642 \u0639\u0644\u0649 \u062A\u0645\u0648\u0636\u0639 X8 \u0643\u062A\u0639\u0628\u064A\u0631 \u0639\u0627\u0626\u0644\u064A \u0645\u062E\u0635\u0635 \u0644\u0644\u0631\u062D\u0644\u0627\u062A \u0636\u0645\u0646 \u0639\u0627\u0626\u0644\u0629 Titan."
      ),
      images: carGallery("titan_X8", ["1920/sc_1.jpg"])
    },
    {
      id: "chapter-4",
      title: t("Flagship safety", "S\xE9curit\xE9 phare", "\u0633\u0644\u0627\u0645\u0629 \u0631\u0627\u0626\u062F\u0629"),
      summary: t(
        "Safety structure and battery protection close the route with the same reassuring Titan-family confidence, translated into a more family-focused package.",
        "La structure de s\xE9curit\xE9 et la protection de la batterie ferment le parcours avec la m\xEAme assurance de la famille Titan, traduite dans un ensemble plus familial.",
        "\u062A\u062E\u062A\u062A\u0645 \u0628\u0646\u064A\u0629 \u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0648\u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629 \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u0627\u0631 \u0628\u0646\u0641\u0633 \u062B\u0642\u0629 \u0639\u0627\u0626\u0644\u0629 Titan \u0627\u0644\u0645\u0637\u0645\u0626\u0646\u0629 \u0648\u0644\u0643\u0646 \u0636\u0645\u0646 \u062D\u0632\u0645\u0629 \u0623\u0643\u062B\u0631 \u062A\u0631\u0643\u064A\u0632\u064B\u0627 \u0639\u0644\u0649 \u0627\u0644\u0639\u0627\u0626\u0644\u0629."
      ),
      images: carGallery("titan_X8", ["1920/sc_1.jpg"])
    }
  ],
  "passion.html": [
    {
      id: "chapter-1",
      kicker: t("Sedan design", "Design berline", "\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0633\u064A\u062F\u0627\u0646"),
      title: t("Oriental flowing sedan stance", "Posture de berline fluide orientale", "\u0647\u064A\u0626\u0629 \u0633\u064A\u062F\u0627\u0646 \u0634\u0631\u0642\u064A\u0629 \u0627\u0646\u0633\u064A\u0627\u0628\u064A\u0629"),
      summary: t(
        "Passion presents a sleeker electric-sedan stance with crisp shoulder lines, cleaner surfacing, and a calmer premium expression tuned for executive travel.",
        "Passion affiche une posture de berline \xE9lectrique plus fluide, avec des \xE9paules nettes, des surfaces plus pures et une expression premium plus calme pens\xE9e pour le voyage ex\xE9cutif.",
        "\u062A\u0642\u062F\u0645 Passion \u0647\u064A\u0626\u0629 \u0633\u064A\u062F\u0627\u0646 \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0623\u0643\u062B\u0631 \u0627\u0646\u0633\u064A\u0627\u0628\u064A\u0629 \u0645\u0639 \u062E\u0637\u0648\u0637 \u0643\u062A\u0641 \u0648\u0627\u0636\u062D\u0629 \u0648\u0623\u0633\u0640\u0637\u062D \u0623\u0646\u0642\u0649 \u0648\u062A\u0639\u0628\u064A\u0631 \u0641\u0627\u062E\u0631 \u0623\u0643\u062B\u0631 \u0647\u062F\u0648\u0621\u064B\u0627 \u0645\u0647\u064A\u0623 \u0644\u0644\u0633\u0641\u0631 \u0627\u0644\u062A\u0646\u0641\u064A\u0630\u064A."
      ),
      images: carGallery("passion", ["1920/fl01.jpg", "1920/fl02.jpg", "1920/fl03.jpg", "1920/fl0331.jpg"])
    },
    {
      id: "chapter-2",
      kicker: t("Interior", "Habitacle", "\u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629"),
      title: t("Executive cabin comfort", "Confort cabine ex\xE9cutif", "\u0631\u0627\u062D\u0629 \u0645\u0642\u0635\u0648\u0631\u0629 \u062A\u0646\u0641\u064A\u0630\u064A\u0629"),
      summary: t(
        "The cabin chapter centers on quiet travel, refined front and rear seating, and a calmer interior rhythm that gives Passion a genuine grand-touring atmosphere.",
        "Le chapitre habitacle se concentre sur le voyage silencieux, des assises avant et arri\xE8re raffin\xE9es et un rythme int\xE9rieur plus apais\xE9 qui donne \xE0 Passion une vraie ambiance de grand tourisme.",
        "\u064A\u0631\u0643\u0632 \u0641\u0635\u0644 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0639\u0644\u0649 \u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u0647\u0627\u062F\u0626 \u0648\u0627\u0644\u0645\u0642\u0627\u0639\u062F \u0627\u0644\u0645\u0635\u0642\u0648\u0644\u0629 \u0641\u064A \u0627\u0644\u0623\u0645\u0627\u0645 \u0648\u0627\u0644\u062E\u0644\u0641 \u0648\u0625\u064A\u0642\u0627\u0639 \u062F\u0627\u062E\u0644\u064A \u0623\u0643\u062B\u0631 \u0633\u0643\u064A\u0646\u0629 \u064A\u0645\u0646\u062D Passion \u0623\u062C\u0648\u0627\u0621 \u0631\u062D\u0644\u0627\u062A \u0637\u0648\u064A\u0644\u0629 \u062D\u0642\u064A\u0642\u064A\u0629."
      ),
      images: carGallery("passion", ["1920/fl04.jpg", "1920/fl05.jpg", "1920/fl06.jpg", "1920/fl07.jpg"]),
      videos: ["/voyah-resources/images/car/passion/video_01.mp4"]
    },
    {
      id: "chapter-3",
      kicker: t("Digital cockpit", "Cockpit num\xE9rique", "\u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0631\u0642\u0645\u064A\u0629"),
      title: t("HarmonySpace digital cockpit", "Cockpit num\xE9rique HarmonySpace", "\u0645\u0642\u0635\u0648\u0631\u0629 \u0631\u0642\u0645\u064A\u0629 HarmonySpace"),
      summary: t(
        "Digital interaction, a wider display atmosphere, and connected travel logic give Passion a cleaner, more intelligent sedan identity without losing its composed tone.",
        "L\u2019interaction num\xE9rique, l\u2019atmosph\xE8re d\u2019affichage \xE9largie et la logique de voyage connect\xE9 donnent \xE0 Passion une identit\xE9 de berline plus intelligente sans perdre sa retenue.",
        "\u062A\u0645\u0646\u062D \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u0627\u062A \u0627\u0644\u0631\u0642\u0645\u064A\u0629 \u0648\u0623\u062C\u0648\u0627\u0621 \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u0623\u0639\u0631\u0636 \u0648\u0645\u0646\u0637\u0642 \u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u0645\u062A\u0635\u0644 Passion \u0647\u0648\u064A\u0629 \u0633\u064A\u062F\u0627\u0646 \u0623\u0643\u062B\u0631 \u0630\u0643\u0627\u0621\u064B \u0645\u0646 \u062F\u0648\u0646 \u0641\u0642\u062F\u0627\u0646 \u0646\u0628\u0631\u062A\u0647\u0627 \u0627\u0644\u0645\u062A\u0632\u0646\u0629."
      ),
      images: carGallery("passion", ["1920/fl10.jpg", "1920/fl11.jpg", "1920/fl14.jpg", "1920/fl21.jpg"])
    },
    {
      id: "chapter-4",
      kicker: t("Dynamics", "Dynamique", "\u0627\u0644\u062F\u064A\u0646\u0627\u0645\u064A\u0643\u064A\u0627\u062A"),
      title: t("Touring confidence", "Confiance grand tourisme", "\u062B\u0642\u0629 \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629"),
      summary: t(
        "Chassis tuning, intelligent safety logic, and long-distance composure close the route with the same measured confidence expected from Voyah\u2019s executive sedan family.",
        "Le r\xE9glage du ch\xE2ssis, la logique de s\xE9curit\xE9 intelligente et la s\xE9r\xE9nit\xE9 longue distance concluent le parcours avec la m\xEAme ma\xEEtrise attendue de la famille de berlines ex\xE9cutives Voyah.",
        "\u062A\u062E\u062A\u062A\u0645 \u0645\u0639\u0627\u064A\u0631\u0629 \u0627\u0644\u0647\u064A\u0643\u0644 \u0648\u0645\u0646\u0637\u0642 \u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0630\u0643\u064A \u0648\u0647\u062F\u0648\u0621 \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629 \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u0627\u0631 \u0628\u0646\u0641\u0633 \u0627\u0644\u062B\u0642\u0629 \u0627\u0644\u0645\u062A\u0632\u0646\u0629 \u0627\u0644\u0645\u062A\u0648\u0642\u0639\u0629 \u0645\u0646 \u0639\u0627\u0626\u0644\u0629 \u0633\u064A\u062F\u0627\u0646 Voyah \u0627\u0644\u062A\u0646\u0641\u064A\u0630\u064A\u0629."
      ),
      images: carGallery("passion", ["1920/fl15.jpg", "1920/fl1701.jpg", "1920/fl1703.jpg", "1920/fl1802.jpg"])
    },
    {
      id: "chapter-5",
      kicker: t("Safety", "S\xE9curit\xE9", "\u0627\u0644\u0633\u0644\u0627\u0645\u0629"),
      title: t("Protective sedan assurance", "Assurance protectrice de la berline", "\u0637\u0645\u0623\u0646\u064A\u0646\u0629 \u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0633\u064A\u062F\u0627\u0646"),
      summary: t(
        "A reinforced body strategy, clear driver-assistance story, and calmer long-route confidence let Passion finish on a more premium safety note.",
        "Une strat\xE9gie de carrosserie renforc\xE9e, un r\xE9cit clair de la conduite assist\xE9e et une confiance plus apais\xE9e sur longue distance permettent \xE0 Passion de se conclure sur une note de s\xE9curit\xE9 plus premium.",
        "\u062A\u0645\u0646\u062D \u0628\u0646\u064A\u0629 \u0627\u0644\u0647\u064A\u0643\u0644 \u0627\u0644\u0645\u0639\u0632\u0632\u0629 \u0648\u0645\u0633\u0627\u0631 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0648\u0627\u0636\u062D \u0648\u0627\u0644\u062B\u0642\u0629 \u0627\u0644\u0647\u0627\u062F\u0626\u0629 \u0641\u064A \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629 Passion \u062E\u0627\u062A\u0645\u0629 \u0633\u0644\u0627\u0645\u0629 \u0623\u0643\u062B\u0631 \u0641\u062E\u0627\u0645\u0629."
      ),
      images: carGallery("passion", ["1920/fl1805.jpg", "1920/fl1808.jpg", "1920/fl1820.jpg"])
    }
  ],
  "free.html": [
    {
      id: "chapter-1",
      kicker: t("Exterior", "Ext\xE9rieur", "\u0627\u0644\u062E\u0627\u0631\u062C\u064A\u0629"),
      title: t("Long-range crossover design", "Design crossover longue autonomie", "\u062A\u0635\u0645\u064A\u0645 \u0643\u0631\u0648\u0633 \u0623\u0648\u0641\u0631 \u0628\u0639\u064A\u062F \u0627\u0644\u0645\u062F\u0649"),
      summary: t(
        "FREE 318 opens with a long-range crossover expression, elevated stance, and touring-oriented SUV proportions that feel calmer and more road-trip focused than a city SUV.",
        "FREE 318 s\u2019ouvre sur une expression de crossover longue autonomie, une posture sur\xE9lev\xE9e et des proportions de SUV pens\xE9es pour le voyage, plus apais\xE9es qu\u2019un SUV urbain.",
        "\u062A\u0628\u062F\u0623 FREE 318 \u0628\u062A\u0639\u0628\u064A\u0631 \u0643\u0631\u0648\u0633 \u0623\u0648\u0641\u0631 \u0628\u0639\u064A\u062F \u0627\u0644\u0645\u062F\u0649 \u0645\u0639 \u062D\u0636\u0648\u0631 \u0645\u0631\u062A\u0641\u0639 \u0648\u062A\u0646\u0627\u0633\u0628\u0627\u062A SUV \u0645\u0648\u062C\u0647\u0629 \u0644\u0644\u0633\u0641\u0631 \u062A\u0628\u062F\u0648 \u0623\u0647\u062F\u0623 \u0648\u0623\u0643\u062B\u0631 \u062A\u0631\u0643\u064A\u0632\u064B\u0627 \u0639\u0644\u0649 \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0645\u0646 SUV \u0627\u0644\u0645\u062F\u0646\u064A\u0629."
      ),
      images: carGallery("free", ["bg-free-h97D-1.jpg", "bg-free-h97D-4.jpg", "bg_free_pc4_0002_1920.jpg", "bg_free_pc15_0001_1920.jpg"])
    },
    {
      id: "chapter-2",
      kicker: t("Comfort", "Confort", "\u0627\u0644\u0631\u0627\u062D\u0629"),
      title: t("Relaxed touring comfort", "Confort de voyage apais\xE9", "\u0631\u0627\u062D\u0629 \u0633\u0641\u0631 \u0645\u0631\u064A\u062D\u0629"),
      summary: t(
        "The cabin chapter emphasizes everyday comfort, calm seating, and a more relaxed premium rhythm that makes FREE 318 feel tuned for longer journeys.",
        "Le chapitre habitacle met l\u2019accent sur le confort quotidien, des si\xE8ges paisibles et un rythme premium plus d\xE9tendu qui fait sentir FREE 318 pens\xE9e pour la grande route.",
        "\u064A\u0631\u0643\u0632 \u0641\u0635\u0644 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0639\u0644\u0649 \u0627\u0644\u0631\u0627\u062D\u0629 \u0627\u0644\u064A\u0648\u0645\u064A\u0629 \u0648\u0627\u0644\u0645\u0642\u0627\u0639\u062F \u0627\u0644\u0647\u0627\u062F\u0626\u0629 \u0648\u0625\u064A\u0642\u0627\u0639 \u0641\u0627\u062E\u0631 \u0623\u0643\u062B\u0631 \u0627\u0633\u062A\u0631\u062E\u0627\u0621\u064B \u064A\u062C\u0639\u0644 FREE 318 \u0645\u0647\u064A\u0623\u0629 \u0644\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0623\u0637\u0648\u0644."
      ),
      images: carGallery("free", ["bg_free_pc21_0001.jpg", "bg_free_pc21_0003.jpg", "bg_free_pc23_0001.jpg", "bg_free_pc28_0001_1920.jpg"])
    },
    {
      id: "chapter-3",
      kicker: t("Digital cockpit", "Cockpit num\xE9rique", "\u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0631\u0642\u0645\u064A\u0629"),
      title: t("Smart cockpit confidence", "Confiance du cockpit intelligent", "\u062B\u0642\u0629 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0630\u0643\u064A\u0629"),
      summary: t(
        "Harmony-style interaction, connected travel logic, and reassuring digital assistance give FREE 318 a calmer smart-cockpit character.",
        "L\u2019interaction de style Harmony, la logique de voyage connect\xE9e et l\u2019assistance num\xE9rique rassurante donnent \xE0 FREE 318 un caract\xE8re de cockpit intelligent plus serein.",
        "\u062A\u0645\u0646\u062D \u062A\u0641\u0627\u0639\u0644\u0627\u062A Harmony \u0648\u0645\u0646\u0637\u0642 \u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u0645\u062A\u0635\u0644 \u0648\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0631\u0642\u0645\u064A\u0629 \u0627\u0644\u0645\u0637\u0645\u0626\u0646\u0629 FREE 318 \u0637\u0627\u0628\u0639 \u0645\u0642\u0635\u0648\u0631\u0629 \u0630\u0643\u064A\u0629 \u0623\u0643\u062B\u0631 \u0647\u062F\u0648\u0621\u064B\u0627."
      ),
      images: carGallery("free", ["bg_free_pc29_0001.jpg", "bg_free_pc29_0002.jpg", "bg_free_pc30_0001.jpg", "bg_free_pc31_0001.jpg"]),
      videos: ["/voyah-resources/images/car/free/video_01.mp4"]
    },
    {
      id: "chapter-4",
      kicker: t("Range and charging", "Autonomie et recharge", "\u0627\u0644\u0645\u062F\u0649 \u0648\u0627\u0644\u0634\u062D\u0646"),
      title: t("Electric confidence", "Confiance \xE9lectrique", "\u062B\u0642\u0629 \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629"),
      summary: t(
        "Battery assurance, charging convenience, and long-range calm keep the model positioned as a confident touring crossover rather than a simple trim update.",
        "L\u2019assurance batterie, la praticit\xE9 de recharge et le calme longue autonomie positionnent le mod\xE8le comme un crossover de voyage convaincant plut\xF4t qu\u2019une simple \xE9volution.",
        "\u064A\u062D\u0627\u0641\u0638 \u0627\u0644\u0627\u0637\u0645\u0626\u0646\u0627\u0646 \u0625\u0644\u0649 \u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629 \u0648\u0633\u0647\u0648\u0644\u0629 \u0627\u0644\u0634\u062D\u0646 \u0648\u0647\u062F\u0648\u0621 \u0627\u0644\u0645\u062F\u0649 \u0627\u0644\u0637\u0648\u064A\u0644 \u0639\u0644\u0649 \u062A\u0645\u0648\u0636\u0639 \u0627\u0644\u0637\u0631\u0627\u0632 \u0643\u0643\u0631\u0648\u0633 \u0623\u0648\u0641\u0631 \u0648\u0627\u062B\u0642 \u0644\u0644\u0631\u062D\u0644\u0627\u062A \u0644\u0627 \u0645\u062C\u0631\u062F \u062A\u062D\u062F\u064A\u062B \u0628\u0633\u064A\u0637."
      ),
      images: carGallery("free", ["bg_free_pc35_0001_1920.jpg", "bg_free_pc36_0001.jpg", "bg_free_pc37_0002.jpg", "bg_free_pc38_0001.jpg"])
    },
    {
      id: "chapter-5",
      kicker: t("Safety and usability", "S\xE9curit\xE9 et usage", "\u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0648\u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645"),
      title: t("Everyday versatility", "Polyvalence quotidienne", "\u062A\u0646\u0648\u0639 \u064A\u0648\u0645\u064A"),
      summary: t(
        "Usability, comfort, and premium practicality close the page in a more family-ready crossover tone with a stronger everyday-luxury message.",
        "L\u2019usage, le confort et la praticit\xE9 premium concluent la page dans un ton de crossover plus familial avec un message de luxe quotidien plus clair.",
        "\u062A\u064F\u062E\u062A\u062A\u0645 \u0627\u0644\u0635\u0641\u062D\u0629 \u0628\u0631\u0648\u062D \u0643\u0631\u0648\u0633 \u0623\u0648\u0641\u0631 \u0623\u0643\u062B\u0631 \u062C\u0627\u0647\u0632\u064A\u0629 \u0644\u0644\u0639\u0627\u0626\u0644\u0629 \u0639\u0628\u0631 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0648\u0627\u0644\u0631\u0627\u062D\u0629 \u0648\u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0641\u0627\u062E\u0631\u0629 \u0645\u0639 \u0631\u0633\u0627\u0644\u0629 \u0623\u0648\u0636\u062D \u0639\u0646 \u0627\u0644\u0641\u062E\u0627\u0645\u0629 \u0627\u0644\u064A\u0648\u0645\u064A\u0629."
      ),
      images: carGallery("free", ["bg_free_pc27_0006.jpg", "bg_free_pc28_0001_1920.jpg", "bg_free_pc29_0003.jpg"])
    }
  ],
  "courage.html": [
    {
      id: "chapter-1",
      kicker: t("Exterior", "Ext\xE9rieur", "\u0627\u0644\u062E\u0627\u0631\u062C\u064A\u0629"),
      title: t("Original electric SUV design", "Design original de SUV \xE9lectrique", "\u062A\u0635\u0645\u064A\u0645 SUV \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0623\u0635\u064A\u0644"),
      summary: t(
        "Courage opens with a clearer family-electric stance, expressive surfaces, and a more approachable SUV identity than the newer launch-led route.",
        "Courage s\u2019ouvre sur une posture familiale \xE9lectrique plus lisible, des surfaces expressives et une identit\xE9 SUV plus accessible que la route de lancement plus r\xE9cente.",
        "\u062A\u0628\u062F\u0623 Courage \u0628\u062D\u0636\u0648\u0631 \u0639\u0627\u0626\u0644\u064A \u0643\u0647\u0631\u0628\u0627\u0626\u064A \u0623\u0648\u0636\u062D \u0648\u0623\u0633\u0640\u0637\u062D \u062A\u0639\u0628\u064A\u0631\u064A\u0629 \u0648\u0647\u0648\u064A\u0629 SUV \u0623\u0643\u062B\u0631 \u0642\u0631\u0628\u064B\u0627 \u0645\u0646 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0645\u0642\u0627\u0631\u0646\u0629 \u0628\u0627\u0644\u0645\u0633\u0627\u0631 \u0627\u0644\u0623\u062D\u062F\u062B \u0628\u0637\u0627\u0628\u0639 \u0627\u0644\u0625\u0637\u0644\u0627\u0642."
      ),
      images: carGallery("courage", ["1920/h37_pc01_0001.jpg", "1920/h37_pc02_0001.jpg", "1920/h37_pc03_0001.jpg", "1920/h37_pc03_1_0001.jpg"])
    },
    {
      id: "chapter-2",
      kicker: t("Cabin", "Habitacle", "\u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629"),
      title: t("Family comfort cabin", "Habitacle confort familial", "\u0645\u0642\u0635\u0648\u0631\u0629 \u0631\u0627\u062D\u0629 \u0639\u0627\u0626\u0644\u064A\u0629"),
      summary: t(
        "The cabin chapter focuses on easier daily comfort, softer lounge-like space, and a more practical family rhythm than a dramatic showpiece interior.",
        "Le chapitre habitacle met l\u2019accent sur un confort quotidien plus simple, un espace plus doux fa\xE7on salon et un rythme familial plus pratique qu\u2019un int\xE9rieur d\xE9monstratif.",
        "\u064A\u0631\u0643\u0632 \u0641\u0635\u0644 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0639\u0644\u0649 \u0631\u0627\u062D\u0629 \u064A\u0648\u0645\u064A\u0629 \u0623\u0633\u0647\u0644 \u0648\u0645\u0633\u0627\u062D\u0629 \u0623\u0647\u062F\u0623 \u0628\u0637\u0627\u0628\u0639 \u0627\u0644\u0635\u0627\u0644\u0648\u0646 \u0648\u0625\u064A\u0642\u0627\u0639 \u0639\u0627\u0626\u0644\u064A \u0623\u0643\u062B\u0631 \u0639\u0645\u0644\u064A\u0629 \u0645\u0646 \u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0633\u062A\u0639\u0631\u0627\u0636\u064A\u0629."
      ),
      images: carGallery("courage", ["1920/h37_pc04_0001.jpg", "1920/h37_pc05_1_0001.jpg", "1920/h37_pc06_0001.jpg", "1920/h37_pc07_0001.jpg"])
    },
    {
      id: "chapter-3",
      kicker: t("Smart cockpit", "Cockpit intelligent", "\u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0630\u0643\u064A\u0629"),
      title: t("Connected family cockpit", "Cockpit familial connect\xE9", "\u0645\u0642\u0635\u0648\u0631\u0629 \u0639\u0627\u0626\u0644\u064A\u0629 \u0645\u062A\u0635\u0644\u0629"),
      summary: t(
        "Digital displays, connected controls, and everyday-friendly cabin logic give Courage a practical intelligent-cockpit identity.",
        "Les affichages num\xE9riques, les commandes connect\xE9es et la logique d\u2019habitacle pens\xE9e pour le quotidien donnent \xE0 Courage une identit\xE9 de cockpit intelligent pratique.",
        "\u062A\u0645\u0646\u062D \u0627\u0644\u0634\u0627\u0634\u0627\u062A \u0627\u0644\u0631\u0642\u0645\u064A\u0629 \u0648\u0623\u062F\u0648\u0627\u062A \u0627\u0644\u062A\u062D\u0643\u0645 \u0627\u0644\u0645\u062A\u0635\u0644\u0629 \u0648\u0645\u0646\u0637\u0642 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0647\u064A\u0623 \u0644\u0644\u062D\u064A\u0627\u0629 \u0627\u0644\u064A\u0648\u0645\u064A\u0629 Courage \u0647\u0648\u064A\u0629 \u0645\u0642\u0635\u0648\u0631\u0629 \u0630\u0643\u064A\u0629 \u0639\u0645\u0644\u064A\u0629."
      ),
      images: carGallery("courage", ["1920/h37_pc10_0001.jpg", "1920/h37_pc11_0001.jpg", "1920/h37_pc12_0001.jpg", "1920/h37_pc13_0001.jpg"])
    },
    {
      id: "chapter-4",
      kicker: t("Intelligent driving", "Conduite intelligente", "\u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0627\u0644\u0630\u0643\u064A\u0629"),
      title: t("Assisted travel confidence", "Confiance de voyage assist\xE9", "\u062B\u0642\u0629 \u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u0645\u0633\u0627\u0639\u062F"),
      summary: t(
        "Driver-assistance features, parking support, and calmer road awareness position Courage as an everyday intelligent SUV rather than a pure launch showcase.",
        "Les aides \xE0 la conduite, l\u2019assistance au stationnement et la conscience routi\xE8re plus sereine positionnent Courage comme un SUV intelligent du quotidien plut\xF4t qu\u2019une pure vitrine de lancement.",
        "\u062A\u0636\u0639 \u0645\u064A\u0632\u0627\u062A \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0639\u0644\u0649 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0648\u062F\u0639\u0645 \u0627\u0644\u0631\u0643\u0646 \u0648\u0627\u0644\u0648\u0639\u064A \u0627\u0644\u0647\u0627\u062F\u0626 \u0628\u0627\u0644\u0637\u0631\u064A\u0642 Courage \u0643\u0633\u0640\u064A\u0627\u0631\u0629 SUV \u0630\u0643\u064A\u0629 \u0644\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u064A\u0648\u0645\u064A \u0644\u0627 \u0645\u062C\u0631\u062F \u0645\u0646\u0635\u0629 \u0627\u0633\u062A\u0639\u0631\u0627\u0636\u064A\u0629."
      ),
      images: carGallery("courage", ["1920/h37_pc14_0001.jpg", "1920/h37_pc15_0001.jpg", "1920/h37_pc16_0001.jpg", "1920/h37_pc17_0001.jpg"])
    },
    {
      id: "chapter-5",
      kicker: t("Efficiency", "Efficience", "\u0627\u0644\u0643\u0641\u0627\u0621\u0629"),
      title: t("Electric range and calm", "Autonomie \xE9lectrique et s\xE9r\xE9nit\xE9", "\u0627\u0644\u0645\u062F\u0649 \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A \u0648\u0627\u0644\u0647\u062F\u0648\u0621"),
      summary: t(
        "Battery capacity, high-voltage confidence, and calmer long-route efficiency close the page with a more grounded electric-SUV promise.",
        "La capacit\xE9 batterie, la confiance haute tension et l\u2019efficience plus sereine sur longue distance concluent la page avec une promesse de SUV \xE9lectrique plus concr\xE8te.",
        "\u062A\u062E\u062A\u062A\u0645 \u0633\u0639\u0629 \u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629 \u0648\u0627\u0644\u062B\u0642\u0629 \u0641\u064A \u0627\u0644\u062C\u0647\u062F \u0627\u0644\u0639\u0627\u0644\u064A \u0648\u0627\u0644\u0643\u0641\u0627\u0621\u0629 \u0627\u0644\u0647\u0627\u062F\u0626\u0629 \u0641\u064A \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629 \u0627\u0644\u0635\u0641\u062D\u0629 \u0628\u0648\u0639\u062F \u0623\u0643\u062B\u0631 \u0648\u0627\u0642\u0639\u064A\u0629 \u0644\u0633\u064A\u0627\u0631\u0629 SUV \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629."
      ),
      images: carGallery("courage", ["1920/h37_pc18_0001.jpg", "1920/h37_pc19_0001.jpg", "1920/h37_pc21_0001.jpg", "1920/h37_pc22_0001.jpg"])
    },
    {
      id: "chapter-6",
      kicker: t("Safety", "S\xE9curit\xE9", "\u0627\u0644\u0633\u0644\u0627\u0645\u0629"),
      title: t("Protective family assurance", "Assurance familiale protectrice", "\u0637\u0645\u0623\u0646\u064A\u0646\u0629 \u0639\u0627\u0626\u0644\u064A\u0629 \u062D\u0627\u0645\u064A\u0629"),
      summary: t(
        "Body protection, battery security, and family reassurance finish Courage with a balanced, practical premium tone.",
        "La protection de la carrosserie, la s\xE9curit\xE9 batterie et la r\xE9assurance familiale concluent Courage avec une tonalit\xE9 premium \xE9quilibr\xE9e et pratique.",
        "\u062A\u062E\u062A\u062A\u0645 \u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0647\u064A\u0643\u0644 \u0648\u0623\u0645\u0627\u0646 \u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629 \u0648\u0627\u0644\u0637\u0645\u0623\u0646\u064A\u0646\u0629 \u0627\u0644\u0639\u0627\u0626\u0644\u064A\u0629 Courage \u0628\u0646\u0628\u0631\u0629 \u0641\u0627\u062E\u0631\u0629 \u0645\u062A\u0648\u0627\u0632\u0646\u0629 \u0648\u0639\u0645\u0644\u064A\u0629."
      ),
      images: carGallery("courage", ["1920/h37_pc24_0001.jpg", "1920/h37_pc25_0001.jpg", "1920/h37_pc26_0001.jpg", "1920/h37_pc28_0001.jpg"])
    }
  ],
  "dreamer-champion.html": [
    {
      id: "chapter-1",
      kicker: t("Special edition", "\xC9dition sp\xE9ciale", "\u0625\u0635\u062F\u0627\u0631 \u062E\u0627\u0635"),
      title: t("Champion edition presence", "Pr\xE9sence d\u2019\xE9dition Champion", "\u062D\u0636\u0648\u0631 \u0625\u0635\u062F\u0627\u0631 Champion"),
      summary: t(
        "Dreamer Champion opens with a ceremonial MPV presence, stronger premium detailing, and a more special-edition character than the standard Dreamer family routes.",
        "Dreamer Champion s\u2019ouvre sur une pr\xE9sence de MPV c\xE9r\xE9monielle, un traitement premium plus affirm\xE9 et un caract\xE8re plus exclusif que les routes Dreamer standards.",
        "\u062A\u0628\u062F\u0623 Dreamer Champion \u0628\u062D\u0636\u0648\u0631 MPV \u0627\u062D\u062A\u0641\u0627\u0644\u064A \u0648\u062A\u0641\u0627\u0635\u064A\u0644 \u0641\u0627\u062E\u0631\u0629 \u0623\u0643\u062B\u0631 \u0648\u0636\u0648\u062D\u064B\u0627 \u0648\u0634\u062E\u0635\u064A\u0629 \u0625\u0635\u062F\u0627\u0631 \u062E\u0627\u0635 \u0623\u0642\u0648\u0649 \u0645\u0646 \u0645\u0633\u0627\u0631\u0627\u062A Dreamer \u0627\u0644\u0642\u064A\u0627\u0633\u064A\u0629."
      ),
      images: carGallery("dreamer-champion", ["kv_1920.jpg", "bg_2_n_1920.jpg", "bg_3_n.jpg", "bg_6_n_1920.jpg"])
    },
    {
      id: "chapter-2",
      kicker: t("Hospitality cabin", "Habitacle hospitalit\xE9", "\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0636\u064A\u0627\u0641\u0629"),
      title: t("Executive lounge comfort", "Confort lounge ex\xE9cutif", "\u0631\u0627\u062D\u0629 \u0635\u0627\u0644\u0648\u0646 \u062A\u0646\u0641\u064A\u0630\u064A"),
      summary: t(
        "Second-row comfort, ceremonial seating atmosphere, and a quieter hospitality-first cabin make Champion feel more curated than the regular Dreamer routes.",
        "Le confort du deuxi\xE8me rang, l\u2019atmosph\xE8re c\xE9r\xE9monielle des si\xE8ges et un habitacle plus silencieux ax\xE9 sur l\u2019hospitalit\xE9 rendent Champion plus soigneusement compos\xE9 que les routes Dreamer classiques.",
        "\u062A\u062C\u0639\u0644 \u0631\u0627\u062D\u0629 \u0627\u0644\u0635\u0641 \u0627\u0644\u062B\u0627\u0646\u064A \u0648\u0623\u062C\u0648\u0627\u0621 \u0627\u0644\u0645\u0642\u0627\u0639\u062F \u0627\u0644\u0627\u062D\u062A\u0641\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0623\u0643\u062B\u0631 \u0647\u062F\u0648\u0621\u064B\u0627 \u0627\u0644\u0645\u0648\u062C\u0647\u0629 \u0644\u0644\u0636\u064A\u0627\u0641\u0629 Champion \u0623\u0643\u062B\u0631 \u0639\u0646\u0627\u064A\u0629 \u0645\u0646 \u0645\u0633\u0627\u0631\u0627\u062A Dreamer \u0627\u0644\u0639\u0627\u062F\u064A\u0629."
      ),
      images: carGallery("dreamer-champion", ["bg_11_n_1920.jpg", "bg_12_n_banner01.jpg", "bg_13_n_1920.jpg", "bg_14_n.jpg"])
    },
    {
      id: "chapter-3",
      kicker: t("Smart cockpit", "Cockpit intelligent", "\u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0630\u0643\u064A\u0629"),
      title: t("Connected executive cockpit", "Cockpit ex\xE9cutif connect\xE9", "\u0645\u0642\u0635\u0648\u0631\u0629 \u062A\u0646\u0641\u064A\u0630\u064A\u0629 \u0645\u062A\u0635\u0644\u0629"),
      summary: t(
        "Harmony-style interaction, intelligent assistance, and premium rear-cabin technology give Champion a stronger executive-tech identity.",
        "L\u2019interaction de style Harmony, l\u2019assistance intelligente et la technologie premium pour la partie arri\xE8re donnent \xE0 Champion une identit\xE9 techno-ex\xE9cutive plus affirm\xE9e.",
        "\u062A\u0645\u0646\u062D \u062A\u0641\u0627\u0639\u0644\u0627\u062A Harmony \u0648\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0630\u0643\u064A\u0629 \u0648\u062A\u0642\u0646\u064A\u0627\u062A \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u062E\u0644\u0641\u064A\u0629 \u0627\u0644\u0641\u0627\u062E\u0631\u0629 Champion \u0647\u0648\u064A\u0629 \u062A\u0646\u0641\u064A\u0630\u064A\u0629 \u062A\u0642\u0646\u064A\u0629 \u0623\u0643\u062B\u0631 \u0648\u0636\u0648\u062D\u064B\u0627."
      ),
      images: carGallery("dreamer-champion", ["bg_15_n_1920.jpg", "bg_16_n_banner01.jpg", "bg_17_n_banner01.jpg", "bg_18_n_1920.jpg"])
    },
    {
      id: "chapter-4",
      kicker: t("Safety and travel", "S\xE9curit\xE9 et voyage", "\u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0648\u0627\u0644\u0633\u0641\u0631"),
      title: t("Long-route assurance", "Assurance longue distance", "\u062B\u0642\u0629 \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629"),
      summary: t(
        "Body protection, calm long-route tuning, and MPV family reassurance close the route with a more special-edition interpretation of Dreamer confidence.",
        "La protection de la carrosserie, la s\xE9r\xE9nit\xE9 sur longue distance et la r\xE9assurance familiale d\u2019un MPV concluent le parcours avec une interpr\xE9tation plus sp\xE9ciale de la confiance Dreamer.",
        "\u062A\u062E\u062A\u062A\u0645 \u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0647\u064A\u0643\u0644 \u0648\u0647\u062F\u0648\u0621 \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629 \u0648\u0637\u0645\u0623\u0646\u064A\u0646\u0629 MPV \u0627\u0644\u0639\u0627\u0626\u0644\u064A\u0629 \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u0627\u0631 \u0628\u062A\u0641\u0633\u064A\u0631 \u0623\u0643\u062B\u0631 \u062E\u0635\u0648\u0635\u064A\u0629 \u0644\u062B\u0642\u0629 Dreamer."
      ),
      images: carGallery("dreamer-champion", ["bg_19_n_banner01.jpg", "bg_20_n_banner01.jpg", "bg_21_n_1920.jpg", "bg_24_n_banner01.jpg"])
    }
  ],
  "dreamriver.html": [
    {
      id: "chapter-1",
      title: t("Scenic edition presence", "Pr\xE9sence d\u2019\xE9dition panoramique", "\u062D\u0636\u0648\u0631 \u0625\u0635\u062F\u0627\u0631 \u0645\u0634\u0647\u062F\u064A"),
      summary: t(
        "Dreamer Mountain River opens with a scenic, hospitality-first interpretation of the Dreamer MPV shape.",
        "Dreamer Mountain River s\u2019ouvre sur une interpr\xE9tation panoramique et hospitali\xE8re de la silhouette MPV Dreamer.",
        "\u062A\u0628\u062F\u0623 Dreamer Mountain River \u0628\u062A\u0641\u0633\u064A\u0631 \u0645\u0634\u0647\u062F\u064A \u0648\u0637\u0627\u0628\u0639 \u0636\u064A\u0627\u0641\u0629 \u0623\u0648\u0644\u064B\u0627 \u0644\u0634\u0643\u0644 Dreamer MPV."
      ),
      images: carGallery("dreamriver", ["kv_1920.png", "sc_2.png", "sc_4.png"])
    },
    {
      id: "chapter-2",
      title: t("Warm lounge cabin", "Cabine salon chaleureuse", "\u0645\u0642\u0635\u0648\u0631\u0629 \u0635\u0627\u0644\u0648\u0646 \u062F\u0627\u0641\u0626\u0629"),
      summary: t(
        "The interior narrative emphasizes relaxed seating, shared travel comfort, and a calmer family lounge mood.",
        "Le r\xE9cit int\xE9rieur met l\u2019accent sur des si\xE8ges d\xE9tendus, un confort de voyage partag\xE9 et une ambiance salon familiale plus calme.",
        "\u064A\u0631\u0643\u0632 \u0627\u0644\u0633\u0631\u062F \u0627\u0644\u062F\u0627\u062E\u0644\u064A \u0639\u0644\u0649 \u0627\u0644\u062C\u0644\u0633\u0629 \u0627\u0644\u0645\u0631\u064A\u062D\u0629 \u0648\u0631\u0627\u062D\u0629 \u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u0645\u0634\u062A\u0631\u0643\u0629 \u0648\u0623\u062C\u0648\u0627\u0621 \u0635\u0627\u0644\u0648\u0646 \u0639\u0627\u0626\u0644\u064A\u0629 \u0623\u0643\u062B\u0631 \u0647\u062F\u0648\u0621\u064B\u0627."
      ),
      images: carGallery("dreamriver", ["sc_5.png", "sc_6.png", "sc_7.png"])
    },
    {
      id: "chapter-3",
      title: t("Travel calm", "S\xE9r\xE9nit\xE9 de voyage", "\u0647\u062F\u0648\u0621 \u0627\u0644\u0633\u0641\u0631"),
      summary: t(
        "Long-distance composure and family-oriented calm keep the edition feeling like a scenic companion rather than a standard trim.",
        "La s\xE9r\xE9nit\xE9 longue distance et le calme orient\xE9 famille font de cette \xE9dition un compagnon de voyage sc\xE9nique plut\xF4t qu\u2019une finition ordinaire.",
        "\u062A\u062D\u0627\u0641\u0638 \u0627\u0644\u062B\u0642\u0629 \u0641\u064A \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629 \u0648\u0627\u0644\u0647\u062F\u0648\u0621 \u0627\u0644\u0645\u0648\u062C\u0647 \u0644\u0644\u0639\u0627\u0626\u0644\u0629 \u0639\u0644\u0649 \u0625\u062D\u0633\u0627\u0633 \u0627\u0644\u0625\u0635\u062F\u0627\u0631 \u0628\u0648\u0635\u0641\u0647 \u0631\u0641\u064A\u0642\u064B\u0627 \u0645\u0634\u0647\u062F\u064A\u064B\u0627 \u0644\u0627 \u0645\u062C\u0631\u062F \u0641\u0626\u0629 \u0639\u0627\u062F\u064A\u0629."
      ),
      images: carGallery("dreamriver", ["sc_8.png", "sc_5.png", "sc_6.png"])
    },
    {
      id: "chapter-4",
      title: t("Shared journeys", "Voyages partag\xE9s", "\u0631\u062D\u0644\u0627\u062A \u0645\u0634\u062A\u0631\u0643\u0629"),
      summary: t(
        "The final chapter closes with safety and shared-travel reassurance, keeping the Mountain River tone elegant and familial.",
        "Le dernier chapitre se ferme sur la s\xE9curit\xE9 et la confiance du voyage partag\xE9, en conservant un ton \xE9l\xE9gant et familial.",
        "\u064A\u062E\u062A\u062A\u0645 \u0627\u0644\u0641\u0635\u0644 \u0627\u0644\u0623\u062E\u064A\u0631 \u0628\u0637\u0645\u0623\u0646\u064A\u0646\u0629 \u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0648\u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u0645\u0634\u062A\u0631\u0643 \u0645\u0639 \u0627\u0644\u062D\u0641\u0627\u0638 \u0639\u0644\u0649 \u0646\u0628\u0631\u0629 \u0623\u0646\u064A\u0642\u0629 \u0648\u0639\u0627\u0626\u0644\u064A\u0629."
      ),
      images: carGallery("dreamriver", ["sc_2.png", "sc_7.png", "sc_8.png"])
    }
  ],
  "dreamer.html": [
    {
      id: "chapter-1",
      title: t("Luxury MPV presence", "Pr\xE9sence MPV de luxe", "\u062D\u0636\u0648\u0631 MPV \u0641\u0627\u062E\u0631\u0629"),
      summary: t(
        "The 24 Dreamer opens with a broad luxury MPV presence and a strong family-first cabin story.",
        "Le Dreamer 24 s\u2019ouvre sur une large pr\xE9sence de MPV de luxe et un r\xE9cit d\u2019habitacle centr\xE9 sur la famille.",
        "\u062A\u0628\u062F\u0623 Dreamer 24 \u0628\u062D\u0636\u0648\u0631 MPV \u0641\u062E\u0645 \u0648\u0627\u0633\u0639 \u0648\u0642\u0635\u0629 \u0645\u0642\u0635\u0648\u0631\u0629 \u0645\u0648\u062C\u0647\u0629 \u0644\u0644\u0639\u0627\u0626\u0644\u0629."
      ),
      images: carGallery("dreamer", ["bg_2_1920.jpg", "bg_6_1920.jpg", "bg_13_1920.jpg"])
    },
    {
      id: "chapter-2",
      title: t("Rear cabin comfort", "Confort arri\xE8re", "\u0631\u0627\u062D\u0629 \u0627\u0644\u0635\u0641 \u0627\u0644\u062E\u0644\u0641\u064A"),
      summary: t(
        "The cabin chapter focuses on second and third-row comfort, generous packaging, and lounge-like long-distance travel.",
        "Le chapitre habitacle se concentre sur le confort des deuxi\xE8me et troisi\xE8me rangs, un agencement g\xE9n\xE9reux et un voyage longue distance fa\xE7on salon.",
        "\u064A\u0631\u0643\u0632 \u0641\u0635\u0644 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0639\u0644\u0649 \u0631\u0627\u062D\u0629 \u0627\u0644\u0635\u0641\u064A\u0646 \u0627\u0644\u062B\u0627\u0646\u064A \u0648\u0627\u0644\u062B\u0627\u0644\u062B\u060C \u0648\u0627\u0644\u062A\u0648\u0632\u064A\u0639 \u0627\u0644\u0633\u062E\u064A\u060C \u0648\u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u0637\u0648\u064A\u0644 \u0628\u0637\u0627\u0628\u0639 \u0627\u0644\u0635\u0627\u0644\u0648\u0646."
      ),
      images: carGallery("dreamer", ["bg_17_1920.jpg", "bg_21_1920.jpg", "bg_24_1920.jpg"])
    },
    {
      id: "chapter-3",
      title: t("Smart family cockpit", "Cockpit familial intelligent", "\u0645\u0642\u0635\u0648\u0631\u0629 \u0639\u0627\u0626\u0644\u064A\u0629 \u0630\u0643\u064A\u0629"),
      summary: t(
        "Connected screens, intelligent assistance, and premium family convenience keep the Dreamer identity calm and modern.",
        "Les \xE9crans connect\xE9s, l\u2019assistance intelligente et la praticit\xE9 familiale premium maintiennent une identit\xE9 Dreamer calme et moderne.",
        "\u062A\u062D\u0627\u0641\u0638 \u0627\u0644\u0634\u0627\u0634\u0627\u062A \u0627\u0644\u0645\u062A\u0635\u0644\u0629 \u0648\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0630\u0643\u064A\u0629 \u0648\u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0639\u0627\u0626\u0644\u064A\u0629 \u0627\u0644\u0641\u0627\u062E\u0631\u0629 \u0639\u0644\u0649 \u0647\u0648\u064A\u0629 Dreamer \u0627\u0644\u0647\u0627\u062F\u0626\u0629 \u0648\u0627\u0644\u062D\u062F\u064A\u062B\u0629."
      ),
      images: carGallery("dreamer", ["bg_swiper_4_1.jpg", "bg_swiper_7_1.jpg", "bg_4_n.jpg"]),
      videos: ["/voyah-resources/images/car/dreamer/video_01.mp4"]
    },
    {
      id: "chapter-4",
      title: t("Family safety", "S\xE9curit\xE9 familiale", "\u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0639\u0627\u0626\u0644\u064A\u0629"),
      summary: t(
        "Body protection and long-route confidence finish the route with a polished MPV family-safety statement.",
        "La protection de la carrosserie et la confiance sur longue distance concluent le parcours par une d\xE9claration de s\xE9curit\xE9 familiale MPV tr\xE8s aboutie.",
        "\u062A\u062E\u062A\u062A\u0645 \u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0647\u064A\u0643\u0644 \u0648\u0627\u0644\u062B\u0642\u0629 \u0641\u064A \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629 \u0627\u0644\u0645\u0633\u0627\u0631 \u0628\u062A\u0639\u0628\u064A\u0631 \u0645\u062A\u0642\u0646 \u0639\u0646 \u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0639\u0627\u0626\u0644\u0629 \u0641\u064A MPV."
      ),
      images: carGallery("dreamer", ["bg_21_1920.jpg", "bg_24_1920.jpg", "bg_swiper_4_1.jpg"])
    }
  ]
};
const getExpandedModelGallery = (slug, fallback) => {
  var _a;
  return (_a = modelGalleryMap[slug]) != null ? _a : fallback;
};
const getModelStorySections = (slug) => modelStorySectionMap[slug];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ModelPage",
  __ssrInlineRender: true,
  props: {
    model: {}
  },
  setup(__props) {
    const props = __props;
    const { buildPath, textFor } = useSiteContent();
    useSectionReveal({});
    useSectionReveal({});
    useSectionReveal();
    const gallery = computed(() => getExpandedModelGallery(props.model.slug, props.model.gallery));
    const authoredStorySections = computed(() => getModelStorySections(props.model.slug));
    const splitClauses = (value) => value.split(/[。.!?？；;，,]\s*/u).map((part) => part.trim()).filter((part) => part.length > 0);
    const buildDetails = (sectionTitle, sectionSummary, index) => {
      const features = props.model.features;
      const summaryParts = splitClauses(sectionSummary != null ? sectionSummary : "");
      const details = [];
      if (sectionSummary) {
        details.push({
          title: sectionTitle,
          summary: sectionSummary
        });
      }
      if (summaryParts.length > 1) {
        details.push({
          title: summaryParts[1].slice(0, 24),
          summary: summaryParts[1]
        });
      }
      if (summaryParts.length > 2) {
        details.push({
          title: summaryParts[2].slice(0, 24),
          summary: summaryParts[2]
        });
      }
      if (details.length >= 3) {
        return details.slice(0, 3);
      }
      if (!features.length) {
        return [];
      }
      const fallback = [0, 1, 2].map((offset) => {
        const feature = features[(index + offset) % features.length];
        return {
          title: textFor(feature.title),
          summary: textFor(feature.body)
        };
      });
      return [...details, ...fallback].slice(0, 3);
    };
    const inferKind = (section, index) => {
      var _a, _b;
      if (((_b = (_a = section.videos) == null ? void 0 : _a.length) != null ? _b : 0) > 0 || section.images.length >= 4) {
        return "carousel";
      }
      if (index === 3 || section.images.length <= 1) {
        return "banner";
      }
      return "image";
    };
    const renderedSections = computed(() => {
      var _a;
      const sourceSections = ((_a = authoredStorySections.value) == null ? void 0 : _a.length) ? authoredStorySections.value.map((section, index) => {
        var _a2, _b;
        const kind = inferKind(section, index);
        return {
          id: section.id,
          kicker: section.kicker ? textFor(section.kicker) : void 0,
          title: textFor(section.title),
          summary: textFor(section.summary),
          image: (_b = (_a2 = section.images[0]) != null ? _a2 : gallery.value[index]) != null ? _b : props.model.heroImage,
          images: section.images,
          videos: section.videos,
          details: buildDetails(textFor(section.title), textFor(section.summary), index),
          kind
        };
      }) : gallery.value.map((image, index) => {
        var _a2, _b, _c, _d, _e, _f, _g, _h;
        return {
          id: `chapter-${index + 1}`,
          kicker: void 0,
          title: index === 0 ? textFor(props.model.title) : textFor((_b = (_a2 = props.model.features[index % Math.max(props.model.features.length, 1)]) == null ? void 0 : _a2.title) != null ? _b : props.model.title),
          summary: index === 0 ? textFor(props.model.description) : textFor((_d = (_c = props.model.features[index % Math.max(props.model.features.length, 1)]) == null ? void 0 : _c.body) != null ? _d : props.model.description),
          image,
          images: [image],
          videos: void 0,
          details: buildDetails(
            index === 0 ? textFor(props.model.title) : textFor((_f = (_e = props.model.features[index % Math.max(props.model.features.length, 1)]) == null ? void 0 : _e.title) != null ? _f : props.model.title),
            index === 0 ? textFor(props.model.description) : textFor((_h = (_g = props.model.features[index % Math.max(props.model.features.length, 1)]) == null ? void 0 : _g.body) != null ? _h : props.model.description),
            index
          ),
          kind: index === 3 ? "banner" : "image"
        };
      });
      const output = [];
      sourceSections.forEach((section, index) => {
        var _a2, _b, _c;
        if (index === 3) {
          output.push({
            id: `${section.id}-divider`,
            kind: "banner",
            title: section.title,
            summary: section.summary,
            image: (_b = (_a2 = section.image) != null ? _a2 : section.images[0]) != null ? _b : props.model.heroImage,
            images: section.images,
            details: section.details.slice(0, 3)
          });
        }
        output.push({
          ...section,
          details: section.details.slice(0, 3),
          slides: section.kind === "carousel" ? (section.images.length ? section.images : [(_c = section.image) != null ? _c : props.model.heroImage]).map((image, slideIndex) => {
            var _a3, _b2, _c2, _d, _e, _f;
            return {
              image,
              video: slideIndex === 0 ? (_a3 = section.videos) == null ? void 0 : _a3[0] : void 0,
              title: (_c2 = (_b2 = section.details[slideIndex % section.details.length]) == null ? void 0 : _b2.title) != null ? _c2 : section.title,
              summary: (_f = (_e = (_d = section.details[slideIndex % section.details.length]) == null ? void 0 : _d.summary) != null ? _e : section.summary) != null ? _f : ""
            };
          }) : void 0
        });
      });
      return output;
    });
    const chapterLinks = computed(() => [
      { id: "overview", label: textFor(props.model.title) },
      ...renderedSections.value.map((section) => ({ id: section.id, label: section.title })),
      { id: "book-drive", label: textFor(props.model.ctaPrimary) }
    ]);
    const overviewPanelCopy = computed(() => {
      var _a;
      if ((_a = authoredStorySections.value) == null ? void 0 : _a.length) {
        return textFor(authoredStorySections.value[0].summary);
      }
      const secondFeature = props.model.features[1];
      if (secondFeature) {
        return textFor(secondFeature.body);
      }
      return textFor(props.model.description);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["model-page", `model-page--${__props.model.slug.replace(".html", "")}`]
      }, _attrs))} data-v-5f3128e0>`);
      _push(ssrRenderComponent(_sfc_main$9, {
        eyebrow: unref(textFor)(__props.model.subtitle),
        title: unref(textFor)(__props.model.title),
        summary: unref(textFor)(__props.model.description),
        image: __props.model.heroImage,
        video: __props.model.heroVideo,
        logo: (_a = __props.model.heroLogo) != null ? _a : __props.model.logo
      }, {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1$1, {
              to: unref(buildPath)("book-drive.html"),
              variant: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(textFor)(__props.model.ctaPrimary))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(textFor)(__props.model.ctaPrimary)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1$1, {
              to: unref(buildPath)(__props.model.secondarySlug),
              variant: "secondary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(textFor)(__props.model.ctaSecondary))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(textFor)(__props.model.ctaSecondary)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1$1, {
                to: unref(buildPath)("book-drive.html"),
                variant: "primary"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(textFor)(__props.model.ctaPrimary)), 1)
                ]),
                _: 1
              }, 8, ["to"]),
              createVNode(_sfc_main$1$1, {
                to: unref(buildPath)(__props.model.secondarySlug),
                variant: "secondary"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(textFor)(__props.model.ctaSecondary)), 1)
                ]),
                _: 1
              }, 8, ["to"])
            ];
          }
        }),
        meta: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<aside class="model-hero-meta" data-v-5f3128e0${_scopeId}><p class="model-hero-price" data-v-5f3128e0${_scopeId}>${ssrInterpolate(unref(textFor)(__props.model.price))}</p><div class="model-hero-features" data-v-5f3128e0${_scopeId}><!--[-->`);
            ssrRenderList(__props.model.features.slice(0, 3), (feature) => {
              _push2(`<span data-v-5f3128e0${_scopeId}>${ssrInterpolate(unref(textFor)(feature.title))}</span>`);
            });
            _push2(`<!--]--></div></aside>`);
          } else {
            return [
              createVNode("aside", { class: "model-hero-meta" }, [
                createVNode("p", { class: "model-hero-price" }, toDisplayString(unref(textFor)(__props.model.price)), 1),
                createVNode("div", { class: "model-hero-features" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.model.features.slice(0, 3), (feature) => {
                    return openBlock(), createBlock("span", {
                      key: unref(textFor)(feature.title)
                    }, toDisplayString(unref(textFor)(feature.title)), 1);
                  }), 128))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(ModelChapterNav, {
        sections: unref(chapterLinks),
        variant: __props.model.slug.replace(".html", "")
      }, null, _parent));
      _push(`<section id="overview" class="model-overview" data-v-5f3128e0><div class="container model-overview-grid" data-v-5f3128e0><div class="model-overview-copy" data-reveal data-v-5f3128e0><p class="model-overview-kicker" data-v-5f3128e0>${ssrInterpolate(unref(textFor)(__props.model.price))}</p><h2 class="model-overview-title" data-v-5f3128e0>${ssrInterpolate(unref(textFor)(__props.model.title))}</h2><p class="model-overview-summary" data-v-5f3128e0>${ssrInterpolate(unref(textFor)(__props.model.description))}</p><ul class="model-overview-highlights" data-v-5f3128e0><!--[-->`);
      ssrRenderList(__props.model.features, (feature) => {
        _push(`<li data-v-5f3128e0>${ssrInterpolate(unref(textFor)(feature.title))}</li>`);
      });
      _push(`<!--]--></ul></div><aside class="model-overview-panel" data-reveal data-v-5f3128e0><img${ssrRenderAttr("src", (_b = __props.model.heroLogo) != null ? _b : __props.model.logo)}${ssrRenderAttr("alt", unref(textFor)(__props.model.title))} class="model-overview-logo" data-v-5f3128e0><p class="model-overview-price" data-v-5f3128e0>${ssrInterpolate(unref(textFor)(__props.model.price))}</p><p class="model-overview-note" data-v-5f3128e0>${ssrInterpolate(unref(overviewPanelCopy))}</p><div class="model-overview-tags" data-v-5f3128e0><!--[-->`);
      ssrRenderList(__props.model.features, (feature) => {
        _push(`<span data-v-5f3128e0>${ssrInterpolate(unref(textFor)(feature.title))}</span>`);
      });
      _push(`<!--]--></div><div class="button-row model-overview-actions" data-v-5f3128e0>`);
      _push(ssrRenderComponent(_sfc_main$1$1, {
        to: unref(buildPath)("book-drive.html"),
        variant: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(textFor)(__props.model.ctaPrimary))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(textFor)(__props.model.ctaPrimary)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1$1, {
        to: unref(buildPath)(__props.model.secondarySlug),
        variant: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(textFor)(__props.model.ctaSecondary))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(textFor)(__props.model.ctaSecondary)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></aside></div><div class="container" data-reveal data-v-5f3128e0>`);
      _push(ssrRenderComponent(_sfc_main$b, {
        metrics: __props.model.metrics
      }, null, _parent));
      _push(`</div></section><div data-v-5f3128e0><!--[-->`);
      ssrRenderList(unref(renderedSections), (section, index) => {
        _push(ssrRenderComponent(ModelMediaSection, {
          key: section.id,
          index,
          section,
          "model-slug": __props.model.slug
        }, null, _parent));
      });
      _push(`<!--]--></div><section id="book-drive" class="model-cta" style="${ssrRenderStyle({ "--cta-image": `url(${(_c = unref(gallery).at(-1)) != null ? _c : __props.model.heroImage})` })}" data-v-5f3128e0><div class="container model-cta-card" data-reveal data-v-5f3128e0><p class="model-cta-kicker" data-v-5f3128e0>${ssrInterpolate(unref(textFor)(__props.model.subtitle))}</p><h2 data-v-5f3128e0>${ssrInterpolate(unref(textFor)(__props.model.title))}</h2><p data-v-5f3128e0>${ssrInterpolate(unref(textFor)(__props.model.description))}</p><div class="button-row" data-v-5f3128e0>`);
      _push(ssrRenderComponent(_sfc_main$1$1, {
        to: unref(buildPath)("book-drive.html"),
        variant: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(textFor)(__props.model.ctaPrimary))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(textFor)(__props.model.ctaPrimary)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1$1, {
        to: unref(buildPath)(__props.model.secondarySlug),
        variant: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(textFor)(__props.model.ctaSecondary))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(textFor)(__props.model.ctaSecondary)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/ModelPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ModelPage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5f3128e0"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b;
    const route = useRoute();
    const slug = computed(() => Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug);
    const page = computed(() => {
      var _a2;
      return typeof slug.value === "string" ? (_a2 = resolvePage(slug.value)) != null ? _a2 : null : null;
    });
    const modelPage = computed(() => {
      var _a2;
      return ((_a2 = page.value) == null ? void 0 : _a2.kind) === "model" ? page.value : null;
    });
    const infoPage = computed(() => {
      var _a2;
      return ((_a2 = page.value) == null ? void 0 : _a2.kind) === "info" ? page.value : null;
    });
    const legalPage = computed(() => {
      var _a2;
      return ((_a2 = page.value) == null ? void 0 : _a2.kind) === "legal" ? page.value : null;
    });
    const { textFor } = useSiteContent();
    const storePage = computed(() => {
      var _a2;
      return ((_a2 = infoPage.value) == null ? void 0 : _a2.slug) === "store.html";
    });
    const servicePage = computed(() => {
      var _a2;
      return ((_a2 = infoPage.value) == null ? void 0 : _a2.slug) === "service.html";
    });
    const energyPage = computed(() => {
      var _a2;
      return ((_a2 = infoPage.value) == null ? void 0 : _a2.slug) === "energy.html";
    });
    const legacyBusinessPage = computed(() => {
      if (!infoPage.value) return null;
      return null;
    });
    const legacyDisclosurePage = computed(() => {
      if (!infoPage.value) return null;
      return ["purchasing.html", "environmental.html", "document.html"].includes(infoPage.value.slug) ? infoPage.value : null;
    });
    useSeoMeta({
      title: () => {
        var _a2, _b2, _c, _d, _e;
        const title = (_e = (_c = (_a2 = modelPage.value) == null ? void 0 : _a2.title) != null ? _c : (_b2 = infoPage.value) == null ? void 0 : _b2.title) != null ? _e : (_d = legalPage.value) == null ? void 0 : _d.title;
        return title ? `Voyah | ${textFor(title)}` : "Voyah";
      },
      description: () => {
        var _a2, _b2, _c, _d, _e;
        const description = (_e = (_c = (_a2 = modelPage.value) == null ? void 0 : _a2.description) != null ? _c : (_b2 = infoPage.value) == null ? void 0 : _b2.summary) != null ? _e : (_d = legalPage.value) == null ? void 0 : _d.summary;
        return description ? textFor(description) : "Voyah";
      }
    });
    useHead({
      link: [
        ...((_a = infoPage.value) == null ? void 0 : _a.slug) === "service.html" ? [
          { rel: "stylesheet", href: "/static/assets/index-b22dd282.css" },
          { rel: "stylesheet", href: "/static/assets/index-056018d9.css" },
          { rel: "stylesheet", href: "/static/assets/index-ae402aa7.css" },
          { rel: "stylesheet", href: "/static/assets/userser-c683f735.css" }
        ] : [],
        ...((_b = infoPage.value) == null ? void 0 : _b.slug) === "energy.html" ? [
          { rel: "stylesheet", href: "/static/assets/index-c1674d8c.css" },
          { rel: "stylesheet", href: "/static/assets/index-b23f7af0.css" },
          { rel: "stylesheet", href: "/static/assets/index-ae402aa7.css" },
          { rel: "stylesheet", href: "/static/assets/supercharger-partner-307d1a3c.css" }
        ] : [],
        ...legacyDisclosurePage.value ? [
          { rel: "stylesheet", href: "/static/assets/purchasingTemplate-87f0d017.css" },
          { rel: "stylesheet", href: "/static/assets/purchasingDetail-f1d6b99d.css" }
        ] : []
      ],
      meta: [
        {
          name: "og:title",
          content: () => {
            var _a2, _b2, _c, _d, _e;
            const title = (_e = (_c = (_a2 = modelPage.value) == null ? void 0 : _a2.title) != null ? _c : (_b2 = infoPage.value) == null ? void 0 : _b2.title) != null ? _e : (_d = legalPage.value) == null ? void 0 : _d.title;
            return title ? `Voyah | ${textFor(title)}` : "Voyah";
          }
        },
        {
          name: "og:description",
          content: () => {
            var _a2, _b2, _c, _d, _e;
            const description = (_e = (_c = (_a2 = modelPage.value) == null ? void 0 : _a2.description) != null ? _c : (_b2 = infoPage.value) == null ? void 0 : _b2.summary) != null ? _e : (_d = legalPage.value) == null ? void 0 : _d.summary;
            return description ? textFor(description) : "Voyah";
          }
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (unref(servicePage)) {
        _push(ssrRenderComponent(ServiceCenterPage, null, null, _parent));
      } else if (unref(energyPage)) {
        _push(ssrRenderComponent(EnergyCenterPage, null, null, _parent));
      } else if (unref(legacyBusinessPage)) {
        _push(ssrRenderComponent(_sfc_main$4, {
          page: unref(legacyBusinessPage).page,
          prefix: unref(legacyBusinessPage).prefix,
          "root-class": unref(legacyBusinessPage).rootClass,
          "scope-attr": unref(legacyBusinessPage).scopeAttr,
          "text-for": unref(textFor),
          "section-titles": unref(legacyBusinessPage).sectionTitles
        }, null, _parent));
      } else if (unref(storePage)) {
        _push(ssrRenderComponent(StoreCenterPage, null, null, _parent));
      } else if (unref(legacyDisclosurePage)) {
        _push(ssrRenderComponent(_sfc_main$a, {
          page: unref(legacyDisclosurePage),
          "text-for": unref(textFor)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(modelPage)) {
        _push(ssrRenderComponent(ModelPage, { model: unref(modelPage) }, null, _parent));
      } else if (unref(infoPage) && !unref(legacyBusinessPage) && !unref(legacyDisclosurePage) && !unref(storePage) && !unref(servicePage) && !unref(energyPage)) {
        _push(ssrRenderComponent(InfoPage, { page: unref(infoPage) }, null, _parent));
      } else if (unref(legalPage)) {
        _push(ssrRenderComponent(LegalPage, { page: unref(legalPage) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[locale]/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-GAhDqcE9.mjs.map
