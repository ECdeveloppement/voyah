<template>
  <article class="quote-page">
    <form ref="formElement" class="quote-form" novalidate :aria-busy="state === 'sending'" @submit.prevent="submit">
      <img class="quote-banner" src="/assets/quote/hero.webp" alt="VOYAH Dream, Courage, Free — Auto Hall" width="1200" height="628" fetchpriority="high" />

      <header class="quote-intro quote-pad">
        <h1>{{ textFor(schema.title) }}</h1>
        <p><strong>Courage, Free {{ textFor(labels.or) }} Dream :</strong> {{ textFor(labels.introStart) }} <strong>Auto Hall</strong><br class="quote-desktop-break" /> {{ textFor(labels.introEnd) }}</p>
        <p class="quote-reassurance">{{ textFor(labels.reassurance) }}</p>
        <p class="quote-required">{{ textFor(labels.allRequired) }}</p>
        <img class="quote-lineup" src="/assets/quote/model-lineup.webp" :alt="textFor(labels.lineup)" width="1081" height="274" />
      </header>

      <fieldset class="quote-models quote-pad" :disabled="locked">
        <legend>{{ textFor(labels.model) }}</legend>
        <div class="quote-model-list">
          <label v-for="model in quoteModels" :key="model.value" class="quote-model" :class="{ 'is-selected': values.model === model.value }">
            <input v-model="values.model" class="quote-choice" type="radio" name="model" :value="model.value" required :aria-invalid="Boolean(errors.model)" :aria-describedby="errors.model ? 'quote-error-model' : undefined" />
            <img :src="model.image" alt="" width="251" height="144" />
            <span class="quote-model-copy"><strong>{{ model.name }}</strong><span>{{ textFor(model.description) }}</span></span>
          </label>
        </div>
        <p v-if="errors.model" id="quote-error-model" class="quote-error">{{ errors.model }}</p>
      </fieldset>

      <img class="quote-banner" src="/assets/quote/dream-banner.webp" alt="VOYAH Dream" width="1200" height="628" loading="lazy" />

      <div class="quote-details quote-pad">
        <fieldset class="quote-customer" :disabled="locked">
          <legend>{{ textFor(labels.customerType) }}</legend>
          <div class="quote-options quote-options--customer">
            <label v-for="option in quoteCustomerTypes" :key="option.value">
              <input v-model="values.customerType" class="quote-choice" type="radio" name="customerType" :value="option.value" required :aria-invalid="Boolean(errors.customerType)" :aria-describedby="errors.customerType ? 'quote-error-customerType' : undefined" />
              <span>{{ textFor(option.label) }}</span>
            </label>
          </div>
          <p v-if="errors.customerType" id="quote-error-customerType" class="quote-error">{{ errors.customerType }}</p>
        </fieldset>

        <fieldset class="quote-contact" :disabled="locked">
          <legend>{{ textFor(labels.contact) }}</legend>
          <div class="quote-fields">
            <div v-for="field in contactFields" :key="field.name" class="quote-field">
              <label class="quote-sr-only" :for="`quote-${field.name}`">{{ textFor(field.label) }}</label>
              <input :id="`quote-${field.name}`" v-model="values[field.name]" :name="field.name" :type="field.type" :placeholder="textFor(field.label)" :autocomplete="autocomplete[field.name]" :maxlength="2000" required :aria-invalid="Boolean(errors[field.name])" :aria-describedby="errors[field.name] ? `quote-error-${field.name}` : undefined" />
              <p v-if="errors[field.name]" :id="`quote-error-${field.name}`" class="quote-error">{{ errors[field.name] }}</p>
            </div>
          </div>
          <label class="quote-consent">
            <input v-model="values.consent" class="quote-choice" type="checkbox" name="consent" true-value="Oui" false-value="" required :aria-invalid="Boolean(errors.consent)" :aria-describedby="errors.consent ? 'quote-error-consent' : undefined" />
            <span>{{ textFor(labels.consent) }}</span>
          </label>
          <p v-if="errors.consent" id="quote-error-consent" class="quote-error">{{ errors.consent }}</p>
        </fieldset>
      </div>

      <img class="quote-banner" src="/assets/quote/free-banner.webp" alt="VOYAH Free" width="1200" height="628" loading="lazy" />

      <div class="quote-finance quote-pad">
        <fieldset :disabled="locked">
          <legend>{{ textFor(labels.financing) }}</legend>
          <div class="quote-options quote-options--financing">
            <label v-for="option in quoteFinancingOptions" :key="option.value">
              <input v-model="values.financing" class="quote-choice" type="radio" name="financing" :value="option.value" required :aria-invalid="Boolean(errors.financing)" :aria-describedby="errors.financing ? 'quote-error-financing' : undefined" />
              <span>{{ textFor(option.label) }}</span>
            </label>
          </div>
          <p v-if="errors.financing" id="quote-error-financing" class="quote-error">{{ errors.financing }}</p>
        </fieldset>
        <p class="quote-privacy">{{ textFor(labels.privacy) }}<br />{{ textFor(labels.seePrivacy) }} <NuxtLink :to="buildPath('privacy.html')">{{ textFor(labels.privacyLink) }}</NuxtLink></p>
        <div class="quote-honeypot" aria-hidden="true" inert>
          <label for="quote-website">Website</label>
          <input id="quote-website" v-model="company" type="text" autocomplete="off" tabindex="-1" />
        </div>
        <p v-if="state === 'error'" class="quote-error quote-send-error" role="alert">{{ textFor(rateLimited ? labels.rateLimited : labels.failure) }}</p>
        <button class="quote-submit" type="submit" :disabled="locked">{{ textFor(state === 'sending' ? labels.sending : labels.submit) }}</button>
      </div>

      <img class="quote-banner" src="/assets/quote/courage-banner.webp" alt="VOYAH Courage" width="1200" height="628" loading="lazy" />
      <section v-if="state === 'success'" ref="successElement" class="quote-success quote-pad" role="status" tabindex="-1">
        <span class="quote-success-icon" aria-hidden="true">✓</span>
        <h2>{{ textFor(labels.thanks) }}<br />{{ textFor(schema.success) }}</h2>
        <p>{{ textFor(labels.successDetail) }}</p>
      </section>
    </form>
  </article>
