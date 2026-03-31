<template>
  <section class="page-hero">
    <div class="page-hero-media">
      <img :src="image" :alt="title" />
    </div>
    <div class="page-hero-overlay" />
    <div class="page-hero-content">
      <div class="container">
        <img v-if="logo" :src="logo" :alt="title" class="page-logo" />
        <p class="eyebrow">{{ eyebrow }}</p>
        <h1 class="page-title">{{ title }}</h1>
        <p class="page-summary">{{ summary }}</p>
        <div v-if="$slots.actions" class="button-row" style="margin-top: 28px;">
          <slot name="actions" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  summary: string
  image: string
  logo?: string
}>()
</script>
