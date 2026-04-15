<template>
  <footer class="site-footer" ref="footerRef">
    <div class="footer-app-shell">
      <div class="container footer-app">

        <div class="footer-app-copy">
          <h1 class="white-space-line">{{ textFor(footerContact.title) }}</h1>
          <p class="footer-copy">{{ textFor(footerContact.body) }}</p>
        </div>

        <div class="footer-app-image">
          <img src="/static/assets/app_bg_1920-502ac2d5.png" alt="Voyah app" />
        </div>

        <div class="footer-qr">
          <div class="footer-qr-item">
            <img :src="footerContact.appCode" alt="Voyah app code" />
            <div class="footer-qr-text">
              <span class="footer-qr-label">{{ appLabel }}</span>
              <p class="footer-qr-copy white-space-line">{{ versionLabel }}</p>
            </div>
          </div>
          <div class="footer-qr-item">
            <img :src="footerContact.miniProgramCode" alt="Voyah mini program code" />
            <div class="footer-qr-text">
              <span class="footer-qr-label">{{ miniLabel }}</span>
              <p class="footer-qr-copy">{{ miniCopy }}</p>
            </div>
          </div>
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useSiteContent } from '~/composables/useSiteContent'

const { footerColumns, footerContact, footerLegalLinks, buildPath, locale, textFor } = useSiteContent()
const { t } = useNuxtApp().$i18n ? useNuxtApp().$i18n : { t: (k) => k }

const appLabel     = computed(() => t('global.footer.appLabel'))
const miniLabel    = computed(() => t('global.footer.miniLabel'))
const miniCopy     = computed(() => t('global.footer.miniCopy'))
const versionLabel = computed(() => t('global.footer.versionLabel'))
const companyLabel = computed(() => t('global.footer.companyLabel'))
const phoneLabel   = computed(() => t('global.footer.phoneLabel'))
const emailLabel   = computed(() => t('global.footer.emailLabel'))
const recordLabel  = computed(() => t('global.footer.recordLabel'))

const currentYear = new Date().getFullYear()
const footerRef   = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
        observer?.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  if (footerRef.value) observer.observe(footerRef.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
/* ─── Base ─────────────────────────────────────────────── */
.site-footer {
  padding: 0 0 28px;
  background: linear-gradient(135deg, #0a0e12 0%, #14181f 50%, #1a1f26 100%);
  position: relative;
}

/* Subtle top border glow */
.site-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
}

/* ─── Stagger animation ─────────────────────────────────── */
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

/* ─── App shell — 3 colonnes égales ────────────────────── */
.footer-app {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
  align-items: center;
  padding: 64px 0 48px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
}

/* COL 1 — Texte mieux aligné */
.footer-app-copy {
  padding-right: 20px;
}

.footer-app-copy h1 {
  margin: 0 0 20px;
  font-size: 1.85rem;
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: -0.01em;
  background: linear-gradient(135deg, #ffffff 0%, #e0e4e8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-copy {
  margin: 0;
  max-width: 320px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  line-height: 1.7;
}

/* COL 2 — Image centrée, plus grande */
.footer-app-image {
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer-app-image img {
  width: 100%;
  max-width: 480px;
  max-height: 280px;
  object-fit: contain;
  display: block;
  filter: drop-shadow(0 20px 40px rgba(0,0,0,0.3));
  transition: transform 0.3s ease;
}

.footer-app-image img:hover {
  transform: translateY(-4px);
}

/* COL 3 — QR codes plus grands et mieux espacés */
.footer-qr {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 0;
  padding-left: 20px;
}

.footer-qr-item {
  display: flex;
  align-items: center;
  gap: 24px;
}

.footer-qr-item > img {
  width: 128px;
  height: 128px;
  flex-shrink: 0;
  background: #ffffff;
  padding: 8px;
  border-radius: 12px;
  box-shadow: 0 10px 25px -5px rgba(0,0,0,0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.footer-qr-item > img:hover {
  transform: scale(1.02);
  box-shadow: 0 20px 35px -8px rgba(0,0,0,0.4);
}

.footer-qr-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-qr-label {
  font-size: 1.1rem;
  color: #ffffff;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.footer-qr-copy {
  margin: 0;
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.5;
  max-width: 160px;
}

/* ─── Footer grid (liens, légal, bas de page) ───────────── */
.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding-top: 32px;
}

.footer-columns {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 28px;
  margin-bottom: 8px;
}

.footer-columns section {
  display: grid;
  align-content: start;
  gap: 12px;
}

.footer-columns h3 {
  margin: 0 0 4px;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
}

.footer-columns a,
.footer-legal a {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.2s ease;
  display: inline-block;
}

.footer-columns a:hover,
.footer-legal a:hover {
  color: #ffffff;
  transform: translateX(4px);
}

/* RTL hover adjustment */
[dir="rtl"] .footer-columns a:hover {
  transform: translateX(-4px);
}

.footer-company {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.88rem;
  padding: 8px 0 4px;
}

.footer-bottom {
  margin-top: 8px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  color: rgba(255, 255, 255, 0.45);
}

.footer-legal,
.footer-records {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-legal a {
  font-size: 0.85rem;
}

/* ─── Responsive ────────────────────────────────────────── */
@media (max-width: 1024px) {
  .footer-app {
    gap: 40px;
  }
  
  .footer-app-image img {
    max-width: 380px;
  }
}

@media (max-width: 900px) {
  .footer-app {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
  
  .footer-app-copy {
    padding-right: 0;
    text-align: center;
  }
  
  .footer-copy {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  
  .footer-app-image {
    display: flex;
    order: -1;
  }
  
  .footer-app-image img {
    max-width: 340px;
  }
  
  .footer-qr {
    padding-left: 0;
    flex-direction: row;
    justify-content: center;
    gap: 48px;
  }
  
  .footer-qr-item {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  
  .footer-qr-text {
    align-items: center;
  }
}

@media (max-width: 640px) {
  .footer-columns {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  
  .footer-qr {
    flex-direction: column;
    align-items: center;
    gap: 28px;
  }
  
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .footer-company {
    gap: 16px;
  }
}

@media (max-width: 480px) {
  .footer-columns {
    grid-template-columns: 1fr;
  }
}

/* ─── Utilitaires ───────────────────────────────────────── */
.white-space-line {
  white-space: pre-line;
}

/* ─── RTL ───────────────────────────────────────────────── */
[dir="rtl"] .footer-columns,
[dir="rtl"] .footer-app,
[dir="rtl"] .footer-bottom,
[dir="rtl"] .footer-company {
  direction: rtl;
}

[dir="rtl"] .footer-app-copy {
  padding-right: 0;
  padding-left: 20px;
}

[dir="rtl"] .footer-qr {
  padding-left: 0;
  padding-right: 20px;
}

@media (max-width: 900px) {
  [dir="rtl"] .footer-app-copy {
    padding-left: 0;
  }
  
  [dir="rtl"] .footer-qr {
    padding-right: 0;
  }
}
</style>