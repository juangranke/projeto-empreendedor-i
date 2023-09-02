const express = require('express')
const router = express.Router()

const isValidApiKey = require('../../middlewares/isValidApiKey')
const checkBodyFields = require('../../middlewares/checkBodyFields')

module.exports = () => {
  router.get('/specialtys', isValidApiKey, require('./services/getSpecialtys'))
  return router
}