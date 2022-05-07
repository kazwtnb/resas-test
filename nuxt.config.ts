import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/destyle.css@1.0.15/destyle.css'
      }
    ]
  },
  css: ['~/assets/styles/style.scss'],
  typescript: {
    strict: true
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "~/assets/styles/global/colors"; @import "~/assets/styles/global/typography";'
        }
      }
    }
  }
});
