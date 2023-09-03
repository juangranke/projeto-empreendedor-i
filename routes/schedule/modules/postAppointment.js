'use strict'

const { dbConfig, dbQuery, fileRead } = require('../../../config/imports')
const postAppointment = fileRead(__dirname, '../../schedule/sql/postAppointment')

module.exports = (typeSchedule, idSchedule, idPatient) => {
  return new Promise(async (resolve, reject) => {
    try {
        let appointment = await dbQuery(dbConfig, postAppointment, [idPatient, idSchedule, typeSchedule])
        if(appointment.affectedRows > 0) resolve({ mensagem: 'Agendamento realizado com sucesso.' })
        else reject({ mensagem: 'Parâmetro informado inválido.' })
    } catch(err) {
        reject({
            mensagem: 'Ocorreu um erro ao realizar o agendamento.',
            erro: err
        })
    }
  })
}