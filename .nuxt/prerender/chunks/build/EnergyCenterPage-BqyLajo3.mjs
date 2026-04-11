import { defineComponent, computed, ref, mergeProps, unref, useSSRContext } from 'file://E:/voyah-nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'file://E:/voyah-nuxt/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EnergyCenterPage",
  __ssrInlineRender: true,
  setup(__props) {
    const scopeBind = computed(() => ({ "data-v-1b0d1efa": "" }));
    const swiperBind = computed(() => ({ "data-v-58c4cd38": "" }));
    const tabBind = computed(() => ({ "data-v-91531671": "" }));
    const rootBind = computed(() => ({ "data-v-661de974": "" }));
    ref("zh");
    const copy = {
      zh: {
        heroTitle: "\u5C9A\u56FE\u80FD\u6E90",
        heroDesc: "\u52A9\u529B\u5B9E\u73B0\u56FD\u5BB6\u53CC\u78B3\u6218\u7565\uFF0C\u7528\u79D1\u6280\u6539\u53D8\u6C7D\u8F66\u80FD\u6E90\u751F\u6001\u4F4D\uFF0C\u8BA9\u5145\u7535\u6210\u4E3A\u7B80\u5355\u5C0F\u4E8B\uFF0C\u4E3A\u7528\u6237\u5E26\u6765\u591A\u3001\u5FEB\u3001\u667A\u3001\u8282\u7684\u6700\u4F73\u8865\u80FD\u4F53\u9A8C\u3002",
        solutionTitle: "168\u80FD\u6E90\u89E3\u51B3\u65B9\u6848",
        moreKey: "\u591A",
        moreTitle: "\u767E\u4E07\u8D44\u6E90\u4E00\u952E\u76F4\u8FBE\uFF0C\u5168\u56FD\u90FD\u80FD\u653E\u5FC3\u5145",
        moreDesc1: "\u8D85\u5145\u5E03\u5C40\uFF1A\u201C\u5343\u7AD9\u4E07\u6869\u201D\u8D85\u5145\u7F51\u7EDC\u5168\u9762\u63A8\u8FDB\u4E2D\uFF0C\u7528\u6237\u5728\u54EA\u91CC\uFF0C\u6211\u4EEC\u5C31\u5EFA\u5728\u54EA\u91CC\u3002\u540C\u65F6\u5C9A\u56FE\u79EF\u6781\u54CD\u5E94\u56FD\u5BB6\u653F\u7B56\uFF0C\u81EA\u5EFA\u7AD9\u70B9\u5BF9\u6240\u6709\u65B0\u80FD\u6E90\u8F66\u4E3B\u5F00\u653E\uFF0C\u8BA9\u6BCF\u4E00\u4F4D\u65B0\u80FD\u6E90\u8F66\u4E3B\u4ECE\u6B64\u4E0D\u5FC5\u4E3A\u5145\u7535\u8FD9\u4EF6\u5C0F\u4E8B\u800C\u7126\u8651",
        moreDesc2: "\u516C\u5145\u5E03\u5C40\uFF1A2800+\u533A\u53BF\u8865\u80FD\u7F51\u7EDC\u5168\u8986\u76D6\u3001\u897F\u5317\u5DDD\u85CF\u5730\u533A10\u4E07+\u6869\u3001\u201C\u5341\u7EB5\u201D\u201C\u5341\u6A2A\u201D\u9AD8\u901F\u5145\u7535\u7F51\u7EDC\u7545\u884C\u65E0\u5FE7",
        chargeMap: "\u5C9A\u56FE\u5145\u7535\u5730\u56FE",
        fastKey: "\u5FEB",
        fastTitle: "\u5168\u7403\u9996\u4E2A\u5146\u74E6\u7EA7\u54C1\u724C\u8D85\u5145\u6869",
        fastDesc: "\u5C9A\u56FEVP1000\uFF0C\u62E5\u6709\u5FEB\u3001\u8F7B\u3001\u9759\u3001\u517C\u5BB9\u3001\u5B89\u5168\u548C\u667A\u80FD\u516D\u5927\u6838\u5FC3\u4EAE\u70B9\uFF0C\u5C9A\u56FE\u77E5\u97F3\u5B9E\u6D4B\u5145\u753515min\u7EED\u822A 515km\uFF0C\u4E3A\u7535\u52A8\u6C7D\u8F66\u7528\u6237\u6253\u9020\u7684\u6781\u901F\u65E0\u611F\u7684\u8865\u80FD\u4F53\u9A8C\u3002",
        smartKey: "\u667A",
        smartTitle: "\u4ECE\u201C\u6781\u901F\u6EE1\u7535\u201D\u5230\u201C\u65E0\u611F\u6EE1\u7535\u201D",
        smartDesc: "\u5C9A\u56FE\u81EA\u52A8\u5145\u7535\u673A\u5668\u4EBA+\u79FB\u52A8\u5145\u7535\u673A\u5668\u4EBA\u53CC\u91CD\u670D\u52A1\u7528\u6237\uFF0C\u4E0D\u4E0B\u8F66\uFF0C\u4E0D\u52A8\u624B\uFF0C\u5168\u7A0B\u65E0\u611F\u5145\u7535",
        watchVideo: "\u67E5\u770B\u5B8C\u6574\u89C6\u9891",
        greenKey: "\u8282",
        greenTitle: "\u8BA9\u80FD\u6E90\u4F7F\u7528\u66F4\u6709\u5E8F\u3001\u66F4\u8282\u80FD\u3001\u66F4\u73AF\u4FDD",
        bookTitle: "\u5C9A\u56FE\u5145\u7535\u767E\u79D1\u5168\u4E66",
        bookDesc: "\u4E00\u4E66\u5728\u624B\uFF0C\u8865\u80FD\u65E0\u5FE7",
        tabSmart: "\u667A\u6167\u8D85\u5145\u653B\u7565",
        tabHome: "\u5BB6\u5145\u653B\u7565\u7AD9",
        tabPublic: "\u516C\u5145\u653B\u7565",
        tabFaq: "\u5145\u7535\u7B54\u7591",
        tabPrivate: "\u79C1\u6869\u5171\u4EAB",
        tabCascade: "\u7535\u6C60\u68AF\u6B21\u5229\u7528",
        power1a: "\u4E00\u6B3E\u8D85\u7EA7 APP",
        power1b: "1000 \u5EA7\u8D85\u7EA7\u5145\u7535\u7AD9",
        power1c: "10000 \u6839\u8D85\u7EA7\u5145\u7535\u6869",
        power1d: "100 \u4E07+\u516C\u5171\u5145\u7535\u8D44\u6E90",
        power2a: "6 km \u8D85\u7EA7\u8865\u80FD\u5708",
        power3a: "\u5C9A\u56FE\u8D85\u5145",
        power3b: "\u516C\u5171\u5145\u7535",
        power3c: "\u5BB6\u5EAD\u5145\u7535",
        power3d: "\u5E94\u6025\u8865\u7535",
        power3e: "\u65E0\u611F\u5145\u7535",
        power3f: "V2G",
        power3g: "\u79C1\u6869\u5171\u4EAB",
        power3h: "\u7535\u6C60\u68AF\u6B21\u5229\u7528",
        tabDesc: "\u7535\u6C60\u68AF\u6B21\u5229\u7528\uFF08\u9000\u5F79\u7535\u6C60\u7115\u53D1\u65B0\u751F\u547D\uFF09",
        viewDetail: "\u67E5\u770B\u8BE6\u60C5",
        partnerTitle: "\u5C9A\u56FE\u8D85\u5145\u5408\u4F19\u4EBA\u62DB\u52DF",
        learnMore: "\u4E86\u89E3\u66F4\u591A"
      }
    };
    const t = computed(() => copy.zh);
    const electric = computed(() => [
      { value: "1000", unit: "kW", label: "\u5CF0\u503C\u529F\u7387" },
      { value: "1000", unit: "A", label: "\u5CF0\u503C\u7535\u6D41" },
      { value: "1.7", unit: "km", label: "\u6700\u5FEB\u79D2\u5145" }
    ]);
    const chargeMetrics = computed(() => [
      { value: "1,540,000", unit: "", title: "\u6574\u5408\u5145\u7535\u8D44\u6E90" },
      { value: "16,000", unit: "", title: "\u8D85\u5145\u8D44\u6E90" },
      { value: "5.3", unit: "B", title: "\u7D2F\u8BA1\u4E3A\u7528\u6237\u5145\u7535" },
      { value: "17", unit: "0k t", title: "\u7D2F\u8BA1\u51CF\u5C11\u78B3\u6392\u653E" }
    ]);
    const energySwiperSlides = computed(() => [
      {
        title: "V2G",
        desc: "\u8F66\u8F86\u5982\u201C\u7535\u529B\u6D77\u7EF5\u201D\u8C37\u5145\u5CF0\u653E",
        image: "/static/assets/V2G-cba13343.jpg"
      },
      {
        title: "\u79C1\u6869\u5171\u4EAB",
        desc: "\u7528\u6237\u5BB6\u5145\u95F2\u7F6E\u65F6\u95F4\u53D8\u73B0",
        image: "/static/assets/kongxiang-f3e4984f.jpg"
      },
      {
        title: "\u7535\u6C60\u68AF\u6B21\u5229\u7528",
        desc: t.value.tabDesc,
        image: "/static/assets/tici-b570e40a.jpg"
      }
    ]);
    const books = computed(() => [
      {
        title: "\u8D85\u5145\u8D34\u58EB\u4E28\u65E0\u611F\u8865\u80FD\u53CC\u529F\u80FD\u4E0A\u7EBF",
        desc: "\u5145\u7535\u300C0\u300D\u64CD\u4F5C",
        image: "/static/assets/V2G-cba13343.jpg"
      },
      {
        title: "\u628A\u4E13\u5C5E\u6869\u5E26\u56DE\u5BB6\u9700\u8981\u51E0\u6B65\uFF1F",
        desc: "\u4E00\u56FEget\u4E13\u5C5E\u5145\u7535\u6869\u5B89\u88C5\u6D41\u7A0B",
        image: "/static/assets/kongxiang-f3e4984f.jpg"
      },
      {
        title: "\u516C\u6869\u5145\u7535\u624B\u518C\uFF08\u5FEB\u7535\u7BC7\uFF09",
        desc: "\u5FEB\u7535\u5145\u7535\u600E\u4E48\u64CD\u4F5C\uFF1F\u770B\u8FD9\u7BC7\u5C31\u591F\u4E86",
        image: "/static/assets/tici-b570e40a.jpg"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, unref(scopeBind), _attrs))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "energy-content" }, [unref(scopeBind), unref(rootBind)]))} data-v-3148d25e><section${ssrRenderAttrs(mergeProps({ class: "bg" }, unref(scopeBind)))} data-v-3148d25e><img${ssrRenderAttrs(mergeProps({
        class: "headImg bg_pc",
        src: "/static/assets/energy_bg-4482e81f.jpg"
      }, unref(scopeBind)))} data-v-3148d25e><img${ssrRenderAttrs(mergeProps({
        class: "headImg bg_mb",
        src: "/static/assets/energy_bg_mb-36355b8d.png"
      }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).heroTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc" }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).heroDesc)}</div></section><section${ssrRenderAttrs(mergeProps({ class: "section_1" }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "section_1_1" }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).solutionTitle)}</div><img${ssrRenderAttrs(mergeProps({
        class: "power",
        src: "/static/assets/section_3-4777d2a7.png",
        alt: ""
      }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "power_mb" }, unref(scopeBind)))} data-v-3148d25e><img${ssrRenderAttrs(mergeProps({
        src: "/static/assets/section_4-4c6549b3.png",
        alt: ""
      }, unref(scopeBind)))} data-v-3148d25e></div><div${ssrRenderAttrs(mergeProps({ class: "section_1_2" }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "section_1_2_top" }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "section_1_2_item" }, unref(scopeBind)))} data-v-3148d25e><img${ssrRenderAttrs(mergeProps({
        class: "power_bg1",
        src: "/static/assets/power_bg1-7048cd30.png",
        alt: ""
      }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "power_num" }, unref(scopeBind)))} data-v-3148d25e>1</div><div${ssrRenderAttrs(mergeProps({ class: "power1_item" }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(unref(scopeBind))} data-v-3148d25e>\xB7${ssrInterpolate(unref(t).power1a)}</div><div${ssrRenderAttrs(unref(scopeBind))} data-v-3148d25e>\xB7${ssrInterpolate(unref(t).power1b)}</div><div${ssrRenderAttrs(unref(scopeBind))} data-v-3148d25e>\xB7${ssrInterpolate(unref(t).power1c)}</div><div${ssrRenderAttrs(unref(scopeBind))} data-v-3148d25e>\xB7${ssrInterpolate(unref(t).power1d)}</div></div></div><div${ssrRenderAttrs(mergeProps({ class: "section_1_2_item" }, unref(scopeBind)))} data-v-3148d25e><img${ssrRenderAttrs(mergeProps({
        class: "power_bg2",
        src: "/static/assets/power_bg2-a6639f1e.png",
        alt: ""
      }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "power_num" }, unref(scopeBind)))} data-v-3148d25e>6</div><div${ssrRenderAttrs(mergeProps({ class: "power2_item" }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(unref(scopeBind))} data-v-3148d25e>\xB7${ssrInterpolate(unref(t).power2a)}</div></div></div></div><div${ssrRenderAttrs(mergeProps({ class: "section_1_2_bottom" }, unref(scopeBind)))} data-v-3148d25e><img${ssrRenderAttrs(mergeProps({
        class: "power_bg3",
        src: "/static/assets/power_bg3-d6d323e0.png",
        alt: ""
      }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "power_num" }, unref(scopeBind)))} data-v-3148d25e>8</div><div${ssrRenderAttrs(mergeProps({ class: "power3" }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "power3_item" }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(unref(scopeBind))} data-v-3148d25e>\xB7${ssrInterpolate(unref(t).power3a)}</div><div${ssrRenderAttrs(unref(scopeBind))} data-v-3148d25e>\xB7${ssrInterpolate(unref(t).power3b)}</div><div${ssrRenderAttrs(unref(scopeBind))} data-v-3148d25e>\xB7${ssrInterpolate(unref(t).power3c)}</div><div${ssrRenderAttrs(unref(scopeBind))} data-v-3148d25e>\xB7${ssrInterpolate(unref(t).power3d)}</div></div><div${ssrRenderAttrs(mergeProps({ class: "power3_item" }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(unref(scopeBind))} data-v-3148d25e>\xB7${ssrInterpolate(unref(t).power3e)}</div><div${ssrRenderAttrs(unref(scopeBind))} data-v-3148d25e>\xB7${ssrInterpolate(unref(t).power3f)}</div><div${ssrRenderAttrs(unref(scopeBind))} data-v-3148d25e>\xB7${ssrInterpolate(unref(t).power3g)}</div><div${ssrRenderAttrs(unref(scopeBind))} data-v-3148d25e>\xB7${ssrInterpolate(unref(t).power3h)}</div></div></div></div></div></div></section><section${ssrRenderAttrs(mergeProps({ class: "section2" }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))} data-v-3148d25e><span${ssrRenderAttrs(mergeProps({ class: "large" }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).moreKey)}</span>${ssrInterpolate(unref(t).moreTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc" }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).moreDesc1)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc desc1" }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).moreDesc2)}</div><div${ssrRenderAttrs(mergeProps({ class: "earth_content" }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "earth" }, unref(scopeBind)))} data-v-3148d25e></div><div${ssrRenderAttrs(mergeProps({ class: "charge_earth" }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "charge_title" }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).chargeMap)}</div><div${ssrRenderAttrs(mergeProps({ class: "charge_content" }, unref(scopeBind)))} data-v-3148d25e><!--[-->`);
      ssrRenderList(unref(chargeMetrics), (metric) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "charge_content_item",
          key: metric.title
        }, { ref_for: true }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "charge_content_item_top" }, { ref_for: true }, unref(scopeBind)))} data-v-3148d25e><span${ssrRenderAttrs(mergeProps({ class: "charge_content_item_top_num" }, { ref_for: true }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(metric.value)}</span>${ssrInterpolate(metric.unit)}</div><div${ssrRenderAttrs(mergeProps({ class: "charge_content_item_bottom" }, { ref_for: true }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(metric.title)}</div></div>`);
      });
      _push(`<!--]--></div></div></div></section><section${ssrRenderAttrs(mergeProps({ class: "section2 section3" }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))} data-v-3148d25e><span${ssrRenderAttrs(mergeProps({ class: "large" }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).fastKey)}</span>${ssrInterpolate(unref(t).fastTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc" }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).fastDesc)}</div><div${ssrRenderAttrs(mergeProps({ class: "section3_1" }, unref(scopeBind)))} data-v-3148d25e><img${ssrRenderAttrs(mergeProps({
        class: "charge_mb",
        src: "/static/assets/charge_mb-0e5441f2.png",
        alt: ""
      }, unref(scopeBind)))} data-v-3148d25e><img${ssrRenderAttrs(mergeProps({
        class: "charge_pc",
        src: "/static/assets/charge_pc-1c0a2e91.png",
        alt: ""
      }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "electric_list" }, unref(scopeBind)))} data-v-3148d25e><!--[-->`);
      ssrRenderList(unref(electric), (item) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "electric_item",
          key: item.value
        }, { ref_for: true }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "num" }, { ref_for: true }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(item.value)}<span${ssrRenderAttrs(mergeProps({ class: "unit" }, { ref_for: true }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(item.unit)}</span></div><div${ssrRenderAttrs(mergeProps({ class: "tips" }, { ref_for: true }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(item.label)}</div></div>`);
      });
      _push(`<!--]--></div></div></section><section${ssrRenderAttrs(mergeProps({ class: "section2 section4" }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))} data-v-3148d25e><span${ssrRenderAttrs(mergeProps({ class: "large" }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).smartKey)}</span>${ssrInterpolate(unref(t).smartTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc" }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).smartDesc)}</div><div${ssrRenderAttrs(mergeProps({ class: "video_btn" }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "btn" }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).watchVideo)}</div></div><div${ssrRenderAttrs(mergeProps({ class: "section4_1" }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "section4_1_content" }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "video" }, unref(scopeBind)))} data-v-3148d25e><video${ssrRenderAttrs(mergeProps({
        class: "video-js w-full h-full",
        autoplay: "",
        muted: "",
        loop: "",
        playsinline: "",
        preload: "auto"
      }, unref(scopeBind)))} data-v-3148d25e></video><img${ssrRenderAttrs(mergeProps({
        class: "section4-cover",
        src: "/static/assets/section_2-2b753ee2.png",
        alt: ""
      }, unref(scopeBind)))} data-v-3148d25e></div><div${ssrRenderAttrs(mergeProps({ class: "video-btn" }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).watchVideo)}</div></div></div></section><section${ssrRenderAttrs(mergeProps({ class: "section2 section5" }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))} data-v-3148d25e><span${ssrRenderAttrs(mergeProps({ class: "large" }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).greenKey)}</span>${ssrInterpolate(unref(t).greenTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "horizontal-tab commonTab" }, unref(tabBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "tab" }, unref(tabBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "tab-nav" }, unref(tabBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "tab-item" }, unref(tabBind)))} data-v-3148d25e>V2G</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item" }, unref(tabBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).tabPrivate)}</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item active" }, unref(tabBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).tabCascade)}</div><div${ssrRenderAttrs(mergeProps({ class: "slide-content" }, unref(tabBind)))} data-v-3148d25e></div></div></div><div${ssrRenderAttrs(mergeProps({ class: "tab_mb" }, unref(tabBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "tab-item_mb" }, unref(tabBind)))} data-v-3148d25e>V2G</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item_mb" }, unref(tabBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).tabPrivate)}</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item_mb active" }, unref(tabBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).tabCascade)}</div></div><div${ssrRenderAttrs(mergeProps({ class: "tab-content" }, unref(tabBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "tab-content-item active" }, unref(tabBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "tab_content_demo" }, unref(scopeBind)))} data-v-3148d25e><img${ssrRenderAttrs(mergeProps({
        src: "/static/assets/tici-b570e40a.jpg",
        alt: ""
      }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "tab_desc" }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).tabDesc)}</div></div></div></div></div><div${ssrRenderAttrs(mergeProps({ class: "swiper swiper_banner_full" }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "swiper-voyah" }, unref(swiperBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "swiper-group-container" }, unref(swiperBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "swiper swiper-initialized swiper-horizontal swiper-pointer-events" }, unref(swiperBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "swiper-wrapper" }, unref(swiperBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({
        class: "swiper-slide swiper-slide-duplicate",
        "data-swiper-slide-index": "2"
      }, unref(swiperBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "slide-item" }, unref(swiperBind)))} data-v-3148d25e><img${ssrRenderAttrs(mergeProps({
        src: unref(energySwiperSlides)[2].image,
        alt: "",
        class: "slide-img"
      }, unref(swiperBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "swiper-content" }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "swiper_title" }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(energySwiperSlides)[2].title)}</div><div${ssrRenderAttrs(mergeProps({ class: "swiper_desc" }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(energySwiperSlides)[2].desc)}</div></div></div></div><div${ssrRenderAttrs(mergeProps({
        class: "swiper-slide",
        "data-swiper-slide-index": "0"
      }, unref(swiperBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "slide-item" }, unref(swiperBind)))} data-v-3148d25e><img${ssrRenderAttrs(mergeProps({
        src: unref(energySwiperSlides)[0].image,
        alt: "",
        class: "slide-img"
      }, unref(swiperBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "swiper-content" }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "swiper_title" }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(energySwiperSlides)[0].title)}</div><div${ssrRenderAttrs(mergeProps({ class: "swiper_desc" }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(energySwiperSlides)[0].desc)}</div></div></div></div><div${ssrRenderAttrs(mergeProps({
        class: "swiper-slide",
        "data-swiper-slide-index": "1"
      }, unref(swiperBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "slide-item" }, unref(swiperBind)))} data-v-3148d25e><img${ssrRenderAttrs(mergeProps({
        src: unref(energySwiperSlides)[1].image,
        alt: "",
        class: "slide-img"
      }, unref(swiperBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "swiper-content" }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "swiper_title" }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(energySwiperSlides)[1].title)}</div><div${ssrRenderAttrs(mergeProps({ class: "swiper_desc" }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(energySwiperSlides)[1].desc)}</div></div></div></div><div${ssrRenderAttrs(mergeProps({
        class: "swiper-slide",
        "data-swiper-slide-index": "2"
      }, unref(swiperBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "slide-item" }, unref(swiperBind)))} data-v-3148d25e><img${ssrRenderAttrs(mergeProps({
        src: unref(energySwiperSlides)[2].image,
        alt: "",
        class: "slide-img"
      }, unref(swiperBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "swiper-content" }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "swiper_title" }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(energySwiperSlides)[2].title)}</div><div${ssrRenderAttrs(mergeProps({ class: "swiper_desc" }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(energySwiperSlides)[2].desc)}</div></div></div></div><div${ssrRenderAttrs(mergeProps({
        class: "swiper-slide swiper-slide-duplicate",
        "data-swiper-slide-index": "0"
      }, unref(swiperBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "slide-item" }, unref(swiperBind)))} data-v-3148d25e><img${ssrRenderAttrs(mergeProps({
        src: unref(energySwiperSlides)[0].image,
        alt: "",
        class: "slide-img"
      }, unref(swiperBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "swiper-content" }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "swiper_title" }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(energySwiperSlides)[0].title)}</div><div${ssrRenderAttrs(mergeProps({ class: "swiper_desc" }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(energySwiperSlides)[0].desc)}</div></div></div></div></div></div></div><div${ssrRenderAttrs(mergeProps({ class: "slide_content" }, unref(swiperBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "prev slide" }, unref(swiperBind)))} data-v-3148d25e></div><div${ssrRenderAttrs(mergeProps({ class: "next slide" }, unref(swiperBind)))} data-v-3148d25e></div></div><div${ssrRenderAttrs(mergeProps({ class: "indicators" }, unref(swiperBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "indicators_item" }, unref(swiperBind)))} data-v-3148d25e></div><div${ssrRenderAttrs(mergeProps({ class: "indicators_item active" }, unref(swiperBind)))} data-v-3148d25e></div><div${ssrRenderAttrs(mergeProps({ class: "indicators_item" }, unref(swiperBind)))} data-v-3148d25e></div></div></div></div></section><section${ssrRenderAttrs(mergeProps({ class: "section2 section6" }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).bookTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc" }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).bookDesc)}</div><div${ssrRenderAttrs(mergeProps({ class: "horizontal-tab commonTab" }, unref(tabBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "tab" }, unref(tabBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "tab-nav" }, unref(tabBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "tab-item active" }, unref(tabBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).tabSmart)}</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item" }, unref(tabBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).tabHome)}</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item" }, unref(tabBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).tabPublic)}</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item" }, unref(tabBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).tabFaq)}</div><div${ssrRenderAttrs(mergeProps({ class: "slide-content" }, unref(tabBind)))} data-v-3148d25e></div></div></div><div${ssrRenderAttrs(mergeProps({ class: "tab_mb" }, unref(tabBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "tab-item_mb active" }, unref(tabBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).tabSmart)}</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item_mb" }, unref(tabBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).tabHome)}</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item_mb" }, unref(tabBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).tabPublic)}</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item_mb" }, unref(tabBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).tabFaq)}</div></div></div><div${ssrRenderAttrs(mergeProps({ class: "tab-content-item active swiper_banner_full" }, unref(tabBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "swiper-voyah" }, unref(swiperBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "swiper-group-container" }, unref(swiperBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "swiper" }, unref(swiperBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "swiper-wrapper" }, unref(swiperBind)))} data-v-3148d25e><!--[-->`);
      ssrRenderList(unref(books).slice(0, 3), (book) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "swiper-slide",
          key: book.title
        }, { ref_for: true }, unref(swiperBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "slide-item clickable" }, { ref_for: true }, unref(swiperBind)))} data-v-3148d25e><img${ssrRenderAttrs(mergeProps({
          src: book.image,
          alt: "",
          class: "slide-img"
        }, { ref_for: true }, unref(swiperBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "swiper-content" }, { ref_for: true }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "book_title" }, { ref_for: true }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(book.title)}</div><div${ssrRenderAttrs(mergeProps({ class: "book_desc" }, { ref_for: true }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(book.desc)}</div><div${ssrRenderAttrs(mergeProps({ class: "more" }, { ref_for: true }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).viewDetail)}</div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div><div${ssrRenderAttrs(mergeProps({ class: "slide_content" }, unref(swiperBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "prev slide" }, unref(swiperBind)))} data-v-3148d25e></div><div${ssrRenderAttrs(mergeProps({ class: "next slide" }, unref(swiperBind)))} data-v-3148d25e></div></div><div${ssrRenderAttrs(mergeProps({ class: "indicators" }, unref(swiperBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "indicators_item active" }, unref(swiperBind)))} data-v-3148d25e></div><div${ssrRenderAttrs(mergeProps({ class: "indicators_item" }, unref(swiperBind)))} data-v-3148d25e></div><div${ssrRenderAttrs(mergeProps({ class: "indicators_item" }, unref(swiperBind)))} data-v-3148d25e></div></div></div></div></section><section${ssrRenderAttrs(mergeProps({ class: "section7" }, unref(scopeBind)))} data-v-3148d25e><img${ssrRenderAttrs(mergeProps({
        class: "headImg bg_pc",
        src: "/static/assets/partner_pc-b12d249b.png"
      }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "content" }, unref(scopeBind)))} data-v-3148d25e><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).partnerTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "more" }, unref(scopeBind)))} data-v-3148d25e><button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: "voyah-button voyah-button--default btn"
      }, unref(scopeBind)))} data-v-3148d25e>${ssrInterpolate(unref(t).learnMore)}</button></div></div></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/legacy/EnergyCenterPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EnergyCenterPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3148d25e"]]);

export { EnergyCenterPage as E };
//# sourceMappingURL=EnergyCenterPage-BqyLajo3.mjs.map
