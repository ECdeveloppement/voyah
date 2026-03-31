import { a as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, renderSlot, useSSRContext, ref, unref } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { u as useSiteContent } from "./useSiteContent-DdcGgDLD.js";
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
      const _component_NuxtLink = __nuxt_component_0;
      if (__props.to) {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          to: __props.to,
          class: ["base-button", __props.variant]
        }, _attrs), {
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
        }, _attrs))}>`);
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
const useSectionReveal = (options = {}) => {
  const target = ref(null);
  return target;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MetricGrid",
  __ssrInlineRender: true,
  props: {
    metrics: {}
  },
  setup(__props) {
    const { textFor } = useSiteContent();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "metric-grid" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.metrics, (metric) => {
        _push(`<article class="metric-card"><div class="metric-value">${ssrInterpolate(metric.value)}</div><div class="metric-label">${ssrInterpolate(unref(textFor)(metric.label))}</div></article>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/MetricGrid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$1 as _,
  _sfc_main as a,
  useSectionReveal as u
};
//# sourceMappingURL=MetricGrid-sTTMnurw.js.map
