module.exports = {
  semi: false,
  tabWidth: 2,
  singleQuote: true,
  printWidth: 80,
  trailingComma: none,
  overrides: [
    {
      files: ['*.json5'],
      options: {
        singleQuote: false,
        quoteProps: 'preserve'
      }
    },
    {
      files: ['*.yml'],
      options: {
        singleQuote: false
      }
    }
  ]
}
