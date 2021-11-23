const express = require('express');
const path = require('path');

const mainController = {
    index:  (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/home.html"))
    },
    recetas: (req, res) =>{
        res.sendFile(path.resolve(__dirname, "../views/recipes.html"))
    },
}


module.exports = mainController;