<template>
  <aside
    class="app-sidebar"
    :class="{
      'app-sidebar--rtl': currentLocale.dir === 'rtl',
      'app-sidebar--expanded': expanded
    }"
    @mouseenter="expanded = true"
    @mouseleave="expanded = false"
  >
    <ul class="sidebar-list">
      <!-- Test Drive -->
      <li class="sidebar-item group">
        <NuxtLink :to="buildPath('book-drive.html')" class="sidebar-link" :aria-label="$t('global.sidebar.testDrive')">
          <div class="sidebar-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M4 18h16M4 14h16M6 10l2-4h8l2 4M3 10h18M5 14v4M19 14v4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <span class="sidebar-tooltip">{{ $t('global.sidebar.testDrive') }}</span>
        </NuxtLink>
      </li>

      <!-- Consultation -->
      <li class="sidebar-item group" @mouseenter="showConsultation = true" @mouseleave="showConsultation = false">
        <button type="button" class="sidebar-link" :aria-label="$t('global.sidebar.consultation')">
          <div class="sidebar-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.06 12.06 0 00.57 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.06 12.06 0 002.81.57A2 2 0 0122 16.92z" />
            </svg>
          </div>
          <span class="sidebar-tooltip">{{ $t('global.sidebar.consultation') }}</span>
        </button>

        <Transition name="panel-slide">
          <div v-if="showConsultation" class="sidebar-panel sidebar-panel--consult">
            <div class="panel-inner">
              <h4 class="panel-title">{{ $t('global.sidebar.hotlineTitle') }}</h4>
              <p class="panel-hotline">400-888-8488</p>
              <p class="panel-hours">{{ $t('global.sidebar.hotlineHours') }}</p>
            </div>
          </div>
        </Transition>
      </li>

      <!-- App QR -->
      <li class="sidebar-item group" @mouseenter="showApp = true" @mouseleave="showApp = false">
        <button type="button" class="sidebar-link" :aria-label="$t('global.sidebar.app')">
          <div class="sidebar-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <path d="M7 7h4v4H7zM7 13h4v4H7zM13 7h4v4h-4zM13 13h1v1h-1zM16 13h1v1h-1zM14 14h1v1h-1zM13 15h1v1h-1zM16 15h1v1h-1zM15 16h1v1h-1zM13 17h1v1h-1zM15 17h2v1h-2z" />
            </svg>
          </div>
          <span class="sidebar-tooltip">{{ $t('global.sidebar.app') }}</span>
        </button>

        <Transition name="panel-slide">
          <div v-if="showApp" class="sidebar-panel sidebar-panel--qr">
            <div class="panel-inner">
              <div class="panel-qr-box">
                <img src="/voyah-resources/images/lifestyle/app_qr.png" alt="QR Code" class="panel-qr" @error="handleImgError" />
              </div>
              <p class="panel-copy">{{ $t('global.footer.appEyebrow') }}</p>
            </div>
          </div>
        </Transition>
      </li>

      <!-- Feedback -->
      <li class="sidebar-item group">
        <button type="button" class="sidebar-link" :aria-label="$t('global.sidebar.feedback')">
          <div class="sidebar-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
          </div>
          <span class="sidebar-tooltip">{{ $t('global.sidebar.feedback') }}</span>
        </button>
      </li>
    </ul>

    <!-- Back to top button (optional, but good for fidelity) -->
    <button v-show="scrolled" class="sidebar-top" @click="scrollToTop" aria-label="Back to top">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  </aside>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { currentLocaleInfo, useSiteContent } from '~/composables/useSiteContent'

const currentLocale = currentLocaleInfo()
const { buildPath } = useSiteContent()

const expanded = ref(false)
const showConsultation = ref(false)
const showApp = ref(false)
const scrolled = ref(false)

const handleImgError = (e: Event) => {
  const img = e.target as HTMLImageElement
  img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.voyah.com.cn'
}

const updateScroll = () => {
  scrolled.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScroll)
})
</script>

<style scoped>
.app-sidebar {
  position: fixed;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 12px;
  pointer-events: none;
}

.app-sidebar--rtl {
  right: auto;
  left: 24px;
}

.sidebar-list {
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  padding: 0;
  margin: 0;
  list-style: none;
  pointer-events: auto;
  overflow: visible;
}

.sidebar-item {
  position: relative;
  background: rgba(7, 10, 14, 0.4);
}

.sidebar-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  color: #fff;
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  text-decoration: none;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.sidebar-item:hover .sidebar-link {
  background: #A68B5B;
  color: #fff;
}

.sidebar-icon {
  width: 22px;
  height: 22px;
}

.sidebar-tooltip {
  position: absolute;
  right: calc(100% + 12px);
  top: 50%;
  transform: translateY(-50%) translateX(10px);
  background: rgba(7, 10, 14, 0.9);
  color: #fff;
  padding: 6px 12px;
  font-size: 0.82rem;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.app-sidebar--rtl .sidebar-tooltip {
  right: auto;
  left: calc(100% + 12px);
  transform: translateY(-50%) translateX(-10px);
}

.sidebar-item:hover .sidebar-tooltip {
  opacity: 1;
  transform: translateY(-50%) translateX(0);
}

/* Panels */
.sidebar-panel {
  position: absolute;
  right: calc(100% + 16px);
  bottom: -1px;
  width: 240px;
  background: #fff;
  color: #101720;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.24);
  pointer-events: auto;
}

.app-sidebar--rtl .sidebar-panel {
  right: auto;
  left: calc(100% + 16px);
}

.panel-inner {
  padding: 24px;
}

.panel-title {
  margin: 0 0 12px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #101720;
}

.panel-hotline {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #A68B5B;
}

.panel-hours {
  margin: 4px 0 0;
  font-size: 0.78rem;
  color: #5f6d7a;
}

.panel-qr-box {
  background: #f7f8fa;
  padding: 16px;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
}

.panel-qr {
  width: 140px;
  height: 140px;
}

.panel-copy {
  margin: 0;
  font-size: 0.82rem;
  text-align: center;
  line-height: 1.4;
  color: #2f3943;
}

/* Back to Top */
.sidebar-top {
  margin-top: 12px;
  width: 52px;
  height: 52px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.sidebar-top:hover {
  background: #A68B5B;
  border-color: #A68B5B;
}

.sidebar-top svg {
  width: 20px;
  height: 20px;
}

/* Transitions */
.panel-slide-enter-active,
.panel-slide-leave-active {
  transition: all 0.36s cubic-bezier(0.22, 1, 0.36, 1);
}

.panel-slide-enter-from,
.panel-slide-leave-to {
  opacity: 0;
  transform: translateX(12px);
}

.app-sidebar--rtl .panel-slide-enter-from,
.app-sidebar--rtl .panel-slide-leave-to {
  transform: translateX(-12px);
}
</style>
