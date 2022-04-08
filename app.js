require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");
const port = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.listen(port, () => {
    console.log("App is running on port:", port);
});

// Usamos la exportación del dbConnect
dbConnect()