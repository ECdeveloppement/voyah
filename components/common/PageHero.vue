<template>
  <section :class="['page-hero', `page-hero--${align}`, { 'page-hero--compact': compact }]">
    <div class="page-hero-media">
      <video
        v-if="video"
        :poster="image"
        :aria-label="title"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
      >
        <source :src="video" type="video/mp4" />
      </video>
      <img v-else :src="image" :alt="title" />
    </div>
    <div class="page-hero-overlay" />
    <div class="page-hero-gradient" />

    <div class="page-hero-content">
      <div class="container">
        <div class="page-hero-shell">
          <div class="page-hero-copy">
            <img v-if="logo" :src="logo" :alt="title" class="page-logo" />
            <p class="eyebrow">{{ eyebrow }}</p>
            <h1 class="page-title">{{ title }}</h1>
            <p class="page-summary">{{ summary }}</p>

            <div v-if="$slots.actions" class="button-row page-hero-actions">
              <slot name="actions" />
            </div>
          </div>

          <aside v-if="$slots.meta" class="page-hero-meta">
            <slot name="meta" />
          </aside>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow: string
    title: string
    summary: string
    image: string
    video?: string
    logo?: string
    align?: 'start' | 'center'
    compact?: boolean
  }>(),
  {
    align: 'start',
    compact: false
  }
)
</script>
