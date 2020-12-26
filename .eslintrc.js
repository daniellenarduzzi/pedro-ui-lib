module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },

  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'eslint:recommended',
  ],

  parser: 'babel-eslint',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  plugins: ['emotion'],

  rules: {
    // Possible errors
    'no-console': 'error',

    // Best practices
    'dot-notation': 'error',
    'no-else-return': 'error',
    'no-floating-decimal': 'error',
    'no-sequences': 'error',

    // Stylistic
    'array-bracket-spacing': 'error',
    camelcase: ['error', { properties: 'always' }],
    'computed-property-spacing': ['error', 'never'],
    curly: 'error',
    'func-style': ['error', 'expression'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'max-len': ['error', { code: 100, ignoreTrailingComments: true }],
    'no-lonely-if': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'one-var-declaration-per-line': 'error',
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    'sort-keys': ['error', 'asc', { caseSensitive: false }],

    // ES6
    'prefer-const': 'error',

    // Imports
    'import/prefer-default-export': 'off',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],

    // PRETTIER
    'prettier/prettier': 'error',

    // REACT
    'jsx-a11y/href-no-hash': [0],
    'jsx-quotes': ['error', 'prefer-double'],
    'react/no-deprecated': 'error',
    'react/no-unsafe': ['error', { checkAliases: true }],
    'react/prop-types': ['error', { ignore: ['children'] }],
    'react/jsx-sort-props': ['error', { ignoreCase: true }],

    // emotion
    'emotion/jsx-import': 'error',
    'emotion/no-vanilla': 'error',
    'emotion/import-from-emotion': 'error',
    'emotion/styled-import': 'error',
  },

  settings: {
    react: {
      version: '16.12.0',
    },
  },
};
