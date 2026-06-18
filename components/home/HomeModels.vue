<template>
  <section ref="sectionRef" class="section-shell models-section">
    <div class="container">
      <h2 class="section-title section-title--dark" data-reveal>{{ textFor(title) }}</h2>
      <div class="model-switcher" data-reveal>
        <button
          v-for="(model, index) in models"
          :key="model.slug"
          type="button"
          :class="['model-switch', { active: activeIndex === index }]"
          @click="activeIndex = index"
        >
          {{ textFor(model.title) }}
        </button>
      </div>

      <div class="model-stage" data-reveal>
        <div class="model-stage__viewer">
          <Transition name="model-visual" mode="out-in">
            <img
              :key="activeModel.slug"
              :src="activeModel.image"
              :alt="textFor(activeModel.title)"
              class="model-stage-image"
            />
          </Transition>
        </div>

        <div class="model-stage__frame">
          <div class="model-stage-panel">
            <Transition name="model-copy" mode="out-in">
              <div :key="`copy-${activeModel.slug}`" class="model-stage-panel__content">
                <span class="model-category">{{ textFor(activeModel.category) }}</span>
                <h3>{{ textFor(activeModel.title) }}</h3>

                <MetricGrid :metrics="activeModel.metrics" />

                <div class="model-actions">
                  <BaseButton :to="buildPath(activeModel.slug)" variant="secondary">
                    {{ moreLabel }}
                  </BaseButton>
                  <BaseButton :to="buildPath('book-drive.html')" variant="primary">
                    {{ driveLabel }}
                  </BaseButton>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import type { HomeData, LocalizedText } from '~/data/site'
import BaseButton from '~/components/common/BaseButton.vue'
import MetricGrid from '~/components/common/MetricGrid.vue'
import { useSectionReveal } from '~/composables/useSectionReveal'
import { useSiteContent } from '~/composables/useSiteContent'

const props = defineProps<{
  title: LocalizedText
  body: LocalizedText
  models: HomeData['models']
}>()

const { buildPath, locale, textFor } = useSiteContent()
const sectionRef = useSectionReveal({ stagger: 0.08, y: 30 })
const activeIndex = ref(0)
const activeModel = computed(() => props.models[activeIndex.value] ?? props.models[0])

watch(activeIndex, () => {
  // Subtle panel pulse when switching model for a premium feel.
  gsap.fromTo(
    '.model-stage-panel',
    { boxShadow: '0 0 0 rgba(17, 17, 17, 0)' },
    {
      boxShadow: '0 18px 34px rgba(17, 17, 17, 0.08)',
      duration: 0.24,
      yoyo: true,
      repeat: 1,
      ease: 'power2.out'
    }
  )
})

const moreLabel = computed(() => {
  if (locale.value.code === 'fr') return 'En savoir plus'
  if (locale.value.code === 'ar') return 'اعرف المزيد'
  return 'Learn more'
})

const driveLabel = computed(() => {
  if (locale.value.code === 'fr') return 'Réserver un essai'
  if (locale.value.code === 'ar') return 'احجز تجربة قيادة'
  return 'Test drive'
})
</script>

<style scoped>
.models-section {
  background: #fff;
  overflow: hidden;
}

.section-title--dark {
  color: #111;
  text-align: center;
}

.section-copy--dark {
  color: rgba(17, 17, 17, 0.7);
  text-align: center;
  margin-inline: auto;
}

.model-switcher {
  display: flex;
  flex-wrap: wrap;
  gap: 34px;
  margin: 22px 0 14px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(17, 17, 17, 0.08);
  justify-content: center;
}

.model-switch {
  position: relative;
  padding: 0;
  border: 0;
  background: transparent;
  color: rgba(17, 17, 17, 0.44);
  font-size: clamp(1rem, 1.5vw, 1.26rem);
  cursor: pointer;
  transition:
    color 0.3s cubic-bezier(0, 0, 0.58, 1),
    transform 0.3s cubic-bezier(0, 0, 0.58, 1);
}

.model-switch::after {
  content: '';
  position: absolute;
  inset-inline-start: 0;
  inset-inline-end: 0;
  bottom: -19px;
  height: 2px;
  background: #b31d22;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s cubic-bezier(0, 0, 0.58, 1);
}

.model-switch.active {
  color: #111;
  transform: translateY(-1px);
}

.model-switch.active::after {
  transform: scaleX(1);
}

/* ============================================
   MAIN STAGE - FLEX LAYOUT (No absolute positioning)
   ============================================ */
