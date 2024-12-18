export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  colorMode: {
    classSuffix: '',
  },
  nitro: {
    devProxy: {
      '/proxy/test': 'http://localhost:3001',
      '/proxy/example': {
        target: 'https://api.albionstatus.com/',
        prependPath: true,
        changeOrigin: true,
      },
      '/api/v2': {
        target: 'http://demo.zsmartex.com/',
        prependPath: true,
        changeOrigin: true,
      },
    }
  }
})
