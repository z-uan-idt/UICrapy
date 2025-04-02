import { ref } from 'vue'

export function useLoading(value = false) {
  const isLoading = ref(value)

  const startLoading = () => {
    isLoading.value = true
  }

  const stopLoading = () => {
    isLoading.value = false
  }

  return {
    isLoading,
    startLoading,
    stopLoading
  }
}
