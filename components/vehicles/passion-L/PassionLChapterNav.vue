<template>
  <nav class="passion-rail">
    <div class="container">
      <ul class="passion-rail-list">
        <li v-for="(chapter, i) in chapters" :key="chapter.id" class="passion-rail-item">
          <button class="passion-rail-button" @click="scrollToChapter(chapter.id)">
            <span class="passion-rail-number">0{{ i + 1 }}</span>
            <span class="passion-rail-label">{{ $t(`pages.passion_l.sections.chapter_${i+1}.title`) }}</span>
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
  { id: 'chapter-4' },
  { id: 'chapter-5' },
  { id: 'chapter-6' },
  { id: 'chapter-7' }
]

const scrollToChapter = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.passion-rail {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(16, 23, 32, 0.08);
  padding: 16px 0;
}

.passion-rail-list {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 32px;
  overflow-x: auto;
  scrollbar-width: none;
}

.passion-rail-list::-webkit-scrollbar {
  display: none;
}

.passion-rail-item {
  flex: 0 0 auto;
}

.passion-rail-button {
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

.passion-rail-button:hover {
  opacity: 1;
}

.passion-rail-number {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.passion-rail-label {
  font-size: 0.85rem;
  letter-spacing: 0.02em;
}

@media (max-width: 768px) {
  .passion-rail-list {
    gap: 20px;
  }
}
</style>
