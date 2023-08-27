/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: "Busca as informações de um usuário."
 *     operationId: getUser
 *     description: "Busca as informações de um usuário."
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
 *         description: Informações do usuário
 *       400:
 *         description: Parâmetros Inválidos
 *       401:
 *         description: Não Autorizado
 *       404:
 *         description: Erro ao localizar usuário
 */

'use strict'

const getUser = require('../modules/getUser')

module.exports = (req, res) => {

    getUser(req.params.id)
        .then((data) => {
            return res.status(200).json(data)
        })
        .catch((err) => {
            return res.status(400).json(err)
        })
}