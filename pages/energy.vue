<template>
  <EnergyCenterPage />
</template>

<script setup lang="ts">
import EnergyCenterPage from '~/components/page/legacy/EnergyCenterPage.vue'
import { resolvePage, type InfoDefinition } from '~/data/site'
import { useSiteContent } from '~/composables/useSiteContent'

const page = resolvePage('energy.html') as InfoDefinition | undefined
const { textFor } = useSiteContent()

useHead({
  title: page ? `Voyah | ${textFor(page.title)}` : 'Voyah | Energy',
  link: [
    { rel: 'stylesheet', href: '/static/assets/index-c1674d8c.css' },
    { rel: 'stylesheet', href: '/static/assets/index-b23f7af0.css' },
    { rel: 'stylesheet', href: '/static/assets/index-ae402aa7.css' },
    { rel: 'stylesheet', href: '/static/assets/supercharger-partner-307d1a3c.css' }
  ],
  meta: [
    {
      name: 'description',
      content: page ? textFor(page.summary) : 'Voyah energy ecosystem'
    }
  ]
})
</script>

