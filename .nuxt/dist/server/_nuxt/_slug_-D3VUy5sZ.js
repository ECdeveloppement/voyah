import { defineComponent, mergeProps, useSSRContext, unref, createSlots, withCtx, createTextVNode, toDisplayString, createVNode, computed } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderSlot, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { u as useSectionReveal, _ as _sfc_main$7, a as _sfc_main$8 } from "./MetricGrid-sTTMnurw.js";
import { u as useSiteContent, a as useSeoMeta } from "./useSiteContent-DdcGgDLD.js";
import { _ as _export_sfc, u as useRoute, r as resolvePage } from "../server.mjs";
import "E:/voyah-nuxt/node_modules/hookable/dist/index.mjs";
import "E:/voyah-nuxt/node_modules/@unhead/vue/dist/index.mjs";
import "E:/voyah-nuxt/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "E:/voyah-nuxt/node_modules/unctx/dist/index.mjs";
import "E:/voyah-nuxt/node_modules/h3/dist/index.mjs";
import "vue-router";
import "E:/voyah-nuxt/node_modules/defu/dist/defu.mjs";
import "E:/voyah-nuxt/node_modules/klona/dist/index.mjs";
import "E:/voyah-nuxt/node_modules/cookie-es/dist/index.mjs";
import "E:/voyah-nuxt/node_modules/destr/dist/index.mjs";
import "E:/voyah-nuxt/node_modules/ohash/dist/index.mjs";
import "@vue/devtools-api";
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
              _push2(ssrRenderComponent(_sfc_main$7, {
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
                createVNode(_sfc_main$7, {
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
      if (__props.page.metrics?.length) {
        _push(`<section class="section-shell info-page-shell" data-v-d0ee214b><div class="container" data-v-d0ee214b>`);
        _push(ssrRenderComponent(_sfc_main$8, {
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
const getExpandedModelGallery = (slug, fallback) => modelGalleryMap[slug] ?? fallback;
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
        kicker: modelLabel("Chapter 01", "Chapitre 01", "الفصل 01"),
        title: modelLabel("Exterior character", "Caractère extérieur", "الطابع الخارجي"),
        summary: textFor(props.model.subtitle)
      },
      {
        kicker: modelLabel("Chapter 02", "Chapitre 02", "الفصل 02"),
        title: modelLabel("Cabin atmosphere", "Atmosphère intérieure", "أجواء المقصورة"),
        summary: modelLabel(
          "Material layering, proportion, and surface treatment define the premium cabin story across this page.",
          "La superposition des matières, les proportions et le traitement des surfaces définissent ici le récit de l’habitacle premium.",
          "تحدد طبقات المواد والتناسب ومعالجة الأسطح قصة المقصورة الفاخرة عبر هذه الصفحة."
        )
      },
      {
        kicker: modelLabel("Chapter 03", "Chapitre 03", "الفصل 03"),
        title: modelLabel("Technology and comfort", "Technologie et confort", "التقنية والراحة"),
        summary: modelLabel(
          "Interactive interfaces, seating comfort, and digital touchpoints are expressed through the bundled local media set.",
          "Les interfaces interactives, le confort d’assise et les points de contact numériques sont exprimés à travers le jeu de médias locaux embarqués.",
          "يتم التعبير عن الواجهات التفاعلية وراحة المقاعد ونقاط الاتصال الرقمية من خلال مجموعة الوسائط المحلية المدمجة."
        )
      },
      {
        kicker: modelLabel("Chapter 04", "Chapitre 04", "الفصل 04"),
        title: modelLabel("Performance and confidence", "Performance et sérénité", "الأداء والثقة"),
        summary: modelLabel(
          "The final sequence emphasizes stance, capability, and the composed presence expected from the Voyah lineup.",
          "La séquence finale met l’accent sur l’assise, les capacités et la prestance maîtrisée attendues de la gamme Voyah.",
          "يركز التسلسل الأخير على الثبات والقدرة والحضور الواثق المتوقع من مجموعة Voyah."
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
      { id: "overview", label: modelLabel("Overview", "Aperçu", "نظرة عامة") },
      ...gallerySections.value.map((section) => ({ id: section.id, label: section.title })),
      { id: "book-drive", label: modelLabel("Reserve", "Réserver", "احجز") }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
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
            _push2(ssrRenderComponent(_sfc_main$7, {
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
            _push2(ssrRenderComponent(_sfc_main$7, {
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
              createVNode(_sfc_main$7, {
                to: unref(buildPath)("book-drive.html"),
                variant: "primary"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(textFor)(__props.model.ctaPrimary)), 1)
                ]),
                _: 1
              }, 8, ["to"]),
              createVNode(_sfc_main$7, {
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
      _push(`<section id="overview" class="model-overview" data-v-b719cf61><div class="container model-overview-grid" data-v-b719cf61><div class="model-overview-copy" data-reveal data-v-b719cf61><p class="model-overview-kicker" data-v-b719cf61>${ssrInterpolate(modelLabel("Vehicle overview", "Vue d’ensemble du véhicule", "نظرة عامة على المركبة"))}</p><h2 class="model-overview-title" data-v-b719cf61>${ssrInterpolate(unref(textFor)(__props.model.title))}</h2><p class="model-overview-summary" data-v-b719cf61>${ssrInterpolate(unref(textFor)(__props.model.description))}</p></div><aside class="model-overview-panel" data-reveal data-v-b719cf61><img${ssrRenderAttr("src", __props.model.logo)}${ssrRenderAttr("alt", unref(textFor)(__props.model.title))} class="model-overview-logo" data-v-b719cf61><p class="model-overview-price" data-v-b719cf61>${ssrInterpolate(unref(textFor)(__props.model.price))}</p><p class="model-overview-note" data-v-b719cf61>${ssrInterpolate(modelLabel(
        "A locally rendered model page built from bundled assets, localized content, and reusable Nuxt components.",
        "Une page modèle rendue localement à partir d’actifs embarqués, de contenus localisés et de composants Nuxt réutilisables.",
        "صفحة طراز معروضة محلياً بالاعتماد على أصول مدمجة ومحتوى مترجم ومكونات Nuxt قابلة لإعادة الاستخدام."
      ))}</p></aside></div><div class="container" data-reveal data-v-b719cf61>`);
      _push(ssrRenderComponent(_sfc_main$8, {
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
      _push(`<!--]--></div><section id="book-drive" class="model-cta" style="${ssrRenderStyle({ "--cta-image": `url(${unref(gallery).at(-1) ?? __props.model.heroImage})` })}" data-v-b719cf61><div class="container model-cta-card" data-reveal data-v-b719cf61><p class="model-cta-kicker" data-v-b719cf61>${ssrInterpolate(modelLabel("Continue the experience", "Poursuivre l’expérience", "واصل التجربة"))}</p><h2 data-v-b719cf61>${ssrInterpolate(modelLabel("Explore the full Voyah journey locally", "Explorer l’expérience Voyah complète en local", "استكشف رحلة Voyah الكاملة محلياً"))}</h2><p data-v-b719cf61>${ssrInterpolate(modelLabel(
        "Move between the model page, booking flow, and store center with the same local asset base and translated content.",
        "Passez de la page modèle à la réservation puis au centre de magasins avec la même base d’actifs locaux et un contenu traduit.",
        "انتقل بين صفحة الطراز وحجز التجربة ومركز المعارض باستخدام نفس الأصول المحلية والمحتوى المترجم."
      ))}</p><div class="button-row" data-v-b719cf61>`);
      _push(ssrRenderComponent(_sfc_main$7, {
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
      _push(ssrRenderComponent(_sfc_main$7, {
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
    const page = computed(() => typeof slug.value === "string" ? resolvePage(slug.value) ?? null : null);
    const modelPage = computed(() => page.value?.kind === "model" ? page.value : null);
    const infoPage = computed(() => page.value?.kind === "info" ? page.value : null);
    const legalPage = computed(() => page.value?.kind === "legal" ? page.value : null);
    const { textFor } = useSiteContent();
    useSeoMeta(() => {
      const title = modelPage.value?.title ?? infoPage.value?.title ?? legalPage.value?.title;
      const description = modelPage.value?.description ?? infoPage.value?.summary ?? legalPage.value?.summary;
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
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-D3VUy5sZ.js.map
