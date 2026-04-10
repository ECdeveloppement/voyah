<template>
  <LegacyDisclosurePage v-if="page" :page="page" :text-for="textFor" />
</template>

<script setup lang="ts">
import LegacyDisclosurePage from '~/components/page/legacy/LegacyDisclosurePage.vue'
import { resolvePage, type InfoDefinition } from '~/data/site'
import { useSiteContent } from '~/composables/useSiteContent'

const page = resolvePage('purchasing.html') as InfoDefinition | undefined
const { textFor } = useSiteContent()

useHead({
  title: page ? `Voyah | ${textFor(page.title)}` : 'Voyah | Procurement',
  link: [
    { rel: 'stylesheet', href: '/static/assets/purchasingTemplate-87f0d017.css' },
    { rel: 'stylesheet', href: '/static/assets/purchasingDetail-f1d6b99d.css' }
  ],
  meta: [
    {
      name: 'description',
      content: page ? textFor(page.summary) : 'Voyah procurement disclosure'
    }
  ]
})
</script>

