import { defineConfigWithTheme } from 'vitepress'

import Unocss from 'unocss/vite'

interface Nav {
  text: string
  link: string
  icon?: string | { svg: string }
}

export interface ThemeConfig {
  logo?: string
  nav?: Nav[]
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
    theme: 'vitesse-dark'
  },
  head: [
    [
      'link',
      { rel: 'icon', href: '/logo.svg' }
    ]
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '文章', link: '/posts' },
      { text: '项目', link: '/projects' },
      { text: '友链', link: '/friend-links' },
      {
        text: '为爱发电',
        link: 'https://afdian.net/a/toryz?tab=home',
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M11.61 29.92a1 1 0 0 1-.6-1.07L12.83 17H8a1 1 0 0 1-1-1.23l3-13A1 1 0 0 1 11 2h10a1 1 0 0 1 .78.37a1 1 0 0 1 .2.85L20.25 11H25a1 1 0 0 1 .9.56a1 1 0 0 1-.11 1l-13 17A1 1 0 0 1 12 30a1.09 1.09 0 0 1-.39-.08ZM17.75 13l2-9H11.8L9.26 15h5.91l-1.59 10.28L23 13Z"/></svg>'
        }
      },
      {
        text: 'Github',
        link: 'https://github.com/zhou-tao',
        icon: {
          name: 'github'
        }
      }

    ] as any
  }
})
