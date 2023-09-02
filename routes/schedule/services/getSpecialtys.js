/**
 * @swagger
 * /schedule/specialtys:
 *   get:
 *     summary: "Retorna as especialidades disponíveis."
 *     operationId: getSpecialtys
 *     description: "Retorna as especialidades disponíveis."
 *     tags:
 *      - Schedule
 *     security:
 *       - Apikey: []
 *     responses:
 *       200:
 *         description: Especialidades
 *       400:
 *         description: Parâmetros Inválidos
 *       401:
 *         description: Não Autorizado
 *       404:
 *         description: Erro ao buscar especialidades
 */

'use strict'

const getSpecialtys = require('../modules/getSpecialtys')

module.exports = (req, res) => {

    getSpecialtys()
        .then((data) => {
            return res.status(200).json(data)
        })
        .catch((err) => {
            return res.status(400).json(err)
        })
}