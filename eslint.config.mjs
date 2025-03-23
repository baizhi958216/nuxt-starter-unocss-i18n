// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  antfu({
    unocss: true,
    formatters: true,
    rules: {
      'vue/block-order': ['error', {
        order: [['template', 'script'], 'style'],
      }],
    },
  }),
)
