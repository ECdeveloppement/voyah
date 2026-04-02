<template>
  <div class="voyah-homepage">
    <HomeHero :slides="homePage.slides" />
    <HomeBrandIntro :data="homePage.brandIntro" />
    <HomeModels :title="homePage.modelsTitle" :body="homePage.modelsBody" :models="homePage.models" />
    <HomeStatsMedia :data="homePage.energy" />
    <HomeTechnology :data="homePage.technology" />
    <HomeServiceGrid :data="homePage.service" />
    <HomeCommunity :data="homePage.community" />
    <HomeGlobalMap :data="homePage.footprint" />
    <HomeQuickActions />
  </div>
</template>

<script setup lang="ts">
import { homePage } from '~/data/site'
import { useSiteContent } from '~/composables/useSiteContent'

const { textFor } = useSiteContent()

useSeoMeta(() => ({
  title: `Voyah | ${textFor(homePage.modelsTitle)}`,
  description: textFor(homePage.brandIntro.body)
}))
</script>
