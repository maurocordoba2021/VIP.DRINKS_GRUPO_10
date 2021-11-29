const express = require('express');
const path = require('path');
const listProducts = require("../config/listProducts");
const listLuxury = require('../config/listLuxury');

const carController ={
    car: (req, res) =>{
        res.render("carrito-de-compras")
    },
};

module.exports = carController;