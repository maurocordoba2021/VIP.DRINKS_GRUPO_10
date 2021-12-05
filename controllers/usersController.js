const express = require('express');
const path = require('path');

const usersController ={
    login: (req, res) =>{
        res.render('login');
    },
    registro:  (req, res) =>{
        res.render('registro');
    },
    procesarFormulario: (req, res, next) =>{
        let file = req.file
        let users = req.body  ;
        if(!file) {
            const error = new Error("No se encontró imagen")   
            error.httpStatusCode = 400  
            return next(error)
    }
    res.redirect("login")
    },
}
module.exports = usersController;
