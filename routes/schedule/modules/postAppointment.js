'use strict'

const { dbConfig, dbQuery, fileRead } = require('../../../config/imports')
const postAppointment = fileRead(__dirname, '../../schedule/sql/postAppointment')

module.exports = (typeSchedule, idSchedule, idPatient) => {
  return new Promise(async (resolve, reject) => {
    try {
        let appointment = await dbQuery(dbConfig, postAppointment, [idPatient, idSchedule, typeSchedule])
        console.log(appointment)

        resolve({
            mensagem: 'Agendamento realizado com sucesso.'
        })

    } catch(err) {
        reject({
            mensagem: 'Ocorreu um erro ao realizar o agendamento.',
            erro: err
        })
    }
  })
}