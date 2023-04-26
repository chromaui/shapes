const { getJestConfig } = require('@storybook/test-runner');
const path = require('path');

const projectRoot = path.join(__dirname, '../');
module.exports = {
  ...getJestConfig(),
  moduleDirectories: [projectRoot, 'node_modules'],
  moduleNameMapper: {
    '@reuben/(.*)': '<rootDir>/modules/$1',
  },
  rootDir: projectRoot,
};
