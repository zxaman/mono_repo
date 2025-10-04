# Angular Monorepo with Nx and PrimeNG

Welcome to your Angular monorepo project! This guide will walk you through setting up and working with an Angular monorepo using Nx and PrimeNG components. Whether you're new to Angular or just new to monorepos, this README will explain everything step by step.

This repository has been initialized with the basic structure needed for an Nx workspace with Angular and PrimeNG. You'll find all the configuration files needed to get started right away.

## Table of Contents
1. [What is a Monorepo?](#what-is-a-monorepo)
2. [What is Nx?](#what-is-nx)
3. [What is PrimeNG?](#what-is-primeng)
4. [Prerequisites](#prerequisites)
5. [Creating the Monorepo](#creating-the-monorepo)
6. [Adding PrimeNG](#adding-primeng)
7. [Creating Applications](#creating-applications)
8. [Creating Libraries](#creating-libraries)
9. [Creating Components](#creating-components)
10. [Running the Project](#running-the-project)
11. [Building the Project](#building-the-project)
12. [Testing](#testing)
13. [Useful Nx Commands](#useful-nx-commands)
14. [Project Structure](#project-structure)

## What is a Monorepo?

A monorepo is a single repository that contains multiple related projects. Instead of having separate repositories for each application or library, everything lives in one place. This approach offers several benefits:

- **Shared Code**: Easily share code between projects
- **Consistent Tooling**: All projects use the same build tools, linters, and configurations
- **Atomic Changes**: Make changes across multiple projects in a single commit
- **Simplified Dependency Management**: Manage dependencies in one place

## What is Nx?

Nx is a smart, fast, and extensible build system that helps you develop, test, build, and maintain large-scale monorepos. It provides:

- **Smart Builds**: Only rebuilds what's necessary
- **Affected Commands**: Run commands only on projects that were affected by changes
- **Code Generation**: Scaffolding tools for applications, libraries, and components
- **Dependency Graph**: Visualize relationships between projects
- **Distributed Caching**: Share build results across your team

## What is PrimeNG?

PrimeNG is a rich set of open-source UI components for Angular. It provides over 80 components including data tables, charts, forms, menus, and more. PrimeNG helps you build beautiful, responsive applications with minimal effort.

## Prerequisites

Before creating your monorepo, ensure you have the following installed:

1. **Node.js** (version 14 or higher)
2. **npm** (comes with Node.js) or **yarn**

Check your versions:
```bash
node --version
npm --version
```

This repository has already been initialized with the basic structure needed for an Nx workspace. You'll find configuration files such as `package.json`, `nx.json`, `tsconfig.base.json`, and directory structures for `apps/` and `libs/`.

## Creating the Monorepo

This repository has already been initialized with the basic structure for an Nx workspace. If you're starting fresh, you would follow these steps. Since you're using this repository, you can skip to [Adding PrimeNG](#adding-primeng) after installing dependencies.

### 1. Install Nx Globally
First, install Nx CLI globally:
```bash
npm install -g nx
```

### 2. Install Dependencies
Install the project dependencies:
```bash
npm install
```

### 3. Create a New Nx Workspace (Alternative Approach)
If you prefer to create a new workspace from scratch, you can use:
```bash
npx create-nx-workspace@latest my-org --preset=angular
```

During the setup, you'll be prompted for:
- **Application name**: Choose a name for your first application (e.g., "my-app")
- **Default stylesheet format**: Choose SCSS for better styling capabilities
- **Enable distributed caching**: Recommended to enable for better performance

### 4. Navigate to Your Workspace
```bash
cd my-org
```

## Adding PrimeNG

### 1. Install PrimeNG and Dependencies
```bash
npm install primeng
npm install primeicons
npm install @angular/cdk
```

### 2. Configure Styles
Add PrimeNG styles to your application's `angular.json` file in the `styles` array:
```json
"styles": [
  "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
  "node_modules/primeng/resources/primeng.min.css",
  "node_modules/primeicons/primeicons.css",
  "src/styles.scss"
]
```

### 3. Import PrimeNG Modules
In your application's module file (e.g., `app.module.ts`), import the components you want to use:
```typescript
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';

@NgModule({
  imports: [
    ButtonModule,
    CardModule
    // ... other imports
  ],
  // ... rest of the module
})
export class AppModule { }
```

## Creating Applications

### Create a New Application
```bash
nx generate @nx/angular:application my-second-app
```

Options:
- `--routing`: Add routing to the application
- `--style=scss`: Use SCSS for styling
- `--standalone`: Create a standalone application (Angular 15+)

Example with options:
```bash
nx generate @nx/angular:application dashboard --routing --style=scss
```

## Creating Libraries

Libraries are reusable code that can be shared across applications.

### Create a New Library
```bash
nx generate @nx/angular:library shared-ui
```

This creates:
- A new library in `libs/shared-ui`
- A test suite for the library
- A default component and module

### Create a Library Component
```bash
nx generate @nx/angular:component button --project=shared-ui
```

## Creating Components

### Create a Component in an Application
```bash
nx generate @nx/angular:component header --project=my-app
```

### Create a Component in a Library
```bash
nx generate @nx/angular:component data-table --project=shared-ui
```

## Running the Project

### Serve a Specific Application
```bash
nx serve my-app
```

### Serve with Custom Port
```bash
nx serve my-app --port=4201
```

### Serve Multiple Applications
```bash
nx serve my-app --dev
nx serve dashboard --dev
```

### Open in Browser
The application will be available at `http://localhost:4200` by default.

## Building the Project

### Build a Specific Application
```bash
nx build my-app
```

### Build for Production
```bash
nx build my-app --prod
```

### Build All Affected Projects
```bash
nx affected:build
```

## Testing

### Run Tests for a Specific Project
```bash
nx test my-app
```

### Run Tests for All Projects
```bash
nx run-many --target=test --all
```

### Run Affected Tests Only
```bash
nx affected:test
```

### Run Tests in Watch Mode
```bash
nx test my-app --watch
```

## Useful Nx Commands

### View Project Graph
Visualize dependencies between projects:
```bash
nx graph
```

### Check Affected Projects
See which projects were affected by recent changes:
```bash
nx affected:graph
```

### Lint Code
```bash
nx lint my-app
```

### Run Multiple Targets
```bash
nx run-many --target=build --projects=my-app,dashboard
```

### Add Dependencies
```bash
nx add @angular/material
```

### List Available Generators
```bash
nx list
```

## Project Structure

After setup, your monorepo will have this structure:
```
my-org/
├── apps/
│   ├── my-app/
│   │   ├── src/
│   │   │   ├── app/
│   │   │   ├── assets/
│   │   │   ├── environments/
│   │   │   └── index.html
│   │   ├── project.json
│   │   └── tsconfig.app.json
│   └── my-app-e2e/
├── libs/
├── tools/
├── .gitignore
├── angular.json
├── nx.json
├── package.json
├── tsconfig.base.json
└── workspace.json
```

### Key Files Explained

- **.gitignore**: Specifies files and directories that Git should ignore
- **angular.json**: Angular CLI configuration
- **nx.json**: Nx configuration including cache settings and project configurations
- **workspace.json**: Workspace configuration defining project targets
- **tsconfig.base.json**: Base TypeScript configuration for all projects
- **package.json**: Dependencies and scripts for the entire workspace

### Apps Directory
Contains all your Angular applications. Each application is a standalone runnable project.

### Libs Directory
Contains reusable libraries that can be shared across applications.

## Best Practices

1. **Shared Libraries**: Put common functionality in libraries under `libs/`
2. **Naming Conventions**: Use consistent naming for projects (e.g., `feature-name`, `shared-name`)
3. **Dependency Management**: Be mindful of dependencies between projects
4. **Code Organization**: Group related functionality in feature libraries
5. **Testing**: Write tests for all components and libraries
6. **Documentation**: Document your libraries for other team members

## Troubleshooting

### Common Issues

1. **Port Already in Use**:
   ```bash
   nx serve my-app --port=4201
   ```

2. **Build Errors**:
   ```bash
   nx build my-app --verbose
   ```

3. **Cache Issues**:
   ```bash
   nx reset
   ```

4. **Dependency Issues**:
   ```bash
   npm install
   ```

## Next Steps

1. Explore the [Nx Documentation](https://nx.dev)
2. Check out [PrimeNG Components](https://www.primefaces.org/primeng/)
3. Learn about [Angular](https://angular.io)

## Getting Started with This Repository

This repository has been pre-configured with the basic structure for an Angular monorepo using Nx. To get started:

1. Install dependencies: `npm install`
2. Create your first application: `nx generate @nx/angular:application my-app`
3. Add PrimeNG as described in the [Adding PrimeNG](#adding-primeng) section
4. Serve your application: `nx serve my-app`

## Contributing

When adding new features or fixing bugs:
1. Create a new branch for your work
2. Make your changes
3. Run affected tests to ensure nothing breaks
4. Commit your changes with a clear message
5. Push and create a pull request

Happy coding!