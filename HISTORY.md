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
# For eslintConfig dependency resolve
yarn add --dev \
    eslint-config-react-app \
    eslint-plugin-jest

# For static resource hosting test
yarn add --dev serve
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

- Test below commands:

  ```bash
  # React app in dev
  yarn test
  yarn start

  # Check react app with static hosting
  yarn build
  serve -s build -l 1234
  ```
