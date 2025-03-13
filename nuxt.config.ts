// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
  ],
  devtools: { enabled: true },
  site: {
    url: 'https://inDearborn.com',
    title: 'inDearborn',
    description: 'Find it, inDearborn',
  },
  colorMode: {
    classSuffix: '',
  },
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
    },
  },
  runtimeConfig: {
    public: {
      posthogPublicKey: 'phc_OCTWV33ANMRGxyFUYzugNW7mLl4leM4Ei5vah32XFCA',
      posthogHost: 'https://us.i.posthog.com',
      mdc: {
        headings: {
          anchorLinks: {
            h1: false,
            h2: false,
            h3: false,
            h4: false,
            h5: false,
            h6: false,
          },
        },
      },
    },
  },
  compatibilityDate: '2025-01-15',
  nitro: {
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: ['/', '/sitemap.xml'],
    },
  },
  eslint: {
    config: {
      stylistic: {
        semi: true,
        quotes: 'single',
      },
    },
  },
});