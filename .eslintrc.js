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
  // parser: "@babel/eslint-parser",
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
    project: ["tsconfig.json"],
  },
  plugins: [
    "jest", // Ref. > https://www.npmjs.com/package/eslint-plugin-jest
    "@typescript-eslint", // Ref. > https://github.com/prettier/prettier-eslint/issues/201#issuecomment-463110468
  ],
  extends: [
    // Ref. > https://github.com/jsx-eslint/eslint-plugin-react#readme
    "eslint:recommended",
    "plugin:react/recommended",
    // Ref. > https://www.npmjs.com/package/eslint-config-standard-react
    "standard",
    "standard-jsx",
    "standard-react",
    // Ref. > https://www.npmjs.com/package/eslint-config-standard-with-typescript
    "standard-with-typescript",
  ],
  rules: {
    // Override Basic ESLint
    "jsx-quotes": ["error", "prefer-double"],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
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
    // Override Typescript-ESLint
    "@typescript-eslint/space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "@typescript-eslint/comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "only-multiline",
        exports: "only-multiline",
        functions: "only-multiline",
      },
    ],
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/semi": ["error", "always"],
  },
};
