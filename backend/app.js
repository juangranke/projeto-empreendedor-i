const app = require('express')()
require('dotenv').config()

const bcrypt = require('bcrypt')
const isValidApiKey = require('./middleware/isValidApiKey')
const { dbConfig, dbQuery, sqlRead, moment } = require('./config/imports')

app.get('/', isValidApiKey, async (req, res) => {
    res.status(200).json({
        mensagem: 'Servidor online.'
    })
})

app.post('/login', isValidApiKey, (req, res) => {
    console.log(req.body)
    res.status(200).json({ mensagem: 'Funcionou!' })
})

app.listen(process.env.PORT, err => {
    if(err) console.log(`Ocorreu um erro ao iniciar o servidor. Erro: ${err}`)
    else console.log(`Servidor iniciado na porta ${process.env.PORT}`)
})