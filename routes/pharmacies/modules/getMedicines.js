'use strict'

const { dbConfig, dbQuery, fileRead } = require('../../../config/imports')
const searchMedicines = fileRead(__dirname, '../../pharmacies/sql/searchMedicines')
require('../../../lib/validations')

module.exports = () => {
  return new Promise(async (resolve, reject) => {
    try {

        let medicines = await dbQuery(dbConfig, searchMedicines)

        if(medicines.length > 0) resolve({ mensagem: 'Medicamentos disponíveis.', dados: medicines })
        else reject({ mensagem: 'Ocorreu um erro ao buscar os medicamentos.', dados: medicines })
    } catch(err) {
        reject({
            mensagem: 'Ocorreu um erro ao buscar os medicamentos.',
            erro: err
        })
    }
  })
}