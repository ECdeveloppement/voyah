<template>
  <section class="dreamer-champion-hero">
    <div class="dreamer-champion-hero-media">
      <img src="/voyah-resources/images/car/dreamer-champion/kv_0408_1920.jpg" :alt="$t('pages.dreamer_champion.hero.title')" />
    </div>
    <div class="dreamer-champion-hero-overlay" />
    <div class="dreamer-champion-hero-gradient" />

    <div class="dreamer-champion-hero-content">
      <div class="container">
        <div class="dreamer-champion-hero-shell">
          <div class="dreamer-champion-hero-copy">
            <img src="/voyah-resources/images/car/car_logo/dreamer-champion.png" :alt="$t('pages.dreamer_champion.hero.title')" class="dreamer-champion-logo" />
            <p class="dreamer-champion-eyebrow">{{ $t('pages.dreamer_champion.hero.subtitle') }}</p>
            <h1 class="dreamer-champion-title">{{ $t('pages.dreamer_champion.hero.title') }}</h1>
            <p class="dreamer-champion-summary">{{ $t('pages.dreamer_champion.hero.description') }}</p>

            <div class="button-row dreamer-champion-hero-actions">
              <BaseButton to="/book-drive.html" variant="primary">
                {{ $t('pages.dreamer_champion.hero.ctaPrimary') }}
              </BaseButton>
              <BaseButton to="/store.html" variant="secondary">
                {{ $t('pages.dreamer_champion.hero.ctaSecondary') }}
              </BaseButton>
            </div>
          </div>

          <aside class="dreamer-champion-hero-meta">
            <p class="dreamer-champion-hero-price">{{ $t('pages.dreamer_champion.hero.price') }}</p>
            <div class="dreamer-champion-hero-features">
              <span>{{ $t('pages.dreamer_champion.sections.chapter_1.title') }}</span>
              <span>{{ $t('pages.dreamer_champion.sections.chapter_2.title') }}</span>
              <span>{{ $t('pages.dreamer_champion.sections.chapter_3.title') }}</span>
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
.dreamer-champion-hero {
  position: relative;
  min-height: 88vh;
  overflow: hidden;
  color: #fff;
}

.dreamer-champion-hero-media,
.dreamer-champion-hero-media img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.dreamer-champion-hero-media img {
  object-fit: cover;
  transform: scale(1.015);
  transform-origin: center;
  object-position: center 42%;
}

.dreamer-champion-hero-overlay,
.dreamer-champion-hero-gradient {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.dreamer-champion-hero-overlay {
  background:
    linear-gradient(180deg, rgba(5, 8, 12, 0.16), rgba(5, 8, 12, 0.72)),
    linear-gradient(92deg, rgba(5, 8, 12, 0.66), rgba(5, 8, 12, 0.22) 52%, rgba(5, 8, 12, 0.56));
}

.dreamer-champion-hero-gradient {
  background: radial-gradient(120% 80% at 78% 100%, rgba(2, 4, 8, 0.16), rgba(2, 4, 8, 0));
}

.dreamer-champion-hero-content {
  position: relative;
  z-index: 1;
  min-height: 88vh;
  display: grid;
  align-items: end;
  padding: 118px 0 52px;
}

.dreamer-champion-hero-shell {
  display: grid;
  grid-template-columns: minmax(0, 1.14fr) minmax(300px, 0.86fr);
  gap: 30px;
  align-items: end;
}

.dreamer-champion-logo {
  display: block;
  width: min(320px, 56vw);
  margin-bottom: 16px;
}

.dreamer-champion-eyebrow {
  margin: 0 0 12px;
  font-size: 0.82rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.78);
}

.dreamer-champion-title {
  margin: 14px 0 0;
  font-size: clamp(2.6rem, 5vw, 5.4rem);
  line-height: 0.96;
}

.dreamer-champion-summary {
  margin: 16px 0 0;
  max-width: 620px;
  color: rgba(236, 242, 247, 0.84);
  line-height: 1.78;
}

.dreamer-champion-hero-actions {
  margin-top: 28px;
  gap: 12px;
}

.dreamer-champion-hero-actions :deep(.base-button) {
  min-width: 168px;
  min-height: 46px;
  font-size: 0.92rem;
}

.dreamer-champion-hero-actions :deep(.base-button.primary) {
  background: rgba(255, 255, 255, 0.94);
  border-color: rgba(255, 255, 255, 0.94);
  color: #101720;
}

.dreamer-champion-hero-actions :deep(.base-button.primary:hover) {
  background: #ffffff;
  border-color: #ffffff;
}

.dreamer-champion-hero-actions :deep(.base-button.secondary) {
  border-color: rgba(255, 255, 255, 0.36);
  background: transparent;
  color: #fff;
}

.dreamer-champion-hero-actions :deep(.base-button.secondary:hover) {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.52);
}

.dreamer-champion-hero-meta {
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

.dreamer-champion-hero-price {
  margin: 0;
  color: rgba(255, 255, 255, 0.94);
  font-size: 1.08rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.dreamer-champion-hero-features {
  display: grid;
  gap: 10px;
}

.dreamer-champion-hero-features span {
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(235, 242, 247, 0.82);
  font-size: 0.9rem;
  line-height: 1.45;
}

@media (max-width: 1024px) {
  .dreamer-champion-hero {
    min-height: 78vh;
  }
  .dreamer-champion-hero-content {
    min-height: 78vh;
  }
  .dreamer-champion-hero-shell {
    grid-template-columns: minmax(0, 1fr);
  }
  .dreamer-champion-hero-meta {
    justify-self: start;
    width: min(420px, 100%);
  }
}

@media (max-width: 768px) {
  .dreamer-champion-hero-content {
    padding: 108px 0 42px;
  }
  .dreamer-champion-logo {
    width: min(250px, 70vw);
  }
  .dreamer-champion-title {
    font-size: clamp(2.1rem, 9vw, 3.3rem);
  }
}
</style>
