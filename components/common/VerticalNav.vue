<template>
  <nav class="vertical-nav" :class="{ 'vertical-nav--active': isActive }">
    <div class="vertical-nav-toggle" @click="toggleNav">
      <div class="vertical-nav-toggle-line"></div>
      <div class="vertical-nav-toggle-line"></div>
      <div class="vertical-nav-toggle-line"></div>
    </div>
    
    <div class="vertical-nav-panel">
      <div class="vertical-nav-header">
        <div class="vertical-nav-logo">
          <img src="/voyah-resources/images/car/car_logo/voyah.png" alt="Voyah" />
        </div>
        <button class="vertical-nav-close" @click="closeNav">×</button>
      </div>
      
      <div class="vertical-nav-content">
        <div class="vertical-nav-sections">
          <a
            v-for="section in sections"
            :key="section.id"
            :href="`#${section.id}`"
            :class="['vertical-nav-link', { active: activeSection === section.id }]"
            @click.prevent="scrollToSection(section.id)"
          >
            <span class="vertical-nav-link-number">{{ getSectionNumber(section.id) }}</span>
            <span class="vertical-nav-link-text">{{ section.label }}</span>
          </a>
        </div>
        
        <div class="vertical-nav-footer">
          <div class="vertical-nav-language">
            <button 
              v-for="locale in locales" 
              :key="locale.code"
              :class="['vertical-nav-lang-btn', { active: currentLocale === locale.code }]"
              @click="changeLanguage(locale.code)"
            >
              {{ locale.name }}
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="vertical-nav-overlay" @click="closeNav"></div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from '#app'

interface Section {
  id: string
  label: string
}

interface Locale {
  code: string
  name: string
}

const props = defineProps<{
  sections: Section[]
}>()

const route = useRoute()
const isActive = ref(false)
const activeSection = ref(props.sections[0]?.id || '')
let observer: IntersectionObserver | null = null

const locales: Locale[] = [
  { code: 'fr', name: 'FR' },
  { code: 'en', name: 'EN' },
  { code: 'ar', name: 'AR' }
]

const currentLocale = ref('fr')

const toggleNav = () => {
  isActive.value = !isActive.value
}

const closeNav = () => {
  isActive.value = false
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    closeNav()
  }
}

const getSectionNumber = (id: string): string => {
  const sectionMap: Record<string, string> = {
    'hero': '00',
    'chapter-1': '01',
    'chapter-2': '02',
    'chapter-3': '03',
    'chapter-4': '04',
    'chapter-5': '05',
    'section1': '01',
    'section2': '02',
    'section3': '03',
    'section4': '04',
    'section5': '05'
  }
  return sectionMap[id] || id
}

const changeLanguage = (code: string) => {
  currentLocale.value = code
  // Ici vous pouvez ajouter la logique pour changer la langue réelle
  console.log('Language changed to:', code)
}

const setupIntersectionObserver = () => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    }
  )

  // Observer toutes les sections
  props.sections.forEach((section) => {
    const element = document.getElementById(section.id)
    if (element) {
      observer?.observe(element)
    }
  })
}

onMounted(() => {
  setupIntersectionObserver()
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.vertical-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  pointer-events: none;
}

.vertical-nav--active {
  pointer-events: auto;
}

.vertical-nav-toggle {
  position: fixed;
  top: 24px;
  left: 24px;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  z-index: 1001;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.vertical-nav-toggle:hover {
  background: #fff;
  transform: scale(1.05);
}

.vertical-nav-toggle-line {
  width: 24px;
  height: 2px;
  background: #101720;
  border-radius: 1px;
  transition: all 0.3s ease;
}

.vertical-nav--active .vertical-nav-toggle-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.vertical-nav--active .vertical-nav-toggle-line:nth-child(2) {
  opacity: 0;
}

.vertical-nav--active .vertical-nav-toggle-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

.vertical-nav-panel {
  position: fixed;
  top: 0;
  left: -320px;
  width: 320px;
  height: 100%;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  transition: left 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  z-index: 1000;
  display: flex;
  flex-direction: column;
}

.vertical-nav--active .vertical-nav-panel {
  left: 0;
}

.vertical-nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.vertical-nav-logo img {
  height: 32px;
  width: auto;
}

.vertical-nav-close {
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  border-radius: 50%;
  font-size: 24px;
  color: #101720;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.vertical-nav-close:hover {
  background: rgba(0, 0, 0, 0.05);
}

.vertical-nav-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 24px;
  overflow-y: auto;
}

.vertical-nav-sections {
  flex: 1;
}

.vertical-nav-link {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
  text-decoration: none;
  color: #34404d;
  font-size: 0.92rem;
  font-weight: 500;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
}

.vertical-nav-link:last-child {
  border-bottom: none;
}

.vertical-nav-link:hover {
  color: #101720;
  padding-left: 8px;
}

.vertical-nav-link.active {
  color: #b31d22;
}

.vertical-nav-link.active::before {
  content: '';
  position: absolute;
  left: -24px;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 24px;
  background: #b31d22;
  border-radius: 2px;
}

.vertical-nav-link-number {
  font-size: 0.84rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.4);
  min-width: 32px;
  text-align: center;
}

.vertical-nav-link.active .vertical-nav-link-number {
  color: #b31d22;
}

.vertical-nav-link-text {
  flex: 1;
}

.vertical-nav-footer {
  margin-top: auto;
  padding-top: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.vertical-nav-language {
  display: flex;
  gap: 8px;
}

.vertical-nav-lang-btn {
  padding: 8px 16px;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  font-size: 0.84rem;
  color: #34404d;
  cursor: pointer;
  transition: all 0.3s ease;
}

.vertical-nav-lang-btn:hover {
  background: rgba(0, 0, 0, 0.05);
}

.vertical-nav-lang-btn.active {
  background: #b31d22;
  color: #fff;
  border-color: #b31d22;
}

.vertical-nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 999;
}

.vertical-nav--active .vertical-nav-overlay {
  opacity: 1;
  visibility: visible;
}

/* Responsive */
@media (max-width: 768px) {
  .vertical-nav-panel {
    width: 280px;
    left: -280px;
  }
  
  .vertical-nav-toggle {
    top: 16px;
    left: 16px;
    width: 40px;
    height: 40px;
  }
  
  .vertical-nav-toggle-line {
    width: 20px;
  }
  
  .vertical-nav-link {
    font-size: 0.88rem;
    padding: 14px 0;
  }
  
  .vertical-nav-link.active::before {
    left: -20px;
    width: 3px;
    height: 20px;
  }
}

/* RTL Support */
:global(.is-rtl) .vertical-nav {
  left: auto;
  right: 0;
}

:global(.is-rtl) .vertical-nav-toggle {
  left: auto;
  right: 24px;
}

:global(.is-rtl) .vertical-nav-panel {
  left: auto;
  right: -320px;
  border-right: none;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
}

:global(.is-rtl) .vertical-nav--active .vertical-nav-panel {
  right: 0;
}

:global(.is-rtl) .vertical-nav-link.active::before {
  left: auto;
  right: -24px;
}

:global(.is-rtl) .vertical-nav-link:hover {
  padding-left: 0;
  padding-right: 8px;
}

@media (max-width: 768px) {
  :global(.is-rtl) .vertical-nav-toggle {
    right: 16px;
  }
  
  :global(.is-rtl) .vertical-nav-panel {
    width: 280px;
    right: -280px;
  }
  
  :global(.is-rtl) .vertical-nav-link.active::before {
    right: -20px;
  }
}
</style>
