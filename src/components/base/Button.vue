<template>
  <button
    :class="[
      'inline-flex items-center justify-center gap-2 transition-all duration-200',
      'focus:outline-none',
      'last:mr-0 mr-2',
      sizeClasses[size],
      variantClasses[variant],
      roundedClasses[rounded],
      {
        'opacity-50 cursor-not-allowed': disabled,
        'cursor-wait': loading,
      },
      className
    ]"
    :disabled="disabled || loading"
    v-bind="$attrs"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
    @focus="handleFocus"
    @blur="handleBlur"
    @keydown.enter="handleKeyEnter"
    @keydown.space="handleKeySpace"
    @contextmenu="handleContextMenu"
    @dblclick="handleDoubleClick"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
    @touchmove="handleTouchMove"
    @touchcancel="handleTouchCancel"
  >
    <div v-if="loading" class="animate-spin">
      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
    </div>

    <component
      v-if="startIcon && !loading"
      :is="startIcon"
      :class="iconClasses[size]"
    />

    <span :class="{ 'opacity-0': loading }">
      <slot>{{ text }}</slot>
    </span>

    <component
      v-if="endIcon && !loading"
      :is="endIcon"
      :class="iconClasses[size]"
    />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'gray' | 'danger' | 'white' | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  startIcon?: any
  endIcon?: any
  text?: string
  disabled?: boolean
  loading?: boolean
  className?: string
  ripple?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  rounded: 'md',
  disabled: false,
  loading: false,
  className: '',
  ripple: true
})

const emit = defineEmits<{
  click: [event: MouseEvent]
  mouseenter: [event: MouseEvent]
  mouseleave: [event: MouseEvent]
  mousedown: [event: MouseEvent]
  mouseup: [event: MouseEvent]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
  keydown: [event: KeyboardEvent]
  contextmenu: [event: MouseEvent]
  dblclick: [event: MouseEvent]
  touchstart: [event: TouchEvent]
  touchend: [event: TouchEvent]
  touchmove: [event: TouchEvent]
  touchcancel: [event: TouchEvent]
}>()

const sizeClasses = {
  xs: 'px-2.5 py-1 text-xs',
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm sm:text-base',
  lg: 'px-6 py-3 text-base sm:text-lg'
}

const iconClasses = {
  xs: 'w-3.5 h-3.5',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6'
}

const roundedClasses = {
  none: 'rounded-none',
  sm: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full'
}

const variantClasses = {
  primary: `
    bg-[#0866FF] hover:bg-[#0859D9]
    text-white
    shadow-sm
  `,
  secondary: `
    bg-[#E4E6EB] hover:bg-[#D8DADF]
    text-[#050505]
  `,
  gray: `
    bg-[#F0F2F5] hover:bg-[#E4E6EB]
    text-[#050505]
  `,
  danger: `
    bg-[#DC3545] hover:bg-[#C82333]
    text-white
  `,
  white: `
    bg-white hover:bg-[#F0F2F5]
    text-[#050505]
    border border-[#CED0D4]
  `,
  link: `
    bg-transparent
    text-[#0866FF] hover:text-[#0859D9]
    hover:underline
  `
}

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}

const handleMouseEnter = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('mouseenter', event)
  }
}

const handleMouseLeave = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('mouseleave', event)
  }
}

const handleMouseDown = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('mousedown', event)
  }
}

const handleMouseUp = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('mouseup', event)
  }
}

const handleFocus = (event: FocusEvent) => {
  if (!props.disabled && !props.loading) {
    emit('focus', event)
  }
}

const handleBlur = (event: FocusEvent) => {
  if (!props.disabled && !props.loading) {
    emit('blur', event)
  }
}

const handleKeyEnter = (event: KeyboardEvent) => {
  if (!props.disabled && !props.loading) {
    emit('keydown', event)
  }
}

const handleKeySpace = (event: KeyboardEvent) => {
  if (!props.disabled && !props.loading) {
    emit('keydown', event)
  }
}

const handleContextMenu = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('contextmenu', event)
  }
}

const handleDoubleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('dblclick', event)
  }
}

const handleTouchStart = (event: TouchEvent) => {
  if (!props.disabled && !props.loading) {
    emit('touchstart', event)
  }
}

const handleTouchEnd = (event: TouchEvent) => {
  if (!props.disabled && !props.loading) {
    emit('touchend', event)
  }
}

const handleTouchMove = (event: TouchEvent) => {
  if (!props.disabled && !props.loading) {
    emit('touchmove', event)
  }
}

const handleTouchCancel = (event: TouchEvent) => {
  if (!props.disabled && !props.loading) {
    emit('touchcancel', event)
  }
}
</script>
