module.exports = {
  env: {
    jest: true, // Add this line to enable Jest globals
  },
  extends: [
    'plugin:jest/recommended', // Optional, but useful for Jest-specific rules
  ],

  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'next',
    // "prettier",
    // "prettier/@typescript-eslint",
    // "prettier/react",
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Add your custom rules here
  },
  plugins: [
    'jest', // Optional, if you use Jest plugin for additional rules
  ],
};
