/**
 * @swagger
 * /user/create:
 *   post:
 *     summary: "Cria um usuário na plataforma."
 *     operationId: postCreateUser
 *     description: "Cria um usuário na plataforma."
 *     tags:
 *      - User
 *     security:
 *       - Apikey: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               full_name:
 *                 description: "Nome do usuário"
 *                 type: string
 *                 example: "João da Silva"
 *               birth_date:
 *                 description: "Data de nascimento"
 *                 type: date
 *                 example: "2001-04-17"
 *               email:
 *                 description: "E-mail do usuário"
 *                 type: string
 *                 example: "joaosilva@gmail.com"
 *               password:
 *                 description: "Senha"
 *                 type: string
 *                 example: "12345678"
 *               permission:
 *                 description: "Permissão do usuário [1-admin/2-medico/3-paciente]"
 *                 type: number
 *                 example: 3
 *     responses:
 *       200:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Parâmetros Inválidos
 *       401:
 *         description: Não Autorizado
 *       404:
 *         description: Erro ao criar usuário
 */

'use strict'

const createUser = require('../modules/createUser')

module.exports = (req, res) => {

    let { full_name, birth_date, email, password, permission } = req.body

    createUser(full_name, birth_date, email, password, permission)
        .then((data) => {
            return res.status(200).json(data)
        })
        .catch((err) => {
            return res.status(400).json(err)
        })
}