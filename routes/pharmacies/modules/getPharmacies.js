'use strict'

const { dbConfig, dbQuery, fileRead } = require('../../../config/imports')
const searchPharmacies = fileRead(__dirname, '../../pharmacies/sql/searchPharmacies')
require('../../../lib/validations')

module.exports = () => {
  return new Promise(async (resolve, reject) => {
    try {
        let pharmacies = await dbQuery(dbConfig, searchPharmacies)
        if(pharmacies.length == 0) reject({ mensagem: 'Não há farmácias disponíveis.', dados: pharmacies })
        else {

          let listPharmacies = new Set()
          pharmacies.map(item => listPharmacies.add(item.nome_farmacia))
          listPharmacies = Array.from(listPharmacies)

          let data = {}
          listPharmacies.map(i => {
            data[i] = pharmacies.filter(item => {
              return item.nome_farmacia == i
            })
          })
          
          resolve({
            mensagem: 'Farmacias disponíveis.',
            dados: data
          })
        }
        console.log(data)
        
    } catch(err) {
        reject({
            mensagem: 'Ocorreu um erro ao buscar as farmácias.',
            erro: err
        })
    }
  })
}