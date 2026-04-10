<template>
  <div class="page-container" v-bind="scopeBind">
    <div class="service-content" v-bind="scopeBind">
      <section class="bg" v-bind="scopeBind">
        <div class="video" v-bind="scopeBind">
          <video class="video-js w-full h-full" autoplay muted loop playsinline preload="auto" v-bind="scopeBind" />
          <img class="hero-poster" :src="'/static/assets/userser_poster-570ed436.png'" alt="banner" v-bind="scopeBind" />
        </div>
        <div class="hero-overlay" v-bind="scopeBind" />
        <div class="title inview-child inview-animated" v-bind="scopeBind">{{ t.heroTitle }}</div>
        <div class="call inview-child inview-animated" v-bind="scopeBind">{{ t.helpPhone }}</div>
        <div class="video-btn" v-bind="scopeBind">
          {{ t.watchVideo }}
          <span class="video-btn-arrow" v-bind="scopeBind">→</span>
        </div>
      </section>

      <section class="section_1" v-bind="scopeBind">
        <div class="section_1_1" v-bind="scopeBind">
          <div class="img_1 inview-child" v-bind="scopeBind">
            <img class="img_pc" :src="'/static/assets/section_1-ecb64e56.png'" alt="" v-bind="scopeBind" />
          </div>
          <div class="img_2 inview-child" v-bind="scopeBind">
            <img class="img_pc" :src="'/static/assets/section_2-84b4d8ae.jpg'" alt="" v-bind="scopeBind" />
          </div>
        </div>

        <div class="section_1_2" v-bind="scopeBind">
          <div class="img_1 inview-child" v-bind="scopeBind">
            <div class="title" v-bind="scopeBind">{{ t.promiseTitle }}</div>
            <div class="desc" v-bind="scopeBind">{{ t.promiseDesc }}</div>
          </div>
          <div class="img_2 inview-child" v-bind="scopeBind">
            <div class="title" v-bind="scopeBind">{{ t.wholeheartedTitle }}</div>
            <div class="desc" v-bind="scopeBind">
              {{ t.wholeheartedDesc1 }}
              <br v-bind="scopeBind" />
              {{ t.wholeheartedDesc2 }}
            </div>
          </div>
        </div>

        <div class="section_1_3" v-bind="scopeBind">
          <div class="img_2 inview-child" v-bind="scopeBind">
            <img class="img_pc" :src="'/static/assets/section_5-80a7d36b.jpg'" alt="" v-bind="scopeBind" />
          </div>
          <div class="img_1 inview-child" v-bind="scopeBind">
            <div class="title" v-bind="scopeBind">{{ t.sincereTitle }}</div>
            <div class="desc" v-bind="scopeBind">{{ t.sincereDesc }}</div>
          </div>
        </div>
      </section>

      <section class="section_2" v-bind="scopeBind">
        <div class="title inview-child" v-bind="scopeBind">{{ t.spaceTitle }}</div>
        <div class="desc inview-child" v-bind="scopeBind">
          {{ t.spaceDesc1 }}
          <br v-bind="scopeBind" />
          {{ t.spaceDesc2 }}
        </div>
        <div class="swiper-voyah inview-child" v-bind="swiperBind">
          <div class="swiper-group-container" v-bind="swiperBind">
            <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events" v-bind="swiperBind">
              <div class="swiper-wrapper" v-bind="swiperBind">
                <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2" v-bind="swiperBind">
                  <div class="slide-item" v-bind="swiperBind">
                    <img :src="spaceSlides[2]" alt="" class="slide-img" v-bind="swiperBind" />
                  </div>
                </div>
                <div class="swiper-slide" data-swiper-slide-index="0" v-bind="swiperBind">
                  <div class="slide-item" v-bind="swiperBind">
                    <img :src="spaceSlides[0]" alt="" class="slide-img" v-bind="swiperBind" />
                  </div>
                </div>
                <div class="swiper-slide" data-swiper-slide-index="1" v-bind="swiperBind">
                  <div class="slide-item" v-bind="swiperBind">
                    <img :src="spaceSlides[1]" alt="" class="slide-img" v-bind="swiperBind" />
                  </div>
                </div>
                <div class="swiper-slide" data-swiper-slide-index="2" v-bind="swiperBind">
                  <div class="slide-item" v-bind="swiperBind">
                    <img :src="spaceSlides[2]" alt="" class="slide-img" v-bind="swiperBind" />
                  </div>
                </div>
                <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" v-bind="swiperBind">
                  <div class="slide-item" v-bind="swiperBind">
                    <img :src="spaceSlides[0]" alt="" class="slide-img" v-bind="swiperBind" />
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
      </section>

      <section class="section_3" v-bind="scopeBind">
        <div class="title inview-child" v-bind="scopeBind">{{ t.buyTitle }}</div>
        <div class="desc inview-child" v-bind="scopeBind">{{ t.buyDesc }}</div>
        <div class="section_3_content inview-child" v-bind="scopeBind">
          <article class="section_3_content_item inview-child" v-for="item in purchaseCards" :key="item.title" v-bind="scopeBind">
            <div class="img" :class="item.imageClass" v-bind="scopeBind">
              <img :src="item.image" alt="" v-bind="scopeBind" />
            </div>
            <div class="bottom" v-bind="scopeBind">
              <div class="sub_title" v-bind="scopeBind">{{ item.title }}</div>
              <div class="sub_desc" v-bind="scopeBind">{{ item.desc }}</div>
            </div>
          </article>
        </div>
      </section>

      <section class="section_3 section_4" v-bind="scopeBind">
        <div class="title inview-child" v-bind="scopeBind">{{ t.afterTitle }}</div>
        <div class="desc inview-child" v-bind="scopeBind">{{ t.afterDesc }}</div>
        <div class="section_3_content inview-child" v-bind="scopeBind">
          <article class="section_3_content_item inview-child" v-for="item in afterSaleCards" :key="item.title" v-bind="scopeBind">
            <div class="img" :class="item.imageClass" v-bind="scopeBind">
              <img :src="item.image" alt="" v-bind="scopeBind" />
            </div>
            <div class="bottom" v-bind="scopeBind">
              <div class="sub_title" v-bind="scopeBind">{{ item.title }}</div>
              <div class="sub_desc" v-bind="scopeBind">{{ item.desc }}</div>
            </div>
          </article>
        </div>
      </section>

      <section class="section_3 section_5" v-bind="scopeBind">
        <div class="title inview-child" v-bind="scopeBind">{{ t.storyTitle }}</div>
        <div class="desc inview-child" v-bind="scopeBind">{{ t.storyDesc }}</div>
        <div class="section_3_content inview-child" v-bind="scopeBind">
          <article class="section_3_content_item" v-for="story in stories" :key="story.title" v-bind="scopeBind">
            <div class="img img_4" v-bind="scopeBind">
              <img :src="story.image" alt="" v-bind="scopeBind" />
            </div>
            <div class="bottom" v-bind="scopeBind">
              <div class="sub_title" v-bind="scopeBind">{{ story.title }}</div>
              <div class="sub_desc" v-bind="scopeBind">{{ story.desc }}</div>
              <div class="more" v-bind="scopeBind">
                <span class="view" v-bind="scopeBind">{{ t.viewDetail }}</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="section_3 section_6" v-bind="scopeBind">
        <div class="title inview-child" v-bind="scopeBind">{{ t.mallTitle }}</div>
        <div class="desc inview-child" v-bind="scopeBind">{{ t.mallDesc }}</div>
        <div class="accordion-contain inview-child service-accordion" v-bind="accordionBind">
          <div
            v-for="(item, index) in storeAccordion"
            :key="item.title"
            class="item"
            :class="{ active: index === 0 }"
            :style="{ backgroundImage: `url(${item.image})` }"
            v-bind="accordionBind"
          >
            <div class="shadow" v-bind="accordionBind" />
            <div class="title title-show title-hidden" v-bind="accordionBind">{{ item.title }}</div>
            <div class="item-wrapper" v-bind="accordionBind">
              <div class="title" v-bind="accordionBind">{{ item.title }}</div>
              <div class="desc" v-bind="accordionBind">{{ item.desc }}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const scopeBind = computed(() => ({ 'data-v-974500ae': '' }))
