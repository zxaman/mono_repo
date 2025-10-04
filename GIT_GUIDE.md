# Git Quick Reference Guide

## 🚀 First Time Setup

```bash
# Configure your Git identity
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## 📁 Starting a New Repository

```bash
# Initialize a new repository
git init

# Add remote repository
git remote add origin https://github.com/username/repository.git
```

## 🔄 Basic Daily Commands

```bash
# Check status of your files
git status

# Add files to staging
git add .                # Add all files
git add filename.txt     # Add specific file

# Commit your changes
git commit -m "Your descriptive commit message"

# Push changes to remote
git push origin main
```

## 🌿 Working with Branches

### Creating and Switching Branches

```bash
# Create and switch to a new branch
git checkout -b feature/your-branch-name

# Switch to an existing branch
git checkout branch-name

# List all branches (* shows current branch)
git branch
```

### Pushing New Branch to Remote

```bash
# First time pushing a new branch
git push -u origin feature/your-branch-name

# After branch is set up, normal push
git push
```

### Branch Management

```bash
# Update your branch with main changes
git checkout main
git pull
git checkout feature/your-branch-name
git merge main

# Delete a branch (locally)
git branch -d branch-name

# Delete a branch (remotely)
git push origin --delete branch-name
```

## 🔄 Syncing with Remote

```bash
# Get latest changes without merging
git fetch

# Get and merge latest changes
git pull

# View remote information
git remote -v
```

## 🚫 Common Issues and Fixes

### Authentication Issues
```bash
# Set up token authentication
git remote set-url origin https://YOUR_TOKEN@github.com/username/repository.git
```

### Undo Changes
```bash
# Undo last commit (keep changes)
git reset --soft HEAD^

# Discard local changes in a file
git checkout -- filename

# Undo add before commit
git reset filename
```

## 💡 Best Practices

1. **Branch Naming**:
   - `feature/` - for new features
   - `bugfix/` - for bug fixes
   - `hotfix/` - for urgent fixes
   - Example: `feature/login-system`

2. **Commit Messages**:
   - Be clear and descriptive
   - Use present tense
   - Example: "Add login functionality" not "Added login functionality"

3. **Regular Updates**:
   - Pull from main regularly
   - Keep branches up to date
   - Resolve conflicts early

## 🔄 Typical Workflow

1. **Start New Feature**:
   ```bash
   git checkout main
   git pull
   git checkout -b feature/new-feature
   ```

2. **Work on Feature**:
   ```bash
   git add .
   git commit -m "Add new feature"
   git push -u origin feature/new-feature
   ```

3. **Update Branch with Main**:
   ```bash
   git checkout main
   git pull
   git checkout feature/new-feature
   git merge main
   ```

4. **Complete Feature**:
   ```bash
   git push
   # Create Pull Request on GitHub
   ```

## 🆘 Quick Help

```bash
# View commit history
git log --oneline

# View changes in a file
git diff filename

# Stash changes temporarily
git stash
git stash pop  # Restore stashed changes

# Clean untracked files
git clean -fd
```

## 🎯 Git Flow Example

1. **Starting a New Feature**
   ```bash
   # Update main
   git checkout main
   git pull

   # Create feature branch
   git checkout -b feature/new-button

   # Work on your code...

   # Add and commit changes
   git add .
   git commit -m "Add new button component"

   # Push to remote
   git push -u origin feature/new-button
   ```

2. **Updating Your Feature Branch**
   ```bash
   # Get latest main changes
   git checkout main
   git pull

   # Update your feature branch
   git checkout feature/new-button
   git merge main

   # Fix any conflicts if they occur
   # Then push updates
   git push
   ```

Remember: Always create a new branch for each feature or fix. Never work directly on the main branch!

This guide provides simple instructions for using Git and GitHub. Keep it handy for quick reference when working with Git repositories.

## Table of Contents
1. [First Time Setup](#first-time-setup)
2. [Basic Git Commands](#basic-git-commands)
3. [Working with Remote Repositories](#working-with-remote-repositories)
4. [Fixing Common Issues](#fixing-common-issues)

## First Time Setup

### Installing Git
1. Download Git from [git-scm.com](https://git-scm.com/)
2. Install with default settings
3. Open terminal/command prompt and verify:
```bash
git --version
```

### Configure Git (One Time Setup)
```bash
# Set your name
git config --global user.name "Your Name"

# Set your email
git config --global user.email "your.email@example.com"
```

## Basic Git Commands

### Starting a New Project
```bash
# Create and enter project folder
mkdir my-project
cd my-project

# Initialize git
git init

# Add files
git add .

# Commit changes
git commit -m "Initial commit"
```

### Daily Commands
```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Describe your changes"

# Get updates
git pull

# Push changes
git push
```

## Working with Remote Repositories

### First Time Setup with GitHub
1. Create repository on GitHub.com
2. Connect your local repo:
```bash
git remote add origin https://github.com/username/repository.git
git branch -M main
git push -u origin main
```

### Authentication with GitHub
1. Generate Personal Access Token (PAT):
   - Go to GitHub.com → Settings → Developer Settings
   - Personal Access Tokens → Generate New Token
   - Select 'repo' and 'workflow' scopes
   - Copy token

2. Use token to push:
```bash
git remote set-url origin https://YOUR_TOKEN@github.com/username/repository.git
```

## Fixing Common Issues

### "Failed to Push" Error
```bash
# Pull first, then push
git pull --rebase origin main
git push origin main
```

### "Remote Already Exists" Error
```bash
# Remove old remote
git remote remove origin

# Add new remote
git remote add origin https://github.com/username/repository.git
```

### Reset Last Commit
```bash
# Undo last commit but keep changes
git reset --soft HEAD~1
```

### Discard All Changes
```bash
# Remove all local changes
git reset --hard
```

## Quick Tips
1. Always `git pull` before starting work
2. Create meaningful commit messages
3. Commit often
4. Check `git status` frequently
5. Use `git branch` to see current branch

## Branching Quick Guide
```bash
# Create new branch
git checkout -b feature-name

# Switch branches
git checkout branch-name

# List branches
git branch

# Delete branch
git branch -d branch-name
```

Remember to replace `username` and `repository` with your actual GitHub username and repository name in all commands.

Need more help? Check [Git Documentation](https://git-scm.com/doc) or [GitHub Guides](https://guides.github.com/).
