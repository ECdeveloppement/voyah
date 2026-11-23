<template>
  <QuotePage v-if="formKey === 'quote'" :key="locale.code" />
  <div v-else class="lead-page">
    <section v-if="page.heroImage" class="lead-hero">
      <img :src="page.heroImage" :alt="formTitle" />
      <div class="lead-hero__scrim" />
      <div class="container lead-hero__inner">
        <h1 class="lead-hero__title">{{ formTitle }}</h1>
      </div>
    </section>

    <div class="container lead-page__body">
      <h1 v-if="!page.heroImage" class="lead-page__title">{{ formTitle }}</h1>

      <div class="lead-page__grid">
        <div class="lead-page__form">
          <LeadForm :form="formKey" :key="locale.code" />
        </div>

        <aside v-if="asideImage" class="lead-page__aside">
          <img :src="asideImage" :alt="textFor(modelDisplayName['Free'])" />
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InfoDefinition } from '~/data/site'
import { homePage } from '~/data/site'
import { leadForms, modelDisplayName } from '~/data/dealer'
import LeadForm from '~/components/forms/LeadForm.vue'
import QuotePage from '~/components/forms/QuotePage.vue'
import { useSiteContent } from '~/composables/useSiteContent'

const props = defineProps<{
  page: InfoDefinition
  formKey: keyof typeof leadForms
}>()

const { locale, textFor } = useSiteContent()

const formTitle = computed(() => textFor(leadForms[props.formKey].title))

const asideImage = computed(() => {
  if (props.formKey === 'test-drive') return '/assets/qatar/images/voyah-free-2024-color-slider-green.webp'
  return homePage.slides[0].image
})
</script>

<style scoped>
.lead-hero {
  position: relative;
  height: clamp(260px, 30vw, 420px);
  overflow: hidden;
}

.lead-hero img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lead-hero__scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.45));
}

.lead-hero__inner {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  align-items: center;
}

.lead-hero__title {
  margin: 0;
  color: #ffffff;
  font-size: clamp(1.9rem, 3.2vw, 2.6rem);
  font-weight: 700;
}

.lead-page__body {
  padding: clamp(48px, 6vw, 88px) 0 clamp(56px, 7vw, 104px);
}

.lead-page__title {
  margin: 0 0 20px;
  color: var(--text);
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 1.2;
}

.lead-page__grid {
  display: grid;
  grid-template-columns: minmax(0, 620px) minmax(0, 1fr);
  gap: clamp(28px, 5vw, 64px);
  align-items: start;
}

.lead-page__aside img {
  display: block;
  width: 100%;
  height: auto;
}

@media (max-width: 900px) {
  .lead-page__grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>