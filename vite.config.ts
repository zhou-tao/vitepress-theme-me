import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import dts from 'vite-plugin-dts'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src/index.ts'),
        resolve(__dirname, 'src/config.ts')
      ],
      formats: ['es'],
      fileName: () => '[name].mjs'
    },
    rollupOptions: {
      external: [
        'vue',
        'vitepress',
        'nprogress',
        'unocss/vite',
        'vitepress-plugin-search/Search.vue',
        '@waline/client'
      ]
    }
  },
  plugins: [
    vue(),
    unocss(),
    dts(),
    nodePolyfills()
  ]
})
