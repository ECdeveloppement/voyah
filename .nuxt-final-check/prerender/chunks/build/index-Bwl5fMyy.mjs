import { defineComponent, mergeProps, unref, computed, ref, watch, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'file://E:/voyah/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from 'file://E:/voyah/node_modules/vue/server-renderer/index.mjs';
import { u as useSiteContent, b as useSeoMeta } from './useSiteContent-DZMgAnrU.mjs';
import { j as modelsShowcase, k as homePage, _ as _export_sfc, m as modelsShowcaseViewLabel, e as __nuxt_component_0$1, i as t$1 } from './server.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { u as useSectionReveal, _ as _sfc_main$1$1, B as BrochureButton, s as sortedNewsItems, n as newsCategoryLabels } from './news-aRO4TP75.mjs';
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

const teaserImage = "/assets/updates/teaser-cover.png";
const teaserSlug = "Passion";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "HomeModelCards",
  __ssrInlineRender: true,
  props: {
    slides: {}
  },
  setup(__props) {
    const { buildPath, textFor } = useSiteContent();
    const downloadLabel = t$1("Download the brochure", "T\xE9l\xE9charger la brochure", "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0643\u062A\u064A\u0628");
    const isTeaser = (slide) => slide.primarySlug === teaserSlug;
    const cardImage = (slide) => isTeaser(slide) ? teaserImage : slide.image;
    const sectionRef = useSectionReveal({});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "home-models"
      }, _attrs))} data-v-21cff62e><div class="home-models__grid" data-v-21cff62e><!--[-->`);
      ssrRenderList(__props.slides, (slide) => {
        _push(`<article class="home-model-card" data-reveal data-v-21cff62e><div class="home-model-card__media" data-v-21cff62e>`);
        if (!isTeaser(slide)) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(buildPath)(slide.primarySlug),
            "aria-label": unref(textFor)(slide.title)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", cardImage(slide))}${ssrRenderAttr("alt", unref(textFor)(slide.title))} loading="lazy" decoding="async" data-v-21cff62e${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    src: cardImage(slide),
                    alt: unref(textFor)(slide.title),
                    loading: "lazy",
                    decoding: "async"
                  }, null, 8, ["src", "alt"])
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<div class="home-model-card__teaser" aria-hidden="true" data-v-21cff62e><img${ssrRenderAttr("src", cardImage(slide))} alt="" loading="lazy" decoding="async" data-v-21cff62e></div>`);
        }
        _push(`</div>`);
        if (!isTeaser(slide)) {
          _push(`<div class="home-model-card__body" data-v-21cff62e>`);
          if (slide.logo) {
            _push(`<img class="home-model-card__logo"${ssrRenderAttr("src", slide.logo)}${ssrRenderAttr("alt", unref(textFor)(slide.title))} data-v-21cff62e>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<p class="home-model-card__text" data-v-21cff62e>${ssrInterpolate(unref(textFor)(slide.description))}</p><div class="home-model-card__actions" data-v-21cff62e>`);
          _push(ssrRenderComponent(_sfc_main$1$1, {
            to: unref(buildPath)(slide.primarySlug),
            variant: "primary"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(textFor)(slide.primaryLabel))} ${ssrInterpolate(unref(textFor)(slide.title))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(textFor)(slide.primaryLabel)) + " " + toDisplayString(unref(textFor)(slide.title)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          if (slide.secondarySlug) {
            _push(ssrRenderComponent(_sfc_main$1$1, {
              to: `${unref(buildPath)(slide.secondarySlug)}?model=${encodeURIComponent(slide.primarySlug)}`,
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
          _push(ssrRenderComponent(BrochureButton, {
            slug: slide.primarySlug,
            label: unref(downloadLabel)
          }, null, _parent));
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</article>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeModelCards.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const HomeModelCards = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-21cff62e"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<span${ssrRenderAttrs(_attrs)}></span>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@tresjs/nuxt/dist/runtime/TresCanvas.server.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = publicAssetsURL("/voyah-resources/images/showcase/more.png");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "HomeModelsShowcase",
  __ssrInlineRender: true,
  props: {
    entries: {}
  },
  setup(__props) {
    const props = __props;
    const entries = computed(() => props.entries.filter((item) => !item.hidden));
    const { buildPath, locale, textFor } = useSiteContent();
    const sectionRef = useSectionReveal({});
    ref(null);
    ref(null);
    const vehicleSize = ref({ width: 13.8, height: 4.75 });
    const cameraDistance = ref(15);
    const viewLabel = modelsShowcaseViewLabel;
    const active = ref(0);
    const trackIndex = ref(1);
    const animate = ref(true);
    const isRtl = computed(() => locale.value.dir === "rtl");
    const model = computed(() => {
      var _a;
      return (_a = entries.value[active.value]) != null ? _a : entries.value[0];
    });
    const looped = computed(() => {
      const list = entries.value;
      if (list.length < 2) return list.map((item, index) => ({ ...item, key: `solo-${index}` }));
      return [
        { ...list[list.length - 1], key: "clone-last" },
        ...list.map((item, index) => ({ ...item, key: `real-${index}` })),
        { ...list[0], key: "clone-first" }
      ];
    });
    const trackStyle = computed(() => ({
      transform: `translateX(${(isRtl.value ? 1 : -1) * trackIndex.value * 100}%)`,
      transition: animate.value ? "transform 0.65s cubic-bezier(0.25, 0.1, 0.25, 1)" : "none"
    }));
    const leftLabel = computed(() => {
      if (locale.value.code === "fr") return isRtl.value ? "Mod\xE8le suivant" : "Mod\xE8le pr\xE9c\xE9dent";
      if (locale.value.code === "ar") return isRtl.value ? "\u0627\u0644\u0637\u0631\u0627\u0632 \u0627\u0644\u062A\u0627\u0644\u064A" : "\u0627\u0644\u0637\u0631\u0627\u0632 \u0627\u0644\u0633\u0627\u0628\u0642";
      return isRtl.value ? "Next model" : "Previous model";
    });
    const rightLabel = computed(() => {
      if (locale.value.code === "fr") return isRtl.value ? "Mod\xE8le pr\xE9c\xE9dent" : "Mod\xE8le suivant";
      if (locale.value.code === "ar") return isRtl.value ? "\u0627\u0644\u0637\u0631\u0627\u0632 \u0627\u0644\u0633\u0627\u0628\u0642" : "\u0627\u0644\u0637\u0631\u0627\u0632 \u0627\u0644\u062A\u0627\u0644\u064A";
      return isRtl.value ? "Previous model" : "Next model";
    });
    const isActiveTab = (item) => {
      var _a;
      return ((_a = entries.value[active.value]) == null ? void 0 : _a.slug) === item.slug;
    };
    const settleWithoutAnimation = (index) => {
      animate.value = false;
      trackIndex.value = index;
      requestAnimationFrame(() => {
        animate.value = true;
      });
    };
    watch(
      () => entries.value.length,
      (total) => {
        if (active.value >= total) active.value = 0;
        settleWithoutAnimation(Math.min(Math.max(trackIndex.value, 1), total));
      }
    );
    watch(
      active,
      () => {
        return;
      },
      { flush: "post" }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TresCanvas = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "home-models"
      }, _attrs))} data-v-77002572><div class="home-models__tabs" data-v-77002572><!--[-->`);
      ssrRenderList(unref(entries), (item) => {
        _push(`<button type="button" class="${ssrRenderClass([{ "home-models__tab--active": isActiveTab(item) }, "home-models__tab"])}" data-v-77002572>${ssrInterpolate(item.word)}</button>`);
      });
      _push(`<!--]--></div><div class="home-models__stage" data-v-77002572><div class="home-models__scene" aria-hidden="true" data-v-77002572>`);
      _push(ssrRenderComponent(_component_TresCanvas, {
        class: "home-models__scene-canvas",
        dpr: [1, 1.5],
        "fps-limit": 30,
        "render-mode": "on-demand",
        "clear-color": "#000000",
        "clear-alpha": 0,
        alpha: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<TresPerspectiveCamera${ssrRenderAttr("position", [0, 0.32, cameraDistance.value])}${ssrRenderAttr("fov", 35)} data-v-77002572${_scopeId}></TresPerspectiveCamera><TresAmbientLight${ssrRenderAttr("intensity", 1.5)} data-v-77002572${_scopeId}></TresAmbientLight><TresDirectionalLight${ssrRenderAttr("position", [-5, 7, 8])}${ssrRenderAttr("intensity", 2.2)} data-v-77002572${_scopeId}></TresDirectionalLight><TresDirectionalLight${ssrRenderAttr("position", [5, 1, -4])}${ssrRenderAttr("intensity", 0.8)} data-v-77002572${_scopeId}></TresDirectionalLight><TresMesh${ssrRenderAttr("position", [0, -vehicleSize.value.height * 0.38, 0])}${ssrRenderAttr("scale", [vehicleSize.value.width * 0.46, 0.025, vehicleSize.value.width * 0.12])} data-v-77002572${_scopeId}><TresSphereGeometry${ssrRenderAttr("args", [1, 48, 24])} data-v-77002572${_scopeId}></TresSphereGeometry><TresMeshStandardMaterial color="#60747b"${ssrRenderAttr("transparent", true)}${ssrRenderAttr("opacity", 0.18)}${ssrRenderAttr("roughness", 0.95)} data-v-77002572${_scopeId}></TresMeshStandardMaterial></TresMesh>`);
          } else {
            return [
              createVNode("TresPerspectiveCamera", {
                position: [0, 0.32, cameraDistance.value],
                fov: 35
              }, null, 8, ["position"]),
              createVNode("TresAmbientLight", { intensity: 1.5 }),
              createVNode("TresDirectionalLight", {
                position: [-5, 7, 8],
                intensity: 2.2
              }),
              createVNode("TresDirectionalLight", {
                position: [5, 1, -4],
                intensity: 0.8
              }),
              createVNode("TresMesh", {
                position: [0, -vehicleSize.value.height * 0.38, 0],
                scale: [vehicleSize.value.width * 0.46, 0.025, vehicleSize.value.width * 0.12]
              }, [
                createVNode("TresSphereGeometry", { args: [1, 48, 24] }),
                createVNode("TresMeshStandardMaterial", {
                  color: "#60747b",
                  transparent: true,
                  opacity: 0.18,
                  roughness: 0.95
                })
              ], 8, ["position", "scale"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button type="button" class="home-models__arrow home-models__arrow--left"${ssrRenderAttr("aria-label", unref(leftLabel))} data-v-77002572> \u2039 </button><div class="home-models__swiper" data-v-77002572><div class="home-models__wrapper" style="${ssrRenderStyle(unref(trackStyle))}" data-v-77002572><!--[-->`);
      ssrRenderList(unref(looped), (item) => {
        _push(`<div class="${ssrRenderClass([{ "home-models__slide--strong-name": ["FREE", "DREAM", "COURAGE", "PASSION"].includes(item.word) }, "home-models__slide"])}" data-v-77002572><div class="home-models__bg-word" data-v-77002572>${ssrInterpolate(item.word)}</div><div class="home-models__car" data-v-77002572><img class="home-models__fallback"${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", unref(textFor)(item.name))} loading="lazy" decoding="async" data-v-77002572></div></div>`);
      });
      _push(`<!--]--></div></div><button type="button" class="home-models__arrow home-models__arrow--right"${ssrRenderAttr("aria-label", unref(rightLabel))} data-v-77002572> \u203A </button></div><div class="home-models__meta" data-v-77002572><div class="home-models__name-wrap" data-v-77002572><div class="home-models__name-box" data-v-77002572><img class="home-models__name-logo"${ssrRenderAttr("src", unref(model).logo)}${ssrRenderAttr("alt", unref(model).word)} data-v-77002572><h3 class="home-models__name" data-v-77002572>${ssrInterpolate(unref(textFor)(unref(model).name))}</h3></div><a class="home-models__view"${ssrRenderAttr("href", unref(buildPath)(unref(model).slug))} data-v-77002572><span data-v-77002572>${ssrInterpolate(unref(textFor)(unref(viewLabel)))}</span><img${ssrRenderAttr("src", _imports_0)} alt="" aria-hidden="true" data-v-77002572></a></div><div class="home-models__stats" data-v-77002572><!--[-->`);
      ssrRenderList(unref(model).stats, (stat, index) => {
        _push(`<div class="home-models__stat" data-v-77002572><div class="home-models__stat-value" data-v-77002572>${ssrInterpolate(stat.value)}</div><span data-v-77002572>${ssrInterpolate(unref(textFor)(stat.label))}</span></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeModelsShowcase.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const HomeModelsShowcase = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-77002572"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HomeNews",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, buildPath, textFor } = useSiteContent();
    const eyebrow = t$1("News", "Actualit\xE9s", "\u0627\u0644\u0623\u062E\u0628\u0627\u0631");
    const title = t$1("Latest updates", "Derni\xE8res actualit\xE9s", "\u0622\u062E\u0631 \u0627\u0644\u062A\u062D\u062F\u064A\u062B\u0627\u062A");
    const moreLabel = t$1("Learn more", "En savoir plus", "\u0627\u0639\u0631\u0641 \u0627\u0644\u0645\u0632\u064A\u062F");
    const readLabel = t$1("Read the article", "Lire l\u2019article", "\u0627\u0642\u0631\u0623 \u0627\u0644\u0645\u0642\u0627\u0644");
    const items = computed(() => sortedNewsItems().slice(0, 3));
    const articlePath = (item) => {
      var _a;
      return buildPath((_a = item.page) != null ? _a : "news.html");
    };
    const formatDate = (iso) => new Intl.DateTimeFormat(locale.value.code, { day: "numeric", month: "short", year: "numeric" }).format(
      /* @__PURE__ */ new Date(`${iso}T00:00:00`)
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "home-news" }, _attrs))} data-v-3d0dafaf><div class="container" data-v-3d0dafaf><div class="home-news__header" data-v-3d0dafaf><div data-v-3d0dafaf><p class="home-news__eyebrow" data-v-3d0dafaf>${ssrInterpolate(unref(textFor)(unref(eyebrow)))}</p><h2 class="home-news__title" data-v-3d0dafaf>${ssrInterpolate(unref(textFor)(unref(title)))}</h2></div><span class="home-news__more home-news__more--static" data-v-3d0dafaf>${ssrInterpolate(unref(textFor)(unref(moreLabel)))}</span></div><div class="home-news__grid" data-v-3d0dafaf><!--[-->`);
      ssrRenderList(unref(items), (item, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.id,
          to: articlePath(item),
          class: "home-news__card"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="home-news__media" style="${ssrRenderStyle({ backgroundImage: `url('${item.image}')` })}" data-v-3d0dafaf${_scopeId}>`);
              if (index === 0) {
                _push2(`<span class="home-news__play" aria-hidden="true" data-v-3d0dafaf${_scopeId}><svg viewBox="0 0 24 24" fill="currentColor" data-v-3d0dafaf${_scopeId}><path d="M8 5v14l11-7z" data-v-3d0dafaf${_scopeId}></path></svg></span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="home-news__body" data-v-3d0dafaf${_scopeId}><div class="home-news__meta" data-v-3d0dafaf${_scopeId}><span class="home-news__category" data-v-3d0dafaf${_scopeId}>${ssrInterpolate(unref(textFor)(unref(newsCategoryLabels)[item.category]))}</span><span class="home-news__date" data-v-3d0dafaf${_scopeId}>${ssrInterpolate(formatDate(item.date))}</span></div><h3 data-v-3d0dafaf${_scopeId}>${ssrInterpolate(unref(textFor)(item.title))}</h3><p data-v-3d0dafaf${_scopeId}>${ssrInterpolate(unref(textFor)(item.excerpt))}</p><span class="home-news__link" data-v-3d0dafaf${_scopeId}>${ssrInterpolate(unref(textFor)(unref(readLabel)))}</span></div>`);
            } else {
              return [
                createVNode("div", {
                  class: "home-news__media",
                  style: { backgroundImage: `url('${item.image}')` }
                }, [
                  index === 0 ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "home-news__play",
                    "aria-hidden": "true"
                  }, [
                    (openBlock(), createBlock("svg", {
                      viewBox: "0 0 24 24",
                      fill: "currentColor"
                    }, [
                      createVNode("path", { d: "M8 5v14l11-7z" })
                    ]))
                  ])) : createCommentVNode("", true)
                ], 4),
                createVNode("div", { class: "home-news__body" }, [
                  createVNode("div", { class: "home-news__meta" }, [
                    createVNode("span", { class: "home-news__category" }, toDisplayString(unref(textFor)(unref(newsCategoryLabels)[item.category])), 1),
                    createVNode("span", { class: "home-news__date" }, toDisplayString(formatDate(item.date)), 1)
                  ]),
                  createVNode("h3", null, toDisplayString(unref(textFor)(item.title)), 1),
                  createVNode("p", null, toDisplayString(unref(textFor)(item.excerpt)), 1),
                  createVNode("span", { class: "home-news__link" }, toDisplayString(unref(textFor)(unref(readLabel))), 1)
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeNews.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HomeNews = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3d0dafaf"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HomeVideoHero",
  __ssrInlineRender: true,
  props: {
    video: { default: "/assets/qatar/videos/main-video2-compress.mp4" },
    poster: { default: "/assets/qatar/images/main-vover2.webp" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "home-hero-video" }, _attrs))} data-v-019d213d><video class="home-hero-video__media"${ssrRenderAttr("poster", __props.poster)} muted autoplay playsinline loop preload="metadata" data-v-019d213d><source${ssrRenderAttr("src", __props.video)} type="video/mp4" data-v-019d213d></video><div class="home-hero-video__top" data-v-019d213d></div><div class="home-hero-video__bottom" data-v-019d213d></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeVideoHero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HomeVideoHero = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-019d213d"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { textFor } = useSiteContent();
    const homeTitle = () => `Voyah | ${textFor(homePage.modelsTitle)}`;
    const homeDescription = () => textFor(homePage.slides[0].description);
    useSeoMeta({
      title: homeTitle,
      description: homeDescription,
      ogTitle: homeTitle,
      ogDescription: homeDescription,
      twitterTitle: homeTitle,
      twitterDescription: homeDescription
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "voyah-homepage" }, _attrs))}>`);
      _push(ssrRenderComponent(HomeVideoHero, null, null, _parent));
      _push(ssrRenderComponent(HomeModelsShowcase, { entries: unref(modelsShowcase) }, null, _parent));
      _push(ssrRenderComponent(HomeModelCards, {
        slides: unref(homePage).slides
      }, null, _parent));
      _push(ssrRenderComponent(HomeNews, null, null, _parent));
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

export { _sfc_main as default };
//# sourceMappingURL=index-Bwl5fMyy.mjs.map
