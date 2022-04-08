require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");
const port = process.env.PORT || 3000;
const app = express();

app.use(cors());

// Aquí invocamos las rutas
// localhost/api/...
app.use("/api", require("./routes/"))

app.listen(port, () => {
    console.log("App is running on port:", port);
});


dbConnect()