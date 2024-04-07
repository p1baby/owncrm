<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('p-3 pt-0 text-xs opacity-70 italic', props.class)">
    <slot />
  </div>
</template>
