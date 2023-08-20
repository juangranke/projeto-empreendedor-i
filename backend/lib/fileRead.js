const fs = require('fs')
const path = require('path')

module.exports = (arquivo) => {
    try {
        return fs.readFileSync(path.resolve(__dirname, `../sql/${arquivo}.sql`), 'utf-8')
    } catch (err) { return err }
}