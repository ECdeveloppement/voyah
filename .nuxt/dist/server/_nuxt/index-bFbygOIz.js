import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$7, u as useSectionReveal, a as _sfc_main$8 } from "./MetricGrid-sTTMnurw.js";
import { u as useSiteContent, a as useSeoMeta } from "./useSiteContent-DdcGgDLD.js";
import "E:/voyah-nuxt/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc, a as __nuxt_component_0$1, h as homePage } from "../server.mjs";
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
  __name: "HomeHero",
  __ssrInlineRender: true,
  props: {
    slides: {}
  },
  setup(__props) {
    const { buildPath, textFor } = useSiteContent();
    const activeIndex = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "home-hero" }, _attrs))} data-v-897245b5><!--[-->`);
      ssrRenderList(__props.slides, (slide, index) => {
        _push(`<article class="${ssrRenderClass(["hero-slide", { active: unref(activeIndex) === index }])}" data-v-897245b5><div class="hero-media" data-v-897245b5>`);
        if (slide.video) {
          _push(`<video class="hero-video"${ssrRenderAttr("poster", slide.image)} autoplay muted loop playsinline data-v-897245b5><source${ssrRenderAttr("src", slide.video)} type="video/mp4" data-v-897245b5></video>`);
        } else {
          _push(`<img${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", unref(textFor)(slide.title))} data-v-897245b5>`);
        }
        _push(`</div><div class="hero-overlay" data-v-897245b5></div><div class="container hero-content" data-v-897245b5>`);
        if (slide.logo) {
          _push(`<img${ssrRenderAttr("src", slide.logo)}${ssrRenderAttr("alt", unref(textFor)(slide.title))} class="hero-logo" data-v-897245b5>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h1 data-v-897245b5>${ssrInterpolate(unref(textFor)(slide.title))}</h1><p data-v-897245b5>${ssrInterpolate(unref(textFor)(slide.description))}</p><div class="button-row" data-v-897245b5>`);
        _push(ssrRenderComponent(_sfc_main$7, {
          to: unref(buildPath)(slide.primarySlug),
          variant: "primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(textFor)(slide.primaryLabel))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(textFor)(slide.primaryLabel)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        if (slide.secondarySlug) {
          _push(ssrRenderComponent(_sfc_main$7, {
            to: unref(buildPath)(slide.secondarySlug),
            variant: "secondary"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(textFor)(slide.secondaryLabel))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(textFor)(slide.secondaryLabel)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></article>`);
      });
      _push(`<!--]--><div class="container hero-controls" data-v-897245b5><!--[-->`);
      ssrRenderList(__props.slides, (slide, index) => {
        _push(`<button type="button" class="${ssrRenderClass(["hero-dot", { active: unref(activeIndex) === index }])}" data-v-897245b5></button>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeHero.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-897245b5"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "HomeBrandIntro",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const { buildPath, textFor } = useSiteContent();
    const sectionRef = useSectionReveal();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "section-shell"
      }, _attrs))} data-v-259124ad><div class="container intro-grid panel" data-v-259124ad><div class="intro-copy" data-v-259124ad><p class="eyebrow" data-reveal data-v-259124ad>Voyah</p><h2 class="section-title" data-reveal data-v-259124ad>${ssrInterpolate(unref(textFor)(__props.data.title))}</h2><p class="section-copy" data-reveal data-v-259124ad>${ssrInterpolate(unref(textFor)(__props.data.body))}</p>`);
      _push(ssrRenderComponent(_sfc_main$7, {
        to: unref(buildPath)("brand.html"),
        variant: "primary",
        "data-reveal": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(textFor)(__props.data.cta))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(textFor)(__props.data.cta)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="intro-media" data-reveal data-v-259124ad><img${ssrRenderAttr("src", __props.data.image)}${ssrRenderAttr("alt", unref(textFor)(__props.data.title))} data-v-259124ad></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeBrandIntro.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-259124ad"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "HomeModels",
  __ssrInlineRender: true,
  props: {
    title: {},
    body: {},
    models: {}
  },
  setup(__props) {
    const { buildPath, textFor } = useSiteContent();
    const sectionRef = useSectionReveal({});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "section-shell"
      }, _attrs))} data-v-8951e5ee><div class="container" data-v-8951e5ee><p class="eyebrow" data-reveal data-v-8951e5ee>${ssrInterpolate(unref(textFor)(__props.title))}</p><h2 class="section-title" data-reveal data-v-8951e5ee>${ssrInterpolate(unref(textFor)(__props.title))}</h2><p class="section-copy" data-reveal data-v-8951e5ee>${ssrInterpolate(unref(textFor)(__props.body))}</p><div class="model-grid" data-v-8951e5ee><!--[-->`);
      ssrRenderList(__props.models, (model) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: model.slug,
          to: unref(buildPath)(model.slug),
          class: "model-card",
          "data-reveal": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", model.image)}${ssrRenderAttr("alt", unref(textFor)(model.title))} data-v-8951e5ee${_scopeId}><div class="model-body" data-v-8951e5ee${_scopeId}><span class="model-category" data-v-8951e5ee${_scopeId}>${ssrInterpolate(unref(textFor)(model.category))}</span><h3 data-v-8951e5ee${_scopeId}>${ssrInterpolate(unref(textFor)(model.title))}</h3>`);
              _push2(ssrRenderComponent(_sfc_main$8, {
                metrics: model.metrics
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("img", {
                  src: model.image,
                  alt: unref(textFor)(model.title)
                }, null, 8, ["src", "alt"]),
                createVNode("div", { class: "model-body" }, [
                  createVNode("span", { class: "model-category" }, toDisplayString(unref(textFor)(model.category)), 1),
                  createVNode("h3", null, toDisplayString(unref(textFor)(model.title)), 1),
                  createVNode(_sfc_main$8, {
                    metrics: model.metrics
                  }, null, 8, ["metrics"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeModels.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-8951e5ee"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "HomeStatsMedia",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const { buildPath, textFor } = useSiteContent();
    const sectionRef = useSectionReveal();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "section-shell"
      }, _attrs))} data-v-4b6d95c5><div class="container energy-grid panel" data-v-4b6d95c5><div class="energy-media" data-reveal data-v-4b6d95c5><img${ssrRenderAttr("src", __props.data.image)}${ssrRenderAttr("alt", unref(textFor)(__props.data.title))} data-v-4b6d95c5></div><div class="energy-copy" data-v-4b6d95c5><p class="eyebrow" data-reveal data-v-4b6d95c5>${ssrInterpolate(unref(textFor)(__props.data.label))}</p><h2 class="section-title" data-reveal data-v-4b6d95c5>${ssrInterpolate(unref(textFor)(__props.data.title))}</h2><p class="section-copy" data-reveal data-v-4b6d95c5>${ssrInterpolate(unref(textFor)(__props.data.body))}</p><div data-reveal data-v-4b6d95c5>`);
      _push(ssrRenderComponent(_sfc_main$8, {
        metrics: __props.data.metrics
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$7, {
        to: unref(buildPath)("energy.html"),
        variant: "secondary",
        "data-reveal": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(textFor)(__props.data.label))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(textFor)(__props.data.label)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeStatsMedia.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-4b6d95c5"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HomeServiceGrid",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const { textFor } = useSiteContent();
    const sectionRef = useSectionReveal();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "section-shell"
      }, _attrs))}><div class="container"><p class="eyebrow" data-reveal>${ssrInterpolate(unref(textFor)(__props.data.title))}</p><h2 class="section-title" data-reveal>${ssrInterpolate(unref(textFor)(__props.data.title))}</h2><p class="section-copy" data-reveal>${ssrInterpolate(unref(textFor)(__props.data.body))}</p><div class="content-grid" style="${ssrRenderStyle({ "margin-top": "26px" })}"><!--[-->`);
      ssrRenderList(__props.data.cards, (card) => {
        _push(`<article class="content-card" data-reveal><img${ssrRenderAttr("src", card.image)}${ssrRenderAttr("alt", unref(textFor)(card.title))}><div class="content-card-body"><h3 class="content-card-title">${ssrInterpolate(unref(textFor)(card.title))}</h3><p class="content-card-copy">${ssrInterpolate(unref(textFor)(card.body))}</p></div></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeServiceGrid.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HomeGlobalMap",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const { buildPath, textFor } = useSiteContent();
    const sectionRef = useSectionReveal();
    const activeTab = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "section-shell"
      }, _attrs))} data-v-6998cdd7><div class="container map-grid panel" data-v-6998cdd7><div class="map-copy" data-v-6998cdd7><p class="eyebrow" data-reveal data-v-6998cdd7>${ssrInterpolate(unref(textFor)(__props.data.title))}</p><h2 class="section-title" data-reveal data-v-6998cdd7>${ssrInterpolate(unref(textFor)(__props.data.title))}</h2><p class="section-copy" data-reveal data-v-6998cdd7>${ssrInterpolate(unref(textFor)(__props.data.body))}</p><div class="tab-row" data-reveal data-v-6998cdd7><!--[-->`);
      ssrRenderList(__props.data.tabs, (tab, index) => {
        _push(`<button type="button" class="${ssrRenderClass(["tab-button", { active: unref(activeTab) === index }])}" data-v-6998cdd7>${ssrInterpolate(unref(textFor)(tab.label))}</button>`);
      });
      _push(`<!--]--></div><div class="country-list" data-reveal data-v-6998cdd7><!--[-->`);
      ssrRenderList(__props.data.tabs[unref(activeTab)]?.countries ?? [], (country) => {
        _push(`<span data-v-6998cdd7>${ssrInterpolate(unref(textFor)(country))}</span>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_sfc_main$7, {
        to: unref(buildPath)("brand.html"),
        variant: "primary",
        "data-reveal": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(textFor)(__props.data.cta))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(textFor)(__props.data.cta)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="map-media" data-reveal data-v-6998cdd7><img${ssrRenderAttr("src", __props.data.image)}${ssrRenderAttr("alt", unref(textFor)(__props.data.title))} data-v-6998cdd7></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeGlobalMap.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6998cdd7"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { textFor } = useSiteContent();
    useSeoMeta(() => ({
      title: `Voyah | ${textFor(homePage.modelsTitle)}`,
      description: textFor(homePage.brandIntro.body)
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeHero = __nuxt_component_0;
      const _component_HomeBrandIntro = __nuxt_component_1;
      const _component_HomeModels = __nuxt_component_2;
      const _component_HomeStatsMedia = __nuxt_component_3;
      const _component_HomeServiceGrid = _sfc_main$2;
      const _component_HomeGlobalMap = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_HomeHero, {
        slides: unref(homePage).slides
      }, null, _parent));
      _push(ssrRenderComponent(_component_HomeBrandIntro, {
        data: unref(homePage).brandIntro
      }, null, _parent));
      _push(ssrRenderComponent(_component_HomeModels, {
        title: unref(homePage).modelsTitle,
        body: unref(homePage).modelsBody,
        models: unref(homePage).models
      }, null, _parent));
      _push(ssrRenderComponent(_component_HomeStatsMedia, {
        data: unref(homePage).energy
      }, null, _parent));
      _push(ssrRenderComponent(_component_HomeServiceGrid, {
        data: unref(homePage).service
      }, null, _parent));
      _push(ssrRenderComponent(_component_HomeGlobalMap, {
        data: unref(homePage).footprint
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[locale]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-bFbygOIz.js.map
