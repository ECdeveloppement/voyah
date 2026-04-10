import { defineComponent, unref, mergeProps, useSSRContext } from 'file://E:/voyah-nuxt/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file://E:/voyah-nuxt/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$1 } from './LegacyDisclosurePage-RAl89wFh.mjs';
import { r as resolvePage } from './server.mjs';
import { u as useSiteContent, a as useHead } from './useSiteContent-C8SHHNnW.mjs';
import 'file://E:/voyah-nuxt/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://E:/voyah-nuxt/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://E:/voyah-nuxt/node_modules/h3/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://E:/voyah-nuxt/node_modules/destr/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/hookable/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/node-mock-http/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/unstorage/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'file:///E:/voyah-nuxt/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://E:/voyah-nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://E:/voyah-nuxt/node_modules/ohash/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/klona/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/defu/dist/defu.mjs';
import 'file://E:/voyah-nuxt/node_modules/scule/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://E:/voyah-nuxt/node_modules/pathe/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/unhead/dist/server.mjs';
import 'file://E:/voyah-nuxt/node_modules/devalue/index.js';
import 'file://E:/voyah-nuxt/node_modules/unhead/dist/plugins.mjs';
import 'file://E:/voyah-nuxt/node_modules/unhead/dist/utils.mjs';
import 'file://E:/voyah-nuxt/node_modules/unctx/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/vue-router/vue-router.node.mjs';
import 'file://E:/voyah-nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/vue-devtools-stub/dist/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "document",
  __ssrInlineRender: true,
  setup(__props) {
    const page = resolvePage("document.html");
    const { textFor } = useSiteContent();
    useHead({
      title: page ? `Voyah | ${textFor(page.title)}` : "Voyah | Document",
      link: [
        { rel: "stylesheet", href: "/static/assets/purchasingTemplate-87f0d017.css" },
        { rel: "stylesheet", href: "/static/assets/purchasingDetail-f1d6b99d.css" }
      ],
      meta: [
        {
          name: "description",
          content: page ? textFor(page.summary) : "Voyah document center"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/document.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=document-BmQHFEJW.mjs.map
