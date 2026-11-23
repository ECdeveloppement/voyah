<template>
  <footer class="ft" :dir="locale.dir">
    <div class="ft__top">
      <div class="ft__left">
        <div class="ft__social">
          <h4 class="ft__big">{{ textFor(labels.socialTitle) }}</h4>
          <h4 class="ft__sub">{{ textFor(labels.socialSub) }}</h4>
          <div class="ft__tiles">
            <a
              v-for="item in socialTiles"
              :key="item.id"
              :href="item.url || undefined"
              :target="item.url ? '_blank' : undefined"
              :rel="item.url ? 'noopener noreferrer' : undefined"
              class="ft__tile ft__tile--ring"
              :aria-label="textFor(item.label)"
              v-html="glyphs[item.id]"
            />
          </div>
        </div>

        <div class="ft__brand">
          <img src="/assets/updates/voyah-tunisie-new-logo.png" :alt="textFor(dealerContact.partnerSubLabel)" class="ft__brand-mention-img" />
        </div>
      </div>

      <div class="ft__right">
        <div class="ft__contact-row">
          <div class="ft__map">
            <iframe
              v-if="allowsExternalMaps"
              :src="mapSrc"
              :title="textFor(labels.locationLabel)"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
            <div v-else class="ft__map-consent">
              <p>{{ textFor(labels.mapConsent) }}</p>
              <button type="button" @click="openPreferences">{{ textFor(labels.cookieSettings) }}</button>
            </div>
          </div>

          <div class="ft__contact">
            <h2 class="ft__contact-title">{{ textFor(labels.contactTitle) }}</h2>
            <div v-for="row in contactRows" :key="row.key" class="ft__cblock">
              <h3 class="ft__cline">
                <span class="ft__cicon" v-html="glyphs[row.icon]" />{{ textFor(row.label) }}
              </h3>
              <template v-for="line in row.lines" :key="line.value">
                <a
                  v-if="line.href"
                  class="ft__cline ft__cline--link"
                  :class="{ 'ft__cline--ltr': row.ltr }"
                  :href="line.href"
                >{{ line.value }}</a>
                <p v-else class="ft__cline" :class="{ 'ft__cline--ltr': row.ltr }">{{ line.value }}</p>
              </template>
            </div>
          </div>
        </div>

        <div class="ft__navrow">
          <nav class="ft__nav">
            <NuxtLink
              v-for="link in footerLegalLinks"
              :key="link.slug"
              :to="buildPath(link.slug)"
              class="ft__nlink"
            >{{ textFor(link.label) }}</NuxtLink>
            <button type="button" class="ft__nlink ft__cookie-settings" @click="openPreferences">{{ textFor(labels.cookieSettings) }}</button>
          </nav>
        </div>
      </div>
    </div>

    <div class="ft__hr" />

    <div class="ft__bottom">
      <h4 class="ft__copy">© {{ currentYear }} {{ dealerContact.brandLabel }}. {{ textFor(labels.rights) }}</h4>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { dealerContact, socialLinks, t } from '~/data/dealer'
import { useSiteContent } from '~/composables/useSiteContent'
import { useCookieConsent } from '~/composables/useCookieConsent'

const { locale, footerLegalLinks, buildPath, textFor } = useSiteContent()
const { allowsExternalMaps, openPreferences } = useCookieConsent()

const labels = {
  socialTitle: t('Social Media', 'Réseaux sociaux', 'وسائل التواصل'),
  socialSub: t('Follow our channels', 'Suivez nos chaînes', 'تابعوا قنواتنا'),
  contactTitle: t('Contact Us', 'Nous contacter', 'اتصل بنا'),
  locationLabel: t('Location', 'Localisation', 'الموقع'),
  mapConsent: t('To display Google Maps, please accept optional cookies.', 'Pour afficher Google Maps, veuillez accepter les cookies facultatifs.', 'لعرض خرائط Google، يرجى قبول ملفات تعريف الارتباط الاختيارية.'),
  cookieSettings: t('Cookie settings', 'Gérer les cookies', 'إدارة ملفات تعريف الارتباط'),
  phoneLabel: t('Call us on', 'Appelez-nous', 'اتصل بنا على'),
  emailLabel: t('Email us', 'Écrivez-nous', 'راسلنا'),
  hoursLabel: t('Working hours', 'Horaires', 'أوقات العمل'),
  rights: t('All Rights Reserved.', 'Tous droits réservés.', 'جميع الحقوق محفوظة.')
}

