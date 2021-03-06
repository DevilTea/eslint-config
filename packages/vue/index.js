module.exports = {
  env: {
    'vue/setup-compiler-macros': true,
  },
  parserOptions: {
    extraFileExtensions: ['.vue'],
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@deviltea/eslint-config-base',
  ],
  rules: {
    'vue/no-v-html': 'off',
    'vue/no-unused-vars': ['error', { ignorePattern: '^_' }],
    'vue/no-template-shadow': 'off',
    // 'vue/block-lang': ['error', { script: { lang: 'ts' } }],
    'vue/component-api-style': ['warn', ['script-setup', 'composition']],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: false,
      ignores: [],
    }],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/no-duplicate-attr-inheritance': 'error',
  },
  overrides: [
    {
      files: ['*.vue'],
      // parser: 'vue-eslint-parser',
      // parserOptions: {
      //   parser: '@typescript-eslint/parser',
      // },
      rules: {
        'import/no-default-export': 'off',
        'no-unused-vars': 'off',
        'no-undef': 'off',
        // '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
}
