<template>
  <section class="home-hero-video">
    <video
      class="home-hero-video__media"
      :poster="poster"
      muted
      autoplay
      playsinline
      loop
      preload="metadata"
    >
      <source :src="video" type="video/mp4" />
    </video>
    <div class="home-hero-video__top" />
    <div class="home-hero-video__bottom" />
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{ video?: string; poster?: string }>(),
  { video: '/assets/qatar/videos/main-video2-compress.mp4', poster: '/assets/qatar/images/main-vover2.webp' }
)
</script>

<style scoped>
.home-hero-video {
  position: relative;
  height: 24rem;
  overflow: hidden;
  background: #000000;
}

.home-hero-video__media {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.home-hero-video__top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 20rem;
  background: linear-gradient(180deg, #18181b, rgba(24, 24, 27, 0));
  pointer-events: none;
}

.home-hero-video__bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 9.375rem;
  background: linear-gradient(180deg, rgba(24, 24, 27, 0), #18181b);
  pointer-events: none;
  display: none;
}

@media (min-width: 1024px) {
  .home-hero-video {
    height: 700px;
  }

  .home-hero-video__top {
    height: 21.875rem;
  }

  .home-hero-video__bottom {
    display: block;
    height: 9.375rem;
  }
}

@media (min-width: 1280px) {
  .home-hero-video {
    /* La barre de navigation opaque de 94px est posée au-dessus de la vidéo sur le site de référence. */
    height: calc(100vh - 94px);
  }
}
</style>
