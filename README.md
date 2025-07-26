# Dragon Farm Web

A magical dragon breeding adventure built with React, TypeScript, and Vite.

## 🐲 Features

- Modern React 19 with TypeScript
- Tailwind CSS for styling
- Vite for fast development
- Comprehensive testing setup (Vitest + Playwright)
- ESLint and Prettier for code quality
- Husky for git hooks

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🧪 Testing

This project includes both unit tests and end-to-end tests.

### Unit Tests (Vitest)

Run unit tests:

```bash
npm run test          # Run tests once
npm run test:watch    # Run tests in watch mode
npm run coverage      # Run tests with coverage report
```

### End-to-End Tests (Playwright)

Run E2E tests:

```bash
npm run test:e2e        # Run all E2E tests
npm run test:e2e:ui     # Run tests with UI mode
npm run test:e2e:report # Show test report
```

#### Setting up Playwright

If you're setting up the project for the first time, you may need to install Playwright browsers:

```bash
npx playwright install
```

### Test Structure

- Unit tests: `src/**/*.test.{ts,tsx}`
- E2E tests: `tests/*.spec.ts`

The E2E tests cover:

- Homepage loading and basic functionality
- Dragon farm content display
- Interactive elements (buttons, navigation)
- Responsive design on mobile devices
- Page structure and accessibility

## 🛠️ Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # UI components (buttons, cards, etc.)
│   └── theme-provider.tsx
├── lib/                # Utility functions
├── assets/             # Static assets
├── App.tsx             # Main App component
└── main.tsx            # Entry point

tests/                  # E2E tests
├── homepage.spec.ts    # Homepage tests
└── ...

public/                 # Public assets
```

## 🎨 Styling

This project uses Tailwind CSS for styling. The configuration is in `tailwind.config.js`.

## 🔧 Development Tools

### Code Quality

- **ESLint**: Linting for JavaScript/TypeScript
- **Prettier**: Code formatting
- **Husky**: Git hooks for quality checks

### Pre-commit Hooks

The project uses Husky and lint-staged to run checks before commits:

- Prettier formatting
- ESLint fixes
- Type checking

## 🚀 Deployment

The project is configured for deployment with:

- GitHub Actions workflow for CI/CD
- Playwright tests run on every push/PR
- Automatic browser testing across Chrome, Firefox, and Safari

## 📝 Scripts Reference

| Script                | Description                  |
| --------------------- | ---------------------------- |
| `npm run dev`         | Start development server     |
| `npm run build`       | Build for production         |
| `npm run preview`     | Preview production build     |
| `npm run test`        | Run unit tests               |
| `npm run test:watch`  | Run unit tests in watch mode |
| `npm run test:e2e`    | Run Playwright E2E tests     |
| `npm run test:e2e:ui` | Run E2E tests with UI        |
| `npm run lint`        | Run ESLint                   |
| `npm run format`      | Format code with Prettier    |

---

## React + TypeScript + Vite Template

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
