import './tailwind-compat.css'
import './styles/main.css'
import './styles/article.css'

import type { Theme } from 'vitepress'
import Layout from './layout/index.vue'

export default {
  Layout,
  async enhanceApp({ app, router, siteData }) {
    if (!import.meta.env.SSR) {
      const NProgress = await import('nprogress')
      router.onBeforeRouteChange = (to) => {
        NProgress.start()
      }
      router.onBeforePageLoad = (to) => {
        NProgress.done()
      }
    }
  }
} as Theme
