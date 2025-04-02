<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Welcome to Nuxt 3
        </h1>
        <p
          class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
        >
          Get started by editing
        </p>

        <BaseButton size="xs" class="mt-4" variant="primary" @click="reload">Reload</BaseButton>
        <BaseButton size="xs" class="mt-4" variant="secondary" @click="reload">Secondary</BaseButton>
        <BaseButton size="xs" class="mt-4" variant="gray" @click="reload">Gray</BaseButton>
        <BaseButton size="xs" class="mt-4" variant="danger" @click="reload">Danger</BaseButton>
        <BaseButton size="xs" class="mt-4" variant="white" @click="reload">White</BaseButton>
        <BaseButton size="xs" class="mt-4" variant="link" @click="reload">Link</BaseButton>

        <BaseButton size="sm" class="mt-4" variant="primary" @click="reload">Reload</BaseButton>
        <BaseButton size="sm" class="mt-4" variant="secondary" @click="reload">Secondary</BaseButton>
        <BaseButton size="sm" class="mt-4" variant="gray" @click="reload">Gray</BaseButton>
        <BaseButton size="sm" class="mt-4" variant="danger" @click="reload">Danger</BaseButton>
        <BaseButton size="sm" class="mt-4" variant="white" @click="reload">White</BaseButton>
        <BaseButton size="sm" class="mt-4" variant="link" @click="reload">Link</BaseButton>

        <BaseButton class="mt-4" variant="primary" @click="reload">Reload</BaseButton>
        <BaseButton class="mt-4" variant="secondary" @click="reload">Secondary</BaseButton>
        <BaseButton class="mt-4" variant="gray" @click="reload">Gray</BaseButton>
        <BaseButton class="mt-4" variant="danger" @click="reload">Danger</BaseButton>
        <BaseButton class="mt-4" variant="white" @click="reload">White</BaseButton>
        <BaseButton class="mt-4" variant="link" @click="reload">Link</BaseButton>

        <BaseButton size="lg" class="mt-4" variant="primary" @click="reload">Reload</BaseButton>
        <BaseButton size="lg" class="mt-4" variant="secondary" @click="reload">Secondary</BaseButton>
        <BaseButton size="lg" class="mt-4" variant="gray" @click="reload">Gray</BaseButton>
        <BaseButton size="lg" class="mt-4" variant="danger" @click="reload">Danger</BaseButton>
        <BaseButton size="lg" class="mt-4" variant="white" @click="reload">White</BaseButton>
        <BaseButton size="lg" class="mt-4" variant="link" @click="reload">Link</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const reload = () => {
  window.location.reload()
}
</script>
