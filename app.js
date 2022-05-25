require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morganBody = require("morgan-body");
const loggerStream = require("./utils/handleLogger");
const dbConnect = require("./config/mongo");
const port = process.env.PORT || 3000;
const app = express();

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

app.use("/api", require("./routes"));

app.listen(port, () => {
    console.log("App is running on port:", port);
});


dbConnect();
