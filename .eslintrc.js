module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    sourceType: "module",
  },
  extends: [
    'eslint:recommended',
  ],
  rules: {
    'indent': ['error', 2],
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'eol-last': ['error', 'always'],
    'no-trailing-spaces': 2,
  },
  globals: {
    A0: 'readonly',
    A1: 'readonly',
    A2: 'readonly',
    A3: 'readonly',
    A4: 'readonly',
    A5: 'readonly',

    P0: 'readonly',
    P1: 'readonly',
    P2: 'readonly',
    P3: 'readonly',
    P4: 'readonly',
    P5: 'readonly',
    P6: 'readonly',
    P7: 'readonly',
    P8: 'readonly',
    P9: 'readonly',
    P10: 'readonly',
    P11: 'readonly',
    P12: 'readonly',
    P13: 'readonly',
  },
}
