import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? 'https://github.com/rkmahale17/jsonslint/'
    : '/',
  base: 'https://github.com/rkmahale17/jsonslint/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./dist', import.meta.url))
    }
  }
})
