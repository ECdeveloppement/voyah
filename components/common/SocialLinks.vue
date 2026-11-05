<template>
  <div v-if="items.length" class="social-links" :class="{ 'social-links--compact': compact }">
    <a
      v-for="item in items"
      :key="item.id"
      :href="item.url"
      target="_blank"
      rel="noopener noreferrer"
      class="social-link"
      :title="textFor(item.label)"
      :aria-label="textFor(item.label)"
    >
      <img v-if="iconFiles[item.id]" class="social-link__icon" :src="iconFiles[item.id]" :alt="textFor(item.label)" />
      <svg v-else viewBox="0 0 24 24" aria-hidden="true" v-html="glyphs[item.id]" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { socialLinks } from '~/data/dealer'
import { useSiteContent } from '~/composables/useSiteContent'

withDefaults(defineProps<{ compact?: boolean }>(), { compact: false })

const { textFor } = useSiteContent()

/** Icônes SVG officielles fournies dans public/assets/qatar/icons. */
const iconFiles: Record<string, string> = {
  facebook: '/assets/qatar/icons/facebook.svg',
  instagram: '/assets/qatar/icons/instagram.svg',
  tiktok: '/assets/qatar/icons/tiktok-2.svg',
  whatsapp: '/assets/qatar/icons/whatsapp_logo.svg'
}

const glyphs: Record<string, string> = {
  facebook:
    '<path d="M13.5 21v-7.4h2.5l.4-2.9h-2.9V9c0-.9.3-1.5 1.6-1.5h1.4V4.9c-.7-.1-1.5-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.1H8v2.9h2.3V21h3.2z"/>',
  instagram:
    '<g fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3.8" y="3.8" width="16.4" height="16.4" rx="4.6"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none"/></g>',
  tiktok:
    '<path d="M15.6 3h2.2c.1 1.6.9 3 2.4 3.7v2.2c-1.2 0-2.3-.4-3.3-1v5.6a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.3a3.3 3.3 0 1 0 2.4 3.2V3z"/>',
  youtube:
    '<path d="M21.6 7.6c-.2-1-.9-1.7-1.9-1.9C17.9 5.4 12 5.4 12 5.4s-5.9 0-7.7.3c-1 .2-1.7.9-1.9 1.9C2.4 9.4 2.4 12 2.4 12s0 2.6.3 4.4c.2 1 .9 1.7 1.9 1.9 1.8.3 7.7.3 7.7.3s5.9 0 7.7-.3c1-.2 1.7-.9 1.9-1.9.3-1.8.3-4.4.3-4.4s0-2.6-.3-4.4zM10.1 15.3V8.7l5.3 3.3-5.3 3.3z"/>',
  x: '<path d="M4.2 3.5h4.3l4 5.4 4.6-5.4h2.6l-5.9 6.9 6.4 8.6h-4.3l-4.4-5.9-5 5.9H3.9l6.2-7.2-6.1-8.6h.2z"/>',
  linkedin:
    '<path d="M6.9 8.6H4V20h2.9V8.6zM5.4 7.4a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4zM20 13.9c0-3-1.6-4.4-3.8-4.4-1.7 0-2.5.9-3 1.6V8.6H10.4V20h2.9v-6.1c0-1.6.9-2.4 2-2.4s1.8.7 1.8 2.4V20H20v-6.1z"/>',
  whatsapp:
    '<path d="M12 3.3a8.7 8.7 0 0 0-7.4 13.3L3.4 20.7l4.2-1.1A8.7 8.7 0 1 0 12 3.3zm4.6 11.6c-.2.6-1.2 1.1-1.7 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1-1.4-1-2.6 0-1.3.6-1.9.9-2.1.2-.3.5-.3.6-.3h.5c.2 0 .4 0 .6.4l.8 1.9c.1.2.1.4 0 .5l-.4.5c-.2.2-.3.3-.1.6.1.2.6 1 1.3 1.6.9.8 1.6 1 1.9 1.1.2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.6-.1l1.7.8c.3.1.4.2.5.3v.9z"/>'
}

const items = computed(() => socialLinks.filter((link) => link.url.trim() !== ''))
</script>

<style scoped>
.social-link__icon {
  width: 18px;
  height: 18px;
}

.social-links--compact .social-link {
  width: 34px;
  height: 34px;
}

.social-links--compact .social-link svg {
  width: 15px;
  height: 15px;
}
</style>
