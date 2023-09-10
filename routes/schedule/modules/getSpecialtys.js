'use strict'

const { dbConfig, dbQuery, fileRead } = require('../../../config/imports')
const searchSpecialtys = fileRead(__dirname, '../../schedule/sql/searchSpecialtys')
const searchProcedures = fileRead(__dirname, '../../schedule/sql/searchProcedures')
const searchVaccines = fileRead(__dirname, '../../schedule/sql/searchVaccines')

module.exports = (typeSchedule) => {
  return new Promise(async (resolve, reject) => {
    try {

        let specialtys

        if(typeSchedule == 5 || typeSchedule == 6) {
          specialtys = await dbQuery(dbConfig, searchSpecialtys, [typeSchedule])
          console.log(specialtys)
        } else if(typeSchedule == 7) {
          specialtys = await dbQuery(dbConfig, searchProcedures)
        } else if(typeSchedule == 8) { 
          specialtys = await dbQuery(dbConfig, searchVaccines)
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
          resolve({
            mensagem: 'Não há especialidades disponíveis.',
            dados: []
          })
        }

    } catch(err) {
        reject({
            mensagem: 'Ocorreu um erro ao buscar as especialidades disponiveis.',
            erro: err
        })
    }
  })
}