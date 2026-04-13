<template>
  <div class="voyah-homepage">
    <HomeHero id="hero" :slides="homePage.slides" />
    <HomeBrandIntro id="brand" :data="homePage.brandIntro" />
    <HomeModels id="models" :title="homePage.modelsTitle" :body="homePage.modelsBody" :models="homePage.models" />
    <HomeStatsMedia id="energy" :data="homePage.energy" />
    <HomeTechnology id="tech" :data="homePage.technology" />
    <HomeServiceGrid id="service" :data="homePage.service" />
    <HomeCommunity id="community" :data="homePage.community" />
    <HomeGlobalMap id="map" :data="homePage.footprint" />
    <HomeQuickActions />
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from '#app'
import { homePage } from '~/data/site'
import { useSiteContent } from '~/composables/useSiteContent'

const { textFor } = useSiteContent()

useSeoMeta({
  title: () => `Voyah | ${textFor(homePage.modelsTitle)}`,
  description: () => textFor(homePage.brandIntro.body)
})
</script>

<style scoped>
.voyah-homepage > * {
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
</style>
