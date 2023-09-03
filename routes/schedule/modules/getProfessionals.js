'use strict'

const { dbConfig, dbQuery, fileRead } = require('../../../config/imports')
const searchProfessionals = fileRead(__dirname, '../../schedule/sql/searchProfessionals')
require('../../../lib/validations')

module.exports = (typeSchedule, idSpecialty) => {
  return new Promise(async (resolve, reject) => {
    try {
        if(idSpecialty == undefined || idSpecialty.isEmpty() || typeSchedule == undefined || typeSchedule.isEmpty()) 
          reject({ mensagem: 'Parâmetro inválido.' })
        let professionals = await dbQuery(dbConfig, searchProfessionals, [typeSchedule, idSpecialty])
        if(professionals.length > 0) resolve({ mensagem: 'Profissionais disponíveis.', dados: professionals })
        else reject({ mensagem: 'Não há profissionais disponíveis.', dados: professionals })
    } catch(err) {
        reject({
            mensagem: 'Ocorreu um erro ao busca os profissionais disponíveis.',
            erro: err
        })
    }
  })
}