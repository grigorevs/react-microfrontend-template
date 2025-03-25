module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    moduleNameMapper: {
      '^@app/(.*)$': '<rootDir>/src/app/$1',
      '^@features/(.*)$': '<rootDir>/src/features/$1',
      '^@pages/(.*)$': '<rootDir>/src/pages/$1',
      '^@shared/(.*)$': '<rootDir>/src/shared/$1',
      '^@styles/(.*)$': '<rootDir>/src/styles/$1',
      '^@tests/(.*)$': '<rootDir>/src/tests/$1',
      '^@e2e/(.*)$': '<rootDir>/src/e2e/$1',
    },
  };