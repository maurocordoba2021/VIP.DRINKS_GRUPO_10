const express = require('express');
const path = require('path');
const { validationResult } = require("express-validator")
const fs = require("fs");
const db = require('../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const bcryptjs = require('bcryptjs');


const usersController = {

    register: async (req, res) => {
        res.render('register');
    },
    processForm: async (req, res) => {
       
        const resultValidation = validationResult(req);
        let userExist = await db.User.findOne({
            where: {
                email: { [Op.like]: req.body.email }
            }
        })
        if (!resultValidation.errors.length && !userExist) {
        db.User.create({
                name: req.body.name,
                surname: req.body.surname,
                password: req.body.password,
                img: req.file.filename,
                email: req.body.email,
                birthday: req.body.birthday,
                profile: req.body.profile
            }).then(function(user) {
                req.session.userLogged = user;
                res.redirect("/users/profile")
            })
        } else {
            if (userExist) {
                return res.render('/users/register', {
                    errors: {
                        email: {
                            msg: 'Este email ya está registrado'
                        }
                    },
                    oldData: req.body
            })} else {

                return res.render('/users/register', {
                    errors: resultValidation.mapped(),
                    oldData: req.body
                });
            }
        }
    }
,
    // START LOGIN
    login: (req, res) => {
        res.render('login');
    },
    loginProcess: async (req, res) => {
        let userToLogin = Users.findByField('email', req.body.email);

        if (userToLogin) {
            let passwordVerify = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (passwordVerify) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if (req.body.remember_user) {
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 + 60) * 2 });
                }
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
                    msg: 'Las credenciales son inválidas'
                }
            }
        });
    },
    //START PROFILE
    profile: async (req, res) => {
        return res.render('profile', {
            user: {
                id: req.session.userLogged.id,
                img: req.session.userLogged.img,
                name: req.session.userLogged.name,
                surname: req.session.userLogged.surname,
                email: req.session.userLogged.email
            }
        });
    },
    editUser: (req, res) => {
        res.render('editUser', {
            user: {
                id: req.session.userLogged.id,
                img: req.session.userLogged.img,
                name: req.session.userLogged.name,
                surname: req.session.userLogged.surname,
                email: req.session.userLogged.email
            }
        });
    },
    processEdit: (req, res) => {
        // Estoy intentando procesar la edición de los datos personales 

        /*    let userIndex = Users.findByPk(req.params.id)
            .then(function(){
                let user = listUser[userIndex]
                // 3) Validación de Imágen
                    let img
                    if (req.file != undefined) {
                        img = req.file.filename
                    } else {
                        img = listUser[user.id].img
                    }
                    user.id = user.id; 
                    user.name = req.body.name;
                    user.surname = req.body.surname;
                    user.email = req.body.email;
                        
                // 7) Actualizo JSON
                let nuevaLista = JSON.stringify(listUser, null, " ");
                fs.writeFileSync(dirPath, nuevaLista, 'utf-8');
                return user
            
            }) */

        res.redirect('/users/profile')
    },
    logout: (req, res) => {
        res.clearCookie("userEmail")
        req.session.destroy();
        return res.redirect('/');
    }
}
module.exports = usersController;
