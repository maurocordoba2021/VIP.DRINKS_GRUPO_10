const express = require('express');
const path = require('path');
const listProducts = require("../config/listProducts");
const listLuxury = require('../config/listLuxury');
const adminController = {
    index:  (req, res) => {
        res.render("admin");
    },
    create:  (req, res) => {
        res.render("create");
    },
    listEdit:  (req, res) => {
        res.render("listEdit", {listProducts, listLuxury});
    },
    editProduct:(req, res)=>{
            if (req.params.id) {
                let product = ''
                if (searchInArray(listProducts, req.params.id)) {
                    product = searchInArray(listProducts, req.params.id);
                } else if (searchInArray(listLuxury, req.params.id)) {
                    product = searchInArray(listLuxury, req.params.id);
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