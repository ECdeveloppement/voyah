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
  { code: "fr", name: "FranÃ§ais", dir: "ltr" },
  { code: "ar", name: "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©", dir: "rtl" }
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
  t("Exterior expression", "Expression extÃ©rieure", "Ø§Ù„Ù‡ÙˆÙŠØ© Ø§Ù„Ø®Ø§Ø±Ø¬ÙŠØ©"),
  t("Immersive cabin", "Habitacle immersif", "Ù…Ù‚ØµÙˆØ±Ø© ØºØ§Ù…Ø±Ø©"),
  t("Intelligent travel", "Voyage intelligent", "ØªÙ†Ù‚Ù„ Ø°ÙƒÙŠ")
];
const makeModel = (options) => ({
  kind: "model",
  ...options,
  features: options.gallery.slice(0, 3).map((image, index) => {
    const subtitle = options.subtitle.en.toLowerCase();
    const isMpv = subtitle.includes("mpv");
    const isSedan = subtitle.includes("sedan");
    const titles = isMpv ? [
      t("Ceremonial exterior", "ExtÃ©rieur cÃ©rÃ©moniel", "Ø®Ø§Ø±Ø¬ÙŠØ© Ø¨Ø·Ø§Ø¨Ø¹ Ø§Ø­ØªÙØ§Ù„ÙŠ"),
      t("Lounge-like cabin", "Habitacle esprit salon", "Ù…Ù‚ØµÙˆØ±Ø© Ø¨Ø·Ø§Ø¨Ø¹ Ø§Ù„ØµØ§Ù„ÙˆÙ†"),
      t("Long-distance hospitality", "HospitalitÃ© grand trajet", "Ø¶ÙŠØ§ÙØ© Ù…Ø«Ø§Ù„ÙŠØ© Ù„Ù„Ø±Ø­Ù„Ø§Øª Ø§Ù„Ø·ÙˆÙŠÙ„Ø©")
    ] : isSedan ? [
      t("Flagship exterior proportion", "Proportions extÃ©rieures de prestige", "ØªÙ†Ø§Ø³Ø¨Ø§Øª Ø®Ø§Ø±Ø¬ÙŠØ© Ø±Ø§Ø¦Ø¯Ø©"),
      t("Executive digital cabin", "Habitacle numÃ©rique exÃ©cutif", "Ù…Ù‚ØµÙˆØ±Ø© Ø±Ù‚Ù…ÙŠØ© ØªÙ†ÙÙŠØ°ÙŠØ©"),
      t("Composed intelligent travel", "Voyage intelligent et serein", "Ø³ÙØ± Ø°ÙƒÙŠ ÙˆÙˆØ§Ø«Ù‚")
    ] : [
      t("Commanding exterior stance", "Prestance extÃ©rieure affirmÃ©e", "Ø­Ø¶ÙˆØ± Ø®Ø§Ø±Ø¬ÙŠ Ù‚ÙˆÙŠ"),
      t("Spacious intelligent cabin", "Habitacle intelligent et spacieux", "Ù…Ù‚ØµÙˆØ±Ø© Ø°ÙƒÙŠØ© ÙˆØ±Ø­Ø¨Ø©"),
      t("All-scenario confidence", "SÃ©rÃ©nitÃ© tous usages", "Ø«Ù‚Ø© ÙÙŠ ÙƒÙ„ Ø§Ù„Ø³ÙŠÙ†Ø§Ø±ÙŠÙˆÙ‡Ø§Øª")
    ];
    const bodies = [
      options.description,
      options.subtitle,
      t(
        `Centered on ${options.price.en.toLowerCase()}, this page highlights the premium design, digital experience, and composed road character of ${options.title.en}.`,
        `CentrÃ©e sur ${options.price.fr.toLowerCase()}, cette page met en avant le design premium, l'expÃ©rience numÃ©rique et le caractÃ¨re routier maÃ®trisÃ© de ${options.title.fr}.`,
        `ØªÙØ¨Ø±Ø² Ù‡Ø°Ù‡ Ø§Ù„ØµÙØ­Ø©ØŒ Ø§Ù†Ø·Ù„Ø§Ù‚Ø§Ù‹ Ù…Ù† ${options.price.ar}ØŒ Ø§Ù„ØªØµÙ…ÙŠÙ… Ø§Ù„ÙØ§Ø®Ø± ÙˆØ§Ù„ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ø±Ù‚Ù…ÙŠØ© ÙˆØ§Ù„Ø­Ø¶ÙˆØ± Ø§Ù„ÙˆØ§Ø«Ù‚ Ù„Ø·Ø±Ø§Ø² ${options.title.ar}.`
      )
    ];
    return {
      image,
      title: titles[index] ?? modelFeatureTitles[2],
      body: bodies[index] ?? bodies[2]
    };
  }),
  ctaPrimary: t("Book a test drive", "RÃ©server un essai", "Ø§Ø­Ø¬Ø² ØªØ¬Ø±Ø¨Ø© Ù‚ÙŠØ§Ø¯Ø©"),
  ctaSecondary: t("Store center", "Centre de magasins", "Ù…Ø±ÙƒØ² Ø§Ù„Ù…Ø¹Ø§Ø±Ø¶"),
  secondarySlug: "store.html"
});
const navigation = [
  { label: t("Voyah Brand", "Marque Voyah", "Ø¹Ù„Ø§Ù…Ø© Voyah"), slug: "brand.html" },
  {
    label: t("Models", "ModÃ¨les", "Ø§Ù„Ø·Ø±Ø§Ø²Ø§Øª"),
    children: [
      { label: t("Voyah Passion L", "Voyah Passion L", "Voyah Passion L"), slug: "passion-L.html", thumb: "/voyah-resources/images/car/car_logo/passion-L.png" },
      { label: t("Voyah Passion", "Voyah Passion", "Voyah Passion"), slug: "passion.html", thumb: "/voyah-resources/images/car/car_logo/passion.png" },
      { label: t("Voyah Titan", "Voyah Titan", "Voyah Titan"), slug: "titan.html", thumb: "/voyah-resources/images/car/car_logo/titan.png" },
      { label: t("Voyah Titan Black Edition", "Voyah Titan Black Edition", "Voyah Titan Black Edition"), slug: "titan_blackedition.html", thumb: "/voyah-resources/images/car/car_logo/titan_blackedition.png" },
      { label: t("Voyah Titan X8", "Voyah Titan X8", "Voyah Titan X8"), slug: "titan_X8.html", thumb: "/voyah-resources/images/car/car_logo/titan_X8.png" },
      { label: t("Voyah FREE+", "Voyah FREE+", "Voyah FREE+"), slug: "free+.html", thumb: "/voyah-resources/images/car/car_logo/free+.png" },
      { label: t("Voyah FREE 318", "Voyah FREE 318", "Voyah FREE 318"), slug: "free.html", thumb: "/voyah-resources/images/car/car_logo/free.png" },
      { label: t("New Voyah Courage", "Nouveau Voyah Courage", "Voyah Courage Ø§Ù„Ø¬Ø¯ÙŠØ¯"), slug: "newCourage.html", thumb: "/voyah-resources/images/car/car_logo/newCourage.png" },
      { label: t("Voyah Courage", "Voyah Courage", "Voyah Courage"), slug: "courage.html", thumb: "/voyah-resources/images/car/car_logo/courage.png" },
      { label: t("26 Voyah Dreamer", "Voyah Dreamer 26", "Voyah Dreamer 26"), slug: "newDreamer26.html", thumb: "/voyah-resources/images/car/car_logo/newDreamer26.png" },
      { label: t("25 Voyah Dreamer", "Voyah Dreamer 25", "Voyah Dreamer 25"), slug: "newDreamer.html", thumb: "/voyah-resources/images/car/car_logo/newDreamer.png" },
      { label: t("Voyah Dreamer Mountain River", "Voyah Dreamer Montagne-RiviÃ¨re", "Voyah Dreamer Mountain River"), slug: "dreamriver.html", thumb: "/voyah-resources/images/car/car_logo/dreamriver.png" },
      { label: t("24 Voyah Dreamer", "Voyah Dreamer 24", "Voyah Dreamer 24"), slug: "dreamer.html", thumb: "/voyah-resources/images/car/car_logo/dreamer.png" }
    ]
  },
  { label: t("Store Center", "Centre de magasins", "Ù…Ø±ÙƒØ² Ø§Ù„Ù…Ø¹Ø§Ø±Ø¶"), slug: "store.html" },
  {
    label: t("Voyah Service", "Service Voyah", "Ø®Ø¯Ù…Ø§Øª Voyah"),
    children: [
      { label: t("User Service", "Service client", "Ø®Ø¯Ù…Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…"), slug: "service.html" },
      { label: t("Voyah Energy", "Ã‰nergie Voyah", "Ø·Ø§Ù‚Ø© Voyah"), slug: "energy.html" },
      { label: t("Procurement", "Achats", "Ø§Ù„Ù…Ø´ØªØ±ÙŠØ§Øª"), slug: "purchasing.html" },
      { label: t("Environmental Disclosure", "Informations environnementales", "Ø§Ù„Ø¥ÙØµØ§Ø­ Ø§Ù„Ø¨ÙŠØ¦ÙŠ"), slug: "environmental.html" },
      { label: t("Document Download", "TÃ©lÃ©chargements", "ØªÙ†Ø²ÙŠÙ„ Ø§Ù„Ù…Ø³ØªÙ†Ø¯Ø§Øª"), slug: "document.html" }
    ]
  },
  {
    label: t("About Voyah", "Ã€ propos de Voyah", "Ø¹Ù† Voyah"),
    children: [
      { label: t("Corporate Culture", "Culture dâ€™entreprise", "Ø§Ù„Ø«Ù‚Ø§ÙØ© Ø§Ù„Ù…Ø¤Ø³Ø³ÙŠØ©"), slug: "corporate.html" },
      { label: t("Join Us", "Rejoignez-nous", "Ø§Ù†Ø¶Ù… Ø¥Ù„ÙŠÙ†Ø§"), slug: "joinus.html" },
      { label: t("Partner Recruitment", "Recrutement de partenaires", "Ø§Ø³ØªÙ‚Ø·Ø§Ø¨ Ø§Ù„Ø´Ø±ÙƒØ§Ø¡"), slug: "recruit-partners.html" },
      { label: t("Investor Relations", "Relations investisseurs", "Ø¹Ù„Ø§Ù‚Ø§Øª Ø§Ù„Ù…Ø³ØªØ«Ù…Ø±ÙŠÙ†"), slug: "ir.html" }
    ]
  }
];
const models = [
  makeModel({
    slug: "passion-L.html",
    title: t("Voyah Passion L", "Voyah Passion L", "Voyah Passion L"),
    subtitle: t("Executive electric flagship sedan", "Berline Ã©lectrique exÃ©cutive", "Ø³ÙŠØ¯Ø§Ù† ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© ØªÙ†ÙÙŠØ°ÙŠØ©"),
    description: t("A long-wheelbase luxury sedan shaped around calm authority, digital refinement, and first-class rear comfort.", "Une berline de luxe Ã  empattement long conÃ§ue pour offrir prestance, raffinement numÃ©rique et confort arriÃ¨re de premiÃ¨re classe.", "Ø³ÙŠØ¯Ø§Ù† ÙØ§Ø®Ø±Ø© Ø¨Ù‚Ø§Ø¹Ø¯Ø© Ø¹Ø¬Ù„Ø§Øª Ø·ÙˆÙŠÙ„Ø© ØªØ¬Ù…Ø¹ Ø¨ÙŠÙ† Ø§Ù„Ø­Ø¶ÙˆØ± Ø§Ù„Ø±Ø§Ù‚ÙŠ ÙˆØ§Ù„ÙˆØ§Ø¬Ù‡Ø© Ø§Ù„Ø±Ù‚Ù…ÙŠØ© Ø§Ù„Ù…ØªÙ…ÙŠØ²Ø© ÙˆØ±Ø§Ø­Ø© Ø§Ù„ØµÙ Ø§Ù„Ø®Ù„ÙÙŠ."),
    price: t("Flagship sedan", "Berline phare", "Ø§Ù„Ø³ÙŠØ¯Ø§Ù† Ø§Ù„Ø±Ø§Ø¦Ø¯Ø©"),
    heroImage: "/voyah-resources/images/car/passion-L/1920/sc_1.jpg",
    logo: "/voyah-resources/images/car/car_logo/passion-L.png",
    gallery: [
      "/voyah-resources/images/car/passion-L/1920/sc_10.jpg",
      "/voyah-resources/images/car/passion-L/1920/sc_24.jpg",
      "/voyah-resources/images/car/passion-L/1920/sc_39.jpg"
    ],
    metrics: [
      metric("Luxury sedan", "Positioning", "Positionnement", "Ø§Ù„ÙØ¦Ø©"),
      metric("Rear lounge", "Rear experience", "ExpÃ©rience arriÃ¨re", "ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù…Ù‚Ø§Ø¹Ø¯ Ø§Ù„Ø®Ù„ÙÙŠØ©"),
      metric("Smart cockpit", "Digital cabin", "Habitacle numÃ©rique", "Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø© Ø§Ù„Ø±Ù‚Ù…ÙŠØ©")
    ]
  }),
  makeModel({
    slug: "passion.html",
    title: t("Voyah Passion", "Voyah Passion", "Voyah Passion"),
    subtitle: t("Performance electric sedan", "Berline Ã©lectrique performante", "Ø³ÙŠØ¯Ø§Ù† ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© Ø¹Ø§Ù„ÙŠØ© Ø§Ù„Ø£Ø¯Ø§Ø¡"),
    description: t("A sleek electric sedan pairing decisive proportions with a quiet cabin and high-speed touring character.", "Une berline Ã©lectrique Ã©lancÃ©e qui associe des proportions affirmÃ©es Ã  un habitacle silencieux et un tempÃ©rament grand tourisme.", "Ø³ÙŠØ¯Ø§Ù† ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© Ø£Ù†ÙŠÙ‚Ø© ØªØ¬Ù…Ø¹ Ø¨ÙŠÙ† Ø§Ù„ØªÙ†Ø§Ø³Ù‚ Ø§Ù„Ø¬Ø±ÙŠØ¡ ÙˆØ§Ù„Ù…Ù‚ØµÙˆØ±Ø© Ø§Ù„Ù‡Ø§Ø¯Ø¦Ø© ÙˆØ±ÙˆØ­ Ø§Ù„Ø³ÙØ± Ø§Ù„Ø³Ø±ÙŠØ¹."),
    price: t("Performance sedan", "Berline performante", "Ø³ÙŠØ¯Ø§Ù† Ø£Ø¯Ø§Ø¡"),
    heroImage: "/voyah-resources/images/car/passion/1920/fl01.jpg",
    logo: "/voyah-resources/images/car/car_logo/passion.png",
    gallery: [
      "/voyah-resources/images/car/passion/1920/fl04.jpg",
      "/voyah-resources/images/car/passion/1920/fl11.jpg",
      "/voyah-resources/images/car/passion/1920/fl21.jpg"
    ],
    metrics: [
      metric("Grand tourer", "Character", "CaractÃ¨re", "Ø§Ù„Ø·Ø§Ø¨Ø¹"),
      metric("Refined ride", "Chassis tuning", "Mise au point chÃ¢ssis", "Ù…Ø¹Ø§ÙŠØ±Ø© Ø§Ù„Ù‡ÙŠÙƒÙ„"),
      metric("Digital luxury", "Cabin feel", "Ambiance intÃ©rieure", "Ø£Ø¬ÙˆØ§Ø¡ Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø©")
    ]
  }),
  makeModel({
    slug: "titan.html",
    title: t("Voyah Titan", "Voyah Titan", "Voyah Titan"),
    subtitle: t("Full-size intelligent SUV", "SUV intelligent grand format", "Ø³ÙŠØ§Ø±Ø© SUV Ø°ÙƒÙŠØ© ÙƒØ¨ÙŠØ±Ø© Ø§Ù„Ø­Ø¬Ù…"),
    description: t("A large SUV built around commanding stance, confident family space, and composed all-road capability.", "Un grand SUV conÃ§u autour dâ€™une prestance affirmÃ©e, dâ€™un espace familial gÃ©nÃ©reux et dâ€™une aisance sereine sur tous types de routes.", "Ø³ÙŠØ§Ø±Ø© SUV ÙƒØ¨ÙŠØ±Ø© ØªØ¬Ù…Ø¹ Ø¨ÙŠÙ† Ø§Ù„Ø­Ø¶ÙˆØ± Ø§Ù„Ù‚ÙˆÙŠ ÙˆØ§Ù„Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ø¹Ø§Ø¦Ù„ÙŠØ© Ø§Ù„Ø±Ø­Ø¨Ø© ÙˆØ§Ù„Ø«Ø¨Ø§Øª Ø¹Ù„Ù‰ Ù…Ø®ØªÙ„Ù Ø§Ù„Ø·Ø±Ù‚."),
    price: t("Large SUV flagship", "SUV phare grand format", "SUV Ø±Ø§Ø¦Ø¯Ø© ÙƒØ¨ÙŠØ±Ø©"),
    heroImage: "/voyah-resources/images/car/titan/1920/sc_1.jpg",
    logo: "/voyah-resources/images/car/car_logo/titan.png",
    gallery: [
      "/voyah-resources/images/car/titan/1920/sc_18.jpg",
      "/voyah-resources/images/car/titan/1920/sc_22.jpg",
      "/voyah-resources/images/car/titan/1920/sc_30.jpg"
    ],
    metrics: [
      metric("Family flagship", "Vehicle role", "RÃ´le du vÃ©hicule", "Ø¯ÙˆØ± Ø§Ù„Ø³ÙŠØ§Ø±Ø©"),
      metric("Flexible cabin", "Interior package", "ModularitÃ© intÃ©rieure", "Ù…Ø±ÙˆÙ†Ø© Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø©"),
      metric("Confident traction", "Road confidence", "Confiance routiÃ¨re", "Ø§Ù„Ø«Ø¨Ø§Øª Ø¹Ù„Ù‰ Ø§Ù„Ø·Ø±ÙŠÙ‚")
    ]
  }),
  makeModel({
    slug: "titan_blackedition.html",
    title: t("Voyah Titan Black Edition", "Voyah Titan Black Edition", "Voyah Titan Black Edition"),
    subtitle: t("Stealth-focused luxury SUV", "SUV de luxe au style noir", "SUV ÙØ§Ø®Ø±Ø© Ø¨Ø·Ø§Ø¨Ø¹ Ø£Ø³ÙˆØ¯"),
    description: t("A darker, sharper interpretation of the Titan formula with bold finishes and a more dramatic visual tone.", "Une interprÃ©tation plus sombre et plus tranchante de la Titan, avec des finitions audacieuses et un langage visuel plus dramatique.", "Ù†Ø³Ø®Ø© Ø£ÙƒØ«Ø± Ø¬Ø±Ø£Ø© Ù…Ù† Titan Ø¨ØªØ´Ø·ÙŠØ¨Ø§Øª Ø¯Ø§ÙƒÙ†Ø© ÙˆØ­Ø¶ÙˆØ± Ø¨ØµØ±ÙŠ Ø£ÙƒØ«Ø± Ø­Ø¯Ø©."),
    price: t("Black Edition", "Black Edition", "Black Edition"),
    heroImage: "/voyah-resources/images/car/titan_blackedition/1920/sc_1.jpg",
    logo: "/voyah-resources/images/car/car_logo/titan_blackedition.png",
    gallery: [
      "/voyah-resources/images/car/titan_blackedition/1920/sc_10_1.jpg",
      "/voyah-resources/images/car/titan_blackedition/1920/sc_17.jpg",
      "/voyah-resources/images/car/titan_blackedition/1920/sc_18_1.jpg"
    ],
    metrics: [
      metric("Dark styling", "Design theme", "ThÃ¨me design", "Ù†Ø³Ù‚ Ø§Ù„ØªØµÙ…ÙŠÙ…"),
      metric("Premium trim", "Material tone", "Finition premium", "Ø§Ù„Ø®Ø§Ù…Ø§Øª Ø§Ù„ÙØ§Ø®Ø±Ø©"),
      metric("SUV command", "Presence", "Prestance", "Ø§Ù„Ø­Ø¶ÙˆØ±")
    ]
  }),
  makeModel({
    slug: "titan_X8.html",
    title: t("Voyah Titan X8", "Voyah Titan X8", "Voyah Titan X8"),
    subtitle: t("Expanded family utility", "Polyvalence familiale Ã©tendue", "Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø¹Ø§Ø¦Ù„ÙŠ Ù…ÙˆØ³Ø¹"),
    description: t("A Titan derivative tuned for generous multi-row practicality and long-range family confidence.", "Une dÃ©clinaison de Titan pensÃ©e pour une praticitÃ© multirang gÃ©nÃ©reuse et des voyages familiaux sereins.", "Ù†Ø³Ø®Ø© Ù…Ù† Titan Ù…Ù‡ÙŠØ£Ø© Ù„Ø¹Ù…Ù„ÙŠØ© Ø£ÙƒØ¨Ø± Ø¹Ø¨Ø± Ø§Ù„ØµÙÙˆÙ Ø§Ù„Ù…ØªØ¹Ø¯Ø¯Ø© ÙˆØ«Ù‚Ø© Ø£ÙƒØ¨Ø± ÙÙŠ Ø§Ù„Ø±Ø­Ù„Ø§Øª Ø§Ù„Ø¹Ø§Ø¦Ù„ÙŠØ©."),
    price: t("Eight-seat family focus", "Orientation familiale", "ØªØ±ÙƒÙŠØ² Ø¹Ø§Ø¦Ù„ÙŠ"),
    heroImage: "/voyah-resources/images/car/titan_X8/1920/sc_1.jpg",
    logo: "/voyah-resources/images/car/car_logo/titan_X8.png",
    gallery: ["/voyah-resources/images/car/titan_X8/1920/sc_1.jpg"],
    metrics: [
      metric("Expanded seating", "Space plan", "Plan dâ€™espace", "ØªØ®Ø·ÙŠØ· Ø§Ù„Ù…Ø³Ø§Ø­Ø©"),
      metric("Travel ready", "Use case", "Usage", "Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù…"),
      metric("SUV comfort", "Comfort focus", "Confort", "Ø§Ù„Ø±Ø§Ø­Ø©")
    ]
  }),
  makeModel({
    slug: "free+.html",
    title: t("Voyah FREE+", "Voyah FREE+", "Voyah FREE+"),
    subtitle: t("Premium performance SUV", "SUV premium haute performance", "SUV ÙØ§Ø®Ø±Ø© Ø¹Ø§Ù„ÙŠØ© Ø§Ù„Ø£Ø¯Ø§Ø¡"),
    description: t("A sharply sculpted SUV with athletic stance, expressive lighting, and a focused digital cockpit.", "Un SUV sculptÃ© avec prÃ©cision, dotÃ© dâ€™une posture athlÃ©tique, dâ€™une signature lumineuse expressive et dâ€™un cockpit numÃ©rique centrÃ© sur le conducteur.", "Ø³ÙŠØ§Ø±Ø© SUV Ù…Ù†Ø­ÙˆØªØ© Ø¨Ø¯Ù‚Ø© ØªØ¬Ù…Ø¹ Ø¨ÙŠÙ† Ø§Ù„ÙˆÙ‚ÙØ© Ø§Ù„Ø±ÙŠØ§Ø¶ÙŠØ© ÙˆØ§Ù„Ø¥Ø¶Ø§Ø¡Ø© Ø§Ù„ØªØ¹Ø¨ÙŠØ±ÙŠØ© ÙˆØ§Ù„Ù…Ù‚ØµÙˆØ±Ø© Ø§Ù„Ø±Ù‚Ù…ÙŠØ© Ø§Ù„Ù…Ø±ÙƒØ²Ø© Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¦Ù‚."),
    price: t("Performance SUV", "SUV performance", "SUV Ø£Ø¯Ø§Ø¡"),
    heroImage: "/voyah-resources/images/car/free+/kv_1920.png",
    logo: "/voyah-resources/images/car/car_logo/free+.png",
    gallery: [
      "/voyah-resources/images/car/free+/img_03_1920.png",
      "/voyah-resources/images/car/free+/img_25_1920.png",
      "/voyah-resources/images/car/free+/img_42_1920.png"
    ],
    metrics: [
      metric("Athletic stance", "Design", "Design", "Ø§Ù„ØªØµÙ…ÙŠÙ…"),
      metric("Connected cockpit", "Cabin", "Habitacle", "Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø©"),
      metric("Daily versatility", "Use case", "Usage", "Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù…")
    ]
  }),
  makeModel({
    slug: "free.html",
    title: t("Voyah FREE 318", "Voyah FREE 318", "Voyah FREE 318"),
    subtitle: t("Long-range crossover expression", "Expression crossover longue autonomie", "ÙƒØ±ÙˆØ³ Ø£ÙˆÙØ± Ø¨Ù…Ø¯Ù‰ Ø·ÙˆÙŠÙ„"),
    description: t("A crossover package balancing touring composure, elevated seating, and everyday premium usability.", "Un crossover qui Ã©quilibre sÃ©rÃ©nitÃ© sur long trajet, position de conduite surÃ©levÃ©e et usage premium au quotidien.", "Ø­Ø²Ù…Ø© ÙƒØ±ÙˆØ³ Ø£ÙˆÙØ± ØªÙˆØ§Ø²Ù† Ø¨ÙŠÙ† Ø§Ù„Ø±Ø§Ø­Ø© ÙÙŠ Ø§Ù„Ø³ÙØ± ÙˆØ§Ù„Ø¬Ù„ÙˆØ³ Ø§Ù„Ù…Ø±ØªÙØ¹ ÙˆØ§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„ÙØ§Ø®Ø± Ø§Ù„ÙŠÙˆÙ…ÙŠ."),
    price: t("Long-range crossover", "Crossover longue autonomie", "ÙƒØ±ÙˆØ³ Ø£ÙˆÙØ± Ø¨Ù…Ø¯Ù‰ Ø·ÙˆÙŠÙ„"),
    heroImage: "/voyah-resources/images/car/free/bg-free-h97D-1.jpg",
    logo: "/voyah-resources/images/car/car_logo/free.png",
    gallery: [
      "/voyah-resources/images/car/free/bg-free-h97D-5.jpg",
      "/voyah-resources/images/car/free/bg-free-h97D-9.jpg",
      "/voyah-resources/images/car/free/bg-free-h97D-12.jpg"
    ],
    metrics: [
      metric("Travel comfort", "Long-route feel", "Confort longue route", "Ø±Ø§Ø­Ø© Ø§Ù„Ø³ÙØ±"),
      metric("Elevated seating", "Driving position", "Position de conduite", "ÙˆØ¶Ø¹ÙŠØ© Ø§Ù„Ù‚ÙŠØ§Ø¯Ø©"),
      metric("Practical luxury", "Daily use", "Usage quotidien", "Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„ÙŠÙˆÙ…ÙŠ")
    ]
  }),
  makeModel({
    slug: "newCourage.html",
    title: t("New Voyah Courage", "Nouveau Voyah Courage", "Voyah Courage Ø§Ù„Ø¬Ø¯ÙŠØ¯"),
    subtitle: t("Urban electric SUV upgrade", "SUV Ã©lectrique urbain revisitÃ©", "ØªØ­Ø¯ÙŠØ« SUV ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© Ø­Ø¶Ø±ÙŠØ©"),
    description: t("An updated Courage with sharper surfaces, clean proportions, and a stronger digital-first interior theme.", "Une Courage renouvelÃ©e, avec des surfaces plus tendues, des proportions nettes et une ambiance intÃ©rieure davantage centrÃ©e sur le numÃ©rique.", "Ù†Ø³Ø®Ø© Ù…Ø­Ø¯Ø«Ø© Ù…Ù† Courage Ø¨ØªÙØ§ØµÙŠÙ„ Ø£ÙƒØ«Ø± Ø­Ø¯Ø© ÙˆØªÙ†Ø§Ø³Ù‚ Ø£Ù†Ø¸Ù ÙˆÙ…Ù‚ØµÙˆØ±Ø© Ø±Ù‚Ù…ÙŠØ© Ø£ÙƒØ«Ø± ÙˆØ¶ÙˆØ­Ø§Ù‹."),
    price: t("Urban premium SUV", "SUV urbain premium", "SUV Ø­Ø¶Ø±ÙŠØ© ÙØ§Ø®Ø±Ø©"),
    heroImage: "/voyah-resources/images/car/newCourage/1920/sc_1.jpg",
    logo: "/voyah-resources/images/car/car_logo/newCourage.png",
    gallery: [
      "/voyah-resources/images/car/newCourage/1920/sc_10.jpg",
      "/voyah-resources/images/car/newCourage/1920/sc_12.jpg",
      "/voyah-resources/images/car/newCourage/1920/sc_18.jpg"
    ],
    metrics: [
      metric("City focused", "Context", "Contexte", "Ø§Ù„Ø³ÙŠØ§Ù‚"),
      metric("Sharper form", "Styling", "Style", "Ø§Ù„Ø£Ø³Ù„ÙˆØ¨"),
      metric("Connected comfort", "Interior theme", "Ambiance intÃ©rieure", "Ø·Ø§Ø¨Ø¹ Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø©")
    ]
  }),
  makeModel({
    slug: "courage.html",
    title: t("Voyah Courage", "Voyah Courage", "Voyah Courage"),
    subtitle: t("Compact premium electric SUV", "SUV Ã©lectrique premium compact", "SUV ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© ÙØ§Ø®Ø±Ø© Ù…Ø¯Ù…Ø¬Ø©"),
    description: t("A compact premium SUV shaped for agile urban use while preserving Voyah refinement and visual confidence.", "Un SUV premium compact pensÃ© pour lâ€™agilitÃ© urbaine sans sacrifier le raffinement Voyah ni sa prÃ©sence visuelle.", "Ø³ÙŠØ§Ø±Ø© SUV ÙØ§Ø®Ø±Ø© Ù…Ø¯Ù…Ø¬Ø© Ù…ÙˆØ¬Ù‡Ø© Ù„Ù„Ù…Ø¯ÙŠÙ†Ø© Ù…Ø¹ Ø§Ù„Ø­ÙØ§Ø¸ Ø¹Ù„Ù‰ Ø±Ù‚ÙŠ Voyah ÙˆØ­Ø¶ÙˆØ±Ù‡Ø§ Ø§Ù„ÙˆØ§Ø«Ù‚."),
    price: t("Compact electric SUV", "SUV Ã©lectrique compact", "SUV ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© Ù…Ø¯Ù…Ø¬Ø©"),
    heroImage: "/voyah-resources/images/car/courage/1920/h37_pc01_0001.jpg",
    logo: "/voyah-resources/images/car/car_logo/courage.png",
    gallery: [
      "/voyah-resources/images/car/courage/1920/h37_pc03_0001.jpg",
      "/voyah-resources/images/car/courage/1920/h37_pc04_0001.jpg",
      "/voyah-resources/images/car/courage/1920/h37_pc06_0001.jpg"
    ],
    metrics: [
      metric("Compact footprint", "Vehicle size", "Gabarit", "Ø§Ù„Ø­Ø¬Ù…"),
      metric("Urban agility", "Driving use", "Usage de conduite", "Ø·Ø¨ÙŠØ¹Ø© Ø§Ù„Ù‚ÙŠØ§Ø¯Ø©"),
      metric("Premium detail", "Finish", "Finition", "Ø§Ù„ØªØ´Ø·ÙŠØ¨")
    ]
  }),
  makeModel({
    slug: "newDreamer26.html",
    title: t("26 Voyah Dreamer", "Voyah Dreamer 26", "Voyah Dreamer 26"),
    subtitle: t("Luxury family MPV flagship", "Monospace familial de luxe", "MPV Ø¹Ø§Ø¦Ù„ÙŠØ© ÙØ§Ø®Ø±Ø©"),
    description: t("A new-generation Dreamer with lounge-like comfort, refined long-distance composure, and premium family focus.", "Une nouvelle gÃ©nÃ©ration Dreamer avec un confort de salon, une grande sÃ©rÃ©nitÃ© sur longue distance et une vocation familiale premium.", "Ø§Ù„Ø¬ÙŠÙ„ Ø§Ù„Ø¬Ø¯ÙŠØ¯ Ù…Ù† Dreamer ÙŠÙˆÙØ± Ø±Ø§Ø­Ø© Ø´Ø¨ÙŠÙ‡Ø© Ø¨Ø§Ù„ØµØ§Ù„ÙˆÙ† ÙˆØ«Ø¨Ø§ØªØ§Ù‹ Ø±Ø§Ù‚ÙŠØ§Ù‹ ÙÙŠ Ø§Ù„Ø±Ø­Ù„Ø§Øª Ø§Ù„Ø·ÙˆÙŠÙ„Ø© ÙˆØªØ±ÙƒÙŠØ²Ø§Ù‹ Ø¹Ø§Ø¦Ù„ÙŠØ§Ù‹ ÙØ§Ø®Ø±Ø§Ù‹."),
    price: t("Luxury MPV flagship", "Monospace phare de luxe", "MPV ÙØ§Ø®Ø±Ø© Ø±Ø§Ø¦Ø¯Ø©"),
    heroImage: "/voyah-resources/images/car/newDreamer26/kv_1920.jpg",
    logo: "/voyah-resources/images/car/car_logo/newDreamer26.png",
    gallery: [
      "/voyah-resources/images/car/newDreamer26/bg_11_1920.jpg",
      "/voyah-resources/images/car/newDreamer26/sc_20.jpg",
      "/voyah-resources/images/car/newDreamer26/bg_22_1920.jpg"
    ],
    metrics: [
      metric("Family lounge", "Cabin concept", "Concept habitacle", "Ù…ÙÙ‡ÙˆÙ… Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø©"),
      metric("Long-distance ease", "Travel focus", "Confort voyage", "Ø±Ø§Ø­Ø© Ø§Ù„Ø³ÙØ±"),
      metric("Premium hospitality", "Second-row feel", "ExpÃ©rience deuxiÃ¨me rang", "ØªØ¬Ø±Ø¨Ø© Ø§Ù„ØµÙ Ø§Ù„Ø«Ø§Ù†ÙŠ")
    ]
  }),
  makeModel({
    slug: "newDreamer.html",
    title: t("25 Voyah Dreamer", "Voyah Dreamer 25", "Voyah Dreamer 25"),
    subtitle: t("Refined premium MPV", "Monospace premium raffinÃ©", "MPV ÙØ§Ø®Ø±Ø© Ù…ØµÙ‚ÙˆÙ„Ø©"),
    description: t("A premium MPV combining poised body control, spacious seating, and a polished travel atmosphere.", "Un monospace premium qui associe maÃ®trise des mouvements, espace Ã  bord gÃ©nÃ©reux et atmosphÃ¨re de voyage soignÃ©e.", "Ø³ÙŠØ§Ø±Ø© MPV ÙØ§Ø®Ø±Ø© ØªØ¬Ù…Ø¹ Ø¨ÙŠÙ† Ø§Ù„Ø«Ø¨Ø§Øª Ø§Ù„Ø±Ø­Ø¨ ÙˆØ§Ù„Ù…Ø³Ø§Ø­Ø© Ø§Ù„ÙˆØ§Ø³Ø¹Ø© ÙˆØ£Ø¬ÙˆØ§Ø¡ Ø§Ù„Ø³ÙØ± Ø§Ù„Ù…ØµÙ‚ÙˆÙ„Ø©."),
    price: t("Premium MPV", "Monospace premium", "MPV ÙØ§Ø®Ø±Ø©"),
    heroImage: "/voyah-resources/images/car/newDreamer/h56c_pc08_banner01.jpg",
    logo: "/voyah-resources/images/car/car_logo/newDreamer.png",
    gallery: [
      "/voyah-resources/images/car/newDreamer/bg_2_n_1920.jpg",
      "/voyah-resources/images/car/newDreamer/bg_7_n_1920.jpg",
      "/voyah-resources/images/car/newDreamer/h56c_pc03_0003.jpg"
    ],
    metrics: [
      metric("Premium MPV", "Vehicle type", "Type de vÃ©hicule", "Ù†ÙˆØ¹ Ø§Ù„Ø³ÙŠØ§Ø±Ø©"),
      metric("Quiet travel", "Ride quality", "QualitÃ© de roulage", "Ø¬ÙˆØ¯Ø© Ø§Ù„Ø±Ø­Ù„Ø©"),
      metric("Family luxury", "Use focus", "Usage", "Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù…")
    ]
  }),
  makeModel({
    slug: "dreamriver.html",
    title: t("Voyah Dreamer Mountain River", "Voyah Dreamer Montagne-RiviÃ¨re", "Voyah Dreamer Mountain River"),
    subtitle: t("Scenic travel expression", "Expression du voyage panoramique", "Ø·Ø§Ø¨Ø¹ Ø§Ù„Ø³ÙØ± Ø§Ù„Ù…Ø´Ù‡Ø¯ÙŠ"),
    description: t("A special Dreamer expression emphasizing serene scenery, warm hospitality, and elegant multi-person travel.", "Une interprÃ©tation spÃ©ciale de Dreamer axÃ©e sur le paysage, lâ€™accueil chaleureux et lâ€™Ã©lÃ©gance des voyages Ã  plusieurs.", "Ù†Ø³Ø®Ø© Ø®Ø§ØµØ© Ù…Ù† Dreamer ØªØ±ÙƒØ² Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø´Ù‡Ø¯ Ø§Ù„Ù‡Ø§Ø¯Ø¦ ÙˆØ§Ù„Ø¶ÙŠØ§ÙØ© Ø§Ù„Ø¯Ø§ÙØ¦Ø© ÙˆØ£Ù†Ø§Ù‚Ø© Ø§Ù„Ø³ÙØ± Ø§Ù„Ø¬Ù…Ø§Ø¹ÙŠ."),
    price: t("Special edition MPV", "Ã‰dition spÃ©ciale MPV", "MPV Ø¥ØµØ¯Ø§Ø± Ø®Ø§Øµ"),
    heroImage: "/voyah-resources/images/car/dreamriver/kv_1920.png",
    logo: "/voyah-resources/images/car/car_logo/dreamriver.png",
    gallery: [
      "/voyah-resources/images/car/dreamriver/sc_2.png",
      "/voyah-resources/images/car/dreamriver/sc_5-2.png",
      "/voyah-resources/images/car/dreamriver/sc_8.png"
    ],
    metrics: [
      metric("Scenic theme", "Edition theme", "ThÃ¨me de lâ€™Ã©dition", "Ø·Ø§Ø¨Ø¹ Ø§Ù„Ø¥ØµØ¯Ø§Ø±"),
      metric("Warm cabin", "Interior mood", "Ambiance intÃ©rieure", "Ø£Ø¬ÙˆØ§Ø¡ Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø©"),
      metric("Shared journeys", "Travel mode", "Mode de voyage", "Ù†Ù…Ø· Ø§Ù„Ø³ÙØ±")
    ]
  }),
  makeModel({
    slug: "dreamer.html",
    title: t("24 Voyah Dreamer", "Voyah Dreamer 24", "Voyah Dreamer 24"),
    subtitle: t("Luxury electric MPV", "Monospace Ã©lectrique de luxe", "MPV ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© ÙØ§Ø®Ø±Ø©"),
    description: t("A spacious electric MPV created for premium family mobility with broad comfort and reassuring calm.", "Un monospace Ã©lectrique spacieux pensÃ© pour une mobilitÃ© familiale premium avec beaucoup de confort et une sÃ©rÃ©nitÃ© rassurante.", "Ø³ÙŠØ§Ø±Ø© MPV ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© ÙˆØ§Ø³Ø¹Ø© ØµÙ…Ù…Øª Ù„Ù„Ø­Ø±ÙƒØ© Ø§Ù„Ø¹Ø§Ø¦Ù„ÙŠØ© Ø§Ù„ÙØ§Ø®Ø±Ø© Ù…Ø¹ Ø±Ø§Ø­Ø© ÙƒØ¨ÙŠØ±Ø© ÙˆÙ‡Ø¯ÙˆØ¡ Ù…Ø·Ù…Ø¦Ù†."),
    price: t("Electric luxury MPV", "Monospace Ã©lectrique de luxe", "MPV ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© ÙØ§Ø®Ø±Ø©"),
    heroImage: "/voyah-resources/images/car/dreamer/bg_2_1920.jpg",
    logo: "/voyah-resources/images/car/car_logo/dreamer.png",
    gallery: [
      "/voyah-resources/images/car/dreamer/bg_13_1920.jpg",
      "/voyah-resources/images/car/dreamer/bg_21_1920.jpg",
      "/voyah-resources/images/car/dreamer/bg_24_1920.jpg"
    ],
    metrics: [
      metric("Three-row comfort", "Space", "Espace", "Ø§Ù„Ù…Ø³Ø§Ø­Ø©"),
      metric("Family calm", "Travel atmosphere", "Ambiance de voyage", "Ø£Ø¬ÙˆØ§Ø¡ Ø§Ù„Ø±Ø­Ù„Ø©"),
      metric("Electric luxury", "Power theme", "Motorisation", "Ø§Ù„Ù…Ù†Ø¸ÙˆÙ…Ø©")
    ]
  })
];
const infoPages = [
  {
    kind: "info",
    slug: "brand.html",
    eyebrow: t("Brand", "Marque", "Ø§Ù„Ø¹Ù„Ø§Ù…Ø©"),
    title: t("Hello world, I am Voyah!", "Bonjour le monde, je suis Voyah !", "مرحباً أيها العالم، أنا Voyah!"),
    summary: t("A premium intelligent new-energy brand originating from Dongfeng Motor.", "Une marque haut de gamme de véhicules à énergies nouvelles intelligents issue de Dongfeng Motor.", "علامة راقية للمركبات الذكية العاملة بالطاقة الجديدة تنتمي إلى Dongfeng Motor."),
    heroImage: "/static/assets/world-fec50d02.jpg",
    metrics: [
      metric("Premium brand", "Brand role", "Role de la marque", "دور العلامة"),
      metric("Dongfeng origin", "Origin", "Origine", "المنشأ"),
      metric("Intelligent NEV", "Positioning", "Positionnement", "التموضع")
    ],
    blocks: [
      block("/static/assets/greeting-b368cd0d.jpg", "Hello world, I am Voyah!", "Bonjour le monde, je suis Voyah !", "مرحباً أيها العالم، أنا Voyah!", "A premium intelligent new-energy brand originating from Dongfeng Motor.", "Une marque haut de gamme de véhicules à énergies nouvelles intelligents issue de Dongfeng Motor.", "علامة راقية للمركبات الذكية العاملة بالطاقة الجديدة تنتمي إلى Dongfeng Motor."),
      block("/static/assets/future-6727dcc7.png", "Explore Voyah technology", "Explorer la technologie Voyah", "استكشف تقنية Voyah", "Voyah is not only a pioneer on the electric track for a central state-owned enterprise, but also a benchmark for the transformation of mature Chinese automakers.", "Voyah n est pas seulement un pionnier de la course à l électrification pour une entreprise centrale, mais aussi un nouveau repère pour la transformation des constructeurs chinois matures.", "ليست Voyah مجرد شركة رائدة في مسار الكهرباء داخل مؤسسة مركزية، بل أيضاً معياراً جديداً لتحول شركات السيارات الصينية الناضجة."),
      block("/static/assets/world-6e618fb7.png", "Leading in China, expanding globally", "Leader en Chine, déploiement mondial", "ريادة في الصين وانتشار عالمي", "The Chinese premium intelligent new-energy vehicle brand that moved from the local market to overseas markets the fastest.", "La marque chinoise haut de gamme de véhicules à énergies nouvelles intelligents qui a réalisé le passage du marché local aux marchés étrangers le plus rapidement.", "العلامة الصينية الراقية للمركبات الذكية العاملة بالطاقة الجديدة التي انتقلت من السوق المحلية إلى الأسواق الخارجية بأسرع وتيرة.")
    ],
    ctaLabel: t("Explore Voyah models", "Explorer les modèles Voyah", "استكشف طرازات Voyah"),
    ctaSlug: "titan.html"
  },
  {
    kind: "info",
    slug: "store.html",
    eyebrow: t("Store center", "Centre de magasins", "Ù…Ø±ÙƒØ² Ø§Ù„Ù…Ø¹Ø§Ø±Ø¶"),
    title: t("Store center built around the user journey", "Centre de magasins construit autour du parcours utilisateur", "Ù…Ø±ÙƒØ² Ù…Ø¹Ø§Ø±Ø¶ Ù…Ø¨Ù†ÙŠ Ø­ÙˆÙ„ Ø±Ø­Ù„Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…"),
    summary: t("Voyah stores bring together vehicle discovery, consultation, booking, delivery, and ownership support in one premium environment.", "Les espaces Voyah rÃ©unissent dÃ©couverte des vÃ©hicules, conseil, rÃ©servation, livraison et accompagnement dans un mÃªme environnement premium.", "ØªØ¬Ù…Ø¹ Ù…Ø¹Ø§Ø±Ø¶ Voyah Ø¨ÙŠÙ† Ø§ÙƒØªØ´Ø§Ù Ø§Ù„Ù…Ø±ÙƒØ¨Ø§Øª ÙˆØ§Ù„Ø§Ø³ØªØ´Ø§Ø±Ø© ÙˆØ§Ù„Ø­Ø¬Ø² ÙˆØ§Ù„ØªØ³Ù„ÙŠÙ… ÙˆØ¯Ø¹Ù… Ø§Ù„Ù…Ù„ÙƒÙŠØ© Ø¶Ù…Ù† Ø¨ÙŠØ¦Ø© ÙØ§Ø®Ø±Ø© ÙˆØ§Ø­Ø¯Ø©."),
    heroImage: "/static/assets/service_bg-047aedf5.png",
    metrics: [
      metric("Retail", "Experience type", "Type dâ€™expÃ©rience", "Ù†ÙˆØ¹ Ø§Ù„ØªØ¬Ø±Ø¨Ø©"),
      metric("1 journey", "Service flow", "Parcours de service", "Ù…Ø³Ø§Ø± Ø§Ù„Ø®Ø¯Ù…Ø©"),
      metric("Local support", "Ownership touchpoint", "Point de contact", "Ù†Ù‚Ø·Ø© Ø§Ù„ØªÙˆØ§ØµÙ„")
    ],
    blocks: [
      block("/static/assets/service-502e6c35.jpg", "Hospitality and consultation", "HospitalitÃ© et conseil", "Ø§Ù„Ø¶ÙŠØ§ÙØ© ÙˆØ§Ù„Ø§Ø³ØªØ´Ø§Ø±Ø©", "A calm reception flow helps visitors understand products, compare plans, and align the right Voyah experience to their needs.", "Un parcours dâ€™accueil apaisÃ© aide les visiteurs Ã  comprendre les produits, comparer les solutions et identifier lâ€™expÃ©rience Voyah qui leur convient.", "ÙŠØ³Ø§Ø¹Ø¯ Ù…Ø³Ø§Ø± Ø§Ø³ØªÙ‚Ø¨Ø§Ù„ Ù‡Ø§Ø¯Ø¦ Ø§Ù„Ø²ÙˆØ§Ø± Ø¹Ù„Ù‰ ÙÙ‡Ù… Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª ÙˆÙ…Ù‚Ø§Ø±Ù†Ø© Ø§Ù„Ø­Ù„ÙˆÙ„ ÙˆØªØ­Ø¯ÙŠØ¯ ØªØ¬Ø±Ø¨Ø© Voyah Ø§Ù„Ø£Ù†Ø³Ø¨ Ù„Ù‡Ù…."),
      block("/static/assets/store2-00eb05d9.png", "Model exploration", "Exploration des modÃ¨les", "Ø§Ø³ØªÙƒØ´Ø§Ù Ø§Ù„Ø·Ø±Ø§Ø²Ø§Øª", "From display vehicles to test-drive coordination, the store center is designed to move naturally from discovery to decision.", "Du vÃ©hicule exposÃ© Ã  la coordination des essais, le centre de magasins est conÃ§u pour faire passer naturellement de la dÃ©couverte Ã  la dÃ©cision.", "Ù…Ù† Ø³ÙŠØ§Ø±Ø§Øª Ø§Ù„Ø¹Ø±Ø¶ Ø¥Ù„Ù‰ ØªÙ†Ø³ÙŠÙ‚ ØªØ¬Ø§Ø±Ø¨ Ø§Ù„Ù‚ÙŠØ§Ø¯Ø©ØŒ ØµÙ…Ù… Ù…Ø±ÙƒØ² Ø§Ù„Ù…Ø¹Ø§Ø±Ø¶ Ù„Ù„Ø§Ù†ØªÙ‚Ø§Ù„ Ø¨Ø³Ù„Ø§Ø³Ø© Ù…Ù† Ø§Ù„Ø§ÙƒØªØ´Ø§Ù Ø¥Ù„Ù‰ Ø§Ù„Ù‚Ø±Ø§Ø±."),
      block("/static/assets/store3-397705c8.png", "Digital onboarding and delivery", "IntÃ©gration numÃ©rique et livraison", "Ø§Ù„ØªÙ‡ÙŠØ¦Ø© Ø§Ù„Ø±Ù‚Ù…ÙŠØ© ÙˆØ§Ù„ØªØ³Ù„ÙŠÙ…", "Configuration guidance, order follow-up, and handover support continue the premium journey beyond the visit itself.", "Le guidage de configuration, le suivi de commande et lâ€™accompagnement Ã  la remise prolongent lâ€™expÃ©rience premium au-delÃ  de la visite.", "ØªÙˆØ§ØµÙ„ Ø¥Ø±Ø´Ø§Ø¯Ø§Øª Ø§Ù„ØªØ¬Ù‡ÙŠØ² ÙˆÙ…ØªØ§Ø¨Ø¹Ø© Ø§Ù„Ø·Ù„Ø¨ ÙˆØ¯Ø¹Ù… Ø§Ù„ØªØ³Ù„Ù… Ø§Ù„Ø±Ø­Ù„Ø© Ø§Ù„ÙØ§Ø®Ø±Ø© Ø¨Ø¹Ø¯ Ø§Ù„Ø²ÙŠØ§Ø±Ø© Ù†ÙØ³Ù‡Ø§.")
    ],
    ctaLabel: t("Book a visit", "RÃ©server une visite", "Ø§Ø­Ø¬Ø² Ø²ÙŠØ§Ø±Ø©"),
    ctaSlug: "book-drive.html"
  },
  {
    kind: "info",
    slug: "service.html",
    eyebrow: t("Service", "Service", "Ø§Ù„Ø®Ø¯Ù…Ø©"),
    title: t("Voyah Service", "Service Voyah", "خدمات Voyah"),
    summary: t("You focus on chasing freedom and dreams, while we focus on protecting every journey with care.", "Vous poursuivez la liberté et les rêves, tandis que nous veillons à protéger chaque trajet avec soin.", "أنت تنطلق نحو الحرية والأحلام، ونحن نتولى حماية كل رحلة بعناية."),
    heroImage: "/static/assets/service-502e6c35.jpg",
    metrics: [
      metric("Sincere", "Reception", "Accueil", "Ø§Ù„Ø§Ø³ØªÙ‚Ø¨Ø§Ù„"),
      metric("Ceremonial", "Delivery", "Livraison", "Ø§Ù„ØªØ³Ù„ÙŠÙ…"),
      metric("7×24 h", "Protection", "Protection", "Ø§Ù„Ø­Ù…Ø§ÙŠØ©")
    ],
    blocks: [
      block("/static/assets/section3_2-4fb471c7.jpg", "Sincere reception", "Accueil sincère", "استقبال صادق", "Voyah Service follows a wholehearted service philosophy and is committed to delivering a trusted full-journey ownership experience.", "Voyah Service suit une philosophie de service entièrement dédiée et s engage à offrir une expérience de possession digne de confiance sur l ensemble du parcours.", "تلتزم Voyah Service بفلسفة خدمة تقوم على الإخلاص الكامل، وتهدف إلى تقديم تجربة ملكية موثوقة عبر الرحلة بأكملها."),
      block("/static/assets/section3_3-20237755.jpg", "Ceremonial delivery", "Livraison cérémonielle", "تسليم يحمل طابعاً احتفالياً", "Every sincere detail and every promise are treated as part of a premium handover experience.", "Chaque détail sincère et chaque engagement sont considérés comme partie intégrante d une expérience de livraison premium.", "يُنظر إلى كل تفصيل صادق وكل وعد يتم الوفاء به كجزء من تجربة تسليم فاخرة."),
      block("/static/assets/section4_1-f7cf566b.jpg", "7×24-hour protection", "Protection 7×24 h", "حماية على مدار 7×24 ساعة", "Professional teams, all-day support, and a nationwide service network protect every journey with confidence.", "Des équipes professionnelles, une assistance continue et un réseau national protègent chaque trajet avec assurance.", "توفر الفرق المتخصصة والدعم المتواصل وشبكة الخدمة الوطنية حماية موثوقة لكل رحلة.")
    ],
    ctaLabel: t("View service network", "Voir le réseau de service", "عرض شبكة الخدمة"),
    ctaSlug: "energy.html"
  },
  {
    kind: "info",
    slug: "energy.html",
    eyebrow: t("Energy", "Ã‰nergie", "Ø§Ù„Ø·Ø§Ù‚Ø©"),
    title: t("A connected energy ecosystem for users", "Un Ã©cosystÃ¨me Ã©nergÃ©tique connectÃ©", "Ù…Ù†Ø¸ÙˆÙ…Ø© Ø·Ø§Ù‚Ø© Ù…ØªØ±Ø§Ø¨Ø·Ø© Ù„Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ†"),
    summary: t("Voyah Energy links charging scenes, partner infrastructure, and digital guidance to support daily and long-distance use.", "Voyah Energy relie scÃ©narios de recharge, infrastructures partenaires et guidage numÃ©rique pour accompagner lâ€™usage quotidien et longue distance.", "ØªØ±Ø¨Ø· Ø·Ø§Ù‚Ø© Voyah Ø¨ÙŠÙ† Ø³ÙŠÙ†Ø§Ø±ÙŠÙˆÙ‡Ø§Øª Ø§Ù„Ø´Ø­Ù† ÙˆØ§Ù„Ø¨Ù†ÙŠØ© Ø§Ù„Ø´Ø±ÙŠÙƒØ© ÙˆØ§Ù„Ø¥Ø±Ø´Ø§Ø¯ Ø§Ù„Ø±Ù‚Ù…ÙŠ Ù„Ø¯Ø¹Ù… Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„ÙŠÙˆÙ…ÙŠ ÙˆØ§Ù„Ø³ÙØ± Ø§Ù„Ø·ÙˆÙŠÙ„."),
    heroImage: "/static/assets/energy_bg-4482e81f.jpg",
    metrics: [
      metric("1,540,000+", "Integrated charging resources", "Ressources de recharge intÃ©grÃ©es", "Ù…ÙˆØ§Ø±Ø¯ Ø§Ù„Ø´Ø­Ù† Ø§Ù„Ù…ØªÙƒØ§Ù…Ù„Ø©"),
      metric("16,000+", "Supercharging resources", "Ressources de supercharge", "Ù…ÙˆØ§Ø±Ø¯ Ø§Ù„Ø´Ø­Ù† Ø§Ù„ÙØ§Ø¦Ù‚"),
      metric("530M+ kWh", "Charged for users", "Recharge cumulÃ©e", "Ø¥Ø¬Ù…Ø§Ù„ÙŠ Ø§Ù„Ø´Ø­Ù† Ù„Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ†")
    ],
    blocks: [
      block("/static/assets/charge_pc-1c0a2e91.png", "Home and destination charging", "Recharge Ã  domicile et destination", "Ø§Ù„Ø´Ø­Ù† Ø§Ù„Ù…Ù†Ø²Ù„ÙŠ ÙˆØ§Ù„ÙˆØ¬Ù‡Ø©", "A broad mix of charging touchpoints helps match energy access to different ownership routines.", "Une combinaison Ã©tendue de solutions de recharge adapte lâ€™accÃ¨s Ã  lâ€™Ã©nergie aux diffÃ©rents rythmes dâ€™usage.", "ÙŠØ³Ø§Ø¹Ø¯ ØªÙ†ÙˆØ¹ Ù†Ù‚Ø§Ø· Ø§Ù„Ø´Ø­Ù† Ø¹Ù„Ù‰ Ù…ÙˆØ§Ø¡Ù…Ø© Ø§Ù„ÙˆØµÙˆÙ„ Ø¥Ù„Ù‰ Ø§Ù„Ø·Ø§Ù‚Ø© Ù…Ø¹ Ø£Ù†Ù…Ø§Ø· Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„Ù…Ø®ØªÙ„ÙØ©."),
      block("/static/assets/super_charge_pc-3886645d.png", "High-speed replenishment", "Recharge rapide", "Ø¥Ø¹Ø§Ø¯Ø© Ø´Ø­Ù† Ø³Ø±ÙŠØ¹Ø©", "Fast charging capability and partner networks reduce stop time during longer journeys.", "La recharge rapide et les rÃ©seaux partenaires rÃ©duisent le temps dâ€™arrÃªt lors des longs trajets.", "ØªÙ‚Ù„Ù„ Ù‚Ø¯Ø±Ø§Øª Ø§Ù„Ø´Ø­Ù† Ø§Ù„Ø³Ø±ÙŠØ¹ ÙˆØ§Ù„Ø´Ø¨ÙƒØ§Øª Ø§Ù„Ø´Ø±ÙŠÙƒØ© Ø²Ù…Ù† Ø§Ù„ØªÙˆÙ‚Ù ÙÙŠ Ø§Ù„Ø±Ø­Ù„Ø§Øª Ø§Ù„Ø·ÙˆÙŠÙ„Ø©."),
      block("/static/assets/V2G-cba13343.jpg", "Energy intelligence", "Intelligence Ã©nergÃ©tique", "Ø°ÙƒØ§Ø¡ Ø§Ù„Ø·Ø§Ù‚Ø©", "The energy layer is designed to be visible, guided, and integrated across the digital ownership journey.", "La couche Ã©nergie est pensÃ©e pour Ãªtre lisible, guidÃ©e et intÃ©grÃ©e dans lâ€™ensemble du parcours numÃ©rique.", "ØªÙ… ØªØµÙ…ÙŠÙ… Ø·Ø¨Ù‚Ø© Ø§Ù„Ø·Ø§Ù‚Ø© Ù„ØªÙƒÙˆÙ† ÙˆØ§Ø¶Ø­Ø© ÙˆÙ…ÙˆØ¬Ù‡Ø© ÙˆÙ…ØªÙƒØ§Ù…Ù„Ø© Ø¹Ø¨Ø± Ø§Ù„Ø±Ø­Ù„Ø© Ø§Ù„Ø±Ù‚Ù…ÙŠØ© Ù„Ù„Ù…Ù„ÙƒÙŠØ©.")
    ],
    ctaLabel: t("Read service details", "Lire les dÃ©tails de service", "Ù‚Ø±Ø§Ø¡Ø© ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ø®Ø¯Ù…Ø©"),
    ctaSlug: "service.html"
  },
  {
    kind: "info",
    slug: "corporate.html",
    eyebrow: t("About Voyah", "Ã€ propos de Voyah", "Ø¹Ù† Voyah"),
    title: t("Corporate culture and long-term brand development", "Culture dâ€™entreprise et dÃ©veloppement de long terme", "Ø§Ù„Ø«Ù‚Ø§ÙØ© Ø§Ù„Ù…Ø¤Ø³Ø³ÙŠØ© ÙˆØ§Ù„ØªØ·ÙˆØ± Ø·ÙˆÙŠÙ„ Ø§Ù„Ù…Ø¯Ù‰"),
    summary: t("Voyah positions its culture around user value, innovation, disciplined execution, and a premium mobility outlook.", "Voyah articule sa culture autour de la valeur utilisateur, de lâ€™innovation, de lâ€™exÃ©cution disciplinÃ©e et dâ€™une vision premium de la mobilitÃ©.", "ØªØ±ÙƒØ² Ø«Ù‚Ø§ÙØ© Voyah Ø¹Ù„Ù‰ Ù‚ÙŠÙ…Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… ÙˆØ§Ù„Ø§Ø¨ØªÙƒØ§Ø± ÙˆØ§Ù„ØªÙ†ÙÙŠØ° Ø§Ù„Ù…Ù†Ø¶Ø¨Ø· ÙˆØ±Ø¤ÙŠØ© ÙØ§Ø®Ø±Ø© Ù„Ù„ØªÙ†Ù‚Ù„."),
    heroImage: "/static/assets/corporate_bg_1-33cad798.png",
    blocks: [
      block("/static/assets/corporate_poster_1-c2c8c7ca.jpg", "Mission", "Mission", "Ø§Ù„Ù…Ù‡Ù…Ø©", "The brand mission emphasizes premium new-energy mobility with stronger user empathy and product clarity.", "La mission de la marque met lâ€™accent sur une mobilitÃ© premium Ã  Ã©nergie nouvelle avec plus dâ€™empathie utilisateur et de clartÃ© produit.", "ØªØ¤ÙƒØ¯ Ù…Ù‡Ù…Ø© Ø§Ù„Ø¹Ù„Ø§Ù…Ø© Ø¹Ù„Ù‰ Ø§Ù„ØªÙ†Ù‚Ù„ Ø§Ù„ÙØ§Ø®Ø± Ù„Ù„Ø·Ø§Ù‚Ø© Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø© Ù…Ø¹ ØªØ¹Ø§Ø·Ù Ø£ÙƒØ¨Ø± Ù…Ø¹ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… ÙˆÙˆØ¶ÙˆØ­ Ø£Ø¹Ù„Ù‰ ÙÙŠ Ø§Ù„Ù…Ù†ØªØ¬."),
      block("/static/assets/corporate_poster_8-7da49d74.png", "Innovation", "Innovation", "Ø§Ù„Ø§Ø¨ØªÙƒØ§Ø±", "Technology, industrial capability, and digital experience are aligned to support a coherent premium standard.", "Technologie, capacitÃ© industrielle et expÃ©rience numÃ©rique sont alignÃ©es pour soutenir un standard premium cohÃ©rent.", "ØªØªÙƒØ§Ù…Ù„ Ø§Ù„ØªÙƒÙ†ÙˆÙ„ÙˆØ¬ÙŠØ§ ÙˆØ§Ù„Ù‚Ø¯Ø±Ø© Ø§Ù„ØµÙ†Ø§Ø¹ÙŠØ© ÙˆØ§Ù„Ø®Ø¨Ø±Ø© Ø§Ù„Ø±Ù‚Ù…ÙŠØ© Ù„Ø¯Ø¹Ù… Ù…Ø¹ÙŠØ§Ø± ÙØ§Ø®Ø± Ù…ØªÙ…Ø§Ø³Ùƒ."),
      block("/static/assets/corporate_poster_14-b8674e6c.png", "Values", "Valeurs", "Ø§Ù„Ù‚ÙŠÙ…", "Long-term development depends on execution quality, responsible growth, and brand consistency.", "Le dÃ©veloppement de long terme dÃ©pend de la qualitÃ© dâ€™exÃ©cution, dâ€™une croissance responsable et dâ€™une cohÃ©rence de marque.", "ÙŠØ¹ØªÙ…Ø¯ Ø§Ù„ØªØ·ÙˆØ± Ø·ÙˆÙŠÙ„ Ø§Ù„Ù…Ø¯Ù‰ Ø¹Ù„Ù‰ Ø¬ÙˆØ¯Ø© Ø§Ù„ØªÙ†ÙÙŠØ° ÙˆØ§Ù„Ù†Ù…Ùˆ Ø§Ù„Ù…Ø³Ø¤ÙˆÙ„ ÙˆØ§Ù„Ø§ØªØ³Ø§Ù‚ ÙÙŠ Ø§Ù„Ø¹Ù„Ø§Ù…Ø©.")
    ]
  },
  {
    kind: "info",
    slug: "joinus.html",
    eyebrow: t("Careers", "CarriÃ¨res", "Ø§Ù„Ù…Ø³Ø§Ø± Ø§Ù„Ù…Ù‡Ù†ÙŠ"),
    title: t("Build the next chapter of premium new-energy mobility", "Construire la prochaine Ã©tape de la mobilitÃ© premium", "Ø¨Ù†Ø§Ø¡ Ø§Ù„ÙØµÙ„ Ø§Ù„ØªØ§Ù„ÙŠ Ù…Ù† Ø§Ù„ØªÙ†Ù‚Ù„ Ø§Ù„ÙØ§Ø®Ø± Ù„Ù„Ø·Ø§Ù‚Ø© Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø©"),
    summary: t("Voyah presents career opportunities across brand, technology, retail, service, and intelligent mobility systems.", "Voyah prÃ©sente des opportunitÃ©s de carriÃ¨re dans la marque, la technologie, le retail, le service et les systÃ¨mes de mobilitÃ© intelligente.", "ØªÙ‚Ø¯Ù… Voyah ÙØ±ØµØ§Ù‹ Ù…Ù‡Ù†ÙŠØ© Ø¹Ø¨Ø± Ø§Ù„Ø¹Ù„Ø§Ù…Ø© ÙˆØ§Ù„ØªÙ‚Ù†ÙŠØ© ÙˆØ§Ù„Ø¨ÙŠØ¹ ÙˆØ§Ù„Ø®Ø¯Ù…Ø© ÙˆØ£Ù†Ø¸Ù…Ø© Ø§Ù„ØªÙ†Ù‚Ù„ Ø§Ù„Ø°ÙƒÙŠ."),
    heroImage: "/static/assets/joinus_bg_1920-f7158f6f.png",
    blocks: [
      block("/static/assets/recruit_poster_1-679c5306.png", "Open roles", "Postes ouverts", "Ø§Ù„ÙˆØ¸Ø§Ø¦Ù Ø§Ù„Ù…ÙØªÙˆØ­Ø©", "Teams span vehicle programs, product planning, digital systems, user operations, and market development.", "Les Ã©quipes couvrent programmes vÃ©hicule, planification produit, systÃ¨mes numÃ©riques, opÃ©rations utilisateurs et dÃ©veloppement marchÃ©.", "ØªØ´Ù…Ù„ Ø§Ù„ÙØ±Ù‚ Ø¨Ø±Ø§Ù…Ø¬ Ø§Ù„Ù…Ø±ÙƒØ¨Ø§Øª ÙˆØªØ®Ø·ÙŠØ· Ø§Ù„Ù…Ù†ØªØ¬ ÙˆØ§Ù„Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ø±Ù‚Ù…ÙŠØ© ÙˆØ¹Ù…Ù„ÙŠØ§Øª Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ† ÙˆØªØ·ÙˆÙŠØ± Ø§Ù„Ø³ÙˆÙ‚."),
      block("/static/assets/recruit_poster_2-7a882da6.png", "Growth environment", "Environnement de croissance", "Ø¨ÙŠØ¦Ø© Ø§Ù„ØªØ·ÙˆØ±", "Voyah positions growth around responsibility, cross-functional collaboration, and product quality.", "Voyah place la progression sous le signe de la responsabilitÃ©, de la collaboration transversale et de la qualitÃ© produit.", "ØªØ¶Ø¹ Voyah Ø§Ù„ØªØ·ÙˆØ± ÙÙŠ Ø¥Ø·Ø§Ø± Ø§Ù„Ù…Ø³Ø¤ÙˆÙ„ÙŠØ© ÙˆØ§Ù„ØªØ¹Ø§ÙˆÙ† Ø¨ÙŠÙ† Ø§Ù„ÙˆØ¸Ø§Ø¦Ù ÙˆØ¬ÙˆØ¯Ø© Ø§Ù„Ù…Ù†ØªØ¬."),
      block("/static/assets/recruit_form_bg-107b0556.jpg", "Join the team", "Rejoindre lâ€™Ã©quipe", "Ø§Ù†Ø¶Ù… Ø¥Ù„Ù‰ Ø§Ù„ÙØ±ÙŠÙ‚", "Recruitment channels are designed to make application and role matching clearer for candidates.", "Les parcours de recrutement sont conÃ§us pour rendre la candidature et lâ€™adÃ©quation des rÃ´les plus claires.", "ØµÙ…Ù…Øª Ù‚Ù†ÙˆØ§Øª Ø§Ù„ØªÙˆØ¸ÙŠÙ Ù„Ø¬Ø¹Ù„ Ø§Ù„ØªÙ‚Ø¯ÙŠÙ… ÙˆÙ…ÙˆØ§Ø¡Ù…Ø© Ø§Ù„Ø£Ø¯ÙˆØ§Ø± Ø£ÙƒØ«Ø± ÙˆØ¶ÙˆØ­Ø§Ù‹ Ù„Ù„Ù…Ø±Ø´Ø­ÙŠÙ†.")
    ]
  },
  {
    kind: "info",
    slug: "recruit-partners.html",
    eyebrow: t("Partners", "Partenaires", "Ø§Ù„Ø´Ø±ÙƒØ§Ø¡"),
    title: t("Partner recruitment for broader service reach", "Recrutement de partenaires pour Ã©largir le service", "Ø§Ø³ØªÙ‚Ø·Ø§Ø¨ Ø§Ù„Ø´Ø±ÙƒØ§Ø¡ Ù„ØªÙˆØ³ÙŠØ¹ Ù†Ø·Ø§Ù‚ Ø§Ù„Ø®Ø¯Ù…Ø©"),
    summary: t("Voyah partner programs support expansion across retail, service touchpoints, and local operational capability.", "Les programmes partenaires de Voyah accompagnent lâ€™expansion du retail, des points de service et des capacitÃ©s opÃ©rationnelles locales.", "ØªØ¯Ø¹Ù… Ø¨Ø±Ø§Ù…Ø¬ Ø§Ù„Ø´Ø±ÙƒØ§Ø¡ Ù„Ø¯Ù‰ Voyah Ø§Ù„ØªÙˆØ³Ø¹ Ø¹Ø¨Ø± Ø§Ù„Ø¨ÙŠØ¹ ÙˆØ§Ù„Ø®Ø¯Ù…Ø© ÙˆØ§Ù„Ù‚Ø¯Ø±Ø§Øª Ø§Ù„ØªØ´ØºÙŠÙ„ÙŠØ© Ø§Ù„Ù…Ø­Ù„ÙŠØ©."),
    heroImage: "/static/assets/recruit_partners_bg_1920-81ee18a9.png",
    blocks: [
      block("/static/assets/recruit_partners_poster_1-f48b5641.jpg", "Network development", "DÃ©veloppement du rÃ©seau", "ØªØ·ÙˆÙŠØ± Ø§Ù„Ø´Ø¨ÙƒØ©", "Partner recruitment is framed around long-term market development and service consistency.", "Le recrutement de partenaires sâ€™inscrit dans une logique de dÃ©veloppement de marchÃ© Ã  long terme et de cohÃ©rence de service.", "ÙŠØªÙ… Ø§Ø³ØªÙ‚Ø·Ø§Ø¨ Ø§Ù„Ø´Ø±ÙƒØ§Ø¡ Ø¶Ù…Ù† Ø¥Ø·Ø§Ø± ØªØ·ÙˆÙŠØ± Ø§Ù„Ø³ÙˆÙ‚ Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø¯Ù‰ Ø§Ù„Ø·ÙˆÙŠÙ„ ÙˆØ§ØªØ³Ø§Ù‚ Ø§Ù„Ø®Ø¯Ù…Ø©."),
      block("/static/assets/recruit_partners_poster_5-eff94200.png", "Capability standards", "Standards de capacitÃ©", "Ù…Ø¹Ø§ÙŠÙŠØ± Ø§Ù„Ù‚Ø¯Ø±Ø©", "Operational readiness, user care, and brand presentation are core to partner evaluation.", "La prÃ©paration opÃ©rationnelle, la qualitÃ© de service et la prÃ©sentation de la marque sont centrales dans lâ€™Ã©valuation des partenaires.", "ØªØ¹Ø¯ Ø§Ù„Ø¬Ø§Ù‡Ø²ÙŠØ© Ø§Ù„ØªØ´ØºÙŠÙ„ÙŠØ© ÙˆØ§Ù„Ø¹Ù†Ø§ÙŠØ© Ø¨Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… ÙˆØªÙ‚Ø¯ÙŠÙ… Ø§Ù„Ø¹Ù„Ø§Ù…Ø© Ø¹Ù†Ø§ØµØ± Ø£Ø³Ø§Ø³ÙŠØ© ÙÙŠ ØªÙ‚ÙŠÙŠÙ… Ø§Ù„Ø´Ø±ÙƒØ§Ø¡."),
      block("/static/assets/recruit_partners_poster_9-c73e7510.jpg", "Shared growth", "Croissance partagÃ©e", "Ø§Ù„Ù†Ù…Ùˆ Ø§Ù„Ù…Ø´ØªØ±Ùƒ", "The model emphasizes durable cooperation rather than short-term channel expansion.", "Le modÃ¨le privilÃ©gie une coopÃ©ration durable plutÃ´t quâ€™une simple expansion de canal Ã  court terme.", "ÙŠØ±ÙƒØ² Ø§Ù„Ù†Ù…ÙˆØ°Ø¬ Ø¹Ù„Ù‰ ØªØ¹Ø§ÙˆÙ† Ù…Ø³ØªØ¯Ø§Ù… Ø¨Ø¯Ù„Ø§Ù‹ Ù…Ù† ØªÙˆØ³Ø¹ Ù‚Ù†ÙˆØ§Øª Ù‚ØµÙŠØ± Ø§Ù„Ø£Ù…Ø¯.")
    ]
  },
  {
    kind: "info",
    slug: "ir.html",
    eyebrow: t("Investor relations", "Relations investisseurs", "Ø¹Ù„Ø§Ù‚Ø§Øª Ø§Ù„Ù…Ø³ØªØ«Ù…Ø±ÙŠÙ†"),
    title: t("Investor-facing materials and governance information", "Informations investisseurs et gouvernance", "Ù…ÙˆØ§Ø¯ Ø§Ù„Ù…Ø³ØªØ«Ù…Ø±ÙŠÙ† ÙˆÙ…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„Ø­ÙˆÙƒÙ…Ø©"),
    summary: t("This section gathers governance references, prospectus materials, and key investor-oriented documents.", "Cette section regroupe des rÃ©fÃ©rences de gouvernance, des documents de prospectus et des contenus destinÃ©s aux investisseurs.", "ÙŠØ¬Ù…Ø¹ Ù‡Ø°Ø§ Ø§Ù„Ù‚Ø³Ù… Ù…Ø±Ø§Ø¬Ø¹ Ø§Ù„Ø­ÙˆÙƒÙ…Ø© ÙˆÙ…ÙˆØ§Ø¯ Ù†Ø´Ø±Ø© Ø§Ù„Ø¥ØµØ¯Ø§Ø± ÙˆØ§Ù„Ù…Ø³ØªÙ†Ø¯Ø§Øª Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ© Ø§Ù„Ù…ÙˆØ¬Ù‡Ø© Ù„Ù„Ù…Ø³ØªØ«Ù…Ø±ÙŠÙ†."),
    heroImage: "/static/assets/ir-3663d9c1.png",
    blocks: [
      block("/static/assets/prospectus-4ce8b045.png", "Prospectus materials", "Documents de prospectus", "Ù…ÙˆØ§Ø¯ Ù†Ø´Ø±Ø© Ø§Ù„Ø¥ØµØ¯Ø§Ø±", "Core disclosure materials are organized for structured review and reference.", "Les principaux documents de divulgation sont organisÃ©s pour une consultation et une rÃ©fÃ©rence structurÃ©es.", "ØªÙ†Ø¸Ù… Ù…ÙˆØ§Ø¯ Ø§Ù„Ø¥ÙØµØ§Ø­ Ø§Ù„Ø£Ø³Ø§Ø³ÙŠØ© Ù„Ø³Ù‡ÙˆÙ„Ø© Ø§Ù„Ù…Ø±Ø§Ø¬Ø¹Ø© ÙˆØ§Ù„Ø±Ø¬ÙˆØ¹ Ø¥Ù„ÙŠÙ‡Ø§."),
      block("/static/assets/corporate-governance-1d981bac.png", "Governance structure", "Structure de gouvernance", "Ù‡ÙŠÙƒÙ„ Ø§Ù„Ø­ÙˆÙƒÙ…Ø©", "Governance information clarifies institutional design and corporate oversight principles.", "Les informations de gouvernance clarifient lâ€™organisation institutionnelle et les principes de supervision.", "ØªÙˆØ¶Ø­ Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„Ø­ÙˆÙƒÙ…Ø© Ø§Ù„ØªØµÙ…ÙŠÙ… Ø§Ù„Ù…Ø¤Ø³Ø³ÙŠ ÙˆÙ…Ø¨Ø§Ø¯Ø¦ Ø§Ù„Ø¥Ø´Ø±Ø§Ù Ø§Ù„Ù…Ø¤Ø³Ø³ÙŠ."),
      block("/static/assets/ir2-93691f3f.png", "Reference materials", "Documents de rÃ©fÃ©rence", "Ù…ÙˆØ§Ø¯ Ù…Ø±Ø¬Ø¹ÙŠØ©", "Supporting materials provide context for financial, governance, and strategic review.", "Les documents complÃ©mentaires apportent du contexte pour la revue financiÃ¨re, stratÃ©gique et de gouvernance.", "ØªÙˆÙØ± Ø§Ù„Ù…ÙˆØ§Ø¯ Ø§Ù„Ø¯Ø§Ø¹Ù…Ø© Ø³ÙŠØ§Ù‚Ø§Ù‹ Ù„Ù„Ù…Ø±Ø§Ø¬Ø¹Ø© Ø§Ù„Ù…Ø§Ù„ÙŠØ© ÙˆØ§Ù„Ø§Ø³ØªØ±Ø§ØªÙŠØ¬ÙŠØ© ÙˆØ§Ù„Ø­ÙˆÙƒÙ…Ø©.")
    ]
  },
  {
    kind: "info",
    slug: "environmental.html",
    eyebrow: t("Environmental disclosure", "Informations environnementales", "Ø§Ù„Ø¥ÙØµØ§Ø­ Ø§Ù„Ø¨ÙŠØ¦ÙŠ"),
    title: t("Environmental and responsibility-oriented disclosures", "Informations environnementales et de responsabilitÃ©", "Ø¥ÙØµØ§Ø­Ø§Øª Ø¨ÙŠØ¦ÙŠØ© ÙˆÙ…Ø³Ø¤ÙˆÙ„ÙŠØ© Ù…Ø¤Ø³Ø³ÙŠØ©"),
    summary: t("Environmental disclosure aligns brand operations, manufacturing context, and long-term development responsibility.", "Les informations environnementales relient opÃ©rations de marque, contexte industriel et responsabilitÃ© de dÃ©veloppement Ã  long terme.", "ÙŠØ±Ø¨Ø· Ø§Ù„Ø¥ÙØµØ§Ø­ Ø§Ù„Ø¨ÙŠØ¦ÙŠ Ø¨ÙŠÙ† Ø¹Ù…Ù„ÙŠØ§Øª Ø§Ù„Ø¹Ù„Ø§Ù…Ø© ÙˆØ§Ù„Ø³ÙŠØ§Ù‚ Ø§Ù„ØµÙ†Ø§Ø¹ÙŠ ÙˆÙ…Ø³Ø¤ÙˆÙ„ÙŠØ© Ø§Ù„ØªØ·ÙˆØ± Ø·ÙˆÙŠÙ„ Ø§Ù„Ù…Ø¯Ù‰."),
    heroImage: "/static/assets/world-fec50d02.jpg",
    blocks: [
      block("/static/assets/earth_index-e4c6ae99.jpg", "Environmental view", "Vision environnementale", "Ø§Ù„Ø±Ø¤ÙŠØ© Ø§Ù„Ø¨ÙŠØ¦ÙŠØ©", "The environmental narrative is presented as part of the broader new-energy brand ecosystem.", "Le rÃ©cit environnemental sâ€™inscrit dans lâ€™Ã©cosystÃ¨me plus large de la marque Ã  Ã©nergie nouvelle.", "ÙŠÙ‚Ø¯Ù… Ø§Ù„Ø³Ø±Ø¯ Ø§Ù„Ø¨ÙŠØ¦ÙŠ ÙƒØ¬Ø²Ø¡ Ù…Ù† Ù…Ù†Ø¸ÙˆÙ…Ø© Ø£ÙˆØ³Ø¹ Ù„Ù„Ø¹Ù„Ø§Ù…Ø© Ø§Ù„Ø¹Ø§Ù…Ù„Ø© Ø¨Ø§Ù„Ø·Ø§Ù‚Ø© Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø©."),
      block("/static/assets/power_bg1-7048cd30.png", "Operational responsibility", "ResponsabilitÃ© opÃ©rationnelle", "Ø§Ù„Ù…Ø³Ø¤ÙˆÙ„ÙŠØ© Ø§Ù„ØªØ´ØºÙŠÙ„ÙŠØ©", "Responsibility extends across the way the brand grows, serves, and expands its footprint.", "La responsabilitÃ© sâ€™Ã©tend Ã  la maniÃ¨re dont la marque croÃ®t, sert ses utilisateurs et dÃ©veloppe son empreinte.", "ØªÙ…ØªØ¯ Ø§Ù„Ù…Ø³Ø¤ÙˆÙ„ÙŠØ© Ø¥Ù„Ù‰ Ø·Ø±ÙŠÙ‚Ø© Ù†Ù…Ùˆ Ø§Ù„Ø¹Ù„Ø§Ù…Ø© ÙˆØ®Ø¯Ù…ØªÙ‡Ø§ Ù„Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ† ÙˆØªÙˆØ³ÙŠØ¹ Ø­Ø¶ÙˆØ±Ù‡Ø§."),
      block("/static/assets/world-6e618fb7.png", "Long-term orientation", "Orientation de long terme", "Ø§Ù„ØªÙˆØ¬Ù‡ Ø·ÙˆÙŠÙ„ Ø§Ù„Ù…Ø¯Ù‰", "The overall frame emphasizes sustainable development rather than short-term messaging.", "Le cadre gÃ©nÃ©ral met lâ€™accent sur le dÃ©veloppement durable plutÃ´t que sur des messages de court terme.", "ÙŠØ±ÙƒØ² Ø§Ù„Ø¥Ø·Ø§Ø± Ø§Ù„Ø¹Ø§Ù… Ø¹Ù„Ù‰ Ø§Ù„ØªÙ†Ù…ÙŠØ© Ø§Ù„Ù…Ø³ØªØ¯Ø§Ù…Ø© Ù„Ø§ Ø§Ù„Ø±Ø³Ø§Ø¦Ù„ Ù‚ØµÙŠØ±Ø© Ø§Ù„Ø£Ø¬Ù„.")
    ]
  },
  {
    kind: "info",
    slug: "document.html",
    eyebrow: t("Downloads", "TÃ©lÃ©chargements", "Ø§Ù„ØªÙ†Ø²ÙŠÙ„Ø§Øª"),
    title: t("Documents and references for owners and visitors", "Documents et rÃ©fÃ©rences pour propriÃ©taires et visiteurs", "Ù…Ø³ØªÙ†Ø¯Ø§Øª ÙˆÙ…Ø±Ø§Ø¬Ø¹ Ù„Ù„Ù…Ø§Ù„ÙƒÙŠÙ† ÙˆØ§Ù„Ø²ÙˆØ§Ø±"),
    summary: t("Voyah centralizes manuals, reference documents, and service-oriented materials for easier access.", "Voyah centralise manuels, documents de rÃ©fÃ©rence et contenus de service pour un accÃ¨s simplifiÃ©.", "ØªØ¬Ù…Ø¹ Voyah Ø§Ù„Ø£Ø¯Ù„Ø© ÙˆØ§Ù„Ù…Ø³ØªÙ†Ø¯Ø§Øª Ø§Ù„Ù…Ø±Ø¬Ø¹ÙŠØ© ÙˆØ§Ù„Ù…ÙˆØ§Ø¯ Ø§Ù„Ù…Ø±ØªØ¨Ø·Ø© Ø¨Ø§Ù„Ø®Ø¯Ù…Ø© Ù„ØªØ³Ù‡ÙŠÙ„ Ø§Ù„ÙˆØµÙˆÙ„ Ø¥Ù„ÙŠÙ‡Ø§."),
    heroImage: "/static/assets/user_manual-4441c1d3.png",
    blocks: [
      block("/static/assets/user_manual-4441c1d3.png", "User manuals", "Manuels utilisateur", "Ø£Ø¯Ù„Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…", "Vehicle documents are organized to support onboarding and continued ownership use.", "Les documents vÃ©hicules sont organisÃ©s pour accompagner la prise en main puis lâ€™usage au long cours.", "ØªÙ†Ø¸Ù… Ù…Ø³ØªÙ†Ø¯Ø§Øª Ø§Ù„Ù…Ø±ÙƒØ¨Ø§Øª Ù„Ø¯Ø¹Ù… Ø§Ù„Ø¨Ø¯Ø¡ ÙÙŠ Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø«Ù… Ø§Ù„Ø§Ø³ØªÙØ§Ø¯Ø© Ø§Ù„Ù…Ø³ØªÙ…Ø±Ø© Ø£Ø«Ù†Ø§Ø¡ Ø§Ù„Ù…Ù„ÙƒÙŠØ©."),
      block("/static/assets/prospectus2-00a82650.png", "Reference files", "Fichiers de rÃ©fÃ©rence", "Ù…Ù„ÙØ§Øª Ù…Ø±Ø¬Ø¹ÙŠØ©", "Supplementary references are grouped to improve search and download clarity.", "Les rÃ©fÃ©rences complÃ©mentaires sont regroupÃ©es pour rendre la recherche et le tÃ©lÃ©chargement plus lisibles.", "ØªÙ… ØªØ¬Ù…ÙŠØ¹ Ø§Ù„Ù…Ø±Ø§Ø¬Ø¹ Ø§Ù„Ø¥Ø¶Ø§ÙÙŠØ© Ù„ØªØ­Ø³ÙŠÙ† ÙˆØ¶ÙˆØ­ Ø§Ù„Ø¨Ø­Ø« ÙˆØ§Ù„ØªÙ†Ø²ÙŠÙ„."),
      block("/static/assets/app_code_160-5b2a34cc.png", "Digital access", "AccÃ¨s numÃ©rique", "Ø§Ù„ÙˆØµÙˆÙ„ Ø§Ù„Ø±Ù‚Ù…ÙŠ", "Documents are connected to digital touchpoints to make retrieval more convenient.", "Les documents sont reliÃ©s Ã  des points de contact numÃ©riques pour simplifier leur consultation.", "ØªÙ… Ø±Ø¨Ø· Ø§Ù„Ù…Ø³ØªÙ†Ø¯Ø§Øª Ø¨Ù†Ù‚Ø§Ø· ÙˆØµÙˆÙ„ Ø±Ù‚Ù…ÙŠØ© Ù„Ø¬Ø¹Ù„ Ø§Ø³ØªØ±Ø¬Ø§Ø¹Ù‡Ø§ Ø£ÙƒØ«Ø± Ø³Ù‡ÙˆÙ„Ø©.")
    ]
  },
  {
    kind: "info",
    slug: "purchasing.html",
    eyebrow: t("Procurement", "Achats", "Ø§Ù„Ù…Ø´ØªØ±ÙŠØ§Øª"),
    title: t("Procurement and supplier collaboration context", "Contexte des achats et de la collaboration fournisseurs", "Ø³ÙŠØ§Ù‚ Ø§Ù„Ù…Ø´ØªØ±ÙŠØ§Øª ÙˆØ§Ù„ØªØ¹Ø§ÙˆÙ† Ù…Ø¹ Ø§Ù„Ù…ÙˆØ±Ø¯ÙŠÙ†"),
    summary: t("Voyah procurement emphasizes capability, quality, and long-term supplier collaboration across a growing ecosystem.", "Les achats Voyah mettent lâ€™accent sur la capacitÃ©, la qualitÃ© et la collaboration fournisseur de long terme dans un Ã©cosystÃ¨me en croissance.", "ØªØ±ÙƒØ² Ù…Ø´ØªØ±ÙŠØ§Øª Voyah Ø¹Ù„Ù‰ Ø§Ù„ÙƒÙØ§Ø¡Ø© ÙˆØ§Ù„Ø¬ÙˆØ¯Ø© ÙˆØ§Ù„ØªØ¹Ø§ÙˆÙ† Ø·ÙˆÙŠÙ„ Ø§Ù„Ù…Ø¯Ù‰ Ù…Ø¹ Ø§Ù„Ù…ÙˆØ±Ø¯ÙŠÙ† Ø¶Ù…Ù† Ù…Ù†Ø¸ÙˆÙ…Ø© Ù…ØªÙ†Ø§Ù…ÙŠØ©."),
    heroImage: "/static/assets/partner_pc-b12d249b.png",
    blocks: [
      block("/static/assets/partner_pc-b12d249b.png", "Supplier network", "RÃ©seau fournisseurs", "Ø´Ø¨ÙƒØ© Ø§Ù„Ù…ÙˆØ±Ø¯ÙŠÙ†", "Supplier collaboration is framed around shared quality standards and industrial coordination.", "La collaboration fournisseurs sâ€™appuie sur des standards qualitÃ© communs et une coordination industrielle solide.", "ÙŠÙ‚ÙˆÙ… Ø§Ù„ØªØ¹Ø§ÙˆÙ† Ù…Ø¹ Ø§Ù„Ù…ÙˆØ±Ø¯ÙŠÙ† Ø¹Ù„Ù‰ Ù…Ø¹Ø§ÙŠÙŠØ± Ø¬ÙˆØ¯Ø© Ù…Ø´ØªØ±ÙƒØ© ÙˆØªÙ†Ø³ÙŠÙ‚ ØµÙ†Ø§Ø¹ÙŠ Ù‚ÙˆÙŠ."),
      block("/static/assets/charge_pile_bg-2c7b414e.png", "Capability alignment", "Alignement des capacitÃ©s", "Ù…ÙˆØ§Ø¡Ù…Ø© Ø§Ù„Ù‚Ø¯Ø±Ø§Øª", "The procurement model values consistency, delivery reliability, and structured cooperation.", "Le modÃ¨le dâ€™achats valorise la constance, la fiabilitÃ© dâ€™exÃ©cution et une coopÃ©ration structurÃ©e.", "ÙŠÙ‚Ø¯Ù‘Ø± Ù†Ù…ÙˆØ°Ø¬ Ø§Ù„Ù…Ø´ØªØ±ÙŠØ§Øª Ø§Ù„Ø§ØªØ³Ø§Ù‚ ÙˆØ§Ù„Ù…ÙˆØ«ÙˆÙ‚ÙŠØ© ÙÙŠ Ø§Ù„ØªØ³Ù„ÙŠÙ… ÙˆØ§Ù„ØªØ¹Ø§ÙˆÙ† Ø§Ù„Ù…Ù†Ø¸Ù…."),
      block("/static/assets/power_bg2-a6639f1e.png", "Long-term development", "DÃ©veloppement long terme", "Ø§Ù„ØªØ·ÙˆØ± Ø·ÙˆÙŠÙ„ Ø§Ù„Ù…Ø¯Ù‰", "Partnerships are positioned as durable capability building rather than transactional sourcing alone.", "Les partenariats sont pensÃ©s comme une construction durable de capacitÃ©s et non comme un simple sourcing transactionnel.", "ØªÙÙÙ‡Ù… Ø§Ù„Ø´Ø±Ø§ÙƒØ§Øª Ø¨Ø§Ø¹ØªØ¨Ø§Ø±Ù‡Ø§ Ø¨Ù†Ø§Ø¡ Ù‚Ø¯Ø±Ø§Øª Ù…Ø³ØªØ¯Ø§Ù…Ø§Ù‹ Ù„Ø§ Ù…Ø¬Ø±Ø¯ ØªÙˆØ±ÙŠØ¯ ØªØ¹Ø§Ù‚Ø¯ÙŠ.")
    ]
  },
  {
    kind: "info",
    slug: "book-drive.html",
    eyebrow: t("Experience", "ExpÃ©rience", "Ø§Ù„ØªØ¬Ø±Ø¨Ø©"),
    title: t("Book a test drive with the Voyah lineup", "RÃ©server un essai avec la gamme Voyah", "Ø§Ø­Ø¬Ø² ØªØ¬Ø±Ø¨Ø© Ù‚ÙŠØ§Ø¯Ø© Ù…Ø¹ Ù…Ø¬Ù…ÙˆØ¹Ø© Voyah"),
    summary: t("Test-drive booking is connected to product consultation, store support, and guided model selection.", "La rÃ©servation dâ€™essai est reliÃ©e au conseil produit, au support magasin et Ã  lâ€™orientation vers le modÃ¨le adaptÃ©.", "ÙŠØ±ØªØ¨Ø· Ø­Ø¬Ø² ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù‚ÙŠØ§Ø¯Ø© Ø¨Ø§Ø³ØªØ´Ø§Ø±Ø© Ø§Ù„Ù…Ù†ØªØ¬ ÙˆØ¯Ø¹Ù… Ø§Ù„Ù…Ø¹Ø±Ø¶ ÙˆØªÙˆØ¬ÙŠÙ‡ Ø§Ø®ØªÙŠØ§Ø± Ø§Ù„Ø·Ø±Ø§Ø² Ø§Ù„Ù…Ù†Ø§Ø³Ø¨."),
    heroImage: "/static/assets/drive1-2ff63958.png",
    blocks: [
      block("/static/assets/drive2-aa10c694.png", "Guided selection", "Choix guidÃ©", "Ø§Ø®ØªÙŠØ§Ø± Ù…ÙˆØ¬Ù‘Ù‡", "Prospective owners can narrow the lineup through usage needs, size preferences, and vehicle character.", "Les futurs clients peuvent affiner leur choix selon lâ€™usage, les prÃ©fÃ©rences dâ€™espace et le caractÃ¨re du vÃ©hicule.", "ÙŠÙ…ÙƒÙ† Ù„Ù„Ø¹Ù…Ù„Ø§Ø¡ Ø§Ù„Ù…Ø­ØªÙ…Ù„ÙŠÙ† ØªØ¶ÙŠÙŠÙ‚ Ø§Ù„Ø§Ø®ØªÙŠØ§Ø± ÙˆÙÙ‚ Ø§Ù„Ø§Ø­ØªÙŠØ§Ø¬Ø§Øª ÙˆØ·Ø¨ÙŠØ¹Ø© Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… ÙˆØªÙØ¶ÙŠÙ„Ø§Øª Ø§Ù„Ø­Ø¬Ù…."),
      block("/static/assets/store3-fe6e8d7d.jpg", "Store coordination", "Coordination magasin", "ØªÙ†Ø³ÙŠÙ‚ Ø§Ù„Ù…Ø¹Ø±Ø¶", "The booking flow connects directly to physical service and retail support touchpoints.", "Le parcours de rÃ©servation se connecte directement aux points de service et dâ€™accompagnement en magasin.", "ÙŠØ±ØªØ¨Ø· Ù…Ø³Ø§Ø± Ø§Ù„Ø­Ø¬Ø² Ù…Ø¨Ø§Ø´Ø±Ø© Ø¨Ù†Ù‚Ø§Ø· Ø§Ù„Ø®Ø¯Ù…Ø© ÙˆØ§Ù„Ø¯Ø¹Ù… Ø¯Ø§Ø®Ù„ Ø§Ù„Ù…Ø¹Ø±Ø¶."),
      block("/static/assets/life_center_poster-fb653778.png", "Ownership onboarding", "Prise en main", "ØªÙ‡ÙŠØ¦Ø© Ø§Ù„Ù…Ù„ÙƒÙŠØ©", "Test drives support not only discovery but also a clearer understanding of the ownership experience.", "Lâ€™essai ne sert pas seulement Ã  dÃ©couvrir le produit, mais aussi Ã  mieux comprendre lâ€™expÃ©rience de possession.", "Ù„Ø§ ØªØ®Ø¯Ù… ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù‚ÙŠØ§Ø¯Ø© Ø§Ù„Ø§ÙƒØªØ´Ø§Ù ÙÙ‚Ø· Ø¨Ù„ ØªØ³Ø§Ø¹Ø¯ Ø£ÙŠØ¶Ø§Ù‹ Ø¹Ù„Ù‰ ÙÙ‡Ù… Ø£ÙˆØ¶Ø­ Ù„ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù…Ù„ÙƒÙŠØ©.")
    ],
    ctaLabel: t("Visit store center", "Visiter le centre de magasins", "Ø²ÙŠØ§Ø±Ø© Ù…Ø±ÙƒØ² Ø§Ù„Ù…Ø¹Ø§Ø±Ø¶"),
    ctaSlug: "store.html"
  }
];
const legalPages = [
  {
    kind: "legal",
    slug: "legal.html",
    eyebrow: t("Legal", "Mentions lÃ©gales", "Ø§Ù„Ø´Ø¤ÙˆÙ† Ø§Ù„Ù‚Ø§Ù†ÙˆÙ†ÙŠØ©"),
    title: t("Legal information", "Informations lÃ©gales", "Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ù‚Ø§Ù†ÙˆÙ†ÙŠØ©"),
    summary: t("Legal notices for the local Voyah reconstruction environment.", "Mentions lÃ©gales pour lâ€™environnement local reconstruit de Voyah.", "Ø¥Ø´Ø¹Ø§Ø±Ø§Øª Ù‚Ø§Ù†ÙˆÙ†ÙŠØ© Ù„Ø¨ÙŠØ¦Ø© Voyah Ø§Ù„Ù…Ø­Ù„ÙŠØ© Ø§Ù„Ù…Ø¹Ø§Ø¯ Ø¨Ù†Ø§Ø¤Ù‡Ø§."),
    sections: [
      {
        title: t("Ownership", "PropriÃ©tÃ©", "Ø§Ù„Ù…Ù„ÙƒÙŠØ©"),
        paragraphs: [
          t("All site assets in this project are served locally within the Nuxt application.", "Tous les contenus de ce projet sont servis localement dans lâ€™application Nuxt.", "ÙŠØªÙ… ØªÙ‚Ø¯ÙŠÙ… Ø¬Ù…ÙŠØ¹ Ø£ØµÙˆÙ„ Ù‡Ø°Ø§ Ø§Ù„Ù…Ø´Ø±ÙˆØ¹ Ù…Ø­Ù„ÙŠØ§Ù‹ Ø¯Ø§Ø®Ù„ ØªØ·Ø¨ÙŠÙ‚ Nuxt."),
          t("The brand name Voyah remains unchanged in every locale.", "Le nom de marque Voyah reste inchangÃ© dans toutes les langues.", "ÙŠØ¨Ù‚Ù‰ Ø§Ø³Ù… Ø§Ù„Ø¹Ù„Ø§Ù…Ø© Voyah Ø¯ÙˆÙ† ØªØºÙŠÙŠØ± ÙÙŠ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ù„ØºØ§Øª.")
        ]
      },
      {
        title: t("Use of content", "Utilisation du contenu", "Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„Ù…Ø­ØªÙˆÙ‰"),
        paragraphs: [
          t("This implementation is structured as reusable local components and localized content records.", "Cette implÃ©mentation est structurÃ©e sous forme de composants locaux rÃ©utilisables et de contenus localisÃ©s.", "ØªÙ…Øª Ù‡ÙŠÙƒÙ„Ø© Ù‡Ø°Ø§ Ø§Ù„ØªÙ†ÙÙŠØ° ÙƒÙ…ÙƒÙˆÙ†Ø§Øª Ù…Ø­Ù„ÙŠØ© Ù‚Ø§Ø¨Ù„Ø© Ù„Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… ÙˆØ³Ø¬Ù„Ø§Øª Ù…Ø­ØªÙˆÙ‰ Ù…ØªØ±Ø¬Ù…Ø©.")
        ]
      }
    ]
  },
  {
    kind: "legal",
    slug: "privacy.html",
    eyebrow: t("Privacy", "ConfidentialitÃ©", "Ø§Ù„Ø®ØµÙˆØµÙŠØ©"),
    title: t("Privacy notice", "Avis de confidentialitÃ©", "Ø¥Ø´Ø¹Ø§Ø± Ø§Ù„Ø®ØµÙˆØµÙŠØ©"),
    summary: t("Privacy-oriented notice for this static local site build.", "Avis relatif Ã  la confidentialitÃ© pour cette version locale statique du site.", "Ø¥Ø´Ø¹Ø§Ø± Ù…ØªØ¹Ù„Ù‚ Ø¨Ø§Ù„Ø®ØµÙˆØµÙŠØ© Ù„Ù‡Ø°Ø§ Ø§Ù„Ø¨Ù†Ø§Ø¡ Ø§Ù„Ù…Ø­Ù„ÙŠ Ø§Ù„Ø«Ø§Ø¨Øª Ù„Ù„Ù…ÙˆÙ‚Ø¹."),
    sections: [
      {
        title: t("Static delivery", "Livraison statique", "Ø§Ù„ØªØ³Ù„ÙŠÙ… Ø§Ù„Ø«Ø§Ø¨Øª"),
        paragraphs: [
          t("This project is generated as static pages without remote runtime content dependencies.", "Ce projet est gÃ©nÃ©rÃ© en pages statiques sans dÃ©pendances de contenu distantes au runtime.", "ÙŠØªÙ… ØªÙˆÙ„ÙŠØ¯ Ù‡Ø°Ø§ Ø§Ù„Ù…Ø´Ø±ÙˆØ¹ ÙƒØµÙØ­Ø§Øª Ø«Ø§Ø¨ØªØ© Ù…Ù† Ø¯ÙˆÙ† ØªØ¨Ø¹ÙŠØ§Øª Ù…Ø­ØªÙˆÙ‰ Ø¨Ø¹ÙŠØ¯Ø© Ø£Ø«Ù†Ø§Ø¡ Ø§Ù„ØªØ´ØºÙŠÙ„.")
        ]
      },
      {
        title: t("Local assets", "Ressources locales", "Ø§Ù„Ø£ØµÙˆÙ„ Ø§Ù„Ù…Ø­Ù„ÙŠØ©"),
        paragraphs: [
          t("Images, videos, fonts, and page content are hosted locally in the project.", "Les images, vidÃ©os, polices et contenus de page sont hÃ©bergÃ©s localement dans le projet.", "ØªØªÙ… Ø§Ø³ØªØ¶Ø§ÙØ© Ø§Ù„ØµÙˆØ± ÙˆØ§Ù„ÙÙŠØ¯ÙŠÙˆÙ‡Ø§Øª ÙˆØ§Ù„Ø®Ø·ÙˆØ· ÙˆÙ…Ø­ØªÙˆÙ‰ Ø§Ù„ØµÙØ­Ø§Øª Ù…Ø­Ù„ÙŠØ§Ù‹ Ø¯Ø§Ø®Ù„ Ø§Ù„Ù…Ø´Ø±ÙˆØ¹.")
        ]
      }
    ]
  },
  {
    kind: "legal",
    slug: "cookie.html",
    eyebrow: t("Cookies", "Cookies", "Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø·"),
    title: t("Cookie notice", "Avis sur les cookies", "Ø¥Ø´Ø¹Ø§Ø± Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø·"),
    summary: t("Cookie-related guidance for the local static implementation.", "Informations relatives aux cookies pour lâ€™implÃ©mentation statique locale.", "Ø¥Ø±Ø´Ø§Ø¯Ø§Øª Ø®Ø§ØµØ© Ø¨Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ù„Ù„ØªÙ†ÙÙŠØ° Ø§Ù„Ù…Ø­Ù„ÙŠ Ø§Ù„Ø«Ø§Ø¨Øª."),
    sections: [
      {
        title: t("Local experience", "ExpÃ©rience locale", "Ø§Ù„ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù…Ø­Ù„ÙŠØ©"),
        paragraphs: [
          t("The site is built for local delivery and does not rely on the original remote website.", "Le site est conÃ§u pour une diffusion locale et ne dÃ©pend pas du site distant dâ€™origine.", "ØªÙ… Ø¨Ù†Ø§Ø¡ Ø§Ù„Ù…ÙˆÙ‚Ø¹ Ù„Ù„ØªÙ‚Ø¯ÙŠÙ… Ø§Ù„Ù…Ø­Ù„ÙŠ ÙˆÙ„Ø§ ÙŠØ¹ØªÙ…Ø¯ Ø¹Ù„Ù‰ Ø§Ù„Ù…ÙˆÙ‚Ø¹ Ø§Ù„Ø£ØµÙ„ÙŠ Ø§Ù„Ø¨Ø¹ÙŠØ¯.")
        ]
      },
      {
        title: t("Client behavior", "Comportement client", "Ø³Ù„ÙˆÙƒ Ø§Ù„Ø¹Ù…ÙŠÙ„"),
        paragraphs: [
          t("Any browser-level behavior depends on the local app bundle generated by Nuxt.", "Tout comportement cÃ´tÃ© navigateur dÃ©pend du bundle local gÃ©nÃ©rÃ© par Nuxt.", "ÙŠØ¹ØªÙ…Ø¯ Ø£ÙŠ Ø³Ù„ÙˆÙƒ Ø¹Ù„Ù‰ Ù…Ø³ØªÙˆÙ‰ Ø§Ù„Ù…ØªØµÙØ­ Ø¹Ù„Ù‰ Ø§Ù„Ø­Ø²Ù…Ø© Ø§Ù„Ù…Ø­Ù„ÙŠØ© Ø§Ù„ØªÙŠ ÙŠÙˆÙ„Ø¯Ù‡Ø§ Nuxt.")
        ]
      }
    ]
  },
  {
    kind: "legal",
    slug: "authorization.html",
    eyebrow: t("Authorization", "Autorisation", "Ø§Ù„ØªÙÙˆÙŠØ¶"),
    title: t("Authorization statement", "DÃ©claration dâ€™autorisation", "Ø¨ÙŠØ§Ù† Ø§Ù„ØªÙÙˆÙŠØ¶"),
    summary: t("Authorization-oriented statement for use of the local project implementation.", "DÃ©claration dâ€™autorisation relative Ã  lâ€™usage de lâ€™implÃ©mentation locale du projet.", "Ø¨ÙŠØ§Ù† Ù…ØªØ¹Ù„Ù‚ Ø¨Ø§Ù„ØªÙÙˆÙŠØ¶ Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… ØªÙ†ÙÙŠØ° Ø§Ù„Ù…Ø´Ø±ÙˆØ¹ Ø§Ù„Ù…Ø­Ù„ÙŠ."),
    sections: [
      {
        title: t("Project scope", "PÃ©rimÃ¨tre du projet", "Ù†Ø·Ø§Ù‚ Ø§Ù„Ù…Ø´Ø±ÙˆØ¹"),
        paragraphs: [
          t("The current implementation is a local Nuxt reconstruction using reusable page components and local media.", "Lâ€™implÃ©mentation actuelle est une reconstruction Nuxt locale utilisant des composants de page rÃ©utilisables et des mÃ©dias locaux.", "Ø§Ù„ØªÙ†ÙÙŠØ° Ø§Ù„Ø­Ø§Ù„ÙŠ Ø¹Ø¨Ø§Ø±Ø© Ø¹Ù† Ø¥Ø¹Ø§Ø¯Ø© Ø¨Ù†Ø§Ø¡ Ù…Ø­Ù„ÙŠØ© Ø¨Ù€ Nuxt Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Ù…ÙƒÙˆÙ†Ø§Øª ØµÙØ­Ø§Øª Ù‚Ø§Ø¨Ù„Ø© Ù„Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… ÙˆÙˆØ³Ø§Ø¦Ø· Ù…Ø­Ù„ÙŠØ©.")
        ]
      },
      {
        title: t("Brand handling", "Gestion de marque", "Ø§Ù„ØªØ¹Ø§Ù…Ù„ Ù…Ø¹ Ø§Ù„Ø¹Ù„Ø§Ù…Ø©"),
        paragraphs: [
          t("Voyah remains the exact brand name across English, French, and Arabic locales.", "Voyah reste le nom de marque exact en anglais, franÃ§ais et arabe.", "ØªØ¸Ù„ Voyah Ø§Ø³Ù… Ø§Ù„Ø¹Ù„Ø§Ù…Ø© Ø§Ù„Ø¯Ù‚ÙŠÙ‚ ÙÙŠ Ø§Ù„Ù„ØºØ§Øª Ø§Ù„Ø¥Ù†Ø¬Ù„ÙŠØ²ÙŠØ© ÙˆØ§Ù„ÙØ±Ù†Ø³ÙŠØ© ÙˆØ§Ù„Ø¹Ø±Ø¨ÙŠØ©.")
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
      description: t("A new-era flagship six-seat SUV", "Un SUV phare Ã  six places de nouvelle gÃ©nÃ©ration", "Ø³ÙŠØ§Ø±Ø© SUV Ø±Ø§Ø¦Ø¯Ø© Ø¨Ø³ØªØ© Ù…Ù‚Ø§Ø¹Ø¯ Ù…Ù† Ø§Ù„Ø¬ÙŠÙ„ Ø§Ù„Ø¬Ø¯ÙŠØ¯"),
      primaryLabel: t("Learn more", "En savoir plus", "Ø§Ø¹Ø±Ù Ø§Ù„Ù…Ø²ÙŠØ¯"),
      secondaryLabel: t("Order now", "Commander", "Ø§Ø·Ù„Ø¨ Ø§Ù„Ø¢Ù†"),
      primarySlug: "titan.html",
      secondarySlug: "store.html"
    },
    {
      image: "/website/advertisingbanner/image/23ab9c33-78a4-4bff-bb69-83fe117820a31770618259885.png",
      video: "/website/advertisingbanner/video/785c4160-8515-46a2-8bc9-a4f7b1907c0c1770618243037.mp4",
      logo: "/website/advertisingbanner/image/5be64d32-9133-4283-8994-3350cca635d81770618274334.png",
      title: t("", "", ""),
      description: t("A new-era flagship MPV", "Un monospace phare de nouvelle gÃ©nÃ©ration", "Ø³ÙŠØ§Ø±Ø© MPV Ø±Ø§Ø¦Ø¯Ø© Ù…Ù† Ø§Ù„Ø¬ÙŠÙ„ Ø§Ù„Ø¬Ø¯ÙŠØ¯"),
      primaryLabel: t("Learn more", "En savoir plus", "Ø§Ø¹Ø±Ù Ø§Ù„Ù…Ø²ÙŠØ¯"),
      secondaryLabel: t("Order now", "Commander", "Ø§Ø·Ù„Ø¨ Ø§Ù„Ø¢Ù†"),
      primarySlug: "newDreamer26.html",
      secondarySlug: "store.html"
    },
    {
      image: "/website/advertisingbanner/image/2ba443dd-2869-4f27-89ca-d3fc8da9908d1770618446896.png",
      video: "/website/advertisingbanner/video/1779ce91-787b-4a77-9fec-1deb13fedeb31770618459950.mp4",
      logo: "/website/advertisingbanner/image/9c751c14-cd46-439c-b9de-5a7d595655991770618438688.png",
      title: t("", "", ""),
      description: t("A new-era flagship sedan", "Une berline phare de nouvelle gÃ©nÃ©ration", "Ø³ÙŠØ¯Ø§Ù† Ø±Ø§Ø¦Ø¯Ø© Ù…Ù† Ø§Ù„Ø¬ÙŠÙ„ Ø§Ù„Ø¬Ø¯ÙŠØ¯"),
      primaryLabel: t("Learn more", "En savoir plus", "Ø§Ø¹Ø±Ù Ø§Ù„Ù…Ø²ÙŠØ¯"),
      secondaryLabel: t("Order now", "Commander", "Ø§Ø·Ù„Ø¨ Ø§Ù„Ø¢Ù†"),
      primarySlug: "passion-L.html",
      secondarySlug: "store.html"
    },
    {
      image: "/website/advertisingbanner/image/1ea30c18-f0ea-4b91-9c51-dddc46c589981770618535951.png",
      video: "/website/advertisingbanner/video/e33e96dc-3430-4882-946d-62abdf88dc0d1770618522586.mp4",
      logo: "/website/advertisingbanner/image/05088b2b-9041-4d17-8730-ab52def1319e1770618558478.png",
      title: t("", "", ""),
      description: t("SUV with Huawei intelligent driving and Harmony cockpit", "SUV avec conduite intelligente Huawei et cockpit Harmony", "Ø³ÙŠØ§Ø±Ø© SUV Ù…Ø²ÙˆØ¯Ø© Ø¨Ù‚ÙŠØ§Ø¯Ø© Ø°ÙƒÙŠØ© Ù…Ù† Huawei ÙˆÙ…Ù‚ØµÙˆØ±Ø© Harmony"),
      primaryLabel: t("Learn more", "En savoir plus", "Ø§Ø¹Ø±Ù Ø§Ù„Ù…Ø²ÙŠØ¯"),
      secondaryLabel: t("Order now", "Commander", "Ø§Ø·Ù„Ø¨ Ø§Ù„Ø¢Ù†"),
      primarySlug: "free+.html",
      secondarySlug: "store.html"
    },
    {
      image: "/website/advertisingbanner/image/09cb36df-deb5-48b2-9b7a-adee59f6b0c81770618611011.png",
      video: "/website/advertisingbanner/video/7d8f79a2-9614-47e0-b336-5f660d63ad171770618641574.mp4",
      logo: "/website/advertisingbanner/image/ef3b7afe-0f2b-4f6f-b575-4679c59d8c3a1770618630272.png",
      title: t("", "", ""),
      description: t(
        "Pure-electric SUV with Huawei intelligent driving and Harmony cockpit",
        "SUV 100 % Ã©lectrique avec conduite intelligente Huawei et cockpit Harmony",
        "Ø³ÙŠØ§Ø±Ø© SUV ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© Ø¨Ø§Ù„ÙƒØ§Ù…Ù„ Ù…Ø²ÙˆØ¯Ø© Ø¨Ù‚ÙŠØ§Ø¯Ø© Ø°ÙƒÙŠØ© Ù…Ù† Huawei ÙˆÙ…Ù‚ØµÙˆØ±Ø© Harmony"
      ),
      primaryLabel: t("Learn more", "En savoir plus", "Ø§Ø¹Ø±Ù Ø§Ù„Ù…Ø²ÙŠØ¯"),
      secondaryLabel: t("Order now", "Commander", "Ø§Ø·Ù„Ø¨ Ø§Ù„Ø¢Ù†"),
      primarySlug: "newCourage.html",
      secondarySlug: "store.html"
    }
  ],
  brandIntro: {
    title: t("Hello world, I am Voyah!", "Bonjour le monde, je suis Voyah !", "Ù…Ø±Ø­Ø¨Ø§Ù‹ Ø£ÙŠÙ‡Ø§ Ø§Ù„Ø¹Ø§Ù„Ù…ØŒ Ø£Ù†Ø§ Voyah!"),
    body: t(
      "A premium intelligent new-energy brand originating from Dongfeng Motor.",
      "Une marque haut de gamme de vÃ©hicules Ã  Ã©nergies nouvelles intelligents issue de Dongfeng Motor.",
      "Ø¹Ù„Ø§Ù…Ø© Ø±Ø§Ù‚ÙŠØ© Ù„Ù„Ù…Ø±ÙƒØ¨Ø§Øª Ø§Ù„Ø°ÙƒÙŠØ© Ø§Ù„Ø¹Ø§Ù…Ù„Ø© Ø¨Ø§Ù„Ø·Ø§Ù‚Ø© Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø© ØªÙ†ØªÙ…ÙŠ Ø¥Ù„Ù‰ Dongfeng Motor."
    ),
    cta: t("Discover the brand", "DÃ©couvrir la marque", "Ø§ÙƒØªØ´Ù Ø§Ù„Ø¹Ù„Ø§Ù…Ø©"),
    image: "/static/assets/world-fec50d02.jpg"
  },
  modelsTitle: t("Explore Voyah models", "Explorer les modÃ¨les Voyah", "Ø§Ø³ØªÙƒØ´Ù Ø·Ø±Ø§Ø²Ø§Øª Voyah"),
  modelsBody: t("", "", ""),
  models: [
    {
      slug: "titan.html",
      image: "/website/advertisingseries/image/4a4ba784-9bdc-4842-a3cf-22e2b1e46d761770618807747.jpg",
      title: t("Voyah Titan", "Voyah Titan", "Voyah Titan"),
      category: t(
        "A new-era flagship six-seat SUV",
        "Un SUV phare six places de nouvelle gÃ©nÃ©ration",
        "Ø³ÙŠØ§Ø±Ø© SUV Ø±Ø§Ø¦Ø¯Ø© Ø¨Ø³ØªØ© Ù…Ù‚Ø§Ø¹Ø¯ Ù…Ù† Ø§Ù„Ø¬ÙŠÙ„ Ø§Ù„Ø¬Ø¯ÙŠØ¯"
      ),
      metrics: [
        metric("5000 mm", "Length", "Longueur", "Ø§Ù„Ø·ÙˆÙ„"),
        metric("1995 mm", "Width", "Largeur", "Ø§Ù„Ø¹Ø±Ø¶"),
        metric("1820 mm", "Height", "Hauteur", "Ø§Ù„Ø§Ø±ØªÙØ§Ø¹")
      ]
    },
    {
      slug: "newDreamer26.html",
      image: "/website/advertisingseries/image/7ef23102-331e-418d-9139-72a7c77264011770618843718.jpg",
      title: t("26 Voyah Dreamer", "Voyah Dreamer 26", "Voyah Dreamer 26"),
      category: t("A new-era flagship MPV", "Un monospace phare de nouvelle gÃ©nÃ©ration", "Ø³ÙŠØ§Ø±Ø© MPV Ø±Ø§Ø¦Ø¯Ø© Ù…Ù† Ø§Ù„Ø¬ÙŠÙ„ Ø§Ù„Ø¬Ø¯ÙŠØ¯"),
      metrics: [
        metric("MPV", "Body type", "Carrosserie", "Ù†ÙˆØ¹ Ø§Ù„Ù‡ÙŠÙƒÙ„"),
        metric("Flagship", "Positioning", "Positionnement", "Ø§Ù„ÙØ¦Ø©"),
        metric("Six / seven seats", "Seating", "Places", "Ø¹Ø¯Ø¯ Ø§Ù„Ù…Ù‚Ø§Ø¹Ø¯")
      ]
    },
    {
      slug: "passion-L.html",
      image: "/website/advertisingseries/image/c6a84270-5367-4b46-9bbb-ca363039b20f1770618873239.jpg",
      title: t("Voyah Passion L", "Voyah Passion L", "Voyah Passion L"),
      category: t("A new-era flagship sedan", "Une berline phare de nouvelle gÃ©nÃ©ration", "Ø³ÙŠØ¯Ø§Ù† Ø±Ø§Ø¦Ø¯Ø© Ù…Ù† Ø§Ù„Ø¬ÙŠÙ„ Ø§Ù„Ø¬Ø¯ÙŠØ¯"),
      metrics: [
        metric("Sedan", "Body type", "Carrosserie", "Ù†ÙˆØ¹ Ø§Ù„Ù‡ÙŠÙƒÙ„"),
        metric("Flagship", "Positioning", "Positionnement", "Ø§Ù„ÙØ¦Ø©"),
        metric("Executive luxury", "Experience", "ExpÃ©rience", "Ø§Ù„ØªØ¬Ø±Ø¨Ø©")
      ]
    },
    {
      slug: "free+.html",
      image: "/website/advertisingseries/image/e8a95859-ce35-4110-8156-b9f6a9c3365d1770618911247.jpg",
      title: t("Voyah FREE+", "Voyah FREE+", "Voyah FREE+"),
      category: t(
        "SUV with Huawei intelligent driving and Harmony cockpit",
        "SUV avec conduite intelligente Huawei et cockpit Harmony",
        "Ø³ÙŠØ§Ø±Ø© SUV Ù…Ø²ÙˆØ¯Ø© Ø¨Ù‚ÙŠØ§Ø¯Ø© Ø°ÙƒÙŠØ© Ù…Ù† Huawei ÙˆÙ…Ù‚ØµÙˆØ±Ø© Harmony"
      ),
      metrics: [
        metric("SUV", "Body type", "Carrosserie", "Ù†ÙˆØ¹ Ø§Ù„Ù‡ÙŠÙƒÙ„"),
        metric("Huawei ADS", "Driving tech", "Conduite intelligente", "ØªÙ‚Ù†ÙŠØ© Ø§Ù„Ù‚ÙŠØ§Ø¯Ø©"),
        metric("Harmony cockpit", "Cabin", "Cockpit", "Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø©")
      ]
    },
    {
      slug: "newCourage.html",
      image: "/website/advertisingseries/image/927d6e8d-3182-420f-891e-0f47c492d9141770618945147.jpg",
      title: t("New Voyah Courage", "Nouveau Voyah Courage", "Voyah Courage Ø§Ù„Ø¬Ø¯ÙŠØ¯"),
      category: t(
        "Pure-electric SUV with Huawei intelligent driving and Harmony cockpit",
        "SUV 100 % Ã©lectrique avec conduite intelligente Huawei et cockpit Harmony",
        "Ø³ÙŠØ§Ø±Ø© SUV ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© Ø¨Ø§Ù„ÙƒØ§Ù…Ù„ Ù…Ø²ÙˆØ¯Ø© Ø¨Ù‚ÙŠØ§Ø¯Ø© Ø°ÙƒÙŠØ© Ù…Ù† Huawei ÙˆÙ…Ù‚ØµÙˆØ±Ø© Harmony"
      ),
      metrics: [
        metric("Pure electric", "Powertrain", "Motorisation", "Ù…Ù†Ø¸ÙˆÙ…Ø© Ø§Ù„Ø­Ø±ÙƒØ©"),
        metric("Huawei ADS", "Driving tech", "Conduite intelligente", "ØªÙ‚Ù†ÙŠØ© Ø§Ù„Ù‚ÙŠØ§Ø¯Ø©"),
        metric("Harmony cockpit", "Cabin", "Cockpit", "Ø§Ù„Ù…Ù‚ØµÙˆØ±Ø©")
      ]
    }
  ],
  energy: {
    title: t("Voyah Energy", "Ã‰nergie Voyah", "Ø·Ø§Ù‚Ø© Voyah"),
    body: t(
      "Let users enjoy the best replenishment experience with more choice, more speed, more intelligence, and more efficiency.",
      "Offrir aux utilisateurs la meilleure expÃ©rience de recharge, avec davantage de choix, de rapiditÃ©, dâ€™intelligence et dâ€™efficacitÃ©.",
      "Ø¥ØªØ§Ø­Ø© Ø£ÙØ¶Ù„ ØªØ¬Ø±Ø¨Ø© ØªØ²ÙˆÙ‘Ø¯ Ø¨Ø§Ù„Ø·Ø§Ù‚Ø© Ù„Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ†ØŒ Ø¨Ù…Ø²ÙŠØ¯ Ù…Ù† Ø§Ù„Ø®ÙŠØ§Ø±Ø§Øª ÙˆØ§Ù„Ø³Ø±Ø¹Ø© ÙˆØ§Ù„Ø°ÙƒØ§Ø¡ ÙˆØ§Ù„ÙƒÙØ§Ø¡Ø©."
    ),
    label: t("Learn more", "En savoir plus", "Ø§Ø¹Ø±Ù Ø§Ù„Ù…Ø²ÙŠØ¯"),
    image: "/static/assets/energy_bg-4482e81f.jpg",
    metrics: [
      metric("1,540,000+", "Integrated charging resources", "Ressources de recharge intÃ©grÃ©es", "Ù…ÙˆØ§Ø±Ø¯ Ø§Ù„Ø´Ø­Ù† Ø§Ù„Ù…Ø¯Ù…Ø¬Ø©"),
      metric("16,000+", "Ultra-fast charging resources", "Ressources de recharge ultra-rapide", "Ù…ÙˆØ§Ø±Ø¯ Ø§Ù„Ø´Ø­Ù† ÙØ§Ø¦Ù‚ Ø§Ù„Ø³Ø±Ø¹Ø©"),
      metric("530,000,000+ kWh", "Cumulative charging delivered to users", "Recharge cumulÃ©e fournie aux utilisateurs", "Ø¥Ø¬Ù…Ø§Ù„ÙŠ Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¡ Ø§Ù„Ù…Ø´Ø­ÙˆÙ†Ø© Ù„Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ†"),
      metric("170,000+ tons", "Cumulative carbon reduction", "RÃ©duction cumulÃ©e des Ã©missions de carbone", "Ø¥Ø¬Ù…Ø§Ù„ÙŠ Ø®ÙØ¶ Ø§Ù†Ø¨Ø¹Ø§Ø«Ø§Øª Ø§Ù„ÙƒØ±Ø¨ÙˆÙ†")
    ]
  },
  technology: {
    title: t("Explore Voyah technology", "Explorer les technologies Voyah", "Ø§Ø³ØªÙƒØ´Ù ØªÙ‚Ù†ÙŠØ§Øª Voyah"),
    body: t(
      "Voyah is not only a pioneer among central-state enterprises on the electric track, but also a new benchmark for the transformation and upgrade of mature Chinese automakers and a successful practice of Dongfeng Motor Groupâ€™s â€œnew five modernizationsâ€: lightweighting, electrification, intelligence, connectivity, and sharing.",
      "Voyah nâ€™est pas seulement un pionnier des entreprises centrales sur la voie de lâ€™Ã©lectrique, mais aussi une nouvelle rÃ©fÃ©rence pour la transformation des constructeurs chinois matures et une concrÃ©tisation rÃ©ussie des â€œcinq nouvelles modernisationsâ€ de Dongfeng Motor Group : allÃ¨gement, Ã©lectrification, intelligence, connectivitÃ© et partage.",
      "Ù„Ø§ ØªÙØ¹Ø¯ Voyah Ù…Ø¬Ø±Ø¯ Ø±Ø§Ø¦Ø¯Ø© Ø¨ÙŠÙ† Ø§Ù„Ø´Ø±ÙƒØ§Øª Ø§Ù„Ù…Ø±ÙƒØ²ÙŠØ© Ø¹Ù„Ù‰ Ù…Ø³Ø§Ø± Ø§Ù„Ø³ÙŠØ§Ø±Ø§Øª Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ©ØŒ Ø¨Ù„ ØªÙ…Ø«Ù„ Ø£ÙŠØ¶Ø§Ù‹ Ù…Ø¹ÙŠØ§Ø±Ø§Ù‹ Ø¬Ø¯ÙŠØ¯Ø§Ù‹ Ù„ØªØ­ÙˆÙ„ Ø´Ø±ÙƒØ§Øª Ø§Ù„Ø³ÙŠØ§Ø±Ø§Øª Ø§Ù„ØµÙŠÙ†ÙŠØ© Ø§Ù„Ù†Ø§Ø¶Ø¬Ø© ÙˆØªØ­Ø¯ÙŠØ«Ù‡Ø§ØŒ ÙƒÙ…Ø§ Ø£Ù†Ù‡Ø§ ØªØ¬Ø³ÙŠØ¯ Ù†Ø§Ø¬Ø­ Ù„Ù€Â«Ø§Ù„ØªØ­ÙˆÙ„Ø§Øª Ø§Ù„Ø®Ù…Ø³Ø© Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø©Â» Ù„Ø¯Ù‰ Dongfeng Motor Group: Ø§Ù„Ø®ÙØ©ØŒ ÙˆØ§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¡ØŒ ÙˆØ§Ù„Ø°ÙƒØ§Ø¡ØŒ ÙˆØ§Ù„Ø§ØªØµØ§Ù„ØŒ ÙˆØ§Ù„Ù…Ø´Ø§Ø±ÙƒØ©."
    ),
    tabs: [
      {
        label: t("ESSA native intelligent electric architecture", "Architecture Ã©lectrique intelligente ESSA", "Ù…Ù†ØµØ© ESSA Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© Ø§Ù„Ø°ÙƒÙŠØ© Ø§Ù„Ø£ØµÙ„ÙŠØ©"),
        tags: [
          t("Native intelligence", "Intelligence native", "Ø°ÙƒØ§Ø¡ Ø£ØµÙŠÙ„"),
          t("Ultimate safety", "SÃ©curitÃ© ultime", "Ø³Ù„Ø§Ù…Ø© Ù‚ØµÙˆÙ‰"),
          t("Freer control", "ContrÃ´le fluide", "ØªØ­ÙƒÙ… Ø£ÙƒØ«Ø± Ø­Ø±ÙŠØ©"),
          t("Full comfort", "Confort global", "Ø±Ø§Ø­Ø© Ø´Ø§Ù…Ù„Ø©")
        ],
        image: "/static/assets/tansuo-927d66e5.png",
        cta: t("Watch the full film", "Voir le film complet", "Ø´Ø§Ù‡Ø¯ Ø§Ù„ÙÙŠÙ„Ù… Ø§Ù„ÙƒØ§Ù…Ù„")
      },
      {
        label: t("Tianyuan architecture", "Architecture Tianyuan", "Ù…Ù†ØµØ© ØªÙŠØ§Ù†ÙŠÙˆØ§Ù†"),
        tags: [
          t("Efficient core", "CÅ“ur efficace", "Ù†ÙˆØ§Ø© ÙØ¹Ù‘Ø§Ù„Ø©"),
          t("Agile systems", "SystÃ¨mes agiles", "Ø£Ù†Ø¸Ù…Ø© Ù…Ø±Ù†Ø©"),
          t("Smart interconnection", "Interconnexion intelligente", "ØªØ±Ø§Ø¨Ø· Ø°ÙƒÙŠ"),
          t("Open co-creation", "Co-crÃ©ation ouverte", "Ø§Ø¨ØªÙƒØ§Ø± Ù…ÙØªÙˆØ­")
        ],
        image: "/static/assets/tansuo_2-8336799c.png",
        cta: t("Watch the full film", "Voir le film complet", "Ø´Ø§Ù‡Ø¯ Ø§Ù„ÙÙŠÙ„Ù… Ø§Ù„ÙƒØ§Ù…Ù„")
      }
    ]
  },
  service: {
    title: t("Voyah Service", "Service Voyah", "Ø®Ø¯Ù…Ø§Øª Voyah"),
    body: t(
      "With one sincere heart, every detail is treated sincerely; with one honest intention, every promise is fulfilled with sincerity.",
      "Avec un cÅ“ur sincÃ¨re, chaque dÃ©tail est traitÃ© avec sincÃ©ritÃ© ; avec une intention honnÃªte, chaque promesse est tenue avec sincÃ©ritÃ©.",
      "Ø¨Ù‚Ù„Ø¨ ØµØ§Ø¯Ù‚ Ù†ØªØ¹Ø§Ù…Ù„ Ø¨Ø¥Ø®Ù„Ø§Øµ Ù…Ø¹ ÙƒÙ„ ØªÙØµÙŠÙ„ØŒ ÙˆØ¨Ù†ÙŠØ© ØµØ§Ø¯Ù‚Ø© Ù†ÙÙŠ ÙƒÙ„ ÙˆØ¹Ø¯ Ø¨Ø¥Ø®Ù„Ø§Øµ."
    ),
    cards: [
      block("/static/assets/section3_2-4fb471c7.jpg", "Sincere reception", "Accueil sincÃ¨re", "Ø§Ø³ØªÙ‚Ø¨Ø§Ù„ ØµØ§Ø¯Ù‚", "", "", ""),
      block("/static/assets/section3_3-20237755.jpg", "Ceremonial delivery", "Livraison avec sens du rituel", "ØªØ³Ù„ÙŠÙ… Ø¨Ø·Ø§Ø¨Ø¹ Ø§Ø­ØªÙØ§Ù„ÙŠ", "", "", ""),
      block("/static/assets/section4_1-f7cf566b.jpg", "7Ã—24-hour protection", "Protection 7Ã—24 h", "Ø­Ù…Ø§ÙŠØ© Ø¹Ù„Ù‰ Ù…Ø¯Ø§Ø± 7Ã—24 Ø³Ø§Ø¹Ø©", "", "", ""),
      block("/static/assets/section4_2-aa55795b.jpg", "Professional team", "Ã‰quipe professionnelle", "ÙØ±ÙŠÙ‚ Ù…Ø­ØªØ±Ù", "", "", "")
    ]
  },
  community: {
    title: t("Community News", "ActualitÃ©s de la communautÃ©", "Ø£Ø®Ø¨Ø§Ø± Ø§Ù„Ù…Ø¬ØªÙ…Ø¹"),
    body: t(
      "Fresh stories from owners and lively conversations about life with the car.",
      "Des histoires fraÃ®ches de propriÃ©taires et des Ã©changes vivants autour de la vie avec la voiture.",
      "Ù‚ØµØµ Ø¬Ø¯ÙŠØ¯Ø© Ù…Ù† Ø§Ù„Ù…Ø§Ù„ÙƒÙŠÙ† ÙˆØ­ÙˆØ§Ø±Ø§Øª Ù…Ù…ØªØ¹Ø© Ø¹Ù† Ø§Ù„Ø­ÙŠØ§Ø© Ù…Ø¹ Ø§Ù„Ø³ÙŠØ§Ø±Ø©."
    ),
    posts: [
      {
        image: "/static/assets/experience1-96467d92.jpg",
        title: t(
          "Owner story | Chairman Li Peng and the â€œdockside worldâ€ of 6,000 owners",
          "Histoire de propriÃ©taire | Li Peng et le Â« monde du quai Â» de 6 000 propriÃ©taires",
          "Ù‚ØµØ© Ù…Ø§Ù„Ùƒ | Ù„ÙŠ Ø¨Ù†Øº ÙˆÂ«Ø¹Ø§Ù„Ù… Ø§Ù„Ù…ÙŠÙ†Ø§Ø¡Â» Ù…Ø¹ 6000 Ù…Ù† Ø§Ù„Ù…Ø§Ù„ÙƒÙŠÙ†"
        ),
        body: t("Buying Voyah five times, bound by loyalty and friendship.", "Cinq achats de Voyah, portÃ©s par la fidÃ©litÃ© et lâ€™amitiÃ©.", "Ø®Ù…Ø³ Ù…Ø±Ø§Øª Ù…Ù† Ø§Ù‚ØªÙ†Ø§Ø¡ Voyah Ø¨Ø¯Ø§ÙØ¹ Ø§Ù„ÙˆÙØ§Ø¡ ÙˆØ§Ù„ØµØ¯Ø§Ù‚Ø©."),
        slug: "brand.html"
      },
      {
        image: "/static/assets/experience2-306e063e.jpg",
        title: t(
          "Owner story | When design aesthetics meet craftsmanship",
          "Histoire de propriÃ©taire | Quand lâ€™esthÃ©tique du design rencontre lâ€™artisanat",
          "Ù‚ØµØ© Ù…Ø§Ù„Ùƒ | Ø­ÙŠÙ† ÙŠÙ„ØªÙ‚ÙŠ Ø¬Ù…Ø§Ù„ Ø§Ù„ØªØµÙ…ÙŠÙ… Ø¨Ø±ÙˆØ­ Ø§Ù„Ø­Ø±ÙØ©"
        ),
        body: t("Liu Lingfeng and his deep resonance with three Voyah FREE models.", "Liu Lingfeng et sa profonde rÃ©sonance avec trois Voyah FREE.", "Ù„ÙŠÙˆ Ù„ÙŠÙ†ØºÙÙ†Øº ÙˆØ±Ø§Ø¨Ø·Ù‡ Ø§Ù„Ø¹Ù…ÙŠÙ‚ Ù…Ø¹ Ø«Ù„Ø§Ø« Ø³ÙŠØ§Ø±Ø§Øª Voyah FREE."),
        slug: "service.html"
      },
      {
        image: "/static/assets/experience3-a8085d28.jpg",
        title: t(
          "Owner story | The dream-chasing journey of a jewelry livestream host",
          "Histoire de propriÃ©taire | Le voyage de rÃªve dâ€™une animatrice de bijoux en direct",
          "Ù‚ØµØ© Ù…Ø§Ù„Ùƒ | Ø±Ø­Ù„Ø© Ù…Ø·Ø§Ø±Ø¯Ø© Ø§Ù„Ø£Ø­Ù„Ø§Ù… Ù„Ù…Ù‚Ø¯Ù…Ø© Ø¨Ø« Ù…Ø¨Ø§Ø´Ø± Ù„Ù„Ù…Ø¬ÙˆÙ‡Ø±Ø§Øª"
        ),
        body: t("With Voyah FREE 318 as a companion, she heads toward the road of life.", "Avec Voyah FREE 318 comme compagnon, elle avance sur le chemin de la vie.", "Ø¨Ø±ÙÙ‚Ø© Voyah FREE 318 ØªÙ†Ø·Ù„Ù‚ ÙÙŠ Ø±Ø­Ù„Ø© Ø§Ù„Ø­ÙŠØ§Ø©."),
        slug: "energy.html"
      }
    ]
  },
  footprint: {
    title: t("Leading in China, expanding globally", "Leader en Chine, dÃ©ploiement mondial", "Ø±ÙŠØ§Ø¯Ø© ÙÙŠ Ø§Ù„ØµÙŠÙ† ÙˆØ§Ù†ØªØ´Ø§Ø± Ø¹Ø§Ù„Ù…ÙŠ"),
    body: t(
      "The Chinese premium intelligent new-energy vehicle brand that moved from the local market to overseas markets the fastest.",
      "La marque chinoise haut de gamme de vÃ©hicules Ã  Ã©nergies nouvelles intelligents qui a rÃ©alisÃ© le passage du marchÃ© local aux marchÃ©s Ã©trangers le plus rapidement.",
      "Ø§Ù„Ø¹Ù„Ø§Ù…Ø© Ø§Ù„ØµÙŠÙ†ÙŠØ© Ø§Ù„Ø±Ø§Ù‚ÙŠØ© Ù„Ù„Ù…Ø±ÙƒØ¨Ø§Øª Ø§Ù„Ø°ÙƒÙŠØ© Ø§Ù„Ø¹Ø§Ù…Ù„Ø© Ø¨Ø§Ù„Ø·Ø§Ù‚Ø© Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø© Ø§Ù„ØªÙŠ Ø§Ù†ØªÙ‚Ù„Øª Ù…Ù† Ø§Ù„Ø³ÙˆÙ‚ Ø§Ù„Ù…Ø­Ù„ÙŠØ© Ø¥Ù„Ù‰ Ø§Ù„Ø£Ø³ÙˆØ§Ù‚ Ø§Ù„Ø®Ø§Ø±Ø¬ÙŠØ© Ø¨Ø£Ø³Ø±Ø¹ ÙˆØªÙŠØ±Ø©."
    ),
    cta: t("Overseas website", "Site international", "Ø§Ù„Ù…ÙˆÙ‚Ø¹ Ø§Ù„Ø®Ø§Ø±Ø¬ÙŠ"),
    image: "/static/assets/earth_index-e4c6ae99.jpg",
    tabs: [
      {
        label: t("Europe (21)", "Europe (21)", "Ø£ÙˆØ±ÙˆØ¨Ø§ (21)"),
        countries: [
          t("Norway", "NorvÃ¨ge", "Ø§Ù„Ù†Ø±ÙˆÙŠØ¬"),
          t("Portugal", "Portugal", "Ø§Ù„Ø¨Ø±ØªØºØ§Ù„"),
          t("Spain", "Espagne", "Ø¥Ø³Ø¨Ø§Ù†ÙŠØ§"),
          t("Italy", "Italie", "Ø¥ÙŠØ·Ø§Ù„ÙŠØ§"),
          t("Switzerland", "Suisse", "Ø³ÙˆÙŠØ³Ø±Ø§"),
          t("Finland", "Finlande", "ÙÙ†Ù„Ù†Ø¯Ø§"),
          t("Netherlands", "Pays-Bas", "Ù‡ÙˆÙ„Ù†Ø¯Ø§"),
          t("Belgium", "Belgique", "Ø¨Ù„Ø¬ÙŠÙƒØ§"),
          t("Germany", "Allemagne", "Ø£Ù„Ù…Ø§Ù†ÙŠØ§"),
          t("Poland", "Pologne", "Ø¨ÙˆÙ„Ù†Ø¯Ø§"),
          t("Czech Republic", "RÃ©publique tchÃ¨que", "Ø§Ù„ØªØ´ÙŠÙƒ"),
          t("Slovakia", "Slovaquie", "Ø³Ù„ÙˆÙØ§quie"),
          t("Hungary", "Hongrie", "Ø§Ù„Ù…Ø¬Ø±"),
          t("Slovenia", "SlovÃ©nie", "Ø³Ù„ÙˆÙÙŠÙ†ÙŠØ§"),
          t("Bulgaria", "Bulgarie", "Ø¨Ù„ØºØ§Ø±ÙŠØ§"),
          t("Latvia", "Lettonie", "Ù„Ø§ØªÙÙŠØ§"),
          t("Estonia", "Estonie", "Ø¥Ø³ØªÙˆÙ†ÙŠØ§"),
          t("Lithuania", "Lituanie", "Ù„ÙŠØªÙˆØ§Ù†ÙŠØ§"),
          t("Moldova", "Moldavie", "Ù…ÙˆÙ„Ø¯ÙˆÙØ§"),
          t("Bosnia and Herzegovina", "Bosnie-HerzÃ©govine", "Ø§Ù„Ø¨ÙˆØ³Ù†Ø© ÙˆØ§Ù„Ù‡Ø±Ø³Ùƒ"),
          t("Greece", "GrÃ¨ce", "Ø§Ù„ÙŠÙˆÙ†Ø§Ù†")
        ]
      },
      {
        label: t("Middle East (7)", "Moyen-Orient (7)", "Ø§Ù„Ø´Ø±Ù‚ Ø§Ù„Ø£ÙˆØ³Ø· (7)"),
        countries: [
          t("United Arab Emirates", "Ã‰mirats arabes unis", "Ø§Ù„Ø¥Ù…Ø§Ø±Ø§Øª Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ù…ØªØ­Ø¯Ø©"),
          t("Qatar", "Qatar", "Ù‚Ø·Ø±"),
          t("Saudi Arabia", "Arabie saoudite", "Ø§Ù„Ù…Ù…Ù„ÙƒØ© Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©"),
          t("Oman", "Oman", "Ø¹ÙÙ…Ø§Ù†"),
          t("Kuwait", "KoweÃ¯t", "Ø§Ù„ÙƒÙˆÙŠØª"),
          t("Bahrain", "BahreÃ¯n", "Ø§Ù„Ø¨Ø­Ø±ÙŠÙ†"),
          t("Jordan", "Jordanie", "Ø§Ù„Ø£Ø±Ø¯Ù†")
        ]
      },
      {
        label: t("Africa (2)", "Afrique (2)", "Ø£ÙØ±ÙŠÙ‚ÙŠØ§ (2)"),
        countries: [
          t("Egypt", "Ã‰gypte", "Ù…ØµØ±"),
          t("Angola", "Angola", "Ø£Ù†ØºÙˆÙ„Ø§")
        ]
      },
      {
        label: t("Americas (3)", "AmÃ©riques (3)", "Ø§Ù„Ø£Ù…Ø±ÙŠÙƒØªØ§Ù† (3)"),
        countries: [
          t("Panama", "Panama", "Ø¨Ù†Ù…Ø§"),
          t("Colombia", "Colombie", "ÙƒÙˆÙ„ÙˆÙ…Ø¨ÙŠØ§"),
          t("Costa Rica", "Costa Rica", "ÙƒÙˆØ³ØªØ§Ø±ÙŠÙƒØ§")
        ]
      },
      {
        label: t("Asia (9)", "Asie (9)", "Ø¢Ø³ÙŠØ§ (9)"),
        countries: [
          t("China", "Chine", "Ø§Ù„ØµÙŠÙ†"),
          t("Azerbaijan", "AzerbaÃ¯djan", "Ø£Ø°Ø±Ø¨ÙŠØ¬Ø§Ù†"),
          t("Uzbekistan", "OuzbÃ©kistan", "Ø£ÙˆØ²Ø¨ÙƒØ³ØªØ§Ù†"),
          t("Kazakhstan", "Kazakhstan", "ÙƒØ§Ø²Ø§Ø®Ø³ØªØ§Ù†"),
          t("Turkmenistan", "TurkmÃ©nistan", "ØªØ±ÙƒÙ…Ø§Ù†Ø³ØªØ§Ù†"),
          t("Armenia", "ArmÃ©nie", "Ø£Ø±Ù…ÙŠÙ†ÙŠØ§"),
          t("Myanmar", "Myanmar", "Ù…ÙŠØ§Ù†Ù…Ø§Ø±"),
          t("Laos", "Laos", "Ù„Ø§ÙˆØ³"),
          t("Cambodia", "Cambodge", "ÙƒÙ…Ø¨ÙˆØ¯ÙŠØ§")
        ]
      }
    ]
  }
};
const footerColumns = [
  {
    title: t("Models", "ModÃ¨les", "Ø§Ù„Ø·Ø±Ø§Ø²Ø§Øª"),
    links: [
      { label: t("Voyah Passion L", "Voyah Passion L", "Voyah Passion L"), slug: "passion-L.html" },
      { label: t("Voyah Titan", "Voyah Titan", "Voyah Titan"), slug: "titan.html" },
      { label: t("Voyah FREE+", "Voyah FREE+", "Voyah FREE+"), slug: "free+.html" },
      { label: t("26 Voyah Dreamer", "Voyah Dreamer 26", "Voyah Dreamer 26"), slug: "newDreamer26.html" }
    ]
  },
  {
    title: t("Services", "Services", "Ø§Ù„Ø®Ø¯Ù…Ø§Øª"),
    links: [
      { label: t("Store center", "Centre de magasins", "Ù…Ø±ÙƒØ² Ø§Ù„Ù…Ø¹Ø§Ø±Ø¶"), slug: "store.html" },
      { label: t("Voyah Service", "Service Voyah", "Ø®Ø¯Ù…Ø§Øª Voyah"), slug: "service.html" },
      { label: t("Voyah Energy", "Ã‰nergie Voyah", "Ø·Ø§Ù‚Ø© Voyah"), slug: "energy.html" },
      { label: t("Downloads", "TÃ©lÃ©chargements", "Ø§Ù„ØªÙ†Ø²ÙŠÙ„Ø§Øª"), slug: "document.html" }
    ]
  },
  {
    title: t("About", "Ã€ propos", "Ø¹Ù†"),
    links: [
      { label: t("Brand", "Marque", "Ø§Ù„Ø¹Ù„Ø§Ù…Ø©"), slug: "brand.html" },
      { label: t("Corporate", "Entreprise", "Ø§Ù„Ù…Ø¤Ø³Ø³Ø©"), slug: "corporate.html" },
      { label: t("Join Us", "Rejoignez-nous", "Ø§Ù†Ø¶Ù… Ø¥Ù„ÙŠÙ†Ø§"), slug: "joinus.html" },
      { label: t("Investor Relations", "Relations investisseurs", "Ø¹Ù„Ø§Ù‚Ø§Øª Ø§Ù„Ù…Ø³ØªØ«Ù…Ø±ÙŠÙ†"), slug: "ir.html" }
    ]
  }
];
const footerLegalLinks = [
  { label: t("Legal", "Mentions lÃ©gales", "Ø§Ù„Ø´Ø¤ÙˆÙ† Ø§Ù„Ù‚Ø§Ù†ÙˆÙ†ÙŠØ©"), slug: "legal.html" },
  { label: t("Privacy", "ConfidentialitÃ©", "Ø§Ù„Ø®ØµÙˆØµÙŠØ©"), slug: "privacy.html" },
  { label: t("Cookies", "Cookies", "Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø·"), slug: "cookie.html" },
  { label: t("Authorization", "Autorisation", "Ø§Ù„ØªÙÙˆÙŠØ¶"), slug: "authorization.html" }
];
const footerContact = {
  title: t("Stay connected with Voyah", "Restez connectÃ© Ã  Voyah", "Ø§Ø¨Ù‚ÙŽ Ø¹Ù„Ù‰ ØªÙˆØ§ØµÙ„ Ù…Ø¹ Voyah"),
  body: t("Scan the local app and mini-program codes to continue the experience through digital channels.", "Scannez les codes de lâ€™application et du mini-programme pour prolonger lâ€™expÃ©rience via les canaux numÃ©riques.", "Ø§Ù…Ø³Ø­ Ø±Ù…ÙˆØ² Ø§Ù„ØªØ·Ø¨ÙŠÙ‚ ÙˆØ§Ù„Ø¨Ø±Ù†Ø§Ù…Ø¬ Ø§Ù„Ù…ØµØºØ± Ù„Ù…ØªØ§Ø¨Ø¹Ø© Ø§Ù„ØªØ¬Ø±Ø¨Ø© Ø¹Ø¨Ø± Ø§Ù„Ù‚Ù†ÙˆØ§Øª Ø§Ù„Ø±Ù‚Ù…ÙŠØ©."),
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
    name: "locale",
    path: "/:locale()",
    component: () => import('./index-CyW4XoPT.mjs')
  },
  {
    name: "locale-slug",
    path: "/:locale()/:slug()",
    meta: __nuxt_page_meta || {},
    component: () => import('./_slug_-BCCcv6fz.mjs')
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
    name: "FranÃ§ais",
    dir: "ltr",
    files: []
  },
  {
    code: "ar",
    name: "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
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
  default: defineAsyncComponent(() => import('./default-DCKt7HR-.mjs').then((m) => m.default || m))
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
