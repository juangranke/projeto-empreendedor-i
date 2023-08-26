module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'projeto-empreendedor-i-v1 (development)',
    version: '1.0.0',
    description: 'API Projeto Empreendedor v1 - ' + 'Development'
  },
  servers: [
    {
      url: '/v1',
      description: 'Servidor atual'
    },
    {
      url: 'http://localhost:3000/v1',
      description: 'Desenvolvimento'
    }
  ],
  apis: [
    'routes/**/*.js'
  ],
  tags: [
    {
      name: 'Login',
      description: 'Login na plataforma.'
    },
    {
      name: 'User',
      description: 'Ações com o usuário.'
    }
  ],
  consumes: ['application/json'],
  produces: ['application/json'],
  components: {
    securitySchemes: {
      Apikey: {
        type: 'apiKey',
        description: 'Api-Key Authentication',
        name: 'authorization',
        in: 'header',
        schemes: ['http', 'https']
      },
      Bearer: {
        type: 'apiKey',
        description: 'Bearer Authentication',
        name: 'authorization',
        in: 'header',
        schemes: ['http', 'https']
      }
    }
  }
}
