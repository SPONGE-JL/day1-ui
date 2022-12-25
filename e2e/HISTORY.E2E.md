# HISTORY on E2E

- [HISTORY on E2E](#history-on-e2e)
  - [Package for E2E testing](#package-for-e2e-testing)
    - [Initiation with separation from application](#initiation-with-separation-from-application)

## Package for E2E testing

### Initiation with separation from application

```json
// Add worktree to package.json
{
  "workspaces": ["e2e"]
}
```

```bash
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
