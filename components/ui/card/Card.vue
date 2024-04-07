<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-lg bg-card text-card-foreground animation border border-transparent transition-colors hover:border-[#FFFFF] px-1',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>

<style scoped>
@keyframes show {
	from {
		@apply border-[#FFFFF];
		transform: scale(0.5) translateY(-30px);
		opacity: 0.4;
	}
	
	90% {
		@apply border-[#FFFFF];
	}
	
	to {
		@apply border-transparent;
		transform: scale(1) translateY(0);
		opacity: 1;
	}
}

.animation {
	animation: show 0.3s ease-in-out;
}
</style>
