# SVG symbol viewer

[![CI status](https://github.com/jaydenseric/svg-symbol-viewer/workflows/CI/badge.svg)](https://github.com/jaydenseric/svg-symbol-viewer/actions)

An online, no-upload drag-and-drop SVG file symbol extractor and viewer: [svgsymbolviewer.io](https://svgsymbolviewer.io).

## Setup

1.  Install the latest [Node.js](https://nodejs.org) and [npm](https://npmjs.com).
2.  Duplicate `.env.build.example` as `.env.build` and configure.
3.  Run `npm install` in the project directory with Terminal.
4.  Run `npm run now:dev -- -l 3000` (`3000` should match the `PORT` in `.env.build`) for development.

Your editor must support:

- [EditorConfig](https://editorconfig.org)
- [ESLint](https://eslint.org)
  - [Visual Studio Code](https://code.visualstudio.com): [`vscode-eslint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Atom](https://atom.io): [`linter-eslint`](https://atom.io/packages/linter-eslint)
