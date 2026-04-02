import { defineComponent, mergeProps, useSSRContext, ref, computed, watch, unref, createSlots, withCtx, createTextVNode, toDisplayString, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderSlot, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { u as useSectionReveal, _ as _sfc_main$7, a as _sfc_main$8 } from "./MetricGrid-rQeQhs47.js";
import { u as useSiteContent, a as useSeoMeta } from "./useSiteContent-DsUNBFs_.js";
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
    logo: {},
    align: { default: "start" },
    compact: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["page-hero", `page-hero--${__props.align}`, { "page-hero--compact": __props.compact }]
      }, _attrs))}><div class="page-hero-media"><img${ssrRenderAttr("src", __props.image)}${ssrRenderAttr("alt", __props.title)}></div><div class="page-hero-overlay"></div><div class="page-hero-gradient"></div><div class="page-hero-content"><div class="container"><div class="page-hero-shell"><div class="page-hero-copy">`);
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
        panelTitle: copy("Brand role", "Role de la marque", "دور العلامة"),
        panelBody: copy(
          "Rooted in Chinese culture, Voyah blends Chinese elegance with modern technology.",
          "Enracinee dans la culture chinoise, Voyah mele l elegance chinoise a la technologie moderne.",
          "تنطلق Voyah من الثقافة الصينية وتمزج بين الأناقة الصينية والتكنولوجيا الحديثة."
        ),
        ctaTitle: copy("Brand system", "Systeme de marque", "منظومة العلامة"),
        ctaHeadline: copy(
          "A premium intelligent new-energy brand with Chinese cultural confidence",
          "Une marque haut de gamme a energies nouvelles intelligentes avec une forte confiance culturelle chinoise",
          "علامة راقية ذكية للطاقة الجديدة بثقة ثقافية صينية واضحة"
        ),
        ctaBody: copy(
          "Voyah is committed to creating premium new-energy vehicles with Chinese cultural depth and intelligent character.",
          "Voyah s engage a creer des vehicules premium a energie nouvelle avec une profondeur culturelle chinoise et un caractere intelligent.",
          "تلتزم Voyah بابتكار مركبات فاخرة للطاقة الجديدة تحمل عمقاً ثقافياً صينياً وطابعاً ذكياً."
        )
      },
      "book-drive.html": {
        tone: "drive",
        heroAlign: "start",
        compactHero: true,
        showMeta: false,
        panelTitle: copy("Booking path", "Parcours de reservation", "مسار الحجز"),
        panelBody: copy(
          "Selection, store coordination, and the first ownership touchpoint are treated as one connected flow.",
          "La selection, la coordination magasin et le premier point de contact de possession sont traites comme un seul flux.",
          "يُتعامل مع الاختيار وتنسيق المعرض وأول نقطة تواصل للملكية كمسار واحد."
        ),
        ctaTitle: copy("Test drive", "Essai", "تجربة القيادة"),
        ctaHeadline: copy(
          "Move from discovery to visit planning through a calm premium journey",
          "Passez de la decouverte a la planification de visite dans le meme parcours premium",
          "انتقل من الاكتشاف إلى تخطيط الزيارة ضمن رحلة فاخرة هادئة"
        ),
        ctaBody: copy(
          "A calm premium journey helps users move smoothly from vehicle discovery to visit planning.",
          "Une experience premium et calme aide l utilisateur a passer en douceur de la decouverte a la planification de visite.",
          "تساعد الرحلة الفاخرة الهادئة المستخدم على الانتقال بسلاسة من اكتشاف السيارة إلى تخطيط الزيارة."
        )
      },
      "store.html": {
        tone: "store",
        heroAlign: "start",
        compactHero: false,
        showMeta: true,
        panelTitle: copy("Store network", "Reseau de magasins", "شبكة المعارض"),
        panelValue: "360°",
        panelBody: copy(
          "The store center connects discovery, consultation, booking, delivery, and ownership support as one premium journey.",
          "Le centre de magasins relie découverte, conseil, réservation, livraison et accompagnement comme un seul parcours premium.",
          "يربط مركز المعارض بين الاكتشاف والاستشارة والحجز والتسليم ودعم الملكية كرحلة فاخرة واحدة."
        ),
        ctaTitle: copy("Store center", "Centre de magasins", "مركز المعارض"),
        ctaHeadline: copy(
          "A premium space system spanning arrival, consultation, and handover",
          "Un système d’espaces premium couvrant l accueil, le conseil et la remise",
          "نظام مساحات فاخرة يغطي الاستقبال والاستشارة والتسليم"
        ),
        ctaBody: copy(
          "Voyah store environments are designed to make the transition from vehicle interest to ownership feel calm, guided, and premium.",
          "Les environnements de magasin Voyah sont conçus pour rendre le passage de l’intérêt pour le véhicule à la possession plus calme, guidé et premium.",
          "صممت بيئات معارض Voyah لجعل الانتقال من الاهتمام بالمركبة إلى الملكية أكثر هدوءاً وتوجيهاً وطابعاً فاخراً."
        )
      },
      "service.html": {
        tone: "default",
        heroAlign: "start",
        compactHero: false,
        showMeta: false,
        panelTitle: copy("Service promise", "Promesse de service", "وعد الخدمة"),
        panelValue: "7×24",
        panelBody: copy(
          "Every touchpoint is designed around sincere reception, ceremonial delivery, all-day protection, and professional support.",
          "Chaque point de contact est pense autour d un accueil sincere, d une livraison ceremonielle, d une protection continue et d un soutien professionnel.",
          "صُممت كل نقطة تواصل حول استقبال صادق وتسليم احتفالي وحماية مستمرة ودعم مهني."
        ),
        ctaTitle: copy("Voyah Service", "Service Voyah", "خدمات Voyah"),
        ctaHeadline: copy(
          "You focus on chasing freedom and dreams while Voyah focuses on careful protection",
          "Vous poursuivez la liberte et les reves pendant que Voyah se concentre sur une protection attentive",
          "أنت تنطلق نحو الحرية والأحلام بينما تركز Voyah على الحماية الدقيقة"
        ),
        ctaBody: copy(
          "Voyah Service follows a wholehearted service philosophy and is committed to delivering a trusted full-journey ownership experience.",
          "Voyah Service suit une philosophie de service entierement devouee et s engage a offrir une experience de possession digne de confiance sur l ensemble du parcours.",
          "تلتزم Voyah Service بفلسفة خدمة قائمة على الإخلاص الكامل وتهدف إلى تقديم تجربة ملكية موثوقة عبر الرحلة بأكملها."
        )
      },
      "energy.html": {
        tone: "default",
        heroAlign: "start",
        compactHero: false,
        showMeta: false,
        panelTitle: copy("Energy network", "Reseau energie", "شبكة الطاقة"),
        panelValue: "1.54M+",
        panelBody: copy(
          "The energy layer combines charging scenes, partner infrastructure, and digital guidance into one connected ecosystem.",
          "La couche energie combine scenes de recharge, infrastructures partenaires et guidage numerique dans un ecosysteme unique.",
          "تجمع منظومة الطاقة بين مشاهد الشحن والبنية التحتية الشريكة والإرشاد الرقمي في نظام مترابط واحد."
        ),
        ctaTitle: copy("Voyah Energy", "Energie Voyah", "طاقة Voyah"),
        ctaHeadline: copy(
          "A connected energy ecosystem for daily driving and long-distance use",
          "Un ecosysteme energie connecte pour l usage quotidien et les longs trajets",
          "منظومة طاقة مترابطة للاستخدام اليومي وللرحلات الطويلة"
        ),
        ctaBody: copy(
          "Voyah Energy links charging resources, supercharging capability, and digital route guidance to support every ownership rhythm.",
          "Voyah Energy relie les ressources de recharge, la recharge ultra rapide et le guidage numerique pour soutenir chaque rythme d usage.",
          "تربط طاقة Voyah بين موارد الشحن والقدرة على الشحن السريع والتوجيه الرقمي لدعم كل أنماط الاستخدام."
        )
      }
    };
    const defaultTheme = {
      tone: "default",
      heroAlign: "start",
      compactHero: false,
      showMeta: false,
      panelTitle: copy("Page chapter", "Chapitre", "فصل الصفحة"),
      panelBody: copy(
        "Image, information, and service touchpoints stay aligned within one calm premium page rhythm.",
        "L image, l information et les points de service restent alignes dans un meme rythme premium apaisé.",
        "تبقى الصورة والمعلومة ونقاط الخدمة منسجمة ضمن إيقاع فاخر وهادئ واحد للصفحة."
      ),
      ctaTitle: copy("More from Voyah", "Plus de Voyah", "المزيد من Voyah"),
      ctaHeadline: copy(
        "Continue exploring the broader Voyah brand, service, and ownership system",
        "Poursuivez l exploration de l univers Voyah, de ses services et de son experience de possession",
        "واصل استكشاف منظومة Voyah الأوسع للعلامة والخدمة وتجربة الملكية"
      ),
      ctaBody: copy(
        "Each page connects product understanding, service access, and brand storytelling through one continuous premium experience.",
        "Chaque page relie la comprehension du produit, l acces au service et le recit de marque dans une experience premium continue.",
        "تربط كل صفحة بين فهم المنتج والوصول إلى الخدمة وسرد العلامة ضمن تجربة فاخرة متواصلة."
      )
    };
    const theme = computed(() => themeMap[props.page.slug] ?? defaultTheme);
    const displayMetrics = computed(() => {
      if (props.page.metrics?.length) {
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
    const panelValue = computed(() => theme.value.panelValue ?? `${props.page.blocks.length}`.padStart(2, "0"));
    watch(
      sectionLinks,
      (links) => {
        activeSection.value = links[0]?.id ?? "";
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["info-page", `info-page--${unref(theme).tone}`]
      }, _attrs))} data-v-815849c8>`);
      _push(ssrRenderComponent(_sfc_main$6, {
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
        } : void 0,
        unref(theme).showMeta ? {
          name: "meta",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="hero-panel" data-reveal data-v-815849c8${_scopeId}><div class="hero-panel__label" data-v-815849c8${_scopeId}>${ssrInterpolate(unref(textFor)(unref(theme).panelTitle))}</div><div class="hero-panel__value" data-v-815849c8${_scopeId}>${ssrInterpolate(unref(panelValue))}</div><p class="hero-panel__copy" data-v-815849c8${_scopeId}>${ssrInterpolate(unref(textFor)(unref(theme).panelBody))}</p></div>`);
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
      _push(`<section class="info-page-nav" data-v-815849c8><div class="container info-page-nav__inner" data-v-815849c8><!--[-->`);
      ssrRenderList(unref(sectionLinks), (link) => {
        _push(`<a${ssrRenderAttr("href", `#${link.id}`)} class="${ssrRenderClass(["info-page-nav__link", { active: unref(activeSection) === link.id }])}" data-v-815849c8>${ssrInterpolate(link.label)}</a>`);
      });
      _push(`<!--]--></div></section>`);
      if (unref(displayMetrics).length) {
        _push(`<section class="section-shell info-metrics-shell" data-v-815849c8><div class="container" data-v-815849c8>`);
        _push(ssrRenderComponent(_sfc_main$8, { metrics: unref(displayMetrics) }, null, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="info-features" data-v-815849c8><!--[-->`);
      ssrRenderList(__props.page.blocks, (block, index) => {
        _push(`<div${ssrRenderAttr("id", unref(sectionLinks)[index]?.id)} class="${ssrRenderClass(["info-feature", { reverse: index % 2 === 1 }])}" data-v-815849c8><div class="container info-feature__grid" data-v-815849c8><div class="info-feature__media" data-reveal data-v-815849c8><div class="info-feature__media-shell" data-v-815849c8><img${ssrRenderAttr("src", block.image)}${ssrRenderAttr("alt", unref(textFor)(block.title))} data-v-815849c8><div class="info-feature__badge" data-v-815849c8>${ssrInterpolate(chapterLabel(index))}</div></div></div><article class="info-feature__copy" data-reveal data-v-815849c8><p class="info-feature__kicker" data-v-815849c8>${ssrInterpolate(chapterLabel(index))}</p><h2 class="info-feature__title" data-v-815849c8>${ssrInterpolate(unref(textFor)(block.title))}</h2><p class="info-feature__body" data-v-815849c8>${ssrInterpolate(unref(textFor)(block.body))}</p></article></div></div>`);
      });
      _push(`<!--]--></section>`);
      if (__props.page.ctaSlug && __props.page.ctaLabel) {
        _push(`<section class="section-shell info-cta-shell" data-v-815849c8><div class="container" data-v-815849c8><div class="info-cta" data-reveal data-v-815849c8><p class="info-cta__kicker" data-v-815849c8>${ssrInterpolate(unref(textFor)(unref(theme).ctaTitle))}</p><h2 class="info-cta__headline" data-v-815849c8>${ssrInterpolate(unref(textFor)(unref(theme).ctaHeadline))}</h2><p class="info-cta__copy" data-v-815849c8>${ssrInterpolate(unref(textFor)(unref(theme).ctaBody))}</p>`);
        if (__props.page.ctaSlug && __props.page.ctaLabel) {
          _push(`<div class="button-row" data-v-815849c8>`);
          _push(ssrRenderComponent(_sfc_main$7, {
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/InfoPage.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const InfoPage = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-815849c8"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "legal-page" }, _attrs))} data-v-eea4e5dc>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        eyebrow: unref(textFor)(__props.page.eyebrow),
        title: unref(textFor)(__props.page.title),
        summary: unref(textFor)(__props.page.summary),
        image: "/static/assets/world-fec50d02.jpg",
        align: "start",
        compact: ""
      }, null, _parent));
      _push(`<section class="legal-anchor-bar" data-v-eea4e5dc><div class="container legal-anchor-bar__inner" data-v-eea4e5dc><!--[-->`);
      ssrRenderList(__props.page.sections, (section, index) => {
        _push(`<a${ssrRenderAttr("href", `#legal-${index + 1}`)} class="${ssrRenderClass(["legal-anchor", { active: unref(activeSection) === `legal-${index + 1}` }])}" data-v-eea4e5dc>${ssrInterpolate(unref(textFor)(section.title))}</a>`);
      });
      _push(`<!--]--></div></section><section class="section-shell legal-page-shell" data-v-eea4e5dc><div class="container legal-stack" data-v-eea4e5dc><!--[-->`);
      ssrRenderList(__props.page.sections, (section, index) => {
        _push(`<article${ssrRenderAttr("id", `legal-${index + 1}`)} class="legal-card" data-reveal data-v-eea4e5dc><div class="legal-card__index" data-v-eea4e5dc>0${ssrInterpolate(index + 1)}</div><div class="legal-card__body" data-v-eea4e5dc><h2 data-v-eea4e5dc>${ssrInterpolate(unref(textFor)(section.title))}</h2><!--[-->`);
        ssrRenderList(section.paragraphs, (paragraph) => {
          _push(`<p data-v-eea4e5dc>${ssrInterpolate(unref(textFor)(paragraph))}</p>`);
        });
        _push(`<!--]--></div></article>`);
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
const LegalPage = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-eea4e5dc"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ModelChapterNav",
  __ssrInlineRender: true,
  props: {
    sections: {}
  },
  setup(__props) {
    const props = __props;
    const activeSection = ref(props.sections[0]?.id ?? "");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "model-chapter-nav" }, _attrs))} data-v-533869a9><div class="container model-chapter-nav-inner" data-v-533869a9><!--[-->`);
      ssrRenderList(__props.sections, (section) => {
        _push(`<a${ssrRenderAttr("href", `#${section.id}`)} class="${ssrRenderClass(["model-chapter-link", { active: unref(activeSection) === section.id }])}" data-v-533869a9>${ssrInterpolate(section.label)}</a>`);
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
const ModelChapterNav = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-533869a9"]]);
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
      }, _attrs))} data-v-8c18c8d0><div class="container model-media-grid" data-v-8c18c8d0><div class="model-media-copy" data-reveal data-v-8c18c8d0><p class="model-media-kicker" data-v-8c18c8d0>${ssrInterpolate(__props.section.kicker)}</p><h2 class="model-media-title" data-v-8c18c8d0>${ssrInterpolate(__props.section.title)}</h2><p class="model-media-summary" data-v-8c18c8d0>${ssrInterpolate(__props.section.summary)}</p></div><div class="model-media-stack" data-reveal data-v-8c18c8d0><figure class="model-media-primary" data-v-8c18c8d0><img${ssrRenderAttr("src", __props.section.images[0])}${ssrRenderAttr("alt", __props.section.title)} data-v-8c18c8d0></figure>`);
      if (__props.section.images.length > 1) {
        _push(`<div class="model-media-secondary" data-v-8c18c8d0><!--[-->`);
        ssrRenderList(__props.section.images.slice(1), (image) => {
          _push(`<figure data-v-8c18c8d0><img${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", __props.section.title)} data-v-8c18c8d0></figure>`);
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
const ModelMediaSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8c18c8d0"]]);
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
        title: textFor(props.model.features[0]?.title ?? props.model.title),
        summary: textFor(props.model.features[0]?.body ?? props.model.description)
      },
      {
        kicker: modelLabel("Chapter 02", "Chapitre 02", "الفصل 02"),
        title: textFor(props.model.features[1]?.title ?? props.model.title),
        summary: textFor(props.model.features[1]?.body ?? props.model.subtitle)
      },
      {
        kicker: modelLabel("Chapter 03", "Chapitre 03", "الفصل 03"),
        title: textFor(props.model.features[2]?.title ?? props.model.title),
        summary: textFor(props.model.features[2]?.body ?? props.model.description)
      },
      {
        kicker: modelLabel("Chapter 04", "Chapitre 04", "الفصل 04"),
        title: modelLabel("Model highlights", "Points forts du modele", "أبرز ملامح الطراز"),
        summary: textFor(props.model.description)
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
      { id: "overview", label: modelLabel("Overview", "Apercu", "نظرة عامة") },
      ...gallerySections.value.map((section) => ({ id: section.id, label: section.title })),
      { id: "book-drive", label: modelLabel("Reserve", "Reserver", "احجز") }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "model-page" }, _attrs))} data-v-10b137d7>`);
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
      _push(`<section id="overview" class="model-overview" data-v-10b137d7><div class="container model-overview-grid" data-v-10b137d7><div class="model-overview-copy" data-reveal data-v-10b137d7><p class="model-overview-kicker" data-v-10b137d7>${ssrInterpolate(modelLabel("Vehicle overview", "Apercu du vehicule", "نظرة عامة على المركبة"))}</p><h2 class="model-overview-title" data-v-10b137d7>${ssrInterpolate(unref(textFor)(__props.model.title))}</h2><p class="model-overview-summary" data-v-10b137d7>${ssrInterpolate(unref(textFor)(__props.model.description))}</p></div><aside class="model-overview-panel" data-reveal data-v-10b137d7><img${ssrRenderAttr("src", __props.model.logo)}${ssrRenderAttr("alt", unref(textFor)(__props.model.title))} class="model-overview-logo" data-v-10b137d7><p class="model-overview-price" data-v-10b137d7>${ssrInterpolate(unref(textFor)(__props.model.price))}</p><p class="model-overview-note" data-v-10b137d7>${ssrInterpolate(unref(textFor)(__props.model.description))}</p><div class="button-row model-overview-actions" data-v-10b137d7>`);
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
      _push(`</div></aside></div><div class="container" data-reveal data-v-10b137d7>`);
      _push(ssrRenderComponent(_sfc_main$8, {
        metrics: __props.model.metrics
      }, null, _parent));
      _push(`</div></section><div data-v-10b137d7><!--[-->`);
      ssrRenderList(unref(gallerySections), (section, index) => {
        _push(ssrRenderComponent(ModelMediaSection, {
          key: section.id,
          index,
          section
        }, null, _parent));
      });
      _push(`<!--]--></div><section id="book-drive" class="model-cta" style="${ssrRenderStyle({ "--cta-image": `url(${unref(gallery).at(-1) ?? __props.model.heroImage})` })}" data-v-10b137d7><div class="container model-cta-card" data-reveal data-v-10b137d7><p class="model-cta-kicker" data-v-10b137d7>${ssrInterpolate(modelLabel("More from Voyah", "Plus de Voyah", "المزيد من Voyah"))}</p><h2 data-v-10b137d7>${ssrInterpolate(unref(textFor)(__props.model.title))}</h2><p data-v-10b137d7>${ssrInterpolate(unref(textFor)(__props.model.description))}</p><div class="button-row" data-v-10b137d7>`);
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
const ModelPage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-10b137d7"]]);
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
//# sourceMappingURL=_slug_-BCCcv6fz.js.map
