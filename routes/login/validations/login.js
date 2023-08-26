'use strict'

const { check } = require('express-validator')

module.exports =
  [
    check('email')
      .isLength({ min: 3 })
      .withMessage('E-mail informado inválido.'),
    check('password')
      .isLength({ min: 8 })
      .withMessage('Senha não informada')
  ]
