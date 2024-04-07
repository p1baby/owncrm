<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('flex flex-col space-y-1.5 p-3 text-xl font-bold', props.class)">
    <slot />
  </div>
</template>
