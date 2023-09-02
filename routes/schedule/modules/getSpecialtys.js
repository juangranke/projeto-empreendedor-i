'use strict'

const { dbConfig, dbQuery, fileRead } = require('../../../config/imports')
const searchSpecialtys = fileRead(__dirname, '../../schedule/sql/searchSpecialtys')

module.exports = () => {
  return new Promise(async (resolve, reject) => {
    try {
        let specialtys = await dbQuery(dbConfig, searchSpecialtys)
        let dataSpecialtys = specialtys.map(item => item.especialidade)

        resolve({
            mensagem: 'Especialidades com agenda disponível.',
            dados: dataSpecialtys
        })

    } catch(err) {
        reject({
            mensagem: 'Ocorreu um erro ao buscar as agendas disponíveis.',
            erro: err
        })
    }
  })
}