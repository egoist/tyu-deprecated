const babelJest = require('babel-jest')
const loadConfig = require('babel-load-config')
const buildConfigChain = require('babel-core/lib/transformation/file/options/build-config-chain')

const config = loadConfig(process.cwd(), buildConfigChain)

process.env.NODE_ENV = process.env.NODE_ENV || 'test'

if (config.loc) {
  console.log(`> Using external babel config file`)
  console.log(`Location: ${config.loc}`)
}

module.exports = babelJest.createTransformer(config.loc ? config.options : {
  presets: [
    [require.resolve('babel-preset-vue-app'), { useBuiltIns: true }]
  ]
})
