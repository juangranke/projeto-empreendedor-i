/**
 * @swagger
 * /hospitals:
 *   get:
 *     summary: "Busca os hospitais disponíveis."
 *     operationId: getHospitals
 *     description: "Busca os hospitais disponíveis."
 *     tags:
 *      - Hospitals
 *     security:
 *       - Apikey: []
 *     responses:
 *       200:
 *         description: Hospitais disponíveis
 *       400:
 *         description: Parâmetros Inválidos
 *       401:
 *         description: Não Autorizado
 *       404:
 *         description: Erro ao buscar os hospitais disponíveis
 */

'use strict'

const getHospitals = require('../modules/getHospitals')

module.exports = (req, res) => {
    getHospitals()
        .then((data) => {
            return res.status(200).json(data)
        })
        .catch((err) => {
            return res.status(400).json(err)
        })
}