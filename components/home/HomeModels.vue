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
  left: 0;
  right: 0;
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

.model-stage {
  position: relative;
  overflow: hidden;
  min-height: 680px;
  background:
    radial-gradient(circle at 50% 34%, rgba(255, 255, 255, 0.58), rgba(255, 255, 255, 0) 34%),
    linear-gradient(180deg, #f7f4ef 0%, #f1ebe3 100%);
}

.model-stage__viewer {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 42px 208px;
}

.model-stage__frame {
  position: absolute;
  inset: auto 0 0;
  padding: 0;
}

.model-stage-image {
  width: min(100%, 1120px);
  height: auto;
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

.model-stage-panel {
  display: grid;
  gap: 18px;
  padding: 20px 28px 22px;
  border-radius: 0;
  background: rgba(248, 246, 242, 0.96);
  border-top: 1px solid rgba(17, 17, 17, 0.08);
  backdrop-filter: blur(10px);
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

.model-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
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

@media (max-width: 900px) {
  .model-stage {
    min-height: 660px;
  }

  .model-stage__viewer {
    min-height: 520px;
    padding: 24px 22px 220px;
  }

  .model-stage__frame {
    padding: 0 18px 18px;
  }

  .model-stage-panel {
    padding: 22px;
  }
}
</style>
