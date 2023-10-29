'use strict'

const { dbConfig, dbQuery, fileRead } = require('../../../config/imports')
const getPhysicalAssessment = fileRead(__dirname, '../sql/getPhysicalAssessment')

module.exports = (id) => {
  return new Promise(async (resolve, reject) => {

    try {
        dbQuery(dbConfig, getPhysicalAssessment, [id])
            .then(data => {
                console.log(data)
                if(data.length > 0) resolve({ mensagem: 'Avaliações físicas.', dados: data })
                else {
                    reject({ mensagem: 'Ocorreu um erro ao buscar as avaliações físicas.'})
                }
            })
            .catch(err => {
                reject({ 
                    mensagem: 'Ocorreu um erro ao buscar as avaliações físicas.',
                    erro: err
                })
            })
    } catch(err) {
        reject({
            mensagem: 'Ocorreu um erro ao buscar as avaliações físicas.',
            erro: err
        })
    }
  })
}