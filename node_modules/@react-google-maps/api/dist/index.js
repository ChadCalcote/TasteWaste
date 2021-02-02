
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./reactgooglemapsapi.cjs.production.min.js')
} else {
  module.exports = require('./reactgooglemapsapi.cjs.development.js')
}
