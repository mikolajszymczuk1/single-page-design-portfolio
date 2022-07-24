module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
      alias: {
        map: [
          ['@', './src'],
        ],
      },
    },
  },
};
