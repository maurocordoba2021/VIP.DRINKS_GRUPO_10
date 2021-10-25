const express = require("express");
const app = express();
const path = require("path");
const miRuta =path.resolve(__dirname, "./public");

app.use (express.static(miRuta));

app.listen(2500, () => { console.log("Servidor corriendo en el puerto 2500"); });

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});



