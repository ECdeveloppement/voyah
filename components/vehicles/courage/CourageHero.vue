<template>
  <section class="courage-hero">
    <div class="courage-hero-media">
      <img src="/voyah-resources/images/car/courage/1920/h37_pc01_0001.jpg" :alt="$t('pages.courage.hero.title')" />
    </div>
    <div class="courage-hero-overlay" />
    <div class="courage-hero-gradient" />

    <div class="courage-hero-content">
      <div class="container">
        <div class="courage-hero-shell">
          <div class="courage-hero-copy">
            <img src="/voyah-resources/images/car/car_logo/courage.png" :alt="$t('pages.courage.hero.title')" class="courage-logo" />
            <p class="courage-eyebrow">{{ $t('pages.courage.hero.subtitle') }}</p>
            <h1 class="courage-title">{{ $t('pages.courage.hero.title') }}</h1>
            <p class="courage-summary">{{ $t('pages.courage.hero.description') }}</p>

            <div class="button-row courage-hero-actions">
              <BaseButton to="/book-drive.html" variant="primary">
                {{ $t('pages.courage.hero.ctaPrimary') }}
              </BaseButton>
              <BaseButton to="/store.html" variant="secondary">
                {{ $t('pages.courage.hero.ctaSecondary') }}
              </BaseButton>
            </div>
          </div>

          <aside class="courage-hero-meta">
            <p class="courage-hero-price">{{ $t('pages.courage.hero.price') }}</p>
            <div class="courage-hero-features">
              <span>{{ $t('pages.courage.sections.chapter_1.title') }}</span>
              <span>{{ $t('pages.courage.sections.chapter_2.title') }}</span>
              <span>{{ $t('pages.courage.sections.chapter_3.title') }}</span>
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
.courage-hero {
  position: relative;
  min-height: 88vh;
  overflow: hidden;
  color: #fff;
}

.courage-hero-media,
.courage-hero-media img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.courage-hero-media img {
  object-fit: cover;
  transform: scale(1.015);
  transform-origin: center;
  object-position: center 42%;
}

.courage-hero-overlay,
.courage-hero-gradient {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.courage-hero-overlay {
  background:
    linear-gradient(180deg, rgba(5, 8, 12, 0.16), rgba(5, 8, 12, 0.72)),
    linear-gradient(92deg, rgba(5, 8, 12, 0.66), rgba(5, 8, 12, 0.22) 52%, rgba(5, 8, 12, 0.56));
}

.courage-hero-gradient {
  background: radial-gradient(120% 80% at 78% 100%, rgba(2, 4, 8, 0.16), rgba(2, 4, 8, 0));
}

.courage-hero-content {
  position: relative;
  z-index: 1;
  min-height: 88vh;
  display: grid;
  align-items: end;
  padding: 118px 0 52px;
}

.courage-hero-shell {
  display: grid;
  grid-template-columns: minmax(0, 1.14fr) minmax(300px, 0.86fr);
  gap: 30px;
  align-items: end;
}

.courage-logo {
  display: block;
  width: min(320px, 56vw);
  margin-bottom: 16px;
}

.courage-eyebrow {
  margin: 0 0 12px;
  font-size: 0.82rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.78);
}

.courage-title {
  margin: 14px 0 0;
  font-size: clamp(2.6rem, 5vw, 5.4rem);
  line-height: 0.96;
}

.courage-summary {
  margin: 16px 0 0;
  max-width: 620px;
  color: rgba(236, 242, 247, 0.84);
  line-height: 1.78;
}

.courage-hero-actions {
  margin-top: 28px;
  gap: 12px;
}

.courage-hero-actions :deep(.base-button) {
  min-width: 168px;
  min-height: 46px;
  font-size: 0.92rem;
}

.courage-hero-actions :deep(.base-button.primary) {
  background: rgba(255, 255, 255, 0.94);
  border-color: rgba(255, 255, 255, 0.94);
  color: #101720;
}

.courage-hero-actions :deep(.base-button.primary:hover) {
  background: #ffffff;
  border-color: #ffffff;
}

.courage-hero-actions :deep(.base-button.secondary) {
  border-color: rgba(255, 255, 255, 0.36);
  background: transparent;
  color: #fff;
}

.courage-hero-actions :deep(.base-button.secondary:hover) {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.52);
}

.courage-hero-meta {
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

.courage-hero-price {
  margin: 0;
  color: rgba(255, 255, 255, 0.94);
  font-size: 1.08rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.courage-hero-features {
  display: grid;
  gap: 10px;
}

.courage-hero-features span {
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(235, 242, 247, 0.82);
  font-size: 0.9rem;
  line-height: 1.45;
}

@media (max-width: 1024px) {
  .courage-hero {
    min-height: 78vh;
  }
  .courage-hero-content {
    min-height: 78vh;
  }
  .courage-hero-shell {
    grid-template-columns: minmax(0, 1fr);
  }
  .courage-hero-meta {
    justify-self: start;
    width: min(420px, 100%);
  }
}

@media (max-width: 768px) {
  .courage-hero-content {
    padding: 108px 0 42px;
  }
  .courage-logo {
    width: min(250px, 70vw);
  }
  .courage-title {
    font-size: clamp(2.1rem, 9vw, 3.3rem);
  }
}
</style>
