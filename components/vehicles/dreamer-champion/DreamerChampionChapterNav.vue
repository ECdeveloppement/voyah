<template>
  <nav class="dreamer-champion-rail">
    <div class="container">
      <ul class="dreamer-champion-rail-list">
        <li v-for="(chapter, i) in chapters" :key="chapter.id" class="dreamer-champion-rail-item">
          <button class="dreamer-champion-rail-button" @click="scrollToChapter(chapter.id)">
            <span class="dreamer-champion-rail-number">0{{ i + 1 }}</span>
            <span class="dreamer-champion-rail-label">{{ $t(`pages.dreamer_champion.sections.chapter_${i+1}.title`) }}</span>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
const chapters = [
  { id: 'chapter-1' },
  { id: 'chapter-2' },
  { id: 'chapter-3' },
  { id: 'chapter-4' }
]

const scrollToChapter = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.dreamer-champion-rail {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(16, 23, 32, 0.08);
  padding: 16px 0;
}

.dreamer-champion-rail-list {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 32px;
  overflow-x: auto;
  scrollbar-width: none;
}

.dreamer-champion-rail-list::-webkit-scrollbar {
  display: none;
}

.dreamer-champion-rail-item {
  flex: 0 0 auto;
}

.dreamer-champion-rail-button {
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

.dreamer-champion-rail-button:hover {
  opacity: 1;
}

.dreamer-champion-rail-number {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.dreamer-champion-rail-label {
  font-size: 0.85rem;
  letter-spacing: 0.02em;
}

@media (max-width: 768px) {
  .dreamer-champion-rail-list {
    gap: 20px;
  }
}
</style>
