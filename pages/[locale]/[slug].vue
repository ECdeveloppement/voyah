<template>
  <ModelPage v-if="modelPage" :model="modelPage" />
  <InfoPage v-else-if="infoPage" :page="infoPage" />
  <LegalPage v-else-if="legalPage" :page="legalPage" />
</template>

<script setup lang="ts">
import InfoPage from '~/components/page/InfoPage.vue'
import LegalPage from '~/components/page/LegalPage.vue'
import ModelPage from '~/components/page/ModelPage.vue'
import { resolvePage } from '~/data/site'
import { useSiteContent } from '~/composables/useSiteContent'

definePageMeta({
  validate: (route) => {
    const slugParam = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
    return typeof slugParam === 'string' && Boolean(resolvePage(slugParam))
  }
})

const route = useRoute()
const slug = computed(() => (Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug))
const page = computed(() => (typeof slug.value === 'string' ? resolvePage(slug.value) ?? null : null))

const modelPage = computed(() => (page.value?.kind === 'model' ? page.value : null))
const infoPage = computed(() => (page.value?.kind === 'info' ? page.value : null))
const legalPage = computed(() => (page.value?.kind === 'legal' ? page.value : null))

const { textFor } = useSiteContent()

useSeoMeta(() => {
  const title = modelPage.value?.title ?? infoPage.value?.title ?? legalPage.value?.title
  const description = modelPage.value?.description ?? infoPage.value?.summary ?? legalPage.value?.summary

  return {
    title: title ? `Voyah | ${textFor(title)}` : 'Voyah',
    description: description ? textFor(description) : 'Voyah'
  }
})
</script>
