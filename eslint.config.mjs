import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    quotes: ['error', 'single'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'vue/html-indent': ['error', 2],
    'vue/max-attributes-per-line': ['error', { singleline: 2 }]
  }
})