const swiperBind = computed(() => ({ 'data-v-8116d67d': '' }))
const accordionBind = computed(() => ({ 'data-v-d1806854': '' }))
const lang = ref<'en' | 'fr' | 'ar'>('en')

const copy = {
  en: {
    heroTitle: 'Voyah Service',
    helpPhone: 'Rescue hotline: 400 888 8488',
    watchVideo: 'Watch full video',
    promiseTitle: 'Sincere Promise',
    promiseDesc: 'We honor every promise with sincerity',
    wholeheartedTitle: 'Wholehearted',
    wholeheartedDesc1: 'Voyah service follows a wholehearted philosophy',
    wholeheartedDesc2: 'to deliver a trustworthy full-journey user experience',
    sincereTitle: 'True Care',
    sincereDesc: 'We treat every detail with sincerity',
    spaceTitle: 'Voyah Space',
    spaceDesc1: 'Voyah builds a direct operation ecosystem with better product value and user experience.',
    spaceDesc2: 'Today, Voyah operates stores in 212 cities globally with efficient and transparent service.',
    buyTitle: 'Purchase Service',
    buyDesc: 'Sincere promise for every stage of buying',
    afterTitle: 'After-sales Service',
    afterDesc: 'True care in every service detail',
    storyTitle: 'Service Stories',
    storyDesc: 'Fresh stories from users and communities',
    viewDetail: 'View details',
    mallTitle: 'Voyah Mall',
    mallDesc: 'More than vehicles, a companion for every part of life'
  },
  fr: {
    heroTitle: 'Service Voyah',
    helpPhone: 'Assistance: 400 888 8488',
    watchVideo: 'Voir la video complete',
    promiseTitle: 'Engagement sincere',
    promiseDesc: 'Nous tenons chaque promesse avec sincerite',
    wholeheartedTitle: 'Entierement dedie',
    wholeheartedDesc1: 'Le service Voyah suit une philosophie complete',
    wholeheartedDesc2: 'pour une experience de confiance sur tout le parcours',
    sincereTitle: 'Attention sincere',
    sincereDesc: 'Chaque detail est traite avec soin',
    spaceTitle: 'Espace Voyah',
    spaceDesc1: "Voyah construit un ecosysteme direct avec plus de valeur et une meilleure experience.",
    spaceDesc2: 'Voyah est present dans 212 villes avec un service efficace et transparent.',
    buyTitle: "Service d'achat",
    buyDesc: "Une promesse sincere a chaque etape de l'achat",
    afterTitle: 'Service apres-vente',
    afterDesc: 'Une attention reelle dans chaque detail',
    storyTitle: 'Histoires de service',
    storyDesc: 'Actualites et histoires de la communaute',
    viewDetail: 'Voir le detail',
    mallTitle: 'Boutique Voyah',
    mallDesc: 'Au-dela de la voiture, un compagnon du quotidien'
  },
  ar: {
    heroTitle: 'خدمات Voyah',
    helpPhone: 'هاتف المساعدة: 400 888 8488',
    watchVideo: 'شاهد الفيديو الكامل',
    promiseTitle: 'وعد صادق',
    promiseDesc: 'نفي بكل وعد بصدق',
    wholeheartedTitle: 'اهتمام كامل',
    wholeheartedDesc1: 'تتبنى خدمة Voyah فلسفة خدمة متكاملة',
    wholeheartedDesc2: 'لتقديم تجربة موثوقة طوال رحلة الاستخدام',
    sincereTitle: 'عناية حقيقية',
    sincereDesc: 'نهتم بكل التفاصيل بصدق',
    spaceTitle: 'فضاء Voyah',
    spaceDesc1: 'تبني Voyah منظومة تشغيل مباشر بقيمة اعلى وتجربة افضل.',
    spaceDesc2: 'تمتلك Voyah متاجر في 212 مدينة مع خدمة فعالة وشفافة.',
    buyTitle: 'خدمة الشراء',
    buyDesc: 'وعد صادق في كل مرحلة من الشراء',
    afterTitle: 'خدمة ما بعد البيع',
    afterDesc: 'عناية حقيقية في كل تفاصيل الخدمة',
    storyTitle: 'قصص الخدمة',
    storyDesc: 'قصص جديدة من المستخدمين والمجتمع',
    viewDetail: 'عرض التفاصيل',
    mallTitle: 'متجر Voyah',
    mallDesc: 'اكثر من سيارة، رفيق لكل جوانب الحياة'
  }
} as const

