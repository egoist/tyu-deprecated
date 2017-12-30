const babelJest = require('babel-jest')
const loadConfig = require('babel-load-config')
const buildConfigChain = require('babel-core/lib/transformation/file/options/build-config-chain')

const config = loadConfig(process.cwd(), buildConfigChain)

process.env.NODE_ENV = process.env.NODE_ENV || 'test'

module.exports = babelJest.createTransformer(config && config.loc ? config.options : {
  presets: [
    [require.resolve('babel-preset-vue-app'), { useBuiltIns: true }]
  ]
})
