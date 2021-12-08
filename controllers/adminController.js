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
        let nuevaLista = JSON.stringify(listProducts, null, " ");
        fs.writeFileSync(dirPath, nuevaLista, 'utf-8')
        res.redirect('/admin/listEdit');
    },
    listEdit: (req, res) => {
        res.render("listEdit", { listProducts });
    },
    editProduct: (req, res) => {
        let idProduct = req.params.id;
        let product= listProducts[idProduct - 1];
        
        console.log(product)

        res.render('editProduct', {product});
    },
    proccesEdit: (req, res) => {
        let idProduct = req.params.id;
        let product= listProducts[idProduct - 1];
         let productEdited = {
            id: product.id,
            title: req.body.title,
            price: req.body.price,
            discount: req.body.discount,
            shortDescription: req.body.shortDescription,
            longDescription: req.body.longDescription,
            stock: req.body.stock,
            shippingCost: req.body.shippingCost,
            luxury: req.body.luxury,
            category: req.body.category,
            img: product.img,
        };
        console.log(productEdited);

        let pos = listProducts.indexOf(idProduct);
        listProducts.splice(pos, 1);
        
        listProducts.push(productEdited);

        console.log(listProducts);
        
        let nuevaLista = JSON.stringify(listProducts, null, " ");
        fs.writeFileSync(dirPath, nuevaLista, 'utf-8');
        
        res.send('Avanza el proceso de edición')
    },
    delete: (req, res) => {
        let idProduct = req.params.id
        console.log(idProduct);
        let pos = listProducts.indexOf(idProduct);

        listProducts.splice(pos, 1);

        let nuevaLista = JSON.stringify(listProducts, null, " ");
        fs.writeFileSync(dirPath, nuevaLista, 'utf-8');
        res.render('deletedProduct', { idProduct });
    },
    preview: (req, res) => {

        res.render("preview")
    },
    listUsers: (req, res) => {
        res.send('Acá va a estar el listado de usuarios!')
    }
}


module.exports = adminController;