</template>

<script setup lang="ts">
import { $fetch } from 'ofetch'
import { leadForms, quoteModels, quoteCustomerTypes, quoteFinancingOptions, t } from '~/data/dealer'
import { useSiteContent } from '~/composables/useSiteContent'

const { locale, textFor, buildPath } = useSiteContent()
const route = useRoute()
const schema = leadForms.quote
const labels = {
  or: t('or', 'ou', 'أو'),
  introStart: t('choose your model and an advisor from', 'choisissez votre modèle et un conseiller', 'اختر طرازك وسيتواصل معك مستشار من'),
  introEnd: t('will get back to you as soon as possible.', 'vous répond dans les plus brefs délais.', 'في أقرب وقت ممكن.'),
  reassurance: t('Less than a minute, no obligation.', "Moins d'une minute, sans engagement.", 'أقل من دقيقة، دون أي التزام.'),
  allRequired: t('All fields are required.', 'Tous les champs sont obligatoires.', 'جميع الحقول إلزامية.'),
  lineup: t('Dream PHEV, Courage 100% electric, Free REEV', 'Dream PHEV, Courage 100% électrique, Free REEV', 'Dream PHEV، Courage كهربائية بالكامل، Free REEV'),
  model: t('Which model interests you?', 'Quel modèle vous intéresse ?', 'أي طراز يهمك؟'),
  customerType: t('You are', 'Vous êtes', 'أنت'),
  contact: t('Your contact details', 'Vos coordonnées', 'بيانات الاتصال بك'),
  consent: t('I agree to be contacted by Autohall about my quote request.', 'J’accepte d’être contacté(e) par Autohall au sujet de ma demande de devis.', 'أوافق على أن تتواصل معي Autohall بشأن طلب عرض السعر.'),
  financing: t('Financing method', 'Mode de financement', 'طريقة التمويل'),
  privacy: t('By submitting this form, you agree that your information will be sent to Auto Hall, the Voyah dealer in Tunisia.', 'En envoyant ce formulaire, vous acceptez que vos informations soient transmises à Auto Hall, concessionnaire Voyah en Tunisie.', 'بإرسال هذا النموذج، فإنك توافق على نقل بياناتك إلى Auto Hall، وكيل Voyah في تونس.'),
  seePrivacy: t('See the', 'Voir la', 'اطّلع على'),
  privacyLink: t('privacy policy.', 'politique de confidentialité.', 'سياسة الخصوصية.'),
  submit: t('Send my request', 'Envoyer ma demande', 'إرسال طلبي'),
  sending: t('Sending…', 'Envoi en cours…', 'جارٍ الإرسال…'),
  thanks: t('Thank you!', 'Merci !', 'شكراً!'),
  successDetail: t('An Auto Hall advisor will contact you within [24 h] to prepare your quote.', 'Un conseiller Auto Hall vous contacte sous [24 h] pour préparer votre devis.', 'سيتصل بك مستشار Auto Hall خلال [24 ساعة] لإعداد عرض السعر.'),
  required: t('This field is required.', 'Ce champ est obligatoire.', 'هذا الحقل مطلوب.'),
  invalidEmail: t('Please enter a valid e-mail.', 'Saisissez un e-mail valide.', 'أدخل بريداً إلكترونياً صحيحاً.'),
  invalidPhone: t('Please enter a valid 8-digit phone number.', 'Saisissez un numéro de téléphone valide à 8 chiffres.', 'أدخل رقماً هاتفياً صحيحاً من 8 أرقام.'),
  invalidChoice: t('Please select one of the available options.', 'Sélectionnez une des options proposées.', 'اختر أحد الخيارات المتاحة.'),
  failure: t('Your request could not be sent. Your entries have been kept; please try again.', 'Votre demande n’a pas pu être envoyée. Vos informations sont conservées dans le formulaire ; veuillez réessayer.', 'تعذّر إرسال طلبك. تم الاحتفاظ بالبيانات في النموذج؛ يرجى المحاولة مجدداً.'),
  rateLimited: t('Too many attempts. Please try again in 10 minutes.', 'Trop de tentatives. Veuillez réessayer dans 10 minutes.', 'محاولات كثيرة. يرجى إعادة المحاولة بعد 10 دقائق.')
}
const contactFields = schema.fields.filter((field) => ['name', 'phone', 'address', 'city', 'email'].includes(field.name))
const autocomplete: Record<string, string> = { name: 'name', phone: 'tel', address: 'street-address', city: 'address-level2', email: 'email' }
const values = reactive<Record<string, string>>(Object.fromEntries(schema.fields.map((field) => [field.name, ''])))
const requestedModel = Array.isArray(route.query.model) ? route.query.model[0] : route.query.model
if (quoteModels.some((model) => model.value === requestedModel)) values.model = requestedModel as string

