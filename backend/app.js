const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
require('dotenv').config()


const bcrypt = require('bcrypt')
const isValidApiKey = require('./middleware/isValidApiKey')
const checkFields = require('./middleware/checkFields')

const { dbConfig, dbQuery, sqlRead, moment } = require('./config/imports')

app.get('/', isValidApiKey, checkFields(), async (req, res) => {
    res.status(200).json({
        mensagem: 'Servidor online.'
    })
})

app.post('/login', isValidApiKey, checkFields(['email', 'senha']), (req, res) => {
    res.status(200).json({ mensagem: 'Funcionou!' })
})

app.listen(process.env.PORT, err => {
    if(err) console.log(`Ocorreu um erro ao iniciar o servidor. Erro: ${err}`)
    else console.log(`Servidor iniciado na porta ${process.env.PORT}`)
})