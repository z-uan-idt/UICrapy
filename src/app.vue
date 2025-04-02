<template>
  <BaseSkeleton :loading="isLoading">
    <div class="min-h-screen bg-gray-50">
      <!-- Header -->
      <header class="bg-white shadow-sm">
        <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 justify-between items-center">
            <div class="flex items-center">
              <NuxtLink to="/" class="text-xl font-bold text-primary font-inter">
                UI Crapy
              </NuxtLink>
            </div>
            <div class="flex items-center space-x-4">
              <NuxtLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                class="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium font-inter"
                :class="{ 'text-primary': $route.path === item.href }"
              >
                {{ item.name }}
              </NuxtLink>
            </div>
          </div>
        </nav>
      </header>

      <!-- Main Content -->
      <main class="font-roboto">
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <NuxtPage />
        </div>
      </main>

      <!-- Footer -->
      <footer class="bg-white border-t">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div class="text-center text-sm text-gray-500 font-inter">
            © {{ new Date().getFullYear() }} UI Crapy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  </BaseSkeleton>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useLoading } from '@/composables/useLoading'

interface NavigationItem {
  name: string
  href: string
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Components', href: '/components' },
  { name: 'Documentation', href: '/docs' },
]

const { isLoading, stopLoading } = useLoading(true)

const waitForContentLoaded = () => {
  return new Promise((resolve) => {
    if (document.readyState === 'complete') {
      resolve(void 0)
    } else {
      window.addEventListener('load', resolve)
    }
  })
}

const waitForFontsLoaded = async () => {
  await Promise.all([document.fonts.ready, waitForContentLoaded()])

  setTimeout(() => {
    stopLoading()
  }, 1000)
}

watch(() => useRoute().path, waitForFontsLoaded)

onMounted(waitForFontsLoaded)
</script>
