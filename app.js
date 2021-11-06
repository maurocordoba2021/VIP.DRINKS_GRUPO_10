const express = require("express");
const app = express();
const path = require("path");
const miRuta =path.resolve(__dirname, "./public");

app.use (express.static(miRuta));

app.listen(3000, () => { console.log("Servidor corriendo en el puerto 3000"); });

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.post("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/registro.html"))
})

app.get("/detalle-de-productos", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/detalle-de-productos.html"))
});
app.get("/login", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});
app.get("/clase15", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/formulario-clase15.html"))
});
app.get("/carrito-de-compras", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/carrito-de-compras.html"))
});
app.get("/productos", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/listado-de-productos.html"))
});
app.get("/contacto", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/contacto.html"))
});
app.get("/nosotros", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/nosotros.html"))
});
app.get("/terminos-y-condiciones", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/terminos-y-condiciones.html"))
});
app.get("/novedades", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/novelties.html"))
});
app.get("/recetas", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/recipes.html"))
});
app.get("/perfil", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/profile.html"))
});
app.get("/registro", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/registro.html"))
});
app.get("/metodos-de-pago", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/metodos-de-pago.html"))
});

