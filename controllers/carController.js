const express = require('express');
const path = require('path');

const carController ={
    car: (req, res) =>{
        res.render("carrito-de-compras")
    },
};

module.exports = carController;