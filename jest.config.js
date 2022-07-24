module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^components(.*)$': '<rootDir>/src/client/components$1',
    '^styles(.*)$': '<rootDir>/src/client/styles$1',
    '^assets(.*)$': '<rootDir>/src/client/assets$1',
    '^pages(.*)$': '<rootDir>/src/client/pages$1',
    '^types(.*)$': '<rootDir>/src/client/types$1',
    '^enums(.*)$': '<rootDir>/src/client/enums$1',
    '^hooks(.*)$': '<rootDir>/src/client/hooks$1',
    '^store(.*)$': '<rootDir>/src/client/store$1',
    '^services(.*)$': '<rootDir>/src/client/services$1',
    '^__mocks__(.*)$': '<rootDir>/src/client/__mocks__$1',
    '\\.(css|scss)$': '<rootDir>/src/client/__mocks__/style-mock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/src/client/__mocks__/setup-tests.ts'],
};
