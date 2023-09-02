const express = require('express')
const router = express.Router()

const isValidApiKey = require('../../middlewares/isValidApiKey')
const checkBodyFields = require('../../middlewares/checkBodyFields')

module.exports = () => {
  router.get('/specialtys', isValidApiKey, require('./services/getSpecialtys'))
  router.get('/professionals/:specialty', isValidApiKey, require('./services/getProfessionals'))
  router.get('/dates/:specialty/:idProfessional', isValidApiKey, require('./services/getDates'))

  return router
}