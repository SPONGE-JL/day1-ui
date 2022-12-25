const pack = require("./package");

module.exports = {
  displayName: pack.name,
  rootDir: ".",
  testMatch: [
    "<rootDir>/**/*.spec.(js|ts)",
    "<rootDir>/**/*.test.(js|ts)",
  ],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": [
      "ts-jest",
      {
        isolatedModules: true,
        tsconfig: "./tsconfig.json",
      },
    ],
  },
  collectCoverage: true,
  coverageDirectory: "./coverage",
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  collectCoverageFrom: [
    "!**/node_modules/**",
    "step_definitions/**/*.ts",
    "support/**/*.ts",
    "utils/**/*.ts",
  ],
  setupFilesAfterEnv: ["./jest.setup.js"],
  roots: [
    ".",
  ],
  moduleDirectories: [
    __dirname,
  ],
};
