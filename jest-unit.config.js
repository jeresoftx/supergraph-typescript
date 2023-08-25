const { resolve } = require('path');

const root = resolve(__dirname);

module.exports = {
  rootDir: root,
  displayName: 'test',
  testRegex: '/test/units/.*\\.test\\.(js|ts)$',
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^mongoose$': '<rootDir>/node_modules/mongoose',
  },
  // setupFilesAfterEnv: ['<rootDir>/tests/unit/bootstrap.js'],
};
