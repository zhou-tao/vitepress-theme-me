import type { Theme } from 'vitepress'
import { Layout, useProgressBar } from 'vitepress-theme-me'
import 'uno.css'
import 'vitepress-theme-me/style.css'

export default {
  Layout,
  async enhanceApp({ app, router }) {
    await useProgressBar(import.meta.env.SSR, router)
  }
} as Theme
