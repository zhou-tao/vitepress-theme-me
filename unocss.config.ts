import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  transformerVariantGroup,
  transformerDirectives
} from 'unocss'

export default defineConfig({
  theme: {
    maxWidth: {
      main: '750px'
    },
    height: {
      header: '64px',
      footer: '50px'
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      warn: true,
      extraProperties: {
        'width': '1.23rem',
        'height': '1.23rem',
        'display': 'inline-block',
        'vertical-align': 'text-bottom'
      }
    })
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives()
  ],
  blocklist: ['me'],
  safelist: [
    'i-ri-github-line',
    'i-ri-discord-line',
    'i-ri-facebook-line',
    'i-ri-instagram-line',
    'i-ri-linkedin-line',
    'i-ri-mastodon-line',
    'i-ri-slack-line',
    'i-ri-twitter-line',
    'i-ri-youtube-line',
    'i-ri-zhihu-line',
    'i-ri-bilibili-line',
    'i-ri-heart-pulse-line'
  ]
})
