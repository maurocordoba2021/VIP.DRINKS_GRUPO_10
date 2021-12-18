const express = require('express');
const path = require('path');
let listUserJSON = require('../database/users.json');
let listUser = listUserJSON.parse;
const { validationResult } = require("express-validator")
const fs = require("fs");

const usersController ={
    login: (req, res) =>{
        res.render('login');
    },
    register: async (req, res) =>{
        res.render('register');
    },
    processForm: (req, res) =>{
        let oldData = {
            email: req.body.email,
            userName: req.body.userName,
            password: req.body.password,
        }
        const resultValidation = validationResult(req)
        if (resultValidation.errors.length > 0) {
        res.render('register', {
               errors: resultValidation.mapped(), // -> convierte array en objeto literal
               oldData: oldData,
           })
        } else{
            res.redirect('/listProducts')
        }
           console.log(oldData);
        },
    
    processImgForm: (req, res, next) =>{
        let file = req.file;
        let user = req.body;
        if(!file) {
            const error = new Error("No se encontró imagen")   
            error.httpStatusCode = 400  
            return next(error)
    }
     let nuevaLista = listUser.push(user);
    res.redirect('/');
    },
    profile: (req, res)=>{
        res.render('profile');
    }
}
module.exports = usersController;
