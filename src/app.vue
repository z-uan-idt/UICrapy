<template>
  <CuiSkeleton :loading="isLoading">
    <div class="container mx-auto px-4 py-8">
      <CuiCard elevated>
        <template #header>
          <h1 class="text-2xl font-bold">CrapyUI Components Demo</h1>
        </template>

        <div class="flex gap-4 mb-4">
          <CuiButton
            v-for="(item, index) in pages"
            :key="index"
            variant="outlined"
            color="cyan"
            @click="onNavigateTo(item.path)"
          >
            {{ item.name }}
          </CuiButton>
        </div>

        <NuxtPage />

        <template #footer>
          <p class="text-gray-500 text-sm">
            All components use Tailwind CSS for styling
          </p>
        </template>
      </CuiCard>
    </div>
  </CuiSkeleton>
</template>

<script setup lang="ts">
const pages = [
  {
    name: "Typography",
    path: "/typography",
  },
  {
    name: "Button",
    path: "/button",
  },
];
const { isLoading, stopLoading } = useLoading(true);

const onNavigateTo = (path: string) => {
  navigateTo(path);
};

const waitForContentLoaded = () => {
  return new Promise((resolve) => {
    if (document.readyState === "complete") {
      resolve(void 0);
    } else {
      window.addEventListener("load", resolve);
    }
  });
};

const waitForFontsLoaded = async () => {
  await Promise.all([document.fonts.ready, waitForContentLoaded()]);

  setTimeout(() => {
    stopLoading();
  }, 1000);
};

watch(() => useRoute().path, waitForFontsLoaded);

onMounted(waitForFontsLoaded);
</script>
