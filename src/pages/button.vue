<script setup lang="ts">
const colors: ('red' | 'pink' | 'purple' | 'blue' | 'cyan' | 'teal' | 'green')[] = ['red', 'pink', 'purple', 'blue', 'cyan', 'teal', 'green']
const sizes: ('sm' | 'md' | 'lg')[] = ['sm', 'md', 'lg']

const handleClick = () => {
  console.log('Button clicked!')
}
</script>

<template>
  <div class="container mx-auto space-y-4">
    <section class="space-y-4">
      <h2 class="text-2xl font-bold mb-4">Basic States</h2>
      <div class="flex flex-wrap gap-4">
        <CuiButton @click="handleClick">Button</CuiButton>
        <CuiButton disabled>Disabled</CuiButton>
        <CuiButton loading>Loading</CuiButton>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl font-bold mb-4">Variants</h2>
      <div class="flex flex-wrap gap-4">
        <CuiButton variant="solid">Solid</CuiButton>
        <CuiButton variant="soft">Soft</CuiButton>
        <CuiButton variant="outlined">Outlined</CuiButton>
        <CuiButton variant="plain">Plain</CuiButton>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl font-bold mb-4">Sizes</h2>
      <div class="flex flex-wrap items-center gap-4">
        <CuiButton size="sm">Small</CuiButton>
        <CuiButton size="md">Medium</CuiButton>
        <CuiButton size="lg">Large</CuiButton>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl font-bold mb-4">Colors</h2>
      <div class="space-y-4">
        <div v-for="color in colors" :key="color" class="space-y-2">
          <h3 class="text-lg font-semibold">{{ color }}</h3>
          <div class="space-x-4">
            <template v-for="(size, index) in sizes" :key="index">
              <CuiButton :color="color" :size="size" variant="solid">Solid</CuiButton>
              <CuiButton :color="color" :size="size" variant="soft">Soft</CuiButton>
              <CuiButton :color="color" :size="size" variant="outlined">Outlined</CuiButton>
              <CuiButton :color="color" :size="size" variant="plain">Plain</CuiButton>
            </template>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl font-bold mb-4">With Decorators</h2>
      <div class="flex flex-wrap gap-4">
        <CuiButton>
          Add to cart
        </CuiButton>
        <CuiButton color="green">
          Go to checkout
        </CuiButton>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl font-bold mb-4">Loading Positions</h2>
      <div class="flex flex-wrap gap-4">
        <CuiButton loading loadingPosition="start">
          Start
        </CuiButton>
        <CuiButton loading loadingPosition="end">
          End
        </CuiButton>
        <CuiButton loading loadingPosition="center">
          Center
        </CuiButton>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl font-bold mb-4">Link Button</h2>
      <div class="flex flex-wrap gap-4">
        <CuiButton component="a" href="#">
          Open in new tab
        </CuiButton>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl font-bold mb-4">File Upload</h2>
      <div class="flex flex-wrap gap-4">
        <CuiButton component="label">
          Upload a file
          <input type="file" class="hidden" />
        </CuiButton>
      </div>
    </section>
  </div>
</template>