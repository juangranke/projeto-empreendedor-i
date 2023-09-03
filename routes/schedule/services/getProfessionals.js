/**
 * @swagger
 * /schedule/professionals/{typeSchedule}/{specialty}:
 *   get:
 *     summary: "Retorna os médicos disponíveis para a especialidade."
 *     operationId: getProfessionals
 *     description: "Retorna os médicos disponíveis para a especialidade."
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
 *         name: specialty
 *         required: true
 *         description: "Nome da especialidade"
 *         schema:
 *           type: string
 *           example: "Clinico Geral"
 *     responses:
 *       200:
 *         description: Profissionais da especialidade
 *       400:
 *         description: Parâmetros Inválidos
 *       401:
 *         description: Não Autorizado
 *       404:
 *         description: Erro ao buscar profissionais
 */

'use strict'

const getProfessionals = require('../modules/getProfessionals')

module.exports = (req, res) => {

    getProfessionals(req.params.typeSchedule, req.params.specialty)
        .then((data) => {
            return res.status(200).json(data)
        })
        .catch((err) => {
            return res.status(400).json(err)
        })
}