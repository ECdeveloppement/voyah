<template>
  <section
    v-if="isOpen"
    ref="panel"
    class="cookie-consent"
    role="dialog"
    aria-modal="false"
    aria-labelledby="cookie-consent-title"
    aria-describedby="cookie-consent-description"
    :dir="locale.dir"
    tabindex="-1"
  >
    <p class="cookie-consent__eyebrow">VOYAH TUNISIE</p>
    <h2 id="cookie-consent-title">{{ textFor(labels.title) }}</h2>
    <p id="cookie-consent-description">{{ textFor(labels.description) }}</p>
    <NuxtLink :to="buildPath('cookie.html')" class="cookie-consent__policy">{{ textFor(labels.policy) }}</NuxtLink>
    <div class="cookie-consent__actions">
      <button type="button" class="cookie-consent__button" @click="choose('accepted')">{{ textFor(labels.accept) }}</button>
      <button type="button" class="cookie-consent__button cookie-consent__button--outline" @click="choose('rejected')">{{ textFor(labels.reject) }}</button>
    </div>
    <p class="cookie-consent__note">{{ textFor(labels.duration) }}</p>
  </section>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'
import { t } from '~/data/dealer'
import { useCookieConsent } from '~/composables/useCookieConsent'
import { useSiteContent } from '~/composables/useSiteContent'

const { isOpen, initialize, choose } = useCookieConsent()
const { locale, textFor, buildPath } = useSiteContent()
const panel = ref<HTMLElement>()
let previousFocus: HTMLElement | null = null

const labels = {
  title: t('Your cookie preferences', 'Vos préférences de cookies', 'تفضيلات ملفات تعريف الارتباط'),
  description: t(
    'Necessary cookies keep the website working. With your permission, Google Maps may use cookies to display maps. You can refuse and change your choice at any time.',
    'Les cookies nécessaires assurent le fonctionnement du site. Avec votre accord, Google Maps peut déposer des cookies pour afficher les cartes. Vous pouvez refuser et modifier votre choix à tout moment.',
    'تضمن ملفات تعريف الارتباط الضرورية عمل الموقع. بموافقتك، قد تستخدم خرائط Google ملفات تعريف الارتباط لعرض الخرائط. يمكنك الرفض وتغيير اختيارك في أي وقت.'
  ),
  accept: t('Accept', 'Accepter', 'قبول'),
  reject: t('Refuse', 'Refuser', 'رفض'),
  policy: t('Read our cookie policy', 'Consulter la politique de cookies', 'الاطلاع على سياسة ملفات تعريف الارتباط'),
  duration: t('Your choice is saved for 180 days.', 'Votre choix est conservé pendant 180 jours.', 'يُحفظ اختيارك لمدة 180 يومًا.')
}

watch(isOpen, async (open) => {
  if (open) {
    previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    await nextTick()
    const target = panel.value?.querySelector<HTMLElement>('.cookie-consent__button') ?? panel.value
    target?.focus({ preventScroll: true })
  } else if (previousFocus?.isConnected) {
    previousFocus.focus({ preventScroll: true })
  }
})

onMounted(initialize)
</script>

<style scoped>
.cookie-consent {
  position: fixed;
  z-index: 3000;
  inset-inline-start: 24px;
  bottom: 24px;
  width: min(480px, calc(100vw - 48px));
  max-height: calc(100dvh - 48px);
  overflow-y: auto;
  padding: 28px;
  border: 1px solid #d9e3e4;
  border-radius: 16px;
  background: #fff;
  color: #172327;
  box-shadow: 0 16px 56px #071d2633;
  text-align: start;
  outline: none;
}
.cookie-consent__eyebrow { margin: 0 0 12px; color: #406a70; font-size: 11px; letter-spacing: 0.18em; }
.cookie-consent h2 { margin: 0 0 14px; font-size: 24px; font-weight: 500; line-height: 1.25; }
#cookie-consent-description { margin: 0 0 14px; color: #526369; font-size: 14px; line-height: 1.65; }
.cookie-consent__policy { color: #31575c; font-size: 14px; text-decoration: underline; text-underline-offset: 3px; }
.cookie-consent__actions { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-top: 22px; }
.cookie-consent__button { min-height: 46px; padding: 10px 16px; border: 1px solid #406a70; border-radius: 6px; background: #406a70; color: #fff; font: inherit; font-size: 14px; cursor: pointer; }
.cookie-consent__button:hover { background: #31575c; }
.cookie-consent__button--outline { background: #fff; color: #31575c; }
.cookie-consent__button--outline:hover { background: #edf3f3; }
.cookie-consent__button:focus-visible, .cookie-consent__policy:focus-visible { outline: 3px solid #406a70; outline-offset: 3px; }
.cookie-consent__note { margin: 14px 0 0; color: #526369; font-size: 12px; line-height: 1.5; }
@media (max-width: 640px) {
  .cookie-consent { inset-inline-start: 12px; bottom: 12px; width: calc(100vw - 24px); max-height: calc(100dvh - 24px); padding: 22px; }
  .cookie-consent h2 { font-size: 22px; }
}
</style>
