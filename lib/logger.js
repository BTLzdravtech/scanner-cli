'use strict'

const colors = require('colors')

const notTest = process.env.NODE_ENV !== 'testing'

module.exports = {
  log: (...args) => !global.OVERCOMMIT && notTest && console.log('[info]', ...args),
  warn: (...args) => !global.OVERCOMMIT && notTest && console.log('[warn]', colors.yellow(...args)),
  error: (...args) => !global.OVERCOMMIT && notTest && console.error('[error]', colors.red(...args))
}
