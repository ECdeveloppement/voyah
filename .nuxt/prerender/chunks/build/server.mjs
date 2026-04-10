import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { hasInjectionContext, getCurrentInstance, inject, defineComponent, shallowRef, h, resolveComponent, computed, unref, createElementBlock, provide, cloneVNode, defineAsyncComponent, shallowReactive, ref, Suspense, Fragment, useSSRContext, createApp, mergeProps, withCtx, createTextVNode, onErrorCaptured, onServerPrefetch, createVNode, resolveDynamicComponent, reactive, effectScope, getCurrentScope, toRef, nextTick, isReadonly, isRef, isShallow, isReactive, toRaw, Text } from 'file://E:/voyah-nuxt/node_modules/vue/index.mjs';
import { $fetch } from 'file://E:/voyah-nuxt/node_modules/ofetch/dist/node.mjs';
import { b as baseURL } from '../_/renderer.mjs';
import { createHooks } from 'file://E:/voyah-nuxt/node_modules/hookable/dist/index.mjs';
import { getContext, executeAsync } from 'file://E:/voyah-nuxt/node_modules/unctx/dist/index.mjs';
import { sanitizeStatusCode, createError as createError$1, getRequestProtocol, getRequestHeaders, getRequestHeader, setCookie, getCookie, deleteCookie } from 'file://E:/voyah-nuxt/node_modules/h3/dist/index.mjs';
import { useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter, START_LOCATION, isNavigationFailure } from 'file://E:/voyah-nuxt/node_modules/vue-router/vue-router.node.mjs';
import { defu } from 'file://E:/voyah-nuxt/node_modules/defu/dist/defu.mjs';
import { klona } from 'file://E:/voyah-nuxt/node_modules/klona/dist/index.mjs';
import { parse as parse$1 } from 'file://E:/voyah-nuxt/node_modules/cookie-es/dist/index.mjs';
import destr from 'file://E:/voyah-nuxt/node_modules/destr/dist/index.mjs';
import { isEqual as isEqual$1 } from 'file://E:/voyah-nuxt/node_modules/ohash/dist/index.mjs';
import { setupDevtoolsPlugin } from 'file://E:/voyah-nuxt/node_modules/vue-devtools-stub/dist/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSuspense, ssrRenderVNode } from 'file://E:/voyah-nuxt/node_modules/vue/server-renderer/index.mjs';
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

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
if (!("global" in globalThis)) {
  globalThis.global = globalThis;
}
const appLayoutTransition = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.21.2";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...options.ssrContext?.payload || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  const resolvedPlugins = /* @__PURE__ */ new Set();
  const unresolvedPlugins = [];
  const parallels = [];
  let error = void 0;
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    const unresolvedPluginsForThisPlugin = plugin2.dependsOn?.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.has(name)) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.add(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      }).catch((e) => {
        if (!plugin2.parallel && !nuxtApp.payload.error) {
          throw e;
        }
        error ||= e;
      });
      if (plugin2.parallel) {
        parallels.push(promise);
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin2.env?.islands === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin2.env?.islands === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (error) {
    throw nuxtApp.payload.error || error;
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = getCurrentInstance()?.appContext.app.$nuxt;
  }
  nuxtAppInstance ||= getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
const ENC_ENC_SLASH_RE = /%252f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function parseQuery(parametersString = "") {
  const object = /* @__PURE__ */ Object.create(null);
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map(
      (_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`
    ).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}
const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const PROTOCOL_SCRIPT_RE = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
const TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function isScriptProtocol(protocol) {
  return !!protocol && PROTOCOL_SCRIPT_RE.test(protocol);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex !== -1) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
  }
  const [s0, ...s] = path.split("?");
  const cleanPath = s0.endsWith("/") ? s0.slice(0, -1) : s0;
  return (cleanPath || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex !== -1) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
    if (!path) {
      return fragment;
    }
  }
  const [s0, ...s] = path.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
function isEqual(a, b, options = {}) {
  if (!options.trailingSlash) {
    a = withTrailingSlash(a);
    b = withTrailingSlash(b);
  }
  if (!options.leadingSlash) {
    a = withLeadingSlash(a);
    b = withLeadingSlash(b);
  }
  if (!options.encoding) {
    a = decode(a);
    b = decode(b);
  }
  return a === b;
}
const protocolRelative = /* @__PURE__ */ Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}
const LayoutMetaSymbol = /* @__PURE__ */ Symbol("layout-meta");
const PageRouteSymbol = /* @__PURE__ */ Symbol("route");
globalThis._importMeta_.url.replace(/\/app\/.*$/, "/");
const useRouter = () => {
  return useNuxtApp()?.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = useNuxtApp();
  const global2 = options.global || typeof name !== "string";
  const mw = middleware;
  if (!mw) {
    console.warn("[nuxt] No route middleware passed to `addRouteMiddleware`.", name);
    return;
  }
  if (global2) {
    nuxtApp._middleware.global.push(mw);
  } else {
    nuxtApp._middleware.named[name] = mw;
  }
};
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  to ||= "/";
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject$1(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = options?.external || isExternalHost;
  if (isExternal) {
    if (!options?.external) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext["~renderResponse"] = {
          statusCode: sanitizeStatusCode(options?.redirectCode || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options?.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  const encodedTo = typeof to === "string" ? encodeRoutePath(to) : to;
  return options?.replace ? router.replace(encodedTo) : router.push(encodedTo);
};
function resolveRouteObject$1(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
function encodeRoutePath(url) {
  const parsed = parseURL(url);
  return encodePath(decodePath(parsed.pathname)) + parsed.search + parsed.hash;
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = /* @__NO_SIDE_EFFECTS__ */ () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const error2 = /* @__PURE__ */ useError();
    if (false) ;
    error2.value ||= nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  if (typeof error !== "string" && error.statusText) {
    error.message ??= error.statusText;
  }
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  Object.defineProperty(nuxtError, "status", {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    get: () => nuxtError.statusCode,
    configurable: true
  });
  Object.defineProperty(nuxtError, "statusText", {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    get: () => nuxtError.statusMessage,
    configurable: true
  });
  return nuxtError;
};
const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    nuxtApp.vueApp.use(head);
  }
});
function toArray$2(value) {
  return Array.isArray(value) ? value : [value];
}
const matcher = (m, p) => {
  return [];
};
const _routeRulesMatcher = (path) => defu({}, ...matcher().map((r) => r.data).reverse());
const routeRulesMatcher$1 = _routeRulesMatcher;
function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  try {
    return routeRulesMatcher$1(path);
  } catch (e) {
    console.error("[nuxt] Error matching route rules.", e);
    return {};
  }
}
const locales = [
  { code: "en", name: "English", dir: "ltr" },
  { code: "fr", name: "Français", dir: "ltr" },
  { code: "ar", name: "العربية", dir: "rtl" }
];
const t = (en, fr, ar) => ({ en, fr, ar });
const metric = (value, en, fr, ar) => ({
  value,
  label: t(en, fr, ar)
});
const block = (image, enTitle, frTitle, arTitle, enBody, frBody, arBody) => ({
  image,
  title: t(enTitle, frTitle, arTitle),
  body: t(enBody, frBody, arBody)
});
const modelFeatureTitles = [
  t("Exterior expression", "Expression extérieure", "الهوية الخارجية"),
  t("Immersive cabin", "Habitacle immersif", "مقصورة غامرة"),
  t("Intelligent travel", "Voyage intelligent", "تنقل ذكي")
];
const modelFeatureOverrides = {
  "titan.html": [
    t("Winged welcome", "Accueil à ailes", "ترحيب جناحي"),
    t("Smart entry lighting", "Éclairage d’entrée intelligent", "إضاءة دخول ذكية"),
    t("Quiet cabin luxury", "Luxe d’habitacle silencieux", "فخامة مقصورة هادئة")
  ],
  "newDreamer26.html": [
    t("Ceremonial MPV presence", "Présence MPV cérémonielle", "حضور MPV احتفالي"),
    t("AI cloud-seat comfort", "Confort des sièges cloud IA", "راحة المقاعد السحابية الذكية"),
    t("Executive hospitality", "Hospitalité exécutive", "ضيافة تنفيذية")
  ],
  "passion-L.html": [
    t("Oriental flagship aesthetics", "Esthétique phare orientale", "جماليات شرقية رائدة"),
    t("All-dimensional comfort cabin", "Habitacle confort intégral", "مقصورة راحة شاملة"),
    t("HarmonySpace cockpit", "Cockpit HarmonySpace", "مقصورة HarmonySpace")
  ],
  "passion.html": [
    t("Streamlined sedan stance", "Posture berline élancée", "هيئة سيدان انسيابية"),
    t("Executive digital cabin", "Habitacle numérique exécutif", "مقصورة رقمية تنفيذية"),
    t("Composed touring comfort", "Confort grand tourisme", "راحة رحلات طويلة")
  ],
  "titan_blackedition.html": [
    t("Black flagship styling", "Style phare noir", "تصميم رائد أسود"),
    t("Dark premium cabin", "Habitacle premium sombre", "مقصورة فاخرة داكنة"),
    t("Stealth confidence", "Confiance furtive", "ثقة هادئة")
  ],
  "titan_X8.html": [
    t("Expanded family SUV", "SUV familial étendu", "SUV عائلية موسعة"),
    t("Three-row usability", "Polyvalence trois rangs", "عملية بثلاثة صفوف"),
    t("Long-trip confidence", "Confiance longue distance", "ثقة الرحلات الطويلة")
  ],
  "free+.html": [
    t("Urban light-and-shadow aesthetics", "Esthétique urbaine d’ombres et de lumière", "جماليات الضوء والظل الحضرية"),
    t("Free Cabin 2.0", "Habitacle Free 2.0", "مقصورة Free 2.0"),
    t("HarmonySpace 5 cockpit", "Cockpit HarmonySpace 5", "مقصورة HarmonySpace 5")
  ],
  "free.html": [
    t("Long-range crossover stance", "Posture crossover longue autonomie", "حضور كروس أوفر بعيد المدى"),
    t("Touring cabin comfort", "Confort de voyage", "راحة السفر"),
    t("Daily versatility", "Polyvalence quotidienne", "تنوع يومي")
  ],
  "newCourage.html": [
    t("Original aesthetics design", "Design esthétique original", "تصميم جمالي أصلي"),
    t("Electric power at full scale", "Puissance électrique à pleine échelle", "طاقة كهربائية كاملة"),
    t("Smart family cockpit", "Cockpit familial intelligent", "مقصورة عائلية ذكية")
  ],
  "newDreamer.html": [
    t("Panoramic luxury exterior", "Extérieur luxe panoramique", "خارجية فاخرة بانورامية"),
    t("Executive lounge cabin", "Habitacle salon exécutif", "مقصورة صالون تنفيذي"),
    t("Harmony intelligent travel", "Voyage intelligent Harmony", "سفر ذكي Harmony")
  ],
  "dreamer-champion.html": [
    t("Champion edition presence", "Présence d’édition Champion", "حضور إصدار Champion"),
    t("Executive lounge comfort", "Confort lounge exécutif", "راحة صالون تنفيذي"),
    t("Curated premium hospitality", "Hospitalité premium soignée", "ضيافة فاخرة منتقاة")
  ],
  "dreamriver.html": [
    t("Scenic edition presence", "Présence d’édition panoramique", "حضور إصدار مشهدي"),
    t("Warm lounge cabin", "Cabine salon chaleureuse", "مقصورة صالون دافئة"),
    t("Shared journey calm", "Sérénité de voyage", "هدوء السفر")
  ],
  "dreamer.html": [
    t("Luxury MPV presence", "Présence MPV de luxe", "حضور MPV فاخرة"),
    t("Rear cabin comfort", "Confort arrière", "راحة الصف الخلفي"),
    t("Smart family cockpit", "Cockpit familial intelligent", "مقصورة عائلية ذكية")
  ],
  "courage.html": [
    t("Original aesthetics design", "Design esthétique original", "تصميم جمالي أصلي"),
    t("Electric range and efficiency", "Autonomie et efficience électriques", "مدى وكفاءة كهربائية"),
    t("Family comfort cockpit", "Cockpit confort familial", "مقصورة راحة عائلية")
  ]
};
const modelFeatureBodyOverrides = {
  "titan.html": [
    t(
      "Titan starts with a ceremonial welcome and winged hardware details that make the flagship feel instantly special.",
      "Titan s’ouvre par un accueil cérémoniel et des détails matériels à ailes déployées qui rendent ce flagship immédiatement distinctif.",
      "تبدأ Titan بترحيب احتفالي وتفاصيل جناحية تجعل الإحساس الرائد مميزًا منذ اللحظة الأولى."
    ),
    t(
      "Projection lighting, smart entry scenes, and electric steering memory lift the interaction flow into a more executive tone.",
      "L’éclairage de projection, les scènes d’entrée intelligentes et la mémoire de direction électrique élèvent l’expérience vers un ton plus exécutif.",
      "ترفع إضاءة العرض ومشاهد الدخول الذكية وذاكرة التوجيه الكهربائية التجربة إلى طابع تنفيذي أكثر."
    ),
    t(
      "Quiet-cabin tuning, immersive sound, and privacy features complete the Titan story with calm luxury.",
      "Le réglage de l’habitacle silencieux, le son immersif et les fonctions d’intimité complètent l’histoire Titan avec une luxe apaisé.",
      "تُكمل معايرة المقصورة الهادئة والصوت الغامر وميزات الخصوصية قصة Titan بفخامة هادئة."
    )
  ],
  "newDreamer26.html": [
    t(
      "Dreamer 26 presents a ceremonial MPV presence with lounge-like proportions and a premium family-first identity.",
      "Dreamer 26 présente une présence MPV cérémonielle, des proportions façon salon et une identité premium centrée sur la famille.",
      "تقدم Dreamer 26 حضور MPV احتفاليًا وتناسبات بطابع الصالون وهوية فاخرة تركز على العائلة."
    ),
    t(
      "Fast charging and long-range composure keep large-cabin travel calm and effortless.",
      "La charge rapide et la sérénité longue distance rendent le voyage dans le grand habitacle calme et sans effort.",
      "يجعل الشحن السريع والاتزان في المدى الطويل السفر داخل المقصورة الكبيرة هادئًا وسهلًا."
    ),
    t(
      "Huawei Qiankun driving, Harmony cockpit integration, and AI interaction turn the cabin into an executive lounge.",
      "La conduite Huawei Qiankun, l’intégration du cockpit Harmony et l’interaction IA transforment l’habitacle en salon exécutif.",
      "تحول قيادة Huawei Qiankun وتكامل مقصورة Harmony وتفاعل الذكاء الاصطناعي المقصورة إلى صالون تنفيذي."
    )
  ],
  "passion-L.html": [
    t(
      "Passion L brings ceremonial front graphics and an elongated sedan stance into a composed executive look.",
      "Passion L associe une face avant cérémonielle et une posture de berline allongée pour créer une allure exécutive posée.",
      "تجمع Passion L بين الواجهة الاحتفالية وهيئة السيدان الطويلة لإظهار حضور تنفيذي متزن."
    ),
    t(
      "The long-wheelbase cabin emphasizes rear comfort, calm seating, and premium space for both driver and passengers.",
      "L’habitacle à empattement long met l’accent sur le confort arrière, la sérénité des sièges et l’espace premium pour le conducteur comme pour les passagers.",
      "تركز المقصورة ذات قاعدة العجلات الطويلة على راحة الخلف، وهدوء المقاعد، والمساحة الفاخرة للسائق والركاب."
    ),
    t(
      "HarmonySpace centers the digital cockpit with a clear display, seamless ecosystem flow, and calmer interaction.",
      "HarmonySpace place le cockpit numérique au centre avec un affichage clair, un écosystème fluide et une interaction plus apaisée.",
      "تضع HarmonySpace المقصورة الرقمية في المركز عبر شاشة واضحة وتدفق بيئي سلس وتفاعل أكثر هدوءًا."
    )
  ],
  "passion.html": [
    t(
      "Passion brings a cleaner sedan silhouette and a more restrained premium tone into the model page rhythm.",
      "Passion apporte une silhouette de berline plus pure et un ton premium plus retenu dans le rythme de la page modèle.",
      "تجلب Passion هيئة سيدان أنقى ونبرة فاخرة أكثر هدوءًا إلى إيقاع صفحة الطراز."
    ),
    t(
      "The digital cabin keeps the route focused on a calm executive feel with everyday comfort and connected control.",
      "L’habitacle numérique maintient le parcours sur une sensation exécutive calme avec confort quotidien et contrôle connecté.",
      "تحافظ المقصورة الرقمية على مسار هادئ بطابع تنفيذي مع راحة يومية وتحكم متصل."
    ),
    t(
      "Touring composure, chassis tuning, and long-distance confidence complete the sedan with a quieter luxury message.",
      "La sérénité de grand tourisme, le réglage châssis et la confiance longue distance complètent la berline avec un message de luxe plus discret.",
      "تُكمل الثقة في الرحلات الطويلة ومعايرة الهيكل وهدوء السفر هذه السيدان برسالة فخامة أكثر هدوءًا."
    )
  ],
  "titan_blackedition.html": [
    t(
      "The Black Edition route begins with darker exterior graphics and a more dramatic flagship posture.",
      "Le parcours Black Edition commence avec des graphismes extérieurs plus sombres et une posture phare plus dramatique.",
      "يبدأ مسار Black Edition برسومات خارجية أكثر قتامة وحضور رائد أكثر درامية."
    ),
    t(
      "Premium dark materials and a restrained cabin mood keep the edition aligned with a stealth-luxury identity.",
      "Des matériaux sombres premium et une ambiance cabine retenue maintiennent l’édition dans une identité de luxe furtif.",
      "تحافظ الخامات الداكنة الفاخرة وأجواء المقصورة الهادئة على هوية الفخامة الهادئة لهذه النسخة."
    ),
    t(
      "Assisted driving and safety structure finish the page as a complete Titan-family flagship, not a style package.",
      "La conduite assistée et la structure de sécurité concluent la page comme un vrai flagship de la famille Titan, pas comme un simple pack stylistique.",
      "تختتم القيادة المساعدة وبنية السلامة الصفحة بوصفها طرازًا رائدًا كاملًا لعائلة Titan لا مجرد حزمة مظهر."
    )
  ],
  "titan_X8.html": [
    t(
      "Titan X8 starts with a larger family SUV statement and a practical three-row presence.",
      "Titan X8 commence par une déclaration de grand SUV familial et une présence pratique à trois rangs.",
      "يبدأ Titan X8 بحضور SUV عائلية أكبر وتوزيع عملي بثلاثة صفوف."
    ),
    t(
      "The cabin chapter emphasizes access, space, and comfort for real multi-person travel.",
      "Le chapitre habitacle met l’accent sur l’accès, l’espace et le confort pour les vrais trajets à plusieurs.",
      "يركز فصل المقصورة على سهولة الدخول والمساحة والراحة لرحلات متعددة الركاب."
    ),
    t(
      "Road-trip composure and safety close the route with the same flagship confidence as the wider Titan family.",
      "La sérénité sur route et la sécurité referment le parcours avec la même assurance phare que la famille Titan élargie.",
      "تغلق الثقة في الرحلات الطويلة والسلامة المسار بنفس الثقة الرائدة لعائلة Titan الأوسع."
    )
  ],
  "free+.html": [
    t(
      "FREE+ frames its identity through urban light-and-shadow aesthetics, athletic SUV proportions, and a sharper premium presence for city life.",
      "FREE+ affirme son identité par une esthétique urbaine d’ombres et de lumière, des proportions de SUV athlétiques et une présence premium plus affûtée pour la ville.",
      "ترسم FREE+ هويتها عبر جماليات الضوء والظل الحضرية وتناسبات SUV الرياضية وحضور فاخر أوضح للحياة المدنية."
    ),
    t(
      "Free Cabin 2.0 focuses on openness, seating comfort, and practical room for daily use while preserving a premium digital character.",
      "Free Cabin 2.0 met l’accent sur l’ouverture, le confort d’assise et l’espace pratique au quotidien tout en conservant un caractère numérique premium.",
      "تركز Free Cabin 2.0 على الانفتاح وراحة المقاعد والمساحة العملية للاستخدام اليومي مع الحفاظ على طابع رقمي فاخر."
    ),
    t(
      "HarmonySpace 5 extends the intelligent cockpit experience with a clearer interface, connected assistance, and a more natural urban rhythm.",
      "HarmonySpace 5 prolonge l’expérience du cockpit intelligent grâce à une interface plus claire, une assistance connectée et un rythme urbain plus naturel.",
      "توسع HarmonySpace 5 تجربة المقصورة الذكية عبر واجهة أوضح ومساعدة متصلة وإيقاع حضري أكثر طبيعية."
    )
  ],
  "free.html": [
    t(
      "FREE 318 opens with long-range crossover character and a calmer touring stance.",
      "FREE 318 s’ouvre sur un caractère de crossover longue autonomie et une posture de voyage plus calme.",
      "تبدأ FREE 318 بطابع كروس أوفر بعيد المدى وحضور سفر أكثر هدوءًا."
    ),
    t(
      "The comfort chapter leans into relaxed seating, elevated visibility, and everyday usability.",
      "Le chapitre confort met l’accent sur des sièges détendus, une visibilité surélevée et une vraie praticité au quotidien.",
      "يركز فصل الراحة على الجلسة المريحة والرؤية المرتفعة والعملية اليومية."
    ),
    t(
      "The model closes with practical premium confidence that keeps the page feeling like a real touring crossover.",
      "Le modèle se conclut par une confiance premium pragmatique qui conserve à la page l’allure d’un vrai crossover de voyage.",
      "يُختتم الطراز بثقة عملية فاخرة تجعل الصفحة تبدو كأنها صفحة كروس أوفر للرحلات فعلًا."
    )
  ],
  "newCourage.html": [
    t(
      "The new Courage starts with original aesthetics and a cleaner urban SUV language built around family warmth.",
      "Le nouveau Courage commence par une esthétique originale et un langage de SUV urbain plus pur, pensé autour de la chaleur familiale.",
      "تبدأ Courage الجديدة بجماليات أصلية ولغة SUV حضرية أنقى مبنية حول دفء العائلة."
    ),
    t(
      "It becomes an efficient electric home through long range, a large battery pack, and 800V architecture.",
      "Elle devient un foyer électrique efficient grâce à une grande autonomie, une batterie de forte capacité et une architecture 800V.",
      "وتصبح منزلًا كهربائيًا فعّالًا بفضل المدى الطويل وحزمة البطارية الكبيرة وبنية 800V."
    ),
    t(
      "A smart family cockpit comes from digital screens, Harmony audio, and expressive in-cabin lighting.",
      "Un cockpit familial intelligent naît des écrans numériques, de l’audio Harmony et d’un éclairage expressif dans l’habitacle.",
      "تنبع المقصورة العائلية الذكية من الشاشات الرقمية وصوت Harmony والإضاءة المعبرة داخل المقصورة."
    )
  ],
  "newDreamer.html": [
    t(
      "Panoramic luxury design frames Dreamer with a flagship MPV presence and an executive-scale body.",
      "Le design de luxe panoramique encadre Dreamer avec une présence MPV phare et une carrosserie à l’échelle exécutive.",
      "يؤطر التصميم الفاخر البانورامي Dreamer بحضور MPV رائد وهيكل بحجم تنفيذي."
    ),
    t(
      "The executive lounge cabin focuses on rear comfort, seat engineering, and calm long-distance travel.",
      "L’habitacle salon exécutif met l’accent sur le confort arrière, l’ingénierie des sièges et la sérénité longue distance.",
      "تركز مقصورة الصالون التنفيذي على راحة الخلف وهندسة المقاعد وهدوء الرحلات الطويلة."
    ),
    t(
      "Harmony intelligent travel connects the smart cockpit, family convenience, and premium hospitality into one flow.",
      "Le voyage intelligent Harmony relie le cockpit intelligent, la praticité familiale et l’hospitalité premium dans un même ensemble.",
      "يربط السفر الذكي Harmony المقصورة الذكية والراحة العائلية والضيافة الفاخرة في تدفق واحد."
    )
  ],
  "dreamer-champion.html": [
    t(
      "Dreamer Champion opens with a more ceremonial MPV identity and stronger special-edition presence than the standard Dreamer range.",
      "Dreamer Champion s’ouvre sur une identité de MPV plus cérémonielle et une présence d’édition spéciale plus affirmée que la gamme Dreamer standard.",
      "تبدأ Dreamer Champion بهوية MPV أكثر احتفالية وحضور إصدار خاص أقوى من مجموعة Dreamer القياسية."
    ),
    t(
      "Its second-row hospitality, quieter lounge atmosphere, and curated trim details make the cabin feel more executive and more exclusive.",
      "Son hospitalité au deuxième rang, son ambiance lounge plus silencieuse et ses détails de finition choisis rendent l’habitacle plus exécutif et plus exclusif.",
      "تجعل ضيافة الصف الثاني وأجواء الصالون الأكثر هدوءًا وتفاصيل الخامات المنتقاة المقصورة أكثر تنفيذية وأكثر خصوصية."
    ),
    t(
      "The route closes with a more curated premium-hospitality tone, keeping Dreamer Champion distinct from the regular Dreamer family pages.",
      "Le parcours se conclut sur une tonalité d’hospitalité premium plus soignée, afin de distinguer Dreamer Champion des pages Dreamer classiques.",
      "يختتم المسار بنبرة ضيافة فاخرة أكثر عناية بما يبقي Dreamer Champion مختلفة عن صفحات Dreamer العادية."
    )
  ],
  "dreamriver.html": [
    t(
      "Dreamer Mountain River presents a scenic MPV expression with hospitality-first styling.",
      "Dreamer Mountain River présente une expression MPV panoramique au style centré sur l’hospitalité.",
      "تقدم Dreamer Mountain River تعبير MPV مشهديًا بطابع يركز على الضيافة."
    ),
    t(
      "The lounge-like cabin keeps the route warm and family-friendly without losing premium calm.",
      "L’habitacle façon salon garde le parcours chaleureux et familial sans perdre le calme premium.",
      "تحافظ المقصورة بطابع الصالون على دفء المسار وروحه العائلية من دون فقدان الهدوء الفاخر."
    ),
    t(
      "Shared travel comfort and safety complete the special-edition story with a polished, scenic tone.",
      "Le confort de voyage partagé et la sécurité concluent l’histoire de l’édition spéciale avec un ton soigné et panoramique.",
      "يكمل السفر المشترك المريح والسلامة قصة النسخة الخاصة بنبرة مصقولة ومشهدية."
    )
  ],
  "dreamer.html": [
    t(
      "Dreamer opens with a luxury MPV presence and a family-first silhouette.",
      "Dreamer s’ouvre sur une présence MPV de luxe et une silhouette centrée sur la famille.",
      "تبدأ Dreamer بحضور MPV فاخر وهيئة موجهة للعائلة."
    ),
    t(
      "Rear cabin comfort and lounge seating drive the middle of the route with a calmer executive rhythm.",
      "Le confort arrière et les sièges façon salon portent le milieu du parcours avec un rythme exécutif plus calme.",
      "تقود راحة الصف الخلفي ومقاعد الصالون منتصف المسار بإيقاع تنفيذي أكثر هدوءًا."
    ),
    t(
      "The page closes on smart-family convenience and reassuring safety to keep the MPV story complete.",
      "La page se conclut sur la praticité familiale intelligente et une sécurité rassurante pour garder l’histoire MPV complète.",
      "تختتم الصفحة بالعملية العائلية الذكية والسلامة المطمئنة لإبقاء قصة MPV متكاملة."
    )
  ],
  "courage.html": [
    t(
      "Original aesthetics design frames Courage with a cleaner electric-SUV silhouette and a warmer family tone.",
      "Le design esthétique original cadre Courage avec une silhouette de SUV électrique plus pure et un ton familial plus chaleureux.",
      "يؤطر التصميم الجمالي الأصلي Courage بهيئة SUV كهربائية أنقى وطابع عائلي أكثر دفئًا."
    ),
    t(
      "Electric range and efficiency keep the route calm, practical, and ready for everyday travel.",
      "L’autonomie et l’efficience électriques rendent le trajet calme, pratique et prêt pour un usage quotidien.",
      "يحافظ المدى والكفاءة الكهربائية على تنقل هادئ وعملي وجاهز للاستخدام اليومي."
    ),
    t(
      "The family comfort cockpit adds digital screens, Harmony audio, and expressive in-cabin lighting for a more lively mood.",
      "Le cockpit confort familial ajoute des écrans numériques, l’audio Harmony et un éclairage expressif pour une ambiance plus vivante.",
      "تضيف المقصورة العائلية المريحة شاشات رقمية وصوت Harmony وإضاءة معبرة لجو أكثر حيوية."
    )
  ]
};
const makeModel = (options) => ({
  kind: "model",
  ...options,
  features: options.gallery.slice(0, 3).map((image, index) => {
    const subtitle = options.subtitle.en.toLowerCase();
    const isMpv = subtitle.includes("mpv");
    const isSedan = subtitle.includes("sedan");
    const titles = modelFeatureOverrides[options.slug] ?? (isMpv ? [
      t("Ceremonial exterior", "Extérieur cérémoniel", "خارجية بطابع احتفالي"),
      t("Lounge-like cabin", "Habitacle esprit salon", "مقصورة بطابع الصالون"),
      t("Long-distance hospitality", "Hospitalité grand trajet", "ضيافة مثالية للرحلات الطويلة")
    ] : isSedan ? [
      t("Flagship exterior proportion", "Proportions extérieures de prestige", "تناسبات خارجية رائدة"),
      t("Executive digital cabin", "Habitacle numérique exécutif", "مقصورة رقمية تنفيذية"),
      t("Composed intelligent travel", "Voyage intelligent et serein", "سفر ذكي وواثق")
    ] : [
      t("Commanding exterior stance", "Prestance extérieure affirmée", "حضور خارجي قوي"),
      t("Spacious intelligent cabin", "Habitacle intelligent et spacieux", "مقصورة ذكية ورحبة"),
      t("All-scenario confidence", "Sérénité tous usages", "ثقة في كل السيناريوهات")
    ]);
    const bodies = modelFeatureBodyOverrides[options.slug] ?? [
      options.description,
      options.subtitle,
      t(
        `${options.title.en} combines premium design, an immersive digital experience, and composed road manners for refined daily and long-distance travel.`,
        `${options.title.fr} associe un design premium, une expérience numérique immersive et un comportement routier maîtrisé pour les trajets quotidiens comme longue distance.`,
        `يجمع ${options.title.ar} بين التصميم الفاخر والتجربة الرقمية الغامرة والأداء المتزن على الطريق ليمنح تجربة راقية في الاستخدام اليومي والرحلات الطويلة.`
      )
    ];
    return {
      image,
      title: titles[index] ?? modelFeatureTitles[2],
      body: bodies[index] ?? bodies[2]
    };
  }),
  ctaPrimary: t("Order now", "Commander maintenant", "اطلب الآن"),
  ctaSecondary: t("Configuration list", "Liste des configurations", "قائمة التجهيزات"),
  secondarySlug: "store.html"
});
const navigation = [
  { label: t("Voyah Brand", "Marque Voyah", "علامة Voyah"), slug: "brand.html" },
  {
    label: t("Models", "Modèles", "الطرازات"),
    children: [
      { label: t("Voyah Passion L", "Voyah Passion L", "Voyah Passion L"), slug: "passion-L.html", thumb: "/voyah-resources/images/car/car_logo/passion-L.png" },
      { label: t("Voyah Passion", "Voyah Passion", "Voyah Passion"), slug: "passion.html", thumb: "/voyah-resources/images/car/car_logo/passion.png" },
      { label: t("Voyah Titan", "Voyah Titan", "Voyah Titan"), slug: "titan.html", thumb: "/voyah-resources/images/car/car_logo/titan.png" },
      { label: t("Voyah Titan Black Edition", "Voyah Titan Black Edition", "Voyah Titan Black Edition"), slug: "titan_blackedition.html", thumb: "/voyah-resources/images/car/car_logo/titan_blackedition.png" },
      { label: t("Voyah Titan X8", "Voyah Titan X8", "Voyah Titan X8"), slug: "titan_X8.html", thumb: "/voyah-resources/images/car/car_logo/titan_X8.png" },
      { label: t("Voyah FREE+", "Voyah FREE+", "Voyah FREE+"), slug: "free+.html", thumb: "/voyah-resources/images/car/car_logo/free+.png" },
      { label: t("Voyah FREE 318", "Voyah FREE 318", "Voyah FREE 318"), slug: "free.html", thumb: "/voyah-resources/images/car/car_logo/free.png" },
      { label: t("New Voyah Courage", "Nouveau Voyah Courage", "Voyah Courage الجديد"), slug: "newCourage.html", thumb: "/voyah-resources/images/car/car_logo/newCourage.png" },
      { label: t("Voyah Courage", "Voyah Courage", "Voyah Courage"), slug: "courage.html", thumb: "/voyah-resources/images/car/car_logo/courage.png" },
      { label: t("26 Voyah Dreamer", "Voyah Dreamer 26", "Voyah Dreamer 26"), slug: "newDreamer26.html", thumb: "/voyah-resources/images/car/car_logo/newDreamer26.png" },
      { label: t("Voyah Dreamer Champion", "Voyah Dreamer Champion", "Voyah Dreamer Champion"), slug: "dreamer-champion.html", thumb: "/voyah-resources/images/car/car_logo/dreamer-champion.png" },
      { label: t("25 Voyah Dreamer", "Voyah Dreamer 25", "Voyah Dreamer 25"), slug: "newDreamer.html", thumb: "/voyah-resources/images/car/car_logo/newDreamer.png" },
      { label: t("Voyah Dreamer Mountain River", "Voyah Dreamer Montagne-Rivière", "Voyah Dreamer Mountain River"), slug: "dreamriver.html", thumb: "/voyah-resources/images/car/car_logo/dreamriver.png" },
      { label: t("24 Voyah Dreamer", "Voyah Dreamer 24", "Voyah Dreamer 24"), slug: "dreamer.html", thumb: "/voyah-resources/images/car/car_logo/dreamer.png" }
    ]
  },
  { label: t("Store Center", "Centre de magasins", "مركز المعارض"), slug: "store.html" },
  {
    label: t("Voyah Service", "Service Voyah", "خدمات Voyah"),
    children: [
      { label: t("User Service", "Service client", "خدمة المستخدم"), slug: "service.html" },
      { label: t("Voyah Energy", "Énergie Voyah", "طاقة Voyah"), slug: "energy.html" },
      { label: t("Procurement", "Achats", "المشتريات"), slug: "purchasing.html" },
      { label: t("Environmental Disclosure", "Informations environnementales", "الإفصاح البيئي"), slug: "environmental.html" },
      { label: t("Document Download", "Téléchargements", "تنزيل المستندات"), slug: "document.html" }
    ]
  },
  {
    label: t("About Voyah", "À propos de Voyah", "عن Voyah"),
    children: [
      { label: t("Corporate Culture", "Culture d’entreprise", "الثقافة المؤسسية"), slug: "corporate.html" },
      { label: t("Join Us", "Rejoignez-nous", "انضم إلينا"), slug: "joinus.html" },
      { label: t("Partner Recruitment", "Recrutement de partenaires", "استقطاب الشركاء"), slug: "recruit-partners.html" },
      { label: t("Investor Relations", "Relations investisseurs", "علاقات المستثمرين"), slug: "ir.html" }
    ]
  }
];
const models = [
  makeModel({
    slug: "passion-L.html",
    title: t("Voyah Passion L", "Voyah Passion L", "Voyah Passion L"),
    subtitle: t("New-era flagship sedan", "Berline phare de nouvelle génération", "سيدان رائدة من الجيل الجديد"),
    description: t("Starting from RMB 279,900.", "À partir de 279 900 RMB.", "السعر يبدأ من 279,900 يوان"),
    price: t("Starting from RMB 279,900", "À partir de 279 900 RMB", "السعر يبدأ من 279,900 يوان"),
    heroImage: "/voyah-resources/images/car/passion-L/1920/sc_1.jpg",
    logo: "/voyah-resources/images/car/car_logo/passion-L.png",
    gallery: [
      "/voyah-resources/images/car/passion-L/1920/sc_10.jpg",
      "/voyah-resources/images/car/passion-L/1920/sc_24.jpg",
      "/voyah-resources/images/car/passion-L/1920/sc_39.jpg"
    ],
    metrics: [
      metric("Sedan", "Body type", "Carrosserie", "نوع الهيكل"),
      metric("Flagship", "Positioning", "Positionnement", "الفئة"),
      metric("Executive luxury", "Experience", "Expérience", "التجربة")
    ]
  }),
  makeModel({
    slug: "passion.html",
    title: t("Voyah Passion", "Voyah Passion", "Voyah Passion"),
    subtitle: t("Performance electric sedan", "Berline électrique performante", "سيدان كهربائية عالية الأداء"),
    description: t("A sleek electric sedan pairing decisive proportions, a quieter executive cabin, and composed grand-touring confidence.", "Une berline électrique élancée qui associe des proportions affirmées, un habitacle exécutif plus silencieux et une assurance de grand tourisme maîtrisée.", "سيدان كهربائية أنيقة تجمع بين التناسق الجريء والمقصورة التنفيذية الأكثر هدوءًا وثقة السفر الطويل المتزنة."),
    price: t("Executive performance sedan", "Berline exécutive performante", "سيدان تنفيذية عالية الأداء"),
    heroImage: "/voyah-resources/images/car/passion/1920/fl01.jpg",
    heroVideo: "/voyah-resources/images/car/passion/video_01.mp4",
    logo: "/voyah-resources/images/car/car_logo/passion.png",
    gallery: [
      "/voyah-resources/images/car/passion/1920/fl04.jpg",
      "/voyah-resources/images/car/passion/1920/fl11.jpg",
      "/voyah-resources/images/car/passion/1920/fl21.jpg"
    ],
    metrics: [
      metric("Grand tourer", "Character", "Caractère", "الطابع"),
      metric("Refined ride", "Chassis tuning", "Mise au point châssis", "معايرة الهيكل"),
      metric("Digital luxury", "Cabin feel", "Ambiance intérieure", "أجواء المقصورة")
    ]
  }),
  makeModel({
    slug: "titan.html",
    title: t("Voyah Titan", "Voyah Titan", "Voyah Titan"),
    subtitle: t("New-era flagship six-seat SUV", "SUV phare à six places de nouvelle génération", "سيارة SUV رائدة بستة مقاعد من الجيل الجديد"),
    description: t("Starting from RMB 379,900.", "À partir de 379 900 RMB.", "السعر يبدأ من 379,900 يوان"),
    price: t("Starting from RMB 379,900", "À partir de 379 900 RMB", "السعر يبدأ من 379,900 يوان"),
    heroImage: "/voyah-resources/images/car/titan/1920/sc_1.jpg",
    logo: "/voyah-resources/images/car/car_logo/titan.png",
    gallery: [
      "/voyah-resources/images/car/titan/1920/sc_18.jpg",
      "/voyah-resources/images/car/titan/1920/sc_22.jpg",
      "/voyah-resources/images/car/titan/1920/sc_30.jpg"
    ],
    metrics: [
      metric("2.87X", "Length-height ratio", "Rapport longueur/hauteur", "نسبة الطول إلى الارتفاع"),
      metric("2.25X", "Wheel-height ratio", "Rapport roue/hauteur", "نسبة العجلة إلى الارتفاع"),
      metric("59.68%", "Front nose ratio", "Rapport du nez avant", "نسبة المقدمة الأمامية")
    ]
  }),
  makeModel({
    slug: "titan_blackedition.html",
    title: t("Voyah Titan Black Edition", "Voyah Titan Black Edition", "Voyah Titan Black Edition"),
    subtitle: t("Stealth-focused luxury SUV", "SUV de luxe au style noir", "SUV فاخرة بطابع أسود"),
    description: t("A darker, sharper interpretation of the Titan formula with bold finishes and a more dramatic visual tone.", "Une interprétation plus sombre et plus tranchante de la Titan, avec des finitions audacieuses et un langage visuel plus dramatique.", "نسخة أكثر جرأة من Titan بتشطيبات داكنة وحضور بصري أكثر حدة."),
    price: t("Black Edition", "Black Edition", "Black Edition"),
    heroImage: "/voyah-resources/images/car/titan_blackedition/1920/sc_1.jpg",
    logo: "/voyah-resources/images/car/car_logo/titan_blackedition.png",
    gallery: [
      "/voyah-resources/images/car/titan_blackedition/1920/sc_10_1.jpg",
      "/voyah-resources/images/car/titan_blackedition/1920/sc_17.jpg",
      "/voyah-resources/images/car/titan_blackedition/1920/sc_18_1.jpg"
    ],
    metrics: [
      metric("Dark styling", "Design theme", "Thème design", "نسق التصميم"),
      metric("Premium trim", "Material tone", "Finition premium", "الخامات الفاخرة"),
      metric("SUV command", "Presence", "Prestance", "الحضور")
    ]
  }),
  makeModel({
    slug: "titan_X8.html",
    title: t("Voyah Titan X8", "Voyah Titan X8", "Voyah Titan X8"),
    subtitle: t("Expanded flagship family SUV", "SUV familial phare étendu", "SUV عائلية رائدة موسعة"),
    description: t("A Titan derivative tuned for more generous multi-row practicality, calmer family comfort, and long-range travel confidence.", "Une déclinaison de Titan pensée pour une praticité multirang plus généreuse, un confort familial plus serein et une meilleure assurance sur longue distance.", "نسخة من Titan مهيأة لعملية أكبر عبر الصفوف المتعددة وراحة عائلية أكثر هدوءًا وثقة أكبر في الرحلات الطويلة."),
    price: t("Expanded family flagship", "Flagship familial étendu", "رائدة عائلية موسعة"),
    heroImage: "/voyah-resources/images/car/titan_X8/1920/sc_1.jpg",
    logo: "/voyah-resources/images/car/car_logo/titan_X8.png",
    gallery: ["/voyah-resources/images/car/titan_X8/1920/sc_1.jpg"],
    metrics: [
      metric("Expanded seating", "Space plan", "Plan d’espace", "تخطيط المساحة"),
      metric("Travel ready", "Use case", "Usage", "الاستخدام"),
      metric("SUV comfort", "Comfort focus", "Confort", "الراحة")
    ]
  }),
  makeModel({
    slug: "free+.html",
    title: t("Voyah FREE+", "Voyah FREE+", "Voyah FREE+"),
    subtitle: t("Premium intelligent SUV", "SUV premium intelligente", "سيارة SUV ذكية فاخرة"),
    description: t("A premium urban SUV with expressive light-and-shadow design, a more refined cabin, and Huawei intelligent driving.", "Un SUV urbain premium au design d’ombres et de lumière, à l’habitacle plus raffiné et à la conduite intelligente Huawei.", "سيارة SUV حضرية فاخرة بتصميم ضوء وظل مع مقصورة أكثر تنقيحًا وقيادة ذكية من Huawei."),
    price: t("Premium intelligent SUV", "SUV premium intelligente", "سيارة SUV ذكية فاخرة"),
    heroImage: "/voyah-resources/images/car/free+/kv_1920.png",
    heroVideo: "/voyah-resources/images/car/free+/video_01_20250712.mp4",
    logo: "/voyah-resources/images/car/car_logo/free+.png",
    gallery: [
      "/voyah-resources/images/car/free+/img_03_1920.png",
      "/voyah-resources/images/car/free+/img_25_1920.png",
      "/voyah-resources/images/car/free+/img_42_1920.png"
    ],
    metrics: [
      metric("Urban design", "Design", "Design", "التصميم"),
      metric("Harmony cockpit", "Cabin", "Habitacle", "المقصورة"),
      metric("ADS 4", "Driving tech", "Conduite intelligente", "تقنية القيادة")
    ]
  }),
  makeModel({
    slug: "free.html",
    title: t("Voyah FREE 318", "Voyah FREE 318", "Voyah FREE 318"),
    subtitle: t("Long-range premium crossover", "Crossover premium longue autonomie", "كروس أوفر فاخر بعيد المدى"),
    description: t("A long-range crossover with relaxed touring comfort, a calmer smart cockpit, and premium everyday versatility.", "Un crossover longue autonomie avec confort de voyage apaisé, cockpit intelligent plus serein et polyvalence premium au quotidien.", "كروس أوفر بعيد المدى يجمع بين راحة السفر الهادئة والمقصورة الذكية الأكثر سكينة والتنوع الفاخر اليومي."),
    price: t("Long-range premium crossover", "Crossover premium longue autonomie", "كروس أوفر فاخر بعيد المدى"),
    heroImage: "/voyah-resources/images/car/free/bg-free-h97D-1.jpg",
    heroVideo: "/voyah-resources/images/car/free/video_01.mp4",
    logo: "/voyah-resources/images/car/car_logo/free.png",
    gallery: [
      "/voyah-resources/images/car/free/bg-free-h97D-5.jpg",
      "/voyah-resources/images/car/free/bg-free-h97D-9.jpg",
      "/voyah-resources/images/car/free/bg-free-h97D-12.jpg"
    ],
    metrics: [
      metric("Touring comfort", "Long-route feel", "Confort longue route", "راحة السفر"),
      metric("High seating", "Driving position", "Position de conduite", "وضعية القيادة"),
      metric("Practical luxury", "Daily use", "Usage quotidien", "الاستخدام اليومي")
    ]
  }),
  makeModel({
    slug: "newCourage.html",
    title: t("New Voyah Courage", "Nouveau Voyah Courage", "Voyah Courage الجديد"),
    subtitle: t("New luxury pure-electric SUV", "Nouveau SUV de luxe 100 % électrique", "سيارة SUV كهربائية فاخرة جديدة"),
    description: t("A new-generation pure-electric SUV with a warm family cabin, long range, and Huawei intelligent driving.", "Un SUV 100 % électrique de nouvelle génération avec habitacle familial chaleureux, grande autonomie et conduite intelligente Huawei.", "سيارة SUV كهربائية بالكامل من الجيل الجديد بمقصورة عائلية دافئة ومدى طويل وقيادة ذكية من Huawei."),
    price: t("New luxury pure-electric SUV", "Nouveau SUV de luxe 100 % électrique", "سيارة SUV كهربائية فاخرة جديدة"),
    heroImage: "/voyah-resources/images/car/newCourage/1920/sc_1.jpg",
    logo: "/voyah-resources/images/car/car_logo/newCourage.png",
    gallery: [
      "/voyah-resources/images/car/newCourage/1920/sc_10.jpg",
      "/voyah-resources/images/car/newCourage/1920/sc_12.jpg",
      "/voyah-resources/images/car/newCourage/1920/sc_18.jpg"
    ],
    metrics: [
      metric("Pure electric", "Powertrain", "Motorisation", "منظومة الحركة"),
      metric("Huawei ADS", "Driving tech", "Conduite intelligente", "تقنية القيادة"),
      metric("Harmony cockpit", "Cabin", "Cockpit", "المقصورة")
    ]
  }),
  makeModel({
    slug: "courage.html",
    title: t("Voyah Courage", "Voyah Courage", "Voyah Courage"),
    subtitle: t("Luxury pure-electric family SUV", "SUV familial de luxe 100 % électrique", "سيارة SUV عائلية كهربائية فاخرة"),
    description: t("A full-electric SUV focused on expressive design, practical family comfort, and everyday long-range confidence.", "Un SUV électrique centré sur un design expressif, un confort familial pratique et une confiance d’autonomie au quotidien.", "سيارة SUV كهربائية بالكامل تركز على التصميم التعبيري والراحة العائلية العملية والثقة في المدى اليومي الطويل."),
    price: t("Luxury pure-electric family SUV", "SUV familial de luxe 100 % électrique", "سيارة SUV عائلية كهربائية فاخرة"),
    heroImage: "/voyah-resources/images/car/courage/1920/h37_pc01_0001.jpg",
    logo: "/voyah-resources/images/car/car_logo/courage.png",
    gallery: [
      "/voyah-resources/images/car/courage/1920/h37_pc03_0001.jpg",
      "/voyah-resources/images/car/courage/1920/h37_pc04_0001.jpg",
      "/voyah-resources/images/car/courage/1920/h37_pc06_0001.jpg"
    ],
    metrics: [
      metric("901 km", "Electric range", "Autonomie électrique", "مدى القيادة"),
      metric("109 kWh", "Battery", "Batterie", "البطارية"),
      metric("800 V", "Platform", "Plateforme", "المنصة")
    ]
  }),
  makeModel({
    slug: "newDreamer26.html",
    title: t("26 Voyah Dreamer", "Voyah Dreamer 26", "Voyah Dreamer 26"),
    subtitle: t("A new-era flagship MPV", "Monospace phare de nouvelle génération", "سيارة MPV رائدة من الجيل الجديد"),
    description: t("A new-generation Dreamer with lounge-like comfort, refined long-distance composure, and premium family focus.", "Une nouvelle génération Dreamer avec un confort de salon, une grande sérénité sur longue distance et une vocation familiale premium.", "الجيل الجديد من Dreamer يوفر راحة شبيهة بالصالون وثباتاً راقياً في الرحلات الطويلة وتركيزاً عائلياً فاخراً."),
    price: t("A new-era flagship MPV", "Monospace phare de nouvelle génération", "سيارة MPV رائدة من الجيل الجديد"),
    heroImage: "/voyah-resources/images/car/newDreamer26/kv_1920.jpg",
    logo: "/voyah-resources/images/car/car_logo/newDreamer26.png",
    gallery: [
      "/voyah-resources/images/car/newDreamer26/bg_11_1920.jpg",
      "/voyah-resources/images/car/newDreamer26/sc_20.jpg",
      "/voyah-resources/images/car/newDreamer26/bg_22_1920.jpg"
    ],
    metrics: [
      metric("MPV", "Body type", "Carrosserie", "نوع الهيكل"),
      metric("Flagship", "Positioning", "Positionnement", "الفئة"),
      metric("Six / seven seats", "Seating", "Places", "عدد المقاعد")
    ]
  }),
  makeModel({
    slug: "dreamer-champion.html",
    title: t("Voyah Dreamer Champion", "Voyah Dreamer Champion", "Voyah Dreamer Champion"),
    subtitle: t("Special-edition flagship MPV", "MPV phare en édition spéciale", "سيارة MPV رائدة بإصدار خاص"),
    description: t("A special Dreamer expression with ceremonial presence, executive lounge comfort, and a more curated premium hospitality tone.", "Une expression spéciale de Dreamer avec présence cérémonielle, confort de salon exécutif et tonalité d’hospitalité premium plus soignée.", "نسخة خاصة من Dreamer بحضور احتفالي وراحة صالون تنفيذي ونبرة ضيافة فاخرة أكثر عناية."),
    price: t("Champion special edition", "Édition spéciale Champion", "إصدار Champion الخاص"),
    heroImage: "/voyah-resources/images/car/dreamer-champion/kv_1920.jpg",
    logo: "/voyah-resources/images/car/car_logo/dreamer-champion.png",
    gallery: [
      "/voyah-resources/images/car/dreamer-champion/bg_11_n_1920.jpg",
      "/voyah-resources/images/car/dreamer-champion/bg_15_n_1920.jpg",
      "/voyah-resources/images/car/dreamer-champion/bg_21_n_1920.jpg"
    ],
    metrics: [
      metric("Special edition", "Series", "Série", "السلسلة"),
      metric("Executive MPV", "Positioning", "Positionnement", "الفئة"),
      metric("Ceremonial comfort", "Cabin mood", "Ambiance intérieure", "أجواء المقصورة")
    ]
  }),
  makeModel({
    slug: "newDreamer.html",
    title: t("25 Voyah Dreamer", "Voyah Dreamer 25", "Voyah Dreamer 25"),
    subtitle: t("Panoramic luxury technology flagship MPV", "Monospace phare technologique de luxe panoramique", "MPV رائدة تجمع بين الفخامة والتقنية البانورامية"),
    description: t("A panoramic luxury flagship MPV with premium comfort, intelligent cabin tech, and long-distance composure.", "Un MPV phare de luxe panoramique avec confort premium, technologie d’habitacle intelligente et sérénité longue distance.", "سيارة MPV رائدة فاخرة بانورامية مع راحة فاخرة وتقنية مقصورة ذكية وثبات في الرحلات الطويلة."),
    price: t("Starting from RMB 329,900", "À partir de 329 900 RMB", "السعر يبدأ من 329,900 يوان"),
    heroImage: "/voyah-resources/images/car/newDreamer/h56c_pc08_banner01.jpg",
    logo: "/voyah-resources/images/car/car_logo/newDreamer.png",
    gallery: [
      "/voyah-resources/images/car/newDreamer/bg_2_n_1920.jpg",
      "/voyah-resources/images/car/newDreamer/bg_7_n_1920.jpg",
      "/voyah-resources/images/car/newDreamer/h56c_pc03_0003.jpg"
    ],
    metrics: [
      metric("MPV", "Body type", "Carrosserie", "نوع الهيكل"),
      metric("Flagship", "Positioning", "Positionnement", "الفئة"),
      metric("Seven seats", "Seating", "Places", "عدد المقاعد")
    ]
  }),
  makeModel({
    slug: "dreamriver.html",
    title: t("Voyah Dreamer Mountain River", "Voyah Dreamer Montagne-Rivière", "Voyah Dreamer Mountain River"),
    subtitle: t("Scenic travel expression", "Expression du voyage panoramique", "طابع السفر المشهدي"),
    description: t("A special Dreamer expression emphasizing serene scenery, warm hospitality, and elegant multi-person travel.", "Une interprétation spéciale de Dreamer axée sur le paysage, l’accueil chaleureux et l?élégance des voyages à plusieurs.", "نسخة خاصة من Dreamer تركز على المشهد الهادئ والضيافة الدافئة وأناقة السفر الجماعي."),
    price: t("Special edition MPV", "Édition spéciale MPV", "MPV إصدار خاص"),
    heroImage: "/voyah-resources/images/car/dreamriver/kv_1920.png",
    logo: "/voyah-resources/images/car/car_logo/dreamriver.png",
    gallery: [
      "/voyah-resources/images/car/dreamriver/sc_2.png",
      "/voyah-resources/images/car/dreamriver/sc_5-2.png",
      "/voyah-resources/images/car/dreamriver/sc_8.png"
    ],
    metrics: [
      metric("Scenic theme", "Edition theme", "Thème de l?édition", "طابع الإصدار"),
      metric("Warm cabin", "Interior mood", "Ambiance intérieure", "أجواء المقصورة"),
      metric("Shared journeys", "Travel mode", "Mode de voyage", "نمط السفر")
    ]
  }),
  makeModel({
    slug: "dreamer.html",
    title: t("24 Voyah Dreamer", "Voyah Dreamer 24", "Voyah Dreamer 24"),
    subtitle: t("Luxury electric MPV", "Monospace électrique de luxe", "MPV كهربائية فاخرة"),
    description: t("A spacious electric MPV created for premium family mobility with broad comfort and reassuring calm.", "Un monospace électrique spacieux pensé pour une mobilité familiale premium avec beaucoup de confort et une sérénité rassurante.", "سيارة MPV كهربائية واسعة صممت للحركة العائلية الفاخرة مع راحة كبيرة وهدوء مطمئن."),
    price: t("Electric luxury MPV", "Monospace électrique de luxe", "MPV كهربائية فاخرة"),
    heroImage: "/voyah-resources/images/car/dreamer/bg_2_1920.jpg",
    logo: "/voyah-resources/images/car/car_logo/dreamer.png",
    gallery: [
      "/voyah-resources/images/car/dreamer/bg_13_1920.jpg",
      "/voyah-resources/images/car/dreamer/bg_21_1920.jpg",
      "/voyah-resources/images/car/dreamer/bg_24_1920.jpg"
    ],
    metrics: [
      metric("Three-row comfort", "Space", "Espace", "المساحة"),
      metric("Family calm", "Travel atmosphere", "Ambiance de voyage", "أجواء الرحلة"),
      metric("Electric luxury", "Power theme", "Motorisation", "المنظومة")
    ]
  })
];
const infoPages = [
  {
    kind: "info",
    slug: "brand.html",
    eyebrow: t("Brand story", "Histoire de la marque", "قصة العلامة"),
    title: t("Hello world, I am Voyah!", "Bonjour le monde, je suis Voyah !", "مرحباً أيها العالم، أنا Voyah!"),
    summary: t(
      'As a premium brand rooted in Chinese culture, Voyah blends Chinese elegance with modern technology. Under the promise of "Intelligent Voyah, Creating Happiness," Voyah works with the new-generation backbone of society to pursue a better life.',
      'En tant que marque premium enracinée dans la culture chinoise, Voyah associe l’élégance chinoise à la technologie moderne. Sous la promesse de "Voyah intelligente, créer le bonheur", Voyah avance avec la nouvelle génération de forces vives de la société pour poursuivre une vie meilleure.',
      'بصفتها علامة راقية متجذرة في الثقافة الصينية، تمزج Voyah بين الأناقة الصينية والتكنولوجيا الحديثة. وضمن وعد "Voyah الذكية، تصنع السعادة"، تسير مع الجيل الجديد من القوى الفاعلة في المجتمع نحو حياة أفضل.'
    ),
    heroImage: "/static/assets/world-fec50d02.jpg",
    blocks: [
      block("/static/assets/greeting-b368cd0d.jpg", "Brand story", "Histoire de la marque", "قصة العلامة", "Voyah is a premium brand rooted in Chinese culture and defined by Chinese elegance and modern technology.", "Voyah est une marque premium enracinée dans la culture chinoise et définie par l’élégance chinoise et la technologie moderne.", "Voyah علامة راقية متجذرة في الثقافة الصينية وتقوم على الأناقة الصينية والتكنولوجيا الحديثة."),
      block("/static/assets/future-6727dcc7.png", "Design philosophy", "Philosophie de design", "فلسفة التصميم", "A calm, flowing form language that balances warmth, confidence, and forward motion.", "Un langage formel fluide et apaisé qui équilibre chaleur, assurance et élan vers l’avant.", "لغة تصميم هادئة وانسيابية توازن بين الدفء والثقة والحركة إلى الأمام."),
      block("/static/assets/world-6e618fb7.png", "Technology philosophy", "Philosophie technologique", "فلسفة التكنولوجيا", "Warm technology, human-centered interaction, and intelligent systems work together for a premium experience.", "La technologie chaleureuse, l’interaction centrée sur l’humain et les systèmes intelligents travaillent ensemble pour une expérience premium.", "تعمل التكنولوجيا الودية والتفاعل المتمحور حول الإنسان والأنظمة الذكية معاً لتقديم تجربة راقية."),
      block("/static/assets/greeting2-5b965b2d.png", "ESSA architecture", "Architecture ESSA", "منصة ESSA", "The native intelligent electric architecture brings extreme safety, intuitive control, and all-round comfort.", "L’architecture électrique intelligente native apporte une sécurité extrême, une maîtrise intuitive et un confort global.", "توفر المنصة الكهربائية الذكية الأصلية سلامة قصوى وتحكماً بديهياً وراحة شاملة."),
      block("/static/assets/world-fec50d02.jpg", "Voyah Power", "Voyah Power", "Voyah Power", "A native multi-power technology platform built for power, efficiency, battery safety, and smoothness.", "Une plateforme technologique multi-énergie native conçue pour la puissance, l’efficacité, la sécurité batterie et la douceur.", "منصة تقنية متعددة الطاقة أصلية تجمع بين القوة والكفاءة وسلامة البطارية والنعومة.")
    ]
  },
  {
    kind: "info",
    slug: "store.html",
    eyebrow: t("Store center", "Centre de magasins", "مركز المعارض"),
    title: t("Store Center", "Centre de magasins", "مركز المعارض"),
    summary: t("Find Voyah spaces, full-function user centers, delivery centers, and service centers near you.", "Trouvez les espaces Voyah, centres utilisateurs à service complet, centres de livraison et centres de service près de chez vous.", "اعثر على مساحات Voyah ومراكز المستخدمين متكاملة الوظائف ومراكز التسليم ومراكز الخدمة القريبة منك."),
    heroImage: "/static/assets/service_bg-047aedf5.png",
    metrics: [
      metric("Retail", "Experience type", "Type d’expérience", "نوع التجربة"),
      metric("1 journey", "Service flow", "Parcours de service", "مسار الخدمة"),
      metric("User center", "Ownership touchpoint", "Point de contact", "نقطة التواصل")
    ],
    blocks: [
      block("/static/assets/service-502e6c35.jpg", "Voyah Space and full-function user center", "Espace Voyah et centre utilisateur à service complet", "مساحة Voyah ومركز المستخدم متكامل الوظائف", "Voyah retail spaces combine consultation, experience, booking, and delivery support in one premium environment.", "Les espaces de vente Voyah réunissent conseil, expérience, réservation et accompagnement à la livraison dans un même environnement premium.", "تجمع مساحات Voyah بين الاستشارة والتجربة والحجز ودعم التسليم في بيئة فاخرة واحدة."),
      block("/static/assets/store2-00eb05d9.png", "Model discovery and test-drive coordination", "Découverte des modèles et coordination des essais", "اكتشاف الطرازات وتنسيق تجربة القيادة", "The store route helps users move from first contact to test-drive confidence through a calm, guided experience.", "Le parcours en magasin aide l’utilisateur à passer du premier contact à la confiance de l’essai grâce à une expérience calme et guidée.", "يساعد المسار داخل المعرض المستخدم على الانتقال من أول تواصل إلى الثقة في تجربة القيادة عبر تجربة هادئة وموجهة."),
      block("/static/assets/store3-397705c8.png", "Ordering, delivery, and ownership onboarding", "Commande, livraison et prise en main de la possession", "الطلب والتسليم والتهيئة للملكية", "Ordering support, delivery preparation, and digital onboarding extend the premium experience beyond the visit.", "L’accompagnement à la commande, la préparation à la livraison et l’intégration numérique prolongent l’expérience premium au-delà de la visite.", "يمد دعم الطلب وتجهيز التسليم والتهيئة الرقمية التجربة الفاخرة إلى ما بعد الزيارة."),
      block("/static/assets/store1-ae6ca1c1.png", "Service reception and aftersales coordination", "Accueil service et coordination après-vente", "الاستقبال الخدمي وتنسيق ما بعد البيع", "Service appointments, handoffs, and follow-up are coordinated so that support feels consistent at every touchpoint.", "Les rendez-vous service, la remise du véhicule et le suivi sont coordonnés afin que l’assistance reste cohérente à chaque point de contact.", "تُنسَّق مواعيد الخدمة وتسليم السيارة والمتابعة بحيث تبدو المساندة متسقة عبر كل نقطة تواصل.")
    ],
    ctaLabel: t("Book a visit", "Réserver une visite", "احجز زيارة"),
    ctaSlug: "book-drive.html"
  },
  {
    kind: "info",
    slug: "service.html",
    eyebrow: t("Service", "Service", "الخدمة"),
    title: t("Voyah Service", "Service Voyah", "خدمات Voyah"),
    summary: t("You are responsible for free pursuit of dreams; Voyah is responsible for attentive protection.", "Vous êtes responsable de la poursuite libre des rêves; Voyah est responsable d’une protection attentive.", "أنت مسؤول عن السعي الحر وراء الأحلام، وVoyah مسؤولة عن الحماية الدقيقة."),
    heroImage: "/static/assets/service-502e6c35.jpg",
    blocks: [
      block("/static/assets/section3_2-4fb471c7.jpg", "Sincere reception", "Accueil sincère", "استقبال صادق", "Every detail is treated with sincerity.", "Chaque détail est traité avec sincérité.", "يُعامل كل تفصيل بإخلاص."),
      block("/static/assets/section3_3-20237755.jpg", "Ceremonial delivery", "Livraison cérémonielle", "تسليم احتفالي", "Every promise is honored with ceremony.", "Chaque promesse est honorée avec cérémonie.", "يُوفى بكل وعد بطابع احتفالي."),
      block("/static/assets/section4_1-f7cf566b.jpg", "7×24-hour protection", "Protection 7×24 h", "حماية على مدار 7×24 ساعة", "Voyah stands guard for every journey around the clock.", "Voyah veille sur chaque trajet jour et nuit.", "تظل Voyah في خدمة كل رحلة على مدار الساعة."),
      block("/static/assets/section5_2-771f4ab2.jpg", "Professional team", "Équipe professionnelle", "فريق محترف", "A trustworthy full-journey service experience.", "Une expérience de service complète et digne de confiance.", "تجربة خدمة موثوقة على امتداد الرحلة.")
    ]
  },
  {
    kind: "info",
    slug: "energy.html",
    eyebrow: t("Energy", "Énergie", "الطاقة"),
    title: t("Voyah Energy", "Énergie Voyah", "طاقة Voyah"),
    summary: t(
      "A connected energy ecosystem combining charging access, route intelligence, and long-distance confidence.",
      "Un écosystème énergie connecté qui combine l’accès à la recharge, l’intelligence d’itinéraire et la confiance sur longue distance.",
      "منظومة طاقة مترابطة تجمع بين الوصول إلى الشحن وذكاء المسار والثقة في الرحلات الطويلة."
    ),
    heroImage: "/static/assets/energy_bg-4482e81f.jpg",
    metrics: [
      metric("1,540,000+", "Integrated charging resources", "Ressources de recharge intégrées", "موارد الشحن المدمجة"),
      metric("16,000+", "Ultra-fast charging resources", "Ressources de recharge ultra-rapide", "موارد الشحن فائق السرعة"),
      metric("530,000,000+ kWh", "Cumulative charging delivered", "Recharge cumulée fournie", "إجمالي الطاقة المشحونة"),
      metric("170,000+ tons", "Cumulative carbon reduction", "Réduction carbone cumulée", "إجمالي خفض انبعاثات الكربون")
    ],
    blocks: [
      block("/static/assets/energy_bg-4482e81f.jpg", "Network collaboration", "Collaboration réseau", "تكامل الشبكة", "Voyah Energy links brand, partner, and public charging infrastructure into one coordinated user-facing network.", "Voyah Energy relie les infrastructures de recharge de la marque, des partenaires et du réseau public dans un même système coordonné.", "تربط طاقة Voyah بين بنية الشحن التابعة للعلامة والشركاء والشبكة العامة ضمن نظام موحد ومنسق."),
      block("/static/assets/charge_pile_bg-2c7b414e.png", "Fast replenishment", "Recharge rapide", "إعادة شحن سريعة", "High-power charging scenarios are optimized for both daily commutes and long-distance travel rhythms.", "Les scénarios de recharge haute puissance sont optimisés pour les trajets quotidiens comme pour les longues distances.", "تم تحسين سيناريوهات الشحن عالي القدرة لتناسب التنقل اليومي والرحلات الطويلة."),
      block("/static/assets/power_bg1-7048cd30.png", "Smart route planning", "Planification intelligente", "تخطيط ذكي للمسار", "Digital guidance helps users plan charging stops based on route length, station availability, and vehicle status.", "Le guidage numérique aide à planifier les arrêts de recharge selon la distance, la disponibilité des stations et l’état du véhicule.", "يساعد الإرشاد الرقمي على تخطيط محطات الشحن وفق طول المسار وتوفر المحطات وحالة المركبة."),
      block("/static/assets/power_bg2-a6639f1e.png", "Long-term sustainability", "Durabilité long terme", "استدامة طويلة المدى", "The energy platform supports efficient operation and contributes to measurable long-term carbon reduction outcomes.", "La plateforme énergétique soutient une exploitation efficace et contribue à des résultats mesurables de réduction carbone.", "تدعم منصة الطاقة التشغيل الفعال وتسهم في نتائج قابلة للقياس لخفض الانبعاثات على المدى الطويل.")
    ]
  },
  {
    kind: "info",
    slug: "corporate.html",
    eyebrow: t("About Voyah", "À propos de Voyah", "عن Voyah"),
    title: t("Corporate Culture", "Culture d’entreprise", "الثقافة المؤسسية"),
    summary: t("Voyah is committed to becoming a user-oriented technology company and a trusted Chinese premium intelligent new-energy vehicle brand.", "Voyah s’engage à devenir une entreprise technologique orientée utilisateur et une marque chinoise premium de véhicules intelligents à énergie nouvelle digne de confiance.", "تلتزم Voyah بأن تصبح شركة تقنية موجهة للمستخدم وعلامة صينية راقية موثوقة في المركبات الذكية العاملة بالطاقة الجديدة."),
    heroImage: "/static/assets/corporate_bg_1-33cad798.png",
    blocks: [
      block("/static/assets/corporate_poster_1-c2c8c7ca.jpg", "Mission", "Mission", "المهمة", "Voyah is committed to becoming a user-oriented technology company.", "Voyah s’engage à devenir une entreprise technologique orientée utilisateur.", "تلتزم Voyah بأن تصبح شركة تقنية موجهة للمستخدم."),
      block("/static/assets/corporate_poster_8-7da49d74.png", "Vision", "Vision", "الرؤية", "A trusted Chinese premium intelligent new-energy vehicle brand.", "Une marque chinoise premium de véhicules intelligents à énergie nouvelle digne de confiance.", "علامة صينية راقية موثوقة في المركبات الذكية العاملة بالطاقة الجديدة."),
      block("/static/assets/corporate_poster_14-b8674e6c.png", "Core values", "Valeurs fondamentales", "القيم الأساسية", "Responsibility, sincerity, quality, and continuous refinement.", "Responsabilité, sincérité, qualité et amélioration continue.", "المسؤولية والصدق والجودة والتحسين المستمر."),
      block("/static/assets/corporate_poster_5-a736217c.png", "Technology philosophy", "Philosophie technologique", "فلسفة التكنولوجيا", "Architecture, intelligence, safety, and efficiency as one connected system.", "Architecture, intelligence, sécurité et efficacité dans un seul système connecté.", "البنية والذكاء والسلامة والكفاءة ضمن منظومة مترابطة واحدة."),
      block("/static/assets/corporate_poster_10-0a7e5fec.png", "User value orientation", "Orientation vers la valeur utilisateur", "توجه القيمة للمستخدم", "Decisions guided by long-term user value.", "Des décisions guidées par la valeur utilisateur à long terme.", "قرارات تسترشد بالقيمة طويلة الأمد للمستخدم."),
      block("/static/assets/corporate_poster_17-43a6bf2c.png", "China-rooted, globally aware", "Ancrée en Chine, ouverte au monde", "متجذرة في الصين ومنفتحة عالمياً", "A clear global outlook in product, technology, and service standards.", "Une ouverture internationale nette dans les standards produit, technologiques et de service.", "رؤية عالمية واضحة في معايير المنتج والتقنية والخدمة.")
    ]
  },
  {
    kind: "info",
    slug: "joinus.html",
    eyebrow: t("Careers", "Carrières", "الوظائف"),
    title: t("Join Us", "Rejoignez-nous", "انضم إلينا"),
    summary: t(
      "We look forward to your joining so that we can build the blueprint together.",
      "Nous attendons votre arrivée pour construire ensemble le plan d’avenir.",
      "نتطلع إلى انضمامك حتى نبني معاً المخطط المستقبلي."
    ),
    heroImage: "/static/assets/joinus_bg_1920-f7158f6f.png",
    blocks: [
      block(
        "/static/assets/recruit_poster_1-679c5306.png",
        "Campus recruitment",
        "Recrutement campus",
        "التوظيف الجامعي",
        "Campus recruitment paths for young talent in engineering, design, digital systems, and user-facing roles.",
        "Des parcours de recrutement campus pour les jeunes talents en ingénierie, design, systèmes numériques et métiers orientés utilisateur.",
        "مسارات التوظيف الجامعي تستهدف المواهب الشابة في الهندسة والتصميم والأنظمة الرقمية والأدوار المواجهة للمستخدم."
      ),
      block(
        "/static/assets/recruit_poster_2-7a882da6.png",
        "Social recruitment",
        "Recrutement externe",
        "التوظيف من السوق",
        "Experienced talent for product, manufacturing, digital, and service roles.",
        "Des talents expérimentés pour les métiers du produit, de l’industrie, du numérique et du service.",
        "مواهب ذات خبرة في أدوار المنتج والتصنيع والرقمنة والخدمة."
      ),
      block(
        "/static/assets/recruit_form_bg-107b0556.jpg",
        "Scan to join the Voyah family",
        "Scanner pour rejoindre la famille Voyah",
        "امسح للانضمام إلى عائلة Voyah",
        "Recruitment information and role matching are organized for prospective candidates.",
        "L’information de recrutement et l’adéquation des postes sont organisées pour les candidats.",
        "تُنظم معلومات التوظيف ومواءمة الأدوار للمرشحين المحتملين."
      )
    ]
  },
  {
    kind: "info",
    slug: "recruit-partners.html",
    eyebrow: t("Partners", "Partenaires", "الشركاء"),
    title: t("Partner Recruitment", "Recrutement de partenaires", "استقطاب الشركاء"),
    summary: t("Build broader user reach through retail, delivery, and service collaboration.", "Développez une portée utilisateur plus large grâce à la collaboration retail, livraison et service.", "ابنوا نطاق وصول أوسع إلى المستخدمين عبر التعاون في البيع والتسليم والخدمة."),
    heroImage: "/static/assets/recruit_partners_bg_1920-81ee18a9.png",
    blocks: [
      block("/static/assets/recruit_partners_poster_1-f48b5641.jpg", "Network development", "Développement du réseau", "تطوير الشبكة", "Partner recruitment is positioned around long-term market development, regional coverage, and a consistent user experience across retail and service touchpoints.", "Le recrutement de partenaires est pensé autour du développement de marché à long terme, de la couverture régionale et d’une expérience utilisateur cohérente à travers les points de vente et de service.", "يتمحور استقطاب الشركاء حول تطوير السوق على المدى الطويل والتغطية الإقليمية وتقديم تجربة مستخدم متسقة عبر نقاط البيع والخدمة."),
      block("/static/assets/recruit_partners_poster_5-eff94200.png", "Capability requirements", "Exigences de capacité", "متطلبات القدرات", "Operational readiness, service capability, and premium brand presentation are the core standards in partner evaluation and onboarding.", "La préparation opérationnelle, la capacité de service et la présentation premium de la marque constituent les principaux standards de l’évaluation et de l’intégration des partenaires.", "تمثل الجاهزية التشغيلية والقدرة الخدمية وتقديم العلامة بصورة فاخرة المعايير الأساسية في تقييم الشركاء وضمهم."),
      block("/static/assets/recruit_partners_poster_9-c73e7510.jpg", "Shared growth", "Croissance partagée", "النمو المشترك", "The cooperation model emphasizes durable capability building and shared growth rather than short-term channel expansion alone.", "Le modèle de coopération privilégie la construction durable des capacités et la croissance partagée plutôt qu’une expansion de canal à court terme.", "يركز نموذج التعاون على بناء القدرات بصورة مستدامة وتحقيق نمو مشترك بدلاً من الاكتفاء بتوسيع القنوات على المدى القصير.")
    ]
  },
  {
    kind: "info",
    slug: "ir.html",
    eyebrow: t("Investor relations", "Relations investisseurs", "علاقات المستثمرين"),
    title: t("Investor Relations", "Relations investisseurs", "علاقات المستثمرين"),
    summary: t("Access company information, governance materials, and investor-facing reference documents.", "Accédez aux informations de l’entreprise, aux documents de gouvernance et aux supports de référence destinés aux investisseurs.", "اطلع على معلومات الشركة ومواد الحوكمة والمستندات المرجعية الموجهة إلى المستثمرين."),
    heroImage: "/static/assets/ir-3663d9c1.png",
    blocks: [
      block("/static/assets/prospectus-4ce8b045.png", "Company profile", "Profil de l’entreprise", "الملف التعريفي للشركة", "Core company profile materials are organized for structured review so that investors can quickly understand the company, its positioning, and its strategic direction.", "Les principaux documents de présentation de l’entreprise sont organisés pour une lecture structurée afin que les investisseurs comprennent rapidement la société, son positionnement et sa direction stratégique.", "نُظمت مواد الملف التعريفي الأساسية بصورة منظمة كي يتمكن المستثمرون من فهم الشركة وتموضعها واتجاهها الاستراتيجي بسرعة."),
      block("/static/assets/corporate-governance-1d981bac.png", "Governance structure", "Structure de gouvernance", "هيكل الحوكمة", "Governance information clarifies the company’s institutional structure, oversight framework, and operating principles for long-term development.", "Les informations de gouvernance clarifient la structure institutionnelle de l’entreprise, son cadre de supervision et ses principes de fonctionnement au service du développement de long terme.", "توضح معلومات الحوكمة الهيكل المؤسسي للشركة وإطار الرقابة ومبادئ التشغيل الداعمة للتطور طويل المدى."),
      block("/static/assets/ir2-93691f3f.png", "Reference materials", "Documents de référence", "مواد مرجعية", "Supporting materials provide additional context for financial review, governance understanding, and strategic reference.", "Les documents complémentaires apportent un contexte additionnel pour l’analyse financière, la compréhension de la gouvernance et la référence stratégique.", "توفر المواد الداعمة سياقاً إضافياً للمراجعة المالية وفهم الحوكمة والرجوع إلى التوجهات الاستراتيجية.")
    ]
  },
  {
    kind: "info",
    slug: "environmental.html",
    eyebrow: t("Environmental disclosure", "Informations environnementales", "الإفصاح البيئي"),
    title: t("Environmental Disclosure", "Informations environnementales", "الإفصاح البيئي"),
    summary: t("View official environmental disclosure information released by Voyah for public review.", "Consultez les informations environnementales officielles publiées par Voyah à destination du public.", "اطلع على معلومات الإفصاح البيئي الرسمية التي تنشرها Voyah للمراجعة العامة."),
    heroImage: "/static/assets/world-fec50d02.jpg",
    blocks: [
      block("/static/assets/earth_index-e4c6ae99.jpg", "Environmental disclosure information", "Informations d’ordre environnemental", "معلومات الإفصاح البيئي", "This section centralizes the official environmental disclosure information released by Voyah for public reference and review.", "Cette section centralise les informations officielles d’ordre environnemental publiées par Voyah pour la consultation publique.", "يعمل هذا القسم على تجميع معلومات الإفصاح البيئي الرسمية الصادرة عن Voyah لغايات المراجعة والاطلاع العام."),
      block("/static/assets/power_bg1-7048cd30.png", "Operational responsibility", "Responsabilité opérationnelle", "المسؤولية التشغيلية", "Environmental disclosure reflects the company’s operational responsibility and its commitment to compliant, transparent, and sustainable development.", "Les informations environnementales reflètent la responsabilité opérationnelle de l’entreprise et son engagement en faveur d’un développement conforme, transparent et durable.", "يعكس الإفصاح البيئي المسؤولية التشغيلية للشركة والتزامها بالتطور المتوافق والشفاف والمستدام."),
      block("/static/assets/world-6e618fb7.png", "Long-term orientation", "Orientation de long terme", "التوجه طويل المدى", "The disclosure framework emphasizes sustainable operation, ongoing management, and long-term environmental accountability.", "Le cadre de divulgation met l’accent sur une exploitation durable, une gestion continue et une responsabilité environnementale de long terme.", "يركز إطار الإفصاح على التشغيل المستدام والإدارة المستمرة والمساءلة البيئية طويلة الأجل.")
    ]
  },
  {
    kind: "info",
    slug: "document.html",
    eyebrow: t("Downloads", "Téléchargements", "التنزيلات"),
    title: t("Document Download", "Téléchargement de documents", "تنزيل المستندات"),
    summary: t("Download official manuals, reference documents, and related materials released by Voyah.", "Téléchargez les manuels officiels, documents de référence et matériaux associés publiés par Voyah.", "قم بتنزيل الأدلة الرسمية والمستندات المرجعية والمواد المرتبطة التي تنشرها Voyah."),
    heroImage: "/static/assets/user_manual-4441c1d3.png",
    blocks: [
      block("/static/assets/user_manual-4441c1d3.png", "User manuals", "Manuels utilisateur", "أدلة المستخدم", "Vehicle user manuals and owner documents are organized to support onboarding, daily use, and continued ownership reference.", "Les manuels utilisateur et documents propriétaires des véhicules sont organisés pour accompagner la prise en main, l’usage quotidien et la consultation continue pendant la possession.", "تم تنظيم أدلة المستخدم ووثائق المالك الخاصة بالمركبات لدعم البدء في الاستخدام والاستعمال اليومي والرجوع إليها أثناء فترة الملكية."),
      block("/static/assets/prospectus2-00a82650.png", "Reference documents", "Documents de référence", "مستندات مرجعية", "Supplementary reference documents are grouped to make searching, downloading, and comparison clearer and more efficient.", "Les documents de référence complémentaires sont regroupés afin de rendre la recherche, le téléchargement et la comparaison plus clairs et plus efficaces.", "جُمعت المستندات المرجعية الإضافية لجعل البحث والتنزيل والمقارنة أوضح وأكثر كفاءة."),
      block("/static/assets/app_code_160-5b2a34cc.png", "Digital retrieval", "Accès numérique", "الوصول الرقمي", "Document retrieval is connected to digital touchpoints so that official materials can be found conveniently and consistently.", "La récupération des documents est reliée aux points de contact numériques afin que les supports officiels puissent être trouvés de manière pratique et cohérente.", "يرتبط الوصول إلى المستندات بنقاط الوصول الرقمية بحيث يمكن العثور على المواد الرسمية بسهولة وبصورة متسقة.")
    ]
  },
  {
    kind: "info",
    slug: "purchasing.html",
    eyebrow: t("Procurement", "Achats", "المشتريات"),
    title: t("Procurement Information Disclosure", "Informations achats", "معلومات المشتريات"),
    summary: t("View official procurement information, historical procurement data, and supplier-related disclosures from Voyah.", "Consultez les informations achats officielles, les données historiques d’achats et les éléments de divulgation liés aux fournisseurs publiés par Voyah.", "اطلع على معلومات المشتريات الرسمية وبيانات المشتريات التاريخية والإفصاحات المرتبطة بالموردين المنشورة من Voyah."),
    heroImage: "/static/assets/partner_pc-b12d249b.png",
    blocks: [
      block("/static/assets/partner_pc-b12d249b.png", "Procurement information", "Informations achats", "معلومات المشتريات", "Procurement information is disclosed for public reference around supplier cooperation, sourcing transparency, and long-term industrial coordination.", "Les informations achats sont publiées à titre de référence publique autour de la coopération fournisseurs, de la transparence du sourcing et de la coordination industrielle de long terme.", "يتم الإفصاح عن معلومات المشتريات للرجوع العام حول تعاون الموردين وشفافية التوريد والتنسيق الصناعي طويل الأمد."),
      block("/static/assets/charge_pile_bg-2c7b414e.png", "Historical procurement data", "Données historiques d’achats", "بيانات المشتريات التاريخية", "Historical procurement data supports document review and gives partners a clearer view of the structure and continuity of purchasing activity.", "Les données historiques d’achats soutiennent la consultation documentaire et donnent aux partenaires une vision plus claire de la structure et de la continuité de l’activité d’achat.", "تدعم بيانات المشتريات التاريخية مراجعة المستندات وتمنح الشركاء تصوراً أوضح عن هيكل نشاط الشراء واستمراريته."),
      block("/static/assets/power_bg2-a6639f1e.png", "Supplier collaboration", "Coopération fournisseurs", "تعاون الموردين", "Supplier collaboration emphasizes quality standards, delivery reliability, process clarity, and structured long-term cooperation.", "La coopération avec les fournisseurs met l’accent sur les standards qualité, la fiabilité d’exécution, la clarté des processus et une coopération structurée sur le long terme.", "يركز التعاون مع الموردين على معايير الجودة وموثوقية التنفيذ ووضوح العمليات والتعاون المنظم طويل الأمد.")
    ]
  },
  {
    kind: "info",
    slug: "book-drive.html",
    eyebrow: t("Experience", "Expérience", "التجربة"),
    title: t("Book a Test Drive", "Réserver un essai", "احجز تجربة قيادة"),
    summary: t("Book a guided test drive with the Voyah lineup.", "Réservez un essai guidé avec la gamme Voyah.", "احجز تجربة قيادة موجّهة مع مجموعة Voyah."),
    heroImage: "/static/assets/drive1-2ff63958.png",
    blocks: [
      block("/static/assets/drive2-aa10c694.png", "Guided selection", "Choix guidé", "اختيار موجّه", "Prospective owners can narrow the lineup according to usage needs, size preference, and product character before scheduling an in-person drive.", "Les futurs clients peuvent affiner la gamme selon les besoins d’usage, les préférences d’espace et le caractère du produit avant de programmer un essai en magasin.", "يمكن للعملاء المحتملين تضييق الاختيار بحسب احتياجات الاستخدام وتفضيلات الحجم وطابع المنتج قبل تحديد موعد تجربة القيادة في المعرض."),
      block("/static/assets/store3-fe6e8d7d.jpg", "Store coordination", "Coordination en magasin", "تنسيق المعرض", "The booking flow connects directly to the physical store network so that consultation, arrival planning, and drive preparation stay within one smooth process.", "Le parcours de réservation se connecte directement au réseau de magasins afin que le conseil, la préparation de la visite et l’organisation de l’essai restent dans un processus fluide unique.", "يرتبط مسار الحجز مباشرة بشبكة المعارض الفعلية حتى تظل الاستشارة والتخطيط للزيارة وتجهيز تجربة القيادة ضمن عملية سلسة واحدة."),
      block("/static/assets/life_center_poster-fb653778.png", "Ownership onboarding", "Découverte de la possession", "تهيئة الملكية", "A test drive supports not only product discovery but also a clearer understanding of the full ownership journey and service experience.", "L’essai sert non seulement à découvrir le produit, mais aussi à mieux comprendre le parcours de possession complet et l’expérience de service.", "لا تخدم تجربة القيادة اكتشاف المنتج فقط، بل تساعد أيضاً على فهم أوضح لرحلة الملكية الكاملة وتجربة الخدمة.")
    ],
    ctaLabel: t("Visit store center", "Visiter le centre de magasins", "زيارة مركز المعارض"),
    ctaSlug: "store.html"
  }
];
const legalPages = [
  {
    kind: "legal",
    slug: "legal.html",
    eyebrow: t("Legal", "Mentions légales", "الشؤون القانونية"),
    title: t("Legal statement", "Déclaration légale", "البيان القانوني"),
    summary: t("This website is operated by Voyah Automotive Technology Co., Ltd. The content, trademarks, visual materials, and related rights displayed on this website are protected by applicable laws and regulations.", "Ce site web est exploité par Voyah Automotive Technology Co., Ltd. Les contenus, marques, éléments visuels et droits associés présentés sur ce site sont protégés par les lois et règlements applicables.", "يتم تشغيل هذا الموقع بواسطة Voyah Automotive Technology Co., Ltd. وتخضع المحتويات والعلامات التجارية والمواد البصرية والحقوق المرتبطة المعروضة على هذا الموقع للحماية بموجب القوانين واللوائح المعمول بها."),
    sections: [
      {
        title: t("Intellectual property", "Propriété intellectuelle", "الملكية الفكرية"),
        paragraphs: [
          t("Without prior written consent from Voyah, no organization or individual may copy, reproduce, modify, republish, transmit, display, mirror, or otherwise use the contents of this website in any form.", "Sans l’accord écrit préalable de Voyah, aucune organisation ni aucun individu ne peut copier, reproduire, modifier, republier, transmettre, afficher, reproduire en miroir ou utiliser de toute autre manière les contenus de ce site sous quelque forme que ce soit.", "من دون موافقة كتابية مسبقة من Voyah، لا يجوز لأي جهة أو فرد نسخ أو إعادة إنتاج أو تعديل أو إعادة نشر أو نقل أو عرض أو إنشاء نسخ معكوسة أو استخدام محتويات هذا الموقع بأي شكل من الأشكال."),
          t("The brand name Voyah, product names, logos, images, videos, and related design materials are owned by Voyah or the relevant rights holders.", "Le nom de marque Voyah, les noms de produits, les logos, les images, les vidéos et les éléments de design associés appartiennent à Voyah ou aux titulaires de droits concernés.", "إن اسم العلامة Voyah وأسماء المنتجات والشعارات والصور ومقاطع الفيديو والمواد التصميمية المرتبطة بها مملوكة لـ Voyah أو لأصحاب الحقوق المعنيين.")
        ]
      },
      {
        title: t("Disclaimer", "Clause de non-responsabilité", "إخلاء المسؤولية"),
        paragraphs: [
          t("The information published on this website is provided for reference. Vehicle configurations, colors, functions, services, and availability may vary by model, market, and time of release. Please refer to the latest official product information and local retail channels.", "Les informations publiées sur ce site sont fournies à titre indicatif. Les configurations, couleurs, fonctions, services et disponibilités des véhicules peuvent varier selon les modèles, les marchés et les périodes de lancement. Veuillez vous référer aux dernières informations produits officielles et aux canaux commerciaux locaux.", "تُقدَّم المعلومات المنشورة على هذا الموقع لأغراض مرجعية. وقد تختلف تجهيزات المركبات والألوان والوظائف والخدمات ومدى التوافر بحسب الطراز والسوق وتوقيت الإطلاق. يُرجى الرجوع إلى أحدث المعلومات الرسمية الخاصة بالمنتج وإلى قنوات البيع المحلية.")
        ]
      },
      {
        title: t("External links", "Liens externes", "روابط خارجية"),
        paragraphs: [
          t("This website may contain links to third-party websites for convenience. Voyah does not control those websites and is not responsible for their content, privacy practices, or availability.", "Ce site peut contenir des liens vers des sites tiers à titre pratique. Voyah ne contrôle pas ces sites et n’est pas responsable de leur contenu, de leurs pratiques de confidentialité ou de leur disponibilité.", "قد يحتوي هذا الموقع على روابط إلى مواقع تابعة لجهات خارجية لغايات التسهيل. لا تتحكم Voyah في هذه المواقع ولا تتحمل مسؤولية محتواها أو ممارسات الخصوصية فيها أو مدى توافرها.")
        ]
      },
      {
        title: t("Governing law", "Droit applicable", "القانون الواجب التطبيق"),
        paragraphs: [
          t("Unless otherwise required by mandatory law, these terms are governed by the laws applicable to the operator of this website. Any disputes should be handled through lawful procedures in the competent jurisdiction.", "Sauf disposition contraire imposée par une loi impérative, les présentes conditions sont régies par les lois applicables à l’exploitant de ce site. Tout litige doit être traité selon les procédures légales devant la juridiction compétente.", "ما لم تقتضِ القوانين الإلزامية خلاف ذلك، تخضع هذه الشروط للقوانين السارية على الجهة المشغلة لهذا الموقع. ويجب معالجة أي نزاع وفق الإجراءات القانونية أمام الجهة القضائية المختصة.")
        ]
      }
    ]
  },
  {
    kind: "legal",
    slug: "privacy.html",
    eyebrow: t("Privacy", "Confidentialité", "الخصوصية"),
    title: t("Privacy policy", "Politique de confidentialité", "سياسة الخصوصية"),
    summary: t("Voyah values and protects the personal information of users. This policy explains how personal information may be collected, used, stored, protected, and managed when using Voyah websites, applications, mini programs, products, and services.", "Voyah attache une grande importance à la protection des informations personnelles des utilisateurs. Cette politique explique comment les informations personnelles peuvent être collectées, utilisées, stockées, protégées et gérées lors de l’utilisation des sites web, applications, mini-programmes, produits et services Voyah.", "تولي Voyah أهمية كبيرة لحماية المعلومات الشخصية للمستخدمين. وتوضح هذه السياسة كيفية جمع المعلومات الشخصية واستخدامها وتخزينها وحمايتها وإدارتها عند استخدام مواقع Voyah وتطبيقاتها وبرامجها المصغرة ومنتجاتها وخدماتها."),
    sections: [
      {
        title: t("Information collection and use", "Collecte et utilisation des informations", "جمع المعلومات واستخدامها"),
        paragraphs: [
          t("Depending on the services you use, Voyah may collect information necessary to provide account login, test-drive booking, vehicle purchase, after-sales service, charging, customer support, and community functions.", "Selon les services que vous utilisez, Voyah peut collecter les informations nécessaires à la connexion au compte, à la réservation d’essai, à l’achat du véhicule, au service après-vente, à la recharge, au support client et aux fonctions communautaires.", "وفقاً للخدمات التي تستخدمها، قد تجمع Voyah المعلومات اللازمة لتسجيل الدخول إلى الحساب وحجز تجربة القيادة وشراء السيارة وخدمة ما بعد البيع والشحن ودعم العملاء ووظائف المجتمع."),
          t("Voyah uses personal information to deliver services, verify identity, maintain operational security, improve products and services, and meet legal and regulatory obligations.", "Voyah utilise les informations personnelles pour fournir les services, vérifier l’identité, assurer la sécurité opérationnelle, améliorer les produits et services et satisfaire aux obligations légales et réglementaires.", "تستخدم Voyah المعلومات الشخصية لتقديم الخدمات والتحقق من الهوية والحفاظ على أمن التشغيل وتحسين المنتجات والخدمات والامتثال للالتزامات القانونية والتنظيمية.")
        ]
      },
      {
        title: t("Storage and protection", "Conservation et protection", "التخزين والحماية"),
        paragraphs: [
          t("Voyah adopts management, technical, and organizational measures to protect personal information from unauthorized access, disclosure, alteration, damage, or loss.", "Voyah adopte des mesures de gestion, techniques et organisationnelles pour protéger les informations personnelles contre tout accès, divulgation, modification, dommage ou perte non autorisés.", "تعتمد Voyah تدابير إدارية وتقنية وتنظيمية لحماية المعلومات الشخصية من الوصول غير المصرح به أو الكشف أو التعديل أو التلف أو الفقدان."),
          t("Where required by law or regulation, you may exercise rights such as access, correction, deletion, withdrawal of consent, and account cancellation through the official channels provided by Voyah.", "Lorsque la loi ou la réglementation l’exige, vous pouvez exercer des droits tels que l’accès, la rectification, la suppression, le retrait du consentement et la suppression du compte via les canaux officiels fournis par Voyah.", "عند الاقتضاء بموجب القوانين أو اللوائح، يمكنك ممارسة حقوق مثل الوصول إلى المعلومات وتصحيحها وحذفها وسحب الموافقة وإلغاء الحساب عبر القنوات الرسمية التي توفرها Voyah.")
        ]
      },
      {
        title: t("Sharing and transfer", "Partage et transfert", "المشاركة والنقل"),
        paragraphs: [
          t("Voyah may share personal information with service providers when necessary to deliver services (for example, appointment scheduling, delivery, connectivity, or customer support). Voyah requires such parties to follow applicable laws and security standards.", "Voyah peut partager des informations personnelles avec des prestataires lorsque cela est nécessaire pour fournir les services (par exemple, prise de rendez-vous, livraison, connectivité ou support client). Voyah exige de ces parties qu’elles respectent les lois applicables et des standards de sécurité.", "قد تشارك Voyah المعلومات الشخصية مع مزودي الخدمات عند الضرورة لتقديم الخدمات (مثل جدولة المواعيد أو التسليم أو الاتصال أو دعم العملاء). وتُلزم Voyah هذه الجهات بالامتثال للقوانين المعمول بها ومعايير الأمان.")
        ]
      },
      {
        title: t("Contact", "Contact", "التواصل"),
        paragraphs: [
          t("If you have questions about this policy or wish to exercise privacy-related rights, please use the official Voyah service channels provided on this website.", "Si vous avez des questions concernant cette politique ou souhaitez exercer des droits liés à la confidentialité, veuillez utiliser les canaux officiels de service Voyah indiqués sur ce site.", "إذا كانت لديك أسئلة حول هذه السياسة أو رغبت في ممارسة حقوق تتعلق بالخصوصية، يُرجى استخدام قنوات خدمة Voyah الرسمية المتاحة على هذا الموقع.")
        ]
      }
    ]
  },
  {
    kind: "legal",
    slug: "cookie.html",
    eyebrow: t("Cookies", "Cookies", "ملفات تعريف الارتباط"),
    title: t("Cookie policy", "Politique relative aux cookies", "سياسة ملفات تعريف الارتباط"),
    summary: t("To ensure the proper operation of the website and improve your browsing experience, Voyah may use cookies and similar technologies. This policy explains the categories, purposes, and management methods of such technologies.", "Afin d’assurer le bon fonctionnement du site et d’améliorer votre expérience de navigation, Voyah peut utiliser des cookies et des technologies similaires. Cette politique explique les catégories, les finalités et les modalités de gestion de ces technologies.", "لضمان التشغيل السليم للموقع وتحسين تجربة التصفح، قد تستخدم Voyah ملفات تعريف الارتباط والتقنيات المشابهة. وتوضح هذه السياسة فئات هذه التقنيات وأغراضها وطرق إدارتها."),
    sections: [
      {
        title: t("Use of cookies", "Utilisation des cookies", "استخدام ملفات تعريف الارتباط"),
        paragraphs: [
          t("Cookies may be used to remember language preferences, maintain login status, optimize performance, analyze traffic, and support service security and service quality improvement.", "Les cookies peuvent être utilisés pour mémoriser les préférences linguistiques, maintenir la connexion, optimiser les performances, analyser le trafic et soutenir la sécurité ainsi que l’amélioration de la qualité de service.", "قد تُستخدم ملفات تعريف الارتباط لتذكر تفضيلات اللغة والحفاظ على حالة تسجيل الدخول وتحسين الأداء وتحليل الزيارات ودعم أمن الخدمة وتحسين جودتها.")
        ]
      },
      {
        title: t("Cookie categories", "Catégories de cookies", "فئات ملفات تعريف الارتباط"),
        paragraphs: [
          t("Cookies can be categorized as strictly necessary (site operation), functional (preferences), analytics (measurement), and marketing (relevance). Some categories may not be used in all markets or on all pages.", "Les cookies peuvent être classés en cookies strictement nécessaires (fonctionnement du site), fonctionnels (préférences), analytiques (mesure) et marketing (pertinence). Certaines catégories peuvent ne pas être utilisées sur tous les marchés ou sur toutes les pages.", "يمكن تصنيف ملفات تعريف الارتباط إلى ضرورية للغاية (لتشغيل الموقع) ووظيفية (للتفضيلات) وتحليلية (للقياس) وتسويقية (للملاءمة). وقد لا تُستخدم بعض الفئات في جميع الأسواق أو على جميع الصفحات.")
        ]
      },
      {
        title: t("Management and control", "Gestion et contrôle", "الإدارة والتحكم"),
        paragraphs: [
          t("Most browsers allow you to manage or disable cookies through their settings. Please note that disabling certain cookies may affect the availability or user experience of some functions.", "La plupart des navigateurs permettent de gérer ou de désactiver les cookies via leurs paramètres. Veuillez noter que la désactivation de certains cookies peut affecter la disponibilité ou l’expérience utilisateur de certaines fonctions.", "تتيح معظم المتصفحات إدارة ملفات تعريف الارتباط أو تعطيلها عبر الإعدادات. ويُرجى ملاحظة أن تعطيل بعض الملفات قد يؤثر في توفر بعض الوظائف أو في تجربة استخدامها.")
        ]
      },
      {
        title: t("Third-party technologies", "Technologies tierces", "تقنيات الجهات الخارجية"),
        paragraphs: [
          t("Some services may rely on third-party measurement or media technologies. Where used, these providers may set or read cookies according to their own policies.", "Certaines fonctionnalités peuvent s’appuyer sur des technologies de mesure ou de média de tiers. Le cas échéant, ces fournisseurs peuvent déposer ou lire des cookies selon leurs propres politiques.", "قد تعتمد بعض الخدمات على تقنيات قياس أو وسائط تابعة لجهات خارجية. وعند استخدامها، قد تقوم هذه الجهات بوضع ملفات تعريف ارتباط أو قراءتها وفق سياساتها الخاصة.")
        ]
      }
    ]
  },
  {
    kind: "legal",
    slug: "authorization.html",
    eyebrow: t("Permissions", "Autorisations", "الأذونات"),
    title: t("Permissions statement", "Déclaration relative aux autorisations", "بيان الأذونات"),
    summary: t("When using Voyah applications, mini programs, website functions, and connected services, certain device permissions may be requested in order to deliver the corresponding features and service experience.", "Lors de l’utilisation des applications Voyah, des mini-programmes, des fonctions du site et des services connectés, certaines autorisations de l’appareil peuvent être demandées afin de fournir les fonctionnalités correspondantes et l’expérience de service.", "عند استخدام تطبيقات Voyah وبرامجها المصغرة ووظائف الموقع والخدمات المتصلة، قد يتم طلب بعض أذونات الجهاز لتقديم الوظائف المقابلة وتجربة الخدمة المرتبطة بها."),
    sections: [
      {
        title: t("Typical permissions", "Autorisations courantes", "الأذونات المعتادة"),
        paragraphs: [
          t("Depending on the feature in use, Voyah may request permissions such as location, camera, photo album, microphone, Bluetooth, notifications, and storage access.", "Selon la fonctionnalité utilisée, Voyah peut demander des autorisations telles que la localisation, l’appareil photo, l’album photo, le microphone, le Bluetooth, les notifications et l’accès au stockage.", "بحسب الوظيفة المستخدمة، قد تطلب Voyah أذونات مثل الموقع والكاميرا وألبوم الصور والميكروفون والبلوتوث والإشعارات والوصول إلى التخزين.")
        ]
      },
      {
        title: t("Purpose and management", "Finalité et gestion", "الغرض والإدارة"),
        paragraphs: [
          t("Permissions are only used for the functions described above. You may manage or revoke permissions through your system settings, but doing so may affect the availability of related services.", "Les autorisations sont utilisées uniquement pour les fonctions décrites ci-dessus. Vous pouvez les gérer ou les révoquer via les paramètres du système, mais cela peut affecter la disponibilité des services associés.", "تُستخدم الأذونات فقط للوظائف المذكورة أعلاه. ويمكنك إدارتها أو سحبها من خلال إعدادات النظام، إلا أن ذلك قد يؤثر في توفر الخدمات المرتبطة بها.")
        ]
      },
      {
        title: t("When permissions are requested", "Quand les autorisations sont demandées", "متى يتم طلب الأذونات"),
        paragraphs: [
          t("Permissions are requested only when a feature requires them. For example, location may be requested for store discovery, Bluetooth for vehicle connectivity, and camera/photo access for uploading materials.", "Les autorisations ne sont demandées que lorsqu’une fonctionnalité en a besoin. Par exemple, la localisation peut être requise pour trouver un magasin, le Bluetooth pour la connectivité du véhicule et l’accès caméra/photo pour le téléchargement de contenus.", "لا يتم طلب الأذونات إلا عندما تتطلبها الوظيفة. فعلى سبيل المثال، قد يُطلب الموقع للعثور على المعرض، والبلوتوث لاتصال السيارة، والوصول إلى الكاميرا أو الصور لرفع المحتوى.")
        ]
      },
      {
        title: t("Notifications", "Notifications", "الإشعارات"),
        paragraphs: [
          t("If you enable notifications, Voyah may send service-related reminders such as booking updates, delivery status, or safety notices. You can disable notifications at any time through system settings.", "Si vous activez les notifications, Voyah peut envoyer des rappels liés au service tels que les mises à jour de réservation, l’état de livraison ou des avis de sécurité. Vous pouvez les désactiver à tout moment via les paramètres du système.", "إذا قمت بتفعيل الإشعارات، فقد ترسل Voyah تذكيرات مرتبطة بالخدمة مثل تحديثات الحجز أو حالة التسليم أو إشعارات السلامة. ويمكنك تعطيل الإشعارات في أي وقت من خلال إعدادات النظام.")
        ]
      }
    ]
  }
];
const sitePages = [...models, ...infoPages, ...legalPages];
sitePages.map((page) => page.slug);
const sitePageMap = new Map(sitePages.map((page) => [page.slug, page]));
const homePage = {
  slides: [
    {
      image: "/website/advertisingbanner/image/41270475-24cb-4a5e-a4fc-7caad6e403fe1773822300406.png",
      logo: "/website/advertisingbanner/image/6a0968f7-2b35-42a3-86f6-91e2196c4a7f1770618012728.png",
      title: t("", "", ""),
      description: t("", "", ""),
      primaryLabel: t("", "", ""),
      secondaryLabel: t("", "", ""),
      primarySlug: "brand.html"
    },
    {
      image: "/website/advertisingbanner/image/5b2f214c-174b-49fb-b085-ede76cad277f1770618069208.png",
      video: "/website/advertisingbanner/video/f0c4f930-2c5e-4b18-8212-e73cb76c18b11770618136349.mp4",
      logo: "/website/advertisingbanner/image/c3a9ed8d-150d-4c86-a584-119c0c7bd3e91770618125835.png",
      title: t("", "", ""),
      description: t("A new-era flagship six-seat SUV", "Un SUV phare à six places de nouvelle génération", "سيارة SUV رائدة بستة مقاعد من الجيل الجديد"),
      primaryLabel: t("Learn more", "En savoir plus", "اعرف المزيد"),
      secondaryLabel: t("Order now", "Commander", "اطلب الآن"),
      primarySlug: "titan.html",
      secondarySlug: "store.html"
    },
    {
      image: "/website/advertisingbanner/image/23ab9c33-78a4-4bff-bb69-83fe117820a31770618259885.png",
      video: "/website/advertisingbanner/video/785c4160-8515-46a2-8bc9-a4f7b1907c0c1770618243037.mp4",
      logo: "/website/advertisingbanner/image/5be64d32-9133-4283-8994-3350cca635d81770618274334.png",
      title: t("", "", ""),
      description: t("A new-era flagship MPV with panoramic luxury and family-first comfort", "Un monospace phare de nouvelle génération avec luxe panoramique et confort familial", "سيارة MPV رائدة من الجيل الجديد مع فخامة بانورامية وراحة عائلية"),
      primaryLabel: t("Learn more", "En savoir plus", "اعرف المزيد"),
      secondaryLabel: t("Order now", "Commander", "اطلب الآن"),
      primarySlug: "newDreamer26.html",
      secondarySlug: "store.html"
    },
    {
      image: "/website/advertisingbanner/image/2ba443dd-2869-4f27-89ca-d3fc8da9908d1770618446896.png",
      video: "/website/advertisingbanner/video/1779ce91-787b-4a77-9fec-1deb13fedeb31770618459950.mp4",
      logo: "/website/advertisingbanner/image/9c751c14-cd46-439c-b9de-5a7d595655991770618438688.png",
      title: t("", "", ""),
      description: t("A new-era flagship sedan with executive luxury and calm long-distance composure", "Une berline phare de nouvelle génération avec luxe exécutif et sérénité longue distance", "سيدان رائدة من الجيل الجديد مع فخامة تنفيذية واتزان في الرحلات الطويلة"),
      primaryLabel: t("Learn more", "En savoir plus", "اعرف المزيد"),
      secondaryLabel: t("Order now", "Commander", "اطلب الآن"),
      primarySlug: "passion-L.html",
      secondarySlug: "store.html"
    },
    {
      image: "/website/advertisingbanner/image/1ea30c18-f0ea-4b91-9c51-dddc46c589981770618535951.png",
      video: "/website/advertisingbanner/video/e33e96dc-3430-4882-946d-62abdf88dc0d1770618522586.mp4",
      logo: "/website/advertisingbanner/image/05088b2b-9041-4d17-8730-ab52def1319e1770618558478.png",
      title: t("", "", ""),
      description: t("Premium intelligent SUV with Huawei ADS and Harmony cockpit", "SUV premium intelligente avec Huawei ADS et cockpit Harmony", "سيارة SUV ذكية فاخرة مع Huawei ADS ومقصورة Harmony"),
      primaryLabel: t("Learn more", "En savoir plus", "اعرف المزيد"),
      secondaryLabel: t("Order now", "Commander", "اطلب الآن"),
      primarySlug: "free+.html",
      secondarySlug: "store.html"
    },
    {
      image: "/website/advertisingbanner/image/09cb36df-deb5-48b2-9b7a-adee59f6b0c81770618611011.png",
      video: "/website/advertisingbanner/video/7d8f79a2-9614-47e0-b336-5f660d63ad171770618641574.mp4",
      logo: "/website/advertisingbanner/image/ef3b7afe-0f2b-4f6f-b575-4679c59d8c3a1770618630272.png",
      title: t("", "", ""),
      description: t(
        "New luxury pure-electric SUV with long range and family comfort",
        "Nouveau SUV de luxe 100 % électrique avec grande autonomie et confort familial",
        "سيارة SUV كهربائية فاخرة جديدة بمدى طويل وراحة عائلية"
      ),
      primaryLabel: t("Learn more", "En savoir plus", "اعرف المزيد"),
      secondaryLabel: t("Order now", "Commander", "اطلب الآن"),
      primarySlug: "newCourage.html",
      secondarySlug: "store.html"
    }
  ],
  brandIntro: {
    title: t("Hello world, I am Voyah!", "Bonjour le monde, je suis Voyah !", "مرحباً أيها العالم، أنا Voyah!"),
    body: t(
      "A premium intelligent new-energy brand originating from Dongfeng Motor.",
      "Une marque haut de gamme de véhicules à énergies nouvelles intelligents issue de Dongfeng Motor.",
      "علامة راقية للمركبات الذكية العاملة بالطاقة الجديدة تنتمي إلى Dongfeng Motor."
    ),
    cta: t("Discover the brand", "Découvrir la marque", "اكتشف العلامة"),
    image: "/static/assets/world-fec50d02.jpg"
  },
  modelsTitle: t("Explore Voyah models", "Explorer les modèles Voyah", "استكشف طرازات Voyah"),
  modelsBody: t("", "", ""),
  models: [
    {
      slug: "titan.html",
      image: "/website/advertisingseries/image/4a4ba784-9bdc-4842-a3cf-22e2b1e46d761770618807747.jpg",
      title: t("Voyah Titan", "Voyah Titan", "Voyah Titan"),
      category: t(
        "A new-era flagship six-seat SUV",
        "Un SUV phare six places de nouvelle génération",
        "سيارة SUV رائدة بستة مقاعد من الجيل الجديد"
      ),
      metrics: [
        metric("5000 mm", "Length", "Longueur", "الطول"),
        metric("1995 mm", "Width", "Largeur", "العرض"),
        metric("1820 mm", "Height", "Hauteur", "الارتفاع")
      ]
    },
    {
      slug: "newDreamer26.html",
      image: "/website/advertisingseries/image/7ef23102-331e-418d-9139-72a7c77264011770618843718.jpg",
      title: t("26 Voyah Dreamer", "Voyah Dreamer 26", "Voyah Dreamer 26"),
      category: t("A new-era flagship MPV", "Un monospace phare de nouvelle génération", "سيارة MPV رائدة من الجيل الجديد"),
      metrics: [
        metric("MPV", "Body type", "Carrosserie", "نوع الهيكل"),
        metric("Flagship", "Positioning", "Positionnement", "الفئة"),
        metric("6 / 7 seats", "Seating", "Places", "عدد المقاعد")
      ]
    },
    {
      slug: "passion-L.html",
      image: "/website/advertisingseries/image/c6a84270-5367-4b46-9bbb-ca363039b20f1770618873239.jpg",
      title: t("Voyah Passion L", "Voyah Passion L", "Voyah Passion L"),
      category: t("A new-era flagship sedan", "Une berline phare de nouvelle génération", "سيدان رائدة من الجيل الجديد"),
      metrics: [
        metric("Sedan", "Body type", "Carrosserie", "نوع الهيكل"),
        metric("Flagship", "Positioning", "Positionnement", "الفئة"),
        metric("Executive luxury", "Experience", "Expérience", "التجربة")
      ]
    },
    {
      slug: "free+.html",
      image: "/website/advertisingseries/image/e8a95859-ce35-4110-8156-b9f6a9c3365d1770618911247.jpg",
      title: t("Voyah FREE+", "Voyah FREE+", "Voyah FREE+"),
      category: t(
        "Premium intelligent SUV",
        "SUV premium intelligente",
        "سيارة SUV ذكية فاخرة"
      ),
      metrics: [
        metric("SUV", "Body type", "Carrosserie", "نوع الهيكل"),
        metric("Huawei ADS", "Driving tech", "Conduite intelligente", "تقنية القيادة"),
        metric("Harmony cockpit", "Cabin", "Cockpit", "المقصورة")
      ]
    },
    {
      slug: "newCourage.html",
      image: "/website/advertisingseries/image/927d6e8d-3182-420f-891e-0f47c492d9141770618945147.jpg",
      title: t("New Voyah Courage", "Nouveau Voyah Courage", "Voyah Courage الجديد"),
      category: t(
        "New luxury pure-electric SUV",
        "Nouveau SUV de luxe 100 % électrique",
        "سيارة SUV كهربائية فاخرة جديدة"
      ),
      metrics: [
        metric("Pure electric", "Powertrain", "Motorisation", "منظومة الحركة"),
        metric("Huawei ADS", "Driving tech", "Conduite intelligente", "تقنية القيادة"),
        metric("Harmony cockpit", "Cabin", "Cockpit", "المقصورة")
      ]
    }
  ],
  energy: {
    title: t("Voyah Energy", "Énergie Voyah", "طاقة Voyah"),
    body: t(
      "Let users enjoy the best replenishment experience with more choice, more speed, more intelligence, and more efficiency.",
      "Offrir aux utilisateurs la meilleure expérience de recharge, avec davantage de choix, de rapidité, d’intelligence et d’efficacité.",
      "إتاحة أفضل تجربة تزوّد بالطاقة للمستخدمين، بمزيد من الخيارات والسرعة والذكاء والكفاءة."
    ),
    label: t("Learn more", "En savoir plus", "اعرف المزيد"),
    image: "/static/assets/energy_bg-4482e81f.jpg",
    metrics: [
      metric("1,540,000+", "Integrated charging resources", "Ressources de recharge intégrées", "موارد الشحن المدمجة"),
      metric("16,000+", "Ultra-fast charging resources", "Ressources de recharge ultra-rapide", "موارد الشحن فائق السرعة"),
      metric("530,000,000+ kWh", "Cumulative charging delivered to users", "Recharge cumulée fournie aux utilisateurs", "إجمالي الكهرباء المشحونة للمستخدمين"),
      metric("170,000+ tons", "Cumulative carbon reduction", "Réduction cumulée des émissions de carbone", "إجمالي خفض انبعاثات الكربون")
    ]
  },
  technology: {
    title: t("Explore Voyah technology", "Explorer les technologies Voyah", "استكشف تقنيات Voyah"),
    body: t(
      'Voyah is not only a pioneer among central-state enterprises on the electric track, but also a new benchmark for the transformation and upgrade of mature Chinese automakers and a successful practice of Dongfeng Motor Group’s "new five modernizations": lightweighting, electrification, intelligence, connectivity, and sharing.',
      'Voyah n’est pas seulement un pionnier des entreprises centrales sur la voie de l’électrique, mais aussi une nouvelle référence pour la transformation des constructeurs chinois matures et une concrétisation réussie des "cinq nouvelles modernisations" de Dongfeng Motor Group : allègement, électrification, intelligence, connectivité et partage.',
      "لا تُعد Voyah مجرد رائدة بين الشركات المركزية على مسار السيارات الكهربائية، بل تمثل أيضاً معياراً جديداً لتحول شركات السيارات الصينية الناضجة وتحديثها، كما أنها تجسيد ناجح لـ«التحولات الخمسة الجديدة» لدى Dongfeng Motor Group: الخفة، والكهرباء، والذكاء، والاتصال، والمشاركة."
    ),
    tabs: [
      {
        label: t("ESSA native intelligent electric architecture", "Architecture électrique intelligente ESSA", "منصة ESSA الكهربائية الذكية الأصلية"),
        tags: [
          t("Native intelligence", "Intelligence native", "ذكاء أصيل"),
          t("Ultimate safety", "Sécurité ultime", "سلامة قصوى"),
          t("Freer control", "Contrôle fluide", "تحكم أكثر حرية"),
          t("Full comfort", "Confort global", "راحة شاملة")
        ],
        image: "/static/assets/tansuo-927d66e5.png",
        cta: t("Watch the full film", "Voir le film complet", "شاهد الفيلم الكامل")
      },
      {
        label: t("Tianyuan architecture", "Architecture Tianyuan", "منصة تيانيوان"),
        tags: [
          t("Efficient core", "Cœur efficace", "نواة فعّالة"),
          t("Agile systems", "Systèmes agiles", "أنظمة مرنة"),
          t("Smart interconnection", "Interconnexion intelligente", "ترابط ذكي"),
          t("Open co-creation", "Co-création ouverte", "ابتكار مفتوح")
        ],
        image: "/static/assets/tansuo_2-8336799c.png",
        cta: t("Watch the full film", "Voir le film complet", "شاهد الفيلم الكامل")
      }
    ]
  },
  service: {
    title: t("Voyah Service", "Service Voyah", "خدمات Voyah"),
    body: t(
      "With one sincere heart, every detail is treated sincerely; with one honest intention, every promise is fulfilled with sincerity.",
      "Avec un cœur sincère, chaque détail est traité avec sincérité ; avec une intention honnête, chaque promesse est tenue avec sincérité.",
      "بقلب صادق نتعامل بإخلاص مع كل تفصيل، وبنية صادقة نفي كل وعد بإخلاص."
    ),
    cards: [
      block("/static/assets/section3_2-4fb471c7.jpg", "Sincere reception", "Accueil sincère", "استقبال صادق", "", "", ""),
      block("/static/assets/section3_3-20237755.jpg", "Ceremonial delivery", "Livraison avec sens du rituel", "تسليم بطابع احتفالي", "", "", ""),
      block("/static/assets/section4_1-f7cf566b.jpg", "7×24-hour protection", "Protection 7×24 h", "حماية على مدار 7×24 ساعة", "", "", ""),
      block("/static/assets/section4_2-aa55795b.jpg", "Professional team", "Équipe professionnelle", "فريق محترف", "", "", "")
    ]
  },
  community: {
    title: t("Community News", "Actualités de la communauté", "أخبار المجتمع"),
    body: t(
      "Fresh stories from owners and lively conversations about life with the car.",
      "Des histoires fraîches de propriétaires et des échanges vivants autour de la vie avec la voiture.",
      "قصص جديدة من المالكين وحوارات ممتعة عن الحياة مع السيارة."
    ),
    posts: [
      {
        image: "/static/assets/experience1-96467d92.jpg",
        title: t(
          'Owner story | Chairman Li Peng and the "dockside world" of 6,000 owners',
          "Histoire de propriétaire | Li Peng et le « monde du quai » de 6 000 propriétaires",
          "قصة مالك | لي بنغ و«عالم الميناء» مع 6000 من المالكين"
        ),
        body: t("Buying Voyah five times, bound by loyalty and friendship.", "Cinq achats de Voyah, portés par la fidélité et l’amitié.", "خمس مرات من اقتناء Voyah بدافع الوفاء والصداقة."),
        slug: "brand.html"
      },
      {
        image: "/static/assets/experience2-306e063e.jpg",
        title: t(
          "Owner story | When design aesthetics meet craftsmanship",
          "Histoire de propriétaire | Quand l’esthétique du design rencontre l’artisanat",
          "قصة مالك | حين يلتقي جمال التصميم بروح الحرفة"
        ),
        body: t("Liu Lingfeng and his deep resonance with three Voyah FREE models.", "Liu Lingfeng et sa profonde résonance avec trois Voyah FREE.", "ليو لينغفنغ ورابطه العميق مع ثلاث سيارات Voyah FREE."),
        slug: "service.html"
      },
      {
        image: "/static/assets/experience3-a8085d28.jpg",
        title: t(
          "Owner story | The dream-chasing journey of a jewelry livestream host",
          "Histoire de propriétaire | Le voyage de rêve d’une animatrice de bijoux en direct",
          "قصة مالك | رحلة مطاردة الأحلام لمقدمة بث مباشر للمجوهرات"
        ),
        body: t("With Voyah FREE 318 as a companion, she heads toward the road of life.", "Avec Voyah FREE 318 comme compagnon, elle avance sur le chemin de la vie.", "برفقة Voyah FREE 318 تنطلق في رحلة الحياة."),
        slug: "energy.html"
      }
    ]
  },
  footprint: {
    title: t("Leading in China, expanding globally", "Leader en Chine, déploiement mondial", "ريادة في الصين وانتشار عالمي"),
    body: t(
      "The Chinese premium intelligent new-energy vehicle brand that moved from the local market to overseas markets the fastest.",
      "La marque chinoise haut de gamme de véhicules à énergies nouvelles intelligents qui a réalisé le passage du marché local aux marchés étrangers le plus rapidement.",
      "العلامة الصينية الراقية للمركبات الذكية العاملة بالطاقة الجديدة التي انتقلت من السوق المحلية إلى الأسواق الخارجية بأسرع وتيرة."
    ),
    cta: t("Overseas website", "Site international", "الموقع الخارجي"),
    image: "/static/assets/earth_index-e4c6ae99.jpg",
    tabs: [
      {
        label: t("Europe (21)", "Europe (21)", "أوروبا (21)"),
        countries: [
          t("Norway", "Norvège", "النرويج"),
          t("Portugal", "Portugal", "البرتغال"),
          t("Spain", "Espagne", "إسبانيا"),
          t("Italy", "Italie", "إيطاليا"),
          t("Switzerland", "Suisse", "سويسرا"),
          t("Finland", "Finlande", "فنلندا"),
          t("Netherlands", "Pays-Bas", "هولندا"),
          t("Belgium", "Belgique", "بلجيكا"),
          t("Germany", "Allemagne", "ألمانيا"),
          t("Poland", "Pologne", "بولندا"),
          t("Czech Republic", "République tchèque", "التشيك"),
          t("Slovakia", "Slovaquie", "سلوفاquie"),
          t("Hungary", "Hongrie", "المجر"),
          t("Slovenia", "Slovénie", "سلوفينيا"),
          t("Bulgaria", "Bulgarie", "بلغاريا"),
          t("Latvia", "Lettonie", "لاتفيا"),
          t("Estonia", "Estonie", "إستونيا"),
          t("Lithuania", "Lituanie", "ليتوانيا"),
          t("Moldova", "Moldavie", "مولدوفا"),
          t("Bosnia and Herzegovina", "Bosnie-Herzégovine", "البوسنة والهرسك"),
          t("Greece", "Grèce", "اليونان")
        ]
      },
      {
        label: t("Middle East (7)", "Moyen-Orient (7)", "الشرق الأوسط (7)"),
        countries: [
          t("United Arab Emirates", "Émirats arabes unis", "الإمارات العربية المتحدة"),
          t("Qatar", "Qatar", "قطر"),
          t("Saudi Arabia", "Arabie saoudite", "المملكة العربية السعودية"),
          t("Oman", "Oman", "عُمان"),
          t("Kuwait", "Koweït", "الكويت"),
          t("Bahrain", "Bahreïn", "البحرين"),
          t("Jordan", "Jordanie", "الأردن")
        ]
      },
      {
        label: t("Africa (2)", "Afrique (2)", "أفريقيا (2)"),
        countries: [
          t("Egypt", "Égypte", "مصر"),
          t("Angola", "Angola", "أنغولا")
        ]
      },
      {
        label: t("Americas (3)", "Amériques (3)", "الأمريكتان (3)"),
        countries: [
          t("Panama", "Panama", "بنما"),
          t("Colombia", "Colombie", "كولومبيا"),
          t("Costa Rica", "Costa Rica", "كوستاريكا")
        ]
      },
      {
        label: t("Asia (9)", "Asie (9)", "آسيا (9)"),
        countries: [
          t("China", "Chine", "الصين"),
          t("Azerbaijan", "Azerbaïdjan", "أذربيجان"),
          t("Uzbekistan", "Ouzbékistan", "أوزبكستان"),
          t("Kazakhstan", "Kazakhstan", "كازاخستان"),
          t("Turkmenistan", "Turkménistan", "تركمانستان"),
          t("Armenia", "Arménie", "أرمينيا"),
          t("Myanmar", "Myanmar", "ميانمار"),
          t("Laos", "Laos", "لاوس"),
          t("Cambodia", "Cambodge", "كمبوديا")
        ]
      }
    ]
  }
};
const footerColumns = [
  {
    title: t("Voyah Brand", "Marque Voyah", "علامة Voyah"),
    links: [
      { label: t("Voyah Brand", "Marque Voyah", "علامة Voyah"), slug: "brand.html" }
    ]
  },
  {
    title: t("Models", "Modèles", "الطرازات"),
    links: [
      { label: t("Voyah Passion L", "Voyah Passion L", "Voyah Passion L"), slug: "passion-L.html" },
      { label: t("Voyah Passion", "Voyah Passion", "Voyah Passion"), slug: "passion.html" },
      { label: t("Voyah Titan", "Voyah Titan", "Voyah Titan"), slug: "titan.html" },
      { label: t("Voyah Titan Black Edition", "Voyah Titan Black Edition", "Voyah Titan Black Edition"), slug: "titan_blackedition.html" },
      { label: t("Voyah Titan X8", "Voyah Titan X8", "Voyah Titan X8"), slug: "titan_X8.html" },
      { label: t("Voyah FREE+", "Voyah FREE+", "Voyah FREE+"), slug: "free+.html" },
      { label: t("New Voyah Courage", "Nouveau Voyah Courage", "Voyah Courage الجديد"), slug: "newCourage.html" },
      { label: t("Voyah FREE 318", "Voyah FREE 318", "Voyah FREE 318"), slug: "free.html" },
      { label: t("Voyah Courage", "Voyah Courage", "Voyah Courage"), slug: "courage.html" },
      { label: t("26 Voyah Dreamer", "Voyah Dreamer 26", "Voyah Dreamer 26"), slug: "newDreamer26.html" },
      { label: t("Voyah Dreamer Champion", "Voyah Dreamer Champion", "Voyah Dreamer Champion"), slug: "dreamer-champion.html" },
      { label: t("25 Voyah Dreamer", "Voyah Dreamer 25", "Voyah Dreamer 25"), slug: "newDreamer.html" },
      { label: t("Voyah Dreamer Mountain River", "Voyah Dreamer Montagne-Rivière", "Voyah Dreamer Mountain River"), slug: "dreamriver.html" },
      { label: t("24 Voyah Dreamer", "Voyah Dreamer 24", "Voyah Dreamer 24"), slug: "dreamer.html" }
    ]
  },
  {
    title: t("Store Center", "Centre de magasins", "مركز المعارض"),
    links: [
      { label: t("Store center", "Centre de magasins", "مركز المعارض"), slug: "store.html" }
    ]
  },
  {
    title: t("Voyah Service", "Service Voyah", "خدمات Voyah"),
    links: [
      { label: t("Voyah Service", "Service Voyah", "خدمات Voyah"), slug: "service.html" },
      { label: t("Voyah Energy", "Énergie Voyah", "طاقة Voyah"), slug: "energy.html" },
      { label: t("Procurement disclosure", "Informations achats", "معلومات المشتريات"), slug: "purchasing.html" },
      { label: t("Environmental disclosure", "Informations environnementales", "المعلومات البيئية"), slug: "environmental.html" },
      { label: t("Downloads", "Téléchargements", "التنزيلات"), slug: "document.html" }
    ]
  },
  {
    title: t("About Voyah", "À propos de Voyah", "عن Voyah"),
    links: [
      { label: t("Corporate Culture", "Culture d’entreprise", "الثقافة المؤسسية"), slug: "corporate.html" },
      { label: t("Join Us", "Rejoignez-nous", "انضم إلينا"), slug: "joinus.html" },
      { label: t("Partner recruitment", "Recrutement de partenaires", "استقطاب الشركاء"), slug: "recruit-partners.html" },
      { label: t("Investor Relations", "Relations investisseurs", "علاقات المستثمرين"), slug: "ir.html" }
    ]
  }
];
const footerLegalLinks = [
  { label: t("Legal", "Mentions légales", "الشؤون القانونية"), slug: "legal.html" },
  { label: t("Privacy", "Confidentialité", "الخصوصية"), slug: "privacy.html" },
  { label: t("Cookies", "Cookies", "ملفات تعريف الارتباط"), slug: "cookie.html" },
  { label: t("Authorization", "Autorisation", "التفويض"), slug: "authorization.html" }
];
const footerContact = {
  title: t("Download the Voyah App and explore a new world of Voyah", "Téléchargez l’application Voyah et explorez un nouvel univers Voyah", "حمّل تطبيق Voyah واستكشف عالماً جديداً من Voyah"),
  body: t("Stay up to date with the latest Voyah news and discover community activities with distinctive taste.", "Restez au plus près des dernières actualités Voyah et découvrez des activités communautaires au caractère affirmé.", "اطلع على أحدث أخبار Voyah واكتشف أنشطة المجتمع التي تحمل طابعاً مميزاً."),
  appCode: "/static/assets/app_code_160-5b2a34cc.png",
  miniProgramCode: "/static/assets/xcx_code_160-73cf3be6.png"
};
const localize = (text, locale) => text[locale] ?? text.en;
const findLocale = (code) => locales.find((locale) => locale.code === code);
const resolvePage = (slug) => slug ? sitePageMap.get(slug) : void 0;
const __nuxt_page_meta = {
  validate: (route2) => {
    const slugParam = Array.isArray(route2.params.slug) ? route2.params.slug[0] : route2.params.slug;
    return typeof slugParam === "string" && Boolean(resolvePage(slugParam));
  }
};
const _routes = [
  {
    name: "index",
    path: "/",
    component: () => import('./index-CkaEyWO9.mjs')
  },
  {
    name: "store",
    path: "/store",
    component: () => import('./store-Bl1ZIo83.mjs')
  },
  {
    name: "energy",
    path: "/energy",
    component: () => import('./energy-ZZOof-zh.mjs')
  },
  {
    name: "service",
    path: "/service",
    component: () => import('./service-Dbv66l_s.mjs')
  },
  {
    name: "document",
    path: "/document",
    component: () => import('./document-BmQHFEJW.mjs')
  },
  {
    name: "purchasing",
    path: "/purchasing",
    component: () => import('./purchasing-iXveVnk9.mjs')
  },
  {
    name: "environmental",
    path: "/environmental",
    component: () => import('./environmental-DR7A-MAH.mjs')
  },
  {
    name: "locale",
    path: "/:locale()",
    component: () => import('./index-CUDbFzxW.mjs')
  },
  {
    name: "locale-slug",
    path: "/:locale()/:slug()",
    meta: __nuxt_page_meta || {},
    component: () => import('./_slug_-GAhDqcE9.mjs')
  }
];
const _wrapInTransition = (props, children) => {
  return { default: () => children.default?.() };
};
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = route?.meta.key ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => route.params[r.slice(1)]?.toString() || "");
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => comp.components && comp.components.default === from.matched[index]?.components?.default
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
function toArray$1(value) {
  return Array.isArray(value) ? value : [value];
}
function _mergeTransitionProps(routeProps) {
  const _props = [];
  for (const prop of routeProps) {
    if (!prop) {
      continue;
    }
    _props.push({
      ...prop,
      onAfterLeave: prop.onAfterLeave ? toArray$1(prop.onAfterLeave) : void 0,
      onBeforeLeave: prop.onBeforeLeave ? toArray$1(prop.onBeforeLeave) : void 0
    });
  }
  return defu(..._props);
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    const hashScrollBehaviour = useRouter().options?.scrollBehaviorType ?? "auto";
    if (to.path.replace(/\/$/, "") === from.path.replace(/\/$/, "")) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior: hashScrollBehaviour };
      }
      return false;
    }
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (routeAllowsScrollToTop === false) {
      return false;
    }
    if (from === START_LOCATION) {
      return _calculatePosition(to, from, savedPosition, hashScrollBehaviour);
    }
    return new Promise((resolve2) => {
      const doScroll = () => {
        requestAnimationFrame(() => resolve2(_calculatePosition(to, from, savedPosition, hashScrollBehaviour)));
      };
      nuxtApp.hooks.hookOnce("page:loading:end", () => {
        const transitionPromise = nuxtApp["~transitionPromise"];
        if (transitionPromise) {
          transitionPromise.then(doScroll);
        } else {
          doScroll();
        }
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
function _calculatePosition(to, from, savedPosition, defaultHashScrollBehaviour) {
  if (savedPosition) {
    return savedPosition;
  }
  const isPageNavigation = isChangingPage(to, from);
  if (to.hash) {
    return {
      el: to.hash,
      top: _getHashElementScrollMarginTop(to.hash),
      behavior: isPageNavigation ? defaultHashScrollBehaviour : "instant"
    };
  }
  return {
    left: 0,
    top: 0
  };
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  if (!to.meta?.validate) {
    return;
  }
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    fatal: false,
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    status: result && (result.status || result.statusCode) || 404,
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    statusText: result && (result.statusText || result.statusMessage) || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  return error;
});
const locale_45global = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  let __temp, __restore;
  const localeParam = Array.isArray(to.params.locale) ? to.params.locale[0] : to.params.locale;
  if (!localeParam) {
    return;
  }
  const locale = findLocale(localeParam);
  if (!locale) {
    throw createError({
      statusCode: 404,
      statusMessage: "Locale not supported"
    });
  }
  const i18n = useNuxtApp().$i18n;
  if (i18n?.locale?.value !== locale.code) {
    [__temp, __restore] = executeAsync(() => i18n?.setLocale(locale.code)), await __temp, __restore();
  }
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware((to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  locale_45global,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const history = routerOptions.history?.(routerBase) ?? createMemoryHistory(routerBase);
    const routes = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    router.afterEach((to, from) => {
      if (to.matched.at(-1)?.components?.default === from.matched.at(-1)?.components?.default) {
        syncCurrentRoute();
      }
    });
    const route = { sync: syncCurrentRoute };
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware ||= {
      global: [],
      named: {}
    };
    const error = /* @__PURE__ */ useError();
    if (!nuxtApp.ssrContext?.islandContext) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if (failure?.type === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    const hasDeferredRoute = false;
    syncCurrentRoute();
    if (nuxtApp.ssrContext?.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!nuxtApp.ssrContext?.islandContext) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray$2(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        const routeRules = getRouteRules({ path: to.path });
        if (routeRules.appMiddleware) {
          for (const key in routeRules.appMiddleware) {
            if (routeRules.appMiddleware[key]) {
              middlewareEntries.add(key);
            } else {
              middlewareEntries.delete(key);
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await namedMiddleware[entry2]?.().then((r) => r.default || r) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          try {
            if (false) ;
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            if (true) {
              if (result === false || result instanceof Error) {
                const error2 = result || createError({
                  status: 404,
                  statusText: `Page Not Found: ${initialURL}`
                });
                await nuxtApp.runWithContext(() => showError(error2));
                return false;
              }
            }
            if (result === true) {
              continue;
            }
            if (result === false) {
              return result;
            }
            if (result) {
              if (isNuxtError(result) && result.fatal) {
                await nuxtApp.runWithContext(() => showError(result));
              }
              return result;
            }
          } catch (err) {
            const error2 = createError(err);
            if (error2.fatal) {
              await nuxtApp.runWithContext(() => showError(error2));
            }
            return error2;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach((to) => {
      if (to.matched.length === 0 && !error.value) {
        return nuxtApp.runWithContext(() => showError(createError({
          status: 404,
          fatal: false,
          statusText: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        if (hasDeferredRoute) ;
        else {
          await router.replace({
            ...resolvedInitialRoute,
            force: true
          });
        }
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext["~payloadReducers"][name] = reduce;
  }
}
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
function warn(msg, err) {
  if (typeof console !== "undefined") {
    console.warn(`[intlify] ` + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}
const hasWarned = {};
function warnOnce(msg) {
  if (!hasWarned[msg]) {
    hasWarned[msg] = true;
    warn(msg);
  }
}
const RE_ARGS = /\{([0-9a-zA-Z]+)\}/g;
function format$1(message, ...args) {
  if (args.length === 1 && isObject(args[0])) {
    args = args[0];
  }
  if (!args || !args.hasOwnProperty) {
    args = {};
  }
  return message.replace(RE_ARGS, (match, identifier) => {
    return args.hasOwnProperty(identifier) ? args[identifier] : "";
  });
}
const makeSymbol = (name, shareable = false) => !shareable ? Symbol(name) : Symbol.for(name);
const generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({ l: locale, k: key, s: source });
const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
const isNumber = (val) => typeof val === "number" && isFinite(val);
const isDate = (val) => toTypeString(val) === "[object Date]";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
const assign = Object.assign;
const _create = Object.create;
const create = (obj = null) => _create(obj);
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : create());
};
function escapeHtml(rawText) {
  return rawText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function escapeAttributeValue(value) {
  return value.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function sanitizeTranslatedHtml(html) {
  html = html.replace(/(\w+)\s*=\s*"([^"]*)"/g, (_, attrName, attrValue) => `${attrName}="${escapeAttributeValue(attrValue)}"`);
  html = html.replace(/(\w+)\s*=\s*'([^']*)'/g, (_, attrName, attrValue) => `${attrName}='${escapeAttributeValue(attrValue)}'`);
  const eventHandlerPattern = /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi;
  if (eventHandlerPattern.test(html)) {
    {
      warn("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages.");
    }
    html = html.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3");
  }
  const javascriptUrlPattern = [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ];
  javascriptUrlPattern.forEach((pattern) => {
    html = html.replace(pattern, "$1javascript&#58;");
  });
  return html;
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isBoolean = (val) => typeof val === "boolean";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const toDisplayString = (val) => {
  return val == null ? "" : isArray(val) || isPlainObject(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
};
function join(items, separator = "") {
  return items.reduce((str, item, index) => index === 0 ? str + item : str + separator + item, "");
}
const RANGE = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
  const lines = source.split(/\r?\n/);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (let j = i - RANGE; j <= i + RANGE || end > count; j++) {
        if (j < 0 || j >= lines.length)
          continue;
        const line = j + 1;
        res.push(`${line}${" ".repeat(3 - String(line).length)}|  ${lines[j]}`);
        const lineLength = lines[j].length;
        if (j === i) {
          const pad = start - (count - lineLength) + 1;
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length));
          }
          count += lineLength + 1;
        }
      }
      break;
    }
  }
  return res.join("\n");
}
function createEmitter() {
  const events = /* @__PURE__ */ new Map();
  const emitter = {
    events,
    on(event, handler) {
      const handlers = events.get(event);
      const added = handlers && handlers.push(handler);
      if (!added) {
        events.set(event, [handler]);
      }
    },
    off(event, handler) {
      const handlers = events.get(event);
      if (handlers) {
        handlers.splice(handlers.indexOf(handler) >>> 0, 1);
      }
    },
    emit(event, payload) {
      (events.get(event) || []).slice().map((handler) => handler(payload));
      (events.get("*") || []).slice().map((handler) => handler(event, payload));
    }
  };
  return emitter;
}
const isNotObjectOrIsArray = (val) => !isObject(val) || isArray(val);
function deepCopy(src, des) {
  if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
    throw new Error("Invalid value");
  }
  const stack = [{ src, des }];
  while (stack.length) {
    const { src: src2, des: des2 } = stack.pop();
    Object.keys(src2).forEach((key) => {
      if (key === "__proto__") {
        return;
      }
      if (isObject(src2[key]) && !isObject(des2[key])) {
        des2[key] = Array.isArray(src2[key]) ? [] : create();
      }
      if (isNotObjectOrIsArray(des2[key]) || isNotObjectOrIsArray(src2[key])) {
        des2[key] = src2[key];
      } else {
        stack.push({ src: src2[key], des: des2[key] });
      }
    });
  }
}
const localeCodes = [
  "en",
  "fr",
  "ar"
];
const localeLoaders = {
  en: [],
  fr: [],
  ar: []
};
const vueI18nConfigs = [
  () => import(
    './i18n.config-CXztSCuO.mjs'
    /* webpackChunkName: "config_i18n_46config_46ts_ebaa500d" */
  )
];
const normalizedLocales = [
  {
    code: "en",
    name: "English",
    dir: "ltr",
    files: []
  },
  {
    code: "fr",
    name: "Français",
    dir: "ltr",
    files: []
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    files: []
  }
];
const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n";
const parallelPlugin = false;
const DEFAULT_COOKIE_KEY = "i18n_redirected";
const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18nInternal";
const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp";
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = /* @__PURE__ */ Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  ...false,
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      if (mounted.value) {
        const vnodes = slots.default?.();
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function useRequestEvent(nuxtApp) {
  nuxtApp ||= useNuxtApp();
  return nuxtApp.ssrContext?.event;
}
function useRequestHeaders(include) {
  const event = useRequestEvent();
  const _headers = event ? getRequestHeaders(event) : {};
  if (!include || !event) {
    return _headers;
  }
  const headers = /* @__PURE__ */ Object.create(null);
  for (const _key of include) {
    const key = _key.toLowerCase();
    const header = _headers[key];
    if (header) {
      headers[key] = header;
    }
  }
  return headers;
}
function useRequestHeader(header) {
  const event = useRequestEvent();
  return event ? getRequestHeader(event, header) : void 0;
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => {
    const decoded = decodeURIComponent(val);
    const parsed = destr(decoded);
    if (typeof parsed === "number" && (!Number.isFinite(parsed) || String(parsed) !== decoded)) {
      return decoded;
    }
    return parsed;
  },
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  opts.filter ??= (key) => key === name;
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : cookies[name] ?? opts.default?.());
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual$1(cookie.value, cookies[name])) {
        return;
      }
      nuxtApp._cookies ||= {};
      if (name in nuxtApp._cookies) {
        if (isEqual$1(cookie.value, nuxtApp._cookies[name])) {
          return;
        }
      }
      nuxtApp._cookies[name] = cookie.value;
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse$1(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(link) {
    return typeof link === "string" && link.startsWith("#");
  }
  function resolveTrailingSlashBehavior(to, resolve2, trailingSlash) {
    const effectiveTrailingSlash = trailingSlash ?? options.trailingSlash;
    if (!to || effectiveTrailingSlash !== "append" && effectiveTrailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, effectiveTrailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve2(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, effectiveTrailingSlash)
    };
    return resolvedPath;
  }
  function useNuxtLink(props) {
    const router = useRouter();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const hasTarget = computed(() => !!unref(props.target) && unref(props.target) !== "_self");
    const isAbsoluteUrl = computed(() => {
      const path = unref(props.to) || unref(props.href) || "";
      return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
    });
    const builtinRouterLink = resolveComponent("RouterLink");
    const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
    const isExternal = computed(() => {
      if (unref(props.external)) {
        return true;
      }
      const path = unref(props.to) || unref(props.href) || "";
      if (typeof path === "object") {
        return false;
      }
      return path === "" || isAbsoluteUrl.value;
    });
    const to = computed(() => {
      const path = unref(props.to) || unref(props.href) || "";
      if (isExternal.value) {
        return path;
      }
      return resolveTrailingSlashBehavior(path, router.resolve, unref(props.trailingSlash));
    });
    const link = isExternal.value ? void 0 : useBuiltinLink?.({ ...props, to, viewTransition: unref(props.viewTransition) });
    const href = computed(() => {
      const effectiveTrailingSlash = unref(props.trailingSlash) ?? options.trailingSlash;
      if (!to.value || isAbsoluteUrl.value || isHashLinkWithoutHashMode(to.value)) {
        return to.value;
      }
      if (isExternal.value) {
        const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject$1(to.value) : to.value;
        const href2 = typeof path === "object" ? router.resolve(path).href : path;
        return applyTrailingSlashBehavior(href2, effectiveTrailingSlash);
      }
      if (typeof to.value === "object") {
        return router.resolve(to.value)?.href ?? null;
      }
      return applyTrailingSlashBehavior(joinURL(config.app.baseURL, to.value), effectiveTrailingSlash);
    });
    return {
      to,
      hasTarget,
      isAbsoluteUrl,
      isExternal,
      //
      href,
      isActive: link?.isActive ?? computed(() => to.value === router.currentRoute.value.path),
      isExactActive: link?.isExactActive ?? computed(() => to.value === router.currentRoute.value.path),
      route: link?.route ?? computed(() => router.resolve(to.value)),
      async navigate(_e) {
        await navigateTo(href.value, { replace: unref(props.replace), external: isExternal.value || hasTarget.value });
      }
    };
  }
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetchOn: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Behavior
      trailingSlash: {
        type: String,
        default: void 0,
        required: false
      }
    },
    useLink: useNuxtLink,
    setup(props, { slots }) {
      const router = useRouter();
      const { to, href, navigate: navigate2, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
      shallowRef(false);
      const el = void 0;
      const elRef = void 0;
      async function prefetch(nuxtApp = useNuxtApp()) {
        {
          return;
        }
      }
      return () => {
        if (!isExternal.value && !hasTarget.value && !isHashLinkWithoutHashMode(to.value)) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            routerLinkProps.rel = props.rel || void 0;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href: href.value,
            navigate: navigate2,
            prefetch,
            get route() {
              if (!href.value) {
                return void 0;
              }
              const url = new URL(href.value, "http://localhost");
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: href.value
              };
            },
            rel,
            target,
            isExternal: isExternal.value || hasTarget.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", {
          ref: el,
          href: href.value || null,
          // converts `""` to `null` to prevent the attribute from being added as empty (`href=""`)
          rel,
          target,
          onClick: async (event) => {
            if (isExternal.value || hasTarget.value) {
              return;
            }
            event.preventDefault();
            try {
              const encodedHref = encodeRoutePath(href.value);
              return await (props.replace ? router.replace(encodedHref) : router.push(encodedHref));
            } finally {
            }
          }
        }, slots.default?.());
      };
    }
  });
}
const __nuxt_component_0$1 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
function getRouteName(routeName) {
  if (isString(routeName)) return routeName;
  if (routeName != null) return routeName.toString();
  return "(null)";
}
function getLocaleRouteName(routeName, locale, opts) {
  const { defaultLocale, strategy, routesNameSeparator, defaultLocaleRouteNameSuffix, differentDomains } = opts;
  const localizedRoutes = strategy !== "no_prefix" || differentDomains;
  const name = getRouteName(routeName) + (localizedRoutes ? routesNameSeparator + locale : "");
  if (locale === defaultLocale && strategy === "prefix_and_default") {
    return name + routesNameSeparator + defaultLocaleRouteNameSuffix;
  }
  return name;
}
function matchBrowserLocale(locales2, browserLocales) {
  const matchedLocales = [];
  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = locales2.find((l) => l.language?.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 1 - index / browserLocales.length });
      break;
    }
  }
  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split("-")[0].toLowerCase();
    const matchedLocale = locales2.find((l) => l.language?.split("-")[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 0.999 - index / browserLocales.length });
      break;
    }
  }
  return matchedLocales;
}
function compareBrowserLocale(a, b) {
  if (a.score === b.score) {
    return b.code.length - a.code.length;
  }
  return b.score - a.score;
}
function findBrowserLocale(locales2, browserLocales) {
  const normalizedLocales2 = locales2.map((l) => ({ code: l.code, language: l.language || l.code }));
  const matchedLocales = matchBrowserLocale(normalizedLocales2, browserLocales);
  if (matchedLocales.length === 0) {
    return "";
  }
  if (matchedLocales.length > 1) {
    matchedLocales.sort(compareBrowserLocale);
  }
  return matchedLocales[0].code;
}
function getLocalesRegex(localeCodes2) {
  return new RegExp(`^/(${localeCodes2.join("|")})(?:/|$)`, "i");
}
const localesPattern = `(${localeCodes.join("|")})`;
const regexpPath = getLocalesRegex(localeCodes);
function createLocaleFromRouteGetter() {
  const { routesNameSeparator, defaultLocaleRouteNameSuffix } = (/* @__PURE__ */ useRuntimeConfig()).public.i18n;
  const defaultSuffixPattern = `(?:${routesNameSeparator}${defaultLocaleRouteNameSuffix})?`;
  const regexpName = new RegExp(`${routesNameSeparator}${localesPattern}${defaultSuffixPattern}$`, "i");
  return (route) => {
    if (isString(route)) {
      return route.match(regexpPath)?.[1] ?? "";
    }
    if (route.name) {
      return getRouteName(route.name).match(regexpName)?.[1] ?? "";
    }
    if (route.path) {
      return route.path.match(regexpPath)?.[1] ?? "";
    }
    return "";
  };
}
function isI18nInstance(i18n) {
  return i18n != null && "global" in i18n && "mode" in i18n;
}
function isComposer(target) {
  return target != null && !("__composer" in target) && "locale" in target && isRef(target.locale);
}
function isVueI18n(target) {
  return target != null && "__composer" in target;
}
function getI18nTarget(i18n) {
  return isI18nInstance(i18n) ? i18n.global : i18n;
}
function getComposer$3(i18n) {
  const target = getI18nTarget(i18n);
  if (isComposer(target)) return target;
  if (isVueI18n(target)) return target.__composer;
  return target;
}
function getHost() {
  const header = useRequestHeaders(["x-forwarded-host", "host"]);
  return header["x-forwarded-host"] || header["host"] || "";
}
function getLocaleDomain(locales2, strategy, route) {
  const host = getHost();
  if (!host) {
    return host;
  }
  const routePath = isString(route) ? route : route.path;
  const matchingLocales = locales2.filter((locale) => {
    if (locale.domain) {
      return (hasProtocol(locale.domain) ? locale.domain.replace(/(http|https):\/\//, "") : locale.domain) === host;
    }
    return isArray(locale?.domains) ? locale.domains.includes(host) : false;
  });
  if (matchingLocales.length === 0) {
    return "";
  }
  if (matchingLocales.length === 1) {
    return matchingLocales[0]?.code ?? "";
  }
  if (strategy === "no_prefix") {
    console.warn(
      formatMessage(
        "Multiple matching domains found! This is not supported for no_prefix strategy in combination with differentDomains!"
      )
    );
    return matchingLocales[0]?.code ?? "";
  }
  if (route && routePath) {
    const matched = routePath.match(getLocalesRegex(matchingLocales.map((l) => l.code)))?.at(1);
    if (matched) {
      const matchingLocale2 = matchingLocales.find((l) => l.code === matched);
      return matchingLocale2?.code ?? "";
    }
  }
  const matchingLocale = matchingLocales.find((l) => l.defaultForDomains?.includes(host) ?? l.domainDefault);
  return matchingLocale?.code ?? "";
}
function getDomainFromLocale(localeCode) {
  const nuxt = useNuxtApp();
  const host = getHost();
  const { domainLocales } = (/* @__PURE__ */ useRuntimeConfig()).public.i18n;
  const lang = normalizedLocales.find((locale) => locale.code === localeCode);
  const domain = domainLocales?.[localeCode]?.domain || lang?.domain || lang?.domains?.find((v) => v === host);
  if (!domain) {
    console.warn(formatMessage("Could not find domain name for locale " + localeCode));
    return;
  }
  if (hasProtocol(domain, { strict: true })) {
    return domain;
  }
  const protocol = getRequestProtocol(useRequestEvent(nuxt)) + ":";
  return protocol + "//" + domain;
}
function setupMultiDomainLocales(runtimeI18n, defaultLocaleDomain) {
  const { multiDomainLocales, strategy, routesNameSeparator, defaultLocaleRouteNameSuffix } = runtimeI18n;
  if (!multiDomainLocales) return;
  if (!(strategy === "prefix_except_default" || strategy === "prefix_and_default")) return;
  const router = useRouter();
  const defaultRouteSuffix = [routesNameSeparator, defaultLocaleRouteNameSuffix].join("");
  for (const route of router.getRoutes()) {
    const routeName = getRouteName(route.name);
    if (routeName.endsWith(defaultRouteSuffix)) {
      router.removeRoute(routeName);
      continue;
    }
    const routeNameLocale = routeName.split(routesNameSeparator)[1];
    if (routeNameLocale === defaultLocaleDomain) {
      router.addRoute({
        ...route,
        path: route.path === `/${routeNameLocale}` ? "/" : route.path.replace(`/${routeNameLocale}`, "")
      });
    }
  }
}
function getDefaultLocaleForDomain(runtimeI18n) {
  const { locales: locales2, domainLocales, defaultLocale, multiDomainLocales } = runtimeI18n;
  const host = getHost();
  if (!multiDomainLocales) {
    const foundLocale = normalizedLocales.find((l) => {
      const localeCode = isString(l) ? l : l.code;
      const lang = normalizedLocales.find((locale) => locale.code === localeCode);
      const domain = domainLocales?.[localeCode]?.domain ?? lang?.domain;
      return domain === host;
    });
    return foundLocale?.code ?? defaultLocale ?? "";
  }
  if (locales2.some((l) => !isString(l) && l.defaultForDomains != null)) {
    const findDefaultLocale = locales2.find(
      (l) => !isString(l) && !!l.defaultForDomains?.includes(host)
    );
    return findDefaultLocale?.code ?? "";
  }
  return defaultLocale || "";
}
const cacheMessages = /* @__PURE__ */ new Map();
async function loadVueI18nOptions(vueI18nConfigs2, nuxt) {
  const vueI18nOptions = { messages: {} };
  for (const configFile of vueI18nConfigs2) {
    const { default: resolver } = await configFile();
    const resolved = isFunction(resolver) ? await nuxt.runWithContext(() => resolver()) : resolver;
    deepCopy(resolved, vueI18nOptions);
  }
  return vueI18nOptions;
}
function makeFallbackLocaleCodes(fallback, locales2) {
  if (fallback === false) return [];
  if (isArray(fallback)) return fallback;
  let fallbackLocales = [];
  if (isString(fallback)) {
    if (locales2.every((locale) => locale !== fallback)) {
      fallbackLocales.push(fallback);
    }
    return fallbackLocales;
  }
  const targets = [...locales2, "default"];
  for (const locale of targets) {
    if (locale in fallback == false) continue;
    fallbackLocales = [...fallbackLocales, ...fallback[locale].filter(Boolean)];
  }
  return fallbackLocales;
}
const isModule = (val) => toTypeString(val) === "[object Module]";
async function loadMessage(locale, { key, load }, nuxt) {
  let message = null;
  try {
    const getter = await load().then((x) => isModule(x) ? x.default : x);
    if (isFunction(getter)) {
      message = await nuxt.runWithContext(() => getter(locale));
    } else {
      message = getter;
      if (message != null && cacheMessages && true) {
        cacheMessages.set(key, message);
      }
    }
  } catch (e) {
    console.error("Failed locale loading: " + e.message);
  }
  return message;
}
async function loadLocale(locale, localeLoaders2, setter, nuxt) {
  const loaders = localeLoaders2[locale];
  if (loaders == null) {
    return;
  }
  const targetMessage = {};
  for (const loader of loaders) {
    let message = null;
    if (cacheMessages && cacheMessages.has(loader.key) && loader.cache) {
      message = cacheMessages.get(loader.key);
    } else {
      message = await nuxt.runWithContext(() => loadMessage(locale, loader, nuxt));
    }
    if (message != null) {
      deepCopy(message, targetMessage);
    }
  }
  setter(locale, targetMessage);
}
function getRouteBaseName(common, route) {
  const _route = unref(route);
  const routeName = isObject(_route) ? _route?.name : _route;
  if (_route == null || !routeName) {
    return;
  }
  return getRouteName(routeName).split(common.runtimeConfig.public.i18n.routesNameSeparator)[0];
}
function localePath(common, route, locale) {
  if (isString(route) && hasProtocol(route, { acceptRelative: true })) {
    return route;
  }
  const localizedRoute = resolveRoute(common, route, locale);
  return localizedRoute == null ? "" : localizedRoute.redirectedFrom?.fullPath || localizedRoute.fullPath;
}
function localeRoute(common, route, locale) {
  return resolveRoute(common, route, locale) ?? void 0;
}
function normalizeRawLocation(route) {
  if (!isString(route)) {
    return assign({}, route);
  }
  if (route[0] === "/") {
    const { pathname: path, search, hash } = parsePath(route);
    return { path, query: parseQuery(search), hash };
  }
  return { name: route };
}
const isRouteLocationPathRaw = (val) => !!val.path && !val.name;
function resolveRouteObject(common, route, locale) {
  const runtimeI18n = common.runtimeConfig.public.i18n;
  if (isRouteLocationPathRaw(route)) {
    const resolved = resolve(common, route, locale);
    const resolvedName = getRouteBaseName(common, resolved);
    if (resolvedName) {
      resolved.name = getLocaleRouteName(resolvedName, locale, runtimeI18n);
      return resolved;
    }
    if (!runtimeI18n.differentDomains && prefixable(locale, runtimeI18n.defaultLocale, runtimeI18n.strategy)) {
      route.path = "/" + locale + route.path;
    }
    route.path = (runtimeI18n.trailingSlash ? withTrailingSlash : withoutTrailingSlash)(route.path, true);
    return route;
  }
  route.name ||= getRouteBaseName(common, common.router.currentRoute.value);
  const localizedName = getLocaleRouteName(route.name, locale, runtimeI18n);
  if (common.router.hasRoute(localizedName)) {
    route.name = localizedName;
  }
  return route;
}
function resolveRoute(common, route, locale) {
  try {
    const _locale = locale || unref(getI18nTarget(common.i18n).locale);
    const normalized = normalizeRawLocation(route);
    const resolved = common.router.resolve(resolveRouteObject(common, normalized, _locale));
    if (resolved.name) {
      return resolved;
    }
    return common.router.resolve(route);
  } catch (e) {
    if (isNavigationFailure(
      e,
      1
      /* No match */
    )) {
      return null;
    }
  }
}
function getLocalizableMetaFromDynamicParams(common, route) {
  if (common.runtimeConfig.public.i18n.experimental.switchLocalePathLinkSSR) {
    return unref(common.metaState.value);
  }
  const meta = route.meta || {};
  return unref(meta)?.[DEFAULT_DYNAMIC_PARAMS_KEY] || {};
}
function switchLocalePath(common, locale, _route) {
  const route = _route ?? common.router.currentRoute.value;
  const name = getRouteBaseName(common, route);
  if (!name) {
    return "";
  }
  const resolvedParams = getLocalizableMetaFromDynamicParams(common, route)[locale];
  const routeCopy = {
    name,
    params: assign({}, route.params, resolvedParams),
    fullPath: route.fullPath,
    query: route.query,
    hash: route.hash,
    path: route.path,
    meta: route.meta
    // matched: route.matched,
    // redirectedFrom: route.redirectedFrom
  };
  const path = localePath(common, routeCopy, locale);
  if (common.runtimeConfig.public.i18n.differentDomains) {
    const domain = getDomainFromLocale(locale);
    return domain && joinURL(domain, path) || path;
  }
  return path;
}
function resolve(common, route, locale) {
  if (common.runtimeConfig.public.i18n.strategy === "no_prefix") {
    return route;
  }
  if (common.runtimeConfig.public.i18n.strategy !== "prefix") {
    return common.router.resolve(route);
  }
  const restPath = route.path.slice(1);
  const targetPath = route.path[0] + locale + (restPath && "/" + restPath);
  const _route = common.router.options.routes.find((r) => r.path === targetPath);
  if (_route == null) {
    return route;
  }
  return common.router.resolve(assign({}, route, _route, { path: targetPath }));
}
function formatMessage(message) {
  return `[${NUXT_I18N_MODULE_ID}]: ${message}`;
}
function initCommonComposableOptions(i18n) {
  return {
    i18n: i18n ?? useNuxtApp().$i18n,
    router: useRouter(),
    runtimeConfig: /* @__PURE__ */ useRuntimeConfig(),
    metaState: useState("nuxt-i18n-meta", () => ({}))
  };
}
async function loadAndSetLocale(nuxtApp, newLocale, initial = false) {
  const { differentDomains, skipSettingLocaleOnNavigate } = nuxtApp.$config.public.i18n;
  const opts = runtimeDetectBrowserLanguage(nuxtApp.$config.public.i18n);
  const oldLocale = unref(nuxtApp.$i18n.locale);
  const localeCodes2 = unref(nuxtApp.$i18n.localeCodes);
  function syncCookie(locale = oldLocale) {
    if (opts === false || !opts.useCookie) return;
    if (skipSettingLocaleOnNavigate) return;
    nuxtApp.$i18n.setLocaleCookie(locale);
  }
  const localeOverride = await nuxtApp.$i18n.onBeforeLanguageSwitch(oldLocale, newLocale, initial, nuxtApp);
  if (localeOverride && localeCodes2.includes(localeOverride)) {
    if (oldLocale === localeOverride) {
      syncCookie();
      return false;
    }
    newLocale = localeOverride;
  }
  if (!newLocale) {
    syncCookie();
    return false;
  }
  if (!initial && differentDomains) {
    syncCookie();
    return false;
  }
  if (oldLocale === newLocale) {
    syncCookie();
    return false;
  }
  const i18nFallbackLocales = unref(nuxtApp.$i18n.fallbackLocale);
  const setter = nuxtApp.$i18n.mergeLocaleMessage.bind(nuxtApp.$i18n);
  if (i18nFallbackLocales) {
    const fallbackLocales = makeFallbackLocaleCodes(i18nFallbackLocales, [newLocale]);
    await Promise.all(fallbackLocales.map((locale) => loadLocale(locale, localeLoaders, setter, nuxtApp)));
  }
  await loadLocale(newLocale, localeLoaders, setter, nuxtApp);
  if (skipSettingLocaleOnNavigate) {
    return false;
  }
  syncCookie(newLocale);
  nuxtApp._vueI18n.__setLocale(newLocale);
  await nuxtApp.$i18n.onLanguageSwitched(oldLocale, newLocale);
  return true;
}
function detectLocale(nuxtApp, route, routeLocale, currentLocale, localeCookie) {
  const { strategy, defaultLocale, differentDomains, multiDomainLocales } = nuxtApp.$config.public.i18n;
  const _detectBrowserLanguage = runtimeDetectBrowserLanguage();
  const detectedBrowser = detectBrowserLanguage(nuxtApp, route, localeCookie, currentLocale);
  if (detectedBrowser.locale && detectedBrowser.from != null && localeCodes.includes(detectedBrowser.locale)) {
    return detectedBrowser.locale;
  }
  let detected = "";
  if (differentDomains || multiDomainLocales) {
    detected ||= getLocaleDomain(normalizedLocales, strategy, route);
  } else if (strategy !== "no_prefix") {
    detected ||= routeLocale;
  }
  const cookieLocale = (localeCodes.includes(detectedBrowser.locale) || localeCookie && localeCodes.includes(localeCookie)) && _detectBrowserLanguage && _detectBrowserLanguage.useCookie && localeCookie;
  detected ||= cookieLocale || currentLocale || defaultLocale || "";
  return detected;
}
function detectRedirect({ to, nuxtApp, from, locale, routeLocale }, inMiddleware = false) {
  if (routeLocale === locale || nuxtApp.$i18n.strategy === "no_prefix") {
    return "";
  }
  const common = initCommonComposableOptions();
  let redirectPath = switchLocalePath(common, locale, to);
  if (inMiddleware && !redirectPath) {
    redirectPath = localePath(common, to.fullPath, locale);
  }
  if (isEqual(redirectPath, to.fullPath) || from && isEqual(redirectPath, from.fullPath)) {
    return "";
  }
  return redirectPath;
}
const useRedirectState = () => useState(NUXT_I18N_MODULE_ID + ":redirect", () => "");
async function navigate({ nuxt, locale, route, redirectPath }, enableNavigate = false) {
  const { rootRedirect, differentDomains, multiDomainLocales, skipSettingLocaleOnNavigate, locales: locales2, strategy } = nuxt.$config.public.i18n;
  if (route.path === "/" && rootRedirect) {
    let redirectCode = 302;
    if (isString(rootRedirect)) {
      redirectPath = "/" + rootRedirect;
    } else {
      redirectPath = "/" + rootRedirect.path;
      redirectCode = rootRedirect.statusCode;
    }
    redirectPath = nuxt.$localePath(redirectPath, locale);
    return navigateTo(redirectPath, { redirectCode });
  }
  if (multiDomainLocales && strategy === "prefix_except_default") {
    const host = getHost();
    const currentDomain = locales2.find((locale2) => {
      if (isString(locale2)) return;
      return locale2.defaultForDomains?.find((domain) => domain === host);
    });
    const defaultLocaleForDomain = !isString(currentDomain) ? currentDomain?.code : void 0;
    if (route.path.startsWith(`/${defaultLocaleForDomain}`)) {
      return navigateTo(route.path.replace(`/${defaultLocaleForDomain}`, ""));
    }
    if (!route.path.startsWith(`/${locale}`) && locale !== defaultLocaleForDomain) {
      const oldLocale = nuxt._vueI18n.__localeFromRoute(route.path);
      if (oldLocale !== "") {
        return navigateTo(`/${locale + route.path.replace(`/${oldLocale}`, "")}`);
      }
      return navigateTo(`/${locale + (route.path === "/" ? "" : route.path)}`);
    }
    if (redirectPath && route.path !== redirectPath) {
      return navigateTo(redirectPath);
    }
    return;
  }
  if (differentDomains) {
    const state = useRedirectState();
    if (state.value && state.value !== redirectPath) {
      {
        state.value = redirectPath;
      }
    }
  } else if (redirectPath) {
    return navigateTo(redirectPath);
  }
}
function prefixable(currentLocale, defaultLocale, strategy) {
  return (
    // strategy has no prefixes
    strategy !== "no_prefix" && // strategy should not prefix default locale
    !(currentLocale === defaultLocale && (strategy === "prefix_and_default" || strategy === "prefix_except_default"))
  );
}
function extendBaseUrl(ctx) {
  const { baseUrl, defaultLocale, differentDomains } = ctx.$config.public.i18n;
  if (isFunction(baseUrl)) {
    return () => {
      const baseUrlResult = baseUrl(ctx);
      return baseUrlResult;
    };
  }
  const localeCode = isFunction(defaultLocale) ? defaultLocale() : defaultLocale;
  return () => {
    if (differentDomains && localeCode) {
      const domain = getDomainFromLocale(localeCode);
      if (domain) {
        return domain;
      }
    }
    return baseUrl ?? "";
  };
}
function toArray(value) {
  return isArray(value) ? value : [value];
}
function wrapComposable(fn, common = initCommonComposableOptions()) {
  return (...args) => fn(common, ...args);
}
function parseAcceptLanguage(input = "") {
  return input.split(",").map((tag) => tag.split(";")[0]);
}
function getBrowserLocale() {
  const browserLocales = parseAcceptLanguage(useRequestHeader("accept-language"));
  return findBrowserLocale(normalizedLocales, browserLocales) || void 0;
}
function createI18nCookie() {
  const detect = runtimeDetectBrowserLanguage();
  const cookieKey = detect && detect.cookieKey || DEFAULT_COOKIE_KEY;
  const date = /* @__PURE__ */ new Date();
  const cookieOptions = {
    path: "/",
    readonly: false,
    expires: new Date(date.setDate(date.getDate() + 365)),
    sameSite: detect && detect.cookieCrossOrigin ? "none" : "lax",
    domain: detect && detect.cookieDomain || void 0,
    secure: detect && detect.cookieCrossOrigin || detect && detect.cookieSecure
  };
  return useCookie(cookieKey, cookieOptions);
}
function getLocaleCookie(cookieRef, detect, defaultLocale) {
  if (detect === false || !detect.useCookie) {
    return;
  }
  const localeCode = cookieRef.value ?? void 0;
  if (localeCode == null) {
    return;
  }
  if (localeCodes.includes(localeCode)) {
    return localeCode;
  }
  if (defaultLocale) {
    cookieRef.value = defaultLocale;
    return defaultLocale;
  }
  cookieRef.value = void 0;
}
function detectBrowserLanguage(nuxtApp, route, localeCookie, locale = "") {
  const _detect = runtimeDetectBrowserLanguage();
  if (!_detect) {
    return { locale: "", error: "disabled" };
  }
  const strategy = nuxtApp.$i18n.strategy;
  const firstAccess = nuxtApp._vueI18n.__firstAccess;
  if (!firstAccess) {
    return { locale: strategy === "no_prefix" ? locale : "", error: "first_access_only" };
  }
  if (strategy !== "no_prefix") {
    const path = isString(route) ? route : route.path;
    if (_detect.redirectOn === "root" && path !== "/") {
      return { locale: "", error: "not_redirect_on_root" };
    }
    if (_detect.redirectOn === "no prefix" && !_detect.alwaysRedirect && path.match(regexpPath)) {
      return { locale: "", error: "not_redirect_on_no_prefix" };
    }
  }
  const cookieMatch = _detect.useCookie && localeCookie || void 0;
  if (cookieMatch) {
    return { locale: cookieMatch, from: "cookie" };
  }
  const browserMatch = nuxtApp.$i18n.getBrowserLocale();
  if (browserMatch) {
    return { locale: browserMatch, from: "navigator_or_header" };
  }
  return { locale: _detect.fallbackLocale || "", from: "fallback" };
}
function runtimeDetectBrowserLanguage(opts = (/* @__PURE__ */ useRuntimeConfig()).public.i18n) {
  if (opts?.detectBrowserLanguage === false) return false;
  return opts?.detectBrowserLanguage;
}
function createHeadContext(options) {
  const nuxtApp = useNuxtApp();
  const locale = unref(nuxtApp.$i18n.locale);
  const locales2 = unref(nuxtApp.$i18n.locales).map((x) => isString(x) ? { code: x } : x);
  const currentLocale = locales2.find((l) => l.code === locale) || { code: locale };
  const baseUrl = joinURL(unref(getComposer$3(nuxtApp.$i18n).baseUrl), nuxtApp.$config.app.baseURL);
  const runtimeI18n = nuxtApp.$config.public.i18n;
  if (!baseUrl) {
    console.warn("I18n `baseUrl` is required to generate valid SEO tag links.");
  }
  return {
    dir: options.dir,
    lang: options.lang,
    key: options.key,
    seo: options.seo,
    locale,
    locales: locales2,
    currentDir: currentLocale.dir || runtimeI18n.defaultDirection,
    currentLocale,
    currentLanguage: currentLocale.language,
    baseUrl,
    runtimeI18n
  };
}
function localeHead(common, { dir = true, lang = true, seo = true, key = "hid" }) {
  return _localeHead(common, { dir, lang, seo, key });
}
function _localeHead(common, options) {
  const metaObject = {
    htmlAttrs: {},
    link: [],
    meta: []
  };
  const ctx = createHeadContext(options);
  if (ctx.baseUrl == null) {
    return metaObject;
  }
  if (ctx.dir) {
    metaObject.htmlAttrs.dir = ctx.currentDir;
  }
  if (ctx.lang && ctx.currentLanguage) {
    metaObject.htmlAttrs.lang = ctx.currentLanguage;
  }
  if (ctx.seo) {
    metaObject.link = metaObject.link.concat(
      getHreflangLinks(common, ctx),
      getCanonicalLink(common, ctx)
    );
    metaObject.meta = metaObject.meta.concat(
      getOgUrl(common, ctx),
      getCurrentOgLocale(ctx),
      getAlternateOgLocales(ctx)
    );
  }
  return metaObject;
}
function getHreflangLinks(common, ctx) {
  const { defaultLocale, strategy, differentDomains } = ctx.runtimeI18n;
  const links = [];
  if (strategy === "no_prefix" && !differentDomains) return links;
  const localeMap = /* @__PURE__ */ new Map();
  for (const locale of ctx.locales) {
    if (!locale.language) {
      console.warn("Locale `language` ISO code is required to generate alternate link");
      continue;
    }
    const [language, region] = locale.language.split("-");
    if (language && region && (locale.isCatchallLocale || !localeMap.has(language))) {
      localeMap.set(language, locale);
    }
    localeMap.set(locale.language, locale);
  }
  const strictCanonicals = ctx.runtimeI18n.experimental.alternateLinkCanonicalQueries === true;
  const routeWithoutQuery = strictCanonicals ? common.router.resolve({ query: {} }) : void 0;
  if (!ctx.runtimeI18n.experimental.switchLocalePathLinkSSR && strictCanonicals) {
    routeWithoutQuery.meta = common.router.currentRoute.value.meta;
  }
  for (const [language, mapLocale] of localeMap.entries()) {
    const localePath2 = switchLocalePath(common, mapLocale.code, routeWithoutQuery);
    if (!localePath2) continue;
    const fullPath = differentDomains && mapLocale.domain ? localePath2 : joinURL(ctx.baseUrl, localePath2);
    const href = withQuery(fullPath, strictCanonicals ? getCanonicalQueryParams(common, ctx) : {});
    links.push({ [ctx.key]: `i18n-alt-${language}`, rel: "alternate", href, hreflang: language });
    if (defaultLocale && defaultLocale === mapLocale.code) {
      links.unshift({ [ctx.key]: "i18n-xd", rel: "alternate", href, hreflang: "x-default" });
    }
  }
  return links;
}
function getCanonicalUrl(common, ctx) {
  const route = common.router.currentRoute.value;
  const currentRoute = localeRoute(
    common,
    assign({}, route, { path: void 0, name: getRouteBaseName(common, route) })
  );
  if (!currentRoute) return "";
  return withQuery(joinURL(ctx.baseUrl, currentRoute.path), getCanonicalQueryParams(common, ctx));
}
function getCanonicalLink(common, ctx) {
  const href = getCanonicalUrl(common, ctx);
  if (!href) return [];
  return [{ [ctx.key]: "i18n-can", rel: "canonical", href }];
}
function getCanonicalQueryParams(common, ctx) {
  const route = common.router.currentRoute.value;
  const currentRoute = localeRoute(
    common,
    assign({}, route, { path: void 0, name: getRouteBaseName(common, route) })
  );
  const canonicalQueries = isObject(ctx.seo) && ctx.seo?.canonicalQueries || [];
  const currentRouteQuery = currentRoute?.query || {};
  const params = {};
  for (const param of canonicalQueries.filter((x) => x in currentRouteQuery)) {
    params[param] ??= [];
    for (const val of toArray(currentRouteQuery[param])) {
      params[param].push(val || "");
    }
  }
  return params;
}
function getOgUrl(common, ctx) {
  const href = getCanonicalUrl(common, ctx);
  if (!href) return [];
  return [{ [ctx.key]: "i18n-og-url", property: "og:url", content: href }];
}
function getCurrentOgLocale(ctx) {
  if (!ctx.currentLanguage) return [];
  return [{ [ctx.key]: "i18n-og", property: "og:locale", content: hyphenToUnderscore(ctx.currentLanguage) }];
}
function getAlternateOgLocales(ctx) {
  const alternateLocales = ctx.locales.filter((locale) => locale.language && locale.language !== ctx.currentLanguage);
  return alternateLocales.map((locale) => ({
    [ctx.key]: `i18n-og-alt-${locale.language}`,
    property: "og:locale:alternate",
    content: hyphenToUnderscore(locale.language)
  }));
}
function hyphenToUnderscore(val = "") {
  return val.replace(/-/g, "_");
}
function createPosition(line, column, offset) {
  return { line, column, offset };
}
function createLocation(start, end, source) {
  const loc = { start, end };
  return loc;
}
const CompileErrorCodes = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16
};
const COMPILE_ERROR_CODES_EXTEND_POINT = 17;
const errorMessages$2 = {
  // tokenizer error messages
  [CompileErrorCodes.EXPECTED_TOKEN]: `Expected token: '{0}'`,
  [CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER]: `Invalid token in placeholder: '{0}'`,
  [CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: `Unterminated single quote in placeholder`,
  [CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE]: `Unknown escape sequence: \\{0}`,
  [CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE]: `Invalid unicode escape sequence: {0}`,
  [CompileErrorCodes.UNBALANCED_CLOSING_BRACE]: `Unbalanced closing brace`,
  [CompileErrorCodes.UNTERMINATED_CLOSING_BRACE]: `Unterminated closing brace`,
  [CompileErrorCodes.EMPTY_PLACEHOLDER]: `Empty placeholder`,
  [CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER]: `Not allowed nest placeholder`,
  [CompileErrorCodes.INVALID_LINKED_FORMAT]: `Invalid linked format`,
  // parser error messages
  [CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL]: `Plural must have messages`,
  [CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER]: `Unexpected empty linked modifier`,
  [CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY]: `Unexpected empty linked key`,
  [CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS]: `Unexpected lexical analysis in token: '{0}'`,
  // generator error messages
  [CompileErrorCodes.UNHANDLED_CODEGEN_NODE_TYPE]: `unhandled codegen node type: '{0}'`,
  // minimizer error messages
  [CompileErrorCodes.UNHANDLED_MINIFIER_NODE_TYPE]: `unhandled mimifier node type: '{0}'`
};
function createCompileError(code, loc, options = {}) {
  const { domain, messages, args } = options;
  const msg = format$1((messages || errorMessages$2)[code] || "", ...args || []) ;
  const error = new SyntaxError(String(msg));
  error.code = code;
  if (loc) {
    error.location = loc;
  }
  error.domain = domain;
  return error;
}
function defaultOnError(error) {
  throw error;
}
const RE_HTML_TAG = /<\/?[\w\s="/.':;#-\/]+>/;
const detectHtmlTag = (source) => RE_HTML_TAG.test(source);
const CHAR_SP = " ";
const CHAR_CR = "\r";
const CHAR_LF = "\n";
const CHAR_LS = String.fromCharCode(8232);
const CHAR_PS = String.fromCharCode(8233);
function createScanner(str) {
  const _buf = str;
  let _index = 0;
  let _line = 1;
  let _column = 1;
  let _peekOffset = 0;
  const isCRLF = (index2) => _buf[index2] === CHAR_CR && _buf[index2 + 1] === CHAR_LF;
  const isLF = (index2) => _buf[index2] === CHAR_LF;
  const isPS = (index2) => _buf[index2] === CHAR_PS;
  const isLS = (index2) => _buf[index2] === CHAR_LS;
  const isLineEnd = (index2) => isCRLF(index2) || isLF(index2) || isPS(index2) || isLS(index2);
  const index = () => _index;
  const line = () => _line;
  const column = () => _column;
  const peekOffset = () => _peekOffset;
  const charAt = (offset) => isCRLF(offset) || isPS(offset) || isLS(offset) ? CHAR_LF : _buf[offset];
  const currentChar = () => charAt(_index);
  const currentPeek = () => charAt(_index + _peekOffset);
  function next() {
    _peekOffset = 0;
    if (isLineEnd(_index)) {
      _line++;
      _column = 0;
    }
    if (isCRLF(_index)) {
      _index++;
    }
    _index++;
    _column++;
    return _buf[_index];
  }
  function peek() {
    if (isCRLF(_index + _peekOffset)) {
      _peekOffset++;
    }
    _peekOffset++;
    return _buf[_index + _peekOffset];
  }
  function reset() {
    _index = 0;
    _line = 1;
    _column = 1;
    _peekOffset = 0;
  }
  function resetPeek(offset = 0) {
    _peekOffset = offset;
  }
  function skipToPeek() {
    const target = _index + _peekOffset;
    while (target !== _index) {
      next();
    }
    _peekOffset = 0;
  }
  return {
    index,
    line,
    column,
    peekOffset,
    charAt,
    currentChar,
    currentPeek,
    next,
    peek,
    reset,
    resetPeek,
    skipToPeek
  };
}
const EOF = void 0;
const DOT = ".";
const LITERAL_DELIMITER = "'";
const ERROR_DOMAIN$3 = "tokenizer";
function createTokenizer(source, options = {}) {
  const location = options.location !== false;
  const _scnr = createScanner(source);
  const currentOffset = () => _scnr.index();
  const currentPosition = () => createPosition(_scnr.line(), _scnr.column(), _scnr.index());
  const _initLoc = currentPosition();
  const _initOffset = currentOffset();
  const _context = {
    currentType: 13,
    offset: _initOffset,
    startLoc: _initLoc,
    endLoc: _initLoc,
    lastType: 13,
    lastOffset: _initOffset,
    lastStartLoc: _initLoc,
    lastEndLoc: _initLoc,
    braceNest: 0,
    inLinked: false,
    text: ""
  };
  const context = () => _context;
  const { onError } = options;
  function emitError(code, pos, offset, ...args) {
    const ctx = context();
    pos.column += offset;
    pos.offset += offset;
    if (onError) {
      const loc = location ? createLocation(ctx.startLoc, pos) : null;
      const err = createCompileError(code, loc, {
        domain: ERROR_DOMAIN$3,
        args
      });
      onError(err);
    }
  }
  function getToken(context2, type, value) {
    context2.endLoc = currentPosition();
    context2.currentType = type;
    const token = { type };
    if (location) {
      token.loc = createLocation(context2.startLoc, context2.endLoc);
    }
    if (value != null) {
      token.value = value;
    }
    return token;
  }
  const getEndToken = (context2) => getToken(
    context2,
    13
    /* TokenTypes.EOF */
  );
  function eat(scnr, ch) {
    if (scnr.currentChar() === ch) {
      scnr.next();
      return ch;
    } else {
      emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
      return "";
    }
  }
  function peekSpaces(scnr) {
    let buf = "";
    while (scnr.currentPeek() === CHAR_SP || scnr.currentPeek() === CHAR_LF) {
      buf += scnr.currentPeek();
      scnr.peek();
    }
    return buf;
  }
  function skipSpaces(scnr) {
    const buf = peekSpaces(scnr);
    scnr.skipToPeek();
    return buf;
  }
  function isIdentifierStart(ch) {
    if (ch === EOF) {
      return false;
    }
    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 || // a-z
    cc >= 65 && cc <= 90 || // A-Z
    cc === 95;
  }
  function isNumberStart(ch) {
    if (ch === EOF) {
      return false;
    }
    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57;
  }
  function isNamedIdentifierStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 2) {
      return false;
    }
    peekSpaces(scnr);
    const ret = isIdentifierStart(scnr.currentPeek());
    scnr.resetPeek();
    return ret;
  }
  function isListIdentifierStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 2) {
      return false;
    }
    peekSpaces(scnr);
    const ch = scnr.currentPeek() === "-" ? scnr.peek() : scnr.currentPeek();
    const ret = isNumberStart(ch);
    scnr.resetPeek();
    return ret;
  }
  function isLiteralStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 2) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === LITERAL_DELIMITER;
    scnr.resetPeek();
    return ret;
  }
  function isLinkedDotStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 7) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === ".";
    scnr.resetPeek();
    return ret;
  }
  function isLinkedModifierStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 8) {
      return false;
    }
    peekSpaces(scnr);
    const ret = isIdentifierStart(scnr.currentPeek());
    scnr.resetPeek();
    return ret;
  }
  function isLinkedDelimiterStart(scnr, context2) {
    const { currentType } = context2;
    if (!(currentType === 7 || currentType === 11)) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === ":";
    scnr.resetPeek();
    return ret;
  }
  function isLinkedReferStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 9) {
      return false;
    }
    const fn = () => {
      const ch = scnr.currentPeek();
      if (ch === "{") {
        return isIdentifierStart(scnr.peek());
      } else if (ch === "@" || ch === "|" || ch === ":" || ch === "." || ch === CHAR_SP || !ch) {
        return false;
      } else if (ch === CHAR_LF) {
        scnr.peek();
        return fn();
      } else {
        return isTextStart(scnr, false);
      }
    };
    const ret = fn();
    scnr.resetPeek();
    return ret;
  }
  function isPluralStart(scnr) {
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === "|";
    scnr.resetPeek();
    return ret;
  }
  function isTextStart(scnr, reset = true) {
    const fn = (hasSpace = false, prev = "") => {
      const ch = scnr.currentPeek();
      if (ch === "{") {
        return hasSpace;
      } else if (ch === "@" || !ch) {
        return hasSpace;
      } else if (ch === "|") {
        return !(prev === CHAR_SP || prev === CHAR_LF);
      } else if (ch === CHAR_SP) {
        scnr.peek();
        return fn(true, CHAR_SP);
      } else if (ch === CHAR_LF) {
        scnr.peek();
        return fn(true, CHAR_LF);
      } else {
        return true;
      }
    };
    const ret = fn();
    reset && scnr.resetPeek();
    return ret;
  }
  function takeChar(scnr, fn) {
    const ch = scnr.currentChar();
    if (ch === EOF) {
      return EOF;
    }
    if (fn(ch)) {
      scnr.next();
      return ch;
    }
    return null;
  }
  function isIdentifier(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 || // a-z
    cc >= 65 && cc <= 90 || // A-Z
    cc >= 48 && cc <= 57 || // 0-9
    cc === 95 || // _
    cc === 36;
  }
  function takeIdentifierChar(scnr) {
    return takeChar(scnr, isIdentifier);
  }
  function isNamedIdentifier(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 || // a-z
    cc >= 65 && cc <= 90 || // A-Z
    cc >= 48 && cc <= 57 || // 0-9
    cc === 95 || // _
    cc === 36 || // $
    cc === 45;
  }
  function takeNamedIdentifierChar(scnr) {
    return takeChar(scnr, isNamedIdentifier);
  }
  function isDigit(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57;
  }
  function takeDigit(scnr) {
    return takeChar(scnr, isDigit);
  }
  function isHexDigit(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57 || // 0-9
    cc >= 65 && cc <= 70 || // A-F
    cc >= 97 && cc <= 102;
  }
  function takeHexDigit(scnr) {
    return takeChar(scnr, isHexDigit);
  }
  function getDigits(scnr) {
    let ch = "";
    let num = "";
    while (ch = takeDigit(scnr)) {
      num += ch;
    }
    return num;
  }
  function readText(scnr) {
    let buf = "";
    while (true) {
      const ch = scnr.currentChar();
      if (ch === "{" || ch === "}" || ch === "@" || ch === "|" || !ch) {
        break;
      } else if (ch === CHAR_SP || ch === CHAR_LF) {
        if (isTextStart(scnr)) {
          buf += ch;
          scnr.next();
        } else if (isPluralStart(scnr)) {
          break;
        } else {
          buf += ch;
          scnr.next();
        }
      } else {
        buf += ch;
        scnr.next();
      }
    }
    return buf;
  }
  function readNamedIdentifier(scnr) {
    skipSpaces(scnr);
    let ch = "";
    let name = "";
    while (ch = takeNamedIdentifierChar(scnr)) {
      name += ch;
    }
    if (scnr.currentChar() === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
    }
    return name;
  }
  function readListIdentifier(scnr) {
    skipSpaces(scnr);
    let value = "";
    if (scnr.currentChar() === "-") {
      scnr.next();
      value += `-${getDigits(scnr)}`;
    } else {
      value += getDigits(scnr);
    }
    if (scnr.currentChar() === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
    }
    return value;
  }
  function isLiteral2(ch) {
    return ch !== LITERAL_DELIMITER && ch !== CHAR_LF;
  }
  function readLiteral(scnr) {
    skipSpaces(scnr);
    eat(scnr, `'`);
    let ch = "";
    let literal = "";
    while (ch = takeChar(scnr, isLiteral2)) {
      if (ch === "\\") {
        literal += readEscapeSequence(scnr);
      } else {
        literal += ch;
      }
    }
    const current = scnr.currentChar();
    if (current === CHAR_LF || current === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, currentPosition(), 0);
      if (current === CHAR_LF) {
        scnr.next();
        eat(scnr, `'`);
      }
      return literal;
    }
    eat(scnr, `'`);
    return literal;
  }
  function readEscapeSequence(scnr) {
    const ch = scnr.currentChar();
    switch (ch) {
      case "\\":
      case `'`:
        scnr.next();
        return `\\${ch}`;
      case "u":
        return readUnicodeEscapeSequence(scnr, ch, 4);
      case "U":
        return readUnicodeEscapeSequence(scnr, ch, 6);
      default:
        emitError(CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE, currentPosition(), 0, ch);
        return "";
    }
  }
  function readUnicodeEscapeSequence(scnr, unicode, digits) {
    eat(scnr, unicode);
    let sequence = "";
    for (let i = 0; i < digits; i++) {
      const ch = takeHexDigit(scnr);
      if (!ch) {
        emitError(CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE, currentPosition(), 0, `\\${unicode}${sequence}${scnr.currentChar()}`);
        break;
      }
      sequence += ch;
    }
    return `\\${unicode}${sequence}`;
  }
  function isInvalidIdentifier(ch) {
    return ch !== "{" && ch !== "}" && ch !== CHAR_SP && ch !== CHAR_LF;
  }
  function readInvalidIdentifier(scnr) {
    skipSpaces(scnr);
    let ch = "";
    let identifiers = "";
    while (ch = takeChar(scnr, isInvalidIdentifier)) {
      identifiers += ch;
    }
    return identifiers;
  }
  function readLinkedModifier(scnr) {
    let ch = "";
    let name = "";
    while (ch = takeIdentifierChar(scnr)) {
      name += ch;
    }
    return name;
  }
  function readLinkedRefer(scnr) {
    const fn = (buf) => {
      const ch = scnr.currentChar();
      if (ch === "{" || ch === "@" || ch === "|" || ch === "(" || ch === ")" || !ch) {
        return buf;
      } else if (ch === CHAR_SP) {
        return buf;
      } else if (ch === CHAR_LF || ch === DOT) {
        buf += ch;
        scnr.next();
        return fn(buf);
      } else {
        buf += ch;
        scnr.next();
        return fn(buf);
      }
    };
    return fn("");
  }
  function readPlural(scnr) {
    skipSpaces(scnr);
    const plural = eat(
      scnr,
      "|"
      /* TokenChars.Pipe */
    );
    skipSpaces(scnr);
    return plural;
  }
  function readTokenInPlaceholder(scnr, context2) {
    let token = null;
    const ch = scnr.currentChar();
    switch (ch) {
      case "{":
        if (context2.braceNest >= 1) {
          emitError(CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER, currentPosition(), 0);
        }
        scnr.next();
        token = getToken(
          context2,
          2,
          "{"
          /* TokenChars.BraceLeft */
        );
        skipSpaces(scnr);
        context2.braceNest++;
        return token;
      case "}":
        if (context2.braceNest > 0 && context2.currentType === 2) {
          emitError(CompileErrorCodes.EMPTY_PLACEHOLDER, currentPosition(), 0);
        }
        scnr.next();
        token = getToken(
          context2,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
        context2.braceNest--;
        context2.braceNest > 0 && skipSpaces(scnr);
        if (context2.inLinked && context2.braceNest === 0) {
          context2.inLinked = false;
        }
        return token;
      case "@":
        if (context2.braceNest > 0) {
          emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
        }
        token = readTokenInLinked(scnr, context2) || getEndToken(context2);
        context2.braceNest = 0;
        return token;
      default: {
        let validNamedIdentifier = true;
        let validListIdentifier = true;
        let validLiteral = true;
        if (isPluralStart(scnr)) {
          if (context2.braceNest > 0) {
            emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
          }
          token = getToken(context2, 1, readPlural(scnr));
          context2.braceNest = 0;
          context2.inLinked = false;
          return token;
        }
        if (context2.braceNest > 0 && (context2.currentType === 4 || context2.currentType === 5 || context2.currentType === 6)) {
          emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
          context2.braceNest = 0;
          return readToken(scnr, context2);
        }
        if (validNamedIdentifier = isNamedIdentifierStart(scnr, context2)) {
          token = getToken(context2, 4, readNamedIdentifier(scnr));
          skipSpaces(scnr);
          return token;
        }
        if (validListIdentifier = isListIdentifierStart(scnr, context2)) {
          token = getToken(context2, 5, readListIdentifier(scnr));
          skipSpaces(scnr);
          return token;
        }
        if (validLiteral = isLiteralStart(scnr, context2)) {
          token = getToken(context2, 6, readLiteral(scnr));
          skipSpaces(scnr);
          return token;
        }
        if (!validNamedIdentifier && !validListIdentifier && !validLiteral) {
          token = getToken(context2, 12, readInvalidIdentifier(scnr));
          emitError(CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, currentPosition(), 0, token.value);
          skipSpaces(scnr);
          return token;
        }
        break;
      }
    }
    return token;
  }
  function readTokenInLinked(scnr, context2) {
    const { currentType } = context2;
    let token = null;
    const ch = scnr.currentChar();
    if ((currentType === 7 || currentType === 8 || currentType === 11 || currentType === 9) && (ch === CHAR_LF || ch === CHAR_SP)) {
      emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
    }
    switch (ch) {
      case "@":
        scnr.next();
        token = getToken(
          context2,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        );
        context2.inLinked = true;
        return token;
      case ".":
        skipSpaces(scnr);
        scnr.next();
        return getToken(
          context2,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        skipSpaces(scnr);
        scnr.next();
        return getToken(
          context2,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        if (isPluralStart(scnr)) {
          token = getToken(context2, 1, readPlural(scnr));
          context2.braceNest = 0;
          context2.inLinked = false;
          return token;
        }
        if (isLinkedDotStart(scnr, context2) || isLinkedDelimiterStart(scnr, context2)) {
          skipSpaces(scnr);
          return readTokenInLinked(scnr, context2);
        }
        if (isLinkedModifierStart(scnr, context2)) {
          skipSpaces(scnr);
          return getToken(context2, 11, readLinkedModifier(scnr));
        }
        if (isLinkedReferStart(scnr, context2)) {
          skipSpaces(scnr);
          if (ch === "{") {
            return readTokenInPlaceholder(scnr, context2) || token;
          } else {
            return getToken(context2, 10, readLinkedRefer(scnr));
          }
        }
        if (currentType === 7) {
          emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
        }
        context2.braceNest = 0;
        context2.inLinked = false;
        return readToken(scnr, context2);
    }
  }
  function readToken(scnr, context2) {
    let token = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (context2.braceNest > 0) {
      return readTokenInPlaceholder(scnr, context2) || getEndToken(context2);
    }
    if (context2.inLinked) {
      return readTokenInLinked(scnr, context2) || getEndToken(context2);
    }
    const ch = scnr.currentChar();
    switch (ch) {
      case "{":
        return readTokenInPlaceholder(scnr, context2) || getEndToken(context2);
      case "}":
        emitError(CompileErrorCodes.UNBALANCED_CLOSING_BRACE, currentPosition(), 0);
        scnr.next();
        return getToken(
          context2,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return readTokenInLinked(scnr, context2) || getEndToken(context2);
      default: {
        if (isPluralStart(scnr)) {
          token = getToken(context2, 1, readPlural(scnr));
          context2.braceNest = 0;
          context2.inLinked = false;
          return token;
        }
        if (isTextStart(scnr)) {
          return getToken(context2, 0, readText(scnr));
        }
        break;
      }
    }
    return token;
  }
  function nextToken() {
    const { currentType, offset, startLoc, endLoc } = _context;
    _context.lastType = currentType;
    _context.lastOffset = offset;
    _context.lastStartLoc = startLoc;
    _context.lastEndLoc = endLoc;
    _context.offset = currentOffset();
    _context.startLoc = currentPosition();
    if (_scnr.currentChar() === EOF) {
      return getToken(
        _context,
        13
        /* TokenTypes.EOF */
      );
    }
    return readToken(_scnr, _context);
  }
  return {
    nextToken,
    currentOffset,
    currentPosition,
    context
  };
}
const ERROR_DOMAIN$2 = "parser";
const KNOWN_ESCAPES = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function fromEscapeSequence(match, codePoint4, codePoint6) {
  switch (match) {
    case `\\\\`:
      return `\\`;
    // eslint-disable-next-line no-useless-escape
    case `\\'`:
      return `'`;
    default: {
      const codePoint = parseInt(codePoint4 || codePoint6, 16);
      if (codePoint <= 55295 || codePoint >= 57344) {
        return String.fromCodePoint(codePoint);
      }
      return "�";
    }
  }
}
function createParser(options = {}) {
  const location = options.location !== false;
  const { onError } = options;
  function emitError(tokenzer, code, start, offset, ...args) {
    const end = tokenzer.currentPosition();
    end.offset += offset;
    end.column += offset;
    if (onError) {
      const loc = location ? createLocation(start, end) : null;
      const err = createCompileError(code, loc, {
        domain: ERROR_DOMAIN$2,
        args
      });
      onError(err);
    }
  }
  function startNode(type, offset, loc) {
    const node = { type };
    if (location) {
      node.start = offset;
      node.end = offset;
      node.loc = { start: loc, end: loc };
    }
    return node;
  }
  function endNode(node, offset, pos, type) {
    if (location) {
      node.end = offset;
      if (node.loc) {
        node.loc.end = pos;
      }
    }
  }
  function parseText(tokenizer, value) {
    const context = tokenizer.context();
    const node = startNode(3, context.offset, context.startLoc);
    node.value = value;
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseList(tokenizer, index) {
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(5, offset, loc);
    node.index = parseInt(index, 10);
    tokenizer.nextToken();
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseNamed(tokenizer, key) {
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(4, offset, loc);
    node.key = key;
    tokenizer.nextToken();
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLiteral(tokenizer, value) {
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(9, offset, loc);
    node.value = value.replace(KNOWN_ESCAPES, fromEscapeSequence);
    tokenizer.nextToken();
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLinkedModifier(tokenizer) {
    const token = tokenizer.nextToken();
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(8, offset, loc);
    if (token.type !== 11) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER, context.lastStartLoc, 0);
      node.value = "";
      endNode(node, offset, loc);
      return {
        nextConsumeToken: token,
        node
      };
    }
    if (token.value == null) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
    }
    node.value = token.value || "";
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return {
      node
    };
  }
  function parseLinkedKey(tokenizer, value) {
    const context = tokenizer.context();
    const node = startNode(7, context.offset, context.startLoc);
    node.value = value;
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLinked(tokenizer) {
    const context = tokenizer.context();
    const linkedNode = startNode(6, context.offset, context.startLoc);
    let token = tokenizer.nextToken();
    if (token.type === 8) {
      const parsed = parseLinkedModifier(tokenizer);
      linkedNode.modifier = parsed.node;
      token = parsed.nextConsumeToken || tokenizer.nextToken();
    }
    if (token.type !== 9) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
    }
    token = tokenizer.nextToken();
    if (token.type === 2) {
      token = tokenizer.nextToken();
    }
    switch (token.type) {
      case 10:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseLinkedKey(tokenizer, token.value || "");
        break;
      case 4:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseNamed(tokenizer, token.value || "");
        break;
      case 5:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseList(tokenizer, token.value || "");
        break;
      case 6:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseLiteral(tokenizer, token.value || "");
        break;
      default: {
        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY, context.lastStartLoc, 0);
        const nextContext = tokenizer.context();
        const emptyLinkedKeyNode = startNode(7, nextContext.offset, nextContext.startLoc);
        emptyLinkedKeyNode.value = "";
        endNode(emptyLinkedKeyNode, nextContext.offset, nextContext.startLoc);
        linkedNode.key = emptyLinkedKeyNode;
        endNode(linkedNode, nextContext.offset, nextContext.startLoc);
        return {
          nextConsumeToken: token,
          node: linkedNode
        };
      }
    }
    endNode(linkedNode, tokenizer.currentOffset(), tokenizer.currentPosition());
    return {
      node: linkedNode
    };
  }
  function parseMessage(tokenizer) {
    const context = tokenizer.context();
    const startOffset = context.currentType === 1 ? tokenizer.currentOffset() : context.offset;
    const startLoc = context.currentType === 1 ? context.endLoc : context.startLoc;
    const node = startNode(2, startOffset, startLoc);
    node.items = [];
    let nextToken = null;
    do {
      const token = nextToken || tokenizer.nextToken();
      nextToken = null;
      switch (token.type) {
        case 0:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseText(tokenizer, token.value || ""));
          break;
        case 5:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseList(tokenizer, token.value || ""));
          break;
        case 4:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseNamed(tokenizer, token.value || ""));
          break;
        case 6:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseLiteral(tokenizer, token.value || ""));
          break;
        case 7: {
          const parsed = parseLinked(tokenizer);
          node.items.push(parsed.node);
          nextToken = parsed.nextConsumeToken || null;
          break;
        }
      }
    } while (context.currentType !== 13 && context.currentType !== 1);
    const endOffset = context.currentType === 1 ? context.lastOffset : tokenizer.currentOffset();
    const endLoc = context.currentType === 1 ? context.lastEndLoc : tokenizer.currentPosition();
    endNode(node, endOffset, endLoc);
    return node;
  }
  function parsePlural(tokenizer, offset, loc, msgNode) {
    const context = tokenizer.context();
    let hasEmptyMessage = msgNode.items.length === 0;
    const node = startNode(1, offset, loc);
    node.cases = [];
    node.cases.push(msgNode);
    do {
      const msg = parseMessage(tokenizer);
      if (!hasEmptyMessage) {
        hasEmptyMessage = msg.items.length === 0;
      }
      node.cases.push(msg);
    } while (context.currentType !== 13);
    if (hasEmptyMessage) {
      emitError(tokenizer, CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL, loc, 0);
    }
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseResource(tokenizer) {
    const context = tokenizer.context();
    const { offset, startLoc } = context;
    const msgNode = parseMessage(tokenizer);
    if (context.currentType === 13) {
      return msgNode;
    } else {
      return parsePlural(tokenizer, offset, startLoc, msgNode);
    }
  }
  function parse2(source) {
    const tokenizer = createTokenizer(source, assign({}, options));
    const context = tokenizer.context();
    const node = startNode(0, context.offset, context.startLoc);
    if (location && node.loc) {
      node.loc.source = source;
    }
    node.body = parseResource(tokenizer);
    if (options.onCacheKey) {
      node.cacheKey = options.onCacheKey(source);
    }
    if (context.currentType !== 13) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, source[context.offset] || "");
    }
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  return { parse: parse2 };
}
function getTokenCaption(token) {
  if (token.type === 13) {
    return "EOF";
  }
  const name = (token.value || "").replace(/\r?\n/gu, "\\n");
  return name.length > 10 ? name.slice(0, 9) + "…" : name;
}
function createTransformer(ast, options = {}) {
  const _context = {
    ast,
    helpers: /* @__PURE__ */ new Set()
  };
  const context = () => _context;
  const helper = (name) => {
    _context.helpers.add(name);
    return name;
  };
  return { context, helper };
}
function traverseNodes(nodes, transformer) {
  for (let i = 0; i < nodes.length; i++) {
    traverseNode(nodes[i], transformer);
  }
}
function traverseNode(node, transformer) {
  switch (node.type) {
    case 1:
      traverseNodes(node.cases, transformer);
      transformer.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      traverseNodes(node.items, transformer);
      break;
    case 6: {
      const linked = node;
      traverseNode(linked.key, transformer);
      transformer.helper(
        "linked"
        /* HelperNameMap.LINKED */
      );
      transformer.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    }
    case 5:
      transformer.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      );
      transformer.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      transformer.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      );
      transformer.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function transform(ast, options = {}) {
  const transformer = createTransformer(ast);
  transformer.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  );
  ast.body && traverseNode(ast.body, transformer);
  const context = transformer.context();
  ast.helpers = Array.from(context.helpers);
}
function optimize(ast) {
  const body = ast.body;
  if (body.type === 2) {
    optimizeMessageNode(body);
  } else {
    body.cases.forEach((c) => optimizeMessageNode(c));
  }
  return ast;
}
function optimizeMessageNode(message) {
  if (message.items.length === 1) {
    const item = message.items[0];
    if (item.type === 3 || item.type === 9) {
      message.static = item.value;
      delete item.value;
    }
  } else {
    const values = [];
    for (let i = 0; i < message.items.length; i++) {
      const item = message.items[i];
      if (!(item.type === 3 || item.type === 9)) {
        break;
      }
      if (item.value == null) {
        break;
      }
      values.push(item.value);
    }
    if (values.length === message.items.length) {
      message.static = join(values);
      for (let i = 0; i < message.items.length; i++) {
        const item = message.items[i];
        if (item.type === 3 || item.type === 9) {
          delete item.value;
        }
      }
    }
  }
}
const ERROR_DOMAIN$1 = "minifier";
function minify(node) {
  node.t = node.type;
  switch (node.type) {
    case 0: {
      const resource = node;
      minify(resource.body);
      resource.b = resource.body;
      delete resource.body;
      break;
    }
    case 1: {
      const plural = node;
      const cases = plural.cases;
      for (let i = 0; i < cases.length; i++) {
        minify(cases[i]);
      }
      plural.c = cases;
      delete plural.cases;
      break;
    }
    case 2: {
      const message = node;
      const items = message.items;
      for (let i = 0; i < items.length; i++) {
        minify(items[i]);
      }
      message.i = items;
      delete message.items;
      if (message.static) {
        message.s = message.static;
        delete message.static;
      }
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const valueNode = node;
      if (valueNode.value) {
        valueNode.v = valueNode.value;
        delete valueNode.value;
      }
      break;
    }
    case 6: {
      const linked = node;
      minify(linked.key);
      linked.k = linked.key;
      delete linked.key;
      if (linked.modifier) {
        minify(linked.modifier);
        linked.m = linked.modifier;
        delete linked.modifier;
      }
      break;
    }
    case 5: {
      const list = node;
      list.i = list.index;
      delete list.index;
      break;
    }
    case 4: {
      const named = node;
      named.k = named.key;
      delete named.key;
      break;
    }
    default:
      {
        throw createCompileError(CompileErrorCodes.UNHANDLED_MINIFIER_NODE_TYPE, null, {
          domain: ERROR_DOMAIN$1,
          args: [node.type]
        });
      }
  }
  delete node.type;
}
const ERROR_DOMAIN = "parser";
function createCodeGenerator(ast, options) {
  const { filename, breakLineCode, needIndent: _needIndent } = options;
  const location = options.location !== false;
  const _context = {
    filename,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode,
    needIndent: _needIndent,
    indentLevel: 0
  };
  if (location && ast.loc) {
    _context.source = ast.loc.source;
  }
  const context = () => _context;
  function push(code, node) {
    _context.code += code;
  }
  function _newline(n, withBreakLine = true) {
    const _breakLineCode = withBreakLine ? breakLineCode : "";
    push(_needIndent ? _breakLineCode + `  `.repeat(n) : _breakLineCode);
  }
  function indent(withNewLine = true) {
    const level = ++_context.indentLevel;
    withNewLine && _newline(level);
  }
  function deindent(withNewLine = true) {
    const level = --_context.indentLevel;
    withNewLine && _newline(level);
  }
  function newline() {
    _newline(_context.indentLevel);
  }
  const helper = (key) => `_${key}`;
  const needIndent = () => _context.needIndent;
  return {
    context,
    push,
    indent,
    deindent,
    newline,
    helper,
    needIndent
  };
}
function generateLinkedNode(generator, node) {
  const { helper } = generator;
  generator.push(`${helper(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`);
  generateNode(generator, node.key);
  if (node.modifier) {
    generator.push(`, `);
    generateNode(generator, node.modifier);
    generator.push(`, _type`);
  } else {
    generator.push(`, undefined, _type`);
  }
  generator.push(`)`);
}
function generateMessageNode(generator, node) {
  const { helper, needIndent } = generator;
  generator.push(`${helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`);
  generator.indent(needIndent());
  const length = node.items.length;
  for (let i = 0; i < length; i++) {
    generateNode(generator, node.items[i]);
    if (i === length - 1) {
      break;
    }
    generator.push(", ");
  }
  generator.deindent(needIndent());
  generator.push("])");
}
function generatePluralNode(generator, node) {
  const { helper, needIndent } = generator;
  if (node.cases.length > 1) {
    generator.push(`${helper(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`);
    generator.indent(needIndent());
    const length = node.cases.length;
    for (let i = 0; i < length; i++) {
      generateNode(generator, node.cases[i]);
      if (i === length - 1) {
        break;
      }
      generator.push(", ");
    }
    generator.deindent(needIndent());
    generator.push(`])`);
  }
}
function generateResource(generator, node) {
  if (node.body) {
    generateNode(generator, node.body);
  } else {
    generator.push("null");
  }
}
function generateNode(generator, node) {
  const { helper } = generator;
  switch (node.type) {
    case 0:
      generateResource(generator, node);
      break;
    case 1:
      generatePluralNode(generator, node);
      break;
    case 2:
      generateMessageNode(generator, node);
      break;
    case 6:
      generateLinkedNode(generator, node);
      break;
    case 8:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 7:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 5:
      generator.push(`${helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${helper(
        "list"
        /* HelperNameMap.LIST */
      )}(${node.index}))`, node);
      break;
    case 4:
      generator.push(`${helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${helper(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(node.key)}))`, node);
      break;
    case 9:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 3:
      generator.push(JSON.stringify(node.value), node);
      break;
    default:
      {
        throw createCompileError(CompileErrorCodes.UNHANDLED_CODEGEN_NODE_TYPE, null, {
          domain: ERROR_DOMAIN,
          args: [node.type]
        });
      }
  }
}
const generate = (ast, options = {}) => {
  const mode = isString(options.mode) ? options.mode : "normal";
  const filename = isString(options.filename) ? options.filename : "message.intl";
  !!options.sourceMap;
  const breakLineCode = options.breakLineCode != null ? options.breakLineCode : mode === "arrow" ? ";" : "\n";
  const needIndent = options.needIndent ? options.needIndent : mode !== "arrow";
  const helpers = ast.helpers || [];
  const generator = createCodeGenerator(ast, {
    filename,
    breakLineCode,
    needIndent
  });
  generator.push(mode === "normal" ? `function __msg__ (ctx) {` : `(ctx) => {`);
  generator.indent(needIndent);
  if (helpers.length > 0) {
    generator.push(`const { ${join(helpers.map((s) => `${s}: _${s}`), ", ")} } = ctx`);
    generator.newline();
  }
  generator.push(`return `);
  generateNode(generator, ast);
  generator.deindent(needIndent);
  generator.push(`}`);
  delete ast.helpers;
  const { code, map } = generator.context();
  return {
    ast,
    code,
    map: map ? map.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function baseCompile$1(source, options = {}) {
  const assignedOptions = assign({}, options);
  const jit = !!assignedOptions.jit;
  const enalbeMinify = !!assignedOptions.minify;
  const enambeOptimize = assignedOptions.optimize == null ? true : assignedOptions.optimize;
  const parser = createParser(assignedOptions);
  const ast = parser.parse(source);
  if (!jit) {
    transform(ast, assignedOptions);
    return generate(ast, assignedOptions);
  } else {
    enambeOptimize && optimize(ast);
    enalbeMinify && minify(ast);
    return { ast, code: "" };
  }
}
function isMessageAST(val) {
  return isObject(val) && resolveType(val) === 0 && (hasOwn(val, "b") || hasOwn(val, "body"));
}
const PROPS_BODY = ["b", "body"];
function resolveBody(node) {
  return resolveProps(node, PROPS_BODY);
}
const PROPS_CASES = ["c", "cases"];
function resolveCases(node) {
  return resolveProps(node, PROPS_CASES, []);
}
const PROPS_STATIC = ["s", "static"];
function resolveStatic(node) {
  return resolveProps(node, PROPS_STATIC);
}
const PROPS_ITEMS = ["i", "items"];
function resolveItems(node) {
  return resolveProps(node, PROPS_ITEMS, []);
}
const PROPS_TYPE = ["t", "type"];
function resolveType(node) {
  return resolveProps(node, PROPS_TYPE);
}
const PROPS_VALUE = ["v", "value"];
function resolveValue$1(node, type) {
  const resolved = resolveProps(node, PROPS_VALUE);
  if (resolved != null) {
    return resolved;
  } else {
    throw createUnhandleNodeError(type);
  }
}
const PROPS_MODIFIER = ["m", "modifier"];
function resolveLinkedModifier(node) {
  return resolveProps(node, PROPS_MODIFIER);
}
const PROPS_KEY = ["k", "key"];
function resolveLinkedKey(node) {
  const resolved = resolveProps(node, PROPS_KEY);
  if (resolved) {
    return resolved;
  } else {
    throw createUnhandleNodeError(
      6
      /* NodeTypes.Linked */
    );
  }
}
function resolveProps(node, props, defaultValue) {
  for (let i = 0; i < props.length; i++) {
    const prop = props[i];
    if (hasOwn(node, prop) && node[prop] != null) {
      return node[prop];
    }
  }
  return defaultValue;
}
const AST_NODE_PROPS_KEYS = [
  ...PROPS_BODY,
  ...PROPS_CASES,
  ...PROPS_STATIC,
  ...PROPS_ITEMS,
  ...PROPS_KEY,
  ...PROPS_MODIFIER,
  ...PROPS_VALUE,
  ...PROPS_TYPE
];
function createUnhandleNodeError(type) {
  return new Error(`unhandled node type: ${type}`);
}
function format(ast) {
  const msg = (ctx) => formatParts(ctx, ast);
  return msg;
}
function formatParts(ctx, ast) {
  const body = resolveBody(ast);
  if (body == null) {
    throw createUnhandleNodeError(
      0
      /* NodeTypes.Resource */
    );
  }
  const type = resolveType(body);
  if (type === 1) {
    const plural = body;
    const cases = resolveCases(plural);
    return ctx.plural(cases.reduce((messages, c) => [
      ...messages,
      formatMessageParts(ctx, c)
    ], []));
  } else {
    return formatMessageParts(ctx, body);
  }
}
function formatMessageParts(ctx, node) {
  const static_ = resolveStatic(node);
  if (static_ != null) {
    return ctx.type === "text" ? static_ : ctx.normalize([static_]);
  } else {
    const messages = resolveItems(node).reduce((acm, c) => [...acm, formatMessagePart(ctx, c)], []);
    return ctx.normalize(messages);
  }
}
function formatMessagePart(ctx, node) {
  const type = resolveType(node);
  switch (type) {
    case 3: {
      return resolveValue$1(node, type);
    }
    case 9: {
      return resolveValue$1(node, type);
    }
    case 4: {
      const named = node;
      if (hasOwn(named, "k") && named.k) {
        return ctx.interpolate(ctx.named(named.k));
      }
      if (hasOwn(named, "key") && named.key) {
        return ctx.interpolate(ctx.named(named.key));
      }
      throw createUnhandleNodeError(type);
    }
    case 5: {
      const list = node;
      if (hasOwn(list, "i") && isNumber(list.i)) {
        return ctx.interpolate(ctx.list(list.i));
      }
      if (hasOwn(list, "index") && isNumber(list.index)) {
        return ctx.interpolate(ctx.list(list.index));
      }
      throw createUnhandleNodeError(type);
    }
    case 6: {
      const linked = node;
      const modifier = resolveLinkedModifier(linked);
      const key = resolveLinkedKey(linked);
      return ctx.linked(formatMessagePart(ctx, key), modifier ? formatMessagePart(ctx, modifier) : void 0, ctx.type);
    }
    case 7: {
      return resolveValue$1(node, type);
    }
    case 8: {
      return resolveValue$1(node, type);
    }
    default:
      throw new Error(`unhandled node on format message part: ${type}`);
  }
}
const WARN_MESSAGE = `Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.`;
function checkHtmlMessage(source, warnHtmlMessage) {
  if (warnHtmlMessage && detectHtmlTag(source)) {
    warn(format$1(WARN_MESSAGE, { source }));
  }
}
const defaultOnCacheKey = (message) => message;
let compileCache = create();
function baseCompile(message, options = {}) {
  let detectError = false;
  const onError = options.onError || defaultOnError;
  options.onError = (err) => {
    detectError = true;
    onError(err);
  };
  return { ...baseCompile$1(message, options), detectError };
}
// @__NO_SIDE_EFFECTS__
function compile(message, context) {
  if (isString(message)) {
    const warnHtmlMessage = isBoolean(context.warnHtmlMessage) ? context.warnHtmlMessage : true;
    checkHtmlMessage(message, warnHtmlMessage);
    const onCacheKey = context.onCacheKey || defaultOnCacheKey;
    const cacheKey = onCacheKey(message);
    const cached = compileCache[cacheKey];
    if (cached) {
      return cached;
    }
    const { ast, detectError } = baseCompile(message, {
      ...context,
      location: "prerender" !== "production",
      jit: true
    });
    const msg = format(ast);
    return !detectError ? compileCache[cacheKey] = msg : msg;
  } else {
    if (!isMessageAST(message)) {
      warn(`the message that is resolve with key '${context.key}' is not supported for jit compilation`);
      return (() => message);
    }
    const cacheKey = message.cacheKey;
    if (cacheKey) {
      const cached = compileCache[cacheKey];
      if (cached) {
        return cached;
      }
      return compileCache[cacheKey] = format(message);
    } else {
      return format(message);
    }
  }
}
let devtools = null;
function setDevToolsHook(hook) {
  devtools = hook;
}
function initI18nDevTools(i18n, version, meta) {
  devtools && devtools.emit("i18n:init", {
    timestamp: Date.now(),
    i18n,
    version,
    meta
  });
}
const translateDevTools = /* @__PURE__ */ createDevToolsHook("function:translate");
function createDevToolsHook(hook) {
  return (payloads) => devtools && devtools.emit(hook, payloads);
}
const CoreErrorCodes = {
  INVALID_ARGUMENT: COMPILE_ERROR_CODES_EXTEND_POINT,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
};
const CORE_ERROR_CODES_EXTEND_POINT = 24;
function createCoreError(code) {
  return createCompileError(code, null, { messages: errorMessages$1 } );
}
const errorMessages$1 = {
  [CoreErrorCodes.INVALID_ARGUMENT]: "Invalid arguments",
  [CoreErrorCodes.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [CoreErrorCodes.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [CoreErrorCodes.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [CoreErrorCodes.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [CoreErrorCodes.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function getLocale(context, options) {
  return options.locale != null ? resolveLocale(options.locale) : resolveLocale(context.locale);
}
let _resolveLocale;
function resolveLocale(locale) {
  if (isString(locale)) {
    return locale;
  } else {
    if (isFunction(locale)) {
      if (locale.resolvedOnce && _resolveLocale != null) {
        return _resolveLocale;
      } else if (locale.constructor.name === "Function") {
        const resolve2 = locale();
        if (isPromise(resolve2)) {
          throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
        }
        return _resolveLocale = resolve2;
      } else {
        throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
      }
    } else {
      throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_TYPE);
    }
  }
}
function fallbackWithSimple(ctx, fallback, start) {
  return [.../* @__PURE__ */ new Set([
    start,
    ...isArray(fallback) ? fallback : isObject(fallback) ? Object.keys(fallback) : isString(fallback) ? [fallback] : [start]
  ])];
}
function fallbackWithLocaleChain(ctx, fallback, start) {
  const startLocale = isString(start) ? start : DEFAULT_LOCALE;
  const context = ctx;
  if (!context.__localeChainCache) {
    context.__localeChainCache = /* @__PURE__ */ new Map();
  }
  let chain = context.__localeChainCache.get(startLocale);
  if (!chain) {
    chain = [];
    let block2 = [start];
    while (isArray(block2)) {
      block2 = appendBlockToChain(chain, block2, fallback);
    }
    const defaults = isArray(fallback) || !isPlainObject(fallback) ? fallback : fallback["default"] ? fallback["default"] : null;
    block2 = isString(defaults) ? [defaults] : defaults;
    if (isArray(block2)) {
      appendBlockToChain(chain, block2, false);
    }
    context.__localeChainCache.set(startLocale, chain);
  }
  return chain;
}
function appendBlockToChain(chain, block2, blocks) {
  let follow = true;
  for (let i = 0; i < block2.length && isBoolean(follow); i++) {
    const locale = block2[i];
    if (isString(locale)) {
      follow = appendLocaleToChain(chain, block2[i], blocks);
    }
  }
  return follow;
}
function appendLocaleToChain(chain, locale, blocks) {
  let follow;
  const tokens = locale.split("-");
  do {
    const target = tokens.join("-");
    follow = appendItemToChain(chain, target, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && follow === true);
  return follow;
}
function appendItemToChain(chain, target, blocks) {
  let follow = false;
  if (!chain.includes(target)) {
    follow = true;
    if (target) {
      follow = target[target.length - 1] !== "!";
      const locale = target.replace(/!/g, "");
      chain.push(locale);
      if ((isArray(blocks) || isPlainObject(blocks)) && blocks[locale]) {
        follow = blocks[locale];
      }
    }
  }
  return follow;
}
const pathStateMachine = [];
pathStateMachine[
  0
  /* States.BEFORE_PATH */
] = {
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    0
    /* States.BEFORE_PATH */
  ],
  [
    "i"
    /* PathCharTypes.IDENT */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4
    /* States.IN_SUB_PATH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: [
    7
    /* States.AFTER_PATH */
  ]
};
pathStateMachine[
  1
  /* States.IN_PATH */
] = {
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    1
    /* States.IN_PATH */
  ],
  [
    "."
    /* PathCharTypes.DOT */
  ]: [
    2
    /* States.BEFORE_IDENT */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4
    /* States.IN_SUB_PATH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: [
    7
    /* States.AFTER_PATH */
  ]
};
pathStateMachine[
  2
  /* States.BEFORE_IDENT */
] = {
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    2
    /* States.BEFORE_IDENT */
  ],
  [
    "i"
    /* PathCharTypes.IDENT */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "0"
    /* PathCharTypes.ZERO */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ]
};
pathStateMachine[
  3
  /* States.IN_IDENT */
] = {
  [
    "i"
    /* PathCharTypes.IDENT */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "0"
    /* PathCharTypes.ZERO */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    1,
    1
    /* Actions.PUSH */
  ],
  [
    "."
    /* PathCharTypes.DOT */
  ]: [
    2,
    1
    /* Actions.PUSH */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4,
    1
    /* Actions.PUSH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: [
    7,
    1
    /* Actions.PUSH */
  ]
};
pathStateMachine[
  4
  /* States.IN_SUB_PATH */
] = {
  [
    "'"
    /* PathCharTypes.SINGLE_QUOTE */
  ]: [
    5,
    0
    /* Actions.APPEND */
  ],
  [
    '"'
    /* PathCharTypes.DOUBLE_QUOTE */
  ]: [
    6,
    0
    /* Actions.APPEND */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  [
    "]"
    /* PathCharTypes.RIGHT_BRACKET */
  ]: [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* PathCharTypes.ELSE */
  ]: [
    4,
    0
    /* Actions.APPEND */
  ]
};
pathStateMachine[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  [
    "'"
    /* PathCharTypes.SINGLE_QUOTE */
  ]: [
    4,
    0
    /* Actions.APPEND */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* PathCharTypes.ELSE */
  ]: [
    5,
    0
    /* Actions.APPEND */
  ]
};
pathStateMachine[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  [
    '"'
    /* PathCharTypes.DOUBLE_QUOTE */
  ]: [
    4,
    0
    /* Actions.APPEND */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* PathCharTypes.ELSE */
  ]: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
  return literalValueRE.test(exp);
}
function stripQuotes(str) {
  const a = str.charCodeAt(0);
  const b = str.charCodeAt(str.length - 1);
  return a === b && (a === 34 || a === 39) ? str.slice(1, -1) : str;
}
function getPathCharType(ch) {
  if (ch === void 0 || ch === null) {
    return "o";
  }
  const code = ch.charCodeAt(0);
  switch (code) {
    case 91:
    // [
    case 93:
    // ]
    case 46:
    // .
    case 34:
    // "
    case 39:
      return ch;
    case 95:
    // _
    case 36:
    // $
    case 45:
      return "i";
    case 9:
    // Tab (HT)
    case 10:
    // Newline (LF)
    case 13:
    // Return (CR)
    case 160:
    // No-break space (NBSP)
    case 65279:
    // Byte Order Mark (BOM)
    case 8232:
    // Line Separator (LS)
    case 8233:
      return "w";
  }
  return "i";
}
function formatSubPath(path) {
  const trimmed = path.trim();
  if (path.charAt(0) === "0" && isNaN(parseInt(path))) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
}
function parse(path) {
  const keys = [];
  let index = -1;
  let mode = 0;
  let subPathDepth = 0;
  let c;
  let key;
  let newChar;
  let type;
  let transition;
  let action;
  let typeMap;
  const actions = [];
  actions[
    0
    /* Actions.APPEND */
  ] = () => {
    if (key === void 0) {
      key = newChar;
    } else {
      key += newChar;
    }
  };
  actions[
    1
    /* Actions.PUSH */
  ] = () => {
    if (key !== void 0) {
      keys.push(key);
      key = void 0;
    }
  };
  actions[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    actions[
      0
      /* Actions.APPEND */
    ]();
    subPathDepth++;
  };
  actions[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = 4;
      actions[
        0
        /* Actions.APPEND */
      ]();
    } else {
      subPathDepth = 0;
      if (key === void 0) {
        return false;
      }
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[
          1
          /* Actions.PUSH */
        ]();
      }
    }
  };
  function maybeUnescapeQuote() {
    const nextChar = path[index + 1];
    if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === '"') {
      index++;
      newChar = "\\" + nextChar;
      actions[
        0
        /* Actions.APPEND */
      ]();
      return true;
    }
  }
  while (mode !== null) {
    index++;
    c = path[index];
    if (c === "\\" && maybeUnescapeQuote()) {
      continue;
    }
    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap[
      "l"
      /* PathCharTypes.ELSE */
    ] || 8;
    if (transition === 8) {
      return;
    }
    mode = transition[0];
    if (transition[1] !== void 0) {
      action = actions[transition[1]];
      if (action) {
        newChar = c;
        if (action() === false) {
          return;
        }
      }
    }
    if (mode === 7) {
      return keys;
    }
  }
}
const cache = /* @__PURE__ */ new Map();
function resolveWithKeyValue(obj, path) {
  return isObject(obj) ? obj[path] : null;
}
function resolveValue(obj, path) {
  if (!isObject(obj)) {
    return null;
  }
  let hit = cache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      cache.set(path, hit);
    }
  }
  if (!hit) {
    return null;
  }
  const len = hit.length;
  let last = obj;
  let i = 0;
  while (i < len) {
    const key = hit[i];
    if (AST_NODE_PROPS_KEYS.includes(key) && isMessageAST(last)) {
      return null;
    }
    const val = last[key];
    if (val === void 0) {
      return null;
    }
    if (isFunction(last)) {
      return null;
    }
    last = val;
    i++;
  }
  return last;
}
const CoreWarnCodes = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7
};
const CORE_WARN_CODES_EXTEND_POINT = 8;
const warnMessages$1 = {
  [CoreWarnCodes.NOT_FOUND_KEY]: `Not found '{key}' key in '{locale}' locale messages.`,
  [CoreWarnCodes.FALLBACK_TO_TRANSLATE]: `Fall back to translate '{key}' key with '{target}' locale.`,
  [CoreWarnCodes.CANNOT_FORMAT_NUMBER]: `Cannot format a number value due to not supported Intl.NumberFormat.`,
  [CoreWarnCodes.FALLBACK_TO_NUMBER_FORMAT]: `Fall back to number format '{key}' key with '{target}' locale.`,
  [CoreWarnCodes.CANNOT_FORMAT_DATE]: `Cannot format a date value due to not supported Intl.DateTimeFormat.`,
  [CoreWarnCodes.FALLBACK_TO_DATE_FORMAT]: `Fall back to datetime format '{key}' key with '{target}' locale.`,
  [CoreWarnCodes.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: `This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future.`
};
function getWarnMessage$1(code, ...args) {
  return format$1(warnMessages$1[code], ...args);
}
const VERSION$1 = "10.0.8";
const NOT_REOSLVED = -1;
const DEFAULT_LOCALE = "en-US";
const MISSING_RESOLVE_VALUE = "";
const capitalize = (str) => `${str.charAt(0).toLocaleUpperCase()}${str.substr(1)}`;
function getDefaultLinkedModifiers() {
  return {
    upper: (val, type) => {
      return type === "text" && isString(val) ? val.toUpperCase() : type === "vnode" && isObject(val) && "__v_isVNode" in val ? val.children.toUpperCase() : val;
    },
    lower: (val, type) => {
      return type === "text" && isString(val) ? val.toLowerCase() : type === "vnode" && isObject(val) && "__v_isVNode" in val ? val.children.toLowerCase() : val;
    },
    capitalize: (val, type) => {
      return type === "text" && isString(val) ? capitalize(val) : type === "vnode" && isObject(val) && "__v_isVNode" in val ? capitalize(val.children) : val;
    }
  };
}
let _compiler;
function registerMessageCompiler(compiler) {
  _compiler = compiler;
}
let _resolver;
function registerMessageResolver(resolver) {
  _resolver = resolver;
}
let _fallbacker;
function registerLocaleFallbacker(fallbacker) {
  _fallbacker = fallbacker;
}
let _additionalMeta = null;
const setAdditionalMeta = /* @__NO_SIDE_EFFECTS__ */ (meta) => {
  _additionalMeta = meta;
};
const getAdditionalMeta = /* @__NO_SIDE_EFFECTS__ */ () => _additionalMeta;
let _fallbackContext = null;
const setFallbackContext = (context) => {
  _fallbackContext = context;
};
const getFallbackContext = () => _fallbackContext;
let _cid = 0;
function createCoreContext(options = {}) {
  const onWarn = isFunction(options.onWarn) ? options.onWarn : warn;
  const version = isString(options.version) ? options.version : VERSION$1;
  const locale = isString(options.locale) || isFunction(options.locale) ? options.locale : DEFAULT_LOCALE;
  const _locale = isFunction(locale) ? DEFAULT_LOCALE : locale;
  const fallbackLocale = isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || isString(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale;
  const messages = isPlainObject(options.messages) ? options.messages : createResources(_locale);
  const datetimeFormats = isPlainObject(options.datetimeFormats) ? options.datetimeFormats : createResources(_locale);
  const numberFormats = isPlainObject(options.numberFormats) ? options.numberFormats : createResources(_locale);
  const modifiers = assign(create(), options.modifiers, getDefaultLinkedModifiers());
  const pluralRules = options.pluralRules || create();
  const missing = isFunction(options.missing) ? options.missing : null;
  const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  const fallbackFormat = !!options.fallbackFormat;
  const unresolving = !!options.unresolving;
  const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
  const processor = isPlainObject(options.processor) ? options.processor : null;
  const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  const escapeParameter = !!options.escapeParameter;
  const messageCompiler = isFunction(options.messageCompiler) ? options.messageCompiler : _compiler;
  if (isFunction(options.messageCompiler)) {
    warnOnce(getWarnMessage$1(CoreWarnCodes.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  }
  const messageResolver = isFunction(options.messageResolver) ? options.messageResolver : _resolver || resolveWithKeyValue;
  const localeFallbacker = isFunction(options.localeFallbacker) ? options.localeFallbacker : _fallbacker || fallbackWithSimple;
  const fallbackContext = isObject(options.fallbackContext) ? options.fallbackContext : void 0;
  const internalOptions = options;
  const __datetimeFormatters = isObject(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
  const __numberFormatters = isObject(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
  const __meta = isObject(internalOptions.__meta) ? internalOptions.__meta : {};
  _cid++;
  const context = {
    version,
    cid: _cid,
    locale,
    fallbackLocale,
    messages,
    modifiers,
    pluralRules,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackFormat,
    unresolving,
    postTranslation,
    processor,
    warnHtmlMessage,
    escapeParameter,
    messageCompiler,
    messageResolver,
    localeFallbacker,
    fallbackContext,
    onWarn,
    __meta
  };
  {
    context.datetimeFormats = datetimeFormats;
    context.numberFormats = numberFormats;
    context.__datetimeFormatters = __datetimeFormatters;
    context.__numberFormatters = __numberFormatters;
  }
  {
    context.__v_emitter = internalOptions.__v_emitter != null ? internalOptions.__v_emitter : void 0;
  }
  {
    initI18nDevTools(context, version, __meta);
  }
  return context;
}
const createResources = (locale) => ({ [locale]: create() });
function isTranslateFallbackWarn(fallback, key) {
  return fallback instanceof RegExp ? fallback.test(key) : fallback;
}
function isTranslateMissingWarn(missing, key) {
  return missing instanceof RegExp ? missing.test(key) : missing;
}
function handleMissing(context, key, locale, missingWarn, type) {
  const { missing, onWarn } = context;
  {
    const emitter = context.__v_emitter;
    if (emitter) {
      emitter.emit("missing", {
        locale,
        key,
        type,
        groupId: `${type}:${key}`
      });
    }
  }
  if (missing !== null) {
    const ret = missing(context, locale, key, type);
    return isString(ret) ? ret : key;
  } else {
    if (isTranslateMissingWarn(missingWarn, key)) {
      onWarn(getWarnMessage$1(CoreWarnCodes.NOT_FOUND_KEY, { key, locale }));
    }
    return key;
  }
}
function updateFallbackLocale(ctx, locale, fallback) {
  const context = ctx;
  context.__localeChainCache = /* @__PURE__ */ new Map();
  ctx.localeFallbacker(ctx, fallback, locale);
}
function isAlmostSameLocale(locale, compareLocale) {
  if (locale === compareLocale)
    return false;
  return locale.split("-")[0] === compareLocale.split("-")[0];
}
function isImplicitFallback(targetLocale, locales2) {
  const index = locales2.indexOf(targetLocale);
  if (index === -1) {
    return false;
  }
  for (let i = index + 1; i < locales2.length; i++) {
    if (isAlmostSameLocale(targetLocale, locales2[i])) {
      return true;
    }
  }
  return false;
}
const intlDefined = typeof Intl !== "undefined";
const Availabilities = {
  dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== "undefined",
  numberFormat: intlDefined && typeof Intl.NumberFormat !== "undefined"
};
function datetime(context, ...args) {
  const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __datetimeFormatters } = context;
  if (!Availabilities.dateTimeFormat) {
    onWarn(getWarnMessage$1(CoreWarnCodes.CANNOT_FORMAT_DATE));
    return MISSING_RESOLVE_VALUE;
  }
  const [key, value, options, overrides] = parseDateTimeArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = getLocale(context, options);
  const locales2 = localeFallbacker(
    context,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    fallbackLocale,
    locale
  );
  if (!isString(key) || key === "") {
    return new Intl.DateTimeFormat(locale, overrides).format(value);
  }
  let datetimeFormat = {};
  let targetLocale;
  let format2 = null;
  let from = locale;
  let to = null;
  const type = "datetime format";
  for (let i = 0; i < locales2.length; i++) {
    targetLocale = to = locales2[i];
    if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
      onWarn(getWarnMessage$1(CoreWarnCodes.FALLBACK_TO_DATE_FORMAT, {
        key,
        target: targetLocale
      }));
    }
    if (locale !== targetLocale) {
      const emitter = context.__v_emitter;
      if (emitter) {
        emitter.emit("fallback", {
          type,
          key,
          from,
          to,
          groupId: `${type}:${key}`
        });
      }
    }
    datetimeFormat = datetimeFormats[targetLocale] || {};
    format2 = datetimeFormat[key];
    if (isPlainObject(format2))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
    from = to;
  }
  if (!isPlainObject(format2) || !isString(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __datetimeFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format2, overrides));
    __datetimeFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
const DATETIME_FORMAT_OPTIONS_KEYS = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function parseDateTimeArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  const options = create();
  let overrides = create();
  let value;
  if (isString(arg1)) {
    const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!matches) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
    const dateTime = matches[3] ? matches[3].trim().startsWith("T") ? `${matches[1].trim()}${matches[3].trim()}` : `${matches[1].trim()}T${matches[3].trim()}` : matches[1].trim();
    value = new Date(dateTime);
    try {
      value.toISOString();
    } catch {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (isDate(arg1)) {
    if (isNaN(arg1.getTime())) {
      throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
    }
    value = arg1;
  } else if (isNumber(arg1)) {
    value = arg1;
  } else {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  if (isString(arg2)) {
    options.key = arg2;
  } else if (isPlainObject(arg2)) {
    Object.keys(arg2).forEach((key) => {
      if (DATETIME_FORMAT_OPTIONS_KEYS.includes(key)) {
        overrides[key] = arg2[key];
      } else {
        options[key] = arg2[key];
      }
    });
  }
  if (isString(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearDateTimeFormat(ctx, locale, format2) {
  const context = ctx;
  for (const key in format2) {
    const id = `${locale}__${key}`;
    if (!context.__datetimeFormatters.has(id)) {
      continue;
    }
    context.__datetimeFormatters.delete(id);
  }
}
function number(context, ...args) {
  const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __numberFormatters } = context;
  if (!Availabilities.numberFormat) {
    onWarn(getWarnMessage$1(CoreWarnCodes.CANNOT_FORMAT_NUMBER));
    return MISSING_RESOLVE_VALUE;
  }
  const [key, value, options, overrides] = parseNumberArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = getLocale(context, options);
  const locales2 = localeFallbacker(
    context,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    fallbackLocale,
    locale
  );
  if (!isString(key) || key === "") {
    return new Intl.NumberFormat(locale, overrides).format(value);
  }
  let numberFormat = {};
  let targetLocale;
  let format2 = null;
  let from = locale;
  let to = null;
  const type = "number format";
  for (let i = 0; i < locales2.length; i++) {
    targetLocale = to = locales2[i];
    if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
      onWarn(getWarnMessage$1(CoreWarnCodes.FALLBACK_TO_NUMBER_FORMAT, {
        key,
        target: targetLocale
      }));
    }
    if (locale !== targetLocale) {
      const emitter = context.__v_emitter;
      if (emitter) {
        emitter.emit("fallback", {
          type,
          key,
          from,
          to,
          groupId: `${type}:${key}`
        });
      }
    }
    numberFormat = numberFormats[targetLocale] || {};
    format2 = numberFormat[key];
    if (isPlainObject(format2))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
    from = to;
  }
  if (!isPlainObject(format2) || !isString(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __numberFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.NumberFormat(targetLocale, assign({}, format2, overrides));
    __numberFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
const NUMBER_FORMAT_OPTIONS_KEYS = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function parseNumberArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  const options = create();
  let overrides = create();
  if (!isNumber(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const value = arg1;
  if (isString(arg2)) {
    options.key = arg2;
  } else if (isPlainObject(arg2)) {
    Object.keys(arg2).forEach((key) => {
      if (NUMBER_FORMAT_OPTIONS_KEYS.includes(key)) {
        overrides[key] = arg2[key];
      } else {
        options[key] = arg2[key];
      }
    });
  }
  if (isString(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearNumberFormat(ctx, locale, format2) {
  const context = ctx;
  for (const key in format2) {
    const id = `${locale}__${key}`;
    if (!context.__numberFormatters.has(id)) {
      continue;
    }
    context.__numberFormatters.delete(id);
  }
}
const DEFAULT_MODIFIER = (str) => str;
const DEFAULT_MESSAGE = (ctx) => "";
const DEFAULT_MESSAGE_DATA_TYPE = "text";
const DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : join(values);
const DEFAULT_INTERPOLATE = toDisplayString;
function pluralDefault(choice, choicesLength) {
  choice = Math.abs(choice);
  if (choicesLength === 2) {
    return choice ? choice > 1 ? 1 : 0 : 1;
  }
  return choice ? Math.min(choice, 2) : 0;
}
function getPluralIndex(options) {
  const index = isNumber(options.pluralIndex) ? options.pluralIndex : -1;
  return options.named && (isNumber(options.named.count) || isNumber(options.named.n)) ? isNumber(options.named.count) ? options.named.count : isNumber(options.named.n) ? options.named.n : index : index;
}
function normalizeNamed(pluralIndex, props) {
  if (!props.count) {
    props.count = pluralIndex;
  }
  if (!props.n) {
    props.n = pluralIndex;
  }
}
function createMessageContext(options = {}) {
  const locale = options.locale;
  const pluralIndex = getPluralIndex(options);
  const pluralRule = isObject(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
  const orgPluralRule = isObject(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? pluralDefault : void 0;
  const plural = (messages) => {
    return messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
  };
  const _list = options.list || [];
  const list = (index) => _list[index];
  const _named = options.named || create();
  isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
  const named = (key) => _named[key];
  function message(key, useLinked) {
    const msg = isFunction(options.messages) ? options.messages(key, !!useLinked) : isObject(options.messages) ? options.messages[key] : false;
    return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
  }
  const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
  const normalize = isPlainObject(options.processor) && isFunction(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
  const interpolate = isPlainObject(options.processor) && isFunction(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
  const type = isPlainObject(options.processor) && isString(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
  const linked = (key, ...args) => {
    const [arg1, arg2] = args;
    let type2 = "text";
    let modifier = "";
    if (args.length === 1) {
      if (isObject(arg1)) {
        modifier = arg1.modifier || modifier;
        type2 = arg1.type || type2;
      } else if (isString(arg1)) {
        modifier = arg1 || modifier;
      }
    } else if (args.length === 2) {
      if (isString(arg1)) {
        modifier = arg1 || modifier;
      }
      if (isString(arg2)) {
        type2 = arg2 || type2;
      }
    }
    const ret = message(key, true)(ctx);
    const msg = (
      // The message in vnode resolved with linked are returned as an array by processor.nomalize
      type2 === "vnode" && isArray(ret) && modifier ? ret[0] : ret
    );
    return modifier ? _modifier(modifier)(msg, type2) : msg;
  };
  const ctx = {
    [
      "list"
      /* HelperNameMap.LIST */
    ]: list,
    [
      "named"
      /* HelperNameMap.NAMED */
    ]: named,
    [
      "plural"
      /* HelperNameMap.PLURAL */
    ]: plural,
    [
      "linked"
      /* HelperNameMap.LINKED */
    ]: linked,
    [
      "message"
      /* HelperNameMap.MESSAGE */
    ]: message,
    [
      "type"
      /* HelperNameMap.TYPE */
    ]: type,
    [
      "interpolate"
      /* HelperNameMap.INTERPOLATE */
    ]: interpolate,
    [
      "normalize"
      /* HelperNameMap.NORMALIZE */
    ]: normalize,
    [
      "values"
      /* HelperNameMap.VALUES */
    ]: assign(create(), _list, _named)
  };
  return ctx;
}
const NOOP_MESSAGE_FUNCTION = () => "";
const isMessageFunction = (val) => isFunction(val);
function translate(context, ...args) {
  const { fallbackFormat, postTranslation, unresolving, messageCompiler, fallbackLocale, messages } = context;
  const [key, options] = parseTranslateArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
  const resolvedMessage = !!options.resolvedMessage;
  const defaultMsgOrKey = isString(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : !messageCompiler ? () => key : key : fallbackFormat ? !messageCompiler ? () => key : key : null;
  const enableDefaultMsg = fallbackFormat || defaultMsgOrKey != null && (isString(defaultMsgOrKey) || isFunction(defaultMsgOrKey));
  const locale = getLocale(context, options);
  escapeParameter && escapeParams(options);
  let [formatScope, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
    key,
    locale,
    messages[locale] || create()
  ];
  let format2 = formatScope;
  let cacheBaseKey = key;
  if (!resolvedMessage && !(isString(format2) || isMessageAST(format2) || isMessageFunction(format2))) {
    if (enableDefaultMsg) {
      format2 = defaultMsgOrKey;
      cacheBaseKey = format2;
    }
  }
  if (!resolvedMessage && (!(isString(format2) || isMessageAST(format2) || isMessageFunction(format2)) || !isString(targetLocale))) {
    return unresolving ? NOT_REOSLVED : key;
  }
  if (isString(format2) && context.messageCompiler == null) {
    warn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${key}'.`);
    return key;
  }
  let occurred = false;
  const onError = () => {
    occurred = true;
  };
  const msg = !isMessageFunction(format2) ? compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, onError) : format2;
  if (occurred) {
    return format2;
  }
  const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
  const msgContext = createMessageContext(ctxOptions);
  const messaged = evaluateMessage(context, msg, msgContext);
  let ret = postTranslation ? postTranslation(messaged, key) : messaged;
  if (escapeParameter && isString(ret)) {
    ret = sanitizeTranslatedHtml(ret);
  }
  {
    const payloads = {
      timestamp: Date.now(),
      key: isString(key) ? key : isMessageFunction(format2) ? format2.key : "",
      locale: targetLocale || (isMessageFunction(format2) ? format2.locale : ""),
      format: isString(format2) ? format2 : isMessageFunction(format2) ? format2.source : "",
      message: ret
    };
    payloads.meta = assign({}, context.__meta, /* @__PURE__ */ getAdditionalMeta() || {});
    translateDevTools(payloads);
  }
  return ret;
}
function escapeParams(options) {
  if (isArray(options.list)) {
    options.list = options.list.map((item) => isString(item) ? escapeHtml(item) : item);
  } else if (isObject(options.named)) {
    Object.keys(options.named).forEach((key) => {
      if (isString(options.named[key])) {
        options.named[key] = escapeHtml(options.named[key]);
      }
    });
  }
}
function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
  const { messages, onWarn, messageResolver: resolveValue2, localeFallbacker } = context;
  const locales2 = localeFallbacker(context, fallbackLocale, locale);
  let message = create();
  let targetLocale;
  let format2 = null;
  let from = locale;
  let to = null;
  const type = "translate";
  for (let i = 0; i < locales2.length; i++) {
    targetLocale = to = locales2[i];
    if (locale !== targetLocale && !isAlmostSameLocale(locale, targetLocale) && isTranslateFallbackWarn(fallbackWarn, key)) {
      onWarn(getWarnMessage$1(CoreWarnCodes.FALLBACK_TO_TRANSLATE, {
        key,
        target: targetLocale
      }));
    }
    if (locale !== targetLocale) {
      const emitter = context.__v_emitter;
      if (emitter) {
        emitter.emit("fallback", {
          type,
          key,
          from,
          to,
          groupId: `${type}:${key}`
        });
      }
    }
    message = messages[targetLocale] || create();
    if ((format2 = resolveValue2(message, key)) === null) {
      format2 = message[key];
    }
    if (isString(format2) || isMessageAST(format2) || isMessageFunction(format2)) {
      break;
    }
    if (!isImplicitFallback(targetLocale, locales2)) {
      const missingRet = handleMissing(
        context,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        key,
        targetLocale,
        missingWarn,
        type
      );
      if (missingRet !== key) {
        format2 = missingRet;
      }
    }
    from = to;
  }
  return [format2, targetLocale, message];
}
function compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, onError) {
  const { messageCompiler, warnHtmlMessage } = context;
  if (isMessageFunction(format2)) {
    const msg2 = format2;
    msg2.locale = msg2.locale || targetLocale;
    msg2.key = msg2.key || key;
    return msg2;
  }
  if (messageCompiler == null) {
    const msg2 = (() => format2);
    msg2.locale = targetLocale;
    msg2.key = key;
    return msg2;
  }
  const msg = messageCompiler(format2, getCompileContext(context, targetLocale, cacheBaseKey, format2, warnHtmlMessage, onError));
  msg.locale = targetLocale;
  msg.key = key;
  msg.source = format2;
  return msg;
}
function evaluateMessage(context, msg, msgCtx) {
  const messaged = msg(msgCtx);
  return messaged;
}
function parseTranslateArgs(...args) {
  const [arg1, arg2, arg3] = args;
  const options = create();
  if (!isString(arg1) && !isNumber(arg1) && !isMessageFunction(arg1) && !isMessageAST(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const key = isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
  if (isNumber(arg2)) {
    options.plural = arg2;
  } else if (isString(arg2)) {
    options.default = arg2;
  } else if (isPlainObject(arg2) && !isEmptyObject(arg2)) {
    options.named = arg2;
  } else if (isArray(arg2)) {
    options.list = arg2;
  }
  if (isNumber(arg3)) {
    options.plural = arg3;
  } else if (isString(arg3)) {
    options.default = arg3;
  } else if (isPlainObject(arg3)) {
    assign(options, arg3);
  }
  return [key, options];
}
function getCompileContext(context, locale, key, source, warnHtmlMessage, onError) {
  return {
    locale,
    key,
    warnHtmlMessage,
    onError: (err) => {
      onError && onError(err);
      {
        const _source = getSourceForCodeFrame(source);
        const message = `Message compilation error: ${err.message}`;
        const codeFrame = err.location && _source && generateCodeFrame(_source, err.location.start.offset, err.location.end.offset);
        const emitter = context.__v_emitter;
        if (emitter && _source) {
          emitter.emit("compile-error", {
            message: _source,
            error: err.message,
            start: err.location && err.location.start.offset,
            end: err.location && err.location.end.offset,
            groupId: `${"translate"}:${key}`
          });
        }
        console.error(codeFrame ? `${message}
${codeFrame}` : message);
      }
    },
    onCacheKey: (source2) => generateFormatCacheKey(locale, key, source2)
  };
}
function getSourceForCodeFrame(source) {
  if (isString(source)) {
    return source;
  } else {
    if (source.loc && source.loc.source) {
      return source.loc.source;
    }
  }
}
function getMessageContextOptions(context, locale, message, options) {
  const { modifiers, pluralRules, messageResolver: resolveValue2, fallbackLocale, fallbackWarn, missingWarn, fallbackContext } = context;
  const resolveMessage = (key, useLinked) => {
    let val = resolveValue2(message, key);
    if (val == null && (fallbackContext || useLinked)) {
      const [, , message2] = resolveMessageFormat(
        fallbackContext || context,
        // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
        key,
        locale,
        fallbackLocale,
        fallbackWarn,
        missingWarn
      );
      val = resolveValue2(message2, key);
    }
    if (isString(val) || isMessageAST(val)) {
      let occurred = false;
      const onError = () => {
        occurred = true;
      };
      const msg = compileMessageFormat(context, key, locale, val, key, onError);
      return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
    } else if (isMessageFunction(val)) {
      return val;
    } else {
      return NOOP_MESSAGE_FUNCTION;
    }
  };
  const ctxOptions = {
    locale,
    modifiers,
    pluralRules,
    messages: resolveMessage
  };
  if (context.processor) {
    ctxOptions.processor = context.processor;
  }
  if (options.list) {
    ctxOptions.list = options.list;
  }
  if (options.named) {
    ctxOptions.named = options.named;
  }
  if (isNumber(options.plural)) {
    ctxOptions.pluralIndex = options.plural;
  }
  return ctxOptions;
}
const VERSION = "10.0.8";
const I18nWarnCodes = {
  FALLBACK_TO_ROOT: CORE_WARN_CODES_EXTEND_POINT,
  // 8
  NOT_FOUND_PARENT_SCOPE: 9,
  IGNORE_OBJ_FLATTEN: 10,
  DEPRECATE_TC: 11
};
const warnMessages = {
  [I18nWarnCodes.FALLBACK_TO_ROOT]: `Fall back to {type} '{key}' with root locale.`,
  [I18nWarnCodes.NOT_FOUND_PARENT_SCOPE]: `Not found parent scope. use the global scope.`,
  [I18nWarnCodes.IGNORE_OBJ_FLATTEN]: `Ignore object flatten: '{key}' key has an string value`,
  [I18nWarnCodes.DEPRECATE_TC]: `'tc' and '$tc' has been deprecated in v10. Use 't' or '$t' instead. 'tc' and '$tc’ are going to remove in v11.`
};
function getWarnMessage(code, ...args) {
  return format$1(warnMessages[code], ...args);
}
const I18nErrorCodes = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: CORE_ERROR_CODES_EXTEND_POINT,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: 25,
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  // directive module errors
  REQUIRED_VALUE: 28,
  INVALID_VALUE: 29,
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: 30,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  // unexpected error
  UNEXPECTED_ERROR: 32,
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: 33,
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34
};
function createI18nError(code, ...args) {
  return createCompileError(code, null, { messages: errorMessages, args } );
}
const errorMessages = {
  [I18nErrorCodes.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [I18nErrorCodes.INVALID_ARGUMENT]: "Invalid argument",
  [I18nErrorCodes.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [I18nErrorCodes.NOT_INSTALLED]: "Need to install with `app.use` function",
  [I18nErrorCodes.UNEXPECTED_ERROR]: "Unexpected error",
  [I18nErrorCodes.REQUIRED_VALUE]: `Required in value: {0}`,
  [I18nErrorCodes.INVALID_VALUE]: `Invalid value`,
  [I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: `Cannot setup vue-devtools plugin`,
  [I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [I18nErrorCodes.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [I18nErrorCodes.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
};
const TranslateVNodeSymbol = /* @__PURE__ */ makeSymbol("__translateVNode");
const DatetimePartsSymbol = /* @__PURE__ */ makeSymbol("__datetimeParts");
const NumberPartsSymbol = /* @__PURE__ */ makeSymbol("__numberParts");
const EnableEmitter = /* @__PURE__ */ makeSymbol("__enableEmitter");
const DisableEmitter = /* @__PURE__ */ makeSymbol("__disableEmitter");
const SetPluralRulesSymbol = makeSymbol("__setPluralRules");
const InejctWithOptionSymbol = /* @__PURE__ */ makeSymbol("__injectWithOption");
const DisposeSymbol = /* @__PURE__ */ makeSymbol("__dispose");
function handleFlatJson(obj) {
  if (!isObject(obj)) {
    return obj;
  }
  if (isMessageAST(obj)) {
    return obj;
  }
  for (const key in obj) {
    if (!hasOwn(obj, key)) {
      continue;
    }
    if (!key.includes(".")) {
      if (isObject(obj[key])) {
        handleFlatJson(obj[key]);
      }
    } else {
      const subKeys = key.split(".");
      const lastIndex = subKeys.length - 1;
      let currentObj = obj;
      let hasStringValue = false;
      for (let i = 0; i < lastIndex; i++) {
        if (subKeys[i] === "__proto__") {
          throw new Error(`unsafe key: ${subKeys[i]}`);
        }
        if (!(subKeys[i] in currentObj)) {
          currentObj[subKeys[i]] = create();
        }
        if (!isObject(currentObj[subKeys[i]])) {
          warn(getWarnMessage(I18nWarnCodes.IGNORE_OBJ_FLATTEN, {
            key: subKeys[i]
          }));
          hasStringValue = true;
          break;
        }
        currentObj = currentObj[subKeys[i]];
      }
      if (!hasStringValue) {
        if (!isMessageAST(currentObj)) {
          currentObj[subKeys[lastIndex]] = obj[key];
          delete obj[key];
        } else {
          if (!AST_NODE_PROPS_KEYS.includes(subKeys[lastIndex])) {
            delete obj[key];
          }
        }
      }
      if (!isMessageAST(currentObj)) {
        const target = currentObj[subKeys[lastIndex]];
        if (isObject(target)) {
          handleFlatJson(target);
        }
      }
    }
  }
  return obj;
}
function getLocaleMessages(locale, options) {
  const { messages, __i18n, messageResolver, flatJson } = options;
  const ret = isPlainObject(messages) ? messages : isArray(__i18n) ? create() : { [locale]: create() };
  if (isArray(__i18n)) {
    __i18n.forEach((custom) => {
      if ("locale" in custom && "resource" in custom) {
        const { locale: locale2, resource } = custom;
        if (locale2) {
          ret[locale2] = ret[locale2] || create();
          deepCopy(resource, ret[locale2]);
        } else {
          deepCopy(resource, ret);
        }
      } else {
        isString(custom) && deepCopy(JSON.parse(custom), ret);
      }
    });
  }
  if (messageResolver == null && flatJson) {
    for (const key in ret) {
      if (hasOwn(ret, key)) {
        handleFlatJson(ret[key]);
      }
    }
  }
  return ret;
}
function getComponentOptions(instance) {
  return instance.type;
}
function adjustI18nResources(gl, options, componentOptions) {
  let messages = isObject(options.messages) ? options.messages : create();
  if ("__i18nGlobal" in componentOptions) {
    messages = getLocaleMessages(gl.locale.value, {
      messages,
      __i18n: componentOptions.__i18nGlobal
    });
  }
  const locales2 = Object.keys(messages);
  if (locales2.length) {
    locales2.forEach((locale) => {
      gl.mergeLocaleMessage(locale, messages[locale]);
    });
  }
  {
    if (isObject(options.datetimeFormats)) {
      const locales22 = Object.keys(options.datetimeFormats);
      if (locales22.length) {
        locales22.forEach((locale) => {
          gl.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
        });
      }
    }
    if (isObject(options.numberFormats)) {
      const locales22 = Object.keys(options.numberFormats);
      if (locales22.length) {
        locales22.forEach((locale) => {
          gl.mergeNumberFormat(locale, options.numberFormats[locale]);
        });
      }
    }
  }
}
function createTextNode(key) {
  return createVNode(Text, null, key, 0);
}
const DEVTOOLS_META = "__INTLIFY_META__";
const NOOP_RETURN_ARRAY = () => [];
const NOOP_RETURN_FALSE = () => false;
let composerID = 0;
function defineCoreMissingHandler(missing) {
  return ((ctx, locale, key, type) => {
    return missing(locale, key, getCurrentInstance() || void 0, type);
  });
}
const getMetaInfo = /* @__NO_SIDE_EFFECTS__ */ () => {
  const instance = getCurrentInstance();
  let meta = null;
  return instance && (meta = getComponentOptions(instance)[DEVTOOLS_META]) ? { [DEVTOOLS_META]: meta } : null;
};
function createComposer(options = {}) {
  const { __root, __injectWithOption } = options;
  const _isGlobal = __root === void 0;
  const flatJson = options.flatJson;
  const _ref = shallowRef;
  let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = _ref(
    // prettier-ignore
    __root && _inheritLocale ? __root.locale.value : isString(options.locale) ? options.locale : DEFAULT_LOCALE
  );
  const _fallbackLocale = _ref(
    // prettier-ignore
    __root && _inheritLocale ? __root.fallbackLocale.value : isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value
  );
  const _messages = _ref(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = _ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = _ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  let _fallbackFormat = !!options.fallbackFormat;
  let _missing = isFunction(options.missing) ? options.missing : null;
  let _runtimeMissing = isFunction(options.missing) ? defineCoreMissingHandler(options.missing) : null;
  let _postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
  let _warnHtmlMessage = __root ? __root.warnHtmlMessage : isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  let _escapeParameter = !!options.escapeParameter;
  const _modifiers = __root ? __root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
  let _pluralRules = options.pluralRules || __root && __root.pluralRules;
  let _context;
  const getCoreContext = () => {
    _isGlobal && setFallbackContext(null);
    const ctxOptions = {
      version: VERSION,
      locale: _locale.value,
      fallbackLocale: _fallbackLocale.value,
      messages: _messages.value,
      modifiers: _modifiers,
      pluralRules: _pluralRules,
      missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
      missingWarn: _missingWarn,
      fallbackWarn: _fallbackWarn,
      fallbackFormat: _fallbackFormat,
      unresolving: true,
      postTranslation: _postTranslation === null ? void 0 : _postTranslation,
      warnHtmlMessage: _warnHtmlMessage,
      escapeParameter: _escapeParameter,
      messageResolver: options.messageResolver,
      messageCompiler: options.messageCompiler,
      __meta: { framework: "vue" }
    };
    {
      ctxOptions.datetimeFormats = _datetimeFormats.value;
      ctxOptions.numberFormats = _numberFormats.value;
      ctxOptions.__datetimeFormatters = isPlainObject(_context) ? _context.__datetimeFormatters : void 0;
      ctxOptions.__numberFormatters = isPlainObject(_context) ? _context.__numberFormatters : void 0;
    }
    {
      ctxOptions.__v_emitter = isPlainObject(_context) ? _context.__v_emitter : void 0;
    }
    const ctx = createCoreContext(ctxOptions);
    _isGlobal && setFallbackContext(ctx);
    return ctx;
  };
  _context = getCoreContext();
  updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value
    ];
  }
  const locale = computed({
    get: () => _locale.value,
    set: (val) => {
      _locale.value = val;
      _context.locale = _locale.value;
    }
  });
  const fallbackLocale = computed({
    get: () => _fallbackLocale.value,
    set: (val) => {
      _fallbackLocale.value = val;
      _context.fallbackLocale = _fallbackLocale.value;
      updateFallbackLocale(_context, _locale.value, val);
    }
  });
  const messages = computed(() => _messages.value);
  const datetimeFormats = /* @__PURE__ */ computed(() => _datetimeFormats.value);
  const numberFormats = /* @__PURE__ */ computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return isFunction(_postTranslation) ? _postTranslation : null;
  }
  function setPostTranslationHandler(handler) {
    _postTranslation = handler;
    _context.postTranslation = handler;
  }
  function getMissingHandler() {
    return _missing;
  }
  function setMissingHandler(handler) {
    if (handler !== null) {
      _runtimeMissing = defineCoreMissingHandler(handler);
    }
    _missing = handler;
    _context.missing = _runtimeMissing;
  }
  function isResolvedTranslateMessage(type, arg) {
    return type !== "translate" || !arg.resolvedMessage;
  }
  const wrapWithDeps = (fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) => {
    trackReactivityValues();
    let ret;
    try {
      if ("prerender" !== "production" || false) {
        /* @__PURE__ */ setAdditionalMeta(/* @__PURE__ */ getMetaInfo());
      }
      if (!_isGlobal) {
        _context.fallbackContext = __root ? getFallbackContext() : void 0;
      }
      ret = fn(_context);
    } finally {
      if (!_isGlobal) {
        _context.fallbackContext = void 0;
      }
    }
    if (warnType !== "translate exists" && // for not `te` (e.g `t`)
    isNumber(ret) && ret === NOT_REOSLVED || warnType === "translate exists" && !ret) {
      const [key, arg2] = argumentParser();
      if (__root && isString(key) && isResolvedTranslateMessage(warnType, arg2)) {
        if (_fallbackRoot && (isTranslateFallbackWarn(_fallbackWarn, key) || isTranslateMissingWarn(_missingWarn, key))) {
          warn(getWarnMessage(I18nWarnCodes.FALLBACK_TO_ROOT, {
            key,
            type: warnType
          }));
        }
        {
          const { __v_emitter: emitter } = _context;
          if (emitter && _fallbackRoot) {
            emitter.emit("fallback", {
              type: warnType,
              key,
              to: "global",
              groupId: `${warnType}:${key}`
            });
          }
        }
      }
      return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
    } else if (successCondition(ret)) {
      return ret;
    } else {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
    }
  };
  function t2(...args) {
    return wrapWithDeps((context) => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), "translate", (root) => Reflect.apply(root.t, root, [...args]), (key) => key, (val) => isString(val));
  }
  function rt(...args) {
    const [arg1, arg2, arg3] = args;
    if (arg3 && !isObject(arg3)) {
      throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
    }
    return t2(...[arg1, arg2, assign({ resolvedMessage: true }, arg3 || {})]);
  }
  function d(...args) {
    return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root) => Reflect.apply(root.d, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
  }
  function n(...args) {
    return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root) => Reflect.apply(root.n, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
  }
  function normalize(values) {
    return values.map((val) => isString(val) || isNumber(val) || isBoolean(val) ? createTextNode(String(val)) : val);
  }
  const interpolate = (val) => val;
  const processor = {
    normalize,
    interpolate,
    type: "vnode"
  };
  function translateVNode(...args) {
    return wrapWithDeps((context) => {
      let ret;
      const _context2 = context;
      try {
        _context2.processor = processor;
        ret = Reflect.apply(translate, null, [_context2, ...args]);
      } finally {
        _context2.processor = null;
      }
      return ret;
    }, () => parseTranslateArgs(...args), "translate", (root) => root[TranslateVNodeSymbol](...args), (key) => [createTextNode(key)], (val) => isArray(val));
  }
  function numberParts(...args) {
    return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root) => root[NumberPartsSymbol](...args), NOOP_RETURN_ARRAY, (val) => isString(val) || isArray(val));
  }
  function datetimeParts(...args) {
    return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root) => root[DatetimePartsSymbol](...args), NOOP_RETURN_ARRAY, (val) => isString(val) || isArray(val));
  }
  function setPluralRules(rules) {
    _pluralRules = rules;
    _context.pluralRules = _pluralRules;
  }
  function te(key, locale2) {
    return wrapWithDeps(() => {
      if (!key) {
        return false;
      }
      const targetLocale = isString(locale2) ? locale2 : _locale.value;
      const message = getLocaleMessage(targetLocale);
      const resolved = _context.messageResolver(message, key);
      return isMessageAST(resolved) || isMessageFunction(resolved) || isString(resolved);
    }, () => [key], "translate exists", (root) => {
      return Reflect.apply(root.te, root, [key, locale2]);
    }, NOOP_RETURN_FALSE, (val) => isBoolean(val));
  }
  function resolveMessages(key) {
    let messages2 = null;
    const locales2 = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
    for (let i = 0; i < locales2.length; i++) {
      const targetLocaleMessages = _messages.value[locales2[i]] || {};
      const messageValue = _context.messageResolver(targetLocaleMessages, key);
      if (messageValue != null) {
        messages2 = messageValue;
        break;
      }
    }
    return messages2;
  }
  function tm(key) {
    const messages2 = resolveMessages(key);
    return messages2 != null ? messages2 : __root ? __root.tm(key) || {} : {};
  }
  function getLocaleMessage(locale2) {
    return _messages.value[locale2] || {};
  }
  function setLocaleMessage(locale2, message) {
    if (flatJson) {
      const _message = { [locale2]: message };
      for (const key in _message) {
        if (hasOwn(_message, key)) {
          handleFlatJson(_message[key]);
        }
      }
      message = _message[locale2];
    }
    _messages.value[locale2] = message;
    _context.messages = _messages.value;
  }
  function mergeLocaleMessage(locale2, message) {
    _messages.value[locale2] = _messages.value[locale2] || {};
    const _message = { [locale2]: message };
    if (flatJson) {
      for (const key in _message) {
        if (hasOwn(_message, key)) {
          handleFlatJson(_message[key]);
        }
      }
    }
    message = _message[locale2];
    deepCopy(message, _messages.value[locale2]);
    _context.messages = _messages.value;
  }
  function getDateTimeFormat(locale2) {
    return _datetimeFormats.value[locale2] || {};
  }
  function setDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = format2;
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format2);
  }
  function mergeDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = assign(_datetimeFormats.value[locale2] || {}, format2);
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format2);
  }
  function getNumberFormat(locale2) {
    return _numberFormats.value[locale2] || {};
  }
  function setNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = format2;
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format2);
  }
  function mergeNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = assign(_numberFormats.value[locale2] || {}, format2);
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format2);
  }
  composerID++;
  const composer = {
    id: composerID,
    locale,
    fallbackLocale,
    get inheritLocale() {
      return _inheritLocale;
    },
    set inheritLocale(val) {
      _inheritLocale = val;
      if (val && __root) {
        _locale.value = __root.locale.value;
        _fallbackLocale.value = __root.fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    },
    get availableLocales() {
      return Object.keys(_messages.value).sort();
    },
    messages,
    get modifiers() {
      return _modifiers;
    },
    get pluralRules() {
      return _pluralRules || {};
    },
    get isGlobal() {
      return _isGlobal;
    },
    get missingWarn() {
      return _missingWarn;
    },
    set missingWarn(val) {
      _missingWarn = val;
      _context.missingWarn = _missingWarn;
    },
    get fallbackWarn() {
      return _fallbackWarn;
    },
    set fallbackWarn(val) {
      _fallbackWarn = val;
      _context.fallbackWarn = _fallbackWarn;
    },
    get fallbackRoot() {
      return _fallbackRoot;
    },
    set fallbackRoot(val) {
      _fallbackRoot = val;
    },
    get fallbackFormat() {
      return _fallbackFormat;
    },
    set fallbackFormat(val) {
      _fallbackFormat = val;
      _context.fallbackFormat = _fallbackFormat;
    },
    get warnHtmlMessage() {
      return _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      _warnHtmlMessage = val;
      _context.warnHtmlMessage = val;
    },
    get escapeParameter() {
      return _escapeParameter;
    },
    set escapeParameter(val) {
      _escapeParameter = val;
      _context.escapeParameter = val;
    },
    t: t2,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    [SetPluralRulesSymbol]: setPluralRules
  };
  {
    composer.datetimeFormats = datetimeFormats;
    composer.numberFormats = numberFormats;
    composer.rt = rt;
    composer.te = te;
    composer.tm = tm;
    composer.d = d;
    composer.n = n;
    composer.getDateTimeFormat = getDateTimeFormat;
    composer.setDateTimeFormat = setDateTimeFormat;
    composer.mergeDateTimeFormat = mergeDateTimeFormat;
    composer.getNumberFormat = getNumberFormat;
    composer.setNumberFormat = setNumberFormat;
    composer.mergeNumberFormat = mergeNumberFormat;
    composer[InejctWithOptionSymbol] = __injectWithOption;
    composer[TranslateVNodeSymbol] = translateVNode;
    composer[DatetimePartsSymbol] = datetimeParts;
    composer[NumberPartsSymbol] = numberParts;
  }
  {
    composer[EnableEmitter] = (emitter) => {
      _context.__v_emitter = emitter;
    };
    composer[DisableEmitter] = () => {
      _context.__v_emitter = void 0;
    };
  }
  return composer;
}
const VUE_I18N_COMPONENT_TYPES = "vue-i18n: composer properties";
const VueDevToolsLabels = {
  "vue-devtools-plugin-vue-i18n": "Vue I18n DevTools",
  "vue-i18n-resource-inspector": "Vue I18n DevTools",
  "vue-i18n-timeline": "Vue I18n"
};
const VueDevToolsPlaceholders = {
  "vue-i18n-resource-inspector": "Search for scopes ..."
};
const VueDevToolsTimelineColors = {
  "vue-i18n-timeline": 16764185
};
let devtoolsApi;
async function enableDevTools(app, i18n) {
  return new Promise((resolve2, reject) => {
    try {
      setupDevtoolsPlugin({
        id: "vue-devtools-plugin-vue-i18n",
        label: VueDevToolsLabels["vue-devtools-plugin-vue-i18n"],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [VUE_I18N_COMPONENT_TYPES],
        app
        // eslint-disable-line @typescript-eslint/no-explicit-any
      }, (api) => {
        devtoolsApi = api;
        api.on.visitComponentTree(({ componentInstance, treeNode }) => {
          updateComponentTreeTags(componentInstance, treeNode, i18n);
        });
        api.on.inspectComponent(({ componentInstance, instanceData }) => {
          if (componentInstance.vnode.el && componentInstance.vnode.el.__VUE_I18N__ && instanceData) {
            if (i18n.mode === "legacy") {
              if (componentInstance.vnode.el.__VUE_I18N__ !== i18n.global.__composer) {
                inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
              }
            } else {
              inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
            }
          }
        });
        api.addInspector({
          id: "vue-i18n-resource-inspector",
          label: VueDevToolsLabels["vue-i18n-resource-inspector"],
          icon: "language",
          treeFilterPlaceholder: VueDevToolsPlaceholders["vue-i18n-resource-inspector"]
        });
        api.on.getInspectorTree((payload) => {
          if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
            registerScope(payload, i18n);
          }
        });
        const roots = /* @__PURE__ */ new Map();
        api.on.getInspectorState(async (payload) => {
          if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
            api.unhighlightElement();
            inspectScope(payload, i18n);
            if (payload.nodeId === "global") {
              if (!roots.has(payload.app)) {
                const [root] = await api.getComponentInstances(payload.app);
                roots.set(payload.app, root);
              }
              api.highlightElement(roots.get(payload.app));
            } else {
              const instance = getComponentInstance(payload.nodeId, i18n);
              instance && api.highlightElement(instance);
            }
          }
        });
        api.on.editInspectorState((payload) => {
          if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
            editScope(payload, i18n);
          }
        });
        api.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: VueDevToolsLabels["vue-i18n-timeline"],
          color: VueDevToolsTimelineColors["vue-i18n-timeline"]
        });
        resolve2(true);
      });
    } catch (e) {
      console.error(e);
      reject(false);
    }
  });
}
function getI18nScopeLable(instance) {
  return instance.type.name || instance.type.displayName || instance.type.__file || "Anonymous";
}
function updateComponentTreeTags(instance, treeNode, i18n) {
  const global2 = i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
  if (instance && instance.vnode.el && instance.vnode.el.__VUE_I18N__) {
    if (instance.vnode.el.__VUE_I18N__ !== global2) {
      const tag = {
        label: `i18n (${getI18nScopeLable(instance)} Scope)`,
        textColor: 0,
        backgroundColor: 16764185
      };
      treeNode.tags.push(tag);
    }
  }
}
function inspectComposer(instanceData, composer) {
  const type = VUE_I18N_COMPONENT_TYPES;
  instanceData.state.push({
    type,
    key: "locale",
    editable: true,
    value: composer.locale.value
  });
  instanceData.state.push({
    type,
    key: "availableLocales",
    editable: false,
    value: composer.availableLocales
  });
  instanceData.state.push({
    type,
    key: "fallbackLocale",
    editable: true,
    value: composer.fallbackLocale.value
  });
  instanceData.state.push({
    type,
    key: "inheritLocale",
    editable: true,
    value: composer.inheritLocale
  });
  instanceData.state.push({
    type,
    key: "messages",
    editable: false,
    value: getLocaleMessageValue(composer.messages.value)
  });
  {
    instanceData.state.push({
      type,
      key: "datetimeFormats",
      editable: false,
      value: composer.datetimeFormats.value
    });
    instanceData.state.push({
      type,
      key: "numberFormats",
      editable: false,
      value: composer.numberFormats.value
    });
  }
}
function getLocaleMessageValue(messages) {
  const value = {};
  Object.keys(messages).forEach((key) => {
    const v = messages[key];
    if (isFunction(v) && "source" in v) {
      value[key] = getMessageFunctionDetails(v);
    } else if (isMessageAST(v) && v.loc && v.loc.source) {
      value[key] = v.loc.source;
    } else if (isObject(v)) {
      value[key] = getLocaleMessageValue(v);
    } else {
      value[key] = v;
    }
  });
  return value;
}
const ESC = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function escape(s) {
  return s.replace(/[<>"&]/g, escapeChar);
}
function escapeChar(a) {
  return ESC[a] || a;
}
function getMessageFunctionDetails(func) {
  const argString = func.source ? `("${escape(func.source)}")` : `(?)`;
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${argString}`
    }
  };
}
function registerScope(payload, i18n) {
  payload.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const global2 = i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
  for (const [keyInstance, instance] of i18n.__instances) {
    const composer = i18n.mode === "composition" ? instance : instance.__composer;
    if (global2 === composer) {
      continue;
    }
    payload.rootNodes.push({
      id: composer.id.toString(),
      label: `${getI18nScopeLable(keyInstance)} Scope`
    });
  }
}
function getComponentInstance(nodeId, i18n) {
  let instance = null;
  if (nodeId !== "global") {
    for (const [component, composer] of i18n.__instances.entries()) {
      if (composer.id.toString() === nodeId) {
        instance = component;
        break;
      }
    }
  }
  return instance;
}
function getComposer$2(nodeId, i18n) {
  if (nodeId === "global") {
    return i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
  } else {
    const instance = Array.from(i18n.__instances.values()).find((item) => item.id.toString() === nodeId);
    if (instance) {
      return i18n.mode === "composition" ? instance : instance.__composer;
    } else {
      return null;
    }
  }
}
function inspectScope(payload, i18n) {
  const composer = getComposer$2(payload.nodeId, i18n);
  if (composer) {
    payload.state = makeScopeInspectState(composer);
  }
  return null;
}
function makeScopeInspectState(composer) {
  const state = {};
  const localeType = "Locale related info";
  const localeStates = [
    {
      type: localeType,
      key: "locale",
      editable: true,
      value: composer.locale.value
    },
    {
      type: localeType,
      key: "fallbackLocale",
      editable: true,
      value: composer.fallbackLocale.value
    },
    {
      type: localeType,
      key: "availableLocales",
      editable: false,
      value: composer.availableLocales
    },
    {
      type: localeType,
      key: "inheritLocale",
      editable: true,
      value: composer.inheritLocale
    }
  ];
  state[localeType] = localeStates;
  const localeMessagesType = "Locale messages info";
  const localeMessagesStates = [
    {
      type: localeMessagesType,
      key: "messages",
      editable: false,
      value: getLocaleMessageValue(composer.messages.value)
    }
  ];
  state[localeMessagesType] = localeMessagesStates;
  {
    const datetimeFormatsType = "Datetime formats info";
    const datetimeFormatsStates = [
      {
        type: datetimeFormatsType,
        key: "datetimeFormats",
        editable: false,
        value: composer.datetimeFormats.value
      }
    ];
    state[datetimeFormatsType] = datetimeFormatsStates;
    const numberFormatsType = "Datetime formats info";
    const numberFormatsStates = [
      {
        type: numberFormatsType,
        key: "numberFormats",
        editable: false,
        value: composer.numberFormats.value
      }
    ];
    state[numberFormatsType] = numberFormatsStates;
  }
  return state;
}
function addTimelineEvent(event, payload) {
  if (devtoolsApi) {
    let groupId;
    if (payload && "groupId" in payload) {
      groupId = payload.groupId;
      delete payload.groupId;
    }
    devtoolsApi.addTimelineEvent({
      layerId: "vue-i18n-timeline",
      event: {
        title: event,
        groupId,
        time: Date.now(),
        meta: {},
        data: payload || {},
        logType: event === "compile-error" ? "error" : event === "fallback" || event === "missing" ? "warning" : "default"
      }
    });
  }
}
function editScope(payload, i18n) {
  const composer = getComposer$2(payload.nodeId, i18n);
  if (composer) {
    const [field] = payload.path;
    if (field === "locale" && isString(payload.state.value)) {
      composer.locale.value = payload.state.value;
    } else if (field === "fallbackLocale" && (isString(payload.state.value) || isArray(payload.state.value) || isObject(payload.state.value))) {
      composer.fallbackLocale.value = payload.state.value;
    } else if (field === "inheritLocale" && isBoolean(payload.state.value)) {
      composer.inheritLocale = payload.state.value;
    }
  }
}
const baseFormatProps = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (val) => val === "parent" || val === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function getInterpolateArg({ slots }, keys) {
  if (keys.length === 1 && keys[0] === "default") {
    const ret = slots.default ? slots.default() : [];
    return ret.reduce((slot, current) => {
      return [
        ...slot,
        // prettier-ignore
        ...current.type === Fragment ? current.children : [current]
      ];
    }, []);
  } else {
    return keys.reduce((arg, key) => {
      const slot = slots[key];
      if (slot) {
        arg[key] = slot();
      }
      return arg;
    }, create());
  }
}
function getFragmentableTag() {
  return Fragment;
}
const TranslationImpl = /* @__PURE__ */ defineComponent({
  /* eslint-disable */
  name: "i18n-t",
  props: assign({
    keypath: {
      type: String,
      required: true
    },
    plural: {
      type: [Number, String],
      validator: (val) => isNumber(val) || !isNaN(val)
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const { slots, attrs } = context;
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return () => {
      const keys = Object.keys(slots).filter((key) => key !== "_");
      const options = create();
      if (props.locale) {
        options.locale = props.locale;
      }
      if (props.plural !== void 0) {
        options.plural = isString(props.plural) ? +props.plural : props.plural;
      }
      const arg = getInterpolateArg(context, keys);
      const children = i18n[TranslateVNodeSymbol](props.keypath, arg, options);
      const assignedAttrs = assign(create(), attrs);
      const tag = isString(props.tag) || isObject(props.tag) ? props.tag : getFragmentableTag();
      return h(tag, assignedAttrs, children);
    };
  }
});
const Translation = TranslationImpl;
function isVNode(target) {
  return isArray(target) && !isString(target[0]);
}
function renderFormatter(props, context, slotKeys, partFormatter) {
  const { slots, attrs } = context;
  return () => {
    const options = { part: true };
    let overrides = create();
    if (props.locale) {
      options.locale = props.locale;
    }
    if (isString(props.format)) {
      options.key = props.format;
    } else if (isObject(props.format)) {
      if (isString(props.format.key)) {
        options.key = props.format.key;
      }
      overrides = Object.keys(props.format).reduce((options2, prop) => {
        return slotKeys.includes(prop) ? assign(create(), options2, { [prop]: props.format[prop] }) : options2;
      }, create());
    }
    const parts = partFormatter(...[props.value, options, overrides]);
    let children = [options.key];
    if (isArray(parts)) {
      children = parts.map((part, index) => {
        const slot = slots[part.type];
        const node = slot ? slot({ [part.type]: part.value, index, parts }) : [part.value];
        if (isVNode(node)) {
          node[0].key = `${part.type}-${index}`;
        }
        return node;
      });
    } else if (isString(parts)) {
      children = [parts];
    }
    const assignedAttrs = assign(create(), attrs);
    const tag = isString(props.tag) || isObject(props.tag) ? props.tag : getFragmentableTag();
    return h(tag, assignedAttrs, children);
  };
}
const NumberFormatImpl = /* @__PURE__ */ defineComponent({
  /* eslint-disable */
  name: "i18n-n",
  props: assign({
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return renderFormatter(props, context, NUMBER_FORMAT_OPTIONS_KEYS, (...args) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      i18n[NumberPartsSymbol](...args)
    ));
  }
});
const NumberFormat = NumberFormatImpl;
const DatetimeFormatImpl = /* @__PURE__ */ defineComponent({
  /* eslint-disable */
  name: "i18n-d",
  props: assign({
    value: {
      type: [Number, Date],
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return renderFormatter(props, context, DATETIME_FORMAT_OPTIONS_KEYS, (...args) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      i18n[DatetimePartsSymbol](...args)
    ));
  }
});
const DatetimeFormat = DatetimeFormatImpl;
function getComposer$1(i18n, instance) {
  const i18nInternal = i18n;
  if (i18n.mode === "composition") {
    return i18nInternal.__getInstance(instance) || i18n.global;
  } else {
    const vueI18n = i18nInternal.__getInstance(instance);
    return vueI18n != null ? vueI18n.__composer : i18n.global.__composer;
  }
}
function vTDirective(i18n) {
  const _process = (binding) => {
    const { instance, value } = binding;
    if (!instance || !instance.$) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const composer = getComposer$1(i18n, instance.$);
    const parsedValue = parseValue(value);
    return [
      Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]),
      composer
    ];
  };
  const register = (el, binding) => {
    const [textContent, composer] = _process(binding);
    el.__composer = composer;
    el.textContent = textContent;
  };
  const unregister = (el) => {
    if (el.__composer) {
      el.__composer = void 0;
      delete el.__composer;
    }
  };
  const update = (el, { value }) => {
    if (el.__composer) {
      const composer = el.__composer;
      const parsedValue = parseValue(value);
      el.textContent = Reflect.apply(composer.t, composer, [
        ...makeParams(parsedValue)
      ]);
    }
  };
  const getSSRProps = (binding) => {
    const [textContent] = _process(binding);
    return { textContent };
  };
  return {
    created: register,
    unmounted: unregister,
    beforeUpdate: update,
    getSSRProps
  };
}
function parseValue(value) {
  if (isString(value)) {
    return { path: value };
  } else if (isPlainObject(value)) {
    if (!("path" in value)) {
      throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, "path");
    }
    return value;
  } else {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
}
function makeParams(value) {
  const { path, locale, args, choice, plural } = value;
  const options = {};
  const named = args || {};
  if (isString(locale)) {
    options.locale = locale;
  }
  if (isNumber(choice)) {
    options.plural = choice;
  }
  if (isNumber(plural)) {
    options.plural = plural;
  }
  return [path, named, options];
}
function apply(app, i18n, ...options) {
  const pluginOptions = isPlainObject(options[0]) ? options[0] : {};
  const globalInstall = isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
  if (globalInstall) {
    [Translation.name, "I18nT"].forEach((name) => app.component(name, Translation));
    [NumberFormat.name, "I18nN"].forEach((name) => app.component(name, NumberFormat));
    [DatetimeFormat.name, "I18nD"].forEach((name) => app.component(name, DatetimeFormat));
  }
  {
    app.directive("t", vTDirective(i18n));
  }
}
const I18nInjectionKey = /* @__PURE__ */ makeSymbol("global-vue-i18n");
function createI18n(options = {}, VueI18nLegacy) {
  const __globalInjection = isBoolean(options.globalInjection) ? options.globalInjection : true;
  const __instances = /* @__PURE__ */ new Map();
  const [globalScope, __global] = createGlobal(options);
  const symbol = /* @__PURE__ */ makeSymbol("vue-i18n" );
  function __getInstance(component) {
    return __instances.get(component) || null;
  }
  function __setInstance(component, instance) {
    __instances.set(component, instance);
  }
  function __deleteInstance(component) {
    __instances.delete(component);
  }
  const i18n = {
    // mode
    get mode() {
      return "composition";
    },
    // install plugin
    async install(app, ...options2) {
      {
        app.__VUE_I18N__ = i18n;
      }
      app.__VUE_I18N_SYMBOL__ = symbol;
      app.provide(app.__VUE_I18N_SYMBOL__, i18n);
      if (isPlainObject(options2[0])) {
        const opts = options2[0];
        i18n.__composerExtend = opts.__composerExtend;
        i18n.__vueI18nExtend = opts.__vueI18nExtend;
      }
      let globalReleaseHandler = null;
      if (__globalInjection) {
        globalReleaseHandler = injectGlobalFields(app, i18n.global);
      }
      {
        apply(app, i18n, ...options2);
      }
      const unmountApp = app.unmount;
      app.unmount = () => {
        globalReleaseHandler && globalReleaseHandler();
        i18n.dispose();
        unmountApp();
      };
      {
        const ret = await enableDevTools(app, i18n);
        if (!ret) {
          throw createI18nError(I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
        }
        const emitter = createEmitter();
        {
          const _composer = __global;
          _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
        }
        emitter.on("*", addTimelineEvent);
      }
    },
    // global accessor
    get global() {
      return __global;
    },
    dispose() {
      globalScope.stop();
    },
    // @internal
    __instances,
    // @internal
    __getInstance,
    // @internal
    __setInstance,
    // @internal
    __deleteInstance
  };
  return i18n;
}
function useI18n(options = {}) {
  const instance = getCurrentInstance();
  if (instance == null) {
    throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
  }
  if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__) {
    throw createI18nError(I18nErrorCodes.NOT_INSTALLED);
  }
  const i18n = getI18nInstance(instance);
  const gl = getGlobalComposer(i18n);
  const componentOptions = getComponentOptions(instance);
  const scope = getScope(options, componentOptions);
  if (scope === "global") {
    adjustI18nResources(gl, options, componentOptions);
    return gl;
  }
  if (scope === "parent") {
    let composer2 = getComposer(i18n, instance, options.__useComponent);
    if (composer2 == null) {
      {
        warn(getWarnMessage(I18nWarnCodes.NOT_FOUND_PARENT_SCOPE));
      }
      composer2 = gl;
    }
    return composer2;
  }
  const i18nInternal = i18n;
  let composer = i18nInternal.__getInstance(instance);
  if (composer == null) {
    const composerOptions = assign({}, options);
    if ("__i18n" in componentOptions) {
      composerOptions.__i18n = componentOptions.__i18n;
    }
    if (gl) {
      composerOptions.__root = gl;
    }
    composer = createComposer(composerOptions);
    if (i18nInternal.__composerExtend) {
      composer[DisposeSymbol] = i18nInternal.__composerExtend(composer);
    }
    i18nInternal.__setInstance(instance, composer);
  }
  return composer;
}
function createGlobal(options, legacyMode, VueI18nLegacy) {
  const scope = effectScope();
  const obj = scope.run(() => createComposer(options));
  if (obj == null) {
    throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
  }
  return [scope, obj];
}
function getI18nInstance(instance) {
  const i18n = inject(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
  if (!i18n) {
    throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE);
  }
  return i18n;
}
function getScope(options, componentOptions) {
  return isEmptyObject(options) ? "__i18n" in componentOptions ? "local" : "global" : !options.useScope ? "local" : options.useScope;
}
function getGlobalComposer(i18n) {
  return i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
}
function getComposer(i18n, target, useComponent = false) {
  let composer = null;
  const root = target.root;
  let current = getParentComponentInstance(target, useComponent);
  while (current != null) {
    const i18nInternal = i18n;
    if (i18n.mode === "composition") {
      composer = i18nInternal.__getInstance(current);
    }
    if (composer != null) {
      break;
    }
    if (root === current) {
      break;
    }
    current = current.parent;
  }
  return composer;
}
function getParentComponentInstance(target, useComponent = false) {
  if (target == null) {
    return null;
  }
  return !useComponent ? target.parent : target.vnode.ctx || target.parent;
}
const globalExportProps = [
  "locale",
  "fallbackLocale",
  "availableLocales"
];
const globalExportMethods = ["t", "rt", "d", "n", "tm", "te"];
function injectGlobalFields(app, composer) {
  const i18n = /* @__PURE__ */ Object.create(null);
  globalExportProps.forEach((prop) => {
    const desc = Object.getOwnPropertyDescriptor(composer, prop);
    if (!desc) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const wrap = isRef(desc.value) ? {
      get() {
        return desc.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(val) {
        desc.value.value = val;
      }
    } : {
      get() {
        return desc.get && desc.get();
      }
    };
    Object.defineProperty(i18n, prop, wrap);
  });
  app.config.globalProperties.$i18n = i18n;
  globalExportMethods.forEach((method) => {
    const desc = Object.getOwnPropertyDescriptor(composer, method);
    if (!desc || !desc.value) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
  });
  const dispose = () => {
    delete app.config.globalProperties.$i18n;
    globalExportMethods.forEach((method) => {
      delete app.config.globalProperties[`$${method}`];
    });
  };
  return dispose;
}
registerMessageCompiler(compile);
registerMessageResolver(resolveValue);
registerLocaleFallbacker(fallbackWithLocaleChain);
{
  const target = getGlobalThis();
  target.__INTLIFY__ = true;
  setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
function useRouteBaseName() {
  return wrapComposable(getRouteBaseName);
}
function useLocalePath() {
  return wrapComposable(localePath);
}
function useLocaleRoute() {
  return wrapComposable(localeRoute);
}
function useLocaleLocation() {
  return wrapComposable(localeRoute);
}
function useSwitchLocalePath() {
  return wrapComposable(switchLocalePath);
}
const switch_locale_path_ssr_NflG9_QeVcJ1jVig0vCfxB_cZhpEMQ9U2ujRUiYbbVw = /* @__PURE__ */ defineNuxtPlugin({
  name: "i18n:plugin:switch-locale-path-ssr",
  dependsOn: ["i18n:plugin"],
  setup(_nuxt) {
    const nuxt = useNuxtApp(_nuxt._id);
    if (nuxt.$config.public.i18n.experimental.switchLocalePathLinkSSR !== true) return;
    const switchLocalePath2 = useSwitchLocalePath();
    const switchLocalePathLinkWrapperExpr = new RegExp(
      [
        `<!--${SWITCH_LOCALE_PATH_LINK_IDENTIFIER}-\\[(\\w+)\\]-->`,
        `.+?`,
        `<!--/${SWITCH_LOCALE_PATH_LINK_IDENTIFIER}-->`
      ].join(""),
      "g"
    );
    nuxt.hook("app:rendered", (ctx) => {
      if (ctx.renderResult?.html == null) return;
      ctx.renderResult.html = ctx.renderResult.html.replaceAll(
        switchLocalePathLinkWrapperExpr,
        (match, p1) => match.replace(/href="([^"]+)"/, `href="${encodeURI(switchLocalePath2(p1 ?? ""))}"`)
      );
    });
  }
});
const route_locale_detect__HPHJq3Jg7gwhwgKEI8tQavopSAjmrCSPXl9HgL2h9U = /* @__PURE__ */ defineNuxtPlugin({
  name: "i18n:plugin:route-locale-detect",
  dependsOn: ["i18n:plugin"],
  async setup(_nuxt) {
    let __temp, __restore;
    const nuxt = useNuxtApp(_nuxt._id);
    const currentRoute = nuxt.$router.currentRoute;
    async function handleRouteDetect(to) {
      let detected = detectLocale(
        nuxt,
        to,
        nuxt._vueI18n.__localeFromRoute(to),
        unref(nuxt.$i18n.locale),
        nuxt.$i18n.getLocaleCookie()
      );
      if (nuxt._vueI18n.__firstAccess) {
        nuxt._vueI18n.__setLocale(detected);
        const fallbackLocales = makeFallbackLocaleCodes(unref(nuxt._vueI18n.global.fallbackLocale), [detected]);
        await Promise.all(fallbackLocales.map((x) => nuxt.$i18n.loadLocaleMessages(x)));
        await nuxt.$i18n.loadLocaleMessages(detected);
      }
      const modified = await nuxt.runWithContext(() => loadAndSetLocale(nuxt, detected, nuxt._vueI18n.__firstAccess));
      if (modified) {
        detected = unref(nuxt.$i18n.locale);
      }
      return detected;
    }
    [__temp, __restore] = executeAsync(() => handleRouteDetect(currentRoute.value)), await __temp, __restore();
    const localeChangeMiddleware = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
      let __temp2, __restore2;
      const locale = ([__temp2, __restore2] = executeAsync(() => nuxt.runWithContext(() => handleRouteDetect(to))), __temp2 = await __temp2, __restore2(), __temp2);
      const redirectPath = ([__temp2, __restore2] = executeAsync(() => nuxt.runWithContext(
        () => detectRedirect({ to, nuxtApp: nuxt, from, locale, routeLocale: nuxt._vueI18n.__localeFromRoute(to) }, true)
      )), __temp2 = await __temp2, __restore2(), __temp2);
      nuxt._vueI18n.__firstAccess = false;
      return [__temp2, __restore2] = executeAsync(() => nuxt.runWithContext(() => navigate({ nuxt, redirectPath, locale, route: to }))), __temp2 = await __temp2, __restore2(), __temp2;
    });
    addRouteMiddleware("locale-changing", localeChangeMiddleware, { global: true });
  }
});
function extendI18n(i18n, { extendComposer, extendComposerInstance }) {
  const scope = effectScope();
  const installI18n = i18n.install.bind(i18n);
  i18n.install = (app, ...options) => {
    const pluginOptions = assign({}, options[0]);
    pluginOptions.__composerExtend = (c) => {
      extendComposerInstance(c, getComposer$3(i18n));
      return () => {
      };
    };
    if (i18n.mode === "legacy") {
      pluginOptions.__vueI18nExtend = (vueI18n) => {
        extendComposerInstance(vueI18n, getComposer$3(vueI18n));
        return () => {
        };
      };
    }
    Reflect.apply(installI18n, i18n, [app, pluginOptions]);
    const globalComposer = getComposer$3(i18n);
    scope.run(() => {
      extendComposer(globalComposer);
      if (i18n.mode === "legacy" && isVueI18n(i18n.global)) {
        extendComposerInstance(i18n.global, getComposer$3(i18n.global));
      }
    });
    if (i18n.mode === "composition" && app.config.globalProperties.$i18n != null) {
      extendComposerInstance(app.config.globalProperties.$i18n, globalComposer);
    }
    if (app.unmount) {
      const unmountApp = app.unmount.bind(app);
      app.unmount = () => {
        scope.stop();
        unmountApp();
      };
    }
  };
}
const i18n_EI7LsD1KYQADczz5hrChviGQCdVM8yUkvFEZLJpmnvM = /* @__PURE__ */ defineNuxtPlugin({
  name: "i18n:plugin",
  parallel: parallelPlugin,
  async setup(_nuxt) {
    let __temp, __restore;
    const nuxt = useNuxtApp(_nuxt._id);
    Object.defineProperty(_nuxt.versions, "nuxtI18n", { get: () => "9.5.6" });
    const _runtimeI18n = nuxt.$config.public.i18n;
    const defaultLocaleDomain = getDefaultLocaleForDomain(_runtimeI18n);
    setupMultiDomainLocales(_runtimeI18n, defaultLocaleDomain);
    nuxt.$config.public.i18n.defaultLocale = defaultLocaleDomain;
    const runtimeI18n = {
      ..._runtimeI18n,
      defaultLocale: defaultLocaleDomain,
      baseUrl: extendBaseUrl(nuxt)
    };
    const vueI18nOptions = ([__temp, __restore] = executeAsync(() => loadVueI18nOptions(vueI18nConfigs, useNuxtApp())), __temp = await __temp, __restore(), __temp);
    vueI18nOptions.messages ||= {};
    vueI18nOptions.fallbackLocale ??= false;
    if (defaultLocaleDomain) {
      vueI18nOptions.locale = defaultLocaleDomain;
    }
    for (const l of localeCodes) {
      vueI18nOptions.messages[l] ??= {};
    }
    const i18n = createI18n(vueI18nOptions);
    nuxt._vueI18n = i18n;
    i18n.__localeFromRoute = createLocaleFromRouteGetter();
    i18n.__firstAccess = true;
    i18n.__setLocale = (locale) => {
      const i = getI18nTarget(i18n);
      if (isRef(i.locale)) {
        i.locale.value = locale;
      } else {
        i.locale = locale;
      }
    };
    const localeCookie = createI18nCookie();
    const detectBrowserOptions = runtimeDetectBrowserLanguage();
    extendI18n(i18n, {
      extendComposer(composer) {
        const _locales = ref(runtimeI18n.locales);
        composer.locales = computed(() => _locales.value);
        const _localeCodes = ref(localeCodes);
        composer.localeCodes = computed(() => _localeCodes.value);
        const _baseUrl = ref(runtimeI18n.baseUrl());
        composer.baseUrl = computed(() => _baseUrl.value);
        composer.strategy = runtimeI18n.strategy;
        composer.localeProperties = computed(
          () => normalizedLocales.find((l) => l.code === composer.locale.value) || { code: composer.locale.value }
        );
        composer.setLocale = async (locale) => {
          await loadAndSetLocale(nuxt, locale, i18n.__firstAccess);
          if (composer.strategy === "no_prefix" || false) {
            await composer.loadLocaleMessages(locale);
            i18n.__setLocale(locale);
            return;
          }
          const route = nuxt.$router.currentRoute.value;
          const redirectPath = await nuxt.runWithContext(
            () => detectRedirect({ to: route, nuxtApp: nuxt, locale, routeLocale: i18n.__localeFromRoute(route) })
          );
          await nuxt.runWithContext(() => navigate({ nuxt, redirectPath, locale, route }, true));
        };
        composer.loadLocaleMessages = async (locale) => await loadLocale(locale, localeLoaders, composer.mergeLocaleMessage.bind(composer), nuxt);
        composer.differentDomains = runtimeI18n.differentDomains;
        composer.defaultLocale = runtimeI18n.defaultLocale;
        composer.getBrowserLocale = () => getBrowserLocale();
        composer.getLocaleCookie = () => getLocaleCookie(localeCookie, detectBrowserOptions, composer.defaultLocale);
        composer.setLocaleCookie = (locale) => {
          if (!detectBrowserOptions || !detectBrowserOptions.useCookie) return;
          localeCookie.value = locale;
        };
        composer.onBeforeLanguageSwitch = (oldLocale, newLocale, initialSetup, context) => nuxt.callHook("i18n:beforeLocaleSwitch", {
          oldLocale,
          newLocale,
          initialSetup,
          context
        });
        composer.onLanguageSwitched = (oldLocale, newLocale) => nuxt.callHook("i18n:localeSwitched", { oldLocale, newLocale });
        composer.finalizePendingLocaleChange = async () => {
          if (!i18n.__pendingLocale) return;
          i18n.__setLocale(i18n.__pendingLocale);
          i18n.__resolvePendingLocalePromise?.();
          i18n.__pendingLocale = void 0;
        };
        composer.waitForPendingLocaleChange = async () => {
          if (i18n.__pendingLocale && i18n.__pendingLocalePromise) {
            await i18n.__pendingLocalePromise;
          }
        };
      },
      extendComposerInstance(instance, c) {
        const props = [
          ["locales", () => c.locales],
          ["localeCodes", () => c.localeCodes],
          ["baseUrl", () => c.baseUrl],
          ["strategy", () => c.strategy],
          ["localeProperties", () => c.localeProperties],
          ["setLocale", () => async (locale) => Reflect.apply(c.setLocale, c, [locale])],
          ["loadLocaleMessages", () => async (locale) => Reflect.apply(c.loadLocaleMessages, c, [locale])],
          ["differentDomains", () => c.differentDomains],
          ["defaultLocale", () => c.defaultLocale],
          ["getBrowserLocale", () => () => Reflect.apply(c.getBrowserLocale, c, [])],
          ["getLocaleCookie", () => () => Reflect.apply(c.getLocaleCookie, c, [])],
          ["setLocaleCookie", () => (locale) => Reflect.apply(c.setLocaleCookie, c, [locale])],
          [
            "onBeforeLanguageSwitch",
            () => (oldLocale, newLocale, initialSetup, context) => Reflect.apply(c.onBeforeLanguageSwitch, c, [oldLocale, newLocale, initialSetup, context])
          ],
          [
            "onLanguageSwitched",
            () => (oldLocale, newLocale) => Reflect.apply(c.onLanguageSwitched, c, [oldLocale, newLocale])
          ],
          ["finalizePendingLocaleChange", () => () => Reflect.apply(c.finalizePendingLocaleChange, c, [])],
          ["waitForPendingLocaleChange", () => () => Reflect.apply(c.waitForPendingLocaleChange, c, [])]
        ];
        for (const [key, get] of props) {
          Object.defineProperty(instance, key, { get });
        }
      }
    });
    nuxt.vueApp.use(i18n);
    Object.defineProperty(nuxt, "$i18n", { get: () => getI18nTarget(i18n) });
    return {
      provide: {
        /**
         * TODO: remove type assertions while type narrowing based on generated types
         */
        localeHead: wrapComposable(localeHead),
        localePath: useLocalePath(),
        localeRoute: useLocaleRoute(),
        getRouteBaseName: useRouteBaseName(),
        switchLocalePath: useSwitchLocalePath(),
        // TODO: remove in v10
        resolveRoute: wrapComposable(resolveRoute),
        // TODO: remove in v10
        localeLocation: useLocaleLocation()
      }
    };
  }
});
const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const ssg_detect_IpHCGcQQ_IR5Rl99qyukWoMA9fJGfuTYyoksTzy81cs = /* @__PURE__ */ defineNuxtPlugin({
  name: "i18n:plugin:ssg-detect",
  dependsOn: ["i18n:plugin", "i18n:plugin:route-locale-detect"],
  enforce: "post",
  setup(_nuxt) {
    useNuxtApp(_nuxt._id);
    return;
  }
});
const plugins = [
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  plugin,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  switch_locale_path_ssr_NflG9_QeVcJ1jVig0vCfxB_cZhpEMQ9U2ujRUiYbbVw,
  route_locale_detect__HPHJq3Jg7gwhwgKEI8tQavopSAjmrCSPXl9HgL2h9U,
  i18n_EI7LsD1KYQADczz5hrChviGQCdVM8yUkvFEZLJpmnvM,
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4,
  ssg_detect_IpHCGcQQ_IR5Rl99qyukWoMA9fJGfuTYyoksTzy81cs
];
const layouts = {
  default: defineAsyncComponent(() => import('./default-gCtOu30j.mjs').then((m) => m.default || m))
};
const routeRulesMatcher = _routeRulesMatcher;
const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  setup(props, context) {
    return () => h(layouts[props.name], props.layoutProps, context.slots);
  }
});
const nuxtLayoutProps = {
  name: {
    type: [String, Boolean, Object],
    default: null
  },
  fallback: {
    type: [String, Object],
    default: null
  }
};
const __nuxt_component_0 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: nuxtLayoutProps,
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const shouldUseEagerRoute = !injectedRoute || injectedRoute === useRoute();
    const route = shouldUseEagerRoute ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      let layout2 = unref(props.name) ?? route?.meta.layout ?? routeRulesMatcher(route?.path).appLayout ?? "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = shallowRef();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    let lastLayout;
    return () => {
      const hasLayout = !!layout.value && layout.value in layouts;
      const hasTransition = hasLayout && !!(route?.meta.layoutTransition ?? appLayoutTransition);
      const transitionProps = hasTransition && _mergeTransitionProps([
        route?.meta.layoutTransition,
        appLayoutTransition,
        {
          onBeforeLeave() {
            nuxtApp["~transitionPromise"] = new Promise((resolve2) => {
              nuxtApp["~transitionFinish"] = resolve2;
            });
          },
          onAfterLeave() {
            nuxtApp["~transitionFinish"]?.();
            delete nuxtApp["~transitionFinish"];
            delete nuxtApp["~transitionPromise"];
          }
        }
      ]);
      const previouslyRenderedLayout = lastLayout;
      lastLayout = layout.value;
      return _wrapInTransition(transitionProps, {
        default: () => h(
          Suspense,
          {
            suspensible: true,
            onResolve: async () => {
              await nextTick(done);
            }
          },
          {
            default: () => h(
              LayoutProvider,
              {
                layoutProps: mergeProps(context.attrs, route.meta.layoutProps ?? {}, { ref: layoutRef }),
                key: layout.value || void 0,
                name: layout.value,
                shouldProvide: !props.name,
                isRenderingNewLayout: (name) => {
                  return name !== previouslyRenderedLayout && name === layout.value;
                },
                hasTransition
              },
              context.slots
            )
          }
        )
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    },
    isRenderingNewLayout: {
      type: Function,
      required: true
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        // When name=false, always return true so NuxtPage doesn't skip rendering
        isCurrent: (route) => name === false || name === (route.meta.layout ?? routeRulesMatcher(route.path).appLayout ?? "default")
      });
    }
    const injectedRoute = inject(PageRouteSymbol);
    const isNotWithinNuxtPage = injectedRoute && injectedRoute === useRoute();
    if (isNotWithinNuxtPage) {
      const vueRouterRoute = useRoute$1();
      const reactiveChildRoute = {};
      for (const _key in vueRouterRoute) {
        const key = _key;
        Object.defineProperty(reactiveChildRoute, key, {
          enumerable: true,
          get: () => {
            return props.isRenderingNewLayout(props.name) ? vueRouterRoute[key] : injectedRoute[key];
          }
        });
      }
      provide(PageRouteSymbol, shallowReactive(reactiveChildRoute));
    }
    return () => {
      if (!name || typeof name === "string" && !(name in layouts)) {
        return context.slots.default?.();
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const defineRouteProvider = (name = "RouteProvider") => defineComponent({
  name,
  props: {
    route: {
      type: Object,
      required: true
    },
    vnode: Object,
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      if (!props.vnode) {
        return props.vnode;
      }
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const RouteProvider = defineRouteProvider();
const __nuxt_component_1 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          return h(Suspense, { suspensible: true }, {
            default() {
              return h(RouteProvider, {
                vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
                route: routeProps.route,
                vnodeRef: pageRef
              });
            }
          });
        }
      });
    };
  }
});
function normalizeSlot(slot, data) {
  const slotContent = slot(data);
  return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_1;
  _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "error",
  __ssrInlineRender: true,
  setup(__props) {
    const error = /* @__PURE__ */ useError();
    const title = computed(() => {
      if (error.value?.statusCode === 404) {
        return "Page not found";
      }
      return "Something went wrong";
    });
    const message = computed(() => {
      if (error.value?.message) {
        return error.value.message;
      }
      return "The requested page is unavailable in this static build.";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "error-shell" }, _attrs))}><div class="error-card"><p class="eyebrow">Voyah</p><h1>${ssrInterpolate(unref(title))}</h1><p>${ssrInterpolate(unref(message))}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "button button--light",
        to: "/en"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Return to Voyah`);
          } else {
            return [
              createTextVNode("Return to Voyah")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = /* @__PURE__ */ useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error ||= createError(error);
    }
    if (ssrContext && (ssrContext["~renderResponse"] || ssrContext._renderResponse)) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry_default = ((ssrContext) => entry(ssrContext));

export { _export_sfc as _, __nuxt_component_0$1 as a, footerLegalLinks as b, footerColumns as c, navigation as d, entry_default as default, findLocale as e, footerContact as f, localize as g, homePage as h, locales as l, navigateTo as n, resolvePage as r, tryUseNuxtApp as t, useRoute as u };
//# sourceMappingURL=server.mjs.map
