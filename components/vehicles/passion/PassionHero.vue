<template>
  <section class="passion-hero">
    <div class="passion-hero-media">
      <img src="/voyah-resources/images/car/passion/1920/fl01.jpg" :alt="$t('pages.passion.hero.title')" />
    </div>
    <div class="passion-hero-overlay" />
    <div class="passion-hero-gradient" />

    <div class="passion-hero-content">
      <div class="container">
        <div class="passion-hero-shell">
          <div class="passion-hero-copy">
            <img src="/voyah-resources/images/car/car_logo/passion.png" :alt="$t('pages.passion.hero.title')" class="passion-logo" />
            <p class="passion-eyebrow">{{ $t('pages.passion.hero.subtitle') }}</p>
            <h1 class="passion-title">{{ $t('pages.passion.hero.title') }}</h1>
            <p class="passion-summary">{{ $t('pages.passion.hero.description') }}</p>

            <div class="button-row passion-hero-actions">
              <BaseButton to="/book-drive.html" variant="primary">
                {{ $t('pages.passion.hero.ctaPrimary') }}
              </BaseButton>
              <BaseButton to="/store.html" variant="secondary">
                {{ $t('pages.passion.hero.ctaSecondary') }}
              </BaseButton>
            </div>
          </div>

          <aside class="passion-hero-meta">
            <p class="passion-hero-price">{{ $t('pages.passion.hero.price') }}</p>
            <div class="passion-hero-features">
              <span>{{ $t('pages.passion.sections.chapter_1.title') }}</span>
              <span>{{ $t('pages.passion.sections.chapter_2.title') }}</span>
              <span>{{ $t('pages.passion.sections.chapter_3.title') }}</span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '~/components/common/BaseButton.vue'
</script>

<style scoped>
.passion-hero {
  position: relative;
  min-height: 88vh;
  overflow: hidden;
  color: #fff;
}

.passion-hero-media,
.passion-hero-media img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.passion-hero-media img {
  object-fit: cover;
  transform: scale(1.015);
  transform-origin: center;
  object-position: center 42%;
}

.passion-hero-overlay,
.passion-hero-gradient {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.passion-hero-overlay {
  background:
    linear-gradient(180deg, rgba(5, 8, 12, 0.16), rgba(5, 8, 12, 0.72)),
    linear-gradient(92deg, rgba(5, 8, 12, 0.66), rgba(5, 8, 12, 0.22) 52%, rgba(5, 8, 12, 0.56));
}

.passion-hero-gradient {
  background: radial-gradient(120% 80% at 78% 100%, rgba(2, 4, 8, 0.16), rgba(2, 4, 8, 0));
}

.passion-hero-content {
  position: relative;
  z-index: 1;
  min-height: 88vh;
  display: grid;
  align-items: end;
  padding: 118px 0 52px;
}

.passion-hero-shell {
  display: grid;
  grid-template-columns: minmax(0, 1.14fr) minmax(300px, 0.86fr);
  gap: 30px;
  align-items: end;
}

.passion-logo {
  display: block;
  width: min(320px, 56vw);
  margin-bottom: 16px;
}

.passion-eyebrow {
  margin: 0 0 12px;
  font-size: 0.82rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.78);
}

.passion-title {
  margin: 14px 0 0;
  font-size: clamp(2.6rem, 5vw, 5.4rem);
  line-height: 0.96;
}

.passion-summary {
  margin: 16px 0 0;
  max-width: 620px;
  color: rgba(236, 242, 247, 0.84);
  line-height: 1.78;
}

.passion-hero-actions {
  margin-top: 28px;
  gap: 12px;
}

.passion-hero-actions :deep(.base-button) {
  min-width: 168px;
  min-height: 46px;
  font-size: 0.92rem;
}

.passion-hero-actions :deep(.base-button.primary) {
  background: rgba(255, 255, 255, 0.94);
  border-color: rgba(255, 255, 255, 0.94);
  color: #101720;
}

.passion-hero-actions :deep(.base-button.primary:hover) {
  background: #ffffff;
  border-color: #ffffff;
}

.passion-hero-actions :deep(.base-button.secondary) {
  border-color: rgba(255, 255, 255, 0.36);
  background: transparent;
  color: #fff;
}

.passion-hero-actions :deep(.base-button.secondary:hover) {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.52);
}

.passion-hero-meta {
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

.passion-hero-price {
  margin: 0;
  color: rgba(255, 255, 255, 0.94);
  font-size: 1.08rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.passion-hero-features {
  display: grid;
  gap: 10px;
}

.passion-hero-features span {
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(235, 242, 247, 0.82);
  font-size: 0.9rem;
  line-height: 1.45;
}

@media (max-width: 1024px) {
  .passion-hero {
    min-height: 78vh;
  }
  .passion-hero-content {
    min-height: 78vh;
  }
  .passion-hero-shell {
    grid-template-columns: minmax(0, 1fr);
  }
  .passion-hero-meta {
    justify-self: start;
    width: min(420px, 100%);
  }
}

@media (max-width: 768px) {
  .passion-hero-content {
    padding: 108px 0 42px;
  }
  .passion-logo {
    width: min(250px, 70vw);
  }
  .passion-title {
    font-size: clamp(2.1rem, 9vw, 3.3rem);
  }
}
</style>