const errors = reactive<Record<string, string>>({})
const company = ref('')
const state = ref<'idle' | 'sending' | 'error' | 'success'>('idle')
const rateLimited = ref(false)
const locked = computed(() => state.value === 'sending' || state.value === 'success')
const formElement = ref<HTMLFormElement | null>(null)
const successElement = ref<HTMLElement | null>(null)

const submit = async () => {
  if (locked.value || company.value) return
  Object.keys(errors).forEach((key) => delete errors[key])
  for (const field of schema.fields) {
    const value = values[field.name].trim()
    if (!value) errors[field.name] = textFor(labels.required)
    else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) errors[field.name] = textFor(labels.invalidEmail)
    else if (field.type === 'tel' && !/^\\d{8}$/.test(value)) errors[field.name] = textFor(labels.invalidPhone)
    else if (field.allowedValues && !field.allowedValues.includes(value)) errors[field.name] = textFor(labels.invalidChoice)
  }
  if (Object.keys(errors).length) {
    await nextTick()
    formElement.value?.querySelector<HTMLInputElement>('[aria-invalid="true"]')?.focus()
    return
  }
  state.value = 'sending'
  rateLimited.value = false
  try {
    const result = await $fetch<{ ok: boolean }>('/api/lead', {
      method: 'POST',
      body: { form: 'quote', locale: locale.value.code, company: company.value, fields: Object.fromEntries(schema.fields.map((field) => [field.name, values[field.name].trim()])) }
    })
    if (result.ok !== true) throw new Error('Request not confirmed')
    state.value = 'success'
    await nextTick()
    successElement.value?.focus({ preventScroll: true })
    successElement.value?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  } catch (error) {
    rateLimited.value = (error as { statusCode?: number }).statusCode === 429
    state.value = 'error'
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'Trasandina';
  src: url('/fonts/TrasandinaBook.otf') format('opentype');
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'Trasandina';
  src: url('/fonts/TrasandinaBold.otf') format('opentype');
  font-style: normal;
  font-weight: 700;
  font-display: swap;
}

