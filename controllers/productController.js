const express = require('express');
const { url } = require('inspector');
const path = require('path');
const mercadopago = require('mercadopago');
const products = require('../database/products.json')
const productsLuxury = products.filter(luxury => luxury.luxury == true)
const homeProducts = products.filter(homeproduct => homeproduct.luxury == false)
mercadopago.configure({
    access_token: 'TEST-2074110728450610-112903-13b9da7ab252d6ee2a360d42bb332ca5-176106233'
});

function searchInArray(array, value) {
    const prod = array.find((product) => product.id == value);
    return prod;
}

const productController ={
    detalle: (req, res) => {
        if (req.params.id) {
            let product
            if (searchInArray(homeProducts, req.params.id)) {
                product = searchInArray(homeProducts, req.params.id);
            } else if (searchInArray(productsLuxury, req.params.id)) {
                product = searchInArray(productsLuxury, req.params.id);
            } else {
                res.redirect('/');
            }
            let preference = {
                items: [
                    {
                        title: product.title,
                        unit_price: product.price,
                        quantity: 1,
                    }
                ]
            };

            mercadopago.preferences.create(preference)
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
                });
        } else {
            res.redirect('/');
        }
    },
    novedades: (req, res) =>{
        res.render("luxury",{productsLuxury : productsLuxury });
    }
}




module.exports = productController;
