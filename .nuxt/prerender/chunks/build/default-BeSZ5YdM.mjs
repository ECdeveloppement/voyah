import { defineComponent, mergeProps, unref, ref, watch, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createVNode, useSSRContext } from 'file://E:/voyah-nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'file://E:/voyah-nuxt/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, u as useRoute, a as __nuxt_component_0$1 } from './server.mjs';
import { c as currentLocaleInfo, b as useHead, u as useSiteContent } from './useSiteContent-DdcGgDLD.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SiteFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { footerColumns, footerContact, footerLegalLinks, buildPath, textFor } = useSiteContent();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "site-footer" }, _attrs))} data-v-d6f3ecfa><div class="container footer-grid" data-v-d6f3ecfa><div class="footer-brand panel" data-v-d6f3ecfa><p class="eyebrow" data-v-d6f3ecfa>${ssrInterpolate(unref(textFor)(unref(footerContact).title))}</p><p class="footer-copy" data-v-d6f3ecfa>${ssrInterpolate(unref(textFor)(unref(footerContact).body))}</p><div class="footer-qr" data-v-d6f3ecfa><figure data-v-d6f3ecfa><img${ssrRenderAttr("src", unref(footerContact).appCode)} alt="Voyah app code" data-v-d6f3ecfa><figcaption data-v-d6f3ecfa>App</figcaption></figure><figure data-v-d6f3ecfa><img${ssrRenderAttr("src", unref(footerContact).miniProgramCode)} alt="Voyah mini program code" data-v-d6f3ecfa><figcaption data-v-d6f3ecfa>Mini</figcaption></figure></div></div><div class="footer-columns" data-v-d6f3ecfa><!--[-->`);
      ssrRenderList(unref(footerColumns), (column) => {
        _push(`<section data-v-d6f3ecfa><h3 data-v-d6f3ecfa>${ssrInterpolate(unref(textFor)(column.title))}</h3><!--[-->`);
        ssrRenderList(column.links, (link) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: link.slug,
            to: unref(buildPath)(link.slug)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(textFor)(link.label))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(textFor)(link.label)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></section>`);
      });
      _push(`<!--]--></div></div><div class="container footer-bottom" data-v-d6f3ecfa><span data-v-d6f3ecfa>Voyah</span><div class="footer-legal" data-v-d6f3ecfa><!--[-->`);
      ssrRenderList(unref(footerLegalLinks), (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.slug,
          to: unref(buildPath)(link.slug)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(textFor)(link.label))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(textFor)(link.label)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></footer>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/SiteFooter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SiteFooter = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-d6f3ecfa"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SiteHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, locales, navigation, buildPath, switchLocalePath, textFor } = useSiteContent();
    const route = useRoute();
    const mobileOpen = ref(false);
    const activeGroup = ref(null);
    watch(
      () => route.fullPath,
      () => {
        mobileOpen.value = false;
        activeGroup.value = null;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "site-header" }, _attrs))} data-v-b0d0ddec><div class="container header-bar" data-v-b0d0ddec>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(buildPath)(),
        class: "brand-mark"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Voyah`);
          } else {
            return [
              createTextVNode("Voyah")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="header-nav desktop-only" data-v-b0d0ddec><!--[-->`);
      ssrRenderList(unref(navigation), (item) => {
        var _a;
        _push(`<div class="nav-group" data-v-b0d0ddec>`);
        if (item.slug) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(buildPath)(item.slug),
            class: "nav-link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(textFor)(item.label))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(textFor)(item.label)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<button class="nav-link nav-button" type="button" data-v-b0d0ddec>${ssrInterpolate(unref(textFor)(item.label))}</button>`);
        }
        if ((_a = item.children) == null ? void 0 : _a.length) {
          _push(`<div class="${ssrRenderClass(["nav-dropdown", { open: unref(activeGroup) === item.label.en }])}" data-v-b0d0ddec><!--[-->`);
          ssrRenderList(item.children, (child) => {
            var _a2;
            _push(ssrRenderComponent(_component_NuxtLink, {
              key: (_a2 = child.slug) != null ? _a2 : child.label.en,
              to: unref(buildPath)(child.slug),
              class: "dropdown-card"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  if (child.thumb) {
                    _push2(`<img${ssrRenderAttr("src", child.thumb)}${ssrRenderAttr("alt", unref(textFor)(child.label))} class="dropdown-thumb" data-v-b0d0ddec${_scopeId}>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<span data-v-b0d0ddec${_scopeId}>${ssrInterpolate(unref(textFor)(child.label))}</span>`);
                } else {
                  return [
                    child.thumb ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: child.thumb,
                      alt: unref(textFor)(child.label),
                      class: "dropdown-thumb"
                    }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                    createVNode("span", null, toDisplayString(unref(textFor)(child.label)), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></nav><div class="header-actions desktop-only" data-v-b0d0ddec><!--[-->`);
      ssrRenderList(unref(locales), (localeItem) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: localeItem.code,
          to: unref(switchLocalePath)(localeItem.code),
          class: ["locale-badge", { active: unref(locale).code === localeItem.code }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(localeItem.code.toUpperCase())}`);
            } else {
              return [
                createTextVNode(toDisplayString(localeItem.code.toUpperCase()), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><button class="menu-toggle mobile-only" type="button" data-v-b0d0ddec>${ssrInterpolate(unref(mobileOpen) ? "Close" : "Menu")}</button></div>`);
      if (unref(mobileOpen)) {
        _push(`<div class="mobile-panel" data-v-b0d0ddec><div class="container mobile-stack" data-v-b0d0ddec><!--[-->`);
        ssrRenderList(unref(navigation), (item) => {
          var _a;
          _push(`<div class="mobile-group" data-v-b0d0ddec>`);
          if (item.slug) {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: unref(buildPath)(item.slug),
              class: "mobile-link",
              onClick: ($event) => mobileOpen.value = false
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(unref(textFor)(item.label))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(textFor)(item.label)), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<div class="mobile-label" data-v-b0d0ddec>${ssrInterpolate(unref(textFor)(item.label))}</div>`);
          }
          if ((_a = item.children) == null ? void 0 : _a.length) {
            _push(`<div class="mobile-children" data-v-b0d0ddec><!--[-->`);
            ssrRenderList(item.children, (child) => {
              var _a2;
              _push(ssrRenderComponent(_component_NuxtLink, {
                key: (_a2 = child.slug) != null ? _a2 : child.label.en,
                to: unref(buildPath)(child.slug),
                class: "mobile-link child",
                onClick: ($event) => mobileOpen.value = false
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(unref(textFor)(child.label))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(textFor)(child.label)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--><div class="mobile-locales" data-v-b0d0ddec><!--[-->`);
        ssrRenderList(unref(locales), (localeItem) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: localeItem.code,
            to: unref(switchLocalePath)(localeItem.code),
            class: ["locale-badge", { active: unref(locale).code === localeItem.code }],
            onClick: ($event) => mobileOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(localeItem.code.toUpperCase())}`);
              } else {
                return [
                  createTextVNode(toDisplayString(localeItem.code.toUpperCase()), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/SiteHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SiteHeader = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b0d0ddec"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const currentLocale = currentLocaleInfo();
    useHead(() => ({
      htmlAttrs: {
        lang: currentLocale.value.code,
        dir: currentLocale.value.dir
      },
      bodyAttrs: {
        class: `locale-${currentLocale.value.code}`
      }
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["site-shell", { "is-rtl": unref(currentLocale).dir === "rtl" }]
      }, _attrs))}>`);
      _push(ssrRenderComponent(SiteHeader, null, null, _parent));
      _push(`<main class="site-main">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(SiteFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-BeSZ5YdM.mjs.map
