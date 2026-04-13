import { defineComponent, computed, ref, mergeProps, unref, useSSRContext } from 'file://E:/voyah/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'file://E:/voyah/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ServiceCenterPage",
  __ssrInlineRender: true,
  setup(__props) {
    const scopeBind = computed(() => ({ "data-v-974500ae": "" }));
    const swiperBind = computed(() => ({ "data-v-8116d67d": "" }));
    const accordionBind = computed(() => ({ "data-v-d1806854": "" }));
    const lang = ref("en");
    const copy = {
      en: {
        heroTitle: "Voyah Service",
        helpPhone: "Rescue hotline: 400 888 8488",
        watchVideo: "Watch full video",
        promiseTitle: "Sincere Promise",
        promiseDesc: "We honor every promise with sincerity",
        wholeheartedTitle: "Wholehearted",
        wholeheartedDesc1: "Voyah service follows a wholehearted philosophy",
        wholeheartedDesc2: "to deliver a trustworthy full-journey user experience",
        sincereTitle: "True Care",
        sincereDesc: "We treat every detail with sincerity",
        spaceTitle: "Voyah Space",
        spaceDesc1: "Voyah builds a direct operation ecosystem with better product value and user experience.",
        spaceDesc2: "Today, Voyah operates stores in 212 cities globally with efficient and transparent service.",
        buyTitle: "Purchase Service",
        buyDesc: "Sincere promise for every stage of buying",
        afterTitle: "After-sales Service",
        afterDesc: "True care in every service detail",
        storyTitle: "Service Stories",
        storyDesc: "Fresh stories from users and communities",
        viewDetail: "View details",
        mallTitle: "Voyah Mall",
        mallDesc: "More than vehicles, a companion for every part of life"
      },
      fr: {
        heroTitle: "Service Voyah",
        helpPhone: "Assistance: 400 888 8488",
        watchVideo: "Voir la video complete",
        promiseTitle: "Engagement sincere",
        promiseDesc: "Nous tenons chaque promesse avec sincerite",
        wholeheartedTitle: "Entierement dedie",
        wholeheartedDesc1: "Le service Voyah suit une philosophie complete",
        wholeheartedDesc2: "pour une experience de confiance sur tout le parcours",
        sincereTitle: "Attention sincere",
        sincereDesc: "Chaque detail est traite avec soin",
        spaceTitle: "Espace Voyah",
        spaceDesc1: "Voyah construit un ecosysteme direct avec plus de valeur et une meilleure experience.",
        spaceDesc2: "Voyah est present dans 212 villes avec un service efficace et transparent.",
        buyTitle: "Service d'achat",
        buyDesc: "Une promesse sincere a chaque etape de l'achat",
        afterTitle: "Service apres-vente",
        afterDesc: "Une attention reelle dans chaque detail",
        storyTitle: "Histoires de service",
        storyDesc: "Actualites et histoires de la communaute",
        viewDetail: "Voir le detail",
        mallTitle: "Boutique Voyah",
        mallDesc: "Au-dela de la voiture, un compagnon du quotidien"
      },
      ar: {
        heroTitle: "\u062E\u062F\u0645\u0627\u062A Voyah",
        helpPhone: "\u0647\u0627\u062A\u0641 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629: 400 888 8488",
        watchVideo: "\u0634\u0627\u0647\u062F \u0627\u0644\u0641\u064A\u062F\u064A\u0648 \u0627\u0644\u0643\u0627\u0645\u0644",
        promiseTitle: "\u0648\u0639\u062F \u0635\u0627\u062F\u0642",
        promiseDesc: "\u0646\u0641\u064A \u0628\u0643\u0644 \u0648\u0639\u062F \u0628\u0635\u062F\u0642",
        wholeheartedTitle: "\u0627\u0647\u062A\u0645\u0627\u0645 \u0643\u0627\u0645\u0644",
        wholeheartedDesc1: "\u062A\u062A\u0628\u0646\u0649 \u062E\u062F\u0645\u0629 Voyah \u0641\u0644\u0633\u0641\u0629 \u062E\u062F\u0645\u0629 \u0645\u062A\u0643\u0627\u0645\u0644\u0629",
        wholeheartedDesc2: "\u0644\u062A\u0642\u062F\u064A\u0645 \u062A\u062C\u0631\u0628\u0629 \u0645\u0648\u062B\u0648\u0642\u0629 \u0637\u0648\u0627\u0644 \u0631\u062D\u0644\u0629 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645",
        sincereTitle: "\u0639\u0646\u0627\u064A\u0629 \u062D\u0642\u064A\u0642\u064A\u0629",
        sincereDesc: "\u0646\u0647\u062A\u0645 \u0628\u0643\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0628\u0635\u062F\u0642",
        spaceTitle: "\u0641\u0636\u0627\u0621 Voyah",
        spaceDesc1: "\u062A\u0628\u0646\u064A Voyah \u0645\u0646\u0638\u0648\u0645\u0629 \u062A\u0634\u063A\u064A\u0644 \u0645\u0628\u0627\u0634\u0631 \u0628\u0642\u064A\u0645\u0629 \u0627\u0639\u0644\u0649 \u0648\u062A\u062C\u0631\u0628\u0629 \u0627\u0641\u0636\u0644.",
        spaceDesc2: "\u062A\u0645\u062A\u0644\u0643 Voyah \u0645\u062A\u0627\u062C\u0631 \u0641\u064A 212 \u0645\u062F\u064A\u0646\u0629 \u0645\u0639 \u062E\u062F\u0645\u0629 \u0641\u0639\u0627\u0644\u0629 \u0648\u0634\u0641\u0627\u0641\u0629.",
        buyTitle: "\u062E\u062F\u0645\u0629 \u0627\u0644\u0634\u0631\u0627\u0621",
        buyDesc: "\u0648\u0639\u062F \u0635\u0627\u062F\u0642 \u0641\u064A \u0643\u0644 \u0645\u0631\u062D\u0644\u0629 \u0645\u0646 \u0627\u0644\u0634\u0631\u0627\u0621",
        afterTitle: "\u062E\u062F\u0645\u0629 \u0645\u0627 \u0628\u0639\u062F \u0627\u0644\u0628\u064A\u0639",
        afterDesc: "\u0639\u0646\u0627\u064A\u0629 \u062D\u0642\u064A\u0642\u064A\u0629 \u0641\u064A \u0643\u0644 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0629",
        storyTitle: "\u0642\u0635\u0635 \u0627\u0644\u062E\u062F\u0645\u0629",
        storyDesc: "\u0642\u0635\u0635 \u062C\u062F\u064A\u062F\u0629 \u0645\u0646 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 \u0648\u0627\u0644\u0645\u062C\u062A\u0645\u0639",
        viewDetail: "\u0639\u0631\u0636 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644",
        mallTitle: "\u0645\u062A\u062C\u0631 Voyah",
        mallDesc: "\u0627\u0643\u062B\u0631 \u0645\u0646 \u0633\u064A\u0627\u0631\u0629\u060C \u0631\u0641\u064A\u0642 \u0644\u0643\u0644 \u062C\u0648\u0627\u0646\u0628 \u0627\u0644\u062D\u064A\u0627\u0629"
      }
    };
    const t = computed(() => copy[lang.value]);
    const spaceSlides = [
      "/static/assets/kongjian1-c362d45d.jpg",
      "/static/assets/kongjian2-4222892b.jpg",
      "/static/assets/kongjian3-8b228f55.jpg"
    ];
    const purchaseCards = computed(
      () => lang.value === "fr" ? [
        { title: "Vente 1-a-1 professionnelle", desc: "Service dedie par un conseiller expert", imageClass: "img_1", image: "/static/assets/section3_1-d53304aa.jpg" },
        { title: "Accueil sincere en magasin", desc: "Reponse aux besoins de chaque client", imageClass: "img_2", image: "/static/assets/section3_2-4fb471c7.jpg" },
        { title: "Livraison avec ceremonie", desc: "La remise devient une experience memorables", imageClass: "img_3", image: "/static/assets/section3_3-20237755.jpg" }
      ] : [
        { title: "1-on-1 professional sales", desc: "Dedicated guidance from experienced consultants", imageClass: "img_1", image: "/static/assets/section3_1-d53304aa.jpg" },
        { title: "Sincere offline reception", desc: "Support tailored to each user need", imageClass: "img_2", image: "/static/assets/section3_2-4fb471c7.jpg" },
        { title: "Ceremonial delivery", desc: "Vehicle handover as a memorable ceremony", imageClass: "img_3", image: "/static/assets/section3_3-20237755.jpg" }
      ]
    );
    const afterSaleCards = computed(
      () => lang.value === "fr" ? [
        { title: "Equipe professionnelle", desc: "Support disponible partout", imageClass: "img_4", image: "/static/assets/section4_1-f7cf566b.jpg" },
        { title: "Assistance 7x24h", desc: "Service mobile a domicile", imageClass: "img_5", image: "/static/assets/section4_2-aa55795b.jpg" },
        { title: "Depannage routier", desc: "Reservation en un clic", imageClass: "img_6", image: "/static/assets/section4_3-23836307.jpg" }
      ] : [
        { title: "Professional team", desc: "Support anytime and anywhere", imageClass: "img_4", image: "/static/assets/section4_1-f7cf566b.jpg" },
        { title: "7x24h standby", desc: "Mobile service vehicles on demand", imageClass: "img_5", image: "/static/assets/section4_2-aa55795b.jpg" },
        { title: "Roadside assistance", desc: "One-click booking from home", imageClass: "img_6", image: "/static/assets/section4_3-23836307.jpg" }
      ]
    );
    const storeAccordion = [
      {
        title: "\u793C\u9047",
        desc: "\u5C9A\u56FE\u7CBE\u9009\u5468\u8FB9\uFF0C\u4E0E VOYAH \u521B\u4EAB\u5B98\u4E00\u540C\u6253\u9020\u81EA\u5728\u60EC\u610F\u751F\u6D3B",
        image: "/static/assets/store1-bdde9696.jpg"
      },
      {
        title: "\u8F66\u54C1",
        desc: "\u7CBE\u9009\u7528\u8F66\u597D\u7269\uFF0C\u7CBE\u51C6\u9002\u914D\u9700\u6C42\uFF0C\u63D0\u5347\u6BCF\u4E00\u6B21\u7528\u8F66\u4F53\u9A8C",
        image: "/static/assets/store2-6e7252f4.jpg"
      },
      {
        title: "\u667A\u80FD",
        desc: "\u8F6F\u4EF6\u6DF1\u5EA6\u8D4B\u80FD\uFF0C\u5168\u9762\u7115\u65B0\u7528\u8F66\u4F53\u9A8C",
        image: "/static/assets/store3-fe6e8d7d.jpg"
      }
    ];
    const stories = computed(() => [
      {
        title: lang.value === "fr" ? "Cueillette de fraises le week-end" : "Weekend strawberry picking",
        desc: lang.value === "fr" ? "Par temps d'hiver, le centre Voyah de Hefei a organise un evenement convivial pour les proprietaires." : "In the cold season, the Voyah Hefei center hosted a memorable community event.",
        image: "/static/assets/users1-721725cd.png"
      },
      {
        title: lang.value === "fr" ? "Escorte d'automne Voyah" : "Voyah autumn support event",
        desc: lang.value === "fr" ? "Protection de vacances au bord du lac Caiyun." : "Holiday support by Caiyun Lake.",
        image: "/static/assets/users2-5ea895eb.png"
      },
      {
        title: lang.value === "fr" ? "Livraison collective Voyah" : "Voyah group delivery event",
        desc: lang.value === "fr" ? "Le club Tianzhi Lan et le centre utilisateur Jinjiang ont lance une livraison collective conviviale." : "A warm group delivery ceremony was jointly hosted by the club and user center.",
        image: "/static/assets/users3-b4fe4c41.png"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, unref(scopeBind), _attrs))}><div${ssrRenderAttrs(mergeProps({ class: "service-content" }, unref(scopeBind)))}><section${ssrRenderAttrs(mergeProps({ class: "bg" }, unref(scopeBind)))}><div${ssrRenderAttrs(mergeProps({ class: "video" }, unref(scopeBind)))}><video${ssrRenderAttrs(mergeProps({
        class: "video-js w-full h-full",
        autoplay: "",
        muted: "",
        loop: "",
        playsinline: "",
        preload: "auto"
      }, unref(scopeBind)))}></video><img${ssrRenderAttrs(mergeProps({
        class: "hero-poster",
        src: "/static/assets/userser_poster-570ed436.png",
        alt: "banner"
      }, unref(scopeBind)))}></div><div${ssrRenderAttrs(mergeProps({ class: "hero-overlay" }, unref(scopeBind)))}></div><div${ssrRenderAttrs(mergeProps({ class: "title inview-child inview-animated" }, unref(scopeBind)))}>${ssrInterpolate(unref(t).heroTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "call inview-child inview-animated" }, unref(scopeBind)))}>${ssrInterpolate(unref(t).helpPhone)}</div><div${ssrRenderAttrs(mergeProps({ class: "video-btn" }, unref(scopeBind)))}>${ssrInterpolate(unref(t).watchVideo)} <span${ssrRenderAttrs(mergeProps({ class: "video-btn-arrow" }, unref(scopeBind)))}>\u2192</span></div></section><section${ssrRenderAttrs(mergeProps({ class: "section_1" }, unref(scopeBind)))}><div${ssrRenderAttrs(mergeProps({ class: "section_1_1" }, unref(scopeBind)))}><div${ssrRenderAttrs(mergeProps({ class: "img_1 inview-child" }, unref(scopeBind)))}><img${ssrRenderAttrs(mergeProps({
        class: "img_pc",
        src: "/static/assets/section_1-ecb64e56.png",
        alt: ""
      }, unref(scopeBind)))}></div><div${ssrRenderAttrs(mergeProps({ class: "img_2 inview-child" }, unref(scopeBind)))}><img${ssrRenderAttrs(mergeProps({
        class: "img_pc",
        src: "/static/assets/section_2-84b4d8ae.jpg",
        alt: ""
      }, unref(scopeBind)))}></div></div><div${ssrRenderAttrs(mergeProps({ class: "section_1_2" }, unref(scopeBind)))}><div${ssrRenderAttrs(mergeProps({ class: "img_1 inview-child" }, unref(scopeBind)))}><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))}>${ssrInterpolate(unref(t).promiseTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc" }, unref(scopeBind)))}>${ssrInterpolate(unref(t).promiseDesc)}</div></div><div${ssrRenderAttrs(mergeProps({ class: "img_2 inview-child" }, unref(scopeBind)))}><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))}>${ssrInterpolate(unref(t).wholeheartedTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc" }, unref(scopeBind)))}>${ssrInterpolate(unref(t).wholeheartedDesc1)} <br${ssrRenderAttrs(unref(scopeBind))}> ${ssrInterpolate(unref(t).wholeheartedDesc2)}</div></div></div><div${ssrRenderAttrs(mergeProps({ class: "section_1_3" }, unref(scopeBind)))}><div${ssrRenderAttrs(mergeProps({ class: "img_2 inview-child" }, unref(scopeBind)))}><img${ssrRenderAttrs(mergeProps({
        class: "img_pc",
        src: "/static/assets/section_5-80a7d36b.jpg",
        alt: ""
      }, unref(scopeBind)))}></div><div${ssrRenderAttrs(mergeProps({ class: "img_1 inview-child" }, unref(scopeBind)))}><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))}>${ssrInterpolate(unref(t).sincereTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc" }, unref(scopeBind)))}>${ssrInterpolate(unref(t).sincereDesc)}</div></div></div></section><section${ssrRenderAttrs(mergeProps({ class: "section_2" }, unref(scopeBind)))}><div${ssrRenderAttrs(mergeProps({ class: "title inview-child" }, unref(scopeBind)))}>${ssrInterpolate(unref(t).spaceTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc inview-child" }, unref(scopeBind)))}>${ssrInterpolate(unref(t).spaceDesc1)} <br${ssrRenderAttrs(unref(scopeBind))}> ${ssrInterpolate(unref(t).spaceDesc2)}</div><div${ssrRenderAttrs(mergeProps({ class: "swiper-voyah inview-child" }, unref(swiperBind)))}><div${ssrRenderAttrs(mergeProps({ class: "swiper-group-container" }, unref(swiperBind)))}><div${ssrRenderAttrs(mergeProps({ class: "swiper swiper-initialized swiper-horizontal swiper-pointer-events" }, unref(swiperBind)))}><div${ssrRenderAttrs(mergeProps({ class: "swiper-wrapper" }, unref(swiperBind)))}><div${ssrRenderAttrs(mergeProps({
        class: "swiper-slide swiper-slide-duplicate",
        "data-swiper-slide-index": "2"
      }, unref(swiperBind)))}><div${ssrRenderAttrs(mergeProps({ class: "slide-item" }, unref(swiperBind)))}><img${ssrRenderAttrs(mergeProps({
        src: spaceSlides[2],
        alt: "",
        class: "slide-img"
      }, unref(swiperBind)))}></div></div><div${ssrRenderAttrs(mergeProps({
        class: "swiper-slide",
        "data-swiper-slide-index": "0"
      }, unref(swiperBind)))}><div${ssrRenderAttrs(mergeProps({ class: "slide-item" }, unref(swiperBind)))}><img${ssrRenderAttrs(mergeProps({
        src: spaceSlides[0],
        alt: "",
        class: "slide-img"
      }, unref(swiperBind)))}></div></div><div${ssrRenderAttrs(mergeProps({
        class: "swiper-slide",
        "data-swiper-slide-index": "1"
      }, unref(swiperBind)))}><div${ssrRenderAttrs(mergeProps({ class: "slide-item" }, unref(swiperBind)))}><img${ssrRenderAttrs(mergeProps({
        src: spaceSlides[1],
        alt: "",
        class: "slide-img"
      }, unref(swiperBind)))}></div></div><div${ssrRenderAttrs(mergeProps({
        class: "swiper-slide",
        "data-swiper-slide-index": "2"
      }, unref(swiperBind)))}><div${ssrRenderAttrs(mergeProps({ class: "slide-item" }, unref(swiperBind)))}><img${ssrRenderAttrs(mergeProps({
        src: spaceSlides[2],
        alt: "",
        class: "slide-img"
      }, unref(swiperBind)))}></div></div><div${ssrRenderAttrs(mergeProps({
        class: "swiper-slide swiper-slide-duplicate",
        "data-swiper-slide-index": "0"
      }, unref(swiperBind)))}><div${ssrRenderAttrs(mergeProps({ class: "slide-item" }, unref(swiperBind)))}><img${ssrRenderAttrs(mergeProps({
        src: spaceSlides[0],
        alt: "",
        class: "slide-img"
      }, unref(swiperBind)))}></div></div></div></div></div><div${ssrRenderAttrs(mergeProps({ class: "slide_content" }, unref(swiperBind)))}><div${ssrRenderAttrs(mergeProps({ class: "prev slide" }, unref(swiperBind)))}></div><div${ssrRenderAttrs(mergeProps({ class: "next slide" }, unref(swiperBind)))}></div></div><div${ssrRenderAttrs(mergeProps({ class: "indicators" }, unref(swiperBind)))}><div${ssrRenderAttrs(mergeProps({ class: "indicators_item active" }, unref(swiperBind)))}></div><div${ssrRenderAttrs(mergeProps({ class: "indicators_item" }, unref(swiperBind)))}></div><div${ssrRenderAttrs(mergeProps({ class: "indicators_item" }, unref(swiperBind)))}></div></div></div></section><section${ssrRenderAttrs(mergeProps({ class: "section_3" }, unref(scopeBind)))}><div${ssrRenderAttrs(mergeProps({ class: "title inview-child" }, unref(scopeBind)))}>${ssrInterpolate(unref(t).buyTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc inview-child" }, unref(scopeBind)))}>${ssrInterpolate(unref(t).buyDesc)}</div><div${ssrRenderAttrs(mergeProps({ class: "section_3_content inview-child" }, unref(scopeBind)))}><!--[-->`);
      ssrRenderList(unref(purchaseCards), (item) => {
        _push(`<article${ssrRenderAttrs(mergeProps({
          class: "section_3_content_item inview-child",
          key: item.title
        }, { ref_for: true }, unref(scopeBind)))}><div${ssrRenderAttrs(mergeProps({
          class: ["img", item.imageClass]
        }, { ref_for: true }, unref(scopeBind)))}><img${ssrRenderAttrs(mergeProps({
          src: item.image,
          alt: ""
        }, { ref_for: true }, unref(scopeBind)))}></div><div${ssrRenderAttrs(mergeProps({ class: "bottom" }, { ref_for: true }, unref(scopeBind)))}><div${ssrRenderAttrs(mergeProps({ class: "sub_title" }, { ref_for: true }, unref(scopeBind)))}>${ssrInterpolate(item.title)}</div><div${ssrRenderAttrs(mergeProps({ class: "sub_desc" }, { ref_for: true }, unref(scopeBind)))}>${ssrInterpolate(item.desc)}</div></div></article>`);
      });
      _push(`<!--]--></div></section><section${ssrRenderAttrs(mergeProps({ class: "section_3 section_4" }, unref(scopeBind)))}><div${ssrRenderAttrs(mergeProps({ class: "title inview-child" }, unref(scopeBind)))}>${ssrInterpolate(unref(t).afterTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc inview-child" }, unref(scopeBind)))}>${ssrInterpolate(unref(t).afterDesc)}</div><div${ssrRenderAttrs(mergeProps({ class: "section_3_content inview-child" }, unref(scopeBind)))}><!--[-->`);
      ssrRenderList(unref(afterSaleCards), (item) => {
        _push(`<article${ssrRenderAttrs(mergeProps({
          class: "section_3_content_item inview-child",
          key: item.title
        }, { ref_for: true }, unref(scopeBind)))}><div${ssrRenderAttrs(mergeProps({
          class: ["img", item.imageClass]
        }, { ref_for: true }, unref(scopeBind)))}><img${ssrRenderAttrs(mergeProps({
          src: item.image,
          alt: ""
        }, { ref_for: true }, unref(scopeBind)))}></div><div${ssrRenderAttrs(mergeProps({ class: "bottom" }, { ref_for: true }, unref(scopeBind)))}><div${ssrRenderAttrs(mergeProps({ class: "sub_title" }, { ref_for: true }, unref(scopeBind)))}>${ssrInterpolate(item.title)}</div><div${ssrRenderAttrs(mergeProps({ class: "sub_desc" }, { ref_for: true }, unref(scopeBind)))}>${ssrInterpolate(item.desc)}</div></div></article>`);
      });
      _push(`<!--]--></div></section><section${ssrRenderAttrs(mergeProps({ class: "section_3 section_5" }, unref(scopeBind)))}><div${ssrRenderAttrs(mergeProps({ class: "title inview-child" }, unref(scopeBind)))}>${ssrInterpolate(unref(t).storyTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc inview-child" }, unref(scopeBind)))}>${ssrInterpolate(unref(t).storyDesc)}</div><div${ssrRenderAttrs(mergeProps({ class: "section_3_content inview-child" }, unref(scopeBind)))}><!--[-->`);
      ssrRenderList(unref(stories), (story) => {
        _push(`<article${ssrRenderAttrs(mergeProps({
          class: "section_3_content_item",
          key: story.title
        }, { ref_for: true }, unref(scopeBind)))}><div${ssrRenderAttrs(mergeProps({ class: "img img_4" }, { ref_for: true }, unref(scopeBind)))}><img${ssrRenderAttrs(mergeProps({
          src: story.image,
          alt: ""
        }, { ref_for: true }, unref(scopeBind)))}></div><div${ssrRenderAttrs(mergeProps({ class: "bottom" }, { ref_for: true }, unref(scopeBind)))}><div${ssrRenderAttrs(mergeProps({ class: "sub_title" }, { ref_for: true }, unref(scopeBind)))}>${ssrInterpolate(story.title)}</div><div${ssrRenderAttrs(mergeProps({ class: "sub_desc" }, { ref_for: true }, unref(scopeBind)))}>${ssrInterpolate(story.desc)}</div><div${ssrRenderAttrs(mergeProps({ class: "more" }, { ref_for: true }, unref(scopeBind)))}><span${ssrRenderAttrs(mergeProps({ class: "view" }, { ref_for: true }, unref(scopeBind)))}>${ssrInterpolate(unref(t).viewDetail)}</span></div></div></article>`);
      });
      _push(`<!--]--></div></section><section${ssrRenderAttrs(mergeProps({ class: "section_3 section_6" }, unref(scopeBind)))}><div${ssrRenderAttrs(mergeProps({ class: "title inview-child" }, unref(scopeBind)))}>${ssrInterpolate(unref(t).mallTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc inview-child" }, unref(scopeBind)))}>${ssrInterpolate(unref(t).mallDesc)}</div><div${ssrRenderAttrs(mergeProps({ class: "accordion-contain inview-child service-accordion" }, unref(accordionBind)))}><!--[-->`);
      ssrRenderList(storeAccordion, (item, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: item.title,
          class: ["item", { active: index === 0 }],
          style: { backgroundImage: `url(${item.image})` }
        }, { ref_for: true }, unref(accordionBind)))}><div${ssrRenderAttrs(mergeProps({ class: "shadow" }, { ref_for: true }, unref(accordionBind)))}></div><div${ssrRenderAttrs(mergeProps({ class: "title title-show title-hidden" }, { ref_for: true }, unref(accordionBind)))}>${ssrInterpolate(item.title)}</div><div${ssrRenderAttrs(mergeProps({ class: "item-wrapper" }, { ref_for: true }, unref(accordionBind)))}><div${ssrRenderAttrs(mergeProps({ class: "title" }, { ref_for: true }, unref(accordionBind)))}>${ssrInterpolate(item.title)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc" }, { ref_for: true }, unref(accordionBind)))}>${ssrInterpolate(item.desc)}</div></div></div>`);
      });
      _push(`<!--]--></div></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/legacy/ServiceCenterPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ServiceCenterPage-Bp9r93bc.mjs.map
