<template>
  <section v-if="entry && colors.length" class="model-config-showcase" :class="{ 'model-config-showcase--strong-name': ['Free', 'Dream', 'Courage'].includes(slug) }">
    <div class="model-config-showcase__visual">
      <div class="model-config-showcase__watermark" aria-hidden="true">{{ entry.word }}</div>

      <div class="model-config-showcase__car">
        <Transition name="model-config-fade" mode="out-in">
          <img
            :key="selectedColor.image"
            :src="selectedColor.image"
            :alt="`${textFor(title)} — ${colorLabel(activeColor)}`"
            decoding="async"
            fetchpriority="high"
          />
        </Transition>
      </div>

      <div class="model-config-showcase__colors" role="group" :aria-label="colorPickerLabel">
        <button
          v-for="(color, index) in colors"
          :key="color.image"
          type="button"
          class="model-config-showcase__color"
          :class="{ 'is-active': index === activeColor }"
          :aria-label="colorLabel(index)"
          :aria-pressed="index === activeColor"
          @click="activeColor = index"
        >
          <span v-if="color.hex" :style="{ background: color.hex }" aria-hidden="true" />
          <img v-else :src="color.swatch" alt="" aria-hidden="true" />
        </button>
      </div>
      <p class="model-config-showcase__color-name" aria-live="polite">{{ colorLabel(activeColor) }}</p>
      <p v-if="slug === 'Free' && activeColor === 1" class="model-config-showcase__note">{{ textFor(previewNote) }}</p>
      <div class="model-config-showcase__download">
        <BrochureButton :slug="slug" :label="downloadLabel" variant="primary" />
      </div>
    </div>

    <div class="model-config-showcase__stats">
      <div v-for="(stat, index) in entry.stats" :key="index" class="model-config-showcase__stat">
        <span>{{ textFor(stat.label) }}</span>
        <strong>{{ stat.value }}</strong>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { modelDisplayName, t, type Localized } from '~/data/dealer'
import BrochureButton from '~/components/common/BrochureButton.vue'
import type { ModelShowcaseEntry } from '~/data/site'
import { modelsShowcase } from '~/data/site'
import { useSiteContent } from '~/composables/useSiteContent'

type ColorOption = { image: string; swatch?: string; hex?: string; name?: Localized }

const props = defineProps<{ slug: string }>()
const { locale, textFor } = useSiteContent()

const downloadLabel = t('Download the brochure', 'Télécharger la brochure', 'تحميل الكتيب')
const previewNote = t('Recoloured preview. Final shade subject to confirmation.', 'Aperçu recoloré. Teinte définitive à confirmer.', 'معاينة معدلة اللون. الدرجة النهائية تخضع للتأكيد.')
const freeColors: ColorOption[] = [
  { image: '/assets/model-config/previews/free-01.png', swatch: '/assets/OFFICIALVOYAH/free/images/icon1.png', name: t('Metal Grey', 'Gris Métal', 'رمادي معدني') },
  { image: '/assets/model-config/previews/free-02.png', hex: 'linear-gradient(135deg, #cf666d, #891f2c)', name: t('Red', 'Rouge', 'أحمر') },
  { image: '/assets/model-config/previews/free-03.png', swatch: '/assets/OFFICIALVOYAH/free/images/icon3.png', name: t('White', 'Blanc', 'أبيض') },
  { image: '/assets/model-config/previews/free-04.png', swatch: '/assets/OFFICIALVOYAH/free/images/icon4.png', name: t('Star Night', 'Nuit Étoilée', 'ليلة مرصعة بالنجوم') }
]

const colorsBySlug: Record<string, ColorOption[]> = {
  'Free': freeColors,
  'Dream': [
    { image: '/assets/model-config/previews/dream-02.png', swatch: '/assets/model-config/dream/swatch-02.png', name: t('Star Night', 'Nuit étoilée', 'ليلة مرصعة بالنجوم') },
    { image: '/assets/model-config/previews/dream-03.png', swatch: '/assets/model-config/dream/swatch-03.png', name: t('White', 'Blanc', 'أبيض') }
  ],
  'Passion': [1, 2, 3, 4].map((index) => ({
    image: `/assets/model-config/previews/passion-${String(index).padStart(2, '0')}.png`,
    swatch: `/assets/model-config/passion/swatch-${String(index).padStart(2, '0')}.png`
  })),
  'Courage': [
    { image: '/assets/model-config/previews/courage-01.png', swatch: '/assets/model-config/courage/swatch-01.png', name: t('Star Night', 'Nuit étoilée', 'ليلة مرصعة بالنجوم') },
    { image: '/assets/model-config/previews/courage-02.png', swatch: '/assets/model-config/courage/swatch-02.png', name: t('Star Night White', 'Blanc nuit étoilée', 'أبيض ليلة مرصعة بالنجوم') },
    { image: '/assets/model-config/previews/courage-03.png', swatch: '/assets/model-config/courage/swatch-03.png', name: t('Metal Grey', 'Gris métallisé', 'رمادي معدني') },
    { image: '/assets/model-config/previews/courage-04.png', swatch: '/assets/model-config/courage/swatch-04.png', name: t('Blue', 'Bleu', 'أزرق') },
    { image: '/assets/model-config/previews/courage-05.png', swatch: '/assets/model-config/courage/swatch-05.png', name: t('Champagne Gold', 'Or champagne', 'ذهبي شمبانيا') }
  ]
}

