import { defineComponent, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { u as useRoute, _ as _export_sfc } from "../server.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ServiceCenterPage",
  __ssrInlineRender: true,
  setup(__props) {
    const scopeBind = computed(() => ({ "data-v-974500ae": "" }));
    const swiperBind = computed(() => ({ "data-v-8116d67d": "" }));
    const accordionBind = computed(() => ({ "data-v-d1806854": "" }));
    const route = useRoute();
    const lang = computed(() => {
      const code = Array.isArray(route.params.locale) ? route.params.locale[0] : route.params.locale;
      return code === "fr" || code === "ar" ? code : "en";
    });
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
        heroTitle: "خدمات Voyah",
        helpPhone: "هاتف المساعدة: 400 888 8488",
        watchVideo: "شاهد الفيديو الكامل",
        promiseTitle: "وعد صادق",
        promiseDesc: "نفي بكل وعد بصدق",
        wholeheartedTitle: "اهتمام كامل",
        wholeheartedDesc1: "تتبنى خدمة Voyah فلسفة خدمة متكاملة",
        wholeheartedDesc2: "لتقديم تجربة موثوقة طوال رحلة الاستخدام",
        sincereTitle: "عناية حقيقية",
        sincereDesc: "نهتم بكل التفاصيل بصدق",
        spaceTitle: "فضاء Voyah",
        spaceDesc1: "تبني Voyah منظومة تشغيل مباشر بقيمة اعلى وتجربة افضل.",
        spaceDesc2: "تمتلك Voyah متاجر في 212 مدينة مع خدمة فعالة وشفافة.",
        buyTitle: "خدمة الشراء",
        buyDesc: "وعد صادق في كل مرحلة من الشراء",
        afterTitle: "خدمة ما بعد البيع",
        afterDesc: "عناية حقيقية في كل تفاصيل الخدمة",
        storyTitle: "قصص الخدمة",
        storyDesc: "قصص جديدة من المستخدمين والمجتمع",
        viewDetail: "عرض التفاصيل",
        mallTitle: "متجر Voyah",
        mallDesc: "اكثر من سيارة، رفيق لكل جوانب الحياة"
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
        title: "礼遇",
        desc: "岚图精选周边，与 VOYAH 创享官一同打造自在惬意生活",
        image: "/static/assets/store1-bdde9696.jpg"
      },
      {
        title: "车品",
        desc: "精选用车好物，精准适配需求，提升每一次用车体验",
        image: "/static/assets/store2-6e7252f4.jpg"
      },
      {
        title: "智能",
        desc: "软件深度赋能，全面焕新用车体验",
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, unref(scopeBind), _attrs))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "service-content" }, unref(scopeBind)))} data-v-532e9ae8><section${ssrRenderAttrs(mergeProps({ class: "bg" }, unref(scopeBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "video" }, unref(scopeBind)))} data-v-532e9ae8><video${ssrRenderAttrs(mergeProps({
        class: "video-js w-full h-full",
        autoplay: "",
        muted: "",
        loop: "",
        playsinline: "",
        preload: "auto"
      }, unref(scopeBind)))} data-v-532e9ae8></video><img${ssrRenderAttrs(mergeProps({
        class: "hero-poster",
        src: "/static/assets/userser_poster-570ed436.png",
        alt: "banner"
      }, unref(scopeBind)))} data-v-532e9ae8></div><div${ssrRenderAttrs(mergeProps({ class: "hero-overlay" }, unref(scopeBind)))} data-v-532e9ae8></div><div${ssrRenderAttrs(mergeProps({ class: "title inview-child inview-animated" }, unref(scopeBind)))} data-v-532e9ae8>${ssrInterpolate(unref(t).heroTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "call inview-child inview-animated" }, unref(scopeBind)))} data-v-532e9ae8>${ssrInterpolate(unref(t).helpPhone)}</div><div${ssrRenderAttrs(mergeProps({ class: "video-btn" }, unref(scopeBind)))} data-v-532e9ae8>${ssrInterpolate(unref(t).watchVideo)} <span${ssrRenderAttrs(mergeProps({ class: "video-btn-arrow" }, unref(scopeBind)))} data-v-532e9ae8>→</span></div></section><section${ssrRenderAttrs(mergeProps({ class: "section_1" }, unref(scopeBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "section_1_1" }, unref(scopeBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "img_1 inview-child" }, unref(scopeBind)))} data-v-532e9ae8><img${ssrRenderAttrs(mergeProps({
        class: "img_pc",
        src: "/static/assets/section_1-ecb64e56.png",
        alt: ""
      }, unref(scopeBind)))} data-v-532e9ae8></div><div${ssrRenderAttrs(mergeProps({ class: "img_2 inview-child" }, unref(scopeBind)))} data-v-532e9ae8><img${ssrRenderAttrs(mergeProps({
        class: "img_pc",
        src: "/static/assets/section_2-84b4d8ae.jpg",
        alt: ""
      }, unref(scopeBind)))} data-v-532e9ae8></div></div><div${ssrRenderAttrs(mergeProps({ class: "section_1_2" }, unref(scopeBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "img_1 inview-child" }, unref(scopeBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))} data-v-532e9ae8>${ssrInterpolate(unref(t).promiseTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc" }, unref(scopeBind)))} data-v-532e9ae8>${ssrInterpolate(unref(t).promiseDesc)}</div></div><div${ssrRenderAttrs(mergeProps({ class: "img_2 inview-child" }, unref(scopeBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))} data-v-532e9ae8>${ssrInterpolate(unref(t).wholeheartedTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc" }, unref(scopeBind)))} data-v-532e9ae8>${ssrInterpolate(unref(t).wholeheartedDesc1)} <br${ssrRenderAttrs(unref(scopeBind))} data-v-532e9ae8> ${ssrInterpolate(unref(t).wholeheartedDesc2)}</div></div></div><div${ssrRenderAttrs(mergeProps({ class: "section_1_3" }, unref(scopeBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "img_2 inview-child" }, unref(scopeBind)))} data-v-532e9ae8><img${ssrRenderAttrs(mergeProps({
        class: "img_pc",
        src: "/static/assets/section_5-80a7d36b.jpg",
        alt: ""
      }, unref(scopeBind)))} data-v-532e9ae8></div><div${ssrRenderAttrs(mergeProps({ class: "img_1 inview-child" }, unref(scopeBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))} data-v-532e9ae8>${ssrInterpolate(unref(t).sincereTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc" }, unref(scopeBind)))} data-v-532e9ae8>${ssrInterpolate(unref(t).sincereDesc)}</div></div></div></section><section${ssrRenderAttrs(mergeProps({ class: "section_2" }, unref(scopeBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "title inview-child" }, unref(scopeBind)))} data-v-532e9ae8>${ssrInterpolate(unref(t).spaceTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc inview-child" }, unref(scopeBind)))} data-v-532e9ae8>${ssrInterpolate(unref(t).spaceDesc1)} <br${ssrRenderAttrs(unref(scopeBind))} data-v-532e9ae8> ${ssrInterpolate(unref(t).spaceDesc2)}</div><div${ssrRenderAttrs(mergeProps({ class: "swiper-voyah inview-child" }, unref(swiperBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "swiper-group-container" }, unref(swiperBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "swiper swiper-initialized swiper-horizontal swiper-pointer-events" }, unref(swiperBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "swiper-wrapper" }, unref(swiperBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({
        class: "swiper-slide swiper-slide-duplicate",
        "data-swiper-slide-index": "2"
      }, unref(swiperBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "slide-item" }, unref(swiperBind)))} data-v-532e9ae8><img${ssrRenderAttrs(mergeProps({
        src: spaceSlides[2],
        alt: "",
        class: "slide-img"
      }, unref(swiperBind)))} data-v-532e9ae8></div></div><div${ssrRenderAttrs(mergeProps({
        class: "swiper-slide",
        "data-swiper-slide-index": "0"
      }, unref(swiperBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "slide-item" }, unref(swiperBind)))} data-v-532e9ae8><img${ssrRenderAttrs(mergeProps({
        src: spaceSlides[0],
        alt: "",
        class: "slide-img"
      }, unref(swiperBind)))} data-v-532e9ae8></div></div><div${ssrRenderAttrs(mergeProps({
        class: "swiper-slide",
        "data-swiper-slide-index": "1"
      }, unref(swiperBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "slide-item" }, unref(swiperBind)))} data-v-532e9ae8><img${ssrRenderAttrs(mergeProps({
        src: spaceSlides[1],
        alt: "",
        class: "slide-img"
      }, unref(swiperBind)))} data-v-532e9ae8></div></div><div${ssrRenderAttrs(mergeProps({
        class: "swiper-slide",
        "data-swiper-slide-index": "2"
      }, unref(swiperBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "slide-item" }, unref(swiperBind)))} data-v-532e9ae8><img${ssrRenderAttrs(mergeProps({
        src: spaceSlides[2],
        alt: "",
        class: "slide-img"
      }, unref(swiperBind)))} data-v-532e9ae8></div></div><div${ssrRenderAttrs(mergeProps({
        class: "swiper-slide swiper-slide-duplicate",
        "data-swiper-slide-index": "0"
      }, unref(swiperBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "slide-item" }, unref(swiperBind)))} data-v-532e9ae8><img${ssrRenderAttrs(mergeProps({
        src: spaceSlides[0],
        alt: "",
        class: "slide-img"
      }, unref(swiperBind)))} data-v-532e9ae8></div></div></div></div></div><div${ssrRenderAttrs(mergeProps({ class: "slide_content" }, unref(swiperBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "prev slide" }, unref(swiperBind)))} data-v-532e9ae8></div><div${ssrRenderAttrs(mergeProps({ class: "next slide" }, unref(swiperBind)))} data-v-532e9ae8></div></div><div${ssrRenderAttrs(mergeProps({ class: "indicators" }, unref(swiperBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "indicators_item active" }, unref(swiperBind)))} data-v-532e9ae8></div><div${ssrRenderAttrs(mergeProps({ class: "indicators_item" }, unref(swiperBind)))} data-v-532e9ae8></div><div${ssrRenderAttrs(mergeProps({ class: "indicators_item" }, unref(swiperBind)))} data-v-532e9ae8></div></div></div></section><section${ssrRenderAttrs(mergeProps({ class: "section_3" }, unref(scopeBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "title inview-child" }, unref(scopeBind)))} data-v-532e9ae8>${ssrInterpolate(unref(t).buyTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc inview-child" }, unref(scopeBind)))} data-v-532e9ae8>${ssrInterpolate(unref(t).buyDesc)}</div><div${ssrRenderAttrs(mergeProps({ class: "section_3_content inview-child" }, unref(scopeBind)))} data-v-532e9ae8><!--[-->`);
      ssrRenderList(unref(purchaseCards), (item) => {
        _push(`<article${ssrRenderAttrs(mergeProps({
          class: "section_3_content_item inview-child",
          key: item.title
        }, { ref_for: true }, unref(scopeBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({
          class: ["img", item.imageClass]
        }, { ref_for: true }, unref(scopeBind)))} data-v-532e9ae8><img${ssrRenderAttrs(mergeProps({
          src: item.image,
          alt: ""
        }, { ref_for: true }, unref(scopeBind)))} data-v-532e9ae8></div><div${ssrRenderAttrs(mergeProps({ class: "bottom" }, { ref_for: true }, unref(scopeBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "sub_title" }, { ref_for: true }, unref(scopeBind)))} data-v-532e9ae8>${ssrInterpolate(item.title)}</div><div${ssrRenderAttrs(mergeProps({ class: "sub_desc" }, { ref_for: true }, unref(scopeBind)))} data-v-532e9ae8>${ssrInterpolate(item.desc)}</div></div></article>`);
      });
      _push(`<!--]--></div></section><section${ssrRenderAttrs(mergeProps({ class: "section_3 section_4" }, unref(scopeBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "title inview-child" }, unref(scopeBind)))} data-v-532e9ae8>${ssrInterpolate(unref(t).afterTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc inview-child" }, unref(scopeBind)))} data-v-532e9ae8>${ssrInterpolate(unref(t).afterDesc)}</div><div${ssrRenderAttrs(mergeProps({ class: "section_3_content inview-child" }, unref(scopeBind)))} data-v-532e9ae8><!--[-->`);
      ssrRenderList(unref(afterSaleCards), (item) => {
        _push(`<article${ssrRenderAttrs(mergeProps({
          class: "section_3_content_item inview-child",
          key: item.title
        }, { ref_for: true }, unref(scopeBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({
          class: ["img", item.imageClass]
        }, { ref_for: true }, unref(scopeBind)))} data-v-532e9ae8><img${ssrRenderAttrs(mergeProps({
          src: item.image,
          alt: ""
        }, { ref_for: true }, unref(scopeBind)))} data-v-532e9ae8></div><div${ssrRenderAttrs(mergeProps({ class: "bottom" }, { ref_for: true }, unref(scopeBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "sub_title" }, { ref_for: true }, unref(scopeBind)))} data-v-532e9ae8>${ssrInterpolate(item.title)}</div><div${ssrRenderAttrs(mergeProps({ class: "sub_desc" }, { ref_for: true }, unref(scopeBind)))} data-v-532e9ae8>${ssrInterpolate(item.desc)}</div></div></article>`);
      });
      _push(`<!--]--></div></section><section${ssrRenderAttrs(mergeProps({ class: "section_3 section_5" }, unref(scopeBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "title inview-child" }, unref(scopeBind)))} data-v-532e9ae8>${ssrInterpolate(unref(t).storyTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc inview-child" }, unref(scopeBind)))} data-v-532e9ae8>${ssrInterpolate(unref(t).storyDesc)}</div><div${ssrRenderAttrs(mergeProps({ class: "section_3_content inview-child" }, unref(scopeBind)))} data-v-532e9ae8><!--[-->`);
      ssrRenderList(unref(stories), (story) => {
        _push(`<article${ssrRenderAttrs(mergeProps({
          class: "section_3_content_item",
          key: story.title
        }, { ref_for: true }, unref(scopeBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "img img_4" }, { ref_for: true }, unref(scopeBind)))} data-v-532e9ae8><img${ssrRenderAttrs(mergeProps({
          src: story.image,
          alt: ""
        }, { ref_for: true }, unref(scopeBind)))} data-v-532e9ae8></div><div${ssrRenderAttrs(mergeProps({ class: "bottom" }, { ref_for: true }, unref(scopeBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "sub_title" }, { ref_for: true }, unref(scopeBind)))} data-v-532e9ae8>${ssrInterpolate(story.title)}</div><div${ssrRenderAttrs(mergeProps({ class: "sub_desc" }, { ref_for: true }, unref(scopeBind)))} data-v-532e9ae8>${ssrInterpolate(story.desc)}</div><div${ssrRenderAttrs(mergeProps({ class: "more" }, { ref_for: true }, unref(scopeBind)))} data-v-532e9ae8><span${ssrRenderAttrs(mergeProps({ class: "view" }, { ref_for: true }, unref(scopeBind)))} data-v-532e9ae8>${ssrInterpolate(unref(t).viewDetail)}</span></div></div></article>`);
      });
      _push(`<!--]--></div></section><section${ssrRenderAttrs(mergeProps({ class: "section_3 section_6" }, unref(scopeBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "title inview-child" }, unref(scopeBind)))} data-v-532e9ae8>${ssrInterpolate(unref(t).mallTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc inview-child" }, unref(scopeBind)))} data-v-532e9ae8>${ssrInterpolate(unref(t).mallDesc)}</div><div${ssrRenderAttrs(mergeProps({ class: "accordion-contain inview-child service-accordion" }, unref(accordionBind)))} data-v-532e9ae8><!--[-->`);
      ssrRenderList(storeAccordion, (item, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: item.title,
          class: ["item", { active: index === 0 }],
          style: { backgroundImage: `url(${item.image})` }
        }, { ref_for: true }, unref(accordionBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "shadow" }, { ref_for: true }, unref(accordionBind)))} data-v-532e9ae8></div><div${ssrRenderAttrs(mergeProps({ class: "title title-show title-hidden" }, { ref_for: true }, unref(accordionBind)))} data-v-532e9ae8>${ssrInterpolate(item.title)}</div><div${ssrRenderAttrs(mergeProps({ class: "item-wrapper" }, { ref_for: true }, unref(accordionBind)))} data-v-532e9ae8><div${ssrRenderAttrs(mergeProps({ class: "title" }, { ref_for: true }, unref(accordionBind)))} data-v-532e9ae8>${ssrInterpolate(item.title)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc" }, { ref_for: true }, unref(accordionBind)))} data-v-532e9ae8>${ssrInterpolate(item.desc)}</div></div></div>`);
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
const ServiceCenterPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-532e9ae8"]]);
export {
  ServiceCenterPage as S
};
//# sourceMappingURL=ServiceCenterPage-ltHKfc68.js.map
