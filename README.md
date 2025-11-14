# 🚀 create-npm-cmd

> A modern TypeScript starter template for building CLI tools

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)

## ✨ Features

- 🎯 **TypeScript First** - Full TypeScript support with strict type checking
- 📦 **Zero Config** - Pre-configured build system with tsup
- 🔄 **Semantic Release** - Automated versioning and changelog generation
- ⚡ **Fast Build** - Optimized bundle with minification

## 🎯 Quick Start

```bash
# Clone this repository
git clone https://github.com/amirkabiri/create-npm-cmd.git my-awesome-cli
cd my-awesome-cli

# Install dependencies
npm install

# Build
npm run build

# Test locally
npm link
my-awesome-npm-cmd --help
```

## 📖 Usage

### Running the Example

```bash
my-awesome-npm-cmd example
# Output: Hello World!
```

### Adding New Commands

1. Create a command file in `src/commands/`:

```typescript
// src/commands/my-command.ts
import chalk from 'chalk';

export function myCommand() {
  console.log(chalk.green('My custom command!'));
}
```

2. Register it in `src/cli.ts`:

```typescript
import { myCommand } from './commands/my-command';

program
  .command('my-command')
  .description('Description of my command')
  .action(myCommand);
```

## 🛠️ Development

### Available Scripts

- `npm run build` - Build for production
- `npm run build:watch` - Build in watch mode
- `npm run clean` - Remove dist folder

## 📦 Publishing

### Setup

1. Create a GitHub repository
2. Set up GitHub Actions secrets:
   - `NPM_TOKEN` - Get from [npmjs.com](https://www.npmjs.com/)

### Commit Message Format

Use [Conventional Commits](https://www.conventionalcommits.org/) for automatic versioning:

```bash
fix: bug fix          # Patch release (0.0.x)
feat: new feature     # Minor release (0.x.0)
feat!: breaking       # Major release (x.0.0)
```

### Publish

```bash
npm run build
npm publish
```

## 🎨 Customization

Update `package.json`:

```json
{
  "name": "your-cli-name",
  "bin": {
    "your-command": "./dist/cli.cjs"
  }
}
```

Update `src/cli.ts`:

```typescript
program
  .name('your-command')
  .description('Your CLI description')
```

## 📚 Tech Stack

- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Commander.js](https://github.com/tj/commander.js)** - CLI framework
- **[Chalk](https://github.com/chalk/chalk)** - Terminal styling
- **[tsup](https://tsup.egoist.dev/)** - TypeScript bundler
- **[semantic-release](https://semantic-release.gitbook.io/)** - Automated versioning

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

---

**Happy CLI building!** 🎉
