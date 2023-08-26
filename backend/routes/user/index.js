const express = require('express')
const router = express.Router()

const isValidApiKey = require('../../middlewares/isValidApiKey')
const checkFields = require('../../middlewares/checkFields')

module.exports = () => {

    router.post('/create', isValidApiKey, checkFields(['nome_completo', 'data_nascimento', 'email', 'password', 'permissao']), require('./services/createUser'))
    router.delete('/:id', isValidApiKey, require('./services/deleteUser'))

  return router
}