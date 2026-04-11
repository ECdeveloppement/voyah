<template>
  <section class="new-dreamer26-hero">
    <div class="new-dreamer26-hero-media">
      <img src="/voyah-resources/images/car/newDreamer26/kv_1920.jpg" :alt="$t('pages.new_dreamer_26.hero.title')" />
    </div>
    <div class="new-dreamer26-hero-overlay" />
    <div class="new-dreamer26-hero-gradient" />

    <div class="new-dreamer26-hero-content">
      <div class="container">
        <div class="new-dreamer26-hero-shell">
          <div class="new-dreamer26-hero-copy">
            <img src="/voyah-resources/images/car/car_logo/newDreamer26.png" :alt="$t('pages.new_dreamer_26.hero.title')" class="new-dreamer26-logo" />
            <p class="new-dreamer26-eyebrow">{{ $t('pages.new_dreamer_26.hero.subtitle') }}</p>
            <h1 class="new-dreamer26-title">{{ $t('pages.new_dreamer_26.hero.title') }}</h1>
            <p class="new-dreamer26-summary">{{ $t('pages.new_dreamer_26.hero.description') }}</p>

            <div class="button-row new-dreamer26-hero-actions">
              <BaseButton to="/book-drive.html" variant="primary">
                {{ $t('pages.new_dreamer_26.hero.ctaPrimary') }}
              </BaseButton>
              <BaseButton to="/store.html" variant="secondary">
                {{ $t('pages.new_dreamer_26.hero.ctaSecondary') }}
              </BaseButton>
            </div>
          </div>

          <aside class="new-dreamer26-hero-meta">
            <p class="new-dreamer26-hero-price">{{ $t('pages.new_dreamer_26.hero.price') }}</p>
            <div class="new-dreamer26-hero-features">
              <span>{{ $t('pages.new_dreamer_26.sections.chapter_1.title') }}</span>
              <span>{{ $t('pages.new_dreamer_26.sections.chapter_2.title') }}</span>
              <span>{{ $t('pages.new_dreamer_26.sections.chapter_3.title') }}</span>
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
.new-dreamer26-hero {
  position: relative;
  min-height: 88vh;
  overflow: hidden;
  color: #fff;
}

.new-dreamer26-hero-media,
.new-dreamer26-hero-media img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.new-dreamer26-hero-media img {
  object-fit: cover;
  transform: scale(1.015);
  transform-origin: center;
  object-position: center 42%;
}

.new-dreamer26-hero-overlay,
.new-dreamer26-hero-gradient {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.new-dreamer26-hero-overlay {
  background:
    linear-gradient(180deg, rgba(5, 8, 12, 0.16), rgba(5, 8, 12, 0.72)),
    linear-gradient(92deg, rgba(5, 8, 12, 0.66), rgba(5, 8, 12, 0.22) 52%, rgba(5, 8, 12, 0.56));
}

.new-dreamer26-hero-gradient {
  background: radial-gradient(120% 80% at 78% 100%, rgba(2, 4, 8, 0.16), rgba(2, 4, 8, 0));
}

.new-dreamer26-hero-content {
  position: relative;
  z-index: 1;
  min-height: 88vh;
  display: grid;
  align-items: end;
  padding: 118px 0 52px;
}

.new-dreamer26-hero-shell {
  display: grid;
  grid-template-columns: minmax(0, 1.14fr) minmax(300px, 0.86fr);
  gap: 30px;
  align-items: end;
}

.new-dreamer26-logo {
  display: block;
  width: min(320px, 56vw);
  margin-bottom: 16px;
}

.new-dreamer26-eyebrow {
  margin: 0 0 12px;
  font-size: 0.82rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.78);
}

.new-dreamer26-title {
  margin: 14px 0 0;
  font-size: clamp(2.6rem, 5vw, 5.4rem);
  line-height: 0.96;
}

.new-dreamer26-summary {
  margin: 16px 0 0;
  max-width: 620px;
  color: rgba(236, 242, 247, 0.84);
  line-height: 1.78;
}

.new-dreamer26-hero-actions {
  margin-top: 28px;
  gap: 12px;
}

.new-dreamer26-hero-actions :deep(.base-button) {
  min-width: 168px;
  min-height: 46px;
  font-size: 0.92rem;
}

.new-dreamer26-hero-actions :deep(.base-button.primary) {
  background: rgba(255, 255, 255, 0.94);
  border-color: rgba(255, 255, 255, 0.94);
  color: #101720;
}

.new-dreamer26-hero-actions :deep(.base-button.primary:hover) {
  background: #ffffff;
  border-color: #ffffff;
}

.new-dreamer26-hero-actions :deep(.base-button.secondary) {
  border-color: rgba(255, 255, 255, 0.36);
  background: transparent;
  color: #fff;
}

.new-dreamer26-hero-actions :deep(.base-button.secondary:hover) {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.52);
}

.new-dreamer26-hero-meta {
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

.new-dreamer26-hero-price {
  margin: 0;
  color: rgba(255, 255, 255, 0.94);
  font-size: 1.08rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.new-dreamer26-hero-features {
  display: grid;
  gap: 10px;
}

.new-dreamer26-hero-features span {
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(235, 242, 247, 0.82);
  font-size: 0.9rem;
  line-height: 1.45;
}

@media (max-width: 1024px) {
  .new-dreamer26-hero {
    min-height: 78vh;
  }
  .new-dreamer26-hero-content {
    min-height: 78vh;
  }
  .new-dreamer26-hero-shell {
    grid-template-columns: minmax(0, 1fr);
  }
  .new-dreamer26-hero-meta {
    justify-self: start;
    width: min(420px, 100%);
  }
}

@media (max-width: 768px) {
  .new-dreamer26-hero-content {
    padding: 108px 0 42px;
  }
  .new-dreamer26-logo {
    width: min(250px, 70vw);
  }
  .new-dreamer26-title {
    font-size: clamp(2.1rem, 9vw, 3.3rem);
  }
}
</style>
