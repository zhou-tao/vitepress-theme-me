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
  blocklist: ['me']
})
