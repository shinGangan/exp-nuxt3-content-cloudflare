/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  extends: ["@nuxt/eslint-config"],
  ignorePatterns: ["dist", "node_modules", ".output", ".nuxt", ".vscode"],
  rules: {
    "vue/max-attributes-per-line": "off",
    "vue/multi-word-component-names": "off",
  },
};
