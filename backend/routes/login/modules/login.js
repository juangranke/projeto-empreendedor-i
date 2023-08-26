'use strict'

const { dbConfig, dbQuery, fileRead, moment } = require('../../../config/imports')
const searchUser = fileRead(__dirname, '../sql/searchUser')
const bcrypt = require('bcrypt')

module.exports = (email, senha) => {
  return new Promise(async (resolve, reject) => {

    try {
        let user = await dbQuery(dbConfig, searchUser, [email.trim()])
        if(user.length == 0) reject({ mensagem: 'E-mail não encontrado ou inválido.' })

        if(bcrypt.compareSync(senha, user[0].password))
            resolve({
                mensagem: 'Usuário logado com sucesso',
                dados: {
                    id: user[0].id,
                    nome_completo: user[0].nome_completo,
                    email: user[0].email,
                    permissao: user[0].permissao
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