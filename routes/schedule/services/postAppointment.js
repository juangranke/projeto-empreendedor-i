/**
 * @swagger
 * /schedule/appointment/{typeSchedule}/{idSchedule}/{idPatient}:
 *   post:
 *     summary: "Realiza o agendamento."
 *     operationId: postAppointment
 *     description: "Realiza o agendamento."
 *     tags:
 *      - Schedule
 *     security:
 *       - Apikey: []
 *     responses:
 *       200:
 *         description: Agendamento realizado
 *       400:
 *         description: Parâmetros Inválidos
 *       401:
 *         description: Não Autorizado
 *       404:
 *         description: Erro ao realizar o agendamento
 */

'use strict'

const postAppointment = require('../modules/postAppointment')

module.exports = (req, res) => {

    postAppointment(req.params.typeSchedule, req.params.idSchedule, req.params.idPatient)
        .then((data) => {
            return res.status(200).json(data)
        })
        .catch((err) => {
            return res.status(400).json(err)
        })
}