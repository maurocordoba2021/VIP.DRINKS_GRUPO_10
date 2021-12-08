const express = require('express');
const path = require('path');
const listProducts = require("../database/products.json")
const homeProducts = listProducts.filter(products => products.luxury == false)

const mainController = {
    index:  (req, res) => {
        res.render("home", { homeProducts: homeProducts});
    },
    recetas: (req, res) =>{
        res.render("recipes")
    },
}


module.exports = mainController;