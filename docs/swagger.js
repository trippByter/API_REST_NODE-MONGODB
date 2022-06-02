// Importar lib swagger
const swaggerJsdoc = require("swagger-jsdoc");


/**
 * API Config Info
 * 
/**/
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Documentacion de mi API Curso de Node Rest",
    version: "1.0.1",
  },
  // Es para que la documentación haga interacción 
  // con la API - Entornos Test, QA...
  servers: [
    {
      url: "http://localhost:3001/api"
    },
  ],
};

/**
 * Opciones
 * 
/**/
const options = {
  swaggerDefinition,
  // apis -> escanea todos los archivos
  // que terminen en ".js 
  // del directorio "routes"
  apis:[
    "./routes/*.js"
  ]
};

// Instanciamos swaggerJsdoc
const openApiConfiguration = swaggerJsdoc(options);

module.exports = openApiConfiguration;
