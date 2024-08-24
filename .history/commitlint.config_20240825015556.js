// eslint.config.js (or .mjs if using ES modules)
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslintParser from '@typescript-eslint/parser';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import next from 'eslint-config-next';
import prettier from 'eslint-config-prettier';

const compat = new FlatCompat();

export default [
  js.configs.recommended,
  ...compat.extend(next),
  {
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
      prettier,
    },
    parser: typescriptEslintParser,
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'prettier/prettier': 'error',
    },
    ignores: ['node_modules/', '.next/', 'out/', 'build/', 'public/'],
  },
];
