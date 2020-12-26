module.exports = {
  extends: ['@commitlint/config-conventional'],

  // Ignore version bumps, e.g. `5.2.12`
  ignores: [commit => /\d{1,2}\.\d{1,2}\.\d{1,3}/.test(commit)],

  parserPreset: './commitlint.parser',

  rules: {
    'scope-empty': [2, 'always'],
    'subject-case': [2, 'always', 'sentence-case'],
    'type-case': [2, 'always', 'upper-case'],
    'type-enum': [
      2,
      'always',
      ['CHORE', 'DOCS', 'FEAT', 'FIX', 'REFACTOR', 'REVERT', 'TECH', 'TEST'],
    ],
  },
};
