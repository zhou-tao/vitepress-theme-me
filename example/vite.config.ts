import { SearchPlugin } from 'vitepress-plugin-search'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
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
