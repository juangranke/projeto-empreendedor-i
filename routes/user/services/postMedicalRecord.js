/**
 * @swagger
 * /user/medicalrecord:
 *   post:
 *     summary: "Salva o prontuário enviado pelo paciente."
 *     operationId: postMedicalRecord
 *     description: "Salva o prontuário enviado pelo paciente."
 *     tags:
 *      - User
 *     security:
 *       - Apikey: []
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: pdf
 *         type: file
 *         required: true
 *         description: "Arquivo PDF do prontuário médico"
 *     responses:
 *       200:
 *         description: Prontuário salvo
 *       400:
 *         description: Parâmetros Inválidos
 *       401:
 *         description: Não Autorizado
 *       404:
 *         description: Erro ao salvar prontuário
 */

'use strict'

module.exports = (req, res) => {
    try {
        return res.status(200).json({
            mensagem: 'Prontuário importado.'
        })
    } catch(err) {
        return res.status(400).json({
            mensagem: 'Ocorreu um erro ao importar o prontuário.'
        })
    }
}