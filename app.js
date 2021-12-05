const express = require("express");
const app = express();
const path = require("path");

app.use(express.static('public'))

app.use(express.urlencoded({extended: false}));

app.use(express.json());
const methodOverride = require('method-override');
app.use(methodOverride('_method'));


 

/* Modularizado de rutas */
const shopCar=require('./routes/shop-car');
const users=require('./routes/users');
const product=require('./routes/product');
const admin = require('./routes/admin');
const main =require('./routes/main');
/* Modularizado de rutas */

app.set('view engine', 'ejs');
app.use('/shop',shopCar)
app.use('/users',users)
app.use('/product',product)
app.use('/admin',admin)

app.use('/',main)
app.use((req, res, next) => {
    res.status(404).render("not-found")
})
app.listen(3000, () => { console.log("Servidor corriendo en el puerto 3000"); });




