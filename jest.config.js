module.exports = {
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  preset: 'react-native',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
  },
};
