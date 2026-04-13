import { defineComponent, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { u as useRoute, _ as _export_sfc } from "../server.mjs";
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
        allRegions: "كل المناطق",
        allServiceTypes: "كل انواع الخدمة",
        networkTitle: "شبكة خدمة Voyah الوطنية",
        salesStores: "معارض البيع",
        deliveryStores: "معارض التسليم",
        mapTitle: "خريطة المعارض"
      }
    };
    const t = computed(() => copy[lang.value]);
    const hotCities = computed(
      () => lang.value === "fr" ? ["Paris", "Lyon", "Marseille", "Toulouse", "Nice", "Nantes", "Lille", "Bordeaux", "Rennes", "Strasbourg"] : lang.value === "ar" ? ["Riyadh", "Jeddah", "Dammam", "Dubai", "Abu Dhabi", "Doha", "Kuwait City", "Cairo", "Amman", "Muscat"] : ["Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Chengdu", "Wuhan", "Hangzhou", "Chongqing", "Xi'an", "Nanjing"]
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container miniPage" }, _attrs))} data-v-ef2978c3><div class="store-container" data-v-ef2978c3><div class="select-wrap" data-v-ef2978c3><div class="select-bar" data-v-ef2978c3><div class="select-bar-select" data-v-ef2978c3><div class="select-bar-select-value" data-v-ef2978c3>${ssrInterpolate(unref(t).allRegions)}</div><i class="select-bar-select-icon" data-v-ef2978c3></i></div><div class="select-bar-select" data-v-ef2978c3><div class="select-bar-select-value" data-v-ef2978c3>${ssrInterpolate(unref(t).allServiceTypes)}</div><i class="select-bar-select-icon" data-v-ef2978c3></i></div></div><div class="select-main" data-v-ef2978c3><div class="country" data-v-ef2978c3><div class="country-title" data-v-ef2978c3>${ssrInterpolate(unref(t).networkTitle)}</div><div class="country-bottom" data-v-ef2978c3><div class="bottom-item" data-v-ef2978c3><div class="bottom-item-label" data-v-ef2978c3>${ssrInterpolate(unref(t).salesStores)}</div><div class="bottom-item-num" data-v-ef2978c3>773</div></div><div class="bottom-item" data-v-ef2978c3><div class="bottom-item-label" data-v-ef2978c3>${ssrInterpolate(unref(t).deliveryStores)}</div><div class="bottom-item-num" data-v-ef2978c3>270</div></div></div></div></div></div><div id="mapView" class="map-container" data-v-ef2978c3><div class="map-placeholder" data-v-ef2978c3><div class="map-placeholder__title" data-v-ef2978c3>${ssrInterpolate(unref(t).mapTitle)}</div><div class="map-placeholder__grid" data-v-ef2978c3><!--[-->`);
      ssrRenderList(unref(hotCities), (city) => {
        _push(`<span class="map-chip" data-v-ef2978c3>${ssrInterpolate(city)}</span>`);
      });
      _push(`<!--]--></div></div><div class="tools" data-v-ef2978c3><button type="button" class="tool-btn" data-v-ef2978c3>+</button><div class="line" data-v-ef2978c3></div><button type="button" class="tool-btn" data-v-ef2978c3>-</button><div class="line" data-v-ef2978c3></div><button type="button" class="tool-btn" data-v-ef2978c3>◎</button></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/legacy/StoreCenterPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const StoreCenterPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ef2978c3"]]);
export {
  StoreCenterPage as S
};
//# sourceMappingURL=StoreCenterPage-DhycvW5P.js.map
