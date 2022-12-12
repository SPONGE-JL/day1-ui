# HISTORY

## Environment

1. [Install nvm(Node Version Manager)](https://github.com/nvm-sh/nvm#installing-and-updating)

   ```bash
   # Check
   nvm --version
   ```

2. Install node environment

   ```bash
   # Setup node manager
   nvm install --lts 18

   # Check
   nvm current
   nvm list --no-alias
   node --version

   # Check
   npm --version
   yarn --version

   # Setup package manger
   npm install --global npm   # Maybe need to set tslint.json version. Please check the console
   npm install --global yarn

   ```

3. Auto setting node environment from `.nvmrc`

   ```bash
   # Open the shell control file
   vi ~/.zshrc
   ```

   Append below script after `nvm` part.

   ```bash
   # Ref. https://readforlearn.com/how-to-write-a-nvmrc-file-which-automatically-change-node-version/
   autoload -U add-zsh-hook
   load-nvmrc() {
     local node_version="$(nvm version)"
     local nvmrc_path="$(nvm_find_nvmrc)"

     if [ -n "$nvmrc_path" ]; then
       local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

       if [ "$nvmrc_node_version" = "N/A" ]; then
         nvm install
       elif [ "$nvmrc_node_version" != "$node_version" ]; then
         nvm use
      fi
     elif [ "$node_version" != "$(nvm version default)" ]; then
       echo "Reverting to nvm default version"
       nvm use default
    fi
   }
   add-zsh-hook chpwd load-nvmrc
   load-nvmrc
   ```

   Save and quit(`esc` + `:wq`), then reopen your terminal.

## Project

### Initiation

```bash
# Init React application with CRA
yarn dlx create-react-app@latest

cd <root-of-project>
yarn create-react-app .
```

- **Update [`.gitignore`](.gitignore)**

### Setup Node Version & Package Manager

```bash
# At the root of repository where package.json is presented.
# Migrate Yarn Berry
yarn set version stable

# Clean install with Yarn Berry
yarn cache clean --all
yarn install #--immutable
```

> Learn more: [Migration Yarn2 step-by-step](https://yarnpkg.com/getting-started/migration#step-by-step)

```bash
# Set node version with nvm
touch .nvmrc # edit the file

# Or update current node version
node -v > .nvmrc && cat .nvmrc
```

```bash
# Yarn berry with VScode
yarn add --dev \
    @yarnpkg/sdks \
    vscode

# Yarn Contraints plugin
yarn plugin import constraints
# yarn constraints --fix
```

#### Replace default dependencies in CRA

```bash
# Global install for CLI
yarn dlx eslint

# For eslintConfig dependency resolve
yarn add --dev \
    eslint \
    eslint-plugin-react \
    eslint-plugin-jest
```

- After install, then remove below lines in `package.json`.

  ```diff
  // package.json
    {
      ...
  -   "eslintConfig": {
  -     "extends": [
  -       "react-app",
  -       "react-app/jest"
  -     ]
  -   },
      ...
    }
  ```

## Coding style convention

### Javascript coding styling

#### 1. Basic [ESLint](https://eslint.org/) eco-system for React

```bash
# React for ESLint (not control in CRA)
yarn add --dev \
    @babel/eslint-parser \
    @babel/preset-react \
    eslint-plugin-import \
    eslint-plugin-jest \
    eslint-plugin-n \
    eslint-plugin-node \
    eslint-plugin-promise \
    eslint-plugin-react
```

```javascript
// in .eslintrc.js
{
  env: {
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
    "jest",
  ],
  extends: [
    // Ref. > https://github.com/jsx-eslint/eslint-plugin-react#readme
    "eslint:recommended",
    "plugin:react/recommended"
  ]
}
```

```javascript
// in .babelrc
{
  "presets": [
    "@babel/preset-react"
  ]
}
```

#### 2. Extend [JavaScript Standard Style](https://standardjs.com/)

```bash
# Extend Statandard Style
yarn add --dev \
    eslint-config-standard \
    eslint-config-standard-jsx \
    eslint-config-standard-react\
    eslint-plugin-standard

# prettier
yarn add --dev prettier
```

```javascript
// in .eslintrc.js
{
  extends: [
    // Ref. > https://www.npmjs.com/package/eslint-config-standard-react
    "standard",
    "standard-jsx",
    "standard-react",
  ],
  // optional
  rules: {
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
}
```

#### 3. Check all about JS styling

- check [`.eslintrc.js`](.eslintrc.js)

- check [`.eslintignore`](.eslintignore)

- check [`.babelrc`](.babelrc)

- check [`.prettierignore`](.prettierignore)

  > Set style sheets ignore.
  > These are controlled by [Style Lint](https://stylelint.io/).

### SCSS Styling: [Style Lint](https://stylelint.io/) with [Community Standard on SCSS](https://www.npmjs.com/package/stylelint-config-standard-scss)

![stylelint-icon](https://stylelint.io/img/light.svg)

```bash
# Add lint system
yarn add --dev \
    stylelint \
    stylelint-config-standard \
    stylelint-config-standard-scss
```

```javascript
// .stylelintrc.js
// Ref. > https://stylelint.io/user-guide/configure
module.exports = {
  extends: [
    // Ref. > https://github.com/stylelint-scss/stylelint-config-standard-scss#readme
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
  ],
};
```

- check [`.stylelintrc.js`](.stylelintrc.js)

- cheeck [`.stylelintignore`](.stylelintignore)

### VCM Integration: [Husky](https://typicode.github.io/husky/#/) and [Lint-staged](https://github.com/okonet/lint-staged#readme)

```bash
# Add integtation system
yarn add --dev \
    husky \
    lint-staged
```

```json
// in package.json
{
  "scripts": {
    "postinstall": "husky install",
    "lint": "lint-staged"
  },
  "lint-staged": {
    "*.{css,scss}": ["stylelint --fix", "git add"],
    "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write", "git add"],
    "*.json": ["prettier --write", "git add"],
    "*.md": ["prettier --write", "git add"]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
}
```

```json
// .vscode/setting.json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
  "eslint.validate": ["javascript"]
}
```

```bash
# husky auto install check
yarn cache clean --all
yarn install --immutable # --> Find out .husky/ folder

# Lint testing
git add .
yarn lint
```

### Testing setup

```json
// in package.json
{
  "scripts": {
    "test": "react-scripts test --coverage",
  },
  "jest": {
    "collectCoverageFrom": [
      "src/**/*.{js,jsx,ts,tsx}",
      "!src/index.{js,jsx,ts,tsx}"
    ],
    "coverageThreshold": {
      "global": {
        "branches": 100,
        "functions": 100,
        "lines": 100,
        "statements": 100
      }
    }
  },
}
```

> **Must read: [Create React App uses for Jest Supported overrides](https://create-react-app.dev/docs/running-tests/#configuration)**

### Check

```bash
# React app in dev
yarn start

# React app testing
yarn test
```

![yarn-run-test.png](.history/yarn-run-test.png)

```bash
# For static resource hosting test
yarn add --dev serve

# Check react app with static hosting
yarn build
serve -s build -l 1234
```
