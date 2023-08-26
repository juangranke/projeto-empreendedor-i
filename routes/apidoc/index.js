const express = require('express')
const router = express.Router()

module.exports = () => {
  const swaggerUi = require('swagger-ui-express')
  const swaggerJSDoc = require('swagger-jsdoc')
  const swaggerDef = require('../../config/swaggerV1')
  const swaggerOptions = {
    definition: swaggerDef,
    apis: swaggerDef.apis
  }
  const swaggerSpec = swaggerJSDoc(swaggerOptions)
  const options = {
    customSiteTitle: 'API Projeto Empreendedor V1',
    customCss: '.swagger-ui .topbar { display: none }',
    customfavIcon: '/favicon.ico',
    explorer: true,
    filter: true,
    docExpansion: 'none',
    swaggerOptions: {
      apisSorter: 'alpha',
      operationsSorter: (a, b) => {
        let methodsOrder = [
          'post',
          'put',
          'patch',
          'delete',
          'get',
          'options',
          'trace'
        ]
        let result =
          methodsOrder.indexOf(a.get('method')) -
          methodsOrder.indexOf(b.get('method'))

        if (result === 0) {
          result = a.get('path').localeCompare(b.get('path'))
        }

        return result
      }
    }
  }

  router.use('/', swaggerUi.serveFiles(swaggerSpec, options))
  router.get('/', swaggerUi.setup(swaggerSpec, options, null, null, null, null, 'projeto-empreendedor-i'))
  return router
}
