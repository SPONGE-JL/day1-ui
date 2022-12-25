// Ref. > https://eslint.org/docs/latest/user-guide/configuring/
module.exports = {
  // alias: {
  //   "plugin:prettier": require.resolve("eslint-plugin-prettier"),
  // },
  env: {
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "prettier",
    "jest", // Ref. > https://www.npmjs.com/package/eslint-plugin-jest
    "@typescript-eslint", // Ref. > https://github.com/prettier/prettier-eslint/issues/201#issuecomment-463110468
  ],
  extends: [
    "eslint:recommended",
    // Ref. > https://www.npmjs.com/package/eslint-config-standard-with-typescript
    "standard",
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
    "@typescript-eslint/member-delimiter-style": "off", // Disable for use only formtting lint rule (prettier)
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/no-floating-promises": "off",
  },
};
