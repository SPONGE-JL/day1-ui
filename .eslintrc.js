// eslint-disable-next-line no-var
var baseConfig = require("./.eslintrc.base.js");

module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    ...baseConfig.env,
  },
  parser: baseConfig.parser,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: ["./tsconfig.json", "./e2e/tsconfig.json"],
    tsconfigRootDir: __dirname,
    ...baseConfig.parserOptions,
  },
  plugins: [...baseConfig.plugins],
  extends: [
    // Ref. > https://www.npmjs.com/package/eslint-config-standard-react
    "standard-jsx",
    "standard-react",
    ...baseConfig.extends,
  ],
  rules: {
    ...baseConfig.rules,
  },
};
