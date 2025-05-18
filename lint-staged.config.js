/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
module.exports = {
  'src/**/*.{ts,tsx}': ['eslint --fix'],
  'src/**': ['prettier --write --ignore-unknown'],
};
