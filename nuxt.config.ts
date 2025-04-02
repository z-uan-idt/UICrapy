export default defineNuxtConfig({
  srcDir: "src/",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    exposeConfig: true,
  },

  components: [
    {
      path: "~/libraries/components",
      pathPrefix: false,
      prefix: "Cui",
      extensions: [".vue"],
    },
  ],

  nitro: {
    publicAssets: [
      {
        dir: 'public',
        baseURL: '/'
      }
    ]
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'vi',
        translate: 'no',
        class: 'notranslate'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'google', content: 'notranslate' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'revisit-after', content: '1 days' },
        { name: 'author', content: 'CrapyUI' },
        { 'http-equiv': 'x-ua-compatible', content: 'IE=edge' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'http://localhost:3001' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      bodyAttrs: {
        class: 'antialiased font-loaded'
      },
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },

  compatibilityDate: '2025-04-02'
});