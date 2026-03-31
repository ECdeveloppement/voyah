<template>
  <NuxtLink v-if="to" :to="to" :class="['base-button', variant]">
    <slot />
  </NuxtLink>
  <button v-else :type="type" :class="['base-button', variant]" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    to?: string
    variant?: 'primary' | 'secondary'
    type?: 'button' | 'submit'
  }>(),
  {
    variant: 'primary',
    type: 'button'
  }
)

defineEmits<{
  click: []
}>()
</script>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>
