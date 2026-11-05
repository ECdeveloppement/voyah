<template>
  <div class="lead-page">
    <section v-if="page.heroImage" class="lead-hero">
      <img :src="page.heroImage" :alt="formTitle" />
      <div class="lead-hero__scrim" />
      <div class="container lead-hero__inner">
        <h1 class="lead-hero__title">{{ formTitle }}</h1>
      </div>
    </section>

    <div class="container lead-page__body">
      <h1 v-if="!page.heroImage" class="lead-page__title">{{ formTitle }}</h1>

      <div v-if="formKey === 'contact'" class="lead-contact">
        <dl class="lead-contact__lines">
          <div v-for="line in contactLines" :key="line.label" class="lead-contact__line">
            <dt>{{ line.label }}</dt>
            <dd>
              <a v-if="line.href" :href="line.href" target="_blank" rel="noopener noreferrer">{{ line.value }}</a>
              <span v-else>{{ line.value }}</span>
            </dd>
          </div>
        </dl>

        <iframe
          v-if="dealerContact.mapUrl"
          class="lead-contact__frame"
          :src="`${dealerContact.mapUrl}${dealerContact.mapUrl.includes('?') ? '&' : '?'}output=embed`"
          :title="textFor(labels.openMaps)"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
        />

        <a
          v-if="dealerContact.mapUrl"
          :href="dealerContact.mapUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="lead-contact__map"
        >
          {{ textFor(labels.openMaps) }}
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M14 3h7v7h-2V6.4l-8.3 8.3-1.4-1.4L17.6 5H14V3zM5 5h5v2H5v12h12v-5h2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"
            />
          </svg>
        </a>
      </div>

      <div class="lead-page__grid" :class="{ 'lead-page__grid--single': formKey === 'contact' }">
        <div class="lead-page__form">
          <h2 v-if="showFormHeading" class="lead-page__heading">{{ textFor(labels.formHeading) }}</h2>
          <LeadForm :form="formKey" :key="locale.code" />
        </div>

        <aside v-if="asideImage" class="lead-page__aside">
          <img :src="asideImage" :alt="textFor(modelDisplayName['free.html'])" />
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InfoDefinition } from '~/data/site'
import { homePage } from '~/data/site'
import { dealerContact, leadForms, modelDisplayName, t } from '~/data/dealer'
import LeadForm from '~/components/forms/LeadForm.vue'
import { useSiteContent } from '~/composables/useSiteContent'

const props = defineProps<{
  page: InfoDefinition
  formKey: keyof typeof leadForms
}>()

const { locale, textFor } = useSiteContent()

const formTitle = computed(() => textFor(leadForms[props.formKey].title))

const labels = {
  openMaps: t('Open in Maps', 'Ouvrir dans Maps', 'فتح في الخرائط'),
  formHeading: t(
    'Any questions? Feel free to contact us!',
    'Une question ? N’hésitez pas à nous contacter !',
    'لديك سؤال؟ لا تتردد في التواصل معنا!'
  )
}

const showFormHeading = computed(() => props.formKey === 'contact')

const asideImage = computed(() => {
  if (props.formKey === 'contact') return ''
  if (props.formKey === 'test-drive') return '/assets/qatar/images/voyah-free-2024-color-slider-green.webp'
  return homePage.slides[0].image
})

const contactLines = computed(() => {
  const lines: { label: string; value: string; href?: string }[] = []

  const address = textFor(dealerContact.address)
  if (address.trim()) {
    lines.push({ label: textFor(t('Address', 'Adresse', 'العنوان')), value: address })
  }

  const hours = textFor(dealerContact.workingHours)
  if (hours.trim()) {
    lines.push({ label: textFor(t('Working Hours', 'Horaires', 'ساعات العمل')), value: hours })
  }

  if (dealerContact.phone.trim()) {
    lines.push({
      label: textFor(t('Phone Number', 'Numéro de téléphone', 'رقم الهاتف')),
      value: dealerContact.phone,
      href: dealerContact.phoneHref || `tel:${dealerContact.phone.replace(/[^+\d]/g, '')}`
    })
  }

  if (dealerContact.email.trim()) {
    lines.push({
      label: textFor(t('Email', 'E-mail', 'البريد الإلكتروني')),
      value: dealerContact.email,
      href: `mailto:${dealerContact.email}`
    })
  }

  return lines
})
</script>

<style scoped>
.lead-hero {
  position: relative;
  height: clamp(260px, 30vw, 420px);
  overflow: hidden;
}

.lead-hero img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lead-hero__scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.45));
}

.lead-hero__inner {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  align-items: center;
}

.lead-hero__title {
  margin: 0;
  color: #ffffff;
  font-size: clamp(1.9rem, 3.2vw, 2.6rem);
  font-weight: 700;
}

.lead-page__body {
  padding: clamp(48px, 6vw, 88px) 0 clamp(56px, 7vw, 104px);
}

.lead-page__title {
  margin: 0 0 20px;
  color: var(--text);
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 1.2;
}

.lead-contact {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 32px;
  align-items: start;
  margin-bottom: 48px;
}

.lead-contact__frame {
  width: 100%;
  height: 320px;
  border: 0;
  border-radius: 8px;
}

.lead-contact__lines {
  display: grid;
  gap: 18px;
  margin: 0;
}

.lead-contact__line {
  display: grid;
  gap: 4px;
  max-width: 620px;
}

.lead-contact__line dt {
  color: var(--heading);
  font-weight: 700;
}

.lead-contact__line dd {
  margin: 0;
  color: var(--text);
  line-height: 1.55;
}

.lead-contact__line a {
  color: var(--text);
  text-decoration: none;
}

.lead-contact__line a:hover {
  text-decoration: underline;
}

.lead-contact__map {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  background: #ffffff;
  color: #2563eb;
  font-size: 0.875rem;
  text-decoration: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.lead-contact__map svg {
  width: 15px;
  height: 15px;
  fill: currentColor;
}

.lead-page__grid {
  display: grid;
  grid-template-columns: minmax(0, 620px) minmax(0, 1fr);
  gap: clamp(28px, 5vw, 64px);
  align-items: start;
}

.lead-page__grid--single {
  grid-template-columns: minmax(0, 620px);
}

.lead-page__heading {
  margin: 0 0 20px;
  color: var(--text);
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
}

.lead-page__aside img {
  display: block;
  width: 100%;
  height: auto;
}

@media (max-width: 900px) {
  .lead-page__grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .lead-contact {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
