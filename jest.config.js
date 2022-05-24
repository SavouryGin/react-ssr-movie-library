module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/src/components$1',
    '^__mocks__(.*)$': '<rootDir>/src/__mocks__$1',
    '\\.(css|scss)$': '<rootDir>/src/__mocks__/style-mock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/setup-tests.ts'],
};
