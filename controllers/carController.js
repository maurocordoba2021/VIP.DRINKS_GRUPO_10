const express = require('express');
const path = require('path');
const products = require('../database/products.json')
const productsLuxury = products.filter(luxury => luxury.luxury == true)
const homeProducts = products.filter(homeproduct => homeproduct.luxury == false)
const mercadopago = require('mercadopago');
const db = require('../src/database/models');
const sequelize = db.sequelize;
let idProductsAdded = []

const carController ={
    car: (req, res) =>{
        res.render("car",{listProducts:homeProducts})
    },
    add: (req, res) =>{
        id = req.params.id
        idProductsAdded.push(id)
        console.log(idProductsAdded)
    }
};


module.exports = carController;