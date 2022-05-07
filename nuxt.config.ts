import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {},
  css: ['~/assets/styles/style.scss'],
  typescript: {
    strict: true
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "~/assets/styles/global/colors"; @use "~/assets/styles/global/typography";'
        }
      }
    }
  }
});
