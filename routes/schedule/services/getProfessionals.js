/**
 * @swagger
 * /schedule/professionals/{typeSchedule}/{idSpecialty}:
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
 *         name: idSpecialty
 *         required: true
 *         description: "Nome da especialidade"
 *         schema:
 *           type: number
 *           example: 1
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

    getProfessionals(req.params.typeSchedule, req.params.idSpecialty)
        .then((data) => {
            return res.status(200).json(data)
        })
        .catch((err) => {
            return res.status(400).json(err)
        })
}