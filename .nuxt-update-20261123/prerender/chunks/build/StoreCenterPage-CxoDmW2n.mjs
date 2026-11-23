import { defineComponent, computed, ref, watch, mergeProps, useSSRContext } from 'file://E:/voyah/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderList } from 'file://E:/voyah/node_modules/vue/server-renderer/index.mjs';
import { useRoute } from 'file://E:/voyah/node_modules/vue-router/vue-router.node.mjs';
import { S as SiteHeader } from './SiteHeader-BV1li0VI.mjs';
import { _ as _export_sfc } from './server.mjs';

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
        salesStoresType: "Sales stores",
        deliveryStoresType: "Delivery stores",
        networkTitle: "Voyah Tunisia service network",
        salesStores: "Sales stores",
        deliveryStores: "Delivery stores",
        quickSearch: "Quick search",
        searchPlaceholder: "Enter city name",
        province: "Governorate",
        city: "City",
        selectRegion: "Select region",
        selectType: "Select type"
      },
      fr: {
        allRegions: "Toutes les r\xE9gions",
        allServiceTypes: "Tous les services",
        salesStoresType: "Points de vente",
        deliveryStoresType: "Points de livraison",
        networkTitle: "R\xE9seau national de service Voyah \u2014 Tunisie",
        salesStores: "Points de vente",
        deliveryStores: "Points de livraison",
        quickSearch: "Recherche rapide",
        searchPlaceholder: "Entrez le nom de la ville",
        province: "Gouvernorat",
        city: "Ville",
        selectRegion: "S\xE9lectionner la r\xE9gion",
        selectType: "S\xE9lectionner le type"
      },
      ar: {
        allRegions: "\u0643\u0644 \u0627\u0644\u0645\u0646\u0627\u0637\u0642",
        allServiceTypes: "\u0643\u0644 \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u062E\u062F\u0645\u0629",
        salesStoresType: "\u0645\u0639\u0627\u0631\u0636 \u0627\u0644\u0628\u064A\u0639",
        deliveryStoresType: "\u0645\u0639\u0627\u0631\u0636 \u0627\u0644\u062A\u0633\u0644\u064A\u0645",
        networkTitle: "\u0634\u0628\u0643\u0629 \u062E\u062F\u0645\u0629 Voyah \u0627\u0644\u0648\u0637\u0646\u064A\u0629 \u2014 \u062A\u0648\u0646\u0633",
        salesStores: "\u0645\u0639\u0627\u0631\u0636 \u0627\u0644\u0628\u064A\u0639",
        deliveryStores: "\u0645\u0639\u0627\u0631\u0636 \u0627\u0644\u062A\u0633\u0644\u064A\u0645",
        quickSearch: "\u0628\u062D\u062B \u0633\u0631\u064A\u0639",
        searchPlaceholder: "\u0623\u062F\u062E\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u062F\u064A\u0646\u0629",
        province: "\u0627\u0644\u0648\u0644\u0627\u064A\u0629",
        city: "\u0627\u0644\u0645\u062F\u064A\u0646\u0629",
        selectRegion: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0646\u0637\u0642\u0629",
        selectType: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0646\u0648\u0639"
      }
    };
    const t = computed(() => copy[lang.value]);
    const allStores = [
      { name: "Voyah Tunis Centre", city: "Tunis", governorate: "Tunis", letter: "T", type: "sales", lat: 36.8065, lng: 10.1815 },
      { name: "Voyah Lac", city: "Tunis", governorate: "Tunis", letter: "T", type: "delivery", lat: 36.832, lng: 10.23 },
      { name: "Voyah Ariana", city: "Ariana", governorate: "Ariana", letter: "A", type: "sales", lat: 36.8665, lng: 10.1647 },
      { name: "Voyah Ben Arous", city: "Ben Arous", governorate: "Ben Arous", letter: "B", type: "delivery", lat: 36.7531, lng: 10.2282 },
      { name: "Voyah Sfax", city: "Sfax", governorate: "Sfax", letter: "S", type: "sales", lat: 34.74, lng: 10.76 },
      { name: "Voyah Sfax Service", city: "Sfax", governorate: "Sfax", letter: "S", type: "delivery", lat: 34.72, lng: 10.74 },
      { name: "Voyah Sousse", city: "Sousse", governorate: "Sousse", letter: "S", type: "sales", lat: 35.8245, lng: 10.6346 },
      { name: "Voyah Sousse Livraison", city: "Sousse", governorate: "Sousse", letter: "S", type: "delivery", lat: 35.81, lng: 10.62 },
      { name: "Voyah Hammamet", city: "Hammamet", governorate: "Nabeul", letter: "N", type: "sales", lat: 36.4024, lng: 10.6145 },
      { name: "Voyah Monastir", city: "Monastir", governorate: "Monastir", letter: "M", type: "sales", lat: 35.7773, lng: 10.8262 },
      { name: "Voyah Monastir Service", city: "Monastir", governorate: "Monastir", letter: "M", type: "delivery", lat: 35.765, lng: 10.81 },
      { name: "Voyah Gab\xE8s", city: "Gab\xE8s", governorate: "Gab\xE8s", letter: "G", type: "sales", lat: 33.8881, lng: 10.0975 },
      { name: "Voyah Bizerte", city: "Bizerte", governorate: "Bizerte", letter: "B", type: "sales", lat: 37.2746, lng: 9.8739 },
      { name: "Voyah Kairouan", city: "Kairouan", governorate: "Kairouan", letter: "K", type: "sales", lat: 35.6781, lng: 10.0963 }
    ];
    const regionGroups = [
      { letter: "A", province: "Ariana", cities: ["Ariana"] },
      { letter: "B", province: "Ben Arous", cities: ["Ben Arous"] },
      { letter: "B", province: "Bizerte", cities: ["Bizerte"] },
      { letter: "G", province: "Gab\xE8s", cities: ["Gab\xE8s"] },
      { letter: "K", province: "Kairouan", cities: ["Kairouan"] },
      { letter: "M", province: "Monastir", cities: ["Monastir"] },
      { letter: "N", province: "Nabeul", cities: ["Hammamet", "Nabeul"] },
      { letter: "S", province: "Sfax", cities: ["Sfax"] },
      { letter: "S", province: "Sousse", cities: ["Sousse"] },
      { letter: "T", province: "Tunis", cities: ["Tunis"] }
    ];
    const openSelect = ref(null);
    const regionSearch = ref("");
    const activeLetter = ref(null);
    const selectedRegion = ref(null);
    const selectedType = ref("all");
    const availableLetters = computed(() => [...new Set(regionGroups.map((g) => g.letter))].sort());
    const filteredRegionGroups = computed(
      () => regionGroups.filter((g) => {
        const matchLetter = !activeLetter.value || g.letter === activeLetter.value;
        const matchSearch = !regionSearch.value || g.province.toLowerCase().includes(regionSearch.value.toLowerCase()) || g.cities.some((c) => c.toLowerCase().includes(regionSearch.value.toLowerCase()));
        return matchLetter && matchSearch;
      })
    );
    const selectedRegionLabel = computed(() => {
      var _a;
      return (_a = selectedRegion.value) != null ? _a : t.value.allRegions;
    });
    const serviceTypeOptions = computed(() => [
      { value: "all", label: t.value.allServiceTypes },
      { value: "sales", label: t.value.salesStoresType },
      { value: "delivery", label: t.value.deliveryStoresType }
    ]);
    const selectedTypeLabel = computed(
      () => {
        var _a, _b;
        return (_b = (_a = serviceTypeOptions.value.find((o) => o.value === selectedType.value)) == null ? void 0 : _a.label) != null ? _b : t.value.allServiceTypes;
      }
    );
    const filteredStores = computed(
      () => allStores.filter((s) => {
        const regionMatch = !selectedRegion.value || s.city === selectedRegion.value || s.governorate === selectedRegion.value;
        const typeMatch = selectedType.value === "all" || s.type === selectedType.value;
        return regionMatch && typeMatch;
      })
    );
    const visibleSalesCount = computed(() => filteredStores.value.filter((s) => s.type === "sales").length);
    const visibleDeliveryCount = computed(() => filteredStores.value.filter((s) => s.type === "delivery").length);
    ref(null);
    function renderMarkers() {
      return;
    }
    watch(filteredStores, renderMarkers);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "map-page" }, _attrs))} data-v-3066b411>`);
      _push(ssrRenderComponent(SiteHeader, null, null, _parent));
      _push(`<div class="page-container miniPage" data-v-3066b411><div id="mapView" class="map-container" data-v-3066b411></div><div class="cards-wrapper" data-v-3066b411><div class="cards-row" data-v-3066b411><div class="floating-card card-region" data-v-3066b411><div class="card-label" data-v-3066b411>${ssrInterpolate(t.value.selectRegion)}</div><div class="${ssrRenderClass([{ open: openSelect.value === "region" }, "select-bar-select"])}" data-v-3066b411><div class="select-bar-select-value" data-v-3066b411>${ssrInterpolate(selectedRegionLabel.value)}</div><i class="select-bar-select-icon" data-v-3066b411></i><div class="search-content" data-v-3066b411><div class="search-top" data-v-3066b411><div class="search-label" data-v-3066b411>${ssrInterpolate(t.value.quickSearch)}</div><input${ssrRenderAttr("value", regionSearch.value)}${ssrRenderAttr("placeholder", t.value.searchPlaceholder)} class="input" data-v-3066b411></div><div class="search-bottom" data-v-3066b411><!--[-->`);
      ssrRenderList(availableLetters.value, (letter) => {
        _push(`<div class="${ssrRenderClass([{ active: activeLetter.value === letter }, "search-bottom__item"])}" data-v-3066b411>${ssrInterpolate(letter)}</div>`);
      });
      _push(`<!--]--></div><div class="search-wrapper" data-v-3066b411><div class="city-area" data-v-3066b411><div class="city-choose header-row" data-v-3066b411><div class="first-chat" data-v-3066b411></div><div class="province" data-v-3066b411>${ssrInterpolate(t.value.province)}</div><div class="city" data-v-3066b411>${ssrInterpolate(t.value.city)}</div></div><div class="city-choose" data-v-3066b411><div class="first-chat" data-v-3066b411>#</div><div class="${ssrRenderClass([{ selected: selectedRegion.value === null }, "province province_real"])}" data-v-3066b411>${ssrInterpolate(t.value.allRegions)}</div><div class="city city_real" data-v-3066b411></div></div><!--[-->`);
      ssrRenderList(filteredRegionGroups.value, (group) => {
        _push(`<div class="city-choose" data-v-3066b411><div class="first-chat" data-v-3066b411>${ssrInterpolate(group.letter)}</div><div class="province province_real" data-v-3066b411>${ssrInterpolate(group.province)}</div><div class="city city_real" data-v-3066b411><!--[-->`);
        ssrRenderList(group.cities, (city) => {
          _push(`<div class="${ssrRenderClass([{ selected: selectedRegion.value === city }, "city-item"])}" data-v-3066b411>${ssrInterpolate(city)}</div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div><div class="floating-card card-type" data-v-3066b411><div class="card-label" data-v-3066b411>${ssrInterpolate(t.value.selectType)}</div><div class="${ssrRenderClass([{ open: openSelect.value === "type" }, "select-bar-select"])}" data-v-3066b411><div class="select-bar-select-value" data-v-3066b411>${ssrInterpolate(selectedTypeLabel.value)}</div><i class="select-bar-select-icon" data-v-3066b411></i><div class="select-bar-select-nav" data-v-3066b411><!--[-->`);
      ssrRenderList(serviceTypeOptions.value, (opt) => {
        _push(`<div class="${ssrRenderClass([{ active: selectedType.value === opt.value }, "select-bar-select-nav-item"])}" data-v-3066b411>${ssrInterpolate(opt.label)}</div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="cards-row" data-v-3066b411><div class="floating-card card-stats" data-v-3066b411><div class="network-title" data-v-3066b411>${ssrInterpolate(t.value.networkTitle)}</div><div class="stats-row" data-v-3066b411><div class="stat-item" data-v-3066b411><div class="stat-label" data-v-3066b411>${ssrInterpolate(t.value.salesStores)}</div><div class="stat-number" data-v-3066b411>${ssrInterpolate(visibleSalesCount.value)}</div></div><div class="stat-divider" data-v-3066b411></div><div class="stat-item" data-v-3066b411><div class="stat-label" data-v-3066b411>${ssrInterpolate(t.value.deliveryStores)}</div><div class="stat-number" data-v-3066b411>${ssrInterpolate(visibleDeliveryCount.value)}</div></div></div><div class="legend" data-v-3066b411><div class="legend-item" data-v-3066b411><span class="legend-dot legend-dot--sales" data-v-3066b411></span><span data-v-3066b411>${ssrInterpolate(t.value.salesStores)}</span></div><div class="legend-item" data-v-3066b411><span class="legend-dot legend-dot--delivery" data-v-3066b411></span><span data-v-3066b411>${ssrInterpolate(t.value.deliveryStores)}</span></div></div></div></div></div><div class="tools" data-v-3066b411><button type="button" class="tool-btn" data-v-3066b411>+</button><div class="line" data-v-3066b411></div><button type="button" class="tool-btn" data-v-3066b411>\u2212</button><div class="line" data-v-3066b411></div><button type="button" class="tool-btn" data-v-3066b411>\u25CE</button></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/legacy/StoreCenterPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const StoreCenterPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3066b411"]]);

export { StoreCenterPage as S };
//# sourceMappingURL=StoreCenterPage-CxoDmW2n.mjs.map
