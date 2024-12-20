import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      // Enable only the necessary rules
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,

      // Only these rules are active to enforce unused variables, syntax errors, and import errors
      "no-unused-vars": "error", // Error for unused variables
      "no-undef": "error", // Error for undefined variables (import related)
      "no-syntax-error": "error", // Syntax error checking (Note: ESLint already does this by default)

      // Import-related errors (could be 'import/no-unresolved' or related rules depending on how you configure imports)
      "import/no-unresolved": "error", // Ensure all imports are resolved
      "import/no-unused-modules": ["error", { unusedExports: true }], // Error for unused imports

      // Disable unnecessary rules
      "react/jsx-no-target-blank": "off", // Disable specific React rule
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ], // Keep this as a warning
    },
  },
];
