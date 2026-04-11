<template>
  <section class="titan-x8-hero" ref="heroRef">
    <div class="titan-x8-hero-media">
      <img ref="bgImgRef" src="/voyah-resources/images/car/titan_X8/1920/sc_1.jpg" :alt="$t('pages.titan_X8.hero.title')" />
    </div>
    <div class="titan-x8-hero-overlay" />
    <div class="titan-x8-hero-gradient" />

    <div class="titan-x8-hero-content">
      <div class="container">
        <div class="titan-x8-hero-shell">
          <div class="titan-x8-hero-copy">
            <img src="/voyah-resources/images/car/car_logo/titan_X8.png" :alt="$t('pages.titan_X8.hero.title')" class="titan-x8-logo animate-up" />
            <p class="titan-x8-eyebrow animate-up">{{ $t('pages.titan_X8.hero.subtitle') }}</p>
            <h1 class="titan-x8-title animate-up">{{ $t('pages.titan_X8.hero.title') }}</h1>
            <p class="titan-x8-summary animate-up">{{ $t('pages.titan_X8.hero.description') }}</p>

            <div class="button-row titan-x8-hero-actions animate-up">
              <BaseButton to="/book-drive.html" variant="primary">
                {{ $t('pages.titan_X8.hero.ctaPrimary') }}
              </BaseButton>
              <BaseButton to="/store.html" variant="secondary">
                {{ $t('pages.titan_X8.hero.ctaSecondary') }}
              </BaseButton>
            </div>
          </div>

          <aside class="titan-x8-hero-meta animate-up">
            <p class="titan-x8-hero-price">{{ $t('pages.titan_X8.hero.price') }}</p>
            <div class="titan-x8-hero-features">
              <span>{{ $t('pages.titan_X8.sections.performance.title') }}</span>
              <span>{{ $t('pages.titan_X8.sections.cockpit.title') }}</span>
              <span>{{ $t('pages.titan_X8.sections.safety.title') }}</span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import BaseButton from '~/components/common/BaseButton.vue'

const heroRef = ref<HTMLElement | null>(null)
const bgImgRef = ref<HTMLImageElement | null>(null)

onMounted(async () => {
  const { gsap } = await import('gsap')
  
  if (heroRef.value) {
    const els = heroRef.value.querySelectorAll('.animate-up')
    
    gsap.fromTo(bgImgRef.value, 
      { scale: 1.1, opacity: 0 },
      { scale: 1.0, opacity: 1, duration: 2, ease: 'power2.out' }
    )

    gsap.fromTo(els,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power2.inOut', delay: 0.5 }
    )
  }
})
</script>

<style scoped>
.titan-x8-hero {
  position: relative;
  min-height: 88vh;
  overflow: hidden;
  color: #fff;
}

.titan-x8-hero-media,
.titan-x8-hero-media img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.titan-x8-hero-media img {
  object-fit: cover;
  transform: scale(1.015);
  transform-origin: center;
  object-position: center 42%;
}

.titan-x8-hero-overlay,
.titan-x8-hero-gradient {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.titan-x8-hero-overlay {
  background:
    linear-gradient(180deg, rgba(5, 8, 12, 0.16), rgba(5, 8, 12, 0.72)),
    linear-gradient(92deg, rgba(5, 8, 12, 0.66), rgba(5, 8, 12, 0.22) 52%, rgba(5, 8, 12, 0.56));
}

.titan-x8-hero-gradient {
  background: radial-gradient(120% 80% at 78% 100%, rgba(2, 4, 8, 0.16), rgba(2, 4, 8, 0));
}

.titan-x8-hero-content {
  position: relative;
  z-index: 1;
  min-height: 88vh;
  display: grid;
  align-items: end;
  padding: 118px 0 52px;
}

.titan-x8-hero-shell {
  display: grid;
  grid-template-columns: minmax(0, 1.14fr) minmax(300px, 0.86fr);
  gap: 30px;
  align-items: end;
}

.titan-x8-logo {
  display: block;
  width: min(320px, 56vw);
  margin-bottom: 16px;
}

.titan-x8-eyebrow {
  margin: 0 0 12px;
  font-size: 0.82rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.78);
}

.titan-x8-title {
  margin: 14px 0 0;
  font-size: clamp(2.6rem, 5vw, 5.4rem);
  line-height: 0.96;
}

.titan-x8-summary {
  margin: 16px 0 0;
  max-width: 620px;
  color: rgba(236, 242, 247, 0.84);
  line-height: 1.78;
}

.titan-x8-hero-actions {
  margin-top: 28px;
  gap: 12px;
}

.titan-x8-hero-actions :deep(.base-button) {
  min-width: 168px;
  min-height: 46px;
  font-size: 0.92rem;
}

.titan-x8-hero-actions :deep(.base-button.primary) {
  background: rgba(255, 255, 255, 0.94);
  border-color: rgba(255, 255, 255, 0.94);
  color: #101720;
}

.titan-x8-hero-actions :deep(.base-button.primary:hover) {
  background: #ffffff;
  border-color: #ffffff;
}

.titan-x8-hero-actions :deep(.base-button.secondary) {
  border-color: rgba(255, 255, 255, 0.36);
  background: transparent;
  color: #fff;
}

.titan-x8-hero-actions :deep(.base-button.secondary:hover) {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.52);
}

.titan-x8-hero-meta {
  justify-self: end;
  align-self: end;
  width: min(360px, 100%);
  display: grid;
  gap: 16px;
  padding: 22px 24px;
  background: rgba(12, 18, 25, 0.42);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(20px);
}

.titan-x8-hero-price {
  margin: 0;
  color: rgba(255, 255, 255, 0.94);
  font-size: 1.08rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.titan-x8-hero-features {
  display: grid;
  gap: 10px;
}

.titan-x8-hero-features span {
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(235, 242, 247, 0.82);
  font-size: 0.9rem;
  line-height: 1.45;
}

@media (max-width: 1024px) {
  .titan-x8-hero {
    min-height: 78vh;
  }
  .titan-x8-hero-content {
    min-height: 78vh;
  }
  .titan-x8-hero-shell {
    grid-template-columns: minmax(0, 1fr);
  }
  .titan-x8-hero-meta {
    justify-self: start;
    width: min(420px, 100%);
  }
}

@media (max-width: 768px) {
  .titan-x8-hero-content {
    padding: 108px 0 42px;
  }
  .titan-x8-logo {
    width: min(250px, 70vw);
  }
  .titan-x8-title {
    font-size: clamp(2.1rem, 9vw, 3.3rem);
  }
}
</style>
