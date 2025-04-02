<script setup lang="ts">
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
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Red</h3>
          <div class="flex flex-wrap gap-4">
            <CuiButton color="red" variant="solid">Solid</CuiButton>
            <CuiButton color="red" variant="soft">Soft</CuiButton>
            <CuiButton color="red" variant="outlined">Outlined</CuiButton>
            <CuiButton color="red" variant="plain">Plain</CuiButton>
          </div>
        </div>

        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Pink</h3>
          <div class="flex flex-wrap gap-4">
            <CuiButton color="pink" variant="solid">Solid</CuiButton>
            <CuiButton color="pink" variant="soft">Soft</CuiButton>
            <CuiButton color="pink" variant="outlined">Outlined</CuiButton>
            <CuiButton color="pink" variant="plain">Plain</CuiButton>
          </div>
        </div>

        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Purple</h3>
          <div class="flex flex-wrap gap-4">
            <CuiButton color="purple" variant="solid">Solid</CuiButton>
            <CuiButton color="purple" variant="soft">Soft</CuiButton>
            <CuiButton color="purple" variant="outlined">Outlined</CuiButton>
            <CuiButton color="purple" variant="plain">Plain</CuiButton>
          </div>
        </div>

        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Blue</h3>
          <div class="flex flex-wrap gap-4">
            <CuiButton color="blue" variant="solid">Solid</CuiButton>
            <CuiButton color="blue" variant="soft">Soft</CuiButton>
            <CuiButton color="blue" variant="outlined">Outlined</CuiButton>
            <CuiButton color="blue" variant="plain">Plain</CuiButton>
          </div>
        </div>

        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Cyan</h3>
          <div class="flex flex-wrap gap-4">
            <CuiButton color="cyan" variant="solid">Solid</CuiButton>
            <CuiButton color="cyan" variant="soft">Soft</CuiButton>
            <CuiButton color="cyan" variant="outlined">Outlined</CuiButton>
            <CuiButton color="cyan" variant="plain">Plain</CuiButton>
          </div>
        </div>

        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Teal</h3>
          <div class="flex flex-wrap gap-4">
            <CuiButton color="teal" variant="solid">Solid</CuiButton>
            <CuiButton color="teal" variant="soft">Soft</CuiButton>
            <CuiButton color="teal" variant="outlined">Outlined</CuiButton>
            <CuiButton color="teal" variant="plain">Plain</CuiButton>
          </div>
        </div>

        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Green</h3>
          <div class="flex flex-wrap gap-4">
            <CuiButton color="green" variant="solid">Solid</CuiButton>
            <CuiButton color="green" variant="soft">Soft</CuiButton>
            <CuiButton color="green" variant="outlined">Outlined</CuiButton>
            <CuiButton color="green" variant="plain">Plain</CuiButton>
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