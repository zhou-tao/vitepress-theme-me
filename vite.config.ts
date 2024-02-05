import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import dts from 'vite-plugin-dts'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

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
  },
  plugins: [
    vue(),
    unocss(),
    dts(),
    nodePolyfills()
  ]
})
