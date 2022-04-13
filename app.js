require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");
const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
// Línea para usar solicitudes json
app.use(express.json());

app.use("/api", require("./routes"));

app.listen(port, () => {
    console.log("App is running on port:", port);
});


dbConnect();