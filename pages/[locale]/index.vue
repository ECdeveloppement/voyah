<template>
  <div class="voyah-homepage">
    <HomeVideoHero />
    <HomeModelCards :slides="homePage.slides" />
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from '#app'
import { homePage } from '~/data/site'
import { useSiteContent } from '~/composables/useSiteContent'
import HomeModelCards from '~/components/home/HomeModelCards.vue'
import HomeVideoHero from '~/components/home/HomeVideoHero.vue'

const { textFor } = useSiteContent()

useSeoMeta({
  title: () => `Voyah | ${textFor(homePage.modelsTitle)}`,
  description: () => textFor(homePage.slides[0].description)
})
</script>
