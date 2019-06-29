const { resolve } = require('path')

module.exports = function (moduleOptions) {
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'api.js'
  })
}

module.exports.meta = require('../package.json')
