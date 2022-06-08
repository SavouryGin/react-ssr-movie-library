module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/src/components$1',
    '^styles(.*)$': '<rootDir>/src/styles$1',
    '^assets(.*)$': '<rootDir>/src/assets$1',
    '^pages(.*)$': '<rootDir>/src/pages$1',
    '^types(.*)$': '<rootDir>/src/types$1',
    '^enums(.*)$': '<rootDir>/src/enums$1',
    '^__mocks__(.*)$': '<rootDir>/src/__mocks__$1',
    '\\.(css|scss)$': '<rootDir>/src/__mocks__/style-mock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/setup-tests.ts'],
};
