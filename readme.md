# SVG symbol viewer

A simple drag-and-drop SVG symbol viewer web app.

## Setup

For development tools and building:

1. Install the latest [Node.js and NPM](https://nodejs.org).
2. Run `npm install` within the project root directory in Terminal.
3. Copy `.env.example`, rename it `.env` and customize.
4. If the enviromnent is `production`, run `npm run build`.
5. Start the app server with `npm start`.

Ensure your editor supports:

- [EditorConfig](http://editorconfig.org).
- [ESLint](http://eslint.org), respecting `package.json` config. Atom users install [linter-eslint](https://atom.io/packages/linter-eslint).

## Scripts

| Command               | Purpose                                         |
|:----------------------|:------------------------------------------------|
| `npm run lint:js`     | Lint JS (see `eslintConfig` in `package.json`). |
| `npm run lint:js:fix` | Lint JS and automatically fix issues.           |
| `npm run clean`       | Delete `/public/bundle`.                        |
| `npm run build`       | Compile JS to `/public/bundle`.                 |
| `npm run build:watch` | Build, rebuilding on source file changes.       |
| `npm start`           | Start the app server.                           |

## Browser support

IE 11 and modern browser support.
