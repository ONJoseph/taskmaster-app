const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'TaskMaster API',
      version: '1.0.0',
      description: 'API Documentation for TaskMaster',
    },
  },
  apis: ['./src/routes/*.js'], // Path to route files
};

module.exports = swaggerJsDoc(options);
