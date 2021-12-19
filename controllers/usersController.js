const express = require('express');
const path = require('path');
let listUserJSON = require('../database/users.json');
let listUser = listUserJSON.parse;
const { validationResult } = require("express-validator")
const fs = require("fs");
const Users = require('../models/Users');
const bcryptjs = require('bcryptjs');


const usersController ={
   
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
            imgUser: req.file.filename
        }

      let userCreated = Users.create(userToCreate);
        return res.redirect('/users/profile');
    }, 
    // START LOGIN
    login: (req, res) =>{
        res.render('login');
    },
    loginProcess: (req, res) =>{
      let userToLogin = Users.findByField('email', req.body.email);

      if(userToLogin){
          let passwordVerify = bcryptjs.compareSync(req.body.password, userToLogin.password);
          if(passwordVerify){
              delete userToLogin.password;
            req.session.userLogged = userToLogin;
            return res.redirect('/users/profile');
          }  
           return res.render('login', {
            errors: {
                password: {
                    msg: 'La contraseña es incorrecta'
                }
            }, 
            oldData: req.body
        });

  
      }
      return res.render('login', {
          errors: {
              email: {
                  msg: 'Las credenciales no son válidas'
              }
          }
      });
    },
//START PROFILE
    profile: async(req, res)=>{
        return res.render('profile', {
            user: {
                imgUser:  req.session.userLogged.imgUser,
                userName: req.session.userLogged.userName,
        }});

    },
}
module.exports = usersController;
