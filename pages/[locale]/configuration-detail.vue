<template>
  <ConfigurationDetailPage :car-model="carModel" />
</template>

<script setup lang="ts">
import ConfigurationDetailPage from '~/components/page/ConfigurationDetailPage.vue'

const route = useRoute()
const carModel = computed(() => route.query.carModel as string)
</script>
