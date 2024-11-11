const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["eslint:recommended", "prettier", "expo", "turbo"],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
    "react-native/react-native": true,
  },
  plugins: ["only-warn", "react-native"],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
  ],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
  rules: {
    "no-console": "warn",
  },
};
