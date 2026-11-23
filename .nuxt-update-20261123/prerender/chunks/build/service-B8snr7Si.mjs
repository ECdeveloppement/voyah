import { defineComponent, computed, ref, watch, nextTick, mergeProps, useSSRContext } from 'file://E:/voyah/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderTeleport, ssrRenderList } from 'file://E:/voyah/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { _ as _imports_0$1 } from './virtual_public-dXaDTdmE.mjs';
import { gsap } from 'file://E:/voyah/node_modules/gsap/dist/gsap.js';
import { u as useSiteContent, a as useHead } from './useSiteContent-DZMgAnrU.mjs';
import { r as resolvePage, _ as _export_sfc } from './server.mjs';
import 'file://E:/voyah/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://E:/voyah/node_modules/h3/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://E:/voyah/node_modules/destr/dist/index.mjs';
import 'file://E:/voyah/node_modules/hookable/dist/index.mjs';
import 'file://E:/voyah/node_modules/ofetch/dist/node.mjs';
import 'file://E:/voyah/node_modules/node-mock-http/dist/index.mjs';
import 'file://E:/voyah/node_modules/unstorage/dist/index.mjs';
import 'file://E:/voyah/node_modules/unstorage/drivers/fs.mjs';
import 'file:///E:/voyah/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://E:/voyah/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://E:/voyah/node_modules/ohash/dist/index.mjs';
import 'file://E:/voyah/node_modules/klona/dist/index.mjs';
import 'file://E:/voyah/node_modules/defu/dist/defu.mjs';
import 'file://E:/voyah/node_modules/scule/dist/index.mjs';
import 'file://E:/voyah/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://E:/voyah/node_modules/pathe/dist/index.mjs';
import 'file://E:/voyah/node_modules/unhead/dist/server.mjs';
import 'file://E:/voyah/node_modules/devalue/index.js';
import 'file://E:/voyah/node_modules/unhead/dist/plugins.mjs';
import 'file://E:/voyah/node_modules/unhead/dist/utils.mjs';
import 'file://E:/voyah/node_modules/unctx/dist/index.mjs';
import 'file://E:/voyah/node_modules/vue-router/vue-router.node.mjs';
import 'file://E:/voyah/node_modules/cookie-es/dist/index.mjs';
import 'file://E:/voyah/node_modules/vue-devtools-stub/dist/index.mjs';

