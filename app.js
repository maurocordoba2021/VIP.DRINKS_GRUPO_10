const express = require("express");
const app = express();
const path = require("path");
const miRuta =path.resolve(__dirname, "./public");

/* Modularizado de rutas */
const shopCar=require('./routes/shop-car')
const user=require('./routes/User')
const product=require('./routes/product')
const main =require('./routes/main')
/* Modularizado de rutas */

app.set('view engine', 'ejs');
app.use (express.static(miRuta));
app.use('/',shopCar)
app.use('/',user)
app.use('/',product)
app.use('/',main)
app.listen(3000, () => { console.log("Servidor corriendo en el puerto 3000"); });




