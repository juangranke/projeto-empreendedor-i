const express = require('express')
const router = express.Router()

const isValidApiKey = require('../../middlewares/isValidApiKey')
const checkBodyFields = require('../../middlewares/checkBodyFields')

// const validationLogin = require('./validations/login')

module.exports = () => {

  router.post('/', isValidApiKey, checkBodyFields(['email', 'password']), require('./services/login'))

  return router
}