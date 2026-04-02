<template>
  <nav class="model-chapter-nav">
    <div class="container model-chapter-nav-inner">
      <a
        v-for="section in sections"
        :key="section.id"
        :href="`#${section.id}`"
        :class="['model-chapter-link', { active: activeSection === section.id }]"
      >
        {{ section.label }}
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{
  sections: Array<{ id: string; label: string }>
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
  gap: 12px;
  overflow-x: auto;
  padding: 12px 0;
}

.model-chapter-nav-inner::-webkit-scrollbar {
  display: none;
}

.model-chapter-link {
  flex: 0 0 auto;
  padding: 9px 16px;
  border-radius: 999px;
  border: 1px solid rgba(14, 18, 24, 0.08);
  color: #34404d;
  font-size: 0.84rem;
  white-space: nowrap;
  transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.model-chapter-link:hover {
  border-color: rgba(197, 156, 98, 0.5);
  color: #101720;
  transform: translateY(-1px);
}

.model-chapter-link.active {
  border-color: rgba(197, 156, 98, 0.44);
  background: rgba(197, 156, 98, 0.08);
  color: #101720;
}

@media (max-width: 768px) {
  .model-chapter-nav {
    top: 72px;
  }
}
</style>
