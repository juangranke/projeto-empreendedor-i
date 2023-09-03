'use strict'

const { dbConfig, dbQuery, fileRead } = require('../../../config/imports')
const searchAppointmentsByUser = fileRead(__dirname, '../../schedule/sql/searchAppointmentsByUser')
require('../../../lib/validations')

module.exports = (idUser) => {
  return new Promise(async (resolve, reject) => {
    try {
        if(idUser == undefined || idUser.isEmpty()) reject({ mensagem: 'Parâmetro inválido.' })
        let appointments = await dbQuery(dbConfig, searchAppointmentsByUser, [idUser])
        if(appointments.length > 0) resolve({ mensagem: 'Agendamentos.', dados: appointments })
        else reject({ mensagem: 'Não há agendamentos.', dados: appointments })
    } catch(err) {
        reject({
            mensagem: 'Ocorreu um erro ao buscar os agendamentos.',
            erro: err
        })
    }
  })
}