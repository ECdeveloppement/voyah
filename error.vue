<template>
  <div class="error-shell">
    <div class="error-card">
      <p class="eyebrow">Voyah</p>
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
      <NuxtLink class="button button--light" to="/en">Return to Voyah</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const error = useError()

const title = computed(() => {
  if (error.value?.statusCode === 404) {
    return 'Page not found'
  }

  return 'Something went wrong'
})

const message = computed(() => {
  if (error.value?.message) {
    return error.value.message
  }

  return 'The requested page is unavailable in this static build.'
})
</script>
