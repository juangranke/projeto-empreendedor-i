'use strict'

const { dbConfig, dbQuery, fileRead } = require('../../../config/imports')
const searchPharmacies = fileRead(__dirname, '../../pharmacies/sql/searchPharmacies')
require('../../../lib/validations')

module.exports = () => {
  return new Promise(async (resolve, reject) => {
    try {

        let pharmacies = await dbQuery(dbConfig, searchPharmacies)

        if(pharmacies.length > 0) resolve({ mensagem: 'Farmácias disponíveis.', dados: pharmacies })
        else reject({ mensagem: 'Não há farmácias disponíveis na proximidade.', dados: pharmacies })
    } catch(err) {
        reject({
            mensagem: 'Ocorreu um erro ao buscar as farmácias.',
            erro: err
        })
    }
  })
}