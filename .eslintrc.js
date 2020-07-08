module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: ['prettier'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    'prettier/prettier': ['error', { singleQuote: true }],
  },
};
module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['../.eslintrc', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
    ecmaFeatures: 2018,
  },
  plugins: ['react', 'jsx-a11y', 'react-hooks'],
  settings: {
    react: {
      version: '16.8',
    },
  },
};