const t = computed(() => copy[lang.value])

const spaceSlides = [
  '/static/assets/kongjian1-c362d45d.jpg',
  '/static/assets/kongjian2-4222892b.jpg',
  '/static/assets/kongjian3-8b228f55.jpg'
]

const purchaseCards = computed(() =>
  lang.value === 'fr'
    ? [
        { title: 'Vente 1-a-1 professionnelle', desc: 'Service dedie par un conseiller expert', imageClass: 'img_1', image: '/static/assets/section3_1-d53304aa.jpg' },
        { title: 'Accueil sincere en magasin', desc: 'Reponse aux besoins de chaque client', imageClass: 'img_2', image: '/static/assets/section3_2-4fb471c7.jpg' },
        { title: 'Livraison avec ceremonie', desc: 'La remise devient une experience memorables', imageClass: 'img_3', image: '/static/assets/section3_3-20237755.jpg' }
      ]
    : [
        { title: '1-on-1 professional sales', desc: 'Dedicated guidance from experienced consultants', imageClass: 'img_1', image: '/static/assets/section3_1-d53304aa.jpg' },
        { title: 'Sincere offline reception', desc: 'Support tailored to each user need', imageClass: 'img_2', image: '/static/assets/section3_2-4fb471c7.jpg' },
        { title: 'Ceremonial delivery', desc: 'Vehicle handover as a memorable ceremony', imageClass: 'img_3', image: '/static/assets/section3_3-20237755.jpg' }
      ]
)

