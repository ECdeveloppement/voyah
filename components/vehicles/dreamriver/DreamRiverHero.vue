<template>
  <section class="dream-river-hero">
    <div class="dream-river-hero-media">
      <img src="/voyah-resources/images/car/dreamriver/kv_1920.png" :alt="$t('pages.dream_river.hero.title')" />
    </div>
    <div class="dream-river-hero-overlay" />
    <div class="dream-river-hero-gradient" />

    <div class="dream-river-hero-content">
      <div class="container">
        <div class="dream-river-hero-shell">
          <div class="dream-river-hero-copy">
            <img src="/voyah-resources/images/car/car_logo/dreamriver.png" :alt="$t('pages.dream_river.hero.title')" class="dream-river-logo" />
            <p class="dream-river-eyebrow">{{ $t('pages.dream_river.hero.subtitle') }}</p>
            <h1 class="dream-river-title">{{ $t('pages.dream_river.hero.title') }}</h1>
            <p class="dream-river-summary">{{ $t('pages.dream_river.hero.description') }}</p>

            <div class="button-row dream-river-hero-actions">
              <BaseButton to="/book-drive.html" variant="primary">
                {{ $t('pages.dream_river.hero.ctaPrimary') }}
              </BaseButton>
              <BaseButton to="/store.html" variant="secondary">
                {{ $t('pages.dream_river.hero.ctaSecondary') }}
              </BaseButton>
            </div>
          </div>

          <aside class="dream-river-hero-meta">
            <p class="dream-river-hero-price">{{ $t('pages.dream_river.hero.price') }}</p>
            <div class="dream-river-hero-features">
              <span>{{ $t('pages.dream_river.sections.chapter_1.title') }}</span>
              <span>{{ $t('pages.dream_river.sections.chapter_2.title') }}</span>
              <span>{{ $t('pages.dream_river.sections.chapter_3.title') }}</span>
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
.dream-river-hero {
  position: relative;
  min-height: 88vh;
  overflow: hidden;
  color: #fff;
}

.dream-river-hero-media,
.dream-river-hero-media img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.dream-river-hero-media img {
  object-fit: cover;
  transform: scale(1.015);
  transform-origin: center;
  object-position: center 42%;
}

.dream-river-hero-overlay,
.dream-river-hero-gradient {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.dream-river-hero-overlay {
  background:
    linear-gradient(180deg, rgba(5, 8, 12, 0.16), rgba(5, 8, 12, 0.72)),
    linear-gradient(92deg, rgba(5, 8, 12, 0.66), rgba(5, 8, 12, 0.22) 52%, rgba(5, 8, 12, 0.56));
}

.dream-river-hero-gradient {
  background: radial-gradient(120% 80% at 78% 100%, rgba(2, 4, 8, 0.16), rgba(2, 4, 8, 0));
}

.dream-river-hero-content {
  position: relative;
  z-index: 1;
  min-height: 88vh;
  display: grid;
  align-items: end;
  padding: 118px 0 52px;
}

.dream-river-hero-shell {
  display: grid;
  grid-template-columns: minmax(0, 1.14fr) minmax(300px, 0.86fr);
  gap: 30px;
  align-items: end;
}

.dream-river-logo {
  display: block;
  width: min(320px, 56vw);
  margin-bottom: 16px;
}

.dream-river-eyebrow {
  margin: 0 0 12px;
  font-size: 0.82rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.78);
}

.dream-river-title {
  margin: 14px 0 0;
  font-size: clamp(2.6rem, 5vw, 5.4rem);
  line-height: 0.96;
}

.dream-river-summary {
  margin: 16px 0 0;
  max-width: 620px;
  color: rgba(236, 242, 247, 0.84);
  line-height: 1.78;
}

.dream-river-hero-actions {
  margin-top: 28px;
  gap: 12px;
}

.dream-river-hero-actions :deep(.base-button) {
  min-width: 168px;
  min-height: 46px;
  font-size: 0.92rem;
}

.dream-river-hero-actions :deep(.base-button.primary) {
  background: rgba(255, 255, 255, 0.94);
  border-color: rgba(255, 255, 255, 0.94);
  color: #101720;
}

.dream-river-hero-actions :deep(.base-button.primary:hover) {
  background: #ffffff;
  border-color: #ffffff;
}

.dream-river-hero-actions :deep(.base-button.secondary) {
  border-color: rgba(255, 255, 255, 0.36);
  background: transparent;
  color: #fff;
}

.dream-river-hero-actions :deep(.base-button.secondary:hover) {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.52);
}

.dream-river-hero-meta {
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

.dream-river-hero-price {
  margin: 0;
  color: rgba(255, 255, 255, 0.94);
  font-size: 1.08rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.dream-river-hero-features {
  display: grid;
  gap: 10px;
}

.dream-river-hero-features span {
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(235, 242, 247, 0.82);
  font-size: 0.9rem;
  line-height: 1.45;
}

@media (max-width: 1024px) {
  .dream-river-hero {
    min-height: 78vh;
  }
  .dream-river-hero-content {
    min-height: 78vh;
  }
  .dream-river-hero-shell {
    grid-template-columns: minmax(0, 1fr);
  }
  .dream-river-hero-meta {
    justify-self: start;
    width: min(420px, 100%);
  }
}

@media (max-width: 768px) {
  .dream-river-hero-content {
    padding: 108px 0 42px;
  }
  .dream-river-logo {
    width: min(250px, 70vw);
  }
  .dream-river-title {
    font-size: clamp(2.1rem, 9vw, 3.3rem);
  }
}
</style>
