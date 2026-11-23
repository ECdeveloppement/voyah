import { defineComponent, computed, mergeProps, unref, ref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, watch, createSlots, reactive, useId, useSSRContext } from 'file://E:/voyah/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrRenderClass, ssrRenderDynamicModel, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderSlot } from 'file://E:/voyah/node_modules/vue/server-renderer/index.mjs';
import { f as findNewsItemByPage, u as useSectionReveal, _ as _sfc_main$1$1, B as BrochureButton, n as newsCategoryLabels, a as newsItems } from './news-aRO4TP75.mjs';
import { u as useSiteContent, b as useSeoMeta, a as useHead } from './useSiteContent-DZMgAnrU.mjs';
import { u as useRoute, r as resolvePage, i as t$1, _ as _export_sfc, g as dealerContact, p as leadForms, k as homePage, q as modelDisplayName, e as __nuxt_component_0$1, v as publicModelSlugs, w as hiddenFormModelSlugs, x as quoteModels, y as quoteCustomerTypes, z as quoteFinancingOptions, j as modelsShowcase } from './server.mjs';
import { u as useBreadcrumbSeo, a as useProductSeo, b as useCookieConsent } from './useSeo-DzuSZ2wi.mjs';
import { _ as _sfc_main$N } from './LegacyDisclosurePage-RAl89wFh.mjs';
import { E as EnergyCenterPage } from './EnergyCenterPage-Dk4uxGcB.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { S as StoreCenterPage } from './StoreCenterPage-CBqmcYeW.mjs';
import { _ as _imports_0$h } from './SiteHeader-BxkpiyIA.mjs';
import 'file://E:/voyah/node_modules/ofetch/dist/node.mjs';
import 'file://E:/voyah/node_modules/hookable/dist/index.mjs';
import 'file://E:/voyah/node_modules/unctx/dist/index.mjs';
import 'file://E:/voyah/node_modules/h3/dist/index.mjs';
import 'file://E:/voyah/node_modules/vue-router/vue-router.node.mjs';
import 'file://E:/voyah/node_modules/defu/dist/defu.mjs';
import 'file://E:/voyah/node_modules/klona/dist/index.mjs';
import 'file://E:/voyah/node_modules/cookie-es/dist/index.mjs';
import 'file://E:/voyah/node_modules/destr/dist/index.mjs';
import 'file://E:/voyah/node_modules/ohash/dist/index.mjs';
import 'file://E:/voyah/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://E:/voyah/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import '../_/nitro.mjs';
import 'file://E:/voyah/node_modules/node-mock-http/dist/index.mjs';
import 'file://E:/voyah/node_modules/unstorage/dist/index.mjs';
import 'file://E:/voyah/node_modules/unstorage/drivers/fs.mjs';
import 'file:///E:/voyah/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://E:/voyah/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://E:/voyah/node_modules/scule/dist/index.mjs';
import 'file://E:/voyah/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://E:/voyah/node_modules/pathe/dist/index.mjs';
import 'file://E:/voyah/node_modules/unhead/dist/server.mjs';
import 'file://E:/voyah/node_modules/devalue/index.js';
import 'file://E:/voyah/node_modules/unhead/dist/plugins.mjs';
import 'file://E:/voyah/node_modules/unhead/dist/utils.mjs';

const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = (() => {
  console.error(intervalError);
});
const _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "MetricGrid",
  __ssrInlineRender: true,
  props: {
    metrics: {}
  },
  setup(__props) {
    const { textFor } = useSiteContent();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "metric-grid" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.metrics, (metric) => {
        _push(`<article class="metric-card"><div class="metric-value">${ssrInterpolate(metric.value)}</div><div class="metric-label">${ssrInterpolate(unref(textFor)(metric.label))}</div></article>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/MetricGrid.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const _sfc_main$L = /* @__PURE__ */ defineComponent({
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
    compact: { type: Boolean, default: false },
    variant: { default: void 0 }
  },
  setup(__props) {
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["page-hero", `page-hero--${__props.align}`, { "page-hero--compact": __props.compact }, __props.variant ? `page-hero--${__props.variant}` : null]
      }, _attrs))} data-v-dff87b15><div class="page-hero-media" data-v-dff87b15>`);
      if (__props.video) {
        _push(`<video${ssrRenderAttr("poster", __props.image)}${ssrRenderAttr("aria-label", __props.title)} autoplay muted loop playsinline preload="metadata" data-v-dff87b15><source${ssrRenderAttr("src", __props.video)} type="video/mp4" data-v-dff87b15></video>`);
      } else {
        _push(`<img${ssrRenderAttr("src", __props.image)}${ssrRenderAttr("alt", __props.title)} data-v-dff87b15>`);
      }
      _push(`</div><div class="page-hero-overlay" data-v-dff87b15></div><div class="page-hero-gradient" data-v-dff87b15></div><div class="page-hero-content" data-v-dff87b15><div class="container" data-v-dff87b15><div class="page-hero-shell" data-v-dff87b15><div class="page-hero-copy" data-v-dff87b15>`);
      if (__props.logo) {
        _push(`<img${ssrRenderAttr("src", __props.logo)}${ssrRenderAttr("alt", __props.title)} class="page-logo" data-v-dff87b15>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="eyebrow" data-v-dff87b15>${ssrInterpolate(__props.eyebrow)}</p><h1 class="page-title" data-v-dff87b15>${ssrInterpolate(__props.title)}</h1><p class="page-summary" data-v-dff87b15>${ssrInterpolate(__props.summary)}</p>`);
      if (_ctx.$slots.actions) {
        _push(`<div class="button-row page-hero-actions" data-v-dff87b15>`);
        ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.$slots.meta) {
        _push(`<aside class="page-hero-meta" data-v-dff87b15>`);
        ssrRenderSlot(_ctx.$slots, "meta", {}, null, _push, _parent);
        _push(`</aside>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></section>`);
    };
  }
});
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/PageHero.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const PageHero = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["__scopeId", "data-v-dff87b15"]]);
const _sfc_main$K = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/info/InfoDocumentRows.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const _sfc_main$J = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/info/InfoEditorialSections.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const _sfc_main$I = /* @__PURE__ */ defineComponent({
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
      }, _attrs))} data-v-45524831>`);
      _push(ssrRenderComponent(PageHero, {
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
              _push2(`<div class="hero-panel" data-reveal data-v-45524831${_scopeId}><div class="hero-panel__label" data-v-45524831${_scopeId}>${ssrInterpolate(unref(textFor)(unref(theme).panelTitle))}</div><div class="hero-panel__value" data-v-45524831${_scopeId}>${ssrInterpolate(unref(panelValue))}</div><p class="hero-panel__copy" data-v-45524831${_scopeId}>${ssrInterpolate(unref(textFor)(unref(theme).panelBody))}</p></div>`);
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
        _push(`<section class="info-page-nav" data-v-45524831><div class="container info-page-nav__inner" data-v-45524831><!--[-->`);
        ssrRenderList(unref(sectionLinks), (link) => {
          _push(`<a${ssrRenderAttr("href", `#${link.id}`)} class="${ssrRenderClass(["info-page-nav__link", { active: unref(activeSection) === link.id }])}" data-v-45524831>${ssrInterpolate(link.label)}</a>`);
        });
        _push(`<!--]--></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(theme).showMetrics && unref(displayMetrics).length) {
        _push(`<section class="section-shell info-metrics-shell" data-v-45524831><div class="container" data-v-45524831>`);
        _push(ssrRenderComponent(_sfc_main$M, { metrics: unref(displayMetrics) }, null, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isBrandRoute)) {
        _push(`<section class="info-features info-features--brand-story" data-v-45524831><div class="container" data-v-45524831>`);
        if (__props.page.blocks[0]) {
          _push(`<article${ssrRenderAttr("id", (_a = unref(sectionLinks)[0]) == null ? void 0 : _a.id)} class="info-brand-lead" data-reveal data-v-45524831><figure class="info-brand-lead__media" data-v-45524831><img${ssrRenderAttr("src", __props.page.blocks[0].image)}${ssrRenderAttr("alt", unref(textFor)(__props.page.blocks[0].title))} data-v-45524831></figure><div class="info-brand-lead__copy" data-v-45524831><p class="info-brand-lead__index" data-v-45524831>${ssrInterpolate(chapterLabel(0))}</p><h2 class="info-brand-lead__title" data-v-45524831>${ssrInterpolate(unref(textFor)(__props.page.blocks[0].title))}</h2><p class="info-brand-lead__body" data-v-45524831>${ssrInterpolate(unref(textFor)(__props.page.blocks[0].body))}</p></div></article>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="info-brand-grid" data-v-45524831><!--[-->`);
        ssrRenderList(__props.page.blocks.slice(1), (block, index) => {
          var _a2;
          _push(`<article${ssrRenderAttr("id", (_a2 = unref(sectionLinks)[index + 1]) == null ? void 0 : _a2.id)} class="info-brand-card" data-reveal data-v-45524831><figure class="info-brand-card__media" data-v-45524831><img${ssrRenderAttr("src", block.image)}${ssrRenderAttr("alt", unref(textFor)(block.title))} data-v-45524831></figure><div class="info-brand-card__copy" data-v-45524831><p class="info-brand-card__index" data-v-45524831>${ssrInterpolate(chapterLabel(index + 1))}</p><h2 class="info-brand-card__title" data-v-45524831>${ssrInterpolate(unref(textFor)(block.title))}</h2><p class="info-brand-card__body" data-v-45524831>${ssrInterpolate(unref(textFor)(block.body))}</p></div></article>`);
        });
        _push(`<!--]--></div></div></section>`);
      } else if (unref(isStoreRoute)) {
        _push(`<div data-v-45524831>`);
        _push(ssrRenderComponent(_sfc_main$J, {
          variant: "store",
          blocks: __props.page.blocks,
          "section-links": unref(sectionLinks),
          "chapter-label": chapterLabel,
          "text-for": unref(textFor)
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(isCorporateRoute)) {
        _push(`<section class="info-features info-features--corporate-values" data-v-45524831><div class="container" data-v-45524831><div class="info-corporate-grid" data-v-45524831>`);
        if (__props.page.blocks[0]) {
          _push(`<article${ssrRenderAttr("id", (_b = unref(sectionLinks)[0]) == null ? void 0 : _b.id)} class="info-corporate-lead" data-reveal data-v-45524831><figure class="info-corporate-lead__media" data-v-45524831><img${ssrRenderAttr("src", __props.page.blocks[0].image)}${ssrRenderAttr("alt", unref(textFor)(__props.page.blocks[0].title))} data-v-45524831></figure><div class="info-corporate-lead__copy" data-v-45524831><p class="info-corporate-lead__index" data-v-45524831>${ssrInterpolate(chapterLabel(0))}</p><h2 class="info-corporate-lead__title" data-v-45524831>${ssrInterpolate(unref(textFor)(__props.page.blocks[0].title))}</h2><p class="info-corporate-lead__body" data-v-45524831>${ssrInterpolate(unref(textFor)(__props.page.blocks[0].body))}</p></div></article>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="info-corporate-stack" data-v-45524831><!--[-->`);
        ssrRenderList(__props.page.blocks.slice(1), (block, index) => {
          var _a2;
          _push(`<article${ssrRenderAttr("id", (_a2 = unref(sectionLinks)[index + 1]) == null ? void 0 : _a2.id)} class="info-corporate-card" data-reveal data-v-45524831><figure class="info-corporate-card__media" data-v-45524831><img${ssrRenderAttr("src", block.image)}${ssrRenderAttr("alt", unref(textFor)(block.title))} data-v-45524831></figure><div class="info-corporate-card__copy" data-v-45524831><p class="info-corporate-card__index" data-v-45524831>${ssrInterpolate(chapterLabel(index + 1))}</p><h2 class="info-corporate-card__title" data-v-45524831>${ssrInterpolate(unref(textFor)(block.title))}</h2><p class="info-corporate-card__body" data-v-45524831>${ssrInterpolate(unref(textFor)(block.body))}</p></div></article>`);
        });
        _push(`<!--]--></div></div></div></section>`);
      } else if (unref(isServiceRoute)) {
        _push(`<div data-v-45524831>`);
        _push(ssrRenderComponent(_sfc_main$J, {
          variant: "service",
          blocks: __props.page.blocks,
          "section-links": unref(sectionLinks),
          "chapter-label": chapterLabel,
          "text-for": unref(textFor)
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(isEnergyRoute)) {
        _push(`<div data-v-45524831>`);
        _push(ssrRenderComponent(_sfc_main$J, {
          variant: "energy",
          blocks: __props.page.blocks,
          "section-links": unref(sectionLinks),
          "chapter-label": chapterLabel,
          "text-for": unref(textFor)
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(isCareerRoute)) {
        _push(`<section class="info-features info-features--career-flow" data-v-45524831><!--[-->`);
        ssrRenderList(__props.page.blocks, (block, index) => {
          var _a2;
          _push(`<div${ssrRenderAttr("id", (_a2 = unref(sectionLinks)[index]) == null ? void 0 : _a2.id)} class="${ssrRenderClass(["info-career-row", { reverse: index % 2 === 1 }])}" data-v-45524831><div class="container info-career-row__grid" data-v-45524831><figure class="info-career-row__media" data-reveal data-v-45524831><img${ssrRenderAttr("src", block.image)}${ssrRenderAttr("alt", unref(textFor)(block.title))} data-v-45524831></figure><article class="info-career-row__copy" data-reveal data-v-45524831><p class="info-career-row__index" data-v-45524831>${ssrInterpolate(chapterLabel(index))}</p><h2 class="info-career-row__title" data-v-45524831>${ssrInterpolate(unref(textFor)(block.title))}</h2><p class="info-career-row__body" data-v-45524831>${ssrInterpolate(unref(textFor)(block.body))}</p></article></div></div>`);
        });
        _push(`<!--]--></section>`);
      } else if (unref(isDocumentRoute)) {
        _push(`<div data-v-45524831>`);
        _push(ssrRenderComponent(_sfc_main$K, {
          blocks: __props.page.blocks,
          "section-links": unref(sectionLinks),
          "chapter-label": chapterLabel,
          "text-for": unref(textFor)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<section class="info-features" data-v-45524831><!--[-->`);
        ssrRenderList(__props.page.blocks, (block, index) => {
          var _a2;
          _push(`<div${ssrRenderAttr("id", (_a2 = unref(sectionLinks)[index]) == null ? void 0 : _a2.id)} class="${ssrRenderClass(["info-feature", { reverse: index % 2 === 1 && unref(layoutMode) !== "document" }])}" data-v-45524831><div class="${ssrRenderClass(["container", "info-feature__grid"])}" data-v-45524831><div class="info-feature__media" data-reveal data-v-45524831><div class="info-feature__media-shell" data-v-45524831><img${ssrRenderAttr("src", block.image)}${ssrRenderAttr("alt", unref(textFor)(block.title))} data-v-45524831>`);
          if (unref(layoutMode) !== "document") {
            _push(`<div class="info-feature__badge" data-v-45524831>${ssrInterpolate(chapterLabel(index))}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div><article class="info-feature__copy" data-reveal data-v-45524831>`);
          if (unref(layoutMode) !== "document") {
            _push(`<p class="info-feature__kicker" data-v-45524831>${ssrInterpolate(chapterLabel(index))}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<h2 class="info-feature__title" data-v-45524831>${ssrInterpolate(unref(textFor)(block.title))}</h2><p class="info-feature__body" data-v-45524831>${ssrInterpolate(unref(textFor)(block.body))}</p></article></div></div>`);
        });
        _push(`<!--]--></section>`);
      }
      if (unref(theme).showCta && __props.page.ctaSlug && __props.page.ctaLabel) {
        _push(`<section class="section-shell info-cta-shell" data-v-45524831><div class="container" data-v-45524831><div class="info-cta" data-reveal data-v-45524831><p class="info-cta__kicker" data-v-45524831>${ssrInterpolate(unref(textFor)(unref(theme).ctaTitle))}</p><h2 class="info-cta__headline" data-v-45524831>${ssrInterpolate(unref(textFor)(unref(theme).ctaHeadline))}</h2><p class="info-cta__copy" data-v-45524831>${ssrInterpolate(unref(textFor)(unref(theme).ctaBody))}</p>`);
        if (__props.page.ctaSlug && __props.page.ctaLabel) {
          _push(`<div class="button-row" data-v-45524831>`);
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
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/InfoPage.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const InfoPage = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["__scopeId", "data-v-45524831"]]);
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "LeadForm",
  __ssrInlineRender: true,
  props: {
    form: {}
  },
  setup(__props) {
    const props = __props;
    const { textFor } = useSiteContent();
    const route = useRoute();
    const schema = computed(() => leadForms[props.form]);
    const labels = {
      submit: t$1("Submit", "Envoyer", "\u0625\u0631\u0633\u0627\u0644"),
      submitMessage: t$1("Submit Message", "Envoyer le message", "\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629"),
      sending: t$1("Sending\u2026", "Envoi en cours\u2026", "\u062C\u0627\u0631\u064D \u0627\u0644\u0625\u0631\u0633\u0627\u0644\u2026"),
      failure: t$1(
        "Your request could not be sent. Please try again or call us.",
        "Votre demande n\u2019a pas pu \xEAtre envoy\xE9e. R\xE9essayez ou appelez-nous.",
        "\u0644\u0645 \u064A\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628\u0643. \u062D\u0627\u0648\u0644 \u0645\u062C\u062F\u062F\u0627\u064B \u0623\u0648 \u0627\u062A\u0635\u0644 \u0628\u0646\u0627."
      )
    };
    const fieldRows = computed(() => {
      const rows = [];
      let pair = [];
      const flush = () => {
        if (pair.length) {
          rows.push(pair);
          pair = [];
        }
      };
      for (const field of schema.value.fields) {
        if (field.type === "textarea") {
          flush();
          rows.push([field]);
          continue;
        }
        pair.push(field);
        if (pair.length === 2) flush();
      }
      flush();
      return rows;
    });
    const visibleModelSlugs = publicModelSlugs.filter(
      (slug) => !hiddenFormModelSlugs.includes(slug)
    );
    const modelOptions = visibleModelSlugs.map((slug) => ({
      value: slug,
      label: textFor(modelDisplayName[slug])
    }));
    const optionsFor = (field) => field.choices ? field.choices.map((choice) => ({ value: choice.value, label: textFor(choice.label) })) : modelOptions;
    const minDate = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    const paramValue = (value) => {
      var _a;
      return Array.isArray(value) ? String((_a = value[0]) != null ? _a : "") : String(value != null ? value : "");
    };
    const values = reactive(
      Object.fromEntries(schema.value.fields.map((field) => {
        var _a;
        return [field.name, (_a = field.defaultValue) != null ? _a : ""];
      }))
    );
    const requestedModel = paramValue(route.query.model);
    const modelField = schema.value.fields.find((field) => field.options === "models");
    if (modelField && requestedModel && visibleModelSlugs.includes(requestedModel)) {
      values[modelField.name] = requestedModel;
    }
    const company = ref("");
    const errors = reactive({});
    const state = ref("idle");
    const fieldId = (field) => `lead-${props.form}-${field.name}`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({
        class: "lead-form",
        novalidate: ""
      }, _attrs))} data-v-08e9aae6>`);
      if (unref(state) === "success") {
        _push(`<p class="lead-form__notice" data-v-08e9aae6>${ssrInterpolate(unref(textFor)(unref(schema).success))}</p>`);
      } else {
        _push(`<!--[--><!--[-->`);
        ssrRenderList(unref(fieldRows), (row, rowIndex) => {
          _push(`<div class="${ssrRenderClass([{ "lead-form__row--split": row.length === 2 }, "lead-form__row"])}" data-v-08e9aae6><!--[-->`);
          ssrRenderList(row, (field) => {
            _push(`<div class="lead-form__field" data-v-08e9aae6><label${ssrRenderAttr("for", fieldId(field))} data-v-08e9aae6>${ssrInterpolate(unref(textFor)(field.label))}`);
            if (field.required) {
              _push(`<span data-v-08e9aae6> *</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</label>`);
            if (field.type !== "select" && field.type !== "textarea") {
              _push(`<input${ssrRenderAttr("id", fieldId(field))}${ssrRenderDynamicModel(field.type, unref(values)[field.name], null)}${ssrRenderAttr("type", field.type)}${ssrIncludeBooleanAttr(field.required) ? " required" : ""}${ssrRenderAttr("min", field.type === "date" ? unref(minDate) : void 0)}${ssrRenderAttr("aria-invalid", unref(errors)[field.name] ? "true" : "false")}${ssrRenderAttr("placeholder", field.placeholder ? unref(textFor)(field.placeholder) : void 0)} data-v-08e9aae6>`);
            } else if (field.type === "select") {
              _push(`<select${ssrRenderAttr("id", fieldId(field))}${ssrIncludeBooleanAttr(field.required) ? " required" : ""}${ssrRenderAttr("aria-invalid", unref(errors)[field.name] ? "true" : "false")} data-v-08e9aae6>`);
              if (!field.defaultValue) {
                _push(`<option value="" disabled data-v-08e9aae6${ssrIncludeBooleanAttr(Array.isArray(unref(values)[field.name]) ? ssrLooseContain(unref(values)[field.name], "") : ssrLooseEqual(unref(values)[field.name], "")) ? " selected" : ""}>${ssrInterpolate(field.placeholder ? unref(textFor)(field.placeholder) : "")}</option>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<!--[-->`);
              ssrRenderList(optionsFor(field), (option) => {
                _push(`<option${ssrRenderAttr("value", option.value)} data-v-08e9aae6${ssrIncludeBooleanAttr(Array.isArray(unref(values)[field.name]) ? ssrLooseContain(unref(values)[field.name], option.value) : ssrLooseEqual(unref(values)[field.name], option.value)) ? " selected" : ""}>${ssrInterpolate(option.label)}</option>`);
              });
              _push(`<!--]--></select>`);
            } else {
              _push(`<textarea${ssrRenderAttr("id", fieldId(field))}${ssrIncludeBooleanAttr(field.required) ? " required" : ""}${ssrRenderAttr("aria-invalid", unref(errors)[field.name] ? "true" : "false")}${ssrRenderAttr("placeholder", field.placeholder ? unref(textFor)(field.placeholder) : void 0)} data-v-08e9aae6>${ssrInterpolate(unref(values)[field.name])}</textarea>`);
            }
            if (unref(errors)[field.name]) {
              _push(`<p class="lead-form__error" data-v-08e9aae6>${ssrInterpolate(unref(errors)[field.name])}</p>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        });
        _push(`<!--]--><div class="lead-form__honeypot" aria-hidden="true" data-v-08e9aae6><label for="lead-company" data-v-08e9aae6>Company</label><input id="lead-company"${ssrRenderAttr("value", unref(company))} type="text" autocomplete="off" tabindex="-1" data-v-08e9aae6></div>`);
        if (unref(state) === "error") {
          _push(`<p class="lead-form__error" data-v-08e9aae6>${ssrInterpolate(unref(textFor)(labels.failure))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="button-row" data-v-08e9aae6><button type="submit" class="base-button primary"${ssrIncludeBooleanAttr(unref(state) === "sending") ? " disabled" : ""} data-v-08e9aae6>${ssrInterpolate(unref(state) === "sending" ? unref(textFor)(labels.sending) : unref(textFor)(props.form === "contact" ? labels.submitMessage : labels.submit))}</button></div><!--]-->`);
      }
      _push(`</form>`);
    };
  }
});
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/LeadForm.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const LeadForm = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__scopeId", "data-v-08e9aae6"]]);
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "ContactPage",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, textFor } = useSiteContent();
    const { allowsExternalMaps } = useCookieConsent();
    const labels = {
      address: t$1("Address:", "Adresse :", "\u0627\u0644\u0639\u0646\u0648\u0627\u0646:"),
      hours: t$1("Working Hours:", "Horaires :", "\u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0639\u0645\u0644:"),
      phone: t$1("Phone Number:", "Num\xE9ro de t\xE9l\xE9phone :", "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641:"),
      email: t$1("Email:", "E-mail :", "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A:"),
      formHeading: t$1(
        "Any questions? Feel free to contact us!",
        "Une question ? N\u2019h\xE9sitez pas \xE0 nous contacter !",
        "\u0644\u062F\u064A\u0643 \u0633\u0624\u0627\u0644\u061F \u0644\u0627 \u062A\u062A\u0631\u062F\u062F \u0641\u064A \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627!"
      ),
      mapTitle: t$1("Google Map", "Carte Google", "\u062E\u0631\u064A\u0637\u0629 Google"),
      mapConsent: t$1("To display Google Maps, please accept optional cookies.", "Pour afficher Google Maps, veuillez accepter les cookies facultatifs.", "\u0644\u0639\u0631\u0636 \u062E\u0631\u0627\u0626\u0637 Google\u060C \u064A\u0631\u062C\u0649 \u0642\u0628\u0648\u0644 \u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637 \u0627\u0644\u0627\u062E\u062A\u064A\u0627\u0631\u064A\u0629."),
      cookieSettings: t$1("Cookie settings", "G\xE9rer les cookies", "\u0625\u062F\u0627\u0631\u0629 \u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637")
    };
    const mapSrc = computed(() => {
      const hl = locale.value.code === "en" ? "en-US" : locale.value.code;
      return `${dealerContact.mapUrl}${dealerContact.mapUrl.includes("?") ? "&" : "?"}output=embed&hl=${hl}&z=12`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-page" }, _attrs))} data-v-25a56957><h1 class="contact-page__title" data-v-25a56957>${ssrInterpolate(unref(textFor)(unref(leadForms).contact.title))}</h1><div class="contact-page__spacer" aria-hidden="true" data-v-25a56957></div><div class="contact-page__columns" data-v-25a56957><div class="contact-page__left" data-v-25a56957><p class="contact-page__details" data-v-25a56957><strong data-v-25a56957>${ssrInterpolate(unref(textFor)(labels.address))}\xA0</strong>${ssrInterpolate(unref(textFor)(unref(dealerContact).address))}<br data-v-25a56957><strong data-v-25a56957>${ssrInterpolate(unref(textFor)(labels.hours))}\xA0</strong>${ssrInterpolate(unref(textFor)(unref(dealerContact).workingHours))}<br data-v-25a56957><br data-v-25a56957><strong data-v-25a56957>${ssrInterpolate(unref(textFor)(labels.phone))}</strong> ${ssrInterpolate(unref(dealerContact).phone)}<br data-v-25a56957><strong data-v-25a56957>${ssrInterpolate(unref(textFor)(labels.email))}</strong><a${ssrRenderAttr("href", `mailto:${unref(dealerContact).email}`)} data-v-25a56957>${ssrInterpolate(unref(dealerContact).email)}</a></p><div class="contact-page__spacer" aria-hidden="true" data-v-25a56957></div><h2 class="contact-page__form-title" data-v-25a56957>${ssrInterpolate(unref(textFor)(labels.formHeading))}</h2>`);
      _push(ssrRenderComponent(LeadForm, {
        form: "contact",
        key: unref(locale).code
      }, null, _parent));
      _push(`</div><div class="contact-page__right" data-v-25a56957>`);
      if (unref(allowsExternalMaps)) {
        _push(`<iframe${ssrRenderAttr("src", unref(mapSrc))}${ssrRenderAttr("title", unref(textFor)(labels.mapTitle))} loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen data-v-25a56957></iframe>`);
      } else {
        _push(`<div class="contact-page__map-consent" data-v-25a56957><p data-v-25a56957>${ssrInterpolate(unref(textFor)(labels.mapConsent))}</p><button type="button" data-v-25a56957>${ssrInterpolate(unref(textFor)(labels.cookieSettings))}</button></div>`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/ContactPage.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const ContactPage = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-25a56957"]]);
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "LegalPage",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    const { textFor } = useSiteContent();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["legal-page", `legal-page--${__props.page.slug.replace(".html", "")}`]
      }, _attrs))} data-v-5c206435><article class="container legal-article" data-v-5c206435><h1 class="legal-article__title" data-v-5c206435>${ssrInterpolate(unref(textFor)(__props.page.title))}</h1>`);
      if (__props.page.summary) {
        _push(`<p class="legal-article__summary" data-v-5c206435>${ssrInterpolate(unref(textFor)(__props.page.summary))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(__props.page.sections, (section, index) => {
        _push(`<section${ssrRenderAttr("id", `legal-${index + 1}`)} class="legal-article__section" data-v-5c206435><h2 class="legal-article__heading" data-v-5c206435>${ssrInterpolate(unref(textFor)(section.title))}</h2><!--[-->`);
        ssrRenderList(section.paragraphs, (paragraph) => {
          _push(`<p class="legal-article__paragraph" data-v-5c206435>${ssrInterpolate(unref(textFor)(paragraph))}</p>`);
        });
        _push(`<!--]--></section>`);
      });
      _push(`<!--]--></article></div>`);
    };
  }
});
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/LegalPage.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const LegalPage = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__scopeId", "data-v-5c206435"]]);
const _sfc_main$E = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/legacy/LegacyBusinessPage.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const _imports_0$g = publicAssetsURL("/reference-models/service-customer-care.png");
const _imports_1$d = publicAssetsURL("/voyah-resources/service/icons/service-digital-followup.png");
const _imports_2$9 = publicAssetsURL("/assets/voyah/home-image-11.jpg");
const _imports_3$9 = publicAssetsURL("/voyah-resources/service/icons/warranty-badge-first-service.png");
const _imports_4$6 = publicAssetsURL("/voyah-resources/service/icons/warranty-badge-vehicle.png");
const _imports_5$4 = publicAssetsURL("/assets/voyah/home-image-13.jpg");
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "ServicePage",
  __ssrInlineRender: true,
  setup(__props) {
    const { textFor } = useSiteContent();
    useSectionReveal({});
    useSectionReveal({});
    useSectionReveal({});
    useSectionReveal({});
    useSectionReveal({});
    const labels = {
      title: t$1("Voyah Service", "Service Voyah", "\u062E\u062F\u0645\u0627\u062A Voyah"),
      careTitle: t$1(
        "Exceptional care. At every step.",
        "Des soins exceptionnels. \xC0 chaque \xE9tape.",
        "\u0639\u0646\u0627\u064A\u0629 \u0627\u0633\u062A\u062B\u0646\u0627\u0626\u064A\u0629 \u0641\u064A \u0643\u0644 \u0645\u0631\u062D\u0644\u0629."
      ),
      careIntro: t$1(
        "VOYAH service is designed to give you peace of mind from the moment you take the wheel. From routine maintenance to software updates, our dedicated service network guarantees optimal performance in every circumstance for your VOYAH.",
        "Le service VOYAH est con\xE7u pour vous offrir une tranquillit\xE9 d\u2019esprit d\xE8s que vous prenez le volant. De l\u2019entretien courant aux mises \xE0 jour logicielles, notre r\xE9seau de service d\xE9di\xE9 garantit des performances optimales en toutes circonstances pour votre VOYAH.",
        "\u0635\u064F\u0645\u0645\u062A \u062E\u062F\u0645\u0629 \u0641\u0648\u0627\u0647 \u0644\u062A\u0645\u0646\u062D\u0643 \u0631\u0627\u062D\u0629 \u0627\u0644\u0628\u0627\u0644 \u0645\u0646\u0630 \u0644\u062D\u0638\u0629 \u0625\u0645\u0633\u0627\u0643 \u0627\u0644\u0645\u0642\u0648\u062F. \u0645\u0646 \u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0627\u0644\u062F\u0648\u0631\u064A\u0629 \u0625\u0644\u0649 \u062A\u062D\u062F\u064A\u062B\u0627\u062A \u0627\u0644\u0628\u0631\u0645\u062C\u064A\u0627\u062A\u060C \u062A\u0636\u0645\u0646 \u0634\u0628\u0643\u0629 \u0627\u0644\u062E\u062F\u0645\u0629 \u0627\u0644\u0645\u062E\u0635\u0635\u0629 \u0644\u062F\u064A\u0646\u0627 \u0623\u062F\u0627\u0621\u064B \u0623\u0645\u062B\u0644\u0627\u064B \u0641\u064A \u0643\u0644 \u0627\u0644\u0638\u0631\u0648\u0641 \u0644\u0633\u064A\u0627\u0631\u062A\u0643 \u0641\u0648\u0627\u0647."
      ),
      care1Title: t$1(
        "Complete certified expertise in repairing electric (EV) and plug-in hybrid vehicles.",
        "Expertise certifi\xE9e compl\xE8te en r\xE9paration des v\xE9hicules \xE9lectriques (EV) et hybrides rechargeables.",
        "\u062E\u0628\u0631\u0629 \u0645\u0639\u062A\u0645\u062F\u0629 \u0643\u0627\u0645\u0644\u0629 \u0641\u064A \u0625\u0635\u0644\u0627\u062D \u0627\u0644\u0645\u0631\u0643\u0628\u0627\u062A \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 (EV) \u0648\u0627\u0644\u0647\u062C\u064A\u0646\u0629 \u0627\u0644\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0634\u062D\u0646."
      ),
      care1Desc: t$1(
        "Our qualified specialists handle every vehicle with precision and care.",
        "Nos sp\xE9cialistes qualifi\xE9s manipulent chaque v\xE9hicule avec pr\xE9cision et soin.",
        "\u064A\u062A\u0639\u0627\u0645\u0644 \u0645\u062A\u062E\u0635\u0635\u0648\u0646\u0627 \u0627\u0644\u0645\u0624\u0647\u0644\u0648\u0646 \u0645\u0639 \u0643\u0644 \u0645\u0631\u0643\u0628\u0629 \u0628\u062F\u0642\u0629 \u0648\u0639\u0646\u0627\u064A\u0629."
      ),
      care2Title: t$1("Genuine parts", "Pi\xE8ces d\u2019origine", "\u0642\u0637\u0639 \u063A\u064A\u0627\u0631 \u0623\u0635\u0644\u064A\u0629"),
      care2Desc: t$1(
        "Only certified VOYAH components guarantee reliability and longevity.",
        "Seuls des composants VOYAH certifi\xE9s garantissent fiabilit\xE9 et long\xE9vit\xE9.",
        "\u0642\u0637\u0639 \u0641\u0648\u0627\u0647 \u0627\u0644\u0645\u0639\u062A\u0645\u062F\u0629 \u0648\u062D\u062F\u0647\u0627 \u062A\u0636\u0645\u0646 \u0627\u0644\u0645\u0648\u062B\u0648\u0642\u064A\u0629 \u0648\u0637\u0648\u0644 \u0627\u0644\u0639\u0645\u0631."
      ),
      care3Title: t$1("Smart diagnostics", "Diagnostic intelligent", "\u062A\u0634\u062E\u064A\u0635 \u0630\u0643\u064A"),
      care3Desc: t$1(
        "Advanced digital tools detect and resolve problems proactively.",
        "Les outils num\xE9riques avanc\xE9s d\xE9tectent et r\xE9solvent les probl\xE8mes de mani\xE8re proactive.",
        "\u062A\u0643\u062A\u0634\u0641 \u0627\u0644\u0623\u062F\u0648\u0627\u062A \u0627\u0644\u0631\u0642\u0645\u064A\u0629 \u0627\u0644\u0645\u062A\u0642\u062F\u0645\u0629 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062A \u0648\u062A\u062D\u0644\u0647\u0627 \u0628\u0634\u0643\u0644 \u0627\u0633\u062A\u0628\u0627\u0642\u064A."
      ),
      care4Title: t$1("Seamless experience", "Exp\xE9rience sans faille", "\u062A\u062C\u0631\u0628\u0629 \u0628\u0644\u0627 \u062E\u0644\u0644"),
      care4Desc: t$1(
        "Easy booking, transparent pricing and exceptional assistance.",
        "R\xE9servation facile, prix transparents et assistance exceptionnelle.",
        "\u062D\u062C\u0632 \u0633\u0647\u0644 \u0648\u0623\u0633\u0639\u0627\u0631 \u0634\u0641\u0627\u0641\u0629 \u0648\u0645\u0633\u0627\u0646\u062F\u0629 \u0627\u0633\u062A\u062B\u0646\u0627\u0626\u064A\u0629."
      ),
      care5Title: t$1("Online tracking and digital assistance", "Suivi en ligne et assistance digitale", "\u0645\u062A\u0627\u0628\u0639\u0629 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629 \u0648\u0645\u0633\u0627\u0646\u062F\u0629 \u0631\u0642\u0645\u064A\u0629"),
      care5Desc: t$1(
        "Follow your services with ease thanks to our digital solutions and online assistance, for quick support that is accessible at any time.",
        "B\xE9n\xE9ficiez d\u2019un suivi simplifi\xE9 de vos services gr\xE2ce \xE0 nos solutions digitales et \xE0 une assistance en ligne, pour un accompagnement rapide et accessible \xE0 tout moment.",
        "\u062A\u0627\u0628\u0639 \u062E\u062F\u0645\u0627\u062A\u0643 \u0628\u0633\u0647\u0648\u0644\u0629 \u0628\u0641\u0636\u0644 \u062D\u0644\u0648\u0644\u0646\u0627 \u0627\u0644\u0631\u0642\u0645\u064A\u0629 \u0648\u0627\u0644\u0645\u0633\u0627\u0646\u062F\u0629 \u0639\u0628\u0631 \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A\u060C \u0644\u0645\u0631\u0627\u0641\u0642\u0629 \u0633\u0631\u064A\u0639\u0629 \u0648\u0645\u062A\u0627\u062D\u0629 \u0641\u064A \u0623\u064A \u0648\u0642\u062A."
      ),
      careCta: t$1("Book your appointment", "R\xE9servez votre rendez-vous", "\u0627\u062D\u062C\u0632 \u0645\u0648\u0639\u062F\u0643"),
      appointmentTitle: t$1("Book an appointment", "Prenez rendez-vous", "\u0627\u062D\u062C\u0632 \u0645\u0648\u0639\u062F\u0627\u064B"),
      appointmentIntro: t$1(
        "Schedule your visit to the VOYAH workshop and our after-sales team confirms the slot by phone.",
        "Planifiez votre passage \xE0 l\u2019atelier VOYAH ; notre service apr\xE8s-vente confirme le cr\xE9neau par t\xE9l\xE9phone.",
        "\u062D\u062F\u062F \u0645\u0648\u0639\u062F \u0632\u064A\u0627\u0631\u062A\u0643 \u0644\u0648\u0631\u0634\u0629 \u0641\u0648\u0627\u0647 \u0648\u0633\u064A\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0641\u0631\u064A\u0642 \u0645\u0627 \u0628\u0639\u062F \u0627\u0644\u0628\u064A\u0639 \u0644\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0645\u0648\u0639\u062F \u0647\u0627\u062A\u0641\u064A\u0627\u064B."
      ),
      warrantyTitle: t$1(
        "Guaranteed confidence. For every journey.",
        "Confiance garantie. Pour chaque voyage.",
        "\u062B\u0642\u0629 \u0645\u0636\u0645\u0648\u0646\u0629. \u0644\u0643\u0644 \u0631\u062D\u0644\u0629."
      ),
      warrantyIntro1: t$1(
        "The VOYAH warranty is designed to give you total peace of mind from the very first day.",
        "La garantie VOYAH est con\xE7ue pour vous offrir une tranquillit\xE9 d\u2019esprit totale d\xE8s le premier jour.",
        "\u0635\u064F\u0645\u0645 \u0636\u0645\u0627\u0646 \u0641\u0648\u0627\u0647 \u0644\u064A\u0645\u0646\u062D\u0643 \u0631\u0627\u062D\u0629 \u0628\u0627\u0644 \u0643\u0627\u0645\u0644\u0629 \u0645\u0646\u0630 \u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0623\u0648\u0644."
      ),
      warrantyIntro2: t$1(
        "From essential components to advanced electrical systems, your vehicle is protected by complete coverage.",
        "Des composants essentiels aux syst\xE8mes \xE9lectriques de pointe, votre v\xE9hicule est prot\xE9g\xE9 par une couverture compl\xE8te.",
        "\u0645\u0646 \u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0625\u0644\u0649 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0627\u0644\u0645\u062A\u0642\u062F\u0645\u0629\u060C \u0645\u0631\u0643\u0628\u062A\u0643 \u0645\u062D\u0645\u064A\u0629 \u0628\u062A\u063A\u0637\u064A\u0629 \u0634\u0627\u0645\u0644\u0629."
      ),
      warrantyBadge1: t$1(
        "First service 10,000 km and unlimited kilometres",
        "Premi\xE8re r\xE9vision 10.000 km et kilom\xE8tres illimit\xE9s",
        "\u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0627\u0644\u0623\u0648\u0644\u0649 10.000 \u0643\u0645 \u0648\u0643\u064A\u0644\u0648\u0645\u062A\u0631\u0627\u062A \u063A\u064A\u0631 \u0645\u062D\u062F\u0648\u062F\u0629"
      ),
      warrantyBadge2: t$1("6 years and/or 200,000 km", "6 ans et/ou 200.000 km", "6 \u0633\u0646\u0648\u0627\u062A \u0648/\u0623\u0648 200.000 \u0643\u0645"),
      warrantyBadge3Top: t$1("12 months", "12 mois", "12 \u0634\u0647\u0631\u0627\u064B"),
      warrantyBadge3Bottom: t$1("or 20,000 km", "ou 20.000 km", "\u0623\u0648 20.000 \u0643\u0645"),
      warranty1Title: t$1(
        "Battery and power supply protection*",
        "Protection de la batterie et de l\u2019alimentation*",
        "\u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629 \u0648\u0646\u0638\u0627\u0645 \u0627\u0644\u062A\u063A\u0630\u064A\u0629*"
      ),
      warranty1Desc: t$1(
        "Covers high-voltage battery systems, motors and electric drive systems.",
        "Couvre les syst\xE8mes de batteries haute tension, les moteurs et les syst\xE8mes d\u2019entra\xEEnement \xE9lectrique.",
        "\u064A\u0634\u0645\u0644 \u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629 \u0639\u0627\u0644\u064A\u0629 \u0627\u0644\u062C\u0647\u062F \u0648\u0627\u0644\u0645\u062D\u0631\u0643\u0627\u062A \u0648\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u062F\u0641\u0639 \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A."
      ),
      warranty2Title: t$1("Complete coverage*", "Couverture compl\xE8te*", "\u062A\u063A\u0637\u064A\u0629 \u0634\u0627\u0645\u0644\u0629*"),
      warranty2Desc: t$1(
        "Protection of the vehicle\u2019s main systems, notably the transmission, electronics and essential components.",
        "Protection des principaux syst\xE8mes du v\xE9hicule, notamment la transmission, l\u2019\xE9lectronique et les composants essentiels.",
        "\u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 \u0644\u0644\u0645\u0631\u0643\u0628\u0629\u060C \u0644\u0627 \u0633\u064A\u0645\u0627 \u0646\u0627\u0642\u0644 \u0627\u0644\u062D\u0631\u0643\u0629 \u0648\u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0627\u062A \u0648\u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629."
      ),
      warranty3Title: t$1("Genuine parts warranty*", "Garantie de pi\xE8ces d\u2019origine*", "\u0636\u0645\u0627\u0646 \u0642\u0637\u0639 \u0627\u0644\u063A\u064A\u0627\u0631 \u0627\u0644\u0623\u0635\u0644\u064A\u0629*"),
      warranty3Desc: t$1(
        "All replacement parts are certified VOYAH parts, a guarantee of quality and safety.",
        "Toutes les pi\xE8ces de rechange sont des pi\xE8ces VOYAH certifi\xE9es, gage de qualit\xE9 et de s\xE9curit\xE9.",
        "\u062C\u0645\u064A\u0639 \u0642\u0637\u0639 \u0627\u0644\u063A\u064A\u0627\u0631 \u0647\u064A \u0642\u0637\u0639 \u0641\u0648\u0627\u0647 \u0645\u0639\u062A\u0645\u062F\u0629\u060C \u0636\u0645\u0627\u0646 \u0644\u0644\u062C\u0648\u062F\u0629 \u0648\u0627\u0644\u0633\u0644\u0627\u0645\u0629."
      ),
      warrantyFootnote: t$1(
        "* Subject to the conditions set out in the VOYAH warranty certificate.",
        "* Sous r\xE9serve des conditions pr\xE9vues par le certificat de garantie VOYAH.",
        "* \u0631\u0647\u0646\u0627\u064B \u0628\u0627\u0644\u0634\u0631\u0648\u0637 \u0627\u0644\u0648\u0627\u0631\u062F\u0629 \u0641\u064A \u0634\u0647\u0627\u062F\u0629 \u0636\u0645\u0627\u0646 \u0641\u0648\u0627\u0647."
      )
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "service-page" }, _attrs))} data-v-07fa0cbc><section class="service-hero" data-v-07fa0cbc><img class="service-hero__image" data-reveal${ssrRenderAttr("src", _imports_0$g)}${ssrRenderAttr("alt", unref(textFor)(labels.title))} data-v-07fa0cbc><div class="service-hero__overlay" data-v-07fa0cbc><h1 data-reveal data-v-07fa0cbc>${ssrInterpolate(unref(textFor)(labels.title))}</h1></div></section><section class="care-section" data-v-07fa0cbc><div class="care-grid" data-v-07fa0cbc><div class="care-content" data-reveal data-v-07fa0cbc><h2 data-v-07fa0cbc>${ssrInterpolate(unref(textFor)(labels.careTitle))}</h2><p class="care-intro" data-v-07fa0cbc>${ssrInterpolate(unref(textFor)(labels.careIntro))}</p><ul class="care-list" data-v-07fa0cbc><li class="care-item" data-v-07fa0cbc><span class="care-icon" aria-hidden="true" data-v-07fa0cbc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-07fa0cbc><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" data-v-07fa0cbc></path><path d="m9 12 2 2 4-4" data-v-07fa0cbc></path></svg></span><div class="care-text" data-v-07fa0cbc><h3 data-v-07fa0cbc>${ssrInterpolate(unref(textFor)(labels.care1Title))}</h3><p data-v-07fa0cbc>${ssrInterpolate(unref(textFor)(labels.care1Desc))}</p></div></li><li class="care-item" data-v-07fa0cbc><span class="care-icon" aria-hidden="true" data-v-07fa0cbc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-07fa0cbc><path d="M6 3h12l4 6-10 12L2 9z" data-v-07fa0cbc></path><path d="M2 9h20" data-v-07fa0cbc></path><path d="M12 21 9 9l3-6 3 6z" data-v-07fa0cbc></path></svg></span><div class="care-text" data-v-07fa0cbc><h3 data-v-07fa0cbc>${ssrInterpolate(unref(textFor)(labels.care2Title))}</h3><p data-v-07fa0cbc>${ssrInterpolate(unref(textFor)(labels.care2Desc))}</p></div></li><li class="care-item" data-v-07fa0cbc><span class="care-icon" aria-hidden="true" data-v-07fa0cbc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-07fa0cbc><path d="M9 18h6" data-v-07fa0cbc></path><path d="M10 22h4" data-v-07fa0cbc></path><path d="M12 2a7 7 0 0 0-4 12.7V18h8v-3.3A7 7 0 0 0 12 2z" data-v-07fa0cbc></path></svg></span><div class="care-text" data-v-07fa0cbc><h3 data-v-07fa0cbc>${ssrInterpolate(unref(textFor)(labels.care3Title))}</h3><p data-v-07fa0cbc>${ssrInterpolate(unref(textFor)(labels.care3Desc))}</p></div></li><li class="care-item" data-v-07fa0cbc><span class="care-icon" aria-hidden="true" data-v-07fa0cbc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-07fa0cbc><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.2-5.4-2.9-5.4 2.9 1-6.2L3.2 9.5l6.1-.9z" data-v-07fa0cbc></path></svg></span><div class="care-text" data-v-07fa0cbc><h3 data-v-07fa0cbc>${ssrInterpolate(unref(textFor)(labels.care4Title))}</h3><p data-v-07fa0cbc>${ssrInterpolate(unref(textFor)(labels.care4Desc))}</p></div></li><li class="care-item" data-v-07fa0cbc><img class="care-icon-image"${ssrRenderAttr("src", _imports_1$d)}${ssrRenderAttr("alt", unref(textFor)(labels.care5Title))} loading="lazy" data-v-07fa0cbc><div class="care-text" data-v-07fa0cbc><h3 data-v-07fa0cbc>${ssrInterpolate(unref(textFor)(labels.care5Title))}</h3><p data-v-07fa0cbc>${ssrInterpolate(unref(textFor)(labels.care5Desc))}</p></div></li></ul><button type="button" class="base-button primary care-cta" data-v-07fa0cbc>${ssrInterpolate(unref(textFor)(labels.careCta))}</button></div><div class="care-media" data-reveal data-v-07fa0cbc><img${ssrRenderAttr("src", _imports_2$9)}${ssrRenderAttr("alt", unref(textFor)(labels.careTitle))} loading="lazy" data-v-07fa0cbc></div></div></section><section id="rendez-vous" class="appointment-section" data-v-07fa0cbc><div class="appointment-inner" data-reveal data-v-07fa0cbc><h2 data-v-07fa0cbc>${ssrInterpolate(unref(textFor)(labels.appointmentTitle))}</h2><p class="appointment-intro" data-v-07fa0cbc>${ssrInterpolate(unref(textFor)(labels.appointmentIntro))}</p><div class="appointment-card" data-v-07fa0cbc>`);
      _push(ssrRenderComponent(LeadForm, { form: "appointment" }, null, _parent));
      _push(`</div></div></section><section class="warranty-section" data-v-07fa0cbc><div class="warranty-grid" data-v-07fa0cbc><div class="warranty-content" data-reveal data-v-07fa0cbc><h2 data-v-07fa0cbc>${ssrInterpolate(unref(textFor)(labels.warrantyTitle))}</h2><p class="warranty-intro" data-v-07fa0cbc>${ssrInterpolate(unref(textFor)(labels.warrantyIntro1))} <br data-v-07fa0cbc> ${ssrInterpolate(unref(textFor)(labels.warrantyIntro2))}</p><ul class="warranty-list" data-v-07fa0cbc><li class="warranty-item" data-v-07fa0cbc><img class="warranty-badge-image"${ssrRenderAttr("src", _imports_3$9)}${ssrRenderAttr("alt", unref(textFor)(labels.warrantyBadge1))} loading="lazy" data-v-07fa0cbc><div class="warranty-text" data-v-07fa0cbc><h3 data-v-07fa0cbc>${ssrInterpolate(unref(textFor)(labels.warranty1Title))}</h3><p data-v-07fa0cbc>${ssrInterpolate(unref(textFor)(labels.warranty1Desc))}</p></div></li><li class="warranty-item" data-v-07fa0cbc><img class="warranty-badge-image"${ssrRenderAttr("src", _imports_4$6)}${ssrRenderAttr("alt", unref(textFor)(labels.warrantyBadge2))} loading="lazy" data-v-07fa0cbc><div class="warranty-text" data-v-07fa0cbc><h3 data-v-07fa0cbc>${ssrInterpolate(unref(textFor)(labels.warranty2Title))}</h3><p data-v-07fa0cbc>${ssrInterpolate(unref(textFor)(labels.warranty2Desc))}</p></div></li><li class="warranty-item" data-v-07fa0cbc><span class="warranty-badge-text" aria-hidden="true" data-v-07fa0cbc><strong data-v-07fa0cbc>${ssrInterpolate(unref(textFor)(labels.warrantyBadge3Top))}</strong><small data-v-07fa0cbc>${ssrInterpolate(unref(textFor)(labels.warrantyBadge3Bottom))}</small></span><div class="warranty-text" data-v-07fa0cbc><h3 data-v-07fa0cbc>${ssrInterpolate(unref(textFor)(labels.warranty3Title))}</h3><p data-v-07fa0cbc>${ssrInterpolate(unref(textFor)(labels.warranty3Desc))}</p></div></li></ul><p class="warranty-footnote" data-v-07fa0cbc>${ssrInterpolate(unref(textFor)(labels.warrantyFootnote))}</p></div><div class="warranty-media" data-reveal data-v-07fa0cbc><img${ssrRenderAttr("src", _imports_5$4)}${ssrRenderAttr("alt", unref(textFor)(labels.warrantyTitle))} loading="lazy" data-v-07fa0cbc></div></div></section><div data-v-07fa0cbc>`);
      _push(ssrRenderComponent(ContactPage, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/ServicePage.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const ServicePage = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__scopeId", "data-v-07fa0cbc"]]);
const _sfc_main$C = /* @__PURE__ */ defineComponent({
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
      }, _attrs))} data-v-d7913fe1><div class="container model-chapter-nav-inner" data-v-d7913fe1><!--[-->`);
      ssrRenderList(__props.sections, (section) => {
        _push(`<a${ssrRenderAttr("href", `#${section.id}`)} class="${ssrRenderClass(["model-chapter-link", { active: unref(activeSection) === section.id }])}" data-v-d7913fe1>${ssrInterpolate(section.label)}</a>`);
      });
      _push(`<!--]--></div></nav>`);
    };
  }
});
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/model/ModelChapterNav.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const ModelChapterNav = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__scopeId", "data-v-d7913fe1"]]);
const _sfc_main$B = /* @__PURE__ */ defineComponent({
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
    const sectionRef = ref(null);
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
        ref_key: "sectionRef",
        ref: sectionRef,
        id: __props.section.id,
        class: [
          "model-media-section",
          `model-media-section--${__props.section.kind}`,
          `model-media-section--${__props.modelSlug.replace(".html", "")}`,
          { reverse: __props.index % 2 === 1 }
        ]
      }, _attrs))} data-v-5bdc6a1c>`);
      if (__props.section.kind === "banner") {
        _push(`<div class="model-banner" style="${ssrRenderStyle(bannerStyle.value)}" data-parallax data-v-5bdc6a1c><div class="model-banner-overlay" data-v-5bdc6a1c></div><div class="container model-banner-inner" data-reveal data-v-5bdc6a1c><h2 class="model-banner-title" data-v-5bdc6a1c>${ssrInterpolate(__props.section.title)}</h2>`);
        if (__props.section.summary) {
          _push(`<p class="model-banner-subtitle" data-v-5bdc6a1c>${ssrInterpolate(__props.section.summary)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<div class="container model-media-content" data-v-5bdc6a1c><div class="model-media-head" data-reveal data-v-5bdc6a1c>`);
        if (__props.section.kicker) {
          _push(`<p class="model-media-kicker" data-v-5bdc6a1c>${ssrInterpolate(__props.section.kicker)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h2 class="model-media-title" data-v-5bdc6a1c>${ssrInterpolate(__props.section.title)}</h2>`);
        if (__props.section.summary) {
          _push(`<p class="model-media-summary" data-v-5bdc6a1c>${ssrInterpolate(__props.section.summary)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (__props.section.kind === "carousel") {
          _push(`<div class="model-carousel-wrap" data-reveal data-v-5bdc6a1c><div class="model-carousel-stage" data-v-5bdc6a1c>`);
          if (activeCarouselSlide.value) {
            _push(`<article class="model-carousel-card active model-carousel-card--featured" data-v-5bdc6a1c><div class="model-carousel-media" data-parallax data-v-5bdc6a1c>`);
            if (activeCarouselSlide.value.video) {
              _push(`<video${ssrRenderAttr("poster", activeCarouselSlide.value.image)} autoplay muted loop playsinline preload="metadata" data-v-5bdc6a1c><source${ssrRenderAttr("src", activeCarouselSlide.value.video)} type="video/mp4" data-v-5bdc6a1c></video>`);
            } else {
              _push(`<img${ssrRenderAttr("src", activeCarouselSlide.value.image)}${ssrRenderAttr("alt", activeCarouselSlide.value.title)} draggable="false" data-v-5bdc6a1c>`);
            }
            _push(`</div><div class="model-carousel-copy" data-v-5bdc6a1c><p class="model-carousel-copy-title" data-v-5bdc6a1c>${ssrInterpolate(activeCarouselSlide.value.title)}</p><p class="model-carousel-copy-text" data-v-5bdc6a1c>${ssrInterpolate(activeCarouselSlide.value.summary)}</p></div></article>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="model-carousel-rail" data-v-5bdc6a1c><!--[-->`);
          ssrRenderList(carouselSlides.value, (slide, slideIndex) => {
            _push(`<button type="button" class="${ssrRenderClass(["model-carousel-card", "model-carousel-card--rail", { active: activeSlide.value === slideIndex }])}" data-v-5bdc6a1c><div class="model-carousel-rail-media" data-v-5bdc6a1c><img${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", slide.title)} draggable="false" data-v-5bdc6a1c></div><div class="model-carousel-rail-copy" data-v-5bdc6a1c><p class="model-carousel-rail-title" data-v-5bdc6a1c>${ssrInterpolate(slide.title)}</p><p class="model-carousel-rail-text" data-v-5bdc6a1c>${ssrInterpolate(slide.summary)}</p></div></button>`);
          });
          _push(`<!--]--></div></div><div class="model-carousel-pagination" aria-hidden="true" data-v-5bdc6a1c><!--[-->`);
          ssrRenderList(carouselSlides.value, (slide, slideIndex) => {
            _push(`<button type="button" class="${ssrRenderClass(["model-carousel-bullet", { active: activeSlide.value === slideIndex }])}" data-v-5bdc6a1c></button>`);
          });
          _push(`<!--]--></div><div class="model-carousel-drawer" data-v-5bdc6a1c><div class="model-carousel-list" data-v-5bdc6a1c><!--[-->`);
          ssrRenderList(carouselSlides.value, (slide, slideIndex) => {
            _push(`<button type="button" class="${ssrRenderClass(["model-carousel-item", { active: activeSlide.value === slideIndex }])}" data-v-5bdc6a1c><p class="model-carousel-item-title" data-v-5bdc6a1c>${ssrInterpolate(slide.title)}</p></button>`);
          });
          _push(`<!--]--></div><p class="model-carousel-drawer-text" data-v-5bdc6a1c>${ssrInterpolate((_a = carouselSlides.value[activeSlide.value]) == null ? void 0 : _a.summary)}</p></div></div>`);
        } else {
          _push(`<div class="model-image-block" data-reveal data-v-5bdc6a1c><div class="model-image-frame" data-parallax data-v-5bdc6a1c>`);
          if ((_b = __props.section.videos) == null ? void 0 : _b.length) {
            _push(`<video${ssrRenderAttr("poster", (_d = (_c = __props.section.image) != null ? _c : __props.section.images[0]) != null ? _d : "")} autoplay muted loop playsinline preload="metadata" data-v-5bdc6a1c><source${ssrRenderAttr("src", __props.section.videos[0])} type="video/mp4" data-v-5bdc6a1c></video>`);
          } else {
            _push(`<img${ssrRenderAttr("src", (_f = (_e = __props.section.image) != null ? _e : __props.section.images[0]) != null ? _f : "")}${ssrRenderAttr("alt", __props.section.title)} draggable="false" data-v-5bdc6a1c>`);
          }
          _push(`</div><div class="model-detail-grid" data-v-5bdc6a1c><!--[-->`);
          ssrRenderList(details.value, (detail, detailIndex) => {
            _push(`<article class="model-detail-card" data-v-5bdc6a1c><p class="model-detail-title" data-v-5bdc6a1c>${ssrInterpolate(detail.title)}</p><p class="model-detail-summary" data-v-5bdc6a1c>${ssrInterpolate(detail.summary)}</p></article>`);
          });
          _push(`<!--]--></div></div>`);
        }
        _push(`</div>`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/model/ModelMediaSection.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const ModelMediaSection = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-5bdc6a1c"]]);
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
  "Passion": carGallery("passion", [
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
  "Free": carGallery("free", [
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
  "Courage": carGallery("courage", [
    "1920/h37_pc01_0001.jpg",
    "1920/h37_pc02_0001.jpg",
    "1920/h37_pc03_0001.jpg",
    "1920/h37_pc04_0001.jpg",
    "1920/h37_pc06_0001.jpg",
    "1920/h37_pc10_0001.jpg",
    "1920/h37_pc14_0001.jpg",
    "1920/h37_pc17_0001.jpg"
  ]),
  "Dream": carGallery("newDreamer26", [
    "kv_1920.jpg",
    "sc_3.jpg",
    "sc_5.jpg",
    "sc_10.jpg",
    "sc_15.jpg",
    "sc_21.jpg",
    "sc_5-2.jpg"
  ]),
  "dreamer-champion.html": carGallery("dreamer-champion", [
    "kv_0408_1920.jpg",
    "bg_3_n.jpg",
    "bg_7_n_banner04.jpg",
    "bg_12_n_banner01.jpg",
    "bg_14_n.jpg",
    "bg_16_n_banner01.jpg",
    "bg_20_n_banner01.jpg",
    "bg_24_n_banner01.jpg"
  ]),
  "newDreamer.html": carGallery("newDreamer", [
    "kv_1920.png",
    "h56c_pc03_0001.jpg",
    "h56c_pc03_0002.jpg",
    "h56c_pc08_banner01.jpg",
    "h56c_pc08_banner02.jpg",
    "h56c_pc20_bg.jpg",
    "bg_swiper_3_1_n.jpg",
    "bg_4_n.jpg"
  ]),
  "dreamriver.html": carGallery("dreamriver", [
    "kv_1920.png",
    "sc_2.png",
    "sc_4.png",
    "sc_5.png",
    "sc_6-2.png",
    "sc_7-2.png",
    "sc_8-2.png"
  ]),
  "dreamer.html": carGallery("dreamer", [
    "kv_1920.jpg",
    "bg_swiper_10_1.jpg",
    "bg_swiper_14_1.jpg",
    "bg_swiper_18_1.jpg",
    "bg_swiper_22_1.jpg",
    "bg_swiper_26_1.jpg",
    "bg_swiper_4_1.jpg",
    "bg_swiper_7_1.jpg"
  ])
};
const modelStorySectionMap = {
  "titan.html": [
    {
      id: "chapter-1",
      kicker: t("01 Luxury", "01 Luxe", "01 \u0627\u0644\u0641\u062E\u0627\u0645\u0629"),
      title: t("Flagship luxury", "Luxe phare", "\xD8\xA7\xD9\u201E\xD9\x81\xD8\xAE\xD8\xA7\xD9\u2026\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB1\xD8\xA7\xD8\xA6\xD8\xAF\xD8\xA9"),
      summary: t(
        "Titan opens with ceremonial full-size SUV proportions, a six-seat flagship posture, and a lounge-grade cabin tone shaped for premium family travel.",
        "Titan s\u2019ouvre avec des proportions de grand SUV c\xE9r\xE9monielles, une posture phare \xE0 six places et une tonalit\xE9 d\u2019habitacle de niveau lounge pens\xE9e pour le voyage familial premium.",
        "\u062A\u0628\u062F\u0623 Titan \u0628\u062A\u0646\u0627\u0633\u0628\u0627\u062A SUV \u0643\u0628\u064A\u0631\u0629 \u0628\u0637\u0627\u0628\u0639 \u0627\u062D\u062A\u0641\u0627\u0644\u064A\u060C \u0648\u0648\u0636\u0639\u064A\u0629 \u0631\u0627\u0626\u062F\u0629 \u0628\u0633\u062A\u0629 \u0645\u0642\u0627\u0639\u062F\u060C \u0648\u0646\u0628\u0631\u0629 \u0645\u0642\u0635\u0648\u0631\u0629 \u0641\u0627\u062E\u0631\u0629 \u0628\u0637\u0627\u0628\u0639 \u0627\u0644\u0635\u0627\u0644\u0648\u0646 \u0645\u0647\u064A\u0623\u0629 \u0644\u0644\u0633\u0641\u0631 \u0627\u0644\u0639\u0627\u0626\u0644\u064A \u0627\u0644\u0631\u0627\u0642\u064A."
      ),
      images: carGallery("titan", [
        "1920/sc_2.jpg",
        "1920/sc_3.jpg",
        "1920/sc_4_1.jpg",
        "1920/sc_4_2.jpg",
        "1920/sc_6_1.jpg",
        "1920/sc_7_1.jpg",
        "1920/sc_8_1.jpg",
        "1920/sc_9.jpg"
      ])
    },
    {
      id: "chapter-2",
      kicker: t("02 Intelligence", "02 Intelligence", "02 \u0627\u0644\u0630\u0643\u0627\u0621"),
      title: t("Flagship intelligence", "Intelligence phare", "\xD8\xA7\xD9\u201E\xD8\xB0\xD9\u0192\xD8\xA7\xD8\xA1 \xD8\xA7\xD9\u201E\xD8\xB1\xD8\xA7\xD8\xA6\xD8\xAF"),
      summary: t(
        "A digital Harmony-era cockpit, Huawei-assisted driving confidence, and premium in-cabin sound stage define Titan\u2019s flagship intelligence chapter.",
        "Un cockpit num\xE9rique de l\u2019\xE8re Harmony, une confiance de conduite assist\xE9e Huawei et une sc\xE8ne sonore premium \xE0 bord d\xE9finissent le chapitre d\u2019intelligence phare de Titan.",
        "\u062A\u062D\u062F\u062F \u0645\u0642\u0635\u0648\u0631\u0629 \u0631\u0642\u0645\u064A\u0629 \u0645\u0646 \u062C\u064A\u0644 Harmony \u0648\u062B\u0642\u0629 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0645\u0646 Huawei \u0648\u0645\u0634\u0647\u062F \u0627\u0644\u0635\u0648\u062A \u0627\u0644\u0641\u0627\u062E\u0631 \u062F\u0627\u062E\u0644 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0641\u0635\u0644 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0631\u0627\u0626\u062F \u0641\u064A Titan."
      ),
      images: carGallery("titan", [
        "1920/sc_20.jpg",
        "1920/sc_21.jpg",
        "1920/sc_22.jpg",
        "1920/sc_23.jpg",
        "1920/sc_11.jpg",
        "1920/sc_13_1.jpg"
      ]),
      videos: ["/voyah-resources/images/car/titan/video_01.mp4"]
    },
    {
      id: "chapter-3",
      kicker: t("03 Performance", "03 Performance", "03 \u0627\u0644\u0623\u062F\u0627\u0621"),
      title: t("Flagship performance", "Performance phare", "\xD8\xA7\xD9\u201E\xD8\xA3\xD8\xAF\xD8\xA7\xD8\xA1 \xD8\xA7\xD9\u201E\xD8\xB1\xD8\xA7\xD8\xA6\xD8\xAF"),
      summary: t(
        "A million-class comfort chassis, strong road-to-road capability, and long-range composure shape Titan into a calm yet forceful flagship SUV.",
        "Un ch\xE2ssis confort de classe million, de solides capacit\xE9s multi-usage et une grande s\xE9r\xE9nit\xE9 d\u2019autonomie fa\xE7onnent Titan en SUV phare \xE0 la fois calme et affirm\xE9.",
        "\u064A\u0634\u0643\u0644 \u0647\u064A\u0643\u0644 \u0631\u0627\u062D\u0629 \u0645\u0646 \u0641\u0626\u0629 \u0627\u0644\u0645\u0644\u064A\u0648\u0646 \u0648\u0642\u062F\u0631\u0627\u062A \u0642\u0648\u064A\u0629 \u0639\u0644\u0649 \u0645\u062E\u062A\u0644\u0641 \u0627\u0644\u0637\u0631\u0642 \u0648\u062B\u0628\u0627\u062A \u0645\u062F\u0649 \u0637\u0648\u064A\u0644 Titan \u0643\u0633\u0640\u064A\u0627\u0631\u0629 SUV \u0631\u0627\u0626\u062F\u0629 \u0647\u0627\u062F\u0626\u0629 \u0644\u0643\u0646\u0647\u0627 \u0642\u0648\u064A\u0629 \u0627\u0644\u062D\u0636\u0648\u0631."
      ),
      images: carGallery("titan", [
        "1920/sc_25.jpg",
        "1920/sc_27_1.jpg",
        "1920/sc_28.jpg",
        "1920/sc_29.jpg",
        "1920/sc_30.jpg",
        "1920/sc_31.jpg"
      ]),
      videos: ["/voyah-resources/images/car/titan/video_04.mp4"]
    },
    {
      id: "chapter-4",
      kicker: t("04 Safety", "04 S\xE9curit\xE9", "04 \u0627\u0644\u0633\u0644\u0627\u0645\u0629"),
      title: t("Flagship safety", "S\xC3\xA9curit\xC3\xA9 phare", "\xD8\xA7\xD9\u201E\xD8\xB3\xD9\u201E\xD8\xA7\xD9\u2026\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB1\xD8\xA7\xD8\xA6\xD8\xAF\xD8\xA9"),
      summary: t(
        "Reinforced body architecture, layered battery shielding, and full-cabin occupant protection complete Titan with flagship-level family security assurance.",
        "Une architecture de caisse renforc\xE9e, une protection batterie multicouche et une protection compl\xE8te des occupants finalisent Titan avec une assurance de s\xE9curit\xE9 familiale de niveau phare.",
        "\u062A\u064F\u0643\u0645\u0644 \u0628\u0646\u064A\u0629 \u0627\u0644\u0647\u064A\u0643\u0644 \u0627\u0644\u0645\u0639\u0632\u0632\u0629 \u0648\u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629 \u0645\u062A\u0639\u062F\u062F\u0629 \u0627\u0644\u0637\u0628\u0642\u0627\u062A \u0648\u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0631\u0643\u0627\u0628 \u0627\u0644\u0634\u0627\u0645\u0644\u0629 Titan \u0628\u062B\u0642\u0629 \u0633\u0644\u0627\u0645\u0629 \u0639\u0627\u0626\u0644\u064A\u0629 \u0639\u0644\u0649 \u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0637\u0631\u0627\u0632\u0627\u062A \u0627\u0644\u0631\u0627\u0626\u062F\u0629."
      ),
      images: carGallery("titan", [
        "1920/sc_32.jpg",
        "1920/sc_33_1.jpg",
        "1920/sc_33_2.jpg",
        "1920/sc_34_1.jpg",
        "1920/sc_35_1.jpg",
        "1920/sc_35_2.jpg"
      ])
    }
  ],
  "Dream": [
    {
      id: "chapter-1",
      title: t("Flagship luxury", "Luxe phare", "\xD8\xA7\xD9\u201E\xD9\x81\xD8\xAE\xD8\xA7\xD9\u2026\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB1\xD8\xA7\xD8\xA6\xD8\xAF\xD8\xA9"),
      summary: t(
        "Dreamer 26 opens with a ceremonial MPV presence, a grand family cabin, and second-row luxury that extends a premium hospitality experience.",
        "Dreamer 26 s\xE2\u20AC\u2122ouvre sur une pr\xC3\xA9sence de MPV c\xC3\xA9r\xC3\xA9monielle, un grand habitacle familial et un luxe de deuxi\xC3\xA8me rang qui prolonge son hospitalit\xC3\xA9 premium.",
        "\xD8\xAA\xD8\xA8\xD8\xAF\xD8\xA3 Dreamer 26 \xD8\xA8\xD8\xAD\xD8\xB6\xD9\u02C6\xD8\xB1 MPV \xD8\xA7\xD8\xAD\xD8\xAA\xD9\x81\xD8\xA7\xD9\u201E\xD9\u0160 \xD9\u02C6\xD9\u2026\xD9\u201A\xD8\xB5\xD9\u02C6\xD8\xB1\xD8\xA9 \xD8\xB9\xD8\xA7\xD8\xA6\xD9\u201E\xD9\u0160\xD8\xA9 \xD8\xB1\xD8\xAD\xD8\xA8\xD8\xA9 \xD9\u02C6\xD9\x81\xD8\xAE\xD8\xA7\xD9\u2026\xD8\xA9 \xD9\x81\xD9\u0160 \xD8\xA7\xD9\u201E\xD8\xB5\xD9\x81 \xD8\xA7\xD9\u201E\xD8\xAB\xD8\xA7\xD9\u2020\xD9\u0160 \xD8\xAA\xD8\xB9\xD9\u0192\xD8\xB3 \xD8\xA3\xD8\xB3\xD9\u201E\xD9\u02C6\xD8\xA8 \xD8\xA7\xD9\u201E\xD8\xB6\xD9\u0160\xD8\xA7\xD9\x81\xD8\xA9 \xD8\xA7\xD9\u201E\xD8\xB1\xD8\xA7\xD9\u201A\xD9\u0160\xD8\xA9."
      ),
      images: carGallery("newDreamer26", ["sc_3.jpg", "sc_3-2.jpg", "sc_3-3.jpg", "sc_8.jpg", "sc_9.jpg"])
    },
    {
      id: "chapter-2",
      title: t("Flagship performance", "Performance phare", "\xD8\xA7\xD9\u201E\xD8\xA3\xD8\xAF\xD8\xA7\xD8\xA1 \xD8\xA7\xD9\u201E\xD8\xB1\xD8\xA7\xD8\xA6\xD8\xAF"),
      summary: t(
        "Super charging, long combined range, and a comfort-first intelligent chassis give Dreamer 26 the effortless long-distance confidence of a premium executive MPV.",
        "La recharge ultra-rapide, la grande autonomie combin\xC3\xA9e et un ch\xC3\xA2ssis intelligent tourn\xC3\xA9 vers le confort donnent \xC3\xA0 Dreamer 26 l\xE2\u20AC\u2122aisance longue distance d\xE2\u20AC\u2122un MPV ex\xC3\xA9cutif premium.",
        "\xD9\u0160\xD9\u02C6\xD9\x81\xD8\xB1 \xD8\xA7\xD9\u201E\xD8\xB4\xD8\xAD\xD9\u2020 \xD8\xA7\xD9\u201E\xD9\x81\xD8\xA7\xD8\xA6\xD9\u201A \xD9\u02C6\xD8\xA7\xD9\u201E\xD9\u2026\xD8\xAF\xD9\u2030 \xD8\xA7\xD9\u201E\xD9\u2026\xD8\xAF\xD9\u2026\xD8\xAC \xD8\xA7\xD9\u201E\xD8\xB7\xD9\u02C6\xD9\u0160\xD9\u201E \xD9\u02C6\xD8\xA7\xD9\u201E\xD9\u2021\xD9\u0160\xD9\u0192\xD9\u201E \xD8\xA7\xD9\u201E\xD8\xB0\xD9\u0192\xD9\u0160 \xD8\xA7\xD9\u201E\xD9\u2026\xD9\u02C6\xD8\xAC\xD9\u2021 \xD9\u201E\xD9\u201E\xD8\xB1\xD8\xA7\xD8\xAD\xD8\xA9 \xD9\x81\xD9\u0160 Dreamer 26 \xD8\xAB\xD9\u201A\xD8\xA9 \xD8\xB3\xD9\u201E\xD8\xB3\xD8\xA9 \xD9\x81\xD9\u0160 \xD8\xA7\xD9\u201E\xD8\xB1\xD8\xAD\xD9\u201E\xD8\xA7\xD8\xAA \xD8\xA7\xD9\u201E\xD8\xB7\xD9\u02C6\xD9\u0160\xD9\u201E\xD8\xA9 \xD8\xAA\xD9\u201E\xD9\u0160\xD9\u201A \xD8\xA8\xD8\xB3\xD9\u0160\xD8\xA7\xD8\xB1\xD8\xA9 MPV \xD8\xAA\xD9\u2020\xD9\x81\xD9\u0160\xD8\xB0\xD9\u0160\xD8\xA9 \xD9\x81\xD8\xA7\xD8\xAE\xD8\xB1\xD8\xA9."
      ),
      images: carGallery("newDreamer26", ["sc_10.jpg", "sc_10-2.jpg", "sc_14.jpg", "sc_15.jpg", "sc_15-4.jpg"]),
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
      images: carGallery("newDreamer26", ["sc_18.jpg", "sc_18-2.jpg", "sc_19.jpg", "sc_20.jpg", "sc_21.jpg"]),
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
      images: carGallery("newDreamer26", ["sc_23.jpg", "sc_24.jpg", "sc_25.jpg", "sc_12.jpg"])
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
      images: carGallery("newCourage", [
        "1920/sc_3.jpg",
        "1920/sc_4.jpg",
        "1920/sc_6.jpg",
        "1920/sc_6-2.jpg",
        "1920/sc_6-3.jpg",
        "1920/sc_8.jpg"
      ]),
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
      images: carGallery("newCourage", [
        "1920/sc_12.jpg",
        "1920/sc_13.jpg",
        "1920/sc_13-2.jpg",
        "1920/sc_13-3.jpg",
        "1920/sc_14.jpg",
        "1920/sc_14-2.jpg",
        "1920/sc_14-3.jpg",
        "1920/sc_18.jpg",
        "1920/sc_21.jpg"
      ]),
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
      images: carGallery("newCourage", ["1920/sc_23.jpg", "1920/sc_24.jpg", "1920/sc_24-3.jpg", "1920/sc_28.jpg", "1920/sc_28-2.jpg"]),
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
      images: carGallery("newCourage", ["1920/sc_34.jpg", "1920/sc_35.jpg", "1920/sc_37.jpg", "1920/sc_37-2.jpg", "1920/sc_38.jpg"]),
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
      images: carGallery("newCourage", ["1920/sc_39.jpg", "1920/sc_40.jpg", "1920/sc_41.jpg", "1920/sc_42.jpg"])
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
      images: carGallery("titan_blackedition", [
        "1920/sc_1.jpg",
        "1920/sc_3_1.jpg",
        "1920/sc_3_2.jpg",
        "1920/sc_3_3.jpg",
        "1920/sc_9_1.jpg"
      ])
    },
    {
      id: "chapter-2",
      title: t("Black cabin texture", "Texture habitacle noire", "\u0645\u0644\u0645\u0633 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0633\u0648\u062F\u0627\u0621"),
      summary: t(
        "Inside, darker materials, contrast stitching, and the calmer seat architecture keep the cabin aligned with the edition\u2019s more restrained luxury story.",
        "\xC0 bord, des mat\xE9riaux plus sombres, des surpiq\xFBres contrast\xE9es et une architecture de si\xE8ges plus calme maintiennent l\u2019habitacle dans l\u2019histoire de luxe contenu de cette \xE9dition.",
        "\u062F\u0627\u062E\u0644 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629\u060C \u062A\u062D\u0627\u0641\u0638 \u0627\u0644\u062E\u0627\u0645\u0627\u062A \u0627\u0644\u062F\u0627\u0643\u0646\u0629 \u0648\u0627\u0644\u062E\u064A\u0627\u0637\u0629 \u0627\u0644\u0645\u062A\u0628\u0627\u064A\u0646\u0629 \u0648\u0628\u0646\u064A\u0629 \u0627\u0644\u0645\u0642\u0627\u0639\u062F \u0627\u0644\u0647\u0627\u062F\u0626\u0629 \u0639\u0644\u0649 \u0627\u0646\u0633\u062C\u0627\u0645 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0645\u0639 \u0642\u0635\u0629 \u0627\u0644\u0641\u062E\u0627\u0645\u0629 \u0627\u0644\u0623\u0643\u062B\u0631 \u062A\u062D\u0641\u0638\u064B\u0627 \u0641\u064A \u0647\u0630\u0647 \u0627\u0644\u0646\u0633\u062E\u0629."
      ),
      images: carGallery("titan_blackedition", [
        "1920/sc_10_1.jpg",
        "1920/sc_13_1.jpg",
        "1920/sc_16_1.jpg",
        "1920/sc_18_1.jpg"
      ])
    },
    {
      id: "chapter-3",
      title: t("Executive intelligence", "Intelligence ex\xE9cutive", "\u0630\u0643\u0627\u0621 \u062A\u0646\u0641\u064A\u0630\u064A"),
      summary: t(
        "Assisted driving, smart cockpit interaction, and premium travel comfort keep the Black Edition feeling like a full flagship rather than a trim package.",
        "La conduite assist\xE9e, l\u2019interaction du cockpit intelligent et le confort de voyage premium font de la Black Edition un v\xE9ritable flagship et non une simple finition.",
        "\u062A\u062C\u0639\u0644 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0648\u062A\u0641\u0627\u0639\u0644 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0630\u0643\u064A\u0629 \u0648\u0631\u0627\u062D\u0629 \u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u0641\u0627\u062E\u0631\u0629 \u0645\u0646 Black Edition \u0637\u0631\u0627\u0632\u064B\u0627 \u0631\u0627\u0626\u062F\u064B\u0627 \u0643\u0627\u0645\u0644\u064B\u0627 \u0644\u0627 \u0645\u062C\u0631\u062F \u0641\u0626\u0629 \u062A\u062C\u0647\u064A\u0632."
      ),
      images: carGallery("titan_blackedition", [
        "1920/sc_21_1.jpg",
        "1920/sc_21_2.jpg",
        "1920/sc_21_3.jpg",
        "1920/sc_21_4.jpg",
        "1920/sc_21_5.jpg",
        "1920/sc_22_1.jpg",
        "1920/sc_23_1.jpg"
      ])
    },
    {
      id: "chapter-4",
      title: t("Quiet confidence", "Confiance silencieuse", "\u062B\u0642\u0629 \u0647\u0627\u062F\u0626\u0629"),
      summary: t(
        "Safety structure, battery protection, and wide-cabin calm finish the edition with the same calm confidence expected from the Titan family.",
        "La structure de s\xE9curit\xE9, la protection de la batterie et le calme du grand habitacle concluent l\u2019\xE9dition avec la m\xEAme assurance que la famille Titan.",
        "\u062A\u064F\u062E\u062A\u062A\u0645 \u0627\u0644\u0646\u0633\u062E\u0629 \u0628\u0628\u0646\u064A\u0629 \u0623\u0645\u0627\u0646 \u0648\u062D\u0645\u0627\u064A\u0629 \u0644\u0644\u0628\u0637\u0627\u0631\u064A\u0629 \u0648\u0647\u062F\u0648\u0621 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0648\u0627\u0633\u0639\u0629 \u0628\u0646\u0641\u0633 \u0627\u0644\u062B\u0642\u0629 \u0627\u0644\u0647\u0627\u062F\u0626\u0629 \u0627\u0644\u0645\u062A\u0648\u0642\u0639\u0629 \u0645\u0646 \u0639\u0627\u0626\u0644\u0629 Titan."
      ),
      images: carGallery("titan_blackedition", [
        "1920/sc_23_2.jpg",
        "1920/sc_23_3.jpg",
        "1920/swiper_5_1.jpg",
        "1920/swiper_5_2.jpg",
        "1920/swiper_5_3.jpg",
        "1920/swiper_5_4.jpg"
      ])
    }
  ],
  "titan_X8.html": [
    {
      id: "chapter-1",
      kicker: t("01 Flagship luxury", "01 Luxe phare", "01 \u0627\u0644\u0641\u062E\u0627\u0645\u0629 \u0627\u0644\u0631\u0627\u0626\u062F\u0629"),
      title: t("Expanded flagship luxury", "Luxe phare \xE9tendu", "\u0641\u062E\u0627\u0645\u0629 \u0631\u0627\u0626\u062F\u0629 \u0645\u0648\u0633\u0639\u0629"),
      summary: t(
        "Titan X8 opens with broad full-size SUV proportions and a family-oriented flagship stance that emphasizes spacious luxury over ceremonial drama.",
        "Titan X8 s\u2019ouvre avec de larges proportions de SUV grand format et une posture phare orient\xE9e famille qui met l\u2019accent sur l\u2019espace et le luxe.",
        "\u062A\u0628\u062F\u0623 Titan X8 \u0628\u062A\u0646\u0627\u0633\u0628\u0627\u062A SUV \u0643\u0628\u064A\u0631\u0629 \u0639\u0631\u064A\u0636\u0629 \u0648\u062D\u0636\u0648\u0631 \u0631\u0627\u0626\u062F \u0645\u0648\u062C\u0647 \u0644\u0644\u0639\u0627\u0626\u0644\u0629 \u064A\u0631\u0643\u0632 \u0639\u0644\u0649 \u0627\u0644\u0631\u062D\u0627\u0628\u0629 \u0648\u0627\u0644\u0641\u062E\u0627\u0645\u0629 \u0623\u0643\u062B\u0631 \u0645\u0646 \u0627\u0644\u0637\u0627\u0628\u0639 \u0627\u0644\u0627\u0633\u062A\u0639\u0631\u0627\u0636\u064A."
      ),
      images: carGallery("titan_X8", ["1920/sc_1.jpg"])
    },
    {
      id: "chapter-2",
      kicker: t("02 Flagship intelligence", "02 Intelligence phare", "02 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0631\u0627\u0626\u062F"),
      title: t("Three-row intelligent comfort", "Confort intelligent trois rangs", "\u0631\u0627\u062D\u0629 \u0630\u0643\u064A\u0629 \u0628\u062B\u0644\u0627\u062B\u0629 \u0635\u0641\u0648\u0641"),
      summary: t(
        "The cabin narrative highlights easier third-row access, practical family packaging, and a calmer intelligent-cockpit rhythm for daily executive travel.",
        "Le r\xE9cit d\u2019habitacle met en avant un acc\xE8s simplifi\xE9 au troisi\xE8me rang, un agencement familial pratique et un rythme de cockpit intelligent plus apais\xE9.",
        "\u064A\u0631\u0643\u0632 \u0633\u0631\u062F \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0639\u0644\u0649 \u0633\u0647\u0648\u0644\u0629 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0635\u0641 \u0627\u0644\u062B\u0627\u0644\u062B \u0648\u0627\u0644\u062A\u063A\u0644\u064A\u0641 \u0627\u0644\u0639\u0627\u0626\u0644\u064A \u0627\u0644\u0639\u0645\u0644\u064A \u0648\u0625\u064A\u0642\u0627\u0639 \u0645\u0642\u0635\u0648\u0631\u0629 \u0630\u0643\u064A\u0629 \u0623\u0643\u062B\u0631 \u0647\u062F\u0648\u0621\u064B\u0627 \u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u062A\u0646\u0641\u064A\u0630 \u0627\u0644\u064A\u0648\u0645\u064A\u0629."
      ),
      images: carGallery("titan_X8", ["1920/sc_1.jpg"])
    },
    {
      id: "chapter-3",
      kicker: t("03 Flagship performance", "03 Performance phare", "03 \u0627\u0644\u0623\u062F\u0627\u0621 \u0627\u0644\u0631\u0627\u0626\u062F"),
      title: t("Long-route flagship composure", "S\xE9r\xE9nit\xE9 phare longue distance", "\u062B\u0628\u0627\u062A \u0631\u0627\u0626\u062F \u0644\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629"),
      summary: t(
        "Composed ride tuning, broad-shouldered stability, and long-route confidence position X8 as the touring-oriented flagship branch of Titan.",
        "Un r\xE9glage de roulage pos\xE9, une stabilit\xE9 de grand SUV et une forte confiance sur longue distance positionnent X8 comme la branche phare orient\xE9e voyage de Titan.",
        "\u064A\u0636\u0639 \u0636\u0628\u0637 \u0627\u0644\u0631\u0643\u0648\u0628 \u0627\u0644\u0645\u062A\u0632\u0646 \u0648\u0627\u0644\u062B\u0628\u0627\u062A \u0628\u0647\u064A\u0626\u0629 SUV \u0643\u0628\u064A\u0631\u0629 \u0648\u0627\u0644\u062B\u0642\u0629 \u0627\u0644\u0642\u0648\u064A\u0629 \u0641\u064A \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629 X8 \u0643\u0641\u0631\u0639 \u0631\u0627\u0626\u062F \u0645\u0648\u062C\u0647 \u0644\u0644\u0633\u0641\u0631 \u0636\u0645\u0646 \u0639\u0627\u0626\u0644\u0629 Titan."
      ),
      images: carGallery("titan_X8", ["1920/sc_1.jpg"])
    },
    {
      id: "chapter-4",
      kicker: t("04 Flagship safety", "04 S\xE9curit\xE9 phare", "04 \u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0631\u0627\u0626\u062F\u0629"),
      title: t("Family-first flagship safety", "S\xE9curit\xE9 phare orient\xE9e famille", "\u0633\u0644\u0627\u0645\u0629 \u0631\u0627\u0626\u062F\u0629 \u0645\u0648\u062C\u0647\u0629 \u0644\u0644\u0639\u0627\u0626\u0644\u0629"),
      summary: t(
        "Body structure integrity and layered battery protection close the X8 route with reassuring flagship safety tuned for family priorities.",
        "L\u2019int\xE9grit\xE9 de la structure de caisse et la protection batterie multicouche concluent le parcours X8 avec une s\xE9curit\xE9 phare rassurante adapt\xE9e aux priorit\xE9s familiales.",
        "\u062A\u062E\u062A\u062A\u0645 \u0635\u0644\u0627\u0628\u0629 \u0628\u0646\u064A\u0629 \u0627\u0644\u0647\u064A\u0643\u0644 \u0648\u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629 \u0645\u062A\u0639\u062F\u062F\u0629 \u0627\u0644\u0637\u0628\u0642\u0627\u062A \u0645\u0633\u0627\u0631 X8 \u0628\u062B\u0642\u0629 \u0633\u0644\u0627\u0645\u0629 \u0631\u0627\u0626\u062F\u0629 \u0645\u0637\u0645\u0626\u0646\u0629 \u0648\u0645\u0636\u0628\u0648\u0637\u0629 \u0644\u0623\u0648\u0644\u0648\u064A\u0627\u062A \u0627\u0644\u0639\u0627\u0626\u0644\u0629."
      ),
      images: carGallery("titan_X8", ["1920/sc_1.jpg"])
    }
  ],
  "Passion": [
    {
      id: "chapter-1",
      kicker: t("01 Sedan design", "01 Design berline", "01 \u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0633\u064A\u062F\u0627\u0646"),
      title: t("Oriental flowing sedan stance", "Posture de berline fluide orientale", "\u0647\u064A\u0626\u0629 \u0633\u064A\u062F\u0627\u0646 \u0634\u0631\u0642\u064A\u0629 \u0627\u0646\u0633\u064A\u0627\u0628\u064A\u0629"),
      summary: t(
        "Passion presents a sleeker electric-sedan stance with crisp shoulder lines, cleaner surfacing, and a calmer premium expression tuned for executive travel.",
        "Passion affiche une posture de berline \xE9lectrique plus fluide, avec des \xE9paules nettes, des surfaces plus pures et une expression premium plus calme pens\xE9e pour le voyage ex\xE9cutif.",
        "\u062A\u0642\u062F\u0645 Passion \u0647\u064A\u0626\u0629 \u0633\u064A\u062F\u0627\u0646 \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0623\u0643\u062B\u0631 \u0627\u0646\u0633\u064A\u0627\u0628\u064A\u0629 \u0645\u0639 \u062E\u0637\u0648\u0637 \u0643\u062A\u0641 \u0648\u0627\u0636\u062D\u0629 \u0648\u0623\u0633\u0640\u0637\u062D \u0623\u0646\u0642\u0649 \u0648\u062A\u0639\u0628\u064A\u0631 \u0641\u0627\u062E\u0631 \u0623\u0643\u062B\u0631 \u0647\u062F\u0648\u0621\u064B\u0627 \u0645\u0647\u064A\u0623 \u0644\u0644\u0633\u0641\u0631 \u0627\u0644\u062A\u0646\u0641\u064A\u0630\u064A."
      ),
      images: carGallery("passion", [
        "1920/fl01.jpg",
        "1920/fl02.jpg",
        "1920/fl03.jpg",
        "1920/fl0331.jpg",
        "1920/fl044.jpg"
      ])
    },
    {
      id: "chapter-2",
      kicker: t("02 Interior", "02 Habitacle", "02 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629"),
      title: t("Executive cabin comfort", "Confort cabine ex\xE9cutif", "\u0631\u0627\u062D\u0629 \u0645\u0642\u0635\u0648\u0631\u0629 \u062A\u0646\u0641\u064A\u0630\u064A\u0629"),
      summary: t(
        "The cabin chapter centers on quiet travel, refined front and rear seating, and a calmer interior rhythm that gives Passion a genuine grand-touring atmosphere.",
        "Le chapitre habitacle se concentre sur le voyage silencieux, des assises avant et arri\xE8re raffin\xE9es et un rythme int\xE9rieur plus apais\xE9 qui donne \xE0 Passion une vraie ambiance de grand tourisme.",
        "\u064A\u0631\u0643\u0632 \u0641\u0635\u0644 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0639\u0644\u0649 \u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u0647\u0627\u062F\u0626 \u0648\u0627\u0644\u0645\u0642\u0627\u0639\u062F \u0627\u0644\u0645\u0635\u0642\u0648\u0644\u0629 \u0641\u064A \u0627\u0644\u0623\u0645\u0627\u0645 \u0648\u0627\u0644\u062E\u0644\u0641 \u0648\u0625\u064A\u0642\u0627\u0639 \u062F\u0627\u062E\u0644\u064A \u0623\u0643\u062B\u0631 \u0633\u0643\u064A\u0646\u0629 \u064A\u0645\u0646\u062D Passion \u0623\u062C\u0648\u0627\u0621 \u0631\u062D\u0644\u0627\u062A \u0637\u0648\u064A\u0644\u0629 \u062D\u0642\u064A\u0642\u064A\u0629."
      ),
      images: carGallery("passion", [
        "1920/fl04.jpg",
        "1920/fl05.jpg",
        "1920/fl06.jpg",
        "1920/fl07.jpg",
        "1920/fl0771.jpg"
      ])
    },
    {
      id: "chapter-3",
      kicker: t("03 Digital cockpit", "03 Cockpit num\xE9rique", "03 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0631\u0642\u0645\u064A\u0629"),
      title: t("HarmonySpace digital cockpit", "Cockpit num\xE9rique HarmonySpace", "\u0645\u0642\u0635\u0648\u0631\u0629 \u0631\u0642\u0645\u064A\u0629 HarmonySpace"),
      summary: t(
        "Digital interaction, a wider display atmosphere, and connected travel logic give Passion a cleaner, more intelligent sedan identity without losing its composed tone.",
        "L\u2019interaction num\xE9rique, l\u2019atmosph\xE8re d\u2019affichage \xE9largie et la logique de voyage connect\xE9 donnent \xE0 Passion une identit\xE9 de berline plus intelligente sans perdre sa retenue.",
        "\u062A\u0645\u0646\u062D \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u0627\u062A \u0627\u0644\u0631\u0642\u0645\u064A\u0629 \u0648\u0623\u062C\u0648\u0627\u0621 \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u0623\u0639\u0631\u0636 \u0648\u0645\u0646\u0637\u0642 \u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u0645\u062A\u0635\u0644 Passion \u0647\u0648\u064A\u0629 \u0633\u064A\u062F\u0627\u0646 \u0623\u0643\u062B\u0631 \u0630\u0643\u0627\u0621\u064B \u0645\u0646 \u062F\u0648\u0646 \u0641\u0642\u062F\u0627\u0646 \u0646\u0628\u0631\u062A\u0647\u0627 \u0627\u0644\u0645\u062A\u0632\u0646\u0629."
      ),
      images: carGallery("passion", [
        "1920/fl10.jpg",
        "1920/fl11.jpg",
        "1920/fl1102.jpg",
        "1920/fl1103.jpg",
        "1920/fl14.jpg",
        "1920/fl21.jpg"
      ])
    },
    {
      id: "chapter-4",
      kicker: t("04 Dynamics", "04 Dynamique", "04 \u0627\u0644\u062F\u064A\u0646\u0627\u0645\u064A\u0643\u064A\u0627\u062A"),
      title: t("Touring confidence", "Confiance grand tourisme", "\u062B\u0642\u0629 \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629"),
      summary: t(
        "Chassis tuning, intelligent safety logic, and long-distance composure close the route with the same measured confidence expected from Voyah\u2019s executive sedan family.",
        "Le r\xE9glage du ch\xE2ssis, la logique de s\xE9curit\xE9 intelligente et la s\xE9r\xE9nit\xE9 longue distance concluent le parcours avec la m\xEAme ma\xEEtrise attendue de la famille de berlines ex\xE9cutives Voyah.",
        "\u062A\u062E\u062A\u062A\u0645 \u0645\u0639\u0627\u064A\u0631\u0629 \u0627\u0644\u0647\u064A\u0643\u0644 \u0648\u0645\u0646\u0637\u0642 \u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0630\u0643\u064A \u0648\u0647\u062F\u0648\u0621 \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629 \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u0627\u0631 \u0628\u0646\u0641\u0633 \u0627\u0644\u062B\u0642\u0629 \u0627\u0644\u0645\u062A\u0632\u0646\u0629 \u0627\u0644\u0645\u062A\u0648\u0642\u0639\u0629 \u0645\u0646 \u0639\u0627\u0626\u0644\u0629 \u0633\u064A\u062F\u0627\u0646 Voyah \u0627\u0644\u062A\u0646\u0641\u064A\u0630\u064A\u0629."
      ),
      images: carGallery("passion", [
        "1920/fl15.jpg",
        "1920/fl1701.jpg",
        "1920/fl1702.jpg",
        "1920/fl1703.jpg",
        "1920/fl1704.jpg",
        "1920/fl1705.jpg",
        "1920/fl1802.jpg"
      ])
    },
    {
      id: "chapter-5",
      kicker: t("05 Safety", "05 S\xE9curit\xE9", "05 \u0627\u0644\u0633\u0644\u0627\u0645\u0629"),
      title: t("Protective sedan assurance", "Assurance protectrice de la berline", "\u0637\u0645\u0623\u0646\u064A\u0646\u0629 \u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0633\u064A\u062F\u0627\u0646"),
      summary: t(
        "A reinforced body strategy, clear driver-assistance story, and calmer long-route confidence let Passion finish on a more premium safety note.",
        "Une strat\xE9gie de carrosserie renforc\xE9e, un r\xE9cit clair de la conduite assist\xE9e et une confiance plus apais\xE9e sur longue distance permettent \xE0 Passion de se conclure sur une note de s\xE9curit\xE9 plus premium.",
        "\u062A\u0645\u0646\u062D \u0628\u0646\u064A\u0629 \u0627\u0644\u0647\u064A\u0643\u0644 \u0627\u0644\u0645\u0639\u0632\u0632\u0629 \u0648\u0645\u0633\u0627\u0631 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0648\u0627\u0636\u062D \u0648\u0627\u0644\u062B\u0642\u0629 \u0627\u0644\u0647\u0627\u062F\u0626\u0629 \u0641\u064A \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629 Passion \u062E\u0627\u062A\u0645\u0629 \u0633\u0644\u0627\u0645\u0629 \u0623\u0643\u062B\u0631 \u0641\u062E\u0627\u0645\u0629."
      ),
      images: carGallery("passion", [
        "1920/fl1805.jpg",
        "1920/fl1806.jpg",
        "1920/fl1807.jpg",
        "1920/fl1808.jpg",
        "1920/fl1809.jpg",
        "1920/fl1820.jpg",
        "1920/fl1821.jpg",
        "1920/fl1822.jpg"
      ])
    }
  ],
  "Free": [
    {
      id: "chapter-1",
      kicker: t("01 Exterior", "01 Ext\xE9rieur", "01 \u0627\u0644\u062E\u0627\u0631\u062C\u064A\u0629"),
      title: t("Long-range crossover presence", "Pr\xE9sence crossover longue autonomie", "\u062D\u0636\u0648\u0631 \u0643\u0631\u0648\u0633 \u0623\u0648\u0641\u0631 \u0628\u0639\u064A\u062F \u0627\u0644\u0645\u062F\u0649"),
      summary: t(
        "FREE 318 opens with an elevated long-range crossover stance, cleaner touring-oriented SUV proportions, and a calmer visual rhythm built for distance.",
        "FREE 318 s\u2019ouvre avec une posture de crossover longue autonomie sur\xE9lev\xE9e, des proportions de SUV orient\xE9es voyage et un rythme visuel plus apais\xE9.",
        "\u062A\u0628\u062F\u0623 FREE 318 \u0628\u0648\u0636\u0639\u064A\u0629 \u0643\u0631\u0648\u0633 \u0623\u0648\u0641\u0631 \u0645\u0631\u062A\u0641\u0639\u0629 \u0628\u0639\u064A\u062F\u0629 \u0627\u0644\u0645\u062F\u0649 \u0648\u062A\u0646\u0627\u0633\u0628\u0627\u062A SUV \u0623\u0648\u0636\u062D \u0645\u0648\u062C\u0647\u0629 \u0644\u0644\u0633\u0641\u0631 \u0648\u0625\u064A\u0642\u0627\u0639 \u0628\u0635\u0631\u064A \u0623\u0643\u062B\u0631 \u0647\u062F\u0648\u0621\u064B\u0627 \u0644\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629."
      ),
      images: carGallery("free", [
        "bg-free-h97D-1.jpg",
        "bg-free-h97D-2.jpg",
        "bg-free-h97D-3.jpg",
        "bg-free-h97D-4.jpg",
        "bg_free_pc4_0002_1920.jpg",
        "bg_free_pc15_0001_1920.jpg"
      ])
    },
    {
      id: "chapter-2",
      kicker: t("02 Comfort", "02 Confort", "02 \u0627\u0644\u0631\u0627\u062D\u0629"),
      title: t("Relaxed grand-touring cabin", "Habitacle grand tourisme apais\xE9", "\u0645\u0642\u0635\u0648\u0631\u0629 \u0631\u062D\u0644\u0627\u062A \u0637\u0648\u064A\u0644\u0629 \u0645\u0631\u064A\u062D\u0629"),
      summary: t(
        "Everyday comfort, calmer seat architecture, and a softer premium cabin rhythm make FREE 318 feel deliberately tuned for long-route travel.",
        "Le confort quotidien, une architecture de si\xE8ges plus calme et un rythme d\u2019habitacle premium plus doux donnent \xE0 FREE 318 une vraie vocation de grande route.",
        "\u064A\u062C\u0639\u0644 \u0627\u0644\u062C\u0645\u0639 \u0628\u064A\u0646 \u0627\u0644\u0631\u0627\u062D\u0629 \u0627\u0644\u064A\u0648\u0645\u064A\u0629 \u0648\u0628\u0646\u064A\u0629 \u0627\u0644\u0645\u0642\u0627\u0639\u062F \u0627\u0644\u0647\u0627\u062F\u0626\u0629 \u0648\u0625\u064A\u0642\u0627\u0639 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0641\u0627\u062E\u0631 \u0627\u0644\u0623\u0643\u062B\u0631 \u0646\u0639\u0648\u0645\u0629 FREE 318 \u0645\u0647\u064A\u0623\u0629 \u0628\u0648\u0636\u0648\u062D \u0644\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629."
      ),
      images: carGallery("free", [
        "bg_free_pc21_0001.jpg",
        "bg_free_pc21_0002.jpg",
        "bg_free_pc21_0003.jpg",
        "bg_free_pc21_0004.jpg",
        "bg_free_pc23_0001.jpg",
        "bg_free_pc28_0001_1920.jpg"
      ])
    },
    {
      id: "chapter-3",
      kicker: t("03 Smart cockpit", "03 Cockpit intelligent", "03 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0630\u0643\u064A\u0629"),
      title: t("Connected cockpit confidence", "Confiance du cockpit connect\xE9", "\u062B\u0642\u0629 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u062A\u0635\u0644\u0629"),
      summary: t(
        "Harmony-style interaction, connected travel flow, and reassuring digital assistance establish a clean, confidence-led smart cockpit chapter.",
        "L\u2019interaction de style Harmony, la continuit\xE9 de voyage connect\xE9e et l\u2019assistance num\xE9rique rassurante installent un chapitre cockpit intelligent plus clair et confiant.",
        "\u062A\u0631\u0633\u062E \u062A\u0641\u0627\u0639\u0644\u0627\u062A Harmony \u0648\u062A\u062F\u0641\u0642 \u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u0645\u062A\u0635\u0644 \u0648\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0631\u0642\u0645\u064A\u0629 \u0627\u0644\u0645\u0637\u0645\u0626\u0646\u0629 \u0641\u0635\u0644 \u0645\u0642\u0635\u0648\u0631\u0629 \u0630\u0643\u064A\u0629 \u0646\u0638\u064A\u0641\u064B\u0627 \u064A\u0642\u0648\u062F\u0647 \u0627\u0644\u0625\u062D\u0633\u0627\u0633 \u0628\u0627\u0644\u062B\u0642\u0629."
      ),
      images: carGallery("free", [
        "bg_free_pc29_0001.jpg",
        "bg_free_pc29_0002.jpg",
        "bg_free_pc30_0001.jpg",
        "bg_free_pc30_0002.jpg",
        "bg_free_pc31_0001.jpg",
        "bg_free_pc31_0002.jpg"
      ])
    },
    {
      id: "chapter-4",
      kicker: t("04 Range and charging", "04 Autonomie et recharge", "04 \u0627\u0644\u0645\u062F\u0649 \u0648\u0627\u0644\u0634\u062D\u0646"),
      title: t("Electric touring confidence", "Confiance \xE9lectrique de grand trajet", "\u062B\u0642\u0629 \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0644\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629"),
      summary: t(
        "Battery assurance, charging convenience, and steady long-range behavior keep FREE 318 positioned as a true touring crossover, not a minor trim refresh.",
        "La s\xE9curit\xE9 batterie, la praticit\xE9 de recharge et la r\xE9gularit\xE9 longue autonomie maintiennent FREE 318 comme un vrai crossover de voyage, pas une simple mise \xE0 jour.",
        "\u062A\u062D\u0627\u0641\u0638 \u0637\u0645\u0623\u0646\u064A\u0646\u0629 \u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629 \u0648\u0633\u0647\u0648\u0644\u0629 \u0627\u0644\u0634\u062D\u0646 \u0648\u0627\u0633\u062A\u0642\u0631\u0627\u0631 \u0627\u0644\u0623\u062F\u0627\u0621 \u0639\u0644\u0649 \u0627\u0644\u0645\u062F\u0649 \u0627\u0644\u0637\u0648\u064A\u0644 \u0639\u0644\u0649 \u062A\u0645\u0648\u0636\u0639 FREE 318 \u0643\u0643\u0631\u0648\u0633 \u0623\u0648\u0641\u0631 \u0631\u062D\u0644\u0627\u062A \u062D\u0642\u064A\u0642\u064A \u0644\u0627 \u0643\u062A\u062D\u062F\u064A\u062B \u0641\u0626\u0629 \u0628\u0633\u064A\u0637."
      ),
      images: carGallery("free", [
        "bg_free_pc35_0001_1920.jpg",
        "bg_free_pc36_0001.jpg",
        "bg_free_pc36_0002.jpg",
        "bg_free_pc37_0001.jpg",
        "bg_free_pc37_0002.jpg",
        "bg_free_pc38_0001.jpg"
      ])
    },
    {
      id: "chapter-5",
      kicker: t("05 Safety and usability", "05 S\xE9curit\xE9 et usage", "05 \u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0648\u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645"),
      title: t("Everyday premium versatility", "Polyvalence premium du quotidien", "\u062A\u0646\u0648\u0639 \u0641\u0627\u062E\u0631 \u0644\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u064A\u0648\u0645\u064A"),
      summary: t(
        "Usability, comfort, and practical luxury close the route with a family-ready crossover tone and a stronger everyday-premium message.",
        "L\u2019usage, le confort et le luxe pratique concluent le parcours avec une tonalit\xE9 de crossover familial et un message premium quotidien plus affirm\xE9.",
        "\u062A\u062E\u062A\u062A\u0645 \u0642\u0627\u0628\u0644\u064A\u0629 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0648\u0627\u0644\u0631\u0627\u062D\u0629 \u0648\u0627\u0644\u0631\u0641\u0627\u0647\u064A\u0629 \u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u0627\u0631 \u0628\u0631\u0648\u062D \u0643\u0631\u0648\u0633 \u0623\u0648\u0641\u0631 \u062C\u0627\u0647\u0632\u0629 \u0644\u0644\u0639\u0627\u0626\u0644\u0629 \u0648\u0631\u0633\u0627\u0644\u0629 \u0641\u062E\u0627\u0645\u0629 \u064A\u0648\u0645\u064A\u0629 \u0623\u0648\u0636\u062D."
      ),
      images: carGallery("free", ["bg_free_pc27_0006.jpg", "bg_free_pc27_0007.jpg", "bg_free_pc28_0001_1920.jpg", "bg_free_pc29_0003.jpg"])
    }
  ],
  "Courage": [
    {
      id: "chapter-1",
      kicker: t("Exterior", "Ext\xE9rieur", "\u0627\u0644\u062E\u0627\u0631\u062C\u064A\u0629"),
      title: t("Original electric SUV design", "Design original de SUV \xE9lectrique", "\u062A\u0635\u0645\u064A\u0645 SUV \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0623\u0635\u064A\u0644"),
      summary: t(
        "Courage opens with a clearer family-electric stance, expressive surfaces, and a more approachable SUV identity than the newer launch-led route.",
        "Courage s\u2019ouvre sur une posture familiale \xE9lectrique plus lisible, des surfaces expressives et une identit\xE9 SUV plus accessible que la route de lancement plus r\xE9cente.",
        "\u062A\u0628\u062F\u0623 Courage \u0628\u062D\u0636\u0648\u0631 \u0639\u0627\u0626\u0644\u064A \u0643\u0647\u0631\u0628\u0627\u0626\u064A \u0623\u0648\u0636\u062D \u0648\u0623\u0633\u0640\u0637\u062D \u062A\u0639\u0628\u064A\u0631\u064A\u0629 \u0648\u0647\u0648\u064A\u0629 SUV \u0623\u0643\u062B\u0631 \u0642\u0631\u0628\u064B\u0627 \u0645\u0646 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0645\u0642\u0627\u0631\u0646\u0629 \u0628\u0627\u0644\u0645\u0633\u0627\u0631 \u0627\u0644\u0623\u062D\u062F\u062B \u0628\u0637\u0627\u0628\u0639 \u0627\u0644\u0625\u0637\u0644\u0627\u0642."
      ),
      images: carGallery("courage", [
        "1920/h37_pc01_0001.jpg",
        "1920/h37_pc02_0001.jpg",
        "1920/h37_pc03_0001.jpg",
        "1920/h37_pc03_0002.jpg",
        "1920/h37_pc03_1_0001.jpg",
        "1920/h37_pc03_1_0002.jpg"
      ])
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
      images: carGallery("courage", [
        "1920/h37_pc04_0001.jpg",
        "1920/h37_pc05_1_0001.jpg",
        "1920/h37_pc05_1_0002.jpg",
        "1920/h37_pc06_0001.jpg",
        "1920/h37_pc07_0001.jpg",
        "1920/h37_pc07_1_0001.jpg"
      ])
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
      images: carGallery("courage", [
        "1920/h37_pc10_0001.jpg",
        "1920/h37_pc11_0001.jpg",
        "1920/h37_pc12_0001.jpg",
        "1920/h37_pc12_0002.jpg",
        "1920/h37_pc13_0001.jpg"
      ])
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
      images: carGallery("courage", [
        "1920/h37_pc14_0001.jpg",
        "1920/h37_pc15_0001.jpg",
        "1920/h37_pc16_0001.jpg",
        "1920/h37_pc17_0001.jpg",
        "1920/h37_pc17_0002.jpg"
      ])
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
      images: carGallery("courage", [
        "1920/h37_pc18_0001.jpg",
        "1920/h37_pc19_0001.jpg",
        "1920/h37_pc19_0002.jpg",
        "1920/h37_pc21_0001.jpg",
        "1920/h37_pc21_0002.jpg",
        "1920/h37_pc22_0001.jpg",
        "1920/h37_pc22_0002.jpg"
      ])
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
      images: carGallery("courage", [
        "1920/h37_pc24_0001.jpg",
        "1920/h37_pc25_0001.jpg",
        "1920/h37_pc25_0002.jpg",
        "1920/h37_pc26_0001.jpg",
        "1920/h37_pc26_1_0001.jpg",
        "1920/h37_pc28_0001.jpg",
        "1920/h37_pc28_1_0001.jpg"
      ])
    }
  ],
  "dreamer-champion.html": [
    {
      id: "chapter-1",
      kicker: t("01 Special edition", "01 \xC9dition sp\xE9ciale", "01 \u0625\u0635\u062F\u0627\u0631 \u062E\u0627\u0635"),
      title: t("Champion flagship presence", "Pr\xE9sence phare Champion", "\u062D\u0636\u0648\u0631 Champion \u0627\u0644\u0631\u0627\u0626\u062F"),
      summary: t(
        "Dreamer Champion opens with ceremonial MPV posture, richer flagship detailing, and a distinctly curated special-edition character.",
        "Dreamer Champion s\u2019ouvre sur une posture de MPV c\xE9r\xE9monielle, un niveau de d\xE9tail phare plus riche et un caract\xE8re d\u2019\xE9dition sp\xE9ciale nettement plus cisel\xE9.",
        "\u062A\u0628\u062F\u0623 Dreamer Champion \u0628\u0648\u0636\u0639\u064A\u0629 MPV \u0627\u062D\u062A\u0641\u0627\u0644\u064A\u0629 \u0648\u062A\u0641\u0627\u0635\u064A\u0644 \u0631\u0627\u0626\u062F\u0629 \u0623\u0643\u062B\u0631 \u062B\u0631\u0627\u0621\u064B \u0648\u0634\u062E\u0635\u064A\u0629 \u0625\u0635\u062F\u0627\u0631 \u062E\u0627\u0635 \u0645\u0635\u0642\u0648\u0644\u0629 \u0628\u0648\u0636\u0648\u062D."
      ),
      images: carGallery("dreamer-champion", ["kv_0408_1920.jpg", "bg_3_n.jpg", "bg_3_n_2.jpg", "bg_7_n_banner04.jpg"])
    },
    {
      id: "chapter-2",
      kicker: t("02 Hospitality cabin", "02 Habitacle hospitalit\xE9", "02 \u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0636\u064A\u0627\u0641\u0629"),
      title: t("Executive lounge hospitality", "Hospitalit\xE9 lounge ex\xE9cutive", "\u0636\u064A\u0627\u0641\u0629 \u0635\u0627\u0644\u0648\u0646 \u062A\u0646\u0641\u064A\u0630\u064A\u0629"),
      summary: t(
        "Second-row comfort, ceremonial seating mood, and a quieter hospitality-first layout give Champion a stronger executive-lounge identity.",
        "Le confort du deuxi\xE8me rang, l\u2019ambiance c\xE9r\xE9monielle des si\xE8ges et un agencement plus silencieux orient\xE9 hospitalit\xE9 donnent \xE0 Champion une identit\xE9 lounge ex\xE9cutive plus forte.",
        "\u062A\u0639\u0637\u064A \u0631\u0627\u062D\u0629 \u0627\u0644\u0635\u0641 \u0627\u0644\u062B\u0627\u0646\u064A \u0648\u0623\u062C\u0648\u0627\u0621 \u0627\u0644\u0645\u0642\u0627\u0639\u062F \u0627\u0644\u0627\u062D\u062A\u0641\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u062A\u062E\u0637\u064A\u0637 \u0627\u0644\u0623\u0643\u062B\u0631 \u0647\u062F\u0648\u0621\u064B\u0627 \u0627\u0644\u0645\u0648\u062C\u0647 \u0644\u0644\u0636\u064A\u0627\u0641\u0629 Champion \u0647\u0648\u064A\u0629 \u0635\u0627\u0644\u0648\u0646 \u062A\u0646\u0641\u064A\u0630\u064A \u0623\u0643\u062B\u0631 \u0642\u0648\u0629."
      ),
      images: carGallery("dreamer-champion", ["bg_12_n_banner01.jpg", "bg_14_n.jpg", "bg_8_n_banner02.jpg", "bg_8_n_banner04.jpg"])
    },
    {
      id: "chapter-3",
      kicker: t("03 Smart cockpit", "03 Cockpit intelligent", "03 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0630\u0643\u064A\u0629"),
      title: t("Connected executive intelligence", "Intelligence ex\xE9cutive connect\xE9e", "\u0630\u0643\u0627\u0621 \u062A\u0646\u0641\u064A\u0630\u064A \u0645\u062A\u0635\u0644"),
      summary: t(
        "Harmony-style interaction, intelligent assistance features, and premium rear-cabin technology establish Champion\u2019s executive-tech chapter with clearer focus.",
        "L\u2019interaction de style Harmony, les fonctions d\u2019assistance intelligente et la technologie premium de l\u2019arri\xE8re structurent le chapitre techno-ex\xE9cutif de Champion avec plus de clart\xE9.",
        "\u062A\u0631\u0633\u062E \u062A\u0641\u0627\u0639\u0644\u0627\u062A Harmony \u0648\u0645\u064A\u0632\u0627\u062A \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0630\u0643\u064A\u0629 \u0648\u062A\u0642\u0646\u064A\u0627\u062A \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u062E\u0644\u0641\u064A\u0629 \u0627\u0644\u0641\u0627\u062E\u0631\u0629 \u0641\u0635\u0644 Champion \u0627\u0644\u062A\u0646\u0641\u064A\u0630\u064A \u0627\u0644\u062A\u0642\u0646\u064A \u0628\u062A\u0631\u0643\u064A\u0632 \u0623\u0648\u0636\u062D."
      ),
      images: carGallery("dreamer-champion", ["bg_16_n_banner01.jpg", "bg_17_n_banner01.jpg", "bg_10_0408_banner01.jpg", "bg_22_n_banner01.jpg"])
    },
    {
      id: "chapter-4",
      kicker: t("04 Safety and travel", "04 S\xE9curit\xE9 et voyage", "04 \u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0648\u0627\u0644\u0633\u0641\u0631"),
      title: t("Long-route flagship assurance", "Assurance phare longue distance", "\u062B\u0642\u0629 \u0631\u0627\u0626\u062F\u0629 \u0644\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629"),
      summary: t(
        "Body protection, composed long-route tuning, and MPV-family reassurance close the route with a special-edition interpretation of flagship Dreamer confidence.",
        "La protection de la carrosserie, un r\xE9glage pos\xE9 sur longue distance et la r\xE9assurance familiale MPV concluent le parcours avec une interpr\xE9tation sp\xE9ciale de la confiance phare Dreamer.",
        "\u062A\u062E\u062A\u062A\u0645 \u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0647\u064A\u0643\u0644 \u0648\u0636\u0628\u0637 \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629 \u0627\u0644\u0645\u062A\u0632\u0646 \u0648\u0637\u0645\u0623\u0646\u064A\u0646\u0629 \u0639\u0627\u0626\u0644\u0629 MPV \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u0627\u0631 \u0628\u062A\u0641\u0633\u064A\u0631 \u0625\u0635\u062F\u0627\u0631 \u062E\u0627\u0635 \u0644\u062B\u0642\u0629 Dreamer \u0627\u0644\u0631\u0627\u0626\u062F\u0629."
      ),
      images: carGallery("dreamer-champion", ["bg_19_0408_banner01.jpg", "bg_20_n_banner01.jpg", "bg_23_n_banner01.jpg", "bg_24_n_banner01.jpg"])
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
      images: carGallery("dreamriver", ["kv_1920.png", "sc_2.png", "sc_2-2.png", "sc_4.png", "sc_4-2.png"])
    },
    {
      id: "chapter-2",
      title: t("Warm lounge cabin", "Cabine salon chaleureuse", "\u0645\u0642\u0635\u0648\u0631\u0629 \u0635\u0627\u0644\u0648\u0646 \u062F\u0627\u0641\u0626\u0629"),
      summary: t(
        "The interior narrative emphasizes relaxed seating, shared travel comfort, and a calmer family lounge mood.",
        "Le r\xE9cit int\xE9rieur met l\u2019accent sur des si\xE8ges d\xE9tendus, un confort de voyage partag\xE9 et une ambiance salon familiale plus calme.",
        "\u064A\u0631\u0643\u0632 \u0627\u0644\u0633\u0631\u062F \u0627\u0644\u062F\u0627\u062E\u0644\u064A \u0639\u0644\u0649 \u0627\u0644\u062C\u0644\u0633\u0629 \u0627\u0644\u0645\u0631\u064A\u062D\u0629 \u0648\u0631\u0627\u062D\u0629 \u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u0645\u0634\u062A\u0631\u0643\u0629 \u0648\u0623\u062C\u0648\u0627\u0621 \u0635\u0627\u0644\u0648\u0646 \u0639\u0627\u0626\u0644\u064A\u0629 \u0623\u0643\u062B\u0631 \u0647\u062F\u0648\u0621\u064B\u0627."
      ),
      images: carGallery("dreamriver", ["sc_5.png", "sc_5-2.png", "sc_6.png", "sc_6-2.png", "sc_7.png"])
    },
    {
      id: "chapter-3",
      title: t("Travel calm", "S\xE9r\xE9nit\xE9 de voyage", "\u0647\u062F\u0648\u0621 \u0627\u0644\u0633\u0641\u0631"),
      summary: t(
        "Long-distance composure and family-oriented calm keep the edition feeling like a scenic companion rather than a standard trim.",
        "La s\xE9r\xE9nit\xE9 longue distance et le calme orient\xE9 famille font de cette \xE9dition un compagnon de voyage sc\xE9nique plut\xF4t qu\u2019une finition ordinaire.",
        "\u062A\u062D\u0627\u0641\u0638 \u0627\u0644\u062B\u0642\u0629 \u0641\u064A \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629 \u0648\u0627\u0644\u0647\u062F\u0648\u0621 \u0627\u0644\u0645\u0648\u062C\u0647 \u0644\u0644\u0639\u0627\u0626\u0644\u0629 \u0639\u0644\u0649 \u0625\u062D\u0633\u0627\u0633 \u0627\u0644\u0625\u0635\u062F\u0627\u0631 \u0628\u0648\u0635\u0641\u0647 \u0631\u0641\u064A\u0642\u064B\u0627 \u0645\u0634\u0647\u062F\u064A\u064B\u0627 \u0644\u0627 \u0645\u062C\u0631\u062F \u0641\u0626\u0629 \u0639\u0627\u062F\u064A\u0629."
      ),
      images: carGallery("dreamriver", ["sc_8.png", "sc_8-2.png", "sc_9.png", "sc_9-2.png"])
    },
    {
      id: "chapter-4",
      title: t("Shared journeys", "Voyages partag\xE9s", "\u0631\u062D\u0644\u0627\u062A \u0645\u0634\u062A\u0631\u0643\u0629"),
      summary: t(
        "The final chapter closes with safety and shared-travel reassurance, keeping the Mountain River tone elegant and familial.",
        "Le dernier chapitre se ferme sur la s\xE9curit\xE9 et la confiance du voyage partag\xE9, en conservant un ton \xE9l\xE9gant et familial.",
        "\u064A\u062E\u062A\u062A\u0645 \u0627\u0644\u0641\u0635\u0644 \u0627\u0644\u0623\u062E\u064A\u0631 \u0628\u0637\u0645\u0623\u0646\u064A\u0646\u0629 \u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0648\u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u0645\u0634\u062A\u0631\u0643 \u0645\u0639 \u0627\u0644\u062D\u0641\u0627\u0638 \u0639\u0644\u0649 \u0646\u0628\u0631\u0629 \u0623\u0646\u064A\u0642\u0629 \u0648\u0639\u0627\u0626\u0644\u064A\u0629."
      ),
      images: carGallery("dreamriver", ["sc_10.png", "sc_10-2.png", "sc_11.png", "sc_11-2.png"])
    }
  ],
  "newDreamer.html": [
    {
      id: "chapter-1",
      title: t("Panoramic luxury exterior", "Ext\xE9rieur luxe panoramique", "\u062E\u0627\u0631\u062C\u064A\u0629 \u0641\u0627\u062E\u0631\u0629 \u0628\u0627\u0646\u0648\u0631\u0627\u0645\u064A\u0629"),
      summary: t(
        "Dreamer 25 opens with a ceremonial MPV presence, refined front graphics, and an executive-scale body designed for grand travel.",
        "Dreamer 25 s\u2019ouvre sur une pr\xE9sence MPV c\xE9r\xE9monielle, une face avant raffin\xE9e et une carrosserie ex\xE9cutive pens\xE9e pour le voyage de prestige.",
        "\u062A\u0628\u062F\u0623 Dreamer 25 \u0628\u062D\u0636\u0648\u0631 MPV \u0627\u062D\u062A\u0641\u0627\u0644\u064A \u0648\u0648\u0627\u062C\u0647\u0629 \u0623\u0645\u0627\u0645\u064A\u0629 \u0645\u0635\u0642\u0648\u0644\u0629 \u0648\u0647\u064A\u0643\u0644 \u0628\u062D\u062C\u0645 \u062A\u0646\u0641\u064A\u0630\u064A \u0645\u0635\u0645\u0645 \u0644\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0643\u0628\u064A\u0631\u0629."
      ),
      images: carGallery("newDreamer", ["kv_1920.png", "h56c_pc03_0001.jpg", "h56c_pc03_0002.jpg"])
    },
    {
      id: "chapter-2",
      title: t("Executive lounge cabin", "Habitacle salon ex\xE9cutif", "\u0645\u0642\u0635\u0648\u0631\u0629 \u0635\u0627\u0644\u0648\u0646 \u062A\u0646\u0641\u064A\u0630\u064A"),
      summary: t(
        "The cabin narrative highlights second-row hospitality, seat engineering with cloud-like comfort, and a calmer lounge atmosphere.",
        "Le r\xE9cit d\u2019habitacle met en avant l\u2019hospitalit\xE9 de deuxi\xE8me rang, une ing\xE9nierie des si\xE8ges au confort a\xE9rien et une ambiance salon apais\xE9e.",
        "\u064A\u0631\u0643\u0632 \u0633\u0631\u062F \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0639\u0644\u0649 \u0636\u064A\u0627\u0641\u0629 \u0627\u0644\u0635\u0641 \u0627\u0644\u062B\u0627\u0646\u064A \u0648\u0647\u0646\u062F\u0633\u0629 \u0645\u0642\u0627\u0639\u062F \u0628\u0631\u0627\u062D\u0629 \u0633\u062D\u0627\u0628\u064A\u0629 \u0648\u0623\u062C\u0648\u0627\u0621 \u0635\u0627\u0644\u0648\u0646 \u0647\u0627\u062F\u0626\u0629."
      ),
      images: carGallery("newDreamer", ["h56c_pc08_banner01.jpg", "h56c_pc08_banner02.jpg"]),
      videos: ["/voyah-resources/images/car/h56c/video_05.mp4"]
    },
    {
      id: "chapter-3",
      title: t("Harmony intelligent travel", "Voyage intelligent Harmony", "\u0633\u0641\u0631 \u0630\u0643\u064A Harmony"),
      summary: t(
        "Connected travel logic, smart cockpit interaction, and premium family convenience keep the route feeling advanced and effortless.",
        "La logique de voyage connect\xE9, l\u2019interaction intelligente et la praticit\xE9 familiale premium maintiennent une exp\xE9rience avanc\xE9e et sans effort.",
        "\u064A\u062D\u0627\u0641\u0638 \u0645\u0646\u0637\u0642 \u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u0645\u062A\u0635\u0644 \u0648\u062A\u0641\u0627\u0639\u0644 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0630\u0643\u064A \u0648\u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u0631\u0627\u062D\u0629 \u0627\u0644\u0639\u0627\u0626\u0644\u064A\u0629 \u0627\u0644\u0641\u0627\u062E\u0631\u0629 \u0639\u0644\u0649 \u062A\u062C\u0631\u0628\u0629 \u0645\u062A\u0642\u062F\u0645\u0629 \u0648\u0633\u0644\u0633\u0629."
      ),
      images: carGallery("newDreamer", ["h56c_pc20_bg.jpg", "bg_swiper_3_1_n.jpg", "bg_4_n.jpg"])
    }
  ],
  "dreamer.html": [
    {
      id: "chapter-1",
      kicker: t("01 Luxury MPV", "01 MPV de luxe", "01 MPV \u0641\u0627\u062E\u0631\u0629"),
      title: t("Luxury MPV presence", "Pr\xE9sence MPV de luxe", "\u062D\u0636\u0648\u0631 MPV \u0641\u0627\u062E\u0631\u0629"),
      summary: t(
        "The 24 Dreamer opens with broad luxury MPV presence, a ceremonial family posture, and a calmer flagship hospitality tone.",
        "Le Dreamer 24 s\u2019ouvre sur une large pr\xE9sence de MPV de luxe, une posture familiale c\xE9r\xE9monielle et une tonalit\xE9 d\u2019hospitalit\xE9 phare plus apais\xE9e.",
        "\u062A\u0628\u062F\u0623 Dreamer 24 \u0628\u062D\u0636\u0648\u0631 MPV \u0641\u0627\u062E\u0631 \u0648\u0627\u0633\u0639 \u0648\u0648\u0636\u0639\u064A\u0629 \u0639\u0627\u0626\u0644\u064A\u0629 \u0627\u062D\u062A\u0641\u0627\u0644\u064A\u0629 \u0648\u0646\u0628\u0631\u0629 \u0636\u064A\u0627\u0641\u0629 \u0631\u0627\u0626\u062F\u0629 \u0623\u0643\u062B\u0631 \u0647\u062F\u0648\u0621\u064B\u0627."
      ),
      images: carGallery("dreamer", ["kv_1920.jpg", "bg_swiper_4_1.jpg", "bg_swiper_5_1.jpg", "bg_swiper_8_1.jpg"])
    },
    {
      id: "chapter-2",
      kicker: t("02 Cabin comfort", "02 Confort habitacle", "02 \u0631\u0627\u062D\u0629 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629"),
      title: t("Rear cabin comfort", "Confort arri\xE8re", "\u0631\u0627\u062D\u0629 \u0627\u0644\u0635\u0641 \u0627\u0644\u062E\u0644\u0641\u064A"),
      summary: t(
        "This cabin chapter highlights second and third-row comfort, generous family packaging, and lounge-like long-distance composure.",
        "Ce chapitre habitacle met en avant le confort des deuxi\xE8me et troisi\xE8me rangs, un agencement familial g\xE9n\xE9reux et une s\xE9r\xE9nit\xE9 longue distance fa\xE7on lounge.",
        "\u064A\u0633\u0644\u0637 \u0647\u0630\u0627 \u0627\u0644\u0641\u0635\u0644 \u0627\u0644\u0636\u0648\u0621 \u0639\u0644\u0649 \u0631\u0627\u062D\u0629 \u0627\u0644\u0635\u0641\u064A\u0646 \u0627\u0644\u062B\u0627\u0646\u064A \u0648\u0627\u0644\u062B\u0627\u0644\u062B \u0648\u0627\u0644\u062A\u0648\u0632\u064A\u0639 \u0627\u0644\u0639\u0627\u0626\u0644\u064A \u0627\u0644\u0633\u062E\u064A \u0648\u062B\u0628\u0627\u062A \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629 \u0628\u0637\u0627\u0628\u0639 \u0627\u0644\u0635\u0627\u0644\u0648\u0646."
      ),
      images: carGallery("dreamer", ["bg_swiper_10_1.jpg", "bg_swiper_11_1.jpg", "bg_swiper_12_1.jpg", "bg_swiper_14_1.jpg"])
    },
    {
      id: "chapter-3",
      kicker: t("03 Smart cockpit", "03 Cockpit intelligent", "03 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0630\u0643\u064A\u0629"),
      title: t("Smart family cockpit", "Cockpit familial intelligent", "\u0645\u0642\u0635\u0648\u0631\u0629 \u0639\u0627\u0626\u0644\u064A\u0629 \u0630\u0643\u064A\u0629"),
      summary: t(
        "Connected screens, intelligent assistance, and premium family convenience define Dreamer\u2019s calm and modern smart-cockpit character.",
        "Les \xE9crans connect\xE9s, l\u2019assistance intelligente et la praticit\xE9 familiale premium d\xE9finissent le caract\xE8re calme et moderne du cockpit intelligent Dreamer.",
        "\u062A\u062D\u062F\u062F \u0627\u0644\u0634\u0627\u0634\u0627\u062A \u0627\u0644\u0645\u062A\u0635\u0644\u0629 \u0648\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0630\u0643\u064A\u0629 \u0648\u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u0631\u0627\u062D\u0629 \u0627\u0644\u0639\u0627\u0626\u0644\u064A\u0629 \u0627\u0644\u0641\u0627\u062E\u0631\u0629 \u0637\u0627\u0628\u0639 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0630\u0643\u064A\u0629 \u0627\u0644\u0647\u0627\u062F\u0626 \u0648\u0627\u0644\u062D\u062F\u064A\u062B \u0641\u064A Dreamer."
      ),
      images: carGallery("dreamer", ["bg_swiper_15_1.jpg", "bg_swiper_18_1.jpg", "bg_swiper_19_1.jpg", "bg_swiper_20_1.jpg"])
    },
    {
      id: "chapter-4",
      kicker: t("04 Family safety", "04 S\xE9curit\xE9 familiale", "04 \u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0639\u0627\u0626\u0644\u064A\u0629"),
      title: t("Family safety", "S\xE9curit\xE9 familiale", "\u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0639\u0627\u0626\u0644\u064A\u0629"),
      summary: t(
        "Body protection and long-route confidence close the route with a polished flagship MPV family-safety statement.",
        "La protection de la carrosserie et la confiance sur longue distance concluent le parcours avec une d\xE9claration de s\xE9curit\xE9 familiale MPV phare et aboutie.",
        "\u062A\u062E\u062A\u062A\u0645 \u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0647\u064A\u0643\u0644 \u0648\u0627\u0644\u062B\u0642\u0629 \u0641\u064A \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629 \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u0627\u0631 \u0628\u0628\u064A\u0627\u0646 \u0645\u062A\u0642\u0646 \u0639\u0646 \u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0639\u0627\u0626\u0644\u0629 \u0641\u064A MPV \u0631\u0627\u0626\u062F\u0629."
      ),
      images: carGallery("dreamer", ["bg_swiper_22_1.jpg", "bg_swiper_23_1.jpg", "bg_swiper_25_1.jpg", "bg_swiper_27_1.jpg"])
    }
  ]
};
const getExpandedModelGallery = (slug, fallback) => {
  var _a;
  return (_a = modelGalleryMap[slug]) != null ? _a : fallback;
};
const getModelStorySections = (slug) => modelStorySectionMap[slug];
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "ModelPage",
  __ssrInlineRender: true,
  props: {
    model: {}
  },
  setup(__props) {
    const props = __props;
    const { buildPath, textFor } = useSiteContent();
    const heroVariant = computed(() => {
      const base = props.model.slug.replace(".html", "");
      return base === "free+" ? "freeplus" : base;
    });
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
    const inferKind = (section) => {
      var _a, _b;
      if (((_b = (_a = section.videos) == null ? void 0 : _a.length) != null ? _b : 0) > 0 || section.images.length >= 4) {
        return "carousel";
      }
      if (section.images.length <= 1) {
        return "banner";
      }
      return "image";
    };
    const renderedSections = computed(() => {
      var _a;
      const sourceSections = ((_a = authoredStorySections.value) == null ? void 0 : _a.length) ? authoredStorySections.value.map((section, index) => {
        var _a2, _b;
        const kind = inferKind(section);
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
      sourceSections.forEach((section) => {
        var _a2;
        output.push({
          ...section,
          details: section.details.slice(0, 3),
          slides: section.kind === "carousel" ? (section.images.length ? section.images : [(_a2 = section.image) != null ? _a2 : props.model.heroImage]).map((image, slideIndex) => {
            var _a3, _b, _c, _d, _e, _f;
            return {
              image,
              video: slideIndex === 0 ? (_a3 = section.videos) == null ? void 0 : _a3[0] : void 0,
              title: (_c = (_b = section.details[slideIndex % section.details.length]) == null ? void 0 : _b.title) != null ? _c : section.title,
              summary: (_f = (_e = (_d = section.details[slideIndex % section.details.length]) == null ? void 0 : _d.summary) != null ? _e : section.summary) != null ? _f : ""
            };
          }) : void 0
        });
      });
      return output;
    });
    const chapterLinks = computed(() => [
      ...renderedSections.value.map((section) => ({ id: section.id, label: section.title }))
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["model-page", `model-page--${__props.model.slug.replace(".html", "")}`]
      }, _attrs))} data-v-4286d31f>`);
      _push(ssrRenderComponent(PageHero, {
        eyebrow: unref(textFor)(__props.model.subtitle),
        title: unref(textFor)(__props.model.title),
        summary: unref(textFor)(__props.model.description),
        image: __props.model.heroImage,
        video: __props.model.heroVideo,
        logo: (_a = __props.model.heroLogo) != null ? _a : __props.model.logo,
        variant: heroVariant.value,
        id: "hero"
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
            _push2(ssrRenderComponent(BrochureButton, {
              slug: __props.model.slug
            }, null, _parent2, _scopeId));
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
              }, 8, ["to"]),
              createVNode(BrochureButton, {
                slug: __props.model.slug
              }, null, 8, ["slug"])
            ];
          }
        }),
        meta: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<aside class="model-hero-meta" data-v-4286d31f${_scopeId}><p class="model-hero-price" data-v-4286d31f${_scopeId}>${ssrInterpolate(unref(textFor)(__props.model.price))}</p><div class="model-hero-features" data-v-4286d31f${_scopeId}><!--[-->`);
            ssrRenderList(__props.model.features.slice(0, 3), (feature) => {
              _push2(`<span data-v-4286d31f${_scopeId}>${ssrInterpolate(unref(textFor)(feature.title))}</span>`);
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
        sections: chapterLinks.value,
        variant: __props.model.slug.replace(".html", "")
      }, null, _parent));
      _push(`<div data-v-4286d31f><!--[-->`);
      ssrRenderList(renderedSections.value, (section, index) => {
        _push(ssrRenderComponent(ModelMediaSection, {
          key: section.id,
          index,
          section,
          "model-slug": __props.model.slug
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/ModelPage.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const ModelPage = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-4286d31f"]]);
const dot = t$1("\u25CF", "\u25CF", "\u25CF");
const blankTitle = t$1("", "", "");
const configLabelValue = t$1("CONFIGURATION", "CONFIGURATION", "\u0627\u0644\u062A\u0643\u0648\u064A\u0646\u0627\u062A");
const specNote = t$1(
  'Remarks: \u2460 "\u25CF" indicates that this configuration is available, "-" indicates that this configuration is unavailable. "\u3007" indicates an optional configuration, and "*" indicates functions vary from the configurations. \u2461 The content of this configuration table is compiled according to the vehicle configuration status information at the time of release. In order to better meet customer needs, Dongfeng VOYAH continues to develop and improve vehicles. Some configurations and specifications of models sold in the market may be different from this configuration. For details, please consult Dongfeng VOYAH authorized dealers. Any possible changes will be made without prior notice.',
  "Remarques : \u2460 \xAB \u25CF \xBB indique que la configuration est disponible, \xAB - \xBB qu\u2019elle ne l\u2019est pas. \xAB \u3007 \xBB indique une configuration en option et \xAB * \xBB des fonctions variables selon la configuration. \u2461 Le contenu de ce tableau est \xE9tabli d\u2019apr\xE8s l\u2019\xE9tat des configurations du v\xE9hicule \xE0 la date de publication. Afin de mieux r\xE9pondre aux besoins de la client\xE8le, Dongfeng VOYAH continue de d\xE9velopper et d\u2019am\xE9liorer ses v\xE9hicules. Certaines configurations et sp\xE9cifications des mod\xE8les commercialis\xE9s peuvent diff\xE9rer de ce tableau. Pour plus de d\xE9tails, consultez un distributeur agr\xE9\xE9 Dongfeng VOYAH. Les \xE9volutions \xE9ventuelles sont apport\xE9es sans pr\xE9avis.",
  "\u0645\u0644\u0627\u062D\u0638\u0627\u062A: \u2460 \u064A\u0634\u064A\u0631 \xAB \u25CF \xBB \u0625\u0644\u0649 \u0623\u0646 \u0627\u0644\u062A\u062C\u0647\u064A\u0632 \u0645\u062A\u0648\u0641\u0631\u060C \u0648\xAB - \xBB \u0625\u0644\u0649 \u0623\u0646\u0647 \u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631. \u0648\u064A\u0634\u064A\u0631 \xAB \u3007 \xBB \u0625\u0644\u0649 \u062A\u062C\u0647\u064A\u0632 \u0627\u062E\u062A\u064A\u0627\u0631\u064A\u060C \u0628\u064A\u0646\u0645\u0627 \u064A\u062F\u0644 \xAB * \xBB \u0639\u0644\u0649 \u0648\u0638\u0627\u0626\u0641 \u062A\u062E\u062A\u0644\u0641 \u062D\u0633\u0628 \u0627\u0644\u062A\u062C\u0647\u064A\u0632. \u2461 \u062A\u0645 \u0625\u0639\u062F\u0627\u062F \u062C\u062F\u0648\u0644 \u0627\u0644\u062A\u062C\u0647\u064A\u0632\u0627\u062A \u0628\u0646\u0627\u0621\u064B \u0639\u0644\u0649 \u062D\u0627\u0644\u0629 \u062A\u062C\u0647\u064A\u0632\u0627\u062A \u0627\u0644\u0645\u0631\u0643\u0628\u0629 \u0639\u0646\u062F \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0637\u0644\u0627\u0642. \u0648\u0644\u0645\u0648\u0627\u0635\u0644\u0629 \u062A\u0644\u0628\u064A\u0629 \u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0628\u0634\u0643\u0644 \u0623\u0641\u0636\u0644\u060C \u064A\u0648\u0627\u0635\u0644 Dongfeng VOYAH \u062A\u0637\u0648\u064A\u0631 \u0645\u0631\u0643\u0628\u0627\u062A\u0647 \u0648\u062A\u062D\u0633\u064A\u0646\u0647\u0627\u060C \u0648\u0642\u062F \u062A\u062E\u062A\u0644\u0641 \u0628\u0639\u0636 \u0627\u0644\u062A\u062C\u0647\u064A\u0632\u0627\u062A \u0648\u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062A \u0644\u0644\u0637\u0631\u0648\u062D\u0627\u062A \u0627\u0644\u0645\u0639\u0631\u0648\u0636\u0629 \u0641\u064A \u0627\u0644\u0633\u0648\u0642 \u0639\u0646 \u0647\u0630\u0627 \u0627\u0644\u062C\u062F\u0648\u0644. \u0644\u0644\u0627\u0637\u0644\u0627\u0639 \u0639\u0644\u0649 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644\u060C \u064A\u0631\u062C\u0649 \u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0648\u0643\u0644\u0627\u0621 \u0627\u0644\u0645\u0639\u062A\u0645\u062F\u064A\u0646 \u0645\u0646 Dongfeng VOYAH. \u062A\u064F\u062C\u0631\u0649 \u0623\u064A \u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0645\u062D\u062A\u0645\u0644\u0629 \u062F\u0648\u0646 \u0625\u0634\u0639\u0627\u0631 \u0645\u0633\u0628\u0642."
);
const ctaBandNote = t$1(
  "Book a test drive",
  "R\xE9server un essai",
  "\u0627\u062D\u062C\u0632 \u062A\u062C\u0631\u0628\u0629 \u0642\u064A\u0627\u062F\u0629"
);
const brochureNote = t$1(
  "Download the brochure",
  "T\xE9l\xE9charger la brochure",
  "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0643\u062A\u064A\u0628"
);
const modelCtaLabels = {
  testDrive: ctaBandNote,
  quote: t$1("Request a quote", "Demander un devis", "\u0627\u0637\u0644\u0628 \u0639\u0631\u0636 \u0633\u0639\u0631"),
  brochure: brochureNote
};
const QA = "/assets/qatar/images";
const QA_VIDEOS = "/assets/qatar/videos";
const freePageContent = {
  logo: `${QA}/logo_free-5145b289d90a90daf245e873c46b0fb5.png.webp`,
  heroVideo: `${QA_VIDEOS}/voyah-free-318-compress.mp4`,
  heroPoster: `${QA}/voyah-free-open.webp`,
  tagline: t$1(
    "Performance-Class Intelligent Electric SUV",
    "SUV \xE9lectrique intelligent de classe performance",
    "\u0633\u064A\u0627\u0631\u0629 \u062F\u0641\u0639 \u0631\u0628\u0627\u0639\u064A \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0630\u0643\u064A\u0629 \u0645\u0646 \u0641\u0626\u0629 \u0627\u0644\u0623\u062F\u0627\u0621"
  ),
  heroMetrics: [
    { label: t$1("Range up to", "Autonomie jusqu\u2019\xE0", "\u0627\u0644\u0645\u062F\u0649 \u062D\u062A\u0649"), value: "1155 km" },
    { label: t$1("Wheel Drive", "Transmission", "\u0646\u0638\u0627\u0645 \u0627\u0644\u062F\u0641\u0639"), value: "AWD" },
    { label: t$1("Engine power", "Puissance", "\u0642\u0648\u0629 \u0627\u0644\u0645\u062D\u0631\u0643"), value: "360kW" },
    { label: t$1("0-100 km/h", "0-100 km/h", "0-100 \u0643\u0645/\u0633"), value: "4,2s" }
  ],
  compactMetrics: [
    { label: t$1("0 - 100 km/h", "0 - 100 km/h", "0 - 100 \u0643\u0645/\u0633"), value: "4,2 s" },
    { label: t$1("Range (WLTP)", "Autonomie (WLTP)", "\u0627\u0644\u0645\u062F\u0649 (WLTP)"), value: "1155 km" },
    { label: t$1("Wheel Drive", "Transmission", "\u0646\u0638\u0627\u0645 \u0627\u0644\u062F\u0641\u0639"), value: "AWD" }
  ],
  heroVersions: [
    {
      name: t$1("VOYAH FREE 2WD", "VOYAH FREE 2WD", "VOYAH FREE 2WD"),
      metrics: [
        { label: t$1("Range up to", "Autonomie jusqu\u2019\xE0", "\u0627\u0644\u0645\u062F\u0649 \u062D\u062A\u0649"), value: "1240 km" },
        { label: t$1("Wheel Drive", "Transmission", "\u0646\u0638\u0627\u0645 \u0627\u0644\u062F\u0641\u0639"), value: "2WD" },
        { label: t$1("Engine power", "Puissance", "\u0642\u0648\u0629 \u0627\u0644\u0645\u062D\u0631\u0643"), value: "200kW" },
        { label: t$1("0-100 km/h", "0-100 km/h", "0-100 \u0643\u0645/\u0633"), value: "7,6s" }
      ]
    },
    {
      name: t$1("VOYAH FREE 4WD", "VOYAH FREE 4WD", "VOYAH FREE 4WD"),
      metrics: [
        { label: t$1("Range up to", "Autonomie jusqu\u2019\xE0", "\u0627\u0644\u0645\u062F\u0649 \u062D\u062A\u0649"), value: "1155 km" },
        { label: t$1("Wheel Drive", "Transmission", "\u0646\u0638\u0627\u0645 \u0627\u0644\u062F\u0641\u0639"), value: "AWD" },
        { label: t$1("Engine power", "Puissance", "\u0642\u0648\u0629 \u0627\u0644\u0645\u062D\u0631\u0643"), value: "360kW" },
        { label: t$1("0-100 km/h", "0-100 km/h", "0-100 \u0643\u0645/\u0633"), value: "4,2s" }
      ]
    }
  ],
  comfortTitle: t$1("Enjoy Comfort", "Profitez du confort", "\u0627\u0633\u062A\u0645\u062A\u0639 \u0628\u0627\u0644\u0631\u0627\u062D\u0629"),
  sections: [
    { type: "parallax", image: `${QA}/ZHAO9366-scaled-1.webp` },
    {
      type: "comfortRows",
      rows: [
        {
          image: `${QA}/Panoramic-sunroof.webp`,
          text: t$1("Panoramic sunroof", "Toit panoramique", "\u0633\u0642\u0641 \u0628\u0627\u0646\u0648\u0631\u0627\u0645\u064A")
        },
        {
          image: `${QA}/Pantheon-Danner-High-fidelity-HiFi-sound-quality.webp`,
          text: t$1(
            "Dynaudio Sound System",
            "Syst\xE8me de son Dynaudio",
            "\u0646\u0638\u0627\u0645 \u0635\u0648\u062A Dynaudio"
          )
        },
        {
          image: `${QA}/First-class-seat.webp`,
          text: t$1(
            "First-class seat for optimal comfort Electric adjustment/heating/ventilation/massage",
            "Si\xE8ge premi\xE8re classe pour un confort optimal\xA0: r\xE9glage \xE9lectrique, chauffage, ventilation et massage.",
            "\u0645\u0642\u0639\u062F \u0645\u0646 \u0627\u0644\u062F\u0631\u062C\u0629 \u0627\u0644\u0623\u0648\u0644\u0649 \u0644\u0631\u0627\u062D\u0629 \u0645\u062B\u0627\u0644\u064A\u0629: \u062A\u0639\u062F\u064A\u0644 \u0643\u0647\u0631\u0628\u0627\u0626\u064A \u0648\u062A\u062F\u0641\u0626\u0629 \u0648\u062A\u0647\u0648\u064A\u0629 \u0648\u062A\u062F\u0644\u064A\u0643"
          )
        },
        {
          image: `${QA}/Full-gamut-sound-control-ambient-lamp-Infinite.webp`,
          text: t$1(
            "Infinite color change, switchable at will",
            "Changement de couleur infini, commutable \xE0 volont\xE9",
            "\u062A\u063A\u064A\u064A\u0631 \u0644\u0627 \u0646\u0647\u0627\u0626\u064A \u0644\u0644\u0623\u0644\u0648\u0627\u0646 \u064A\u0645\u0643\u0646 \u0627\u0644\u062A\u0628\u062F\u064A\u0644 \u0628\u064A\u0646\u0647\u0627 \u0628\u062D\u0631\u064A\u0629"
          )
        }
      ]
    },
    { type: "parallax", image: `${QA}/full-electric-battery-7dc622d64b667780123b39fa26efd038.webp` },
    { type: "band", image: `${QA}/Z9-scaled-1.webp`, variant: "cta", cta: "quote" },
    { type: "spacer" },
    {
      type: "hoverGrid",
      tiles: [
        {
          image: `${QA}/Environment-friendly-water-based-materials-2.webp`,
          text: t$1(
            "Environment-friendly water-based materials used by the vehicle Environment-friendly, healthy, no odor after 8 hours of exposure to the sun",
            "Mat\xE9riaux \xE0 base d\u2019eau respectueux de l\u2019environnement : sains et sans odeur apr\xE8s 8 heures d\u2019exposition au soleil",
            "\u0645\u0648\u0627\u062F \u0635\u062F\u064A\u0642\u0629 \u0644\u0644\u0628\u064A\u0626\u0629 \u0645\u0635\u0646\u0648\u0639\u0629 \u0645\u0646 \u0627\u0644\u0645\u0627\u0621 \u0641\u064A \u0627\u0644\u0645\u0631\u0643\u0628\u0629\u060C \u0635\u062D\u064A\u0629 \u0648\u0628\u062F\u0648\u0646 \u0631\u0627\u0626\u062D\u0629 \u062D\u062A\u0649 \u0628\u0639\u062F 8 \u0633\u0627\u0639\u0627\u062A \u0645\u0646 \u0627\u0644\u062A\u0639\u0631\u0636 \u0644\u0623\u0634\u0639\u0629 \u0627\u0644\u0634\u0645\u0633"
          )
        },
        {
          image: `${QA}/IAQS-Effective-isolation-of-pollution-2.webp`,
          text: t$1(
            "IAQS Effective isolation of pollution outside the vehicle",
            "IAQS : isolation efficace de la pollution exterieure",
            "IAQS \u0639\u0632\u0644 \u0641\u0639\u0627\u0644 \u0644\u0644\u062A\u0644\u0648\u062B \u0627\u0644\u062E\u0627\u0631\u062C\u064A \u0639\u0646 \u0627\u0644\u0645\u0631\u0643\u0628\u0629"
          )
        }
      ]
    },
    { type: "band", image: `${QA}/Before-last-photo.webp`, variant: "cta" },
    { type: "spacerLarge" },
    { type: "specs" },
    { type: "spacer" },
    { type: "band", image: `${QA}/Last-Photo.webp`, variant: "cta", cta: "quote" }
  ],
  configLabel: configLabelValue,
  specTabs: [
    {
      id: "1",
      label: t$1("Basic parameter", "Caract\xE9ristiques g\xE9n\xE9rales", "\u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629"),
      rows: [
        { name: t$1("Length (mm)", "Longueur (mm)", "\u0627\u0644\u0637\u0648\u0644 (\u0645\u0645)"), value: t$1("4905", "4905", "4905") },
        { name: t$1("Width (mm)", "Largeur (mm)", "\u0627\u0644\u0639\u0631\u0636 (\u0645\u0645)"), value: t$1("1950", "1950", "1950") },
        { name: t$1("Height (mm)", "Hauteur (mm)", "\u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639 (\u0645\u0645)"), value: t$1("1645", "1645", "1645") },
        {
          name: t$1("Wheel base (mm)", "Empattement (mm)", "\u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0639\u062C\u0644\u0627\u062A (\u0645\u0645)"),
          value: t$1("2960", "2960", "2960")
        }
      ]
    },
    {
      id: "2",
      label: t$1("Electric", "Cha\xEEne de propulsion", "\u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A"),
      rows: [
        { name: t$1("Drive system", "Transmission", "\u0646\u0638\u0627\u0645 \u0627\u0644\u062F\u0641\u0639"), value: t$1("AWD", "4 roues motrices", "\u062F\u0641\u0639 \u0631\u0628\u0627\u0639\u064A") },
        {
          name: t$1("Max. power (kW)", "Puissance max. (kW)", "\u0623\u0642\u0635\u0649 \u0642\u062F\u0631\u0629 (\u0643\u064A\u0644\u0648\u0648\u0627\u0637)"),
          value: t$1("360/510", "360/510", "360/510")
        },
        {
          name: t$1("Max. torque (N\xB7m)", "Couple max. (N\xB7m)", "\u0623\u0642\u0635\u0649 \u0639\u0632\u0645 (\u0646\u064A\u0648\u062A\u0646\xB7\u0645\u062A\u0631)"),
          value: t$1("720/1040", "720/1040", "720/1040")
        },
        {
          name: t$1("Speedup time (s)", "Temps d\u2019acc\xE9l\xE9ration (s)", "\u0632\u0645\u0646 \u0627\u0644\u062A\u0633\u0627\u0631\u0639 (\u062B\u0627\u0646\u064A\u0629)"),
          value: t$1("4.2/4.5", "4,2/4,5", "4.2/4.5")
        },
        {
          name: t$1("Max. speed (km/h)", "Vitesse max. (km/h)", "\u0627\u0644\u0633\u0631\u0639\u0629 \u0627\u0644\u0642\u0635\u0648\u0649 (\u0643\u0645/\u0633)"),
          value: t$1("200", "200", "200")
        },
        {
          name: t$1("Battery capacity (kWh)", "Capacit\xE9 de la batterie (kWh)", "\u0633\u0639\u0629 \u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629 (\u0643\u064A\u0644\u0648\u0648\u0627\u0637 \u0633\u0627\u0639\u0629)"),
          value: t$1("106/39", "106/39", "106/39")
        },
        {
          name: t$1("Range (km)", "Autonomie (km)", "\u0627\u0644\u0645\u062F\u0649 (\u0643\u0645)"),
          value: t$1(
            "200(on battery) / 1000(on petrol)",
            "200 (sur batterie) / 1000 (sur essence)",
            "200 (\u0639\u0644\u0649 \u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629) / 1000 (\u0639\u0644\u0649 \u0627\u0644\u0628\u0646\u0632\u064A\u0646)"
          )
        }
      ]
    },
    {
      id: "3",
      label: t$1("Chassis system", "Liaisons au sol", "\u0646\u0638\u0627\u0645 \u0627\u0644\u0647\u064A\u0643\u0644"),
      rows: [
        {
          name: t$1("Suspension system", "Suspension", "\u0646\u0638\u0627\u0645 \u0627\u0644\u062A\u0639\u0644\u064A\u0642"),
          value: t$1(
            "100mm Comfort adjustable air suspension",
            "Suspension pneumatique ajustable de 100 mm",
            "\u062A\u0639\u0644\u064A\u0642 \u0647\u0648\u0627\u0626\u064A \u0645\u0631\u064A\u062D \u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u0639\u062F\u064A\u0644 \u0628\u0627\u0631\u062A\u0641\u0627\u0639 100 \u0645\u0645"
          )
        }
      ]
    },
    {
      id: "4",
      label: t$1("Featured configurations", "\xC9quipements phares", "\u0623\u0647\u0645 \u0627\u0644\u062A\u062C\u0647\u064A\u0632\u0627\u062A"),
      rows: [
        {
          name: t$1(
            "Intelligent dimmable panoramic roof",
            "Toit panoramique intelligent \xE0 teinte variable",
            "\u0633\u0642\u0641 \u0628\u0627\u0646\u0648\u0631\u0627\u0645\u064A \u0630\u0643\u064A \u0645\u0639\u062A\u0651\u0645 \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u064B\u0627"
          ),
          value: dot
        },
        { name: t$1("Transparent chassis", "Ch\xE2ssis transparent", "\u0647\u064A\u0643\u0644 \u0634\u0641\u0627\u0641"), value: dot },
        { name: t$1("Dynaudio", "Dynaudio", "Dynaudio"), value: dot },
        {
          name: t$1(
            '12.3" +12.3" +12.3" lifting screen',
            'Trois \xE9crans relevables de 12,3"',
            "\u062B\u0644\u0627\u062B \u0634\u0627\u0634\u0627\u062A \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0631\u0641\u0639 \u0642\u064A\u0627\u0633 12.3 \u0628\u0648\u0635\u0629"
          ),
          value: dot
        },
        {
          name: t$1(
            "Electric seat 12-way adjustment",
            "Si\xE8ge \xE9lectrique \xE0 r\xE9glage 12 directions",
            "\u0645\u0642\u0639\u062F \u0643\u0647\u0631\u0628\u0627\u0626\u064A \u0628\u062A\u0639\u062F\u064A\u0644 \u0645\u0646 12 \u0627\u062A\u062C\u0627\u0647\u064B\u0627"
          ),
          value: dot
        },
        {
          name: t$1("Auto parking assistant", "Aide au stationnement automatique", "\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u0631\u0643\u0646 \u0627\u0644\u062A\u0644\u0642\u0627\u0626\u064A"),
          value: dot
        }
      ]
    }
  ],
  specNote
};
const dreamPageContent = {
  logo: `${QA}/logo_dream-0d008dae1da07d45ff4669e5f0ee80fe.webp`,
  heroVideo: `${QA_VIDEOS}/voyah-dream-compressed.mp4`,
  heroPoster: `${QA}/dream-hero-b81c5587c84ddbd898df9a9438d63e55.webp`,
  tagline: t$1(
    "Premium Luxury Class Full Electric MPV",
    "Monospace enti\xE8rement \xE9lectrique de classe luxe premium",
    "\u0645\u0631\u0643\u0628\u0629 MPV \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0645\u0646 \u0641\u0626\u0629 \u0627\u0644\u0641\u062E\u0627\u0645\u0629 \u0627\u0644\u0645\u0645\u064A\u0632\u0629"
  ),
  heroMetrics: [
    { label: t$1("Range up to", "Autonomie jusqu\u2019\xE0", "\u0627\u0644\u0645\u062F\u0649 \u062D\u062A\u0649"), value: "915 km" },
    { label: t$1("Wheel Drive", "Transmission", "\u0646\u0638\u0627\u0645 \u0627\u0644\u062F\u0641\u0639"), value: "4WD" },
    {
      label: t$1("Torque", "Couple", "\u0639\u0632\u0645 \u0627\u0644\u062F\u0648\u0631\u0627\u0646"),
      value: "",
      lines: [
        { label: t$1("Max. front motor", "Max moteur avant", "\u0623\u0642\u0635\u0649 \u0627\u0644\u0645\u062D\u0631\u0643 \u0627\u0644\u0623\u0645\u0627\u0645\u064A"), value: "310 Nm" },
        { label: t$1("Max. rear motor", "Max moteur arri\xE8re", "\u0623\u0642\u0635\u0649 \u0627\u0644\u0645\u062D\u0631\u0643 \u0627\u0644\u062E\u0644\u0641\u064A"), value: "310 Nm" }
      ]
    },
    { label: t$1("0-100 km/h", "0-100 km/h", "0-100 \u0643\u0645/\u0633"), value: "5,9s" }
  ],
  compactMetrics: [
    { label: t$1("0 - 100 km/h", "0 - 100 km/h", "0 - 100 \u0643\u0645/\u0633"), value: "5,9 s" },
    { label: t$1("Range (WLTP)", "Autonomie (WLTP)", "\u0627\u0644\u0645\u062F\u0649 (WLTP)"), value: "915 km" },
    { label: t$1("Wheel Drive", "Transmission", "\u0646\u0638\u0627\u0645 \u0627\u0644\u062F\u0641\u0639"), value: "4WD" }
  ],
  sections: [
    {
      type: "band",
      image: `${QA}/1024-59e0cb2a.webp`,
      variant: "intro",
      text: t$1(
        "Comfortable and luxury, enjoy the exclusive space",
        "Confort et luxe : profitez d\u2019un espace rien qu\u2019\xE0 vous",
        "\u0631\u0627\u062D\u0629 \u0648\u0641\u062E\u0627\u0645\u0629\u060C \u0627\u0633\u062A\u0645\u062A\u0639 \u0628\u0645\u0633\u0627\u062D\u0629 \u062D\u0635\u0631\u064A\u0629"
      )
    },
    { type: "spacer" },
    {
      type: "cards",
      cards: [
        {
          image: `${QA}/2-75c7d16e.webp`,
          title: blankTitle,
          body: t$1(
            "Deep-sea sound insulation and noise reduction",
            "Isolation et r\xE9duction du bruit d\u2019une profondeur marine",
            "\u0639\u0632\u0644 \u0635\u0648\u062A\u064A \u0648\u062A\u0642\u0644\u064A\u0644 \u0644\u0644\u0636\u0648\u0636\u0627\u0621 \u0628\u0639\u0645\u0642 \u0627\u0644\u0628\u062D\u0631"
          )
        },
        {
          image: `${QA}/3-327043cc.webp`,
          title: blankTitle,
          body: t$1(
            "High-end Dynaudio Sound System",
            "Syst\xE8me audio haut de gamme Dynaudio",
            "\u0646\u0638\u0627\u0645 \u0635\u0648\u062A Dynaudio \u0627\u0644\u0631\u0627\u0642\u064A"
          )
        },
        {
          image: `${QA}/7-bc6d8dde.webp`,
          title: blankTitle,
          body: t$1(
            "Second-row seats giving passengers an impression of seating in a mobile parlor",
            "Les si\xE8ges du second rang donnent aux passagers l\u2019impression de prendre place dans un salon roulant",
            "\u062A\u0645\u0646\u062D \u0645\u0642\u0627\u0639\u062F \u0627\u0644\u0635\u0641 \u0627\u0644\u062B\u0627\u0646\u064A \u0627\u0644\u0631\u0643\u0627\u0628 \u0627\u0646\u0637\u0628\u0627\u0639\u064B\u0627 \u0628\u0627\u0644\u062C\u0644\u0648\u0633 \u0641\u064A \u0635\u0627\u0644\u0648\u0646 \u0645\u062A\u0646\u0642\u0644"
          )
        },
        {
          image: `${QA}/6-8e58e786.webp`,
          title: blankTitle,
          body: t$1(
            "Oversize trunk",
            "Un coffre surdimensionn\xE9",
            "\u0635\u0646\u062F\u0648\u0642 \u0623\u0645\u062A\u0639\u0629 \u0643\u0628\u064A\u0631 \u0627\u0644\u062D\u062C\u0645"
          )
        }
      ]
    },
    { type: "spacer" },
    { type: "parallax", image: `${QA}/dream-exterior-2.webp` },
    {
      type: "comfortRows",
      rows: [
        {
          image: `${QA}/1-1_1024-50b09e74.webp`,
          text: t$1(
            "Warm technology shows graceful quality",
            "Une technologie chaleureuse au service d\u2019une \xE9l\xE9gance aboutie",
            "\u062A\u0642\u0646\u064A\u0629 \u062F\u0627\u0641\u0626\u0629 \u062A\u0639\u0643\u0633 \u062C\u0648\u062F\u0629 \u0631\u0627\u0642\u064A\u0629"
          )
        },
        {
          image: `${QA}/dream-intelligence.webp`,
          text: t$1(
            "Redefine [Intelligent MPV]",
            "L\u2019intelligence au service de votre confort.",
            "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u0631\u064A\u0641 [MPV \u0627\u0644\u0630\u0643\u064A]"
          )
        },
        {
          image: `${QA}/safety-dream.webp`,
          text: t$1(
            "Redefine [Safe MPV]",
            "",
            "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u0631\u064A\u0641 [MPV \u0627\u0644\u0622\u0645\u0646]"
          ),
          description: t$1("", "Une structure renforc\xE9e et des technologies avanc\xE9es pour prot\xE9ger chaque voyage.", "")
        },
        {
          image: `${QA}/3-2-c1e84452.webp`,
          text: t$1(
            "Redefine [Performance MPV]",
            "La puissance au-del\xE0 des attentes.",
            "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u0631\u064A\u0641 [MPV \u0639\u0627\u0644\u064A \u0627\u0644\u0623\u062F\u0627\u0621]"
          )
        }
      ]
    },
    { type: "spacer" },
    { type: "parallax", image: `${QA}/3-1_1024-a8441745.webp` },
    {
      type: "cards",
      heading: t$1(
        "Original Dual Power Technology Platform",
        "Plateforme Dual Power d\u2019origine",
        "\u0645\u0646\u0635\u0629 \u062A\u0642\u0646\u064A\u0629 \u0627\u0644\u0642\u0648\u0629 \u0627\u0644\u0645\u0632\u062F\u0648\u062C\u0629 \u0627\u0644\u0623\u0635\u0644\u064A\u0629"
      ),
      cards: [
        {
          image: `${QA}/1-1-a7576587.webp`,
          title: blankTitle,
          body: t$1("Super power", "Une puissance sup\xE9rieure", "\u0642\u0648\u0629 \u0647\u0627\u0626\u0644\u0629")
        },
        {
          image: `${QA}/1-2-55eca2e5.webp`,
          title: blankTitle,
          body: t$1(
            "High-efficiency and energy-saving",
            "Haute efficacit\xE9 et sobri\xE9t\xE9 \xE9nerg\xE9tique",
            "\u0639\u0627\u0644\u064A\u0629 \u0627\u0644\u0643\u0641\u0627\u0621\u0629 \u0648\u0645\u0648\u0641\u0631\u0629 \u0644\u0644\u0637\u0627\u0642\u0629"
          )
        },
        {
          image: `${QA}/1-2-eb23fb69.webp`,
          title: blankTitle,
          body: t$1("Battery safety", "Une batterie s\xE9curis\xE9e", "\u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629")
        }
      ]
    },
    { type: "spacer" },
    { type: "parallax", image: `${QA}/Voyah-dream-top.webp` },
    { type: "spacerLarge" },
    { type: "specs" },
    { type: "spacer" },
    { type: "parallax", image: `${QA}/voyah-dream-home_2.webp` },
    { type: "band", image: `${QA}/1024-5a8008ee.webp`, variant: "cta", cta: "quote" }
  ],
  configLabel: configLabelValue,
  specTabs: [
    {
      id: "1",
      label: t$1("Basic parameter", "Caract\xE9ristiques g\xE9n\xE9rales", "\u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629"),
      rows: [
        { name: t$1("Length (mm)", "Longueur (mm)", "\u0627\u0644\u0637\u0648\u0644 (\u0645\u0645)"), value: t$1("5315", "5315", "5315") },
        { name: t$1("Width (mm)", "Largeur (mm)", "\u0627\u0644\u0639\u0631\u0636 (\u0645\u0645)"), value: t$1("1985", "1985", "1985") },
        {
          name: t$1("Height (mm)", "Hauteur (mm)", "\u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639 (\u0645\u0645)"),
          value: t$1("1800/1820", "1800/1820", "1800/1820")
        },
        {
          name: t$1("Wheel base (mm)", "Empattement (mm)", "\u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0639\u062C\u0644\u0627\u062A (\u0645\u0645)"),
          value: t$1("3200", "3200", "3200")
        }
      ]
    },
    {
      id: "2",
      label: t$1("Electric", "Cha\xEEne de propulsion", "\u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A"),
      rows: [
        {
          name: t$1("Drive system", "Transmission", "\u0646\u0638\u0627\u0645 \u0627\u0644\u062F\u0641\u0639"),
          value: t$1(
            "Permanent magnet synchronous Motors Intelligent 4WD",
            "Moteurs synchrones \xE0 aimants permanents, 4 roues motrices intelligentes",
            "\u0645\u062D\u0631\u0643\u0627\u062A \u0645\u062A\u0632\u0627\u0645\u0646\u0629 \u0628\u0645\u063A\u0646\u0627\u0637\u064A\u0633 \u062F\u0627\u0626\u0645 \u0645\u0639 \u062F\u0641\u0639 \u0631\u0628\u0627\u0639\u064A \u0630\u0643\u064A"
          )
        },
        {
          name: t$1("Max. power (kW)", "Puissance max. (kW)", "\u0623\u0642\u0635\u0649 \u0642\u062F\u0631\u0629 (\u0643\u064A\u0644\u0648\u0648\u0627\u0637)"),
          value: t$1("320/290", "320/290", "320/290")
        },
        {
          name: t$1("Max. torque (N\xB7m)", "Couple max. (N\xB7m)", "\u0623\u0642\u0635\u0649 \u0639\u0632\u0645 (\u0646\u064A\u0648\u062A\u0646\xB7\u0645\u062A\u0631)"),
          value: t$1("620/610", "620/610", "620/610")
        },
        {
          name: t$1("Speedup time (s)", "Temps d\u2019acc\xE9l\xE9ration (s)", "\u0632\u0645\u0646 \u0627\u0644\u062A\u0633\u0627\u0631\u0639 (\u062B\u0627\u0646\u064A\u0629)"),
          value: t$1("5.8/6.6", "5,8/6,6", "5.8/6.6")
        },
        {
          name: t$1("Max. speed (km/h)", "Vitesse max. (km/h)", "\u0627\u0644\u0633\u0631\u0639\u0629 \u0627\u0644\u0642\u0635\u0648\u0649 (\u0643\u0645/\u0633)"),
          value: t$1("200", "200", "200")
        },
        {
          name: t$1("Battery capacity (kWh)", "Capacit\xE9 de la batterie (kWh)", "\u0633\u0639\u0629 \u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629 (\u0643\u064A\u0644\u0648\u0648\u0627\u0637 \u0633\u0627\u0639\u0629)"),
          value: t$1("108.7/25.57", "108,7/25,57", "108.7/25.57")
        },
        {
          name: t$1("Range (km)", "Autonomie (km)", "\u0627\u0644\u0645\u062F\u0649 (\u0643\u0645)"),
          value: t$1(
            "215(on battery) / 700(on petrol)",
            "215 (sur batterie) / 700 (sur essence)",
            "215 (\u0639\u0644\u0649 \u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629) / 700 (\u0639\u0644\u0649 \u0627\u0644\u0628\u0646\u0632\u064A\u0646)"
          )
        }
      ]
    },
    {
      id: "3",
      label: t$1("Chassis system", "Liaisons au sol", "\u0646\u0638\u0627\u0645 \u0627\u0644\u0647\u064A\u0643\u0644"),
      rows: [
        {
          name: t$1("Suspension system", "Suspension", "\u0646\u0638\u0627\u0645 \u0627\u0644\u062A\u0639\u0644\u064A\u0642"),
          value: t$1(
            "Double wishbone independent suspension/Five unite-pole autocephaly suspension",
            "Suspension ind\xE9pendante \xE0 double triangle / suspension \xE0 cinq bras",
            "\u062A\u0639\u0644\u064A\u0642 \u0645\u0633\u062A\u0642\u0644 \u0628\u0630\u0631\u0627\u0639\u064A\u0646 \u0645\u062B\u0644\u062B\u064A\u064A\u0646/\u062A\u0639\u0644\u064A\u0642 \u0628\u062E\u0645\u0633 \u0648\u0635\u0644\u0627\u062A"
          )
        }
      ]
    },
    {
      id: "4",
      label: t$1("Featured configurations", "\xC9quipements phares", "\u0623\u0647\u0645 \u0627\u0644\u062A\u062C\u0647\u064A\u0632\u0627\u062A"),
      rows: [
        {
          name: t$1(
            "Luxurious double side power gates",
            "Portes lat\xE9rales \xE9lectriques",
            "\u0623\u0628\u0648\u0627\u0628 \u062C\u0627\u0646\u0628\u064A\u0629 \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0641\u0627\u062E\u0631\u0629"
          ),
          value: dot
        },
        { name: t$1("I-key", "Cl\xE9 intelligente", "\u0627\u0644\u0645\u0641\u062A\u0627\u062D \u0627\u0644\u0630\u0643\u064A"), value: dot },
        {
          name: t$1(
            "Three temperature zone auto AC",
            "Climatisation automatique tri-zone",
            "\u062A\u0643\u064A\u064A\u0641 \u0647\u0648\u0627\u0621 \u062A\u0644\u0642\u0627\u0626\u064A \u062B\u0644\u0627\u062B\u064A \u0627\u0644\u0645\u0646\u0627\u0637\u0642"
          ),
          value: dot
        },
        {
          name: t$1(
            "Second seat heating, ventilation and massage",
            "Si\xE8ges arri\xE8re chauffants, ventil\xE9s et massants",
            "\u062A\u062F\u0641\u0626\u0629 \u0648\u062A\u0647\u0648\u064A\u0629 \u0648\u062A\u062F\u0644\u064A\u0643 \u0645\u0642\u0627\u0639\u062F \u0627\u0644\u0635\u0641 \u0627\u0644\u062B\u0627\u0646\u064A"
          ),
          value: dot
        },
        {
          name: t$1(
            "Passenger seat multi-way adjustment boss key",
            "Si\xE8ge passager \xE0 r\xE9glage multiple avec commande \xAB boss \xBB",
            "\u0632\u0631 \u0627\u0644\u062A\u062D\u0643\u0645 \u0628\u0645\u0642\u0639\u062F \u0627\u0644\u0631\u0627\u0643\u0628 \u0645\u062A\u0639\u062F\u062F \u0627\u0644\u0627\u062A\u062C\u0627\u0647\u0627\u062A"
          ),
          value: dot
        }
      ]
    }
  ],
  specNote
};
const PASSION_IMG = "/voyah-resources/images/car/passion/1920";
const COURAGE_IMG = "/voyah-resources/images/car/courage/1920";
const GLOBAL_IMG = "/voyah-resources/images/global";
const passionPageContent = {
  logo: `${GLOBAL_IMG}/passion-wordmark.png`,
  heroVideo: "https://voyahlebanon.com/media/passion/hero-video.mp4",
  heroPoster: "https://voyahlebanon.com/media/passion/hero-video-poster.jpg",
  tagline: t$1(
    "The new executive electric flagship sedan",
    "La nouvelle berline \xE9lectrique phare ex\xE9cutive",
    "\u0633\u064A\u062F\u0627\u0646 \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u062A\u0646\u0641\u064A\u0630\u064A\u0629 \u0631\u0627\u0626\u062F\u0629 \u062C\u062F\u064A\u062F\u0629"
  ),
  heroMetrics: [
    { label: t$1("Length", "Longueur", "\u0627\u0644\u0637\u0648\u0644"), value: "5088 mm" },
    { label: t$1("Wheelbase", "Empattement", "\u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0639\u062C\u0644\u0627\u062A"), value: "3000 mm" },
    { label: t$1("Power mode", "Motorisation", "\u0646\u0648\u0639 \u0627\u0644\u062D\u0631\u0643\u0629"), value: "REV/PHEV" },
    { label: t$1("Body", "Carrosserie", "\u0646\u0648\u0639 \u0627\u0644\u0647\u064A\u0643\u0644"), value: "Sedan" }
  ],
  compactMetrics: [
    { label: t$1("Length", "Longueur", "\u0627\u0644\u0637\u0648\u0644"), value: "5088 mm" },
    { label: t$1("Wheelbase", "Empattement", "\u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0639\u062C\u0644\u0627\u062A"), value: "3000 mm" },
    { label: t$1("Power mode", "Motorisation", "\u0646\u0648\u0639 \u0627\u0644\u062D\u0631\u0643\u0629"), value: "REV/PHEV" }
  ],
  comfortTitle: t$1("Enjoy Comfort", "Profitez du confort", "\u0627\u0633\u062A\u0645\u062A\u0639 \u0628\u0627\u0644\u0631\u0627\u062D\u0629"),
  sections: [
    { type: "parallax", image: `${GLOBAL_IMG}/passion-front.jpg` },
    {
      type: "comfortRows",
      rows: [
        {
          image: `${GLOBAL_IMG}/passion-roof.jpg`,
          text: t$1(
            "Panoramic glass roof that floods the cabin with light",
            "Toit vitr\xE9 panoramique qui inonde l\u2019habitacle de lumi\xE8re",
            "\u0633\u0642\u0641 \u0632\u062C\u0627\u062C\u064A \u0628\u0627\u0646\u0648\u0631\u0627\u0645\u064A \u064A\u0645\u0644 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0628\u0627\u0644\u0636\u0648\u0621"
          )
        },
        {
          image: `${GLOBAL_IMG}/passion-cockpit.jpg`,
          text: t$1(
            "Triple-screen cockpit: driving data, comfort and entertainment at a glance",
            "Cockpit \xE0 triple \xE9cran : conduite, confort et divertissement d\u2019un seul regard",
            "\u0642\u0645\u0631\u0629 \u0628\u062B\u0644\u0627\u062B \u0634\u0627\u0634\u0627\u062A: \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0648\u0627\u0644\u0631\u0627\u062D\u0629 \u0648\u0627\u0644\u062A\u0631\u0641\u064A\u0647 \u0641\u064A \u0644\u0645\u062D\u0629 \u0648\u0627\u062D\u062F\u0629"
          )
        },
        {
          image: `${GLOBAL_IMG}/passion-chassis.jpg`,
          text: t$1(
            "Electronically controlled air suspension that adapts to every road",
            "Suspension pneumatique \xE0 commande \xE9lectronique, adapt\xE9e \xE0 chaque route",
            "\u062A\u0639\u0644\u064A\u0642 \u0647\u0648\u0627\u0626\u064A \u0645\u062A\u062D\u0643\u0645 \u0628\u0647 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u064B\u0627 \u064A\u062A\u0643\u064A\u0651\u0641 \u0645\u0639 \u0643\u0644 \u0627\u0644\u0637\u0631\u0642"
          )
        },
        {
          image: `${PASSION_IMG}/fl13.jpg`,
          text: t$1(
            "Rear touch tablet to command the executive seat",
            "Tablette tactile \xE0 l\u2019arri\xE8re pour commander le si\xE8ge ex\xE9cutif",
            "\u0644\u0648\u062D\u0629 \u0644\u0645\u0633 \u062E\u0644\u0641\u064A\u0629 \u0644\u0644\u062A\u062D\u0643\u0645 \u0628\u0627\u0644\u0645\u0642\u0639\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630\u064A"
          )
        }
      ]
    },
    {
      type: "cards",
      heading: t$1("All-round intelligence", "Intelligence \xE0 360\xB0", "\u0630\u0643\u0627\u0621 \u0634\u0627\u0645\u0644"),
      cards: [
        {
          image: `${PASSION_IMG}/fl05.jpg`,
          title: t$1(
            "Central electronic architecture",
            "Architecture \xE9lectronique centrale",
            "\u0628\u0646\u064A\u0629 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629 \u0645\u0631\u0643\u0632\u064A\u0629"
          ),
          body: t$1(
            "Comfort, safety and connectivity functions grouped and updatable over the air",
            "Fonctions de confort, de s\xE9curit\xE9 et de connectivit\xE9 regroup\xE9es et mises \xE0 jour \xE0 distance",
            "\u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u0631\u0627\u062D\u0629 \u0648\u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0648\u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0645\u062C\u0645\u0651\u0639\u0629 \u0648\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u062D\u062F\u064A\u062B \u0639\u0628\u0631 \u0627\u0644\u0647\u0648\u0627\u0621"
          )
        },
        {
          image: `${PASSION_IMG}/fl20.jpg`,
          title: t$1(
            "REV/PHEV series-parallel hybrid",
            "Hybride s\xE9rie-parall\xE8le REV/PHEV",
            "\u0646\u0638\u0627\u0645 \u0647\u062C\u064A\u0646 \u0645\u062A\u0648\u0627\u0632\u064A-\u062A\u0633\u0644\u0633\u0644\u064A REV/PHEV"
          ),
          body: t$1(
            "Electric drive at the heart, a petrol range extender for long journeys",
            "La traction \xE9lectrique au c\u0153ur, un prolongateur d\u2019autonomie essence pour les grands trajets",
            "\u0627\u0644\u062F\u0641\u0639 \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A \u0641\u064A \u0627\u0644\u0642\u0644\u0628\u060C \u0648\u0645\u0645\u062A\u062F \u0645\u062F\u0649 \u064A\u0639\u0645\u0644 \u0628\u0627\u0644\u0628\u0646\u0632\u064A\u0646 \u0644\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629"
          )
        }
      ]
    },
    {
      type: "band",
      image: `${GLOBAL_IMG}/passion-cabin.jpg`,
      variant: "intro",
      text: t$1(
        "Designed for executives: a silent cabin, four connected screens and lounge-level comfort.",
        "Pens\xE9e pour les cadres : habitacle silencieux, quatre \xE9crans connect\xE9s et confort de salon.",
        "\u0645\u0635\u0645\u0645\u0629 \u0644\u0644\u0645\u0633\u0624\u0648\u0644\u064A\u0646: \u0645\u0642\u0635\u0648\u0631\u0629 \u0647\u0627\u062F\u0626\u0629 \u0648\u0623\u0631\u0628\u0639 \u0634\u0627\u0634\u0627\u062A \u0645\u062A\u0635\u0644\u0629 \u0648\u0631\u0627\u062D\u0629 \u0628\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0635\u0627\u0644\u0648\u0646."
      )
    },
    {
      type: "cards",
      heading: t$1("High quality safety", "S\xE9curit\xE9 de haute qualit\xE9", "\u0633\u0644\u0627\u0645\u0629 \u0639\u0627\u0644\u064A\u0629 \u0627\u0644\u062C\u0648\u062F\u0629"),
      cards: [
        {
          image: `${GLOBAL_IMG}/passion-body.jpg`,
          title: t$1(
            "Rigid hybrid body structure",
            "Structure de carrosserie rigide hybride",
            "\u0647\u064A\u0643\u0644 \u062C\u0633\u0645 \u0647\u062C\u064A\u0646 \u0635\u0644\u0628"
          ),
          body: t$1(
            "High-strength steel and aluminium surround the cabin",
            "Acier haute r\xE9sistance et aluminium entourent l\u2019habitacle",
            "\u0641\u0648\u0644\u0627\u0630 \u0639\u0627\u0644\u064A \u0627\u0644\u0635\u0644\u0627\u0628\u0629 \u0648\u0623\u0644\u0645\u0646\u064A\u0648\u0645 \u064A\u062D\u064A\u0637\u0627\u0646 \u0628\u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629"
          )
        },
        {
          image: `${GLOBAL_IMG}/passion-battery.jpg`,
          title: t$1(
            "Multi-layer battery protection",
            "Protection de la batterie en plusieurs couches",
            "\u062D\u0645\u0627\u064A\u0629 \u0645\u062A\u0639\u062F\u062F\u0629 \u0627\u0644\u0637\u0628\u0642\u0627\u062A \u0644\u0644\u0628\u0637\u0627\u0631\u064A\u0629"
          ),
          body: t$1(
            "The battery pack is shielded layer by layer, from cells to casing",
            "Le pack batterie est prot\xE9g\xE9 couche par couche, des cellules au bo\xEEtier",
            "\u062D\u0632\u0645\u0629 \u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629 \u0645\u062D\u0645\u064A\u0629 \u0637\u0628\u0642\u0629 \u062A\u0644\u0648 \u0627\u0644\u0623\u062E\u0631\u0649\u060C \u0645\u0646 \u0627\u0644\u062E\u0644\u0627\u064A\u0627 \u0625\u0644\u0649 \u0627\u0644\u063A\u0644\u0627\u0641"
          )
        }
      ]
    },
    { type: "band", image: `${GLOBAL_IMG}/passion-profile.jpg`, variant: "cta", cta: "quote" },
    { type: "specs" }
  ],
  configLabel: configLabelValue,
  specTabs: [
    {
      id: "1",
      label: t$1("Basic parameters", "Param\xE8tres de base", "\u0627\u0644\u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629"),
      rows: [
        {
          name: t$1("Length x Width x Height (mm)", "Longueur x Largeur x Hauteur (mm)", "\u0627\u0644\u0637\u0648\u0644 x \u0627\u0644\u0639\u0631\u0636 x \u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639 (\u0645\u0645)"),
          value: t$1("5088 x 1970 x 1505", "5088 x 1970 x 1505", "5088 \xD7 1970 \xD7 1505")
        },
        {
          name: t$1("Wheelbase (mm)", "Empattement (mm)", "\u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0639\u062C\u0644\u0627\u062A (\u0645\u0645)"),
          value: t$1("3000", "3000", "3000")
        },
        {
          name: t$1("Power mode", "Motorisation", "\u0646\u0648\u0639 \u0627\u0644\u062D\u0631\u0643\u0629"),
          value: t$1("REV/PHEV", "REV/PHEV", "REV/PHEV")
        },
        {
          name: t$1("Body type", "Carrosserie", "\u0646\u0648\u0639 \u0627\u0644\u0647\u064A\u0643\u0644"),
          value: t$1("Sedan", "Berline", "\u0633\u064A\u062F\u0627\u0646")
        }
      ]
    },
    {
      id: "2",
      label: t$1("Featured configurations", "\xC9quipements phares", "\u0623\u0647\u0645 \u0627\u0644\u062A\u062C\u0647\u064A\u0632\u0627\u062A"),
      rows: [
        {
          name: t$1("Panoramic glass roof", "Toit vitr\xE9 panoramique", "\u0633\u0642\u0641 \u0632\u062C\u0627\u062C\u064A \u0628\u0627\u0646\u0648\u0631\u0627\u0645\u064A"),
          value: dot
        },
        {
          name: t$1("Triple-screen cockpit", "Cockpit \xE0 triple \xE9cran", "\u0642\u0645\u0631\u0629 \u0628\u062B\u0644\u0627\u062B \u0634\u0627\u0634\u0627\u062A"),
          value: dot
        },
        {
          name: t$1("Air suspension", "Suspension pneumatique", "\u062A\u0639\u0644\u064A\u0642 \u0647\u0648\u0627\u0626\u064A"),
          value: dot
        },
        {
          name: t$1("Rear touch tablet", "Tablette tactile arri\xE8re", "\u0644\u0648\u062D\u0629 \u0644\u0645\u0633 \u062E\u0644\u0641\u064A\u0629"),
          value: dot
        }
      ]
    }
  ],
  specNote
};
const couragePageContent = {
  logo: `${GLOBAL_IMG}/courage-wordmark.png`,
  heroVideo: "/assets/updates/courage-hero.mp4",
  heroPoster: "/assets/updates/courage-hero-poster.jpg",
  tagline: t$1(
    "Premium electric SUV",
    "SUV \xE9lectrique premium",
    "\u0633\u064A\u0627\u0631\u0629 SUV \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0641\u0627\u062E\u0631\u0629"
  ),
  heroMetrics: [
    { label: t$1("Length", "Longueur", "\u0627\u0644\u0637\u0648\u0644"), value: "4725 mm" },
    { label: t$1("Wheelbase", "Empattement", "\u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0639\u062C\u0644\u0627\u062A"), value: "2900 mm" },
    { label: t$1("Power mode", "Motorisation", "\u0646\u0648\u0639 \u0627\u0644\u062D\u0631\u0643\u0629"), value: "BEV" },
    { label: t$1("Body", "Carrosserie", "\u0646\u0648\u0639 \u0627\u0644\u0647\u064A\u0643\u0644"), value: "SUV" }
  ],
  compactMetrics: [
    { label: t$1("Length", "Longueur", "\u0627\u0644\u0637\u0648\u0644"), value: "4725 mm" },
    { label: t$1("Wheelbase", "Empattement", "\u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0639\u062C\u0644\u0627\u062A"), value: "2900 mm" },
    { label: t$1("Power mode", "Motorisation", "\u0646\u0648\u0639 \u0627\u0644\u062D\u0631\u0643\u0629"), value: "BEV" }
  ],
  comfortTitle: t$1("Enjoy Comfort", "Profitez du confort", "\u0627\u0633\u062A\u0645\u062A\u0639 \u0628\u0627\u0644\u0631\u0627\u062D\u0629"),
  sections: [
    { type: "parallax", image: `${GLOBAL_IMG}/courage-charge.jpg` },
    {
      type: "comfortRows",
      rows: [
        {
          image: `${GLOBAL_IMG}/courage-screen.jpg`,
          text: t$1(
            "High-definition central screen with intuitive access to navigation, climate control and multimedia functions",
            "\xC9cran central haute d\xE9finition offrant un acc\xE8s intuitif \xE0 la navigation, \xE0 la climatisation et aux fonctions multim\xE9dias.",
            "\u0634\u0627\u0634\u0629 \u0645\u0631\u0643\u0632\u064A\u0629 \u0639\u0627\u0644\u064A\u0629 \u0627\u0644\u062F\u0642\u0629 \u062A\u0648\u0641\u0631 \u0648\u0635\u0648\u0644\u064B\u0627 \u0628\u062F\u064A\u0647\u064A\u064B\u0627 \u0625\u0644\u0649 \u0627\u0644\u0645\u0644\u0627\u062D\u0629 \u0648\u0627\u0644\u062A\u0643\u064A\u064A\u0641 \u0648\u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u0645\u062A\u0639\u062F\u062F\u0629 \u0627\u0644\u0648\u0633\u0627\u0626\u0637"
          )
        },
        {
          image: `${GLOBAL_IMG}/courage-seats.jpg`,
          text: t$1(
            "Perforated seats for the whole family",
            "Si\xE8ges perfor\xE9s pour toute la famille",
            "\u0645\u0642\u0627\u0639\u062F \u0645\u062B\u0642\u0628\u0629 \u0644\u062C\u0645\u064A\u0639 \u0623\u0641\u0631\u0627\u062F \u0627\u0644\u0639\u0627\u0626\u0644\u0629"
          )
        },
        {
          image: "/assets/updates/courage-connected.png",
          text: t$1(
            "On-board entertainment",
            "Divertissement \xE0 bord",
            "\u062A\u0631\u0641\u064A\u0647 \u0639\u0644\u0649 \u0645\u062A\u0646 \u0627\u0644\u0633\u064A\u0627\u0631\u0629"
          )
        }
      ]
    },
    {
      type: "cards",
      heading: t$1("All-round intelligence", "Intelligence \xE0 360\xB0", "\u0630\u0643\u0627\u0621 \u0634\u0627\u0645\u0644"),
      cards: [
        {
          image: `${COURAGE_IMG}/h37_pc25_0001.jpg`,
          title: t$1(
            "360\xB0 camera views",
            "Vues panoramiques 360\xB0",
            "\u0631\u0624\u064A\u0629 \u0645\u062D\u064A\u0637\u064A\u0629 360\xB0"
          ),
          body: t$1(
            "Cameras make parking and manoeuvring in tight spaces easier",
            "Les cam\xE9ras facilitent le stationnement et les man\u0153uvres dans les espaces serr\xE9s.",
            "\u062A\u0633\u0647\u0651\u0644 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627\u062A \u0631\u0643\u0646 \u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0648\u0627\u0644\u0645\u0646\u0627\u0648\u0631\u0629 \u0641\u064A \u0627\u0644\u0645\u0633\u0627\u062D\u0627\u062A \u0627\u0644\u0636\u064A\u0642\u0629"
          )
        },
        {
          image: `${GLOBAL_IMG}/courage-cargo.jpg`,
          title: t$1(
            "A fifth place for getaways",
            "Une cinqui\xE8me place pour les \xE9vasions",
            "\u0627\u0644\u0645\u0643\u0627\u0646 \u0627\u0644\u062E\u0627\u0645\u0633 \u0644\u0644\u0646\u0632\u0647\u0627\u062A"
          ),
          body: t$1(
            "A large boot and a modular interior, ideal for adapting to all your needs",
            "Un grand coffre et un int\xE9rieur modulable, id\xE9al pour s\u2019adapter \xE0 tous vos besoins.",
            "\u0635\u0646\u062F\u0648\u0642 \u0643\u0628\u064A\u0631 \u0648\u0645\u0642\u0635\u0648\u0631\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u0639\u062F\u064A\u0644\u060C \u0645\u062B\u0627\u0644\u064A\u0629 \u0644\u0644\u062A\u0643\u064A\u0641 \u0645\u0639 \u062C\u0645\u064A\u0639 \u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A\u0643"
          )
        }
      ]
    },
    {
      type: "band",
      image: "/assets/updates/courage-charging.png",
      variant: "intro",
      fullImage: true,
      text: t$1(
        "A pure electric SUV sized for the city and relaxed on the highway.",
        "Un SUV 100 % \xE9lectrique \xE0 la taille id\xE9ale en ville et serein sur autoroute.",
        "\u0633\u064A\u0627\u0631\u0629 SUV \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0628\u062D\u062C\u0645 \u0645\u062B\u0627\u0644\u064A \u0641\u064A \u0627\u0644\u0645\u062F\u064A\u0646\u0629 \u0648\u0647\u0627\u062F\u0626\u0629 \u0639\u0644\u0649 \u0627\u0644\u0637\u0631\u0642 \u0627\u0644\u0633\u0631\u064A\u0639\u0629."
      )
    },
    {
      type: "cards",
      heading: t$1("High quality safety", "S\xE9curit\xE9 de haute qualit\xE9", "\u0633\u0644\u0627\u0645\u0629 \u0639\u0627\u0644\u064A\u0629 \u0627\u0644\u062C\u0648\u062F\u0629"),
      cards: [
        {
          image: `${COURAGE_IMG}/h37_pc28_0001.jpg`,
          title: t$1(
            "Rigid hybrid body structure",
            "Structure de carrosserie rigide hybride",
            "\u0647\u064A\u0643\u0644 \u062C\u0633\u0645 \u0647\u062C\u064A\u0646 \u0635\u0644\u0628"
          ),
          body: t$1(
            "High-strength steel and aluminium protect the cabin in an impact",
            "Acier haute r\xE9sistance et aluminium prot\xE8gent l\u2019habitacle en cas de choc",
            "\u0641\u0648\u0644\u0627\u0630 \u0639\u0627\u0644\u064A \u0627\u0644\u0635\u0644\u0627\u0628\u0629 \u0648\u0627\u0644\u0623\u0644\u0645\u0646\u064A\u0648\u0645 \u064A\u062D\u0645\u064A\u0627\u0646 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0639\u0646\u062F \u0627\u0644\u0627\u0635\u0637\u062F\u0627\u0645"
          )
        },
        {
          image: `${COURAGE_IMG}/h37_pc26_0001.jpg`,
          title: t$1(
            "Multi-layer battery protection",
            "Protection de la batterie en plusieurs couches",
            "\u062D\u0645\u0627\u064A\u0629 \u0645\u062A\u0639\u062F\u062F\u0629 \u0627\u0644\u0637\u0628\u0642\u0627\u062A \u0644\u0644\u0628\u0637\u0627\u0631\u064A\u0629"
          ),
          body: t$1(
            "The battery pack is shielded layer by layer, from cells to casing",
            "Le pack batterie est prot\xE9g\xE9 couche par couche, des cellules au bo\xEEtier",
            "\u062D\u0632\u0645\u0629 \u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629 \u0645\u062D\u0645\u064A\u0629 \u0637\u0628\u0642\u0629 \u062A\u0644\u0648 \u0627\u0644\u0623\u062E\u0631\u0649\u060C \u0645\u0646 \u0627\u0644\u062E\u0644\u0627\u064A\u0627 \u0625\u0644\u0649 \u0627\u0644\u063A\u0644\u0627\u0641"
          )
        }
      ]
    },
    { type: "band", image: "/assets/updates/courage-safety.png", variant: "cta", cta: "quote", fullImage: true },
    { type: "specs" }
  ],
  configLabel: configLabelValue,
  specTabs: [
    {
      id: "1",
      label: t$1("Basic parameters", "Param\xE8tres de base", "\u0627\u0644\u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629"),
      rows: [
        {
          name: t$1("Length x Width x Height (mm)", "Longueur x Largeur x Hauteur (mm)", "\u0627\u0644\u0637\u0648\u0644 x \u0627\u0644\u0639\u0631\u0636 x \u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639 (\u0645\u0645)"),
          value: t$1("4725 x 1900 x 1650", "4725 x 1900 x 1650", "4725 \xD7 1900 \xD7 1650")
        },
        {
          name: t$1("Wheelbase (mm)", "Empattement (mm)", "\u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0639\u062C\u0644\u0627\u062A (\u0645\u0645)"),
          value: t$1("2900", "2900", "2900")
        },
        {
          name: t$1("Power mode", "Motorisation", "\u0646\u0648\u0639 \u0627\u0644\u062D\u0631\u0643\u0629"),
          value: t$1("BEV", "BEV", "BEV")
        },
        {
          name: t$1("Body type", "Carrosserie", "\u0646\u0648\u0639 \u0627\u0644\u0647\u064A\u0643\u0644"),
          value: t$1("SUV", "SUV", "SUV")
        }
      ]
    },
    {
      id: "2",
      label: t$1("Featured configurations", "\xC9quipements phares", "\u0623\u0647\u0645 \u0627\u0644\u062A\u062C\u0647\u064A\u0632\u0627\u062A"),
      rows: [
        {
          name: t$1("Central touchscreen", "\xC9cran tactile central", "\u0634\u0627\u0634\u0629 \u0644\u0645\u0633 \u0645\u0631\u0643\u0632\u064A\u0629"),
          value: dot
        },
        {
          name: t$1("Ventilated seats", "Si\xE8ges ventil\xE9s", "\u0645\u0642\u0627\u0639\u062F \u0645\u0647\u0648\u0627\u0629"),
          value: dot
        },
        {
          name: t$1("360\xB0 camera views", "Vues panoramiques 360\xB0", "\u0631\u0624\u064A\u0629 \u0645\u062D\u064A\u0637\u064A\u0629 360\xB0"),
          value: dot
        },
        {
          name: t$1("Five seats", "Cinq places", "\u062E\u0645\u0633\u0629 \u0645\u0642\u0627\u0639\u062F"),
          value: dot
        }
      ]
    }
  ],
  specNote
};
const modelPageContentBySlug = {
  "Free": freePageContent,
  "Dream": dreamPageContent,
  "Passion": passionPageContent,
  "Courage": couragePageContent
};
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "ModelConfigurationSection",
  __ssrInlineRender: true,
  props: {
    slug: {}
  },
  setup(__props) {
    const props = __props;
    const { locale, textFor } = useSiteContent();
    const downloadLabel = t$1("Download the brochure", "T\xE9l\xE9charger la brochure", "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0643\u062A\u064A\u0628");
    const previewNote = t$1("Recoloured preview. Final shade subject to confirmation.", "Aper\xE7u recolor\xE9. Teinte d\xE9finitive \xE0 confirmer.", "\u0645\u0639\u0627\u064A\u0646\u0629 \u0645\u0639\u062F\u0644\u0629 \u0627\u0644\u0644\u0648\u0646. \u0627\u0644\u062F\u0631\u062C\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629 \u062A\u062E\u0636\u0639 \u0644\u0644\u062A\u0623\u0643\u064A\u062F.");
    const freeColors = [
      { image: "/assets/model-config/previews/free-01.png", swatch: "/assets/OFFICIALVOYAH/free/images/icon1.png", name: t$1("Metal Grey", "Gris M\xE9tal", "\u0631\u0645\u0627\u062F\u064A \u0645\u0639\u062F\u0646\u064A") },
      { image: "/assets/model-config/previews/free-02.png", hex: "linear-gradient(135deg, #cf666d, #891f2c)", name: t$1("Red", "Rouge", "\u0623\u062D\u0645\u0631") },
      { image: "/assets/model-config/previews/free-03.png", swatch: "/assets/OFFICIALVOYAH/free/images/icon3.png", name: t$1("White", "Blanc", "\u0623\u0628\u064A\u0636") },
      { image: "/assets/model-config/previews/free-04.png", swatch: "/assets/OFFICIALVOYAH/free/images/icon4.png", name: t$1("Star Night", "Nuit \xC9toil\xE9e", "\u0644\u064A\u0644\u0629 \u0645\u0631\u0635\u0639\u0629 \u0628\u0627\u0644\u0646\u062C\u0648\u0645") }
    ];
    const colorsBySlug = {
      "Free": freeColors,
      "Dream": [
        { image: "/assets/model-config/previews/dream-02.png", swatch: "/assets/model-config/dream/swatch-02.png", name: t$1("Star Night", "Nuit \xE9toil\xE9e", "\u0644\u064A\u0644\u0629 \u0645\u0631\u0635\u0639\u0629 \u0628\u0627\u0644\u0646\u062C\u0648\u0645") },
        { image: "/assets/model-config/previews/dream-03.png", swatch: "/assets/model-config/dream/swatch-03.png", name: t$1("White", "Blanc", "\u0623\u0628\u064A\u0636") }
      ],
      "Passion": [1, 2, 3, 4].map((index) => ({
        image: `/assets/model-config/previews/passion-${String(index).padStart(2, "0")}.png`,
        swatch: `/assets/model-config/passion/swatch-${String(index).padStart(2, "0")}.png`
      })),
      "Courage": [
        { image: "/assets/model-config/previews/courage-01.png", swatch: "/assets/model-config/courage/swatch-01.png", name: t$1("Star Night", "Nuit \xE9toil\xE9e", "\u0644\u064A\u0644\u0629 \u0645\u0631\u0635\u0639\u0629 \u0628\u0627\u0644\u0646\u062C\u0648\u0645") },
        { image: "/assets/model-config/previews/courage-02.png", swatch: "/assets/model-config/courage/swatch-02.png", name: t$1("Star Night White", "Blanc nuit \xE9toil\xE9e", "\u0623\u0628\u064A\u0636 \u0644\u064A\u0644\u0629 \u0645\u0631\u0635\u0639\u0629 \u0628\u0627\u0644\u0646\u062C\u0648\u0645") },
        { image: "/assets/model-config/previews/courage-03.png", swatch: "/assets/model-config/courage/swatch-03.png", name: t$1("Metal Grey", "Gris m\xE9tallis\xE9", "\u0631\u0645\u0627\u062F\u064A \u0645\u0639\u062F\u0646\u064A") },
        { image: "/assets/model-config/previews/courage-04.png", swatch: "/assets/model-config/courage/swatch-04.png", name: t$1("Blue", "Bleu", "\u0623\u0632\u0631\u0642") },
        { image: "/assets/model-config/previews/courage-05.png", swatch: "/assets/model-config/courage/swatch-05.png", name: t$1("Champagne Gold", "Or champagne", "\u0630\u0647\u0628\u064A \u0634\u0645\u0628\u0627\u0646\u064A\u0627") }
      ]
    };
    const entry = computed(() => modelsShowcase.find((model) => model.slug === props.slug));
    const title = computed(() => {
      var _a;
      return (_a = modelDisplayName[props.slug]) != null ? _a : { en: "VOYAH", fr: "VOYAH", ar: "VOYAH" };
    });
    const colors = computed(() => {
      var _a;
      return (_a = colorsBySlug[props.slug]) != null ? _a : [];
    });
    const activeColor = ref(0);
    const selectedColor = computed(() => {
      var _a;
      return (_a = colors.value[activeColor.value]) != null ? _a : colors.value[0];
    });
    const colorPickerLabel = computed(() => {
      if (locale.value.code === "fr") return "Choisir une couleur";
      if (locale.value.code === "ar") return "\u0627\u062E\u062A\u0631 \u0627\u0644\u0644\u0648\u0646";
      return "Choose a color";
    });
    const colorLabel = (index) => {
      var _a;
      const name = (_a = colors.value[index]) == null ? void 0 : _a.name;
      if (name) return textFor(name);
      if (locale.value.code === "fr") return `Couleur ${index + 1}`;
      if (locale.value.code === "ar") return `\u0627\u0644\u0644\u0648\u0646 ${index + 1}`;
      return `Color ${index + 1}`;
    };
    watch(() => props.slug, () => {
      activeColor.value = 0;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (entry.value && colors.value.length) {
        _push(`<section${ssrRenderAttrs(mergeProps({
          class: ["model-config-showcase", { "model-config-showcase--strong-name": ["Free", "Dream", "Courage"].includes(__props.slug) }]
        }, _attrs))} data-v-714fc0c7><div class="model-config-showcase__visual" data-v-714fc0c7><div class="model-config-showcase__watermark" aria-hidden="true" data-v-714fc0c7>${ssrInterpolate(entry.value.word)}</div><div class="model-config-showcase__car" data-v-714fc0c7><img${ssrRenderAttr("src", selectedColor.value.image)}${ssrRenderAttr("alt", `${unref(textFor)(title.value)} \u2014 ${colorLabel(activeColor.value)}`)} decoding="async" fetchpriority="high" data-v-714fc0c7></div><div class="model-config-showcase__colors" role="group"${ssrRenderAttr("aria-label", colorPickerLabel.value)} data-v-714fc0c7><!--[-->`);
        ssrRenderList(colors.value, (color, index) => {
          _push(`<button type="button" class="${ssrRenderClass([{ "is-active": index === activeColor.value }, "model-config-showcase__color"])}"${ssrRenderAttr("aria-label", colorLabel(index))}${ssrRenderAttr("aria-pressed", index === activeColor.value)} data-v-714fc0c7>`);
          if (color.hex) {
            _push(`<span style="${ssrRenderStyle({ background: color.hex })}" aria-hidden="true" data-v-714fc0c7></span>`);
          } else {
            _push(`<img${ssrRenderAttr("src", color.swatch)} alt="" aria-hidden="true" data-v-714fc0c7>`);
          }
          _push(`</button>`);
        });
        _push(`<!--]--></div><p class="model-config-showcase__color-name" aria-live="polite" data-v-714fc0c7>${ssrInterpolate(colorLabel(activeColor.value))}</p>`);
        if (__props.slug === "Free" && activeColor.value === 1) {
          _push(`<p class="model-config-showcase__note" data-v-714fc0c7>${ssrInterpolate(unref(textFor)(unref(previewNote)))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="model-config-showcase__download" data-v-714fc0c7>`);
        _push(ssrRenderComponent(BrochureButton, {
          slug: __props.slug,
          label: unref(downloadLabel),
          variant: "primary"
        }, null, _parent));
        _push(`</div></div><div class="model-config-showcase__stats" data-v-714fc0c7><!--[-->`);
        ssrRenderList(entry.value.stats, (stat, index) => {
          _push(`<div class="model-config-showcase__stat" data-v-714fc0c7><span data-v-714fc0c7>${ssrInterpolate(unref(textFor)(stat.label))}</span><strong data-v-714fc0c7>${ssrInterpolate(stat.value)}</strong></div>`);
        });
        _push(`<!--]--></div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/model/ModelConfigurationSection.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const ModelConfigurationSection = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-714fc0c7"]]);
const freeGallery = [
  {
    id: "studio",
    title: t$1("Studio Gallery", "Studio Galerie", "\u0645\u0639\u0631\u0636 \u0627\u0644\u0627\u0633\u062A\u0648\u062F\u064A\u0648"),
    images: [
      { file: "free-studio-front-threequarter.jpg", title: t$1("Front three-quarter view", "Vue de trois quarts avant", "\u0645\u0646\u0638\u0631 \u0623\u0645\u0627\u0645\u064A \u062C\u0627\u0646\u0628\u064A") },
      { file: "free-studio-right-side.jpg", title: t$1("Side profile", "Profil lat\xE9ral", "\u0627\u0644\u062C\u0627\u0646\u0628") },
      { file: "free-studio-left-rear.jpg", title: t$1("Rear side profile", "Profil arri\xE8re", "\u0627\u0644\u062C\u0627\u0646\u0628 \u0627\u0644\u062E\u0644\u0641\u064A") },
      { file: "free-studio-rear-threequarter.jpg", title: t$1("Rear three-quarter view", "Vue de trois quarts arri\xE8re", "\u0645\u0646\u0638\u0631 \u062E\u0644\u0641\u064A \u062C\u0627\u0646\u0628\u064A") },
      { file: "free-studio-rear.jpg", title: t$1("Rear design", "Design arri\xE8re", "\u0627\u0644\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u062E\u0644\u0641\u064A") },
      { file: "free-front.jpg", title: t$1("Front design", "Design avant", "\u0627\u0644\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0623\u0645\u0627\u0645\u064A") },
      { file: "free-side.jpg", title: t$1("Side profile", "Profil lat\xE9ral", "\u0627\u0644\u062C\u0627\u0646\u0628") },
      { file: "free-rear.jpg", title: t$1("Rear design", "Design arri\xE8re", "\u0627\u0644\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u062E\u0644\u0641\u064A") }
    ]
  },
  {
    id: "road",
    title: t$1("On the road", "Sur la route", "\u0639\u0644\u0649 \u0627\u0644\u0637\u0631\u064A\u0642"),
    images: [
      { file: "free-road.jpg", title: t$1("On the road", "Sur la route", "\u0639\u0644\u0649 \u0627\u0644\u0637\u0631\u064A\u0642") },
      { file: "free-water.jpg", title: t$1("All-terrain capability", "Capacit\xE9s tout-terrain", "\u0642\u062F\u0631\u0627\u062A \u0639\u0644\u0649 \u062C\u0645\u064A\u0639 \u0627\u0644\u062A\u0636\u0627\u0631\u064A\u0633") },
      { file: "free-lake.jpg", title: t$1("Lakeside stance", "Au bord du lac", "\u0639\u0644\u0649 \u0636\u0641\u0627\u0641 \u0627\u0644\u0628\u062D\u064A\u0631\u0629") },
      { file: "free-mountain.jpg", title: t$1("Mountain touring", "\xC9vasion en montagne", "\u0631\u062D\u0644\u0629 \u062C\u0628\u0644\u064A\u0629") },
      { file: "free-cinematic-mountain-bridge.webp", title: t$1("Mountain bridge drive", "Travers\xE9e en montagne", "\u0639\u0628\u0648\u0631 \u062C\u0633\u0631 \u062C\u0628\u0644\u064A") },
      { file: "free-cinematic-river-crossing.webp", title: t$1("River crossing", "Travers\xE9e de rivi\xE8re", "\u0639\u0628\u0648\u0631 \u0627\u0644\u0646\u0647\u0631") },
      { file: "free-cinematic-sunset-coast.webp", title: t$1("Sunset coastal drive", "Sur la c\xF4te au coucher du soleil", "\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u062D\u0644 \u0639\u0646\u062F \u0627\u0644\u063A\u0631\u0648\u0628") },
      { file: "free-cinematic-desert-road.webp", title: t$1("Desert highway", "Route du d\xE9sert", "\u0637\u0631\u064A\u0642 \u0627\u0644\u0635\u062D\u0631\u0627\u0621") },
      { file: "free-cinematic-forest-drive.webp", title: t$1("Forest cruise", "Escapade en for\xEAt", "\u0631\u062D\u0644\u0629 \u0641\u064A \u0627\u0644\u063A\u0627\u0628\u0629") }
    ]
  }
];
const freeGalleryFeatures = [
  {
    id: "comfort",
    title: t$1("Comfort", "Confort", "\u0627\u0644\u0631\u0627\u062D\u0629"),
    description: t$1("First-class seats with ventilation, heating, massage and memory.", "Des si\xE8ges premi\xE8re classe avec ventilation, chauffage, massage et m\xE9morisation.", "\u0645\u0642\u0627\u0639\u062F \u0645\u0646 \u0627\u0644\u062F\u0631\u062C\u0629 \u0627\u0644\u0623\u0648\u0644\u0649 \u0645\u0639 \u062A\u0647\u0648\u064A\u0629 \u0648\u062A\u062F\u0641\u0626\u0629 \u0648\u062A\u062F\u0644\u064A\u0643 \u0648\u0630\u0627\u0643\u0631\u0629."),
    items: [
      { file: "free-seats-heated.mp4", title: t$1("Heated & ventilated seats", "Si\xE8ges chauffants et ventil\xE9s", "\u0645\u0642\u0627\u0639\u062F \u0645\u062F\u0641\u0623\u0629 \u0648\u0645\u0647\u0648\u0627\u0629"), body: t$1("Comfort in every season.", "Le confort en toute saison.", "\u0631\u0627\u062D\u0629 \u0641\u064A \u0643\u0644 \u0627\u0644\u0641\u0635\u0648\u0644.") },
      { file: "free-front-seats.mp4", title: t$1("Power-adjustable seats", "Si\xE8ges \xE0 r\xE9glage \xE9lectrique", "\u0645\u0642\u0627\u0639\u062F \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u0639\u062F\u064A\u0644 \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0627\u064B"), body: t$1("Your ideal position, at a touch.", "Votre position id\xE9ale, d\u2019un simple geste.", "\u0648\u0636\u0639\u064A\u062A\u0643 \u0627\u0644\u0645\u062B\u0627\u0644\u064A\u0629 \u0628\u0644\u0645\u0633\u0629 \u0648\u0627\u062D\u062F\u0629.") },
      { file: "free-massage.mp4", title: t$1("Massage seats", "Si\xE8ges massants", "\u0645\u0642\u0627\u0639\u062F \u0627\u0644\u062A\u062F\u0644\u064A\u0643"), body: t$1("Relax on every drive.", "D\xE9tendez-vous \xE0 chaque trajet.", "\u0627\u0633\u062A\u0631\u062E\u0650 \u0641\u064A \u0643\u0644 \u0631\u062D\u0644\u0629.") }
    ]
  }
];
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "ModelStudioGallery",
  __ssrInlineRender: true,
  setup(__props) {
    const { textFor, locale } = useSiteContent();
    const activeSlides = ref([0, 0]);
    ref();
    const opened = ref(null);
    const lightboxImage = computed(() => opened.value ? freeGallery[opened.value.group].images[opened.value.index] : null);
    const mediaUrl = (file) => `/assets/egypt/free/${file}`;
    const labels = {
      description: t$1("Explore the VOYAH FREE from every angle, from the studio to the open road.", "D\xE9couvrez le VOYAH FREE sous tous les angles, du studio aux grands espaces.", "\u0627\u0643\u062A\u0634\u0641 VOYAH FREE \u0645\u0646 \u0643\u0644 \u0632\u0627\u0648\u064A\u0629\u060C \u0645\u0646 \u0627\u0644\u0627\u0633\u062A\u0648\u062F\u064A\u0648 \u0625\u0644\u0649 \u0627\u0644\u0637\u0631\u0642 \u0627\u0644\u0645\u0641\u062A\u0648\u062D\u0629."),
      previous: t$1("Previous image", "Image pr\xE9c\xE9dente", "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629"),
      next: t$1("Next image", "Image suivante", "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629"),
      enlarge: t$1("Enlarge image", "Agrandir l\u2019image", "\u062A\u0643\u0628\u064A\u0631 \u0627\u0644\u0635\u0648\u0631\u0629"),
      close: t$1("Close gallery", "Fermer la galerie", "\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0645\u0639\u0631\u0636")
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "studio-gallery",
        "aria-labelledby": "studio-gallery-title"
      }, _attrs))} data-v-a25819d0><div class="studio-gallery__inner" data-v-a25819d0><header class="studio-gallery__heading" data-v-a25819d0><p data-v-a25819d0>VOYAH FREE</p><h2 id="studio-gallery-title" data-v-a25819d0>${ssrInterpolate(unref(textFor)(unref(freeGallery)[0].title))}</h2><span data-v-a25819d0>${ssrInterpolate(unref(textFor)(labels.description))}</span></header><!--[-->`);
      ssrRenderList(unref(freeGallery), (group, groupIndex) => {
        _push(`<section class="studio-gallery__carousel"${ssrRenderAttr("aria-label", unref(textFor)(group.title))} data-v-a25819d0>`);
        if (groupIndex) {
          _push(`<h3 data-v-a25819d0>${ssrInterpolate(unref(textFor)(group.title))}</h3>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="studio-gallery__track" dir="ltr" data-v-a25819d0><!--[-->`);
        ssrRenderList(group.images, (image, index) => {
          _push(`<button type="button" class="studio-gallery__image"${ssrRenderAttr("aria-label", `${unref(textFor)(labels.enlarge)} \u2014 ${unref(textFor)(image.title)}`)} data-v-a25819d0><img${ssrRenderAttr("src", mediaUrl(image.file))}${ssrRenderAttr("alt", unref(textFor)(image.title))} loading="lazy" decoding="async" draggable="false" data-v-a25819d0><span${ssrRenderAttr("dir", unref(locale).dir)} data-v-a25819d0>${ssrInterpolate(unref(textFor)(image.title))}<span aria-hidden="true" data-v-a25819d0>\uFF0B</span></span></button>`);
        });
        _push(`<!--]--></div><div class="studio-gallery__controls" dir="ltr" data-v-a25819d0><button type="button"${ssrRenderAttr("aria-label", unref(textFor)(labels.previous))}${ssrIncludeBooleanAttr(activeSlides.value[groupIndex] === 0) ? " disabled" : ""} data-v-a25819d0>\u2039</button><div class="studio-gallery__dots" data-v-a25819d0><!--[-->`);
        ssrRenderList(group.images, (image, index) => {
          _push(`<button type="button" class="${ssrRenderClass({ "is-active": activeSlides.value[groupIndex] === index })}"${ssrRenderAttr("aria-label", unref(textFor)(image.title))}${ssrRenderAttr("aria-current", activeSlides.value[groupIndex] === index ? "true" : void 0)} data-v-a25819d0><span data-v-a25819d0></span></button>`);
        });
        _push(`<!--]--></div><button type="button"${ssrRenderAttr("aria-label", unref(textFor)(labels.next))}${ssrIncludeBooleanAttr(activeSlides.value[groupIndex] === group.images.length - 1) ? " disabled" : ""} data-v-a25819d0>\u203A</button></div></section>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(unref(freeGalleryFeatures), (group) => {
        _push(`<section class="studio-gallery__features"${ssrRenderAttr("data-gallery-section", group.id)}${ssrRenderAttr("aria-labelledby", `gallery-${group.id}`)} data-v-a25819d0><header class="studio-gallery__heading" data-v-a25819d0><h3${ssrRenderAttr("id", `gallery-${group.id}`)} data-v-a25819d0>${ssrInterpolate(unref(textFor)(group.title))}</h3><span data-v-a25819d0>${ssrInterpolate(unref(textFor)(group.description))}</span></header><div class="${ssrRenderClass([{ "studio-gallery__grid--two": group.items.length === 2 }, "studio-gallery__grid"])}" data-v-a25819d0><!--[-->`);
        ssrRenderList(group.items, (item) => {
          _push(`<article class="studio-gallery__feature" data-v-a25819d0>`);
          if (item.file.endsWith(".mp4")) {
            _push(`<video${ssrRenderAttr("src", `${mediaUrl(item.file)}#t=0.1`)}${ssrRenderAttr("aria-label", unref(textFor)(item.title))} autoplay muted loop playsinline preload="metadata" data-v-a25819d0></video>`);
          } else {
            _push(`<img${ssrRenderAttr("src", mediaUrl(item.file))}${ssrRenderAttr("alt", unref(textFor)(item.title))} loading="lazy" decoding="async" data-v-a25819d0>`);
          }
          _push(`<div data-v-a25819d0><h4 data-v-a25819d0>${ssrInterpolate(unref(textFor)(item.title))}</h4>`);
          if (item.body) {
            _push(`<p data-v-a25819d0>${ssrInterpolate(unref(textFor)(item.body))}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></article>`);
        });
        _push(`<!--]--></div></section>`);
      });
      _push(`<!--]--></div><dialog class="studio-gallery__dialog"${ssrRenderAttr("aria-label", unref(textFor)(labels.enlarge))} data-v-a25819d0>`);
      if (lightboxImage.value) {
        _push(`<div class="studio-gallery__lightbox" data-v-a25819d0><button type="button" class="studio-gallery__close"${ssrRenderAttr("aria-label", unref(textFor)(labels.close))} autofocus data-v-a25819d0>\xD7</button><img${ssrRenderAttr("src", mediaUrl(lightboxImage.value.file))}${ssrRenderAttr("alt", unref(textFor)(lightboxImage.value.title))} data-v-a25819d0><div class="studio-gallery__lightbox-nav" dir="ltr" data-v-a25819d0><button type="button"${ssrRenderAttr("aria-label", unref(textFor)(labels.previous))} data-v-a25819d0>\u2039</button><p${ssrRenderAttr("dir", unref(locale).dir)} data-v-a25819d0>${ssrInterpolate(unref(textFor)(lightboxImage.value.title))}</p><button type="button"${ssrRenderAttr("aria-label", unref(textFor)(labels.next))} data-v-a25819d0>\u203A</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</dialog></section>`);
    };
  }
});
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/model/ModelStudioGallery.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const ModelStudioGallery = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-a25819d0"]]);
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "ModelCardGrid",
  __ssrInlineRender: true,
  props: {
    heading: { default: void 0 },
    cards: {},
    showHeading: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const { textFor } = useSiteContent();
    const columns = Math.min(props.cards.length, 4);
    const isDense = columns === 4;
    const gridStyle = computed(() => ({
      "--model-cards-columns": String(columns),
      "--model-cards-gap": isDense ? "24px" : "40px",
      "--model-cards-ratio": isDense ? "1 / 1" : "3 / 2"
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["model-cards", { "model-cards--dense": isDense }]
      }, _attrs))} data-v-661a0bf3><div class="model-cards__inner" data-v-661a0bf3>`);
      if (__props.showHeading) {
        _push(`<h3 class="model-cards__title" data-v-661a0bf3>${ssrInterpolate(unref(textFor)(__props.heading))}</h3>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="model-cards__grid" style="${ssrRenderStyle(unref(gridStyle))}" data-v-661a0bf3><!--[-->`);
      ssrRenderList(__props.cards, (card, index) => {
        _push(`<article class="model-cards__cell" data-v-661a0bf3><div class="model-cards__media" data-v-661a0bf3><img${ssrRenderAttr("src", card.image)}${ssrRenderAttr("alt", unref(textFor)(card.title) || unref(textFor)(card.body))} loading="lazy" decoding="async" data-v-661a0bf3></div><div class="model-cards__body" data-v-661a0bf3>`);
        if (unref(textFor)(card.title)) {
          _push(`<div class="model-cards__label" data-v-661a0bf3>${ssrInterpolate(unref(textFor)(card.title))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="model-cards__excerpt" data-v-661a0bf3>${ssrInterpolate(unref(textFor)(card.body))}</div></div></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/model/ModelCardGrid.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const ModelCardGrid = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-661a0bf3"]]);
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "ModelSpecTabs",
  __ssrInlineRender: true,
  props: {
    tabs: {},
    modelName: {},
    note: {},
    listLabel: { default: "Caract\xE9ristiques" },
    slug: {}
  },
  setup(__props) {
    var _a, _b;
    const props = __props;
    const { textFor } = useSiteContent();
    const downloadLabel = t$1("Download configuration", "T\xE9l\xE9charger la configuration", "\u062A\u0646\u0632\u064A\u0644 \u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062A");
    const downloadHint = t$1("All categories", "Toutes les cat\xE9gories", "\u062C\u0645\u064A\u0639 \u0627\u0644\u0641\u0626\u0627\u062A");
    const configurationFiles = {
      Free: "/voyah-resources/fiche-technique-Free.xlsx",
      Dream: "/voyah-resources/fiche-technique-Dream.xlsx",
      Courage: "/voyah-resources/fiche-technique-Courage.xlsx"
    };
    const configurationFile = computed(() => {
      var _a2;
      return props.slug ? (_a2 = configurationFiles[props.slug]) != null ? _a2 : null : null;
    });
    const uid = useId();
    const selected = ref((_b = (_a = props.tabs[0]) == null ? void 0 : _a.id) != null ? _b : "");
    const expanded = ref("");
    const isMobile = ref(false);
    watch(() => props.tabs, () => {
      var _a2, _b2;
      selected.value = (_b2 = (_a2 = props.tabs[0]) == null ? void 0 : _a2.id) != null ? _b2 : "";
      expanded.value = "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "spec-tabs" }, _attrs))} data-v-8a1d97c2>`);
      if (!unref(isMobile)) {
        _push(`<div class="spec-tabs__panel" data-v-8a1d97c2><div role="tablist"${ssrRenderAttr("aria-label", __props.listLabel)} class="spec-tabs__list" data-v-8a1d97c2><!--[-->`);
        ssrRenderList(__props.tabs, (tab) => {
          _push(`<button${ssrRenderAttr("id", `tab-${unref(uid)}-${tab.id}`)}${ssrRenderAttr("aria-selected", unref(selected) === tab.id)}${ssrRenderAttr("tabindex", unref(selected) === tab.id ? 0 : -1)}${ssrRenderAttr("aria-controls", `tabpanel-${unref(uid)}-${tab.id}`)} class="${ssrRenderClass([{ "is-active": unref(selected) === tab.id }, "spec-tabs__tab"])}" type="button" role="tab" data-v-8a1d97c2>${ssrInterpolate(unref(textFor)(tab.label))}</button>`);
        });
        _push(`<!--]--></div><div class="spec-tabs__body" data-v-8a1d97c2><!--[-->`);
        ssrRenderList(__props.tabs, (tab) => {
          _push(`<div${ssrRenderAttr("id", `tabpanel-${unref(uid)}-${tab.id}`)} role="tabpanel"${ssrRenderAttr("aria-labelledby", `tab-${unref(uid)}-${tab.id}`)} class="spec-tabs__group" style="${ssrRenderStyle(unref(selected) === tab.id ? null : { display: "none" })}" data-v-8a1d97c2><b class="spec-tabs__group-title" data-v-8a1d97c2>${ssrInterpolate(unref(textFor)(tab.label))}</b><ul class="spec-tabs__rows" data-v-8a1d97c2><!--[-->`);
          ssrRenderList(tab.rows, (row) => {
            _push(`<li class="spec-tabs__row" data-v-8a1d97c2><span data-v-8a1d97c2>${ssrInterpolate(unref(textFor)(row.name))}</span><span class="spec-tabs__value" data-v-8a1d97c2>${ssrInterpolate(unref(textFor)(row.value))}</span></li>`);
          });
          _push(`<!--]--></ul></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<div class="spec-tabs__accordion" data-v-8a1d97c2><!--[-->`);
        ssrRenderList(__props.tabs, (tab) => {
          _push(`<div class="spec-tabs__cell" data-v-8a1d97c2><button${ssrRenderAttr("aria-expanded", unref(expanded) === tab.id)} class="spec-tabs__question" type="button" data-v-8a1d97c2><span data-v-8a1d97c2>${ssrInterpolate(unref(textFor)(tab.label))}</span><span aria-hidden="true" class="${ssrRenderClass([{ "is-open": unref(expanded) === tab.id }, "spec-tabs__caret"])}" data-v-8a1d97c2> + </span></button><ul class="spec-tabs__rows spec-tabs__rows--nested" style="${ssrRenderStyle(unref(expanded) === tab.id ? null : { display: "none" })}" data-v-8a1d97c2><!--[-->`);
          ssrRenderList(tab.rows, (row) => {
            _push(`<li class="spec-tabs__row" data-v-8a1d97c2><span data-v-8a1d97c2>${ssrInterpolate(unref(textFor)(row.name))}</span><span class="spec-tabs__value" data-v-8a1d97c2>${ssrInterpolate(unref(textFor)(row.value))}</span></li>`);
          });
          _push(`<!--]--></ul></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`<div class="spec-tabs__download" data-v-8a1d97c2><button class="spec-tabs__download-button" type="button" data-v-8a1d97c2>${ssrInterpolate(unref(textFor)(unref(downloadLabel)))}</button><small class="spec-tabs__download-hint" data-v-8a1d97c2>${ssrInterpolate(configurationFile.value ? "XLSX" : "CSV")} \xB7 ${ssrInterpolate(unref(textFor)(unref(downloadHint)))}</small></div></div>`);
    };
  }
});
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/model/ModelSpecTabs.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const ModelSpecTabs = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-8a1d97c2"]]);
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "QatarModelPage",
  __ssrInlineRender: true,
  props: {
    slug: {},
    content: {}
  },
  setup(__props) {
    const props = __props;
    const { textFor, buildPath } = useSiteContent();
    const title = computed(() => {
      var _a;
      return (_a = modelDisplayName[props.slug]) != null ? _a : t$1("", "", "");
    });
    const blankHeading = t$1("", "", "");
    const testDrivePath = computed(() => `${buildPath("book-drive.html")}?model=${encodeURIComponent(props.slug)}`);
    const quotePath = computed(() => `${buildPath("devis")}?model=${encodeURIComponent(props.slug)}`);
    const sections = computed(() => {
      const source = props.content.sections;
      if (!props.content.comfortTitle) return source;
      const index = source.findIndex((section) => section.type === "comfortRows");
      if (index < 0) return source;
      return [
        ...source.slice(0, index),
        { type: "comfortTitle", title: props.content.comfortTitle },
        ...source.slice(index)
      ];
    });
    const root = ref(null);
    ref(null);
    const heroVideoEnded = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "root",
        ref: root,
        class: "qatar-model"
      }, _attrs))} data-v-e06b00ef><section class="${ssrRenderClass([{
        "model-hero--tall": ["Dream", "Courage"].includes(__props.slug),
        "model-hero--versions": Boolean((_a = __props.content.heroVersions) == null ? void 0 : _a.length)
      }, "model-hero"])}" data-v-e06b00ef>`);
      if (__props.content.heroVideo) {
        _push(`<video class="${ssrRenderClass([{ "is-ended": unref(heroVideoEnded) }, "model-hero__video"])}"${ssrRenderAttr("poster", __props.content.heroPoster)} muted autoplay playsinline loop preload="metadata" data-v-e06b00ef><source${ssrRenderAttr("src", __props.content.heroVideo)} type="video/mp4" data-v-e06b00ef></video>`);
      } else {
        _push(`<img class="model-hero__video"${ssrRenderAttr("src", __props.content.heroPoster)}${ssrRenderAttr("alt", unref(textFor)(unref(title)))} data-v-e06b00ef>`);
      }
      _push(`<span class="model-hero__scrim model-hero__scrim--top" aria-hidden="true" data-v-e06b00ef></span><span class="model-hero__scrim model-hero__scrim--bottom" aria-hidden="true" data-v-e06b00ef></span><div class="model-hero__overlay" data-v-e06b00ef><div class="model-hero__head" data-v-e06b00ef><img class="model-hero__logo"${ssrRenderAttr("src", __props.content.logo)}${ssrRenderAttr("alt", unref(textFor)(unref(title)))} data-v-e06b00ef><p class="model-hero__tagline" data-v-e06b00ef>${ssrInterpolate(unref(textFor)(__props.content.tagline))}</p></div><div class="model-hero__foot" data-v-e06b00ef>`);
      if ((_b = __props.content.heroVersions) == null ? void 0 : _b.length) {
        _push(`<div class="model-hero__versions" data-v-e06b00ef><!--[-->`);
        ssrRenderList(__props.content.heroVersions, (version) => {
          _push(`<div class="model-hero__version" data-v-e06b00ef><p class="model-hero__version-name" data-v-e06b00ef>${ssrInterpolate(unref(textFor)(version.name))}</p><div class="model-hero__metrics model-hero__metrics--version" data-v-e06b00ef><!--[-->`);
          ssrRenderList(version.metrics, (metric) => {
            _push(`<div class="model-hero__metric" data-v-e06b00ef><div class="model-hero__metric-label" data-v-e06b00ef>${ssrInterpolate(unref(textFor)(metric.label))}</div><p class="model-hero__metric-value" data-v-e06b00ef>${ssrInterpolate(metric.value)}</p></div>`);
          });
          _push(`<!--]--></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="model-hero__metrics" data-v-e06b00ef><!--[-->`);
        ssrRenderList(__props.content.heroMetrics, (metric) => {
          _push(`<div class="model-hero__metric" data-v-e06b00ef><div class="model-hero__metric-label" data-v-e06b00ef>${ssrInterpolate(unref(textFor)(metric.label))}</div>`);
          if (metric.lines) {
            _push(`<!--[-->`);
            ssrRenderList(metric.lines, (line, lineIndex) => {
              _push(`<!--[--><div class="model-hero__metric-label model-hero__metric-label--line" data-v-e06b00ef>${ssrInterpolate(unref(textFor)(line.label))}</div><p class="model-hero__metric-value model-hero__metric-value--line" data-v-e06b00ef>${ssrInterpolate(line.value)}</p><!--]-->`);
            });
            _push(`<!--]-->`);
          } else {
            _push(`<p class="model-hero__metric-value" data-v-e06b00ef>${ssrInterpolate(metric.value)}</p>`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`<div class="model-request__actions" data-v-e06b00ef>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(testDrivePath),
        class: "base-button primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(textFor)(unref(modelCtaLabels).testDrive))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(textFor)(unref(modelCtaLabels).testDrive)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(quotePath),
        class: "base-button primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(textFor)(unref(modelCtaLabels).quote))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(textFor)(unref(modelCtaLabels).quote)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(BrochureButton, {
        slug: __props.slug,
        variant: "secondary",
        label: unref(modelCtaLabels).brochure
      }, null, _parent));
      _push(`</div></div></div></section>`);
      _push(ssrRenderComponent(ModelConfigurationSection, { slug: __props.slug }, null, _parent));
      if (__props.slug === "Free") {
        _push(ssrRenderComponent(ModelStudioGallery, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="model-compact" data-v-e06b00ef><div class="model-compact__grid" data-v-e06b00ef><!--[-->`);
      ssrRenderList(__props.content.compactMetrics, (metric) => {
        _push(`<div class="model-compact__cell" data-v-e06b00ef><div class="model-compact__value" data-v-e06b00ef>${ssrInterpolate(metric.value)}</div><span class="model-compact__label" data-v-e06b00ef>${ssrInterpolate(unref(textFor)(metric.label))}</span></div>`);
      });
      _push(`<!--]--></div></div><!--[-->`);
      ssrRenderList(unref(sections), (section, index) => {
        var _a2, _b2, _c;
        _push(`<!--[-->`);
        if (section.type === "parallax") {
          _push(`<div class="model-parallax" style="${ssrRenderStyle({ backgroundImage: `url('${section.image}')` })}" data-v-e06b00ef></div>`);
        } else if (section.type === "spacer" || section.type === "spacerLarge") {
          _push(`<div class="${ssrRenderClass([{ "model-spacer--large": section.type === "spacerLarge" }, "model-spacer"])}" data-v-e06b00ef></div>`);
        } else if (section.type === "comfortTitle") {
          _push(`<h1 class="model-comfort-title" data-v-e06b00ef>${ssrInterpolate(unref(textFor)(section.title))}</h1>`);
        } else if (section.type === "comfortRows") {
          _push(`<section class="model-comfort" data-v-e06b00ef><!--[-->`);
          ssrRenderList(section.rows, (row, rowIndex) => {
            _push(`<div class="${ssrRenderClass([{ "model-comfort__row--reverse": rowIndex % 2 === 1 }, "model-comfort__row"])}" data-v-e06b00ef><div class="model-comfort__media" data-reveal data-v-e06b00ef><img${ssrRenderAttr("src", row.image)}${ssrRenderAttr("alt", unref(textFor)(row.text) || (row.description ? unref(textFor)(row.description) : ""))} loading="lazy" decoding="async" data-v-e06b00ef></div><p class="model-comfort__text" data-reveal data-v-e06b00ef>${ssrInterpolate(unref(textFor)(row.text))} `);
            if (row.description && unref(textFor)(row.description)) {
              _push(`<span class="model-comfort__description" data-v-e06b00ef>${ssrInterpolate(unref(textFor)(row.description))}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</p></div>`);
          });
          _push(`<!--]--></section>`);
        } else if (section.type === "cards") {
          _push(ssrRenderComponent(ModelCardGrid, {
            heading: (_a2 = section.heading) != null ? _a2 : unref(blankHeading),
            cards: section.cards,
            "show-heading": Boolean(section.heading)
          }, null, _parent));
        } else if (section.type === "hoverGrid") {
          _push(`<section class="model-hover" data-v-e06b00ef><!--[-->`);
          ssrRenderList(section.tiles, (tile, tileIndex) => {
            _push(`<div class="model-hover__cell" data-v-e06b00ef><div class="model-hover__tile" data-v-e06b00ef><img${ssrRenderAttr("src", tile.image)}${ssrRenderAttr("alt", unref(textFor)(tile.text))} loading="lazy" decoding="async" data-v-e06b00ef><div class="model-hover__center" data-v-e06b00ef><p class="model-hover__caption" data-v-e06b00ef>${ssrInterpolate(unref(textFor)(tile.text))}</p></div></div></div>`);
          });
          _push(`<!--]--></section>`);
        } else if (section.type === "band" && section.variant === "cta") {
          _push(`<section class="${ssrRenderClass([{ "model-band--full-image": section.fullImage }, "model-band model-band--cta"])}" style="${ssrRenderStyle({ backgroundImage: section.fullImage ? void 0 : `url('${section.image}')` })}" data-v-e06b00ef>`);
          if (section.fullImage) {
            _push(`<img class="model-band__image"${ssrRenderAttr("src", section.image)}${ssrRenderAttr("alt", unref(textFor)(unref(title)))} loading="lazy" decoding="async" data-v-e06b00ef>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="model-band__shade" data-v-e06b00ef><div class="model-band__box" data-v-e06b00ef><img class="model-band__logo"${ssrRenderAttr("src", __props.content.logo)}${ssrRenderAttr("alt", unref(textFor)(unref(title)))} data-v-e06b00ef><div class="model-request__actions model-request__actions--center" data-v-e06b00ef>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: section.cta === "quote" ? unref(quotePath) : unref(testDrivePath),
            class: "base-button primary"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a3, _b3;
              if (_push2) {
                _push2(`${ssrInterpolate(unref(textFor)(unref(modelCtaLabels)[(_a3 = section.cta) != null ? _a3 : "testDrive"]))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(textFor)(unref(modelCtaLabels)[(_b3 = section.cta) != null ? _b3 : "testDrive"])), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(BrochureButton, {
            slug: __props.slug,
            variant: "secondary",
            label: unref(modelCtaLabels).brochure
          }, null, _parent));
          _push(`</div></div></div></section>`);
        } else if (section.type === "band") {
          _push(`<section class="${ssrRenderClass([{ "model-band--full-image": section.fullImage }, "model-band model-band--intro"])}" style="${ssrRenderStyle({ backgroundImage: section.fullImage ? void 0 : `url('${section.image}')` })}" data-v-e06b00ef>`);
          if (section.fullImage) {
            _push(`<img class="model-band__image"${ssrRenderAttr("src", section.image)}${ssrRenderAttr("alt", unref(textFor)((_b2 = section.text) != null ? _b2 : unref(title)))} loading="lazy" decoding="async" data-v-e06b00ef>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="model-band__top" data-v-e06b00ef><p class="model-band__lead" data-v-e06b00ef>${ssrInterpolate(unref(textFor)((_c = section.text) != null ? _c : unref(blankHeading)))}</p></div></section>`);
        } else {
          _push(`<section class="model-specs" data-v-e06b00ef><div class="model-specs__head" data-v-e06b00ef><img class="model-specs__wordmark"${ssrRenderAttr("src", __props.content.logo)}${ssrRenderAttr("alt", unref(textFor)(unref(title)))} data-v-e06b00ef><p class="model-specs__label" data-v-e06b00ef>${ssrInterpolate(unref(textFor)(__props.content.configLabel))}</p></div>`);
          _push(ssrRenderComponent(ModelSpecTabs, {
            tabs: __props.content.specTabs,
            "list-label": unref(textFor)(__props.content.configLabel),
            "model-name": unref(textFor)(unref(title)),
            note: unref(textFor)(__props.content.specNote),
            slug: __props.slug
          }, null, _parent));
          _push(`<p class="model-specs__note" data-v-e06b00ef>${ssrInterpolate(unref(textFor)(__props.content.specNote))}</p></section>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/model/QatarModelPage.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const QatarModelPage = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-e06b00ef"]]);
const _imports_0$f = publicAssetsURL("/assets/quote/hero.webp");
const _imports_1$c = publicAssetsURL("/assets/quote/model-lineup.webp");
const _imports_2$8 = publicAssetsURL("/assets/quote/dream-banner.webp");
const _imports_3$8 = publicAssetsURL("/assets/quote/free-banner.webp");
const _imports_4$5 = publicAssetsURL("/assets/quote/courage-banner.webp");
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "QuotePage",
  __ssrInlineRender: true,
  setup(__props) {
    const { textFor, buildPath } = useSiteContent();
    const route = useRoute();
    const schema = leadForms.quote;
    const labels = {
      or: t$1("or", "ou", "\u0623\u0648"),
      introStart: t$1("choose your model and an advisor from", "choisissez votre mod\xE8le et un conseiller", "\u0627\u062E\u062A\u0631 \u0637\u0631\u0627\u0632\u0643 \u0648\u0633\u064A\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0645\u0633\u062A\u0634\u0627\u0631 \u0645\u0646"),
      introEnd: t$1("will get back to you as soon as possible.", "vous r\xE9pond dans les plus brefs d\xE9lais.", "\u0641\u064A \u0623\u0642\u0631\u0628 \u0648\u0642\u062A \u0645\u0645\u0643\u0646."),
      reassurance: t$1("Less than a minute, no obligation.", "Moins d'une minute, sans engagement.", "\u0623\u0642\u0644 \u0645\u0646 \u062F\u0642\u064A\u0642\u0629\u060C \u062F\u0648\u0646 \u0623\u064A \u0627\u0644\u062A\u0632\u0627\u0645."),
      allRequired: t$1("All fields are required.", "Tous les champs sont obligatoires.", "\u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644 \u0625\u0644\u0632\u0627\u0645\u064A\u0629."),
      lineup: t$1("Dream PHEV, Courage 100% electric, Free REEV", "Dream PHEV, Courage 100% \xE9lectrique, Free REEV", "Dream PHEV\u060C Courage \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644\u060C Free REEV"),
      model: t$1("Which model interests you?", "Quel mod\xE8le vous int\xE9resse ?", "\u0623\u064A \u0637\u0631\u0627\u0632 \u064A\u0647\u0645\u0643\u061F"),
      customerType: t$1("You are", "Vous \xEAtes", "\u0623\u0646\u062A"),
      contact: t$1("Your contact details", "Vos coordonn\xE9es", "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0643"),
      consent: t$1("I agree to be contacted by Autohall about my quote request.", "J\u2019accepte d\u2019\xEAtre contact\xE9(e) par Autohall au sujet de ma demande de devis.", "\u0623\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u0623\u0646 \u062A\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u064A Autohall \u0628\u0634\u0623\u0646 \u0637\u0644\u0628 \u0639\u0631\u0636 \u0627\u0644\u0633\u0639\u0631."),
      financing: t$1("Financing method", "Mode de financement", "\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062A\u0645\u0648\u064A\u0644"),
      privacy: t$1("By submitting this form, you agree that your information will be sent to Auto Hall, the Voyah dealer in Tunisia.", "En envoyant ce formulaire, vous acceptez que vos informations soient transmises \xE0 Auto Hall, concessionnaire Voyah en Tunisie.", "\u0628\u0625\u0631\u0633\u0627\u0644 \u0647\u0630\u0627 \u0627\u0644\u0646\u0645\u0648\u0630\u062C\u060C \u0641\u0625\u0646\u0643 \u062A\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u0646\u0642\u0644 \u0628\u064A\u0627\u0646\u0627\u062A\u0643 \u0625\u0644\u0649 Auto Hall\u060C \u0648\u0643\u064A\u0644 Voyah \u0641\u064A \u062A\u0648\u0646\u0633."),
      seePrivacy: t$1("See the", "Voir la", "\u0627\u0637\u0651\u0644\u0639 \u0639\u0644\u0649"),
      privacyLink: t$1("privacy policy.", "politique de confidentialit\xE9.", "\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629."),
      submit: t$1("Send my request", "Envoyer ma demande", "\u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628\u064A"),
      sending: t$1("Sending\u2026", "Envoi en cours\u2026", "\u062C\u0627\u0631\u064D \u0627\u0644\u0625\u0631\u0633\u0627\u0644\u2026"),
      thanks: t$1("Thank you!", "Merci !", "\u0634\u0643\u0631\u0627\u064B!"),
      successDetail: t$1("An Auto Hall advisor will contact you within [24 h] to prepare your quote.", "Un conseiller Auto Hall vous contacte sous [24 h] pour pr\xE9parer votre devis.", "\u0633\u064A\u062A\u0635\u0644 \u0628\u0643 \u0645\u0633\u062A\u0634\u0627\u0631 Auto Hall \u062E\u0644\u0627\u0644 [24 \u0633\u0627\u0639\u0629] \u0644\u0625\u0639\u062F\u0627\u062F \u0639\u0631\u0636 \u0627\u0644\u0633\u0639\u0631."),
      failure: t$1("Your request could not be sent. Your entries have been kept; please try again.", "Votre demande n\u2019a pas pu \xEAtre envoy\xE9e. Vos informations sont conserv\xE9es dans le formulaire ; veuillez r\xE9essayer.", "\u062A\u0639\u0630\u0651\u0631 \u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628\u0643. \u062A\u0645 \u0627\u0644\u0627\u062D\u062A\u0641\u0627\u0638 \u0628\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0641\u064A \u0627\u0644\u0646\u0645\u0648\u0630\u062C\u061B \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u062C\u062F\u062F\u0627\u064B."),
      rateLimited: t$1("Too many attempts. Please try again in 10 minutes.", "Trop de tentatives. Veuillez r\xE9essayer dans 10 minutes.", "\u0645\u062D\u0627\u0648\u0644\u0627\u062A \u0643\u062B\u064A\u0631\u0629. \u064A\u0631\u062C\u0649 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0628\u0639\u062F 10 \u062F\u0642\u0627\u0626\u0642.")
    };
    const contactFields = schema.fields.filter((field) => ["name", "phone", "address", "city", "email"].includes(field.name));
    const autocomplete = { name: "name", phone: "tel", address: "street-address", city: "address-level2", email: "email" };
    const values = reactive(Object.fromEntries(schema.fields.map((field) => [field.name, ""])));
    const requestedModel = Array.isArray(route.query.model) ? route.query.model[0] : route.query.model;
    if (quoteModels.some((model) => model.value === requestedModel)) values.model = requestedModel;
    const errors = reactive({});
    const company = ref("");
    const state = ref("idle");
    const rateLimited = ref(false);
    const locked = computed(() => state.value === "sending" || state.value === "success");
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "quote-page" }, _attrs))} data-v-d190023f><form class="quote-form" novalidate${ssrRenderAttr("aria-busy", unref(state) === "sending")} data-v-d190023f><img class="quote-banner"${ssrRenderAttr("src", _imports_0$f)} alt="VOYAH Dream, Courage, Free \u2014 Auto Hall" width="1200" height="628" fetchpriority="high" data-v-d190023f><header class="quote-intro quote-pad" data-v-d190023f><h1 data-v-d190023f>${ssrInterpolate(unref(textFor)(unref(schema).title))}</h1><p data-v-d190023f><strong data-v-d190023f>Courage, Free ${ssrInterpolate(unref(textFor)(labels.or))} Dream :</strong> ${ssrInterpolate(unref(textFor)(labels.introStart))} <strong data-v-d190023f>Auto Hall</strong><br class="quote-desktop-break" data-v-d190023f> ${ssrInterpolate(unref(textFor)(labels.introEnd))}</p><p class="quote-reassurance" data-v-d190023f>${ssrInterpolate(unref(textFor)(labels.reassurance))}</p><p class="quote-required" data-v-d190023f>${ssrInterpolate(unref(textFor)(labels.allRequired))}</p><img class="quote-lineup"${ssrRenderAttr("src", _imports_1$c)}${ssrRenderAttr("alt", unref(textFor)(labels.lineup))} width="1081" height="274" data-v-d190023f></header><fieldset class="quote-models quote-pad"${ssrIncludeBooleanAttr(unref(locked)) ? " disabled" : ""} data-v-d190023f><legend data-v-d190023f>${ssrInterpolate(unref(textFor)(labels.model))}</legend><div class="quote-model-list" data-v-d190023f><!--[-->`);
      ssrRenderList(unref(quoteModels), (model) => {
        _push(`<label class="${ssrRenderClass([{ "is-selected": unref(values).model === model.value }, "quote-model"])}" data-v-d190023f><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(values).model, model.value)) ? " checked" : ""} class="quote-choice" type="radio" name="model"${ssrRenderAttr("value", model.value)} required${ssrRenderAttr("aria-invalid", Boolean(unref(errors).model))}${ssrRenderAttr("aria-describedby", unref(errors).model ? "quote-error-model" : void 0)} data-v-d190023f><img${ssrRenderAttr("src", model.image)} alt="" width="251" height="144" data-v-d190023f><span class="quote-model-copy" data-v-d190023f><strong data-v-d190023f>${ssrInterpolate(model.name)}</strong><span data-v-d190023f>${ssrInterpolate(unref(textFor)(model.description))}</span></span></label>`);
      });
      _push(`<!--]--></div>`);
      if (unref(errors).model) {
        _push(`<p id="quote-error-model" class="quote-error" data-v-d190023f>${ssrInterpolate(unref(errors).model)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</fieldset><img class="quote-banner"${ssrRenderAttr("src", _imports_2$8)} alt="VOYAH Dream" width="1200" height="628" loading="lazy" data-v-d190023f><div class="quote-details quote-pad" data-v-d190023f><fieldset class="quote-customer"${ssrIncludeBooleanAttr(unref(locked)) ? " disabled" : ""} data-v-d190023f><legend data-v-d190023f>${ssrInterpolate(unref(textFor)(labels.customerType))}</legend><div class="quote-options quote-options--customer" data-v-d190023f><!--[-->`);
      ssrRenderList(unref(quoteCustomerTypes), (option) => {
        _push(`<label data-v-d190023f><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(values).customerType, option.value)) ? " checked" : ""} class="quote-choice" type="radio" name="customerType"${ssrRenderAttr("value", option.value)} required${ssrRenderAttr("aria-invalid", Boolean(unref(errors).customerType))}${ssrRenderAttr("aria-describedby", unref(errors).customerType ? "quote-error-customerType" : void 0)} data-v-d190023f><span data-v-d190023f>${ssrInterpolate(unref(textFor)(option.label))}</span></label>`);
      });
      _push(`<!--]--></div>`);
      if (unref(errors).customerType) {
        _push(`<p id="quote-error-customerType" class="quote-error" data-v-d190023f>${ssrInterpolate(unref(errors).customerType)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</fieldset><fieldset class="quote-contact"${ssrIncludeBooleanAttr(unref(locked)) ? " disabled" : ""} data-v-d190023f><legend data-v-d190023f>${ssrInterpolate(unref(textFor)(labels.contact))}</legend><div class="quote-fields" data-v-d190023f><!--[-->`);
      ssrRenderList(unref(contactFields), (field) => {
        _push(`<div class="quote-field" data-v-d190023f><label class="quote-sr-only"${ssrRenderAttr("for", `quote-${field.name}`)} data-v-d190023f>${ssrInterpolate(unref(textFor)(field.label))}</label><input${ssrRenderAttr("id", `quote-${field.name}`)}${ssrRenderDynamicModel(field.type, unref(values)[field.name], null)}${ssrRenderAttr("name", field.name)}${ssrRenderAttr("type", field.type)}${ssrRenderAttr("placeholder", unref(textFor)(field.label))}${ssrRenderAttr("autocomplete", autocomplete[field.name])}${ssrRenderAttr("maxlength", 2e3)} required${ssrRenderAttr("aria-invalid", Boolean(unref(errors)[field.name]))}${ssrRenderAttr("aria-describedby", unref(errors)[field.name] ? `quote-error-${field.name}` : void 0)} data-v-d190023f>`);
        if (unref(errors)[field.name]) {
          _push(`<p${ssrRenderAttr("id", `quote-error-${field.name}`)} class="quote-error" data-v-d190023f>${ssrInterpolate(unref(errors)[field.name])}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><label class="quote-consent" data-v-d190023f><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(values).consent, "Oui")) ? " checked" : ""} class="quote-choice" type="checkbox" name="consent" required${ssrRenderAttr("aria-invalid", Boolean(unref(errors).consent))}${ssrRenderAttr("aria-describedby", unref(errors).consent ? "quote-error-consent" : void 0)} data-v-d190023f><span data-v-d190023f>${ssrInterpolate(unref(textFor)(labels.consent))}</span></label>`);
      if (unref(errors).consent) {
        _push(`<p id="quote-error-consent" class="quote-error" data-v-d190023f>${ssrInterpolate(unref(errors).consent)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</fieldset></div><img class="quote-banner"${ssrRenderAttr("src", _imports_3$8)} alt="VOYAH Free" width="1200" height="628" loading="lazy" data-v-d190023f><div class="quote-finance quote-pad" data-v-d190023f><fieldset${ssrIncludeBooleanAttr(unref(locked)) ? " disabled" : ""} data-v-d190023f><legend data-v-d190023f>${ssrInterpolate(unref(textFor)(labels.financing))}</legend><div class="quote-options quote-options--financing" data-v-d190023f><!--[-->`);
      ssrRenderList(unref(quoteFinancingOptions), (option) => {
        _push(`<label data-v-d190023f><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(values).financing, option.value)) ? " checked" : ""} class="quote-choice" type="radio" name="financing"${ssrRenderAttr("value", option.value)} required${ssrRenderAttr("aria-invalid", Boolean(unref(errors).financing))}${ssrRenderAttr("aria-describedby", unref(errors).financing ? "quote-error-financing" : void 0)} data-v-d190023f><span data-v-d190023f>${ssrInterpolate(unref(textFor)(option.label))}</span></label>`);
      });
      _push(`<!--]--></div>`);
      if (unref(errors).financing) {
        _push(`<p id="quote-error-financing" class="quote-error" data-v-d190023f>${ssrInterpolate(unref(errors).financing)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</fieldset><p class="quote-privacy" data-v-d190023f>${ssrInterpolate(unref(textFor)(labels.privacy))}<br data-v-d190023f>${ssrInterpolate(unref(textFor)(labels.seePrivacy))} `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(buildPath)("privacy.html")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(textFor)(labels.privacyLink))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(textFor)(labels.privacyLink)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><div class="quote-honeypot" aria-hidden="true" inert data-v-d190023f><label for="quote-website" data-v-d190023f>Website</label><input id="quote-website"${ssrRenderAttr("value", unref(company))} type="text" autocomplete="off" tabindex="-1" data-v-d190023f></div>`);
      if (unref(state) === "error") {
        _push(`<p class="quote-error quote-send-error" role="alert" data-v-d190023f>${ssrInterpolate(unref(textFor)(unref(rateLimited) ? labels.rateLimited : labels.failure))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="quote-submit" type="submit"${ssrIncludeBooleanAttr(unref(locked)) ? " disabled" : ""} data-v-d190023f>${ssrInterpolate(unref(textFor)(unref(state) === "sending" ? labels.sending : labels.submit))}</button></div><img class="quote-banner"${ssrRenderAttr("src", _imports_4$5)} alt="VOYAH Courage" width="1200" height="628" loading="lazy" data-v-d190023f>`);
      if (unref(state) === "success") {
        _push(`<section class="quote-success quote-pad" role="status" tabindex="-1" data-v-d190023f><span class="quote-success-icon" aria-hidden="true" data-v-d190023f>\u2713</span><h2 data-v-d190023f>${ssrInterpolate(unref(textFor)(labels.thanks))}<br data-v-d190023f>${ssrInterpolate(unref(textFor)(unref(schema).success))}</h2><p data-v-d190023f>${ssrInterpolate(unref(textFor)(labels.successDetail))}</p></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></article>`);
    };
  }
});
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/QuotePage.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const QuotePage = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-d190023f"]]);
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "LeadPage",
  __ssrInlineRender: true,
  props: {
    page: {},
    formKey: {}
  },
  setup(__props) {
    const props = __props;
    const { locale, textFor } = useSiteContent();
    const formTitle = computed(() => textFor(leadForms[props.formKey].title));
    const asideImage = computed(() => {
      if (props.formKey === "test-drive") return "/assets/qatar/images/voyah-free-2024-color-slider-green.webp";
      return homePage.slides[0].image;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.formKey === "quote") {
        _push(ssrRenderComponent(QuotePage, mergeProps({
          key: unref(locale).code
        }, _attrs), null, _parent));
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "lead-page" }, _attrs))} data-v-da662800>`);
        if (__props.page.heroImage) {
          _push(`<section class="lead-hero" data-v-da662800><img${ssrRenderAttr("src", __props.page.heroImage)}${ssrRenderAttr("alt", unref(formTitle))} data-v-da662800><div class="lead-hero__scrim" data-v-da662800></div><div class="container lead-hero__inner" data-v-da662800><h1 class="lead-hero__title" data-v-da662800>${ssrInterpolate(unref(formTitle))}</h1></div></section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="container lead-page__body" data-v-da662800>`);
        if (!__props.page.heroImage) {
          _push(`<h1 class="lead-page__title" data-v-da662800>${ssrInterpolate(unref(formTitle))}</h1>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="lead-page__grid" data-v-da662800><div class="lead-page__form" data-v-da662800>`);
        _push(ssrRenderComponent(LeadForm, {
          form: __props.formKey,
          key: unref(locale).code
        }, null, _parent));
        _push(`</div>`);
        if (unref(asideImage)) {
          _push(`<aside class="lead-page__aside" data-v-da662800><img${ssrRenderAttr("src", unref(asideImage))}${ssrRenderAttr("alt", unref(textFor)(unref(modelDisplayName)["Free"]))} data-v-da662800></aside>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      }
    };
  }
});
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/LeadPage.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const LeadPage = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-da662800"]]);
const _imports_0$e = publicAssetsURL("/assets/OFFICIALVOYAH/passion-L/images/sc_1.jpg");
const _imports_1$b = publicAssetsURL("/assets/OFFICIALVOYAH/passion-L/images/f4f5a6a1-71c8-4531-8a05-4e6e0cf7f70f1770619343790.png");
const _imports_2$7 = publicAssetsURL("/assets/OFFICIALVOYAH/passion-L/images/sc_36.jpg");
const _imports_3$7 = publicAssetsURL("/assets/OFFICIALVOYAH/passion-L/images/sc_40.jpg");
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "PassionLPage",
  __ssrInlineRender: true,
  props: {
    model: {}
  },
  setup(__props) {
    const { textFor } = useSiteContent();
    const chapterSections = computed(() => [
      { id: "section1", title: textFor({ en: "Oriental Aesthetics", fr: "Esth\xE9tique Orientale", ar: "\u0627\u0644\u062C\u0645\u0627\u0644\u064A\u0627\u062A \u0627\u0644\u0634\u0631\u0642\u064A\u0629" }), shortTitle: textFor({ en: "Aesthetics", fr: "Esth\xE9tique", ar: "\u0627\u0644\u062C\u0645\u0627\u0644\u064A\u0627\u062A" }) },
      { id: "section2", title: textFor({ en: "Comfort Cabin", fr: "Habitacle Confort", ar: "\u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0631\u064A\u062D\u0629" }), shortTitle: textFor({ en: "Cabin", fr: "Habitacle", ar: "\u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629" }) },
      { id: "section3", title: textFor({ en: "HarmonySpace", fr: "HarmonySpace", ar: "\u0647\u0627\u0631\u0645\u0648\u0646\u064A \u0633\u0628\u064A\u0633" }), shortTitle: textFor({ en: "Harmony", fr: "Harmony", ar: "\u0647\u0627\u0631\u0645\u0648\u0646\u064A" }) },
      { id: "section4", title: textFor({ en: "Huawei ADS", fr: "Huawei ADS", ar: "ADS \u0647\u0648\u0627\u0648\u064A" }), shortTitle: textFor({ en: "ADS", fr: "ADS", ar: "ADS" }) },
      { id: "section5", title: textFor({ en: "Powertrain", fr: "Groupe Motopropulseur", ar: "\u0646\u0638\u0627\u0645 \u0627\u0644\u062F\u0641\u0639" }), shortTitle: textFor({ en: "Power", fr: "Puissance", ar: "\u0627\u0644\u0642\u0648\u0629" }) },
      { id: "section6", title: textFor({ en: "Chassis", fr: "Ch\xE2ssis", ar: "\u0627\u0644\u0647\u064A\u0643\u0644" }), shortTitle: textFor({ en: "Chassis", fr: "Ch\xE2ssis", ar: "\u0627\u0644\u0647\u064A\u0643\u0644" }) },
      { id: "section7", title: textFor({ en: "Safety", fr: "S\xE9curit\xE9", ar: "\u0627\u0644\u0633\u0644\u0627\u0645\u0629" }), shortTitle: textFor({ en: "Safety", fr: "S\xE9curit\xE9", ar: "\u0627\u0644\u0633\u0644\u0627\u0645\u0629" }) }
    ]);
    const zhanyiSlides = computed(() => [
      { image: "/assets/OFFICIALVOYAH/passion-L/images/sc_3.jpg", title: textFor({ en: "Kunpeng Wings - Front Design", fr: "Ailes Kunpeng - Design Avant", ar: "\u0623\u062C\u0646\u062D\u0629 \u0643\u0648\u0646 \u0628\u064A\u0646\u063A - \u0627\u0644\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0623\u0645\u0627\u0645\u064A" }), desc: textFor({ en: "Majestic presence, grand vision", fr: "Pr\xE9sence majestueuse, grande vision", ar: "\u062D\u0636\u0648\u0631 \u0645\u0647\u064A\u0628\u060C \u0631\u0624\u064A\u0629 \u0639\u0638\u064A\u0645\u0629" }) },
      { image: "/assets/OFFICIALVOYAH/passion-L/images/sc_3-2.jpg", title: textFor({ en: "Water Character Headlights", fr: "Phares en Forme d'Eau", ar: " \u0627\u0644\u0645\u0635\u0627\u0628\u064A\u062D \u0627\u0644\u0623\u0645\u0627\u0645\u064A\u0629 \u0639\u0644\u0649 \u0634\u0643\u0644 \u0645\u0627\u0621" }), desc: textFor({ en: "Striking water-inspired lighting", fr: "\xC9clairage inspir\xE9 de l'eau", ar: "\u0625\u0636\u0627\u0621\u0629 \u0645\u0633\u062A\u0648\u062D\u0627\u0629 \u0645\u0646 \u0627\u0644\u0645\u0627\u0621" }) },
      { image: "/assets/OFFICIALVOYAH/passion-L/images/sc_3-3.jpg", title: textFor({ en: "Cascading Grille", fr: "Grille en Cascade", ar: "\u0634\u0628\u0643\u0629 \u0623\u0645\u0627\u0645\u064A\u0629 \u0645\u062A\u062A\u0627\u0644\u064A\u0629" }), desc: textFor({ en: "Rising to the sky with confidence", fr: "S'\xE9lever vers le ciel avec confiance", ar: "\u0627\u0644\u0635\u0639\u0648\u062F \u0625\u0644\u0649 \u0627\u0644\u0633\u0645\u0627\u0621 \u0628\u062B\u0642\u0629" }) }
    ]);
    const qingkongSlides = computed(() => [
      { image: "/assets/OFFICIALVOYAH/passion-L/images/sc_4.jpg", title: textFor({ en: "Side Profile", fr: "Profil Lat\xE9ral", ar: "\u0627\u0644\u062C\u0627\u0646\u0628\u064A\u0629" }), desc: textFor({ en: "Aspiring to the clouds", fr: "Aspirant aux nuages", ar: "\u062A\u0637\u0644\u0639 \u0625\u0644\u0649 \u0627\u0644\u0633\u062D\u0627\u0628" }) },
      { image: "/assets/OFFICIALVOYAH/passion-L/images/sc_4-2.jpg", title: textFor({ en: "20-inch Radiant Wheels", fr: "Jantes Rayonnantes 20 pouces", ar: "\u0639\u062C\u0644\u0627\u062A 20 \u0628\u0648\u0635\u0629 \u0645\u0634\u0631\u0642\u0629" }), desc: textFor({ en: "Illuminating the journey ahead", fr: "Illuminant le voyage \xE0 venir", ar: "\u0625\u0646\u0627\u0631\u0629 \u0627\u0644\u0631\u062D\u0644\u0629 \u0627\u0644\u0642\u0627\u062F\u0645\u0629" }) },
      { image: "/assets/OFFICIALVOYAH/passion-L/images/sc_4-3.jpg", title: textFor({ en: "20-inch Shining Wheels", fr: "Jantes Brillantes 20 pouces", ar: "\u0639\u062C\u0644\u0627\u062A 20 \u0628\u0648\u0635\u0629 \u0644\u0627\u0645\u0639\u0629" }), desc: textFor({ en: "Bold and fearless", fr: "Audacieux et sans peur", ar: "\u062C\u0631\u064A\u0621 \u0648 \u0628\u0644\u0627 \u062E\u0648\u0641" }) },
      { image: "/assets/OFFICIALVOYAH/passion-L/images/sc_4-4.jpg", title: textFor({ en: "19-inch Light Track Wheels", fr: "Jantes 19 pouces", ar: "\u0639\u062C\u0644\u0627\u062A 19 \u0628\u0648\u0635\u0629" }), desc: textFor({ en: "Light accompanies every journey", fr: "La lumi\xE8re accompagne chaque voyage", ar: "\u0627\u0644\u0636\u0648\u0621 \u064A\u0631\u0627\u0641\u0642 \u0643\u0644 \u0631\u062D\u0644\u0629" }) }
    ]);
    const xiaoyaoSlides = computed(() => [
      { image: "/assets/OFFICIALVOYAH/passion-L/images/sc_5.jpg", title: textFor({ en: "Rear Design", fr: "Design Arri\xE8re", ar: "\u0627\u0644\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u062E\u0644\u0641\u064A" }), desc: textFor({ en: "Commanding presence", fr: "Pr\xE9sence imposante", ar: "\u062D\u0636\u0648\u0631 \u0645\u0647\u064A\u0628" }) },
      { image: "/assets/OFFICIALVOYAH/passion-L/images/sc_5-2.jpg", title: textFor({ en: "Feather Tail Lights", fr: "Feux Arri\xE8re Plume", ar: "\u0623\u0636\u0648\u0627\u0621 \u062E\u0644\u0641\u064A\u0629 \u0631\u064A\u0634\u064A\u0629" }), desc: textFor({ en: "Moving forward with light", fr: "Avancer avec la lumi\xE8re", ar: "\u0627\u0644\u062A\u0642\u062F\u0645 \u0645\u0639 \u0627\u0644\u0636\u0648\u0621" }) }
    ]);
    const interiorSlides = computed(() => [
      { image: "/assets/OFFICIALVOYAH/passion-L/images/sc_18.jpg", title: textFor({ en: "Cloud Mountain Seats", fr: "Si\xE8ges Montagne Nuage", ar: "\u0645\u0642\u0627\u0639\u062F \u062C\u0628\u0644 \u0627\u0644\u063A\u064A\u0645\u0629" }), desc: textFor({ en: "MPV-level comfort with layered texture", fr: "Confort de niveau MPV avec texture en couches", ar: "\u0631\u0627\u062D\u0629 \u0639\u0644\u0649 \u0645\u0633\u062A\u0648\u0649 MPV \u0645\u0639 \u0646\u0633\u064A\u062C \u0637\u0628\u0642\u064A" }) },
      { image: "/assets/OFFICIALVOYAH/passion-L/images/sc_19.jpg", title: textFor({ en: "Crystal Gear Shifter", fr: "Levier de Vitesse en Cristal", ar: "\u0639\u0635\u0628\u0629 \u0627\u0644\u062A\u0631\u0648\u0633 \u0627\u0644\u0643\u0631\u064A\u0633\u062A\u0627\u0644\u064A\u0629" }), desc: textFor({ en: "Diamond-cut crystal, warm as jade", fr: "Cristal taill\xE9 en diamant, chaud comme le jade", ar: "\u0643\u0631\u064A\u0633\u062A\u0627\u0644 \u0645\u0642\u0637\u0648\u0639 \u0628\u0627\u0644\u0645\u0627\u0633\u060C \u062F\u0627\u0641\u0626 \u0643\u0627\u0644\u064A\u0634\u0645" }) },
      { image: "/assets/OFFICIALVOYAH/passion-L/images/sc_20.jpg", title: textFor({ en: "Thousand Peak Trim", fr: "Finition Mille Sommets", ar: "\u062A\u0634\u0637\u064A\u0628 \u0623\u0644\u0641 \u0642\u0645\u0629" }), desc: textFor({ en: "Majestic mountain-inspired design", fr: "Design majestueux inspir\xE9 des montagnes", ar: "\u062A\u0635\u0645\u064A\u0645 \u0645\u0647\u064A\u0628 \u0645\u0633\u062A\u0648\u062D\u0649 \u0645\u0646 \u0627\u0644\u062C\u0628\u0627\u0644" }) }
    ]);
    const adsSlides = computed(() => [
      { image: "/assets/OFFICIALVOYAH/passion-L/images/sc_27.jpg", title: textFor({ en: "Full-Scene P2P Navigation", fr: "Navigation P2P Toute Sc\xE8ne", ar: "\u0645\u0644\u0627\u062D\u0629 P2P \u0644\u0643\u0644 \u0627\u0644\u0645\u0634\u0627\u0647\u062F" }), desc: textFor({ en: "Point-to-point 2.0 / Easy U-turn / Auto roundabout", fr: "Point \xE0 point 2.0 / Demi-tour facile / Rond-point auto", ar: "\u0646\u0642\u0637\u0629 \u0625\u0644\u0649 \u0646\u0642\u0637\u0629 2.0 / \u062F\u0648\u0631\u0627\u0646 \u0633\u0647\u0644 / \u062F\u0648\u0627\u0631 \u062A\u0644\u0642\u0627\u0626\u064A" }) },
      { image: "/assets/OFFICIALVOYAH/passion-L/images/sc_28.jpg", title: textFor({ en: "Smart Parking Assist", fr: "Aide au Stationnement Intelligent", ar: "\u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0631\u0643\u0646 \u0627\u0644\u0630\u0643\u064A\u0629" }), desc: textFor({ en: "Multi-level parking / Remote park-in / Complex spots", fr: "Stationnement multi-niveaux / Stationnement \xE0 distance", ar: "\u0631\u0643\u0646 \u0645\u062A\u0639\u062F\u062F \u0627\u0644\u0645\u0633\u062A\u0648\u064A\u0627\u062A / \u0631\u0643\u0646 \u0639\u0646 \u0628\u0639\u062F" }) }
    ]);
    const powerSlides = computed(() => [
      { image: "/assets/OFFICIALVOYAH/passion-L/images/sc_34.jpg", title: textFor({ en: "Lanhai Power", fr: "Puissance Lanhai", ar: "\u0642\u0648\u0629 \u0644\u0627\u0646\u0647\u064A" }), desc: textFor({ en: "Versatile hybrid solution for all scenarios", fr: "Solution hybride polyvalente pour tous les sc\xE9narios", ar: "\u062D\u0644 \u0647\u062C\u064A\u0646 \u0645\u062A\u0639\u062F\u062F \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0627\u062A \u0644\u062C\u0645\u064A\u0639 \u0627\u0644\u0633\u064A\u0646\u0627\u0631\u064A\u0648\u0647\u0627\u062A" }) },
      { image: "/assets/OFFICIALVOYAH/passion-L/images/sc_34-2.jpg", title: textFor({ en: "High-Energy Power", fr: "Puissance Haute \xC9nergie", ar: "\u0642\u0648\u0629 \u0637\u0627\u0642\u0629 \u0639\u0627\u0644\u064A\u0629" }), desc: textFor({ en: "490kW total power, 915N\xB7m torque, 0-100 in 4.8s", fr: "490kW, 915N\xB7m, 0-100 en 4.8s", ar: "490 \u0643\u064A\u0644\u0648\u0648\u0627\u0637\u060C 915 \u0646\u064A\u0648\u062A\u0646 \u0645\u062A\u0631\u060C 0-100 \u0641\u064A 4.8 \u062B\u0627\u0646\u064A\u0629" }) },
      { image: "/assets/OFFICIALVOYAH/passion-L/images/sc_34-3.jpg", title: textFor({ en: "Ultra-Low Fuel Consumption", fr: "Consommation Ultra-Faible", ar: "\u0627\u0633\u062A\u0647\u0644\u0627\u0643 \u0648\u0642\u0648\u062F \u0645\u0646\u062E\u0641\u0636 \u0644\u0644\u063A\u0627\u064A\u0629" }), desc: textFor({ en: "45.18% thermal efficiency, 5.67L/100km", fr: "Rendement thermique 45.18%, 5.67L/100km", ar: "\u0643\u0641\u0627\u0621\u0629 \u062D\u0631\u0627\u0631\u064A\u0629 45.18%\u060C 5.67 \u0644\u062A\u0631/100 \u0643\u0645" }) }
    ]);
    const chassisSlides = computed(() => [
      { image: "/assets/OFFICIALVOYAH/passion-L/images/sc_38.jpg", title: textFor({ en: "Rear-Wheel Steering", fr: "Direction des Roues Arri\xE8re", ar: "\u062A\u0648\u062C\u064A\u0647 \u0627\u0644\u0639\u062C\u0644\u0627\u062A \u0627\u0644\u062E\u0644\u0641\u064A\u0629" }), desc: textFor({ en: "More agile turns, more stable high-speed driving", fr: "Virages plus agiles, conduite \xE0 haute vitesse plus stable", ar: "\u0645\u0646\u0639\u0637\u0641\u0627\u062A \u0623\u0643\u062B\u0631 \u0631\u0634\u0627\u0642\u0629\u060C \u0642\u064A\u0627\u062F\u0629 \u0623\u0633\u0631\u0639 \u0648\u0623\u0643\u062B\u0631 \u0627\u0633\u062A\u0642\u0631\u0627\u0631\u064B\u0627" }) },
      { image: "/assets/OFFICIALVOYAH/passion-L/images/sc_38-2.jpg", title: textFor({ en: "100-0km/h in 35.9m", fr: "100-0km/h en 35.9m", ar: "100-0 \u0643\u0645/\u0633 \u0641\u064A 35.9 \u0645" }), desc: textFor({ en: "Extended safety boundary", fr: "Limite de s\xE9curit\xE9 \xE9tendue", ar: "\u062D\u062F \u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0645\u0645\u062A\u062F" }) },
      { image: "/assets/OFFICIALVOYAH/passion-L/images/sc_38-3.jpg", title: textFor({ en: "Torque Vectoring AWD", fr: "AWD Vectoriel de Couple", ar: "\u062F\u0641\u0639 \u0631\u0628\u0627\u0639\u064A \u0645\u062A\u062C\u0647 \u0627\u0644\u0639\u0632\u0645" }), desc: textFor({ en: "Full power even when fully loaded", fr: "Pleine puissance m\xEAme en charge compl\xE8te", ar: "\u0642\u0648\u0629 \u0643\u0627\u0645\u0644\u0629 \u062D\u062A\u0649 \u0639\u0646\u062F \u0627\u0644\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0643\u0627\u0645\u0644" }) }
    ]);
    const carColors = computed(() => [
      { id: "c1", name: textFor({ en: "Imperial Red", fr: "Rouge Imp\xE9rial", ar: "\u0623\u062D\u0645\u0631 \u0625\u0645\u0628\u0631\u0627\u0637\u0648\u0631\u064A" }), icon: "/assets/OFFICIALVOYAH/passion-L/images/icon1.png", image: "/assets/OFFICIALVOYAH/passion-L/images/swpier_h53b_01.jpg" },
      { id: "c2", name: textFor({ en: "Golden Black", fr: "Noir Dor\xE9", ar: "\u0623\u0633\u0648\u062F \u0630\u0647\u0628\u064A" }), icon: "/assets/OFFICIALVOYAH/passion-L/images/icon2.png", image: "/assets/OFFICIALVOYAH/passion-L/images/swpier_h53b_02.jpg" },
      { id: "c3", name: textFor({ en: "Champagne Gold", fr: "Or Champagne", ar: "\u0630\u0647\u0628\u064A \u0634\u0627\u0645\u0628\u0627\u0646\u064A\u0627" }), icon: "/assets/OFFICIALVOYAH/passion-L/images/icon3.png", image: "/assets/OFFICIALVOYAH/passion-L/images/swpier_h53b_03.jpg" },
      { id: "c4", name: textFor({ en: "Moonlight Silver", fr: "Argent Clair de Lune", ar: "\u0641\u0636\u064A \u0636\u0648\u0621 \u0627\u0644\u0642\u0645\u0631" }), icon: "/assets/OFFICIALVOYAH/passion-L/images/icon4.png", image: "/assets/OFFICIALVOYAH/passion-L/images/swpier_h53b_04.jpg" },
      { id: "c5", name: textFor({ en: "Cloud Blue", fr: "Bleu Nuage", ar: "\u0623\u0632\u0631\u0642 \u063A\u0627\u0626\u0645" }), icon: "/assets/OFFICIALVOYAH/passion-L/images/icon5.png", image: "/assets/OFFICIALVOYAH/passion-L/images/swpier_h53b_05.jpg" },
      { id: "c6", name: textFor({ en: "Ink Black", fr: "Noir Encre", ar: "\u0623\u0633\u0648\u062F \u062D\u0628\u0631" }), icon: "/assets/OFFICIALVOYAH/passion-L/images/icon6.png", image: "/assets/OFFICIALVOYAH/passion-L/images/swpier_h53b_06.jpg" }
    ]);
    const currentSlide = ref({ section2: 0, section3: 0, section4: 0, interior: 0, ads: 0, power: 0, chassis: 0 });
    const currentColor = ref(0);
    const activeSection = ref(0);
    const showMobileNav = ref(false);
    const showSideNav = ref(false);
    const showBottomBar = ref(false);
    const navProgress = ref(0);
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "passion-l-page" }, _attrs))} data-v-459dc697><section class="kv-section" data-v-459dc697><img${ssrRenderAttr("src", _imports_0$e)} alt="Passion L" class="kv-bg-img" loading="eager" fetchpriority="high" decoding="async" data-v-459dc697><div class="kv-content" data-v-459dc697><img${ssrRenderAttr("src", _imports_1$b)} alt="Passion L Logo" class="kv-logo inview-child inview-animated" loading="lazy" fetchpriority="low" decoding="async" data-v-459dc697><p class="kv-slogan inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.4s" })}" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "New-Era Flagship Sedan", fr: "Berline Phare Nouvelle \xC8re", ar: "\u0633\u064A\u062F\u0627\u0646 \u0631\u0627\u0626\u062F\u0629 \u0645\u0646 \u062C\u064A\u0644 \u062C\u062F\u064A\u062F" }))}</p><div class="kv-btns inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.5s" })}" data-v-459dc697><button class="voyah-button voyah-button--more voyah-button--dark voyah-button--plain" data-v-459dc697><span class="voyah-button__text" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Book Test Drive", fr: "R\xE9server un Essai", ar: "\u0627\u062D\u062C\u0632 \u062A\u062C\u0631\u0628\u0629 \u0642\u064A\u0627\u062F\u0629" }))}</span></button><button class="voyah-button voyah-button--more voyah-button--dark" data-v-459dc697><span class="voyah-button__text" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Order Now", fr: "Commander", ar: "\u0627\u0637\u0644\u0628 \u0627\u0644\u0622\u0646" }))}</span></button></div></div></section><div class="${ssrRenderClass([{ visible: showMobileNav.value }, "car-nav-wap fixed-nav"])}" data-v-459dc697><ul class="car-nav-list" data-v-459dc697><!--[-->`);
      ssrRenderList(chapterSections.value, (section, index) => {
        _push(`<li class="${ssrRenderClass([{ active: activeSection.value === index }, "car-nav-item"])}" data-v-459dc697><div class="car-nav-item_icon" data-v-459dc697><div class="icon-outer" data-v-459dc697></div><div class="icon-inner" data-v-459dc697></div></div><div class="car-nav-item_text" data-v-459dc697><p class="serial" data-v-459dc697>${ssrInterpolate(String(index + 1).padStart(2, "0"))}</p><p class="title" data-v-459dc697>${ssrInterpolate(section.title)}</p></div></li>`);
      });
      _push(`<!--]--></ul></div><nav class="${ssrRenderClass([{ visible: showSideNav.value }, "side-nav"])}" data-v-459dc697><div class="nav-line" data-v-459dc697><div class="nav-progress" style="${ssrRenderStyle({ height: navProgress.value + "%" })}" data-v-459dc697></div></div><ul class="nav-dots" data-v-459dc697><!--[-->`);
      ssrRenderList(chapterSections.value, (section, index) => {
        _push(`<li class="${ssrRenderClass([{ active: activeSection.value === index }, "nav-dot"])}" data-v-459dc697><span class="dot-number" data-v-459dc697>${ssrInterpolate(String(index + 1).padStart(2, "0"))}</span><span class="dot-title" data-v-459dc697>${ssrInterpolate(section.shortTitle || section.title)}</span></li>`);
      });
      _push(`<!--]--></ul></nav><section id="section1" class="level-one" targetindex="0" data-v-459dc697><div class="section-bg" style="${ssrRenderStyle({ "background-image": "url('/assets/OFFICIALVOYAH/passion-L/images/sc_2.jpg')" })}" data-v-459dc697></div><div class="section-content" data-v-459dc697><h2 class="title inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.3s" })}" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Oriental Flagship Aesthetics", fr: "Esth\xE9tique Orientale Phare", ar: "\u0627\u0644\u062C\u0645\u0627\u0644\u064A\u0627\u062A \u0627\u0644\u0634\u0631\u0642\u064A\u0629 \u0627\u0644\u0631\u0627\u0626\u062F\u0629" }))}</h2><p class="subTitle inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.4s" })}" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Kunpeng Exterior Design", fr: "Design Ext\xE9rieur Kunpeng", ar: "\u062A\u0635\u0645\u064A\u0645 \u0643\u0648\u0646 \u0628\u064A\u0646\u063A \u0627\u0644\u062E\u0627\u0631\u062C\u064A" }))}</p></div></section><section id="section2" class="common commonMax" targetindex="0" data-v-459dc697><h3 class="title inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.3s" })}" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Spreading Wings", fr: "Ailes D\xE9ploy\xE9es", ar: "\u0627\u0644\u0623\u062C\u0646\u062D\u0629 \u0627\u0644\u0645\u0646\u062A\u0634\u0631\u0629" }))}</h3><div class="swiper-container" data-v-459dc697><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translateX(-${currentSlide.value.section2 * 100}%)` })}" data-v-459dc697><!--[-->`);
      ssrRenderList(zhanyiSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-459dc697><div class="img-container" data-v-459dc697><img${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", slide.title)} class="slide-img" loading="lazy" decoding="async" data-v-459dc697></div><div class="desc-wrap" data-v-459dc697><p class="desc-title" data-v-459dc697>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-459dc697>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.4s" })}" data-v-459dc697><!--[-->`);
      ssrRenderList(zhanyiSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.section2 === idx }, "pagination-bullet"])}" data-v-459dc697></div>`);
      });
      _push(`<!--]--></div><div class="description-pagination-wrap inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.5s" })}" data-v-459dc697><div class="description-list" data-v-459dc697><!--[-->`);
      ssrRenderList(zhanyiSlides.value, (slide, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.section2 === idx }, "description-item"])}" data-v-459dc697><p class="description-title" data-v-459dc697>${ssrInterpolate(slide.title)}</p></div>`);
      });
      _push(`<!--]--></div><p class="description-content" data-v-459dc697>${ssrInterpolate(zhanyiSlides.value[currentSlide.value.section2].desc)}</p></div></section><section id="section3" class="common commonMax" targetindex="0" data-v-459dc697><h3 class="title inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.3s" })}" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Soaring Sky", fr: "Ascension C\xE9leste", ar: "\u0627\u0644\u0635\u0639\u0648\u062F \u0625\u0644\u0649 \u0627\u0644\u0633\u0645\u0627\u0621" }))}</h3><div class="swiper-container" data-v-459dc697><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translateX(-${currentSlide.value.section3 * 100}%)` })}" data-v-459dc697><!--[-->`);
      ssrRenderList(qingkongSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-459dc697><div class="img-container" data-v-459dc697><img${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", slide.title)} class="slide-img" loading="lazy" decoding="async" data-v-459dc697></div><div class="desc-wrap" data-v-459dc697><p class="desc-title" data-v-459dc697>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-459dc697>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.4s" })}" data-v-459dc697><!--[-->`);
      ssrRenderList(qingkongSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.section3 === idx }, "pagination-bullet"])}" data-v-459dc697></div>`);
      });
      _push(`<!--]--></div><div class="description-pagination-wrap inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.5s" })}" data-v-459dc697><div class="description-list" data-v-459dc697><!--[-->`);
      ssrRenderList(qingkongSlides.value, (slide, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.section3 === idx }, "description-item"])}" data-v-459dc697><p class="description-title" data-v-459dc697>${ssrInterpolate(slide.title)}</p></div>`);
      });
      _push(`<!--]--></div><p class="description-content" data-v-459dc697>${ssrInterpolate(qingkongSlides.value[currentSlide.value.section3].desc)}</p></div></section><section id="section4" class="common commonMax" targetindex="0" data-v-459dc697><h3 class="title inview-child" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Unrestrained", fr: "Libert\xE9", ar: "\u0627\u0644\u062D\u0631\u064A\u0629" }))}</h3><div class="swiper-container" data-v-459dc697><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translateX(-${currentSlide.value.section4 * 100}%)` })}" data-v-459dc697><!--[-->`);
      ssrRenderList(xiaoyaoSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-459dc697><div class="img-container" data-v-459dc697><img${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", slide.title)} class="slide-img" loading="lazy" decoding="async" data-v-459dc697></div><div class="desc-wrap" data-v-459dc697><p class="desc-title" data-v-459dc697>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-459dc697>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination inview-child" data-v-459dc697><!--[-->`);
      ssrRenderList(xiaoyaoSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.section4 === idx }, "pagination-bullet"])}" data-v-459dc697></div>`);
      });
      _push(`<!--]--></div><div class="description-pagination-wrap inview-child" data-v-459dc697><div class="description-list" data-v-459dc697><!--[-->`);
      ssrRenderList(xiaoyaoSlides.value, (slide, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.section4 === idx }, "description-item"])}" data-v-459dc697><p class="description-title" data-v-459dc697>${ssrInterpolate(slide.title)}</p></div>`);
      });
      _push(`<!--]--></div><p class="description-content" data-v-459dc697>${ssrInterpolate(xiaoyaoSlides.value[currentSlide.value.section4].desc)}</p></div></section><section id="section5" class="car-color-container" code="passion-L" targetindex="0" data-v-459dc697><h3 class="title" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Oriental Luxury Colors", fr: "Couleurs de Luxe Orientales", ar: "\u0623\u0644\u0648\u0627\u0646 \u0627\u0644\u0641\u062E\u0627\u0645\u0629 \u0627\u0644\u0634\u0631\u0642\u064A\u0629" }))}</h3><div class="car-swiper-wap" data-v-459dc697><!--[-->`);
      ssrRenderList(carColors.value, (color, idx) => {
        _push(`<div class="swiper-slide" style="${ssrRenderStyle({
          transition: "none",
          left: idx === currentColor.value ? "0" : "100%",
          opacity: idx === currentColor.value ? 1 : 0
        })}" data-v-459dc697><div class="swiper-slide-item" data-v-459dc697><img${ssrRenderAttr("src", color.image)}${ssrRenderAttr("alt", color.name)} class="swiper-slide-img" loading="lazy" decoding="async" data-v-459dc697></div></div>`);
      });
      _push(`<!--]--></div><div class="car-color-list" data-v-459dc697><!--[-->`);
      ssrRenderList(carColors.value, (color, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentColor.value === idx }, "car-color-item"])}" data-v-459dc697><div class="color-icon" data-v-459dc697><img${ssrRenderAttr("src", color.icon)}${ssrRenderAttr("alt", color.name)} class="img-icon" loading="lazy" decoding="async" data-v-459dc697></div><p class="color-name" data-v-459dc697>${ssrInterpolate(color.name)}</p></div>`);
      });
      _push(`<!--]--></div></section><section id="section6" class="level-one" targetindex="0" data-v-459dc697><div class="section-bg" style="${ssrRenderStyle({ "background-image": "url('/assets/OFFICIALVOYAH/passion-L/images/sc_17.jpg')" })}" data-v-459dc697></div><div class="section-content" data-v-459dc697><h2 class="title inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.3s" })}" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Kunpeng Ambition", fr: "Ambition Kunpeng", ar: "\u0637\u0645\u0648\u062D \u0643\u0648\u0646 \u0628\u064A\u0646\u063A" }))}</h2><p class="subTitle inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.4s" })}" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Elegant Oriental Interior", fr: "Int\xE9rieur Oriental \xC9l\xE9gant", ar: "\u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0634\u0631\u0642\u064A\u0629 \u0627\u0644\u0623\u0646\u064A\u0642\u0629" }))}</p></div></section><section class="common commonMax" data-v-459dc697><h3 class="title inview-child inview-animated" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Cloud Piercing", fr: "Percer les Nuages", ar: "\u0627\u062E\u062A\u0631\u0627\u0642 \u0627\u0644\u0633\u062D\u0627\u0628" }))}</h3><div class="swiper-container" data-v-459dc697><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translateX(-${currentSlide.value.interior * 100}%)` })}" data-v-459dc697><!--[-->`);
      ssrRenderList(interiorSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-459dc697><div class="img-container" data-v-459dc697><img${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", slide.title)} class="slide-img" loading="lazy" decoding="async" data-v-459dc697></div><div class="desc-wrap" data-v-459dc697><p class="desc-title" data-v-459dc697>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-459dc697>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination inview-child inview-animated" data-v-459dc697><!--[-->`);
      ssrRenderList(interiorSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.interior === idx }, "pagination-bullet"])}" data-v-459dc697></div>`);
      });
      _push(`<!--]--></div><div class="description-pagination-wrap inview-child inview-animated" data-v-459dc697><div class="description-list" data-v-459dc697><!--[-->`);
      ssrRenderList(interiorSlides.value, (slide, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.interior === idx }, "description-item"])}" data-v-459dc697><p class="description-title" data-v-459dc697>${ssrInterpolate(slide.title)}</p></div>`);
      });
      _push(`<!--]--></div><p class="description-content" data-v-459dc697>${ssrInterpolate(interiorSlides.value[currentSlide.value.interior].desc)}</p></div></section><section id="section7" class="level-one" targetindex="0" data-v-459dc697><div class="section-bg" style="${ssrRenderStyle({ "background-image": "url('/assets/OFFICIALVOYAH/passion-L/images/sc_25.jpg')" })}" data-v-459dc697></div><div class="section-content" data-v-459dc697><h2 class="title inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.3s" })}" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "HarmonySpace Cockpit", fr: "Cockpit HarmonySpace", ar: "\u0645\u0642\u0635\u0648\u0631\u0629 \u0647\u0627\u0631\u0645\u0648\u0646\u064A \u0633\u0628\u064A\u0633" }))}</h2><p class="subTitle inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.4s" })}" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "New Human-Vehicle Interaction", fr: "Nouvelle Interaction Homme-V\xE9hicule", ar: "\u062A\u0641\u0627\u0639\u0644 \u062C\u062F\u064A\u062F \u0628\u064A\u0646 \u0627\u0644\u0625\u0646\u0633\u0627\u0646 \u0648\u0627\u0644\u0645\u0631\u0643\u0628\u0629" }))}</p></div></section><section class="common" data-v-459dc697><h3 class="title inview-child" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "HarmonySpace Smart Cockpit", fr: "Cockpit Intelligent HarmonySpace", ar: "\u0645\u0642\u0635\u0648\u0631\u0629 \u0647\u0627\u0631\u0645\u0648\u0646\u064A \u0633\u0628\u064A\u0633 \u0627\u0644\u0630\u0643\u064A\u0629" }))}</h3><div class="single-img-container inview-child" data-v-459dc697><img src="https://www.voyah.com.cn/voyah-resources/images/car/passion-L/1920/sc_26.jpg" alt="HarmonySpace" class="single-img" data-v-459dc697></div><div class="single-description inview-child" data-v-459dc697><div class="description-item" data-v-459dc697><p class="description-title" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "15.6-inch Smart Screen", fr: "\xC9cran Intelligent 15.6 pouces", ar: "\u0634\u0627\u0634\u0629 \u0630\u0643\u064A\u0629 15.6 \u0628\u0648\u0635\u0629" }))}</p><p class="description-content" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "2K HD resolution, HarmonyOS ecosystem, full-scene smart connectivity", fr: "R\xE9solution 2K, \xE9cosyst\xE8me HarmonyOS, connectivit\xE9 intelligente", ar: "\u062F\u0642\u0629 2K\u060C \u0646\u0638\u0627\u0645 \u0647\u0627\u0631\u0645\u0648\u0646\u064A\u060C \u0627\u062A\u0635\u0627\u0644 \u0630\u0643\u064A" }))}</p></div></div></section><section class="common commonMax" data-v-459dc697><h3 class="title inview-child" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Huawei Qiankun ADS 3.0", fr: "Huawei Qiankun ADS 3.0", ar: "\u0647\u0648\u0627\u0648\u064A \u0643\u064A\u0627\u0646\u0643\u0648\u0646 ADS 3.0" }))}</h3><div class="swiper-container" data-v-459dc697><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translateX(-${currentSlide.value.ads * 100}%)` })}" data-v-459dc697><!--[-->`);
      ssrRenderList(adsSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-459dc697><div class="img-container" data-v-459dc697><img${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", slide.title)} class="slide-img" loading="lazy" decoding="async" data-v-459dc697></div><div class="desc-wrap" data-v-459dc697><p class="desc-title" data-v-459dc697>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-459dc697>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination inview-child" data-v-459dc697><!--[-->`);
      ssrRenderList(adsSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.ads === idx }, "pagination-bullet"])}" data-v-459dc697></div>`);
      });
      _push(`<!--]--></div><div class="description-pagination-wrap inview-child" data-v-459dc697><div class="description-list" data-v-459dc697><!--[-->`);
      ssrRenderList(adsSlides.value, (slide, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.ads === idx }, "description-item"])}" data-v-459dc697><p class="description-title" data-v-459dc697>${ssrInterpolate(slide.title)}</p></div>`);
      });
      _push(`<!--]--></div><p class="description-content" data-v-459dc697>${ssrInterpolate(adsSlides.value[currentSlide.value.ads].desc)}</p></div></section><section class="common" data-v-459dc697><h3 class="title inview-child" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "CAS 4.0 Collision Avoidance", fr: "Syst\xE8me Anti-Collision CAS 4.0", ar: "\u0646\u0638\u0627\u0645 \u062A\u062C\u0646\u0628 \u0627\u0644\u0627\u0635\u0637\u062F\u0627\u0645 CAS 4.0" }))}</h3><div class="single-img-container inview-child" data-v-459dc697><img src="https://www.voyah.com.cn/voyah-resources/images/car/passion-L/1920/sc_30.jpg" alt="Safety" class="single-img" data-v-459dc697></div><div class="single-description inview-child features-grid" data-v-459dc697><div class="description-item" data-v-459dc697><p class="description-title" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "AEB Active Safety", fr: "S\xE9curit\xE9 Active AEB", ar: "\u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0646\u0634\u0637\u0629 AEB" }))}</p><p class="description-content" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Active braking at 130km/h", fr: "Freinage actif \xE0 130km/h", ar: "\u0627\u0644\u0641\u0631\u0645\u0644\u0629 \u0627\u0644\u0646\u0634\u0637\u0629 \u0639\u0646\u062F 130 \u0643\u0645/\u0633" }))}</p></div><div class="description-item" data-v-459dc697><p class="description-title" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "RAEB Rear Emergency Braking", fr: "Freinage d'Urgence Arri\xE8re RAEB", ar: "\u0627\u0644\u0641\u0631\u0645\u0644\u0629 \u0627\u0644\u0637\u0627\u0631\u0626\u0629 \u0627\u0644\u062E\u0644\u0641\u064A\u0629 RAEB" }))}</p><p class="description-content" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Rear braking 0-30km/h", fr: "Freinage arri\xE8re 0-30km/h", ar: "\u0627\u0644\u0641\u0631\u0645\u0644\u0629 \u0627\u0644\u062E\u0644\u0641\u064A\u0629 0-30 \u0643\u0645/\u0633" }))}</p></div><div class="description-item" data-v-459dc697><p class="description-title" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "LOCP Side Obstacle Avoidance", fr: "\xC9vitement Lat\xE9ral LOCP", ar: "\u062A\u062C\u0646\u0628 \u0627\u0644\u0639\u0642\u0628\u0627\u062A \u0627\u0644\u062C\u0627\u0646\u0628\u064A\u0629 LOCP" }))}</p><p class="description-content" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Side collision avoidance 40-120km/h with active evasion", fr: "\xC9vitement lat\xE9ral 40-120km/h avec \xE9vasion active", ar: "\u062A\u062C\u0646\u0628 \u0627\u0644\u0627\u0635\u0637\u062F\u0627\u0645 \u0627\u0644\u062C\u0627\u0646\u0628\u064A 40-120 \u0643\u0645/\u0633" }))}</p></div><div class="description-item" data-v-459dc697><p class="description-title" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "eAES Enhanced Emergency Steering", fr: "Direction d'Urgence eAES", ar: "\u0627\u0644\u062A\u0648\u062C\u064A\u0647 \u0627\u0644\u0637\u0627\u0631\u0626 eAES" }))}</p><p class="description-content" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Coordinated braking & steering 50-135km/h", fr: "Freinage et direction coordonn\xE9s 50-135km/h", ar: "\u0641\u0631\u0645\u0644\u0629 \u0648\u062A\u0648\u062C\u064A\u0647 \u0645\u062A\u0646\u0627\u0633\u0642\u0627\u0646 50-135 \u0643\u0645/\u0633" }))}</p></div></div></section><section id="section8" class="level-one" data-v-459dc697><div class="section-bg" style="${ssrRenderStyle({ "background-image": "url('/assets/OFFICIALVOYAH/passion-L/images/sc_31.jpg')" })}" data-v-459dc697></div><div class="section-content" data-v-459dc697><h2 class="title inview-child inview-animated" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "800V Voyah Hybrid", fr: "Hybride Voyah 800V", ar: "\u0647\u062C\u064A\u0646 \u0641\u0648\u064A\u0627\u062C 800V" }))}</h2><p class="subTitle inview-child inview-animated" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "410km range, boundless world", fr: "410km d'autonomie, monde sans limites", ar: "\u0645\u062F\u0649 410 \u0643\u0645\u060C \u0639\u0627\u0644\u0645 \u0628\u0644\u0627 \u062D\u062F\u0648\u062F" }))}</p></div></section><section class="common" data-v-459dc697><h3 class="title inview-child" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "5C Super Fast Charging", fr: "Recharge Ultra-Rapide 5C", ar: "\u0634\u062D\u0646 \u0633\u0631\u064A\u0639 5C" }))}</h3><div class="single-img-container inview-child" data-v-459dc697><img src="https://www.voyah.com.cn/voyah-resources/images/car/passion-L/1920/sc_33.jpg" alt="Charging" class="single-img" data-v-459dc697></div><div class="single-description inview-child" data-v-459dc697><div class="description-item" data-v-459dc697><p class="description-title" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Hybrid Super-Charging Battery", fr: "Batterie Super-Recharge Hybride", ar: "\u0628\u0637\u0627\u0631\u064A\u0629 \u0627\u0644\u0634\u062D\u0646 \u0627\u0644\u0633\u0631\u064A\u0639 \u0627\u0644\u0647\u062C\u064A\u0646\u0629" }))}</p><p class="description-content" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "800V 5C fast charging, 20%-80% in just 12 minutes", fr: "Recharge rapide 800V 5C, 20%-80% en seulement 12 minutes", ar: "\u0634\u062D\u0646 \u0633\u0631\u064A\u0639 800V 5C\u060C 20%-80% \u0641\u064A 12 \u062F\u0642\u064A\u0642\u0629 \u0641\u0642\u0637" }))}</p></div></div></section><section class="common commonMax" data-v-459dc697><h3 class="title inview-child" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "915N\xB7m Power, Boundless Limits", fr: "915N\xB7m de Puissance, Limites Infinies", ar: "\u0642\u0648\u0629 915 \u0646\u064A\u0648\u062A\u0646 \u0645\u062A\u0631\u060C \u062D\u062F\u0648\u062F \u0628\u0644\u0627 \u062D\u062F\u0648\u062F" }))}</h3><div class="swiper-container" data-v-459dc697><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translateX(-${currentSlide.value.power * 100}%)` })}" data-v-459dc697><!--[-->`);
      ssrRenderList(powerSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-459dc697><div class="img-container" data-v-459dc697><img${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", slide.title)} class="slide-img" loading="lazy" decoding="async" data-v-459dc697></div><div class="desc-wrap" data-v-459dc697><p class="desc-title" data-v-459dc697>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-459dc697>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination inview-child" data-v-459dc697><!--[-->`);
      ssrRenderList(powerSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.power === idx }, "pagination-bullet"])}" data-v-459dc697></div>`);
      });
      _push(`<!--]--></div><div class="description-pagination-wrap inview-child" data-v-459dc697><div class="description-list" data-v-459dc697><!--[-->`);
      ssrRenderList(powerSlides.value, (slide, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.power === idx }, "description-item"])}" data-v-459dc697><p class="description-title" data-v-459dc697>${ssrInterpolate(slide.title)}</p></div>`);
      });
      _push(`<!--]--></div><p class="description-content" data-v-459dc697>${ssrInterpolate(powerSlides.value[currentSlide.value.power].desc)}</p></div></section><section class="level-one" data-v-459dc697><div class="section-bg" style="${ssrRenderStyle({ "background-image": "url('/assets/OFFICIALVOYAH/passion-L/images/sc_35.jpg')" })}" data-v-459dc697></div><div class="section-content" data-v-459dc697><h2 class="title inview-child inview-animated" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Stable Journey, Cloud View", fr: "Voyage Stable, Vue sur les Nuages", ar: "\u0631\u062D\u0644\u0629 \u0645\u0633\u062A\u0642\u0631\u0629\u060C \u0625\u0637\u0644\u0627\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u0633\u062D\u0627\u0628" }))}</h2><p class="subTitle inview-child inview-animated" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Magic Carpet Chassis, Perfect Balance", fr: "Ch\xE2ssis Tapis Magique, \xC9quilibre Parfait", ar: "\u0647\u064A\u0643\u0644 \u0627\u0644\u0633\u062C\u0627\u062F\u0629 \u0627\u0644\u0633\u062D\u0631\u064A\u0629\u060C \u062A\u0648\u0627\u0632\u0646 \u0645\u062B\u0627\u0644\u064A" }))}</p></div></section><section class="common" data-v-459dc697><div class="single-img-container inview-child" data-v-459dc697><img${ssrRenderAttr("src", _imports_2$7)} alt="Chassis" class="single-img" data-v-459dc697></div><div class="single-description inview-child features-grid" data-v-459dc697><div class="description-item" data-v-459dc697><p class="description-title" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Magic Carpet + CDC", fr: "Tapis Magique + CDC", ar: "\u0627\u0644\u0633\u062C\u0627\u062F\u0629 \u0627\u0644\u0633\u062D\u0631\u064A\u0629 + CDC" }))}</p><p class="description-content" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Bump-free private cabin experience", fr: "Cabine priv\xE9e sans \xE0-coups", ar: "\u0645\u0642\u0635\u0648\u0631\u0629 \u062E\u0627\u0635\u0629 \u062E\u0627\u0644\u064A\u0629 \u0645\u0646 \u0627\u0644\u0627\u0631\u062A\u062C\u0627\u062C\u0627\u062A" }))}</p></div><div class="description-item" data-v-459dc697><p class="description-title" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "65mm Adjustable Air Suspension", fr: "Suspension Pneumatique R\xE9glable 65mm", ar: "\u062A\u0639\u0644\u064A\u0642 \u0647\u0648\u0627\u0626\u064A \u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u0639\u062F\u064A\u0644 65 \u0645\u0645" }))}</p><p class="description-content" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Smoother ride, better road capability", fr: "Conduite plus douce, meilleure capacit\xE9 routi\xE8re", ar: "\u0642\u064A\u0627\u062F\u0629 \u0623\u0643\u062B\u0631 \u0633\u0644\u0627\u0633\u0629\u060C \u0642\u062F\u0631\u0629 \u0637\u0631\u0642 \u0623\u0641\u0636\u0644" }))}</p></div><div class="description-item" data-v-459dc697><p class="description-title" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Double Wishbone + 5-Link", fr: "Double Triangle + 5-Bras", ar: "\u0645\u0632\u062F\u0648\u062C \u0627\u0644\u0645\u062B\u0644\u062B + 5 \u0630\u0631\u0627\u0639" }))}</p><p class="description-content" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Superior stability, corners like flat ground", fr: "Stabilit\xE9 sup\xE9rieure, virages comme sur du plat", ar: "\u0627\u0633\u062A\u0642\u0631\u0627\u0631 \u0641\u0627\u0626\u0642\u060C \u0645\u0646\u0639\u0637\u0641\u0627\u062A \u0643\u0627\u0644\u0633\u0637\u062D \u0627\u0644\u0645\u0633\u0637\u062D" }))}</p></div><div class="description-item" data-v-459dc697><p class="description-title" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "All-Aluminum Chassis", fr: "Ch\xE2ssis Tout-Aluminium", ar: "\u0647\u064A\u0643\u0644 \u0643\u0627\u0645\u0644 \u0645\u0646 \u0627\u0644\u0623\u0644\u0645\u0646\u064A\u0648\u0645" }))}</p><p class="description-content" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Premium road feedback, lighter driving", fr: "Retour de route premium, conduite plus l\xE9g\xE8re", ar: "\u062A\u063A\u0630\u064A\u0629 \u0645\u0631\u062A\u062C\u0639\u0629 \u0645\u062A\u0645\u064A\u0632\u0629\u060C \u0642\u064A\u0627\u062F\u0629 \u0623\u062E\u0641" }))}</p></div></div></section><section class="common commonMax" data-v-459dc697><h3 class="title inview-child" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Smooth Precise Control", fr: "Contr\xF4le Pr\xE9cis et Doux", ar: "\u062A\u062D\u0643\u0645 \u062F\u0642\u064A\u0642 \u0648\u0633\u0644\u0633" }))}</h3><div class="swiper-container" data-v-459dc697><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translateX(-${currentSlide.value.chassis * 100}%)` })}" data-v-459dc697><!--[-->`);
      ssrRenderList(chassisSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-459dc697><div class="img-container" data-v-459dc697><img${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", slide.title)} class="slide-img" loading="lazy" decoding="async" data-v-459dc697></div><div class="desc-wrap" data-v-459dc697><p class="desc-title" data-v-459dc697>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-459dc697>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination inview-child" data-v-459dc697><!--[-->`);
      ssrRenderList(chassisSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.chassis === idx }, "pagination-bullet"])}" data-v-459dc697></div>`);
      });
      _push(`<!--]--></div><div class="description-pagination-wrap inview-child" data-v-459dc697><div class="description-list" data-v-459dc697><!--[-->`);
      ssrRenderList(chassisSlides.value, (slide, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.chassis === idx }, "description-item"])}" data-v-459dc697><p class="description-title" data-v-459dc697>${ssrInterpolate(slide.title)}</p></div>`);
      });
      _push(`<!--]--></div><p class="description-content" data-v-459dc697>${ssrInterpolate(chassisSlides.value[currentSlide.value.chassis].desc)}</p></div></section><section class="level-one" data-v-459dc697><div class="section-bg" style="${ssrRenderStyle({ "background-image": "url('/assets/OFFICIALVOYAH/passion-L/images/sc_39.jpg')" })}" data-v-459dc697></div><div class="section-content" data-v-459dc697><h2 class="title inview-child inview-animated" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "All-Round Protection", fr: "Protection Totale", ar: "\u062D\u0645\u0627\u064A\u0629 \u0634\u0627\u0645\u0644\u0629" }))}</h2></div></section><section class="common" data-v-459dc697><h3 class="title inview-child" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Solid Passive Protection", fr: "Protection Passive Solide", ar: "\u062D\u0645\u0627\u064A\u0629 \u0633\u0644\u0628\u064A\u0629 \u0635\u0644\u0628\u0629" }))}</h3><div class="single-img-container inview-child" data-v-459dc697><img${ssrRenderAttr("src", _imports_3$7)} alt="Passive Safety" class="single-img" data-v-459dc697></div><div class="single-description inview-child" data-v-459dc697><div class="description-item" data-v-459dc697><p class="description-title" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "2000MPa Body Structure", fr: "Structure Carrosserie 2000MPa", ar: "\u0647\u064A\u0643\u0644 \u0627\u0644\u0633\u064A\u0627\u0631\u0629 2000 \u0645\u064A\u062C\u0627 \u0628\u0627\u0633\u0643\u0627\u0644" }))}</p><p class="description-content" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "World-first 2000MPa hot-formed laser-welded door ring", fr: "Premi\xE8re mondiale: anneau de porte 2000MPa soud\xE9 au laser", ar: "\u0627\u0644\u0623\u0648\u0644 \u0639\u0627\u0644\u0645\u064A\u0627\u064B: \u062D\u0644\u0642\u0629 \u0628\u0627\u0628 2000 \u0645\u064A\u062C\u0627 \u0628\u0627\u0633\u0643\u0627\u0644 \u0645\u0644\u062D\u0648\u0645\u0629 \u0628\u0627\u0644\u0644\u064A\u0632\u0631" }))}</p></div><div class="description-item" data-v-459dc697><p class="description-title" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "5-Star+ Safety Standard", fr: "Standard S\xE9curit\xE9 5 \xC9toiles+", ar: "\u0645\u0639\u064A\u0627\u0631 \u0627\u0644\u0633\u0644\u0627\u0645\u0629 5 \u0646\u062C\u0648\u0645+" }))}</p><p class="description-content" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Top scores in C-IASI crash tests", fr: "Meilleurs scores aux tests de collision C-IASI", ar: "\u0623\u0639\u0644\u0649 \u0627\u0644\u062F\u0631\u062C\u0627\u062A \u0641\u064A \u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u0635\u0627\u062F\u0645 C-IASI" }))}</p></div></div></section><div class="${ssrRenderClass([{ visible: showBottomBar.value }, "car-nav-wrap-bottom"])}" data-v-459dc697><div class="car-nav-wrap-bottom-inner" data-v-459dc697><div class="button-config" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "View All Configs", fr: "Voir Toutes les Configs", ar: "\u0639\u0631\u0636 \u062C\u0645\u064A\u0639 \u0627\u0644\u062A\u0643\u0648\u064A\u0646\u0627\u062A" }))}</div><div class="button-order" data-v-459dc697>${ssrInterpolate(unref(textFor)({ en: "Order Now", fr: "Commander", ar: "\u0627\u0637\u0644\u0628 \u0627\u0644\u0622\u0646" }))}</div></div></div></div>`);
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vehicles/passion/PassionLPage.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const PassionLPage = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-459dc697"]]);
const _imports_0$d = publicAssetsURL("/assets/OFFICIALVOYAH/titan/images/sc_1.jpg");
const _imports_1$a = publicAssetsURL("/assets/OFFICIALVOYAH/titan/images/482a7b36-c15e-4508-83e5-c9b79227dbfa1770619361896.png");
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "TitanPage",
  __ssrInlineRender: true,
  setup(__props) {
    const { textFor, buildPath } = useSiteContent();
    const t2 = (en, fr, ar) => ({ en, fr, ar });
    const chapterLinks = computed(() => [
      { id: "hero", label: textFor(t2("Overview", "Apercu", "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629")) },
      { id: "chapter-1", label: textFor(t2("Luxury", "Luxe", "\u0641\u062E\u0627\u0645\u0629")) },
      { id: "chapter-2", label: textFor(t2("Intelligence", "Intelligence", "\u0630\u0643\u0627\u0621")) },
      { id: "chapter-3", label: textFor(t2("Performance", "Performance", "\u0623\u062F\u0627\u0621")) },
      { id: "chapter-4", label: textFor(t2("Safety", "Securite", "\u0633\u0644\u0627\u0645\u0629")) }
    ]);
    const mediaSections = computed(() => {
      const sections = [
        {
          id: "chapter-1",
          kicker: t2("01 Luxury", "01 Luxe", "01 \u0627\u0644\u0641\u062E\u0627\u0645\u0629"),
          title: t2("Flagship Luxury", "Luxe Phare", "\u0627\u0644\u0641\u062E\u0627\u0645\u0629 \u0627\u0644\u0631\u0627\u0626\u062F\u0629"),
          summary: t2(
            "Titan opens with ceremonial full-size SUV proportions, a six-seat flagship posture, and a lounge-grade cabin tone shaped for premium family travel.",
            "Titan souvre avec des proportions de grand SUV ceremonielles, une posture phare a six places et une tonalite dhabitacle de niveau lounge pensee pour le voyage familial premium.",
            "\u062A\u0628\u062F\u0623 Titan \u0628\u062A\u0646\u0627\u0633\u0628\u0627\u062A SUV \u0643\u0628\u064A\u0631\u0629 \u0628\u0637\u0627\u0628\u0639 \u0627\u062D\u062A\u0641\u0627\u0644\u064A\u060C \u0648\u0648\u0636\u0639\u064A\u0629 \u0631\u0627\u0626\u062F\u0629 \u0628\u0633\u062A\u0629 \u0645\u0642\u0627\u0639\u062F\u060C \u0648\u0646\u0628\u0631\u0629 \u0645\u0642\u0635\u0648\u0631\u0629 \u0641\u0627\u062E\u0631\u0629 \u0628\u0637\u0627\u0628\u0639 \u0627\u0644\u0635\u0627\u0644\u0648\u0646 \u0645\u0647\u064A\u0623\u0629 \u0644\u0644\u0633\u0641\u0631 \u0627\u0644\u0639\u0627\u0626\u0644\u064A \u0627\u0644\u0631\u0627\u0642\u064A."
          ),
          images: [
            "/assets/OFFICIALVOYAH/titan/images/sc_2.jpg",
            "/assets/OFFICIALVOYAH/titan/images/sc_3.jpg",
            "/assets/OFFICIALVOYAH/titan/images/sc_4_1.jpg",
            "/assets/OFFICIALVOYAH/titan/images/sc_4_2.jpg",
            "/assets/OFFICIALVOYAH/titan/images/sc_6_1.jpg",
            "/assets/OFFICIALVOYAH/titan/images/sc_7_1.jpg",
            "/assets/OFFICIALVOYAH/titan/images/sc_8_1.jpg",
            "/assets/OFFICIALVOYAH/titan/images/sc_9.jpg"
          ]
        },
        {
          id: "chapter-2",
          kicker: t2("02 Intelligence", "02 Intelligence", "02 \u0627\u0644\u0630\u0643\u0627\u0621"),
          title: t2("Flagship Intelligence", "Intelligence Phare", "\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0631\u0627\u0626\u062F"),
          summary: t2(
            "A digital Harmony-era cockpit, Huawei-assisted driving confidence, and premium in-cabin sound stage define Titans flagship intelligence chapter.",
            "Un cockpit numerique de lere Harmony, une confiance de conduite assistee Huawei et une scene sonore premium a bord definissent le chapitre dintelligence phare de Titan.",
            "\u062A\u062D\u062F\u062F \u0645\u0642\u0635\u0648\u0631\u0629 \u0631\u0642\u0645\u064A\u0629 \u0645\u0646 \u062C\u064A\u0644 Harmony \u0648\u062B\u0642\u0629 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0645\u0646 Huawei \u0648\u0645\u0634\u0647\u062F \u0627\u0644\u0635\u0648\u062A \u0627\u0644\u0641\u0627\u062E\u0631 \u062F\u0627\u062E\u0644 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0641\u0635\u0644 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0631\u0627\u0626\u062F \u0641\u064A Titan."
          ),
          images: [
            "/assets/OFFICIALVOYAH/titan/images/sc_20.jpg",
            "/assets/OFFICIALVOYAH/titan/images/sc_21.jpg",
            "/assets/OFFICIALVOYAH/titan/images/sc_22.jpg",
            "/assets/OFFICIALVOYAH/titan/images/sc_23.jpg",
            "/assets/OFFICIALVOYAH/titan/images/sc_11.jpg",
            "/assets/OFFICIALVOYAH/titan/images/sc_13_1.jpg"
          ],
          videos: ["/voyah-resources/images/car/titan/video_01.mp4"]
        },
        {
          id: "chapter-3",
          kicker: t2("03 Performance", "03 Performance", "03 \u0627\u0644\u0623\u062F\u0627\u0621"),
          title: t2("Flagship Performance", "Performance Phare", "\u0627\u0644\u0623\u062F\u0627\u0621 \u0627\u0644\u0631\u0627\u0626\u062F"),
          summary: t2(
            "A million-class comfort chassis, strong road-to-road capability, and long-range composure shape Titan into a calm yet forceful flagship SUV.",
            "Un chassis confort de classe million, de solides capacites multi-usage et une grande serenite dautonomie faconnent Titan en SUV phare a la fois calme et affirme.",
            "\u064A\u0634\u0643\u0644 \u0647\u064A\u0643\u0644 \u0631\u0627\u062D\u0629 \u0645\u0646 \u0641\u0626\u0629 \u0627\u0644\u0645\u0644\u064A\u0648\u0646 \u0648\u0642\u062F\u0631\u0627\u062A \u0642\u0648\u064A\u0629 \u0639\u0644\u0649 \u0645\u062E\u062A\u0644\u0641 \u0627\u0644\u0637\u0631\u0642 \u0648\u062B\u0628\u0627\u062A \u0645\u062F\u0649 \u0637\u0648\u064A\u0644 Titan \u0643\u0633\u064A\u0627\u0631\u0629 SUV \u0631\u0627\u0626\u062F\u0629 \u0647\u0627\u062F\u0626\u0629 \u0644\u0643\u0646\u0647\u0627 \u0642\u0648\u064A\u0629 \u0627\u0644\u062D\u0636\u0648\u0631."
          ),
          images: [
            "/assets/OFFICIALVOYAH/titan/images/sc_25.jpg",
            "/assets/OFFICIALVOYAH/titan/images/sc_27_1.jpg",
            "/assets/OFFICIALVOYAH/titan/images/sc_28.jpg",
            "/assets/OFFICIALVOYAH/titan/images/sc_29.jpg",
            "/assets/OFFICIALVOYAH/titan/images/sc_30.jpg",
            "/assets/OFFICIALVOYAH/titan/images/sc_31.jpg"
          ],
          videos: ["/voyah-resources/images/car/titan/video_04.mp4"]
        },
        {
          id: "chapter-4",
          kicker: t2("04 Safety", "04 Securite", "04 \u0627\u0644\u0633\u0644\u0627\u0645\u0629"),
          title: t2("Flagship Safety", "Securite Phare", "\u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0631\u0627\u0626\u062F\u0629"),
          summary: t2(
            "Reinforced body architecture, layered battery shielding, and full-cabin occupant protection complete Titan with flagship-level family security assurance.",
            "Une architecture de caisse renforcee, une protection batterie multicouche et une protection complete des occupants finalisent Titan avec une assurance de securite familiale de niveau phare.",
            "\u062A\u064F\u0643\u0645\u0644 \u0628\u0646\u064A\u0629 \u0627\u0644\u0647\u064A\u0643\u0644 \u0627\u0644\u0645\u0639\u0632\u0632\u0629 \u0648\u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629 \u0645\u062A\u0639\u062F\u062F\u0629 \u0627\u0644\u0637\u0628\u0642\u0627\u062A \u0648\u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0631\u0643\u0627\u0628 \u0627\u0644\u0634\u0627\u0645\u0644\u0629 Titan \u0628\u062B\u0642\u0629 \u0633\u0644\u0627\u0645\u0629 \u0639\u0627\u0626\u0644\u064A\u0629 \u0639\u0644\u0649 \u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0637\u0631\u0627\u0632\u0627\u062A \u0627\u0644\u0631\u0627\u0626\u062F\u0629."
          ),
          images: [
            "/assets/OFFICIALVOYAH/titan/images/sc_32.jpg",
            "/assets/OFFICIALVOYAH/titan/images/sc_33_1.jpg",
            "/assets/OFFICIALVOYAH/titan/images/sc_33_2.jpg",
            "/assets/OFFICIALVOYAH/titan/images/sc_34_1.jpg",
            "/assets/OFFICIALVOYAH/titan/images/sc_35_1.jpg",
            "/assets/OFFICIALVOYAH/titan/images/sc_35_2.jpg"
          ]
        }
      ];
      return sections.map((section) => ({
        id: section.id,
        kicker: section.kicker ? textFor(section.kicker) : void 0,
        title: textFor(section.title),
        summary: textFor(section.summary),
        image: section.images[0],
        images: section.images,
        videos: section.videos,
        details: [
          { title: textFor(section.title), summary: textFor(section.summary) }
        ],
        kind: section.images.length > 3 ? "carousel" : "image",
        slides: section.images.map((img, idx) => {
          var _a;
          return {
            image: img,
            title: textFor(section.title),
            summary: textFor(section.summary),
            video: idx === 0 ? (_a = section.videos) == null ? void 0 : _a[0] : void 0
          };
        })
      }));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "titan-page" }, _attrs))} data-v-00c0eabd><section class="titan-hero" id="hero" data-v-00c0eabd><div class="titan-hero-bg" data-v-00c0eabd><img${ssrRenderAttr("src", _imports_0$d)} alt="Voyah Titan" class="titan-hero-image" loading="eager" fetchpriority="high" decoding="async" data-v-00c0eabd><div class="titan-hero-overlay" data-v-00c0eabd></div></div><div class="titan-hero-content" data-v-00c0eabd><div class="titan-hero-inner" data-v-00c0eabd><img${ssrRenderAttr("src", _imports_1$a)} alt="Voyah Titan" class="titan-hero-logo inview-animated" loading="eager" fetchpriority="high" decoding="async" data-v-00c0eabd><p class="titan-hero-slogan inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.1s" })}" data-v-00c0eabd>${ssrInterpolate(unref(textFor)(t2("New-era flagship six-seat SUV", "SUV phare a six places de nouvelle generation", "\u0633\u064A\u0627\u0631\u0629 SUV \u0631\u0627\u0626\u062F\u0629 \u0628\u0633\u062A\u0629 \u0645\u0642\u0627\u0639\u062F \u0645\u0646 \u0627\u0644\u062C\u064A\u0644 \u0627\u0644\u062C\u062F\u064A\u062F")))}</p><div class="titan-hero-price inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.2s" })}" data-v-00c0eabd>${ssrInterpolate(unref(textFor)(t2("Starting from RMB 379,900", "A partir de 379 900 RMB", "\u0627\u0644\u0633\u0639\u0631 \u064A\u0628\u062F\u0623 \u0645\u0646 379,900 \u064A\u0648\u0627\u0646")))}</div><div class="titan-hero-actions inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.3s" })}" data-v-00c0eabd>`);
      _push(ssrRenderComponent(_sfc_main$1$1, {
        to: unref(buildPath)("book-drive.html"),
        variant: "primary",
        class: "titan-btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(textFor)(t2("Book test drive", "Reserver un essai", "\u062D\u062C\u0632 \u062A\u062C\u0631\u0628\u0629 \u0642\u064A\u0627\u062F\u0629")))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(textFor)(t2("Book test drive", "Reserver un essai", "\u062D\u062C\u0632 \u062A\u062C\u0631\u0628\u0629 \u0642\u064A\u0627\u062F\u0629"))), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1$1, {
        to: unref(buildPath)("store.html"),
        variant: "secondary",
        class: "titan-btn-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(textFor)(t2("Order now", "Commander maintenant", "\u0627\u0637\u0644\u0628 \u0627\u0644\u0622\u0646")))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(textFor)(t2("Order now", "Commander maintenant", "\u0627\u0637\u0644\u0628 \u0627\u0644\u0622\u0646"))), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section>`);
      _push(ssrRenderComponent(ModelChapterNav, {
        sections: chapterLinks.value,
        variant: "titan"
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(mediaSections.value, (section, index) => {
        _push(ssrRenderComponent(ModelMediaSection, {
          key: section.id,
          index,
          section,
          "model-slug": "titan.html"
        }, null, _parent));
      });
      _push(`<!--]--><section class="titan-cta" data-v-00c0eabd><div class="titan-cta-content" data-v-00c0eabd><h2 class="titan-cta-title" data-v-00c0eabd>${ssrInterpolate(unref(textFor)(t2("Experience Voyah Titan", "Decouvrez le Voyah Titan", "\u062C\u0631\u0628 Voyah Titan")))}</h2><p class="titan-cta-subtitle" data-v-00c0eabd>${ssrInterpolate(unref(textFor)(t2("Book a test drive today", "Reservez un essai aujourdhui", "\u0627\u062D\u062C\u0632 \u062A\u062C\u0631\u0628\u0629 \u0642\u064A\u0627\u062F\u0629 \u0627\u0644\u064A\u0648\u0645")))}</p><div class="titan-cta-actions" data-v-00c0eabd>`);
      _push(ssrRenderComponent(_sfc_main$1$1, {
        to: unref(buildPath)("book-drive.html"),
        variant: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(textFor)(t2("Book test drive", "Reserver un essai", "\u062D\u062C\u0632 \u062A\u062C\u0631\u0628\u0629 \u0642\u064A\u0627\u062F\u0629")))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(textFor)(t2("Book test drive", "Reserver un essai", "\u062D\u062C\u0632 \u062A\u062C\u0631\u0628\u0629 \u0642\u064A\u0627\u062F\u0629"))), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1$1, {
        to: unref(buildPath)("store.html"),
        variant: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(textFor)(t2("Find a store", "Trouver un magasin", "\u0627\u0628\u062D\u062B \u0639\u0646 \u0645\u062A\u062C\u0631")))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(textFor)(t2("Find a store", "Trouver un magasin", "\u0627\u0628\u062D\u062B \u0639\u0646 \u0645\u062A\u062C\u0631"))), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div>`);
    };
  }
});
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vehicles/titan/TitanPage.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const TitanPage = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-00c0eabd"]]);
const _imports_0$c = publicAssetsURL("/assets/OFFICIALVOYAH/titanblackediditon/images/sc_1.jpg");
const _imports_1$9 = publicAssetsURL("/assets/OFFICIALVOYAH/titanblackediditon/images/2d3ebdb7-6f35-4bfd-b929-d858d5cb3a351773729769599.png");
const _imports_2$6 = publicAssetsURL("/assets/OFFICIALVOYAH/titanblackediditon/images/sc_16_1.jpg");
const _imports_3$6 = publicAssetsURL("/assets/OFFICIALVOYAH/titanblackediditon/images/sc_22_1.jpg");
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "TitanBlackEditionPage",
  __ssrInlineRender: true,
  setup(__props) {
    const { textFor, buildPath } = useSiteContent();
    const t2 = (en, fr, ar) => ({ en, fr, ar });
    const heroSlogan = t2("Black ink reveals Mount Tai, vision determines the universe", "L'encre noire r\xE9v\xE8le le Mont Tai, la vision d\xE9termine l'univers", "\u0627\u0644\u062D\u0628\u0631 \u0627\u0644\u0623\u0633\u0648\u062F \u064A\u0643\u0634\u0641 \u062C\u0628\u0644 \u0627\u0644\u0637\u0627\u0626\u0634\u060C \u0648\u0627\u0644\u0631\u0624\u064A\u0629 \u062A\u062D\u062F\u062F \u0627\u0644\u0643\u0648\u0646");
    const priceText = t2("Starting from RMB 509,900", "\xC0 partir de 509 900 RMB", "\u0627\u0644\u0633\u0639\u0631 \u064A\u0628\u062F\u0623 \u0645\u0646 509,900 \u064A\u0648\u0627\u0646");
    const bookDriveText = t2("Book test drive", "R\xE9server un essai", "\u062D\u062C\u0632 \u062A\u062C\u0631\u0628\u0629 \u0642\u064A\u0627\u062F\u0629");
    const orderNowText = t2("Order now", "Commander maintenant", "\u0627\u0637\u0644\u0628 \u0627\u0644\u0622\u0646");
    const findStoreText = t2("Find a store", "Trouver un magasin", "\u0627\u0628\u062D\u062B \u0639\u0646 \u0645\u062A\u062C\u0631");
    const chapterLinks = computed(() => [
      { id: "hero", label: textFor(t2("Overview", "Aper\xE7u", "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629")) },
      { id: "section1", label: textFor(t2("Design", "Design", "\u0627\u0644\u062A\u0635\u0645\u064A\u0645")) },
      { id: "section2", label: textFor(t2("Interior", "Int\xE9rieur", "\u0627\u0644\u062F\u0627\u062E\u0644\u064A\u0629")) },
      { id: "section3", label: textFor(t2("Intelligence", "Intelligence", "\u0627\u0644\u0630\u0643\u0627\u0621")) },
      { id: "section4", label: textFor(t2("ADAS", "ADAS", "\u0646\u0638\u0627\u0645 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629")) },
      { id: "section5", label: textFor(t2("Safety", "S\xE9curit\xE9", "\u0627\u0644\u0623\u0645\u0627\u0646")) }
    ]);
    const section1Title = t2("Heavy Sword Without Edge, Self-Momentum", "\xC9p\xE9e lourd sans tranchant, momentum propre", "\u0627\u0644\u0633\u064A\u0641 \u0627\u0644\u062B\u0642\u064A\u0644 \u0628\u062F\u0648\u0646 \u062D\u062F \u060C \u0632\u062E\u0645 \u0630\u0627\u062A\u064A");
    const section1Subtitle = t2("The hero hides in form", "Le h\xE9ros se cache dans la forme", "\u0627\u0644\u0628\u0637\u0644 \u064A\u062E\u062A\u0628\u064A \u0641\u064A \u0627\u0644\u0634\u0643\u0644");
    const section2Title = t2("Black Ink Flowing Light, Cinnabar Highlight", "Encre noire lumi\xE8re fluide, rehaut cinabre", "\u0627\u0644\u062D\u0628\u0631 \u0627\u0644\u0623\u0633\u0648\u062F \u0627\u0644\u0645\u062A\u062F\u0641\u0642\u060C \u062A\u0644\u0645\u064A\u0639 \u0628\u0627\u0644\u0627\u0632\u0648\u0631\u062F");
    const section2Subtitle = t2("The hero hides in form", "Le h\xE9ros se cache dans la forme", "\u0627\u0644\u0628\u0637\u0644 \u064A\u062E\u062A\u0628\u064A \u0641\u064A \u0627\u0644\u0634\u0643\u0644");
    const section3Title = t2("Global Circulation, All Things Connected", "Circulation globale, tout connect\xE9", "\u0627\u0644\u062A\u062F\u0641\u0642 \u0627\u0644\u0639\u0627\u0644\u0645\u064A\u060C \u062C\u0645\u064A\u0639 \u0627\u0644\u0623\u0634\u064A\u0627\u0621 \u0645\u062A\u0635\u0644\u0629");
    const section3Subtitle = t2("The hero is wise at heart", "Le h\xE9ros est sage de c\u0153ur", "\u0627\u0644\u0628\u0637\u0644 \u062D\u0643\u064A\u0645 \u0641\u064A \u0627\u0644\u0642\u0644\u0628");
    const section4Title = t2("All-Weather, All-Direction, All-Target", "Tous temps, toutes directions, tous objectifs", "\u062C\u0645\u064A\u0639 \u0623\u062D\u0648\u0627\u0644 \u0627\u0644\u0637\u0642\u0633\u060C \u062C\u0645\u064A\u0639 \u0627\u0644\u0627\u062A\u062C\u0627\u0647\u0627\u062A\u060C \u062C\u0645\u064A\u0639 \u0627\u0644\u0623\u0647\u062F\u0627\u0641");
    const section4Subtitle = t2("The hero is wise at heart", "Le h\xE9ros est sage de c\u0153ur", "\u0627\u0644\u0628\u0637\u0644 \u062D\u0643\u064A\u0645 \u0641\u064A \u0627\u0644\u0642\u0644\u0628");
    const section5Title = t2("All-Dimensional Safety, Comprehensive Protection", "S\xE9curit\xE9 tous azimuts, protection compl\xE8te", "\u0623\u0645\u0627\u0646 \u0634\u0627\u0645\u0644\u060C \u062D\u0645\u0627\u064A\u0629 \u0634\u0627\u0645\u0644\u0629");
    const section5Subtitle = t2("The hero hides in the edge", "Le h\xE9ros se cache dans le tranchant", "\u0627\u0644\u0628\u0637\u0644 \u064A\u062E\u062A\u0628\u064A \u0641\u064A \u0627\u0644\u062D\u062F");
    const carbonFiberTitle = t2("Carbon Fiber Kit", "Kit fibre de carbone", "\u0637\u0642\u0645 \u0623\u0644\u064A\u0627\u0641 \u0643\u0627\u0631\u0628\u0648\u0646 \u0641\u0627\u064A\u0628\u0631");
    const carbonFiberSubtitle = t2("Exclusive bespoke craftsmanship, 0.8m\xB2 precision layout throughout the vehicle", "Fa\xE7onnage sur mesure exclusif, disposition pr\xE9cise de 0,8m\xB2 dans tout le v\xE9hicule", "\u062D\u0631\u0627\u0641\u0629 \u062E\u0627\u0635\u0629 \u062D\u0635\u0631\u064A\u0629\u060C \u062A\u0635\u0645\u064A\u0645 \u062F\u0642\u064A\u0642 0.8\u0645\xB2 \u0641\u064A \u062C\u0645\u064A\u0639 \u0623\u0646\u062D\u0627\u0621 \u0627\u0644\u0645\u0631\u0643\u0628\u0629");
    const carbonFiberImages = [
      "/assets/OFFICIALVOYAH/titanblackediditon/images/swiper_5_1.jpg",
      "/assets/OFFICIALVOYAH/titanblackediditon/images/swiper_5_2.jpg",
      "/assets/OFFICIALVOYAH/titanblackediditon/images/swiper_5_3.jpg",
      "/assets/OFFICIALVOYAH/titanblackediditon/images/swiper_5_4.jpg"
    ];
    const harmonyTitle = t2("Harmony Space 5 Cockpit", "Cockpit Harmony Space 5", "\u0645\u0642\u0635\u0648\u0631\u0629 \u0647\u0627\u0631\u0645\u0648\u0646\u064A \u0633\u0628\u064A\u0633 5");
    const harmonyFeatures = [
      {
        title: t2("Seamless Connection", "Connexion sans couture", "\u0627\u062A\u0635\u0627\u0644 \u0633\u0644\u0633"),
        desc: t2("Seamless handover when entering/exiting, navigation uninterrupted, calls uninterrupted, entertainment uninterrupted", "Transfert sans couture en entrant/sortant, navigation ininterrompue, appels ininterrompus, divertissement ininterrompu", "\u0627\u0646\u062A\u0642\u0627\u0644 \u0633\u0644\u0633 \u0639\u0646\u062F \u0627\u0644\u062F\u062E\u0648\u0644/\u0627\u0644\u062E\u0631\u0648\u062C\u060C \u0627\u0644\u0627\u062A\u062C\u0627\u0647 \u063A\u064A\u0631 \u0645\u0642\u0637\u0648\u0639\u060C \u0627\u0644\u0645\u0643\u0627\u0644\u0645\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0637\u0648\u0639\u0629")
      },
      {
        title: t2("Super Desktop 2.0", "Super Bureau 2.0", "\u0633\u0648\u0628\u0631 \u062F\u064A\u0633\u0643\u062A\u0648\u0628 2.0"),
        desc: t2("50,000+ mobile apps one-click to car, convenient and satisfying", "50 000+ applications mobiles en un clic dans la voiture, pratique et satisfaisant", "+50,000 \u062A\u0637\u0628\u064A\u0642 \u0647\u0627\u062A\u0641 \u0628\u0646\u0642\u0631\u0629 \u0648\u0627\u062D\u062F\u0629 \u0625\u0644\u0649 \u0627\u0644\u0633\u064A\u0627\u0631\u0629\u060C \u0645\u0646\u0627\u0633\u0628 \u0648\u0645\u0631\u064A\u062D")
      },
      {
        title: t2("Hspace-Link Smart Connection", "Connexion intelligente Hspace-Link", "\u0627\u062A\u0635\u0627\u0644 \u0630\u0643\u064A Hspace-Link"),
        desc: t2("Heterogeneous control, full-screen experience, supports tablet in car", "Contr\xF4le h\xE9t\xE9rog\xE8ne, exp\xE9rience plein \xE9cran, supporte tablette dans la voiture", "\u062A\u062D\u0643\u0645 \u0645\u062E\u062A\u0644\u0641\u060C \u062A\u062C\u0631\u0628\u0629 \u0634\u0627\u0634\u0629 \u0643\u0627\u0645\u0644\u0629\u060C \u062F\u0639\u0645 \u0627\u0644\u062C\u0647\u0627\u0632 \u0627\u0644\u0644\u0648\u062D\u064A \u0641\u064A \u0627\u0644\u0633\u064A\u0627\u0631\u0629")
      }
    ];
    const drivingTitle = t2("Million-Class Driving, Extraordinary Luxury", "Conduite million-classe, luxe extraordinaire", "\u0642\u064A\u0627\u062F\u0629 \u0641\u0626\u0629 \u0627\u0644\u0645\u0644\u064A\u0648\u0646\u060C \u0641\u062E\u0627\u0645\u0629 \u0627\u0633\u062A\u062B\u0646\u0627\u0626\u064A\u0629");
    const drivingFeatures = [
      {
        title: t2("Three-Chamber Air Suspension + EDC Magic Carpet", "Suspension pneumatique triple chambre + tapis magique EDC", "\u0646\u0638\u0627\u0645 \u062A\u0639\u0644\u064A\u0642 \u0647\u0648\u0627\u0626\u064A \u0628\u06403 \u063A\u0631\u0641 + \u0633\u062C\u0627\u062F\u0629 \u0633\u062D\u0631\u064A\u0629 EDC"),
        desc: t2("Suspension height and stiffness adjustment, complex road conditions like walking on flat ground", "Hauteur et rigidit\xE9 de suspension ajustables, conditions de route complexes comme marcher sur du plat", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0631\u062A\u0641\u0627\u0639 \u0648\u0635\u0644\u0627\u0628\u0629 \u0627\u0644\u062A\u0639\u0644\u064A\u0642\u060C \u0637\u0631\u0642 \u0645\u0639\u0642\u062F\u0629 \u0643\u0627\u0644\u0645\u0634\u064A \u0639\u0644\u0649 \u0623\u0631\u0636 \u0645\u0633\u062A\u0648\u064A\u0629")
      },
      {
        title: t2("Bidirectional 16\xB0 Rear Wheel Steering", "Direction bidirectionnelle 16\xB0 roues arri\xE8re", "\u062A\u0648\u062C\u064A\u0647 \u062E\u0644\u0641\u064A \u062B\u0646\u0627\u0626\u064A \u0628\u064016\xB0"),
        desc: t2("Large car also agile, easy parking, free turning", "Grande voiture aussi agile, stationnement facile, virage libre", "\u0633\u064A\u0627\u0631\u0629 \u0643\u0628\u064A\u0631\u0629 \u0644\u0643\u0646\u0647\u0627 \u0631\u0634\u064A\u0642\u0629\u060C \u0648\u0642\u0641 \u0633\u0647\u0644\u060C \u0627\u0646\u0639\u0637\u0627\u0641 \u062D\u0631")
      },
      {
        title: t2("High-Performance Brand Silent Tires", "Pneus silencieux de marque haute performance", "\u0625\u0637\u0627\u0631\u0627\u062A \u0635\u0627\u0645\u062A\u0629 \u0639\u0627\u0644\u0645\u064A\u0629 \u0627\u0644\u0623\u062F\u0627\u0621"),
        desc: t2("Strong support, stability and precision united", "Support fort, stabilit\xE9 et pr\xE9cision unis", "\u062F\u0639\u0645 \u0642\u0648\u064A\u060C \u0627\u0633\u062A\u0642\u0631\u0627\u0631 \u0648\u062F\u0642\u0629 \u0645\u062A\u0645\u0627\u0633\u062A\u0627\u0646")
      }
    ];
    const chassisTitle = t2("Million-Class Chassis, Mountains and Seas Composed", "Ch\xE2ssis million-classe, montagnes et mers compos\xE9s", "\u0647\u064A\u0643\u0644 \u0641\u0626\u0629 \u0627\u0644\u0645\u0644\u064A\u0648\u0646\u060C \u062C\u0628\u0627\u0644 \u0648\u0628\u062D\u0627\u0631 \u0628\u0631\u0648\u0627\u062D \u0645\u0631\u062A\u0627\u062D\u0629");
    const ctaTitle = t2("Experience Voyah Titan Black Edition", "D\xE9couvrez le Voyah Titan Black Edition", "\u062C\u0631\u0628 Voyah Titan \u0627\u0644\u0625\u0635\u062F\u0627\u0631 \u0627\u0644\u0623\u0633\u0648\u062F");
    const ctaSubtitle = t2("Book a test drive today", "R\xE9servez un essai aujourd'hui", "\u0627\u062D\u062C\u0632 \u062A\u062C\u0631\u0628\u0629 \u0642\u064A\u0627\u062F\u0629 \u0627\u0644\u064A\u0648\u0645");
    const section1Media = computed(() => ({
      id: "section1-carousel",
      kind: "carousel",
      kicker: textFor(t2("01 Design", "01 Design", "01 \u0627\u0644\u062A\u0635\u0645\u064A\u0645")),
      title: textFor(t2("Exclusive Ink-Black Exterior", "Ext\xE9rieur exclusif noir encre", "\u062E\u0627\u0631\u062C\u064A \u0623\u0633\u0648\u062F \u062D\u0635\u0631\u064A")),
      summary: textFor(t2("A complete black outfit, all sharpness hidden", "Une tenue noire compl\xE8te, tous les tranchants cach\xE9s", "\u0632\u064A \u0623\u0633\u0648\u062F \u0643\u0627\u0645\u0644\u060C \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u062F\u0648\u062F \u0645\u062E\u0641\u064A\u0629")),
      image: "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_3_1.jpg",
      images: [
        "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_3_1.jpg",
        "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_3_2.jpg",
        "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_3_3.jpg"
      ],
      slides: [
        { image: "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_3_1.jpg", title: textFor(t2("Exclusive Ink-Black Exterior Kit", "Kit ext\xE9rieur exclusif noir encre", "\u0637\u0642\u0645 \u062E\u0627\u0631\u062C\u064A \u0623\u0633\u0648\u062F \u062D\u0635\u0631\u064A")), summary: textFor(t2("A complete black outfit, all sharpness hidden", "Une tenue noire compl\xE8te, tous les tranchants cach\xE9s", "\u0632\u064A \u0623\u0633\u0648\u062F \u0643\u0627\u0645\u0644\u060C \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u062F\u0648\u062F \u0645\u062E\u0641\u064A\u0629")) },
        { image: "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_3_2.jpg", title: textFor(t2("Profound Mirror Grille", "Grille miroir profonde", "\u0634\u0628\u0643\u0629 \u0627\u0644\u0645\u0631\u0627\u0629 \u0627\u0644\u0639\u0645\u064A\u0642\u0629")), summary: textFor(t2("Full mirror high-gloss blackening process", "Processus de noircissement haute brillance miroir complet", "\u0639\u0645\u0644\u064A\u0629 \u062A\u0633\u0648\u064A\u062F \u0628\u0627\u0644\u0644\u0645\u0639 \u0627\u0644\u0639\u0627\u0644\u064A \u0644\u0627\u0645\u0639 \u0627\u0644\u0645\u0631\u0627\u0629")) },
        { image: "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_3_3.jpg", title: textFor(t2("Heaven and Earth Star Hub", "Moyeu \xE9toil\xE9 ciel et terre", "\u0639\u062C\u0644\u0629 \u0646\u062C\u0645 \u0627\u0644\u0633\u0645\u0627\u0621 \u0648\u0627\u0644\u0623\u0631\u0636")), summary: textFor(t2("World first, 10 core processes, exclusive PVD bright black plating", "Premier mondial, 10 processus centraux, placage PVD noir brillant exclusif", "\u0623\u0648\u0644 \u0645\u0631\u0629 \u0641\u064A \u0627\u0644\u0639\u0627\u0644\u0645\u060C 10 \u0639\u0645\u0644\u064A\u0627\u062A \u0623\u0633\u0627\u0633\u064A\u0629\u060C \u0637\u0644\u0627\u0621 PVD \u0623\u0633\u0648\u062F \u0644\u0627\u0645\u0639 \u062D\u0635\u0631\u064A")) }
      ]
    }));
    const section2Media = computed(() => ({
      id: "section2-carousel",
      kind: "carousel",
      kicker: textFor(t2("02 Interior", "02 Int\xE9rieur", "02 \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u0629")),
      title: textFor(t2("Cinnabar Interior", "Int\xE9rieur cinabre", "\u062F\u0627\u062E\u0644\u064A\u0629 \u0627\u0644\u0627\u0632\u0648\u0631\u062F")),
      summary: textFor(t2("In endless black ink, only a heart remains", "Dans l'encre noire sans fin, seul un peu de c\u0153ur reste", "\u0641\u064A \u0627\u0644\u062D\u0628\u0631 \u0627\u0644\u0623\u0633\u0648\u062F \u0627\u0644\u0628\u062F\u0648\u0646 \u0646\u0647\u0627\u064A\u0629\u060C \u0644\u0627 \u064A\u0628\u0642\u0649 \u0625\u0644\u0627 \u0642\u0644\u0628 \u0635\u063A\u064A\u0631")),
      image: "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_9_1.jpg",
      images: [
        "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_9_1.jpg",
        "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_9_2.jpg",
        "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_9_3.jpg",
        "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_9_4.jpg"
      ],
      slides: [
        { image: "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_9_1.jpg", title: textFor(t2("Cinnabar Interior Color", "Couleur int\xE9rieure cinabre", "\u0644\u0648\u0646 \u062F\u0627\u062E\u0644\u064A\u0629 \u0627\u0644\u0627\u0632\u0648\u0631\u062F")), summary: textFor(t2("In endless black ink, only a heart remains", "Dans l'encre noire sans fin, seul un peu de c\u0153ur reste", "\u0641\u064A \u0627\u0644\u062D\u0628\u0631 \u0627\u0644\u0623\u0633\u0648\u062F \u0627\u0644\u0628\u062F\u0648\u0646 \u0646\u0647\u0627\u064A\u0629\u060C \u0644\u0627 \u064A\u0628\u0642\u0649 \u0625\u0644\u0627 \u0642\u0644\u0628 \u0635\u063A\u064A\u0631")) },
        { image: "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_9_2.jpg", title: textFor(t2("Armor Quilted Seats", "Si\xE8ges matelass\xE9s armure", "\u0645\u0642\u0627\u0639\u062F \u0645\u062E\u064A\u0637\u0629 \u0628\u0634\u0644 \u0627\u0644\u062F\u0631\u0639")), summary: textFor(t2("Layered line design, quilted symmetrical arrangement", "Design lignes en couches, arrangement matelass\xE9 sym\xE9trique", "\u062A\u0635\u0645\u064A\u0645 \u062E\u0637\u0648\u0637 \u0645\u0631\u062A\u0628\u0629\u060C \u062A\u0631\u062A\u064A\u0628 \u0645\u062E\u064A\u0637 \u0645\u062A\u0645\u0627\u062B\u0644")) },
        { image: "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_9_3.jpg", title: textFor(t2("Flowing Cloud Ink Panel", "Panneau encre nuage fluide", "\u0644\u0648\u062D \u062D\u0628\u0631 \u0627\u0644\u0633\u062D\u0627\u0628 \u0627\u0644\u0645\u062A\u062F\u0641\u0642")), summary: textFor(t2("4-layer precision pressing process", "Processus de pressage pr\xE9cision 4 couches", "\u0639\u0645\u0644\u064A\u0629 \u0636\u063A\u0637 \u062F\u0642\u064A\u0642\u0629 \u0628\u06404 \u0637\u0628\u0642\u0627\u062A")) },
        { image: "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_9_4.jpg", title: textFor(t2("Black Crystal Buttons", "Boutons cristal noir", "\u0623\u0632\u0631\u0627\u0631 \u0627\u0644\u0643\u0631\u064A\u0633\u062A\u0627\u0644 \u0627\u0644\u0623\u0633\u0648\u062F")), summary: textFor(t2("High-quality black crystal material", "Mat\xE9riau cristal noir haute qualit\xE9", "\u0645\u0627\u062F\u0629 \u0643\u0631\u064A\u0633\u062A\u0627\u0644 \u0623\u0633\u0648\u062F \u0639\u0627\u0644\u0645\u064A\u0629")) }
      ]
    }));
    const section4Media = computed(() => ({
      id: "section4-carousel",
      kind: "carousel",
      kicker: textFor(t2("04 ADAS", "04 ADAS", "04 \u0646\u0638\u0627\u0645 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629")),
      title: textFor(t2("All-Weather Full-Scene Perception", "Perception tous temps toutes sc\xE8nes", "\u0625\u062F\u0631\u0627\u0643 \u0634\u0627\u0645\u0644 \u0644\u062C\u0645\u064A\u0639 \u0623\u062D\u0648\u0627\u0644 \u0627\u0644\u0637\u0642\u0633")),
      summary: textFor(t2("34 high-precision sensors, eyes in all directions, ears in all directions", "34 capteurs haute pr\xE9cision, yeux dans toutes les directions, oreilles dans toutes les directions", "34 \u062D\u0633\u0627\u0633 \u062F\u0642\u064A\u0642\u060C \u0639\u064A\u0648\u0646 \u0641\u064A \u062C\u0645\u064A\u0639 \u0627\u0644\u0627\u062A\u062C\u0627\u0647\u0627\u062A\u060C \u0622\u0630\u0627\u0646 \u0641\u064A \u062C\u0645\u064A\u0639 \u0627\u0644\u0627\u062A\u062C\u0627\u0647\u0627\u062A")),
      image: "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_18_1.jpg",
      images: [
        "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_18_1.jpg",
        "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_18_2.jpg"
      ],
      slides: [
        { image: "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_18_1.jpg", title: textFor(t2("New Gen 4 Laser Radars", "Nouvelle g\xE9n\xE9ration 4 radars laser", "\u062C\u064A\u0644 \u062C\u062F\u064A\u062F \u0645\u0646 \u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0644\u064A\u0632\u0631 \u0627\u0644\u0623\u0631\u0628\u0639\u0629")), summary: textFor(t2("First mass-produced global highest line forward 896-line laser radar", "Premier radar laser 896 lignes avant mondial de plus haute ligne en production de masse", "\u0623\u0648\u0644 \u0645\u0627\u062F\u0629 \u0625\u0646\u062A\u0627\u062C \u0639\u0627\u0644\u0645\u064A\u0629 \u0628\u0640896 \u062E\u0637 \u0644\u064A\u0632\u0631 \u0623\u0645\u0627\u0645\u064A")) },
        { image: "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_18_2.jpg", title: textFor(t2("34 Perception Fusion Sensors", "34 capteurs fusion perception", "34 \u062D\u0633\u0627\u0633 \u0627\u0646\u062F\u0645\u0627\u062C \u0625\u062F\u0631\u0627\u0643")), summary: textFor(t2("34 high-precision sensors, eyes in all directions, ears in all directions", "34 capteurs haute pr\xE9cision, yeux dans toutes les directions, oreilles dans toutes les directions", "34 \u062D\u0633\u0627\u0633 \u062F\u0642\u064A\u0642\u060C \u0639\u064A\u0648\u0646 \u0641\u064A \u062C\u0645\u064A\u0639 \u0627\u0644\u0627\u062A\u062C\u0627\u0647\u0627\u062A\u060C \u0622\u0630\u0627\u0646 \u0641\u064A \u062C\u0645\u064A\u0639 \u0627\u0644\u0627\u062A\u062C\u0627\u0647\u0627\u062A")) }
      ]
    }));
    const section5Media = computed(() => ({
      id: "section5-carousel",
      kind: "carousel",
      kicker: textFor(t2("05 Safety", "05 S\xE9curit\xE9", "05 \u0627\u0644\u0623\u0645\u0627\u0646")),
      title: textFor(t2("Five-Layer Redundancy Protection", "Protection redondance cinq couches", "\u062D\u0645\u0627\u064A\u0629 \u0628\u06405 \u0637\u0628\u0642\u0627\u062A \u0645\u0643\u0648\u0651\u0646\u0629")),
      summary: textFor(t2("Perception, braking, steering, communication, power all have redundancy", "Perception, freinage, direction, communication, puissance ont tous de la redondance", "\u0627\u0644\u0625\u062F\u0631\u0627\u0643\u060C \u0627\u0644\u0645\u0643\u0627\u0628\u062D\u060C \u0627\u0644\u062A\u0648\u062C\u064A\u0647\u060C \u0627\u0644\u0627\u062A\u0635\u0627\u0644\u060C \u0627\u0644\u0637\u0627\u0642\u0629 \u0644\u0647\u0627 \u0625\u062C\u0647\u0627\u062F \u0645\u0643\u0648\u0651\u0646")),
      image: "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_21_1.jpg",
      images: [
        "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_21_1.jpg",
        "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_21_2.jpg",
        "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_21_3.jpg",
        "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_21_4.jpg",
        "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_21_5.jpg"
      ],
      slides: [
        { image: "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_21_1.jpg", title: textFor(t2("Perception Redundancy", "Redondance perception", "\u0627\u0644\u0625\u062F\u0631\u0627\u0643 \u0627\u0644\u0645\u0643\u0648\u0651\u0646")), summary: textFor(t2("Everything has a contingency plan", "Tout a un plan de contingence", "\u0644\u0643\u0644 \u0634\u064A\u0621 \u062E\u0637\u0629 \u0627\u062D\u062A\u064A\u0627\u0637")) },
        { image: "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_21_2.jpg", title: textFor(t2("Braking Redundancy", "Redondance freinage", "\u0627\u0644\u0645\u0643\u0627\u0628\u062D \u0627\u0644\u0645\u0643\u0648\u0651\u0646\u0629")), summary: textFor(t2("Everything has a contingency plan", "Tout a un plan de contingence", "\u0644\u0643\u0644 \u0634\u064A\u0621 \u062E\u0637\u0629 \u0627\u062D\u062A\u064A\u0627\u0637")) },
        { image: "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_21_3.jpg", title: textFor(t2("Steering Redundancy", "Redondance direction", "\u0627\u0644\u062A\u0648\u062C\u064A\u0647 \u0627\u0644\u0645\u0643\u0648\u0651\u0646")), summary: textFor(t2("Everything has a contingency plan", "Tout a un plan de contingence", "\u0644\u0643\u0644 \u0634\u064A\u0621 \u062E\u0637\u0629 \u0627\u062D\u062A\u064A\u0627\u0637")) },
        { image: "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_21_4.jpg", title: textFor(t2("Communication Redundancy", "Redondance communication", "\u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0627\u0644\u0645\u0643\u0648\u0651\u0646")), summary: textFor(t2("Everything has a contingency plan", "Tout a un plan de contingence", "\u0644\u0643\u0644 \u0634\u064A\u0621 \u062E\u0637\u0629 \u0627\u062D\u062A\u064A\u0627\u0637")) },
        { image: "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_21_5.jpg", title: textFor(t2("Power Redundancy", "Redondance puissance", "\u0627\u0644\u0637\u0627\u0642\u0629 \u0627\u0644\u0645\u0643\u0648\u0651\u0646\u0629")), summary: textFor(t2("Everything has a contingency plan", "Tout a un plan de contingence", "\u0644\u0643\u0644 \u0634\u064A\u0621 \u062E\u0637\u0629 \u0627\u062D\u062A\u064A\u0627\u0637")) }
      ]
    }));
    const chassisMedia = computed(() => ({
      id: "chassis-carousel",
      kind: "carousel",
      kicker: textFor(t2("Chassis", "Ch\xE2ssis", "\u0647\u064A\u0643\u0644")),
      title: textFor(t2("Million-Class Chassis", "Ch\xE2ssis million-classe", "\u0647\u064A\u0643\u0644 \u0641\u0626\u0629 \u0627\u0644\u0645\u0644\u064A\u0648\u0646")),
      summary: textFor(t2("Full aluminum alloy aviation chassis, lightweight design enhances driving comfort", "Ch\xE2ssis aviation alliage aluminium complet, design l\xE9ger am\xE9liore confort de conduite", "\u0647\u064A\u0643\u0644 \u0637\u064A\u0631\u0627\u0646 \u0623\u0644\u0645\u0646\u064A\u0648\u0645 \u0643\u0627\u0645\u0644\u060C \u062A\u0635\u0645\u064A\u0645 \u062E\u0641\u064A\u0641 \u0627\u0644\u0648\u0632\u0646 \u064A\u062D\u0633\u0646 \u0631\u0627\u062D\u0629 \u0627\u0644\u0642\u064A\u0627\u062F\u0629")),
      image: "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_23_1.jpg",
      images: [
        "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_23_1.jpg",
        "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_23_2.jpg",
        "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_23_3.jpg"
      ],
      slides: [
        { image: "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_23_1.jpg", title: textFor(t2("Full Aluminum Aviation Chassis", "Ch\xE2ssis aviation aluminium complet", "\u0647\u064A\u0643\u0644 \u0637\u064A\u0631\u0627\u0646 \u0623\u0644\u0645\u0646\u064A\u0648\u0645 \u0643\u0627\u0645\u0644")), summary: textFor(t2("Lightweight design enhances driving comfort", "Design l\xE9ger am\xE9liore confort de conduite", "\u062A\u0635\u0645\u064A\u0645 \u062E\u0641\u064A\u0641 \u0627\u0644\u0648\u0632\u0646 \u064A\u062D\u0633\u0646 \u0631\u0627\u062D\u0629 \u0627\u0644\u0642\u064A\u0627\u062F\u0629")) },
        { image: "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_23_2.jpg", title: textFor(t2("Front Double Wishbone + Rear Five-Link", "Double triangulation avant + 5 bras arri\xE8re", "\u0630\u0631\u0627\u0639 \u0627\u0644\u0645\u0646\u0634\u0623\u0629 \u0627\u0644\u0623\u0645\u0627\u0645\u064A\u0629 \u0627\u0644\u0645\u0632\u062F\u0648\u062C\u0629 + 5 \u0631\u0648\u0627\u0628\u0637 \u062E\u0644\u0641\u064A\u0629")), summary: textFor(t2("Balanced handling and refined filtering", "Manipulation \xE9quilibr\xE9e et filtration raffin\xE9e", "\u062A\u062D\u0643\u0645 \u0645\u062A\u0648\u0627\u0632\u0646 \u0648\u062A\u0635\u0641\u064A\u0629 \u0645\u0631\u0634\u062D\u0629")) },
        { image: "/assets/OFFICIALVOYAH/titanblackediditon/images/sc_23_3.jpg", title: textFor(t2("Full Series Intelligent Electric 4WD", "4WD \xE9lectrique intelligent s\xE9rie compl\xE8te", "\u062F\u0641\u0639 \u0631\u0628\u0627\u0639\u064A \u0643\u0647\u0631\u0628\u0627\u0626\u064A \u0630\u0643\u064A \u0644\u0644\u0643\u0627\u0645\u0644")), summary: textFor(t2("Front and rear dual motor layout, 0-100% intelligent stepless adjustment", "Disposition double moteur avant/arri\xE8re, ajustement continu intelligent 0-100%", "\u062A\u0648\u0632\u064A\u0639 \u0645\u062D\u0631\u0643\u064A\u0646 \u0623\u0645\u0627\u0645\u064A \u0648\u062E\u0644\u0641\u064A\u060C \u062A\u0639\u062F\u064A\u0644 \u0630\u0643\u064A \u0628\u062F\u0648\u0646 \u0641\u062A\u062D \u0645\u0646 0-100%")) }
      ]
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "titan-be-page" }, _attrs))} data-v-d8cad0f0><section class="titan-be-hero" id="hero" data-v-d8cad0f0><div class="titan-be-hero-bg" data-v-d8cad0f0><img${ssrRenderAttr("src", _imports_0$c)} alt="Voyah Titan Black Edition" class="titan-be-hero-image" loading="eager" fetchpriority="high" decoding="async" data-v-d8cad0f0><div class="titan-be-hero-overlay" data-v-d8cad0f0></div></div><div class="titan-be-hero-content" data-v-d8cad0f0><div class="titan-be-hero-inner" data-v-d8cad0f0><img${ssrRenderAttr("src", _imports_1$9)} alt="Voyah Titan Black Edition" class="titan-be-hero-logo inview-animated" loading="eager" fetchpriority="high" decoding="async" data-v-d8cad0f0><p class="titan-be-hero-slogan inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.1s" })}" data-v-d8cad0f0>${ssrInterpolate(unref(textFor)(unref(heroSlogan)))}</p><div class="titan-be-hero-price inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.2s" })}" data-v-d8cad0f0>${ssrInterpolate(unref(textFor)(unref(priceText)))}</div><div class="titan-be-hero-actions inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.3s" })}" data-v-d8cad0f0>`);
      _push(ssrRenderComponent(_sfc_main$1$1, {
        to: unref(buildPath)("book-drive.html"),
        variant: "primary",
        class: "titan-be-btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(textFor)(unref(bookDriveText)))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(textFor)(unref(bookDriveText))), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1$1, {
        to: unref(buildPath)("store.html"),
        variant: "secondary",
        class: "titan-be-btn-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(textFor)(unref(orderNowText)))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(textFor)(unref(orderNowText))), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section>`);
      _push(ssrRenderComponent(ModelChapterNav, {
        sections: chapterLinks.value,
        variant: "titan-be"
      }, null, _parent));
      _push(`<section class="titan-be-section-full" id="section1" style="${ssrRenderStyle({ "background-image": "url('/assets/OFFICIALVOYAH/titanblackediditon/images/sc_2.jpg')" })}" data-v-d8cad0f0><div class="titan-be-section-content" data-v-d8cad0f0><h2 class="titan-be-section-title inview-animated" data-v-d8cad0f0>${ssrInterpolate(unref(textFor)(unref(section1Title)))}</h2><p class="titan-be-section-subtitle inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.1s" })}" data-v-d8cad0f0>${ssrInterpolate(unref(textFor)(unref(section1Subtitle)))}</p></div></section><section class="titan-be-carousel-section" id="section1-carousel" data-v-d8cad0f0>`);
      _push(ssrRenderComponent(ModelMediaSection, {
        index: 0,
        section: section1Media.value,
        "model-slug": "titan_blackedition.html"
      }, null, _parent));
      _push(`</section><section class="titan-be-gallery-section" id="carbon-fiber" data-v-d8cad0f0><h3 class="titan-be-gallery-title inview-animated" data-v-d8cad0f0>${ssrInterpolate(unref(textFor)(unref(carbonFiberTitle)))}</h3><p class="titan-be-gallery-subtitle inview-animated" data-v-d8cad0f0>${ssrInterpolate(unref(textFor)(unref(carbonFiberSubtitle)))}</p><div class="titan-be-gallery-grid" data-v-d8cad0f0><!--[-->`);
      ssrRenderList(carbonFiberImages, (img, idx) => {
        _push(`<div class="titan-be-gallery-item" data-v-d8cad0f0><img${ssrRenderAttr("src", img)}${ssrRenderAttr("alt", `Carbon Fiber ${idx + 1}`)} loading="lazy" decoding="async" data-v-d8cad0f0></div>`);
      });
      _push(`<!--]--></div></section><section class="titan-be-section-full" id="section2" style="${ssrRenderStyle({ "background-image": "url('/assets/OFFICIALVOYAH/titanblackediditon/images/sc_8.jpg')" })}" data-v-d8cad0f0><div class="titan-be-section-content" data-v-d8cad0f0><h2 class="titan-be-section-title inview-animated" data-v-d8cad0f0>${ssrInterpolate(unref(textFor)(unref(section2Title)))}</h2><p class="titan-be-section-subtitle inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.1s" })}" data-v-d8cad0f0>${ssrInterpolate(unref(textFor)(unref(section2Subtitle)))}</p></div></section><section class="titan-be-carousel-section" id="section2-carousel" data-v-d8cad0f0>`);
      _push(ssrRenderComponent(ModelMediaSection, {
        index: 1,
        section: section2Media.value,
        "model-slug": "titan_blackedition.html"
      }, null, _parent));
      _push(`</section><section class="titan-be-section-full" id="section3" style="${ssrRenderStyle({ "background-image": "url('/assets/OFFICIALVOYAH/titanblackediditon/images/sc_15.jpg')" })}" data-v-d8cad0f0><div class="titan-be-section-content" data-v-d8cad0f0><h2 class="titan-be-section-title inview-animated" data-v-d8cad0f0>${ssrInterpolate(unref(textFor)(unref(section3Title)))}</h2><p class="titan-be-section-subtitle inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.1s" })}" data-v-d8cad0f0>${ssrInterpolate(unref(textFor)(unref(section3Subtitle)))}</p></div></section><section class="titan-be-harmony-section" id="harmony" data-v-d8cad0f0><h3 class="titan-be-harmony-title inview-animated" data-v-d8cad0f0>${ssrInterpolate(unref(textFor)(unref(harmonyTitle)))}</h3><div class="titan-be-harmony-image" data-v-d8cad0f0><img${ssrRenderAttr("src", _imports_2$6)} alt="Harmony Space 5" class="inview-animated" loading="lazy" decoding="async" data-v-d8cad0f0></div><div class="titan-be-harmony-features" data-v-d8cad0f0><!--[-->`);
      ssrRenderList(harmonyFeatures, (feature, idx) => {
        _push(`<div class="titan-be-harmony-feature" data-v-d8cad0f0><h4 data-v-d8cad0f0>${ssrInterpolate(unref(textFor)(feature.title))}</h4><p data-v-d8cad0f0>${ssrInterpolate(unref(textFor)(feature.desc))}</p></div>`);
      });
      _push(`<!--]--></div></section><section class="titan-be-section-full" id="section4" style="${ssrRenderStyle({ "background-image": "url('/assets/OFFICIALVOYAH/titanblackediditon/images/sc_17.jpg')" })}" data-v-d8cad0f0><div class="titan-be-section-content" data-v-d8cad0f0><h2 class="titan-be-section-title inview-animated" data-v-d8cad0f0>${ssrInterpolate(unref(textFor)(unref(section4Title)))}</h2><p class="titan-be-section-subtitle inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.1s" })}" data-v-d8cad0f0>${ssrInterpolate(unref(textFor)(unref(section4Subtitle)))}</p></div></section><section class="titan-be-carousel-section" id="section4-carousel" data-v-d8cad0f0>`);
      _push(ssrRenderComponent(ModelMediaSection, {
        index: 2,
        section: section4Media.value,
        "model-slug": "titan_blackedition.html"
      }, null, _parent));
      _push(`</section><section class="titan-be-section-full" id="section5" style="${ssrRenderStyle({ "background-image": "url('/assets/OFFICIALVOYAH/titanblackediditon/images/sc_20.jpg')" })}" data-v-d8cad0f0><div class="titan-be-section-content" data-v-d8cad0f0><h2 class="titan-be-section-title inview-animated" data-v-d8cad0f0>${ssrInterpolate(unref(textFor)(unref(section5Title)))}</h2><p class="titan-be-section-subtitle inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.1s" })}" data-v-d8cad0f0>${ssrInterpolate(unref(textFor)(unref(section5Subtitle)))}</p></div></section><section class="titan-be-carousel-section" id="section5-carousel" data-v-d8cad0f0>`);
      _push(ssrRenderComponent(ModelMediaSection, {
        index: 3,
        section: section5Media.value,
        "model-slug": "titan_blackedition.html"
      }, null, _parent));
      _push(`</section><section class="titan-be-harmony-section" id="driving" data-v-d8cad0f0><h3 class="titan-be-harmony-title inview-animated" data-v-d8cad0f0>${ssrInterpolate(unref(textFor)(unref(drivingTitle)))}</h3><div class="titan-be-harmony-image" data-v-d8cad0f0><img${ssrRenderAttr("src", _imports_3$6)} alt="Million-Class Driving" class="inview-animated" loading="lazy" decoding="async" data-v-d8cad0f0></div><div class="titan-be-harmony-features" data-v-d8cad0f0><!--[-->`);
      ssrRenderList(drivingFeatures, (feature, idx) => {
        _push(`<div class="titan-be-harmony-feature" data-v-d8cad0f0><h4 data-v-d8cad0f0>${ssrInterpolate(unref(textFor)(feature.title))}</h4><p data-v-d8cad0f0>${ssrInterpolate(unref(textFor)(feature.desc))}</p></div>`);
      });
      _push(`<!--]--></div></section><section class="titan-be-carousel-section" id="chassis" data-v-d8cad0f0><h3 class="titan-be-gallery-title inview-animated" data-v-d8cad0f0>${ssrInterpolate(unref(textFor)(unref(chassisTitle)))}</h3>`);
      _push(ssrRenderComponent(ModelMediaSection, {
        index: 4,
        section: chassisMedia.value,
        "model-slug": "titan_blackedition.html"
      }, null, _parent));
      _push(`</section><section class="titan-be-cta" data-v-d8cad0f0><div class="titan-be-cta-content" data-v-d8cad0f0><h2 class="titan-be-cta-title" data-v-d8cad0f0>${ssrInterpolate(unref(textFor)(unref(ctaTitle)))}</h2><p class="titan-be-cta-subtitle" data-v-d8cad0f0>${ssrInterpolate(unref(textFor)(unref(ctaSubtitle)))}</p><div class="titan-be-cta-actions" data-v-d8cad0f0>`);
      _push(ssrRenderComponent(_sfc_main$1$1, {
        to: unref(buildPath)("book-drive.html"),
        variant: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(textFor)(unref(bookDriveText)))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(textFor)(unref(bookDriveText))), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1$1, {
        to: unref(buildPath)("store.html"),
        variant: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(textFor)(unref(findStoreText)))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(textFor)(unref(findStoreText))), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div>`);
    };
  }
});
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vehicles/titan/TitanBlackEditionPage.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const TitanBlackEditionPage = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-d8cad0f0"]]);
const _imports_0$b = publicAssetsURL("/assets/OFFICIALVOYAH/titanX8/images/sc_1.jpg");
const _imports_1$8 = publicAssetsURL("/assets/OFFICIALVOYAH/titanX8/images/titan_X8.png");
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "TitanX8Page",
  __ssrInlineRender: true,
  setup(__props) {
    const { textFor, buildPath } = useSiteContent();
    const t2 = (en, fr, ar) => ({ en, fr, ar });
    const heroSlogan = t2("Courtyard-class Large 5-Seat SUV", "SUV 5 places grande classe cour", "\u0633\u064A\u0627\u0631\u0629 \u0627\u0644\u062F\u0641\u0639 \u0627\u0644\u0631\u0628\u0627\u0639\u064A \u0627\u0644\u0641\u0627\u062E\u0631\u0629 \u0628\u06405 \u0645\u0642\u0627\u0639\u062F");
    const heroDisclaimer = t2("*Range parameters are CLTC comprehensive\u5DE5\u51B5 data tested under full fuel and full charge conditions. Actual range may vary due to weather, driving habits, load and other objective factors, for reference only. *Above information highlights product features, specific configurations subject to official configuration table.", "*Les param\xE8tres d'autonomie sont des donn\xE9es CLTC test\xE9es en conditions plein carburant et pleine charge. L'autonomie r\xE9elle peut varier en fonction de la m\xE9t\xE9o, des habitudes de conduite, de la charge et autres facteurs objectifs, pour r\xE9f\xE9rence uniquement.", "*\u0645\u0639\u0644\u0645\u0627\u062A \u0627\u0644\u0645\u062F\u0649 \u0647\u064A \u0628\u064A\u0627\u0646\u0627\u062A CLTC \u0627\u0644\u0634\u0627\u0645\u0644\u0629 \u0627\u0644\u0645\u062E\u062A\u0628\u0631\u0629 \u0641\u064A \u0638\u0644 \u0638\u0631\u0648\u0641 \u0627\u0644\u0648\u0642\u0648\u062F \u0627\u0644\u0643\u0627\u0645\u0644 \u0648\u0627\u0644\u0634\u062D\u0646 \u0627\u0644\u0643\u0627\u0645\u0644. \u0642\u062F \u064A\u062E\u062A\u0644\u0641 \u0627\u0644\u0645\u062F\u0649 \u0627\u0644\u0641\u0639\u0644\u064A \u0628\u0633\u0628\u0628 \u0627\u0644\u0637\u0642\u0633 \u0648\u0639\u0627\u062F\u0627\u062A \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0648\u0627\u0644\u062D\u0645\u0648\u0644\u0629 \u0648\u0639\u0648\u0627\u0645\u0644 \u0645\u0648\u0636\u0648\u0639\u064A\u0629 \u0623\u062E\u0631\u0649\u060C \u0644\u0644\u0645\u0631\u062C\u0639\u064A\u0629 \u0641\u0642\u0637.");
    const feature1Title = t2("Huawei Qiankun", "Huawei Qiankun", "\u0647\u0648\u0627\u0648\u064A \u0643\u064A\u0627\u0646\u0643\u0648\u0646");
    const feature1Desc = t2("896-line Laser Radar", "Radar laser 896 lignes", "\u0631\u0627\u062F\u0627\u0631 \u0644\u064A\u0632\u0631 896 \u062E\u0637");
    const feature2Title = t2("Second Row Dual Enjoyment", "Double plaisir deuxi\xE8me rang\xE9e", "\u0627\u0633\u062A\u0645\u062A\u0627\u0639 \u0645\u0632\u062F\u0648\u062C \u0644\u0644\u0635\u0641 \u0627\u0644\u062B\u0627\u0646\u064A");
    const feature2Desc = t2("Zero-Gravity Seats", "Si\xE8ges z\xE9ro-gravit\xE9", "\u0645\u0642\u0627\u0639\u062F \u0628\u0644\u0627 \u062C\u0627\u0630\u0628\u064A\u0629");
    const feature3Title = t2("Three-Chamber", "Trois chambres", "\u062B\u0644\u0627\u062B \u063A\u0631\u0641");
    const feature3Desc = t2("Air Suspension", "Suspension pneumatique", "\u062A\u0639\u0644\u064A\u0642 \u0647\u0648\u0627\u0626\u064A");
    const feature4Title = t2("750km EV Range", "750km autonomie EV", "\u0645\u062F\u0649 750 \u0643\u0645 \u0644\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629");
    const feature4Desc = t2("370km PHEV Range", "370km autonomie PHEV", "\u0645\u062F\u0649 370 \u0643\u0645 \u0644\u0644\u0647\u0627\u064A\u0628\u0631\u064A\u062F");
    const bookDriveText = t2("Book test drive", "R\xE9server un essai", "\u062D\u062C\u0632 \u062A\u062C\u0631\u0628\u0629 \u0642\u064A\u0627\u062F\u0629");
    const orderNowText = t2("Order now", "Commander maintenant", "\u0627\u0637\u0644\u0628 \u0627\u0644\u0622\u0646");
    const findStoreText = t2("Find a store", "Trouver un magasin", "\u0627\u0628\u062D\u062B \u0639\u0646 \u0645\u062A\u062C\u0631");
    const chapterLinks = [
      { id: "hero", label: textFor(t2("Overview", "Aper\xE7u", "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629")) },
      { id: "section1", label: textFor(t2("Space", "Espace", "\u0627\u0644\u0645\u0633\u0627\u062D\u0629")) },
      { id: "section2", label: textFor(t2("Seats", "Si\xE8ges", "\u0627\u0644\u0645\u0642\u0627\u0639\u062F")) },
      { id: "section3", label: textFor(t2("Intelligence", "Intelligence", "\u0627\u0644\u0630\u0643\u0627\u0621")) },
      { id: "section4", label: textFor(t2("Range", "Autonomie", "\u0627\u0644\u0645\u062F\u0649")) },
      { id: "section5", label: textFor(t2("Chassis", "Ch\xE2ssis", "\u0627\u0644\u0647\u064A\u0643\u0644")) }
    ];
    const section1Title = t2("Courtyard-class Space", "Espace classe cour", "\u0645\u0633\u0627\u062D\u0629 \u0641\u0626\u0629 \u0627\u0644\u0641\u0646\u0627\u0621");
    const section1Subtitle = t2("Garden-level comfort, villa-class enjoyment", "Confort niveau jardin, plaisir classe villa", "\u0631\u0627\u062D\u0629 \u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u062D\u062F\u064A\u0642\u0629\u060C \u0645\u062A\u0639\u0629 \u0641\u0626\u0629 \u0627\u0644\u0641\u064A\u0644\u0627");
    const spaceFeatures = [
      {
        image: "/assets/OFFICIALVOYAH/titanX8/images/sc_3.jpg",
        title: t2("Large 5-Seat Layout", "Grande disposition 5 places", "\u062A\u062E\u0637\u064A\u0637 5 \u0645\u0642\u0627\u0639\u062F \u0643\u0628\u064A\u0631"),
        desc: t2("Spacious interior space, every seat is a VIP seat", "Int\xE9rieur spacieux, chaque si\xE8ge est un si\xE8ge VIP", "\u0645\u0633\u0627\u062D\u0629 \u062F\u0627\u062E\u0644\u064A\u0629 \u0648\u0627\u0633\u0639\u0629\u060C \u0643\u0644 \u0645\u0642\u0639\u062F \u0647\u0648 \u0645\u0642\u0639\u062F VIP")
      },
      {
        image: "/assets/OFFICIALVOYAH/titanX8/images/sc_4.jpg",
        title: t2("Flexible Storage", "Rangement flexible", "\u062A\u062E\u0632\u064A\u0646 \u0645\u0631\u0646"),
        desc: t2("Multiple storage spaces to meet various travel needs", "Multiples espaces de rangement pour r\xE9pondre \xE0 divers besoins de voyage", "\u0645\u0633\u0627\u062D\u0627\u062A \u062A\u062E\u0632\u064A\u0646 \u0645\u062A\u0639\u062F\u062F\u0629 \u0644\u062A\u0644\u0628\u064A\u0629 \u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A \u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u0645\u062E\u062A\u0644\u0641\u0629")
      },
      {
        image: "/assets/OFFICIALVOYAH/titanX8/images/sc_5.jpg",
        title: t2("Panoramic Sunroof", "Toit panoramique", "\u0633\u0642\u0641 \u0628\u0627\u0646\u0648\u0631\u0627\u0645\u064A"),
        desc: t2("Extra-large opening, enjoy the infinite scenery", "Ouverture ultra-large, profitez du paysage infini", "\u0641\u062A\u062D\u0629 \u0643\u0628\u064A\u0631\u0629 \u062C\u062F\u0627\u064B\u060C \u0627\u0633\u062A\u0645\u062A\u0639 \u0628\u0627\u0644\u0645\u0646\u0627\u0638\u0631 \u0627\u0644\u0644\u0627\u0646\u0647\u0627\u0626\u064A\u0629")
      }
    ];
    const section2Title = t2("Zero-Gravity Seats", "Si\xE8ges z\xE9ro-gravit\xE9", "\u0645\u0642\u0627\u0639\u062F \u0628\u0644\u0627 \u062C\u0627\u0630\u0628\u064A\u0629");
    const section2Subtitle = t2("NASA-inspired design, stress-free riding", "Design inspir\xE9 de la NASA, sans stress", "\u062A\u0635\u0645\u064A\u0645 \u0645\u0633\u062A\u0648\u062D\u0649 \u0645\u0646 \u0646\u0627\u0633\u0627\u060C \u0631\u0643\u0648\u0628 \u062E\u0627\u0644\u064D \u0645\u0646 \u0627\u0644\u0625\u062C\u0647\u0627\u062F");
    const seatsTitle = t2("Second Row Dual Enjoyment", "Double plaisir deuxi\xE8me rang\xE9e", "\u0627\u0633\u062A\u0645\u062A\u0627\u0639 \u0645\u0632\u062F\u0648\u062C \u0644\u0644\u0635\u0641 \u0627\u0644\u062B\u0627\u0646\u064A");
    const seatFeatures = [
      {
        image: "/assets/OFFICIALVOYAH/titanX8/images/sc_7.jpg",
        title: t2("Zero-Gravity Mode", "Mode z\xE9ro-gravit\xE9", "\u0648\u0636\u0639 \u0628\u0644\u0627 \u062C\u0627\u0630\u0628\u064A\u0629"),
        desc: t2("One-click zero-gravity posture, evenly distributed body pressure", "Posture z\xE9ro-gravit\xE9 en un clic, pression corporelle uniform\xE9ment r\xE9partie", "\u0648\u0636\u0639 \u0628\u0644\u0627 \u062C\u0627\u0630\u0628\u064A\u0629 \u0628\u0646\u0642\u0631\u0629 \u0648\u0627\u062D\u062F\u0629\u060C \u0636\u063A\u0637 \u0627\u0644\u062C\u0633\u0645 \u0645\u0648\u0632\u0639 \u0628\u0627\u0644\u062A\u0633\u0627\u0648\u064A")
      },
      {
        image: "/assets/OFFICIALVOYAH/titanX8/images/sc_8.jpg",
        title: t2("Massage Function", "Fonction massage", "\u0648\u0638\u064A\u0641\u0629 \u0627\u0644\u062A\u062F\u0644\u064A\u0643"),
        desc: t2("Multiple massage modes, enjoy SPA-level comfort", "Multiples modes de massage, confort niveau SPA", "\u0623\u0648\u0636\u0627\u0639 \u062A\u062F\u0644\u064A\u0643 \u0645\u062A\u0639\u062F\u062F\u0629\u060C \u0627\u0633\u062A\u0645\u062A\u0639 \u0628\u0631\u0627\u062D\u0629 \u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0633\u0628\u0627")
      }
    ];
    const section3Title = t2("Huawei Qiankun ADS", "Huawei Qiankun ADS", "\u0646\u0638\u0627\u0645 \u0647\u0648\u0627\u0648\u064A \u0643\u064A\u0627\u0646\u0643\u0648\u0646 ADS");
    const section3Subtitle = t2("896-line laser radar, leading intelligent driving", "Radar laser 896 lignes, conduite intelligente leader", "\u0631\u0627\u062F\u0627\u0631 \u0644\u064A\u0632\u0631 896 \u062E\u0637\u060C \u0642\u064A\u0627\u062F\u0629 \u0630\u0643\u064A\u0629 \u0631\u0627\u0626\u062F\u0629");
    const adasTitle = t2("Intelligent Driving System", "Syst\xE8me de conduite intelligente", "\u0646\u0638\u0627\u0645 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0627\u0644\u0630\u0643\u064A\u0629");
    const adasFeatures = [
      {
        title: t2("896-Line Laser Radar", "Radar laser 896 lignes", "\u0631\u0627\u062F\u0627\u0631 \u0644\u064A\u0632\u0631 896 \u062E\u0637"),
        desc: t2("Ultra-long detection range, high-precision environmental perception", "Port\xE9e de d\xE9tection ultra-longue, perception environnementale haute pr\xE9cision", "\u0645\u062F\u0649 \u0643\u0634\u0641 \u0641\u0627\u0626\u0642 \u0627\u0644\u0637\u0648\u0644\u060C \u0625\u062F\u0631\u0627\u0643 \u0628\u064A\u0626\u064A \u0639\u0627\u0644\u064A \u0627\u0644\u062F\u0642\u0629"),
        icon: ""
      },
      {
        title: t2("Full-Scene Coverage", "Couverture toute sc\xE8ne", "\u062A\u063A\u0637\u064A\u0629 \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0634\u0627\u0647\u062F"),
        desc: t2("City roads, highways, parking all covered", "Routes urbaines, autoroutes, stationnement tous couverts", "\u0627\u0644\u0637\u0631\u0642 \u0627\u0644\u062D\u0636\u0631\u064A\u0629 \u0648\u0627\u0644\u0637\u0631\u0642 \u0627\u0644\u0633\u0631\u064A\u0639\u0629 \u0648\u0627\u0644\u0648\u0642\u0648\u0641 \u0645\u063A\u0637\u0627\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644"),
        icon: ""
      },
      {
        title: t2("Smart Parking", "Stationnement intelligent", "\u0627\u0644\u0648\u0642\u0648\u0641 \u0627\u0644\u0630\u0643\u064A"),
        desc: t2("Automatic parking, worry-free in narrow spaces", "Stationnement automatique, sans souci dans les espaces \xE9troits", "\u0627\u0644\u0648\u0642\u0648\u0641 \u0627\u0644\u062A\u0644\u0642\u0627\u0626\u064A\u060C \u0628\u0644\u0627 \u0642\u0644\u0642 \u0641\u064A \u0627\u0644\u0623\u0645\u0627\u0643\u0646 \u0627\u0644\u0636\u064A\u0642\u0629"),
        icon: ""
      }
    ];
    const section4Title = t2("Long Range, Fast Charging", "Longue autonomie, charge rapide", "\u0645\u062F\u0649 \u0637\u0648\u064A\u0644\u060C \u0634\u062D\u0646 \u0633\u0631\u064A\u0639");
    const section4Subtitle = t2("No range anxiety, travel freely", "Pas d'anxi\xE9t\xE9 d'autonomie, voyagez librement", "\u0644\u0627 \u0642\u0644\u0642 \u0645\u0646 \u0627\u0644\u0645\u062F\u0649\u060C \u0633\u0627\u0641\u0631 \u0628\u062D\u0631\u064A\u0629");
    const evRangeTitle = t2("Pure Electric Range", "Autonomie purement \xE9lectrique", "\u0645\u062F\u0649 \u0643\u0647\u0631\u0628\u0627\u0626\u064A \u062E\u0627\u0644\u0635");
    const evRangeDesc = t2("CLTC 750km range, city commuting worry-free", "Autonomie CLTC 750km, d\xE9placements urbains sans souci", "\u0645\u062F\u0649 CLTC 750 \u0643\u0645\u060C \u062A\u0646\u0642\u0644 \u062D\u0636\u0631\u064A \u0628\u0644\u0627 \u0642\u0644\u0642");
    const phevRangeTitle = t2("PHEV Electric Range", "Autonomie \xE9lectrique PHEV", "\u0645\u062F\u0649 \u0647\u0627\u064A\u0628\u0631\u064A\u062F \u0643\u0647\u0631\u0628\u0627\u0626\u064A");
    const phevRangeDesc = t2("CLTC 370km pure electric, daily commute zero fuel", "370km purement \xE9lectrique CLTC, trajets quotidiens sans carburant", "370 \u0643\u0645 \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u062E\u0627\u0644\u0635\u0629 CLTC\u060C \u062A\u0646\u0642\u0644 \u064A\u0648\u0645\u064A \u0628\u062F\u0648\u0646 \u0648\u0642\u0648\u062F");
    const chargingTitle = t2("Fast Charging", "Charge rapide", "\u0627\u0644\u0634\u062D\u0646 \u0627\u0644\u0633\u0631\u064A\u0639");
    const chargingDesc = t2("20%-80% in 20 minutes, coffee break and go", "20%-80% en 20 minutes, pause caf\xE9 et repartez", "\u0645\u0646 20% \u0625\u0644\u0649 80% \u0641\u064A 20 \u062F\u0642\u064A\u0642\u0629\u060C \u0627\u0633\u062A\u0631\u0627\u062D\u0629 \u0642\u0647\u0648\u0629 \u0648\u0627\u0646\u0637\u0644\u0642");
    const section5Title = t2("Million-Class Chassis", "Ch\xE2ssis million-classe", "\u0647\u064A\u0643\u0644 \u0641\u0626\u0629 \u0627\u0644\u0645\u0644\u064A\u0648\u0646");
    const section5Subtitle = t2("Three-chamber air suspension, magic carpet ride", "Suspension pneumatique trois chambres, conduite tapis magique", "\u062A\u0639\u0644\u064A\u0642 \u0647\u0648\u0627\u0626\u064A \u0628\u06403 \u063A\u0631\u0641\u060C \u0642\u064A\u0627\u062F\u0629 \u0628\u0633\u062C\u0627\u062F\u0629 \u0633\u062D\u0631\u064A\u0629");
    const chassisTitle = t2("Three-Chamber Air Suspension", "Suspension pneumatique trois chambres", "\u062A\u0639\u0644\u064A\u0642 \u0647\u0648\u0627\u0626\u064A \u0628\u06403 \u063A\u0631\u0641");
    const chassisFeatures = [
      {
        image: "/assets/OFFICIALVOYAH/titanX8/images/sc_16.jpg",
        title: t2("Three-Chamber Air Suspension", "Suspension pneumatique trois chambres", "\u062A\u0639\u0644\u064A\u0642 \u0647\u0648\u0627\u0626\u064A \u0628\u06403 \u063A\u0631\u0641"),
        desc: t2("Adjustable stiffness and height, comfortable on any road", "Rigidit\xE9 et hauteur ajustables, confortable sur toute route", "\u0635\u0644\u0627\u0628\u0629 \u0648\u0627\u0631\u062A\u0641\u0627\u0639 \u0642\u0627\u0628\u0644\u064A\u0646 \u0644\u0644\u062A\u0639\u062F\u064A\u0644\u060C \u0645\u0631\u064A\u062D \u0639\u0644\u0649 \u0623\u064A \u0637\u0631\u064A\u0642")
      },
      {
        image: "/assets/OFFICIALVOYAH/titanX8/images/sc_17.jpg",
        title: t2("CDC Continuous Damping", "Amortissement continu CDC", "\u062A\u062E\u0645\u064A\u062F \u0645\u0633\u062A\u0645\u0631 CDC"),
        desc: t2("Real-time adjustment, smooth and stable", "Ajustement en temps r\xE9el, doux et stable", "\u062A\u0639\u062F\u064A\u0644 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0641\u0639\u0644\u064A\u060C \u0633\u0644\u0633 \u0648\u0645\u0633\u062A\u0642\u0631")
      },
      {
        image: "/assets/OFFICIALVOYAH/titanX8/images/sc_18.jpg",
        title: t2("Dual Motor 4WD", "4WD double moteur", "\u062F\u0641\u0639 \u0631\u0628\u0627\u0639\u064A \u0628\u0645\u062D\u0631\u0643\u064A\u0646"),
        desc: t2("Powerful output, confident in all conditions", "Sortie puissante, confiance dans toutes les conditions", "\u0642\u0648\u0629 \u062E\u0631\u062C \u0639\u0627\u0644\u064A\u0629\u060C \u062B\u0642\u0629 \u0641\u064A \u062C\u0645\u064A\u0639 \u0627\u0644\u0638\u0631\u0648\u0641")
      }
    ];
    const galleryTitle = t2("Exterior Gallery", "Galerie ext\xE9rieure", "\u0645\u0639\u0631\u0636 \u0627\u0644\u062E\u0627\u0631\u062C");
    const galleryImages = [
      "/assets/OFFICIALVOYAH/titanX8/images/sc_19.jpg",
      "/assets/OFFICIALVOYAH/titanX8/images/sc_20.jpg",
      "/assets/OFFICIALVOYAH/titanX8/images/sc_21.jpg",
      "/assets/OFFICIALVOYAH/titanX8/images/sc_22.jpg"
    ];
    const ctaTitle = t2("Experience Voyah Titan X8", "D\xE9couvrez le Voyah Titan X8", "\u062C\u0631\u0628 Voyah Titan X8");
    const ctaSubtitle = t2("Book a test drive today", "R\xE9servez un essai aujourd'hui", "\u0627\u062D\u062C\u0632 \u062A\u062C\u0631\u0628\u0629 \u0642\u064A\u0627\u062F\u0629 \u0627\u0644\u064A\u0648\u0645");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "titan-x8-page" }, _attrs))} data-v-176250ab><section class="titan-x8-hero" id="hero" data-v-176250ab><div class="titan-x8-hero-bg" data-v-176250ab><img${ssrRenderAttr("src", _imports_0$b)} alt="Voyah Titan X8" class="titan-x8-hero-image" loading="eager" fetchpriority="high" decoding="async" data-v-176250ab><div class="titan-x8-hero-overlay" data-v-176250ab></div></div><div class="titan-x8-hero-content" data-v-176250ab><div class="titan-x8-hero-inner" data-v-176250ab><img${ssrRenderAttr("src", _imports_1$8)} alt="Voyah Titan X8" class="titan-x8-hero-logo inview-animated" loading="eager" fetchpriority="high" decoding="async" data-v-176250ab><p class="titan-x8-hero-slogan inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.1s" })}" data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(heroSlogan)))}</p><div class="titan-x8-hero-features inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.2s" })}" data-v-176250ab><div class="titan-x8-feature-item" data-v-176250ab><h4 data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(feature1Title)))}</h4><p data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(feature1Desc)))}</p></div><div class="titan-x8-feature-item" data-v-176250ab><h4 data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(feature2Title)))}</h4><p data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(feature2Desc)))}</p></div><div class="titan-x8-feature-item" data-v-176250ab><h4 data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(feature3Title)))}</h4><p data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(feature3Desc)))}</p></div><div class="titan-x8-feature-item" data-v-176250ab><h4 data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(feature4Title)))}</h4><p data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(feature4Desc)))}</p></div></div><div class="titan-x8-hero-actions inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.3s" })}" data-v-176250ab>`);
      _push(ssrRenderComponent(_sfc_main$1$1, {
        to: unref(buildPath)("book-drive.html"),
        variant: "primary",
        class: "titan-x8-btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(textFor)(unref(bookDriveText)))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(textFor)(unref(bookDriveText))), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1$1, {
        to: unref(buildPath)("store.html"),
        variant: "secondary",
        class: "titan-x8-btn-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(textFor)(unref(orderNowText)))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(textFor)(unref(orderNowText))), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="titan-x8-hero-disclaimer" data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(heroDisclaimer)))}</div></section>`);
      _push(ssrRenderComponent(ModelChapterNav, {
        sections: chapterLinks,
        variant: "titan-x8"
      }, null, _parent));
      _push(`<section class="titan-x8-section-full" id="section1" style="${ssrRenderStyle({ "background-image": "url('/assets/OFFICIALVOYAH/titanX8/images/sc_2.jpg')" })}" data-v-176250ab><div class="titan-x8-section-content" data-v-176250ab><h2 class="titan-x8-section-title inview-animated" data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(section1Title)))}</h2><p class="titan-x8-section-subtitle inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.1s" })}" data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(section1Subtitle)))}</p></div></section><section class="titan-x8-features-section" id="space-features" data-v-176250ab><div class="titan-x8-features-grid" data-v-176250ab><!--[-->`);
      ssrRenderList(spaceFeatures, (feature, idx) => {
        _push(`<div class="titan-x8-feature-card" data-v-176250ab><img${ssrRenderAttr("src", feature.image)}${ssrRenderAttr("alt", unref(textFor)(feature.title))} loading="lazy" decoding="async" data-v-176250ab><h4 data-v-176250ab>${ssrInterpolate(unref(textFor)(feature.title))}</h4><p data-v-176250ab>${ssrInterpolate(unref(textFor)(feature.desc))}</p></div>`);
      });
      _push(`<!--]--></div></section><section class="titan-x8-section-full" id="section2" style="${ssrRenderStyle({ "background-image": "url('/assets/OFFICIALVOYAH/titanX8/images/sc_6.jpg')" })}" data-v-176250ab><div class="titan-x8-section-content" data-v-176250ab><h2 class="titan-x8-section-title inview-animated" data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(section2Title)))}</h2><p class="titan-x8-section-subtitle inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.1s" })}" data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(section2Subtitle)))}</p></div></section><section class="titan-x8-seats-section" id="seats" data-v-176250ab><h3 class="titan-x8-section-heading inview-animated" data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(seatsTitle)))}</h3><div class="titan-x8-seats-grid" data-v-176250ab><!--[-->`);
      ssrRenderList(seatFeatures, (seat, idx) => {
        _push(`<div class="titan-x8-seat-card" data-v-176250ab><img${ssrRenderAttr("src", seat.image)}${ssrRenderAttr("alt", unref(textFor)(seat.title))} loading="lazy" decoding="async" data-v-176250ab><div class="titan-x8-seat-info" data-v-176250ab><h4 data-v-176250ab>${ssrInterpolate(unref(textFor)(seat.title))}</h4><p data-v-176250ab>${ssrInterpolate(unref(textFor)(seat.desc))}</p></div></div>`);
      });
      _push(`<!--]--></div></section><section class="titan-x8-section-full" id="section3" style="${ssrRenderStyle({ "background-image": "url('/assets/OFFICIALVOYAH/titanX8/images/sc_9.jpg')" })}" data-v-176250ab><div class="titan-x8-section-content" data-v-176250ab><h2 class="titan-x8-section-title inview-animated" data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(section3Title)))}</h2><p class="titan-x8-section-subtitle inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.1s" })}" data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(section3Subtitle)))}</p></div></section><section class="titan-x8-adas-section" id="adas" data-v-176250ab><div class="titan-x8-adas-content" data-v-176250ab><h3 class="titan-x8-section-heading inview-animated" data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(adasTitle)))}</h3><div class="titan-x8-adas-grid" data-v-176250ab><!--[-->`);
      ssrRenderList(adasFeatures, (item, idx) => {
        _push(`<div class="titan-x8-adas-card" data-v-176250ab><div class="titan-x8-adas-icon" data-v-176250ab>`);
        if (item.icon) {
          _push(`<img${ssrRenderAttr("src", item.icon)}${ssrRenderAttr("alt", unref(textFor)(item.title))} loading="lazy" decoding="async" data-v-176250ab>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><h4 data-v-176250ab>${ssrInterpolate(unref(textFor)(item.title))}</h4><p data-v-176250ab>${ssrInterpolate(unref(textFor)(item.desc))}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="titan-x8-section-full" id="section4" style="${ssrRenderStyle({ "background-image": "url('/assets/OFFICIALVOYAH/titanX8/images/sc_12.jpg')" })}" data-v-176250ab><div class="titan-x8-section-content" data-v-176250ab><h2 class="titan-x8-section-title inview-animated" data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(section4Title)))}</h2><p class="titan-x8-section-subtitle inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.1s" })}" data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(section4Subtitle)))}</p></div></section><section class="titan-x8-specs-section" id="specs" data-v-176250ab><div class="titan-x8-specs-grid" data-v-176250ab><div class="titan-x8-spec-card" data-v-176250ab><h4 data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(evRangeTitle)))}</h4><div class="titan-x8-spec-value" data-v-176250ab>750<span data-v-176250ab>km</span></div><p data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(evRangeDesc)))}</p></div><div class="titan-x8-spec-card" data-v-176250ab><h4 data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(phevRangeTitle)))}</h4><div class="titan-x8-spec-value" data-v-176250ab>370<span data-v-176250ab>km</span></div><p data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(phevRangeDesc)))}</p></div><div class="titan-x8-spec-card" data-v-176250ab><h4 data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(chargingTitle)))}</h4><div class="titan-x8-spec-value" data-v-176250ab>20<span data-v-176250ab>min</span></div><p data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(chargingDesc)))}</p></div></div></section><section class="titan-x8-section-full" id="section5" style="${ssrRenderStyle({ "background-image": "url('/assets/OFFICIALVOYAH/titanX8/images/sc_15.jpg')" })}" data-v-176250ab><div class="titan-x8-section-content" data-v-176250ab><h2 class="titan-x8-section-title inview-animated" data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(section5Title)))}</h2><p class="titan-x8-section-subtitle inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.1s" })}" data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(section5Subtitle)))}</p></div></section><section class="titan-x8-chassis-section" id="chassis" data-v-176250ab><h3 class="titan-x8-section-heading inview-animated" data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(chassisTitle)))}</h3><div class="titan-x8-chassis-grid" data-v-176250ab><!--[-->`);
      ssrRenderList(chassisFeatures, (item, idx) => {
        _push(`<div class="titan-x8-chassis-card" data-v-176250ab><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", unref(textFor)(item.title))} loading="lazy" decoding="async" data-v-176250ab><h4 data-v-176250ab>${ssrInterpolate(unref(textFor)(item.title))}</h4><p data-v-176250ab>${ssrInterpolate(unref(textFor)(item.desc))}</p></div>`);
      });
      _push(`<!--]--></div></section><section class="titan-x8-gallery-section" id="gallery" data-v-176250ab><h3 class="titan-x8-gallery-title inview-animated" data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(galleryTitle)))}</h3><div class="titan-x8-gallery-grid" data-v-176250ab><!--[-->`);
      ssrRenderList(galleryImages, (img, idx) => {
        _push(`<div class="titan-x8-gallery-item" data-v-176250ab><img${ssrRenderAttr("src", img)}${ssrRenderAttr("alt", `Titan X8 ${idx + 1}`)} loading="lazy" decoding="async" data-v-176250ab></div>`);
      });
      _push(`<!--]--></div></section><section class="titan-x8-cta" data-v-176250ab><div class="titan-x8-cta-content" data-v-176250ab><h2 class="titan-x8-cta-title" data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(ctaTitle)))}</h2><p class="titan-x8-cta-subtitle" data-v-176250ab>${ssrInterpolate(unref(textFor)(unref(ctaSubtitle)))}</p><div class="titan-x8-cta-actions" data-v-176250ab>`);
      _push(ssrRenderComponent(_sfc_main$1$1, {
        to: unref(buildPath)("book-drive.html"),
        variant: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(textFor)(unref(bookDriveText)))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(textFor)(unref(bookDriveText))), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1$1, {
        to: unref(buildPath)("store.html"),
        variant: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(textFor)(unref(findStoreText)))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(textFor)(unref(findStoreText))), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div>`);
    };
  }
});
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vehicles/titan/TitanX8Page.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const TitanX8Page = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-176250ab"]]);
const _imports_0$a = publicAssetsURL("/assets/OFFICIALVOYAH/freeplus/images/kv_1920.png");
const _imports_1$7 = publicAssetsURL("/assets/OFFICIALVOYAH/freeplus/images/free+.png");
const _imports_2$5 = publicAssetsURL("/assets/OFFICIALVOYAH/freeplus/images/img_07.png");
const _imports_3$5 = publicAssetsURL("/assets/OFFICIALVOYAH/freeplus/images/img_08.png");
const _imports_4$4 = publicAssetsURL("/assets/OFFICIALVOYAH/freeplus/images/img_28_1920.png");
const _imports_5$3 = publicAssetsURL("/assets/OFFICIALVOYAH/freeplus/images/img_32_01.png");
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "FreePlusPage",
  __ssrInlineRender: true,
  setup(__props) {
    const { textFor } = useSiteContent();
    const activeSection = ref(0);
    const showMobileNav = ref(false);
    const showSideNav = ref(false);
    const navProgress = ref(0);
    ref([]);
    const currentSlide = ref({
      harmony: 0,
      exterior: 0,
      interior: 0,
      range: 0,
      custom: 0
    });
    const chapterSections = computed(() => [
      { id: "section1", title: textFor({ en: "HarmonyOS", fr: "HarmonyOS", ar: "\u0647\u0627\u0631\u0645\u0648\u0646\u064A \u0623\u0648 \u0625\u0633" }), shortTitle: textFor({ en: "Cockpit", fr: "Cockpit", ar: "\u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629" }) },
      { id: "section2", title: textFor({ en: "Huawei ADS", fr: "Huawei ADS", ar: "ADS \u0647\u0648\u0627\u0648\u064A" }), shortTitle: textFor({ en: "ADS", fr: "ADS", ar: "ADS" }) },
      { id: "section3", title: textFor({ en: "Design", fr: "Design", ar: "\u0627\u0644\u062A\u0635\u0645\u064A\u0645" }), shortTitle: textFor({ en: "Design", fr: "Design", ar: "\u0627\u0644\u062A\u0635\u0645\u064A\u0645" }) },
      { id: "section4", title: textFor({ en: "Interior", fr: "Int\xE9rieur", ar: "\u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629" }), shortTitle: textFor({ en: "Interior", fr: "Int\xE9rieur", ar: "\u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629" }) },
      { id: "section5", title: textFor({ en: "Performance", fr: "Performance", ar: "\u0627\u0644\u0623\u062F\u0627\u0621" }), shortTitle: textFor({ en: "Power", fr: "Puissance", ar: "\u0627\u0644\u0642\u0648\u0629" }) },
      { id: "section6", title: textFor({ en: "Range", fr: "Autonomie", ar: "\u0627\u0644\u0645\u062F\u0649" }), shortTitle: textFor({ en: "Range", fr: "Autonomie", ar: "\u0627\u0644\u0645\u062F\u0649" }) },
      { id: "section7", title: textFor({ en: "Chassis", fr: "Ch\xE2ssis", ar: "\u0627\u0644\u0647\u064A\u0643\u0644" }), shortTitle: textFor({ en: "Chassis", fr: "Ch\xE2ssis", ar: "\u0627\u0644\u0647\u064A\u0643\u0644" }) },
      { id: "section8", title: textFor({ en: "Safety", fr: "S\xE9curit\xE9", ar: "\u0627\u0644\u0633\u0644\u0627\u0645\u0629" }), shortTitle: textFor({ en: "Safety", fr: "S\xE9curit\xE9", ar: "\u0627\u0644\u0633\u0644\u0627\u0645\u0629" }) }
    ]);
    const harmonySlides = computed(() => [
      {
        image: "/assets/OFFICIALVOYAH/freeplus/images/img_02_01.png",
        title: textFor({ en: "15.6-inch 2K Smart Screen", fr: "\xC9cran Intelligent 2K 15.6 pouces", ar: "\u0634\u0627\u0634\u0629 \u0630\u0643\u064A\u0629 2K 15.6 \u0628\u0648\u0635\u0629" }),
        desc: textFor({ en: "Ultra-clear display with vibrant colors and responsive touch", fr: "Affichage ultra-clair avec des couleurs vibrantes et un toucher r\xE9actif", ar: "\u0639\u0631\u0636 \u0641\u0627\u0626\u0642 \u0627\u0644\u0648\u0636\u0648\u062D \u0628\u0623\u0644\u0648\u0627\u0646 \u0632\u0627\u0647\u064A\u0629 \u0648\u0644\u0645\u0633 \u0645\u062A\u062C\u0627\u0648\u0628" })
      },
      {
        image: "/assets/OFFICIALVOYAH/freeplus/images/img_02_02.png",
        title: textFor({ en: "Seamless Phone Integration", fr: "Int\xE9gration T\xE9l\xE9phone Sans Couture", ar: "\u062A\u0643\u0627\u0645\u0644 \u0633\u0644\u0633 \u0645\u0639 \u0627\u0644\u0647\u0627\u062A\u0641" }),
        desc: textFor({ en: "Connect your phone and access all apps on the big screen", fr: "Connectez votre t\xE9l\xE9phone et acc\xE9dez \xE0 toutes les applications sur grand \xE9cran", ar: "\u0642\u0645 \u0628\u062A\u0648\u0635\u064A\u0644 \u0647\u0627\u062A\u0641\u0643 \u0648\u0635\u0648\u0644\u0627\u064B \u0625\u0644\u0649 \u062C\u0645\u064A\u0639 \u0627\u0644\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0639\u0644\u0649 \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u0643\u0628\u064A\u0631\u0629" })
      },
      {
        image: "/assets/OFFICIALVOYAH/freeplus/images/img_02_03.png",
        title: textFor({ en: "Voice Control", fr: "Contr\xF4le Vocal", ar: "\u0627\u0644\u062A\u062D\u0643\u0645 \u0627\u0644\u0635\u0648\u062A\u064A" }),
        desc: textFor({ en: "Natural language processing for intuitive voice commands", fr: "Traitement du langage naturel pour des commandes vocales intuitives", ar: "\u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0637\u0628\u064A\u0639\u064A\u0629 \u0644\u0644\u0623\u0648\u0627\u0645\u0631 \u0627\u0644\u0635\u0648\u062A\u064A\u0629 \u0627\u0644\u0628\u062F\u064A\u0647\u064A\u0629" })
      }
    ]);
    const exteriorSlides = computed(() => [
      {
        image: "/assets/OFFICIALVOYAH/freeplus/images/img_11_01.png",
        title: textFor({ en: "Mech Wing Front Face", fr: "Face Avant Aile M\xE9canique", ar: "\u0627\u0644\u0648\u062C\u0647 \u0627\u0644\u0623\u0645\u0627\u0645\u064A \u0627\u0644\u0645\u064A\u0643\u0627\u0646\u064A\u0643\u064A" }),
        desc: textFor({ en: "Bold geometric design with sharp lines", fr: "Design g\xE9om\xE9trique audacieux avec des lignes nettes", ar: "\u062A\u0635\u0645\u064A\u0645 \u0647\u0646\u062F\u0631\u064A \u062C\u0631\u064A\u0621 \u0645\u0639 \u062E\u0637\u0648\u0637 \u062D\u0627\u062F\u0629" })
      },
      {
        image: "/assets/OFFICIALVOYAH/freeplus/images/img_11_02.png",
        title: textFor({ en: "Lightdance LED Headlights", fr: "Phares LED Dansant", ar: "\u0645\u0635\u0627\u0628\u064A\u062D \u0623\u0645\u0627\u0645\u064A\u0629 LED \u0631\u0627\u0642\u0635\u0629" }),
        desc: textFor({ en: "Dynamic lighting patterns for a unique signature", fr: "Motifs d'\xE9clairage dynamiques pour une signature unique", ar: "\u0623\u0646\u0645\u0627\u0637 \u0625\u0636\u0627\u0621\u0629 \u062F\u064A\u0646\u0627\u0645\u064A\u0643\u064A\u0629 \u0644\u062A\u0648\u0642\u064A\u0639 \u0641\u0631\u064A\u062F" })
      },
      {
        image: "/assets/OFFICIALVOYAH/freeplus/images/img_11_03.png",
        title: textFor({ en: "20-inch Sport Wheels", fr: "Jantes Sport 20 pouces", ar: "\u0639\u062C\u0644\u0627\u062A \u0631\u064A\u0627\u0636\u064A\u0629 20 \u0628\u0648\u0635\u0629" }),
        desc: textFor({ en: "Lightweight alloy wheels with aerodynamic design", fr: "Jantes alliage l\xE9ger avec design a\xE9rodynamique", ar: "\u0639\u062C\u0644\u0627\u062A \u0633\u0628\u0627\u0626\u0643 \u062E\u0641\u064A\u0641\u0629 \u0645\u0639 \u062A\u0635\u0645\u064A\u0645 \u062F\u064A\u0646\u0627\u0645\u064A\u0643\u064A \u0647\u0648\u0627\u0626\u064A" })
      }
    ]);
    const interiorSlides = computed(() => [
      {
        image: "/assets/OFFICIALVOYAH/freeplus/images/img_14_01.png",
        title: textFor({ en: "Zero-Gravity Seats", fr: "Si\xE8ges Z\xE9ro-Gravit\xE9", ar: "\u0645\u0642\u0627\u0639\u062F \u0628\u0644\u0627 \u062C\u0627\u0630\u0628\u064A\u0629" }),
        desc: textFor({ en: "NASA-inspired ergonomic seating for ultimate comfort", fr: "Si\xE8ges ergonomiques inspir\xE9s de la NASA pour un confort ultime", ar: "\u0645\u0642\u0627\u0639\u062F \u0645\u0631\u064A\u062D\u0629 \u0645\u0633\u062A\u0648\u062D\u0627\u0629 \u0645\u0646 \u0646\u0627\u0633\u0627 \u0644\u0631\u0627\u062D\u0629 \u0642\u0635\u0648\u0649" })
      },
      {
        image: "/assets/OFFICIALVOYAH/freeplus/images/img_14_02.png",
        title: textFor({ en: "Premium Materials", fr: "Mat\xE9riaux Premium", ar: "\u0645\u0648\u0627\u062F \u0641\u0627\u062E\u0631\u0629" }),
        desc: textFor({ en: "Nappa leather and sustainable wood trim throughout", fr: "Cuir Nappa et finition bois durable dans tout l'habitacle", ar: "\u062C\u0644\u062F \u0646\u0627\u0628\u0627 \u0648\u062A\u0634\u0637\u064A\u0628\u0627\u062A \u062E\u0634\u0628\u064A\u0629 \u0645\u0633\u062A\u062F\u0627\u0645\u0629 \u0641\u064A \u0643\u0644 \u0645\u0643\u0627\u0646" })
      },
      {
        image: "/assets/OFFICIALVOYAH/freeplus/images/img_14_03.png",
        title: textFor({ en: "Ambient Lighting", fr: "\xC9clairage d'Ambiance", ar: "\u0625\u0636\u0627\u0621\u0629 \u0627\u0644\u0645\u062D\u064A\u0637\u0629" }),
        desc: textFor({ en: "64-color ambient lighting with customizable themes", fr: "\xC9clairage d'ambiance 64 couleurs avec th\xE8mes personnalisables", ar: "\u0625\u0636\u0627\u0621\u0629 \u0645\u062D\u064A\u0637\u0629 \u0628\u064064 \u0644\u0648\u0646 \u0645\u0639 \u0645\u0648\u0636\u0648\u0639\u0627\u062A \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u062E\u0635\u064A\u0635" })
      }
    ]);
    const rangeSlides = computed(() => [
      {
        image: "/assets/OFFICIALVOYAH/freeplus/images/img_24_01.png",
        title: textFor({ en: "318km EV Range", fr: "318km Autonomie EV", ar: "318 \u0643\u0645 \u0645\u062F\u0649 \u0643\u0647\u0631\u0628\u0627\u0626\u064A" }),
        desc: textFor({ en: "Pure electric driving for daily commutes", fr: "Conduite \xE9lectrique pure pour les d\xE9placements quotidiens", ar: "\u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0627\u0644\u0646\u0642\u064A\u0629 \u0644\u0644\u062A\u0646\u0642\u0644\u0627\u062A \u0627\u0644\u064A\u0648\u0645\u064A\u0629" })
      },
      {
        image: "/assets/OFFICIALVOYAH/freeplus/images/img_24_02.png",
        title: textFor({ en: "1458km Total Range", fr: "1458km Autonomie Totale", ar: "1458 \u0643\u0645 \u0627\u0644\u0645\u062F\u0649 \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A" }),
        desc: textFor({ en: "Extended range for long-distance travel", fr: "Autonomie \xE9tendue pour les voyages longue distance", ar: "\u0645\u062F\u0649 \u0645\u0645\u062A\u062F \u0644\u0644\u0633\u0641\u0631 \u0644\u0645\u0633\u0627\u0641\u0627\u062A \u0637\u0648\u064A\u0644\u0629" })
      },
      {
        image: "/assets/OFFICIALVOYAH/freeplus/images/img_24_03.png",
        title: textFor({ en: "3C Fast Charging", fr: "Recharge Rapide 3C", ar: "\u0634\u062D\u0646 \u0633\u0631\u064A\u0639 3C" }),
        desc: textFor({ en: "30%-80% in just 26 minutes", fr: "30%-80% en seulement 26 minutes", ar: "\u0645\u0646 30% \u0625\u0644\u0649 80% \u0641\u064A 26 \u062F\u0642\u064A\u0642\u0629 \u0641\u0642\u0637" })
      }
    ]);
    const customSlides = computed(() => [
      {
        image: "/assets/OFFICIALVOYAH/freeplus/images/img_32_01.png",
        title: textFor({ en: "Shadow Black Paint", fr: "Peinture Noir Shadow", ar: "\u0637\u0644\u0627\u0621 \u0634\u0627\u062F\u0648 \u0627\u0644\u0623\u0633\u0648\u062F" }),
        desc: textFor({ en: "Deep black finish with subtle metallic flakes", fr: "Finition noir profond avec des paillettes m\xE9talliques subtiles", ar: "\u062A\u0634\u0637\u064A\u0628 \u0623\u0633\u0648\u062F \u0639\u0645\u064A\u0642 \u0645\u0639 \u0642\u0635\u0627\u0635\u0627\u062A \u0645\u0639\u062F\u0646\u064A\u0629 \u062E\u0641\u064A\u0629" })
      },
      {
        image: "/assets/OFFICIALVOYAH/freeplus/images/img_32_02.png",
        title: textFor({ en: "Sport Carbon Accents", fr: "Accents Carbone Sport", ar: "\u0644\u0645\u0633\u0627\u062A \u0643\u0631\u0628\u0648\u0646 \u0631\u064A\u0627\u0636\u064A\u0629" }),
        desc: textFor({ en: "Real carbon fiber trim elements throughout", fr: "\xC9l\xE9ments de finition en vrai fibre de carbone", ar: "\u0639\u0646\u0627\u0635\u0631 \u062A\u0634\u0637\u064A\u0628 \u0645\u0646 \u0623\u0644\u064A\u0627\u0641 \u0627\u0644\u0643\u0631\u0628\u0648\u0646 \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629" })
      },
      {
        image: "/assets/OFFICIALVOYAH/freeplus/images/img_32_03.png",
        title: textFor({ en: "Exclusive Badging", fr: "Badge Exclusif", ar: "\u0634\u0627\u0631\u0629 \u062D\u0635\u0631\u064A\u0629" }),
        desc: textFor({ en: "Limited edition Shadow badging and accents", fr: "Badge Shadow \xE9dition limit\xE9e et accents", ar: "\u0634\u0627\u0631\u0629 \u0634\u0627\u062F\u0648 \u0625\u0635\u062F\u0627\u0631 \u0645\u062D\u062F\u0648\u062F \u0648\u0644\u0645\u0633\u0627\u062A \u062E\u0627\u0635\u0629" })
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "free-plus-page" }, _attrs))} data-v-8cf2d3b5><section class="kv-section" id="hero" data-v-8cf2d3b5><div class="kv-bg" data-v-8cf2d3b5><img${ssrRenderAttr("src", _imports_0$a)} alt="Voyah Free+" class="kv-bg-img" loading="eager" fetchpriority="high" decoding="async" data-v-8cf2d3b5><div class="kv-overlay" data-v-8cf2d3b5></div></div><div class="kv-content" data-v-8cf2d3b5><img${ssrRenderAttr("src", _imports_1$7)} alt="Voyah Free+" class="kv-logo inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.3s" })}" loading="eager" fetchpriority="high" decoding="async" data-v-8cf2d3b5><p class="kv-slogan inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.4s" })}" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Redefine Your Journey", fr: "Red\xE9finissez Votre Voyage", ar: "\u0623\u0639\u062F \u062A\u0639\u0631\u064A\u0641 \u0631\u062D\u0644\u062A\u0643" }))}</p><div class="kv-btns inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.5s" })}" data-v-8cf2d3b5><button class="voyah-button voyah-button--more voyah-button--dark voyah-button--plain" data-v-8cf2d3b5><span class="voyah-button__text" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Book Test Drive", fr: "R\xE9server un Essai", ar: "\u0627\u062D\u062C\u0632 \u062A\u062C\u0631\u0628\u0629 \u0642\u064A\u0627\u062F\u0629" }))}</span></button><button class="voyah-button voyah-button--more voyah-button--dark" data-v-8cf2d3b5><span class="voyah-button__text" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Order Now", fr: "Commander", ar: "\u0627\u0637\u0644\u0628 \u0627\u0644\u0622\u0646" }))}</span></button></div></div></section><div class="${ssrRenderClass([{ visible: showMobileNav.value }, "car-nav-wap fixed-nav"])}" data-v-8cf2d3b5><ul class="car-nav-list" data-v-8cf2d3b5><!--[-->`);
      ssrRenderList(chapterSections.value, (section, index) => {
        _push(`<li class="${ssrRenderClass([{ active: activeSection.value === index }, "car-nav-item"])}" data-v-8cf2d3b5><div class="car-nav-item_icon" data-v-8cf2d3b5><div class="icon-outer" data-v-8cf2d3b5></div><div class="icon-inner" data-v-8cf2d3b5></div></div><div class="car-nav-item_text" data-v-8cf2d3b5><p class="serial" data-v-8cf2d3b5>${ssrInterpolate(String(index + 1).padStart(2, "0"))}</p><p class="title" data-v-8cf2d3b5>${ssrInterpolate(section.title)}</p></div></li>`);
      });
      _push(`<!--]--></ul></div><nav class="${ssrRenderClass([{ visible: showSideNav.value }, "side-nav"])}" data-v-8cf2d3b5><div class="nav-line" data-v-8cf2d3b5><div class="nav-progress" style="${ssrRenderStyle({ height: navProgress.value + "%" })}" data-v-8cf2d3b5></div></div><ul class="nav-dots" data-v-8cf2d3b5><!--[-->`);
      ssrRenderList(chapterSections.value, (section, index) => {
        _push(`<li class="${ssrRenderClass([{ active: activeSection.value === index }, "nav-dot"])}" data-v-8cf2d3b5><span class="dot-number" data-v-8cf2d3b5>${ssrInterpolate(String(index + 1).padStart(2, "0"))}</span><span class="dot-title" data-v-8cf2d3b5>${ssrInterpolate(section.shortTitle || section.title)}</span></li>`);
      });
      _push(`<!--]--></ul></nav><section id="section1" class="level-one" targetindex="0" data-v-8cf2d3b5><div class="section-bg" style="${ssrRenderStyle({ backgroundImage: `url('/assets/OFFICIALVOYAH/freeplus/images/img_01_1920.png')` })}" data-v-8cf2d3b5></div><div class="section-content" data-v-8cf2d3b5><h2 class="title inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.3s" })}" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "HarmonyOS Smart Cockpit", fr: "Cockpit Intelligent HarmonyOS", ar: "\u0645\u0642\u0635\u0648\u0631\u0629 \u0647\u0627\u0631\u0645\u0648\u0646\u064A \u0623\u0648 \u0625\u0633 \u0627\u0644\u0630\u0643\u064A\u0629" }))}</h2><p class="subTitle inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.4s" })}" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Seamless intelligent connectivity", fr: "Connectivit\xE9 intelligente fluide", ar: "\u0627\u062A\u0635\u0627\u0644 \u0630\u0643\u064A \u0633\u0644\u0633" }))}</p></div></section><section id="harmony-features" class="common commonMax" targetindex="0" data-v-8cf2d3b5><h3 class="title inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.3s" })}" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Smart Features", fr: "Fonctions Intelligentes", ar: "\u0627\u0644\u0645\u064A\u0632\u0627\u062A \u0627\u0644\u0630\u0643\u064A\u0629" }))}</h3><div class="swiper-container" data-v-8cf2d3b5><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translateX(-${currentSlide.value.harmony * 100}%)` })}" data-v-8cf2d3b5><!--[-->`);
      ssrRenderList(harmonySlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-8cf2d3b5><div class="img-container" data-v-8cf2d3b5><img${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", slide.title)} class="slide-img" data-v-8cf2d3b5></div><div class="desc-wrap" data-v-8cf2d3b5><p class="desc-title" data-v-8cf2d3b5>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-8cf2d3b5>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.4s" })}" data-v-8cf2d3b5><!--[-->`);
      ssrRenderList(harmonySlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.harmony === idx }, "pagination-bullet"])}" data-v-8cf2d3b5></div>`);
      });
      _push(`<!--]--></div><div class="description-pagination-wrap inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.5s" })}" data-v-8cf2d3b5><div class="description-list" data-v-8cf2d3b5><!--[-->`);
      ssrRenderList(harmonySlides.value, (slide, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.harmony === idx }, "description-item"])}" data-v-8cf2d3b5><p class="description-title" data-v-8cf2d3b5>${ssrInterpolate(slide.title)}</p></div>`);
      });
      _push(`<!--]--></div><p class="description-content" data-v-8cf2d3b5>${ssrInterpolate(harmonySlides.value[currentSlide.value.harmony].desc)}</p></div></section><section id="section2" class="level-one" targetindex="0" data-v-8cf2d3b5><div class="section-bg" style="${ssrRenderStyle({ backgroundImage: `url('/assets/OFFICIALVOYAH/freeplus/images/img_06_01.png')` })}" data-v-8cf2d3b5></div><div class="section-content" data-v-8cf2d3b5><h2 class="title inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.3s" })}" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Huawei ADS 3.0", fr: "Huawei ADS 3.0", ar: "\u0646\u0638\u0627\u0645 \u0647\u0648\u0627\u0648\u064A ADS 3.0" }))}</h2><p class="subTitle inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.4s" })}" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Safer smarter autonomous driving", fr: "Conduite autonome plus s\xFBre et intelligente", ar: "\u0642\u064A\u0627\u062F\u0629 \u0630\u0627\u062A\u064A\u0629 \u0623\u0643\u062B\u0631 \u0623\u0645\u0627\u0646\u0627\u064B \u0648\u0630\u0643\u0627\u0621\u064B" }))}</p></div></section><section id="ads-features" class="common" targetindex="0" data-v-8cf2d3b5><h3 class="title inview-child" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Advanced Driving Assistance", fr: "Assistance Avanc\xE9e \xE0 la Conduite", ar: "\u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0627\u0644\u0645\u062A\u0642\u062F\u0645\u0629" }))}</h3><div class="single-img-container inview-child" data-v-8cf2d3b5><img${ssrRenderAttr("src", _imports_2$5)} alt="ADS Features" class="single-img" data-v-8cf2d3b5></div><div class="single-description inview-child features-grid" data-v-8cf2d3b5><div class="description-item" data-v-8cf2d3b5><p class="description-title" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "NCA Smart Navigation", fr: "Navigation Intelligente NCA", ar: "\u0645\u0644\u0627\u062D\u0629 NCA \u0627\u0644\u0630\u0643\u064A\u0629" }))}</p><p class="description-content" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Navigate complex scenarios with ease", fr: "Naviguez facilement dans les sc\xE9narios complexes", ar: "\u062A\u0646\u0642\u0644 \u0628\u0633\u0647\u0648\u0644\u0629 \u0641\u064A \u0627\u0644\u0633\u064A\u0646\u0627\u0631\u064A\u0648\u0647\u0627\u062A \u0627\u0644\u0645\u0639\u0642\u062F\u0629" }))}</p></div><div class="description-item" data-v-8cf2d3b5><p class="description-title" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Full-Scene Parking", fr: "Stationnement Toute Sc\xE8ne", ar: "\u0631\u0643\u0646 \u0641\u064A \u062C\u0645\u064A\u0639 \u0627\u0644\u0633\u064A\u0646\u0627\u0631\u064A\u0648\u0647\u0627\u062A" }))}</p><p class="description-content" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Automatic parking in any scenario", fr: "Stationnement automatique dans toutes les situations", ar: "\u0631\u0643\u0646 \u062A\u0644\u0642\u0627\u0626\u064A \u0641\u064A \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0627\u0644\u0627\u062A" }))}</p></div></div></section><section id="section3" class="level-one" targetindex="0" data-v-8cf2d3b5><div class="section-bg" style="${ssrRenderStyle({ backgroundImage: `url('/assets/OFFICIALVOYAH/freeplus/images/img_03_1920.png')` })}" data-v-8cf2d3b5></div><div class="section-content" data-v-8cf2d3b5><h2 class="title inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.3s" })}" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Avant-Garde Design", fr: "Design Avant-Garde", ar: "\u062A\u0635\u0645\u064A\u0645 \u0637\u0644\u064A\u0639\u064A" }))}</h2><p class="subTitle inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.4s" })}" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Mech aesthetics DNA", fr: "ADN esth\xE9tique m\xE9canique", ar: "\u0627\u0644\u062C\u0645\u0627\u0644\u064A\u0627\u062A \u0627\u0644\u0645\u064A\u0643\u0627\u0646\u064A\u0643\u064A\u0629" }))}</p></div></section><section id="exterior-features" class="common commonMax" targetindex="0" data-v-8cf2d3b5><h3 class="title inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.3s" })}" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Exterior Highlights", fr: "Points Forts Ext\xE9rieurs", ar: "\u0645\u0645\u064A\u0632\u0627\u062A \u0627\u0644\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u062E\u0627\u0631\u062C\u064A" }))}</h3><div class="swiper-container" data-v-8cf2d3b5><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translateX(-${currentSlide.value.exterior * 100}%)` })}" data-v-8cf2d3b5><!--[-->`);
      ssrRenderList(exteriorSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-8cf2d3b5><div class="img-container" data-v-8cf2d3b5><img${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", slide.title)} class="slide-img" data-v-8cf2d3b5></div><div class="desc-wrap" data-v-8cf2d3b5><p class="desc-title" data-v-8cf2d3b5>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-8cf2d3b5>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.4s" })}" data-v-8cf2d3b5><!--[-->`);
      ssrRenderList(exteriorSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.exterior === idx }, "pagination-bullet"])}" data-v-8cf2d3b5></div>`);
      });
      _push(`<!--]--></div><div class="description-pagination-wrap inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.5s" })}" data-v-8cf2d3b5><div class="description-list" data-v-8cf2d3b5><!--[-->`);
      ssrRenderList(exteriorSlides.value, (slide, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.exterior === idx }, "description-item"])}" data-v-8cf2d3b5><p class="description-title" data-v-8cf2d3b5>${ssrInterpolate(slide.title)}</p></div>`);
      });
      _push(`<!--]--></div><p class="description-content" data-v-8cf2d3b5>${ssrInterpolate(exteriorSlides.value[currentSlide.value.exterior].desc)}</p></div></section><section id="section4" class="level-one" targetindex="0" data-v-8cf2d3b5><div class="section-bg" style="${ssrRenderStyle({ backgroundImage: `url('/assets/OFFICIALVOYAH/freeplus/images/img_13_01.png')` })}" data-v-8cf2d3b5></div><div class="section-content" data-v-8cf2d3b5><h2 class="title inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.3s" })}" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Luxury Interior", fr: "Int\xE9rieur de Luxe", ar: "\u0645\u0642\u0635\u0648\u0631\u0629 \u0641\u0627\u062E\u0631\u0629" }))}</h2><p class="subTitle inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.4s" })}" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Immersive space experience", fr: "Exp\xE9rience spatiale immersive", ar: "\u062A\u062C\u0631\u0628\u0629 \u0641\u0636\u0627\u0626\u064A\u0629 \u063A\u0627\u0645\u0631\u0629" }))}</p></div></section><section id="interior-features" class="common commonMax" targetindex="0" data-v-8cf2d3b5><h3 class="title inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.3s" })}" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Interior Craftsmanship", fr: "Artisanat Int\xE9rieur", ar: "\u0627\u0644\u062D\u0631\u0641\u064A\u0629 \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u0629" }))}</h3><div class="swiper-container" data-v-8cf2d3b5><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translateX(-${currentSlide.value.interior * 100}%)` })}" data-v-8cf2d3b5><!--[-->`);
      ssrRenderList(interiorSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-8cf2d3b5><div class="img-container" data-v-8cf2d3b5><img${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", slide.title)} class="slide-img" data-v-8cf2d3b5></div><div class="desc-wrap" data-v-8cf2d3b5><p class="desc-title" data-v-8cf2d3b5>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-8cf2d3b5>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.4s" })}" data-v-8cf2d3b5><!--[-->`);
      ssrRenderList(interiorSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.interior === idx }, "pagination-bullet"])}" data-v-8cf2d3b5></div>`);
      });
      _push(`<!--]--></div><div class="description-pagination-wrap inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.5s" })}" data-v-8cf2d3b5><div class="description-list" data-v-8cf2d3b5><!--[-->`);
      ssrRenderList(interiorSlides.value, (slide, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.interior === idx }, "description-item"])}" data-v-8cf2d3b5><p class="description-title" data-v-8cf2d3b5>${ssrInterpolate(slide.title)}</p></div>`);
      });
      _push(`<!--]--></div><p class="description-content" data-v-8cf2d3b5>${ssrInterpolate(interiorSlides.value[currentSlide.value.interior].desc)}</p></div></section><section id="section5" class="level-one" targetindex="0" data-v-8cf2d3b5><div class="section-bg" style="${ssrRenderStyle({ backgroundImage: `url('/assets/OFFICIALVOYAH/freeplus/images/img_20_01.png')` })}" data-v-8cf2d3b5></div><div class="section-content" data-v-8cf2d3b5><h2 class="title inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.3s" })}" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Exceptional Performance", fr: "Performance Exceptionnelle", ar: "\u0623\u062F\u0627\u0621 \u0627\u0633\u062A\u062B\u0646\u0627\u0626\u064A" }))}</h2><p class="subTitle inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.4s" })}" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Power meets efficiency", fr: "Puissance et efficacit\xE9", ar: "\u0627\u0644\u0642\u0648\u0629 \u062A\u0644\u062A\u0642\u064A \u0628\u0627\u0644\u0643\u0641\u0627\u0621\u0629" }))}</p></div></section><section id="performance-features" class="common" targetindex="0" data-v-8cf2d3b5><div class="single-img-container inview-child" data-v-8cf2d3b5><img${ssrRenderAttr("src", _imports_3$5)} alt="Premium Comfort" class="single-img inview-child" loading="lazy" decoding="async" data-v-8cf2d3b5></div><div class="single-description inview-child features-grid" data-v-8cf2d3b5><div class="description-item" data-v-8cf2d3b5><p class="description-title" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Dual Motor 4WD", fr: "4WD Double Moteur", ar: "\u062F\u0641\u0639 \u0631\u0628\u0627\u0639\u064A \u0628\u0645\u062D\u0631\u0643\u064A\u0646" }))}</p><p class="description-content" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "360kW total power output", fr: "360kW de puissance totale", ar: "360 \u0643\u064A\u0644\u0648\u0648\u0627\u0637 \u0642\u0648\u0629 \u0625\u062C\u0645\u0627\u0644\u064A\u0629" }))}</p></div><div class="description-item" data-v-8cf2d3b5><p class="description-title" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "4.5s 0-100km/h", fr: "0-100km/h en 4.5s", ar: "0-100 \u0643\u0645/\u0633 \u0641\u064A 4.5 \u062B\u0627\u0646\u064A\u0629" }))}</p><p class="description-content" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Lightning fast acceleration", fr: "Acc\xE9l\xE9ration \xE9clair", ar: "\u062A\u0633\u0627\u0631\u0639 \u0643\u0627\u0644\u0628\u0631\u0642" }))}</p></div></div></section><section id="section6" class="level-one" targetindex="0" data-v-8cf2d3b5><div class="section-bg" style="${ssrRenderStyle({ backgroundImage: `url('/assets/OFFICIALVOYAH/freeplus/images/img_23_01.png')` })}" loading="lazy" decoding="async" data-v-8cf2d3b5></div><div class="section-content" data-v-8cf2d3b5><h2 class="title inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.3s" })}" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Endless Range", fr: "Autonomie Illimit\xE9e", ar: "\u0645\u062F\u0649 \u0644\u0627 \u0646\u0647\u0627\u0626\u064A" }))}</h2><p class="subTitle inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.4s" })}" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "318km pure electric range", fr: "318km d'autonomie \xE9lectrique pure", ar: "318 \u0643\u0645 \u0645\u062F\u0649 \u0643\u0647\u0631\u0628\u0627\u0626\u064A \u0646\u0642\u064A" }))}</p></div></section><section id="range-features" class="common commonMax" targetindex="0" data-v-8cf2d3b5><div class="swiper-container" data-v-8cf2d3b5><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translateX(-${currentSlide.value.range * 100}%)` })}" data-v-8cf2d3b5><!--[-->`);
      ssrRenderList(rangeSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-8cf2d3b5><div class="img-container" data-v-8cf2d3b5><img${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", slide.title)} class="slide-img" loading="lazy" decoding="async" data-v-8cf2d3b5></div><div class="desc-wrap" data-v-8cf2d3b5><p class="desc-title" data-v-8cf2d3b5>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-8cf2d3b5>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination inview-child" data-v-8cf2d3b5><!--[-->`);
      ssrRenderList(rangeSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.range === idx }, "pagination-bullet"])}" data-v-8cf2d3b5></div>`);
      });
      _push(`<!--]--></div><div class="description-pagination-wrap inview-child" data-v-8cf2d3b5><div class="description-list" data-v-8cf2d3b5><!--[-->`);
      ssrRenderList(rangeSlides.value, (slide, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.range === idx }, "description-item"])}" data-v-8cf2d3b5><p class="description-title" data-v-8cf2d3b5>${ssrInterpolate(slide.title)}</p></div>`);
      });
      _push(`<!--]--></div><p class="description-content" data-v-8cf2d3b5>${ssrInterpolate(rangeSlides.value[currentSlide.value.range].desc)}</p></div></section><section id="section7" class="level-one" targetindex="0" data-v-8cf2d3b5><div class="section-bg" style="${ssrRenderStyle({ backgroundImage: `url('/assets/OFFICIALVOYAH/freeplus/images/img_25_1920.png')` })}" loading="lazy" decoding="async" data-v-8cf2d3b5></div><div class="section-content" data-v-8cf2d3b5><h2 class="title inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.3s" })}" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Magic Carpet Chassis", fr: "Ch\xE2ssis Tapis Magique", ar: "\u0647\u064A\u0643\u0644 \u0627\u0644\u0633\u062C\u0627\u062F\u0629 \u0627\u0644\u0633\u062D\u0631\u064A\u0629" }))}</h2><p class="subTitle inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.4s" })}" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Supreme comfort and control", fr: "Confort et contr\xF4le supr\xEAmes", ar: "\u0631\u0627\u062D\u0629 \u0648\u062A\u062D\u0643\u0645 \u0641\u0627\u0626\u0642\u064A\u0646" }))}</p></div></section><section id="chassis-features" class="common" targetindex="0" data-v-8cf2d3b5><div class="single-img-container inview-child" data-v-8cf2d3b5><img${ssrRenderAttr("src", _imports_4$4)} alt="Chassis" class="single-img" loading="lazy" decoding="async" data-v-8cf2d3b5></div><div class="single-description inview-child features-grid" data-v-8cf2d3b5><div class="description-item" data-v-8cf2d3b5><p class="description-title" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "100mm Air Suspension", fr: "Suspension Pneumatique 100mm", ar: "\u062A\u0639\u0644\u064A\u0642 \u0647\u0648\u0627\u0626\u064A 100 \u0645\u0645" }))}</p><p class="description-content" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "4 modes height adjustable", fr: "4 modes de hauteur r\xE9glable", ar: "4 \u0623\u0648\u0636\u0627\u0639 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u0639\u062F\u064A\u0644" }))}</p></div><div class="description-item" data-v-8cf2d3b5><p class="description-title" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "CDC Continuous Damping", fr: "Amortissement Continu CDC", ar: "\u062A\u062E\u0645\u064A\u062F \u0645\u0633\u062A\u0645\u0631 CDC" }))}</p><p class="description-content" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Real-time road adaptation", fr: "Adaptation en temps r\xE9el \xE0 la route", ar: "\u062A\u0643\u064A\u0641 \u0641\u0648\u0631\u064A \u0645\u0639 \u0627\u0644\u0637\u0631\u064A\u0642" }))}</p></div></div></section><section id="section8" class="level-one" targetindex="0" data-v-8cf2d3b5><div class="section-bg" style="${ssrRenderStyle({ backgroundImage: `url('/assets/OFFICIALVOYAH/freeplus/images/img_28_1920.png')` })}" loading="lazy" decoding="async" data-v-8cf2d3b5></div><div class="section-content" data-v-8cf2d3b5><h2 class="title inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.3s" })}" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "All-Round Safety", fr: "S\xE9curit\xE9 Totale", ar: "\u0633\u0644\u0627\u0645\u0629 \u0634\u0627\u0645\u0644\u0629" }))}</h2><p class="subTitle inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.4s" })}" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "C-NCAP 5-Star Protection", fr: "Protection 5 \xC9toiles C-NCAP", ar: "\u062D\u0645\u0627\u064A\u0629 5 \u0646\u062C\u0648\u0645 C-NCAP" }))}</p></div></section><section id="safety-features" class="common" targetindex="0" data-v-8cf2d3b5><div class="single-img-container inview-child" data-v-8cf2d3b5><img${ssrRenderAttr("src", _imports_5$3)} alt="Safety" class="single-img" loading="lazy" decoding="async" data-v-8cf2d3b5></div><div class="single-description inview-child features-grid" data-v-8cf2d3b5><div class="description-item" data-v-8cf2d3b5><p class="description-title" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "AEB Emergency Braking", fr: "Freinage d'Urgence AEB", ar: "\u0641\u0631\u0645\u0644\u0629 \u0637\u0627\u0631\u0626\u0629 AEB" }))}</p><p class="description-content" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Active safety up to 130km/h", fr: "S\xE9curit\xE9 active jusqu'\xE0 130km/h", ar: "\u0633\u0644\u0627\u0645\u0629 \u0646\u0634\u0637\u0629 \u062D\u062A\u0649 130 \u0643\u0645/\u0633" }))}</p></div><div class="description-item" data-v-8cf2d3b5><p class="description-title" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "2000MPa Body", fr: "Carrosserie 2000MPa", ar: "\u0647\u064A\u0643\u0644 2000 \u0645\u064A\u062C\u0627 \u0628\u0627\u0633\u0643\u0627\u0644" }))}</p><p class="description-content" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Submarine-grade protection", fr: "Protection niveau sous-marin", ar: "\u062D\u0645\u0627\u064A\u0629 \u0639\u0644\u0649 \u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u063A\u0648\u0627\u0635\u0627\u062A" }))}</p></div></div></section><section id="custom-edition" class="common commonMax" targetindex="0" data-v-8cf2d3b5><h3 class="title inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.3s" })}" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Shadow Edition", fr: "\xC9dition Shadow", ar: "\u0646\u0633\u062E\u0629 \u0634\u0627\u062F\u0648" }))}</h3><p class="subTitle inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.4s" })}" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Stealth aesthetics ultimate sportiness", fr: "Esth\xE9tique furtive ultime sportivit\xE9", ar: "\u062C\u0645\u0627\u0644\u064A\u0629 \u062E\u0641\u064A\u0629 \u0631\u064A\u0627\u0636\u064A\u0629 \u0642\u0635\u0648\u0649" }))}</p><div class="swiper-container" data-v-8cf2d3b5><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translateX(-${currentSlide.value.custom * 100}%)` })}" data-v-8cf2d3b5><!--[-->`);
      ssrRenderList(customSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-8cf2d3b5><div class="img-container" data-v-8cf2d3b5><img${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", slide.title)} class="slide-img" data-v-8cf2d3b5></div><div class="desc-wrap" data-v-8cf2d3b5><p class="desc-title" data-v-8cf2d3b5>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-8cf2d3b5>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.4s" })}" data-v-8cf2d3b5><!--[-->`);
      ssrRenderList(customSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.custom === idx }, "pagination-bullet"])}" data-v-8cf2d3b5></div>`);
      });
      _push(`<!--]--></div><div class="description-pagination-wrap inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.5s" })}" data-v-8cf2d3b5><div class="description-list" data-v-8cf2d3b5><!--[-->`);
      ssrRenderList(customSlides.value, (slide, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.custom === idx }, "description-item"])}" data-v-8cf2d3b5><p class="description-title" data-v-8cf2d3b5>${ssrInterpolate(slide.title)}</p></div>`);
      });
      _push(`<!--]--></div><p class="description-content" data-v-8cf2d3b5>${ssrInterpolate(customSlides.value[currentSlide.value.custom].desc)}</p></div></section><section class="level-one" id="cta" data-v-8cf2d3b5><div class="section-bg" style="${ssrRenderStyle({ backgroundImage: `url('/assets/OFFICIALVOYAH/freeplus/images/img_38_01.png')` })}" data-v-8cf2d3b5></div><div class="section-content" data-v-8cf2d3b5><h2 class="title inview-child inview-animated" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Experience Voyah Free+", fr: "D\xE9couvrez le Voyah Free+", ar: "\u062C\u0631\u0628 Voyah Free+" }))}</h2><p class="subTitle inview-child inview-animated" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Book a test drive today", fr: "R\xE9servez un essai aujourd'hui", ar: "\u0627\u062D\u062C\u0632 \u062A\u062C\u0631\u0628\u0629 \u0642\u064A\u0627\u062F\u0629 \u0627\u0644\u064A\u0648\u0645" }))}</p><div class="kv-btns inview-child inview-animated" data-v-8cf2d3b5><button class="voyah-button voyah-button--more voyah-button--dark voyah-button--plain" data-v-8cf2d3b5><span class="voyah-button__text" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Book Test Drive", fr: "R\xE9server un Essai", ar: "\u0627\u062D\u062C\u0632 \u062A\u062C\u0631\u0628\u0629 \u0642\u064A\u0627\u062F\u0629" }))}</span></button><button class="voyah-button voyah-button--more voyah-button--dark" data-v-8cf2d3b5><span class="voyah-button__text" data-v-8cf2d3b5>${ssrInterpolate(unref(textFor)({ en: "Order Now", fr: "Commander", ar: "\u0627\u0637\u0644\u0628 \u0627\u0644\u0622\u0646" }))}</span></button></div></div></section></div>`);
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vehicles/free/FreePlusPage.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const FreePlusPage = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-8cf2d3b5"]]);
const _imports_0$9 = publicAssetsURL("/assets/OFFICIALVOYAH/newcourage/images/sc_1.jpg");
const _imports_1$6 = publicAssetsURL("/assets/OFFICIALVOYAH/newcourage/images/newCourage.png");
const _imports_2$4 = publicAssetsURL("/assets/OFFICIALVOYAH/newcourage/images/sc_4.jpg");
const _imports_3$4 = publicAssetsURL("/assets/OFFICIALVOYAH/newcourage/images/sc_6.jpg");
const _imports_4$3 = publicAssetsURL("/assets/OFFICIALVOYAH/newcourage/images/sc_8.jpg");
const _imports_5$2 = publicAssetsURL("/assets/OFFICIALVOYAH/newcourage/images/sc_13.jpg");
const _imports_6$2 = publicAssetsURL("/assets/OFFICIALVOYAH/newcourage/images/sc_19.jpg");
const _imports_7$2 = publicAssetsURL("/assets/OFFICIALVOYAH/newcourage/images/sc_21.jpg");
const _imports_8$2 = publicAssetsURL("/assets/OFFICIALVOYAH/newcourage/images/sc_35.jpg");
const _imports_9$2 = publicAssetsURL("/assets/OFFICIALVOYAH/newcourage/images/sc_40.jpg");
const _imports_10$2 = publicAssetsURL("/assets/OFFICIALVOYAH/newcourage/images/sc_41.jpg");
const _imports_11$2 = publicAssetsURL("/assets/OFFICIALVOYAH/newcourage/images/sc_42.jpg");
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "NewCouragePage",
  __ssrInlineRender: true,
  setup(__props) {
    const { textFor } = useSiteContent();
    const activeSection = ref(0);
    const showMobileNav = ref(false);
    const currentSlide = ref({
      gallery: 0,
      exterior: 0,
      interior: 0,
      parking: 0,
      charging: 0
    });
    const currentColor = ref(0);
    const chapterSections = computed(() => [
      { id: "section1", title: textFor({ en: "Warm Home", fr: "Maison Chaleureuse", ar: "\u0627\u0644\u0645\u0646\u0632\u0644 \u0627\u0644\u062F\u0627\u0641\u0626" }) },
      { id: "section3", title: textFor({ en: "Fun Home", fr: "Maison Amusante", ar: "\u0627\u0644\u0645\u0646\u0632\u0644 \u0627\u0644\u0645\u0645\u062A\u0639" }) },
      { id: "section4", title: textFor({ en: "Smart Home", fr: "Maison Intelligente", ar: "\u0627\u0644\u0645\u0646\u0632\u0644 \u0627\u0644\u0630\u0643\u064A" }) },
      { id: "section5", title: textFor({ en: "Efficient Home", fr: "Maison Efficace", ar: "\u0627\u0644\u0645\u0646\u0632\u0644 \u0627\u0644\u0643\u0641\u0624" }) },
      { id: "section6", title: textFor({ en: "Safe Home", fr: "Maison S\xFBre", ar: "\u0627\u0644\u0645\u0646\u0632\u0644 \u0627\u0644\u0622\u0645\u0646" }) }
    ]);
    const gallerySlides = computed(() => [
      {
        image: "/assets/OFFICIALVOYAH/newcourage/images/swiper_01_0001.jpg",
        text: textFor({ en: "Spacious space, enjoyment for the whole family", fr: "Espace spacieux, plaisir pour toute la famille", ar: "\u0645\u0633\u0627\u062D\u0629 \u0648\u0627\u0633\u0639\u0629\u060C \u0645\u062A\u0639\u0629 \u0644\u0644\u0639\u0627\u0626\u0644\u0629 \u0628\u0623\u0643\u0645\u0644\u0647\u0627" }),
        specs: [
          { value: "4810mm", label: textFor({ en: "Length", fr: "Longueur", ar: "\u0627\u0644\u0637\u0648\u0644" }) },
          { value: "1900mm", label: textFor({ en: "Width", fr: "Largeur", ar: "\u0627\u0644\u0639\u0631\u0636" }) },
          { value: "1636mm", label: textFor({ en: "Height", fr: "Hauteur", ar: "\u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639" }) },
          { value: "2925mm", label: textFor({ en: "Wheelbase", fr: "Empattement", ar: "\u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0639\u062C\u0644\u0627\u062A" }) }
        ]
      },
      {
        image: "/assets/OFFICIALVOYAH/newcourage/images/swiper_01_0002.jpg",
        text: textFor({ en: "Complete comfort, freedom at will", fr: "Confort complet, libert\xE9 \xE0 volont\xE9", ar: "\u0631\u0627\u062D\u0629 \u0643\u0627\u0645\u0644\u0629\u060C \u062D\u0631\u064A\u0629 \u0639\u0644\u0649 \u0627\u0644\u0625\u0631\u0627\u062F\u0629" }),
        specs: [
          { value: textFor({ en: "Zero-gravity seat", fr: "Si\xE8ge z\xE9ro-gravit\xE9", ar: "\u0645\u0642\u0639\u062F \u0628\u0644\u0627 \u062C\u0627\u0630\u0628\u064A\u0629" }), label: textFor({ en: "Passenger", fr: "Passager", ar: "\u0627\u0644\u0631\u0627\u0643\u0628" }) },
          { value: textFor({ en: "4-seat ventilation/heating", fr: "Ventilation/chauffage 4 places", ar: "\u062A\u0647\u0648\u064A\u0629/\u062A\u0633\u062E\u064A\u0646 4 \u0645\u0642\u0627\u0639\u062F" }), label: textFor({ en: "Front massage", fr: "Massage avant", ar: "\u062A\u062F\u0644\u064A\u0643 \u0623\u0645\u0627\u0645\u064A" }) },
          { value: textFor({ en: "Dual-zone fridge", fr: "R\xE9frig\xE9rateur double zone", ar: "\u062B\u0644\u0627\u062C\u0629 \u062B\u0646\u0627\u0626\u064A\u0629 \u0627\u0644\u0645\u0646\u0627\u0637\u0642" }), label: textFor({ en: "Center console", fr: "Console centrale", ar: "\u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 \u0627\u0644\u0645\u0631\u0643\u0632\u064A\u0629" }) },
          { value: "VOYAH Sound", label: textFor({ en: "Theater audio", fr: "Audio th\xE9\xE2tre", ar: "\u0635\u0648\u062A \u0627\u0644\u0645\u0633\u0631\u062D" }) }
        ]
      },
      {
        image: "/assets/OFFICIALVOYAH/newcourage/images/swiper_01_0003.jpg",
        text: textFor({ en: "Smart technology, silky smooth", fr: "Technologie intelligente, douce comme la soie", ar: "\u062A\u0642\u0646\u064A\u0629 \u0630\u0643\u064A\u0629\u060C \u0646\u0627\u0639\u0645\u0629 \u0643\u0627\u0644\u062D\u0631\u064A\u0631" }),
        specs: [
          { value: "HarmonySpace 5", label: textFor({ en: "Super desktop 2.0", fr: "Super bureau 2.0", ar: "\u0633\u0637\u062D \u0645\u0643\u062A\u0628 \u0633\u0648\u0628\u0631 2.0" }) },
          { value: "Huawei ADS4", label: textFor({ en: "192-line LiDAR", fr: "LiDAR 192 lignes", ar: "\u0644\u064A\u062F\u0627\u0631 192 \u062E\u0637" }) }
        ]
      },
      {
        image: "/assets/OFFICIALVOYAH/newcourage/images/swiper_01_0005.jpg",
        text: textFor({ en: "Full-capability 3-electric, efficiency first", fr: "3-\xE9lectrique complet, efficacit\xE9 d'abord", ar: "\u062B\u0644\u0627\u062B\u064A \u0643\u0647\u0631\u0628\u0627\u0626\u064A \u0643\u0627\u0645\u0644\u060C \u0627\u0644\u0643\u0641\u0627\u0621\u0629 \u0623\u0648\u0644\u0627\u064B" }),
        specs: [
          { value: "901km", label: textFor({ en: "CLTC range", fr: "Autonomie CLTC", ar: "\u0645\u062F\u0649 CLTC" }) },
          { value: "800V", label: textFor({ en: "Full-domain SiC", fr: "SiC tout domaine", ar: "SiC \u0643\u0644 \u0627\u0644\u0645\u062C\u0627\u0644\u0627\u062A" }) },
          { value: "5C", label: textFor({ en: "Super fast charging", fr: "Recharge ultra-rapide", ar: "\u0634\u062D\u0646 \u0641\u0627\u0626\u0642 \u0627\u0644\u0633\u0631\u0639\u0629" }) },
          { value: "15min", label: textFor({ en: "515km charging", fr: "515km de recharge", ar: "515 \u0643\u0645 \u0634\u062D\u0646" }) }
        ]
      }
    ]);
    const exteriorSlides = computed(() => [
      {
        image: "/assets/OFFICIALVOYAH/newcourage/images/sc_6.jpg",
        title: textFor({ en: "Sky Mirror Side Body", fr: "Flanc Miroir C\xE9leste", ar: "\u062C\u0633\u0645 \u062C\u0627\u0646\u0628\u064A \u0645\u0631\u0622\u0629 \u0627\u0644\u0633\u0645\u0627\u0621" }),
        desc: textFor({ en: "Clean curved surfaces, smooth lines, exquisite and premium", fr: "Surfaces courbes propres, lignes fluides, exquis et premium", ar: "\u0623\u0633\u0637\u062D \u0645\u0646\u062D\u0646\u064A\u0629 \u0646\u0638\u064A\u0641\u0629\u060C \u062E\u0637\u0648\u0637 \u0633\u0644\u0633\u0629\u060C \u0631\u0627\u0642\u064A\u0629 \u0648\u0641\u0627\u062E\u0631\u0629" })
      },
      {
        image: "/assets/OFFICIALVOYAH/newcourage/images/sc_6-2.jpg",
        title: textFor({ en: "Star Ring OLED Tail Light", fr: "Feu Arri\xE8re OLED Anneau Stellaire", ar: "\u0636\u0648\u0621 \u062E\u0644\u0641\u064A OLED \u062D\u0644\u0642\u0629 \u0627\u0644\u0646\u062C\u0648\u0645" }),
        desc: textFor({ en: "Three-dimensional personality, bright and eye-catching, always guarding rear safety", fr: "Personnalit\xE9 tridimensionnelle, lumineux et accrocheur, gardien de la s\xE9curit\xE9 arri\xE8re", ar: "\u0634\u062E\u0635\u064A\u0629 \u062B\u0644\u0627\u062B\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F\u060C \u0645\u0634\u0631\u0642 \u0648\u062C\u0630\u0627\u0628\u060C \u062D\u0627\u0631\u0633 \u0627\u0644\u0623\u0645\u0627\u0646 \u0627\u0644\u062E\u0644\u0641\u064A" })
      },
      {
        image: "/assets/OFFICIALVOYAH/newcourage/images/sc_6-3.jpg",
        title: textFor({ en: "ADAS Blue Indicator", fr: "Indicateur Bleu ADAS", ar: "\u0645\u0624\u0634\u0631 ADAS \u0627\u0644\u0623\u0632\u0631\u0642" }),
        desc: textFor({ en: "ADAS status clearly visible, driving more controllable", fr: "\xC9tat ADAS clairement visible, conduite plus contr\xF4lable", ar: "\u062D\u0627\u0644\u0629 ADAS \u0648\u0627\u0636\u062D\u0629\u060C \u0642\u064A\u0627\u062F\u0629 \u0623\u0643\u062B\u0631 \u062A\u062D\u0643\u0645\u064B\u0627" })
      }
    ]);
    const carColors = computed(() => [
      { name: textFor({ en: "Champagne Gold", fr: "Or Champagne", ar: "\u0630\u0647\u0628\u064A \u0634\u0627\u0645\u0628\u0627\u0646\u064A\u0627" }), icon: "/assets/OFFICIALVOYAH/newcourage/images/icon1.png", carImage: "/assets/OFFICIALVOYAH/newcourage/images/swpier_h37b_00.png" },
      { name: textFor({ en: "Moonlight Cyan", fr: "Cyan Clair de Lune", ar: "\u0633\u064A\u0627\u0646 \u0636\u0648\u0621 \u0627\u0644\u0642\u0645\u0631" }), icon: "/assets/OFFICIALVOYAH/newcourage/images/icon2.png", carImage: "/assets/OFFICIALVOYAH/newcourage/images/swpier_h37b_01.png" },
      { name: textFor({ en: "Storm Pink", fr: "Rose Temp\xEAte", ar: "\u0648\u0631\u062F\u064A \u0639\u0627\u0635\u0641\u0629" }), icon: "/assets/OFFICIALVOYAH/newcourage/images/icon3.png", carImage: "/assets/OFFICIALVOYAH/newcourage/images/swpier_h37b_02.png" },
      { name: textFor({ en: "Star Grey", fr: "Gris Stellaire", ar: "\u0631\u0645\u0627\u062F\u064A \u0627\u0644\u0646\u062C\u0648\u0645" }), icon: "/assets/OFFICIALVOYAH/newcourage/images/icon4.png", carImage: "/assets/OFFICIALVOYAH/newcourage/images/swpier_h37b_03.png" },
      { name: textFor({ en: "Mystic Black", fr: "Noir Mystique", ar: "\u0623\u0633\u0648\u062F \u063A\u0627\u0645\u0636" }), icon: "/assets/OFFICIALVOYAH/newcourage/images/icon5.png", carImage: "/assets/OFFICIALVOYAH/newcourage/images/swpier_h37b_04.png" },
      { name: textFor({ en: "Dew White", fr: "Blanc Ros\xE9e", ar: "\u0623\u0628\u064A\u0636 \u0627\u0644\u0646\u062F\u0649" }), icon: "/assets/OFFICIALVOYAH/newcourage/images/icon6.png", carImage: "/assets/OFFICIALVOYAH/newcourage/images/swpier_h37b_05.png" }
    ]);
    const interiorSlides = computed(() => [
      {
        image: "/assets/OFFICIALVOYAH/newcourage/images/sc_14.jpg",
        title: textFor({ en: "Firefly Ambient Lighting", fr: "\xC9clairage d'Ambiance Lucioles", ar: "\u0625\u0636\u0627\u0621\u0629 \u0645\u062D\u064A\u0637\u0629 \u0627\u0644\u064A\u0631\u0627\u0639\u0627\u062A" }),
        desc: textFor({ en: "64-color ambient lighting with customizable themes", fr: "\xC9clairage d'ambiance 64 couleurs avec th\xE8mes personnalisables", ar: "\u0625\u0636\u0627\u0621\u0629 \u0645\u062D\u064A\u0637\u0629 \u0628\u064064 \u0644\u0648\u0646 \u0645\u0639 \u0645\u0648\u0636\u0648\u0639\u0627\u062A \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u062E\u0635\u064A\u0635" })
      },
      {
        image: "/assets/OFFICIALVOYAH/newcourage/images/sc_15.jpg",
        title: textFor({ en: "Zero-Gravity Seats", fr: "Si\xE8ges Z\xE9ro-Gravit\xE9", ar: "\u0645\u0642\u0627\u0639\u062F \u0628\u0644\u0627 \u062C\u0627\u0630\u0628\u064A\u0629" }),
        desc: textFor({ en: "NASA-inspired ergonomic seating for ultimate comfort", fr: "Si\xE8ges ergonomiques inspir\xE9s de la NASA", ar: "\u0645\u0642\u0627\u0639\u062F \u0645\u0631\u064A\u062D\u0629 \u0645\u0633\u062A\u0648\u062D\u0627\u0629 \u0645\u0646 \u0646\u0627\u0633\u0627" })
      },
      {
        image: "/assets/OFFICIALVOYAH/newcourage/images/sc_16.jpg",
        title: textFor({ en: "Premium Materials", fr: "Mat\xE9riaux Premium", ar: "\u0645\u0648\u0627\u062F \u0641\u0627\u062E\u0631\u0629" }),
        desc: textFor({ en: "Nappa leather and sustainable materials throughout", fr: "Cuir Nappa et mat\xE9riaux durables partout", ar: "\u062C\u0644\u062F \u0646\u0627\u0628\u0627 \u0648\u0645\u0648\u0627\u062F \u0645\u0633\u062A\u062F\u0627\u0645\u0629 \u0641\u064A \u0643\u0644 \u0645\u0643\u0627\u0646" })
      }
    ]);
    const parkingSlides = computed(() => [
      {
        title: textFor({ en: "P2P 2.0 Parking", fr: "Stationnement P2P 2.0", ar: "\u0631\u0643\u0646 P2P 2.0" }),
        desc: textFor({ en: "Easy U-turn / Roundabout / Mixed traffic / ETC passage, full scenario from parking space to parking space", fr: "Demi-tour facile / Rond-point / Trafic mixte / Passage ETC, sc\xE9nario complet de place \xE0 place", ar: "\u062F\u0648\u0631\u0627\u0646 \u0633\u0647\u0644 / \u062F\u0648\u0627\u0631 / \u062D\u0631\u0643\u0629 \u0645\u062E\u062A\u0644\u0637\u0629 / \u0645\u0631\u0648\u0631 ETC\u060C \u0633\u064A\u0646\u0627\u0631\u064A\u0648 \u0643\u0627\u0645\u0644 \u0645\u0646 \u0645\u0648\u0642\u0641 \u0625\u0644\u0649 \u0645\u0648\u0642\u0641" })
      },
      {
        title: textFor({ en: "Smart Parking Assist", fr: "Assistance Stationnement Intelligent", ar: "\u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0631\u0643\u0646 \u0627\u0644\u0630\u0643\u064A\u0629" }),
        desc: textFor({ en: "Exit parking / Cross-level valet / Custom parking space / Trace reversing", fr: "Sortie stationnement / Voiturier inter-niveaux / Place personnalis\xE9e / Marche arri\xE8re trac\xE9e", ar: "\u062E\u0631\u0648\u062C \u0645\u0646 \u0627\u0644\u0631\u0643\u0646 / \u062E\u0627\u062F\u0645 \u0628\u064A\u0646 \u0627\u0644\u0637\u0648\u0627\u0628\u0642 / \u0645\u0648\u0642\u0641 \u0645\u062E\u0635\u0635 / \u062A\u0631\u062C\u064A\u0639 \u0645\u062A\u062A\u0628\u0639" })
      }
    ]);
    const chargingSlides = computed(() => [
      { title: textFor({ en: "81kWh CATL Battery", fr: "Batterie CATL 81kWh", ar: "\u0628\u0637\u0627\u0631\u064A\u0629 CATL 81 \u0643\u064A\u0644\u0648\u0648\u0627\u0637" }) },
      { title: textFor({ en: "20%-80% in 10 minutes", fr: "20%-80% en 10 minutes", ar: "20%-80% \u0641\u064A 10 \u062F\u0642\u0627\u0626\u0642" }) }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "new-courage-page" }, _attrs))} data-v-56ea8971><section class="kv-section" id="hero" data-v-56ea8971><div class="kv-bg" data-v-56ea8971><img${ssrRenderAttr("src", _imports_0$9)} alt="Voyah New Courage" class="kv-bg-img" data-v-56ea8971></div><div class="kv-content" data-v-56ea8971><img${ssrRenderAttr("src", _imports_1$6)} alt="Voyah New Courage" class="kv-logo inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.3s" })}" data-v-56ea8971><p class="kv-slogan inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.4s" })}" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Huawei ADS & HarmonyOS Cockpit Pure Electric SUV", fr: "SUV \xC9lectrique Huawei ADS & Cockpit HarmonyOS", ar: "\u0633\u064A\u0627\u0631\u0629 SUV \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 Huawei ADS \u0648 HarmonyOS" }))}</p><div class="kv-btns inview-child inview-animated" style="${ssrRenderStyle({ "--inview-delay": "0.5s" })}" data-v-56ea8971><button class="voyah-button voyah-button--more voyah-button--dark voyah-button--plain" data-v-56ea8971><span class="voyah-button__text" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Book Test Drive", fr: "R\xE9server un Essai", ar: "\u0627\u062D\u062C\u0632 \u062A\u062C\u0631\u0628\u0629 \u0642\u064A\u0627\u062F\u0629" }))}</span></button><button class="voyah-button voyah-button--more voyah-button--dark" data-v-56ea8971><span class="voyah-button__text" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Order Now", fr: "Commander", ar: "\u0627\u0637\u0644\u0628 \u0627\u0644\u0622\u0646" }))}</span></button></div></div></section><div class="${ssrRenderClass([{ visible: showMobileNav.value }, "car-nav-wap fixed-nav"])}" data-v-56ea8971><ul class="car-nav-list" data-v-56ea8971><!--[-->`);
      ssrRenderList(chapterSections.value, (section, index) => {
        _push(`<li class="${ssrRenderClass([{ active: activeSection.value === index }, "car-nav-item"])}" data-v-56ea8971><div class="car-nav-item_icon" data-v-56ea8971><div class="icon-outer" data-v-56ea8971></div><div class="icon-inner" data-v-56ea8971></div></div><div class="car-nav-item_text" data-v-56ea8971><p class="serial" data-v-56ea8971>${ssrInterpolate(String(index + 1).padStart(2, "0"))}</p><p class="title" data-v-56ea8971>${ssrInterpolate(section.title)}</p></div></li>`);
      });
      _push(`<!--]--></ul></div><section class="car-gallery" id="gallery" data-v-56ea8971><div class="swiper-container" data-v-56ea8971><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translate3d(-${currentSlide.value.gallery * 100}%, 0, 0)` })}" data-v-56ea8971><!--[-->`);
      ssrRenderList(gallerySlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-56ea8971><div class="car-gallery__img-text" data-v-56ea8971>${ssrInterpolate(slide.text)}</div><img${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", slide.text)} class="car-gallery__img" loading="eager" fetchpriority="high" decoding="async" data-v-56ea8971><div class="car-gallery__img-description" data-v-56ea8971><!--[-->`);
        ssrRenderList(slide.specs, (spec, sIdx) => {
          _push(`<div class="car-gallery__img-description--item" data-v-56ea8971><p class="car-gallery__img-description--title" data-v-56ea8971>${ssrInterpolate(spec.value)}</p><p class="car-gallery__img-description--content" data-v-56ea8971>${ssrInterpolate(spec.label)}</p></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div><div class="car-gallery__pagination" data-v-56ea8971><!--[-->`);
      ssrRenderList(gallerySlides.value, (_, idx) => {
        _push(`<span class="${ssrRenderClass([{ active: currentSlide.value.gallery === idx }, "swiper-pagination-bullet"])}" data-v-56ea8971></span>`);
      });
      _push(`<!--]--></div><div class="${ssrRenderClass([{ disabled: currentSlide.value.gallery === 0 }, "car-gallery__prev"])}" data-v-56ea8971></div><div class="${ssrRenderClass([{ disabled: currentSlide.value.gallery === gallerySlides.value.length - 1 }, "car-gallery__next"])}" data-v-56ea8971></div></section><section id="section1" class="level-one" style="${ssrRenderStyle({ backgroundImage: `url('/assets/OFFICIALVOYAH/newcourage/images/sc_3.jpg')` })}" data-v-56ea8971><h2 class="title inview-child inview-animated" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Warm Home", fr: "Maison Chaleureuse", ar: "\u0627\u0644\u0645\u0646\u0632\u0644 \u0627\u0644\u062F\u0627\u0641\u0626" }))}</h2><p class="subTitle inview-child inview-animated" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "More exquisite, more agile design", fr: "Design plus exquis et plus agile", ar: "\u062A\u0635\u0645\u064A\u0645 \u0623\u0643\u062B\u0631 \u0631\u0642\u0629 \u0648\u0631\u0634\u0627\u0642\u0629" }))}</p></section><section class="level-two" id="starlight" data-v-56ea8971><div class="headline" data-v-56ea8971><h2 class="title" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Starlight Companion Aesthetics", fr: "Esth\xE9tique Compagnon Stellaire", ar: "\u062C\u0645\u0627\u0644\u064A\u0629 \u0631\u0641\u064A\u0642 \u0627\u0644\u0646\u062C\u0648\u0645" }))}</h2><p class="subTitle" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Toward the stars, gentle journey home", fr: "Vers les \xE9toiles, doux retour \xE0 la maison", ar: "\u0646\u062D\u0648 \u0627\u0644\u0646\u062C\u0648\u0645\u060C \u0639\u0648\u062F\u0629 \u0644\u0637\u064A\u0641\u0629 \u0644\u0644\u0645\u0646\u0632\u0644" }))}</p></div><div class="img-wrap" data-v-56ea8971><img${ssrRenderAttr("src", _imports_2$4)} alt="Starlight Aesthetics" class="img" loading="lazy" decoding="async" data-v-56ea8971></div></section><section class="common" id="led-curtain" data-v-56ea8971><h3 class="title inview-child" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Twinkling Starlight LED Light Curtain", fr: "Rideau Lumineux LED \xC9toiles Scintillantes", ar: "\u0633\u062A\u0627\u0631\u0629 LED \u0627\u0644\u0646\u062C\u0648\u0645 \u0627\u0644\u0648\u0645\u064A\u0636\u0629" }))}</h3><div class="single-img inview-child margin-top-0" data-v-56ea8971><img${ssrRenderAttr("src", _imports_3$4)} alt="LED Light Curtain" class="img" loading="lazy" decoding="async" data-v-56ea8971></div><div class="single-description inview-child column1" data-v-56ea8971><div class="description-item" data-v-56ea8971><p class="description-title" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "264 automotive-grade LED beads", fr: "264 perles LED de qualit\xE9 automobile", ar: "264 \u062D\u0628\u0629 LED \u0645\u0646 \u062F\u0631\u062C\u0629 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A" }))}</p><p class="description-content" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Over 50,000 diamond patterns create a brilliant star river, accompanying every journey home", fr: "Plus de 50 000 motifs diamants cr\xE9ent une rivi\xE8re d'\xE9toiles brillante", ar: "\u0623\u0643\u062B\u0631 \u0645\u0646 50000 \u0646\u0645\u0637 \u0623\u0644\u0645\u0627\u0633 \u064A\u0646\u0634\u0626 \u0646\u0647\u0631 \u0646\u062C\u0648\u0645 \u0645\u062A\u0623\u0644\u0642" }))}</p></div></div></section><section class="common commonMax" id="exterior-features" data-v-56ea8971><div class="swiper-container" data-v-56ea8971><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translate3d(-${currentSlide.value.exterior * 100}%, 0, 0)` })}" data-v-56ea8971><!--[-->`);
      ssrRenderList(exteriorSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-56ea8971><div class="img-container" data-v-56ea8971><img${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", slide.title)} class="slide-img" loading="lazy" decoding="async" data-v-56ea8971></div><div class="desc-wrap" data-v-56ea8971><p class="desc-title" data-v-56ea8971>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-56ea8971>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination inview-child" data-v-56ea8971><!--[-->`);
      ssrRenderList(exteriorSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.exterior === idx }, "pagination-bullet"])}" data-v-56ea8971></div>`);
      });
      _push(`<!--]--></div><div class="description-pagination-wrap inview-child" data-v-56ea8971><div class="description-list" data-v-56ea8971><!--[-->`);
      ssrRenderList(exteriorSlides.value, (slide, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.exterior === idx }, "description-item"])}" data-v-56ea8971><p class="description-title" data-v-56ea8971>${ssrInterpolate(slide.title)}</p></div>`);
      });
      _push(`<!--]--></div><p class="description-content" data-v-56ea8971>${ssrInterpolate(exteriorSlides.value[currentSlide.value.exterior].desc)}</p></div></section><section class="car-color-container" id="colors" data-v-56ea8971><h3 class="title" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Explore 6 Exterior Themes", fr: "Explorez 6 Th\xE8mes Ext\xE9rieurs", ar: "\u0627\u0633\u062A\u0643\u0634\u0641 6 \u062B\u064A\u0645\u0627\u062A \u062E\u0627\u0631\u062C\u064A\u0629" }))}</h3><div class="car-swiper-wap" data-v-56ea8971><!--[-->`);
      ssrRenderList(carColors.value, (color, idx) => {
        _push(`<div class="swiper-slide" style="${ssrRenderStyle({ left: currentColor.value === idx ? "0%" : "100%", transition: "none" })}" data-v-56ea8971><div class="swiper-slide-item" data-v-56ea8971><img${ssrRenderAttr("src", color.carImage)}${ssrRenderAttr("alt", color.name)} class="swiper-slide-img" loading="lazy" decoding="async" data-v-56ea8971></div></div>`);
      });
      _push(`<!--]--></div><div class="car-color-list" data-v-56ea8971><!--[-->`);
      ssrRenderList(carColors.value, (color, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentColor.value === idx }, "car-color-item"])}" data-v-56ea8971><div class="color-icon" data-v-56ea8971><img${ssrRenderAttr("src", color.icon)}${ssrRenderAttr("alt", color.name)} class="img-icon" loading="lazy" decoding="async" data-v-56ea8971></div><p class="color-name" data-v-56ea8971>${ssrInterpolate(color.name)}</p></div>`);
      });
      _push(`<!--]--></div></section><section class="level-two" id="interior" data-v-56ea8971><div class="headline" data-v-56ea8971><h2 class="title" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Starlight Embrace Cockpit", fr: "Cockpit \xC9treinte Stellaire", ar: "\u0642\u0645\u0631\u0629 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0627\u0644\u0645\u0639\u0627\u0646\u0642\u0629 \u0644\u0644\u0646\u062C\u0648\u0645" }))}</h2><p class="subTitle" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Galaxy as dome, surrounded by starlight, a mobile observatory", fr: "Galaxie en d\xF4me, entour\xE9 de lumi\xE8res stellaires, un observatoire mobile", ar: "\u0627\u0644\u0645\u062C\u0631\u0629 \u0643\u0642\u0628\u0629\u060C \u0645\u062D\u0627\u0637 \u0628\u0646\u0648\u0631 \u0627\u0644\u0646\u062C\u0648\u0645\u060C \u0645\u0631\u0635\u062F \u0645\u062A\u0646\u0642\u0644" }))}</p></div><div class="img-wrap" data-v-56ea8971><img${ssrRenderAttr("src", _imports_4$3)} alt="Interior" class="img" data-v-56ea8971></div></section><section class="common" id="ambient-light" data-v-56ea8971><h3 class="title inview-child" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Firefly Ambient Lighting", fr: "\xC9clairage d'Ambiance Lucioles", ar: "\u0625\u0636\u0627\u0621\u0629 \u0645\u062D\u064A\u0637\u0629 \u0627\u0644\u064A\u0631\u0627\u0639\u0627\u062A" }))}</h3><div class="single-img inview-child" data-v-56ea8971><img${ssrRenderAttr("src", _imports_4$3)} alt="Ambient Lighting" class="img" loading="lazy" decoding="async" data-v-56ea8971></div></section><section class="common commonMax" id="interior-features" data-v-56ea8971><h3 class="title inview-child" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Luxury Interior", fr: "Int\xE9rieur de Luxe", ar: "\u0645\u0642\u0635\u0648\u0631\u0629 \u0641\u0627\u062E\u0631\u0629" }))}</h3><div class="swiper-container" data-v-56ea8971><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translate3d(-${currentSlide.value.interior * 100}%, 0, 0)` })}" data-v-56ea8971><!--[-->`);
      ssrRenderList(interiorSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-56ea8971><div class="img-container" data-v-56ea8971><img${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", slide.title)} class="slide-img" loading="lazy" decoding="async" data-v-56ea8971></div><div class="desc-wrap" data-v-56ea8971><p class="desc-title" data-v-56ea8971>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-56ea8971>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination inview-child" data-v-56ea8971><!--[-->`);
      ssrRenderList(interiorSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.interior === idx }, "pagination-bullet"])}" data-v-56ea8971></div>`);
      });
      _push(`<!--]--></div><div class="description-pagination-wrap inview-child" data-v-56ea8971><div class="description-list" data-v-56ea8971><!--[-->`);
      ssrRenderList(interiorSlides.value, (slide, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.interior === idx }, "description-item"])}" data-v-56ea8971><p class="description-title" data-v-56ea8971>${ssrInterpolate(slide.title)}</p></div>`);
      });
      _push(`<!--]--></div><p class="description-content" data-v-56ea8971>${ssrInterpolate(interiorSlides.value[currentSlide.value.interior].desc)}</p></div></section><section id="section3" class="level-one" style="${ssrRenderStyle({ backgroundImage: `url('/assets/OFFICIALVOYAH/newcourage/images/sc_12.jpg')` })}" data-v-56ea8971><h2 class="title inview-child inview-animated" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Fun Home", fr: "Maison Amusante", ar: "\u0627\u0644\u0645\u0646\u0632\u0644 \u0627\u0644\u0645\u0645\u062A\u0639" }))}</h2><p class="subTitle inview-child inview-animated" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Space transformation, infinite possibilities", fr: "Transformation spatiale, possibilit\xE9s infinies", ar: "\u062A\u062D\u0648\u0644 \u0645\u0643\u0627\u0646\u064A\u060C \u0625\u0645\u0643\u0627\u0646\u064A\u0627\u062A \u0644\u0627 \u0646\u0647\u0627\u0626\u064A\u0629" }))}</p></section><section class="common" id="space-features" data-v-56ea8971><div class="single-img-container inview-child" data-v-56ea8971><img${ssrRenderAttr("src", _imports_5$2)} alt="Space Features" class="single-img" loading="lazy" decoding="async" data-v-56ea8971></div><div class="single-description inview-child features-grid" data-v-56ea8971><div class="description-item" data-v-56ea8971><p class="description-title" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "86% space utilization", fr: "86% d'utilisation de l'espace", ar: "86% \u0627\u0633\u062A\u063A\u0644\u0627\u0644 \u0627\u0644\u0645\u0633\u0627\u062D\u0629" }))}</p><p class="description-content" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Maximized interior space for ultimate comfort", fr: "Espace int\xE9rieur maximis\xE9 pour un confort ultime", ar: "\u0645\u0633\u0627\u062D\u0629 \u062F\u0627\u062E\u0644\u064A\u0629 \u0642\u0635\u0648\u0649 \u0644\u0631\u0627\u062D\u0629 \u0641\u0627\u0626\u0642\u0629" }))}</p></div><div class="description-item" data-v-56ea8971><p class="description-title" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "10-layer composite zero-gravity seat", fr: "Si\xE8ge z\xE9ro-gravit\xE9 10 couches", ar: "\u0645\u0642\u0639\u062F \u0628\u0644\u0627 \u062C\u0627\u0630\u0628\u064A\u0629 10 \u0637\u0628\u0642\u0627\u062A" }))}</p><p class="description-content" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "NASA-inspired ergonomic design", fr: "Design ergonomique inspir\xE9 de la NASA", ar: "\u062A\u0635\u0645\u064A\u0645 \u0645\u0631\u064A\u062D \u0645\u0633\u062A\u0648\u062D\u0649 \u0645\u0646 \u0646\u0627\u0633\u0627" }))}</p></div></div></section><section id="section4" class="level-one" style="${ssrRenderStyle({ backgroundImage: `url('/assets/OFFICIALVOYAH/newcourage/images/sc_18.jpg')` })}" data-v-56ea8971><h2 class="title inview-child inview-animated" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Smart Home", fr: "Maison Intelligente", ar: "\u0627\u0644\u0645\u0646\u0632\u0644 \u0627\u0644\u0630\u0643\u064A" }))}</h2><p class="subTitle inview-child inview-animated" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "AI large model, making interaction more emotional", fr: "Grand mod\xE8le IA, rendant l'interaction plus \xE9motionnelle", ar: "\u0646\u0645\u0648\u0630\u062C \u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0643\u0628\u064A\u0631\u060C \u064A\u062C\u0639\u0644 \u0627\u0644\u062A\u0641\u0627\u0639\u0644 \u0623\u0643\u062B\u0631 \u0639\u0627\u0637\u0641\u064A\u0629" }))}</p></section><section class="common" id="harmonyos" data-v-56ea8971><h3 class="title inview-child" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "HarmonyOS Cockpit", fr: "Cockpit HarmonyOS", ar: "\u0645\u0642\u0635\u0648\u0631\u0629 \u0647\u0627\u0631\u0645\u0648\u0646\u064A \u0623\u0648 \u0625\u0633" }))}</h3><p class="subTitle inview-child" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Seamless intelligent connectivity", fr: "Connectivit\xE9 intelligente fluide", ar: "\u0627\u062A\u0635\u0627\u0644 \u0630\u0643\u064A \u0633\u0644\u0633" }))}</p><div class="img-container" data-v-56ea8971><img${ssrRenderAttr("src", _imports_6$2)} alt="HarmonyOS" class="single-img inview-child" loading="lazy" decoding="async" data-v-56ea8971></div><div class="single-description inview-child features-grid" data-v-56ea8971><div class="description-item" data-v-56ea8971><p class="description-title" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "15.6-inch 2K smart screen", fr: "\xC9cran intelligent 2K 15.6 pouces", ar: "\u0634\u0627\u0634\u0629 \u0630\u0643\u064A\u0629 2K 15.6 \u0628\u0648\u0635\u0629" }))}</p><p class="description-content" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Super desktop 2.0 | Seamless phone-car connectivity", fr: "Super bureau 2.0 | Connectivit\xE9 t\xE9l\xE9phone-voiture sans couture", ar: "\u0633\u0637\u062D \u0645\u0643\u062A\u0628 \u0633\u0648\u0628\u0631 2.0 | \u0627\u062A\u0635\u0627\u0644 \u0633\u0644\u0633 \u0628\u064A\u0646 \u0627\u0644\u0647\u0627\u062A\u0641 \u0648\u0627\u0644\u0633\u064A\u0627\u0631\u0629" }))}</p></div><div class="description-item" data-v-56ea8971><p class="description-title" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Voice control everywhere", fr: "Contr\xF4le vocal partout", ar: "\u0627\u0644\u062A\u062D\u0643\u0645 \u0627\u0644\u0635\u0648\u062A\u064A \u0641\u064A \u0643\u0644 \u0645\u0643\u0627\u0646" }))}</p><p class="description-content" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Natural language understanding for intuitive commands", fr: "Compr\xE9hension du langage naturel pour des commandes intuitives", ar: "\u0641\u0647\u0645 \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0637\u0628\u064A\u0639\u064A\u0629 \u0644\u0644\u0623\u0648\u0627\u0645\u0631 \u0627\u0644\u0628\u062F\u064A\u0647\u064A\u0629" }))}</p></div></div></section><section class="common" id="huawei-ads" data-v-56ea8971><h3 class="title inview-child" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Huawei ADS 3.0", fr: "Huawei ADS 3.0", ar: "\u0646\u0638\u0627\u0645 \u0647\u0648\u0627\u0648\u064A ADS 3.0" }))}</h3><p class="subTitle inview-child" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Safer, smarter autonomous driving", fr: "Conduite autonome plus s\xFBre et intelligente", ar: "\u0642\u064A\u0627\u062F\u0629 \u0630\u0627\u062A\u064A\u0629 \u0623\u0643\u062B\u0631 \u0623\u0645\u0627\u0646\u0627\u064B \u0648\u0630\u0643\u0627\u0621\u064B" }))}</p><div class="img-container" data-v-56ea8971><img${ssrRenderAttr("src", _imports_7$2)} alt="Huawei ADS" class="single-img inview-child" loading="lazy" decoding="async" data-v-56ea8971></div><div class="single-description inview-child features-grid" data-v-56ea8971><div class="description-item" data-v-56ea8971><p class="description-title" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "192-line LiDAR", fr: "LiDAR 192 lignes", ar: "\u0644\u064A\u062F\u0627\u0631 192 \u062E\u0637" }))}</p><p class="description-content" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Industry-leading precision perception", fr: "Perception de pr\xE9cision leader de l'industrie", ar: "\u0625\u062F\u0631\u0627\u0643 \u062F\u0642\u064A\u0642 \u0631\u0627\u0626\u062F \u0641\u064A \u0627\u0644\u0635\u0646\u0627\u0639\u0629" }))}</p></div><div class="description-item" data-v-56ea8971><p class="description-title" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "29 high-perception sensors", fr: "29 capteurs haute perception", ar: "29 \u0645\u0633\u062A\u0634\u0639\u0631 \u0625\u062F\u0631\u0627\u0643 \u0639\u0627\u0644\u064A" }))}</p><p class="description-content" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "All-weather, all-round, all-target detection", fr: "D\xE9tection tout temps, tout azimut, toute cible", ar: "\u0643\u0634\u0641 \u0639\u0644\u0649 \u0645\u062F\u0627\u0631 \u0627\u0644\u0633\u0627\u0639\u0629 \u0648\u0645\u0646 \u062C\u0645\u064A\u0639 \u0627\u0644\u062C\u0647\u0627\u062A \u0648\u062C\u0645\u064A\u0639 \u0627\u0644\u0623\u0647\u062F\u0627\u0641" }))}</p></div></div></section><section class="common commonMax" id="parking" data-v-56ea8971><div class="swiper-container" data-v-56ea8971><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translate3d(-${currentSlide.value.parking * 100}%, 0, 0)` })}" data-v-56ea8971><!--[-->`);
      ssrRenderList(parkingSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-56ea8971><div class="slide-img" data-v-56ea8971><img${ssrRenderAttr("src", "/assets/OFFICIALVOYAH/newcourage/images/sc_" + (20 + idx) + ".jpg")}${ssrRenderAttr("alt", slide.title)} class="img" loading="lazy" decoding="async" data-v-56ea8971></div><div class="desc-wrap" data-v-56ea8971><p class="desc-title" data-v-56ea8971>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-56ea8971>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination inview-child" data-v-56ea8971><!--[-->`);
      ssrRenderList(parkingSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.parking === idx }, "pagination-bullet"])}" data-v-56ea8971></div>`);
      });
      _push(`<!--]--></div><div class="description-pagination-wrap inview-child" data-v-56ea8971><div class="description-list" data-v-56ea8971><!--[-->`);
      ssrRenderList(parkingSlides.value, (slide, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.parking === idx }, "description-item"])}" data-v-56ea8971><p class="description-title" data-v-56ea8971>${ssrInterpolate(slide.title)}</p></div>`);
      });
      _push(`<!--]--></div><p class="description-content" data-v-56ea8971>${ssrInterpolate(parkingSlides.value[currentSlide.value.parking].desc)}</p></div></section><section id="section5" class="level-one" style="${ssrRenderStyle({ backgroundImage: `url('/assets/OFFICIALVOYAH/newcourage/images/sc_34.jpg')` })}" data-v-56ea8971><h2 class="title inview-child inview-animated" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Efficient Home", fr: "Maison Efficace", ar: "\u0627\u0644\u0645\u0646\u0632\u0644 \u0627\u0644\u0643\u0641\u0624" }))}</h2><p class="subTitle inview-child inview-animated" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Full-level 3-electric system, endless happiness", fr: "Syst\xE8me 3-\xE9lectrique complet, bonheur sans fin", ar: "\u0646\u0638\u0627\u0645 \u062B\u0644\u0627\u062B\u064A \u0643\u0647\u0631\u0628\u0627\u0626\u064A \u0643\u0627\u0645\u0644\u060C \u0633\u0639\u0627\u062F\u0629 \u0644\u0627 \u0646\u0647\u0627\u064A\u0629 \u0644\u0647\u0627" }))}</p></section><section class="common" id="platform" data-v-56ea8971><h3 class="title inview-child" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Full-domain 800V Silicon Carbide Platform", fr: "Plateforme 800V Carbure de Silicium", ar: "\u0645\u0646\u0635\u0629 \u0643\u0631\u0628\u064A\u062F \u0627\u0644\u0633\u064A\u0644\u064A\u0643\u0648\u0646 800V" }))}</h3><p class="subTitle inview-child" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Low energy consumption, long range, farewell to range anxiety", fr: "Faible consommation, longue autonomie, adieu \xE0 l'anxi\xE9t\xE9", ar: "\u0627\u0633\u062A\u0647\u0644\u0627\u0643 \u0645\u0646\u062E\u0641\u0636\u060C \u0645\u062F\u0649 \u0637\u0648\u064A\u0644\u060C \u0648\u062F\u0627\u0639\u0627\u064B \u0644\u0644\u0642\u0644\u0642" }))}</p><div class="img-container" data-v-56ea8971><img${ssrRenderAttr("src", _imports_8$2)} alt="800V Platform" class="single-img inview-child" loading="lazy" decoding="async" data-v-56ea8971></div><div class="single-description inview-child features-grid" data-v-56ea8971><div class="description-item" data-v-56ea8971><p class="description-title" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "901km CLTC range", fr: "901km d'autonomie CLTC", ar: "901 \u0643\u0645 \u0645\u062F\u0649 CLTC" }))}</p><p class="description-content" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "112kWh CATL battery, 13.6kWh/100km consumption", fr: "Batterie CATL 112kWh, consommation 13.6kWh/100km", ar: "\u0628\u0637\u0627\u0631\u064A\u0629 CATL 112 \u0643\u064A\u0644\u0648\u0648\u0627\u0637\u060C \u0627\u0633\u062A\u0647\u0644\u0627\u0643 13.6 \u0643\u064A\u0644\u0648\u0648\u0627\u0637/100 \u0643\u0645" }))}</p></div><div class="description-item" data-v-56ea8971><p class="description-title" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "92.5% drive efficiency", fr: "92.5% d'efficacit\xE9 de conduite", ar: "92.5% \u0643\u0641\u0627\u0621\u0629 \u0627\u0644\u0642\u064A\u0627\u062F\u0629" }))}</p><p class="description-content" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Industry-leading efficiency", fr: "Efficacit\xE9 leader de l'industrie", ar: "\u0643\u0641\u0627\u0621\u0629 \u0631\u0627\u0626\u062F\u0629 \u0641\u064A \u0627\u0644\u0635\u0646\u0627\u0639\u0629" }))}</p></div></div></section><section class="common" id="charging" data-v-56ea8971><h3 class="title inview-child" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "5C Super Fast Charging", fr: "Recharge Ultra-Rapide 5C", ar: "\u0634\u062D\u0646 \u0633\u0631\u064A\u0639 \u0641\u0627\u0626\u0642 5C" }))}</h3><p class="subTitle inview-child" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "A cup of coffee time, vacation starts now", fr: "Le temps d'un caf\xE9, les vacances commencent", ar: "\u0648\u0642\u062A \u0643\u0648\u0628 \u0642\u0647\u0648\u0629\u060C \u062A\u0628\u062F\u0623 \u0627\u0644\u0639\u0637\u0644\u0629 \u0627\u0644\u0622\u0646" }))}</p><div class="single-img inview-child" data-v-56ea8971><img${ssrRenderAttr("src", _imports_8$2)} alt="5C Charging" class="img" loading="lazy" decoding="async" data-v-56ea8971></div><div class="swiper-container inview-child" data-v-56ea8971><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translate3d(-${currentSlide.value.charging * 100}%, 0, 0)` })}" data-v-56ea8971><!--[-->`);
      ssrRenderList(chargingSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-56ea8971><div class="desc-wrap" data-v-56ea8971><p class="desc-title" data-v-56ea8971>${ssrInterpolate(slide.title)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination inview-child" data-v-56ea8971><!--[-->`);
      ssrRenderList(chargingSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.charging === idx }, "pagination-bullet"])}" data-v-56ea8971></div>`);
      });
      _push(`<!--]--></div><div class="description-pagination-wrap inview-child" data-v-56ea8971><div class="description-list" data-v-56ea8971><!--[-->`);
      ssrRenderList(chargingSlides.value, (slide, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.charging === idx }, "description-item"])}" data-v-56ea8971><p class="description-title" data-v-56ea8971>${ssrInterpolate(slide.title)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section id="section6" class="level-one" style="${ssrRenderStyle({ backgroundImage: `url('/assets/OFFICIALVOYAH/newcourage/images/sc_39.jpg')` })}" data-v-56ea8971><h2 class="title inview-child inview-animated" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Safe Home", fr: "Maison S\xFBre", ar: "\u0627\u0644\u0645\u0646\u0632\u0644 \u0627\u0644\u0622\u0645\u0646" }))}</h2><p class="subTitle inview-child inview-animated" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "All-round safety, guarding loved ones every moment", fr: "S\xE9curit\xE9 totale, prot\xE9ger les \xEAtres chers \xE0 chaque instant", ar: "\u0633\u0644\u0627\u0645\u0629 \u0634\u0627\u0645\u0644\u0629\u060C \u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0623\u062D\u0628\u0627\u0621 \u0641\u064A \u0643\u0644 \u0644\u062D\u0638\u0629" }))}</p></section><section class="common" id="body-safety" data-v-56ea8971><h3 class="title inview-child" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Body Safety", fr: "S\xE9curit\xE9 de la Carrosserie", ar: "\u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0647\u064A\u0643\u0644" }))}</h3><p class="subTitle inview-child" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Solid as rock, guarding the lifeline", fr: "Solide comme le roc, gardien de la ligne de vie", ar: "\u0635\u0644\u0628 \u0643\u0627\u0644\u0635\u062E\u0631\u060C \u062D\u0627\u0631\u0633 \u062E\u0637 \u0627\u0644\u062D\u064A\u0627\u0629" }))}</p><div class="img-container" data-v-56ea8971><img${ssrRenderAttr("src", _imports_9$2)} alt="Body Safety" class="single-img inview-child" loading="lazy" decoding="async" data-v-56ea8971></div><div class="single-description inview-child column3" data-v-56ea8971><div class="description-item" data-v-56ea8971><p class="description-title" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Dual 5-star safety standard", fr: "Double standard de s\xE9curit\xE9 5 \xE9toiles", ar: "\u0645\u0639\u064A\u0627\u0631 \u0633\u0644\u0627\u0645\u0629 \u0645\u0632\u062F\u0648\u062C 5 \u0646\u062C\u0648\u0645" }))}</p><p class="description-content" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Hardcore safety strength", fr: "Force de s\xE9curit\xE9 in\xE9branlable", ar: "\u0642\u0648\u0629 \u0623\u0645\u0627\u0646 \u0644\u0627 \u062A\u062A\u0632\u0639\u0632\u0639" }))}</p></div><div class="description-item" data-v-56ea8971><p class="description-title" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Ultra-high rigidity cage body", fr: "Carrosserie cage ultra-rigide", ar: "\u0647\u064A\u0643\u0644 \u0642\u0641\u0635 \u0641\u0627\u0626\u0642 \u0627\u0644\u0635\u0644\u0627\u0628\u0629" }))}</p><p class="description-content" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Solid foundation for handling and comfort", fr: "Fondement solide pour maniabilit\xE9 et confort", ar: "\u0623\u0633\u0627\u0633 \u0645\u062A\u064A\u0646 \u0644\u0644\u0645\u0646\u0627\u0648\u0631\u0629 \u0648\u0627\u0644\u0631\u0627\u062D\u0629" }))}</p></div><div class="description-item" data-v-56ea8971><p class="description-title" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "2000MPa aluminum-silicon door beam", fr: "Poutre de porte aluminium-silicium 2000MPa", ar: "\u0639\u0627\u0631\u0636\u0629 \u0628\u0627\u0628 \u0623\u0644\u0648\u0645\u0646\u064A\u0648\u0645-\u0633\u064A\u0644\u064A\u0643\u0648\u0646 2000 \u0645\u064A\u062C\u0627 \u0628\u0627\u0633\u0643\u0627\u0644" }))}</p><p class="description-content" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Global\u9996\u521B ultra-high strength material", fr: "Mat\xE9riau ultra-r\xE9sistant pionnier mondial", ar: "\u0645\u0627\u062F\u0629 \u0641\u0627\u0626\u0642\u0629 \u0627\u0644\u0642\u0648\u0629 \u0631\u0627\u0626\u062F\u0629 \u0639\u0627\u0644\u0645\u064A\u0627\u064B" }))}</p></div></div></section><section class="common" id="collision" data-v-56ea8971><div class="img-container" data-v-56ea8971><img${ssrRenderAttr("src", _imports_10$2)} alt="Collision Protection" class="single-img inview-child margin-top-0" loading="lazy" decoding="async" data-v-56ea8971></div><div class="single-description inview-child column1" data-v-56ea8971><div class="description-item" data-v-56ea8971><p class="description-title" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Seven-layer frontal collision protection", fr: "Protection collision frontale sept couches", ar: "\u062D\u0645\u0627\u064A\u0629 \u062A\u0635\u0627\u062F\u0645 \u0623\u0645\u0627\u0645\u064A\u0629 \u0628\u0633\u0628\u0639 \u0637\u0628\u0642\u0627\u062A" }))}</p><p class="description-content" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Effectively absorb and disperse impact forces", fr: "Absorber et disperser efficacement les forces d'impact", ar: "\u0627\u0645\u062A\u0635\u0627\u0635 \u0648\u062A\u0634\u062A\u064A\u062A \u0642\u0648\u0649 \u0627\u0644\u062A\u0635\u0627\u062F\u0645 \u0628\u0641\u0639\u0627\u0644\u064A\u0629" }))}</p></div></div></section><section class="common" id="battery-safety" data-v-56ea8971><h3 class="title inview-child" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Battery Safety", fr: "S\xE9curit\xE9 de la Batterie", ar: "\u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629" }))}</h3><p class="subTitle inview-child" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Hardcore protection, TOP-level technical safety", fr: "Protection in\xE9branlable, s\xE9curit\xE9 technique de premier ordre", ar: "\u062D\u0645\u0627\u064A\u0629 \u0644\u0627 \u062A\u062A\u0632\u0639\u0632\u0639\u060C \u0623\u0645\u0627\u0646 \u062A\u0642\u0646\u064A \u0645\u0646 \u0627\u0644\u0637\u0631\u0627\u0632 \u0627\u0644\u0623\u0648\u0644" }))}</p><div class="img-container" data-v-56ea8971><img${ssrRenderAttr("src", _imports_11$2)} alt="Battery Safety" class="single-img inview-child" loading="lazy" decoding="async" data-v-56ea8971></div><div class="single-description inview-child column3" data-v-56ea8971><div class="description-item" data-v-56ea8971><p class="description-title" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "16-layer structural protection", fr: "Protection structurale 16 couches", ar: "\u062D\u0645\u0627\u064A\u0629 \u0647\u064A\u0643\u0644\u064A\u0629 16 \u0637\u0628\u0642\u0629" }))}</p><p class="description-content" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Layer by layer protection, safety buff stacked", fr: "Protection couche par couche, bonus de s\xE9curit\xE9 cumul\xE9", ar: "\u062D\u0645\u0627\u064A\u0629 \u0637\u0628\u0642\u0629 \u0628\u0637\u0628\u0642\u0629\u060C \u0645\u0643\u0627\u0641\u0622\u062A \u0623\u0645\u0627\u0646 \u0645\u062A\u0631\u0627\u0643\u0645\u0629" }))}</p></div><div class="description-item" data-v-56ea8971><p class="description-title" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "Industry TOP-level 7-layer sealing", fr: "\xC9tanch\xE9it\xE9 7 couches de niveau industriel sup\xE9rieur", ar: "\u0625\u062D\u0643\u0627\u0645 7 \u0637\u0628\u0642\u0627\u062A \u0645\u0646 \u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0645\u062A\u0642\u062F\u0645 \u0641\u064A \u0627\u0644\u0635\u0646\u0627\u0639\u0629" }))}</p><p class="description-content" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "1m water depth, 72 hours no water ingress", fr: "1m de profondeur d'eau, 72h sans infiltration", ar: "\u0639\u0645\u0642 \u0645\u062A\u0631 \u0648\u0627\u062D\u062F \u0641\u064A \u0627\u0644\u0645\u0627\u0621\u060C 72 \u0633\u0627\u0639\u0629 \u0628\u062F\u0648\u0646 \u062A\u0633\u0631\u0628" }))}</p></div><div class="description-item" data-v-56ea8971><p class="description-title" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "7\xD724h millisecond battery cloud guard", fr: "Garde cloud batterie milliseconde 7\xD724h", ar: "\u062D\u0627\u0631\u0633 \u0633\u062D\u0627\u0628\u064A \u0644\u0644\u0628\u0637\u0627\u0631\u064A\u0629 \u0628\u0627\u0644\u0645\u064A\u0644\u064A \u062B\u0627\u0646\u064A\u0629 \u0639\u0644\u0649 \u0645\u062F\u0627\u0631 \u0627\u0644\u0633\u0627\u0639\u0629" }))}</p><p class="description-content" data-v-56ea8971>${ssrInterpolate(unref(textFor)({ en: "All-weather, all-region, all-condition health protection", fr: "Protection sant\xE9 tout temps, toute r\xE9gion, toute condition", ar: "\u062D\u0645\u0627\u064A\u0629 \u0635\u062D\u064A\u0629 \u0639\u0644\u0649 \u0645\u062F\u0627\u0631 \u0627\u0644\u0633\u0627\u0639\u0629 \u0648\u0641\u064A \u0643\u0644 \u0645\u0646\u0637\u0642\u0629 \u0648\u0638\u0631\u0641" }))}</p></div></div></section><section class="car-desc-content" data-v-56ea8971><div data-v-56ea8971>${ssrInterpolate(unref(textFor)({
        en: "1. 901km CLTC range: Test data under full charge, actual range may vary due to weather, driving habits, road conditions, load and other factors. Data for reference only, subject to actual vehicle.\n2. 5C Super Fast Charging: Only 81kWh battery supports 5C charging, actual charging time depends on equipment and environment.\n3. 15min charging for 515km: Requires 400kW+ charging pile, data may vary with different equipment.\n4. 92.5% drive efficiency: CLTC simulation data for reference only.\n5. Space utilization = front legroom to rear seat length / wheelbase.\nContent for reference only, actual vehicle configuration may vary.",
        fr: "1. Autonomie CLTC 901km: Donn\xE9es de test en charge compl\xE8te, autonomie r\xE9elle variable selon conditions.\n2. Recharge 5C: Uniquement batterie 81kWh, temps de charge selon \xE9quipement.\n3. 15min pour 515km: N\xE9cessite borne 400kW+, donn\xE9es variables.\n4. Efficacit\xE9 92.5%: Donn\xE9es simulation CLTC.\n5. Utilisation espace = espace jambes avant \xE0 si\xE8ge arri\xE8re / empattement.\nContenu indicatif, configuration r\xE9elle susceptible de varier.",
        ar: "1. \u0645\u062F\u0649 CLTC 901 \u0643\u0645: \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u062E\u062A\u0628\u0627\u0631 \u0628\u0627\u0644\u0634\u062D\u0646 \u0627\u0644\u0643\u0627\u0645\u0644\u060C \u0627\u0644\u0645\u062F\u0649 \u0627\u0644\u0641\u0639\u0644\u064A \u064A\u062E\u062A\u0644\u0641 \u062D\u0633\u0628 \u0627\u0644\u0638\u0631\u0648\u0641.\n2. \u0634\u062D\u0646 5C: \u0628\u0637\u0627\u0631\u064A\u0629 81kWh \u0641\u0642\u0637\u060C \u0648\u0642\u062A \u0627\u0644\u0634\u062D\u0646 \u062D\u0633\u0628 \u0627\u0644\u0645\u0639\u062F\u0627\u062A.\n3. 15 \u062F\u0642\u064A\u0642\u0629 \u0644\u0640 515 \u0643\u0645: \u064A\u062A\u0637\u0644\u0628 400kW+\u060C \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0645\u062A\u063A\u064A\u0631\u0629.\n4. \u0643\u0641\u0627\u0621\u0629 92.5%: \u0628\u064A\u0627\u0646\u0627\u062A \u0645\u062D\u0627\u0643\u0627\u0629 CLTC.\n5. \u0627\u0633\u062A\u063A\u0644\u0627\u0644 \u0627\u0644\u0645\u0633\u0627\u062D\u0629 = \u0645\u0633\u0627\u062D\u0629 \u0627\u0644\u0633\u0627\u0642 \u0627\u0644\u0623\u0645\u0627\u0645\u064A\u0629 \u0625\u0644\u0649 \u0645\u0642\u0639\u062F \u062E\u0644\u0641\u064A / \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0639\u062C\u0644\u0627\u062A.\n\u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0644\u0644\u0645\u0631\u062C\u0639\u064A\u0629 \u0641\u0642\u0637\u060C \u0627\u0644\u062A\u0643\u0648\u064A\u0646 \u0627\u0644\u0641\u0639\u0644\u064A \u0642\u062F \u064A\u062E\u062A\u0644\u0641."
      }))}</div></section></div>`);
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vehicles/newcourage/NewCouragePage.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const NewCouragePage = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-56ea8971"]]);
const _imports_0$8 = publicAssetsURL("/assets/OFFICIALVOYAH/dreamerChampion/images/kv_0408_1920.jpg");
const _imports_1$5 = publicAssetsURL("/assets/OFFICIALVOYAH/dreamerChampion/images/dreamerChampion.png");
const _imports_2$3 = publicAssetsURL("/assets/OFFICIALVOYAH/dreamerChampion/images/car_0408_1.png");
const _imports_3$3 = publicAssetsURL("/assets/OFFICIALVOYAH/dreamerChampion/images/icon1.png");
const _imports_4$2 = publicAssetsURL("/assets/OFFICIALVOYAH/dreamerChampion/images/bg_8_1_n_banner01.jpg");
const _imports_5$1 = publicAssetsURL("/assets/OFFICIALVOYAH/dreamerChampion/images/bg_10_0408_banner01.jpg");
const _imports_6$1 = publicAssetsURL("/assets/OFFICIALVOYAH/dreamerChampion/images/bg_12_n_banner01.jpg");
const _imports_7$1 = publicAssetsURL("/assets/OFFICIALVOYAH/dreamerChampion/images/bg_14_n.jpg");
const _imports_8$1 = publicAssetsURL("/assets/OFFICIALVOYAH/dreamerChampion/images/bg_16_n_banner01.jpg");
const _imports_9$1 = publicAssetsURL("/assets/OFFICIALVOYAH/dreamerChampion/images/bg_17_n_banner01.jpg");
const _imports_10$1 = publicAssetsURL("/assets/OFFICIALVOYAH/dreamerChampion/images/bg_19_0408_banner01.jpg");
const _imports_11$1 = publicAssetsURL("/assets/OFFICIALVOYAH/dreamerChampion/images/bg_20_n_banner01.jpg");
const _imports_12$1 = publicAssetsURL("/assets/OFFICIALVOYAH/dreamerChampion/images/bg_22_n_banner01.jpg");
const _imports_13$1 = publicAssetsURL("/assets/OFFICIALVOYAH/dreamerChampion/images/bg_23_n_banner01.jpg");
const _imports_14 = publicAssetsURL("/assets/OFFICIALVOYAH/dreamerChampion/images/bg_24_n_banner01.jpg");
const _imports_15 = publicAssetsURL("/assets/OFFICIALVOYAH/dreamerChampion/images/bottom_tips.jpg");
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "DreamerChampionPage",
  __ssrInlineRender: true,
  setup(__props) {
    const { textFor } = useSiteContent();
    const activeSection = ref(0);
    const showMobileNav = ref(false);
    const currentSlide = ref({
      design: 0,
      interior: 0,
      cabin: 0,
      userFriendly: 0,
      secondRow: 0
    });
    const chapterSections = computed(() => [
      { id: "section1", title: textFor({ en: "Design", fr: "Design", ar: "\u0627\u0644\u062A\u0635\u0645\u064A\u0645" }) },
      { id: "section2", title: textFor({ en: "Cabin", fr: "Cabine", ar: "\u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629" }) },
      { id: "section3", title: textFor({ en: "Interaction", fr: "Int\xE9ract.", ar: "\u0627\u0644\u062A\u0641\u0627\u0639\u0644" }) },
      { id: "section4", title: textFor({ en: "Driving", fr: "Conduite", ar: "\u0627\u0644\u0642\u064A\u0627\u062F\u0629" }) },
      { id: "section5", title: textFor({ en: "Chassis", fr: "Ch\xE2ssis", ar: "\u0627\u0644\u0647\u064A\u0643\u0644" }) },
      { id: "section6", title: textFor({ en: "Power", fr: "Puissance", ar: "\u0627\u0644\u0642\u0648\u0629" }) },
      { id: "section7", title: textFor({ en: "Safety", fr: "S\xE9curit\xE9", ar: "\u0627\u0644\u0633\u0644\u0627\u0645\u0629" }) }
    ]);
    const designSlides = computed(() => [
      { image: "/assets/OFFICIALVOYAH/dreamerChampion/images/bg_3_n.jpg", title: textFor({ en: "Black Samurai Grille", fr: "Calandre Samoura\xEF Noir", ar: "\u0634\u0628\u0643\u0629 \u0627\u0644\u0633\u0627\u0645\u0648\u0631\u0627\u064A \u0627\u0644\u0623\u0633\u0648\u062F" }), desc: textFor({ en: "Champion crowned, black obsidian realm", fr: "Champion couronn\xE9, royaume obsidienne noire", ar: "\u0627\u0644\u0628\u0637\u0644 \u0645\u062A\u0648\u062C\u060C \u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0623\u0648\u0628\u0633\u064A\u062F\u064A\u0627\u0646 \u0627\u0644\u0633\u0648\u062F\u0627\u0621" }) },
      { image: "/assets/OFFICIALVOYAH/dreamerChampion/images/bg_3_n_2.jpg", title: textFor({ en: "Pilot Blue Indicator", fr: "Indicateur Bleu Pilote", ar: "\u0645\u0624\u0634\u0631 Pilot \u0627\u0644\u0623\u0632\u0631\u0642" }), desc: textFor({ en: "Assisted driving pilot, tech beauty and safety", fr: "Pilote conduite assist\xE9e, beaut\xE9 tech et s\xE9curit\xE9", ar: "\u0637\u064A\u0627\u0631 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629\u060C \u062C\u0645\u0627\u0644 \u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A \u0648\u0623\u0645\u0627\u0646" }) }
    ]);
    const interiorSlides = computed(() => [
      { name: textFor({ en: "Tuobrown", fr: "Brun Tuo", ar: "\u0628\u0646\u064A Tuo" }), image: "/assets/OFFICIALVOYAH/dreamerChampion/images/bg_05_0003.jpg" },
      { name: textFor({ en: "Purple Rice", fr: "Riz Violet", ar: "\u0623\u0631\u0632 \u0628\u0646\u0641\u0633\u062C\u064A" }), image: "/assets/OFFICIALVOYAH/dreamerChampion/images/bg_05_0004.jpg" }
    ]);
    const cabinSlides = computed(() => [
      { image: "/assets/OFFICIALVOYAH/dreamerChampion/images/bg_7_n_banner04.jpg", title: textFor({ en: '"Reflecting Mountains" Panel', fr: 'Panneau "Reflet Montagnes"', ar: '\u0644\u0648\u062D\u0629 "\u0627\u0646\u0639\u0643\u0627\u0633 \u0627\u0644\u062C\u0628\u0627\u0644"' }), desc: textFor({ en: "Heaven and earth painted with light", fr: "Ciel et terre peints de lumi\xE8re", ar: "\u0627\u0644\u0633\u0645\u0627\u0621 \u0648\u0627\u0644\u0623\u0631\u0636 \u0645\u0631\u0633\u0648\u0645\u0629 \u0628\u0627\u0644\u0636\u0648\u0621" }) },
      { image: "/assets/OFFICIALVOYAH/dreamerChampion/images/bg_7_n_banner05.jpg", title: textFor({ en: "13L Dual-Door Smart Fridge", fr: "R\xE9frig\xE9rateur Intelligent 13L", ar: "\u062B\u0644\u0627\u062C\u0629 \u0630\u0643\u064A\u0629 13 \u0644\u062A\u0631" }), desc: textFor({ en: "24-hour power, every degree to your liking", fr: "Alimentation 24h, chaque degr\xE9 \xE0 votre go\xFBt", ar: "\u062A\u063A\u0630\u064A\u0629 24 \u0633\u0627\u0639\u0629\u060C \u0643\u0644 \u062F\u0631\u062C\u0629 \u062D\u0633\u0628 \u0630\u0648\u0642\u0643" }) },
      { image: "/assets/OFFICIALVOYAH/dreamerChampion/images/bg_7_n_banner06.jpg", title: textFor({ en: "VOYAH Sound Audio", fr: "Audio VOYAH Sound", ar: "\u0635\u0648\u062A VOYAH Sound" }), desc: textFor({ en: "20 HiFi speakers, ultimate immersive sound", fr: "20 haut-parleurs HiFi, son immersif ultime", ar: "20 \u0645\u0643\u0628\u0631 \u0635\u0648\u062A HiFi\u060C \u0635\u0648\u062A \u063A\u0627\u0645\u0631 \u0641\u0627\u0626\u0642" }) },
      { image: "/assets/OFFICIALVOYAH/dreamerChampion/images/bg_7_n_banner07.jpg", title: textFor({ en: "OEKO-TEX Baby-Friendly Fabric", fr: "Tissu OEKO-TEX B\xE9b\xE9", ar: "\u0642\u0645\u0627\u0634 OEKO-TEX \u0644\u0644\u0623\u0637\u0641\u0627\u0644" }), desc: textFor({ en: "EU certified, odorless, safe for children", fr: "Certifi\xE9 UE, inodore, s\xFBr pour enfants", ar: "\u0645\u0639\u062A\u0645\u062F \u0645\u0646 \u0627\u0644\u0627\u062A\u062D\u0627\u062F \u0627\u0644\u0623\u0648\u0631\u0648\u0628\u064A\u060C \u0639\u062F\u064A\u0645 \u0627\u0644\u0631\u0627\u0626\u062D\u0629\u060C \u0622\u0645\u0646 \u0644\u0644\u0623\u0637\u0641\u0627\u0644" }) }
    ]);
    const userFriendlySlides = computed(() => [
      { image: "/assets/OFFICIALVOYAH/dreamerChampion/images/bg_8_n_banner02.jpg", title: textFor({ en: "29-inch Full HD AR-HUD", fr: 'AR-HUD Full HD 29"', ar: "\u0634\u0627\u0634\u0629 AR-HUD Full HD 29 \u0628\u0648\u0635\u0629" }), desc: textFor({ en: "Clearer view, richer info, safer driving", fr: "Vue plus claire, info plus riche, conduite plus s\xFBre", ar: "\u0631\u0624\u064A\u0629 \u0623\u0648\u0636\u062D\u060C \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0623\u0643\u062B\u0631\u060C \u0642\u064A\u0627\u062F\u0629 \u0623\u0643\u062B\u0631 \u0623\u0645\u0627\u0646\u0627\u064B" }) },
      { image: "/assets/OFFICIALVOYAH/dreamerChampion/images/bg_8_n_banner04.jpg", title: textFor({ en: "AR Sensor Trunk", fr: "Coffre Capteur AR", ar: "\u0635\u0646\u062F\u0648\u0642 AR \u0645\u0633\u062A\u0634\u0639\u0631" }), desc: textFor({ en: "Hands-free with heavy items, open remotely", fr: "Sans mains avec objets lourds, ouverture \xE0 distance", ar: "\u0628\u062F\u0648\u0646 \u064A\u062F\u064A\u0646 \u0645\u0639 \u0623\u0634\u064A\u0627\u0621 \u062B\u0642\u064A\u0644\u0629\u060C \u0641\u062A\u062D \u0639\u0646 \u0628\u0639\u062F" }) },
      { image: "/assets/OFFICIALVOYAH/dreamerChampion/images/bg_8_n_banner05.jpg", title: textFor({ en: "220V + Dual 50W Wireless", fr: "220V + Double 50W Sans Fil", ar: "220 \u0641\u0648\u0644\u062A + \u0645\u0632\u062F\u0648\u062C 50 \u0648\u0627\u0637 \u0644\u0627\u0633\u0644\u0643\u064A" }), desc: textFor({ en: "Phone charging, laptop, hair dryer, no worry", fr: "Charge t\xE9l\xE9phone, ordinateur, s\xE8che-cheveux, sans souci", ar: "\u0634\u062D\u0646 \u0627\u0644\u0647\u0627\u062A\u0641\u060C \u0627\u0644\u0643\u0645\u0628\u064A\u0648\u062A\u0631 \u0627\u0644\u0645\u062D\u0645\u0648\u0644\u060C \u0645\u062C\u0641\u0641 \u0627\u0644\u0634\u0639\u0631\u060C \u0628\u0644\u0627 \u0642\u0644\u0642" }) },
      { image: "/assets/OFFICIALVOYAH/dreamerChampion/images/bg_8_n_banner06.jpg", title: textFor({ en: "Dual Backrest Tray Tables", fr: "Tables Plateaux Double Dossier", ar: "\u0637\u0627\u0648\u0644\u0627\u062A \u0635\u0648\u0627\u0646\u064A \u0645\u0632\u062F\u0648\u062C\u0629 \u0627\u0644\u0645\u0633\u0646\u062F" }), desc: textFor({ en: "Anti-slip groove, easy placement, efficient", fr: "Rainure anti-d\xE9rapante, placement facile, efficace", ar: "\u0623\u062E\u062F\u0648\u062F \u0645\u0636\u0627\u062F \u0644\u0644\u0627\u0646\u0632\u0644\u0627\u0642\u060C \u0648\u0636\u0639 \u0633\u0647\u0644\u060C \u0641\u0639\u0627\u0644" }) }
    ]);
    const secondRowSlides = computed(() => [
      { image: "/assets/OFFICIALVOYAH/dreamerChampion/images/bg_9_n_banner05.jpg", title: textFor({ en: "AI Adaptive Seat", fr: "Si\xE8ge Adaptatif IA", ar: "\u0645\u0642\u0639\u062F \u0645\u062A\u0643\u064A\u0641 \u0645\u0639 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A" }), desc: textFor({ en: "10-point massage, AI lumbar, heating, ventilation", fr: "Massage 10 points, lombaires IA, chauffage, ventilation", ar: "\u062A\u062F\u0644\u064A\u0643 10 \u0646\u0642\u0627\u0637\u060C \u062F\u0639\u0627\u0645\u0629 \u0642\u0637\u0646\u064A\u0629 AI\u060C \u062A\u062F\u0641\u0626\u0629\u060C \u062A\u0647\u0648\u064A\u0629" }) },
      { image: "/assets/OFFICIALVOYAH/dreamerChampion/images/bg_9_n_banner06.jpg", title: textFor({ en: "2nd Row Electric Privacy Curtain", fr: "Rideau Intimit\xE9 \xC9lectrique 2\xE8me Rang\xE9e", ar: "\u0633\u062A\u0627\u0631\u0629 \u062E\u0635\u0648\u0635\u064A\u0629 \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0644\u0644\u0635\u0641 \u0627\u0644\u062B\u0627\u0646\u064A" }), desc: textFor({ en: "85% shading, one-key electric, business rest assured", fr: "85% occultation, \xE9lectrique une touche, affaires tranquilles", ar: "85% \u062A\u0638\u0644\u064A\u0644\u060C \u0643\u0647\u0631\u0628\u0627\u0626\u064A \u0628\u0645\u0641\u062A\u0627\u062D \u0648\u0627\u062D\u062F\u060C \u0623\u0639\u0645\u0627\u0644 \u0645\u0637\u0645\u0626\u0646\u0629" }) },
      { image: "/assets/OFFICIALVOYAH/dreamerChampion/images/bg_9_n_banner07.jpg", title: textFor({ en: "17.3-inch 3K Screen", fr: '\xC9cran 17.3" 3K', ar: "\u0634\u0627\u0634\u0629 17.3 \u0628\u0648\u0635\u0629 3K" }), desc: textFor({ en: "Leading screen size, multi-angle, best viewing", fr: "Taille \xE9cran leader, multi-angle, meilleure vue", ar: "\u062D\u062C\u0645 \u0634\u0627\u0634\u0629 \u0631\u0627\u0626\u062F\u060C \u0632\u0648\u0627\u064A\u0627 \u0645\u062A\u0639\u062F\u062F\u0629\u060C \u0623\u0641\u0636\u0644 \u0645\u0634\u0627\u0647\u062F\u0629" }) }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dreamerChampion-page" }, _attrs))} data-v-9d301bac><section class="kv-section" data-v-9d301bac><img${ssrRenderAttr("src", _imports_0$8)} class="kv-bg-img" loading="eager" fetchpriority="high" decoding="async" data-v-9d301bac><div class="kv-content" data-v-9d301bac><img${ssrRenderAttr("src", _imports_1$5)} class="kv-logo" loading="eager" fetchpriority="high" decoding="async" data-v-9d301bac><p class="kv-slogan" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "First Chinese MPV for Young Families", fr: "Premier MPV Chinois pour Jeunes Familles", ar: "MPV \u0627\u0644\u0635\u064A\u0646\u064A \u0627\u0644\u0623\u0648\u0644 \u0644\u0644\u0639\u0627\u0626\u0644\u0627\u062A \u0627\u0644\u0634\u0627\u0628\u0629" }))}</p><div class="kv-btns" data-v-9d301bac><button class="voyah-button voyah-button--plain" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Book Test Drive", fr: "R\xE9server Essai", ar: "\u062D\u062C\u0632 \u062A\u062C\u0631\u0628\u0629 \u0642\u064A\u0627\u062F\u0629" }))}</button><button class="voyah-button voyah-button--dark" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Order Now", fr: "Commander", ar: "\u0627\u0637\u0644\u0628 \u0627\u0644\u0622\u0646" }))}</button></div></div></section><div class="${ssrRenderClass([{ visible: showMobileNav.value }, "car-nav-wap fixed-nav"])}" data-v-9d301bac><ul class="car-nav-list" data-v-9d301bac><!--[-->`);
      ssrRenderList(chapterSections.value, (section, index) => {
        _push(`<li class="${ssrRenderClass([{ active: activeSection.value === index }, "car-nav-item"])}" data-v-9d301bac><div class="car-nav-item_icon" data-v-9d301bac><div class="icon-outer" data-v-9d301bac></div><div class="icon-inner" data-v-9d301bac></div></div><div class="car-nav-item_text" data-v-9d301bac><p class="serial" data-v-9d301bac>${ssrInterpolate(String(index + 1).padStart(2, "0"))}</p><p class="title" data-v-9d301bac>${ssrInterpolate(section.title)}</p></div></li>`);
      });
      _push(`<!--]--></ul></div><section id="section1" class="level-one" style="${ssrRenderStyle({ backgroundImage: `url('/assets/OFFICIALVOYAH/dreamerChampion/images/bg_2_0408_1920.jpg')` })}" data-v-9d301bac><h2 class="title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Super Luxury Design", fr: "Design Super Luxueux", ar: "\u062A\u0635\u0645\u064A\u0645 \u0641\u0627\u0626\u0642 \u0627\u0644\u0641\u062E\u0627\u0645\u0629" }))}</h2><p class="subTitle" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Kunpeng Design Philosophy Sublimated", fr: "Philosophie Design Kunpeng Sublim\xE9e", ar: "\u0641\u0644\u0633\u0641\u0629 \u062A\u0635\u0645\u064A\u0645 Kunpeng \u0627\u0644\u0645\u062A\u0635\u0627\u0639\u062F\u0629" }))}</p></section><section class="common commonMax" data-v-9d301bac><div class="swiper-container" data-v-9d301bac><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translate3d(-${currentSlide.value.design * 100}%, 0, 0)` })}" data-v-9d301bac><!--[-->`);
      ssrRenderList(designSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-9d301bac><img${ssrRenderAttr("src", slide.image)} class="slide-img" loading="lazy" decoding="async" data-v-9d301bac><div class="desc-wrap" data-v-9d301bac><p class="desc-title" data-v-9d301bac>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-9d301bac>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination" data-v-9d301bac><!--[-->`);
      ssrRenderList(designSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.design === idx }, "pagination-bullet"])}" data-v-9d301bac></div>`);
      });
      _push(`<!--]--></div></section><section class="car-color-container" data-v-9d301bac><h3 class="title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Color Vast Realm", fr: "Couleurs Vaste", ar: "\u0623\u0644\u0648\u0627\u0646 \u0627\u0644\u0645\u0645\u0644\u0643\u0629" }))}</h3><h3 class="subTitle" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Heaven and Earth Open, All into Dream", fr: "Ciel et Terre Ouverts, Tout dans le R\xEAve", ar: "\u0627\u0644\u0633\u0645\u0627\u0621 \u0648\u0627\u0644\u0623\u0631\u0636 \u0645\u0641\u062A\u0648\u062D\u062A\u0627\u0646\u060C \u0643\u0644 \u0634\u064A\u0621 \u0641\u064A \u0627\u0644\u062D\u0644\u0645" }))}</h3><div class="car-swiper-wap" data-v-9d301bac><div class="swiper-slide" style="${ssrRenderStyle({ "left": "0" })}" data-v-9d301bac><img${ssrRenderAttr("src", _imports_2$3)} class="swiper-slide-img" loading="lazy" decoding="async" data-v-9d301bac></div></div><div class="car-color-list" data-v-9d301bac><div class="car-color-item active" data-v-9d301bac><img${ssrRenderAttr("src", _imports_3$3)} class="img-icon" loading="lazy" decoding="async" data-v-9d301bac><p class="color-name" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Xuanying Black", fr: "Noir Xuanying", ar: "\u0623\u0633\u0648\u062F Xuanying" }))}</p></div></div></section><section class="common commonMax" data-v-9d301bac><h3 class="title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Color Vast Realm", fr: "Couleurs Vaste", ar: "\u0623\u0644\u0648\u0627\u0646 \u0627\u0644\u0645\u0645\u0644\u0643\u0629" }))}</h3><p class="subTitle" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Dream Journey 3000 Miles, Heritage 5000 Years", fr: "Voyage R\xEAv\xE9 3000 Lieues, H\xE9ritage 5000 Ans", ar: "\u0631\u062D\u0644\u0629 \u0627\u0644\u062D\u0644\u0645 3000 \u0645\u064A\u0644\u060C \u062A\u0631\u0627\u062B 5000 \u0639\u0627\u0645" }))}</p><div class="swiper-container" data-v-9d301bac><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translate3d(-${currentSlide.value.interior * 100}%, 0, 0)` })}" data-v-9d301bac><!--[-->`);
      ssrRenderList(interiorSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-9d301bac><img${ssrRenderAttr("src", slide.image)} class="slide-img" loading="lazy" decoding="async" data-v-9d301bac><p class="img-text" data-v-9d301bac>*${ssrInterpolate(unref(textFor)({ en: "Images for reference only", fr: "Images r\xE9f\xE9rence uniquement", ar: "\u0627\u0644\u0635\u0648\u0631 \u0644\u0644\u0645\u0631\u062C\u0639\u064A\u0629 \u0641\u0642\u0637" }))}</p><div class="desc-wrap" data-v-9d301bac><p class="desc-title" data-v-9d301bac>${ssrInterpolate(slide.name)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination" data-v-9d301bac><!--[-->`);
      ssrRenderList(interiorSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.interior === idx }, "pagination-bullet"])}" data-v-9d301bac></div>`);
      });
      _push(`<!--]--></div></section><section id="section2" class="level-one" style="${ssrRenderStyle({ backgroundImage: `url('/assets/OFFICIALVOYAH/dreamerChampion/images/bg_6_n_0408_1920.jpg')` })}" data-v-9d301bac><h2 class="title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Super Luxury Cabin", fr: "Cabine Super Luxueuse", ar: "\u0645\u0642\u0635\u0648\u0631\u0629 \u0641\u0627\u0626\u0642\u0629 \u0627\u0644\u0641\u062E\u0627\u0645\u0629" }))}</h2><p class="subTitle" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Spacious Reception Living Room, Comfortable Large Flat Floor", fr: "Salon R\xE9ception Spacieux, Grand \xC9tage Plat Confortable", ar: "\u0635\u0627\u0644\u0629 \u0627\u0633\u062A\u0642\u0628\u0627\u0644 \u0641\u0633\u064A\u062D\u0629\u060C \u0637\u0627\u0628\u0642 \u0643\u0628\u064A\u0631 \u0645\u0633\u0637\u062D \u0645\u0631\u064A\u062D" }))}</p></section><section class="common commonMax" data-v-9d301bac><h3 class="title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: '"Heaven and Earth Embraced" Immersive Luxury Cabin', fr: '"Ciel et Terre Embrass\xE9s" Cabine Luxueuse Immersive', ar: '"\u0627\u0644\u0633\u0645\u0627\u0621 \u0648\u0627\u0644\u0623\u0631\u0636 \u0627\u0644\u0645\u062D\u062A\u0636\u0646\u0627\u062A" \u0645\u0642\u0635\u0648\u0631\u0629 \u0641\u0627\u062E\u0631\u0629 \u063A\u0627\u0645\u0631\u0629' }))}</h3><div class="swiper-container" data-v-9d301bac><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translate3d(-${currentSlide.value.cabin * 100}%, 0, 0)` })}" data-v-9d301bac><!--[-->`);
      ssrRenderList(cabinSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-9d301bac><img${ssrRenderAttr("src", slide.image)} class="slide-img" loading="lazy" decoding="async" data-v-9d301bac><div class="desc-wrap" data-v-9d301bac><p class="desc-title" data-v-9d301bac>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-9d301bac>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination" data-v-9d301bac><!--[-->`);
      ssrRenderList(cabinSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.cabin === idx }, "pagination-bullet"])}" data-v-9d301bac></div>`);
      });
      _push(`<!--]--></div></section><section class="common commonMax" data-v-9d301bac><h3 class="title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Whole Vehicle User-Friendly Design", fr: "Design Convivial V\xE9hicule Entier", ar: "\u062A\u0635\u0645\u064A\u0645 \u0633\u0647\u0644 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0644\u0644\u0645\u0631\u0643\u0628\u0629 \u0628\u0623\u0643\u0645\u0644\u0647\u0627" }))}</h3><div class="swiper-container" data-v-9d301bac><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translate3d(-${currentSlide.value.userFriendly * 100}%, 0, 0)` })}" data-v-9d301bac><!--[-->`);
      ssrRenderList(userFriendlySlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-9d301bac><img${ssrRenderAttr("src", slide.image)} class="slide-img" loading="lazy" decoding="async" data-v-9d301bac><div class="desc-wrap" data-v-9d301bac><p class="desc-title" data-v-9d301bac>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-9d301bac>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination" data-v-9d301bac><!--[-->`);
      ssrRenderList(userFriendlySlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.userFriendly === idx }, "pagination-bullet"])}" data-v-9d301bac></div>`);
      });
      _push(`<!--]--></div></section><section class="common" data-v-9d301bac><h3 class="title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Advanced Front Row Pilot Cabin", fr: "Cabine Pilote Rang\xE9e Avant Avanc\xE9e", ar: "\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0637\u064A\u0627\u0631 \u0627\u0644\u0635\u0641 \u0627\u0644\u0623\u0645\u0627\u0645\u064A \u0627\u0644\u0645\u062A\u0642\u062F\u0645\u0629" }))}</h3><img${ssrRenderAttr("src", _imports_4$2)} class="single-img" loading="lazy" decoding="async" data-v-9d301bac><div class="single-description column3" data-v-9d301bac><div class="description-item" data-v-9d301bac><p class="description-title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Front Electric Soft-Close Doors", fr: "Portes \xC9lectriques Douces Avant", ar: "\u0623\u0628\u0648\u0627\u0628 \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0646\u0627\u0639\u0645\u0629 \u0623\u0645\u0627\u0645\u064A\u0629" }))}</p><p class="description-content" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Quiet and elegant, safe anti-pinch", fr: "Calme et \xE9l\xE9gant, s\xE9curit\xE9 anti-pincement", ar: "\u0647\u0627\u062F\u0626 \u0648\u0623\u0646\u064A\u0642\u060C \u0623\u0645\u0627\u0646 \u0645\u0636\u0627\u062F \u0644\u0644\u0627\u0646\u0642\u0631\u0627\u0636" }))}</p></div><div class="description-item" data-v-9d301bac><p class="description-title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Zebra Wood Grain Trim", fr: "Garniture Grain Bois Z\xE8bre", ar: "\u062A\u0637\u0639\u064A\u0645\u0627\u062A \u062E\u0634\u0628\u064A\u0629 \u0628\u0646\u0645\u0637 \u0627\u0644\u062D\u0645\u0627\u0631 \u0627\u0644\u0648\u062D\u0634\u064A" }))}</p><p class="description-content" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Wood texture, natural elegance", fr: "Texture bois, \xE9l\xE9gance naturelle", ar: "\u0645\u0644\u0645\u0633 \u062E\u0634\u0628\u064A\u060C \u0623\u0646\u0627\u0642\u0629 \u0637\u0628\u064A\u0639\u064A\u0629" }))}</p></div><div class="description-item" data-v-9d301bac><p class="description-title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Dual 50W Wireless Charging", fr: "Charge Sans Fil Double 50W", ar: "\u0634\u062D\u0646 \u0644\u0627\u0633\u0644\u0643\u064A \u0645\u0632\u062F\u0648\u062C 50 \u0648\u0627\u0637" }))}</p><p class="description-content" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Meets both driver and passenger charging", fr: "R\xE9pond charge conducteur et passager", ar: "\u064A\u0644\u0628\u064A \u0634\u062D\u0646 \u0627\u0644\u0633\u0627\u0626\u0642 \u0648\u0627\u0644\u0631\u0627\u0643\u0628" }))}</p></div></div></section><section class="common commonMax" data-v-9d301bac><h3 class="title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Second Row Luxury Fully Advanced", fr: "Luxe Deuxi\xE8me Rang\xE9e Pleinement Avanc\xE9", ar: "\u0627\u0644\u0641\u062E\u0627\u0645\u0629 \u0641\u064A \u0627\u0644\u0635\u0641 \u0627\u0644\u062B\u0627\u0646\u064A \u0645\u062A\u0642\u062F\u0645\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644" }))}</h3><div class="swiper-container" data-v-9d301bac><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translate3d(-${currentSlide.value.secondRow * 100}%, 0, 0)` })}" data-v-9d301bac><!--[-->`);
      ssrRenderList(secondRowSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-9d301bac><img${ssrRenderAttr("src", slide.image)} class="slide-img" loading="lazy" decoding="async" data-v-9d301bac><div class="desc-wrap" data-v-9d301bac><p class="desc-title" data-v-9d301bac>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-9d301bac>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination" data-v-9d301bac><!--[-->`);
      ssrRenderList(secondRowSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.secondRow === idx }, "pagination-bullet"])}" data-v-9d301bac></div>`);
      });
      _push(`<!--]--></div></section><section class="common" data-v-9d301bac><h3 class="title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Comfort Advanced Rear Business Cabin", fr: "Cabine Affaires Arri\xE8re Confort Avanc\xE9", ar: "\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062E\u0644\u0641\u064A\u0629 \u0627\u0644\u0645\u0631\u064A\u062D\u0629 \u0627\u0644\u0645\u062A\u0642\u062F\u0645\u0629" }))}</h3><img${ssrRenderAttr("src", _imports_5$1)} class="single-img" data-v-9d301bac><div class="single-description" data-v-9d301bac><div class="description-item" data-v-9d301bac><p class="description-title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "3rd Row 4-Way Electric Adjustment", fr: "R\xE9glage \xC9lectrique 4 Voies 3\xE8me Rang\xE9e", ar: "\u062A\u0639\u062F\u064A\u0644 \u0643\u0647\u0631\u0628\u0627\u0626\u064A \u0631\u0628\u0627\u0639\u064A \u0627\u0644\u0627\u062A\u062C\u0627\u0647\u0627\u062A \u0644\u0644\u0635\u0641 \u0627\u0644\u062B\u0627\u0644\u062B" }))}</p><p class="description-content" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Seat front/back + backrest angle adjustment", fr: "Si\xE8ge avant/arri\xE8re + r\xE9glage angle dossier", ar: "\u0627\u0644\u0645\u0642\u0639\u062F \u0623\u0645\u0627\u0645/\u062E\u0644\u0641 + \u0636\u0628\u0637 \u0632\u0627\u0648\u064A\u0629 \u0627\u0644\u0645\u0633\u0646\u062F" }))}</p></div><div class="description-item" data-v-9d301bac><p class="description-title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "3rd Row Steel-Reinforced Backrest", fr: "Dossier 3\xE8me Rang\xE9e Renforc\xE9 Acier", ar: "\u0645\u0633\u0646\u062F \u062E\u0644\u0641\u064A \u0644\u0644\u0635\u0641 \u0627\u0644\u062B\u0627\u0644\u062B \u0645\u062F\u0639\u0648\u0645 \u0628\u0627\u0644\u0641\u0648\u0644\u0627\u0630" }))}</p><p class="description-content" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Prevents intrusion, safe for family", fr: "Emp\xEAche intrusion, s\xFBr pour famille", ar: "\u064A\u0645\u0646\u0639 \u0627\u0644\u0627\u0642\u062A\u062D\u0627\u0645\u060C \u0622\u0645\u0646 \u0644\u0644\u0639\u0627\u0626\u0644\u0629" }))}</p></div></div></section><section id="section3" class="level-one" style="${ssrRenderStyle({ backgroundImage: `url('/assets/OFFICIALVOYAH/dreamerChampion/images/bg_11_0408_1920.jpg')` })}" data-v-9d301bac><h2 class="title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Full Sensation Intelligent Interaction", fr: "Interaction Intelligente Sensation Compl\xE8te", ar: "\u062A\u0641\u0627\u0639\u0644 \u0630\u0643\u064A \u0628\u0625\u062D\u0633\u0627\u0633 \u0643\u0627\u0645\u0644" }))}</h2><p class="subTitle" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Space Interaction No Longer Cramped, Every Position is C-Position", fr: "Interaction Espace Plus Serr\xE9e, Chaque Position est Position C", ar: "\u062A\u0641\u0627\u0639\u0644 \u0627\u0644\u0641\u0636\u0627\u0621 \u0644\u0645 \u064A\u0639\u062F \u0636\u064A\u0642\u0627\u064B\u060C \u0643\u0644 \u0645\u0648\u0642\u0639 \u0647\u0648 \u0645\u0648\u0642\u0639 C" }))}</p></section><section class="common" data-v-9d301bac><h3 class="title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Huawei Harmony Cockpit HarmonySpace5", fr: "Cockpit Huawei Harmony HarmonySpace5", ar: "\u0645\u0642\u0635\u0648\u0631\u0629 Huawei Harmony HarmonySpace5" }))}</h3><p class="subTitle" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Changing User Vehicle Experience", fr: "Changer Exp\xE9rience V\xE9hicule Utilisateur", ar: "\u062A\u063A\u064A\u064A\u0631 \u062A\u062C\u0631\u0628\u0629 \u0645\u0631\u0643\u0628\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645" }))}</p><img${ssrRenderAttr("src", _imports_6$1)} class="single-img" data-v-9d301bac><div class="single-description" data-v-9d301bac><div class="description-item" data-v-9d301bac><p class="description-title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Seamless Handoff Car-Phone", fr: "Transfert Sans Couture Voiture-T\xE9l\xE9phone", ar: "\u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0627\u0644\u0633\u0644\u0633 \u0633\u064A\u0627\u0631\u0629-\u0647\u0627\u062A\u0641" }))}</p><p class="description-content" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Getting in/out seamless, navigation/calls continuous", fr: "Entr\xE9e/sortie sans couture, navigation/appels continus", ar: "\u062F\u062E\u0648\u0644/\u062E\u0631\u0648\u062C \u0633\u0644\u0633\u060C \u0645\u0644\u0627\u062D\u0629/\u0645\u0643\u0627\u0644\u0645\u0627\u062A \u0645\u0633\u062A\u0645\u0631\u0629" }))}</p></div><div class="description-item" data-v-9d301bac><p class="description-title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "HSpace-Link Smart Connection", fr: "Connexion Intelligente HSpace-Link", ar: "\u0627\u062A\u0635\u0627\u0644 \u0630\u0643\u064A HSpace-Link" }))}</p><p class="description-content" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Heterogeneous control, full-screen, tablet support", fr: "Contr\xF4le h\xE9t\xE9rog\xE8ne, plein \xE9cran, support tablette", ar: "\u062A\u062D\u0643\u0645 \u063A\u064A\u0631 \u0645\u062A\u062C\u0627\u0646\u0633\u060C \u0634\u0627\u0634\u0629 \u0643\u0627\u0645\u0644\u0629\u060C \u062F\u0639\u0645 \u0627\u0644\u062C\u0647\u0627\u0632 \u0627\u0644\u0644\u0648\u062D\u064A" }))}</p></div></div></section><section id="section4" class="level-one" style="${ssrRenderStyle({ backgroundImage: `url('/assets/OFFICIALVOYAH/dreamerChampion/images/bg_13_n_1920.jpg')` })}" data-v-9d301bac><h2 class="title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "All-terrain Intelligent Driving", fr: "Conduite Intelligente Tout Terrain", ar: "\u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0627\u0644\u0630\u0643\u064A\u0629 \u0641\u064A \u0643\u0644 \u0627\u0644\u062A\u0636\u0627\u0631\u064A\u0633" }))}</h2><p class="subTitle" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "All-weather, All-direction, All-target", fr: "Tout Temps, Toute Direction, Toute Cible", ar: "\u0643\u0644 \u0627\u0644\u0623\u062D\u0648\u0627\u0644 \u0627\u0644\u062C\u0648\u064A\u0629\u060C \u0643\u0644 \u0627\u0644\u0627\u062A\u062C\u0627\u0647\u0627\u062A\u060C \u0643\u0644 \u0627\u0644\u0623\u0647\u062F\u0627\u0641" }))}</p></section><section class="common" data-v-9d301bac><h3 class="title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Huawei ADS 4", fr: "Huawei ADS 4", ar: "Huawei ADS 4" }))}</h3><img${ssrRenderAttr("src", _imports_7$1)} class="single-img" data-v-9d301bac><div class="single-description column3" data-v-9d301bac><div class="description-item" data-v-9d301bac><p class="description-title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "End-to-End Full Scenario", fr: "Bout-en-Bout Tout Sc\xE9nario", ar: "\u0645\u0646 \u0627\u0644\u0628\u062F\u0627\u064A\u0629 \u0625\u0644\u0649 \u0627\u0644\u0646\u0647\u0627\u064A\u0629 \u0643\u0644 \u0627\u0644\u0633\u064A\u0646\u0627\u0631\u064A\u0648\u0647\u0627\u062A" }))}</p><p class="description-content" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Full scenario\u8D2F\u901A one-click arrival", fr: "Tout sc\xE9nario\u8D2F\u901A arriv\xE9e un clic", ar: "\u0643\u0644 \u0627\u0644\u0633\u064A\u0646\u0627\u0631\u064A\u0648\u0647\u0627\u062A\u8D2F\u901A \u0648\u0635\u0648\u0644 \u0628\u0646\u0642\u0631\u0629 \u0648\u0627\u062D\u062F\u0629" }))}</p></div><div class="description-item" data-v-9d301bac><p class="description-title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "CAS 4.0 Anti-collision", fr: "Anti-collision CAS 4.0", ar: "\u0645\u0636\u0627\u062F \u0644\u0644\u062A\u0635\u0627\u062F\u0645 CAS 4.0" }))}</p><p class="description-content" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Emergencies handled timely, active safety advanced", fr: "Urgences g\xE9r\xE9es \xE0 temps, s\xE9curit\xE9 active avanc\xE9e", ar: "\u0627\u0644\u0637\u0648\u0627\u0631\u0626 \u062A\u062A\u0645 \u0645\u0639\u0627\u0644\u062C\u062A\u0647\u0627 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u060C \u0627\u0644\u0623\u0645\u0627\u0646 \u0627\u0644\u0646\u0634\u0637 \u0645\u062A\u0642\u062F\u0645" }))}</p></div><div class="description-item" data-v-9d301bac><p class="description-title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Full Scenario Parking", fr: "Stationnement Tout Sc\xE9nario", ar: "\u0627\u0644\u0631\u0643\u0646 \u0641\u064A \u0643\u0644 \u0627\u0644\u0633\u064A\u0646\u0627\u0631\u064A\u0648\u0647\u0627\u062A" }))}</p><p class="description-content" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Saves parking time, solves parking difficulty", fr: "\xC9conomise temps stationnement, r\xE9sout difficult\xE9", ar: "\u064A\u0648\u0641\u0631 \u0648\u0642\u062A \u0627\u0644\u0631\u0643\u0646\u060C \u064A\u062D\u0644 \u0635\u0639\u0648\u0628\u0629 \u0627\u0644\u0631\u0643\u0646" }))}</p></div></div></section><section id="section5" class="level-one" style="${ssrRenderStyle({ backgroundImage: `url('/assets/OFFICIALVOYAH/dreamerChampion/images/bg_15_0408_1920.jpg')` })}" data-v-9d301bac><h2 class="title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Flagship Intelligent Chassis", fr: "Ch\xE2ssis Intelligent Phare", ar: "\u0647\u064A\u0643\u0644 \u0630\u0643\u064A \u0631\u0627\u0626\u062F" }))}</h2><p class="subTitle" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Breaking Through MPV Application Scenarios", fr: "Percer Sc\xE9narios Application MPV", ar: "\u0627\u062E\u062A\u0631\u0627\u0642 \u0633\u064A\u0646\u0627\u0631\u064A\u0648\u0647\u0627\u062A \u062A\u0637\u0628\u064A\u0642 MPV" }))}</p></section><section class="common" data-v-9d301bac><h3 class="title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Million-Level Chassis", fr: "Ch\xE2ssis Niveau Million", ar: "\u0647\u064A\u0643\u0644 \u0628\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0645\u0644\u064A\u0648\u0646" }))}</h3><img${ssrRenderAttr("src", _imports_8$1)} class="single-img" data-v-9d301bac><div class="single-description" data-v-9d301bac><div class="description-item" data-v-9d301bac><p class="description-title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Front Double Wishbone + Rear Five-Link", fr: "Double Triangle Avant + 5 Bras Arri\xE8re", ar: "\u0645\u062B\u0644\u062B \u0645\u0632\u062F\u0648\u062C \u0623\u0645\u0627\u0645\u064A + 5 \u0623\u0630\u0631\u0639 \u062E\u0644\u0641\u064A\u0629" }))}</p><p class="description-content" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "MPV comfort, sedan driving experience", fr: "Confort MPV, exp\xE9rience conduite berline", ar: "\u0631\u0627\u062D\u0629 MPV\u060C \u062A\u062C\u0631\u0628\u0629 \u0642\u064A\u0627\u062F\u0629 \u0633\u064A\u062F\u0627\u0646" }))}</p></div></div></section><section class="common" data-v-9d301bac><h3 class="title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Full Series Intelligent Electric 4WD", fr: "4WD \xC9lectrique Intelligent S\xE9rie Compl\xE8te", ar: "\u062F\u0641\u0639 \u0631\u0628\u0627\u0639\u064A \u0643\u0647\u0631\u0628\u0627\u0626\u064A \u0630\u0643\u064A \u0644\u0644\u0633\u0644\u0633\u0644\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629" }))}</h3><img${ssrRenderAttr("src", _imports_9$1)} class="single-img" data-v-9d301bac><p class="img-text" data-v-9d301bac>*${ssrInterpolate(unref(textFor)({ en: "Appearance subject to actual product", fr: "Apparence selon produit r\xE9el", ar: "\u0627\u0644\u0645\u0638\u0647\u0631 \u0648\u0641\u0642\u0627\u064B \u0644\u0644\u0645\u0646\u062A\u062C \u0627\u0644\u0641\u0639\u0644\u064A" }))}</p><div class="single-description" data-v-9d301bac><div class="description-item" data-v-9d301bac><p class="description-title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Dual Motor Layout, Torque Vectoring", fr: "Disposition Double Moteur, Vectorisation Couple", ar: "\u062A\u062E\u0637\u064A\u0637 \u0645\u0632\u062F\u0648\u062C \u0627\u0644\u0645\u062D\u0631\u0643\u060C \u062A\u062D\u062C\u064A\u0645 \u0627\u0644\u0639\u0632\u0645" }))}</p><p class="description-content" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "0-100% intelligent adjustment, 50:50 load ratio", fr: "R\xE9glage intelligent 0-100%, ratio charge 50:50", ar: "\u062A\u0639\u062F\u064A\u0644 \u0630\u0643\u064A 0-100%\uFF0C\u0646\u0633\u0628\u0629 \u0627\u0644\u062D\u0645\u0644 50:50" }))}</p></div></div></section><section id="section6" class="level-one" style="${ssrRenderStyle({ backgroundImage: `url('/assets/OFFICIALVOYAH/dreamerChampion/images/bg_18_0408_1920.jpg')` })}" data-v-9d301bac><h2 class="title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Flagship Lanhai Power", fr: "Puissance Lanhai Phare", ar: "\u0642\u0648\u0629 Lanhai \u0627\u0644\u0631\u0627\u0626\u062F\u0629" }))}</h2><p class="subTitle" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "All Roads Worry-Free, Long Journey Assured", fr: "Toutes Routes Sans Souci, Long Voyage Assur\xE9", ar: "\u062C\u0645\u064A\u0639 \u0627\u0644\u0637\u0631\u0642 \u0628\u0644\u0627 \u0642\u0644\u0642\u060C \u0631\u062D\u0644\u0629 \u0637\u0648\u064A\u0644\u0629 \u0645\u0636\u0645\u0648\u0646\u0629" }))}</p></section><section class="common" data-v-9d301bac><h3 class="title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "High-End Ultra-Long Range", fr: "Autonomie Ultra-Longue Haut de Gamme", ar: "\u0645\u062F\u0649 \u0641\u0627\u0626\u0642 \u0627\u0644\u0637\u0648\u0644 \u0645\u062A\u0645\u064A\u0632" }))}</h3><img${ssrRenderAttr("src", _imports_10$1)} class="single-img" data-v-9d301bac><div class="single-description" data-v-9d301bac><div class="description-item" data-v-9d301bac><p class="description-title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "1411km Combined, 235km EV (CLTC)", fr: "1411km Combin\xE9, 235km EV (CLTC)", ar: "1411 \u0643\u0645 \u0645\u062C\u0645\u0639\u060C 235 \u0643\u0645 \u0643\u0647\u0631\u0628\u0627\u0626\u064A (CLTC)" }))}</p><p class="description-content" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "0.56L/100km combined, 5.41L/100km fuel consumption", fr: "0.56L/100km combin\xE9, 5.41L/100km consommation", ar: "0.56 \u0644\u062A\u0631/100 \u0643\u0645 \u0645\u062C\u0645\u0639\u060C 5.41 \u0644\u062A\u0631/100 \u0643\u0645 \u0627\u0633\u062A\u0647\u0644\u0627\u0643" }))}</p></div></div></section><section class="common" data-v-9d301bac><h3 class="title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "High-Energy Surging Power", fr: "Puissance Surging Haute \xC9nergie", ar: "\u0642\u0648\u0629 \u0639\u0627\u0644\u064A\u0629 \u0627\u0644\u0637\u0627\u0642\u0629 \u0645\u062A\u062F\u0641\u0642\u0629" }))}</h3><img${ssrRenderAttr("src", _imports_11$1)} class="single-img" data-v-9d301bac><div class="single-description" data-v-9d301bac><div class="description-item" data-v-9d301bac><p class="description-title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "420kW Ultra-Strong Power", fr: "420kW Puissance Ultra-Forte", ar: "420 \u0643\u064A\u0644\u0648\u0648\u0627\u0637 \u0642\u0648\u0629 \u0641\u0627\u0626\u0642\u0629" }))}</p><p class="description-content" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Fully loaded 7 people + luggage still powerful", fr: "Pleinement charg\xE9 7 personnes + bagages toujours puissant", ar: "\u0645\u062D\u0645\u0644 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 7 \u0623\u0634\u062E\u0627\u0635 + \u0623\u0645\u062A\u0639\u0629 \u0645\u0627 \u0632\u0627\u0644 \u0642\u0648\u064A\u0627\u064B" }))}</p></div><div class="description-item" data-v-9d301bac><p class="description-title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "0-100km/h 5.9s", fr: "0-100km/h 5.9s", ar: "0-100 \u0643\u0645/\u0633\u0627\u0639\u0629 5.9 \u062B\u0627\u0646\u064A\u0629" }))}</p><p class="description-content" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Priority lane selection, ample highway overtaking", fr: "S\xE9lection prioritaire voie, d\xE9passement autoroute ample", ar: "\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0645\u0633\u0627\u0631 \u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629\u060C \u062A\u062C\u0627\u0648\u0632 \u0643\u0627\u0641\u064D \u0639\u0644\u0649 \u0627\u0644\u0637\u0631\u064A\u0642 \u0627\u0644\u0633\u0631\u064A\u0639" }))}</p></div></div></section><section id="section7" class="level-one" style="${ssrRenderStyle({ backgroundImage: `url('/assets/OFFICIALVOYAH/dreamerChampion/images/bg_21_0408_1920.jpg')` })}" data-v-9d301bac><h2 class="title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Flagship All-Domain Safety", fr: "S\xE9curit\xE9 Tout Domaine Phare", ar: "\u0623\u0645\u0627\u0646 \u0631\u0627\u0626\u062F \u0641\u064A \u0643\u0644 \u0627\u0644\u0645\u062C\u0627\u0644\u0627\u062A" }))}</h2><p class="subTitle" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Refreshing MPV Safety Standards", fr: "Rafra\xEEchir Standards S\xE9curit\xE9 MPV", ar: "\u062A\u062D\u062F\u064A\u062B \u0645\u0639\u0627\u064A\u064A\u0631 \u0623\u0645\u0627\u0646 MPV" }))}</p></section><section class="common" data-v-9d301bac><h3 class="title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "All-Around Body Protection", fr: "Protection Carrosserie Tout Autour", ar: "\u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0647\u064A\u0643\u0644 \u0645\u0646 \u062C\u0645\u064A\u0639 \u0627\u0644\u062C\u0648\u0627\u0646\u0628" }))}</h3><img${ssrRenderAttr("src", _imports_12$1)} class="single-img" data-v-9d301bac><div class="single-description" data-v-9d301bac><div class="description-item" data-v-9d301bac><p class="description-title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "2000MPa Ultra-High Strength Cage", fr: "Cage Ultra-R\xE9sistante 2000MPa", ar: "\u0642\u0641\u0635 \u0641\u0627\u0626\u0642 \u0627\u0644\u0645\u0642\u0627\u0648\u0645\u0629 2000 \u0645\u064A\u062C\u0627 \u0628\u0627\u0633\u0643\u0627\u0644" }))}</p><p class="description-content" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "World's first 2000MPa laser welded door ring", fr: "Premier mondial anneau porte soud\xE9 laser 2000MPa", ar: "\u0627\u0644\u0623\u0648\u0644 \u0639\u0627\u0644\u0645\u064A\u0627\u064B \u062D\u0644\u0642\u0629 \u0628\u0627\u0628 \u0645\u0644\u062D\u0648\u0645\u0629 \u0628\u0627\u0644\u0644\u064A\u0632\u0631 2000 \u0645\u064A\u062C\u0627 \u0628\u0627\u0633\u0643\u0627\u0644" }))}</p></div><div class="description-item" data-v-9d301bac><p class="description-title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Five-Layer Rear Collision", fr: "Collision Arri\xE8re Cinq Couches", ar: "\u062A\u0635\u0627\u062F\u0645 \u062E\u0644\u0641\u064A \u0628\u062E\u0645\u0633 \u0637\u0628\u0642\u0627\u062A" }))}</p><p class="description-content" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "First MPV passing 110km/h US rear collision test", fr: "Premier MPV passant test collision arri\xE8re 110km/h US", ar: "\u0623\u0648\u0644 MPV \u064A\u062C\u062A\u0627\u0632 \u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u062A\u0635\u0627\u062F\u0645 \u0627\u0644\u062E\u0644\u0641\u064A 110 \u0643\u0645/\u0633\u0627\u0639\u0629 US" }))}</p></div></div></section><section class="common" data-v-9d301bac><h3 class="title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Full-Function Driver Protection", fr: "Protection Conducteur Pleine Fonction", ar: "\u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0633\u0627\u0626\u0642 \u0628\u0643\u0627\u0645\u0644 \u0627\u0644\u0648\u0638\u0627\u0626\u0641" }))}</h3><img${ssrRenderAttr("src", _imports_13$1)} class="single-img" data-v-9d301bac><div class="single-description column3" data-v-9d301bac><div class="description-item" data-v-9d301bac><p class="description-title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Intelligent Visual Sentry", fr: "Sentinelle Visuelle Intelligente", ar: "\u062D\u0627\u0631\u0633 \u0645\u0631\u0626\u064A \u0630\u0643\u064A" }))}</p><p class="description-content" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "All-round real-time monitoring", fr: "Surveillance temps r\xE9el tout autour", ar: "\u0645\u0631\u0627\u0642\u0628\u0629 \u0641\u0648\u0631\u064A\u0629 \u0645\u0646 \u062C\u0645\u064A\u0639 \u0627\u0644\u062C\u0648\u0627\u0646\u0628" }))}</p></div><div class="description-item" data-v-9d301bac><p class="description-title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "540\xB0 Ultra-Clear Panoramic", fr: "Panoramique Ultra-Clair 540\xB0", ar: "\u0628\u0627\u0646\u0648\u0631\u0627\u0645\u064A \u0641\u0627\u0626\u0642 \u0627\u0644\u0648\u0636\u0648\u062D 540\xB0" }))}</p><p class="description-content" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "No blind spots reversing, easy narrow parking", fr: "Pas angles morts recul, parking \xE9troit facile", ar: "\u0644\u0627 \u0632\u0648\u0627\u064A\u0627 \u0639\u0645\u064A\u0627\u0621 \u0644\u0644\u0631\u062C\u0648\u0639\u060C \u0631\u0643\u0646 \u0636\u064A\u0642 \u0633\u0647\u0644" }))}</p></div><div class="description-item" data-v-9d301bac><p class="description-title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "20+ Active Safety Functions", fr: "20+ Fonctions S\xE9curit\xE9 Active", ar: "20+ \u0648\u0638\u064A\u0641\u0629 \u0623\u0645\u0627\u0646 \u0646\u0634\u0637\u0629" }))}</p><p class="description-content" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Timely emergency response, accident prevention", fr: "R\xE9ponse urgente \xE0 temps, pr\xE9vention accidents", ar: "\u0627\u0633\u062A\u062C\u0627\u0628\u0629 \u0637\u0627\u0631\u0626\u0629 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u060C \u0645\u0646\u0639 \u0627\u0644\u062D\u0648\u0627\u062F\u062B" }))}</p></div></div></section><section class="common" data-v-9d301bac><h3 class="title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "All-Weather Battery Protection", fr: "Protection Batterie Tout Temps", ar: "\u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629 \u0639\u0644\u0649 \u0645\u062F\u0627\u0631 \u0627\u0644\u0633\u0627\u0639\u0629" }))}</h3><img${ssrRenderAttr("src", _imports_14)} class="single-img" data-v-9d301bac><div class="single-description" data-v-9d301bac><div class="description-item" data-v-9d301bac><p class="description-title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Amber Battery", fr: "Batterie Ambre", ar: "\u0628\u0637\u064A\u0631\u0629 \u0627\u0644\u0639\u0646\u0628\u0631" }))}</p><p class="description-content" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "No leakage, no fire, no explosion, no thermal runaway", fr: "Pas fuite, pas feu, pas explosion, pas emballement", ar: "\u0644\u0627 \u062A\u0633\u0631\u0628\u060C \u0644\u0627 \u0646\u0627\u0631\u060C \u0644\u0627 \u0627\u0646\u0641\u062C\u0627\u0631\u060C \u0644\u0627 \u062C\u0646\u0648\u0646 \u062D\u0631\u0627\u0631\u064A" }))}</p></div><div class="description-item" data-v-9d301bac><p class="description-title" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "1500MPa Battery Shield", fr: "Bouclier Batterie 1500MPa", ar: "\u062F\u0631\u0639 \u0628\u0637\u0627\u0631\u064A\u0629 1500 \u0645\u064A\u062C\u0627 \u0628\u0627\u0633\u0643\u0627\u0644" }))}</p><p class="description-content" data-v-9d301bac>${ssrInterpolate(unref(textFor)({ en: "Fearless of accidents and underbody scrapes", fr: "Sans crainte accidents et raclures sous-ch\xE2ssis", ar: "\u0628\u0644\u0627 \u062E\u0648\u0641 \u0645\u0646 \u0627\u0644\u062D\u0648\u0627\u062F\u062B \u0648\u0627\u0644\u062E\u062F\u0648\u0634 \u062A\u062D\u062A \u0627\u0644\u0647\u064A\u0643\u0644" }))}</p></div></div></section><img${ssrRenderAttr("src", _imports_15)} class="bottom-tips" data-v-9d301bac></div>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vehicles/dreamer/DreamerChampionPage.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const DreamerChampionPage = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-9d301bac"]]);
const _imports_0$7 = publicAssetsURL("/assets/OFFICIALVOYAH/newDreamer/images/kv_1920.png");
const _imports_1$4 = publicAssetsURL("/assets/OFFICIALVOYAH/newDreamer/images/newDreamer.png");
const _imports_2$2 = publicAssetsURL("/assets/OFFICIALVOYAH/newDreamer/images/bg_swiper_3_1_n.jpg");
const _imports_3$2 = publicAssetsURL("/assets/OFFICIALVOYAH/newDreamer/images/bg_4_n.jpg");
const _imports_4$1 = publicAssetsURL("/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc11_bg.jpg");
const _imports_5 = publicAssetsURL("/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc20_bg.jpg");
const _imports_6 = publicAssetsURL("/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc21_bg.jpg");
const _imports_7 = publicAssetsURL("/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc22_bg.jpg");
const _imports_8 = publicAssetsURL("/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc24_bg.jpg");
const _imports_9 = publicAssetsURL("/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc25_bg.jpg");
const _imports_10 = publicAssetsURL("/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc26_bg.jpg");
const _imports_11 = publicAssetsURL("/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc28_bg.jpg");
const _imports_12 = publicAssetsURL("/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc29_bg.jpg");
const _imports_13 = publicAssetsURL("/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc30_bg.jpg");
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "NewDreamerPage",
  __ssrInlineRender: true,
  setup(__props) {
    const { textFor } = useSiteContent();
    const activeSection = ref(0);
    const showMobileNav = ref(false);
    const currentColor = ref(0);
    const currentSlide = ref({
      interior: 0,
      cabin: 0,
      luxury: 0,
      pilot: 0,
      ads: 0
    });
    const chapterSections = computed(() => [
      { id: "section1", title: textFor({ en: "Design", fr: "Design", ar: "\u0627\u0644\u062A\u0635\u0645\u064A\u0645" }) },
      { id: "section2", title: textFor({ en: "Cabin", fr: "Cabine", ar: "\u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629" }) },
      { id: "section3", title: textFor({ en: "Interaction", fr: "Int\xE9ract.", ar: "\u0627\u0644\u062A\u0641\u0627\u0639\u0644" }) },
      { id: "section4", title: textFor({ en: "Driving", fr: "Conduite", ar: "\u0627\u0644\u0642\u064A\u0627\u062F\u0629" }) },
      { id: "section5", title: textFor({ en: "Chassis", fr: "Ch\xE2ssis", ar: "\u0627\u0644\u0647\u064A\u0643\u0644" }) },
      { id: "section6", title: textFor({ en: "Power", fr: "Puissance", ar: "\u0627\u0644\u0642\u0648\u0629" }) },
      { id: "section7", title: textFor({ en: "Safety", fr: "S\xE9curit\xE9", ar: "\u0627\u0644\u0633\u0644\u0627\u0645\u0629" }) }
    ]);
    const exteriorColors = computed(() => [
      textFor({ en: "Chenxing Gray", fr: "Gris Chenxing", ar: "\u0631\u0645\u0627\u062F\u064A Chenxing" }),
      textFor({ en: "Duruo White", fr: "Blanc Duruo", ar: "\u0623\u0628\u064A\u0636 Duruo" }),
      textFor({ en: "Xuanye Gold", fr: "Or Xuanye", ar: "\u0630\u0647\u0628 Xuanye" }),
      textFor({ en: "Riyue Glow", fr: "Lueur Riyue", ar: "\u062A\u0648\u0647\u062C Riyue" }),
      textFor({ en: "Haiyue Gold", fr: "Or Haiyue", ar: "\u0630\u0647\u0628 Haiyue" }),
      textFor({ en: "Huiyue Cyan", fr: "Cyan Huiyue", ar: "\u0633\u064A\u0627\u0646 Huiyue" }),
      textFor({ en: "Xuri Purple", fr: "Violet Xuri", ar: "\u0628\u0646\u0641\u0633\u062C\u064A Xuri" }),
      textFor({ en: "Xuanying Black", fr: "Noir Xuanying", ar: "\u0623\u0633\u0648\u062F Xuanying" })
    ]);
    const interiorSlides = computed(() => [
      { name: textFor({ en: "Cotton Rice", fr: "Riz Coton", ar: "\u0623\u0631\u0632 \u0642\u0637\u0646\u064A" }), desc: textFor({ en: "Cotton Rice - Tianshan Snow Cotton", fr: "Riz Coton - Coton Neige Tianshan", ar: "\u0623\u0631\u0632 \u0642\u0637\u0646\u064A - \u0642\u0637\u0646 \u062B\u0644\u062C Tianshan" }), image: "/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc03_0001.jpg" },
      { name: textFor({ en: "Camel Brown", fr: "Brun Chameau", ar: "\u0628\u0646\u064A \u062C\u0645\u0644\u064A" }), desc: textFor({ en: "Camel Brown - Silk Road Bells", fr: "Brun Chameau - Cloches Route Soie", ar: "\u0628\u0646\u064A \u062C\u0645\u0644\u064A - \u0623\u062C\u0631\u0627\u0633 \u0637\u0631\u064A\u0642 \u0627\u0644\u062D\u0631\u064A\u0631" }), image: "/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc03_0002.jpg" },
      { name: textFor({ en: "Cloud Gray", fr: "Gris Nuage", ar: "\u0631\u0645\u0627\u062F\u064A \u0633\u062D\u0627\u0628\u064A" }), desc: textFor({ en: "Cloud Gray - Guanshan Mountains", fr: "Gris Nuage - Montagnes Guanshan", ar: "\u0631\u0645\u0627\u062F\u064A \u0633\u062D\u0627\u0628\u064A - \u062C\u0628\u0627\u0644 Guanshan" }), image: "/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc03_0003.jpg" }
    ]);
    const cabinSlides = computed(() => [
      { image: "/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc08_banner01.jpg", title: textFor({ en: "3rd Row 4-Way Electric Adjustment", fr: "R\xE9glage \xC9lectrique 4 Voies 3\xE8me Rang\xE9e", ar: "\u062A\u0639\u062F\u064A\u0644 \u0643\u0647\u0631\u0628\u0627\u0626\u064A \u0631\u0628\u0627\u0639\u064A \u0644\u0644\u0635\u0641 \u0627\u0644\u062B\u0627\u0644\u062B" }), desc: textFor({ en: "4-way full electric seat adjustment", fr: "R\xE9glage si\xE8ge \xE9lectrique complet 4 voies", ar: "\u062A\u0639\u062F\u064A\u0644 \u0645\u0642\u0639\u062F \u0643\u0647\u0631\u0628\u0627\u0626\u064A \u0643\u0627\u0645\u0644 \u0631\u0628\u0627\u0639\u064A \u0627\u0644\u0627\u062A\u062C\u0627\u0647\u0627\u062A" }) },
      { image: "/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc08_banner02.jpg", title: textFor({ en: "Trunk Space Expands to 2700L", fr: "Espace Coffre S'\xE9tend \xE0 2700L", ar: "\u0645\u0633\u0627\u062D\u0629 \u0627\u0644\u0635\u0646\u062F\u0648\u0642 \u062A\u062A\u0633\u0639 \u0625\u0644\u0649 2700 \u0644\u062A\u0631" }), desc: textFor({ en: "Full 7 seats, fits 8x 20-inch suitcases", fr: "7 si\xE8ges pleins, 8 valises 20 pouces", ar: "7 \u0645\u0642\u0627\u0639\u062F \u0645\u0645\u062A\u0644\u0626\u0629\u060C 8 \u062D\u0642\u0627\u0626\u0628 20 \u0628\u0648\u0635\u0629" }) }
    ]);
    const luxurySlides = computed(() => [
      { image: "/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc09_banner01.jpg", title: textFor({ en: '"Reflecting Mountains" Panel', fr: 'Panneau "Reflet Montagnes"', ar: '\u0644\u0648\u062D\u0629 "\u0627\u0646\u0639\u0643\u0627\u0633 \u0627\u0644\u062C\u0628\u0627\u0644"' }), desc: textFor({ en: "Heaven and earth painted with light", fr: "Ciel et terre peints de lumi\xE8re", ar: "\u0627\u0644\u0633\u0645\u0627\u0621 \u0648\u0627\u0644\u0623\u0631\u0636 \u0645\u0631\u0633\u0648\u0645\u0629 \u0628\u0627\u0644\u0636\u0648\u0621" }) },
      { image: "/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc09_banner02.jpg", title: textFor({ en: "13L Dual-Door Smart Fridge", fr: "R\xE9frig\xE9rateur Intelligent 13L", ar: "\u062B\u0644\u0627\u062C\u0629 \u0630\u0643\u064A\u0629 13 \u0644\u062A\u0631" }), desc: textFor({ en: "24-hour power, every degree to your liking", fr: "Alimentation 24h, chaque degr\xE9 \xE0 votre go\xFBt", ar: "\u062A\u063A\u0630\u064A\u0629 24 \u0633\u0627\u0639\u0629\u060C \u0643\u0644 \u062F\u0631\u062C\u0629 \u062D\u0633\u0628 \u0630\u0648\u0642\u0643" }) },
      { image: "/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc09_banner03.jpg", title: textFor({ en: "OEKO-TEX Baby-Friendly Fabric", fr: "Tissu OEKO-TEX B\xE9b\xE9", ar: "\u0642\u0645\u0627\u0634 OEKO-TEX \u0644\u0644\u0623\u0637\u0641\u0627\u0644" }), desc: textFor({ en: "Safe for children, EU certified", fr: "S\xFBr pour enfants, certifi\xE9 UE", ar: "\u0622\u0645\u0646 \u0644\u0644\u0623\u0637\u0641\u0627\u0644\u060C \u0645\u0639\u062A\u0645\u062F \u0645\u0646 \u0627\u0644\u0627\u062A\u062D\u0627\u062F \u0627\u0644\u0623\u0648\u0631\u0648\u0628\u064A" }) }
    ]);
    const pilotSlides = computed(() => [
      { image: "/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc17_img.jpg", title: textFor({ en: "26 Intelligent Driving Functions", fr: "26 Fonctions Conduite Intelligente", ar: "26 \u0648\u0638\u064A\u0641\u0629 \u0642\u064A\u0627\u062F\u0629 \u0630\u0643\u064A\u0629" }), desc: textFor({ en: "Greatly improves driving convenience and safety", fr: "Am\xE9liore grandement confort et s\xE9curit\xE9", ar: "\u064A\u062D\u0633\u0646 \u0628\u0634\u0643\u0644 \u0643\u0628\u064A\u0631 \u0627\u0644\u0631\u0627\u062D\u0629 \u0648\u0627\u0644\u0623\u0645\u0627\u0646" }) },
      { image: "/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc17_img1.jpg", title: textFor({ en: "172 Parking Scenarios Coverage", fr: "172 Sc\xE9narios Stationnement Couverts", ar: "172 \u0633\u064A\u0646\u0627\u0631\u064A\u0648 \u0631\u0643\u0646 \u0645\u063A\u0637\u0649" }), desc: textFor({ en: "No parking trouble, large car easy to park", fr: "Pas de souci stationnement, grande voiture facile", ar: "\u0644\u0627 \u0642\u0644\u0642 \u0645\u0646 \u0627\u0644\u0631\u0643\u0646\u060C \u0633\u064A\u0627\u0631\u0629 \u0643\u0628\u064A\u0631\u0629 \u0633\u0647\u0644\u0629" }) },
      { image: "/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc17_img2.jpg", title: textFor({ en: "RPA Remote Parking", fr: "Stationnement \xE0 Distance RPA", ar: "\u0631\u0643\u0646 \u0639\u0646 \u0628\u0639\u062F RPA" }), desc: textFor({ en: "One-click easy parking in all scenarios", fr: "Stationnement facile un clic tous sc\xE9narios", ar: "\u0631\u0643\u0646 \u0633\u0647\u0644 \u0628\u0646\u0642\u0631\u0629 \u0648\u0627\u062D\u062F\u0629 \u0641\u064A \u0643\u0644 \u0627\u0644\u0633\u064A\u0646\u0627\u0631\u064A\u0648\u0647\u0627\u062A" }) }
    ]);
    const adsSlides = computed(() => [
      { image: "/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc16_img1.jpg", title: textFor({ en: "End-to-End Full Scenario", fr: "Bout-en-Bout Tout Sc\xE9nario", ar: "\u0645\u0646 \u0627\u0644\u0628\u062F\u0627\u064A\u0629 \u0625\u0644\u0649 \u0627\u0644\u0646\u0647\u0627\u064A\u0629 \u0643\u0644 \u0627\u0644\u0633\u064A\u0646\u0627\u0631\u064A\u0648\u0647\u0627\u062A" }), desc: textFor({ en: "Full scenario\u8D2F\u901A one-click arrival", fr: "Tout sc\xE9nario\u8D2F\u901A arriv\xE9e un clic", ar: "\u0643\u0644 \u0627\u0644\u0633\u064A\u0646\u0627\u0631\u064A\u0648\u0647\u0627\u062A\u8D2F\u901A \u0648\u0635\u0648\u0644 \u0628\u0646\u0642\u0631\u0629 \u0648\u0627\u062D\u062F\u0629" }) },
      { image: "/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc17_img1.jpg", title: textFor({ en: "CAS 3.0 Anti-collision", fr: "Anti-collision CAS 3.0", ar: "\u0645\u0636\u0627\u062F \u0644\u0644\u062A\u0635\u0627\u062F\u0645 CAS 3.0" }), desc: textFor({ en: "Timely emergency response, active safety", fr: "R\xE9ponse urgente \xE0 temps, s\xE9curit\xE9 active", ar: "\u0627\u0633\u062A\u062C\u0627\u0628\u0629 \u0637\u0627\u0631\u0626\u0629 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u060C \u0623\u0645\u0627\u0646 \u0646\u0634\u0637" }) },
      { image: "/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc17_img2.jpg", title: textFor({ en: "VPD Valet Parking", fr: "Stationnement Voiturier VPD", ar: "\u0631\u0643\u0646 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A VPD" }), desc: textFor({ en: "Saves time finding parking and locating car", fr: "\xC9conomise temps recherche parking et voiture", ar: "\u064A\u0648\u0641\u0631 \u0648\u0642\u062A \u0627\u0644\u0628\u062D\u062B \u0639\u0646 \u0645\u0648\u0642\u0641 \u0648\u0627\u0644\u0633\u064A\u0627\u0631\u0629" }) }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "new-dreamer-page" }, _attrs))} data-v-fc52762b><section class="kv-section" data-v-fc52762b><img${ssrRenderAttr("src", _imports_0$7)} class="kv-bg-img" data-v-fc52762b><div class="kv-content" data-v-fc52762b><img${ssrRenderAttr("src", _imports_1$4)} class="kv-logo" data-v-fc52762b><p class="kv-slogan" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Panoramic Luxury Tech Flagship MPV", fr: "MPV Phare Technologique Luxueux Panoramique", ar: "MPV \u0631\u0627\u0626\u062F \u062A\u0642\u0646\u064A \u0641\u0627\u062E\u0631 \u0628\u0627\u0646\u0648\u0631\u0627\u0645\u064A" }))}</p><div class="kv-btns" data-v-fc52762b><button class="voyah-button voyah-button--plain" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Book Test Drive", fr: "R\xE9server Essai", ar: "\u062D\u062C\u0632 \u062A\u062C\u0631\u0628\u0629 \u0642\u064A\u0627\u062F\u0629" }))}</button><button class="voyah-button voyah-button--dark" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Order Now", fr: "Commander", ar: "\u0627\u0637\u0644\u0628 \u0627\u0644\u0622\u0646" }))}</button></div></div></section><div class="${ssrRenderClass([{ visible: showMobileNav.value }, "car-nav-wap fixed-nav"])}" data-v-fc52762b><ul class="car-nav-list" data-v-fc52762b><!--[-->`);
      ssrRenderList(chapterSections.value, (section, index) => {
        _push(`<li class="${ssrRenderClass([{ active: activeSection.value === index }, "car-nav-item"])}" data-v-fc52762b><div class="car-nav-item_icon" data-v-fc52762b><div class="icon-outer" data-v-fc52762b></div><div class="icon-inner" data-v-fc52762b></div></div><div class="car-nav-item_text" data-v-fc52762b><p class="serial" data-v-fc52762b>${ssrInterpolate(String(index + 1).padStart(2, "0"))}</p><p class="title" data-v-fc52762b>${ssrInterpolate(section.title)}</p></div></li>`);
      });
      _push(`<!--]--></ul></div><section id="section1" class="level-one" style="${ssrRenderStyle({ backgroundImage: `url('/assets/OFFICIALVOYAH/newDreamer/images/bg_2_n_1920.jpg')` })}" data-v-fc52762b><h2 class="title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Super Luxury Design", fr: "Design Super Luxueux", ar: "\u062A\u0635\u0645\u064A\u0645 \u0641\u0627\u0626\u0642 \u0627\u0644\u0641\u062E\u0627\u0645\u0629" }))}</h2><p class="subTitle" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Kunpeng Design Philosophy Sublimated", fr: "Philosophie Design Kunpeng Sublim\xE9e", ar: "\u0641\u0644\u0633\u0641\u0629 \u062A\u0635\u0645\u064A\u0645 Kunpeng \u0627\u0644\u0645\u062A\u0635\u0627\u0639\u062F\u0629" }))}</p></section><section class="common" data-v-fc52762b><h3 class="title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Kunpeng Aura", fr: "Aura Kunpeng", ar: "\u0647\u0627\u0644\u0629 Kunpeng" }))}</h3><p class="subTitle" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Kunpeng Soars, Wind-Shaped", fr: "Kunpeng S'envole, Form\xE9 par le Vent", ar: "Kunpeng \u064A\u0646\u0637\u0644\u0642\u060C \u064A\u062A\u0634\u0643\u0644 \u0628\u0627\u0644\u0631\u064A\u0627\u062D" }))}</p><img${ssrRenderAttr("src", _imports_2$2)} class="single-img" data-v-fc52762b><div class="single-description" data-v-fc52762b><div class="description-item" data-v-fc52762b><p class="description-title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Kunpeng Wing Through Headlights", fr: "Phares Traversants Aile Kunpeng", ar: "\u0645\u0635\u0627\u0628\u064A\u062D \u0623\u0645\u0627\u0645\u064A\u0629 \u0639\u0644\u0649 \u0634\u0643\u0644 \u062C\u0646\u0627\u062D Kunpeng" }))}</p><p class="description-content" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Flying light domain, accompanying journeys", fr: "Domaine lumineux volant, accompagnant les voyages", ar: "\u0646\u0637\u0627\u0642 \u0636\u0648\u0626\u064A \u0637\u0627\u0626\u0631\u060C \u064A\u0631\u0627\u0641\u0642 \u0627\u0644\u0631\u062D\u0644\u0627\u062A" }))}</p></div><div class="description-item" data-v-fc52762b><p class="description-title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Fuyao Direct Grille", fr: "Grille Directe Fuyao", ar: "\u0634\u0628\u0643\u0629 Fuyao \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629" }))}</p><p class="description-content" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Magnificent flowing lines, rising to blue sky", fr: "Lignes magnifiques, s'\xE9levant vers le ciel bleu", ar: "\u062E\u0637\u0648\u0637 \u0631\u0627\u0626\u0639\u0629\u060C \u062A\u0631\u062A\u0641\u0639 \u0646\u062D\u0648 \u0627\u0644\u0633\u0645\u0627\u0621 \u0627\u0644\u0632\u0631\u0642\u0627\u0621" }))}</p></div></div></section><section class="common" data-v-fc52762b><img${ssrRenderAttr("src", _imports_3$2)} class="single-img margin-top-0" data-v-fc52762b><div class="single-description column1" data-v-fc52762b><div class="description-item" data-v-fc52762b><p class="description-title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Crystal Diamond Tail Lights", fr: "Feux Arri\xE8re Diamant Cristal", ar: "\u0623\u0636\u0648\u0627\u0621 \u062E\u0644\u0641\u064A\u0629 \u0643\u0631\u064A\u0633\u062A\u0627\u0644\u064A\u0629 \u0645\u0627\u0633\u064A\u0629" }))}</p><p class="description-content" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Feather light flowing, agile shadow", fr: "Lumi\xE8re plume fluide, ombre agile", ar: "\u0636\u0648\u0621 \u0631\u064A\u0634\u0629 \u0645\u062A\u062F\u0641\u0642\u060C \u0638\u0644 \u0631\u0634\u064A\u0642" }))}</p></div></div></section><section class="car-color-container" data-v-fc52762b><h3 class="title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Color Vast Realm", fr: "Couleurs Vaste", ar: "\u0623\u0644\u0648\u0627\u0646 \u0627\u0644\u0645\u0645\u0644\u0643\u0629" }))}</h3><h3 class="subTitle" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Heaven and Earth Open, All into Dream", fr: "Ciel et Terre Ouverts, Tout dans le R\xEAve", ar: "\u0627\u0644\u0633\u0645\u0627\u0621 \u0648\u0627\u0644\u0623\u0631\u0636 \u0645\u0641\u062A\u0648\u062D\u062A\u0627\u0646\u060C \u0643\u0644 \u0634\u064A\u0621 \u0641\u064A \u0627\u0644\u062D\u0644\u0645" }))}</h3><div class="car-swiper-wap" data-v-fc52762b><!--[-->`);
      ssrRenderList(exteriorColors.value, (color, idx) => {
        _push(`<div class="swiper-slide" style="${ssrRenderStyle({ left: idx === currentColor.value ? "0" : "100%" })}" data-v-fc52762b><img${ssrRenderAttr("src", `/assets/OFFICIALVOYAH/newDreamer/images/car/car${idx + 1}.png`)} class="swiper-slide-img" data-v-fc52762b></div>`);
      });
      _push(`<!--]--></div><div class="car-color-list" data-v-fc52762b><!--[-->`);
      ssrRenderList(exteriorColors.value, (color, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentColor.value === idx }, "car-color-item"])}" data-v-fc52762b><img${ssrRenderAttr("src", `/assets/OFFICIALVOYAH/newDreamer/images/car/icon${idx + 1}.png`)} class="img-icon" data-v-fc52762b><p class="color-name" data-v-fc52762b>${ssrInterpolate(color)}</p></div>`);
      });
      _push(`<!--]--></div></section><section class="common commonMax" data-v-fc52762b><h3 class="title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Color Vast Realm", fr: "Couleurs Vaste", ar: "\u0623\u0644\u0648\u0627\u0646 \u0627\u0644\u0645\u0645\u0644\u0643\u0629" }))}</h3><p class="subTitle" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Dream Journey 3000 Miles, Heritage 5000 Years", fr: "Voyage R\xEAv\xE9 3000 Lieues, H\xE9ritage 5000 Ans", ar: "\u0631\u062D\u0644\u0629 \u0627\u0644\u062D\u0644\u0645 3000 \u0645\u064A\u0644\u060C \u062A\u0631\u0627\u062B 5000 \u0639\u0627\u0645" }))}</p><div class="swiper-container" data-v-fc52762b><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translate3d(-${currentSlide.value.interior * 100}%, 0, 0)` })}" data-v-fc52762b><!--[-->`);
      ssrRenderList(interiorSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-fc52762b><img${ssrRenderAttr("src", slide.image)} class="slide-img" data-v-fc52762b><div class="desc-wrap" data-v-fc52762b><p class="desc-title" data-v-fc52762b>${ssrInterpolate(slide.name)}</p><p class="desc-content" data-v-fc52762b>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination" data-v-fc52762b><!--[-->`);
      ssrRenderList(interiorSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.interior === idx }, "pagination-bullet"])}" data-v-fc52762b></div>`);
      });
      _push(`<!--]--></div></section><section id="section2" class="level-one" style="${ssrRenderStyle({ backgroundImage: `url('/assets/OFFICIALVOYAH/newDreamer/images/bg_7_n_1920.jpg')` })}" data-v-fc52762b><h2 class="title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Super Luxury Cabin", fr: "Cabine Super Luxueuse", ar: "\u0645\u0642\u0635\u0648\u0631\u0629 \u0641\u0627\u0626\u0642\u0629 \u0627\u0644\u0641\u062E\u0627\u0645\u0629" }))}</h2><p class="subTitle" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Spacious Reception Living Room, Comfortable Large Flat Floor", fr: "Salon R\xE9ception Spacieux, Grand \xC9tage Plat Confortable", ar: "\u0635\u0627\u0644\u0629 \u0627\u0633\u062A\u0642\u0628\u0627\u0644 \u0641\u0633\u064A\u062D\u0629\u060C \u0637\u0627\u0628\u0642 \u0643\u0628\u064A\u0631 \u0645\u0633\u0637\u062D \u0645\u0631\u064A\u062D" }))}</p></section><section class="common commonMax" data-v-fc52762b><h3 class="title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "7\u33A1 Ultra-Large Wide Flat Floor", fr: "Plancher Plat Large Ultra-Grand 7\u33A1", ar: "\u0623\u0631\u0636\u064A\u0629 \u0645\u0633\u0637\u062D\u0629 \u0648\u0627\u0633\u0639\u0629 \u0641\u0627\u0626\u0642\u0629 7 \u0645\xB2" }))}</h3><p class="subTitle" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Three Rows Seven Seats, Every Seat is First Class", fr: "Trois Rang\xE9es Sept Si\xE8ges, Chaque Si\xE8ge est Premi\xE8re Classe", ar: "\u062B\u0644\u0627\u062B\u0629 \u0635\u0641\u0648\u0641 \u0633\u0628\u0639\u0629 \u0645\u0642\u0627\u0639\u062F\u060C \u0643\u0644 \u0645\u0642\u0639\u062F \u0645\u0646 \u0627\u0644\u062F\u0631\u062C\u0629 \u0627\u0644\u0623\u0648\u0644\u0649" }))}</p><div class="swiper-container" data-v-fc52762b><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translate3d(-${currentSlide.value.cabin * 100}%, 0, 0)` })}" data-v-fc52762b><!--[-->`);
      ssrRenderList(cabinSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-fc52762b><img${ssrRenderAttr("src", slide.image)} class="slide-img" data-v-fc52762b><div class="desc-wrap" data-v-fc52762b><p class="desc-title" data-v-fc52762b>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-fc52762b>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination" data-v-fc52762b><!--[-->`);
      ssrRenderList(cabinSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.cabin === idx }, "pagination-bullet"])}" data-v-fc52762b></div>`);
      });
      _push(`<!--]--></div></section><section class="common commonMax" data-v-fc52762b><h3 class="title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Immersive Luxury Cabin", fr: "Cabine Luxueuse Immersive", ar: "\u0645\u0642\u0635\u0648\u0631\u0629 \u0641\u0627\u062E\u0631\u0629 \u063A\u0627\u0645\u0631\u0629" }))}</h3><div class="swiper-container" data-v-fc52762b><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translate3d(-${currentSlide.value.luxury * 100}%, 0, 0)` })}" data-v-fc52762b><!--[-->`);
      ssrRenderList(luxurySlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-fc52762b><img${ssrRenderAttr("src", slide.image)} class="slide-img" data-v-fc52762b><div class="desc-wrap" data-v-fc52762b><p class="desc-title" data-v-fc52762b>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-fc52762b>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination" data-v-fc52762b><!--[-->`);
      ssrRenderList(luxurySlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.luxury === idx }, "pagination-bullet"])}" data-v-fc52762b></div>`);
      });
      _push(`<!--]--></div></section><section id="section3" class="level-one" style="${ssrRenderStyle({ backgroundImage: `url('/assets/OFFICIALVOYAH/newDreamer/images/bg_10_n_1920.jpg')` })}" data-v-fc52762b><h2 class="title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Full Sensation Intelligent Interaction", fr: "Interaction Intelligente Sensation Compl\xE8te", ar: "\u062A\u0641\u0627\u0639\u0644 \u0630\u0643\u064A \u0628\u0625\u062D\u0633\u0627\u0633 \u0643\u0627\u0645\u0644" }))}</h2><p class="subTitle" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Space Interaction No Longer Cramped, Every Position is C-Position", fr: "Interaction Espace Plus Serr\xE9e, Chaque Position est Position C", ar: "\u062A\u0641\u0627\u0639\u0644 \u0627\u0644\u0641\u0636\u0627\u0621 \u0644\u0645 \u064A\u0639\u062F \u0636\u064A\u0642\u0627\u064B\u060C \u0643\u0644 \u0645\u0648\u0642\u0639 \u0647\u0648 \u0645\u0648\u0642\u0639 C" }))}</p></section><section class="common" data-v-fc52762b><h3 class="title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Huawei Harmony Cockpit", fr: "Cockpit Huawei Harmony", ar: "\u0645\u0642\u0635\u0648\u0631\u0629 Huawei Harmony" }))}</h3><img${ssrRenderAttr("src", _imports_4$1)} class="single-img" data-v-fc52762b><div class="single-description" data-v-fc52762b><div class="description-item" data-v-fc52762b><p class="description-title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Seamless Handoff Car-Phone", fr: "Transfert Sans Couture Voiture-T\xE9l\xE9phone", ar: "\u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0627\u0644\u0633\u0644\u0633 \u0633\u064A\u0627\u0631\u0629-\u0647\u0627\u062A\u0641" }))}</p><p class="description-content" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Navigation seamless, calls transfer to car", fr: "Navigation sans couture, appels transf\xE9r\xE9s \xE0 la voiture", ar: "\u0645\u0644\u0627\u062D\u0629 \u0633\u0644\u0633\u0629\u060C \u0645\u0643\u0627\u0644\u0645\u0627\u062A \u062A\u0646\u062A\u0642\u0644 \u0644\u0644\u0633\u064A\u0627\u0631\u0629" }))}</p></div><div class="description-item" data-v-fc52762b><p class="description-title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Super Desktop Split-Screen", fr: "Bureau Super \xC9cran Partag\xE9", ar: "\u0633\u0637\u062D \u0645\u0643\u062A\u0628 \u0633\u0648\u0628\u0631 \u0634\u0627\u0634\u0629 \u0645\u0642\u0633\u0645\u0629" }))}</p><p class="description-content" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Car and phone ecosystem integration", fr: "Int\xE9gration \xE9cosyst\xE8me voiture et t\xE9l\xE9phone", ar: "\u062A\u0643\u0627\u0645\u0644 \u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0628\u064A\u0626\u064A \u0644\u0644\u0633\u064A\u0627\u0631\u0629 \u0648\u0627\u0644\u0647\u0627\u062A\u0641" }))}</p></div></div></section><section id="section4" class="level-one" style="${ssrRenderStyle({ backgroundImage: `url('/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc16_bg_1920.jpg')` })}" data-v-fc52762b><h2 class="title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "All-Terrain Intelligent Driving", fr: "Conduite Intelligente Tout Terrain", ar: "\u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0627\u0644\u0630\u0643\u064A\u0629 \u0641\u064A \u0643\u0644 \u0627\u0644\u062A\u0636\u0627\u0631\u064A\u0633" }))}</h2><p class="subTitle" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "All-weather, All-direction, All-target", fr: "Tout Temps, Toute Direction, Toute Cible", ar: "\u0643\u0644 \u0627\u0644\u0623\u062D\u0648\u0627\u0644 \u0627\u0644\u062C\u0648\u064A\u0629\u060C \u0643\u0644 \u0627\u0644\u0627\u062A\u062C\u0627\u0647\u0627\u062A\u060C \u0643\u0644 \u0627\u0644\u0623\u0647\u062F\u0627\u0641" }))}</p></section><section class="common commonMax" data-v-fc52762b><h3 class="title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Kunpeng Intelligent Driving", fr: "Conduite Intelligente Kunpeng", ar: "\u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0627\u0644\u0630\u0643\u064A\u0629 Kunpeng" }))}</h3><div class="swiper-container" data-v-fc52762b><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translate3d(-${currentSlide.value.pilot * 100}%, 0, 0)` })}" data-v-fc52762b><!--[-->`);
      ssrRenderList(pilotSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-fc52762b><img${ssrRenderAttr("src", slide.image)} class="slide-img" data-v-fc52762b><div class="desc-wrap" data-v-fc52762b><p class="desc-title" data-v-fc52762b>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-fc52762b>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination" data-v-fc52762b><!--[-->`);
      ssrRenderList(pilotSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.pilot === idx }, "pagination-bullet"])}" data-v-fc52762b></div>`);
      });
      _push(`<!--]--></div></section><section class="common commonMax" data-v-fc52762b><h3 class="title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Huawei ADS 3.0", fr: "Huawei ADS 3.0", ar: "Huawei ADS 3.0" }))}</h3><div class="swiper-container" data-v-fc52762b><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translate3d(-${currentSlide.value.ads * 100}%, 0, 0)` })}" data-v-fc52762b><!--[-->`);
      ssrRenderList(adsSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-fc52762b><img${ssrRenderAttr("src", slide.image)} class="slide-img" loading="lazy" decoding="async" data-v-fc52762b><div class="desc-wrap" data-v-fc52762b><p class="desc-title" data-v-fc52762b>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-fc52762b>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination" data-v-fc52762b><!--[-->`);
      ssrRenderList(adsSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.ads === idx }, "pagination-bullet"])}" data-v-fc52762b></div>`);
      });
      _push(`<!--]--></div></section><section id="section5" class="level-one" style="${ssrRenderStyle({ backgroundImage: `url('/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc19_bg_1920.jpg')` })}" data-v-fc52762b><h2 class="title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Flagship Intelligent Chassis", fr: "Ch\xE2ssis Intelligent Phare", ar: "\u0647\u064A\u0643\u0644 \u0630\u0643\u064A \u0631\u0627\u0626\u062F" }))}</h2><p class="subTitle" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Breaking Through MPV Application Scenarios", fr: "Percer Sc\xE9narios Application MPV", ar: "\u0627\u062E\u062A\u0631\u0627\u0642 \u0633\u064A\u0646\u0627\u0631\u064A\u0648\u0647\u0627\u062A \u062A\u0637\u0628\u064A\u0642 MPV" }))}</p></section><section class="common" data-v-fc52762b><h3 class="title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Intelligent Magic Carpet Air Suspension", fr: "Suspension Pneumatique Tapis Magique", ar: "\u062A\u0639\u0644\u064A\u0642 \u0647\u0648\u0627\u0626\u064A \u0633\u062D\u0631\u064A \u0630\u0643\u064A" }))}</h3><img${ssrRenderAttr("src", _imports_5)} class="single-img" data-v-fc52762b><div class="single-description column3" data-v-fc52762b><div class="description-item" data-v-fc52762b><p class="description-title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Class-Exclusive Magic Carpet", fr: "Tapis Magique Exclusif Classe", ar: "\u0633\u062C\u0627\u062F\u0629 \u0633\u062D\u0631\u064A\u0629 \u062D\u0635\u0631\u064A\u0629 \u0644\u0644\u0641\u0626\u0629" }))}</p><p class="description-content" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Suspension soft/hard active adjustment", fr: "R\xE9glage actif suspension douce/dure", ar: "\u062A\u0639\u062F\u064A\u0644 \u0646\u0634\u0637 \u0644\u0644\u062A\u0639\u0644\u064A\u0642 \u0627\u0644\u0646\u0627\u0639\u0645/\u0627\u0644\u0635\u0644\u0628" }))}</p></div><div class="description-item" data-v-fc52762b><p class="description-title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "60mm Height Adjustment", fr: "R\xE9glage Hauteur 60mm", ar: "\u062A\u0639\u062F\u064A\u0644 \u0627\u0631\u062A\u0641\u0627\u0639 60 \u0645\u0645" }))}</p><p class="description-content" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Adapts to more user scenarios", fr: "S'adapte \xE0 plus de sc\xE9narios", ar: "\u064A\u062A\u0643\u064A\u0641 \u0645\u0639 \u0627\u0644\u0645\u0632\u064A\u062F \u0645\u0646 \u0627\u0644\u0633\u064A\u0646\u0627\u0631\u064A\u0648\u0647\u0627\u062A" }))}</p></div><div class="description-item" data-v-fc52762b><p class="description-title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Intelligent Variable Damper", fr: "Amortisseur Variable Intelligent", ar: "\u0645\u062E\u0645\u062F \u0645\u062A\u063A\u064A\u0631 \u0630\u0643\u064A" }))}</p><p class="description-content" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Comfortable ride on bumpy roads", fr: "Conduite confortable sur routes cahoteuses", ar: "\u0642\u064A\u0627\u062F\u0629 \u0645\u0631\u064A\u062D\u0629 \u0639\u0644\u0649 \u0627\u0644\u0637\u0631\u0642 \u0627\u0644\u0648\u0639\u0631\u0629" }))}</p></div></div></section><section class="common" data-v-fc52762b><h3 class="title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "High-End Flagship Chassis", fr: "Ch\xE2ssis Phare Haut de Gamme", ar: "\u0647\u064A\u0643\u0644 \u0631\u0627\u0626\u062F \u0645\u062A\u0645\u064A\u0632" }))}</h3><img${ssrRenderAttr("src", _imports_6)} class="single-img" data-v-fc52762b><div class="single-description" data-v-fc52762b><div class="description-item" data-v-fc52762b><p class="description-title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Front Double Wishbone + Rear Five-Link", fr: "Double Triangle Avant + 5 Bras Arri\xE8re", ar: "\u0645\u062B\u0644\u062B \u0645\u0632\u062F\u0648\u062C \u0623\u0645\u0627\u0645\u064A + 5 \u0623\u0630\u0631\u0639 \u062E\u0644\u0641\u064A\u0629" }))}</p><p class="description-content" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "MPV comfort, sedan driving", fr: "Confort MPV, conduite berline", ar: "\u0631\u0627\u062D\u0629 MPV\u060C \u0642\u064A\u0627\u062F\u0629 \u0633\u064A\u062F\u0627\u0646" }))}</p></div><div class="description-item" data-v-fc52762b><p class="description-title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "All-Aluminum Chassis", fr: "Ch\xE2ssis Tout Aluminium", ar: "\u0647\u064A\u0643\u0644 \u0645\u0646 \u0627\u0644\u0623\u0644\u0648\u0645\u0646\u064A\u0648\u0645 \u0628\u0627\u0644\u0643\u0627\u0645\u0644" }))}</p><p class="description-content" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Reduces unsprung mass, stable and safe", fr: "R\xE9duit masse non suspendue, stable et s\xFBr", ar: "\u064A\u0642\u0644\u0644 \u0627\u0644\u0643\u062A\u0644\u0629 \u063A\u064A\u0631 \u0627\u0644\u0645\u0639\u0644\u0642\u0629\u060C \u0645\u0633\u062A\u0642\u0631 \u0648\u0622\u0645\u0646" }))}</p></div></div></section><section class="common" data-v-fc52762b><h3 class="title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Full Series Intelligent Electric 4WD", fr: "4WD \xC9lectrique Intelligent S\xE9rie Compl\xE8te", ar: "\u062F\u0641\u0639 \u0631\u0628\u0627\u0639\u064A \u0643\u0647\u0631\u0628\u0627\u0626\u064A \u0630\u0643\u064A \u0644\u0644\u0633\u0644\u0633\u0644\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629" }))}</h3><img${ssrRenderAttr("src", _imports_7)} class="single-img" data-v-fc52762b><div class="single-description" data-v-fc52762b><div class="description-item" data-v-fc52762b><p class="description-title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Dual Motor Layout, Torque Vectoring", fr: "Disposition Double Moteur, Vectorisation Couple", ar: "\u062A\u062E\u0637\u064A\u0637 \u0645\u0632\u062F\u0648\u062C \u0627\u0644\u0645\u062D\u0631\u0643\u060C \u062A\u062D\u062C\u064A\u0645 \u0627\u0644\u0639\u0632\u0645" }))}</p><p class="description-content" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "0-100% intelligent adjustment, 50:50 load", fr: "R\xE9glage intelligent 0-100%, charge 50:50", ar: "\u062A\u0639\u062F\u064A\u0644 \u0630\u0643\u064A 0-100%\u060C \u062D\u0645\u0644 50:50" }))}</p></div></div></section><section id="section6" class="level-one" style="${ssrRenderStyle({ backgroundImage: `url('/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc23_bg_1920.jpg')` })}" data-v-fc52762b><h2 class="title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Flagship Lanhai Power", fr: "Puissance Lanhai Phare", ar: "\u0642\u0648\u0629 Lanhai \u0627\u0644\u0631\u0627\u0626\u062F\u0629" }))}</h2><p class="subTitle" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "All Roads Worry-Free, Long Journey Assured", fr: "Toutes Routes Sans Souci, Long Voyage Assur\xE9", ar: "\u062C\u0645\u064A\u0639 \u0627\u0644\u0637\u0631\u0642 \u0628\u0644\u0627 \u0642\u0644\u0642\u060C \u0631\u062D\u0644\u0629 \u0637\u0648\u064A\u0644\u0629 \u0645\u0636\u0645\u0648\u0646\u0629" }))}</p></section><section class="common" data-v-fc52762b><h3 class="title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Lanhai Power PHEV", fr: "Puissance Lanhai PHEV", ar: "\u0642\u0648\u0629 Lanhai PHEV" }))}</h3><img${ssrRenderAttr("src", _imports_8)} class="single-img" data-v-fc52762b><div class="single-description" data-v-fc52762b><div class="description-item" data-v-fc52762b><p class="description-title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "6-in-1 Series-Parallel Architecture", fr: "Architecture S\xE9rie-Parall\xE8le 6-en-1", ar: "\u0647\u0646\u062F\u0633\u0629 \u0633\u0644\u0633\u0644\u0629-\u062A\u0648\u0627\u0632\u064A 6 \u0641\u064A 1" }))}</p><p class="description-content" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Covers all travel scenarios: EV, series, parallel, power generation, parking, recovery", fr: "Couvre tous sc\xE9narios: EV, s\xE9rie, parall\xE8le, g\xE9n\xE9ration, parking, r\xE9cup\xE9ration", ar: "\u064A\u063A\u0637\u064A \u0643\u0644 \u0627\u0644\u0633\u064A\u0646\u0627\u0631\u064A\u0648\u0647\u0627\u062A: \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u060C \u0633\u0644\u0633\u0644\u0629\u060C \u062A\u0648\u0627\u0632\u064A\u060C \u062A\u0648\u0644\u064A\u062F\u060C \u0631\u0643\u0646\u060C \u0627\u0633\u062A\u0631\u062F\u0627\u062F" }))}</p></div></div></section><section class="common" data-v-fc52762b><h3 class="title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "High-End Ultra-Long Range", fr: "Autonomie Ultra-Longue Haut de Gamme", ar: "\u0645\u062F\u0649 \u0641\u0627\u0626\u0642 \u0627\u0644\u0637\u0648\u0644 \u0645\u062A\u0645\u064A\u0632" }))}</h3><img${ssrRenderAttr("src", _imports_9)} class="single-img" data-v-fc52762b><div class="single-description" data-v-fc52762b><div class="description-item" data-v-fc52762b><p class="description-title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "1411km Combined, 235km EV (CLTC)", fr: "1411km Combin\xE9, 235km EV (CLTC)", ar: "1411 \u0643\u0645 \u0645\u062C\u0645\u0639\u060C 235 \u0643\u0645 \u0643\u0647\u0631\u0628\u0627\u0626\u064A (CLTC)" }))}</p><p class="description-content" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "0.65L/100km combined, 5.42L/100km fuel consumption", fr: "0.65L/100km combin\xE9, 5.42L/100km consommation", ar: "0.65 \u0644\u062A\u0631/100 \u0643\u0645 \u0645\u062C\u0645\u0639\u060C 5.42 \u0644\u062A\u0631/100 \u0643\u0645 \u0627\u0633\u062A\u0647\u0644\u0627\u0643" }))}</p></div></div></section><section class="common" data-v-fc52762b><h3 class="title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "High-Energy Surging Power", fr: "Puissance Surging Haute \xC9nergie", ar: "\u0642\u0648\u0629 \u0639\u0627\u0644\u064A\u0629 \u0627\u0644\u0637\u0627\u0642\u0629 \u0645\u062A\u062F\u0641\u0642\u0629" }))}</h3><img${ssrRenderAttr("src", _imports_10)} class="single-img" data-v-fc52762b><div class="single-description" data-v-fc52762b><div class="description-item" data-v-fc52762b><p class="description-title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "420kW Ultra-Strong Power", fr: "420kW Puissance Ultra-Forte", ar: "420 \u0643\u064A\u0644\u0648\u0648\u0627\u0637 \u0642\u0648\u0629 \u0641\u0627\u0626\u0642\u0629" }))}</p><p class="description-content" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Fully loaded 7 people + luggage still powerful", fr: "Pleinement charg\xE9 7 personnes + bagages toujours puissant", ar: "\u0645\u062D\u0645\u0644 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 7 \u0623\u0634\u062E\u0627\u0635 + \u0623\u0645\u062A\u0639\u0629 \u0645\u0627 \u0632\u0627\u0644 \u0642\u0648\u064A\u0627\u064B" }))}</p></div><div class="description-item" data-v-fc52762b><p class="description-title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "0-100km/h 5.9s", fr: "0-100km/h 5.9s", ar: "0-100 \u0643\u0645/\u0633\u0627\u0639\u0629 5.9 \u062B\u0627\u0646\u064A\u0629" }))}</p><p class="description-content" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Priority lane selection, ample overtaking", fr: "S\xE9lection prioritaire voie, d\xE9passement ample", ar: "\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0645\u0633\u0627\u0631 \u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629\u060C \u062A\u062C\u0627\u0648\u0632 \u0643\u0627\u0641\u064D" }))}</p></div></div></section><section id="section7" class="level-one" style="${ssrRenderStyle({ backgroundImage: `url('/assets/OFFICIALVOYAH/newDreamer/images/h56c_pc27_bg_1920.jpg')` })}" data-v-fc52762b><h2 class="title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Flagship All-Domain Safety", fr: "S\xE9curit\xE9 Tout Domaine Phare", ar: "\u0623\u0645\u0627\u0646 \u0631\u0627\u0626\u062F \u0641\u064A \u0643\u0644 \u0627\u0644\u0645\u062C\u0627\u0644\u0627\u062A" }))}</h2><p class="subTitle" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Refreshing MPV Safety Standards", fr: "Rafra\xEEchir Standards S\xE9curit\xE9 MPV", ar: "\u062A\u062D\u062F\u064A\u062B \u0645\u0639\u0627\u064A\u064A\u0631 \u0623\u0645\u0627\u0646 MPV" }))}</p></section><section class="common" data-v-fc52762b><h3 class="title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "All-Around Body Protection", fr: "Protection Carrosserie Tout Autour", ar: "\u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0647\u064A\u0643\u0644 \u0645\u0646 \u062C\u0645\u064A\u0639 \u0627\u0644\u062C\u0648\u0627\u0646\u0628" }))}</h3><img${ssrRenderAttr("src", _imports_11)} class="single-img" data-v-fc52762b><div class="single-description" data-v-fc52762b><div class="description-item" data-v-fc52762b><p class="description-title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "2000MPa Ultra-High Strength Cage", fr: "Cage Ultra-R\xE9sistante 2000MPa", ar: "\u0642\u0641\u0635 \u0641\u0627\u0626\u0642 \u0627\u0644\u0645\u0642\u0627\u0648\u0645\u0629 2000 \u0645\u064A\u062C\u0627 \u0628\u0627\u0633\u0643\u0627\u0644" }))}</p><p class="description-content" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "World's first 2000MPa laser welded door ring", fr: "Premier mondial anneau porte soud\xE9 laser 2000MPa", ar: "\u0627\u0644\u0623\u0648\u0644 \u0639\u0627\u0644\u0645\u064A\u0627\u064B \u062D\u0644\u0642\u0629 \u0628\u0627\u0628 \u0645\u0644\u062D\u0648\u0645\u0629 \u0628\u0627\u0644\u0644\u064A\u0632\u0631 2000 \u0645\u064A\u062C\u0627 \u0628\u0627\u0633\u0643\u0627\u0644" }))}</p></div><div class="description-item" data-v-fc52762b><p class="description-title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Five-Layer Rear Collision", fr: "Collision Arri\xE8re Cinq Couches", ar: "\u062A\u0635\u0627\u062F\u0645 \u062E\u0644\u0641\u064A \u0628\u062E\u0645\u0633 \u0637\u0628\u0642\u0627\u062A" }))}</p><p class="description-content" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "First MPV passing 110km/h US rear collision test", fr: "Premier MPV passant test collision arri\xE8re 110km/h US", ar: "\u0623\u0648\u0644 MPV \u064A\u062C\u062A\u0627\u0632 \u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u062A\u0635\u0627\u062F\u0645 \u0627\u0644\u062E\u0644\u0641\u064A 110 \u0643\u0645/\u0633\u0627\u0639\u0629 US" }))}</p></div></div></section><section class="common" data-v-fc52762b><h3 class="title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Full-Function Driver Protection", fr: "Protection Conducteur Pleine Fonction", ar: "\u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0633\u0627\u0626\u0642 \u0628\u0643\u0627\u0645\u0644 \u0627\u0644\u0648\u0638\u0627\u0626\u0641" }))}</h3><img${ssrRenderAttr("src", _imports_12)} class="single-img" data-v-fc52762b><div class="single-description column3" data-v-fc52762b><div class="description-item" data-v-fc52762b><p class="description-title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Intelligent Visual Sentry", fr: "Sentinelle Visuelle Intelligente", ar: "\u062D\u0627\u0631\u0633 \u0645\u0631\u0626\u064A \u0630\u0643\u064A" }))}</p><p class="description-content" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "All-round real-time monitoring", fr: "Surveillance temps r\xE9el tout autour", ar: "\u0645\u0631\u0627\u0642\u0628\u0629 \u0641\u0648\u0631\u064A\u0629 \u0645\u0646 \u062C\u0645\u064A\u0639 \u0627\u0644\u062C\u0648\u0627\u0646\u0628" }))}</p></div><div class="description-item" data-v-fc52762b><p class="description-title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "540\xB0 Ultra-Clear Panoramic", fr: "Panoramique Ultra-Clair 540\xB0", ar: "\u0628\u0627\u0646\u0648\u0631\u0627\u0645\u064A \u0641\u0627\u0626\u0642 \u0627\u0644\u0648\u0636\u0648\u062D 540\xB0" }))}</p><p class="description-content" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "No blind spots reversing, easy parking", fr: "Pas angles morts recul, parking facile", ar: "\u0644\u0627 \u0632\u0648\u0627\u064A\u0627 \u0639\u0645\u064A\u0627\u0621 \u0644\u0644\u0631\u062C\u0648\u0639\u060C \u0631\u0643\u0646 \u0633\u0647\u0644" }))}</p></div><div class="description-item" data-v-fc52762b><p class="description-title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "21 Active Safety Functions", fr: "21 Fonctions S\xE9curit\xE9 Active", ar: "21 \u0648\u0638\u064A\u0641\u0629 \u0623\u0645\u0627\u0646 \u0646\u0634\u0637\u0629" }))}</p><p class="description-content" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Timely emergency response", fr: "R\xE9ponse urgente \xE0 temps", ar: "\u0627\u0633\u062A\u062C\u0627\u0628\u0629 \u0637\u0627\u0631\u0626\u0629 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0645\u0646\u0627\u0633\u0628" }))}</p></div></div></section><section class="common" data-v-fc52762b><h3 class="title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "All-Weather Battery Protection", fr: "Protection Batterie Tout Temps", ar: "\u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629 \u0639\u0644\u0649 \u0645\u062F\u0627\u0631 \u0627\u0644\u0633\u0627\u0639\u0629" }))}</h3><img${ssrRenderAttr("src", _imports_13)} class="single-img" data-v-fc52762b><div class="single-description" data-v-fc52762b><div class="description-item" data-v-fc52762b><p class="description-title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: `"Four No's" Mica Battery`, fr: 'Batterie Mica "Quatre Non"', ar: '\u0628\u0637\u0627\u0631\u064A\u0629 \u0627\u0644\u0645\u064A\u0643\u0627 "\u0623\u0631\u0628\u0639 \u0644\u0627"' }))}</p><p class="description-content" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "No leakage, no fire, no explosion, no thermal runaway", fr: "Pas fuite, pas feu, pas explosion, pas emballement", ar: "\u0644\u0627 \u062A\u0633\u0631\u0628\u060C \u0644\u0627 \u0646\u0627\u0631\u060C \u0644\u0627 \u0627\u0646\u0641\u062C\u0627\u0631\u060C \u0644\u0627 \u062C\u0646\u0648\u0646 \u062D\u0631\u0627\u0631\u064A" }))}</p></div><div class="description-item" data-v-fc52762b><p class="description-title" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "1500MPa Battery Shield", fr: "Bouclier Batterie 1500MPa", ar: "\u062F\u0631\u0639 \u0628\u0637\u0627\u0631\u064A\u0629 1500 \u0645\u064A\u062C\u0627 \u0628\u0627\u0633\u0643\u0627\u0644" }))}</p><p class="description-content" data-v-fc52762b>${ssrInterpolate(unref(textFor)({ en: "Fearless of accidents and underbody scrapes", fr: "Sans crainte accidents et raclures", ar: "\u0628\u0644\u0627 \u062E\u0648\u0641 \u0645\u0646 \u0627\u0644\u062D\u0648\u0627\u062F\u062B \u0648\u0627\u0644\u062E\u062F\u0648\u0634" }))}</p></div></div></section></div>`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vehicles/dreamer/NewDreamerPage.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const NewDreamerPage = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-fc52762b"]]);
const _imports_0$6 = publicAssetsURL("/assets/OFFICIALVOYAH/dreamriver/images/kv_1920.png");
const _imports_1$3 = publicAssetsURL("/assets/OFFICIALVOYAH/dreamriver/images/dreamriver.png");
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "DreamerRiverPage",
  __ssrInlineRender: true,
  setup(__props) {
    const { textFor } = useSiteContent();
    const currentColor = ref(0);
    const currentSlide = ref({
      luxury: 0,
      interior: 0,
      comfort: 0,
      elegance: 0,
      interaction: 0,
      privacy: 0,
      senses: 0,
      safety: 0,
      performance: 0
    });
    const exteriorColors = computed(() => [
      textFor({ en: "Haoyue Purple Cloud Two-Tone", fr: "Deux Tons Nuage Violet Haoyue", ar: "\u0644\u0648\u0646\u0627\u0646 \u0633\u062D\u0627\u0628\u064A \u0628\u0646\u0641\u0633\u062C\u064A Haoyue" }),
      textFor({ en: "Dawn Golden Glow Two-Tone", fr: "Deux Tons Lueur Dor\xE9e Aube", ar: "\u0644\u0648\u0646\u0627\u0646 \u0630\u0647\u0628\u064A \u0645\u062A\u0648\u0647\u062C Dawn" })
    ]);
    const luxurySlides = computed(() => [
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_2.png", title: textFor({ en: "Haoyue Purple Cloud Two-Tone Body", fr: "Carrosserie Deux Tons Nuage Violet Haoyue", ar: "\u0647\u064A\u0643\u0644 \u0628\u0644\u0648\u0646\u064A\u0646 \u0633\u062D\u0627\u0628\u064A \u0628\u0646\u0641\u0633\u062C\u064A Haoyue" }), desc: textFor({ en: "Magnificent mountains and rivers, purple aura from the east", fr: "Montagnes et rivi\xE8res magnifiques, aura violette de l'est", ar: "\u062C\u0628\u0627\u0644 \u0648\u0623\u0646\u0647\u0627\u0631 \u0631\u0627\u0626\u0639\u0629\u060C \u0647\u0627\u0644\u0629 \u0628\u0646\u0641\u0633\u062C\u064A\u0629 \u0645\u0646 \u0627\u0644\u0634\u0631\u0642" }) },
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_2-2.png", title: textFor({ en: "Kunpeng Wing Through Headlights", fr: "Phares Traversants Aile Kunpeng", ar: "\u0645\u0635\u0627\u0628\u064A\u062D \u0623\u0645\u0627\u0645\u064A\u0629 \u0639\u0644\u0649 \u0634\u0643\u0644 \u062C\u0646\u0627\u062D Kunpeng" }), desc: textFor({ en: "Kunpeng soars, enjoying mountains and rivers", fr: "Kunpeng s'envole, profitant des montagnes et rivi\xE8res", ar: "Kunpeng \u064A\u0646\u0637\u0644\u0642\u060C \u064A\u0633\u062A\u0645\u062A\u0639 \u0628\u0627\u0644\u062C\u0628\u0627\u0644 \u0648\u0627\u0644\u0623\u0646\u0647\u0627\u0631" }) },
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_2-3.png", title: textFor({ en: "20-inch Star Vortex Wheels", fr: "Roues Vortex \xC9toile 20 pouces", ar: "\u0639\u062C\u0644\u0627\u062A \u062F\u0648\u0627\u0645\u0629 \u0646\u062C\u0645\u064A\u0629 20 \u0628\u0648\u0635\u0629" }), desc: textFor({ en: "Million-level customization, stable as mountains in wind and rain", fr: "Personnalisation niveau million, stable comme montagnes", ar: "\u062A\u062E\u0635\u064A\u0635 \u0628\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0645\u0644\u064A\u0648\u0646\u060C \u0645\u0633\u062A\u0642\u0631 \u0643\u0627\u0644\u062C\u0628\u0627\u0644" }) },
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_2-4.png", title: textFor({ en: '"Viewing Mountains" Illuminated Panel', fr: 'Panneau Illumin\xE9 "Vue Montagnes"', ar: '\u0644\u0648\u062D\u0629 \u0645\u0636\u064A\u0626\u0629 "\u0645\u0646\u0627\u0638\u0631 \u0627\u0644\u062C\u0628\u0627\u0644"' }), desc: textFor({ en: "Mountains and waters intertwined, vibrant and resonant", fr: "Montagnes et eaux entrelac\xE9es, vibrantes et r\xE9sonnantes", ar: "\u062C\u0628\u0627\u0644 \u0648\u0645\u064A\u0627\u0647 \u0645\u062A\u0634\u0627\u0628\u0643\u0629\u060C \u0646\u0627\u0628\u0636\u0629 \u0628\u0627\u0644\u062D\u064A\u0627\u0629" }) }
    ]);
    const interiorSlides = computed(() => [
      { name: textFor({ en: "Purple Rice Interior", fr: "Int\xE9rieur Riz Violet", ar: "\u062F\u0627\u062E\u0644\u064A\u0629 \u0623\u0631\u0632 \u0628\u0646\u0641\u0633\u062C\u064A" }), image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_4.png" },
      { name: textFor({ en: "Blue Black Interior", fr: "Int\xE9rieur Bleu Noir", ar: "\u062F\u0627\u062E\u0644\u064A\u0629 \u0623\u0632\u0631\u0642 \u0623\u0633\u0648\u062F" }), image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_4-2.png" }
    ]);
    const comfortSlides = computed(() => [
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_5.png", title: textFor({ en: "Exclusive Private Super First Class", fr: "Super Premi\xE8re Classe Priv\xE9e Exclusive", ar: "\u062F\u0631\u062C\u0629 \u0623\u0648\u0644\u0649 \u0641\u0627\u0626\u0642\u0629 \u062E\u0627\u0635\u0629 \u062D\u0635\u0631\u064A\u0629" }), desc: textFor({ en: "Exclusive cabin, fully luxurious", fr: "Cabine exclusive, enti\xE8rement luxueuse", ar: "\u0645\u0642\u0635\u0648\u0631\u0629 \u062D\u0635\u0631\u064A\u0629\u060C \u0641\u0627\u062E\u0631\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644" }) },
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_5-2.png", title: textFor({ en: '"Mountains and Rivers Cloud Couch" Stretch Mode', fr: 'Mode \xC9tirement "Canap\xE9 Nuage Montagnes Rivi\xE8res"', ar: '\u0648\u0636\u0639 \u0627\u0644\u062A\u0645\u062F\u062F "\u0623\u0631\u064A\u0643\u0629 \u0633\u062D\u0627\u0628 \u0627\u0644\u062C\u0628\u0627\u0644 \u0648\u0627\u0644\u0623\u0646\u0647\u0627\u0631"' }), desc: textFor({ en: "166\xB0 space capsule-grade zero-gravity seats", fr: "Si\xE8ges z\xE9ro-gravit\xE9 niveau capsule spatiale 166\xB0", ar: "\u0645\u0642\u0627\u0639\u062F \u0628\u0644\u0627 \u062C\u0627\u0630\u0628\u064A\u0629 \u0628\u0645\u0633\u062A\u0648\u0649 \u0643\u0628\u0633\u0648\u0644\u0629 \u0641\u0636\u0627\u0626\u064A\u0629 166\xB0" }) },
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_5-3.png", title: textFor({ en: '"Hongyu Qingyun" Aesthetic Seats', fr: 'Si\xE8ges Esth\xE9tiques "Hongyu Qingyun"', ar: '\u0645\u0642\u0627\u0639\u062F \u062C\u0645\u0627\u0644\u064A\u0629 "Hongyu Qingyun"' }), desc: textFor({ en: "Baby-friendly safe fabric", fr: "Tissu s\xFBr pour b\xE9b\xE9s", ar: "\u0642\u0645\u0627\u0634 \u0622\u0645\u0646 \u0644\u0644\u0623\u0637\u0641\u0627\u0644" }) },
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_5-4.png", title: textFor({ en: "Private Physiotherapy Expert Massage", fr: "Massage Expert Physioth\xE9rapie Priv\xE9e", ar: "\u062A\u062F\u0644\u064A\u0643 \u062E\u0628\u064A\u0631 \u0639\u0644\u0627\u062C \u0637\u0628\u064A\u0639\u064A \u062E\u0627\u0635" }), desc: textFor({ en: "SPA-grade AI massage, precision algorithm therapy", fr: "Massage IA niveau SPA, th\xE9rapie algorithme pr\xE9cision", ar: "\u062A\u062F\u0644\u064A\u0643 AI \u0628\u0645\u0633\u062A\u0648\u0649 SPA\u060C \u0639\u0644\u0627\u062C \u062E\u0648\u0627\u0631\u0632\u0645\u064A \u062F\u0642\u064A\u0642" }) }
    ]);
    const eleganceSlides = computed(() => [
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_6.png", title: textFor({ en: "50-inch Ultra-Clear Giant Screen", fr: "\xC9cran G\xE9ant Ultra-Clair 50 pouces", ar: "\u0634\u0627\u0634\u0629 \u0639\u0645\u0644\u0627\u0642\u0629 \u0641\u0627\u0626\u0642\u0629 \u0627\u0644\u0648\u0636\u0648\u062D 50 \u0628\u0648\u0635\u0629" }), desc: textFor({ en: "Smart cloud wall, all-encompassing vision", fr: "Mur nuage intelligent, vision tout-encompassing", ar: "\u062C\u062F\u0627\u0631 \u0633\u062D\u0627\u0628\u064A \u0630\u0643\u064A\u060C \u0631\u0624\u064A\u0629 \u0634\u0627\u0645\u0644\u0629" }) },
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_6-2.png", title: textFor({ en: "One-Click Front-Rear Cabin Intercom", fr: "Intercom Cabine Avant-Arri\xE8re Un Clic", ar: "\u0627\u062A\u0635\u0627\u0644 \u062F\u0627\u062E\u0644\u064A \u0623\u0645\u0627\u0645\u064A-\u062E\u0644\u0641\u064A \u0628\u0646\u0642\u0631\u0629 \u0648\u0627\u062D\u062F\u0629" }), desc: textFor({ en: "Smart quiet voice calls, commanding overall situation", fr: "Appels voix silencieux intelligents, commandant situation", ar: "\u0645\u0643\u0627\u0644\u0645\u0627\u062A \u0635\u0648\u062A\u064A\u0629 \u0647\u0627\u062F\u0626\u0629 \u0630\u0643\u064A\u0629\u060C \u062A\u0633\u064A\u064A\u0631 \u0627\u0644\u0645\u0648\u0642\u0641" }) },
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_6-3.png", title: textFor({ en: "Ultra State Guest Luxury Treatment", fr: "Traitement Luxueux Ultra Invit\xE9 d'\xC9tat", ar: "\u0645\u0639\u0627\u0645\u0644\u0629 \u0641\u0627\u062E\u0631\u0629 \u0641\u0627\u0626\u0642\u0629 \u0644\u0636\u064A\u0641 \u0627\u0644\u062F\u0648\u0644\u0629" }), desc: textFor({ en: "Electric shoe compartment with smart warm footrest", fr: "Compartiment chaussures \xE9lectrique avec repose-pieds", ar: "\u062D\u062C\u0631\u0629 \u0623\u062D\u0630\u064A\u0629 \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0645\u0639 \u0645\u0633\u0646\u062F \u0642\u062F\u0645 \u062F\u0627\u0641\u0626" }) },
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_6-4.png", title: textFor({ en: "Smart Electronic Password Safe", fr: "Coffre-Fort \xC9lectronique Intelligent", ar: "\u062E\u0632\u0646\u0629 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629 \u0630\u0643\u064A\u0629" }), desc: textFor({ en: "Aegis password lock, ultimate peace of mind", fr: "Serrure mot de passe Aegis, tranquillit\xE9 ultime", ar: "\u0642\u0641\u0644 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 Aegis\u060C \u0631\u0627\u062D\u0629 \u0628\u0627\u0644 \u0645\u0637\u0644\u0642\u0629" }) }
    ]);
    const interactionSlides = computed(() => [
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_7.png", title: textFor({ en: "Dawn Golden Luxury Smart Cockpit", fr: "Cockpit Intelligent Luxueux Dor\xE9 Aube", ar: "\u0645\u0642\u0635\u0648\u0631\u0629 \u0630\u0643\u064A\u0629 \u0641\u0627\u062E\u0631\u0629 \u0630\u0647\u0628\u064A\u0629 Dawn" }), desc: textFor({ en: "Dual 15.4-inch screens, intelligent intelligent", fr: "Double \xE9crans 15.4 pouces, intelligent intelligent", ar: "\u0634\u0627\u0634\u062A\u0627\u0646 15.4 \u0628\u0648\u0635\u0629\u060C \u0630\u0643\u064A \u0630\u0643\u064A" }) },
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_7-2.png", title: textFor({ en: "HarmonyOS Intelligent Connected Cockpit", fr: "Cockpit Connect\xE9 Intelligent HarmonyOS", ar: "\u0645\u0642\u0635\u0648\u0631\u0629 \u0645\u062A\u0635\u0644\u0629 \u0630\u0643\u064A\u0629 HarmonyOS" }), desc: textFor({ en: "Seamless car-phone integration", fr: "Int\xE9gration voiture-t\xE9l\xE9phone sans couture", ar: "\u062A\u0643\u0627\u0645\u0644 \u0633\u064A\u0627\u0631\u0629-\u0647\u0627\u062A\u0641 \u0633\u0644\u0633" }) },
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_7-3.png", title: textFor({ en: "28-speaking VOYAH Sound", fr: "VOYAH Sound 28 Haut-Parleurs", ar: "VOYAH Sound \u0628\u064028 \u0645\u0643\u0628\u0631 \u0635\u0648\u062A" }), desc: textFor({ en: "Immersive ultimate audio experience", fr: "Exp\xE9rience audio ultime immersive", ar: "\u062A\u062C\u0631\u0628\u0629 \u0635\u0648\u062A\u064A\u0629 \u063A\u0627\u0645\u0631\u0629 \u0641\u0627\u0626\u0642\u0629" }) },
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_7-4.png", title: textFor({ en: "Intelligent Dual Armrest Touch Screen", fr: "Double \xC9cran Tactile Accoudoirs Intelligent", ar: "\u0634\u0627\u0634\u0629 \u0644\u0645\u0633 \u0645\u0632\u062F\u0648\u062C\u0629 \u0644\u0644\u0645\u0633\u0627\u0646\u062F \u0627\u0644\u0630\u0643\u064A\u0629" }), desc: textFor({ en: "7L capacity, temperature adjustable, elegant access", fr: "Capacit\xE9 7L, temp\xE9rature r\xE9glable, acc\xE8s \xE9l\xE9gant", ar: "\u0633\u0639\u0629 7 \u0644\u062A\u0631\u060C \u062F\u0631\u062C\u0629 \u062D\u0631\u0627\u0631\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u0639\u062F\u064A\u0644\u060C \u0648\u0635\u0648\u0644 \u0623\u0646\u064A\u0642" }) }
    ]);
    const privacySlides = computed(() => [
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_8.png", title: textFor({ en: "Fully Independent Private Rear Cabin", fr: "Cabine Arri\xE8re Priv\xE9e Enti\xE8rement Ind\xE9pendante", ar: "\u0645\u0642\u0635\u0648\u0631\u0629 \u062E\u0644\u0641\u064A\u0629 \u062E\u0627\u0635\u0629 \u0645\u0633\u062A\u0642\u0644\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644" }), desc: textFor({ en: "Ultimate privacy, enjoying mountains and rivers", fr: "Intimit\xE9 ultime, profitant des montagnes et rivi\xE8res", ar: "\u062E\u0635\u0648\u0635\u064A\u0629 \u0645\u0637\u0644\u0642\u0629\u060C \u0627\u0644\u0627\u0633\u062A\u0645\u062A\u0627\u0639 \u0628\u0627\u0644\u062C\u0628\u0627\u0644 \u0648\u0627\u0644\u0623\u0646\u0647\u0627\u0631" }) },
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_8-2.png", title: textFor({ en: "Innovative Variable Partition Design", fr: "Design Cloison Variable Innovant", ar: "\u062A\u0635\u0645\u064A\u0645 \u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u063A\u064A\u064A\u0631 \u0645\u0628\u062A\u0643\u0631" }), desc: textFor({ en: "Transparent double-layer laminated glass, dual realm", fr: "Verre feuillet\xE9 double couche transparent, double royaume", ar: "\u0632\u062C\u0627\u062C \u0645\u0635\u0641\u062D \u0645\u0632\u062F\u0648\u062C \u0634\u0641\u0627\u0641\u060C \u0645\u0645\u0644\u0643\u0629 \u0645\u0632\u062F\u0648\u062C\u0629" }) },
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_8-3.png", title: textFor({ en: "Full Car Electric Privacy Curtains", fr: "Rideaux Intimit\xE9 \xC9lectriques Voiture Compl\xE8te", ar: "\u0633\u062A\u0627\u0626\u0631 \u062E\u0635\u0648\u0635\u064A\u0629 \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0644\u0644\u0633\u064A\u0627\u0631\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644" }), desc: textFor({ en: "100% privacy protection, 100% ultimate peace of mind", fr: "100% protection intimit\xE9, 100% tranquillit\xE9 ultime", ar: "100% \u062D\u0645\u0627\u064A\u0629 \u062E\u0635\u0648\u0635\u064A\u0629\u060C 100% \u0631\u0627\u062D\u0629 \u0628\u0627\u0644 \u0645\u0637\u0644\u0642\u0629" }) },
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_8-4.png", title: textFor({ en: 'Rear Cabin "Boundary" Sound Lock', fr: 'Verrou Sonore "Fronti\xE8re" Cabine Arri\xE8re', ar: '\u0642\u0641\u0644 \u0635\u0648\u062A\u064A "\u062D\u062F\u0648\u062F" \u0644\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u062E\u0644\u0641\u064A\u0629' }), desc: textFor({ en: "Exclusive mobile palace, information never leaks", fr: "Palais mobile exclusif, informations jamais divulgu\xE9es", ar: "\u0642\u0635\u0631 \u0645\u062A\u0646\u0642\u0644 \u062D\u0635\u0631\u064A\u060C \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0644\u0627 \u062A\u062A\u0633\u0631\u0628 \u0623\u0628\u062F\u0627\u064B" }) }
    ]);
    const sensesSlides = computed(() => [
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_9.png", title: textFor({ en: "Dynaudio Palace-Grade Audio", fr: "Audio Niveau Palais Dynaudio", ar: "\u0635\u0648\u062A \u0628\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0642\u0635\u0631 Dynaudio" }), desc: textFor({ en: "8.1.6 immersive channel distribution", fr: "Distribution canal immersif 8.1.6", ar: "\u062A\u0648\u0632\u064A\u0639 \u0642\u0646\u0648\u0627\u062A \u063A\u0627\u0645\u0631 8.1.6" }) },
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_9-2.png", title: textFor({ en: "Electric Dual Umbrella Storage", fr: "Rangement Double Parapluie \xC9lectrique", ar: "\u062A\u062E\u0632\u064A\u0646 \u0645\u0638\u0644\u0629 \u0645\u0632\u062F\u0648\u062C \u0643\u0647\u0631\u0628\u0627\u0626\u064A" }), desc: textFor({ en: "Hidden universe, commanding umbrellas and mountains", fr: "Univers cach\xE9, commandant parapluies et montagnes", ar: "\u0643\u0648\u0646 \u0645\u062E\u0641\u064A\u060C \u062A\u0633\u064A\u064A\u0631 \u0627\u0644\u0645\u0638\u0644\u0627\u062A \u0648\u0627\u0644\u062C\u0628\u0627\u0644" }) },
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_9-3.png", title: textFor({ en: "Luxury Custom High-End Umbrella", fr: "Parapluie Haut de Gamme sur Mesure", ar: "\u0645\u0638\u0644\u0629 \u0641\u0627\u062E\u0631\u0629 \u0639\u0627\u0644\u064A\u0629 \u0627\u0644\u062C\u0648\u062F\u0629" }), desc: textFor({ en: "Unique meshing structure, collectible craftsmanship", fr: "Structure maillage unique, artisanat collectionnable", ar: "\u0647\u064A\u0643\u0644 \u062A\u0641\u0627\u0639\u0644\u064A \u0641\u0631\u064A\u062F\u060C \u062D\u0631\u0641\u064A\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062C\u0645\u0639" }) },
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_9-4.png", title: textFor({ en: "Shadow Wood Real Wood Trim", fr: "Garniture Bois R\xE9el Ombre", ar: "\u062A\u0637\u0639\u064A\u0645\u0627\u062A \u062E\u0634\u0628\u064A\u0629 \u062D\u0642\u064A\u0642\u064A\u0629" }), desc: textFor({ en: "Century-old shadow wood, one car one selection", fr: "Bois ombre centenaire, une voiture une s\xE9lection", ar: "\u062E\u0634\u0628 \u0638\u0644 \u062E\u0627\u0644\u062F\u060C \u0633\u064A\u0627\u0631\u0629 \u0648\u0627\u062D\u062F\u0629 \u0627\u062E\u062A\u064A\u0627\u0631 \u0648\u0627\u062D\u062F" }) }
    ]);
    const safetySlides = computed(() => [
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_10.png", title: textFor({ en: "Huawei ADS 4", fr: "Huawei ADS 4", ar: "Huawei ADS 4" }), desc: textFor({ en: "Fully equipped summit, sailing to new realms", fr: "Sommet pleinement \xE9quip\xE9, naviguer vers nouveaux royaumes", ar: "\u0642\u0645\u0629 \u0645\u062C\u0647\u0632\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644\u060C \u0627\u0644\u0625\u0628\u062D\u0627\u0631 \u0646\u062D\u0648 \u0645\u0645\u0627\u0644\u0643 \u062C\u062F\u064A\u062F\u0629" }) },
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_10-2.png", title: textFor({ en: "Leading 800V Smart Hybrid", fr: "Hybride Intelligent 800V de Pointe", ar: "\u0647\u062C\u064A\u0646 \u0630\u0643\u064A 800V \u0631\u0627\u0626\u062F" }), desc: textFor({ en: "Super smart hybrid, super power", fr: "Super hybride intelligent, super puissance", ar: "\u0647\u062C\u064A\u0646 \u0630\u0643\u064A \u0641\u0627\u0626\u0642\u060C \u0642\u0648\u0629 \u0641\u0627\u0626\u0642\u0629" }) },
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_10-3.png", title: textFor({ en: "New WEWA Architecture", fr: "Nouvelle Architecture WEWA", ar: "\u0647\u0646\u062F\u0633\u0629 WEWA \u0627\u0644\u062C\u062F\u064A\u062F\u0629" }), desc: textFor({ en: "From human-like to superhuman, driving control greatly improved", fr: "D'humain \xE0 surhumain, contr\xF4le conduite grandement am\xE9lior\xE9", ar: "\u0645\u0646 \u0634\u0628\u064A\u0647 \u0644\u0644\u0628\u0634\u0631 \u0625\u0644\u0649 \u062E\u0627\u0631\u0642 \u0644\u0644\u0628\u0634\u0631\u060C \u062A\u062D\u0643\u0645 \u0645\u062D\u0633\u0646 \u0628\u0634\u0643\u0644 \u0643\u0628\u064A\u0631" }) },
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_10-4.png", title: textFor({ en: "CAS 4.0 Anti-collision", fr: "Anti-collision CAS 4.0", ar: "\u0645\u0636\u0627\u062F \u0644\u0644\u062A\u0635\u0627\u062F\u0645 CAS 4.0" }), desc: textFor({ en: "Full-dimensional safety redundancy", fr: "Redondance s\xE9curit\xE9 pleine dimension", ar: "\u062A\u0643\u0631\u0627\u0631 \u0623\u0645\u0627\u0646 \u0643\u0627\u0645\u0644 \u0627\u0644\u0623\u0628\u0639\u0627\u062F" }) }
    ]);
    const performanceSlides = computed(() => [
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_11.png", title: textFor({ en: "Bi-directional 10\xB0 Rear Wheel Steering", fr: "Direction Roue Arri\xE8re Bidirectionnelle 10\xB0", ar: "\u062A\u0648\u062C\u064A\u0647 \u0639\u062C\u0644\u0629 \u062E\u0644\u0641\u064A\u0629 \u062B\u0646\u0627\u0626\u064A \u0627\u0644\u0627\u062A\u062C\u0627\u0647 10\xB0" }), desc: textFor({ en: "More stable corners, more comfortable travel", fr: "Virages plus stables, voyage plus confortable", ar: "\u0645\u0646\u0639\u0637\u0641\u0627\u062A \u0623\u0643\u062B\u0631 \u0627\u0633\u062A\u0642\u0631\u0627\u0631\u0627\u064B\u060C \u0633\u0641\u0631 \u0623\u0643\u062B\u0631 \u0631\u0627\u062D\u0629" }) },
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_11-2.png", title: textFor({ en: "Intelligent Magic Carpet Air Suspension", fr: "Suspension Pneumatique Tapis Magique", ar: "\u062A\u0639\u0644\u064A\u0642 \u0647\u0648\u0627\u0626\u064A \u0633\u062D\u0631\u064A \u0630\u0643\u064A" }), desc: textFor({ en: "Flat as ground, calm and composed", fr: "Plat comme le sol, calme et compos\xE9", ar: "\u0645\u0633\u0637\u062D \u0643\u0627\u0644\u0623\u0631\u0636\u060C \u0647\u0627\u062F\u0626 \u0648\u0645\u062A\u0623\u0646\u0642" }) },
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_11-3.png", title: textFor({ en: "2000MPa Ultra-High Strength Cage", fr: "Cage Ultra-R\xE9sistante 2000MPa", ar: "\u0642\u0641\u0635 \u0641\u0627\u0626\u0642 \u0627\u0644\u0645\u0642\u0627\u0648\u0645\u0629 2000 \u0645\u064A\u062C\u0627 \u0628\u0627\u0633\u0643\u0627\u0644" }), desc: textFor({ en: "One-piece hot-formed laser welded door ring", fr: "Anneau porte soud\xE9 laser form\xE9 \xE0 chaud en une pi\xE8ce", ar: "\u062D\u0644\u0642\u0629 \u0628\u0627\u0628 \u0645\u0644\u062D\u0648\u0645\u0629 \u0628\u0627\u0644\u0644\u064A\u0632\u0631 \u0645\u0643\u0648\u0646\u0629 \u0628\u0627\u0644\u062D\u0631\u0627\u0631\u0629 \u0641\u064A \u0642\u0637\u0639\u0629 \u0648\u0627\u062D\u062F\u0629" }) },
      { image: "/assets/OFFICIALVOYAH/dreamriver/images/sc_11-4.png", title: textFor({ en: "Amber Battery 2.0", fr: "Batterie Ambre 2.0", ar: "\u0628\u0637\u0627\u0631\u064A\u0629 \u0627\u0644\u0639\u0646\u0628\u0631 2.0" }), desc: textFor({ en: "3000 daily battery checks, early risk warnings", fr: "3000 contr\xF4les batterie quotidiens, alertes risques pr\xE9coces", ar: "3000 \u0641\u062D\u0635 \u064A\u0648\u0645\u064A \u0644\u0644\u0628\u0637\u0627\u0631\u064A\u0629\u060C \u062A\u062D\u0630\u064A\u0631\u0627\u062A \u0645\u0628\u0643\u0631\u0629 \u0645\u0646 \u0627\u0644\u0645\u062E\u0627\u0637\u0631" }) }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dreamer-river-page" }, _attrs))} data-v-3e652b9c><section class="kv-section" data-v-3e652b9c><img${ssrRenderAttr("src", _imports_0$6)} class="kv-bg-img" loading="eager" fetchpriority="high" decoding="async" data-v-3e652b9c><div class="kv-content" data-v-3e652b9c><img${ssrRenderAttr("src", _imports_1$3)} class="kv-logo" loading="eager" fetchpriority="high" decoding="async" data-v-3e652b9c><p class="kv-slogan" data-v-3e652b9c>${ssrInterpolate(unref(textFor)({ en: "New Era Flagship Four-Seat MPV", fr: "MPV Phare Quatre Places Nouvelle \xC8re", ar: "MPV \u0631\u0627\u0626\u062F \u0628\u0623\u0631\u0628\u0639\u0629 \u0645\u0642\u0627\u0639\u062F \u0641\u064A \u0639\u0635\u0631 \u062C\u062F\u064A\u062F" }))}</p><div class="kv-btns" data-v-3e652b9c><button class="voyah-button voyah-button--dark" data-v-3e652b9c>${ssrInterpolate(unref(textFor)({ en: "Order Now", fr: "Commander", ar: "\u0627\u0637\u0644\u0628 \u0627\u0644\u0622\u0646" }))}</button></div></div></section><section class="common commonMax" data-v-3e652b9c><h3 class="title" data-v-3e652b9c>${ssrInterpolate(unref(textFor)({ en: "New Era Chinese Luxury", fr: "Luxe Chinois Nouvelle \xC8re", ar: "\u0641\u062E\u0627\u0645\u0629 \u0635\u064A\u0646\u064A\u0629 \u0641\u064A \u0639\u0635\u0631 \u062C\u062F\u064A\u062F" }))}</h3><div class="swiper-container" data-v-3e652b9c><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translate3d(-${currentSlide.value.luxury * 100}%, 0, 0)` })}" data-v-3e652b9c><!--[-->`);
      ssrRenderList(luxurySlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-3e652b9c><img${ssrRenderAttr("src", slide.image)} class="slide-img" loading="lazy" decoding="async" data-v-3e652b9c><div class="desc-wrap" data-v-3e652b9c><p class="desc-title" data-v-3e652b9c>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-3e652b9c>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination" data-v-3e652b9c><!--[-->`);
      ssrRenderList(luxurySlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.luxury === idx }, "pagination-bullet"])}" data-v-3e652b9c></div>`);
      });
      _push(`<!--]--></div></section><section class="car-color-container" data-v-3e652b9c><h3 class="title" data-v-3e652b9c>${ssrInterpolate(unref(textFor)({ en: "Eastern Cultural Heritage", fr: "H\xE9ritage Culturel Oriental", ar: "\u062A\u0631\u0627\u062B \u062B\u0642\u0627\u0641\u064A \u0634\u0631\u0642\u064A" }))}</h3><div class="car-swiper-wap" data-v-3e652b9c><!--[-->`);
      ssrRenderList(exteriorColors.value, (color, idx) => {
        _push(`<div class="swiper-slide" style="${ssrRenderStyle({ left: idx === currentColor.value ? "0" : "100%" })}" data-v-3e652b9c><img${ssrRenderAttr("src", `/assets/OFFICIALVOYAH/dreamriver/images/car/car${idx + 1}.png`)} class="swiper-slide-img" loading="lazy" decoding="async" data-v-3e652b9c></div>`);
      });
      _push(`<!--]--></div><div class="car-color-list" data-v-3e652b9c><!--[-->`);
      ssrRenderList(exteriorColors.value, (color, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentColor.value === idx }, "car-color-item"])}" data-v-3e652b9c><img${ssrRenderAttr("src", `/assets/OFFICIALVOYAH/dreamriver/images/car/icon${idx + 1}.png`)} class="img-icon" loading="lazy" decoding="async" data-v-3e652b9c><p class="color-name" data-v-3e652b9c>${ssrInterpolate(color)}</p></div>`);
      });
      _push(`<!--]--></div></section><section class="common commonMax" data-v-3e652b9c><h3 class="title" data-v-3e652b9c>${ssrInterpolate(unref(textFor)({ en: "Mountains and Rivers Dignity", fr: "Dignit\xE9 Montagnes et Rivi\xE8res", ar: "\u0643\u0631\u0627\u0645\u0629 \u0627\u0644\u062C\u0628\u0627\u0644 \u0648\u0627\u0644\u0623\u0646\u0647\u0627\u0631" }))}</h3><div class="swiper-container" data-v-3e652b9c><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translate3d(-${currentSlide.value.interior * 100}%, 0, 0)` })}" data-v-3e652b9c><!--[-->`);
      ssrRenderList(interiorSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-3e652b9c><img${ssrRenderAttr("src", slide.image)} class="slide-img" loading="lazy" decoding="async" data-v-3e652b9c><div class="desc-wrap" data-v-3e652b9c><p class="desc-title" data-v-3e652b9c>${ssrInterpolate(slide.name)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination" data-v-3e652b9c><!--[-->`);
      ssrRenderList(interiorSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.interior === idx }, "pagination-bullet"])}" data-v-3e652b9c></div>`);
      });
      _push(`<!--]--></div></section><section class="common commonMax" data-v-3e652b9c><h3 class="title" data-v-3e652b9c>${ssrInterpolate(unref(textFor)({ en: "New Era Luxury Comfort", fr: "Confort Luxueux Nouvelle \xC8re", ar: "\u0631\u0627\u062D\u0629 \u0641\u0627\u062E\u0631\u0629 \u0641\u064A \u0639\u0635\u0631 \u062C\u062F\u064A\u062F" }))}</h3><div class="swiper-container" data-v-3e652b9c><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translate3d(-${currentSlide.value.comfort * 100}%, 0, 0)` })}" data-v-3e652b9c><!--[-->`);
      ssrRenderList(comfortSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-3e652b9c><img${ssrRenderAttr("src", slide.image)} class="slide-img" loading="lazy" decoding="async" data-v-3e652b9c><div class="desc-wrap" data-v-3e652b9c><p class="desc-title" data-v-3e652b9c>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-3e652b9c>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination" data-v-3e652b9c><!--[-->`);
      ssrRenderList(comfortSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.comfort === idx }, "pagination-bullet"])}" data-v-3e652b9c></div>`);
      });
      _push(`<!--]--></div></section><section class="common commonMax" data-v-3e652b9c><h3 class="title" data-v-3e652b9c>${ssrInterpolate(unref(textFor)({ en: "New Era Noble Elegance", fr: "\xC9l\xE9gance Noble Nouvelle \xC8re", ar: "\u0623\u0646\u0627\u0642\u0629 \u0646\u0628\u064A\u0644\u0629 \u0641\u064A \u0639\u0635\u0631 \u062C\u062F\u064A\u062F" }))}</h3><div class="swiper-container" data-v-3e652b9c><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translate3d(-${currentSlide.value.elegance * 100}%, 0, 0)` })}" data-v-3e652b9c><!--[-->`);
      ssrRenderList(eleganceSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-3e652b9c><img${ssrRenderAttr("src", slide.image)} class="slide-img" loading="lazy" decoding="async" data-v-3e652b9c><div class="desc-wrap" data-v-3e652b9c><p class="desc-title" data-v-3e652b9c>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-3e652b9c>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination" data-v-3e652b9c><!--[-->`);
      ssrRenderList(eleganceSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.elegance === idx }, "pagination-bullet"])}" data-v-3e652b9c></div>`);
      });
      _push(`<!--]--></div></section><section class="common commonMax" data-v-3e652b9c><h3 class="title" data-v-3e652b9c>${ssrInterpolate(unref(textFor)({ en: "New Era Intelligent Interaction", fr: "Interaction Intelligente Nouvelle \xC8re", ar: "\u062A\u0641\u0627\u0639\u0644 \u0630\u0643\u064A \u0641\u064A \u0639\u0635\u0631 \u062C\u062F\u064A\u062F" }))}</h3><div class="swiper-container" data-v-3e652b9c><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translate3d(-${currentSlide.value.interaction * 100}%, 0, 0)` })}" data-v-3e652b9c><!--[-->`);
      ssrRenderList(interactionSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-3e652b9c><img${ssrRenderAttr("src", slide.image)} class="slide-img" loading="lazy" decoding="async" data-v-3e652b9c><div class="desc-wrap" data-v-3e652b9c><p class="desc-title" data-v-3e652b9c>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-3e652b9c>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination" data-v-3e652b9c><!--[-->`);
      ssrRenderList(interactionSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.interaction === idx }, "pagination-bullet"])}" data-v-3e652b9c></div>`);
      });
      _push(`<!--]--></div></section><section class="common commonMax" data-v-3e652b9c><h3 class="title" data-v-3e652b9c>${ssrInterpolate(unref(textFor)({ en: "New Era Private Realm", fr: "Domaine Priv\xE9 Nouvelle \xC8re", ar: "\u0645\u062C\u0627\u0644 \u062E\u0627\u0635 \u0641\u064A \u0639\u0635\u0631 \u062C\u062F\u064A\u062F" }))}</h3><div class="swiper-container" data-v-3e652b9c><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translate3d(-${currentSlide.value.privacy * 100}%, 0, 0)` })}" data-v-3e652b9c><!--[-->`);
      ssrRenderList(privacySlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-3e652b9c><img${ssrRenderAttr("src", slide.image)} class="slide-img" loading="lazy" decoding="async" data-v-3e652b9c><div class="desc-wrap" data-v-3e652b9c><p class="desc-title" data-v-3e652b9c>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-3e652b9c>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination" data-v-3e652b9c><!--[-->`);
      ssrRenderList(privacySlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.privacy === idx }, "pagination-bullet"])}" data-v-3e652b9c></div>`);
      });
      _push(`<!--]--></div></section><section class="common commonMax" data-v-3e652b9c><h3 class="title" data-v-3e652b9c>${ssrInterpolate(unref(textFor)({ en: "New Era Luxurious Senses", fr: "Sens Luxueux Nouvelle \xC8re", ar: "\u062D\u0648\u0627\u0633 \u0641\u0627\u062E\u0631\u0629 \u0641\u064A \u0639\u0635\u0631 \u062C\u062F\u064A\u062F" }))}</h3><div class="swiper-container" data-v-3e652b9c><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translate3d(-${currentSlide.value.senses * 100}%, 0, 0)` })}" data-v-3e652b9c><!--[-->`);
      ssrRenderList(sensesSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-3e652b9c><img${ssrRenderAttr("src", slide.image)} class="slide-img" loading="lazy" decoding="async" data-v-3e652b9c><div class="desc-wrap" data-v-3e652b9c><p class="desc-title" data-v-3e652b9c>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-3e652b9c>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination" data-v-3e652b9c><!--[-->`);
      ssrRenderList(sensesSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.senses === idx }, "pagination-bullet"])}" data-v-3e652b9c></div>`);
      });
      _push(`<!--]--></div></section><section class="common commonMax" data-v-3e652b9c><h3 class="title" data-v-3e652b9c>${ssrInterpolate(unref(textFor)({ en: "New Era Intelligent Safety", fr: "S\xE9curit\xE9 Intelligente Nouvelle \xC8re", ar: "\u0623\u0645\u0627\u0646 \u0630\u0643\u064A \u0641\u064A \u0639\u0635\u0631 \u062C\u062F\u064A\u062F" }))}</h3><div class="swiper-container" data-v-3e652b9c><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translate3d(-${currentSlide.value.safety * 100}%, 0, 0)` })}" data-v-3e652b9c><!--[-->`);
      ssrRenderList(safetySlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-3e652b9c><img${ssrRenderAttr("src", slide.image)} class="slide-img" loading="lazy" decoding="async" data-v-3e652b9c><div class="desc-wrap" data-v-3e652b9c><p class="desc-title" data-v-3e652b9c>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-3e652b9c>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination" data-v-3e652b9c><!--[-->`);
      ssrRenderList(safetySlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.safety === idx }, "pagination-bullet"])}" data-v-3e652b9c></div>`);
      });
      _push(`<!--]--></div></section><section class="common commonMax" data-v-3e652b9c><h3 class="title" data-v-3e652b9c>${ssrInterpolate(unref(textFor)({ en: "New Era Flagship Performance", fr: "Performance Phare Nouvelle \xC8re", ar: "\u0623\u062F\u0627\u0621 \u0631\u0627\u0626\u062F \u0641\u064A \u0639\u0635\u0631 \u062C\u062F\u064A\u062F" }))}</h3><div class="swiper-container" data-v-3e652b9c><div class="swiper-wrapper" style="${ssrRenderStyle({ transform: `translate3d(-${currentSlide.value.performance * 100}%, 0, 0)` })}" data-v-3e652b9c><!--[-->`);
      ssrRenderList(performanceSlides.value, (slide, idx) => {
        _push(`<div class="swiper-slide" data-v-3e652b9c><img${ssrRenderAttr("src", slide.image)} class="slide-img" loading="lazy" decoding="async" data-v-3e652b9c><div class="desc-wrap" data-v-3e652b9c><p class="desc-title" data-v-3e652b9c>${ssrInterpolate(slide.title)}</p><p class="desc-content" data-v-3e652b9c>${ssrInterpolate(slide.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="pagination" data-v-3e652b9c><!--[-->`);
      ssrRenderList(performanceSlides.value, (_, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value.performance === idx }, "pagination-bullet"])}" data-v-3e652b9c></div>`);
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vehicles/dreamer/DreamerRiverPage.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const DreamerRiverPage = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-3e652b9c"]]);
const _imports_0$5 = publicAssetsURL("/voyah-resources/tech/essa_chassis.png");
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "ArchitecturePage",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    const { textFor } = useSiteContent();
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tech-page tech-architecture" }, _attrs))} data-v-b6ba2e78><section class="tech-hero" data-v-b6ba2e78><div class="tech-hero-background" data-v-b6ba2e78><img${ssrRenderAttr("src", __props.page.heroImage)} alt="Voyah ESSA Architecture" class="tech-hero-image" data-v-b6ba2e78><div class="tech-hero-overlay" data-v-b6ba2e78></div></div><div class="container tech-hero-content" data-v-b6ba2e78><h1 class="page-title" data-v-b6ba2e78>${ssrInterpolate(unref(textFor)(__props.page.title))}</h1><p class="page-summary" data-v-b6ba2e78>${ssrInterpolate(unref(textFor)(__props.page.summary))}</p></div></section><section class="tech-diagram-section section-shell" data-v-b6ba2e78><div class="container" data-v-b6ba2e78><div class="tech-diagram-header" data-v-b6ba2e78><h2 class="section-title" data-v-b6ba2e78>${ssrInterpolate(_ctx.$t("domain.tech.architecture.essa_title", "Native Smart Electric Architecture"))}</h2><p class="section-copy" data-v-b6ba2e78>${ssrInterpolate(_ctx.$t("domain.tech.architecture.essa_body", "The 800V platform empowers intelligent control and extreme safety."))}</p></div><div class="tech-diagram-container" data-v-b6ba2e78><div class="tech-diagram-stage" data-v-b6ba2e78><div class="diagram-chassis" data-v-b6ba2e78><img${ssrRenderAttr("src", _imports_0$5)} alt="Chassis" class="chassis-img" data-v-b6ba2e78></div><div class="diagram-overlays" data-v-b6ba2e78><div class="data-point point-1" data-v-b6ba2e78><span class="point-dot" data-v-b6ba2e78></span><span class="point-label" data-v-b6ba2e78>${ssrInterpolate(_ctx.$t("domain.tech.architecture.point1", "Intelligent Power Distribution"))}</span></div><div class="data-point point-2" data-v-b6ba2e78><span class="point-dot" data-v-b6ba2e78></span><span class="point-label" data-v-b6ba2e78>${ssrInterpolate(_ctx.$t("domain.tech.architecture.point2", "Integrated Battery Shield"))}</span></div><div class="data-point point-3" data-v-b6ba2e78><span class="point-dot" data-v-b6ba2e78></span><span class="point-label" data-v-b6ba2e78>${ssrInterpolate(_ctx.$t("domain.tech.architecture.point3", "Air Suspension Dynamics"))}</span></div></div></div></div></div></section><section class="tech-horizontal-section" data-v-b6ba2e78><div class="horizontal-track" data-v-b6ba2e78><!--[-->`);
      ssrRenderList(3, (i) => {
        _push(`<div class="horizontal-item" data-v-b6ba2e78><div class="horizontal-card" data-v-b6ba2e78><div class="horizontal-card-media" data-v-b6ba2e78><img${ssrRenderAttr("src", `/voyah-resources/tech/architecture_feature_${i}.jpg`)} alt="Feature" data-v-b6ba2e78></div><div class="horizontal-card-body" data-v-b6ba2e78><h3 data-v-b6ba2e78>${ssrInterpolate(_ctx.$t(`domain.tech.architecture.feature_${i}_title`, `Advanced Feature ${i}`))}</h3><p data-v-b6ba2e78>${ssrInterpolate(_ctx.$t(`domain.tech.architecture.feature_${i}_desc`, `Description for advanced feature ${i}.`))}</p></div></div></div>`);
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tech/ArchitecturePage.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const ArchitecturePage = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-b6ba2e78"]]);
const _imports_1$2 = publicAssetsURL("/voyah-resources/tech/safety_body_structure.png");
const _imports_1$1 = publicAssetsURL("/voyah-resources/tech/safety_battery_shield.png");
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "SafetyPage",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    const { textFor } = useSiteContent();
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tech-page tech-safety" }, _attrs))} data-v-92925a3d><section class="tech-hero" data-v-92925a3d><div class="tech-hero-background" data-v-92925a3d>`);
      if ((_a = __props.page.heroImage) == null ? void 0 : _a.endsWith(".mp4")) {
        _push(`<video autoplay muted loop playsinline class="tech-hero-image" data-v-92925a3d><source${ssrRenderAttr("src", __props.page.heroImage)} type="video/mp4" data-v-92925a3d></video>`);
      } else {
        _push(`<img${ssrRenderAttr("src", __props.page.heroImage)} alt="Voyah Safety" class="tech-hero-image" data-v-92925a3d>`);
      }
      _push(`<div class="tech-hero-overlay" data-v-92925a3d></div></div><div class="container tech-hero-content" data-v-92925a3d><h1 class="page-title" data-v-92925a3d>${ssrInterpolate(unref(textFor)(__props.page.title))}</h1><p class="page-summary" data-v-92925a3d>${ssrInterpolate(unref(textFor)(__props.page.summary))}</p></div></section><section class="safety-dark-section section-shell" data-v-92925a3d><div class="container" data-v-92925a3d><div class="safety-grid pattern-checkerboard" data-v-92925a3d><div class="safety-content" data-v-92925a3d><h2 class="section-title" data-v-92925a3d>${ssrInterpolate(_ctx.$t("domain.tech.safety.structure_title", "Fortress Body Structure"))}</h2><p class="section-copy" data-v-92925a3d>${ssrInterpolate(_ctx.$t("domain.tech.safety.structure_body", "Beyond five-star safety. The Voyah structural body utilizes 2000MPa thermo-formed steel in critical intrusion zones, creating an impregnable survival space for all occupants."))}</p><ul class="safety-metric-list" data-v-92925a3d><li data-v-92925a3d><span class="metric-value" data-v-92925a3d>2000<small data-v-92925a3d>MPa</small></span><span class="metric-label" data-v-92925a3d>${ssrInterpolate(_ctx.$t("domain.tech.safety.steel", "Hot-formed steel"))}</span></li><li data-v-92925a3d><span class="metric-value" data-v-92925a3d>68<small data-v-92925a3d>%</small></span><span class="metric-label" data-v-92925a3d>${ssrInterpolate(_ctx.$t("domain.tech.safety.hss", "High-strength steel"))}</span></li></ul></div><div class="safety-media" data-v-92925a3d><img${ssrRenderAttr("src", _imports_1$2)} alt="Body Structure" class="x-ray-img" data-v-92925a3d></div></div></div></section><section class="safety-dark-section section-shell" data-v-92925a3d><div class="container" data-v-92925a3d><div class="safety-grid reverse" data-v-92925a3d><div class="safety-content" data-v-92925a3d><h2 class="section-title" data-v-92925a3d>${ssrInterpolate(_ctx.$t("domain.tech.safety.battery_title", "Amber Battery Shield"))}</h2><p class="section-copy" data-v-92925a3d>${ssrInterpolate(_ctx.$t("domain.tech.safety.battery_body", "Active and passive defense mechanisms intercept thermal runaway. Five layers of physical protection meet aerospace-grade heat resistance."))}</p><ul class="safety-metric-list" data-v-92925a3d><li data-v-92925a3d><span class="metric-value" data-v-92925a3d>1000<small data-v-92925a3d>\xB0C</small></span><span class="metric-label" data-v-92925a3d>${ssrInterpolate(_ctx.$t("domain.tech.safety.temp", "Heat resistance"))}</span></li><li data-v-92925a3d><span class="metric-value" data-v-92925a3d>IP68</span><span class="metric-label" data-v-92925a3d>${ssrInterpolate(_ctx.$t("domain.tech.safety.water", "Waterproof rating"))}</span></li></ul></div><div class="safety-media" data-v-92925a3d><img${ssrRenderAttr("src", _imports_1$1)} alt="Battery Shield" class="x-ray-img" data-v-92925a3d></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tech/SafetyPage.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const SafetyPage = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-92925a3d"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "SmartCockpitPage",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    const { textFor } = useSiteContent();
    ref(null);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tech-page tech-cockpit" }, _attrs))} data-v-147a7e68><section class="tech-hero" data-v-147a7e68><div class="tech-hero-background" data-v-147a7e68>`);
      if ((_a = __props.page.heroImage) == null ? void 0 : _a.endsWith(".mp4")) {
        _push(`<video autoplay muted loop playsinline class="tech-hero-image" data-v-147a7e68><source${ssrRenderAttr("src", __props.page.heroImage)} type="video/mp4" data-v-147a7e68></video>`);
      } else {
        _push(`<img${ssrRenderAttr("src", __props.page.heroImage || "/voyah-resources/tech/cockpit_hero.jpg")} alt="Voyah Smart Cockpit" class="tech-hero-image" data-v-147a7e68>`);
      }
      _push(`<div class="tech-hero-overlay" data-v-147a7e68></div></div><div class="container tech-hero-content" data-v-147a7e68><h1 class="page-title" data-v-147a7e68>${ssrInterpolate(unref(textFor)(__props.page.title))}</h1><p class="page-summary" data-v-147a7e68>${ssrInterpolate(unref(textFor)(__props.page.summary))}</p></div></section><section class="cockpit-features-section section-shell" data-v-147a7e68><div class="container" data-v-147a7e68><div class="cockpit-header text-center" data-v-147a7e68><h2 class="section-title" data-v-147a7e68>${ssrInterpolate(_ctx.$t("domain.tech.cockpit.os_title", "Seamless Intelligence"))}</h2><p class="section-copy" data-v-147a7e68>${ssrInterpolate(_ctx.$t("domain.tech.cockpit.os_body", "Powered by top-tier Qualcomm Snapdragon 8155/8295 chipsets and deep software integration, the cabin transforms into a dynamic living space capable of OTA evolution."))}</p></div><div class="cockpit-grid" data-v-147a7e68><!--[-->`);
      ssrRenderList(4, (i) => {
        _push(`<div class="${ssrRenderClass([`card-${i}`, "feature-card"])}" data-v-147a7e68><div class="card-media" data-v-147a7e68><img${ssrRenderAttr("src", `/voyah-resources/tech/cockpit_feature_${i}.jpg`)} alt="Cabin Feature" data-v-147a7e68></div><div class="card-body" data-v-147a7e68><h3 data-v-147a7e68>${ssrInterpolate(_ctx.$t(`domain.tech.cockpit.feature_${i}_title`, `Intelligence Aspect ${i}`))}</h3><p data-v-147a7e68>${ssrInterpolate(_ctx.$t(`domain.tech.cockpit.feature_${i}_desc`, `Advanced capability description for the smart cabin ${i}.`))}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tech/SmartCockpitPage.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const SmartCockpitPage = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-147a7e68"]]);
const _imports_0$4 = publicAssetsURL("/voyah-resources/tech/battery_layer_base.png");
const _imports_1 = publicAssetsURL("/voyah-resources/tech/battery_layer_cells.png");
const _imports_2$1 = publicAssetsURL("/voyah-resources/tech/battery_layer_cooling.png");
const _imports_3$1 = publicAssetsURL("/voyah-resources/tech/battery_layer_cover.png");
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "BatteryPage",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    const { textFor } = useSiteContent();
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tech-page tech-battery" }, _attrs))} data-v-138739eb><section class="tech-hero" data-v-138739eb><div class="tech-hero-background" data-v-138739eb>`);
      if ((_a = __props.page.heroImage) == null ? void 0 : _a.endsWith(".mp4")) {
        _push(`<video autoplay muted loop playsinline class="tech-hero-image" data-v-138739eb><source${ssrRenderAttr("src", __props.page.heroImage)} type="video/mp4" data-v-138739eb></video>`);
      } else {
        _push(`<img${ssrRenderAttr("src", __props.page.heroImage || "/voyah-resources/tech/battery_hero.jpg")} alt="Voyah Battery Tech" class="tech-hero-image" data-v-138739eb>`);
      }
      _push(`<div class="tech-hero-overlay" data-v-138739eb></div></div><div class="container tech-hero-content" data-v-138739eb><h1 class="page-title" data-v-138739eb>${ssrInterpolate(unref(textFor)(__props.page.title))}</h1><p class="page-summary" data-v-138739eb>${ssrInterpolate(unref(textFor)(__props.page.summary))}</p></div></section><section class="battery-parallax-section" data-v-138739eb><div class="container" data-v-138739eb><div class="battery-intro text-center" data-v-138739eb><h2 class="section-title" data-v-138739eb>${ssrInterpolate(_ctx.$t("domain.tech.battery.parallax_title", "Core Energy System"))}</h2><p class="section-copy" data-v-138739eb>${ssrInterpolate(_ctx.$t("domain.tech.battery.parallax_body", "Deconstructing the next-generation battery architecture. High density meets unparalleled thermal stability."))}</p></div></div><div class="parallax-stage" data-v-138739eb><div class="layer layer-base" data-v-138739eb><img${ssrRenderAttr("src", _imports_0$4)} alt="Base Plate" data-v-138739eb></div><div class="layer layer-cells" data-v-138739eb><img${ssrRenderAttr("src", _imports_1)} alt="Cells" data-v-138739eb></div><div class="layer layer-cooling" data-v-138739eb><img${ssrRenderAttr("src", _imports_2$1)} alt="Cooling Matrix" data-v-138739eb></div><div class="layer layer-cover" data-v-138739eb><img${ssrRenderAttr("src", _imports_3$1)} alt="Top Cover" data-v-138739eb></div></div></section></div>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tech/BatteryPage.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const BatteryPage = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-138739eb"]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "IRPage",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    const activeTab = ref("reports");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "custom-page ir-page" }, _attrs))} data-v-8704be51>`);
      _push(ssrRenderComponent(PageHero, {
        eyebrow: _ctx.$t("domain.corporate.ir.eyebrow", "Investor Relations"),
        title: _ctx.$t("domain.corporate.ir.title", "Financial Transparency & Governance"),
        summary: _ctx.$t("domain.corporate.ir.summary", "Commitment to long-term value creation."),
        image: "/voyah-resources/brand/philosophy_hero.jpg",
        align: "center",
        compact: true
      }, null, _parent));
      _push(`<section class="ir-nav-wrapper" data-v-8704be51><div class="container" data-v-8704be51><ul class="ir-nav" data-v-8704be51><li class="${ssrRenderClass({ active: activeTab.value === "reports" })}" data-v-8704be51>${ssrInterpolate(_ctx.$t("domain.corporate.ir.tab_reports", "Financial Reports"))}</li><li class="${ssrRenderClass({ active: activeTab.value === "governance" })}" data-v-8704be51>${ssrInterpolate(_ctx.$t("domain.corporate.ir.tab_gov", "Corporate Governance"))}</li><li class="${ssrRenderClass({ active: activeTab.value === "stock" })}" data-v-8704be51>${ssrInterpolate(_ctx.$t("domain.corporate.ir.tab_stock", "Stock Info"))}</li></ul></div></section>`);
      if (activeTab.value === "reports") {
        _push(`<section class="ir-content-section section-shell" data-v-8704be51><div class="container" data-v-8704be51><div class="ir-header" data-v-8704be51><h2 data-v-8704be51>${ssrInterpolate(_ctx.$t("domain.corporate.ir.tab_reports", "Financial Reports"))}</h2><p data-v-8704be51>${ssrInterpolate(_ctx.$t("domain.corporate.ir.reports_sub", "Download quarterly and annual earnings distributions."))}</p></div><div class="report-list" data-v-8704be51><!--[-->`);
        ssrRenderList([2024, 2023, 2022], (year) => {
          _push(`<div class="report-item" data-v-8704be51><div class="report-year" data-v-8704be51>${ssrInterpolate(year)}</div><div class="report-downloads" data-v-8704be51><a href="#" class="download-link" data-v-8704be51><span data-v-8704be51>${ssrInterpolate(_ctx.$t("domain.corporate.ir.q1", "Q1 Interim Report"))}</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-8704be51><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" data-v-8704be51></path></svg></a><a href="#" class="download-link" data-v-8704be51><span data-v-8704be51>${ssrInterpolate(_ctx.$t("domain.corporate.ir.annual", "Annual Financial Report"))}</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-8704be51><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" data-v-8704be51></path></svg></a></div></div>`);
        });
        _push(`<!--]--></div></div></section>`);
      } else if (activeTab.value === "governance") {
        _push(`<section class="ir-content-section section-shell bg-light" data-v-8704be51><div class="container" data-v-8704be51><div class="ir-header" data-v-8704be51><h2 data-v-8704be51>${ssrInterpolate(_ctx.$t("domain.corporate.ir.tab_gov", "Corporate Governance"))}</h2><p data-v-8704be51>${ssrInterpolate(_ctx.$t("domain.corporate.ir.gov_sub", "Maintaining high standards of business ethics."))}</p></div><div class="gov-grid" data-v-8704be51><div class="gov-card" data-v-8704be51><h3 data-v-8704be51>${ssrInterpolate(_ctx.$t("domain.corporate.ir.board", "Board of Directors"))}</h3><p data-v-8704be51>${ssrInterpolate(_ctx.$t("domain.corporate.ir.board_desc", "Overseeing strategic development and risk management."))}</p></div><div class="gov-card" data-v-8704be51><h3 data-v-8704be51>${ssrInterpolate(_ctx.$t("domain.corporate.ir.committees", "Committees"))}</h3><p data-v-8704be51>${ssrInterpolate(_ctx.$t("domain.corporate.ir.comm_desc", "Audit, Remuneration, and Nomination committees."))}</p></div></div></div></section>`);
      } else if (activeTab.value === "stock") {
        _push(`<section class="ir-content-section section-shell" data-v-8704be51><div class="container" data-v-8704be51><div class="ir-header" data-v-8704be51><h2 data-v-8704be51>${ssrInterpolate(_ctx.$t("domain.corporate.ir.tab_stock", "Stock Information"))}</h2></div><div class="stock-ticker" data-v-8704be51><div class="ticker-symbol" data-v-8704be51>HKG: 0489</div><div class="ticker-price" data-v-8704be51>4.21 <small data-v-8704be51>HKD</small></div><div class="ticker-change positive" data-v-8704be51>+0.12 (2.93%)</div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/corporate/IRPage.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const IRPage = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-8704be51"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "CorporatePage",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "custom-page corporate-page" }, _attrs))} data-v-3c3ddcf9>`);
      _push(ssrRenderComponent(PageHero, {
        eyebrow: _ctx.$t("domain.corporate.corp.eyebrow", "Corporate Culture"),
        title: _ctx.$t("domain.corporate.corp.title", "Driven by Innovation"),
        summary: _ctx.$t("domain.corporate.corp.summary", "Voyah is committed to creating a reliable, zero-anxiety intelligent electric lifestyle."),
        image: "/voyah-resources/brand/about_hero.jpg",
        align: "start",
        compact: false
      }, null, _parent));
      _push(`<section class="vision-mission section-shell" data-v-3c3ddcf9><div class="container" data-v-3c3ddcf9><div class="vm-grid" data-v-3c3ddcf9><div class="vm-card" data-reveal data-v-3c3ddcf9><div class="vm-icon" data-v-3c3ddcf9><svg viewBox="0 0 24 24" fill="none" stroke="#c59c62" stroke-width="2" data-v-3c3ddcf9><circle cx="12" cy="12" r="10" data-v-3c3ddcf9></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" data-v-3c3ddcf9></path><path d="M2 12h20" data-v-3c3ddcf9></path></svg></div><h3 data-v-3c3ddcf9>${ssrInterpolate(_ctx.$t("domain.corporate.corp.vision", "Our Vision"))}</h3><p data-v-3c3ddcf9>${ssrInterpolate(_ctx.$t("domain.corporate.corp.vision_desc", "To be the leader in the premium new energy vehicle sector."))}</p></div><div class="vm-card" data-reveal data-v-3c3ddcf9><div class="vm-icon" data-v-3c3ddcf9><svg viewBox="0 0 24 24" fill="none" stroke="#c59c62" stroke-width="2" data-v-3c3ddcf9><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" data-v-3c3ddcf9></path><polyline points="14 2 14 8 20 8" data-v-3c3ddcf9></polyline></svg></div><h3 data-v-3c3ddcf9>${ssrInterpolate(_ctx.$t("domain.corporate.corp.mission", "Our Mission"))}</h3><p data-v-3c3ddcf9>${ssrInterpolate(_ctx.$t("domain.corporate.corp.mission_desc", "Providing high-end, zero-anxiety smart mobility solutions globally."))}</p></div></div></div></section><section class="corp-timeline section-shell bg-light" data-v-3c3ddcf9><div class="container" data-v-3c3ddcf9><div class="timeline-header section-title-center" data-v-3c3ddcf9><h2 data-v-3c3ddcf9>${ssrInterpolate(_ctx.$t("domain.corporate.corp.history", "Milestones"))}</h2></div><div class="timeline-container" data-v-3c3ddcf9><div class="timeline-item" data-v-3c3ddcf9><div class="timeline-year" data-v-3c3ddcf9>2020</div><div class="timeline-content" data-v-3c3ddcf9><h4 data-v-3c3ddcf9>${ssrInterpolate(_ctx.$t("domain.corporate.corp.m2020", "Brand Launch"))}</h4><p data-v-3c3ddcf9>${ssrInterpolate(_ctx.$t("domain.corporate.corp.m2020_desc", "Voyah is officially unveiled in Wuhan, China."))}</p></div></div><div class="timeline-item" data-v-3c3ddcf9><div class="timeline-year" data-v-3c3ddcf9>2021</div><div class="timeline-content" data-v-3c3ddcf9><h4 data-v-3c3ddcf9>${ssrInterpolate(_ctx.$t("domain.corporate.corp.m2021", "First Delivery"))}</h4><p data-v-3c3ddcf9>${ssrInterpolate(_ctx.$t("domain.corporate.corp.m2021_desc", "Delivery of the Voyah FREE marks the beginning of the journey."))}</p></div></div><div class="timeline-item" data-v-3c3ddcf9><div class="timeline-year" data-v-3c3ddcf9>2023</div><div class="timeline-content" data-v-3c3ddcf9><h4 data-v-3c3ddcf9>${ssrInterpolate(_ctx.$t("domain.corporate.corp.m2023", "European Expansion"))}</h4><p data-v-3c3ddcf9>${ssrInterpolate(_ctx.$t("domain.corporate.corp.m2023_desc", "Voyah enters the European market with showrooms in Norway."))}</p></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/corporate/CorporatePage.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const CorporatePage = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-3c3ddcf9"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "RecruitPage",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "custom-page recruit-page" }, _attrs))} data-v-a71ed982>`);
      _push(ssrRenderComponent(PageHero, {
        eyebrow: _ctx.$t("domain.recruit.eyebrow", "Business Opportunities"),
        title: _ctx.$t("domain.recruit.title", "Partner with Voyah"),
        summary: _ctx.$t("domain.recruit.summary", "Join our expanding global network to deliver premium zero-emission mobility."),
        image: "/voyah-resources/brand/philosophy_hero.jpg",
        align: "center",
        compact: true
      }, null, _parent));
      _push(`<section class="partner-form-section section-shell" data-v-a71ed982><div class="container" data-v-a71ed982><div class="recruit-grid" data-v-a71ed982><div class="recruit-info" data-v-a71ed982><h2 data-v-a71ed982>${ssrInterpolate(_ctx.$t("domain.recruit.info_title", "Why Partner with Us?"))}</h2><p class="lead" data-v-a71ed982>${ssrInterpolate(_ctx.$t("domain.recruit.info_lead", "We offer a highly competitive dealership model with comprehensive backing."))}</p><ul class="benefit-list" data-v-a71ed982><li data-v-a71ed982><svg viewBox="0 0 24 24" fill="none" stroke="#c59c62" stroke-width="2" data-v-a71ed982><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" data-v-a71ed982></path><polyline points="22 4 12 14.01 9 11.01" data-v-a71ed982></polyline></svg><div data-v-a71ed982><h4 data-v-a71ed982>${ssrInterpolate(_ctx.$t("domain.recruit.b1_title", "Premium Product Lineup"))}</h4><p data-v-a71ed982>${ssrInterpolate(_ctx.$t("domain.recruit.b1_desc", "Exclusive access to our flagship ESSA 800V luxury EV portfolio."))}</p></div></li><li data-v-a71ed982><svg viewBox="0 0 24 24" fill="none" stroke="#c59c62" stroke-width="2" data-v-a71ed982><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" data-v-a71ed982></path><polyline points="22 4 12 14.01 9 11.01" data-v-a71ed982></polyline></svg><div data-v-a71ed982><h4 data-v-a71ed982>${ssrInterpolate(_ctx.$t("domain.recruit.b2_title", "Comprehensive Training"))}</h4><p data-v-a71ed982>${ssrInterpolate(_ctx.$t("domain.recruit.b2_desc", "Technical and sales onboarding directly orchestrated by Voyah Global HQ."))}</p></div></li></ul></div><div class="recruit-form-card" data-v-a71ed982><h3 data-v-a71ed982>${ssrInterpolate(_ctx.$t("domain.recruit.form_title", "Dealership Application"))}</h3><form data-v-a71ed982><div class="form-group" data-v-a71ed982><label data-v-a71ed982>${ssrInterpolate(_ctx.$t("domain.recruit.f_company", "Company Name"))}</label><input type="text" placeholder="Enter full legal name" class="v-input" data-v-a71ed982></div><div class="form-row" data-v-a71ed982><div class="form-group half" data-v-a71ed982><label data-v-a71ed982>${ssrInterpolate(_ctx.$t("domain.recruit.f_name", "Contact Name"))}</label><input type="text" placeholder="Your name" class="v-input" data-v-a71ed982></div><div class="form-group half" data-v-a71ed982><label data-v-a71ed982>${ssrInterpolate(_ctx.$t("domain.recruit.f_email", "Email Address"))}</label><input type="email" placeholder="official@company.com" class="v-input" data-v-a71ed982></div></div><div class="form-group" data-v-a71ed982><label data-v-a71ed982>${ssrInterpolate(_ctx.$t("domain.recruit.f_region", "Target Territory"))}</label><select class="v-select" data-v-a71ed982><option value="" disabled selected data-v-a71ed982>Select a region...</option><option value="eu" data-v-a71ed982>Europe</option><option value="me" data-v-a71ed982>Middle East</option><option value="ap" data-v-a71ed982>Asia Pacific</option></select></div><button type="submit" class="btn-submit" data-v-a71ed982>${ssrInterpolate(_ctx.$t("domain.recruit.f_submit", "Submit Inquiry"))}</button></form></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/corporate/RecruitPage.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const RecruitPage = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-a71ed982"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "JoinUsPage",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "custom-page joinus-page" }, _attrs))} data-v-ec2c0dbe>`);
      _push(ssrRenderComponent(PageHero, {
        eyebrow: _ctx.$t("domain.joinus.eyebrow", "Careers"),
        title: _ctx.$t("domain.joinus.title", "Shape the Future of Mobility"),
        summary: _ctx.$t("domain.joinus.summary", "We are looking for visionary thinkers to join our global engineering and design hubs."),
        image: "/voyah-resources/brand/kunpeng_hero.jpg",
        align: "start",
        compact: true
      }, null, _parent));
      _push(`<section class="careers-section section-shell" data-v-ec2c0dbe><div class="container" data-v-ec2c0dbe><div class="job-filters" data-v-ec2c0dbe><input type="text"${ssrRenderAttr("placeholder", _ctx.$t("domain.joinus.search", "Search for positions..."))} class="search-input" data-v-ec2c0dbe><select class="filter-select" data-v-ec2c0dbe><option value="" data-v-ec2c0dbe>${ssrInterpolate(_ctx.$t("domain.joinus.dept_all", "All Departments"))}</option><option value="engineering" data-v-ec2c0dbe>${ssrInterpolate(_ctx.$t("domain.joinus.dept_eng", "Engineering & R&D"))}</option><option value="design" data-v-ec2c0dbe>${ssrInterpolate(_ctx.$t("domain.joinus.dept_design", "Design"))}</option><option value="sales" data-v-ec2c0dbe>${ssrInterpolate(_ctx.$t("domain.joinus.dept_sales", "Sales & Marketing"))}</option></select><select class="filter-select" data-v-ec2c0dbe><option value="" data-v-ec2c0dbe>${ssrInterpolate(_ctx.$t("domain.joinus.loc_all", "All Locations"))}</option><option value="oslo" data-v-ec2c0dbe>${ssrInterpolate(_ctx.$t("domain.joinus.loc_oslo", "Oslo, Norway"))}</option><option value="wuhan" data-v-ec2c0dbe>${ssrInterpolate(_ctx.$t("domain.joinus.loc_wuhan", "Wuhan, China"))}</option><option value="turin" data-v-ec2c0dbe>${ssrInterpolate(_ctx.$t("domain.joinus.loc_turin", "Turin, Italy"))}</option></select></div><div class="job-grid" data-v-ec2c0dbe><div class="job-card" data-v-ec2c0dbe><div class="job-meta" data-v-ec2c0dbe><span class="dept" data-v-ec2c0dbe>Engineering &amp; R&amp;D</span><span class="type" data-v-ec2c0dbe>Full-time</span></div><h3 data-v-ec2c0dbe>Senior NVH Engineer</h3><p class="location" data-v-ec2c0dbe><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-ec2c0dbe><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-ec2c0dbe></path><circle cx="12" cy="10" r="3" data-v-ec2c0dbe></circle></svg> Wuhan, China </p><button class="btn-apply" data-v-ec2c0dbe>${ssrInterpolate(_ctx.$t("domain.joinus.apply", "Apply Now"))}</button></div><div class="job-card" data-v-ec2c0dbe><div class="job-meta" data-v-ec2c0dbe><span class="dept" data-v-ec2c0dbe>Design</span><span class="type" data-v-ec2c0dbe>Full-time</span></div><h3 data-v-ec2c0dbe>Automotive Exterior Designer</h3><p class="location" data-v-ec2c0dbe><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-ec2c0dbe><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-ec2c0dbe></path><circle cx="12" cy="10" r="3" data-v-ec2c0dbe></circle></svg> Turin, Italy </p><button class="btn-apply" data-v-ec2c0dbe>${ssrInterpolate(_ctx.$t("domain.joinus.apply", "Apply Now"))}</button></div><div class="job-card" data-v-ec2c0dbe><div class="job-meta" data-v-ec2c0dbe><span class="dept" data-v-ec2c0dbe>Sales &amp; Marketing</span><span class="type" data-v-ec2c0dbe>Full-time</span></div><h3 data-v-ec2c0dbe>European Market Director</h3><p class="location" data-v-ec2c0dbe><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-ec2c0dbe><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-ec2c0dbe></path><circle cx="12" cy="10" r="3" data-v-ec2c0dbe></circle></svg> Oslo, Norway </p><button class="btn-apply" data-v-ec2c0dbe>${ssrInterpolate(_ctx.$t("domain.joinus.apply", "Apply Now"))}</button></div><div class="job-card" data-v-ec2c0dbe><div class="job-meta" data-v-ec2c0dbe><span class="dept" data-v-ec2c0dbe>Engineering &amp; R&amp;D</span><span class="type" data-v-ec2c0dbe>Contract</span></div><h3 data-v-ec2c0dbe>Battery Management Systems (BMS) Expert</h3><p class="location" data-v-ec2c0dbe><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-ec2c0dbe><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-ec2c0dbe></path><circle cx="12" cy="10" r="3" data-v-ec2c0dbe></circle></svg> Wuhan, China </p><button class="btn-apply" data-v-ec2c0dbe>${ssrInterpolate(_ctx.$t("domain.joinus.apply", "Apply Now"))}</button></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/corporate/JoinUsPage.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const JoinUsPage = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-ec2c0dbe"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "AboutPage",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    const { textFor } = useSiteContent();
    const brandParagraphs = [
      t$1(
        "Voyah is a premium electric vehicle brand under Dongfeng Motor Corporation, dedicated to delivering innovative and sustainable mobility solutions. With a strong commitment to advanced technology and environmental responsibility, Voyah is redefining the future of luxury electric vehicles.",
        "Voyah est une marque de v\xE9hicules \xE9lectriques haut de gamme rattach\xE9e \xE0 Dongfeng Motor Corporation, d\xE9di\xE9e \xE0 des solutions de mobilit\xE9 innovantes et durables. Par son engagement fort en faveur d\u2019une technologie avanc\xE9e et de la responsabilit\xE9 environnementale, Voyah red\xE9finit l\u2019avenir du v\xE9hicule \xE9lectrique de luxe.",
        "\u0641\u0648\u0627\u0647 \u0647\u064A \u0639\u0644\u0627\u0645\u0629 \u0633\u064A\u0627\u0631\u0627\u062A \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0641\u0627\u062E\u0631\u0629 \u062A\u0627\u0628\u0639\u0629 \u0644\u0645\u062C\u0645\u0648\u0639\u0629 \u062F\u0648\u0646\u063A\u0641\u0646\u063A \u0645\u0648\u062A\u0648\u0631\u060C \u062A\u0643\u0631\u0651\u0633 \u0639\u0645\u0644\u0647\u0627 \u0644\u062A\u0642\u062F\u064A\u0645 \u062D\u0644\u0648\u0644 \u062A\u0646\u0642\u0644 \u0645\u0628\u062A\u0643\u0631\u0629 \u0648\u0645\u0633\u062A\u062F\u0627\u0645\u0629. \u0648\u0627\u0644\u062A\u0632\u0627\u0645\u0627\u064B \u0642\u0648\u064A\u0627\u064B \u0628\u0627\u0644\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627 \u0627\u0644\u0645\u062A\u0642\u062F\u0645\u0629 \u0648\u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064A\u0629 \u0627\u0644\u0628\u064A\u0626\u064A\u0629\u060C \u062A\u0639\u064A\u062F \u0641\u0648\u0627\u0647 \u0631\u0633\u0645 \u0645\u0633\u062A\u0642\u0628\u0644 \u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0627\u0644\u0641\u0627\u062E\u0631\u0629."
      ),
      t$1(
        "Voyah offers two flagship models: the Voyah Free and the Voyah Dream. The Voyah Free is a high-performance electric SUV that combines cutting-edge design, intelligent features, and an extended driving range for a seamless and dynamic driving experience. The Voyah Dream is a premium electric MPV, designed for ultimate comfort and spaciousness, making it the perfect choice for both business and family travel.",
        "Voyah propose deux mod\xE8les phares : le Voyah Free et le Voyah Dream. Le Voyah Free est un SUV \xE9lectrique haute performance qui r\xE9unit un design de pointe, des fonctions intelligentes et une autonomie \xE9tendue pour une exp\xE9rience de conduite fluide et dynamique. Le Voyah Dream est un monospace \xE9lectrique premium, pens\xE9 pour le confort et l\u2019espace, et devient le choix id\xE9al aussi bien pour les d\xE9placements professionnels qu\u2019en famille.",
        "\u062A\u0642\u062F\u0651\u0645 \u0641\u0648\u0627\u0647 \u0637\u0631\u0627\u0632\u064A\u0646 \u0631\u0627\u0626\u062F\u064A\u0646: \u0641\u0648\u0627\u0647 \u0641\u0631\u064A \u0648\u0641\u0648\u0627\u0647 \u062F\u0631\u064A\u0645. \u0641\u0648\u0627\u0647 \u0641\u0631\u064A \u0647\u064A \u0633\u064A\u0627\u0631\u0629 \u062F\u0641\u0639 \u0631\u0628\u0627\u0639\u064A \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0639\u0627\u0644\u064A\u0629 \u0627\u0644\u0623\u062F\u0627\u0621 \u062A\u062C\u0645\u0639 \u0628\u064A\u0646 \u062A\u0635\u0645\u064A\u0645 \u0645\u062A\u0637\u0648\u0631 \u0648\u0645\u064A\u0632\u0627\u062A \u0630\u0643\u064A\u0629 \u0648\u0645\u062F\u0649 \u0642\u064A\u0627\u062F\u0629 \u0645\u0648\u0633\u0651\u0639 \u0644\u062A\u062C\u0631\u0628\u0629 \u0642\u064A\u0627\u062F\u0629 \u0633\u0644\u0633\u0629 \u0648\u062F\u064A\u0646\u0627\u0645\u064A\u0643\u064A\u0629. \u0623\u0645\u0627 \u0641\u0648\u0627\u0647 \u062F\u0631\u064A\u0645 \u0641\u0647\u064A \u0633\u064A\u0627\u0631\u0629 \u0639\u0627\u0626\u0644\u064A\u0629 \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0641\u0627\u062E\u0631\u0629 \u0635\u064F\u0645\u0651\u0645\u062A \u0644\u062A\u0648\u0641\u064A\u0631 \u0623\u0642\u0635\u0649 \u062F\u0631\u062C\u0627\u062A \u0627\u0644\u0631\u0627\u062D\u0629 \u0648\u0627\u0644\u0627\u062A\u0633\u0627\u0639\u060C \u0641\u062A\u0643\u0648\u0646 \u0627\u0644\u062E\u064A\u0627\u0631 \u0627\u0644\u0623\u0645\u062B\u0644 \u0644\u0644\u062A\u0646\u0642\u0644 \u0627\u0644\u0645\u0647\u0646\u064A \u0648\u0627\u0644\u0639\u0627\u0626\u0644\u064A \u0645\u0639\u0627\u064B."
      ),
      t$1(
        "Built on Dongfeng\u2019s state-of-the-art Electric Smart Secure Architecture (ESSA), Voyah vehicles integrate the latest innovations in electric mobility, ensuring safety, efficiency, and a superior driving experience.",
        "Construits sur l\u2019architecture Electric Smart Secure Architecture (ESSA) de Dongfeng, les v\xE9hicules Voyah int\xE8grent les derni\xE8res innovations en mati\xE8re de mobilit\xE9 \xE9lectrique et garantissent s\xE9curit\xE9, efficacit\xE9 et une exp\xE9rience de conduite sup\xE9rieure.",
        "\u0627\u0633\u062A\u0646\u0627\u062F\u0627\u064B \u0625\u0644\u0649 \u0645\u0639\u0645\u0627\u0631\u064A\u0629 ESSA \u0627\u0644\u0622\u0645\u0646\u0629 \u0648\u0627\u0644\u0630\u0643\u064A\u0629 \u0644\u0644\u0643\u0647\u0631\u0628\u0627\u0621 \u0645\u0646 \u062F\u0648\u0646\u063A\u0641\u0646\u063A\u060C \u062A\u0636\u0645\u0651 \u0633\u064A\u0627\u0631\u0627\u062A \u0641\u0648\u0627\u0647 \u0623\u062D\u062F\u062B \u0627\u0628\u062A\u0643\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u0646\u0642\u0644 \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A \u0648\u062A\u0648\u0641\u0631 \u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0648\u0627\u0644\u0643\u0641\u0627\u0621\u0629 \u0648\u062A\u062C\u0631\u0628\u0629 \u0642\u064A\u0627\u062F\u0629 \u0627\u0633\u062A\u062B\u0646\u0627\u0626\u064A\u0629."
      )
    ];
    const dealerHeading = t$1(
      `About ${dealerContact.partnerLabel}`,
      `\xC0 propos de ${dealerContact.partnerLabel}`,
      `\u0639\u0646 ${dealerContact.partnerLabel}`
    );
    const dealerParagraphs = [
      t$1(
        `${dealerContact.partnerLabel} is the official Voyah distributor in Tunisia. The team handles sales, financing advice and after-sales support, and welcomes customers at the ${textFor(dealerContact.address)}.`,
        `${dealerContact.partnerLabel} est le distributeur officiel de Voyah en Tunisie. L\u2019\xE9quipe assure la vente, le conseil en financement et le service apr\xE8s-vente, et accueille les clients au ${textFor(dealerContact.address)}.`,
        `${dealerContact.partnerLabel} \u0647\u064A \u0627\u0644\u0645\u0648\u0632\u0651\u0639 \u0627\u0644\u0631\u0633\u0645\u064A \u0644\u0639\u0644\u0627\u0645\u0629 \u0641\u0648\u0627\u0647 \u0641\u064A \u062A\u0648\u0646\u0633. \u064A\u062A\u0643\u0641\u0651\u0644 \u0641\u0631\u064A\u0642\u0647\u0627 \u0628\u0627\u0644\u0628\u064A\u0639 \u0648\u0627\u0644\u0646\u0635\u062D \u0641\u064A \u0627\u0644\u062A\u0645\u0648\u064A\u0644 \u0648\u062E\u062F\u0645\u0629 \u0645\u0627 \u0628\u0639\u062F \u0627\u0644\u0628\u064A\u0639\u060C \u0648\u064A\u0633\u062A\u0642\u0628\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0641\u064A ${textFor(dealerContact.address)}.`
      ),
      t$1(
        "Every Voyah sold here is covered by the manufacturer warranty and maintained by technicians trained to the brand\u2019s standards.",
        "Chaque Voyah vendue ici b\xE9n\xE9ficie de la garantie constructeur et est entretenue par des techniciens form\xE9s aux standards de la marque.",
        "\u0643\u0644 \u0633\u064A\u0627\u0631\u0629 \u0641\u0648\u0627\u0647 \u062A\u064F\u0628\u0627\u0639 \u0647\u0646\u0627 \u0645\u0634\u0645\u0648\u0644\u0629 \u0628\u0636\u0645\u0627\u0646 \u0627\u0644\u0645\u0635\u0646\u0651\u0639 \u0648\u064A\u0639\u062A\u0646\u064A \u0628\u0647\u0627 \u0641\u0646\u0651\u064A\u0648\u0646 \u0645\u062F\u0631\u0651\u0628\u0648\u0646 \u0648\u0641\u0642 \u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u0639\u0644\u0627\u0645\u0629."
      )
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-page" }, _attrs))} data-v-15be1447><div class="container about-page__body" data-v-15be1447><h1 class="about-page__title" data-v-15be1447>${ssrInterpolate(unref(textFor)(__props.page.title))}</h1><!--[-->`);
      ssrRenderList(brandParagraphs, (paragraph, index) => {
        _push(`<p class="about-page__text" data-v-15be1447>${ssrInterpolate(unref(textFor)(paragraph))}</p>`);
      });
      _push(`<!--]--><h2 class="about-page__subtitle" data-v-15be1447>${ssrInterpolate(unref(textFor)(unref(dealerHeading)))}</h2><!--[-->`);
      ssrRenderList(dealerParagraphs, (paragraph, index) => {
        _push(`<p class="about-page__text" data-v-15be1447>${ssrInterpolate(unref(textFor)(paragraph))}</p>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/brand/AboutPage.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const AboutPage = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-15be1447"]]);
const PAGE_SIZE = 4;
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "NewsPage",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    const { locale, buildPath, textFor } = useSiteContent();
    const labels = {
      news: t$1("News", "Actualit\xE9s", "\u0627\u0644\u0623\u062E\u0628\u0627\u0631"),
      all: t$1("All news", "Toutes les actualit\xE9s", "\u0643\u0644 \u0627\u0644\u0623\u062E\u0628\u0627\u0631"),
      empty: t$1(
        "No news published yet. Check back soon.",
        "Aucune actualit\xE9 publi\xE9e pour le moment. Revenez bient\xF4t.",
        "\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u062E\u0628\u0627\u0631 \u0645\u0646\u0634\u0648\u0631\u0629 \u0628\u0639\u062F. \u062A\u0627\u0628\u0639\u0646\u0627 \u0642\u0631\u064A\u0628\u0627\u064B."
      ),
      readMore: t$1("Read full release", "Lire le communiqu\xE9", "\u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0628\u064A\u0627\u0646 \u0643\u0627\u0645\u0644\u0627\u064B"),
      readArticle: t$1("Read the article", "Lire l\u2019article", "\u0627\u0642\u0631\u0623 \u0627\u0644\u0645\u0642\u0627\u0644"),
      loadMore: t$1("Load more", "Voir plus", "\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064A\u062F")
    };
    const activeCategory = ref("all");
    const visibleCount = ref(PAGE_SIZE);
    const tabs = computed(() => [
      { id: "all", label: textFor(labels.all) },
      ...Object.keys(newsCategoryLabels).map((id) => ({
        id,
        label: textFor(newsCategoryLabels[id])
      }))
    ]);
    const filtered = computed(() => {
      const items = activeCategory.value === "all" ? [...newsItems] : newsItems.filter((item) => item.category === activeCategory.value);
      return items.sort((a, b) => b.date.localeCompare(a.date));
    });
    const visibleItems = computed(() => filtered.value.slice(0, visibleCount.value));
    const formatDate = (iso) => new Intl.DateTimeFormat(locale.value.code, { day: "numeric", month: "short", year: "numeric" }).format(
      /* @__PURE__ */ new Date(`${iso}T00:00:00`)
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "news-page" }, _attrs))} data-v-9e2df33d>`);
      _push(ssrRenderComponent(PageHero, {
        eyebrow: unref(textFor)(__props.page.eyebrow),
        title: unref(textFor)(__props.page.title),
        summary: unref(textFor)(__props.page.summary),
        image: __props.page.heroImage,
        align: "start",
        compact: ""
      }, null, _parent));
      _push(`<nav class="news-filters"${ssrRenderAttr("aria-label", unref(textFor)(labels.news))} data-v-9e2df33d><div class="container" data-v-9e2df33d><ul data-v-9e2df33d><!--[-->`);
      ssrRenderList(unref(tabs), (tab) => {
        _push(`<li class="${ssrRenderClass(["news-filter", { active: unref(activeCategory) === tab.id }])}" data-v-9e2df33d>${ssrInterpolate(tab.label)}</li>`);
      });
      _push(`<!--]--></ul></div></nav><section class="news-list-section" data-v-9e2df33d><div class="container" data-v-9e2df33d>`);
      if (!unref(filtered).length) {
        _push(`<p class="news-empty" data-v-9e2df33d>${ssrInterpolate(unref(textFor)(labels.empty))}</p>`);
      } else {
        _push(`<div class="news-grid" data-v-9e2df33d><!--[-->`);
        ssrRenderList(unref(visibleItems), (item, index) => {
          _push(`<article class="${ssrRenderClass(["news-card", { featured: index === 0 }])}" data-v-9e2df33d><div class="${ssrRenderClass(["news-card-media", { small: index !== 0 }])}" style="${ssrRenderStyle({ backgroundImage: `url('${item.image}')` })}" role="img"${ssrRenderAttr("aria-label", unref(textFor)(item.title))} data-v-9e2df33d></div><div class="news-card-content" data-v-9e2df33d><div class="news-meta" data-v-9e2df33d><span class="category" data-v-9e2df33d>${ssrInterpolate(unref(textFor)(unref(newsCategoryLabels)[item.category]))}</span><span class="date" data-v-9e2df33d>${ssrInterpolate(formatDate(item.date))}</span></div><h3 data-v-9e2df33d>${ssrInterpolate(unref(textFor)(item.title))}</h3>`);
          if (index === 0) {
            _push(`<p data-v-9e2df33d>${ssrInterpolate(unref(textFor)(item.excerpt))}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (item.page) {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: unref(buildPath)(item.page),
              class: "read-more"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(unref(textFor)(labels.readArticle))} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-v-9e2df33d${_scopeId}><path d="M5 12h14M12 5l7 7-7 7" data-v-9e2df33d${_scopeId}></path></svg>`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(textFor)(labels.readArticle)) + " ", 1),
                    (openBlock(), createBlock("svg", {
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "aria-hidden": "true"
                    }, [
                      createVNode("path", { d: "M5 12h14M12 5l7 7-7 7" })
                    ]))
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else if (item.url.trim()) {
            _push(`<a${ssrRenderAttr("href", item.url)} target="_blank" rel="noopener noreferrer" class="read-more" data-v-9e2df33d>${ssrInterpolate(unref(textFor)(labels.readMore))} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-v-9e2df33d><path d="M5 12h14M12 5l7 7-7 7" data-v-9e2df33d></path></svg></a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></article>`);
        });
        _push(`<!--]--></div>`);
      }
      if (unref(filtered).length > unref(visibleCount)) {
        _push(`<div class="load-more-container" data-v-9e2df33d><button type="button" class="btn-load-more" data-v-9e2df33d>${ssrInterpolate(unref(textFor)(labels.loadMore))}</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/brand/NewsPage.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const NewsPage = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-9e2df33d"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "NewsGallery",
  __ssrInlineRender: true,
  props: {
    eyebrow: {},
    title: {},
    description: {},
    images: {}
  },
  setup(__props) {
    const props = __props;
    const { textFor, locale } = useSiteContent();
    ref(null);
    const activeSlide = ref(0);
    ref();
    const opened = ref(null);
    const lightboxImage = computed(() => opened.value !== null ? props.images[opened.value] : null);
    const labels = {
      previous: t$1("Previous image", "Image pr\xE9c\xE9dente", "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629"),
      next: t$1("Next image", "Image suivante", "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629"),
      enlarge: t$1("Enlarge image", "Agrandir l\u2019image", "\u062A\u0643\u0628\u064A\u0631 \u0627\u0644\u0635\u0648\u0631\u0629"),
      close: t$1("Close gallery", "Fermer la galerie", "\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0645\u0639\u0631\u0636")
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "studio-gallery",
        "aria-labelledby": "news-gallery-title"
      }, _attrs))} data-v-7a5d0db0><div class="studio-gallery__inner" data-v-7a5d0db0><header class="studio-gallery__heading" data-v-7a5d0db0>`);
      if (__props.eyebrow) {
        _push(`<p data-v-7a5d0db0>${ssrInterpolate(unref(textFor)(__props.eyebrow))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h2 id="news-gallery-title" data-v-7a5d0db0>${ssrInterpolate(unref(textFor)(__props.title))}</h2>`);
      if (__props.description) {
        _push(`<span data-v-7a5d0db0>${ssrInterpolate(unref(textFor)(__props.description))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><section class="studio-gallery__carousel" aria-label="" data-v-7a5d0db0><div class="studio-gallery__track" dir="ltr" data-v-7a5d0db0><!--[-->`);
      ssrRenderList(__props.images, (image, index) => {
        _push(`<button type="button" class="studio-gallery__image"${ssrRenderAttr("aria-label", `${unref(textFor)(labels.enlarge)} \u2014 ${unref(textFor)(image.title)}`)} data-v-7a5d0db0><img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", unref(textFor)(image.title))} loading="lazy" decoding="async" draggable="false" data-v-7a5d0db0><span${ssrRenderAttr("dir", unref(locale).dir)} data-v-7a5d0db0>${ssrInterpolate(unref(textFor)(image.title))}<span aria-hidden="true" data-v-7a5d0db0>\uFF0B</span></span></button>`);
      });
      _push(`<!--]--></div><div class="studio-gallery__controls" dir="ltr" data-v-7a5d0db0><button type="button"${ssrRenderAttr("aria-label", unref(textFor)(labels.previous))}${ssrIncludeBooleanAttr(activeSlide.value === 0) ? " disabled" : ""} data-v-7a5d0db0>\u2039</button><div class="studio-gallery__dots" data-v-7a5d0db0><!--[-->`);
      ssrRenderList(__props.images, (image, index) => {
        _push(`<button type="button" class="${ssrRenderClass({ "is-active": activeSlide.value === index })}"${ssrRenderAttr("aria-label", unref(textFor)(image.title))}${ssrRenderAttr("aria-current", activeSlide.value === index ? "true" : void 0)} data-v-7a5d0db0><span data-v-7a5d0db0></span></button>`);
      });
      _push(`<!--]--></div><button type="button"${ssrRenderAttr("aria-label", unref(textFor)(labels.next))}${ssrIncludeBooleanAttr(activeSlide.value === __props.images.length - 1) ? " disabled" : ""} data-v-7a5d0db0>\u203A</button></div></section></div><dialog class="studio-gallery__dialog"${ssrRenderAttr("aria-label", unref(textFor)(labels.enlarge))} data-v-7a5d0db0>`);
      if (lightboxImage.value) {
        _push(`<div class="studio-gallery__lightbox" data-v-7a5d0db0><button type="button" class="studio-gallery__close"${ssrRenderAttr("aria-label", unref(textFor)(labels.close))} autofocus data-v-7a5d0db0>\xD7</button><img${ssrRenderAttr("src", lightboxImage.value.src)}${ssrRenderAttr("alt", unref(textFor)(lightboxImage.value.title))} data-v-7a5d0db0><div class="studio-gallery__lightbox-nav" dir="ltr" data-v-7a5d0db0><button type="button"${ssrRenderAttr("aria-label", unref(textFor)(labels.previous))} data-v-7a5d0db0>\u2039</button><p${ssrRenderAttr("dir", unref(locale).dir)} data-v-7a5d0db0>${ssrInterpolate(unref(textFor)(lightboxImage.value.title))}</p><button type="button"${ssrRenderAttr("aria-label", unref(textFor)(labels.next))} data-v-7a5d0db0>\u203A</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</dialog></section>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/brand/NewsGallery.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const NewsGallery = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-7a5d0db0"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "NewsArticlePage",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const props = __props;
    const { locale, buildPath, textFor } = useSiteContent();
    const galleryImages = computed(
      () => {
        var _a;
        return ((_a = props.item.gallery) != null ? _a : []).map((src, index) => {
          var _a2, _b;
          return {
            src,
            title: (_b = (_a2 = props.item.galleryCaptions) == null ? void 0 : _a2[index]) != null ? _b : props.item.title
          };
        });
      }
    );
    const labels = {
      gallery: t$1("Gallery", "Galerie", "\u0627\u0644\u0645\u0639\u0631\u0636"),
      galleryEyebrow: t$1("In pictures", "En images", "\u0628\u0627\u0644\u0635\u0648\u0631"),
      galleryDescription: t$1(
        "Discover the news in pictures.",
        "D\xE9couvrez l\u2019actualit\xE9 en images.",
        "\u0627\u0643\u062A\u0634\u0641 \u0627\u0644\u062E\u0628\u0631 \u0628\u0627\u0644\u0635\u0648\u0631."
      ),
      ctaEyebrow: t$1("VOYAH range", "Gamme VOYAH", "\u062A\u0634\u0643\u064A\u0644\u0629 \u0641\u0648\u064A\u0627\u0647"),
      ctaTitle: t$1(
        "Discover the VOYAH range",
        "D\xE9couvrez la gamme VOYAH",
        "\u0627\u0643\u062A\u0634\u0641 \u062A\u0634\u0643\u064A\u0644\u0629 \u0641\u0648\u064A\u0627\u0647"
      ),
      quote: t$1("Request a quote", "Demander un devis", "\u0627\u0637\u0644\u0628 \u0639\u0631\u0636 \u0633\u0639\u0631")
    };
    const isList = (text) => {
      const fr = text.fr || text.en;
      const lines = fr.split("\n").map((line) => line.trim()).filter(Boolean);
      return lines.length > 0 && lines.every((line) => line.startsWith("\u2022"));
    };
    const listLines = (text) => (text.fr || text.en).split("\n").map((line) => line.trim().replace(/^•\s*/, "")).filter(Boolean);
    const formatDate = (iso) => new Intl.DateTimeFormat(locale.value.code, { day: "numeric", month: "long", year: "numeric" }).format(
      /* @__PURE__ */ new Date(`${iso}T00:00:00`)
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "news-article" }, _attrs))} data-v-f1ecc29b><section class="article-hero" data-v-f1ecc29b><img class="article-hero__poster"${ssrRenderAttr("src", __props.item.image)}${ssrRenderAttr("alt", unref(textFor)(__props.item.title))} data-v-f1ecc29b>`);
      if (__props.item.video) {
        _push(`<iframe class="article-hero__video"${ssrRenderAttr("src", __props.item.video)} title="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen data-v-f1ecc29b></iframe>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="article-hero__scrim article-hero__scrim--top" aria-hidden="true" data-v-f1ecc29b></span><span class="article-hero__scrim article-hero__scrim--bottom" aria-hidden="true" data-v-f1ecc29b></span><div class="article-hero__overlay" data-v-f1ecc29b><div class="article-hero__head" data-v-f1ecc29b><img class="article-hero__logo"${ssrRenderAttr("src", _imports_0$h)} alt="VOYAH" data-v-f1ecc29b><p class="article-hero__meta" data-v-f1ecc29b><span class="article-hero__category" data-v-f1ecc29b>${ssrInterpolate(unref(textFor)(unref(newsCategoryLabels)[__props.item.category]))}</span><span class="article-hero__sep" aria-hidden="true" data-v-f1ecc29b>/</span><span class="article-hero__date" data-v-f1ecc29b>${ssrInterpolate(formatDate(__props.item.date))}</span></p><h1 class="article-hero__title" data-v-f1ecc29b>${ssrInterpolate(unref(textFor)(__props.item.title))}</h1><p class="article-hero__excerpt" data-v-f1ecc29b>${ssrInterpolate(unref(textFor)(__props.item.excerpt))}</p></div></div></section><article class="article-body" data-v-f1ecc29b><div class="container" data-v-f1ecc29b><!--[-->`);
      ssrRenderList((_a = __props.item.body) != null ? _a : [], (block, index) => {
        _push(`<div class="${ssrRenderClass([
          "article-block",
          { "article-block--lead": index === 0 && block.variant !== "quote" },
          { "article-block--quote": block.variant === "quote" }
        ])}" data-v-f1ecc29b>`);
        if (block.variant === "quote") {
          _push(`<blockquote class="article-quote" data-v-f1ecc29b><p data-v-f1ecc29b>${ssrInterpolate(unref(textFor)(block.text))}</p></blockquote>`);
        } else {
          _push(`<!--[-->`);
          if (block.heading && unref(textFor)(block.heading)) {
            _push(`<h2 class="article-block__heading" data-v-f1ecc29b>${ssrInterpolate(unref(textFor)(block.heading))}</h2>`);
          } else {
            _push(`<!---->`);
          }
          if (isList(block.text)) {
            _push(`<ul class="article-list" data-v-f1ecc29b><!--[-->`);
            ssrRenderList(listLines(block.text), (line, lineIndex) => {
              _push(`<li data-v-f1ecc29b>${ssrInterpolate(line)}</li>`);
            });
            _push(`<!--]--></ul>`);
          } else {
            _push(`<p class="article-block__text" data-v-f1ecc29b>${ssrInterpolate(unref(textFor)(block.text))}</p>`);
          }
          _push(`<!--]-->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></article>`);
      if (unref(galleryImages).length) {
        _push(ssrRenderComponent(NewsGallery, {
          eyebrow: labels.galleryEyebrow,
          title: labels.gallery,
          description: labels.galleryDescription,
          images: unref(galleryImages)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="article-cta" data-v-f1ecc29b><div class="container article-cta__inner" data-v-f1ecc29b><span class="article-cta__eyebrow" data-v-f1ecc29b>${ssrInterpolate(unref(textFor)(labels.ctaEyebrow))}</span><h2 class="article-cta__title" data-v-f1ecc29b>${ssrInterpolate(unref(textFor)(labels.ctaTitle))}</h2><div class="article-cta__actions" data-v-f1ecc29b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(buildPath)("Free"),
        class: "base-button primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(textFor)(unref(modelDisplayName)["Free"]))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(textFor)(unref(modelDisplayName)["Free"])), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(buildPath)("Courage"),
        class: "base-button secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(textFor)(unref(modelDisplayName)["Courage"]))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(textFor)(unref(modelDisplayName)["Courage"])), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(buildPath)("devis"),
        class: "base-button secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(textFor)(labels.quote))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(textFor)(labels.quote)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/brand/NewsArticlePage.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const NewsArticlePage = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-f1ecc29b"]]);
const _imports_0$3 = publicAssetsURL("/voyah-resources/brand/about_hero.jpg");
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "PhilosophyPage",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "custom-page philosophy-page" }, _attrs))} data-v-a0d52767>`);
      _push(ssrRenderComponent(PageHero, {
        eyebrow: _ctx.$t("domain.philosophy.eyebrow", "Brand Heritage"),
        title: _ctx.$t("domain.philosophy.title", "Freedom to Explore"),
        summary: _ctx.$t("domain.philosophy.summary", "Our philosophy is rooted in harmony\u2014balancing human needs, technological advancement, and ecological responsibility."),
        image: "/voyah-resources/brand/philosophy_hero.jpg",
        align: "center",
        compact: false
      }, null, _parent));
      _push(`<section class="philosophy-intro section-shell" data-v-a0d52767><div class="container" data-v-a0d52767><div class="intro-grid" data-v-a0d52767><div class="intro-text" data-v-a0d52767><h2 data-v-a0d52767>${ssrInterpolate(_ctx.$t("domain.philosophy.intro_title", "A New Paradigm of Premium"))}</h2><p data-v-a0d52767>${ssrInterpolate(_ctx.$t("domain.philosophy.intro_p1", "Voyah was born from a desire to redefine luxury mobility. We do not just build cars; we architect intelligent mobile spaces that eliminate range anxiety and embrace the sheer joy of driving."))}</p><p data-v-a0d52767>${ssrInterpolate(_ctx.$t("domain.philosophy.intro_p2", "Inspired by traditional Chinese philosophy and powered by cutting-edge global engineering, we deliver an experience that is both profoundly serene and fiercely dynamic."))}</p></div><div class="intro-image" data-v-a0d52767><img${ssrRenderAttr("src", _imports_0$3)} alt="Voyah Ethos" class="rounded-media" data-v-a0d52767></div></div></div></section><section class="brand-pillars section-shell bg-light" data-v-a0d52767><div class="container" data-v-a0d52767><div class="section-title-center" data-v-a0d52767><h2 data-v-a0d52767>${ssrInterpolate(_ctx.$t("domain.philosophy.pillars_title", "Three Pillars of Voyah"))}</h2></div><div class="pillars-container" data-v-a0d52767><div class="pillar-card" data-v-a0d52767><div class="pillar-number" data-v-a0d52767>01</div><h3 data-v-a0d52767>${ssrInterpolate(_ctx.$t("domain.philosophy.p1_title", "Zero Anxiety"))}</h3><p data-v-a0d52767>${ssrInterpolate(_ctx.$t("domain.philosophy.p1_desc", "Through our advanced ESSA 800V architecture and robust charging network, we have mathematically eliminated the traditional boundaries of electric travel."))}</p></div><div class="pillar-card" data-v-a0d52767><div class="pillar-number" data-v-a0d52767>02</div><h3 data-v-a0d52767>${ssrInterpolate(_ctx.$t("domain.philosophy.p2_title", "Quiet Luxury"))}</h3><p data-v-a0d52767>${ssrInterpolate(_ctx.$t("domain.philosophy.p2_desc", "True luxury doesn't shout. Our cabins are engineered to NVH standards that isolate the chaos of the outside world, creating a sanctuary of calm."))}</p></div><div class="pillar-card" data-v-a0d52767><div class="pillar-number" data-v-a0d52767>03</div><h3 data-v-a0d52767>${ssrInterpolate(_ctx.$t("domain.philosophy.p3_title", "Smart Empowerment"))}</h3><p data-v-a0d52767>${ssrInterpolate(_ctx.$t("domain.philosophy.p3_desc", "Technology should serve, not overwhelm. Our AI-driven smart cockpits anticipate your needs to make every journey effortless."))}</p></div></div></div></section><section class="manifesto-parallax" style="${ssrRenderStyle({ backgroundImage: `url('/voyah-resources/brand/kunpeng_hero.jpg')` })}" data-v-a0d52767><div class="parallax-overlay" data-v-a0d52767><div class="container" data-v-a0d52767><blockquote data-v-a0d52767> &quot;${ssrInterpolate(_ctx.$t("domain.philosophy.quote", "To move forward, we must look beyond the horizon. We are not just reaching for the destination, but elevating the journey."))}&quot; </blockquote></div></div></section></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/brand/PhilosophyPage.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const PhilosophyPage = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-a0d52767"]]);
const _imports_0$2 = publicAssetsURL("/voyah-resources/brand/philosophy_hero.jpg");
const _imports_2 = publicAssetsURL("/voyah-resources/models/titan_ultra_hero.jpg");
const _imports_3 = publicAssetsURL("/voyah-resources/tech/cockpit_hero.jpg");
const _imports_4 = publicAssetsURL("/voyah-resources/brand/kunpeng_hero.jpg");
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "KunpengPage",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "custom-page kunpeng-page" }, _attrs))} data-v-a10d4c05>`);
      _push(ssrRenderComponent(PageHero, {
        eyebrow: _ctx.$t("domain.kunpeng.eyebrow", "The Kunpeng DNA"),
        title: _ctx.$t("domain.kunpeng.title", "Design Without Boundaries"),
        summary: _ctx.$t("domain.kunpeng.summary", "Inspired by the ancient mythological Kunpeng\u2014a giant fish that transforms into a bird, our design language blends fluid mechanics with boundless aerodynamic freedom."),
        image: "/voyah-resources/brand/kunpeng_hero.jpg",
        align: "end",
        compact: false
      }, null, _parent));
      _push(`<section class="dna-section section-shell text-bg-dark" data-v-a10d4c05><div class="container" data-v-a10d4c05><div class="dna-intro" data-v-a10d4c05><h2 data-v-a10d4c05>${ssrInterpolate(_ctx.$t("domain.kunpeng.dna_title", "Elegant and Majestic"))}</h2><p data-v-a10d4c05>${ssrInterpolate(_ctx.$t("domain.kunpeng.dna_desc", "The Kunpeng design philosophy is defined by two opposing yet complementary forces: the fluid grace of the ocean and the sharp, aerodynamic ambition of the sky."))}</p></div></div><div class="concept-marquee" data-v-a10d4c05><div class="marquee-track" data-v-a10d4c05><div class="concept-card" data-v-a10d4c05><img${ssrRenderAttr("src", _imports_0$2)} alt="Fluid Dynamics" data-v-a10d4c05><div class="concept-overlay" data-v-a10d4c05><h4 data-v-a10d4c05>${ssrInterpolate(_ctx.$t("domain.kunpeng.c1", "Aero-Sculpted Lines"))}</h4></div></div><div class="concept-card" data-v-a10d4c05><img${ssrRenderAttr("src", _imports_1$2)} alt="Safety Meets Form" data-v-a10d4c05><div class="concept-overlay" data-v-a10d4c05><h4 data-v-a10d4c05>${ssrInterpolate(_ctx.$t("domain.kunpeng.c2", "Form Meets Physics"))}</h4></div></div><div class="concept-card" data-v-a10d4c05><img${ssrRenderAttr("src", _imports_2)} alt="Titan Ultra Concept" data-v-a10d4c05><div class="concept-overlay" data-v-a10d4c05><h4 data-v-a10d4c05>${ssrInterpolate(_ctx.$t("domain.kunpeng.c3", "The Skyline Profile"))}</h4></div></div><div class="concept-card" data-v-a10d4c05><img${ssrRenderAttr("src", _imports_3)} alt="Interior Zen" data-v-a10d4c05><div class="concept-overlay" data-v-a10d4c05><h4 data-v-a10d4c05>${ssrInterpolate(_ctx.$t("domain.kunpeng.c4", "Zen Interior Architecture"))}</h4></div></div></div></div></section><section class="iland-section section-shell" data-v-a10d4c05><div class="container" data-v-a10d4c05><div class="iland-grid" data-v-a10d4c05><div class="iland-text" data-v-a10d4c05><div class="badge" data-v-a10d4c05>i-Land Concept</div><h2 data-v-a10d4c05>${ssrInterpolate(_ctx.$t("domain.kunpeng.i_title", "The Genesis of Voyah Form"))}</h2><p data-v-a10d4c05>${ssrInterpolate(_ctx.$t("domain.kunpeng.i_p1", 'The i-Land concept car was the pure manifestation of the Kunpeng philosophy. It introduced the world to our signature "Light Sword" interactive headlights and the floating roofline.'))}</p><ul class="design-list" data-v-a10d4c05><li data-v-a10d4c05><strong data-v-a10d4c05>${ssrInterpolate(_ctx.$t("domain.kunpeng.f1_title", "Light Wings:"))}</strong> ${ssrInterpolate(_ctx.$t("domain.kunpeng.f1_desc", "Symmetric daytime running lights crossing the grille."))}</li><li data-v-a10d4c05><strong data-v-a10d4c05>${ssrInterpolate(_ctx.$t("domain.kunpeng.f2_title", "Surging Waves:"))}</strong> ${ssrInterpolate(_ctx.$t("domain.kunpeng.f2_desc", "Profile body lines that emulate ripples displacing water."))}</li></ul></div><div class="iland-image" data-v-a10d4c05><div class="img-wrapper shadow-layer" data-v-a10d4c05><img${ssrRenderAttr("src", _imports_4)} alt="i-Land Prototype" data-v-a10d4c05></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/brand/KunpengPage.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const KunpengPage = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-a10d4c05"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "FaqPage",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    const currentCategory = ref("vehicle");
    const openIdx = ref(0);
    const faqs = {
      vehicle: [
        { q: "How do I activate the Valet Mode?", a: "Valet Mode can be activated directly from the Smart Cockpit central display under the Security tab. You will be prompted to enter a 4-digit PIN." },
        { q: "What is the maximum wading depth of the Voyah FREE?", a: "The Voyah FREE features excellent airtight sealing, achieving a maximum wading depth of 600mm under standard conditions." },
        { q: "How does the Air Suspension automatically adjust?", a: "The chassis utilizes active predictive mapping up to 10 meters ahead to dynamically lower or raise the suspension based on road quality and speed." }
      ],
      charging: [
        { q: "Is 800V Supercharging compatible everywhere?", a: "Voyah models equipped with 800V architectures are backwards compatible with standard 400V chargers, though peak rates will be governed by the standard." },
        { q: "How long does a standard home charge take?", a: "Using the Voyah 11kW home wallbox, charging from 10% to 100% takes approximately 8.5 hours." }
      ],
      software: [
        { q: "Are OTA updates free?", a: "Yes, all foundational OTA updates affecting vehicle dynamics, intelligent driving matrices, and security are provided free for the lifetime of the vehicle." },
        { q: "How long does an OTA update typically take?", a: "Updates usually range from 30 to 45 minutes. The vehicle must be parked and locked during the installation process." }
      ],
      service: [
        { q: "What is the standard warranty period?", a: "Voyah offers an extensive 5-year or 100,000 km overall vehicle warranty, and an 8-year or 160,000 km warranty for the core battery architecture." }
      ]
    };
    const activeFaqs = computed(() => {
      return faqs[currentCategory.value] || [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "custom-page faqpage" }, _attrs))} data-v-38e2c96a>`);
      _push(ssrRenderComponent(PageHero, {
        eyebrow: _ctx.$t("domain.faqpage.eyebrow", "Support Center"),
        title: _ctx.$t("domain.faqpage.title", "Frequently Asked Questions"),
        summary: _ctx.$t("domain.faqpage.summary", "Find quick answers to your questions about Voyah."),
        image: "/voyah-resources/service/faq_hero.jpg",
        align: "center",
        compact: true
      }, null, _parent));
      _push(`<section class="faq-section section-shell bg-light" data-v-38e2c96a><div class="container faq-container" data-v-38e2c96a><div class="faq-sidebar" data-v-38e2c96a><ul data-v-38e2c96a><li class="${ssrRenderClass({ active: currentCategory.value === "vehicle" })}" data-v-38e2c96a>${ssrInterpolate(_ctx.$t("domain.faqpage.cat_vehicle", "Vehicle Operation"))}</li><li class="${ssrRenderClass({ active: currentCategory.value === "charging" })}" data-v-38e2c96a>${ssrInterpolate(_ctx.$t("domain.faqpage.cat_charging", "Charging & Battery"))}</li><li class="${ssrRenderClass({ active: currentCategory.value === "software" })}" data-v-38e2c96a>${ssrInterpolate(_ctx.$t("domain.faqpage.cat_software", "Software & OTA"))}</li><li class="${ssrRenderClass({ active: currentCategory.value === "service" })}" data-v-38e2c96a>${ssrInterpolate(_ctx.$t("domain.faqpage.cat_service", "Service & Warranty"))}</li></ul></div><div class="faq-content" data-v-38e2c96a><div class="faq-list" data-v-38e2c96a><!--[-->`);
      ssrRenderList(activeFaqs.value, (faq, idx) => {
        _push(`<div class="${ssrRenderClass([{ open: openIdx.value === idx }, "faq-item"])}" data-v-38e2c96a><div class="faq-question" data-v-38e2c96a><h3 data-v-38e2c96a>${ssrInterpolate(faq.q)}</h3><div class="faq-icon" data-v-38e2c96a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-38e2c96a><path d="M6 9l6 6 6-6" data-v-38e2c96a></path></svg></div></div><div class="faq-answer" style="${ssrRenderStyle(openIdx.value === idx ? null : { display: "none" })}" data-v-38e2c96a><p data-v-38e2c96a>${ssrInterpolate(faq.a)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/service/FaqPage.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const FaqPage = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-38e2c96a"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "WarrantyPage",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "custom-page warranty-page" }, _attrs))} data-v-81f0a156>`);
      _push(ssrRenderComponent(PageHero, {
        eyebrow: _ctx.$t("domain.warranty.eyebrow", "Voyah Care"),
        title: _ctx.$t("domain.warranty.title", "Warranty & Assurance"),
        summary: _ctx.$t("domain.warranty.summary", "Drive with total peace of mind under Voyah\u2019s comprehensive protection plans."),
        image: "/voyah-resources/service/warranty_hero.jpg",
        align: "center",
        compact: true
      }, null, _parent));
      _push(`<section class="warranty-tables section-shell" data-v-81f0a156><div class="container" data-v-81f0a156><div class="section-title-center" data-v-81f0a156><h2 data-v-81f0a156>${ssrInterpolate(_ctx.$t("domain.warranty.coverage", "Standard Coverage"))}</h2><p data-v-81f0a156>${ssrInterpolate(_ctx.$t("domain.warranty.coverage_sub", "Exclusively available for the original owner, activated upon delivery."))}</p></div><div class="table-wrapper" data-v-81f0a156><table class="voyah-table" data-v-81f0a156><thead data-v-81f0a156><tr data-v-81f0a156><th data-v-81f0a156>${ssrInterpolate(_ctx.$t("domain.warranty.th_component", "Vehicle Component"))}</th><th data-v-81f0a156>${ssrInterpolate(_ctx.$t("domain.warranty.th_duration", "Duration (Years)"))}</th><th data-v-81f0a156>${ssrInterpolate(_ctx.$t("domain.warranty.th_mileage", "Mileage Limit"))}</th><th data-v-81f0a156>${ssrInterpolate(_ctx.$t("domain.warranty.th_notes", "Conditions"))}</th></tr></thead><tbody data-v-81f0a156><tr data-v-81f0a156><td class="bold-cell" data-v-81f0a156>${ssrInterpolate(_ctx.$t("domain.warranty.general", "New Vehicle General Warranty"))}</td><td data-v-81f0a156>5 Years</td><td data-v-81f0a156>100,000 km</td><td data-v-81f0a156>Covers defects in materials and workmanship.</td></tr><tr class="highlight-row" data-v-81f0a156><td class="bold-cell" data-v-81f0a156><div class="battery-label" data-v-81f0a156>${ssrInterpolate(_ctx.$t("domain.warranty.battery", "Amber Battery Architecture"))} <span class="badge" data-v-81f0a156>Core</span></div></td><td data-v-81f0a156>8 Years</td><td data-v-81f0a156>160,000 km</td><td data-v-81f0a156>Guarantees capacity retention above 70%.</td></tr><tr data-v-81f0a156><td class="bold-cell" data-v-81f0a156>${ssrInterpolate(_ctx.$t("domain.warranty.drivetrain", "Electric Drivetrain (Motors & Inverters)"))}</td><td data-v-81f0a156>8 Years</td><td data-v-81f0a156>160,000 km</td><td data-v-81f0a156>Excludes physical abuse or water damage exceeding 600mm depth.</td></tr><tr data-v-81f0a156><td class="bold-cell" data-v-81f0a156>${ssrInterpolate(_ctx.$t("domain.warranty.corrosion", "Body Corrosion Perforation"))}</td><td data-v-81f0a156>10 Years</td><td data-v-81f0a156>Unlimited</td><td data-v-81f0a156>Must pass annual authorized dealer inspection.</td></tr><tr data-v-81f0a156><td class="bold-cell" data-v-81f0a156>${ssrInterpolate(_ctx.$t("domain.warranty.wear", "Wear & Tear Items (Brakes, Wipers)"))}</td><td data-v-81f0a156>6 Months</td><td data-v-81f0a156>10,000 km</td><td data-v-81f0a156>Subject to driving conditions and driver behavior.</td></tr></tbody></table></div></div></section><section class="extended-coverage section-shell bg-light" data-v-81f0a156><div class="container" data-v-81f0a156><div class="section-title-center" data-v-81f0a156><h2 data-v-81f0a156>${ssrInterpolate(_ctx.$t("domain.warranty.extended", "Extended Voyah Care+"))}</h2><p data-v-81f0a156>${ssrInterpolate(_ctx.$t("domain.warranty.extended_sub", "Upgrade your protection beyond the standard factory bounds."))}</p></div><div class="care-grid" data-v-81f0a156><div class="care-card" data-v-81f0a156><div class="card-icon" data-v-81f0a156><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-81f0a156><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" data-v-81f0a156></path></svg></div><h3 data-v-81f0a156>${ssrInterpolate(_ctx.$t("domain.warranty.care_ultimate", "Ultimate Shield"))}</h3><p data-v-81f0a156>${ssrInterpolate(_ctx.$t("domain.warranty.care_ultimate_desc", "Extends the general vehicle warranty to 8 Years / 160,000 km. Full coverage bumper-to-bumper."))}</p><button class="btn-outline" data-v-81f0a156>View Details</button></div><div class="care-card" data-v-81f0a156><div class="card-icon" data-v-81f0a156><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-81f0a156><circle cx="12" cy="12" r="10" data-v-81f0a156></circle><path d="M16 12l-4-4-4 4M12 8v8" data-v-81f0a156></path></svg></div><h3 data-v-81f0a156>${ssrInterpolate(_ctx.$t("domain.warranty.care_battery", "Battery Lifetime"))}</h3><p data-v-81f0a156>${ssrInterpolate(_ctx.$t("domain.warranty.care_battery_desc", "Provides lifetime warranty on the original high-voltage battery for the first owner."))}</p><button class="btn-outline" data-v-81f0a156>View Details</button></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/service/WarrantyPage.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const WarrantyPage = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-81f0a156"]]);
const _imports_0$1 = publicAssetsURL("/voyah-resources/service/faq_hero.jpg");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppPage",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "custom-page app-page" }, _attrs))} data-v-d96c5f07>`);
      _push(ssrRenderComponent(PageHero, {
        eyebrow: _ctx.$t("domain.apppage.eyebrow", "Mobile Connectivity"),
        title: _ctx.$t("domain.apppage.title", "The Voyah App"),
        summary: _ctx.$t("domain.apppage.summary", "Control your vehicle, access the community, and manage your lifestyle from anywhere."),
        image: "/voyah-resources/service/app_hero.jpg",
        align: "center",
        compact: true
      }, null, _parent));
      _push(`<section class="app-download-section section-shell" data-v-d96c5f07><div class="container" data-v-d96c5f07><div class="app-split-grid" data-v-d96c5f07><div class="app-content-col" data-v-d96c5f07><h2 data-v-d96c5f07>${ssrInterpolate(_ctx.$t("domain.apppage.features_title", "Everything connected in your palm."))}</h2><ul class="app-features" data-v-d96c5f07><li data-v-d96c5f07><div class="feature-icon" data-v-d96c5f07><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d96c5f07><rect x="5" y="2" width="14" height="20" rx="2" ry="2" data-v-d96c5f07></rect><line x1="12" y1="18" x2="12.01" y2="18" data-v-d96c5f07></line></svg></div><div class="feature-text" data-v-d96c5f07><h4 data-v-d96c5f07>${ssrInterpolate(_ctx.$t("domain.apppage.f1_title", "Remote Vehicle Control"))}</h4><p data-v-d96c5f07>${ssrInterpolate(_ctx.$t("domain.apppage.f1_desc", "Pre-condition cabin climate, lock/unlock doors, and monitor charging status live."))}</p></div></li><li data-v-d96c5f07><div class="feature-icon" data-v-d96c5f07><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d96c5f07><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-d96c5f07></path><circle cx="12" cy="10" r="3" data-v-d96c5f07></circle></svg></div><div class="feature-text" data-v-d96c5f07><h4 data-v-d96c5f07>${ssrInterpolate(_ctx.$t("domain.apppage.f2_title", "Navigation Send-to-Car"))}</h4><p data-v-d96c5f07>${ssrInterpolate(_ctx.$t("domain.apppage.f2_desc", "Plan your route on your phone and send it directly to the Smart Cockpit."))}</p></div></li><li data-v-d96c5f07><div class="feature-icon" data-v-d96c5f07><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d96c5f07><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" data-v-d96c5f07></path><circle cx="9" cy="7" r="4" data-v-d96c5f07></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87" data-v-d96c5f07></path><path d="M16 3.13a4 4 0 0 1 0 7.75" data-v-d96c5f07></path></svg></div><div class="feature-text" data-v-d96c5f07><h4 data-v-d96c5f07>${ssrInterpolate(_ctx.$t("domain.apppage.f3_title", "Voyah Community"))}</h4><p data-v-d96c5f07>${ssrInterpolate(_ctx.$t("domain.apppage.f3_desc", "Share moments, earn points, and connect with other Voyah owners."))}</p></div></li></ul><div class="download-stores" data-v-d96c5f07><a href="#" class="store-button apple" data-v-d96c5f07><svg viewBox="0 0 24 24" fill="currentColor" data-v-d96c5f07><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.32 12.87c-.12 1.94-1.6 3.65-3.32 3.65-1.74 0-3.34-1.7-3.34-3.65v-2.07l2.8-2.61L12.56 12l2.76 2.8z" data-v-d96c5f07></path></svg><div class="store-text" data-v-d96c5f07><small data-v-d96c5f07>Download on the</small><span data-v-d96c5f07>App Store</span></div></a><a href="#" class="store-button google" data-v-d96c5f07><svg viewBox="0 0 24 24" fill="currentColor" data-v-d96c5f07><path d="M12 20.08c-4.46 0-8.08-3.62-8.08-8.08 0-4.46 3.62-8.08 8.08-8.08 4.46 0 8.08 3.62 8.08 8.08 0 4.46-3.62 8.08-8.08 8.08zM11.4 7.2l-3.2 4.8h6.4l-3.2-4.8zM8.2 13.6L11.4 18.4 14.6 13.6H8.2z" data-v-d96c5f07></path></svg><div class="store-text" data-v-d96c5f07><small data-v-d96c5f07>GET IT ON</small><span data-v-d96c5f07>Google Play</span></div></a></div></div><div class="app-media-col" data-v-d96c5f07><div class="mockup-container" data-v-d96c5f07><div class="phone-frame" data-v-d96c5f07><img${ssrRenderAttr("src", _imports_0$1)} alt="Voyah App Screen" class="inner-screen" data-v-d96c5f07></div></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/service/AppPage.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const AppPage = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-d96c5f07"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CommunityPage",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "custom-page community-page" }, _attrs))} data-v-ea7f900e>`);
      _push(ssrRenderComponent(PageHero, {
        eyebrow: _ctx.$t("domain.community.eyebrow", "Voyah Club"),
        title: _ctx.$t("domain.community.title", "The Voyah Community"),
        summary: _ctx.$t("domain.community.summary", "Connect, share, and embark on journeys with like-minded pioneers."),
        image: "/voyah-resources/lifestyle/community_hero.jpg",
        align: "start",
        compact: true
      }, null, _parent));
      _push(`<div class="community-nav-wrapper" data-v-ea7f900e><div class="container" data-v-ea7f900e><ul class="community-nav" data-v-ea7f900e><li class="active" data-v-ea7f900e>${ssrInterpolate(_ctx.$t("domain.community.tab_all", "Discovery Feed"))}</li><li data-v-ea7f900e>${ssrInterpolate(_ctx.$t("domain.community.tab_roadtrips", "Epic Roadtrips"))}</li><li data-v-ea7f900e>${ssrInterpolate(_ctx.$t("domain.community.tab_events", "Official Events"))}</li><li data-v-ea7f900e>${ssrInterpolate(_ctx.$t("domain.community.tab_tips", "Owner Tips"))}</li></ul></div></div><section class="feed-section section-shell bg-light" data-v-ea7f900e><div class="container" data-v-ea7f900e><div class="masonry-feed" data-v-ea7f900e><div class="feed-post post-large" data-v-ea7f900e><div class="post-media" style="${ssrRenderStyle({ "background-image": "url('/voyah-resources/models/titan_ultra_hero.jpg')" })}" data-v-ea7f900e></div><div class="post-content" data-v-ea7f900e><div class="user-meta" data-v-ea7f900e><div class="avatar" data-v-ea7f900e><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-ea7f900e><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-v-ea7f900e></path><circle cx="12" cy="7" r="4" data-v-ea7f900e></circle></svg></div><span class="username" data-v-ea7f900e>Voyager_X</span></div><h3 data-v-ea7f900e>${ssrInterpolate(_ctx.$t("domain.community.post1_title", "Crossing the Alps in my Voyah FREE"))}</h3><p data-v-ea7f900e>${ssrInterpolate(_ctx.$t("domain.community.post1_desc", "Tested the air suspension across 500km of unpaved mountain roads today. Zero anxiety, unparalleled comfort."))}</p><div class="post-actions" data-v-ea7f900e><span data-v-ea7f900e>\u2764 245</span><span data-v-ea7f900e>\u{1F4AC} 42</span></div></div></div><div class="feed-post post-text" data-v-ea7f900e><div class="post-content" data-v-ea7f900e><div class="user-meta" data-v-ea7f900e><div class="avatar" data-v-ea7f900e></div><span class="username" data-v-ea7f900e>DreamerFamily</span></div><h3 data-v-ea7f900e>${ssrInterpolate(_ctx.$t("domain.community.post2_title", "OTA 3.0 is a game changer"))}</h3><p data-v-ea7f900e>${ssrInterpolate(_ctx.$t("domain.community.post2_desc", "Just installed the latest over-the-air update. The new NOA (Navigate on Autopilot) behaves incredibly smoothly in heavy traffic."))}</p><div class="post-actions" data-v-ea7f900e><span data-v-ea7f900e>\u2764 188</span></div></div></div><div class="feed-post post-image" data-v-ea7f900e><div class="post-media" style="${ssrRenderStyle({ "background-image": "url('/voyah-resources/brand/philosophy_hero.jpg')" })}" data-v-ea7f900e></div><div class="post-content" data-v-ea7f900e><div class="user-meta" data-v-ea7f900e><div class="avatar" data-v-ea7f900e></div><span class="username" data-v-ea7f900e>NeoDesign</span></div><p data-v-ea7f900e>${ssrInterpolate(_ctx.$t("domain.community.post3_desc", "Took some shots of the ambient lighting reacting to the driving modes."))}</p><div class="post-actions" data-v-ea7f900e><span data-v-ea7f900e>\u2764 512</span></div></div></div><div class="feed-post post-event" data-v-ea7f900e><div class="event-badge" data-v-ea7f900e>Official Event</div><div class="post-content" data-v-ea7f900e><h3 data-v-ea7f900e>${ssrInterpolate(_ctx.$t("domain.community.event_title", "Voyah Owners Meetup: Geneva"))}</h3><p class="event-date" data-v-ea7f900e>August 15, 2024</p><button class="btn-rsvp" data-v-ea7f900e>RSVP Now</button></div></div></div><div class="load-more-wrapper" data-v-ea7f900e><button class="btn-outline" data-v-ea7f900e>${ssrInterpolate(_ctx.$t("domain.community.load_more", "Load More Journeys"))}</button></div></div></section></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lifestyle/CommunityPage.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CommunityPage = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ea7f900e"]]);
const _imports_0 = publicAssetsURL("/voyah-resources/utilities/1x1_placeholder.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LifestyleStorePage",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "custom-page lifestylestore-page" }, _attrs))} data-v-2e4375de>`);
      _push(ssrRenderComponent(PageHero, {
        eyebrow: _ctx.$t("domain.store.eyebrow", "Boutique Collection"),
        title: _ctx.$t("domain.store.title", "Voyah Lifestyle Store"),
        summary: _ctx.$t("domain.store.summary", "Curated accessories and lifestyle products embodying our design DNA."),
        image: "/voyah-resources/lifestyle/store_hero.jpg",
        align: "center",
        compact: true
      }, null, _parent));
      _push(`<div class="store-nav-wrapper" data-v-2e4375de><div class="container" data-v-2e4375de><ul class="store-nav" data-v-2e4375de><li class="active" data-v-2e4375de>${ssrInterpolate(_ctx.$t("domain.store.cat_all", "All Products"))}</li><li data-v-2e4375de>${ssrInterpolate(_ctx.$t("domain.store.cat_apparel", "Apparel"))}</li><li data-v-2e4375de>${ssrInterpolate(_ctx.$t("domain.store.cat_model", "Vehicle Models"))}</li><li data-v-2e4375de>${ssrInterpolate(_ctx.$t("domain.store.cat_access", "Car Accessories"))}</li></ul></div></div><section class="store-grid-section section-shell" data-v-2e4375de><div class="container" data-v-2e4375de><div class="products-grid" data-v-2e4375de><div class="product-card" data-v-2e4375de><div class="product-media" data-v-2e4375de><img${ssrRenderAttr("src", _imports_0)} alt="Voyah Thermos" class="placeholder-img" style="${ssrRenderStyle({ "background": "#f1f2f6" })}" data-v-2e4375de><div class="badge-new" data-v-2e4375de>New</div></div><div class="product-info" data-v-2e4375de><h3 data-v-2e4375de>${ssrInterpolate(_ctx.$t("domain.store.p1_title", "Titanium Smart Multi-Thermos"))}</h3><p class="price" data-v-2e4375de>\xA5299</p></div></div><div class="product-card" data-v-2e4375de><div class="product-media" data-v-2e4375de><img${ssrRenderAttr("src", _imports_0)} alt="1:18 Model" class="placeholder-img" style="${ssrRenderStyle({ "background": "#e8eaed" })}" data-v-2e4375de></div><div class="product-info" data-v-2e4375de><h3 data-v-2e4375de>${ssrInterpolate(_ctx.$t("domain.store.p2_title", "Voyah FREE 1:18 Diecast Model"))}</h3><p class="price" data-v-2e4375de>\xA5899</p></div></div><div class="product-card" data-v-2e4375de><div class="product-media" data-v-2e4375de><img${ssrRenderAttr("src", _imports_0)} alt="Apparel" class="placeholder-img" style="${ssrRenderStyle({ "background": "#f8f9fa" })}" data-v-2e4375de><div class="badge-sale" data-v-2e4375de>-20%</div></div><div class="product-info" data-v-2e4375de><h3 data-v-2e4375de>${ssrInterpolate(_ctx.$t("domain.store.p3_title", "Signature Kunpeng Edition Jacket"))}</h3><p class="price" data-v-2e4375de><span class="old-price" data-v-2e4375de>\xA51299</span> \xA5999</p></div></div><div class="product-card" data-v-2e4375de><div class="product-media" data-v-2e4375de><img${ssrRenderAttr("src", _imports_0)} alt="Accessories" class="placeholder-img" style="${ssrRenderStyle({ "background": "#edf2f7" })}" data-v-2e4375de></div><div class="product-info" data-v-2e4375de><h3 data-v-2e4375de>${ssrInterpolate(_ctx.$t("domain.store.p4_title", "Premium Nappa Leather Key Fob Cover"))}</h3><p class="price" data-v-2e4375de>\xA5150</p></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lifestyle/LifestyleStorePage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const LifestyleStorePage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2e4375de"]]);
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
    const qatarContent = computed(
      () => {
        var _a2;
        return modelPage.value ? (_a2 = modelPageContentBySlug[modelPage.value.slug]) != null ? _a2 : null : null;
      }
    );
    const infoPage = computed(() => {
      var _a2;
      return ((_a2 = page.value) == null ? void 0 : _a2.kind) === "info" ? page.value : null;
    });
    const newsArticleItem = computed(() => {
      var _a2;
      return findNewsItemByPage((_a2 = infoPage.value) == null ? void 0 : _a2.slug);
    });
    const legalPage = computed(() => {
      var _a2;
      return ((_a2 = page.value) == null ? void 0 : _a2.kind) === "legal" ? page.value : null;
    });
    const { textFor, locale } = useSiteContent();
    const leadFormBySlug = {
      "book-drive.html": "test-drive",
      "book-service.html": "service",
      "devis": "quote"
    };
    const leadPage = computed(() => {
      const info = infoPage.value;
      const formKey = info ? leadFormBySlug[info.slug] : void 0;
      return info && formKey ? { page: info, formKey } : null;
    });
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
    const seoTitleSource = () => {
      var _a2, _b2, _c, _d, _e;
      return (_e = (_c = (_a2 = modelPage.value) == null ? void 0 : _a2.title) != null ? _c : (_b2 = infoPage.value) == null ? void 0 : _b2.title) != null ? _e : (_d = legalPage.value) == null ? void 0 : _d.title;
    };
    const pageTitle = () => {
      const title = seoTitleSource();
      return title ? `Voyah | ${textFor(title)}` : "Voyah";
    };
    const pageDescription = () => {
      var _a2, _b2, _c, _d, _e;
      const description = (_e = (_c = (_a2 = modelPage.value) == null ? void 0 : _a2.description) != null ? _c : (_b2 = infoPage.value) == null ? void 0 : _b2.summary) != null ? _e : (_d = legalPage.value) == null ? void 0 : _d.summary;
      return description ? textFor(description) : "Voyah";
    };
    useSeoMeta({
      title: pageTitle,
      description: pageDescription,
      ogTitle: pageTitle,
      ogDescription: pageDescription,
      twitterTitle: pageTitle,
      twitterDescription: pageDescription
    });
    useBreadcrumbSeo(
      computed(() => {
        const title = seoTitleSource();
        return title ? textFor(title) : "Voyah";
      })
    );
    useProductSeo(modelPage);
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
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A;
      _push(`<div${ssrRenderAttrs(mergeProps({
        key: unref(locale).code
      }, _attrs))}>`);
      if (unref(servicePage)) {
        _push(ssrRenderComponent(ServicePage, null, null, _parent));
      } else if (unref(energyPage)) {
        _push(ssrRenderComponent(EnergyCenterPage, null, null, _parent));
      } else if (unref(legacyBusinessPage)) {
        _push(ssrRenderComponent(_sfc_main$E, {
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
        _push(ssrRenderComponent(_sfc_main$N, {
          page: unref(legacyDisclosurePage),
          "text-for": unref(textFor)
        }, null, _parent));
      } else if (((_a2 = unref(infoPage)) == null ? void 0 : _a2.slug) === "contact.html") {
        _push(ssrRenderComponent(ContactPage, null, null, _parent));
      } else if (unref(leadPage)) {
        _push(ssrRenderComponent(LeadPage, {
          page: unref(leadPage).page,
          "form-key": unref(leadPage).formKey
        }, null, _parent));
      } else if (((_b2 = unref(modelPage)) == null ? void 0 : _b2.slug) === "passion-L.html") {
        _push(ssrRenderComponent(PassionLPage, { model: unref(modelPage) }, null, _parent));
      } else if (((_c = unref(modelPage)) == null ? void 0 : _c.slug) === "titan.html") {
        _push(ssrRenderComponent(TitanPage, null, null, _parent));
      } else if (((_d = unref(modelPage)) == null ? void 0 : _d.slug) === "titan_blackedition.html") {
        _push(ssrRenderComponent(TitanBlackEditionPage, null, null, _parent));
      } else if (((_e = unref(modelPage)) == null ? void 0 : _e.slug) === "titan_X8.html") {
        _push(ssrRenderComponent(TitanX8Page, null, null, _parent));
      } else if (((_f = unref(modelPage)) == null ? void 0 : _f.slug) === "free+.html") {
        _push(ssrRenderComponent(FreePlusPage, null, null, _parent));
      } else if (unref(qatarContent) && unref(modelPage)) {
        _push(ssrRenderComponent(QatarModelPage, {
          slug: unref(modelPage).slug,
          content: unref(qatarContent)
        }, null, _parent));
      } else if (((_g = unref(modelPage)) == null ? void 0 : _g.slug) === "newCourage.html") {
        _push(ssrRenderComponent(NewCouragePage, null, null, _parent));
      } else if (((_h = unref(modelPage)) == null ? void 0 : _h.slug) === "dreamer-champion.html") {
        _push(ssrRenderComponent(DreamerChampionPage, null, null, _parent));
      } else if (((_i = unref(modelPage)) == null ? void 0 : _i.slug) === "newDreamer.html") {
        _push(ssrRenderComponent(NewDreamerPage, null, null, _parent));
      } else if (((_j = unref(modelPage)) == null ? void 0 : _j.slug) === "dreamriver.html") {
        _push(ssrRenderComponent(DreamerRiverPage, null, null, _parent));
      } else if (unref(modelPage)) {
        _push(ssrRenderComponent(ModelPage, { model: unref(modelPage) }, null, _parent));
      } else if (((_k = unref(infoPage)) == null ? void 0 : _k.slug) === "architecture.html") {
        _push(ssrRenderComponent(ArchitecturePage, { page: unref(infoPage) }, null, _parent));
      } else if (((_l = unref(infoPage)) == null ? void 0 : _l.slug) === "safety.html") {
        _push(ssrRenderComponent(SafetyPage, { page: unref(infoPage) }, null, _parent));
      } else if (((_m = unref(infoPage)) == null ? void 0 : _m.slug) === "smart-cockpit.html") {
        _push(ssrRenderComponent(SmartCockpitPage, { page: unref(infoPage) }, null, _parent));
      } else if (((_n = unref(infoPage)) == null ? void 0 : _n.slug) === "battery.html") {
        _push(ssrRenderComponent(BatteryPage, { page: unref(infoPage) }, null, _parent));
      } else if (((_o = unref(infoPage)) == null ? void 0 : _o.slug) === "ir.html") {
        _push(ssrRenderComponent(IRPage, { page: unref(infoPage) }, null, _parent));
      } else if (((_p = unref(infoPage)) == null ? void 0 : _p.slug) === "corporate.html") {
        _push(ssrRenderComponent(CorporatePage, { page: unref(infoPage) }, null, _parent));
      } else if (((_q = unref(infoPage)) == null ? void 0 : _q.slug) === "recruit-partners.html") {
        _push(ssrRenderComponent(RecruitPage, { page: unref(infoPage) }, null, _parent));
      } else if (((_r = unref(infoPage)) == null ? void 0 : _r.slug) === "joinus.html") {
        _push(ssrRenderComponent(JoinUsPage, { page: unref(infoPage) }, null, _parent));
      } else if (((_s = unref(infoPage)) == null ? void 0 : _s.slug) === "about.html") {
        _push(ssrRenderComponent(AboutPage, { page: unref(infoPage) }, null, _parent));
      } else if (unref(newsArticleItem)) {
        _push(ssrRenderComponent(NewsArticlePage, { item: unref(newsArticleItem) }, null, _parent));
      } else if (((_t = unref(infoPage)) == null ? void 0 : _t.slug) === "news.html") {
        _push(ssrRenderComponent(NewsPage, { page: unref(infoPage) }, null, _parent));
      } else if (((_u = unref(infoPage)) == null ? void 0 : _u.slug) === "brand-philosophy.html") {
        _push(ssrRenderComponent(PhilosophyPage, { page: unref(infoPage) }, null, _parent));
      } else if (((_v = unref(infoPage)) == null ? void 0 : _v.slug) === "kunpeng-design.html") {
        _push(ssrRenderComponent(KunpengPage, { page: unref(infoPage) }, null, _parent));
      } else if (((_w = unref(infoPage)) == null ? void 0 : _w.slug) === "faq.html") {
        _push(ssrRenderComponent(FaqPage, { page: unref(infoPage) }, null, _parent));
      } else if (((_x = unref(infoPage)) == null ? void 0 : _x.slug) === "warranty.html") {
        _push(ssrRenderComponent(WarrantyPage, { page: unref(infoPage) }, null, _parent));
      } else if (((_y = unref(infoPage)) == null ? void 0 : _y.slug) === "app-download.html") {
        _push(ssrRenderComponent(AppPage, { page: unref(infoPage) }, null, _parent));
      } else if (((_z = unref(infoPage)) == null ? void 0 : _z.slug) === "community.html") {
        _push(ssrRenderComponent(CommunityPage, { page: unref(infoPage) }, null, _parent));
      } else if (((_A = unref(infoPage)) == null ? void 0 : _A.slug) === "lifestyle-store.html") {
        _push(ssrRenderComponent(LifestyleStorePage, { page: unref(infoPage) }, null, _parent));
      } else if (unref(infoPage) && !unref(legacyBusinessPage) && !unref(legacyDisclosurePage) && !unref(storePage) && !unref(servicePage) && !unref(energyPage)) {
        _push(ssrRenderComponent(InfoPage, { page: unref(infoPage) }, null, _parent));
      } else if (unref(legalPage)) {
        _push(ssrRenderComponent(LegalPage, { page: unref(legalPage) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
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
//# sourceMappingURL=_slug_-DVMoJuUT.mjs.map
