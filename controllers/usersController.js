const express = require('express');
const path = require('path');
let listUserJSON = require('../database/users.json');
let listUser = listUserJSON.parse;


const usersController ={
    login: (req, res) =>{
        res.render('login');
    },
    registro:  (req, res) =>{
        res.render('registro');
    },
    procesarFormulario: (req, res, next) =>{
        let file = req.file
        let user = req.body  ;
        if(!file) {
            const error = new Error("No se encontró imagen")   
            error.httpStatusCode = 400  
            return next(error)
    }
     let nuevaLista = listUser.push(user);
     


    res.redirect('/');
    },
}
module.exports = usersController;
