import { defineComponent, mergeProps, unref, useSSRContext } from 'file://E:/voyah-nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'file://E:/voyah-nuxt/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LegacyDisclosurePage",
  __ssrInlineRender: true,
  props: {
    page: {},
    textFor: { type: Function }
  },
  setup(__props) {
    const publishLabel = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "purchasingDetail",
        "data-v-cd777a50": ""
      }, _attrs))}><div class="html" data-v-cd777a50><div data-v-cd777a50><div class="banner" data-v-76e57b75><h2>${ssrInterpolate(__props.textFor(__props.page.title))}</h2><span class="time">${ssrInterpolate(unref(publishLabel))}</span></div><div class="pContent" data-v-76e57b75><div class="content" data-v-76e57b75><!--[-->`);
      ssrRenderList(__props.page.blocks, (block, index) => {
        _push(`<p class="text-list">${ssrInterpolate(index + 1)}. ${ssrInterpolate(__props.textFor(block.title))} \u2014 ${ssrInterpolate(__props.textFor(block.body))}</p>`);
      });
      _push(`<!--]--><div class="tableUl"><div class="tableLine"><p class="p1">Item</p><p class="p2">Type</p><p class="p3">Status</p><p class="p4">Note</p></div><!--[-->`);
      ssrRenderList(__props.page.blocks, (block, index) => {
        _push(`<div class="tableLine"><p class="p1">${ssrInterpolate(__props.textFor(block.title))}</p><p class="p2">Disclosure</p><p class="p3">Published</p><p class="p4">${ssrInterpolate(__props.textFor(block.body))}</p></div>`);
      });
      _push(`<!--]--></div><p class="buttom-text">${ssrInterpolate(__props.textFor(__props.page.summary))}</p></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/legacy/LegacyDisclosurePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=LegacyDisclosurePage-RAl89wFh.mjs.map
