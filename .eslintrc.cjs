module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    // React fast refresh
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    // Basic warnings
    "no-unused-vars": "warn",

    // Downgrade react-hooks rules to warnings
    "react-hooks/rules-of-hooks": "warn",
    "react-hooks/exhaustive-deps": "warn",

    // Turn off annoying prop-types rule
    "react/prop-types": "off",

    // Disable other react rules that can be annoying
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
  },
};
