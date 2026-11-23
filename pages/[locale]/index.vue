<template>
  <div class="voyah-homepage">
    <HomeVideoHero />
    <HomeModelsShowcase :entries="modelsShowcase" />
    <HomeModelCards :slides="homePage.slides" />
    <HomeNews />
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from '#app'
import { homePage, modelsShowcase } from '~/data/site'
import { useSiteContent } from '~/composables/useSiteContent'
import HomeModelCards from '~/components/home/HomeModelCards.vue'
import HomeModelsShowcase from '~/components/home/HomeModelsShowcase.vue'
import HomeNews from '~/components/home/HomeNews.vue'
import HomeVideoHero from '~/components/home/HomeVideoHero.vue'

const { textFor } = useSiteContent()

const homeTitle = () => `Voyah | ${textFor(homePage.modelsTitle)}`
const homeDescription = () => textFor(homePage.slides[0].description)

useSeoMeta({
  title: homeTitle,
  description: homeDescription,
  ogTitle: homeTitle,
  ogDescription: homeDescription,
  twitterTitle: homeTitle,
  twitterDescription: homeDescription
})
</script>