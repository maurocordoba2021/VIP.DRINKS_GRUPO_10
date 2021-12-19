const express = require('express');
const path = require('path');
let listUserJSON = require('../database/users.json');
let listUser = listUserJSON.parse;
const { validationResult } = require("express-validator")
const fs = require("fs");
const Users = require('../models/Users');
const bcryptjs = require('bcryptjs');


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
        return  res.render('register', {
               errors: resultValidation.mapped(), // -> convierte array en objeto literal
               oldData: oldData,
           });
        } 

        let userInDB = Users.findByField('email', req.body.email);

        // return res.send(userInDB);

        if(userInDB){
            return  res.render('register', {
               errors: {
                   email: {
                       msg: 'Este email ya está registrado'
                   }
               }
            });
        }

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            imgUser: req.file.originalname
        }

      let userCreated = Users.create(userToCreate);
        return res.redirect('/users/profile');
    }, 
    profile: (req, res)=>{
        res.render('profile');
    }
}
module.exports = usersController;
