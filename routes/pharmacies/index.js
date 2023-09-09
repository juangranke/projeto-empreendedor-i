const express = require('express')
const router = express.Router()

const isValidApiKey = require('../../middlewares/isValidApiKey')
const checkBodyFields = require('../../middlewares/checkBodyFields')

module.exports = () => {

  router.get('/', isValidApiKey, require('./services/getPharmacies'))
  router.get('/medicines', isValidApiKey, require('./services/getMedicines'))

  return router
}