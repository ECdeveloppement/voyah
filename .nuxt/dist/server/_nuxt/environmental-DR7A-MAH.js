import { defineComponent, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./LegacyDisclosurePage-RAl89wFh.js";
import { r as resolvePage } from "../server.mjs";
import { u as useSiteContent, a as useHead } from "./useSiteContent-C8SHHNnW.js";
import "E:/voyah-nuxt/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "E:/voyah-nuxt/node_modules/hookable/dist/index.mjs";
import "E:/voyah-nuxt/node_modules/unctx/dist/index.mjs";
import "E:/voyah-nuxt/node_modules/h3/dist/index.mjs";
import "vue-router";
import "E:/voyah-nuxt/node_modules/defu/dist/defu.mjs";
import "E:/voyah-nuxt/node_modules/klona/dist/index.mjs";
import "E:/voyah-nuxt/node_modules/cookie-es/dist/index.mjs";
import "E:/voyah-nuxt/node_modules/destr/dist/index.mjs";
import "E:/voyah-nuxt/node_modules/ohash/dist/index.mjs";
import "@vue/devtools-api";
import "E:/voyah-nuxt/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "environmental",
  __ssrInlineRender: true,
  setup(__props) {
    const page = resolvePage("environmental.html");
    const { textFor } = useSiteContent();
    useHead({
      title: page ? `Voyah | ${textFor(page.title)}` : "Voyah | Environmental",
      link: [
        { rel: "stylesheet", href: "/static/assets/purchasingTemplate-87f0d017.css" },
        { rel: "stylesheet", href: "/static/assets/purchasingDetail-f1d6b99d.css" }
      ],
      meta: [
        {
          name: "description",
          content: page ? textFor(page.summary) : "Voyah environmental disclosure"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(page)) {
        _push(ssrRenderComponent(_sfc_main$1, mergeProps({
          page: unref(page),
          "text-for": unref(textFor)
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/environmental.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=environmental-DR7A-MAH.js.map
