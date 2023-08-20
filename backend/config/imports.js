require('dotenv').config()

const dbConfig = require('./database/dbConfig')
const dbQuery = require('./database/dbQuery')
const fileRead = require('../lib/fileRead')
const moment = require('moment')

module.exports = { 
    dbConfig,
    dbQuery,
    fileRead,
    moment 
}