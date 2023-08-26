'use strict'

const { dbConfig, dbQuery, fileRead } = require('../../../config/imports')
const searchUser = fileRead(__dirname, '../sql/searchUser')
const bcrypt = require('bcrypt')

module.exports = (email, password) => {
  return new Promise(async (resolve, reject) => {

    try {
        let user = await dbQuery(dbConfig, searchUser, [email.trim()])
        if(user.length == 0) reject({ mensagem: 'E-mail não encontrado ou inválido.' })

        if(bcrypt.compareSync(password, user[0].password))
            resolve({
                mensagem: 'Usuário logado com sucesso',
                dados: {
                    id: user[0].id,
                    full_name: user[0].full_name,
                    email: user[0].email,
                    permission: user[0].permission
                }
            })
        else
            reject({
                mensagem: 'Senha informada inválida.',
            })
    } catch(err) {
        reject({
            mensagem: 'Ocorreu um erro ao realizar o login.',
            erro: err
        })
    }
  })
}