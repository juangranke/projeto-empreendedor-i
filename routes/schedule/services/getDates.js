/**
 * @swagger
 * /schedule/dates/{specialty}/{idProfessional}:
 *   get:
 *     summary: "Retorna as datas e horários disponíveis do médico."
 *     operationId: getDates
 *     description: "Retorna as datas e horários disponíveis do médico."
 *     tags:
 *      - Schedule
 *     security:
 *       - Apikey: []
 *     responses:
 *       200:
 *         description: Datas disponíveis
 *       400:
 *         description: Parâmetros Inválidos
 *       401:
 *         description: Não Autorizado
 *       404:
 *         description: Erro ao buscar datas disponíveis
 */

'use strict'

const getDates = require('../modules/getDates')

module.exports = (req, res) => {

    getDates(req.params.specialty, req.params.idProfessional)
        .then((data) => {
            return res.status(200).json(data)
        })
        .catch((err) => {
            return res.status(400).json(err)
        })
}