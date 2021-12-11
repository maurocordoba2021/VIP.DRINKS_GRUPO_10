const express = require('express');
const path = require('path');
const products = require('../database/products.json')
const productsLuxury = products.filter(luxury => luxury.luxury == true)
const homeProducts = products.filter(homeproduct => homeproduct.luxury == false)
const mercadopago = require('mercadopago');

const carController ={
    car: (req, res) =>{
        res.render("car",{listProducts:homeProducts})
    },
};


module.exports = carController;