const express = require('express');
const path = require('path');
const listProducts = require("../config/listProducts");


const mainController = {
    index:  (req, res) => {
        res.render("home", { listProducts: listProducts});
    },
    recetas: (req, res) =>{
        res.render("recipes")
    },
}


module.exports = mainController;