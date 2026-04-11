<template>
  <footer class="site-footer" ref="footerRef">
    <div class="footer-app-shell">
      <div class="container footer-app">
        <div class="footer-app-copy">
          <p class="footer-kicker">{{ appEyebrow }}</p>
          <h2>{{ textFor(footerContact.title) }}</h2>
          <p class="footer-copy">{{ textFor(footerContact.body) }}</p>
        </div>

        <div class="footer-qr">
          <figure>
            <img :src="footerContact.appCode" alt="Voyah app code" />
            <figcaption>{{ appLabel }}</figcaption>
            <p class="footer-qr-copy">{{ versionLabel }}</p>
          </figure>
          <figure>
            <img :src="footerContact.miniProgramCode" alt="Voyah mini program code" />
            <figcaption>{{ miniLabel }}</figcaption>
            <p class="footer-qr-copy">{{ miniCopy }}</p>
          </figure>
        </div>
      </div>
    </div>

    <div class="container footer-grid">
      <div class="footer-columns">
        <section v-for="(column, idx) in footerColumns" :key="column.title.en" class="stagger-column" :style="{ '--stagger-idx': idx }">
          <h3>{{ textFor(column.title) }}</h3>
          <NuxtLink v-for="link in column.links" :key="link.slug" :to="buildPath(link.slug)">
            {{ textFor(link.label) }}
          </NuxtLink>
        </section>
      </div>

      <div class="footer-company">
        <span>{{ companyLabel }}</span>
        <span>{{ phoneLabel }}</span>
        <span>{{ emailLabel }}</span>
      </div>

      <div class="footer-bottom">
        <div class="footer-legal">
          <NuxtLink v-for="link in footerLegalLinks" :key="link.slug" :to="buildPath(link.slug)">
            {{ textFor(link.label) }}
          </NuxtLink>
        </div>

        <div class="footer-records">
          <span>{{ recordLabel }}</span>
          <span>Copyright © {{ currentYear }} Voyah.com.cn All rights reserved.</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useSiteContent } from '~/composables/useSiteContent'

const { footerColumns, footerContact, footerLegalLinks, buildPath, locale, textFor } = useSiteContent()
const { t } = useNuxtApp().$i18n ? useNuxtApp().$i18n : { t: (k) => k }

const appEyebrow = computed(() => t('global.footer.appEyebrow'))
const appLabel = computed(() => t('global.footer.appLabel'))
const miniLabel = computed(() => t('global.footer.miniLabel'))
const miniCopy = computed(() => t('global.footer.miniCopy'))
const versionLabel = computed(() => t('global.footer.versionLabel'))
const companyLabel = computed(() => t('global.footer.companyLabel'))
const phoneLabel = computed(() => t('global.footer.phoneLabel'))
const emailLabel = computed(() => t('global.footer.emailLabel'))
const recordLabel = computed(() => t('global.footer.recordLabel'))

const currentYear = new Date().getFullYear();
const footerRef = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer?.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  if (footerRef.value) observer.observe(footerRef.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
.site-footer {
  padding: 0 0 28px;
  color: #fff;
  background: #111821;
}

.stagger-column {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: calc(var(--stagger-idx) * 0.1s);
}

.site-footer.in-view .stagger-column {
  opacity: 1;
  transform: translateY(0);
}

.footer-app-shell {
  background:
    linear-gradient(90deg, rgba(17, 24, 33, 0.92), rgba(17, 24, 33, 0.56)),
    url('/static/assets/app_bg_1920-502ac2d5.png') center / cover no-repeat;
}

.footer-app {
  display: grid;
  grid-template-columns: 1.2fr auto;
  gap: 32px;
  align-items: center;
  padding: 40px 0 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-app-copy h2 {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 3rem);
  line-height: 1.05;
}

.footer-kicker {
  margin: 0 0 10px;
  color: rgba(255, 255, 255, 0.62);
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.82rem;
}

.footer-copy {
  margin: 14px 0 0;
  max-width: 500px;
  color: rgba(255, 255, 255, 0.74);
  line-height: 1.7;
}

.footer-qr {
  display: flex;
  gap: 14px;
}

.footer-qr figure {
  margin: 0;
  display: grid;
  gap: 6px;
  justify-items: center;
  color: rgba(255, 255, 255, 0.68);
  padding: 16px 16px 14px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  min-width: 170px;
}

.footer-qr img {
  width: 112px;
  height: 112px;
  border-radius: 0;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: #fff;
  padding: 10px;
}

.footer-qr-copy {
  margin: 0;
  max-width: 136px;
  text-align: center;
  font-size: 0.76rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.54);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding-top: 28px;
}

.footer-columns {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 22px;
}

.footer-columns section {
  display: grid;
  align-content: start;
  gap: 10px;
}

.footer-columns h3 {
  margin: 0 0 8px;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.74);
}

.footer-columns a,
.footer-legal a {
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.88rem;
}

.footer-columns a:hover,
.footer-legal a:hover {
  color: #fff;
}

.footer-company {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  color: rgba(255, 255, 255, 0.64);
  font-size: 0.86rem;
}

.footer-bottom {
  margin-top: 6px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: space-between;
  gap: 20px;
  color: rgba(255, 255, 255, 0.56);
}

.footer-legal,
.footer-records {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

@media (max-width: 900px) {
  .footer-app {
    grid-template-columns: minmax(0, 1fr);
  }

  .footer-columns {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .footer-bottom {
    flex-direction: column;
  }
}

@media (max-width: 640px) {
  .footer-columns {
    grid-template-columns: minmax(0, 1fr);
  }
}

/* RTL Support */
[dir="rtl"] .footer-columns {
  direction: rtl;
}

[dir="rtl"] .footer-app {
  grid-template-columns: auto 1.2fr;
  direction: rtl;
}

[dir="rtl"] .footer-bottom,
[dir="rtl"] .footer-company {
  direction: rtl;
}
</style>
