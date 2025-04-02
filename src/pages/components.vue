<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Components
        </h1>
        <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Get started by editing
        </p>

        <BaseButton class="mt-4" @click="reload">Reload</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const reload = () => {
  window.location.reload()
}
</script>