const glyphs = {
  phone:
    '<svg viewBox="0 0 512 512" fill="currentColor" aria-hidden="true"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/></svg>',
  email:
    '<svg viewBox="0 0 512 512" fill="currentColor" aria-hidden="true"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/></svg>',
  location:
    '<svg viewBox="0 0 384 512" fill="currentColor" aria-hidden="true"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg>',
  clock:
    '<svg viewBox="0 0 512 512" fill="currentColor" aria-hidden="true"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200s89.5-200 200-200 200 89.5 200 200-89.5 200-200 200zm45.3-135.3l-74.6-44.8a7.9 7.9 0 0 1-3.7-6.7V144c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v57.7l62.4 37.5c3.8 2.3 5 7.2 2.7 11l-9.8 13.7c-2.3 3.7-7.2 4.9-11 2.6z"/></svg>',
  whatsapp:
    '<svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 110.9L0 480l117.4-30.8c32.6 17.7 68.9 27 106.1 27h.1c122.4 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67-157zm-157 341.6c-33.2 0-65.7-8.9-94.5-25.7l-6.7-4-69.8 18.3L72.6 359.2l-4.4-7c-16.9-28.1-25.8-60.4-25.8-93.7 0-100.7 82.1-182.7 182.8-182.7 48.9 0 94.9 19 129.6 53.8 34.8 34.5 53.8 80.6 53.8 129.6 0 100.7-82 182.7-182.7 182.7zm99.2-135.2c-5.4-2.7-31.7-15.7-36.6-17.5-5-1.8-8.5-2.7-12.1 2.7-3.6 5.4-13.9 17.5-17 21.1-3.1 3.6-6.3 4-11.7 1.4-5.4-2.7-22.8-8.4-43.5-26.8-16.1-14.4-27-32.2-30.2-37.6-3.1-5.4-.3-8.3 2.4-11 2.5-2.5 5.4-6.3 8.1-9.4 2.7-3.1 3.6-5.4 5.4-9 1.8-3.6.9-6.7-.5-9.4-1.4-2.7-12.1-29.2-16.6-40-4.4-10.8-8.5-9.3-12.1-9.4-3.1-.1-6.7-.1-10.3-.1-3.6 0-9.4 1.4-14.4 6.7-4.9 5.4-18.8 18.4-18.8 44.8s19.3 52.2 22 55.9c2.7 3.6 38.1 58.2 92.3 81.5 12.9 5.6 23 8.9 30.9 11.4 13 4.1 24.8 3.5 34.2 2.1 10.4-1.6 32-13.1 36.6-25.7 4.5-12.6 4.5-23.4 3.1-25.7-1.3-2.2-4.9-3.6-10.3-6.2z"/></svg>',
  facebook:
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.0064 3H3.9936C3.4446 3 3 3.4446 3 3.9936V20.0064C3 20.5554 3.4446 21 3.9936 21H12.6138V14.0295H10.2684V11.3133H12.6138V9.309C12.6138 6.9834 14.034 5.718 16.1085 5.718C17.1021 5.718 17.9553 5.7918 18.2046 5.8251V8.2551H16.7664C15.6378 8.2551 15.42 8.7915 15.42 9.5781V11.3124H18.1101L17.7591 14.0286H15.4191V21H20.0064C20.5554 21 21 20.5554 21 20.0064V3.9936C21 3.4446 20.5554 3 20.0064 3Z"/></svg>',
  instagram:
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9973 8.66525C10.1611 8.66525 8.66262 10.1638 8.66262 12C8.66262 13.8362 10.1611 15.3348 11.9973 15.3348C13.8335 15.3348 15.332 13.8362 15.332 12C15.332 10.1638 13.8335 8.66525 11.9973 8.66525ZM21.9989 12C21.9989 10.6191 22.0114 9.25064 21.9338 7.87221C21.8563 6.27113 21.4911 4.85017 20.3203 3.67938C19.147 2.50609 17.7286 2.14334 16.1275 2.06579C14.7466 1.98824 13.3782 2.00074 11.9998 2.00074C10.6189 2.00074 9.25051 1.98824 7.8721 2.06579C6.27105 2.14334 4.85012 2.50859 3.67935 3.67938C2.50608 4.85267 2.14334 6.27113 2.06579 7.87221C1.98824 9.25314 2.00074 10.6216 2.00074 12C2.00074 13.3784 1.98824 14.7494 2.06579 16.1278C2.14334 17.7289 2.50858 19.1498 3.67935 20.3206C4.85262 21.4939 6.27105 21.8567 7.8721 21.9342C9.25301 22.0118 10.6214 21.9993 11.9998 21.9993C13.3807 21.9993 14.7491 22.0118 16.1275 21.9342C17.7286 21.8567 19.1495 21.4914 20.3203 20.3206C21.4936 19.1473 21.8563 17.7289 21.9338 16.1278C22.0139 14.7494 21.9989 13.3809 21.9989 12ZM11.9973 17.131C9.15795 17.131 6.86644 14.8394 6.86644 12C6.86644 9.16058 9.15795 6.86903 11.9973 6.86903C14.8367 6.86903 17.1282 9.16058 17.1282 12C17.1282 14.8394 14.8367 17.131 11.9973 17.131ZM17.4209 8.02231C16.7123 8.02231 16.14 7.45007 16.14 6.74145C16.14 6.03283 16.7123 5.46058 17.4209 5.46058C18.1295 5.46058 18.7017 6.03283 18.7017 6.74145C18.7021 7.08128 18.5673 7.40732 18.327 7.64763C18.0867 7.88793 17.7607 8.02274 17.4209 8.02231Z"/></svg>'
}

