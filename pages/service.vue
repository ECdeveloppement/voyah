<template>
  <ServiceCenterPage />
</template>

<script setup lang="ts">
import ServiceCenterPage from '~/components/page/legacy/ServiceCenterPage.vue'
import { resolvePage, type InfoDefinition } from '~/data/site'
import { useSiteContent } from '~/composables/useSiteContent'

const page = resolvePage('service.html') as InfoDefinition | undefined
const { textFor } = useSiteContent()

useHead({
  title: page ? `Voyah | ${textFor(page.title)}` : 'Voyah | Service',
  link: [
    { rel: 'stylesheet', href: '/static/assets/index-b22dd282.css' },
    { rel: 'stylesheet', href: '/static/assets/index-056018d9.css' },
    { rel: 'stylesheet', href: '/static/assets/index-ae402aa7.css' },
    { rel: 'stylesheet', href: '/static/assets/userser-c683f735.css' }
  ],
  meta: [
    {
      name: 'description',
      content: page ? textFor(page.summary) : 'Voyah service center'
    }
  ]
})
</script>

