const express = require('express')
const router = express.Router()

const isValidApiKey = require('../../middlewares/isValidApiKey')
const checkBodyFields = require('../../middlewares/checkBodyFields')

module.exports = () => {
  router.get('/specialtys/:typeSchedule', isValidApiKey, require('./services/getSpecialtys'))
  router.get('/professionals/:typeSchedule/:specialty', isValidApiKey, require('./services/getProfessionals'))
  router.get('/dates/:typeSchedule/:idSpecialty/:idProfessional', isValidApiKey, require('./services/getDates'))

  router.post('/appointment/:typeSchedule/:idSchedule/:idPatient', isValidApiKey, require('./services/postAppointment'))

  return router
}