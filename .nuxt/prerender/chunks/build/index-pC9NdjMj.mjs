import { defineComponent, withAsyncContext, mergeProps, useSSRContext } from 'file://E:/voyah/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file://E:/voyah/node_modules/vue/server-renderer/index.mjs';
import { n as navigateTo } from './server.mjs';
import 'file://E:/voyah/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://E:/voyah/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://E:/voyah/node_modules/h3/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://E:/voyah/node_modules/destr/dist/index.mjs';
import 'file://E:/voyah/node_modules/hookable/dist/index.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    [__temp, __restore] = withAsyncContext(() => navigateTo("/fr", { redirectCode: 301, replace: true })), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "root-redirect-page" }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-pC9NdjMj.mjs.map
