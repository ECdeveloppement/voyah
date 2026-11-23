import { _ as _export_sfc, u as useRoute, e as __nuxt_component_0$1, g as dealerContact, s as socialLinks } from './server.mjs';
import { defineComponent, ref, computed, watch, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'file://E:/voyah/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'file://E:/voyah/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { u as useSiteContent } from './useSiteContent-DZMgAnrU.mjs';

const _imports_0 = publicAssetsURL("/assets/qatar/icons/voyah_logo.svg");
const _imports_1 = publicAssetsURL("/assets/qatar/icons/language.svg");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SocialLinks",
  __ssrInlineRender: true,
  props: {
    compact: { type: Boolean, default: false }
  },
  setup(__props) {
    const { textFor } = useSiteContent();
    const iconFiles = {
      facebook: "/assets/qatar/icons/facebook.svg",
      instagram: "/assets/qatar/icons/instagram.svg",
      tiktok: "/assets/qatar/icons/tiktok-2.svg",
      whatsapp: "/assets/qatar/icons/whatsapp_logo.svg"
    };
    const glyphs = {
      facebook: '<path d="M13.5 21v-7.4h2.5l.4-2.9h-2.9V9c0-.9.3-1.5 1.6-1.5h1.4V4.9c-.7-.1-1.5-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.1H8v2.9h2.3V21h3.2z"/>',
      instagram: '<g fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3.8" y="3.8" width="16.4" height="16.4" rx="4.6"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none"/></g>',
      tiktok: '<path d="M15.6 3h2.2c.1 1.6.9 3 2.4 3.7v2.2c-1.2 0-2.3-.4-3.3-1v5.6a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.3a3.3 3.3 0 1 0 2.4 3.2V3z"/>',
      youtube: '<path d="M21.6 7.6c-.2-1-.9-1.7-1.9-1.9C17.9 5.4 12 5.4 12 5.4s-5.9 0-7.7.3c-1 .2-1.7.9-1.9 1.9C2.4 9.4 2.4 12 2.4 12s0 2.6.3 4.4c.2 1 .9 1.7 1.9 1.9 1.8.3 7.7.3 7.7.3s5.9 0 7.7-.3c1-.2 1.7-.9 1.9-1.9.3-1.8.3-4.4.3-4.4s0-2.6-.3-4.4zM10.1 15.3V8.7l5.3 3.3-5.3 3.3z"/>',
      x: '<path d="M4.2 3.5h4.3l4 5.4 4.6-5.4h2.6l-5.9 6.9 6.4 8.6h-4.3l-4.4-5.9-5 5.9H3.9l6.2-7.2-6.1-8.6h.2z"/>',
      linkedin: '<path d="M6.9 8.6H4V20h2.9V8.6zM5.4 7.4a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4zM20 13.9c0-3-1.6-4.4-3.8-4.4-1.7 0-2.5.9-3 1.6V8.6H10.4V20h2.9v-6.1c0-1.6.9-2.4 2-2.4s1.8.7 1.8 2.4V20H20v-6.1z"/>',
      whatsapp: '<path d="M12 3.3a8.7 8.7 0 0 0-7.4 13.3L3.4 20.7l4.2-1.1A8.7 8.7 0 1 0 12 3.3zm4.6 11.6c-.2.6-1.2 1.1-1.7 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1-1.4-1-2.6 0-1.3.6-1.9.9-2.1.2-.3.5-.3.6-.3h.5c.2 0 .4 0 .6.4l.8 1.9c.1.2.1.4 0 .5l-.4.5c-.2.2-.3.3-.1.6.1.2.6 1 1.3 1.6.9.8 1.6 1 1.9 1.1.2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.6-.1l1.7.8c.3.1.4.2.5.3v.9z"/>'
    };
    const items = computed(() => socialLinks.filter((link) => link.url.trim() !== ""));
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(items).length) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["social-links", { "social-links--compact": __props.compact }]
        }, _attrs))} data-v-3894b694><!--[-->`);
        ssrRenderList(unref(items), (item) => {
          var _a;
          _push(`<a${ssrRenderAttr("href", item.url)} target="_blank" rel="noopener noreferrer" class="social-link"${ssrRenderAttr("title", unref(textFor)(item.label))}${ssrRenderAttr("aria-label", unref(textFor)(item.label))} data-v-3894b694>`);
          if (iconFiles[item.id]) {
            _push(`<img class="social-link__icon"${ssrRenderAttr("src", iconFiles[item.id])}${ssrRenderAttr("alt", unref(textFor)(item.label))} data-v-3894b694>`);
          } else {
            _push(`<svg viewBox="0 0 24 24" aria-hidden="true" data-v-3894b694>${(_a = glyphs[item.id]) != null ? _a : ""}</svg>`);
          }
          _push(`</a>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/SocialLinks.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3894b694"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SiteHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, locales, navigation, buildPath, switchLocalePath, textFor } = useSiteContent();
    const route = useRoute();
    const mobileOpen = ref(false);
    const activeGroup = ref(null);
    const pinnedGroup = ref(null);
    const localeOpen = ref(false);
    const closeAllGroups = () => {
      pinnedGroup.value = null;
      activeGroup.value = null;
    };
    const labels = {
      language: { en: "Language", fr: "Langue", ar: "\u0627\u0644\u0644\u063A\u0629" }
    };
    const currentLocaleName = computed(() => {
      var _a, _b;
      return (_b = (_a = locales.find((item) => item.code === locale.value.code)) == null ? void 0 : _a.name) != null ? _b : locale.value.code.toUpperCase();
    });
    const isItemActive = (item) => item.slug ? route.path.endsWith(item.slug) : false;
    const visibleChildren = (item) => {
      var _a;
      return ((_a = item.children) != null ? _a : []).filter((child) => Boolean(child.slug || child.href) && !child.hidden);
    };
    const menuChildren = (item) => {
      var _a;
      return ((_a = item.children) != null ? _a : []).filter((child) => child.mobileTeaser || Boolean(child.slug || child.href) && !child.hidden);
    };
    const isGroupActive = (item) => {
      var _a;
      return Boolean((_a = item.children) == null ? void 0 : _a.some((child) => child.slug && route.path.endsWith(child.slug)));
    };
    const hasModelThumbs = (item) => {
      var _a;
      return Boolean(((_a = item.children) == null ? void 0 : _a.length) && item.children.every((child) => Boolean(child.thumb)));
    };
    watch(
      () => route.fullPath,
      () => {
        mobileOpen.value = false;
        closeAllGroups();
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["site-header", { "site-header--mobile-open": unref(mobileOpen) }]
      }, _attrs))} data-v-b72b9d9e><div class="header-inner" data-v-b72b9d9e><div class="header-brand" data-v-b72b9d9e>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(buildPath)(),
        class: "brand-mark",
        "aria-label": "VOYAH"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="VOYAH" data-v-b72b9d9e${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "VOYAH"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="brand-divider" aria-hidden="true" data-v-b72b9d9e></span><span class="brand-partner" data-v-b72b9d9e><span class="brand-partner__name" data-v-b72b9d9e>${ssrInterpolate(unref(dealerContact).partnerLabel)}</span><span class="brand-partner__sub" data-v-b72b9d9e>${ssrInterpolate(unref(textFor)(unref(dealerContact).partnerSubLabel))}</span></span></div><nav class="header-nav desktop-only" aria-label="Primary navigation" data-v-b72b9d9e><!--[-->`);
      ssrRenderList(unref(navigation), (item) => {
        _push(`<div class="nav-group" data-v-b72b9d9e>`);
        if (item.slug) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(buildPath)(item.slug),
            class: ["nav-link", { active: isItemActive(item) }]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(textFor)(item.label))} `);
                if (visibleChildren(item).length) {
                  _push2(`<svg class="nav-caret" viewBox="0 0 12 12" aria-hidden="true" data-v-b72b9d9e${_scopeId}><path d="M2 4.5 6 8.5 10 4.5" fill="none" stroke="currentColor" stroke-width="1.4" data-v-b72b9d9e${_scopeId}></path></svg>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  createTextVNode(toDisplayString(unref(textFor)(item.label)) + " ", 1),
                  visibleChildren(item).length ? (openBlock(), createBlock("svg", {
                    key: 0,
                    class: "nav-caret",
                    viewBox: "0 0 12 12",
                    "aria-hidden": "true"
                  }, [
                    createVNode("path", {
                      d: "M2 4.5 6 8.5 10 4.5",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "1.4"
                    })
                  ])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<button type="button" class="${ssrRenderClass([{ active: isGroupActive(item) || unref(activeGroup) === item.label.en }, "nav-link nav-button"])}"${ssrRenderAttr("aria-expanded", unref(activeGroup) === item.label.en ? "true" : "false")} data-v-b72b9d9e>${ssrInterpolate(unref(textFor)(item.label))} `);
          if (visibleChildren(item).length) {
            _push(`<svg class="nav-caret" viewBox="0 0 12 12" aria-hidden="true" data-v-b72b9d9e><path d="M2 4.5 6 8.5 10 4.5" fill="none" stroke="currentColor" stroke-width="1.4" data-v-b72b9d9e></path></svg>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</button>`);
        }
        if (visibleChildren(item).length && hasModelThumbs(item)) {
          _push(`<div class="${ssrRenderClass([{ open: unref(activeGroup) === item.label.en }, "nav-dropdown nav-model-band"])}" data-v-b72b9d9e><!--[-->`);
          ssrRenderList(menuChildren(item), (child) => {
            _push(`<!--[-->`);
            if (child.mobileTeaser) {
              _push(`<div class="nav-model-card nav-model-card--teaser" data-v-b72b9d9e><img${ssrRenderAttr("src", child.thumb)} alt="" loading="lazy" data-v-b72b9d9e><span data-v-b72b9d9e>Voyah</span></div>`);
            } else {
              _push(ssrRenderComponent(_component_NuxtLink, {
                to: unref(buildPath)(child.slug),
                class: "nav-model-card",
                onClick: closeAllGroups
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<img${ssrRenderAttr("src", child.thumb)}${ssrRenderAttr("alt", unref(textFor)(child.label))} loading="lazy" data-v-b72b9d9e${_scopeId}><span data-v-b72b9d9e${_scopeId}>${ssrInterpolate(unref(textFor)(child.label))}</span>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: child.thumb,
                        alt: unref(textFor)(child.label),
                        loading: "lazy"
                      }, null, 8, ["src", "alt"]),
                      createVNode("span", null, toDisplayString(unref(textFor)(child.label)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]--></div>`);
        } else if (visibleChildren(item).length) {
          _push(`<div class="${ssrRenderClass([{ open: unref(activeGroup) === item.label.en }, "nav-dropdown"])}" data-v-b72b9d9e><!--[-->`);
          ssrRenderList(visibleChildren(item), (child) => {
            _push(`<!--[-->`);
            if (child.href) {
              _push(`<a${ssrRenderAttr("href", child.href)} class="nav-dropdown__item" target="_blank" rel="noopener" data-v-b72b9d9e>${ssrInterpolate(unref(textFor)(child.label))}</a>`);
            } else {
              _push(ssrRenderComponent(_component_NuxtLink, {
                to: unref(buildPath)(child.slug),
                class: "nav-dropdown__item",
                onClick: closeAllGroups
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<span data-v-b72b9d9e${_scopeId}>${ssrInterpolate(unref(textFor)(child.label))}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(unref(textFor)(child.label)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></nav><div class="header-actions desktop-only" data-v-b72b9d9e><div class="locale-menu" data-v-b72b9d9e><button type="button" class="locale-trigger"${ssrRenderAttr("aria-label", unref(textFor)(labels.language))} data-v-b72b9d9e><img class="locale-globe"${ssrRenderAttr("src", _imports_1)} alt="" aria-hidden="true" data-v-b72b9d9e><span data-v-b72b9d9e>${ssrInterpolate(unref(currentLocaleName))}</span></button>`);
      if (unref(localeOpen)) {
        _push(`<div class="locale-dropdown" data-v-b72b9d9e><!--[-->`);
        ssrRenderList(unref(locales), (localeItem) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: localeItem.code,
            to: unref(switchLocalePath)(localeItem.code),
            class: ["locale-dropdown__item", { active: unref(locale).code === localeItem.code }],
            onClick: ($event) => localeOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(localeItem.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(localeItem.name), 1)
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
      _push(`</div></div><button class="${ssrRenderClass(["menu-toggle", "mobile-only", { "menu-toggle--active": unref(mobileOpen) }])}" type="button"${ssrRenderAttr("aria-expanded", unref(mobileOpen) ? "true" : "false")} aria-label="Toggle menu" data-v-b72b9d9e><span class="menu-toggle__line" data-v-b72b9d9e></span><span class="menu-toggle__line" data-v-b72b9d9e></span><span class="menu-toggle__line" data-v-b72b9d9e></span></button></div>`);
      if (unref(mobileOpen)) {
        _push(`<div class="mobile-panel" data-v-b72b9d9e><div class="container mobile-stack" data-v-b72b9d9e><!--[-->`);
        ssrRenderList(unref(navigation), (item) => {
          _push(`<div class="mobile-group" data-v-b72b9d9e>`);
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
            _push(`<div class="mobile-label" data-v-b72b9d9e>${ssrInterpolate(unref(textFor)(item.label))}</div>`);
          }
          if (menuChildren(item).length) {
            _push(`<div class="mobile-children" data-v-b72b9d9e><!--[-->`);
            ssrRenderList(menuChildren(item), (child) => {
              _push(`<!--[-->`);
              if (child.mobileTeaser) {
                _push(`<div class="mobile-model-teaser" data-v-b72b9d9e><img${ssrRenderAttr("src", child.thumb)} alt="" loading="lazy" data-v-b72b9d9e><span data-v-b72b9d9e>Voyah</span></div>`);
              } else if (child.href) {
                _push(`<a${ssrRenderAttr("href", child.href)} class="mobile-link child" target="_blank" rel="noopener" data-v-b72b9d9e>${ssrInterpolate(unref(textFor)(child.label))}</a>`);
              } else {
                _push(ssrRenderComponent(_component_NuxtLink, {
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
              }
              _push(`<!--]-->`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--><div class="mobile-locales" data-v-b72b9d9e><!--[-->`);
        ssrRenderList(unref(locales), (localeItem) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: localeItem.code,
            to: unref(switchLocalePath)(localeItem.code),
            class: ["locale-chip", { active: unref(locale).code === localeItem.code }],
            onClick: ($event) => mobileOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(localeItem.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(localeItem.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
        _push(ssrRenderComponent(SocialLinks, null, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/SiteHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SiteHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b72b9d9e"]]);

export { SiteHeader as S, _imports_0 as _ };
//# sourceMappingURL=SiteHeader-BV1li0VI.mjs.map
