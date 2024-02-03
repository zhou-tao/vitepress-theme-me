import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'vitepress-theme-me',
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue']
    }
  }
})