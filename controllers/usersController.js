const express = require('express');
const path = require('path');

const usersController ={
    login: (req, res) =>{
        res.sendFile(path.resolve(__dirname, "../views/login.html"))
    },
    perfil: (req, res) =>{
        res.sendFile(path.resolve(__dirname, "../views/profile.html"))
    },
    registro:  (req, res) =>{
        res.sendFile(path.resolve(__dirname, "../views/registro.html"))
    },
}
module.exports = usersController;