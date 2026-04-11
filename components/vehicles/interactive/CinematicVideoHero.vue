<template>
  <div class="video-hero">
    <div class="video-wrapper">
      <video
        ref="vidRef"
        autoplay
        muted
        loop
        playsinline
        class="bg-video"
      >
        <source :src="videoSrc" type="video/mp4" />
        <!-- Fallback image if video fails to load or is unplayable -->
        <img :src="fallbackImage" alt="Hero Fallback" class="fallback-img" />
      </video>
      <div class="video-overlay">
        <div class="hero-content">
           <h1 class="fade-up-1">{{ title }}</h1>
           <p class="fade-up-2" v-if="subtitle">{{ subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  videoSrc: string
  fallbackImage: string
  title: string
  subtitle?: string
}>()
</script>

<style scoped>
.video-hero {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
.video-wrapper {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
}
.bg-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0; left: 0;
  z-index: 1;
}
.fallback-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.video-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 2;
  background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 100%);
  display: flex;
  align-items: flex-end;
  padding: 80px 5%;
}
.hero-content {
  color: #fff;
  max-width: 800px;
}
.hero-content h1 {
  font-family: var(--font-heading);
  font-size: 5rem;
  letter-spacing: 0.02em;
  margin-bottom: 20px;
  text-shadow: 0 4px 20px rgba(0,0,0,0.4);
}
.hero-content p {
  font-size: 1.5rem;
  opacity: 0.9;
  text-shadow: 0 2px 10px rgba(0,0,0,0.5);
}

.fade-up-1 {
  animation: fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.fade-up-2 {
  animation: fadeUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
  opacity: 0;
}
@keyframes fadeUp {
  0% { transform: translateY(40px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@media (max-width: 991px) {
  .hero-content h1 { font-size: 3rem; }
  .hero-content p { font-size: 1.2rem; }
}
</style>