.model-stage {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: auto;
  background:
    radial-gradient(circle at 50% 34%, rgba(255, 255, 255, 0.58), rgba(255, 255, 255, 0) 34%),
    linear-gradient(180deg, #f7f4ef 0%, #f1ebe3 100%);
  border-radius: 16px;
}

/* Viewer - Image container */
.model-stage__viewer {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 30px 10px;
  min-height: 350px;
  width: 100%;
  flex-shrink: 0;
}

/* Frame - Panel container below image */
.model-stage__frame {
  position: relative;
  padding: 0 24px 24px;
  width: 100%;
  flex-shrink: 0;
}

/* Image styles */
.model-stage-image {
  width: 100%;
  max-width: 700px;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
}

.model-visual-enter-active,
.model-visual-leave-active {
  transition:
    opacity 0.54s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.54s cubic-bezier(0.22, 1, 0.36, 1);
}

.model-visual-enter-from,
.model-visual-leave-to {
  opacity: 0;
  transform: scale(1.02);
}

.model-stage:hover .model-stage-image {
  transform: scale(1.018);
}

/* Panel - Card style */
.model-stage-panel {
  display: grid;
  gap: 18px;
  padding: 24px 28px 26px;
  border-radius: 14px;
  background: rgba(248, 246, 242, 0.96);
  border: 1px solid rgba(17, 17, 17, 0.08);
  backdrop-filter: blur(10px);
  width: 100%;
  max-width: 100%;
  box-shadow: 0 8px 30px rgba(17, 17, 17, 0.06);
}

.model-stage-panel__content {
  display: grid;
  gap: 18px;
}

.model-copy-enter-active,
.model-copy-leave-active {
  transition:
    opacity 0.38s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.38s cubic-bezier(0.22, 1, 0.36, 1);
}

.model-copy-enter-from,
.model-copy-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.model-category {
  color: rgba(17, 17, 17, 0.46);
  max-width: 520px;
  font-size: 0.9rem;
  line-height: 1.55;
  letter-spacing: 0;
}

.model-stage-panel h3 {
  margin: 0;
  color: #111;
  font-size: clamp(1.5rem, 2.4vw, 2.5rem);
}

.model-stage-panel :deep(.metric-card) {
  background: transparent;
  border-color: rgba(17, 17, 17, 0.08);
  box-shadow: none;
  border-radius: 0;
}

.model-stage-panel :deep(.metric-value),
.model-stage-panel :deep(.metric-label) {
  color: #111;
}

.model-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 4px;
}

.model-actions :deep(.base-button.secondary) {
  background: transparent;
  border-color: rgba(17, 17, 17, 0.18);
  color: #111;
}

.model-actions :deep(.base-button.secondary:hover) {
  background: rgba(17, 17, 17, 0.04);
}

.model-actions :deep(.base-button.primary) {
  background: #111;
  border-color: #111;
  color: #fff;
}

.model-actions :deep(.base-button.primary:hover) {
  background: #000;
  border-color: #000;
}

/* ============================================
   TABLET - 900px and below
   ============================================ */
@media (max-width: 900px) {
  .model-stage__viewer {
    min-height: 300px;
    padding: 24px 24px 10px;
  }

  .model-stage__frame {
    padding: 0 18px 18px;
  }

  .model-stage-panel {
    padding: 20px 22px 22px;
    border-radius: 12px;
  }

  .model-stage-image {
    max-height: 320px;
  }
}

/* ============================================
   MOBILE - 600px and below
   ============================================ */
@media (max-width: 600px) {
  .model-switcher {
    gap: 16px;
    margin: 16px 0 12px;
    padding-bottom: 10px;
  }

  .model-switch {
    font-size: 0.9rem;
  }

  .model-stage {
    border-radius: 12px;
  }

  .model-stage__viewer {
    min-height: 220px;
    padding: 16px 16px 8px;
  }

  .model-stage__frame {
    padding: 0 12px 12px;
  }

  .model-stage-panel {
    padding: 16px 18px 18px;
    border-radius: 10px;
    gap: 14px;
  }

  .model-stage-panel__content {
    gap: 14px;
  }

  .model-stage-panel h3 {
    font-size: 1.3rem;
  }

  .model-category {
    font-size: 0.8rem;
  }

  .model-actions {
    gap: 10px;
  }

  .model-actions :deep(.base-button) {
    font-size: 0.85rem;
    padding: 8px 18px;
  }

  .model-stage-image {
    max-height: 200px;
    max-width: 100%;
  }

  .model-stage:hover .model-stage-image {
    transform: none;
  }
}

/* ============================================
   EXTRA SMALL - 400px and below
   ============================================ */
@media (max-width: 400px) {
  .model-stage__viewer {
    min-height: 160px;
    padding: 12px 12px 6px;
  }

  .model-stage__frame {
    padding: 0 8px 8px;
  }

  .model-stage-panel {
    padding: 14px;
    border-radius: 8px;
    gap: 12px;
  }

  .model-stage-panel__content {
    gap: 12px;
  }

  .model-stage-panel h3 {
    font-size: 1.1rem;
  }

  .model-actions {
    flex-direction: column;
    gap: 8px;
  }

  .model-actions :deep(.base-button) {
    width: 100%;
    justify-content: center;
    padding: 10px 16px;
    font-size: 0.85rem;
  }

  .model-stage-image {
    max-height: 140px;
  }
}

/* ============================================
   LANDSCAPE MOBILE - Height constrained
   ============================================ */
@media (max-height: 700px) and (max-width: 800px) {
  .model-stage__viewer {
    min-height: 160px;
    padding: 12px 16px 6px;
  }

  .model-stage-image {
    max-height: 150px;
  }

  .model-stage-panel {
    padding: 12px 16px 14px;
    gap: 10px;
  }

  .model-stage-panel__content {
    gap: 10px;
  }

  .model-stage-panel h3 {
    font-size: 1.1rem;
  }

  .model-actions {
    gap: 6px;
  }
 
  .model-actions :deep(.base-button) {
    padding: 6px 14px;
    font-size: 0.8rem;
  }
}
</style>