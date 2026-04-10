<template>
  <div class="purchasingDetail" data-v-cd777a50>
    <div class="html" data-v-cd777a50>
      <div data-v-cd777a50>
        <div class="banner" data-v-76e57b75>
        <h2>{{ textFor(page.title) }}</h2>
        <span class="time">{{ publishLabel }}</span>
        </div>
        <div class="pContent" data-v-76e57b75>
          <div class="content" data-v-76e57b75>
            <p v-for="(block, index) in page.blocks" :key="`${page.slug}-txt-${index}`" class="text-list">
              {{ index + 1 }}. {{ textFor(block.title) }} — {{ textFor(block.body) }}
            </p>

            <div class="tableUl">
              <div class="tableLine">
                <p class="p1">Item</p>
                <p class="p2">Type</p>
                <p class="p3">Status</p>
                <p class="p4">Note</p>
              </div>
              <div v-for="(block, index) in page.blocks" :key="`${page.slug}-line-${index}`" class="tableLine">
                <p class="p1">{{ textFor(block.title) }}</p>
                <p class="p2">Disclosure</p>
                <p class="p3">Published</p>
                <p class="p4">{{ textFor(block.body) }}</p>
              </div>
            </div>
            <p class="buttom-text">{{ textFor(page.summary) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InfoDefinition, LocalizedText } from '~/data/site'

defineProps<{
  page: InfoDefinition
  textFor: (value: LocalizedText) => string
}>()

const publishLabel = new Date().toISOString().slice(0, 10)
</script>
