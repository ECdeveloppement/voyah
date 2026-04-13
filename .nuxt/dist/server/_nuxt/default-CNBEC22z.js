import { defineComponent, computed, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext, watch, createVNode, openBlock, createBlock, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrRenderComponent, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import "E:/voyah/node_modules/hookable/dist/index.mjs";
import { u as useSiteContent, c as currentLocaleInfo, a as useHead } from "./useSiteContent-DsX9M3mb.js";
import { i as useNuxtApp, g as __nuxt_component_0, _ as _export_sfc, u as useRoute } from "../server.mjs";
import "E:/voyah/node_modules/klona/dist/index.mjs";
import { publicAssetsURL } from "#internal/nuxt/paths";
import "E:/voyah/node_modules/defu/dist/defu.mjs";
import "E:/voyah/node_modules/@unhead/vue/dist/index.mjs";
import "E:/voyah/node_modules/ofetch/dist/node.mjs";
import "E:/voyah/node_modules/unctx/dist/index.mjs";
import "E:/voyah/node_modules/h3/dist/index.mjs";
import "vue-router";
import "E:/voyah/node_modules/cookie-es/dist/index.mjs";
import "E:/voyah/node_modules/destr/dist/index.mjs";
import "E:/voyah/node_modules/ohash/dist/index.mjs";
import "@vue/devtools-api";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SiteFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { footerColumns, footerContact, footerLegalLinks, buildPath, textFor } = useSiteContent();
    const { t } = useNuxtApp().$i18n ? useNuxtApp().$i18n : { t: (k) => k };
    const appEyebrow = computed(() => t("global.footer.appEyebrow"));
    const appLabel = computed(() => t("global.footer.appLabel"));
    const miniLabel = computed(() => t("global.footer.miniLabel"));
    const miniCopy = computed(() => t("global.footer.miniCopy"));
    const versionLabel = computed(() => t("global.footer.versionLabel"));
    const companyLabel = computed(() => t("global.footer.companyLabel"));
    const phoneLabel = computed(() => t("global.footer.phoneLabel"));
    const emailLabel = computed(() => t("global.footer.emailLabel"));
    const recordLabel = computed(() => t("global.footer.recordLabel"));
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const footerRef = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: "site-footer",
        ref_key: "footerRef",
        ref: footerRef
      }, _attrs))} data-v-fa175d47><div class="footer-app-shell" data-v-fa175d47><div class="container footer-app" data-v-fa175d47><div class="footer-app-copy" data-v-fa175d47><p class="footer-kicker" data-v-fa175d47>${ssrInterpolate(unref(appEyebrow))}</p><h2 data-v-fa175d47>${ssrInterpolate(unref(textFor)(unref(footerContact).title))}</h2><p class="footer-copy" data-v-fa175d47>${ssrInterpolate(unref(textFor)(unref(footerContact).body))}</p></div><div class="footer-qr" data-v-fa175d47><figure data-v-fa175d47><img${ssrRenderAttr("src", unref(footerContact).appCode)} alt="Voyah app code" data-v-fa175d47><figcaption data-v-fa175d47>${ssrInterpolate(unref(appLabel))}</figcaption><p class="footer-qr-copy" data-v-fa175d47>${ssrInterpolate(unref(versionLabel))}</p></figure><figure data-v-fa175d47><img${ssrRenderAttr("src", unref(footerContact).miniProgramCode)} alt="Voyah mini program code" data-v-fa175d47><figcaption data-v-fa175d47>${ssrInterpolate(unref(miniLabel))}</figcaption><p class="footer-qr-copy" data-v-fa175d47>${ssrInterpolate(unref(miniCopy))}</p></figure></div></div></div><div class="container footer-grid" data-v-fa175d47><div class="footer-columns" data-v-fa175d47><!--[-->`);
      ssrRenderList(unref(footerColumns), (column, idx) => {
        _push(`<section class="stagger-column" style="${ssrRenderStyle({ "--stagger-idx": idx })}" data-v-fa175d47><h3 data-v-fa175d47>${ssrInterpolate(unref(textFor)(column.title))}</h3><!--[-->`);
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
      _push(`<!--]--></div><div class="footer-company" data-v-fa175d47><span data-v-fa175d47>${ssrInterpolate(unref(companyLabel))}</span><span data-v-fa175d47>${ssrInterpolate(unref(phoneLabel))}</span><span data-v-fa175d47>${ssrInterpolate(unref(emailLabel))}</span></div><div class="footer-bottom" data-v-fa175d47><div class="footer-legal" data-v-fa175d47><!--[-->`);
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
      _push(`<!--]--></div><div class="footer-records" data-v-fa175d47><span data-v-fa175d47>${ssrInterpolate(unref(recordLabel))}</span><span data-v-fa175d47>Copyright © ${ssrInterpolate(unref(currentYear))} Voyah.com.cn All rights reserved.</span></div></div></div></footer>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/SiteFooter.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const SiteFooter = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-fa175d47"]]);
const _imports_0$1 = publicAssetsURL("/sitelogo/pc/brand.png");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SiteHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, locales, navigation, buildPath, switchLocalePath, textFor, resolveCurrentPage } = useSiteContent();
    const route = useRoute();
    const mobileOpen = ref(false);
    const activeGroup = ref(null);
    const localeOpen = ref(false);
    const currentPage = computed(() => resolveCurrentPage());
    const currentModel = computed(() => currentPage.value?.kind === "model" ? currentPage.value : null);
    const scrollY = ref(0);
    const isHomeRoute = computed(() => !currentPage.value || route.path === `/${locale.value.code}` || route.path === `/${locale.value.code}/`);
    const headerOpacity = computed(() => {
      if (!isHomeRoute.value) return 0.96;
      return Math.min(0.96, scrollY.value / 50);
    });
    const headerHeight = computed(() => {
      if (!isHomeRoute.value) return 64;
      return Math.max(64, 80 - scrollY.value / 50 * 16);
    });
    const isTransparent = computed(() => isHomeRoute.value && scrollY.value < 4 && !mobileOpen.value);
    const isScrolled = computed(() => scrollY.value > 20 || !isHomeRoute.value);
    const copy = (en, fr, ar) => ({ en, fr, ar });
    const loginLabel = computed(() => useNuxtApp().$i18n.t("global.header.login"));
    const configLabel = computed(() => useNuxtApp().$i18n.t("global.header.config"));
    const testDriveLabel = computed(() => useNuxtApp().$i18n.t("global.header.testDrive"));
    const orderLabel = computed(() => useNuxtApp().$i18n.t("global.header.order"));
    const modelMenuSections = [
      {
        key: "sedan",
        title: copy("Sedans", "Berlines", "السيدان"),
        items: [
          {
            slug: "passion-L.html",
            label: copy("Voyah Passion L", "Voyah Passion L", "Voyah Passion L"),
            image: "/website/navigationbar/image/f4f5a6a1-71c8-4531-8a05-4e6e0cf7f70f1770619343790.png"
          },
          {
            slug: "passion.html",
            label: copy("Voyah Passion", "Voyah Passion", "Voyah Passion"),
            image: "/website/navigationbar/image/e1d7bd06-b4c5-462c-8c25-8cf550b2af3a1770619370417.png"
          }
        ]
      },
      {
        key: "suv",
        title: copy("SUVs", "SUV", "سيارات SUV"),
        items: [
          {
            slug: "titan.html",
            label: copy("Voyah Titan", "Voyah Titan", "Voyah Titan"),
            image: "/website/navigationbar/image/482a7b36-c15e-4508-83e5-c9b79227dbfa1770619361896.png"
          },
          {
            slug: "titan_blackedition.html",
            label: copy("Voyah Titan Black Edition", "Voyah Titan Black Edition", "Voyah Titan Black Edition"),
            image: "/website/navigationbar/image/2d3ebdb7-6f35-4bfd-b929-d858d5cb3a351773729769599.png"
          },
          {
            slug: "titan_X8.html",
            label: copy("Voyah Titan X8", "Voyah Titan X8", "Voyah Titan X8"),
            image: "/website/navigationbar/image/d515bc38-574b-44fb-aebc-2f721eccfb461773885854055.png"
          },
          {
            slug: "free+.html",
            label: copy("Voyah FREE+", "Voyah FREE+", "Voyah FREE+"),
            image: "/website/navigationbar/image/48068657-2f04-4e9e-a356-fb33e4b689101770619447889.png"
          },
          {
            slug: "newCourage.html",
            label: copy("New Voyah Courage", "Nouveau Voyah Courage", "Voyah Courage الجديد"),
            image: "/website/navigationbar/image/09a0e118-e3a0-4cc1-afdc-f135820b2c201770619310485.png"
          },
          {
            slug: "free.html",
            label: copy("Voyah FREE 318", "Voyah FREE 318", "Voyah FREE 318"),
            image: "/website/navigationbar/image/ea0f8412-5208-4822-b42d-bdbbb64741b41770619334518.png"
          },
          {
            slug: "courage.html",
            label: copy("Voyah Courage", "Voyah Courage", "Voyah Courage"),
            image: "/website/navigationbar/image/5776c5f7-6be4-4aac-9f05-c0ccd19d30721770619276875.png"
          }
        ]
      },
      {
        key: "mpv",
        title: copy("MPVs", "MPV", "سيارات MPV"),
        items: [
          {
            slug: "newDreamer26.html",
            label: copy("26 Voyah Dreamer", "Voyah Dreamer 26", "Voyah Dreamer 26"),
            image: "/website/navigationbar/image/f30edd0e-0255-42b9-a722-3f2cb4aef38c1770619352950.png"
          },
          {
            slug: "dreamer-champion.html",
            label: copy("Voyah Dreamer Champion", "Voyah Dreamer Champion", "Voyah Dreamer Champion"),
            image: "/website/navigationbar/image/7688c1ff-2ab4-4bd9-aa99-b341f10e001d1772278786816.png"
          },
          {
            slug: "newDreamer.html",
            label: copy("25 Voyah Dreamer", "Voyah Dreamer 25", "Voyah Dreamer 25"),
            image: "/website/navigationbar/image/c8e0e96a-367e-4bc5-aca7-0e35439c4b891770619534354.png"
          },
          {
            slug: "dreamriver.html",
            label: copy("Voyah Dreamer Mountain River", "Voyah Dreamer Montagne-Rivière", "Voyah Dreamer Mountain River"),
            image: "/website/navigationbar/image/6c0d74ca-49f1-4982-8c0c-7ee7c1421b461770619320286.png"
          },
          {
            slug: "dreamer.html",
            label: copy("24 Voyah Dreamer", "Voyah Dreamer 24", "Voyah Dreamer 24"),
            image: "/website/navigationbar/image/dc0ac63f-35e8-4af1-8052-471fdbf5ce9a1770619290710.png"
          }
        ]
      }
    ];
    const toolMenu = {
      title: copy("Tools", "Outils", "الأدوات"),
      items: [
        { slug: "book-drive.html", label: copy("Book a test drive", "Réserver un essai", "احجز تجربة قيادة") },
        { slug: "titan.html", label: copy("Configure", "Configurer", "التهيئة") }
      ]
    };
    const serviceChildren = computed(() => {
      const items = Array.isArray(navigation.value) ? navigation.value : [];
      return items.find((item) => item.label.en === "Voyah Service")?.children ?? [];
    });
    const aboutChildren = computed(() => {
      const items = Array.isArray(navigation.value) ? navigation.value : [];
      return items.find((item) => item.label.en === "About Voyah")?.children ?? [];
    });
    const serviceMenu = computed(() => ({
      primaryTitle: copy("Service", "Service", "الخدمة"),
      primaryItems: serviceChildren.value.slice(0, 2).map((child, index) => ({
        ...child,
        thumb: [
          "/website/navigationbar/image/984a8ea8-534a-46fb-b57c-b87ebd915faf1770618777959.png",
          "/website/navigationbar/image/c0159214-6002-494d-a913-44771be8f4891770618857442.png"
        ][index]
      })),
      secondaryTitle: copy("Related Information", "Informations associées", "معلومات ذات صلة"),
      secondaryItems: serviceChildren.value.slice(2)
    }));
    const aboutMenu = computed(() => ({
      primaryTitle: copy("Communication", "Communication", "التواصل"),
      primaryItems: aboutChildren.value.slice(0, 1).map((child) => ({
        ...child,
        thumb: "/website/navigationbar/image/a0423ec8-30e1-431b-a9fa-d9bea9d0c5701770622210658.png"
      })),
      secondaryTitle: copy("Cooperation", "Coopération", "التعاون"),
      secondaryItems: aboutChildren.value.slice(1)
    }));
    const isItemActive = (item) => {
      if (!item.slug) return false;
      return route.path.endsWith(item.slug);
    };
    watch(
      () => route.fullPath,
      () => {
        mobileOpen.value = false;
        activeGroup.value = null;
        localeOpen.value = false;
      }
    );
    watch(mobileOpen, (isOpen) => {
      (void 0).body.style.overflow = isOpen ? "hidden" : "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _cssVars = { style: {
        ":--v095f44be": headerOpacity.value,
        ":--v189daa9c": headerHeight.value + "px"
      } };
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["site-header", {
          "site-header--mobile-open": mobileOpen.value,
          "site-header--transparent": isTransparent.value,
          "site-header--scrolled": isScrolled.value
        }]
      }, _attrs, _cssVars))} data-v-e7839a3e><div class="container header-bar" data-v-e7839a3e><div class="header-left" data-v-e7839a3e>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(buildPath)(),
        class: "brand-mark",
        "aria-label": "Voyah home"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="Voyah" data-v-e7839a3e${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                alt: "Voyah"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (currentModel.value) {
        _push(`<div class="header-model desktop-only" data-v-e7839a3e><img${ssrRenderAttr("src", currentModel.value.logo)}${ssrRenderAttr("alt", unref(textFor)(currentModel.value.title))} class="header-model__logo" data-v-e7839a3e><div class="header-model__meta" data-v-e7839a3e><span class="header-model__name" data-v-e7839a3e>${ssrInterpolate(unref(textFor)(currentModel.value.title))}</span><span class="header-model__price" data-v-e7839a3e>${ssrInterpolate(unref(textFor)(currentModel.value.price))}</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<nav class="header-nav desktop-only" aria-label="Primary navigation" data-v-e7839a3e><!--[-->`);
      ssrRenderList(unref(navigation), (item) => {
        _push(`<div class="nav-group" data-v-e7839a3e>`);
        if (item.slug) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(buildPath)(item.slug),
            class: ["nav-link", { active: isItemActive(item) }]
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
          _push(`<button type="button" class="${ssrRenderClass([{ active: activeGroup.value === item.label.en || isHomeRoute.value && item.label.en === "Models" }, "nav-link nav-button"])}" data-v-e7839a3e>${ssrInterpolate(unref(textFor)(item.label))}</button>`);
        }
        if (item.children?.length) {
          _push(`<div class="${ssrRenderClass([
            "nav-dropdown",
            {
              open: activeGroup.value === item.label.en,
              "nav-dropdown--models": item.label.en === "Models"
            }
          ])}" data-v-e7839a3e><div class="nav-dropdown-container" data-v-e7839a3e>`);
          if (item.label.en === "Models") {
            _push(`<div class="models-dropdown" data-v-e7839a3e><div class="models-dropdown__main" data-v-e7839a3e><!--[-->`);
            ssrRenderList(modelMenuSections, (section) => {
              _push(`<div class="models-section" data-v-e7839a3e><h5 class="models-section__title" data-v-e7839a3e>${ssrInterpolate(unref(textFor)(section.title))}</h5><div class="models-grid" data-v-e7839a3e><!--[-->`);
              ssrRenderList(section.items, (entry, entryIdx) => {
                _push(ssrRenderComponent(_component_NuxtLink, {
                  key: entry.slug,
                  to: unref(buildPath)(entry.slug),
                  class: "models-card",
                  style: { "--stagger-idx": entryIdx }
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(`<div class="models-card__media" data-v-e7839a3e${_scopeId}><img${ssrRenderAttr("src", entry.image)}${ssrRenderAttr("alt", unref(textFor)(entry.label))} class="models-card__image" data-v-e7839a3e${_scopeId}></div><p class="models-card__name" data-v-e7839a3e${_scopeId}>${ssrInterpolate(unref(textFor)(entry.label))}</p>`);
                    } else {
                      return [
                        createVNode("div", { class: "models-card__media" }, [
                          createVNode("img", {
                            src: entry.image,
                            alt: unref(textFor)(entry.label),
                            class: "models-card__image"
                          }, null, 8, ["src", "alt"])
                        ]),
                        createVNode("p", { class: "models-card__name" }, toDisplayString(unref(textFor)(entry.label)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
              });
              _push(`<!--]--></div></div>`);
            });
            _push(`<!--]--></div><aside class="models-dropdown__tools" data-v-e7839a3e><div class="models-tools" data-v-e7839a3e><div class="models-tools__title" data-v-e7839a3e>${ssrInterpolate(unref(textFor)(toolMenu.title))}</div><div class="models-tools__list" data-v-e7839a3e><!--[-->`);
            ssrRenderList(toolMenu.items, (tool) => {
              _push(ssrRenderComponent(_component_NuxtLink, {
                key: tool.slug,
                to: unref(buildPath)(tool.slug),
                class: "models-tools__item"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(unref(textFor)(tool.label))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(textFor)(tool.label)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            });
            _push(`<!--]--></div></div></aside></div>`);
          } else if (item.label.en === "Voyah Service" || item.label.en === "About Voyah") {
            _push(`<div class="grouped-dropdown" data-v-e7839a3e><div class="grouped-dropdown__main" data-v-e7839a3e><h5 class="grouped-dropdown__title" data-v-e7839a3e>${ssrInterpolate(unref(textFor)(item.label.en === "Voyah Service" ? serviceMenu.value.primaryTitle : aboutMenu.value.primaryTitle))}</h5><div class="grouped-dropdown__feature-list" data-v-e7839a3e><!--[-->`);
            ssrRenderList(item.label.en === "Voyah Service" ? serviceMenu.value.primaryItems : aboutMenu.value.primaryItems, (child) => {
              _push(ssrRenderComponent(_component_NuxtLink, {
                key: child.slug,
                to: unref(buildPath)(child.slug),
                class: "grouped-dropdown__feature"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    if (child.thumb) {
                      _push2(`<img${ssrRenderAttr("src", child.thumb)}${ssrRenderAttr("alt", unref(textFor)(child.label))} class="grouped-dropdown__feature-image" data-v-e7839a3e${_scopeId}>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`<span class="grouped-dropdown__feature-label" data-v-e7839a3e${_scopeId}>${ssrInterpolate(unref(textFor)(child.label))}</span>`);
                  } else {
                    return [
                      child.thumb ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: child.thumb,
                        alt: unref(textFor)(child.label),
                        class: "grouped-dropdown__feature-image"
                      }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                      createVNode("span", { class: "grouped-dropdown__feature-label" }, toDisplayString(unref(textFor)(child.label)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            });
            _push(`<!--]--></div></div><aside class="grouped-dropdown__aside" data-v-e7839a3e><div class="grouped-dropdown__aside-title" data-v-e7839a3e>${ssrInterpolate(unref(textFor)(item.label.en === "Voyah Service" ? serviceMenu.value.secondaryTitle : aboutMenu.value.secondaryTitle))}</div><div class="grouped-dropdown__aside-list" data-v-e7839a3e><!--[-->`);
            ssrRenderList(item.label.en === "Voyah Service" ? serviceMenu.value.secondaryItems : aboutMenu.value.secondaryItems, (child) => {
              _push(ssrRenderComponent(_component_NuxtLink, {
                key: child.slug,
                to: unref(buildPath)(child.slug),
                class: "grouped-dropdown__aside-item"
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
            _push(`<!--]--></div></aside></div>`);
          } else {
            _push(`<div class="dropdown-inner" data-v-e7839a3e><!--[-->`);
            ssrRenderList(item.children, (child, childIdx) => {
              _push(ssrRenderComponent(_component_NuxtLink, {
                key: child.slug ?? item.label.en,
                to: unref(buildPath)(child.slug),
                class: "dropdown-card",
                style: { "--stagger-idx": childIdx }
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    if (child.thumb) {
                      _push2(`<img${ssrRenderAttr("src", child.thumb)}${ssrRenderAttr("alt", unref(textFor)(child.label))} class="dropdown-thumb" data-v-e7839a3e${_scopeId}>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`<span class="dropdown-card__label" data-v-e7839a3e${_scopeId}>${ssrInterpolate(unref(textFor)(child.label))}</span>`);
                  } else {
                    return [
                      child.thumb ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: child.thumb,
                        alt: unref(textFor)(child.label),
                        class: "dropdown-thumb"
                      }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                      createVNode("span", { class: "dropdown-card__label" }, toDisplayString(unref(textFor)(child.label)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            });
            _push(`<!--]--></div>`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></nav></div><div class="header-actions desktop-only" data-v-e7839a3e>`);
      if (isHomeRoute.value) {
        _push(`<!--[--><div class="locale-menu" data-v-e7839a3e><button type="button" class="header-utility header-utility--icon" aria-label="Language switcher" data-v-e7839a3e><span class="header-utility__icon" aria-hidden="true" data-v-e7839a3e><svg viewBox="0 0 24 24" fill="none" data-v-e7839a3e><circle cx="12" cy="12" r="8.25" stroke="currentColor" stroke-width="1.5" data-v-e7839a3e></circle><path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.5" data-v-e7839a3e></path><path d="M12 3.75C14.49 5.91 15.9 8.9 15.9 12C15.9 15.1 14.49 18.09 12 20.25C9.51 18.09 8.1 15.1 8.1 12C8.1 8.9 9.51 5.91 12 3.75Z" stroke="currentColor" stroke-width="1.5" data-v-e7839a3e></path></svg></span></button>`);
        if (localeOpen.value) {
          _push(`<div class="locale-menu__panel" data-v-e7839a3e><!--[-->`);
          ssrRenderList(unref(locales), (localeItem) => {
            _push(ssrRenderComponent(_component_NuxtLink, {
              key: localeItem.code,
              to: unref(switchLocalePath)(localeItem.code),
              class: ["locale-menu__item", { active: unref(locale).code === localeItem.code }]
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
        _push(`</div><button type="button" class="header-utility" data-v-e7839a3e><span class="header-utility__icon" aria-hidden="true" data-v-e7839a3e><svg viewBox="0 0 24 24" fill="none" data-v-e7839a3e><path d="M12 12C14.0711 12 15.75 10.3211 15.75 8.25C15.75 6.17893 14.0711 4.5 12 4.5C9.92893 4.5 8.25 6.17893 8.25 8.25C8.25 10.3211 9.92893 12 12 12Z" stroke="currentColor" stroke-width="1.5" data-v-e7839a3e></path><path d="M5.25 19.5C6.35381 16.8787 8.95354 15 12 15C15.0465 15 17.6462 16.8787 18.75 19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-e7839a3e></path></svg></span> ${ssrInterpolate(loginLabel.value)}</button>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(buildPath)(currentModel.value?.slug ?? "titan.html"),
          class: "header-cta header-cta--ghost"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(configLabel.value)}`);
            } else {
              return [
                createTextVNode(toDisplayString(configLabel.value), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(buildPath)("book-drive.html"),
          class: "header-cta header-cta--ghost"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(testDriveLabel.value)}`);
            } else {
              return [
                createTextVNode(toDisplayString(testDriveLabel.value), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(buildPath)(currentModel.value?.slug ?? "titan.html"),
          class: "header-cta header-cta--primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(orderLabel.value)}`);
            } else {
              return [
                createTextVNode(toDisplayString(orderLabel.value), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!--[--><div class="locale-picker" aria-label="Language switcher" data-v-e7839a3e><!--[-->`);
        ssrRenderList(unref(locales), (localeItem) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: localeItem.code,
            to: unref(switchLocalePath)(localeItem.code),
            class: ["locale-chip", { active: unref(locale).code === localeItem.code }]
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
        _push(`<!--]--></div><button type="button" class="header-utility" data-v-e7839a3e>${ssrInterpolate(loginLabel.value)}</button>`);
        if (currentModel.value) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(buildPath)(currentModel.value.slug),
            class: "header-cta header-cta--ghost"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(configLabel.value)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(configLabel.value), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(buildPath)("book-drive.html"),
          class: "header-cta header-cta--ghost"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(testDriveLabel.value)}`);
            } else {
              return [
                createTextVNode(toDisplayString(testDriveLabel.value), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(buildPath)(currentModel.value?.slug ?? "titan.html"),
          class: "header-cta header-cta--primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(orderLabel.value)}`);
            } else {
              return [
                createTextVNode(toDisplayString(orderLabel.value), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      }
      _push(`</div><button class="${ssrRenderClass(["menu-toggle", "mobile-only", { "menu-toggle--active": mobileOpen.value }])}" type="button"${ssrRenderAttr("aria-expanded", mobileOpen.value ? "true" : "false")} aria-label="Toggle menu" data-v-e7839a3e><span class="menu-toggle__line" data-v-e7839a3e></span><span class="menu-toggle__line" data-v-e7839a3e></span><span class="menu-toggle__line" data-v-e7839a3e></span></button></div>`);
      if (mobileOpen.value) {
        _push(`<div class="mobile-panel" data-v-e7839a3e><div class="container mobile-stack" data-v-e7839a3e><!--[-->`);
        ssrRenderList(unref(navigation), (item) => {
          _push(`<div class="mobile-group" data-v-e7839a3e>`);
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
            _push(`<div class="mobile-label" data-v-e7839a3e>${ssrInterpolate(unref(textFor)(item.label))}</div>`);
          }
          if (item.children?.length) {
            _push(`<div class="mobile-children" data-v-e7839a3e><!--[-->`);
            ssrRenderList(item.children, (child) => {
              _push(ssrRenderComponent(_component_NuxtLink, {
                key: child.slug ?? child.label.en,
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
        _push(`<!--]--><div class="mobile-locales" data-v-e7839a3e><!--[-->`);
        ssrRenderList(unref(locales), (localeItem) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: localeItem.code,
            to: unref(switchLocalePath)(localeItem.code),
            class: ["locale-chip", { active: unref(locale).code === localeItem.code }],
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
        _push(`<!--]--></div><div class="mobile-cta-row" data-v-e7839a3e>`);
        if (currentModel.value) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(buildPath)(currentModel.value.slug),
            class: "header-cta header-cta--ghost",
            onClick: ($event) => mobileOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(configLabel.value)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(configLabel.value), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(buildPath)("book-drive.html"),
          class: "header-cta header-cta--ghost",
          onClick: ($event) => mobileOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(testDriveLabel.value)}`);
            } else {
              return [
                createTextVNode(toDisplayString(testDriveLabel.value), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(buildPath)(currentModel.value?.slug ?? "titan.html"),
          class: "header-cta header-cta--primary",
          onClick: ($event) => mobileOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(orderLabel.value)}`);
            } else {
              return [
                createTextVNode(toDisplayString(orderLabel.value), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (mobileOpen.value) {
        _push(`<div class="mobile-panel-mask mobile-only" data-v-e7839a3e></div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeGroup.value && !mobileOpen.value) {
        _push(`<div class="header-menu-mask desktop-only" data-v-e7839a3e></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/SiteHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SiteHeader = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-e7839a3e"]]);
const _imports_0 = publicAssetsURL("/static/assets/qr-code-a2fb7ce9.png");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppSidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const currentLocale = currentLocaleInfo();
    const { buildPath } = useSiteContent();
    const expanded = ref(false);
    const showConsultation = ref(false);
    const showApp = ref(false);
    const scrolled = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<aside${ssrRenderAttrs(mergeProps({
        class: ["app-sidebar", {
          "app-sidebar--rtl": unref(currentLocale).dir === "rtl",
          "app-sidebar--expanded": expanded.value
        }]
      }, _attrs))} data-v-7b30478a><ul class="sidebar-list" data-v-7b30478a><li class="sidebar-item group" data-v-7b30478a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(buildPath)("book-drive.html"),
        class: "sidebar-link",
        "aria-label": _ctx.$t("global.sidebar.testDrive")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="sidebar-icon" data-v-7b30478a${_scopeId}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-7b30478a${_scopeId}><path d="M4 18h16M4 14h16M6 10l2-4h8l2 4M3 10h18M5 14v4M19 14v4" stroke-linecap="round" stroke-linejoin="round" data-v-7b30478a${_scopeId}></path></svg></div><span class="sidebar-tooltip" data-v-7b30478a${_scopeId}>${ssrInterpolate(_ctx.$t("global.sidebar.testDrive"))}</span>`);
          } else {
            return [
              createVNode("div", { class: "sidebar-icon" }, [
                (openBlock(), createBlock("svg", {
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "1.5"
                }, [
                  createVNode("path", {
                    d: "M4 18h16M4 14h16M6 10l2-4h8l2 4M3 10h18M5 14v4M19 14v4",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ]))
              ]),
              createVNode("span", { class: "sidebar-tooltip" }, toDisplayString(_ctx.$t("global.sidebar.testDrive")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="sidebar-item group" data-v-7b30478a><button type="button" class="sidebar-link"${ssrRenderAttr("aria-label", _ctx.$t("global.sidebar.consultation"))} data-v-7b30478a><div class="sidebar-icon" data-v-7b30478a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-7b30478a><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.06 12.06 0 00.57 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.06 12.06 0 002.81.57A2 2 0 0122 16.92z" data-v-7b30478a></path></svg></div><span class="sidebar-tooltip" data-v-7b30478a>${ssrInterpolate(_ctx.$t("global.sidebar.consultation"))}</span></button>`);
      if (showConsultation.value) {
        _push(`<div class="sidebar-panel sidebar-panel--consult" data-v-7b30478a><div class="panel-inner" data-v-7b30478a><h4 class="panel-title" data-v-7b30478a>${ssrInterpolate(_ctx.$t("global.sidebar.hotlineTitle"))}</h4><p class="panel-hotline" data-v-7b30478a>400-888-8488</p><p class="panel-hours" data-v-7b30478a>${ssrInterpolate(_ctx.$t("global.sidebar.hotlineHours"))}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li class="sidebar-item group" data-v-7b30478a><button type="button" class="sidebar-link"${ssrRenderAttr("aria-label", _ctx.$t("global.sidebar.app"))} data-v-7b30478a><div class="sidebar-icon" data-v-7b30478a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-7b30478a><rect x="3" y="3" width="18" height="18" rx="2" ry="2" data-v-7b30478a></rect><path d="M7 7h4v4H7zM7 13h4v4H7zM13 7h4v4h-4zM13 13h1v1h-1zM16 13h1v1h-1zM14 14h1v1h-1zM13 15h1v1h-1zM16 15h1v1h-1zM15 16h1v1h-1zM13 17h1v1h-1zM15 17h2v1h-2z" data-v-7b30478a></path></svg></div><span class="sidebar-tooltip" data-v-7b30478a>${ssrInterpolate(_ctx.$t("global.sidebar.app"))}</span></button>`);
      if (showApp.value) {
        _push(`<div class="sidebar-panel sidebar-panel--qr" data-v-7b30478a><div class="panel-inner" data-v-7b30478a><div class="panel-qr-box" data-v-7b30478a><img${ssrRenderAttr("src", _imports_0)} alt="QR Code" class="panel-qr" data-v-7b30478a></div><p class="panel-copy" data-v-7b30478a>${ssrInterpolate(_ctx.$t("global.footer.appEyebrow"))}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li class="sidebar-item group" data-v-7b30478a><button type="button" class="sidebar-link"${ssrRenderAttr("aria-label", _ctx.$t("global.sidebar.feedback"))} data-v-7b30478a><div class="sidebar-icon" data-v-7b30478a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-7b30478a><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" data-v-7b30478a></path></svg></div><span class="sidebar-tooltip" data-v-7b30478a>${ssrInterpolate(_ctx.$t("global.sidebar.feedback"))}</span></button></li></ul><button class="sidebar-top" aria-label="Back to top" style="${ssrRenderStyle(scrolled.value ? null : { display: "none" })}" data-v-7b30478a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-7b30478a><path d="M18 15l-6-6-6 6" data-v-7b30478a></path></svg></button></aside>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/AppSidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-7b30478a"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ScrollDots",
  __ssrInlineRender: true,
  setup(__props) {
    const currentLocale = currentLocaleInfo();
    const dots = ref([]);
    const activeId = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: ["scroll-dots", { "scroll-dots--rtl": unref(currentLocale).dir === "rtl" }]
      }, _attrs))} data-v-941849f2><div class="dots-container" data-v-941849f2><!--[-->`);
      ssrRenderList(dots.value, (dot) => {
        _push(`<button type="button" class="${ssrRenderClass(["dot-item", { active: activeId.value === dot.id }])}"${ssrRenderAttr("title", dot.label)} data-v-941849f2><span class="dot-inner" data-v-941849f2></span>`);
        if (activeId.value === dot.id) {
          _push(`<span class="dot-label" data-v-941849f2>${ssrInterpolate(dot.label)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
      });
      _push(`<!--]--></div></nav>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/ScrollDots.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ScrollDots = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-941849f2"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { resolveCurrentPage } = useSiteContent();
    const currentLocale = currentLocaleInfo();
    const route = useRoute();
    const isLegacyParityPage = computed(
      () => ["store.html", "service.html", "energy.html"].some((slug) => route.path.endsWith(`/${slug}`) || route.path === `/${slug}`)
    );
    const currentPage = computed(() => resolveCurrentPage());
    const isSnappingPage = computed(() => {
      if (!currentPage.value) return true;
      return currentPage.value.kind === "model";
    });
    useHead(() => ({
      htmlAttrs: {
        lang: isLegacyParityPage.value ? "en" : currentLocale.value.code,
        dir: isLegacyParityPage.value ? "ltr" : currentLocale.value.dir
      },
      bodyAttrs: {
        class: `locale-${isLegacyParityPage.value ? "en" : currentLocale.value.code}`
      }
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["site-shell", { "is-rtl": unref(currentLocale).dir === "rtl" && !isLegacyParityPage.value }]
      }, _attrs))} data-v-1b918486>`);
      if (!isLegacyParityPage.value) {
        _push(ssrRenderComponent(SiteHeader, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<main class="${ssrRenderClass(["site-main", { "site-main--legacy": isLegacyParityPage.value, "site-main--snapping": isSnappingPage.value }])}" data-v-1b918486>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      if (!isLegacyParityPage.value) {
        _push(ssrRenderComponent(AppSidebar, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (isSnappingPage.value) {
        _push(ssrRenderComponent(ScrollDots, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!isLegacyParityPage.value) {
        _push(ssrRenderComponent(SiteFooter, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
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
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1b918486"]]);
export {
  _default as default
};
//# sourceMappingURL=default-CNBEC22z.js.map
