import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext, computed, watch, createVNode, openBlock, createBlock } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$a, u as useSectionReveal, a as _sfc_main$b } from "./MetricGrid-DoIzS4Ay.js";
import { u as useSiteContent, b as useSeoMeta } from "./useSiteContent-DsX9M3mb.js";
import { _ as _export_sfc, g as __nuxt_component_0$1, h as homePage } from "../server.mjs";
import { gsap } from "gsap";
import "E:/voyah/node_modules/hookable/dist/index.mjs";
import "E:/voyah/node_modules/klona/dist/index.mjs";
import "#internal/nuxt/paths";
import "E:/voyah/node_modules/defu/dist/defu.mjs";
import "E:/voyah/node_modules/@unhead/vue/dist/index.mjs";
import "E:/voyah/node_modules/ofetch/dist/node.mjs";
import "E:/voyah/node_modules/unctx/dist/index.mjs";
import "E:/voyah/node_modules/h3/dist/index.mjs";
import "vue-router";
import "E:/voyah/node_modules/cookie-es/dist/index.mjs";
import "E:/voyah/node_modules/destr/dist/index.mjs";
import "E:/voyah/node_modules/ohash/dist/index.mjs";
import "@vue/devtools-api";
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "HomeHero",
  __ssrInlineRender: true,
  props: {
    slides: {}
  },
  setup(__props) {
    const { buildPath, textFor } = useSiteContent();
    const activeIndex = ref(2);
    ref([]);
    const progressScale = ref(0);
    const heroRef = ref(null);
    const pointerX = ref(0);
    const pointerY = ref(0);
    const parallaxY = ref(0);
    const heroTitle = (slide) => textFor(slide.title).trim();
    const heroDescription = (slide) => textFor(slide.description).trim();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "heroRef",
        ref: heroRef,
        class: "home-hero",
        style: {
          "--hero-parallax-y": `${unref(parallaxY)}px`,
          "--hero-pointer-x": `${unref(pointerX)}px`,
          "--hero-pointer-y": `${unref(pointerY)}px`
        }
      }, _attrs))} data-v-0c70584c><!--[-->`);
      ssrRenderList(__props.slides, (slide, index2) => {
        _push(`<article class="${ssrRenderClass(["hero-slide", { active: unref(activeIndex) === index2 }])}" data-v-0c70584c><div class="hero-media" data-v-0c70584c><img${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", unref(textFor)(slide.title) || "Voyah")} class="hero-poster"${ssrRenderAttr("loading", unref(activeIndex) === index2 ? "eager" : "lazy")} decoding="async" data-v-0c70584c>`);
        if (slide.video) {
          _push(`<video class="hero-video"${ssrRenderAttr("poster", slide.image)} muted playsinline preload="metadata" data-v-0c70584c><source${ssrRenderAttr("src", slide.video)} type="video/mp4" data-v-0c70584c></video>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="hero-overlay" data-v-0c70584c></div><div class="container hero-content" data-v-0c70584c><div class="${ssrRenderClass([
          "hero-copy",
          {
            "hero-copy--logo": slide.logo,
            "hero-copy--logo-only": slide.logo && !heroTitle(slide)
          }
        ])}" data-v-0c70584c>`);
        if (slide.logo) {
          _push(`<img${ssrRenderAttr("src", slide.logo)}${ssrRenderAttr("alt", unref(textFor)(slide.title) || "Voyah")} class="hero-logo" data-v-0c70584c>`);
        } else {
          _push(`<!---->`);
        }
        if (heroTitle(slide)) {
          _push(`<h1 data-v-0c70584c>${ssrInterpolate(heroTitle(slide))}</h1>`);
        } else {
          _push(`<!---->`);
        }
        if (heroDescription(slide)) {
          _push(`<p data-v-0c70584c>${ssrInterpolate(heroDescription(slide))}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(textFor)(slide.primaryLabel).trim() || unref(textFor)(slide.secondaryLabel).trim()) {
          _push(`<div class="button-row" data-v-0c70584c>`);
          if (unref(textFor)(slide.primaryLabel).trim()) {
            _push(ssrRenderComponent(_sfc_main$a, {
              to: unref(buildPath)(slide.primarySlug),
              variant: "secondary"
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
          } else {
            _push(`<!---->`);
          }
          if (slide.secondarySlug && unref(textFor)(slide.secondaryLabel).trim()) {
            _push(ssrRenderComponent(_sfc_main$a, {
              to: unref(buildPath)(slide.secondarySlug),
              variant: "primary"
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
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="hero-controls" data-v-0c70584c><button type="button" class="hero-arrow" aria-label="Previous slide" data-v-0c70584c><svg viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-0c70584c><path d="M14.5 6.5L9 12L14.5 17.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" data-v-0c70584c></path></svg></button><div class="hero-dots" data-v-0c70584c><!--[-->`);
        ssrRenderList(__props.slides, (heroSlide, dotIndex) => {
          _push(`<button type="button" class="${ssrRenderClass(["hero-dot", { active: unref(activeIndex) === dotIndex }])}" data-v-0c70584c></button>`);
        });
        _push(`<!--]--></div><div class="hero-progress" aria-hidden="true" data-v-0c70584c><span class="hero-progress__bar" style="${ssrRenderStyle({ transform: `scaleX(${unref(progressScale)})` })}" data-v-0c70584c></span></div><button type="button" class="hero-arrow" aria-label="Next slide" data-v-0c70584c><svg viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-0c70584c><path d="M9.5 6.5L15 12L9.5 17.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" data-v-0c70584c></path></svg></button></div></div></article>`);
      });
      _push(`<!--]--></section>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeHero.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-0c70584c"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "HomeBrandIntro",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const { buildPath, textFor } = useSiteContent();
    const sectionRef = useSectionReveal({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "brand-section"
      }, _attrs))} data-v-e9473946><div class="brand-stage" data-reveal data-v-e9473946><img${ssrRenderAttr("src", __props.data.image)}${ssrRenderAttr("alt", unref(textFor)(__props.data.title))} class="brand-stage-image" data-v-e9473946><div class="brand-stage-overlay" data-v-e9473946></div><div class="brand-stage-copy" data-v-e9473946><h2 class="brand-title" data-v-e9473946>${ssrInterpolate(unref(textFor)(__props.data.title))}</h2><p class="brand-copy" data-v-e9473946>${ssrInterpolate(unref(textFor)(__props.data.body))}</p>`);
      _push(ssrRenderComponent(_sfc_main$a, {
        to: unref(buildPath)("brand.html"),
        variant: "secondary",
        class: "brand-button"
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
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeBrandIntro.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-e9473946"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "HomeModels",
  __ssrInlineRender: true,
  props: {
    title: {},
    body: {},
    models: {}
  },
  setup(__props) {
    const props = __props;
    const { buildPath, locale, textFor } = useSiteContent();
    const sectionRef = useSectionReveal({});
    const activeIndex = ref(0);
    const activeModel = computed(() => props.models[activeIndex.value] ?? props.models[0]);
    watch(activeIndex, () => {
      gsap.fromTo(
        ".model-stage-panel",
        { boxShadow: "0 0 0 rgba(17, 17, 17, 0)" },
        {
          boxShadow: "0 18px 34px rgba(17, 17, 17, 0.08)",
          duration: 0.24,
          yoyo: true,
          repeat: 1,
          ease: "power2.out"
        }
      );
    });
    const moreLabel = computed(() => {
      if (locale.value.code === "fr") return "En savoir plus";
      if (locale.value.code === "ar") return "اعرف المزيد";
      return "Learn more";
    });
    const driveLabel = computed(() => {
      if (locale.value.code === "fr") return "Réserver un essai";
      if (locale.value.code === "ar") return "احجز تجربة قيادة";
      return "Test drive";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "section-shell models-section"
      }, _attrs))} data-v-cebe0cea><div class="container" data-v-cebe0cea><h2 class="section-title section-title--dark" data-reveal data-v-cebe0cea>${ssrInterpolate(unref(textFor)(__props.title))}</h2><div class="model-switcher" data-reveal data-v-cebe0cea><!--[-->`);
      ssrRenderList(__props.models, (model, index2) => {
        _push(`<button type="button" class="${ssrRenderClass(["model-switch", { active: unref(activeIndex) === index2 }])}" data-v-cebe0cea>${ssrInterpolate(unref(textFor)(model.title))}</button>`);
      });
      _push(`<!--]--></div><div class="model-stage" data-reveal data-v-cebe0cea><div class="model-stage__viewer" data-v-cebe0cea><img${ssrRenderAttr("src", unref(activeModel).image)}${ssrRenderAttr("alt", unref(textFor)(unref(activeModel).title))} class="model-stage-image" data-v-cebe0cea></div><div class="model-stage__frame" data-v-cebe0cea><div class="model-stage-panel" data-v-cebe0cea><div class="model-stage-panel__content" data-v-cebe0cea><span class="model-category" data-v-cebe0cea>${ssrInterpolate(unref(textFor)(unref(activeModel).category))}</span><h3 data-v-cebe0cea>${ssrInterpolate(unref(textFor)(unref(activeModel).title))}</h3>`);
      _push(ssrRenderComponent(_sfc_main$b, {
        metrics: unref(activeModel).metrics
      }, null, _parent));
      _push(`<div class="model-actions" data-v-cebe0cea>`);
      _push(ssrRenderComponent(_sfc_main$a, {
        to: unref(buildPath)(unref(activeModel).slug),
        variant: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(moreLabel))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(moreLabel)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$a, {
        to: unref(buildPath)("book-drive.html"),
        variant: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(driveLabel))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(driveLabel)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeModels.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-cebe0cea"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "HomeStatsMedia",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const { locale, textFor } = useSiteContent();
    const sectionRef = useSectionReveal();
    const videoLabel = computed(() => {
      if (locale.value.code === "fr") return "Voir le film complet";
      if (locale.value.code === "ar") return "مشاهدة الفيديو الكامل";
      return "Watch the full film";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "energy-section"
      }, _attrs))} data-v-53ca7c2b><div class="container" data-v-53ca7c2b><h2 class="energy-title" data-reveal data-v-53ca7c2b>${ssrInterpolate(unref(textFor)(__props.data.title))}</h2><p class="energy-copy" data-reveal data-v-53ca7c2b>${ssrInterpolate(unref(textFor)(__props.data.body))}</p><div class="energy-video-cta" data-reveal data-v-53ca7c2b><button type="button" class="energy-video-button" data-v-53ca7c2b>${ssrInterpolate(unref(videoLabel))}</button></div><div class="energy-stats" data-reveal data-v-53ca7c2b><!--[-->`);
      ssrRenderList(__props.data.metrics, (metric) => {
        _push(`<div class="energy-stat" data-v-53ca7c2b><div class="energy-stat__value" data-v-53ca7c2b>${ssrInterpolate(metric.value)}</div><div class="energy-stat__label" data-v-53ca7c2b>${ssrInterpolate(unref(textFor)(metric.label))}</div></div>`);
      });
      _push(`<!--]--></div><div class="energy-stage" data-reveal data-v-53ca7c2b><img${ssrRenderAttr("src", __props.data.image)}${ssrRenderAttr("alt", unref(textFor)(__props.data.title))} class="energy-image" data-v-53ca7c2b><div class="energy-overlay" data-v-53ca7c2b></div><div class="energy-stage-action" data-v-53ca7c2b><button type="button" class="energy-stage-button" data-v-53ca7c2b><span data-v-53ca7c2b>${ssrInterpolate(unref(videoLabel))}</span><svg viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-53ca7c2b><path d="M9 7.5V16.5L16.5 12L9 7.5Z" fill="currentColor" data-v-53ca7c2b></path></svg></button></div></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeStatsMedia.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-53ca7c2b"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "HomeTechnology",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    const { textFor } = useSiteContent();
    const sectionRef = useSectionReveal({});
    const activeTab = ref(0);
    const activeTechnology = computed(() => props.data.tabs[activeTab.value] ?? props.data.tabs[0]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "technology-section"
      }, _attrs))} data-v-fb311418><div class="container" data-v-fb311418><h2 class="technology-title" data-reveal data-v-fb311418>${ssrInterpolate(unref(textFor)(__props.data.title))}</h2><p class="technology-copy" data-reveal data-v-fb311418>${ssrInterpolate(unref(textFor)(__props.data.body))}</p><div class="technology-desktop" data-reveal data-v-fb311418><div class="technology-stage" data-v-fb311418><!--[-->`);
      ssrRenderList(__props.data.tabs, (tab, index2) => {
        _push(`<div class="${ssrRenderClass(["technology-visual", { active: unref(activeTab) === index2 }])}" data-v-fb311418><img${ssrRenderAttr("src", tab.image)}${ssrRenderAttr("alt", unref(textFor)(tab.label))} data-v-fb311418><button type="button" class="technology-watch" data-v-fb311418><span data-v-fb311418>${ssrInterpolate(unref(textFor)(tab.cta))}</span><span class="technology-watch__play" data-v-fb311418><svg viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-fb311418><path d="M9 7.5V16.5L16.5 12L9 7.5Z" fill="currentColor" data-v-fb311418></path></svg></span></button></div>`);
      });
      _push(`<!--]--></div><div class="technology-panel" data-v-fb311418><div class="technology-tabs" data-v-fb311418><!--[-->`);
      ssrRenderList(__props.data.tabs, (tab, index2) => {
        _push(`<button type="button" class="${ssrRenderClass(["technology-tab", { active: unref(activeTab) === index2 }])}" data-v-fb311418>${ssrInterpolate(unref(textFor)(tab.label))}</button>`);
      });
      _push(`<!--]--></div><div class="technology-panel__body" data-v-fb311418><h3 data-v-fb311418>${ssrInterpolate(unref(textFor)(unref(activeTechnology).label))}</h3><div class="technology-tags" data-v-fb311418><!--[-->`);
      ssrRenderList(unref(activeTechnology).tags, (tag) => {
        _push(`<span class="technology-tag" data-v-fb311418>${ssrInterpolate(unref(textFor)(tag))}</span>`);
      });
      _push(`<!--]--></div></div></div></div><div class="technology-mobile" data-reveal data-v-fb311418><div class="technology-mobile__track" data-v-fb311418><!--[-->`);
      ssrRenderList(__props.data.tabs, (tab) => {
        _push(`<article class="technology-mobile__card" data-v-fb311418><div class="technology-mobile__media" data-v-fb311418><img${ssrRenderAttr("src", tab.image)}${ssrRenderAttr("alt", unref(textFor)(tab.label))} data-v-fb311418><button type="button" class="technology-watch technology-watch--mobile" data-v-fb311418><span data-v-fb311418>${ssrInterpolate(unref(textFor)(tab.cta))}</span><span class="technology-watch__play" data-v-fb311418><svg viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-fb311418><path d="M9 7.5V16.5L16.5 12L9 7.5Z" fill="currentColor" data-v-fb311418></path></svg></span></button></div><div class="technology-mobile__body" data-v-fb311418><h3 data-v-fb311418>${ssrInterpolate(unref(textFor)(tab.label))}</h3><div class="technology-tags" data-v-fb311418><!--[-->`);
        ssrRenderList(tab.tags, (tag) => {
          _push(`<span class="technology-tag" data-v-fb311418>${ssrInterpolate(unref(textFor)(tag))}</span>`);
        });
        _push(`<!--]--></div></div></article>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeTechnology.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-fb311418"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "HomeServiceGrid",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const { textFor } = useSiteContent();
    const sectionRef = useSectionReveal({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "section-shell service-section"
      }, _attrs))} data-v-493f9244><div class="container" data-v-493f9244><h2 class="section-title section-title--dark" data-reveal data-v-493f9244>${ssrInterpolate(unref(textFor)(__props.data.title))}</h2><p class="section-copy section-copy--dark" data-reveal data-v-493f9244>${ssrInterpolate(unref(textFor)(__props.data.body))}</p><div class="service-grid" data-v-493f9244><!--[-->`);
      ssrRenderList(__props.data.cards, (card) => {
        _push(`<article class="service-card" data-reveal data-v-493f9244><img${ssrRenderAttr("src", card.image)}${ssrRenderAttr("alt", unref(textFor)(card.title))} data-v-493f9244><div class="service-card-body" data-v-493f9244><h3 class="service-card-title" data-v-493f9244>${ssrInterpolate(unref(textFor)(card.title))}</h3></div></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeServiceGrid.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-493f9244"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "HomeCommunity",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const { buildPath, locale, textFor } = useSiteContent();
    const sectionRef = useSectionReveal({});
    const moreLabel = computed(() => {
      if (locale.value.code === "fr") return "Voir le détail";
      if (locale.value.code === "ar") return "عرض التفاصيل";
      return "View details";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "section-shell community-section"
      }, _attrs))} data-v-239ca84c><div class="container" data-v-239ca84c><h2 class="section-title section-title--dark" data-reveal data-v-239ca84c>${ssrInterpolate(unref(textFor)(__props.data.title))}</h2><p class="section-copy section-copy--dark" data-reveal data-v-239ca84c>${ssrInterpolate(unref(textFor)(__props.data.body))}</p><div class="community-grid desktop-grid" data-v-239ca84c><!--[-->`);
      ssrRenderList(__props.data.posts, (post) => {
        _push(`<article class="community-card" data-reveal data-v-239ca84c>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(buildPath)(post.slug),
          class: "community-card__link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="community-card__media" data-v-239ca84c${_scopeId}><img${ssrRenderAttr("src", post.image)}${ssrRenderAttr("alt", unref(textFor)(post.title))} data-v-239ca84c${_scopeId}></div><div class="community-card__body" data-v-239ca84c${_scopeId}><h3 data-v-239ca84c${_scopeId}>${ssrInterpolate(unref(textFor)(post.title))}</h3><p data-v-239ca84c${_scopeId}>${ssrInterpolate(unref(textFor)(post.body))}</p><span class="community-card__more" data-v-239ca84c${_scopeId}>${ssrInterpolate(unref(moreLabel))}</span></div>`);
            } else {
              return [
                createVNode("div", { class: "community-card__media" }, [
                  createVNode("img", {
                    src: post.image,
                    alt: unref(textFor)(post.title)
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("div", { class: "community-card__body" }, [
                  createVNode("h3", null, toDisplayString(unref(textFor)(post.title)), 1),
                  createVNode("p", null, toDisplayString(unref(textFor)(post.body)), 1),
                  createVNode("span", { class: "community-card__more" }, toDisplayString(unref(moreLabel)), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</article>`);
      });
      _push(`<!--]--></div><div class="community-slider mobile-grid" data-reveal data-v-239ca84c><div class="community-slider__track" data-v-239ca84c><!--[-->`);
      ssrRenderList(__props.data.posts, (post) => {
        _push(`<article class="community-card mobile-card" data-v-239ca84c>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(buildPath)(post.slug),
          class: "community-card__link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="community-card__media" data-v-239ca84c${_scopeId}><img${ssrRenderAttr("src", post.image)}${ssrRenderAttr("alt", unref(textFor)(post.title))} data-v-239ca84c${_scopeId}></div><div class="community-card__body" data-v-239ca84c${_scopeId}><h3 data-v-239ca84c${_scopeId}>${ssrInterpolate(unref(textFor)(post.title))}</h3><p data-v-239ca84c${_scopeId}>${ssrInterpolate(unref(textFor)(post.body))}</p><span class="community-card__more" data-v-239ca84c${_scopeId}>${ssrInterpolate(unref(moreLabel))}</span></div>`);
            } else {
              return [
                createVNode("div", { class: "community-card__media" }, [
                  createVNode("img", {
                    src: post.image,
                    alt: unref(textFor)(post.title)
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("div", { class: "community-card__body" }, [
                  createVNode("h3", null, toDisplayString(unref(textFor)(post.title)), 1),
                  createVNode("p", null, toDisplayString(unref(textFor)(post.body)), 1),
                  createVNode("span", { class: "community-card__more" }, toDisplayString(unref(moreLabel)), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</article>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeCommunity.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-239ca84c"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HomeGlobalMap",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const { buildPath, textFor } = useSiteContent();
    const sectionRef = useSectionReveal({});
    const activeTab = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "section-shell footprint-section"
      }, _attrs))} data-v-cbf66be5><div class="container" data-v-cbf66be5><h2 class="section-title" data-reveal data-v-cbf66be5>${ssrInterpolate(unref(textFor)(__props.data.title))}</h2><p class="section-copy" data-reveal data-v-cbf66be5>${ssrInterpolate(unref(textFor)(__props.data.body))}</p><div class="footprint-cta" data-reveal data-v-cbf66be5>`);
      _push(ssrRenderComponent(_sfc_main$a, {
        to: unref(buildPath)("brand.html"),
        variant: "secondary",
        class: "footprint-button"
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
      _push(`</div><div class="footprint-stage" data-reveal data-v-cbf66be5><div class="footprint-globe" data-v-cbf66be5><img${ssrRenderAttr("src", __props.data.image)}${ssrRenderAttr("alt", unref(textFor)(__props.data.title))} class="footprint-image" data-v-cbf66be5></div><div class="tab-row" data-v-cbf66be5><!--[-->`);
      ssrRenderList(__props.data.tabs, (tab, index2) => {
        _push(`<button type="button" class="${ssrRenderClass(["tab-button", { active: unref(activeTab) === index2 }])}" data-v-cbf66be5>${ssrInterpolate(unref(textFor)(tab.label))}</button>`);
      });
      _push(`<!--]--></div><div class="country-list" data-v-cbf66be5><!--[-->`);
      ssrRenderList(__props.data.tabs[unref(activeTab)]?.countries ?? [], (country) => {
        _push(`<span data-v-cbf66be5>${ssrInterpolate(unref(textFor)(country))}</span>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeGlobalMap.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-cbf66be5"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HomeQuickActions",
  __ssrInlineRender: true,
  setup(__props) {
    const { buildPath, locale } = useSiteContent();
    const driveLabel = computed(() => {
      if (locale.value.code === "fr") return "Essai";
      if (locale.value.code === "ar") return "تجربة قيادة";
      return "Test drive";
    });
    const serviceLabel = computed(() => {
      if (locale.value.code === "fr") return "Service";
      if (locale.value.code === "ar") return "الخدمة";
      return "Service";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "quick-actions desktop-only" }, _attrs))} data-v-3b4a5e32>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(buildPath)("book-drive.html"),
        class: "quick-action",
        "aria-label": unref(driveLabel),
        title: unref(driveLabel)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="quick-action__icon" aria-hidden="true" data-v-3b4a5e32${_scopeId}><svg viewBox="0 0 24 24" fill="none" data-v-3b4a5e32${_scopeId}><path d="M4.5 12.25C4.5 8.246 7.746 5 11.75 5H14.5L19 9.5V12.25C19 16.254 15.754 19.5 11.75 19.5C7.746 19.5 4.5 16.254 4.5 12.25Z" stroke="currentColor" stroke-width="1.4" data-v-3b4a5e32${_scopeId}></path><path d="M14 5.25V9.5H18.25" stroke="currentColor" stroke-width="1.4" data-v-3b4a5e32${_scopeId}></path><circle cx="11.75" cy="12.25" r="1.2" fill="currentColor" data-v-3b4a5e32${_scopeId}></circle></svg></span>`);
          } else {
            return [
              createVNode("span", {
                class: "quick-action__icon",
                "aria-hidden": "true"
              }, [
                (openBlock(), createBlock("svg", {
                  viewBox: "0 0 24 24",
                  fill: "none"
                }, [
                  createVNode("path", {
                    d: "M4.5 12.25C4.5 8.246 7.746 5 11.75 5H14.5L19 9.5V12.25C19 16.254 15.754 19.5 11.75 19.5C7.746 19.5 4.5 16.254 4.5 12.25Z",
                    stroke: "currentColor",
                    "stroke-width": "1.4"
                  }),
                  createVNode("path", {
                    d: "M14 5.25V9.5H18.25",
                    stroke: "currentColor",
                    "stroke-width": "1.4"
                  }),
                  createVNode("circle", {
                    cx: "11.75",
                    cy: "12.25",
                    r: "1.2",
                    fill: "currentColor"
                  })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="tel:4008888488" class="quick-action" aria-label="400-888-8488" title="400-888-8488" data-v-3b4a5e32><span class="quick-action__icon" aria-hidden="true" data-v-3b4a5e32><svg viewBox="0 0 24 24" fill="none" data-v-3b4a5e32><path d="M8.45 5.5H6.4C5.848 5.5 5.4 5.948 5.4 6.5C5.4 13.955 11.445 20 18.9 20C19.452 20 19.9 19.552 19.9 19V16.95C19.9 16.479 19.571 16.07 19.111 15.969L15.819 15.243C15.42 15.155 15.004 15.305 14.745 15.634L13.871 16.742C11.894 15.797 9.953 13.856 9.008 11.879L10.116 11.005C10.445 10.746 10.595 10.33 10.507 9.931L9.781 6.639C9.68 6.179 9.271 5.85 8.8 5.85L8.45 5.5Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" data-v-3b4a5e32></path></svg></span></a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(buildPath)("service.html"),
        class: "quick-action",
        "aria-label": unref(serviceLabel),
        title: unref(serviceLabel)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="quick-action__icon" aria-hidden="true" data-v-3b4a5e32${_scopeId}><svg viewBox="0 0 24 24" fill="none" data-v-3b4a5e32${_scopeId}><rect x="4.75" y="4.75" width="5.5" height="5.5" stroke="currentColor" stroke-width="1.4" data-v-3b4a5e32${_scopeId}></rect><rect x="13.75" y="4.75" width="5.5" height="5.5" stroke="currentColor" stroke-width="1.4" data-v-3b4a5e32${_scopeId}></rect><rect x="4.75" y="13.75" width="5.5" height="5.5" stroke="currentColor" stroke-width="1.4" data-v-3b4a5e32${_scopeId}></rect><path d="M14 14H16.25V16.25H18.5V19H14V14Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" data-v-3b4a5e32${_scopeId}></path></svg></span>`);
          } else {
            return [
              createVNode("span", {
                class: "quick-action__icon",
                "aria-hidden": "true"
              }, [
                (openBlock(), createBlock("svg", {
                  viewBox: "0 0 24 24",
                  fill: "none"
                }, [
                  createVNode("rect", {
                    x: "4.75",
                    y: "4.75",
                    width: "5.5",
                    height: "5.5",
                    stroke: "currentColor",
                    "stroke-width": "1.4"
                  }),
                  createVNode("rect", {
                    x: "13.75",
                    y: "4.75",
                    width: "5.5",
                    height: "5.5",
                    stroke: "currentColor",
                    "stroke-width": "1.4"
                  }),
                  createVNode("rect", {
                    x: "4.75",
                    y: "13.75",
                    width: "5.5",
                    height: "5.5",
                    stroke: "currentColor",
                    "stroke-width": "1.4"
                  }),
                  createVNode("path", {
                    d: "M14 14H16.25V16.25H18.5V19H14V14Z",
                    stroke: "currentColor",
                    "stroke-width": "1.4",
                    "stroke-linejoin": "round"
                  })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeQuickActions.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3b4a5e32"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { textFor } = useSiteContent();
    useSeoMeta({
      title: () => `Voyah | ${textFor(homePage.modelsTitle)}`,
      description: () => textFor(homePage.brandIntro.body)
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeHero = __nuxt_component_0;
      const _component_HomeBrandIntro = __nuxt_component_1;
      const _component_HomeModels = __nuxt_component_2;
      const _component_HomeStatsMedia = __nuxt_component_3;
      const _component_HomeTechnology = __nuxt_component_4;
      const _component_HomeServiceGrid = __nuxt_component_5;
      const _component_HomeCommunity = __nuxt_component_6;
      const _component_HomeGlobalMap = __nuxt_component_7;
      const _component_HomeQuickActions = __nuxt_component_8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "voyah-homepage" }, _attrs))} data-v-806e6d6d>`);
      _push(ssrRenderComponent(_component_HomeHero, {
        id: "hero",
        slides: unref(homePage).slides
      }, null, _parent));
      _push(ssrRenderComponent(_component_HomeBrandIntro, {
        id: "brand",
        data: unref(homePage).brandIntro
      }, null, _parent));
      _push(ssrRenderComponent(_component_HomeModels, {
        id: "models",
        title: unref(homePage).modelsTitle,
        body: unref(homePage).modelsBody,
        models: unref(homePage).models
      }, null, _parent));
      _push(ssrRenderComponent(_component_HomeStatsMedia, {
        id: "energy",
        data: unref(homePage).energy
      }, null, _parent));
      _push(ssrRenderComponent(_component_HomeTechnology, {
        id: "tech",
        data: unref(homePage).technology
      }, null, _parent));
      _push(ssrRenderComponent(_component_HomeServiceGrid, {
        id: "service",
        data: unref(homePage).service
      }, null, _parent));
      _push(ssrRenderComponent(_component_HomeCommunity, {
        id: "community",
        data: unref(homePage).community
      }, null, _parent));
      _push(ssrRenderComponent(_component_HomeGlobalMap, {
        id: "map",
        data: unref(homePage).footprint
      }, null, _parent));
      _push(ssrRenderComponent(_component_HomeQuickActions, null, null, _parent));
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-806e6d6d"]]);
export {
  index as default
};
//# sourceMappingURL=index-CVf2Ttge.js.map
