<template>
  <nav class="model-chapter-nav">
    <div class="container model-chapter-nav-inner">
      <a
        v-for="section in sections"
        :key="section.id"
        :href="`#${section.id}`"
        class="model-chapter-link"
      >
        {{ section.label }}
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  sections: Array<{ id: string; label: string }>
}>()
</script>

<style scoped>
.model-chapter-nav {
  position: sticky;
  top: 84px;
  z-index: 20;
  border-bottom: 1px solid rgba(14, 18, 24, 0.08);
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(18px);
}

.model-chapter-nav-inner {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 14px 0;
}

.model-chapter-nav-inner::-webkit-scrollbar {
  display: none;
}

.model-chapter-link {
  flex: 0 0 auto;
  padding: 10px 18px;
  border-radius: 999px;
  border: 1px solid rgba(14, 18, 24, 0.08);
  color: #34404d;
  font-size: 0.92rem;
  white-space: nowrap;
  transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.model-chapter-link:hover {
  border-color: rgba(197, 156, 98, 0.5);
  color: #101720;
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .model-chapter-nav {
    top: 72px;
  }
}
</style>
