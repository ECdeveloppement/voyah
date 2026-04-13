<template>
  <section
    :class="['page-hero', `page-hero--${align}`, { 'page-hero--compact': compact }, variant ? `page-hero--${variant}` : null]"
  >
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
import gsap from 'gsap'

const props = withDefaults(
  defineProps<{
    eyebrow: string
    title: string
    summary: string
    image: string
    video?: string
    logo?: string
    align?: 'start' | 'center'
    compact?: boolean
    variant?: string
  }>(),
  {
    align: 'start',
    compact: false,
    variant: undefined
  }
)

const heroRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!heroRef.value) return

  const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.1 } })

  tl.fromTo(
    '.page-hero-media',
    { scale: 1.12, autoAlpha: 0 },
    { scale: 1, autoAlpha: 1, duration: 1.8 }
  )

  tl.fromTo(
    ['.page-logo', '.eyebrow', '.page-title', '.page-summary', '.page-hero-actions'],
    { y: 30, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, stagger: 0.12, duration: 0.95 },
    '-=1.2'
  )

  tl.fromTo(
    '.page-hero-meta',
    { x: 20, autoAlpha: 0 },
    { x: 0, autoAlpha: 1, duration: 1 },
    '-=0.6'
  )
})
</script>

<style scoped>
.page-hero {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  color: #fff;
}

.page-hero-media,
.page-hero-media img,
.page-hero-media video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.page-hero-media img,
.page-hero-media video {
  object-fit: cover;
  transform: scale(1.015);
  transform-origin: center;
  object-position: center center;
}

.page-hero-overlay,
.page-hero-gradient {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.page-hero-overlay {
  background:
    linear-gradient(180deg, rgba(5, 8, 12, 0.18), rgba(5, 8, 12, 0.7)),
    linear-gradient(92deg, rgba(5, 8, 12, 0.64), rgba(5, 8, 12, 0.2) 48%, rgba(5, 8, 12, 0.52));
}

.page-hero-gradient {
  background: radial-gradient(120% 80% at 78% 100%, rgba(2, 4, 8, 0.16), rgba(2, 4, 8, 0));
}

.page-hero--passion-L .page-hero-media img,
.page-hero--passion-L .page-hero-media video,
.page-hero--passion .page-hero-media img,
.page-hero--passion .page-hero-media video {
  object-position: center 42%;
}

.page-hero--titan .page-hero-media img,
.page-hero--titan .page-hero-media video,
.page-hero--titan_blackedition .page-hero-media img,
.page-hero--titan_blackedition .page-hero-media video,
.page-hero--titan_X8 .page-hero-media img,
.page-hero--titan_X8 .page-hero-media video {
  object-position: center 46%;
}

.page-hero--freeplus .page-hero-media img,
.page-hero--freeplus .page-hero-media video,
.page-hero--free .page-hero-media img,
.page-hero--free .page-hero-media video,
.page-hero--newCourage .page-hero-media img,
.page-hero--newCourage .page-hero-media video,
.page-hero--courage .page-hero-media img,
.page-hero--courage .page-hero-media video {
  object-position: center 44%;
}

.page-hero--newDreamer26 .page-hero-media img,
.page-hero--newDreamer26 .page-hero-media video,
.page-hero--dreamer-champion .page-hero-media img,
.page-hero--dreamer-champion .page-hero-media video,
.page-hero--newDreamer .page-hero-media img,
.page-hero--newDreamer .page-hero-media video,
.page-hero--dreamriver .page-hero-media img,
.page-hero--dreamriver .page-hero-media video,
.page-hero--dreamer .page-hero-media img,
.page-hero--dreamer .page-hero-media video {
  object-position: center 40%;
}

.page-hero--passion-L .page-hero-overlay,
.page-hero--passion .page-hero-overlay {
  background:
    linear-gradient(180deg, rgba(5, 8, 12, 0.16), rgba(5, 8, 12, 0.72)),
    linear-gradient(92deg, rgba(5, 8, 12, 0.66), rgba(5, 8, 12, 0.22) 52%, rgba(5, 8, 12, 0.56));
}

.page-hero--titan .page-hero-overlay,
.page-hero--titan_blackedition .page-hero-overlay,
.page-hero--titan_X8 .page-hero-overlay {
  background:
    linear-gradient(180deg, rgba(5, 8, 12, 0.22), rgba(5, 8, 12, 0.76)),
    linear-gradient(90deg, rgba(5, 8, 12, 0.62), rgba(5, 8, 12, 0.2) 50%, rgba(5, 8, 12, 0.6));
}

.page-hero--freeplus .page-hero-overlay,
.page-hero--free .page-hero-overlay,
.page-hero--newCourage .page-hero-overlay,
.page-hero--courage .page-hero-overlay {
  background:
    linear-gradient(180deg, rgba(5, 8, 12, 0.2), rgba(5, 8, 12, 0.72)),
    linear-gradient(90deg, rgba(5, 8, 12, 0.58), rgba(5, 8, 12, 0.16) 50%, rgba(5, 8, 12, 0.52));
}

.page-hero--newDreamer26 .page-hero-overlay,
.page-hero--dreamer-champion .page-hero-overlay,
.page-hero--newDreamer .page-hero-overlay,
.page-hero--dreamriver .page-hero-overlay,
.page-hero--dreamer .page-hero-overlay {
  background:
    linear-gradient(180deg, rgba(5, 8, 12, 0.18), rgba(5, 8, 12, 0.74)),
    linear-gradient(88deg, rgba(5, 8, 12, 0.62), rgba(5, 8, 12, 0.18) 48%, rgba(5, 8, 12, 0.56));
}

.page-hero-content {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: grid;
  align-items: end;
  padding: 120px 0 56px;
}

.page-hero-shell {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
  gap: 34px;
  align-items: end;
}

.page-hero--dreamer .page-hero-shell,
.page-hero--newDreamer .page-hero-shell,
.page-hero--newDreamer26 .page-hero-shell,
.page-hero--dreamer-champion .page-hero-shell,
.page-hero--dreamriver .page-hero-shell {
  grid-template-columns: minmax(0, 1.12fr) minmax(300px, 0.88fr);
}

.page-logo {
  display: block;
  width: min(300px, 50vw);
  margin-bottom: 18px;
}

.eyebrow {
  margin: 0;
  font-size: 0.82rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(245, 248, 250, 0.84);
}

.page-title {
  margin: 14px 0 0;
  font-size: clamp(2.6rem, 5vw, 5.2rem);
  line-height: 0.95;
  letter-spacing: 0.01em;
}

.page-summary {
  margin: 18px 0 0;
  max-width: 660px;
  color: rgba(240, 245, 248, 0.84);
  line-height: 1.78;
}

.page-hero-actions {
  margin-top: 30px;
}

.page-hero-meta {
  justify-self: end;
  width: min(360px, 100%);
}

@media (max-width: 1100px) {
  .page-hero-shell {
    grid-template-columns: minmax(0, 1fr);
  }

  .page-hero-meta {
    justify-self: start;
  }
}

@media (max-width: 768px) {
  .page-hero-content {
    padding: 108px 0 44px;
  }

  .page-logo {
    width: min(240px, 68vw);
  }

  .page-title {
    font-size: clamp(2.05rem, 9vw, 3.5rem);
  }

  .page-summary {
    line-height: 1.72;
  }
}
</style>
