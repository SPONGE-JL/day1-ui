# HISTORY on E2E

- [HISTORY on E2E](#history-on-e2e)
  - [Initiation E2E testing package with separation from application](#initiation-e2e-testing-package-with-separation-from-application)
  - [Setup E2E using Selenium Cucumber Framework](#setup-e2e-using-selenium-cucumber-framework)
    - [Default Coding Convention: Standard Style](#default-coding-convention-standard-style)
    - [BDD-UI-suite](#bdd-ui-suite)
    - [Coding Convention](#coding-convention)
    - [Test-suite for BDD-UI-suite](#test-suite-for-bdd-ui-suite)
    - [Human-readble Report](#human-readble-report)
    - [etc](#etc)

## Initiation E2E testing package with separation from application

```json
// Add worktree to package.json
{
  "workspaces": ["e2e"]
}
```

```bash
# Install Workspace Tool
yarn plugin import workspace-tools

# Add new workspace at root
mkdir -p e2e && cd e2e
yarn init --private && cd ..

# Sync to root workspace
yarn

# Check
yarn workspaces list
# ➤ YN0000: .
# ➤ YN0000: e2e
```

## Setup E2E using Selenium Cucumber Framework

### Default Coding Convention: Standard Style

> Currently ESLint does not fully work with Yarn Berry (yarn-3.3.0.cjs).  
> So we need to install in subworkspace.

```bash
# Basic ESLint
yarn workspace e2e add --dev \
    eslint-plugin-import \
    eslint-plugin-jest \
    eslint-plugin-n \
    eslint-plugin-node \
    eslint-plugin-promise \
    eslint-plugin-prettier \
    eslint-config-prettier

# Extend Statandard JavaScript Style
yarn workspace e2e add --dev \
    eslint-config-standard \
    eslint-plugin-standard

# Extend Statandard TypeScript Style
yarn workspace e2e add --dev \
    eslint-config-standard-with-typescript \
    @typescript-eslint/parser \
    @typescript-eslint/eslint-plugin
```

- [`tsconfig.json`](tsconfig.json)

```bash
# Additional Tools
yarn workspace e2e add --dev \
    ts-node \
    dotenv \
    loglevel
```

### BDD-UI-suite

```bash
# Add UI Drivers: WebDriverIO(WDIO), Chrom Driver
yarn workspace e2e add --dev \
    webdriverio \
    chromedriver \
    wdio-chromedriver-service

# Add Selenium to control UI Drivers
yarn workspace e2e add --dev \
    @wdio/selenium-standalone-service \
    @wdio/local-runner \
    @wdio/config \
    @wdio/globals \
    @wdio/cli

# Add Cucumber Framework for Selenium
yarn workspace e2e add --dev \
    @wdio/cucumber-framework
```

- [`features/`](features/): for `*.feature` files as BDD scenario written by Gherkin syntax

- [`step_definisions/`](step_definisions/): for `*.steps.ts` files as behavior of each steps

- [`support/`](support/): for `*.tx` files to easy usage of WebDriverIO

### Coding Convention

```bash
# Add ESLint for WebDriverIO
yarn workspace e2e add --dev \
    eslint-plugin-wdio \
    eslint-plugin-cucumber
```

- [`.eslintrc`](.eslintrc.js)

### Test-suite for BDD-UI-suite

```bash
# Add Jest
yarn workspace e2e add --dev \
    jest \
    jest-circus \
    expect-webdriverio \
    ts-jest
```

- [jest.config.cjs](jest.config.cjs)

- [tsconfig.spec.json](tsconfig.spec.json)

### Human-readble Report

```bash
# Add Reporter
yarn workspace e2e add --dev \
    @wdio/spec-reporter \
    wdio-cucumberjs-json-reporter \
    multiple-cucumber-html-reporter
```

- [@wdio/spec-reporter](https://www.npmjs.com/package/@wdio/spec-reporter)

- [wdio-cucumberjs-json-reporter](https://www.npmjs.com/package/wdio-cucumberjs-json-reporter)

- [multiple-cucumber-html-reporter](https://www.npmjs.com/package/multiple-cucumber-html-reporter)

  Set custom type declation for multiple-cucumber-html-reporter

  ```bash
  mkdir -t "e2e/@types/"
  echo "declare module \"multiple-cucumber-html-reporter;\"" \
      >> "e2e/@types/multiple-cucumber-html-reporter.d.ts"
  ```

  Update [tsconfig.json](e2e/tsconfig.json) for parse custom declation.

  ```json
  // e2e/tsconfig.json
  {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "*": ["@types/*"]
      }
    }
  }
  ```

### etc

```json
// {root}/package.json
{
  "scripts": {
    "e2e": "yarn workspace e2e test",
    "report": "yarn workspace e2e report"
  }
}
```

```json
// e2e/package.json
{
  "scripts": {
    "test": "run-s test:*",
    "test:unit": "jest --config=jest.config.cjs --detectOpenHandles",
    "test:feature": "wdio run wdio.conf.ts",
    "report": "ts-node cucumber.report.ts --module commonjs"
  }
}
```

```bash
# (Optinal) Add Static Host Service for case when front-end assets only
yarn workspace e2e add --dev \
    @wdio/static-server-service \
    http-server
```
