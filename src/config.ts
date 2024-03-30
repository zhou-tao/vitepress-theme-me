import { defineConfigWithTheme } from 'vitepress'

import Unocss from 'unocss/vite'
import type { WalineProps } from '@waline/client'

export interface Nav {
  text: string
  link: string
  icon?: string | { svg: string } | { name: string }
}

export interface ThemeConfig {
  logo?: string
  nav?: Nav[]
  waline?: Omit<WalineProps, 'path'>
}

export default defineConfigWithTheme<ThemeConfig>({
  title: 'vitepress.me',
  description: '个人站点',
  appearance: false,
  lang: 'zh',
  lastUpdated: true,
  cleanUrls: true,
  vite: {
    plugins: [
      Unocss() as any
    ]
  },
  markdown: {
    theme: 'vitesse-light'
  }
})
