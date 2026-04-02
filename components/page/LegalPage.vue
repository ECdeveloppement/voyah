<template>
  <div class="legal-page">
    <PageHero
      :eyebrow="textFor(page.eyebrow)"
      :title="textFor(page.title)"
      :summary="textFor(page.summary)"
      image="/static/assets/world-fec50d02.jpg"
      align="start"
      compact
    />

    <section class="legal-anchor-bar">
      <div class="container legal-anchor-bar__inner">
        <a
          v-for="(section, index) in page.sections"
          :key="section.title.en"
          :href="`#legal-${index + 1}`"
          :class="['legal-anchor', { active: activeSection === `legal-${index + 1}` }]"
        >
          {{ textFor(section.title) }}
        </a>
      </div>
    </section>

    <section ref="contentRef" class="section-shell legal-page-shell">
      <div class="container legal-stack">
        <article
          v-for="(section, index) in page.sections"
          :id="`legal-${index + 1}`"
          :key="section.title.en"
          class="legal-card"
          data-reveal
        >
          <div class="legal-card__index">0{{ index + 1 }}</div>
          <div class="legal-card__body">
            <h2>{{ textFor(section.title) }}</h2>
            <p v-for="paragraph in section.paragraphs" :key="paragraph.en">
              {{ textFor(paragraph) }}
            </p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { LegalDefinition } from '~/data/site'
import PageHero from '~/components/common/PageHero.vue'
import { useSectionReveal } from '~/composables/useSectionReveal'
import { useSiteContent } from '~/composables/useSiteContent'

const props = defineProps<{
  page: LegalDefinition
}>()

const { textFor } = useSiteContent()
const contentRef = useSectionReveal({ y: 28, duration: 0.85, stagger: 0.12 })
const activeSection = ref('legal-1')
let observer: IntersectionObserver | null = null

onMounted(() => {
  const nodes = props.page.sections
    .map((_, index) => document.getElementById(`legal-${index + 1}`))
    .filter((node): node is HTMLElement => Boolean(node))

  if (!nodes.length) {
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (visible?.target?.id) {
        activeSection.value = visible.target.id
      }
    },
    {
      rootMargin: '-18% 0px -58% 0px',
      threshold: [0.12, 0.35, 0.6]
    }
  )

  nodes.forEach((node) => observer?.observe(node))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.legal-page {
  background: #fff;
}

.legal-anchor-bar {
  position: sticky;
  top: 68px;
  z-index: 12;
  backdrop-filter: blur(14px);
  background: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid rgba(16, 23, 32, 0.08);
}

.legal-anchor-bar__inner {
  display: flex;
  gap: 28px;
  overflow-x: auto;
  padding: 0;
  min-height: 56px;
  align-items: end;
}

.legal-anchor {
  display: inline-flex;
  align-items: center;
  padding: 18px 0 14px;
  white-space: nowrap;
  border-radius: 0;
  border: 0;
  border-bottom: 2px solid transparent;
  background: transparent;
  color: #60707f;
  font-size: 0.84rem;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.legal-anchor:hover {
  color: #101720;
}

.legal-anchor.active {
  color: #101720;
  border-bottom-color: #b31d22;
}

.legal-page-shell {
  background: linear-gradient(180deg, #faf7f2, #ffffff 38%);
}

.legal-stack {
  display: grid;
  gap: 20px;
}

.legal-card {
  display: grid;
  grid-template-columns: 92px minmax(0, 1fr);
  gap: 24px;
  padding: 26px 28px;
  border-radius: 0;
  border: 1px solid rgba(16, 23, 32, 0.08);
  background: rgba(255, 255, 255, 0.92);
  box-shadow: none;
}

.legal-card__index {
  width: 62px;
  height: 62px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  background: #f5f1eb;
  color: #8d6b43;
  font-size: 1rem;
  font-weight: 700;
}

.legal-card__body h2 {
  margin: 0;
  color: #101720;
  font-size: clamp(1.4rem, 2.2vw, 2.1rem);
}

.legal-card__body p {
  margin: 14px 0 0;
  color: #586473;
  line-height: 1.88;
}

@media (max-width: 1024px) {
  .legal-anchor-bar {
    top: 72px;
  }

  .legal-card {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (max-width: 768px) {
  .legal-card {
    padding: 22px;
  }
}
</style>
