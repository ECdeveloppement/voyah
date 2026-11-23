import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, ref, watch, nextTick, useSSRContext } from 'file://E:/voyah/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'file://E:/voyah/node_modules/vue/server-renderer/index.mjs';
import { c as currentLocaleInfo, a as useHead, u as useSiteContent } from './useSiteContent-DZMgAnrU.mjs';
import { _ as _export_sfc, u as useRoute, s as socialLinks, g as dealerContact, e as __nuxt_component_0$1, i as t$1 } from './server.mjs';
import { _ as _imports_0 } from './virtual_public-dXaDTdmE.mjs';
import { c as useSiteSeo, b as useCookieConsent } from './useSeo-H-hiPPm6.mjs';
import { S as SiteHeader } from './SiteHeader-BV1li0VI.mjs';
import '../_/renderer.mjs';
import 'file://E:/voyah/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://E:/voyah/node_modules/h3/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://E:/voyah/node_modules/destr/dist/index.mjs';
import 'file://E:/voyah/node_modules/hookable/dist/index.mjs';
import 'file://E:/voyah/node_modules/ofetch/dist/node.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SiteFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, footerLegalLinks, buildPath, textFor } = useSiteContent();
    const { allowsExternalMaps } = useCookieConsent();
    const labels = {
      socialTitle: t$1("Social Media", "R\xE9seaux sociaux", "\u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062A\u0648\u0627\u0635\u0644"),
      socialSub: t$1("Follow our channels", "Suivez nos cha\xEEnes", "\u062A\u0627\u0628\u0639\u0648\u0627 \u0642\u0646\u0648\u0627\u062A\u0646\u0627"),
      contactTitle: t$1("Contact Us", "Nous contacter", "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627"),
      locationLabel: t$1("Location", "Localisation", "\u0627\u0644\u0645\u0648\u0642\u0639"),
      mapConsent: t$1("To display Google Maps, please accept optional cookies.", "Pour afficher Google Maps, veuillez accepter les cookies facultatifs.", "\u0644\u0639\u0631\u0636 \u062E\u0631\u0627\u0626\u0637 Google\u060C \u064A\u0631\u062C\u0649 \u0642\u0628\u0648\u0644 \u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637 \u0627\u0644\u0627\u062E\u062A\u064A\u0627\u0631\u064A\u0629."),
      cookieSettings: t$1("Cookie settings", "G\xE9rer les cookies", "\u0625\u062F\u0627\u0631\u0629 \u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637"),
      phoneLabel: t$1("Call us on", "Appelez-nous", "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627 \u0639\u0644\u0649"),
      emailLabel: t$1("Email us", "\xC9crivez-nous", "\u0631\u0627\u0633\u0644\u0646\u0627"),
      hoursLabel: t$1("Working hours", "Horaires", "\u0623\u0648\u0642\u0627\u062A \u0627\u0644\u0639\u0645\u0644"),
      rights: t$1("All Rights Reserved.", "Tous droits r\xE9serv\xE9s.", "\u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629.")
    };
    const glyphs = {
      phone: '<svg viewBox="0 0 512 512" fill="currentColor" aria-hidden="true"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/></svg>',
      email: '<svg viewBox="0 0 512 512" fill="currentColor" aria-hidden="true"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/></svg>',
      location: '<svg viewBox="0 0 384 512" fill="currentColor" aria-hidden="true"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg>',
      clock: '<svg viewBox="0 0 512 512" fill="currentColor" aria-hidden="true"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200s89.5-200 200-200 200 89.5 200 200-89.5 200-200 200zm45.3-135.3l-74.6-44.8a7.9 7.9 0 0 1-3.7-6.7V144c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v57.7l62.4 37.5c3.8 2.3 5 7.2 2.7 11l-9.8 13.7c-2.3 3.7-7.2 4.9-11 2.6z"/></svg>',
      whatsapp: '<svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 110.9L0 480l117.4-30.8c32.6 17.7 68.9 27 106.1 27h.1c122.4 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67-157zm-157 341.6c-33.2 0-65.7-8.9-94.5-25.7l-6.7-4-69.8 18.3L72.6 359.2l-4.4-7c-16.9-28.1-25.8-60.4-25.8-93.7 0-100.7 82.1-182.7 182.8-182.7 48.9 0 94.9 19 129.6 53.8 34.8 34.5 53.8 80.6 53.8 129.6 0 100.7-82 182.7-182.7 182.7zm99.2-135.2c-5.4-2.7-31.7-15.7-36.6-17.5-5-1.8-8.5-2.7-12.1 2.7-3.6 5.4-13.9 17.5-17 21.1-3.1 3.6-6.3 4-11.7 1.4-5.4-2.7-22.8-8.4-43.5-26.8-16.1-14.4-27-32.2-30.2-37.6-3.1-5.4-.3-8.3 2.4-11 2.5-2.5 5.4-6.3 8.1-9.4 2.7-3.1 3.6-5.4 5.4-9 1.8-3.6.9-6.7-.5-9.4-1.4-2.7-12.1-29.2-16.6-40-4.4-10.8-8.5-9.3-12.1-9.4-3.1-.1-6.7-.1-10.3-.1-3.6 0-9.4 1.4-14.4 6.7-4.9 5.4-18.8 18.4-18.8 44.8s19.3 52.2 22 55.9c2.7 3.6 38.1 58.2 92.3 81.5 12.9 5.6 23 8.9 30.9 11.4 13 4.1 24.8 3.5 34.2 2.1 10.4-1.6 32-13.1 36.6-25.7 4.5-12.6 4.5-23.4 3.1-25.7-1.3-2.2-4.9-3.6-10.3-6.2z"/></svg>',
      facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.0064 3H3.9936C3.4446 3 3 3.4446 3 3.9936V20.0064C3 20.5554 3.4446 21 3.9936 21H12.6138V14.0295H10.2684V11.3133H12.6138V9.309C12.6138 6.9834 14.034 5.718 16.1085 5.718C17.1021 5.718 17.9553 5.7918 18.2046 5.8251V8.2551H16.7664C15.6378 8.2551 15.42 8.7915 15.42 9.5781V11.3124H18.1101L17.7591 14.0286H15.4191V21H20.0064C20.5554 21 21 20.5554 21 20.0064V3.9936C21 3.4446 20.5554 3 20.0064 3Z"/></svg>',
      instagram: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9973 8.66525C10.1611 8.66525 8.66262 10.1638 8.66262 12C8.66262 13.8362 10.1611 15.3348 11.9973 15.3348C13.8335 15.3348 15.332 13.8362 15.332 12C15.332 10.1638 13.8335 8.66525 11.9973 8.66525ZM21.9989 12C21.9989 10.6191 22.0114 9.25064 21.9338 7.87221C21.8563 6.27113 21.4911 4.85017 20.3203 3.67938C19.147 2.50609 17.7286 2.14334 16.1275 2.06579C14.7466 1.98824 13.3782 2.00074 11.9998 2.00074C10.6189 2.00074 9.25051 1.98824 7.8721 2.06579C6.27105 2.14334 4.85012 2.50859 3.67935 3.67938C2.50608 4.85267 2.14334 6.27113 2.06579 7.87221C1.98824 9.25314 2.00074 10.6216 2.00074 12C2.00074 13.3784 1.98824 14.7494 2.06579 16.1278C2.14334 17.7289 2.50858 19.1498 3.67935 20.3206C4.85262 21.4939 6.27105 21.8567 7.8721 21.9342C9.25301 22.0118 10.6214 21.9993 11.9998 21.9993C13.3807 21.9993 14.7491 22.0118 16.1275 21.9342C17.7286 21.8567 19.1495 21.4914 20.3203 20.3206C21.4936 19.1473 21.8563 17.7289 21.9338 16.1278C22.0139 14.7494 21.9989 13.3809 21.9989 12ZM11.9973 17.131C9.15795 17.131 6.86644 14.8394 6.86644 12C6.86644 9.16058 9.15795 6.86903 11.9973 6.86903C14.8367 6.86903 17.1282 9.16058 17.1282 12C17.1282 14.8394 14.8367 17.131 11.9973 17.131ZM17.4209 8.02231C16.7123 8.02231 16.14 7.45007 16.14 6.74145C16.14 6.03283 16.7123 5.46058 17.4209 5.46058C18.1295 5.46058 18.7017 6.03283 18.7017 6.74145C18.7021 7.08128 18.5673 7.40732 18.327 7.64763C18.0867 7.88793 17.7607 8.02274 17.4209 8.02231Z"/></svg>'
    };
    const tileChannelIds = ["instagram", "facebook", "whatsapp"];
    const socialTiles = computed(
      () => tileChannelIds.map((id) => {
        const item = socialLinks.find((link) => link.id === id);
        return {
          id,
          label: item.label,
          url: item.url.trim() || (id === "whatsapp" ? `https://wa.me/${dealerContact.phone.replace(/[^\d]/g, "")}` : "")
        };
      })
    );
    const contactRows = computed(() => [
      {
        key: "phone",
        icon: "phone",
        label: labels.phoneLabel,
        ltr: true,
        lines: [
          { value: dealerContact.phone, href: dealerContact.phoneHref },
          ...dealerContact.phoneSecondary ? [{ value: dealerContact.phoneSecondary, href: dealerContact.phoneSecondaryHref }] : []
        ]
      },
      {
        key: "location",
        icon: "location",
        label: labels.locationLabel,
        ltr: false,
        lines: [{ value: textFor(dealerContact.address), href: "" }]
      },
      {
        key: "email",
        icon: "email",
        label: labels.emailLabel,
        ltr: true,
        lines: [{ value: dealerContact.email, href: `mailto:${dealerContact.email}` }]
      },
      {
        key: "hours",
        icon: "clock",
        label: labels.hoursLabel,
        ltr: false,
        lines: [{ value: textFor(dealerContact.workingHours), href: "" }]
      }
    ]);
    const mapSrc = computed(() => {
      const hl = locale.value.code === "en" ? "en-US" : locale.value.code;
      return `${dealerContact.mapUrl}${dealerContact.mapUrl.includes("?") ? "&" : "?"}output=embed&hl=${hl}&z=12`;
    });
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: "ft",
        dir: unref(locale).dir
      }, _attrs))} data-v-25e00340><div class="ft__top" data-v-25e00340><div class="ft__left" data-v-25e00340><div class="ft__social" data-v-25e00340><h4 class="ft__big" data-v-25e00340>${ssrInterpolate(unref(textFor)(labels.socialTitle))}</h4><h4 class="ft__sub" data-v-25e00340>${ssrInterpolate(unref(textFor)(labels.socialSub))}</h4><div class="ft__tiles" data-v-25e00340><!--[-->`);
      ssrRenderList(unref(socialTiles), (item) => {
        var _a;
        _push(`<a${ssrRenderAttr("href", item.url || void 0)}${ssrRenderAttr("target", item.url ? "_blank" : void 0)}${ssrRenderAttr("rel", item.url ? "noopener noreferrer" : void 0)} class="ft__tile ft__tile--ring"${ssrRenderAttr("aria-label", unref(textFor)(item.label))} data-v-25e00340>${(_a = glyphs[item.id]) != null ? _a : ""}</a>`);
      });
      _push(`<!--]--></div></div><div class="ft__brand" data-v-25e00340><img${ssrRenderAttr("src", _imports_0)}${ssrRenderAttr("alt", unref(textFor)(unref(dealerContact).partnerSubLabel))} class="ft__brand-mention-img" data-v-25e00340></div></div><div class="ft__right" data-v-25e00340><div class="ft__contact-row" data-v-25e00340><div class="ft__map" data-v-25e00340>`);
      if (unref(allowsExternalMaps)) {
        _push(`<iframe${ssrRenderAttr("src", unref(mapSrc))}${ssrRenderAttr("title", unref(textFor)(labels.locationLabel))} allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-25e00340></iframe>`);
      } else {
        _push(`<div class="ft__map-consent" data-v-25e00340><p data-v-25e00340>${ssrInterpolate(unref(textFor)(labels.mapConsent))}</p><button type="button" data-v-25e00340>${ssrInterpolate(unref(textFor)(labels.cookieSettings))}</button></div>`);
      }
      _push(`</div><div class="ft__contact" data-v-25e00340><h2 class="ft__contact-title" data-v-25e00340>${ssrInterpolate(unref(textFor)(labels.contactTitle))}</h2><!--[-->`);
      ssrRenderList(unref(contactRows), (row) => {
        var _a;
        _push(`<div class="ft__cblock" data-v-25e00340><h3 class="ft__cline" data-v-25e00340><span class="ft__cicon" data-v-25e00340>${(_a = glyphs[row.icon]) != null ? _a : ""}</span>${ssrInterpolate(unref(textFor)(row.label))}</h3><!--[-->`);
        ssrRenderList(row.lines, (line) => {
          _push(`<!--[-->`);
          if (line.href) {
            _push(`<a class="${ssrRenderClass([{ "ft__cline--ltr": row.ltr }, "ft__cline ft__cline--link"])}"${ssrRenderAttr("href", line.href)} data-v-25e00340>${ssrInterpolate(line.value)}</a>`);
          } else {
            _push(`<p class="${ssrRenderClass([{ "ft__cline--ltr": row.ltr }, "ft__cline"])}" data-v-25e00340>${ssrInterpolate(line.value)}</p>`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div><div class="ft__navrow" data-v-25e00340><nav class="ft__nav" data-v-25e00340><!--[-->`);
      ssrRenderList(unref(footerLegalLinks), (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.slug,
          to: unref(buildPath)(link.slug),
          class: "ft__nlink"
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
      _push(`<!--]--><button type="button" class="ft__nlink ft__cookie-settings" data-v-25e00340>${ssrInterpolate(unref(textFor)(labels.cookieSettings))}</button></nav></div></div></div><div class="ft__hr" data-v-25e00340></div><div class="ft__bottom" data-v-25e00340><h4 class="ft__copy" data-v-25e00340>\xA9 ${ssrInterpolate(unref(currentYear))} ${ssrInterpolate(unref(dealerContact).brandLabel)}. ${ssrInterpolate(unref(textFor)(labels.rights))}</h4></div></footer>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/SiteFooter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SiteFooter = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-25e00340"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CookieConsent",
  __ssrInlineRender: true,
  setup(__props) {
    const { isOpen } = useCookieConsent();
    const { locale, textFor, buildPath } = useSiteContent();
    const panel = ref();
    let previousFocus = null;
    const labels = {
      title: t$1("Your cookie preferences", "Vos pr\xE9f\xE9rences de cookies", "\u062A\u0641\u0636\u064A\u0644\u0627\u062A \u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637"),
      description: t$1(
        "Necessary cookies keep the website working. With your permission, Google Maps may use cookies to display maps. You can refuse and change your choice at any time.",
        "Les cookies n\xE9cessaires assurent le fonctionnement du site. Avec votre accord, Google Maps peut d\xE9poser des cookies pour afficher les cartes. Vous pouvez refuser et modifier votre choix \xE0 tout moment.",
        "\u062A\u0636\u0645\u0646 \u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637 \u0627\u0644\u0636\u0631\u0648\u0631\u064A\u0629 \u0639\u0645\u0644 \u0627\u0644\u0645\u0648\u0642\u0639. \u0628\u0645\u0648\u0627\u0641\u0642\u062A\u0643\u060C \u0642\u062F \u062A\u0633\u062A\u062E\u062F\u0645 \u062E\u0631\u0627\u0626\u0637 Google \u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637 \u0644\u0639\u0631\u0636 \u0627\u0644\u062E\u0631\u0627\u0626\u0637. \u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u0631\u0641\u0636 \u0648\u062A\u063A\u064A\u064A\u0631 \u0627\u062E\u062A\u064A\u0627\u0631\u0643 \u0641\u064A \u0623\u064A \u0648\u0642\u062A."
      ),
      accept: t$1("Accept", "Accepter", "\u0642\u0628\u0648\u0644"),
      reject: t$1("Refuse", "Refuser", "\u0631\u0641\u0636"),
      policy: t$1("Read our cookie policy", "Consulter la politique de cookies", "\u0627\u0644\u0627\u0637\u0644\u0627\u0639 \u0639\u0644\u0649 \u0633\u064A\u0627\u0633\u0629 \u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637"),
      duration: t$1("Your choice is saved for 180 days.", "Votre choix est conserv\xE9 pendant 180 jours.", "\u064A\u064F\u062D\u0641\u0638 \u0627\u062E\u062A\u064A\u0627\u0631\u0643 \u0644\u0645\u062F\u0629 180 \u064A\u0648\u0645\u064B\u0627.")
    };
    watch(isOpen, async (open) => {
      var _a;
      if (open) {
        previousFocus = (void 0).activeElement instanceof HTMLElement ? (void 0).activeElement : null;
        await nextTick();
        (_a = panel.value) == null ? void 0 : _a.focus({ preventScroll: true });
      } else if (previousFocus == null ? void 0 : previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      if (unref(isOpen)) {
        _push(`<section${ssrRenderAttrs(mergeProps({
          ref_key: "panel",
          ref: panel,
          class: "cookie-consent",
          role: "dialog",
          "aria-modal": "false",
          "aria-labelledby": "cookie-consent-title",
          "aria-describedby": "cookie-consent-description",
          dir: unref(locale).dir,
          tabindex: "-1"
        }, _attrs))} data-v-6233a0ea><p class="cookie-consent__eyebrow" data-v-6233a0ea>VOYAH TUNISIE</p><h2 id="cookie-consent-title" data-v-6233a0ea>${ssrInterpolate(unref(textFor)(labels.title))}</h2><p id="cookie-consent-description" data-v-6233a0ea>${ssrInterpolate(unref(textFor)(labels.description))}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(buildPath)("cookie.html"),
          class: "cookie-consent__policy"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(textFor)(labels.policy))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(textFor)(labels.policy)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="cookie-consent__actions" data-v-6233a0ea><button type="button" class="cookie-consent__button" data-v-6233a0ea>${ssrInterpolate(unref(textFor)(labels.accept))}</button><button type="button" class="cookie-consent__button cookie-consent__button--outline" data-v-6233a0ea>${ssrInterpolate(unref(textFor)(labels.reject))}</button></div><p class="cookie-consent__note" data-v-6233a0ea>${ssrInterpolate(unref(textFor)(labels.duration))}</p></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/CookieConsent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CookieConsent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6233a0ea"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const currentLocale = currentLocaleInfo();
    const route = useRoute();
    const isStorePage = computed(
      () => ["store.html"].some((slug) => route.path.endsWith(`/${slug}`) || route.path === `/${slug}`)
    );
    const isQuotePage = computed(
      () => ["devis"].some((slug) => route.path.endsWith(`/${slug}`) || route.path === `/${slug}`)
    );
    const isStandalonePage = computed(() => isStorePage.value || isQuotePage.value);
    useSiteSeo();
    useHead(() => ({
      htmlAttrs: {
        lang: isStorePage.value ? "en" : currentLocale.value.code,
        dir: isStorePage.value ? "ltr" : currentLocale.value.dir
      },
      bodyAttrs: {
        class: `locale-${isStorePage.value ? "en" : currentLocale.value.code}`
      }
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["site-shell", { "is-rtl": unref(currentLocale).dir === "rtl" && !isStandalonePage.value }]
      }, _attrs))} data-v-d2a28c4d>`);
      if (!isStandalonePage.value) {
        _push(ssrRenderComponent(SiteHeader, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<main class="${ssrRenderClass(["site-main", { "site-main--legacy": isStandalonePage.value }])}" data-v-d2a28c4d>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      if (!isStandalonePage.value) {
        _push(ssrRenderComponent(SiteFooter, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!isQuotePage.value) {
        _push(ssrRenderComponent(CookieConsent, null, null, _parent));
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
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d2a28c4d"]]);

export { _default as default };
//# sourceMappingURL=default-acKLV10X.mjs.map
