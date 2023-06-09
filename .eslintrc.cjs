module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['eslint-comments'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-essential'],
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  overrides: [
    {
      files: ['pages/*.vue', 'pages/**/*.vue', 'layouts/*.vue', 'layouts/**/*.vue'],
      rules: { 'vue/multi-word-component-names': 'off' }
    }
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
