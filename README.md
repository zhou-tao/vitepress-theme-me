# vitepress-theme-me 

<p>
  <a href="https://npmjs.com/package/vitepress-theme-me"><img src="https://img.shields.io/npm/v/vitepress-theme-me.svg" alt="npm package"></a>
  <a href="https://github.com/zhou-tao/vitepress-theme-me/actions/workflows/ci.yml"><img src="https://github.com/zhou-tao/vitepress-theme-me/actions/workflows/ci.yml/badge.svg?branch=main" alt="build status"></a>
</p>

A lightweight VitePress theme plugin to help you quickly build personal sites.

- :sparkles: Simple and beautiful theme, inspired by [antfu.me](https://antfu.me).
- :rocket: Fastest localized full-text search powered by [flexsearch](https://github.com/nextapps-de/flexsearch).
- :speech_balloon: Configurable site comment system based on [waline](https://waline.js.org/).

Visit [my site](https://toryz-me.netlify.app/) to get a quick look at **vitepress-theme-me** features.

Documentation is coming soon...

### Install

Please prepare the [VitePress](https://vitepress.dev/zh/guide/getting-started) app first. then install it:

```bash
pnpm add vitepress-theme-me flexsearch vitepress-plugin-search unocss -D
```

### Usage

1. extends the base configs of `vitepress-theme-me`.

```js
// .vitepress/config.js
import { defineConfigWithTheme } from 'vitepress'
import baseConfig from 'vitepress-theme-me/config'

export default defineConfigWithTheme({
  extends: baseConfig,
  title: 'vitepress.me',
  description: 'vitepress theme for personal website.',
  head: [
    [
      'link',
      { rel: 'icon', href: '/logo.svg' } // add logo.svg to under the public dir
    ]
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '文章', link: '/posts' }, // add posts.md from example and mkdir posts
      { text: '项目', link: '/projects' }, // add projects.md
      { text: '友链', link: '/friend-links' }, // add friend-links.md
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
    ]
  }
})
```

For the files that need to be added, see the [example](https://github.com/zhou-tao/vitepress-theme-me/tree/main/example).

2. replaces the vitepress default theme.

```js
// .vitepress/theme/index.js
import Theme from 'vitepress-theme-me'
import 'uno.css'
import 'vitepress-theme-me/style.css'

export default Theme
```

3.  add full-context search plugin config. 

notice: you need to add `vite.config.js` to your root directory.

```js
// vite.config.js
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
```

Next, it's time to launch the app and build your site!

you can also check out the [example app](https://github.com/zhou-tao/vitepress-theme-me/tree/main/example).

### License

[MIT](./LICENSE) LICENSE &copy; 2023-PRESENT [Toryz](https://github.com/zhou-tao)