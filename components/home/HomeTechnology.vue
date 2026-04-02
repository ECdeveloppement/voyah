<template>
  <section ref="sectionRef" class="technology-section">
    <div class="container">
      <h2 class="technology-title" data-reveal>{{ textFor(data.title) }}</h2>
      <p class="technology-copy" data-reveal>{{ textFor(data.body) }}</p>

      <div class="technology-desktop" data-reveal>
        <div class="technology-stage">
          <div
            v-for="(tab, index) in data.tabs"
            :key="tab.label.en"
            :class="['technology-visual', { active: activeTab === index }]"
          >
            <img :src="tab.image" :alt="textFor(tab.label)" />
            <button type="button" class="technology-watch">
              <span>{{ textFor(tab.cta) }}</span>
              <span class="technology-watch__play">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 7.5V16.5L16.5 12L9 7.5Z" fill="currentColor" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div class="technology-panel">
          <div class="technology-tabs">
            <button
              v-for="(tab, index) in data.tabs"
              :key="`${tab.label.en}-desktop`"
              type="button"
              :class="['technology-tab', { active: activeTab === index }]"
              @click="activeTab = index"
            >
              {{ textFor(tab.label) }}
            </button>
          </div>

          <div class="technology-panel__body">
            <h3>{{ textFor(activeTechnology.label) }}</h3>

            <div class="technology-tags">
              <span v-for="tag in activeTechnology.tags" :key="tag.en" class="technology-tag">
                {{ textFor(tag) }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="technology-mobile" data-reveal>
        <div class="technology-mobile__track">
          <article v-for="tab in data.tabs" :key="`${tab.label.en}-mobile`" class="technology-mobile__card">
            <div class="technology-mobile__media">
              <img :src="tab.image" :alt="textFor(tab.label)" />
              <button type="button" class="technology-watch technology-watch--mobile">
                <span>{{ textFor(tab.cta) }}</span>
                <span class="technology-watch__play">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M9 7.5V16.5L16.5 12L9 7.5Z" fill="currentColor" />
                  </svg>
                </span>
              </button>
            </div>

            <div class="technology-mobile__body">
              <h3>{{ textFor(tab.label) }}</h3>
              <div class="technology-tags">
                <span v-for="tag in tab.tags" :key="tag.en" class="technology-tag">
                  {{ textFor(tag) }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { HomeData } from '~/data/site'
import { useSectionReveal } from '~/composables/useSectionReveal'
import { useSiteContent } from '~/composables/useSiteContent'

const props = defineProps<{
  data: HomeData['technology']
}>()

const { textFor } = useSiteContent()
const sectionRef = useSectionReveal()
const activeTab = ref(0)

const activeTechnology = computed(() => props.data.tabs[activeTab.value] ?? props.data.tabs[0])
</script>

<style scoped>
.technology-section {
  padding: 96px 0;
  background: #fff;
}

.technology-title {
  margin: 0;
  max-width: 960px;
  color: #101720;
  font-size: clamp(2.5rem, 5vw, 4.8rem);
  line-height: 0.98;
  letter-spacing: -0.03em;
  text-align: center;
  margin-inline: auto;
}

.technology-copy {
  margin: 18px 0 0;
  max-width: 860px;
  color: #596573;
  line-height: 1.82;
  text-align: center;
  margin-inline: auto;
}

.technology-desktop {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 26px;
  align-items: stretch;
  margin-top: 30px;
}

.technology-stage {
  position: relative;
  min-height: 620px;
  overflow: hidden;
  background: #eef1f3;
}

.technology-visual {
  position: absolute;
  inset: 0;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.45s ease;
}

.technology-visual.active {
  opacity: 1;
  pointer-events: auto;
}

.technology-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.technology-watch {
  position: absolute;
  right: 24px;
  bottom: 24px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 0;
  background: rgba(9, 13, 18, 0.54);
  color: #fff;
  backdrop-filter: blur(8px);
}

.technology-watch__play {
  width: 18px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.technology-watch__play svg {
  width: 100%;
  height: 100%;
}

.technology-panel {
  display: grid;
  gap: 20px;
  background: #fff;
}

.technology-tabs {
  display: flex;
  gap: 34px;
  padding: 0 0 14px;
  border-bottom: 1px solid rgba(16, 23, 32, 0.08);
  justify-content: center;
}

.technology-tab {
  position: relative;
  padding: 0;
  border: 0;
  background: transparent;
  color: rgba(16, 23, 32, 0.46);
  font-size: 0.98rem;
  transition: color 0.22s ease;
}

.technology-tab::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -15px;
  height: 1px;
  background: #b31d22;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.24s ease;
}

.technology-tab.active {
  color: #101720;
}

.technology-tab.active::after {
  transform: scaleX(1);
}

.technology-panel__body {
  padding: 0;
  display: grid;
  align-content: start;
  gap: 22px;
  justify-items: center;
  text-align: center;
}

.technology-panel__body h3 {
  margin: 0;
  color: #101720;
  font-size: clamp(1.8rem, 2.2vw, 2.6rem);
  line-height: 1.06;
}

.technology-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.technology-tag {
  color: #53606d;
  font-size: 0.88rem;
  padding: 0;
  border: 0;
  background: transparent;
}

.technology-tag:not(:last-child)::after {
  content: '|';
  margin-left: 12px;
  color: #a6afb8;
}

.technology-mobile {
  display: none;
}

.technology-mobile__track {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(300px, 84vw);
  gap: 16px;
  overflow-x: auto;
  margin-top: 28px;
  padding-bottom: 2px;
  scroll-snap-type: x proximity;
}

.technology-mobile__card {
  display: grid;
  gap: 0;
  background: #fff;
  border: 1px solid rgba(16, 23, 32, 0.08);
  scroll-snap-align: start;
}

.technology-mobile__media {
  position: relative;
  min-height: 360px;
}

.technology-mobile__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.technology-watch--mobile {
  right: 16px;
  bottom: 16px;
}

.technology-mobile__body {
  padding: 20px;
  display: grid;
  gap: 14px;
}

.technology-mobile__body h3 {
  margin: 0;
  color: #101720;
  font-size: 1.35rem;
}

@media (max-width: 1024px) {
  .technology-desktop {
    display: none;
  }

  .technology-mobile {
    display: block;
  }
}

@media (max-width: 768px) {
  .technology-section {
    padding: 72px 0;
  }
}
</style>
