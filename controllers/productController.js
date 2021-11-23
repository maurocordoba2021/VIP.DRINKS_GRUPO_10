const express = require('express');
const path = require('path');


const productController ={
    detalle:  (req, res) =>{
        res.sendFile(path.resolve(__dirname, "../views/detalle.html"))
    },
    novedades: (req, res) =>{
        res.sendFile(path.resolve(__dirname, "../views/novelties.html"))
    },
    productos:(req, res) =>{
        res.sendFile(path.resolve(__dirname, "../views/listado-de-productos.html"))
    },
    detalleDeProductos:(req, res) =>{
        res.sendFile(path.resolve(__dirname, "../views/detalle-de-productos.html"))
    }
}


module.exports = productController;