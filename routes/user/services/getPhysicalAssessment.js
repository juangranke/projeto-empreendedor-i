/**
 * @swagger
 * /user/physicalassessment/{id}:
 *   get:
 *     summary: "Busca as avaliações físicas do usuário."
 *     operationId: getPhysicalAssessment
 *     description: "Busca as avaliações físicas do usuário."
 *     tags:
 *      - User
 *     security:
 *       - Apikey: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID do usuário"
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Sucesso ao buscar avaliações físicas
 *       400:
 *         description: Parâmetros Inválidos
 *       401:
 *         description: Não Autorizado
 *       404:
 *         description: Erro ao buscar avalicações físicas
 */

'use strict'

const getPhysicalAssessment = require('../modules/getPhysicalAssessment')

module.exports = (req, res) => {

    getPhysicalAssessment(req.params.id)
        .then((data) => {
            return res.status(200).json(data)
        })
        .catch((err) => {
            return res.status(400).json(err)
        })
}