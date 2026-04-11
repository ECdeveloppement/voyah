<template>
  <section class="new-courage-hero">
    <div class="new-courage-hero-media">
      <img src="/voyah-resources/images/car/newCourage/1920/sc_1.jpg" :alt="$t('pages.new_courage.hero.title')" />
    </div>
    <div class="new-courage-hero-overlay" />
    <div class="new-courage-hero-gradient" />

    <div class="new-courage-hero-content">
      <div class="container">
        <div class="new-courage-hero-shell">
          <div class="new-courage-hero-copy">
            <img src="/voyah-resources/images/car/car_logo/newCourage.png" :alt="$t('pages.new_courage.hero.title')" class="new-courage-logo" />
            <p class="new-courage-eyebrow">{{ $t('pages.new_courage.hero.subtitle') }}</p>
            <h1 class="new-courage-title">{{ $t('pages.new_courage.hero.title') }}</h1>
            <p class="new-courage-summary">{{ $t('pages.new_courage.hero.description') }}</p>

            <div class="button-row new-courage-hero-actions">
              <BaseButton to="/book-drive.html" variant="primary">
                {{ $t('pages.new_courage.hero.ctaPrimary') }}
              </BaseButton>
              <BaseButton to="/store.html" variant="secondary">
                {{ $t('pages.new_courage.hero.ctaSecondary') }}
              </BaseButton>
            </div>
          </div>

          <aside class="new-courage-hero-meta">
            <p class="new-courage-hero-price">{{ $t('pages.new_courage.hero.price') }}</p>
            <div class="new-courage-hero-features">
              <span>{{ $t('pages.new_courage.sections.chapter_1.title') }}</span>
              <span>{{ $t('pages.new_courage.sections.chapter_2.title') }}</span>
              <span>{{ $t('pages.new_courage.sections.chapter_3.title') }}</span>
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
.new-courage-hero {
  position: relative;
  min-height: 88vh;
  overflow: hidden;
  color: #fff;
}

.new-courage-hero-media,
.new-courage-hero-media img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.new-courage-hero-media img {
  object-fit: cover;
  transform: scale(1.015);
  transform-origin: center;
  object-position: center 42%;
}

.new-courage-hero-overlay,
.new-courage-hero-gradient {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.new-courage-hero-overlay {
  background:
    linear-gradient(180deg, rgba(5, 8, 12, 0.16), rgba(5, 8, 12, 0.72)),
    linear-gradient(92deg, rgba(5, 8, 12, 0.66), rgba(5, 8, 12, 0.22) 52%, rgba(5, 8, 12, 0.56));
}

.new-courage-hero-gradient {
  background: radial-gradient(120% 80% at 78% 100%, rgba(2, 4, 8, 0.16), rgba(2, 4, 8, 0));
}

.new-courage-hero-content {
  position: relative;
  z-index: 1;
  min-height: 88vh;
  display: grid;
  align-items: end;
  padding: 118px 0 52px;
}

.new-courage-hero-shell {
  display: grid;
  grid-template-columns: minmax(0, 1.14fr) minmax(300px, 0.86fr);
  gap: 30px;
  align-items: end;
}

.new-courage-logo {
  display: block;
  width: min(320px, 56vw);
  margin-bottom: 16px;
}

.new-courage-eyebrow {
  margin: 0 0 12px;
  font-size: 0.82rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.78);
}

.new-courage-title {
  margin: 14px 0 0;
  font-size: clamp(2.6rem, 5vw, 5.4rem);
  line-height: 0.96;
}

.new-courage-summary {
  margin: 16px 0 0;
  max-width: 620px;
  color: rgba(236, 242, 247, 0.84);
  line-height: 1.78;
}

.new-courage-hero-actions {
  margin-top: 28px;
  gap: 12px;
}

.new-courage-hero-actions :deep(.base-button) {
  min-width: 168px;
  min-height: 46px;
  font-size: 0.92rem;
}

.new-courage-hero-actions :deep(.base-button.primary) {
  background: rgba(255, 255, 255, 0.94);
  border-color: rgba(255, 255, 255, 0.94);
  color: #101720;
}

.new-courage-hero-actions :deep(.base-button.primary:hover) {
  background: #ffffff;
  border-color: #ffffff;
}

.new-courage-hero-actions :deep(.base-button.secondary) {
  border-color: rgba(255, 255, 255, 0.36);
  background: transparent;
  color: #fff;
}

.new-courage-hero-actions :deep(.base-button.secondary:hover) {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.52);
}

.new-courage-hero-meta {
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

.new-courage-hero-price {
  margin: 0;
  color: rgba(255, 255, 255, 0.94);
  font-size: 1.08rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.new-courage-hero-features {
  display: grid;
  gap: 10px;
}

.new-courage-hero-features span {
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(235, 242, 247, 0.82);
  font-size: 0.9rem;
  line-height: 1.45;
}

@media (max-width: 1024px) {
  .new-courage-hero {
    min-height: 78vh;
  }
  .new-courage-hero-content {
    min-height: 78vh;
  }
  .new-courage-hero-shell {
    grid-template-columns: minmax(0, 1fr);
  }
  .new-courage-hero-meta {
    justify-self: start;
    width: min(420px, 100%);
  }
}

@media (max-width: 768px) {
  .new-courage-hero-content {
    padding: 108px 0 42px;
  }
  .new-courage-logo {
    width: min(250px, 70vw);
  }
  .new-courage-title {
    font-size: clamp(2.1rem, 9vw, 3.3rem);
  }
}
</style>
