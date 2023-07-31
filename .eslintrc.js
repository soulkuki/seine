module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    // '@vue/typescript/recommended',
    // '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    singleQuote: 0,
    eqeqeq: 2, // 强制使用 === 和 !==
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    'arrow-spacing': ['error', { before: true, after: true }], // 强制箭头函数的箭头前后使用空格
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-var': 2, // 禁止使用 var 声明变量
    'prefer-arrow-callback': 2, // 要求回调函数使用箭头函数
    'space-infix-ops': 2, // 操作符周围必须有空格
    'spaced-comment': ['error', 'always'], // 注释后面必须跟随至少一个空白
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'vue/no-v-model-argument': 'off',
    'vue/multi-word-component-names': 'off'
  },
}
