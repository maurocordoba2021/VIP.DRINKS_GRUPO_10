const express = require('express');
const path = require('path');
const listProducts = require("../config/listProducts");
const listLuxury = require('../config/listLuxury');
const mercadopago = require('mercadopago');

const carController ={
    car: (req, res) =>{
        res.render("car")
    },
};


module.exports = carController;