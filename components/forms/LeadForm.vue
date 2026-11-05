<template>
  <form class="lead-form" novalidate @submit.prevent="submit">
    <p v-if="state === 'success'" class="lead-form__notice">{{ textFor(schema.success) }}</p>

    <template v-else>
      <div
        v-for="(row, rowIndex) in fieldRows"
        :key="rowIndex"
        class="lead-form__row"
        :class="{ 'lead-form__row--split': row.length === 2 }"
      >
        <div v-for="field in row" :key="field.name" class="lead-form__field">
          <label :for="fieldId(field)">{{ textFor(field.label) }}<span v-if="field.required"> *</span></label>
          <component
            :is="field.type === 'select' ? 'select' : field.type === 'textarea' ? 'textarea' : 'input'"
            :id="fieldId(field)"
            v-model="values[field.name]"
            :type="field.type === 'select' || field.type === 'textarea' ? undefined : field.type"
            :required="field.required"
            :aria-invalid="errors[field.name] ? 'true' : 'false'"
            :placeholder="field.placeholder ? textFor(field.placeholder) : undefined"
          >
            <template v-if="field.type === 'select'">
              <option value="" disabled selected></option>
              <option v-for="option in modelOptions" :key="option.value" :value="option.value">
                {{ option.label }}
              </option>
            </template>
          </component>
          <p v-if="errors[field.name]" class="lead-form__error">{{ errors[field.name] }}</p>
        </div>
      </div>

      <div class="lead-form__honeypot" aria-hidden="true">
        <label for="lead-company">Company</label>
        <input id="lead-company" v-model="company" type="text" autocomplete="off" tabindex="-1" />
      </div>

      <p v-if="state === 'error'" class="lead-form__error">{{ textFor(labels.failure) }}</p>

      <div class="button-row">
        <button type="submit" class="base-button primary" :disabled="state === 'sending'">
          {{ state === 'sending' ? textFor(labels.sending) : textFor(props.form === 'contact' ? labels.submitMessage : labels.submit) }}
        </button>
      </div>
    </template>
  </form>
</template>

<script setup lang="ts">
import { $fetch } from 'ofetch'
import { leadForms, modelDisplayName, publicModelSlugs, t, type LeadField } from '~/data/dealer'
import { useSiteContent } from '~/composables/useSiteContent'

const props = defineProps<{ form: keyof typeof leadForms }>()

const { locale, textFor } = useSiteContent()
const route = useRoute()

const schema = computed(() => leadForms[props.form])
const labels = {
  submit: t('Submit', 'Envoyer', 'إرسال'),
  submitMessage: t('Submit Message', 'Envoyer le message', 'إرسال الرسالة'),
  sending: t('Sending…', 'Envoi en cours…', 'جارٍ الإرسال…'),
  failure: t(
    'Your request could not be sent. Please try again or call us.',
    'Votre demande n’a pas pu être envoyée. Réessayez ou appelez-nous.',
    'لم يتم إرسال طلبك. حاول مجدداً أو اتصل بنا.'
  )
}

/** Deux champs par ligne, dans l’ordre de déclaration ; un textarea occupe toute la largeur. */
const fieldRows = computed<LeadField[][]>(() => {
  const rows: LeadField[][] = []
  let pair: LeadField[] = []

  const flush = () => {
    if (pair.length) {
      rows.push(pair)
      pair = []
    }
  }

  for (const field of schema.value.fields) {
    if (field.type === 'textarea') {
      flush()
      rows.push([field])
      continue
    }
    pair.push(field)
    if (pair.length === 2) flush()
  }

  flush()
  return rows
})

const modelOptions = publicModelSlugs.map((slug) => ({
  value: slug,
  label: textFor(modelDisplayName[slug])
}))

const paramValue = (value: unknown) => (Array.isArray(value) ? String(value[0] ?? '') : String(value ?? ''))

const values = reactive<Record<string, string>>(
  Object.fromEntries(schema.value.fields.map((field) => [field.name, '']))
)

const requestedModel = paramValue(route.query.model)
const modelField = schema.value.fields.find((field) => field.options === 'models')
if (modelField && requestedModel && (publicModelSlugs as readonly string[]).includes(requestedModel)) {
  values[modelField.name] = requestedModel
}

const company = ref('')
const errors = reactive<Record<string, string>>({})
const state = ref<'idle' | 'sending' | 'error' | 'success'>('idle')

const fieldId = (field: { name: string }) => `lead-${props.form}-${field.name}`

const validate = () => {
  Object.keys(errors).forEach((key) => delete errors[key])

  for (const field of schema.value.fields) {
    const value = (values[field.name] ?? '').trim()

    if (field.required && !value) {
      errors[field.name] = textFor(t('This field is required.', 'Ce champ est obligatoire.', 'هذا الحقل مطلوب.'))
      continue
    }

    if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      errors[field.name] = textFor(t('Please enter a valid e-mail.', 'Saisissez un e-mail valide.', 'أدخل بريداً إلكترونياً صحيحاً.'))
    }
  }

  return Object.keys(errors).length === 0
}

const submit = async () => {
  if (company.value) {
    state.value = 'success'
    return
  }

  if (!validate()) {
    return
  }

  state.value = 'sending'

  try {
    await $fetch('/api/lead', {
      method: 'POST',
      body: {
        form: props.form,
        locale: locale.value.code,
        company: company.value,
        fields: Object.fromEntries(
          schema.value.fields.map((field) => [field.name, (values[field.name] ?? '').trim()])
        )
      }
    })
    state.value = 'success'
  } catch {
    state.value = 'error'
  }
}
</script>

<style scoped>
.lead-form__field label > span {
  color: var(--text-soft);
}
</style>
