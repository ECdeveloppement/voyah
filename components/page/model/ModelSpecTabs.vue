<template>
  <div class="spec-tabs">
    <div v-if="!isMobile" class="spec-tabs__panel">
      <div role="tablist" :aria-label="listLabel" class="spec-tabs__list">
        <button
          v-for="tab in tabs"
          :id="`tab-${uid}-${tab.id}`"
          :key="tab.id"
          :aria-selected="selected === tab.id"
          :tabindex="selected === tab.id ? 0 : -1"
          :aria-controls="`tabpanel-${uid}-${tab.id}`"
          :class="{ 'is-active': selected === tab.id }"
          class="spec-tabs__tab"
          type="button"
          role="tab"
          @click="selected = tab.id"
          @keydown.right.prevent="move(1)"
          @keydown.left.prevent="move(-1)"
        >
          {{ textFor(tab.label) }}
        </button>
      </div>

      <div class="spec-tabs__body">
        <div
          v-for="tab in tabs"
          :id="`tabpanel-${uid}-${tab.id}`"
          v-show="selected === tab.id"
          :key="tab.id"
          role="tabpanel"
          :aria-labelledby="`tab-${uid}-${tab.id}`"
          class="spec-tabs__group"
        >
          <b class="spec-tabs__group-title">{{ textFor(tab.label) }}</b>
          <ul class="spec-tabs__rows">
            <li v-for="row in tab.rows" :key="row.name.en" class="spec-tabs__row">
              <span>{{ textFor(row.name) }}</span>
              <span class="spec-tabs__value">{{ textFor(row.value) }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div v-else class="spec-tabs__accordion">
      <div v-for="tab in tabs" :key="tab.id" class="spec-tabs__cell">
        <button
          :aria-expanded="expanded === tab.id"
          class="spec-tabs__question"
          type="button"
          @click="expanded = expanded === tab.id ? '' : tab.id"
        >
          <span>{{ textFor(tab.label) }}</span>
          <span aria-hidden="true" :class="{ 'is-open': expanded === tab.id }" class="spec-tabs__caret">
            +
          </span>
        </button>
        <ul v-show="expanded === tab.id" class="spec-tabs__rows spec-tabs__rows--nested">
          <li v-for="row in tab.rows" :key="row.name.en" class="spec-tabs__row">
            <span>{{ textFor(row.name) }}</span>
            <span class="spec-tabs__value">{{ textFor(row.value) }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ModelSpecTab } from '~/data/modelPages'
import { useSiteContent } from '~/composables/useSiteContent'

const props = withDefaults(defineProps<{ tabs: ModelSpecTab[]; listLabel?: string }>(), {
  listLabel: 'Caractéristiques'
})

const { textFor } = useSiteContent()

const uid = Math.random().toString(36).slice(2, 8)
const selected = ref(props.tabs[0]?.id ?? '')
const expanded = ref('')
const isMobile = ref(false)

const move = (offset: number) => {
  const index = props.tabs.findIndex((tab) => tab.id === selected.value)
  if (index < 0) return
  const next = (index + offset + props.tabs.length) % props.tabs.length
  selected.value = props.tabs[next].id
  document.getElementById(`tab-${uid}-${props.tabs[next].id}`)?.focus()
}

const syncViewport = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  syncViewport()
  window.addEventListener('resize', syncViewport)
})

onUnmounted(() => {
  window.removeEventListener('resize', syncViewport)
})
</script>

<style scoped>
/* Onglets du tableau de caractéristiques : reprise du motif du site de référence. */
.spec-tabs__list {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  border-bottom: 1px solid #d4d4d4;
}

.spec-tabs__tab {
  height: min-content;
  padding: 8px 16px;
  border: 0;
  background: none;
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 500;
  color: #525252;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.spec-tabs__tab:hover {
  color: #171717;
  border-bottom: 2px solid #262626;
}

.spec-tabs__tab.is-active {
  color: #000000;
  font-weight: 700;
  border-bottom: 2px solid #000000;
}

.spec-tabs__body {
  padding: 16px 8px;
  color: #525252;
}

.spec-tabs__group-title {
  display: block;
  margin-bottom: 8px;
  color: #525252;
  font-size: 1rem;
  line-height: 1.5rem;
}

.spec-tabs__rows {
  margin: 0;
  padding: 0;
  list-style: none;
}

.spec-tabs__rows--nested {
  padding: 4px 16px 16px;
}

.spec-tabs__row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 24px;
  padding: 4px 0;
  border-bottom: 1px solid #d4d4d4;
  font-size: 1rem;
  line-height: 1.5rem;
}

.spec-tabs__value {
  font-weight: 600;
  text-align: end;
}

.spec-tabs__accordion {
  border: 1px solid #d4d4d4;
  border-radius: 8px;
  overflow: hidden;
}

.spec-tabs__cell + .spec-tabs__cell {
  border-top: 1px solid #d4d4d4;
}

.spec-tabs__question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 14px 16px;
  border: 0;
  background: none;
  font-family: inherit;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--heading);
  cursor: pointer;
}

.spec-tabs__caret {
  font-size: 1.125rem;
  font-weight: 400;
  color: var(--text-soft);
  transition: transform 0.2s ease;
}

.spec-tabs__caret.is-open {
  transform: rotate(45deg);
}
</style>
