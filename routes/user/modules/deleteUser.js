'use strict'

const { dbConfig, dbQuery, fileRead } = require('../../../config/imports')
const deleteUser = fileRead(__dirname, '../sql/deleteUser')

module.exports = (id) => {
  return new Promise(async (resolve, reject) => {

    try {
        dbQuery(dbConfig, deleteUser, [id])
            .then(data => {
                if(data.affectedRows > 0) resolve({ mensagem: 'Usuário deletado.' })
                else reject({ mensagem: 'Ocorreu um erro ao deletar o usuário.'})
            })
            .catch(err => {
                reject({ 
                    mensagem: 'Ocorreu um erro ao deletar o usuário.',
                    erro: err
                })
            })
    } catch(err) {
        reject({
            mensagem: 'Ocorreu um erro ao deletar o usuário.',
            erro: err
        })
    }
  })
}