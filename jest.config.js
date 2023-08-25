const { resolve } = require('path');

const root = resolve(__dirname);

module.exports = {
  rootDir: root,
  preset: 'ts-jest',
  projects: [
    '<rootDir>/jest-unit.config.js',
    '<rootDir>/jest-integration.config.js',
  ],
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverage: true,
  coverageReporters: ['lcov', 'html'],
  testEnvironment: 'node',
  verbose: true,
  cacheDirectory: '.tmp/jestCache',
  collectCoverageFrom: ['src/**/*.ts'],
};
