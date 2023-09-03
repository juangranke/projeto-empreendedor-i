'use strict'

const { dbConfig, dbQuery, fileRead } = require('../../../config/imports')
const deleteAppointment = fileRead(__dirname, '../../schedule/sql/deleteAppointment')
require('../../../lib/validations')

module.exports = (idSchedule) => {
  return new Promise(async (resolve, reject) => {
    try {
        if(idSchedule == undefined || idSchedule.isEmpty()) reject({ mensagem: 'Parâmetro inválido.' })
        let appointment = await dbQuery(dbConfig, deleteAppointment, [idSchedule])
        if(appointment.affectedRows > 0) resolve({ mensagem: 'Cancelamento efetuado.' })
        else reject({ mensagem: 'Ocorreu um erro ao efetuar o cancelamento.' })
    } catch(err) {
        reject({
            mensagem: 'Ocorreu um erro ao efetuar o cancelamento.',
            erro: err
        })
    }
  })
}