/**
 * @swagger
 * /pharmacies/medicines:
 *   get:
 *     summary: "Busca os medicamentos."
 *     operationId: getMedicines
 *     description: "Busca os medicamentos."
 *     tags:
 *      - Pharmacies
 *     security:
 *       - Apikey: []
 *     responses:
 *       200:
 *         description: Medicamentos
 *       400:
 *         description: Parâmetros Inválidos
 *       401:
 *         description: Não Autorizado
 *       404:
 *         description: Erro ao buscar os medicamentos
 */

'use strict'

const getMedicines = require('../modules/getMedicines')

module.exports = (req, res) => {
    getMedicines()
        .then((data) => {
            return res.status(200).json(data)
        })
        .catch((err) => {
            return res.status(400).json(err)
        })
}