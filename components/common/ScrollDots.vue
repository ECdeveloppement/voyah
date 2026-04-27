<template>
  <nav class="scroll-dots" :class="{ 'scroll-dots--rtl': currentLocale.dir === 'rtl' }">
    <div class="dots-container">
      <button
        v-for="(dot, index) in dots"
        :key="`${dot.id}-${index}`"
        type="button"
        :class="['dot-item', { active: activeId === dot.id }]"
        @click="scrollTo(dot.id)"
        :title="dot.label"      
      >
        <span class="dot-inner" />
        <span class="dot-label">{{ dot.label }}</span>
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
  dots.value = Array.from(sections)
    .filter((el) => {
      // Exclure le footer et autres éléments non désirés
      const excludeIds = ['footer', 'site-footer', 'contact', 'legal', 'privacy', 'terms']
      const excludeClasses = ['footer', 'site-footer', 'contact-section', 'legal-section', 'passion-page']
      
      // Vérifier si c'est la page Passion
      if (el.closest('.passion-page')) {
        return false
      }
      
      // Vérifier l'ID
      if (excludeIds.some(id => el.id.toLowerCase().includes(id))) {
        return false
      }
      
      // Vérifier les classes
      if (excludeClasses.some(cls => el.classList.contains(cls))) {
        return false
      }
      
      // Exclure les sections sans contenu significatif
      const hasContent = el.querySelector('h1, h2, h3, .title, .kv-content')
      if (!hasContent) {
        return false
      }
      
      return true
    })
    .map((el) => {
      const title = el.querySelector('h1, h2, h3, .title')?.textContent?.trim() || el.id
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

  // Appliquer le même filtrage que dans updateDots
  const sections = document.querySelectorAll('section[id], .page-hero[id]')
  const filteredSections = Array.from(sections).filter((el) => {
    const excludeIds = ['footer', 'site-footer', 'contact', 'legal', 'privacy', 'terms']
    const excludeClasses = ['footer', 'site-footer', 'contact-section', 'legal-section']
    
    // Vérifier si c'est la page Passion
    if (el.closest('.passion-page')) {
      return false
    }
    
    if (excludeIds.some(id => el.id.toLowerCase().includes(id))) {
      return false
    }
    
    if (excludeClasses.some(cls => el.classList.contains(cls))) {
      return false
    }
    
    const hasContent = el.querySelector('h1, h2, h3, .title, .kv-content')
    if (!hasContent) {
      return false
    }
    
    return true
  })

  filteredSections.forEach((el) => {
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
  left: 48px;
  transform: translateY(-50%);
  z-index: 150;
  pointer-events: none;
}

/* Hide scroll-dots only on homepage */
.voyah-homepage .scroll-dots {
  display: none;
}

.scroll-dots--rtl {
  left: auto;
  right: 48px;
}

.dots-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  pointer-events: auto;
}

.dot-item {
  position: relative;
  width: auto;
  height: 12px;
  padding: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
}

.dot-inner {
  width: 6px;
  height: 6px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  flex-shrink: 0;
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
  color: #A68B5B;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  white-space: nowrap;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.dot-item:hover .dot-label {
  opacity: 1;
}

.dot-item.active .dot-label {
  opacity: 1;
  font-weight: 700;
}

.scroll-dots--rtl .dot-item {
  flex-direction: row-reverse;
}

@media (max-width: 1024px) {
  .scroll-dots {
    display: none;
  }
}
</style>