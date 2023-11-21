'use strict'

const { dbConfig, dbQuery, fileRead } = require('../../../config/imports')
const searchUser = fileRead(__dirname, '../../login/sql/searchUser')
const insertUser = fileRead(__dirname, '../sql/insertUser')
const bcrypt = require('bcrypt')
require('../../../lib/validations')

module.exports = (full_name, birth_date, email, password, permission) => {
  return new Promise(async (resolve, reject) => {

    if(password.length < 8) reject({ mensagem: 'Por favor, informe uma senha com mais de 8 caracteres.' })
    if(birth_date.hasSpace() || email.hasSpace() || password.hasSpace()) 
        reject({ mensagem: "Os campos ['birth_date', 'email', 'password'] não podem conter nenhum espaço." })

    let salt = 10

    try {
        let user = await dbQuery(dbConfig, searchUser, [email.trim()])
        if(user.length > 0) reject({ mensagem: 'Usuário já cadastrado na plataforma.' })
        else {
            dbQuery(dbConfig, insertUser, [full_name, birth_date, email, bcrypt.hashSync(password, salt), permission])
                .then(data => {
                    if(data.affectedRows > 0) resolve({ mensagem: 'Usuário criado com sucesso.' })
                    else {
                        console.log(26, 'Erro genérico', data)
                        reject({ mensagem: 'Ocorreu um erro ao criar o cadastro do usuário.'})
                    }
                })
                .catch(err => {
                    console.log(31, err)
                    reject({ 
                        mensagem: 'Ocorreu um erro ao criar o cadastro do usuário.',
                        erro: err
                    })
                })
        }
    } catch(err) {
        console.log(39, err)
        reject({
            mensagem: 'Ocorreu um erro ao criar o cadastro do usuário.',
            erro: err
        })
    }
  })
}