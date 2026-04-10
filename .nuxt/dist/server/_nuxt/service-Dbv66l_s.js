import { defineComponent, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { S as ServiceCenterPage } from "./ServiceCenterPage-ltHKfc68.js";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=service-Dbv66l_s.js.map
