const express = require('express');
const path = require('path');
const fs = require("fs");
const dirPath = path.join(__dirname, '../database/products.json');
let listProducts = JSON.parse(fs.readFileSync(dirPath, 'utf-8'));
const homeProducts = listProducts.filter(products => products.luxury == false)

const mainController = {
    index:  (req, res) => {
        res.render("home", { listProducts: homeProducts});
    },
    recetas: (req, res) =>{
        res.render("recipes")
    },
}


module.exports = mainController;