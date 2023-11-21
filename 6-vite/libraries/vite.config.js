// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        wp: resolve(__dirname, 'wp.html'),
        chart: resolve(__dirname, 'chart.html'),
      },
    },
  },
})