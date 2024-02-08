import '@unocss/reset/tailwind-compat.css'
import 'uno.css'
import './styles/main.css'
import './styles/article.css'

import type { Theme } from 'vitepress'
import Layout from './layout/index.vue'

export default {
  Layout,
  async enhanceApp({ app, router, siteData }) {
    if (!import.meta.env.SSR) {
      try {
        const NProgress = await import('nprogress')
        router.onBeforeRouteChange = (to) => {
          NProgress.start && NProgress.start()
        }
        router.onBeforePageLoad = (to) => {
          NProgress.done && NProgress.done()
        }
      }
      catch (error) {
        console.error('Error: nprogress failed to load!')
      }
    }
  }
} as Theme
