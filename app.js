const express = require("express");
const app = express();
const path = require("path");
const logMiddleware = require('./controllers/middlewares/logMiddleware');

const methodOverride = require('method-override');
app.use(methodOverride('_method'));


/* Modularizado de rutas */
const shopCar=require('./routes/shop-car');
const users=require('./routes/users');
const product=require('./routes/product');
const admin = require('./routes/admin');
const main =require('./routes/main');
const { format } = require("path");
/* Modularizado de rutas */

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}));//Permite capturar info de un formulario via post.
app.use(express.json());
app.set('view engine', 'ejs');
//app.use(logMiddleware);
app.use('/shop',shopCar)
app.use('/users',users)
app.use('/product',product)
app.use('/admin',admin)
app.use('/',main)
app.use((req, res, next) => {
    res.status(404).render("not-found")
});


app.listen(3000, () => { console.log("----->>>>>   Servidor corriendo en el puerto 3000    <<<<<-----"); });




