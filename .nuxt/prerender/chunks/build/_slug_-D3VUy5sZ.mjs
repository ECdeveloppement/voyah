import { defineComponent, computed, unref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, createSlots, useSSRContext } from 'file://E:/voyah-nuxt/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrRenderSlot } from 'file://E:/voyah-nuxt/node_modules/vue/server-renderer/index.mjs';
import { u as useSectionReveal, _ as _sfc_main$1$1, a as _sfc_main$7 } from './MetricGrid-sTTMnurw.mjs';
import { u as useSiteContent, a as useSeoMeta } from './useSiteContent-DdcGgDLD.mjs';
import { u as useRoute, r as resolvePage, _ as _export_sfc } from './server.mjs';
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

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "PageHero",
  __ssrInlineRender: true,
  props: {
    eyebrow: {},
    title: {},
    summary: {},
    image: {},
    logo: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "page-hero" }, _attrs))}><div class="page-hero-media"><img${ssrRenderAttr("src", __props.image)}${ssrRenderAttr("alt", __props.title)}></div><div class="page-hero-overlay"></div><div class="page-hero-content"><div class="container">`);
      if (__props.logo) {
        _push(`<img${ssrRenderAttr("src", __props.logo)}${ssrRenderAttr("alt", __props.title)} class="page-logo">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="eyebrow">${ssrInterpolate(__props.eyebrow)}</p><h1 class="page-title">${ssrInterpolate(__props.title)}</h1><p class="page-summary">${ssrInterpolate(__props.summary)}</p>`);
      if (_ctx.$slots.actions) {
        _push(`<div class="button-row" style="${ssrRenderStyle({ "margin-top": "28px" })}">`);
        ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/PageHero.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "InfoPage",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    const { buildPath, textFor } = useSiteContent();
    useSectionReveal();
    useSectionReveal();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "info-page" }, _attrs))} data-v-d0ee214b>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        eyebrow: unref(textFor)(__props.page.eyebrow),
        title: unref(textFor)(__props.page.title),
        summary: unref(textFor)(__props.page.summary),
        image: __props.page.heroImage
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
        } : void 0
      ]), _parent));
      if ((_a = __props.page.metrics) == null ? void 0 : _a.length) {
        _push(`<section class="section-shell info-page-shell" data-v-d0ee214b><div class="container" data-v-d0ee214b>`);
        _push(ssrRenderComponent(_sfc_main$7, {
          metrics: __props.page.metrics
        }, null, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="section-shell info-page-shell alt" data-v-d0ee214b><div class="container content-grid" data-v-d0ee214b><!--[-->`);
      ssrRenderList(__props.page.blocks, (block) => {
        _push(`<article class="content-card" data-reveal data-v-d0ee214b><img${ssrRenderAttr("src", block.image)}${ssrRenderAttr("alt", unref(textFor)(block.title))} data-v-d0ee214b><div class="content-card-body" data-v-d0ee214b><h2 class="content-card-title" data-v-d0ee214b>${ssrInterpolate(unref(textFor)(block.title))}</h2><p class="content-card-copy" data-v-d0ee214b>${ssrInterpolate(unref(textFor)(block.body))}</p></div></article>`);
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/InfoPage.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const InfoPage = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-d0ee214b"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "LegalPage",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    const { textFor } = useSiteContent();
    useSectionReveal();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "legal-page" }, _attrs))} data-v-3bb9dadb>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        eyebrow: unref(textFor)(__props.page.eyebrow),
        title: unref(textFor)(__props.page.title),
        summary: unref(textFor)(__props.page.summary),
        image: "/static/assets/world-fec50d02.jpg"
      }, null, _parent));
      _push(`<section class="section-shell legal-page-shell" data-v-3bb9dadb><div class="container legal-stack" data-v-3bb9dadb><!--[-->`);
      ssrRenderList(__props.page.sections, (section) => {
        _push(`<article class="legal-card" data-reveal data-v-3bb9dadb><h2 data-v-3bb9dadb>${ssrInterpolate(unref(textFor)(section.title))}</h2><!--[-->`);
        ssrRenderList(section.paragraphs, (paragraph) => {
          _push(`<p data-v-3bb9dadb>${ssrInterpolate(unref(textFor)(paragraph))}</p>`);
        });
        _push(`<!--]--></article>`);
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/LegalPage.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const LegalPage = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-3bb9dadb"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ModelChapterNav",
  __ssrInlineRender: true,
  props: {
    sections: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "model-chapter-nav" }, _attrs))} data-v-e5279b08><div class="container model-chapter-nav-inner" data-v-e5279b08><!--[-->`);
      ssrRenderList(__props.sections, (section) => {
        _push(`<a${ssrRenderAttr("href", `#${section.id}`)} class="model-chapter-link" data-v-e5279b08>${ssrInterpolate(section.label)}</a>`);
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
const ModelChapterNav = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-e5279b08"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ModelMediaSection",
  __ssrInlineRender: true,
  props: {
    index: {},
    section: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: __props.section.id,
        class: ["model-media-section", { reverse: __props.index % 2 === 1 }]
      }, _attrs))} data-v-1f71b2d7><div class="container model-media-grid" data-v-1f71b2d7><div class="model-media-copy" data-reveal data-v-1f71b2d7><p class="model-media-kicker" data-v-1f71b2d7>${ssrInterpolate(__props.section.kicker)}</p><h2 class="model-media-title" data-v-1f71b2d7>${ssrInterpolate(__props.section.title)}</h2><p class="model-media-summary" data-v-1f71b2d7>${ssrInterpolate(__props.section.summary)}</p></div><div class="model-media-stack" data-reveal data-v-1f71b2d7><figure class="model-media-primary" data-v-1f71b2d7><img${ssrRenderAttr("src", __props.section.images[0])}${ssrRenderAttr("alt", __props.section.title)} data-v-1f71b2d7></figure>`);
      if (__props.section.images.length > 1) {
        _push(`<div class="model-media-secondary" data-v-1f71b2d7><!--[-->`);
        ssrRenderList(__props.section.images.slice(1), (image) => {
          _push(`<figure data-v-1f71b2d7><img${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", __props.section.title)} data-v-1f71b2d7></figure>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/model/ModelMediaSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ModelMediaSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-1f71b2d7"]]);
const carGallery = (folder, assets) => assets.map((asset) => `/voyah-resources/images/car/${folder}/${asset}`);
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
const getExpandedModelGallery = (slug, fallback) => {
  var _a;
  return (_a = modelGalleryMap[slug]) != null ? _a : fallback;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ModelPage",
  __ssrInlineRender: true,
  props: {
    model: {}
  },
  setup(__props) {
    const props = __props;
    const { buildPath, locale, textFor } = useSiteContent();
    useSectionReveal({});
    useSectionReveal({});
    useSectionReveal();
    const modelLabel = (en, fr, ar) => {
      if (locale.value.code === "fr") {
        return fr;
      }
      if (locale.value.code === "ar") {
        return ar;
      }
      return en;
    };
    const gallery = computed(() => getExpandedModelGallery(props.model.slug, props.model.gallery));
    const splitGallery = (images) => {
      if (images.length <= 2) {
        return [images];
      }
      const groupCount = Math.min(4, Math.max(3, Math.ceil(images.length / 2)));
      const groups = [];
      let cursor = 0;
      for (let index = 0; index < groupCount; index += 1) {
        const remainingGroups = groupCount - index;
        const remainingItems = images.length - cursor;
        const size = Math.ceil(remainingItems / remainingGroups);
        groups.push(images.slice(cursor, cursor + size));
        cursor += size;
      }
      return groups.filter((group) => group.length > 0);
    };
    const sectionBlueprints = computed(() => [
      {
        kicker: modelLabel("Chapter 01", "Chapitre 01", "\u0627\u0644\u0641\u0635\u0644 01"),
        title: modelLabel("Exterior character", "Caract\xE8re ext\xE9rieur", "\u0627\u0644\u0637\u0627\u0628\u0639 \u0627\u0644\u062E\u0627\u0631\u062C\u064A"),
        summary: textFor(props.model.subtitle)
      },
      {
        kicker: modelLabel("Chapter 02", "Chapitre 02", "\u0627\u0644\u0641\u0635\u0644 02"),
        title: modelLabel("Cabin atmosphere", "Atmosph\xE8re int\xE9rieure", "\u0623\u062C\u0648\u0627\u0621 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629"),
        summary: modelLabel(
          "Material layering, proportion, and surface treatment define the premium cabin story across this page.",
          "La superposition des mati\xE8res, les proportions et le traitement des surfaces d\xE9finissent ici le r\xE9cit de l\u2019habitacle premium.",
          "\u062A\u062D\u062F\u062F \u0637\u0628\u0642\u0627\u062A \u0627\u0644\u0645\u0648\u0627\u062F \u0648\u0627\u0644\u062A\u0646\u0627\u0633\u0628 \u0648\u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0623\u0633\u0637\u062D \u0642\u0635\u0629 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0641\u0627\u062E\u0631\u0629 \u0639\u0628\u0631 \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629."
        )
      },
      {
        kicker: modelLabel("Chapter 03", "Chapitre 03", "\u0627\u0644\u0641\u0635\u0644 03"),
        title: modelLabel("Technology and comfort", "Technologie et confort", "\u0627\u0644\u062A\u0642\u0646\u064A\u0629 \u0648\u0627\u0644\u0631\u0627\u062D\u0629"),
        summary: modelLabel(
          "Interactive interfaces, seating comfort, and digital touchpoints are expressed through the bundled local media set.",
          "Les interfaces interactives, le confort d\u2019assise et les points de contact num\xE9riques sont exprim\xE9s \xE0 travers le jeu de m\xE9dias locaux embarqu\xE9s.",
          "\u064A\u062A\u0645 \u0627\u0644\u062A\u0639\u0628\u064A\u0631 \u0639\u0646 \u0627\u0644\u0648\u0627\u062C\u0647\u0627\u062A \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u064A\u0629 \u0648\u0631\u0627\u062D\u0629 \u0627\u0644\u0645\u0642\u0627\u0639\u062F \u0648\u0646\u0642\u0627\u0637 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0627\u0644\u0631\u0642\u0645\u064A\u0629 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u0644\u0648\u0633\u0627\u0626\u0637 \u0627\u0644\u0645\u062D\u0644\u064A\u0629 \u0627\u0644\u0645\u062F\u0645\u062C\u0629."
        )
      },
      {
        kicker: modelLabel("Chapter 04", "Chapitre 04", "\u0627\u0644\u0641\u0635\u0644 04"),
        title: modelLabel("Performance and confidence", "Performance et s\xE9r\xE9nit\xE9", "\u0627\u0644\u0623\u062F\u0627\u0621 \u0648\u0627\u0644\u062B\u0642\u0629"),
        summary: modelLabel(
          "The final sequence emphasizes stance, capability, and the composed presence expected from the Voyah lineup.",
          "La s\xE9quence finale met l\u2019accent sur l\u2019assise, les capacit\xE9s et la prestance ma\xEEtris\xE9e attendues de la gamme Voyah.",
          "\u064A\u0631\u0643\u0632 \u0627\u0644\u062A\u0633\u0644\u0633\u0644 \u0627\u0644\u0623\u062E\u064A\u0631 \u0639\u0644\u0649 \u0627\u0644\u062B\u0628\u0627\u062A \u0648\u0627\u0644\u0642\u062F\u0631\u0629 \u0648\u0627\u0644\u062D\u0636\u0648\u0631 \u0627\u0644\u0648\u0627\u062B\u0642 \u0627\u0644\u0645\u062A\u0648\u0642\u0639 \u0645\u0646 \u0645\u062C\u0645\u0648\u0639\u0629 Voyah."
        )
      }
    ]);
    const gallerySections = computed(
      () => splitGallery(gallery.value).map((images, index) => {
        const blueprint = sectionBlueprints.value[Math.min(index, sectionBlueprints.value.length - 1)];
        return {
          id: `chapter-${index + 1}`,
          ...blueprint,
          images
        };
      })
    );
    const chapterLinks = computed(() => [
      { id: "overview", label: modelLabel("Overview", "Aper\xE7u", "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629") },
      ...gallerySections.value.map((section) => ({ id: section.id, label: section.title })),
      { id: "book-drive", label: modelLabel("Reserve", "R\xE9server", "\u0627\u062D\u062C\u0632") }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "model-page" }, _attrs))} data-v-b719cf61>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        eyebrow: unref(textFor)(__props.model.subtitle),
        title: unref(textFor)(__props.model.title),
        summary: unref(textFor)(__props.model.description),
        image: __props.model.heroImage,
        logo: __props.model.logo
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
        _: 1
      }, _parent));
      _push(ssrRenderComponent(ModelChapterNav, { sections: unref(chapterLinks) }, null, _parent));
      _push(`<section id="overview" class="model-overview" data-v-b719cf61><div class="container model-overview-grid" data-v-b719cf61><div class="model-overview-copy" data-reveal data-v-b719cf61><p class="model-overview-kicker" data-v-b719cf61>${ssrInterpolate(modelLabel("Vehicle overview", "Vue d\u2019ensemble du v\xE9hicule", "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u0643\u0628\u0629"))}</p><h2 class="model-overview-title" data-v-b719cf61>${ssrInterpolate(unref(textFor)(__props.model.title))}</h2><p class="model-overview-summary" data-v-b719cf61>${ssrInterpolate(unref(textFor)(__props.model.description))}</p></div><aside class="model-overview-panel" data-reveal data-v-b719cf61><img${ssrRenderAttr("src", __props.model.logo)}${ssrRenderAttr("alt", unref(textFor)(__props.model.title))} class="model-overview-logo" data-v-b719cf61><p class="model-overview-price" data-v-b719cf61>${ssrInterpolate(unref(textFor)(__props.model.price))}</p><p class="model-overview-note" data-v-b719cf61>${ssrInterpolate(modelLabel(
        "A locally rendered model page built from bundled assets, localized content, and reusable Nuxt components.",
        "Une page mod\xE8le rendue localement \xE0 partir d\u2019actifs embarqu\xE9s, de contenus localis\xE9s et de composants Nuxt r\xE9utilisables.",
        "\u0635\u0641\u062D\u0629 \u0637\u0631\u0627\u0632 \u0645\u0639\u0631\u0648\u0636\u0629 \u0645\u062D\u0644\u064A\u0627\u064B \u0628\u0627\u0644\u0627\u0639\u062A\u0645\u0627\u062F \u0639\u0644\u0649 \u0623\u0635\u0648\u0644 \u0645\u062F\u0645\u062C\u0629 \u0648\u0645\u062D\u062A\u0648\u0649 \u0645\u062A\u0631\u062C\u0645 \u0648\u0645\u0643\u0648\u0646\u0627\u062A Nuxt \u0642\u0627\u0628\u0644\u0629 \u0644\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645."
      ))}</p></aside></div><div class="container" data-reveal data-v-b719cf61>`);
      _push(ssrRenderComponent(_sfc_main$7, {
        metrics: __props.model.metrics
      }, null, _parent));
      _push(`</div></section><div data-v-b719cf61><!--[-->`);
      ssrRenderList(unref(gallerySections), (section, index) => {
        _push(ssrRenderComponent(ModelMediaSection, {
          key: section.id,
          index,
          section
        }, null, _parent));
      });
      _push(`<!--]--></div><section id="book-drive" class="model-cta" style="${ssrRenderStyle({ "--cta-image": `url(${(_a = unref(gallery).at(-1)) != null ? _a : __props.model.heroImage})` })}" data-v-b719cf61><div class="container model-cta-card" data-reveal data-v-b719cf61><p class="model-cta-kicker" data-v-b719cf61>${ssrInterpolate(modelLabel("Continue the experience", "Poursuivre l\u2019exp\xE9rience", "\u0648\u0627\u0635\u0644 \u0627\u0644\u062A\u062C\u0631\u0628\u0629"))}</p><h2 data-v-b719cf61>${ssrInterpolate(modelLabel("Explore the full Voyah journey locally", "Explorer l\u2019exp\xE9rience Voyah compl\xE8te en local", "\u0627\u0633\u062A\u0643\u0634\u0641 \u0631\u062D\u0644\u0629 Voyah \u0627\u0644\u0643\u0627\u0645\u0644\u0629 \u0645\u062D\u0644\u064A\u0627\u064B"))}</h2><p data-v-b719cf61>${ssrInterpolate(modelLabel(
        "Move between the model page, booking flow, and store center with the same local asset base and translated content.",
        "Passez de la page mod\xE8le \xE0 la r\xE9servation puis au centre de magasins avec la m\xEAme base d\u2019actifs locaux et un contenu traduit.",
        "\u0627\u0646\u062A\u0642\u0644 \u0628\u064A\u0646 \u0635\u0641\u062D\u0629 \u0627\u0644\u0637\u0631\u0627\u0632 \u0648\u062D\u062C\u0632 \u0627\u0644\u062A\u062C\u0631\u0628\u0629 \u0648\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0639\u0627\u0631\u0636 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0646\u0641\u0633 \u0627\u0644\u0623\u0635\u0648\u0644 \u0627\u0644\u0645\u062D\u0644\u064A\u0629 \u0648\u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0645\u062A\u0631\u062C\u0645."
      ))}</p><div class="button-row" data-v-b719cf61>`);
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
const ModelPage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b719cf61"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const slug = computed(() => Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug);
    const page = computed(() => {
      var _a;
      return typeof slug.value === "string" ? (_a = resolvePage(slug.value)) != null ? _a : null : null;
    });
    const modelPage = computed(() => {
      var _a;
      return ((_a = page.value) == null ? void 0 : _a.kind) === "model" ? page.value : null;
    });
    const infoPage = computed(() => {
      var _a;
      return ((_a = page.value) == null ? void 0 : _a.kind) === "info" ? page.value : null;
    });
    const legalPage = computed(() => {
      var _a;
      return ((_a = page.value) == null ? void 0 : _a.kind) === "legal" ? page.value : null;
    });
    const { textFor } = useSiteContent();
    useSeoMeta(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      const title = (_e = (_c = (_a = modelPage.value) == null ? void 0 : _a.title) != null ? _c : (_b = infoPage.value) == null ? void 0 : _b.title) != null ? _e : (_d = legalPage.value) == null ? void 0 : _d.title;
      const description = (_j = (_h = (_f = modelPage.value) == null ? void 0 : _f.description) != null ? _h : (_g = infoPage.value) == null ? void 0 : _g.summary) != null ? _j : (_i = legalPage.value) == null ? void 0 : _i.summary;
      return {
        title: title ? `Voyah | ${textFor(title)}` : "Voyah",
        description: description ? textFor(description) : "Voyah"
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(modelPage)) {
        _push(ssrRenderComponent(ModelPage, mergeProps({ model: unref(modelPage) }, _attrs), null, _parent));
      } else if (unref(infoPage)) {
        _push(ssrRenderComponent(InfoPage, mergeProps({ page: unref(infoPage) }, _attrs), null, _parent));
      } else if (unref(legalPage)) {
        _push(ssrRenderComponent(LegalPage, mergeProps({ page: unref(legalPage) }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
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
//# sourceMappingURL=_slug_-D3VUy5sZ.mjs.map
