const express = require('express');
const { url } = require('inspector');
const fs = require("fs");
const path = require('path');
const mercadopago = require('mercadopago');
const db = require('../src/database/models');
const sequelize = db.sequelize;

//Importamos JSON DB
/* const dirPath = path.join(__dirname, '../database/products.json');
let listProducts = JSON.parse(fs.readFileSync(dirPath, 'utf-8')); */

//Configuración de mercadopago
mercadopago.configure({
    access_token: 'TEST-2074110728450610-112903-13b9da7ab252d6ee2a360d42bb332ca5-176106233'
});

/* function searchInArray(array, value) {
    const prod = array.find((product) => product.id == value);
    return prod;
} */

const productController = {
    detalle: (req, res) => {
        
        db.Product.findByPk(req.params.id)
            .then(product=>{
                res.render('detalle',{product:product})
            })
        /* let idProduct = req.params.id;
        let product= listProducts[idProduct - 1];
        
        console.log(product)

        let preference = {
            items: [
                {
                    title: product.title,
                    unit_price: product.price,
                    quantity: 1,
                }
            ]
        }; */

        /* mercadopago.preferences.create(preference)
            .then(function (response) {
                res.render('detalle', {
                    post: {
                        description: preference.items[0].title,
                        quantity: preference.items[0].quantity,
                        transactionAmount: preference.items[0].unit_price * preference.items[0].quantity,
                        id: response.body.id,
                        init_point: response.body.init_point,
                    },
                    product: product,
                    listProducts: listProducts
                });
            }).catch(function (error) {
                console.log(error);
            }); */
    },
    novedades: (req, res) => {
        db.Product.findAll({
            where: {
                luxury: "true"
            }
        })
        .then(Product=>{
            res.render("luxury",{listProducts:Product})
        })
        .catch(error=>{
            console.log (error)
        })
    }
}

module.exports = productController;
