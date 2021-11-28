const express = require('express');
const path = require('path');
const  productController = require('./productController');


const mainController = {
    index:  (req, res) => {
        res.render("home" )
    },
    recetas: (req, res) =>{
        res.render("recipes")
    },
}


module.exports = mainController;