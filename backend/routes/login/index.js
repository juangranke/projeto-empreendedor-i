const express = require('express')
const router = express.Router()

const isValidApiKey = require('../../middlewares/isValidApiKey')
const checkFields = require('../../middlewares/checkFields')

// const validationLogin = require('./validations/login')

module.exports = () => {

  router.post('/', isValidApiKey, checkFields(['email', 'senha']), require('./services/login'))
  router.post('/create', isValidApiKey, checkFields(['nome_completo', 'data_nascimento', 'email', 'password', 'permissao']), require('./services/createLogin'))

  return router
}