const _imports_0 = publicAssetsURL("/static/assets/userser_poster-570ed436.png");
const _imports_1 = publicAssetsURL("/voyah-resources/website/advertisingbanner/video/sc_1.mp4");
const _imports_2 = publicAssetsURL("/voyah-resources/website/advertisingbanner/video/7d8f79a2-9614-47e0-b336-5f660d63ad171770618641574.mp4");
const serviceMapUrl = "https://maps.app.goo.gl/LoHRXkBkXWyg5g427?g_st=aw";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ServiceCenterPage",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useSiteContent();
    const scopeBind = computed(() => ({ "data-v-974500ae": "" }));
    const swiperBind = computed(() => ({ "data-v-8116d67d": "" }));
    const accordionBind = computed(() => ({ "data-v-d1806854": "" }));
    const lang = computed(() => locale.value.code);
    const isRTL = computed(() => lang.value === "ar");
    const sliderTrack = ref(null);
    const currentIndex = ref(0);
    const videoModalOpen = ref(false);
    ref(null);
    const bgVideoRef = ref(null);
    ref(false);
    watch(lang, async () => {
      await nextTick();
      tryPlayBg();
      resetCarouselPosition();
    });
    const resetCarouselPosition = () => {
      if (!sliderTrack.value) return;
      currentIndex.value = 0;
      nextTick(() => {
        updateSlider(false, true);
      });
    };
    const tryPlayBg = async () => {
      await nextTick();
      const vid = bgVideoRef.value;
      if (!vid) return;
      vid.muted = true;
      vid.playsInline = true;
      vid.play().catch(() => {
        const resume = () => {
          vid.play().catch(() => {
          });
          (void 0).removeEventListener("click", resume);
          (void 0).removeEventListener("touchstart", resume);
        };
        (void 0).addEventListener("click", resume, { once: true });
        (void 0).addEventListener("touchstart", resume, { once: true });
      });
    };
    const spaceSlides = [
      "/static/assets/kongjian1-c362d45d.jpg",
      "/static/assets/kongjian2-4222892b.jpg",
      "/static/assets/kongjian3-8b228f55.jpg"
    ];
    const duplicatedSlides = computed(() => [...spaceSlides, ...spaceSlides, ...spaceSlides]);
    const getSlideWidth = () => {
      var _a;
      if (!((_a = sliderTrack.value) == null ? void 0 : _a.children[0])) return 0;
      return sliderTrack.value.children[0].clientWidth;
    };
    const getGap = () => 16;
    const getCurrentTransform = () => {
      const slideWidth = getSlideWidth();
      const gap = getGap();
      const baseMove = currentIndex.value * (slideWidth + gap);
      return isRTL.value ? baseMove : -baseMove;
    };
    const updateSlider = (smooth = true, instant = false) => {
      if (!sliderTrack.value) return;
      const targetX = getCurrentTransform();
      if (instant) {
        gsap.set(sliderTrack.value, { x: targetX });
      } else {
        gsap.to(sliderTrack.value, {
          x: targetX,
          duration: smooth ? 0.85 : 0,
          ease: "power3.inOut",
          onComplete: () => {
            const realSlideCount = spaceSlides.length;
            if (currentIndex.value >= realSlideCount * 2) {
              currentIndex.value = currentIndex.value % realSlideCount;
              gsap.set(sliderTrack.value, { x: getCurrentTransform() });
            } else if (currentIndex.value < 0) {
              currentIndex.value = realSlideCount * 2 - 1;
              gsap.set(sliderTrack.value, { x: getCurrentTransform() });
            }
          }
        });
      }
    };
    watch(isRTL, () => {
      resetCarouselPosition();
    });
    const copy = {
      en: {
        heroTitle: "Auto Hall Service",
        helpPhone: "Auto Hall Rescue Hotline: 58 555 156",
        watchVideo: "Watch full video",
        promiseTitle: "Sincere Promise",
        promiseDesc: "We honor every promise with sincerity",
        wholeheartedTitle: "Wholehearted",
        wholeheartedDesc1: "Auto Hall delivers the Voyah service philosophy wholeheartedly",
        wholeheartedDesc2: "to provide a trustworthy full-journey user experience in Tunisia",
        sincereTitle: "True Care",
        sincereDesc: "We treat every detail with sincerity",
        spaceTitle: "Voyah Space",
        spaceDesc1: 'With higher perceived product value and better user experience, Voyah has launched the "Self-run + Ecosystem" direct sales system, building a new development platform.',
        spaceDesc2: "Currently, Voyah has 507 stores in 212 cities globally \u2014 available in Tunisia through Auto Hall, Route de la Marsa GP9, Cit\xE9 Essalema, Tunis.",
        buyTitle: "Purchase Service",
        buyDesc: "Sincere promise for every stage of buying",
        afterTitle: "After-sales Service",
        afterDesc: "True care in every service detail",
        storyTitle: "Service Stories",
        storyDesc: "Fresh stories from users and communities",
        viewDetail: "View details",
        mallTitle: "Voyah Mall",
        mallDesc: "More than vehicles, a companion for every part of life",
        contactUs: "Contact Auto Hall",
        contactTitle: "Your Official Voyah Dealer in Tunisia",
        contactSub: "Auto Hall is your trusted Voyah partner. Reach us for any inquiry, test drive, or after-sales support.",
        companyAddress: "Route de la Marsa GP9, Cit\xE9 Essalema, 2079 Tunis",
        addressLabel: "Address",
        phoneLabel: "Phone",
        emailLabel: "Email"
      },
      fr: {
        heroTitle: "Service Auto Hall",
        helpPhone: "Assistance Auto Hall: 58 555 156",
        watchVideo: "Voir la vid\xE9o compl\xE8te",
        promiseTitle: "Engagement sinc\xE8re",
        promiseDesc: "Nous tenons chaque promesse avec sinc\xE9rit\xE9",
        wholeheartedTitle: "Enti\xE8rement d\xE9di\xE9",
        wholeheartedDesc1: "Auto Hall incarne la philosophie de service Voyah",
        wholeheartedDesc2: "pour une exp\xE9rience de confiance sur tout le parcours en Tunisie",
        sincereTitle: "Attention sinc\xE8re",
        sincereDesc: "Chaque d\xE9tail est trait\xE9 avec soin",
        spaceTitle: "Espace Voyah",
        spaceDesc1: 'Avec une valeur per\xE7ue plus \xE9lev\xE9e et une meilleure exp\xE9rience, Voyah a lanc\xE9 le syst\xE8me de vente directe "Auto-gestion + \xC9cosyst\xE8me", cr\xE9ant une nouvelle plateforme de d\xE9veloppement.',
        spaceDesc2: "Actuellement, Voyah poss\xE8de 507 magasins dans 212 villes du monde \u2014 disponible en Tunisie via Auto Hall, Route de la Marsa GP9, Cit\xE9 Essalema, Tunis.",
        buyTitle: "Service d'achat",
        buyDesc: "Une promesse sinc\xE8re \xE0 chaque \xE9tape de l'achat",
        afterTitle: "Service apr\xE8s-vente",
        afterDesc: "Une attention r\xE9elle dans chaque d\xE9tail",
        storyTitle: "Histoires de service",
        storyDesc: "Actualit\xE9s et histoires de la communaut\xE9",
        viewDetail: "Voir le d\xE9tail",
        mallTitle: "Boutique Voyah",
        mallDesc: "Au-del\xE0 de la voiture, un compagnon du quotidien",
        contactUs: "Contacter Auto Hall",
        contactTitle: "Votre concessionnaire officiel Voyah en Tunisie",
        contactSub: "Auto Hall est votre partenaire Voyah de confiance. Contactez-nous pour toute demande, essai ou service apr\xE8s-vente.",
        companyAddress: "Route de la Marsa GP9, Cit\xE9 Essalema, 2079 Tunis",
        addressLabel: "Adresse",
        phoneLabel: "T\xE9l\xE9phone",
        emailLabel: "E-mail"
      },
      ar: {
        heroTitle: "\u062E\u062F\u0645\u0627\u062A Auto Hall",
        helpPhone: "\u0647\u0627\u062A\u0641 \u0645\u0633\u0627\u0639\u062F\u0629 Auto Hall: 58 555 156",
        watchVideo: "\u0634\u0627\u0647\u062F \u0627\u0644\u0641\u064A\u062F\u064A\u0648 \u0627\u0644\u0643\u0627\u0645\u0644",
        promiseTitle: "\u0648\u0639\u062F \u0635\u0627\u062F\u0642",
        promiseDesc: "\u0646\u0641\u064A \u0628\u0643\u0644 \u0648\u0639\u062F \u0628\u0635\u062F\u0642",
        wholeheartedTitle: "\u0627\u0647\u062A\u0645\u0627\u0645 \u0643\u0627\u0645\u0644",
        wholeheartedDesc1: "\u062A\u062C\u0633\u0651\u062F Auto Hall \u0641\u0644\u0633\u0641\u0629 \u062E\u062F\u0645\u0629 Voyah \u0628\u0627\u0644\u0643\u0627\u0645\u0644",
        wholeheartedDesc2: "\u0644\u062A\u0642\u062F\u064A\u0645 \u062A\u062C\u0631\u0628\u0629 \u0645\u0648\u062B\u0648\u0642\u0629 \u0637\u0648\u0627\u0644 \u0631\u062D\u0644\u0629 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0641\u064A \u062A\u0648\u0646\u0633",
        sincereTitle: "\u0639\u0646\u0627\u064A\u0629 \u062D\u0642\u064A\u0642\u064A\u0629",
        sincereDesc: "\u0646\u0647\u062A\u0645 \u0628\u0643\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0628\u0635\u062F\u0642",
        spaceTitle: "\u0641\u0636\u0627\u0621 Voyah",
        spaceDesc1: '\u0628\u0641\u0636\u0644 \u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0646\u062A\u062C \u0627\u0644\u0639\u0627\u0644\u064A\u0629 \u0648\u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0623\u0641\u0636\u0644\u060C \u0623\u0637\u0644\u0642\u062A Voyah \u0646\u0638\u0627\u0645 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629 "\u0627\u0644\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0630\u0627\u062A\u064A + \u0627\u0644\u0645\u0646\u0638\u0648\u0645\u0629"\u060C \u0644\u0628\u0646\u0627\u0621 \u0645\u0646\u0635\u0629 \u062A\u0637\u0648\u064A\u0631 \u062C\u062F\u064A\u062F\u0629.',
        spaceDesc2: "\u062D\u0627\u0644\u064A\u0627\u064B\u060C \u062A\u0645\u062A\u0644\u0643 Voyah 507 \u0645\u062A\u062C\u0631 \u0641\u064A 212 \u0645\u062F\u064A\u0646\u0629 \u0639\u0627\u0644\u0645\u064A\u0627\u064B \u2014 \u0645\u062A\u0627\u062D\u0629 \u0641\u064A \u062A\u0648\u0646\u0633 \u0639\u0628\u0631 Auto Hall\u060C \u0637\u0631\u064A\u0642 \u0627\u0644\u0645\u0631\u0633\u0649 GP9\u060C \u0645\u062F\u064A\u0646\u0629 \u0627\u0644\u0633\u0644\u0627\u0645\u0629\u060C \u062A\u0648\u0646\u0633.",
        buyTitle: "\u062E\u062F\u0645\u0629 \u0627\u0644\u0634\u0631\u0627\u0621",
        buyDesc: "\u0648\u0639\u062F \u0635\u0627\u062F\u0642 \u0641\u064A \u0643\u0644 \u0645\u0631\u062D\u0644\u0629 \u0645\u0646 \u0627\u0644\u0634\u0631\u0627\u0621",
        afterTitle: "\u062E\u062F\u0645\u0629 \u0645\u0627 \u0628\u0639\u062F \u0627\u0644\u0628\u064A\u0639",
        afterDesc: "\u0639\u0646\u0627\u064A\u0629 \u062D\u0642\u064A\u0642\u064A\u0629 \u0641\u064A \u0643\u0644 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0629",
        storyTitle: "\u0642\u0635\u0635 \u0627\u0644\u062E\u062F\u0645\u0629",
        storyDesc: "\u0642\u0635\u0635 \u062C\u062F\u064A\u062F\u0629 \u0645\u0646 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 \u0648\u0627\u0644\u0645\u062C\u062A\u0645\u0639",
        viewDetail: "\u0639\u0631\u0636 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644",
        mallTitle: "\u0645\u062A\u062C\u0631 Voyah",
        mallDesc: "\u0623\u0643\u062B\u0631 \u0645\u0646 \u0633\u064A\u0627\u0631\u0629\u060C \u0631\u0641\u064A\u0642 \u0644\u0643\u0644 \u062C\u0648\u0627\u0646\u0628 \u0627\u0644\u062D\u064A\u0627\u0629",
        contactUs: "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639 Auto Hall",
        contactTitle: "\u0648\u0643\u064A\u0644\u0643 \u0627\u0644\u0631\u0633\u0645\u064A \u0644\u0640 Voyah \u0641\u064A \u062A\u0648\u0646\u0633",
        contactSub: "Auto Hall \u0647\u064A \u0634\u0631\u064A\u0643\u0643 \u0627\u0644\u0645\u0648\u062B\u0648\u0642 \u0644\u0640 Voyah. \u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0644\u0623\u064A \u0627\u0633\u062A\u0641\u0633\u0627\u0631 \u0623\u0648 \u062A\u062C\u0631\u0628\u0629 \u0642\u064A\u0627\u062F\u0629 \u0623\u0648 \u062E\u062F\u0645\u0629 \u0645\u0627 \u0628\u0639\u062F \u0627\u0644\u0628\u064A\u0639.",
        companyAddress: "\u0637\u0631\u064A\u0642 \u0627\u0644\u0645\u0631\u0633\u0649 GP9\u060C \u0645\u062F\u064A\u0646\u0629 \u0627\u0644\u0633\u0644\u0627\u0645\u0629\u060C 2079 \u062A\u0648\u0646\u0633",
        addressLabel: "\u0627\u0644\u0639\u0646\u0648\u0627\u0646",
        phoneLabel: "\u0627\u0644\u0647\u0627\u062A\u0641",
        emailLabel: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A"
      }
    };
    const t = computed(() => copy[lang.value]);
    const referenceServices = computed(() => {
      const items = [
        {
          image: "/reference-models/service-customer-care.png",
          title: {
            en: "Customer care",
            fr: "Service client",
            ar: "\u062E\u062F\u0645\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621"
          },
          desc: {
            en: "We uphold the service tenets of Professionalism, Efficiency and Customer First, delivering comprehensive support and a premium experience.",
            fr: "Nous d\xE9fendons les principes de professionnalisme, d\u2019efficacit\xE9 et de client d\u2019abord, avec un accompagnement complet et une exp\xE9rience premium.",
            ar: "\u0646\u0644\u062A\u0632\u0645 \u0628\u0645\u0628\u0627\u062F\u0626 \u0627\u0644\u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629 \u0648\u0627\u0644\u0643\u0641\u0627\u0621\u0629 \u0648\u062A\u0642\u062F\u064A\u0645 \u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629 \u0644\u0644\u0639\u0645\u064A\u0644\u060C \u0645\u0639 \u062F\u0639\u0645 \u0634\u0627\u0645\u0644 \u0648\u062A\u062C\u0631\u0628\u0629 \u0641\u0627\u062E\u0631\u0629."
          }
        },
        {
          image: "/reference-models/service-warranty.png",
          title: {
            en: "Warranty",
            fr: "Garantie",
            ar: "\u0627\u0644\u0636\u0645\u0627\u0646"
          },
          desc: {
            en: "Long-period warranty services for every new vehicle, with free repairs for manufacturing defects during the warranty period.",
            fr: "Garantie longue dur\xE9e pour chaque v\xE9hicule neuf, avec r\xE9parations gratuites en cas de d\xE9faut de fabrication pendant la p\xE9riode de garantie.",
            ar: "\u0636\u0645\u0627\u0646 \u0637\u0648\u064A\u0644 \u0627\u0644\u0645\u062F\u0649 \u0644\u0643\u0644 \u0645\u0631\u0643\u0628\u0629 \u062C\u062F\u064A\u062F\u0629\u060C \u0645\u0639 \u0625\u0635\u0644\u0627\u062D\u0627\u062A \u0645\u062C\u0627\u0646\u064A\u0629 \u0641\u064A \u062D\u0627\u0644 \u0648\u062C\u0648\u062F \u0639\u064A\u0648\u0628 \u062A\u0635\u0646\u064A\u0639 \u062E\u0644\u0627\u0644 \u0641\u062A\u0631\u0629 \u0627\u0644\u0636\u0645\u0627\u0646."
          }
        },
        {
          image: "/reference-models/service-genuine-parts.webp",
          title: {
            en: "Genuine parts",
            fr: "Pi\xE8ces d\u2019origine",
            ar: "\u0642\u0637\u0639 \u063A\u064A\u0627\u0631 \u0623\u0635\u0644\u064A\u0629"
          },
          desc: {
            en: "A continuous supply of genuine parts that maintain the vehicle\u2019s original reliability, comfort and safety.",
            fr: "Un approvisionnement continu en pi\xE8ces d\u2019origine qui pr\xE9servent la fiabilit\xE9, le confort et la s\xE9curit\xE9 d\u2019origine du v\xE9hicule.",
            ar: "\u0625\u0645\u062F\u0627\u062F \u0645\u0633\u062A\u0645\u0631 \u0628\u0642\u0637\u0639 \u0627\u0644\u063A\u064A\u0627\u0631 \u0627\u0644\u0623\u0635\u0644\u064A\u0629 \u0644\u0644\u062D\u0641\u0627\u0638 \u0639\u0644\u0649 \u0645\u0648\u062B\u0648\u0642\u064A\u0629 \u0627\u0644\u0645\u0631\u0643\u0628\u0629 \u0648\u0631\u0627\u062D\u062A\u0647\u0627 \u0648\u0633\u0644\u0627\u0645\u062A\u0647\u0627 \u0627\u0644\u0623\u0635\u0644\u064A\u0629."
          }
        }
      ];
      return items.map((item) => {
        var _a, _b;
        return {
          image: item.image,
          title: (_a = item.title[lang.value]) != null ? _a : item.title.en,
          desc: (_b = item.desc[lang.value]) != null ? _b : item.desc.en
        };
      });
    });
    const purchaseCards = computed(() => {
      if (lang.value === "ar") {
        return [
          { title: "\u0645\u0628\u064A\u0639\u0627\u062A \u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629 1-\u0639\u0644\u0649-1", desc: "\u062A\u0648\u062C\u064A\u0647 \u0645\u062E\u0635\u0635 \u0645\u0646 \u0645\u0633\u062A\u0634\u0627\u0631\u064A Auto Hall \u0630\u0648\u064A \u0627\u0644\u062E\u0628\u0631\u0629", imageClass: "img_1", image: "/static/assets/section3_1-d53304aa.jpg" },
          { title: "\u0627\u0633\u062A\u0642\u0628\u0627\u0644 \u0645\u062E\u0644\u0635 \u0641\u064A \u0627\u0644\u0645\u062A\u062C\u0631", desc: "\u062F\u0639\u0645 \u0645\u062E\u0635\u0635 \u0644\u0643\u0644 \u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0641\u064A \u062A\u0648\u0646\u0633", imageClass: "img_2", image: "/static/assets/section3_2-4fb471c7.jpg" },
          { title: "\u062A\u0633\u0644\u064A\u0645 \u0627\u062D\u062A\u0641\u0627\u0644\u064A", desc: "\u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0643\u0645\u0631\u0627\u0633\u0645 \u0644\u0627 \u062A\u0646\u0633\u0649 \u0645\u0639 Auto Hall", imageClass: "img_3", image: "/static/assets/section3_3-20237755.jpg" }
        ];
      }
      return lang.value === "fr" ? [
        { title: "Vente 1-\xE0-1 professionnelle", desc: "Service d\xE9di\xE9 par les conseillers experts Auto Hall", imageClass: "img_1", image: "/static/assets/section3_1-d53304aa.jpg" },
        { title: "Accueil sinc\xE8re en magasin", desc: "R\xE9ponse aux besoins de chaque client en Tunisie", imageClass: "img_2", image: "/static/assets/section3_2-4fb471c7.jpg" },
        { title: "Livraison avec c\xE9r\xE9monie", desc: "La remise devient une exp\xE9rience m\xE9morable avec Auto Hall", imageClass: "img_3", image: "/static/assets/section3_3-20237755.jpg" }
      ] : [
        { title: "1-on-1 professional sales", desc: "Dedicated guidance from Auto Hall expert consultants", imageClass: "img_1", image: "/static/assets/section3_1-d53304aa.jpg" },
        { title: "Sincere offline reception", desc: "Support tailored to each user need in Tunisia", imageClass: "img_2", image: "/static/assets/section3_2-4fb471c7.jpg" },
        { title: "Ceremonial delivery", desc: "Vehicle handover as a memorable ceremony with Auto Hall", imageClass: "img_3", image: "/static/assets/section3_3-20237755.jpg" }
      ];
    });
    const afterSaleCards = computed(() => {
      if (lang.value === "ar") {
        return [
          { title: "\u0641\u0631\u064A\u0642 Auto Hall \u0627\u0644\u0645\u062D\u062A\u0631\u0641", desc: "\u062F\u0639\u0645 \u0645\u062A\u0627\u062D \u0641\u064A \u0623\u064A \u0648\u0642\u062A \u0648\u0641\u064A \u0623\u064A \u0645\u0643\u0627\u0646", imageClass: "img_4", image: "/static/assets/section4_1-f7cf566b.jpg" },
          { title: "\u0627\u0633\u062A\u0639\u062F\u0627\u062F \u0639\u0644\u0649 \u0645\u062F\u0627\u0631 \u0627\u0644\u0633\u0627\u0639\u0629", desc: "\u0645\u0631\u0643\u0628\u0627\u062A \u062E\u062F\u0645\u0629 \u0645\u062A\u0646\u0642\u0644\u0629 \u0639\u0646\u062F \u0627\u0644\u0637\u0644\u0628 \u0639\u0628\u0631 29 803 078", imageClass: "img_5", image: "/static/assets/section4_2-aa55795b.jpg" },
          { title: "\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0639\u0644\u0649 \u0627\u0644\u0637\u0631\u064A\u0642", desc: "\u062A\u0648\u0627\u0635\u0644 \u0639\u0644\u0649 boc@autohall.tn \u0623\u0648 \u0627\u062A\u0635\u0644 \u0628\u0646\u0627 \u0641\u0648\u0631\u0627\u064B", imageClass: "img_6", image: "/static/assets/section4_3-23836307.jpg" }
        ];
      }
      return lang.value === "fr" ? [
        { title: "\xC9quipe Auto Hall professionnelle", desc: "Support disponible partout en Tunisie", imageClass: "img_4", image: "/static/assets/section4_1-f7cf566b.jpg" },
        { title: "Assistance 7x24h", desc: "Service mobile disponible au 29 803 078", imageClass: "img_5", image: "/static/assets/section4_2-aa55795b.jpg" },
        { title: "D\xE9pannage routier", desc: "\xC9crivez-nous \xE0 boc@autohall.tn \xE0 tout moment", imageClass: "img_6", image: "/static/assets/section4_3-23836307.jpg" }
      ] : [
        { title: "Auto Hall professional team", desc: "Support anytime and anywhere in Tunisia", imageClass: "img_4", image: "/static/assets/section4_1-f7cf566b.jpg" },
        { title: "7x24h standby", desc: "Mobile service \u2014 call 29 803 078", imageClass: "img_5", image: "/static/assets/section4_2-aa55795b.jpg" },
        { title: "Roadside assistance", desc: "Email boc@autohall.tn or call us anytime", imageClass: "img_6", image: "/static/assets/section4_3-23836307.jpg" }
      ];
    });
    const storeAccordion = computed(() => {
      if (lang.value === "ar") {
        return [
          { title: "\u0627\u0644\u0647\u062F\u0627\u064A\u0627", desc: "\u0625\u0643\u0633\u0633\u0648\u0627\u0631\u0627\u062A Voyah \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629 \u0644\u062E\u0644\u0642 \u062D\u064A\u0627\u0629 \u0645\u0631\u064A\u062D\u0629 \u0645\u0639 \u0627\u0644\u0645\u0628\u062F\u0639\u064A\u0646 \u2014 \u0645\u062A\u0627\u062D\u0629 \u0641\u064A \u0645\u062A\u062C\u0631 Auto Hall \u062A\u0648\u0646\u0633", image: "/static/assets/store1-bdde9696.jpg" },
          { title: "\u0627\u0644\u0633\u064A\u0627\u0631\u0629", desc: "\u0645\u0646\u062A\u062C\u0627\u062A \u0633\u064A\u0627\u0631\u0627\u062A \u0645\u062E\u062A\u0627\u0631\u0629 \u0628\u0639\u0646\u0627\u064A\u0629 \u0644\u062A\u0646\u0627\u0633\u0628 \u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A\u0643 \u2014 \u0642\u0645 \u0628\u0632\u064A\u0627\u0631\u062A\u0646\u0627 \u0641\u064A \u0637\u0631\u064A\u0642 \u0627\u0644\u0645\u0631\u0633\u0649 GP9", image: "/static/assets/store2-6e7252f4.jpg" },
          { title: "\u0627\u0644\u0630\u0643\u0627\u0621", desc: "\u062A\u0645\u0643\u064A\u0646 \u0631\u0642\u0645\u064A \u0639\u0645\u064A\u0642 \u0644\u062A\u062C\u062F\u064A\u062F \u062A\u062C\u0631\u0628\u0629 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0645\u0639 Auto Hall", image: "/static/assets/store3-fe6e8d7d.jpg" }
        ];
      }
      if (lang.value === "fr") {
        return [
          { title: "Cadeaux", desc: "Accessoires Voyah s\xE9lectionn\xE9s pour cr\xE9er une vie confortable \u2014 disponibles chez Auto Hall Tunis", image: "/static/assets/store1-bdde9696.jpg" },
          { title: "Produits Auto", desc: "Produits soigneusement s\xE9lectionn\xE9s \u2014 visitez-nous Route de la Marsa GP9, Cit\xE9 Essalema", image: "/static/assets/store2-6e7252f4.jpg" },
          { title: "Intelligence", desc: "Habilitation logicielle profonde pour renouveler totalement l'exp\xE9rience automobile avec Auto Hall", image: "/static/assets/store3-fe6e8d7d.jpg" }
        ];
      }
      return [
        { title: "Gifts", desc: "Selected Voyah accessories to create a comfortable life \u2014 available at Auto Hall Tunis", image: "/static/assets/store1-bdde9696.jpg" },
        { title: "Car Products", desc: "Carefully selected car products \u2014 visit us at Route de la Marsa GP9, Cit\xE9 Essalema", image: "/static/assets/store2-6e7252f4.jpg" },
        { title: "Intelligence", desc: "Deep software empowerment to fully renew the vehicle experience with Auto Hall", image: "/static/assets/store3-fe6e8d7d.jpg" }
      ];
    });
    const stories = computed(() => {
      if (lang.value === "ar") {
        return [
          { title: "\u0642\u0637\u0641 \u0627\u0644\u0641\u0631\u0627\u0648\u0644\u0629 \u0641\u064A \u0639\u0637\u0644\u0629 \u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u0623\u0633\u0628\u0648\u0639", desc: "\u0641\u064A \u0645\u0648\u0633\u0645 \u0627\u0644\u0634\u062A\u0627\u0621\u060C \u0627\u0633\u062A\u0636\u0627\u0641 \u0645\u0631\u0643\u0632 Voyah \u0641\u064A \u062E\u0641\u064A \u062D\u062F\u062B\u0627\u064B \u0645\u062C\u062A\u0645\u0639\u064A\u0627\u064B \u0644\u0627 \u064A\u0646\u0633\u0649 \u0644\u0644\u0645\u0627\u0644\u0643\u064A\u0646.", image: "/static/assets/users1-721725cd.png" },
          { title: "\u062F\u0639\u0645 \u062E\u0631\u064A\u0641 Voyah", desc: "\u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0639\u0637\u0644\u0627\u062A \u0648\u0627\u0644\u062E\u062F\u0645\u0629 \u0628\u062C\u0648\u0627\u0631 \u0628\u062D\u064A\u0631\u0629 \u0643\u0627\u064A\u0648\u0646.", image: "/static/assets/users2-5ea895eb.png" },
          { title: "\u062D\u0641\u0644 \u062A\u0633\u0644\u064A\u0645 \u062C\u0645\u0627\u0639\u064A", desc: "\u0623\u0642\u064A\u0645 \u062D\u0641\u0644 \u062A\u0633\u0644\u064A\u0645 \u062F\u0627\u0641\u0626 \u0648\u0645\u0645\u064A\u0632 \u0628\u0627\u0644\u062A\u0639\u0627\u0648\u0646 \u0628\u064A\u0646 \u0627\u0644\u0646\u0627\u062F\u064A \u0648\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646.", image: "/static/assets/users3-b4fe4c41.png" }
        ];
      }
      return [
        {
          title: lang.value === "fr" ? "Cueillette de fraises le week-end" : "Weekend strawberry picking",
          desc: lang.value === "fr" ? "Par temps d'hiver, le centre Voyah de Hefei a organis\xE9 un \xE9v\xE9nement convivial pour les propri\xE9taires." : "In the cold season, the Voyah Hefei center hosted a memorable community event.",
          image: "/static/assets/users1-721725cd.png"
        },
        {
          title: lang.value === "fr" ? "Escorte d'automne Voyah" : "Voyah autumn support event",
          desc: lang.value === "fr" ? "Protection de vacances au bord du lac Caiyun." : "Holiday support by Caiyun Lake.",
          image: "/static/assets/users2-5ea895eb.png"
        },
        {
          title: lang.value === "fr" ? "Livraison collective Voyah" : "Voyah group delivery event",
          desc: lang.value === "fr" ? "Le club Tianzhi Lan et le centre utilisateur Jinjiang ont lanc\xE9 une livraison collective conviviale." : "A warm group delivery ceremony was jointly hosted by the club and user center.",
          image: "/static/assets/users3-b4fe4c41.png"
        }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, scopeBind.value, _attrs))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "service-content" }, scopeBind.value))} data-v-f761ab1a><section${ssrRenderAttrs(mergeProps({ class: "bg" }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "video" }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(scopeBind.value)} data-v-f761ab1a><video class="video-js w-full h-full" autoplay muted loop playsinline preload="auto"${ssrRenderAttr("poster", _imports_0)} data-v-f761ab1a><source${ssrRenderAttr("src", _imports_1)} type="video/mp4" data-v-f761ab1a></video></div></div><div${ssrRenderAttrs(mergeProps({ class: "hero-overlay" }, scopeBind.value))} data-v-f761ab1a></div><div${ssrRenderAttrs(mergeProps({ class: "title inview-child inview-animated" }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(t.value.heroTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "call inview-child inview-animated" }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(t.value.helpPhone)}</div><div${ssrRenderAttrs(mergeProps({ class: "video-btn" }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(t.value.watchVideo)} <span${ssrRenderAttrs(mergeProps({ class: "video-btn-arrow" }, scopeBind.value))} data-v-f761ab1a>\u2192</span></div></section>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (videoModalOpen.value) {
          _push2(`<div class="video-modal-overlay" data-v-f761ab1a><div class="video-modal-box" data-v-f761ab1a><button class="video-modal-close" aria-label="Close" data-v-f761ab1a>\u2715</button><video class="video-modal-player" controls playsinline preload="auto" data-v-f761ab1a><source${ssrRenderAttr("src", _imports_2)} type="video/mp4" data-v-f761ab1a></video></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "autohall-info" }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "autohall-info-inner" }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "autohall-logo-wrap" }, scopeBind.value))} data-v-f761ab1a><img${ssrRenderAttrs(mergeProps({
        src: _imports_0$1,
        alt: "VOYAH Tunisie",
        class: "autohall-info-logo"
      }, scopeBind.value))} data-v-f761ab1a></div><div${ssrRenderAttrs(mergeProps({ class: "autohall-divider" }, scopeBind.value))} data-v-f761ab1a></div><div${ssrRenderAttrs(mergeProps({ class: "autohall-details" }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "autohall-detail-item" }, scopeBind.value))} data-v-f761ab1a><span${ssrRenderAttrs(mergeProps({ class: "autohall-icon" }, scopeBind.value))} data-v-f761ab1a><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-f761ab1a><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-f761ab1a></path><circle cx="12" cy="10" r="3" data-v-f761ab1a></circle></svg></span><a${ssrRenderAttrs(mergeProps({
        href: serviceMapUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        class: "autohall-link"
      }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(t.value.companyAddress)}</a></div><div${ssrRenderAttrs(mergeProps({ class: "autohall-detail-item" }, scopeBind.value))} data-v-f761ab1a><span${ssrRenderAttrs(mergeProps({ class: "autohall-icon" }, scopeBind.value))} data-v-f761ab1a><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-f761ab1a><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" data-v-f761ab1a></path></svg></span><span${ssrRenderAttrs(scopeBind.value)} data-v-f761ab1a><a${ssrRenderAttrs(mergeProps({
        href: "tel:55555156",
        class: "autohall-link"
      }, scopeBind.value))} data-v-f761ab1a>58 555 156</a> \xA0/\xA0 <a${ssrRenderAttrs(mergeProps({
        href: "tel:29803078",
        class: "autohall-link"
      }, scopeBind.value))} data-v-f761ab1a>29 803 078</a></span></div><div${ssrRenderAttrs(mergeProps({ class: "autohall-detail-item" }, scopeBind.value))} data-v-f761ab1a><span${ssrRenderAttrs(mergeProps({ class: "autohall-icon" }, scopeBind.value))} data-v-f761ab1a><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-f761ab1a><rect x="2" y="4" width="20" height="16" rx="2" data-v-f761ab1a></rect><path d="m22 7-10 7L2 7" data-v-f761ab1a></path></svg></span><a${ssrRenderAttrs(mergeProps({
        href: "mailto:boc@autohall.tn",
        class: "autohall-link"
      }, scopeBind.value))} data-v-f761ab1a>boc@autohall.tn</a></div></div><div${ssrRenderAttrs(mergeProps({ class: "autohall-cta" }, scopeBind.value))} data-v-f761ab1a><a${ssrRenderAttrs(mergeProps({
        href: "mailto:boc@autohall.tn",
        class: "autohall-cta-btn"
      }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(t.value.contactUs)}</a></div></div></section><section${ssrRenderAttrs(mergeProps({ class: "ref-services" }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "ref-services__grid" }, scopeBind.value))} data-v-f761ab1a><!--[-->`);
      ssrRenderList(referenceServices.value, (svc) => {
        _push(`<article${ssrRenderAttrs(mergeProps({
          key: svc.title,
          class: "ref-service-card"
        }, { ref_for: true }, scopeBind.value))} data-v-f761ab1a><img${ssrRenderAttrs(mergeProps({
          src: svc.image,
          alt: svc.title,
          loading: "lazy"
        }, { ref_for: true }, scopeBind.value))} data-v-f761ab1a><h3${ssrRenderAttrs(mergeProps({ ref_for: true }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(svc.title)}</h3><p${ssrRenderAttrs(mergeProps({ ref_for: true }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(svc.desc)}</p></article>`);
      });
      _push(`<!--]--></div></section><section${ssrRenderAttrs(mergeProps({ class: "section_1" }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "section_1_1" }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "img_1 inview-child" }, scopeBind.value))} data-v-f761ab1a><img${ssrRenderAttrs(mergeProps({
        class: "img_pc",
        src: "/static/assets/service-502e6c35.jpg",
        alt: "",
        loading: "lazy"
      }, scopeBind.value))} data-v-f761ab1a></div><div${ssrRenderAttrs(mergeProps({ class: "img_2 inview-child" }, scopeBind.value))} data-v-f761ab1a><img${ssrRenderAttrs(mergeProps({
        class: "img_pc",
        src: "/static/assets/section_2-84b4d8ae.jpg",
        alt: "",
        loading: "lazy"
      }, scopeBind.value))} data-v-f761ab1a></div></div><div${ssrRenderAttrs(mergeProps({ class: "section_1_2" }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "img_1 inview-child" }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "title" }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(t.value.promiseTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc" }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(t.value.promiseDesc)}</div></div><div${ssrRenderAttrs(mergeProps({ class: "img_2 inview-child" }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "title" }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(t.value.wholeheartedTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc" }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(t.value.wholeheartedDesc1)} <br${ssrRenderAttrs(scopeBind.value)} data-v-f761ab1a> ${ssrInterpolate(t.value.wholeheartedDesc2)}</div></div></div><div${ssrRenderAttrs(mergeProps({ class: "section_1_3" }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "img_2 inview-child" }, scopeBind.value))} data-v-f761ab1a><img${ssrRenderAttrs(mergeProps({
        class: "img_pc",
        src: "/static/assets/section_5-80a7d36b.jpg",
        alt: "",
        loading: "lazy"
      }, scopeBind.value))} data-v-f761ab1a></div><div${ssrRenderAttrs(mergeProps({ class: "img_1 inview-child" }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "title" }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(t.value.sincereTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc" }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(t.value.sincereDesc)}</div></div></div></section><section${ssrRenderAttrs(mergeProps({ class: "section_2" }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "title inview-child" }, scopeBind.value, { style: { "--inview-delay": "0.3s" } }))} data-v-f761ab1a>${ssrInterpolate(t.value.spaceTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc inview-child" }, scopeBind.value, { style: { "--inview-delay": "0.4s" } }))} data-v-f761ab1a>${ssrInterpolate(t.value.spaceDesc1)} <br${ssrRenderAttrs(scopeBind.value)} data-v-f761ab1a> ${ssrInterpolate(t.value.spaceDesc2)}</div><div${ssrRenderAttrs(mergeProps({ class: "swiper-voyah inview-child" }, swiperBind.value, { style: { "--inview-delay": "0.5s" } }))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "swiper-group-container" }, swiperBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({
        class: "custom-slider-track infinite-track",
        ref_key: "sliderTrack",
        ref: sliderTrack
      }, swiperBind.value))} data-v-f761ab1a><!--[-->`);
      ssrRenderList(duplicatedSlides.value, (img, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: index,
          class: "slide-item"
        }, { ref_for: true }, swiperBind.value))} data-v-f761ab1a><img${ssrRenderAttrs(mergeProps({
          src: img,
          alt: "",
          class: "slide-img",
          loading: "lazy"
        }, { ref_for: true }, swiperBind.value))} data-v-f761ab1a></div>`);
      });
      _push(`<!--]--></div></div><div${ssrRenderAttrs(mergeProps({ class: "slide_content" }, swiperBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "prev slide" }, swiperBind.value))} data-v-f761ab1a></div><div${ssrRenderAttrs(mergeProps({ class: "next slide" }, swiperBind.value))} data-v-f761ab1a></div></div><div${ssrRenderAttrs(mergeProps({ class: "indicators" }, swiperBind.value))} data-v-f761ab1a><!--[-->`);
      ssrRenderList(spaceSlides, (_, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: index,
          class: ["indicators_item", { active: currentIndex.value === index }]
        }, { ref_for: true }, swiperBind.value))} data-v-f761ab1a></div>`);
      });
      _push(`<!--]--></div></div></section><section${ssrRenderAttrs(mergeProps({ class: "section_3" }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "title inview-child" }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(t.value.buyTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc inview-child" }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(t.value.buyDesc)}</div><div${ssrRenderAttrs(mergeProps({ class: "section_3_content inview-child" }, scopeBind.value))} data-v-f761ab1a><!--[-->`);
      ssrRenderList(purchaseCards.value, (item) => {
        _push(`<article${ssrRenderAttrs(mergeProps({
          class: "section_3_content_item inview-child",
          key: item.title
        }, { ref_for: true }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({
          class: ["img", item.imageClass]
        }, { ref_for: true }, scopeBind.value))} data-v-f761ab1a><img${ssrRenderAttrs(mergeProps({
          src: item.image,
          alt: ""
        }, { ref_for: true }, scopeBind.value))} data-v-f761ab1a></div><div${ssrRenderAttrs(mergeProps({ class: "bottom" }, { ref_for: true }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "sub_title" }, { ref_for: true }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(item.title)}</div><div${ssrRenderAttrs(mergeProps({ class: "sub_desc" }, { ref_for: true }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(item.desc)}</div></div></article>`);
      });
      _push(`<!--]--></div></section><section${ssrRenderAttrs(mergeProps({ class: "section_3 section_4" }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "title inview-child" }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(t.value.afterTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc inview-child" }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(t.value.afterDesc)}</div><div${ssrRenderAttrs(mergeProps({ class: "section_3_content inview-child" }, scopeBind.value))} data-v-f761ab1a><!--[-->`);
      ssrRenderList(afterSaleCards.value, (item) => {
        _push(`<article${ssrRenderAttrs(mergeProps({
          class: "section_3_content_item inview-child",
          key: item.title
        }, { ref_for: true }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({
          class: ["img", item.imageClass]
        }, { ref_for: true }, scopeBind.value))} data-v-f761ab1a><img${ssrRenderAttrs(mergeProps({
          src: item.image,
          alt: ""
        }, { ref_for: true }, scopeBind.value))} data-v-f761ab1a></div><div${ssrRenderAttrs(mergeProps({ class: "bottom" }, { ref_for: true }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "sub_title" }, { ref_for: true }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(item.title)}</div><div${ssrRenderAttrs(mergeProps({ class: "sub_desc" }, { ref_for: true }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(item.desc)}</div></div></article>`);
      });
      _push(`<!--]--></div></section><section${ssrRenderAttrs(mergeProps({ class: "section_3 section_5" }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "title inview-child" }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(t.value.storyTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc inview-child" }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(t.value.storyDesc)}</div><div${ssrRenderAttrs(mergeProps({ class: "section_3_content inview-child" }, scopeBind.value))} data-v-f761ab1a><!--[-->`);
      ssrRenderList(stories.value, (story) => {
        _push(`<article${ssrRenderAttrs(mergeProps({
          class: "section_3_content_item",
          key: story.title
        }, { ref_for: true }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "img img_4" }, { ref_for: true }, scopeBind.value))} data-v-f761ab1a><img${ssrRenderAttrs(mergeProps({
          src: story.image,
          alt: ""
        }, { ref_for: true }, scopeBind.value))} data-v-f761ab1a></div><div${ssrRenderAttrs(mergeProps({ class: "bottom" }, { ref_for: true }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "sub_title" }, { ref_for: true }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(story.title)}</div><div${ssrRenderAttrs(mergeProps({ class: "sub_desc" }, { ref_for: true }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(story.desc)}</div><div${ssrRenderAttrs(mergeProps({ class: "more" }, { ref_for: true }, scopeBind.value))} data-v-f761ab1a><span${ssrRenderAttrs(mergeProps({ class: "view" }, { ref_for: true }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(t.value.viewDetail)} <span class="arrow-icon" data-v-f761ab1a>\u2192</span></span></div></div></article>`);
      });
      _push(`<!--]--></div></section><section${ssrRenderAttrs(mergeProps({ class: "section_3 section_6" }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "title inview-child" }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(t.value.mallTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc inview-child" }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(t.value.mallDesc)}</div><div${ssrRenderAttrs(mergeProps({ class: "accordion-contain inview-child service-accordion" }, accordionBind.value))} data-v-f761ab1a><!--[-->`);
      ssrRenderList(storeAccordion.value, (item, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: item.title,
          class: ["item", { active: index === 0 }],
          style: { backgroundImage: `url(${item.image})` }
        }, { ref_for: true }, accordionBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "shadow" }, { ref_for: true }, accordionBind.value))} data-v-f761ab1a></div><div${ssrRenderAttrs(mergeProps({ class: "title title-show title-hidden" }, { ref_for: true }, accordionBind.value))} data-v-f761ab1a>${ssrInterpolate(item.title)}</div><div${ssrRenderAttrs(mergeProps({ class: "item-wrapper" }, { ref_for: true }, accordionBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "title" }, { ref_for: true }, accordionBind.value))} data-v-f761ab1a>${ssrInterpolate(item.title)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc" }, { ref_for: true }, accordionBind.value))} data-v-f761ab1a>${ssrInterpolate(item.desc)}</div></div></div>`);
      });
      _push(`<!--]--></div></section><section${ssrRenderAttrs(mergeProps({ class: "autohall-contact-section" }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "autohall-contact-inner" }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "autohall-contact-heading" }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(t.value.contactTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "autohall-contact-sub" }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(t.value.contactSub)}</div><div${ssrRenderAttrs(mergeProps({ class: "autohall-contact-grid" }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "autohall-contact-card" }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "autohall-contact-card-icon" }, scopeBind.value))} data-v-f761ab1a><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-f761ab1a><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-f761ab1a></path><circle cx="12" cy="10" r="3" data-v-f761ab1a></circle></svg></div><div${ssrRenderAttrs(mergeProps({ class: "autohall-contact-card-label" }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(t.value.addressLabel)}</div><div${ssrRenderAttrs(mergeProps({ class: "autohall-contact-card-value" }, scopeBind.value))} data-v-f761ab1a>Auto Hall, SARL</div><div${ssrRenderAttrs(mergeProps({ class: "autohall-contact-card-value" }, scopeBind.value))} data-v-f761ab1a>Route de la Marsa GP9</div><div${ssrRenderAttrs(mergeProps({ class: "autohall-contact-card-value" }, scopeBind.value))} data-v-f761ab1a>Cit\xE9 Essalema, 2079 Tunis</div></div><div${ssrRenderAttrs(mergeProps({ class: "autohall-contact-card" }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "autohall-contact-card-icon" }, scopeBind.value))} data-v-f761ab1a><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-f761ab1a><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.86 5.86l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" data-v-f761ab1a></path></svg></div><div${ssrRenderAttrs(mergeProps({ class: "autohall-contact-card-label" }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(t.value.phoneLabel)}</div><a${ssrRenderAttrs(mergeProps({
        href: "tel:55555156",
        class: "autohall-contact-card-value autohall-contact-link"
      }, scopeBind.value))} data-v-f761ab1a>58 555 156</a><a${ssrRenderAttrs(mergeProps({
        href: "tel:29803078",
        class: "autohall-contact-card-value autohall-contact-link"
      }, scopeBind.value))} data-v-f761ab1a>29 803 078</a></div><div${ssrRenderAttrs(mergeProps({ class: "autohall-contact-card" }, scopeBind.value))} data-v-f761ab1a><div${ssrRenderAttrs(mergeProps({ class: "autohall-contact-card-icon" }, scopeBind.value))} data-v-f761ab1a><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-f761ab1a><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-v-f761ab1a></path><polyline points="22,6 12,13 2,6" data-v-f761ab1a></polyline></svg></div><div${ssrRenderAttrs(mergeProps({ class: "autohall-contact-card-label" }, scopeBind.value))} data-v-f761ab1a>${ssrInterpolate(t.value.emailLabel)}</div><a${ssrRenderAttrs(mergeProps({
        href: "mailto:boc@autohall.tn",
        class: "autohall-contact-card-value autohall-contact-link"
      }, scopeBind.value))} data-v-f761ab1a>boc@autohall.tn</a></div></div></div></section></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/legacy/ServiceCenterPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ServiceCenterPage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f761ab1a"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "service",
  __ssrInlineRender: true,
  setup(__props) {
    const page = resolvePage("service.html");
    const { textFor } = useSiteContent();
    useHead({
      title: page ? `Voyah | ${textFor(page.title)}` : "Voyah | Service",
      link: [
        { rel: "stylesheet", href: "/static/assets/index-b22dd282.css" },
        { rel: "stylesheet", href: "/static/assets/index-056018d9.css" },
        { rel: "stylesheet", href: "/static/assets/index-ae402aa7.css" },
        { rel: "stylesheet", href: "/static/assets/userser-c683f735.css" }
      ],
      meta: [
        {
          name: "description",
          content: page ? textFor(page.summary) : "Voyah service center"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ServiceCenterPage, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=service-B8snr7Si.mjs.map
