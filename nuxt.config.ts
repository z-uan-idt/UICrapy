// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'src',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts'
  ],
  css: ['~/assets/css/main.css'],
  typescript: {
    strict: true,
    typeCheck: true,
  },
  app: {
    head: {
      title: 'UI Crapy',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ],
    },
  },
  runtimeConfig: {
    public: {
      fonts: {
        families: [
          {
            name: 'Roboto',
            provider: 'google',
            weights: [400, 500, 600, 700],
            preload: true,
            prefetch: true,
            preconnect: true,
          },
        ],
        defaults: {
          provider: 'google',
          preload: true,
          prefetch: true,
          preconnect: true,
        },
      },
    },
  },
})
