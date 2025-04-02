<template>
  <div
    :class="[
      'rounded-lg overflow-hidden',
      variantClasses[variant],
      { 'shadow-lg': elevated }
    ]"
  >
    <div v-if="$slots.header" class="px-6 py-4 border-b border-gray-200">
      <slot name="header"></slot>
    </div>
    <div class="px-6 py-4">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="px-6 py-4 border-t border-gray-200">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'default' | 'bordered' | 'flat'
  elevated?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  elevated: false
})

const variantClasses = {
  default: 'bg-white',
  bordered: 'bg-white border border-gray-200',
  flat: 'bg-gray-50'
}
</script> 