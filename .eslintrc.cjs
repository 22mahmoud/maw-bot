module.exports = {
  env: {
    es2021: true,
    node: true,
  },

  overrides: [
    {
      files: ['**/*.ts'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
      ],
    },
  ],
  extends: [
    'eslint:recommended',
    'plugin:jsdoc/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['jsdoc', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
