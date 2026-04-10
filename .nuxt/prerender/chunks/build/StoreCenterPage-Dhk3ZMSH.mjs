import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'file://E:/voyah-nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'file://E:/voyah-nuxt/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, u as useRoute } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StoreCenterPage",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const lang = computed(() => {
      const code = Array.isArray(route.params.locale) ? route.params.locale[0] : route.params.locale;
      return code === "fr" || code === "ar" ? code : "en";
    });
    const copy = {
      en: {
        allRegions: "All regions",
        allServiceTypes: "All service types",
        networkTitle: "Voyah national service network",
        salesStores: "Sales stores",
        deliveryStores: "Delivery service stores",
        mapTitle: "Store map"
      },
      fr: {
        allRegions: "Toutes les regions",
        allServiceTypes: "Tous les services",
        networkTitle: "Reseau national de service Voyah",
        salesStores: "Points de vente",
        deliveryStores: "Points de livraison",
        mapTitle: "Carte des magasins"
      },
      ar: {
        allRegions: "\u0643\u0644 \u0627\u0644\u0645\u0646\u0627\u0637\u0642",
        allServiceTypes: "\u0643\u0644 \u0627\u0646\u0648\u0627\u0639 \u0627\u0644\u062E\u062F\u0645\u0629",
        networkTitle: "\u0634\u0628\u0643\u0629 \u062E\u062F\u0645\u0629 Voyah \u0627\u0644\u0648\u0637\u0646\u064A\u0629",
        salesStores: "\u0645\u0639\u0627\u0631\u0636 \u0627\u0644\u0628\u064A\u0639",
        deliveryStores: "\u0645\u0639\u0627\u0631\u0636 \u0627\u0644\u062A\u0633\u0644\u064A\u0645",
        mapTitle: "\u062E\u0631\u064A\u0637\u0629 \u0627\u0644\u0645\u0639\u0627\u0631\u0636"
      }
    };
    const t = computed(() => copy[lang.value]);
    const hotCities = computed(
      () => lang.value === "fr" ? ["Paris", "Lyon", "Marseille", "Toulouse", "Nice", "Nantes", "Lille", "Bordeaux", "Rennes", "Strasbourg"] : lang.value === "ar" ? ["Riyadh", "Jeddah", "Dammam", "Dubai", "Abu Dhabi", "Doha", "Kuwait City", "Cairo", "Amman", "Muscat"] : ["Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Chengdu", "Wuhan", "Hangzhou", "Chongqing", "Xi'an", "Nanjing"]
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container miniPage" }, _attrs))} data-v-ac5f0e52><div class="store-container" data-v-ac5f0e52><div class="select-wrap" data-v-ac5f0e52><div class="select-bar" data-v-ac5f0e52><div class="select-bar-select" data-v-ac5f0e52><div class="select-bar-select-value" data-v-ac5f0e52>${ssrInterpolate(unref(t).allRegions)}</div><i class="select-bar-select-icon" data-v-ac5f0e52></i></div><div class="select-bar-select" data-v-ac5f0e52><div class="select-bar-select-value" data-v-ac5f0e52>${ssrInterpolate(unref(t).allServiceTypes)}</div><i class="select-bar-select-icon" data-v-ac5f0e52></i></div></div><div class="select-main" data-v-ac5f0e52><div class="country" data-v-ac5f0e52><div class="country-title" data-v-ac5f0e52>${ssrInterpolate(unref(t).networkTitle)}</div><div class="country-bottom" data-v-ac5f0e52><div class="bottom-item" data-v-ac5f0e52><div class="bottom-item-label" data-v-ac5f0e52>${ssrInterpolate(unref(t).salesStores)}</div><div class="bottom-item-num" data-v-ac5f0e52>773</div></div><div class="bottom-item" data-v-ac5f0e52><div class="bottom-item-label" data-v-ac5f0e52>${ssrInterpolate(unref(t).deliveryStores)}</div><div class="bottom-item-num" data-v-ac5f0e52>270</div></div></div></div></div></div><div id="mapView" class="map-container" data-v-ac5f0e52><div class="map-placeholder" data-v-ac5f0e52><div class="map-placeholder__title" data-v-ac5f0e52>${ssrInterpolate(unref(t).mapTitle)}</div><div class="map-placeholder__grid" data-v-ac5f0e52><!--[-->`);
      ssrRenderList(unref(hotCities), (city) => {
        _push(`<span class="map-chip" data-v-ac5f0e52>${ssrInterpolate(city)}</span>`);
      });
      _push(`<!--]--></div></div><div class="tools" data-v-ac5f0e52><button type="button" class="tool-btn" data-v-ac5f0e52>+</button><div class="line" data-v-ac5f0e52></div><button type="button" class="tool-btn" data-v-ac5f0e52>-</button><div class="line" data-v-ac5f0e52></div><button type="button" class="tool-btn" data-v-ac5f0e52>\u25CE</button></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/legacy/StoreCenterPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const StoreCenterPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ac5f0e52"]]);

export { StoreCenterPage as S };
//# sourceMappingURL=StoreCenterPage-Dhk3ZMSH.mjs.map
