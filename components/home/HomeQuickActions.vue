<template>
  <div class="quick-actions desktop-only">
    <NuxtLink :to="buildPath('book-drive.html')" class="quick-action" :aria-label="driveLabel" :title="driveLabel">
      <span class="quick-action__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M4.5 12.25C4.5 8.246 7.746 5 11.75 5H14.5L19 9.5V12.25C19 16.254 15.754 19.5 11.75 19.5C7.746 19.5 4.5 16.254 4.5 12.25Z" stroke="currentColor" stroke-width="1.4" />
          <path d="M14 5.25V9.5H18.25" stroke="currentColor" stroke-width="1.4" />
          <circle cx="11.75" cy="12.25" r="1.2" fill="currentColor" />
        </svg>
      </span>
    </NuxtLink>

    <a href="tel:4008888488" class="quick-action" aria-label="400-888-8488" title="400-888-8488">
      <span class="quick-action__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M8.45 5.5H6.4C5.848 5.5 5.4 5.948 5.4 6.5C5.4 13.955 11.445 20 18.9 20C19.452 20 19.9 19.552 19.9 19V16.95C19.9 16.479 19.571 16.07 19.111 15.969L15.819 15.243C15.42 15.155 15.004 15.305 14.745 15.634L13.871 16.742C11.894 15.797 9.953 13.856 9.008 11.879L10.116 11.005C10.445 10.746 10.595 10.33 10.507 9.931L9.781 6.639C9.68 6.179 9.271 5.85 8.8 5.85L8.45 5.5Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" />
        </svg>
      </span>
    </a>

    <NuxtLink :to="buildPath('service.html')" class="quick-action" :aria-label="serviceLabel" :title="serviceLabel">
      <span class="quick-action__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <rect x="4.75" y="4.75" width="5.5" height="5.5" stroke="currentColor" stroke-width="1.4" />
          <rect x="13.75" y="4.75" width="5.5" height="5.5" stroke="currentColor" stroke-width="1.4" />
          <rect x="4.75" y="13.75" width="5.5" height="5.5" stroke="currentColor" stroke-width="1.4" />
          <path d="M14 14H16.25V16.25H18.5V19H14V14Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" />
        </svg>
      </span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useSiteContent } from '~/composables/useSiteContent'

const { buildPath, locale } = useSiteContent()

const driveLabel = computed(() => {
  if (locale.value.code === 'fr') return 'Essai'
  if (locale.value.code === 'ar') return 'تجربة قيادة'
  return 'Test drive'
})

const serviceLabel = computed(() => {
  if (locale.value.code === 'fr') return 'Service'
  if (locale.value.code === 'ar') return 'الخدمة'
  return 'Service'
})
</script>

<style scoped>
.quick-actions {
  position: fixed;
  right: 22px;
  top: 50%;
  bottom: auto;
  transform: translateY(-10%);
  z-index: 65;
  display: grid;
  gap: 8px;
}

.quick-action {
  width: 50px;
  height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 10px;
  background: rgba(7, 10, 14, 0.88);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #fff;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(8px);
  transition:
    transform 0.24s cubic-bezier(0.22, 1, 0.36, 1),
    background-color 0.24s ease,
    border-color 0.24s ease;
}

.quick-action:hover {
  transform: translateY(-2px);
  background: rgba(11, 16, 21, 0.96);
  border-color: rgba(255, 255, 255, 0.18);
}

.quick-action__icon {
  width: 19px;
  height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.quick-action__icon svg {
  width: 100%;
  height: 100%;
}

@media (max-width: 1024px) {
  .desktop-only {
    display: none;
  }
}
</style>
