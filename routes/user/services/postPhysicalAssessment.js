/**
 * @swagger
 * /user/physicalassessment/{id}:
 *   post:
 *     summary: "Salva a avaliação física do usuário."
 *     operationId: postPhysicalAssessment
 *     description: "Salva a avaliação física do usuário."
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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               weigth:
 *                 description: "Peso do usuário"
 *                 type: number
 *                 example: "76.50"
 *               heigth:
 *                 description: "Altura do usuário"
 *                 type: number
 *                 example: "1.80"
 *               fatPercentage:
 *                 description: "Porcentagem de gordura"
 *                 type: number
 *                 example: "20.50"
 *               basalMetabolism:
 *                 description: "Taxa de metabolismo basal"
 *                 type: number
 *                 example: "1600.00"
 *     responses:
 *       200:
 *         description: Avaliação física gravada
 *       400:
 *         description: Parâmetros Inválidos
 *       401:
 *         description: Não Autorizado
 *       404:
 *         description: Erro ao gravar avaliação física
 */

'use strict'

const postPhysicalAssessment = require('../modules/postPhysicalAssessment')

module.exports = (req, res) => {

    postPhysicalAssessment(req.params.id, req.body)
        .then((data) => {
            return res.status(200).json(data)
        })
        .catch((err) => {
            return res.status(400).json(err)
        })
}