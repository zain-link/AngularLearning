# AngularLearning

A curated repository of Angular practice projects designed for step-by-step learning and experimentation. Each subfolder contains an independent Angular CLI application built with Angular 21 and TypeScript to explore framework concepts, app configuration, routing, and component development.

## Repository Structure

- `college/prac2/` - Angular practice app created for college exercises.
- `college/prac3/` - Additional Angular practice project with incremental learning examples.
- `college/prac4/` - Angular application demonstrating further topics and app development patterns.
- `college/prac5/` - Continued Angular practice with updated features and code structure.

Each project is a standalone Angular application with its own `package.json`, configuration files, and source code.

## Technology Stack

- Angular 21
- TypeScript
- Angular CLI
- RxJS
- Vitest (for unit testing)
- Prettier

## Getting Started

### Prerequisites

- Node.js 18+ (compatible with npm 11.x)
- npm
- Angular CLI installed globally is helpful but not required (`npm install -g @angular/cli`)

### Install Dependencies

Install dependencies separately inside the project folder you want to work with. For example:

```bash
cd college/prac2
npm install
```

Repeat for other practice folders as needed.

### Run a Practice App

To start a development server for a specific practice app:

```bash
cd college/prac2
npm start
```

Then open `http://localhost:4200/` in your browser. The app will reload automatically when source files change.

## Common Commands

From a practice project folder, the following scripts are available:

- `npm start` - launch the development server
- `npm run build` - compile the project for production
- `npm run watch` - compile continuously in development mode
- `npm test` - run unit tests

## Notes

- These practice projects are intended for learning and experimentation.
- Each subproject includes its own Angular CLI configuration and can be explored independently.
- If you want to add new practice exercises, duplicate one of the existing `pracX` folders and update the app sources.

## References

- Angular CLI: https://angular.dev/cli
- Angular Framework: https://angular.dev
- Vitest: https://vitest.dev

## License

This repository is provided for learning purposes. Modify and use it freely for personal Angular practice.