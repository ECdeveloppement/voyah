<template>
  <StoreCenterPage />
</template>

<script setup lang="ts">
import StoreCenterPage from '~/components/page/legacy/StoreCenterPage.vue'
import { resolvePage, type InfoDefinition } from '~/data/site'
import { useSiteContent } from '~/composables/useSiteContent'

const page = resolvePage('store.html') as InfoDefinition | undefined
const { textFor } = useSiteContent()

useHead({
  title: page ? `Voyah | ${textFor(page.title)}` : 'Voyah | Store',
  meta: [
    {
      name: 'description',
      content: page ? textFor(page.summary) : 'Voyah store center'
    }
  ]
})
</script>

