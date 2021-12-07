const express = require('express');
const path = require('path');
const fs = require("fs")
const dirPath = path.join(__dirname, '../database/products.json');
const listProducts = JSON.parse(fs.readFileSync(dirPath, 'utf-8'));
const adminController = {
    index:  (req, res) => {
        res.render("admin");
    },
    create:  (req, res) => {
        res.render("create");
    },
    processForm: (req, res, next) =>{
        let file = req.file
        console.log(file);
        let product = req.body  ;
        console.log(product);

    listProducts.push(product);
    res.redirect('/admin/listEdit');
    },
    listEdit:  (req, res) => {
        res.render("listEdit", {listProducts});
    },
    editProduct:(req, res)=>{
            if (req.params.id) {
                let product = ''
                if (searchInArray(listProducts, req.params.id)) {
                    product = searchInArray(listProducts, req.params.id);
                } else {
                    res.redirect('/admin/create');
                }
        res.render('editProduct', {product})
    }
},
    preview: (req, res)=>{
        res.render("preview")
    }
}


module.exports = adminController;