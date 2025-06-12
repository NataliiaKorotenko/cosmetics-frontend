const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
  {
    ignores: ["node_modules", "dist"],
  },
  {
    files: ["src/**/*.jsx", "src/**/*.js"],
    languageOptions: {
      parser: require("@babel/eslint-parser"),
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
]);