const afterSaleCards = computed(() =>
  lang.value === 'fr'
    ? [
        { title: 'Equipe professionnelle', desc: 'Support disponible partout', imageClass: 'img_4', image: '/static/assets/section4_1-f7cf566b.jpg' },
        { title: 'Assistance 7x24h', desc: 'Service mobile a domicile', imageClass: 'img_5', image: '/static/assets/section4_2-aa55795b.jpg' },
        { title: 'Depannage routier', desc: 'Reservation en un clic', imageClass: 'img_6', image: '/static/assets/section4_3-23836307.jpg' }
      ]
    : [
        { title: 'Professional team', desc: 'Support anytime and anywhere', imageClass: 'img_4', image: '/static/assets/section4_1-f7cf566b.jpg' },
        { title: '7x24h standby', desc: 'Mobile service vehicles on demand', imageClass: 'img_5', image: '/static/assets/section4_2-aa55795b.jpg' },
        { title: 'Roadside assistance', desc: 'One-click booking from home', imageClass: 'img_6', image: '/static/assets/section4_3-23836307.jpg' }
      ]
)

const storeAccordion = [
  {
    title: '礼遇',
    desc: '岚图精选周边，与 VOYAH 创享官一同打造自在惬意生活',
    image: '/static/assets/store1-bdde9696.jpg'
  },
  {
    title: '车品',
    desc: '精选用车好物，精准适配需求，提升每一次用车体验',
    image: '/static/assets/store2-6e7252f4.jpg'
  },
  {
    title: '智能',
    desc: '软件深度赋能，全面焕新用车体验',
    image: '/static/assets/store3-fe6e8d7d.jpg'
  }
]

const stories = computed(() => [
  {
    title: lang.value === 'fr' ? 'Cueillette de fraises le week-end' : 'Weekend strawberry picking',
    desc:
      lang.value === 'fr'
        ? "Par temps d'hiver, le centre Voyah de Hefei a organise un evenement convivial pour les proprietaires."
        : 'In the cold season, the Voyah Hefei center hosted a memorable community event.',
    image:
      '/static/assets/users1-721725cd.png'
  },
  {
    title: lang.value === 'fr' ? "Escorte d'automne Voyah" : 'Voyah autumn support event',
    desc: lang.value === 'fr' ? "Protection de vacances au bord du lac Caiyun." : 'Holiday support by Caiyun Lake.',
    image:
      '/static/assets/users2-5ea895eb.png'
  },
  {
    title: lang.value === 'fr' ? 'Livraison collective Voyah' : 'Voyah group delivery event',
    desc:
      lang.value === 'fr'
        ? "Le club Tianzhi Lan et le centre utilisateur Jinjiang ont lance une livraison collective conviviale."
        : 'A warm group delivery ceremony was jointly hosted by the club and user center.',
    image:
      '/static/assets/users3-b4fe4c41.png'
  }
])
</script>

