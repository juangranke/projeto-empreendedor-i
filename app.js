const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const moment = require('moment')
const helmet = require('helmet')

morgan.token('customDate', () => moment().format('DD/MM/YYYY HH:mm:ss'))
morgan.token('statusColor', (req, res) => {
  const status = (typeof res.headersSent !== 'boolean' ? Boolean(res.header) : res.headersSent) ? res.statusCode : undefined
  const color = status >= 500 ? 31  // red
    : status >= 400 ? 33            // yellow
      : status >= 300 ? 36          // cyan
        : status >= 200 ? 32        // green
          : 0                       // no color
  return '\x1b[' + color + 'm' + status + '\x1b[0m'
})

app.use(morgan(':customDate \x1b[33m:method\x1b[0m :url :statusColor - :response-time ms - :res[content-length]'))

app.use(cors())
app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)

  next()
})
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require('./routes/router')(app)
require('dotenv').config()

app.listen(process.env.PORT, err => {
    if(err) console.log(`Ocorreu um erro ao iniciar o servidor. Erro: ${err}`)
    else console.log(`Servidor iniciado na porta ${process.env.PORT}`)
})