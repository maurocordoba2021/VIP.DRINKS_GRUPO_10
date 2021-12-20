const express = require('express');
const path = require('path');
const fs = require("fs");
const dirPath = path.join(__dirname, '../database/products.json');
let listProducts = JSON.parse(fs.readFileSync(dirPath, 'utf-8'));
const homeProducts = listProducts.filter(products => products.luxury == false)

const mainController = {
    listProducts:  (req, res) => {
        res.render("listProducts", { listProducts: homeProducts});
    },
    recipes: (req, res) =>{
        
        res.render("recipes")
    },
    index: (req, res) => {
        res.render("home")
    }
}


module.exports = mainController;