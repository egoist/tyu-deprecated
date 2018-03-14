const babelJest = require('babel-jest')
const findBabelConfig = require('find-babel-config')

process.env.NODE_ENV = process.env.NODE_ENV || 'test'

const { file } = findBabelConfig.sync(process.cwd())

module.exports = babelJest.createTransformer(
  file ?
  {
    extends: file,
    babelrc: false
  } :
  {
    babelrc: false,
    presets: [
          [require.resolve('babel-preset-vue-app'), { useBuiltIns: true }]
    ]
  }
)
