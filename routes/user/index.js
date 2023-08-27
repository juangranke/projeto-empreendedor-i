const express = require('express')
const router = express.Router()

const isValidApiKey = require('../../middlewares/isValidApiKey')
const checkBodyFields = require('../../middlewares/checkBodyFields')

module.exports = () => {

  router.get('/:id', isValidApiKey, require('./services/getUser'))
  router.post('/create', isValidApiKey, checkBodyFields(['full_name', 'birth_date', 'email', 'password', 'permission']), require('./services/createUser'))
  router.delete('/:id', isValidApiKey, require('./services/deleteUser'))

  return router
}