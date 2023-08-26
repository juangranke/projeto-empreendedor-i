/**
 * @swagger
 * /login:
 *   post:
 *     summary: "Realiza o login na plataforma."
 *     operationId: postLogin
 *     description: "Realiza o login na plataforma."
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
 *               email:
 *                 description: "E-mail do usuário"
 *                 type: string
 *                 example: "joaosilva@gmail.com"
 *               password:
 *                 description: "Senha"
 *                 type: string
 *                 example: "12345678"
 *     responses:
 *       200:
 *         description: Login efetuado
 *       400:
 *         description: Parâmetros Inválidos
 *       401:
 *         description: Não Autorizado
 *       404:
 *         description: Usuário não encontrado
 */

'use strict'

const login = require('../modules/login')

module.exports = (req, res) => {
    login(req.body.email, req.body.password)
        .then((data) => {
            return res.status(200).json(data)
        })
        .catch((err) => {
            return res.status(400).json(err)
        })
}