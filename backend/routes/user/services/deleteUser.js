/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: "Deleta um usuário."
 *     operationId: DeleteUser
 *     description: "Deleta um usuário."
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
 *         description: Usuário deletado
 *       400:
 *         description: Parâmetros Inválidos
 *       401:
 *         description: Não Autorizado
 *       404:
 *         description: Erro ao deletar usuário
 */

'use strict'

const deleteUser = require('../modules/deleteUser')

module.exports = (req, res) => {

    deleteUser(req.params.id)
        .then((data) => {
            return res.status(200).json(data)
        })
        .catch((err) => {
            return res.status(400).json(err)
        })
}