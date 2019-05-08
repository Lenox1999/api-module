const { resolve } = require('path')

module.exports = function (moduleOptions) {
  const options = {
    ...this.options['api-module'],
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'api-module.js',
    options
  })
}

module.exports.meta = require('../package.json')
