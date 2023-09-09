const express = require('express')
const router = express.Router()

const isValidApiKey = require('../../middlewares/isValidApiKey')
const checkBodyFields = require('../../middlewares/checkBodyFields')

module.exports = () => {
  router.get('/specialtys/:typeSchedule', isValidApiKey, require('./services/getSpecialtys'))
  router.get('/professionals/:typeSchedule/:idSpecialty', isValidApiKey, require('./services/getProfessionals'))
  router.get('/dates/:typeSchedule/:idSpecialty/:idProfessional', isValidApiKey, require('./services/getDates'))

  router.get('/appointments/:typeSchedule/:idUser/:scheduleStatus', isValidApiKey, require('./services/getAppointments'))
  router.post('/appointment/:idSchedule/:idUser', isValidApiKey, require('./services/postAppointment'))
  router.delete('/appointment/:idSchedule', isValidApiKey, require('./services/deleteAppointment'))

  return router
}