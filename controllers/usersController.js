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
                password: bcryptjs.hashSync(req.body.password, 10),
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
                return res.render('register', {
                    errors: {
                        email: {
                            msg: 'Este email ya está registrado'
                        }
                    },
                    oldData: req.body
            })} else {

                return res.render('register', {
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
        let userToLogin = await db.User.findOne({
            where: {
                email: { [Op.like]: req.body.email }
            }
        })
        if (userToLogin) {
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (isOkThePassword) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if (req.body.remember_user) {
                    res.cookie('userEmail', req.body.email, { maxAge: 5 * 60 * 1000 });
                }

                return res.redirect('profile');
            } else {
                res.render("login", {
                    titulo: "Ingresá", old: req.body, errors: {
                        email: {
                            msg: "Las credenciales son invalidas"
                        }
                    }
                })
            }

        } else { //si no se encuentra el mail, volvemos a renderizar la vista de login con mensaje de error
            res.render("login", {
                titulo: "Ingresá", errors: {
                    email: {
                        msg: "El usuario no se encuentra en la base de datos"
                    }
                }
            })
        }
    },
    //START PROFILE
    profile: async (req, res) => {
        return res.render('profile', {
            user: {
                id: req.session.userLogged.idUsers,
                img: req.session.userLogged.img,
                name: req.session.userLogged.name,
                surname: req.session.userLogged.surname,
                email: req.session.userLogged.email
            }
        });
    },
    editUser: (req, res) => {
        res.render('editUser', {
            user: req.session.userLogged
        })
    },

    processEdit: (req, res) => {
        db.User.findByPk(req.session.userLogged.idUsers)
            .then(function (user) {
                user.update({
                    name: req.body.name,
                    surname: req.body.surname,
                    password: bcryptjs.hashSync(req.body.password,10),
                    img: req.file.filename,
                    email: req.body.email,
                    birthday: req.body.birthday,
                    profile: req.body.profile
                }
                ).then(user => {
                    req.session.userLogged = user;
                    res.redirect("/")
                }).catch(function(e){
                    res.render(e)
                });
            })
    },
    logout: (req, res) => {
        res.clearCookie("userEmail")
        req.session.destroy();
        return res.redirect('/');
    }
}
module.exports = usersController;
