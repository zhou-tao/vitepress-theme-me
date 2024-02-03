import { defineConfigWithTheme } from 'vitepress'
import type { ThemeConfig } from '../../src/config'
import baseConfig from '../../src/config'

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  title: 'vitepress-theme-me',
  description: 'vitepress theme for personal website.'
})
