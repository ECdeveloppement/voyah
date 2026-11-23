import { i as t$1, e as __nuxt_component_0$1, _ as _export_sfc, o as brochureOf } from './server.mjs';
import { ref, defineComponent, mergeProps, withCtx, renderSlot, computed, unref, useSSRContext } from 'file://E:/voyah/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrInterpolate } from 'file://E:/voyah/node_modules/vue/server-renderer/index.mjs';
import { u as useSiteContent } from './useSiteContent-DZMgAnrU.mjs';

const __default__ = {
  inheritAttrs: false
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "BaseButton",
  __ssrInlineRender: true,
  props: {
    to: {},
    variant: { default: "primary" },
    type: { default: "button" }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      if (__props.to) {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          to: __props.to,
          class: ["base-button", __props.variant]
        }, _ctx.$attrs, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<button${ssrRenderAttrs(mergeProps({
          type: __props.type,
          class: ["base-button", __props.variant]
        }, _ctx.$attrs, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</button>`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/BaseButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BrochureButton",
  __ssrInlineRender: true,
  props: {
    slug: { default: void 0 },
    variant: { default: "secondary" },
    label: { default: void 0 }
  },
  setup(__props) {
    var _a;
    const props = __props;
    const { textFor } = useSiteContent();
    const label = (_a = props.label) != null ? _a : t$1("Download the brochure", "T\xE9l\xE9charger la brochure", "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u062F\u0644\u064A\u0644");
    const href = computed(() => {
      const file = brochureOf(props.slug);
      return file && file.trim() !== "" ? file : void 0;
    });
    const downloadName = computed(() => href.value ? href.value.split("/").pop() : void 0);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(href)) {
        _push(`<a${ssrRenderAttrs(mergeProps({
          href: unref(href),
          download: unref(downloadName),
          class: ["base-button brochure-button", __props.variant]
        }, _attrs))} data-v-b6274942><svg class="brochure-button__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-b6274942><path d="M12 4v10m0 0l-3.6-3.6M12 14l3.6-3.6M4.5 17.5v1.2A1.3 1.3 0 005.8 20h12.4a1.3 1.3 0 001.3-1.3v-1.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" data-v-b6274942></path></svg>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`${ssrInterpolate(unref(textFor)(unref(label)))}`);
        }, _push, _parent);
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/BrochureButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BrochureButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b6274942"]]);
const useSectionReveal = (options = {}) => {
  const target = ref(null);
  return target;
};
const newsCategoryLabels = {
  corporate: t$1("Corporate", "Corporate", "\u0634\u0631\u0643\u064A"),
  product: t$1("Product", "Produit", "\u0627\u0644\u0645\u0646\u062A\u062C"),
  technology: t$1("Technology", "Technologie", "\u0627\u0644\u062A\u0642\u0646\u064A\u0629")
};
const MHERO_DIR = "/assets/news/voyah-mhero-tunisie";
const COURAGE_DIR = "/assets/news/voyah-courage-livraisons";
const newsItems = [
  {
    id: "voyah-courage-livraisons",
    date: "2026-11-10",
    category: "product",
    image: `${COURAGE_DIR}/hero.jpg`,
    title: t$1(
      "VOYAH Courage: first deliveries begin in Tunisia",
      "Voyah Courage : les premi\xE8res livraisons ont commenc\xE9 en Tunisie",
      "\u0641\u0648\u064A\u0627\u0647 \u0643\u0648\u0631\u064A\u062C: \u0628\u062F\u0623\u062A \u0623\u0648\u0644 \u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0641\u064A \u062A\u0648\u0646\u0633"
    ),
    excerpt: t$1(
      "Auto Hall has handed over the keys of the VOYAH Courage to its first customers. The 100% electric SUV is available immediately, backed by a 10-year warranty with unlimited mileage.",
      "Auto Hall a remis les cl\xE9s du VOYAH Courage \xE0 ses premiers clients. Le SUV 100 % \xE9lectrique est disponible imm\xE9diatement, avec une garantie de 10 ans et kilom\xE9trage illimit\xE9.",
      "\u0633\u0644\u0651\u0645\u062A \u0623\u0648\u062A\u0648 \u0647\u0648\u0644 \u0645\u0641\u0627\u062A\u064A\u062D \u0641\u0648\u064A\u0627\u0647 \u0643\u0648\u0631\u064A\u062C \u0644\u0623\u0648\u0644 \u0639\u0645\u0644\u0627\u0626\u0647\u0627. \u062A\u062A\u0648\u0641\u0631 \u0633\u064A\u0627\u0631\u0629 \u0627\u0644\u062F\u0641\u0639 \u0627\u0644\u0631\u0628\u0627\u0639\u064A \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 100% \u0641\u0648\u0631\u0627\u064B \u0645\u0639 \u0636\u0645\u0627\u0646 \u0644\u0645\u062F\u0629 10 \u0633\u0646\u0648\u0627\u062A \u0648\u0628\u062F\u0648\u0646 \u062D\u062F \u0644\u0644\u0645\u0633\u0627\u0641\u0629 \u0627\u0644\u0645\u0642\u0637\u0648\u0639\u0629."
    ),
    url: "https://www.automobile.tn/fr/magazine/actu/2026-11-10-voyah-courage-les-premieres-livraisons-ont-commence-en-tunisie.html",
    page: "actualite-voyah-courage.html",
    gallery: [
      `${COURAGE_DIR}/gallery-1.jpg`,
      `${COURAGE_DIR}/gallery-2.jpg`,
      `${COURAGE_DIR}/gallery-3.jpg`,
      `${COURAGE_DIR}/gallery-4.jpg`,
      `${COURAGE_DIR}/gallery-5.jpg`,
      `${COURAGE_DIR}/gallery-6.jpg`
    ],
    galleryCaptions: [
      t$1(
        "Signature LED front and star grille of the VOYAH in front of the showroom",
        "Signature lumineuse avant et calandre \xE9toil\xE9e VOYAH devant le showroom",
        "\u0627\u0644\u062A\u0648\u0642\u064A\u0639 \u0627\u0644\u0636\u0648\u0626\u064A \u0627\u0644\u0623\u0645\u0627\u0645\u064A \u0648\u0634\u0628\u0643 \u0627\u0644\u0633\u0642\u0641 \u0627\u0644\u0646\u062C\u0645\u064A \u0644\u0639\u0644\u0627\u0645\u0629 \u0641\u0648\u064A\u0627\u0647 \u0623\u0645\u0627\u0645 \u0627\u0644\u0645\u0639\u0631\u0636"
      ),
      t$1(
        "Official presentation of the VOYAH Courage on the red carpet at Auto Hall",
        "Pr\xE9sentation officielle du VOYAH Courage sur tapis rouge chez Auto Hall",
        "\u0627\u0644\u062A\u0642\u062F\u064A\u0645 \u0627\u0644\u0631\u0633\u0645\u064A \u0644\u0633\u064A\u0627\u0631\u0629 \u0641\u0648\u064A\u0627\u0647 \u0643\u0648\u0631\u064A\u062C \u0639\u0644\u0649 \u0627\u0644\u0633\u062C\u0627\u062F\u0629 \u0627\u0644\u062D\u0645\u0631\u0627\u0621 \u0644\u062F\u0649 \u0623\u0648\u062A\u0648 \u0647\u0648\u0644"
      ),
      t$1(
        "Rear view and full-width LED light bar of the 100% electric SUV",
        "Vue arri\xE8re et bandeau LED pleine largeur du SUV 100 % \xE9lectrique",
        "\u0627\u0644\u0645\u0638\u0647\u0631 \u0627\u0644\u062E\u0644\u0641\u064A \u0648\u0627\u0644\u0634\u0631\u064A\u0637 \u0627\u0644\u0636\u0648\u0626\u064A LEDs \u0627\u0644\u0645\u0645\u062A\u062F \u0639\u0644\u0649 \u0643\u0627\u0645\u0644 \u0627\u0644\u0639\u0631\u0636 \u0644\u0633\u064A\u0627\u0631\u0629 \u0627\u0644\u062F\u0641\u0639 \u0627\u0644\u0631\u0628\u0627\u0639\u064A \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 100%"
      ),
      t$1(
        "Models available immediately at the VOYAH Tunisia dealership",
        "Exemplaires disponibles imm\xE9diatement \xE0 la concession VOYAH Tunisie",
        "\u0637\u0631\u0627\u0632\u0627\u062A \u0645\u062A\u0648\u0641\u0631\u0629 \u0641\u0648\u0631\u0627\u064B \u0644\u062F\u0649 \u0648\u0643\u0627\u0644\u0629 \u0641\u0648\u064A\u0627\u0647 \u0641\u064A \u062A\u0648\u0646\u0633"
      ),
      t$1(
        "Preparation and fitting of the licence plates",
        "Pr\xE9paration et pose des plaques",
        "\u062A\u062D\u0636\u064A\u0631 \u0648\u062A\u0631\u0643\u064A\u0628 \u0627\u0644\u0644\u0648\u062D\u0627\u062A"
      ),
      t$1(
        "A dynamic profile",
        "Un profil dynamique",
        "\u0645\u0638\u0647\u0631 \u062F\u064A\u0646\u0627\u0645\u064A\u0643\u064A"
      )
    ],
    body: [
      {
        text: t$1(
          "Auto Hall, official representative of VOYAH in Tunisia, has just delivered the first Courage units to their owners. With these deliveries, the electric SUV moves from novelty status to a car you can buy and drive right now. Interested customers can discover it, test it and drive it away immediately, with no waiting time.",
          "Auto Hall, repr\xE9sentant officiel de Voyah en Tunisie, vient de livrer les premiers exemplaires du Courage \xE0 leurs propri\xE9taires. Avec ces livraisons, le SUV \xE9lectrique passe du statut de nouveaut\xE9 \xE0 celui de voiture qu\u2019on peut acheter et conduire d\xE8s maintenant. Les clients int\xE9ress\xE9s peuvent le d\xE9couvrir, l\u2019essayer et repartir avec, sans d\xE9lai d\u2019attente.",
          "\u0623\u0648 \u062A\u0648 \u0647\u0648\u0644\u060C \u0627\u0644\u0645\u0645\u062B\u0644 \u0627\u0644\u0631\u0633\u0645\u064A \u0644\u0639\u0644\u0627\u0645\u0629 \u0641\u0648\u064A\u0627\u0647 \u0641\u064A \u062A\u0648\u0646\u0633\u060C \u0633\u0644\u0651\u0645\u062A \u0644\u0644\u062A\u0648 \u0623\u0648\u0644\u0649 \u0648\u062D\u062F\u0627\u062A \u0643\u0648\u0631\u064A\u062C \u0625\u0644\u0649 \u0623\u0635\u062D\u0627\u0628\u0647\u0627. \u0648\u0628\u0647\u0630\u0647 \u0627\u0644\u062A\u0633\u0644\u064A\u0645\u0627\u062A\u060C \u0644\u0645 \u062A\u0639\u062F \u0633\u064A\u0627\u0631\u0629 \u0627\u0644\u062F\u0641\u0639 \u0627\u0644\u0631\u0628\u0627\u0639\u064A \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0645\u062C\u0631\u062F \u043D\u043E\u0432\u0438\u043D\u043A\u0430 \u0628\u0644 \u0633\u064A\u0627\u0631\u0629 \u064A\u0645\u0643\u0646 \u0634\u0631\u0627\u0624\u0647\u0627 \u0648\u0642\u064A\u0627\u062F\u062A\u0647\u0627 \u0641\u0648\u0631\u0627\u064B. \u064A\u0645\u0643\u0646 \u0644\u0644\u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u0645\u0647\u062A\u0645\u064A\u0646 \u0627\u0643\u062A\u0634\u0627\u0641\u0647\u0627 \u0648\u062A\u062C\u0631\u0628\u062A\u0647\u0627 \u0648\u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0628\u0647\u0627 \u0645\u0628\u0627\u0634\u0631\u0629 \u062F\u0648\u0646 \u0623\u064A \u0627\u0646\u062A\u0638\u0627\u0631."
        )
      },
      {
        heading: t$1(
          "Available immediately, with a 10-year warranty",
          "Disponible de suite, avec une garantie de 10 ans",
          "\u0645\u062A\u0648\u0641\u0631\u0629 \u0641\u0648\u0631\u0627\u064B \u0645\u0639 \u0636\u0645\u0627\u0646 \u0644\u0645\u062F\u0629 10 \u0633\u0646\u0648\u0627\u062A"
        ),
        text: t$1(
          "The VOYAH Courage is available immediately at the Auto Hall showroom. It is covered by a 10-year warranty with unlimited mileage. On an electric vehicle, this is a real selling point: the buyer is reassured about the car\u2019s lifespan.",
          "Le Voyah Courage est disponible imm\xE9diatement dans le showroom Auto Hall. Il est couvert par une garantie de 10 ans avec kilom\xE9trage illimit\xE9. Sur un v\xE9hicule \xE9lectrique, c\u2019est un vrai argument : l\u2019acheteur est rassur\xE9 sur la dur\xE9e de vie de la voiture.",
          "\u062A\u062A\u0648\u0641\u0631 \u0641\u0648\u064A\u0627\u0647 \u0643\u0648\u0631\u064A\u062C \u0641\u0648\u0631\u0627\u064B \u0641\u064A \u0645\u0639\u0631\u0636 \u0623\u0648\u062A\u0648 \u0647\u0648\u0644\u060C \u0648\u0647\u064A \u0645\u063A\u0637\u0627\u0629 \u0628\u0636\u0645\u0627\u0646 \u0644\u0645\u062F\u0629 10 \u0633\u0646\u0648\u0627\u062A \u0628\u062F\u0648\u0646 \u062D\u062F \u0644\u0644\u0645\u0633\u0627\u0641\u0629 \u0627\u0644\u0645\u0642\u0637\u0648\u0639\u0629. \u0648\u0641\u064A \u0633\u064A\u0627\u0631\u0629 \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629\u060C \u064A\u064F\u0639\u062F\u0651 \u0647\u0630\u0627 \u062D\u062C\u0629 \u0642\u0648\u064A\u0629: \u064A\u0634\u0639\u0631 \u0627\u0644\u0645\u0634\u062A\u0631\u064A \u0628\u0627\u0644\u0627\u0637\u0645\u0626\u0646\u0627\u0646 \u0639\u0644\u0649 \u0627\u0644\u0639\u0645\u0631 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A \u0644\u0644\u0633\u064A\u0627\u0631\u0629."
        )
      },
      {
        heading: t$1("An electric SUV measuring 4.73 metres", "Un SUV \xE9lectrique de 4,73 m\xE8tres", "\u0633\u064A\u0627\u0631\u0629 \u062F\u0641\u0639 \u0631\u0628\u0627\u0639\u064A \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0628\u0637\u0648\u0644 4.73 \u0623\u0645\u062A\u0627\u0631"),
        text: t$1(
          "The Courage measures 4,725 mm long, 1,900 mm wide and 1,650 mm high. It seats five passengers and offers a 527-litre boot. It is equipped with an 80 kWh LFP battery. Depending on the version, you can choose between: Premium (single motor): a 292 hp and 420 Nm engine, 0 to 100 km/h in 6.8 s, up to 476 km WLTP range. DC fast charging takes 32 minutes. A full charge on a home socket (AC) takes about 9 hours.",
          "Le Courage mesure 4 725 mm de long, 1 900 mm de large et 1 650 mm de haut. Il accueille cinq passagers et offre un coffre de 527 litres. Il embarque une batterie LFP de 80 kWh. Selon la version, on a le choix entre : Premium (propulsion) : un moteur de 292 ch et 420 Nm, 0 \xE0 100 km/h en 6,8 s, jusqu\u2019\xE0 476 km d\u2019autonomie WLTP. La recharge rapide en courant continu prend 32 minutes. Une recharge compl\xE8te sur une prise domestique (courant alternatif) prend environ 9 heures.",
          "\u064A\u0628\u0644\u063A \u0637\u0648\u0644 \u0643\u0648\u0631\u064A\u062C 4,725 \u0645\u0645 \u0648\u0639\u0631\u0636\u0647\u0627 1,900 \u0645\u0645 \u0648\u0627\u0631\u062A\u0641\u0627\u0639\u0647\u0627 1,650 \u0645\u0645. \u062A\u062A\u0633\u0639 \u0644\u062E\u0645\u0633\u0629 \u0631\u0643\u0627\u0628 \u0648\u062A\u0648\u0641\u0631 \u0635\u0646\u062F\u0648\u0642 \u0623\u0645\u062A\u0639\u0629 \u0633\u0639\u0629 527 \u0644\u062A\u0631\u0627\u064B\u060C \u0645\u0639 \u0628\u0637\u0627\u0631\u064A\u0629 LFP \u0628\u0633\u0639\u0629 80 \u0643\u064A\u0644owatt \u0633\u0627\u0639\u0629. \u062D\u0633\u0628 \u0627\u0644\u0646\u0633\u062E\u0629\u060C \u064A\u062A\u0648\u0641\u0631 \u062E\u064A\u0627\u0631\u0627\u0646: \u0628\u0631\u064A\u0645\u064A\u0648\u0645 (\u062F\u0641\u0639 \u062E\u0644\u0641\u064A): \u0645\u062D\u0631\u0643 \u0628\u0642\u0648\u0629 292 \u062D\u0635\u0627\u0646\u0627\u064B \u0648\u0639\u0632\u0645 420 \u0646\u064A\u0648\u062A\u0646\xB7\u0645\u062A\u0631\u060C \u0627\u0644\u062A\u0633\u0627\u0631\u0639 \u0645\u0646 0 \u0625\u0644\u0649 100 \u0643\u0645/\u0633 \u0641\u064A 6.8 \u062B\u0648\u0627\u0646\u064D\u060C \u0648\u0645\u062F\u0649 \u064A\u0635\u0644 \u0625\u0644\u0649 476 \u0643\u0645 (WLTP). \u0627\u0644\u0634\u062D\u0646 \u0627\u0644\u0633\u0631\u064A\u0639 \u0628\u0627\u0644\u062A\u064A\u0627\u0631 \u0627\u0644\u0645\u0633\u062A\u0645\u0631 \u064A\u0633\u062A\u063A\u0631\u0642 32 \u062F\u0642\u064A\u0642\u0629\u060C \u0628\u064A\u0646\u0645\u0627 \u062A\u0633\u062A\u063A\u0631\u0642 \u0627\u0644\u0634\u062D\u0646\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629 \u0639\u0628\u0631 \u0645\u0642\u0628\u0633 \u0645\u0646\u0632\u0644\u064A (\u062A\u064A\u0627\u0631 \u0645\u062A\u0631\u062F\u062F) \u0646\u062D\u0648 9 \u0633\u0627\u0639\u0627\u062A."
        )
      },
      {
        heading: t$1(
          "A very complete equipment level from the first version",
          "Un \xE9quipement tr\xE8s complet d\xE8s la premi\xE8re version",
          "\u062A\u062C\u0647\u064A\u0632\u0627\u062A \u0643\u0627\u0645\u0644\u0629 \u062C\u062F\u0627\u064B \u0645\u0646\u0630 \u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u0623\u0648\u0644\u0649"
        ),
        text: t$1(
          "The cabin is built around a curved 15-inch OLED screen, complemented by a head-up display. There is also a panoramic roof and 128-colour ambient lighting. The front seats are electric, heated, ventilated and massaging, with memory. The front armrest is cooled. On the safety and driving-assist side, the Courage is equipped with adaptive cruise control, automatic emergency braking, lane-keeping assist, blind-spot monitoring and a 360\xB0 camera.",
          "L\u2019habitacle est organis\xE9 autour d\u2019un \xE9cran OLED incurv\xE9 de 15 pouces, compl\xE9t\xE9 par un affichage t\xEAte haute. On trouve aussi un toit panoramique et un \xE9clairage d\u2019ambiance de 128 couleurs. Les si\xE8ges avant sont \xE9lectriques, chauffants, ventil\xE9s et massants, avec m\xE9moire. L\u2019accoudoir avant est r\xE9frig\xE9r\xE9. C\xF4t\xE9 s\xE9curit\xE9 et aides \xE0 la conduite, le Courage est \xE9quip\xE9 du r\xE9gulateur adaptatif, du freinage automatique d\u2019urgence, de l\u2019aide au maintien dans la voie, de la surveillance des angles morts et d\u2019une cam\xE9ra 360\xB0.",
          "\u062A\u062A\u0645\u062D\u0648\u0631 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u062D\u0648\u0644 \u0634\u0627\u0634\u0629 OLED \u0645\u0646\u062D\u0646\u064A\u0629 \u0642\u064A\u0627\u0633 15 \u0628\u0648\u0635\u0629 \u0645\u062F\u0639\u0648\u0645\u0629 \u0628\u0639\u0631\u0636 \u0631\u0623\u0633\u064A\u0629 (HUD)\u060C \u0645\u0639 \u0633\u0642\u0641 \u0628\u0627\u0646\u0648\u0631\u0627\u0645\u064A \u0648\u0625\u0636\u0627\u0621\u0629 \u0645\u062D\u064A\u0637\u064A\u0629 \u0628\u0640128 \u0644\u0648\u0646\u0627\u064B. \u0627\u0644\u0645\u0642\u0627\u0639\u062F \u0627\u0644\u0623\u0645\u0627\u0645\u064A\u0629 \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0648\u0645\u062F\u0641\u0623\u0629 \u0648\u0645\u0647\u0648\u0627\u0629 \u0648\u0645\u062C\u0647\u0632\u0629 \u0628\u0627\u0644\u062A\u062F\u0644\u064A\u0643 \u0648\u0627\u0644\u0630\u0627\u0643\u0631\u0629\u060C \u0628\u064A\u0646\u0645\u0627 \u064A\u062D\u0645\u0644 \u0645\u0633\u0646\u062F \u0627\u0644\u0630\u0631\u0627\u0639 \u0627\u0644\u0623\u0645\u0627\u0645\u064A \u0648\u0638\u064A\u0641\u0629 \u0627\u0644\u062A\u0628\u0631\u064A\u062F. \u0648\u0641\u064A\u0645\u0627 \u064A\u062E\u0635 \u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0648\u0645\u0633\u0627\u0639\u062F\u0627\u062A \u0627\u0644\u0642\u064A\u0627\u062F\u0629\u060C \u064A\u062A\u0648\u0641\u0631 \u0643\u0648\u0631\u064A\u062C \u0639\u0644\u0649 \u0645\u062B\u0628\u062A \u0627\u0644\u0633\u0631\u0639\u0629 \u0627\u0644\u062A\u0643\u064A\u0641\u064A \u0648\u0627\u0644\u0641\u0631\u0645\u0644\u0629 \u0627\u0644\u062A\u0644\u0642\u0627\u0626\u064A\u0629 \u0627\u0644\u0637\u0627\u0631\u0626\u0629 \u0648\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u062D\u0641\u0627\u0638 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0631 \u0648\u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0646\u0642\u0627\u0637 \u0627\u0644\u0639\u0645\u064A\u0627\u0621 \u0648\u0643\u0627\u0645\u064A\u0631\u0627 360\xB0."
        )
      },
      {
        heading: t$1("VOYAH Courage price in Tunisia", "Prix du Voyah Courage en Tunisie", "\u0633\u0639\u0631 \u0641\u0648\u064A\u0627\u0647 \u0643\u0648\u0631\u064A\u062C \u0641\u064A \u062A\u0648\u0646\u0633"),
        text: t$1(
          "The VOYAH Courage is offered in two versions: VOYAH Courage 80 kWh Premium: 121,000 DT.",
          "Le Voyah Courage est propos\xE9 en deux versions : Voyah Courage 80 kWh Premium : 121 000 DT.",
          "\u062A\u062A\u0648\u0641\u0631 \u0641\u0648\u064A\u0627\u0647 \u0643\u0648\u0631\u064A\u062C \u0641\u064A \u0646\u0633\u062E\u062A\u064A\u0646: \u0641\u0648\u064A\u0627\u0647 \u0643\u0648\u0631\u064A\u062C 80 \u0643\u064A\u0644owatt \u0633\u0627\u0639\u0629 \u0628\u0631\u064A\u0645\u064A\u0648\u0645: 121,000 \u062F\u064A\u0646\u0627\u0631\u0627\u064B."
        )
      }
    ]
  },
  {
    id: "voyah-mhero-tunisie",
    date: "2026-06-24",
    category: "corporate",
    image: `${MHERO_DIR}/hero.jpg`,
    title: t$1(
      "VOYAH and MHERO arrive in Tunisia",
      "VOYAH et MHERO d\xE9barquent en Tunisie",
      "\u0641\u0648\u064A\u0627\u0647 \u0648\u0645\u064A\u0631\u0648 \u062A\u0635\u0644\u0627\u0646 \u0625\u0644\u0649 \u062A\u0648\u0646\u0633"
    ),
    excerpt: t$1(
      "Auto Hall officially launches VOYAH and MHERO in Tunisia, opening a new era of electrified premium mobility.",
      "Auto Hall lance officiellement VOYAH et MHERO en Tunisie et ouvre une nouvelle \xE8re de mobilit\xE9 premium \xE9lectrifi\xE9e.",
      "\u0623\u0648\u062A\u0648 \u0647\u0648\u0644 \u062A\u0637\u0644\u0642 \u0631\u0633\u0645\u064A\u0627\u064B \u0641\u0648\u064A\u0627\u0647 \u0648\u0645\u064A\u0631\u0648 \u0641\u064A \u062A\u0648\u0646\u0633\u060C \u0644\u0627\u0641\u062A\u062A\u0627\u062D \u062D\u0642\u0628\u0629 \u062C\u062F\u064A\u062F\u0629 \u0645\u0646 \u0627\u0644\u062A\u0646\u0642\u0644 \u0627\u0644\u0641\u0627\u062E\u0631 \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A."
    ),
    url: "https://www.automobile.tn/fr/magazine/actu/2026-06-24-voyah-et-mhero-debarquent-en-tunisie.html",
    page: "actualite-voyah-mhero.html",
    video: "https://www.youtube.com/embed/xvQ3c3oH0kA?autoplay=1&mute=1&controls=0&loop=1&playlist=xvQ3c3oH0kA&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3",
    gallery: [
      `${MHERO_DIR}/gallery-109305.jpg`,
      `${MHERO_DIR}/gallery-109306.jpg`,
      `${MHERO_DIR}/gallery-109307.jpg`,
      `${MHERO_DIR}/gallery-109308.jpg`,
      `${MHERO_DIR}/gallery-109309.jpg`,
      `${MHERO_DIR}/gallery-109310.jpg`,
      `${MHERO_DIR}/gallery-109311.jpg`,
      `${MHERO_DIR}/gallery-109312.jpg`,
      `${MHERO_DIR}/gallery-109313.jpg`,
      `${MHERO_DIR}/gallery-109314.jpg`,
      `${MHERO_DIR}/gallery-109315.jpg`,
      `${MHERO_DIR}/gallery-109316.jpg`
    ],
    body: [
      {
        text: t$1(
          "The Tunisian automotive market is entering a new dimension. Auto Hall, dealer for the Moulin Holding (Triki Group), officially launched two outstanding Chinese brands on Tuesday 23 June: VOYAH and MHERO. A launch evening held at the Pavillon Gammarth, in front of more than 300 guests, partners, industry professionals and media, marked the arrival of these two players, determined to redefine premium mobility in Tunisia. The event took place in the presence of Ms Wei Xiaotong, representative of Dongfeng Motor Corporation (DFM), the global manufacturer behind the two brands.",
          "Le march\xE9 automobile tunisien change de dimension. Auto Hall, concessionnaire du Moulin Holding (Groupe Triki), a officiellement lanc\xE9 mardi 23 juin deux marques chinoises d\u2019exception : VOYAH et MHERO. Une soir\xE9e de d\xE9voilement organis\xE9e au Pavillon Gammarth, devant plus de 300 invit\xE9s, partenaires, professionnels du secteur et m\xE9dias, a marqu\xE9 l\u2019entr\xE9e de ces deux acteurs qui entendent red\xE9finir le luxe automobile en Tunisie. L\u2019\xE9v\xE9nement s\u2019est tenu en pr\xE9sence de Mme Wei Xiaotong, repr\xE9sentante de Dongfeng Motor Corporation (DFM), constructeur mondial derri\xE8re les deux marques.",
          "\u064A\u0634\u0647\u062F \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u062A\u0648\u0646\u0633\u064A \u0644\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0628\u0639\u062F\u0627\u064B \u062C\u062F\u064A\u062F\u0627\u064B. \u0623\u0637\u0644\u0642\u062A \u0623\u0648\u062A\u0648 \u0647\u0648\u0644\u060C \u0627\u0644\u0648\u0643\u064A\u0644 \u0627\u0644\u0645\u0639\u062A\u0645\u062F \u0644\u0645\u0648\u0644\u0627\u0646 \u0627\u0644\u0642\u0627\u0628\u0636\u0629 (\u0645\u062C\u0645\u0648\u0639\u0629 \u0637\u0631\u064A\u0642\u064A)\u060C \u0631\u0633\u0645\u064A\u064B\u0627 \u064A\u0648\u0645 \u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621 23 \u062C\u0648\u0627\u0646 \u0639\u0644\u0627\u0645\u062A\u064A\u0646 \u0635\u064A\u0646\u064A\u062A\u064A\u0646 \u0627\u0633\u062A\u062B\u0646\u0627\u0626\u064A\u062A\u064A\u0646: \u0641\u0648\u064A\u0627\u0647 \u0648\u0645\u064A\u0631\u0648. \u0623\u0642\u064A\u0645 \u062D\u0641\u0644 \u0627\u0644\u0643\u0634\u0641 \u0641\u064A \u0642\u0627\u0639\u0629 \u062C\u0627\u0645\u0627\u0631\u062B \u0628\u062D\u0636\u0648\u0631 \u0623\u0643\u062B\u0631 \u0645\u0646 300 \u0636\u064A\u0641 \u0645\u0646 \u0627\u0644\u0634\u0631\u0643\u0627\u0621 \u0648\u0645\u0647\u0646\u064A\u064A \u0627\u0644\u0642\u0637\u0627\u0639 \u0648\u0627\u0644\u0625\u0639\u0644\u0627\u0645\u064A\u064A\u0646\u060C \u0628\u0645\u0646\u0627\u0633\u0628\u0629 \u062F\u062E\u0648\u0644 \u0647\u0627\u062A\u064A\u0646 \u0627\u0644\u0639\u0644\u0627\u0645\u062A\u064A\u0646 \u0627\u0644\u0644\u062A\u064A\u0646 \u062A\u0637\u0645\u062D\u0627\u0646 \u0625\u0644\u0649 \u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0641\u062E\u0627\u0645\u0629 \u0641\u064A \u0642\u0637\u0627\u0639 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u0648\u0646\u0633\u064A. \u062C\u0631\u0649 \u0627\u0644\u062D\u0641\u0644 \u0628\u062D\u0636\u0648\u0631 \u0627\u0644\u0633\u064A\u062F\u0629 \u0648\u064A \u0634\u064A\u0627\u0648\u062A\u0648\u0646\u063A\u060C \u0645\u0645\u062B\u0644\u0629 \u062F\u0648\u0646\u063A\u0641\u0646\u063A \u0645\u0648\u062A\u0648\u0631 \u0643\u0648\u0631\u0628\u0648\u0631\u064A\u0634\u0646 (DFM)\u060C \u0627\u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u0645\u0635\u0646\u0639\u0629 \u0627\u0644\u0639\u0627\u0644\u0645\u064A\u0629 \u0644\u0644\u0639\u0644\u0627\u0645\u062A\u064A\u0646."
        )
      },
      {
        heading: t$1(
          "A clear ambition: anticipate and transform",
          "Une ambition claire : anticiper et transformer",
          "\u0637\u0645\u0648\u062D \u0648\u0627\u0636\u062D: \u0627\u0644\u0627\u0633\u062A\u0628\u0627\u0642 \u0648\u0627\u0644\u062A\u062D\u0648\u0651\u0644"
        ),
        text: t$1(
          "For Mr Anis Oueslati, Manager of Auto Hall, this launch reflects a long-term vision: \u201CWith VOYAH and MHERO, we are not simply introducing cars \u2014 we are opening a new chapter for Tunisian mobility. VOYAH redefines intelligent luxury and premium electrification. MHERO pushes the boundaries of prestige off-roading. Together, they draw the mobility of tomorrow.\u201D",
          "Pour M. Anis Oueslati, G\xE9rant d\u2019Auto Hall, ce lancement traduit une vision \xE0 long terme : \xAB Avec VOYAH et MHERO, nous n\u2019introduisons pas simplement des voitures \u2014 nous ouvrons un nouveau chapitre pour la mobilit\xE9 tunisienne. VOYAH r\xE9invente le luxe intelligent et l\u2019\xE9lectrification premium. MHERO repousse les limites du tout-terrain de prestige. Ensemble, ils dessinent la mobilit\xE9 de demain. \xBB",
          "\u0628\u0627\u0644\u0646\u0633\u0628\u0629 \u0644\u0644\u0633\u064A\u062F \u0623\u0646\u064A\u0633 \u0648\u0633\u0644\u0627\u062A\u064A\u060C \u0645\u062F\u064A\u0631 \u0623\u0648\u062A\u0648 \u0647\u0648\u0644\u060C \u064A\u064F\u062C\u0633\u0651\u062F \u0647\u0630\u0627 \u0627\u0644\u0625\u0637\u0644\u0627\u0642 \u0631\u0624\u064A\u0629 \u0628\u0639\u064A\u062F\u0629 \u0627\u0644\u0645\u062F\u0649: \xAB\u0645\u0639 \u0641\u0648\u064A\u0627\u0647 \u0648\u0645\u064A\u0631\u0648\u060C \u0644\u0627 \u0646\u0642\u062F\u0651\u0645 \u0645\u062C\u0631\u062F \u0633\u064A\u0627\u0631\u0627\u062A \u2014 \u0628\u0644 \u0646\u0641\u062A\u062D \u0641\u0635\u0644\u0627\u064B \u062C\u062F\u064A\u062F\u0627\u064B \u0641\u064A \u0627\u0644\u062A\u0646\u0642\u0644 \u0627\u0644\u062A\u0648\u0646\u0633\u064A. \u0641\u0648\u064A\u0627\u0647 \u062A\u0639\u064A\u062F \u0627\u0628\u062A\u0643\u0627\u0631 \u0627\u0644\u0641\u062E\u0627\u0645\u0629 \u0627\u0644\u0630\u0643\u064A\u0629 \u0648\u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0627\u0644\u0645\u0645\u064A\u0632\u0629. \u0648\u0645\u064A\u0631\u0648 \u062A\u062F\u0641\u0639 \u062D\u062F\u0648\u062F \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u062F\u0641\u0639 \u0627\u0644\u0631\u0628\u0627\u0639\u064A \u0627\u0644\u0641\u0627\u062E\u0631\u0629. \u0648\u0645\u0639\u0627\u064B\u060C \u062A\u0631\u0633\u0645\u0627\u0646 \u062A\u0646\u0642\u0644 \u0627\u0644\u063A\u062F.\xBB"
        ),
        variant: "quote"
      },
      {
        heading: t$1(
          "VOYAH: electric luxury, rethought",
          "VOYAH : Le luxe \xE9lectrique, repens\xE9",
          "\u0641\u0648\u064A\u0627\u0647: \u0627\u0644\u0641\u062E\u0627\u0645\u0629 \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0628\u0645\u0639\u0646\u0649 \u062C\u062F\u064A\u062F"
        ),
        text: t$1(
          "Born from a spirit of travel and exploration, VOYAH offers three models combining cutting-edge technology, high-end comfort and energy efficiency.",
          "N\xE9e de l\u2019esprit du voyage et de l\u2019exploration, VOYAH propose trois mod\xE8les alliant technologie de pointe, confort haut de gamme et efficacit\xE9 \xE9nerg\xE9tique.",
          "\u0648\u064F\u0644\u062F\u062A \u0645\u0646 \u0631\u0648\u062D \u0627\u0644\u0633\u0641\u0631 \u0648\u0627\u0644\u0627\u0633\u062A\u0643\u0634\u0627\u0641\u060C \u0648\u062A\u0642\u062F\u0651\u0645 \u0641\u0648\u064A\u0627\u0647 \u062B\u0644\u0627\u062B\u0629 \u0637\u0631\u0627\u0632\u0627\u062A \u062A\u062C\u0645\u0639 \u0628\u064A\u0646 \u0627\u0644\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627 \u0627\u0644\u0645\u062A\u0637\u0648\u0631\u0629 \u0648\u0627\u0644\u0631\u0627\u062D\u0629 \u0627\u0644\u0631\u0627\u0642\u064A\u0629 \u0648\u0627\u0644\u0643\u0641\u0627\u0621\u0629 \u0627\u0644\u0637\u0627\u0642\u064A\u0629."
        )
      },
      {
        text: t$1(
          "\u2022 VOYAH Courage (100% electric): 80 kWh, up to 476 km range (WLTP), 215 kW in RWD or 320 kW in AWD. Launch price from 115,000 DT.\n\u2022 VOYAH Free (electric + range extender): up to 1,327 km total range, 720 Nm of torque in AWD. Launch price from 149,000 DT.\n\u2022 VOYAH Dream (plug-in hybrid): 420 hp, 160 km electric range, 801 km combined (WLTP). Launch price from 255,000 DT.",
          "\u2022 VOYAH Courage (100 % \xE9lectrique) : 80 kWh, jusqu\u2019\xE0 476 km d\u2019autonomie (WLTP), 215 kW en RWD ou 320 kW en AWD. Prix de lancement \xE0 partir de 115.000 DT.\n\u2022 VOYAH Free (\xE9lectrique + prolongateur d\u2019autonomie) : jusqu\u2019\xE0 1 327 km d\u2019autonomie totale, couple de 720 Nm en AWD. Prix de lancement \xE0 partir de 149.000 DT.\n\u2022 VOYAH Dream (hybride rechargeable) : 420 Ch, 160 km d\u2019autonomie \xE9lectrique, 801 km en combin\xE9 (WLTP). Prix de lancement \xE0 partir de 255.000 DT.",
          "\u2022 VOYAH Courage (\u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 100%): \u0628\u0637\u0627\u0631\u064A\u0629 80 \u0643\u064A\u0644owatt \u0633\u0627\u0639\u0629\u060C \u0645\u062F\u0649 \u064A\u0635\u0644 \u0625\u0644\u0649 476 \u0643\u0645 (WLTP)\u060C \u0628\u0642\u0648\u0629 215 \u0643\u064A\u0644\u0648\u0648\u0627\u0637 \u0628\u0627\u0644\u062F\u0641\u0639 \u0627\u0644\u062E\u0644\u0641\u064A \u0623\u0648 320 \u0643\u064A\u0644\u0648\u0648\u0627\u0637 \u0628\u0627\u0644\u062F\u0641\u0639 \u0627\u0644\u0643\u0644\u064A. \u0633\u0639\u0631 \u0627\u0644\u0627\u0646\u0637\u0644\u0627\u0642 \u0627\u0628\u062A\u062F\u0627\u0621\u064B \u0645\u0646 115.000 \u062F\u064A\u0646\u0627\u0631\u0627\u064B.\n\u2022 VOYAH Free (\u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 + \u0645\u0645\u062A\u062F \u0645\u062F\u0649): \u0645\u062F\u0649 \u0625\u062C\u0645\u0627\u0644\u064A \u064A\u0635\u0644 \u0625\u0644\u0649 1,327 \u0643\u0645 \u0648\u0639\u0632\u0645 720 \u0646\u064A\u0648\u062A\u0646\xB7\u0645\u062A\u0631 \u0628\u0627\u0644\u062F\u0641\u0639 \u0627\u0644\u0643\u0644\u064A. \u0633\u0639\u0631 \u0627\u0644\u0627\u0646\u0637\u0644\u0627\u0642 \u0627\u0628\u062A\u062F\u0627\u0621\u064B \u0645\u0646 149.000 \u062F\u064A\u0646\u0627\u0631\u0627\u064B.\n\u2022 VOYAH Dream (\u0647\u062C\u064A\u0646\u064A\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0634\u062D\u0646): 420 \u062D\u0635\u0627\u0646\u0627\u064B\u060C \u0645\u062F\u0649 \u0643\u0647\u0631\u0628\u0627\u0626\u064A 160 \u0643\u0645\u060C \u0648801 \u0643\u0645 \u0628\u0627\u0644\u0645\u0632\u064A\u062C (WLTP). \u0633\u0639\u0631 \u0627\u0644\u0627\u0646\u0637\u0644\u0627\u0642 \u0627\u0628\u062A\u062F\u0627\u0621\u064B \u0645\u0646 255.000 \u062F\u064A\u0646\u0627\u0631\u0627\u064B."
        )
      },
      {
        heading: t$1(
          "MHERO: electrified off-roading, no compromise",
          "MHERO : Le tout-terrain \xE9lectrifi\xE9, sans compromis",
          "MHERO: \u0633\u064A\u0627\u0631\u0627\u062A \u062F\u0641\u0639 \u0631\u0628\u0627\u0639\u064A \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0628\u0644\u0627 \u0645\u0633\u0627\u0648\u0645\u0629"
        ),
        text: t$1(
          "Under the motto \u201CNever Back Down\u201D, MHERO targets adventure and extreme performance enthusiasts.",
          "Sous la devise \xAB Never Back Down \xBB, MHERO s\u2019adresse aux passionn\xE9s d\u2019aventure et de performance extr\xEAme.",
          "\u062A\u062D\u062A \u0634\u0639\u0627\u0631 \xABNever Back Down\xBB\u060C \u062A\u062E\u0627\u0637\u0628 \u0645\u064A\u0631\u0648 \u0639\u0634\u0627\u0642 \u0627\u0644\u0645\u063A\u0627\u0645\u0631\u0629 \u0648\u0627\u0644\u0623\u062F\u0627\u0621 \u0627\u0644\u0627\u0633\u062A\u062B\u0646\u0627\u0626\u064A."
        )
      },
      {
        text: t$1(
          "\u2022 MHERO 817 (plug-in hybrid): 684 hp, 848 Nm, 110 km on pure electric, up to 1,113 km combined. Available in three trims (E0, E1, E1 Alpha). Launch price from 169,000 DT.\n\u2022 MHERO 917 (electric + range extender): 980 hp, 1,050 Nm, 65.9 kWh battery, 170 km on 100% electric, up to 1,000 km combined. Launch price from 350,000 DT.",
          "\u2022 MHERO 817 (hybride rechargeable) : 684 Ch, 848 Nm, 110 km en \xE9lectrique pur, jusqu\u2019\xE0 1 113 km en combin\xE9. Disponible en trois finitions (E0, E1, E1 Alpha). Prix de lancement \xE0 partir de 169.000 DT.\n\u2022 MHERO 917 (\xE9lectrique + prolongateur d\u2019autonomie) : 980 Ch, 1 050 Nm, batterie de 65.9 kWh, 170 km en 100 % \xE9lectrique, jusqu\u2019\xE0 1 000 km en combin\xE9. Prix de lancement \xE0 partir de 350.000 DT.",
          "\u2022 MHERO 817 (\u0647\u062C\u064A\u0646\u064A\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0634\u062D\u0646): 684 \u062D\u0635\u0627\u0646\u0627\u064B\u060C \u0639\u0632\u0645 848 \u0646\u064A\u0648\u062A\u0646\xB7\u0645\u062A\u0631\u060C \u0645\u062F\u0649 \u0643\u0647\u0631\u0628\u0627\u0626\u064A 110 \u0643\u0645\u060C \u064A\u0635\u0644 \u0625\u0644\u0649 1,113 \u0643\u0645 \u0628\u0627\u0644\u0645\u0632\u064A\u062C. \u0645\u062A\u0648\u0641\u0631\u0629 \u0628\u062B\u0644\u0627\u062B \u0641\u0626\u0627\u062A (E0 \u0648E1 \u0648E1 Alpha). \u0633\u0639\u0631 \u0627\u0644\u0627\u0646\u0637\u0644\u0627\u0642 \u0627\u0628\u062A\u062F\u0627\u0621\u064B \u0645\u0646 169.000 \u062F\u064A\u0646\u0627\u0631\u0627\u064B.\n\u2022 MHERO 917 (\u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 + \u0645\u0645\u062A\u062F \u0645\u062F\u0649): 980 \u062D\u0635\u0627\u0646\u0627\u064B\u060C \u0639\u0632\u0645 1,050 \u0646\u064A\u0648\u062A\u0646\xB7\u0645\u062A\u0631\u060C \u0628\u0637\u0627\u0631\u064A\u0629 65.9 \u0643\u064A\u0644owatt \u0633\u0627\u0639\u0629\u060C \u0645\u062F\u0649 \u0643\u0647\u0631\u0628\u0627\u0626\u064A 170 \u0643\u0645\u060C \u064A\u0635\u0644 \u0625\u0644\u0649 1,000 \u0643\u0645 \u0628\u0627\u0644\u0645\u0632\u064A\u062C. \u0633\u0639\u0631 \u0627\u0644\u0627\u0646\u0637\u0644\u0627\u0642 \u0627\u0628\u062A\u062F\u0627\u0621\u064B \u0645\u0646 350.000 \u062F\u064A\u0646\u0627\u0631\u0627\u064B."
        )
      },
      {
        heading: t$1(
          "10-year engine and battery warranty",
          "10 ans de garantie moteur et batterie",
          "\u0636\u0645\u0627\u0646 \u0644\u0645\u062F\u0629 10 \u0633\u0646\u0648\u0627\u062A \u0639\u0644\u0649 \u0627\u0644\u0645\u062D\u0631\u0643 \u0648\u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629"
        ),
        text: t$1(
          "Across the entire VOYAH and MHERO range, Auto Hall is committed to a 10-year warranty on the engine and battery. An exceptional pledge of confidence in this segment.",
          "Sur l\u2019ensemble des mod\xE8les VOYAH et MHERO, Auto Hall s\u2019engage avec une garantie de 10 ans sur le moteur et la batterie. Un gage de confiance exceptionnel sur ce segment.",
          "\u0639\u0644\u0649 \u062C\u0645\u064A\u0639 \u0637\u0631\u0627\u0632\u0627\u062A \u0641\u0648\u064A\u0627\u0647 \u0648\u0645\u064A\u0631\u0648\u060C \u062A\u0644\u062A\u0632\u0645 \u0623\u0648\u062A\u0648 \u0647\u0648\u0644 \u0628\u0636\u0645\u0627\u0646 \u0644\u0645\u062F\u0629 10 \u0633\u0646\u0648\u0627\u062A \u0639\u0644\u0649 \u0627\u0644\u0645\u062D\u0631\u0643 \u0648\u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629\u060C \u0641\u064A \u062A\u0639\u0647\u062F \u0627\u0633\u062A\u062B\u0646\u0627\u0626\u064A \u0628\u0627\u0644\u062B\u0642\u0629 \u0641\u064A \u0647\u0630\u0647 \u0627\u0644\u0641\u0626\u0629."
        )
      },
      {
        heading: t$1("About Auto Hall", "\xC0 propos d\u2019Auto Hall", "\u0639\u0646 \u0623\u0648\u062A\u0648 \u0647\u0648\u0644"),
        text: t$1(
          "A member of the Moulin Holding (Triki Group), Auto Hall is establishing itself as a new benchmark dealer in Tunisia, committed to introducing innovative international brands and supporting the market\u2019s transition towards more technological, sustainable and premium mobility.",
          "Membre du Moulin Holding (Groupe Triki), Auto Hall s\u2019impose comme un nouveau concessionnaire de r\xE9f\xE9rence en Tunisie, engag\xE9 \xE0 introduire des marques internationales innovantes et \xE0 accompagner la transition du march\xE9 vers une mobilit\xE9 plus technologique, durable et premium.",
          "\u0648\u0628\u0635\u0641\u062A\u0647\u0627 \u0639\u0636\u0648\u064B\u0627 \u0641\u064A \u0645\u0648\u0644\u0627\u0646 \u0627\u0644\u0642\u0627\u0628\u0636\u0629 (\u0645\u062C\u0645\u0648\u0639\u0629 \u0637\u0631\u064A\u0642\u064A)\u060C \u062A\u062A\u0631\u0633\u062E \u0623\u0648\u062A\u0648 \u0647\u0648\u0644 \u0643\u0648\u0643\u064A\u0644 \u0645\u0631\u062C\u0639\u064A \u062C\u062F\u064A\u062F \u0641\u064A \u062A\u0648\u0646\u0633\u060C \u0645\u0644\u062A\u0632\u0645\u0629 \u0628\u0625\u062F\u062E\u0627\u0644 \u0639\u0644\u0627\u0645\u0627\u062A \u062F\u0648\u0644\u064A\u0629 \u0645\u0628\u062A\u0643\u0631\u0629 \u0648\u062F\u0639\u0645 \u062A\u062D\u0648\u0644 \u0627\u0644\u0633\u0648\u0642 \u0646\u062D\u0648 \u062A\u0646\u0642\u0644 \u0623\u0643\u062B\u0631 \u062A\u0642\u0646\u064A\u0629 \u0648\u0627\u0633\u062A\u062F\u0627\u0645\u0629 \u0648\u0641\u062E\u0627\u0645\u0629."
        )
      }
    ]
  }
];
const findNewsItemByPage = (slug) => {
  var _a;
  return slug ? (_a = newsItems.find((item) => item.page === slug)) != null ? _a : null : null;
};
const sortedNewsItems = () => [...newsItems].sort((a, b) => b.date.localeCompare(a.date));

export { BrochureButton as B, _sfc_main$1 as _, newsItems as a, findNewsItemByPage as f, newsCategoryLabels as n, sortedNewsItems as s, useSectionReveal as u };
//# sourceMappingURL=news-aRO4TP75.mjs.map