const entry = computed<ModelShowcaseEntry | undefined>(() => modelsShowcase.find((model) => model.slug === props.slug))
const title = computed(() => modelDisplayName[props.slug] ?? { en: 'VOYAH', fr: 'VOYAH', ar: 'VOYAH' })
const colors = computed(() => colorsBySlug[props.slug] ?? [])
const activeColor = ref(0)
const selectedColor = computed(() => colors.value[activeColor.value] ?? colors.value[0])
const colorPickerLabel = computed(() => {
  if (locale.value.code === 'fr') return 'Choisir une couleur'
  if (locale.value.code === 'ar') return 'اختر اللون'
  return 'Choose a color'
})

const colorLabel = (index: number) => {
  const name = colors.value[index]?.name
  if (name) return textFor(name)
  if (locale.value.code === 'fr') return `Couleur ${index + 1}`
  if (locale.value.code === 'ar') return `اللون ${index + 1}`
  return `Color ${index + 1}`
}

watch(() => props.slug, () => { activeColor.value = 0 })
</script>

<style scoped>
.model-config-showcase {
  overflow: hidden;
  background: #f6f9fc;
  color: #111820;
}

.model-config-showcase__visual {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 640px;
  padding: 40px 32px 32px;
  isolation: isolate;
}

.model-config-showcase__watermark {
  position: absolute;
  top: 32px;
  left: 50%;
  z-index: -1;
  transform: translateX(-50%);
  color: rgba(67, 104, 120, 0.2);
  font-size: clamp(100px, 16vw, 220px);
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 0.95;
  white-space: nowrap;
  user-select: none;
}

.model-config-showcase--strong-name .model-config-showcase__watermark {
  color: rgba(64, 106, 112, 0.52);
}

.model-config-showcase__car {
  display: flex;
  align-items: center;
  justify-content: center;
  width: min(1200px, 100%);
  height: clamp(320px, 34vw, 480px);
  margin-top: clamp(60px, 7vw, 105px);
}

.model-config-showcase__car img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.model-config-showcase__colors {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-height: 60px;
  margin-top: 16px;
}

.model-config-showcase__color {
  display: grid;
  width: 56px;
  height: 56px;
  place-items: center;
  padding: 3px;
  border: 2px solid transparent;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.model-config-showcase__color:hover {
  transform: scale(1.08);
}

.model-config-showcase__color.is-active {
  border-color: #527d82;
}

.model-config-showcase__color img,
.model-config-showcase__color > span {
  display: block;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
}

.model-config-showcase__color:focus-visible {
  outline: 2px solid #406a70;
  outline-offset: 4px;
}

.model-config-showcase__color-name {
  margin: 14px 0 0;
  font-size: 14px;
  letter-spacing: 0.08em;
}

.model-config-showcase__note {
  margin: 10px 0 0;
  color: #66767e;
  font-size: 12px;
  text-align: center;
}

.model-config-showcase__download {
  display: flex;
  justify-content: center;
  min-height: 48px;
  margin-top: 24px;
}

.model-config-showcase__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-top: 1px solid rgba(17, 24, 32, 0.1);
}

.model-config-showcase__stat {
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 8px;
  min-height: 112px;
  padding: 16px;
  text-align: center;
}

.model-config-showcase__stat + .model-config-showcase__stat {
  border-inline-start: 1px solid rgba(17, 24, 32, 0.1);
}

.model-config-showcase__stat span {
  color: #788592;
  font-size: 0.92rem;
}

.model-config-showcase__stat strong {
  color: #111820;
  font-size: clamp(1.1rem, 1.8vw, 1.6rem);
  line-height: 1.2;
}

.model-config-fade-enter-active,
.model-config-fade-leave-active {
  transition: opacity 0.22s ease;
}

.model-config-fade-enter-from,
.model-config-fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .model-config-showcase__visual {
    min-height: 0;
    padding: 34px 16px 18px;
  }

  .model-config-showcase__watermark {
    top: 28px;
    font-size: clamp(58px, 18vw, 130px);
  }

  .model-config-showcase__car {
    width: 100%;
    height: clamp(150px, 42vw, 300px);
    margin-top: clamp(40px, 9vw, 70px);
  }

  .model-config-showcase__colors {
    gap: clamp(6px, 2.8vw, 12px);
    margin-top: 12px;
  }

  .model-config-showcase__color {
    width: 48px;
    height: 48px;
  }

  .model-config-showcase__color img,
  .model-config-showcase__color > span {
    width: 36px;
    height: 36px;
  }

  .model-config-showcase__stats {
    grid-template-columns: 1fr;
  }

  .model-config-showcase__stat {
    min-height: 76px;
  }

  .model-config-showcase__stat + .model-config-showcase__stat {
    border-inline-start: 0;
    border-top: 1px solid rgba(17, 24, 32, 0.08);
  }
}

@media (prefers-reduced-motion: reduce) {
  .model-config-showcase__color,
  .model-config-fade-enter-active,
  .model-config-fade-leave-active {
    transition: none;
  }
}
</style>


