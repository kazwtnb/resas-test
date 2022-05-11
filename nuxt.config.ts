import { defineNuxtConfig } from 'nuxt';
import { RESAS_ENDPOINT_BASE_URL } from './app.constant';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    script: [
      {
        src: 'https://kit.fontawesome.com/f3b05ea344.js',
        crossorigin: 'anonymous'
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
            '@use "~/assets/styles/global/colors"; @use "~/assets/styles/global/typography";'
        }
      }
    }
  },
  runtimeConfig: {
    RESAS_API_KEY: process.env.RESAS_API_KEY,
    public: {
      RESAS_ENDPOINT_BASE_URL
    }
  }
});
