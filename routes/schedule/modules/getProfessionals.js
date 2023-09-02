'use strict'

const { dbConfig, dbQuery, fileRead } = require('../../../config/imports')
const searchProfessionals = fileRead(__dirname, '../../schedule/sql/searchProfessionals')
require('../../../lib/validations')

module.exports = (specialty) => {
  return new Promise(async (resolve, reject) => {
    try {
        if(specialty == undefined || specialty.isEmpty()) reject({ mensagem: 'Especialidade inválida.' })
        let professionals = await dbQuery(dbConfig, searchProfessionals)

        resolve({
            mensagem: 'Profissionais disponíveis.',
            dados: professionals
        })
    } catch(err) {
        reject({
            mensagem: 'Ocorreu um erro ao busca os profissionais disponíveis.',
            erro: err
        })
    }
  })
}