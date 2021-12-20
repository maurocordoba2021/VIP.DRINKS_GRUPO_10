const express = require("express");
const app = express();
const path = require("path");
const logMiddleware = require('./middlewares/logMiddleware');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));


/* Require de Middlewares */
const shopCar=require('./routes/shop-car');
const users=require('./routes/users');
const product=require('./routes/product');
const admin = require('./routes/admin');
const main =require('./routes/main');
const { format } = require("path");
const session = require("express-session");
const cookies = require('cookie-parser');

/* MIDDLEWARES DE APP */
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}));//Permite capturar info de un formulario via post.
app.use(express.json());
app.use(session({
    secret: "It's a secret",
    resave: false,
    saveUninitialized: false,
}))
app.set('view engine', 'ejs');
app.use(cookies());
app.use(userLoggedMiddleware);

//app.use(logMiddleware);

//Ruteadores 
app.use('/shop',shopCar)
app.use('/users',users)
app.use('/product',product)
app.use('/admin',admin)
app.use('/',main)
app.use((req, res, next) => {
    res.status(404).render("not-found")
});

//CORRIENDO EL SERVIDOR 
app.listen(3000, () => { console.log("----->>>>>   Servidor corriendo en el puerto 3000    <<<<<-----"); });




