const express = require('express');
const path = require('path');
const fs = require("fs");
 /* const dirPath = path.join(__dirname, '../database/products.json');
let listProducts = JSON.parse(fs.readFileSync(dirPath, 'utf-8'));
const homeProducts = listProducts.filter(products => products.luxury == false) */
 
const db = require('../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const mainController = {
    listProducts:  (req, res) => {
        db.Product.findAll({
            where: {
                luxury: "false"
            }
        })
        .then(Product=>{
            res.render("listProducts",{listProducts:Product})
        })
        .catch(error=>{
            console.log (error)
        })
    },
    recipes: (req, res) =>{
        
        res.render("recipes")
    },
    index: (req, res) => {
        res.render("home")
    },
    filter: (req, res) => {
        res.render("filter")
    },
    search: (req, res) => {
        db.Product.findAll({
            where: {
                title: {[Op.like]: "%" + req.query.search + "%"}
            }
            
        }).then(resultado =>{
            res.render("listProducts",{listProducts:resultado})
        })
    }
}


module.exports = mainController;