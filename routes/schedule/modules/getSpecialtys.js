'use strict'

const { dbConfig, dbQuery, fileRead } = require('../../../config/imports')
const searchSpecialtys = fileRead(__dirname, '../../schedule/sql/searchSpecialtys')
const searchProcedures = fileRead(__dirname, '../../schedule/sql/searchProcedures')

module.exports = (typeSchedule) => {
  return new Promise(async (resolve, reject) => {
    try {

        let specialtys

        if(typeSchedule == 5 || typeSchedule == 6) {
          specialtys = await dbQuery(dbConfig, searchSpecialtys, [typeSchedule])
        } else if(typeSchedule == 7) {
          specialtys = await dbQuery(dbConfig, searchProcedures)
        } else {
          reject({
            mensagem: 'Ocorreu um erro ao buscar as especialidades disponíveis.'
          })
        }

        if(specialtys.length > 0) {
          resolve({
              mensagem: 'Especialidades com agenda disponível.',
              dados: specialtys
          })
        } else {
          reject({
            mensagem: 'Ocorreu um erro ao buscar as especialidades disponíveis.'
          })
        }

    } catch(err) {
        reject({
            mensagem: 'Ocorreu um erro ao buscar as especialidades disponíveis.',
            erro: err
        })
    }
  })
}