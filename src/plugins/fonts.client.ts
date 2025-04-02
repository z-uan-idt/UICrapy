export default defineNuxtPlugin(() => {
  if (process.client) {
    document.fonts.ready.then(() => {
      document.documentElement.classList.add('fonts-loaded');
    });
  }
}); 