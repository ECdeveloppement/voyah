<template>
  <div class="page-container" v-bind="scopeBind">
    <div class="energy-content" v-bind="[scopeBind, rootBind]">
      <section class="bg" v-bind="scopeBind">
        <img class="headImg bg_pc" :src="'/static/assets/energy_bg-4482e81f.jpg'" v-bind="scopeBind" />
        <img class="headImg bg_mb" :src="'/static/assets/energy_bg_mb-36355b8d.png'" v-bind="scopeBind" />
        <div class="title" v-bind="scopeBind">{{ t.heroTitle }}</div>
        <div class="desc" v-bind="scopeBind">
          {{ t.heroDesc }}
        </div>
      </section>

      <section class="section_1" v-bind="scopeBind">
        <div class="section_1_1" v-bind="scopeBind">
          <div class="title" v-bind="scopeBind">{{ t.solutionTitle }}</div>
          <img class="power" :src="'/static/assets/section_3-4777d2a7.png'" alt="" v-bind="scopeBind" />
          <div class="power_mb" v-bind="scopeBind">
            <img :src="'/static/assets/section_4-4c6549b3.png'" alt="" v-bind="scopeBind" />
          </div>
          <div class="section_1_2" v-bind="scopeBind">
            <div class="section_1_2_top" v-bind="scopeBind">
              <div class="section_1_2_item" v-bind="scopeBind">
                <img class="power_bg1" :src="'/static/assets/power_bg1-7048cd30.png'" alt="" v-bind="scopeBind" />
                <div class="power_num" v-bind="scopeBind">1</div>
                <div class="power1_item" v-bind="scopeBind">
                  <div v-bind="scopeBind">·{{ t.power1a }}</div>
                  <div v-bind="scopeBind">·{{ t.power1b }}</div>
                  <div v-bind="scopeBind">·{{ t.power1c }}</div>
                  <div v-bind="scopeBind">·{{ t.power1d }}</div>
                </div>
              </div>
              <div class="section_1_2_item" v-bind="scopeBind">
                <img class="power_bg2" :src="'/static/assets/power_bg2-a6639f1e.png'" alt="" v-bind="scopeBind" />
                <div class="power_num" v-bind="scopeBind">6</div>
                <div class="power2_item" v-bind="scopeBind">
                  <div v-bind="scopeBind">·{{ t.power2a }}</div>
                </div>
              </div>
            </div>
            <div class="section_1_2_bottom" v-bind="scopeBind">
              <img class="power_bg3" :src="'/static/assets/power_bg3-d6d323e0.png'" alt="" v-bind="scopeBind" />
              <div class="power_num" v-bind="scopeBind">8</div>
              <div class="power3" v-bind="scopeBind">
                <div class="power3_item" v-bind="scopeBind">
                  <div v-bind="scopeBind">·{{ t.power3a }}</div>
                  <div v-bind="scopeBind">·{{ t.power3b }}</div>
                  <div v-bind="scopeBind">·{{ t.power3c }}</div>
                  <div v-bind="scopeBind">·{{ t.power3d }}</div>
                </div>
                <div class="power3_item" v-bind="scopeBind">
                  <div v-bind="scopeBind">·{{ t.power3e }}</div>
                  <div v-bind="scopeBind">·{{ t.power3f }}</div>
                  <div v-bind="scopeBind">·{{ t.power3g }}</div>
                  <div v-bind="scopeBind">·{{ t.power3h }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section2" v-bind="scopeBind">
        <div class="title" v-bind="scopeBind"><span class="large" v-bind="scopeBind">{{ t.moreKey }}</span>{{ t.moreTitle }}</div>
        <div class="desc" v-bind="scopeBind">{{ t.moreDesc1 }}</div>
        <div class="desc desc1" v-bind="scopeBind">{{ t.moreDesc2 }}</div>
        <div class="earth_content" v-bind="scopeBind">
          <div class="earth" v-bind="scopeBind" />
          <div class="charge_earth" v-bind="scopeBind">
            <div class="charge_title" v-bind="scopeBind">{{ t.chargeMap }}</div>
            <div class="charge_content" v-bind="scopeBind">
              <div class="charge_content_item" v-for="metric in chargeMetrics" :key="metric.title" v-bind="scopeBind">
                <div class="charge_content_item_top" v-bind="scopeBind">
                  <span class="charge_content_item_top_num" v-bind="scopeBind">{{ metric.value }}</span>{{ metric.unit }}
                </div>
                <div class="charge_content_item_bottom" v-bind="scopeBind">{{ metric.title }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section2 section3" v-bind="scopeBind">
        <div class="title" v-bind="scopeBind"><span class="large" v-bind="scopeBind">{{ t.fastKey }}</span>{{ t.fastTitle }}</div>
        <div class="desc" v-bind="scopeBind">{{ t.fastDesc }}</div>
        <div class="section3_1" v-bind="scopeBind">
          <img class="charge_mb" :src="'/static/assets/charge_mb-0e5441f2.png'" alt="" v-bind="scopeBind" />
          <img class="charge_pc" :src="'/static/assets/charge_pc-1c0a2e91.png'" alt="" v-bind="scopeBind" />
          <div class="electric_list" v-bind="scopeBind">
            <div class="electric_item" v-for="item in electric" :key="item.value" v-bind="scopeBind">
              <div class="num" v-bind="scopeBind">{{ item.value }}<span class="unit" v-bind="scopeBind">{{ item.unit }}</span></div>
              <div class="tips" v-bind="scopeBind">{{ item.label }}</div>
            </div>
          </div>
        </div>
      </section>

      <section class="section2 section4" v-bind="scopeBind">
        <div class="title" v-bind="scopeBind"><span class="large" v-bind="scopeBind">{{ t.smartKey }}</span>{{ t.smartTitle }}</div>
        <div class="desc" v-bind="scopeBind">{{ t.smartDesc }}</div>
        <div class="video_btn" v-bind="scopeBind"><div class="btn" v-bind="scopeBind">{{ t.watchVideo }}</div></div>
        <div class="section4_1" v-bind="scopeBind">
          <div class="section4_1_content" v-bind="scopeBind">
            <div class="video" v-bind="scopeBind">
              <video class="video-js w-full h-full" autoplay muted loop playsinline preload="auto" v-bind="scopeBind" />
              <img class="section4-cover" :src="'/static/assets/section_2-2b753ee2.png'" alt="" v-bind="scopeBind" />
            </div>
            <div class="video-btn" v-bind="scopeBind">{{ t.watchVideo }}</div>
          </div>
        </div>
      </section>

      <section class="section2 section5" v-bind="scopeBind">
        <div class="title" v-bind="scopeBind"><span class="large" v-bind="scopeBind">{{ t.greenKey }}</span>{{ t.greenTitle }}</div>
        <div class="horizontal-tab commonTab" v-bind="tabBind">
          <div class="tab" v-bind="tabBind">
            <div class="tab-nav" v-bind="tabBind">
              <div class="tab-item" v-bind="tabBind">V2G</div>
              <div class="tab-item" v-bind="tabBind">{{ t.tabPrivate }}</div>
              <div class="tab-item active" v-bind="tabBind">{{ t.tabCascade }}</div>
              <div class="slide-content" v-bind="tabBind" />
            </div>
          </div>
          <div class="tab_mb" v-bind="tabBind">
            <div class="tab-item_mb" v-bind="tabBind">V2G</div>
            <div class="tab-item_mb" v-bind="tabBind">{{ t.tabPrivate }}</div>
            <div class="tab-item_mb active" v-bind="tabBind">{{ t.tabCascade }}</div>
          </div>
          <div class="tab-content" v-bind="tabBind">
            <div class="tab-content-item active" v-bind="tabBind">
              <div class="tab_content_demo" v-bind="scopeBind">
                <img :src="'/static/assets/tici-b570e40a.jpg'" alt="" v-bind="scopeBind" />
                <div class="tab_desc" v-bind="scopeBind">{{ t.tabDesc }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper swiper_banner_full" v-bind="scopeBind">
          <div class="swiper-voyah" v-bind="swiperBind">
            <div class="swiper-group-container" v-bind="swiperBind">
              <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events" v-bind="swiperBind">
                <div class="swiper-wrapper" v-bind="swiperBind">
                  <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2" v-bind="swiperBind">
                    <div class="slide-item" v-bind="swiperBind">
                      <img :src="energySwiperSlides[2].image" alt="" class="slide-img" v-bind="swiperBind" />
                      <div class="swiper-content" v-bind="scopeBind">
                        <div class="swiper_title" v-bind="scopeBind">{{ energySwiperSlides[2].title }}</div>
                        <div class="swiper_desc" v-bind="scopeBind">{{ energySwiperSlides[2].desc }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide" data-swiper-slide-index="0" v-bind="swiperBind">
                    <div class="slide-item" v-bind="swiperBind">
                      <img :src="energySwiperSlides[0].image" alt="" class="slide-img" v-bind="swiperBind" />
                      <div class="swiper-content" v-bind="scopeBind">
                        <div class="swiper_title" v-bind="scopeBind">{{ energySwiperSlides[0].title }}</div>
                        <div class="swiper_desc" v-bind="scopeBind">{{ energySwiperSlides[0].desc }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide" data-swiper-slide-index="1" v-bind="swiperBind">
                    <div class="slide-item" v-bind="swiperBind">
                      <img :src="energySwiperSlides[1].image" alt="" class="slide-img" v-bind="swiperBind" />
                      <div class="swiper-content" v-bind="scopeBind">
                        <div class="swiper_title" v-bind="scopeBind">{{ energySwiperSlides[1].title }}</div>
                        <div class="swiper_desc" v-bind="scopeBind">{{ energySwiperSlides[1].desc }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide" data-swiper-slide-index="2" v-bind="swiperBind">
                    <div class="slide-item" v-bind="swiperBind">
                      <img :src="energySwiperSlides[2].image" alt="" class="slide-img" v-bind="swiperBind" />
                      <div class="swiper-content" v-bind="scopeBind">
                        <div class="swiper_title" v-bind="scopeBind">{{ energySwiperSlides[2].title }}</div>
                        <div class="swiper_desc" v-bind="scopeBind">{{ energySwiperSlides[2].desc }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" v-bind="swiperBind">
                    <div class="slide-item" v-bind="swiperBind">
                      <img :src="energySwiperSlides[0].image" alt="" class="slide-img" v-bind="swiperBind" />
                      <div class="swiper-content" v-bind="scopeBind">
                        <div class="swiper_title" v-bind="scopeBind">{{ energySwiperSlides[0].title }}</div>
                        <div class="swiper_desc" v-bind="scopeBind">{{ energySwiperSlides[0].desc }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide_content" v-bind="swiperBind">
              <div class="prev slide" v-bind="swiperBind" />
              <div class="next slide" v-bind="swiperBind" />
            </div>
            <div class="indicators" v-bind="swiperBind">
              <div class="indicators_item" v-bind="swiperBind" />
              <div class="indicators_item active" v-bind="swiperBind" />
              <div class="indicators_item" v-bind="swiperBind" />
            </div>
          </div>
        </div>
      </section>

      <section class="section2 section6" v-bind="scopeBind">
        <div class="title" v-bind="scopeBind">{{ t.bookTitle }}</div>
        <div class="desc" v-bind="scopeBind">{{ t.bookDesc }}</div>
        <div class="horizontal-tab commonTab" v-bind="tabBind">
          <div class="tab" v-bind="tabBind">
            <div class="tab-nav" v-bind="tabBind">
              <div class="tab-item active" v-bind="tabBind">{{ t.tabSmart }}</div>
              <div class="tab-item" v-bind="tabBind">{{ t.tabHome }}</div>
              <div class="tab-item" v-bind="tabBind">{{ t.tabPublic }}</div>
              <div class="tab-item" v-bind="tabBind">{{ t.tabFaq }}</div>
              <div class="slide-content" v-bind="tabBind" />
            </div>
          </div>
          <div class="tab_mb" v-bind="tabBind">
            <div class="tab-item_mb active" v-bind="tabBind">{{ t.tabSmart }}</div>
            <div class="tab-item_mb" v-bind="tabBind">{{ t.tabHome }}</div>
            <div class="tab-item_mb" v-bind="tabBind">{{ t.tabPublic }}</div>
            <div class="tab-item_mb" v-bind="tabBind">{{ t.tabFaq }}</div>
          </div>
        </div>
        <div class="tab-content-item active swiper_banner_full" v-bind="tabBind">
          <div class="swiper-voyah" v-bind="swiperBind">
          <div class="swiper-group-container" v-bind="swiperBind">
            <div class="swiper" v-bind="swiperBind">
              <div class="swiper-wrapper" v-bind="swiperBind">
                <div class="swiper-slide" v-for="book in books.slice(0, 3)" :key="book.title" v-bind="swiperBind">
                  <div class="slide-item clickable" v-bind="swiperBind">
                    <img :src="book.image" alt="" class="slide-img" v-bind="swiperBind" />
                    <div class="swiper-content" v-bind="scopeBind">
                      <div class="book_title" v-bind="scopeBind">{{ book.title }}</div>
                      <div class="book_desc" v-bind="scopeBind">{{ book.desc }}</div>
                      <div class="more" v-bind="scopeBind">{{ t.viewDetail }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide_content" v-bind="swiperBind">
            <div class="prev slide" v-bind="swiperBind" />
            <div class="next slide" v-bind="swiperBind" />
          </div>
          <div class="indicators" v-bind="swiperBind">
            <div class="indicators_item active" v-bind="swiperBind" />
            <div class="indicators_item" v-bind="swiperBind" />
            <div class="indicators_item" v-bind="swiperBind" />
          </div>
          </div>
        </div>
      </section>

      <section class="section7" v-bind="scopeBind">
        <img class="headImg bg_pc" :src="'/static/assets/partner_pc-b12d249b.png'" v-bind="scopeBind" />
        <div class="content" v-bind="scopeBind">
          <div class="title" v-bind="scopeBind">{{ t.partnerTitle }}</div>
          <div class="more" v-bind="scopeBind"><button type="button" class="voyah-button voyah-button--default btn" v-bind="scopeBind">{{ t.learnMore }}</button></div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const scopeBind = computed(() => ({ 'data-v-1b0d1efa': '' }))
const swiperBind = computed(() => ({ 'data-v-58c4cd38': '' }))
const tabBind = computed(() => ({ 'data-v-91531671': '' }))
const rootBind = computed(() => ({ 'data-v-661de974': '' }))
const lang = ref<'zh'>('zh')

const copy = {
  zh: {
    heroTitle: '岚图能源',
    heroDesc: '助力实现国家双碳战略，用科技改变汽车能源生态位，让充电成为简单小事，为用户带来多、快、智、节的最佳补能体验。',
    solutionTitle: '168能源解决方案',
    moreKey: '多',
    moreTitle: '百万资源一键直达，全国都能放心充',
    moreDesc1: '超充布局：“千站万桩”超充网络全面推进中，用户在哪里，我们就建在哪里。同时岚图积极响应国家政策，自建站点对所有新能源车主开放，让每一位新能源车主从此不必为充电这件小事而焦虑',
    moreDesc2: '公充布局：2800+区县补能网络全覆盖、西北川藏地区10万+桩、“十纵”“十横”高速充电网络畅行无忧',
    chargeMap: '岚图充电地图',
    fastKey: '快',
    fastTitle: '全球首个兆瓦级品牌超充桩',
    fastDesc: '岚图VP1000，拥有快、轻、静、兼容、安全和智能六大核心亮点，岚图知音实测充电15min续航 515km，为电动汽车用户打造的极速无感的补能体验。',
    smartKey: '智',
    smartTitle: '从“极速满电”到“无感满电”',
    smartDesc: '岚图自动充电机器人+移动充电机器人双重服务用户，不下车，不动手，全程无感充电',
    watchVideo: '查看完整视频',
    greenKey: '节',
    greenTitle: '让能源使用更有序、更节能、更环保',
    bookTitle: '岚图充电百科全书',
    bookDesc: '一书在手，补能无忧',
    tabSmart: '智慧超充攻略',
    tabHome: '家充攻略站',
    tabPublic: '公充攻略',
    tabFaq: '充电答疑',
    tabPrivate: '私桩共享',
    tabCascade: '电池梯次利用',
    power1a: '一款超级 APP',
    power1b: '1000 座超级充电站',
    power1c: '10000 根超级充电桩',
    power1d: '100 万+公共充电资源',
    power2a: '6 km 超级补能圈',
    power3a: '岚图超充',
    power3b: '公共充电',
    power3c: '家庭充电',
    power3d: '应急补电',
    power3e: '无感充电',
    power3f: 'V2G',
    power3g: '私桩共享',
    power3h: '电池梯次利用',
    tabDesc: '电池梯次利用（退役电池焕发新生命）',
    viewDetail: '查看详情',
    partnerTitle: '岚图超充合伙人招募',
    learnMore: '了解更多'
  }
} as const

const t = computed(() => copy.zh)

const electric = computed(() => [
  { value: '1000', unit: 'kW', label: '峰值功率' },
  { value: '1000', unit: 'A', label: '峰值电流' },
  { value: '1.7', unit: 'km', label: '最快秒充' }
])

const chargeMetrics = computed(() => [
  { value: '1,540,000', unit: '', title: '整合充电资源' },
  { value: '16,000', unit: '', title: '超充资源' },
  { value: '5.3', unit: 'B', title: '累计为用户充电' },
  { value: '17', unit: '0k t', title: '累计减少碳排放' }
])

const energySwiperSlides = computed(() => [
  {
    title: 'V2G',
    desc: '车辆如“电力海绵”谷充峰放',
    image: '/static/assets/V2G-cba13343.jpg'
  },
  {
    title: '私桩共享',
    desc: '用户家充闲置时间变现',
    image: '/static/assets/kongxiang-f3e4984f.jpg'
  },
  {
    title: '电池梯次利用',
    desc: t.value.tabDesc,
    image: '/static/assets/tici-b570e40a.jpg'
  }
])

const books = computed(() => [
  {
    title: '超充贴士丨无感补能双功能上线',
    desc: '充电「0」操作',
    image: '/static/assets/V2G-cba13343.jpg'
  },
  {
    title: '把专属桩带回家需要几步？',
    desc: '一图get专属充电桩安装流程',
    image: '/static/assets/kongxiang-f3e4984f.jpg'
  },
  {
    title: '公桩充电手册（快电篇）',
    desc: '快电充电怎么操作？看这篇就够了',
    image: '/static/assets/tici-b570e40a.jpg'
  }
])
</script>

<style scoped>
.section4-cover {
  width: 100%;
  display: block;
  height: 100%;
  object-fit: cover;
}

.swiper-slide {
  width: 32%;
}
</style>

