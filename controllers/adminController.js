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
        let product = listProducts[idProduct - 1];

       

        res.render('editProduct', { product });
    },
    processEdit: (req, res) => {
    // 1) Busco index de un objeto (producto) especifico de nuestra lista sin actualizar usando método findIndex
    let productIndex = listProducts.findIndex((product => product.id == req.params.id));
    // 2) Muestro mi producto encontrado antes de actualizar
    console.log("Antes de la edición: ", listProducts[productIndex])
    // 3) Validación de Imágen
        let img
        if (req.file != undefined) {
            img = req.file.filename
        } else {
            img = listProducts[productIndex].img
        }
    // 4) Modifico tipos de datos recibidos
            // Luxury String a booleano
            let value = req.body.luxury
            if (value == "true"){
                value = true
            }else{
                value = false
            }
            // ID String a Number
            let idString = req.params.id;
            let idNumber = parseInt(idString)

    // 5) Actualizo las propiedades de mi objeto
    listProducts[productIndex].id = idNumber,
    listProducts[productIndex].title = req.body.title,
    listProducts[productIndex].price= req.body.price,
    listProducts[productIndex].discount = req.body.discount,
    listProducts[productIndex].shortDescription = req.body.shortDescription,
    listProducts[productIndex].longDescription = req.body.longDescription,
    listProducts[productIndex].stock = req.body.stock,
    listProducts[productIndex].shippingCost = req.body.shippingCost,
    listProducts[productIndex].luxury = value,
    listProducts[productIndex].category = req.body.category,
    listProducts[productIndex].img = img,
    // 6) Muestro por consola mi producto actualizado
    console.log("Luego de la edición: ", listProducts[productIndex])
    // 7) Actualizo JSON
    let nuevaLista = JSON.stringify(listProducts, null, " ");
    fs.writeFileSync(dirPath, nuevaLista, 'utf-8');

    res.redirect('/admin/listEdit')
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
