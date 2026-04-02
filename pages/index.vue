<template>
  <div class="root-redirect-page" />
</template>

<script setup lang="ts">
await navigateTo('/fr', { redirectCode: 301, replace: true })
</script>
