/**
 * @swagger
 * /schedule/appointments/{typeSchedule}/{idUser}:
 *   get:
 *     summary: "Retorna os agendamentos do usuário."
 *     operationId: getAppointments
 *     description: "Retorna os agendamentos do usuário."
 *     tags:
 *      - Schedule
 *     security:
 *       - Apikey: []
 *     parameters:
 *       - in: path
 *         name: idUser
 *         required: true
 *         description: "Id do usuário"
 *         schema:
 *           type: number
 *           example: 1
 *       - in: path
 *         name: typeSchedule
 *         required: true
 *         description: "Id do tipo de agenda"
 *         schema:
 *           type: number
 *           example: 1
 *     responses:
 *       200:
 *         description: Agendamentos
 *       400:
 *         description: Parâmetros Inválidos
 *       401:
 *         description: Não Autorizado
 *       404:
 *         description: Erro ao buscar os agendamentos do usuário
 */

'use strict'

const getAppointments = require('../modules/getAppointments')

module.exports = (req, res) => {
    getAppointments(req.params.typeSchedule, req.params.idUser)
        .then((data) => {
            return res.status(200).json(data)
        })
        .catch((err) => {
            return res.status(400).json(err)
        })
}