'use strict'

const { dbConfig, dbQuery, fileRead } = require('../../../config/imports')
const postAppointment = fileRead(__dirname, '../../schedule/sql/postAppointment')

module.exports = (idSchedule, idUser, description_procedure) => {
  return new Promise(async (resolve, reject) => {
    try {
      let desc_procedure = description_procedure == undefined ? null : description_procedure
        let appointment = await dbQuery(dbConfig, postAppointment, [idUser, desc_procedure, idSchedule ])
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