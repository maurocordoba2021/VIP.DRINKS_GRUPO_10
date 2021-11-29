const express = require('express');
const { url } = require('inspector');
const path = require('path');
const listProducts = require("../config/listProducts");
const listLuxury = require('../config/listLuxury')






const productController ={
    detalle:  (req, res) =>{ 
        if(req.params.idProducto){
        let producto = listProducts.find((producto) => producto.idProducto == req.params.idProducto)
        res.render("detalle", {producto: producto, listProducts: listProducts });
    } else{
        res.redirect('/');
    }
},
    novedades: (req, res) =>{
        res.render("luxury",{listLuxury : listLuxury });
    },
    historyProducts:(req, res) =>{
        res.render("history");
    }
}




module.exports = productController;
