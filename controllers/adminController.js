const express = require('express');
const path = require('path');
const fs = require("fs");
const multer = require('multer');
const dirPath = path.join(__dirname, '../database/products.json');
let listProducts = JSON.parse(fs.readFileSync(dirPath, 'utf-8'));



const adminController = {
    index: (req, res) => {
        res.render("admin");
    },
    create: (req, res) => {
        res.render("create");
    },
    processForm: (req, res) => {
        let newProduct = {
            id: listProducts.length + 1,
            title: req.body.title,
            price: req.body.price,
            discount: req.body.discount,
            shortDescription: req.body.shortDescription,
            longDescription: req.body.longDescription,
            stock: req.body.stock,
            shippingCost: req.body.shippingCost,
            luxury: req.body.luxury,
            category: req.body.category,
            img: req.file.filename,
        };
        console.log(newProduct);
        listProducts.push(newProduct);
        let nuevaLista =  JSON.stringify(listProducts, null, " ");
        fs.writeFileSync(dirPath, nuevaLista, 'utf-8')
        res.redirect('/admin/listEdit');
    },
    listEdit: (req, res) => {
        res.render("listEdit", { listProducts });
    },
    editProduct: (req, res) => {
        if (req.params.id) {
            let product = '';
            if (searchInArray(listProducts, req.params.id)) {
                product = searchInArray(listProducts, req.params.id);
            } else {
                res.redirect('/admin/create');
            }
            res.render('editProduct', { product })
        }
    },
    preview: (req, res) => {
        res.render("preview")
    }
}


module.exports = adminController;
