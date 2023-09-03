/**
 * @swagger
 * /schedule/specialtys/{typeSchedule}:
 *   get:
 *     summary: "Retorna as especialidades disponíveis."
 *     operationId: getSpecialtys
 *     description: "Retorna as especialidades disponíveis."
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

    getSpecialtys(req.params.typeSchedule)
        .then((data) => {
            return res.status(200).json(data)
        })
        .catch((err) => {
            return res.status(400).json(err)
        })
}