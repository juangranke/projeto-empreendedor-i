/**
 * @swagger
 * /schedule/dates/{typeSchedule}/{idSpecialty}/{idProfessional}:
 *   get:
 *     summary: "Retorna as datas e horários disponíveis do médico."
 *     operationId: getDates
 *     description: "Retorna as datas e horários disponíveis do médico."
 *     tags:
 *      - Schedule
 *     security:
 *       - Apikey: []
 *     parameters:
 *       - in: path
 *         name: typeSchedule
 *         required: true
 *         description: "Tipo de agenda"
 *         schema:
 *           type: number
 *           example: 5
 *       - in: path
 *         name: idSpecialty
 *         required: true
 *         description: "Nome da especialidade"
 *         schema:
 *           type: number
 *           example: 1
 *       - in: path
 *         name: idProfessional
 *         required: true
 *         description: "Id do profissional"
 *         schema:
 *           type: number
 *           example: 1
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
    getDates(req.params.typeSchedule, req.params.idSpecialty, req.params.idProfessional)
        .then((data) => {
            return res.status(200).json(data)
        })
        .catch((err) => {
            return res.status(400).json(err)
        })
}