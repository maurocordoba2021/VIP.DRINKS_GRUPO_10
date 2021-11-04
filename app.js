const express = require("express");
const app = express();
const path = require("path");
const miRuta =path.resolve(__dirname, "./public");

app.use (express.static(miRuta));

app.listen(2500, () => { console.log("Servidor corriendo en el puerto 2500"); });

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/registro.html"))
})

app.get("/detalle-de-productos", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/detalle-de-productos.html"))
});
app.get("/Ingreso", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/fecha-de-nacimiento.html"))
});

