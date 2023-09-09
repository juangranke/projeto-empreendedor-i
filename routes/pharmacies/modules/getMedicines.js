'use strict'

const { dbConfig, dbQuery, fileRead } = require('../../../config/imports')
const searchPharmacies = fileRead(__dirname, '../../pharmacies/sql/searchPharmacies')
require('../../../lib/validations')

module.exports = () => {
  return new Promise(async (resolve, reject) => {
    try {
        let medicines = await dbQuery(dbConfig, searchPharmacies)

        if(medicines.length == 0) reject({ mensagem: 'Não há medicamentos disponíveis.', dados: medicines })
        else {

          let listMedicines = new Set()
          medicines.map(item => listMedicines.add(item.nome_medicamento))
          listMedicines = Array.from(listMedicines)

          let data = {}
          listMedicines.map(i => {
            data[i] = medicines.filter(item => {
              return item.nome_medicamento == i
            })
          })

          resolve({
            mensagem: 'Medicamentos disponíveis.',
            dados: data
          })

        }
    } catch(err) {
        reject({
            mensagem: 'Ocorreu um erro ao buscar os medicamentos.',
            erro: err
        })
    }
  })
}