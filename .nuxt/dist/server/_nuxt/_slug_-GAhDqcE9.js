import { defineComponent, mergeProps, useSSRContext, computed, unref, ref, watch, createSlots, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderSlot, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { u as useSectionReveal, _ as _sfc_main$a, a as _sfc_main$b } from "./MetricGrid-Dhnmdwt_.js";
import { u as useSiteContent, b as useSeoMeta, a as useHead } from "./useSiteContent-C8SHHNnW.js";
import { _ as _export_sfc, u as useRoute, r as resolvePage } from "../server.mjs";
import { _ as _sfc_main$c } from "./LegacyDisclosurePage-RAl89wFh.js";
import { E as EnergyCenterPage } from "./EnergyCenterPage-FSJ-Eh8k.js";
import { S as ServiceCenterPage } from "./ServiceCenterPage-ltHKfc68.js";
import { S as StoreCenterPage } from "./StoreCenterPage-Dhk3ZMSH.js";
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
        _push(`<article${ssrRenderAttr("id", __props.sectionLinks[index]?.id)} class="info-document-row" data-reveal><div class="info-document-row__index">${ssrInterpolate(__props.chapterLabel(index))}</div><figure class="info-document-row__media"><img${ssrRenderAttr("src", block.image)}${ssrRenderAttr("alt", __props.textFor(block.title))}></figure><div class="info-document-row__copy"><h2 class="info-document-row__title">${ssrInterpolate(__props.textFor(block.title))}</h2><p class="info-document-row__body">${ssrInterpolate(__props.textFor(block.body))}</p></div></article>`);
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
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: `info-features info-features--${unref(variantClass)}`
      }, _attrs))}><div class="container">`);
      if (__props.variant === "store") {
        _push(`<!--[-->`);
        if (__props.blocks[0]) {
          _push(`<article${ssrRenderAttr("id", __props.sectionLinks[0]?.id)} class="info-store-lead" data-reveal><div class="info-store-lead__copy"><p class="info-store-lead__index">${ssrInterpolate(__props.chapterLabel(0))}</p><h2 class="info-store-lead__title">${ssrInterpolate(__props.textFor(__props.blocks[0].title))}</h2><p class="info-store-lead__body">${ssrInterpolate(__props.textFor(__props.blocks[0].body))}</p></div><figure class="info-store-lead__media"><img${ssrRenderAttr("src", __props.blocks[0].image)}${ssrRenderAttr("alt", __props.textFor(__props.blocks[0].title))}></figure></article>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="info-store-grid"><!--[-->`);
        ssrRenderList(__props.blocks.slice(1), (block, index) => {
          _push(`<article${ssrRenderAttr("id", __props.sectionLinks[index + 1]?.id)} class="info-store-card" data-reveal><figure class="info-store-card__media"><img${ssrRenderAttr("src", block.image)}${ssrRenderAttr("alt", __props.textFor(block.title))}></figure><div class="info-store-card__copy"><p class="info-store-card__index">${ssrInterpolate(__props.chapterLabel(index + 1))}</p><h2 class="info-store-card__title">${ssrInterpolate(__props.textFor(block.title))}</h2><p class="info-store-card__body">${ssrInterpolate(__props.textFor(block.body))}</p></div></article>`);
        });
        _push(`<!--]--></div><!--]-->`);
      } else if (__props.variant === "service") {
        _push(`<!--[-->`);
        if (__props.blocks[0]) {
          _push(`<article${ssrRenderAttr("id", __props.sectionLinks[0]?.id)} class="info-service-lead" data-reveal><figure class="info-service-lead__media"><img${ssrRenderAttr("src", __props.blocks[0].image)}${ssrRenderAttr("alt", __props.textFor(__props.blocks[0].title))}></figure><div class="info-service-lead__copy"><p class="info-service-lead__index">${ssrInterpolate(__props.chapterLabel(0))}</p><h2 class="info-service-lead__title">${ssrInterpolate(__props.textFor(__props.blocks[0].title))}</h2><p class="info-service-lead__body">${ssrInterpolate(__props.textFor(__props.blocks[0].body))}</p></div></article>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="info-service-grid"><!--[-->`);
        ssrRenderList(__props.blocks.slice(1, 3), (block, index) => {
          _push(`<article${ssrRenderAttr("id", __props.sectionLinks[index + 1]?.id)} class="info-service-card" data-reveal><figure class="info-service-card__media"><img${ssrRenderAttr("src", block.image)}${ssrRenderAttr("alt", __props.textFor(block.title))}></figure><div class="info-service-card__copy"><p class="info-service-card__index">${ssrInterpolate(__props.chapterLabel(index + 1))}</p><h2 class="info-service-card__title">${ssrInterpolate(__props.textFor(block.title))}</h2><p class="info-service-card__body">${ssrInterpolate(__props.textFor(block.body))}</p></div></article>`);
        });
        _push(`<!--]--></div>`);
        if (__props.blocks[3]) {
          _push(`<article${ssrRenderAttr("id", __props.sectionLinks[3]?.id)} class="info-service-strip" data-reveal><div class="info-service-strip__copy"><p class="info-service-strip__index">${ssrInterpolate(__props.chapterLabel(3))}</p><h2 class="info-service-strip__title">${ssrInterpolate(__props.textFor(__props.blocks[3].title))}</h2><p class="info-service-strip__body">${ssrInterpolate(__props.textFor(__props.blocks[3].body))}</p></div><figure class="info-service-strip__media"><img${ssrRenderAttr("src", __props.blocks[3].image)}${ssrRenderAttr("alt", __props.textFor(__props.blocks[3].title))}></figure></article>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.blocks.length > 4) {
          _push(`<div class="info-service-grid info-service-grid--tail"><!--[-->`);
          ssrRenderList(__props.blocks.slice(4), (block, index) => {
            _push(`<article${ssrRenderAttr("id", __props.sectionLinks[index + 4]?.id)} class="info-service-card" data-reveal><figure class="info-service-card__media"><img${ssrRenderAttr("src", block.image)}${ssrRenderAttr("alt", __props.textFor(block.title))}></figure><div class="info-service-card__copy"><p class="info-service-card__index">${ssrInterpolate(__props.chapterLabel(index + 4))}</p><h2 class="info-service-card__title">${ssrInterpolate(__props.textFor(block.title))}</h2><p class="info-service-card__body">${ssrInterpolate(__props.textFor(block.body))}</p></div></article>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        if (__props.blocks[0]) {
          _push(`<article${ssrRenderAttr("id", __props.sectionLinks[0]?.id)} class="info-energy-lead" data-reveal><div class="info-energy-lead__copy"><p class="info-energy-lead__index">${ssrInterpolate(__props.chapterLabel(0))}</p><h2 class="info-energy-lead__title">${ssrInterpolate(__props.textFor(__props.blocks[0].title))}</h2><p class="info-energy-lead__body">${ssrInterpolate(__props.textFor(__props.blocks[0].body))}</p></div><figure class="info-energy-lead__media"><img${ssrRenderAttr("src", __props.blocks[0].image)}${ssrRenderAttr("alt", __props.textFor(__props.blocks[0].title))}></figure></article>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.blocks[1]) {
          _push(`<article${ssrRenderAttr("id", __props.sectionLinks[1]?.id)} class="info-energy-highlight" data-reveal><figure class="info-energy-highlight__media"><img${ssrRenderAttr("src", __props.blocks[1].image)}${ssrRenderAttr("alt", __props.textFor(__props.blocks[1].title))}></figure><div class="info-energy-highlight__copy"><p class="info-energy-highlight__index">${ssrInterpolate(__props.chapterLabel(1))}</p><h2 class="info-energy-highlight__title">${ssrInterpolate(__props.textFor(__props.blocks[1].title))}</h2><p class="info-energy-highlight__body">${ssrInterpolate(__props.textFor(__props.blocks[1].body))}</p></div></article>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="info-energy-grid"><!--[-->`);
        ssrRenderList(__props.blocks.slice(2), (block, index) => {
          _push(`<article${ssrRenderAttr("id", __props.sectionLinks[index + 2]?.id)} class="info-energy-card" data-reveal><figure class="info-energy-card__media"><img${ssrRenderAttr("src", block.image)}${ssrRenderAttr("alt", __props.textFor(block.title))}></figure><div class="info-energy-card__copy"><p class="info-energy-card__index">${ssrInterpolate(__props.chapterLabel(index + 2))}</p><h2 class="info-energy-card__title">${ssrInterpolate(__props.textFor(block.title))}</h2><p class="info-energy-card__body">${ssrInterpolate(__props.textFor(block.body))}</p></div></article>`);
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
        panelTitle: copy("Brand role", "Rôle de la marque", "دور العلامة"),
        panelBody: copy(
          "Rooted in Chinese culture, Voyah blends Chinese elegance with modern technology.",
          "Enracinée dans la culture chinoise, Voyah mêle l’élégance chinoise à la technologie moderne.",
          "تنطلق Voyah من الثقافة الصينية وتمزج بين الأناقة الصينية والتكنولوجيا الحديثة."
        ),
        ctaTitle: copy("Brand system", "Système de marque", "منظومة العلامة"),
        ctaHeadline: copy(
          "A premium intelligent new-energy brand with Chinese cultural confidence",
          "Une marque haut de gamme à énergies nouvelles intelligentes portée par une forte confiance culturelle chinoise",
          "علامة راقية ذكية للطاقة الجديدة بثقة ثقافية صينية واضحة"
        ),
        ctaBody: copy(
          "Voyah is committed to creating premium new-energy vehicles with Chinese cultural depth and intelligent character.",
          "Voyah s’engage à créer des véhicules premium à énergie nouvelle avec une profondeur culturelle chinoise et un caractère intelligent.",
          "تلتزم Voyah بابتكار مركبات فاخرة للطاقة الجديدة تحمل عمقاً ثقافياً صينياً وطابعاً ذكياً."
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
        panelTitle: copy("Booking path", "Parcours de réservation", "مسار الحجز"),
        panelBody: copy(
          "Selection, store coordination, and the first ownership touchpoint are treated as one connected flow.",
          "La sélection, la coordination magasin et le premier point de contact de possession sont traités comme un seul flux.",
          "يُتعامل مع الاختيار وتنسيق المعرض وأول نقطة تواصل للملكية كمسار واحد."
        ),
        ctaTitle: copy("Test drive", "Essai", "تجربة القيادة"),
        ctaHeadline: copy(
          "Move from discovery to visit planning through a calm premium journey",
          "Passez de la découverte à la planification de visite dans le même parcours premium apaisé",
          "انتقل من الاكتشاف إلى تخطيط الزيارة ضمن رحلة فاخرة هادئة"
        ),
        ctaBody: copy(
          "A calm premium journey helps users move smoothly from vehicle discovery to visit planning.",
          "Une expérience premium et calme aide l’utilisateur à passer en douceur de la découverte du véhicule à la planification de visite.",
          "تساعد الرحلة الفاخرة الهادئة المستخدم على الانتقال بسلاسة من اكتشاف السيارة إلى تخطيط الزيارة."
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
        panelTitle: copy("Store network", "Réseau de magasins", "شبكة المعارض"),
        panelValue: "360°",
        panelBody: copy(
          "The store center connects discovery, consultation, booking, delivery, and ownership support as one premium journey.",
          "Le centre de magasins relie découverte, conseil, réservation, livraison et accompagnement comme un seul parcours premium.",
          "يربط مركز المعارض بين الاكتشاف والاستشارة والحجز والتسليم ودعم الملكية كرحلة فاخرة واحدة."
        ),
        ctaTitle: copy("Store center", "Centre de magasins", "مركز المعارض"),
        ctaHeadline: copy(
          "A premium space system spanning arrival, consultation, and handover",
          "Un système d’espaces premium couvrant l’accueil, le conseil et la remise",
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
        showNav: false,
        showCta: false,
        showMetrics: true,
        panelTitle: copy("Service promise", "Promesse de service", "وعد الخدمة"),
        panelValue: "7×24",
        panelBody: copy(
          "Every touchpoint is designed around sincere reception, ceremonial delivery, all-day protection, and professional support.",
          "Chaque point de contact est pensé autour d’un accueil sincère, d’une livraison cérémonielle, d’une protection continue et d’un soutien professionnel.",
          "صُممت كل نقطة تواصل حول استقبال صادق وتسليم احتفالي وحماية مستمرة ودعم مهني."
        ),
        ctaTitle: copy("Voyah Service", "Service Voyah", "خدمات Voyah"),
        ctaHeadline: copy(
          "You focus on chasing freedom and dreams while Voyah focuses on careful protection",
          "Vous poursuivez la liberté et les rêves pendant que Voyah se concentre sur une protection attentive",
          "أنت تنطلق نحو الحرية والأحلام بينما تركز Voyah على الحماية الدقيقة"
        ),
        ctaBody: copy(
          "Voyah Service follows a wholehearted service philosophy and is committed to delivering a trusted full-journey ownership experience.",
          "Voyah Service suit une philosophie de service entièrement dévouée et s’engage à offrir une expérience de possession digne de confiance sur l’ensemble du parcours.",
          "تلتزم Voyah Service بفلسفة خدمة قائمة على الإخلاص الكامل وتهدف إلى تقديم تجربة ملكية موثوقة عبر الرحلة بأكملها."
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
        panelTitle: copy("Energy network", "Réseau énergie", "شبكة الطاقة"),
        panelValue: "1.54M+",
        panelBody: copy(
          "The energy layer combines charging scenes, partner infrastructure, and digital guidance into one connected ecosystem.",
          "La couche énergie combine scènes de recharge, infrastructures partenaires et guidage numérique dans un écosystème unique.",
          "تجمع منظومة الطاقة بين مشاهد الشحن والبنية التحتية الشريكة والإرشاد الرقمي في نظام مترابط واحد."
        ),
        ctaTitle: copy("Voyah Energy", "Énergie Voyah", "طاقة Voyah"),
        ctaHeadline: copy(
          "A connected energy ecosystem for daily driving and long-distance use",
          "Un écosystème énergie connecté pour l’usage quotidien et les longs trajets",
          "منظومة طاقة مترابطة للاستخدام اليومي وللرحلات الطويلة"
        ),
        ctaBody: copy(
          "Voyah Energy links charging resources, supercharging capability, and digital route guidance to support every ownership rhythm.",
          "Voyah Energy relie les ressources de recharge, la recharge ultra rapide et le guidage numérique pour soutenir chaque rythme d’usage.",
          "تربط طاقة Voyah بين موارد الشحن والقدرة على الشحن السريع والتوجيه الرقمي لدعم كل أنماط الاستخدام."
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
        panelTitle: copy("Communication", "Communication", "التواصل"),
        panelBody: copy(
          "Voyah communication presents mission, vision, and values as one coherent long-term brand narrative.",
          "La communication de Voyah présente la mission, la vision et les valeurs comme un récit de marque cohérent sur le long terme.",
          "يعرض تواصل Voyah المهمة والرؤية والقيم كسرد علامة متماسك على المدى الطويل."
        ),
        ctaTitle: copy("Brand culture", "Culture de marque", "ثقافة العلامة"),
        ctaHeadline: copy(
          "Mission, vision, and values aligned around long-term premium development",
          "Mission, vision et valeurs alignées autour d’un développement premium de long terme",
          "المهمة والرؤية والقيم مصطفّة حول تطور فاخر طويل الأمد"
        ),
        ctaBody: copy(
          "Corporate culture content clarifies how Voyah translates technology ambition into user-oriented product and service standards.",
          "Le contenu de culture d’entreprise clarifie la manière dont Voyah transforme son ambition technologique en standards produits et services orientés utilisateur.",
          "يوضح محتوى الثقافة المؤسسية كيف تحوّل Voyah طموحها التقني إلى معايير منتج وخدمة موجهة للمستخدم."
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
        panelTitle: copy("Careers", "Carrières", "الوظائف"),
        panelBody: copy(
          "Campus and social recruitment channels are structured to connect talent with Voyah’s long-term growth roles.",
          "Les canaux de recrutement campus et social sont structurés pour relier les talents aux rôles de croissance de long terme chez Voyah.",
          "تمت هيكلة قنوات التوظيف الجامعي والاجتماعي لربط المواهب بأدوار النمو طويل الأمد لدى Voyah."
        ),
        ctaTitle: copy("Join Voyah", "Rejoindre Voyah", "الانضمام إلى Voyah"),
        ctaHeadline: copy(
          "Build intelligent mobility careers with product, digital, and service teams",
          "Construire des parcours de mobilité intelligente avec les équipes produit, numérique et service",
          "بناء مسارات مهنية في التنقل الذكي مع فرق المنتج والرقمنة والخدمة"
        ),
        ctaBody: copy(
          "Recruitment pages focus on role clarity, application access, and onboarding readiness for prospective candidates.",
          "Les pages de recrutement se concentrent sur la clarté des rôles, l’accès à la candidature et la préparation à l’intégration des candidats.",
          "تركز صفحات التوظيف على وضوح الأدوار وسهولة التقديم والاستعداد للانضمام بالنسبة للمرشحين."
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
        panelTitle: copy("Partners", "Partenaires", "الشركاء"),
        panelBody: copy(
          "Partner recruitment aligns network coverage, operation standards, and premium service capability.",
          "Le recrutement des partenaires aligne la couverture réseau, les standards opérationnels et la capacité de service premium.",
          "يربط استقطاب الشركاء بين تغطية الشبكة ومعايير التشغيل وقدرة الخدمة الفاخرة."
        ),
        ctaTitle: copy("Partner growth", "Croissance partenaires", "نمو الشركاء"),
        ctaHeadline: copy(
          "Retail, delivery, and service collaboration under one partner framework",
          "Collaboration retail, livraison et service dans un cadre partenaire unique",
          "التعاون في البيع والتسليم والخدمة ضمن إطار شراكة موحد"
        ),
        ctaBody: copy(
          "The route emphasizes long-term collaboration quality rather than short-term channel expansion.",
          "La page met l’accent sur la qualité de collaboration de long terme plutôt que sur une expansion de canal à court terme.",
          "تركز الصفحة على جودة التعاون طويل الأمد بدلاً من التوسع القصير في القنوات."
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
        panelTitle: copy("Investor Relations", "Relations investisseurs", "علاقات المستثمرين"),
        panelBody: copy(
          "Investor-facing disclosures organize company profile, governance, and reference materials for structured review.",
          "Les publications destinées aux investisseurs organisent le profil de l’entreprise, la gouvernance et les documents de référence pour une lecture structurée.",
          "تنظم الإفصاحات الموجهة للمستثمرين الملف التعريفي للشركة والحوكمة والمواد المرجعية ضمن مراجعة منظمة."
        ),
        ctaTitle: copy("Investor information", "Information investisseurs", "معلومات المستثمرين"),
        ctaHeadline: copy(
          "Governance and reference documentation prepared for transparent review",
          "Documents de gouvernance et de référence préparés pour une lecture transparente",
          "وثائق الحوكمة والمراجع مُعدة لمراجعة شفافة"
        ),
        ctaBody: copy(
          "IR sections improve access to key corporate documents and improve consistency across investor communication touchpoints.",
          "Les sections IR améliorent l’accès aux documents clés de l’entreprise et renforcent la cohérence des points de contact de communication investisseurs.",
          "تحسن أقسام علاقات المستثمرين الوصول إلى المستندات المؤسسية الأساسية وتعزز اتساق نقاط تواصل المستثمرين."
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
        panelTitle: copy("Procurement", "Achats", "المشتريات"),
        panelBody: copy(
          "Procurement disclosures provide public visibility into sourcing information and supplier collaboration structure.",
          "Les informations achats offrent une visibilité publique sur les données de sourcing et la structure de coopération fournisseurs.",
          "توفر إفصاحات المشتريات رؤية عامة حول بيانات التوريد وهيكل التعاون مع الموردين."
        ),
        ctaTitle: copy("Procurement disclosure", "Divulgation achats", "إفصاح المشتريات"),
        ctaHeadline: copy(
          "Sourcing transparency, historical data, and supplier collaboration standards",
          "Transparence du sourcing, données historiques et standards de collaboration fournisseurs",
          "شفافية التوريد والبيانات التاريخية ومعايير تعاون الموردين"
        ),
        ctaBody: copy(
          "The page is organized for clearer review of purchasing history and current supplier-facing disclosure.",
          "La page est structurée pour une revue plus claire de l’historique d’achats et des informations actuelles destinées aux fournisseurs.",
          "تم تنظيم الصفحة لتمكين مراجعة أوضح لتاريخ الشراء والإفصاحات الحالية الموجهة للموردين."
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
        panelTitle: copy("Environment", "Environnement", "البيئة"),
        panelBody: copy(
          "Environmental information is disclosed for transparent public reference and long-term operational accountability.",
          "Les informations environnementales sont publiées pour une référence publique transparente et une responsabilité opérationnelle de long terme.",
          "يتم نشر المعلومات البيئية لمرجع عام شفاف ولمساءلة تشغيلية طويلة الأمد."
        ),
        ctaTitle: copy("Environmental disclosure", "Divulgation environnementale", "الإفصاح البيئي"),
        ctaHeadline: copy(
          "Operational responsibility and sustainability disclosure in one structured route",
          "Responsabilité opérationnelle et divulgation durable dans un parcours structuré",
          "المسؤولية التشغيلية والإفصاح المستدام ضمن مسار منظم"
        ),
        ctaBody: copy(
          "Disclosure sections emphasize compliance, continuity, and long-term environmental management orientation.",
          "Les sections de divulgation mettent l’accent sur la conformité, la continuité et l’orientation de gestion environnementale de long terme.",
          "تؤكد أقسام الإفصاح على الامتثال والاستمرارية وتوجه الإدارة البيئية على المدى الطويل."
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
        panelTitle: copy("Documents", "Documents", "المستندات"),
        panelBody: copy(
          "Document pages centralize manuals and trusted references for easier retrieval and comparison.",
          "Les pages de documents centralisent les manuels et références utiles pour une recherche et une comparaison facilitées.",
          "تجمع صفحات المستندات الأدلة والمراجع الموثوقة لتسهيل الوصول والمقارنة."
        ),
        ctaTitle: copy("Document center", "Centre documentaire", "مركز المستندات"),
        ctaHeadline: copy(
          "Manuals, reference files, and digital retrieval within one organized archive",
          "Manuels, fichiers de référence et accès numérique au sein d’une archive organisée",
          "الأدلة والملفات المرجعية والوصول الرقمي ضمن أرشيف منظم"
        ),
        ctaBody: copy(
          "The route organizes document access around ownership usage, reference review, and consistent digital retrieval paths.",
          "Cette page organise l’accès documentaire autour de l’usage en possession, de la revue de référence et de parcours numériques cohérents.",
          "ينظم هذا المسار الوصول إلى المستندات حول استخدام الملكية ومراجعة المراجع ومسارات الوصول الرقمي المتسقة."
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
      panelTitle: copy("Page chapter", "Chapitre de page", "فصل الصفحة"),
      panelBody: copy(
        "Image, information, and service touchpoints stay aligned within one calm premium page rhythm.",
        "L’image, l’information et les points de service restent alignés dans un même rythme premium apaisé.",
        "تبقى الصورة والمعلومة ونقاط الخدمة منسجمة ضمن إيقاع فاخر وهادئ واحد للصفحة."
      ),
      ctaTitle: copy("More from Voyah", "Plus de Voyah", "المزيد من Voyah"),
      ctaHeadline: copy(
        "Continue exploring the broader Voyah brand, service, and ownership system",
        "Poursuivez l’exploration de l’univers Voyah, de ses services et de son expérience de possession",
        "واصل استكشاف منظومة Voyah الأوسع للعلامة والخدمة وتجربة الملكية"
      ),
      ctaBody: copy(
        "Each page connects product understanding, service access, and brand storytelling through one continuous premium experience.",
        "Chaque page relie la compréhension du produit, l’accès au service et le récit de marque dans une expérience premium continue.",
        "تربط كل صفحة بين فهم المنتج والوصول إلى الخدمة وسرد العلامة ضمن تجربة فاخرة متواصلة."
      )
    };
    const theme = computed(() => themeMap[props.page.slug] ?? defaultTheme);
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
              _push2(ssrRenderComponent(_sfc_main$a, {
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
                createVNode(_sfc_main$a, {
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
          _push(`<article${ssrRenderAttr("id", unref(sectionLinks)[0]?.id)} class="info-brand-lead" data-reveal data-v-f1dd9efc><figure class="info-brand-lead__media" data-v-f1dd9efc><img${ssrRenderAttr("src", __props.page.blocks[0].image)}${ssrRenderAttr("alt", unref(textFor)(__props.page.blocks[0].title))} data-v-f1dd9efc></figure><div class="info-brand-lead__copy" data-v-f1dd9efc><p class="info-brand-lead__index" data-v-f1dd9efc>${ssrInterpolate(chapterLabel(0))}</p><h2 class="info-brand-lead__title" data-v-f1dd9efc>${ssrInterpolate(unref(textFor)(__props.page.blocks[0].title))}</h2><p class="info-brand-lead__body" data-v-f1dd9efc>${ssrInterpolate(unref(textFor)(__props.page.blocks[0].body))}</p></div></article>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="info-brand-grid" data-v-f1dd9efc><!--[-->`);
        ssrRenderList(__props.page.blocks.slice(1), (block, index) => {
          _push(`<article${ssrRenderAttr("id", unref(sectionLinks)[index + 1]?.id)} class="info-brand-card" data-reveal data-v-f1dd9efc><figure class="info-brand-card__media" data-v-f1dd9efc><img${ssrRenderAttr("src", block.image)}${ssrRenderAttr("alt", unref(textFor)(block.title))} data-v-f1dd9efc></figure><div class="info-brand-card__copy" data-v-f1dd9efc><p class="info-brand-card__index" data-v-f1dd9efc>${ssrInterpolate(chapterLabel(index + 1))}</p><h2 class="info-brand-card__title" data-v-f1dd9efc>${ssrInterpolate(unref(textFor)(block.title))}</h2><p class="info-brand-card__body" data-v-f1dd9efc>${ssrInterpolate(unref(textFor)(block.body))}</p></div></article>`);
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
          _push(`<article${ssrRenderAttr("id", unref(sectionLinks)[0]?.id)} class="info-corporate-lead" data-reveal data-v-f1dd9efc><figure class="info-corporate-lead__media" data-v-f1dd9efc><img${ssrRenderAttr("src", __props.page.blocks[0].image)}${ssrRenderAttr("alt", unref(textFor)(__props.page.blocks[0].title))} data-v-f1dd9efc></figure><div class="info-corporate-lead__copy" data-v-f1dd9efc><p class="info-corporate-lead__index" data-v-f1dd9efc>${ssrInterpolate(chapterLabel(0))}</p><h2 class="info-corporate-lead__title" data-v-f1dd9efc>${ssrInterpolate(unref(textFor)(__props.page.blocks[0].title))}</h2><p class="info-corporate-lead__body" data-v-f1dd9efc>${ssrInterpolate(unref(textFor)(__props.page.blocks[0].body))}</p></div></article>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="info-corporate-stack" data-v-f1dd9efc><!--[-->`);
        ssrRenderList(__props.page.blocks.slice(1), (block, index) => {
          _push(`<article${ssrRenderAttr("id", unref(sectionLinks)[index + 1]?.id)} class="info-corporate-card" data-reveal data-v-f1dd9efc><figure class="info-corporate-card__media" data-v-f1dd9efc><img${ssrRenderAttr("src", block.image)}${ssrRenderAttr("alt", unref(textFor)(block.title))} data-v-f1dd9efc></figure><div class="info-corporate-card__copy" data-v-f1dd9efc><p class="info-corporate-card__index" data-v-f1dd9efc>${ssrInterpolate(chapterLabel(index + 1))}</p><h2 class="info-corporate-card__title" data-v-f1dd9efc>${ssrInterpolate(unref(textFor)(block.title))}</h2><p class="info-corporate-card__body" data-v-f1dd9efc>${ssrInterpolate(unref(textFor)(block.body))}</p></div></article>`);
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
          _push(`<div${ssrRenderAttr("id", unref(sectionLinks)[index]?.id)} class="${ssrRenderClass(["info-career-row", { reverse: index % 2 === 1 }])}" data-v-f1dd9efc><div class="container info-career-row__grid" data-v-f1dd9efc><figure class="info-career-row__media" data-reveal data-v-f1dd9efc><img${ssrRenderAttr("src", block.image)}${ssrRenderAttr("alt", unref(textFor)(block.title))} data-v-f1dd9efc></figure><article class="info-career-row__copy" data-reveal data-v-f1dd9efc><p class="info-career-row__index" data-v-f1dd9efc>${ssrInterpolate(chapterLabel(index))}</p><h2 class="info-career-row__title" data-v-f1dd9efc>${ssrInterpolate(unref(textFor)(block.title))}</h2><p class="info-career-row__body" data-v-f1dd9efc>${ssrInterpolate(unref(textFor)(block.body))}</p></article></div></div>`);
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
          _push(`<div${ssrRenderAttr("id", unref(sectionLinks)[index]?.id)} class="${ssrRenderClass(["info-feature", { reverse: index % 2 === 1 && unref(layoutMode) !== "document" }])}" data-v-f1dd9efc><div class="${ssrRenderClass(["container", "info-feature__grid"])}" data-v-f1dd9efc><div class="info-feature__media" data-reveal data-v-f1dd9efc><div class="info-feature__media-shell" data-v-f1dd9efc><img${ssrRenderAttr("src", block.image)}${ssrRenderAttr("alt", unref(textFor)(block.title))} data-v-f1dd9efc>`);
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
          _push(ssrRenderComponent(_sfc_main$a, {
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
    const props = __props;
    const activeSection = ref(props.sections[0]?.id ?? "");
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
      if (props.section.slides?.length) {
        return props.section.slides;
      }
      const images = props.section.images.length ? props.section.images : [props.section.image ?? ""];
      const baseTitle = props.section.title;
      const baseSummary = props.section.summary ?? "";
      return images.map((image, slideIndex) => ({
        image,
        video: slideIndex === 0 ? props.section.videos?.[0] : void 0,
        title: props.section.details?.[slideIndex]?.title ?? baseTitle,
        summary: props.section.details?.[slideIndex]?.summary ?? baseSummary
      }));
    });
    const details = computed(() => {
      if (props.section.details?.length) {
        return props.section.details;
      }
      return carouselSlides.value.slice(0, 3).map((slide) => ({
        title: slide.title,
        summary: slide.summary
      }));
    });
    const activeCarouselSlide = computed(() => carouselSlides.value[activeSlide.value] ?? carouselSlides.value[0]);
    const bannerStyle = computed(() => ({
      backgroundImage: `linear-gradient(180deg, rgba(8, 12, 16, 0.12), rgba(8, 12, 16, 0.72)), url(${props.section.image ?? props.section.images[0] ?? ""})`
    }));
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
          _push(`<!--]--></div><p class="model-carousel-drawer-text" data-v-0d07d4de>${ssrInterpolate(unref(carouselSlides)[unref(activeSlide)]?.summary)}</p></div></div>`);
        } else {
          _push(`<div class="model-image-block" data-reveal data-v-0d07d4de><div class="model-image-frame" data-v-0d07d4de>`);
          if (__props.section.videos?.length) {
            _push(`<video${ssrRenderAttr("poster", __props.section.image ?? __props.section.images[0] ?? "")} autoplay muted loop playsinline preload="metadata" data-v-0d07d4de><source${ssrRenderAttr("src", __props.section.videos[0])} type="video/mp4" data-v-0d07d4de></video>`);
          } else {
            _push(`<img${ssrRenderAttr("src", __props.section.image ?? __props.section.images[0] ?? "")}${ssrRenderAttr("alt", __props.section.title)} draggable="false" data-v-0d07d4de>`);
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
      title: t("Flagship luxury", "Luxe phare", "Ø§Ù„ÙØ®Ø§Ù…Ø© Ø§Ù„Ø±Ø§Ø¦Ø¯Ø©"),
      summary: t(
        "Titan builds its flagship identity with a full-size six-seat stance, ceremonial proportions, and a lounge-like cabin crafted for premium family travel.",
        "Titan construit son identitÃ© phare avec une posture six places grand format, des proportions cÃ©rÃ©monielles et un habitacle faÃ§on salon conÃ§u pour les voyages familiaux premium.",
        "ØªØ¨Ù†ÙŠ Titan Ù‡ÙˆÙŠØªÙ‡Ø§ Ø§Ù„Ø±Ø§Ø¦Ø¯Ø© Ù…Ù† Ø®Ù„Ø§Ù„ Ù‡ÙŠØ¦Ø© ÙƒØ¨ÙŠØ±Ø© Ø¨Ø³ØªØ© Ù…Ù‚Ø§Ø¹Ø¯ ÙˆØªÙ†Ø§Ø³Ø¨Ø§Øª Ø§Ø­ØªÙØ§Ù„ÙŠØ© ÙˆÙ…Ù‚ØµÙˆØ±Ø© Ø¨Ø·Ø§Ø¨Ø¹ Ø§Ù„ØµØ§Ù„ÙˆÙ† ØµÙ…Ù…Øª Ù„Ø±Ø­Ù„Ø§Øª Ø§Ù„Ø¹Ø§Ø¦Ù„Ø© Ø§Ù„ÙØ§Ø®Ø±Ø©."
      ),
      images: carGallery("titan", ["1920/sc_2.jpg", "1920/sc_6_1.jpg", "1920/sc_18.jpg", "1920/sc_11.jpg"])
    },
    {
      id: "chapter-2",
      title: t("Flagship intelligence", "Intelligence phare", "Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø±Ø§Ø¦Ø¯"),
      summary: t(
        "A modern digital cockpit, assisted-driving confidence, and premium in-cabin audio create an intelligent flagship experience from first entry to long-distance cruising.",
        "Un cockpit numÃ©rique moderne, une conduite assistÃ©e rassurante et une acoustique embarquÃ©e premium composent une expÃ©rience phare intelligente du premier contact jusquâ€™aux longues distances.",
        "ØªÙˆÙØ± Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø© Ø§Ù„Ø±Ù‚Ù…ÙŠØ© Ø§Ù„Ø­Ø¯ÙŠØ«Ø© ÙˆØ§Ù„Ø«Ù‚Ø© ÙÙŠ Ø§Ù„Ù‚ÙŠØ§Ø¯Ø© Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø© ÙˆØ§Ù„ØµÙˆØª Ø§Ù„ÙØ§Ø®Ø± Ø¯Ø§Ø®Ù„ Ø§Ù„Ø³ÙŠØ§Ø±Ø© ØªØ¬Ø±Ø¨Ø© Ø±Ø§Ø¦Ø¯Ø© Ø°ÙƒÙŠØ© Ù…Ù† Ø£ÙˆÙ„ Ø¯Ø®ÙˆÙ„ Ø­ØªÙ‰ Ø§Ù„Ø±Ø­Ù„Ø§Øª Ø§Ù„Ø·ÙˆÙŠÙ„Ø©."
      ),
      images: carGallery("titan", ["1920/sc_20.jpg", "1920/sc_21.jpg", "1920/sc_22.jpg", "1920/sc_23.jpg"]),
      videos: ["/voyah-resources/images/car/titan/video_01.mp4"]
    },
    {
      id: "chapter-3",
      title: t("Flagship performance", "Performance phare", "Ø§Ù„Ø£Ø¯Ø§Ø¡ Ø§Ù„Ø±Ø§Ø¦Ø¯"),
      summary: t(
        "Titan combines composed chassis tuning, strong all-road capability, and long-range confidence to deliver a large SUV that stays calm, stable, and powerful.",
        "Titan associe une mise au point de chÃ¢ssis maÃ®trisÃ©e, de vraies capacitÃ©s tous chemins et une grande assurance dâ€™autonomie pour crÃ©er un grand SUV Ã  la fois calme, stable et puissant.",
        "ØªØ¬Ù…Ø¹ Titan Ø¨ÙŠÙ† Ø¶Ø¨Ø· Ù‡ÙŠÙƒÙ„ Ù…ØªØ²Ù† ÙˆÙ‚Ø¯Ø±Ø§Øª Ù‚ÙˆÙŠØ© Ø¹Ù„Ù‰ Ù…Ø®ØªÙ„Ù Ø§Ù„Ø·Ø±Ù‚ ÙˆØ«Ù‚Ø© ÙƒØ¨ÙŠØ±Ø© ÙÙŠ Ø§Ù„Ù…Ø¯Ù‰ Ù„ØªÙ‚Ø¯Ù… SUV ÙƒØ¨ÙŠØ±Ø© ØªØ¨Ù‚Ù‰ Ù‡Ø§Ø¯Ø¦Ø© ÙˆØ«Ø§Ø¨ØªØ© ÙˆÙ‚ÙˆÙŠØ©."
      ),
      images: carGallery("titan", ["1920/sc_25.jpg", "1920/sc_28.jpg", "1920/sc_30.jpg", "1920/sc_31.jpg"]),
      videos: ["/voyah-resources/images/car/titan/video_04.mp4"]
    },
    {
      id: "chapter-4",
      title: t("Flagship safety", "SÃ©curitÃ© phare", "Ø§Ù„Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ø±Ø§Ø¦Ø¯Ø©"),
      summary: t(
        "A reinforced body structure, layered battery protection, and full-cabin occupant safety complete Titan with the calm assurance expected from a flagship family SUV.",
        "Une structure renforcÃ©e, une protection de batterie Ã  plusieurs niveaux et une sÃ©curitÃ© complÃ¨te des occupants finalisent Titan avec lâ€™assurance sereine attendue dâ€™un SUV familial phare.",
        "ÙŠÙƒÙ…Ù„ Ø§Ù„Ù‡ÙŠÙƒÙ„ Ø§Ù„Ù…Ø¹Ø²Ø² ÙˆØ§Ù„Ø­Ù…Ø§ÙŠØ© Ù…ØªØ¹Ø¯Ø¯Ø© Ø§Ù„Ø·Ø¨Ù‚Ø§Øª Ù„Ù„Ø¨Ø·Ø§Ø±ÙŠØ© ÙˆØ³Ù„Ø§Ù…Ø© Ø§Ù„Ø±ÙƒØ§Ø¨ Ø§Ù„Ø´Ø§Ù…Ù„Ø© Ø´Ø®ØµÙŠØ© Titan Ø¨Ø«Ù‚Ø© Ù‡Ø§Ø¯Ø¦Ø© ØªÙ„ÙŠÙ‚ Ø¨Ø³ÙŠØ§Ø±Ø© SUV Ø¹Ø§Ø¦Ù„ÙŠØ© Ø±Ø§Ø¦Ø¯Ø©."
      ),
      images: carGallery("titan", ["1920/sc_32.jpg", "1920/sc_33_1.jpg", "1920/sc_34_1.jpg", "1920/sc_35_1.jpg"])
    }
  ],
  "newDreamer26.html": [
    {
      id: "chapter-1",
      title: t("Flagship luxury", "Luxe phare", "Ø§Ù„ÙØ®Ø§Ù…Ø© Ø§Ù„Ø±Ø§Ø¦Ø¯Ø©"),
      summary: t(
        "Dreamer 26 opens with a ceremonial MPV presence, a grand family cabin, and second-row luxury that extends a premium hospitality experience.",
        "Dreamer 26 sâ€™ouvre sur une prÃ©sence de MPV cÃ©rÃ©monielle, un grand habitacle familial et un luxe de deuxiÃ¨me rang qui prolonge son hospitalitÃ© premium.",
        "ØªØ¨Ø¯Ø£ Dreamer 26 Ø¨Ø­Ø¶ÙˆØ± MPV Ø§Ø­ØªÙØ§Ù„ÙŠ ÙˆÙ…Ù‚ØµÙˆØ±Ø© Ø¹Ø§Ø¦Ù„ÙŠØ© Ø±Ø­Ø¨Ø© ÙˆÙØ®Ø§Ù…Ø© ÙÙŠ Ø§Ù„ØµÙ Ø§Ù„Ø«Ø§Ù†ÙŠ ØªØ¹ÙƒØ³ Ø£Ø³Ù„ÙˆØ¨ Ø§Ù„Ø¶ÙŠØ§ÙØ© Ø§Ù„Ø±Ø§Ù‚ÙŠØ©."
      ),
      images: carGallery("newDreamer26", ["bg_02_1920.jpg", "sc_3.jpg", "sc_8.jpg", "sc_9.jpg"])
    },
    {
      id: "chapter-2",
      title: t("Flagship performance", "Performance phare", "Ø§Ù„Ø£Ø¯Ø§Ø¡ Ø§Ù„Ø±Ø§Ø¦Ø¯"),
      summary: t(
        "Super charging, long combined range, and a comfort-first intelligent chassis give Dreamer 26 the effortless long-distance confidence of a premium executive MPV.",
        "La recharge ultra-rapide, la grande autonomie combinÃ©e et un chÃ¢ssis intelligent tournÃ© vers le confort donnent Ã  Dreamer 26 lâ€™aisance longue distance dâ€™un MPV exÃ©cutif premium.",
        "ÙŠÙˆÙØ± Ø§Ù„Ø´Ø­Ù† Ø§Ù„ÙØ§Ø¦Ù‚ ÙˆØ§Ù„Ù…Ø¯Ù‰ Ø§Ù„Ù…Ø¯Ù…Ø¬ Ø§Ù„Ø·ÙˆÙŠÙ„ ÙˆØ§Ù„Ù‡ÙŠÙƒÙ„ Ø§Ù„Ø°ÙƒÙŠ Ø§Ù„Ù…ÙˆØ¬Ù‡ Ù„Ù„Ø±Ø§Ø­Ø© ÙÙŠ Dreamer 26 Ø«Ù‚Ø© Ø³Ù„Ø³Ø© ÙÙŠ Ø§Ù„Ø±Ø­Ù„Ø§Øª Ø§Ù„Ø·ÙˆÙŠÙ„Ø© ØªÙ„ÙŠÙ‚ Ø¨Ø³ÙŠØ§Ø±Ø© MPV ØªÙ†ÙÙŠØ°ÙŠØ© ÙØ§Ø®Ø±Ø©."
      ),
      images: carGallery("newDreamer26", ["bg_11_1920.jpg", "sc_14.jpg", "sc_15.jpg", "sc_15-4.jpg"]),
      videos: ["/voyah-resources/images/car/h56d/video_13.mp4"]
    },
    {
      id: "chapter-3",
      title: t("Flagship intelligence", "Intelligence phare", "Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø±Ø§Ø¦Ø¯"),
      summary: t(
        "Huawei Qiankun intelligent driving, Harmony cockpit integration, and an AI-focused interaction layer give Dreamer 26 a more advanced flagship character.",
        "La conduite intelligente Huawei Qiankun, lâ€™intÃ©gration du cockpit Harmony et une couche dâ€™interaction centrÃ©e sur lâ€™IA donnent Ã  Dreamer 26 une expression plus avancÃ©e et distinctive.",
        "ØªÙ…Ù†Ø­ Ø§Ù„Ù‚ÙŠØ§Ø¯Ø© Ø§Ù„Ø°ÙƒÙŠØ© Ù…Ù† Huawei Qiankun ÙˆØªÙƒØ§Ù…Ù„ Ù…Ù‚ØµÙˆØ±Ø© Harmony ÙˆØ·Ø¨Ù‚Ø© Ø§Ù„ØªÙØ§Ø¹Ù„ Ø§Ù„Ù…Ø¹ØªÙ…Ø¯Ø© Ø¹Ù„Ù‰ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ø­Ø¶ÙˆØ±Ù‹Ø§ Ø£ÙƒØ«Ø± ØªÙ‚Ø¯Ù…Ù‹Ø§ ÙˆØªÙ…ÙŠØ²Ù‹Ø§ Ù„Ø³ÙŠØ§Ø±Ø© Dreamer 26."
      ),
      images: carGallery("newDreamer26", ["bg_16_1920.jpg", "sc_18.jpg", "sc_19.jpg", "sc_21.jpg"]),
      videos: ["/voyah-resources/images/car/h56d/video_17.mp4"]
    },
    {
      id: "chapter-4",
      title: t("Flagship safety", "SÃ©curitÃ© phare", "Ø§Ù„Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ø±Ø§Ø¦Ø¯Ø©"),
      summary: t(
        "The body shell, occupant protection logic, and battery safety systems are presented with calm, document-like confidence.",
        "La coque, la logique de protection des occupants et les systÃ¨mes de sÃ©curitÃ© batterie sont prÃ©sentÃ©s avec une assurance calme et structurÃ©e.",
        "ÙŠØªÙ… ØªÙ‚Ø¯ÙŠÙ… Ù‡ÙŠÙƒÙ„ Ø§Ù„Ø³ÙŠØ§Ø±Ø© ÙˆÙ…Ù†Ø·Ù‚ Ø­Ù…Ø§ÙŠØ© Ø§Ù„Ø±ÙƒØ§Ø¨ ÙˆØ£Ù†Ø¸Ù…Ø© Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ø¨Ø·Ø§Ø±ÙŠØ© Ø¨Ø«Ù‚Ø© Ù‡Ø§Ø¯Ø¦Ø© ÙˆØ£Ø³Ù„ÙˆØ¨ ÙˆØ§Ø¶Ø­ ÙˆÙ…Ù†Ø¸Ù…."
      ),
      images: carGallery("newDreamer26", ["bg_22_1920.jpg", "sc_23.jpg", "sc_24.jpg", "sc_25.jpg"])
    }
  ],
  "passion-L.html": [
    {
      id: "chapter-1",
      title: t("Oriental flagship aesthetics", "EsthÃ©tique phare orientale", "Ø§Ù„Ø¬Ù…Ø§Ù„ÙŠØ§Øª Ø§Ù„Ø´Ø±Ù‚ÙŠØ© Ø§Ù„Ø±Ø§Ø¦Ø¯Ø©"),
      summary: t(
        "Passion L interprets the design language through ceremonial front graphics, an elongated sedan proportion, and an elegant rear profile shaped around executive presence.",
        "Passion L interprÃ¨te son langage de design par une face avant cÃ©rÃ©monielle, des proportions de berline allongÃ©es et une silhouette arriÃ¨re Ã©lÃ©gante Ã  forte prÃ©sence exÃ©cutive.",
        "ØªØ¹ÙŠØ¯ Passion L ØªÙØ³ÙŠØ± Ù„ØºØ© ØªØµÙ…ÙŠÙ…Ù‡Ø§ Ø¹Ø¨Ø± ÙˆØ§Ø¬Ù‡Ø© Ø£Ù…Ø§Ù…ÙŠØ© Ø§Ø­ØªÙØ§Ù„ÙŠØ© ÙˆØªÙ†Ø§Ø³Ø¨Ø§Øª Ø³ÙŠØ¯Ø§Ù† Ø·ÙˆÙŠÙ„Ø© ÙˆÙ‡ÙŠØ¦Ø© Ø®Ù„ÙÙŠØ© Ø£Ù†ÙŠÙ‚Ø© Ø°Ø§Øª Ø­Ø¶ÙˆØ± ØªÙ†ÙÙŠØ°ÙŠ."
      ),
      images: carGallery("passion-L", ["1920/sc_2.jpg", "1920/sc_3.jpg", "1920/sc_4.jpg", "1920/sc_5.jpg"])
    },
    {
      id: "chapter-2",
      title: t("All-dimensional comfort cabin", "Habitacle confort intÃ©gral", "Ù…Ù‚ØµÙˆØ±Ø© Ø§Ù„Ø±Ø§Ø­Ø© Ø§Ù„Ø´Ø§Ù…Ù„Ø©"),
      summary: t(
        "The long-wheelbase cabin uses premium seat engineering, panoramic openness, and refined rear-space detailing to match the comfort-first sedan story.",
        "Lâ€™habitacle Ã  empattement long associe siÃ¨ges premium, sensation panoramique et soin du dÃ©tail Ã  lâ€™arriÃ¨re pour exprimer une berline orientÃ©e confort.",
        "ØªØ³ØªØ®Ø¯Ù… Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø© Ø°Ø§Øª Ù‚Ø§Ø¹Ø¯Ø© Ø§Ù„Ø¹Ø¬Ù„Ø§Øª Ø§Ù„Ø·ÙˆÙŠÙ„Ø© Ù‡Ù†Ø¯Ø³Ø© Ù…Ù‚Ø§Ø¹Ø¯ ÙØ§Ø®Ø±Ø© ÙˆØ§Ù†ÙØªØ§Ø­Ø§Ù‹ Ø¨Ø§Ù†ÙˆØ±Ø§Ù…ÙŠØ§Ù‹ ÙˆØªÙØ§ØµÙŠÙ„ Ø±Ø§Ù‚ÙŠØ© ÙÙŠ Ø§Ù„Ø®Ù„Ù Ù„ØªÙ‚Ø¯Ù… Ù‡ÙˆÙŠØ© Ø³ÙŠØ¯Ø§Ù† Ù…Ø±ÙƒØ²Ù‡Ø§ Ø§Ù„Ø±Ø§Ø­Ø©."
      ),
      images: carGallery("passion-L", ["1920/sc_9.jpg", "1920/sc_10.jpg", "1920/sc_16.jpg", "1920/sc_18.jpg"]),
      videos: ["/voyah-resources/images/car/passion-L/video_11.mp4", "/voyah-resources/images/car/passion-L/video_14.mp4", "/voyah-resources/images/car/passion-L/video_15.mp4"]
    },
    {
      id: "chapter-3",
      title: t("HarmonySpace cockpit", "Cockpit HarmonySpace", "Ù…Ù‚ØµÙˆØ±Ø© HarmonySpace"),
      summary: t(
        "HarmonySpace brings the digital flagship expression to Passion L through a wide-format display, seamless ecosystem flow, and a calmer interaction experience.",
        "HarmonySpace apporte Ã  Passion L une expression numÃ©rique phare grÃ¢ce Ã  un affichage grand format, un Ã©cosystÃ¨me fluide et une interaction plus apaisÃ©e.",
        "ØªØ¬Ù„Ø¨ HarmonySpace Ø¥Ù„Ù‰ Passion L ØªØ¹Ø¨ÙŠØ±Ù‹Ø§ Ø±Ù‚Ù…ÙŠÙ‹Ø§ Ø±Ø§Ø¦Ø¯Ù‹Ø§ Ø¹Ø¨Ø± Ø´Ø§Ø´Ø© Ø¹Ø±ÙŠØ¶Ø© ÙˆØªØ¯ÙÙ‚ Ø¨ÙŠØ¦ÙŠ Ø³Ù„Ø³ ÙˆØªØ¬Ø±Ø¨Ø© ØªÙØ§Ø¹Ù„ Ø£ÙƒØ«Ø± Ù‡Ø¯ÙˆØ¡Ù‹Ø§."
      ),
      images: carGallery("passion-L", ["1920/sc_24.jpg", "1920/sc_25.jpg", "1920/sc_23.jpg"]),
      videos: ["/voyah-resources/images/car/passion-L/video_26_1.mp4", "/voyah-resources/images/car/passion-L/video_26_2.mp4"]
    },
    {
      id: "chapter-4",
      title: t("Huawei Qiankun ADS", "Huawei Qiankun ADS", "Huawei Qiankun ADS"),
      summary: t(
        "The assisted-driving chapter is presented with sensor coverage, P2P navigation logic, and all-dimensional collision prevention.",
        "Le volet conduite assistÃ©e est prÃ©sentÃ© comme un chapitre Ã  part entiÃ¨re, avec couverture des capteurs, logique de navigation P2P et prÃ©vention multidimensionnelle des collisions.",
        "ÙŠØªÙ… ØªÙ‚Ø¯ÙŠÙ… Ù…Ø³Ø§Ø± Ø§Ù„Ù‚ÙŠØ§Ø¯Ø© Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø© ÙƒÙØµÙ„ Ù…ØªÙƒØ§Ù…Ù„ Ù…Ø¹ ØªØºØ·ÙŠØ© Ø§Ù„Ø­Ø³Ø§Ø³Ø§Øª ÙˆÙ…Ù†Ø·Ù‚ Ø§Ù„ØªÙ†Ù‚Ù„ P2P ÙˆØ§Ù„ÙˆÙ‚Ø§ÙŠØ© Ù…ØªØ¹Ø¯Ø¯Ø© Ø§Ù„Ø£Ø¨Ø¹Ø§Ø¯ Ù…Ù† Ø§Ù„Ø§ØµØ·Ø¯Ø§Ù…."
      ),
      images: carGallery("passion-L", ["1920/sc_27.jpg", "1920/sc_28.jpg", "1920/sc_29.jpg", "1920/sc_30.jpg"])
    },
    {
      id: "chapter-5",
      title: t("Lanhai intelligent super hybrid", "Super hybride intelligent Lanhai", "Ù„Ø§Ù†Ù‡Ø§ÙŠ Ø§Ù„Ù‡Ø¬ÙŠÙ† Ø§Ù„Ø°ÙƒÙŠ Ø§Ù„ÙØ§Ø¦Ù‚"),
      summary: t(
        "Ultra-fast charging, long electric range, and the brandâ€™s hybrid power narrative are grouped together here to echo the powertrain storytelling.",
        "La recharge ultra-rapide, la grande autonomie Ã©lectrique et le rÃ©cit hybride de la marque sont regroupÃ©s ici pour structurer la lecture de la chaÃ®ne de traction.",
        "ÙŠØªÙ… Ø¬Ù…Ø¹ Ø§Ù„Ø´Ø­Ù† Ø§Ù„ÙØ§Ø¦Ù‚ Ø§Ù„Ø³Ø±Ø¹Ø© ÙˆØ§Ù„Ù…Ø¯Ù‰ Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠ Ø§Ù„Ø·ÙˆÙŠÙ„ ÙˆØ³Ø±Ø¯ Ø§Ù„Ø¹Ù„Ø§Ù…Ø© Ù„Ù…Ù†Ø¸ÙˆÙ…Ø© Ø§Ù„Ø¯ÙØ¹ Ø§Ù„Ù‡Ø¬ÙŠÙ†Ø© Ù‡Ù†Ø§ Ù„ØªÙ‚Ø¯ÙŠÙ… ØµÙˆØ±Ø© ÙˆØ§Ø¶Ø­Ø© Ø¹Ù† Ù…Ù†Ø¸ÙˆÙ…Ø© Ø§Ù„Ø­Ø±ÙƒØ©."
      ),
      images: carGallery("passion-L", ["1920/sc_31.jpg", "1920/sc_32.jpg", "1920/sc_33.jpg", "1920/sc_34.jpg"])
    },
    {
      id: "chapter-6",
      title: t("Million-level magic carpet chassis", "ChÃ¢ssis tapis volant de niveau million", "Ù‡ÙŠÙƒÙ„ Ø§Ù„Ø³Ø¬Ø§Ø¯Ø© Ø§Ù„Ø³Ø­Ø±ÙŠØ© Ø¨Ù…Ø³ØªÙˆÙ‰ Ø§Ù„Ù…Ù„ÙŠÙˆÙ†"),
      summary: t(
        "The chassis chapter emphasizes million-level comfort, air suspension, rear-wheel steering, and a sedan body that stays composed even when driven quickly.",
        "Le chapitre chÃ¢ssis met en avant un confort de niveau million, la suspension pneumatique, les roues arriÃ¨re directrices et une berline qui reste posÃ©e mÃªme Ã  rythme soutenu.",
        "ÙŠØ±ÙƒØ² ÙØµÙ„ Ø§Ù„Ù‡ÙŠÙƒÙ„ Ø¹Ù„Ù‰ Ø±Ø§Ø­Ø© Ø¨Ù…Ø³ØªÙˆÙ‰ Ø§Ù„Ù…Ù„ÙŠÙˆÙ† ÙˆØªØ¹Ù„ÙŠÙ‚ Ù‡ÙˆØ§Ø¦ÙŠ ÙˆØªÙˆØ¬ÙŠÙ‡ Ù„Ù„Ø¹Ø¬Ù„Ø§Øª Ø§Ù„Ø®Ù„ÙÙŠØ© ÙˆÙ‡ÙŠØ¦Ø© Ø³ÙŠØ¯Ø§Ù† ØªØ¨Ù‚Ù‰ Ù…ØªØ²Ù†Ø© Ø­ØªÙ‰ Ø¹Ù†Ø¯ Ø§Ù„Ù‚ÙŠØ§Ø¯Ø© Ø§Ù„Ø³Ø±ÙŠØ¹Ø©."
      ),
      images: carGallery("passion-L", ["1920/sc_35.jpg", "1920/sc_36.jpg", "1920/sc_38.jpg"]),
      videos: ["/voyah-resources/images/car/passion-L/video_37.mp4"]
    },
    {
      id: "chapter-7",
      title: t("All-dimensional safety protection", "Protection sÃ©curitÃ© intÃ©grale", "Ø­Ù…Ø§ÙŠØ© Ø§Ù„Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ø´Ø§Ù…Ù„Ø©"),
      summary: t(
        "Structural strength, battery protection, and in-cabin privacy and safety finish the sedan with a complete all-dimensional protection story.",
        "La rigiditÃ© structurelle, la protection batterie ainsi que la confidentialitÃ© et la sÃ©curitÃ© Ã  bord finalisent la berline avec un rÃ©cit de protection intÃ©grale.",
        "ØªÙƒÙ…Ù„ Ø§Ù„ØµÙ„Ø§Ø¨Ø© Ø§Ù„Ù‡ÙŠÙƒÙ„ÙŠØ© ÙˆØ­Ù…Ø§ÙŠØ© Ø§Ù„Ø¨Ø·Ø§Ø±ÙŠØ© ÙˆØ§Ù„Ø®ØµÙˆØµÙŠØ© ÙˆØ§Ù„Ø³Ù„Ø§Ù…Ø© Ø¯Ø§Ø®Ù„ Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø© Ø¨Ù‚ØµØ© Ø­Ù…Ø§ÙŠØ© Ø´Ø§Ù…Ù„Ø© ÙˆÙ…ØªÙ…Ø§Ø³ÙƒØ©."
      ),
      images: carGallery("passion-L", ["1920/sc_39.jpg", "1920/sc_40.jpg", "1920/sc_42.jpg", "1920/sc_43.jpg"])
    }
  ],
  "free+.html": [
    {
      id: "chapter-1",
      title: t("City light-and-shadow aesthetics", "EsthÃ©tique urbaine dâ€™ombres et de lumiÃ¨re", "Ø¬Ù…Ø§Ù„ÙŠØ§Øª Ø§Ù„Ø¶ÙˆØ¡ ÙˆØ§Ù„Ø¸Ù„ Ø§Ù„Ø­Ø¶Ø±ÙŠØ©"),
      summary: t(
        "FREE+ opens with the urban design narrative: sculpted light graphics, athletic SUV proportions, and a more premium city-focused visual identity.",
        "FREE+ sâ€™ouvre sur un rÃ©cit de design urbain : des signatures lumineuses sculptÃ©es, des proportions de SUV athlÃ©tiques et une identitÃ© visuelle plus premium orientÃ©e ville.",
        "ØªØ¨Ø¯Ø£ FREE+ Ø¨Ø³Ø±Ø¯ ØªØµÙ…ÙŠÙ… Ø­Ø¶Ø±ÙŠ ÙŠØ¬Ù…Ø¹ Ø§Ù„Ø±Ø³ÙˆÙ… Ø§Ù„Ø¶ÙˆØ¦ÙŠØ© Ø§Ù„Ù…Ù†Ø­ÙˆØªØ© ÙˆØªÙ†Ø§Ø³Ø¨Ø§Øª SUV Ø§Ù„Ø±ÙŠØ§Ø¶ÙŠØ© ÙˆÙ‡ÙˆÙŠØ© Ø¨ØµØ±ÙŠØ© Ø£ÙƒØ«Ø± ÙØ®Ø§Ù…Ø© ÙˆÙ…ÙˆØ¬Ù‡Ø© Ù„Ù„Ù…Ø¯ÙŠÙ†Ø©."
      ),
      images: carGallery("free+", ["img_01_1920.png", "img_02_01.png", "img_06_01.png", "img_08.png"])
    },
    {
      id: "chapter-2",
      title: t("Voyah Cabin 2.0", "Free Cabin 2.0", "Free Cabin 2.0"),
      summary: t(
        "A softer interior palette, comfort-centered packaging, and premium seat and audio details sharpen the cabin chapter.",
        "Une palette intÃ©rieure plus douce, un agencement tournÃ© vers le confort et des dÃ©tails premium sur les siÃ¨ges et lâ€™audio renforcent le caractÃ¨re de ce chapitre habitacle.",
        "ØªØ¬Ø¹Ù„ Ù„ÙˆØ­Ø© Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø© Ø§Ù„Ø£ÙƒØ«Ø± Ù†Ø¹ÙˆÙ…Ø© ÙˆØ§Ù„ØªØºÙ„ÙŠÙ Ø§Ù„Ù…ÙˆØ¬Ù‡ Ù„Ù„Ø±Ø§Ø­Ø© ÙˆØªÙØ§ØµÙŠÙ„ Ø§Ù„Ù…Ù‚Ø§Ø¹Ø¯ ÙˆØ§Ù„ØµÙˆØª Ø§Ù„ÙØ§Ø®Ø± Ø·Ø§Ø¨Ø¹ Ù‡Ø°Ø§ Ø§Ù„ÙØµÙ„ Ø¨Ø´ÙƒÙ„ Ø£Ù‚ÙˆÙ‰."
      ),
      images: carGallery("free+", ["img_03_1920.png", "img_11_01.png", "img_17_01.png", "img_20_01.png"]),
      videos: ["/voyah-resources/images/car/free+/video_05.mp4", "/voyah-resources/images/car/free+/video_11.mp4", "/voyah-resources/images/car/free+/video_19.mp4", "/voyah-resources/images/car/free+/video_22.mp4"]
    },
    {
      id: "chapter-3",
      title: t("HarmonySpace 5 cockpit", "Cockpit HarmonySpace 5", "Ù…Ù‚ØµÙˆØ±Ø© HarmonySpace 5"),
      summary: t(
        "This section follows the digital-cockpit rhythm with voice assistant, seamless device flow, and the HarmonySpace ecosystem presented as a dedicated chapter.",
        "Cette section suit le rythme du cockpit numÃ©rique avec assistant vocal, continuitÃ© multi-appareils et Ã©cosystÃ¨me HarmonySpace prÃ©sentÃ© comme un chapitre dÃ©diÃ©.",
        "ÙŠØªØ¨Ø¹ Ù‡Ø°Ø§ Ø§Ù„Ù‚Ø³Ù… Ø¥ÙŠÙ‚Ø§Ø¹ Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø© Ø§Ù„Ø±Ù‚Ù…ÙŠØ© Ù…Ø¹ Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯ Ø§Ù„ØµÙˆØªÙŠ ÙˆØªØ¯ÙÙ‚ Ø§Ù„Ø£Ø¬Ù‡Ø²Ø© Ø§Ù„Ø³Ù„Ø³ ÙˆÙ†Ø¸Ø§Ù… HarmonySpace Ø§Ù„Ù…Ù‚Ø¯Ù… ÙƒÙØµÙ„ Ù…Ø®ØµØµ."
      ),
      images: carGallery("free+", ["img_25_1920.png", "img_28_1920.png", "img_29_01.png"]),
      videos: ["/voyah-resources/images/car/free+/video_27_20250712.mp4", "/voyah-resources/images/car/free+/video_28_1.mp4", "/voyah-resources/images/car/free+/video_28_2.mp4"]
    },
    {
      id: "chapter-4",
      title: t("Huawei Qiankun ADS 4", "Huawei Qiankun ADS 4", "Huawei Qiankun ADS 4"),
      summary: t(
        "The assisted-driving chapter mirrors the sequence: Huawei Qiankun ADS 4, sensor hardware, and P2P parking/navigation functions arranged as one story.",
        "Le chapitre conduite assistÃ©e reprend la sÃ©quence: Huawei Qiankun ADS 4, matÃ©riel de perception et fonctions P2P de navigation/parking rÃ©unis dans un rÃ©cit unique.",
        "ÙŠØ¹ÙƒØ³ ÙØµÙ„ Ø§Ù„Ù‚ÙŠØ§Ø¯Ø© Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø© Ø§Ù„ØªØ³Ù„Ø³Ù„ Ø§Ù„Ù…ØªÙƒØ§Ù…Ù„: Huawei Qiankun ADS 4 ÙˆØ£Ø¬Ù‡Ø²Ø© Ø§Ù„Ø§Ø³ØªØ´Ø¹Ø§Ø± ÙˆÙˆØ¸Ø§Ø¦Ù Ø§Ù„Ù…Ù„Ø§Ø­Ø© ÙˆØ§Ù„Ø§ØµØ·ÙØ§Ù P2P Ø¶Ù…Ù† Ù‚ØµØ© ÙˆØ§Ø­Ø¯Ø©."
      ),
      images: carGallery("free+", ["img_28_1920.png", "img_29_01.png", "img_31_1920.png"]),
      videos: ["/voyah-resources/images/car/free+/video_31.mp4"]
    },
    {
      id: "chapter-5",
      title: t("Luxury intelligent driving control", "Conduite intelligente haut de gamme", "Ø§Ù„ØªØ­ÙƒÙ… Ø§Ù„ÙØ§Ø®Ø± Ø§Ù„Ø°ÙƒÙŠ Ø¨Ø§Ù„Ù‚ÙŠØ§Ø¯Ø©"),
      summary: t(
        "FREE+ keeps the performance narrative through its intelligent damping chassis, suspension hardware, four-wheel-drive tuning, and expressive drive-mode presentation.",
        "FREE+ reprend son rÃ©cit de performance Ã  travers son chÃ¢ssis Ã  amortissement intelligent, son matÃ©riel de suspension, sa transmission intÃ©grale et sa mise en scÃ¨ne des modes de conduite.",
        "ØªØ­Ø§ÙØ¸ FREE+ Ø¹Ù„Ù‰ Ø³Ø±Ø¯ Ø£Ø¯Ø§Ø¦Ù‡Ø§ Ù…Ù† Ø®Ù„Ø§Ù„ Ø§Ù„Ù‡ÙŠÙƒÙ„ Ø°ÙŠ Ø§Ù„ØªØ®Ù…ÙŠØ¯ Ø§Ù„Ø°ÙƒÙŠ ÙˆÙ…ÙƒÙˆÙ†Ø§Øª Ø§Ù„ØªØ¹Ù„ÙŠÙ‚ ÙˆØ¶Ø¨Ø· Ø§Ù„Ø¯ÙØ¹ Ø§Ù„Ø±Ø¨Ø§Ø¹ÙŠ ÙˆØ¹Ø±Ø¶ Ø£ÙˆØ¶Ø§Ø¹ Ø§Ù„Ù‚ÙŠØ§Ø¯Ø© Ø§Ù„ØªØ¹Ø¨ÙŠØ±ÙŠØ©."
      ),
      images: carGallery("free+", ["img_32_01.png", "img_35_01.png", "img_36_01.png", "img_40_01.jpg"]),
      videos: ["/voyah-resources/images/car/free+/video_34.mp4", "/voyah-resources/images/car/free+/video_35.mp4", "/voyah-resources/images/car/free+/video_42.mp4"]
    },
    {
      id: "chapter-6",
      title: t("EDC magic carpet chassis", "Forteresse de sÃ©curitÃ© omnidirectionnelle", "Ø­ØµÙ† Ø§Ù„Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ø´Ø§Ù…Ù„"),
      summary: t(
        "Battery protection, passive body strength, and adaptive chassis tuning complete the comfort-and-control story for FREE+.",
        "La protection batterie, la rigiditÃ© passive de la carrosserie et le matÃ©riel de sÃ©curitÃ© de lâ€™Ã©dition spÃ©ciale complÃ¨tent le chapitre de sÃ©curitÃ© omnidirectionnelle de FREE+.",
        "ØªÙƒÙ…Ù„ Ø­Ù…Ø§ÙŠØ© Ø§Ù„Ø¨Ø·Ø§Ø±ÙŠØ© ÙˆÙ‚ÙˆØ© Ø§Ù„Ù‡ÙŠÙƒÙ„ Ø§Ù„Ø³Ù„Ø¨ÙŠØ© ÙˆÙ…ÙƒÙˆÙ†Ø§Øª Ø§Ù„Ø³Ù„Ø§Ù…Ø© ÙÙŠ Ø§Ù„Ù†Ø³Ø®Ø© Ø§Ù„Ø®Ø§ØµØ© ÙØµÙ„ Ø§Ù„Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ø´Ø§Ù…Ù„ Ù„Ù€ FREE+."
      ),
      images: carGallery("free+", ["img_42_1920.png", "img_43_01.png", "img_44_01.png", "img_45_01.png"])
    }
  ],
  "newCourage.html": [
    {
      id: "chapter-1",
      title: t("Starry embrace cockpit", "Un foyer chaleureux", "Ù…Ù†Ø²Ù„ Ø¯Ø§ÙØ¦"),
      summary: t(
        "The story starts with a softer, family-oriented design language, combining star-lit detailing and welcoming surfaces into a more emotional urban SUV identity.",
        "Le parcours commence par un langage de design plus doux et familial, mÃªlant dÃ©tails lumineux et surfaces accueillantes dans une identitÃ© de SUV urbain plus Ã©motionnelle.",
        "ÙŠØ¨Ø¯Ø£ Ø§Ù„Ù…Ø³Ø§Ø± Ø¨Ù„ØºØ© ØªØµÙ…ÙŠÙ… Ø£ÙƒØ«Ø± Ù†Ø¹ÙˆÙ…Ø© ÙˆØ¹Ø§Ø¦Ù„ÙŠØ© ØªØ¬Ù…Ø¹ Ø§Ù„ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ù…Ø¶ÙŠØ¦Ø© ÙˆØ§Ù„Ø£Ø³Ø·Ø­ Ø§Ù„Ù…Ø±Ø­Ø¨Ø© ÙÙŠ Ù‡ÙˆÙŠØ© SUV Ø­Ø¶Ø±ÙŠØ© Ø£ÙƒØ«Ø± Ø¹Ø§Ø·ÙÙŠØ©."
      ),
      images: carGallery("newCourage", ["1920/sc_3.jpg", "1920/sc_4.jpg", "1920/sc_6.jpg", "1920/sc_8.jpg"]),
      videos: ["/voyah-resources/images/car/h37b/video_05_20250812.mp4", "/voyah-resources/images/car/h37b/video_09.mp4"]
    },
    {
      id: "chapter-2",
      title: t("A comfortable home", "Un foyer confortable", "Ù…Ù†Ø²Ù„ Ù…Ø±ÙŠØ­"),
      summary: t(
        "Large interior volume, layered storage, zero-gravity seating, and a family-first comfort story give this section a stronger Courage identity.",
        "Le grand volume intÃ©rieur, les rangements superposÃ©s, les siÃ¨ges zÃ©ro gravitÃ© et un rÃ©cit de confort centrÃ© sur la famille renforcent nettement ce chapitre.",
        "ÙŠØ¬Ø¹Ù„ Ø§Ù„Ø­Ø¬Ù… Ø§Ù„Ø¯Ø§Ø®Ù„ÙŠ Ø§Ù„ÙƒØ¨ÙŠØ± ÙˆØ§Ù„ØªØ®Ø²ÙŠÙ† Ù…ØªØ¹Ø¯Ø¯ Ø§Ù„Ø·Ø¨Ù‚Ø§Øª ÙˆÙ…Ù‚Ø§Ø¹Ø¯ Ø§Ù†Ø¹Ø¯Ø§Ù… Ø§Ù„Ø¬Ø§Ø°Ø¨ÙŠØ© ÙˆÙ‚ØµØ© Ø§Ù„Ø±Ø§Ø­Ø© Ø§Ù„Ù…ÙˆØ¬Ù‡Ø© Ù„Ù„Ø¹Ø§Ø¦Ù„Ø© Ù‡Ø°Ø§ Ø§Ù„ÙØµÙ„ Ø¨Ø´ÙƒÙ„ ÙˆØ§Ø¶Ø­."
      ),
      images: carGallery("newCourage", ["1920/sc_12.jpg", "1920/sc_13.jpg", "1920/sc_14.jpg", "1920/sc_18.jpg", "1920/sc_21.jpg"]),
      videos: ["/voyah-resources/images/car/h37b/video_17_20250828.mp4", "/voyah-resources/images/car/h37b/video_22.mp4"]
    },
    {
      id: "chapter-3",
      title: t("A playful home", "Un foyer plein de vie", "Ù…Ù†Ø²Ù„ Ù…Ù…ØªØ¹"),
      summary: t(
        "Digital screens, Harmony audio, and emotionally expressive in-cabin lighting turn the third chapter into the more playful family-tech zone seen on the site.",
        "Les Ã©crans numÃ©riques, lâ€™audio Harmony et lâ€™Ã©clairage Ã©motionnel de lâ€™habitacle transforment le troisiÃ¨me chapitre en zone techno-familiale plus ludique.",
        "ØªØ­ÙˆÙ„ Ø§Ù„Ø´Ø§Ø´Ø§Øª Ø§Ù„Ø±Ù‚Ù…ÙŠØ© ÙˆØµÙˆØª Harmony ÙˆØ§Ù„Ø¥Ø¶Ø§Ø¡Ø© Ø§Ù„Ø¹Ø§Ø·ÙÙŠØ© Ø¯Ø§Ø®Ù„ Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø© Ø§Ù„ÙØµÙ„ Ø§Ù„Ø«Ø§Ù„Ø« Ø¥Ù„Ù‰ Ù…Ø³Ø§Ø­Ø© ØªÙ‚Ù†ÙŠØ© Ø¹Ø§Ø¦Ù„ÙŠØ© Ø£ÙƒØ«Ø± Ù…Ø±Ø­Ù‹Ø§."
      ),
      images: carGallery("newCourage", ["1920/sc_23.jpg", "1920/sc_24.jpg", "1920/sc_28.jpg"]),
      videos: ["/voyah-resources/images/car/h37b/video_26_1.mp4", "/voyah-resources/images/car/h37b/video_26_2.mp4", "/voyah-resources/images/car/h37b/video_26_3.mp4", "/voyah-resources/images/car/h37b/video_27.mp4"]
    },
    {
      id: "chapter-4",
      title: t("A smart home", "Un foyer intelligent", "Ù…Ù†Ø²Ù„ Ø°ÙƒÙŠ"),
      summary: t(
        "Huawei Qiankun ADS 4, collision-avoidance systems, and parking/navigation choreography now read as a dedicated smart-driving chapter.",
        "Huawei Qiankun ADS 4, les systÃ¨mes dâ€™Ã©vitement de collision et la chorÃ©graphie navigation/parking se lisent comme un chapitre dÃ©diÃ© Ã  la conduite intelligente.",
        "ØªÙÙ‚Ø±Ø£ Ø£Ù†Ø¸Ù…Ø© Huawei Qiankun ADS 4 ÙˆØªØ¬Ù†Ø¨ Ø§Ù„Ø§ØµØ·Ø¯Ø§Ù… ÙˆØ­Ø±ÙƒØ§Øª Ø§Ù„Ù…Ù„Ø§Ø­Ø© ÙˆØ§Ù„Ø§ØµØ·ÙØ§Ù ÙƒÙØµÙ„ Ù…Ø®ØµØµ Ù„Ù„Ù‚ÙŠØ§Ø¯Ø© Ø§Ù„Ø°ÙƒÙŠØ©."
      ),
      images: carGallery("newCourage", ["1920/sc_29.jpg", "1920/sc_31.jpg"]),
      videos: ["/voyah-resources/images/car/h37b/video_30.mp4", "/voyah-resources/images/car/h37b/video_32_1.mp4", "/voyah-resources/images/car/h37b/video_32_2.mp4"]
    },
    {
      id: "chapter-5",
      title: t("An efficient home", "Un foyer efficient", "Ù…Ù†Ø²Ù„ ÙØ¹Ù‘Ø§Ù„"),
      summary: t(
        "The efficiency story combines 800V architecture, long range, ultra-fast charging, and energy-sharing functions into one calm EV chapter.",
        "Le rÃ©cit de lâ€™efficience combine architecture 800V, grande autonomie, recharge ultra-rapide et fonctions de partage dâ€™Ã©nergie dans un chapitre EV unifiÃ©.",
        "ÙŠØ¬Ù…Ø¹ Ø³Ø±Ø¯ Ø§Ù„ÙƒÙØ§Ø¡Ø© Ø¨ÙŠÙ† Ø¨Ù†ÙŠØ© 800V ÙˆØ§Ù„Ù…Ø¯Ù‰ Ø§Ù„Ø·ÙˆÙŠÙ„ ÙˆØ§Ù„Ø´Ø­Ù† Ø§Ù„ÙØ§Ø¦Ù‚ Ø§Ù„Ø³Ø±Ø¹Ø© ÙˆÙˆØ¸Ø§Ø¦Ù Ù…Ø´Ø§Ø±ÙƒØ© Ø§Ù„Ø·Ø§Ù‚Ø© Ø¶Ù…Ù† ÙØµÙ„ ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠ Ù…ÙˆØ­Ø¯."
      ),
      images: carGallery("newCourage", ["1920/sc_34.jpg", "1920/sc_35.jpg", "1920/sc_37.jpg", "1920/sc_38.jpg"]),
      videos: ["/voyah-resources/images/car/h37b/video_36_20250828.mp4"]
    },
    {
      id: "chapter-6",
      title: t("A secure home", "Un foyer rassurant", "Ù…Ù†Ø²Ù„ Ø¢Ù…Ù†"),
      summary: t(
        "Body safety, battery protection, and all-weather assurance close the New Courage story with a family-protection emphasis instead of a feature ending.",
        "La sÃ©curitÃ© de carrosserie, la protection batterie et lâ€™assurance tous temps concluent lâ€™histoire de New Courage avec un accent familial plutÃ´t quâ€™une simple liste dâ€™Ã©quipements.",
        "ØªØ®ØªØªÙ… Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ù‡ÙŠÙƒÙ„ ÙˆØ­Ù…Ø§ÙŠØ© Ø§Ù„Ø¨Ø·Ø§Ø±ÙŠØ© ÙˆØ§Ù„Ø·Ù…Ø£Ù†ÙŠÙ†Ø© ÙÙŠ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø¸Ø±ÙˆÙ Ù‚ØµØ© New Courage Ø¨ØªØ±ÙƒÙŠØ² Ø¹Ø§Ø¦Ù„ÙŠ Ø¹Ù„Ù‰ Ø§Ù„Ø­Ù…Ø§ÙŠØ©."
      ),
      images: carGallery("newCourage", ["1920/sc_39.jpg", "1920/sc_40.jpg", "1920/sc_42.jpg"])
    }
  ],
  "titan_blackedition.html": [
    {
      id: "chapter-1",
      title: t("Black exterior presence", "Présence extérieure noire", "حضور خارجي أسود"),
      summary: t(
        "The Black Edition sets a darker flagship tone with blacked-out trim, a more dramatic front face, and a stealthier premium expression.",
        "La Black Edition impose un ton phare plus sombre avec des éléments noirs, une face avant plus dramatique et une expression premium furtive.",
        "تمنح Black Edition نغمة رائدة أكثر قتامة مع تطعيمات سوداء وواجهة أمامية أكثر درامية وتعبير فاخر أكثر هدوءًا."
      ),
      images: carGallery("titan_blackedition", ["1920/sc_1.jpg", "1920/sc_3_1.jpg", "1920/sc_8.jpg"])
    },
    {
      id: "chapter-2",
      title: t("Black cabin texture", "Texture habitacle noire", "ملمس المقصورة السوداء"),
      summary: t(
        "Inside, darker materials, contrast stitching, and the calmer seat architecture keep the cabin aligned with the edition’s more restrained luxury story.",
        "À bord, des matériaux plus sombres, des surpiqûres contrastées et une architecture de sièges plus calme maintiennent l’habitacle dans l’histoire de luxe contenu de cette édition.",
        "داخل المقصورة، تحافظ الخامات الداكنة والخياطة المتباينة وبنية المقاعد الهادئة على انسجام المقصورة مع قصة الفخامة الأكثر تحفظًا في هذه النسخة."
      ),
      images: carGallery("titan_blackedition", ["1920/sc_10_1.jpg", "1920/sc_17.jpg", "1920/sc_18_1.jpg"])
    },
    {
      id: "chapter-3",
      title: t("Executive intelligence", "Intelligence exécutive", "ذكاء تنفيذي"),
      summary: t(
        "Assisted driving, smart cockpit interaction, and premium travel comfort keep the Black Edition feeling like a full flagship rather than a trim package.",
        "La conduite assistée, l’interaction du cockpit intelligent et le confort de voyage premium font de la Black Edition un véritable flagship et non une simple finition.",
        "تجعل القيادة المساعدة وتفاعل المقصورة الذكية وراحة السفر الفاخرة من Black Edition طرازًا رائدًا كاملًا لا مجرد فئة تجهيز."
      ),
      images: carGallery("titan_blackedition", ["1920/sc_20.jpg", "1920/sc_23_1.jpg", "1920/sc_15.jpg"]),
      videos: ["/voyah-resources/images/car/titan_blackedition/video_01.mp4"]
    },
    {
      id: "chapter-4",
      title: t("Quiet confidence", "Confiance silencieuse", "ثقة هادئة"),
      summary: t(
        "Safety structure, battery protection, and wide-cabin calm finish the edition with the same calm confidence expected from the Titan family.",
        "La structure de sécurité, la protection de la batterie et le calme du grand habitacle concluent l’édition avec la même assurance que la famille Titan.",
        "تُختتم النسخة ببنية أمان وحماية للبطارية وهدوء المقصورة الواسعة بنفس الثقة الهادئة المتوقعة من عائلة Titan."
      ),
      images: carGallery("titan_blackedition", ["1920/sc_18_1.jpg", "1920/sc_20.jpg", "1920/sc_23_1.jpg"])
    }
  ],
  "titan_X8.html": [
    {
      id: "chapter-1",
      title: t("Expanded family stance", "Posture familiale étendue", "حضور عائلي موسع"),
      summary: t(
        "Titan X8 opens with a broad SUV silhouette, a longer family-ready proportion, and a more practical visual stance than the ceremonial core Titan route.",
        "Titan X8 s’ouvre sur une silhouette de SUV plus large, des proportions familiales allongées et une posture visuelle plus pratique que la Titan cérémonielle.",
        "تبدأ Titan X8 بهيئة SUV أعرض وتناسبات أطول موجهة للعائلة وحضور بصري أكثر عملية من مسار Titan الاحتفالي."
      ),
      images: carGallery("titan_X8", ["1920/sc_1.jpg"])
    },
    {
      id: "chapter-2",
      title: t("Three-row usability", "Polyvalence trois rangs", "عملية بثلاثة صفوف"),
      summary: t(
        "Its cabin story centers on access, usable third-row space, and calmer family comfort so the X8 reads as the more pragmatic large-SUV variant.",
        "Le récit d’habitacle met l’accent sur l’accès, le vrai volume du troisième rang et un confort familial plus calme afin que le X8 paraisse comme la variante la plus pragmatique.",
        "يركز سرد المقصورة على سهولة الدخول والمساحة الحقيقية للصف الثالث وراحة عائلية أكثر هدوءًا ليظهر X8 بوصفه النسخة الأكثر عملية."
      ),
      images: carGallery("titan_X8", ["1920/sc_1.jpg"])
    },
    {
      id: "chapter-3",
      title: t("Road-trip calm", "Sérénité grand voyage", "هدوء الرحلات الطويلة"),
      summary: t(
        "Long-distance assurance, composed ride quality, and broad-shouldered SUV calm keep the X8 positioned as the family-touring expression of Titan.",
        "L’assurance sur longue distance, la qualité de roulage posée et le calme SUV à large carrure positionnent le X8 comme l’expression familiale routière de Titan.",
        "يحافظ الاطمئنان في الرحلات الطويلة وهدوء الركوب وحضور SUV الواثق على تموضع X8 كتعبير عائلي مخصص للرحلات ضمن عائلة Titan."
      ),
      images: carGallery("titan_X8", ["1920/sc_1.jpg"])
    },
    {
      id: "chapter-4",
      title: t("Flagship safety", "Sécurité phare", "سلامة رائدة"),
      summary: t(
        "Safety structure and battery protection close the route with the same reassuring Titan-family confidence, translated into a more family-focused package.",
        "La structure de sécurité et la protection de la batterie ferment le parcours avec la même assurance de la famille Titan, traduite dans un ensemble plus familial.",
        "تختتم بنية السلامة وحماية البطارية هذا المسار بنفس ثقة عائلة Titan المطمئنة ولكن ضمن حزمة أكثر تركيزًا على العائلة."
      ),
      images: carGallery("titan_X8", ["1920/sc_1.jpg"])
    }
  ],
  "passion.html": [
    {
      id: "chapter-1",
      kicker: t("Sedan design", "Design berline", "تصميم السيدان"),
      title: t("Oriental flowing sedan stance", "Posture de berline fluide orientale", "هيئة سيدان شرقية انسيابية"),
      summary: t(
        "Passion presents a sleeker electric-sedan stance with crisp shoulder lines, cleaner surfacing, and a calmer premium expression tuned for executive travel.",
        "Passion affiche une posture de berline électrique plus fluide, avec des épaules nettes, des surfaces plus pures et une expression premium plus calme pensée pour le voyage exécutif.",
        "تقدم Passion هيئة سيدان كهربائية أكثر انسيابية مع خطوط كتف واضحة وأسـطح أنقى وتعبير فاخر أكثر هدوءًا مهيأ للسفر التنفيذي."
      ),
      images: carGallery("passion", ["1920/fl01.jpg", "1920/fl02.jpg", "1920/fl03.jpg", "1920/fl0331.jpg"])
    },
    {
      id: "chapter-2",
      kicker: t("Interior", "Habitacle", "المقصورة"),
      title: t("Executive cabin comfort", "Confort cabine exécutif", "راحة مقصورة تنفيذية"),
      summary: t(
        "The cabin chapter centers on quiet travel, refined front and rear seating, and a calmer interior rhythm that gives Passion a genuine grand-touring atmosphere.",
        "Le chapitre habitacle se concentre sur le voyage silencieux, des assises avant et arrière raffinées et un rythme intérieur plus apaisé qui donne à Passion une vraie ambiance de grand tourisme.",
        "يركز فصل المقصورة على السفر الهادئ والمقاعد المصقولة في الأمام والخلف وإيقاع داخلي أكثر سكينة يمنح Passion أجواء رحلات طويلة حقيقية."
      ),
      images: carGallery("passion", ["1920/fl04.jpg", "1920/fl05.jpg", "1920/fl06.jpg", "1920/fl07.jpg"]),
      videos: ["/voyah-resources/images/car/passion/video_01.mp4"]
    },
    {
      id: "chapter-3",
      kicker: t("Digital cockpit", "Cockpit numérique", "المقصورة الرقمية"),
      title: t("HarmonySpace digital cockpit", "Cockpit numérique HarmonySpace", "مقصورة رقمية HarmonySpace"),
      summary: t(
        "Digital interaction, a wider display atmosphere, and connected travel logic give Passion a cleaner, more intelligent sedan identity without losing its composed tone.",
        "L’interaction numérique, l’atmosphère d’affichage élargie et la logique de voyage connecté donnent à Passion une identité de berline plus intelligente sans perdre sa retenue.",
        "تمنح التفاعلات الرقمية وأجواء الشاشة الأعرض ومنطق السفر المتصل Passion هوية سيدان أكثر ذكاءً من دون فقدان نبرتها المتزنة."
      ),
      images: carGallery("passion", ["1920/fl10.jpg", "1920/fl11.jpg", "1920/fl14.jpg", "1920/fl21.jpg"])
    },
    {
      id: "chapter-4",
      kicker: t("Dynamics", "Dynamique", "الديناميكيات"),
      title: t("Touring confidence", "Confiance grand tourisme", "ثقة الرحلات الطويلة"),
      summary: t(
        "Chassis tuning, intelligent safety logic, and long-distance composure close the route with the same measured confidence expected from Voyah’s executive sedan family.",
        "Le réglage du châssis, la logique de sécurité intelligente et la sérénité longue distance concluent le parcours avec la même maîtrise attendue de la famille de berlines exécutives Voyah.",
        "تختتم معايرة الهيكل ومنطق السلامة الذكي وهدوء الرحلات الطويلة هذا المسار بنفس الثقة المتزنة المتوقعة من عائلة سيدان Voyah التنفيذية."
      ),
      images: carGallery("passion", ["1920/fl15.jpg", "1920/fl1701.jpg", "1920/fl1703.jpg", "1920/fl1802.jpg"])
    },
    {
      id: "chapter-5",
      kicker: t("Safety", "Sécurité", "السلامة"),
      title: t("Protective sedan assurance", "Assurance protectrice de la berline", "طمأنينة حماية السيدان"),
      summary: t(
        "A reinforced body strategy, clear driver-assistance story, and calmer long-route confidence let Passion finish on a more premium safety note.",
        "Une stratégie de carrosserie renforcée, un récit clair de la conduite assistée et une confiance plus apaisée sur longue distance permettent à Passion de se conclure sur une note de sécurité plus premium.",
        "تمنح بنية الهيكل المعززة ومسار القيادة المساعدة الواضح والثقة الهادئة في الرحلات الطويلة Passion خاتمة سلامة أكثر فخامة."
      ),
      images: carGallery("passion", ["1920/fl1805.jpg", "1920/fl1808.jpg", "1920/fl1820.jpg"])
    }
  ],
  "free.html": [
    {
      id: "chapter-1",
      kicker: t("Exterior", "Extérieur", "الخارجية"),
      title: t("Long-range crossover design", "Design crossover longue autonomie", "تصميم كروس أوفر بعيد المدى"),
      summary: t(
        "FREE 318 opens with a long-range crossover expression, elevated stance, and touring-oriented SUV proportions that feel calmer and more road-trip focused than a city SUV.",
        "FREE 318 s’ouvre sur une expression de crossover longue autonomie, une posture surélevée et des proportions de SUV pensées pour le voyage, plus apaisées qu’un SUV urbain.",
        "تبدأ FREE 318 بتعبير كروس أوفر بعيد المدى مع حضور مرتفع وتناسبات SUV موجهة للسفر تبدو أهدأ وأكثر تركيزًا على الرحلات من SUV المدنية."
      ),
      images: carGallery("free", ["bg-free-h97D-1.jpg", "bg-free-h97D-4.jpg", "bg_free_pc4_0002_1920.jpg", "bg_free_pc15_0001_1920.jpg"])
    },
    {
      id: "chapter-2",
      kicker: t("Comfort", "Confort", "الراحة"),
      title: t("Relaxed touring comfort", "Confort de voyage apaisé", "راحة سفر مريحة"),
      summary: t(
        "The cabin chapter emphasizes everyday comfort, calm seating, and a more relaxed premium rhythm that makes FREE 318 feel tuned for longer journeys.",
        "Le chapitre habitacle met l’accent sur le confort quotidien, des sièges paisibles et un rythme premium plus détendu qui fait sentir FREE 318 pensée pour la grande route.",
        "يركز فصل المقصورة على الراحة اليومية والمقاعد الهادئة وإيقاع فاخر أكثر استرخاءً يجعل FREE 318 مهيأة للرحلات الأطول."
      ),
      images: carGallery("free", ["bg_free_pc21_0001.jpg", "bg_free_pc21_0003.jpg", "bg_free_pc23_0001.jpg", "bg_free_pc28_0001_1920.jpg"])
    },
    {
      id: "chapter-3",
      kicker: t("Digital cockpit", "Cockpit numérique", "المقصورة الرقمية"),
      title: t("Smart cockpit confidence", "Confiance du cockpit intelligent", "ثقة المقصورة الذكية"),
      summary: t(
        "Harmony-style interaction, connected travel logic, and reassuring digital assistance give FREE 318 a calmer smart-cockpit character.",
        "L’interaction de style Harmony, la logique de voyage connectée et l’assistance numérique rassurante donnent à FREE 318 un caractère de cockpit intelligent plus serein.",
        "تمنح تفاعلات Harmony ومنطق السفر المتصل والمساعدة الرقمية المطمئنة FREE 318 طابع مقصورة ذكية أكثر هدوءًا."
      ),
      images: carGallery("free", ["bg_free_pc29_0001.jpg", "bg_free_pc29_0002.jpg", "bg_free_pc30_0001.jpg", "bg_free_pc31_0001.jpg"]),
      videos: ["/voyah-resources/images/car/free/video_01.mp4"]
    },
    {
      id: "chapter-4",
      kicker: t("Range and charging", "Autonomie et recharge", "المدى والشحن"),
      title: t("Electric confidence", "Confiance électrique", "ثقة كهربائية"),
      summary: t(
        "Battery assurance, charging convenience, and long-range calm keep the model positioned as a confident touring crossover rather than a simple trim update.",
        "L’assurance batterie, la praticité de recharge et le calme longue autonomie positionnent le modèle comme un crossover de voyage convaincant plutôt qu’une simple évolution.",
        "يحافظ الاطمئنان إلى البطارية وسهولة الشحن وهدوء المدى الطويل على تموضع الطراز ككروس أوفر واثق للرحلات لا مجرد تحديث بسيط."
      ),
      images: carGallery("free", ["bg_free_pc35_0001_1920.jpg", "bg_free_pc36_0001.jpg", "bg_free_pc37_0002.jpg", "bg_free_pc38_0001.jpg"])
    },
    {
      id: "chapter-5",
      kicker: t("Safety and usability", "Sécurité et usage", "السلامة والاستخدام"),
      title: t("Everyday versatility", "Polyvalence quotidienne", "تنوع يومي"),
      summary: t(
        "Usability, comfort, and premium practicality close the page in a more family-ready crossover tone with a stronger everyday-luxury message.",
        "L’usage, le confort et la praticité premium concluent la page dans un ton de crossover plus familial avec un message de luxe quotidien plus clair.",
        "تُختتم الصفحة بروح كروس أوفر أكثر جاهزية للعائلة عبر الاستخدام والراحة والعملية الفاخرة مع رسالة أوضح عن الفخامة اليومية."
      ),
      images: carGallery("free", ["bg_free_pc27_0006.jpg", "bg_free_pc28_0001_1920.jpg", "bg_free_pc29_0003.jpg"])
    }
  ],
  "courage.html": [
    {
      id: "chapter-1",
      kicker: t("Exterior", "Extérieur", "الخارجية"),
      title: t("Original electric SUV design", "Design original de SUV électrique", "تصميم SUV كهربائية أصيل"),
      summary: t(
        "Courage opens with a clearer family-electric stance, expressive surfaces, and a more approachable SUV identity than the newer launch-led route.",
        "Courage s’ouvre sur une posture familiale électrique plus lisible, des surfaces expressives et une identité SUV plus accessible que la route de lancement plus récente.",
        "تبدأ Courage بحضور عائلي كهربائي أوضح وأسـطح تعبيرية وهوية SUV أكثر قربًا من المستخدم مقارنة بالمسار الأحدث بطابع الإطلاق."
      ),
      images: carGallery("courage", ["1920/h37_pc01_0001.jpg", "1920/h37_pc02_0001.jpg", "1920/h37_pc03_0001.jpg", "1920/h37_pc03_1_0001.jpg"])
    },
    {
      id: "chapter-2",
      kicker: t("Cabin", "Habitacle", "المقصورة"),
      title: t("Family comfort cabin", "Habitacle confort familial", "مقصورة راحة عائلية"),
      summary: t(
        "The cabin chapter focuses on easier daily comfort, softer lounge-like space, and a more practical family rhythm than a dramatic showpiece interior.",
        "Le chapitre habitacle met l’accent sur un confort quotidien plus simple, un espace plus doux façon salon et un rythme familial plus pratique qu’un intérieur démonstratif.",
        "يركز فصل المقصورة على راحة يومية أسهل ومساحة أهدأ بطابع الصالون وإيقاع عائلي أكثر عملية من مقصورة استعراضية."
      ),
      images: carGallery("courage", ["1920/h37_pc04_0001.jpg", "1920/h37_pc05_1_0001.jpg", "1920/h37_pc06_0001.jpg", "1920/h37_pc07_0001.jpg"])
    },
    {
      id: "chapter-3",
      kicker: t("Smart cockpit", "Cockpit intelligent", "المقصورة الذكية"),
      title: t("Connected family cockpit", "Cockpit familial connecté", "مقصورة عائلية متصلة"),
      summary: t(
        "Digital displays, connected controls, and everyday-friendly cabin logic give Courage a practical intelligent-cockpit identity.",
        "Les affichages numériques, les commandes connectées et la logique d’habitacle pensée pour le quotidien donnent à Courage une identité de cockpit intelligent pratique.",
        "تمنح الشاشات الرقمية وأدوات التحكم المتصلة ومنطق المقصورة المهيأ للحياة اليومية Courage هوية مقصورة ذكية عملية."
      ),
      images: carGallery("courage", ["1920/h37_pc10_0001.jpg", "1920/h37_pc11_0001.jpg", "1920/h37_pc12_0001.jpg", "1920/h37_pc13_0001.jpg"])
    },
    {
      id: "chapter-4",
      kicker: t("Intelligent driving", "Conduite intelligente", "القيادة الذكية"),
      title: t("Assisted travel confidence", "Confiance de voyage assisté", "ثقة السفر المساعد"),
      summary: t(
        "Driver-assistance features, parking support, and calmer road awareness position Courage as an everyday intelligent SUV rather than a pure launch showcase.",
        "Les aides à la conduite, l’assistance au stationnement et la conscience routière plus sereine positionnent Courage comme un SUV intelligent du quotidien plutôt qu’une pure vitrine de lancement.",
        "تضع ميزات المساعدة على القيادة ودعم الركن والوعي الهادئ بالطريق Courage كسـيارة SUV ذكية للاستخدام اليومي لا مجرد منصة استعراضية."
      ),
      images: carGallery("courage", ["1920/h37_pc14_0001.jpg", "1920/h37_pc15_0001.jpg", "1920/h37_pc16_0001.jpg", "1920/h37_pc17_0001.jpg"])
    },
    {
      id: "chapter-5",
      kicker: t("Efficiency", "Efficience", "الكفاءة"),
      title: t("Electric range and calm", "Autonomie électrique et sérénité", "المدى الكهربائي والهدوء"),
      summary: t(
        "Battery capacity, high-voltage confidence, and calmer long-route efficiency close the page with a more grounded electric-SUV promise.",
        "La capacité batterie, la confiance haute tension et l’efficience plus sereine sur longue distance concluent la page avec une promesse de SUV électrique plus concrète.",
        "تختتم سعة البطارية والثقة في الجهد العالي والكفاءة الهادئة في الرحلات الطويلة الصفحة بوعد أكثر واقعية لسيارة SUV كهربائية."
      ),
      images: carGallery("courage", ["1920/h37_pc18_0001.jpg", "1920/h37_pc19_0001.jpg", "1920/h37_pc21_0001.jpg", "1920/h37_pc22_0001.jpg"])
    },
    {
      id: "chapter-6",
      kicker: t("Safety", "Sécurité", "السلامة"),
      title: t("Protective family assurance", "Assurance familiale protectrice", "طمأنينة عائلية حامية"),
      summary: t(
        "Body protection, battery security, and family reassurance finish Courage with a balanced, practical premium tone.",
        "La protection de la carrosserie, la sécurité batterie et la réassurance familiale concluent Courage avec une tonalité premium équilibrée et pratique.",
        "تختتم حماية الهيكل وأمان البطارية والطمأنينة العائلية Courage بنبرة فاخرة متوازنة وعملية."
      ),
      images: carGallery("courage", ["1920/h37_pc24_0001.jpg", "1920/h37_pc25_0001.jpg", "1920/h37_pc26_0001.jpg", "1920/h37_pc28_0001.jpg"])
    }
  ],
  "dreamer-champion.html": [
    {
      id: "chapter-1",
      kicker: t("Special edition", "Édition spéciale", "إصدار خاص"),
      title: t("Champion edition presence", "Présence d’édition Champion", "حضور إصدار Champion"),
      summary: t(
        "Dreamer Champion opens with a ceremonial MPV presence, stronger premium detailing, and a more special-edition character than the standard Dreamer family routes.",
        "Dreamer Champion s’ouvre sur une présence de MPV cérémonielle, un traitement premium plus affirmé et un caractère plus exclusif que les routes Dreamer standards.",
        "تبدأ Dreamer Champion بحضور MPV احتفالي وتفاصيل فاخرة أكثر وضوحًا وشخصية إصدار خاص أقوى من مسارات Dreamer القياسية."
      ),
      images: carGallery("dreamer-champion", ["kv_1920.jpg", "bg_2_n_1920.jpg", "bg_3_n.jpg", "bg_6_n_1920.jpg"])
    },
    {
      id: "chapter-2",
      kicker: t("Hospitality cabin", "Habitacle hospitalité", "مقصورة الضيافة"),
      title: t("Executive lounge comfort", "Confort lounge exécutif", "راحة صالون تنفيذي"),
      summary: t(
        "Second-row comfort, ceremonial seating atmosphere, and a quieter hospitality-first cabin make Champion feel more curated than the regular Dreamer routes.",
        "Le confort du deuxième rang, l’atmosphère cérémonielle des sièges et un habitacle plus silencieux axé sur l’hospitalité rendent Champion plus soigneusement composé que les routes Dreamer classiques.",
        "تجعل راحة الصف الثاني وأجواء المقاعد الاحتفالية والمقصورة الأكثر هدوءًا الموجهة للضيافة Champion أكثر عناية من مسارات Dreamer العادية."
      ),
      images: carGallery("dreamer-champion", ["bg_11_n_1920.jpg", "bg_12_n_banner01.jpg", "bg_13_n_1920.jpg", "bg_14_n.jpg"])
    },
    {
      id: "chapter-3",
      kicker: t("Smart cockpit", "Cockpit intelligent", "المقصورة الذكية"),
      title: t("Connected executive cockpit", "Cockpit exécutif connecté", "مقصورة تنفيذية متصلة"),
      summary: t(
        "Harmony-style interaction, intelligent assistance, and premium rear-cabin technology give Champion a stronger executive-tech identity.",
        "L’interaction de style Harmony, l’assistance intelligente et la technologie premium pour la partie arrière donnent à Champion une identité techno-exécutive plus affirmée.",
        "تمنح تفاعلات Harmony والمساعدة الذكية وتقنيات المقصورة الخلفية الفاخرة Champion هوية تنفيذية تقنية أكثر وضوحًا."
      ),
      images: carGallery("dreamer-champion", ["bg_15_n_1920.jpg", "bg_16_n_banner01.jpg", "bg_17_n_banner01.jpg", "bg_18_n_1920.jpg"])
    },
    {
      id: "chapter-4",
      kicker: t("Safety and travel", "Sécurité et voyage", "السلامة والسفر"),
      title: t("Long-route assurance", "Assurance longue distance", "ثقة الرحلات الطويلة"),
      summary: t(
        "Body protection, calm long-route tuning, and MPV family reassurance close the route with a more special-edition interpretation of Dreamer confidence.",
        "La protection de la carrosserie, la sérénité sur longue distance et la réassurance familiale d’un MPV concluent le parcours avec une interprétation plus spéciale de la confiance Dreamer.",
        "تختتم حماية الهيكل وهدوء الرحلات الطويلة وطمأنينة MPV العائلية هذا المسار بتفسير أكثر خصوصية لثقة Dreamer."
      ),
      images: carGallery("dreamer-champion", ["bg_19_n_banner01.jpg", "bg_20_n_banner01.jpg", "bg_21_n_1920.jpg", "bg_24_n_banner01.jpg"])
    }
  ],
  "dreamriver.html": [
    {
      id: "chapter-1",
      title: t("Scenic edition presence", "Présence d’édition panoramique", "حضور إصدار مشهدي"),
      summary: t(
        "Dreamer Mountain River opens with a scenic, hospitality-first interpretation of the Dreamer MPV shape.",
        "Dreamer Mountain River s’ouvre sur une interprétation panoramique et hospitalière de la silhouette MPV Dreamer.",
        "تبدأ Dreamer Mountain River بتفسير مشهدي وطابع ضيافة أولًا لشكل Dreamer MPV."
      ),
      images: carGallery("dreamriver", ["kv_1920.png", "sc_2.png", "sc_4.png"])
    },
    {
      id: "chapter-2",
      title: t("Warm lounge cabin", "Cabine salon chaleureuse", "مقصورة صالون دافئة"),
      summary: t(
        "The interior narrative emphasizes relaxed seating, shared travel comfort, and a calmer family lounge mood.",
        "Le récit intérieur met l’accent sur des sièges détendus, un confort de voyage partagé et une ambiance salon familiale plus calme.",
        "يركز السرد الداخلي على الجلسة المريحة وراحة السفر المشتركة وأجواء صالون عائلية أكثر هدوءًا."
      ),
      images: carGallery("dreamriver", ["sc_5.png", "sc_6.png", "sc_7.png"])
    },
    {
      id: "chapter-3",
      title: t("Travel calm", "Sérénité de voyage", "هدوء السفر"),
      summary: t(
        "Long-distance composure and family-oriented calm keep the edition feeling like a scenic companion rather than a standard trim.",
        "La sérénité longue distance et le calme orienté famille font de cette édition un compagnon de voyage scénique plutôt qu’une finition ordinaire.",
        "تحافظ الثقة في الرحلات الطويلة والهدوء الموجه للعائلة على إحساس الإصدار بوصفه رفيقًا مشهديًا لا مجرد فئة عادية."
      ),
      images: carGallery("dreamriver", ["sc_8.png", "sc_5.png", "sc_6.png"])
    },
    {
      id: "chapter-4",
      title: t("Shared journeys", "Voyages partagés", "رحلات مشتركة"),
      summary: t(
        "The final chapter closes with safety and shared-travel reassurance, keeping the Mountain River tone elegant and familial.",
        "Le dernier chapitre se ferme sur la sécurité et la confiance du voyage partagé, en conservant un ton élégant et familial.",
        "يختتم الفصل الأخير بطمأنينة السلامة والسفر المشترك مع الحفاظ على نبرة أنيقة وعائلية."
      ),
      images: carGallery("dreamriver", ["sc_2.png", "sc_7.png", "sc_8.png"])
    }
  ],
  "dreamer.html": [
    {
      id: "chapter-1",
      title: t("Luxury MPV presence", "Présence MPV de luxe", "حضور MPV فاخرة"),
      summary: t(
        "The 24 Dreamer opens with a broad luxury MPV presence and a strong family-first cabin story.",
        "Le Dreamer 24 s’ouvre sur une large présence de MPV de luxe et un récit d’habitacle centré sur la famille.",
        "تبدأ Dreamer 24 بحضور MPV فخم واسع وقصة مقصورة موجهة للعائلة."
      ),
      images: carGallery("dreamer", ["bg_2_1920.jpg", "bg_6_1920.jpg", "bg_13_1920.jpg"])
    },
    {
      id: "chapter-2",
      title: t("Rear cabin comfort", "Confort arrière", "راحة الصف الخلفي"),
      summary: t(
        "The cabin chapter focuses on second and third-row comfort, generous packaging, and lounge-like long-distance travel.",
        "Le chapitre habitacle se concentre sur le confort des deuxième et troisième rangs, un agencement généreux et un voyage longue distance façon salon.",
        "يركز فصل المقصورة على راحة الصفين الثاني والثالث، والتوزيع السخي، والسفر الطويل بطابع الصالون."
      ),
      images: carGallery("dreamer", ["bg_17_1920.jpg", "bg_21_1920.jpg", "bg_24_1920.jpg"])
    },
    {
      id: "chapter-3",
      title: t("Smart family cockpit", "Cockpit familial intelligent", "مقصورة عائلية ذكية"),
      summary: t(
        "Connected screens, intelligent assistance, and premium family convenience keep the Dreamer identity calm and modern.",
        "Les écrans connectés, l’assistance intelligente et la praticité familiale premium maintiennent une identité Dreamer calme et moderne.",
        "تحافظ الشاشات المتصلة والمساعدة الذكية والعملية العائلية الفاخرة على هوية Dreamer الهادئة والحديثة."
      ),
      images: carGallery("dreamer", ["bg_swiper_4_1.jpg", "bg_swiper_7_1.jpg", "bg_4_n.jpg"]),
      videos: ["/voyah-resources/images/car/dreamer/video_01.mp4"]
    },
    {
      id: "chapter-4",
      title: t("Family safety", "Sécurité familiale", "السلامة العائلية"),
      summary: t(
        "Body protection and long-route confidence finish the route with a polished MPV family-safety statement.",
        "La protection de la carrosserie et la confiance sur longue distance concluent le parcours par une déclaration de sécurité familiale MPV très aboutie.",
        "تختتم حماية الهيكل والثقة في الرحلات الطويلة المسار بتعبير متقن عن سلامة العائلة في MPV."
      ),
      images: carGallery("dreamer", ["bg_21_1920.jpg", "bg_24_1920.jpg", "bg_swiper_4_1.jpg"])
    }
  ]
};
const getExpandedModelGallery = (slug, fallback) => modelGalleryMap[slug] ?? fallback;
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
      const summaryParts = splitClauses(sectionSummary ?? "");
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
      if ((section.videos?.length ?? 0) > 0 || section.images.length >= 4) {
        return "carousel";
      }
      if (index === 3 || section.images.length <= 1) {
        return "banner";
      }
      return "image";
    };
    const renderedSections = computed(() => {
      const sourceSections = authoredStorySections.value?.length ? authoredStorySections.value.map((section, index) => {
        const kind = inferKind(section, index);
        return {
          id: section.id,
          kicker: section.kicker ? textFor(section.kicker) : void 0,
          title: textFor(section.title),
          summary: textFor(section.summary),
          image: section.images[0] ?? gallery.value[index] ?? props.model.heroImage,
          images: section.images,
          videos: section.videos,
          details: buildDetails(textFor(section.title), textFor(section.summary), index),
          kind
        };
      }) : gallery.value.map((image, index) => ({
        id: `chapter-${index + 1}`,
        kicker: void 0,
        title: index === 0 ? textFor(props.model.title) : textFor(props.model.features[index % Math.max(props.model.features.length, 1)]?.title ?? props.model.title),
        summary: index === 0 ? textFor(props.model.description) : textFor(props.model.features[index % Math.max(props.model.features.length, 1)]?.body ?? props.model.description),
        image,
        images: [image],
        videos: void 0,
        details: buildDetails(
          index === 0 ? textFor(props.model.title) : textFor(props.model.features[index % Math.max(props.model.features.length, 1)]?.title ?? props.model.title),
          index === 0 ? textFor(props.model.description) : textFor(props.model.features[index % Math.max(props.model.features.length, 1)]?.body ?? props.model.description),
          index
        ),
        kind: index === 3 ? "banner" : "image"
      }));
      const output = [];
      sourceSections.forEach((section, index) => {
        if (index === 3) {
          output.push({
            id: `${section.id}-divider`,
            kind: "banner",
            title: section.title,
            summary: section.summary,
            image: section.image ?? section.images[0] ?? props.model.heroImage,
            images: section.images,
            details: section.details.slice(0, 3)
          });
        }
        output.push({
          ...section,
          details: section.details.slice(0, 3),
          slides: section.kind === "carousel" ? (section.images.length ? section.images : [section.image ?? props.model.heroImage]).map((image, slideIndex) => ({
            image,
            video: slideIndex === 0 ? section.videos?.[0] : void 0,
            title: section.details[slideIndex % section.details.length]?.title ?? section.title,
            summary: section.details[slideIndex % section.details.length]?.summary ?? section.summary ?? ""
          })) : void 0
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
      if (authoredStorySections.value?.length) {
        return textFor(authoredStorySections.value[0].summary);
      }
      const secondFeature = props.model.features[1];
      if (secondFeature) {
        return textFor(secondFeature.body);
      }
      return textFor(props.model.description);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["model-page", `model-page--${__props.model.slug.replace(".html", "")}`]
      }, _attrs))} data-v-5f3128e0>`);
      _push(ssrRenderComponent(_sfc_main$9, {
        eyebrow: unref(textFor)(__props.model.subtitle),
        title: unref(textFor)(__props.model.title),
        summary: unref(textFor)(__props.model.description),
        image: __props.model.heroImage,
        video: __props.model.heroVideo,
        logo: __props.model.heroLogo ?? __props.model.logo
      }, {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$a, {
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
            _push2(ssrRenderComponent(_sfc_main$a, {
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
              createVNode(_sfc_main$a, {
                to: unref(buildPath)("book-drive.html"),
                variant: "primary"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(textFor)(__props.model.ctaPrimary)), 1)
                ]),
                _: 1
              }, 8, ["to"]),
              createVNode(_sfc_main$a, {
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
      _push(`<!--]--></ul></div><aside class="model-overview-panel" data-reveal data-v-5f3128e0><img${ssrRenderAttr("src", __props.model.heroLogo ?? __props.model.logo)}${ssrRenderAttr("alt", unref(textFor)(__props.model.title))} class="model-overview-logo" data-v-5f3128e0><p class="model-overview-price" data-v-5f3128e0>${ssrInterpolate(unref(textFor)(__props.model.price))}</p><p class="model-overview-note" data-v-5f3128e0>${ssrInterpolate(unref(overviewPanelCopy))}</p><div class="model-overview-tags" data-v-5f3128e0><!--[-->`);
      ssrRenderList(__props.model.features, (feature) => {
        _push(`<span data-v-5f3128e0>${ssrInterpolate(unref(textFor)(feature.title))}</span>`);
      });
      _push(`<!--]--></div><div class="button-row model-overview-actions" data-v-5f3128e0>`);
      _push(ssrRenderComponent(_sfc_main$a, {
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
      _push(ssrRenderComponent(_sfc_main$a, {
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
      _push(`<!--]--></div><section id="book-drive" class="model-cta" style="${ssrRenderStyle({ "--cta-image": `url(${unref(gallery).at(-1) ?? __props.model.heroImage})` })}" data-v-5f3128e0><div class="container model-cta-card" data-reveal data-v-5f3128e0><p class="model-cta-kicker" data-v-5f3128e0>${ssrInterpolate(unref(textFor)(__props.model.subtitle))}</p><h2 data-v-5f3128e0>${ssrInterpolate(unref(textFor)(__props.model.title))}</h2><p data-v-5f3128e0>${ssrInterpolate(unref(textFor)(__props.model.description))}</p><div class="button-row" data-v-5f3128e0>`);
      _push(ssrRenderComponent(_sfc_main$a, {
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
      _push(ssrRenderComponent(_sfc_main$a, {
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
    const route = useRoute();
    const slug = computed(() => Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug);
    const page = computed(() => typeof slug.value === "string" ? resolvePage(slug.value) ?? null : null);
    const modelPage = computed(() => page.value?.kind === "model" ? page.value : null);
    const infoPage = computed(() => page.value?.kind === "info" ? page.value : null);
    const legalPage = computed(() => page.value?.kind === "legal" ? page.value : null);
    const { textFor } = useSiteContent();
    const storePage = computed(() => infoPage.value?.slug === "store.html");
    const servicePage = computed(() => infoPage.value?.slug === "service.html");
    const energyPage = computed(() => infoPage.value?.slug === "energy.html");
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
        const title = modelPage.value?.title ?? infoPage.value?.title ?? legalPage.value?.title;
        return title ? `Voyah | ${textFor(title)}` : "Voyah";
      },
      description: () => {
        const description = modelPage.value?.description ?? infoPage.value?.summary ?? legalPage.value?.summary;
        return description ? textFor(description) : "Voyah";
      }
    });
    useHead({
      link: [
        ...infoPage.value?.slug === "service.html" ? [
          { rel: "stylesheet", href: "/static/assets/index-b22dd282.css" },
          { rel: "stylesheet", href: "/static/assets/index-056018d9.css" },
          { rel: "stylesheet", href: "/static/assets/index-ae402aa7.css" },
          { rel: "stylesheet", href: "/static/assets/userser-c683f735.css" }
        ] : [],
        ...infoPage.value?.slug === "energy.html" ? [
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
            const title = modelPage.value?.title ?? infoPage.value?.title ?? legalPage.value?.title;
            return title ? `Voyah | ${textFor(title)}` : "Voyah";
          }
        },
        {
          name: "og:description",
          content: () => {
            const description = modelPage.value?.description ?? infoPage.value?.summary ?? legalPage.value?.summary;
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
        _push(ssrRenderComponent(_sfc_main$c, {
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
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-GAhDqcE9.js.map
