'use strict'

const { dbConfig, dbQuery, fileRead } = require('../../../config/imports')
const searchSpecialtys = fileRead(__dirname, '../../schedule/sql/searchSpecialtys')

module.exports = (typeSchedule) => {
  return new Promise(async (resolve, reject) => {
    try {
        let specialtys = await dbQuery(dbConfig, searchSpecialtys, [typeSchedule])

        resolve({
            mensagem: 'Especialidades com agenda disponível.',
            dados: specialtys
        })

    } catch(err) {
        reject({
            mensagem: 'Ocorreu um erro ao buscar as agendas disponíveis.',
            erro: err
        })
    }
  })
}