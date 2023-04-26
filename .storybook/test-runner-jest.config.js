const { getJestConfig } = require('@storybook/test-runner');
const path = require('path');

const projectRoot = path.resolve(__dirname, '../');

console.log('testsetk');

module.exports = {
  ...getJestConfig(),
  moduleDirectories: [projectRoot, 'node_modules'],
  moduleNameMapper: {
    '@reuben/(.*)': '<rootDir>/modules/$1',
  },
  rootDir: projectRoot,
};
