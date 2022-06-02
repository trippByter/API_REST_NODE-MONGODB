require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const openApiConfiguration = require("./docs/swagger");
const morganBody = require("morgan-body");
const loggerStream = require("./utils/handleLogger");
const dbConnectNoSql = require("./config/mongo");
const {dbConnectMySql} = require("./config/mysql");
const port = process.env.PORT || 3000;
const app = express();
// Usamos motor de base de datos
const ENGINE_DB = process.env.ENGINE_DB;

app.use(cors());
// Línea para usar solicitudes json
app.use(express.json());
// Los recursos estáticos, públicos
// se toman de "storage";
app.use(express.static("storage"));


// Usamos morgan-body
morganBody(app, {
  // Limpiamos los datos
  noColors: true,
  stream: loggerStream,
  // Este SKIP omite los status code menores a 400
  skip: function(req, res){
    return res.statusCode < 400
  }
});


/**
 * Definimos ruta de documentación
/**/
app.use("/docs", 
  swaggerUI.serve, 
  swaggerUI.setup(openApiConfiguration)
);

// Invocamos las rutas
app.use("/api", require("./routes"));

app.listen(port, () => {
    console.log("App is running on port:", port);
});

// Usamos operador ternario para condicionar
// uso de motor de base de datos
(ENGINE_DB === "nosql") ? dbConnectNoSql() : dbConnectMySql();
