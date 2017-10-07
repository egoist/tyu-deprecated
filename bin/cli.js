#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const update = require('update-notifier')
const runJest = require('../lib')
const pkg = require('../package')

let appPkg = {}
if (fs.existsSync('package.json')) {
  appPkg = require(path.resolve('package.json'))
}

if (!appPkg.babel && !fs.existsSync('.babelrc') && !fs.existsSync('tsconfig.json')) {
  console.error('You need to configure ".babelrc" or "babel" field in package.json in order to let jest-vue transform ES2015 code in single file component.')
  process.exit(1)
}

const jestConfig = appPkg.jest

process.on('unhandledRejection', reason => {
  console.error(reason.stack)
})

runJest({
  argv: process.argv.slice(2),
  jestConfig
})

update({ pkg }).notify()
