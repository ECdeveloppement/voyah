<template>
  <nav class="scroll-dots" :class="{ 'scroll-dots--rtl': currentLocale.dir === 'rtl' }">
    <div class="dots-container">
      <button
        v-for="dot in dots"
        :key="dot.id"
        type="button"
        :class="['dot-item', { active: activeId === dot.id }]"
        @click="scrollTo(dot.id)"
        :title="dot.label"
      >
        <span class="dot-inner" />
        <span v-if="activeId === dot.id" class="dot-label">{{ dot.label }}</span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { currentLocaleInfo } from '~/composables/useSiteContent'

const currentLocale = currentLocaleInfo()
const dots = ref<Array<{ id: string; label: string }>>([])
const activeId = ref<string | null>(null)
let observer: IntersectionObserver | null = null

const updateDots = () => {
  const sections = document.querySelectorAll('section[id], .page-hero[id]')
  dots.value = Array.from(sections).map((el) => {
    const title = el.querySelector('h1, h2')?.textContent?.trim() || el.id
    return {
      id: el.id,
      label: title.length > 20 ? title.slice(0, 20) + '...' : title
    }
  })
}

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const setupObserver = () => {
  if (observer) observer.disconnect()

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
        }
      })
    },
    {
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    }
  )

  document.querySelectorAll('section[id], .page-hero[id]').forEach((el) => {
    observer?.observe(el)
  })
}

onMounted(() => {
  updateDots()
  setupObserver()

  // Re-run if content changes (Nuxt hydration)
  const mutationObserver = new MutationObserver(() => {
    updateDots()
    setupObserver()
  })
  mutationObserver.observe(document.body, { childList: true, subtree: true })
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.scroll-dots {
  position: fixed;
  top: 50%;
  right: 48px;
  transform: translateY(-50%);
  z-index: 150;
  pointer-events: none;
}

.scroll-dots--rtl {
  right: auto;
  left: 48px;
}

.dots-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  pointer-events: auto;
}

.dot-item {
  position: relative;
  width: 12px;
  height: 12px;
  padding: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dot-inner {
  width: 6px;
  height: 6px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.dot-item:hover .dot-inner {
  background: rgba(255, 255, 255, 0.8);
  transform: scale(1.3);
}

.dot-item.active .dot-inner {
  background: #A68B5B;
  transform: scale(1.5);
  box-shadow: 0 0 0 3px rgba(6, 10, 14, 0.98), 0 0 0 4.5px #A68B5B;
}

.dot-label {
  position: absolute;
  right: 24px;
  color: #A68B5B;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(10px);
  animation: label-fade-in 0.4s forwards;
}

.scroll-dots--rtl .dot-label {
  right: auto;
  left: 24px;
  transform: translateX(-10px);
}

@keyframes dot-pulse {
  0% { box-shadow: 0 0 0 0 rgba(166, 139, 91, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(166, 139, 91, 0); }
  100% { box-shadow: 0 0 0 0 rgba(166, 139, 91, 0); }
}

@keyframes label-fade-in {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 1024px) {
  .scroll-dots {
    display: none; /* Hide on mobile to avoid clutter */
  }
}
</style>
