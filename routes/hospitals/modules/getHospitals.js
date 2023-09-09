'use strict'

const { dbConfig, dbQuery, fileRead } = require('../../../config/imports')
const searchHospitals = fileRead(__dirname, '../../hospitals/sql/searchHospitals')
require('../../../lib/validations')

module.exports = () => {
  return new Promise(async (resolve, reject) => {
    try {

        let hospitals = await dbQuery(dbConfig, searchHospitals)

        if(hospitals.length > 0) resolve({ mensagem: 'Hospitais disponíveis.', dados: hospitals })
        else reject({ mensagem: 'Ocorreu um erro ao buscar os hospitais disponíveis.', dados: hospitals })
    } catch(err) {
        reject({
            mensagem: 'Ocorreu um erro ao buscar os hospitais disponíveis.',
            erro: err
        })
    }
  })
}