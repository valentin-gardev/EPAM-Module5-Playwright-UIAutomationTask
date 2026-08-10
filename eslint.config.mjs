import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import playwright from 'eslint-plugin-playwright'; // Handles Playwright-specific rules

export default [
  // 1. Load ESLint's official recommended rules for JavaScript code safety
  js.configs.recommended,

  // 2. Load Playwright's recommended rules (tells ESLint about 'test', 'expect', 'page', etc.)
  playwright.configs['flat/recommended'],

  // 3. Load the Prettier configuration.
  // IMPORTANT: Must always be last to override styling rules!
  eslintConfigPrettier,

  // 4. Define your project-specific rules
  {
    languageOptions: {
      ecmaVersion: 'latest', // Allow modern JavaScript syntax (like ES2022+)
      sourceType: 'module', // You are using ES Modules ("import/export" instead of "require")
      globals: {
        // Since this code runs in Node.js (not the browser),
        // we define standard Node globals so ESLint doesn't flag them as undefined.
        process: 'readonly',
        console: 'readonly',
        module: 'readonly',
      },
    },
    rules: {
      // Warns or errors if you declare a variable but never use it.
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignores unused vars starting with an underscore (e.g. _page)

      // Prevents you from using loose equality (==). Forces strict equality (===)
      eqeqeq: ['error', 'always'],

      // Throws an error if you try to reassign a variable declared with 'const'.
      'no-const-assign': 'error',

      // For tests, console logs are common, so we just set this to warn.
      'no-console': 'warn',

      // --- PLAYWRIGHT SPECIFIC RULES ---
      // Ensures you always write "await" before Playwright locators and assertions
      // (This is the #1 mistake beginners make in Playwright!)
      'playwright/no-skipped-test': 'warn', // Warns if you left a test skipped (.skip)
      'playwright/expect-expect': 'error', // Forces you to actually write assertions in your tests
    },
  },
];
