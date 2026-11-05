<template>
  <a
    v-if="href"
    :href="href"
    :download="downloadName"
    class="base-button brochure-button"
    :class="variant"
  >
    <svg class="brochure-button__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4v10m0 0l-3.6-3.6M12 14l3.6-3.6M4.5 17.5v1.2A1.3 1.3 0 005.8 20h12.4a1.3 1.3 0 001.3-1.3v-1.2"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <slot>{{ textFor(label) }}</slot>
  </a>
</template>

<script setup lang="ts">
import { brochureOf, t, type Localized } from '~/data/dealer'
import { useSiteContent } from '~/composables/useSiteContent'

const props = withDefaults(
  defineProps<{
    slug?: string
    variant?: 'primary' | 'secondary'
    label?: Localized
  }>(),
  { slug: undefined, variant: 'secondary', label: undefined }
)

const { textFor } = useSiteContent()

const label = props.label ?? t('Download the brochure', 'Télécharger la brochure', 'تحميل الدليل')

const href = computed(() => {
  const file = brochureOf(props.slug)
  return file && file.trim() !== '' ? file : undefined
})

const downloadName = computed(() => (href.value ? href.value.split('/').pop() : undefined))
</script>

<style scoped>
.brochure-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.brochure-button__icon {
  width: 16px;
  height: 16px;
  flex: none;
}
</style>
