<template>
  <div class="contact-page">
    <h1 class="contact-page__title">{{ textFor(leadForms.contact.title) }}</h1>
    <div class="contact-page__spacer" aria-hidden="true" />

    <div class="contact-page__columns">
      <div class="contact-page__left">
        <p class="contact-page__details">
          <strong>{{ textFor(labels.address) }}&nbsp;</strong><a
            v-if="props.locationUrl"
            :href="props.locationUrl"
            target="_blank"
            rel="noopener noreferrer"
          >{{ textFor(dealerContact.address) }}</a><template v-else>{{ textFor(dealerContact.address) }}</template><br />
          <strong>{{ textFor(labels.hours) }}&nbsp;</strong>{{ textFor(dealerContact.workingHours) }}<br />
          <br />
          <strong>{{ textFor(labels.phone) }}</strong> {{ dealerContact.phone }}<br />
          <strong>{{ textFor(labels.email) }}</strong>
          <a :href="`mailto:${dealerContact.email}`">{{ dealerContact.email }}</a>
        </p>

        <div class="contact-page__spacer" aria-hidden="true" />

        <h2 class="contact-page__form-title">{{ textFor(labels.formHeading) }}</h2>
        <LeadForm form="contact" :key="locale.code" />
      </div>

      <div class="contact-page__right">
        <iframe
          v-if="allowsExternalMaps"
          :src="mapSrc"
          :title="textFor(labels.mapTitle)"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
        />
        <div v-else class="contact-page__map-consent">
          <p>{{ textFor(labels.mapConsent) }}</p>
          <button type="button" @click="openPreferences">{{ textFor(labels.cookieSettings) }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { dealerContact, leadForms, t } from '~/data/dealer'
import LeadForm from '~/components/forms/LeadForm.vue'
import { useSiteContent } from '~/composables/useSiteContent'
import { useCookieConsent } from '~/composables/useCookieConsent'

const props = withDefaults(
  defineProps<{
    mapUrl?: string
    locationUrl?: string
    mapZoom?: number
  }>(),
  {
    mapUrl: () => dealerContact.mapUrl,
    locationUrl: '',
    mapZoom: 12
  }
)

const { locale, textFor } = useSiteContent()
const { allowsExternalMaps, openPreferences } = useCookieConsent()

const labels = {
  address: t('Address:', 'Adresse :', 'العنوان:'),
  hours: t('Working Hours:', 'Horaires :', 'ساعات العمل:'),
  phone: t('Phone Number:', 'Numéro de téléphone :', 'رقم الهاتف:'),
  email: t('Email:', 'E-mail :', 'البريد الإلكتروني:'),
  formHeading: t(
    'Any questions? Feel free to contact us!',
    'Une question ? N’hésitez pas à nous contacter !',
    'لديك سؤال؟ لا تتردد في التواصل معنا!'
  ),
  mapTitle: t('Google Map', 'Carte Google', 'خريطة Google'),
  mapConsent: t('To display Google Maps, please accept optional cookies.', 'Pour afficher Google Maps, veuillez accepter les cookies facultatifs.', 'لعرض خرائط Google، يرجى قبول ملفات تعريف الارتباط الاختيارية.'),
  cookieSettings: t('Cookie settings', 'Gérer les cookies', 'إدارة ملفات تعريف الارتباط')
}

const mapSrc = computed(() => {
  const hl = locale.value.code === 'en' ? 'en-US' : locale.value.code
  return `${props.mapUrl}${props.mapUrl.includes('?') ? '&' : '?'}output=embed&hl=${hl}&z=${props.mapZoom}`
})
</script>

<style scoped>
.contact-page {
  width: min(1232px, calc(100% - 48px));
  min-height: 66vh;
  margin: 0 auto;
  padding: 98px 0 68px;
}

.contact-page__title {
  margin: 0 0 20px;
  color: #404040;
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
}

.contact-page__spacer {
  height: 40px;
}

.contact-page__columns {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;
  margin-bottom: 28px;
}

.contact-page__details {
  margin: 0;
  color: #404040;
  font-size: 16px;
  line-height: 24px;
}

.contact-page__details strong {
  font-weight: 700;
}

.contact-page__details a {
  color: inherit;
  text-decoration: none;
}

.contact-page__details a:hover {
  text-decoration: underline;
}

.contact-page__form-title {
  margin: 0 0 20px;
  color: #404040;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
}

.contact-page__right iframe {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  border: 0;
}

.contact-page__map-consent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  aspect-ratio: 1 / 1;
  padding: 28px;
  border: 1px solid #d9e3e4;
  background: #f1f5f5;
  color: #374151;
  text-align: center;
}

.contact-page__map-consent p { margin: 0; line-height: 1.6; }
.contact-page__map-consent button { min-height: 44px; padding: 10px 18px; border: 1px solid #406a70; background: transparent; color: #31575c; font: inherit; cursor: pointer; }
.contact-page__map-consent button:hover { background: #e3ecec; }
.contact-page__map-consent button:focus-visible { outline: 3px solid #406a70; outline-offset: 3px; }

.contact-page :deep(.lead-form) {
  display: block;
  max-width: none;
}

.contact-page :deep(.lead-form__row) {
  padding: 5px 0;
}

.contact-page :deep(.lead-form__row--split) {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 32px;
}

.contact-page :deep(.lead-form__row--split + .lead-form__row:not(.lead-form__row--split)) {
  margin-top: 28px;
}

.contact-page :deep(.lead-form__field) {
  gap: 8px;
}

.contact-page :deep(.lead-form label) {
  color: #374151;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}

.contact-page :deep(.lead-form input),
.contact-page :deep(.lead-form select),
.contact-page :deep(.lead-form textarea) {
  height: 38px;
  min-height: 38px;
  background: transparent;
  box-shadow: none;
}

.contact-page :deep(.lead-form textarea) {
  height: 58px;
  min-height: 58px;
}

.contact-page :deep(.button-row) {
  padding: 12px 0 5px;
}

@media (max-width: 782px) {
  .contact-page {
    padding-top: 56px;
  }

  .contact-page__columns {
    grid-template-columns: minmax(0, 1fr);
  }

  .contact-page :deep(.lead-form__row--split) {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>