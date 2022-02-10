const prettierSvelte = require('prettier-plugin-svelte')

module.exports = {
  tabWidth: 2,
  arrowParens: 'avoid',
  endOfLine: 'crlf',
  singleQuote: true,
  printWidth: 90,
  plugins: [prettierSvelte],
  semi: false,
  svelteSortOrder: 'options-scripts-markup-styles',
  svelteStrictMode: false,
  svelteIndentScriptAndStyle: true,
  trailingComma: 'none'
}
