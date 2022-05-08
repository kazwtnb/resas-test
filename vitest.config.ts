import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [Vue()],
  test: {
    environment: 'jsdom'
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '.'),
      '~~': path.resolve(__dirname, '.')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          '@use "~/assets/styles/global/colors"; @use "~/assets/styles/global/typography";'
      }
    }
  }
});
