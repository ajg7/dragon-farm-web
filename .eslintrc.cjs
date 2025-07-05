// .eslintrc.cjs  (minimal starter)
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'         // ➊ shuts off rules Prettier will format
  ],
  settings: { react: { version: 'detect' } },
}
