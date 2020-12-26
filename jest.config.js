module.exports = {
  clearMocks: true,

  coverageDirectory: 'coverage',

  coveragePathIgnorePatterns: [
    '/.cache/',
    '/.storybook/',
    '/node_modules/',
    '/storybook-static/',
  ],

  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },

  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts', 'tsx'],

  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/testing/mocks/styleMock.js',
    '^testHelpers$': '<rootDir>/testing',
  },

  setupTestFrameworkScriptFile: '<rootDir>/testing/setupTests.js',

  snapshotSerializers: ['jest-emotion'],

  testEnvironment: 'jest-environment-jsdom',

  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'babel-jest',
  },
};
