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
        let id = req.params.id;
        res.render('create', {})
    },
}

module.exports = adminController;