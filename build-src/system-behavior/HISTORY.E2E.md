# HISTORY on E2E

- [HISTORY on E2E](#history-on-e2e)
  - [Core Libraries](#core-libraries)
    - [References](#references)
  - [Initiation UI-E2E project](#initiation-ui-e2e-project)
  - [Install with devDependencies](#install-with-devdependencies)
    - [Jest with Typescript](#jest-with-typescript)
    - [WebDriverIO on Selenium with Cucumber Framework](#webdriverio-on-selenium-with-cucumber-framework)
    - [Basic Coding Conventions setting](#basic-coding-conventions-setting)

## Core Libraries

- **Written by [TypeScript](https://github.com/microsoft/TypeScript#readme).**

- **Serve [runners](https://webdriver.io/docs/runner) for various browser drivers [WebDriverIO](https://webdriver.io/docs/why-webdriverio)**:
  a progressive automation framework built to automate modern web and mobile applications.
  - [expect-webdriverio](https://github.com/webdriverio/expect-webdriverio#readme):
    WebdriverIO Assertion library inspired by expect (Read [API docs](https://github.com/webdriverio/expect-webdriverio/blob/main/docs/API.md#api))
  - [Supported Drivers](https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/#quick-reference):
    - Chromium/ChromeDriver
    - Firefox (geckodriver)
    - Edge WebDriver
    - IEDriver
    - Safari
    - [Usage examples](https://www.selenium.dev/selenium/docs/api/javascript/)
  - **Use [selenium](https://www.selenium.dev/about/) as a suite of tools for automating web browsers with**
    **[selenium-standalone](https://github.com/webdriverio/selenium-standalone#readme)**
- **Wrapping BDD scenario with [Cucumber.js](https://github.com/cucumber/cucumber-js#readme).**
  - [WebDriverIO - Cucumber Framework](https://webdriver.io/docs/frameworks#using-cucumber) +
    [Snyk Advisor Data](https://snyk.io/advisor/npm-package/@wdio/cucumber-framework)

### References

- [Using WebDriverIO vs. Selenium WebDriver: How, When, and Why](https://gorillalogic.com/blog/using-webdriverio-vs-selenium-webdriver-how-when-and-why/)

- [Useful boilerplates](https://webdriver.io/docs/boilerplates)

  - [webdriverio/cucumber-bolierplate](https://github.com/webdriverio/cucumber-boilerplate)
  - [bar_foo/wdio-cucumber-typescript](https://gitlab.com/bar_foo/wdio-cucumber-typescript)

- [Test Automation using Selenium and Cucumber Framework: Java Tutorial](https://www.browserstack.com/guide/automation-using-cucumber-selenium)

## Initiation UI-E2E project

```bash
mkdir -p build-src/system-behavior
cd build-src/system-behavior
yarn init -y
```

- [.nvmrc](.nvmrc)
- [.gitignore](.gitignore)

## Install with devDependencies

> what does [`npm install --save-dev](https://docs.npmjs.com/cli/v9/using-npm/config#omit)?

### Jest with Typescript

```bash
# For Jest
npm install --save-dev \
    jest \
    jest-circus
```

```bash
# For Typescript
npm install --save-dev \
    typescript \
    ts-node \
    ts-jest \
    @types/jest
```

- [jest.config.cjs](jest.config.cjs)
- [tsconfig.json](tsconfig.json)

### WebDriverIO on Selenium with Cucumber Framework

```bash
# For Stand alone Selenium
npm install --save-dev \
    @wdio/selenium-standalone-service \
    @wdio/globals \
    @wdio/config \
    @wdio/cli \
    @wdio/local-runner \
    webdriverio

# For Chrome used controlled by WebDriverIO
npm install --save-dev \
    chromedriver \
    wdio-chromedriver-service

# For Cucumber Framework for WebDriverIO
npm install --save-dev \
    @wdio/cucumber-framework

# For safe type matching
npm install --save-dev \
    @wdio/types

# For Reporters
npm install --save-dev \
    @wdio/spec-reporter
```

- [wdio.conf.ts](wdio.conf.ts)
- [wdio.BUILD.conf.ts](wdio.BUILD.conf.ts)

### Basic Coding Conventions setting

```bash
# For Baisc ESLint
npm install --save-dev \
    eslint \
    eslint-plugin-import

# For Standard TypeScript Style
npm install --save-dev \
    eslint-plugin-standard \
    eslint-config-standard \
    eslint-config-standard-with-typescript

# For TypeScript Plugin
npm install --save-dev \
    @typescript-eslint/parser \
    @typescript-eslint/eslint-plugin

# For WebDriverIO Plugin
npm install --save-dev \
    eslint-plugin-wdio
```

- [.eslintrc.yaml](.eslintrc.yaml)
