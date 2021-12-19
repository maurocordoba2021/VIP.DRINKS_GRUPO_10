const express = require('express');
const path = require('path');
const multer = require('multer');
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
        let file = req.file;
        let oldData = {
            email: req.body.email,
            userName: req.body.userName,
            password: req.body.password,
            imgUser: file
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
    }, 
    profile: (req, res)=>{
        res.render('profile');
    }
}
module.exports = usersController;
