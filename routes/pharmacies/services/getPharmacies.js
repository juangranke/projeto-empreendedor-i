/**
 * @swagger
 * /pharmacies:
 *   get:
 *     summary: "Busca as farmácias disponíveis."
 *     operationId: getPharmacies
 *     description: "Busca as farmácias disponíveis."
 *     tags:
 *      - Pharmacies
 *     security:
 *       - Apikey: []
 *     responses:
 *       200:
 *         description: Farmácias disponíveis
 *       400:
 *         description: Parâmetros Inválidos
 *       401:
 *         description: Não Autorizado
 *       404:
 *         description: Erro ao buscar farmácias
 */

'use strict'

const getPharmacies = require('../modules/getPharmacies')

module.exports = (req, res) => {
    getPharmacies()
        .then((data) => {
            return res.status(200).json(data)
        })
        .catch((err) => {
            return res.status(400).json(err)
        })
}