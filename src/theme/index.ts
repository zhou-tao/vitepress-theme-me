import '@unocss/reset/tailwind-compat.css'
import 'uno.css'
import './styles/main.css'
import './styles/article.css'

import type { Router, Theme } from 'vitepress'
import Layout from './layout/index.vue'

async function useProgressBar(SSR: boolean, router: Router) {
  if (SSR) return
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

export {
  Layout,
  useProgressBar
}
