<template>
  <nav class="titan-x8-rail">
    <div class="container">
      <ul class="titan-x8-rail-list">
        <li v-for="(chapter, i) in chapters" :key="chapter.id" class="titan-x8-rail-item">
          <button class="titan-x8-rail-button" @click="scrollToChapter(chapter.id)">
            <span class="titan-x8-rail-number">0{{ i + 1 }}</span>
            <span class="titan-x8-rail-label">{{ $t(`pages.titan_X8.sections.chapter_${i+1}.title`) }}</span>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
const chapters = [
  { id: 'performance' },
  { id: 'cockpit' },
  { id: 'safety' }
]

const scrollToChapter = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.titan-x8-rail {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(16, 23, 32, 0.08);
  padding: 16px 0;
}

.titan-x8-rail-list {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 32px;
  overflow-x: auto;
  scrollbar-width: none;
}

.titan-x8-rail-list::-webkit-scrollbar {
  display: none;
}

.titan-x8-rail-item {
  flex: 0 0 auto;
}

.titan-x8-rail-button {
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #101720;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.titan-x8-rail-button:hover {
  opacity: 1;
}

.titan-x8-rail-number {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.titan-x8-rail-label {
  font-size: 0.85rem;
  letter-spacing: 0.02em;
}

@media (max-width: 768px) {
  .titan-x8-rail-list {
    gap: 20px;
  }
}
</style>
