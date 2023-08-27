'use strict'

const { dbConfig, dbQuery, fileRead } = require('../../../config/imports')
const searchUserById = fileRead(__dirname, '../sql/searchUserById')

module.exports = (id) => {
  return new Promise(async (resolve, reject) => {

    try {
        dbQuery(dbConfig, searchUserById, [id])
            .then(data => {
                console.log(data)
                if(data.length > 0) resolve({ mensagem: 'Informações do usuário.', dados: data[0] })
                else resolve({ mensagem: 'Usuário não localizado.', dados: [] })
            })
            .catch(err => {
                reject({ 
                    mensagem: 'Ocorreu um erro ao buscar o usuário.',
                    erro: err
                })
            })
    } catch(err) {
        reject({
            mensagem: 'Ocorreu um erro ao buscar o usuário.',
            erro: err
        })
    }
  })
}