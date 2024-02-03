import { SearchPlugin } from 'vitepress-plugin-search'
import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    Unocss(),
    SearchPlugin({
      placeholder: 'Search Posts',
      buttonLabel: 'Search',
      previewLength: 10,
      tokenize: 'full'
    })
  ],
  optimizeDeps: { exclude: ['fsevents'] },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['../..']
    }
  }
})
