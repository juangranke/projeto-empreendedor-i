/**
 * @swagger
 * /schedule/appointment/{idSchedule}/{idUser}:
 *   post:
 *     summary: "Realiza o agendamento."
 *     operationId: postAppointment
 *     description: "Realiza o agendamento."
 *     tags:
 *      - Schedule
 *     security:
 *       - Apikey: []
 *     parameters:
 *       - in: path
 *         name: idSchedule
 *         required: true
 *         description: "ID da agenda"
 *         schema:
 *           type: number
 *           example: 5
 *       - in: path
 *         name: idUser
 *         required: true
 *         description: "ID do usuário"
 *         schema:
 *           type: number
 *           example: 5
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

    postAppointment(req.params.idSchedule, req.params.idUser)
        .then((data) => {
            return res.status(200).json(data)
        })
        .catch((err) => {
            return res.status(400).json(err)
        })
}