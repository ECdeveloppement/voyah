<template>
  <div :class="rootClass" v-bind="scopeBind">
    <div :class="`${prefix}-header`" v-bind="scopeBind">
      <h3 v-bind="scopeBind">{{ textFor(page.title) }}</h3>
      <p v-bind="scopeBind">{{ textFor(page.summary) }}</p>
    </div>

    <section :class="`${prefix}-storestandard`" v-bind="scopeBind">
      <h4 :class="`${prefix}-storestandard__title`" v-bind="scopeBind">{{ sectionTitles.standard }}</h4>
      <div :class="`${prefix}-storestandard__content`" v-bind="scopeBind">
        <table :class="`${prefix}-storestandard__table`" v-bind="scopeBind">
          <thead>
            <tr>
              <th v-bind="scopeBind">{{ sectionTitles.topic }}</th>
              <th v-bind="scopeBind">{{ sectionTitles.detail }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(block, index) in page.blocks" :key="`${page.slug}-std-${index}`">
              <td v-bind="scopeBind">{{ textFor(block.title) }}</td>
              <td v-bind="scopeBind">{{ textFor(block.body) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section :class="`${prefix}-applyprocedure`" v-bind="scopeBind">
      <h4 :class="`${prefix}-applyprocedure__title`" v-bind="scopeBind">{{ sectionTitles.procedure }}</h4>
      <div :class="`${prefix}-applyprocedure__list`" v-bind="scopeBind">
        <div
          v-for="(block, index) in page.blocks"
          :key="`${page.slug}-proc-${index}`"
          :class="`${prefix}-applyprocedure__item`"
          v-bind="scopeBind"
        >
          <div class="left-container left-container-w768" v-bind="scopeBind">
            <img
              :class="`${prefix}-applyprocedure__item-icon`"
              v-bind="scopeBind"
              :src="block.image"
              :alt="textFor(block.title)"
            />
            <div>
              <p :class="`${prefix}-applyprocedure__item-step`" v-bind="scopeBind">
                STEP {{ `${index + 1}`.padStart(2, '0') }}
              </p>
              <p :class="`${prefix}-applyprocedure__item-name`" v-bind="scopeBind">
                {{ textFor(block.title) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section :class="`${prefix}-contactway`" v-bind="scopeBind">
      <h4 :class="`${prefix}-contactway__title`" v-bind="scopeBind">{{ sectionTitles.contact }}</h4>
      <ul :class="`${prefix}-contactway__list`" v-bind="scopeBind">
        <li :class="`${prefix}-contactway__item`" v-bind="scopeBind">
          {{ textFor(page.title) }} - support@voyah.com.cn
        </li>
        <li :class="`${prefix}-contactway__item`" v-bind="scopeBind">
          Hotline: 400-000-0000
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { InfoDefinition, LocalizedText } from '~/data/site'

const props = defineProps<{
  page: InfoDefinition
  prefix: 'boutique-center' | 'userser' | 'supercharger-partner'
  rootClass: string
  scopeAttr: string
  textFor: (value: LocalizedText) => string
  sectionTitles: {
    standard: string
    procedure: string
    contact: string
    topic: string
    detail: string
  }
}>()

const scopeBind = computed(() => ({ [`data-v-${props.scopeAttr}`]: '' }))
</script>
