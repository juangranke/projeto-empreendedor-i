'use strict'

const { dbConfig, dbQuery, fileRead } = require('../../../config/imports')
const searchDates = fileRead(__dirname, '../../schedule/sql/searchDates')
require('../../../lib/validations')

module.exports = (specialty, idProfessional) => {
  return new Promise(async (resolve, reject) => {
    try {
        if(specialty == undefined || specialty.isEmpty() || idProfessional == undefined || idProfessional.isEmpty()) 
            reject({ mensagem: 'Parâmetro inválido.' })
        let dates = await dbQuery(dbConfig, searchDates, [idProfessional])
        if(dates.length > 0) resolve({ mensagem: 'Datas disponíveis.', dados: dates })
        else reject({ mensagem: 'Não há datas disponíveis para marcação.', dados: dates })
    } catch(err) {
        reject({
            mensagem: 'Ocorreu um erro ao buscar as datas disponíveis.',
            erro: err
        })
    }
  })
}