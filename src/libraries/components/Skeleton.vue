<template>
  <div
    ref="container"
    class="relative"
    :class="{
      'pointer-events-none': loading,
      'select-none': loading,
    }"
  >
    <div
      ref="content"
      class="relative"
      :class="{
        invisible: loading && !isAnalyzed,
      }"
    >
      <slot></slot>
      <div v-if="loading" class="absolute inset-0">
        <div
          v-for="(item, index) in skeletonItems"
          :key="index"
          class="absolute bg-gray-100"
          :style="{
            top: `${item.top}px`,
            left: `${item.left}px`,
            width: `${item.width}px`,
            height: `${item.height}px`,
          }"
        >
          <div class="absolute animate-pulse bg-gray-300 w-full h-full rounded"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick, onUnmounted } from 'vue'

const props = defineProps({
  loading: Boolean,
  debug: Boolean,
})

const container = ref(null)
const content = ref(null)
const skeletonItems = ref([])
const isAnalyzed = ref(false)

const analyzeLayout = async () => {
  if (!content.value || !container.value) return

  await nextTick()

  const items = []
  const containerRect = container.value.getBoundingClientRect()

  const elements = content.value.querySelectorAll(
    'button, .btn, [role="button"], [type="button"], *:not(button):not(script):not(style)'
  )

  elements.forEach((element) => {
    // if (
    //   element.tagName.toLowerCase() === 'button' ||
    //   element.classList.contains('btn') ||
    //   element.getAttribute('role') === 'button' ||
    //   element.getAttribute('type') === 'button'
    // ) {
    //   const rect = element.getBoundingClientRect()
    //   items.push({
    //     top: rect.top - containerRect.top,
    //     left: rect.left - containerRect.left,
    //     width: rect.width,
    //     height: rect.height,
    //   })
    //   return
    // }

    const textNodes = Array.from(element.childNodes).filter(
      (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim()
    )

    textNodes.forEach((node) => {
      const range = document.createRange()
      range.selectNodeContents(node)
      const rects = range.getClientRects()

      for (let rect of rects) {
        if (rect.width > 0 && rect.height > 0) {
          items.push({
            top: rect.top - containerRect.top,
            left: rect.left - containerRect.left,
            width: rect.width,
            height: rect.height,
          })
        }
      }
    })
  })

  skeletonItems.value = items
  isAnalyzed.value = true
}

onMounted(async () => {
  await analyzeLayout()

  if (typeof ResizeObserver !== 'undefined') {
    const resizeObserver = new ResizeObserver(async () => {
      await analyzeLayout()
    })

    resizeObserver.observe(container.value)

    onUnmounted(() => {
      resizeObserver.disconnect()
    })
  }
})

watch(
  () => props.loading,
  async (newVal) => {
    if (newVal) {
      isAnalyzed.value = false
      await analyzeLayout()
    }
  }
)
</script>
