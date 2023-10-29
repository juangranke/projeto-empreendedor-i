'use strict'

const { dbConfig, dbQuery, fileRead } = require('../../../config/imports')
const postPhysicalAssessment = fileRead(__dirname, '../sql/postPhysicalAssessment')

module.exports = (id, params) => {
  return new Promise(async (resolve, reject) => {

    try {
        dbQuery(dbConfig, postPhysicalAssessment, [id, params.weigth, params.heigth, params.fatPercentage, params.basalMetabolism])
            .then(data => {
                if(data.affectedRows > 0) resolve({ mensagem: 'Avaliação física gravada com sucesso.' })
                else {
                    reject({ mensagem: 'Ocorreu um erro ao gravar a avaliação física.'})
                }
            })
            .catch(err => {
                reject({ 
                    mensagem: 'Ocorreu um erro ao gravar a avaliação física.',
                    erro: err
                })
            })
    } catch(err) {
        reject({
            mensagem: 'Ocorreu um erro ao gravar a avaliação física.',
            erro: err
        })
    }
  })
}