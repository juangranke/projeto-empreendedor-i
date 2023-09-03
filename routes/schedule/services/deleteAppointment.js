/**
 * @swagger
 * /schedule/appointment/{idSchedule}:
 *   delete:
 *     summary: "Deleta um agendamento."
 *     operationId: deleteAppointment
 *     description: "Deleta um agendamento."
 *     tags:
 *      - Schedule
 *     security:
 *       - Apikey: []
 *     parameters:
 *       - in: path
 *         name: idSchedule
 *         required: true
 *         description: "Id do agendamento"
 *         schema:
 *           type: number
 *           example: 1
 *     responses:
 *       200:
 *         description: Agendamento deletado
 *       400:
 *         description: Parâmetros Inválidos
 *       401:
 *         description: Não Autorizado
 *       404:
 *         description: Erro ao deletar agendamento
 */

'use strict'

const deleteAppointment = require('../modules/deleteAppointment')

module.exports = (req, res) => {
    deleteAppointment(req.params.idSchedule)
        .then((data) => {
            return res.status(200).json(data)
        })
        .catch((err) => {
            return res.status(400).json(err)
        })
}