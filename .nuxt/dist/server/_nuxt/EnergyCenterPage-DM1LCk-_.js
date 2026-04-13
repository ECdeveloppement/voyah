import { defineComponent, computed, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
        heroTitle: "岚图能源",
        heroDesc: "助力实现国家双碳战略，用科技改变汽车能源生态位，让充电成为简单小事，为用户带来多、快、智、节的最佳补能体验。",
        solutionTitle: "168能源解决方案",
        moreKey: "多",
        moreTitle: "百万资源一键直达，全国都能放心充",
        moreDesc1: "超充布局：“千站万桩”超充网络全面推进中，用户在哪里，我们就建在哪里。同时岚图积极响应国家政策，自建站点对所有新能源车主开放，让每一位新能源车主从此不必为充电这件小事而焦虑",
        moreDesc2: "公充布局：2800+区县补能网络全覆盖、西北川藏地区10万+桩、“十纵”“十横”高速充电网络畅行无忧",
        chargeMap: "岚图充电地图",
        fastKey: "快",
        fastTitle: "全球首个兆瓦级品牌超充桩",
        fastDesc: "岚图VP1000，拥有快、轻、静、兼容、安全和智能六大核心亮点，岚图知音实测充电15min续航 515km，为电动汽车用户打造的极速无感的补能体验。",
        smartKey: "智",
        smartTitle: "从“极速满电”到“无感满电”",
        smartDesc: "岚图自动充电机器人+移动充电机器人双重服务用户，不下车，不动手，全程无感充电",
        watchVideo: "查看完整视频",
        greenKey: "节",
        greenTitle: "让能源使用更有序、更节能、更环保",
        bookTitle: "岚图充电百科全书",
        bookDesc: "一书在手，补能无忧",
        tabSmart: "智慧超充攻略",
        tabHome: "家充攻略站",
        tabPublic: "公充攻略",
        tabFaq: "充电答疑",
        tabPrivate: "私桩共享",
        tabCascade: "电池梯次利用",
        power1a: "一款超级 APP",
        power1b: "1000 座超级充电站",
        power1c: "10000 根超级充电桩",
        power1d: "100 万+公共充电资源",
        power2a: "6 km 超级补能圈",
        power3a: "岚图超充",
        power3b: "公共充电",
        power3c: "家庭充电",
        power3d: "应急补电",
        power3e: "无感充电",
        power3f: "V2G",
        power3g: "私桩共享",
        power3h: "电池梯次利用",
        tabDesc: "电池梯次利用（退役电池焕发新生命）",
        viewDetail: "查看详情",
        partnerTitle: "岚图超充合伙人招募",
        learnMore: "了解更多"
      }
    };
    const t = computed(() => copy.zh);
    const electric = computed(() => [
      { value: "1000", unit: "kW", label: "峰值功率" },
      { value: "1000", unit: "A", label: "峰值电流" },
      { value: "1.7", unit: "km", label: "最快秒充" }
    ]);
    const chargeMetrics = computed(() => [
      { value: "1,540,000", unit: "", title: "整合充电资源" },
      { value: "16,000", unit: "", title: "超充资源" },
      { value: "5.3", unit: "B", title: "累计为用户充电" },
      { value: "17", unit: "0k t", title: "累计减少碳排放" }
    ]);
    const energySwiperSlides = computed(() => [
      {
        title: "V2G",
        desc: "车辆如“电力海绵”谷充峰放",
        image: "/static/assets/V2G-cba13343.jpg"
      },
      {
        title: "私桩共享",
        desc: "用户家充闲置时间变现",
        image: "/static/assets/kongxiang-f3e4984f.jpg"
      },
      {
        title: "电池梯次利用",
        desc: t.value.tabDesc,
        image: "/static/assets/tici-b570e40a.jpg"
      }
    ]);
    const books = computed(() => [
      {
        title: "超充贴士丨无感补能双功能上线",
        desc: "充电「0」操作",
        image: "/static/assets/V2G-cba13343.jpg"
      },
      {
        title: "把专属桩带回家需要几步？",
        desc: "一图get专属充电桩安装流程",
        image: "/static/assets/kongxiang-f3e4984f.jpg"
      },
      {
        title: "公桩充电手册（快电篇）",
        desc: "快电充电怎么操作？看这篇就够了",
        image: "/static/assets/tici-b570e40a.jpg"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, unref(scopeBind), _attrs))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "energy-content" }, [unref(scopeBind), unref(rootBind)]))} data-v-cd28cd5b><section${ssrRenderAttrs(mergeProps({ class: "bg" }, unref(scopeBind)))} data-v-cd28cd5b><img${ssrRenderAttrs(mergeProps({
        class: "headImg bg_pc",
        src: "/static/assets/energy_bg-4482e81f.jpg"
      }, unref(scopeBind)))} data-v-cd28cd5b><img${ssrRenderAttrs(mergeProps({
        class: "headImg bg_mb",
        src: "/static/assets/energy_bg_mb-36355b8d.png"
      }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).heroTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc" }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).heroDesc)}</div></section><section${ssrRenderAttrs(mergeProps({ class: "section_1" }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "section_1_1" }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).solutionTitle)}</div><img${ssrRenderAttrs(mergeProps({
        class: "power",
        src: "/static/assets/section_3-4777d2a7.png",
        alt: ""
      }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "power_mb" }, unref(scopeBind)))} data-v-cd28cd5b><img${ssrRenderAttrs(mergeProps({
        src: "/static/assets/section_4-4c6549b3.png",
        alt: ""
      }, unref(scopeBind)))} data-v-cd28cd5b></div><div${ssrRenderAttrs(mergeProps({ class: "section_1_2" }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "section_1_2_top" }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "section_1_2_item" }, unref(scopeBind)))} data-v-cd28cd5b><img${ssrRenderAttrs(mergeProps({
        class: "power_bg1",
        src: "/static/assets/power_bg1-7048cd30.png",
        alt: ""
      }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "power_num" }, unref(scopeBind)))} data-v-cd28cd5b>1</div><div${ssrRenderAttrs(mergeProps({ class: "power1_item" }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(unref(scopeBind))} data-v-cd28cd5b>·${ssrInterpolate(unref(t).power1a)}</div><div${ssrRenderAttrs(unref(scopeBind))} data-v-cd28cd5b>·${ssrInterpolate(unref(t).power1b)}</div><div${ssrRenderAttrs(unref(scopeBind))} data-v-cd28cd5b>·${ssrInterpolate(unref(t).power1c)}</div><div${ssrRenderAttrs(unref(scopeBind))} data-v-cd28cd5b>·${ssrInterpolate(unref(t).power1d)}</div></div></div><div${ssrRenderAttrs(mergeProps({ class: "section_1_2_item" }, unref(scopeBind)))} data-v-cd28cd5b><img${ssrRenderAttrs(mergeProps({
        class: "power_bg2",
        src: "/static/assets/power_bg2-a6639f1e.png",
        alt: ""
      }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "power_num" }, unref(scopeBind)))} data-v-cd28cd5b>6</div><div${ssrRenderAttrs(mergeProps({ class: "power2_item" }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(unref(scopeBind))} data-v-cd28cd5b>·${ssrInterpolate(unref(t).power2a)}</div></div></div></div><div${ssrRenderAttrs(mergeProps({ class: "section_1_2_bottom" }, unref(scopeBind)))} data-v-cd28cd5b><img${ssrRenderAttrs(mergeProps({
        class: "power_bg3",
        src: "/static/assets/power_bg3-d6d323e0.png",
        alt: ""
      }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "power_num" }, unref(scopeBind)))} data-v-cd28cd5b>8</div><div${ssrRenderAttrs(mergeProps({ class: "power3" }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "power3_item" }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(unref(scopeBind))} data-v-cd28cd5b>·${ssrInterpolate(unref(t).power3a)}</div><div${ssrRenderAttrs(unref(scopeBind))} data-v-cd28cd5b>·${ssrInterpolate(unref(t).power3b)}</div><div${ssrRenderAttrs(unref(scopeBind))} data-v-cd28cd5b>·${ssrInterpolate(unref(t).power3c)}</div><div${ssrRenderAttrs(unref(scopeBind))} data-v-cd28cd5b>·${ssrInterpolate(unref(t).power3d)}</div></div><div${ssrRenderAttrs(mergeProps({ class: "power3_item" }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(unref(scopeBind))} data-v-cd28cd5b>·${ssrInterpolate(unref(t).power3e)}</div><div${ssrRenderAttrs(unref(scopeBind))} data-v-cd28cd5b>·${ssrInterpolate(unref(t).power3f)}</div><div${ssrRenderAttrs(unref(scopeBind))} data-v-cd28cd5b>·${ssrInterpolate(unref(t).power3g)}</div><div${ssrRenderAttrs(unref(scopeBind))} data-v-cd28cd5b>·${ssrInterpolate(unref(t).power3h)}</div></div></div></div></div></div></section><section${ssrRenderAttrs(mergeProps({ class: "section2" }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))} data-v-cd28cd5b><span${ssrRenderAttrs(mergeProps({ class: "large" }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).moreKey)}</span>${ssrInterpolate(unref(t).moreTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc" }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).moreDesc1)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc desc1" }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).moreDesc2)}</div><div${ssrRenderAttrs(mergeProps({ class: "earth_content" }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "earth" }, unref(scopeBind)))} data-v-cd28cd5b></div><div${ssrRenderAttrs(mergeProps({ class: "charge_earth" }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "charge_title" }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).chargeMap)}</div><div${ssrRenderAttrs(mergeProps({ class: "charge_content" }, unref(scopeBind)))} data-v-cd28cd5b><!--[-->`);
      ssrRenderList(unref(chargeMetrics), (metric) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "charge_content_item",
          key: metric.title
        }, { ref_for: true }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "charge_content_item_top" }, { ref_for: true }, unref(scopeBind)))} data-v-cd28cd5b><span${ssrRenderAttrs(mergeProps({ class: "charge_content_item_top_num" }, { ref_for: true }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(metric.value)}</span>${ssrInterpolate(metric.unit)}</div><div${ssrRenderAttrs(mergeProps({ class: "charge_content_item_bottom" }, { ref_for: true }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(metric.title)}</div></div>`);
      });
      _push(`<!--]--></div></div></div></section><section${ssrRenderAttrs(mergeProps({ class: "section2 section3" }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))} data-v-cd28cd5b><span${ssrRenderAttrs(mergeProps({ class: "large" }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).fastKey)}</span>${ssrInterpolate(unref(t).fastTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc" }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).fastDesc)}</div><div${ssrRenderAttrs(mergeProps({ class: "section3_1" }, unref(scopeBind)))} data-v-cd28cd5b><img${ssrRenderAttrs(mergeProps({
        class: "charge_mb",
        src: "/static/assets/charge_mb-0e5441f2.png",
        alt: ""
      }, unref(scopeBind)))} data-v-cd28cd5b><img${ssrRenderAttrs(mergeProps({
        class: "charge_pc",
        src: "/static/assets/charge_pc-1c0a2e91.png",
        alt: ""
      }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "electric_list" }, unref(scopeBind)))} data-v-cd28cd5b><!--[-->`);
      ssrRenderList(unref(electric), (item) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "electric_item",
          key: item.value
        }, { ref_for: true }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "num" }, { ref_for: true }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(item.value)}<span${ssrRenderAttrs(mergeProps({ class: "unit" }, { ref_for: true }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(item.unit)}</span></div><div${ssrRenderAttrs(mergeProps({ class: "tips" }, { ref_for: true }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(item.label)}</div></div>`);
      });
      _push(`<!--]--></div></div></section><section${ssrRenderAttrs(mergeProps({ class: "section2 section4" }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))} data-v-cd28cd5b><span${ssrRenderAttrs(mergeProps({ class: "large" }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).smartKey)}</span>${ssrInterpolate(unref(t).smartTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc" }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).smartDesc)}</div><div${ssrRenderAttrs(mergeProps({ class: "video_btn" }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "btn" }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).watchVideo)}</div></div><div${ssrRenderAttrs(mergeProps({ class: "section4_1" }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "section4_1_content" }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "video" }, unref(scopeBind)))} data-v-cd28cd5b><video${ssrRenderAttrs(mergeProps({
        class: "video-js w-full h-full",
        autoplay: "",
        muted: "",
        loop: "",
        playsinline: "",
        preload: "auto"
      }, unref(scopeBind)))} data-v-cd28cd5b></video><img${ssrRenderAttrs(mergeProps({
        class: "section4-cover",
        src: "/static/assets/section_2-2b753ee2.png",
        alt: ""
      }, unref(scopeBind)))} data-v-cd28cd5b></div><div${ssrRenderAttrs(mergeProps({ class: "video-btn" }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).watchVideo)}</div></div></div></section><section${ssrRenderAttrs(mergeProps({ class: "section2 section5" }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))} data-v-cd28cd5b><span${ssrRenderAttrs(mergeProps({ class: "large" }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).greenKey)}</span>${ssrInterpolate(unref(t).greenTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "horizontal-tab commonTab" }, unref(tabBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "tab" }, unref(tabBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "tab-nav" }, unref(tabBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "tab-item" }, unref(tabBind)))} data-v-cd28cd5b>V2G</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item" }, unref(tabBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).tabPrivate)}</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item active" }, unref(tabBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).tabCascade)}</div><div${ssrRenderAttrs(mergeProps({ class: "slide-content" }, unref(tabBind)))} data-v-cd28cd5b></div></div></div><div${ssrRenderAttrs(mergeProps({ class: "tab_mb" }, unref(tabBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "tab-item_mb" }, unref(tabBind)))} data-v-cd28cd5b>V2G</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item_mb" }, unref(tabBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).tabPrivate)}</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item_mb active" }, unref(tabBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).tabCascade)}</div></div><div${ssrRenderAttrs(mergeProps({ class: "tab-content" }, unref(tabBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "tab-content-item active" }, unref(tabBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "tab_content_demo" }, unref(scopeBind)))} data-v-cd28cd5b><img${ssrRenderAttrs(mergeProps({
        src: "/static/assets/tici-b570e40a.jpg",
        alt: ""
      }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "tab_desc" }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).tabDesc)}</div></div></div></div></div><div${ssrRenderAttrs(mergeProps({ class: "swiper swiper_banner_full" }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "swiper-voyah" }, unref(swiperBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "swiper-group-container" }, unref(swiperBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "swiper swiper-initialized swiper-horizontal swiper-pointer-events" }, unref(swiperBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "swiper-wrapper" }, unref(swiperBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({
        class: "swiper-slide swiper-slide-duplicate",
        "data-swiper-slide-index": "2"
      }, unref(swiperBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "slide-item" }, unref(swiperBind)))} data-v-cd28cd5b><img${ssrRenderAttrs(mergeProps({
        src: unref(energySwiperSlides)[2].image,
        alt: "",
        class: "slide-img"
      }, unref(swiperBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "swiper-content" }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "swiper_title" }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(energySwiperSlides)[2].title)}</div><div${ssrRenderAttrs(mergeProps({ class: "swiper_desc" }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(energySwiperSlides)[2].desc)}</div></div></div></div><div${ssrRenderAttrs(mergeProps({
        class: "swiper-slide",
        "data-swiper-slide-index": "0"
      }, unref(swiperBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "slide-item" }, unref(swiperBind)))} data-v-cd28cd5b><img${ssrRenderAttrs(mergeProps({
        src: unref(energySwiperSlides)[0].image,
        alt: "",
        class: "slide-img"
      }, unref(swiperBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "swiper-content" }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "swiper_title" }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(energySwiperSlides)[0].title)}</div><div${ssrRenderAttrs(mergeProps({ class: "swiper_desc" }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(energySwiperSlides)[0].desc)}</div></div></div></div><div${ssrRenderAttrs(mergeProps({
        class: "swiper-slide",
        "data-swiper-slide-index": "1"
      }, unref(swiperBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "slide-item" }, unref(swiperBind)))} data-v-cd28cd5b><img${ssrRenderAttrs(mergeProps({
        src: unref(energySwiperSlides)[1].image,
        alt: "",
        class: "slide-img"
      }, unref(swiperBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "swiper-content" }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "swiper_title" }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(energySwiperSlides)[1].title)}</div><div${ssrRenderAttrs(mergeProps({ class: "swiper_desc" }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(energySwiperSlides)[1].desc)}</div></div></div></div><div${ssrRenderAttrs(mergeProps({
        class: "swiper-slide",
        "data-swiper-slide-index": "2"
      }, unref(swiperBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "slide-item" }, unref(swiperBind)))} data-v-cd28cd5b><img${ssrRenderAttrs(mergeProps({
        src: unref(energySwiperSlides)[2].image,
        alt: "",
        class: "slide-img"
      }, unref(swiperBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "swiper-content" }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "swiper_title" }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(energySwiperSlides)[2].title)}</div><div${ssrRenderAttrs(mergeProps({ class: "swiper_desc" }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(energySwiperSlides)[2].desc)}</div></div></div></div><div${ssrRenderAttrs(mergeProps({
        class: "swiper-slide swiper-slide-duplicate",
        "data-swiper-slide-index": "0"
      }, unref(swiperBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "slide-item" }, unref(swiperBind)))} data-v-cd28cd5b><img${ssrRenderAttrs(mergeProps({
        src: unref(energySwiperSlides)[0].image,
        alt: "",
        class: "slide-img"
      }, unref(swiperBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "swiper-content" }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "swiper_title" }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(energySwiperSlides)[0].title)}</div><div${ssrRenderAttrs(mergeProps({ class: "swiper_desc" }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(energySwiperSlides)[0].desc)}</div></div></div></div></div></div></div><div${ssrRenderAttrs(mergeProps({ class: "slide_content" }, unref(swiperBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "prev slide" }, unref(swiperBind)))} data-v-cd28cd5b></div><div${ssrRenderAttrs(mergeProps({ class: "next slide" }, unref(swiperBind)))} data-v-cd28cd5b></div></div><div${ssrRenderAttrs(mergeProps({ class: "indicators" }, unref(swiperBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "indicators_item" }, unref(swiperBind)))} data-v-cd28cd5b></div><div${ssrRenderAttrs(mergeProps({ class: "indicators_item active" }, unref(swiperBind)))} data-v-cd28cd5b></div><div${ssrRenderAttrs(mergeProps({ class: "indicators_item" }, unref(swiperBind)))} data-v-cd28cd5b></div></div></div></div></section><section${ssrRenderAttrs(mergeProps({ class: "section2 section6" }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).bookTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "desc" }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).bookDesc)}</div><div${ssrRenderAttrs(mergeProps({ class: "horizontal-tab commonTab" }, unref(tabBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "tab" }, unref(tabBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "tab-nav" }, unref(tabBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "tab-item active" }, unref(tabBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).tabSmart)}</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item" }, unref(tabBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).tabHome)}</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item" }, unref(tabBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).tabPublic)}</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item" }, unref(tabBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).tabFaq)}</div><div${ssrRenderAttrs(mergeProps({ class: "slide-content" }, unref(tabBind)))} data-v-cd28cd5b></div></div></div><div${ssrRenderAttrs(mergeProps({ class: "tab_mb" }, unref(tabBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "tab-item_mb active" }, unref(tabBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).tabSmart)}</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item_mb" }, unref(tabBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).tabHome)}</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item_mb" }, unref(tabBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).tabPublic)}</div><div${ssrRenderAttrs(mergeProps({ class: "tab-item_mb" }, unref(tabBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).tabFaq)}</div></div></div><div${ssrRenderAttrs(mergeProps({ class: "tab-content-item active swiper_banner_full" }, unref(tabBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "swiper-voyah" }, unref(swiperBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "swiper-group-container" }, unref(swiperBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "swiper" }, unref(swiperBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "swiper-wrapper" }, unref(swiperBind)))} data-v-cd28cd5b><!--[-->`);
      ssrRenderList(unref(books).slice(0, 3), (book) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "swiper-slide",
          key: book.title
        }, { ref_for: true }, unref(swiperBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "slide-item clickable" }, { ref_for: true }, unref(swiperBind)))} data-v-cd28cd5b><img${ssrRenderAttrs(mergeProps({
          src: book.image,
          alt: "",
          class: "slide-img"
        }, { ref_for: true }, unref(swiperBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "swiper-content" }, { ref_for: true }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "book_title" }, { ref_for: true }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(book.title)}</div><div${ssrRenderAttrs(mergeProps({ class: "book_desc" }, { ref_for: true }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(book.desc)}</div><div${ssrRenderAttrs(mergeProps({ class: "more" }, { ref_for: true }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).viewDetail)}</div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div><div${ssrRenderAttrs(mergeProps({ class: "slide_content" }, unref(swiperBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "prev slide" }, unref(swiperBind)))} data-v-cd28cd5b></div><div${ssrRenderAttrs(mergeProps({ class: "next slide" }, unref(swiperBind)))} data-v-cd28cd5b></div></div><div${ssrRenderAttrs(mergeProps({ class: "indicators" }, unref(swiperBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "indicators_item active" }, unref(swiperBind)))} data-v-cd28cd5b></div><div${ssrRenderAttrs(mergeProps({ class: "indicators_item" }, unref(swiperBind)))} data-v-cd28cd5b></div><div${ssrRenderAttrs(mergeProps({ class: "indicators_item" }, unref(swiperBind)))} data-v-cd28cd5b></div></div></div></div></section><section${ssrRenderAttrs(mergeProps({ class: "section7" }, unref(scopeBind)))} data-v-cd28cd5b><img${ssrRenderAttrs(mergeProps({
        class: "headImg bg_pc",
        src: "/static/assets/partner_pc-b12d249b.png"
      }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "content" }, unref(scopeBind)))} data-v-cd28cd5b><div${ssrRenderAttrs(mergeProps({ class: "title" }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).partnerTitle)}</div><div${ssrRenderAttrs(mergeProps({ class: "more" }, unref(scopeBind)))} data-v-cd28cd5b><button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: "voyah-button voyah-button--default btn"
      }, unref(scopeBind)))} data-v-cd28cd5b>${ssrInterpolate(unref(t).learnMore)}</button></div></div></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/legacy/EnergyCenterPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EnergyCenterPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cd28cd5b"]]);
export {
  EnergyCenterPage as E
};
//# sourceMappingURL=EnergyCenterPage-DM1LCk-_.js.map
