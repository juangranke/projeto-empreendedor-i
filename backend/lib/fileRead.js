const path = require('path')
const fs = require('fs')

module.exports = (dirname, filename) => {
  return fs.readFileSync(path.join(dirname, filename + '.sql')).toString()
}