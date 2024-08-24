module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'import',
    'jest', // Add Jest plugin
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'next',
    'plugin:jest/recommended', // Add Jest plugin recommendations
    // "prettier",
    // "prettier/@typescript-eslint",
    // "prettier/react",
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    jest: true, // Enable Jest environment
  },
  rules: {
    // Add your custom rules here
  },
};
