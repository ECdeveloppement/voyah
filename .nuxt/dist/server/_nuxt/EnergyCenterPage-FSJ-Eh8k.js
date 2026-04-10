import { defineComponent, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { u as useRoute, _ as _export_sfc } from "../server.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EnergyCenterPage",
  __ssrInlineRender: true,
  setup(__props) {
    const scopeBind = computed(() => ({ "data-v-8b70a27f": "" }));
    const swiperBind = computed(() => ({ "data-v-8116d67d": "" }));
    const tabBind = computed(() => ({ "data-v-5281e436": "" }));
    const route = useRoute();
    const lang = computed(() => {
      const code = Array.isArray(route.params.locale) ? route.params.locale[0] : route.params.locale;
      return code === "fr" || code === "ar" ? code : "en";
    });
    const copy = {
      en: {
        heroTitle: "Voyah Energy",
        heroDesc: "Technology-powered charging ecosystem with a faster, smarter and greener energy experience.",
        solutionTitle: "168 Energy Solution",
        moreKey: "More",
        moreTitle: "One tap to millions of resources",
        moreDesc1: "Ultra-fast charging rollout continues with our thousand-station network.",
        moreDesc2: "Public charging network covers 2800+ counties and key northwest corridors.",
        chargeMap: "Voyah Charging Map",
        fastKey: "Fast",
        fastTitle: "World's first megawatt-level branded supercharger",
        fastDesc: "VP1000 delivers six core strengths for ultra-fast charging.",
        smartKey: "Smart",
        smartTitle: "From fast full charge to seamless full charge",
        smartDesc: "Dual robot charging services bring fully hands-free charging.",
        watchVideo: "Watch full video",
        greenKey: "Green",
        greenTitle: "More orderly, efficient and eco-friendly energy use",
        bookTitle: "Voyah Charging Encyclopedia",
        bookDesc: "All charging knowledge in one place",
        tabSmart: "Smart Supercharging",
        tabHome: "Home Charging",
        tabPublic: "Public Charging",
        tabFaq: "Charging FAQ",
        tabPrivate: "Private pile sharing",
        tabCascade: "Battery cascade utilization",
        power1a: "one super app",
        power1b: "1000 supercharging stations",
        power1c: "10000 supercharging piles",
        power1d: "1M+ public charging resources",
        power2a: "6 km super energy replenishment circle",
        power3a: "Voyah supercharging",
        power3b: "public charging",
        power3c: "home charging",
        power3d: "emergency energy",
        power3e: "seamless charging",
        power3f: "V2G",
        power3g: "private pile sharing",
        power3h: "battery cascade utilization",
        tabDesc: "Battery cascade utilization (retired batteries, renewed life)",
        viewDetail: "View details",
        partnerTitle: "Voyah Supercharging Partner Recruitment",
        learnMore: "Learn more"
      },
      fr: {
        heroTitle: "Energie Voyah",
        heroDesc: "Un ecosysteme de recharge rapide, intelligent et plus durable grace a la technologie.",
        solutionTitle: "Solution energie 168",
        moreKey: "Plus",
        moreTitle: "Acces instantane a des millions de ressources",
        moreDesc1: "Le reseau de supercharge se deploie en continu.",
        moreDesc2: "Le reseau public couvre 2800+ districts et les grands axes nord-ouest.",
        chargeMap: "Carte de recharge Voyah",
        fastKey: "Rapide",
        fastTitle: "Premier superchargeur megawatt de marque au monde",
        fastDesc: "VP1000 offre six atouts cles pour une recharge ultra-rapide.",
        smartKey: "Smart",
        smartTitle: "De la charge ultra-rapide a la charge sans effort",
        smartDesc: "Double robot de recharge pour une experience sans intervention.",
        watchVideo: "Voir la video complete",
        greenKey: "Eco",
        greenTitle: "Une energie plus ordonnee, efficiente et verte",
        bookTitle: "Encyclopedie de recharge Voyah",
        bookDesc: "Toutes les infos recharge en un seul guide",
        tabSmart: "Guide supercharge",
        tabHome: "Guide recharge domicile",
        tabPublic: "Guide recharge publique",
        tabFaq: "FAQ recharge",
        tabPrivate: "Partage borne privee",
        tabCascade: "Seconde vie des batteries",
        power1a: "une super application",
        power1b: "1000 stations supercharge",
        power1c: "10000 bornes supercharge",
        power1d: "1M+ ressources publiques de recharge",
        power2a: "cercle super recharge de 6 km",
        power3a: "supercharge Voyah",
        power3b: "recharge publique",
        power3c: "recharge domicile",
        power3d: "energie d'urgence",
        power3e: "recharge sans action",
        power3f: "V2G",
        power3g: "partage borne privee",
        power3h: "seconde vie des batteries",
        tabDesc: "Seconde vie des batteries (nouvel usage pour batteries retirees)",
        viewDetail: "Voir le detail",
        partnerTitle: "Recrutement partenaires supercharge Voyah",
        learnMore: "En savoir plus"
      },
      ar: {
        heroTitle: "طاقة Voyah",
        heroDesc: "منظومة شحن مدعومة بالتقنية لتجربة اسرع واذكى واكثر استدامة.",
        solutionTitle: "حل الطاقة 168",
        moreKey: "اكثر",
        moreTitle: "وصول فوري الى ملايين الموارد",
        moreDesc1: "يستمر التوسع في شبكة الشحن الفائق على نطاق واسع.",
        moreDesc2: "تغطي شبكة الشحن العام اكثر من 2800 منطقة.",
        chargeMap: "خريطة شحن Voyah",
        fastKey: "سريع",
        fastTitle: "اول شاحن فائق ميجاواط بعلامة تجارية عالميا",
        fastDesc: "يوفر VP1000 ست مزايا اساسية لتجربة شحن فائقة السرعة.",
        smartKey: "ذكي",
        smartTitle: "من شحن سريع كامل الى شحن سلس بالكامل",
        smartDesc: "خدمات شحن روبوتية مزدوجة لتجربة شحن بدون تدخل يدوي.",
        watchVideo: "شاهد الفيديو الكامل",
        greenKey: "اخضر",
        greenTitle: "استخدام طاقة اكثر تنظيما وكفاءة وصداقة للبيئة",
        bookTitle: "موسوعة الشحن من Voyah",
        bookDesc: "كل معلومات الشحن في مكان واحد",
        tabSmart: "الشحن الفائق الذكي",
        tabHome: "الشحن المنزلي",
        tabPublic: "الشحن العام",
        tabFaq: "اسئلة الشحن",
        tabPrivate: "مشاركة الشاحن الخاص",
        tabCascade: "الاستخدام التدرجي للبطارية",
        power1a: "تطبيق ذكي واحد",
        power1b: "1000 محطة شحن فائق",
        power1c: "10000 نقطة شحن فائق",
        power1d: "اكثر من مليون مورد شحن عام",
        power2a: "دائرة تعويض طاقة فائقة ضمن 6 كم",
        power3a: "شحن Voyah الفائق",
        power3b: "الشحن العام",
        power3c: "الشحن المنزلي",
        power3d: "طاقة الطوارئ",
        power3e: "شحن سلس",
        power3f: "V2G",
        power3g: "مشاركة الشاحن الخاص",
        power3h: "الاستخدام التدرجي للبطارية",
        tabDesc: "الاستخدام التدرجي للبطارية (حياة جديدة للبطاريات المتقاعدة)",
        viewDetail: "عرض التفاصيل",
        partnerTitle: "استقطاب شركاء الشحن الفائق من Voyah",
        learnMore: "اعرف المزيد"
      }
    };
    const t = computed(() => copy[lang.value]);
    const electric = computed(
      () => lang.value === "fr" ? [
        { value: "1000", unit: "kW", label: "puissance de pointe" },
        { value: "1000", unit: "A", label: "courant de pointe" },
        { value: "1.7", unit: "km", label: "recharge la plus rapide" }
      ] : [
        { value: "1000", unit: "kW", label: "peak power" },
        { value: "1000", unit: "A", label: "peak current" },
        { value: "1.7", unit: "km", label: "fastest charging distance" }
      ]
    );
    const chargeMetrics = computed(
      () => lang.value === "fr" ? [
        { value: "1,540,000", unit: "", title: "ressources de recharge integrees" },
        { value: "16,000", unit: "", title: "ressources supercharge" },
        { value: "5.3", unit: "B", title: "charge cumulee pour les utilisateurs" },
        { value: "17", unit: "0k t", title: "reduction cumulee des emissions carbone" }
      ] : [
        { value: "1,540,000", unit: "", title: "integrated charging resources" },
        { value: "16,000", unit: "", title: "supercharging resources" },
        { value: "5.3", unit: "B", title: "total electricity delivered" },
        { value: "17", unit: "0k t", title: "reduced carbon emissions" }
      ]
    );
    computed(() => [
      { title: "V2G" },
      { title: lang.value === "fr" ? "Partage borne privee" : "Private pile sharing" },
      { title: lang.value === "fr" ? "Seconde vie des batteries" : "Battery cascade utilization" }
    ]);
    const energySwiperSlides = computed(() => [
      {
        title: "V2G",
        desc: lang.value === "fr" ? "Le vehicule agit comme une eponge energetique." : "Vehicle as an energy sponge for peak-valley balancing.",
        image: "/static/assets/V2G-cba13343.jpg"
      },
      {
        title: lang.value === "fr" ? "Partage borne privee" : "Private pile sharing",
        desc: lang.value === "fr" ? "Monetisation du temps de charge domestique inactif." : "Monetize idle home charging time.",
        image: "/static/assets/kongxiang-f3e4984f.jpg"
      },
      {
        title: lang.value === "fr" ? "Seconde vie des batteries" : "Battery cascade utilization",
        desc: t.value.tabDesc,
        image: "/static/assets/tici-b570e40a.jpg"
      }
    ]);
    const books = computed(
      () => lang.value === "fr" ? [
        {
          title: "Conseils supercharge | double fonction sans action",
          desc: "Recharge sans operation",
          image: "/static/assets/V2G-cba13343.jpg"
        },
        {
          title: "Combien d'etapes pour installer votre borne a domicile ?",
          desc: "Schema d'installation de la borne privee",
          image: "/static/assets/kongxiang-f3e4984f.jpg"
        },
        {
          title: "Guide recharge publique (charge rapide)",
          desc: "Comment utiliser la charge rapide publique",
          image: "/static/assets/tici-b570e40a.jpg"
        }
      ] : [
        {
          title: "Supercharging tip: seamless charging features",
          desc: "Zero-operation charging",
          image: "/static/assets/V2G-cba13343.jpg"
        },
        {
          title: "How many steps to install a private charger at home?",
          desc: "A quick installation flow for your dedicated charger",
          image: "/static/assets/kongxiang-f3e4984f.jpg"
        },
        {
          title: "Public charging guide (fast charging)",
          desc: "How to use fast charging in public stations",
          image: "/static/assets/tici-b570e40a.jpg"
        }
      ]
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, unref(scopeBind), _attrs))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "energy-content" }, unref(scopeBind)))} data-v-73cf2c10><section${ssrRenderAttrs(mergeProps({ class: "bg" }, unref(scopeBind)))} data-v-73cf2c10><img${ssrRenderAttrs(mergeProps({
        class: "headImg bg_pc",
        src: "/static/assets/energy_bg-4482e81f.jpg"
      }, unref(scopeBind)))} data-v-73cf2c10><img${ssrRenderAttrs(mergeProps({
        class: "headImg bg_mb",
        src: "/static/assets/energy_bg_mb-36355b8d.png"
      }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).heroTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc" }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).heroDesc)}</div></section><section${ssrRenderAttrs(mergeProps({ class: "section_1" }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "section_1_1" }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).solutionTitle)}</div><img${ssrRenderAttrs(mergeProps({
        class: "power",
        src: "/static/assets/section_3-4777d2a7.png",
        alt: ""
      }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "power_mb" }, unref(scopeBind)))} data-v-73cf2c10><img${ssrRenderAttrs(mergeProps({
        src: "/static/assets/section_4-4c6549b3.png",
        alt: ""
      }, unref(scopeBind)))} data-v-73cf2c10></div><div${ssrRenderAttrs(mergeProps({ class: "section_1_2" }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "section_1_2_top" }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "section_1_2_item" }, unref(scopeBind)))} data-v-73cf2c10><img${ssrRenderAttrs(mergeProps({
        class: "power_bg1",
        src: "/static/assets/power_bg1-7048cd30.png",
        alt: ""
      }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "power_num" }, unref(scopeBind)))} data-v-73cf2c10>1</div><div${ssrRenderAttrs(mergeProps({ class: "power1_item" }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(unref(scopeBind))} data-v-73cf2c10>·${ssrInterpolate(unref(t).power1a)}</div><div${ssrRenderAttrs(unref(scopeBind))} data-v-73cf2c10>·${ssrInterpolate(unref(t).power1b)}</div><div${ssrRenderAttrs(unref(scopeBind))} data-v-73cf2c10>·${ssrInterpolate(unref(t).power1c)}</div><div${ssrRenderAttrs(unref(scopeBind))} data-v-73cf2c10>·${ssrInterpolate(unref(t).power1d)}</div></div></div><div${ssrRenderAttrs(mergeProps({ class: "section_1_2_item" }, unref(scopeBind)))} data-v-73cf2c10><img${ssrRenderAttrs(mergeProps({
        class: "power_bg2",
        src: "/static/assets/power_bg2-a6639f1e.png",
        alt: ""
      }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "power_num" }, unref(scopeBind)))} data-v-73cf2c10>6</div><div${ssrRenderAttrs(mergeProps({ class: "power2_item" }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(unref(scopeBind))} data-v-73cf2c10>·${ssrInterpolate(unref(t).power2a)}</div></div></div></div><div${ssrRenderAttrs(mergeProps({ class: "section_1_2_bottom" }, unref(scopeBind)))} data-v-73cf2c10><img${ssrRenderAttrs(mergeProps({
        class: "power_bg3",
        src: "/static/assets/power_bg3-d6d323e0.png",
        alt: ""
      }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "power_num" }, unref(scopeBind)))} data-v-73cf2c10>8</div><div${ssrRenderAttrs(mergeProps({ class: "power3" }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "power3_item" }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(unref(scopeBind))} data-v-73cf2c10>·${ssrInterpolate(unref(t).power3a)}</div><div${ssrRenderAttrs(unref(scopeBind))} data-v-73cf2c10>·${ssrInterpolate(unref(t).power3b)}</div><div${ssrRenderAttrs(unref(scopeBind))} data-v-73cf2c10>·${ssrInterpolate(unref(t).power3c)}</div><div${ssrRenderAttrs(unref(scopeBind))} data-v-73cf2c10>·${ssrInterpolate(unref(t).power3d)}</div></div><div${ssrRenderAttrs(mergeProps({ class: "power3_item" }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(unref(scopeBind))} data-v-73cf2c10>·${ssrInterpolate(unref(t).power3e)}</div><div${ssrRenderAttrs(unref(scopeBind))} data-v-73cf2c10>·${ssrInterpolate(unref(t).power3f)}</div><div${ssrRenderAttrs(unref(scopeBind))} data-v-73cf2c10>·${ssrInterpolate(unref(t).power3g)}</div><div${ssrRenderAttrs(unref(scopeBind))} data-v-73cf2c10>·${ssrInterpolate(unref(t).power3h)}</div></div></div></div></div></div></section><section${ssrRenderAttrs(mergeProps({ class: "section2" }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))} data-v-73cf2c10><span${ssrRenderAttrs(mergeProps({ class: "large" }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).moreKey)}</span>${ssrInterpolate(unref(t).moreTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc" }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).moreDesc1)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc desc1" }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).moreDesc2)}</div><div${ssrRenderAttrs(mergeProps({ class: "earth_content" }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "earth" }, unref(scopeBind)))} data-v-73cf2c10></div><div${ssrRenderAttrs(mergeProps({ class: "charge_earth" }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "charge_title" }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).chargeMap)}</div><div${ssrRenderAttrs(mergeProps({ class: "charge_content" }, unref(scopeBind)))} data-v-73cf2c10><!--[-->`);
      ssrRenderList(unref(chargeMetrics), (metric) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "charge_content_item",
          key: metric.title
        }, { ref_for: true }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "charge_content_item_top" }, { ref_for: true }, unref(scopeBind)))} data-v-73cf2c10><span${ssrRenderAttrs(mergeProps({ class: "charge_content_item_top_num" }, { ref_for: true }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(metric.value)}</span>${ssrInterpolate(metric.unit)}</div><div${ssrRenderAttrs(mergeProps({ class: "charge_content_item_bottom" }, { ref_for: true }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(metric.title)}</div></div>`);
      });
      _push(`<!--]--></div></div></div></section><section${ssrRenderAttrs(mergeProps({ class: "section2 section3" }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))} data-v-73cf2c10><span${ssrRenderAttrs(mergeProps({ class: "large" }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).fastKey)}</span>${ssrInterpolate(unref(t).fastTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc" }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).fastDesc)}</div><div${ssrRenderAttrs(mergeProps({ class: "section3_1" }, unref(scopeBind)))} data-v-73cf2c10><img${ssrRenderAttrs(mergeProps({
        class: "charge_mb",
        src: "/static/assets/charge_mb-0e5441f2.png",
        alt: ""
      }, unref(scopeBind)))} data-v-73cf2c10><img${ssrRenderAttrs(mergeProps({
        class: "charge_pc",
        src: "/static/assets/charge_pc-1c0a2e91.png",
        alt: ""
      }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "electric_list" }, unref(scopeBind)))} data-v-73cf2c10><!--[-->`);
      ssrRenderList(unref(electric), (item) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "electric_item",
          key: item.value
        }, { ref_for: true }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "num" }, { ref_for: true }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(item.value)}<span${ssrRenderAttrs(mergeProps({ class: "unit" }, { ref_for: true }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(item.unit)}</span></div><div${ssrRenderAttrs(mergeProps({ class: "tips" }, { ref_for: true }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(item.label)}</div></div>`);
      });
      _push(`<!--]--></div></div></section><section${ssrRenderAttrs(mergeProps({ class: "section2 section4" }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))} data-v-73cf2c10><span${ssrRenderAttrs(mergeProps({ class: "large" }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).smartKey)}</span>${ssrInterpolate(unref(t).smartTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc" }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).smartDesc)}</div><div${ssrRenderAttrs(mergeProps({ class: "video_btn" }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "btn" }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).watchVideo)}</div></div><div${ssrRenderAttrs(mergeProps({ class: "section4_1" }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "section4_1_content" }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "video" }, unref(scopeBind)))} data-v-73cf2c10><video${ssrRenderAttrs(mergeProps({
        class: "video-js w-full h-full",
        autoplay: "",
        muted: "",
        loop: "",
        playsinline: "",
        preload: "auto"
      }, unref(scopeBind)))} data-v-73cf2c10></video><img${ssrRenderAttrs(mergeProps({
        class: "section4-cover",
        src: "/static/assets/section_2-2b753ee2.png",
        alt: ""
      }, unref(scopeBind)))} data-v-73cf2c10></div><div${ssrRenderAttrs(mergeProps({ class: "video-btn" }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).watchVideo)}</div></div></div></section><section${ssrRenderAttrs(mergeProps({ class: "section2 section5" }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))} data-v-73cf2c10><span${ssrRenderAttrs(mergeProps({ class: "large" }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).greenKey)}</span>${ssrInterpolate(unref(t).greenTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "horizontal-tab commonTab" }, unref(tabBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "tab" }, unref(tabBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "tab-nav" }, unref(tabBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "tab-item" }, unref(tabBind)))} data-v-73cf2c10>V2G</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item" }, unref(tabBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).tabPrivate)}</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item active" }, unref(tabBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).tabCascade)}</div><div${ssrRenderAttrs(mergeProps({ class: "slide-content" }, unref(tabBind)))} data-v-73cf2c10></div></div></div><div${ssrRenderAttrs(mergeProps({ class: "tab_mb" }, unref(tabBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "tab-item_mb" }, unref(tabBind)))} data-v-73cf2c10>V2G</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item_mb" }, unref(tabBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).tabPrivate)}</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item_mb active" }, unref(tabBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).tabCascade)}</div></div><div${ssrRenderAttrs(mergeProps({ class: "tab-content" }, unref(tabBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "tab-content-item active" }, unref(tabBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "tab_content_demo" }, unref(scopeBind)))} data-v-73cf2c10><img${ssrRenderAttrs(mergeProps({
        src: "/static/assets/tici-b570e40a.jpg",
        alt: ""
      }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "tab_desc" }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).tabDesc)}</div></div></div></div></div><div${ssrRenderAttrs(mergeProps({ class: "swiper swiper_banner_full" }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "swiper-voyah" }, unref(swiperBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "swiper-group-container" }, unref(swiperBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "swiper swiper-initialized swiper-horizontal swiper-pointer-events" }, unref(swiperBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "swiper-wrapper" }, unref(swiperBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({
        class: "swiper-slide swiper-slide-duplicate",
        "data-swiper-slide-index": "2"
      }, unref(swiperBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "slide-item" }, unref(swiperBind)))} data-v-73cf2c10><img${ssrRenderAttrs(mergeProps({
        src: unref(energySwiperSlides)[2].image,
        alt: "",
        class: "slide-img"
      }, unref(swiperBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "swiper-content" }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "swiper_title" }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(energySwiperSlides)[2].title)}</div><div${ssrRenderAttrs(mergeProps({ class: "swiper_desc" }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(energySwiperSlides)[2].desc)}</div></div></div></div><div${ssrRenderAttrs(mergeProps({
        class: "swiper-slide",
        "data-swiper-slide-index": "0"
      }, unref(swiperBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "slide-item" }, unref(swiperBind)))} data-v-73cf2c10><img${ssrRenderAttrs(mergeProps({
        src: unref(energySwiperSlides)[0].image,
        alt: "",
        class: "slide-img"
      }, unref(swiperBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "swiper-content" }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "swiper_title" }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(energySwiperSlides)[0].title)}</div><div${ssrRenderAttrs(mergeProps({ class: "swiper_desc" }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(energySwiperSlides)[0].desc)}</div></div></div></div><div${ssrRenderAttrs(mergeProps({
        class: "swiper-slide",
        "data-swiper-slide-index": "1"
      }, unref(swiperBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "slide-item" }, unref(swiperBind)))} data-v-73cf2c10><img${ssrRenderAttrs(mergeProps({
        src: unref(energySwiperSlides)[1].image,
        alt: "",
        class: "slide-img"
      }, unref(swiperBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "swiper-content" }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "swiper_title" }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(energySwiperSlides)[1].title)}</div><div${ssrRenderAttrs(mergeProps({ class: "swiper_desc" }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(energySwiperSlides)[1].desc)}</div></div></div></div><div${ssrRenderAttrs(mergeProps({
        class: "swiper-slide",
        "data-swiper-slide-index": "2"
      }, unref(swiperBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "slide-item" }, unref(swiperBind)))} data-v-73cf2c10><img${ssrRenderAttrs(mergeProps({
        src: unref(energySwiperSlides)[2].image,
        alt: "",
        class: "slide-img"
      }, unref(swiperBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "swiper-content" }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "swiper_title" }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(energySwiperSlides)[2].title)}</div><div${ssrRenderAttrs(mergeProps({ class: "swiper_desc" }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(energySwiperSlides)[2].desc)}</div></div></div></div><div${ssrRenderAttrs(mergeProps({
        class: "swiper-slide swiper-slide-duplicate",
        "data-swiper-slide-index": "0"
      }, unref(swiperBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "slide-item" }, unref(swiperBind)))} data-v-73cf2c10><img${ssrRenderAttrs(mergeProps({
        src: unref(energySwiperSlides)[0].image,
        alt: "",
        class: "slide-img"
      }, unref(swiperBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "swiper-content" }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "swiper_title" }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(energySwiperSlides)[0].title)}</div><div${ssrRenderAttrs(mergeProps({ class: "swiper_desc" }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(energySwiperSlides)[0].desc)}</div></div></div></div></div></div></div><div${ssrRenderAttrs(mergeProps({ class: "slide_content" }, unref(swiperBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "prev slide" }, unref(swiperBind)))} data-v-73cf2c10></div><div${ssrRenderAttrs(mergeProps({ class: "next slide" }, unref(swiperBind)))} data-v-73cf2c10></div></div><div${ssrRenderAttrs(mergeProps({ class: "indicators" }, unref(swiperBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "indicators_item" }, unref(swiperBind)))} data-v-73cf2c10></div><div${ssrRenderAttrs(mergeProps({ class: "indicators_item active" }, unref(swiperBind)))} data-v-73cf2c10></div><div${ssrRenderAttrs(mergeProps({ class: "indicators_item" }, unref(swiperBind)))} data-v-73cf2c10></div></div></div></div></section><section${ssrRenderAttrs(mergeProps({ class: "section2 section6" }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).bookTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc" }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).bookDesc)}</div><div${ssrRenderAttrs(mergeProps({ class: "horizontal-tab commonTab" }, unref(tabBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "tab" }, unref(tabBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "tab-nav" }, unref(tabBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "tab-item active" }, unref(tabBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).tabSmart)}</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item" }, unref(tabBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).tabHome)}</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item" }, unref(tabBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).tabPublic)}</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item" }, unref(tabBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).tabFaq)}</div><div${ssrRenderAttrs(mergeProps({ class: "slide-content" }, unref(tabBind)))} data-v-73cf2c10></div></div></div><div${ssrRenderAttrs(mergeProps({ class: "tab_mb" }, unref(tabBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "tab-item_mb active" }, unref(tabBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).tabSmart)}</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item_mb" }, unref(tabBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).tabHome)}</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item_mb" }, unref(tabBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).tabPublic)}</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item_mb" }, unref(tabBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).tabFaq)}</div></div></div><div${ssrRenderAttrs(mergeProps({ class: "tab-content-item active swiper_banner_full" }, unref(tabBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "swiper-voyah" }, unref(swiperBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "swiper-group-container" }, unref(swiperBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "swiper" }, unref(swiperBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "swiper-wrapper" }, unref(swiperBind)))} data-v-73cf2c10><!--[-->`);
      ssrRenderList(unref(books).slice(0, 3), (book) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "swiper-slide",
          key: book.title
        }, { ref_for: true }, unref(swiperBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "slide-item clickable" }, { ref_for: true }, unref(swiperBind)))} data-v-73cf2c10><img${ssrRenderAttrs(mergeProps({
          src: book.image,
          alt: "",
          class: "slide-img"
        }, { ref_for: true }, unref(swiperBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "swiper-content" }, { ref_for: true }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "book_title" }, { ref_for: true }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(book.title)}</div><div${ssrRenderAttrs(mergeProps({ class: "book_desc" }, { ref_for: true }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(book.desc)}</div><div${ssrRenderAttrs(mergeProps({ class: "more" }, { ref_for: true }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).viewDetail)}</div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div><div${ssrRenderAttrs(mergeProps({ class: "slide_content" }, unref(swiperBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "prev slide" }, unref(swiperBind)))} data-v-73cf2c10></div><div${ssrRenderAttrs(mergeProps({ class: "next slide" }, unref(swiperBind)))} data-v-73cf2c10></div></div><div${ssrRenderAttrs(mergeProps({ class: "indicators" }, unref(swiperBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "indicators_item active" }, unref(swiperBind)))} data-v-73cf2c10></div><div${ssrRenderAttrs(mergeProps({ class: "indicators_item" }, unref(swiperBind)))} data-v-73cf2c10></div><div${ssrRenderAttrs(mergeProps({ class: "indicators_item" }, unref(swiperBind)))} data-v-73cf2c10></div></div></div></div></section><section${ssrRenderAttrs(mergeProps({ class: "section7" }, unref(scopeBind)))} data-v-73cf2c10><img${ssrRenderAttrs(mergeProps({
        class: "headImg bg_pc",
        src: "/static/assets/partner_pc-b12d249b.png"
      }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "content" }, unref(scopeBind)))} data-v-73cf2c10><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).partnerTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "more" }, unref(scopeBind)))} data-v-73cf2c10><button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: "voyah-button voyah-button--default btn"
      }, unref(scopeBind)))} data-v-73cf2c10>${ssrInterpolate(unref(t).learnMore)}</button></div></div></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/legacy/EnergyCenterPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EnergyCenterPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-73cf2c10"]]);
export {
  EnergyCenterPage as E
};
//# sourceMappingURL=EnergyCenterPage-FSJ-Eh8k.js.map
