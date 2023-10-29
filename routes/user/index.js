const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

const isValidApiKey = require('../../middlewares/isValidApiKey')
const checkBodyFields = require('../../middlewares/checkBodyFields')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Pasta onde os arquivos serão salvos
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext) // Nome do arquivo salvo (timestamp + extensão original)
  },
})
const upload = multer({ storage })

module.exports = () => {

  router.get('/:id', isValidApiKey, require('./services/getUser'))
  router.post('/create', isValidApiKey, checkBodyFields(['full_name', 'birth_date', 'email', 'password', 'permission']), require('./services/createUser'))
  router.delete('/:id', isValidApiKey, require('./services/deleteUser'))

  router.post('/medicalrecord', isValidApiKey, upload.single('pdf'), require('./services/postMedicalRecord'))

  router.post('/physicalassessment/:id', isValidApiKey, require('./services/postPhysicalAssessment'))

  return router
}