module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
  ],

  plugins: ['stylelint-order'],

  processors: ['stylelint-processor-styled-components'],

  rules: {
    // Possible errors
    'block-no-empty': true,
    'color-no-invalid-hex': true,

    // Limit language features
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-single-line-max-declarations': 0,
    'declaration-no-important': true,
    'max-nesting-depth': 4,
    'selector-max-empty-lines': 0,
    'selector-max-universal': 1,
    'shorthand-property-no-redundant-values': true,

    // Stylistic
    'color-hex-case': 'lower', // eslint-disable-line sort-keys
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    indentation: 2,
    'length-zero-no-unit': true,
    'max-empty-lines': 1,
    'no-eol-whitespace': true,
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,
    'property-case': 'lower',
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'string-quotes': 'single',
    'unit-case': 'lower',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',

    // Plugin rules
    'order/properties-alphabetical-order': true, // eslint-disable-line sort-keys
  },
};
