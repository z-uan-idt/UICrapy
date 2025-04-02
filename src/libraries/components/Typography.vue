<script setup lang="ts">
interface Props {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'title-lg' | 'title-md' | 'title-sm' | 'body-lg' | 'body-md' | 'body-sm' | 'body-xs'
  component?: string
  color?: 'red' | 'pink' | 'purple' | 'blue' | 'cyan' | 'teal' | 'green' | 'lime' | 'yellow' | 'orange' | 'brown' | 'gray'
  variant?: 'plain' | 'outlined' | 'soft' | 'solid'
  noWrap?: boolean
  startDecorator?: any
  endDecorator?: any
}

const props = withDefaults(defineProps<Props>(), {
  level: 'body-md',
  component: undefined,
  noWrap: false,
  startDecorator: undefined,
  endDecorator: undefined
})

const levelStyles = {
  h1: 'text-4xl font-bold tracking-tight',
  h2: 'text-3xl font-bold tracking-tight',
  h3: 'text-2xl font-bold tracking-tight',
  h4: 'text-xl font-bold tracking-tight',
  'title-lg': 'text-xl font-semibold',
  'title-md': 'text-lg font-semibold',
  'title-sm': 'text-base font-semibold',
  'body-lg': 'text-lg',
  'body-md': 'text-base',
  'body-sm': 'text-sm',
  'body-xs': 'text-xs'
}

const colorStyles = {
  red: {
    plain: 'text-red-600',
    outlined: 'text-red-600 border border-red-600',
    soft: 'text-red-600 bg-red-50',
    solid: 'text-white bg-red-600'
  },
  pink: {
    plain: 'text-pink-600',
    outlined: 'text-pink-600 border border-pink-600',
    soft: 'text-pink-600 bg-pink-50',
    solid: 'text-white bg-pink-600'
  },
  purple: {
    plain: 'text-purple-600',
    outlined: 'text-purple-600 border border-purple-600',
    soft: 'text-purple-600 bg-purple-50',
    solid: 'text-white bg-purple-600'
  },
  blue: {
    plain: 'text-blue-600',
    outlined: 'text-blue-600 border border-blue-600',
    soft: 'text-blue-600 bg-blue-50',
    solid: 'text-white bg-blue-600'
  },
  cyan: {
    plain: 'text-cyan-600',
    outlined: 'text-cyan-600 border border-cyan-600',
    soft: 'text-cyan-600 bg-cyan-50',
    solid: 'text-white bg-cyan-600'
  },
  teal: {
    plain: 'text-teal-600',
    outlined: 'text-teal-600 border border-teal-600',
    soft: 'text-teal-600 bg-teal-50',
    solid: 'text-white bg-teal-600'
  },
  green: {
    plain: 'text-green-600',
    outlined: 'text-green-600 border border-green-600',
    soft: 'text-green-600 bg-green-50',
    solid: 'text-white bg-green-600'
  },
  lime: {
    plain: 'text-lime-600',
    outlined: 'text-lime-600 border border-lime-600',
    soft: 'text-lime-600 bg-lime-50',
    solid: 'text-white bg-lime-600'
  },
  yellow: {
    plain: 'text-yellow-600',
    outlined: 'text-yellow-600 border border-yellow-600',
    soft: 'text-yellow-600 bg-yellow-50',
    solid: 'text-white bg-yellow-600'
  },
  orange: {
    plain: 'text-orange-600',
    outlined: 'text-orange-600 border border-orange-600',
    soft: 'text-orange-600 bg-orange-50',
    solid: 'text-white bg-orange-600'
  },
  brown: {
    plain: 'text-brown-600',
    outlined: 'text-brown-600 border border-brown-600',
    soft: 'text-brown-600 bg-brown-50',
    solid: 'text-white bg-brown-600'
  },
  gray: {
    plain: 'text-gray-600',
    outlined: 'text-gray-600 border border-gray-600',
    soft: 'text-gray-600 bg-gray-50',
    solid: 'text-white bg-gray-600'
  }
}

const computedClasses = computed(() => {
  const baseClasses = 'font-sans'
  const levelClass = levelStyles[props.level]
  const colorClass = props.color && props.variant ? colorStyles[props.color][props.variant] : ''
  const noWrapClass = props.noWrap ? 'whitespace-nowrap' : ''
  const decoratorClass = (props.startDecorator || props.endDecorator) ? 'inline-flex items-center gap-1' : ''

  return `${baseClasses} ${levelClass} ${colorClass} ${noWrapClass} ${decoratorClass}`
})

const computedComponent = computed(() => {
  if (props.component) return props.component
  
  const componentMap: Record<string, string> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    'title-lg': 'p',
    'title-md': 'p',
    'title-sm': 'p',
    'body-lg': 'p',
    'body-md': 'p',
    'body-sm': 'p',
    'body-xs': 'span'
  }
  
  return componentMap[props.level] || 'p'
})
</script>

<template>
  <ClientOnly>
    <component
      :is="computedComponent"
      :class="computedClasses"
    >
      <template v-if="startDecorator">
        <component :is="startDecorator" class="shrink-0" />
      </template>
      <slot />
      <template v-if="endDecorator">
        <component :is="endDecorator" class="shrink-0" />
      </template>
    </component>
  </ClientOnly>
</template> 