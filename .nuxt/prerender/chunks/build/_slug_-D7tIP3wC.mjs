import { defineComponent, computed, unref, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, ref, reactive, watch, createSlots, useSSRContext } from 'file://E:/voyah/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrRenderSlot } from 'file://E:/voyah/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$1$1, u as useSectionReveal, a as _sfc_main$z } from './MetricGrid-DoIzS4Ay.mjs';
import { u as useRoute, r as resolvePage, _ as _export_sfc } from './server.mjs';
import { u as useSiteContent, b as useSeoMeta, a as useHead } from './useSiteContent-DsX9M3mb.mjs';
import { _ as _sfc_main$y } from './LegacyDisclosurePage-RAl89wFh.mjs';
import { E as EnergyCenterPage } from './EnergyCenterPage-DM1LCk-_.mjs';
import { _ as _sfc_main$x } from './ServiceCenterPage-Bp9r93bc.mjs';
import { S as StoreCenterPage } from './StoreCenterPage-DhycvW5P.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
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

const _sfc_main$w = /* @__PURE__ */ defineComponent({
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
      }, _attrs))} data-v-a4c5d28c><div class="page-hero-media" data-v-a4c5d28c>`);
      if (__props.video) {
        _push(`<video${ssrRenderAttr("poster", __props.image)}${ssrRenderAttr("aria-label", __props.title)} autoplay muted loop playsinline preload="metadata" data-v-a4c5d28c><source${ssrRenderAttr("src", __props.video)} type="video/mp4" data-v-a4c5d28c></video>`);
      } else {
        _push(`<img${ssrRenderAttr("src", __props.image)}${ssrRenderAttr("alt", __props.title)} data-v-a4c5d28c>`);
      }
      _push(`</div><div class="page-hero-overlay" data-v-a4c5d28c></div><div class="page-hero-gradient" data-v-a4c5d28c></div><div class="page-hero-content" data-v-a4c5d28c><div class="container" data-v-a4c5d28c><div class="page-hero-shell" data-v-a4c5d28c><div class="page-hero-copy" data-v-a4c5d28c>`);
      if (__props.logo) {
        _push(`<img${ssrRenderAttr("src", __props.logo)}${ssrRenderAttr("alt", __props.title)} class="page-logo" data-v-a4c5d28c>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="eyebrow" data-v-a4c5d28c>${ssrInterpolate(__props.eyebrow)}</p><h1 class="page-title" data-v-a4c5d28c>${ssrInterpolate(__props.title)}</h1><p class="page-summary" data-v-a4c5d28c>${ssrInterpolate(__props.summary)}</p>`);
      if (_ctx.$slots.actions) {
        _push(`<div class="button-row page-hero-actions" data-v-a4c5d28c>`);
        ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.$slots.meta) {
        _push(`<aside class="page-hero-meta" data-v-a4c5d28c>`);
        ssrRenderSlot(_ctx.$slots, "meta", {}, null, _push, _parent);
        _push(`</aside>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></section>`);
    };
  }
});
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/PageHero.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const PageHero = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-a4c5d28c"]]);
const _sfc_main$v = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/info/InfoDocumentRows.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const _sfc_main$u = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/info/InfoEditorialSections.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const _sfc_main$t = /* @__PURE__ */ defineComponent({
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
        _push(ssrRenderComponent(_sfc_main$z, { metrics: unref(displayMetrics) }, null, _parent));
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
        _push(ssrRenderComponent(_sfc_main$u, {
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
        _push(ssrRenderComponent(_sfc_main$u, {
          variant: "service",
          blocks: __props.page.blocks,
          "section-links": unref(sectionLinks),
          "chapter-label": chapterLabel,
          "text-for": unref(textFor)
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(isEnergyRoute)) {
        _push(`<div data-v-f1dd9efc>`);
        _push(ssrRenderComponent(_sfc_main$u, {
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
        _push(ssrRenderComponent(_sfc_main$v, {
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
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/InfoPage.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const InfoPage = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-f1dd9efc"]]);
const _sfc_main$s = /* @__PURE__ */ defineComponent({
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
      }, _attrs))} data-v-78ef2bf5>`);
      _push(ssrRenderComponent(PageHero, {
        eyebrow: unref(textFor)(__props.page.eyebrow),
        title: unref(textFor)(__props.page.title),
        summary: unref(textFor)(__props.page.summary),
        image: "/static/assets/world-fec50d02.jpg",
        align: "start",
        compact: ""
      }, null, _parent));
      _push(`<section class="legal-anchor-bar" data-v-78ef2bf5><div class="container legal-anchor-bar__inner" data-v-78ef2bf5><!--[-->`);
      ssrRenderList(__props.page.sections, (section, index) => {
        _push(`<a${ssrRenderAttr("href", `#legal-${index + 1}`)} class="${ssrRenderClass(["legal-anchor", { active: unref(activeSection) === `legal-${index + 1}` }])}" data-v-78ef2bf5>${ssrInterpolate(unref(textFor)(section.title))}</a>`);
      });
      _push(`<!--]--></div></section><section class="section-shell legal-page-shell" data-v-78ef2bf5><div class="container legal-stack" data-v-78ef2bf5><!--[-->`);
      ssrRenderList(__props.page.sections, (section, index) => {
        _push(`<article${ssrRenderAttr("id", `legal-${index + 1}`)} class="legal-card" data-reveal data-v-78ef2bf5><div class="legal-card__index" data-v-78ef2bf5>0${ssrInterpolate(index + 1)}</div><div class="legal-card__body" data-v-78ef2bf5><h2 data-v-78ef2bf5>${ssrInterpolate(unref(textFor)(section.title))}</h2><!--[-->`);
        ssrRenderList(section.paragraphs, (paragraph) => {
          _push(`<p data-v-78ef2bf5>${ssrInterpolate(unref(textFor)(paragraph))}</p>`);
        });
        _push(`<!--]--></div></article>`);
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/LegalPage.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const LegalPage = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-78ef2bf5"]]);
const _sfc_main$r = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/legacy/LegacyBusinessPage.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const _sfc_main$q = /* @__PURE__ */ defineComponent({
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
      }, _attrs))} data-v-f0eee6fc><div class="container model-chapter-nav-inner" data-v-f0eee6fc><!--[-->`);
      ssrRenderList(__props.sections, (section) => {
        _push(`<a${ssrRenderAttr("href", `#${section.id}`)} class="${ssrRenderClass(["model-chapter-link", { active: unref(activeSection) === section.id }])}" data-v-f0eee6fc>${ssrInterpolate(section.label)}</a>`);
      });
      _push(`<!--]--></div></nav>`);
    };
  }
});
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/model/ModelChapterNav.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const ModelChapterNav = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-f0eee6fc"]]);
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = (() => {
  console.error(intervalError);
});
const _sfc_main$p = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/model/ModelMediaSection.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const ModelMediaSection = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-5bdc6a1c"]]);
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
  "newDreamer26.html": [
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
  "passion.html": [
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
  "free.html": [
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
  "courage.html": [
    {
      id: "chapter-1",
      title: t("Original aesthetics", "Esth\xE9tique originale", "\u062C\u0645\u0627\u0644\u064A\u0629 \u0623\u0635\u0644\u064A\u0629"),
      summary: t(
        "Courage frames its identity through a cleaner electric-SUV silhouette, welcoming front graphics, and a warmer urban presence.",
        "Courage affirme son identit\xE9 par une silhouette de SUV \xE9lectrique pure, une face avant accueillante et une pr\xE9sence urbaine chaleureuse.",
        "\u062A\u0631\u0633\u0645 Courage \u0647\u0648\u064A\u062A\u0647\u0627 \u0639\u0628\u0631 \u0647\u064A\u0626\u0629 SUV \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0623\u0646\u0642\u064A\u0629 \u0648\u0648\u0627\u062C\u0647\u0629 \u0623\u0645\u0627\u0645\u064A\u0629 \u0645\u0631\u062D\u0628\u0629 \u0648\u062D\u0636\u0648\u0631 \u062D\u0636\u0631\u064A \u062F\u0627\u0641\u0626."
      ),
      images: carGallery("courage", ["1920/h37_pc01_0001.jpg", "1920/h37_pc02_0001.jpg", "1920/h37_pc03_0001.jpg"])
    },
    {
      id: "chapter-2",
      title: t("Pure electric efficiency", "Efficience \xE9lectrique pure", "\u0643\u0641\u0627\u0621\u0629 \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0643\u0627\u0645\u0644\u0629"),
      summary: t(
        "The efficiency story combines long range, high power output, and a comfort-first electric chassis into one balanced urban SUV chapter.",
        "Le r\xE9cit de l\u2019efficience combine grande autonomie, puissance \xE9lev\xE9e et un ch\xE2ssis \xE9lectrique orient\xE9 confort dans un chapitre SUV urbain \xE9quilibr\xE9.",
        "\u064A\u062C\u0645\u0639 \u0633\u0631\u062F \u0627\u0644\u0643\u0641\u0627\u0621\u0629 \u0628\u064A\u0646 \u0627\u0644\u0645\u062F\u0649 \u0627\u0644\u0637\u0648\u064A\u0644 \u0648\u0627\u0644\u0642\u0648\u0629 \u0627\u0644\u0639\u0627\u0644\u064A\u0629 \u0648\u0647\u064A\u0643\u0644 \u0643\u0647\u0631\u0628\u0627\u0626\u064A \u064A\u0631\u0643\u0632 \u0639\u0644\u0649 \u0627\u0644\u0631\u0627\u062D\u0629 \u0641\u064A \u0641\u0635\u0644 SUV \u062D\u0636\u0631\u064A \u0645\u062A\u0648\u0627\u0632\u0646."
      ),
      images: carGallery("courage", ["1920/h37_pc04_0001.jpg", "1920/h37_pc06_0001.jpg"]),
      videos: ["/voyah-resources/images/car/h37/video_04.mp4"]
    },
    {
      id: "chapter-3",
      title: t("Family comfort cockpit", "Cockpit confort familial", "\u0645\u0642\u0635\u0648\u0631\u0629 \u0631\u0627\u062D\u0629 \u0639\u0627\u0626\u0644\u064A\u0629"),
      summary: t(
        "The cabin focuses on digital interaction, shared family space, and a calmer premium mood built for everyday urban life.",
        "L\u2019habitacle se concentre sur l\u2019interaction num\xE9rique, l\u2019espace familial partag\xE9 et une ambiance premium calme pens\xE9e pour la ville.",
        "\u062A\u0631\u0643\u0632 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0639\u0644\u0649 \u0627\u0644\u062A\u0641\u0627\u0639\u0644 \u0627\u0644\u0631\u0642\u0645\u064A \u0648\u0627\u0644\u0645\u0633\u0627\u062D\u0629 \u0627\u0644\u0639\u0627\u0626\u0644\u064A\u0629 \u0627\u0644\u0645\u0634\u062A\u0631\u0643\u0629 \u0648\u0623\u062C\u0648\u0627\u0621 \u0641\u0627\u062E\u0631\u0629 \u0647\u0627\u062F\u0626\u0629 \u0645\u0647\u064A\u0623\u0629 \u0644\u0644\u062D\u064A\u0627\u0629 \u0627\u0644\u0645\u062F\u0646\u064A\u0629 \u0627\u0644\u064A\u0648\u0645\u064A\u0629."
      ),
      images: carGallery("courage", ["1920/h37_pc10_0001.jpg", "1920/h37_pc14_0001.jpg", "1920/h37_pc17_0001.jpg"])
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
const _sfc_main$o = /* @__PURE__ */ defineComponent({
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
      }, _attrs))} data-v-f8e95a35>`);
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
            _push2(`<aside class="model-hero-meta" data-v-f8e95a35${_scopeId}><p class="model-hero-price" data-v-f8e95a35${_scopeId}>${ssrInterpolate(unref(textFor)(__props.model.price))}</p><div class="model-hero-features" data-v-f8e95a35${_scopeId}><!--[-->`);
            ssrRenderList(__props.model.features.slice(0, 3), (feature) => {
              _push2(`<span data-v-f8e95a35${_scopeId}>${ssrInterpolate(unref(textFor)(feature.title))}</span>`);
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
      _push(`<div data-v-f8e95a35><!--[-->`);
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
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/ModelPage.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const ModelPage = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-f8e95a35"]]);
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "DreamerChapterNav",
  __ssrInlineRender: true,
  setup(__props) {
    const chapters = [
      { id: "chapter-1" },
      { id: "chapter-2" },
      { id: "chapter-3" },
      { id: "chapter-4" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "dreamer-rail" }, _attrs))} data-v-2e6a0f65><div class="container" data-v-2e6a0f65><ul class="dreamer-rail-list" data-v-2e6a0f65><!--[-->`);
      ssrRenderList(chapters, (chapter, i) => {
        _push(`<li class="dreamer-rail-item" data-v-2e6a0f65><button class="dreamer-rail-button" data-v-2e6a0f65><span class="dreamer-rail-number" data-v-2e6a0f65>0${ssrInterpolate(i + 1)}</span><span class="dreamer-rail-label" data-v-2e6a0f65>${ssrInterpolate(_ctx.$t(`pages.dreamer.sections.chapter_${i + 1}.title`))}</span></button></li>`);
      });
      _push(`<!--]--></ul></div></nav>`);
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vehicles/dreamer/DreamerChapterNav.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const DreamerChapterNav = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-2e6a0f65"]]);
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "DreamerChapter",
  __ssrInlineRender: true,
  props: {
    index: {},
    chapter: {}
  },
  setup(__props) {
    const chapterRef = ref(null);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "dreamer-chapter",
        id: __props.chapter.id,
        ref_key: "chapterRef",
        ref: chapterRef
      }, _attrs))} data-v-92e0167f><div class="dreamer-chapter-sticky" data-v-92e0167f><div class="dreamer-chapter-media" data-v-92e0167f>`);
      if (__props.chapter.videos && __props.chapter.videos.length > 0) {
        _push(`<video class="dreamer-media-item"${ssrRenderAttr("src", __props.chapter.videos[0])} autoplay muted loop playsinline data-v-92e0167f></video>`);
      } else {
        _push(`<img class="dreamer-media-item"${ssrRenderAttr("src", __props.chapter.images[0])}${ssrRenderAttr("alt", _ctx.$t(`pages.dreamer.sections.${__props.chapter.id.replace("-", "_")}.title`))} data-v-92e0167f>`);
      }
      _push(`</div><div class="dreamer-chapter-overlay" data-v-92e0167f></div><div class="dreamer-chapter-content" data-v-92e0167f><div class="container" data-v-92e0167f><div class="dreamer-chapter-text" data-v-92e0167f>`);
      if (__props.chapter.kicker) {
        _push(`<p class="dreamer-kicker" data-v-92e0167f>${ssrInterpolate(__props.chapter.kicker)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.chapter.title) {
        _push(`<h2 data-v-92e0167f>${ssrInterpolate(__props.chapter.title)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.chapter.summary) {
        _push(`<p data-v-92e0167f>${ssrInterpolate(__props.chapter.summary)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vehicles/dreamer/DreamerChapter.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const DreamerChapter = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-92e0167f"]]);
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "CinematicVideoHero",
  __ssrInlineRender: true,
  props: {
    videoSrc: {},
    fallbackImage: {},
    title: {},
    subtitle: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "video-hero" }, _attrs))} data-v-36b79bfd><div class="video-wrapper" data-v-36b79bfd><video autoplay muted loop playsinline class="bg-video" data-v-36b79bfd><source${ssrRenderAttr("src", __props.videoSrc)} type="video/mp4" data-v-36b79bfd><img${ssrRenderAttr("src", __props.fallbackImage)} alt="Hero Fallback" class="fallback-img" data-v-36b79bfd></video><div class="video-overlay" data-v-36b79bfd><div class="hero-content" data-v-36b79bfd><h1 class="fade-up-1" data-v-36b79bfd>${ssrInterpolate(__props.title)}</h1>`);
      if (__props.subtitle) {
        _push(`<p class="fade-up-2" data-v-36b79bfd>${ssrInterpolate(__props.subtitle)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vehicles/interactive/CinematicVideoHero.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const CinematicVideoHero = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-36b79bfd"]]);
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "VehicleColorPicker",
  __ssrInlineRender: true,
  props: {
    title: {},
    colors: {}
  },
  setup(__props) {
    const props = __props;
    const activeColor = ref(props.colors[0]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "color-picker-module py-12 bg-white" }, _attrs))} data-v-87b7ae37><div class="color-picker-container text-center" data-v-87b7ae37><h3 class="picker-title" data-v-87b7ae37>${ssrInterpolate(__props.title || "Explore Exterior Colors")}</h3><div class="vehicle-frame" data-v-87b7ae37><img${ssrRenderAttr("src", activeColor.value.image)}${ssrRenderAttr("alt", activeColor.value.name)} class="vehicle-image" data-v-87b7ae37></div><div class="swatch-container" data-v-87b7ae37><!--[-->`);
      ssrRenderList(__props.colors, (color) => {
        _push(`<button class="${ssrRenderClass([{ active: activeColor.value.id === color.id }, "swatch-btn"])}"${ssrRenderAttr("aria-label", color.name)} data-v-87b7ae37><div class="swatch-fill" style="${ssrRenderStyle({ backgroundColor: color.hex })}" data-v-87b7ae37></div></button>`);
      });
      _push(`<!--]--></div><div class="swatch-label" data-v-87b7ae37><span class="label-name" data-v-87b7ae37>${ssrInterpolate(activeColor.value.name)}</span></div></div></div>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vehicles/interactive/VehicleColorPicker.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const VehicleColorPicker = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-87b7ae37"]]);
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "FeatureCarousel",
  __ssrInlineRender: true,
  props: {
    title: {},
    features: {}
  },
  setup(__props) {
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "feature-carousel-module py-12" }, _attrs))} data-v-a35b4344><div class="container" data-v-a35b4344>`);
      if (__props.title) {
        _push(`<h3 class="carousel-title" data-v-a35b4344>${ssrInterpolate(__props.title)}</h3>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="carousel-wrapper" data-v-a35b4344><div class="carousel-track" data-v-a35b4344><!--[-->`);
      ssrRenderList(__props.features, (feature, idx) => {
        _push(`<div class="carousel-card" data-v-a35b4344><div class="card-media" style="${ssrRenderStyle({ backgroundImage: `url(${feature.image})` })}" data-v-a35b4344></div><div class="card-content" data-v-a35b4344><h4 data-v-a35b4344>${ssrInterpolate(feature.title)}</h4><p data-v-a35b4344>${ssrInterpolate(feature.description)}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="carousel-controls" data-v-a35b4344><button class="nav-btn prev" aria-label="Previous" data-v-a35b4344><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-a35b4344><path d="M15 18l-6-6 6-6" data-v-a35b4344></path></svg></button><button class="nav-btn next" aria-label="Next" data-v-a35b4344><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-a35b4344><path d="M9 18l6-6-6-6" data-v-a35b4344></path></svg></button></div></div></div></div>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vehicles/interactive/FeatureCarousel.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const FeatureCarousel = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-a35b4344"]]);
const prefImg = "/voyah-resources/images/car/dreamer";
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "DreamerPage",
  __ssrInlineRender: true,
  props: {
    model: {}
  },
  setup(__props) {
    const props = __props;
    const { textFor } = useSiteContent();
    computed(() => getExpandedModelGallery(props.model.slug, props.model.gallery));
    const authoredStorySections = computed(() => getModelStorySections(props.model.slug));
    const renderedSections = computed(() => {
      if (!authoredStorySections.value) return [];
      return authoredStorySections.value.map((section) => ({
        id: section.id,
        kicker: section.kicker ? textFor(section.kicker) : void 0,
        title: textFor(section.title),
        summary: textFor(section.summary),
        images: section.images,
        videos: section.videos
      }));
    });
    const dreamerColors = [
      { id: "c1", name: "Ceramic White", hex: "#f8f9fa", image: `${prefImg}/kv_1920.jpg` },
      { id: "c2", name: "Phantom Black", hex: "#0f0f11", image: `${prefImg}/bg_swiper_4_1.jpg` },
      { id: "c3", name: "Skyline Blue", hex: "#2A3C53", image: `${prefImg}/bg_swiper_5_1.jpg` }
    ];
    const dreamerFeatures = [
      { title: "Zero-Gravity Seats", description: "Nappa leather massaging captain chairs.", image: `${prefImg}/bg_swiper_10_1.jpg` },
      { title: "Smart Triple Screen", description: "Triple 12.3-inch continuous matrix.", image: `${prefImg}/bg_swiper_11_1.jpg` },
      { title: "Crystal Shifter", description: "Hand-crafted crystal drive-selector.", image: `${prefImg}/bg_swiper_12_1.jpg` },
      { title: "Dynaudio Acoustics", description: "14-speaker high-fidelity soundscape.", image: `${prefImg}/bg_swiper_14_1.jpg` }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dreamer-page" }, _attrs))} data-v-e11ac8ef>`);
      _push(ssrRenderComponent(CinematicVideoHero, {
        videoSrc: "/voyah-resources/media/dreamer_hero_compressed.mp4",
        fallbackImage: "/voyah-resources/images/car/dreamer/kv_1920.jpg",
        title: "The New Dreamer",
        subtitle: "Re-defining Luxury MPLs"
      }, null, _parent));
      _push(ssrRenderComponent(DreamerChapterNav, null, null, _parent));
      _push(ssrRenderComponent(VehicleColorPicker, {
        title: "Configure Your Dreamer",
        colors: dreamerColors
      }, null, _parent));
      if (renderedSections.value[0]) {
        _push(ssrRenderComponent(DreamerChapter, {
          key: renderedSections.value[0].id,
          index: 0,
          chapter: renderedSections.value[0]
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(FeatureCarousel, {
        title: "First-Class Cabin Design",
        features: dreamerFeatures
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(renderedSections.value.slice(1), (section, index) => {
        _push(ssrRenderComponent(DreamerChapter, {
          key: section.id,
          index: index + 1,
          chapter: section
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vehicles/dreamer/DreamerPage.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const DreamerPage = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-e11ac8ef"]]);
const _imports_0$6 = publicAssetsURL("/voyah-resources/tech/essa_chassis.png");
const _sfc_main$h = /* @__PURE__ */ defineComponent({
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tech-page tech-architecture" }, _attrs))} data-v-b6ba2e78><section class="tech-hero" data-v-b6ba2e78><div class="tech-hero-background" data-v-b6ba2e78><img${ssrRenderAttr("src", __props.page.heroImage)} alt="Voyah ESSA Architecture" class="tech-hero-image" data-v-b6ba2e78><div class="tech-hero-overlay" data-v-b6ba2e78></div></div><div class="container tech-hero-content" data-v-b6ba2e78><h1 class="page-title" data-v-b6ba2e78>${ssrInterpolate(unref(textFor)(__props.page.title))}</h1><p class="page-summary" data-v-b6ba2e78>${ssrInterpolate(unref(textFor)(__props.page.summary))}</p></div></section><section class="tech-diagram-section section-shell" data-v-b6ba2e78><div class="container" data-v-b6ba2e78><div class="tech-diagram-header" data-v-b6ba2e78><h2 class="section-title" data-v-b6ba2e78>${ssrInterpolate(_ctx.$t("domain.tech.architecture.essa_title", "Native Smart Electric Architecture"))}</h2><p class="section-copy" data-v-b6ba2e78>${ssrInterpolate(_ctx.$t("domain.tech.architecture.essa_body", "The 800V platform empowers intelligent control and extreme safety."))}</p></div><div class="tech-diagram-container" data-v-b6ba2e78><div class="tech-diagram-stage" data-v-b6ba2e78><div class="diagram-chassis" data-v-b6ba2e78><img${ssrRenderAttr("src", _imports_0$6)} alt="Chassis" class="chassis-img" data-v-b6ba2e78></div><div class="diagram-overlays" data-v-b6ba2e78><div class="data-point point-1" data-v-b6ba2e78><span class="point-dot" data-v-b6ba2e78></span><span class="point-label" data-v-b6ba2e78>${ssrInterpolate(_ctx.$t("domain.tech.architecture.point1", "Intelligent Power Distribution"))}</span></div><div class="data-point point-2" data-v-b6ba2e78><span class="point-dot" data-v-b6ba2e78></span><span class="point-label" data-v-b6ba2e78>${ssrInterpolate(_ctx.$t("domain.tech.architecture.point2", "Integrated Battery Shield"))}</span></div><div class="data-point point-3" data-v-b6ba2e78><span class="point-dot" data-v-b6ba2e78></span><span class="point-label" data-v-b6ba2e78>${ssrInterpolate(_ctx.$t("domain.tech.architecture.point3", "Air Suspension Dynamics"))}</span></div></div></div></div></div></section><section class="tech-horizontal-section" data-v-b6ba2e78><div class="horizontal-track" data-v-b6ba2e78><!--[-->`);
      ssrRenderList(3, (i) => {
        _push(`<div class="horizontal-item" data-v-b6ba2e78><div class="horizontal-card" data-v-b6ba2e78><div class="horizontal-card-media" data-v-b6ba2e78><img${ssrRenderAttr("src", `/voyah-resources/tech/architecture_feature_${i}.jpg`)} alt="Feature" data-v-b6ba2e78></div><div class="horizontal-card-body" data-v-b6ba2e78><h3 data-v-b6ba2e78>${ssrInterpolate(_ctx.$t(`domain.tech.architecture.feature_${i}_title`, `Advanced Feature ${i}`))}</h3><p data-v-b6ba2e78>${ssrInterpolate(_ctx.$t(`domain.tech.architecture.feature_${i}_desc`, `Description for advanced feature ${i}.`))}</p></div></div></div>`);
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tech/ArchitecturePage.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const ArchitecturePage = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-b6ba2e78"]]);
const _imports_1$1 = publicAssetsURL("/voyah-resources/tech/safety_body_structure.png");
const _imports_0$5 = publicAssetsURL("/voyah-resources/tech/safety_battery_shield.png");
const _sfc_main$g = /* @__PURE__ */ defineComponent({
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
      _push(`<div class="tech-hero-overlay" data-v-92925a3d></div></div><div class="container tech-hero-content" data-v-92925a3d><h1 class="page-title" data-v-92925a3d>${ssrInterpolate(unref(textFor)(__props.page.title))}</h1><p class="page-summary" data-v-92925a3d>${ssrInterpolate(unref(textFor)(__props.page.summary))}</p></div></section><section class="safety-dark-section section-shell" data-v-92925a3d><div class="container" data-v-92925a3d><div class="safety-grid pattern-checkerboard" data-v-92925a3d><div class="safety-content" data-v-92925a3d><h2 class="section-title" data-v-92925a3d>${ssrInterpolate(_ctx.$t("domain.tech.safety.structure_title", "Fortress Body Structure"))}</h2><p class="section-copy" data-v-92925a3d>${ssrInterpolate(_ctx.$t("domain.tech.safety.structure_body", "Beyond five-star safety. The Voyah structural body utilizes 2000MPa thermo-formed steel in critical intrusion zones, creating an impregnable survival space for all occupants."))}</p><ul class="safety-metric-list" data-v-92925a3d><li data-v-92925a3d><span class="metric-value" data-v-92925a3d>2000<small data-v-92925a3d>MPa</small></span><span class="metric-label" data-v-92925a3d>${ssrInterpolate(_ctx.$t("domain.tech.safety.steel", "Hot-formed steel"))}</span></li><li data-v-92925a3d><span class="metric-value" data-v-92925a3d>68<small data-v-92925a3d>%</small></span><span class="metric-label" data-v-92925a3d>${ssrInterpolate(_ctx.$t("domain.tech.safety.hss", "High-strength steel"))}</span></li></ul></div><div class="safety-media" data-v-92925a3d><img${ssrRenderAttr("src", _imports_1$1)} alt="Body Structure" class="x-ray-img" data-v-92925a3d></div></div></div></section><section class="safety-dark-section section-shell" data-v-92925a3d><div class="container" data-v-92925a3d><div class="safety-grid reverse" data-v-92925a3d><div class="safety-content" data-v-92925a3d><h2 class="section-title" data-v-92925a3d>${ssrInterpolate(_ctx.$t("domain.tech.safety.battery_title", "Amber Battery Shield"))}</h2><p class="section-copy" data-v-92925a3d>${ssrInterpolate(_ctx.$t("domain.tech.safety.battery_body", "Active and passive defense mechanisms intercept thermal runaway. Five layers of physical protection meet aerospace-grade heat resistance."))}</p><ul class="safety-metric-list" data-v-92925a3d><li data-v-92925a3d><span class="metric-value" data-v-92925a3d>1000<small data-v-92925a3d>\xB0C</small></span><span class="metric-label" data-v-92925a3d>${ssrInterpolate(_ctx.$t("domain.tech.safety.temp", "Heat resistance"))}</span></li><li data-v-92925a3d><span class="metric-value" data-v-92925a3d>IP68</span><span class="metric-label" data-v-92925a3d>${ssrInterpolate(_ctx.$t("domain.tech.safety.water", "Waterproof rating"))}</span></li></ul></div><div class="safety-media" data-v-92925a3d><img${ssrRenderAttr("src", _imports_0$5)} alt="Battery Shield" class="x-ray-img" data-v-92925a3d></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tech/SafetyPage.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const SafetyPage = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-92925a3d"]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tech/SmartCockpitPage.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const SmartCockpitPage = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-147a7e68"]]);
const _imports_0$4 = publicAssetsURL("/voyah-resources/tech/battery_layer_base.png");
const _imports_1 = publicAssetsURL("/voyah-resources/tech/battery_layer_cells.png");
const _imports_2$1 = publicAssetsURL("/voyah-resources/tech/battery_layer_cooling.png");
const _imports_3$1 = publicAssetsURL("/voyah-resources/tech/battery_layer_cover.png");
const _sfc_main$e = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tech/BatteryPage.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const BatteryPage = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-138739eb"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/corporate/IRPage.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const IRPage = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-8704be51"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/corporate/CorporatePage.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const CorporatePage = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-3c3ddcf9"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/corporate/RecruitPage.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const RecruitPage = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-a71ed982"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/corporate/JoinUsPage.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const JoinUsPage = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-ec2c0dbe"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "AboutPage",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    ref(null);
    ref(null);
    const counts = reactive([0, 0, 0]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "custom-page about-page" }, _attrs))} data-v-e72c7e68>`);
      _push(ssrRenderComponent(PageHero, {
        eyebrow: _ctx.$t("domain.about.eyebrow", "Company Profile"),
        title: _ctx.$t("domain.about.title", "About Voyah"),
        summary: _ctx.$t("domain.about.summary", "The premium new energy brand from Dongfeng Motor Corporation."),
        image: "/voyah-resources/brand/about_hero.jpg",
        align: "center",
        compact: false
      }, null, _parent));
      _push(`<section class="about-statement section-shell" data-v-e72c7e68><div class="container text-center" data-v-e72c7e68><h2 class="fade-up" data-v-e72c7e68>${ssrInterpolate(_ctx.$t("domain.about.statement", "Voyah integrates 54 years of car-building expertise from Dongfeng with extensive global supply chain resources, standing at the forefront of China's new energy vehicle transition."))}</h2></div></section><section class="about-metrics section-shell text-bg-dark" data-v-e72c7e68><div class="container" data-v-e72c7e68><div class="metrics-grid" data-v-e72c7e68><div class="metric-item" data-v-e72c7e68><div class="metric-number" data-v-e72c7e68><span class="count" data-v-e72c7e68>${ssrInterpolate(counts[0])}</span>+ </div><div class="metric-label" data-v-e72c7e68>${ssrInterpolate(_ctx.$t("domain.about.m1_label", "Patents Filed"))}</div></div><div class="metric-item" data-v-e72c7e68><div class="metric-number" data-v-e72c7e68><span class="count" data-v-e72c7e68>${ssrInterpolate(counts[1])}</span></div><div class="metric-label" data-v-e72c7e68>${ssrInterpolate(_ctx.$t("domain.about.m2_label", "Years of Heritage"))}</div></div><div class="metric-item" data-v-e72c7e68><div class="metric-number" data-v-e72c7e68><span class="count" data-v-e72c7e68>${ssrInterpolate(counts[2])}</span>k+ </div><div class="metric-label" data-v-e72c7e68>${ssrInterpolate(_ctx.$t("domain.about.m3_label", "Global Deliveries"))}</div></div></div></div></section><section class="footprint-section section-shell" data-v-e72c7e68><div class="container" data-v-e72c7e68><div class="section-title-center" data-v-e72c7e68><h2 data-v-e72c7e68>${ssrInterpolate(_ctx.$t("domain.about.footprint_title", "Global Footprint"))}</h2><p data-v-e72c7e68>${ssrInterpolate(_ctx.$t("domain.about.footprint_desc", "Strategic R&D centers spread across multiple continents, driving innovation at the speed of light."))}</p></div><div class="map-container" data-v-e72c7e68><img${ssrRenderAttr("src", _imports_0$5)} alt="Global Operations Map" class="map-image" data-v-e72c7e68><div class="map-pin pin-wuhan" data-v-e72c7e68><div class="pin-dot" data-v-e72c7e68></div><span class="pin-label" data-v-e72c7e68>Wuhan (Global HQ)</span></div><div class="pin-turin map-pin" data-v-e72c7e68><div class="pin-dot" data-v-e72c7e68></div><span class="pin-label" data-v-e72c7e68>Turin (Design Hub)</span></div><div class="pin-oslo map-pin" data-v-e72c7e68><div class="pin-dot" data-v-e72c7e68></div><span class="pin-label" data-v-e72c7e68>Oslo (EU Operations)</span></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/brand/AboutPage.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const AboutPage = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-e72c7e68"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "NewsPage",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "custom-page newspage" }, _attrs))} data-v-ffd9a497>`);
      _push(ssrRenderComponent(PageHero, {
        eyebrow: _ctx.$t("domain.newspage.eyebrow", "Latest Updates"),
        title: _ctx.$t("domain.newspage.title", "Voyah Newsroom"),
        summary: _ctx.$t("domain.newspage.summary", "Press releases, technological developments, and global expansion news."),
        image: "/voyah-resources/brand/news_hero.jpg",
        align: "start",
        compact: true
      }, null, _parent));
      _push(`<div class="news-filters" data-v-ffd9a497><div class="container" data-v-ffd9a497><ul data-v-ffd9a497><li class="active" data-v-ffd9a497>${ssrInterpolate(_ctx.$t("domain.newspage.filter_all", "All News"))}</li><li data-v-ffd9a497>${ssrInterpolate(_ctx.$t("domain.newspage.filter_corp", "Corporate"))}</li><li data-v-ffd9a497>${ssrInterpolate(_ctx.$t("domain.newspage.filter_prod", "Product"))}</li><li data-v-ffd9a497>${ssrInterpolate(_ctx.$t("domain.newspage.filter_tech", "Technology"))}</li></ul></div></div><section class="news-list-section section-shell" data-v-ffd9a497><div class="container" data-v-ffd9a497><div class="news-grid" data-v-ffd9a497><article class="news-card featured" data-v-ffd9a497><div class="news-card-media" style="${ssrRenderStyle({ "background-image": "url('/voyah-resources/brand/kunpeng_hero.jpg')" })}" data-v-ffd9a497></div><div class="news-card-content" data-v-ffd9a497><div class="news-meta" data-v-ffd9a497><span class="category" data-v-ffd9a497>${ssrInterpolate(_ctx.$t("domain.newspage.filter_tech", "Technology"))}</span><span class="date" data-v-ffd9a497>Oct 14, 2024</span></div><h3 data-v-ffd9a497>${ssrInterpolate(_ctx.$t("domain.newspage.news1_title", "Voyah Unveils Next-Gen AI Cockpit at Global Tech Summit"))}</h3><p data-v-ffd9a497>${ssrInterpolate(_ctx.$t("domain.newspage.news1_desc", "Integrating the Snapdragon 8295 architecture with a localized large language model for unprecedented cabin intelligence."))}</p><a href="#" class="read-more" data-v-ffd9a497>${ssrInterpolate(_ctx.$t("domain.newspage.read_more", "Read Full Release"))} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-ffd9a497><path d="M5 12h14M12 5l7 7-7 7" data-v-ffd9a497></path></svg></a></div></article><article class="news-card" data-v-ffd9a497><div class="news-card-media small" style="${ssrRenderStyle({ "background-image": "url('/voyah-resources/lifestyle/community_hero.jpg')" })}" data-v-ffd9a497></div><div class="news-card-content" data-v-ffd9a497><div class="news-meta" data-v-ffd9a497><span class="category" data-v-ffd9a497>${ssrInterpolate(_ctx.$t("domain.newspage.filter_corp", "Corporate"))}</span><span class="date" data-v-ffd9a497>Sep 22, 2024</span></div><h3 data-v-ffd9a497>${ssrInterpolate(_ctx.$t("domain.newspage.news2_title", "European Expansion Accelerates: Voyah Enters Spain"))}</h3><a href="#" class="read-more" data-v-ffd9a497>${ssrInterpolate(_ctx.$t("domain.newspage.read_more", "Read Full Release"))}</a></div></article><article class="news-card" data-v-ffd9a497><div class="news-card-media small" style="${ssrRenderStyle({ "background-image": "url('/voyah-resources/models/titan_ultra_hero.jpg')" })}" data-v-ffd9a497></div><div class="news-card-content" data-v-ffd9a497><div class="news-meta" data-v-ffd9a497><span class="category" data-v-ffd9a497>${ssrInterpolate(_ctx.$t("domain.newspage.filter_prod", "Product"))}</span><span class="date" data-v-ffd9a497>Jul 10, 2024</span></div><h3 data-v-ffd9a497>${ssrInterpolate(_ctx.$t("domain.newspage.news3_title", "Titan Ultra 2026 Concepts Teased"))}</h3><a href="#" class="read-more" data-v-ffd9a497>${ssrInterpolate(_ctx.$t("domain.newspage.read_more", "Read Full Release"))}</a></div></article><article class="news-card" data-v-ffd9a497><div class="news-card-media small" style="${ssrRenderStyle({ "background-image": "url('/voyah-resources/tech/safety_battery_shield.png')" })}" data-v-ffd9a497></div><div class="news-card-content" data-v-ffd9a497><div class="news-meta" data-v-ffd9a497><span class="category" data-v-ffd9a497>${ssrInterpolate(_ctx.$t("domain.newspage.filter_tech", "Technology"))}</span><span class="date" data-v-ffd9a497>Jun 05, 2024</span></div><h3 data-v-ffd9a497>${ssrInterpolate(_ctx.$t("domain.newspage.news4_title", "Amber Battery Shield Achieves New Thermal Records"))}</h3><a href="#" class="read-more" data-v-ffd9a497>${ssrInterpolate(_ctx.$t("domain.newspage.read_more", "Read Full Release"))}</a></div></article></div><div class="load-more-container" data-v-ffd9a497><button class="btn-load-more" data-v-ffd9a497>${ssrInterpolate(_ctx.$t("domain.newspage.load_more", "Load More Content"))}</button></div></div></section></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/brand/NewsPage.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const NewsPage = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-ffd9a497"]]);
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
      _push(`<section class="dna-section section-shell text-bg-dark" data-v-a10d4c05><div class="container" data-v-a10d4c05><div class="dna-intro" data-v-a10d4c05><h2 data-v-a10d4c05>${ssrInterpolate(_ctx.$t("domain.kunpeng.dna_title", "Elegant and Majestic"))}</h2><p data-v-a10d4c05>${ssrInterpolate(_ctx.$t("domain.kunpeng.dna_desc", "The Kunpeng design philosophy is defined by two opposing yet complementary forces: the fluid grace of the ocean and the sharp, aerodynamic ambition of the sky."))}</p></div></div><div class="concept-marquee" data-v-a10d4c05><div class="marquee-track" data-v-a10d4c05><div class="concept-card" data-v-a10d4c05><img${ssrRenderAttr("src", _imports_0$2)} alt="Fluid Dynamics" data-v-a10d4c05><div class="concept-overlay" data-v-a10d4c05><h4 data-v-a10d4c05>${ssrInterpolate(_ctx.$t("domain.kunpeng.c1", "Aero-Sculpted Lines"))}</h4></div></div><div class="concept-card" data-v-a10d4c05><img${ssrRenderAttr("src", _imports_1$1)} alt="Safety Meets Form" data-v-a10d4c05><div class="concept-overlay" data-v-a10d4c05><h4 data-v-a10d4c05>${ssrInterpolate(_ctx.$t("domain.kunpeng.c2", "Form Meets Physics"))}</h4></div></div><div class="concept-card" data-v-a10d4c05><img${ssrRenderAttr("src", _imports_2)} alt="Titan Ultra Concept" data-v-a10d4c05><div class="concept-overlay" data-v-a10d4c05><h4 data-v-a10d4c05>${ssrInterpolate(_ctx.$t("domain.kunpeng.c3", "The Skyline Profile"))}</h4></div></div><div class="concept-card" data-v-a10d4c05><img${ssrRenderAttr("src", _imports_3)} alt="Interior Zen" data-v-a10d4c05><div class="concept-overlay" data-v-a10d4c05><h4 data-v-a10d4c05>${ssrInterpolate(_ctx.$t("domain.kunpeng.c4", "Zen Interior Architecture"))}</h4></div></div></div></div></section><section class="iland-section section-shell" data-v-a10d4c05><div class="container" data-v-a10d4c05><div class="iland-grid" data-v-a10d4c05><div class="iland-text" data-v-a10d4c05><div class="badge" data-v-a10d4c05>i-Land Concept</div><h2 data-v-a10d4c05>${ssrInterpolate(_ctx.$t("domain.kunpeng.i_title", "The Genesis of Voyah Form"))}</h2><p data-v-a10d4c05>${ssrInterpolate(_ctx.$t("domain.kunpeng.i_p1", 'The i-Land concept car was the pure manifestation of the Kunpeng philosophy. It introduced the world to our signature "Light Sword" interactive headlights and the floating roofline.'))}</p><ul class="design-list" data-v-a10d4c05><li data-v-a10d4c05><strong data-v-a10d4c05>${ssrInterpolate(_ctx.$t("domain.kunpeng.f1_title", "Light Wings:"))}</strong> ${ssrInterpolate(_ctx.$t("domain.kunpeng.f1_desc", "Symmetric daytime running lights crossing the grille."))}</li><li data-v-a10d4c05><strong data-v-a10d4c05>${ssrInterpolate(_ctx.$t("domain.kunpeng.f2_title", "Surging Waves:"))}</strong> ${ssrInterpolate(_ctx.$t("domain.kunpeng.f2_desc", "Profile body lines that emulate ripples displacing water."))}</li></ul></div><div class="iland-image" data-v-a10d4c05><div class="img-wrapper shadow-layer" data-v-a10d4c05><img${ssrRenderAttr("src", _imports_4)} alt="i-Land Prototype" data-v-a10d4c05></div></div></div></div></section></div>`);
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
      var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
      _push(`<!--[-->`);
      if (unref(servicePage)) {
        _push(ssrRenderComponent(_sfc_main$x, null, null, _parent));
      } else if (unref(energyPage)) {
        _push(ssrRenderComponent(EnergyCenterPage, null, null, _parent));
      } else if (unref(legacyBusinessPage)) {
        _push(ssrRenderComponent(_sfc_main$r, {
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
        _push(ssrRenderComponent(_sfc_main$y, {
          page: unref(legacyDisclosurePage),
          "text-for": unref(textFor)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (((_a2 = unref(modelPage)) == null ? void 0 : _a2.slug) === "dreamer.html") {
        _push(ssrRenderComponent(DreamerPage, { model: unref(modelPage) }, null, _parent));
      } else if (unref(modelPage)) {
        _push(ssrRenderComponent(ModelPage, { model: unref(modelPage) }, null, _parent));
      } else if (((_b2 = unref(infoPage)) == null ? void 0 : _b2.slug) === "architecture.html") {
        _push(ssrRenderComponent(ArchitecturePage, { page: unref(infoPage) }, null, _parent));
      } else if (((_c = unref(infoPage)) == null ? void 0 : _c.slug) === "safety.html") {
        _push(ssrRenderComponent(SafetyPage, { page: unref(infoPage) }, null, _parent));
      } else if (((_d = unref(infoPage)) == null ? void 0 : _d.slug) === "smart-cockpit.html") {
        _push(ssrRenderComponent(SmartCockpitPage, { page: unref(infoPage) }, null, _parent));
      } else if (((_e = unref(infoPage)) == null ? void 0 : _e.slug) === "battery.html") {
        _push(ssrRenderComponent(BatteryPage, { page: unref(infoPage) }, null, _parent));
      } else if (((_f = unref(infoPage)) == null ? void 0 : _f.slug) === "ir.html") {
        _push(ssrRenderComponent(IRPage, { page: unref(infoPage) }, null, _parent));
      } else if (((_g = unref(infoPage)) == null ? void 0 : _g.slug) === "corporate.html") {
        _push(ssrRenderComponent(CorporatePage, { page: unref(infoPage) }, null, _parent));
      } else if (((_h = unref(infoPage)) == null ? void 0 : _h.slug) === "recruit-partners.html") {
        _push(ssrRenderComponent(RecruitPage, { page: unref(infoPage) }, null, _parent));
      } else if (((_i = unref(infoPage)) == null ? void 0 : _i.slug) === "joinus.html") {
        _push(ssrRenderComponent(JoinUsPage, { page: unref(infoPage) }, null, _parent));
      } else if (((_j = unref(infoPage)) == null ? void 0 : _j.slug) === "about.html") {
        _push(ssrRenderComponent(AboutPage, { page: unref(infoPage) }, null, _parent));
      } else if (((_k = unref(infoPage)) == null ? void 0 : _k.slug) === "news.html") {
        _push(ssrRenderComponent(NewsPage, { page: unref(infoPage) }, null, _parent));
      } else if (((_l = unref(infoPage)) == null ? void 0 : _l.slug) === "brand-philosophy.html") {
        _push(ssrRenderComponent(PhilosophyPage, { page: unref(infoPage) }, null, _parent));
      } else if (((_m = unref(infoPage)) == null ? void 0 : _m.slug) === "kunpeng-design.html") {
        _push(ssrRenderComponent(KunpengPage, { page: unref(infoPage) }, null, _parent));
      } else if (((_n = unref(infoPage)) == null ? void 0 : _n.slug) === "faq.html") {
        _push(ssrRenderComponent(FaqPage, { page: unref(infoPage) }, null, _parent));
      } else if (((_o = unref(infoPage)) == null ? void 0 : _o.slug) === "warranty.html") {
        _push(ssrRenderComponent(WarrantyPage, { page: unref(infoPage) }, null, _parent));
      } else if (((_p = unref(infoPage)) == null ? void 0 : _p.slug) === "app-download.html") {
        _push(ssrRenderComponent(AppPage, { page: unref(infoPage) }, null, _parent));
      } else if (((_q = unref(infoPage)) == null ? void 0 : _q.slug) === "community.html") {
        _push(ssrRenderComponent(CommunityPage, { page: unref(infoPage) }, null, _parent));
      } else if (((_r = unref(infoPage)) == null ? void 0 : _r.slug) === "lifestyle-store.html") {
        _push(ssrRenderComponent(LifestyleStorePage, { page: unref(infoPage) }, null, _parent));
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
//# sourceMappingURL=_slug_-D7tIP3wC.mjs.map