/** Mêmes canaux que le pied de page de référence ; sans URL la tuile reste inerte, WhatsApp est dérivé du numéro du concessionnaire. */
const tileChannelIds = ['instagram', 'facebook', 'whatsapp']

const socialTiles = computed(() =>
  tileChannelIds.map((id) => {
    const item = socialLinks.find((link) => link.id === id)!
    return {
      id,
      label: item.label,
      url:
        item.url.trim() ||
        (id === 'whatsapp' ? `https://wa.me/${dealerContact.phone.replace(/[^\d]/g, '')}` : '')
    }
  })
)

const contactRows = computed(() => [
  {
    key: 'phone',
    icon: 'phone',
    label: labels.phoneLabel,
    ltr: true,
    lines: [
      { value: dealerContact.phone, href: dealerContact.phoneHref },
      ...(dealerContact.phoneSecondary
        ? [{ value: dealerContact.phoneSecondary, href: dealerContact.phoneSecondaryHref }]
        : [])
    ]
  },
  {
    key: 'location',
    icon: 'location',
    label: labels.locationLabel,
    ltr: false,
    lines: [{ value: textFor(dealerContact.address), href: '' }]
  },
  {
    key: 'email',
    icon: 'email',
    label: labels.emailLabel,
    ltr: true,
    lines: [{ value: dealerContact.email, href: `mailto:${dealerContact.email}` }]
  },
  {
    key: 'hours',
    icon: 'clock',
    label: labels.hoursLabel,
    ltr: false,
    lines: [{ value: textFor(dealerContact.workingHours), href: '' }]
  }
])

const mapSrc = computed(() => {
  const hl = locale.value.code === 'en' ? 'en-US' : locale.value.code
  return `${dealerContact.mapUrl}${dealerContact.mapUrl.includes('?') ? '&' : '?'}output=embed&hl=${hl}&z=12`
})

const currentYear = new Date().getFullYear()
</script>

<style scoped>
.ft {
  width: 100%;
  background: #171e21;
  padding: 50px 5vw;
}

.ft__top {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
}

@media (min-width: 1280px) {
  .ft__top {
    justify-content: space-between;
    flex-wrap: nowrap;
    gap: 0;
  }
}

