<template>
  <div class="container mx-auto">
    <section class="space-y-4">
      <h2 class="text-2xl font-bold mb-4">Headings</h2>
      <div class="space-y-2">
        <CuiTypography level="h1"
          >Heading 1 - The quick brown fox jumps over the lazy
          dog</CuiTypography
        >
        <CuiTypography level="h2"
          >Heading 2 - The quick brown fox jumps over the lazy
          dog</CuiTypography
        >
        <CuiTypography level="h3"
          >Heading 3 - The quick brown fox jumps over the lazy
          dog</CuiTypography
        >
        <CuiTypography level="h4"
          >Heading 4 - The quick brown fox jumps over the lazy
          dog</CuiTypography
        >
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl font-bold mb-4">Titles</h2>
      <div class="space-y-2">
        <CuiTypography level="title-lg"
          >Title Large - The quick brown fox jumps over the lazy
          dog</CuiTypography
        >
        <CuiTypography level="title-md"
          >Title Medium - The quick brown fox jumps over the lazy
          dog</CuiTypography
        >
        <CuiTypography level="title-sm"
          >Title Small - The quick brown fox jumps over the lazy
          dog</CuiTypography
        >
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl font-bold mb-4">Body Text</h2>
      <div class="space-y-2">
        <CuiTypography level="body-lg"
          >Body Large - The quick brown fox jumps over the lazy
          dog</CuiTypography
        >
        <CuiTypography level="body-md"
          >Body Medium - The quick brown fox jumps over the lazy
          dog</CuiTypography
        >
        <CuiTypography level="body-sm"
          >Body Small - The quick brown fox jumps over the lazy
          dog</CuiTypography
        >
        <CuiTypography level="body-xs"
          >Body Extra Small - The quick brown fox jumps over the lazy
          dog</CuiTypography
        >
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl font-bold mb-4">Colors and Variants</h2>
      <div class="space-y-4">
        <div v-for="(color, index) in colors" :key="index" class="space-y-2">
          <h3 class="text-lg font-semibold">{{ color }}</h3>
          <div class="flex flex-wrap gap-4">
            <CuiTypography :color="color" variant="plain">Plain</CuiTypography>
            <CuiTypography :color="color" variant="outlined">Outlined</CuiTypography>
            <CuiTypography :color="color" variant="soft">Soft</CuiTypography>
            <CuiTypography :color="color" variant="solid">Solid</CuiTypography>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl font-bold mb-4">Custom Component</h2>
      <div class="space-y-2">
        <CuiTypography level="h1" component="h2">
          This renders as h2 but has h1 styles
        </CuiTypography>
        <CuiTypography level="h2" component="h3">
          This renders as h3 but has h2 styles
        </CuiTypography>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl font-bold mb-4">No Wrap</h2>
      <div class="space-y-2">
        <CuiTypography noWrap>
          This text will not wrap: The quick brown fox jumps over the lazy dog
          The quick brown fox jumps over the lazy dog
        </CuiTypography>
        <CuiTypography>
          This text will wrap: The quick brown fox jumps over the lazy dog The
          quick brown fox jumps over the lazy dog
        </CuiTypography>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl font-bold mb-4">Nested Typography</h2>
      <CuiTypography level="body-md">
        This is a paragraph with
        <CuiTypography color="blue" variant="soft">nested</CuiTypography>
        typography. You can also use
        <CuiTypography color="green" variant="outlined">different</CuiTypography>
        styles and
        <CuiTypography color="yellow" variant="solid">
          combinations
        </CuiTypography>.
      </CuiTypography>
    </section>
  </div>
</template>

<script setup lang="ts">
const colors: (
  | "red"
  | "pink"
  | "purple"
  | "blue"
  | "cyan"
  | "teal"
  | "green"
  | "lime"
  | "yellow"
  | "orange"
  | "brown"
  | "gray"
)[] = [
  "red",
  "pink",
  "purple",
  "blue",
  "cyan",
  "teal",
  "green",
  "lime",
  "yellow",
  "orange",
  "brown",
  "gray",
];
</script>
