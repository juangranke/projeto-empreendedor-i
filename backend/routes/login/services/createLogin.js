/**
 * @swagger
 * /login/create:
 *   post:
 *     summary: "Cria um usuário na plataforma."
 *     operationId: postCreateLogin
 *     description: "Cria um usuário na plataforma."
 *     tags:
 *      - Login
 *     security:
 *       - Apikey: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_completo:
 *                 description: "Nome do usuário"
 *                 type: string
 *                 example: "João da Silva"
 *               data_nascimento:
 *                 description: "Data de nascimento"
 *                 type: date
 *                 example: "2001-04-17"
 *               email:
 *                 description: "E-mail do usuário"
 *                 type: string
 *                 example: "joaosilva@gmail."
 *               senha:
 *                 description: "Senha"
 *                 type: string
 *                 example: "12345678"
 *               permissao:
 *                 description: "Permissão do usuário [1-admin/2-medico/3-paciente]"
 *                 type: number
 *                 example: "12345678"
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

const createLogin = require('../modules/createLogin')

module.exports = (req, res) => {

    let { nome_completo, data_nascimento, email, password, permissao } = req.body

    createLogin(nome_completo, data_nascimento, email, password, permissao)
        .then((data) => {
            return res.status(200).json(data)
        })
        .catch((err) => {
            return res.status(400).json(err)
        })
}