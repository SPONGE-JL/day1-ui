// Ref. > https://eslint.org/docs/latest/user-guide/configuring/
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "jest/globals": true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: [
    "jest", // Ref. > https://www.npmjs.com/package/eslint-plugin-jest
  ],
  extends: [
    // Ref. > https://github.com/jsx-eslint/eslint-plugin-react#readme
    "eslint:recommended",
    "plugin:react/recommended",
    // Ref. > https://www.npmjs.com/package/eslint-config-standard-react
    "standard",
    "standard-jsx",
    "standard-react",
  ],
  rules: {
    // Override Basic ESLint
    "jsx-quotes": ["error", "prefer-double"],
    "space-before-function-paren": ["error", "never"],
    // Override Standard JS style
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "only-multiline",
        exports: "only-multiline",
        functions: "only-multiline",
      },
    ],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
