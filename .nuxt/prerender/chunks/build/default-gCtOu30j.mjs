import { defineComponent, mergeProps, unref, ref, computed, watch, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'file://E:/voyah-nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'file://E:/voyah-nuxt/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, u as useRoute, a as __nuxt_component_0$1 } from './server.mjs';
import { c as currentLocaleInfo, a as useHead, u as useSiteContent } from './useSiteContent-C8SHHNnW.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import 'file://E:/voyah-nuxt/node_modules/ofetch/dist/node.mjs';
import 'file://E:/voyah-nuxt/node_modules/hookable/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/unctx/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/h3/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/vue-router/vue-router.node.mjs';
import 'file://E:/voyah-nuxt/node_modules/defu/dist/defu.mjs';
import 'file://E:/voyah-nuxt/node_modules/klona/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/destr/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/ohash/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import '../_/nitro.mjs';
import 'file://E:/voyah-nuxt/node_modules/node-mock-http/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/unstorage/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'file:///E:/voyah-nuxt/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://E:/voyah-nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://E:/voyah-nuxt/node_modules/scule/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://E:/voyah-nuxt/node_modules/pathe/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/unhead/dist/server.mjs';
import 'file://E:/voyah-nuxt/node_modules/devalue/index.js';
import 'file://E:/voyah-nuxt/node_modules/unhead/dist/plugins.mjs';
import 'file://E:/voyah-nuxt/node_modules/unhead/dist/utils.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SiteFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { footerColumns, footerContact, footerLegalLinks, buildPath, locale, textFor } = useSiteContent();
    const appEyebrow = computed(() => {
      if (locale.value.code === "fr") return "T\xE9l\xE9charger l application Voyah";
      if (locale.value.code === "ar") return "\u062D\u0645\u0651\u0644 \u062A\u0637\u0628\u064A\u0642 Voyah";
      return "Download the Voyah App";
    });
    const appLabel = computed(() => locale.value.code === "ar" ? "\u0627\u0644\u062A\u0637\u0628\u064A\u0642" : "App");
    const miniLabel = computed(() => {
      if (locale.value.code === "fr") return "Mini-programme";
      if (locale.value.code === "ar") return "\u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C \u0627\u0644\u0645\u0635\u063A\u0631";
      return "Mini program";
    });
    const miniCopy = computed(() => {
      if (locale.value.code === "fr") return "Programme officiel WeChat";
      if (locale.value.code === "ar") return "\u0628\u0631\u0646\u0627\u0645\u062C WeChat \u0627\u0644\u0631\u0633\u0645\u064A";
      return "Official WeChat mini program";
    });
    const versionLabel = computed(() => "Android 5.5.0  iOS 5.5.0  HarmonyOS 1.9.0");
    const companyLabel = computed(() => {
      if (locale.value.code === "fr") return "Voyah Automotive Technology Co., Ltd.";
      if (locale.value.code === "ar") return "\u0634\u0631\u0643\u0629 Voyah Automotive Technology Co., Ltd.";
      return "Voyah Automotive Technology Co., Ltd.";
    });
    const phoneLabel = computed(() => {
      if (locale.value.code === "fr") return "Service client: 400-888-8488";
      if (locale.value.code === "ar") return "\u062E\u062F\u0645\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621: 400-888-8488";
      return "Customer service: 400-888-8488";
    });
    const emailLabel = computed(() => {
      if (locale.value.code === "fr") return "E-mail: voyah-callcenter@voyah.com.cn";
      if (locale.value.code === "ar") return "\u0627\u0644\u0628\u0631\u064A\u062F: voyah-callcenter@voyah.com.cn";
      return "Email: voyah-callcenter@voyah.com.cn";
    });
    const recordLabel = computed(() => {
      if (locale.value.code === "fr") return "Hubei ICP 2021016773-2";
      if (locale.value.code === "ar") return "\u0631\u0642\u0645 Hubei ICP 2021016773-2";
      return "Hubei ICP 2021016773-2";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "site-footer" }, _attrs))} data-v-fc2913e1><div class="footer-app-shell" data-v-fc2913e1><div class="container footer-app" data-v-fc2913e1><div class="footer-app-copy" data-v-fc2913e1><p class="footer-kicker" data-v-fc2913e1>${ssrInterpolate(unref(appEyebrow))}</p><h2 data-v-fc2913e1>${ssrInterpolate(unref(textFor)(unref(footerContact).title))}</h2><p class="footer-copy" data-v-fc2913e1>${ssrInterpolate(unref(textFor)(unref(footerContact).body))}</p></div><div class="footer-qr" data-v-fc2913e1><figure data-v-fc2913e1><img${ssrRenderAttr("src", unref(footerContact).appCode)} alt="Voyah app code" data-v-fc2913e1><figcaption data-v-fc2913e1>${ssrInterpolate(unref(appLabel))}</figcaption><p class="footer-qr-copy" data-v-fc2913e1>${ssrInterpolate(unref(versionLabel))}</p></figure><figure data-v-fc2913e1><img${ssrRenderAttr("src", unref(footerContact).miniProgramCode)} alt="Voyah mini program code" data-v-fc2913e1><figcaption data-v-fc2913e1>${ssrInterpolate(unref(miniLabel))}</figcaption><p class="footer-qr-copy" data-v-fc2913e1>${ssrInterpolate(unref(miniCopy))}</p></figure></div></div></div><div class="container footer-grid" data-v-fc2913e1><div class="footer-columns" data-v-fc2913e1><!--[-->`);
      ssrRenderList(unref(footerColumns), (column) => {
        _push(`<section data-v-fc2913e1><h3 data-v-fc2913e1>${ssrInterpolate(unref(textFor)(column.title))}</h3><!--[-->`);
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
      _push(`<!--]--></div><div class="footer-company" data-v-fc2913e1><span data-v-fc2913e1>${ssrInterpolate(unref(companyLabel))}</span><span data-v-fc2913e1>${ssrInterpolate(unref(phoneLabel))}</span><span data-v-fc2913e1>${ssrInterpolate(unref(emailLabel))}</span></div><div class="footer-bottom" data-v-fc2913e1><div class="footer-legal" data-v-fc2913e1><!--[-->`);
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
      _push(`<!--]--></div><div class="footer-records" data-v-fc2913e1><span data-v-fc2913e1>${ssrInterpolate(unref(recordLabel))}</span><span data-v-fc2913e1>Copyright \xA9 2021 Voyah.com.cn All rights reserved.</span></div></div></div></footer>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/SiteFooter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SiteFooter = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-fc2913e1"]]);
const _imports_0 = publicAssetsURL("/sitelogo/pc/brand.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SiteHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, locales, navigation, buildPath, switchLocalePath, textFor, resolveCurrentPage } = useSiteContent();
    const route = useRoute();
    const mobileOpen = ref(false);
    const activeGroup = ref(null);
    const localeOpen = ref(false);
    const currentPage = computed(() => resolveCurrentPage());
    const currentModel = computed(() => {
      var _a;
      return ((_a = currentPage.value) == null ? void 0 : _a.kind) === "model" ? currentPage.value : null;
    });
    const scrollY = ref(0);
    const isHomeRoute = computed(() => !currentPage.value);
    const isTransparent = computed(() => isHomeRoute.value && scrollY.value < 44 && !mobileOpen.value);
    const isScrolled = computed(() => scrollY.value > 28 || !isHomeRoute.value);
    const copy = (en, fr, ar) => ({ en, fr, ar });
    const loginLabel = computed(() => {
      if (locale.value.code === "fr") return "Connexion";
      if (locale.value.code === "ar") return "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644";
      return "Login";
    });
    const configLabel = computed(() => {
      if (locale.value.code === "fr") return "Voir toutes les configurations";
      if (locale.value.code === "ar") return "\u0643\u0644 \u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062A";
      return "All configs";
    });
    const testDriveLabel = computed(() => {
      if (locale.value.code === "fr") return "R\xE9server un essai";
      if (locale.value.code === "ar") return "\u062A\u062C\u0631\u0628\u0629 \u0642\u064A\u0627\u062F\u0629";
      return "Test drive";
    });
    const orderLabel = computed(() => {
      if (locale.value.code === "fr") return "Commander";
      if (locale.value.code === "ar") return "\u0627\u0637\u0644\u0628 \u0627\u0644\u0622\u0646";
      return "Order now";
    });
    const modelMenuSections = [
      {
        key: "sedan",
        title: copy("Sedans", "Berlines", "\u0627\u0644\u0633\u064A\u062F\u0627\u0646"),
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
        title: copy("SUVs", "SUV", "\u0633\u064A\u0627\u0631\u0627\u062A SUV"),
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
            label: copy("New Voyah Courage", "Nouveau Voyah Courage", "Voyah Courage \u0627\u0644\u062C\u062F\u064A\u062F"),
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
        title: copy("MPVs", "MPV", "\u0633\u064A\u0627\u0631\u0627\u062A MPV"),
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
            label: copy("Voyah Dreamer Mountain River", "Voyah Dreamer Montagne-Rivi\xE8re", "Voyah Dreamer Mountain River"),
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
      title: copy("Tools", "Outils", "\u0627\u0644\u0623\u062F\u0648\u0627\u062A"),
      items: [
        { slug: "book-drive.html", label: copy("Book a test drive", "R\xE9server un essai", "\u0627\u062D\u062C\u0632 \u062A\u062C\u0631\u0628\u0629 \u0642\u064A\u0627\u062F\u0629") },
        { slug: "titan.html", label: copy("Configure", "Configurer", "\u0627\u0644\u062A\u0647\u064A\u0626\u0629") }
      ]
    };
    const serviceChildren = computed(() => {
      var _a, _b;
      const items = Array.isArray(navigation.value) ? navigation.value : [];
      return (_b = (_a = items.find((item) => item.label.en === "Voyah Service")) == null ? void 0 : _a.children) != null ? _b : [];
    });
    const aboutChildren = computed(() => {
      var _a, _b;
      const items = Array.isArray(navigation.value) ? navigation.value : [];
      return (_b = (_a = items.find((item) => item.label.en === "About Voyah")) == null ? void 0 : _a.children) != null ? _b : [];
    });
    const serviceMenu = computed(() => ({
      primaryTitle: copy("Service", "Service", "\u0627\u0644\u062E\u062F\u0645\u0629"),
      primaryItems: serviceChildren.value.slice(0, 2).map((child, index) => ({
        ...child,
        thumb: [
          "/website/navigationbar/image/984a8ea8-534a-46fb-b57c-b87ebd915faf1770618777959.png",
          "/website/navigationbar/image/c0159214-6002-494d-a913-44771be8f4891770618857442.png"
        ][index]
      })),
      secondaryTitle: copy("Related Information", "Informations associ\xE9es", "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0630\u0627\u062A \u0635\u0644\u0629"),
      secondaryItems: serviceChildren.value.slice(2)
    }));
    const aboutMenu = computed(() => ({
      primaryTitle: copy("Communication", "Communication", "\u0627\u0644\u062A\u0648\u0627\u0635\u0644"),
      primaryItems: aboutChildren.value.slice(0, 1).map((child) => ({
        ...child,
        thumb: "/website/navigationbar/image/a0423ec8-30e1-431b-a9fa-d9bea9d0c5701770622210658.png"
      })),
      secondaryTitle: copy("Cooperation", "Coop\xE9ration", "\u0627\u0644\u062A\u0639\u0627\u0648\u0646"),
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
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["site-header", {
          "site-header--mobile-open": mobileOpen.value,
          "site-header--transparent": unref(isTransparent),
          "site-header--scrolled": unref(isScrolled)
        }]
      }, _attrs))} data-v-0bd4bfa6><div class="container header-bar" data-v-0bd4bfa6><div class="header-left" data-v-0bd4bfa6>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(buildPath)(),
        class: "brand-mark",
        "aria-label": "Voyah home"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Voyah" data-v-0bd4bfa6${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Voyah"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(currentModel)) {
        _push(`<div class="header-model desktop-only" data-v-0bd4bfa6><img${ssrRenderAttr("src", unref(currentModel).logo)}${ssrRenderAttr("alt", unref(textFor)(unref(currentModel).title))} class="header-model__logo" data-v-0bd4bfa6><div class="header-model__meta" data-v-0bd4bfa6><span class="header-model__name" data-v-0bd4bfa6>${ssrInterpolate(unref(textFor)(unref(currentModel).title))}</span><span class="header-model__price" data-v-0bd4bfa6>${ssrInterpolate(unref(textFor)(unref(currentModel).price))}</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<nav class="header-nav desktop-only" aria-label="Primary navigation" data-v-0bd4bfa6><!--[-->`);
      ssrRenderList(unref(navigation), (item) => {
        var _a2;
        _push(`<div class="nav-group" data-v-0bd4bfa6>`);
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
          _push(`<button type="button" class="${ssrRenderClass([{ active: activeGroup.value === item.label.en || unref(isHomeRoute) && item.label.en === "Models" }, "nav-link nav-button"])}" data-v-0bd4bfa6>${ssrInterpolate(unref(textFor)(item.label))}</button>`);
        }
        if ((_a2 = item.children) == null ? void 0 : _a2.length) {
          _push(`<div class="${ssrRenderClass([
            "nav-dropdown",
            {
              open: activeGroup.value === item.label.en,
              "nav-dropdown--models": item.label.en === "Models"
            }
          ])}" data-v-0bd4bfa6>`);
          if (item.label.en === "Models") {
            _push(`<div class="models-dropdown" data-v-0bd4bfa6><div class="models-dropdown__main" data-v-0bd4bfa6><!--[-->`);
            ssrRenderList(modelMenuSections, (section) => {
              _push(`<div class="models-section" data-v-0bd4bfa6><h5 class="models-section__title" data-v-0bd4bfa6>${ssrInterpolate(unref(textFor)(section.title))}</h5><div class="models-grid" data-v-0bd4bfa6><!--[-->`);
              ssrRenderList(section.items, (entry) => {
                _push(ssrRenderComponent(_component_NuxtLink, {
                  key: entry.slug,
                  to: unref(buildPath)(entry.slug),
                  class: "models-card"
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(`<div class="models-card__media" data-v-0bd4bfa6${_scopeId}><img${ssrRenderAttr("src", entry.image)}${ssrRenderAttr("alt", unref(textFor)(entry.label))} class="models-card__image" data-v-0bd4bfa6${_scopeId}></div><p class="models-card__name" data-v-0bd4bfa6${_scopeId}>${ssrInterpolate(unref(textFor)(entry.label))}</p>`);
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
            _push(`<!--]--></div><aside class="models-dropdown__tools" data-v-0bd4bfa6><div class="models-tools" data-v-0bd4bfa6><div class="models-tools__title" data-v-0bd4bfa6>${ssrInterpolate(unref(textFor)(toolMenu.title))}</div><div class="models-tools__list" data-v-0bd4bfa6><!--[-->`);
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
            _push(`<div class="grouped-dropdown" data-v-0bd4bfa6><div class="grouped-dropdown__main" data-v-0bd4bfa6><h5 class="grouped-dropdown__title" data-v-0bd4bfa6>${ssrInterpolate(unref(textFor)(item.label.en === "Voyah Service" ? unref(serviceMenu).primaryTitle : unref(aboutMenu).primaryTitle))}</h5><div class="grouped-dropdown__feature-list" data-v-0bd4bfa6><!--[-->`);
            ssrRenderList(item.label.en === "Voyah Service" ? unref(serviceMenu).primaryItems : unref(aboutMenu).primaryItems, (child) => {
              _push(ssrRenderComponent(_component_NuxtLink, {
                key: child.slug,
                to: unref(buildPath)(child.slug),
                class: "grouped-dropdown__feature"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    if (child.thumb) {
                      _push2(`<img${ssrRenderAttr("src", child.thumb)}${ssrRenderAttr("alt", unref(textFor)(child.label))} class="grouped-dropdown__feature-image" data-v-0bd4bfa6${_scopeId}>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`<span class="grouped-dropdown__feature-label" data-v-0bd4bfa6${_scopeId}>${ssrInterpolate(unref(textFor)(child.label))}</span>`);
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
            _push(`<!--]--></div></div><aside class="grouped-dropdown__aside" data-v-0bd4bfa6><div class="grouped-dropdown__aside-title" data-v-0bd4bfa6>${ssrInterpolate(unref(textFor)(item.label.en === "Voyah Service" ? unref(serviceMenu).secondaryTitle : unref(aboutMenu).secondaryTitle))}</div><div class="grouped-dropdown__aside-list" data-v-0bd4bfa6><!--[-->`);
            ssrRenderList(item.label.en === "Voyah Service" ? unref(serviceMenu).secondaryItems : unref(aboutMenu).secondaryItems, (child) => {
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
            _push(`<div class="dropdown-inner" data-v-0bd4bfa6><!--[-->`);
            ssrRenderList(item.children, (child) => {
              var _a3;
              _push(ssrRenderComponent(_component_NuxtLink, {
                key: (_a3 = child.slug) != null ? _a3 : item.label.en,
                to: unref(buildPath)(child.slug),
                class: "dropdown-card"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    if (child.thumb) {
                      _push2(`<img${ssrRenderAttr("src", child.thumb)}${ssrRenderAttr("alt", unref(textFor)(child.label))} class="dropdown-thumb" data-v-0bd4bfa6${_scopeId}>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`<span class="dropdown-card__label" data-v-0bd4bfa6${_scopeId}>${ssrInterpolate(unref(textFor)(child.label))}</span>`);
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
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></nav></div><div class="header-actions desktop-only" data-v-0bd4bfa6>`);
      if (unref(isHomeRoute)) {
        _push(`<!--[--><div class="locale-menu" data-v-0bd4bfa6><button type="button" class="header-utility header-utility--icon" aria-label="Language switcher" data-v-0bd4bfa6><span class="header-utility__icon" aria-hidden="true" data-v-0bd4bfa6><svg viewBox="0 0 24 24" fill="none" data-v-0bd4bfa6><circle cx="12" cy="12" r="8.25" stroke="currentColor" stroke-width="1.5" data-v-0bd4bfa6></circle><path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.5" data-v-0bd4bfa6></path><path d="M12 3.75C14.49 5.91 15.9 8.9 15.9 12C15.9 15.1 14.49 18.09 12 20.25C9.51 18.09 8.1 15.1 8.1 12C8.1 8.9 9.51 5.91 12 3.75Z" stroke="currentColor" stroke-width="1.5" data-v-0bd4bfa6></path></svg></span></button>`);
        if (localeOpen.value) {
          _push(`<div class="locale-menu__panel" data-v-0bd4bfa6><!--[-->`);
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
        _push(`</div><button type="button" class="header-utility" data-v-0bd4bfa6><span class="header-utility__icon" aria-hidden="true" data-v-0bd4bfa6><svg viewBox="0 0 24 24" fill="none" data-v-0bd4bfa6><path d="M12 12C14.0711 12 15.75 10.3211 15.75 8.25C15.75 6.17893 14.0711 4.5 12 4.5C9.92893 4.5 8.25 6.17893 8.25 8.25C8.25 10.3211 9.92893 12 12 12Z" stroke="currentColor" stroke-width="1.5" data-v-0bd4bfa6></path><path d="M5.25 19.5C6.35381 16.8787 8.95354 15 12 15C15.0465 15 17.6462 16.8787 18.75 19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-0bd4bfa6></path></svg></span> ${ssrInterpolate(unref(loginLabel))}</button>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(buildPath)((_b = (_a = unref(currentModel)) == null ? void 0 : _a.slug) != null ? _b : "titan.html"),
          class: "header-cta header-cta--ghost"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(configLabel))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(configLabel)), 1)
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
              _push2(`${ssrInterpolate(unref(testDriveLabel))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(testDriveLabel)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(buildPath)((_d = (_c = unref(currentModel)) == null ? void 0 : _c.slug) != null ? _d : "titan.html"),
          class: "header-cta header-cta--primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(orderLabel))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(orderLabel)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!--[--><div class="locale-picker" aria-label="Language switcher" data-v-0bd4bfa6><!--[-->`);
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
        _push(`<!--]--></div><button type="button" class="header-utility" data-v-0bd4bfa6>${ssrInterpolate(unref(loginLabel))}</button>`);
        if (unref(currentModel)) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(buildPath)(unref(currentModel).slug),
            class: "header-cta header-cta--ghost"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(configLabel))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(configLabel)), 1)
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
              _push2(`${ssrInterpolate(unref(testDriveLabel))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(testDriveLabel)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(buildPath)((_f = (_e = unref(currentModel)) == null ? void 0 : _e.slug) != null ? _f : "titan.html"),
          class: "header-cta header-cta--primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(orderLabel))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(orderLabel)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      }
      _push(`</div><button class="${ssrRenderClass(["menu-toggle", "mobile-only", { "menu-toggle--active": mobileOpen.value }])}" type="button"${ssrRenderAttr("aria-expanded", mobileOpen.value ? "true" : "false")} aria-label="Toggle menu" data-v-0bd4bfa6><span class="menu-toggle__line" data-v-0bd4bfa6></span><span class="menu-toggle__line" data-v-0bd4bfa6></span><span class="menu-toggle__line" data-v-0bd4bfa6></span></button></div>`);
      if (mobileOpen.value) {
        _push(`<div class="mobile-panel" data-v-0bd4bfa6><div class="container mobile-stack" data-v-0bd4bfa6><!--[-->`);
        ssrRenderList(unref(navigation), (item) => {
          var _a2;
          _push(`<div class="mobile-group" data-v-0bd4bfa6>`);
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
            _push(`<div class="mobile-label" data-v-0bd4bfa6>${ssrInterpolate(unref(textFor)(item.label))}</div>`);
          }
          if ((_a2 = item.children) == null ? void 0 : _a2.length) {
            _push(`<div class="mobile-children" data-v-0bd4bfa6><!--[-->`);
            ssrRenderList(item.children, (child) => {
              var _a3;
              _push(ssrRenderComponent(_component_NuxtLink, {
                key: (_a3 = child.slug) != null ? _a3 : child.label.en,
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
        _push(`<!--]--><div class="mobile-locales" data-v-0bd4bfa6><!--[-->`);
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
        _push(`<!--]--></div><div class="mobile-cta-row" data-v-0bd4bfa6>`);
        if (unref(currentModel)) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(buildPath)(unref(currentModel).slug),
            class: "header-cta header-cta--ghost",
            onClick: ($event) => mobileOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(configLabel))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(configLabel)), 1)
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
              _push2(`${ssrInterpolate(unref(testDriveLabel))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(testDriveLabel)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(buildPath)((_h = (_g = unref(currentModel)) == null ? void 0 : _g.slug) != null ? _h : "titan.html"),
          class: "header-cta header-cta--primary",
          onClick: ($event) => mobileOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(orderLabel))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(orderLabel)), 1)
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
        _push(`<div class="mobile-panel-mask mobile-only" data-v-0bd4bfa6></div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeGroup.value && !mobileOpen.value) {
        _push(`<div class="header-menu-mask desktop-only" data-v-0bd4bfa6></div>`);
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
const SiteHeader = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0bd4bfa6"]]);
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
//# sourceMappingURL=default-gCtOu30j.mjs.map
