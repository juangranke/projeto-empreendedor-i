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
      url: 'https://191.252.109.162/v1',
      description: 'Produção'
    },
    {
      url: 'http://localhost:3000/v1',
      description: 'Desenvolvimento'
    }
  ],
  apis: [
    'src/app/v1/**/*.js',
    'src/schemas/**/*.yml'
  ],
  tags: [
    {
      name: 'Login',
      description: 'Login na plataforma.'
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
