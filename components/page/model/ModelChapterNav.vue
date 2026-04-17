<template>
  <nav :class="['model-chapter-nav', `model-chapter-nav--${variant}`]">
    <div class="container model-chapter-nav-inner">
      <a
        v-for="section in sections"
        :key="section.id"
        :href="`#${section.id}`"
        :class="['model-chapter-link', { active: activeSection === section.id }]"
        @click.prevent="scrollToSection(section.id)"
      >
        {{ section.label }}
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{
  sections: Array<{ id: string; label: string }>
  variant?: string
}>()

const activeSection = ref(props.sections[0]?.id ?? '')
let observer: IntersectionObserver | null = null

onMounted(() => {
  const nodes = props.sections
    .map((section) => document.getElementById(section.id))
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
      rootMargin: '-18% 0px -62% 0px',
      threshold: [0.15, 0.35, 0.6]
    }
  )

  nodes.forEach((node) => observer?.observe(node))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    activeSection.value = id
  }
}
</script>

<style scoped>
.model-chapter-nav {
  position: sticky;
  top: 68px;
  z-index: 20;
  border-bottom: 1px solid rgba(14, 18, 24, 0.08);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(14px);
}

.model-chapter-nav-inner {
  display: flex;
  gap: 28px;
  overflow-x: auto;
  padding: 0;
  min-height: 58px;
  align-items: end;
}

.model-chapter-nav-inner::-webkit-scrollbar {
  display: none;
}

.model-chapter-link {
  flex: 0 0 auto;
  padding: 18px 0 14px;
  border-radius: 0;
  border: 0;
  border-bottom: 2px solid transparent;
  color: #34404d;
  font-size: 0.84rem;
  white-space: nowrap;
  transition:
    border-color 0.32s cubic-bezier(0.22, 1, 0.36, 1),
    color 0.32s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.32s cubic-bezier(0.22, 1, 0.36, 1);
}

.model-chapter-link:hover {
  color: #101720;
  transform: translateY(-1px);
}

.model-chapter-link:focus-visible {
  outline: 2px solid rgba(179, 29, 34, 0.42);
  outline-offset: 3px;
}

.model-chapter-link.active {
  border-bottom-color: #b31d22;
  color: #101720;
}

:global(.is-rtl) .model-chapter-nav-inner {
  direction: rtl;
}

:global(.is-rtl) .model-chapter-link {
  text-align: right;
}

@media (max-width: 768px) {
  .model-chapter-nav {
    top: 72px;
  }
}
</style>