.quote-page {
  container-type: inline-size;
  max-width: 1200px;
  margin-inline: auto;
  color: #182b4c;
  background: #fff;
  font-family: 'Trasandina', 'Cairo', sans-serif;
}

.quote-form {
  font-size: clamp(14px, 2.8745cqw, 34.4938px);
  line-height: 1.2;
}

.quote-form p { margin: 0; }
.quote-form strong { font-weight: 700; }
.quote-pad { padding-inline: 5% 3.5%; }
.quote-banner { width: 100%; height: auto; }

.quote-form h1,
.quote-form h2,
.quote-form legend {
  color: inherit;
  font-size: clamp(24px, 5.8333cqw, 70px);
  font-weight: 700;
  line-height: 1.2;
}

.quote-form fieldset {
  min-width: 0;
  margin: 0;
  border: 0;
  padding: 0;
}

.quote-form legend {
  float: left;
  width: 100%;
  padding: 0;
}

.quote-form legend + * { clear: both; }
.quote-intro { padding-top: 3.5cqw; }
.quote-intro h1 { margin-bottom: 2.5cqw; }
.quote-reassurance { margin-top: 3.45cqw !important; }
.quote-required { margin-top: max(8px, 1cqw) !important; font-weight: 700; }
.quote-lineup { width: 98.45%; height: auto; margin-top: 3.6cqw; }
.quote-form .quote-models { padding: 5cqw 3.5% 5cqw 5%; }
.quote-models legend { margin-bottom: 2.5cqw; }
.quote-model-list { display: grid; gap: 2cqw; }

.quote-model {
  display: grid;
  grid-template-columns: 3.6cqw 23.1% minmax(0, 1fr);
  align-items: center;
  gap: 3cqw;
  min-height: 16.2036cqw;
  padding: 1.9cqw 2.65cqw;
  border: max(1.5px, .3333cqw) solid #182b4c;
  border-radius: 2cqw;
  cursor: pointer;
}

