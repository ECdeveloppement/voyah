<template>
  <div class="metric-grid">
    <article v-for="metric in metrics" :key="`${metric.value}-${textFor(metric.label)}`" class="metric-card">
      <div class="metric-value">{{ metric.value }}</div>
      <div class="metric-label">{{ textFor(metric.label) }}</div>
    </article>
  </div>
</template>

<script setup lang="ts">
import type { Metric } from '~/data/site'
import { useSiteContent } from '~/composables/useSiteContent'

defineProps<{
  metrics: Metric[]
}>()

const { textFor } = useSiteContent()
</script>
