'use strict'

const { dbConfig, dbQuery, fileRead } = require('../../../config/imports')
const searchUser = fileRead(__dirname, '../sql/searchUser')
const insertUser = fileRead(__dirname, '../sql/insertUser')
const bcrypt = require('bcrypt')
require('../../../lib/validations')

module.exports = (nome_completo, data_nascimento, email, password, permissao) => {
  return new Promise(async (resolve, reject) => {

    if(password.length < 8) reject({ mensagem: 'Por favor, informe uma senha com mais de 8 caracteres.' })
    if(data_nascimento.hasSpace() || email.hasSpace() || password.hasSpace()) 
        reject({ mensagem: "Os campos ['data_nascimento', 'email', 'senha'] não podem conter nenhum espaço." })

    let salt = 10

    try {
        let user = await dbQuery(dbConfig, searchUser, [email.trim()])
        if(user.length > 0) reject({ mensagem: 'Usuário já cadastrado na plataforma.' })
        else {
            dbQuery(dbConfig, insertUser, [nome_completo, data_nascimento, email, bcrypt.hashSync(password, salt), permissao])
                .then(data => {
                    if(data.affectedRows.length > 0)
                        resolve({
                            mensagem: 'Usuário criado com sucesso.'
                        })
                    else reject({ mensagem: 'Ocorreu um erro ao criar o cadastro do usuário.'})
                })
                .catch(err => {
                    console.log(err)
                    reject({ 
                        mensagem: 'Ocorreu um erro ao criar o cadastro do usuário.',
                        erro: err
                    })
                })
        }
    } catch(err) {
        reject({
            mensagem: 'Ocorreu um erro ao criar o cadastro do usuário.',
            erro: err
        })
    }
  })
}