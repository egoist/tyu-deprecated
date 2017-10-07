const fs = require('fs')
const path = require('path')
const merge = require('lodash.merge')

module.exports = function ({
  jestConfig
} = {}) {
  let config = {
    collectCoverageFrom: ['src/**/*.{js,jsx,vue}'],
    setupFiles: [],
    testPathIgnorePatterns: [
      '<rootDir>[/\\\\](build|docs|node_modules|scripts)[/\\\\]'
    ],
    testEnvironment: 'jsdom',
    testURL: 'http://localhost',
    transform: {
      '^.+\\.(js|jsx)$': path.join(__dirname, 'babel-transform.js'),
      '^.+\\.css$': path.join(__dirname, 'css-transform.js'),
      '.*\\.(vue)$': require.resolve('jest-vue')
    },
    moduleFileExtensions: ['js', 'json', 'vue']
  }

  // Apply polyfills before each test
  if (fs.existsSync(path.join(process.cwd(), 'src', 'polyfills.js'))) {
    config.setupFiles.push('<rootDir>/src/polyfills.js')
  }

  if (typeof jestConfig === 'function') {
    config = jestConfig(config)
  } else if (typeof jestConfig === 'object') {
    config = merge(config, jestConfig)
  }

  config.transform['^(?!.*\\.(js|jsx|css|json|vue)$)'] = path.join(__dirname, 'file-transform.js')

  return config
}
