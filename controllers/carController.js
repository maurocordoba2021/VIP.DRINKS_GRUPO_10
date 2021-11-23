const express = require('express');
const path = require('path');

const carController ={
    car: (req, res) =>{
        res.sendFile(path.resolve(__dirname, "../views/carrito-de-compras.html"))
    },
};

module.exports = carController;