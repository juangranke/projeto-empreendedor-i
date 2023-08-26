const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require('./routes/router')(app)
require('dotenv').config()

app.listen(process.env.PORT, err => {
    if(err) console.log(`Ocorreu um erro ao iniciar o servidor. Erro: ${err}`)
    else console.log(`Servidor iniciado na porta ${process.env.PORT}`)
})