# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **React-based portfolio website** built using Create React App. It's a customizable single-page application that displays professional information including skills, work experience, education, projects, and blog posts. The site supports dark/light theme switching and can dynamically fetch data from GitHub and Medium APIs.

## Key Commands

### Development
- `npm start` - Starts development server with hot reload (runs `fetch.js` first to fetch GitHub/Medium data)
- `npm test` - Runs test suite using Jest and React Testing Library
- `npm run build` - Creates production build (runs `fetch.js` first)

### Deployment
- `npm run deploy` - Deploys to GitHub Pages via gh-pages branch
- `npm run predeploy` - Runs automatically before deploy (creates production build)

### Code Quality
- `npm run format` - Formats all JS, CSS, JSON, and SCSS files using Prettier
- `npm run check-format` - Checks formatting without making changes

## Architecture

### Entry Point and Routing
- **Entry**: `src/index.js` → `src/App.js` → `src/containers/Main.js`
- **Main.js** orchestrates all major sections in sequential order:
  - Header (navigation)
  - Greeting (landing section)
  - Skills
  - StackProgress (proficiency bars)
  - Education
  - WorkExperience
  - Projects (GitHub repos)
  - StartupProject (big projects)
  - Achievement
  - Blogs
  - Talks
  - Twitter
  - Podcast
  - Profile (GitHub profile)
  - Footer
  - ScrollToTopButton

### Configuration
- **Primary configuration file**: `src/portfolio.js` - Edit this to customize all portfolio content
- **Global styling**: `src/_globalColor.scss` - All color scheme variables defined here
- **Environment variables**: `.env` file (based on `env.example`)
  - `REACT_APP_GITHUB_TOKEN` - GitHub API token
  - `GITHUB_USERNAME` - GitHub username
  - `USE_GITHUB_DATA` - Set to "true" to fetch GitHub data
  - `MEDIUM_USERNAME` - Medium username for blog fetching

### Data Fetching
- **fetch.js**: Node script that runs before build/start
  - Fetches GitHub profile data via GraphQL API (pinned repositories, bio, avatar)
  - Fetches Medium blog posts via RSS2JSON API
  - Saves data to `public/profile.json` and `public/blogs.json`
  - These JSON files are consumed by React components at runtime

### Theme System
- **StyleContext** (`src/contexts/StyleContext.js`): React Context for dark/light theme state
- **useLocalStorage hook** (`src/hooks/useLocalStorage.js`): Persists theme preference
- Theme preference detection: Automatically detects system preference on first visit
- Theme toggle: Available via Header component

### Component Structure
Components are organized in two main directories:
- **src/components/**: Reusable UI components (cards, buttons, headers, etc.)
- **src/containers/**: Page sections that compose multiple components

## Development Guidelines

### Core Development Principles
- **Simplicity first**: Always prefer simple solutions over complex ones
- **Clean and organized**: Keep the codebase very clean and well-organized
- **Focused changes**: Only modify code relevant to the task at hand
- **Impact awareness**: Always think about what other components might be affected by code changes
- **Careful modifications**: Only make changes that are requested or you are confident are well understood and related to the change being requested
- **Architectural stability**: Avoid making major changes to patterns and architecture that have shown to work well, unless explicitly instructed

### Code Organization and Structure
- **Avoid duplication**: Use reusable components and utility functions whenever possible
- **Component sizing**: Keep components under 200-300 lines of code; refactor when exceeding this limit
- **Component-based architecture**: Follow SPA component-based design patterns
- **Logical organization**: Organize code into logical folders (components, hooks, services, utils, etc.)
- **Separation of concerns**: Maintain clear boundaries between different components
- **Single responsibility**: Keep components small and focused on a single purpose
- **Named exports**: Prefer named exports over default exports for better consistency

### Environment Awareness
- **Multi-environment support**: Write code that accounts for development, staging, and production environments
- **Environment variables**: Use environment variables for all configuration
- **Protected .env files**: Never overwrite `.env` files without first asking and confirming
- **Conditional logic**: Use proper environment checking for conditional rendering or functionality
- **No mock data in production**: Never add mock data in production code

### Change Management
- **Exhaust existing options**: When fixing issues, don't introduce new patterns without exhausting all options for the existing implementation
- **Clean up old code**: If you introduce a new implementation, remove the old implementation to avoid duplicate logic
- **Backward compatibility**: Ensure existing APIs and components remain functional when making changes

### Development Workflow
- **Use npm scripts**: Use npm/yarn scripts for all common tasks
- **Consistent testing**: Use Jest and React Testing Library as the standard testing framework
- **Hot reloading**: Make use of hot reloading during development for faster iteration

### Type Safety and Code Quality
- **TypeScript when possible**: Use TypeScript for type safety whenever feasible
- **Proper type definitions**: Add proper type definitions for all functions, components, and props
- **Code quality tools**: Use ESLint and Prettier for code quality and formatting
- **Follow established patterns**: Maintain consistency with existing code patterns

### Testing
- Jest and React Testing Library are configured
- Test files: `src/App.test.js`, `src/setupTests.js`
- Canvas mocking available via `jest-canvas-mock`

### Styling
- **SCSS** for all styling
- Each component has its own `.scss` file in the same directory
- Global color variables in `src/_globalColor.scss`
- Light/dark theme classes applied at the root level

## Important Notes

### GitHub Integration
- Requires GitHub token to fetch profile data
- Only displays **pinned repositories** from GitHub profile
- If projects aren't showing, ensure repositories are pinned on GitHub
- Token should have no scopes (just basic read access)

### Medium Integration
- Optional: Only fetches if `MEDIUM_USERNAME` is set
- Uses RSS2JSON API to convert Medium RSS feed to JSON
- Set `displayMediumBlogs` to "true" in `portfolio.js` to show blogs

### Deployment
- Default deployment target: GitHub Pages
- Update `homepage` in `package.json` to your GitHub Pages URL
- Deployment creates `build/` directory and pushes to `gh-pages` branch

### Browser Support
- Production: >0.3% usage, excludes IE 11, Opera Mini
- Development: Latest Chrome, Firefox, Safari

### Assets
- Lottie animations: `src/assets/lottie/` (customizable JSON files)
- Images: `src/assets/images/` (logos, icons, etc.)
- To replace animations: Download Lottie JSON and replace files in `assets/lottie/`

## Common Customization Tasks

1. **Update personal info**: Edit `src/portfolio.js`
2. **Change colors**: Edit `src/_globalColor.scss`
3. **Add/remove sections**: Modify section display flags in `portfolio.js` or comment out imports in `Main.js`
4. **Update resume**: Upload PDF to appropriate location and update `resumeLink` in `portfolio.js`
5. **Change animations**: Replace Lottie JSON files in `src/assets/lottie/`