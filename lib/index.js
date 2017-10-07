const Jest = require('jest')
const createJestConfig = require('./jest/create-config')

function run(opts = {}) {
  const extraArgv = opts.argv
  const root = opts.root

  let argv = ['--config', JSON.stringify(createJestConfig(opts))]

  if (extraArgv) {
    argv = argv.concat(extraArgv)
  }

  Jest.run(argv, root)
}

run.createJestConfig = createJestConfig

module.exports = run
