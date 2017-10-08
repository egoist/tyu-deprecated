const babelJest = require('babel-jest')

process.env.NODE_ENV = process.env.NODE_ENV || 'test'

module.exports = babelJest.createTransformer({
  presets: [
    require.resolve('babel-preset-vue-app')
  ],
  babelrc: true
})
