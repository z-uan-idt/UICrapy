<script setup lang="ts">
interface Props {
  variant?: 'solid' | 'soft' | 'outlined' | 'plain'
  color?: 'red' | 'pink' | 'purple' | 'blue' | 'cyan' | 'teal' | 'green'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  loadingPosition?: 'center' | 'start' | 'end'
  loadingIndicator?: string
  startDecorator?: any
  endDecorator?: any
  component?: string
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'solid',
  color: 'blue',
  size: 'md',
  disabled: false,
  loading: false,
  loadingPosition: 'center',
  loadingIndicator: undefined,
  startDecorator: undefined,
  endDecorator: undefined,
  component: 'button',
  type: 'button'
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const sizeStyles = {
  sm: 'px-2.5 py-1.5 text-sm',
  md: 'px-3 py-2 text-base',
  lg: 'px-4 py-2.5 text-lg'
}

const colorStyles = {
  red: {
    solid: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800',
    soft: 'bg-red-50 text-red-600 hover:bg-red-100 active:bg-red-200',
    outlined: 'border border-red-600 text-red-600 hover:bg-red-50 active:bg-red-100',
    plain: 'text-red-600 hover:bg-red-50 active:bg-red-100'
  },
  pink: {
    solid: 'bg-pink-600 text-white hover:bg-pink-700 active:bg-pink-800',
    soft: 'bg-pink-50 text-pink-600 hover:bg-pink-100 active:bg-pink-200',
    outlined: 'border border-pink-600 text-pink-600 hover:bg-pink-50 active:bg-pink-100',
    plain: 'text-pink-600 hover:bg-pink-50 active:bg-pink-100'
  },
  purple: {
    solid: 'bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800',
    soft: 'bg-purple-50 text-purple-600 hover:bg-purple-100 active:bg-purple-200',
    outlined: 'border border-purple-600 text-purple-600 hover:bg-purple-50 active:bg-purple-100',
    plain: 'text-purple-600 hover:bg-purple-50 active:bg-purple-100'
  },
  blue: {
    solid: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
    soft: 'bg-blue-50 text-blue-600 hover:bg-blue-100 active:bg-blue-200',
    outlined: 'border border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100',
    plain: 'text-blue-600 hover:bg-blue-50 active:bg-blue-100'
  },
  cyan: {
    solid: 'bg-cyan-600 text-white hover:bg-cyan-700 active:bg-cyan-800',
    soft: 'bg-cyan-50 text-cyan-600 hover:bg-cyan-100 active:bg-cyan-200',
    outlined: 'border border-cyan-600 text-cyan-600 hover:bg-cyan-50 active:bg-cyan-100',
    plain: 'text-cyan-600 hover:bg-cyan-50 active:bg-cyan-100'
  },
  teal: {
    solid: 'bg-teal-600 text-white hover:bg-teal-700 active:bg-teal-800',
    soft: 'bg-teal-50 text-teal-600 hover:bg-teal-100 active:bg-teal-200',
    outlined: 'border border-teal-600 text-teal-600 hover:bg-teal-50 active:bg-teal-100',
    plain: 'text-teal-600 hover:bg-teal-50 active:bg-teal-100'
  },
  green: {
    solid: 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800',
    soft: 'bg-green-50 text-green-600 hover:bg-green-100 active:bg-green-200',
    outlined: 'border border-green-600 text-green-600 hover:bg-green-50 active:bg-green-100',
    plain: 'text-green-600 hover:bg-green-50 active:bg-green-100'
  }
}

const disabledStyles = 'opacity-50 cursor-not-allowed pointer-events-none'

const computedClasses = computed(() => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none'
  const sizeClass = sizeStyles[props.size]
  const colorClass = colorStyles[props.color][props.variant]
  const disabledClass = (props.disabled || props.loading) ? disabledStyles : ''
  const gapClass = (props.startDecorator || props.endDecorator) ? 'gap-1' : ''

  return `${baseClasses} ${sizeClass} ${colorClass} ${disabledClass} ${gapClass}`
})

const handleClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) return
  emit('click', event)
}
</script>

<template>
  <component
    :is="component"
    :type="type"
    :class="computedClasses"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <template v-if="loading">
      <template v-if="loadingPosition === 'start'">
        <div class="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
      </template>
      <template v-else-if="loadingPosition === 'end'">
        <div class="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
      </template>
      <template v-else>
        <div class="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
      </template>
    </template>

    <template v-else>
      <template v-if="startDecorator">
        <component :is="startDecorator" class="shrink-0" />
      </template>
      <slot />
      <template v-if="endDecorator">
        <component :is="endDecorator" class="shrink-0" />
      </template>
    </template>
  </component>
</template> 