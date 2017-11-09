#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const cac = require('cac')
const update = require('update-notifier')
const runJest = require('../lib')
const pkg = require('../package')

process.on('unhandledRejection', reason => {
  console.error(reason.stack)
})

const cli = cac()

cli.command('*', 'Run tests', (input, flags) => {
  let appPkg = {}
  if (fs.existsSync('package.json')) {
    appPkg = require(path.resolve('package.json'))
  }

  const jestConfig = appPkg.jest
  runJest({
    argv: flags['--'],
    jestConfig
  })
})

cli.parse()

update({ pkg }).notify()
