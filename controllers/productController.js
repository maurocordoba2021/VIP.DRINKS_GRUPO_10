const express = require('express');
const path = require('path');


const productController ={
    detalle:  (req, res) =>{
        res.render("detalle");
    },
    novedades: (req, res) =>{
        res.render("luxury");
    },
    historyProducts:(req, res) =>{
        res.render("history");
    }
}


module.exports = productController;