.quote-model.is-selected { background: #f2f5f9; }
.quote-model img { width: 100%; height: auto; border-radius: 1.35cqw; }
.quote-model-copy { display: block; min-width: 0; }
.quote-model-copy strong { display: block; }
.quote-model-copy > span { white-space: pre-line; }

.quote-choice {
  appearance: none;
  flex: 0 0 auto;
  display: inline-grid;
  place-content: center;
  width: max(20px, 3.6cqw);
  height: max(20px, 3.6cqw);
  margin: 0;
  border: max(1.5px, .3cqw) solid #182b4c;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
}

.quote-choice:checked::after {
  content: '';
  width: max(10px, 1.9cqw);
  height: max(10px, 1.9cqw);
  border-radius: 50%;
  background: #182b4c;
}

.quote-form :is(input, button, a):focus-visible { outline: 3px solid #477bab; outline-offset: 4px; }
.quote-details { padding-top: 2.5cqw; padding-bottom: 5.85cqw; }
.quote-customer legend { margin-bottom: 1.2cqw; }
.quote-options { display: grid; padding-inline: 3cqw; }
.quote-options--customer { grid-template-columns: 1fr 1.4fr; }
.quote-options label { display: flex; align-items: center; gap: 1.7cqw; min-height: 44px; cursor: pointer; }
.quote-form .quote-customer { padding-bottom: 6.1cqw; }
.quote-contact legend { margin-bottom: 4.4cqw; }
.quote-fields { display: grid; gap: 3.2cqw; }

.quote-field > input {
  display: block;
  width: 100%;
  min-height: max(44px, 6.35cqw);
  border: max(1px, .1667cqw) solid #182b4c;
  border-radius: 2cqw;
  padding: .8cqw 2.5cqw;
  color: #182b4c;
  background: #fff;
  line-height: 1.2;
}

.quote-field > input::placeholder { color: #aba9ba; opacity: 1; }
.quote-consent { display: flex; align-items: flex-start; gap: 1.7cqw; padding-inline: 3cqw; margin-top: 2.4cqw; cursor: pointer; }
.quote-consent > span { max-width: 78cqw; }
.quote-finance { padding-top: 1.85cqw; padding-bottom: 5cqw; }
.quote-finance legend { margin-bottom: 2cqw; }
.quote-options--financing { grid-template-columns: repeat(3, 1fr); }
.quote-privacy { margin-top: 4.9cqw !important; max-width: 84cqw; }
.quote-privacy a { text-decoration: underline; font-weight: 700; }

.quote-submit {
  display: block;
  width: 100%;
  min-height: max(44px, 6.35cqw);
  margin-top: 5.5cqw;
  padding: 1cqw 2cqw;
  border: 0;
  border-radius: 2cqw;
  background: #182b4c;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
}

.quote-submit:hover:not(:disabled) { background: #253e65; }
.quote-submit:disabled { cursor: default; opacity: .7; }
.quote-error { margin-top: 10px !important; color: #a11d25; font-size: .85em; }
.quote-form [aria-invalid='true'] { border-color: #a11d25; }
.quote-send-error { margin-bottom: 16px !important; }
.quote-success { position: relative; padding-top: 3.6cqw; padding-bottom: 7cqw; }
.quote-success h2 { margin: 0; }

.quote-success-icon {
  position: absolute;
  inset-inline-start: 5%;
  top: -4.5cqw;
  display: grid;
  place-items: center;
  width: 7cqw;
  height: 7cqw;
  border: 2px solid #fff;
  border-radius: 1.8cqw;
  color: #fff;
  background: #182b4c;
  font-size: 4.4cqw;
}

.quote-sr-only,
.quote-honeypot { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

@media (max-width: 600px) {
  .quote-desktop-break { display: none; }
  .quote-model { grid-template-columns: 20px 23% minmax(0, 1fr); gap: 2.5cqw; padding-block: 3cqw; }
  .quote-model-copy > span { white-space: normal; }
  .quote-options--financing { column-gap: 2cqw; padding-inline: 0; }
  .quote-options--financing label { gap: 1.2cqw; }
  .quote-details, .quote-finance { padding-top: 5cqw; padding-bottom: 6cqw; }
  .quote-privacy { max-width: none; }
}
</style>
