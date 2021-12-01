const express = require('express');
const { url } = require('inspector');
const path = require('path');
const listProducts = require("../config/listProducts");
const listLuxury = require('../config/listLuxury')
const mercadopago = require('mercadopago');

mercadopago.configure({
    access_token: 'TEST-2074110728450610-112903-13b9da7ab252d6ee2a360d42bb332ca5-176106233'
});



const productController ={
    detalle: (req, res) => {
        if (req.params.idProducto) {
            let producto = listProducts.find((producto) => producto.idProducto == req.params.idProducto)
            let preference = {
                items: [
                    {
                        title: producto.nombre,
                        unit_price: producto.precio,
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
                        producto: producto,
                        listProducts: listProducts
                    });
                }).catch(function (error) {
                    console.log(error);
                });
        }else if (req.params.idProducto){
            let combo = listLuxury.find((combo) => combo.idCombo == req.params.idCombo)
            res.render('detalle', {listLuxury: listLuxury})
        } else {
            res.redirect('/');
        }
    },
    novedades: (req, res) =>{
        res.render("luxury",{listLuxury : listLuxury });
    },
    historyProducts:(req, res) =>{
        res.render("history");
    }
}




module.exports = productController;