.ft__left {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

@media (min-width: 640px) {
  .ft__left {
    flex-direction: row;
    justify-content: center;
  }
}

@media (min-width: 1280px) {
  .ft__left {
    width: fit-content;
    justify-content: flex-start;
  }
}

.ft__social,
.ft__brand {
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1vw;
}

.ft__big {
  margin: 0;
  color: #fff;
  font-size: 32px;
  font-weight: 400;
  line-height: 48px;
}

.ft__sub {
  margin: 0;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
}

.ft__tiles {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

@media (min-width: 1280px) {
  .ft__tiles {
    width: fit-content;
  }
}

.ft__tile {
  width: 55px;
  height: 55px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: opacity 0.2s;
}

.ft__tile:hover {
  opacity: 0.7;
}

.ft__tile--ring {
  border: 1px solid #85b4d9;
  color: #85b4d9;
}

.ft__tile--ring:hover {
  color: #b9d7ef;
  border-color: #b9d7ef;
}

.ft__tile :deep(svg) {
  width: 32px;
  height: 32px;
}

.ft__brand-img {
  height: 44px;
  width: auto;
  object-fit: contain;
}

.ft__brand-mention-img {
  display: block;
  width: auto;
  max-width: 360px;
  height: 72px;
  object-fit: contain;
}

.ft__right {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
}

@media (min-width: 640px) {
  .ft__right {
    width: fit-content;
  }
}

.ft__contact-row {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}

@media (min-width: 640px) {
  .ft__contact-row {
    flex-direction: row;
  }
}

.ft__map {
  width: 100%;
}

@media (min-width: 640px) {
  .ft__map {
    width: 300px;
  }
}

.ft__map iframe {
  width: 100%;
  height: 450px;
  border: 0;
  display: block;
}

.ft__map-consent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-height: 450px;
  padding: 24px;
  border: 1px solid #45575f;
  color: #d7e1e5;
  text-align: center;
}

.ft__map-consent p { margin: 0; line-height: 1.6; }
.ft__map-consent button { min-height: 44px; padding: 10px 16px; border: 1px solid #85b4d9; background: transparent; color: #fff; font: inherit; cursor: pointer; }
.ft__map-consent button:hover { background: #ffffff10; }
.ft__cookie-settings { padding: 0; border: 0; background: transparent; font-family: inherit; cursor: pointer; }
.ft__map-consent button:focus-visible, .ft__cookie-settings:focus-visible { outline: 3px solid #85b4d9; outline-offset: 3px; }

.ft__contact {
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
}

@media (min-width: 1024px) {
  .ft__contact {
    white-space: nowrap;
  }
}

.ft__contact-title {
  margin: 0;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
}

.ft__cblock {
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
}

.ft__cline {
  margin: 0;
  font-size: 15px;
  font-weight: 400;
  line-height: 22.5px;
  color: #878787;
  display: flex;
  align-items: center;
  gap: 8px;
}

.ft__cline--link {
  text-decoration: underline;
  cursor: pointer;
}

.ft__cline--link:hover {
  color: #b9d7ef;
}

.ft__cicon {
  display: inline-flex;
  width: 15px;
  height: 15px;
  color: #fff;
  flex: none;
}

.ft__cicon :deep(svg) {
  width: 100%;
  height: 100%;
}

.ft__cline--ltr {
  direction: ltr;
  unicode-bidi: isolate;
}

.ft__navrow {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
  margin-top: 50px;
}

@media (min-width: 1280px) {
  .ft__navrow {
    flex-direction: row;
    justify-content: flex-start;
  }
}

.ft__nav {
  display: flex;
  align-items: center;
  gap: 60px;
  justify-content: center;
  flex-wrap: wrap;
}

.ft__nlink {
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  text-decoration: none;
  transition: color 0.2s, opacity 0.2s;
}

.ft__nlink:hover {
  color: #b9d7ef;
  text-decoration: underline;
}

.ft__hr {
  width: 100%;
  height: 1px;
  background: #80858b;
  margin: 60px 0;
}

.ft__bottom {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}

.ft__copy {
  margin: 0;
  color: #80858b;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
}

[dir="rtl"] .ft__social,
[dir="rtl"] .ft__brand,
[dir="rtl"] .ft__contact,
[dir="rtl"] .ft__cblock,
[dir="rtl"] .ft__bottom {
  align-items: flex-end;
}

@media (min-width: 640px) {
  [dir="rtl"] .ft__left,
  [dir="rtl"] .ft__contact-row {
    flex-direction: row-reverse;
  }
}
</style>
