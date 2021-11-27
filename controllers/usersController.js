const express = require('express');
const path = require('path');

const usersController ={
    login: (req, res) =>{
        res.render('login');
    },
    perfil: (req, res) =>{
        res.render('profile');
    },
    registro:  (req, res) =>{
        res.render('registro');
    },
    upload: (req, res) => {
        res.render('products-upload');
    }
}
module.exports = usersController;