# day1-ui

- [day1-ui](#day1-ui)
  - [Overview](#overview)
    - [Architecture](#architecture)
  - [Quick start](#quick-start)
    - [Front part](#front-part)
    - [E2E part](#e2e-part)
    - [etc](#etc)

## Overview

### Architecture

- TODO: Front part

- [E2E part](README.TECH.md#end-to-end-testing)

## Quick start

This project does not need to install
cause of [PnP(Plug'n'Play)](https://yarnpkg.com/features/pnp)
with [Yarn Berry](package.json#L5).

```bash
# Check monorepo worktree from root workspace
yarn workspaces list --recursive

# If you are developer, please check husky endabled for git client-side hook
yarn prepare
```

### Front part

> TODO: Move to `front/` workspace

```bash
# Run the React Application written by TypeScript
yarn start

# Run the Testing Library with Code Coverage
yarn test

# (Option) Formatting with lint system for git staged files
yarn lint

# Bundle to complie from TypeScript to Static Files
yarn build

# Hosting Test
yarn dlx serve # if serve module does not exist
yarn serve
```

Check in your browser: <http://localhost:3001>

### [E2E part](./e2e/README.md#e2e)

```bash
# Yarn Commands for e2e workspace

# Run the Testing Library with Code Coverage
yarn test:e2e

# Run the End-to-end Testing using Selenium-Cucumber-Framework
yarn e2e

# Generate human-readable HTML report
yarn report
```

### etc

```bash
# Clean cache data
yarn cache clean --all

# Re-install dependencies with PnP
yarn install --check-cache # --immutable --immutable-cache
```
